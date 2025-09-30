import * as http from 'http';
import { RpcRouteType, StoneEvent } from 'stone-framework';
import * as crypto from 'crypto';
import { WebSocketServer } from '../../../core/net/WebSocketServer';
import { GateSession } from './GateSession';

export class GateServer extends WebSocketServer<GateSession> {
    private _logicNodeIdList: string[];

    constructor(listenPort: number) {
        super(listenPort, GateSession, { maxPayload: 1024 * 1024 });
        // 监听集群状态变化, 更新逻辑节点列表
        eventEmitter.on(StoneEvent.ClusterStatusUpdate, this.updateLogicList.bind(this));
        this.updateLogicList(getClusterInfo());
        setInterval(this.clearInactiveSession.bind(this), 60000);
    }

    /** 清理长时间不活跃的session  */
    private clearInactiveSession() {
        this._sessionMap.forEach((session) => {
            session.clearIfInactive();
        });
    }

    async onClientConnect(session: GateSession, request: http.IncomingMessage) {
        const connectInfo: string = request.headers['sec-websocket-protocol'];
        if (!connectInfo) {
            logger.error(`[GateServer] sec-websocket-protocol验证失败,不包含必要信息 ip:${session.ip} sessionId:${session.sessionId}`);
            session.close(4001, 'param error');
            return;
        }
        const protocolData = connectInfo.split(',');
        const [token, serverIdStr, provinceData] = protocolData;
        const result = await session.verify(token, serverIdStr, this.getProvince(provinceData));
        if (!result) {
            logger.error(`[GateServer] verify 验证失败,可能是token过期,token:${token} ip:${session.ip} sessionId:${session.sessionId}`);
            session.close(4001, 'verify err');
        }
        logger.info(`[GateServer] 客户端链接流程结束 连接结果:${result} ip:${session.ip} sessionId:${session.sessionId} token:${token}`);
        session.isInit = true;
        session.socket.emit('GateSessionInitEnd');
    }

    private getProvince(provinceData: string) {
        if (!provinceData) {
            return null;
        }
        provinceData = provinceData.trim();
        const stringArray: number[] | string[] = provinceData.split('-');
        if (stringArray.length > 0) {
            const datas: number[] = new Array(stringArray.length);
            for (let index = 0; index < stringArray.length; index++) {
                datas[index] = Number(stringArray[index]);
            }
            return Buffer.from(datas).toString();
        }
        return null;
        // const dataArray = protocolData.slice(2) as (number | string)[];
        // const provinceData: number[] = [];
        // if (dataArray.length > 0) {
        //     for (let index = 0; index < dataArray.length; index += 2) {
        //         provinceData.push(Number(dataArray[index]));
        //     }
        //     return Buffer.from(provinceData).toString();
        // }
        // return null;
    }

    onClientSocketClose(session: GateSession): void {
        if (session.isInit) {
            rpc.logic.playerRemote.sendOnPlayerSocketClose(
                { type: RpcRouteType.Target, nodeId: session.logicRoute },
                nodeId,
                session.sessionId,
            );
        } else {
            session.socket.once('GateSessionInitEnd', () => {
                rpc.logic.playerRemote.sendOnPlayerSocketClose(
                    { type: RpcRouteType.Target, nodeId: session.logicRoute },
                    nodeId,
                    session.sessionId,
                );
            });
        }
    }

    private updateLogicList(serverMap: Map<string, IServerConfig>) {
        const newLogicNodeIdSet = new Set<string>();
        serverMap.forEach((server) => {
            if (server.serverType === 'logic') { newLogicNodeIdSet.add(server.nodeId); }
        });

        const transferSet = new Set<string>();
        if (this._logicNodeIdList) {
            this._logicNodeIdList.forEach((nodeId) => {
                if (!newLogicNodeIdSet.has(nodeId)) {
                    transferSet.add(nodeId);
                }
            });
        }
        this._logicNodeIdList = Array.from(newLogicNodeIdSet);
        this.transferLogic(transferSet);
    }

    private transferLogic(transferSet: Set<string>) {
        this._sessionMap.forEach((session) => {
            if (transferSet.has(session.logicRoute)) {
                session.modifyLogic();
            }
        });
    }

    public getRouterLogic(uuid: string) {
        return this._logicNodeIdList[this.getIntHash(uuid) % this._logicNodeIdList.length];
    }

    public getIntHash(uuid: string) {
        // 创建一个哈希实例，这里使用'md5'
        const hash = crypto.createHash('md5');
        // 更新哈希实例的数据，这里是要哈希的字符串
        hash.update(uuid);
        // 计算哈希值，返回一个十六进制的字符串
        const hexHash = hash.digest('hex');
        return parseInt(hexHash.substring(0, 8), 16);
    }
}
