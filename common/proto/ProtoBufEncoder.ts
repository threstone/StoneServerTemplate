import * as protobuf from 'protobufjs';
import * as fs from 'fs';

const CMDTimes = 10000;
export class ProtoBufEncoder {
	private static _messagehandles: Map<number, Function>;

	private static _protoBufWriter: protobuf.Writer = protobuf.Writer.create();

	private static _protoBufReader: protobuf.Reader = protobuf.Reader.create(Buffer.alloc(1));

	private static _protoBufClass: Map<number, any>;

	/**
	 *
	 * @param log
	 * @param allProto
	 * @param handlerPath handler
	 */
	public static init(allProto?: any, handlerPath?: string) {
		try {
			this._messagehandles = new Map<number, Function>();
			this._protoBufClass = new Map<number, any>();
			this.addFunToProtobuf();
			this.requireHandlerClass(handlerPath);
			this.regiesterProtoClass(allProto);
		} catch (error) {
			logger.error(error);
		}
	}

	private static requireHandlerClass(handlerPath: string) {
		if (!handlerPath) {
			return;
		}
		const files = fs.readdirSync(handlerPath);
		for (let i = 0; i < files.length; i++) {
			const fileName = files[i];
			if (fileName.endsWith('Handler.js')) {
				// eslint-disable-next-line import/no-dynamic-require, global-require
				require(`${handlerPath}/${fileName}`);
			}
		}
	}

	private static regiesterProtoClass(allProto: any) {
		if (!allProto) {
			return;
		}

		const keys = Object.keys(allProto);
		for (let index = 0; index < keys.length; index++) {
			const protoNamespaceKey = keys[index];
			const protoNamespace = allProto[protoNamespaceKey];
			for (const key in protoNamespace) {
				if (key.startsWith('C_') || key.startsWith('S_')) {
					const protoClass: typeof IGameMessage = protoNamespace[key];
					if (protoClass.prototype.cmd != null && protoClass.prototype.scmd != null) {
						ProtoBufEncoder.setProtoClass(protoClass.prototype.cmd, protoClass.prototype.scmd, protoClass);
					}
				}
			}
		}
	}

	private static addFunToProtobuf() {
		// 给protobuf的默认编码函数 增加 一个
		const protoBufAny: any = protobuf;
		if (protoBufAny.Writer.prototype.finishWithSysCmd != null) { return; }
		protoBufAny.Writer.prototype.finishWithSysCmd = function (sysid: number, cmdid: number) {
			let head = this.head.next;
			const buf = this.constructor.alloc(this.len + 8);
			buf.writeInt32BE(sysid, 0);
			buf.writeInt32BE(cmdid, 4);
			let pos = 8;
			while (head) {
				head.fn(head.val, buf, pos);
				pos += head.len;
				head = head.next;
			}
			return buf;
		};

		const raw = protoBufAny.Reader.prototype.int64;

		protoBufAny.Reader.prototype.int64 = function () {
			const result = raw.call(this);
			if (typeof (result) === 'number') {
				return result;
			}
			return result.toNumber();
		};
	}

	public static setHandler(cmd: number, scmd: number, fun: Function) {
		const protoIndex = this.getMessageIndex(cmd, scmd);
		if (this._messagehandles[protoIndex]) {
			logger.error(`该位置已有注册函数 cmd:${cmd} scmd:${scmd}`);
			return;
		}
		this._messagehandles.set(protoIndex, fun);
	}

	public static setProtoClass(cmd: number, scmd: number, protoClass: any) {
		const protoIndex = this.getMessageIndex(cmd, scmd);
		if (ProtoBufEncoder._protoBufClass.has(protoIndex)) {
			logger.error(`该位置已有protoClass cmd:${cmd} scmd:${scmd}`);
			return;
		}
		ProtoBufEncoder._protoBufClass.set(protoIndex, protoClass);
	}

	public static encode(message: IGameMessage): Buffer {
		if (!message) {
			return null;
		}
		const messageClass = ProtoBufEncoder._protoBufClass.get(this.getMessageIndex(message.cmd, message.scmd));
		if (!messageClass) {
			throw new Error(`未找到注册的协议编码类: cmd:${message.cmd} scmd:${message.scmd}`);
		}
		ProtoBufEncoder._protoBufWriter.reset();
		const writer = messageClass.encode(message, ProtoBufEncoder._protoBufWriter);
		return writer.finishWithSysCmd(message.cmd, message.scmd);
	}

	public static decode(buffer: Buffer, offset: number): IGameMessage {
		if (buffer.length < 8) {
			logger.error('protobuf decode err! buffer长度小于8');
			return null;
		}
		if (Buffer.isBuffer(buffer) === false) {
			buffer = Buffer.from(buffer);
		}
		const cmd = buffer.readInt32BE(offset);
		const scmd = buffer.readInt32BE(offset + 4);
		const messageClass = ProtoBufEncoder._protoBufClass.get(this.getMessageIndex(cmd, scmd));

		if (!messageClass) {
			logger.error('无法获取协议:', cmd, scmd);
			return null;
		}

		ProtoBufEncoder._protoBufReader.buf = buffer;
		ProtoBufEncoder._protoBufReader.pos = offset + 8;
		ProtoBufEncoder._protoBufReader.len = buffer.length;
		let result = null;
		try {
			result = messageClass.decode(ProtoBufEncoder._protoBufReader);
		} catch (e) {
			logger.error('解码消息失败 ：', messageClass.name);
		}

		return result;
	}

	// 获取注册执行的HandleFunction
	public static getHandlerFunction(cmd: number, scmd: number): Function {
		return ProtoBufEncoder._messagehandles.get(this.getMessageIndex(cmd, scmd));
	}

	public static getMessageIndex(cmd: number, scmd: number) {
		return cmd * CMDTimes + scmd;
	}
}
