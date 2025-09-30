const GenerateType = require("./src/ConstDefine").GenerateType;
let configs = [
    {
        noCreate: true,
        noConvert: true,
        targetPath: '../../../common/proto/',
        targetName: 'Common',
        isJsMin: true,
        generateType: GenerateType.ProtoBuf,
        isIncludeAllFiles: true,
        protoPath: '../../../proto/',
        commonFiles: []
    }
];

module.exports = configs;