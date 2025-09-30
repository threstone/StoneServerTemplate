/* eslint-disable no-use-before-define */
import * as Koa from 'koa';
import * as Uuid from 'uuid';
import { GlobalVar } from '../GlobalVal';
import { UserModel } from '../../../../../../common/sequelize/model/platform/UserModel';
import { AlgoEncrypt } from '../../../../core/algo/AlgoEncrypt';
import { TranslateUtils } from '../../../../../../common/language/TranslateUtils';
import { RoleModel } from '../../../../../../common/sequelize/model/platform/RoleModel';
import { PlayerUtils } from '../../../../../../common/utils/PlayerUtils';

type LoginReqBody = {
    content: string;
    account?: string;
    openId?: string;
    // eslint-disable-next-line camelcase
    access_token?: string
    platformId: number // 4微信  5抖音
}

let index = 0;
let urls: string[];
let urlLength: number;
async function initLoginHandler() {
    (await GlobalVar.redisMgr.getClientForSubscribe()).subscribe('$gate_info_update', initGateInfo.bind(this));
    const redis = await GlobalVar.redisMgr.getClient();
    initGateInfo(await redis.getData('$gate_info'));

    GlobalVar.loginServer.getRouter().post('/login', login);
}

function initGateInfo(jsonStr: string) {
    logger.debug('initGateInfo', jsonStr);
    try {
        urls = JSON.parse(jsonStr) || [];
    } catch (error) {
        logger.error('错误的gate信息');
        urls = [];
    }
    urlLength = urls.length;
}

async function login(ctx: Koa.Context, next: Koa.Next) {
    // 没有连接对象
    if (urlLength === 0) {
        ctx.response.status = 500;
        ctx.response.body = TranslateUtils.translate('服务未开启');
        await next();
        return;
    }

    if (GlobalVar.blockMgr.isBlock(ctx.request.ip.replace('::ffff:', ''))) {
        ctx.response.status = 400;
        ctx.response.body = TranslateUtils.translate('您已被封禁');
        await next();
        return;
    }

    let body = ctx.request.body as LoginReqBody;
    if (!body.content) {
        ctx.response.status = 400;
        ctx.response.body = TranslateUtils.translate('验证失败');
        return;
    }
    body = JSON.parse(AlgoEncrypt.decrypt(body.content, serviceConfig.loginKey, 128));
    index += 1;
    // 通过不同参数判断不同平台
    if (body.account) {
        ctx.response.body = await doLogin(body.account, ctx);
    } else if (body.platformId === 5) { // 抖音
        ctx.response.body = await doLogin(body.openId, ctx);
    }

    await next();
}

async function doLogin(uuid: string, ctx: Koa.Context) {
    const userModel = await GlobalVar.sequelizeDbMgr.getPlatformModel(UserModel);
    let user = await userModel.findOne({ where: { uuid } });
    if (!user) {
        user = await createUser(userModel, uuid);
    }
    const playerList = [];
    try {
        const roleModel = await GlobalVar.sequelizeDbMgr.getPlatformModel(RoleModel);
        const roles = await roleModel.findAll({ where: { uuid } });
        if (roles.length !== 0) {
            const tasks: Promise<void>[] = [];
            roles.forEach((role) => {
                tasks.push(PlayerUtils.getPlayerInfoByUserId(role.userId, GlobalVar.redisMgr, GlobalVar.sequelizeDbMgr).then((p) => {
                    if (!p) {
                        return;
                    }
                    playerList.push({ serverId: role.serverId });
                }));
            });
            await Promise.all(tasks);
        }
    } catch (error) {
        logger.error('获取角色信息失败', error);
    }

    const token = Uuid.v4();
    const redis = await GlobalVar.redisMgr.getClient();
    await redis.setData(`player_token:${token}`, {
        uuid: user.uuid,
        ip: ctx.request.ip.replace('::ffff:', ''),
    }, 7200);
    logger.info(`login success, uuid:${user.uuid}, token:${token}`);
    return {
        url: urls[index % urlLength],
        token,
        serverId: user.serverId,
        serverInfo: await redis.getData('$server_info'),
        playerList,
    };
}

/** 创建用户 */
function createUser(userModel: typeof UserModel, uniqueId: string) {
    return userModel.create({ uuid: uniqueId });
}

initLoginHandler();
