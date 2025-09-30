import { DayInfo, TimeData } from '../../../../../../../common/sequelize/model/game/TypeDefine';
import { TimeMgr } from '../../../../../core/utils/TimeMgr';
import { EventEnum } from '../../../../../Enum';
import { Player } from '../player/Player';
import { BaseComponent } from './BaseComponent';

/** 玩家每日信息组件 */
export class DayComponent extends BaseComponent {
    constructor(player: Player) {
        // 指定本组件是必要组件,需优先加载
        super(player, true);
    }

    get day() { return (this.player.playerInfo as any).day as DayInfo; }

    protected init(player: Player) {
        player.on(EventEnum.NewDay, this.onNewDay, this);
        player.on(EventEnum.Online, this.onPlayerOnline, this);

        this.checkReset();
    }

    protected onPlayerInitEnd(): void {
    }

    protected onDestroy() {
    }

    /** 检查是否需要重置 */
    protected checkReset() {
        if (this.day.lastUpdateTime < TimeMgr.ins().dayStartMs) {
            (this.player.playerInfo as any).day = new DayInfo();
        }
    }

    private onNewDay() {
        this.checkReset();

        // 如果玩家跨天的时候在线，延迟一会儿派发online事件
        // 延迟的原因是有可能task还未重新初始化
        if (this.player.playerInfo.online) {
            setTimeout(() => {
                if (this.player.playerInfo.online) {
                    this.player.emit(EventEnum.Online);
                }
            }, 0);
        }
    }

    private onPlayerOnline() {
        if (this.day.isOnline) {
            return;
        }
        this.day.isOnline = true;
        this.player.playerInfo.loginDay += 1;
        this.save();
        // 派发当日首次登录事件
        this.player.emit(EventEnum.DayFirstLogin);
    }

    save(): void {
        this.player.savePlayerInfoForAttr('day' as any);
    }
}
