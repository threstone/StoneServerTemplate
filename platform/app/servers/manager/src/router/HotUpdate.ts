/* eslint-disable no-use-before-define */
import * as Koa from 'koa';
import { GlobalVar } from '../GlobalVar';

type HotUpdateReqBody = {
    handler: boolean,
    components: string[]
}
GlobalVar.commandServer.getRouter().post('/hotUpdate', hotUpdate);

/** 服务器热更 */
async function hotUpdate(ctx: Koa.Context, next: Koa.Next) {
    const body = ctx.request.body as HotUpdateReqBody;
    const redis = await GlobalVar.redisMgr.getClient();
    redis.publish('$hot_update', JSON.stringify(body));
    ctx.response.status = 200;
    await next();
}
