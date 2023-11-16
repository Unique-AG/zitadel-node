"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetTriggerActionsRequest = exports.DataProjectGrant = exports.DataAction = exports.DataMachineUser = exports.DataHumanUser = exports.DataOIDCApplication = exports.DataAPIApplication = exports.DataProject = exports.DataMachineKey = exports.DataAppKey = exports.ExportHumanUser_HashedPassword = exports.ExportHumanUser_Phone = exports.ExportHumanUser_Email = exports.ExportHumanUser_Profile = exports.ExportHumanUser = exports.DataJWTIDP = exports.DataOIDCIDP = exports.DataOrg = exports.ImportDataOrg = exports.AddCustomOrgIAMPolicyRequest = exports.triggerTypeToJSON = exports.triggerTypeFromJSON = exports.TriggerType = exports.flowTypeToJSON = exports.flowTypeFromJSON = exports.FlowType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../google/protobuf/timestamp");
const auth_n_key_1 = require("./auth_n_key");
const idp_1 = require("./idp");
const management_1 = require("./management");
const org_1 = require("./org");
const user_1 = require("./user");
exports.protobufPackage = "zitadel.v1.v1";
var FlowType;
(function (FlowType) {
    FlowType[FlowType["FLOW_TYPE_UNSPECIFIED"] = 0] = "FLOW_TYPE_UNSPECIFIED";
    FlowType[FlowType["FLOW_TYPE_EXTERNAL_AUTHENTICATION"] = 1] = "FLOW_TYPE_EXTERNAL_AUTHENTICATION";
    FlowType[FlowType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FlowType || (exports.FlowType = FlowType = {}));
function flowTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "FLOW_TYPE_UNSPECIFIED":
            return FlowType.FLOW_TYPE_UNSPECIFIED;
        case 1:
        case "FLOW_TYPE_EXTERNAL_AUTHENTICATION":
            return FlowType.FLOW_TYPE_EXTERNAL_AUTHENTICATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FlowType.UNRECOGNIZED;
    }
}
exports.flowTypeFromJSON = flowTypeFromJSON;
function flowTypeToJSON(object) {
    switch (object) {
        case FlowType.FLOW_TYPE_UNSPECIFIED:
            return "FLOW_TYPE_UNSPECIFIED";
        case FlowType.FLOW_TYPE_EXTERNAL_AUTHENTICATION:
            return "FLOW_TYPE_EXTERNAL_AUTHENTICATION";
        case FlowType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.flowTypeToJSON = flowTypeToJSON;
var TriggerType;
(function (TriggerType) {
    TriggerType[TriggerType["TRIGGER_TYPE_UNSPECIFIED"] = 0] = "TRIGGER_TYPE_UNSPECIFIED";
    TriggerType[TriggerType["TRIGGER_TYPE_POST_AUTHENTICATION"] = 1] = "TRIGGER_TYPE_POST_AUTHENTICATION";
    TriggerType[TriggerType["TRIGGER_TYPE_PRE_CREATION"] = 2] = "TRIGGER_TYPE_PRE_CREATION";
    TriggerType[TriggerType["TRIGGER_TYPE_POST_CREATION"] = 3] = "TRIGGER_TYPE_POST_CREATION";
    TriggerType[TriggerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TriggerType || (exports.TriggerType = TriggerType = {}));
function triggerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TRIGGER_TYPE_UNSPECIFIED":
            return TriggerType.TRIGGER_TYPE_UNSPECIFIED;
        case 1:
        case "TRIGGER_TYPE_POST_AUTHENTICATION":
            return TriggerType.TRIGGER_TYPE_POST_AUTHENTICATION;
        case 2:
        case "TRIGGER_TYPE_PRE_CREATION":
            return TriggerType.TRIGGER_TYPE_PRE_CREATION;
        case 3:
        case "TRIGGER_TYPE_POST_CREATION":
            return TriggerType.TRIGGER_TYPE_POST_CREATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TriggerType.UNRECOGNIZED;
    }
}
exports.triggerTypeFromJSON = triggerTypeFromJSON;
function triggerTypeToJSON(object) {
    switch (object) {
        case TriggerType.TRIGGER_TYPE_UNSPECIFIED:
            return "TRIGGER_TYPE_UNSPECIFIED";
        case TriggerType.TRIGGER_TYPE_POST_AUTHENTICATION:
            return "TRIGGER_TYPE_POST_AUTHENTICATION";
        case TriggerType.TRIGGER_TYPE_PRE_CREATION:
            return "TRIGGER_TYPE_PRE_CREATION";
        case TriggerType.TRIGGER_TYPE_POST_CREATION:
            return "TRIGGER_TYPE_POST_CREATION";
        case TriggerType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.triggerTypeToJSON = triggerTypeToJSON;
function createBaseAddCustomOrgIAMPolicyRequest() {
    return { orgId: "", userLoginMustBeDomain: false };
}
exports.AddCustomOrgIAMPolicyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.userLoginMustBeDomain === true) {
            writer.uint32(16).bool(message.userLoginMustBeDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddCustomOrgIAMPolicyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.userLoginMustBeDomain = reader.bool();
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
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            userLoginMustBeDomain: isSet(object.userLoginMustBeDomain) ? Boolean(object.userLoginMustBeDomain) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.userLoginMustBeDomain !== undefined && (obj.userLoginMustBeDomain = message.userLoginMustBeDomain);
        return obj;
    },
    create(base) {
        return exports.AddCustomOrgIAMPolicyRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddCustomOrgIAMPolicyRequest();
        message.orgId = object.orgId ?? "";
        message.userLoginMustBeDomain = object.userLoginMustBeDomain ?? false;
        return message;
    },
};
function createBaseImportDataOrg() {
    return { orgs: [] };
}
exports.ImportDataOrg = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.orgs) {
            exports.DataOrg.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseImportDataOrg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgs.push(exports.DataOrg.decode(reader, reader.uint32()));
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
        return { orgs: Array.isArray(object?.orgs) ? object.orgs.map((e) => exports.DataOrg.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgs) {
            obj.orgs = message.orgs.map((e) => e ? exports.DataOrg.toJSON(e) : undefined);
        }
        else {
            obj.orgs = [];
        }
        return obj;
    },
    create(base) {
        return exports.ImportDataOrg.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseImportDataOrg();
        message.orgs = object.orgs?.map((e) => exports.DataOrg.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDataOrg() {
    return {
        orgId: "",
        org: undefined,
        iamPolicy: undefined,
        labelPolicy: undefined,
        lockoutPolicy: undefined,
        loginPolicy: undefined,
        passwordComplexityPolicy: undefined,
        privacyPolicy: undefined,
        projects: [],
        projectRoles: [],
        apiApps: [],
        oidcApps: [],
        humanUsers: [],
        machineUsers: [],
        triggerActions: [],
        actions: [],
        projectGrants: [],
        userGrants: [],
        orgMembers: [],
        projectMembers: [],
        projectGrantMembers: [],
        userMetadata: [],
        loginTexts: [],
        initMessages: [],
        passwordResetMessages: [],
        verifyEmailMessages: [],
        verifyPhoneMessages: [],
        domainClaimedMessages: [],
        passwordlessRegistrationMessages: [],
        oidcIdps: [],
        jwtIdps: [],
        secondFactors: [],
        multiFactors: [],
        idps: [],
        userLinks: [],
        domains: [],
        appKeys: [],
        machineKeys: [],
    };
}
exports.DataOrg = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.org !== undefined) {
            management_1.AddOrgRequest.encode(message.org, writer.uint32(26).fork()).ldelim();
        }
        if (message.iamPolicy !== undefined) {
            exports.AddCustomOrgIAMPolicyRequest.encode(message.iamPolicy, writer.uint32(34).fork()).ldelim();
        }
        if (message.labelPolicy !== undefined) {
            management_1.AddCustomLabelPolicyRequest.encode(message.labelPolicy, writer.uint32(42).fork()).ldelim();
        }
        if (message.lockoutPolicy !== undefined) {
            management_1.AddCustomLockoutPolicyRequest.encode(message.lockoutPolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.loginPolicy !== undefined) {
            management_1.AddCustomLoginPolicyRequest.encode(message.loginPolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.passwordComplexityPolicy !== undefined) {
            management_1.AddCustomPasswordComplexityPolicyRequest.encode(message.passwordComplexityPolicy, writer.uint32(66).fork())
                .ldelim();
        }
        if (message.privacyPolicy !== undefined) {
            management_1.AddCustomPrivacyPolicyRequest.encode(message.privacyPolicy, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.projects) {
            exports.DataProject.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.projectRoles) {
            management_1.AddProjectRoleRequest.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.apiApps) {
            exports.DataAPIApplication.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.oidcApps) {
            exports.DataOIDCApplication.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.humanUsers) {
            exports.DataHumanUser.encode(v, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.machineUsers) {
            exports.DataMachineUser.encode(v, writer.uint32(122).fork()).ldelim();
        }
        for (const v of message.triggerActions) {
            exports.SetTriggerActionsRequest.encode(v, writer.uint32(130).fork()).ldelim();
        }
        for (const v of message.actions) {
            exports.DataAction.encode(v, writer.uint32(138).fork()).ldelim();
        }
        for (const v of message.projectGrants) {
            exports.DataProjectGrant.encode(v, writer.uint32(146).fork()).ldelim();
        }
        for (const v of message.userGrants) {
            management_1.AddUserGrantRequest.encode(v, writer.uint32(154).fork()).ldelim();
        }
        for (const v of message.orgMembers) {
            management_1.AddOrgMemberRequest.encode(v, writer.uint32(162).fork()).ldelim();
        }
        for (const v of message.projectMembers) {
            management_1.AddProjectMemberRequest.encode(v, writer.uint32(170).fork()).ldelim();
        }
        for (const v of message.projectGrantMembers) {
            management_1.AddProjectGrantMemberRequest.encode(v, writer.uint32(178).fork()).ldelim();
        }
        for (const v of message.userMetadata) {
            management_1.SetUserMetadataRequest.encode(v, writer.uint32(186).fork()).ldelim();
        }
        for (const v of message.loginTexts) {
            management_1.SetCustomLoginTextsRequest.encode(v, writer.uint32(194).fork()).ldelim();
        }
        for (const v of message.initMessages) {
            management_1.SetCustomInitMessageTextRequest.encode(v, writer.uint32(202).fork()).ldelim();
        }
        for (const v of message.passwordResetMessages) {
            management_1.SetCustomPasswordResetMessageTextRequest.encode(v, writer.uint32(210).fork()).ldelim();
        }
        for (const v of message.verifyEmailMessages) {
            management_1.SetCustomVerifyEmailMessageTextRequest.encode(v, writer.uint32(218).fork()).ldelim();
        }
        for (const v of message.verifyPhoneMessages) {
            management_1.SetCustomVerifyPhoneMessageTextRequest.encode(v, writer.uint32(226).fork()).ldelim();
        }
        for (const v of message.domainClaimedMessages) {
            management_1.SetCustomDomainClaimedMessageTextRequest.encode(v, writer.uint32(234).fork()).ldelim();
        }
        for (const v of message.passwordlessRegistrationMessages) {
            management_1.SetCustomPasswordlessRegistrationMessageTextRequest.encode(v, writer.uint32(242).fork()).ldelim();
        }
        for (const v of message.oidcIdps) {
            exports.DataOIDCIDP.encode(v, writer.uint32(250).fork()).ldelim();
        }
        for (const v of message.jwtIdps) {
            exports.DataJWTIDP.encode(v, writer.uint32(258).fork()).ldelim();
        }
        for (const v of message.secondFactors) {
            management_1.AddSecondFactorToLoginPolicyRequest.encode(v, writer.uint32(266).fork()).ldelim();
        }
        for (const v of message.multiFactors) {
            management_1.AddMultiFactorToLoginPolicyRequest.encode(v, writer.uint32(274).fork()).ldelim();
        }
        for (const v of message.idps) {
            management_1.AddIDPToLoginPolicyRequest.encode(v, writer.uint32(282).fork()).ldelim();
        }
        for (const v of message.userLinks) {
            idp_1.IDPUserLink.encode(v, writer.uint32(290).fork()).ldelim();
        }
        for (const v of message.domains) {
            org_1.Domain.encode(v, writer.uint32(298).fork()).ldelim();
        }
        for (const v of message.appKeys) {
            exports.DataAppKey.encode(v, writer.uint32(306).fork()).ldelim();
        }
        for (const v of message.machineKeys) {
            exports.DataMachineKey.encode(v, writer.uint32(314).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataOrg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.org = management_1.AddOrgRequest.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.iamPolicy = exports.AddCustomOrgIAMPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.labelPolicy = management_1.AddCustomLabelPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.lockoutPolicy = management_1.AddCustomLockoutPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.loginPolicy = management_1.AddCustomLoginPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.passwordComplexityPolicy = management_1.AddCustomPasswordComplexityPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.privacyPolicy = management_1.AddCustomPrivacyPolicyRequest.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.projects.push(exports.DataProject.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.projectRoles.push(management_1.AddProjectRoleRequest.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.apiApps.push(exports.DataAPIApplication.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.oidcApps.push(exports.DataOIDCApplication.decode(reader, reader.uint32()));
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.humanUsers.push(exports.DataHumanUser.decode(reader, reader.uint32()));
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.machineUsers.push(exports.DataMachineUser.decode(reader, reader.uint32()));
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.triggerActions.push(exports.SetTriggerActionsRequest.decode(reader, reader.uint32()));
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.actions.push(exports.DataAction.decode(reader, reader.uint32()));
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.projectGrants.push(exports.DataProjectGrant.decode(reader, reader.uint32()));
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.userGrants.push(management_1.AddUserGrantRequest.decode(reader, reader.uint32()));
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.orgMembers.push(management_1.AddOrgMemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.projectMembers.push(management_1.AddProjectMemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.projectGrantMembers.push(management_1.AddProjectGrantMemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.userMetadata.push(management_1.SetUserMetadataRequest.decode(reader, reader.uint32()));
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.loginTexts.push(management_1.SetCustomLoginTextsRequest.decode(reader, reader.uint32()));
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.initMessages.push(management_1.SetCustomInitMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.passwordResetMessages.push(management_1.SetCustomPasswordResetMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }
                    message.verifyEmailMessages.push(management_1.SetCustomVerifyEmailMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 28:
                    if (tag !== 226) {
                        break;
                    }
                    message.verifyPhoneMessages.push(management_1.SetCustomVerifyPhoneMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 29:
                    if (tag !== 234) {
                        break;
                    }
                    message.domainClaimedMessages.push(management_1.SetCustomDomainClaimedMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 30:
                    if (tag !== 242) {
                        break;
                    }
                    message.passwordlessRegistrationMessages.push(management_1.SetCustomPasswordlessRegistrationMessageTextRequest.decode(reader, reader.uint32()));
                    continue;
                case 31:
                    if (tag !== 250) {
                        break;
                    }
                    message.oidcIdps.push(exports.DataOIDCIDP.decode(reader, reader.uint32()));
                    continue;
                case 32:
                    if (tag !== 258) {
                        break;
                    }
                    message.jwtIdps.push(exports.DataJWTIDP.decode(reader, reader.uint32()));
                    continue;
                case 33:
                    if (tag !== 266) {
                        break;
                    }
                    message.secondFactors.push(management_1.AddSecondFactorToLoginPolicyRequest.decode(reader, reader.uint32()));
                    continue;
                case 34:
                    if (tag !== 274) {
                        break;
                    }
                    message.multiFactors.push(management_1.AddMultiFactorToLoginPolicyRequest.decode(reader, reader.uint32()));
                    continue;
                case 35:
                    if (tag !== 282) {
                        break;
                    }
                    message.idps.push(management_1.AddIDPToLoginPolicyRequest.decode(reader, reader.uint32()));
                    continue;
                case 36:
                    if (tag !== 290) {
                        break;
                    }
                    message.userLinks.push(idp_1.IDPUserLink.decode(reader, reader.uint32()));
                    continue;
                case 37:
                    if (tag !== 298) {
                        break;
                    }
                    message.domains.push(org_1.Domain.decode(reader, reader.uint32()));
                    continue;
                case 38:
                    if (tag !== 306) {
                        break;
                    }
                    message.appKeys.push(exports.DataAppKey.decode(reader, reader.uint32()));
                    continue;
                case 39:
                    if (tag !== 314) {
                        break;
                    }
                    message.machineKeys.push(exports.DataMachineKey.decode(reader, reader.uint32()));
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
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            org: isSet(object.org) ? management_1.AddOrgRequest.fromJSON(object.org) : undefined,
            iamPolicy: isSet(object.iamPolicy) ? exports.AddCustomOrgIAMPolicyRequest.fromJSON(object.iamPolicy) : undefined,
            labelPolicy: isSet(object.labelPolicy) ? management_1.AddCustomLabelPolicyRequest.fromJSON(object.labelPolicy) : undefined,
            lockoutPolicy: isSet(object.lockoutPolicy)
                ? management_1.AddCustomLockoutPolicyRequest.fromJSON(object.lockoutPolicy)
                : undefined,
            loginPolicy: isSet(object.loginPolicy) ? management_1.AddCustomLoginPolicyRequest.fromJSON(object.loginPolicy) : undefined,
            passwordComplexityPolicy: isSet(object.passwordComplexityPolicy)
                ? management_1.AddCustomPasswordComplexityPolicyRequest.fromJSON(object.passwordComplexityPolicy)
                : undefined,
            privacyPolicy: isSet(object.privacyPolicy)
                ? management_1.AddCustomPrivacyPolicyRequest.fromJSON(object.privacyPolicy)
                : undefined,
            projects: Array.isArray(object?.projects) ? object.projects.map((e) => exports.DataProject.fromJSON(e)) : [],
            projectRoles: Array.isArray(object?.projectRoles)
                ? object.projectRoles.map((e) => management_1.AddProjectRoleRequest.fromJSON(e))
                : [],
            apiApps: Array.isArray(object?.apiApps) ? object.apiApps.map((e) => exports.DataAPIApplication.fromJSON(e)) : [],
            oidcApps: Array.isArray(object?.oidcApps) ? object.oidcApps.map((e) => exports.DataOIDCApplication.fromJSON(e)) : [],
            humanUsers: Array.isArray(object?.humanUsers) ? object.humanUsers.map((e) => exports.DataHumanUser.fromJSON(e)) : [],
            machineUsers: Array.isArray(object?.machineUsers)
                ? object.machineUsers.map((e) => exports.DataMachineUser.fromJSON(e))
                : [],
            triggerActions: Array.isArray(object?.triggerActions)
                ? object.triggerActions.map((e) => exports.SetTriggerActionsRequest.fromJSON(e))
                : [],
            actions: Array.isArray(object?.actions) ? object.actions.map((e) => exports.DataAction.fromJSON(e)) : [],
            projectGrants: Array.isArray(object?.projectGrants)
                ? object.projectGrants.map((e) => exports.DataProjectGrant.fromJSON(e))
                : [],
            userGrants: Array.isArray(object?.userGrants)
                ? object.userGrants.map((e) => management_1.AddUserGrantRequest.fromJSON(e))
                : [],
            orgMembers: Array.isArray(object?.orgMembers)
                ? object.orgMembers.map((e) => management_1.AddOrgMemberRequest.fromJSON(e))
                : [],
            projectMembers: Array.isArray(object?.projectMembers)
                ? object.projectMembers.map((e) => management_1.AddProjectMemberRequest.fromJSON(e))
                : [],
            projectGrantMembers: Array.isArray(object?.projectGrantMembers)
                ? object.projectGrantMembers.map((e) => management_1.AddProjectGrantMemberRequest.fromJSON(e))
                : [],
            userMetadata: Array.isArray(object?.userMetadata)
                ? object.userMetadata.map((e) => management_1.SetUserMetadataRequest.fromJSON(e))
                : [],
            loginTexts: Array.isArray(object?.loginTexts)
                ? object.loginTexts.map((e) => management_1.SetCustomLoginTextsRequest.fromJSON(e))
                : [],
            initMessages: Array.isArray(object?.initMessages)
                ? object.initMessages.map((e) => management_1.SetCustomInitMessageTextRequest.fromJSON(e))
                : [],
            passwordResetMessages: Array.isArray(object?.passwordResetMessages)
                ? object.passwordResetMessages.map((e) => management_1.SetCustomPasswordResetMessageTextRequest.fromJSON(e))
                : [],
            verifyEmailMessages: Array.isArray(object?.verifyEmailMessages)
                ? object.verifyEmailMessages.map((e) => management_1.SetCustomVerifyEmailMessageTextRequest.fromJSON(e))
                : [],
            verifyPhoneMessages: Array.isArray(object?.verifyPhoneMessages)
                ? object.verifyPhoneMessages.map((e) => management_1.SetCustomVerifyPhoneMessageTextRequest.fromJSON(e))
                : [],
            domainClaimedMessages: Array.isArray(object?.domainClaimedMessages)
                ? object.domainClaimedMessages.map((e) => management_1.SetCustomDomainClaimedMessageTextRequest.fromJSON(e))
                : [],
            passwordlessRegistrationMessages: Array.isArray(object?.passwordlessRegistrationMessages)
                ? object.passwordlessRegistrationMessages.map((e) => management_1.SetCustomPasswordlessRegistrationMessageTextRequest.fromJSON(e))
                : [],
            oidcIdps: Array.isArray(object?.oidcIdps)
                ? object.oidcIdps.map((e) => exports.DataOIDCIDP.fromJSON(e))
                : [],
            jwtIdps: Array.isArray(object?.jwtIdps)
                ? object.jwtIdps.map((e) => exports.DataJWTIDP.fromJSON(e))
                : [],
            secondFactors: Array.isArray(object?.secondFactors)
                ? object.secondFactors.map((e) => management_1.AddSecondFactorToLoginPolicyRequest.fromJSON(e))
                : [],
            multiFactors: Array.isArray(object?.multiFactors)
                ? object.multiFactors.map((e) => management_1.AddMultiFactorToLoginPolicyRequest.fromJSON(e))
                : [],
            idps: Array.isArray(object?.idps) ? object.idps.map((e) => management_1.AddIDPToLoginPolicyRequest.fromJSON(e)) : [],
            userLinks: Array.isArray(object?.userLinks) ? object.userLinks.map((e) => idp_1.IDPUserLink.fromJSON(e)) : [],
            domains: Array.isArray(object?.domains) ? object.domains.map((e) => org_1.Domain.fromJSON(e)) : [],
            appKeys: Array.isArray(object?.appKeys) ? object.appKeys.map((e) => exports.DataAppKey.fromJSON(e)) : [],
            machineKeys: Array.isArray(object?.machineKeys)
                ? object.machineKeys.map((e) => exports.DataMachineKey.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.org !== undefined && (obj.org = message.org ? management_1.AddOrgRequest.toJSON(message.org) : undefined);
        message.iamPolicy !== undefined &&
            (obj.iamPolicy = message.iamPolicy ? exports.AddCustomOrgIAMPolicyRequest.toJSON(message.iamPolicy) : undefined);
        message.labelPolicy !== undefined &&
            (obj.labelPolicy = message.labelPolicy ? management_1.AddCustomLabelPolicyRequest.toJSON(message.labelPolicy) : undefined);
        message.lockoutPolicy !== undefined && (obj.lockoutPolicy = message.lockoutPolicy
            ? management_1.AddCustomLockoutPolicyRequest.toJSON(message.lockoutPolicy)
            : undefined);
        message.loginPolicy !== undefined &&
            (obj.loginPolicy = message.loginPolicy ? management_1.AddCustomLoginPolicyRequest.toJSON(message.loginPolicy) : undefined);
        message.passwordComplexityPolicy !== undefined && (obj.passwordComplexityPolicy = message.passwordComplexityPolicy
            ? management_1.AddCustomPasswordComplexityPolicyRequest.toJSON(message.passwordComplexityPolicy)
            : undefined);
        message.privacyPolicy !== undefined && (obj.privacyPolicy = message.privacyPolicy
            ? management_1.AddCustomPrivacyPolicyRequest.toJSON(message.privacyPolicy)
            : undefined);
        if (message.projects) {
            obj.projects = message.projects.map((e) => e ? exports.DataProject.toJSON(e) : undefined);
        }
        else {
            obj.projects = [];
        }
        if (message.projectRoles) {
            obj.projectRoles = message.projectRoles.map((e) => e ? management_1.AddProjectRoleRequest.toJSON(e) : undefined);
        }
        else {
            obj.projectRoles = [];
        }
        if (message.apiApps) {
            obj.apiApps = message.apiApps.map((e) => e ? exports.DataAPIApplication.toJSON(e) : undefined);
        }
        else {
            obj.apiApps = [];
        }
        if (message.oidcApps) {
            obj.oidcApps = message.oidcApps.map((e) => e ? exports.DataOIDCApplication.toJSON(e) : undefined);
        }
        else {
            obj.oidcApps = [];
        }
        if (message.humanUsers) {
            obj.humanUsers = message.humanUsers.map((e) => e ? exports.DataHumanUser.toJSON(e) : undefined);
        }
        else {
            obj.humanUsers = [];
        }
        if (message.machineUsers) {
            obj.machineUsers = message.machineUsers.map((e) => e ? exports.DataMachineUser.toJSON(e) : undefined);
        }
        else {
            obj.machineUsers = [];
        }
        if (message.triggerActions) {
            obj.triggerActions = message.triggerActions.map((e) => e ? exports.SetTriggerActionsRequest.toJSON(e) : undefined);
        }
        else {
            obj.triggerActions = [];
        }
        if (message.actions) {
            obj.actions = message.actions.map((e) => e ? exports.DataAction.toJSON(e) : undefined);
        }
        else {
            obj.actions = [];
        }
        if (message.projectGrants) {
            obj.projectGrants = message.projectGrants.map((e) => e ? exports.DataProjectGrant.toJSON(e) : undefined);
        }
        else {
            obj.projectGrants = [];
        }
        if (message.userGrants) {
            obj.userGrants = message.userGrants.map((e) => e ? management_1.AddUserGrantRequest.toJSON(e) : undefined);
        }
        else {
            obj.userGrants = [];
        }
        if (message.orgMembers) {
            obj.orgMembers = message.orgMembers.map((e) => e ? management_1.AddOrgMemberRequest.toJSON(e) : undefined);
        }
        else {
            obj.orgMembers = [];
        }
        if (message.projectMembers) {
            obj.projectMembers = message.projectMembers.map((e) => e ? management_1.AddProjectMemberRequest.toJSON(e) : undefined);
        }
        else {
            obj.projectMembers = [];
        }
        if (message.projectGrantMembers) {
            obj.projectGrantMembers = message.projectGrantMembers.map((e) => e ? management_1.AddProjectGrantMemberRequest.toJSON(e) : undefined);
        }
        else {
            obj.projectGrantMembers = [];
        }
        if (message.userMetadata) {
            obj.userMetadata = message.userMetadata.map((e) => e ? management_1.SetUserMetadataRequest.toJSON(e) : undefined);
        }
        else {
            obj.userMetadata = [];
        }
        if (message.loginTexts) {
            obj.loginTexts = message.loginTexts.map((e) => e ? management_1.SetCustomLoginTextsRequest.toJSON(e) : undefined);
        }
        else {
            obj.loginTexts = [];
        }
        if (message.initMessages) {
            obj.initMessages = message.initMessages.map((e) => e ? management_1.SetCustomInitMessageTextRequest.toJSON(e) : undefined);
        }
        else {
            obj.initMessages = [];
        }
        if (message.passwordResetMessages) {
            obj.passwordResetMessages = message.passwordResetMessages.map((e) => e ? management_1.SetCustomPasswordResetMessageTextRequest.toJSON(e) : undefined);
        }
        else {
            obj.passwordResetMessages = [];
        }
        if (message.verifyEmailMessages) {
            obj.verifyEmailMessages = message.verifyEmailMessages.map((e) => e ? management_1.SetCustomVerifyEmailMessageTextRequest.toJSON(e) : undefined);
        }
        else {
            obj.verifyEmailMessages = [];
        }
        if (message.verifyPhoneMessages) {
            obj.verifyPhoneMessages = message.verifyPhoneMessages.map((e) => e ? management_1.SetCustomVerifyPhoneMessageTextRequest.toJSON(e) : undefined);
        }
        else {
            obj.verifyPhoneMessages = [];
        }
        if (message.domainClaimedMessages) {
            obj.domainClaimedMessages = message.domainClaimedMessages.map((e) => e ? management_1.SetCustomDomainClaimedMessageTextRequest.toJSON(e) : undefined);
        }
        else {
            obj.domainClaimedMessages = [];
        }
        if (message.passwordlessRegistrationMessages) {
            obj.passwordlessRegistrationMessages = message.passwordlessRegistrationMessages.map((e) => e ? management_1.SetCustomPasswordlessRegistrationMessageTextRequest.toJSON(e) : undefined);
        }
        else {
            obj.passwordlessRegistrationMessages = [];
        }
        if (message.oidcIdps) {
            obj.oidcIdps = message.oidcIdps.map((e) => e ? exports.DataOIDCIDP.toJSON(e) : undefined);
        }
        else {
            obj.oidcIdps = [];
        }
        if (message.jwtIdps) {
            obj.jwtIdps = message.jwtIdps.map((e) => e ? exports.DataJWTIDP.toJSON(e) : undefined);
        }
        else {
            obj.jwtIdps = [];
        }
        if (message.secondFactors) {
            obj.secondFactors = message.secondFactors.map((e) => e ? management_1.AddSecondFactorToLoginPolicyRequest.toJSON(e) : undefined);
        }
        else {
            obj.secondFactors = [];
        }
        if (message.multiFactors) {
            obj.multiFactors = message.multiFactors.map((e) => e ? management_1.AddMultiFactorToLoginPolicyRequest.toJSON(e) : undefined);
        }
        else {
            obj.multiFactors = [];
        }
        if (message.idps) {
            obj.idps = message.idps.map((e) => e ? management_1.AddIDPToLoginPolicyRequest.toJSON(e) : undefined);
        }
        else {
            obj.idps = [];
        }
        if (message.userLinks) {
            obj.userLinks = message.userLinks.map((e) => e ? idp_1.IDPUserLink.toJSON(e) : undefined);
        }
        else {
            obj.userLinks = [];
        }
        if (message.domains) {
            obj.domains = message.domains.map((e) => e ? org_1.Domain.toJSON(e) : undefined);
        }
        else {
            obj.domains = [];
        }
        if (message.appKeys) {
            obj.appKeys = message.appKeys.map((e) => e ? exports.DataAppKey.toJSON(e) : undefined);
        }
        else {
            obj.appKeys = [];
        }
        if (message.machineKeys) {
            obj.machineKeys = message.machineKeys.map((e) => e ? exports.DataMachineKey.toJSON(e) : undefined);
        }
        else {
            obj.machineKeys = [];
        }
        return obj;
    },
    create(base) {
        return exports.DataOrg.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataOrg();
        message.orgId = object.orgId ?? "";
        message.org = (object.org !== undefined && object.org !== null) ? management_1.AddOrgRequest.fromPartial(object.org) : undefined;
        message.iamPolicy = (object.iamPolicy !== undefined && object.iamPolicy !== null)
            ? exports.AddCustomOrgIAMPolicyRequest.fromPartial(object.iamPolicy)
            : undefined;
        message.labelPolicy = (object.labelPolicy !== undefined && object.labelPolicy !== null)
            ? management_1.AddCustomLabelPolicyRequest.fromPartial(object.labelPolicy)
            : undefined;
        message.lockoutPolicy = (object.lockoutPolicy !== undefined && object.lockoutPolicy !== null)
            ? management_1.AddCustomLockoutPolicyRequest.fromPartial(object.lockoutPolicy)
            : undefined;
        message.loginPolicy = (object.loginPolicy !== undefined && object.loginPolicy !== null)
            ? management_1.AddCustomLoginPolicyRequest.fromPartial(object.loginPolicy)
            : undefined;
        message.passwordComplexityPolicy =
            (object.passwordComplexityPolicy !== undefined && object.passwordComplexityPolicy !== null)
                ? management_1.AddCustomPasswordComplexityPolicyRequest.fromPartial(object.passwordComplexityPolicy)
                : undefined;
        message.privacyPolicy = (object.privacyPolicy !== undefined && object.privacyPolicy !== null)
            ? management_1.AddCustomPrivacyPolicyRequest.fromPartial(object.privacyPolicy)
            : undefined;
        message.projects = object.projects?.map((e) => exports.DataProject.fromPartial(e)) || [];
        message.projectRoles = object.projectRoles?.map((e) => management_1.AddProjectRoleRequest.fromPartial(e)) || [];
        message.apiApps = object.apiApps?.map((e) => exports.DataAPIApplication.fromPartial(e)) || [];
        message.oidcApps = object.oidcApps?.map((e) => exports.DataOIDCApplication.fromPartial(e)) || [];
        message.humanUsers = object.humanUsers?.map((e) => exports.DataHumanUser.fromPartial(e)) || [];
        message.machineUsers = object.machineUsers?.map((e) => exports.DataMachineUser.fromPartial(e)) || [];
        message.triggerActions = object.triggerActions?.map((e) => exports.SetTriggerActionsRequest.fromPartial(e)) || [];
        message.actions = object.actions?.map((e) => exports.DataAction.fromPartial(e)) || [];
        message.projectGrants = object.projectGrants?.map((e) => exports.DataProjectGrant.fromPartial(e)) || [];
        message.userGrants = object.userGrants?.map((e) => management_1.AddUserGrantRequest.fromPartial(e)) || [];
        message.orgMembers = object.orgMembers?.map((e) => management_1.AddOrgMemberRequest.fromPartial(e)) || [];
        message.projectMembers = object.projectMembers?.map((e) => management_1.AddProjectMemberRequest.fromPartial(e)) || [];
        message.projectGrantMembers = object.projectGrantMembers?.map((e) => management_1.AddProjectGrantMemberRequest.fromPartial(e)) ||
            [];
        message.userMetadata = object.userMetadata?.map((e) => management_1.SetUserMetadataRequest.fromPartial(e)) || [];
        message.loginTexts = object.loginTexts?.map((e) => management_1.SetCustomLoginTextsRequest.fromPartial(e)) || [];
        message.initMessages = object.initMessages?.map((e) => management_1.SetCustomInitMessageTextRequest.fromPartial(e)) || [];
        message.passwordResetMessages =
            object.passwordResetMessages?.map((e) => management_1.SetCustomPasswordResetMessageTextRequest.fromPartial(e)) || [];
        message.verifyEmailMessages =
            object.verifyEmailMessages?.map((e) => management_1.SetCustomVerifyEmailMessageTextRequest.fromPartial(e)) || [];
        message.verifyPhoneMessages =
            object.verifyPhoneMessages?.map((e) => management_1.SetCustomVerifyPhoneMessageTextRequest.fromPartial(e)) || [];
        message.domainClaimedMessages =
            object.domainClaimedMessages?.map((e) => management_1.SetCustomDomainClaimedMessageTextRequest.fromPartial(e)) || [];
        message.passwordlessRegistrationMessages =
            object.passwordlessRegistrationMessages?.map((e) => management_1.SetCustomPasswordlessRegistrationMessageTextRequest.fromPartial(e)) || [];
        message.oidcIdps = object.oidcIdps?.map((e) => exports.DataOIDCIDP.fromPartial(e)) || [];
        message.jwtIdps = object.jwtIdps?.map((e) => exports.DataJWTIDP.fromPartial(e)) || [];
        message.secondFactors = object.secondFactors?.map((e) => management_1.AddSecondFactorToLoginPolicyRequest.fromPartial(e)) || [];
        message.multiFactors = object.multiFactors?.map((e) => management_1.AddMultiFactorToLoginPolicyRequest.fromPartial(e)) || [];
        message.idps = object.idps?.map((e) => management_1.AddIDPToLoginPolicyRequest.fromPartial(e)) || [];
        message.userLinks = object.userLinks?.map((e) => idp_1.IDPUserLink.fromPartial(e)) || [];
        message.domains = object.domains?.map((e) => org_1.Domain.fromPartial(e)) || [];
        message.appKeys = object.appKeys?.map((e) => exports.DataAppKey.fromPartial(e)) || [];
        message.machineKeys = object.machineKeys?.map((e) => exports.DataMachineKey.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDataOIDCIDP() {
    return { idpId: "", idp: undefined };
}
exports.DataOIDCIDP = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.idp !== undefined) {
            management_1.AddOrgOIDCIDPRequest.encode(message.idp, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataOIDCIDP();
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
                    message.idp = management_1.AddOrgOIDCIDPRequest.decode(reader, reader.uint32());
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
            idp: isSet(object.idp) ? management_1.AddOrgOIDCIDPRequest.fromJSON(object.idp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idpId !== undefined && (obj.idpId = message.idpId);
        message.idp !== undefined && (obj.idp = message.idp ? management_1.AddOrgOIDCIDPRequest.toJSON(message.idp) : undefined);
        return obj;
    },
    create(base) {
        return exports.DataOIDCIDP.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataOIDCIDP();
        message.idpId = object.idpId ?? "";
        message.idp = (object.idp !== undefined && object.idp !== null)
            ? management_1.AddOrgOIDCIDPRequest.fromPartial(object.idp)
            : undefined;
        return message;
    },
};
function createBaseDataJWTIDP() {
    return { idpId: "", idp: undefined };
}
exports.DataJWTIDP = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.idp !== undefined) {
            management_1.AddOrgJWTIDPRequest.encode(message.idp, writer.uint32(258).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataJWTIDP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 32:
                    if (tag !== 258) {
                        break;
                    }
                    message.idp = management_1.AddOrgJWTIDPRequest.decode(reader, reader.uint32());
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
            idp: isSet(object.idp) ? management_1.AddOrgJWTIDPRequest.fromJSON(object.idp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idpId !== undefined && (obj.idpId = message.idpId);
        message.idp !== undefined && (obj.idp = message.idp ? management_1.AddOrgJWTIDPRequest.toJSON(message.idp) : undefined);
        return obj;
    },
    create(base) {
        return exports.DataJWTIDP.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataJWTIDP();
        message.idpId = object.idpId ?? "";
        message.idp = (object.idp !== undefined && object.idp !== null)
            ? management_1.AddOrgJWTIDPRequest.fromPartial(object.idp)
            : undefined;
        return message;
    },
};
function createBaseExportHumanUser() {
    return {
        userName: "",
        profile: undefined,
        email: undefined,
        phone: undefined,
        password: "",
        hashedPassword: undefined,
        passwordChangeRequired: false,
        requestPasswordlessRegistration: false,
        otpCode: "",
    };
}
exports.ExportHumanUser = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        if (message.profile !== undefined) {
            exports.ExportHumanUser_Profile.encode(message.profile, writer.uint32(18).fork()).ldelim();
        }
        if (message.email !== undefined) {
            exports.ExportHumanUser_Email.encode(message.email, writer.uint32(26).fork()).ldelim();
        }
        if (message.phone !== undefined) {
            exports.ExportHumanUser_Phone.encode(message.phone, writer.uint32(34).fork()).ldelim();
        }
        if (message.password !== "") {
            writer.uint32(42).string(message.password);
        }
        if (message.hashedPassword !== undefined) {
            exports.ExportHumanUser_HashedPassword.encode(message.hashedPassword, writer.uint32(50).fork()).ldelim();
        }
        if (message.passwordChangeRequired === true) {
            writer.uint32(56).bool(message.passwordChangeRequired);
        }
        if (message.requestPasswordlessRegistration === true) {
            writer.uint32(64).bool(message.requestPasswordlessRegistration);
        }
        if (message.otpCode !== "") {
            writer.uint32(74).string(message.otpCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.profile = exports.ExportHumanUser_Profile.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.email = exports.ExportHumanUser_Email.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.phone = exports.ExportHumanUser_Phone.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.hashedPassword = exports.ExportHumanUser_HashedPassword.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.passwordChangeRequired = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.requestPasswordlessRegistration = reader.bool();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.otpCode = reader.string();
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
            userName: isSet(object.userName) ? String(object.userName) : "",
            profile: isSet(object.profile) ? exports.ExportHumanUser_Profile.fromJSON(object.profile) : undefined,
            email: isSet(object.email) ? exports.ExportHumanUser_Email.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? exports.ExportHumanUser_Phone.fromJSON(object.phone) : undefined,
            password: isSet(object.password) ? String(object.password) : "",
            hashedPassword: isSet(object.hashedPassword)
                ? exports.ExportHumanUser_HashedPassword.fromJSON(object.hashedPassword)
                : undefined,
            passwordChangeRequired: isSet(object.passwordChangeRequired) ? Boolean(object.passwordChangeRequired) : false,
            requestPasswordlessRegistration: isSet(object.requestPasswordlessRegistration)
                ? Boolean(object.requestPasswordlessRegistration)
                : false,
            otpCode: isSet(object.otpCode) ? String(object.otpCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userName !== undefined && (obj.userName = message.userName);
        message.profile !== undefined &&
            (obj.profile = message.profile ? exports.ExportHumanUser_Profile.toJSON(message.profile) : undefined);
        message.email !== undefined &&
            (obj.email = message.email ? exports.ExportHumanUser_Email.toJSON(message.email) : undefined);
        message.phone !== undefined &&
            (obj.phone = message.phone ? exports.ExportHumanUser_Phone.toJSON(message.phone) : undefined);
        message.password !== undefined && (obj.password = message.password);
        message.hashedPassword !== undefined && (obj.hashedPassword = message.hashedPassword
            ? exports.ExportHumanUser_HashedPassword.toJSON(message.hashedPassword)
            : undefined);
        message.passwordChangeRequired !== undefined && (obj.passwordChangeRequired = message.passwordChangeRequired);
        message.requestPasswordlessRegistration !== undefined &&
            (obj.requestPasswordlessRegistration = message.requestPasswordlessRegistration);
        message.otpCode !== undefined && (obj.otpCode = message.otpCode);
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExportHumanUser();
        message.userName = object.userName ?? "";
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? exports.ExportHumanUser_Profile.fromPartial(object.profile)
            : undefined;
        message.email = (object.email !== undefined && object.email !== null)
            ? exports.ExportHumanUser_Email.fromPartial(object.email)
            : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null)
            ? exports.ExportHumanUser_Phone.fromPartial(object.phone)
            : undefined;
        message.password = object.password ?? "";
        message.hashedPassword = (object.hashedPassword !== undefined && object.hashedPassword !== null)
            ? exports.ExportHumanUser_HashedPassword.fromPartial(object.hashedPassword)
            : undefined;
        message.passwordChangeRequired = object.passwordChangeRequired ?? false;
        message.requestPasswordlessRegistration = object.requestPasswordlessRegistration ?? false;
        message.otpCode = object.otpCode ?? "";
        return message;
    },
};
function createBaseExportHumanUser_Profile() {
    return { firstName: "", lastName: "", nickName: "", displayName: "", preferredLanguage: "", gender: 0 };
}
exports.ExportHumanUser_Profile = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(18).string(message.lastName);
        }
        if (message.nickName !== "") {
            writer.uint32(26).string(message.nickName);
        }
        if (message.displayName !== "") {
            writer.uint32(34).string(message.displayName);
        }
        if (message.preferredLanguage !== "") {
            writer.uint32(42).string(message.preferredLanguage);
        }
        if (message.gender !== 0) {
            writer.uint32(48).int32(message.gender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser_Profile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nickName = reader.string();
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
                    message.preferredLanguage = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.gender = reader.int32();
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
            firstName: isSet(object.firstName) ? String(object.firstName) : "",
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            nickName: isSet(object.nickName) ? String(object.nickName) : "",
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            preferredLanguage: isSet(object.preferredLanguage) ? String(object.preferredLanguage) : "",
            gender: isSet(object.gender) ? (0, user_1.genderFromJSON)(object.gender) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.nickName !== undefined && (obj.nickName = message.nickName);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.preferredLanguage !== undefined && (obj.preferredLanguage = message.preferredLanguage);
        message.gender !== undefined && (obj.gender = (0, user_1.genderToJSON)(message.gender));
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser_Profile.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExportHumanUser_Profile();
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.nickName = object.nickName ?? "";
        message.displayName = object.displayName ?? "";
        message.preferredLanguage = object.preferredLanguage ?? "";
        message.gender = object.gender ?? 0;
        return message;
    },
};
function createBaseExportHumanUser_Email() {
    return { email: "", isEmailVerified: false };
}
exports.ExportHumanUser_Email = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.isEmailVerified === true) {
            writer.uint32(16).bool(message.isEmailVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser_Email();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isEmailVerified = reader.bool();
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
            email: isSet(object.email) ? String(object.email) : "",
            isEmailVerified: isSet(object.isEmailVerified) ? Boolean(object.isEmailVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.isEmailVerified !== undefined && (obj.isEmailVerified = message.isEmailVerified);
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser_Email.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExportHumanUser_Email();
        message.email = object.email ?? "";
        message.isEmailVerified = object.isEmailVerified ?? false;
        return message;
    },
};
function createBaseExportHumanUser_Phone() {
    return { phone: "", isPhoneVerified: false };
}
exports.ExportHumanUser_Phone = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.phone !== "") {
            writer.uint32(10).string(message.phone);
        }
        if (message.isPhoneVerified === true) {
            writer.uint32(16).bool(message.isPhoneVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser_Phone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isPhoneVerified = reader.bool();
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
            phone: isSet(object.phone) ? String(object.phone) : "",
            isPhoneVerified: isSet(object.isPhoneVerified) ? Boolean(object.isPhoneVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.phone !== undefined && (obj.phone = message.phone);
        message.isPhoneVerified !== undefined && (obj.isPhoneVerified = message.isPhoneVerified);
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser_Phone.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExportHumanUser_Phone();
        message.phone = object.phone ?? "";
        message.isPhoneVerified = object.isPhoneVerified ?? false;
        return message;
    },
};
function createBaseExportHumanUser_HashedPassword() {
    return { value: "", algorithm: "" };
}
exports.ExportHumanUser_HashedPassword = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        if (message.algorithm !== "") {
            writer.uint32(18).string(message.algorithm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExportHumanUser_HashedPassword();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.algorithm = reader.string();
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
            value: isSet(object.value) ? String(object.value) : "",
            algorithm: isSet(object.algorithm) ? String(object.algorithm) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        message.algorithm !== undefined && (obj.algorithm = message.algorithm);
        return obj;
    },
    create(base) {
        return exports.ExportHumanUser_HashedPassword.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExportHumanUser_HashedPassword();
        message.value = object.value ?? "";
        message.algorithm = object.algorithm ?? "";
        return message;
    },
};
function createBaseDataAppKey() {
    return {
        id: "",
        projectId: "",
        appId: "",
        clientId: "",
        type: 0,
        expirationDate: undefined,
        publicKey: Buffer.alloc(0),
    };
}
exports.DataAppKey = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.appId !== "") {
            writer.uint32(26).string(message.appId);
        }
        if (message.clientId !== "") {
            writer.uint32(34).string(message.clientId);
        }
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.publicKey.length !== 0) {
            writer.uint32(58).bytes(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataAppKey();
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
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.appId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.publicKey = reader.bytes();
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
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            appId: isSet(object.appId) ? String(object.appId) : "",
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            type: isSet(object.type) ? (0, auth_n_key_1.keyTypeFromJSON)(object.type) : 0,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
            publicKey: isSet(object.publicKey) ? Buffer.from(bytesFromBase64(object.publicKey)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.appId !== undefined && (obj.appId = message.appId);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.type !== undefined && (obj.type = (0, auth_n_key_1.keyTypeToJSON)(message.type));
        message.expirationDate !== undefined && (obj.expirationDate = message.expirationDate.toISOString());
        message.publicKey !== undefined &&
            (obj.publicKey = base64FromBytes(message.publicKey !== undefined ? message.publicKey : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.DataAppKey.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataAppKey();
        message.id = object.id ?? "";
        message.projectId = object.projectId ?? "";
        message.appId = object.appId ?? "";
        message.clientId = object.clientId ?? "";
        message.type = object.type ?? 0;
        message.expirationDate = object.expirationDate ?? undefined;
        message.publicKey = object.publicKey ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseDataMachineKey() {
    return { keyId: "", userId: "", type: 0, expirationDate: undefined, publicKey: Buffer.alloc(0) };
}
exports.DataMachineKey = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(34).fork()).ldelim();
        }
        if (message.publicKey.length !== 0) {
            writer.uint32(42).bytes(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataMachineKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keyId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.publicKey = reader.bytes();
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
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
            type: isSet(object.type) ? (0, auth_n_key_1.keyTypeFromJSON)(object.type) : 0,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
            publicKey: isSet(object.publicKey) ? Buffer.from(bytesFromBase64(object.publicKey)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.userId !== undefined && (obj.userId = message.userId);
        message.type !== undefined && (obj.type = (0, auth_n_key_1.keyTypeToJSON)(message.type));
        message.expirationDate !== undefined && (obj.expirationDate = message.expirationDate.toISOString());
        message.publicKey !== undefined &&
            (obj.publicKey = base64FromBytes(message.publicKey !== undefined ? message.publicKey : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.DataMachineKey.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataMachineKey();
        message.keyId = object.keyId ?? "";
        message.userId = object.userId ?? "";
        message.type = object.type ?? 0;
        message.expirationDate = object.expirationDate ?? undefined;
        message.publicKey = object.publicKey ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseDataProject() {
    return { projectId: "", project: undefined };
}
exports.DataProject = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.project !== undefined) {
            management_1.AddProjectRequest.encode(message.project, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.project = management_1.AddProjectRequest.decode(reader, reader.uint32());
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
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            project: isSet(object.project) ? management_1.AddProjectRequest.fromJSON(object.project) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.project !== undefined &&
            (obj.project = message.project ? management_1.AddProjectRequest.toJSON(message.project) : undefined);
        return obj;
    },
    create(base) {
        return exports.DataProject.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataProject();
        message.projectId = object.projectId ?? "";
        message.project = (object.project !== undefined && object.project !== null)
            ? management_1.AddProjectRequest.fromPartial(object.project)
            : undefined;
        return message;
    },
};
function createBaseDataAPIApplication() {
    return { appId: "", app: undefined };
}
exports.DataAPIApplication = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.appId !== "") {
            writer.uint32(10).string(message.appId);
        }
        if (message.app !== undefined) {
            management_1.AddAPIAppRequest.encode(message.app, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataAPIApplication();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.appId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.app = management_1.AddAPIAppRequest.decode(reader, reader.uint32());
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
            appId: isSet(object.appId) ? String(object.appId) : "",
            app: isSet(object.app) ? management_1.AddAPIAppRequest.fromJSON(object.app) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = message.appId);
        message.app !== undefined && (obj.app = message.app ? management_1.AddAPIAppRequest.toJSON(message.app) : undefined);
        return obj;
    },
    create(base) {
        return exports.DataAPIApplication.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataAPIApplication();
        message.appId = object.appId ?? "";
        message.app = (object.app !== undefined && object.app !== null)
            ? management_1.AddAPIAppRequest.fromPartial(object.app)
            : undefined;
        return message;
    },
};
function createBaseDataOIDCApplication() {
    return { appId: "", app: undefined };
}
exports.DataOIDCApplication = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.appId !== "") {
            writer.uint32(10).string(message.appId);
        }
        if (message.app !== undefined) {
            management_1.AddOIDCAppRequest.encode(message.app, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataOIDCApplication();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.appId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.app = management_1.AddOIDCAppRequest.decode(reader, reader.uint32());
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
            appId: isSet(object.appId) ? String(object.appId) : "",
            app: isSet(object.app) ? management_1.AddOIDCAppRequest.fromJSON(object.app) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = message.appId);
        message.app !== undefined && (obj.app = message.app ? management_1.AddOIDCAppRequest.toJSON(message.app) : undefined);
        return obj;
    },
    create(base) {
        return exports.DataOIDCApplication.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataOIDCApplication();
        message.appId = object.appId ?? "";
        message.app = (object.app !== undefined && object.app !== null)
            ? management_1.AddOIDCAppRequest.fromPartial(object.app)
            : undefined;
        return message;
    },
};
function createBaseDataHumanUser() {
    return { userId: "", user: undefined };
}
exports.DataHumanUser = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.user !== undefined) {
            management_1.ImportHumanUserRequest.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataHumanUser();
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
                    message.user = management_1.ImportHumanUserRequest.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? management_1.ImportHumanUserRequest.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.user !== undefined && (obj.user = message.user ? management_1.ImportHumanUserRequest.toJSON(message.user) : undefined);
        return obj;
    },
    create(base) {
        return exports.DataHumanUser.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataHumanUser();
        message.userId = object.userId ?? "";
        message.user = (object.user !== undefined && object.user !== null)
            ? management_1.ImportHumanUserRequest.fromPartial(object.user)
            : undefined;
        return message;
    },
};
function createBaseDataMachineUser() {
    return { userId: "", user: undefined };
}
exports.DataMachineUser = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.user !== undefined) {
            management_1.AddMachineUserRequest.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataMachineUser();
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
                    message.user = management_1.AddMachineUserRequest.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? management_1.AddMachineUserRequest.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.user !== undefined && (obj.user = message.user ? management_1.AddMachineUserRequest.toJSON(message.user) : undefined);
        return obj;
    },
    create(base) {
        return exports.DataMachineUser.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataMachineUser();
        message.userId = object.userId ?? "";
        message.user = (object.user !== undefined && object.user !== null)
            ? management_1.AddMachineUserRequest.fromPartial(object.user)
            : undefined;
        return message;
    },
};
function createBaseDataAction() {
    return { actionId: "", action: undefined };
}
exports.DataAction = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.actionId !== "") {
            writer.uint32(10).string(message.actionId);
        }
        if (message.action !== undefined) {
            management_1.CreateActionRequest.encode(message.action, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataAction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.actionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.action = management_1.CreateActionRequest.decode(reader, reader.uint32());
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
            actionId: isSet(object.actionId) ? String(object.actionId) : "",
            action: isSet(object.action) ? management_1.CreateActionRequest.fromJSON(object.action) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.actionId !== undefined && (obj.actionId = message.actionId);
        message.action !== undefined &&
            (obj.action = message.action ? management_1.CreateActionRequest.toJSON(message.action) : undefined);
        return obj;
    },
    create(base) {
        return exports.DataAction.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataAction();
        message.actionId = object.actionId ?? "";
        message.action = (object.action !== undefined && object.action !== null)
            ? management_1.CreateActionRequest.fromPartial(object.action)
            : undefined;
        return message;
    },
};
function createBaseDataProjectGrant() {
    return { grantId: "", projectGrant: undefined };
}
exports.DataProjectGrant = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.grantId !== "") {
            writer.uint32(10).string(message.grantId);
        }
        if (message.projectGrant !== undefined) {
            management_1.AddProjectGrantRequest.encode(message.projectGrant, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataProjectGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.grantId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.projectGrant = management_1.AddProjectGrantRequest.decode(reader, reader.uint32());
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
            grantId: isSet(object.grantId) ? String(object.grantId) : "",
            projectGrant: isSet(object.projectGrant) ? management_1.AddProjectGrantRequest.fromJSON(object.projectGrant) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.grantId !== undefined && (obj.grantId = message.grantId);
        message.projectGrant !== undefined &&
            (obj.projectGrant = message.projectGrant ? management_1.AddProjectGrantRequest.toJSON(message.projectGrant) : undefined);
        return obj;
    },
    create(base) {
        return exports.DataProjectGrant.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDataProjectGrant();
        message.grantId = object.grantId ?? "";
        message.projectGrant = (object.projectGrant !== undefined && object.projectGrant !== null)
            ? management_1.AddProjectGrantRequest.fromPartial(object.projectGrant)
            : undefined;
        return message;
    },
};
function createBaseSetTriggerActionsRequest() {
    return { flowType: 0, triggerType: 0, actionIds: [] };
}
exports.SetTriggerActionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.flowType !== 0) {
            writer.uint32(8).int32(message.flowType);
        }
        if (message.triggerType !== 0) {
            writer.uint32(16).int32(message.triggerType);
        }
        for (const v of message.actionIds) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetTriggerActionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.flowType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.triggerType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.actionIds.push(reader.string());
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
            flowType: isSet(object.flowType) ? flowTypeFromJSON(object.flowType) : 0,
            triggerType: isSet(object.triggerType) ? triggerTypeFromJSON(object.triggerType) : 0,
            actionIds: Array.isArray(object?.actionIds) ? object.actionIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.flowType !== undefined && (obj.flowType = flowTypeToJSON(message.flowType));
        message.triggerType !== undefined && (obj.triggerType = triggerTypeToJSON(message.triggerType));
        if (message.actionIds) {
            obj.actionIds = message.actionIds.map((e) => e);
        }
        else {
            obj.actionIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.SetTriggerActionsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetTriggerActionsRequest();
        message.flowType = object.flowType ?? 0;
        message.triggerType = object.triggerType ?? 0;
        message.actionIds = object.actionIds?.map((e) => e) || [];
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
function isSet(value) {
    return value !== null && value !== undefined;
}
