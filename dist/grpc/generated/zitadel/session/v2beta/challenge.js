"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenges_WebAuthN = exports.Challenges = exports.RequestChallenges_OTPEmail_ReturnCode = exports.RequestChallenges_OTPEmail_SendCode = exports.RequestChallenges_OTPEmail = exports.RequestChallenges_OTPSMS = exports.RequestChallenges_WebAuthN = exports.RequestChallenges = exports.userVerificationRequirementToJSON = exports.userVerificationRequirementFromJSON = exports.UserVerificationRequirement = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("../../../google/protobuf/struct");
exports.protobufPackage = "zitadel.session.v2beta";
var UserVerificationRequirement;
(function (UserVerificationRequirement) {
    UserVerificationRequirement[UserVerificationRequirement["USER_VERIFICATION_REQUIREMENT_UNSPECIFIED"] = 0] = "USER_VERIFICATION_REQUIREMENT_UNSPECIFIED";
    UserVerificationRequirement[UserVerificationRequirement["USER_VERIFICATION_REQUIREMENT_REQUIRED"] = 1] = "USER_VERIFICATION_REQUIREMENT_REQUIRED";
    UserVerificationRequirement[UserVerificationRequirement["USER_VERIFICATION_REQUIREMENT_PREFERRED"] = 2] = "USER_VERIFICATION_REQUIREMENT_PREFERRED";
    UserVerificationRequirement[UserVerificationRequirement["USER_VERIFICATION_REQUIREMENT_DISCOURAGED"] = 3] = "USER_VERIFICATION_REQUIREMENT_DISCOURAGED";
    UserVerificationRequirement[UserVerificationRequirement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserVerificationRequirement || (exports.UserVerificationRequirement = UserVerificationRequirement = {}));
function userVerificationRequirementFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_VERIFICATION_REQUIREMENT_UNSPECIFIED":
            return UserVerificationRequirement.USER_VERIFICATION_REQUIREMENT_UNSPECIFIED;
        case 1:
        case "USER_VERIFICATION_REQUIREMENT_REQUIRED":
            return UserVerificationRequirement.USER_VERIFICATION_REQUIREMENT_REQUIRED;
        case 2:
        case "USER_VERIFICATION_REQUIREMENT_PREFERRED":
            return UserVerificationRequirement.USER_VERIFICATION_REQUIREMENT_PREFERRED;
        case 3:
        case "USER_VERIFICATION_REQUIREMENT_DISCOURAGED":
            return UserVerificationRequirement.USER_VERIFICATION_REQUIREMENT_DISCOURAGED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserVerificationRequirement.UNRECOGNIZED;
    }
}
exports.userVerificationRequirementFromJSON = userVerificationRequirementFromJSON;
function userVerificationRequirementToJSON(object) {
    switch (object) {
        case UserVerificationRequirement.USER_VERIFICATION_REQUIREMENT_UNSPECIFIED:
            return "USER_VERIFICATION_REQUIREMENT_UNSPECIFIED";
        case UserVerificationRequirement.USER_VERIFICATION_REQUIREMENT_REQUIRED:
            return "USER_VERIFICATION_REQUIREMENT_REQUIRED";
        case UserVerificationRequirement.USER_VERIFICATION_REQUIREMENT_PREFERRED:
            return "USER_VERIFICATION_REQUIREMENT_PREFERRED";
        case UserVerificationRequirement.USER_VERIFICATION_REQUIREMENT_DISCOURAGED:
            return "USER_VERIFICATION_REQUIREMENT_DISCOURAGED";
        case UserVerificationRequirement.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userVerificationRequirementToJSON = userVerificationRequirementToJSON;
function createBaseRequestChallenges() {
    return { webAuthN: undefined, otpSms: undefined, otpEmail: undefined };
}
exports.RequestChallenges = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.webAuthN !== undefined) {
            exports.RequestChallenges_WebAuthN.encode(message.webAuthN, writer.uint32(10).fork()).ldelim();
        }
        if (message.otpSms !== undefined) {
            exports.RequestChallenges_OTPSMS.encode(message.otpSms, writer.uint32(18).fork()).ldelim();
        }
        if (message.otpEmail !== undefined) {
            exports.RequestChallenges_OTPEmail.encode(message.otpEmail, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestChallenges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.webAuthN = exports.RequestChallenges_WebAuthN.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.otpSms = exports.RequestChallenges_OTPSMS.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.otpEmail = exports.RequestChallenges_OTPEmail.decode(reader, reader.uint32());
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
            webAuthN: isSet(object.webAuthN) ? exports.RequestChallenges_WebAuthN.fromJSON(object.webAuthN) : undefined,
            otpSms: isSet(object.otpSms) ? exports.RequestChallenges_OTPSMS.fromJSON(object.otpSms) : undefined,
            otpEmail: isSet(object.otpEmail) ? exports.RequestChallenges_OTPEmail.fromJSON(object.otpEmail) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.webAuthN !== undefined &&
            (obj.webAuthN = message.webAuthN ? exports.RequestChallenges_WebAuthN.toJSON(message.webAuthN) : undefined);
        message.otpSms !== undefined &&
            (obj.otpSms = message.otpSms ? exports.RequestChallenges_OTPSMS.toJSON(message.otpSms) : undefined);
        message.otpEmail !== undefined &&
            (obj.otpEmail = message.otpEmail ? exports.RequestChallenges_OTPEmail.toJSON(message.otpEmail) : undefined);
        return obj;
    },
    create(base) {
        return exports.RequestChallenges.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestChallenges();
        message.webAuthN = (object.webAuthN !== undefined && object.webAuthN !== null)
            ? exports.RequestChallenges_WebAuthN.fromPartial(object.webAuthN)
            : undefined;
        message.otpSms = (object.otpSms !== undefined && object.otpSms !== null)
            ? exports.RequestChallenges_OTPSMS.fromPartial(object.otpSms)
            : undefined;
        message.otpEmail = (object.otpEmail !== undefined && object.otpEmail !== null)
            ? exports.RequestChallenges_OTPEmail.fromPartial(object.otpEmail)
            : undefined;
        return message;
    },
};
function createBaseRequestChallenges_WebAuthN() {
    return { domain: "", userVerificationRequirement: 0 };
}
exports.RequestChallenges_WebAuthN = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.domain !== "") {
            writer.uint32(10).string(message.domain);
        }
        if (message.userVerificationRequirement !== 0) {
            writer.uint32(16).int32(message.userVerificationRequirement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestChallenges_WebAuthN();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.domain = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.userVerificationRequirement = reader.int32();
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
            domain: isSet(object.domain) ? String(object.domain) : "",
            userVerificationRequirement: isSet(object.userVerificationRequirement)
                ? userVerificationRequirementFromJSON(object.userVerificationRequirement)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.domain !== undefined && (obj.domain = message.domain);
        message.userVerificationRequirement !== undefined &&
            (obj.userVerificationRequirement = userVerificationRequirementToJSON(message.userVerificationRequirement));
        return obj;
    },
    create(base) {
        return exports.RequestChallenges_WebAuthN.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestChallenges_WebAuthN();
        message.domain = object.domain ?? "";
        message.userVerificationRequirement = object.userVerificationRequirement ?? 0;
        return message;
    },
};
function createBaseRequestChallenges_OTPSMS() {
    return { returnCode: false };
}
exports.RequestChallenges_OTPSMS = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.returnCode === true) {
            writer.uint32(8).bool(message.returnCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestChallenges_OTPSMS();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.returnCode = reader.bool();
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
        return { returnCode: isSet(object.returnCode) ? Boolean(object.returnCode) : false };
    },
    toJSON(message) {
        const obj = {};
        message.returnCode !== undefined && (obj.returnCode = message.returnCode);
        return obj;
    },
    create(base) {
        return exports.RequestChallenges_OTPSMS.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestChallenges_OTPSMS();
        message.returnCode = object.returnCode ?? false;
        return message;
    },
};
function createBaseRequestChallenges_OTPEmail() {
    return { sendCode: undefined, returnCode: undefined };
}
exports.RequestChallenges_OTPEmail = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sendCode !== undefined) {
            exports.RequestChallenges_OTPEmail_SendCode.encode(message.sendCode, writer.uint32(18).fork()).ldelim();
        }
        if (message.returnCode !== undefined) {
            exports.RequestChallenges_OTPEmail_ReturnCode.encode(message.returnCode, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestChallenges_OTPEmail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sendCode = exports.RequestChallenges_OTPEmail_SendCode.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = exports.RequestChallenges_OTPEmail_ReturnCode.decode(reader, reader.uint32());
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
            sendCode: isSet(object.sendCode) ? exports.RequestChallenges_OTPEmail_SendCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode)
                ? exports.RequestChallenges_OTPEmail_ReturnCode.fromJSON(object.returnCode)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sendCode !== undefined &&
            (obj.sendCode = message.sendCode ? exports.RequestChallenges_OTPEmail_SendCode.toJSON(message.sendCode) : undefined);
        message.returnCode !== undefined && (obj.returnCode = message.returnCode
            ? exports.RequestChallenges_OTPEmail_ReturnCode.toJSON(message.returnCode)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.RequestChallenges_OTPEmail.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestChallenges_OTPEmail();
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? exports.RequestChallenges_OTPEmail_SendCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? exports.RequestChallenges_OTPEmail_ReturnCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBaseRequestChallenges_OTPEmail_SendCode() {
    return { urlTemplate: undefined };
}
exports.RequestChallenges_OTPEmail_SendCode = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.urlTemplate !== undefined) {
            writer.uint32(10).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestChallenges_OTPEmail_SendCode();
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
        return exports.RequestChallenges_OTPEmail_SendCode.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestChallenges_OTPEmail_SendCode();
        message.urlTemplate = object.urlTemplate ?? undefined;
        return message;
    },
};
function createBaseRequestChallenges_OTPEmail_ReturnCode() {
    return {};
}
exports.RequestChallenges_OTPEmail_ReturnCode = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestChallenges_OTPEmail_ReturnCode();
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
        return exports.RequestChallenges_OTPEmail_ReturnCode.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRequestChallenges_OTPEmail_ReturnCode();
        return message;
    },
};
function createBaseChallenges() {
    return { webAuthN: undefined, otpSms: undefined, otpEmail: undefined };
}
exports.Challenges = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.webAuthN !== undefined) {
            exports.Challenges_WebAuthN.encode(message.webAuthN, writer.uint32(10).fork()).ldelim();
        }
        if (message.otpSms !== undefined) {
            writer.uint32(18).string(message.otpSms);
        }
        if (message.otpEmail !== undefined) {
            writer.uint32(26).string(message.otpEmail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChallenges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.webAuthN = exports.Challenges_WebAuthN.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.otpSms = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.otpEmail = reader.string();
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
            webAuthN: isSet(object.webAuthN) ? exports.Challenges_WebAuthN.fromJSON(object.webAuthN) : undefined,
            otpSms: isSet(object.otpSms) ? String(object.otpSms) : undefined,
            otpEmail: isSet(object.otpEmail) ? String(object.otpEmail) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.webAuthN !== undefined &&
            (obj.webAuthN = message.webAuthN ? exports.Challenges_WebAuthN.toJSON(message.webAuthN) : undefined);
        message.otpSms !== undefined && (obj.otpSms = message.otpSms);
        message.otpEmail !== undefined && (obj.otpEmail = message.otpEmail);
        return obj;
    },
    create(base) {
        return exports.Challenges.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseChallenges();
        message.webAuthN = (object.webAuthN !== undefined && object.webAuthN !== null)
            ? exports.Challenges_WebAuthN.fromPartial(object.webAuthN)
            : undefined;
        message.otpSms = object.otpSms ?? undefined;
        message.otpEmail = object.otpEmail ?? undefined;
        return message;
    },
};
function createBaseChallenges_WebAuthN() {
    return { publicKeyCredentialRequestOptions: undefined };
}
exports.Challenges_WebAuthN = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.publicKeyCredentialRequestOptions !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.publicKeyCredentialRequestOptions), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChallenges_WebAuthN();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.publicKeyCredentialRequestOptions = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
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
            publicKeyCredentialRequestOptions: isObject(object.publicKeyCredentialRequestOptions)
                ? object.publicKeyCredentialRequestOptions
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.publicKeyCredentialRequestOptions !== undefined &&
            (obj.publicKeyCredentialRequestOptions = message.publicKeyCredentialRequestOptions);
        return obj;
    },
    create(base) {
        return exports.Challenges_WebAuthN.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseChallenges_WebAuthN();
        message.publicKeyCredentialRequestOptions = object.publicKeyCredentialRequestOptions ?? undefined;
        return message;
    },
};
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
