import * as Koa from 'koa';
import { Utils } from '../../../core/Utils';
import { HttpServer } from '../../../core/HttpServer';

export class CommandServer extends HttpServer {
    protected async vaildCheck(ctx: Koa.Context, next: Koa.Next) {
        const body = ctx.request.body as { sign: string };
        let sign: string;
        // eslint-disable-next-line no-cond-assign
        if (body.sign && body.sign === (sign = Utils.getSign(body, serviceConfig.signKey))) {
            await next();
        } else {
            logger.debug(`错误的签名: ${body.sign} !== right sign:[${sign}]`);
            ctx.response.body = 'Access Denied';
            ctx.response.status = 403;
        }
    }
}
