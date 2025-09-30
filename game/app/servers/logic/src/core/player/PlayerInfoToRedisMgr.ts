import { PlayerModel } from '../../../../../../../common/sequelize/model/game/PlayerModel';
import { PlayerUtils } from '../../../../../../../common/utils/PlayerUtils';
import { GlobalVar } from '../../GlobalVar';

export class PlayerInfoToRedisMgr {
    private static _ins: PlayerInfoToRedisMgr;

    static ins() {
        if (!PlayerInfoToRedisMgr._ins) {
            PlayerInfoToRedisMgr._ins = new PlayerInfoToRedisMgr();
        }
        return PlayerInfoToRedisMgr._ins;
    }

    private _pSet = new Set<PlayerModel>();

    private _savingCount = 0;

    private _maxSavingCount = 5;

    private _passSaveCount = 0;

    private trySave() {
        while (this._savingCount < this._maxSavingCount && this._pSet.size > 0) {
            const model: PlayerModel = this._pSet.values().next().value;
            this.doSave(model);
        }
    }

    private async doSave(playerInfo: PlayerModel) {
        this._savingCount += 1;
        this._pSet.delete(playerInfo);
        this._passSaveCount += 1;
        const redisClient = await GlobalVar.redisMgr.getClient();
        redisClient.setData(`playerInfo:${playerInfo.userId}`, PlayerUtils.getSaveToRedisInfo(playerInfo), 259200).catch((err) => {
            logger.error(`[${playerInfo.userId}]save player into to redis error: ${err.message} ${err.stack}`);
        }).finally(() => {
            this._savingCount -= 1;
            this.trySave();
        });
    }

    saveRedisInfo(playerInfo: PlayerModel, isImmediate: boolean = false) {
        if (!playerInfo) { return; }
        if (isImmediate) {
            this.doSave(playerInfo);
        } else {
            this._pSet.add(playerInfo);
            this.trySave();
        }
    }

    setMaxSavingCount(count: number) {
        this._maxSavingCount = count;
    }
}
