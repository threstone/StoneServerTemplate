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

    ServerPto.S_CONNECT = (function() {

        function S_CONNECT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_CONNECT.prototype.cmd = 1;
        S_CONNECT.prototype.scmd = 1;
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
        C_SWITCH_SERVER.prototype.scmd = 2;
        C_SWITCH_SERVER.prototype.serverId = 0;

        C_SWITCH_SERVER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.serverId != null && Object.hasOwnProperty.call(m, "serverId"))
                w.uint32(24).uint32(m.serverId);
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
        S_SWITCH_SERVER.prototype.scmd = 3;
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
        C_GET_SERVER_LIST.prototype.scmd = 4;

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
        S_GET_SERVER_LIST.prototype.scmd = 5;
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
        ServerInfo.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ServerInfo.prototype.status = 0;
        ServerInfo.prototype.tag = 0;

        ServerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.startTime != null && Object.hasOwnProperty.call(m, "startTime"))
                w.uint32(16).int64(m.startTime);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(24).uint32(m.status);
            if (m.tag != null && Object.hasOwnProperty.call(m, "tag"))
                w.uint32(32).uint32(m.tag);
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
                    m.startTime = r.int64();
                    break;
                case 3:
                    m.status = r.uint32();
                    break;
                case 4:
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

$root.PlayerPto = (function() {

    var PlayerPto = {};

    PlayerPto.C_GET_PLAYER_INFO = (function() {

        function C_GET_PLAYER_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_GET_PLAYER_INFO.prototype.cmd = 2;
        C_GET_PLAYER_INFO.prototype.scmd = 1;
        C_GET_PLAYER_INFO.prototype.userId = "";

        C_GET_PLAYER_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(26).string(m.userId);
            return w;
        };

        C_GET_PLAYER_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerPto.C_GET_PLAYER_INFO();
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
                    m.userId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_GET_PLAYER_INFO;
    })();

    PlayerPto.S_GET_PLAYER_INFO = (function() {

        function S_GET_PLAYER_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GET_PLAYER_INFO.prototype.cmd = 2;
        S_GET_PLAYER_INFO.prototype.scmd = 2;
        S_GET_PLAYER_INFO.prototype.player = null;

        S_GET_PLAYER_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.player != null && Object.hasOwnProperty.call(m, "player"))
                $root.PlayerPto.OtherPlayerInfo.encode(m.player, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_GET_PLAYER_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerPto.S_GET_PLAYER_INFO();
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
                    m.player = $root.PlayerPto.OtherPlayerInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_GET_PLAYER_INFO;
    })();

    PlayerPto.LoginInfo = (function() {

        function LoginInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LoginInfo.prototype.code = 0;
        LoginInfo.prototype.playerInfo = null;
        LoginInfo.prototype.serverId = 0;
        LoginInfo.prototype.serverOpenDay = 0;
        LoginInfo.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        LoginInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.playerInfo != null && Object.hasOwnProperty.call(m, "playerInfo"))
                $root.PlayerPto.PlayerInfo.encode(m.playerInfo, w.uint32(18).fork()).ldelim();
            if (m.serverId != null && Object.hasOwnProperty.call(m, "serverId"))
                w.uint32(24).uint32(m.serverId);
            if (m.serverOpenDay != null && Object.hasOwnProperty.call(m, "serverOpenDay"))
                w.uint32(32).uint32(m.serverOpenDay);
            if (m.serverTime != null && Object.hasOwnProperty.call(m, "serverTime"))
                w.uint32(40).uint64(m.serverTime);
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
                    m.playerInfo = $root.PlayerPto.PlayerInfo.decode(r, r.uint32());
                    break;
                case 3:
                    m.serverId = r.uint32();
                    break;
                case 4:
                    m.serverOpenDay = r.uint32();
                    break;
                case 5:
                    m.serverTime = r.uint64();
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

    PlayerPto.PlayerInfo = (function() {

        function PlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerInfo.prototype.userId = "";
        PlayerInfo.prototype.nickname = "";
        PlayerInfo.prototype.lv = 0;
        PlayerInfo.prototype.registerTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PlayerInfo.prototype.onlineTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PlayerInfo.prototype.offlineTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PlayerInfo.prototype.loginDay = 0;

        PlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(10).string(m.userId);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(18).string(m.nickname);
            if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
                w.uint32(24).uint32(m.lv);
            if (m.registerTime != null && Object.hasOwnProperty.call(m, "registerTime"))
                w.uint32(32).uint64(m.registerTime);
            if (m.onlineTime != null && Object.hasOwnProperty.call(m, "onlineTime"))
                w.uint32(40).uint64(m.onlineTime);
            if (m.offlineTime != null && Object.hasOwnProperty.call(m, "offlineTime"))
                w.uint32(48).uint64(m.offlineTime);
            if (m.loginDay != null && Object.hasOwnProperty.call(m, "loginDay"))
                w.uint32(56).uint32(m.loginDay);
            return w;
        };

        PlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerPto.PlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.userId = r.string();
                    break;
                case 2:
                    m.nickname = r.string();
                    break;
                case 3:
                    m.lv = r.uint32();
                    break;
                case 4:
                    m.registerTime = r.uint64();
                    break;
                case 5:
                    m.onlineTime = r.uint64();
                    break;
                case 6:
                    m.offlineTime = r.uint64();
                    break;
                case 7:
                    m.loginDay = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerInfo;
    })();

    PlayerPto.OtherPlayerInfo = (function() {

        function OtherPlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        OtherPlayerInfo.prototype.baseInfo = null;
        OtherPlayerInfo.prototype.serverId = 0;

        OtherPlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.baseInfo != null && Object.hasOwnProperty.call(m, "baseInfo"))
                $root.PlayerPto.PlayerInfo.encode(m.baseInfo, w.uint32(10).fork()).ldelim();
            if (m.serverId != null && Object.hasOwnProperty.call(m, "serverId"))
                w.uint32(16).uint32(m.serverId);
            return w;
        };

        OtherPlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerPto.OtherPlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.baseInfo = $root.PlayerPto.PlayerInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.serverId = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return OtherPlayerInfo;
    })();

    PlayerPto.BattlePlayer = (function() {

        function BattlePlayer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        BattlePlayer.prototype.baseInfo = null;
        BattlePlayer.prototype.serverId = 0;

        BattlePlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.baseInfo != null && Object.hasOwnProperty.call(m, "baseInfo"))
                $root.PlayerPto.PlayerInfo.encode(m.baseInfo, w.uint32(10).fork()).ldelim();
            if (m.serverId != null && Object.hasOwnProperty.call(m, "serverId"))
                w.uint32(16).uint32(m.serverId);
            return w;
        };

        BattlePlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerPto.BattlePlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.baseInfo = $root.PlayerPto.PlayerInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.serverId = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BattlePlayer;
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
            this.itemMap = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GET_ITEMS_INFO.prototype.cmd = 3;
        S_GET_ITEMS_INFO.prototype.scmd = 2;
        S_GET_ITEMS_INFO.prototype.itemMap = $util.emptyObject;

        S_GET_ITEMS_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.itemMap != null && Object.hasOwnProperty.call(m, "itemMap")) {
                for (var ks = Object.keys(m.itemMap), i = 0; i < ks.length; ++i) {
                    w.uint32(26).fork().uint32(8).uint32(ks[i]);
                    $root.ItemPto.Item.encode(m.itemMap[ks[i]], w.uint32(18).fork()).ldelim().ldelim();
                }
            }
            return w;
        };

        S_GET_ITEMS_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.S_GET_ITEMS_INFO(), k, value;
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
                    if (m.itemMap === $util.emptyObject)
                        m.itemMap = {};
                    var c2 = r.uint32() + r.pos;
                    k = 0;
                    value = null;
                    while (r.pos < c2) {
                        var tag2 = r.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            k = r.uint32();
                            break;
                        case 2:
                            value = $root.ItemPto.Item.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(tag2 & 7);
                            break;
                        }
                    }
                    m.itemMap[k] = value;
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

    ItemPto.C_USE_ITEMS = (function() {

        function C_USE_ITEMS(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_USE_ITEMS.prototype.cmd = 3;
        C_USE_ITEMS.prototype.scmd = 4;
        C_USE_ITEMS.prototype.itemId = 0;
        C_USE_ITEMS.prototype.count = 0;
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
                w.uint32(32).uint32(m.count);
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
                    m.count = r.uint32();
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
        S_USE_ITEMS.prototype.scmd = 5;
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
        C_CLEAR_NEW_TAG.prototype.scmd = 6;
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

    ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD = (function() {

        function C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD(p) {
            this.itemIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.prototype.cmd = 3;
        C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.prototype.scmd = 7;
        C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.prototype.itemIds = $util.emptyArray;

        C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.itemIds != null && m.itemIds.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.itemIds.length; ++i)
                    w.uint32(m.itemIds[i]);
                w.ldelim();
            }
            return w;
        };

        C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD();
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
                    if (!(m.itemIds && m.itemIds.length))
                        m.itemIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.itemIds.push(r.uint32());
                    } else
                        m.itemIds.push(r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD;
    })();

    ItemPto.S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD = (function() {

        function S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.prototype.cmd = 3;
        S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.prototype.scmd = 8;
        S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.prototype.items = $util.emptyArray;

        S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.encode = function encode(m, w) {
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

        S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD();
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

        return S_GET_ITEM_ACCUMULATED_COUNT_IN_PERIOD;
    })();

    ItemPto.Item = (function() {

        function Item(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Item.prototype.itemId = 0;
        Item.prototype.count = 0;
        Item.prototype.isNew = false;
        Item.prototype.expireTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        Item.prototype.nextRecoverTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        Item.prototype.param = 0;

        Item.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(8).uint32(m.itemId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(16).int32(m.count);
            if (m.isNew != null && Object.hasOwnProperty.call(m, "isNew"))
                w.uint32(24).bool(m.isNew);
            if (m.expireTime != null && Object.hasOwnProperty.call(m, "expireTime"))
                w.uint32(32).uint64(m.expireTime);
            if (m.nextRecoverTime != null && Object.hasOwnProperty.call(m, "nextRecoverTime"))
                w.uint32(40).uint64(m.nextRecoverTime);
            if (m.param != null && Object.hasOwnProperty.call(m, "param"))
                w.uint32(48).uint32(m.param);
            return w;
        };

        Item.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemPto.Item();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.itemId = r.uint32();
                    break;
                case 2:
                    m.count = r.int32();
                    break;
                case 3:
                    m.isNew = r.bool();
                    break;
                case 4:
                    m.expireTime = r.uint64();
                    break;
                case 5:
                    m.nextRecoverTime = r.uint64();
                    break;
                case 6:
                    m.param = r.uint32();
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

    return ItemPto;
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
        C_TEST_UPDATE_CODE.prototype.scmd = 2;

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
        C_TEST_MODIFY_SERVER_TIME.prototype.scmd = 3;
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
        C_TEST_RESTART_SERVER.prototype.scmd = 4;

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
        C_TEST_SERVER_TIME_INFO.prototype.scmd = 5;

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
        S_TEST_SERVER_TIME_INFO.prototype.scmd = 6;
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
        C_TEST_CLEAR_ACCOUNT_DATA.prototype.scmd = 7;

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

    TestPto.C_TEST_SET_CREATE_DAY = (function() {

        function C_TEST_SET_CREATE_DAY(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_TEST_SET_CREATE_DAY.prototype.cmd = 10000;
        C_TEST_SET_CREATE_DAY.prototype.scmd = 8;
        C_TEST_SET_CREATE_DAY.prototype.day = 0;

        C_TEST_SET_CREATE_DAY.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.day != null && Object.hasOwnProperty.call(m, "day"))
                w.uint32(24).uint32(m.day);
            return w;
        };

        C_TEST_SET_CREATE_DAY.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.C_TEST_SET_CREATE_DAY();
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
                    m.day = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_TEST_SET_CREATE_DAY;
    })();

    TestPto.C_ADD_TEST_EMAIL = (function() {

        function C_ADD_TEST_EMAIL(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_ADD_TEST_EMAIL.prototype.cmd = 10000;
        C_ADD_TEST_EMAIL.prototype.scmd = 9;

        C_ADD_TEST_EMAIL.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_ADD_TEST_EMAIL.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.C_ADD_TEST_EMAIL();
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

        return C_ADD_TEST_EMAIL;
    })();

    TestPto.C_TEST_ADD_BATCH_ITEMS = (function() {

        function C_TEST_ADD_BATCH_ITEMS(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_TEST_ADD_BATCH_ITEMS.prototype.cmd = 10000;
        C_TEST_ADD_BATCH_ITEMS.prototype.scmd = 10;
        C_TEST_ADD_BATCH_ITEMS.prototype.items = $util.emptyArray;

        C_TEST_ADD_BATCH_ITEMS.encode = function encode(m, w) {
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

        C_TEST_ADD_BATCH_ITEMS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.TestPto.C_TEST_ADD_BATCH_ITEMS();
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

        return C_TEST_ADD_BATCH_ITEMS;
    })();

    return TestPto;
})();

$root.EmailPto = (function() {

    var EmailPto = {};

    EmailPto.C_EMAIL_INFO = (function() {

        function C_EMAIL_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_EMAIL_INFO.prototype.cmd = 4;
        C_EMAIL_INFO.prototype.scmd = 1;

        C_EMAIL_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_EMAIL_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailPto.C_EMAIL_INFO();
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

        return C_EMAIL_INFO;
    })();

    EmailPto.S_EMAIL_INFO = (function() {

        function S_EMAIL_INFO(p) {
            this.emailMap = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_EMAIL_INFO.prototype.cmd = 4;
        S_EMAIL_INFO.prototype.scmd = 2;
        S_EMAIL_INFO.prototype.emailMap = $util.emptyObject;

        S_EMAIL_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.emailMap != null && Object.hasOwnProperty.call(m, "emailMap")) {
                for (var ks = Object.keys(m.emailMap), i = 0; i < ks.length; ++i) {
                    w.uint32(26).fork().uint32(8).uint32(ks[i]);
                    $root.EmailPto.Email.encode(m.emailMap[ks[i]], w.uint32(18).fork()).ldelim().ldelim();
                }
            }
            return w;
        };

        S_EMAIL_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailPto.S_EMAIL_INFO(), k, value;
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
                    if (m.emailMap === $util.emptyObject)
                        m.emailMap = {};
                    var c2 = r.uint32() + r.pos;
                    k = 0;
                    value = null;
                    while (r.pos < c2) {
                        var tag2 = r.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            k = r.uint32();
                            break;
                        case 2:
                            value = $root.EmailPto.Email.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(tag2 & 7);
                            break;
                        }
                    }
                    m.emailMap[k] = value;
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_EMAIL_INFO;
    })();

    EmailPto.C_READ_EMAIL = (function() {

        function C_READ_EMAIL(p) {
            this.emailIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_READ_EMAIL.prototype.cmd = 4;
        C_READ_EMAIL.prototype.scmd = 3;
        C_READ_EMAIL.prototype.emailIds = $util.emptyArray;

        C_READ_EMAIL.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.emailIds != null && m.emailIds.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.emailIds.length; ++i)
                    w.uint32(m.emailIds[i]);
                w.ldelim();
            }
            return w;
        };

        C_READ_EMAIL.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailPto.C_READ_EMAIL();
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
                    if (!(m.emailIds && m.emailIds.length))
                        m.emailIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.emailIds.push(r.uint32());
                    } else
                        m.emailIds.push(r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_READ_EMAIL;
    })();

    EmailPto.S_READ_EMAIL = (function() {

        function S_READ_EMAIL(p) {
            this.emails = [];
            this.rewards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_READ_EMAIL.prototype.cmd = 4;
        S_READ_EMAIL.prototype.scmd = 4;
        S_READ_EMAIL.prototype.emails = $util.emptyArray;
        S_READ_EMAIL.prototype.rewards = $util.emptyArray;

        S_READ_EMAIL.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.emails != null && m.emails.length) {
                for (var i = 0; i < m.emails.length; ++i)
                    $root.EmailPto.Email.encode(m.emails[i], w.uint32(26).fork()).ldelim();
            }
            if (m.rewards != null && m.rewards.length) {
                for (var i = 0; i < m.rewards.length; ++i)
                    $root.ItemPto.Item.encode(m.rewards[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        S_READ_EMAIL.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailPto.S_READ_EMAIL();
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
                    if (!(m.emails && m.emails.length))
                        m.emails = [];
                    m.emails.push($root.EmailPto.Email.decode(r, r.uint32()));
                    break;
                case 4:
                    if (!(m.rewards && m.rewards.length))
                        m.rewards = [];
                    m.rewards.push($root.ItemPto.Item.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_READ_EMAIL;
    })();

    EmailPto.C_DELETE_EMAILS = (function() {

        function C_DELETE_EMAILS(p) {
            this.emailIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_DELETE_EMAILS.prototype.cmd = 4;
        C_DELETE_EMAILS.prototype.scmd = 5;
        C_DELETE_EMAILS.prototype.emailIds = $util.emptyArray;

        C_DELETE_EMAILS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.emailIds != null && m.emailIds.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.emailIds.length; ++i)
                    w.uint32(m.emailIds[i]);
                w.ldelim();
            }
            return w;
        };

        C_DELETE_EMAILS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailPto.C_DELETE_EMAILS();
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
                    if (!(m.emailIds && m.emailIds.length))
                        m.emailIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.emailIds.push(r.uint32());
                    } else
                        m.emailIds.push(r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_DELETE_EMAILS;
    })();

    EmailPto.S_DELETE_EMAILS = (function() {

        function S_DELETE_EMAILS(p) {
            this.emailIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_DELETE_EMAILS.prototype.cmd = 4;
        S_DELETE_EMAILS.prototype.scmd = 6;
        S_DELETE_EMAILS.prototype.emailIds = $util.emptyArray;

        S_DELETE_EMAILS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.emailIds != null && m.emailIds.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.emailIds.length; ++i)
                    w.uint32(m.emailIds[i]);
                w.ldelim();
            }
            return w;
        };

        S_DELETE_EMAILS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailPto.S_DELETE_EMAILS();
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
                    if (!(m.emailIds && m.emailIds.length))
                        m.emailIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.emailIds.push(r.uint32());
                    } else
                        m.emailIds.push(r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_DELETE_EMAILS;
    })();

    EmailPto.S_ON_NEW_EMAIL = (function() {

        function S_ON_NEW_EMAIL(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ON_NEW_EMAIL.prototype.cmd = 4;
        S_ON_NEW_EMAIL.prototype.scmd = 7;
        S_ON_NEW_EMAIL.prototype.email = null;

        S_ON_NEW_EMAIL.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.email != null && Object.hasOwnProperty.call(m, "email"))
                $root.EmailPto.Email.encode(m.email, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_ON_NEW_EMAIL.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailPto.S_ON_NEW_EMAIL();
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
                    m.email = $root.EmailPto.Email.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_ON_NEW_EMAIL;
    })();

    EmailPto.Email = (function() {

        function Email(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Email.prototype.id = 0;
        Email.prototype.configId = 0;
        Email.prototype.params = "";
        Email.prototype.items = $util.emptyArray;
        Email.prototype.isRead = false;
        Email.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        Email.prototype.expireTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        Email.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.configId != null && Object.hasOwnProperty.call(m, "configId"))
                w.uint32(16).uint32(m.configId);
            if (m.params != null && Object.hasOwnProperty.call(m, "params"))
                w.uint32(26).string(m.params);
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.ItemPto.Item.encode(m.items[i], w.uint32(34).fork()).ldelim();
            }
            if (m.isRead != null && Object.hasOwnProperty.call(m, "isRead"))
                w.uint32(40).bool(m.isRead);
            if (m.sendTime != null && Object.hasOwnProperty.call(m, "sendTime"))
                w.uint32(48).uint64(m.sendTime);
            if (m.expireTime != null && Object.hasOwnProperty.call(m, "expireTime"))
                w.uint32(56).uint64(m.expireTime);
            return w;
        };

        Email.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailPto.Email();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.uint32();
                    break;
                case 2:
                    m.configId = r.uint32();
                    break;
                case 3:
                    m.params = r.string();
                    break;
                case 4:
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.ItemPto.Item.decode(r, r.uint32()));
                    break;
                case 5:
                    m.isRead = r.bool();
                    break;
                case 6:
                    m.sendTime = r.uint64();
                    break;
                case 7:
                    m.expireTime = r.uint64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Email;
    })();

    return EmailPto;
})();

$root.FriendPto = (function() {

    var FriendPto = {};

    FriendPto.C_FRIEND_INFO = (function() {

        function C_FRIEND_INFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_FRIEND_INFO.prototype.cmd = 6;
        C_FRIEND_INFO.prototype.scmd = 1;

        C_FRIEND_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_FRIEND_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_FRIEND_INFO();
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

        return C_FRIEND_INFO;
    })();

    FriendPto.S_FRIEND_INFO = (function() {

        function S_FRIEND_INFO(p) {
            this.friendList = [];
            this.friendRequestList = [];
            this.blockList = [];
            this.sendGiftRecords = [];
            this.friendGiftUserIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_FRIEND_INFO.prototype.cmd = 6;
        S_FRIEND_INFO.prototype.scmd = 2;
        S_FRIEND_INFO.prototype.friendList = $util.emptyArray;
        S_FRIEND_INFO.prototype.friendRequestList = $util.emptyArray;
        S_FRIEND_INFO.prototype.blockList = $util.emptyArray;
        S_FRIEND_INFO.prototype.sendGiftRecords = $util.emptyArray;
        S_FRIEND_INFO.prototype.friendsGiveTimes = 0;
        S_FRIEND_INFO.prototype.friendGiftUserIds = $util.emptyArray;

        S_FRIEND_INFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.friendList != null && m.friendList.length) {
                for (var i = 0; i < m.friendList.length; ++i)
                    $root.FriendPto.Friend.encode(m.friendList[i], w.uint32(26).fork()).ldelim();
            }
            if (m.friendRequestList != null && m.friendRequestList.length) {
                for (var i = 0; i < m.friendRequestList.length; ++i)
                    $root.FriendPto.FriendRequest.encode(m.friendRequestList[i], w.uint32(34).fork()).ldelim();
            }
            if (m.blockList != null && m.blockList.length) {
                for (var i = 0; i < m.blockList.length; ++i)
                    $root.FriendPto.Friend.encode(m.blockList[i], w.uint32(42).fork()).ldelim();
            }
            if (m.sendGiftRecords != null && m.sendGiftRecords.length) {
                for (var i = 0; i < m.sendGiftRecords.length; ++i)
                    w.uint32(50).string(m.sendGiftRecords[i]);
            }
            if (m.friendsGiveTimes != null && Object.hasOwnProperty.call(m, "friendsGiveTimes"))
                w.uint32(56).uint32(m.friendsGiveTimes);
            if (m.friendGiftUserIds != null && m.friendGiftUserIds.length) {
                for (var i = 0; i < m.friendGiftUserIds.length; ++i)
                    w.uint32(66).string(m.friendGiftUserIds[i]);
            }
            return w;
        };

        S_FRIEND_INFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_FRIEND_INFO();
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
                    if (!(m.friendList && m.friendList.length))
                        m.friendList = [];
                    m.friendList.push($root.FriendPto.Friend.decode(r, r.uint32()));
                    break;
                case 4:
                    if (!(m.friendRequestList && m.friendRequestList.length))
                        m.friendRequestList = [];
                    m.friendRequestList.push($root.FriendPto.FriendRequest.decode(r, r.uint32()));
                    break;
                case 5:
                    if (!(m.blockList && m.blockList.length))
                        m.blockList = [];
                    m.blockList.push($root.FriendPto.Friend.decode(r, r.uint32()));
                    break;
                case 6:
                    if (!(m.sendGiftRecords && m.sendGiftRecords.length))
                        m.sendGiftRecords = [];
                    m.sendGiftRecords.push(r.string());
                    break;
                case 7:
                    m.friendsGiveTimes = r.uint32();
                    break;
                case 8:
                    if (!(m.friendGiftUserIds && m.friendGiftUserIds.length))
                        m.friendGiftUserIds = [];
                    m.friendGiftUserIds.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_FRIEND_INFO;
    })();

    FriendPto.C_SEARCH_PLAYER = (function() {

        function C_SEARCH_PLAYER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_SEARCH_PLAYER.prototype.cmd = 6;
        C_SEARCH_PLAYER.prototype.scmd = 3;
        C_SEARCH_PLAYER.prototype.searchKey = "";

        C_SEARCH_PLAYER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.searchKey != null && Object.hasOwnProperty.call(m, "searchKey"))
                w.uint32(26).string(m.searchKey);
            return w;
        };

        C_SEARCH_PLAYER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_SEARCH_PLAYER();
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
                    m.searchKey = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_SEARCH_PLAYER;
    })();

    FriendPto.S_SEARCH_PLAYER = (function() {

        function S_SEARCH_PLAYER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_SEARCH_PLAYER.prototype.cmd = 6;
        S_SEARCH_PLAYER.prototype.scmd = 4;
        S_SEARCH_PLAYER.prototype.player = null;

        S_SEARCH_PLAYER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.player != null && Object.hasOwnProperty.call(m, "player"))
                $root.FriendPto.Friend.encode(m.player, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_SEARCH_PLAYER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_SEARCH_PLAYER();
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
                    m.player = $root.FriendPto.Friend.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_SEARCH_PLAYER;
    })();

    FriendPto.C_GET_POSSIBLE_FRIENDS = (function() {

        function C_GET_POSSIBLE_FRIENDS(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_GET_POSSIBLE_FRIENDS.prototype.cmd = 6;
        C_GET_POSSIBLE_FRIENDS.prototype.scmd = 5;

        C_GET_POSSIBLE_FRIENDS.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            return w;
        };

        C_GET_POSSIBLE_FRIENDS.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_GET_POSSIBLE_FRIENDS();
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

        return C_GET_POSSIBLE_FRIENDS;
    })();

    FriendPto.S_GET_POSSIBLE_FRIEND = (function() {

        function S_GET_POSSIBLE_FRIEND(p) {
            this.friendList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GET_POSSIBLE_FRIEND.prototype.cmd = 6;
        S_GET_POSSIBLE_FRIEND.prototype.scmd = 6;
        S_GET_POSSIBLE_FRIEND.prototype.friendList = $util.emptyArray;

        S_GET_POSSIBLE_FRIEND.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.friendList != null && m.friendList.length) {
                for (var i = 0; i < m.friendList.length; ++i)
                    $root.FriendPto.Friend.encode(m.friendList[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        S_GET_POSSIBLE_FRIEND.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_GET_POSSIBLE_FRIEND();
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
                    if (!(m.friendList && m.friendList.length))
                        m.friendList = [];
                    m.friendList.push($root.FriendPto.Friend.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_GET_POSSIBLE_FRIEND;
    })();

    FriendPto.C_REQ_ADD_FRIEND = (function() {

        function C_REQ_ADD_FRIEND(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_REQ_ADD_FRIEND.prototype.cmd = 6;
        C_REQ_ADD_FRIEND.prototype.scmd = 7;
        C_REQ_ADD_FRIEND.prototype.userId = "";

        C_REQ_ADD_FRIEND.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(26).string(m.userId);
            return w;
        };

        C_REQ_ADD_FRIEND.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_REQ_ADD_FRIEND();
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
                    m.userId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_REQ_ADD_FRIEND;
    })();

    FriendPto.S_REQ_ADD_FRIEND = (function() {

        function S_REQ_ADD_FRIEND(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_REQ_ADD_FRIEND.prototype.cmd = 6;
        S_REQ_ADD_FRIEND.prototype.scmd = 8;
        S_REQ_ADD_FRIEND.prototype.userId = "";

        S_REQ_ADD_FRIEND.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(26).string(m.userId);
            return w;
        };

        S_REQ_ADD_FRIEND.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_REQ_ADD_FRIEND();
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
                    m.userId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_REQ_ADD_FRIEND;
    })();

    FriendPto.S_NEW_FRIEND_REQ = (function() {

        function S_NEW_FRIEND_REQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_NEW_FRIEND_REQ.prototype.cmd = 6;
        S_NEW_FRIEND_REQ.prototype.scmd = 9;
        S_NEW_FRIEND_REQ.prototype.friendReq = null;

        S_NEW_FRIEND_REQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.friendReq != null && Object.hasOwnProperty.call(m, "friendReq"))
                $root.FriendPto.FriendRequest.encode(m.friendReq, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_NEW_FRIEND_REQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_NEW_FRIEND_REQ();
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
                    m.friendReq = $root.FriendPto.FriendRequest.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_NEW_FRIEND_REQ;
    })();

    FriendPto.C_HANDLE_FRIEND_REQUEST = (function() {

        function C_HANDLE_FRIEND_REQUEST(p) {
            this.userIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_HANDLE_FRIEND_REQUEST.prototype.cmd = 6;
        C_HANDLE_FRIEND_REQUEST.prototype.scmd = 10;
        C_HANDLE_FRIEND_REQUEST.prototype.userIds = $util.emptyArray;
        C_HANDLE_FRIEND_REQUEST.prototype.isAccept = false;

        C_HANDLE_FRIEND_REQUEST.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userIds != null && m.userIds.length) {
                for (var i = 0; i < m.userIds.length; ++i)
                    w.uint32(26).string(m.userIds[i]);
            }
            if (m.isAccept != null && Object.hasOwnProperty.call(m, "isAccept"))
                w.uint32(32).bool(m.isAccept);
            return w;
        };

        C_HANDLE_FRIEND_REQUEST.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_HANDLE_FRIEND_REQUEST();
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
                    if (!(m.userIds && m.userIds.length))
                        m.userIds = [];
                    m.userIds.push(r.string());
                    break;
                case 4:
                    m.isAccept = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_HANDLE_FRIEND_REQUEST;
    })();

    FriendPto.S_HANDLE_FRIEND_REQUEST = (function() {

        function S_HANDLE_FRIEND_REQUEST(p) {
            this.userIds = [];
            this.errCodes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_HANDLE_FRIEND_REQUEST.prototype.cmd = 6;
        S_HANDLE_FRIEND_REQUEST.prototype.scmd = 11;
        S_HANDLE_FRIEND_REQUEST.prototype.userIds = $util.emptyArray;
        S_HANDLE_FRIEND_REQUEST.prototype.isAccept = false;
        S_HANDLE_FRIEND_REQUEST.prototype.errCodes = $util.emptyArray;

        S_HANDLE_FRIEND_REQUEST.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userIds != null && m.userIds.length) {
                for (var i = 0; i < m.userIds.length; ++i)
                    w.uint32(26).string(m.userIds[i]);
            }
            if (m.isAccept != null && Object.hasOwnProperty.call(m, "isAccept"))
                w.uint32(32).bool(m.isAccept);
            if (m.errCodes != null && m.errCodes.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.errCodes.length; ++i)
                    w.uint32(m.errCodes[i]);
                w.ldelim();
            }
            return w;
        };

        S_HANDLE_FRIEND_REQUEST.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_HANDLE_FRIEND_REQUEST();
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
                    if (!(m.userIds && m.userIds.length))
                        m.userIds = [];
                    m.userIds.push(r.string());
                    break;
                case 4:
                    m.isAccept = r.bool();
                    break;
                case 5:
                    if (!(m.errCodes && m.errCodes.length))
                        m.errCodes = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.errCodes.push(r.uint32());
                    } else
                        m.errCodes.push(r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_HANDLE_FRIEND_REQUEST;
    })();

    FriendPto.C_DELETE_FRIEND = (function() {

        function C_DELETE_FRIEND(p) {
            this.userIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_DELETE_FRIEND.prototype.cmd = 6;
        C_DELETE_FRIEND.prototype.scmd = 12;
        C_DELETE_FRIEND.prototype.userIds = $util.emptyArray;

        C_DELETE_FRIEND.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userIds != null && m.userIds.length) {
                for (var i = 0; i < m.userIds.length; ++i)
                    w.uint32(26).string(m.userIds[i]);
            }
            return w;
        };

        C_DELETE_FRIEND.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_DELETE_FRIEND();
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
                    if (!(m.userIds && m.userIds.length))
                        m.userIds = [];
                    m.userIds.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_DELETE_FRIEND;
    })();

    FriendPto.S_NEW_FRIEND = (function() {

        function S_NEW_FRIEND(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_NEW_FRIEND.prototype.cmd = 6;
        S_NEW_FRIEND.prototype.scmd = 13;
        S_NEW_FRIEND.prototype.friend = null;

        S_NEW_FRIEND.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.friend != null && Object.hasOwnProperty.call(m, "friend"))
                $root.FriendPto.Friend.encode(m.friend, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_NEW_FRIEND.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_NEW_FRIEND();
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
                    m.friend = $root.FriendPto.Friend.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_NEW_FRIEND;
    })();

    FriendPto.S_DELETE_FRIEND = (function() {

        function S_DELETE_FRIEND(p) {
            this.userIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_DELETE_FRIEND.prototype.cmd = 6;
        S_DELETE_FRIEND.prototype.scmd = 14;
        S_DELETE_FRIEND.prototype.userIds = $util.emptyArray;

        S_DELETE_FRIEND.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userIds != null && m.userIds.length) {
                for (var i = 0; i < m.userIds.length; ++i)
                    w.uint32(26).string(m.userIds[i]);
            }
            return w;
        };

        S_DELETE_FRIEND.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_DELETE_FRIEND();
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
                    if (!(m.userIds && m.userIds.length))
                        m.userIds = [];
                    m.userIds.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_DELETE_FRIEND;
    })();

    FriendPto.C_BLOCK_PLAYER = (function() {

        function C_BLOCK_PLAYER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_BLOCK_PLAYER.prototype.cmd = 6;
        C_BLOCK_PLAYER.prototype.scmd = 15;
        C_BLOCK_PLAYER.prototype.userId = "";

        C_BLOCK_PLAYER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(26).string(m.userId);
            return w;
        };

        C_BLOCK_PLAYER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_BLOCK_PLAYER();
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
                    m.userId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_BLOCK_PLAYER;
    })();

    FriendPto.C_CANCEL_BLOCK_PLAYER = (function() {

        function C_CANCEL_BLOCK_PLAYER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_CANCEL_BLOCK_PLAYER.prototype.cmd = 6;
        C_CANCEL_BLOCK_PLAYER.prototype.scmd = 16;
        C_CANCEL_BLOCK_PLAYER.prototype.userId = "";

        C_CANCEL_BLOCK_PLAYER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(26).string(m.userId);
            return w;
        };

        C_CANCEL_BLOCK_PLAYER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_CANCEL_BLOCK_PLAYER();
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
                    m.userId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_CANCEL_BLOCK_PLAYER;
    })();

    FriendPto.S_NEW_BLOCK_PLAYER = (function() {

        function S_NEW_BLOCK_PLAYER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_NEW_BLOCK_PLAYER.prototype.cmd = 6;
        S_NEW_BLOCK_PLAYER.prototype.scmd = 17;
        S_NEW_BLOCK_PLAYER.prototype.blockPlayer = null;

        S_NEW_BLOCK_PLAYER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.blockPlayer != null && Object.hasOwnProperty.call(m, "blockPlayer"))
                $root.FriendPto.Friend.encode(m.blockPlayer, w.uint32(26).fork()).ldelim();
            return w;
        };

        S_NEW_BLOCK_PLAYER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_NEW_BLOCK_PLAYER();
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
                    m.blockPlayer = $root.FriendPto.Friend.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_NEW_BLOCK_PLAYER;
    })();

    FriendPto.S_DELETE_BLOCK_PLAYER = (function() {

        function S_DELETE_BLOCK_PLAYER(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_DELETE_BLOCK_PLAYER.prototype.cmd = 6;
        S_DELETE_BLOCK_PLAYER.prototype.scmd = 18;
        S_DELETE_BLOCK_PLAYER.prototype.userId = "";

        S_DELETE_BLOCK_PLAYER.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(26).string(m.userId);
            return w;
        };

        S_DELETE_BLOCK_PLAYER.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_DELETE_BLOCK_PLAYER();
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
                    m.userId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_DELETE_BLOCK_PLAYER;
    })();

    FriendPto.C_SEND_TO_FRIENDS_GIFT = (function() {

        function C_SEND_TO_FRIENDS_GIFT(p) {
            this.userIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_SEND_TO_FRIENDS_GIFT.prototype.cmd = 6;
        C_SEND_TO_FRIENDS_GIFT.prototype.scmd = 19;
        C_SEND_TO_FRIENDS_GIFT.prototype.userIds = $util.emptyArray;

        C_SEND_TO_FRIENDS_GIFT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userIds != null && m.userIds.length) {
                for (var i = 0; i < m.userIds.length; ++i)
                    w.uint32(26).string(m.userIds[i]);
            }
            return w;
        };

        C_SEND_TO_FRIENDS_GIFT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_SEND_TO_FRIENDS_GIFT();
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
                    if (!(m.userIds && m.userIds.length))
                        m.userIds = [];
                    m.userIds.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_SEND_TO_FRIENDS_GIFT;
    })();

    FriendPto.S_SEND_TO_FRIENDS_GIFT = (function() {

        function S_SEND_TO_FRIENDS_GIFT(p) {
            this.sendGiftRecords = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_SEND_TO_FRIENDS_GIFT.prototype.cmd = 6;
        S_SEND_TO_FRIENDS_GIFT.prototype.scmd = 20;
        S_SEND_TO_FRIENDS_GIFT.prototype.sendGiftRecords = $util.emptyArray;

        S_SEND_TO_FRIENDS_GIFT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.sendGiftRecords != null && m.sendGiftRecords.length) {
                for (var i = 0; i < m.sendGiftRecords.length; ++i)
                    w.uint32(26).string(m.sendGiftRecords[i]);
            }
            return w;
        };

        S_SEND_TO_FRIENDS_GIFT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_SEND_TO_FRIENDS_GIFT();
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
                    if (!(m.sendGiftRecords && m.sendGiftRecords.length))
                        m.sendGiftRecords = [];
                    m.sendGiftRecords.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_SEND_TO_FRIENDS_GIFT;
    })();

    FriendPto.C_GET_FRIENDS_GIFT = (function() {

        function C_GET_FRIENDS_GIFT(p) {
            this.userIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        C_GET_FRIENDS_GIFT.prototype.cmd = 6;
        C_GET_FRIENDS_GIFT.prototype.scmd = 21;
        C_GET_FRIENDS_GIFT.prototype.userIds = $util.emptyArray;

        C_GET_FRIENDS_GIFT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.userIds != null && m.userIds.length) {
                for (var i = 0; i < m.userIds.length; ++i)
                    w.uint32(26).string(m.userIds[i]);
            }
            return w;
        };

        C_GET_FRIENDS_GIFT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.C_GET_FRIENDS_GIFT();
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
                    if (!(m.userIds && m.userIds.length))
                        m.userIds = [];
                    m.userIds.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return C_GET_FRIENDS_GIFT;
    })();

    FriendPto.S_GET_FRIENDS_GIFT = (function() {

        function S_GET_FRIENDS_GIFT(p) {
            this.rewards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_GET_FRIENDS_GIFT.prototype.cmd = 6;
        S_GET_FRIENDS_GIFT.prototype.scmd = 22;
        S_GET_FRIENDS_GIFT.prototype.friendsGiveTimes = 0;
        S_GET_FRIENDS_GIFT.prototype.rewards = $util.emptyArray;

        S_GET_FRIENDS_GIFT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.friendsGiveTimes != null && Object.hasOwnProperty.call(m, "friendsGiveTimes"))
                w.uint32(24).uint32(m.friendsGiveTimes);
            if (m.rewards != null && m.rewards.length) {
                for (var i = 0; i < m.rewards.length; ++i)
                    $root.ItemPto.Item.encode(m.rewards[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        S_GET_FRIENDS_GIFT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_GET_FRIENDS_GIFT();
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
                    m.friendsGiveTimes = r.uint32();
                    break;
                case 4:
                    if (!(m.rewards && m.rewards.length))
                        m.rewards = [];
                    m.rewards.push($root.ItemPto.Item.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_GET_FRIENDS_GIFT;
    })();

    FriendPto.S_ON_NEW_FRIEND_GIFT = (function() {

        function S_ON_NEW_FRIEND_GIFT(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        S_ON_NEW_FRIEND_GIFT.prototype.cmd = 6;
        S_ON_NEW_FRIEND_GIFT.prototype.scmd = 23;
        S_ON_NEW_FRIEND_GIFT.prototype.friendUserId = "";

        S_ON_NEW_FRIEND_GIFT.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cmd != null && Object.hasOwnProperty.call(m, "cmd"))
                w.uint32(8).int32(m.cmd);
            if (m.scmd != null && Object.hasOwnProperty.call(m, "scmd"))
                w.uint32(16).int32(m.scmd);
            if (m.friendUserId != null && Object.hasOwnProperty.call(m, "friendUserId"))
                w.uint32(26).string(m.friendUserId);
            return w;
        };

        S_ON_NEW_FRIEND_GIFT.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.S_ON_NEW_FRIEND_GIFT();
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
                    m.friendUserId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return S_ON_NEW_FRIEND_GIFT;
    })();

    FriendPto.Friend = (function() {

        function Friend(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Friend.prototype.userId = "";
        Friend.prototype.nickname = "";
        Friend.prototype.battlePower = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        Friend.prototype.offlineTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        Friend.prototype.online = false;

        Friend.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(10).string(m.userId);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(18).string(m.nickname);
            if (m.battlePower != null && Object.hasOwnProperty.call(m, "battlePower"))
                w.uint32(40).uint64(m.battlePower);
            if (m.offlineTime != null && Object.hasOwnProperty.call(m, "offlineTime"))
                w.uint32(48).uint64(m.offlineTime);
            if (m.online != null && Object.hasOwnProperty.call(m, "online"))
                w.uint32(56).bool(m.online);
            return w;
        };

        Friend.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.Friend();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.userId = r.string();
                    break;
                case 2:
                    m.nickname = r.string();
                    break;
                case 5:
                    m.battlePower = r.uint64();
                    break;
                case 6:
                    m.offlineTime = r.uint64();
                    break;
                case 7:
                    m.online = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Friend;
    })();

    FriendPto.FriendRequest = (function() {

        function FriendRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FriendRequest.prototype.userId = "";
        FriendRequest.prototype.nickname = "";
        FriendRequest.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        FriendRequest.prototype.iconBg = 0;

        FriendRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(10).string(m.userId);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(18).string(m.nickname);
            if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                w.uint32(24).uint64(m.time);
            if (m.iconBg != null && Object.hasOwnProperty.call(m, "iconBg"))
                w.uint32(56).uint32(m.iconBg);
            return w;
        };

        FriendRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.FriendPto.FriendRequest();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.userId = r.string();
                    break;
                case 2:
                    m.nickname = r.string();
                    break;
                case 3:
                    m.time = r.uint64();
                    break;
                case 7:
                    m.iconBg = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FriendRequest;
    })();

    return FriendPto;
})();

module.exports = $root;
