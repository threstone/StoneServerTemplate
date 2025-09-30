// import { MatchPto } from '../../../../../../common/proto/CommonProto';
// import { BaseMatcher } from './BaseMatcher';
// import { BaseMatchComponent } from './component/BaseMatchComponent';

// /** 根据rank进行匹配 */
// export class RankMatcher extends BaseMatcher {
//     // 最大允许分差
//     private _maxAllowDif: number;

//     constructor(matchType: MatchPto.MatchTypeEnum, maxAllowDif: number, components?: BaseMatchComponent[]) {
//         super(matchType, components);
//         this._maxAllowDif = maxAllowDif;
//     }

//     logicRun(): void {
//         if (this._users.length <= 1) {
//             return;
//         }

//         const weightList: { weight: number, index: number }[] = [];
//         this._users.sort((a, b) => b.rank - a.rank);
//         for (let index = 0; index < this._users.length - 1; index++) {
//             const user = this._users[index];
//             const nextUser = this._users[index + 1];
//             const weight = user.rank - nextUser.rank;
//             if (weight <= this._maxAllowDif) {
//                 weightList.push({ weight, index });
//             }
//         }

//         const delUserSet = new Set<number>();
//         // 升序排序
//         weightList.sort((a, b) => a.weight - b.weight);
//         for (let index = 0; index < weightList.length; index++) {
//             const element = weightList[index];
//             const userIndex = element.index;
//             const nextIndex = element.index + 1;
//             if (delUserSet.has(userIndex) || delUserSet.has(nextIndex)) {
//                 continue;
//             }
//             const user = this._users[userIndex];
//             const nextUser = this._users[nextIndex];
//             this.matchSuccess(user, nextUser);
//             // 移除已匹配用户
//             delUserSet.add(userIndex);
//             delUserSet.add(nextIndex);
//         }

//         const newUsers = [];
//         this._userSet.clear();
//         for (let index = 0; index < this._users.length; index++) {
//             const element = this._users[index];
//             if (!delUserSet.has(index)) {
//                 newUsers.push(element);
//                 this._userSet.add(element.roomPlayer.userId);
//             }
//         }
//         this._users = newUsers;
//     }
// }
