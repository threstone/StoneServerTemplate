// import * as WS from 'ws';
// import { WebSocketSession } from '../../../core/net/WebSocketSesstion';
// import { ProtoBufEncoder } from '../../../../../common/proto/ProtoBufEncoder';
// import { BattleTable } from './battle/BattleTable';

// export class BattleSession extends WebSocketSession {
//     userId: string;

//     isReady: boolean = false;

//     isInit: boolean = false;

//     private _cache: Buffer[] = [];

//     private _battleTable: BattleTable;

//     get battleTable() { return this._battleTable; }

//     async onClientMessage(message: WS.Data) {
//         try {
//             if (this.isInit === false) {
//                 this._cache.push(message as Buffer);
//                 return;
//             }
//             if (!Buffer.isBuffer(message)) {
//                 return;
//             }
//             const buffer = message as Buffer;
//             if (buffer.length < 8) {
//                 return;
//             }
//             const msg = ProtoBufEncoder.decode(buffer, 0);
//             const fun = ProtoBufEncoder.getHandlerFunction(msg.cmd, msg.scmd);
//             if (!fun) {
//                 logger.error(`消息${msg.cmd}-${msg.scmd}未注册`);
//                 return;
//             }
//             await fun(this, msg);
//         } catch (error) {
//             logger.error('处理消息失败', error);
//         }
//     }

//     onInitEnd() {
//         this.isInit = true;
//         if (this._cache.length > 0) {
//             this._cache.forEach((b) => {
//                 this.onClientMessage(b);
//             });
//             this._cache = [];
//         }
//     }

//     /** 主动关闭连接 */
//     close(code?: number, data?: string | Buffer) {
//         this.userId = null;
//         this._battleTable = null;
//         super.close(code, data);
//     }

//     onClose(): void {
//         this._battleTable?.onPlayerDisConnect(this);
//     }

//     setTable(table: BattleTable) {
//         this._battleTable = table;
//     }

//     sendMessage(message: IGameMessage) {
//         this.sendBuffer(ProtoBufEncoder.encode(message));
//     }
// }
