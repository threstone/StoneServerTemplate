import { EmailPto, ItemPto } from '../../../../../../common/proto/CommonProto';
import { MessageHandler } from '../../../../core/proto/ProtoDecorator';
import { EmailComponent } from '../core/component/EmailComponent';
import { ItemComponent } from '../core/component/ItemComponent';
import { Player } from '../core/player/Player';
import { LogicSession } from '../core/session/LogicSession';

export class EmailHandler {
    // 请求邮件信息
    @MessageHandler(EmailPto.C_EMAIL_INFO)
    getEmailInfo(session: LogicSession, player: Player) {
        const emailMap: { [emailId: string]: EmailPto.IEmail } = {};
        player.getComponent(EmailComponent).emailMap.forEach((email, emailId) => {
            emailMap[emailId] = email.toJSON();
        });
        session.sendMessage(new EmailPto.S_EMAIL_INFO({ emailMap }));
    }

    // 阅读邮件
    @MessageHandler(EmailPto.C_READ_EMAIL)
    readEmails(session: LogicSession, player: Player, msg: EmailPto.C_READ_EMAIL) {
        const { emailMap } = player.getComponent(EmailComponent);
        const notify = new EmailPto.S_READ_EMAIL();
        const rewards: ItemPto.IItem[] = [];
        for (let index = 0; index < msg.emailIds.length; index++) {
            const emailId = msg.emailIds[index];
            const email = emailMap.get(emailId);
            if (email?.isRead === false) {
                email.isRead = true;
                email.save({ validate: false });
                notify.emails.push({ id: emailId, isRead: true });
                if (email.items?.length > 0) {
                    rewards.push(...email.items);
                }
            } else {
                session.sendErrorMessage('参数错误');
                return;
            }
        }
        if (notify.emails.length > 0) {
            if (rewards.length > 0) {
                notify.rewards = player.getComponent(ItemComponent).updateItems(rewards);
            }
            session.sendMessage(notify);
        }
    }

    // 请求删除邮件
    @MessageHandler(EmailPto.C_DELETE_EMAILS)
    deleteEmails(session: LogicSession, player: Player, msg: EmailPto.C_DELETE_EMAILS) {
        const emailComp = player.getComponent(EmailComponent);
        const { emailMap } = emailComp;
        const notify = new EmailPto.S_DELETE_EMAILS();
        for (let index = 0; index < msg.emailIds.length; index++) {
            const emailId = msg.emailIds[index];
            const email = emailMap.get(emailId);
            if (email) {
                notify.emailIds.push(emailId);
            } else {
                session.sendErrorMessage('参数错误');
                return;
            }
        }

        if (notify.emailIds.length > 0) {
            emailComp.deleteEmails(notify.emailIds);
            session.sendMessage(notify);
        }
    }
}
