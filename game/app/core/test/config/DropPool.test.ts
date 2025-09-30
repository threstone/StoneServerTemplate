import assert = require('assert');
import { ItemPto } from '../../../../../common/proto/CommonProto';
import { Cfg } from '../../config/Cfg';

if (Cfg.DropPool == null) {
    Cfg.init('server');
}

describe('DropPool.test', () => {
    it("掉落库耗时测试", async function () {
        const maxUseTime = 100;
        this.slow(maxUseTime);
        const startTime = Date.now();
        const testPlayer: any = {
            playerInfo: {
                playerLv: 100,
                maxNomalStage: 100,
            },

            _dictionaryInfo: {},
            getComponent(type: { name: string }) {
                if (type.name == 'DictionaryComponent') {
                    const self = this;
                    return {
                        getValue(key, defaultValue) {
                            if (self._dictionaryInfo[key] == null && defaultValue != null) {
                                self._dictionaryInfo[key] = defaultValue;
                            }
                            return self._dictionaryInfo[key];
                        },
                        save() { },
                        setValue(key, value) {
                            self._dictionaryInfo[key] = value;
                        }
                    }
                }
            }
        }

        const poolIds = [601, 1101, 1001, 2001]
        const times = 10000;
        for (let index = 0; index < poolIds.length; index++) {
            const poolId = poolIds[index];
            console.time(`poolId:${poolId} ${times}次耗时`)
            const obj: { [key: number]: ItemPto.IItem } = {};
            for (let index = 0; index < times; index++) {
                const items = Cfg.DropPool.getItems(poolId, testPlayer);
                items.forEach((item) => {
                    if (obj[item.itemId] == null) {
                        obj[item.itemId] = item;
                    } else {
                        obj[item.itemId].count += item.count;
                    }
                });
            }
            console.timeEnd(`poolId:${poolId} ${times}次耗时`)
            // console.log(obj);
        }

        assert.strictEqual((Date.now() - startTime) < maxUseTime, true);
    });
});
