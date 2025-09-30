import { PlayerModel } from '../../../../../../common/sequelize/model/game/PlayerModel';
import { ServerModel } from '../../../../../../common/sequelize/model/platform/ServerModel';
import { GlobalVar } from '../GlobalVar';

// 将所有玩家在线状态设置为离线
GlobalVar.sequelizeDbMgr.getPlatformModel(ServerModel).then(async (model) => {
    const serverList = await model.findAll({ attributes: ['id'] });
    serverList.forEach(async (server) => {
        const playerModel = await GlobalVar.sequelizeDbMgr.getGameModelByServerId(PlayerModel, server.id);
        playerModel.sequelize.query(`update ${playerModel.tableName} set online = false where online = true`);
    });
});
