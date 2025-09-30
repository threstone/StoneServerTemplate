const tunnel = require('tunnel-ssh');
// SSH 和数据库配置（建议使用环境变量）
const sshConfig = {
    host: 'xxx', // SSH 服务器的地址
    port: 22,              // SSH 端口，通常是 22
    username: 'xx', // SSH 用户名
    password: 'xx', // SSH 密码或者使用 privateKey
};

const tunnelConfig = {
    autoClose: true // 隧道在使用完毕后自动关闭
};

const serverOptions = {
    port: 3306 // 本地隧道端口
};

const forwardOptions = {
    srcAddr: '127.0.0.1',
    srcPort: 3306,
    dstAddr: 'target.com', // 远程数据库服务器地址（从SSH服务器角度看）
    dstPort: 3306 // 远程数据库端口
};

async function createTunnel() {
    // 1. 建立 SSH 隧道
    await tunnel.createTunnel(tunnelConfig, serverOptions, sshConfig, forwardOptions);
    console.log(`SSH隧道成功创建在 ${forwardOptions.srcAddr}:${forwardOptions.srcPort}`);
}

module.exports = {
    createTunnel
};
