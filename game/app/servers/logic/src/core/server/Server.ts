import { PlayerModel } from '../../../../../../../common/sequelize/model/game/PlayerModel';
import { RoleModel } from '../../../../../../../common/sequelize/model/platform/RoleModel';
import { UserModel } from '../../../../../../../common/sequelize/model/platform/UserModel';
import { ServerPto, SystemPto } from '../../../../../../../common/proto/CommonProto';
import { GlobalVar } from '../../GlobalVar';
import { LogicSession } from '../session/LogicSession';
import { ProtoBufEncoder } from '../../../../../../../common/proto/ProtoBufEncoder';
import { Player } from '../player/Player';
import { BlockModel } from '../../../../../../../common/sequelize/model/platform/BlockModel';
import { TimeMgr } from '../../../../../core/utils/TimeMgr';
import { EventEnum } from '../../../../../Enum';
import { PlayerUtils } from '../../../../../../../common/utils/PlayerUtils';
import { PlayerComponent } from '../component/PlayerComponent';
import { Cfg } from '../../../../../core/config/Cfg';

export class Server {
    serverId: number;

    private _playerMapForUserId = new Map<string, Player>();

    private _playerMapForUUid = new Map<string, Player>();

    constructor(serverId: number) {
        this.serverId = serverId;
    }

    broadcast(msg: IGameMessage) {
        this.broadcastBuffer(ProtoBufEncoder.encode(msg));
    }

    broadcastBuffer(buffer: Buffer) {
        this._playerMapForUserId.forEach((player) => {
            player.sendBuffer(buffer);
        });
    }

    /** 清理没有session的玩家 */
    clearPlayers() {
        this._playerMapForUserId.forEach((player) => {
            if (player.session) {
                return;
            }

            if (player.nextClearFlag === true) {
                this.playerDispose(player);
            } else {
                player.nextClearFlag = true;
            }
        });
    }

    /** 服务器状态检查 */
    checkServerStatus() {
        if (this.isServerOpenStatus() === false) {
            this.kickAllPlayer('服务器维护');
            this.clearOfflinePlayersImmediate();
        }
    }

    /** 清理掉所有离线的玩家 */
    clearOfflinePlayersImmediate() {
        logger.info(`服务器[${this.serverId}]清理掉所有离线的玩家(${this._playerMapForUserId.size}人)`);
        // 通过执行两次clearServerPlayers,把内存中暂时缓存的不在线player清空
        this.clearPlayers();
        this.clearPlayers();
    }

    /** 是否允许进入服务器 */
    async allowToEnter(session: LogicSession) {
        // 是否开服
        if (this.isOpen() === false) {
            session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 1 } }));
            return false;
        }

        // 服务器是否是开启状态
        if (this.isServerOpenStatus() === false && await this.isWhiteUser(session) === false) {
            session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 3 } }));
            return false;
        }

        // 被封禁
        if ((await this.isBlock(session.uuid)) === true) {
            session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 5 } }));
            return false;
        }
        return true;
    }

    async enterServer(session: LogicSession, isRecovery: boolean) {
        const player = this._playerMapForUUid.get(session.uuid);
        if (player) {
            // 存在用户信息的情况下
            player.nextClearFlag = false;
            // 其他设备登陆时
            // 或者少数情况下重连时的新socket会比socket断开事件先处理,导致新会话的player被销毁
            // 所以这里需要优先将可能存在的session.player置空
            if (player.session) {
                player.session.player = null;
                logger.debug(`[${session.uuid}]少数情况下重连时的新socket会比socket断开事件先处理,导致新会话的player被销毁`);
            }
            player.session = session;
            session.player = player;
        } else {
            // 不存在用户信息的情况下,加载
            const playerModel = await GlobalVar.sequelizeDbMgr.getGameModelByServerId(PlayerModel, this.serverId);
            // 获取该服务器的账号信息
            let playerInfo = await playerModel.findOne({ where: { uuid: session.uuid } });
            // 该服没有账号信息,创建一个新的账号
            if (!playerInfo) {
                const newUserId = await (await GlobalVar.redisMgr.getClient()).incrBy('$new_user_id', 2);
                const userId = PlayerUtils.getUserIdByIncrId(newUserId, this.serverId);
                const nickname = Cfg.RandomName.getNickname();
                playerInfo = await playerModel.create({
                    userId,
                    uuid: session.uuid,
                    nickname,
                    registerTime: Date.now(),
                });
                const roleModel = await GlobalVar.sequelizeDbMgr.getPlatformModel(RoleModel);
                await roleModel.create({
                    userId, uuid: session.uuid, serverId: this.serverId, nickname,
                });
                logger.debug(`serverId:${this.serverId} 新玩家注册 uuid:${session.uuid} userId:${userId}`);
            }
            session.player = await new Player().init(session, playerInfo, this);
            session.player.onPlayerInitEnd();
            this._playerMapForUserId.set(session.player.userId, session.player);
            this._playerMapForUUid.set(session.uuid, session.player);

            const userModel = await GlobalVar.sequelizeDbMgr.getPlatformModel(UserModel);
            // 修改玩家上次进入服务器id
            userModel.update({ serverId: this.serverId }, { where: { uuid: session.uuid } });
        }

        // 高负载下,有可能在初始化的过程中玩家已经离线,session已经关闭了
        if (session.isDestroyed) {
            session.player.session = null;
            session.player = null;
            return false;
        }

        session.player.emit(EventEnum.Online);

        // 可能是某个logic服务死了,gate连到这边来了,不需要下发登录成功协议
        if (!isRecovery) {
            // 发送登录成功协议
            session.sendMessage(new ServerPto.S_CONNECT({
                loginInfo: session.player.getLoginInfo(),
            }));
        }
        return true;
    }

    getPlayerByUserId(userId: string) {
        return this._playerMapForUserId.get(userId);
    }

    getPlayerByUUid(uuid: string) {
        return this._playerMapForUUid.get(uuid);
    }

    foreachPlayer(cb: (player: Player) => void) {
        this._playerMapForUserId.forEach((player) => {
            cb(player);
        });
    }

    playerDispose(player: Player) {
        logger.debug(`[${player.playerInfo.uuid}] 玩家释放  serverId:${this.serverId}   userId:${player.userId}`);
        this._playerMapForUserId.delete(player.userId);
        this._playerMapForUUid.delete(player.playerInfo.uuid);
        player.destroy();
    }

    kickAllPlayer(reason: string) {
        if (this._playerMapForUserId.size === 0) {
            return;
        }

        const notify = new SystemPto.S_KICK({ reason });
        const buffer = ProtoBufEncoder.encode(notify);
        this._playerMapForUserId.forEach((p) => {
            p.kickWithBuffer(buffer);
        });
        logger.info(`服务器[${this.serverId}]由于[${reason}]踢出所有玩家(${this._playerMapForUserId.size}人)`);
    }

    /** 服务器是否开启 */
    isOpen() {
        const serverData = GlobalVar.serverMgr.getServerData(this.serverId);
        return Date.now() >= serverData?.startTime;
    }

    /** 服务器是否是开启状态 */
    isServerOpenStatus() {
        const serverData = GlobalVar.serverMgr.getServerData(this.serverId);
        return serverData?.status === 1;
    }

    /** 是否是白名单玩家 */
    async isWhiteUser(session: LogicSession) {
        const redis = await GlobalVar.redisMgr.getClient();
        return redis.sismember('$white_list', session.uuid);
    }

    /** 是否被封禁 */
    async isBlock(uuid: string): Promise<boolean> {
        const platform = await GlobalVar.sequelizeDbMgr.getPlatformDb();
        const roleModel = await platform.getModel(RoleModel);
        const role = await roleModel.findOne({ where: { uuid, serverId: this.serverId } });
        if (role) {
            const blockModel = await platform.getModel(BlockModel);
            const blockInfo = await blockModel.findOne({ where: { userInfo: role.userId } });
            return blockInfo?.blockTime === 0 || blockInfo?.blockTime > Date.now();
        }
        return false;
    }

    /** 获取开服天数 */
    getOpenDay() {
        const serverData = GlobalVar.serverMgr.getServerData(this.serverId);
        return 1 + Math.floor((TimeMgr.ins().dayStartMs - TimeMgr.getDayStartMs(serverData.startTime)) / TimeMgr.dayMs);
    }

    /** 获取开服周数 */
    getOpenWeek() {
        const serverData = GlobalVar.serverMgr.getServerData(this.serverId);
        return 1 + Math.floor((TimeMgr.ins().weekStartMs - TimeMgr.getWeekStartMs(serverData.startTime)) / TimeMgr.weekMs);
    }
}
