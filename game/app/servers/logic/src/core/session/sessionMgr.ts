import { GlobalVar } from '../../GlobalVar';
import { LogicSession } from './LogicSession';

export class SessionMgr {
    private _sessionMap: Map<string, LogicSession> = new Map();

    constructor() {
        this.initEvent();
    }

    private async initEvent() {
        const subClient = await GlobalVar.redisMgr.getClientForSubscribe();
        subClient.subscribe('$kick', this.kickPlayer.bind(this));
    }

    private kickPlayer(kickJsonStr: string) {
        const kickInfo = JSON.parse(kickJsonStr);
        if (kickInfo.userIdOrIp.indexOf('.') !== -1) {
            const ip = kickInfo.userIdOrIp;
            this._sessionMap.forEach((session) => {
                if (session.ip === ip) {
                    session.kick(kickInfo.reason);
                }
            });
        } else {
            const userId = kickInfo.userIdOrIp;
            this._sessionMap.forEach((session) => {
                if (session.player?.userId === userId) {
                    session.kick(kickInfo.reason);
                }
            });
        }
    }

    private getSessionKey(gateNodeId: string, sessionId: number) {
        return `${gateNodeId}-${sessionId}`;
    }

    getSession(gateNodeId: string, sessionId: number) {
        return this.getSessionByKey(this.getSessionKey(gateNodeId, sessionId));
    }

    private getSessionByKey(key: string) {
        return this._sessionMap.get(key);
    }

    deleteSession(session: LogicSession) {
        const key = this.getSessionKey(session.gateNodeId, session.sessionId);
        this._sessionMap.delete(key);
    }

    initSession(gateNodeId: string, sessionId: number, uuid: string, ip: string, province: string) {
        const key = this.getSessionKey(gateNodeId, sessionId);
        const oldSession = this._sessionMap.get(key);
        if (oldSession) {
            logger.error('异常, 重复的session');
            oldSession.kick();
        }
        const session = new LogicSession(gateNodeId, sessionId, uuid, ip, province);
        this._sessionMap.set(key, session);
        return session;
    }
}
