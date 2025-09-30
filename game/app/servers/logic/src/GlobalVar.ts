import * as path from 'path';
import * as fs from 'fs';
import * as allProto from '../../../../../common/proto/CommonProto';
import { ProtoBufEncoder } from '../../../../../common/proto/ProtoBufEncoder';

import { SessionMgr } from './core/session/sessionMgr';
import { ServerMgr } from './core/server/ServerMgr';
import * as service from '../../../../config/service.json';
import { RedisMgr } from '../../../../../common/redis/RedisMgr';
import { SequelizeDbMgr } from '../../../../../common/sequelize/SequelizeDbMgr';
import { ChannelMgr } from './core/channel/ChannelMgr';
import { HotUpdateMgr } from './core/HotUpdateMgr';
import { ConfigMgr } from '../../../core/config/ConfigMgr';
import { EventEnum } from '../../../Enum';

export class GlobalVar {
    static sessionMgr: SessionMgr;

    static channelMgr: ChannelMgr;

    static serverMgr: ServerMgr;

    static redisMgr: RedisMgr;

    static sequelizeDbMgr: SequelizeDbMgr;

    static async init() {
        logger.debug(`pid:${process.pid} FAKETIME:${process.env.FAKETIME}`);
        process.on('uncaughtException', (err) => {
            logger.error('Caught exception: err:', err);
        });

        // 收集火焰图
        // this.genProfiler();

        global.serviceConfig = service[env];

        // 初始化db相关 : mysql & redis
        logger.debug('初始化db相关');
        this.initDb();

        // 初始化配置相关逻辑
        await ConfigMgr.init(this.redisMgr, 'server');

        logger.debug('初始化区服管理器');
        // 初始化区服管理器
        this.serverMgr = await new ServerMgr().init();

        logger.debug('初始化session管理器');
        this.sessionMgr = new SessionMgr();
        logger.debug('初始化频道管理器');
        this.channelMgr = new ChannelMgr();

        logger.debug('初始化消息handler');
        // 初始化消息handler
        this.initMsgHandler();

        // handler热更支持
        HotUpdateMgr.init();

        eventEmitter.emit(EventEnum.LogicInitComplete);
    }

    /** 初始化db相关 : mysql & redis */
    private static initDb() {
        this.redisMgr = new RedisMgr();
        // sequelize相关
        this.sequelizeDbMgr = new SequelizeDbMgr(serviceConfig.mysql);
    }

    /** 初始化protobuf协议映射 */
    static initMsgHandler() {
        const handlerPath = path.join(__dirname, './handler');
        ProtoBufEncoder.init(allProto, handlerPath);
    }

    private static async genProfiler() {
        // eslint-disable-next-line global-require
        const profiler = require('v8-profiler-node8');
        logger.info('开始收集');
        // Start Profiling
        profiler.startProfiling('CPU profile');
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 15000);
        });
        const profile = profiler.stopProfiling();
        profile.export()
            .pipe(fs.createWriteStream(`${nodeId}-cpuprofile-${Date.now()}.cpuprofile`))
            .on('finish', () => profile.delete());
        logger.info('导出');
    }
}
