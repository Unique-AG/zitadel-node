"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIConfig = exports.SAMLConfig = exports.OIDCConfig = exports.AppNameQuery = exports.AppQuery = exports.App = exports.aPIAuthMethodTypeToJSON = exports.aPIAuthMethodTypeFromJSON = exports.APIAuthMethodType = exports.oIDCTokenTypeToJSON = exports.oIDCTokenTypeFromJSON = exports.OIDCTokenType = exports.oIDCVersionToJSON = exports.oIDCVersionFromJSON = exports.OIDCVersion = exports.oIDCAuthMethodTypeToJSON = exports.oIDCAuthMethodTypeFromJSON = exports.OIDCAuthMethodType = exports.oIDCAppTypeToJSON = exports.oIDCAppTypeFromJSON = exports.OIDCAppType = exports.oIDCGrantTypeToJSON = exports.oIDCGrantTypeFromJSON = exports.OIDCGrantType = exports.oIDCResponseTypeToJSON = exports.oIDCResponseTypeFromJSON = exports.OIDCResponseType = exports.appStateToJSON = exports.appStateFromJSON = exports.AppState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../google/protobuf/duration");
const message_1 = require("./message");
const object_1 = require("./object");
exports.protobufPackage = "zitadel.app.v1";
var AppState;
(function (AppState) {
    AppState[AppState["APP_STATE_UNSPECIFIED"] = 0] = "APP_STATE_UNSPECIFIED";
    AppState[AppState["APP_STATE_ACTIVE"] = 1] = "APP_STATE_ACTIVE";
    AppState[AppState["APP_STATE_INACTIVE"] = 2] = "APP_STATE_INACTIVE";
    AppState[AppState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AppState || (exports.AppState = AppState = {}));
function appStateFromJSON(object) {
    switch (object) {
        case 0:
        case "APP_STATE_UNSPECIFIED":
            return AppState.APP_STATE_UNSPECIFIED;
        case 1:
        case "APP_STATE_ACTIVE":
            return AppState.APP_STATE_ACTIVE;
        case 2:
        case "APP_STATE_INACTIVE":
            return AppState.APP_STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AppState.UNRECOGNIZED;
    }
}
exports.appStateFromJSON = appStateFromJSON;
function appStateToJSON(object) {
    switch (object) {
        case AppState.APP_STATE_UNSPECIFIED:
            return "APP_STATE_UNSPECIFIED";
        case AppState.APP_STATE_ACTIVE:
            return "APP_STATE_ACTIVE";
        case AppState.APP_STATE_INACTIVE:
            return "APP_STATE_INACTIVE";
        case AppState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.appStateToJSON = appStateToJSON;
var OIDCResponseType;
(function (OIDCResponseType) {
    OIDCResponseType[OIDCResponseType["OIDC_RESPONSE_TYPE_CODE"] = 0] = "OIDC_RESPONSE_TYPE_CODE";
    OIDCResponseType[OIDCResponseType["OIDC_RESPONSE_TYPE_ID_TOKEN"] = 1] = "OIDC_RESPONSE_TYPE_ID_TOKEN";
    OIDCResponseType[OIDCResponseType["OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN"] = 2] = "OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN";
    OIDCResponseType[OIDCResponseType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OIDCResponseType || (exports.OIDCResponseType = OIDCResponseType = {}));
function oIDCResponseTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "OIDC_RESPONSE_TYPE_CODE":
            return OIDCResponseType.OIDC_RESPONSE_TYPE_CODE;
        case 1:
        case "OIDC_RESPONSE_TYPE_ID_TOKEN":
            return OIDCResponseType.OIDC_RESPONSE_TYPE_ID_TOKEN;
        case 2:
        case "OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN":
            return OIDCResponseType.OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OIDCResponseType.UNRECOGNIZED;
    }
}
exports.oIDCResponseTypeFromJSON = oIDCResponseTypeFromJSON;
function oIDCResponseTypeToJSON(object) {
    switch (object) {
        case OIDCResponseType.OIDC_RESPONSE_TYPE_CODE:
            return "OIDC_RESPONSE_TYPE_CODE";
        case OIDCResponseType.OIDC_RESPONSE_TYPE_ID_TOKEN:
            return "OIDC_RESPONSE_TYPE_ID_TOKEN";
        case OIDCResponseType.OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN:
            return "OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN";
        case OIDCResponseType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.oIDCResponseTypeToJSON = oIDCResponseTypeToJSON;
var OIDCGrantType;
(function (OIDCGrantType) {
    OIDCGrantType[OIDCGrantType["OIDC_GRANT_TYPE_AUTHORIZATION_CODE"] = 0] = "OIDC_GRANT_TYPE_AUTHORIZATION_CODE";
    OIDCGrantType[OIDCGrantType["OIDC_GRANT_TYPE_IMPLICIT"] = 1] = "OIDC_GRANT_TYPE_IMPLICIT";
    OIDCGrantType[OIDCGrantType["OIDC_GRANT_TYPE_REFRESH_TOKEN"] = 2] = "OIDC_GRANT_TYPE_REFRESH_TOKEN";
    OIDCGrantType[OIDCGrantType["OIDC_GRANT_TYPE_DEVICE_CODE"] = 3] = "OIDC_GRANT_TYPE_DEVICE_CODE";
    OIDCGrantType[OIDCGrantType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OIDCGrantType || (exports.OIDCGrantType = OIDCGrantType = {}));
function oIDCGrantTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "OIDC_GRANT_TYPE_AUTHORIZATION_CODE":
            return OIDCGrantType.OIDC_GRANT_TYPE_AUTHORIZATION_CODE;
        case 1:
        case "OIDC_GRANT_TYPE_IMPLICIT":
            return OIDCGrantType.OIDC_GRANT_TYPE_IMPLICIT;
        case 2:
        case "OIDC_GRANT_TYPE_REFRESH_TOKEN":
            return OIDCGrantType.OIDC_GRANT_TYPE_REFRESH_TOKEN;
        case 3:
        case "OIDC_GRANT_TYPE_DEVICE_CODE":
            return OIDCGrantType.OIDC_GRANT_TYPE_DEVICE_CODE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OIDCGrantType.UNRECOGNIZED;
    }
}
exports.oIDCGrantTypeFromJSON = oIDCGrantTypeFromJSON;
function oIDCGrantTypeToJSON(object) {
    switch (object) {
        case OIDCGrantType.OIDC_GRANT_TYPE_AUTHORIZATION_CODE:
            return "OIDC_GRANT_TYPE_AUTHORIZATION_CODE";
        case OIDCGrantType.OIDC_GRANT_TYPE_IMPLICIT:
            return "OIDC_GRANT_TYPE_IMPLICIT";
        case OIDCGrantType.OIDC_GRANT_TYPE_REFRESH_TOKEN:
            return "OIDC_GRANT_TYPE_REFRESH_TOKEN";
        case OIDCGrantType.OIDC_GRANT_TYPE_DEVICE_CODE:
            return "OIDC_GRANT_TYPE_DEVICE_CODE";
        case OIDCGrantType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.oIDCGrantTypeToJSON = oIDCGrantTypeToJSON;
var OIDCAppType;
(function (OIDCAppType) {
    OIDCAppType[OIDCAppType["OIDC_APP_TYPE_WEB"] = 0] = "OIDC_APP_TYPE_WEB";
    OIDCAppType[OIDCAppType["OIDC_APP_TYPE_USER_AGENT"] = 1] = "OIDC_APP_TYPE_USER_AGENT";
    OIDCAppType[OIDCAppType["OIDC_APP_TYPE_NATIVE"] = 2] = "OIDC_APP_TYPE_NATIVE";
    OIDCAppType[OIDCAppType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OIDCAppType || (exports.OIDCAppType = OIDCAppType = {}));
function oIDCAppTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "OIDC_APP_TYPE_WEB":
            return OIDCAppType.OIDC_APP_TYPE_WEB;
        case 1:
        case "OIDC_APP_TYPE_USER_AGENT":
            return OIDCAppType.OIDC_APP_TYPE_USER_AGENT;
        case 2:
        case "OIDC_APP_TYPE_NATIVE":
            return OIDCAppType.OIDC_APP_TYPE_NATIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OIDCAppType.UNRECOGNIZED;
    }
}
exports.oIDCAppTypeFromJSON = oIDCAppTypeFromJSON;
function oIDCAppTypeToJSON(object) {
    switch (object) {
        case OIDCAppType.OIDC_APP_TYPE_WEB:
            return "OIDC_APP_TYPE_WEB";
        case OIDCAppType.OIDC_APP_TYPE_USER_AGENT:
            return "OIDC_APP_TYPE_USER_AGENT";
        case OIDCAppType.OIDC_APP_TYPE_NATIVE:
            return "OIDC_APP_TYPE_NATIVE";
        case OIDCAppType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.oIDCAppTypeToJSON = oIDCAppTypeToJSON;
var OIDCAuthMethodType;
(function (OIDCAuthMethodType) {
    OIDCAuthMethodType[OIDCAuthMethodType["OIDC_AUTH_METHOD_TYPE_BASIC"] = 0] = "OIDC_AUTH_METHOD_TYPE_BASIC";
    OIDCAuthMethodType[OIDCAuthMethodType["OIDC_AUTH_METHOD_TYPE_POST"] = 1] = "OIDC_AUTH_METHOD_TYPE_POST";
    OIDCAuthMethodType[OIDCAuthMethodType["OIDC_AUTH_METHOD_TYPE_NONE"] = 2] = "OIDC_AUTH_METHOD_TYPE_NONE";
    OIDCAuthMethodType[OIDCAuthMethodType["OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT"] = 3] = "OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT";
    OIDCAuthMethodType[OIDCAuthMethodType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OIDCAuthMethodType || (exports.OIDCAuthMethodType = OIDCAuthMethodType = {}));
function oIDCAuthMethodTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "OIDC_AUTH_METHOD_TYPE_BASIC":
            return OIDCAuthMethodType.OIDC_AUTH_METHOD_TYPE_BASIC;
        case 1:
        case "OIDC_AUTH_METHOD_TYPE_POST":
            return OIDCAuthMethodType.OIDC_AUTH_METHOD_TYPE_POST;
        case 2:
        case "OIDC_AUTH_METHOD_TYPE_NONE":
            return OIDCAuthMethodType.OIDC_AUTH_METHOD_TYPE_NONE;
        case 3:
        case "OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT":
            return OIDCAuthMethodType.OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OIDCAuthMethodType.UNRECOGNIZED;
    }
}
exports.oIDCAuthMethodTypeFromJSON = oIDCAuthMethodTypeFromJSON;
function oIDCAuthMethodTypeToJSON(object) {
    switch (object) {
        case OIDCAuthMethodType.OIDC_AUTH_METHOD_TYPE_BASIC:
            return "OIDC_AUTH_METHOD_TYPE_BASIC";
        case OIDCAuthMethodType.OIDC_AUTH_METHOD_TYPE_POST:
            return "OIDC_AUTH_METHOD_TYPE_POST";
        case OIDCAuthMethodType.OIDC_AUTH_METHOD_TYPE_NONE:
            return "OIDC_AUTH_METHOD_TYPE_NONE";
        case OIDCAuthMethodType.OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT:
            return "OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT";
        case OIDCAuthMethodType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.oIDCAuthMethodTypeToJSON = oIDCAuthMethodTypeToJSON;
var OIDCVersion;
(function (OIDCVersion) {
    OIDCVersion[OIDCVersion["OIDC_VERSION_1_0"] = 0] = "OIDC_VERSION_1_0";
    OIDCVersion[OIDCVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OIDCVersion || (exports.OIDCVersion = OIDCVersion = {}));
function oIDCVersionFromJSON(object) {
    switch (object) {
        case 0:
        case "OIDC_VERSION_1_0":
            return OIDCVersion.OIDC_VERSION_1_0;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OIDCVersion.UNRECOGNIZED;
    }
}
exports.oIDCVersionFromJSON = oIDCVersionFromJSON;
function oIDCVersionToJSON(object) {
    switch (object) {
        case OIDCVersion.OIDC_VERSION_1_0:
            return "OIDC_VERSION_1_0";
        case OIDCVersion.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.oIDCVersionToJSON = oIDCVersionToJSON;
var OIDCTokenType;
(function (OIDCTokenType) {
    OIDCTokenType[OIDCTokenType["OIDC_TOKEN_TYPE_BEARER"] = 0] = "OIDC_TOKEN_TYPE_BEARER";
    OIDCTokenType[OIDCTokenType["OIDC_TOKEN_TYPE_JWT"] = 1] = "OIDC_TOKEN_TYPE_JWT";
    OIDCTokenType[OIDCTokenType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OIDCTokenType || (exports.OIDCTokenType = OIDCTokenType = {}));
function oIDCTokenTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "OIDC_TOKEN_TYPE_BEARER":
            return OIDCTokenType.OIDC_TOKEN_TYPE_BEARER;
        case 1:
        case "OIDC_TOKEN_TYPE_JWT":
            return OIDCTokenType.OIDC_TOKEN_TYPE_JWT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OIDCTokenType.UNRECOGNIZED;
    }
}
exports.oIDCTokenTypeFromJSON = oIDCTokenTypeFromJSON;
function oIDCTokenTypeToJSON(object) {
    switch (object) {
        case OIDCTokenType.OIDC_TOKEN_TYPE_BEARER:
            return "OIDC_TOKEN_TYPE_BEARER";
        case OIDCTokenType.OIDC_TOKEN_TYPE_JWT:
            return "OIDC_TOKEN_TYPE_JWT";
        case OIDCTokenType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.oIDCTokenTypeToJSON = oIDCTokenTypeToJSON;
var APIAuthMethodType;
(function (APIAuthMethodType) {
    APIAuthMethodType[APIAuthMethodType["API_AUTH_METHOD_TYPE_BASIC"] = 0] = "API_AUTH_METHOD_TYPE_BASIC";
    APIAuthMethodType[APIAuthMethodType["API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT"] = 1] = "API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT";
    APIAuthMethodType[APIAuthMethodType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(APIAuthMethodType || (exports.APIAuthMethodType = APIAuthMethodType = {}));
function aPIAuthMethodTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "API_AUTH_METHOD_TYPE_BASIC":
            return APIAuthMethodType.API_AUTH_METHOD_TYPE_BASIC;
        case 1:
        case "API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT":
            return APIAuthMethodType.API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return APIAuthMethodType.UNRECOGNIZED;
    }
}
exports.aPIAuthMethodTypeFromJSON = aPIAuthMethodTypeFromJSON;
function aPIAuthMethodTypeToJSON(object) {
    switch (object) {
        case APIAuthMethodType.API_AUTH_METHOD_TYPE_BASIC:
            return "API_AUTH_METHOD_TYPE_BASIC";
        case APIAuthMethodType.API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT:
            return "API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT";
        case APIAuthMethodType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.aPIAuthMethodTypeToJSON = aPIAuthMethodTypeToJSON;
function createBaseApp() {
    return {
        id: "",
        details: undefined,
        state: 0,
        name: "",
        oidcConfig: undefined,
        apiConfig: undefined,
        samlConfig: undefined,
    };
}
exports.App = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.oidcConfig !== undefined) {
            exports.OIDCConfig.encode(message.oidcConfig, writer.uint32(42).fork()).ldelim();
        }
        if (message.apiConfig !== undefined) {
            exports.APIConfig.encode(message.apiConfig, writer.uint32(50).fork()).ldelim();
        }
        if (message.samlConfig !== undefined) {
            exports.SAMLConfig.encode(message.samlConfig, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseApp();
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
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.oidcConfig = exports.OIDCConfig.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.apiConfig = exports.APIConfig.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.samlConfig = exports.SAMLConfig.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? appStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            oidcConfig: isSet(object.oidcConfig) ? exports.OIDCConfig.fromJSON(object.oidcConfig) : undefined,
            apiConfig: isSet(object.apiConfig) ? exports.APIConfig.fromJSON(object.apiConfig) : undefined,
            samlConfig: isSet(object.samlConfig) ? exports.SAMLConfig.fromJSON(object.samlConfig) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.state !== undefined && (obj.state = appStateToJSON(message.state));
        message.name !== undefined && (obj.name = message.name);
        message.oidcConfig !== undefined &&
            (obj.oidcConfig = message.oidcConfig ? exports.OIDCConfig.toJSON(message.oidcConfig) : undefined);
        message.apiConfig !== undefined &&
            (obj.apiConfig = message.apiConfig ? exports.APIConfig.toJSON(message.apiConfig) : undefined);
        message.samlConfig !== undefined &&
            (obj.samlConfig = message.samlConfig ? exports.SAMLConfig.toJSON(message.samlConfig) : undefined);
        return obj;
    },
    create(base) {
        return exports.App.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseApp();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.name = object.name ?? "";
        message.oidcConfig = (object.oidcConfig !== undefined && object.oidcConfig !== null)
            ? exports.OIDCConfig.fromPartial(object.oidcConfig)
            : undefined;
        message.apiConfig = (object.apiConfig !== undefined && object.apiConfig !== null)
            ? exports.APIConfig.fromPartial(object.apiConfig)
            : undefined;
        message.samlConfig = (object.samlConfig !== undefined && object.samlConfig !== null)
            ? exports.SAMLConfig.fromPartial(object.samlConfig)
            : undefined;
        return message;
    },
};
function createBaseAppQuery() {
    return { nameQuery: undefined };
}
exports.AppQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nameQuery !== undefined) {
            exports.AppNameQuery.encode(message.nameQuery, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nameQuery = exports.AppNameQuery.decode(reader, reader.uint32());
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
        return { nameQuery: isSet(object.nameQuery) ? exports.AppNameQuery.fromJSON(object.nameQuery) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.nameQuery !== undefined &&
            (obj.nameQuery = message.nameQuery ? exports.AppNameQuery.toJSON(message.nameQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.AppQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAppQuery();
        message.nameQuery = (object.nameQuery !== undefined && object.nameQuery !== null)
            ? exports.AppNameQuery.fromPartial(object.nameQuery)
            : undefined;
        return message;
    },
};
function createBaseAppNameQuery() {
    return { name: "", method: 0 };
}
exports.AppNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.AppNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAppNameQuery();
        message.name = object.name ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseOIDCConfig() {
    return {
        redirectUris: [],
        responseTypes: [],
        grantTypes: [],
        appType: 0,
        clientId: "",
        authMethodType: 0,
        postLogoutRedirectUris: [],
        version: 0,
        noneCompliant: false,
        complianceProblems: [],
        devMode: false,
        accessTokenType: 0,
        accessTokenRoleAssertion: false,
        idTokenRoleAssertion: false,
        idTokenUserinfoAssertion: false,
        clockSkew: undefined,
        additionalOrigins: [],
        allowedOrigins: [],
        skipNativeAppSuccessPage: false,
    };
}
exports.OIDCConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.redirectUris) {
            writer.uint32(10).string(v);
        }
        writer.uint32(18).fork();
        for (const v of message.responseTypes) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(26).fork();
        for (const v of message.grantTypes) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.appType !== 0) {
            writer.uint32(32).int32(message.appType);
        }
        if (message.clientId !== "") {
            writer.uint32(42).string(message.clientId);
        }
        if (message.authMethodType !== 0) {
            writer.uint32(56).int32(message.authMethodType);
        }
        for (const v of message.postLogoutRedirectUris) {
            writer.uint32(66).string(v);
        }
        if (message.version !== 0) {
            writer.uint32(72).int32(message.version);
        }
        if (message.noneCompliant === true) {
            writer.uint32(80).bool(message.noneCompliant);
        }
        for (const v of message.complianceProblems) {
            message_1.LocalizedMessage.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.devMode === true) {
            writer.uint32(96).bool(message.devMode);
        }
        if (message.accessTokenType !== 0) {
            writer.uint32(104).int32(message.accessTokenType);
        }
        if (message.accessTokenRoleAssertion === true) {
            writer.uint32(112).bool(message.accessTokenRoleAssertion);
        }
        if (message.idTokenRoleAssertion === true) {
            writer.uint32(120).bool(message.idTokenRoleAssertion);
        }
        if (message.idTokenUserinfoAssertion === true) {
            writer.uint32(128).bool(message.idTokenUserinfoAssertion);
        }
        if (message.clockSkew !== undefined) {
            duration_1.Duration.encode(message.clockSkew, writer.uint32(138).fork()).ldelim();
        }
        for (const v of message.additionalOrigins) {
            writer.uint32(146).string(v);
        }
        for (const v of message.allowedOrigins) {
            writer.uint32(154).string(v);
        }
        if (message.skipNativeAppSuccessPage === true) {
            writer.uint32(160).bool(message.skipNativeAppSuccessPage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOIDCConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.redirectUris.push(reader.string());
                    continue;
                case 2:
                    if (tag === 16) {
                        message.responseTypes.push(reader.int32());
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.responseTypes.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag === 24) {
                        message.grantTypes.push(reader.int32());
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.grantTypes.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.appType = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.authMethodType = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.postLogoutRedirectUris.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.version = reader.int32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.noneCompliant = reader.bool();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.complianceProblems.push(message_1.LocalizedMessage.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.devMode = reader.bool();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.accessTokenType = reader.int32();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.accessTokenRoleAssertion = reader.bool();
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.idTokenRoleAssertion = reader.bool();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.idTokenUserinfoAssertion = reader.bool();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.clockSkew = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.additionalOrigins.push(reader.string());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.allowedOrigins.push(reader.string());
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.skipNativeAppSuccessPage = reader.bool();
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
            redirectUris: Array.isArray(object?.redirectUris) ? object.redirectUris.map((e) => String(e)) : [],
            responseTypes: Array.isArray(object?.responseTypes)
                ? object.responseTypes.map((e) => oIDCResponseTypeFromJSON(e))
                : [],
            grantTypes: Array.isArray(object?.grantTypes) ? object.grantTypes.map((e) => oIDCGrantTypeFromJSON(e)) : [],
            appType: isSet(object.appType) ? oIDCAppTypeFromJSON(object.appType) : 0,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            authMethodType: isSet(object.authMethodType) ? oIDCAuthMethodTypeFromJSON(object.authMethodType) : 0,
            postLogoutRedirectUris: Array.isArray(object?.postLogoutRedirectUris)
                ? object.postLogoutRedirectUris.map((e) => String(e))
                : [],
            version: isSet(object.version) ? oIDCVersionFromJSON(object.version) : 0,
            noneCompliant: isSet(object.noneCompliant) ? Boolean(object.noneCompliant) : false,
            complianceProblems: Array.isArray(object?.complianceProblems)
                ? object.complianceProblems.map((e) => message_1.LocalizedMessage.fromJSON(e))
                : [],
            devMode: isSet(object.devMode) ? Boolean(object.devMode) : false,
            accessTokenType: isSet(object.accessTokenType) ? oIDCTokenTypeFromJSON(object.accessTokenType) : 0,
            accessTokenRoleAssertion: isSet(object.accessTokenRoleAssertion)
                ? Boolean(object.accessTokenRoleAssertion)
                : false,
            idTokenRoleAssertion: isSet(object.idTokenRoleAssertion) ? Boolean(object.idTokenRoleAssertion) : false,
            idTokenUserinfoAssertion: isSet(object.idTokenUserinfoAssertion)
                ? Boolean(object.idTokenUserinfoAssertion)
                : false,
            clockSkew: isSet(object.clockSkew) ? duration_1.Duration.fromJSON(object.clockSkew) : undefined,
            additionalOrigins: Array.isArray(object?.additionalOrigins)
                ? object.additionalOrigins.map((e) => String(e))
                : [],
            allowedOrigins: Array.isArray(object?.allowedOrigins) ? object.allowedOrigins.map((e) => String(e)) : [],
            skipNativeAppSuccessPage: isSet(object.skipNativeAppSuccessPage)
                ? Boolean(object.skipNativeAppSuccessPage)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.redirectUris) {
            obj.redirectUris = message.redirectUris.map((e) => e);
        }
        else {
            obj.redirectUris = [];
        }
        if (message.responseTypes) {
            obj.responseTypes = message.responseTypes.map((e) => oIDCResponseTypeToJSON(e));
        }
        else {
            obj.responseTypes = [];
        }
        if (message.grantTypes) {
            obj.grantTypes = message.grantTypes.map((e) => oIDCGrantTypeToJSON(e));
        }
        else {
            obj.grantTypes = [];
        }
        message.appType !== undefined && (obj.appType = oIDCAppTypeToJSON(message.appType));
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.authMethodType !== undefined && (obj.authMethodType = oIDCAuthMethodTypeToJSON(message.authMethodType));
        if (message.postLogoutRedirectUris) {
            obj.postLogoutRedirectUris = message.postLogoutRedirectUris.map((e) => e);
        }
        else {
            obj.postLogoutRedirectUris = [];
        }
        message.version !== undefined && (obj.version = oIDCVersionToJSON(message.version));
        message.noneCompliant !== undefined && (obj.noneCompliant = message.noneCompliant);
        if (message.complianceProblems) {
            obj.complianceProblems = message.complianceProblems.map((e) => e ? message_1.LocalizedMessage.toJSON(e) : undefined);
        }
        else {
            obj.complianceProblems = [];
        }
        message.devMode !== undefined && (obj.devMode = message.devMode);
        message.accessTokenType !== undefined && (obj.accessTokenType = oIDCTokenTypeToJSON(message.accessTokenType));
        message.accessTokenRoleAssertion !== undefined && (obj.accessTokenRoleAssertion = message.accessTokenRoleAssertion);
        message.idTokenRoleAssertion !== undefined && (obj.idTokenRoleAssertion = message.idTokenRoleAssertion);
        message.idTokenUserinfoAssertion !== undefined && (obj.idTokenUserinfoAssertion = message.idTokenUserinfoAssertion);
        message.clockSkew !== undefined &&
            (obj.clockSkew = message.clockSkew ? duration_1.Duration.toJSON(message.clockSkew) : undefined);
        if (message.additionalOrigins) {
            obj.additionalOrigins = message.additionalOrigins.map((e) => e);
        }
        else {
            obj.additionalOrigins = [];
        }
        if (message.allowedOrigins) {
            obj.allowedOrigins = message.allowedOrigins.map((e) => e);
        }
        else {
            obj.allowedOrigins = [];
        }
        message.skipNativeAppSuccessPage !== undefined && (obj.skipNativeAppSuccessPage = message.skipNativeAppSuccessPage);
        return obj;
    },
    create(base) {
        return exports.OIDCConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOIDCConfig();
        message.redirectUris = object.redirectUris?.map((e) => e) || [];
        message.responseTypes = object.responseTypes?.map((e) => e) || [];
        message.grantTypes = object.grantTypes?.map((e) => e) || [];
        message.appType = object.appType ?? 0;
        message.clientId = object.clientId ?? "";
        message.authMethodType = object.authMethodType ?? 0;
        message.postLogoutRedirectUris = object.postLogoutRedirectUris?.map((e) => e) || [];
        message.version = object.version ?? 0;
        message.noneCompliant = object.noneCompliant ?? false;
        message.complianceProblems = object.complianceProblems?.map((e) => message_1.LocalizedMessage.fromPartial(e)) || [];
        message.devMode = object.devMode ?? false;
        message.accessTokenType = object.accessTokenType ?? 0;
        message.accessTokenRoleAssertion = object.accessTokenRoleAssertion ?? false;
        message.idTokenRoleAssertion = object.idTokenRoleAssertion ?? false;
        message.idTokenUserinfoAssertion = object.idTokenUserinfoAssertion ?? false;
        message.clockSkew = (object.clockSkew !== undefined && object.clockSkew !== null)
            ? duration_1.Duration.fromPartial(object.clockSkew)
            : undefined;
        message.additionalOrigins = object.additionalOrigins?.map((e) => e) || [];
        message.allowedOrigins = object.allowedOrigins?.map((e) => e) || [];
        message.skipNativeAppSuccessPage = object.skipNativeAppSuccessPage ?? false;
        return message;
    },
};
function createBaseSAMLConfig() {
    return { metadataXml: undefined, metadataUrl: undefined };
}
exports.SAMLConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadataXml !== undefined) {
            writer.uint32(10).bytes(message.metadataXml);
        }
        if (message.metadataUrl !== undefined) {
            writer.uint32(18).string(message.metadataUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSAMLConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadataXml = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.metadataUrl = reader.string();
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
            metadataXml: isSet(object.metadataXml) ? Buffer.from(bytesFromBase64(object.metadataXml)) : undefined,
            metadataUrl: isSet(object.metadataUrl) ? String(object.metadataUrl) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.metadataXml !== undefined &&
            (obj.metadataXml = message.metadataXml !== undefined ? base64FromBytes(message.metadataXml) : undefined);
        message.metadataUrl !== undefined && (obj.metadataUrl = message.metadataUrl);
        return obj;
    },
    create(base) {
        return exports.SAMLConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSAMLConfig();
        message.metadataXml = object.metadataXml ?? undefined;
        message.metadataUrl = object.metadataUrl ?? undefined;
        return message;
    },
};
function createBaseAPIConfig() {
    return { clientId: "", authMethodType: 0 };
}
exports.APIConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.authMethodType !== 0) {
            writer.uint32(24).int32(message.authMethodType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAPIConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.authMethodType = reader.int32();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            authMethodType: isSet(object.authMethodType) ? aPIAuthMethodTypeFromJSON(object.authMethodType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.authMethodType !== undefined && (obj.authMethodType = aPIAuthMethodTypeToJSON(message.authMethodType));
        return obj;
    },
    create(base) {
        return exports.APIConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAPIConfig();
        message.clientId = object.clientId ?? "";
        message.authMethodType = object.authMethodType ?? 0;
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
