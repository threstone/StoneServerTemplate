/* eslint-disable no-use-before-define */
import * as fs from 'fs';
import * as path from 'path';
import { Player } from '../player/Player';

// eslint-disable-next-line no-unused-vars
type ComponentClass = new (player: Player) => BaseComponent;

const InitTimeLimit = 30000;
export abstract class BaseComponent {
    private static _components: ComponentClass[];

    static getAllComponents(): ComponentClass[] {
        if (!BaseComponent._components) {
            BaseComponent._components = [];
            fs.readdirSync(__dirname).forEach((fileName) => {
                if (fileName.endsWith('Component.js') && fileName.startsWith('BaseComponent') === false) {
                    // eslint-disable-next-line import/no-dynamic-require, global-require
                    const compClass = require(path.join(__dirname, fileName))[fileName.substring(0, fileName.length - 3)];
                    if (compClass) {
                        BaseComponent._components.push(compClass);
                    }
                }
            });
        }
        return BaseComponent._components;
    }

    protected initEventName = `${this.constructor.name}Init`;

    /** 是否是必要组件,用以决定加载顺序,普通组件将在所有必要组件加载完成后加载 */
    get isNecessary() { return this._isNecessary; }

    private _isNecessary: boolean;

    player: Player;

    isDestroy: boolean = false;

    /**
     * @param player 玩家对象
     * @param isNecessary 是否是必要组件,用以决定加载顺序,普通组件将在所有必要组件加载完成后加载
     */
    constructor(player: Player, isNecessary: boolean = false) {
        this._isNecessary = isNecessary;
        this.player = player;
    }

    /** 组件的初始化方法 */
    // eslint-disable-next-line no-unused-vars
    protected abstract init(player: Player): Promise<void> | void;

    /** 当组件被销毁 */
    protected abstract onDestroy(): void;

    /** 当玩家初始化完成(所有组件都加载完毕) */
    protected abstract onPlayerInitEnd(): void;

    /** 初始化组件 */
    async initComponent(player: Player) {
        // console.time(`[${player.userId}]${this._initEventName}`);
        // 监听组件完成加载事件
        this.player.once(this.initEventName, (errMsg: string | Error) => {
            // console.timeEnd(`[${player.userId}]${this._initEventName}`);
            if (errMsg) {
                logger.error(`[${this.player.userId}] ${this.initEventName} 加载组件异常:`, errMsg);
            }
        });

        try {
            const initResult = this.init(player);
            if (initResult instanceof Promise) {
                // 如果是异步函数,限定组件的加载最大时长,超时则抛出异常
                let timer: NodeJS.Timeout;
                await Promise.race([
                    initResult.then(() => {
                        if (timer) { clearTimeout(timer); }
                        this.player.emit(this.initEventName);
                    }),
                    new Promise<void>((resolve) => {
                        timer = setTimeout(() => {
                            timer = null;
                            this.player.emit(this.initEventName, `加载用时已经超过${InitTimeLimit},请检查逻辑`);
                            resolve();
                        }, InitTimeLimit);
                    }),
                ]);
            } else {
                this.player.emit(this.initEventName);
            }
        } catch (error) {
            this.player.emit(this.initEventName, error);
        }
    }

    /** 获取组件 */
    getPlayerComponent<T extends BaseComponent>(componentClass: new (...args: any[]) => T): T {
        return this.player.getComponent(componentClass);
    }

    /** 销毁组件 */
    destroy() {
        this.isDestroy = true;
        this.onDestroy();
    }
}
