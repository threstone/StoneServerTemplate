import { TConfig } from '../TConfig';

export class SensitiveWord extends TConfig<SensitiveWordCfg> {
    constructor(configs: SensitiveWordCfg[]) {
        super();
        this.initList(configs);
    }

    getWordArray() {
        return this.getAll().map((c) => c.word);
    }
}
