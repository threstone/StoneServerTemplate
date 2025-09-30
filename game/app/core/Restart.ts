import { execSync } from 'child_process';

const env = process.argv[2];
const fakeTime = process.argv[3];
// eslint-disable-next-line no-console
console.log(env, fakeTime);
setTimeout(() => {
    process.env.LD_PRELOAD = '/usr/local/lib/faketime/libfaketime.so.1';
    process.env.FAKETIME = fakeTime;
    execSync(`stone stopAll ${env}`);
    execSync(`stone startAll ${env} -b`);
}, 1000);
