import path = require('path');
import { GlobalVar } from '../GlobalVar';
import { BaseComponent } from './component/BaseComponent';

export class HotUpdateMgr {
    static async init() {
        (await GlobalVar.redisMgr.getClientForSubscribe()).subscribe('$hot_update', this.hotUpdate.bind(this));
    }

    private static hotUpdate(updateBodyStr: string) {
        const updateBody: { handler: boolean, components: string[] } = JSON.parse(updateBodyStr);
        if (updateBody.handler) {
            this.hotUpdateHandler();
        }

        if (updateBody.components?.length > 0) {
            this.hotUpdateComponent(updateBody.components);
        }
    }

    /** 热更handler */
    private static hotUpdateHandler() {
        logger.info('开始Handler热更');
        const handlerPath = path.join(__dirname, '../handler');
        Object.keys(require.cache).forEach((filePath) => {
            if (filePath.indexOf(handlerPath) !== -1) {
                delete require.cache[filePath];
            }
        });
        GlobalVar.initMsgHandler();
        logger.info('Handler热更完成');
    }

    /**
     * 热更玩家组件
     * 要尽量防止异步组件的热更,因为异步组件一般都需要查询mysql,如果在线玩家过多,可能导致瞬时数据库操作过多
     */
    private static hotUpdateComponent(components: string[]) {
        logger.info('开始Components热更');
        // 先将不在线的玩家对象清理掉,防止热更到不在线玩家组件时又触发清理玩家逻辑导致的意外冲突
        // (热更异步组件情况下可能发生,在 await component.init()没有完成的情况下,玩家对象被清理)
        GlobalVar.serverMgr.clearOfflinePlayersImmediate();
        const allComponents = BaseComponent.getAllComponents();
        const compPath = path.join(__dirname, './component/');
        for (let index = allComponents.length - 1; index >= 0; index--) {
            const componentClass = allComponents[index];
            if (!components.includes(componentClass.name)) {
                continue;
            }
            const componentFilePath = path.join(compPath, `${componentClass.name}.js`);
            allComponents.splice(index, 1);
            delete require.cache[componentFilePath];
            // eslint-disable-next-line import/no-dynamic-require, global-require
            const newComponentClass = require(componentFilePath)[componentClass.name];
            allComponents.push(newComponentClass);
            GlobalVar.serverMgr.foreachServer((server) => {
                server.foreachPlayer((p) => {
                    p.reloadComponent(newComponentClass);
                });
            });
        }
        logger.info('Components热更完成:', components);
    }
}
