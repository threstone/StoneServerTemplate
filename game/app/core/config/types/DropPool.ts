/* eslint-disable no-use-before-define */
import { ItemPto } from '../../../../../common/proto/CommonProto';
import { Player } from '../../../servers/logic/src/core/player/Player';
import { Cfg } from '../Cfg';
import { TConfig } from '../TConfig';
import { DictionaryComponent } from '../../../servers/logic/src/core/component/DictionaryComponent';
import { DictEnum } from '../../../Enum';

export class DropPool extends TConfig<DropPoolCfg> {
    constructor(configs: DropPoolCfg[]) {
        super();
        this.initList(configs);
    }

    /**
     * 根据掉落库id获取道具
     * @param poolId 掉落库id
     * @param player 玩家对象
     * @param deep [deep=0] 层级,用于防止掉落库抽取死循环(库抽库)
     * @returns 抽取的道具数组
     */
    getItems(poolId: number, player: Player, deep = 0): IResultDropItem[] {
        deep += 1;
        if (deep >= 5) {
            logger.error('DropPool.getItems 层级超过预期,中止本次掉落库获取', poolId);
            return [];
        }
        const poolConfig = this.get(poolId);
        if (!poolConfig) {
            logger.error(`未找到抽取库配置:${poolId}`);
            return [];
        }
        // 获取抽取次数
        const times = this.getDropTimes(poolConfig);
        let result: IResultDropItem[];
        if (times === 0) {
            result = [];
        } else {
            result = poolConfig.drawType === 0
                ? this.getItemsByReturn(poolConfig, player, times, deep) : this.getItemsNoReturn(poolConfig, player, times, deep);
        }
        // 记录次数
        this.recordDropTimes(player, poolId);
        return result;
    }

    /** 根据条件获取DropItems */
    private getDropItemsByCondition(poolConfig: DropPoolCfg, player: Player): IDropItem[] {
        const dropItems = poolConfig.dropItems as IDropItem[];
        const result: IDropItem[] = [];
        dropItems.forEach((item) => {
            // // 关卡条件判断 关卡数 (stage)：需要关卡满足范围后再将该条目置入随机库中
            // // [6,19]表示最大通关关卡在6~19则满足条件
            // if (item.stage) {
            //     const maxPassStage = player.playerInfo.maxNomalStage - 1;
            //     if (maxPassStage < item.stage[0] || maxPassStage > item.stage[1]) {
            //         return;
            //     }
            // }

            // // 主角达到x级后,再将该条目置入随机库中
            // if (item.level && player.playerInfo.lv < item.level) {
            //     return;
            // }

            // 掉落库的抽取次数条件
            if (item.freq && this.getPoolDropTimes(player, poolConfig.id) < item.freq) {
                return;
            }
            result.push(item);
        });
        return result;
    }

    /** 记录抽取次数 */
    private recordDropTimes(player: Player, poolId: number) {
        const dic = player.getComponent(DictionaryComponent);
        const record = dic.getValue(DictEnum.DropPoolTimes, {});
        record[poolId] = (record[poolId] || 0) + 1;
        dic.setValue(DictEnum.DropPoolTimes, record);
        dic.save();
    }

    /** 获取掉落库累计抽取次数 */
    private getPoolDropTimes(player: Player, poolId: number): number {
        const dic = player.getComponent(DictionaryComponent);
        const record = dic.getValue(DictEnum.DropPoolTimes, {});
        return record[poolId] || 0;
    }

    /** 放回抽的方式 */
    private getItemsByReturn(poolConfig: DropPoolCfg, player: Player, times: number, deep: number): IResultDropItem[] {
        const dropItems = this.getDropItemsByCondition(poolConfig, player);
        // 没有符合条件的抽取道具
        if (dropItems.length === 0) {
            return [];
        }

        let sumWeight = 0;
        for (let index = 0; index < dropItems.length; index++) {
            const dropItem = dropItems[index];
            sumWeight += dropItem.wt;
        }

        const result: IResultDropItem[] = [];
        for (let t = 0; t < times; t++) {
            let rand = Math.random() * sumWeight;
            for (let index = 0; index < dropItems.length; index++) {
                const dropItem = dropItems[index];
                if (rand < dropItem.wt) {
                    const items = this.getItemByDropItem(dropItem, player, deep);
                    result.push(...items);
                    break;
                }
                rand -= dropItem.wt;
            }
        }

        return Cfg.Items.mergeItems(result);
    }

    /** 不放回抽的方式 */
    private getItemsNoReturn(poolConfig: DropPoolCfg, player: Player, times: number, deep: number): IResultDropItem[] {
        const dropItems = this.getDropItemsByCondition(poolConfig, player);
        // 没有符合条件的抽取道具
        if (dropItems.length === 0) {
            return [];
        }
        // 总权重
        let sumWeight = 0;
        for (let index = 0; index < dropItems.length; index++) {
            const dropItem = dropItems[index];
            sumWeight += dropItem.wt;
        }

        const result: IResultDropItem[] = [];

        let curSumWeight = sumWeight;
        let curDropItems = [...dropItems];
        for (let t = 0; t < times; t++) {
            let rand = Math.random() * curSumWeight;
            for (let index = 0; index < curDropItems.length; index++) {
                const dropItem = curDropItems[index];
                if (rand < dropItem.wt) {
                    const items = this.getItemByDropItem(dropItem, player, deep);
                    result.push(...items);
                    // 取出道具
                    curSumWeight -= dropItem.wt;
                    curDropItems.splice(index, 1);
                    if (curDropItems.length === 0 && poolConfig.resetType === 0) {
                        curSumWeight = sumWeight;
                        curDropItems = [...dropItems];
                    }
                    break;
                }
                rand -= dropItem.wt;
            }
        }

        return Cfg.Items.mergeItems(result);
    }

    /** 获取抽取的道具 */
    private getItemByDropItem(dropItem: IDropItem, player: Player, deep: number): IResultDropItem[] {
        // 直接获取道具
        if (dropItem.drop == null) {
            const item: IResultDropItem = { itemId: dropItem.id, count: 0 };
            if (dropItem.cnt) {
                item.count = dropItem.cnt;
            } else if (dropItem.cntRng[0] != null && dropItem.cntRng[1] != null) {
                const [min, max] = dropItem.cntRng;
                item.count = Math.floor(Math.random() * (max + 1 - min)) + min;
            }

            if (dropItem.shopItem) {
                item.shopItem = dropItem.shopItem;
                item.shopCnt = dropItem.shopCnt || 0;
            }
            return [item];
        }
        // 从掉落库中获取道具
        return this.getItems(dropItem.drop, player, deep);
    }

    /** 获取抽取次数 */
    private getDropTimes(poolConfig: DropPoolCfg) {
        if (!poolConfig) {
            return 0;
        }
        const timeCnt = poolConfig.timeCnt as TimeCnt[];
        if (!poolConfig.timeCnt) {
            return 0;
        }
        if (timeCnt.length === 1) {
            return timeCnt[0].c;
        }

        let sumWeight = 0;
        timeCnt.forEach((item) => {
            sumWeight += item.w;
        });

        let rand = Math.random() * sumWeight;
        for (let index = 0; index < timeCnt.length; index++) {
            const item = timeCnt[index];
            if (rand < item.w) {
                return item.c;
            }
            rand -= item.w;
        }
        return 0;
    }
}

interface IDropItem {
    id?: number; // 道具id
    cnt?: number; // 道具数量
    wt?: number; // 权重
    cntRng?: [number, number]; // 道具数量随机范围
    stage?: [number, number]; // 关卡条件范围
    level?: number; // 主角等级 (level)：主角达到x级后，再将该条目置入随机库中
    freq?: number; // 普通抽卡抽卡次数条件
    drop?: number; // 要抽取的掉落库id

    // 黑市专用
    shopItem?: number; // 用于黑市购买商品需要用到的货币id
    shopCnt?: number; // 用于黑市购买商品用到货币id的数量价格
}

interface TimeCnt {
    c?: number; // 次数
    w?: number; // 权重
}

interface IResultDropItem extends ItemPto.IItem {
    // 黑市专用
    shopItem?: number; // 用于黑市购买商品需要用到的货币id
    shopCnt?: number; // 用于黑市购买商品用到货币id的数量价格
}
