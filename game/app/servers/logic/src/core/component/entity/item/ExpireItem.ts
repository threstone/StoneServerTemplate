import { IItem } from '../../../../../../../../../common/sequelize/model/game/TypeDefine';
import { Cfg } from '../../../../../../../core/config/Cfg';
import { TimeMgr } from '../../../../../../../core/utils/TimeMgr';
import { EventEnum } from '../../../../../../../Enum';
import { ItemComponent } from '../../ItemComponent';
import { Item } from './Item';

export class ExpireItem extends Item {
    constructor(itemData: IItem, _comp: ItemComponent) {
        super(itemData, _comp);
        if (itemData.expireTime == null) {
            const { count } = itemData;
            this._itemData.count = 0;
            this.addCount(count);
        }
    }

    onUpdate(time: number): void {
        if (this._itemData.expireTime === 0) { return; }
        if (time > this._itemData.expireTime) {
            const { player } = this._comp;
            if (this._itemData.count > 0) {
                this._comp.updateItems([{ itemId: this._itemData.itemId, count: -this._itemData.count }]);
            }
            // 派发道具过期事件
            player.emit(EventEnum.ItemExpire, this);
            this.saveAndNotify();
        }
    }

    addCount(count: number): void {
        if (count > 0) {
            const config = Cfg.Items.get(this._itemData.itemId);
            const type = config.json[0][0];
            const duration = config.json[0][1];
            if (type === 1) { // 固定持续时间，参数为持续时间，毫秒，重复获得增加时间
                if (!this._itemData.expireTime) {
                    this._itemData.expireTime = Date.now() + duration * count;
                } else {
                    this._itemData.expireTime += duration * count;
                }
            } else if (type === 2) { // 固定自然日数量，参数单位为天，将在n个自然日后过期，例如n = 1,将在当天跨天时过期。重复获得增加时间。
                if (!this._itemData.expireTime) {
                    this._itemData.expireTime = TimeMgr.ins().dayStartMs + duration * TimeMgr.dayMs * count;
                } else {
                    this._itemData.expireTime += duration * TimeMgr.dayMs * count;
                }
            }
            this._itemData.count = 1;
        } else {
            this._itemData.count = 0;
            this._itemData.expireTime = 0;
        }
    }
}
