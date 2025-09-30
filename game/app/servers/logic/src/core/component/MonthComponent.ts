import { MonthInfo } from '../../../../../../../common/sequelize/model/game/TypeDefine';
import { TimeMgr } from '../../../../../core/utils/TimeMgr';
import { EventEnum } from '../../../../../Enum';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';

/** 玩家每月信息组件 */
export class MonthComponent extends BaseComponent {
    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载
        super(player, true);
    }

    get month() { return (this.player.playerInfo as any).month as MonthInfo; }

    protected init(player: Player) {
        player.on(EventEnum.NewMonth, this.checkReset, this);
        this.checkReset();
    }

    protected onPlayerInitEnd(): void {
    }

    protected onDestroy() {
    }

    /** 检查是否需要重置 */
    protected checkReset() {
        if (this.month.lastUpdateTime < TimeMgr.ins().monthStartMs) {
            (this.player.playerInfo as any).month = new MonthInfo();
        }
    }

    save(): void {
        this.player.savePlayerInfoForAttr('month' as any);
    }
}
