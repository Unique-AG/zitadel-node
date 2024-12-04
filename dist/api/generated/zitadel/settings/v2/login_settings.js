// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/settings/v2/login_settings.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Duration } from "../../../google/protobuf/duration.js";
import { resourceOwnerTypeFromJSON, resourceOwnerTypeToJSON } from "./settings.js";
export const protobufPackage = "zitadel.settings.v2";
export var SecondFactorType;
(function (SecondFactorType) {
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_UNSPECIFIED"] = 0] = "SECOND_FACTOR_TYPE_UNSPECIFIED";
    /** SECOND_FACTOR_TYPE_OTP - This is the type for TOTP */
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_OTP"] = 1] = "SECOND_FACTOR_TYPE_OTP";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_U2F"] = 2] = "SECOND_FACTOR_TYPE_U2F";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_OTP_EMAIL"] = 3] = "SECOND_FACTOR_TYPE_OTP_EMAIL";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_OTP_SMS"] = 4] = "SECOND_FACTOR_TYPE_OTP_SMS";
    SecondFactorType[SecondFactorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecondFactorType || (SecondFactorType = {}));
export function secondFactorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SECOND_FACTOR_TYPE_UNSPECIFIED":
            return SecondFactorType.SECOND_FACTOR_TYPE_UNSPECIFIED;
        case 1:
        case "SECOND_FACTOR_TYPE_OTP":
            return SecondFactorType.SECOND_FACTOR_TYPE_OTP;
        case 2:
        case "SECOND_FACTOR_TYPE_U2F":
            return SecondFactorType.SECOND_FACTOR_TYPE_U2F;
        case 3:
        case "SECOND_FACTOR_TYPE_OTP_EMAIL":
            return SecondFactorType.SECOND_FACTOR_TYPE_OTP_EMAIL;
        case 4:
        case "SECOND_FACTOR_TYPE_OTP_SMS":
            return SecondFactorType.SECOND_FACTOR_TYPE_OTP_SMS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecondFactorType.UNRECOGNIZED;
    }
}
export function secondFactorTypeToJSON(object) {
    switch (object) {
        case SecondFactorType.SECOND_FACTOR_TYPE_UNSPECIFIED:
            return "SECOND_FACTOR_TYPE_UNSPECIFIED";
        case SecondFactorType.SECOND_FACTOR_TYPE_OTP:
            return "SECOND_FACTOR_TYPE_OTP";
        case SecondFactorType.SECOND_FACTOR_TYPE_U2F:
            return "SECOND_FACTOR_TYPE_U2F";
        case SecondFactorType.SECOND_FACTOR_TYPE_OTP_EMAIL:
            return "SECOND_FACTOR_TYPE_OTP_EMAIL";
        case SecondFactorType.SECOND_FACTOR_TYPE_OTP_SMS:
            return "SECOND_FACTOR_TYPE_OTP_SMS";
        case SecondFactorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var MultiFactorType;
(function (MultiFactorType) {
    MultiFactorType[MultiFactorType["MULTI_FACTOR_TYPE_UNSPECIFIED"] = 0] = "MULTI_FACTOR_TYPE_UNSPECIFIED";
    MultiFactorType[MultiFactorType["MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION"] = 1] = "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION";
    MultiFactorType[MultiFactorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MultiFactorType || (MultiFactorType = {}));
export function multiFactorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "MULTI_FACTOR_TYPE_UNSPECIFIED":
            return MultiFactorType.MULTI_FACTOR_TYPE_UNSPECIFIED;
        case 1:
        case "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION":
            return MultiFactorType.MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MultiFactorType.UNRECOGNIZED;
    }
}
export function multiFactorTypeToJSON(object) {
    switch (object) {
        case MultiFactorType.MULTI_FACTOR_TYPE_UNSPECIFIED:
            return "MULTI_FACTOR_TYPE_UNSPECIFIED";
        case MultiFactorType.MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION:
            return "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION";
        case MultiFactorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var PasskeysType;
(function (PasskeysType) {
    PasskeysType[PasskeysType["PASSKEYS_TYPE_NOT_ALLOWED"] = 0] = "PASSKEYS_TYPE_NOT_ALLOWED";
    PasskeysType[PasskeysType["PASSKEYS_TYPE_ALLOWED"] = 1] = "PASSKEYS_TYPE_ALLOWED";
    PasskeysType[PasskeysType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PasskeysType || (PasskeysType = {}));
export function passkeysTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "PASSKEYS_TYPE_NOT_ALLOWED":
            return PasskeysType.PASSKEYS_TYPE_NOT_ALLOWED;
        case 1:
        case "PASSKEYS_TYPE_ALLOWED":
            return PasskeysType.PASSKEYS_TYPE_ALLOWED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PasskeysType.UNRECOGNIZED;
    }
}
export function passkeysTypeToJSON(object) {
    switch (object) {
        case PasskeysType.PASSKEYS_TYPE_NOT_ALLOWED:
            return "PASSKEYS_TYPE_NOT_ALLOWED";
        case PasskeysType.PASSKEYS_TYPE_ALLOWED:
            return "PASSKEYS_TYPE_ALLOWED";
        case PasskeysType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var IdentityProviderType;
(function (IdentityProviderType) {
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_UNSPECIFIED"] = 0] = "IDENTITY_PROVIDER_TYPE_UNSPECIFIED";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_OIDC"] = 1] = "IDENTITY_PROVIDER_TYPE_OIDC";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_JWT"] = 2] = "IDENTITY_PROVIDER_TYPE_JWT";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_LDAP"] = 3] = "IDENTITY_PROVIDER_TYPE_LDAP";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_OAUTH"] = 4] = "IDENTITY_PROVIDER_TYPE_OAUTH";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_AZURE_AD"] = 5] = "IDENTITY_PROVIDER_TYPE_AZURE_AD";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_GITHUB"] = 6] = "IDENTITY_PROVIDER_TYPE_GITHUB";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_GITHUB_ES"] = 7] = "IDENTITY_PROVIDER_TYPE_GITHUB_ES";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_GITLAB"] = 8] = "IDENTITY_PROVIDER_TYPE_GITLAB";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED"] = 9] = "IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_GOOGLE"] = 10] = "IDENTITY_PROVIDER_TYPE_GOOGLE";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_SAML"] = 11] = "IDENTITY_PROVIDER_TYPE_SAML";
    IdentityProviderType[IdentityProviderType["IDENTITY_PROVIDER_TYPE_APPLE"] = 12] = "IDENTITY_PROVIDER_TYPE_APPLE";
    IdentityProviderType[IdentityProviderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IdentityProviderType || (IdentityProviderType = {}));
export function identityProviderTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "IDENTITY_PROVIDER_TYPE_UNSPECIFIED":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_UNSPECIFIED;
        case 1:
        case "IDENTITY_PROVIDER_TYPE_OIDC":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_OIDC;
        case 2:
        case "IDENTITY_PROVIDER_TYPE_JWT":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_JWT;
        case 3:
        case "IDENTITY_PROVIDER_TYPE_LDAP":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_LDAP;
        case 4:
        case "IDENTITY_PROVIDER_TYPE_OAUTH":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_OAUTH;
        case 5:
        case "IDENTITY_PROVIDER_TYPE_AZURE_AD":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_AZURE_AD;
        case 6:
        case "IDENTITY_PROVIDER_TYPE_GITHUB":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_GITHUB;
        case 7:
        case "IDENTITY_PROVIDER_TYPE_GITHUB_ES":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_GITHUB_ES;
        case 8:
        case "IDENTITY_PROVIDER_TYPE_GITLAB":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_GITLAB;
        case 9:
        case "IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED;
        case 10:
        case "IDENTITY_PROVIDER_TYPE_GOOGLE":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_GOOGLE;
        case 11:
        case "IDENTITY_PROVIDER_TYPE_SAML":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_SAML;
        case 12:
        case "IDENTITY_PROVIDER_TYPE_APPLE":
            return IdentityProviderType.IDENTITY_PROVIDER_TYPE_APPLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IdentityProviderType.UNRECOGNIZED;
    }
}
export function identityProviderTypeToJSON(object) {
    switch (object) {
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_UNSPECIFIED:
            return "IDENTITY_PROVIDER_TYPE_UNSPECIFIED";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_OIDC:
            return "IDENTITY_PROVIDER_TYPE_OIDC";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_JWT:
            return "IDENTITY_PROVIDER_TYPE_JWT";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_LDAP:
            return "IDENTITY_PROVIDER_TYPE_LDAP";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_OAUTH:
            return "IDENTITY_PROVIDER_TYPE_OAUTH";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_AZURE_AD:
            return "IDENTITY_PROVIDER_TYPE_AZURE_AD";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_GITHUB:
            return "IDENTITY_PROVIDER_TYPE_GITHUB";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_GITHUB_ES:
            return "IDENTITY_PROVIDER_TYPE_GITHUB_ES";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_GITLAB:
            return "IDENTITY_PROVIDER_TYPE_GITLAB";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED:
            return "IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_GOOGLE:
            return "IDENTITY_PROVIDER_TYPE_GOOGLE";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_SAML:
            return "IDENTITY_PROVIDER_TYPE_SAML";
        case IdentityProviderType.IDENTITY_PROVIDER_TYPE_APPLE:
            return "IDENTITY_PROVIDER_TYPE_APPLE";
        case IdentityProviderType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseLoginSettings() {
    return {
        allowUsernamePassword: false,
        allowRegister: false,
        allowExternalIdp: false,
        forceMfa: false,
        passkeysType: 0,
        hidePasswordReset: false,
        ignoreUnknownUsernames: false,
        defaultRedirectUri: "",
        passwordCheckLifetime: undefined,
        externalLoginCheckLifetime: undefined,
        mfaInitSkipLifetime: undefined,
        secondFactorCheckLifetime: undefined,
        multiFactorCheckLifetime: undefined,
        secondFactors: [],
        multiFactors: [],
        allowDomainDiscovery: false,
        disableLoginWithEmail: false,
        disableLoginWithPhone: false,
        resourceOwnerType: 0,
        forceMfaLocalOnly: false,
    };
}
export const LoginSettings = {
    encode(message, writer = new BinaryWriter()) {
        if (message.allowUsernamePassword !== false) {
            writer.uint32(8).bool(message.allowUsernamePassword);
        }
        if (message.allowRegister !== false) {
            writer.uint32(16).bool(message.allowRegister);
        }
        if (message.allowExternalIdp !== false) {
            writer.uint32(24).bool(message.allowExternalIdp);
        }
        if (message.forceMfa !== false) {
            writer.uint32(32).bool(message.forceMfa);
        }
        if (message.passkeysType !== 0) {
            writer.uint32(40).int32(message.passkeysType);
        }
        if (message.hidePasswordReset !== false) {
            writer.uint32(48).bool(message.hidePasswordReset);
        }
        if (message.ignoreUnknownUsernames !== false) {
            writer.uint32(56).bool(message.ignoreUnknownUsernames);
        }
        if (message.defaultRedirectUri !== "") {
            writer.uint32(66).string(message.defaultRedirectUri);
        }
        if (message.passwordCheckLifetime !== undefined) {
            Duration.encode(message.passwordCheckLifetime, writer.uint32(74).fork()).join();
        }
        if (message.externalLoginCheckLifetime !== undefined) {
            Duration.encode(message.externalLoginCheckLifetime, writer.uint32(82).fork()).join();
        }
        if (message.mfaInitSkipLifetime !== undefined) {
            Duration.encode(message.mfaInitSkipLifetime, writer.uint32(90).fork()).join();
        }
        if (message.secondFactorCheckLifetime !== undefined) {
            Duration.encode(message.secondFactorCheckLifetime, writer.uint32(98).fork()).join();
        }
        if (message.multiFactorCheckLifetime !== undefined) {
            Duration.encode(message.multiFactorCheckLifetime, writer.uint32(106).fork()).join();
        }
        writer.uint32(114).fork();
        for (const v of message.secondFactors) {
            writer.int32(v);
        }
        writer.join();
        writer.uint32(122).fork();
        for (const v of message.multiFactors) {
            writer.int32(v);
        }
        writer.join();
        if (message.allowDomainDiscovery !== false) {
            writer.uint32(128).bool(message.allowDomainDiscovery);
        }
        if (message.disableLoginWithEmail !== false) {
            writer.uint32(136).bool(message.disableLoginWithEmail);
        }
        if (message.disableLoginWithPhone !== false) {
            writer.uint32(144).bool(message.disableLoginWithPhone);
        }
        if (message.resourceOwnerType !== 0) {
            writer.uint32(152).int32(message.resourceOwnerType);
        }
        if (message.forceMfaLocalOnly !== false) {
            writer.uint32(176).bool(message.forceMfaLocalOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.allowUsernamePassword = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.allowRegister = reader.bool();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.allowExternalIdp = reader.bool();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.forceMfa = reader.bool();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.passkeysType = reader.int32();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.hidePasswordReset = reader.bool();
                    continue;
                }
                case 7: {
                    if (tag !== 56) {
                        break;
                    }
                    message.ignoreUnknownUsernames = reader.bool();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.defaultRedirectUri = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.passwordCheckLifetime = Duration.decode(reader, reader.uint32());
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.externalLoginCheckLifetime = Duration.decode(reader, reader.uint32());
                    continue;
                }
                case 11: {
                    if (tag !== 90) {
                        break;
                    }
                    message.mfaInitSkipLifetime = Duration.decode(reader, reader.uint32());
                    continue;
                }
                case 12: {
                    if (tag !== 98) {
                        break;
                    }
                    message.secondFactorCheckLifetime = Duration.decode(reader, reader.uint32());
                    continue;
                }
                case 13: {
                    if (tag !== 106) {
                        break;
                    }
                    message.multiFactorCheckLifetime = Duration.decode(reader, reader.uint32());
                    continue;
                }
                case 14: {
                    if (tag === 112) {
                        message.secondFactors.push(reader.int32());
                        continue;
                    }
                    if (tag === 114) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.secondFactors.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                }
                case 15: {
                    if (tag === 120) {
                        message.multiFactors.push(reader.int32());
                        continue;
                    }
                    if (tag === 122) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.multiFactors.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                }
                case 16: {
                    if (tag !== 128) {
                        break;
                    }
                    message.allowDomainDiscovery = reader.bool();
                    continue;
                }
                case 17: {
                    if (tag !== 136) {
                        break;
                    }
                    message.disableLoginWithEmail = reader.bool();
                    continue;
                }
                case 18: {
                    if (tag !== 144) {
                        break;
                    }
                    message.disableLoginWithPhone = reader.bool();
                    continue;
                }
                case 19: {
                    if (tag !== 152) {
                        break;
                    }
                    message.resourceOwnerType = reader.int32();
                    continue;
                }
                case 22: {
                    if (tag !== 176) {
                        break;
                    }
                    message.forceMfaLocalOnly = reader.bool();
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
            allowUsernamePassword: isSet(object.allowUsernamePassword)
                ? globalThis.Boolean(object.allowUsernamePassword)
                : false,
            allowRegister: isSet(object.allowRegister) ? globalThis.Boolean(object.allowRegister) : false,
            allowExternalIdp: isSet(object.allowExternalIdp) ? globalThis.Boolean(object.allowExternalIdp) : false,
            forceMfa: isSet(object.forceMfa) ? globalThis.Boolean(object.forceMfa) : false,
            passkeysType: isSet(object.passkeysType) ? passkeysTypeFromJSON(object.passkeysType) : 0,
            hidePasswordReset: isSet(object.hidePasswordReset) ? globalThis.Boolean(object.hidePasswordReset) : false,
            ignoreUnknownUsernames: isSet(object.ignoreUnknownUsernames)
                ? globalThis.Boolean(object.ignoreUnknownUsernames)
                : false,
            defaultRedirectUri: isSet(object.defaultRedirectUri) ? globalThis.String(object.defaultRedirectUri) : "",
            passwordCheckLifetime: isSet(object.passwordCheckLifetime)
                ? Duration.fromJSON(object.passwordCheckLifetime)
                : undefined,
            externalLoginCheckLifetime: isSet(object.externalLoginCheckLifetime)
                ? Duration.fromJSON(object.externalLoginCheckLifetime)
                : undefined,
            mfaInitSkipLifetime: isSet(object.mfaInitSkipLifetime)
                ? Duration.fromJSON(object.mfaInitSkipLifetime)
                : undefined,
            secondFactorCheckLifetime: isSet(object.secondFactorCheckLifetime)
                ? Duration.fromJSON(object.secondFactorCheckLifetime)
                : undefined,
            multiFactorCheckLifetime: isSet(object.multiFactorCheckLifetime)
                ? Duration.fromJSON(object.multiFactorCheckLifetime)
                : undefined,
            secondFactors: globalThis.Array.isArray(object?.secondFactors)
                ? object.secondFactors.map((e) => secondFactorTypeFromJSON(e))
                : [],
            multiFactors: globalThis.Array.isArray(object?.multiFactors)
                ? object.multiFactors.map((e) => multiFactorTypeFromJSON(e))
                : [],
            allowDomainDiscovery: isSet(object.allowDomainDiscovery)
                ? globalThis.Boolean(object.allowDomainDiscovery)
                : false,
            disableLoginWithEmail: isSet(object.disableLoginWithEmail)
                ? globalThis.Boolean(object.disableLoginWithEmail)
                : false,
            disableLoginWithPhone: isSet(object.disableLoginWithPhone)
                ? globalThis.Boolean(object.disableLoginWithPhone)
                : false,
            resourceOwnerType: isSet(object.resourceOwnerType) ? resourceOwnerTypeFromJSON(object.resourceOwnerType) : 0,
            forceMfaLocalOnly: isSet(object.forceMfaLocalOnly) ? globalThis.Boolean(object.forceMfaLocalOnly) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowUsernamePassword !== false) {
            obj.allowUsernamePassword = message.allowUsernamePassword;
        }
        if (message.allowRegister !== false) {
            obj.allowRegister = message.allowRegister;
        }
        if (message.allowExternalIdp !== false) {
            obj.allowExternalIdp = message.allowExternalIdp;
        }
        if (message.forceMfa !== false) {
            obj.forceMfa = message.forceMfa;
        }
        if (message.passkeysType !== 0) {
            obj.passkeysType = passkeysTypeToJSON(message.passkeysType);
        }
        if (message.hidePasswordReset !== false) {
            obj.hidePasswordReset = message.hidePasswordReset;
        }
        if (message.ignoreUnknownUsernames !== false) {
            obj.ignoreUnknownUsernames = message.ignoreUnknownUsernames;
        }
        if (message.defaultRedirectUri !== "") {
            obj.defaultRedirectUri = message.defaultRedirectUri;
        }
        if (message.passwordCheckLifetime !== undefined) {
            obj.passwordCheckLifetime = Duration.toJSON(message.passwordCheckLifetime);
        }
        if (message.externalLoginCheckLifetime !== undefined) {
            obj.externalLoginCheckLifetime = Duration.toJSON(message.externalLoginCheckLifetime);
        }
        if (message.mfaInitSkipLifetime !== undefined) {
            obj.mfaInitSkipLifetime = Duration.toJSON(message.mfaInitSkipLifetime);
        }
        if (message.secondFactorCheckLifetime !== undefined) {
            obj.secondFactorCheckLifetime = Duration.toJSON(message.secondFactorCheckLifetime);
        }
        if (message.multiFactorCheckLifetime !== undefined) {
            obj.multiFactorCheckLifetime = Duration.toJSON(message.multiFactorCheckLifetime);
        }
        if (message.secondFactors?.length) {
            obj.secondFactors = message.secondFactors.map((e) => secondFactorTypeToJSON(e));
        }
        if (message.multiFactors?.length) {
            obj.multiFactors = message.multiFactors.map((e) => multiFactorTypeToJSON(e));
        }
        if (message.allowDomainDiscovery !== false) {
            obj.allowDomainDiscovery = message.allowDomainDiscovery;
        }
        if (message.disableLoginWithEmail !== false) {
            obj.disableLoginWithEmail = message.disableLoginWithEmail;
        }
        if (message.disableLoginWithPhone !== false) {
            obj.disableLoginWithPhone = message.disableLoginWithPhone;
        }
        if (message.resourceOwnerType !== 0) {
            obj.resourceOwnerType = resourceOwnerTypeToJSON(message.resourceOwnerType);
        }
        if (message.forceMfaLocalOnly !== false) {
            obj.forceMfaLocalOnly = message.forceMfaLocalOnly;
        }
        return obj;
    },
    create(base) {
        return LoginSettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginSettings();
        message.allowUsernamePassword = object.allowUsernamePassword ?? false;
        message.allowRegister = object.allowRegister ?? false;
        message.allowExternalIdp = object.allowExternalIdp ?? false;
        message.forceMfa = object.forceMfa ?? false;
        message.passkeysType = object.passkeysType ?? 0;
        message.hidePasswordReset = object.hidePasswordReset ?? false;
        message.ignoreUnknownUsernames = object.ignoreUnknownUsernames ?? false;
        message.defaultRedirectUri = object.defaultRedirectUri ?? "";
        message.passwordCheckLifetime =
            (object.passwordCheckLifetime !== undefined && object.passwordCheckLifetime !== null)
                ? Duration.fromPartial(object.passwordCheckLifetime)
                : undefined;
        message.externalLoginCheckLifetime =
            (object.externalLoginCheckLifetime !== undefined && object.externalLoginCheckLifetime !== null)
                ? Duration.fromPartial(object.externalLoginCheckLifetime)
                : undefined;
        message.mfaInitSkipLifetime = (object.mfaInitSkipLifetime !== undefined && object.mfaInitSkipLifetime !== null)
            ? Duration.fromPartial(object.mfaInitSkipLifetime)
            : undefined;
        message.secondFactorCheckLifetime =
            (object.secondFactorCheckLifetime !== undefined && object.secondFactorCheckLifetime !== null)
                ? Duration.fromPartial(object.secondFactorCheckLifetime)
                : undefined;
        message.multiFactorCheckLifetime =
            (object.multiFactorCheckLifetime !== undefined && object.multiFactorCheckLifetime !== null)
                ? Duration.fromPartial(object.multiFactorCheckLifetime)
                : undefined;
        message.secondFactors = object.secondFactors?.map((e) => e) || [];
        message.multiFactors = object.multiFactors?.map((e) => e) || [];
        message.allowDomainDiscovery = object.allowDomainDiscovery ?? false;
        message.disableLoginWithEmail = object.disableLoginWithEmail ?? false;
        message.disableLoginWithPhone = object.disableLoginWithPhone ?? false;
        message.resourceOwnerType = object.resourceOwnerType ?? 0;
        message.forceMfaLocalOnly = object.forceMfaLocalOnly ?? false;
        return message;
    },
};
function createBaseIdentityProvider() {
    return { id: "", name: "", type: 0 };
}
export const IdentityProvider = {
    encode(message, writer = new BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentityProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.type = reader.int32();
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            type: isSet(object.type) ? identityProviderTypeFromJSON(object.type) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.type !== 0) {
            obj.type = identityProviderTypeToJSON(message.type);
        }
        return obj;
    },
    create(base) {
        return IdentityProvider.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIdentityProvider();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.type = object.type ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
