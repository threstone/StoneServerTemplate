/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

if (typeof (window) == 'undefined') { var $protobuf = require("protobufjs/minimal"); } else { var $protobuf = protobuf; }

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SystemPto = (function() {

    var SystemPto = {};

    SystemPto.S_ERROR = (function() {

        function S_ERROR(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ERROR.prototype.cmd = 0;
        S_ERROR.prototype.scmd = 1;
        S_ERROR.prototype.code = 0;
        S_ERROR.prototype.msg = "";

        S_ERROR.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(24).int32(m.code);
            if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
                w.uint32(34).string(m.msg);
            return w;
        };

        S_ERROR.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.SystemPto.S_ERROR();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.code = r.int32();
                    break;
                case 4:
                    m.msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_ERROR;
    })();

    SystemPto.C_HEART_BEAT = (function() {

        function C_HEART_BEAT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_HEART_BEAT.prototype.cmd = 0;
        C_HEART_BEAT.prototype.scmd = 2;

        C_HEART_BEAT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_HEART_BEAT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.SystemPto.C_HEART_BEAT();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_HEART_BEAT;
    })();

    SystemPto.S_HEART_BEAT = (function() {

        function S_HEART_BEAT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_HEART_BEAT.prototype.cmd = 0;
        S_HEART_BEAT.prototype.scmd = 3;
        S_HEART_BEAT.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        S_HEART_BEAT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.serverTime != null && Object.hasOwnProperty.call(m, "serverTime"))
                w.uint32(24).int64(m.serverTime);
            return w;
        };

        S_HEART_BEAT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.SystemPto.S_HEART_BEAT();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.serverTime = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_HEART_BEAT;
    })();

    SystemPto.S_KICK = (function() {

        function S_KICK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_KICK.prototype.cmd = 0;
        S_KICK.prototype.scmd = 4;
        S_KICK.prototype.reason = "";

        S_KICK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.reason != null && Object.hasOwnProperty.call(m, "reason"))
                w.uint32(26).string(m.reason);
            return w;
        };

        S_KICK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.SystemPto.S_KICK();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.reason = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_KICK;
    })();

    SystemPto.S_NEW_DAY = (function() {

        function S_NEW_DAY(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_NEW_DAY.prototype.cmd = 0;
        S_NEW_DAY.prototype.scmd = 5;
        S_NEW_DAY.prototype.dayStartMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        S_NEW_DAY.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.dayStartMs != null && Object.hasOwnProperty.call(m, "dayStartMs"))
                w.uint32(24).uint64(m.dayStartMs);
            return w;
        };

        S_NEW_DAY.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.SystemPto.S_NEW_DAY();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.dayStartMs = r.uint64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_NEW_DAY;
    })();

    return SystemPto;
})();

$root.ServerPto = (function() {

    var ServerPto = {};

    ServerPto.C_CONNECT = (function() {

        function C_CONNECT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_CONNECT.prototype.cmd = 1;
        C_CONNECT.prototype.scmd = 1;
        C_CONNECT.prototype.token = "";
        C_CONNECT.prototype.serverId = 0;

        C_CONNECT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(26).string(m.token);
            if (m.serverId != null && Object.hasOwnProperty.call(m, "serverId"))
                w.uint32(32).uint32(m.serverId);
            return w;
        };

        C_CONNECT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ServerPto.C_CONNECT();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.token = r.string();
                    break;
                case 4:
                    m.serverId = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_CONNECT;
    })();

    ServerPto.S_CONNECT = (function() {

        function S_CONNECT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_CONNECT.prototype.cmd = 1;
        S_CONNECT.prototype.scmd = 2;
        S_CONNECT.prototype.loginInfo = null;

        S_CONNECT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.loginInfo != null && Object.hasOwnProperty.call(m, "loginInfo"))
                $root.PlayerPto.LoginInfo.encode(m.loginInfo, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_CONNECT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ServerPto.S_CONNECT();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.loginInfo = $root.PlayerPto.LoginInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_CONNECT;
    })();

    ServerPto.C_SWITCH_SERVER = (function() {

        function C_SWITCH_SERVER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_SWITCH_SERVER.prototype.cmd = 1;
        C_SWITCH_SERVER.prototype.scmd = 3;
        C_SWITCH_SERVER.prototype.token = "";
        C_SWITCH_SERVER.prototype.serverId = 0;

        C_SWITCH_SERVER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(26).string(m.token);
            if (m.serverId != null && Object.hasOwnProperty.call(m, "serverId"))
                w.uint32(32).uint32(m.serverId);
            return w;
        };

        C_SWITCH_SERVER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ServerPto.C_SWITCH_SERVER();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.token = r.string();
                    break;
                case 4:
                    m.serverId = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_SWITCH_SERVER;
    })();

    ServerPto.S_SWITCH_SERVER = (function() {

        function S_SWITCH_SERVER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_SWITCH_SERVER.prototype.cmd = 1;
        S_SWITCH_SERVER.prototype.scmd = 4;
        S_SWITCH_SERVER.prototype.loginInfo = null;

        S_SWITCH_SERVER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.loginInfo != null && Object.hasOwnProperty.call(m, "loginInfo"))
                $root.PlayerPto.LoginInfo.encode(m.loginInfo, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_SWITCH_SERVER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ServerPto.S_SWITCH_SERVER();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.loginInfo = $root.PlayerPto.LoginInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_SWITCH_SERVER;
    })();

    ServerPto.C_GET_SERVER_LIST = (function() {

        function C_GET_SERVER_LIST(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_GET_SERVER_LIST.prototype.cmd = 1;
        C_GET_SERVER_LIST.prototype.scmd = 5;

        C_GET_SERVER_LIST.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_GET_SERVER_LIST.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ServerPto.C_GET_SERVER_LIST();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_GET_SERVER_LIST;
    })();

    ServerPto.S_GET_SERVER_LIST = (function() {

        function S_GET_SERVER_LIST(p) {
            this.list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GET_SERVER_LIST.prototype.cmd = 1;
        S_GET_SERVER_LIST.prototype.scmd = 6;
        S_GET_SERVER_LIST.prototype.list = $util.emptyArray;

        S_GET_SERVER_LIST.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.list != null && m.list.length) {
                for (var i = 0; i < m.list.length; ++i)
                    $root.ServerPto.ServerInfo.encode(m.list[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        S_GET_SERVER_LIST.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ServerPto.S_GET_SERVER_LIST();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    if (!(m.list && m.list.length))
                        m.list = [];
                    m.list.push($root.ServerPto.ServerInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_GET_SERVER_LIST;
    })();

    ServerPto.ServerInfo = (function() {

        function ServerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ServerInfo.prototype.id = 0;
        ServerInfo.prototype.name = "";
        ServerInfo.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ServerInfo.prototype.status = 0;
        ServerInfo.prototype.tag = 0;

        ServerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(18).string(m.name);
            if (m.startTime != null && Object.hasOwnProperty.call(m, "startTime"))
                w.uint32(24).int64(m.startTime);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(32).uint32(m.status);
            if (m.tag != null && Object.hasOwnProperty.call(m, "tag"))
                w.uint32(40).uint32(m.tag);
            return w;
        };

        ServerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ServerPto.ServerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.uint32();
                    break;
                case 2:
                    m.name = r.string();
                    break;
                case 3:
                    m.startTime = r.int64();
                    break;
                case 4:
                    m.status = r.uint32();
                    break;
                case 5:
                    m.tag = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ServerInfo;
    })();

    return ServerPto;
})();

$root.TestPto = (function() {

    var TestPto = {};

    TestPto.C_TEST_ADD_ITEMS = (function() {

        function C_TEST_ADD_ITEMS(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_TEST_ADD_ITEMS.prototype.cmd = 10000;
        C_TEST_ADD_ITEMS.prototype.scmd = 1;
        C_TEST_ADD_ITEMS.prototype.itemId = 0;
        C_TEST_ADD_ITEMS.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        C_TEST_ADD_ITEMS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(24).uint32(m.itemId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(32).int64(m.count);
            return w;
        };

        C_TEST_ADD_ITEMS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.C_TEST_ADD_ITEMS();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.itemId = r.uint32();
                    break;
                case 4:
                    m.count = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_TEST_ADD_ITEMS;
    })();

    TestPto.C_TEST_UPDATE_CODE = (function() {

        function C_TEST_UPDATE_CODE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_TEST_UPDATE_CODE.prototype.cmd = 10000;
        C_TEST_UPDATE_CODE.prototype.scmd = 3;

        C_TEST_UPDATE_CODE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_TEST_UPDATE_CODE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.C_TEST_UPDATE_CODE();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_TEST_UPDATE_CODE;
    })();

    TestPto.C_TEST_MODIFY_SERVER_TIME = (function() {

        function C_TEST_MODIFY_SERVER_TIME(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_TEST_MODIFY_SERVER_TIME.prototype.cmd = 10000;
        C_TEST_MODIFY_SERVER_TIME.prototype.scmd = 4;
        C_TEST_MODIFY_SERVER_TIME.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        C_TEST_MODIFY_SERVER_TIME.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                w.uint32(24).uint64(m.time);
            return w;
        };

        C_TEST_MODIFY_SERVER_TIME.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.C_TEST_MODIFY_SERVER_TIME();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.time = r.uint64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_TEST_MODIFY_SERVER_TIME;
    })();

    TestPto.C_TEST_RESTART_SERVER = (function() {

        function C_TEST_RESTART_SERVER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_TEST_RESTART_SERVER.prototype.cmd = 10000;
        C_TEST_RESTART_SERVER.prototype.scmd = 5;

        C_TEST_RESTART_SERVER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_TEST_RESTART_SERVER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.C_TEST_RESTART_SERVER();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_TEST_RESTART_SERVER;
    })();

    TestPto.C_TEST_SERVER_TIME_INFO = (function() {

        function C_TEST_SERVER_TIME_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_TEST_SERVER_TIME_INFO.prototype.cmd = 10000;
        C_TEST_SERVER_TIME_INFO.prototype.scmd = 6;

        C_TEST_SERVER_TIME_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_TEST_SERVER_TIME_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.C_TEST_SERVER_TIME_INFO();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_TEST_SERVER_TIME_INFO;
    })();

    TestPto.S_TEST_SERVER_TIME_INFO = (function() {

        function S_TEST_SERVER_TIME_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_TEST_SERVER_TIME_INFO.prototype.cmd = 10000;
        S_TEST_SERVER_TIME_INFO.prototype.scmd = 7;
        S_TEST_SERVER_TIME_INFO.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        S_TEST_SERVER_TIME_INFO.prototype.openServerDay = 0;
        S_TEST_SERVER_TIME_INFO.prototype.openServerWeek = 0;

        S_TEST_SERVER_TIME_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.serverTime != null && Object.hasOwnProperty.call(m, "serverTime"))
                w.uint32(24).uint64(m.serverTime);
            if (m.openServerDay != null && Object.hasOwnProperty.call(m, "openServerDay"))
                w.uint32(32).int32(m.openServerDay);
            if (m.openServerWeek != null && Object.hasOwnProperty.call(m, "openServerWeek"))
                w.uint32(40).int32(m.openServerWeek);
            return w;
        };

        S_TEST_SERVER_TIME_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.S_TEST_SERVER_TIME_INFO();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.serverTime = r.uint64();
                    break;
                case 4:
                    m.openServerDay = r.int32();
                    break;
                case 5:
                    m.openServerWeek = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_TEST_SERVER_TIME_INFO;
    })();

    TestPto.C_TEST_CLEAR_ACCOUNT_DATA = (function() {

        function C_TEST_CLEAR_ACCOUNT_DATA(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_TEST_CLEAR_ACCOUNT_DATA.prototype.cmd = 10000;
        C_TEST_CLEAR_ACCOUNT_DATA.prototype.scmd = 8;

        C_TEST_CLEAR_ACCOUNT_DATA.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_TEST_CLEAR_ACCOUNT_DATA.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.C_TEST_CLEAR_ACCOUNT_DATA();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_TEST_CLEAR_ACCOUNT_DATA;
    })();

    return TestPto;
})();

$root.PlayerPto = (function() {

    var PlayerPto = {};

    PlayerPto.LoginInfo = (function() {

        function LoginInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LoginInfo.prototype.code = 0;
        LoginInfo.prototype.serverId = 0;
        LoginInfo.prototype.userId = "";

        LoginInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.serverId != null && Object.hasOwnProperty.call(m, "serverId"))
                w.uint32(16).uint32(m.serverId);
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(26).string(m.userId);
            return w;
        };

        LoginInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerPto.LoginInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.int32();
                    break;
                case 2:
                    m.serverId = r.uint32();
                    break;
                case 3:
                    m.userId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LoginInfo;
    })();

    return PlayerPto;
})();

$root.ItemPto = (function() {

    var ItemPto = {};

    ItemPto.C_GET_ITEMS_INFO = (function() {

        function C_GET_ITEMS_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_GET_ITEMS_INFO.prototype.cmd = 3;
        C_GET_ITEMS_INFO.prototype.scmd = 1;

        C_GET_ITEMS_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_GET_ITEMS_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.C_GET_ITEMS_INFO();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_GET_ITEMS_INFO;
    })();

    ItemPto.S_GET_ITEMS_INFO = (function() {

        function S_GET_ITEMS_INFO(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GET_ITEMS_INFO.prototype.cmd = 3;
        S_GET_ITEMS_INFO.prototype.scmd = 2;
        S_GET_ITEMS_INFO.prototype.items = $util.emptyArray;

        S_GET_ITEMS_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.ItemPto.Item.encode(m.items[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        S_GET_ITEMS_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.S_GET_ITEMS_INFO();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.ItemPto.Item.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_GET_ITEMS_INFO;
    })();

    ItemPto.S_ITEMS_UPDATE = (function() {

        function S_ITEMS_UPDATE(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ITEMS_UPDATE.prototype.cmd = 3;
        S_ITEMS_UPDATE.prototype.scmd = 3;
        S_ITEMS_UPDATE.prototype.items = $util.emptyArray;

        S_ITEMS_UPDATE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.ItemPto.Item.encode(m.items[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        S_ITEMS_UPDATE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.S_ITEMS_UPDATE();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.ItemPto.Item.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_ITEMS_UPDATE;
    })();

    ItemPto.C_GET_ENERGY_INFO = (function() {

        function C_GET_ENERGY_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_GET_ENERGY_INFO.prototype.cmd = 3;
        C_GET_ENERGY_INFO.prototype.scmd = 4;

        C_GET_ENERGY_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_GET_ENERGY_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.C_GET_ENERGY_INFO();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_GET_ENERGY_INFO;
    })();

    ItemPto.S_GET_ENERGY_INFO = (function() {

        function S_GET_ENERGY_INFO(p) {
            this.energyList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GET_ENERGY_INFO.prototype.cmd = 3;
        S_GET_ENERGY_INFO.prototype.scmd = 5;
        S_GET_ENERGY_INFO.prototype.energyList = $util.emptyArray;

        S_GET_ENERGY_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.energyList != null && m.energyList.length) {
                for (var i = 0; i < m.energyList.length; ++i)
                    $root.ItemPto.Energy.encode(m.energyList[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        S_GET_ENERGY_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.S_GET_ENERGY_INFO();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    if (!(m.energyList && m.energyList.length))
                        m.energyList = [];
                    m.energyList.push($root.ItemPto.Energy.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_GET_ENERGY_INFO;
    })();

    ItemPto.S_ENERGY_UPDATE = (function() {

        function S_ENERGY_UPDATE(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ENERGY_UPDATE.prototype.cmd = 3;
        S_ENERGY_UPDATE.prototype.scmd = 6;
        S_ENERGY_UPDATE.prototype.energy = null;

        S_ENERGY_UPDATE.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.energy != null && Object.hasOwnProperty.call(m, "energy"))
                $root.ItemPto.Energy.encode(m.energy, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_ENERGY_UPDATE.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.S_ENERGY_UPDATE();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.energy = $root.ItemPto.Energy.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_ENERGY_UPDATE;
    })();

    ItemPto.C_USE_ITEMS = (function() {

        function C_USE_ITEMS(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_USE_ITEMS.prototype.cmd = 3;
        C_USE_ITEMS.prototype.scmd = 7;
        C_USE_ITEMS.prototype.itemId = 0;
        C_USE_ITEMS.prototype.count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        C_USE_ITEMS.prototype.selectIndex = 0;

        C_USE_ITEMS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(24).uint32(m.itemId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(32).uint64(m.count);
            if (m.selectIndex != null && Object.hasOwnProperty.call(m, "selectIndex"))
                w.uint32(40).int32(m.selectIndex);
            return w;
        };

        C_USE_ITEMS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.C_USE_ITEMS();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.itemId = r.uint32();
                    break;
                case 4:
                    m.count = r.uint64();
                    break;
                case 5:
                    m.selectIndex = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_USE_ITEMS;
    })();

    ItemPto.S_USE_ITEMS = (function() {

        function S_USE_ITEMS(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_USE_ITEMS.prototype.cmd = 3;
        S_USE_ITEMS.prototype.scmd = 8;
        S_USE_ITEMS.prototype.items = $util.emptyArray;

        S_USE_ITEMS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.ItemPto.Item.encode(m.items[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        S_USE_ITEMS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.S_USE_ITEMS();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.ItemPto.Item.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_USE_ITEMS;
    })();

    ItemPto.C_CLEAR_NEW_TAG = (function() {

        function C_CLEAR_NEW_TAG(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_CLEAR_NEW_TAG.prototype.cmd = 3;
        C_CLEAR_NEW_TAG.prototype.scmd = 9;
        C_CLEAR_NEW_TAG.prototype.itemId = 0;

        C_CLEAR_NEW_TAG.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(24).uint32(m.itemId);
            return w;
        };

        C_CLEAR_NEW_TAG.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.C_CLEAR_NEW_TAG();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.cmd = r.int32();
                    break;
                case 2:
                    m.scmd = r.int32();
                    break;
                case 3:
                    m.itemId = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_CLEAR_NEW_TAG;
    })();

    ItemPto.Item = (function() {

        function Item(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Item.prototype.itemId = 0;
        Item.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Item.prototype.isNew = false;
        Item.prototype.expireTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        Item.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(16).uint32(m.itemId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(24).int64(m.count);
            if (m.isNew != null && Object.hasOwnProperty.call(m, "isNew"))
                w.uint32(32).bool(m.isNew);
            if (m.expireTime != null && Object.hasOwnProperty.call(m, "expireTime"))
                w.uint32(40).uint64(m.expireTime);
            return w;
        };

        Item.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.Item();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    m.itemId = r.uint32();
                    break;
                case 3:
                    m.count = r.int64();
                    break;
                case 4:
                    m.isNew = r.bool();
                    break;
                case 5:
                    m.expireTime = r.uint64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Item;
    })();

    ItemPto.Energy = (function() {

        function Energy(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Energy.prototype.itemId = 0;
        Energy.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Energy.prototype.nextRecoverTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        Energy.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(16).uint32(m.itemId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(24).int64(m.count);
            if (m.nextRecoverTime != null && Object.hasOwnProperty.call(m, "nextRecoverTime"))
                w.uint32(32).uint64(m.nextRecoverTime);
            return w;
        };

        Energy.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.Energy();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    m.itemId = r.uint32();
                    break;
                case 3:
                    m.count = r.int64();
                    break;
                case 4:
                    m.nextRecoverTime = r.uint64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Energy;
    })();

    return ItemPto;
})();

module.exports = $root;
