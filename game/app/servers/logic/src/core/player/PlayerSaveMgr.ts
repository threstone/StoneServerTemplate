import { PlayerModel } from '../../../../../../../common/sequelize/model/game/PlayerModel';

export class PlayerSaveMgr {
    private static _ins: PlayerSaveMgr;

    static ins() {
        if (!PlayerSaveMgr._ins) {
            PlayerSaveMgr._ins = new PlayerSaveMgr();
        }
        return PlayerSaveMgr._ins;
    }

    private _pSet = new Set<PlayerModel>();

    private _savingCount = 0;

    private _maxSavingCount = 5;

    private _lastRecordCount = 0;

    private _passSaveCount = 0;

    constructor() {
        setInterval(this.recordSaveCount.bind(this), 10000);
    }

    private recordSaveCount() {
        if (this._passSaveCount === 0 && this._lastRecordCount === 0 && this._savingCount === 0) {
            return;
        }
        logger.info(
            `过去10秒钟保存玩家数据次数:${this._passSaveCount},当前正在储存的数据数量:${this._savingCount},待储存队列长度:${this._pSet.size},`
            + `save avg: ${this._saveSum / this._timeSum}ms`,
        );
        this._lastRecordCount = this._passSaveCount;
        this._passSaveCount = 0;
    }

    private _timeSum = 0;;

    private _saveSum = 0

    private doSave() {
        while (this._savingCount < this._maxSavingCount && this._pSet.size > 0) {
            this._savingCount += 1;
            const model: PlayerModel = this._pSet.values().next().value;
            this._pSet.delete(model);
            const now = Date.now();
            // eslint-disable-next-line no-loop-func
            model.save({ validate: false }).catch((err) => {
                logger.warn(`[${model.userId}]save player error: ${err.message} ${err.stack}`);
                // 失败执行一次重试
                model.save({ validate: false }).catch((err2) => {
                    logger.error(`retry save player ${model.userId} error: ${err2.message} ${err2.stack}`);
                });
            }).finally(() => {
                this._saveSum += Date.now() - now;
                this._timeSum += 1;
                this._savingCount -= 1;
                this.doSave();
            });
            this._passSaveCount += 1;
        }
    }

    private saveModel(model: PlayerModel) {
        const PModel = model.constructor as typeof PlayerModel;
        const sql = (PModel as any).QueryGenerator.updateQuery(PModel.tableName,
            (model as any)._previousDataValues,
            { userId: model.userId },
            {},
            PModel.rawAttributes);
        // 获取模型save方法执行的sql语句
        return PModel.sequelize.query(sql);
    }

    savePlayer(model: PlayerModel) {
        if (!model) { return; }
        this._pSet.add(model);
        this.doSave();
    }

    setMaxSavingCount(count: number) {
        this._maxSavingCount = count;
    }
}
