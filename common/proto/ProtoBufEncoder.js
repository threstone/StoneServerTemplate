"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoBufEncoder = void 0;
var protobuf = require("protobufjs");
var fs = require("fs");
var CMDTimes = 10000;
var ProtoBufEncoder = /** @class */ (function () {
    function ProtoBufEncoder() {
    }
    /**
     *
     * @param log
     * @param allProto
     * @param handlerPath handler
     */
    ProtoBufEncoder.init = function (allProto, handlerPath) {
        try {
            this._messagehandles = new Map();
            this._protoBufClass = new Map();
            this.addFunToProtobuf();
            this.requireHandlerClass(handlerPath);
            this.regiesterProtoClass(allProto);
        }
        catch (error) {
            logger.error(error);
        }
    };
    ProtoBufEncoder.requireHandlerClass = function (handlerPath) {
        if (!handlerPath) {
            return;
        }
        var files = fs.readdirSync(handlerPath);
        for (var i = 0; i < files.length; i++) {
            var fileName = files[i];
            if (fileName.endsWith('Handler.js')) {
                // eslint-disable-next-line import/no-dynamic-require, global-require
                require("".concat(handlerPath, "/").concat(fileName));
            }
        }
    };
    ProtoBufEncoder.regiesterProtoClass = function (allProto) {
        if (!allProto) {
            return;
        }
        var keys = Object.keys(allProto);
        for (var index = 0; index < keys.length; index++) {
            var protoNamespaceKey = keys[index];
            var protoNamespace = allProto[protoNamespaceKey];
            for (var key in protoNamespace) {
                if (key.startsWith('C_') || key.startsWith('S_')) {
                    var protoClass = protoNamespace[key];
                    if (protoClass.prototype.cmd != null && protoClass.prototype.scmd != null) {
                        ProtoBufEncoder.setProtoClass(protoClass.prototype.cmd, protoClass.prototype.scmd, protoClass);
                    }
                }
            }
        }
    };
    ProtoBufEncoder.addFunToProtobuf = function () {
        // 给protobuf的默认编码函数 增加 一个
        var protoBufAny = protobuf;
        if (protoBufAny.Writer.prototype.finishWithSysCmd != null) {
            return;
        }
        protoBufAny.Writer.prototype.finishWithSysCmd = function (sysid, cmdid) {
            var head = this.head.next;
            var buf = this.constructor.alloc(this.len + 8);
            buf.writeInt32BE(sysid, 0);
            buf.writeInt32BE(cmdid, 4);
            var pos = 8;
            while (head) {
                head.fn(head.val, buf, pos);
                pos += head.len;
                head = head.next;
            }
            return buf;
        };
        var raw = protoBufAny.Reader.prototype.int64;
        protoBufAny.Reader.prototype.int64 = function () {
            var result = raw.call(this);
            if (typeof (result) === 'number') {
                return result;
            }
            return result.toNumber();
        };
    };
    ProtoBufEncoder.setHandler = function (cmd, scmd, fun) {
        var protoIndex = this.getMessageIndex(cmd, scmd);
        if (this._messagehandles[protoIndex]) {
            logger.error("\u8BE5\u4F4D\u7F6E\u5DF2\u6709\u6CE8\u518C\u51FD\u6570 cmd:".concat(cmd, " scmd:").concat(scmd));
            return;
        }
        this._messagehandles.set(protoIndex, fun);
    };
    ProtoBufEncoder.setProtoClass = function (cmd, scmd, protoClass) {
        var protoIndex = this.getMessageIndex(cmd, scmd);
        if (ProtoBufEncoder._protoBufClass.has(protoIndex)) {
            logger.error("\u8BE5\u4F4D\u7F6E\u5DF2\u6709protoClass cmd:".concat(cmd, " scmd:").concat(scmd));
            return;
        }
        ProtoBufEncoder._protoBufClass.set(protoIndex, protoClass);
    };
    ProtoBufEncoder.encode = function (message) {
        if (!message) {
            return null;
        }
        var messageClass = ProtoBufEncoder._protoBufClass.get(this.getMessageIndex(message.cmd, message.scmd));
        if (!messageClass) {
            throw new Error("\u672A\u627E\u5230\u6CE8\u518C\u7684\u534F\u8BAE\u7F16\u7801\u7C7B: cmd:".concat(message.cmd, " scmd:").concat(message.scmd));
        }
        ProtoBufEncoder._protoBufWriter.reset();
        var writer = messageClass.encode(message, ProtoBufEncoder._protoBufWriter);
        return writer.finishWithSysCmd(message.cmd, message.scmd);
    };
    ProtoBufEncoder.decode = function (buffer, offset) {
        if (buffer.length < 8) {
            logger.error('protobuf decode err! buffer长度小于8');
            return null;
        }
        if (Buffer.isBuffer(buffer) === false) {
            buffer = Buffer.from(buffer);
        }
        var cmd = buffer.readInt32BE(offset);
        var scmd = buffer.readInt32BE(offset + 4);
        var messageClass = ProtoBufEncoder._protoBufClass.get(this.getMessageIndex(cmd, scmd));
        if (!messageClass) {
            logger.error('无法获取协议:', cmd, scmd);
            return null;
        }
        ProtoBufEncoder._protoBufReader.buf = buffer;
        ProtoBufEncoder._protoBufReader.pos = offset + 8;
        ProtoBufEncoder._protoBufReader.len = buffer.length;
        var result = null;
        try {
            result = messageClass.decode(ProtoBufEncoder._protoBufReader);
        }
        catch (e) {
            logger.error('解码消息失败 ：', messageClass.name);
        }
        return result;
    };
    // 获取注册执行的HandleFunction
    ProtoBufEncoder.getHandlerFunction = function (cmd, scmd) {
        return ProtoBufEncoder._messagehandles.get(this.getMessageIndex(cmd, scmd));
    };
    ProtoBufEncoder.getMessageIndex = function (cmd, scmd) {
        return cmd * CMDTimes + scmd;
    };
    ProtoBufEncoder._protoBufWriter = protobuf.Writer.create();
    ProtoBufEncoder._protoBufReader = protobuf.Reader.create(Buffer.alloc(1));
    return ProtoBufEncoder;
}());
exports.ProtoBufEncoder = ProtoBufEncoder;
