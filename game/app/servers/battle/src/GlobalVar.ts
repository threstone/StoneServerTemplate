// import * as path from 'path';
// import { BattleServer } from './BattleServer';
// import * as service from '../../../../config/service.json';
// import { ProtoBufEncoder } from '../../../../../common/proto/ProtoBufEncoder';
// import * as allProto from '../../../../../common/proto/CommonProto';
// import { RedisMgr } from '../../../../../common/redis/RedisMgr';

// export class GlobalVar {
//     static battleServer: BattleServer;

//     static redisMgr: RedisMgr;

//     static init() {
//         global.serviceConfig = service[env];

//         this.initDb();
//         this.initMsgHandler();
//         this.battleServer = new BattleServer();
//     }

//     /** 初始化protobuf协议映射 */
//     static initMsgHandler() {
//         const handlerPath = path.join(__dirname, './handler');
//         ProtoBufEncoder.init(allProto, handlerPath);
//     }

//     /** 初始化db相关 : redis */
//     private static initDb() {
//         this.redisMgr = new RedisMgr();
//     }
// }
