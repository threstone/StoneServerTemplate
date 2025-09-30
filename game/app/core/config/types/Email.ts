import { TConfig } from '../TConfig';

export class Email extends TConfig<EmailCfg> {
    constructor(configs: EmailCfg[]) {
        super();
        this.initList(configs);
    }
}
