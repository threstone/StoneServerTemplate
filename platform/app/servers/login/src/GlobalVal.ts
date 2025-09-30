import * as fs from 'fs';
import * as path from 'path';
import { LoginServer } from './LoginServer';
import * as service from '../../../../config/service.json';
import { RedisMgr } from '../../../../../common/redis/RedisMgr';
import { SequelizeDbMgr } from '../../../../../common/sequelize/SequelizeDbMgr';
import { RoleModel } from '../../../../../common/sequelize/model/platform/RoleModel';
import { BlockMgr } from './BlockMgr';

export class GlobalVar {
    static loginServer: LoginServer;

    static redisMgr: RedisMgr;

    static sequelizeDbMgr: SequelizeDbMgr;

    static blockMgr: BlockMgr;

    static async init() {
        global.serviceConfig = service[env];
        // 初始化db相关
        await this.initDb();
        // 初始化
        await this.initUserId();

        // 开启登录服务器
        this.loginServer = new LoginServer(serviceConfig.loginServerPort);
        // 黑名单管理
        this.blockMgr = await (new BlockMgr()).init();
        // 加载路由
        this.initRouter();
    }

    private static async initDb() {
        this.redisMgr = new RedisMgr();

        // sequelize相关
        this.sequelizeDbMgr = new SequelizeDbMgr(serviceConfig.mysql);
    }

    private static initRouter() {
        const pathStr = path.join(__dirname, 'router');
        const files = fs.readdirSync(pathStr);
        files.forEach((fileName) => {
            if (fileName.endsWith('.js')) {
                // eslint-disable-next-line import/no-dynamic-require, global-require
                require(path.join(pathStr, fileName));
            }
        });
    }

    private static async initUserId() {
        const model = await this.sequelizeDbMgr.getPlatformModel(RoleModel);
        const [queryInfo] = (await model.sequelize.query(`SELECT MAX(CAST(userId AS UNSIGNED)) as maxUserId FROM ${model.tableName};`))[0];
        let { maxUserId } = queryInfo as { maxUserId: number };
        if (Number.isNaN(maxUserId) || maxUserId < 10000) {
            maxUserId = 10000;
        }
        if (maxUserId > 10000000000) {
            maxUserId = Math.floor(maxUserId / 1000000);
        }
        if (serviceConfig.isHd != null) {
            if (serviceConfig.isHd && maxUserId % 2 !== 0) {
                // 灰度双数
                maxUserId += 1;
            } else if (serviceConfig.isHd === false && maxUserId % 2 === 0) {
                // 非灰度单数
                maxUserId += 1;
            }
        }
        (await this.redisMgr.getClient()).setData('$new_user_id', maxUserId, -1);
    }
}
