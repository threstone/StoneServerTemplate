import { TConfig } from '../TConfig';

export class RandomName extends TConfig<RandomNameCfg> {
    private _len: number;

    constructor(configs: RandomNameCfg[]) {
        super();
        this.initList(configs);
        this._len = configs.length;
    }

    getNickname() {
        const index1 = Math.floor(Math.random() * this._len) + 1;
        const index2 = Math.floor(Math.random() * this._len) + 1;
        return `${this.get(index1).firstName}${this.get(index2).secondName}`;
    }
}
