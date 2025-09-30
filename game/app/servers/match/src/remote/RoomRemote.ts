// import { RpcRouteType } from 'stone-framework';
// import { RoomMgr } from '../room/RoomMgr';
// import { ProtoBufEncoder } from '../../../../../../common/proto/ProtoBufEncoder';
// import { SystemPto } from '../../../../../../common/proto/CommonProto';
// import { TranslateKey, TranslateUtils } from '../../../../../../common/language/TranslateUtils';

// export class RoomRemote {
//     createRoom(gateNode: string, sessionId: number, logicNode: string, playerInfo: any, roomSetting: any): number {
//         return RoomMgr.ins().createRoom(gateNode, sessionId, logicNode, playerInfo, roomSetting);
//     }

//     joinRoom(roomId: number, gateNode: string, sessionId: number, logicNode: string, playerInfo: any): boolean {
//         const room = RoomMgr.ins().getRoom(roomId);
//         if (room) {
//             if (!room.joinRoom(gateNode, sessionId, logicNode, playerInfo)) {
//                 this.sendErrorMessage(gateNode, sessionId, '房间已满');
//                 return false;
//             }
//         } else {
//             this.sendErrorMessage(gateNode, sessionId, '房间不存在');
//             return false;
//         }
//         return true;
//     }

//     leaveRoom(roomId: number, userId: string, reason: number): void {
//         const room = RoomMgr.ins().getRoom(roomId);
//         if (room) {
//             room.leaveRoom(userId, reason);
//         }
//     }

//     modifyReadyStatus(roomId: number, userId: string): void {
//         const room = RoomMgr.ins().getRoom(roomId);
//         if (room) {
//             room.modifyReadyStatus(userId);
//         }
//     }

//     kickRoomPlayer(roomId: number, selfUserId: string, targetUserId: string): void {
//         const room = RoomMgr.ins().getRoom(roomId);
//         if (room) {
//             room.kick(selfUserId, targetUserId);
//         }
//     }

//     urgeRoomPlayer(roomId: number, selfUserId: string, targetUserId: string): void {
//         const room = RoomMgr.ins().getRoom(roomId);
//         if (room) {
//             room.urgeRoomPlayer(selfUserId, targetUserId);
//         }
//     }

//     modifyRoomSetting(roomId: number, selfUserId: string, roomSetting: any): void {
//         const room = RoomMgr.ins().getRoom(roomId);
//         if (room) {
//             room.modifyRoomSetting(selfUserId, roomSetting);
//         }
//     }

//     getRoomSetting(roomId: number): any {
//         const room = RoomMgr.ins().getRoom(roomId);
//         return room?.roomSetting;
//     }

//     reqStartGame(roomId: number, selfUserId: string): void {
//         const room = RoomMgr.ins().getRoom(roomId);
//         if (room) {
//             room.reqStartGame(selfUserId);
//         }
//     }

//     reqStartMatching(roomId: number): boolean {
//         const room = RoomMgr.ins().getRoom(roomId);
//         if (room) {
//             return room.startMatching();
//         }
//         return false;
//     }

//     reqStopMatching(roomId: number): boolean {
//         const room = RoomMgr.ins().getRoom(roomId);
//         if (room) {
//             return room.stopMatching();
//         }
//         return false;
//     }

//     sendErrorMessage(gateNode: string, sessionId: number, key: TranslateKey): void {
//         rpc.gate.gateRemote.sendSendMessage(
//             { type: RpcRouteType.Target, nodeId: gateNode },
//             sessionId,
//             ProtoBufEncoder.encode(new SystemPto.S_ERROR({ msg: TranslateUtils.translate(key, serviceConfig.language) })),
//         );
//     }
// }
