// import { RpcRouteType } from 'stone-framework';
// import { MatchPto } from '../../../../../../common/proto/CommonProto';
// import { Player } from '../core/player/Player';
// import { LogicSession } from '../core/session/LogicSession';
// import { MessageHandler } from '../../../../core/proto/ProtoDecorator';
// import { MatchComponent } from '../core/component/MatchComponent';
// import { GlobalVar } from '../GlobalVar';
// import { PlayerComponent } from '../core/component/PlayerComponent';
// import { Cfg } from '../../../../core/config/Cfg';
// import { ProtoBufEncoder } from '../../../../../../common/proto/ProtoBufEncoder';

// export class MatchHandler {
//     // 请求匹配信息
//     @MessageHandler(MatchPto.C_GET_MATCH_INFO)
//     async getMatchInfo(session: LogicSession, player: Player) {
//         const notify = new MatchPto.S_GET_MATCH_INFO(player.playerInfo.matchInfo);
//         const redisClient = await GlobalVar.redisMgr.getClient();
//         const recoverJson = await redisClient.getData(`battle_recover:${player.userId}`);
//         if (recoverJson) {
//             try {
//                 const { battleToken, userToken } = JSON.parse(recoverJson);
//                 const jsonInfo = await redisClient.getData(`battle_token:${battleToken}`);
//                 if (jsonInfo) {
//                     const recoverInfo = JSON.parse(jsonInfo) as MatchPto.IRecoverInfo;
//                     recoverInfo.battleToken = userToken;
//                     notify.recoverInfo = recoverInfo;
//                 }
//             } catch (error) {
//                 logger.error('获取战斗恢复信息失败', error);
//             }
//         }
//         session.sendMessage(notify);
//     }

//     // 请求修改匹配信息 通知 S_GET_MATCH_INFO
//     @MessageHandler(MatchPto.C_MODIFY_MATCH_INFO)
//     modifyMatchInfo(session: LogicSession, player: Player, msg: MatchPto.C_MODIFY_MATCH_INFO) {
//         const { matchInfo } = player.playerInfo;
//         const oldAcceptInvite = matchInfo.isAcceptInvite;
//         matchInfo.isUseEnergy = msg.isUseEnergy;
//         matchInfo.isAcceptInvite = msg.isAcceptInvite;

//         if (oldAcceptInvite !== matchInfo.isAcceptInvite) {
//             if (matchInfo.isAcceptInvite) {
//                 player.getComponent(MatchComponent).addInviteInfo();
//             } else {
//                 player.getComponent(MatchComponent).removeInviteInfo();
//             }
//         }
//         player.savePlayerInfoForAttr('matchInfo');
//         session.sendMessage(new MatchPto.S_GET_MATCH_INFO(player.playerInfo.matchInfo));
//     }

//     // 请求创建房间
//     @MessageHandler(MatchPto.C_CREATE_ROOM)
//     async createRoom(session: LogicSession, player: Player, msg: MatchPto.C_CREATE_ROOM) {
//         const comp = player.getComponent(MatchComponent);
//         if (comp.roomId) {
//             session.sendErrorMessage('重复请求');
//             return;
//         }
//         const roomId = await rpc.match.roomRemote.callCreateRoom(
//             { type: RpcRouteType.All },
//             session.gateNodeId,
//             session.sessionId,
//             nodeId,
//             {
//                 userId: player.userId,
//                 nickname: player.playerInfo.nickname,
//                 battlePower: player.playerInfo.battlePower,
//                 equipWeaponId: player.playerInfo.fashionInfo.equipWeaponId,
//                 equipFashionId: player.playerInfo.fashionInfo.equipFashionId,
//                 lv: player.playerInfo.lv,
//                 maxNomalStage: player.playerInfo.maxNomalStage,
//                 icon: player.playerInfo.icon,
//                 iconBg: player.playerInfo.iconBg,
//             },
//             msg.setting,
//         );
//         if (!roomId) {
//             session.sendErrorMessage('未知错误');
//         } else {
//             comp.doEnterRoom(roomId);
//         }
//     }

//     // 请求加入房间
//     @MessageHandler(MatchPto.C_JOIN_ROOM)
//     async joinRoom(session: LogicSession, player: Player, msg: MatchPto.C_JOIN_ROOM) {
//         const result = await rpc.match.roomRemote.callJoinRoom(
//             { type: RpcRouteType.All },
//             msg.roomId,
//             session.gateNodeId,
//             session.sessionId,
//             nodeId,
//             {
//                 userId: player.userId,
//                 nickname: player.playerInfo.nickname,
//                 battlePower: player.playerInfo.battlePower,
//                 equipWeaponId: player.playerInfo.fashionInfo.equipWeaponId,
//                 equipFashionId: player.playerInfo.fashionInfo.equipFashionId,
//                 lv: player.playerInfo.lv,
//                 maxNomalStage: player.playerInfo.maxNomalStage,
//                 icon: player.playerInfo.icon,
//                 iconBg: player.playerInfo.iconBg,
//             },
//         );
//         if (result) {
//             player.getComponent(MatchComponent).doEnterRoom(msg.roomId);
//         }
//     }

//     // 请求离开房间,房主离开房间会导致房间解散
//     @MessageHandler(MatchPto.C_LEAVE_ROOM)
//     leaveRoom(session: LogicSession, player: Player, msg: MatchPto.C_LEAVE_ROOM) {
//         player.getComponent(MatchComponent).doLeaveRoom(msg.roomId, 0);
//     }

//     // 请求修改准备状态
//     @MessageHandler(MatchPto.C_MODIFY_READY_STATUS, { reqInterval: Cfg.TeamFightConfig.get(1).prepareInterval })
//     modifyReadyState(session: LogicSession, player: Player) {
//         const comp = player.getComponent(MatchComponent);
//         if (!comp.roomId) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         rpc.match.roomRemote.sendModifyReadyStatus({ type: RpcRouteType.All }, comp.roomId, player.userId);
//     }

//     // 房主踢出玩家
//     @MessageHandler(MatchPto.C_KICK_ROOM_PLAYER)
//     kickRoomPlayer(session: LogicSession, player: Player, msg: MatchPto.C_KICK_ROOM_PLAYER) {
//         const comp = player.getComponent(MatchComponent);
//         if (!comp.roomId) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         rpc.match.roomRemote.sendKickRoomPlayer({ type: RpcRouteType.All }, comp.roomId, player.userId, msg.userId);
//     }

//     // 房主催促玩家准备(3s一次)
//     @MessageHandler(MatchPto.C_URGE_ROOM_PLAYER, { reqInterval: 3000 })
//     urgeRoomPlayer(session: LogicSession, player: Player, msg: MatchPto.C_URGE_ROOM_PLAYER) {
//         const comp = player.getComponent(MatchComponent);
//         if (!comp.roomId) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         rpc.match.roomRemote.sendUrgeRoomPlayer({ type: RpcRouteType.All }, comp.roomId, player.userId, msg.userId);
//     }

//     // 请求修改房间设置
//     @MessageHandler(MatchPto.C_MODIFY_ROOM_SETTING)
//     modifyRoomSetting(session: LogicSession, player: Player, msg: MatchPto.C_MODIFY_ROOM_SETTING) {
//         const comp = player.getComponent(MatchComponent);
//         if (!comp.roomId) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         rpc.match.roomRemote.sendModifyRoomSetting({ type: RpcRouteType.All }, comp.roomId, player.userId, msg.setting);
//     }

//     // 请求匹配邀请
//     @MessageHandler(MatchPto.C_MATCH_INVITE, { reqInterval: 600 })
//     async reqMatchInvite(session: LogicSession, player: Player, msg: MatchPto.C_MATCH_INVITE) {
//         const comp = player.getComponent(MatchComponent);
//         if (!comp.roomId || msg.userIds.length === 0 || msg.userIds.length > 20) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }

//         const roomSetting = await rpc.match.roomRemote.callGetRoomSetting({ type: RpcRouteType.All }, comp.roomId);
//         if (!roomSetting) {
//             session.sendErrorMessage('房间不存在');
//             return;
//         }
//         const notify = new MatchPto.S_MATCH_INVITE({
//             player: {
//                 userId: player.userId,
//                 nickname: player.playerInfo.nickname,
//                 battlePower: player.playerInfo.battlePower,
//                 lv: player.playerInfo.lv,
//                 icon: player.playerInfo.icon,
//             },
//             setting: roomSetting,
//             roomId: comp.roomId,
//             expireTime: Date.now() + Cfg.TeamFightConfig.get(1).inviteStatusTime,
//         });
//         const buffer = ProtoBufEncoder.encode(notify);
//         msg.userIds.forEach((userId) => {
//             if (userId === player.userId) {
//                 return;
//             }
//             player.sendMessageToPlayer(userId, buffer);
//         });
//     }

//     // 获取可邀请的在线玩家 (10s刷一次)
//     @MessageHandler(MatchPto.C_GET_INVITABLE_ONLINE_PLAYERS, { reqInterval: Cfg.TeamFightConfig.get(1).refreshInterval })
//     async getInvitableOnlinePlayers(session: LogicSession, player: Player, msg: MatchPto.C_GET_INVITABLE_ONLINE_PLAYERS) {
//         if (!MatchPto.MatchTypeEnum[msg.type]) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         const redisClient = await GlobalVar.redisMgr.getClient(1);
//         const redisKey = `match_invite:${msg.type}`;
//         const count = await redisClient.zcount(redisKey, msg.stageId, 99999999);
//         const getCount = Math.min(5, count);
//         let userIds: string[];
//         if (count === getCount) {
//             userIds = await redisClient.zrevrange(redisKey, 0, count - 1);
//         } else {
//             const startIndex = Math.floor(Math.random() * (count - getCount + 1));
//             userIds = await redisClient.zrange(redisKey, startIndex, startIndex + getCount);
//         }

//         const tasks: Promise<void>[] = [];
//         const players: MatchPto.IRoomPlayer[] = [];
//         const playerComp = player.getComponent(PlayerComponent);
//         for (let index = 0; index < userIds.length; index++) {
//             const userId = userIds[index];
//             if (userId === player.userId) {
//                 continue;
//             }
//             tasks.push(new Promise<void>(async (resolve) => {
//                 const playerInfo = await playerComp.getPlayerInfoByUserId(userId);
//                 if (playerInfo) {
//                     players.push(playerInfo);
//                 }
//                 resolve();
//             }));
//         }
//         await Promise.all(tasks);
//         session.sendMessage(new MatchPto.S_GET_INVITABLE_ONLINE_PLAYERS({ players, type: msg.type }));
//     }

//     // 拒绝邀请
//     @MessageHandler(MatchPto.C_REFUSE_INVITATION, { reqInterval: 600 })
//     refuseInvitation(session: LogicSession, player: Player, msg: MatchPto.C_REFUSE_INVITATION) {
//         player.sendMessageToPlayer(
//             msg.targetUserId,
//             ProtoBufEncoder.encode(new MatchPto.S_INVITATION_RESULT({ targetNickname: player.playerInfo.nickname })),
//         );
//     }

//     // 请求开始游戏
//     @MessageHandler(MatchPto.C_START_GAME, { reqInterval: 5000 })
//     reqStartGame(session: LogicSession, player: Player, msg: MatchPto.C_START_GAME) {
//         const comp = player.getComponent(MatchComponent);
//         if (!comp.roomId) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         rpc.match.roomRemote.sendReqStartGame({ type: RpcRouteType.All }, comp.roomId, player.userId);
//     }

//     // 请求开始匹配
//     @MessageHandler(MatchPto.C_START_MATCHING, { reqInterval: 3000 })
//     async startMatching(session: LogicSession, player: Player) {
//         const comp = player.getComponent(MatchComponent);
//         if (!comp.roomId) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         const result = await rpc.match.roomRemote.callReqStartMatching(
//             { type: RpcRouteType.All },
//             comp.roomId,
//         );
//         if (!result) {
//             session.sendErrorMessage('失败');
//         }
//     }

//     // 请求取消匹配
//     @MessageHandler(MatchPto.C_CANCEL_MATCHING, { reqInterval: 3000 })
//     async cancelMatching(session: LogicSession, player: Player) {
//         const comp = player.getComponent(MatchComponent);
//         if (!comp.roomId) {
//             session.sendErrorMessage('参数错误');
//             return;
//         }
//         const result = await rpc.match.roomRemote.callReqStopMatching(
//             { type: RpcRouteType.All },
//             comp.roomId,
//         );
//         if (!result) {
//             session.sendErrorMessage('失败');
//         }
//     }

//     // 联机点赞
//     @MessageHandler(MatchPto.C_TEAM_FIGHT_LIKE, { reqInterval: 15000 })
//     likeTarget(session: LogicSession, player: Player, msg: MatchPto.C_TEAM_FIGHT_LIKE) {
//         const comp = player.getComponent(MatchComponent);
//         comp.likeTarget(msg.userId);
//     }
// }
