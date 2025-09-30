// class PerformanceTest {

import { Client } from "../Client";
import { ItemPto } from "../CommonProto";

let loginCount = 0;
let msgCount = 0;
setInterval(() => {
    if (msgCount === 0) {
        return;
    }
    console.log(`在线客户端:${loginCount},过去1s收发消息${msgCount}条`);
    msgCount = 0;
}, 1000);
class PerformanceClient extends Client {
    account: string;
    constructor(account: string) {
        super()
        this.account = account;
        this.startTest(account);
    }

    private async startTest(account: string) {
        this.messageHandler = (msg: IGameMessage) => {
            msgCount++;
            // console.log(`\nonMessage:`, msg, JSON.stringify(msg));
        }

        await this.doLogin('http://192.168.20.61:21201/login', { account }); // performance
        loginCount++;
        clients.push(this);
        this.logic();
        setInterval(() => {
            this.logic();
        }, 30000);
    }
    logic() {
        this.sendMessage(new ItemPto.C_GET_ITEMS_INFO());
    }

    sendMessage(msg: IGameMessage) {
        msgCount++;
        super.sendMessage(msg);
    }
}

const clientCount = 500;
const clients = [];
for (let index = 0; index < clientCount; index++) {
    setTimeout(() => {
        new PerformanceClient(`performance${index}`)
    }, 200 * index);
}

// setInterval(() => {
//     if (clients.length !== clientCount) {
//         return;
//     }
//     clients.forEach((c) => {
//         c.logic();
//     })
// }, 1000);