// import { BattlePto } from '../../../../../../common/proto/CommonProto';
// import { ProtoBufEncoder } from '../../../../../../common/proto/ProtoBufEncoder';
// import { BattleSession } from '../BattleSession';
// import { GlobalVar } from '../GlobalVar';

// export class BattleTable {
//     static FrameRate = 20;

//     static MaxTableDurationSec = 20 * 60; // 20分钟

//     static MaxFrame = BattleTable.FrameRate * BattleTable.MaxTableDurationSec;

//     private static _emptyFrame: Buffer;

//     private static getEmptyFrame() {
//         if (!this._emptyFrame) {
//             this._emptyFrame = ProtoBufEncoder.encode(new BattlePto.S_BATTLE_LOGIC_FRAME());
//         }
//         return this._emptyFrame;
//     }

//     private static _expireBuffer: Buffer;

//     private static getExpireBuffer() {
//         if (!this._expireBuffer) {
//             this._expireBuffer = ProtoBufEncoder.encode(new BattlePto.S_BATTLE_EXPIRE());
//         }
//         return this._expireBuffer;
//     }

//     private static _errorBuffer: Buffer;

//     private static getErrorBuffer() {
//         if (!this._errorBuffer) {
//             this._errorBuffer = ProtoBufEncoder.encode(new BattlePto.S_BATTLE_ERROR());
//         }
//         return this._errorBuffer;
//     }

//     private _userIds: string[];

//     private _battleToken: string;

//     get battleToken() { return this._battleToken; }

//     private _sessions: BattleSession[] = [];

//     /** 如果到达指定时间游戏还未开始,则销毁桌子,弹出过期 */
//     private _expireTime: number;

//     private _isStartGame: boolean = false;

//     get isStartGame() { return this._isStartGame; }

//     protected _isDestroy: boolean = false;

//     get isDestroy() { return this._isDestroy; }

//     private _randomSeed: number;

//     private _frameId: number = 0;

//     /** 保存所有玩家的输入帧 */
//     private _recoverList: BattlePto.IRecoverFrame[];

//     /** 保存当前帧的玩家输入 */
//     private _framePlayerInput: BattlePto.IPlayerFrameInput[];

//     constructor(userIds: string[], userTokens: string[], battleToken: string) {
//         this._userIds = userIds;
//         this._battleToken = battleToken;
//         this._expireTime = Date.now() + 15000;// 15秒后如果游戏没有开始就会过期
//         logger.debug('创建战斗房间', userIds, battleToken);
//         GlobalVar.redisMgr.getClient().then((redisClient) => {
//             for (let index = 0; index < userIds.length; index++) {
//                 const userId = userIds[index];
//                 const userToken = userTokens[index];
//                 // 房间创建后就设置玩家的重连信息
//                 // 方便玩家重连
//                 redisClient.setData(`battle_recover:${userId}`,
//                     {
//                         battleToken,
//                         userToken,
//                     },
//                     BattleTable.MaxTableDurationSec);
//             }
//         });
//     }

//     onPlayerDisConnect(session: BattleSession) {
//         const index = this._userIds.indexOf(session.userId);
//         if (index === -1) {
//             return;
//         }
//         this._sessions[index] = null;
//         // 如果所有玩家都离线,销毁桌子
//         if (this.isStartGame) {
//             for (let z = 0; z < this._userIds.length; z++) {
//                 const tempSession = this._sessions[z];
//                 if (tempSession != null) {
//                     return;
//                 }
//             }
//             this.destroy();
//         }
//     }

//     onPlayerConnect(session: BattleSession) {
//         if (this._isDestroy) {
//             session.close(4001, 'token expired');
//             return;
//         }
//         const index = this._userIds.indexOf(session.userId);
//         // 不存在的玩家
//         if (index === -1) {
//             session.close(4001, 'unkown user');
//             return;
//         }
//         // 已经有session了,可能是新设备登录,断开旧连接
//         if (this._sessions[index] != null) {
//             this._sessions[index].close(4001, 'new device connect');
//         }
//         this._sessions[index] = session;
//         session.setTable(this);
//     }

//     logicRun(now: number) {
//         if (!this._isStartGame) {
//             if (now > this._expireTime) {
//                 logger.debug('房间超时');
//                 this.onTableExpire();
//             }
//         } else {
//             if (this._framePlayerInput.length !== 0) {
//                 this.broadcast(new BattlePto.S_BATTLE_LOGIC_FRAME({ playerInputs: this._framePlayerInput }));
//                 this._recoverList.push({ frameId: this._frameId, playerInputs: this._framePlayerInput });
//                 this._framePlayerInput = [];
//             } else {
//                 this.broadcastBuffer(BattleTable.getEmptyFrame());
//             }
//             this._frameId += 1;
//             if (this._frameId >= BattleTable.MaxFrame) {
//                 // 超过设计时间,强制结束游戏
//                 this.destroy(true);
//             }
//         }
//     }

//     onPlayerReady(session: BattleSession) {
//         session.isReady = true;
//         logger.debug(session.userId, '准备好了');
//         this.checkStartGame();
//     }

//     private checkStartGame() {
//         for (let index = 0; index < this._userIds.length; index++) {
//             const session = this._sessions[index];
//             if (session == null || !session.isReady) {
//                 return;
//             }
//         }
//         this.startGame();
//     }

//     private startGame() {
//         this._recoverList = [];
//         this._framePlayerInput = [];
//         this._randomSeed = Math.floor(Math.random() * 10000000);
//         logger.info(`table[${this._battleToken}]随机数设置为:${this._randomSeed}`);
//         this._isStartGame = true;
//         this.broadcast(new BattlePto.S_BATTLE_START({
//             seed: this._randomSeed,
//             frameRate: BattleTable.FrameRate,
//         }));
//     }

//     private onTableExpire() {
//         this.broadcastBuffer(BattleTable.getExpireBuffer());
//         this.destroy();
//     }

//     broadcast(message: IGameMessage) {
//         this.broadcastBuffer(ProtoBufEncoder.encode(message));
//     }

//     broadcastBuffer(buffer: Buffer) {
//         this._sessions.forEach((s) => {
//             s?.sendBuffer(buffer);
//         });
//     }

//     destroy(isError?: boolean) {
//         if (isError) {
//             this.broadcastBuffer(BattleTable.getErrorBuffer());
//         }
//         this._sessions.forEach((s) => {
//             s?.close(4001, 'end');
//         });
//         GlobalVar.redisMgr.getClient().then((redisClient) => {
//             // 删除房间相关的信息
//             redisClient.delete(`battle_token:${this.battleToken}`);
//             this._userIds.forEach((userId) => {
//                 // 删除玩家的重连信息
//                 redisClient.delete(`battle_recover:${userId}`);
//             });
//         });
//         this._isDestroy = true;
//     }

//     onGameOver() {
//         if (this._isDestroy) {
//             return;
//         }
//         this.broadcast(new BattlePto.S_BATTLE_END());
//         this.destroy();
//     }

//     addPlayerInput(playerInput: BattlePto.IPlayerFrameInput) {
//         this._framePlayerInput.push(playerInput);
//     }

//     recover(session: BattleSession) {
//         session.sendMessage(new BattlePto.S_BATTLE_RECOVER({
//             recoverFrames: this._recoverList,
//             curFrame: this._frameId,
//             seed: this._randomSeed,
//             frameRate: BattleTable.FrameRate,
//         }));
//     }

//     exit(session: BattleSession) {
//         const index = this._userIds.indexOf(session.userId);
//         // 插入玩家离开帧
//         this.addPlayerInput({ playerId: index, inputs: [{ type: BattlePto.GameInputTypeEnum.PlayerLeave }] });
//         // 删除此玩家的重连数据
//         GlobalVar.redisMgr.getClient().then((redisClient) => {
//             redisClient.delete(`battle_recover:${session.userId}`);
//         });
//         session.close(4001, 'exit');
//     }
// }
