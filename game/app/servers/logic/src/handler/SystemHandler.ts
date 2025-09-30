import { SystemPto } from '../../../../../../common/proto/CommonProto';
import { MessageHandler } from '../../../../core/proto/ProtoDecorator';
import { LogicSession } from '../core/session/LogicSession';

export class SystemHandler {
    // 心跳
    // @MessageHandler(SystemPto.C_HEART_BEAT)
    // heartBeat(session: Session) {
    //     session.sendMessage(new SystemPto.S_HEART_BEAT({ serverTime: Date.now() }));
    // }
}
