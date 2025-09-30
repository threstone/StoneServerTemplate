
import { RedisMgr } from "../redis/RedisMgr";
import { PlayerModel } from "../sequelize/model/game/PlayerModel";
import { SequelizeDbMgr } from "../sequelize/SequelizeDbMgr";

export class PlayerUtils {
    private static _userInfoTaskPromiseMap: Map<string, Promise<{ [K in keyof PlayerModel]: PlayerModel[K] }>>;

    static getUserIdByIncrId(newUserId: number, serverId: number) {
        return `${newUserId}${serverId.toString().padStart(6, '0')}`;
    }

    static getServerIdByUserId(userId: string) {
        return parseInt(userId.slice(-6), 10);
    }

    /**
     * 获取基础的玩家信息
     * @param isSelf 是否是自身获取决定了有一些数据是否赋值
     */
    static getPlayerBaseInfo(playerInfo: { [K in keyof PlayerModel]: PlayerModel[K] }, isSelf: boolean): { [K in keyof PlayerModel]: PlayerModel[K] } {
        const result = {
            userId: playerInfo.userId,
            nickname: playerInfo.nickname,
            onlineTime: playerInfo.onlineTime,
            offlineTime: playerInfo.offlineTime,
        } as PlayerModel;
        if (isSelf) {
            result.registerTime = playerInfo.registerTime;
            result.loginDay = playerInfo.loginDay;
        }
        return result;
    }

    static async getBattlePlayer(userId: string, redisMgr: RedisMgr, sequelizeDbMgr: SequelizeDbMgr, playerInfo?: PlayerModel) {
        const battlePlayer: any = playerInfo ? PlayerUtils.getSaveToRedisInfo(playerInfo) : (await PlayerUtils.getPlayerInfoByUserId(userId, redisMgr, sequelizeDbMgr));
        battlePlayer.baseInfo = PlayerUtils.getPlayerBaseInfo(battlePlayer, false);
        battlePlayer.serverId = PlayerUtils.getServerIdByUserId(userId);
        return battlePlayer;
    }

    static async getPlayerInfoByUserId(userId: string, redisMgr: RedisMgr, sequelizeDbMgr: SequelizeDbMgr): Promise<{ [K in keyof PlayerModel]: PlayerModel[K] }> {
        if (!PlayerUtils._userInfoTaskPromiseMap) {
            PlayerUtils._userInfoTaskPromiseMap = new Map();
        }
        // 如果短时间内重复获取同一个用户的信息，共用同一个promise
        let p = PlayerUtils._userInfoTaskPromiseMap.get(userId);
        if (p) {
            return p;
        }

        p = PlayerUtils.doGetUserInfo(userId, redisMgr, sequelizeDbMgr);
        PlayerUtils._userInfoTaskPromiseMap.set(userId, p);
        p.then(() => {
            PlayerUtils._userInfoTaskPromiseMap.delete(userId);
        });
        return p;
    }

    /** 执行获取用户信息的任务 */
    private static async doGetUserInfo(userId: string, redisMgr: RedisMgr, sequelizeDbMgr: SequelizeDbMgr): Promise<{ [K in keyof PlayerModel]: PlayerModel[K] }> {
        const redisClient = await redisMgr.getClient();
        const playerInfoStr = await redisClient.getData(`playerInfo:${userId}`);
        // 如果缓存中没有数据，则从数据库中查询
        if (!playerInfoStr) {
            const serverId = PlayerUtils.getServerIdByUserId(userId);
            const playerModel = await sequelizeDbMgr.getGameModelByServerId(PlayerModel, serverId);
            const playerInfo = await playerModel.findOne({ where: { userId } });
            if (!playerInfo) {
                logger.error(`getPlayerInfoByUserId: cannot find user ${userId} in server ${serverId}`);
                return null;
            }
            const result = PlayerUtils.getSaveToRedisInfo(playerInfo);
            redisClient.setData(`playerInfo:${playerInfo.userId}`, result, 259200);
            return result;
        }
        return JSON.parse(playerInfoStr);
    }

    static getSaveToRedisInfo(playerInfo: PlayerModel): { [K in keyof PlayerModel]: PlayerModel[K] } {
        const saveInfo = {
            userId: playerInfo.userId,
            nickname: playerInfo.nickname,
            onlineTime: playerInfo.onlineTime,
            offlineTime: playerInfo.offlineTime,
            online: playerInfo.online,
        } as PlayerModel;
        return saveInfo;
    }
}
