import { Model } from 'sequelize-typescript';
import { RpcRouteType } from 'stone-framework';
import { EventEmitter } from '../../../../../core/event/EventEmitter';
import { PlayerModel } from '../../../../../../../common/sequelize/model/game/PlayerModel';
import { GlobalVar } from '../../GlobalVar';
import { BaseComponent } from '../component/BaseComponent';
import { LogicSession } from '../session/LogicSession';
import { Server } from '../server/Server';
import { PlayerComponent } from '../component/PlayerComponent';
import { TranslateKey } from '../../../../../../../common/language/TranslateUtils';
import { TimeMgr } from '../../../../../core/utils/TimeMgr';
import { EventEnum } from '../../../../../Enum';
import { PlayerUtils } from '../../../../../../../common/utils/PlayerUtils';
import { PlayerPto } from '../../../../../../../common/proto/CommonProto';
import { PlayerInfoToRedisMgr } from './PlayerInfoToRedisMgr';
import { PlayerSaveMgr } from './PlayerSaveMgr';

export class Player extends EventEmitter {
    /** 没有session的player将被server清理 */
    session: LogicSession;

    nextClearFlag: boolean;

    get serverId() {
        return this.server.serverId;
    }

    server: Server;

    private _playerInfo: PlayerModel;

    get playerInfo() { return this._playerInfo; }

    private _componentMap: Map<string, BaseComponent>;

    get userId() {
        return this._playerInfo?.userId;
    }

    get uuid() {
        return this._playerInfo?.uuid;
    }

    /** 创角天数 */
    get createRoleDay() {
        const { dayMs } = TimeMgr;
        const createRoleDayMs = TimeMgr.getDayStartMs(this.playerInfo.registerTime);
        return (TimeMgr.ins().dayStartMs - createRoleDayMs) / dayMs + 1;
    }

    init(session: LogicSession, playerInfo: PlayerModel, server: Server) {
        this.session = session;
        this.server = server;
        this._playerInfo = playerInfo;
        this.on(EventEnum.Online, this.onPlayerOnline, this);
        this.on(EventEnum.Offline, this.onPlayerOffline, this);
        this.on(EventEnum.UpdateRedisInfo, this.saveRedisInfo, this);
        return this.initComponents();
    }

    /** 获取本服指定模型 */
    getServerModel<T extends typeof Model>(modelTemplate: T): Promise<T> {
        return GlobalVar.sequelizeDbMgr.getGameModelByServerId(modelTemplate, this.serverId);
    }

    /** 获取组件 */
    getComponent<T extends BaseComponent>(componentClass: new (...args: any[]) => T): T {
        const result = this._componentMap?.get(componentClass.name) as T;
        if (!result) {
            logger.error(
                `[${componentClass.name}]组件不存在 [componentMap is null:${this._componentMap == null}]  [uuid:${this.uuid}] playerInfo:`,
                this._playerInfo?.toJSON(),
            );
        }
        return result;
    }

    /** 重新加载组件,一般用于热更新 */
    async reloadComponent(ComponentClass: new (...args: any[]) => BaseComponent) {
        const comp = this.getComponent(ComponentClass);
        if (!comp) { return; }

        // 将player监听的,caller为此comp的事件移除
        this.removeListenersByCaller(comp);

        (comp as any).onDestroy();
        const compNew = new ComponentClass(this);
        this._componentMap.set(ComponentClass.name, compNew);
        await compNew.initComponent(this);
        // 防止组件在初始化过程中被销毁
        if (!compNew.isDestroy) {
            (compNew as any).onPlayerInitEnd();
        }
    }

    /** 初始化组件 */
    private async initComponents() {
        this._componentMap = new Map();
        const necessaryComponents: Promise<void>[] = [];
        const nornalComponents: BaseComponent[] = [];
        BaseComponent.getAllComponents().forEach((ComponentClass) => {
            if (this._componentMap.has(ComponentClass.name) === false) {
                const comp = new ComponentClass(this);
                this._componentMap.set(ComponentClass.name, comp);
                if (comp.isNecessary) {
                    necessaryComponents.push(comp.initComponent(this));
                } else {
                    nornalComponents.push(comp);
                }
            }
        });
        await Promise.all(necessaryComponents);

        const nomalComponents: Promise<void>[] = [];
        nornalComponents.forEach((c) => {
            nomalComponents.push(c.initComponent(this));
        });
        await Promise.all(nomalComponents);
        return this;
    }

    onPlayerInitEnd() {
        this._componentMap.forEach((comp: any) => {
            try {
                comp.onPlayerInitEnd();
            } catch (error) {
                logger.error(`[${this.uuid}][${this.userId}] onPlayerInitEnd error:`, error);
            }
        });
    }

    destroy() {
        this.clearPlayerNodeInfoInRedis();
        this.removeAllListeners();
        this._componentMap.forEach((c) => {
            c.destroy();
        });

        this._componentMap.clear();
        this._componentMap = null;
        this._playerInfo = null;
    }

    sendMessage(msg: IGameMessage) {
        this.session?.sendMessage(msg);
    }

    sendBuffer(buff: Buffer) {
        this.session?.sendBuffer(buff);
    }

    sendErrorMessage(msg: TranslateKey, code: number = 500) {
        this.session?.sendErrorMessage(msg, code);
    }

    sendErrorMsgNoTranslate(msg: string, code: number = 500) {
        this.session?.sendErrorMsgNoTranslate(msg, code);
    }

    kick(reason?: TranslateKey) {
        this.session?.kick(reason);
    }

    kickWithBuffer(buffer: Buffer) {
        this.session?.kickWithBuffer(buffer);
    }

    getLoginInfo(): PlayerPto.ILoginInfo {
        return {
            code: 0,
            serverId: this.serverId,
            serverOpenDay: this.server.getOpenDay(),
            playerInfo: PlayerUtils.getPlayerBaseInfo(this.playerInfo, true),
            serverTime: Date.now(),
        };
    }

    private saveRedisInfo(isImmediate: boolean = false) {
        PlayerInfoToRedisMgr.ins().saveRedisInfo(this.playerInfo, isImmediate);
    }

    /** 获取用户信息 */
    async getPlayerInfoByUserId(userId: string): Promise<{ [K in keyof PlayerModel]: PlayerModel[K] }> {
        if (this.userId === userId) {
            return PlayerUtils.getSaveToRedisInfo(this.playerInfo);
        }

        return PlayerUtils.getPlayerInfoByUserId(userId, GlobalVar.redisMgr, GlobalVar.sequelizeDbMgr);
    }

    /**
     * 主动标记属性变化,储存玩家数据
     *
     * (sequlize无法检测到对象的属性变化，需要手动标记才能触发存储)
     *
     * https://sequelize.org/docs/v6/other-topics/upgrade/#model
     */
    savePlayerInfoForAttr<K extends keyof PlayerModel>(attrName: K) {
        this.playerInfo.changed(attrName, true);
        this.save();
    }

    private _saveTimeout: NodeJS.Timeout;

    /** 存储玩家数据 */
    save() {
        if (this._saveTimeout) {
            return;
        }
        // 合并存储命令，防止短时间频繁调用存储命令
        this._saveTimeout = setTimeout(() => {
            this._saveTimeout = null;
            PlayerSaveMgr.ins().savePlayer(this.playerInfo);
        }, 1000);
    }

    private onPlayerOnline() {
        this.playerInfo.online = true;
        this.playerInfo.onlineTime = Date.now();
        this.save();

        this.saveRedisInfo(true);
        this.setPlayerNodeInfoToRedis();
    }

    private onPlayerOffline() {
        this.playerInfo.online = false;
        this.playerInfo.offlineTime = Date.now();
        this.save();

        this.saveRedisInfo(true);
    }

    // 设置玩家所在node信息到redis中方便获取
    private async setPlayerNodeInfoToRedis() {
        const redisClient = await GlobalVar.redisMgr.getClient(1);
        redisClient.hmset(`player_node_info:${this.userId}`, {
            gateNode: this.session.gateNodeId,
            sessionId: this.session.sessionId,
            logicNode: nodeId,
        });
    }

    // 清除玩家所在node信息
    private async clearPlayerNodeInfoInRedis() {
        const { userId } = this;
        const redisClient = await GlobalVar.redisMgr.getClient(1);
        redisClient.delete(`player_node_info:${userId}`);
    }

    /** 派发事件给指定的玩家(排除自身) */
    async emitPlayerEvent(userId: string, eventType: EventEnum, ...data: any[]) {
        if (this.userId === userId) {
            logger.error(`[emitPlayerEvent] 不能给自己发送消息 [userId:${userId}]`);
            return;
        }
        const redisClient = await GlobalVar.redisMgr.getClient(1);
        const [logicNode] = await redisClient.hmget(`player_node_info:${userId}`, ['logicNode']);
        if (!logicNode) {
            return;
        }
        rpc.logic.playerRemote.sendNotifyPlayerEvent(
            { type: RpcRouteType.Target, nodeId: logicNode },
            userId,
            PlayerUtils.getServerIdByUserId(userId),
            eventType,
            ...data,
        );
    }

    /** 发送消息给指定的玩家(排除自身) */
    async sendMessageToPlayer(userId: string, buffer: Buffer) {
        if (this.userId === userId) {
            logger.error(`[sendMessageToPlayer] 不能给自己发送消息 [userId:${userId}]`);
            return;
        }
        const redisClient = await GlobalVar.redisMgr.getClient(1);
        const [gateNode, sessionId] = await redisClient.hmget(`player_node_info:${userId}`, ['gateNode', 'sessionId']);
        if (!gateNode) {
            return;
        }
        rpc.gate.gateRemote.callSendMessage({ type: RpcRouteType.Target, nodeId: gateNode }, Number(sessionId), buffer);
    }
}
