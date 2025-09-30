const { getProdConnection, getTestConnection } = require('./dbInit');

const inputArrays = [
    '_000W-mDpn8HgkTdZBEaoFGrxs8mQZkaM49D',
    '_000IjTADLVhuYVgIWPN616Qh_1YuoKUB7V5'
];

(async () => {
    try {
        const prodConnection = await getProdConnection();
        const testConnection = await getTestConnection();
        const tasks = [];
        inputArrays.forEach((uuid) => {
            tasks.push(inputByUUid(prodConnection, testConnection, uuid));
        });
        await Promise.all(tasks);
        await Promise.all([prodConnection.end(), testConnection.end()]); // 关闭 MySQL 连接
        // 根据 autoClose 设置，隧道也会自动关闭
    } catch (err) {
        console.error('发生错误:', err);
    }
})();

async function inputByUUid(prodConnection, testConnection, uuid) {
    const [prodRows] = await prodConnection.execute(`SELECT * FROM player_2 where uuid = '${uuid}'`);
    const [prodInfo] = prodRows;
    if (!prodInfo) {
        console.error(`未找到线上玩家数据:${uuid}`);
        return;
    }
    const [testRows] = await testConnection.execute(`SELECT * FROM player_2 where uuid = '${uuid}'`);
    const keys = Object.keys(prodInfo);
    if (testRows.length > 0) {
        const [testInfo] = testRows;
        let sql = '';
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const prodValue = getValue(key, prodInfo[key]);
            const testValue = getValue(key, testInfo[key]);
            if (prodValue != testValue) {
                console.log(`不一样  key:${key}    prodValue:${prodValue}    testValue:${testValue}`);
                sql += `\`${key}\` = ${prodValue},`
            }
        }

        if (sql.length > 0) {
            sql = `update player_2 set ${sql.substring(0, sql.length - 1)} where uuid = '${uuid}'`
            await testConnection.execute(sql);
            console.log(`更新线上玩家数据到测试服:${uuid}`);
        } else {
            console.log(`线上玩家数据和测试服数据一致:${uuid}`);
        }
    } else {
        let sql = '';
        let values = '';
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            values += `${getValue(key, prodInfo[key])},`;
            sql += `\`${key}\`,`;
        }

        sql = `INSERT INTO player_2(${sql.substring(0, sql.length - 1)}) values(${values.substring(0, values.length - 1)})`;
        await testConnection.execute(sql);
        console.log(`导入线上玩家数据到测试服:${uuid}`);
    }
}

function getValue(key, value) {
    const type = typeof (value);
    if (type === 'number') {
        return `${value}`;
    } else if (type === 'string') {
        if (key === 'userId') {
            value = value.substring(0, value.length - 1) + '1';
        }
        return `'${value}'`;
    } else if (type === 'object') {
        if (value == null) {
            return 'null'
        } else if (Buffer.isBuffer(value)) {
            return `0x${value.toString('hex')}`;
        } else {
            return `'${JSON.stringify(value)}'`
        }
    } else {
        console.error(`未实现的类型${type}`);
        process.exit();
    }
}