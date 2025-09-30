import { Model, SequelizeOptions } from 'sequelize-typescript';
import * as fs from 'fs';
import * as path from 'path';
import { SequelizeDb } from './SequelizeDb';

export class SequelizeDbMgr {
    /** 公共的,未选择database的实例，用以初始化model */
    private _commonIns: SequelizeDb;

    private _dbMap: Map<string, SequelizeDb | Promise<SequelizeDb>>;

    private _mysqlConfig: IMysqlOption;

    constructor(config: IMysqlOption) {
        this._mysqlConfig = config;
        this._dbMap = new Map();
        this._commonIns = new SequelizeDb(this.getOpt()); this._commonIns.query
        this.registerModels(path.join(__dirname, './model/game'));
        this.registerModels(path.join(__dirname, './model/platform'));
    }

    /** 将model注册到公共commonIns,主要是为了给model注册，否则model无法使用 */
    private registerModels(modelPath: string) {
        if (fs.existsSync(modelPath)) {
            const modelNames = fs.readdirSync(modelPath);
            const models = [];
            for (let index = 0; index < modelNames.length; index++) {
                const modelName = modelNames[index];
                if (modelName.endsWith('Model.js')) {
                    logger.debug(`register model:${modelName}`);
                    models.push(path.join(modelPath, modelName));
                }
            }
            this._commonIns.addModels(models);
        }
    }

    public getOpt(database?: string): SequelizeOptions {
        return {
            dialect: 'mysql',
            username: this._mysqlConfig.user,
            password: this._mysqlConfig.password,
            host: this._mysqlConfig.host,
            port: this._mysqlConfig.port,
            logQueryParameters: true,
            timezone: this._mysqlConfig.timezone,
            database,
            logging: false,
            pool: {
                max: 30,         // 最大连接数
                min: 0,          // 最小连接数
                acquire: 30000,  // 获取连接的超时时间（毫秒）
                idle: 30000      // 连接空闲时间（超过此时间未使用则释放）
            },
        };
    }

    /** 通过数据库名获取实例 */
    getDb(database: string) {
        const db = this._dbMap.get(database);
        if (db) { return db; }
        const p = new Promise<SequelizeDb>(async (resolve) => {
            await this._commonIns.query(`CREATE DATABASE IF NOT EXISTS ${database} DEFAULT CHARACTER SET utf8mb4;`);
            const tempIns = new SequelizeDb(this.getOpt(database));
            this._dbMap.set(database, tempIns);
            resolve(tempIns);
        });
        this._dbMap.set(database, p);
        return p;
    }

    getPlatformDb() {
        if (serviceConfig.platformDatabase) {
            return this.getDb(serviceConfig.platformDatabase);
        }
        const database = `${serviceConfig.projectName}_platform_${startupParam.env}`;
        return this.getDb(database);
    }

    getGameDb() {
        if (serviceConfig.gameDatabase) {
            return this.getDb(serviceConfig.gameDatabase);
        }
        const database = `${serviceConfig.projectName}_${startupParam.env}`;
        return this.getDb(database);
    }

    // #region 以下是针对具体业务逻辑的方法封装，方便调用

    async getPlatformModel<T extends typeof Model>(modelTemplate: T): Promise<T> {
        const gameDb = await this.getPlatformDb();
        return gameDb.getModel(modelTemplate);
    }

    async getGameModelByServerId<T extends typeof Model>(modelTemplate: T, serverId: number): Promise<T> {
        const gameDb = await this.getGameDb();
        return gameDb.getModelByName(modelTemplate, `${modelTemplate.tableName}_${serverId}`);
    }

    async getGameModelByName<T extends typeof Model>(modelTemplate: T, name: string): Promise<T> {
        const gameDb = await this.getGameDb();
        return gameDb.getModelByName(modelTemplate, name);
    }
}
