import { GateServer } from './GateServer';
import * as service from '../../../../config/service.json';
import { ProtoBufEncoder } from '../../../../../common/proto/ProtoBufEncoder';
import * as allProto from '../../../../../common/proto/CommonProto';
import { RedisMgr } from '../../../../../common/redis/RedisMgr';

export class GlobalVar {
    static gateServer: GateServer;

    static redisMgr: RedisMgr;

    static init() {
        global.serviceConfig = service[env];

        ProtoBufEncoder.init(allProto);

        this.initDb();

        GlobalVar.gateServer = new GateServer(startupParam.port);
    }

    /** 初始化db相关 : mysql & redis */
    private static initDb() {
        this.redisMgr = new RedisMgr();
    }
}
