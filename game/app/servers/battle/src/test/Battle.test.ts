// import { BattlePto } from '../../../../../../common/proto/CommonProto';
// import { ProtoBufEncoder } from '../../../../../../common/proto/ProtoBufEncoder';
// import { BattleTable } from '../battle/BattleTable';
// import * as allProto from '../../../../../../common/proto/CommonProto';
// import assert = require('assert');

// ProtoBufEncoder.init(allProto);
// describe('Battle', () => {
//     it("序列化占用一帧时间百分比测试", async function () {
//         const tableCount = 10000;
//         const playerCount = 2;
//         const messageCount = BattleTable.FrameRate * tableCount * playerCount;
//         const maxUseTime = 500;
//         this.slow(maxUseTime);
//         const startTime = Date.now();
//         for (let i = 0; i < messageCount; i++) {
//             const buffer = ProtoBufEncoder.encode(new BattlePto.S_BATTLE_START({
//                 seed: i,
//                 frameRate: BattleTable.FrameRate,
//             }));
//             if (buffer.length < 10) {
//                 throw new Error("buff length error");
//             }
//         }
//         const useTime = Date.now() - startTime;
//         console.log(
//             `${tableCount} tables, ${playerCount} players, ${messageCount} messages, 帧率:${BattleTable.FrameRate},` +
//             ` proto encode time: ${useTime}ms, 协议序列化占用一帧时间百分比: ${useTime / 1000 * 100}%`
//         );
//         assert.strictEqual(useTime < maxUseTime, true);
//     });
// });