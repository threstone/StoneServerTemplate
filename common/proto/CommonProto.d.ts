import * as $protobuf from "protobufjs";
/** Namespace SystemPto. */
export namespace SystemPto {

    /** Properties of a S_ERROR. */
    interface IS_ERROR {

        /** S_ERROR cmd */
        cmd?: (number|null);

        /** S_ERROR scmd */
        scmd?: (number|null);

        /** S_ERROR code */
        code?: (number|null);

        /** S_ERROR msg */
        msg?: (string|null);
    }

    /** Represents a S_ERROR. */
    class S_ERROR implements IS_ERROR {

        /**
         * Constructs a new S_ERROR.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_ERROR);

        /** S_ERROR cmd. */
        public cmd: number;

        /** S_ERROR scmd. */
        public scmd: number;

        /** S_ERROR code. */
        public code: number;

        /** S_ERROR msg. */
        public msg: string;

        /**
         * Encodes the specified S_ERROR message. Does not implicitly {@link SystemPto.S_ERROR.verify|verify} messages.
         * @param message S_ERROR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_ERROR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ERROR message, length delimited. Does not implicitly {@link SystemPto.S_ERROR.verify|verify} messages.
         * @param message S_ERROR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_ERROR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ERROR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_ERROR;

        /**
         * Decodes a S_ERROR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ERROR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_ERROR;

        /**
         * Verifies a S_ERROR message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ERROR message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ERROR
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_ERROR;

        /**
         * Creates a plain object from a S_ERROR message. Also converts values to other types if specified.
         * @param message S_ERROR
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_ERROR, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ERROR to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_HEART_BEAT. */
    interface IC_HEART_BEAT {

        /** C_HEART_BEAT cmd */
        cmd?: (number|null);

        /** C_HEART_BEAT scmd */
        scmd?: (number|null);
    }

    /** Represents a C_HEART_BEAT. */
    class C_HEART_BEAT implements IC_HEART_BEAT {

        /**
         * Constructs a new C_HEART_BEAT.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IC_HEART_BEAT);

        /** C_HEART_BEAT cmd. */
        public cmd: number;

        /** C_HEART_BEAT scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_HEART_BEAT message. Does not implicitly {@link SystemPto.C_HEART_BEAT.verify|verify} messages.
         * @param message C_HEART_BEAT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IC_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_HEART_BEAT message, length delimited. Does not implicitly {@link SystemPto.C_HEART_BEAT.verify|verify} messages.
         * @param message C_HEART_BEAT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IC_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_HEART_BEAT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.C_HEART_BEAT;

        /**
         * Decodes a C_HEART_BEAT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.C_HEART_BEAT;

        /**
         * Verifies a C_HEART_BEAT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_HEART_BEAT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_HEART_BEAT
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.C_HEART_BEAT;

        /**
         * Creates a plain object from a C_HEART_BEAT message. Also converts values to other types if specified.
         * @param message C_HEART_BEAT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.C_HEART_BEAT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_HEART_BEAT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_HEART_BEAT. */
    interface IS_HEART_BEAT {

        /** S_HEART_BEAT cmd */
        cmd?: (number|null);

        /** S_HEART_BEAT scmd */
        scmd?: (number|null);

        /** S_HEART_BEAT serverTime */
        serverTime?: (number|null);
    }

    /** Represents a S_HEART_BEAT. */
    class S_HEART_BEAT implements IS_HEART_BEAT {

        /**
         * Constructs a new S_HEART_BEAT.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_HEART_BEAT);

        /** S_HEART_BEAT cmd. */
        public cmd: number;

        /** S_HEART_BEAT scmd. */
        public scmd: number;

        /** S_HEART_BEAT serverTime. */
        public serverTime: number;

        /**
         * Encodes the specified S_HEART_BEAT message. Does not implicitly {@link SystemPto.S_HEART_BEAT.verify|verify} messages.
         * @param message S_HEART_BEAT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_HEART_BEAT message, length delimited. Does not implicitly {@link SystemPto.S_HEART_BEAT.verify|verify} messages.
         * @param message S_HEART_BEAT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_HEART_BEAT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_HEART_BEAT;

        /**
         * Decodes a S_HEART_BEAT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_HEART_BEAT;

        /**
         * Verifies a S_HEART_BEAT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_HEART_BEAT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_HEART_BEAT
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_HEART_BEAT;

        /**
         * Creates a plain object from a S_HEART_BEAT message. Also converts values to other types if specified.
         * @param message S_HEART_BEAT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_HEART_BEAT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_HEART_BEAT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_KICK. */
    interface IS_KICK {

        /** S_KICK cmd */
        cmd?: (number|null);

        /** S_KICK scmd */
        scmd?: (number|null);

        /** S_KICK reason */
        reason?: (string|null);
    }

    /** Represents a S_KICK. */
    class S_KICK implements IS_KICK {

        /**
         * Constructs a new S_KICK.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_KICK);

        /** S_KICK cmd. */
        public cmd: number;

        /** S_KICK scmd. */
        public scmd: number;

        /** S_KICK reason. */
        public reason: string;

        /**
         * Encodes the specified S_KICK message. Does not implicitly {@link SystemPto.S_KICK.verify|verify} messages.
         * @param message S_KICK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_KICK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_KICK message, length delimited. Does not implicitly {@link SystemPto.S_KICK.verify|verify} messages.
         * @param message S_KICK message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_KICK, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_KICK message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_KICK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_KICK;

        /**
         * Decodes a S_KICK message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_KICK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_KICK;

        /**
         * Verifies a S_KICK message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_KICK message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_KICK
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_KICK;

        /**
         * Creates a plain object from a S_KICK message. Also converts values to other types if specified.
         * @param message S_KICK
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_KICK, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_KICK to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_NEW_DAY. */
    interface IS_NEW_DAY {

        /** S_NEW_DAY cmd */
        cmd?: (number|null);

        /** S_NEW_DAY scmd */
        scmd?: (number|null);

        /** S_NEW_DAY dayStartMs */
        dayStartMs?: (number|null);
    }

    /** Represents a S_NEW_DAY. */
    class S_NEW_DAY implements IS_NEW_DAY {

        /**
         * Constructs a new S_NEW_DAY.
         * @param [properties] Properties to set
         */
        constructor(properties?: SystemPto.IS_NEW_DAY);

        /** S_NEW_DAY cmd. */
        public cmd: number;

        /** S_NEW_DAY scmd. */
        public scmd: number;

        /** S_NEW_DAY dayStartMs. */
        public dayStartMs: number;

        /**
         * Encodes the specified S_NEW_DAY message. Does not implicitly {@link SystemPto.S_NEW_DAY.verify|verify} messages.
         * @param message S_NEW_DAY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SystemPto.IS_NEW_DAY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_NEW_DAY message, length delimited. Does not implicitly {@link SystemPto.S_NEW_DAY.verify|verify} messages.
         * @param message S_NEW_DAY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SystemPto.IS_NEW_DAY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_NEW_DAY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_NEW_DAY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemPto.S_NEW_DAY;

        /**
         * Decodes a S_NEW_DAY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_NEW_DAY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemPto.S_NEW_DAY;

        /**
         * Verifies a S_NEW_DAY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_NEW_DAY message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_NEW_DAY
         */
        public static fromObject(object: { [k: string]: any }): SystemPto.S_NEW_DAY;

        /**
         * Creates a plain object from a S_NEW_DAY message. Also converts values to other types if specified.
         * @param message S_NEW_DAY
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SystemPto.S_NEW_DAY, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_NEW_DAY to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace ServerPto. */
export namespace ServerPto {

    /** Properties of a S_CONNECT. */
    interface IS_CONNECT {

        /** S_CONNECT cmd */
        cmd?: (number|null);

        /** S_CONNECT scmd */
        scmd?: (number|null);

        /** S_CONNECT loginInfo */
        loginInfo?: (PlayerPto.ILoginInfo|null);
    }

    /** Represents a S_CONNECT. */
    class S_CONNECT implements IS_CONNECT {

        /**
         * Constructs a new S_CONNECT.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IS_CONNECT);

        /** S_CONNECT cmd. */
        public cmd: number;

        /** S_CONNECT scmd. */
        public scmd: number;

        /** S_CONNECT loginInfo. */
        public loginInfo?: (PlayerPto.ILoginInfo|null);

        /**
         * Encodes the specified S_CONNECT message. Does not implicitly {@link ServerPto.S_CONNECT.verify|verify} messages.
         * @param message S_CONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IS_CONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_CONNECT message, length delimited. Does not implicitly {@link ServerPto.S_CONNECT.verify|verify} messages.
         * @param message S_CONNECT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IS_CONNECT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_CONNECT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_CONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.S_CONNECT;

        /**
         * Decodes a S_CONNECT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_CONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.S_CONNECT;

        /**
         * Verifies a S_CONNECT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_CONNECT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_CONNECT
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.S_CONNECT;

        /**
         * Creates a plain object from a S_CONNECT message. Also converts values to other types if specified.
         * @param message S_CONNECT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.S_CONNECT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_CONNECT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_SWITCH_SERVER. */
    interface IC_SWITCH_SERVER {

        /** C_SWITCH_SERVER cmd */
        cmd?: (number|null);

        /** C_SWITCH_SERVER scmd */
        scmd?: (number|null);

        /** C_SWITCH_SERVER serverId */
        serverId?: (number|null);
    }

    /** Represents a C_SWITCH_SERVER. */
    class C_SWITCH_SERVER implements IC_SWITCH_SERVER {

        /**
         * Constructs a new C_SWITCH_SERVER.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IC_SWITCH_SERVER);

        /** C_SWITCH_SERVER cmd. */
        public cmd: number;

        /** C_SWITCH_SERVER scmd. */
        public scmd: number;

        /** C_SWITCH_SERVER serverId. */
        public serverId: number;

        /**
         * Encodes the specified C_SWITCH_SERVER message. Does not implicitly {@link ServerPto.C_SWITCH_SERVER.verify|verify} messages.
         * @param message C_SWITCH_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IC_SWITCH_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SWITCH_SERVER message, length delimited. Does not implicitly {@link ServerPto.C_SWITCH_SERVER.verify|verify} messages.
         * @param message C_SWITCH_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IC_SWITCH_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SWITCH_SERVER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SWITCH_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.C_SWITCH_SERVER;

        /**
         * Decodes a C_SWITCH_SERVER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SWITCH_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.C_SWITCH_SERVER;

        /**
         * Verifies a C_SWITCH_SERVER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SWITCH_SERVER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SWITCH_SERVER
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.C_SWITCH_SERVER;

        /**
         * Creates a plain object from a C_SWITCH_SERVER message. Also converts values to other types if specified.
         * @param message C_SWITCH_SERVER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.C_SWITCH_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SWITCH_SERVER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_SWITCH_SERVER. */
    interface IS_SWITCH_SERVER {

        /** S_SWITCH_SERVER cmd */
        cmd?: (number|null);

        /** S_SWITCH_SERVER scmd */
        scmd?: (number|null);

        /** S_SWITCH_SERVER loginInfo */
        loginInfo?: (PlayerPto.ILoginInfo|null);
    }

    /** Represents a S_SWITCH_SERVER. */
    class S_SWITCH_SERVER implements IS_SWITCH_SERVER {

        /**
         * Constructs a new S_SWITCH_SERVER.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IS_SWITCH_SERVER);

        /** S_SWITCH_SERVER cmd. */
        public cmd: number;

        /** S_SWITCH_SERVER scmd. */
        public scmd: number;

        /** S_SWITCH_SERVER loginInfo. */
        public loginInfo?: (PlayerPto.ILoginInfo|null);

        /**
         * Encodes the specified S_SWITCH_SERVER message. Does not implicitly {@link ServerPto.S_SWITCH_SERVER.verify|verify} messages.
         * @param message S_SWITCH_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IS_SWITCH_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_SWITCH_SERVER message, length delimited. Does not implicitly {@link ServerPto.S_SWITCH_SERVER.verify|verify} messages.
         * @param message S_SWITCH_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IS_SWITCH_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_SWITCH_SERVER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SWITCH_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.S_SWITCH_SERVER;

        /**
         * Decodes a S_SWITCH_SERVER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_SWITCH_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.S_SWITCH_SERVER;

        /**
         * Verifies a S_SWITCH_SERVER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_SWITCH_SERVER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_SWITCH_SERVER
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.S_SWITCH_SERVER;

        /**
         * Creates a plain object from a S_SWITCH_SERVER message. Also converts values to other types if specified.
         * @param message S_SWITCH_SERVER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.S_SWITCH_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_SWITCH_SERVER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_GET_SERVER_LIST. */
    interface IC_GET_SERVER_LIST {

        /** C_GET_SERVER_LIST cmd */
        cmd?: (number|null);

        /** C_GET_SERVER_LIST scmd */
        scmd?: (number|null);
    }

    /** Represents a C_GET_SERVER_LIST. */
    class C_GET_SERVER_LIST implements IC_GET_SERVER_LIST {

        /**
         * Constructs a new C_GET_SERVER_LIST.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IC_GET_SERVER_LIST);

        /** C_GET_SERVER_LIST cmd. */
        public cmd: number;

        /** C_GET_SERVER_LIST scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_GET_SERVER_LIST message. Does not implicitly {@link ServerPto.C_GET_SERVER_LIST.verify|verify} messages.
         * @param message C_GET_SERVER_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IC_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GET_SERVER_LIST message, length delimited. Does not implicitly {@link ServerPto.C_GET_SERVER_LIST.verify|verify} messages.
         * @param message C_GET_SERVER_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IC_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GET_SERVER_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.C_GET_SERVER_LIST;

        /**
         * Decodes a C_GET_SERVER_LIST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.C_GET_SERVER_LIST;

        /**
         * Verifies a C_GET_SERVER_LIST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GET_SERVER_LIST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GET_SERVER_LIST
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.C_GET_SERVER_LIST;

        /**
         * Creates a plain object from a C_GET_SERVER_LIST message. Also converts values to other types if specified.
         * @param message C_GET_SERVER_LIST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.C_GET_SERVER_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GET_SERVER_LIST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GET_SERVER_LIST. */
    interface IS_GET_SERVER_LIST {

        /** S_GET_SERVER_LIST cmd */
        cmd?: (number|null);

        /** S_GET_SERVER_LIST scmd */
        scmd?: (number|null);

        /** S_GET_SERVER_LIST list */
        list?: (ServerPto.IServerInfo[]|null);
    }

    /** Represents a S_GET_SERVER_LIST. */
    class S_GET_SERVER_LIST implements IS_GET_SERVER_LIST {

        /**
         * Constructs a new S_GET_SERVER_LIST.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IS_GET_SERVER_LIST);

        /** S_GET_SERVER_LIST cmd. */
        public cmd: number;

        /** S_GET_SERVER_LIST scmd. */
        public scmd: number;

        /** S_GET_SERVER_LIST list. */
        public list: ServerPto.IServerInfo[];

        /**
         * Encodes the specified S_GET_SERVER_LIST message. Does not implicitly {@link ServerPto.S_GET_SERVER_LIST.verify|verify} messages.
         * @param message S_GET_SERVER_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IS_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GET_SERVER_LIST message, length delimited. Does not implicitly {@link ServerPto.S_GET_SERVER_LIST.verify|verify} messages.
         * @param message S_GET_SERVER_LIST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IS_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GET_SERVER_LIST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.S_GET_SERVER_LIST;

        /**
         * Decodes a S_GET_SERVER_LIST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.S_GET_SERVER_LIST;

        /**
         * Verifies a S_GET_SERVER_LIST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GET_SERVER_LIST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GET_SERVER_LIST
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.S_GET_SERVER_LIST;

        /**
         * Creates a plain object from a S_GET_SERVER_LIST message. Also converts values to other types if specified.
         * @param message S_GET_SERVER_LIST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.S_GET_SERVER_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GET_SERVER_LIST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerInfo. */
    interface IServerInfo {

        /** ServerInfo id */
        id?: (number|null);

        /** ServerInfo startTime */
        startTime?: (number|null);

        /** ServerInfo status */
        status?: (number|null);

        /** ServerInfo tag */
        tag?: (number|null);
    }

    /** Represents a ServerInfo. */
    class ServerInfo implements IServerInfo {

        /**
         * Constructs a new ServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerPto.IServerInfo);

        /** ServerInfo id. */
        public id: number;

        /** ServerInfo startTime. */
        public startTime: number;

        /** ServerInfo status. */
        public status: number;

        /** ServerInfo tag. */
        public tag: number;

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link ServerPto.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerPto.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link ServerPto.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerPto.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPto.ServerInfo;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPto.ServerInfo;

        /**
         * Verifies a ServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfo
         */
        public static fromObject(object: { [k: string]: any }): ServerPto.ServerInfo;

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @param message ServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerPto.ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace PlayerPto. */
export namespace PlayerPto {

    /** Properties of a C_GET_PLAYER_INFO. */
    interface IC_GET_PLAYER_INFO {

        /** C_GET_PLAYER_INFO cmd */
        cmd?: (number|null);

        /** C_GET_PLAYER_INFO scmd */
        scmd?: (number|null);

        /** C_GET_PLAYER_INFO userId */
        userId?: (string|null);
    }

    /** Represents a C_GET_PLAYER_INFO. */
    class C_GET_PLAYER_INFO implements IC_GET_PLAYER_INFO {

        /**
         * Constructs a new C_GET_PLAYER_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: PlayerPto.IC_GET_PLAYER_INFO);

        /** C_GET_PLAYER_INFO cmd. */
        public cmd: number;

        /** C_GET_PLAYER_INFO scmd. */
        public scmd: number;

        /** C_GET_PLAYER_INFO userId. */
        public userId: string;

        /**
         * Encodes the specified C_GET_PLAYER_INFO message. Does not implicitly {@link PlayerPto.C_GET_PLAYER_INFO.verify|verify} messages.
         * @param message C_GET_PLAYER_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PlayerPto.IC_GET_PLAYER_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GET_PLAYER_INFO message, length delimited. Does not implicitly {@link PlayerPto.C_GET_PLAYER_INFO.verify|verify} messages.
         * @param message C_GET_PLAYER_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PlayerPto.IC_GET_PLAYER_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GET_PLAYER_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GET_PLAYER_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerPto.C_GET_PLAYER_INFO;

        /**
         * Decodes a C_GET_PLAYER_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GET_PLAYER_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerPto.C_GET_PLAYER_INFO;

        /**
         * Verifies a C_GET_PLAYER_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GET_PLAYER_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GET_PLAYER_INFO
         */
        public static fromObject(object: { [k: string]: any }): PlayerPto.C_GET_PLAYER_INFO;

        /**
         * Creates a plain object from a C_GET_PLAYER_INFO message. Also converts values to other types if specified.
         * @param message C_GET_PLAYER_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerPto.C_GET_PLAYER_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GET_PLAYER_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GET_PLAYER_INFO. */
    interface IS_GET_PLAYER_INFO {

        /** S_GET_PLAYER_INFO cmd */
        cmd?: (number|null);

        /** S_GET_PLAYER_INFO scmd */
        scmd?: (number|null);

        /** S_GET_PLAYER_INFO player */
        player?: (PlayerPto.IOtherPlayerInfo|null);
    }

    /** Represents a S_GET_PLAYER_INFO. */
    class S_GET_PLAYER_INFO implements IS_GET_PLAYER_INFO {

        /**
         * Constructs a new S_GET_PLAYER_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: PlayerPto.IS_GET_PLAYER_INFO);

        /** S_GET_PLAYER_INFO cmd. */
        public cmd: number;

        /** S_GET_PLAYER_INFO scmd. */
        public scmd: number;

        /** S_GET_PLAYER_INFO player. */
        public player?: (PlayerPto.IOtherPlayerInfo|null);

        /**
         * Encodes the specified S_GET_PLAYER_INFO message. Does not implicitly {@link PlayerPto.S_GET_PLAYER_INFO.verify|verify} messages.
         * @param message S_GET_PLAYER_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PlayerPto.IS_GET_PLAYER_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GET_PLAYER_INFO message, length delimited. Does not implicitly {@link PlayerPto.S_GET_PLAYER_INFO.verify|verify} messages.
         * @param message S_GET_PLAYER_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PlayerPto.IS_GET_PLAYER_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GET_PLAYER_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GET_PLAYER_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerPto.S_GET_PLAYER_INFO;

        /**
         * Decodes a S_GET_PLAYER_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GET_PLAYER_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerPto.S_GET_PLAYER_INFO;

        /**
         * Verifies a S_GET_PLAYER_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GET_PLAYER_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GET_PLAYER_INFO
         */
        public static fromObject(object: { [k: string]: any }): PlayerPto.S_GET_PLAYER_INFO;

        /**
         * Creates a plain object from a S_GET_PLAYER_INFO message. Also converts values to other types if specified.
         * @param message S_GET_PLAYER_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerPto.S_GET_PLAYER_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GET_PLAYER_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginInfo. */
    interface ILoginInfo {

        /** LoginInfo code */
        code?: (number|null);

        /** LoginInfo playerInfo */
        playerInfo?: (PlayerPto.IPlayerInfo|null);

        /** LoginInfo serverId */
        serverId?: (number|null);

        /** LoginInfo serverOpenDay */
        serverOpenDay?: (number|null);

        /** LoginInfo serverTime */
        serverTime?: (number|null);
    }

    /** Represents a LoginInfo. */
    class LoginInfo implements ILoginInfo {

        /**
         * Constructs a new LoginInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PlayerPto.ILoginInfo);

        /** LoginInfo code. */
        public code: number;

        /** LoginInfo playerInfo. */
        public playerInfo?: (PlayerPto.IPlayerInfo|null);

        /** LoginInfo serverId. */
        public serverId: number;

        /** LoginInfo serverOpenDay. */
        public serverOpenDay: number;

        /** LoginInfo serverTime. */
        public serverTime: number;

        /**
         * Encodes the specified LoginInfo message. Does not implicitly {@link PlayerPto.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PlayerPto.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginInfo message, length delimited. Does not implicitly {@link PlayerPto.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PlayerPto.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerPto.LoginInfo;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerPto.LoginInfo;

        /**
         * Verifies a LoginInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginInfo
         */
        public static fromObject(object: { [k: string]: any }): PlayerPto.LoginInfo;

        /**
         * Creates a plain object from a LoginInfo message. Also converts values to other types if specified.
         * @param message LoginInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerPto.LoginInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo userId */
        userId?: (string|null);

        /** PlayerInfo nickname */
        nickname?: (string|null);

        /** PlayerInfo lv */
        lv?: (number|null);

        /** PlayerInfo registerTime */
        registerTime?: (number|null);

        /** PlayerInfo onlineTime */
        onlineTime?: (number|null);

        /** PlayerInfo offlineTime */
        offlineTime?: (number|null);

        /** PlayerInfo loginDay */
        loginDay?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PlayerPto.IPlayerInfo);

        /** PlayerInfo userId. */
        public userId: string;

        /** PlayerInfo nickname. */
        public nickname: string;

        /** PlayerInfo lv. */
        public lv: number;

        /** PlayerInfo registerTime. */
        public registerTime: number;

        /** PlayerInfo onlineTime. */
        public onlineTime: number;

        /** PlayerInfo offlineTime. */
        public offlineTime: number;

        /** PlayerInfo loginDay. */
        public loginDay: number;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerPto.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PlayerPto.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link PlayerPto.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PlayerPto.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerPto.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerPto.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): PlayerPto.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerPto.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OtherPlayerInfo. */
    interface IOtherPlayerInfo {

        /** OtherPlayerInfo baseInfo */
        baseInfo?: (PlayerPto.IPlayerInfo|null);

        /** OtherPlayerInfo serverId */
        serverId?: (number|null);
    }

    /** Represents an OtherPlayerInfo. */
    class OtherPlayerInfo implements IOtherPlayerInfo {

        /**
         * Constructs a new OtherPlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PlayerPto.IOtherPlayerInfo);

        /** OtherPlayerInfo baseInfo. */
        public baseInfo?: (PlayerPto.IPlayerInfo|null);

        /** OtherPlayerInfo serverId. */
        public serverId: number;

        /**
         * Encodes the specified OtherPlayerInfo message. Does not implicitly {@link PlayerPto.OtherPlayerInfo.verify|verify} messages.
         * @param message OtherPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PlayerPto.IOtherPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OtherPlayerInfo message, length delimited. Does not implicitly {@link PlayerPto.OtherPlayerInfo.verify|verify} messages.
         * @param message OtherPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PlayerPto.IOtherPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OtherPlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OtherPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerPto.OtherPlayerInfo;

        /**
         * Decodes an OtherPlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OtherPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerPto.OtherPlayerInfo;

        /**
         * Verifies an OtherPlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OtherPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OtherPlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): PlayerPto.OtherPlayerInfo;

        /**
         * Creates a plain object from an OtherPlayerInfo message. Also converts values to other types if specified.
         * @param message OtherPlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerPto.OtherPlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OtherPlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattlePlayer. */
    interface IBattlePlayer {

        /** BattlePlayer baseInfo */
        baseInfo?: (PlayerPto.IPlayerInfo|null);

        /** BattlePlayer serverId */
        serverId?: (number|null);
    }

    /** Represents a BattlePlayer. */
    class BattlePlayer implements IBattlePlayer {

        /**
         * Constructs a new BattlePlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: PlayerPto.IBattlePlayer);

        /** BattlePlayer baseInfo. */
        public baseInfo?: (PlayerPto.IPlayerInfo|null);

        /** BattlePlayer serverId. */
        public serverId: number;

        /**
         * Encodes the specified BattlePlayer message. Does not implicitly {@link PlayerPto.BattlePlayer.verify|verify} messages.
         * @param message BattlePlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PlayerPto.IBattlePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattlePlayer message, length delimited. Does not implicitly {@link PlayerPto.BattlePlayer.verify|verify} messages.
         * @param message BattlePlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PlayerPto.IBattlePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattlePlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattlePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerPto.BattlePlayer;

        /**
         * Decodes a BattlePlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattlePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerPto.BattlePlayer;

        /**
         * Verifies a BattlePlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattlePlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattlePlayer
         */
        public static fromObject(object: { [k: string]: any }): PlayerPto.BattlePlayer;

        /**
         * Creates a plain object from a BattlePlayer message. Also converts values to other types if specified.
         * @param message BattlePlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerPto.BattlePlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattlePlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace ItemPto. */
export namespace ItemPto {

    /** Properties of a C_GET_ITEMS_INFO. */
    interface IC_GET_ITEMS_INFO {

        /** C_GET_ITEMS_INFO cmd */
        cmd?: (number|null);

        /** C_GET_ITEMS_INFO scmd */
        scmd?: (number|null);
    }

    /** Represents a C_GET_ITEMS_INFO. */
    class C_GET_ITEMS_INFO implements IC_GET_ITEMS_INFO {

        /**
         * Constructs a new C_GET_ITEMS_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IC_GET_ITEMS_INFO);

        /** C_GET_ITEMS_INFO cmd. */
        public cmd: number;

        /** C_GET_ITEMS_INFO scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_GET_ITEMS_INFO message. Does not implicitly {@link ItemPto.C_GET_ITEMS_INFO.verify|verify} messages.
         * @param message C_GET_ITEMS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IC_GET_ITEMS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GET_ITEMS_INFO message, length delimited. Does not implicitly {@link ItemPto.C_GET_ITEMS_INFO.verify|verify} messages.
         * @param message C_GET_ITEMS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IC_GET_ITEMS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GET_ITEMS_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GET_ITEMS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.C_GET_ITEMS_INFO;

        /**
         * Decodes a C_GET_ITEMS_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GET_ITEMS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.C_GET_ITEMS_INFO;

        /**
         * Verifies a C_GET_ITEMS_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GET_ITEMS_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GET_ITEMS_INFO
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.C_GET_ITEMS_INFO;

        /**
         * Creates a plain object from a C_GET_ITEMS_INFO message. Also converts values to other types if specified.
         * @param message C_GET_ITEMS_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.C_GET_ITEMS_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GET_ITEMS_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GET_ITEMS_INFO. */
    interface IS_GET_ITEMS_INFO {

        /** S_GET_ITEMS_INFO cmd */
        cmd?: (number|null);

        /** S_GET_ITEMS_INFO scmd */
        scmd?: (number|null);

        /** S_GET_ITEMS_INFO itemMap */
        itemMap?: ({ [k: string]: ItemPto.IItem }|null);
    }

    /** Represents a S_GET_ITEMS_INFO. */
    class S_GET_ITEMS_INFO implements IS_GET_ITEMS_INFO {

        /**
         * Constructs a new S_GET_ITEMS_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IS_GET_ITEMS_INFO);

        /** S_GET_ITEMS_INFO cmd. */
        public cmd: number;

        /** S_GET_ITEMS_INFO scmd. */
        public scmd: number;

        /** S_GET_ITEMS_INFO itemMap. */
        public itemMap: { [k: string]: ItemPto.IItem };

        /**
         * Encodes the specified S_GET_ITEMS_INFO message. Does not implicitly {@link ItemPto.S_GET_ITEMS_INFO.verify|verify} messages.
         * @param message S_GET_ITEMS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IS_GET_ITEMS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GET_ITEMS_INFO message, length delimited. Does not implicitly {@link ItemPto.S_GET_ITEMS_INFO.verify|verify} messages.
         * @param message S_GET_ITEMS_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IS_GET_ITEMS_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GET_ITEMS_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GET_ITEMS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.S_GET_ITEMS_INFO;

        /**
         * Decodes a S_GET_ITEMS_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GET_ITEMS_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.S_GET_ITEMS_INFO;

        /**
         * Verifies a S_GET_ITEMS_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GET_ITEMS_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GET_ITEMS_INFO
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.S_GET_ITEMS_INFO;

        /**
         * Creates a plain object from a S_GET_ITEMS_INFO message. Also converts values to other types if specified.
         * @param message S_GET_ITEMS_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.S_GET_ITEMS_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GET_ITEMS_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ITEMS_UPDATE. */
    interface IS_ITEMS_UPDATE {

        /** S_ITEMS_UPDATE cmd */
        cmd?: (number|null);

        /** S_ITEMS_UPDATE scmd */
        scmd?: (number|null);

        /** S_ITEMS_UPDATE items */
        items?: (ItemPto.IItem[]|null);
    }

    /** Represents a S_ITEMS_UPDATE. */
    class S_ITEMS_UPDATE implements IS_ITEMS_UPDATE {

        /**
         * Constructs a new S_ITEMS_UPDATE.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IS_ITEMS_UPDATE);

        /** S_ITEMS_UPDATE cmd. */
        public cmd: number;

        /** S_ITEMS_UPDATE scmd. */
        public scmd: number;

        /** S_ITEMS_UPDATE items. */
        public items: ItemPto.IItem[];

        /**
         * Encodes the specified S_ITEMS_UPDATE message. Does not implicitly {@link ItemPto.S_ITEMS_UPDATE.verify|verify} messages.
         * @param message S_ITEMS_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IS_ITEMS_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ITEMS_UPDATE message, length delimited. Does not implicitly {@link ItemPto.S_ITEMS_UPDATE.verify|verify} messages.
         * @param message S_ITEMS_UPDATE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IS_ITEMS_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ITEMS_UPDATE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ITEMS_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.S_ITEMS_UPDATE;

        /**
         * Decodes a S_ITEMS_UPDATE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ITEMS_UPDATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.S_ITEMS_UPDATE;

        /**
         * Verifies a S_ITEMS_UPDATE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ITEMS_UPDATE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ITEMS_UPDATE
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.S_ITEMS_UPDATE;

        /**
         * Creates a plain object from a S_ITEMS_UPDATE message. Also converts values to other types if specified.
         * @param message S_ITEMS_UPDATE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.S_ITEMS_UPDATE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ITEMS_UPDATE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_USE_ITEMS. */
    interface IC_USE_ITEMS {

        /** C_USE_ITEMS cmd */
        cmd?: (number|null);

        /** C_USE_ITEMS scmd */
        scmd?: (number|null);

        /** C_USE_ITEMS itemId */
        itemId?: (number|null);

        /** C_USE_ITEMS count */
        count?: (number|null);

        /** C_USE_ITEMS selectIndex */
        selectIndex?: (number|null);
    }

    /** Represents a C_USE_ITEMS. */
    class C_USE_ITEMS implements IC_USE_ITEMS {

        /**
         * Constructs a new C_USE_ITEMS.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IC_USE_ITEMS);

        /** C_USE_ITEMS cmd. */
        public cmd: number;

        /** C_USE_ITEMS scmd. */
        public scmd: number;

        /** C_USE_ITEMS itemId. */
        public itemId: number;

        /** C_USE_ITEMS count. */
        public count: number;

        /** C_USE_ITEMS selectIndex. */
        public selectIndex: number;

        /**
         * Encodes the specified C_USE_ITEMS message. Does not implicitly {@link ItemPto.C_USE_ITEMS.verify|verify} messages.
         * @param message C_USE_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IC_USE_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_USE_ITEMS message, length delimited. Does not implicitly {@link ItemPto.C_USE_ITEMS.verify|verify} messages.
         * @param message C_USE_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IC_USE_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_USE_ITEMS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_USE_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.C_USE_ITEMS;

        /**
         * Decodes a C_USE_ITEMS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_USE_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.C_USE_ITEMS;

        /**
         * Verifies a C_USE_ITEMS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_USE_ITEMS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_USE_ITEMS
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.C_USE_ITEMS;

        /**
         * Creates a plain object from a C_USE_ITEMS message. Also converts values to other types if specified.
         * @param message C_USE_ITEMS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.C_USE_ITEMS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_USE_ITEMS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_USE_ITEMS. */
    interface IS_USE_ITEMS {

        /** S_USE_ITEMS cmd */
        cmd?: (number|null);

        /** S_USE_ITEMS scmd */
        scmd?: (number|null);

        /** S_USE_ITEMS items */
        items?: (ItemPto.IItem[]|null);
    }

    /** Represents a S_USE_ITEMS. */
    class S_USE_ITEMS implements IS_USE_ITEMS {

        /**
         * Constructs a new S_USE_ITEMS.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IS_USE_ITEMS);

        /** S_USE_ITEMS cmd. */
        public cmd: number;

        /** S_USE_ITEMS scmd. */
        public scmd: number;

        /** S_USE_ITEMS items. */
        public items: ItemPto.IItem[];

        /**
         * Encodes the specified S_USE_ITEMS message. Does not implicitly {@link ItemPto.S_USE_ITEMS.verify|verify} messages.
         * @param message S_USE_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IS_USE_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_USE_ITEMS message, length delimited. Does not implicitly {@link ItemPto.S_USE_ITEMS.verify|verify} messages.
         * @param message S_USE_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IS_USE_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_USE_ITEMS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_USE_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.S_USE_ITEMS;

        /**
         * Decodes a S_USE_ITEMS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_USE_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.S_USE_ITEMS;

        /**
         * Verifies a S_USE_ITEMS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_USE_ITEMS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_USE_ITEMS
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.S_USE_ITEMS;

        /**
         * Creates a plain object from a S_USE_ITEMS message. Also converts values to other types if specified.
         * @param message S_USE_ITEMS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.S_USE_ITEMS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_USE_ITEMS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_CLEAR_NEW_TAG. */
    interface IC_CLEAR_NEW_TAG {

        /** C_CLEAR_NEW_TAG cmd */
        cmd?: (number|null);

        /** C_CLEAR_NEW_TAG scmd */
        scmd?: (number|null);

        /** C_CLEAR_NEW_TAG itemId */
        itemId?: (number|null);
    }

    /** Represents a C_CLEAR_NEW_TAG. */
    class C_CLEAR_NEW_TAG implements IC_CLEAR_NEW_TAG {

        /**
         * Constructs a new C_CLEAR_NEW_TAG.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IC_CLEAR_NEW_TAG);

        /** C_CLEAR_NEW_TAG cmd. */
        public cmd: number;

        /** C_CLEAR_NEW_TAG scmd. */
        public scmd: number;

        /** C_CLEAR_NEW_TAG itemId. */
        public itemId: number;

        /**
         * Encodes the specified C_CLEAR_NEW_TAG message. Does not implicitly {@link ItemPto.C_CLEAR_NEW_TAG.verify|verify} messages.
         * @param message C_CLEAR_NEW_TAG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IC_CLEAR_NEW_TAG, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_CLEAR_NEW_TAG message, length delimited. Does not implicitly {@link ItemPto.C_CLEAR_NEW_TAG.verify|verify} messages.
         * @param message C_CLEAR_NEW_TAG message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IC_CLEAR_NEW_TAG, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_CLEAR_NEW_TAG message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CLEAR_NEW_TAG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.C_CLEAR_NEW_TAG;

        /**
         * Decodes a C_CLEAR_NEW_TAG message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_CLEAR_NEW_TAG
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.C_CLEAR_NEW_TAG;

        /**
         * Verifies a C_CLEAR_NEW_TAG message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_CLEAR_NEW_TAG message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_CLEAR_NEW_TAG
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.C_CLEAR_NEW_TAG;

        /**
         * Creates a plain object from a C_CLEAR_NEW_TAG message. Also converts values to other types if specified.
         * @param message C_CLEAR_NEW_TAG
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.C_CLEAR_NEW_TAG, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_CLEAR_NEW_TAG to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD. */
    interface IC_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD {

        /** C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD cmd */
        cmd?: (number|null);

        /** C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD scmd */
        scmd?: (number|null);

        /** C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD itemIds */
        itemIds?: (number[]|null);
    }

    /** Represents a C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD. */
    class C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD implements IC_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD {

        /**
         * Constructs a new C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IC_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD);

        /** C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD cmd. */
        public cmd: number;

        /** C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD scmd. */
        public scmd: number;

        /** C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD itemIds. */
        public itemIds: number[];

        /**
         * Encodes the specified C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message. Does not implicitly {@link ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.verify|verify} messages.
         * @param message C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IC_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message, length delimited. Does not implicitly {@link ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.verify|verify} messages.
         * @param message C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IC_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD;

        /**
         * Decodes a C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD;

        /**
         * Verifies a C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD;

        /**
         * Creates a plain object from a C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message. Also converts values to other types if specified.
         * @param message C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD. */
    interface IS_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD {

        /** S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD cmd */
        cmd?: (number|null);

        /** S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD scmd */
        scmd?: (number|null);

        /** S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD items */
        items?: (ItemPto.IItem[]|null);
    }

    /** Represents a S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD. */
    class S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD implements IS_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD {

        /**
         * Constructs a new S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IS_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD);

        /** S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD cmd. */
        public cmd: number;

        /** S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD scmd. */
        public scmd: number;

        /** S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD items. */
        public items: ItemPto.IItem[];

        /**
         * Encodes the specified S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message. Does not implicitly {@link ItemPto.S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.verify|verify} messages.
         * @param message S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IS_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message, length delimited. Does not implicitly {@link ItemPto.S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.verify|verify} messages.
         * @param message S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IS_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD;

        /**
         * Decodes a S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD;

        /**
         * Verifies a S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD;

        /**
         * Creates a plain object from a S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD message. Also converts values to other types if specified.
         * @param message S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item itemId */
        itemId?: (number|null);

        /** Item count */
        count?: (number|null);

        /** Item isNew */
        isNew?: (boolean|null);

        /** Item expireTime */
        expireTime?: (number|null);

        /** Item nextRecoverTime */
        nextRecoverTime?: (number|null);

        /** Item param */
        param?: (number|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: ItemPto.IItem);

        /** Item itemId. */
        public itemId: number;

        /** Item count. */
        public count: number;

        /** Item isNew. */
        public isNew: boolean;

        /** Item expireTime. */
        public expireTime: number;

        /** Item nextRecoverTime. */
        public nextRecoverTime: number;

        /** Item param. */
        public param: number;

        /**
         * Encodes the specified Item message. Does not implicitly {@link ItemPto.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemPto.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link ItemPto.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemPto.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemPto.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemPto.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): ItemPto.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemPto.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace TestPto. */
export namespace TestPto {

    /** Properties of a C_TEST_ADD_ITEMS. */
    interface IC_TEST_ADD_ITEMS {

        /** C_TEST_ADD_ITEMS cmd */
        cmd?: (number|null);

        /** C_TEST_ADD_ITEMS scmd */
        scmd?: (number|null);

        /** C_TEST_ADD_ITEMS itemId */
        itemId?: (number|null);

        /** C_TEST_ADD_ITEMS count */
        count?: (number|null);
    }

    /** Represents a C_TEST_ADD_ITEMS. */
    class C_TEST_ADD_ITEMS implements IC_TEST_ADD_ITEMS {

        /**
         * Constructs a new C_TEST_ADD_ITEMS.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_ADD_ITEMS);

        /** C_TEST_ADD_ITEMS cmd. */
        public cmd: number;

        /** C_TEST_ADD_ITEMS scmd. */
        public scmd: number;

        /** C_TEST_ADD_ITEMS itemId. */
        public itemId: number;

        /** C_TEST_ADD_ITEMS count. */
        public count: number;

        /**
         * Encodes the specified C_TEST_ADD_ITEMS message. Does not implicitly {@link TestPto.C_TEST_ADD_ITEMS.verify|verify} messages.
         * @param message C_TEST_ADD_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_ADD_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_ADD_ITEMS message, length delimited. Does not implicitly {@link TestPto.C_TEST_ADD_ITEMS.verify|verify} messages.
         * @param message C_TEST_ADD_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_ADD_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_ADD_ITEMS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_ADD_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_ADD_ITEMS;

        /**
         * Decodes a C_TEST_ADD_ITEMS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_ADD_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_ADD_ITEMS;

        /**
         * Verifies a C_TEST_ADD_ITEMS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_ADD_ITEMS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_ADD_ITEMS
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_ADD_ITEMS;

        /**
         * Creates a plain object from a C_TEST_ADD_ITEMS message. Also converts values to other types if specified.
         * @param message C_TEST_ADD_ITEMS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_ADD_ITEMS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_ADD_ITEMS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_UPDATE_CODE. */
    interface IC_TEST_UPDATE_CODE {

        /** C_TEST_UPDATE_CODE cmd */
        cmd?: (number|null);

        /** C_TEST_UPDATE_CODE scmd */
        scmd?: (number|null);
    }

    /** Represents a C_TEST_UPDATE_CODE. */
    class C_TEST_UPDATE_CODE implements IC_TEST_UPDATE_CODE {

        /**
         * Constructs a new C_TEST_UPDATE_CODE.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_UPDATE_CODE);

        /** C_TEST_UPDATE_CODE cmd. */
        public cmd: number;

        /** C_TEST_UPDATE_CODE scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_TEST_UPDATE_CODE message. Does not implicitly {@link TestPto.C_TEST_UPDATE_CODE.verify|verify} messages.
         * @param message C_TEST_UPDATE_CODE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_UPDATE_CODE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_UPDATE_CODE message, length delimited. Does not implicitly {@link TestPto.C_TEST_UPDATE_CODE.verify|verify} messages.
         * @param message C_TEST_UPDATE_CODE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_UPDATE_CODE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_UPDATE_CODE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_UPDATE_CODE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_UPDATE_CODE;

        /**
         * Decodes a C_TEST_UPDATE_CODE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_UPDATE_CODE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_UPDATE_CODE;

        /**
         * Verifies a C_TEST_UPDATE_CODE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_UPDATE_CODE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_UPDATE_CODE
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_UPDATE_CODE;

        /**
         * Creates a plain object from a C_TEST_UPDATE_CODE message. Also converts values to other types if specified.
         * @param message C_TEST_UPDATE_CODE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_UPDATE_CODE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_UPDATE_CODE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_MODIFY_SERVER_TIME. */
    interface IC_TEST_MODIFY_SERVER_TIME {

        /** C_TEST_MODIFY_SERVER_TIME cmd */
        cmd?: (number|null);

        /** C_TEST_MODIFY_SERVER_TIME scmd */
        scmd?: (number|null);

        /** C_TEST_MODIFY_SERVER_TIME time */
        time?: (number|null);
    }

    /** Represents a C_TEST_MODIFY_SERVER_TIME. */
    class C_TEST_MODIFY_SERVER_TIME implements IC_TEST_MODIFY_SERVER_TIME {

        /**
         * Constructs a new C_TEST_MODIFY_SERVER_TIME.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_MODIFY_SERVER_TIME);

        /** C_TEST_MODIFY_SERVER_TIME cmd. */
        public cmd: number;

        /** C_TEST_MODIFY_SERVER_TIME scmd. */
        public scmd: number;

        /** C_TEST_MODIFY_SERVER_TIME time. */
        public time: number;

        /**
         * Encodes the specified C_TEST_MODIFY_SERVER_TIME message. Does not implicitly {@link TestPto.C_TEST_MODIFY_SERVER_TIME.verify|verify} messages.
         * @param message C_TEST_MODIFY_SERVER_TIME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_MODIFY_SERVER_TIME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_MODIFY_SERVER_TIME message, length delimited. Does not implicitly {@link TestPto.C_TEST_MODIFY_SERVER_TIME.verify|verify} messages.
         * @param message C_TEST_MODIFY_SERVER_TIME message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_MODIFY_SERVER_TIME, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_MODIFY_SERVER_TIME message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_MODIFY_SERVER_TIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_MODIFY_SERVER_TIME;

        /**
         * Decodes a C_TEST_MODIFY_SERVER_TIME message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_MODIFY_SERVER_TIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_MODIFY_SERVER_TIME;

        /**
         * Verifies a C_TEST_MODIFY_SERVER_TIME message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_MODIFY_SERVER_TIME message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_MODIFY_SERVER_TIME
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_MODIFY_SERVER_TIME;

        /**
         * Creates a plain object from a C_TEST_MODIFY_SERVER_TIME message. Also converts values to other types if specified.
         * @param message C_TEST_MODIFY_SERVER_TIME
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_MODIFY_SERVER_TIME, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_MODIFY_SERVER_TIME to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_RESTART_SERVER. */
    interface IC_TEST_RESTART_SERVER {

        /** C_TEST_RESTART_SERVER cmd */
        cmd?: (number|null);

        /** C_TEST_RESTART_SERVER scmd */
        scmd?: (number|null);
    }

    /** Represents a C_TEST_RESTART_SERVER. */
    class C_TEST_RESTART_SERVER implements IC_TEST_RESTART_SERVER {

        /**
         * Constructs a new C_TEST_RESTART_SERVER.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_RESTART_SERVER);

        /** C_TEST_RESTART_SERVER cmd. */
        public cmd: number;

        /** C_TEST_RESTART_SERVER scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_TEST_RESTART_SERVER message. Does not implicitly {@link TestPto.C_TEST_RESTART_SERVER.verify|verify} messages.
         * @param message C_TEST_RESTART_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_RESTART_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_RESTART_SERVER message, length delimited. Does not implicitly {@link TestPto.C_TEST_RESTART_SERVER.verify|verify} messages.
         * @param message C_TEST_RESTART_SERVER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_RESTART_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_RESTART_SERVER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_RESTART_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_RESTART_SERVER;

        /**
         * Decodes a C_TEST_RESTART_SERVER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_RESTART_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_RESTART_SERVER;

        /**
         * Verifies a C_TEST_RESTART_SERVER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_RESTART_SERVER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_RESTART_SERVER
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_RESTART_SERVER;

        /**
         * Creates a plain object from a C_TEST_RESTART_SERVER message. Also converts values to other types if specified.
         * @param message C_TEST_RESTART_SERVER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_RESTART_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_RESTART_SERVER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_SERVER_TIME_INFO. */
    interface IC_TEST_SERVER_TIME_INFO {

        /** C_TEST_SERVER_TIME_INFO cmd */
        cmd?: (number|null);

        /** C_TEST_SERVER_TIME_INFO scmd */
        scmd?: (number|null);
    }

    /** Represents a C_TEST_SERVER_TIME_INFO. */
    class C_TEST_SERVER_TIME_INFO implements IC_TEST_SERVER_TIME_INFO {

        /**
         * Constructs a new C_TEST_SERVER_TIME_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_SERVER_TIME_INFO);

        /** C_TEST_SERVER_TIME_INFO cmd. */
        public cmd: number;

        /** C_TEST_SERVER_TIME_INFO scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_TEST_SERVER_TIME_INFO message. Does not implicitly {@link TestPto.C_TEST_SERVER_TIME_INFO.verify|verify} messages.
         * @param message C_TEST_SERVER_TIME_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_SERVER_TIME_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_SERVER_TIME_INFO message, length delimited. Does not implicitly {@link TestPto.C_TEST_SERVER_TIME_INFO.verify|verify} messages.
         * @param message C_TEST_SERVER_TIME_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_SERVER_TIME_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_SERVER_TIME_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_SERVER_TIME_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_SERVER_TIME_INFO;

        /**
         * Decodes a C_TEST_SERVER_TIME_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_SERVER_TIME_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_SERVER_TIME_INFO;

        /**
         * Verifies a C_TEST_SERVER_TIME_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_SERVER_TIME_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_SERVER_TIME_INFO
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_SERVER_TIME_INFO;

        /**
         * Creates a plain object from a C_TEST_SERVER_TIME_INFO message. Also converts values to other types if specified.
         * @param message C_TEST_SERVER_TIME_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_SERVER_TIME_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_SERVER_TIME_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_TEST_SERVER_TIME_INFO. */
    interface IS_TEST_SERVER_TIME_INFO {

        /** S_TEST_SERVER_TIME_INFO cmd */
        cmd?: (number|null);

        /** S_TEST_SERVER_TIME_INFO scmd */
        scmd?: (number|null);

        /** S_TEST_SERVER_TIME_INFO serverTime */
        serverTime?: (number|null);

        /** S_TEST_SERVER_TIME_INFO openServerDay */
        openServerDay?: (number|null);

        /** S_TEST_SERVER_TIME_INFO openServerWeek */
        openServerWeek?: (number|null);
    }

    /** Represents a S_TEST_SERVER_TIME_INFO. */
    class S_TEST_SERVER_TIME_INFO implements IS_TEST_SERVER_TIME_INFO {

        /**
         * Constructs a new S_TEST_SERVER_TIME_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IS_TEST_SERVER_TIME_INFO);

        /** S_TEST_SERVER_TIME_INFO cmd. */
        public cmd: number;

        /** S_TEST_SERVER_TIME_INFO scmd. */
        public scmd: number;

        /** S_TEST_SERVER_TIME_INFO serverTime. */
        public serverTime: number;

        /** S_TEST_SERVER_TIME_INFO openServerDay. */
        public openServerDay: number;

        /** S_TEST_SERVER_TIME_INFO openServerWeek. */
        public openServerWeek: number;

        /**
         * Encodes the specified S_TEST_SERVER_TIME_INFO message. Does not implicitly {@link TestPto.S_TEST_SERVER_TIME_INFO.verify|verify} messages.
         * @param message S_TEST_SERVER_TIME_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IS_TEST_SERVER_TIME_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_TEST_SERVER_TIME_INFO message, length delimited. Does not implicitly {@link TestPto.S_TEST_SERVER_TIME_INFO.verify|verify} messages.
         * @param message S_TEST_SERVER_TIME_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IS_TEST_SERVER_TIME_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_TEST_SERVER_TIME_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_TEST_SERVER_TIME_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.S_TEST_SERVER_TIME_INFO;

        /**
         * Decodes a S_TEST_SERVER_TIME_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_TEST_SERVER_TIME_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.S_TEST_SERVER_TIME_INFO;

        /**
         * Verifies a S_TEST_SERVER_TIME_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_TEST_SERVER_TIME_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_TEST_SERVER_TIME_INFO
         */
        public static fromObject(object: { [k: string]: any }): TestPto.S_TEST_SERVER_TIME_INFO;

        /**
         * Creates a plain object from a S_TEST_SERVER_TIME_INFO message. Also converts values to other types if specified.
         * @param message S_TEST_SERVER_TIME_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.S_TEST_SERVER_TIME_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_TEST_SERVER_TIME_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_CLEAR_ACCOUNT_DATA. */
    interface IC_TEST_CLEAR_ACCOUNT_DATA {

        /** C_TEST_CLEAR_ACCOUNT_DATA cmd */
        cmd?: (number|null);

        /** C_TEST_CLEAR_ACCOUNT_DATA scmd */
        scmd?: (number|null);
    }

    /** Represents a C_TEST_CLEAR_ACCOUNT_DATA. */
    class C_TEST_CLEAR_ACCOUNT_DATA implements IC_TEST_CLEAR_ACCOUNT_DATA {

        /**
         * Constructs a new C_TEST_CLEAR_ACCOUNT_DATA.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_CLEAR_ACCOUNT_DATA);

        /** C_TEST_CLEAR_ACCOUNT_DATA cmd. */
        public cmd: number;

        /** C_TEST_CLEAR_ACCOUNT_DATA scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_TEST_CLEAR_ACCOUNT_DATA message. Does not implicitly {@link TestPto.C_TEST_CLEAR_ACCOUNT_DATA.verify|verify} messages.
         * @param message C_TEST_CLEAR_ACCOUNT_DATA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_CLEAR_ACCOUNT_DATA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_CLEAR_ACCOUNT_DATA message, length delimited. Does not implicitly {@link TestPto.C_TEST_CLEAR_ACCOUNT_DATA.verify|verify} messages.
         * @param message C_TEST_CLEAR_ACCOUNT_DATA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_CLEAR_ACCOUNT_DATA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_CLEAR_ACCOUNT_DATA message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_CLEAR_ACCOUNT_DATA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_CLEAR_ACCOUNT_DATA;

        /**
         * Decodes a C_TEST_CLEAR_ACCOUNT_DATA message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_CLEAR_ACCOUNT_DATA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_CLEAR_ACCOUNT_DATA;

        /**
         * Verifies a C_TEST_CLEAR_ACCOUNT_DATA message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_CLEAR_ACCOUNT_DATA message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_CLEAR_ACCOUNT_DATA
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_CLEAR_ACCOUNT_DATA;

        /**
         * Creates a plain object from a C_TEST_CLEAR_ACCOUNT_DATA message. Also converts values to other types if specified.
         * @param message C_TEST_CLEAR_ACCOUNT_DATA
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_CLEAR_ACCOUNT_DATA, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_CLEAR_ACCOUNT_DATA to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_SET_CREATE_DAY. */
    interface IC_TEST_SET_CREATE_DAY {

        /** C_TEST_SET_CREATE_DAY cmd */
        cmd?: (number|null);

        /** C_TEST_SET_CREATE_DAY scmd */
        scmd?: (number|null);

        /** C_TEST_SET_CREATE_DAY day */
        day?: (number|null);
    }

    /** Represents a C_TEST_SET_CREATE_DAY. */
    class C_TEST_SET_CREATE_DAY implements IC_TEST_SET_CREATE_DAY {

        /**
         * Constructs a new C_TEST_SET_CREATE_DAY.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_SET_CREATE_DAY);

        /** C_TEST_SET_CREATE_DAY cmd. */
        public cmd: number;

        /** C_TEST_SET_CREATE_DAY scmd. */
        public scmd: number;

        /** C_TEST_SET_CREATE_DAY day. */
        public day: number;

        /**
         * Encodes the specified C_TEST_SET_CREATE_DAY message. Does not implicitly {@link TestPto.C_TEST_SET_CREATE_DAY.verify|verify} messages.
         * @param message C_TEST_SET_CREATE_DAY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_SET_CREATE_DAY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_SET_CREATE_DAY message, length delimited. Does not implicitly {@link TestPto.C_TEST_SET_CREATE_DAY.verify|verify} messages.
         * @param message C_TEST_SET_CREATE_DAY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_SET_CREATE_DAY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_SET_CREATE_DAY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_SET_CREATE_DAY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_SET_CREATE_DAY;

        /**
         * Decodes a C_TEST_SET_CREATE_DAY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_SET_CREATE_DAY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_SET_CREATE_DAY;

        /**
         * Verifies a C_TEST_SET_CREATE_DAY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_SET_CREATE_DAY message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_SET_CREATE_DAY
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_SET_CREATE_DAY;

        /**
         * Creates a plain object from a C_TEST_SET_CREATE_DAY message. Also converts values to other types if specified.
         * @param message C_TEST_SET_CREATE_DAY
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_SET_CREATE_DAY, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_SET_CREATE_DAY to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_ADD_TEST_EMAIL. */
    interface IC_ADD_TEST_EMAIL {

        /** C_ADD_TEST_EMAIL cmd */
        cmd?: (number|null);

        /** C_ADD_TEST_EMAIL scmd */
        scmd?: (number|null);
    }

    /** Represents a C_ADD_TEST_EMAIL. */
    class C_ADD_TEST_EMAIL implements IC_ADD_TEST_EMAIL {

        /**
         * Constructs a new C_ADD_TEST_EMAIL.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_ADD_TEST_EMAIL);

        /** C_ADD_TEST_EMAIL cmd. */
        public cmd: number;

        /** C_ADD_TEST_EMAIL scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_ADD_TEST_EMAIL message. Does not implicitly {@link TestPto.C_ADD_TEST_EMAIL.verify|verify} messages.
         * @param message C_ADD_TEST_EMAIL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_ADD_TEST_EMAIL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_ADD_TEST_EMAIL message, length delimited. Does not implicitly {@link TestPto.C_ADD_TEST_EMAIL.verify|verify} messages.
         * @param message C_ADD_TEST_EMAIL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_ADD_TEST_EMAIL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_ADD_TEST_EMAIL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_ADD_TEST_EMAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_ADD_TEST_EMAIL;

        /**
         * Decodes a C_ADD_TEST_EMAIL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_ADD_TEST_EMAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_ADD_TEST_EMAIL;

        /**
         * Verifies a C_ADD_TEST_EMAIL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_ADD_TEST_EMAIL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_ADD_TEST_EMAIL
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_ADD_TEST_EMAIL;

        /**
         * Creates a plain object from a C_ADD_TEST_EMAIL message. Also converts values to other types if specified.
         * @param message C_ADD_TEST_EMAIL
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_ADD_TEST_EMAIL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_ADD_TEST_EMAIL to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_TEST_ADD_BATCH_ITEMS. */
    interface IC_TEST_ADD_BATCH_ITEMS {

        /** C_TEST_ADD_BATCH_ITEMS cmd */
        cmd?: (number|null);

        /** C_TEST_ADD_BATCH_ITEMS scmd */
        scmd?: (number|null);

        /** C_TEST_ADD_BATCH_ITEMS items */
        items?: (ItemPto.IItem[]|null);
    }

    /** Represents a C_TEST_ADD_BATCH_ITEMS. */
    class C_TEST_ADD_BATCH_ITEMS implements IC_TEST_ADD_BATCH_ITEMS {

        /**
         * Constructs a new C_TEST_ADD_BATCH_ITEMS.
         * @param [properties] Properties to set
         */
        constructor(properties?: TestPto.IC_TEST_ADD_BATCH_ITEMS);

        /** C_TEST_ADD_BATCH_ITEMS cmd. */
        public cmd: number;

        /** C_TEST_ADD_BATCH_ITEMS scmd. */
        public scmd: number;

        /** C_TEST_ADD_BATCH_ITEMS items. */
        public items: ItemPto.IItem[];

        /**
         * Encodes the specified C_TEST_ADD_BATCH_ITEMS message. Does not implicitly {@link TestPto.C_TEST_ADD_BATCH_ITEMS.verify|verify} messages.
         * @param message C_TEST_ADD_BATCH_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TestPto.IC_TEST_ADD_BATCH_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_TEST_ADD_BATCH_ITEMS message, length delimited. Does not implicitly {@link TestPto.C_TEST_ADD_BATCH_ITEMS.verify|verify} messages.
         * @param message C_TEST_ADD_BATCH_ITEMS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TestPto.IC_TEST_ADD_BATCH_ITEMS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_TEST_ADD_BATCH_ITEMS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_TEST_ADD_BATCH_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestPto.C_TEST_ADD_BATCH_ITEMS;

        /**
         * Decodes a C_TEST_ADD_BATCH_ITEMS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_TEST_ADD_BATCH_ITEMS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestPto.C_TEST_ADD_BATCH_ITEMS;

        /**
         * Verifies a C_TEST_ADD_BATCH_ITEMS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_TEST_ADD_BATCH_ITEMS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_TEST_ADD_BATCH_ITEMS
         */
        public static fromObject(object: { [k: string]: any }): TestPto.C_TEST_ADD_BATCH_ITEMS;

        /**
         * Creates a plain object from a C_TEST_ADD_BATCH_ITEMS message. Also converts values to other types if specified.
         * @param message C_TEST_ADD_BATCH_ITEMS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TestPto.C_TEST_ADD_BATCH_ITEMS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_TEST_ADD_BATCH_ITEMS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace EmailPto. */
export namespace EmailPto {

    /** Properties of a C_EMAIL_INFO. */
    interface IC_EMAIL_INFO {

        /** C_EMAIL_INFO cmd */
        cmd?: (number|null);

        /** C_EMAIL_INFO scmd */
        scmd?: (number|null);
    }

    /** Represents a C_EMAIL_INFO. */
    class C_EMAIL_INFO implements IC_EMAIL_INFO {

        /**
         * Constructs a new C_EMAIL_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: EmailPto.IC_EMAIL_INFO);

        /** C_EMAIL_INFO cmd. */
        public cmd: number;

        /** C_EMAIL_INFO scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_EMAIL_INFO message. Does not implicitly {@link EmailPto.C_EMAIL_INFO.verify|verify} messages.
         * @param message C_EMAIL_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: EmailPto.IC_EMAIL_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_EMAIL_INFO message, length delimited. Does not implicitly {@link EmailPto.C_EMAIL_INFO.verify|verify} messages.
         * @param message C_EMAIL_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: EmailPto.IC_EMAIL_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_EMAIL_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_EMAIL_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmailPto.C_EMAIL_INFO;

        /**
         * Decodes a C_EMAIL_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_EMAIL_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailPto.C_EMAIL_INFO;

        /**
         * Verifies a C_EMAIL_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_EMAIL_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_EMAIL_INFO
         */
        public static fromObject(object: { [k: string]: any }): EmailPto.C_EMAIL_INFO;

        /**
         * Creates a plain object from a C_EMAIL_INFO message. Also converts values to other types if specified.
         * @param message C_EMAIL_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EmailPto.C_EMAIL_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_EMAIL_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_EMAIL_INFO. */
    interface IS_EMAIL_INFO {

        /** S_EMAIL_INFO cmd */
        cmd?: (number|null);

        /** S_EMAIL_INFO scmd */
        scmd?: (number|null);

        /** S_EMAIL_INFO emailMap */
        emailMap?: ({ [k: string]: EmailPto.IEmail }|null);
    }

    /** Represents a S_EMAIL_INFO. */
    class S_EMAIL_INFO implements IS_EMAIL_INFO {

        /**
         * Constructs a new S_EMAIL_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: EmailPto.IS_EMAIL_INFO);

        /** S_EMAIL_INFO cmd. */
        public cmd: number;

        /** S_EMAIL_INFO scmd. */
        public scmd: number;

        /** S_EMAIL_INFO emailMap. */
        public emailMap: { [k: string]: EmailPto.IEmail };

        /**
         * Encodes the specified S_EMAIL_INFO message. Does not implicitly {@link EmailPto.S_EMAIL_INFO.verify|verify} messages.
         * @param message S_EMAIL_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: EmailPto.IS_EMAIL_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_EMAIL_INFO message, length delimited. Does not implicitly {@link EmailPto.S_EMAIL_INFO.verify|verify} messages.
         * @param message S_EMAIL_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: EmailPto.IS_EMAIL_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_EMAIL_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_EMAIL_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmailPto.S_EMAIL_INFO;

        /**
         * Decodes a S_EMAIL_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_EMAIL_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailPto.S_EMAIL_INFO;

        /**
         * Verifies a S_EMAIL_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_EMAIL_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_EMAIL_INFO
         */
        public static fromObject(object: { [k: string]: any }): EmailPto.S_EMAIL_INFO;

        /**
         * Creates a plain object from a S_EMAIL_INFO message. Also converts values to other types if specified.
         * @param message S_EMAIL_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EmailPto.S_EMAIL_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_EMAIL_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_READ_EMAIL. */
    interface IC_READ_EMAIL {

        /** C_READ_EMAIL cmd */
        cmd?: (number|null);

        /** C_READ_EMAIL scmd */
        scmd?: (number|null);

        /** C_READ_EMAIL emailIds */
        emailIds?: (number[]|null);
    }

    /** Represents a C_READ_EMAIL. */
    class C_READ_EMAIL implements IC_READ_EMAIL {

        /**
         * Constructs a new C_READ_EMAIL.
         * @param [properties] Properties to set
         */
        constructor(properties?: EmailPto.IC_READ_EMAIL);

        /** C_READ_EMAIL cmd. */
        public cmd: number;

        /** C_READ_EMAIL scmd. */
        public scmd: number;

        /** C_READ_EMAIL emailIds. */
        public emailIds: number[];

        /**
         * Encodes the specified C_READ_EMAIL message. Does not implicitly {@link EmailPto.C_READ_EMAIL.verify|verify} messages.
         * @param message C_READ_EMAIL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: EmailPto.IC_READ_EMAIL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_READ_EMAIL message, length delimited. Does not implicitly {@link EmailPto.C_READ_EMAIL.verify|verify} messages.
         * @param message C_READ_EMAIL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: EmailPto.IC_READ_EMAIL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_READ_EMAIL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_READ_EMAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmailPto.C_READ_EMAIL;

        /**
         * Decodes a C_READ_EMAIL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_READ_EMAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailPto.C_READ_EMAIL;

        /**
         * Verifies a C_READ_EMAIL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_READ_EMAIL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_READ_EMAIL
         */
        public static fromObject(object: { [k: string]: any }): EmailPto.C_READ_EMAIL;

        /**
         * Creates a plain object from a C_READ_EMAIL message. Also converts values to other types if specified.
         * @param message C_READ_EMAIL
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EmailPto.C_READ_EMAIL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_READ_EMAIL to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_READ_EMAIL. */
    interface IS_READ_EMAIL {

        /** S_READ_EMAIL cmd */
        cmd?: (number|null);

        /** S_READ_EMAIL scmd */
        scmd?: (number|null);

        /** S_READ_EMAIL emails */
        emails?: (EmailPto.IEmail[]|null);

        /** S_READ_EMAIL rewards */
        rewards?: (ItemPto.IItem[]|null);
    }

    /** Represents a S_READ_EMAIL. */
    class S_READ_EMAIL implements IS_READ_EMAIL {

        /**
         * Constructs a new S_READ_EMAIL.
         * @param [properties] Properties to set
         */
        constructor(properties?: EmailPto.IS_READ_EMAIL);

        /** S_READ_EMAIL cmd. */
        public cmd: number;

        /** S_READ_EMAIL scmd. */
        public scmd: number;

        /** S_READ_EMAIL emails. */
        public emails: EmailPto.IEmail[];

        /** S_READ_EMAIL rewards. */
        public rewards: ItemPto.IItem[];

        /**
         * Encodes the specified S_READ_EMAIL message. Does not implicitly {@link EmailPto.S_READ_EMAIL.verify|verify} messages.
         * @param message S_READ_EMAIL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: EmailPto.IS_READ_EMAIL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_READ_EMAIL message, length delimited. Does not implicitly {@link EmailPto.S_READ_EMAIL.verify|verify} messages.
         * @param message S_READ_EMAIL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: EmailPto.IS_READ_EMAIL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_READ_EMAIL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_READ_EMAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmailPto.S_READ_EMAIL;

        /**
         * Decodes a S_READ_EMAIL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_READ_EMAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailPto.S_READ_EMAIL;

        /**
         * Verifies a S_READ_EMAIL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_READ_EMAIL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_READ_EMAIL
         */
        public static fromObject(object: { [k: string]: any }): EmailPto.S_READ_EMAIL;

        /**
         * Creates a plain object from a S_READ_EMAIL message. Also converts values to other types if specified.
         * @param message S_READ_EMAIL
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EmailPto.S_READ_EMAIL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_READ_EMAIL to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_DELETE_EMAILS. */
    interface IC_DELETE_EMAILS {

        /** C_DELETE_EMAILS cmd */
        cmd?: (number|null);

        /** C_DELETE_EMAILS scmd */
        scmd?: (number|null);

        /** C_DELETE_EMAILS emailIds */
        emailIds?: (number[]|null);
    }

    /** Represents a C_DELETE_EMAILS. */
    class C_DELETE_EMAILS implements IC_DELETE_EMAILS {

        /**
         * Constructs a new C_DELETE_EMAILS.
         * @param [properties] Properties to set
         */
        constructor(properties?: EmailPto.IC_DELETE_EMAILS);

        /** C_DELETE_EMAILS cmd. */
        public cmd: number;

        /** C_DELETE_EMAILS scmd. */
        public scmd: number;

        /** C_DELETE_EMAILS emailIds. */
        public emailIds: number[];

        /**
         * Encodes the specified C_DELETE_EMAILS message. Does not implicitly {@link EmailPto.C_DELETE_EMAILS.verify|verify} messages.
         * @param message C_DELETE_EMAILS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: EmailPto.IC_DELETE_EMAILS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_DELETE_EMAILS message, length delimited. Does not implicitly {@link EmailPto.C_DELETE_EMAILS.verify|verify} messages.
         * @param message C_DELETE_EMAILS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: EmailPto.IC_DELETE_EMAILS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_DELETE_EMAILS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DELETE_EMAILS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmailPto.C_DELETE_EMAILS;

        /**
         * Decodes a C_DELETE_EMAILS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_DELETE_EMAILS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailPto.C_DELETE_EMAILS;

        /**
         * Verifies a C_DELETE_EMAILS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_DELETE_EMAILS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_DELETE_EMAILS
         */
        public static fromObject(object: { [k: string]: any }): EmailPto.C_DELETE_EMAILS;

        /**
         * Creates a plain object from a C_DELETE_EMAILS message. Also converts values to other types if specified.
         * @param message C_DELETE_EMAILS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EmailPto.C_DELETE_EMAILS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_DELETE_EMAILS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_DELETE_EMAILS. */
    interface IS_DELETE_EMAILS {

        /** S_DELETE_EMAILS cmd */
        cmd?: (number|null);

        /** S_DELETE_EMAILS scmd */
        scmd?: (number|null);

        /** S_DELETE_EMAILS emailIds */
        emailIds?: (number[]|null);
    }

    /** Represents a S_DELETE_EMAILS. */
    class S_DELETE_EMAILS implements IS_DELETE_EMAILS {

        /**
         * Constructs a new S_DELETE_EMAILS.
         * @param [properties] Properties to set
         */
        constructor(properties?: EmailPto.IS_DELETE_EMAILS);

        /** S_DELETE_EMAILS cmd. */
        public cmd: number;

        /** S_DELETE_EMAILS scmd. */
        public scmd: number;

        /** S_DELETE_EMAILS emailIds. */
        public emailIds: number[];

        /**
         * Encodes the specified S_DELETE_EMAILS message. Does not implicitly {@link EmailPto.S_DELETE_EMAILS.verify|verify} messages.
         * @param message S_DELETE_EMAILS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: EmailPto.IS_DELETE_EMAILS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_DELETE_EMAILS message, length delimited. Does not implicitly {@link EmailPto.S_DELETE_EMAILS.verify|verify} messages.
         * @param message S_DELETE_EMAILS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: EmailPto.IS_DELETE_EMAILS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DELETE_EMAILS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DELETE_EMAILS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmailPto.S_DELETE_EMAILS;

        /**
         * Decodes a S_DELETE_EMAILS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_DELETE_EMAILS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailPto.S_DELETE_EMAILS;

        /**
         * Verifies a S_DELETE_EMAILS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_DELETE_EMAILS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_DELETE_EMAILS
         */
        public static fromObject(object: { [k: string]: any }): EmailPto.S_DELETE_EMAILS;

        /**
         * Creates a plain object from a S_DELETE_EMAILS message. Also converts values to other types if specified.
         * @param message S_DELETE_EMAILS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EmailPto.S_DELETE_EMAILS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_DELETE_EMAILS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ON_NEW_EMAIL. */
    interface IS_ON_NEW_EMAIL {

        /** S_ON_NEW_EMAIL cmd */
        cmd?: (number|null);

        /** S_ON_NEW_EMAIL scmd */
        scmd?: (number|null);

        /** S_ON_NEW_EMAIL email */
        email?: (EmailPto.IEmail|null);
    }

    /** Represents a S_ON_NEW_EMAIL. */
    class S_ON_NEW_EMAIL implements IS_ON_NEW_EMAIL {

        /**
         * Constructs a new S_ON_NEW_EMAIL.
         * @param [properties] Properties to set
         */
        constructor(properties?: EmailPto.IS_ON_NEW_EMAIL);

        /** S_ON_NEW_EMAIL cmd. */
        public cmd: number;

        /** S_ON_NEW_EMAIL scmd. */
        public scmd: number;

        /** S_ON_NEW_EMAIL email. */
        public email?: (EmailPto.IEmail|null);

        /**
         * Encodes the specified S_ON_NEW_EMAIL message. Does not implicitly {@link EmailPto.S_ON_NEW_EMAIL.verify|verify} messages.
         * @param message S_ON_NEW_EMAIL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: EmailPto.IS_ON_NEW_EMAIL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ON_NEW_EMAIL message, length delimited. Does not implicitly {@link EmailPto.S_ON_NEW_EMAIL.verify|verify} messages.
         * @param message S_ON_NEW_EMAIL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: EmailPto.IS_ON_NEW_EMAIL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ON_NEW_EMAIL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ON_NEW_EMAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmailPto.S_ON_NEW_EMAIL;

        /**
         * Decodes a S_ON_NEW_EMAIL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ON_NEW_EMAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailPto.S_ON_NEW_EMAIL;

        /**
         * Verifies a S_ON_NEW_EMAIL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ON_NEW_EMAIL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ON_NEW_EMAIL
         */
        public static fromObject(object: { [k: string]: any }): EmailPto.S_ON_NEW_EMAIL;

        /**
         * Creates a plain object from a S_ON_NEW_EMAIL message. Also converts values to other types if specified.
         * @param message S_ON_NEW_EMAIL
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EmailPto.S_ON_NEW_EMAIL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ON_NEW_EMAIL to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Email. */
    interface IEmail {

        /** Email id */
        id?: (number|null);

        /** Email configId */
        configId?: (number|null);

        /** Email params */
        params?: (string|null);

        /** Email items */
        items?: (ItemPto.IItem[]|null);

        /** Email isRead */
        isRead?: (boolean|null);

        /** Email sendTime */
        sendTime?: (number|null);

        /** Email expireTime */
        expireTime?: (number|null);
    }

    /** Represents an Email. */
    class Email implements IEmail {

        /**
         * Constructs a new Email.
         * @param [properties] Properties to set
         */
        constructor(properties?: EmailPto.IEmail);

        /** Email id. */
        public id: number;

        /** Email configId. */
        public configId: number;

        /** Email params. */
        public params: string;

        /** Email items. */
        public items: ItemPto.IItem[];

        /** Email isRead. */
        public isRead: boolean;

        /** Email sendTime. */
        public sendTime: number;

        /** Email expireTime. */
        public expireTime: number;

        /**
         * Encodes the specified Email message. Does not implicitly {@link EmailPto.Email.verify|verify} messages.
         * @param message Email message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: EmailPto.IEmail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Email message, length delimited. Does not implicitly {@link EmailPto.Email.verify|verify} messages.
         * @param message Email message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: EmailPto.IEmail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Email message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Email
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmailPto.Email;

        /**
         * Decodes an Email message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Email
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailPto.Email;

        /**
         * Verifies an Email message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Email message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Email
         */
        public static fromObject(object: { [k: string]: any }): EmailPto.Email;

        /**
         * Creates a plain object from an Email message. Also converts values to other types if specified.
         * @param message Email
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EmailPto.Email, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Email to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace FriendPto. */
export namespace FriendPto {

    /** Properties of a C_FRIEND_INFO. */
    interface IC_FRIEND_INFO {

        /** C_FRIEND_INFO cmd */
        cmd?: (number|null);

        /** C_FRIEND_INFO scmd */
        scmd?: (number|null);
    }

    /** Represents a C_FRIEND_INFO. */
    class C_FRIEND_INFO implements IC_FRIEND_INFO {

        /**
         * Constructs a new C_FRIEND_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_FRIEND_INFO);

        /** C_FRIEND_INFO cmd. */
        public cmd: number;

        /** C_FRIEND_INFO scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_FRIEND_INFO message. Does not implicitly {@link FriendPto.C_FRIEND_INFO.verify|verify} messages.
         * @param message C_FRIEND_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_FRIEND_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_FRIEND_INFO message, length delimited. Does not implicitly {@link FriendPto.C_FRIEND_INFO.verify|verify} messages.
         * @param message C_FRIEND_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_FRIEND_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_FRIEND_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_FRIEND_INFO;

        /**
         * Decodes a C_FRIEND_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_FRIEND_INFO;

        /**
         * Verifies a C_FRIEND_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_FRIEND_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_FRIEND_INFO
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_FRIEND_INFO;

        /**
         * Creates a plain object from a C_FRIEND_INFO message. Also converts values to other types if specified.
         * @param message C_FRIEND_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_FRIEND_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_FRIEND_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_FRIEND_INFO. */
    interface IS_FRIEND_INFO {

        /** S_FRIEND_INFO cmd */
        cmd?: (number|null);

        /** S_FRIEND_INFO scmd */
        scmd?: (number|null);

        /** S_FRIEND_INFO friendList */
        friendList?: (FriendPto.IFriend[]|null);

        /** S_FRIEND_INFO friendRequestList */
        friendRequestList?: (FriendPto.IFriendRequest[]|null);

        /** S_FRIEND_INFO blockList */
        blockList?: (FriendPto.IFriend[]|null);

        /** S_FRIEND_INFO sendGiftRecords */
        sendGiftRecords?: (string[]|null);

        /** S_FRIEND_INFO friendsGiveTimes */
        friendsGiveTimes?: (number|null);

        /** S_FRIEND_INFO friendGiftUserIds */
        friendGiftUserIds?: (string[]|null);
    }

    /** Represents a S_FRIEND_INFO. */
    class S_FRIEND_INFO implements IS_FRIEND_INFO {

        /**
         * Constructs a new S_FRIEND_INFO.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_FRIEND_INFO);

        /** S_FRIEND_INFO cmd. */
        public cmd: number;

        /** S_FRIEND_INFO scmd. */
        public scmd: number;

        /** S_FRIEND_INFO friendList. */
        public friendList: FriendPto.IFriend[];

        /** S_FRIEND_INFO friendRequestList. */
        public friendRequestList: FriendPto.IFriendRequest[];

        /** S_FRIEND_INFO blockList. */
        public blockList: FriendPto.IFriend[];

        /** S_FRIEND_INFO sendGiftRecords. */
        public sendGiftRecords: string[];

        /** S_FRIEND_INFO friendsGiveTimes. */
        public friendsGiveTimes: number;

        /** S_FRIEND_INFO friendGiftUserIds. */
        public friendGiftUserIds: string[];

        /**
         * Encodes the specified S_FRIEND_INFO message. Does not implicitly {@link FriendPto.S_FRIEND_INFO.verify|verify} messages.
         * @param message S_FRIEND_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_FRIEND_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_FRIEND_INFO message, length delimited. Does not implicitly {@link FriendPto.S_FRIEND_INFO.verify|verify} messages.
         * @param message S_FRIEND_INFO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_FRIEND_INFO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_FRIEND_INFO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_FRIEND_INFO;

        /**
         * Decodes a S_FRIEND_INFO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_FRIEND_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_FRIEND_INFO;

        /**
         * Verifies a S_FRIEND_INFO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_FRIEND_INFO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_FRIEND_INFO
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_FRIEND_INFO;

        /**
         * Creates a plain object from a S_FRIEND_INFO message. Also converts values to other types if specified.
         * @param message S_FRIEND_INFO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_FRIEND_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_FRIEND_INFO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_SEARCH_PLAYER. */
    interface IC_SEARCH_PLAYER {

        /** C_SEARCH_PLAYER cmd */
        cmd?: (number|null);

        /** C_SEARCH_PLAYER scmd */
        scmd?: (number|null);

        /** C_SEARCH_PLAYER searchKey */
        searchKey?: (string|null);
    }

    /** Represents a C_SEARCH_PLAYER. */
    class C_SEARCH_PLAYER implements IC_SEARCH_PLAYER {

        /**
         * Constructs a new C_SEARCH_PLAYER.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_SEARCH_PLAYER);

        /** C_SEARCH_PLAYER cmd. */
        public cmd: number;

        /** C_SEARCH_PLAYER scmd. */
        public scmd: number;

        /** C_SEARCH_PLAYER searchKey. */
        public searchKey: string;

        /**
         * Encodes the specified C_SEARCH_PLAYER message. Does not implicitly {@link FriendPto.C_SEARCH_PLAYER.verify|verify} messages.
         * @param message C_SEARCH_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_SEARCH_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SEARCH_PLAYER message, length delimited. Does not implicitly {@link FriendPto.C_SEARCH_PLAYER.verify|verify} messages.
         * @param message C_SEARCH_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_SEARCH_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SEARCH_PLAYER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SEARCH_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_SEARCH_PLAYER;

        /**
         * Decodes a C_SEARCH_PLAYER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SEARCH_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_SEARCH_PLAYER;

        /**
         * Verifies a C_SEARCH_PLAYER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SEARCH_PLAYER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SEARCH_PLAYER
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_SEARCH_PLAYER;

        /**
         * Creates a plain object from a C_SEARCH_PLAYER message. Also converts values to other types if specified.
         * @param message C_SEARCH_PLAYER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_SEARCH_PLAYER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SEARCH_PLAYER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_SEARCH_PLAYER. */
    interface IS_SEARCH_PLAYER {

        /** S_SEARCH_PLAYER cmd */
        cmd?: (number|null);

        /** S_SEARCH_PLAYER scmd */
        scmd?: (number|null);

        /** S_SEARCH_PLAYER player */
        player?: (FriendPto.IFriend|null);
    }

    /** Represents a S_SEARCH_PLAYER. */
    class S_SEARCH_PLAYER implements IS_SEARCH_PLAYER {

        /**
         * Constructs a new S_SEARCH_PLAYER.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_SEARCH_PLAYER);

        /** S_SEARCH_PLAYER cmd. */
        public cmd: number;

        /** S_SEARCH_PLAYER scmd. */
        public scmd: number;

        /** S_SEARCH_PLAYER player. */
        public player?: (FriendPto.IFriend|null);

        /**
         * Encodes the specified S_SEARCH_PLAYER message. Does not implicitly {@link FriendPto.S_SEARCH_PLAYER.verify|verify} messages.
         * @param message S_SEARCH_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_SEARCH_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_SEARCH_PLAYER message, length delimited. Does not implicitly {@link FriendPto.S_SEARCH_PLAYER.verify|verify} messages.
         * @param message S_SEARCH_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_SEARCH_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_SEARCH_PLAYER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SEARCH_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_SEARCH_PLAYER;

        /**
         * Decodes a S_SEARCH_PLAYER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_SEARCH_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_SEARCH_PLAYER;

        /**
         * Verifies a S_SEARCH_PLAYER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_SEARCH_PLAYER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_SEARCH_PLAYER
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_SEARCH_PLAYER;

        /**
         * Creates a plain object from a S_SEARCH_PLAYER message. Also converts values to other types if specified.
         * @param message S_SEARCH_PLAYER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_SEARCH_PLAYER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_SEARCH_PLAYER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_GET_POSSIBLE_FRIENDS. */
    interface IC_GET_POSSIBLE_FRIENDS {

        /** C_GET_POSSIBLE_FRIENDS cmd */
        cmd?: (number|null);

        /** C_GET_POSSIBLE_FRIENDS scmd */
        scmd?: (number|null);
    }

    /** Represents a C_GET_POSSIBLE_FRIENDS. */
    class C_GET_POSSIBLE_FRIENDS implements IC_GET_POSSIBLE_FRIENDS {

        /**
         * Constructs a new C_GET_POSSIBLE_FRIENDS.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_GET_POSSIBLE_FRIENDS);

        /** C_GET_POSSIBLE_FRIENDS cmd. */
        public cmd: number;

        /** C_GET_POSSIBLE_FRIENDS scmd. */
        public scmd: number;

        /**
         * Encodes the specified C_GET_POSSIBLE_FRIENDS message. Does not implicitly {@link FriendPto.C_GET_POSSIBLE_FRIENDS.verify|verify} messages.
         * @param message C_GET_POSSIBLE_FRIENDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_GET_POSSIBLE_FRIENDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GET_POSSIBLE_FRIENDS message, length delimited. Does not implicitly {@link FriendPto.C_GET_POSSIBLE_FRIENDS.verify|verify} messages.
         * @param message C_GET_POSSIBLE_FRIENDS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_GET_POSSIBLE_FRIENDS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GET_POSSIBLE_FRIENDS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GET_POSSIBLE_FRIENDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_GET_POSSIBLE_FRIENDS;

        /**
         * Decodes a C_GET_POSSIBLE_FRIENDS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GET_POSSIBLE_FRIENDS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_GET_POSSIBLE_FRIENDS;

        /**
         * Verifies a C_GET_POSSIBLE_FRIENDS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GET_POSSIBLE_FRIENDS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GET_POSSIBLE_FRIENDS
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_GET_POSSIBLE_FRIENDS;

        /**
         * Creates a plain object from a C_GET_POSSIBLE_FRIENDS message. Also converts values to other types if specified.
         * @param message C_GET_POSSIBLE_FRIENDS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_GET_POSSIBLE_FRIENDS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GET_POSSIBLE_FRIENDS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GET_POSSIBLE_FRIEND. */
    interface IS_GET_POSSIBLE_FRIEND {

        /** S_GET_POSSIBLE_FRIEND cmd */
        cmd?: (number|null);

        /** S_GET_POSSIBLE_FRIEND scmd */
        scmd?: (number|null);

        /** S_GET_POSSIBLE_FRIEND friendList */
        friendList?: (FriendPto.IFriend[]|null);
    }

    /** Represents a S_GET_POSSIBLE_FRIEND. */
    class S_GET_POSSIBLE_FRIEND implements IS_GET_POSSIBLE_FRIEND {

        /**
         * Constructs a new S_GET_POSSIBLE_FRIEND.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_GET_POSSIBLE_FRIEND);

        /** S_GET_POSSIBLE_FRIEND cmd. */
        public cmd: number;

        /** S_GET_POSSIBLE_FRIEND scmd. */
        public scmd: number;

        /** S_GET_POSSIBLE_FRIEND friendList. */
        public friendList: FriendPto.IFriend[];

        /**
         * Encodes the specified S_GET_POSSIBLE_FRIEND message. Does not implicitly {@link FriendPto.S_GET_POSSIBLE_FRIEND.verify|verify} messages.
         * @param message S_GET_POSSIBLE_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_GET_POSSIBLE_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GET_POSSIBLE_FRIEND message, length delimited. Does not implicitly {@link FriendPto.S_GET_POSSIBLE_FRIEND.verify|verify} messages.
         * @param message S_GET_POSSIBLE_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_GET_POSSIBLE_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GET_POSSIBLE_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GET_POSSIBLE_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_GET_POSSIBLE_FRIEND;

        /**
         * Decodes a S_GET_POSSIBLE_FRIEND message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GET_POSSIBLE_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_GET_POSSIBLE_FRIEND;

        /**
         * Verifies a S_GET_POSSIBLE_FRIEND message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GET_POSSIBLE_FRIEND message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GET_POSSIBLE_FRIEND
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_GET_POSSIBLE_FRIEND;

        /**
         * Creates a plain object from a S_GET_POSSIBLE_FRIEND message. Also converts values to other types if specified.
         * @param message S_GET_POSSIBLE_FRIEND
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_GET_POSSIBLE_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GET_POSSIBLE_FRIEND to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_REQ_ADD_FRIEND. */
    interface IC_REQ_ADD_FRIEND {

        /** C_REQ_ADD_FRIEND cmd */
        cmd?: (number|null);

        /** C_REQ_ADD_FRIEND scmd */
        scmd?: (number|null);

        /** C_REQ_ADD_FRIEND userId */
        userId?: (string|null);
    }

    /** Represents a C_REQ_ADD_FRIEND. */
    class C_REQ_ADD_FRIEND implements IC_REQ_ADD_FRIEND {

        /**
         * Constructs a new C_REQ_ADD_FRIEND.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_REQ_ADD_FRIEND);

        /** C_REQ_ADD_FRIEND cmd. */
        public cmd: number;

        /** C_REQ_ADD_FRIEND scmd. */
        public scmd: number;

        /** C_REQ_ADD_FRIEND userId. */
        public userId: string;

        /**
         * Encodes the specified C_REQ_ADD_FRIEND message. Does not implicitly {@link FriendPto.C_REQ_ADD_FRIEND.verify|verify} messages.
         * @param message C_REQ_ADD_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_REQ_ADD_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_REQ_ADD_FRIEND message, length delimited. Does not implicitly {@link FriendPto.C_REQ_ADD_FRIEND.verify|verify} messages.
         * @param message C_REQ_ADD_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_REQ_ADD_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_REQ_ADD_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_REQ_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_REQ_ADD_FRIEND;

        /**
         * Decodes a C_REQ_ADD_FRIEND message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_REQ_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_REQ_ADD_FRIEND;

        /**
         * Verifies a C_REQ_ADD_FRIEND message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_REQ_ADD_FRIEND message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_REQ_ADD_FRIEND
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_REQ_ADD_FRIEND;

        /**
         * Creates a plain object from a C_REQ_ADD_FRIEND message. Also converts values to other types if specified.
         * @param message C_REQ_ADD_FRIEND
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_REQ_ADD_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_REQ_ADD_FRIEND to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_REQ_ADD_FRIEND. */
    interface IS_REQ_ADD_FRIEND {

        /** S_REQ_ADD_FRIEND cmd */
        cmd?: (number|null);

        /** S_REQ_ADD_FRIEND scmd */
        scmd?: (number|null);

        /** S_REQ_ADD_FRIEND userId */
        userId?: (string|null);
    }

    /** Represents a S_REQ_ADD_FRIEND. */
    class S_REQ_ADD_FRIEND implements IS_REQ_ADD_FRIEND {

        /**
         * Constructs a new S_REQ_ADD_FRIEND.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_REQ_ADD_FRIEND);

        /** S_REQ_ADD_FRIEND cmd. */
        public cmd: number;

        /** S_REQ_ADD_FRIEND scmd. */
        public scmd: number;

        /** S_REQ_ADD_FRIEND userId. */
        public userId: string;

        /**
         * Encodes the specified S_REQ_ADD_FRIEND message. Does not implicitly {@link FriendPto.S_REQ_ADD_FRIEND.verify|verify} messages.
         * @param message S_REQ_ADD_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_REQ_ADD_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_REQ_ADD_FRIEND message, length delimited. Does not implicitly {@link FriendPto.S_REQ_ADD_FRIEND.verify|verify} messages.
         * @param message S_REQ_ADD_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_REQ_ADD_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_REQ_ADD_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_REQ_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_REQ_ADD_FRIEND;

        /**
         * Decodes a S_REQ_ADD_FRIEND message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_REQ_ADD_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_REQ_ADD_FRIEND;

        /**
         * Verifies a S_REQ_ADD_FRIEND message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_REQ_ADD_FRIEND message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_REQ_ADD_FRIEND
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_REQ_ADD_FRIEND;

        /**
         * Creates a plain object from a S_REQ_ADD_FRIEND message. Also converts values to other types if specified.
         * @param message S_REQ_ADD_FRIEND
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_REQ_ADD_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_REQ_ADD_FRIEND to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_NEW_FRIEND_REQ. */
    interface IS_NEW_FRIEND_REQ {

        /** S_NEW_FRIEND_REQ cmd */
        cmd?: (number|null);

        /** S_NEW_FRIEND_REQ scmd */
        scmd?: (number|null);

        /** S_NEW_FRIEND_REQ friendReq */
        friendReq?: (FriendPto.IFriendRequest|null);
    }

    /** Represents a S_NEW_FRIEND_REQ. */
    class S_NEW_FRIEND_REQ implements IS_NEW_FRIEND_REQ {

        /**
         * Constructs a new S_NEW_FRIEND_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_NEW_FRIEND_REQ);

        /** S_NEW_FRIEND_REQ cmd. */
        public cmd: number;

        /** S_NEW_FRIEND_REQ scmd. */
        public scmd: number;

        /** S_NEW_FRIEND_REQ friendReq. */
        public friendReq?: (FriendPto.IFriendRequest|null);

        /**
         * Encodes the specified S_NEW_FRIEND_REQ message. Does not implicitly {@link FriendPto.S_NEW_FRIEND_REQ.verify|verify} messages.
         * @param message S_NEW_FRIEND_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_NEW_FRIEND_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_NEW_FRIEND_REQ message, length delimited. Does not implicitly {@link FriendPto.S_NEW_FRIEND_REQ.verify|verify} messages.
         * @param message S_NEW_FRIEND_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_NEW_FRIEND_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_NEW_FRIEND_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_NEW_FRIEND_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_NEW_FRIEND_REQ;

        /**
         * Decodes a S_NEW_FRIEND_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_NEW_FRIEND_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_NEW_FRIEND_REQ;

        /**
         * Verifies a S_NEW_FRIEND_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_NEW_FRIEND_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_NEW_FRIEND_REQ
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_NEW_FRIEND_REQ;

        /**
         * Creates a plain object from a S_NEW_FRIEND_REQ message. Also converts values to other types if specified.
         * @param message S_NEW_FRIEND_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_NEW_FRIEND_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_NEW_FRIEND_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_HANDLE_FRIEND_REQUEST. */
    interface IC_HANDLE_FRIEND_REQUEST {

        /** C_HANDLE_FRIEND_REQUEST cmd */
        cmd?: (number|null);

        /** C_HANDLE_FRIEND_REQUEST scmd */
        scmd?: (number|null);

        /** C_HANDLE_FRIEND_REQUEST userIds */
        userIds?: (string[]|null);

        /** C_HANDLE_FRIEND_REQUEST isAccept */
        isAccept?: (boolean|null);
    }

    /** Represents a C_HANDLE_FRIEND_REQUEST. */
    class C_HANDLE_FRIEND_REQUEST implements IC_HANDLE_FRIEND_REQUEST {

        /**
         * Constructs a new C_HANDLE_FRIEND_REQUEST.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_HANDLE_FRIEND_REQUEST);

        /** C_HANDLE_FRIEND_REQUEST cmd. */
        public cmd: number;

        /** C_HANDLE_FRIEND_REQUEST scmd. */
        public scmd: number;

        /** C_HANDLE_FRIEND_REQUEST userIds. */
        public userIds: string[];

        /** C_HANDLE_FRIEND_REQUEST isAccept. */
        public isAccept: boolean;

        /**
         * Encodes the specified C_HANDLE_FRIEND_REQUEST message. Does not implicitly {@link FriendPto.C_HANDLE_FRIEND_REQUEST.verify|verify} messages.
         * @param message C_HANDLE_FRIEND_REQUEST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_HANDLE_FRIEND_REQUEST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_HANDLE_FRIEND_REQUEST message, length delimited. Does not implicitly {@link FriendPto.C_HANDLE_FRIEND_REQUEST.verify|verify} messages.
         * @param message C_HANDLE_FRIEND_REQUEST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_HANDLE_FRIEND_REQUEST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_HANDLE_FRIEND_REQUEST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_HANDLE_FRIEND_REQUEST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_HANDLE_FRIEND_REQUEST;

        /**
         * Decodes a C_HANDLE_FRIEND_REQUEST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_HANDLE_FRIEND_REQUEST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_HANDLE_FRIEND_REQUEST;

        /**
         * Verifies a C_HANDLE_FRIEND_REQUEST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_HANDLE_FRIEND_REQUEST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_HANDLE_FRIEND_REQUEST
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_HANDLE_FRIEND_REQUEST;

        /**
         * Creates a plain object from a C_HANDLE_FRIEND_REQUEST message. Also converts values to other types if specified.
         * @param message C_HANDLE_FRIEND_REQUEST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_HANDLE_FRIEND_REQUEST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_HANDLE_FRIEND_REQUEST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_HANDLE_FRIEND_REQUEST. */
    interface IS_HANDLE_FRIEND_REQUEST {

        /** S_HANDLE_FRIEND_REQUEST cmd */
        cmd?: (number|null);

        /** S_HANDLE_FRIEND_REQUEST scmd */
        scmd?: (number|null);

        /** S_HANDLE_FRIEND_REQUEST userIds */
        userIds?: (string[]|null);

        /** S_HANDLE_FRIEND_REQUEST isAccept */
        isAccept?: (boolean|null);

        /** S_HANDLE_FRIEND_REQUEST errCodes */
        errCodes?: (number[]|null);
    }

    /** Represents a S_HANDLE_FRIEND_REQUEST. */
    class S_HANDLE_FRIEND_REQUEST implements IS_HANDLE_FRIEND_REQUEST {

        /**
         * Constructs a new S_HANDLE_FRIEND_REQUEST.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_HANDLE_FRIEND_REQUEST);

        /** S_HANDLE_FRIEND_REQUEST cmd. */
        public cmd: number;

        /** S_HANDLE_FRIEND_REQUEST scmd. */
        public scmd: number;

        /** S_HANDLE_FRIEND_REQUEST userIds. */
        public userIds: string[];

        /** S_HANDLE_FRIEND_REQUEST isAccept. */
        public isAccept: boolean;

        /** S_HANDLE_FRIEND_REQUEST errCodes. */
        public errCodes: number[];

        /**
         * Encodes the specified S_HANDLE_FRIEND_REQUEST message. Does not implicitly {@link FriendPto.S_HANDLE_FRIEND_REQUEST.verify|verify} messages.
         * @param message S_HANDLE_FRIEND_REQUEST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_HANDLE_FRIEND_REQUEST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_HANDLE_FRIEND_REQUEST message, length delimited. Does not implicitly {@link FriendPto.S_HANDLE_FRIEND_REQUEST.verify|verify} messages.
         * @param message S_HANDLE_FRIEND_REQUEST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_HANDLE_FRIEND_REQUEST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_HANDLE_FRIEND_REQUEST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_HANDLE_FRIEND_REQUEST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_HANDLE_FRIEND_REQUEST;

        /**
         * Decodes a S_HANDLE_FRIEND_REQUEST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_HANDLE_FRIEND_REQUEST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_HANDLE_FRIEND_REQUEST;

        /**
         * Verifies a S_HANDLE_FRIEND_REQUEST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_HANDLE_FRIEND_REQUEST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_HANDLE_FRIEND_REQUEST
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_HANDLE_FRIEND_REQUEST;

        /**
         * Creates a plain object from a S_HANDLE_FRIEND_REQUEST message. Also converts values to other types if specified.
         * @param message S_HANDLE_FRIEND_REQUEST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_HANDLE_FRIEND_REQUEST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_HANDLE_FRIEND_REQUEST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_DELETE_FRIEND. */
    interface IC_DELETE_FRIEND {

        /** C_DELETE_FRIEND cmd */
        cmd?: (number|null);

        /** C_DELETE_FRIEND scmd */
        scmd?: (number|null);

        /** C_DELETE_FRIEND userIds */
        userIds?: (string[]|null);
    }

    /** Represents a C_DELETE_FRIEND. */
    class C_DELETE_FRIEND implements IC_DELETE_FRIEND {

        /**
         * Constructs a new C_DELETE_FRIEND.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_DELETE_FRIEND);

        /** C_DELETE_FRIEND cmd. */
        public cmd: number;

        /** C_DELETE_FRIEND scmd. */
        public scmd: number;

        /** C_DELETE_FRIEND userIds. */
        public userIds: string[];

        /**
         * Encodes the specified C_DELETE_FRIEND message. Does not implicitly {@link FriendPto.C_DELETE_FRIEND.verify|verify} messages.
         * @param message C_DELETE_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_DELETE_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_DELETE_FRIEND message, length delimited. Does not implicitly {@link FriendPto.C_DELETE_FRIEND.verify|verify} messages.
         * @param message C_DELETE_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_DELETE_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_DELETE_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_DELETE_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_DELETE_FRIEND;

        /**
         * Decodes a C_DELETE_FRIEND message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_DELETE_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_DELETE_FRIEND;

        /**
         * Verifies a C_DELETE_FRIEND message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_DELETE_FRIEND message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_DELETE_FRIEND
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_DELETE_FRIEND;

        /**
         * Creates a plain object from a C_DELETE_FRIEND message. Also converts values to other types if specified.
         * @param message C_DELETE_FRIEND
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_DELETE_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_DELETE_FRIEND to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_NEW_FRIEND. */
    interface IS_NEW_FRIEND {

        /** S_NEW_FRIEND cmd */
        cmd?: (number|null);

        /** S_NEW_FRIEND scmd */
        scmd?: (number|null);

        /** S_NEW_FRIEND friend */
        friend?: (FriendPto.IFriend|null);
    }

    /** Represents a S_NEW_FRIEND. */
    class S_NEW_FRIEND implements IS_NEW_FRIEND {

        /**
         * Constructs a new S_NEW_FRIEND.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_NEW_FRIEND);

        /** S_NEW_FRIEND cmd. */
        public cmd: number;

        /** S_NEW_FRIEND scmd. */
        public scmd: number;

        /** S_NEW_FRIEND friend. */
        public friend?: (FriendPto.IFriend|null);

        /**
         * Encodes the specified S_NEW_FRIEND message. Does not implicitly {@link FriendPto.S_NEW_FRIEND.verify|verify} messages.
         * @param message S_NEW_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_NEW_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_NEW_FRIEND message, length delimited. Does not implicitly {@link FriendPto.S_NEW_FRIEND.verify|verify} messages.
         * @param message S_NEW_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_NEW_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_NEW_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_NEW_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_NEW_FRIEND;

        /**
         * Decodes a S_NEW_FRIEND message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_NEW_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_NEW_FRIEND;

        /**
         * Verifies a S_NEW_FRIEND message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_NEW_FRIEND message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_NEW_FRIEND
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_NEW_FRIEND;

        /**
         * Creates a plain object from a S_NEW_FRIEND message. Also converts values to other types if specified.
         * @param message S_NEW_FRIEND
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_NEW_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_NEW_FRIEND to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_DELETE_FRIEND. */
    interface IS_DELETE_FRIEND {

        /** S_DELETE_FRIEND cmd */
        cmd?: (number|null);

        /** S_DELETE_FRIEND scmd */
        scmd?: (number|null);

        /** S_DELETE_FRIEND userIds */
        userIds?: (string[]|null);
    }

    /** Represents a S_DELETE_FRIEND. */
    class S_DELETE_FRIEND implements IS_DELETE_FRIEND {

        /**
         * Constructs a new S_DELETE_FRIEND.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_DELETE_FRIEND);

        /** S_DELETE_FRIEND cmd. */
        public cmd: number;

        /** S_DELETE_FRIEND scmd. */
        public scmd: number;

        /** S_DELETE_FRIEND userIds. */
        public userIds: string[];

        /**
         * Encodes the specified S_DELETE_FRIEND message. Does not implicitly {@link FriendPto.S_DELETE_FRIEND.verify|verify} messages.
         * @param message S_DELETE_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_DELETE_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_DELETE_FRIEND message, length delimited. Does not implicitly {@link FriendPto.S_DELETE_FRIEND.verify|verify} messages.
         * @param message S_DELETE_FRIEND message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_DELETE_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DELETE_FRIEND message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DELETE_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_DELETE_FRIEND;

        /**
         * Decodes a S_DELETE_FRIEND message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_DELETE_FRIEND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_DELETE_FRIEND;

        /**
         * Verifies a S_DELETE_FRIEND message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_DELETE_FRIEND message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_DELETE_FRIEND
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_DELETE_FRIEND;

        /**
         * Creates a plain object from a S_DELETE_FRIEND message. Also converts values to other types if specified.
         * @param message S_DELETE_FRIEND
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_DELETE_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_DELETE_FRIEND to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_BLOCK_PLAYER. */
    interface IC_BLOCK_PLAYER {

        /** C_BLOCK_PLAYER cmd */
        cmd?: (number|null);

        /** C_BLOCK_PLAYER scmd */
        scmd?: (number|null);

        /** C_BLOCK_PLAYER userId */
        userId?: (string|null);
    }

    /** Represents a C_BLOCK_PLAYER. */
    class C_BLOCK_PLAYER implements IC_BLOCK_PLAYER {

        /**
         * Constructs a new C_BLOCK_PLAYER.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_BLOCK_PLAYER);

        /** C_BLOCK_PLAYER cmd. */
        public cmd: number;

        /** C_BLOCK_PLAYER scmd. */
        public scmd: number;

        /** C_BLOCK_PLAYER userId. */
        public userId: string;

        /**
         * Encodes the specified C_BLOCK_PLAYER message. Does not implicitly {@link FriendPto.C_BLOCK_PLAYER.verify|verify} messages.
         * @param message C_BLOCK_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_BLOCK_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_BLOCK_PLAYER message, length delimited. Does not implicitly {@link FriendPto.C_BLOCK_PLAYER.verify|verify} messages.
         * @param message C_BLOCK_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_BLOCK_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_BLOCK_PLAYER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_BLOCK_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_BLOCK_PLAYER;

        /**
         * Decodes a C_BLOCK_PLAYER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_BLOCK_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_BLOCK_PLAYER;

        /**
         * Verifies a C_BLOCK_PLAYER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_BLOCK_PLAYER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_BLOCK_PLAYER
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_BLOCK_PLAYER;

        /**
         * Creates a plain object from a C_BLOCK_PLAYER message. Also converts values to other types if specified.
         * @param message C_BLOCK_PLAYER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_BLOCK_PLAYER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_BLOCK_PLAYER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_CANCEL_BLOCK_PLAYER. */
    interface IC_CANCEL_BLOCK_PLAYER {

        /** C_CANCEL_BLOCK_PLAYER cmd */
        cmd?: (number|null);

        /** C_CANCEL_BLOCK_PLAYER scmd */
        scmd?: (number|null);

        /** C_CANCEL_BLOCK_PLAYER userId */
        userId?: (string|null);
    }

    /** Represents a C_CANCEL_BLOCK_PLAYER. */
    class C_CANCEL_BLOCK_PLAYER implements IC_CANCEL_BLOCK_PLAYER {

        /**
         * Constructs a new C_CANCEL_BLOCK_PLAYER.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_CANCEL_BLOCK_PLAYER);

        /** C_CANCEL_BLOCK_PLAYER cmd. */
        public cmd: number;

        /** C_CANCEL_BLOCK_PLAYER scmd. */
        public scmd: number;

        /** C_CANCEL_BLOCK_PLAYER userId. */
        public userId: string;

        /**
         * Encodes the specified C_CANCEL_BLOCK_PLAYER message. Does not implicitly {@link FriendPto.C_CANCEL_BLOCK_PLAYER.verify|verify} messages.
         * @param message C_CANCEL_BLOCK_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_CANCEL_BLOCK_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_CANCEL_BLOCK_PLAYER message, length delimited. Does not implicitly {@link FriendPto.C_CANCEL_BLOCK_PLAYER.verify|verify} messages.
         * @param message C_CANCEL_BLOCK_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_CANCEL_BLOCK_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_CANCEL_BLOCK_PLAYER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_CANCEL_BLOCK_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_CANCEL_BLOCK_PLAYER;

        /**
         * Decodes a C_CANCEL_BLOCK_PLAYER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_CANCEL_BLOCK_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_CANCEL_BLOCK_PLAYER;

        /**
         * Verifies a C_CANCEL_BLOCK_PLAYER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_CANCEL_BLOCK_PLAYER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_CANCEL_BLOCK_PLAYER
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_CANCEL_BLOCK_PLAYER;

        /**
         * Creates a plain object from a C_CANCEL_BLOCK_PLAYER message. Also converts values to other types if specified.
         * @param message C_CANCEL_BLOCK_PLAYER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_CANCEL_BLOCK_PLAYER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_CANCEL_BLOCK_PLAYER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_NEW_BLOCK_PLAYER. */
    interface IS_NEW_BLOCK_PLAYER {

        /** S_NEW_BLOCK_PLAYER cmd */
        cmd?: (number|null);

        /** S_NEW_BLOCK_PLAYER scmd */
        scmd?: (number|null);

        /** S_NEW_BLOCK_PLAYER blockPlayer */
        blockPlayer?: (FriendPto.IFriend|null);
    }

    /** Represents a S_NEW_BLOCK_PLAYER. */
    class S_NEW_BLOCK_PLAYER implements IS_NEW_BLOCK_PLAYER {

        /**
         * Constructs a new S_NEW_BLOCK_PLAYER.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_NEW_BLOCK_PLAYER);

        /** S_NEW_BLOCK_PLAYER cmd. */
        public cmd: number;

        /** S_NEW_BLOCK_PLAYER scmd. */
        public scmd: number;

        /** S_NEW_BLOCK_PLAYER blockPlayer. */
        public blockPlayer?: (FriendPto.IFriend|null);

        /**
         * Encodes the specified S_NEW_BLOCK_PLAYER message. Does not implicitly {@link FriendPto.S_NEW_BLOCK_PLAYER.verify|verify} messages.
         * @param message S_NEW_BLOCK_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_NEW_BLOCK_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_NEW_BLOCK_PLAYER message, length delimited. Does not implicitly {@link FriendPto.S_NEW_BLOCK_PLAYER.verify|verify} messages.
         * @param message S_NEW_BLOCK_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_NEW_BLOCK_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_NEW_BLOCK_PLAYER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_NEW_BLOCK_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_NEW_BLOCK_PLAYER;

        /**
         * Decodes a S_NEW_BLOCK_PLAYER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_NEW_BLOCK_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_NEW_BLOCK_PLAYER;

        /**
         * Verifies a S_NEW_BLOCK_PLAYER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_NEW_BLOCK_PLAYER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_NEW_BLOCK_PLAYER
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_NEW_BLOCK_PLAYER;

        /**
         * Creates a plain object from a S_NEW_BLOCK_PLAYER message. Also converts values to other types if specified.
         * @param message S_NEW_BLOCK_PLAYER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_NEW_BLOCK_PLAYER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_NEW_BLOCK_PLAYER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_DELETE_BLOCK_PLAYER. */
    interface IS_DELETE_BLOCK_PLAYER {

        /** S_DELETE_BLOCK_PLAYER cmd */
        cmd?: (number|null);

        /** S_DELETE_BLOCK_PLAYER scmd */
        scmd?: (number|null);

        /** S_DELETE_BLOCK_PLAYER userId */
        userId?: (string|null);
    }

    /** Represents a S_DELETE_BLOCK_PLAYER. */
    class S_DELETE_BLOCK_PLAYER implements IS_DELETE_BLOCK_PLAYER {

        /**
         * Constructs a new S_DELETE_BLOCK_PLAYER.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_DELETE_BLOCK_PLAYER);

        /** S_DELETE_BLOCK_PLAYER cmd. */
        public cmd: number;

        /** S_DELETE_BLOCK_PLAYER scmd. */
        public scmd: number;

        /** S_DELETE_BLOCK_PLAYER userId. */
        public userId: string;

        /**
         * Encodes the specified S_DELETE_BLOCK_PLAYER message. Does not implicitly {@link FriendPto.S_DELETE_BLOCK_PLAYER.verify|verify} messages.
         * @param message S_DELETE_BLOCK_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_DELETE_BLOCK_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_DELETE_BLOCK_PLAYER message, length delimited. Does not implicitly {@link FriendPto.S_DELETE_BLOCK_PLAYER.verify|verify} messages.
         * @param message S_DELETE_BLOCK_PLAYER message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_DELETE_BLOCK_PLAYER, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_DELETE_BLOCK_PLAYER message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_DELETE_BLOCK_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_DELETE_BLOCK_PLAYER;

        /**
         * Decodes a S_DELETE_BLOCK_PLAYER message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_DELETE_BLOCK_PLAYER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_DELETE_BLOCK_PLAYER;

        /**
         * Verifies a S_DELETE_BLOCK_PLAYER message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_DELETE_BLOCK_PLAYER message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_DELETE_BLOCK_PLAYER
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_DELETE_BLOCK_PLAYER;

        /**
         * Creates a plain object from a S_DELETE_BLOCK_PLAYER message. Also converts values to other types if specified.
         * @param message S_DELETE_BLOCK_PLAYER
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_DELETE_BLOCK_PLAYER, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_DELETE_BLOCK_PLAYER to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_SEND_TO_FRIENDS_GIFT. */
    interface IC_SEND_TO_FRIENDS_GIFT {

        /** C_SEND_TO_FRIENDS_GIFT cmd */
        cmd?: (number|null);

        /** C_SEND_TO_FRIENDS_GIFT scmd */
        scmd?: (number|null);

        /** C_SEND_TO_FRIENDS_GIFT userIds */
        userIds?: (string[]|null);
    }

    /** Represents a C_SEND_TO_FRIENDS_GIFT. */
    class C_SEND_TO_FRIENDS_GIFT implements IC_SEND_TO_FRIENDS_GIFT {

        /**
         * Constructs a new C_SEND_TO_FRIENDS_GIFT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_SEND_TO_FRIENDS_GIFT);

        /** C_SEND_TO_FRIENDS_GIFT cmd. */
        public cmd: number;

        /** C_SEND_TO_FRIENDS_GIFT scmd. */
        public scmd: number;

        /** C_SEND_TO_FRIENDS_GIFT userIds. */
        public userIds: string[];

        /**
         * Encodes the specified C_SEND_TO_FRIENDS_GIFT message. Does not implicitly {@link FriendPto.C_SEND_TO_FRIENDS_GIFT.verify|verify} messages.
         * @param message C_SEND_TO_FRIENDS_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_SEND_TO_FRIENDS_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_SEND_TO_FRIENDS_GIFT message, length delimited. Does not implicitly {@link FriendPto.C_SEND_TO_FRIENDS_GIFT.verify|verify} messages.
         * @param message C_SEND_TO_FRIENDS_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_SEND_TO_FRIENDS_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_SEND_TO_FRIENDS_GIFT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_SEND_TO_FRIENDS_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_SEND_TO_FRIENDS_GIFT;

        /**
         * Decodes a C_SEND_TO_FRIENDS_GIFT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_SEND_TO_FRIENDS_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_SEND_TO_FRIENDS_GIFT;

        /**
         * Verifies a C_SEND_TO_FRIENDS_GIFT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_SEND_TO_FRIENDS_GIFT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_SEND_TO_FRIENDS_GIFT
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_SEND_TO_FRIENDS_GIFT;

        /**
         * Creates a plain object from a C_SEND_TO_FRIENDS_GIFT message. Also converts values to other types if specified.
         * @param message C_SEND_TO_FRIENDS_GIFT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_SEND_TO_FRIENDS_GIFT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_SEND_TO_FRIENDS_GIFT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_SEND_TO_FRIENDS_GIFT. */
    interface IS_SEND_TO_FRIENDS_GIFT {

        /** S_SEND_TO_FRIENDS_GIFT cmd */
        cmd?: (number|null);

        /** S_SEND_TO_FRIENDS_GIFT scmd */
        scmd?: (number|null);

        /** S_SEND_TO_FRIENDS_GIFT sendGiftRecords */
        sendGiftRecords?: (string[]|null);
    }

    /** Represents a S_SEND_TO_FRIENDS_GIFT. */
    class S_SEND_TO_FRIENDS_GIFT implements IS_SEND_TO_FRIENDS_GIFT {

        /**
         * Constructs a new S_SEND_TO_FRIENDS_GIFT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_SEND_TO_FRIENDS_GIFT);

        /** S_SEND_TO_FRIENDS_GIFT cmd. */
        public cmd: number;

        /** S_SEND_TO_FRIENDS_GIFT scmd. */
        public scmd: number;

        /** S_SEND_TO_FRIENDS_GIFT sendGiftRecords. */
        public sendGiftRecords: string[];

        /**
         * Encodes the specified S_SEND_TO_FRIENDS_GIFT message. Does not implicitly {@link FriendPto.S_SEND_TO_FRIENDS_GIFT.verify|verify} messages.
         * @param message S_SEND_TO_FRIENDS_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_SEND_TO_FRIENDS_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_SEND_TO_FRIENDS_GIFT message, length delimited. Does not implicitly {@link FriendPto.S_SEND_TO_FRIENDS_GIFT.verify|verify} messages.
         * @param message S_SEND_TO_FRIENDS_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_SEND_TO_FRIENDS_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_SEND_TO_FRIENDS_GIFT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_SEND_TO_FRIENDS_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_SEND_TO_FRIENDS_GIFT;

        /**
         * Decodes a S_SEND_TO_FRIENDS_GIFT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_SEND_TO_FRIENDS_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_SEND_TO_FRIENDS_GIFT;

        /**
         * Verifies a S_SEND_TO_FRIENDS_GIFT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_SEND_TO_FRIENDS_GIFT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_SEND_TO_FRIENDS_GIFT
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_SEND_TO_FRIENDS_GIFT;

        /**
         * Creates a plain object from a S_SEND_TO_FRIENDS_GIFT message. Also converts values to other types if specified.
         * @param message S_SEND_TO_FRIENDS_GIFT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_SEND_TO_FRIENDS_GIFT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_SEND_TO_FRIENDS_GIFT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_GET_FRIENDS_GIFT. */
    interface IC_GET_FRIENDS_GIFT {

        /** C_GET_FRIENDS_GIFT cmd */
        cmd?: (number|null);

        /** C_GET_FRIENDS_GIFT scmd */
        scmd?: (number|null);

        /** C_GET_FRIENDS_GIFT userIds */
        userIds?: (string[]|null);
    }

    /** Represents a C_GET_FRIENDS_GIFT. */
    class C_GET_FRIENDS_GIFT implements IC_GET_FRIENDS_GIFT {

        /**
         * Constructs a new C_GET_FRIENDS_GIFT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IC_GET_FRIENDS_GIFT);

        /** C_GET_FRIENDS_GIFT cmd. */
        public cmd: number;

        /** C_GET_FRIENDS_GIFT scmd. */
        public scmd: number;

        /** C_GET_FRIENDS_GIFT userIds. */
        public userIds: string[];

        /**
         * Encodes the specified C_GET_FRIENDS_GIFT message. Does not implicitly {@link FriendPto.C_GET_FRIENDS_GIFT.verify|verify} messages.
         * @param message C_GET_FRIENDS_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IC_GET_FRIENDS_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_GET_FRIENDS_GIFT message, length delimited. Does not implicitly {@link FriendPto.C_GET_FRIENDS_GIFT.verify|verify} messages.
         * @param message C_GET_FRIENDS_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IC_GET_FRIENDS_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_GET_FRIENDS_GIFT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_GET_FRIENDS_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.C_GET_FRIENDS_GIFT;

        /**
         * Decodes a C_GET_FRIENDS_GIFT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_GET_FRIENDS_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.C_GET_FRIENDS_GIFT;

        /**
         * Verifies a C_GET_FRIENDS_GIFT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_GET_FRIENDS_GIFT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_GET_FRIENDS_GIFT
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.C_GET_FRIENDS_GIFT;

        /**
         * Creates a plain object from a C_GET_FRIENDS_GIFT message. Also converts values to other types if specified.
         * @param message C_GET_FRIENDS_GIFT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.C_GET_FRIENDS_GIFT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_GET_FRIENDS_GIFT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_GET_FRIENDS_GIFT. */
    interface IS_GET_FRIENDS_GIFT {

        /** S_GET_FRIENDS_GIFT cmd */
        cmd?: (number|null);

        /** S_GET_FRIENDS_GIFT scmd */
        scmd?: (number|null);

        /** S_GET_FRIENDS_GIFT friendsGiveTimes */
        friendsGiveTimes?: (number|null);

        /** S_GET_FRIENDS_GIFT rewards */
        rewards?: (ItemPto.IItem[]|null);
    }

    /** Represents a S_GET_FRIENDS_GIFT. */
    class S_GET_FRIENDS_GIFT implements IS_GET_FRIENDS_GIFT {

        /**
         * Constructs a new S_GET_FRIENDS_GIFT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_GET_FRIENDS_GIFT);

        /** S_GET_FRIENDS_GIFT cmd. */
        public cmd: number;

        /** S_GET_FRIENDS_GIFT scmd. */
        public scmd: number;

        /** S_GET_FRIENDS_GIFT friendsGiveTimes. */
        public friendsGiveTimes: number;

        /** S_GET_FRIENDS_GIFT rewards. */
        public rewards: ItemPto.IItem[];

        /**
         * Encodes the specified S_GET_FRIENDS_GIFT message. Does not implicitly {@link FriendPto.S_GET_FRIENDS_GIFT.verify|verify} messages.
         * @param message S_GET_FRIENDS_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_GET_FRIENDS_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_GET_FRIENDS_GIFT message, length delimited. Does not implicitly {@link FriendPto.S_GET_FRIENDS_GIFT.verify|verify} messages.
         * @param message S_GET_FRIENDS_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_GET_FRIENDS_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_GET_FRIENDS_GIFT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_GET_FRIENDS_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_GET_FRIENDS_GIFT;

        /**
         * Decodes a S_GET_FRIENDS_GIFT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_GET_FRIENDS_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_GET_FRIENDS_GIFT;

        /**
         * Verifies a S_GET_FRIENDS_GIFT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_GET_FRIENDS_GIFT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_GET_FRIENDS_GIFT
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_GET_FRIENDS_GIFT;

        /**
         * Creates a plain object from a S_GET_FRIENDS_GIFT message. Also converts values to other types if specified.
         * @param message S_GET_FRIENDS_GIFT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_GET_FRIENDS_GIFT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_GET_FRIENDS_GIFT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S_ON_NEW_FRIEND_GIFT. */
    interface IS_ON_NEW_FRIEND_GIFT {

        /** S_ON_NEW_FRIEND_GIFT cmd */
        cmd?: (number|null);

        /** S_ON_NEW_FRIEND_GIFT scmd */
        scmd?: (number|null);

        /** S_ON_NEW_FRIEND_GIFT friendUserId */
        friendUserId?: (string|null);
    }

    /** Represents a S_ON_NEW_FRIEND_GIFT. */
    class S_ON_NEW_FRIEND_GIFT implements IS_ON_NEW_FRIEND_GIFT {

        /**
         * Constructs a new S_ON_NEW_FRIEND_GIFT.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IS_ON_NEW_FRIEND_GIFT);

        /** S_ON_NEW_FRIEND_GIFT cmd. */
        public cmd: number;

        /** S_ON_NEW_FRIEND_GIFT scmd. */
        public scmd: number;

        /** S_ON_NEW_FRIEND_GIFT friendUserId. */
        public friendUserId: string;

        /**
         * Encodes the specified S_ON_NEW_FRIEND_GIFT message. Does not implicitly {@link FriendPto.S_ON_NEW_FRIEND_GIFT.verify|verify} messages.
         * @param message S_ON_NEW_FRIEND_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IS_ON_NEW_FRIEND_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S_ON_NEW_FRIEND_GIFT message, length delimited. Does not implicitly {@link FriendPto.S_ON_NEW_FRIEND_GIFT.verify|verify} messages.
         * @param message S_ON_NEW_FRIEND_GIFT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IS_ON_NEW_FRIEND_GIFT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S_ON_NEW_FRIEND_GIFT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S_ON_NEW_FRIEND_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.S_ON_NEW_FRIEND_GIFT;

        /**
         * Decodes a S_ON_NEW_FRIEND_GIFT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S_ON_NEW_FRIEND_GIFT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.S_ON_NEW_FRIEND_GIFT;

        /**
         * Verifies a S_ON_NEW_FRIEND_GIFT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S_ON_NEW_FRIEND_GIFT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S_ON_NEW_FRIEND_GIFT
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.S_ON_NEW_FRIEND_GIFT;

        /**
         * Creates a plain object from a S_ON_NEW_FRIEND_GIFT message. Also converts values to other types if specified.
         * @param message S_ON_NEW_FRIEND_GIFT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.S_ON_NEW_FRIEND_GIFT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S_ON_NEW_FRIEND_GIFT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Friend. */
    interface IFriend {

        /** Friend userId */
        userId?: (string|null);

        /** Friend nickname */
        nickname?: (string|null);

        /** Friend battlePower */
        battlePower?: (number|null);

        /** Friend offlineTime */
        offlineTime?: (number|null);

        /** Friend online */
        online?: (boolean|null);
    }

    /** Represents a Friend. */
    class Friend implements IFriend {

        /**
         * Constructs a new Friend.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IFriend);

        /** Friend userId. */
        public userId: string;

        /** Friend nickname. */
        public nickname: string;

        /** Friend battlePower. */
        public battlePower: number;

        /** Friend offlineTime. */
        public offlineTime: number;

        /** Friend online. */
        public online: boolean;

        /**
         * Encodes the specified Friend message. Does not implicitly {@link FriendPto.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link FriendPto.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.Friend;

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.Friend;

        /**
         * Verifies a Friend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Friend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Friend
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.Friend;

        /**
         * Creates a plain object from a Friend message. Also converts values to other types if specified.
         * @param message Friend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.Friend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Friend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendRequest. */
    interface IFriendRequest {

        /** FriendRequest userId */
        userId?: (string|null);

        /** FriendRequest nickname */
        nickname?: (string|null);

        /** FriendRequest time */
        time?: (number|null);

        /** FriendRequest iconBg */
        iconBg?: (number|null);
    }

    /** Represents a FriendRequest. */
    class FriendRequest implements IFriendRequest {

        /**
         * Constructs a new FriendRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: FriendPto.IFriendRequest);

        /** FriendRequest userId. */
        public userId: string;

        /** FriendRequest nickname. */
        public nickname: string;

        /** FriendRequest time. */
        public time: number;

        /** FriendRequest iconBg. */
        public iconBg: number;

        /**
         * Encodes the specified FriendRequest message. Does not implicitly {@link FriendPto.FriendRequest.verify|verify} messages.
         * @param message FriendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FriendPto.IFriendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendRequest message, length delimited. Does not implicitly {@link FriendPto.FriendRequest.verify|verify} messages.
         * @param message FriendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FriendPto.IFriendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FriendPto.FriendRequest;

        /**
         * Decodes a FriendRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FriendPto.FriendRequest;

        /**
         * Verifies a FriendRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendRequest
         */
        public static fromObject(object: { [k: string]: any }): FriendPto.FriendRequest;

        /**
         * Creates a plain object from a FriendRequest message. Also converts values to other types if specified.
         * @param message FriendRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FriendPto.FriendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
