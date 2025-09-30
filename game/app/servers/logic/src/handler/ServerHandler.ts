import { ServerModel } from '../../../../../../common/sequelize/model/platform/ServerModel';
import { ServerPto } from '../../../../../../common/proto/CommonProto';
import { Player } from '../core/player/Player';
import { ProtoBufEncoder } from '../../../../../../common/proto/ProtoBufEncoder';
import { LogicSession } from '../core/session/LogicSession';
import { GlobalVar } from '../GlobalVar';
import { MessageHandler } from '../../../../core/proto/ProtoDecorator';

export class ServerHandler {
    private serverInfoBuffer: Buffer;

    private serverList: ServerModel[];

    // 请求切换服务器
    @MessageHandler(ServerPto.C_SWITCH_SERVER)
    async reqSwitchServer(session: LogicSession, player: Player, msg: ServerPto.C_SWITCH_SERVER) {
        if (player?.serverId === msg.serverId) {
            session.sendMessage(new ServerPto.S_SWITCH_SERVER({ loginInfo: { code: 2 } }));
            return;
        }

        const server = GlobalVar.serverMgr.getServerEntity(msg.serverId);
        if (!server) {
            session.sendErrorMessage('参数错误');
            return;
        }
        if (await server.allowToEnter(session) === false) {
            return;
        }

        session.onPlayerOffline();

        // 玩家请求进入指定服务器
        server.enterServer(session, false);
    }

    // 请求服务器信息
    @MessageHandler(ServerPto.C_GET_SERVER_LIST)
    getServerInfo(session: LogicSession) {
        if (this.serverList !== GlobalVar.serverMgr.serverList) {
            this.serverList = GlobalVar.serverMgr.serverList;
            this.serverInfoBuffer = ProtoBufEncoder.encode(new ServerPto.S_GET_SERVER_LIST({ list: GlobalVar.serverMgr.serverList }));
        }
        session.sendBuffer(this.serverInfoBuffer);
    }
}
