"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgent_HeaderEntry = exports.UserAgent_HeaderValues = exports.UserAgent = exports.CreationDateQuery = exports.UserIDQuery = exports.IDsQuery = exports.SearchQuery = exports.OTPFactor = exports.TOTPFactor = exports.WebAuthNFactor = exports.IntentFactor = exports.PasswordFactor = exports.UserFactor = exports.Factors = exports.Session_MetadataEntry = exports.Session = exports.sessionFieldNameToJSON = exports.sessionFieldNameFromJSON = exports.SessionFieldName = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
const object_1 = require("../../object");
exports.protobufPackage = "zitadel.session.v2beta";
var SessionFieldName;
(function (SessionFieldName) {
    SessionFieldName[SessionFieldName["SESSION_FIELD_NAME_UNSPECIFIED"] = 0] = "SESSION_FIELD_NAME_UNSPECIFIED";
    SessionFieldName[SessionFieldName["SESSION_FIELD_NAME_CREATION_DATE"] = 1] = "SESSION_FIELD_NAME_CREATION_DATE";
    SessionFieldName[SessionFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SessionFieldName || (exports.SessionFieldName = SessionFieldName = {}));
function sessionFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "SESSION_FIELD_NAME_UNSPECIFIED":
            return SessionFieldName.SESSION_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "SESSION_FIELD_NAME_CREATION_DATE":
            return SessionFieldName.SESSION_FIELD_NAME_CREATION_DATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SessionFieldName.UNRECOGNIZED;
    }
}
exports.sessionFieldNameFromJSON = sessionFieldNameFromJSON;
function sessionFieldNameToJSON(object) {
    switch (object) {
        case SessionFieldName.SESSION_FIELD_NAME_UNSPECIFIED:
            return "SESSION_FIELD_NAME_UNSPECIFIED";
        case SessionFieldName.SESSION_FIELD_NAME_CREATION_DATE:
            return "SESSION_FIELD_NAME_CREATION_DATE";
        case SessionFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sessionFieldNameToJSON = sessionFieldNameToJSON;
function createBaseSession() {
    return {
        id: "",
        creationDate: undefined,
        changeDate: undefined,
        sequence: long_1.default.UZERO,
        factors: undefined,
        metadata: {},
        userAgent: undefined,
        expirationDate: undefined,
    };
}
exports.Session = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.creationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.changeDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(26).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        if (message.factors !== undefined) {
            exports.Factors.encode(message.factors, writer.uint32(42).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.Session_MetadataEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.userAgent !== undefined) {
            exports.UserAgent.encode(message.userAgent, writer.uint32(58).fork()).ldelim();
        }
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession();
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
                    message.creationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.changeDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.sequence = reader.uint64();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.factors = exports.Factors.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    const entry6 = exports.Session_MetadataEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.metadata[entry6.key] = entry6.value;
                    }
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.userAgent = exports.UserAgent.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            id: isSet(object.id) ? String(object.id) : "",
            creationDate: isSet(object.creationDate) ? fromJsonTimestamp(object.creationDate) : undefined,
            changeDate: isSet(object.changeDate) ? fromJsonTimestamp(object.changeDate) : undefined,
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            factors: isSet(object.factors) ? exports.Factors.fromJSON(object.factors) : undefined,
            metadata: isObject(object.metadata)
                ? Object.entries(object.metadata).reduce((acc, [key, value]) => {
                    acc[key] = Buffer.from(bytesFromBase64(value));
                    return acc;
                }, {})
                : {},
            userAgent: isSet(object.userAgent) ? exports.UserAgent.fromJSON(object.userAgent) : undefined,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.creationDate !== undefined && (obj.creationDate = message.creationDate.toISOString());
        message.changeDate !== undefined && (obj.changeDate = message.changeDate.toISOString());
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.factors !== undefined && (obj.factors = message.factors ? exports.Factors.toJSON(message.factors) : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = base64FromBytes(v);
            });
        }
        message.userAgent !== undefined &&
            (obj.userAgent = message.userAgent ? exports.UserAgent.toJSON(message.userAgent) : undefined);
        message.expirationDate !== undefined && (obj.expirationDate = message.expirationDate.toISOString());
        return obj;
    },
    create(base) {
        return exports.Session.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSession();
        message.id = object.id ?? "";
        message.creationDate = object.creationDate ?? undefined;
        message.changeDate = object.changeDate ?? undefined;
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? long_1.default.fromValue(object.sequence)
            : long_1.default.UZERO;
        message.factors = (object.factors !== undefined && object.factors !== null)
            ? exports.Factors.fromPartial(object.factors)
            : undefined;
        message.metadata = Object.entries(object.metadata ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.userAgent = (object.userAgent !== undefined && object.userAgent !== null)
            ? exports.UserAgent.fromPartial(object.userAgent)
            : undefined;
        message.expirationDate = object.expirationDate ?? undefined;
        return message;
    },
};
function createBaseSession_MetadataEntry() {
    return { key: "", value: Buffer.alloc(0) };
}
exports.Session_MetadataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession_MetadataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.Session_MetadataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSession_MetadataEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseFactors() {
    return {
        user: undefined,
        password: undefined,
        webAuthN: undefined,
        intent: undefined,
        totp: undefined,
        otpSms: undefined,
        otpEmail: undefined,
    };
}
exports.Factors = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            exports.UserFactor.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.password !== undefined) {
            exports.PasswordFactor.encode(message.password, writer.uint32(18).fork()).ldelim();
        }
        if (message.webAuthN !== undefined) {
            exports.WebAuthNFactor.encode(message.webAuthN, writer.uint32(26).fork()).ldelim();
        }
        if (message.intent !== undefined) {
            exports.IntentFactor.encode(message.intent, writer.uint32(34).fork()).ldelim();
        }
        if (message.totp !== undefined) {
            exports.TOTPFactor.encode(message.totp, writer.uint32(42).fork()).ldelim();
        }
        if (message.otpSms !== undefined) {
            exports.OTPFactor.encode(message.otpSms, writer.uint32(50).fork()).ldelim();
        }
        if (message.otpEmail !== undefined) {
            exports.OTPFactor.encode(message.otpEmail, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFactors();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = exports.UserFactor.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.password = exports.PasswordFactor.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.webAuthN = exports.WebAuthNFactor.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.intent = exports.IntentFactor.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.totp = exports.TOTPFactor.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.otpSms = exports.OTPFactor.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.otpEmail = exports.OTPFactor.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? exports.UserFactor.fromJSON(object.user) : undefined,
            password: isSet(object.password) ? exports.PasswordFactor.fromJSON(object.password) : undefined,
            webAuthN: isSet(object.webAuthN) ? exports.WebAuthNFactor.fromJSON(object.webAuthN) : undefined,
            intent: isSet(object.intent) ? exports.IntentFactor.fromJSON(object.intent) : undefined,
            totp: isSet(object.totp) ? exports.TOTPFactor.fromJSON(object.totp) : undefined,
            otpSms: isSet(object.otpSms) ? exports.OTPFactor.fromJSON(object.otpSms) : undefined,
            otpEmail: isSet(object.otpEmail) ? exports.OTPFactor.fromJSON(object.otpEmail) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined && (obj.user = message.user ? exports.UserFactor.toJSON(message.user) : undefined);
        message.password !== undefined &&
            (obj.password = message.password ? exports.PasswordFactor.toJSON(message.password) : undefined);
        message.webAuthN !== undefined &&
            (obj.webAuthN = message.webAuthN ? exports.WebAuthNFactor.toJSON(message.webAuthN) : undefined);
        message.intent !== undefined && (obj.intent = message.intent ? exports.IntentFactor.toJSON(message.intent) : undefined);
        message.totp !== undefined && (obj.totp = message.totp ? exports.TOTPFactor.toJSON(message.totp) : undefined);
        message.otpSms !== undefined && (obj.otpSms = message.otpSms ? exports.OTPFactor.toJSON(message.otpSms) : undefined);
        message.otpEmail !== undefined &&
            (obj.otpEmail = message.otpEmail ? exports.OTPFactor.toJSON(message.otpEmail) : undefined);
        return obj;
    },
    create(base) {
        return exports.Factors.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFactors();
        message.user = (object.user !== undefined && object.user !== null)
            ? exports.UserFactor.fromPartial(object.user)
            : undefined;
        message.password = (object.password !== undefined && object.password !== null)
            ? exports.PasswordFactor.fromPartial(object.password)
            : undefined;
        message.webAuthN = (object.webAuthN !== undefined && object.webAuthN !== null)
            ? exports.WebAuthNFactor.fromPartial(object.webAuthN)
            : undefined;
        message.intent = (object.intent !== undefined && object.intent !== null)
            ? exports.IntentFactor.fromPartial(object.intent)
            : undefined;
        message.totp = (object.totp !== undefined && object.totp !== null)
            ? exports.TOTPFactor.fromPartial(object.totp)
            : undefined;
        message.otpSms = (object.otpSms !== undefined && object.otpSms !== null)
            ? exports.OTPFactor.fromPartial(object.otpSms)
            : undefined;
        message.otpEmail = (object.otpEmail !== undefined && object.otpEmail !== null)
            ? exports.OTPFactor.fromPartial(object.otpEmail)
            : undefined;
        return message;
    },
};
function createBaseUserFactor() {
    return { verifiedAt: undefined, id: "", loginName: "", displayName: "", organisationId: "", organizationId: "" };
}
exports.UserFactor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.loginName !== "") {
            writer.uint32(26).string(message.loginName);
        }
        if (message.displayName !== "") {
            writer.uint32(34).string(message.displayName);
        }
        if (message.organisationId !== "") {
            writer.uint32(42).string(message.organisationId);
        }
        if (message.organizationId !== "") {
            writer.uint32(50).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.verifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.loginName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.organisationId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.organizationId = reader.string();
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
            verifiedAt: isSet(object.verifiedAt) ? fromJsonTimestamp(object.verifiedAt) : undefined,
            id: isSet(object.id) ? String(object.id) : "",
            loginName: isSet(object.loginName) ? String(object.loginName) : "",
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            organisationId: isSet(object.organisationId) ? String(object.organisationId) : "",
            organizationId: isSet(object.organizationId) ? String(object.organizationId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.verifiedAt !== undefined && (obj.verifiedAt = message.verifiedAt.toISOString());
        message.id !== undefined && (obj.id = message.id);
        message.loginName !== undefined && (obj.loginName = message.loginName);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.organisationId !== undefined && (obj.organisationId = message.organisationId);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        return obj;
    },
    create(base) {
        return exports.UserFactor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFactor();
        message.verifiedAt = object.verifiedAt ?? undefined;
        message.id = object.id ?? "";
        message.loginName = object.loginName ?? "";
        message.displayName = object.displayName ?? "";
        message.organisationId = object.organisationId ?? "";
        message.organizationId = object.organizationId ?? "";
        return message;
    },
};
function createBasePasswordFactor() {
    return { verifiedAt: undefined };
}
exports.PasswordFactor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.verifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        return { verifiedAt: isSet(object.verifiedAt) ? fromJsonTimestamp(object.verifiedAt) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.verifiedAt !== undefined && (obj.verifiedAt = message.verifiedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.PasswordFactor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordFactor();
        message.verifiedAt = object.verifiedAt ?? undefined;
        return message;
    },
};
function createBaseIntentFactor() {
    return { verifiedAt: undefined };
}
exports.IntentFactor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIntentFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.verifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        return { verifiedAt: isSet(object.verifiedAt) ? fromJsonTimestamp(object.verifiedAt) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.verifiedAt !== undefined && (obj.verifiedAt = message.verifiedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.IntentFactor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIntentFactor();
        message.verifiedAt = object.verifiedAt ?? undefined;
        return message;
    },
};
function createBaseWebAuthNFactor() {
    return { verifiedAt: undefined, userVerified: false };
}
exports.WebAuthNFactor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
        }
        if (message.userVerified === true) {
            writer.uint32(16).bool(message.userVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebAuthNFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.verifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.userVerified = reader.bool();
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
            verifiedAt: isSet(object.verifiedAt) ? fromJsonTimestamp(object.verifiedAt) : undefined,
            userVerified: isSet(object.userVerified) ? Boolean(object.userVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.verifiedAt !== undefined && (obj.verifiedAt = message.verifiedAt.toISOString());
        message.userVerified !== undefined && (obj.userVerified = message.userVerified);
        return obj;
    },
    create(base) {
        return exports.WebAuthNFactor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWebAuthNFactor();
        message.verifiedAt = object.verifiedAt ?? undefined;
        message.userVerified = object.userVerified ?? false;
        return message;
    },
};
function createBaseTOTPFactor() {
    return { verifiedAt: undefined };
}
exports.TOTPFactor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTOTPFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.verifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        return { verifiedAt: isSet(object.verifiedAt) ? fromJsonTimestamp(object.verifiedAt) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.verifiedAt !== undefined && (obj.verifiedAt = message.verifiedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.TOTPFactor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTOTPFactor();
        message.verifiedAt = object.verifiedAt ?? undefined;
        return message;
    },
};
function createBaseOTPFactor() {
    return { verifiedAt: undefined };
}
exports.OTPFactor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOTPFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.verifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        return { verifiedAt: isSet(object.verifiedAt) ? fromJsonTimestamp(object.verifiedAt) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.verifiedAt !== undefined && (obj.verifiedAt = message.verifiedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.OTPFactor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOTPFactor();
        message.verifiedAt = object.verifiedAt ?? undefined;
        return message;
    },
};
function createBaseSearchQuery() {
    return { idsQuery: undefined, userIdQuery: undefined, creationDateQuery: undefined };
}
exports.SearchQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idsQuery !== undefined) {
            exports.IDsQuery.encode(message.idsQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.userIdQuery !== undefined) {
            exports.UserIDQuery.encode(message.userIdQuery, writer.uint32(18).fork()).ldelim();
        }
        if (message.creationDateQuery !== undefined) {
            exports.CreationDateQuery.encode(message.creationDateQuery, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idsQuery = exports.IDsQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userIdQuery = exports.UserIDQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.creationDateQuery = exports.CreationDateQuery.decode(reader, reader.uint32());
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
            idsQuery: isSet(object.idsQuery) ? exports.IDsQuery.fromJSON(object.idsQuery) : undefined,
            userIdQuery: isSet(object.userIdQuery) ? exports.UserIDQuery.fromJSON(object.userIdQuery) : undefined,
            creationDateQuery: isSet(object.creationDateQuery)
                ? exports.CreationDateQuery.fromJSON(object.creationDateQuery)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idsQuery !== undefined && (obj.idsQuery = message.idsQuery ? exports.IDsQuery.toJSON(message.idsQuery) : undefined);
        message.userIdQuery !== undefined &&
            (obj.userIdQuery = message.userIdQuery ? exports.UserIDQuery.toJSON(message.userIdQuery) : undefined);
        message.creationDateQuery !== undefined && (obj.creationDateQuery = message.creationDateQuery
            ? exports.CreationDateQuery.toJSON(message.creationDateQuery)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.SearchQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSearchQuery();
        message.idsQuery = (object.idsQuery !== undefined && object.idsQuery !== null)
            ? exports.IDsQuery.fromPartial(object.idsQuery)
            : undefined;
        message.userIdQuery = (object.userIdQuery !== undefined && object.userIdQuery !== null)
            ? exports.UserIDQuery.fromPartial(object.userIdQuery)
            : undefined;
        message.creationDateQuery = (object.creationDateQuery !== undefined && object.creationDateQuery !== null)
            ? exports.CreationDateQuery.fromPartial(object.creationDateQuery)
            : undefined;
        return message;
    },
};
function createBaseIDsQuery() {
    return { ids: [] };
}
exports.IDsQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ids) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDsQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ids.push(reader.string());
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
        return { ids: Array.isArray(object?.ids) ? object.ids.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map((e) => e);
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    create(base) {
        return exports.IDsQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDsQuery();
        message.ids = object.ids?.map((e) => e) || [];
        return message;
    },
};
function createBaseUserIDQuery() {
    return { id: "" };
}
exports.UserIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
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
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.UserIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserIDQuery();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseCreationDateQuery() {
    return { creationDate: undefined, method: 0 };
}
exports.CreationDateQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(10).fork()).ldelim();
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreationDateQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.creationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            creationDate: isSet(object.creationDate) ? fromJsonTimestamp(object.creationDate) : undefined,
            method: isSet(object.method) ? (0, object_1.timestampQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creationDate !== undefined && (obj.creationDate = message.creationDate.toISOString());
        message.method !== undefined && (obj.method = (0, object_1.timestampQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.CreationDateQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreationDateQuery();
        message.creationDate = object.creationDate ?? undefined;
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserAgent() {
    return { fingerprintId: undefined, ip: undefined, description: undefined, header: {} };
}
exports.UserAgent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fingerprintId !== undefined) {
            writer.uint32(10).string(message.fingerprintId);
        }
        if (message.ip !== undefined) {
            writer.uint32(18).string(message.ip);
        }
        if (message.description !== undefined) {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.header).forEach(([key, value]) => {
            exports.UserAgent_HeaderEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserAgent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fingerprintId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ip = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    const entry4 = exports.UserAgent_HeaderEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.header[entry4.key] = entry4.value;
                    }
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
            fingerprintId: isSet(object.fingerprintId) ? String(object.fingerprintId) : undefined,
            ip: isSet(object.ip) ? String(object.ip) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
            header: isObject(object.header)
                ? Object.entries(object.header).reduce((acc, [key, value]) => {
                    acc[key] = exports.UserAgent_HeaderValues.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.fingerprintId !== undefined && (obj.fingerprintId = message.fingerprintId);
        message.ip !== undefined && (obj.ip = message.ip);
        message.description !== undefined && (obj.description = message.description);
        obj.header = {};
        if (message.header) {
            Object.entries(message.header).forEach(([k, v]) => {
                obj.header[k] = exports.UserAgent_HeaderValues.toJSON(v);
            });
        }
        return obj;
    },
    create(base) {
        return exports.UserAgent.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserAgent();
        message.fingerprintId = object.fingerprintId ?? undefined;
        message.ip = object.ip ?? undefined;
        message.description = object.description ?? undefined;
        message.header = Object.entries(object.header ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.UserAgent_HeaderValues.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseUserAgent_HeaderValues() {
    return { values: [] };
}
exports.UserAgent_HeaderValues = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.values) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserAgent_HeaderValues();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.values.push(reader.string());
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
        return { values: Array.isArray(object?.values) ? object.values.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    create(base) {
        return exports.UserAgent_HeaderValues.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserAgent_HeaderValues();
        message.values = object.values?.map((e) => e) || [];
        return message;
    },
};
function createBaseUserAgent_HeaderEntry() {
    return { key: "", value: undefined };
}
exports.UserAgent_HeaderEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.UserAgent_HeaderValues.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserAgent_HeaderEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.UserAgent_HeaderValues.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.UserAgent_HeaderValues.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.UserAgent_HeaderValues.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.UserAgent_HeaderEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserAgent_HeaderEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.UserAgent_HeaderValues.fromPartial(object.value)
            : undefined;
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds.toNumber() || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
