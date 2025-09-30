const mysql = require('mysql2/promise'); // 使用 promise 版本
const tunnel = require('tunnel-ssh');

// SSH 和数据库配置（建议使用环境变量）
const sshConfig = {
    host: 'xx', // SSH 服务器的地址
    port: 22,              // SSH 端口，通常是 22
    username: 'xx', // SSH 用户名
    password: 'xx', // SSH 密码或者使用 privateKey
};

const prodDBConfig = {
    host: 'localhost', // 隧道建立后，数据库在本地可见
    port: 33306, // 本地隧道端口
    user: 'xx',
    password: 'xx',
    database: 'db'
};

const testDBConfig = {
    host: 'xx',
    port: 10000,
    user: 'root',
    password: 'xx',
    database: 'xx'
};

const tunnelConfig = {
    autoClose: true // 隧道在使用完毕后自动关闭
};

const serverOptions = {
    port: prodDBConfig.port // 本地隧道端口
};

const forwardOptions = {
    srcAddr: '127.0.0.1',
    srcPort: prodDBConfig.port,
    dstAddr: 'xx', // 远程数据库服务器地址（从SSH服务器角度看）
    dstPort: 3306 // 远程数据库端口
};

async function getProdConnection() {
    // 1. 建立 SSH 隧道
    await tunnel.createTunnel(tunnelConfig, serverOptions, sshConfig, forwardOptions);
    console.log(`SSH隧道成功创建在 ${forwardOptions.srcAddr}:${forwardOptions.srcPort}`);

    // 2. 创建 MySQL 连接（通过隧道）
    const prodConnection = await mysql.createConnection({
        host: forwardOptions.srcAddr,
        port: forwardOptions.srcPort,
        user: prodDBConfig.user,
        password: prodDBConfig.password,
        database: prodDBConfig.database
    });
    console.log('prod MySQL连接成功');
    return prodConnection;
}

async function getTestConnection() {
    const testConnection = await mysql.createConnection(testDBConfig);
    console.log('test MySQL连接成功');
    return testConnection;
}

module.exports = {
    getProdConnection,
    getTestConnection
};