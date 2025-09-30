// import * as Uuid from 'uuid';
// import { RpcRouteType } from 'stone-framework';
// import { MatchPto, PlayerPto, SystemPto } from '../../../../../../common/proto/CommonProto';
// import { ProtoBufEncoder } from '../../../../../../common/proto/ProtoBufEncoder';
// import { RoomMgr } from './RoomMgr';
// import { TranslateUtils } from '../../../../../../common/language/TranslateUtils';
// import { GlobalVar } from '../GlobalVar';
// import { PlayerUtils } from '../../../../../../common/utils/PlayerUtils';
// import { MatcherMgr } from '../match/MatcherMgr';
// import { MatchUser } from '../match/MatchUser';

// export type RoomPlayer = MatchPto.IRoomPlayer & { gateNode: string, sessionId: number, logicNode: string, battlePlayer?: PlayerPto.IBattlePlayer };
// const MaxPlayerCount = 2;
// export class Room {
//     private _roomId: number;

//     private _roomSetting: MatchPto.IRoomSetting;

//     get roomSetting() { return this._roomSetting; }

//     private _playerList: Array<RoomPlayer> = [];

//     private _isMatching: boolean = false;

//     constructor(roomId: number, gateNode: string, sessionId: number, logicNode: string,
//         playerInfo: MatchPto.IRoomPlayer, roomSetting: MatchPto.IRoomSetting) {
//         this._roomId = roomId;
//         this._roomSetting = roomSetting;
//         this._playerList.push({
//             gateNode, sessionId, logicNode, ...playerInfo, isReady: true,
//         });
//         this.sendMessageByGateInfo(new MatchPto.S_JOIN_ROOM({
//             roomId,
//             players: this._playerList,
//             setting: this._roomSetting,
//         }), gateNode, sessionId);
//     }

//     onDismiss() {
//         this._playerList = null;
//         RoomMgr.ins().onDismissRoom(this._roomId);
//     }

//     joinRoom(gateNode: string, sessionId: number, logicNode: string, playerInfo: MatchPto.IRoomPlayer) {
//         if (this._isMatching) {
//             return false;
//         }
//         if (MaxPlayerCount <= this._playerList.length) {
//             return false;
//         }
//         for (let index = 0; index < this._playerList.length; index++) {
//             const p = this._playerList[index];
//             if (p.userId === playerInfo.userId) {
//                 return true;
//             }
//         }
//         const p: RoomPlayer = {
//             gateNode, sessionId, logicNode, ...playerInfo, isReady: false,
//         };
//         this._playerList.push(p);
//         this.sendMessageByGateInfo(new MatchPto.S_JOIN_ROOM({
//             roomId: this._roomId,
//             players: this._playerList,
//             setting: this._roomSetting,
//         }), gateNode, sessionId);
//         this.broadcast(new MatchPto.S_BROADCAST_JOIN_ROOM({ player: p }), p.userId);
//         return true;
//     }

//     /** 离开房间原因 0:主动离开 1:被踢出 2:断线离开 */
//     leaveRoom(userId: string, reason: number = 0) {
//         const index = this._playerList.findIndex((p) => p.userId === userId);
//         if (index < 0) {
//             return;
//         }
//         this.broadcast(new MatchPto.S_BROADCAST_LEAVE_ROOM({ userId, reason }));
//         // 被踢出要通知logic清空房间信息
//         if (reason === 1) {
//             const targetPlayer = this._playerList[index];
//             rpc.logic.roomRemote.sendOnKicked({ type: RpcRouteType.Target, nodeId: targetPlayer.logicNode }, targetPlayer.userId, this._roomId);
//         }
//         this._playerList.splice(index, 1);
//         if (this._playerList.length === 0) {
//             this.onDismiss();
//             return;
//         }
//         // 房主离开直接需要把房主给下一个人,并且通知对方
//         if (index === 0) {
//             const newOwner = this._playerList[0];
//             newOwner.isReady = true;
//             this.broadcast(new MatchPto.S_BROADCAST_NEW_OWNER({ userId: newOwner.userId }));
//         }
//     }

//     /** 是否是房主 */
//     isMaster(userId: string) {
//         return this._playerList?.[0].userId === userId;
//     }

//     kick(selfUserId: string, targetUserId: string) {
//         if (this.isMaster(selfUserId) === false) {
//             return;
//         }
//         this.leaveRoom(targetUserId, 1);
//     }

//     modifyReadyStatus(userId: string) {
//         const player = this._playerList.find((p) => p.userId === userId);
//         if (!player) { return; }
//         player.isReady = !player.isReady;
//         this.broadcast(new MatchPto.S_BROADCAST_READY_STATUS_UPDATE({ userId, isReady: player.isReady }));
//     }

//     urgeRoomPlayer(selfUserId: string, targetUserId: string) {
//         const self = this._playerList.find((p) => p.userId === selfUserId);
//         if (!self) { logger.error(`urgeRoomPlayer wrong selfUserId:${selfUserId}`, this._playerList); return; }
//         const target = this._playerList.find((p) => p.userId === targetUserId);
//         if (!target) { return; }
//         this.sendMessageByGateInfo(new MatchPto.S_URGE_ROOM_PLAYER(), target.gateNode, target.sessionId);
//     }

//     modifyRoomSetting(selfUserId: string, roomSetting: MatchPto.IRoomSetting) {
//         if (this.isMaster(selfUserId) === false) {
//             return;
//         }
//         this._roomSetting = roomSetting;
//         this.broadcast(new MatchPto.S_BROADCAST_ROOM_SETTING({ setting: roomSetting }));
//     }

//     matchSuccess(user1: MatchUser, user2: MatchUser) {
//         this._isMatching = false;
//         const targetPlayer = user2.roomPlayer as RoomPlayer;
//         // 玩家2离开自己的房间
//         user2.room.leaveRoom(targetPlayer.userId);
//         // 玩家2加入玩家1房间
//         this.joinRoom(targetPlayer.gateNode, targetPlayer.sessionId, targetPlayer.logicNode, user2.roomPlayer);
//         rpc.logic.roomRemote.sendOnMatchSuccess({ type: RpcRouteType.Target, nodeId: targetPlayer.logicNode }, targetPlayer.userId, this._roomId);
//         // 玩家2准备
//         this.modifyReadyStatus(targetPlayer.userId);
//         // 开始游戏
//         this.reqStartGame(user1.roomPlayer.userId);
//     }

//     startMatching() {
//         if (this._isMatching) {
//             return false;
//         }
//         if (this._playerList.length !== 1) {
//             return false;
//         }
//         const matcher = MatcherMgr.getMatcher(this.roomSetting.type);
//         if (!matcher) {
//             return false;
//         }
//         const roomPlayer = this._playerList[0];
//         matcher.startMatch(roomPlayer, this, this.roomSetting.stageId);
//         this._isMatching = true;
//         return true;
//     }

//     stopMatching() {
//         if (!this._isMatching) {
//             return false;
//         }
//         const matcher = MatcherMgr.getMatcher(this.roomSetting.type);
//         if (!matcher) {
//             return false;
//         }
//         matcher.stopMatch(this._playerList[0].userId);
//         this._isMatching = false;
//         return true;
//     }

//     async reqStartGame(selfUserId: string) {
//         if (this.isMaster(selfUserId) === false) {
//             return;
//         }
//         // 检查人数是否够了
//         if (this._playerList.length !== 2) {
//             this.sendMessageByUserId(selfUserId, new SystemPto.S_ERROR({ msg: TranslateUtils.translate('不满足条件', serviceConfig.language) }));
//             return;
//         }

//         // 检查是否都准备了
//         for (let index = 0; index < this._playerList.length; index++) {
//             const p = this._playerList[index];
//             if (p.isReady === false) {
//                 this.sendMessageByUserId(selfUserId, new SystemPto.S_ERROR({ msg: TranslateUtils.translate('不满足条件', serviceConfig.language) }));
//                 return;
//             }
//         }

//         // 开始游戏
//         const address = await GlobalVar.battleAddressMgr.getRandomBattleAddress();
//         if (!address) {
//             this.sendMessageByUserId(selfUserId, new SystemPto.S_ERROR({ msg: TranslateUtils.translate('未知错误', serviceConfig.language) }));
//         } else {
//             this.onGameStart(address);
//         }
//     }

//     private async onGameStart(address: string) {
//         const redisClient = await GlobalVar.redisMgr.getClient();
//         const battleToken = Uuid.v4();
//         const userTokens = [];
//         const userIds = [];
//         // const userIds = this._playerList.map((p) => p.userId);
//         const players: PlayerPto.IBattlePlayer[] = [];
//         const tasks: Promise<void>[] = [];
//         for (let index = 0; index < this._playerList.length; index++) {
//             const roomPlayer = this._playerList[index];
//             // 如果已经有战斗对象信息,就不需要去获取了
//             if (roomPlayer.battlePlayer) {
//                 players[index] = roomPlayer.battlePlayer;
//                 // 使用完就要置空,否则下一场玩家换阵了也无法更新
//                 roomPlayer.battlePlayer = null;
//                 continue;
//             }
//             tasks.push(PlayerUtils.getBattlePlayer(roomPlayer.userId, GlobalVar.redisMgr, GlobalVar.sequelizeDbMgr).then((battlePlayer) => {
//                 players[index] = battlePlayer;
//             }));

//             userIds.push(roomPlayer.userId);
//             userTokens.push(Uuid.v4());
//         }
//         await Promise.all(tasks);
//         // 设置战斗信息到redis
//         redisClient.setData(`battle_token:${battleToken}`, JSON.stringify({
//             address,
//             roomSetting: this._roomSetting,
//             players,
//         }), 1200);

//         for (let index = 0; index < this._playerList.length; index++) {
//             const roomPlayer = this._playerList[index];
//             // 非房主的准备状态设置成false
//             if (this.isMaster(roomPlayer.userId) === false && roomPlayer.isReady) {
//                 this.modifyReadyStatus(roomPlayer.userId);
//             }
//             // 通知玩家开始游戏
//             const userToken = userTokens[index];
//             redisClient.setData(`user_battle_token:${userToken}`, JSON.stringify({
//                 battleToken,
//                 userId: roomPlayer.userId,
//                 userIds,
//                 userTokens,
//             }), 1200);
//             this.sendMessageByGateInfo(new MatchPto.S_START_GAME({
//                 expireTime: Date.now() + 15000,
//                 battleToken: userToken,
//                 address,
//                 players,
//             }), roomPlayer.gateNode, roomPlayer.sessionId);
//         }
//     }

//     broadcast(message: IGameMessage, excludeUserId?: string) {
//         const buffer = ProtoBufEncoder.encode(message);
//         for (let index = 0; index < this._playerList.length; index++) {
//             const p = this._playerList[index];
//             if (excludeUserId && p.userId === excludeUserId) {
//                 continue;
//             }
//             rpc.gate.gateRemote.sendSendMessage({ type: RpcRouteType.Target, nodeId: p.gateNode }, p.sessionId, buffer);
//         }
//     }

//     sendMessageByGateInfo(message: IGameMessage, gateNode: string, sessionId: number) {
//         rpc.gate.gateRemote.sendSendMessage(
//             { type: RpcRouteType.Target, nodeId: gateNode },
//             sessionId,
//             ProtoBufEncoder.encode(message),
//         );
//     }

//     sendMessageByUserId(userId: string, message: IGameMessage) {
//         const player = this._playerList.find((p) => p.userId === userId);
//         if (player) {
//             this.sendMessageByGateInfo(message, player.gateNode, player.sessionId);
//         }
//     }
// }
