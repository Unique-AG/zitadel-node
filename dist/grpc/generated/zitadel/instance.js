"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainPrimaryQuery = exports.DomainGeneratedQuery = exports.DomainQuery = exports.DomainSearchQuery = exports.Domain = exports.DomainsQuery = exports.IdsQuery = exports.Query = exports.InstanceDetail = exports.Instance = exports.domainFieldNameToJSON = exports.domainFieldNameFromJSON = exports.DomainFieldName = exports.fieldNameToJSON = exports.fieldNameFromJSON = exports.FieldName = exports.stateToJSON = exports.stateFromJSON = exports.State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const object_1 = require("./object");
exports.protobufPackage = "zitadel.instance.v1";
var State;
(function (State) {
    State[State["STATE_UNSPECIFIED"] = 0] = "STATE_UNSPECIFIED";
    State[State["STATE_CREATING"] = 1] = "STATE_CREATING";
    State[State["STATE_RUNNING"] = 2] = "STATE_RUNNING";
    State[State["STATE_STOPPING"] = 3] = "STATE_STOPPING";
    State[State["STATE_STOPPED"] = 4] = "STATE_STOPPED";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (exports.State = State = {}));
function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNSPECIFIED":
            return State.STATE_UNSPECIFIED;
        case 1:
        case "STATE_CREATING":
            return State.STATE_CREATING;
        case 2:
        case "STATE_RUNNING":
            return State.STATE_RUNNING;
        case 3:
        case "STATE_STOPPING":
            return State.STATE_STOPPING;
        case 4:
        case "STATE_STOPPED":
            return State.STATE_STOPPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
exports.stateFromJSON = stateFromJSON;
function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNSPECIFIED:
            return "STATE_UNSPECIFIED";
        case State.STATE_CREATING:
            return "STATE_CREATING";
        case State.STATE_RUNNING:
            return "STATE_RUNNING";
        case State.STATE_STOPPING:
            return "STATE_STOPPING";
        case State.STATE_STOPPED:
            return "STATE_STOPPED";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.stateToJSON = stateToJSON;
var FieldName;
(function (FieldName) {
    FieldName[FieldName["FIELD_NAME_UNSPECIFIED"] = 0] = "FIELD_NAME_UNSPECIFIED";
    FieldName[FieldName["FIELD_NAME_ID"] = 1] = "FIELD_NAME_ID";
    FieldName[FieldName["FIELD_NAME_NAME"] = 2] = "FIELD_NAME_NAME";
    FieldName[FieldName["FIELD_NAME_CREATION_DATE"] = 3] = "FIELD_NAME_CREATION_DATE";
    FieldName[FieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldName || (exports.FieldName = FieldName = {}));
function fieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "FIELD_NAME_UNSPECIFIED":
            return FieldName.FIELD_NAME_UNSPECIFIED;
        case 1:
        case "FIELD_NAME_ID":
            return FieldName.FIELD_NAME_ID;
        case 2:
        case "FIELD_NAME_NAME":
            return FieldName.FIELD_NAME_NAME;
        case 3:
        case "FIELD_NAME_CREATION_DATE":
            return FieldName.FIELD_NAME_CREATION_DATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldName.UNRECOGNIZED;
    }
}
exports.fieldNameFromJSON = fieldNameFromJSON;
function fieldNameToJSON(object) {
    switch (object) {
        case FieldName.FIELD_NAME_UNSPECIFIED:
            return "FIELD_NAME_UNSPECIFIED";
        case FieldName.FIELD_NAME_ID:
            return "FIELD_NAME_ID";
        case FieldName.FIELD_NAME_NAME:
            return "FIELD_NAME_NAME";
        case FieldName.FIELD_NAME_CREATION_DATE:
            return "FIELD_NAME_CREATION_DATE";
        case FieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldNameToJSON = fieldNameToJSON;
var DomainFieldName;
(function (DomainFieldName) {
    DomainFieldName[DomainFieldName["DOMAIN_FIELD_NAME_UNSPECIFIED"] = 0] = "DOMAIN_FIELD_NAME_UNSPECIFIED";
    DomainFieldName[DomainFieldName["DOMAIN_FIELD_NAME_DOMAIN"] = 1] = "DOMAIN_FIELD_NAME_DOMAIN";
    DomainFieldName[DomainFieldName["DOMAIN_FIELD_NAME_PRIMARY"] = 2] = "DOMAIN_FIELD_NAME_PRIMARY";
    DomainFieldName[DomainFieldName["DOMAIN_FIELD_NAME_GENERATED"] = 3] = "DOMAIN_FIELD_NAME_GENERATED";
    DomainFieldName[DomainFieldName["DOMAIN_FIELD_NAME_CREATION_DATE"] = 4] = "DOMAIN_FIELD_NAME_CREATION_DATE";
    DomainFieldName[DomainFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DomainFieldName || (exports.DomainFieldName = DomainFieldName = {}));
function domainFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "DOMAIN_FIELD_NAME_UNSPECIFIED":
            return DomainFieldName.DOMAIN_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "DOMAIN_FIELD_NAME_DOMAIN":
            return DomainFieldName.DOMAIN_FIELD_NAME_DOMAIN;
        case 2:
        case "DOMAIN_FIELD_NAME_PRIMARY":
            return DomainFieldName.DOMAIN_FIELD_NAME_PRIMARY;
        case 3:
        case "DOMAIN_FIELD_NAME_GENERATED":
            return DomainFieldName.DOMAIN_FIELD_NAME_GENERATED;
        case 4:
        case "DOMAIN_FIELD_NAME_CREATION_DATE":
            return DomainFieldName.DOMAIN_FIELD_NAME_CREATION_DATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DomainFieldName.UNRECOGNIZED;
    }
}
exports.domainFieldNameFromJSON = domainFieldNameFromJSON;
function domainFieldNameToJSON(object) {
    switch (object) {
        case DomainFieldName.DOMAIN_FIELD_NAME_UNSPECIFIED:
            return "DOMAIN_FIELD_NAME_UNSPECIFIED";
        case DomainFieldName.DOMAIN_FIELD_NAME_DOMAIN:
            return "DOMAIN_FIELD_NAME_DOMAIN";
        case DomainFieldName.DOMAIN_FIELD_NAME_PRIMARY:
            return "DOMAIN_FIELD_NAME_PRIMARY";
        case DomainFieldName.DOMAIN_FIELD_NAME_GENERATED:
            return "DOMAIN_FIELD_NAME_GENERATED";
        case DomainFieldName.DOMAIN_FIELD_NAME_CREATION_DATE:
            return "DOMAIN_FIELD_NAME_CREATION_DATE";
        case DomainFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.domainFieldNameToJSON = domainFieldNameToJSON;
function createBaseInstance() {
    return { id: "", details: undefined, state: 0, name: "", version: "", domains: [] };
}
exports.Instance = {
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
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        for (const v of message.domains) {
            exports.Domain.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstance();
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
                    message.version = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.domains.push(exports.Domain.decode(reader, reader.uint32()));
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
            state: isSet(object.state) ? stateFromJSON(object.state) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            version: isSet(object.version) ? String(object.version) : "",
            domains: Array.isArray(object?.domains) ? object.domains.map((e) => exports.Domain.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        if (message.domains) {
            obj.domains = message.domains.map((e) => e ? exports.Domain.toJSON(e) : undefined);
        }
        else {
            obj.domains = [];
        }
        return obj;
    },
    create(base) {
        return exports.Instance.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInstance();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.name = object.name ?? "";
        message.version = object.version ?? "";
        message.domains = object.domains?.map((e) => exports.Domain.fromPartial(e)) || [];
        return message;
    },
};
function createBaseInstanceDetail() {
    return { id: "", details: undefined, state: 0, name: "", version: "", domains: [] };
}
exports.InstanceDetail = {
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
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        for (const v of message.domains) {
            exports.Domain.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstanceDetail();
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
                    message.version = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.domains.push(exports.Domain.decode(reader, reader.uint32()));
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
            state: isSet(object.state) ? stateFromJSON(object.state) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            version: isSet(object.version) ? String(object.version) : "",
            domains: Array.isArray(object?.domains) ? object.domains.map((e) => exports.Domain.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        if (message.domains) {
            obj.domains = message.domains.map((e) => e ? exports.Domain.toJSON(e) : undefined);
        }
        else {
            obj.domains = [];
        }
        return obj;
    },
    create(base) {
        return exports.InstanceDetail.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInstanceDetail();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.name = object.name ?? "";
        message.version = object.version ?? "";
        message.domains = object.domains?.map((e) => exports.Domain.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQuery() {
    return { idQuery: undefined, domainQuery: undefined };
}
exports.Query = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idQuery !== undefined) {
            exports.IdsQuery.encode(message.idQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.domainQuery !== undefined) {
            exports.DomainsQuery.encode(message.domainQuery, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idQuery = exports.IdsQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.domainQuery = exports.DomainsQuery.decode(reader, reader.uint32());
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
            idQuery: isSet(object.idQuery) ? exports.IdsQuery.fromJSON(object.idQuery) : undefined,
            domainQuery: isSet(object.domainQuery) ? exports.DomainsQuery.fromJSON(object.domainQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idQuery !== undefined && (obj.idQuery = message.idQuery ? exports.IdsQuery.toJSON(message.idQuery) : undefined);
        message.domainQuery !== undefined &&
            (obj.domainQuery = message.domainQuery ? exports.DomainsQuery.toJSON(message.domainQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.Query.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuery();
        message.idQuery = (object.idQuery !== undefined && object.idQuery !== null)
            ? exports.IdsQuery.fromPartial(object.idQuery)
            : undefined;
        message.domainQuery = (object.domainQuery !== undefined && object.domainQuery !== null)
            ? exports.DomainsQuery.fromPartial(object.domainQuery)
            : undefined;
        return message;
    },
};
function createBaseIdsQuery() {
    return { ids: [] };
}
exports.IdsQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ids) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdsQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ids.push(reader.string());
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
        return { ids: Array.isArray(object?.ids) ? object.ids.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map((e) => e);
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    create(base) {
        return exports.IdsQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIdsQuery();
        message.ids = object.ids?.map((e) => e) || [];
        return message;
    },
};
function createBaseDomainsQuery() {
    return { domains: [] };
}
exports.DomainsQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.domains) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomainsQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.domains.push(reader.string());
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
        return { domains: Array.isArray(object?.domains) ? object.domains.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.domains) {
            obj.domains = message.domains.map((e) => e);
        }
        else {
            obj.domains = [];
        }
        return obj;
    },
    create(base) {
        return exports.DomainsQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomainsQuery();
        message.domains = object.domains?.map((e) => e) || [];
        return message;
    },
};
function createBaseDomain() {
    return { details: undefined, domain: "", primary: false, generated: false };
}
exports.Domain = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.domain !== "") {
            writer.uint32(18).string(message.domain);
        }
        if (message.primary === true) {
            writer.uint32(24).bool(message.primary);
        }
        if (message.generated === true) {
            writer.uint32(32).bool(message.generated);
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
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.domain = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.primary = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.generated = reader.bool();
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
            domain: isSet(object.domain) ? String(object.domain) : "",
            primary: isSet(object.primary) ? Boolean(object.primary) : false,
            generated: isSet(object.generated) ? Boolean(object.generated) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.domain !== undefined && (obj.domain = message.domain);
        message.primary !== undefined && (obj.primary = message.primary);
        message.generated !== undefined && (obj.generated = message.generated);
        return obj;
    },
    create(base) {
        return exports.Domain.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomain();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.domain = object.domain ?? "";
        message.primary = object.primary ?? false;
        message.generated = object.generated ?? false;
        return message;
    },
};
function createBaseDomainSearchQuery() {
    return { domainQuery: undefined, generatedQuery: undefined, primaryQuery: undefined };
}
exports.DomainSearchQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.domainQuery !== undefined) {
            exports.DomainQuery.encode(message.domainQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.generatedQuery !== undefined) {
            exports.DomainGeneratedQuery.encode(message.generatedQuery, writer.uint32(18).fork()).ldelim();
        }
        if (message.primaryQuery !== undefined) {
            exports.DomainPrimaryQuery.encode(message.primaryQuery, writer.uint32(26).fork()).ldelim();
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
                    message.domainQuery = exports.DomainQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.generatedQuery = exports.DomainGeneratedQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.primaryQuery = exports.DomainPrimaryQuery.decode(reader, reader.uint32());
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
            domainQuery: isSet(object.domainQuery) ? exports.DomainQuery.fromJSON(object.domainQuery) : undefined,
            generatedQuery: isSet(object.generatedQuery) ? exports.DomainGeneratedQuery.fromJSON(object.generatedQuery) : undefined,
            primaryQuery: isSet(object.primaryQuery) ? exports.DomainPrimaryQuery.fromJSON(object.primaryQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.domainQuery !== undefined &&
            (obj.domainQuery = message.domainQuery ? exports.DomainQuery.toJSON(message.domainQuery) : undefined);
        message.generatedQuery !== undefined &&
            (obj.generatedQuery = message.generatedQuery ? exports.DomainGeneratedQuery.toJSON(message.generatedQuery) : undefined);
        message.primaryQuery !== undefined &&
            (obj.primaryQuery = message.primaryQuery ? exports.DomainPrimaryQuery.toJSON(message.primaryQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.DomainSearchQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomainSearchQuery();
        message.domainQuery = (object.domainQuery !== undefined && object.domainQuery !== null)
            ? exports.DomainQuery.fromPartial(object.domainQuery)
            : undefined;
        message.generatedQuery = (object.generatedQuery !== undefined && object.generatedQuery !== null)
            ? exports.DomainGeneratedQuery.fromPartial(object.generatedQuery)
            : undefined;
        message.primaryQuery = (object.primaryQuery !== undefined && object.primaryQuery !== null)
            ? exports.DomainPrimaryQuery.fromPartial(object.primaryQuery)
            : undefined;
        return message;
    },
};
function createBaseDomainQuery() {
    return { domain: "", method: 0 };
}
exports.DomainQuery = {
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
        const message = createBaseDomainQuery();
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
        return exports.DomainQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomainQuery();
        message.domain = object.domain ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseDomainGeneratedQuery() {
    return { generated: false };
}
exports.DomainGeneratedQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.generated === true) {
            writer.uint32(8).bool(message.generated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomainGeneratedQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.generated = reader.bool();
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
        return { generated: isSet(object.generated) ? Boolean(object.generated) : false };
    },
    toJSON(message) {
        const obj = {};
        message.generated !== undefined && (obj.generated = message.generated);
        return obj;
    },
    create(base) {
        return exports.DomainGeneratedQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomainGeneratedQuery();
        message.generated = object.generated ?? false;
        return message;
    },
};
function createBaseDomainPrimaryQuery() {
    return { primary: false };
}
exports.DomainPrimaryQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.primary === true) {
            writer.uint32(8).bool(message.primary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomainPrimaryQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.primary = reader.bool();
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
        return { primary: isSet(object.primary) ? Boolean(object.primary) : false };
    },
    toJSON(message) {
        const obj = {};
        message.primary !== undefined && (obj.primary = message.primary);
        return obj;
    },
    create(base) {
        return exports.DomainPrimaryQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomainPrimaryQuery();
        message.primary = object.primary ?? false;
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
