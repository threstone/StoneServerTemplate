/* eslint-disable max-classes-per-file */
import { Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export class SequelizeDb extends Sequelize {
    private _modelMap = new Map<string, typeof Model>();
    private _initMap = new Map<string, Promise<typeof Model>>();

    async getModelByName<T extends typeof Model>(modelTemplate: T, name: string): Promise<T> {
        let result = this._modelMap.get(name);
        if (!result) {
            const initKey = `${modelTemplate.tableName}${name}`;
            if (this._initMap.has(initKey)) {
                return this._initMap.get(initKey) as any;
            }
            const model = class extends (modelTemplate as any) { } as any;
            this.addModels([model]);
            model.tableName = name;
            const p = model.sync({ alter: serviceConfig.isAlterModel || false });
            // 多进程情况下有可能出现多个进程同时创建同一个model，
            // 导致后创建的进程sync失败，这里做一次重试来避免出错导致无法获取模型
            const waitingPromise = new Promise<typeof Model>(async (resolve) => {
                try {
                    await p;
                } catch (error) {
                    logger.info('同步失败', error.message);
                    await model.sync({ alter: serviceConfig.isAlterModel || false });
                    logger.info('第二次尝试sync成功');
                }
                resolve(model);
                this._modelMap.set(name, model);
            });
            this._initMap.set(initKey, waitingPromise);
            return waitingPromise as any;
        }
        return result as any;
    }

    async getModel<T extends typeof Model>(modelTemplate: T): Promise<T> {
        return this.getModelByName(modelTemplate, modelTemplate.tableName);
    }

    async getAllTableNames(): Promise<string[]> {
        const result = (await this.query('SHOW TABLES'))[0];
        let key: string;
        if (result.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            key = Object.keys(result[0])[0];
        }
        const tableNameList: string[] = [];
        result.forEach((data) => {
            tableNameList.push(data[key]);
        });
        return tableNameList;
    }
}
