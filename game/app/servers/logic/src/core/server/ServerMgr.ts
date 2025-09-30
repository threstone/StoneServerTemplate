import { ServerModel } from '../../../../../../../common/sequelize/model/platform/ServerModel';
import { EventEnum } from '../../../../../Enum';
import { SystemPto } from '../../../../../../../common/proto/CommonProto';
import { GlobalVar } from '../../GlobalVar';
import { ProtoBufEncoder } from '../../../../../../../common/proto/ProtoBufEncoder';
import { TimeMgr } from '../../../../../core/utils/TimeMgr';
import { Server } from './Server';

export class ServerMgr {
    private _serverMap: Map<number, Server> = new Map();

    private _serverDataMap = new Map<number, ServerModel>();

    private _serverList: ServerModel[];

    get serverList() {
        return this._serverList;
    }

    async init() {
        (await GlobalVar.redisMgr.getClientForSubscribe()).subscribe('$server_info_update', this.initServerData.bind(this));
        const redis = await GlobalVar.redisMgr.getClient();
        this.initServerData(await redis.getData('$server_info'));

        setInterval(this.checkServersStatus.bind(this), 5000);
        setInterval(this.clearServerPlayers.bind(this), 35000);
        TimeMgr.ins().on(EventEnum.NewDay, this.onNewDay, this);
        return this;
    }

    private onNewDay() {
        const buffer = ProtoBufEncoder.encode(new SystemPto.S_NEW_DAY({ dayStartMs: TimeMgr.ins().dayStartMs }));
        this._serverMap.forEach((server) => {
            server.broadcastBuffer(buffer);
            server.foreachPlayer((p) => {
                p.emit(EventEnum.NewDay);
            });
        });
    }

    /** 检查服务器状态 */
    private checkServersStatus() {
        this._serverMap.forEach((server) => {
            server.checkServerStatus();
        });
    }

    /** 检查是否清理玩家 */
    private clearServerPlayers() {
        this._serverMap.forEach((server) => {
            server.clearPlayers();
        });
    }

    /** 立即清理掉所有离线的玩家 */
    clearOfflinePlayersImmediate() {
        this._serverMap.forEach((server) => {
            server.clearOfflinePlayersImmediate();
        });
    }

    private initServerData(jsonStr: string) {
        this._serverDataMap.clear();
        const list: ServerModel[] = JSON.parse(jsonStr);
        list?.forEach((server) => {
            this._serverDataMap.set(server.id, server);
        });
        this._serverList = list;
        logger.debug('initServerData:', jsonStr);
    }

    getServerEntity(serverId: number) {
        if (serverId === 0) {
            serverId = this.getSuggestServerId();
        }

        let server = this._serverMap.get(serverId);
        if (!server) {
            // 防止传入的serverId是无配置的服务器
            // 如果被攻击，会导致无限创建新服务器,内存会爆炸
            if (this.getServerData(serverId) == null) {
                return null;
            }
            server = new Server(serverId);
            this._serverMap.set(serverId, server);
        }
        return server;
    }

    getServerData(serverId: number) {
        return this._serverDataMap.get(serverId);
    }

    /** 获取推荐的服务器id */
    getSuggestServerId() {
        let maxId = 0;
        for (const [serverId, serverData] of this._serverDataMap) {
            if (serverData.tag === 2) {
                return serverId;
            }
            maxId = Math.max(maxId, serverId);
        }
        return maxId;
    }

    foreachServer(cb: (server: Server) => void) {
        this._serverMap.forEach((server) => {
            cb(server);
        });
    }
}
