async function sendEmail(connection, userId, defineId, params, items) {
    params = params ? `'${params.join('|')}'` : 'null';
    if (!items) {
        items = 'null';
    } else if (typeof items !== 'string') {
        items = `'${JSON.stringify(items)}'`;
    }
    const now = Date.now();
    return connection.execute(
        `insert into email_${getServerIdByUserId(userId)}(\`id\`, \`receiverUserId\`, \`configId\`, \`params\`, \`items\`, \`isRead\`, \`sendTime\`, \`expireTime\`) 
    value(default,'${userId}',${defineId},${params},${items},false,${now},${now + 60 * 60 * 1000 * 24 * 15})`);
}

function getServerIdByUserId(userId) {
    return parseInt(userId.slice(-6), 10);
}

module.exports = {
    sendEmail,
}