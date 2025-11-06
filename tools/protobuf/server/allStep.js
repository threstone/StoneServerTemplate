let process = require('child_process');
let fs = require('fs');

try {
    console.log('准备执行编译命令...');
    // 判断dist目录是否存在
    if (!fs.existsSync('./dist')) {
        process.execSync('tsc');
    }
} catch (error) {
    if (!fs.existsSync('./dist')) {
        console.error('请检查是否安装tsc模块,如未安装请执行: npm install -g typescript\n', error);
        return;
    }
}
console.log('开始生成任务...');
process.execSync('node ./dist/src/main.js');
