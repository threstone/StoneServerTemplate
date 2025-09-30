import { RedisMgr } from '../../../../common/redis/RedisMgr';
import { Cfg } from './Cfg';

export class ConfigMgr {
    static async init(redisMgr: RedisMgr, configType: 'server') {
        const subRedis = await redisMgr.getClientForSubscribe();
        subRedis.subscribe('$config_update', this.onConfigsUpdate.bind(this));
        Cfg.init(configType, serviceConfig.cloudConfigPath);
    }

    private static async onConfigsUpdate() {
        try {
            logger.info('开始热更配置');
            await Cfg.init('server', serviceConfig.cloudConfigPath);
            logger.info('热更配置完成');
        } catch (error) {
            logger.error('热更配置失败', error);
        }
    }
}
