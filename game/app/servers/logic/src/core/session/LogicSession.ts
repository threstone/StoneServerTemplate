import { RpcRouteType } from 'stone-framework';
import { ProtoBufEncoder } from '../../../../../../../common/proto/ProtoBufEncoder';
import { GlobalVar } from '../../GlobalVar';
import { SystemPto } from '../../../../../../../common/proto/CommonProto';
import { Player } from '../player/Player';
import { EventEnum } from '../../../../../Enum';
import { TranslateKey, TranslateUtils } from '../../../../../../../common/language/TranslateUtils';

export class LogicSession {
    gateNodeId: string;

    sessionId: number;

    uuid: string;

    ip: string;

    province: string = '其他';

    player: Player;

    createdAt: number;

    isDestroyed: boolean = false;

    constructor(gateNodeId: string, sessionId: number, uuid: string, ip: string, province: string) {
        this.gateNodeId = gateNodeId;
        this.sessionId = sessionId;
        this.uuid = uuid;
        this.ip = ip;
        if (province) {
            this.province = province;
        }
        this.createdAt = Date.now();
        this.onNewSession();
    }

    /** 记录玩家session信息,踢掉同账号其他在线的连接 */
    async onNewSession() {
        const client = await GlobalVar.redisMgr.getClient(1);
        const redisKey = `session_address:${this.uuid}`;
        const sessionJson = await client.getData(redisKey);
        if (sessionJson) {
            const sessionInfo = JSON.parse(sessionJson);
            if (sessionInfo.gateNodeId !== this.gateNodeId || sessionInfo.sessionId !== this.sessionId) {
                rpc.gate.gateRemote.sendKick({ type: RpcRouteType.Target, nodeId: sessionInfo.gateNodeId }, sessionInfo.sessionId, '账号在其它地方登录');
            }
        }

        client.setData(
            redisKey,
            JSON.stringify({
                gateNodeId: this.gateNodeId,
                sessionId: this.sessionId,
            }),
            -1,
        );
    }

    onPlayerOffline() {
        if (this.player) {
            this.player.emit(EventEnum.Offline);
            this.player.session = null;
            this.player = null;
        }
        this.isDestroyed = true;
    }

    sendMessage(msg: IGameMessage) {
        logger.debug(`[${this.gateNodeId}-${this.sessionId}][${this.uuid}][${this.player?.userId}] `
            + `发送消息: ${msg.constructor.name} ${JSON.stringify(msg)}`);
        rpc.gate.gateRemote.sendSendMessage(
            { type: RpcRouteType.Target, nodeId: this.gateNodeId },
            this.sessionId,
            ProtoBufEncoder.encode(msg),
        );
    }

    sendBuffer(buff: Buffer) {
        rpc.gate.gateRemote.sendSendMessage(
            { type: RpcRouteType.Target, nodeId: this.gateNodeId },
            this.sessionId,
            buff,
        );
    }

    sendErrorMessage(msg: TranslateKey, code: number = 500) {
        // msg+code 是相对固定的,可以优化将buffer缓存起来,减少序列化消耗 todo
        this.sendMessage(new SystemPto.S_ERROR({ msg: TranslateUtils.translate(msg, serviceConfig.language), code }));
    }

    sendErrorMsgNoTranslate(msg: string, code: number = 500) {
        this.sendMessage(new SystemPto.S_ERROR({ msg, code }));
    }

    kick(reason?: TranslateKey) {
        rpc.gate.gateRemote.sendKick(
            { type: RpcRouteType.Target, nodeId: this.gateNodeId },
            this.sessionId,
            TranslateUtils.translate(reason, serviceConfig.language),
        );
    }

    kickWithBuffer(buffer: Buffer) {
        rpc.gate.gateRemote.sendKickWithBuffer(
            { type: RpcRouteType.Target, nodeId: this.gateNodeId },
            this.sessionId,
            buffer,
        );
    }
}
