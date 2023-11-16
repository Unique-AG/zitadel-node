"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnPhoneVerificationCode = exports.SendPhoneVerificationCode = exports.SetHumanPhone = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "zitadel.user.v2beta";
function createBaseSetHumanPhone() {
    return { phone: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetHumanPhone = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.phone !== "") {
            writer.uint32(10).string(message.phone);
        }
        if (message.sendCode !== undefined) {
            exports.SendPhoneVerificationCode.encode(message.sendCode, writer.uint32(18).fork()).ldelim();
        }
        if (message.returnCode !== undefined) {
            exports.ReturnPhoneVerificationCode.encode(message.returnCode, writer.uint32(26).fork()).ldelim();
        }
        if (message.isVerified !== undefined) {
            writer.uint32(32).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetHumanPhone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sendCode = exports.SendPhoneVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = exports.ReturnPhoneVerificationCode.decode(reader, reader.uint32());
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
            phone: isSet(object.phone) ? String(object.phone) : "",
            sendCode: isSet(object.sendCode) ? exports.SendPhoneVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? exports.ReturnPhoneVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.phone !== undefined && (obj.phone = message.phone);
        message.sendCode !== undefined &&
            (obj.sendCode = message.sendCode ? exports.SendPhoneVerificationCode.toJSON(message.sendCode) : undefined);
        message.returnCode !== undefined &&
            (obj.returnCode = message.returnCode ? exports.ReturnPhoneVerificationCode.toJSON(message.returnCode) : undefined);
        message.isVerified !== undefined && (obj.isVerified = message.isVerified);
        return obj;
    },
    create(base) {
        return exports.SetHumanPhone.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetHumanPhone();
        message.phone = object.phone ?? "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? exports.SendPhoneVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? exports.ReturnPhoneVerificationCode.fromPartial(object.returnCode)
            : undefined;
        message.isVerified = object.isVerified ?? undefined;
        return message;
    },
};
function createBaseSendPhoneVerificationCode() {
    return {};
}
exports.SendPhoneVerificationCode = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendPhoneVerificationCode();
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
        return exports.SendPhoneVerificationCode.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseSendPhoneVerificationCode();
        return message;
    },
};
function createBaseReturnPhoneVerificationCode() {
    return {};
}
exports.ReturnPhoneVerificationCode = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnPhoneVerificationCode();
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
        return exports.ReturnPhoneVerificationCode.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseReturnPhoneVerificationCode();
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
