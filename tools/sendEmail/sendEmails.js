const { getProdConnection, getTestConnection } = require('./dbInit');
const { sendEmail } = require('./emailUtils');

(async () => {
    try {
        const prodConnection = await getTestConnection();
        const tasks = [];

        const [results402] = await prodConnection.execute(`SELECT userId FROM player_2 
WHERE JSON_EXTRACT(shopInfo, '$.lastBuyTimeInfo."402"') >= 0 limit 1`);
        for (let index = 0; index < results402.length; index++) {
            const userInfo = results402[index];
            console.log(`402邮件补偿 ===> ${userInfo.userId}`);
            tasks.push(sendEmail(prodConnection,
                userInfo.userId,
                20,
                null,
                [{ itemId: 300300, count: 1 }]
            ));
        }

        const [results403] = await prodConnection.execute(`SELECT userId FROM player_2 
WHERE JSON_EXTRACT(shopInfo, '$.lastBuyTimeInfo."403"') >= 0 limit 1`);
        for (let index = 0; index < results403.length; index++) {
            const userInfo = results403[index];
            console.log(`403邮件补偿 ===> ${userInfo.userId}`);
            tasks.push(sendEmail(prodConnection,
                userInfo.userId,
                20,
                null
                [{ itemId: 310300, count: 1 }]
            ));
        }


        await Promise.all(tasks);
        await prodConnection.end(); // 关闭 MySQL 连接
        // 根据 autoClose 设置，隧道也会自动关闭
    } catch (err) {
        console.error('发生错误:', err);
    }
})();
