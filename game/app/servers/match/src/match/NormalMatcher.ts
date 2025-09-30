// import { BaseMatcher } from './BaseMatcher';

// /** 普通匹配,无条件匹配 */
// export class NormalMatcher extends BaseMatcher {
//     logicRun(): void {
//         while (this._users.length > 1) {
//             const user1 = this._users.shift();
//             this._userSet.delete(user1.roomPlayer.userId);
//             const user2 = this._users.shift();
//             this._userSet.delete(user2.roomPlayer.userId);
//             this.matchSuccess(user1, user2);
//         }
//     }
// }
