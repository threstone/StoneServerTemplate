import * as WS from 'ws';
import { RpcRouteType } from 'stone-framework';
import { WebSocketSession } from '../../../core/net/WebSocketSesstion';
import { ServerPto, SystemPto } from '../../../../../common/proto/CommonProto';
import { ProtoBufEncoder } from '../../../../../common/proto/ProtoBufEncoder';
import { GlobalVar } from './GlobalVar';

// eslint-disable-next-line no-bitwise
const HeartBeatCMD = BigInt((SystemPto.C_HEART_BEAT.prototype.cmd << 4) || SystemPto.C_HEART_BEAT.prototype.scmd);
export class GateSession extends WebSocketSession {
    logicRoute: string;

    uuid: string;

    ip: string;

    serverId: number;

    province: string;

    isInit: boolean = false;

    private _msgCache: Buffer[] = [];

    private _lastTransferTime: number;

    constructor(socket: WS, sessionId: number, remoteAddress: string) {
        super(socket, sessionId, remoteAddress);
        this._lastTransferTime = Date.now();

        this.socket.once('GateSessionInitEnd', this.clearMsgCache.bind(this));
    }

    private clearMsgCache() {
        if (this._msgCache.length === 0) { return; }

        for (let index = 0; index < this._msgCache.length; index++) {
            const buffer = this._msgCache[index];
            rpc.logic.transferRemote.sendHandleMessage(
                { type: RpcRouteType.Target, nodeId: this.logicRoute },
                startupParam.nodeId,
                this.sessionId,
                this.uuid,
                buffer,
            );
        }
        this._msgCache = [];
    }

    onClientMessage(message: WS.Data) {
        if (!Buffer.isBuffer(message)) {
            return;
        }
        const buffer = message as Buffer;
        if (buffer.length < 8) {
            return;
        }

        if (buffer.readBigInt64BE() === HeartBeatCMD) {
            this.sendHearbeat();
            return;
        }

        this._lastTransferTime = Date.now();
        if (!this.isInit) {
            this._msgCache.push(buffer);
        } else {
            rpc.logic.transferRemote.sendHandleMessage(
                { type: RpcRouteType.Target, nodeId: this.logicRoute },
                startupParam.nodeId,
                this.sessionId,
                this.uuid,
                buffer,
            );
        }
    }

    private sendHearbeat() {
        this.sendBuffer(ProtoBufEncoder.encode(new SystemPto.S_HEART_BEAT({ serverTime: Date.now() })));
    }

    /** 如果会话长时间没有数据交互，则清除会话 */
    clearIfInactive() {
        if ((Date.now() - this._lastTransferTime) > 3600000) {
            this.sendBuffer(ProtoBufEncoder.encode(new SystemPto.S_KICK({ reason: '长时间未操作' })));
            this.close();
        }
    }

    async verify(token: string, serverIdStr: string, province: string) {
        try {
            if (token == null || serverIdStr == null) {
                logger.error('token 或 serverId为空', token, serverIdStr);
                return false;
            }
            const redis = await GlobalVar.redisMgr.getClient();
            const jsonStr = await redis.getData(`player_token:${token}`);
            if (!jsonStr) {
                logger.error('token 验证失败', token);
                this.sendBuffer(ProtoBufEncoder.encode(new ServerPto.S_CONNECT({ loginInfo: { code: 4 } })));
                return false;
            }
            const redisData = JSON.parse(jsonStr);
            this.uuid = redisData.uuid;
            this.ip = redisData.ip;
            this.province = province;
            this.serverId = Number(serverIdStr);
            if (Number.isNaN(this.serverId)) {
                logger.error('serverId 错误', this.serverId, token);
                return false;
            }
            this.logicRoute = GlobalVar.gateServer.getRouterLogic(this.uuid);
            if (!this.logicRoute) {
                logger.error('无法找到logic', token, this.uuid);
                return false;
            }
            const regResult = await rpc.logic.playerRemote.callOnPlayerRegister(
                { type: RpcRouteType.Target, nodeId: this.logicRoute },
                startupParam.nodeId,
                this.sessionId,
                this.uuid,
                this.ip,
                this.serverId,
                false,
                this.province,
            );
            if (!regResult) {
                logger.error('注册失败', token, this.uuid, this.serverId);
            }
            return regResult;
        } catch (error) {
            logger.error(`[${token}]gate session verify error `, error);
            return false;
        }
    }

    async modifyLogic() {
        this.isInit = false;
        this.logicRoute = GlobalVar.gateServer.getRouterLogic(this.uuid);
        if (!this.logicRoute) {
            this.close();
            return;
        }
        const regResult = await rpc.logic.playerRemote.callOnPlayerRegister(
            { type: RpcRouteType.Target, nodeId: this.logicRoute },
            startupParam.nodeId,
            this.sessionId,
            this.uuid,
            this.ip,
            this.serverId,
            true,
            this.province,
        );
        if (!regResult) {
            this.close();
        }
        this.isInit = true;
        this.clearMsgCache();
    }

    close(code?: number, data?: string | Buffer): void {
        this._msgCache = [];
        super.close(code, data);
    }
}
