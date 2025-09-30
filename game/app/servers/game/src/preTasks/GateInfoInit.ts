import { StoneEvent } from 'stone-framework';
import { GlobalVar } from '../GlobalVar';

async function updateGateList() {
    const redis = await GlobalVar.redisMgr.getClient();
    const gateList = [];
    serversConfigMap.forEach((serverConfig) => {
        if (serverConfig.serverType !== 'gate') {
            return;
        }
        if (serviceConfig.ssl || serviceConfig.isTransferSSL) {
            gateList.push(`wss://${serverConfig.ip}:${serverConfig.port}`);
        } else {
            gateList.push(`ws://${serverConfig.ip}:${serverConfig.port}`);
        }
    });
    const value = JSON.stringify(gateList);
    redis.setData('$gate_info', value, -1);
    redis.publish('$gate_info_update', value);
}

eventEmitter.on(StoneEvent.ClusterStatusUpdate, updateGateList);
updateGateList();
