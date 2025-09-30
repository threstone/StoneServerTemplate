// import { GlobalVar } from './GlobalVar';

// export class BattleAddressMgr {
//     private _address: string[];

//     private _index: number = 0;

//     private _promise: Promise<void>;

//     async getRandomBattleAddress() {
//         if (!this._address) {
//             await this.init();
//         }
//         if (this._address == null) {
//             return null;
//         }
//         this._index += 1;
//         return this._address[this._index % this._address.length];
//     }

//     private async init() {
//         if (this._promise) {
//             return this._promise;
//         }
//         this._promise = new Promise(async (resolve) => {
//             const redisClient = await GlobalVar.redisMgr.getClient();
//             const json = await redisClient.getData('battle_address');
//             if (json) {
//                 this._address = JSON.parse(json);
//             }
//             this._promise = null;
//             resolve();
//         });
//         return this._promise;
//     }
// }
