import { RedisClientSelf } from './RedisClientSelf';
const subscribeKey = 'subscribe';
export class RedisMgr {
    private _clientMap: Map<number | string, RedisClientSelf | Promise<RedisClientSelf>>;

    constructor() {
        this._clientMap = new Map();
        setInterval(this.keepAlive.bind(this), 300000);
    }

    private keepAlive() {
        this._clientMap.forEach((value, key) => {
            if (subscribeKey === key) { return; }
            if (value instanceof RedisClientSelf && Date.now() - value.lastCommandTime > 300000) {
                value.keepAlive();
            }
        });
    }

    /** 数据一般存在db0或非1db, db1每次启动服务的时候会清空 */
    getClient(db: number = 0) {
        return this.getClientIns(db, db);
    }

    getClientForSubscribe() {
        return this.getClientIns(subscribeKey, 1);
    }

    private async getClientIns(key: number | string, selectDb: number) {
        const client = await this.getOrCreateClient(key, selectDb);
        client.lastCommandTime = Date.now();
        return client;
    }

    private async getOrCreateClient(key: number | string, selectDb: number) {
        const client = this._clientMap.get(key);
        if (!client) {
            const tempClient = new RedisClientSelf(serviceConfig.redis, selectDb, `${serviceConfig.projectName}_${env}:`);
            const promise = new Promise<RedisClientSelf>((resolve) => {
                tempClient.onReady = () => {
                    tempClient.lastCommandTime = Date.now();
                    this._clientMap.set(key, tempClient);
                    resolve(tempClient);
                };
            });
            this._clientMap.set(key, promise);
            return promise;
        }
        return client;
    }
}
