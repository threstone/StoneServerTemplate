import * as Koa from 'koa';
import * as fs from 'fs';
import * as https from 'https';
import * as Router from 'koa-router';
import * as BodyParser from 'koa-bodyparser';

export abstract class HttpServer {
    protected _app: Koa;

    protected _router: Router;

    constructor(port: number) {
        logger.info(`初始化服务器, port:${port}`);
        const app = new Koa();
        app.use(this.addCrossOrigin.bind(this));
        app.use(BodyParser());
        app.use(this.vaildCheck.bind(this));

        const router = new Router();
        app.use(router.routes());

        this._router = router;
        this._app = app;

        if (serviceConfig.ssl) {
            const cert = fs.readFileSync(serviceConfig.ssl.cert);
            const key = fs.readFileSync(serviceConfig.ssl.key);
            const server = https.createServer({ cert, key }, app.callback());
            server.listen(port, () => {
                logger.info(`https 服务器启动完成, port:${port}`);
            });
        } else {
            app.listen(port, () => {
                logger.info(`http 服务器启动完成, port:${port}`);
            });
        }
    }

    public getRouter() {
        return this._router;
    }

    // eslint-disable-next-line no-unused-vars
    protected abstract vaildCheck(ctx: Koa.Context, next: Koa.Next): void;

    protected async addCrossOrigin(ctx: Koa.Context, next: Function) {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Methods', '*');
        await next();
    }
}
