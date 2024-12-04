"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/quota.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = exports.Unit = exports.protobufPackage = void 0;
exports.unitFromJSON = unitFromJSON;
exports.unitToJSON = unitToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "zitadel.quota.v1";
var Unit;
(function (Unit) {
    Unit[Unit["UNIT_UNIMPLEMENTED"] = 0] = "UNIT_UNIMPLEMENTED";
    /**
     * UNIT_REQUESTS_ALL_AUTHENTICATED - The sum of all requests to the ZITADEL API with an authorization header,
     * excluding the following exceptions
     * - Calls to the System API
     * - Calls that cause internal server errors
     * - Failed authorizations
     * - Requests after the quota already exceeded
     */
    Unit[Unit["UNIT_REQUESTS_ALL_AUTHENTICATED"] = 1] = "UNIT_REQUESTS_ALL_AUTHENTICATED";
    /** UNIT_ACTIONS_ALL_RUN_SECONDS - The sum of all actions run durations in seconds */
    Unit[Unit["UNIT_ACTIONS_ALL_RUN_SECONDS"] = 2] = "UNIT_ACTIONS_ALL_RUN_SECONDS";
    Unit[Unit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Unit || (exports.Unit = Unit = {}));
function unitFromJSON(object) {
    switch (object) {
        case 0:
        case "UNIT_UNIMPLEMENTED":
            return Unit.UNIT_UNIMPLEMENTED;
        case 1:
        case "UNIT_REQUESTS_ALL_AUTHENTICATED":
            return Unit.UNIT_REQUESTS_ALL_AUTHENTICATED;
        case 2:
        case "UNIT_ACTIONS_ALL_RUN_SECONDS":
            return Unit.UNIT_ACTIONS_ALL_RUN_SECONDS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Unit.UNRECOGNIZED;
    }
}
function unitToJSON(object) {
    switch (object) {
        case Unit.UNIT_UNIMPLEMENTED:
            return "UNIT_UNIMPLEMENTED";
        case Unit.UNIT_REQUESTS_ALL_AUTHENTICATED:
            return "UNIT_REQUESTS_ALL_AUTHENTICATED";
        case Unit.UNIT_ACTIONS_ALL_RUN_SECONDS:
            return "UNIT_ACTIONS_ALL_RUN_SECONDS";
        case Unit.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseNotification() {
    return { percent: 0, repeat: false, callUrl: "" };
}
exports.Notification = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.percent !== 0) {
            writer.uint32(8).uint32(message.percent);
        }
        if (message.repeat !== false) {
            writer.uint32(16).bool(message.repeat);
        }
        if (message.callUrl !== "") {
            writer.uint32(26).string(message.callUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotification();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.percent = reader.uint32();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.repeat = reader.bool();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.callUrl = reader.string();
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
            percent: isSet(object.percent) ? globalThis.Number(object.percent) : 0,
            repeat: isSet(object.repeat) ? globalThis.Boolean(object.repeat) : false,
            callUrl: isSet(object.callUrl) ? globalThis.String(object.callUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.percent !== 0) {
            obj.percent = Math.round(message.percent);
        }
        if (message.repeat !== false) {
            obj.repeat = message.repeat;
        }
        if (message.callUrl !== "") {
            obj.callUrl = message.callUrl;
        }
        return obj;
    },
    create(base) {
        return exports.Notification.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotification();
        message.percent = object.percent ?? 0;
        message.repeat = object.repeat ?? false;
        message.callUrl = object.callUrl ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
