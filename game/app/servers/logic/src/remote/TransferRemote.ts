import { RpcRouteType } from 'stone-framework';
import { ProtoBufEncoder } from '../../../../../../common/proto/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';
import { ErrorUtils } from '../core/ErrorUtils';
import { TranslateUtils } from '../../../../../../common/language/TranslateUtils';

export class TransferRemote {
    async handleMessage(gateNodeId: string, sessionId: number, uuid: string, buff: Buffer): Promise<void> {
        try {
            const session = GlobalVar.sessionMgr.getSession(gateNodeId, sessionId);
            const msg = ProtoBufEncoder.decode(buff, 0);
            if (!msg) {
                ErrorUtils.sendErrorMessage(gateNodeId, sessionId, '无法解析的数据');
                return;
            }
            if (!session) {
                logger.error('获取session失败:', uuid, msg);
                // 获取不到session直接踢下线
                rpc.gate.gateRemote.sendKick({ type: RpcRouteType.Target, nodeId: gateNodeId }, sessionId);
                return;
            }
            const fun = ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd);
            if (!fun) {
                logger.error(`未知的协议 cmd:${msg.cmd} scmd:${msg.scmd}`);
                ErrorUtils.sendErrorMessage(gateNodeId, sessionId, '未知的协议');
                return;
            }

            logger.debug(
                `[${gateNodeId}-${sessionId}][${session.uuid}][${session.player?.userId}] 收到消息: ${msg.constructor.name}`,
                JSON.stringify(msg),
            );
            if (!session.player) {
                logger.error(`[${session.uuid}]玩家未初始化完成,丢弃消息: ${msg.constructor.name}`);
                return;
            }
            await fun(session, session.player, msg);
        } catch (error) {
            logger.error(`[${uuid}]消息处理出错:`, error);
            ErrorUtils.sendErrorMessage(gateNodeId, sessionId, TranslateUtils.translate('未知错误'));
        }
    }
}
