import { RpcRouteType } from 'stone-framework';
import { ItemPto } from '../../../../common/proto/CommonProto';
import { RedisMgr } from '../../../../common/redis/RedisMgr';
import { EmailModel } from '../../../../common/sequelize/model/game/EmailModel';
import { SequelizeDbMgr } from '../../../../common/sequelize/SequelizeDbMgr';
import { PlayerUtils } from '../../../../common/utils/PlayerUtils';
import { Cfg } from '../config/Cfg';
import { EmailEnum } from '../config/ConfigDefineEnum';
import { TimeMgr } from './TimeMgr';
import { EventEnum } from '../../Enum';

export class EmailUtils {
    static createEmailAttr(receiverUserId: string, cfg: EmailCfg, params?: string[], items?: ItemPto.IItem[] | string) {
        if (items && typeof items !== 'string') {
            items = JSON.stringify(items);
        }
        const now = Date.now();
        return {
            receiverUserId,
            configId: cfg.id,
            params: params == null ? null : params.join('|'),
            items,
            isRead: false,
            sendTime: now,
            expireTime: !cfg.vid ? 0 : now + cfg.vid * TimeMgr.dayMs,
        };
    }

    static async sendEmailToUser(
        userId: string,
        redisMgr: RedisMgr,
        sequelizeDbMgr: SequelizeDbMgr,
        define: EmailEnum,
        params?: string[],
        items?: ItemPto.IItem[] | string,
    ) {
        const cfg = Cfg.Email.get(define);
        if (!cfg) {
            logger.error('email config not found : ', define);
            return;
        }
        const serverId = PlayerUtils.getServerIdByUserId(userId);
        const model = await sequelizeDbMgr.getGameModelByServerId(EmailModel, serverId);
        const email = await model.create(EmailUtils.createEmailAttr(userId, cfg, params, items));

        const redisClient = await redisMgr.getClient(1);
        const [logicNode] = await redisClient.hmget(`player_node_info:${userId}`, ['logicNode']);
        if (!logicNode) {
            return;
        }
        rpc.logic.playerRemote.sendNotifyPlayerEvent(
            { type: RpcRouteType.Target, nodeId: logicNode },
            userId,
            serverId,
            EventEnum.NewEmail,
            email.id,
        );
    }
}
