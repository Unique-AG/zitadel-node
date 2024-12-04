"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/resources/webkey/v3alpha/key.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebKey = exports.GetWebKey = exports.WebKeyState = exports.protobufPackage = void 0;
exports.webKeyStateFromJSON = webKeyStateFromJSON;
exports.webKeyStateToJSON = webKeyStateToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../object/v3alpha/object.js");
const config_js_1 = require("./config.js");
exports.protobufPackage = "zitadel.resources.webkey.v3alpha";
var WebKeyState;
(function (WebKeyState) {
    WebKeyState[WebKeyState["STATE_UNSPECIFIED"] = 0] = "STATE_UNSPECIFIED";
    WebKeyState[WebKeyState["STATE_INITIAL"] = 1] = "STATE_INITIAL";
    WebKeyState[WebKeyState["STATE_ACTIVE"] = 2] = "STATE_ACTIVE";
    WebKeyState[WebKeyState["STATE_INACTIVE"] = 3] = "STATE_INACTIVE";
    WebKeyState[WebKeyState["STATE_REMOVED"] = 4] = "STATE_REMOVED";
    WebKeyState[WebKeyState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(WebKeyState || (exports.WebKeyState = WebKeyState = {}));
function webKeyStateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNSPECIFIED":
            return WebKeyState.STATE_UNSPECIFIED;
        case 1:
        case "STATE_INITIAL":
            return WebKeyState.STATE_INITIAL;
        case 2:
        case "STATE_ACTIVE":
            return WebKeyState.STATE_ACTIVE;
        case 3:
        case "STATE_INACTIVE":
            return WebKeyState.STATE_INACTIVE;
        case 4:
        case "STATE_REMOVED":
            return WebKeyState.STATE_REMOVED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return WebKeyState.UNRECOGNIZED;
    }
}
function webKeyStateToJSON(object) {
    switch (object) {
        case WebKeyState.STATE_UNSPECIFIED:
            return "STATE_UNSPECIFIED";
        case WebKeyState.STATE_INITIAL:
            return "STATE_INITIAL";
        case WebKeyState.STATE_ACTIVE:
            return "STATE_ACTIVE";
        case WebKeyState.STATE_INACTIVE:
            return "STATE_INACTIVE";
        case WebKeyState.STATE_REMOVED:
            return "STATE_REMOVED";
        case WebKeyState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseGetWebKey() {
    return { details: undefined, config: undefined, state: 0 };
}
exports.GetWebKey = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.config !== undefined) {
            exports.WebKey.encode(message.config, writer.uint32(18).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWebKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.config = exports.WebKey.decode(reader, reader.uint32());
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            config: isSet(object.config) ? exports.WebKey.fromJSON(object.config) : undefined,
            state: isSet(object.state) ? webKeyStateFromJSON(object.state) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.config !== undefined) {
            obj.config = exports.WebKey.toJSON(message.config);
        }
        if (message.state !== 0) {
            obj.state = webKeyStateToJSON(message.state);
        }
        return obj;
    },
    create(base) {
        return exports.GetWebKey.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetWebKey();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.WebKey.fromPartial(object.config)
            : undefined;
        message.state = object.state ?? 0;
        return message;
    },
};
function createBaseWebKey() {
    return { rsa: undefined, ecdsa: undefined, ed25519: undefined };
}
exports.WebKey = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.rsa !== undefined) {
            config_js_1.WebKeyRSAConfig.encode(message.rsa, writer.uint32(50).fork()).join();
        }
        if (message.ecdsa !== undefined) {
            config_js_1.WebKeyECDSAConfig.encode(message.ecdsa, writer.uint32(58).fork()).join();
        }
        if (message.ed25519 !== undefined) {
            config_js_1.WebKeyED25519Config.encode(message.ed25519, writer.uint32(66).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.rsa = config_js_1.WebKeyRSAConfig.decode(reader, reader.uint32());
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.ecdsa = config_js_1.WebKeyECDSAConfig.decode(reader, reader.uint32());
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.ed25519 = config_js_1.WebKeyED25519Config.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            rsa: isSet(object.rsa) ? config_js_1.WebKeyRSAConfig.fromJSON(object.rsa) : undefined,
            ecdsa: isSet(object.ecdsa) ? config_js_1.WebKeyECDSAConfig.fromJSON(object.ecdsa) : undefined,
            ed25519: isSet(object.ed25519) ? config_js_1.WebKeyED25519Config.fromJSON(object.ed25519) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rsa !== undefined) {
            obj.rsa = config_js_1.WebKeyRSAConfig.toJSON(message.rsa);
        }
        if (message.ecdsa !== undefined) {
            obj.ecdsa = config_js_1.WebKeyECDSAConfig.toJSON(message.ecdsa);
        }
        if (message.ed25519 !== undefined) {
            obj.ed25519 = config_js_1.WebKeyED25519Config.toJSON(message.ed25519);
        }
        return obj;
    },
    create(base) {
        return exports.WebKey.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWebKey();
        message.rsa = (object.rsa !== undefined && object.rsa !== null)
            ? config_js_1.WebKeyRSAConfig.fromPartial(object.rsa)
            : undefined;
        message.ecdsa = (object.ecdsa !== undefined && object.ecdsa !== null)
            ? config_js_1.WebKeyECDSAConfig.fromPartial(object.ecdsa)
            : undefined;
        message.ed25519 = (object.ed25519 !== undefined && object.ed25519 !== null)
            ? config_js_1.WebKeyED25519Config.fromPartial(object.ed25519)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
