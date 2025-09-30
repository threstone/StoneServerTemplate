import { ServerModel } from '../../../../../common/sequelize/model/platform/ServerModel';
import { GlobalVar } from './GlobalVar';

export class ServerMgr {
    private _serverMap = new Map<number, ServerModel>();

    async init() {
        const serverModel = await GlobalVar.sequelizeDbMgr.getPlatformModel(ServerModel);
        let serverList = await serverModel.findAll();
        if (serverList.length === 0) {
            const date = new Date();
            date.setHours(0, 0, 0, 0);
            const startTime = date.getTime();
            serverList = await serverModel.bulkCreate([{
                id: 1, startTime, status: 1, tag: 1,
            }]);
        }
        serverList.forEach((server) => {
            this._serverMap.set(server.id, server);
        });
        await this.updateRedisInfo();
        return this;
    }

    /** 添加服务器 */
    async addServer(serverInfo: ServerModel) {
        if (serverInfo.id == null || serverInfo.startTime == null) {
            return false;
        }

        // 检查是不是有这个服了
        if (this._serverMap.has(serverInfo.id)) {
            return false;
        }

        const Model = await GlobalVar.sequelizeDbMgr.getPlatformModel(ServerModel);
        const server = new Model(serverInfo);
        await server.save();
        this._serverMap.set(server.id, server);
        this.updateRedisInfo();
        return true;
    }

    /** 获取服务器信息列表 */
    getAllServer() {
        return this.toArray();
    }

    /** 更新服务器信息 */
    async updateServer(serverInfo: ServerModel) {
        const server = this._serverMap.get(serverInfo.id);
        if (!server) {
            return false;
        }

        await server.update(serverInfo);
        this.updateRedisInfo();
        return true;
    }

    async updateRedisInfo() {
        const redis = await GlobalVar.redisMgr.getClient();
        const value = JSON.stringify(this.toArray());
        redis.setData('$server_info', value, -1);
        redis.publish('$server_info_update', value);
    }

    private toArray() {
        const array = [];
        this._serverMap.forEach((server) => {
            array.push(server.toJSON());
        });
        return array;
    }
}
