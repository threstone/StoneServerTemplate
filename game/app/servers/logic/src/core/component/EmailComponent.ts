import { Op } from 'sequelize';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';
import { EmailModel } from '../../../../../../../common/sequelize/model/game/EmailModel';
import { ItemPto, EmailPto } from '../../../../../../../common/proto/CommonProto';
import { EventEnum } from '../../../../../Enum';
import { EmailEnum } from '../../../../../core/config/ConfigDefineEnum';
import { Cfg } from '../../../../../core/config/Cfg';
import { EmailUtils } from '../../../../../core/utils/EmailUtils';

export class EmailComponent extends BaseComponent {
    private _EmailModel: typeof EmailModel;

    private _emailMap: Map<number, EmailModel> = new Map();

    get emailMap() {
        return this._emailMap;
    }

    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载,否则其他组件初始化的时候会无法发邮件
        super(player, true);
    }

    protected async init(player: Player) {
        player.on(EventEnum.NewEmail, this.onNewEmail, this);
        this._EmailModel = await player.getServerModel(EmailModel);
        const emails = await this._EmailModel.findAll({
            where: {
                receiverUserId: player.userId,
                [Op.and]: [ // 使用and连接两个条件，保证按照最左前缀原则
                    { receiverUserId: player.userId },
                    {
                        [Op.or]: [
                            { expireTime: 0 },
                            { expireTime: { [Op.gt]: Date.now() } },
                        ],
                    },
                ],
            },
        });
        emails.forEach((email) => {
            this._emailMap.set(email.id, email);
        });
    }

    protected onDestroy(): void {
        this._emailMap.clear();
        this._emailMap = null;
    }

    protected onPlayerInitEnd(): void {
    }

    private async onNewEmail(id: number) {
        if (!id || this._emailMap.has(id)) { return; }
        const email = await this._EmailModel.findOne({ where: { id } });
        if (!email) { return; }
        this.emailMap.set(email.id, email);
        this.player.sendMessage(new EmailPto.S_ON_NEW_EMAIL({ email: email.toJSON() }));
    }

    async sendEmail(define: EmailEnum, params?: string[], items?: ItemPto.IItem[]) {
        const cfg = Cfg.Email.get(define);
        if (!cfg) {
            logger.error('email config not found : ', define);
            return;
        }
        const email = await this._EmailModel.create(EmailUtils.createEmailAttr(this.player.userId, cfg, params, items));
        this.emailMap.set(email.id, email);
        this.player.sendMessage(new EmailPto.S_ON_NEW_EMAIL({ email: email.toJSON() }));
    }

    deleteEmails(emailIds: number[]) {
        this._EmailModel.destroy({
            where: {
                id: { [Op.in]: emailIds },
            },
        });
        emailIds.forEach((id) => {
            this.emailMap.delete(id);
        });
    }
}
