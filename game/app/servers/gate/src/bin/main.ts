import { StoneEvent } from 'stone-framework';
import { GlobalVar } from '../GlobalVar';

let hasLogic = false;
let hasRpcConnect = false;

function checkInit() {
    if (hasLogic && hasRpcConnect) {
        GlobalVar.init();
    }
}

function onClusterStatusUpdate(serverMap: Map<string, IServerConfig>) {
    for (const [, serverConfig] of serverMap) {
        if (serverConfig.serverType === 'logic') {
            hasLogic = true;
            checkInit();
            eventEmitter.off(StoneEvent.ClusterStatusUpdate, onClusterStatusUpdate);
            break;
        }
    }
}

eventEmitter.on(StoneEvent.ClusterStatusUpdate, onClusterStatusUpdate);
eventEmitter.once(StoneEvent.RpcServerConnected, () => {
    hasRpcConnect = true;
    checkInit();
});
