import { WhiteModel } from '../../../../../../common/sequelize/model/platform/WhiteModel';
import { GlobalVar } from '../GlobalVar';

GlobalVar.sequelizeDbMgr.getPlatformModel(WhiteModel).then(async (model) => {
    const whiteList = await model.findAll();
    const redis = await GlobalVar.redisMgr.getClient();
    const redisKey = '$white_list';
    redis.delete(redisKey);
    if (whiteList.length === 0) {
        return;
    }
    const saveList: string[] = [];
    whiteList.forEach((white) => {
        saveList.push(white.uuid);
    });
    redis.sadd(redisKey, saveList);
});
