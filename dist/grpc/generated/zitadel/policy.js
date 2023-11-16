"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPolicy = exports.PrivacyPolicy = exports.LockoutPolicy = exports.PasswordAgePolicy = exports.PasswordComplexityPolicy = exports.LoginPolicy = exports.LabelPolicy = exports.DomainPolicy = exports.OrgIAMPolicy = exports.passwordlessTypeToJSON = exports.passwordlessTypeFromJSON = exports.PasswordlessType = exports.multiFactorTypeToJSON = exports.multiFactorTypeFromJSON = exports.MultiFactorType = exports.secondFactorTypeToJSON = exports.secondFactorTypeFromJSON = exports.SecondFactorType = exports.themeModeToJSON = exports.themeModeFromJSON = exports.ThemeMode = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../google/protobuf/duration");
const idp_1 = require("./idp");
const object_1 = require("./object");
exports.protobufPackage = "zitadel.policy.v1";
var ThemeMode;
(function (ThemeMode) {
    ThemeMode[ThemeMode["THEME_MODE_UNSPECIFIED"] = 0] = "THEME_MODE_UNSPECIFIED";
    ThemeMode[ThemeMode["THEME_MODE_AUTO"] = 1] = "THEME_MODE_AUTO";
    ThemeMode[ThemeMode["THEME_MODE_DARK"] = 2] = "THEME_MODE_DARK";
    ThemeMode[ThemeMode["THEME_MODE_LIGHT"] = 3] = "THEME_MODE_LIGHT";
    ThemeMode[ThemeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ThemeMode || (exports.ThemeMode = ThemeMode = {}));
function themeModeFromJSON(object) {
    switch (object) {
        case 0:
        case "THEME_MODE_UNSPECIFIED":
            return ThemeMode.THEME_MODE_UNSPECIFIED;
        case 1:
        case "THEME_MODE_AUTO":
            return ThemeMode.THEME_MODE_AUTO;
        case 2:
        case "THEME_MODE_DARK":
            return ThemeMode.THEME_MODE_DARK;
        case 3:
        case "THEME_MODE_LIGHT":
            return ThemeMode.THEME_MODE_LIGHT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ThemeMode.UNRECOGNIZED;
    }
}
exports.themeModeFromJSON = themeModeFromJSON;
function themeModeToJSON(object) {
    switch (object) {
        case ThemeMode.THEME_MODE_UNSPECIFIED:
            return "THEME_MODE_UNSPECIFIED";
        case ThemeMode.THEME_MODE_AUTO:
            return "THEME_MODE_AUTO";
        case ThemeMode.THEME_MODE_DARK:
            return "THEME_MODE_DARK";
        case ThemeMode.THEME_MODE_LIGHT:
            return "THEME_MODE_LIGHT";
        case ThemeMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.themeModeToJSON = themeModeToJSON;
var SecondFactorType;
(function (SecondFactorType) {
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_UNSPECIFIED"] = 0] = "SECOND_FACTOR_TYPE_UNSPECIFIED";
    /** SECOND_FACTOR_TYPE_OTP - SECOND_FACTOR_TYPE_OTP is the type for TOTP */
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_OTP"] = 1] = "SECOND_FACTOR_TYPE_OTP";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_U2F"] = 2] = "SECOND_FACTOR_TYPE_U2F";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_OTP_EMAIL"] = 3] = "SECOND_FACTOR_TYPE_OTP_EMAIL";
    SecondFactorType[SecondFactorType["SECOND_FACTOR_TYPE_OTP_SMS"] = 4] = "SECOND_FACTOR_TYPE_OTP_SMS";
    SecondFactorType[SecondFactorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecondFactorType || (exports.SecondFactorType = SecondFactorType = {}));
function secondFactorTypeFromJSON(object) {
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
exports.secondFactorTypeFromJSON = secondFactorTypeFromJSON;
function secondFactorTypeToJSON(object) {
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
exports.secondFactorTypeToJSON = secondFactorTypeToJSON;
var MultiFactorType;
(function (MultiFactorType) {
    MultiFactorType[MultiFactorType["MULTI_FACTOR_TYPE_UNSPECIFIED"] = 0] = "MULTI_FACTOR_TYPE_UNSPECIFIED";
    MultiFactorType[MultiFactorType["MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION"] = 1] = "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION";
    MultiFactorType[MultiFactorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MultiFactorType || (exports.MultiFactorType = MultiFactorType = {}));
function multiFactorTypeFromJSON(object) {
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
exports.multiFactorTypeFromJSON = multiFactorTypeFromJSON;
function multiFactorTypeToJSON(object) {
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
exports.multiFactorTypeToJSON = multiFactorTypeToJSON;
var PasswordlessType;
(function (PasswordlessType) {
    PasswordlessType[PasswordlessType["PASSWORDLESS_TYPE_NOT_ALLOWED"] = 0] = "PASSWORDLESS_TYPE_NOT_ALLOWED";
    /** PASSWORDLESS_TYPE_ALLOWED - PLANNED: PASSWORDLESS_TYPE_WITH_CERT */
    PasswordlessType[PasswordlessType["PASSWORDLESS_TYPE_ALLOWED"] = 1] = "PASSWORDLESS_TYPE_ALLOWED";
    PasswordlessType[PasswordlessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PasswordlessType || (exports.PasswordlessType = PasswordlessType = {}));
function passwordlessTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "PASSWORDLESS_TYPE_NOT_ALLOWED":
            return PasswordlessType.PASSWORDLESS_TYPE_NOT_ALLOWED;
        case 1:
        case "PASSWORDLESS_TYPE_ALLOWED":
            return PasswordlessType.PASSWORDLESS_TYPE_ALLOWED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PasswordlessType.UNRECOGNIZED;
    }
}
exports.passwordlessTypeFromJSON = passwordlessTypeFromJSON;
function passwordlessTypeToJSON(object) {
    switch (object) {
        case PasswordlessType.PASSWORDLESS_TYPE_NOT_ALLOWED:
            return "PASSWORDLESS_TYPE_NOT_ALLOWED";
        case PasswordlessType.PASSWORDLESS_TYPE_ALLOWED:
            return "PASSWORDLESS_TYPE_ALLOWED";
        case PasswordlessType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.passwordlessTypeToJSON = passwordlessTypeToJSON;
function createBaseOrgIAMPolicy() {
    return { details: undefined, userLoginMustBeDomain: false, isDefault: false };
}
exports.OrgIAMPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.userLoginMustBeDomain === true) {
            writer.uint32(16).bool(message.userLoginMustBeDomain);
        }
        if (message.isDefault === true) {
            writer.uint32(24).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrgIAMPolicy();
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
                    message.userLoginMustBeDomain = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isDefault = reader.bool();
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
            userLoginMustBeDomain: isSet(object.userLoginMustBeDomain) ? Boolean(object.userLoginMustBeDomain) : false,
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.userLoginMustBeDomain !== undefined && (obj.userLoginMustBeDomain = message.userLoginMustBeDomain);
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        return obj;
    },
    create(base) {
        return exports.OrgIAMPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrgIAMPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.userLoginMustBeDomain = object.userLoginMustBeDomain ?? false;
        message.isDefault = object.isDefault ?? false;
        return message;
    },
};
function createBaseDomainPolicy() {
    return {
        details: undefined,
        userLoginMustBeDomain: false,
        isDefault: false,
        validateOrgDomains: false,
        smtpSenderAddressMatchesInstanceDomain: false,
    };
}
exports.DomainPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.userLoginMustBeDomain === true) {
            writer.uint32(16).bool(message.userLoginMustBeDomain);
        }
        if (message.isDefault === true) {
            writer.uint32(24).bool(message.isDefault);
        }
        if (message.validateOrgDomains === true) {
            writer.uint32(32).bool(message.validateOrgDomains);
        }
        if (message.smtpSenderAddressMatchesInstanceDomain === true) {
            writer.uint32(40).bool(message.smtpSenderAddressMatchesInstanceDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomainPolicy();
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
                    message.userLoginMustBeDomain = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.validateOrgDomains = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.smtpSenderAddressMatchesInstanceDomain = reader.bool();
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
            userLoginMustBeDomain: isSet(object.userLoginMustBeDomain) ? Boolean(object.userLoginMustBeDomain) : false,
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
            validateOrgDomains: isSet(object.validateOrgDomains) ? Boolean(object.validateOrgDomains) : false,
            smtpSenderAddressMatchesInstanceDomain: isSet(object.smtpSenderAddressMatchesInstanceDomain)
                ? Boolean(object.smtpSenderAddressMatchesInstanceDomain)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.userLoginMustBeDomain !== undefined && (obj.userLoginMustBeDomain = message.userLoginMustBeDomain);
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        message.validateOrgDomains !== undefined && (obj.validateOrgDomains = message.validateOrgDomains);
        message.smtpSenderAddressMatchesInstanceDomain !== undefined &&
            (obj.smtpSenderAddressMatchesInstanceDomain = message.smtpSenderAddressMatchesInstanceDomain);
        return obj;
    },
    create(base) {
        return exports.DomainPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomainPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.userLoginMustBeDomain = object.userLoginMustBeDomain ?? false;
        message.isDefault = object.isDefault ?? false;
        message.validateOrgDomains = object.validateOrgDomains ?? false;
        message.smtpSenderAddressMatchesInstanceDomain = object.smtpSenderAddressMatchesInstanceDomain ?? false;
        return message;
    },
};
function createBaseLabelPolicy() {
    return {
        details: undefined,
        primaryColor: "",
        isDefault: false,
        hideLoginNameSuffix: false,
        warnColor: "",
        backgroundColor: "",
        fontColor: "",
        primaryColorDark: "",
        backgroundColorDark: "",
        warnColorDark: "",
        fontColorDark: "",
        disableWatermark: false,
        logoUrl: "",
        iconUrl: "",
        logoUrlDark: "",
        iconUrlDark: "",
        fontUrl: "",
        themeMode: 0,
    };
}
exports.LabelPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.primaryColor !== "") {
            writer.uint32(18).string(message.primaryColor);
        }
        if (message.isDefault === true) {
            writer.uint32(32).bool(message.isDefault);
        }
        if (message.hideLoginNameSuffix === true) {
            writer.uint32(40).bool(message.hideLoginNameSuffix);
        }
        if (message.warnColor !== "") {
            writer.uint32(50).string(message.warnColor);
        }
        if (message.backgroundColor !== "") {
            writer.uint32(58).string(message.backgroundColor);
        }
        if (message.fontColor !== "") {
            writer.uint32(66).string(message.fontColor);
        }
        if (message.primaryColorDark !== "") {
            writer.uint32(74).string(message.primaryColorDark);
        }
        if (message.backgroundColorDark !== "") {
            writer.uint32(82).string(message.backgroundColorDark);
        }
        if (message.warnColorDark !== "") {
            writer.uint32(90).string(message.warnColorDark);
        }
        if (message.fontColorDark !== "") {
            writer.uint32(98).string(message.fontColorDark);
        }
        if (message.disableWatermark === true) {
            writer.uint32(104).bool(message.disableWatermark);
        }
        if (message.logoUrl !== "") {
            writer.uint32(114).string(message.logoUrl);
        }
        if (message.iconUrl !== "") {
            writer.uint32(122).string(message.iconUrl);
        }
        if (message.logoUrlDark !== "") {
            writer.uint32(130).string(message.logoUrlDark);
        }
        if (message.iconUrlDark !== "") {
            writer.uint32(138).string(message.iconUrlDark);
        }
        if (message.fontUrl !== "") {
            writer.uint32(146).string(message.fontUrl);
        }
        if (message.themeMode !== 0) {
            writer.uint32(152).int32(message.themeMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLabelPolicy();
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
                    message.primaryColor = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.hideLoginNameSuffix = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.warnColor = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.backgroundColor = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.fontColor = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.primaryColorDark = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.backgroundColorDark = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.warnColorDark = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.fontColorDark = reader.string();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.disableWatermark = reader.bool();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.logoUrl = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.iconUrl = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.logoUrlDark = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.iconUrlDark = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.fontUrl = reader.string();
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }
                    message.themeMode = reader.int32();
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
            primaryColor: isSet(object.primaryColor) ? String(object.primaryColor) : "",
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
            hideLoginNameSuffix: isSet(object.hideLoginNameSuffix) ? Boolean(object.hideLoginNameSuffix) : false,
            warnColor: isSet(object.warnColor) ? String(object.warnColor) : "",
            backgroundColor: isSet(object.backgroundColor) ? String(object.backgroundColor) : "",
            fontColor: isSet(object.fontColor) ? String(object.fontColor) : "",
            primaryColorDark: isSet(object.primaryColorDark) ? String(object.primaryColorDark) : "",
            backgroundColorDark: isSet(object.backgroundColorDark) ? String(object.backgroundColorDark) : "",
            warnColorDark: isSet(object.warnColorDark) ? String(object.warnColorDark) : "",
            fontColorDark: isSet(object.fontColorDark) ? String(object.fontColorDark) : "",
            disableWatermark: isSet(object.disableWatermark) ? Boolean(object.disableWatermark) : false,
            logoUrl: isSet(object.logoUrl) ? String(object.logoUrl) : "",
            iconUrl: isSet(object.iconUrl) ? String(object.iconUrl) : "",
            logoUrlDark: isSet(object.logoUrlDark) ? String(object.logoUrlDark) : "",
            iconUrlDark: isSet(object.iconUrlDark) ? String(object.iconUrlDark) : "",
            fontUrl: isSet(object.fontUrl) ? String(object.fontUrl) : "",
            themeMode: isSet(object.themeMode) ? themeModeFromJSON(object.themeMode) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.primaryColor !== undefined && (obj.primaryColor = message.primaryColor);
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        message.hideLoginNameSuffix !== undefined && (obj.hideLoginNameSuffix = message.hideLoginNameSuffix);
        message.warnColor !== undefined && (obj.warnColor = message.warnColor);
        message.backgroundColor !== undefined && (obj.backgroundColor = message.backgroundColor);
        message.fontColor !== undefined && (obj.fontColor = message.fontColor);
        message.primaryColorDark !== undefined && (obj.primaryColorDark = message.primaryColorDark);
        message.backgroundColorDark !== undefined && (obj.backgroundColorDark = message.backgroundColorDark);
        message.warnColorDark !== undefined && (obj.warnColorDark = message.warnColorDark);
        message.fontColorDark !== undefined && (obj.fontColorDark = message.fontColorDark);
        message.disableWatermark !== undefined && (obj.disableWatermark = message.disableWatermark);
        message.logoUrl !== undefined && (obj.logoUrl = message.logoUrl);
        message.iconUrl !== undefined && (obj.iconUrl = message.iconUrl);
        message.logoUrlDark !== undefined && (obj.logoUrlDark = message.logoUrlDark);
        message.iconUrlDark !== undefined && (obj.iconUrlDark = message.iconUrlDark);
        message.fontUrl !== undefined && (obj.fontUrl = message.fontUrl);
        message.themeMode !== undefined && (obj.themeMode = themeModeToJSON(message.themeMode));
        return obj;
    },
    create(base) {
        return exports.LabelPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLabelPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.primaryColor = object.primaryColor ?? "";
        message.isDefault = object.isDefault ?? false;
        message.hideLoginNameSuffix = object.hideLoginNameSuffix ?? false;
        message.warnColor = object.warnColor ?? "";
        message.backgroundColor = object.backgroundColor ?? "";
        message.fontColor = object.fontColor ?? "";
        message.primaryColorDark = object.primaryColorDark ?? "";
        message.backgroundColorDark = object.backgroundColorDark ?? "";
        message.warnColorDark = object.warnColorDark ?? "";
        message.fontColorDark = object.fontColorDark ?? "";
        message.disableWatermark = object.disableWatermark ?? false;
        message.logoUrl = object.logoUrl ?? "";
        message.iconUrl = object.iconUrl ?? "";
        message.logoUrlDark = object.logoUrlDark ?? "";
        message.iconUrlDark = object.iconUrlDark ?? "";
        message.fontUrl = object.fontUrl ?? "";
        message.themeMode = object.themeMode ?? 0;
        return message;
    },
};
function createBaseLoginPolicy() {
    return {
        details: undefined,
        allowUsernamePassword: false,
        allowRegister: false,
        allowExternalIdp: false,
        forceMfa: false,
        passwordlessType: 0,
        isDefault: false,
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
        idps: [],
        allowDomainDiscovery: false,
        disableLoginWithEmail: false,
        disableLoginWithPhone: false,
        forceMfaLocalOnly: false,
    };
}
exports.LoginPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.allowUsernamePassword === true) {
            writer.uint32(16).bool(message.allowUsernamePassword);
        }
        if (message.allowRegister === true) {
            writer.uint32(24).bool(message.allowRegister);
        }
        if (message.allowExternalIdp === true) {
            writer.uint32(32).bool(message.allowExternalIdp);
        }
        if (message.forceMfa === true) {
            writer.uint32(40).bool(message.forceMfa);
        }
        if (message.passwordlessType !== 0) {
            writer.uint32(48).int32(message.passwordlessType);
        }
        if (message.isDefault === true) {
            writer.uint32(56).bool(message.isDefault);
        }
        if (message.hidePasswordReset === true) {
            writer.uint32(64).bool(message.hidePasswordReset);
        }
        if (message.ignoreUnknownUsernames === true) {
            writer.uint32(72).bool(message.ignoreUnknownUsernames);
        }
        if (message.defaultRedirectUri !== "") {
            writer.uint32(82).string(message.defaultRedirectUri);
        }
        if (message.passwordCheckLifetime !== undefined) {
            duration_1.Duration.encode(message.passwordCheckLifetime, writer.uint32(90).fork()).ldelim();
        }
        if (message.externalLoginCheckLifetime !== undefined) {
            duration_1.Duration.encode(message.externalLoginCheckLifetime, writer.uint32(98).fork()).ldelim();
        }
        if (message.mfaInitSkipLifetime !== undefined) {
            duration_1.Duration.encode(message.mfaInitSkipLifetime, writer.uint32(106).fork()).ldelim();
        }
        if (message.secondFactorCheckLifetime !== undefined) {
            duration_1.Duration.encode(message.secondFactorCheckLifetime, writer.uint32(114).fork()).ldelim();
        }
        if (message.multiFactorCheckLifetime !== undefined) {
            duration_1.Duration.encode(message.multiFactorCheckLifetime, writer.uint32(122).fork()).ldelim();
        }
        writer.uint32(130).fork();
        for (const v of message.secondFactors) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(138).fork();
        for (const v of message.multiFactors) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.idps) {
            idp_1.IDPLoginPolicyLink.encode(v, writer.uint32(146).fork()).ldelim();
        }
        if (message.allowDomainDiscovery === true) {
            writer.uint32(152).bool(message.allowDomainDiscovery);
        }
        if (message.disableLoginWithEmail === true) {
            writer.uint32(160).bool(message.disableLoginWithEmail);
        }
        if (message.disableLoginWithPhone === true) {
            writer.uint32(168).bool(message.disableLoginWithPhone);
        }
        if (message.forceMfaLocalOnly === true) {
            writer.uint32(176).bool(message.forceMfaLocalOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginPolicy();
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
                    message.allowUsernamePassword = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.allowRegister = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.allowExternalIdp = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.forceMfa = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.passwordlessType = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.hidePasswordReset = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.ignoreUnknownUsernames = reader.bool();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.defaultRedirectUri = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.passwordCheckLifetime = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.externalLoginCheckLifetime = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.mfaInitSkipLifetime = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.secondFactorCheckLifetime = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.multiFactorCheckLifetime = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag === 128) {
                        message.secondFactors.push(reader.int32());
                        continue;
                    }
                    if (tag === 130) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.secondFactors.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 17:
                    if (tag === 136) {
                        message.multiFactors.push(reader.int32());
                        continue;
                    }
                    if (tag === 138) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.multiFactors.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.idps.push(idp_1.IDPLoginPolicyLink.decode(reader, reader.uint32()));
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }
                    message.allowDomainDiscovery = reader.bool();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.disableLoginWithEmail = reader.bool();
                    continue;
                case 21:
                    if (tag !== 168) {
                        break;
                    }
                    message.disableLoginWithPhone = reader.bool();
                    continue;
                case 22:
                    if (tag !== 176) {
                        break;
                    }
                    message.forceMfaLocalOnly = reader.bool();
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
            allowUsernamePassword: isSet(object.allowUsernamePassword) ? Boolean(object.allowUsernamePassword) : false,
            allowRegister: isSet(object.allowRegister) ? Boolean(object.allowRegister) : false,
            allowExternalIdp: isSet(object.allowExternalIdp) ? Boolean(object.allowExternalIdp) : false,
            forceMfa: isSet(object.forceMfa) ? Boolean(object.forceMfa) : false,
            passwordlessType: isSet(object.passwordlessType) ? passwordlessTypeFromJSON(object.passwordlessType) : 0,
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
            hidePasswordReset: isSet(object.hidePasswordReset) ? Boolean(object.hidePasswordReset) : false,
            ignoreUnknownUsernames: isSet(object.ignoreUnknownUsernames) ? Boolean(object.ignoreUnknownUsernames) : false,
            defaultRedirectUri: isSet(object.defaultRedirectUri) ? String(object.defaultRedirectUri) : "",
            passwordCheckLifetime: isSet(object.passwordCheckLifetime)
                ? duration_1.Duration.fromJSON(object.passwordCheckLifetime)
                : undefined,
            externalLoginCheckLifetime: isSet(object.externalLoginCheckLifetime)
                ? duration_1.Duration.fromJSON(object.externalLoginCheckLifetime)
                : undefined,
            mfaInitSkipLifetime: isSet(object.mfaInitSkipLifetime)
                ? duration_1.Duration.fromJSON(object.mfaInitSkipLifetime)
                : undefined,
            secondFactorCheckLifetime: isSet(object.secondFactorCheckLifetime)
                ? duration_1.Duration.fromJSON(object.secondFactorCheckLifetime)
                : undefined,
            multiFactorCheckLifetime: isSet(object.multiFactorCheckLifetime)
                ? duration_1.Duration.fromJSON(object.multiFactorCheckLifetime)
                : undefined,
            secondFactors: Array.isArray(object?.secondFactors)
                ? object.secondFactors.map((e) => secondFactorTypeFromJSON(e))
                : [],
            multiFactors: Array.isArray(object?.multiFactors)
                ? object.multiFactors.map((e) => multiFactorTypeFromJSON(e))
                : [],
            idps: Array.isArray(object?.idps) ? object.idps.map((e) => idp_1.IDPLoginPolicyLink.fromJSON(e)) : [],
            allowDomainDiscovery: isSet(object.allowDomainDiscovery) ? Boolean(object.allowDomainDiscovery) : false,
            disableLoginWithEmail: isSet(object.disableLoginWithEmail) ? Boolean(object.disableLoginWithEmail) : false,
            disableLoginWithPhone: isSet(object.disableLoginWithPhone) ? Boolean(object.disableLoginWithPhone) : false,
            forceMfaLocalOnly: isSet(object.forceMfaLocalOnly) ? Boolean(object.forceMfaLocalOnly) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.allowUsernamePassword !== undefined && (obj.allowUsernamePassword = message.allowUsernamePassword);
        message.allowRegister !== undefined && (obj.allowRegister = message.allowRegister);
        message.allowExternalIdp !== undefined && (obj.allowExternalIdp = message.allowExternalIdp);
        message.forceMfa !== undefined && (obj.forceMfa = message.forceMfa);
        message.passwordlessType !== undefined && (obj.passwordlessType = passwordlessTypeToJSON(message.passwordlessType));
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        message.hidePasswordReset !== undefined && (obj.hidePasswordReset = message.hidePasswordReset);
        message.ignoreUnknownUsernames !== undefined && (obj.ignoreUnknownUsernames = message.ignoreUnknownUsernames);
        message.defaultRedirectUri !== undefined && (obj.defaultRedirectUri = message.defaultRedirectUri);
        message.passwordCheckLifetime !== undefined && (obj.passwordCheckLifetime = message.passwordCheckLifetime
            ? duration_1.Duration.toJSON(message.passwordCheckLifetime)
            : undefined);
        message.externalLoginCheckLifetime !== undefined &&
            (obj.externalLoginCheckLifetime = message.externalLoginCheckLifetime
                ? duration_1.Duration.toJSON(message.externalLoginCheckLifetime)
                : undefined);
        message.mfaInitSkipLifetime !== undefined &&
            (obj.mfaInitSkipLifetime = message.mfaInitSkipLifetime
                ? duration_1.Duration.toJSON(message.mfaInitSkipLifetime)
                : undefined);
        message.secondFactorCheckLifetime !== undefined &&
            (obj.secondFactorCheckLifetime = message.secondFactorCheckLifetime
                ? duration_1.Duration.toJSON(message.secondFactorCheckLifetime)
                : undefined);
        message.multiFactorCheckLifetime !== undefined && (obj.multiFactorCheckLifetime = message.multiFactorCheckLifetime
            ? duration_1.Duration.toJSON(message.multiFactorCheckLifetime)
            : undefined);
        if (message.secondFactors) {
            obj.secondFactors = message.secondFactors.map((e) => secondFactorTypeToJSON(e));
        }
        else {
            obj.secondFactors = [];
        }
        if (message.multiFactors) {
            obj.multiFactors = message.multiFactors.map((e) => multiFactorTypeToJSON(e));
        }
        else {
            obj.multiFactors = [];
        }
        if (message.idps) {
            obj.idps = message.idps.map((e) => e ? idp_1.IDPLoginPolicyLink.toJSON(e) : undefined);
        }
        else {
            obj.idps = [];
        }
        message.allowDomainDiscovery !== undefined && (obj.allowDomainDiscovery = message.allowDomainDiscovery);
        message.disableLoginWithEmail !== undefined && (obj.disableLoginWithEmail = message.disableLoginWithEmail);
        message.disableLoginWithPhone !== undefined && (obj.disableLoginWithPhone = message.disableLoginWithPhone);
        message.forceMfaLocalOnly !== undefined && (obj.forceMfaLocalOnly = message.forceMfaLocalOnly);
        return obj;
    },
    create(base) {
        return exports.LoginPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.allowUsernamePassword = object.allowUsernamePassword ?? false;
        message.allowRegister = object.allowRegister ?? false;
        message.allowExternalIdp = object.allowExternalIdp ?? false;
        message.forceMfa = object.forceMfa ?? false;
        message.passwordlessType = object.passwordlessType ?? 0;
        message.isDefault = object.isDefault ?? false;
        message.hidePasswordReset = object.hidePasswordReset ?? false;
        message.ignoreUnknownUsernames = object.ignoreUnknownUsernames ?? false;
        message.defaultRedirectUri = object.defaultRedirectUri ?? "";
        message.passwordCheckLifetime =
            (object.passwordCheckLifetime !== undefined && object.passwordCheckLifetime !== null)
                ? duration_1.Duration.fromPartial(object.passwordCheckLifetime)
                : undefined;
        message.externalLoginCheckLifetime =
            (object.externalLoginCheckLifetime !== undefined && object.externalLoginCheckLifetime !== null)
                ? duration_1.Duration.fromPartial(object.externalLoginCheckLifetime)
                : undefined;
        message.mfaInitSkipLifetime = (object.mfaInitSkipLifetime !== undefined && object.mfaInitSkipLifetime !== null)
            ? duration_1.Duration.fromPartial(object.mfaInitSkipLifetime)
            : undefined;
        message.secondFactorCheckLifetime =
            (object.secondFactorCheckLifetime !== undefined && object.secondFactorCheckLifetime !== null)
                ? duration_1.Duration.fromPartial(object.secondFactorCheckLifetime)
                : undefined;
        message.multiFactorCheckLifetime =
            (object.multiFactorCheckLifetime !== undefined && object.multiFactorCheckLifetime !== null)
                ? duration_1.Duration.fromPartial(object.multiFactorCheckLifetime)
                : undefined;
        message.secondFactors = object.secondFactors?.map((e) => e) || [];
        message.multiFactors = object.multiFactors?.map((e) => e) || [];
        message.idps = object.idps?.map((e) => idp_1.IDPLoginPolicyLink.fromPartial(e)) || [];
        message.allowDomainDiscovery = object.allowDomainDiscovery ?? false;
        message.disableLoginWithEmail = object.disableLoginWithEmail ?? false;
        message.disableLoginWithPhone = object.disableLoginWithPhone ?? false;
        message.forceMfaLocalOnly = object.forceMfaLocalOnly ?? false;
        return message;
    },
};
function createBasePasswordComplexityPolicy() {
    return {
        details: undefined,
        minLength: long_1.default.UZERO,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSymbol: false,
        isDefault: false,
    };
}
exports.PasswordComplexityPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (!message.minLength.isZero()) {
            writer.uint32(16).uint64(message.minLength);
        }
        if (message.hasUppercase === true) {
            writer.uint32(24).bool(message.hasUppercase);
        }
        if (message.hasLowercase === true) {
            writer.uint32(32).bool(message.hasLowercase);
        }
        if (message.hasNumber === true) {
            writer.uint32(40).bool(message.hasNumber);
        }
        if (message.hasSymbol === true) {
            writer.uint32(48).bool(message.hasSymbol);
        }
        if (message.isDefault === true) {
            writer.uint32(56).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordComplexityPolicy();
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
                    message.minLength = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.hasUppercase = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.hasLowercase = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.hasNumber = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.hasSymbol = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.isDefault = reader.bool();
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
            minLength: isSet(object.minLength) ? long_1.default.fromValue(object.minLength) : long_1.default.UZERO,
            hasUppercase: isSet(object.hasUppercase) ? Boolean(object.hasUppercase) : false,
            hasLowercase: isSet(object.hasLowercase) ? Boolean(object.hasLowercase) : false,
            hasNumber: isSet(object.hasNumber) ? Boolean(object.hasNumber) : false,
            hasSymbol: isSet(object.hasSymbol) ? Boolean(object.hasSymbol) : false,
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.minLength !== undefined && (obj.minLength = (message.minLength || long_1.default.UZERO).toString());
        message.hasUppercase !== undefined && (obj.hasUppercase = message.hasUppercase);
        message.hasLowercase !== undefined && (obj.hasLowercase = message.hasLowercase);
        message.hasNumber !== undefined && (obj.hasNumber = message.hasNumber);
        message.hasSymbol !== undefined && (obj.hasSymbol = message.hasSymbol);
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        return obj;
    },
    create(base) {
        return exports.PasswordComplexityPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordComplexityPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.minLength = (object.minLength !== undefined && object.minLength !== null)
            ? long_1.default.fromValue(object.minLength)
            : long_1.default.UZERO;
        message.hasUppercase = object.hasUppercase ?? false;
        message.hasLowercase = object.hasLowercase ?? false;
        message.hasNumber = object.hasNumber ?? false;
        message.hasSymbol = object.hasSymbol ?? false;
        message.isDefault = object.isDefault ?? false;
        return message;
    },
};
function createBasePasswordAgePolicy() {
    return { details: undefined, maxAgeDays: long_1.default.UZERO, expireWarnDays: long_1.default.UZERO, isDefault: false };
}
exports.PasswordAgePolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (!message.maxAgeDays.isZero()) {
            writer.uint32(16).uint64(message.maxAgeDays);
        }
        if (!message.expireWarnDays.isZero()) {
            writer.uint32(24).uint64(message.expireWarnDays);
        }
        if (message.isDefault === true) {
            writer.uint32(32).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordAgePolicy();
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
                    message.maxAgeDays = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.expireWarnDays = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isDefault = reader.bool();
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
            maxAgeDays: isSet(object.maxAgeDays) ? long_1.default.fromValue(object.maxAgeDays) : long_1.default.UZERO,
            expireWarnDays: isSet(object.expireWarnDays) ? long_1.default.fromValue(object.expireWarnDays) : long_1.default.UZERO,
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.maxAgeDays !== undefined && (obj.maxAgeDays = (message.maxAgeDays || long_1.default.UZERO).toString());
        message.expireWarnDays !== undefined && (obj.expireWarnDays = (message.expireWarnDays || long_1.default.UZERO).toString());
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        return obj;
    },
    create(base) {
        return exports.PasswordAgePolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordAgePolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.maxAgeDays = (object.maxAgeDays !== undefined && object.maxAgeDays !== null)
            ? long_1.default.fromValue(object.maxAgeDays)
            : long_1.default.UZERO;
        message.expireWarnDays = (object.expireWarnDays !== undefined && object.expireWarnDays !== null)
            ? long_1.default.fromValue(object.expireWarnDays)
            : long_1.default.UZERO;
        message.isDefault = object.isDefault ?? false;
        return message;
    },
};
function createBaseLockoutPolicy() {
    return { details: undefined, maxPasswordAttempts: long_1.default.UZERO, isDefault: false };
}
exports.LockoutPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (!message.maxPasswordAttempts.isZero()) {
            writer.uint32(16).uint64(message.maxPasswordAttempts);
        }
        if (message.isDefault === true) {
            writer.uint32(32).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockoutPolicy();
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
                    message.maxPasswordAttempts = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isDefault = reader.bool();
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
            maxPasswordAttempts: isSet(object.maxPasswordAttempts) ? long_1.default.fromValue(object.maxPasswordAttempts) : long_1.default.UZERO,
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.maxPasswordAttempts !== undefined &&
            (obj.maxPasswordAttempts = (message.maxPasswordAttempts || long_1.default.UZERO).toString());
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        return obj;
    },
    create(base) {
        return exports.LockoutPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLockoutPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.maxPasswordAttempts = (object.maxPasswordAttempts !== undefined && object.maxPasswordAttempts !== null)
            ? long_1.default.fromValue(object.maxPasswordAttempts)
            : long_1.default.UZERO;
        message.isDefault = object.isDefault ?? false;
        return message;
    },
};
function createBasePrivacyPolicy() {
    return { details: undefined, tosLink: "", privacyLink: "", isDefault: false, helpLink: "", supportEmail: "" };
}
exports.PrivacyPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.tosLink !== "") {
            writer.uint32(18).string(message.tosLink);
        }
        if (message.privacyLink !== "") {
            writer.uint32(26).string(message.privacyLink);
        }
        if (message.isDefault === true) {
            writer.uint32(32).bool(message.isDefault);
        }
        if (message.helpLink !== "") {
            writer.uint32(42).string(message.helpLink);
        }
        if (message.supportEmail !== "") {
            writer.uint32(50).string(message.supportEmail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrivacyPolicy();
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
                    message.tosLink = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.privacyLink = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.helpLink = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.supportEmail = reader.string();
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
            tosLink: isSet(object.tosLink) ? String(object.tosLink) : "",
            privacyLink: isSet(object.privacyLink) ? String(object.privacyLink) : "",
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
            helpLink: isSet(object.helpLink) ? String(object.helpLink) : "",
            supportEmail: isSet(object.supportEmail) ? String(object.supportEmail) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.tosLink !== undefined && (obj.tosLink = message.tosLink);
        message.privacyLink !== undefined && (obj.privacyLink = message.privacyLink);
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        message.helpLink !== undefined && (obj.helpLink = message.helpLink);
        message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
        return obj;
    },
    create(base) {
        return exports.PrivacyPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePrivacyPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.tosLink = object.tosLink ?? "";
        message.privacyLink = object.privacyLink ?? "";
        message.isDefault = object.isDefault ?? false;
        message.helpLink = object.helpLink ?? "";
        message.supportEmail = object.supportEmail ?? "";
        return message;
    },
};
function createBaseNotificationPolicy() {
    return { details: undefined, isDefault: false, passwordChange: false };
}
exports.NotificationPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.isDefault === true) {
            writer.uint32(16).bool(message.isDefault);
        }
        if (message.passwordChange === true) {
            writer.uint32(24).bool(message.passwordChange);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationPolicy();
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
                    message.isDefault = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.passwordChange = reader.bool();
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
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
            passwordChange: isSet(object.passwordChange) ? Boolean(object.passwordChange) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        message.passwordChange !== undefined && (obj.passwordChange = message.passwordChange);
        return obj;
    },
    create(base) {
        return exports.NotificationPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationPolicy();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.isDefault = object.isDefault ?? false;
        message.passwordChange = object.passwordChange ?? false;
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
