// import * as http from 'http';
// import { WebSocketServer } from '../../../core/net/WebSocketServer';
// import { BattleSession } from './BattleSession';
// import { GlobalVar } from './GlobalVar';
// import { BattleTableMgr } from './battle/BattleTableMgr';

// export class BattleServer extends WebSocketServer<BattleSession> {
//     constructor() {
//         const listenPort = serverConfig.port;
//         super(listenPort, BattleSession, { maxPayload: 1024 * 1024 });
//     }

//     async onClientConnect(session: BattleSession, request: http.IncomingMessage) {
//         const connectInfo: string = request.headers['sec-websocket-protocol'];
//         if (!connectInfo) {
//             session.close(4001, 'param error');
//             return;
//         }
//         const [userToken] = connectInfo?.split(',');
//         if (!userToken) {
//             session.close(4001, 'param error');
//             return;
//         }
//         const redisClient = await GlobalVar.redisMgr.getClient();
//         const jsonInfo = await redisClient.getData(`user_battle_token:${userToken}`);
//         if (!jsonInfo) {
//             session.close(4001, 'token expired');
//             return;
//         }
//         const {
//             userIds, userTokens, userId, battleToken,
//         } = JSON.parse(jsonInfo);
//         logger.debug(`玩家连接战斗服务器 userId:${userId},battleToken:${battleToken}`);
//         let table = BattleTableMgr.ins().getTable(battleToken);
//         if (!table) {
//             table = BattleTableMgr.ins().getOrCreateTable(battleToken, userIds, userTokens);
//         }
//         session.userId = userId;
//         table.onPlayerConnect(session);
//         session.onInitEnd();
//     }

//     onClientSocketClose(session: BattleSession): void {
//         session.onClose();
//     }
// }
