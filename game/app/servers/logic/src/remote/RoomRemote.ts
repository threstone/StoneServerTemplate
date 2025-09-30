// import { PlayerUtils } from '../../../../../../common/utils/PlayerUtils';
// import { MatchComponent } from '../core/component/MatchComponent';
// import { GlobalVar } from '../GlobalVar';

// export class RoomRemote {
//     /** 当匹配成功时触发,仅在加入他人房间时触发 */
//     onMatchSuccess(userId: string, roomId: number): void {
//         const serverId = PlayerUtils.getServerIdByUserId(userId);
//         const player = GlobalVar.serverMgr.getServerEntity(serverId).getPlayerByUserId(userId);
//         if (!player) { return; }
//         player.getComponent(MatchComponent).onMatchSuccess(roomId);
//     }

//     /** 当玩家被踢出房间 */
//     onKicked(userId: string, roomId: number): void {
//         const serverId = PlayerUtils.getServerIdByUserId(userId);
//         const player = GlobalVar.serverMgr.getServerEntity(serverId).getPlayerByUserId(userId);
//         if (!player) { return; }
//         player.getComponent(MatchComponent).doLeaveRoom(roomId, 1, false);
//     }
// }
