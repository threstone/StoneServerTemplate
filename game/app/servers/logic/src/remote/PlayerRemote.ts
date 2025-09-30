import { ServerPto } from '../../../../../../common/proto/CommonProto';
import { EventEnum } from '../../../../Enum';
import { GlobalVar } from '../GlobalVar';

export class PlayerRemote {
    async onPlayerRegister(
        gateNodeId: string,
        sessionId: number,
        uuid: string,
        ip: string,
        serverId: number,
        isRecovery: boolean,
        province: string,
    ): Promise<boolean> {
        try {
            // 防止还未初始化完成就执行逻辑
            if (!GlobalVar.sessionMgr) {
                return new Promise<boolean>((resolve) => {
                    eventEmitter.once(EventEnum.LogicInitComplete, () => {
                        this.onPlayerRegister(gateNodeId, sessionId, uuid, ip, serverId, isRecovery, province).then(resolve);
                    });
                });
            }
            const session = GlobalVar.sessionMgr.initSession(gateNodeId, sessionId, uuid, ip, province);
            const server = GlobalVar.serverMgr.getServerEntity(serverId);
            if (!server) {
                session.sendMessage(new ServerPto.S_CONNECT({ loginInfo: { code: 1 } }));
            }
            if (await server.allowToEnter(session) === false) {
                return false;
            }
            return await server.enterServer(session, isRecovery);
        } catch (error) {
            logger.error(`[${uuid}] 注册玩家失败 uuid:${uuid} error:${error},stack:${error.stack}`);
            return false;
        }
    }

    async onPlayerSocketClose(gateNodeId: string, sessionId: number): Promise<void> {
        // 防止还未初始化完成就执行逻辑
        if (!GlobalVar.sessionMgr) {
            // eslint-disable-next-line no-new
            return new Promise<void>(() => {
                eventEmitter.once(EventEnum.LogicInitComplete, () => {
                    this.onPlayerSocketClose(gateNodeId, sessionId);
                });
            });
        }

        const session = GlobalVar.sessionMgr.getSession(gateNodeId, sessionId);
        if (session) {
            logger.debug(`[${session.uuid}] 玩家socket断开  uuid:${session.uuid} userId:${session.player?.userId} `
                + `gateNodeId:${session.gateNodeId} sessionId:${session.sessionId} ip:${session.ip}`);
            GlobalVar.sessionMgr.deleteSession(session);
            session.onPlayerOffline();
        }
        return null;
    }

    notifyPlayerEvent(userId: string, serverId: number, eventName: string, ...data: any[]): void {
        const player = GlobalVar.serverMgr.getServerEntity(serverId)?.getPlayerByUserId(userId);
        if (player) {
            player.emit(eventName, ...data);
        }
    }
}
