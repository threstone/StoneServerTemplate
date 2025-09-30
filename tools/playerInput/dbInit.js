const mysql = require('mysql2/promise'); // 使用 promise 版本
const { createTunnel } = require('./ssl');


const prodDBConfig = {
    host: 'localhost', // 隧道建立后，数据库在本地可见
    port: 3306, // 本地隧道端口
    user: 'u',
    password: 'p',
    database: 'db'
};

const testDBConfig = {
    host: '',
    port: 10000,
    user: 'root',
    password: 'p',
    database: 'db'
};

async function getProdConnection() {
    // 1. 建立 SSH 隧道
    await createTunnel();

    // 2. 创建 MySQL 连接（通过隧道）
    const prodConnection = await mysql.createConnection(prodDBConfig);
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