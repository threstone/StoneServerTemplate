import * as CommonProto from "../common/proto/CommonProto";
import axios from 'axios';
import * as WS from 'ws';
import { ProtoBufEncoder } from "./ProtoBufEncoder";
import { ServerPto } from "../common/proto/CommonProto";
import { AlgoEncrypt } from "./algo/AlgoEncrypt";

ProtoBufEncoder.init(CommonProto, './');
export class Client {

    private _socket: WS;

    messageHandler: Function;

    doLogin(url: string, body?: any) {
        return new Promise<void>(async (resolve, reject) => {
            const postResult = await axios.post(url, { content: AlgoEncrypt.encrypt(JSON.stringify(body), 'abcdef', 128) });
            console.log('post login response :', postResult.data)
            const socket = new WS(postResult.data.url, [postResult.data.token, `${postResult.data.serverId}`]);
            socket.on('message', (buffer: Buffer) => {
                const msg = this.onMessage(buffer);
                !!this.messageHandler && this.messageHandler(msg);
                if (msg instanceof ServerPto.S_CONNECT) {
                    if (msg.loginInfo.code === 0) {
                        console.log('registerTime:', msg.loginInfo.playerInfo.registerTime.toString());
                        resolve();
                    } else {
                        reject(`登录失败,msg：${JSON.stringify(msg)}`);
                    }
                }
            });

            //断线重连
            socket.on("close", () => {
                console.log("client close! ", new Date());
            });

            //失败重连
            socket.on("error", (err) => {
                console.error('client error! ', err);
            });
            this._socket = socket;
        });
    }

    private onMessage(buffer: Buffer) {
        const msg = ProtoBufEncoder.decode(buffer, 0);
        return msg;
    }

    send(msg: Buffer) {
        this._socket.send(msg);
    }

    sendMessage(msg: IGameMessage) {
        this.send(ProtoBufEncoder.encode(msg));
    }
}
// (new Client).doLogin('http://192.168.20.61:1234/login', {})
