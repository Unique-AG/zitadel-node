"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHTTPResponse = exports.AuthOption = exports.Options = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "zitadel.protoc_gen_zitadel.v2";
function createBaseOptions() {
    return { authOption: undefined, httpResponse: undefined };
}
exports.Options = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authOption !== undefined) {
            exports.AuthOption.encode(message.authOption, writer.uint32(10).fork()).ldelim();
        }
        if (message.httpResponse !== undefined) {
            exports.CustomHTTPResponse.encode(message.httpResponse, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authOption = exports.AuthOption.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.httpResponse = exports.CustomHTTPResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            authOption: isSet(object.authOption) ? exports.AuthOption.fromJSON(object.authOption) : undefined,
            httpResponse: isSet(object.httpResponse) ? exports.CustomHTTPResponse.fromJSON(object.httpResponse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authOption !== undefined &&
            (obj.authOption = message.authOption ? exports.AuthOption.toJSON(message.authOption) : undefined);
        message.httpResponse !== undefined &&
            (obj.httpResponse = message.httpResponse ? exports.CustomHTTPResponse.toJSON(message.httpResponse) : undefined);
        return obj;
    },
    create(base) {
        return exports.Options.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOptions();
        message.authOption = (object.authOption !== undefined && object.authOption !== null)
            ? exports.AuthOption.fromPartial(object.authOption)
            : undefined;
        message.httpResponse = (object.httpResponse !== undefined && object.httpResponse !== null)
            ? exports.CustomHTTPResponse.fromPartial(object.httpResponse)
            : undefined;
        return message;
    },
};
function createBaseAuthOption() {
    return { permission: "", orgField: "" };
}
exports.AuthOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.permission !== "") {
            writer.uint32(10).string(message.permission);
        }
        if (message.orgField !== "") {
            writer.uint32(26).string(message.orgField);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.permission = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orgField = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            permission: isSet(object.permission) ? String(object.permission) : "",
            orgField: isSet(object.orgField) ? String(object.orgField) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.permission !== undefined && (obj.permission = message.permission);
        message.orgField !== undefined && (obj.orgField = message.orgField);
        return obj;
    },
    create(base) {
        return exports.AuthOption.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthOption();
        message.permission = object.permission ?? "";
        message.orgField = object.orgField ?? "";
        return message;
    },
};
function createBaseCustomHTTPResponse() {
    return { successCode: 0 };
}
exports.CustomHTTPResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.successCode !== 0) {
            writer.uint32(8).int32(message.successCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomHTTPResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.successCode = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { successCode: isSet(object.successCode) ? Number(object.successCode) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.successCode !== undefined && (obj.successCode = Math.round(message.successCode));
        return obj;
    },
    create(base) {
        return exports.CustomHTTPResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCustomHTTPResponse();
        message.successCode = object.successCode ?? 0;
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
