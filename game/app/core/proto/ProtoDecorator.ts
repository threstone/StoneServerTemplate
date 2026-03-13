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
    checkFuncId?: number;
    /** 是否只允许同时只有一个调用 */
    oneCallOnly?: boolean;
}

export function MessageHandler(msg: typeof IGameMessage, param?: MessageHandlerParam) {
    return function (target: any, propertyKey: string) { // , descriptor: PropertyDescriptor
        // 是否仅测试环境可用
        if (param?.needTestEnv && serviceConfig.isTest !== true) {
            ProtoBufEncoder.setHandler(msg.prototype.cmd, msg.prototype.scmd, (session: LogicSession) => {
                session.sendErrorMessage('验证失败');
            });
        } else {
            setHandler(target[propertyKey], msg, param);
        }
    };
}

function setHandler(handler: Function, msg: typeof IGameMessage, param?: MessageHandlerParam) {
    const messageId = ProtoBufEncoder.getMessageIndex(msg.prototype.cmd, msg.prototype.scmd);
    ProtoBufEncoder.setHandler(msg.prototype.cmd, msg.prototype.scmd, async (session: LogicSession, player: Player, ...args: any[]) => {
        try {
            if (!reqIntervalCheck(session, messageId)) {
                session.sendErrorMessage('请求过于频繁');
                return;
            }
            beforeCall(session, messageId, param);
            await handler(session, player, ...args);
            afterCall(session, messageId, param);
        } catch (error) {
            logger.error(`[${session.uuid}]消息处理出错:`, error);
            session.sendErrorMessage('未知错误');
        }
    });
}

/** 频繁请求判断 */
function reqIntervalCheck(session: LogicSession, messageId: number) {
    const sessionAny = session as any;
    if (!sessionAny.__nextCallTime || sessionAny.__nextCallTime[messageId] == null) {
        return true;
    }
    return Date.now() >= sessionAny.__nextCallTime[messageId];
}

function beforeCall(session: LogicSession, messageId: number, param?: MessageHandlerParam) {
    let interval: number;
    if (param?.oneCallOnly) {
        interval = Number.MAX_SAFE_INTEGER;
    } else if (param?.reqInterval) {
        interval = param.reqInterval;
    } else {
        return;
    }
    const sessionAny = session as any;
    if (!sessionAny.__nextCallTime) {
        sessionAny.__nextCallTime = {};
    }
    sessionAny.__nextCallTime[messageId] = Date.now() + interval;
}

function afterCall(session: LogicSession, messageId: number, param?: MessageHandlerParam) {
    const sessionAny = session as any;
    if (param?.oneCallOnly) {
        if (param?.reqInterval) {
            sessionAny.__nextCallTime[messageId] = Date.now() + param.reqInterval;
        } else {
            delete sessionAny.__nextCallTime[messageId];
        }
    }
}
