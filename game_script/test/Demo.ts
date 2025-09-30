// class PerformanceTest {
import { Client } from "../Client";
let loginUrl = 'http://192.168.20.61:21001/login';

clientTest();

function testHandler(client: Client) {
    // client.sendMessage(new TestPto.C_TEST_CLEAR_ACCOUNT_DATA());



    // client.sendMessage(new TestPto.C_TEST_PASS_BOSS());
    // client.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 100701, count: 1 }));
    // client.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId:1, count: 22220 }));
    // client.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId: 10101, count: 1000 }));
    // client.sendMessage(new TestPto.C_TEST_ADD_ITEMS({ itemId:9301, count: 1 }));
    // client.sendMessage(new TestPto.C_TEST_SET_STAGE({ stageId: 3 }));
    // client.sendMessage(new TestPto.C_TEST_SERVER_TIME_INFO());
    // client.sendMessage(new TestPto.C_TEST_UPDATE_CODE());
    // client.sendMessage(new TestPto.C_TEST_MODIFY_SERVER_TIME({ time: Date.now() }));
    // setTimeout(() => {
    // client.sendMessage(new TestPto.C_TEST_RESTART_SERVER());
    // }, 1111);
    // client.sendMessage(new TestPto.C_TEST_RESTART_SERVER());
    // client.sendMessage(new TestPto.C_TEST_CLEAR_SHOP_INFO());
    // client.sendMessage(new TestPto.C_TEST_SET_CREATE_DAY({ day: 1 }));
}

async function clientTest() {
    let client = new Client();
    client.messageHandler = (msg: IGameMessage) => {
        console.log(`\nonMessage:`, msg, JSON.stringify(msg));
    }
    console.log('开始登录');
    await client.doLogin(loginUrl, { account: `newtest4` })
    testHandler(client);

}