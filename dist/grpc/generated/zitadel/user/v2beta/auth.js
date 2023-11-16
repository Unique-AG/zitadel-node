"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasskeyRegistrationCode = exports.ReturnPasskeyRegistrationCode = exports.SendPasskeyRegistrationLink = exports.passkeyAuthenticatorToJSON = exports.passkeyAuthenticatorFromJSON = exports.PasskeyAuthenticator = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "zitadel.user.v2beta";
var PasskeyAuthenticator;
(function (PasskeyAuthenticator) {
    PasskeyAuthenticator[PasskeyAuthenticator["PASSKEY_AUTHENTICATOR_UNSPECIFIED"] = 0] = "PASSKEY_AUTHENTICATOR_UNSPECIFIED";
    PasskeyAuthenticator[PasskeyAuthenticator["PASSKEY_AUTHENTICATOR_PLATFORM"] = 1] = "PASSKEY_AUTHENTICATOR_PLATFORM";
    PasskeyAuthenticator[PasskeyAuthenticator["PASSKEY_AUTHENTICATOR_CROSS_PLATFORM"] = 2] = "PASSKEY_AUTHENTICATOR_CROSS_PLATFORM";
    PasskeyAuthenticator[PasskeyAuthenticator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PasskeyAuthenticator || (exports.PasskeyAuthenticator = PasskeyAuthenticator = {}));
function passkeyAuthenticatorFromJSON(object) {
    switch (object) {
        case 0:
        case "PASSKEY_AUTHENTICATOR_UNSPECIFIED":
            return PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_UNSPECIFIED;
        case 1:
        case "PASSKEY_AUTHENTICATOR_PLATFORM":
            return PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_PLATFORM;
        case 2:
        case "PASSKEY_AUTHENTICATOR_CROSS_PLATFORM":
            return PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_CROSS_PLATFORM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PasskeyAuthenticator.UNRECOGNIZED;
    }
}
exports.passkeyAuthenticatorFromJSON = passkeyAuthenticatorFromJSON;
function passkeyAuthenticatorToJSON(object) {
    switch (object) {
        case PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_UNSPECIFIED:
            return "PASSKEY_AUTHENTICATOR_UNSPECIFIED";
        case PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_PLATFORM:
            return "PASSKEY_AUTHENTICATOR_PLATFORM";
        case PasskeyAuthenticator.PASSKEY_AUTHENTICATOR_CROSS_PLATFORM:
            return "PASSKEY_AUTHENTICATOR_CROSS_PLATFORM";
        case PasskeyAuthenticator.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.passkeyAuthenticatorToJSON = passkeyAuthenticatorToJSON;
function createBaseSendPasskeyRegistrationLink() {
    return { urlTemplate: undefined };
}
exports.SendPasskeyRegistrationLink = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.urlTemplate !== undefined) {
            writer.uint32(10).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendPasskeyRegistrationLink();
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
        return exports.SendPasskeyRegistrationLink.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSendPasskeyRegistrationLink();
        message.urlTemplate = object.urlTemplate ?? undefined;
        return message;
    },
};
function createBaseReturnPasskeyRegistrationCode() {
    return {};
}
exports.ReturnPasskeyRegistrationCode = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnPasskeyRegistrationCode();
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
        return exports.ReturnPasskeyRegistrationCode.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseReturnPasskeyRegistrationCode();
        return message;
    },
};
function createBasePasskeyRegistrationCode() {
    return { id: "", code: "" };
}
exports.PasskeyRegistrationCode = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasskeyRegistrationCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.code = reader.string();
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
        return { id: isSet(object.id) ? String(object.id) : "", code: isSet(object.code) ? String(object.code) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.code !== undefined && (obj.code = message.code);
        return obj;
    },
    create(base) {
        return exports.PasskeyRegistrationCode.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasskeyRegistrationCode();
        message.id = object.id ?? "";
        message.code = object.code ?? "";
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
