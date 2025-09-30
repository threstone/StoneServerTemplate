// import { MatchPto } from '../../../../../../common/proto/CommonProto';
// import { Room, RoomPlayer } from '../room/Room';
// import { BaseMatchComponent } from './component/BaseMatchComponent';
// import { MatchUser } from './MatchUser';

// export abstract class BaseMatcher {
//     protected _users: MatchUser[] = [];

//     get users(): MatchUser[] { return this._users; }

//     protected _userSet = new Set<string>();

//     get userSet(): Set<string> { return this._userSet; }

//     private _matchType: MatchPto.MatchTypeEnum;

//     // 匹配组件
//     private _components: BaseMatchComponent[] = [];

//     abstract logicRun(): void;

//     constructor(matchType: MatchPto.MatchTypeEnum, components?: BaseMatchComponent[]) {
//         this._matchType = matchType;
//         components?.forEach((comp) => { this.addComponent(comp); });
//         const { logicRun } = this;
//         this.logicRun = () => {
//             logicRun.call(this);
//             this._components.forEach((comp) => { comp.logicRun(); });
//         };
//     }

//     addComponent(component: BaseMatchComponent) {
//         this._components.push(component);
//         component.setMatcher(this);
//     }

//     startMatch(roomPlayer: RoomPlayer, room: Room, rank?: number): boolean {
//         if (!this._userSet.has(roomPlayer.userId)) {
//             this._userSet.add(roomPlayer.userId);
//             this._users.push({
//                 roomPlayer, room, rank, startTime: Date.now(),
//             });
//         }
//         return true;
//     }

//     stopMatch(userId: string): boolean {
//         if (this._userSet.has(userId)) {
//             this._userSet.delete(userId);
//             for (let index = 0; index < this._users.length; index++) {
//                 if (this._users[index].roomPlayer.userId === userId) {
//                     this._users.splice(index, 1);
//                     break;
//                 }
//             }
//         }
//         return true;
//     }

//     matchSuccess(user1: MatchUser, user2: MatchUser) {
//         user1.room.matchSuccess(user1, user2);
//     }
// }
