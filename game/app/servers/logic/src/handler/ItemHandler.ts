import { ItemPto } from '../../../../../../common/proto/CommonProto';
import { Cfg } from '../../../../core/config/Cfg';
import { MessageHandler } from '../../../../core/proto/ProtoDecorator';
import { ItemComponent } from '../core/component/ItemComponent';
import { Player } from '../core/player/Player';
import { LogicSession } from '../core/session/LogicSession';

export class ItemHandler {
    // 道具信息请求
    @MessageHandler(ItemPto.C_GET_ITEMS_INFO)
    getItemsInfo(session: LogicSession, player: Player) {
        session.sendMessage(new ItemPto.S_GET_ITEMS_INFO({ itemMap: player.playerInfo.itemInfo.itemDatas }));
    }

    // 使用道具请求
    @MessageHandler(ItemPto.C_USE_ITEMS)
    useItems(session: LogicSession, player: Player, msg: ItemPto.C_USE_ITEMS) {
        const comp = player.getComponent(ItemComponent);
        comp.useItems(msg);
    }

    // 清除新道具标识
    @MessageHandler(ItemPto.C_CLEAR_NEW_TAG)
    clearNewTag(session: LogicSession, player: Player, msg: ItemPto.C_USE_ITEMS) {
        const comp = player.getComponent(ItemComponent);
        const item = comp.getItem(msg.itemId);
        if (item && item.data.isNew === true) {
            item.clearNewTag();
            item.saveAndNotify();
        }
    }

    // 获取一定时间内的指定道具的累计获取数量,仅该道具有getLimit时有效
    @MessageHandler(ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD)
    getItemAccumulatedCountInPeriod(session: LogicSession, player: Player, msg: ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD) {
        const set = new Set(msg.itemIds);
        if (set.size !== msg.itemIds.length) {
            session.sendErrorMessage('参数错误');
            return;
        }
        const notify = new ItemPto.S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD();
        const comp = player.getComponent(ItemComponent);
        for (let index = 0; index < msg.itemIds.length; index++) {
            const itemId = msg.itemIds[index];
            const cfg = Cfg.Items.get(itemId);
            if (!cfg) {
                session.sendErrorMessage('参数错误');
                return;
            }
            notify.items.push({ itemId, count: comp.getItemAccumulatedCountInPeriod(cfg) });
        }
        session.sendMessage(notify);
    }
}
