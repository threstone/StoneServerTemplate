// import { RpcRouteType } from 'stone-framework';
// import { ResultSetHeader } from 'mysql2';
// import { EventEnum } from '../../../../../Enum';
// import { Player } from '../player/Player';
// import { BaseComponent } from './BaseComponent';
// import { ChatComponent } from './ChatComponent';
// import { ChatPto, MatchPto } from '../../../../../../../common/proto/CommonProto';
// import { GlobalVar } from '../../GlobalVar';
// import { MatchInfo } from '../../../../../../../common/sequelize/model/game/TypeDefine';
// import { StageComponent } from './StageComponent';
// import { PlayerUtils } from '../../../../../../../common/utils/PlayerUtils';
// import { PlayerModel } from '../../../../../../../common/sequelize/model/game/PlayerModel';

// export class MatchComponent extends BaseComponent {
//     private _matchInfo: MatchInfo;

//     private _roomId: number;

//     get roomId() {
//         return this._roomId;
//     }

//     protected init(player: Player): Promise<void> | void {
//         this._matchInfo = player.playerInfo.matchInfo;
//         player.on(EventEnum.Online, this.onPlayerOnline, this);
//         player.on(EventEnum.Offline, this.onPlayerOffline, this);
//         player.on(EventEnum.StartTeamFight, this.onSetTeammate, this);
//         player.on(EventEnum.TeammateLikeAdd, this.onTeammateLikeAdd, this);
//     }

//     protected onDestroy(): void {
//     }

//     protected onPlayerInitEnd(): void {
//     }

//     private onPlayerOnline() {
//         if (!this._matchInfo.isAcceptInvite) { return; }
//         this.addInviteInfo();
//     }

//     private onPlayerOffline() {
//         if (this._roomId != null) {
//             this.doLeaveRoom(this._roomId, 2);
//         }

//         if (!this._matchInfo.isAcceptInvite) { return; }
//         this.removeInviteInfo();
//     }

//     private onTeammateLikeAdd() {
//         this.player.playerInfo.likeTimes += 1;
//         this.player.playerInfo.changed('likeTimes', false);
//         this.player.sendMessage(new MatchPto.S_TEAM_FIGHT_LIKE({ likeTimes: this.player.playerInfo.likeTimes }));
//     }

//     private onSetTeammate(userId: string) {
//         if (userId.startsWith('robot')) {
//             return;
//         }
//         this._matchInfo.teammateId = userId;
//         this._matchInfo.likeTimes = 1;
//         this.save();
//     }

//     async likeTarget(userId: string) {
//         if (this._matchInfo.teammateId === userId && this._matchInfo.likeTimes > 0) {
//             const model = await GlobalVar.sequelizeDbMgr.getGameModelByServerId(PlayerModel, PlayerUtils.getServerIdByUserId(userId));
//             const [result] = await model.sequelize.query(
//                 `update ${model.tableName} set likeTimes = likeTimes + 1 where userId = '${userId}'`,
//             ) as ResultSetHeader[];
//             if (result.affectedRows === 1) {
//                 this.player.emitPlayerEvent(userId, EventEnum.TeammateLikeAdd);
//             }
//             this._matchInfo.likeTimes -= 1;
//             // 组队作战中点赞队友x次
//             this.player.emitTaskEvent(36, 1);
//             this.save();
//         }
//     }

//     async addInviteInfo() {
//         const stageComp = this.getPlayerComponent(StageComponent);
//         const redisClient = await GlobalVar.redisMgr.getClient(1);
//         redisClient.zadd(
//             `match_invite:${MatchPto.MatchTypeEnum.TeamFight}`,
//             [Object.keys(stageComp.stageInfo.proMap).length, this.player.userId],
//         );
//     }

//     async removeInviteInfo() {
//         const redisClient = await GlobalVar.redisMgr.getClient(1);
//         redisClient.zrem(`match_invite:${MatchPto.MatchTypeEnum.TeamFight}`, [this.player.userId]);
//     }

//     /** 当匹配成功时触发,仅在加入他人房间时触发 */
//     onMatchSuccess(roomId: number) {
//         // 注销聊天频道
//         this.getPlayerComponent(ChatComponent).doUnregisterChatListener(ChatPto.ChatTypeEnum.Room);
//         this.doEnterRoom(roomId);
//     }

//     doLeaveRoom(roomId: number, reason: number, isNotifyMatch = true) {
//         if (this._roomId !== roomId) {
//             this.player.sendErrorMessage('参数错误');
//             return;
//         }
//         // 注销聊天频道
//         this.getPlayerComponent(ChatComponent).doUnregisterChatListener(ChatPto.ChatTypeEnum.Room);
//         this._roomId = null;
//         if (isNotifyMatch) {
//             rpc.match.roomRemote.sendLeaveRoom({ type: RpcRouteType.All }, roomId, this.player.userId, reason);
//         }
//     }

//     doEnterRoom(roomId: number) {
//         this._roomId = roomId;
//         // 注册聊天频道
//         this.getPlayerComponent(ChatComponent).doRegisterChatListener(ChatPto.ChatTypeEnum.Room);
//     }

//     save(): void {
//         this.player.savePlayerInfoForAttr('matchInfo');
//     }
// }
