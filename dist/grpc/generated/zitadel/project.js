"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrantedOrgIDQuery = exports.ProjectIDQuery = exports.GrantRoleKeyQuery = exports.GrantProjectNameQuery = exports.AllProjectGrantQuery = exports.ProjectGrantQuery = exports.RoleDisplayNameQuery = exports.RoleKeyQuery = exports.RoleQuery = exports.Role = exports.ProjectResourceOwnerQuery = exports.ProjectNameQuery = exports.ProjectQuery = exports.GrantedProject = exports.Project = exports.projectGrantStateToJSON = exports.projectGrantStateFromJSON = exports.ProjectGrantState = exports.privateLabelingSettingToJSON = exports.privateLabelingSettingFromJSON = exports.PrivateLabelingSetting = exports.projectStateToJSON = exports.projectStateFromJSON = exports.ProjectState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const object_1 = require("./object");
exports.protobufPackage = "zitadel.project.v1";
var ProjectState;
(function (ProjectState) {
    ProjectState[ProjectState["PROJECT_STATE_UNSPECIFIED"] = 0] = "PROJECT_STATE_UNSPECIFIED";
    ProjectState[ProjectState["PROJECT_STATE_ACTIVE"] = 1] = "PROJECT_STATE_ACTIVE";
    ProjectState[ProjectState["PROJECT_STATE_INACTIVE"] = 2] = "PROJECT_STATE_INACTIVE";
    ProjectState[ProjectState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProjectState || (exports.ProjectState = ProjectState = {}));
function projectStateFromJSON(object) {
    switch (object) {
        case 0:
        case "PROJECT_STATE_UNSPECIFIED":
            return ProjectState.PROJECT_STATE_UNSPECIFIED;
        case 1:
        case "PROJECT_STATE_ACTIVE":
            return ProjectState.PROJECT_STATE_ACTIVE;
        case 2:
        case "PROJECT_STATE_INACTIVE":
            return ProjectState.PROJECT_STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProjectState.UNRECOGNIZED;
    }
}
exports.projectStateFromJSON = projectStateFromJSON;
function projectStateToJSON(object) {
    switch (object) {
        case ProjectState.PROJECT_STATE_UNSPECIFIED:
            return "PROJECT_STATE_UNSPECIFIED";
        case ProjectState.PROJECT_STATE_ACTIVE:
            return "PROJECT_STATE_ACTIVE";
        case ProjectState.PROJECT_STATE_INACTIVE:
            return "PROJECT_STATE_INACTIVE";
        case ProjectState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.projectStateToJSON = projectStateToJSON;
var PrivateLabelingSetting;
(function (PrivateLabelingSetting) {
    PrivateLabelingSetting[PrivateLabelingSetting["PRIVATE_LABELING_SETTING_UNSPECIFIED"] = 0] = "PRIVATE_LABELING_SETTING_UNSPECIFIED";
    PrivateLabelingSetting[PrivateLabelingSetting["PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY"] = 1] = "PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY";
    PrivateLabelingSetting[PrivateLabelingSetting["PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY"] = 2] = "PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY";
    PrivateLabelingSetting[PrivateLabelingSetting["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PrivateLabelingSetting || (exports.PrivateLabelingSetting = PrivateLabelingSetting = {}));
function privateLabelingSettingFromJSON(object) {
    switch (object) {
        case 0:
        case "PRIVATE_LABELING_SETTING_UNSPECIFIED":
            return PrivateLabelingSetting.PRIVATE_LABELING_SETTING_UNSPECIFIED;
        case 1:
        case "PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY":
            return PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY;
        case 2:
        case "PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY":
            return PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PrivateLabelingSetting.UNRECOGNIZED;
    }
}
exports.privateLabelingSettingFromJSON = privateLabelingSettingFromJSON;
function privateLabelingSettingToJSON(object) {
    switch (object) {
        case PrivateLabelingSetting.PRIVATE_LABELING_SETTING_UNSPECIFIED:
            return "PRIVATE_LABELING_SETTING_UNSPECIFIED";
        case PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY:
            return "PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY";
        case PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY:
            return "PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY";
        case PrivateLabelingSetting.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.privateLabelingSettingToJSON = privateLabelingSettingToJSON;
var ProjectGrantState;
(function (ProjectGrantState) {
    ProjectGrantState[ProjectGrantState["PROJECT_GRANT_STATE_UNSPECIFIED"] = 0] = "PROJECT_GRANT_STATE_UNSPECIFIED";
    ProjectGrantState[ProjectGrantState["PROJECT_GRANT_STATE_ACTIVE"] = 1] = "PROJECT_GRANT_STATE_ACTIVE";
    ProjectGrantState[ProjectGrantState["PROJECT_GRANT_STATE_INACTIVE"] = 2] = "PROJECT_GRANT_STATE_INACTIVE";
    ProjectGrantState[ProjectGrantState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProjectGrantState || (exports.ProjectGrantState = ProjectGrantState = {}));
function projectGrantStateFromJSON(object) {
    switch (object) {
        case 0:
        case "PROJECT_GRANT_STATE_UNSPECIFIED":
            return ProjectGrantState.PROJECT_GRANT_STATE_UNSPECIFIED;
        case 1:
        case "PROJECT_GRANT_STATE_ACTIVE":
            return ProjectGrantState.PROJECT_GRANT_STATE_ACTIVE;
        case 2:
        case "PROJECT_GRANT_STATE_INACTIVE":
            return ProjectGrantState.PROJECT_GRANT_STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProjectGrantState.UNRECOGNIZED;
    }
}
exports.projectGrantStateFromJSON = projectGrantStateFromJSON;
function projectGrantStateToJSON(object) {
    switch (object) {
        case ProjectGrantState.PROJECT_GRANT_STATE_UNSPECIFIED:
            return "PROJECT_GRANT_STATE_UNSPECIFIED";
        case ProjectGrantState.PROJECT_GRANT_STATE_ACTIVE:
            return "PROJECT_GRANT_STATE_ACTIVE";
        case ProjectGrantState.PROJECT_GRANT_STATE_INACTIVE:
            return "PROJECT_GRANT_STATE_INACTIVE";
        case ProjectGrantState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.projectGrantStateToJSON = projectGrantStateToJSON;
function createBaseProject() {
    return {
        id: "",
        details: undefined,
        name: "",
        state: 0,
        projectRoleAssertion: false,
        projectRoleCheck: false,
        hasProjectCheck: false,
        privateLabelingSetting: 0,
    };
}
exports.Project = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.projectRoleAssertion === true) {
            writer.uint32(40).bool(message.projectRoleAssertion);
        }
        if (message.projectRoleCheck === true) {
            writer.uint32(48).bool(message.projectRoleCheck);
        }
        if (message.hasProjectCheck === true) {
            writer.uint32(56).bool(message.hasProjectCheck);
        }
        if (message.privateLabelingSetting !== 0) {
            writer.uint32(64).int32(message.privateLabelingSetting);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProject();
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
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.projectRoleAssertion = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.projectRoleCheck = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.hasProjectCheck = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.privateLabelingSetting = reader.int32();
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
            name: isSet(object.name) ? String(object.name) : "",
            state: isSet(object.state) ? projectStateFromJSON(object.state) : 0,
            projectRoleAssertion: isSet(object.projectRoleAssertion) ? Boolean(object.projectRoleAssertion) : false,
            projectRoleCheck: isSet(object.projectRoleCheck) ? Boolean(object.projectRoleCheck) : false,
            hasProjectCheck: isSet(object.hasProjectCheck) ? Boolean(object.hasProjectCheck) : false,
            privateLabelingSetting: isSet(object.privateLabelingSetting)
                ? privateLabelingSettingFromJSON(object.privateLabelingSetting)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.state !== undefined && (obj.state = projectStateToJSON(message.state));
        message.projectRoleAssertion !== undefined && (obj.projectRoleAssertion = message.projectRoleAssertion);
        message.projectRoleCheck !== undefined && (obj.projectRoleCheck = message.projectRoleCheck);
        message.hasProjectCheck !== undefined && (obj.hasProjectCheck = message.hasProjectCheck);
        message.privateLabelingSetting !== undefined &&
            (obj.privateLabelingSetting = privateLabelingSettingToJSON(message.privateLabelingSetting));
        return obj;
    },
    create(base) {
        return exports.Project.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProject();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.name = object.name ?? "";
        message.state = object.state ?? 0;
        message.projectRoleAssertion = object.projectRoleAssertion ?? false;
        message.projectRoleCheck = object.projectRoleCheck ?? false;
        message.hasProjectCheck = object.hasProjectCheck ?? false;
        message.privateLabelingSetting = object.privateLabelingSetting ?? 0;
        return message;
    },
};
function createBaseGrantedProject() {
    return {
        grantId: "",
        grantedOrgId: "",
        grantedOrgName: "",
        grantedRoleKeys: [],
        state: 0,
        projectId: "",
        projectName: "",
        projectOwnerId: "",
        projectOwnerName: "",
        details: undefined,
    };
}
exports.GrantedProject = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.grantId !== "") {
            writer.uint32(10).string(message.grantId);
        }
        if (message.grantedOrgId !== "") {
            writer.uint32(18).string(message.grantedOrgId);
        }
        if (message.grantedOrgName !== "") {
            writer.uint32(26).string(message.grantedOrgName);
        }
        for (const v of message.grantedRoleKeys) {
            writer.uint32(34).string(v);
        }
        if (message.state !== 0) {
            writer.uint32(40).int32(message.state);
        }
        if (message.projectId !== "") {
            writer.uint32(50).string(message.projectId);
        }
        if (message.projectName !== "") {
            writer.uint32(58).string(message.projectName);
        }
        if (message.projectOwnerId !== "") {
            writer.uint32(66).string(message.projectOwnerId);
        }
        if (message.projectOwnerName !== "") {
            writer.uint32(74).string(message.projectOwnerName);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantedProject();
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
                    message.grantedOrgId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.grantedOrgName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.grantedRoleKeys.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.projectName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.projectOwnerId = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.projectOwnerName = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
            grantedOrgId: isSet(object.grantedOrgId) ? String(object.grantedOrgId) : "",
            grantedOrgName: isSet(object.grantedOrgName) ? String(object.grantedOrgName) : "",
            grantedRoleKeys: Array.isArray(object?.grantedRoleKeys) ? object.grantedRoleKeys.map((e) => String(e)) : [],
            state: isSet(object.state) ? projectGrantStateFromJSON(object.state) : 0,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            projectName: isSet(object.projectName) ? String(object.projectName) : "",
            projectOwnerId: isSet(object.projectOwnerId) ? String(object.projectOwnerId) : "",
            projectOwnerName: isSet(object.projectOwnerName) ? String(object.projectOwnerName) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.grantId !== undefined && (obj.grantId = message.grantId);
        message.grantedOrgId !== undefined && (obj.grantedOrgId = message.grantedOrgId);
        message.grantedOrgName !== undefined && (obj.grantedOrgName = message.grantedOrgName);
        if (message.grantedRoleKeys) {
            obj.grantedRoleKeys = message.grantedRoleKeys.map((e) => e);
        }
        else {
            obj.grantedRoleKeys = [];
        }
        message.state !== undefined && (obj.state = projectGrantStateToJSON(message.state));
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.projectName !== undefined && (obj.projectName = message.projectName);
        message.projectOwnerId !== undefined && (obj.projectOwnerId = message.projectOwnerId);
        message.projectOwnerName !== undefined && (obj.projectOwnerName = message.projectOwnerName);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.GrantedProject.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGrantedProject();
        message.grantId = object.grantId ?? "";
        message.grantedOrgId = object.grantedOrgId ?? "";
        message.grantedOrgName = object.grantedOrgName ?? "";
        message.grantedRoleKeys = object.grantedRoleKeys?.map((e) => e) || [];
        message.state = object.state ?? 0;
        message.projectId = object.projectId ?? "";
        message.projectName = object.projectName ?? "";
        message.projectOwnerId = object.projectOwnerId ?? "";
        message.projectOwnerName = object.projectOwnerName ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseProjectQuery() {
    return { nameQuery: undefined, projectResourceOwnerQuery: undefined };
}
exports.ProjectQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nameQuery !== undefined) {
            exports.ProjectNameQuery.encode(message.nameQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.projectResourceOwnerQuery !== undefined) {
            exports.ProjectResourceOwnerQuery.encode(message.projectResourceOwnerQuery, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nameQuery = exports.ProjectNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.projectResourceOwnerQuery = exports.ProjectResourceOwnerQuery.decode(reader, reader.uint32());
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
            nameQuery: isSet(object.nameQuery) ? exports.ProjectNameQuery.fromJSON(object.nameQuery) : undefined,
            projectResourceOwnerQuery: isSet(object.projectResourceOwnerQuery)
                ? exports.ProjectResourceOwnerQuery.fromJSON(object.projectResourceOwnerQuery)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nameQuery !== undefined &&
            (obj.nameQuery = message.nameQuery ? exports.ProjectNameQuery.toJSON(message.nameQuery) : undefined);
        message.projectResourceOwnerQuery !== undefined &&
            (obj.projectResourceOwnerQuery = message.projectResourceOwnerQuery
                ? exports.ProjectResourceOwnerQuery.toJSON(message.projectResourceOwnerQuery)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.ProjectQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProjectQuery();
        message.nameQuery = (object.nameQuery !== undefined && object.nameQuery !== null)
            ? exports.ProjectNameQuery.fromPartial(object.nameQuery)
            : undefined;
        message.projectResourceOwnerQuery =
            (object.projectResourceOwnerQuery !== undefined && object.projectResourceOwnerQuery !== null)
                ? exports.ProjectResourceOwnerQuery.fromPartial(object.projectResourceOwnerQuery)
                : undefined;
        return message;
    },
};
function createBaseProjectNameQuery() {
    return { name: "", method: 0 };
}
exports.ProjectNameQuery = {
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
        const message = createBaseProjectNameQuery();
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
        return exports.ProjectNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProjectNameQuery();
        message.name = object.name ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseProjectResourceOwnerQuery() {
    return { resourceOwner: "" };
}
exports.ProjectResourceOwnerQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceOwner !== "") {
            writer.uint32(10).string(message.resourceOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectResourceOwnerQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resourceOwner = reader.string();
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
        return { resourceOwner: isSet(object.resourceOwner) ? String(object.resourceOwner) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.resourceOwner !== undefined && (obj.resourceOwner = message.resourceOwner);
        return obj;
    },
    create(base) {
        return exports.ProjectResourceOwnerQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProjectResourceOwnerQuery();
        message.resourceOwner = object.resourceOwner ?? "";
        return message;
    },
};
function createBaseRole() {
    return { key: "", details: undefined, displayName: "", group: "" };
}
exports.Role = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.displayName !== "") {
            writer.uint32(26).string(message.displayName);
        }
        if (message.group !== "") {
            writer.uint32(34).string(message.group);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRole();
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
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.group = reader.string();
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            group: isSet(object.group) ? String(object.group) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.group !== undefined && (obj.group = message.group);
        return obj;
    },
    create(base) {
        return exports.Role.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRole();
        message.key = object.key ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.displayName = object.displayName ?? "";
        message.group = object.group ?? "";
        return message;
    },
};
function createBaseRoleQuery() {
    return { keyQuery: undefined, displayNameQuery: undefined };
}
exports.RoleQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyQuery !== undefined) {
            exports.RoleKeyQuery.encode(message.keyQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.displayNameQuery !== undefined) {
            exports.RoleDisplayNameQuery.encode(message.displayNameQuery, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoleQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keyQuery = exports.RoleKeyQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.displayNameQuery = exports.RoleDisplayNameQuery.decode(reader, reader.uint32());
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
            keyQuery: isSet(object.keyQuery) ? exports.RoleKeyQuery.fromJSON(object.keyQuery) : undefined,
            displayNameQuery: isSet(object.displayNameQuery)
                ? exports.RoleDisplayNameQuery.fromJSON(object.displayNameQuery)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.keyQuery !== undefined &&
            (obj.keyQuery = message.keyQuery ? exports.RoleKeyQuery.toJSON(message.keyQuery) : undefined);
        message.displayNameQuery !== undefined && (obj.displayNameQuery = message.displayNameQuery
            ? exports.RoleDisplayNameQuery.toJSON(message.displayNameQuery)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.RoleQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRoleQuery();
        message.keyQuery = (object.keyQuery !== undefined && object.keyQuery !== null)
            ? exports.RoleKeyQuery.fromPartial(object.keyQuery)
            : undefined;
        message.displayNameQuery = (object.displayNameQuery !== undefined && object.displayNameQuery !== null)
            ? exports.RoleDisplayNameQuery.fromPartial(object.displayNameQuery)
            : undefined;
        return message;
    },
};
function createBaseRoleKeyQuery() {
    return { key: "", method: 0 };
}
exports.RoleKeyQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoleKeyQuery();
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
            key: isSet(object.key) ? String(object.key) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.RoleKeyQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRoleKeyQuery();
        message.key = object.key ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseRoleDisplayNameQuery() {
    return { displayName: "", method: 0 };
}
exports.RoleDisplayNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.displayName !== "") {
            writer.uint32(10).string(message.displayName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoleDisplayNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.displayName = reader.string();
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
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.RoleDisplayNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRoleDisplayNameQuery();
        message.displayName = object.displayName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseProjectGrantQuery() {
    return { projectNameQuery: undefined, roleKeyQuery: undefined };
}
exports.ProjectGrantQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectNameQuery !== undefined) {
            exports.GrantProjectNameQuery.encode(message.projectNameQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.roleKeyQuery !== undefined) {
            exports.GrantRoleKeyQuery.encode(message.roleKeyQuery, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectGrantQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectNameQuery = exports.GrantProjectNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.roleKeyQuery = exports.GrantRoleKeyQuery.decode(reader, reader.uint32());
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
            projectNameQuery: isSet(object.projectNameQuery)
                ? exports.GrantProjectNameQuery.fromJSON(object.projectNameQuery)
                : undefined,
            roleKeyQuery: isSet(object.roleKeyQuery) ? exports.GrantRoleKeyQuery.fromJSON(object.roleKeyQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectNameQuery !== undefined && (obj.projectNameQuery = message.projectNameQuery
            ? exports.GrantProjectNameQuery.toJSON(message.projectNameQuery)
            : undefined);
        message.roleKeyQuery !== undefined &&
            (obj.roleKeyQuery = message.roleKeyQuery ? exports.GrantRoleKeyQuery.toJSON(message.roleKeyQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.ProjectGrantQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProjectGrantQuery();
        message.projectNameQuery = (object.projectNameQuery !== undefined && object.projectNameQuery !== null)
            ? exports.GrantProjectNameQuery.fromPartial(object.projectNameQuery)
            : undefined;
        message.roleKeyQuery = (object.roleKeyQuery !== undefined && object.roleKeyQuery !== null)
            ? exports.GrantRoleKeyQuery.fromPartial(object.roleKeyQuery)
            : undefined;
        return message;
    },
};
function createBaseAllProjectGrantQuery() {
    return {
        projectNameQuery: undefined,
        roleKeyQuery: undefined,
        projectIdQuery: undefined,
        grantedOrgIdQuery: undefined,
    };
}
exports.AllProjectGrantQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectNameQuery !== undefined) {
            exports.GrantProjectNameQuery.encode(message.projectNameQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.roleKeyQuery !== undefined) {
            exports.GrantRoleKeyQuery.encode(message.roleKeyQuery, writer.uint32(18).fork()).ldelim();
        }
        if (message.projectIdQuery !== undefined) {
            exports.ProjectIDQuery.encode(message.projectIdQuery, writer.uint32(26).fork()).ldelim();
        }
        if (message.grantedOrgIdQuery !== undefined) {
            exports.GrantedOrgIDQuery.encode(message.grantedOrgIdQuery, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllProjectGrantQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectNameQuery = exports.GrantProjectNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.roleKeyQuery = exports.GrantRoleKeyQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.projectIdQuery = exports.ProjectIDQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.grantedOrgIdQuery = exports.GrantedOrgIDQuery.decode(reader, reader.uint32());
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
            projectNameQuery: isSet(object.projectNameQuery)
                ? exports.GrantProjectNameQuery.fromJSON(object.projectNameQuery)
                : undefined,
            roleKeyQuery: isSet(object.roleKeyQuery) ? exports.GrantRoleKeyQuery.fromJSON(object.roleKeyQuery) : undefined,
            projectIdQuery: isSet(object.projectIdQuery) ? exports.ProjectIDQuery.fromJSON(object.projectIdQuery) : undefined,
            grantedOrgIdQuery: isSet(object.grantedOrgIdQuery)
                ? exports.GrantedOrgIDQuery.fromJSON(object.grantedOrgIdQuery)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectNameQuery !== undefined && (obj.projectNameQuery = message.projectNameQuery
            ? exports.GrantProjectNameQuery.toJSON(message.projectNameQuery)
            : undefined);
        message.roleKeyQuery !== undefined &&
            (obj.roleKeyQuery = message.roleKeyQuery ? exports.GrantRoleKeyQuery.toJSON(message.roleKeyQuery) : undefined);
        message.projectIdQuery !== undefined &&
            (obj.projectIdQuery = message.projectIdQuery ? exports.ProjectIDQuery.toJSON(message.projectIdQuery) : undefined);
        message.grantedOrgIdQuery !== undefined && (obj.grantedOrgIdQuery = message.grantedOrgIdQuery
            ? exports.GrantedOrgIDQuery.toJSON(message.grantedOrgIdQuery)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.AllProjectGrantQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAllProjectGrantQuery();
        message.projectNameQuery = (object.projectNameQuery !== undefined && object.projectNameQuery !== null)
            ? exports.GrantProjectNameQuery.fromPartial(object.projectNameQuery)
            : undefined;
        message.roleKeyQuery = (object.roleKeyQuery !== undefined && object.roleKeyQuery !== null)
            ? exports.GrantRoleKeyQuery.fromPartial(object.roleKeyQuery)
            : undefined;
        message.projectIdQuery = (object.projectIdQuery !== undefined && object.projectIdQuery !== null)
            ? exports.ProjectIDQuery.fromPartial(object.projectIdQuery)
            : undefined;
        message.grantedOrgIdQuery = (object.grantedOrgIdQuery !== undefined && object.grantedOrgIdQuery !== null)
            ? exports.GrantedOrgIDQuery.fromPartial(object.grantedOrgIdQuery)
            : undefined;
        return message;
    },
};
function createBaseGrantProjectNameQuery() {
    return { name: "", method: 0 };
}
exports.GrantProjectNameQuery = {
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
        const message = createBaseGrantProjectNameQuery();
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
        return exports.GrantProjectNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGrantProjectNameQuery();
        message.name = object.name ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseGrantRoleKeyQuery() {
    return { roleKey: "", method: 0 };
}
exports.GrantRoleKeyQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roleKey !== "") {
            writer.uint32(10).string(message.roleKey);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantRoleKeyQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.roleKey = reader.string();
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
            roleKey: isSet(object.roleKey) ? String(object.roleKey) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.roleKey !== undefined && (obj.roleKey = message.roleKey);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.GrantRoleKeyQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGrantRoleKeyQuery();
        message.roleKey = object.roleKey ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseProjectIDQuery() {
    return { projectId: "" };
}
exports.ProjectIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
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
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create(base) {
        return exports.ProjectIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProjectIDQuery();
        message.projectId = object.projectId ?? "";
        return message;
    },
};
function createBaseGrantedOrgIDQuery() {
    return { grantedOrgId: "" };
}
exports.GrantedOrgIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.grantedOrgId !== "") {
            writer.uint32(10).string(message.grantedOrgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantedOrgIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.grantedOrgId = reader.string();
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
        return { grantedOrgId: isSet(object.grantedOrgId) ? String(object.grantedOrgId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.grantedOrgId !== undefined && (obj.grantedOrgId = message.grantedOrgId);
        return obj;
    },
    create(base) {
        return exports.GrantedOrgIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGrantedOrgIDQuery();
        message.grantedOrgId = object.grantedOrgId ?? "";
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
