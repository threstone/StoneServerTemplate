// import * as service from '../../../../config/service.json';
// import { ProtoBufEncoder } from '../../../../../common/proto/ProtoBufEncoder';
// import * as allProto from '../../../../../common/proto/CommonProto';
// import { MatcherMgr } from './match/MatcherMgr';
// import { RedisMgr } from '../../../../../common/redis/RedisMgr';
// import { BattleAddressMgr } from './BattleAddressMgr';
// import { SequelizeDbMgr } from '../../../../../common/sequelize/SequelizeDbMgr';
// import { ConfigMgr } from '../../../core/config/ConfigMgr';

// export class GlobalVar {
//     static redisMgr: RedisMgr;

//     static sequelizeDbMgr: SequelizeDbMgr;

//     static battleAddressMgr: BattleAddressMgr;

//     static async init() {
//         global.serviceConfig = service[env];
//         this.initDb();

//         // 初始化配置相关逻辑
//         await ConfigMgr.init(this.redisMgr, 'server');

//         this.initMsgHandler();

//         this.battleAddressMgr = new BattleAddressMgr();

//         MatcherMgr.init();
//         MatcherMgr.startLogic();
//     }

//     /** 初始化protobuf协议映射 */
//     static initMsgHandler() {
//         ProtoBufEncoder.init(allProto);
//     }

//     /** 初始化db相关 : mysql & redis */
//     private static initDb() {
//         this.redisMgr = new RedisMgr();
//         // sequelize相关
//         this.sequelizeDbMgr = new SequelizeDbMgr(serviceConfig.mysql);
//     }
// }
