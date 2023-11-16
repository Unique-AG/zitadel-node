"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnEmailVerificationCode = exports.SendEmailVerificationCode = exports.SetHumanEmail = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "zitadel.user.v2beta";
function createBaseSetHumanEmail() {
    return { email: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetHumanEmail = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.sendCode !== undefined) {
            exports.SendEmailVerificationCode.encode(message.sendCode, writer.uint32(18).fork()).ldelim();
        }
        if (message.returnCode !== undefined) {
            exports.ReturnEmailVerificationCode.encode(message.returnCode, writer.uint32(26).fork()).ldelim();
        }
        if (message.isVerified !== undefined) {
            writer.uint32(32).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetHumanEmail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sendCode = exports.SendEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = exports.ReturnEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isVerified = reader.bool();
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
            email: isSet(object.email) ? String(object.email) : "",
            sendCode: isSet(object.sendCode) ? exports.SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? exports.ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.sendCode !== undefined &&
            (obj.sendCode = message.sendCode ? exports.SendEmailVerificationCode.toJSON(message.sendCode) : undefined);
        message.returnCode !== undefined &&
            (obj.returnCode = message.returnCode ? exports.ReturnEmailVerificationCode.toJSON(message.returnCode) : undefined);
        message.isVerified !== undefined && (obj.isVerified = message.isVerified);
        return obj;
    },
    create(base) {
        return exports.SetHumanEmail.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetHumanEmail();
        message.email = object.email ?? "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? exports.SendEmailVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? exports.ReturnEmailVerificationCode.fromPartial(object.returnCode)
            : undefined;
        message.isVerified = object.isVerified ?? undefined;
        return message;
    },
};
function createBaseSendEmailVerificationCode() {
    return { urlTemplate: undefined };
}
exports.SendEmailVerificationCode = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.urlTemplate !== undefined) {
            writer.uint32(10).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendEmailVerificationCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.urlTemplate = reader.string();
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
        return { urlTemplate: isSet(object.urlTemplate) ? String(object.urlTemplate) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.urlTemplate !== undefined && (obj.urlTemplate = message.urlTemplate);
        return obj;
    },
    create(base) {
        return exports.SendEmailVerificationCode.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSendEmailVerificationCode();
        message.urlTemplate = object.urlTemplate ?? undefined;
        return message;
    },
};
function createBaseReturnEmailVerificationCode() {
    return {};
}
exports.ReturnEmailVerificationCode = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnEmailVerificationCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ReturnEmailVerificationCode.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseReturnEmailVerificationCode();
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
