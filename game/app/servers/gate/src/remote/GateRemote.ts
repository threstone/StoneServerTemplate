import { SystemPto } from '../../../../../../common/proto/CommonProto';
import { ProtoBufEncoder } from '../../../../../../common/proto/ProtoBufEncoder';
import { GlobalVar } from '../GlobalVar';

export class GateRemote {
    sendMessage(sessionId: number, buff: Buffer): void {
        GlobalVar.gateServer.send(sessionId, buff);
    }

    kick(sessionId: number, reason?: string): void {
        if (reason) {
            GlobalVar.gateServer.send(sessionId, ProtoBufEncoder.encode(new SystemPto.S_KICK({ reason })));
        }
        GlobalVar.gateServer.kick(sessionId);
    }

    kickWithBuffer(sessionId: number, buffer: Buffer): void {
        GlobalVar.gateServer.send(sessionId, buffer);
        GlobalVar.gateServer.kick(sessionId);
    }
}
