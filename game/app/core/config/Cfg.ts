/* eslint-disable import/extensions */
/* eslint-disable no-return-assign */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable import/no-dynamic-require */
import axios from 'axios';
import path = require('path');
import { InitialItems as InitialItemsTable } from './types/InitialItems';
import { RandomName as RandomNameTable } from './types/RandomName';
import { Items as ItemsTable } from './types/Items';
import { DropPool as DropPoolTable } from './types/DropPool';
import { Email as EmailTable } from './types/Email';
import { SensitiveWord as SensitiveWordTable } from './types/SensitiveWord';

export class Cfg {
    static InitialItems: InitialItemsTable;

    static RandomName: RandomNameTable;

    static Items: ItemsTable;

    static DropPool: DropPoolTable;

    static Email: EmailTable;

    static SensitiveWord: SensitiveWordTable;

    static init(serverType: 'server' | 'client', cloudConfigPath: string = null) {
        // eslint-disable-next-line no-console
        console.info('Cfg init...');

        const tasks = [];
        tasks.push(this.configRequire(`${serverType}/InitialItems.json`, cloudConfigPath).then((config) => {
            Cfg.InitialItems = new InitialItemsTable(config);
        }));
        tasks.push(this.configRequire(`${serverType}/RandomName.json`, cloudConfigPath).then((config) => {
            Cfg.RandomName = new RandomNameTable(config);
        }));
        tasks.push(this.configRequire(`${serverType}/Items.json`, cloudConfigPath).then((config) => {
            Cfg.Items = new ItemsTable(config);
        }));
        tasks.push(this.configRequire(`${serverType}/DropPool.json`, cloudConfigPath).then((config) => {
            Cfg.DropPool = new DropPoolTable(config);
        }));
        tasks.push(this.configRequire(`${serverType}/Email.json`, cloudConfigPath).then((config) => {
            Cfg.Email = new EmailTable(config);
        }));
        tasks.push(this.configRequire(`${serverType}/SensitiveWord.json`, cloudConfigPath).then((config) => {
            Cfg.SensitiveWord = new SensitiveWordTable(config);
        }));

        return Promise.all(tasks);
    }

    private static async configRequire(fileName: string, cloudConfigPath: string) {
        if (!cloudConfigPath) {
            return require(`./${fileName}`);
        }

        try {
            const cloudPath = path.join(cloudConfigPath, fileName);
            const result = await axios.get(cloudPath);
            logger.debug('读取远端配置成功', cloudPath);
            return result.data;
        } catch (error) {
            return require(`./${fileName}`);
        }
    }
}
