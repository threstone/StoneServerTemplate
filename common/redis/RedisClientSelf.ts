import * as Redis from 'redis';
// 默认redis请求超时时间，单位：毫秒
const DEFAULT_REDIS_TIMEOUT = 5 * 1000;

const logger = (global as any).logger || console;
export class RedisClientSelf {
    private redisClient: Redis.RedisClient

    private subscribeFun: Map<string, Function>

    public onConect: Function

    public onReady: Function

    private _preKey: string;

    public lastCommandTime: number;

    constructor(conf: IRedisOption, db: number, preKey: string) {
        this.connectRedis(conf, db);
        this._preKey = preKey;
    }

    connectRedis(conf: IRedisOption, db: number) {
        const redisConfig: any = {
            host: conf.host,
            port: conf.port,
            db,
            enable_offline_queue: (conf.enableOfflineQueue === true),
        };
        if (conf.password && conf.password !== '') {
            redisConfig.password = conf.password;
        }
        if (conf.user && conf.user !== '') {
            redisConfig.user = conf.user;
        }
        this.redisClient = Redis.createClient(redisConfig);

        this.redisClient.on('error', (err: Error) => {
            logger.error(`redis${db} error: `, err);
        });

        this.redisClient.on('ready', () => {
            if (this.onReady) {
                this.onReady();
            }
        });

        this.redisClient.on('connect', async () => {
            logger.debug(`connect to redis${db} success!!`);
            if (this.onConect) {
                this.onConect();
            }
        });

        this.redisClient.on('close', () => {
            logger.debug(`connection to redis${db} closed!`);
        });

        this.redisClient.on('end', () => {
            logger.debug(`connection to redis${db} end!`);
        });

        this.redisClient.on('message', this.onSubscribeMessage.bind(this));
    }

    keepAlive() {
        this.lastCommandTime = Date.now();
        this.getData('keepAlive');
    }

    /**
     * 获取列表指定范围内的元素
     * @stop 如果stop index的值为-1那么将返回所有值
     */
    lRange(key: string, start: number, stop: number, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<string[]> {
        key = this._preKey + key;
        return this.sendCommand('lrange', [key, start, stop], timeout);
    }

    /**
     * 在列表尾部插入一个或多个元素
     */
    rPush(key: string, value: string[] | string, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        const elements = [key];
        if (Array.isArray(value)) {
            elements.push(...value);
        } else {
            elements.push(value);
        }
        return this.sendCommand('rpush', elements, timeout);
    }

    /**
     * 将一个或多个值插入到列表头部
     */
    lPush(key: string, value: string[] | string, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        const elements = [key];
        if (Array.isArray(value)) {
            elements.push(...value);
        } else {
            elements.push(value);
        }
        return this.sendCommand('lpush', elements, timeout);
    }

    /**
     * 获取list长度
     */
    lLen(key: string, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        return this.sendCommand('llen', [key], timeout);
    }

    /**
     * 向Set中添加一个或多个元素
     */
    sadd(key: string, value: string | string[], timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        const arr = [key];
        if (Array.isArray(value)) {
            arr.push(...value);
        } else {
            arr.push(value);
        }
        return this.sendCommand('sadd', arr, timeout);
    }

    /**
     * 获取Set中的所有元素
     */
    smembers(key: string, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        return this.sendCommand('smembers', [key], timeout);
    }

    /**
     * 判断元素是否在Set中
     */
    sismember(key: string, value: string, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<boolean> {
        return new Promise((resolve) => {
            key = this._preKey + key;
            this.sendCommand('sismember', [key, value], timeout).then((v) => {
                resolve(v === 1);
            });
        });
    }

    /** 移除集合中一个或多个成员 */
    srem(key: string, value: string[] | string, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        const elements = [key];
        if (Array.isArray(value)) {
            elements.push(...value);
        } else {
            elements.push(value);
        }
        return this.sendCommand('srem', elements, timeout);
    }

    /**
     * 订阅消息
     */
    subscribe(channel: string, callBack: Function) {
        channel = this._preKey + channel;
        if (!this.subscribeFun) {
            this.subscribeFun = new Map<string, Function>();
        }
        this.subscribeFun.set(channel, callBack);
        this.redisClient.subscribe(channel);
    }

    /**
     * 取消订阅消息
     */
    unsubscribe(channel: string) {
        channel = this._preKey + channel;
        if (this.subscribeFun) {
            this.subscribeFun.delete(channel);
        }
        this.redisClient.unsubscribe(channel);
    }

    onSubscribeMessage(channel: string, message: string) {
        const fun = this.subscribeFun.get(channel);
        if (fun) {
            fun(message);
        }
    }

    // 发布消息
    publish(channel: string, value: string, callBack?: Function) {
        channel = this._preKey + channel;
        this.redisClient.publish(channel, value, callBack);
    }

    incr(key: string, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<number> {
        key = this._preKey + key;
        return this.sendCommand('incr', [key], timeout);
    }

    incrBy(key: string, increment: number, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<number> {
        key = this._preKey + key;
        return this.sendCommand('incrBy', [key, increment], timeout);
    }

    /**
     * @param key 要上锁的key
     * @param expire 锁持续时间  单位秒
     * @returns 是否成功上锁，失败说明已被上锁
     */
    lock(key: string, expire: number, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<boolean> {
        return new Promise((resolve) => {
            key = this._preKey + key;
            this.incr(key, timeout).then((incrNum) => {
                resolve(incrNum === 1);
            });
            this.setExpire(key, expire);
        });
    }

    /** 解锁 */
    unlock(key: string) {
        key = this._preKey + key;
        this.delete(key);
    }

    /**
     * 设置Redis数据
     * @param key
     * @param value
     * @param sec  设置存在时间   如果sec为-1则有效时间为永久
     * @param timeout 请求超时时间
     */
    setData(key: string, value: any, sec: number, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        if (sec === -1) {
            return this.sendCommand('set', [key, value], timeout);
        }
        return this.sendCommand('setex', [key, sec, value], timeout);
    }

    /**
     * 将对象以hash的方式储存到redis
     * @param sec  设置存在时间
     * 如果sec为-1则如果是新key则永久,如果是已有的key则按原有的销毁时间
     */
    hmset(redisKey: string, obj: {}, sec: number = -1, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        redisKey = this._preKey + redisKey;
        const keys = Object.keys(obj);
        const data = [redisKey];
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const value = obj[key];
            data.push(key);
            data.push(value);
        }
        this.sendCommand('hmset', data, timeout);
        if (sec !== -1) {
            this.setExpire(redisKey, sec);
        }
    }

    /**
     * 获取Redis数据
     * @param db
     * @param key
     * @param timeout 请求超时时间
     */
    getData(key: string, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<any> {
        key = this._preKey + key;
        return this.sendCommand('get', [key], timeout);
    }

    /**
     * 返回哈希表中，所有的字段和值
     * @param key
     * @param timeout 请求超时时间
     */
    hgetall(key: string, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<any> {
        key = this._preKey + key;
        return this.sendCommand('hgetall', [key], timeout);
    }

    /**
     * 返回哈希表中，一个或多个给定字段的值
     * @param key
     * @param field  一个或多个给定字段
     * @param timeout 请求超时时间
     */
    hmget(key: string, field: any[], timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<string[]> {
        key = this._preKey + key;
        return this.sendCommand('hmget', [key, ...field], timeout);
    }

    /**
    * 返回哈希表中给定字段的值
    * @param key
    * @param field 给定字段
    * @param timeout 请求超时时间
    */
    hget(key: string, field: string, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<any> {
        key = this._preKey + key;
        return this.sendCommand('hget', [key, field], timeout);
    }

    /**
     * 为哈希表中的字段赋值
     * @param key
     * @param field  给定字段
     * @param value
     * @param timeout 请求超时时间
     */
    hset(key: string, field: string, value: any, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        return this.sendCommand('hset', [key, field, value], timeout);
    }

    /**
     * 删除哈希表中的指定字段
     * @param key
     * @param field  指定字段
     * @param timeout 请求超时时间
     */
    hdel(key: string, field: string, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        return this.sendCommand('hdel', [key, field], timeout);
    }

    /**
     * 删除redis数据
     * @param key
     * @param timeout
     */
    delete(key: string, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        return this.sendCommand('del', [key], timeout);
    }

    /** 删除redis中以keyStart开头的key */
    async deleteKeyStart(keyStart: string, timeout: number = 30000) {
        const keys = await this.keys(keyStart + '*', timeout);
        if (keys.length === 0) {
            return;
        }
        return this.sendCommand('del', keys, timeout);
    }

    /** Find all keys matching the given pattern */
    keys(key: string, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        return this.sendCommand('keys', [key], timeout);
    }

    /**
     * 设置key的有效时间
     * @param db
     * @param key
     * @param expireTime 锁持续时间  单位秒
     * @param timeout 请求超时时间
     */
    setExpire(key: string, expireTime: number, timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        return this.sendCommand('expire', [key, expireTime], timeout);
    }

    /** 清空指定数据库 */
    flushDB() {
        return this.sendCommand('FLUSHDB', [], DEFAULT_REDIS_TIMEOUT);
    }

    /** 
     * 向有序集合添加一个或多个成员，或者更新已存在成员的分数
     * @param datas 格式为 [score1, member1, score2, member2, ...]
     */
    zadd(key: string, datas: (string | number)[], timeout: number = DEFAULT_REDIS_TIMEOUT) {
        key = this._preKey + key;
        datas.unshift(key)
        return this.sendCommand('zadd', datas, timeout);
    }

    /** 获取有序集合的成员数 */
    zcard(key: string, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<number> {
        key = this._preKey + key;
        return this.sendCommand('zcard', [key], timeout);
    }

    /** 计算在有序集合中指定区间分数的成员数 */
    zcount(key: string, min: number, max: number, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<number> {
        key = this._preKey + key;
        return this.sendCommand('zcount', [key, min, max], timeout);
    }

    /** 通过索引区间返回有序集合指定区间内的成员 */
    zrange(key: string, min: number, max: number, withScores: boolean = false, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<any[]> {
        key = this._preKey + key;
        const args = [key, min, max];
        if (withScores) {
            args.push('WITHSCORES');
        }
        return this.sendCommand('zrange', args, timeout);
    }

    /** 返回有序集中指定区间内的成员，通过索引，分数从高到低 */
    zrevrange(key: string, min: number, max: number, withScores: boolean = false, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<any[]> {
        key = this._preKey + key;
        const args = [key, min, max];
        if (withScores) {
            args.push('WITHSCORES');
        }
        return this.sendCommand('zrevrange', args, timeout);
    }

    /** 移除有序集合中的一个或多个成员 */
    zrem(key: string, members: string[], timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<number> {
        key = this._preKey + key;
        return this.sendCommand('zrem', [key, ...members], timeout);
    }

    /** 返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序 */
    zrevrank(key: string, member: string, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<number> {
        key = this._preKey + key;
        return this.sendCommand('zrevrank', [key, member], timeout);
    }

    /** 返回有序集中，成员的分数值 */
    zscore(key: string, member: string, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<number> {
        key = this._preKey + key;
        return this.sendCommand('zscore', [key, member], timeout);
    }

    /** 有序集合中对指定成员的分数加上增量 increment */
    zincrby(key: string, increment: number, member: string, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<number> {
        key = this._preKey + key;
        return this.sendCommand('zincrby', [key, increment, member], timeout);
    }

    /**
     * 直接发送命令
     * @param command
     * @param args
     * @param timeout 请求超时时间
     */
    async sendCommand(command: string, args?: Array<any>, timeout: number = DEFAULT_REDIS_TIMEOUT): Promise<any> {
        const self = this;
        return new Promise((resolve, reject) => {
            const timerId = setTimeout(reject, timeout); // setTimeout 优化点 todo

            self.redisClient.send_command(command, args, (err, res) => {
                clearTimeout(timerId);
                if (err) {
                    logger.error('redis send command failed! ', command, args, err);
                    reject(err);
                    return;
                }
                resolve(res);
            });
        }).catch((err) => {
            logger.error('redis timeout!', command, args, err);
        });
    }
}
