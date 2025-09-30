import * as childProcess from 'child_process';
import * as path from 'path';
import { Op } from 'sequelize';
import { ItemComponent } from '../core/component/ItemComponent';
import { Player } from '../core/player/Player';
import { LogicSession } from '../core/session/LogicSession';
import { PlayerModel } from '../../../../../../common/sequelize/model/game/PlayerModel';
import { GlobalVar } from '../GlobalVar';
import { TestPto } from '../../../../../../common/proto/CommonProto';
import { MessageHandler } from '../../../../core/proto/ProtoDecorator';
import { RoleModel } from '../../../../../../common/sequelize/model/platform/RoleModel';
import { TimeMgr } from '../../../../core/utils/TimeMgr';
import { EmailComponent } from '../core/component/EmailComponent';
import { EmailEnum } from '../../../../core/config/ConfigDefineEnum';
import { EmailModel } from '../../../../../../common/sequelize/model/game/EmailModel';
import { FriendReqModel } from '../../../../../../common/sequelize/model/game/FriendReqModel';
import { FriendModel } from '../../../../../../common/sequelize/model/game/FriendModel';

export class TestHandler {
    private FAKETIME: string;

    // 获取装备信息请求
    @MessageHandler(TestPto.C_TEST_ADD_ITEMS, { needTestEnv: true })
    addItems(session: LogicSession, player: Player, msg: TestPto.C_TEST_ADD_ITEMS) {
        logger.debug('添加道具');
        player.getComponent(ItemComponent).updateItems([{ itemId: msg.itemId, count: msg.count }]);
    }

    // 代码更新
    @MessageHandler(TestPto.C_TEST_UPDATE_CODE, { needTestEnv: true })
    updateServerCode(session: LogicSession) {
        try {
            logger.debug('git pull\n', childProcess.execSync('git pull', { cwd: process.cwd() }).toString());
            session.sendErrorMessage('更新成功');
        } catch (error) {
            logger.error('代码更新 接口出错', error);
        }
    }

    // 服务器时间修改
    @MessageHandler(TestPto.C_TEST_MODIFY_SERVER_TIME, { needTestEnv: true })
    modifyServerTime(session: LogicSession, player: Player, msg: TestPto.C_TEST_MODIFY_SERVER_TIME) {
        try {
            const time = msg.time || Date.now();
            const fakeTime = process.env.FAKETIME || '+0s';
            let nowOffsetSec = parseInt(fakeTime.substring(0, fakeTime.length - 1), 10) * 1000;
            if (Number.isNaN(nowOffsetSec)) {
                session.sendErrorMessage('修改失败');
                return;
            }

            const offset = time - Date.now();
            nowOffsetSec += offset;
            this.FAKETIME = `${nowOffsetSec > 0 ? '+' : ''}${Math.floor(nowOffsetSec / 1000)}s`;
            session.sendErrorMsgNoTranslate(`success to set : process.env.FAKETIME:${this.FAKETIME}`);
        } catch (error) {
            logger.error('服务器时间修改 接口出错', error);
        }
    }

    // 服务器重启
    @MessageHandler(TestPto.C_TEST_RESTART_SERVER, { needTestEnv: true })
    restartServer(session: LogicSession) {
        try {
            const serverConfigPath = path.join(__dirname, '../../../../core/Restart.js');
            this.FAKETIME = this.FAKETIME || process.env.FAKETIME || '+0s';
            if (this.FAKETIME !== process.env.FAKETIME) {
                process.env.FAKETIME = this.FAKETIME;
            }
            childProcess.exec(`node ${serverConfigPath} ${startupParam.env} ${this.FAKETIME}`);
            session.sendErrorMessage('重启成功');
        } catch (error) {
            logger.error('服务器重启 接口出错', error);
        }
    }

    // 获取服务器时间信息
    @MessageHandler(TestPto.C_TEST_SERVER_TIME_INFO, { needTestEnv: true })
    getServerTime(session: LogicSession, player: Player) {
        try {
            session.sendMessage(new TestPto.S_TEST_SERVER_TIME_INFO({
                serverTime: Date.now(),
                openServerDay: player.server.getOpenDay(),
                openServerWeek: player.server.getOpenWeek(),
            }));
        } catch (error) {
            logger.error('获取服务器时间信息 接口出错', error);
        }
    }

    // 清空账号数据
    @MessageHandler(TestPto.C_TEST_CLEAR_ACCOUNT_DATA, { needTestEnv: true })
    async clearAccountData(session: LogicSession, player: Player) {
        logger.info(`${session.uuid} 清空账号数据`);
        const { userId } = player;
        const pModel = await player.getServerModel(PlayerModel);
        const emailModel = await player.getServerModel(EmailModel);
        const friendReqModel = await player.getServerModel(FriendReqModel);
        const fModel = await player.getServerModel(FriendModel);
        const roleModel = await GlobalVar.sequelizeDbMgr.getPlatformModel(RoleModel);
        await Promise.all([
            emailModel.destroy({ where: { receiverUserId: userId } }),
            pModel.destroy({ where: { userId } }),
            roleModel.destroy({ where: { uuid: player.uuid, serverId: player.server.serverId } }),
            friendReqModel.destroy({ where: { [Op.or]: [{ targetUserId: userId }, { userId }] } }),
            fModel.destroy({ where: { [Op.or]: [{ friendUserId: userId }, { userId }] } }),
        ]);
        player.server.playerDispose(player);
        GlobalVar.sessionMgr.deleteSession(session);
        GlobalVar.redisMgr.getClient().then((redisClient) => {
            redisClient.zrem(`onlineTime:${player.serverId}`, [userId]);
        });
        session.kick('清空账号');
    }

    // 设置玩家创角天数
    @MessageHandler(TestPto.C_TEST_SET_CREATE_DAY, { needTestEnv: true })
    async setCreateRoleDay(session: LogicSession, player: Player, msg: TestPto.C_TEST_SET_CREATE_DAY) {
        player.playerInfo.registerTime = TimeMgr.ins().dayStartMs - (msg.day - 1) * TimeMgr.dayMs;
        await player.playerInfo.save();
        player.server.playerDispose(player);
        GlobalVar.sessionMgr.deleteSession(session);
        session.kick('成功');
    }

    // 发送测试邮件
    @MessageHandler(TestPto.C_ADD_TEST_EMAIL, { needTestEnv: true })
    sendTestEmail(session: LogicSession, player: Player, msg: TestPto.C_ADD_TEST_EMAIL) {
        const emialComp = player.getComponent(EmailComponent);
        emialComp.sendEmail(EmailEnum.CommonEmail, ['t', 'd']);
        emialComp.sendEmail(EmailEnum.CompensationEmail, ['t', 'd']);
    }

    // 批量增加道具
    @MessageHandler(TestPto.C_TEST_ADD_BATCH_ITEMS, { needTestEnv: true })
    C_TEST_ADD_BATCH_ITEMS(session: LogicSession, player: Player, msg: TestPto.C_TEST_ADD_BATCH_ITEMS) {
        logger.debug('添加道具');
        player.getComponent(ItemComponent).updateItems(msg.items);
    }
}
