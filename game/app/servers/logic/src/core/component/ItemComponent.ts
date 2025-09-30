/* eslint-disable consistent-return */
import { ItemPto } from '../../../../../../../common/proto/CommonProto';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';
import { EventEnum } from '../../../../../Enum';
import { Cfg } from '../../../../../core/config/Cfg';
import { IItem, ItemInfo } from '../../../../../../../common/sequelize/model/game/TypeDefine';
import { RecoveryItem } from './entity/item/RecoveryItem';
import { Item } from './entity/item/Item';
import { ExpireItem } from './entity/item/ExpireItem';
import { DayComponent } from './DayComponent';
import { WeekComponent } from './WeekComponent';
import { MonthComponent } from './MonthComponent';

/** 玩家道具组件 */
export class ItemComponent extends BaseComponent {
    private _logicTimer: NodeJS.Timeout;

    private _itemInfo: ItemInfo;

    private _itemMap = new Map<number, Item>();

    protected init(player: Player) {
        this._itemInfo = player.playerInfo.itemInfo;
        const { itemDatas } = this._itemInfo;
        Object.keys(itemDatas).forEach((key) => {
            const item = itemDatas[key] as IItem;
            const itemCfg = Cfg.Items.get(item.itemId);
            if (!itemCfg) {
                logger.error(`未找到道具配置 itemId:${item.itemId}`);
                return;
            }
            this._itemMap.set(item.itemId, this.createEntity(item, itemCfg));
        });
        this.onUpdate();
        // todo 潜在优化点,不应该每个玩家都创建一个定时器
        this._logicTimer = setInterval(this.onUpdate.bind(this), 1000);
    }

    protected onPlayerInitEnd(): void {
        if (this._itemInfo.isInit !== true) {
            this._itemInfo.isInit = true;
            this.updateItems(Cfg.InitialItems.initialItems, false);
            this.save();
        }
    }

    protected onDestroy() {
        clearInterval(this._logicTimer);
    }

    private createEntity(item: IItem, itemCfg: ItemsCfg): Item {
        let itemEntity: Item;
        if (itemCfg.type === 2) {
            itemEntity = new RecoveryItem(item, this);
        } else if (itemCfg.type === 3) {
            itemEntity = new ExpireItem(item, this);
        } else {
            itemEntity = new Item(item, this);
        }
        return itemEntity;
    }

    private onUpdate() {
        const now = Date.now();
        this._itemMap.forEach((item) => {
            item.onUpdate(now);
        });
    }

    getItem(itemId: number) {
        return this._itemMap.get(itemId);
    }

    /** 获取道具数量 */
    getItemCount(itemId: number) {
        return this.getItem(itemId)?.count || 0;
    }

    /** 检查是否有足够数量的道具 */
    hasEnoughItems(items: ItemPto.IItem[]) {
        const mergeItems = Cfg.Items.mergeItems(items);
        for (let index = 0; index < mergeItems.length; index++) {
            const item = mergeItems[index];
            if (this.getItemCount(item.itemId) < Math.abs(item.count)) {
                return false;
            }
        }
        return true;
    }

    // eslint-disable-next-line no-unused-vars
    forEachItemMap(callbackfn: (value: Item, itemId: number) => void, thisArg?: unknown) {
        this._itemMap.forEach(callbackfn, thisArg);
    }

    /**
     * 更新道具
     * @param [deep=0] 层级,用于防止自动打开道具导致的死循环
     * @returns 返回真正变更的道具
     */
    updateItems(items: ItemPto.IItem[], isNotify: boolean = true, deep: number = 0) {
        if (!items) {
            logger.error('updateItems更新道具出错,items为空', new Error());
            return [];
        }
        deep += 1;
        if (deep >= 5) {
            logger.error('updateItems层级超过预期,中止本次道具获取', items);
            return [];
        }
        items = Cfg.Items.mergeItems(items);
        const realItemsChange: ItemPto.IItem[] = [];
        // 扣除道具时的数量检查、配置检查， 合并同类道具,获取限制检查
        for (let index = items.length - 1; index >= 0; index--) {
            const tempItem = items[index];
            if (tempItem.count === 0) {
                continue;
            }
            const config = Cfg.Items.get(tempItem.itemId);
            if (!config) {
                logger.error(`未知道具 itemId:${tempItem.itemId}`);
                items.splice(index, 1);
                continue;
            }

            if (tempItem.count < 0) {
                const hasCount = this.getItemCount(tempItem.itemId);
                if (hasCount < Math.abs(tempItem.count)) {
                    logger.error(`道具不足 itemId:${tempItem.itemId}, changeCount:${tempItem.count}, hasCount:${hasCount}`);
                    items.splice(index, 1);
                    continue;
                }
            } else if (config.getLimit) {
                // 获取限制检查
                const availableCount = this.getAvailableCount(config);
                if (availableCount === 0) {
                    items.splice(index, 1);
                    continue;
                }
                tempItem.count = Math.min(tempItem.count, availableCount);
            }
        }

        // 处理道具变更
        for (let index = 0; index < items.length; index++) {
            const tempItem = items[index];
            if (tempItem.count === 0) {
                continue;
            }
            const config = Cfg.Items.get(tempItem.itemId);
            // 根据不同的类型处理道具
            if (this[`updateItem${config.type}`]) {
                this[`updateItem${config.type}`](tempItem, realItemsChange, config, deep);
            } else {
                this.updateItem0(tempItem, realItemsChange, config);
            }
        }

        this.notifyItemsUpdate(realItemsChange, isNotify);
        return realItemsChange;
    }

    /** 通知道具变动 */
    private notifyItemsUpdate(realItemsChange: ItemPto.IItem[], isNotify: boolean) {
        if (realItemsChange.length === 0) {
            return;
        }

        const message = new ItemPto.S_ITEMS_UPDATE();
        // 需要合并后通知,否则会产生大量事件派发和重复道具变更通知
        const notifyItems = Cfg.Items.mergeItems(realItemsChange);
        notifyItems.forEach((item) => {
            const itemEntity = this.getItem(item.itemId);
            if (itemEntity) {
                message.items.push(itemEntity.data);
                this.player.emit(EventEnum.ItemChange, item, itemEntity);
                if (item.count > 0) {
                    this.recordGetCount(item.itemId, item.count);
                }
            } else {
                message.items.push(item);
            }
        });
        if (isNotify) {
            this.player.sendMessage(message);
        }
    }

    /** 普通道具变动 */
    private updateItem0(tempItem: ItemPto.IItem, realItemsChange: ItemPto.IItem[], config: ItemsCfg) {
        const itemEntity = this._itemMap.get(tempItem.itemId);
        if (!itemEntity) {
            const itemData: IItem = {
                itemId: tempItem.itemId,
                count: tempItem.count,
                isNew: true,
            };
            const { itemDatas } = this._itemInfo;
            itemDatas[tempItem.itemId] = itemData;
            this._itemMap.set(tempItem.itemId, this.createEntity(itemData, config));
        } else {
            itemEntity.addCount(tempItem.count);
        }

        this.save();
        realItemsChange.push(tempItem);
    }

    /** 使用类道具变动(大多数使用类道具其实跟普通道具没有太大区别),主要处理自动使用类道具的逻辑 */
    private updateItem1(tempItem: ItemPto.IItem, realItemsChange: ItemPto.IItem[], config: ItemsCfg, deep: number) {
        switch (config.subType) {
            // 101=抽取所有（自动使用）
            case 101: {
                // 掉落库
                for (let x = 0; x < config.json.length; x++) {
                    const array = config.json[x];
                    for (let y = 0; y < array.length; y++) {
                        const poolId = array[y];
                        for (let times = 0; times < tempItem.count; times++) {
                            // 通过掉落库抽取道具
                            const items = Cfg.DropPool.getItems(poolId, this.player);
                            const updateResult = this.updateItems(items, false, deep);
                            realItemsChange.push(...updateResult);
                        }
                    }
                }
                break;
            }
            // 102 = 道具随机（自动使用）
            case 102: {
                const items = Cfg.Items.getItems1and102(tempItem);
                const updateResult = this.updateItems(items, false);
                realItemsChange.push(...updateResult);
                break;
            }
            default:
                return this.updateItem0(tempItem, realItemsChange, config);
        }
    }

    /** 使用道具 */
    useItems(msg: ItemPto.C_USE_ITEMS) {
        const itemEntity = this.getItem(msg.itemId);
        if (!itemEntity || itemEntity.count < msg.count) {
            this.player.sendErrorMessage('道具不足');
            return logger.error('useItem 道具不足', msg.itemId, msg.count);
        }

        const config = Cfg.Items.get(msg.itemId);
        if (config?.type !== 1) {
            this.player.sendErrorMessage('参数错误');
            return logger.error('useItem 非可使用道具', msg.itemId, msg.count);
        }

        try {
            // 根据不同的类型处理道具
            this[`useItems${config.subType}`](msg, config);
        } catch (error) {
            logger.error('使用道具出错', msg.itemId, msg.count, error);
        }
    }

    /**
     * 1 = 抽取所有
     * [[掉落ID,掉落ID,……]]
     */
    private useItems1(msg: ItemPto.C_USE_ITEMS, config: ItemsCfg) {
        // 消耗
        const cost: ItemPto.IItem = { itemId: msg.itemId, count: -msg.count };
        const items: ItemPto.IItem[] = [];
        for (let index = 0; index < config.json.length; index++) {
            const array = config.json[index];
            for (let z = 0; z < array.length; z++) {
                const poolId = array[z];
                for (let t = 0; t < msg.count; t++) {
                    items.push(...Cfg.DropPool.getItems(poolId, this.player));
                }
            }
        }
        items.push(cost);
        this.player.sendMessage(new ItemPto.S_USE_ITEMS({ items: this.updateItems(items) }));
    }

    /**
     * 2 = 道具随机
     * [[道具id1,数量1,权重1],[道具id2,数量2,权重2],[......]]
     */
    private async useItems2(msg: ItemPto.C_USE_ITEMS, config: ItemsCfg) {
        const cost = { itemId: msg.itemId, count: -msg.count };
        const items = Cfg.Items.getItemsByWeightArray(config.json, msg.count);
        // 加入消耗
        items.push(cost);
        // 道具变动
        this.player.sendMessage(new ItemPto.S_USE_ITEMS({ items: this.updateItems(items) }));
    }

    /**
     * 3 = 自选道具
     * [[道具ID,数量],[道具ID,数量]]
     */
    private async useItems3(msg: ItemPto.C_USE_ITEMS, config: ItemsCfg) {
        const array = config.json[msg.selectIndex];
        if (!array || array.length !== 2) {
            return this.player.sendErrorMessage('参数错误');
        }

        const cost = { itemId: msg.itemId, count: -msg.count };
        const items: ItemPto.IItem[] = [{ itemId: array[0], count: array[1] * msg.count }];
        // 加入消耗
        items.push(cost);
        // 道具变动
        this.player.sendMessage(new ItemPto.S_USE_ITEMS({ items: this.updateItems(items) }));
    }

    /** 获取该道具的可获取数量 */
    private getAvailableCount(config: ItemsCfg) {
        const [, count] = config.getLimit;
        return count - this.getItemAccumulatedCountInPeriod(config);
    }

    /** 获取一定时间内的指定道具的累计获取数量,仅该道具有getLimit时有效 */
    getItemAccumulatedCountInPeriod(config: ItemsCfg) {
        if (!config.getLimit) { return 0; }
        const [type] = config.getLimit;
        let itemAccumulatedCountRecord: { [key: number]: number };
        switch (type) {
            case 1:// 每日上限
                itemAccumulatedCountRecord = this.getPlayerComponent(DayComponent).day.itemAccumulatedCountRecord;
                break;
            case 2:// 每周上限
                itemAccumulatedCountRecord = this.getPlayerComponent(WeekComponent).week.itemAccumulatedCountRecord;
                break;
            case 3:// 每月上限
                itemAccumulatedCountRecord = this.getPlayerComponent(MonthComponent).month.itemAccumulatedCountRecord;
                break;
            default:
                return 0;
        }
        return itemAccumulatedCountRecord[config.id] || 0;
    }

    /** 记录获取次数 */
    private recordGetCount(itemId: number, count: number) {
        if (count <= 0) { return; }
        const config = Cfg.Items.get(itemId);
        if (!config.getLimit) { return; }
        const [type] = config.getLimit;
        let itemAccumulatedCountRecord: { [key: number]: number };
        let comp: DayComponent | WeekComponent | MonthComponent;
        switch (type) {
            case 1:// 每日上限
                comp = this.getPlayerComponent(DayComponent);
                itemAccumulatedCountRecord = comp.day.itemAccumulatedCountRecord;
                break;
            case 2:// 每周上限
                comp = this.getPlayerComponent(WeekComponent);
                itemAccumulatedCountRecord = comp.week.itemAccumulatedCountRecord;
                break;
            case 3:// 每月上限
                comp = this.getPlayerComponent(MonthComponent);
                itemAccumulatedCountRecord = comp.month.itemAccumulatedCountRecord;
                break;
            default:
                return;
        }
        itemAccumulatedCountRecord[config.id] = (itemAccumulatedCountRecord[config.id] || 0) + count;
        comp.save();
    }

    save() {
        this.player.savePlayerInfoForAttr('itemInfo');
    }
}
