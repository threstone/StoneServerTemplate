import { ItemPto } from '../../../../../common/proto/CommonProto';
import { Cfg } from '../Cfg';
import { TConfig } from '../TConfig';

export class InitialItems extends TConfig<InitialItemsCfg> {
    private _initialItems: ItemPto.IItem[];

    constructor(configs: InitialItemsCfg[]) {
        super();
        this.initList(configs);
    }

    get initialItems() {
        if (!this._initialItems) {
            this._initialItems = [];
            const configs = this.getAll();
            for (let index = 0; index < configs.length; index++) {
                const config = configs[index];
                this._initialItems.push(...Cfg.Items.getItemsBy2DArray(config.newUserItem));
            }
        }

        return this._initialItems;
    }
}
