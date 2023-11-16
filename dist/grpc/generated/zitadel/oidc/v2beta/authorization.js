"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = exports.AuthRequest = exports.errorReasonToJSON = exports.errorReasonFromJSON = exports.ErrorReason = exports.promptToJSON = exports.promptFromJSON = exports.Prompt = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "zitadel.oidc.v2beta";
var Prompt;
(function (Prompt) {
    Prompt[Prompt["PROMPT_UNSPECIFIED"] = 0] = "PROMPT_UNSPECIFIED";
    Prompt[Prompt["PROMPT_NONE"] = 1] = "PROMPT_NONE";
    Prompt[Prompt["PROMPT_LOGIN"] = 2] = "PROMPT_LOGIN";
    Prompt[Prompt["PROMPT_CONSENT"] = 3] = "PROMPT_CONSENT";
    Prompt[Prompt["PROMPT_SELECT_ACCOUNT"] = 4] = "PROMPT_SELECT_ACCOUNT";
    Prompt[Prompt["PROMPT_CREATE"] = 5] = "PROMPT_CREATE";
    Prompt[Prompt["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Prompt || (exports.Prompt = Prompt = {}));
function promptFromJSON(object) {
    switch (object) {
        case 0:
        case "PROMPT_UNSPECIFIED":
            return Prompt.PROMPT_UNSPECIFIED;
        case 1:
        case "PROMPT_NONE":
            return Prompt.PROMPT_NONE;
        case 2:
        case "PROMPT_LOGIN":
            return Prompt.PROMPT_LOGIN;
        case 3:
        case "PROMPT_CONSENT":
            return Prompt.PROMPT_CONSENT;
        case 4:
        case "PROMPT_SELECT_ACCOUNT":
            return Prompt.PROMPT_SELECT_ACCOUNT;
        case 5:
        case "PROMPT_CREATE":
            return Prompt.PROMPT_CREATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Prompt.UNRECOGNIZED;
    }
}
exports.promptFromJSON = promptFromJSON;
function promptToJSON(object) {
    switch (object) {
        case Prompt.PROMPT_UNSPECIFIED:
            return "PROMPT_UNSPECIFIED";
        case Prompt.PROMPT_NONE:
            return "PROMPT_NONE";
        case Prompt.PROMPT_LOGIN:
            return "PROMPT_LOGIN";
        case Prompt.PROMPT_CONSENT:
            return "PROMPT_CONSENT";
        case Prompt.PROMPT_SELECT_ACCOUNT:
            return "PROMPT_SELECT_ACCOUNT";
        case Prompt.PROMPT_CREATE:
            return "PROMPT_CREATE";
        case Prompt.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.promptToJSON = promptToJSON;
var ErrorReason;
(function (ErrorReason) {
    ErrorReason[ErrorReason["ERROR_REASON_UNSPECIFIED"] = 0] = "ERROR_REASON_UNSPECIFIED";
    /** ERROR_REASON_INVALID_REQUEST - Error states from https://datatracker.ietf.org/doc/html/rfc6749#section-4.2.2.1 */
    ErrorReason[ErrorReason["ERROR_REASON_INVALID_REQUEST"] = 1] = "ERROR_REASON_INVALID_REQUEST";
    ErrorReason[ErrorReason["ERROR_REASON_UNAUTHORIZED_CLIENT"] = 2] = "ERROR_REASON_UNAUTHORIZED_CLIENT";
    ErrorReason[ErrorReason["ERROR_REASON_ACCESS_DENIED"] = 3] = "ERROR_REASON_ACCESS_DENIED";
    ErrorReason[ErrorReason["ERROR_REASON_UNSUPPORTED_RESPONSE_TYPE"] = 4] = "ERROR_REASON_UNSUPPORTED_RESPONSE_TYPE";
    ErrorReason[ErrorReason["ERROR_REASON_INVALID_SCOPE"] = 5] = "ERROR_REASON_INVALID_SCOPE";
    ErrorReason[ErrorReason["ERROR_REASON_SERVER_ERROR"] = 6] = "ERROR_REASON_SERVER_ERROR";
    ErrorReason[ErrorReason["ERROR_REASON_TEMPORARY_UNAVAILABLE"] = 7] = "ERROR_REASON_TEMPORARY_UNAVAILABLE";
    /** ERROR_REASON_INTERACTION_REQUIRED - Error states from https://openid.net/specs/openid-connect-core-1_0.html#AuthError */
    ErrorReason[ErrorReason["ERROR_REASON_INTERACTION_REQUIRED"] = 8] = "ERROR_REASON_INTERACTION_REQUIRED";
    ErrorReason[ErrorReason["ERROR_REASON_LOGIN_REQUIRED"] = 9] = "ERROR_REASON_LOGIN_REQUIRED";
    ErrorReason[ErrorReason["ERROR_REASON_ACCOUNT_SELECTION_REQUIRED"] = 10] = "ERROR_REASON_ACCOUNT_SELECTION_REQUIRED";
    ErrorReason[ErrorReason["ERROR_REASON_CONSENT_REQUIRED"] = 11] = "ERROR_REASON_CONSENT_REQUIRED";
    ErrorReason[ErrorReason["ERROR_REASON_INVALID_REQUEST_URI"] = 12] = "ERROR_REASON_INVALID_REQUEST_URI";
    ErrorReason[ErrorReason["ERROR_REASON_INVALID_REQUEST_OBJECT"] = 13] = "ERROR_REASON_INVALID_REQUEST_OBJECT";
    ErrorReason[ErrorReason["ERROR_REASON_REQUEST_NOT_SUPPORTED"] = 14] = "ERROR_REASON_REQUEST_NOT_SUPPORTED";
    ErrorReason[ErrorReason["ERROR_REASON_REQUEST_URI_NOT_SUPPORTED"] = 15] = "ERROR_REASON_REQUEST_URI_NOT_SUPPORTED";
    ErrorReason[ErrorReason["ERROR_REASON_REGISTRATION_NOT_SUPPORTED"] = 16] = "ERROR_REASON_REGISTRATION_NOT_SUPPORTED";
    ErrorReason[ErrorReason["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ErrorReason || (exports.ErrorReason = ErrorReason = {}));
function errorReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "ERROR_REASON_UNSPECIFIED":
            return ErrorReason.ERROR_REASON_UNSPECIFIED;
        case 1:
        case "ERROR_REASON_INVALID_REQUEST":
            return ErrorReason.ERROR_REASON_INVALID_REQUEST;
        case 2:
        case "ERROR_REASON_UNAUTHORIZED_CLIENT":
            return ErrorReason.ERROR_REASON_UNAUTHORIZED_CLIENT;
        case 3:
        case "ERROR_REASON_ACCESS_DENIED":
            return ErrorReason.ERROR_REASON_ACCESS_DENIED;
        case 4:
        case "ERROR_REASON_UNSUPPORTED_RESPONSE_TYPE":
            return ErrorReason.ERROR_REASON_UNSUPPORTED_RESPONSE_TYPE;
        case 5:
        case "ERROR_REASON_INVALID_SCOPE":
            return ErrorReason.ERROR_REASON_INVALID_SCOPE;
        case 6:
        case "ERROR_REASON_SERVER_ERROR":
            return ErrorReason.ERROR_REASON_SERVER_ERROR;
        case 7:
        case "ERROR_REASON_TEMPORARY_UNAVAILABLE":
            return ErrorReason.ERROR_REASON_TEMPORARY_UNAVAILABLE;
        case 8:
        case "ERROR_REASON_INTERACTION_REQUIRED":
            return ErrorReason.ERROR_REASON_INTERACTION_REQUIRED;
        case 9:
        case "ERROR_REASON_LOGIN_REQUIRED":
            return ErrorReason.ERROR_REASON_LOGIN_REQUIRED;
        case 10:
        case "ERROR_REASON_ACCOUNT_SELECTION_REQUIRED":
            return ErrorReason.ERROR_REASON_ACCOUNT_SELECTION_REQUIRED;
        case 11:
        case "ERROR_REASON_CONSENT_REQUIRED":
            return ErrorReason.ERROR_REASON_CONSENT_REQUIRED;
        case 12:
        case "ERROR_REASON_INVALID_REQUEST_URI":
            return ErrorReason.ERROR_REASON_INVALID_REQUEST_URI;
        case 13:
        case "ERROR_REASON_INVALID_REQUEST_OBJECT":
            return ErrorReason.ERROR_REASON_INVALID_REQUEST_OBJECT;
        case 14:
        case "ERROR_REASON_REQUEST_NOT_SUPPORTED":
            return ErrorReason.ERROR_REASON_REQUEST_NOT_SUPPORTED;
        case 15:
        case "ERROR_REASON_REQUEST_URI_NOT_SUPPORTED":
            return ErrorReason.ERROR_REASON_REQUEST_URI_NOT_SUPPORTED;
        case 16:
        case "ERROR_REASON_REGISTRATION_NOT_SUPPORTED":
            return ErrorReason.ERROR_REASON_REGISTRATION_NOT_SUPPORTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ErrorReason.UNRECOGNIZED;
    }
}
exports.errorReasonFromJSON = errorReasonFromJSON;
function errorReasonToJSON(object) {
    switch (object) {
        case ErrorReason.ERROR_REASON_UNSPECIFIED:
            return "ERROR_REASON_UNSPECIFIED";
        case ErrorReason.ERROR_REASON_INVALID_REQUEST:
            return "ERROR_REASON_INVALID_REQUEST";
        case ErrorReason.ERROR_REASON_UNAUTHORIZED_CLIENT:
            return "ERROR_REASON_UNAUTHORIZED_CLIENT";
        case ErrorReason.ERROR_REASON_ACCESS_DENIED:
            return "ERROR_REASON_ACCESS_DENIED";
        case ErrorReason.ERROR_REASON_UNSUPPORTED_RESPONSE_TYPE:
            return "ERROR_REASON_UNSUPPORTED_RESPONSE_TYPE";
        case ErrorReason.ERROR_REASON_INVALID_SCOPE:
            return "ERROR_REASON_INVALID_SCOPE";
        case ErrorReason.ERROR_REASON_SERVER_ERROR:
            return "ERROR_REASON_SERVER_ERROR";
        case ErrorReason.ERROR_REASON_TEMPORARY_UNAVAILABLE:
            return "ERROR_REASON_TEMPORARY_UNAVAILABLE";
        case ErrorReason.ERROR_REASON_INTERACTION_REQUIRED:
            return "ERROR_REASON_INTERACTION_REQUIRED";
        case ErrorReason.ERROR_REASON_LOGIN_REQUIRED:
            return "ERROR_REASON_LOGIN_REQUIRED";
        case ErrorReason.ERROR_REASON_ACCOUNT_SELECTION_REQUIRED:
            return "ERROR_REASON_ACCOUNT_SELECTION_REQUIRED";
        case ErrorReason.ERROR_REASON_CONSENT_REQUIRED:
            return "ERROR_REASON_CONSENT_REQUIRED";
        case ErrorReason.ERROR_REASON_INVALID_REQUEST_URI:
            return "ERROR_REASON_INVALID_REQUEST_URI";
        case ErrorReason.ERROR_REASON_INVALID_REQUEST_OBJECT:
            return "ERROR_REASON_INVALID_REQUEST_OBJECT";
        case ErrorReason.ERROR_REASON_REQUEST_NOT_SUPPORTED:
            return "ERROR_REASON_REQUEST_NOT_SUPPORTED";
        case ErrorReason.ERROR_REASON_REQUEST_URI_NOT_SUPPORTED:
            return "ERROR_REASON_REQUEST_URI_NOT_SUPPORTED";
        case ErrorReason.ERROR_REASON_REGISTRATION_NOT_SUPPORTED:
            return "ERROR_REASON_REGISTRATION_NOT_SUPPORTED";
        case ErrorReason.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.errorReasonToJSON = errorReasonToJSON;
function createBaseAuthRequest() {
    return {
        id: "",
        creationDate: undefined,
        clientId: "",
        scope: [],
        redirectUri: "",
        prompt: [],
        uiLocales: [],
        loginHint: undefined,
        maxAge: undefined,
        hintUserId: undefined,
    };
}
exports.AuthRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.creationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.clientId !== "") {
            writer.uint32(26).string(message.clientId);
        }
        for (const v of message.scope) {
            writer.uint32(34).string(v);
        }
        if (message.redirectUri !== "") {
            writer.uint32(42).string(message.redirectUri);
        }
        writer.uint32(50).fork();
        for (const v of message.prompt) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.uiLocales) {
            writer.uint32(58).string(v);
        }
        if (message.loginHint !== undefined) {
            writer.uint32(66).string(message.loginHint);
        }
        if (message.maxAge !== undefined) {
            duration_1.Duration.encode(message.maxAge, writer.uint32(74).fork()).ldelim();
        }
        if (message.hintUserId !== undefined) {
            writer.uint32(82).string(message.hintUserId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthRequest();
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
                    message.clientId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.scope.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.redirectUri = reader.string();
                    continue;
                case 6:
                    if (tag === 48) {
                        message.prompt.push(reader.int32());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.prompt.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.uiLocales.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.loginHint = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.maxAge = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.hintUserId = reader.string();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            scope: Array.isArray(object?.scope) ? object.scope.map((e) => String(e)) : [],
            redirectUri: isSet(object.redirectUri) ? String(object.redirectUri) : "",
            prompt: Array.isArray(object?.prompt) ? object.prompt.map((e) => promptFromJSON(e)) : [],
            uiLocales: Array.isArray(object?.uiLocales) ? object.uiLocales.map((e) => String(e)) : [],
            loginHint: isSet(object.loginHint) ? String(object.loginHint) : undefined,
            maxAge: isSet(object.maxAge) ? duration_1.Duration.fromJSON(object.maxAge) : undefined,
            hintUserId: isSet(object.hintUserId) ? String(object.hintUserId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.creationDate !== undefined && (obj.creationDate = message.creationDate.toISOString());
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.scope) {
            obj.scope = message.scope.map((e) => e);
        }
        else {
            obj.scope = [];
        }
        message.redirectUri !== undefined && (obj.redirectUri = message.redirectUri);
        if (message.prompt) {
            obj.prompt = message.prompt.map((e) => promptToJSON(e));
        }
        else {
            obj.prompt = [];
        }
        if (message.uiLocales) {
            obj.uiLocales = message.uiLocales.map((e) => e);
        }
        else {
            obj.uiLocales = [];
        }
        message.loginHint !== undefined && (obj.loginHint = message.loginHint);
        message.maxAge !== undefined && (obj.maxAge = message.maxAge ? duration_1.Duration.toJSON(message.maxAge) : undefined);
        message.hintUserId !== undefined && (obj.hintUserId = message.hintUserId);
        return obj;
    },
    create(base) {
        return exports.AuthRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthRequest();
        message.id = object.id ?? "";
        message.creationDate = object.creationDate ?? undefined;
        message.clientId = object.clientId ?? "";
        message.scope = object.scope?.map((e) => e) || [];
        message.redirectUri = object.redirectUri ?? "";
        message.prompt = object.prompt?.map((e) => e) || [];
        message.uiLocales = object.uiLocales?.map((e) => e) || [];
        message.loginHint = object.loginHint ?? undefined;
        message.maxAge = (object.maxAge !== undefined && object.maxAge !== null)
            ? duration_1.Duration.fromPartial(object.maxAge)
            : undefined;
        message.hintUserId = object.hintUserId ?? undefined;
        return message;
    },
};
function createBaseAuthorizationError() {
    return { error: 0, errorDescription: undefined, errorUri: undefined };
}
exports.AuthorizationError = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.error !== 0) {
            writer.uint32(8).int32(message.error);
        }
        if (message.errorDescription !== undefined) {
            writer.uint32(18).string(message.errorDescription);
        }
        if (message.errorUri !== undefined) {
            writer.uint32(26).string(message.errorUri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthorizationError();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.error = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.errorDescription = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.errorUri = reader.string();
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
            error: isSet(object.error) ? errorReasonFromJSON(object.error) : 0,
            errorDescription: isSet(object.errorDescription) ? String(object.errorDescription) : undefined,
            errorUri: isSet(object.errorUri) ? String(object.errorUri) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.error !== undefined && (obj.error = errorReasonToJSON(message.error));
        message.errorDescription !== undefined && (obj.errorDescription = message.errorDescription);
        message.errorUri !== undefined && (obj.errorUri = message.errorUri);
        return obj;
    },
    create(base) {
        return exports.AuthorizationError.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthorizationError();
        message.error = object.error ?? 0;
        message.errorDescription = object.errorDescription ?? undefined;
        message.errorUri = object.errorUri ?? undefined;
        return message;
    },
};
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
function isSet(value) {
    return value !== null && value !== undefined;
}
