import { ItemPto } from '../../../../../common/proto/CommonProto';
import { TConfig } from '../TConfig';

export class Items extends TConfig<ItemsCfg> {
    private _mergeItemMap = new Map<number, ItemPto.IItem>();

    constructor(configs: ItemsCfg[]) {
        super();
        this.initList(configs);
    }

    /**
     * 将一维数组转化为道具数组
     * [道具id,数量,道具id,数量,道具id,数量]
     * @argument isInversion 是否取反,用于消耗道具时
    */
    getItemsByArray(array: number[], startIndex: number, isInversion = false): ItemPto.IItem[] {
        const items: ItemPto.IItem[] = [];
        for (let index = startIndex; index < array.length; index += 2) {
            items.push({ itemId: array[index], count: isInversion ? -array[index + 1] : array[index + 1] });
        }
        return items;
    }

    /**
     * 将二维数组转化为道具数组
     * [[道具id,数量],[道具id,数量],[],[]……]
     * @argument isInversion 是否取反,用于消耗道具时
    */
    getItemsBy2DArray(array: number[][], isInversion = false) {
        const items: ItemPto.IItem[] = [];
        for (let index = 0; index < array?.length; index++) {
            const tempArray = array[index];
            items.push(...this.getItemsByArray(tempArray, 0, isInversion));
        }
        return items;
    }

    /** 将同类item合并成在一起 */
    mergeItems(items: ItemPto.IItem[]) {
        items.forEach((item) => {
            const key = item.count < 0 ? -item.itemId : item.itemId;
            let saveItem = this._mergeItemMap.get(key);
            if (!saveItem) {
                saveItem = { ...item, count: 0 };
                this._mergeItemMap.set(key, saveItem);
            }
            saveItem.count += item.count;
        });

        // 合并同类道具返回
        const result: ItemPto.IItem[] = [];
        this._mergeItemMap.forEach((item) => {
            result.push(item);
        });
        this._mergeItemMap.clear();
        return result;
    }

    /**
     * 适用于通过权重获取道具
     * [[道具id1,数量1,权重1],[道具id2,数量2,权重2],[......]]
     */
    getItemsByWeightArray(array: number[][], times: number): ItemPto.IItem[] {
        const items: ItemPto.IItem[] = [];

        let sumWeight = 0;
        array.forEach((arr) => {
            sumWeight += arr[2];
        });

        for (let x = 0; x < times; x++) { // sum 100 => rand 0~99.999
            let rand = Math.random() * sumWeight;
            for (let index = 0; index < array.length; index++) {
                const [itemId, count, weight] = array[index];
                if (rand < weight) {
                    items.push({ itemId, count });
                    break;
                }
                rand -= weight;
            }
        }
        return items;
    }

    /** 道具乘法 */
    times(items: ItemPto.IItem[], times: number) {
        const result: ItemPto.IItem[] = [];
        items.forEach((item) => {
            result.push({ itemId: item.itemId, count: item.count * times });
        });
        return result;
    }

    /** 道具乘法,改变入参自身,向上取整 */
    timesSelf(items: ItemPto.IItem[], times: number) {
        if (times === 1) {
            return items;
        }
        items.forEach((item) => {
            item.count = Math.ceil(item.count * times);
        });
        return items;
    }

    getItems1and102(tempItem: ItemPto.IItem): ItemPto.IItem[] {
        const config = this.get(tempItem.itemId);
        if (!config || config.type !== 1 || config.subType !== 102) {
            logger.error('getItems_1_102 错误的道具类型', tempItem);
            return [];
        }

        return this.getItemsByWeightArray(config.json, tempItem.count);
    }
}
