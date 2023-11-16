"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainNameQuery = exports.DomainSearchQuery = exports.OrgStateQuery = exports.OrgDomainQuery = exports.OrgNameQuery = exports.OrgQuery = exports.Domain = exports.Org = exports.orgFieldNameToJSON = exports.orgFieldNameFromJSON = exports.OrgFieldName = exports.domainValidationTypeToJSON = exports.domainValidationTypeFromJSON = exports.DomainValidationType = exports.orgStateToJSON = exports.orgStateFromJSON = exports.OrgState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const object_1 = require("./object");
exports.protobufPackage = "zitadel.org.v1";
var OrgState;
(function (OrgState) {
    OrgState[OrgState["ORG_STATE_UNSPECIFIED"] = 0] = "ORG_STATE_UNSPECIFIED";
    OrgState[OrgState["ORG_STATE_ACTIVE"] = 1] = "ORG_STATE_ACTIVE";
    OrgState[OrgState["ORG_STATE_INACTIVE"] = 2] = "ORG_STATE_INACTIVE";
    OrgState[OrgState["ORG_STATE_REMOVED"] = 3] = "ORG_STATE_REMOVED";
    OrgState[OrgState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrgState || (exports.OrgState = OrgState = {}));
function orgStateFromJSON(object) {
    switch (object) {
        case 0:
        case "ORG_STATE_UNSPECIFIED":
            return OrgState.ORG_STATE_UNSPECIFIED;
        case 1:
        case "ORG_STATE_ACTIVE":
            return OrgState.ORG_STATE_ACTIVE;
        case 2:
        case "ORG_STATE_INACTIVE":
            return OrgState.ORG_STATE_INACTIVE;
        case 3:
        case "ORG_STATE_REMOVED":
            return OrgState.ORG_STATE_REMOVED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrgState.UNRECOGNIZED;
    }
}
exports.orgStateFromJSON = orgStateFromJSON;
function orgStateToJSON(object) {
    switch (object) {
        case OrgState.ORG_STATE_UNSPECIFIED:
            return "ORG_STATE_UNSPECIFIED";
        case OrgState.ORG_STATE_ACTIVE:
            return "ORG_STATE_ACTIVE";
        case OrgState.ORG_STATE_INACTIVE:
            return "ORG_STATE_INACTIVE";
        case OrgState.ORG_STATE_REMOVED:
            return "ORG_STATE_REMOVED";
        case OrgState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orgStateToJSON = orgStateToJSON;
var DomainValidationType;
(function (DomainValidationType) {
    DomainValidationType[DomainValidationType["DOMAIN_VALIDATION_TYPE_UNSPECIFIED"] = 0] = "DOMAIN_VALIDATION_TYPE_UNSPECIFIED";
    DomainValidationType[DomainValidationType["DOMAIN_VALIDATION_TYPE_HTTP"] = 1] = "DOMAIN_VALIDATION_TYPE_HTTP";
    DomainValidationType[DomainValidationType["DOMAIN_VALIDATION_TYPE_DNS"] = 2] = "DOMAIN_VALIDATION_TYPE_DNS";
    DomainValidationType[DomainValidationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DomainValidationType || (exports.DomainValidationType = DomainValidationType = {}));
function domainValidationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DOMAIN_VALIDATION_TYPE_UNSPECIFIED":
            return DomainValidationType.DOMAIN_VALIDATION_TYPE_UNSPECIFIED;
        case 1:
        case "DOMAIN_VALIDATION_TYPE_HTTP":
            return DomainValidationType.DOMAIN_VALIDATION_TYPE_HTTP;
        case 2:
        case "DOMAIN_VALIDATION_TYPE_DNS":
            return DomainValidationType.DOMAIN_VALIDATION_TYPE_DNS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DomainValidationType.UNRECOGNIZED;
    }
}
exports.domainValidationTypeFromJSON = domainValidationTypeFromJSON;
function domainValidationTypeToJSON(object) {
    switch (object) {
        case DomainValidationType.DOMAIN_VALIDATION_TYPE_UNSPECIFIED:
            return "DOMAIN_VALIDATION_TYPE_UNSPECIFIED";
        case DomainValidationType.DOMAIN_VALIDATION_TYPE_HTTP:
            return "DOMAIN_VALIDATION_TYPE_HTTP";
        case DomainValidationType.DOMAIN_VALIDATION_TYPE_DNS:
            return "DOMAIN_VALIDATION_TYPE_DNS";
        case DomainValidationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.domainValidationTypeToJSON = domainValidationTypeToJSON;
var OrgFieldName;
(function (OrgFieldName) {
    OrgFieldName[OrgFieldName["ORG_FIELD_NAME_UNSPECIFIED"] = 0] = "ORG_FIELD_NAME_UNSPECIFIED";
    OrgFieldName[OrgFieldName["ORG_FIELD_NAME_NAME"] = 1] = "ORG_FIELD_NAME_NAME";
    OrgFieldName[OrgFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrgFieldName || (exports.OrgFieldName = OrgFieldName = {}));
function orgFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "ORG_FIELD_NAME_UNSPECIFIED":
            return OrgFieldName.ORG_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "ORG_FIELD_NAME_NAME":
            return OrgFieldName.ORG_FIELD_NAME_NAME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrgFieldName.UNRECOGNIZED;
    }
}
exports.orgFieldNameFromJSON = orgFieldNameFromJSON;
function orgFieldNameToJSON(object) {
    switch (object) {
        case OrgFieldName.ORG_FIELD_NAME_UNSPECIFIED:
            return "ORG_FIELD_NAME_UNSPECIFIED";
        case OrgFieldName.ORG_FIELD_NAME_NAME:
            return "ORG_FIELD_NAME_NAME";
        case OrgFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orgFieldNameToJSON = orgFieldNameToJSON;
function createBaseOrg() {
    return { id: "", details: undefined, state: 0, name: "", primaryDomain: "" };
}
exports.Org = {
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
        if (message.primaryDomain !== "") {
            writer.uint32(42).string(message.primaryDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrg();
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
                    message.primaryDomain = reader.string();
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
            state: isSet(object.state) ? orgStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            primaryDomain: isSet(object.primaryDomain) ? String(object.primaryDomain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.state !== undefined && (obj.state = orgStateToJSON(message.state));
        message.name !== undefined && (obj.name = message.name);
        message.primaryDomain !== undefined && (obj.primaryDomain = message.primaryDomain);
        return obj;
    },
    create(base) {
        return exports.Org.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrg();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.name = object.name ?? "";
        message.primaryDomain = object.primaryDomain ?? "";
        return message;
    },
};
function createBaseDomain() {
    return { orgId: "", details: undefined, domainName: "", isVerified: false, isPrimary: false, validationType: 0 };
}
exports.Domain = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.domainName !== "") {
            writer.uint32(26).string(message.domainName);
        }
        if (message.isVerified === true) {
            writer.uint32(32).bool(message.isVerified);
        }
        if (message.isPrimary === true) {
            writer.uint32(40).bool(message.isPrimary);
        }
        if (message.validationType !== 0) {
            writer.uint32(48).int32(message.validationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomain();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.domainName = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isVerified = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isPrimary = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.validationType = reader.int32();
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            domainName: isSet(object.domainName) ? String(object.domainName) : "",
            isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : false,
            isPrimary: isSet(object.isPrimary) ? Boolean(object.isPrimary) : false,
            validationType: isSet(object.validationType) ? domainValidationTypeFromJSON(object.validationType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.domainName !== undefined && (obj.domainName = message.domainName);
        message.isVerified !== undefined && (obj.isVerified = message.isVerified);
        message.isPrimary !== undefined && (obj.isPrimary = message.isPrimary);
        message.validationType !== undefined && (obj.validationType = domainValidationTypeToJSON(message.validationType));
        return obj;
    },
    create(base) {
        return exports.Domain.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomain();
        message.orgId = object.orgId ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.domainName = object.domainName ?? "";
        message.isVerified = object.isVerified ?? false;
        message.isPrimary = object.isPrimary ?? false;
        message.validationType = object.validationType ?? 0;
        return message;
    },
};
function createBaseOrgQuery() {
    return { nameQuery: undefined, domainQuery: undefined, stateQuery: undefined };
}
exports.OrgQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nameQuery !== undefined) {
            exports.OrgNameQuery.encode(message.nameQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.domainQuery !== undefined) {
            exports.OrgDomainQuery.encode(message.domainQuery, writer.uint32(18).fork()).ldelim();
        }
        if (message.stateQuery !== undefined) {
            exports.OrgStateQuery.encode(message.stateQuery, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrgQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nameQuery = exports.OrgNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.domainQuery = exports.OrgDomainQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.stateQuery = exports.OrgStateQuery.decode(reader, reader.uint32());
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
            nameQuery: isSet(object.nameQuery) ? exports.OrgNameQuery.fromJSON(object.nameQuery) : undefined,
            domainQuery: isSet(object.domainQuery) ? exports.OrgDomainQuery.fromJSON(object.domainQuery) : undefined,
            stateQuery: isSet(object.stateQuery) ? exports.OrgStateQuery.fromJSON(object.stateQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nameQuery !== undefined &&
            (obj.nameQuery = message.nameQuery ? exports.OrgNameQuery.toJSON(message.nameQuery) : undefined);
        message.domainQuery !== undefined &&
            (obj.domainQuery = message.domainQuery ? exports.OrgDomainQuery.toJSON(message.domainQuery) : undefined);
        message.stateQuery !== undefined &&
            (obj.stateQuery = message.stateQuery ? exports.OrgStateQuery.toJSON(message.stateQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.OrgQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrgQuery();
        message.nameQuery = (object.nameQuery !== undefined && object.nameQuery !== null)
            ? exports.OrgNameQuery.fromPartial(object.nameQuery)
            : undefined;
        message.domainQuery = (object.domainQuery !== undefined && object.domainQuery !== null)
            ? exports.OrgDomainQuery.fromPartial(object.domainQuery)
            : undefined;
        message.stateQuery = (object.stateQuery !== undefined && object.stateQuery !== null)
            ? exports.OrgStateQuery.fromPartial(object.stateQuery)
            : undefined;
        return message;
    },
};
function createBaseOrgNameQuery() {
    return { name: "", method: 0 };
}
exports.OrgNameQuery = {
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
        const message = createBaseOrgNameQuery();
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
        return exports.OrgNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrgNameQuery();
        message.name = object.name ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseOrgDomainQuery() {
    return { domain: "", method: 0 };
}
exports.OrgDomainQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.domain !== "") {
            writer.uint32(10).string(message.domain);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrgDomainQuery();
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
            domain: isSet(object.domain) ? String(object.domain) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.domain !== undefined && (obj.domain = message.domain);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.OrgDomainQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrgDomainQuery();
        message.domain = object.domain ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseOrgStateQuery() {
    return { state: 0 };
}
exports.OrgStateQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrgStateQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
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
        return { state: isSet(object.state) ? orgStateFromJSON(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = orgStateToJSON(message.state));
        return obj;
    },
    create(base) {
        return exports.OrgStateQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrgStateQuery();
        message.state = object.state ?? 0;
        return message;
    },
};
function createBaseDomainSearchQuery() {
    return { domainNameQuery: undefined };
}
exports.DomainSearchQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.domainNameQuery !== undefined) {
            exports.DomainNameQuery.encode(message.domainNameQuery, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomainSearchQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.domainNameQuery = exports.DomainNameQuery.decode(reader, reader.uint32());
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
            domainNameQuery: isSet(object.domainNameQuery) ? exports.DomainNameQuery.fromJSON(object.domainNameQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.domainNameQuery !== undefined &&
            (obj.domainNameQuery = message.domainNameQuery ? exports.DomainNameQuery.toJSON(message.domainNameQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.DomainSearchQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomainSearchQuery();
        message.domainNameQuery = (object.domainNameQuery !== undefined && object.domainNameQuery !== null)
            ? exports.DomainNameQuery.fromPartial(object.domainNameQuery)
            : undefined;
        return message;
    },
};
function createBaseDomainNameQuery() {
    return { name: "", method: 0 };
}
exports.DomainNameQuery = {
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
        const message = createBaseDomainNameQuery();
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
        return exports.DomainNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomainNameQuery();
        message.name = object.name ?? "";
        message.method = object.method ?? 0;
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
