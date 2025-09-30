import { GlobalVar } from '../GlobalVar';
// 目前没有将battle抽出单独部署，所以这里直接从config中获取battle的地址
// 未来如果battle单独部署,就需要把这部分更新逻辑放在单独的battle项目中
GlobalVar.redisMgr.getClient().then(async (redis) => {
    const redisKey = 'battle_address';
    await redis.delete(redisKey);
    const battleAddress: string[] = [];
    serversConfigMap.forEach((serverConfig) => {
        if (serverConfig.serverType === 'battle') {
            if (serviceConfig.ssl || serviceConfig.isTransferSSL) {
                battleAddress.push(`wss://${serverConfig.ip}:${serverConfig.port}`);
            } else {
                battleAddress.push(`ws://${serverConfig.ip}:${serverConfig.port}`);
            }
        }
    });
    redis.setData(redisKey, JSON.stringify(battleAddress), -1);
});
