import { WeekInfo } from '../../../../../../../common/sequelize/model/game/TypeDefine';
import { TimeMgr } from '../../../../../core/utils/TimeMgr';
import { EventEnum } from '../../../../../Enum';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';

/** 玩家每周信息组件 */
export class WeekComponent extends BaseComponent {
    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载
        super(player, true);
    }

    get week() { return (this.player.playerInfo as any).week as WeekInfo; }

    protected init(player: Player) {
        player.on(EventEnum.NewWeek, this.checkReset, this);
        this.checkReset();
    }

    protected onPlayerInitEnd(): void {
    }

    protected onDestroy() {
    }

    /** 检查是否需要重置 */
    protected checkReset() {
        if (this.week.lastUpdateTime < TimeMgr.ins().weekStartMs) {
            (this.player.playerInfo as any).week = new WeekInfo();
        }
    }

    save(): void {
        this.player.savePlayerInfoForAttr('week' as any);
    }
}
