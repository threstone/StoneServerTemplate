import { IItem } from '../../../../../../../../../common/sequelize/model/game/TypeDefine';
import { ItemPto } from '../../../../../../../../../common/proto/CommonProto';
import { ItemComponent } from '../../ItemComponent';

export class Item {
    protected _itemData: IItem;

    protected _comp: ItemComponent;

    constructor(itemData: IItem, _comp: ItemComponent) {
        this._itemData = itemData;
        this._comp = _comp;
    }

    get data() {
        return this._itemData;
    }

    get itemId() {
        return this._itemData.itemId;
    }

    get count() {
        return this._itemData.count;
    }

    onUpdate(time: number) {
    }

    addCount(count: number) {
        if (count === 0) {
            return;
        }
        this._itemData.count += count;
    }

    clearNewTag() {
        this._itemData.isNew = false;
    }

    saveAndNotify() {
        this._comp.save();
        this._comp.player.sendMessage(new ItemPto.S_ITEMS_UPDATE({ items: [this._itemData] }));
    }
}
