import { PlayerPto } from '../../../../../../common/proto/CommonProto';
import { MessageHandler } from '../../../../core/proto/ProtoDecorator';
import { Player } from '../core/player/Player';
import { LogicSession } from '../core/session/LogicSession';
import { PlayerUtils } from '../../../../../../common/utils/PlayerUtils';

export class PlayerHandler {
    // 获取玩家信息请求
    @MessageHandler(PlayerPto.C_GET_PLAYER_INFO, { reqInterval: 1500 })
    async getPlayerInfo(session: LogicSession, player: Player, msg: PlayerPto.C_GET_PLAYER_INFO) {
        if (!msg.userId || msg.userId === player.userId) {
            session.sendErrorMessage('参数错误');
            return;
        }
        const playerInfo = await player.getPlayerInfoByUserId(msg.userId);
        if (!playerInfo) {
            session.sendErrorMessage('参数错误');
            return;
        }
        const notify = new PlayerPto.S_GET_PLAYER_INFO();
        const otherPlayer = new PlayerPto.OtherPlayerInfo();
        notify.player = otherPlayer;
        otherPlayer.baseInfo = PlayerUtils.getPlayerBaseInfo(playerInfo, false);
        otherPlayer.serverId = PlayerUtils.getServerIdByUserId(msg.userId);
        session.sendMessage(notify);
    }
}
