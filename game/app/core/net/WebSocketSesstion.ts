import * as WS from 'ws';

const MaxReceiveMsgCount = 300;
export abstract class WebSocketSession {
    socket: WS;

    sessionId: number;

    remoteAddress: string;

    receiveMsgCount: number;

    constructor(socket: WS, sessionId: number, remoteAddress: string) {
        this.socket = socket;
        this.sessionId = sessionId;
        this.remoteAddress = remoteAddress;
        this.receiveMsgCount = 0;
    }

    $onClientMessage(message: WS.Data) {
        this.receiveMsgCount += 1;
        if (this.receiveMsgCount > MaxReceiveMsgCount) {
            this.close(4001, 'too many messages');
            logger.error(`[${this.sessionId}][${this.remoteAddress}]异常客户端,3S内收到消息${this.receiveMsgCount}条,已踢下线`);
            return;
        }

        this.onClientMessage(message);
    }

    close(code?: number, data?: string | Buffer) {
        this.socket.close(code, data);
    }

    sendBuffer(buffer: Buffer) {
        this.socket.send(buffer);
    }

    // eslint-disable-next-line no-unused-vars
    /** 客户端消息回调 */
    abstract onClientMessage(message: WS.Data): void;
}
