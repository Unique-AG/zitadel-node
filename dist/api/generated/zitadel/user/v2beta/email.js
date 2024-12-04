// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/user/v2beta/email.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export const protobufPackage = "zitadel.user.v2beta";
function createBaseSetHumanEmail() {
    return { email: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
export const SetHumanEmail = {
    encode(message, writer = new BinaryWriter()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.sendCode !== undefined) {
            SendEmailVerificationCode.encode(message.sendCode, writer.uint32(18).fork()).join();
        }
        if (message.returnCode !== undefined) {
            ReturnEmailVerificationCode.encode(message.returnCode, writer.uint32(26).fork()).join();
        }
        if (message.isVerified !== undefined) {
            writer.uint32(32).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetHumanEmail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.sendCode = SendEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = ReturnEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.isVerified = reader.bool();
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            sendCode: isSet(object.sendCode) ? SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.sendCode !== undefined) {
            obj.sendCode = SendEmailVerificationCode.toJSON(message.sendCode);
        }
        if (message.returnCode !== undefined) {
            obj.returnCode = ReturnEmailVerificationCode.toJSON(message.returnCode);
        }
        if (message.isVerified !== undefined) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return SetHumanEmail.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetHumanEmail();
        message.email = object.email ?? "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? SendEmailVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? ReturnEmailVerificationCode.fromPartial(object.returnCode)
            : undefined;
        message.isVerified = object.isVerified ?? undefined;
        return message;
    },
};
function createBaseHumanEmail() {
    return { email: "", isVerified: false };
}
export const HumanEmail = {
    encode(message, writer = new BinaryWriter()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.isVerified !== false) {
            writer.uint32(16).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHumanEmail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.isVerified = reader.bool();
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.isVerified !== false) {
            obj.isVerified = message.isVerified;
        }
        return obj;
    },
    create(base) {
        return HumanEmail.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHumanEmail();
        message.email = object.email ?? "";
        message.isVerified = object.isVerified ?? false;
        return message;
    },
};
function createBaseSendEmailVerificationCode() {
    return { urlTemplate: undefined };
}
export const SendEmailVerificationCode = {
    encode(message, writer = new BinaryWriter()) {
        if (message.urlTemplate !== undefined) {
            writer.uint32(10).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendEmailVerificationCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.urlTemplate = reader.string();
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
        return { urlTemplate: isSet(object.urlTemplate) ? globalThis.String(object.urlTemplate) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.urlTemplate !== undefined) {
            obj.urlTemplate = message.urlTemplate;
        }
        return obj;
    },
    create(base) {
        return SendEmailVerificationCode.fromPartial(base ?? {});
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
export const ReturnEmailVerificationCode = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnEmailVerificationCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
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
        return ReturnEmailVerificationCode.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseReturnEmailVerificationCode();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}