// import assert = require('assert');
// import { MatchPto } from '../../../../../../common/proto/CommonProto';
// import { MatcherMgr } from '../match/MatcherMgr';
// import { Room, RoomPlayer } from '../room/Room';
// describe('Matcher', () => {
//     MatcherMgr.init();
//     it("测试Rank Matcher耗时", async function () {
//         const maxUseTime = 500;
//         this.slow(maxUseTime);
//         const startTime = Date.now();
//         const userCount = 100000;
//         console.time(`测试玩家数${userCount} user init`);
//         const matcher = MatcherMgr.getMatcher(MatchPto.MatchTypeEnum.TeamFight);
//         for (let index = 0; index < userCount; index++) {
//             const player: RoomPlayer = { userId: `${index}` } as any;
//             const room: Room = { matchSuccess: () => { } } as any;
//             matcher.startMatch(player, room, Math.floor(Math.random() * 10));
//         }
//         console.timeEnd(`测试玩家数${userCount} user init`);
//         console.time(`测试玩家数${userCount} logicRun`);
//         matcher.logicRun();
//         console.timeEnd(`测试玩家数${userCount} logicRun`);

//         assert.strictEqual((Date.now() - startTime) < maxUseTime, true);
//     });
// });