import { GlobalVar } from '../GlobalVar';

GlobalVar.redisMgr.getClient(1).then((redis) => {
    redis.deleteKeyStart('');
});
