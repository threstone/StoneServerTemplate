/* eslint-disable no-use-before-define */
import { ProtoBufEncoder } from '../../../../common/proto/ProtoBufEncoder';
import { Player } from '../../servers/logic/src/core/player/Player';
import { LogicSession } from '../../servers/logic/src/core/session/LogicSession';

export interface MessageHandlerParam {
    /** 是否仅测试环境可用 */
    needTestEnv?: boolean;
    /** x秒内请求次数限制 */
    reqInterval?: number;
    /** 需要检查的功能id */
    checkFuncId?: number
}

export function MessageHandler(msg: typeof IGameMessage, param?: MessageHandlerParam) {
    return function (target: any, propertyKey: string) { // , descriptor: PropertyDescriptor
        // 是否仅测试环境可用
        if (param?.needTestEnv && serviceConfig.isTest !== true) {
            ProtoBufEncoder.setHandler(msg.prototype.cmd, msg.prototype.scmd, (session: LogicSession) => {
                session.sendErrorMessage('参数错误');
            });
        } else {
            ProtoBufEncoder.setHandler(msg.prototype.cmd, msg.prototype.scmd, (session: LogicSession, player: Player, ...args: any[]) => {
                if (!reqIntervalCheck(session, ProtoBufEncoder.getMessageIndex(msg.prototype.cmd, msg.prototype.scmd), param?.reqInterval)) {
                    session.sendErrorMessage('请求过于频繁');
                    return;
                }

                target[propertyKey](session, player, ...args);
            });
        }
    };
}

/** 频繁请求判断 */
function reqIntervalCheck(session: LogicSession, messageIndex: number, interval: number) {
    if (!interval) { return true; }
    const sessionAny = session as any;
    if (!sessionAny.__lastReqTime) {
        sessionAny.__lastReqTime = {};
    }
    const lastReqTime = sessionAny.__lastReqTime[messageIndex] || 0;
    const now = Date.now();
    if (now - lastReqTime < interval) {
        return false;
    }
    sessionAny.__lastReqTime[messageIndex] = now;
    return true;
}
