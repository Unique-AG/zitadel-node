"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceDefinition = exports.ListAuthenticationMethodTypesResponse = exports.ListAuthenticationMethodTypesRequest = exports.SetPasswordResponse = exports.SetPasswordRequest = exports.PasswordResetResponse = exports.PasswordResetRequest = exports.AddIDPLinkResponse = exports.AddIDPLinkRequest = exports.RetrieveIdentityProviderIntentResponse = exports.RetrieveIdentityProviderIntentRequest = exports.StartIdentityProviderIntentResponse = exports.StartIdentityProviderIntentRequest = exports.CreatePasskeyRegistrationLinkResponse = exports.CreatePasskeyRegistrationLinkRequest = exports.RemoveOTPEmailResponse = exports.RemoveOTPEmailRequest = exports.AddOTPEmailResponse = exports.AddOTPEmailRequest = exports.RemoveOTPSMSResponse = exports.RemoveOTPSMSRequest = exports.AddOTPSMSResponse = exports.AddOTPSMSRequest = exports.VerifyTOTPRegistrationResponse = exports.VerifyTOTPRegistrationRequest = exports.RegisterTOTPResponse = exports.RegisterTOTPRequest = exports.VerifyU2FRegistrationResponse = exports.VerifyU2FRegistrationRequest = exports.RegisterU2FResponse = exports.RegisterU2FRequest = exports.VerifyPasskeyRegistrationResponse = exports.VerifyPasskeyRegistrationRequest = exports.RegisterPasskeyResponse = exports.RegisterPasskeyRequest = exports.VerifyPhoneResponse = exports.VerifyPhoneRequest = exports.SetPhoneResponse = exports.SetPhoneRequest = exports.VerifyEmailResponse = exports.VerifyEmailRequest = exports.SetEmailResponse = exports.SetEmailRequest = exports.AddHumanUserResponse = exports.AddHumanUserRequest = exports.authenticationMethodTypeToJSON = exports.authenticationMethodTypeFromJSON = exports.AuthenticationMethodType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("../../../google/protobuf/struct");
const object_1 = require("../../object/v2beta/object");
const auth_1 = require("./auth");
const email_1 = require("./email");
const idp_1 = require("./idp");
const password_1 = require("./password");
const phone_1 = require("./phone");
const user_1 = require("./user");
exports.protobufPackage = "zitadel.user.v2beta";
var AuthenticationMethodType;
(function (AuthenticationMethodType) {
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_UNSPECIFIED"] = 0] = "AUTHENTICATION_METHOD_TYPE_UNSPECIFIED";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_PASSWORD"] = 1] = "AUTHENTICATION_METHOD_TYPE_PASSWORD";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_PASSKEY"] = 2] = "AUTHENTICATION_METHOD_TYPE_PASSKEY";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_IDP"] = 3] = "AUTHENTICATION_METHOD_TYPE_IDP";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_TOTP"] = 4] = "AUTHENTICATION_METHOD_TYPE_TOTP";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_U2F"] = 5] = "AUTHENTICATION_METHOD_TYPE_U2F";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_OTP_SMS"] = 6] = "AUTHENTICATION_METHOD_TYPE_OTP_SMS";
    AuthenticationMethodType[AuthenticationMethodType["AUTHENTICATION_METHOD_TYPE_OTP_EMAIL"] = 7] = "AUTHENTICATION_METHOD_TYPE_OTP_EMAIL";
    AuthenticationMethodType[AuthenticationMethodType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthenticationMethodType || (exports.AuthenticationMethodType = AuthenticationMethodType = {}));
function authenticationMethodTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHENTICATION_METHOD_TYPE_UNSPECIFIED":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHENTICATION_METHOD_TYPE_PASSWORD":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSWORD;
        case 2:
        case "AUTHENTICATION_METHOD_TYPE_PASSKEY":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSKEY;
        case 3:
        case "AUTHENTICATION_METHOD_TYPE_IDP":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_IDP;
        case 4:
        case "AUTHENTICATION_METHOD_TYPE_TOTP":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_TOTP;
        case 5:
        case "AUTHENTICATION_METHOD_TYPE_U2F":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_U2F;
        case 6:
        case "AUTHENTICATION_METHOD_TYPE_OTP_SMS":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_SMS;
        case 7:
        case "AUTHENTICATION_METHOD_TYPE_OTP_EMAIL":
            return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_EMAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthenticationMethodType.UNRECOGNIZED;
    }
}
exports.authenticationMethodTypeFromJSON = authenticationMethodTypeFromJSON;
function authenticationMethodTypeToJSON(object) {
    switch (object) {
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_UNSPECIFIED:
            return "AUTHENTICATION_METHOD_TYPE_UNSPECIFIED";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSWORD:
            return "AUTHENTICATION_METHOD_TYPE_PASSWORD";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSKEY:
            return "AUTHENTICATION_METHOD_TYPE_PASSKEY";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_IDP:
            return "AUTHENTICATION_METHOD_TYPE_IDP";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_TOTP:
            return "AUTHENTICATION_METHOD_TYPE_TOTP";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_U2F:
            return "AUTHENTICATION_METHOD_TYPE_U2F";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_SMS:
            return "AUTHENTICATION_METHOD_TYPE_OTP_SMS";
        case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_EMAIL:
            return "AUTHENTICATION_METHOD_TYPE_OTP_EMAIL";
        case AuthenticationMethodType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.authenticationMethodTypeToJSON = authenticationMethodTypeToJSON;
function createBaseAddHumanUserRequest() {
    return {
        userId: undefined,
        username: undefined,
        organisation: undefined,
        organization: undefined,
        profile: undefined,
        email: undefined,
        phone: undefined,
        metadata: [],
        password: undefined,
        hashedPassword: undefined,
        idpLinks: [],
    };
}
exports.AddHumanUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== undefined) {
            writer.uint32(10).string(message.userId);
        }
        if (message.username !== undefined) {
            writer.uint32(18).string(message.username);
        }
        if (message.organisation !== undefined) {
            object_1.Organisation.encode(message.organisation, writer.uint32(26).fork()).ldelim();
        }
        if (message.organization !== undefined) {
            object_1.Organization.encode(message.organization, writer.uint32(90).fork()).ldelim();
        }
        if (message.profile !== undefined) {
            user_1.SetHumanProfile.encode(message.profile, writer.uint32(34).fork()).ldelim();
        }
        if (message.email !== undefined) {
            email_1.SetHumanEmail.encode(message.email, writer.uint32(42).fork()).ldelim();
        }
        if (message.phone !== undefined) {
            phone_1.SetHumanPhone.encode(message.phone, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.metadata) {
            user_1.SetMetadataEntry.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.password !== undefined) {
            password_1.Password.encode(message.password, writer.uint32(58).fork()).ldelim();
        }
        if (message.hashedPassword !== undefined) {
            password_1.HashedPassword.encode(message.hashedPassword, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.idpLinks) {
            idp_1.IDPLink.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddHumanUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.organisation = object_1.Organisation.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.organization = object_1.Organization.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.profile = user_1.SetHumanProfile.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.email = email_1.SetHumanEmail.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.phone = phone_1.SetHumanPhone.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.metadata.push(user_1.SetMetadataEntry.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.password = password_1.Password.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.hashedPassword = password_1.HashedPassword.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.idpLinks.push(idp_1.IDPLink.decode(reader, reader.uint32()));
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
            userId: isSet(object.userId) ? String(object.userId) : undefined,
            username: isSet(object.username) ? String(object.username) : undefined,
            organisation: isSet(object.organisation) ? object_1.Organisation.fromJSON(object.organisation) : undefined,
            organization: isSet(object.organization) ? object_1.Organization.fromJSON(object.organization) : undefined,
            profile: isSet(object.profile) ? user_1.SetHumanProfile.fromJSON(object.profile) : undefined,
            email: isSet(object.email) ? email_1.SetHumanEmail.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? phone_1.SetHumanPhone.fromJSON(object.phone) : undefined,
            metadata: Array.isArray(object?.metadata) ? object.metadata.map((e) => user_1.SetMetadataEntry.fromJSON(e)) : [],
            password: isSet(object.password) ? password_1.Password.fromJSON(object.password) : undefined,
            hashedPassword: isSet(object.hashedPassword) ? password_1.HashedPassword.fromJSON(object.hashedPassword) : undefined,
            idpLinks: Array.isArray(object?.idpLinks) ? object.idpLinks.map((e) => idp_1.IDPLink.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.username !== undefined && (obj.username = message.username);
        message.organisation !== undefined &&
            (obj.organisation = message.organisation ? object_1.Organisation.toJSON(message.organisation) : undefined);
        message.organization !== undefined &&
            (obj.organization = message.organization ? object_1.Organization.toJSON(message.organization) : undefined);
        message.profile !== undefined &&
            (obj.profile = message.profile ? user_1.SetHumanProfile.toJSON(message.profile) : undefined);
        message.email !== undefined && (obj.email = message.email ? email_1.SetHumanEmail.toJSON(message.email) : undefined);
        message.phone !== undefined && (obj.phone = message.phone ? phone_1.SetHumanPhone.toJSON(message.phone) : undefined);
        if (message.metadata) {
            obj.metadata = message.metadata.map((e) => e ? user_1.SetMetadataEntry.toJSON(e) : undefined);
        }
        else {
            obj.metadata = [];
        }
        message.password !== undefined && (obj.password = message.password ? password_1.Password.toJSON(message.password) : undefined);
        message.hashedPassword !== undefined &&
            (obj.hashedPassword = message.hashedPassword ? password_1.HashedPassword.toJSON(message.hashedPassword) : undefined);
        if (message.idpLinks) {
            obj.idpLinks = message.idpLinks.map((e) => e ? idp_1.IDPLink.toJSON(e) : undefined);
        }
        else {
            obj.idpLinks = [];
        }
        return obj;
    },
    create(base) {
        return exports.AddHumanUserRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddHumanUserRequest();
        message.userId = object.userId ?? undefined;
        message.username = object.username ?? undefined;
        message.organisation = (object.organisation !== undefined && object.organisation !== null)
            ? object_1.Organisation.fromPartial(object.organisation)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_1.Organization.fromPartial(object.organization)
            : undefined;
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? user_1.SetHumanProfile.fromPartial(object.profile)
            : undefined;
        message.email = (object.email !== undefined && object.email !== null)
            ? email_1.SetHumanEmail.fromPartial(object.email)
            : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null)
            ? phone_1.SetHumanPhone.fromPartial(object.phone)
            : undefined;
        message.metadata = object.metadata?.map((e) => user_1.SetMetadataEntry.fromPartial(e)) || [];
        message.password = (object.password !== undefined && object.password !== null)
            ? password_1.Password.fromPartial(object.password)
            : undefined;
        message.hashedPassword = (object.hashedPassword !== undefined && object.hashedPassword !== null)
            ? password_1.HashedPassword.fromPartial(object.hashedPassword)
            : undefined;
        message.idpLinks = object.idpLinks?.map((e) => idp_1.IDPLink.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAddHumanUserResponse() {
    return { userId: "", details: undefined, emailCode: undefined, phoneCode: undefined };
}
exports.AddHumanUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.emailCode !== undefined) {
            writer.uint32(26).string(message.emailCode);
        }
        if (message.phoneCode !== undefined) {
            writer.uint32(34).string(message.phoneCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddHumanUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.emailCode = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.phoneCode = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            emailCode: isSet(object.emailCode) ? String(object.emailCode) : undefined,
            phoneCode: isSet(object.phoneCode) ? String(object.phoneCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.emailCode !== undefined && (obj.emailCode = message.emailCode);
        message.phoneCode !== undefined && (obj.phoneCode = message.phoneCode);
        return obj;
    },
    create(base) {
        return exports.AddHumanUserResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddHumanUserResponse();
        message.userId = object.userId ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.emailCode = object.emailCode ?? undefined;
        message.phoneCode = object.phoneCode ?? undefined;
        return message;
    },
};
function createBaseSetEmailRequest() {
    return { userId: "", email: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetEmailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.sendCode !== undefined) {
            email_1.SendEmailVerificationCode.encode(message.sendCode, writer.uint32(26).fork()).ldelim();
        }
        if (message.returnCode !== undefined) {
            email_1.ReturnEmailVerificationCode.encode(message.returnCode, writer.uint32(34).fork()).ldelim();
        }
        if (message.isVerified !== undefined) {
            writer.uint32(40).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sendCode = email_1.SendEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.returnCode = email_1.ReturnEmailVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            email: isSet(object.email) ? String(object.email) : "",
            sendCode: isSet(object.sendCode) ? email_1.SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? email_1.ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.email !== undefined && (obj.email = message.email);
        message.sendCode !== undefined &&
            (obj.sendCode = message.sendCode ? email_1.SendEmailVerificationCode.toJSON(message.sendCode) : undefined);
        message.returnCode !== undefined &&
            (obj.returnCode = message.returnCode ? email_1.ReturnEmailVerificationCode.toJSON(message.returnCode) : undefined);
        message.isVerified !== undefined && (obj.isVerified = message.isVerified);
        return obj;
    },
    create(base) {
        return exports.SetEmailRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetEmailRequest();
        message.userId = object.userId ?? "";
        message.email = object.email ?? "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? email_1.SendEmailVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? email_1.ReturnEmailVerificationCode.fromPartial(object.returnCode)
            : undefined;
        message.isVerified = object.isVerified ?? undefined;
        return message;
    },
};
function createBaseSetEmailResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.SetEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.verificationCode = reader.string();
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.verificationCode !== undefined && (obj.verificationCode = message.verificationCode);
        return obj;
    },
    create(base) {
        return exports.SetEmailResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = object.verificationCode ?? undefined;
        return message;
    },
};
function createBaseVerifyEmailRequest() {
    return { userId: "", verificationCode: "" };
}
exports.VerifyEmailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.verificationCode !== "") {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.verificationCode = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.verificationCode !== undefined && (obj.verificationCode = message.verificationCode);
        return obj;
    },
    create(base) {
        return exports.VerifyEmailRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyEmailRequest();
        message.userId = object.userId ?? "";
        message.verificationCode = object.verificationCode ?? "";
        return message;
    },
};
function createBaseVerifyEmailResponse() {
    return { details: undefined };
}
exports.VerifyEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyEmailResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseSetPhoneRequest() {
    return { userId: "", phone: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}
exports.SetPhoneRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.phone !== "") {
            writer.uint32(18).string(message.phone);
        }
        if (message.sendCode !== undefined) {
            phone_1.SendPhoneVerificationCode.encode(message.sendCode, writer.uint32(26).fork()).ldelim();
        }
        if (message.returnCode !== undefined) {
            phone_1.ReturnPhoneVerificationCode.encode(message.returnCode, writer.uint32(34).fork()).ldelim();
        }
        if (message.isVerified !== undefined) {
            writer.uint32(40).bool(message.isVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPhoneRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sendCode = phone_1.SendPhoneVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.returnCode = phone_1.ReturnPhoneVerificationCode.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            phone: isSet(object.phone) ? String(object.phone) : "",
            sendCode: isSet(object.sendCode) ? phone_1.SendPhoneVerificationCode.fromJSON(object.sendCode) : undefined,
            returnCode: isSet(object.returnCode) ? phone_1.ReturnPhoneVerificationCode.fromJSON(object.returnCode) : undefined,
            isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.phone !== undefined && (obj.phone = message.phone);
        message.sendCode !== undefined &&
            (obj.sendCode = message.sendCode ? phone_1.SendPhoneVerificationCode.toJSON(message.sendCode) : undefined);
        message.returnCode !== undefined &&
            (obj.returnCode = message.returnCode ? phone_1.ReturnPhoneVerificationCode.toJSON(message.returnCode) : undefined);
        message.isVerified !== undefined && (obj.isVerified = message.isVerified);
        return obj;
    },
    create(base) {
        return exports.SetPhoneRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetPhoneRequest();
        message.userId = object.userId ?? "";
        message.phone = object.phone ?? "";
        message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
            ? phone_1.SendPhoneVerificationCode.fromPartial(object.sendCode)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? phone_1.ReturnPhoneVerificationCode.fromPartial(object.returnCode)
            : undefined;
        message.isVerified = object.isVerified ?? undefined;
        return message;
    },
};
function createBaseSetPhoneResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.SetPhoneResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPhoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.verificationCode = reader.string();
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.verificationCode !== undefined && (obj.verificationCode = message.verificationCode);
        return obj;
    },
    create(base) {
        return exports.SetPhoneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = object.verificationCode ?? undefined;
        return message;
    },
};
function createBaseVerifyPhoneRequest() {
    return { userId: "", verificationCode: "" };
}
exports.VerifyPhoneRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.verificationCode !== "") {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyPhoneRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.verificationCode = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.verificationCode !== undefined && (obj.verificationCode = message.verificationCode);
        return obj;
    },
    create(base) {
        return exports.VerifyPhoneRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyPhoneRequest();
        message.userId = object.userId ?? "";
        message.verificationCode = object.verificationCode ?? "";
        return message;
    },
};
function createBaseVerifyPhoneResponse() {
    return { details: undefined };
}
exports.VerifyPhoneResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyPhoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyPhoneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRegisterPasskeyRequest() {
    return { userId: "", code: undefined, authenticator: 0, domain: "" };
}
exports.RegisterPasskeyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.code !== undefined) {
            auth_1.PasskeyRegistrationCode.encode(message.code, writer.uint32(18).fork()).ldelim();
        }
        if (message.authenticator !== 0) {
            writer.uint32(24).int32(message.authenticator);
        }
        if (message.domain !== "") {
            writer.uint32(34).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterPasskeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.code = auth_1.PasskeyRegistrationCode.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.authenticator = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.domain = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            code: isSet(object.code) ? auth_1.PasskeyRegistrationCode.fromJSON(object.code) : undefined,
            authenticator: isSet(object.authenticator) ? (0, auth_1.passkeyAuthenticatorFromJSON)(object.authenticator) : 0,
            domain: isSet(object.domain) ? String(object.domain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.code !== undefined && (obj.code = message.code ? auth_1.PasskeyRegistrationCode.toJSON(message.code) : undefined);
        message.authenticator !== undefined && (obj.authenticator = (0, auth_1.passkeyAuthenticatorToJSON)(message.authenticator));
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },
    create(base) {
        return exports.RegisterPasskeyRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterPasskeyRequest();
        message.userId = object.userId ?? "";
        message.code = (object.code !== undefined && object.code !== null)
            ? auth_1.PasskeyRegistrationCode.fromPartial(object.code)
            : undefined;
        message.authenticator = object.authenticator ?? 0;
        message.domain = object.domain ?? "";
        return message;
    },
};
function createBaseRegisterPasskeyResponse() {
    return { details: undefined, passkeyId: "", publicKeyCredentialCreationOptions: undefined };
}
exports.RegisterPasskeyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.passkeyId !== "") {
            writer.uint32(18).string(message.passkeyId);
        }
        if (message.publicKeyCredentialCreationOptions !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.publicKeyCredentialCreationOptions), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterPasskeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.passkeyId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.publicKeyCredentialCreationOptions = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            passkeyId: isSet(object.passkeyId) ? String(object.passkeyId) : "",
            publicKeyCredentialCreationOptions: isObject(object.publicKeyCredentialCreationOptions)
                ? object.publicKeyCredentialCreationOptions
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.passkeyId !== undefined && (obj.passkeyId = message.passkeyId);
        message.publicKeyCredentialCreationOptions !== undefined &&
            (obj.publicKeyCredentialCreationOptions = message.publicKeyCredentialCreationOptions);
        return obj;
    },
    create(base) {
        return exports.RegisterPasskeyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterPasskeyResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.passkeyId = object.passkeyId ?? "";
        message.publicKeyCredentialCreationOptions = object.publicKeyCredentialCreationOptions ?? undefined;
        return message;
    },
};
function createBaseVerifyPasskeyRegistrationRequest() {
    return { userId: "", passkeyId: "", publicKeyCredential: undefined, passkeyName: "" };
}
exports.VerifyPasskeyRegistrationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.passkeyId !== "") {
            writer.uint32(18).string(message.passkeyId);
        }
        if (message.publicKeyCredential !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.publicKeyCredential), writer.uint32(26).fork()).ldelim();
        }
        if (message.passkeyName !== "") {
            writer.uint32(34).string(message.passkeyName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyPasskeyRegistrationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.passkeyId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.publicKeyCredential = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.passkeyName = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            passkeyId: isSet(object.passkeyId) ? String(object.passkeyId) : "",
            publicKeyCredential: isObject(object.publicKeyCredential) ? object.publicKeyCredential : undefined,
            passkeyName: isSet(object.passkeyName) ? String(object.passkeyName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.passkeyId !== undefined && (obj.passkeyId = message.passkeyId);
        message.publicKeyCredential !== undefined && (obj.publicKeyCredential = message.publicKeyCredential);
        message.passkeyName !== undefined && (obj.passkeyName = message.passkeyName);
        return obj;
    },
    create(base) {
        return exports.VerifyPasskeyRegistrationRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyPasskeyRegistrationRequest();
        message.userId = object.userId ?? "";
        message.passkeyId = object.passkeyId ?? "";
        message.publicKeyCredential = object.publicKeyCredential ?? undefined;
        message.passkeyName = object.passkeyName ?? "";
        return message;
    },
};
function createBaseVerifyPasskeyRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyPasskeyRegistrationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyPasskeyRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyPasskeyRegistrationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyPasskeyRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRegisterU2FRequest() {
    return { userId: "", domain: "" };
}
exports.RegisterU2FRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.domain !== "") {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterU2FRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.domain = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            domain: isSet(object.domain) ? String(object.domain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },
    create(base) {
        return exports.RegisterU2FRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterU2FRequest();
        message.userId = object.userId ?? "";
        message.domain = object.domain ?? "";
        return message;
    },
};
function createBaseRegisterU2FResponse() {
    return { details: undefined, u2fId: "", publicKeyCredentialCreationOptions: undefined };
}
exports.RegisterU2FResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.u2fId !== "") {
            writer.uint32(18).string(message.u2fId);
        }
        if (message.publicKeyCredentialCreationOptions !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.publicKeyCredentialCreationOptions), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterU2FResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.u2fId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.publicKeyCredentialCreationOptions = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            u2fId: isSet(object.u2fId) ? String(object.u2fId) : "",
            publicKeyCredentialCreationOptions: isObject(object.publicKeyCredentialCreationOptions)
                ? object.publicKeyCredentialCreationOptions
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.u2fId !== undefined && (obj.u2fId = message.u2fId);
        message.publicKeyCredentialCreationOptions !== undefined &&
            (obj.publicKeyCredentialCreationOptions = message.publicKeyCredentialCreationOptions);
        return obj;
    },
    create(base) {
        return exports.RegisterU2FResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterU2FResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.u2fId = object.u2fId ?? "";
        message.publicKeyCredentialCreationOptions = object.publicKeyCredentialCreationOptions ?? undefined;
        return message;
    },
};
function createBaseVerifyU2FRegistrationRequest() {
    return { userId: "", u2fId: "", publicKeyCredential: undefined, tokenName: "" };
}
exports.VerifyU2FRegistrationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.u2fId !== "") {
            writer.uint32(18).string(message.u2fId);
        }
        if (message.publicKeyCredential !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.publicKeyCredential), writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenName !== "") {
            writer.uint32(34).string(message.tokenName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyU2FRegistrationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.u2fId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.publicKeyCredential = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.tokenName = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            u2fId: isSet(object.u2fId) ? String(object.u2fId) : "",
            publicKeyCredential: isObject(object.publicKeyCredential) ? object.publicKeyCredential : undefined,
            tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.u2fId !== undefined && (obj.u2fId = message.u2fId);
        message.publicKeyCredential !== undefined && (obj.publicKeyCredential = message.publicKeyCredential);
        message.tokenName !== undefined && (obj.tokenName = message.tokenName);
        return obj;
    },
    create(base) {
        return exports.VerifyU2FRegistrationRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyU2FRegistrationRequest();
        message.userId = object.userId ?? "";
        message.u2fId = object.u2fId ?? "";
        message.publicKeyCredential = object.publicKeyCredential ?? undefined;
        message.tokenName = object.tokenName ?? "";
        return message;
    },
};
function createBaseVerifyU2FRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyU2FRegistrationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyU2FRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyU2FRegistrationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyU2FRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRegisterTOTPRequest() {
    return { userId: "" };
}
exports.RegisterTOTPRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterTOTPRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.RegisterTOTPRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterTOTPRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseRegisterTOTPResponse() {
    return { details: undefined, uri: "", secret: "" };
}
exports.RegisterTOTPResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.uri !== "") {
            writer.uint32(18).string(message.uri);
        }
        if (message.secret !== "") {
            writer.uint32(26).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterTOTPResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.secret = reader.string();
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            uri: isSet(object.uri) ? String(object.uri) : "",
            secret: isSet(object.secret) ? String(object.secret) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.uri !== undefined && (obj.uri = message.uri);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },
    create(base) {
        return exports.RegisterTOTPResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterTOTPResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.uri = object.uri ?? "";
        message.secret = object.secret ?? "";
        return message;
    },
};
function createBaseVerifyTOTPRegistrationRequest() {
    return { userId: "", code: "" };
}
exports.VerifyTOTPRegistrationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyTOTPRegistrationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return {
            userId: isSet(object.userId) ? String(object.userId) : "",
            code: isSet(object.code) ? String(object.code) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.code !== undefined && (obj.code = message.code);
        return obj;
    },
    create(base) {
        return exports.VerifyTOTPRegistrationRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyTOTPRegistrationRequest();
        message.userId = object.userId ?? "";
        message.code = object.code ?? "";
        return message;
    },
};
function createBaseVerifyTOTPRegistrationResponse() {
    return { details: undefined };
}
exports.VerifyTOTPRegistrationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyTOTPRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyTOTPRegistrationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyTOTPRegistrationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddOTPSMSRequest() {
    return { userId: "" };
}
exports.AddOTPSMSRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPSMSRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.AddOTPSMSRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddOTPSMSRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseAddOTPSMSResponse() {
    return { details: undefined };
}
exports.AddOTPSMSResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPSMSResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddOTPSMSResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddOTPSMSResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveOTPSMSRequest() {
    return { userId: "" };
}
exports.RemoveOTPSMSRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPSMSRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.RemoveOTPSMSRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveOTPSMSRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseRemoveOTPSMSResponse() {
    return { details: undefined };
}
exports.RemoveOTPSMSResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPSMSResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveOTPSMSResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveOTPSMSResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddOTPEmailRequest() {
    return { userId: "" };
}
exports.AddOTPEmailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.AddOTPEmailRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddOTPEmailRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseAddOTPEmailResponse() {
    return { details: undefined };
}
exports.AddOTPEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOTPEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddOTPEmailResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddOTPEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveOTPEmailRequest() {
    return { userId: "" };
}
exports.RemoveOTPEmailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.RemoveOTPEmailRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveOTPEmailRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseRemoveOTPEmailResponse() {
    return { details: undefined };
}
exports.RemoveOTPEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveOTPEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveOTPEmailResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveOTPEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseCreatePasskeyRegistrationLinkRequest() {
    return { userId: "", sendLink: undefined, returnCode: undefined };
}
exports.CreatePasskeyRegistrationLinkRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.sendLink !== undefined) {
            auth_1.SendPasskeyRegistrationLink.encode(message.sendLink, writer.uint32(18).fork()).ldelim();
        }
        if (message.returnCode !== undefined) {
            auth_1.ReturnPasskeyRegistrationCode.encode(message.returnCode, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePasskeyRegistrationLinkRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sendLink = auth_1.SendPasskeyRegistrationLink.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = auth_1.ReturnPasskeyRegistrationCode.decode(reader, reader.uint32());
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            sendLink: isSet(object.sendLink) ? auth_1.SendPasskeyRegistrationLink.fromJSON(object.sendLink) : undefined,
            returnCode: isSet(object.returnCode) ? auth_1.ReturnPasskeyRegistrationCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.sendLink !== undefined &&
            (obj.sendLink = message.sendLink ? auth_1.SendPasskeyRegistrationLink.toJSON(message.sendLink) : undefined);
        message.returnCode !== undefined &&
            (obj.returnCode = message.returnCode ? auth_1.ReturnPasskeyRegistrationCode.toJSON(message.returnCode) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreatePasskeyRegistrationLinkRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreatePasskeyRegistrationLinkRequest();
        message.userId = object.userId ?? "";
        message.sendLink = (object.sendLink !== undefined && object.sendLink !== null)
            ? auth_1.SendPasskeyRegistrationLink.fromPartial(object.sendLink)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? auth_1.ReturnPasskeyRegistrationCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBaseCreatePasskeyRegistrationLinkResponse() {
    return { details: undefined, code: undefined };
}
exports.CreatePasskeyRegistrationLinkResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.code !== undefined) {
            auth_1.PasskeyRegistrationCode.encode(message.code, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePasskeyRegistrationLinkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.code = auth_1.PasskeyRegistrationCode.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            code: isSet(object.code) ? auth_1.PasskeyRegistrationCode.fromJSON(object.code) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.code !== undefined && (obj.code = message.code ? auth_1.PasskeyRegistrationCode.toJSON(message.code) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreatePasskeyRegistrationLinkResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreatePasskeyRegistrationLinkResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.code = (object.code !== undefined && object.code !== null)
            ? auth_1.PasskeyRegistrationCode.fromPartial(object.code)
            : undefined;
        return message;
    },
};
function createBaseStartIdentityProviderIntentRequest() {
    return { idpId: "", urls: undefined, ldap: undefined };
}
exports.StartIdentityProviderIntentRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.urls !== undefined) {
            idp_1.RedirectURLs.encode(message.urls, writer.uint32(18).fork()).ldelim();
        }
        if (message.ldap !== undefined) {
            idp_1.LDAPCredentials.encode(message.ldap, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartIdentityProviderIntentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.urls = idp_1.RedirectURLs.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ldap = idp_1.LDAPCredentials.decode(reader, reader.uint32());
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
            idpId: isSet(object.idpId) ? String(object.idpId) : "",
            urls: isSet(object.urls) ? idp_1.RedirectURLs.fromJSON(object.urls) : undefined,
            ldap: isSet(object.ldap) ? idp_1.LDAPCredentials.fromJSON(object.ldap) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idpId !== undefined && (obj.idpId = message.idpId);
        message.urls !== undefined && (obj.urls = message.urls ? idp_1.RedirectURLs.toJSON(message.urls) : undefined);
        message.ldap !== undefined && (obj.ldap = message.ldap ? idp_1.LDAPCredentials.toJSON(message.ldap) : undefined);
        return obj;
    },
    create(base) {
        return exports.StartIdentityProviderIntentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStartIdentityProviderIntentRequest();
        message.idpId = object.idpId ?? "";
        message.urls = (object.urls !== undefined && object.urls !== null)
            ? idp_1.RedirectURLs.fromPartial(object.urls)
            : undefined;
        message.ldap = (object.ldap !== undefined && object.ldap !== null)
            ? idp_1.LDAPCredentials.fromPartial(object.ldap)
            : undefined;
        return message;
    },
};
function createBaseStartIdentityProviderIntentResponse() {
    return { details: undefined, authUrl: undefined, idpIntent: undefined, postForm: undefined };
}
exports.StartIdentityProviderIntentResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.authUrl !== undefined) {
            writer.uint32(18).string(message.authUrl);
        }
        if (message.idpIntent !== undefined) {
            idp_1.IDPIntent.encode(message.idpIntent, writer.uint32(26).fork()).ldelim();
        }
        if (message.postForm !== undefined) {
            writer.uint32(34).bytes(message.postForm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartIdentityProviderIntentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.authUrl = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.idpIntent = idp_1.IDPIntent.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.postForm = reader.bytes();
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            authUrl: isSet(object.authUrl) ? String(object.authUrl) : undefined,
            idpIntent: isSet(object.idpIntent) ? idp_1.IDPIntent.fromJSON(object.idpIntent) : undefined,
            postForm: isSet(object.postForm) ? Buffer.from(bytesFromBase64(object.postForm)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.authUrl !== undefined && (obj.authUrl = message.authUrl);
        message.idpIntent !== undefined &&
            (obj.idpIntent = message.idpIntent ? idp_1.IDPIntent.toJSON(message.idpIntent) : undefined);
        message.postForm !== undefined &&
            (obj.postForm = message.postForm !== undefined ? base64FromBytes(message.postForm) : undefined);
        return obj;
    },
    create(base) {
        return exports.StartIdentityProviderIntentResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStartIdentityProviderIntentResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.authUrl = object.authUrl ?? undefined;
        message.idpIntent = (object.idpIntent !== undefined && object.idpIntent !== null)
            ? idp_1.IDPIntent.fromPartial(object.idpIntent)
            : undefined;
        message.postForm = object.postForm ?? undefined;
        return message;
    },
};
function createBaseRetrieveIdentityProviderIntentRequest() {
    return { idpIntentId: "", idpIntentToken: "" };
}
exports.RetrieveIdentityProviderIntentRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpIntentId !== "") {
            writer.uint32(10).string(message.idpIntentId);
        }
        if (message.idpIntentToken !== "") {
            writer.uint32(18).string(message.idpIntentToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetrieveIdentityProviderIntentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpIntentId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpIntentToken = reader.string();
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
            idpIntentId: isSet(object.idpIntentId) ? String(object.idpIntentId) : "",
            idpIntentToken: isSet(object.idpIntentToken) ? String(object.idpIntentToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.idpIntentId !== undefined && (obj.idpIntentId = message.idpIntentId);
        message.idpIntentToken !== undefined && (obj.idpIntentToken = message.idpIntentToken);
        return obj;
    },
    create(base) {
        return exports.RetrieveIdentityProviderIntentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRetrieveIdentityProviderIntentRequest();
        message.idpIntentId = object.idpIntentId ?? "";
        message.idpIntentToken = object.idpIntentToken ?? "";
        return message;
    },
};
function createBaseRetrieveIdentityProviderIntentResponse() {
    return { details: undefined, idpInformation: undefined, userId: "" };
}
exports.RetrieveIdentityProviderIntentResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.idpInformation !== undefined) {
            idp_1.IDPInformation.encode(message.idpInformation, writer.uint32(18).fork()).ldelim();
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetrieveIdentityProviderIntentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpInformation = idp_1.IDPInformation.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userId = reader.string();
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            idpInformation: isSet(object.idpInformation) ? idp_1.IDPInformation.fromJSON(object.idpInformation) : undefined,
            userId: isSet(object.userId) ? String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.idpInformation !== undefined &&
            (obj.idpInformation = message.idpInformation ? idp_1.IDPInformation.toJSON(message.idpInformation) : undefined);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.RetrieveIdentityProviderIntentResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRetrieveIdentityProviderIntentResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.idpInformation = (object.idpInformation !== undefined && object.idpInformation !== null)
            ? idp_1.IDPInformation.fromPartial(object.idpInformation)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseAddIDPLinkRequest() {
    return { userId: "", idpLink: undefined };
}
exports.AddIDPLinkRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.idpLink !== undefined) {
            idp_1.IDPLink.encode(message.idpLink, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddIDPLinkRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpLink = idp_1.IDPLink.decode(reader, reader.uint32());
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            idpLink: isSet(object.idpLink) ? idp_1.IDPLink.fromJSON(object.idpLink) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.idpLink !== undefined && (obj.idpLink = message.idpLink ? idp_1.IDPLink.toJSON(message.idpLink) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddIDPLinkRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddIDPLinkRequest();
        message.userId = object.userId ?? "";
        message.idpLink = (object.idpLink !== undefined && object.idpLink !== null)
            ? idp_1.IDPLink.fromPartial(object.idpLink)
            : undefined;
        return message;
    },
};
function createBaseAddIDPLinkResponse() {
    return { details: undefined };
}
exports.AddIDPLinkResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddIDPLinkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddIDPLinkResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddIDPLinkResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBasePasswordResetRequest() {
    return { userId: "", sendLink: undefined, returnCode: undefined };
}
exports.PasswordResetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.sendLink !== undefined) {
            password_1.SendPasswordResetLink.encode(message.sendLink, writer.uint32(18).fork()).ldelim();
        }
        if (message.returnCode !== undefined) {
            password_1.ReturnPasswordResetCode.encode(message.returnCode, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordResetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sendLink = password_1.SendPasswordResetLink.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.returnCode = password_1.ReturnPasswordResetCode.decode(reader, reader.uint32());
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            sendLink: isSet(object.sendLink) ? password_1.SendPasswordResetLink.fromJSON(object.sendLink) : undefined,
            returnCode: isSet(object.returnCode) ? password_1.ReturnPasswordResetCode.fromJSON(object.returnCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.sendLink !== undefined &&
            (obj.sendLink = message.sendLink ? password_1.SendPasswordResetLink.toJSON(message.sendLink) : undefined);
        message.returnCode !== undefined &&
            (obj.returnCode = message.returnCode ? password_1.ReturnPasswordResetCode.toJSON(message.returnCode) : undefined);
        return obj;
    },
    create(base) {
        return exports.PasswordResetRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordResetRequest();
        message.userId = object.userId ?? "";
        message.sendLink = (object.sendLink !== undefined && object.sendLink !== null)
            ? password_1.SendPasswordResetLink.fromPartial(object.sendLink)
            : undefined;
        message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
            ? password_1.ReturnPasswordResetCode.fromPartial(object.returnCode)
            : undefined;
        return message;
    },
};
function createBasePasswordResetResponse() {
    return { details: undefined, verificationCode: undefined };
}
exports.PasswordResetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(18).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordResetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.verificationCode = reader.string();
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.verificationCode !== undefined && (obj.verificationCode = message.verificationCode);
        return obj;
    },
    create(base) {
        return exports.PasswordResetResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordResetResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.verificationCode = object.verificationCode ?? undefined;
        return message;
    },
};
function createBaseSetPasswordRequest() {
    return { userId: "", newPassword: undefined, currentPassword: undefined, verificationCode: undefined };
}
exports.SetPasswordRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.newPassword !== undefined) {
            password_1.Password.encode(message.newPassword, writer.uint32(18).fork()).ldelim();
        }
        if (message.currentPassword !== undefined) {
            writer.uint32(26).string(message.currentPassword);
        }
        if (message.verificationCode !== undefined) {
            writer.uint32(34).string(message.verificationCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPasswordRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.newPassword = password_1.Password.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.currentPassword = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.verificationCode = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            newPassword: isSet(object.newPassword) ? password_1.Password.fromJSON(object.newPassword) : undefined,
            currentPassword: isSet(object.currentPassword) ? String(object.currentPassword) : undefined,
            verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.newPassword !== undefined &&
            (obj.newPassword = message.newPassword ? password_1.Password.toJSON(message.newPassword) : undefined);
        message.currentPassword !== undefined && (obj.currentPassword = message.currentPassword);
        message.verificationCode !== undefined && (obj.verificationCode = message.verificationCode);
        return obj;
    },
    create(base) {
        return exports.SetPasswordRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetPasswordRequest();
        message.userId = object.userId ?? "";
        message.newPassword = (object.newPassword !== undefined && object.newPassword !== null)
            ? password_1.Password.fromPartial(object.newPassword)
            : undefined;
        message.currentPassword = object.currentPassword ?? undefined;
        message.verificationCode = object.verificationCode ?? undefined;
        return message;
    },
};
function createBaseSetPasswordResponse() {
    return { details: undefined };
}
exports.SetPasswordResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPasswordResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetPasswordResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetPasswordResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListAuthenticationMethodTypesRequest() {
    return { userId: "" };
}
exports.ListAuthenticationMethodTypesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAuthenticationMethodTypesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.ListAuthenticationMethodTypesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListAuthenticationMethodTypesRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseListAuthenticationMethodTypesResponse() {
    return { details: undefined, authMethodTypes: [] };
}
exports.ListAuthenticationMethodTypesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.authMethodTypes) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAuthenticationMethodTypesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag === 16) {
                        message.authMethodTypes.push(reader.int32());
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.authMethodTypes.push(reader.int32());
                        }
                        continue;
                    }
                    break;
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            authMethodTypes: Array.isArray(object?.authMethodTypes)
                ? object.authMethodTypes.map((e) => authenticationMethodTypeFromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.authMethodTypes) {
            obj.authMethodTypes = message.authMethodTypes.map((e) => authenticationMethodTypeToJSON(e));
        }
        else {
            obj.authMethodTypes = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListAuthenticationMethodTypesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListAuthenticationMethodTypesResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.authMethodTypes = object.authMethodTypes?.map((e) => e) || [];
        return message;
    },
};
exports.UserServiceDefinition = {
    name: "UserService",
    fullName: "zitadel.user.v2beta.UserService",
    methods: {
        /** Create a new human user */
        addHumanUser: {
            name: "AddHumanUser",
            requestType: exports.AddHumanUserRequest,
            requestStream: false,
            responseType: exports.AddHumanUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            248,
                            1,
                            18,
                            21,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            40,
                            72,
                            117,
                            109,
                            97,
                            110,
                            41,
                            26,
                            209,
                            1,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            47,
                            105,
                            109,
                            112,
                            111,
                            114,
                            116,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            116,
                            121,
                            112,
                            101,
                            32,
                            104,
                            117,
                            109,
                            97,
                            110,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            110,
                            101,
                            119,
                            108,
                            121,
                            32,
                            99,
                            114,
                            101,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            103,
                            101,
                            116,
                            32,
                            97,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            105,
                            102,
                            32,
                            101,
                            105,
                            116,
                            104,
                            101,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            32,
                            105,
                            115,
                            32,
                            110,
                            111,
                            116,
                            32,
                            109,
                            97,
                            114,
                            107,
                            101,
                            100,
                            32,
                            97,
                            115,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            97,
                            110,
                            100,
                            32,
                            121,
                            111,
                            117,
                            32,
                            100,
                            105,
                            100,
                            32,
                            110,
                            111,
                            116,
                            32,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            116,
                            111,
                            32,
                            98,
                            101,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            33,
                            10,
                            26,
                            10,
                            10,
                            117,
                            115,
                            101,
                            114,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                            26,
                            12,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            18,
                            3,
                            8,
                            201,
                            1,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            24,
                            58,
                            1,
                            42,
                            34,
                            19,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            104,
                            117,
                            109,
                            97,
                            110,
                        ]),
                    ],
                },
            },
        },
        /** Change the email of a user */
        setEmail: {
            name: "SetEmail",
            requestType: exports.SetEmailRequest,
            requestStream: false,
            responseType: exports.SetEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            209,
                            1,
                            18,
                            21,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            26,
                            170,
                            1,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            116,
                            97,
                            116,
                            101,
                            32,
                            105,
                            115,
                            32,
                            115,
                            101,
                            116,
                            32,
                            116,
                            111,
                            32,
                            110,
                            111,
                            116,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            44,
                            32,
                            97,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            99,
                            111,
                            100,
                            101,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            103,
                            101,
                            110,
                            101,
                            114,
                            97,
                            116,
                            101,
                            100,
                            44,
                            32,
                            119,
                            104,
                            105,
                            99,
                            104,
                            32,
                            99,
                            97,
                            110,
                            32,
                            98,
                            101,
                            32,
                            101,
                            105,
                            116,
                            104,
                            101,
                            114,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            32,
                            111,
                            114,
                            32,
                            115,
                            101,
                            110,
                            116,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            98,
                            121,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            58,
                            1,
                            42,
                            34,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            101,
                            109,
                            97,
                            105,
                            108,
                        ]),
                    ],
                },
            },
        },
        /** Verify the email with the provided code */
        verifyEmail: {
            name: "VerifyEmail",
            requestType: exports.VerifyEmailRequest,
            requestStream: false,
            responseType: exports.VerifyEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            74,
                            18,
                            16,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            26,
                            41,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            103,
                            101,
                            110,
                            101,
                            114,
                            97,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            100,
                            101,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            101,
                            109,
                            97,
                            105,
                            108,
                            47,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        /** Change the phone of a user */
        setPhone: {
            name: "SetPhone",
            requestType: exports.SetPhoneRequest,
            requestStream: false,
            responseType: exports.SetPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            200,
                            1,
                            18,
                            18,
                            83,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            26,
                            164,
                            1,
                            83,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            116,
                            97,
                            116,
                            101,
                            32,
                            105,
                            115,
                            32,
                            115,
                            101,
                            116,
                            32,
                            116,
                            111,
                            32,
                            110,
                            111,
                            116,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            44,
                            32,
                            97,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            99,
                            111,
                            100,
                            101,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            103,
                            101,
                            110,
                            101,
                            114,
                            97,
                            116,
                            101,
                            100,
                            44,
                            32,
                            119,
                            104,
                            105,
                            99,
                            104,
                            32,
                            99,
                            97,
                            110,
                            32,
                            98,
                            101,
                            32,
                            101,
                            105,
                            116,
                            104,
                            101,
                            114,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            32,
                            111,
                            114,
                            32,
                            115,
                            101,
                            110,
                            116,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            98,
                            121,
                            32,
                            115,
                            109,
                            115,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            58,
                            1,
                            42,
                            34,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            104,
                            111,
                            110,
                            101,
                        ]),
                    ],
                },
            },
        },
        /** Verify the phone with the provided code */
        verifyPhone: {
            name: "VerifyPhone",
            requestType: exports.VerifyPhoneRequest,
            requestStream: false,
            responseType: exports.VerifyPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            74,
                            18,
                            16,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            26,
                            41,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            103,
                            101,
                            110,
                            101,
                            114,
                            97,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            100,
                            101,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            104,
                            111,
                            110,
                            101,
                            47,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        registerPasskey: {
            name: "RegisterPasskey",
            requestType: exports.RegisterPasskeyRequest,
            requestStream: false,
            responseType: exports.RegisterPasskeyResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            218,
                            1,
                            18,
                            44,
                            83,
                            116,
                            97,
                            114,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            156,
                            1,
                            83,
                            116,
                            97,
                            114,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            44,
                            32,
                            97,
                            115,
                            32,
                            97,
                            32,
                            114,
                            101,
                            115,
                            112,
                            111,
                            110,
                            115,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            32,
                            107,
                            101,
                            121,
                            32,
                            99,
                            114,
                            101,
                            100,
                            101,
                            110,
                            116,
                            105,
                            97,
                            108,
                            32,
                            99,
                            114,
                            101,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            112,
                            116,
                            105,
                            111,
                            110,
                            115,
                            32,
                            97,
                            114,
                            101,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            44,
                            32,
                            119,
                            104,
                            105,
                            99,
                            104,
                            32,
                            97,
                            114,
                            101,
                            32,
                            117,
                            115,
                            101,
                            100,
                            32,
                            116,
                            111,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            37,
                            58,
                            1,
                            42,
                            34,
                            32,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            115,
                        ]),
                    ],
                },
            },
        },
        verifyPasskeyRegistration: {
            name: "VerifyPasskeyRegistration",
            requestType: exports.VerifyPasskeyRegistrationRequest,
            requestStream: false,
            responseType: exports.VerifyPasskeyRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            107,
                            18,
                            27,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            97,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            63,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            32,
                            107,
                            101,
                            121,
                            32,
                            99,
                            114,
                            101,
                            100,
                            101,
                            110,
                            116,
                            105,
                            97,
                            108,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            50,
                            58,
                            1,
                            42,
                            34,
                            45,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            115,
                            47,
                            123,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        createPasskeyRegistrationLink: {
            name: "CreatePasskeyRegistrationLink",
            requestType: exports.CreatePasskeyRegistrationLinkRequest,
            requestStream: false,
            responseType: exports.CreatePasskeyRegistrationLinkResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            163,
                            1,
                            18,
                            45,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            32,
                            97,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            108,
                            105,
                            110,
                            107,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            101,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            32,
                            97,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            108,
                            105,
                            110,
                            107,
                            32,
                            119,
                            104,
                            105,
                            99,
                            104,
                            32,
                            105,
                            110,
                            99,
                            108,
                            117,
                            100,
                            101,
                            115,
                            32,
                            97,
                            32,
                            99,
                            111,
                            100,
                            101,
                            32,
                            97,
                            110,
                            100,
                            32,
                            101,
                            105,
                            116,
                            104,
                            101,
                            114,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            32,
                            105,
                            116,
                            32,
                            111,
                            114,
                            32,
                            115,
                            101,
                            110,
                            100,
                            32,
                            105,
                            116,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            22,
                            10,
                            20,
                            10,
                            18,
                            117,
                            115,
                            101,
                            114,
                            46,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            55,
                            58,
                            1,
                            42,
                            34,
                            50,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            115,
                            47,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            95,
                            108,
                            105,
                            110,
                            107,
                        ]),
                    ],
                },
            },
        },
        registerU2F: {
            name: "RegisterU2F",
            requestType: exports.RegisterU2FRequest,
            requestStream: false,
            responseType: exports.RegisterU2FResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            226,
                            1,
                            18,
                            48,
                            83,
                            116,
                            97,
                            114,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            117,
                            50,
                            102,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            160,
                            1,
                            83,
                            116,
                            97,
                            114,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            117,
                            50,
                            102,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            44,
                            32,
                            97,
                            115,
                            32,
                            97,
                            32,
                            114,
                            101,
                            115,
                            112,
                            111,
                            110,
                            115,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            32,
                            107,
                            101,
                            121,
                            32,
                            99,
                            114,
                            101,
                            100,
                            101,
                            110,
                            116,
                            105,
                            97,
                            108,
                            32,
                            99,
                            114,
                            101,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            112,
                            116,
                            105,
                            111,
                            110,
                            115,
                            32,
                            97,
                            114,
                            101,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            44,
                            32,
                            119,
                            104,
                            105,
                            99,
                            104,
                            32,
                            97,
                            114,
                            101,
                            32,
                            117,
                            115,
                            101,
                            100,
                            32,
                            116,
                            111,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            50,
                            102,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            32,
                            58,
                            1,
                            42,
                            34,
                            27,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            117,
                            50,
                            102,
                        ]),
                    ],
                },
            },
        },
        verifyU2FRegistration: {
            name: "VerifyU2FRegistration",
            requestType: exports.VerifyU2FRegistrationRequest,
            requestStream: false,
            responseType: exports.VerifyU2FRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            111,
                            18,
                            29,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            97,
                            32,
                            117,
                            50,
                            102,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            65,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            50,
                            102,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            32,
                            107,
                            101,
                            121,
                            32,
                            99,
                            114,
                            101,
                            100,
                            101,
                            110,
                            116,
                            105,
                            97,
                            108,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            117,
                            50,
                            102,
                            47,
                            123,
                            117,
                            50,
                            102,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        registerTOTP: {
            name: "RegisterTOTP",
            requestType: exports.RegisterTOTPRequest,
            requestStream: false,
            responseType: exports.RegisterTOTPResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            208,
                            1,
                            18,
                            53,
                            83,
                            116,
                            97,
                            114,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            84,
                            79,
                            84,
                            80,
                            32,
                            103,
                            101,
                            110,
                            101,
                            114,
                            97,
                            116,
                            111,
                            114,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            137,
                            1,
                            83,
                            116,
                            97,
                            114,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            84,
                            79,
                            84,
                            80,
                            32,
                            103,
                            101,
                            110,
                            101,
                            114,
                            97,
                            116,
                            111,
                            114,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            44,
                            32,
                            97,
                            115,
                            32,
                            97,
                            32,
                            114,
                            101,
                            115,
                            112,
                            111,
                            110,
                            115,
                            101,
                            32,
                            97,
                            32,
                            115,
                            101,
                            99,
                            114,
                            101,
                            116,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            44,
                            32,
                            119,
                            104,
                            105,
                            99,
                            104,
                            32,
                            105,
                            115,
                            32,
                            117,
                            115,
                            101,
                            100,
                            32,
                            116,
                            111,
                            32,
                            105,
                            110,
                            105,
                            116,
                            105,
                            97,
                            108,
                            105,
                            122,
                            101,
                            32,
                            97,
                            32,
                            84,
                            79,
                            84,
                            80,
                            32,
                            97,
                            112,
                            112,
                            32,
                            111,
                            114,
                            32,
                            100,
                            101,
                            118,
                            105,
                            99,
                            101,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            33,
                            58,
                            1,
                            42,
                            34,
                            28,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            116,
                            111,
                            116,
                            112,
                        ]),
                    ],
                },
            },
        },
        verifyTOTPRegistration: {
            name: "VerifyTOTPRegistration",
            requestType: exports.VerifyTOTPRegistrationRequest,
            requestStream: false,
            responseType: exports.VerifyTOTPRegistrationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            102,
                            18,
                            34,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            97,
                            32,
                            84,
                            79,
                            84,
                            80,
                            32,
                            103,
                            101,
                            110,
                            101,
                            114,
                            97,
                            116,
                            111,
                            114,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            51,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            84,
                            79,
                            84,
                            80,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            97,
                            32,
                            103,
                            101,
                            110,
                            101,
                            114,
                            97,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            100,
                            101,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            40,
                            58,
                            1,
                            42,
                            34,
                            35,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            116,
                            111,
                            116,
                            112,
                            47,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        addOTPSMS: {
            name: "AddOTPSMS",
            requestType: exports.AddOTPSMSRequest,
            requestStream: false,
            responseType: exports.AddOTPSMSResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            129,
                            2,
                            18,
                            22,
                            65,
                            100,
                            100,
                            32,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            217,
                            1,
                            65,
                            100,
                            100,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            83,
                            77,
                            83,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            101,
                            110,
                            97,
                            98,
                            108,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            97,
                            32,
                            79,
                            84,
                            80,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            116,
                            101,
                            115,
                            116,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            116,
                            111,
                            32,
                            98,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            116,
                            111,
                            32,
                            97,
                            100,
                            100,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            36,
                            58,
                            1,
                            42,
                            34,
                            31,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            111,
                            116,
                            112,
                            95,
                            115,
                            109,
                            115,
                        ]),
                    ],
                },
            },
        },
        removeOTPSMS: {
            name: "RemoveOTPSMS",
            requestType: exports.RemoveOTPSMSRequest,
            requestStream: false,
            responseType: exports.RemoveOTPSMSResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            249,
                            1,
                            18,
                            46,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            83,
                            77,
                            83,
                            32,
                            102,
                            114,
                            111,
                            109,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            185,
                            1,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            101,
                            100,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            83,
                            77,
                            83,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            65,
                            115,
                            32,
                            111,
                            110,
                            108,
                            121,
                            32,
                            111,
                            110,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
                            112,
                            101,
                            114,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            105,
                            115,
                            32,
                            97,
                            108,
                            108,
                            111,
                            119,
                            101,
                            100,
                            44,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            110,
                            111,
                            116,
                            32,
                            104,
                            97,
                            118,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
                            97,
                            115,
                            32,
                            97,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            45,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            119,
                            97,
                            114,
                            100,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            33,
                            42,
                            31,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            111,
                            116,
                            112,
                            95,
                            115,
                            109,
                            115,
                        ]),
                    ],
                },
            },
        },
        addOTPEmail: {
            name: "AddOTPEmail",
            requestType: exports.AddOTPEmailRequest,
            requestStream: false,
            responseType: exports.AddOTPEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            249,
                            1,
                            18,
                            24,
                            65,
                            100,
                            100,
                            32,
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            207,
                            1,
                            65,
                            100,
                            100,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            101,
                            110,
                            97,
                            98,
                            108,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            97,
                            32,
                            79,
                            84,
                            80,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            116,
                            101,
                            115,
                            116,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            104,
                            97,
                            115,
                            32,
                            116,
                            111,
                            32,
                            98,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            116,
                            111,
                            32,
                            97,
                            100,
                            100,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            38,
                            58,
                            1,
                            42,
                            34,
                            33,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            111,
                            116,
                            112,
                            95,
                            101,
                            109,
                            97,
                            105,
                            108,
                        ]),
                    ],
                },
            },
        },
        removeOTPEmail: {
            name: "RemoveOTPEmail",
            requestType: exports.RemoveOTPEmailRequest,
            requestStream: false,
            responseType: exports.RemoveOTPEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            129,
                            2,
                            18,
                            48,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            102,
                            114,
                            111,
                            109,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            191,
                            1,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            101,
                            100,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            65,
                            115,
                            32,
                            111,
                            110,
                            108,
                            121,
                            32,
                            111,
                            110,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            112,
                            101,
                            114,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            105,
                            115,
                            32,
                            97,
                            108,
                            108,
                            111,
                            119,
                            101,
                            100,
                            44,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            110,
                            111,
                            116,
                            32,
                            104,
                            97,
                            118,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            115,
                            32,
                            97,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            45,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            119,
                            97,
                            114,
                            100,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            35,
                            42,
                            33,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            111,
                            116,
                            112,
                            95,
                            101,
                            109,
                            97,
                            105,
                            108,
                        ]),
                    ],
                },
            },
        },
        /** Start an IDP authentication (for external login, registration or linking) */
        startIdentityProviderIntent: {
            name: "StartIdentityProviderIntent",
            requestType: exports.StartIdentityProviderIntentRequest,
            requestStream: false,
            responseType: exports.StartIdentityProviderIntentResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            136,
                            1,
                            18,
                            36,
                            83,
                            116,
                            97,
                            114,
                            116,
                            32,
                            102,
                            108,
                            111,
                            119,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            97,
                            110,
                            32,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            26,
                            83,
                            83,
                            116,
                            97,
                            114,
                            116,
                            32,
                            97,
                            32,
                            102,
                            108,
                            111,
                            119,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            97,
                            110,
                            32,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            44,
                            32,
                            102,
                            111,
                            114,
                            32,
                            101,
                            120,
                            116,
                            101,
                            114,
                            110,
                            97,
                            108,
                            32,
                            108,
                            111,
                            103,
                            105,
                            110,
                            44,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            114,
                            32,
                            108,
                            105,
                            110,
                            107,
                            105,
                            110,
                            103,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            24,
                            58,
                            1,
                            42,
                            34,
                            19,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            105,
                            100,
                            112,
                            95,
                            105,
                            110,
                            116,
                            101,
                            110,
                            116,
                            115,
                        ]),
                    ],
                },
            },
        },
        retrieveIdentityProviderIntent: {
            name: "RetrieveIdentityProviderIntent",
            requestType: exports.RetrieveIdentityProviderIntentRequest,
            requestStream: false,
            responseType: exports.RetrieveIdentityProviderIntentResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            200,
                            1,
                            18,
                            58,
                            82,
                            101,
                            116,
                            114,
                            105,
                            101,
                            118,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            32,
                            98,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            26,
                            125,
                            82,
                            101,
                            116,
                            114,
                            105,
                            101,
                            118,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            32,
                            98,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            32,
                            102,
                            111,
                            114,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            114,
                            32,
                            117,
                            112,
                            100,
                            97,
                            116,
                            105,
                            110,
                            103,
                            32,
                            97,
                            110,
                            32,
                            101,
                            120,
                            105,
                            115,
                            116,
                            105,
                            110,
                            103,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            110,
                            101,
                            119,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            40,
                            58,
                            1,
                            42,
                            34,
                            35,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            105,
                            100,
                            112,
                            95,
                            105,
                            110,
                            116,
                            101,
                            110,
                            116,
                            115,
                            47,
                            123,
                            105,
                            100,
                            112,
                            95,
                            105,
                            110,
                            116,
                            101,
                            110,
                            116,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        /** Link an IDP to an existing user */
        addIDPLink: {
            name: "AddIDPLink",
            requestType: exports.AddIDPLinkRequest,
            requestStream: false,
            responseType: exports.AddIDPLinkResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            103,
                            18,
                            43,
                            65,
                            100,
                            100,
                            32,
                            108,
                            105,
                            110,
                            107,
                            32,
                            116,
                            111,
                            32,
                            97,
                            110,
                            32,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            97,
                            110,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            43,
                            65,
                            100,
                            100,
                            32,
                            108,
                            105,
                            110,
                            107,
                            32,
                            116,
                            111,
                            32,
                            97,
                            110,
                            32,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            97,
                            110,
                            32,
                            117,
                            115,
                            101,
                            114,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            58,
                            1,
                            42,
                            34,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            108,
                            105,
                            110,
                            107,
                            115,
                        ]),
                    ],
                },
            },
        },
        /** Request password reset */
        passwordReset: {
            name: "PasswordReset",
            requestType: exports.PasswordResetRequest,
            requestStream: false,
            responseType: exports.PasswordResetResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            85,
                            18,
                            34,
                            82,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            32,
                            97,
                            32,
                            99,
                            111,
                            100,
                            101,
                            32,
                            116,
                            111,
                            32,
                            114,
                            101,
                            115,
                            101,
                            116,
                            32,
                            97,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            26,
                            34,
                            82,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            32,
                            97,
                            32,
                            99,
                            111,
                            100,
                            101,
                            32,
                            116,
                            111,
                            32,
                            114,
                            101,
                            115,
                            101,
                            116,
                            32,
                            97,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            43,
                            58,
                            1,
                            42,
                            34,
                            38,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            95,
                            114,
                            101,
                            115,
                            101,
                            116,
                        ]),
                    ],
                },
            },
        },
        /** Change password */
        setPassword: {
            name: "SetPassword",
            requestType: exports.SetPasswordRequest,
            requestStream: false,
            responseType: exports.SetPasswordResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            118,
                            18,
                            15,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            26,
                            86,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            101,
                            105,
                            116,
                            104,
                            101,
                            114,
                            32,
                            97,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            99,
                            111,
                            100,
                            101,
                            32,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            117,
                            114,
                            114,
                            101,
                            110,
                            116,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            37,
                            58,
                            1,
                            42,
                            34,
                            32,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                        ]),
                    ],
                },
            },
        },
        /** List all possible authentication methods of a user */
        listAuthenticationMethodTypes: {
            name: "ListAuthenticationMethodTypes",
            requestType: exports.ListAuthenticationMethodTypesRequest,
            requestStream: false,
            responseType: exports.ListAuthenticationMethodTypesResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            162,
                            1,
                            18,
                            50,
                            76,
                            105,
                            115,
                            116,
                            32,
                            97,
                            108,
                            108,
                            32,
                            112,
                            111,
                            115,
                            115,
                            105,
                            98,
                            108,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            109,
                            101,
                            116,
                            104,
                            111,
                            100,
                            115,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            95,
                            76,
                            105,
                            115,
                            116,
                            32,
                            97,
                            108,
                            108,
                            32,
                            112,
                            111,
                            115,
                            115,
                            105,
                            98,
                            108,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            109,
                            101,
                            116,
                            104,
                            111,
                            100,
                            115,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            108,
                            105,
                            107,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            44,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            108,
                            101,
                            115,
                            115,
                            44,
                            32,
                            40,
                            84,
                            41,
                            79,
                            84,
                            80,
                            32,
                            97,
                            110,
                            100,
                            32,
                            109,
                            111,
                            114,
                            101,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            48,
                            18,
                            46,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            123,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                            47,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            95,
                            109,
                            101,
                            116,
                            104,
                            111,
                            100,
                            115,
                        ]),
                    ],
                },
            },
        },
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
