// import { MatchPto } from '../../../../../../common/proto/CommonProto';
// import { Room } from './Room';

// export class RoomMgr {
//     private _roomMap: Map<number, Room>;

//     private _incrId = 0;

//     private static _ins: RoomMgr;

//     static ins() {
//         if (!RoomMgr._ins) {
//             RoomMgr._ins = new RoomMgr();
//         }
//         return RoomMgr._ins;
//     }

//     constructor() {
//         this._roomMap = new Map<number, Room>();
//     }

//     getNewRoomId() {
//         this._incrId += 1;
//         return this._incrId;
//     }

//     /** 创建房间 */
//     createRoom(gateNode: string, sessionId: number, logicNode: string, playerInfo: MatchPto.IRoomPlayer, roomSetting: MatchPto.IRoomSetting) {
//         const roomId = this.getNewRoomId();
//         const room = new Room(roomId, gateNode, sessionId, logicNode, playerInfo, roomSetting);
//         this._roomMap.set(roomId, room);
//         return roomId;
//     }

//     getRoom(roomId: number) {
//         return this._roomMap.get(roomId);
//     }

//     /** 解散房间 */
//     onDismissRoom(roomId: number) {
//         this._roomMap.delete(roomId);
//     }
// }
