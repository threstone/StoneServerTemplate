import { IItem } from '../../../../../../../../../common/sequelize/model/game/TypeDefine';
import { Cfg } from '../../../../../../../core/config/Cfg';
import { ItemsEnum } from '../../../../../../../core/config/ConfigDefineEnum';
import { EventEnum } from '../../../../../../../Enum';
import { ItemComponent } from '../../ItemComponent';
import { Item } from './Item';

export class RecoveryItem extends Item {
    constructor(itemData: IItem, _comp: ItemComponent) {
        super(itemData, _comp);
        if (itemData.nextRecoverTime == null) {
            itemData.nextRecoverTime = 0;
        }
    }

    get recoverInterval() {
        return Cfg.Items.get(this._itemData.itemId).json[0][0];
    }

    get max() {
        const { itemId } = this._itemData;
        const configMax = Cfg.Items.get(itemId).json[0][1];
        // 额外上限计算
        let expend = 0;
        switch (itemId) {
            // 体力
            case ItemsEnum.Energy:
                // todo
                expend = 0;
                break;
            default:
        }
        return configMax + expend;
    }

    /** 是否允许体力突破上限 */
    get allowUpperLimit() {
        return Cfg.Items.get(this._itemData.itemId).json[0][2];
    }

    addCount(num: number, isSave = false) {
        if (num === 0) {
            return null;
        }
        return num < 0 ? this.reduce(num, isSave) : this.add(num, isSave);
    }

    private add(num: number, isSave: boolean) {
        if (this.allowUpperLimit) {
            this._itemData.count += num;
        } else {
            this._itemData.count = Math.min(this._itemData.count + num, this.max);
        }

        if (this._itemData.count >= this.max) {
            this._itemData.nextRecoverTime = 0;
        }
        if (isSave) { this.saveAndNotify(); }
        return true;
    }

    private reduce(num: number, isSave: boolean) {
        if (this._itemData.count < Math.abs(num)) {
            return false;
        }

        this._itemData.count += num;
        if (this._itemData.count < this.max && this._itemData.nextRecoverTime === 0) {
            this._itemData.nextRecoverTime = Date.now() + this.recoverInterval;
        }
        if (isSave) { this.saveAndNotify(); }
        return true;
    }

    onUpdate(time: number) {
        super.onUpdate(time);
        const { max } = this;
        if (this._itemData.count >= max) {
            // 有可能上限突然少了,nextRecoverTime如果不清零可能导致下次使用时立即恢复所有体力
            if (this._itemData.nextRecoverTime !== 0) {
                this._itemData.nextRecoverTime = 0;
                this.saveAndNotify();
            }
            return;
        }

        const { recoverInterval } = this;
        if (this._itemData.nextRecoverTime === 0) {
            this._itemData.nextRecoverTime = time + recoverInterval;
            this.saveAndNotify();
            return;
        }

        if (time < this._itemData.nextRecoverTime) {
            return;
        }

        let addNum = Math.ceil((time - this._itemData.nextRecoverTime) / recoverInterval);
        addNum = Math.min(addNum, max - this._itemData.count);
        this._itemData.nextRecoverTime += addNum * recoverInterval;
        this._comp.player.emit(EventEnum.ItemRecover, this, addNum);
        this.addCount(addNum, true);
    }
}
