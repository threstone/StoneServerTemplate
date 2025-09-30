// import { MatchPto } from '../../../../../../common/proto/CommonProto';
// import { BaseMatcher } from './BaseMatcher';
// import { TeamFightRobotAdd } from './component/TeamFightRobotAdd';
// import { RankMatcher } from './RankMatcher';

// export class MatcherMgr {
//     private static _insMap: Map<MatchPto.MatchTypeEnum, BaseMatcher>;

//     static init() {
//         this._insMap = new Map();
//         // 暂时没有普通匹配类的需求
//         // this._insMap.set(MatchTypeEnum.Nomal, new NormalMatch(MatchTypeEnum.Nomal));

//         // 组队作战匹配,stageId作为rank,允许的最大分差为0
//         this._insMap.set(MatchPto.MatchTypeEnum.TeamFight,
//             new RankMatcher(MatchPto.MatchTypeEnum.TeamFight, 0, [
//                 new TeamFightRobotAdd(),
//             ]));
//     }

//     static startLogic() {
//         setInterval(this.logicRun.bind(MatcherMgr), 1000);
//     }

//     private static logicRun() {
//         this._insMap.forEach((m) => { m.logicRun(); });
//     }

//     static getMatcher(matchType: MatchPto.MatchTypeEnum) {
//         return this._insMap.get(matchType);
//     }
// }
