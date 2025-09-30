import axios from 'axios';
import * as crypto from 'crypto';
const url = 'http://127.0.0.1:21002/hotUpdate';

async function test() {
    const body: any = { time: Date.now(), handler: true, components: ['RankComponent', 'ItemComponent'] }
    body.sign = getSign(body, 'test');
    const postResult = await axios.post(url, body);
    console.log(postResult.data);
}

function getSign(v: any, key: string) {
    const args = JSON.parse(JSON.stringify(v));
    delete args.sign;
    let keys = Object.keys(args);
    if (keys.length <= 0) {
        return null;
    }
    keys = keys.sort();
    let str = '';
    keys.forEach((k) => {
        str += `&${keys[k]}=${args[keys[k]]}`;
    });
    str = str.substring(1);
    str += key;
    const sign = crypto.createHash('md5').update(str, 'utf8').digest('hex');
    return sign.toLowerCase();
}
test();
