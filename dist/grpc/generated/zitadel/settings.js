"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityPolicy = exports.OIDCSettings = exports.DebugNotificationProvider = exports.TwilioConfig = exports.SMSProvider = exports.SMTPConfig = exports.SecretGeneratorTypeQuery = exports.SecretGeneratorQuery = exports.SecretGenerator = exports.sMSProviderConfigStateToJSON = exports.sMSProviderConfigStateFromJSON = exports.SMSProviderConfigState = exports.secretGeneratorTypeToJSON = exports.secretGeneratorTypeFromJSON = exports.SecretGeneratorType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../google/protobuf/duration");
const object_1 = require("./object");
exports.protobufPackage = "zitadel.settings.v1";
var SecretGeneratorType;
(function (SecretGeneratorType) {
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_UNSPECIFIED"] = 0] = "SECRET_GENERATOR_TYPE_UNSPECIFIED";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_INIT_CODE"] = 1] = "SECRET_GENERATOR_TYPE_INIT_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE"] = 2] = "SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE"] = 3] = "SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE"] = 4] = "SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE"] = 5] = "SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_APP_SECRET"] = 6] = "SECRET_GENERATOR_TYPE_APP_SECRET";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_OTP_SMS"] = 7] = "SECRET_GENERATOR_TYPE_OTP_SMS";
    SecretGeneratorType[SecretGeneratorType["SECRET_GENERATOR_TYPE_OTP_EMAIL"] = 8] = "SECRET_GENERATOR_TYPE_OTP_EMAIL";
    SecretGeneratorType[SecretGeneratorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecretGeneratorType || (exports.SecretGeneratorType = SecretGeneratorType = {}));
function secretGeneratorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SECRET_GENERATOR_TYPE_UNSPECIFIED":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_UNSPECIFIED;
        case 1:
        case "SECRET_GENERATOR_TYPE_INIT_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_INIT_CODE;
        case 2:
        case "SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE;
        case 3:
        case "SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE;
        case 4:
        case "SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE;
        case 5:
        case "SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE;
        case 6:
        case "SECRET_GENERATOR_TYPE_APP_SECRET":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_APP_SECRET;
        case 7:
        case "SECRET_GENERATOR_TYPE_OTP_SMS":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_OTP_SMS;
        case 8:
        case "SECRET_GENERATOR_TYPE_OTP_EMAIL":
            return SecretGeneratorType.SECRET_GENERATOR_TYPE_OTP_EMAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecretGeneratorType.UNRECOGNIZED;
    }
}
exports.secretGeneratorTypeFromJSON = secretGeneratorTypeFromJSON;
function secretGeneratorTypeToJSON(object) {
    switch (object) {
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_UNSPECIFIED:
            return "SECRET_GENERATOR_TYPE_UNSPECIFIED";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_INIT_CODE:
            return "SECRET_GENERATOR_TYPE_INIT_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE:
            return "SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE:
            return "SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE:
            return "SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE:
            return "SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_APP_SECRET:
            return "SECRET_GENERATOR_TYPE_APP_SECRET";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_OTP_SMS:
            return "SECRET_GENERATOR_TYPE_OTP_SMS";
        case SecretGeneratorType.SECRET_GENERATOR_TYPE_OTP_EMAIL:
            return "SECRET_GENERATOR_TYPE_OTP_EMAIL";
        case SecretGeneratorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.secretGeneratorTypeToJSON = secretGeneratorTypeToJSON;
var SMSProviderConfigState;
(function (SMSProviderConfigState) {
    SMSProviderConfigState[SMSProviderConfigState["SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED"] = 0] = "SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED";
    SMSProviderConfigState[SMSProviderConfigState["SMS_PROVIDER_CONFIG_ACTIVE"] = 1] = "SMS_PROVIDER_CONFIG_ACTIVE";
    SMSProviderConfigState[SMSProviderConfigState["SMS_PROVIDER_CONFIG_INACTIVE"] = 2] = "SMS_PROVIDER_CONFIG_INACTIVE";
    SMSProviderConfigState[SMSProviderConfigState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SMSProviderConfigState || (exports.SMSProviderConfigState = SMSProviderConfigState = {}));
function sMSProviderConfigStateFromJSON(object) {
    switch (object) {
        case 0:
        case "SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED":
            return SMSProviderConfigState.SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED;
        case 1:
        case "SMS_PROVIDER_CONFIG_ACTIVE":
            return SMSProviderConfigState.SMS_PROVIDER_CONFIG_ACTIVE;
        case 2:
        case "SMS_PROVIDER_CONFIG_INACTIVE":
            return SMSProviderConfigState.SMS_PROVIDER_CONFIG_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SMSProviderConfigState.UNRECOGNIZED;
    }
}
exports.sMSProviderConfigStateFromJSON = sMSProviderConfigStateFromJSON;
function sMSProviderConfigStateToJSON(object) {
    switch (object) {
        case SMSProviderConfigState.SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED:
            return "SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED";
        case SMSProviderConfigState.SMS_PROVIDER_CONFIG_ACTIVE:
            return "SMS_PROVIDER_CONFIG_ACTIVE";
        case SMSProviderConfigState.SMS_PROVIDER_CONFIG_INACTIVE:
            return "SMS_PROVIDER_CONFIG_INACTIVE";
        case SMSProviderConfigState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sMSProviderConfigStateToJSON = sMSProviderConfigStateToJSON;
function createBaseSecretGenerator() {
    return {
        generatorType: 0,
        details: undefined,
        length: 0,
        expiry: undefined,
        includeLowerLetters: false,
        includeUpperLetters: false,
        includeDigits: false,
        includeSymbols: false,
    };
}
exports.SecretGenerator = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.generatorType !== 0) {
            writer.uint32(8).int32(message.generatorType);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.length !== 0) {
            writer.uint32(24).uint32(message.length);
        }
        if (message.expiry !== undefined) {
            duration_1.Duration.encode(message.expiry, writer.uint32(34).fork()).ldelim();
        }
        if (message.includeLowerLetters === true) {
            writer.uint32(40).bool(message.includeLowerLetters);
        }
        if (message.includeUpperLetters === true) {
            writer.uint32(48).bool(message.includeUpperLetters);
        }
        if (message.includeDigits === true) {
            writer.uint32(56).bool(message.includeDigits);
        }
        if (message.includeSymbols === true) {
            writer.uint32(64).bool(message.includeSymbols);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecretGenerator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.generatorType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.length = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.expiry = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.includeLowerLetters = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.includeUpperLetters = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.includeDigits = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.includeSymbols = reader.bool();
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
            generatorType: isSet(object.generatorType) ? secretGeneratorTypeFromJSON(object.generatorType) : 0,
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            length: isSet(object.length) ? Number(object.length) : 0,
            expiry: isSet(object.expiry) ? duration_1.Duration.fromJSON(object.expiry) : undefined,
            includeLowerLetters: isSet(object.includeLowerLetters) ? Boolean(object.includeLowerLetters) : false,
            includeUpperLetters: isSet(object.includeUpperLetters) ? Boolean(object.includeUpperLetters) : false,
            includeDigits: isSet(object.includeDigits) ? Boolean(object.includeDigits) : false,
            includeSymbols: isSet(object.includeSymbols) ? Boolean(object.includeSymbols) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.generatorType !== undefined && (obj.generatorType = secretGeneratorTypeToJSON(message.generatorType));
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.length !== undefined && (obj.length = Math.round(message.length));
        message.expiry !== undefined && (obj.expiry = message.expiry ? duration_1.Duration.toJSON(message.expiry) : undefined);
        message.includeLowerLetters !== undefined && (obj.includeLowerLetters = message.includeLowerLetters);
        message.includeUpperLetters !== undefined && (obj.includeUpperLetters = message.includeUpperLetters);
        message.includeDigits !== undefined && (obj.includeDigits = message.includeDigits);
        message.includeSymbols !== undefined && (obj.includeSymbols = message.includeSymbols);
        return obj;
    },
    create(base) {
        return exports.SecretGenerator.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecretGenerator();
        message.generatorType = object.generatorType ?? 0;
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.length = object.length ?? 0;
        message.expiry = (object.expiry !== undefined && object.expiry !== null)
            ? duration_1.Duration.fromPartial(object.expiry)
            : undefined;
        message.includeLowerLetters = object.includeLowerLetters ?? false;
        message.includeUpperLetters = object.includeUpperLetters ?? false;
        message.includeDigits = object.includeDigits ?? false;
        message.includeSymbols = object.includeSymbols ?? false;
        return message;
    },
};
function createBaseSecretGeneratorQuery() {
    return { typeQuery: undefined };
}
exports.SecretGeneratorQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.typeQuery !== undefined) {
            exports.SecretGeneratorTypeQuery.encode(message.typeQuery, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecretGeneratorQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.typeQuery = exports.SecretGeneratorTypeQuery.decode(reader, reader.uint32());
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
        return { typeQuery: isSet(object.typeQuery) ? exports.SecretGeneratorTypeQuery.fromJSON(object.typeQuery) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.typeQuery !== undefined &&
            (obj.typeQuery = message.typeQuery ? exports.SecretGeneratorTypeQuery.toJSON(message.typeQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.SecretGeneratorQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecretGeneratorQuery();
        message.typeQuery = (object.typeQuery !== undefined && object.typeQuery !== null)
            ? exports.SecretGeneratorTypeQuery.fromPartial(object.typeQuery)
            : undefined;
        return message;
    },
};
function createBaseSecretGeneratorTypeQuery() {
    return { generatorType: 0 };
}
exports.SecretGeneratorTypeQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.generatorType !== 0) {
            writer.uint32(8).int32(message.generatorType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecretGeneratorTypeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.generatorType = reader.int32();
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
        return { generatorType: isSet(object.generatorType) ? secretGeneratorTypeFromJSON(object.generatorType) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.generatorType !== undefined && (obj.generatorType = secretGeneratorTypeToJSON(message.generatorType));
        return obj;
    },
    create(base) {
        return exports.SecretGeneratorTypeQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecretGeneratorTypeQuery();
        message.generatorType = object.generatorType ?? 0;
        return message;
    },
};
function createBaseSMTPConfig() {
    return { details: undefined, senderAddress: "", senderName: "", tls: false, host: "", user: "", replyToAddress: "" };
}
exports.SMTPConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.senderAddress !== "") {
            writer.uint32(18).string(message.senderAddress);
        }
        if (message.senderName !== "") {
            writer.uint32(26).string(message.senderName);
        }
        if (message.tls === true) {
            writer.uint32(32).bool(message.tls);
        }
        if (message.host !== "") {
            writer.uint32(42).string(message.host);
        }
        if (message.user !== "") {
            writer.uint32(50).string(message.user);
        }
        if (message.replyToAddress !== "") {
            writer.uint32(58).string(message.replyToAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSMTPConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.senderAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.senderName = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.tls = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.user = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.replyToAddress = reader.string();
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
            senderName: isSet(object.senderName) ? String(object.senderName) : "",
            tls: isSet(object.tls) ? Boolean(object.tls) : false,
            host: isSet(object.host) ? String(object.host) : "",
            user: isSet(object.user) ? String(object.user) : "",
            replyToAddress: isSet(object.replyToAddress) ? String(object.replyToAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
        message.senderName !== undefined && (obj.senderName = message.senderName);
        message.tls !== undefined && (obj.tls = message.tls);
        message.host !== undefined && (obj.host = message.host);
        message.user !== undefined && (obj.user = message.user);
        message.replyToAddress !== undefined && (obj.replyToAddress = message.replyToAddress);
        return obj;
    },
    create(base) {
        return exports.SMTPConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSMTPConfig();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.senderAddress = object.senderAddress ?? "";
        message.senderName = object.senderName ?? "";
        message.tls = object.tls ?? false;
        message.host = object.host ?? "";
        message.user = object.user ?? "";
        message.replyToAddress = object.replyToAddress ?? "";
        return message;
    },
};
function createBaseSMSProvider() {
    return { details: undefined, id: "", state: 0, twilio: undefined };
}
exports.SMSProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.twilio !== undefined) {
            exports.TwilioConfig.encode(message.twilio, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSMSProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.twilio = exports.TwilioConfig.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            id: isSet(object.id) ? String(object.id) : "",
            state: isSet(object.state) ? sMSProviderConfigStateFromJSON(object.state) : 0,
            twilio: isSet(object.twilio) ? exports.TwilioConfig.fromJSON(object.twilio) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.id !== undefined && (obj.id = message.id);
        message.state !== undefined && (obj.state = sMSProviderConfigStateToJSON(message.state));
        message.twilio !== undefined && (obj.twilio = message.twilio ? exports.TwilioConfig.toJSON(message.twilio) : undefined);
        return obj;
    },
    create(base) {
        return exports.SMSProvider.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSMSProvider();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.id = object.id ?? "";
        message.state = object.state ?? 0;
        message.twilio = (object.twilio !== undefined && object.twilio !== null)
            ? exports.TwilioConfig.fromPartial(object.twilio)
            : undefined;
        return message;
    },
};
function createBaseTwilioConfig() {
    return { sid: "", senderNumber: "" };
}
exports.TwilioConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sid !== "") {
            writer.uint32(10).string(message.sid);
        }
        if (message.senderNumber !== "") {
            writer.uint32(18).string(message.senderNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTwilioConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sid = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.senderNumber = reader.string();
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
            sid: isSet(object.sid) ? String(object.sid) : "",
            senderNumber: isSet(object.senderNumber) ? String(object.senderNumber) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sid !== undefined && (obj.sid = message.sid);
        message.senderNumber !== undefined && (obj.senderNumber = message.senderNumber);
        return obj;
    },
    create(base) {
        return exports.TwilioConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTwilioConfig();
        message.sid = object.sid ?? "";
        message.senderNumber = object.senderNumber ?? "";
        return message;
    },
};
function createBaseDebugNotificationProvider() {
    return { details: undefined, compact: false };
}
exports.DebugNotificationProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.compact === true) {
            writer.uint32(16).bool(message.compact);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDebugNotificationProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.compact = reader.bool();
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            compact: isSet(object.compact) ? Boolean(object.compact) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.compact !== undefined && (obj.compact = message.compact);
        return obj;
    },
    create(base) {
        return exports.DebugNotificationProvider.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDebugNotificationProvider();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.compact = object.compact ?? false;
        return message;
    },
};
function createBaseOIDCSettings() {
    return {
        details: undefined,
        accessTokenLifetime: undefined,
        idTokenLifetime: undefined,
        refreshTokenIdleExpiration: undefined,
        refreshTokenExpiration: undefined,
    };
}
exports.OIDCSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.accessTokenLifetime !== undefined) {
            duration_1.Duration.encode(message.accessTokenLifetime, writer.uint32(18).fork()).ldelim();
        }
        if (message.idTokenLifetime !== undefined) {
            duration_1.Duration.encode(message.idTokenLifetime, writer.uint32(26).fork()).ldelim();
        }
        if (message.refreshTokenIdleExpiration !== undefined) {
            duration_1.Duration.encode(message.refreshTokenIdleExpiration, writer.uint32(34).fork()).ldelim();
        }
        if (message.refreshTokenExpiration !== undefined) {
            duration_1.Duration.encode(message.refreshTokenExpiration, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOIDCSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accessTokenLifetime = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.idTokenLifetime = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.refreshTokenIdleExpiration = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.refreshTokenExpiration = duration_1.Duration.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            accessTokenLifetime: isSet(object.accessTokenLifetime)
                ? duration_1.Duration.fromJSON(object.accessTokenLifetime)
                : undefined,
            idTokenLifetime: isSet(object.idTokenLifetime) ? duration_1.Duration.fromJSON(object.idTokenLifetime) : undefined,
            refreshTokenIdleExpiration: isSet(object.refreshTokenIdleExpiration)
                ? duration_1.Duration.fromJSON(object.refreshTokenIdleExpiration)
                : undefined,
            refreshTokenExpiration: isSet(object.refreshTokenExpiration)
                ? duration_1.Duration.fromJSON(object.refreshTokenExpiration)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.accessTokenLifetime !== undefined &&
            (obj.accessTokenLifetime = message.accessTokenLifetime
                ? duration_1.Duration.toJSON(message.accessTokenLifetime)
                : undefined);
        message.idTokenLifetime !== undefined &&
            (obj.idTokenLifetime = message.idTokenLifetime ? duration_1.Duration.toJSON(message.idTokenLifetime) : undefined);
        message.refreshTokenIdleExpiration !== undefined &&
            (obj.refreshTokenIdleExpiration = message.refreshTokenIdleExpiration
                ? duration_1.Duration.toJSON(message.refreshTokenIdleExpiration)
                : undefined);
        message.refreshTokenExpiration !== undefined && (obj.refreshTokenExpiration = message.refreshTokenExpiration
            ? duration_1.Duration.toJSON(message.refreshTokenExpiration)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.OIDCSettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOIDCSettings();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.accessTokenLifetime = (object.accessTokenLifetime !== undefined && object.accessTokenLifetime !== null)
            ? duration_1.Duration.fromPartial(object.accessTokenLifetime)
            : undefined;
        message.idTokenLifetime = (object.idTokenLifetime !== undefined && object.idTokenLifetime !== null)
            ? duration_1.Duration.fromPartial(object.idTokenLifetime)
            : undefined;
        message.refreshTokenIdleExpiration =
            (object.refreshTokenIdleExpiration !== undefined && object.refreshTokenIdleExpiration !== null)
                ? duration_1.Duration.fromPartial(object.refreshTokenIdleExpiration)
                : undefined;
        message.refreshTokenExpiration =
            (object.refreshTokenExpiration !== undefined && object.refreshTokenExpiration !== null)
                ? duration_1.Duration.fromPartial(object.refreshTokenExpiration)
                : undefined;
        return message;
    },
};
function createBaseSecurityPolicy() {
    return { details: undefined, enableIframeEmbedding: false, allowedOrigins: [] };
}
exports.SecurityPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.enableIframeEmbedding === true) {
            writer.uint32(16).bool(message.enableIframeEmbedding);
        }
        for (const v of message.allowedOrigins) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecurityPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.enableIframeEmbedding = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.allowedOrigins.push(reader.string());
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            enableIframeEmbedding: isSet(object.enableIframeEmbedding) ? Boolean(object.enableIframeEmbedding) : false,
            allowedOrigins: Array.isArray(object?.allowedOrigins) ? object.allowedOrigins.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.enableIframeEmbedding !== undefined && (obj.enableIframeEmbedding = message.enableIframeEmbedding);
        if (message.allowedOrigins) {
            obj.allowedOrigins = message.allowedOrigins.map((e) => e);
        }
        else {
            obj.allowedOrigins = [];
        }
        return obj;
    },
    create(base) {
        return exports.SecurityPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecurityPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.enableIframeEmbedding = object.enableIframeEmbedding ?? false;
        message.allowedOrigins = object.allowedOrigins?.map((e) => e) || [];
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
