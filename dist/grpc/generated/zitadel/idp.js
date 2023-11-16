"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LDAPAttributes = exports.Options = exports.AzureADConfig = exports.SAMLConfig = exports.LDAPConfig = exports.GitLabSelfHostedConfig = exports.GitLabConfig = exports.GoogleConfig = exports.GitHubEnterpriseServerConfig = exports.GitHubConfig = exports.GenericOIDCConfig = exports.OAuthConfig = exports.ProviderConfig = exports.Provider = exports.IDPOwnerTypeQuery = exports.IDPNameQuery = exports.IDPIDQuery = exports.JWTConfig = exports.OIDCConfig = exports.IDPLoginPolicyLink = exports.IDPUserLink = exports.IDP = exports.azureADTenantTypeToJSON = exports.azureADTenantTypeFromJSON = exports.AzureADTenantType = exports.sAMLBindingToJSON = exports.sAMLBindingFromJSON = exports.SAMLBinding = exports.providerTypeToJSON = exports.providerTypeFromJSON = exports.ProviderType = exports.iDPFieldNameToJSON = exports.iDPFieldNameFromJSON = exports.IDPFieldName = exports.oIDCMappingFieldToJSON = exports.oIDCMappingFieldFromJSON = exports.OIDCMappingField = exports.iDPOwnerTypeToJSON = exports.iDPOwnerTypeFromJSON = exports.IDPOwnerType = exports.iDPTypeToJSON = exports.iDPTypeFromJSON = exports.IDPType = exports.iDPStylingTypeToJSON = exports.iDPStylingTypeFromJSON = exports.IDPStylingType = exports.iDPStateToJSON = exports.iDPStateFromJSON = exports.IDPState = exports.protobufPackage = void 0;
exports.AppleConfig = exports.AzureADTenant = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../google/protobuf/duration");
const object_1 = require("./object");
exports.protobufPackage = "zitadel.idp.v1";
var IDPState;
(function (IDPState) {
    IDPState[IDPState["IDP_STATE_UNSPECIFIED"] = 0] = "IDP_STATE_UNSPECIFIED";
    IDPState[IDPState["IDP_STATE_ACTIVE"] = 1] = "IDP_STATE_ACTIVE";
    IDPState[IDPState["IDP_STATE_INACTIVE"] = 2] = "IDP_STATE_INACTIVE";
    IDPState[IDPState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPState || (exports.IDPState = IDPState = {}));
function iDPStateFromJSON(object) {
    switch (object) {
        case 0:
        case "IDP_STATE_UNSPECIFIED":
            return IDPState.IDP_STATE_UNSPECIFIED;
        case 1:
        case "IDP_STATE_ACTIVE":
            return IDPState.IDP_STATE_ACTIVE;
        case 2:
        case "IDP_STATE_INACTIVE":
            return IDPState.IDP_STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPState.UNRECOGNIZED;
    }
}
exports.iDPStateFromJSON = iDPStateFromJSON;
function iDPStateToJSON(object) {
    switch (object) {
        case IDPState.IDP_STATE_UNSPECIFIED:
            return "IDP_STATE_UNSPECIFIED";
        case IDPState.IDP_STATE_ACTIVE:
            return "IDP_STATE_ACTIVE";
        case IDPState.IDP_STATE_INACTIVE:
            return "IDP_STATE_INACTIVE";
        case IDPState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPStateToJSON = iDPStateToJSON;
var IDPStylingType;
(function (IDPStylingType) {
    IDPStylingType[IDPStylingType["STYLING_TYPE_UNSPECIFIED"] = 0] = "STYLING_TYPE_UNSPECIFIED";
    IDPStylingType[IDPStylingType["STYLING_TYPE_GOOGLE"] = 1] = "STYLING_TYPE_GOOGLE";
    IDPStylingType[IDPStylingType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPStylingType || (exports.IDPStylingType = IDPStylingType = {}));
function iDPStylingTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STYLING_TYPE_UNSPECIFIED":
            return IDPStylingType.STYLING_TYPE_UNSPECIFIED;
        case 1:
        case "STYLING_TYPE_GOOGLE":
            return IDPStylingType.STYLING_TYPE_GOOGLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPStylingType.UNRECOGNIZED;
    }
}
exports.iDPStylingTypeFromJSON = iDPStylingTypeFromJSON;
function iDPStylingTypeToJSON(object) {
    switch (object) {
        case IDPStylingType.STYLING_TYPE_UNSPECIFIED:
            return "STYLING_TYPE_UNSPECIFIED";
        case IDPStylingType.STYLING_TYPE_GOOGLE:
            return "STYLING_TYPE_GOOGLE";
        case IDPStylingType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPStylingTypeToJSON = iDPStylingTypeToJSON;
/** authorization framework of the identity provider */
var IDPType;
(function (IDPType) {
    IDPType[IDPType["IDP_TYPE_UNSPECIFIED"] = 0] = "IDP_TYPE_UNSPECIFIED";
    IDPType[IDPType["IDP_TYPE_OIDC"] = 1] = "IDP_TYPE_OIDC";
    IDPType[IDPType["IDP_TYPE_JWT"] = 3] = "IDP_TYPE_JWT";
    IDPType[IDPType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPType || (exports.IDPType = IDPType = {}));
function iDPTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "IDP_TYPE_UNSPECIFIED":
            return IDPType.IDP_TYPE_UNSPECIFIED;
        case 1:
        case "IDP_TYPE_OIDC":
            return IDPType.IDP_TYPE_OIDC;
        case 3:
        case "IDP_TYPE_JWT":
            return IDPType.IDP_TYPE_JWT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPType.UNRECOGNIZED;
    }
}
exports.iDPTypeFromJSON = iDPTypeFromJSON;
function iDPTypeToJSON(object) {
    switch (object) {
        case IDPType.IDP_TYPE_UNSPECIFIED:
            return "IDP_TYPE_UNSPECIFIED";
        case IDPType.IDP_TYPE_OIDC:
            return "IDP_TYPE_OIDC";
        case IDPType.IDP_TYPE_JWT:
            return "IDP_TYPE_JWT";
        case IDPType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPTypeToJSON = iDPTypeToJSON;
/** the owner of the identity provider. */
var IDPOwnerType;
(function (IDPOwnerType) {
    IDPOwnerType[IDPOwnerType["IDP_OWNER_TYPE_UNSPECIFIED"] = 0] = "IDP_OWNER_TYPE_UNSPECIFIED";
    /** IDP_OWNER_TYPE_SYSTEM - system is managed by the ZITADEL administrators */
    IDPOwnerType[IDPOwnerType["IDP_OWNER_TYPE_SYSTEM"] = 1] = "IDP_OWNER_TYPE_SYSTEM";
    /** IDP_OWNER_TYPE_ORG - org is managed by de organization administrators */
    IDPOwnerType[IDPOwnerType["IDP_OWNER_TYPE_ORG"] = 2] = "IDP_OWNER_TYPE_ORG";
    IDPOwnerType[IDPOwnerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPOwnerType || (exports.IDPOwnerType = IDPOwnerType = {}));
function iDPOwnerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "IDP_OWNER_TYPE_UNSPECIFIED":
            return IDPOwnerType.IDP_OWNER_TYPE_UNSPECIFIED;
        case 1:
        case "IDP_OWNER_TYPE_SYSTEM":
            return IDPOwnerType.IDP_OWNER_TYPE_SYSTEM;
        case 2:
        case "IDP_OWNER_TYPE_ORG":
            return IDPOwnerType.IDP_OWNER_TYPE_ORG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPOwnerType.UNRECOGNIZED;
    }
}
exports.iDPOwnerTypeFromJSON = iDPOwnerTypeFromJSON;
function iDPOwnerTypeToJSON(object) {
    switch (object) {
        case IDPOwnerType.IDP_OWNER_TYPE_UNSPECIFIED:
            return "IDP_OWNER_TYPE_UNSPECIFIED";
        case IDPOwnerType.IDP_OWNER_TYPE_SYSTEM:
            return "IDP_OWNER_TYPE_SYSTEM";
        case IDPOwnerType.IDP_OWNER_TYPE_ORG:
            return "IDP_OWNER_TYPE_ORG";
        case IDPOwnerType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPOwnerTypeToJSON = iDPOwnerTypeToJSON;
var OIDCMappingField;
(function (OIDCMappingField) {
    OIDCMappingField[OIDCMappingField["OIDC_MAPPING_FIELD_UNSPECIFIED"] = 0] = "OIDC_MAPPING_FIELD_UNSPECIFIED";
    OIDCMappingField[OIDCMappingField["OIDC_MAPPING_FIELD_PREFERRED_USERNAME"] = 1] = "OIDC_MAPPING_FIELD_PREFERRED_USERNAME";
    OIDCMappingField[OIDCMappingField["OIDC_MAPPING_FIELD_EMAIL"] = 2] = "OIDC_MAPPING_FIELD_EMAIL";
    OIDCMappingField[OIDCMappingField["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OIDCMappingField || (exports.OIDCMappingField = OIDCMappingField = {}));
function oIDCMappingFieldFromJSON(object) {
    switch (object) {
        case 0:
        case "OIDC_MAPPING_FIELD_UNSPECIFIED":
            return OIDCMappingField.OIDC_MAPPING_FIELD_UNSPECIFIED;
        case 1:
        case "OIDC_MAPPING_FIELD_PREFERRED_USERNAME":
            return OIDCMappingField.OIDC_MAPPING_FIELD_PREFERRED_USERNAME;
        case 2:
        case "OIDC_MAPPING_FIELD_EMAIL":
            return OIDCMappingField.OIDC_MAPPING_FIELD_EMAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OIDCMappingField.UNRECOGNIZED;
    }
}
exports.oIDCMappingFieldFromJSON = oIDCMappingFieldFromJSON;
function oIDCMappingFieldToJSON(object) {
    switch (object) {
        case OIDCMappingField.OIDC_MAPPING_FIELD_UNSPECIFIED:
            return "OIDC_MAPPING_FIELD_UNSPECIFIED";
        case OIDCMappingField.OIDC_MAPPING_FIELD_PREFERRED_USERNAME:
            return "OIDC_MAPPING_FIELD_PREFERRED_USERNAME";
        case OIDCMappingField.OIDC_MAPPING_FIELD_EMAIL:
            return "OIDC_MAPPING_FIELD_EMAIL";
        case OIDCMappingField.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.oIDCMappingFieldToJSON = oIDCMappingFieldToJSON;
var IDPFieldName;
(function (IDPFieldName) {
    IDPFieldName[IDPFieldName["IDP_FIELD_NAME_UNSPECIFIED"] = 0] = "IDP_FIELD_NAME_UNSPECIFIED";
    IDPFieldName[IDPFieldName["IDP_FIELD_NAME_NAME"] = 1] = "IDP_FIELD_NAME_NAME";
    IDPFieldName[IDPFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPFieldName || (exports.IDPFieldName = IDPFieldName = {}));
function iDPFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "IDP_FIELD_NAME_UNSPECIFIED":
            return IDPFieldName.IDP_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "IDP_FIELD_NAME_NAME":
            return IDPFieldName.IDP_FIELD_NAME_NAME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPFieldName.UNRECOGNIZED;
    }
}
exports.iDPFieldNameFromJSON = iDPFieldNameFromJSON;
function iDPFieldNameToJSON(object) {
    switch (object) {
        case IDPFieldName.IDP_FIELD_NAME_UNSPECIFIED:
            return "IDP_FIELD_NAME_UNSPECIFIED";
        case IDPFieldName.IDP_FIELD_NAME_NAME:
            return "IDP_FIELD_NAME_NAME";
        case IDPFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPFieldNameToJSON = iDPFieldNameToJSON;
var ProviderType;
(function (ProviderType) {
    ProviderType[ProviderType["PROVIDER_TYPE_UNSPECIFIED"] = 0] = "PROVIDER_TYPE_UNSPECIFIED";
    ProviderType[ProviderType["PROVIDER_TYPE_OIDC"] = 1] = "PROVIDER_TYPE_OIDC";
    ProviderType[ProviderType["PROVIDER_TYPE_JWT"] = 2] = "PROVIDER_TYPE_JWT";
    ProviderType[ProviderType["PROVIDER_TYPE_LDAP"] = 3] = "PROVIDER_TYPE_LDAP";
    ProviderType[ProviderType["PROVIDER_TYPE_OAUTH"] = 4] = "PROVIDER_TYPE_OAUTH";
    ProviderType[ProviderType["PROVIDER_TYPE_AZURE_AD"] = 5] = "PROVIDER_TYPE_AZURE_AD";
    ProviderType[ProviderType["PROVIDER_TYPE_GITHUB"] = 6] = "PROVIDER_TYPE_GITHUB";
    ProviderType[ProviderType["PROVIDER_TYPE_GITHUB_ES"] = 7] = "PROVIDER_TYPE_GITHUB_ES";
    ProviderType[ProviderType["PROVIDER_TYPE_GITLAB"] = 8] = "PROVIDER_TYPE_GITLAB";
    ProviderType[ProviderType["PROVIDER_TYPE_GITLAB_SELF_HOSTED"] = 9] = "PROVIDER_TYPE_GITLAB_SELF_HOSTED";
    ProviderType[ProviderType["PROVIDER_TYPE_GOOGLE"] = 10] = "PROVIDER_TYPE_GOOGLE";
    ProviderType[ProviderType["PROVIDER_TYPE_APPLE"] = 11] = "PROVIDER_TYPE_APPLE";
    ProviderType[ProviderType["PROVIDER_TYPE_SAML"] = 12] = "PROVIDER_TYPE_SAML";
    ProviderType[ProviderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProviderType || (exports.ProviderType = ProviderType = {}));
function providerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "PROVIDER_TYPE_UNSPECIFIED":
            return ProviderType.PROVIDER_TYPE_UNSPECIFIED;
        case 1:
        case "PROVIDER_TYPE_OIDC":
            return ProviderType.PROVIDER_TYPE_OIDC;
        case 2:
        case "PROVIDER_TYPE_JWT":
            return ProviderType.PROVIDER_TYPE_JWT;
        case 3:
        case "PROVIDER_TYPE_LDAP":
            return ProviderType.PROVIDER_TYPE_LDAP;
        case 4:
        case "PROVIDER_TYPE_OAUTH":
            return ProviderType.PROVIDER_TYPE_OAUTH;
        case 5:
        case "PROVIDER_TYPE_AZURE_AD":
            return ProviderType.PROVIDER_TYPE_AZURE_AD;
        case 6:
        case "PROVIDER_TYPE_GITHUB":
            return ProviderType.PROVIDER_TYPE_GITHUB;
        case 7:
        case "PROVIDER_TYPE_GITHUB_ES":
            return ProviderType.PROVIDER_TYPE_GITHUB_ES;
        case 8:
        case "PROVIDER_TYPE_GITLAB":
            return ProviderType.PROVIDER_TYPE_GITLAB;
        case 9:
        case "PROVIDER_TYPE_GITLAB_SELF_HOSTED":
            return ProviderType.PROVIDER_TYPE_GITLAB_SELF_HOSTED;
        case 10:
        case "PROVIDER_TYPE_GOOGLE":
            return ProviderType.PROVIDER_TYPE_GOOGLE;
        case 11:
        case "PROVIDER_TYPE_APPLE":
            return ProviderType.PROVIDER_TYPE_APPLE;
        case 12:
        case "PROVIDER_TYPE_SAML":
            return ProviderType.PROVIDER_TYPE_SAML;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProviderType.UNRECOGNIZED;
    }
}
exports.providerTypeFromJSON = providerTypeFromJSON;
function providerTypeToJSON(object) {
    switch (object) {
        case ProviderType.PROVIDER_TYPE_UNSPECIFIED:
            return "PROVIDER_TYPE_UNSPECIFIED";
        case ProviderType.PROVIDER_TYPE_OIDC:
            return "PROVIDER_TYPE_OIDC";
        case ProviderType.PROVIDER_TYPE_JWT:
            return "PROVIDER_TYPE_JWT";
        case ProviderType.PROVIDER_TYPE_LDAP:
            return "PROVIDER_TYPE_LDAP";
        case ProviderType.PROVIDER_TYPE_OAUTH:
            return "PROVIDER_TYPE_OAUTH";
        case ProviderType.PROVIDER_TYPE_AZURE_AD:
            return "PROVIDER_TYPE_AZURE_AD";
        case ProviderType.PROVIDER_TYPE_GITHUB:
            return "PROVIDER_TYPE_GITHUB";
        case ProviderType.PROVIDER_TYPE_GITHUB_ES:
            return "PROVIDER_TYPE_GITHUB_ES";
        case ProviderType.PROVIDER_TYPE_GITLAB:
            return "PROVIDER_TYPE_GITLAB";
        case ProviderType.PROVIDER_TYPE_GITLAB_SELF_HOSTED:
            return "PROVIDER_TYPE_GITLAB_SELF_HOSTED";
        case ProviderType.PROVIDER_TYPE_GOOGLE:
            return "PROVIDER_TYPE_GOOGLE";
        case ProviderType.PROVIDER_TYPE_APPLE:
            return "PROVIDER_TYPE_APPLE";
        case ProviderType.PROVIDER_TYPE_SAML:
            return "PROVIDER_TYPE_SAML";
        case ProviderType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.providerTypeToJSON = providerTypeToJSON;
var SAMLBinding;
(function (SAMLBinding) {
    SAMLBinding[SAMLBinding["SAML_BINDING_UNSPECIFIED"] = 0] = "SAML_BINDING_UNSPECIFIED";
    SAMLBinding[SAMLBinding["SAML_BINDING_POST"] = 1] = "SAML_BINDING_POST";
    SAMLBinding[SAMLBinding["SAML_BINDING_REDIRECT"] = 2] = "SAML_BINDING_REDIRECT";
    SAMLBinding[SAMLBinding["SAML_BINDING_ARTIFACT"] = 3] = "SAML_BINDING_ARTIFACT";
    SAMLBinding[SAMLBinding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SAMLBinding || (exports.SAMLBinding = SAMLBinding = {}));
function sAMLBindingFromJSON(object) {
    switch (object) {
        case 0:
        case "SAML_BINDING_UNSPECIFIED":
            return SAMLBinding.SAML_BINDING_UNSPECIFIED;
        case 1:
        case "SAML_BINDING_POST":
            return SAMLBinding.SAML_BINDING_POST;
        case 2:
        case "SAML_BINDING_REDIRECT":
            return SAMLBinding.SAML_BINDING_REDIRECT;
        case 3:
        case "SAML_BINDING_ARTIFACT":
            return SAMLBinding.SAML_BINDING_ARTIFACT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SAMLBinding.UNRECOGNIZED;
    }
}
exports.sAMLBindingFromJSON = sAMLBindingFromJSON;
function sAMLBindingToJSON(object) {
    switch (object) {
        case SAMLBinding.SAML_BINDING_UNSPECIFIED:
            return "SAML_BINDING_UNSPECIFIED";
        case SAMLBinding.SAML_BINDING_POST:
            return "SAML_BINDING_POST";
        case SAMLBinding.SAML_BINDING_REDIRECT:
            return "SAML_BINDING_REDIRECT";
        case SAMLBinding.SAML_BINDING_ARTIFACT:
            return "SAML_BINDING_ARTIFACT";
        case SAMLBinding.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sAMLBindingToJSON = sAMLBindingToJSON;
var AzureADTenantType;
(function (AzureADTenantType) {
    AzureADTenantType[AzureADTenantType["AZURE_AD_TENANT_TYPE_COMMON"] = 0] = "AZURE_AD_TENANT_TYPE_COMMON";
    AzureADTenantType[AzureADTenantType["AZURE_AD_TENANT_TYPE_ORGANISATIONS"] = 1] = "AZURE_AD_TENANT_TYPE_ORGANISATIONS";
    AzureADTenantType[AzureADTenantType["AZURE_AD_TENANT_TYPE_CONSUMERS"] = 2] = "AZURE_AD_TENANT_TYPE_CONSUMERS";
    AzureADTenantType[AzureADTenantType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AzureADTenantType || (exports.AzureADTenantType = AzureADTenantType = {}));
function azureADTenantTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AZURE_AD_TENANT_TYPE_COMMON":
            return AzureADTenantType.AZURE_AD_TENANT_TYPE_COMMON;
        case 1:
        case "AZURE_AD_TENANT_TYPE_ORGANISATIONS":
            return AzureADTenantType.AZURE_AD_TENANT_TYPE_ORGANISATIONS;
        case 2:
        case "AZURE_AD_TENANT_TYPE_CONSUMERS":
            return AzureADTenantType.AZURE_AD_TENANT_TYPE_CONSUMERS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AzureADTenantType.UNRECOGNIZED;
    }
}
exports.azureADTenantTypeFromJSON = azureADTenantTypeFromJSON;
function azureADTenantTypeToJSON(object) {
    switch (object) {
        case AzureADTenantType.AZURE_AD_TENANT_TYPE_COMMON:
            return "AZURE_AD_TENANT_TYPE_COMMON";
        case AzureADTenantType.AZURE_AD_TENANT_TYPE_ORGANISATIONS:
            return "AZURE_AD_TENANT_TYPE_ORGANISATIONS";
        case AzureADTenantType.AZURE_AD_TENANT_TYPE_CONSUMERS:
            return "AZURE_AD_TENANT_TYPE_CONSUMERS";
        case AzureADTenantType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.azureADTenantTypeToJSON = azureADTenantTypeToJSON;
function createBaseIDP() {
    return {
        id: "",
        details: undefined,
        state: 0,
        name: "",
        stylingType: 0,
        owner: 0,
        oidcConfig: undefined,
        jwtConfig: undefined,
        autoRegister: false,
    };
}
exports.IDP = {
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
        if (message.stylingType !== 0) {
            writer.uint32(40).int32(message.stylingType);
        }
        if (message.owner !== 0) {
            writer.uint32(48).int32(message.owner);
        }
        if (message.oidcConfig !== undefined) {
            exports.OIDCConfig.encode(message.oidcConfig, writer.uint32(58).fork()).ldelim();
        }
        if (message.jwtConfig !== undefined) {
            exports.JWTConfig.encode(message.jwtConfig, writer.uint32(74).fork()).ldelim();
        }
        if (message.autoRegister === true) {
            writer.uint32(64).bool(message.autoRegister);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDP();
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
                    if (tag !== 40) {
                        break;
                    }
                    message.stylingType = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.owner = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.oidcConfig = exports.OIDCConfig.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.jwtConfig = exports.JWTConfig.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.autoRegister = reader.bool();
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
            state: isSet(object.state) ? iDPStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            stylingType: isSet(object.stylingType) ? iDPStylingTypeFromJSON(object.stylingType) : 0,
            owner: isSet(object.owner) ? iDPOwnerTypeFromJSON(object.owner) : 0,
            oidcConfig: isSet(object.oidcConfig) ? exports.OIDCConfig.fromJSON(object.oidcConfig) : undefined,
            jwtConfig: isSet(object.jwtConfig) ? exports.JWTConfig.fromJSON(object.jwtConfig) : undefined,
            autoRegister: isSet(object.autoRegister) ? Boolean(object.autoRegister) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.state !== undefined && (obj.state = iDPStateToJSON(message.state));
        message.name !== undefined && (obj.name = message.name);
        message.stylingType !== undefined && (obj.stylingType = iDPStylingTypeToJSON(message.stylingType));
        message.owner !== undefined && (obj.owner = iDPOwnerTypeToJSON(message.owner));
        message.oidcConfig !== undefined &&
            (obj.oidcConfig = message.oidcConfig ? exports.OIDCConfig.toJSON(message.oidcConfig) : undefined);
        message.jwtConfig !== undefined &&
            (obj.jwtConfig = message.jwtConfig ? exports.JWTConfig.toJSON(message.jwtConfig) : undefined);
        message.autoRegister !== undefined && (obj.autoRegister = message.autoRegister);
        return obj;
    },
    create(base) {
        return exports.IDP.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDP();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.name = object.name ?? "";
        message.stylingType = object.stylingType ?? 0;
        message.owner = object.owner ?? 0;
        message.oidcConfig = (object.oidcConfig !== undefined && object.oidcConfig !== null)
            ? exports.OIDCConfig.fromPartial(object.oidcConfig)
            : undefined;
        message.jwtConfig = (object.jwtConfig !== undefined && object.jwtConfig !== null)
            ? exports.JWTConfig.fromPartial(object.jwtConfig)
            : undefined;
        message.autoRegister = object.autoRegister ?? false;
        return message;
    },
};
function createBaseIDPUserLink() {
    return { userId: "", idpId: "", idpName: "", providedUserId: "", providedUserName: "", idpType: 0 };
}
exports.IDPUserLink = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.idpId !== "") {
            writer.uint32(18).string(message.idpId);
        }
        if (message.idpName !== "") {
            writer.uint32(26).string(message.idpName);
        }
        if (message.providedUserId !== "") {
            writer.uint32(34).string(message.providedUserId);
        }
        if (message.providedUserName !== "") {
            writer.uint32(42).string(message.providedUserName);
        }
        if (message.idpType !== 0) {
            writer.uint32(48).int32(message.idpType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPUserLink();
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
                    message.idpId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.idpName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.providedUserId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.providedUserName = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.idpType = reader.int32();
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
            idpId: isSet(object.idpId) ? String(object.idpId) : "",
            idpName: isSet(object.idpName) ? String(object.idpName) : "",
            providedUserId: isSet(object.providedUserId) ? String(object.providedUserId) : "",
            providedUserName: isSet(object.providedUserName) ? String(object.providedUserName) : "",
            idpType: isSet(object.idpType) ? iDPTypeFromJSON(object.idpType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.idpId !== undefined && (obj.idpId = message.idpId);
        message.idpName !== undefined && (obj.idpName = message.idpName);
        message.providedUserId !== undefined && (obj.providedUserId = message.providedUserId);
        message.providedUserName !== undefined && (obj.providedUserName = message.providedUserName);
        message.idpType !== undefined && (obj.idpType = iDPTypeToJSON(message.idpType));
        return obj;
    },
    create(base) {
        return exports.IDPUserLink.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPUserLink();
        message.userId = object.userId ?? "";
        message.idpId = object.idpId ?? "";
        message.idpName = object.idpName ?? "";
        message.providedUserId = object.providedUserId ?? "";
        message.providedUserName = object.providedUserName ?? "";
        message.idpType = object.idpType ?? 0;
        return message;
    },
};
function createBaseIDPLoginPolicyLink() {
    return { idpId: "", idpName: "", idpType: 0 };
}
exports.IDPLoginPolicyLink = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.idpName !== "") {
            writer.uint32(18).string(message.idpName);
        }
        if (message.idpType !== 0) {
            writer.uint32(24).int32(message.idpType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPLoginPolicyLink();
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
                    message.idpName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.idpType = reader.int32();
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
            idpName: isSet(object.idpName) ? String(object.idpName) : "",
            idpType: isSet(object.idpType) ? iDPTypeFromJSON(object.idpType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idpId !== undefined && (obj.idpId = message.idpId);
        message.idpName !== undefined && (obj.idpName = message.idpName);
        message.idpType !== undefined && (obj.idpType = iDPTypeToJSON(message.idpType));
        return obj;
    },
    create(base) {
        return exports.IDPLoginPolicyLink.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPLoginPolicyLink();
        message.idpId = object.idpId ?? "";
        message.idpName = object.idpName ?? "";
        message.idpType = object.idpType ?? 0;
        return message;
    },
};
function createBaseOIDCConfig() {
    return { clientId: "", issuer: "", scopes: [], displayNameMapping: 0, usernameMapping: 0 };
}
exports.OIDCConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        for (const v of message.scopes) {
            writer.uint32(26).string(v);
        }
        if (message.displayNameMapping !== 0) {
            writer.uint32(32).int32(message.displayNameMapping);
        }
        if (message.usernameMapping !== 0) {
            writer.uint32(40).int32(message.usernameMapping);
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
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.scopes.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.displayNameMapping = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.usernameMapping = reader.int32();
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
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
            displayNameMapping: isSet(object.displayNameMapping) ? oIDCMappingFieldFromJSON(object.displayNameMapping) : 0,
            usernameMapping: isSet(object.usernameMapping) ? oIDCMappingFieldFromJSON(object.usernameMapping) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        message.displayNameMapping !== undefined &&
            (obj.displayNameMapping = oIDCMappingFieldToJSON(message.displayNameMapping));
        message.usernameMapping !== undefined && (obj.usernameMapping = oIDCMappingFieldToJSON(message.usernameMapping));
        return obj;
    },
    create(base) {
        return exports.OIDCConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOIDCConfig();
        message.clientId = object.clientId ?? "";
        message.issuer = object.issuer ?? "";
        message.scopes = object.scopes?.map((e) => e) || [];
        message.displayNameMapping = object.displayNameMapping ?? 0;
        message.usernameMapping = object.usernameMapping ?? 0;
        return message;
    },
};
function createBaseJWTConfig() {
    return { jwtEndpoint: "", issuer: "", keysEndpoint: "", headerName: "" };
}
exports.JWTConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.jwtEndpoint !== "") {
            writer.uint32(10).string(message.jwtEndpoint);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        if (message.keysEndpoint !== "") {
            writer.uint32(26).string(message.keysEndpoint);
        }
        if (message.headerName !== "") {
            writer.uint32(34).string(message.headerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJWTConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.jwtEndpoint = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.keysEndpoint = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.headerName = reader.string();
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
            jwtEndpoint: isSet(object.jwtEndpoint) ? String(object.jwtEndpoint) : "",
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            keysEndpoint: isSet(object.keysEndpoint) ? String(object.keysEndpoint) : "",
            headerName: isSet(object.headerName) ? String(object.headerName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.jwtEndpoint !== undefined && (obj.jwtEndpoint = message.jwtEndpoint);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.keysEndpoint !== undefined && (obj.keysEndpoint = message.keysEndpoint);
        message.headerName !== undefined && (obj.headerName = message.headerName);
        return obj;
    },
    create(base) {
        return exports.JWTConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseJWTConfig();
        message.jwtEndpoint = object.jwtEndpoint ?? "";
        message.issuer = object.issuer ?? "";
        message.keysEndpoint = object.keysEndpoint ?? "";
        message.headerName = object.headerName ?? "";
        return message;
    },
};
function createBaseIDPIDQuery() {
    return { id: "" };
}
exports.IDPIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPIDQuery();
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
        return exports.IDPIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPIDQuery();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseIDPNameQuery() {
    return { name: "", method: 0 };
}
exports.IDPNameQuery = {
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
        const message = createBaseIDPNameQuery();
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
        return exports.IDPNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPNameQuery();
        message.name = object.name ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseIDPOwnerTypeQuery() {
    return { ownerType: 0 };
}
exports.IDPOwnerTypeQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ownerType !== 0) {
            writer.uint32(8).int32(message.ownerType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPOwnerTypeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ownerType = reader.int32();
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
        return { ownerType: isSet(object.ownerType) ? iDPOwnerTypeFromJSON(object.ownerType) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.ownerType !== undefined && (obj.ownerType = iDPOwnerTypeToJSON(message.ownerType));
        return obj;
    },
    create(base) {
        return exports.IDPOwnerTypeQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPOwnerTypeQuery();
        message.ownerType = object.ownerType ?? 0;
        return message;
    },
};
function createBaseProvider() {
    return { id: "", details: undefined, state: 0, name: "", owner: 0, type: 0, config: undefined };
}
exports.Provider = {
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
        if (message.owner !== 0) {
            writer.uint32(40).int32(message.owner);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        if (message.config !== undefined) {
            exports.ProviderConfig.encode(message.config, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProvider();
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
                    if (tag !== 40) {
                        break;
                    }
                    message.owner = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.config = exports.ProviderConfig.decode(reader, reader.uint32());
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
            state: isSet(object.state) ? iDPStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            owner: isSet(object.owner) ? iDPOwnerTypeFromJSON(object.owner) : 0,
            type: isSet(object.type) ? providerTypeFromJSON(object.type) : 0,
            config: isSet(object.config) ? exports.ProviderConfig.fromJSON(object.config) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.state !== undefined && (obj.state = iDPStateToJSON(message.state));
        message.name !== undefined && (obj.name = message.name);
        message.owner !== undefined && (obj.owner = iDPOwnerTypeToJSON(message.owner));
        message.type !== undefined && (obj.type = providerTypeToJSON(message.type));
        message.config !== undefined && (obj.config = message.config ? exports.ProviderConfig.toJSON(message.config) : undefined);
        return obj;
    },
    create(base) {
        return exports.Provider.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProvider();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.name = object.name ?? "";
        message.owner = object.owner ?? 0;
        message.type = object.type ?? 0;
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.ProviderConfig.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBaseProviderConfig() {
    return {
        options: undefined,
        ldap: undefined,
        google: undefined,
        oauth: undefined,
        oidc: undefined,
        jwt: undefined,
        github: undefined,
        githubEs: undefined,
        gitlab: undefined,
        gitlabSelfHosted: undefined,
        azureAd: undefined,
        apple: undefined,
        saml: undefined,
    };
}
exports.ProviderConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.options !== undefined) {
            exports.Options.encode(message.options, writer.uint32(10).fork()).ldelim();
        }
        if (message.ldap !== undefined) {
            exports.LDAPConfig.encode(message.ldap, writer.uint32(18).fork()).ldelim();
        }
        if (message.google !== undefined) {
            exports.GoogleConfig.encode(message.google, writer.uint32(26).fork()).ldelim();
        }
        if (message.oauth !== undefined) {
            exports.OAuthConfig.encode(message.oauth, writer.uint32(34).fork()).ldelim();
        }
        if (message.oidc !== undefined) {
            exports.GenericOIDCConfig.encode(message.oidc, writer.uint32(42).fork()).ldelim();
        }
        if (message.jwt !== undefined) {
            exports.JWTConfig.encode(message.jwt, writer.uint32(50).fork()).ldelim();
        }
        if (message.github !== undefined) {
            exports.GitHubConfig.encode(message.github, writer.uint32(58).fork()).ldelim();
        }
        if (message.githubEs !== undefined) {
            exports.GitHubEnterpriseServerConfig.encode(message.githubEs, writer.uint32(66).fork()).ldelim();
        }
        if (message.gitlab !== undefined) {
            exports.GitLabConfig.encode(message.gitlab, writer.uint32(74).fork()).ldelim();
        }
        if (message.gitlabSelfHosted !== undefined) {
            exports.GitLabSelfHostedConfig.encode(message.gitlabSelfHosted, writer.uint32(82).fork()).ldelim();
        }
        if (message.azureAd !== undefined) {
            exports.AzureADConfig.encode(message.azureAd, writer.uint32(90).fork()).ldelim();
        }
        if (message.apple !== undefined) {
            exports.AppleConfig.encode(message.apple, writer.uint32(98).fork()).ldelim();
        }
        if (message.saml !== undefined) {
            exports.SAMLConfig.encode(message.saml, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.options = exports.Options.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ldap = exports.LDAPConfig.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.google = exports.GoogleConfig.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.oauth = exports.OAuthConfig.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.oidc = exports.GenericOIDCConfig.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.jwt = exports.JWTConfig.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.github = exports.GitHubConfig.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.githubEs = exports.GitHubEnterpriseServerConfig.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.gitlab = exports.GitLabConfig.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.gitlabSelfHosted = exports.GitLabSelfHostedConfig.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.azureAd = exports.AzureADConfig.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.apple = exports.AppleConfig.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.saml = exports.SAMLConfig.decode(reader, reader.uint32());
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
            options: isSet(object.options) ? exports.Options.fromJSON(object.options) : undefined,
            ldap: isSet(object.ldap) ? exports.LDAPConfig.fromJSON(object.ldap) : undefined,
            google: isSet(object.google) ? exports.GoogleConfig.fromJSON(object.google) : undefined,
            oauth: isSet(object.oauth) ? exports.OAuthConfig.fromJSON(object.oauth) : undefined,
            oidc: isSet(object.oidc) ? exports.GenericOIDCConfig.fromJSON(object.oidc) : undefined,
            jwt: isSet(object.jwt) ? exports.JWTConfig.fromJSON(object.jwt) : undefined,
            github: isSet(object.github) ? exports.GitHubConfig.fromJSON(object.github) : undefined,
            githubEs: isSet(object.githubEs) ? exports.GitHubEnterpriseServerConfig.fromJSON(object.githubEs) : undefined,
            gitlab: isSet(object.gitlab) ? exports.GitLabConfig.fromJSON(object.gitlab) : undefined,
            gitlabSelfHosted: isSet(object.gitlabSelfHosted)
                ? exports.GitLabSelfHostedConfig.fromJSON(object.gitlabSelfHosted)
                : undefined,
            azureAd: isSet(object.azureAd) ? exports.AzureADConfig.fromJSON(object.azureAd) : undefined,
            apple: isSet(object.apple) ? exports.AppleConfig.fromJSON(object.apple) : undefined,
            saml: isSet(object.saml) ? exports.SAMLConfig.fromJSON(object.saml) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.options !== undefined && (obj.options = message.options ? exports.Options.toJSON(message.options) : undefined);
        message.ldap !== undefined && (obj.ldap = message.ldap ? exports.LDAPConfig.toJSON(message.ldap) : undefined);
        message.google !== undefined && (obj.google = message.google ? exports.GoogleConfig.toJSON(message.google) : undefined);
        message.oauth !== undefined && (obj.oauth = message.oauth ? exports.OAuthConfig.toJSON(message.oauth) : undefined);
        message.oidc !== undefined && (obj.oidc = message.oidc ? exports.GenericOIDCConfig.toJSON(message.oidc) : undefined);
        message.jwt !== undefined && (obj.jwt = message.jwt ? exports.JWTConfig.toJSON(message.jwt) : undefined);
        message.github !== undefined && (obj.github = message.github ? exports.GitHubConfig.toJSON(message.github) : undefined);
        message.githubEs !== undefined &&
            (obj.githubEs = message.githubEs ? exports.GitHubEnterpriseServerConfig.toJSON(message.githubEs) : undefined);
        message.gitlab !== undefined && (obj.gitlab = message.gitlab ? exports.GitLabConfig.toJSON(message.gitlab) : undefined);
        message.gitlabSelfHosted !== undefined && (obj.gitlabSelfHosted = message.gitlabSelfHosted
            ? exports.GitLabSelfHostedConfig.toJSON(message.gitlabSelfHosted)
            : undefined);
        message.azureAd !== undefined &&
            (obj.azureAd = message.azureAd ? exports.AzureADConfig.toJSON(message.azureAd) : undefined);
        message.apple !== undefined && (obj.apple = message.apple ? exports.AppleConfig.toJSON(message.apple) : undefined);
        message.saml !== undefined && (obj.saml = message.saml ? exports.SAMLConfig.toJSON(message.saml) : undefined);
        return obj;
    },
    create(base) {
        return exports.ProviderConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProviderConfig();
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.Options.fromPartial(object.options)
            : undefined;
        message.ldap = (object.ldap !== undefined && object.ldap !== null)
            ? exports.LDAPConfig.fromPartial(object.ldap)
            : undefined;
        message.google = (object.google !== undefined && object.google !== null)
            ? exports.GoogleConfig.fromPartial(object.google)
            : undefined;
        message.oauth = (object.oauth !== undefined && object.oauth !== null)
            ? exports.OAuthConfig.fromPartial(object.oauth)
            : undefined;
        message.oidc = (object.oidc !== undefined && object.oidc !== null)
            ? exports.GenericOIDCConfig.fromPartial(object.oidc)
            : undefined;
        message.jwt = (object.jwt !== undefined && object.jwt !== null) ? exports.JWTConfig.fromPartial(object.jwt) : undefined;
        message.github = (object.github !== undefined && object.github !== null)
            ? exports.GitHubConfig.fromPartial(object.github)
            : undefined;
        message.githubEs = (object.githubEs !== undefined && object.githubEs !== null)
            ? exports.GitHubEnterpriseServerConfig.fromPartial(object.githubEs)
            : undefined;
        message.gitlab = (object.gitlab !== undefined && object.gitlab !== null)
            ? exports.GitLabConfig.fromPartial(object.gitlab)
            : undefined;
        message.gitlabSelfHosted = (object.gitlabSelfHosted !== undefined && object.gitlabSelfHosted !== null)
            ? exports.GitLabSelfHostedConfig.fromPartial(object.gitlabSelfHosted)
            : undefined;
        message.azureAd = (object.azureAd !== undefined && object.azureAd !== null)
            ? exports.AzureADConfig.fromPartial(object.azureAd)
            : undefined;
        message.apple = (object.apple !== undefined && object.apple !== null)
            ? exports.AppleConfig.fromPartial(object.apple)
            : undefined;
        message.saml = (object.saml !== undefined && object.saml !== null)
            ? exports.SAMLConfig.fromPartial(object.saml)
            : undefined;
        return message;
    },
};
function createBaseOAuthConfig() {
    return { clientId: "", authorizationEndpoint: "", tokenEndpoint: "", userEndpoint: "", scopes: [], idAttribute: "" };
}
exports.OAuthConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.authorizationEndpoint !== "") {
            writer.uint32(18).string(message.authorizationEndpoint);
        }
        if (message.tokenEndpoint !== "") {
            writer.uint32(26).string(message.tokenEndpoint);
        }
        if (message.userEndpoint !== "") {
            writer.uint32(34).string(message.userEndpoint);
        }
        for (const v of message.scopes) {
            writer.uint32(42).string(v);
        }
        if (message.idAttribute !== "") {
            writer.uint32(50).string(message.idAttribute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOAuthConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.authorizationEndpoint = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tokenEndpoint = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userEndpoint = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.scopes.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.idAttribute = reader.string();
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
            authorizationEndpoint: isSet(object.authorizationEndpoint) ? String(object.authorizationEndpoint) : "",
            tokenEndpoint: isSet(object.tokenEndpoint) ? String(object.tokenEndpoint) : "",
            userEndpoint: isSet(object.userEndpoint) ? String(object.userEndpoint) : "",
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
            idAttribute: isSet(object.idAttribute) ? String(object.idAttribute) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.authorizationEndpoint !== undefined && (obj.authorizationEndpoint = message.authorizationEndpoint);
        message.tokenEndpoint !== undefined && (obj.tokenEndpoint = message.tokenEndpoint);
        message.userEndpoint !== undefined && (obj.userEndpoint = message.userEndpoint);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        message.idAttribute !== undefined && (obj.idAttribute = message.idAttribute);
        return obj;
    },
    create(base) {
        return exports.OAuthConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOAuthConfig();
        message.clientId = object.clientId ?? "";
        message.authorizationEndpoint = object.authorizationEndpoint ?? "";
        message.tokenEndpoint = object.tokenEndpoint ?? "";
        message.userEndpoint = object.userEndpoint ?? "";
        message.scopes = object.scopes?.map((e) => e) || [];
        message.idAttribute = object.idAttribute ?? "";
        return message;
    },
};
function createBaseGenericOIDCConfig() {
    return { issuer: "", clientId: "", scopes: [], isIdTokenMapping: false };
}
exports.GenericOIDCConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(26).string(v);
        }
        if (message.isIdTokenMapping === true) {
            writer.uint32(32).bool(message.isIdTokenMapping);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericOIDCConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.scopes.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isIdTokenMapping = reader.bool();
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
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
            isIdTokenMapping: isSet(object.isIdTokenMapping) ? Boolean(object.isIdTokenMapping) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        message.isIdTokenMapping !== undefined && (obj.isIdTokenMapping = message.isIdTokenMapping);
        return obj;
    },
    create(base) {
        return exports.GenericOIDCConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenericOIDCConfig();
        message.issuer = object.issuer ?? "";
        message.clientId = object.clientId ?? "";
        message.scopes = object.scopes?.map((e) => e) || [];
        message.isIdTokenMapping = object.isIdTokenMapping ?? false;
        return message;
    },
};
function createBaseGitHubConfig() {
    return { clientId: "", scopes: [] };
}
exports.GitHubConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGitHubConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        return obj;
    },
    create(base) {
        return exports.GitHubConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGitHubConfig();
        message.clientId = object.clientId ?? "";
        message.scopes = object.scopes?.map((e) => e) || [];
        return message;
    },
};
function createBaseGitHubEnterpriseServerConfig() {
    return { clientId: "", authorizationEndpoint: "", tokenEndpoint: "", userEndpoint: "", scopes: [] };
}
exports.GitHubEnterpriseServerConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.authorizationEndpoint !== "") {
            writer.uint32(18).string(message.authorizationEndpoint);
        }
        if (message.tokenEndpoint !== "") {
            writer.uint32(26).string(message.tokenEndpoint);
        }
        if (message.userEndpoint !== "") {
            writer.uint32(34).string(message.userEndpoint);
        }
        for (const v of message.scopes) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGitHubEnterpriseServerConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.authorizationEndpoint = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tokenEndpoint = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userEndpoint = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            authorizationEndpoint: isSet(object.authorizationEndpoint) ? String(object.authorizationEndpoint) : "",
            tokenEndpoint: isSet(object.tokenEndpoint) ? String(object.tokenEndpoint) : "",
            userEndpoint: isSet(object.userEndpoint) ? String(object.userEndpoint) : "",
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.authorizationEndpoint !== undefined && (obj.authorizationEndpoint = message.authorizationEndpoint);
        message.tokenEndpoint !== undefined && (obj.tokenEndpoint = message.tokenEndpoint);
        message.userEndpoint !== undefined && (obj.userEndpoint = message.userEndpoint);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        return obj;
    },
    create(base) {
        return exports.GitHubEnterpriseServerConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGitHubEnterpriseServerConfig();
        message.clientId = object.clientId ?? "";
        message.authorizationEndpoint = object.authorizationEndpoint ?? "";
        message.tokenEndpoint = object.tokenEndpoint ?? "";
        message.userEndpoint = object.userEndpoint ?? "";
        message.scopes = object.scopes?.map((e) => e) || [];
        return message;
    },
};
function createBaseGoogleConfig() {
    return { clientId: "", scopes: [] };
}
exports.GoogleConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGoogleConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        return obj;
    },
    create(base) {
        return exports.GoogleConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGoogleConfig();
        message.clientId = object.clientId ?? "";
        message.scopes = object.scopes?.map((e) => e) || [];
        return message;
    },
};
function createBaseGitLabConfig() {
    return { clientId: "", scopes: [] };
}
exports.GitLabConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGitLabConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        return obj;
    },
    create(base) {
        return exports.GitLabConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGitLabConfig();
        message.clientId = object.clientId ?? "";
        message.scopes = object.scopes?.map((e) => e) || [];
        return message;
    },
};
function createBaseGitLabSelfHostedConfig() {
    return { issuer: "", clientId: "", scopes: [] };
}
exports.GitLabSelfHostedConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGitLabSelfHostedConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        return obj;
    },
    create(base) {
        return exports.GitLabSelfHostedConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGitLabSelfHostedConfig();
        message.issuer = object.issuer ?? "";
        message.clientId = object.clientId ?? "";
        message.scopes = object.scopes?.map((e) => e) || [];
        return message;
    },
};
function createBaseLDAPConfig() {
    return {
        servers: [],
        startTls: false,
        baseDn: "",
        bindDn: "",
        userBase: "",
        userObjectClasses: [],
        userFilters: [],
        timeout: undefined,
        attributes: undefined,
    };
}
exports.LDAPConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.servers) {
            writer.uint32(10).string(v);
        }
        if (message.startTls === true) {
            writer.uint32(16).bool(message.startTls);
        }
        if (message.baseDn !== "") {
            writer.uint32(26).string(message.baseDn);
        }
        if (message.bindDn !== "") {
            writer.uint32(34).string(message.bindDn);
        }
        if (message.userBase !== "") {
            writer.uint32(42).string(message.userBase);
        }
        for (const v of message.userObjectClasses) {
            writer.uint32(50).string(v);
        }
        for (const v of message.userFilters) {
            writer.uint32(58).string(v);
        }
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(66).fork()).ldelim();
        }
        if (message.attributes !== undefined) {
            exports.LDAPAttributes.encode(message.attributes, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLDAPConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.servers.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.startTls = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.baseDn = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.bindDn = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.userBase = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.userObjectClasses.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.userFilters.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.attributes = exports.LDAPAttributes.decode(reader, reader.uint32());
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
            servers: Array.isArray(object?.servers) ? object.servers.map((e) => String(e)) : [],
            startTls: isSet(object.startTls) ? Boolean(object.startTls) : false,
            baseDn: isSet(object.baseDn) ? String(object.baseDn) : "",
            bindDn: isSet(object.bindDn) ? String(object.bindDn) : "",
            userBase: isSet(object.userBase) ? String(object.userBase) : "",
            userObjectClasses: Array.isArray(object?.userObjectClasses)
                ? object.userObjectClasses.map((e) => String(e))
                : [],
            userFilters: Array.isArray(object?.userFilters) ? object.userFilters.map((e) => String(e)) : [],
            timeout: isSet(object.timeout) ? duration_1.Duration.fromJSON(object.timeout) : undefined,
            attributes: isSet(object.attributes) ? exports.LDAPAttributes.fromJSON(object.attributes) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.servers) {
            obj.servers = message.servers.map((e) => e);
        }
        else {
            obj.servers = [];
        }
        message.startTls !== undefined && (obj.startTls = message.startTls);
        message.baseDn !== undefined && (obj.baseDn = message.baseDn);
        message.bindDn !== undefined && (obj.bindDn = message.bindDn);
        message.userBase !== undefined && (obj.userBase = message.userBase);
        if (message.userObjectClasses) {
            obj.userObjectClasses = message.userObjectClasses.map((e) => e);
        }
        else {
            obj.userObjectClasses = [];
        }
        if (message.userFilters) {
            obj.userFilters = message.userFilters.map((e) => e);
        }
        else {
            obj.userFilters = [];
        }
        message.timeout !== undefined && (obj.timeout = message.timeout ? duration_1.Duration.toJSON(message.timeout) : undefined);
        message.attributes !== undefined &&
            (obj.attributes = message.attributes ? exports.LDAPAttributes.toJSON(message.attributes) : undefined);
        return obj;
    },
    create(base) {
        return exports.LDAPConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLDAPConfig();
        message.servers = object.servers?.map((e) => e) || [];
        message.startTls = object.startTls ?? false;
        message.baseDn = object.baseDn ?? "";
        message.bindDn = object.bindDn ?? "";
        message.userBase = object.userBase ?? "";
        message.userObjectClasses = object.userObjectClasses?.map((e) => e) || [];
        message.userFilters = object.userFilters?.map((e) => e) || [];
        message.timeout = (object.timeout !== undefined && object.timeout !== null)
            ? duration_1.Duration.fromPartial(object.timeout)
            : undefined;
        message.attributes = (object.attributes !== undefined && object.attributes !== null)
            ? exports.LDAPAttributes.fromPartial(object.attributes)
            : undefined;
        return message;
    },
};
function createBaseSAMLConfig() {
    return { metadataXml: Buffer.alloc(0), binding: 0, withSignedRequest: false };
}
exports.SAMLConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadataXml.length !== 0) {
            writer.uint32(10).bytes(message.metadataXml);
        }
        if (message.binding !== 0) {
            writer.uint32(16).int32(message.binding);
        }
        if (message.withSignedRequest === true) {
            writer.uint32(24).bool(message.withSignedRequest);
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
                    if (tag !== 16) {
                        break;
                    }
                    message.binding = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.withSignedRequest = reader.bool();
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
            metadataXml: isSet(object.metadataXml) ? Buffer.from(bytesFromBase64(object.metadataXml)) : Buffer.alloc(0),
            binding: isSet(object.binding) ? sAMLBindingFromJSON(object.binding) : 0,
            withSignedRequest: isSet(object.withSignedRequest) ? Boolean(object.withSignedRequest) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.metadataXml !== undefined &&
            (obj.metadataXml = base64FromBytes(message.metadataXml !== undefined ? message.metadataXml : Buffer.alloc(0)));
        message.binding !== undefined && (obj.binding = sAMLBindingToJSON(message.binding));
        message.withSignedRequest !== undefined && (obj.withSignedRequest = message.withSignedRequest);
        return obj;
    },
    create(base) {
        return exports.SAMLConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSAMLConfig();
        message.metadataXml = object.metadataXml ?? Buffer.alloc(0);
        message.binding = object.binding ?? 0;
        message.withSignedRequest = object.withSignedRequest ?? false;
        return message;
    },
};
function createBaseAzureADConfig() {
    return { clientId: "", tenant: undefined, emailVerified: false, scopes: [] };
}
exports.AzureADConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.tenant !== undefined) {
            exports.AzureADTenant.encode(message.tenant, writer.uint32(18).fork()).ldelim();
        }
        if (message.emailVerified === true) {
            writer.uint32(24).bool(message.emailVerified);
        }
        for (const v of message.scopes) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAzureADConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tenant = exports.AzureADTenant.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.emailVerified = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            tenant: isSet(object.tenant) ? exports.AzureADTenant.fromJSON(object.tenant) : undefined,
            emailVerified: isSet(object.emailVerified) ? Boolean(object.emailVerified) : false,
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.tenant !== undefined && (obj.tenant = message.tenant ? exports.AzureADTenant.toJSON(message.tenant) : undefined);
        message.emailVerified !== undefined && (obj.emailVerified = message.emailVerified);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        return obj;
    },
    create(base) {
        return exports.AzureADConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAzureADConfig();
        message.clientId = object.clientId ?? "";
        message.tenant = (object.tenant !== undefined && object.tenant !== null)
            ? exports.AzureADTenant.fromPartial(object.tenant)
            : undefined;
        message.emailVerified = object.emailVerified ?? false;
        message.scopes = object.scopes?.map((e) => e) || [];
        return message;
    },
};
function createBaseOptions() {
    return { isLinkingAllowed: false, isCreationAllowed: false, isAutoCreation: false, isAutoUpdate: false };
}
exports.Options = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.isLinkingAllowed === true) {
            writer.uint32(8).bool(message.isLinkingAllowed);
        }
        if (message.isCreationAllowed === true) {
            writer.uint32(16).bool(message.isCreationAllowed);
        }
        if (message.isAutoCreation === true) {
            writer.uint32(24).bool(message.isAutoCreation);
        }
        if (message.isAutoUpdate === true) {
            writer.uint32(32).bool(message.isAutoUpdate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isLinkingAllowed = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isCreationAllowed = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isAutoCreation = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isAutoUpdate = reader.bool();
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
            isLinkingAllowed: isSet(object.isLinkingAllowed) ? Boolean(object.isLinkingAllowed) : false,
            isCreationAllowed: isSet(object.isCreationAllowed) ? Boolean(object.isCreationAllowed) : false,
            isAutoCreation: isSet(object.isAutoCreation) ? Boolean(object.isAutoCreation) : false,
            isAutoUpdate: isSet(object.isAutoUpdate) ? Boolean(object.isAutoUpdate) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.isLinkingAllowed !== undefined && (obj.isLinkingAllowed = message.isLinkingAllowed);
        message.isCreationAllowed !== undefined && (obj.isCreationAllowed = message.isCreationAllowed);
        message.isAutoCreation !== undefined && (obj.isAutoCreation = message.isAutoCreation);
        message.isAutoUpdate !== undefined && (obj.isAutoUpdate = message.isAutoUpdate);
        return obj;
    },
    create(base) {
        return exports.Options.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOptions();
        message.isLinkingAllowed = object.isLinkingAllowed ?? false;
        message.isCreationAllowed = object.isCreationAllowed ?? false;
        message.isAutoCreation = object.isAutoCreation ?? false;
        message.isAutoUpdate = object.isAutoUpdate ?? false;
        return message;
    },
};
function createBaseLDAPAttributes() {
    return {
        idAttribute: "",
        firstNameAttribute: "",
        lastNameAttribute: "",
        displayNameAttribute: "",
        nickNameAttribute: "",
        preferredUsernameAttribute: "",
        emailAttribute: "",
        emailVerifiedAttribute: "",
        phoneAttribute: "",
        phoneVerifiedAttribute: "",
        preferredLanguageAttribute: "",
        avatarUrlAttribute: "",
        profileAttribute: "",
    };
}
exports.LDAPAttributes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idAttribute !== "") {
            writer.uint32(10).string(message.idAttribute);
        }
        if (message.firstNameAttribute !== "") {
            writer.uint32(18).string(message.firstNameAttribute);
        }
        if (message.lastNameAttribute !== "") {
            writer.uint32(26).string(message.lastNameAttribute);
        }
        if (message.displayNameAttribute !== "") {
            writer.uint32(34).string(message.displayNameAttribute);
        }
        if (message.nickNameAttribute !== "") {
            writer.uint32(42).string(message.nickNameAttribute);
        }
        if (message.preferredUsernameAttribute !== "") {
            writer.uint32(50).string(message.preferredUsernameAttribute);
        }
        if (message.emailAttribute !== "") {
            writer.uint32(58).string(message.emailAttribute);
        }
        if (message.emailVerifiedAttribute !== "") {
            writer.uint32(66).string(message.emailVerifiedAttribute);
        }
        if (message.phoneAttribute !== "") {
            writer.uint32(74).string(message.phoneAttribute);
        }
        if (message.phoneVerifiedAttribute !== "") {
            writer.uint32(82).string(message.phoneVerifiedAttribute);
        }
        if (message.preferredLanguageAttribute !== "") {
            writer.uint32(90).string(message.preferredLanguageAttribute);
        }
        if (message.avatarUrlAttribute !== "") {
            writer.uint32(98).string(message.avatarUrlAttribute);
        }
        if (message.profileAttribute !== "") {
            writer.uint32(106).string(message.profileAttribute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLDAPAttributes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idAttribute = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.firstNameAttribute = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.lastNameAttribute = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.displayNameAttribute = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.nickNameAttribute = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.preferredUsernameAttribute = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.emailAttribute = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.emailVerifiedAttribute = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.phoneAttribute = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.phoneVerifiedAttribute = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.preferredLanguageAttribute = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.avatarUrlAttribute = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.profileAttribute = reader.string();
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
            idAttribute: isSet(object.idAttribute) ? String(object.idAttribute) : "",
            firstNameAttribute: isSet(object.firstNameAttribute) ? String(object.firstNameAttribute) : "",
            lastNameAttribute: isSet(object.lastNameAttribute) ? String(object.lastNameAttribute) : "",
            displayNameAttribute: isSet(object.displayNameAttribute) ? String(object.displayNameAttribute) : "",
            nickNameAttribute: isSet(object.nickNameAttribute) ? String(object.nickNameAttribute) : "",
            preferredUsernameAttribute: isSet(object.preferredUsernameAttribute)
                ? String(object.preferredUsernameAttribute)
                : "",
            emailAttribute: isSet(object.emailAttribute) ? String(object.emailAttribute) : "",
            emailVerifiedAttribute: isSet(object.emailVerifiedAttribute) ? String(object.emailVerifiedAttribute) : "",
            phoneAttribute: isSet(object.phoneAttribute) ? String(object.phoneAttribute) : "",
            phoneVerifiedAttribute: isSet(object.phoneVerifiedAttribute) ? String(object.phoneVerifiedAttribute) : "",
            preferredLanguageAttribute: isSet(object.preferredLanguageAttribute)
                ? String(object.preferredLanguageAttribute)
                : "",
            avatarUrlAttribute: isSet(object.avatarUrlAttribute) ? String(object.avatarUrlAttribute) : "",
            profileAttribute: isSet(object.profileAttribute) ? String(object.profileAttribute) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.idAttribute !== undefined && (obj.idAttribute = message.idAttribute);
        message.firstNameAttribute !== undefined && (obj.firstNameAttribute = message.firstNameAttribute);
        message.lastNameAttribute !== undefined && (obj.lastNameAttribute = message.lastNameAttribute);
        message.displayNameAttribute !== undefined && (obj.displayNameAttribute = message.displayNameAttribute);
        message.nickNameAttribute !== undefined && (obj.nickNameAttribute = message.nickNameAttribute);
        message.preferredUsernameAttribute !== undefined &&
            (obj.preferredUsernameAttribute = message.preferredUsernameAttribute);
        message.emailAttribute !== undefined && (obj.emailAttribute = message.emailAttribute);
        message.emailVerifiedAttribute !== undefined && (obj.emailVerifiedAttribute = message.emailVerifiedAttribute);
        message.phoneAttribute !== undefined && (obj.phoneAttribute = message.phoneAttribute);
        message.phoneVerifiedAttribute !== undefined && (obj.phoneVerifiedAttribute = message.phoneVerifiedAttribute);
        message.preferredLanguageAttribute !== undefined &&
            (obj.preferredLanguageAttribute = message.preferredLanguageAttribute);
        message.avatarUrlAttribute !== undefined && (obj.avatarUrlAttribute = message.avatarUrlAttribute);
        message.profileAttribute !== undefined && (obj.profileAttribute = message.profileAttribute);
        return obj;
    },
    create(base) {
        return exports.LDAPAttributes.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLDAPAttributes();
        message.idAttribute = object.idAttribute ?? "";
        message.firstNameAttribute = object.firstNameAttribute ?? "";
        message.lastNameAttribute = object.lastNameAttribute ?? "";
        message.displayNameAttribute = object.displayNameAttribute ?? "";
        message.nickNameAttribute = object.nickNameAttribute ?? "";
        message.preferredUsernameAttribute = object.preferredUsernameAttribute ?? "";
        message.emailAttribute = object.emailAttribute ?? "";
        message.emailVerifiedAttribute = object.emailVerifiedAttribute ?? "";
        message.phoneAttribute = object.phoneAttribute ?? "";
        message.phoneVerifiedAttribute = object.phoneVerifiedAttribute ?? "";
        message.preferredLanguageAttribute = object.preferredLanguageAttribute ?? "";
        message.avatarUrlAttribute = object.avatarUrlAttribute ?? "";
        message.profileAttribute = object.profileAttribute ?? "";
        return message;
    },
};
function createBaseAzureADTenant() {
    return { tenantType: undefined, tenantId: undefined };
}
exports.AzureADTenant = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tenantType !== undefined) {
            writer.uint32(8).int32(message.tenantType);
        }
        if (message.tenantId !== undefined) {
            writer.uint32(18).string(message.tenantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAzureADTenant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.tenantType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tenantId = reader.string();
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
            tenantType: isSet(object.tenantType) ? azureADTenantTypeFromJSON(object.tenantType) : undefined,
            tenantId: isSet(object.tenantId) ? String(object.tenantId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tenantType !== undefined &&
            (obj.tenantType = message.tenantType !== undefined ? azureADTenantTypeToJSON(message.tenantType) : undefined);
        message.tenantId !== undefined && (obj.tenantId = message.tenantId);
        return obj;
    },
    create(base) {
        return exports.AzureADTenant.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAzureADTenant();
        message.tenantType = object.tenantType ?? undefined;
        message.tenantId = object.tenantId ?? undefined;
        return message;
    },
};
function createBaseAppleConfig() {
    return { clientId: "", teamId: "", keyId: "", scopes: [] };
}
exports.AppleConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.teamId !== "") {
            writer.uint32(18).string(message.teamId);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        for (const v of message.scopes) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppleConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.teamId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.keyId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            teamId: isSet(object.teamId) ? String(object.teamId) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.teamId !== undefined && (obj.teamId = message.teamId);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        return obj;
    },
    create(base) {
        return exports.AppleConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAppleConfig();
        message.clientId = object.clientId ?? "";
        message.teamId = object.teamId ?? "";
        message.keyId = object.keyId ?? "";
        message.scopes = object.scopes?.map((e) => e) || [];
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
