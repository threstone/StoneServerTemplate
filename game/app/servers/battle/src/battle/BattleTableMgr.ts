// import { IntervalTimer } from '../../../../core/utils/IntervalTimer';
// import { BattleTable } from './BattleTable';

// export class BattleTableMgr {
//     private static _ins: BattleTableMgr;

//     public static ins() {
//         if (this._ins == null) {
//             this._ins = new BattleTableMgr();
//         }
//         return this._ins;
//     }

//     private _tableMap = new Map<string, BattleTable>();

//     private _intervalTimer: IntervalTimer;

//     constructor() {
//         this._intervalTimer = new IntervalTimer(1000 / BattleTable.FrameRate, this.logicRun.bind(this));
//         this.startLogic();
//     }

//     public startLogic() {
//         this._intervalTimer.startTimer();
//     }

//     public stopLogic() {
//         this._intervalTimer.stopTimer();
//     }

//     private destroyTable(table: BattleTable) {
//         this._tableMap.delete(table.battleToken);
//     }

//     private logicRun() {
//         const now = Date.now();
//         this._tableMap.forEach((table) => {
//             if (!table.isDestroy) {
//                 try {
//                     table.logicRun(now);
//                 } catch (err) {
//                     table.destroy(true);
//                     const { message, stack } = err;
//                     logger.error(`桌局执行发生错误:\nmessage:${message}\nstack:${stack}`);
//                 }
//             } else {
//                 this.destroyTable(table);
//                 logger.debug('清理table');
//             }
//         });
//     }

//     getOrCreateTable(battleToken: string, userIds: string[], userTokens: string[]) {
//         let table = this._tableMap.get(battleToken);
//         if (!table) {
//             table = new BattleTable(userIds, userTokens, battleToken);
//             this._tableMap.set(battleToken, table);
//         }
//         return table;
//     }

//     getTable(battleToken: string) {
//         return this._tableMap.get(battleToken);
//     }
// }
