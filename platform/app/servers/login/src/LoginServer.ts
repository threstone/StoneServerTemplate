import * as Koa from 'koa';
import { HttpServer } from '../../../core/HttpServer';
import { GlobalVar } from './GlobalVal';

export class LoginServer extends HttpServer {
    protected async vaildCheck(ctx: Koa.Context, next: Koa.Next) {
        // some vaild logic
        const vaild = true;
        if (vaild) {
            await next();
        } else {
            ctx.response.body = 'Access Denied';
        }
    }
}

export function LoginRouter(type: 'post' | 'get' | 'all' | 'delete', path: string) {
    return function (target: any, propertyKey: string) {
        GlobalVar.loginServer.getRouter()[type](path, target[propertyKey].bind(target));
    };
}
