import * as path from 'path';
import * as fs from 'fs';
import * as service from '../../../../config/service.json';
import { RedisMgr } from '../../../../../common/redis/RedisMgr';
import { SequelizeDbMgr } from '../../../../../common/sequelize/SequelizeDbMgr';
import { ConfigMgr } from '../../../core/config/ConfigMgr';

export class GlobalVar {
    static redisMgr: RedisMgr;

    static sequelizeDbMgr: SequelizeDbMgr;

    static async init() {
        global.serviceConfig = service[env];

        this.initDb();

        // 初始化配置相关逻辑
        await ConfigMgr.init(this.redisMgr, 'server');
        this.runGamePreTasks();
    }

    /** 初始化db相关 : mysql & redis */
    private static initDb() {
        this.redisMgr = new RedisMgr();
        // sequelize相关
        this.sequelizeDbMgr = new SequelizeDbMgr(serviceConfig.mysql);
    }

    private static runGamePreTasks() {
        const taskDir = path.join(__dirname, './preTasks');
        fs.readdirSync(taskDir).forEach((file) => {
            if (file.endsWith('.js')) {
                // eslint-disable-next-line import/no-dynamic-require, global-require
                require(path.join(taskDir, file));
            }
        });
    }
}
