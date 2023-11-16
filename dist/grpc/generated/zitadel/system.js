"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeSubscriptionResponse = exports.ChangeSubscriptionRequest = exports.SetPrimaryDomainResponse = exports.SetPrimaryDomainRequest = exports.RemoveDomainResponse = exports.RemoveDomainRequest = exports.AddDomainResponse = exports.AddDomainRequest = exports.ListDomainsResponse = exports.ListDomainsRequest = exports.ExistsDomainResponse = exports.ExistsDomainRequest = exports.ResetLimitsResponse = exports.ResetLimitsRequest = exports.SetLimitsResponse = exports.SetLimitsRequest = exports.RemoveQuotaResponse = exports.RemoveQuotaRequest = exports.SetQuotaResponse = exports.SetQuotaRequest = exports.AddQuotaResponse = exports.AddQuotaRequest = exports.GetUsageRequest = exports.ListIAMMembersResponse = exports.ListIAMMembersRequest = exports.RemoveInstanceResponse = exports.RemoveInstanceRequest = exports.UpdateInstanceResponse = exports.UpdateInstanceRequest = exports.CreateInstanceResponse = exports.CreateInstanceRequest_Machine = exports.CreateInstanceRequest_MachineKey = exports.CreateInstanceRequest_PersonalAccessToken = exports.CreateInstanceRequest_Human = exports.CreateInstanceRequest_Password = exports.CreateInstanceRequest_Email = exports.CreateInstanceRequest_Profile = exports.CreateInstanceRequest = exports.AddInstanceResponse = exports.AddInstanceRequest_Password = exports.AddInstanceRequest_Email = exports.AddInstanceRequest_Profile = exports.AddInstanceRequest = exports.GetInstanceResponse = exports.GetInstanceRequest = exports.ListInstancesResponse = exports.ListInstancesRequest = exports.HealthzResponse = exports.HealthzRequest = exports.protobufPackage = void 0;
exports.SystemServiceDefinition = exports.SetInstanceFeatureResponse = exports.SetInstanceFeatureRequest = exports.FailedEvent = exports.View = exports.RemoveFailedEventResponse = exports.RemoveFailedEventRequest = exports.ListFailedEventsResponse = exports.ListFailedEventsRequest = exports.ClearViewResponse = exports.ClearViewRequest = exports.ListViewsResponse = exports.ListViewsRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../google/protobuf/duration");
const timestamp_1 = require("../google/protobuf/timestamp");
const auth_n_key_1 = require("./auth_n_key");
const feature_1 = require("./feature");
const instance_1 = require("./instance");
const member_1 = require("./member");
const object_1 = require("./object");
const quota_1 = require("./quota");
exports.protobufPackage = "zitadel.system.v1";
function createBaseHealthzRequest() {
    return {};
}
exports.HealthzRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthzRequest();
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
        return exports.HealthzRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseHealthzRequest();
        return message;
    },
};
function createBaseHealthzResponse() {
    return {};
}
exports.HealthzResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthzResponse();
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
        return exports.HealthzResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseHealthzResponse();
        return message;
    },
};
function createBaseListInstancesRequest() {
    return { query: undefined, sortingColumn: 0, queries: [] };
}
exports.ListInstancesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            object_1.ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        if (message.sortingColumn !== 0) {
            writer.uint32(16).int32(message.sortingColumn);
        }
        for (const v of message.queries) {
            instance_1.Query.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListInstancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = object_1.ListQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.sortingColumn = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.queries.push(instance_1.Query.decode(reader, reader.uint32()));
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
            query: isSet(object.query) ? object_1.ListQuery.fromJSON(object.query) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, instance_1.fieldNameFromJSON)(object.sortingColumn) : 0,
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => instance_1.Query.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? object_1.ListQuery.toJSON(message.query) : undefined);
        message.sortingColumn !== undefined && (obj.sortingColumn = (0, instance_1.fieldNameToJSON)(message.sortingColumn));
        if (message.queries) {
            obj.queries = message.queries.map((e) => e ? instance_1.Query.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListInstancesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListInstancesRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? object_1.ListQuery.fromPartial(object.query)
            : undefined;
        message.sortingColumn = object.sortingColumn ?? 0;
        message.queries = object.queries?.map((e) => instance_1.Query.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListInstancesResponse() {
    return { details: undefined, sortingColumn: 0, result: [] };
}
exports.ListInstancesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.sortingColumn !== 0) {
            writer.uint32(16).int32(message.sortingColumn);
        }
        for (const v of message.result) {
            instance_1.Instance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListInstancesResponse();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.sortingColumn = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.result.push(instance_1.Instance.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, instance_1.fieldNameFromJSON)(object.sortingColumn) : 0,
            result: Array.isArray(object?.result) ? object.result.map((e) => instance_1.Instance.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        message.sortingColumn !== undefined && (obj.sortingColumn = (0, instance_1.fieldNameToJSON)(message.sortingColumn));
        if (message.result) {
            obj.result = message.result.map((e) => e ? instance_1.Instance.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListInstancesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListInstancesResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.sortingColumn = object.sortingColumn ?? 0;
        message.result = object.result?.map((e) => instance_1.Instance.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetInstanceRequest() {
    return { instanceId: "" };
}
exports.GetInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetInstanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
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
        return { instanceId: isSet(object.instanceId) ? String(object.instanceId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    create(base) {
        return exports.GetInstanceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetInstanceRequest();
        message.instanceId = object.instanceId ?? "";
        return message;
    },
};
function createBaseGetInstanceResponse() {
    return { instance: undefined };
}
exports.GetInstanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instance !== undefined) {
            instance_1.InstanceDetail.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetInstanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instance = instance_1.InstanceDetail.decode(reader, reader.uint32());
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
        return { instance: isSet(object.instance) ? instance_1.InstanceDetail.fromJSON(object.instance) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? instance_1.InstanceDetail.toJSON(message.instance) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetInstanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetInstanceResponse();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? instance_1.InstanceDetail.fromPartial(object.instance)
            : undefined;
        return message;
    },
};
function createBaseAddInstanceRequest() {
    return {
        instanceName: "",
        firstOrgName: "",
        customDomain: "",
        ownerUserName: "",
        ownerEmail: undefined,
        ownerProfile: undefined,
        ownerPassword: undefined,
        defaultLanguage: "",
    };
}
exports.AddInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceName !== "") {
            writer.uint32(10).string(message.instanceName);
        }
        if (message.firstOrgName !== "") {
            writer.uint32(18).string(message.firstOrgName);
        }
        if (message.customDomain !== "") {
            writer.uint32(26).string(message.customDomain);
        }
        if (message.ownerUserName !== "") {
            writer.uint32(34).string(message.ownerUserName);
        }
        if (message.ownerEmail !== undefined) {
            exports.AddInstanceRequest_Email.encode(message.ownerEmail, writer.uint32(42).fork()).ldelim();
        }
        if (message.ownerProfile !== undefined) {
            exports.AddInstanceRequest_Profile.encode(message.ownerProfile, writer.uint32(50).fork()).ldelim();
        }
        if (message.ownerPassword !== undefined) {
            exports.AddInstanceRequest_Password.encode(message.ownerPassword, writer.uint32(58).fork()).ldelim();
        }
        if (message.defaultLanguage !== "") {
            writer.uint32(66).string(message.defaultLanguage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddInstanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.firstOrgName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.customDomain = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ownerUserName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.ownerEmail = exports.AddInstanceRequest_Email.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.ownerProfile = exports.AddInstanceRequest_Profile.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.ownerPassword = exports.AddInstanceRequest_Password.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.defaultLanguage = reader.string();
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
            instanceName: isSet(object.instanceName) ? String(object.instanceName) : "",
            firstOrgName: isSet(object.firstOrgName) ? String(object.firstOrgName) : "",
            customDomain: isSet(object.customDomain) ? String(object.customDomain) : "",
            ownerUserName: isSet(object.ownerUserName) ? String(object.ownerUserName) : "",
            ownerEmail: isSet(object.ownerEmail) ? exports.AddInstanceRequest_Email.fromJSON(object.ownerEmail) : undefined,
            ownerProfile: isSet(object.ownerProfile) ? exports.AddInstanceRequest_Profile.fromJSON(object.ownerProfile) : undefined,
            ownerPassword: isSet(object.ownerPassword)
                ? exports.AddInstanceRequest_Password.fromJSON(object.ownerPassword)
                : undefined,
            defaultLanguage: isSet(object.defaultLanguage) ? String(object.defaultLanguage) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceName !== undefined && (obj.instanceName = message.instanceName);
        message.firstOrgName !== undefined && (obj.firstOrgName = message.firstOrgName);
        message.customDomain !== undefined && (obj.customDomain = message.customDomain);
        message.ownerUserName !== undefined && (obj.ownerUserName = message.ownerUserName);
        message.ownerEmail !== undefined &&
            (obj.ownerEmail = message.ownerEmail ? exports.AddInstanceRequest_Email.toJSON(message.ownerEmail) : undefined);
        message.ownerProfile !== undefined &&
            (obj.ownerProfile = message.ownerProfile ? exports.AddInstanceRequest_Profile.toJSON(message.ownerProfile) : undefined);
        message.ownerPassword !== undefined &&
            (obj.ownerPassword = message.ownerPassword
                ? exports.AddInstanceRequest_Password.toJSON(message.ownerPassword)
                : undefined);
        message.defaultLanguage !== undefined && (obj.defaultLanguage = message.defaultLanguage);
        return obj;
    },
    create(base) {
        return exports.AddInstanceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddInstanceRequest();
        message.instanceName = object.instanceName ?? "";
        message.firstOrgName = object.firstOrgName ?? "";
        message.customDomain = object.customDomain ?? "";
        message.ownerUserName = object.ownerUserName ?? "";
        message.ownerEmail = (object.ownerEmail !== undefined && object.ownerEmail !== null)
            ? exports.AddInstanceRequest_Email.fromPartial(object.ownerEmail)
            : undefined;
        message.ownerProfile = (object.ownerProfile !== undefined && object.ownerProfile !== null)
            ? exports.AddInstanceRequest_Profile.fromPartial(object.ownerProfile)
            : undefined;
        message.ownerPassword = (object.ownerPassword !== undefined && object.ownerPassword !== null)
            ? exports.AddInstanceRequest_Password.fromPartial(object.ownerPassword)
            : undefined;
        message.defaultLanguage = object.defaultLanguage ?? "";
        return message;
    },
};
function createBaseAddInstanceRequest_Profile() {
    return { firstName: "", lastName: "", preferredLanguage: "" };
}
exports.AddInstanceRequest_Profile = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(18).string(message.lastName);
        }
        if (message.preferredLanguage !== "") {
            writer.uint32(42).string(message.preferredLanguage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddInstanceRequest_Profile();
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
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.preferredLanguage = reader.string();
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
            preferredLanguage: isSet(object.preferredLanguage) ? String(object.preferredLanguage) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.preferredLanguage !== undefined && (obj.preferredLanguage = message.preferredLanguage);
        return obj;
    },
    create(base) {
        return exports.AddInstanceRequest_Profile.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddInstanceRequest_Profile();
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.preferredLanguage = object.preferredLanguage ?? "";
        return message;
    },
};
function createBaseAddInstanceRequest_Email() {
    return { email: "", isEmailVerified: false };
}
exports.AddInstanceRequest_Email = {
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
        const message = createBaseAddInstanceRequest_Email();
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
        return exports.AddInstanceRequest_Email.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddInstanceRequest_Email();
        message.email = object.email ?? "";
        message.isEmailVerified = object.isEmailVerified ?? false;
        return message;
    },
};
function createBaseAddInstanceRequest_Password() {
    return { password: "", passwordChangeRequired: false };
}
exports.AddInstanceRequest_Password = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.password !== "") {
            writer.uint32(10).string(message.password);
        }
        if (message.passwordChangeRequired === true) {
            writer.uint32(16).bool(message.passwordChangeRequired);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddInstanceRequest_Password();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.passwordChangeRequired = reader.bool();
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
            password: isSet(object.password) ? String(object.password) : "",
            passwordChangeRequired: isSet(object.passwordChangeRequired) ? Boolean(object.passwordChangeRequired) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.password !== undefined && (obj.password = message.password);
        message.passwordChangeRequired !== undefined && (obj.passwordChangeRequired = message.passwordChangeRequired);
        return obj;
    },
    create(base) {
        return exports.AddInstanceRequest_Password.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddInstanceRequest_Password();
        message.password = object.password ?? "";
        message.passwordChangeRequired = object.passwordChangeRequired ?? false;
        return message;
    },
};
function createBaseAddInstanceResponse() {
    return { instanceId: "", details: undefined };
}
exports.AddInstanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddInstanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddInstanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddInstanceResponse();
        message.instanceId = object.instanceId ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseCreateInstanceRequest() {
    return {
        instanceName: "",
        firstOrgName: "",
        customDomain: "",
        human: undefined,
        machine: undefined,
        defaultLanguage: "",
    };
}
exports.CreateInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceName !== "") {
            writer.uint32(10).string(message.instanceName);
        }
        if (message.firstOrgName !== "") {
            writer.uint32(18).string(message.firstOrgName);
        }
        if (message.customDomain !== "") {
            writer.uint32(26).string(message.customDomain);
        }
        if (message.human !== undefined) {
            exports.CreateInstanceRequest_Human.encode(message.human, writer.uint32(34).fork()).ldelim();
        }
        if (message.machine !== undefined) {
            exports.CreateInstanceRequest_Machine.encode(message.machine, writer.uint32(42).fork()).ldelim();
        }
        if (message.defaultLanguage !== "") {
            writer.uint32(50).string(message.defaultLanguage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateInstanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.firstOrgName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.customDomain = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.human = exports.CreateInstanceRequest_Human.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.machine = exports.CreateInstanceRequest_Machine.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.defaultLanguage = reader.string();
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
            instanceName: isSet(object.instanceName) ? String(object.instanceName) : "",
            firstOrgName: isSet(object.firstOrgName) ? String(object.firstOrgName) : "",
            customDomain: isSet(object.customDomain) ? String(object.customDomain) : "",
            human: isSet(object.human) ? exports.CreateInstanceRequest_Human.fromJSON(object.human) : undefined,
            machine: isSet(object.machine) ? exports.CreateInstanceRequest_Machine.fromJSON(object.machine) : undefined,
            defaultLanguage: isSet(object.defaultLanguage) ? String(object.defaultLanguage) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceName !== undefined && (obj.instanceName = message.instanceName);
        message.firstOrgName !== undefined && (obj.firstOrgName = message.firstOrgName);
        message.customDomain !== undefined && (obj.customDomain = message.customDomain);
        message.human !== undefined &&
            (obj.human = message.human ? exports.CreateInstanceRequest_Human.toJSON(message.human) : undefined);
        message.machine !== undefined &&
            (obj.machine = message.machine ? exports.CreateInstanceRequest_Machine.toJSON(message.machine) : undefined);
        message.defaultLanguage !== undefined && (obj.defaultLanguage = message.defaultLanguage);
        return obj;
    },
    create(base) {
        return exports.CreateInstanceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateInstanceRequest();
        message.instanceName = object.instanceName ?? "";
        message.firstOrgName = object.firstOrgName ?? "";
        message.customDomain = object.customDomain ?? "";
        message.human = (object.human !== undefined && object.human !== null)
            ? exports.CreateInstanceRequest_Human.fromPartial(object.human)
            : undefined;
        message.machine = (object.machine !== undefined && object.machine !== null)
            ? exports.CreateInstanceRequest_Machine.fromPartial(object.machine)
            : undefined;
        message.defaultLanguage = object.defaultLanguage ?? "";
        return message;
    },
};
function createBaseCreateInstanceRequest_Profile() {
    return { firstName: "", lastName: "", preferredLanguage: "" };
}
exports.CreateInstanceRequest_Profile = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(18).string(message.lastName);
        }
        if (message.preferredLanguage !== "") {
            writer.uint32(26).string(message.preferredLanguage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateInstanceRequest_Profile();
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
                    message.preferredLanguage = reader.string();
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
            preferredLanguage: isSet(object.preferredLanguage) ? String(object.preferredLanguage) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.preferredLanguage !== undefined && (obj.preferredLanguage = message.preferredLanguage);
        return obj;
    },
    create(base) {
        return exports.CreateInstanceRequest_Profile.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateInstanceRequest_Profile();
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.preferredLanguage = object.preferredLanguage ?? "";
        return message;
    },
};
function createBaseCreateInstanceRequest_Email() {
    return { email: "", isEmailVerified: false };
}
exports.CreateInstanceRequest_Email = {
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
        const message = createBaseCreateInstanceRequest_Email();
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
        return exports.CreateInstanceRequest_Email.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateInstanceRequest_Email();
        message.email = object.email ?? "";
        message.isEmailVerified = object.isEmailVerified ?? false;
        return message;
    },
};
function createBaseCreateInstanceRequest_Password() {
    return { password: "", passwordChangeRequired: false };
}
exports.CreateInstanceRequest_Password = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.password !== "") {
            writer.uint32(10).string(message.password);
        }
        if (message.passwordChangeRequired === true) {
            writer.uint32(16).bool(message.passwordChangeRequired);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateInstanceRequest_Password();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.passwordChangeRequired = reader.bool();
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
            password: isSet(object.password) ? String(object.password) : "",
            passwordChangeRequired: isSet(object.passwordChangeRequired) ? Boolean(object.passwordChangeRequired) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.password !== undefined && (obj.password = message.password);
        message.passwordChangeRequired !== undefined && (obj.passwordChangeRequired = message.passwordChangeRequired);
        return obj;
    },
    create(base) {
        return exports.CreateInstanceRequest_Password.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateInstanceRequest_Password();
        message.password = object.password ?? "";
        message.passwordChangeRequired = object.passwordChangeRequired ?? false;
        return message;
    },
};
function createBaseCreateInstanceRequest_Human() {
    return { userName: "", email: undefined, profile: undefined, password: undefined };
}
exports.CreateInstanceRequest_Human = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        if (message.email !== undefined) {
            exports.CreateInstanceRequest_Email.encode(message.email, writer.uint32(18).fork()).ldelim();
        }
        if (message.profile !== undefined) {
            exports.CreateInstanceRequest_Profile.encode(message.profile, writer.uint32(26).fork()).ldelim();
        }
        if (message.password !== undefined) {
            exports.CreateInstanceRequest_Password.encode(message.password, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateInstanceRequest_Human();
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
                    message.email = exports.CreateInstanceRequest_Email.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.profile = exports.CreateInstanceRequest_Profile.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.password = exports.CreateInstanceRequest_Password.decode(reader, reader.uint32());
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
            email: isSet(object.email) ? exports.CreateInstanceRequest_Email.fromJSON(object.email) : undefined,
            profile: isSet(object.profile) ? exports.CreateInstanceRequest_Profile.fromJSON(object.profile) : undefined,
            password: isSet(object.password) ? exports.CreateInstanceRequest_Password.fromJSON(object.password) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userName !== undefined && (obj.userName = message.userName);
        message.email !== undefined &&
            (obj.email = message.email ? exports.CreateInstanceRequest_Email.toJSON(message.email) : undefined);
        message.profile !== undefined &&
            (obj.profile = message.profile ? exports.CreateInstanceRequest_Profile.toJSON(message.profile) : undefined);
        message.password !== undefined &&
            (obj.password = message.password ? exports.CreateInstanceRequest_Password.toJSON(message.password) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateInstanceRequest_Human.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateInstanceRequest_Human();
        message.userName = object.userName ?? "";
        message.email = (object.email !== undefined && object.email !== null)
            ? exports.CreateInstanceRequest_Email.fromPartial(object.email)
            : undefined;
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? exports.CreateInstanceRequest_Profile.fromPartial(object.profile)
            : undefined;
        message.password = (object.password !== undefined && object.password !== null)
            ? exports.CreateInstanceRequest_Password.fromPartial(object.password)
            : undefined;
        return message;
    },
};
function createBaseCreateInstanceRequest_PersonalAccessToken() {
    return { expirationDate: undefined };
}
exports.CreateInstanceRequest_PersonalAccessToken = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateInstanceRequest_PersonalAccessToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        return { expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.expirationDate !== undefined && (obj.expirationDate = message.expirationDate.toISOString());
        return obj;
    },
    create(base) {
        return exports.CreateInstanceRequest_PersonalAccessToken.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateInstanceRequest_PersonalAccessToken();
        message.expirationDate = object.expirationDate ?? undefined;
        return message;
    },
};
function createBaseCreateInstanceRequest_MachineKey() {
    return { type: 0, expirationDate: undefined };
}
exports.CreateInstanceRequest_MachineKey = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateInstanceRequest_MachineKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? (0, auth_n_key_1.keyTypeFromJSON)(object.type) : 0,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = (0, auth_n_key_1.keyTypeToJSON)(message.type));
        message.expirationDate !== undefined && (obj.expirationDate = message.expirationDate.toISOString());
        return obj;
    },
    create(base) {
        return exports.CreateInstanceRequest_MachineKey.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateInstanceRequest_MachineKey();
        message.type = object.type ?? 0;
        message.expirationDate = object.expirationDate ?? undefined;
        return message;
    },
};
function createBaseCreateInstanceRequest_Machine() {
    return { userName: "", name: "", personalAccessToken: undefined, machineKey: undefined };
}
exports.CreateInstanceRequest_Machine = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.personalAccessToken !== undefined) {
            exports.CreateInstanceRequest_PersonalAccessToken.encode(message.personalAccessToken, writer.uint32(26).fork()).ldelim();
        }
        if (message.machineKey !== undefined) {
            exports.CreateInstanceRequest_MachineKey.encode(message.machineKey, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateInstanceRequest_Machine();
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
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.personalAccessToken = exports.CreateInstanceRequest_PersonalAccessToken.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.machineKey = exports.CreateInstanceRequest_MachineKey.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            personalAccessToken: isSet(object.personalAccessToken)
                ? exports.CreateInstanceRequest_PersonalAccessToken.fromJSON(object.personalAccessToken)
                : undefined,
            machineKey: isSet(object.machineKey) ? exports.CreateInstanceRequest_MachineKey.fromJSON(object.machineKey) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userName !== undefined && (obj.userName = message.userName);
        message.name !== undefined && (obj.name = message.name);
        message.personalAccessToken !== undefined && (obj.personalAccessToken = message.personalAccessToken
            ? exports.CreateInstanceRequest_PersonalAccessToken.toJSON(message.personalAccessToken)
            : undefined);
        message.machineKey !== undefined &&
            (obj.machineKey = message.machineKey ? exports.CreateInstanceRequest_MachineKey.toJSON(message.machineKey) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateInstanceRequest_Machine.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateInstanceRequest_Machine();
        message.userName = object.userName ?? "";
        message.name = object.name ?? "";
        message.personalAccessToken = (object.personalAccessToken !== undefined && object.personalAccessToken !== null)
            ? exports.CreateInstanceRequest_PersonalAccessToken.fromPartial(object.personalAccessToken)
            : undefined;
        message.machineKey = (object.machineKey !== undefined && object.machineKey !== null)
            ? exports.CreateInstanceRequest_MachineKey.fromPartial(object.machineKey)
            : undefined;
        return message;
    },
};
function createBaseCreateInstanceResponse() {
    return { instanceId: "", details: undefined, pat: "", machineKey: Buffer.alloc(0) };
}
exports.CreateInstanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.pat !== "") {
            writer.uint32(26).string(message.pat);
        }
        if (message.machineKey.length !== 0) {
            writer.uint32(34).bytes(message.machineKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateInstanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
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
                    message.pat = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.machineKey = reader.bytes();
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            pat: isSet(object.pat) ? String(object.pat) : "",
            machineKey: isSet(object.machineKey) ? Buffer.from(bytesFromBase64(object.machineKey)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.pat !== undefined && (obj.pat = message.pat);
        message.machineKey !== undefined &&
            (obj.machineKey = base64FromBytes(message.machineKey !== undefined ? message.machineKey : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.CreateInstanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateInstanceResponse();
        message.instanceId = object.instanceId ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.pat = object.pat ?? "";
        message.machineKey = object.machineKey ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseUpdateInstanceRequest() {
    return { instanceId: "", instanceName: "" };
}
exports.UpdateInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.instanceName !== "") {
            writer.uint32(18).string(message.instanceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateInstanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.instanceName = reader.string();
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            instanceName: isSet(object.instanceName) ? String(object.instanceName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.instanceName !== undefined && (obj.instanceName = message.instanceName);
        return obj;
    },
    create(base) {
        return exports.UpdateInstanceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateInstanceRequest();
        message.instanceId = object.instanceId ?? "";
        message.instanceName = object.instanceName ?? "";
        return message;
    },
};
function createBaseUpdateInstanceResponse() {
    return { details: undefined };
}
exports.UpdateInstanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateInstanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateInstanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateInstanceResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveInstanceRequest() {
    return { instanceId: "" };
}
exports.RemoveInstanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveInstanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
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
        return { instanceId: isSet(object.instanceId) ? String(object.instanceId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    create(base) {
        return exports.RemoveInstanceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveInstanceRequest();
        message.instanceId = object.instanceId ?? "";
        return message;
    },
};
function createBaseRemoveInstanceResponse() {
    return { details: undefined };
}
exports.RemoveInstanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveInstanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveInstanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveInstanceResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListIAMMembersRequest() {
    return { query: undefined, instanceId: "", queries: [] };
}
exports.ListIAMMembersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            object_1.ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        if (message.instanceId !== "") {
            writer.uint32(18).string(message.instanceId);
        }
        for (const v of message.queries) {
            member_1.SearchQuery.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListIAMMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = object_1.ListQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.instanceId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.queries.push(member_1.SearchQuery.decode(reader, reader.uint32()));
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
            query: isSet(object.query) ? object_1.ListQuery.fromJSON(object.query) : undefined,
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => member_1.SearchQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? object_1.ListQuery.toJSON(message.query) : undefined);
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        if (message.queries) {
            obj.queries = message.queries.map((e) => e ? member_1.SearchQuery.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListIAMMembersRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListIAMMembersRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? object_1.ListQuery.fromPartial(object.query)
            : undefined;
        message.instanceId = object.instanceId ?? "";
        message.queries = object.queries?.map((e) => member_1.SearchQuery.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListIAMMembersResponse() {
    return { details: undefined, result: [] };
}
exports.ListIAMMembersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.result) {
            member_1.Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListIAMMembersResponse();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(member_1.Member.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            result: Array.isArray(object?.result) ? object.result.map((e) => member_1.Member.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.result) {
            obj.result = message.result.map((e) => e ? member_1.Member.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListIAMMembersResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListIAMMembersResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = object.result?.map((e) => member_1.Member.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetUsageRequest() {
    return { instanceId: "" };
}
exports.GetUsageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUsageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
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
        return { instanceId: isSet(object.instanceId) ? String(object.instanceId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    create(base) {
        return exports.GetUsageRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUsageRequest();
        message.instanceId = object.instanceId ?? "";
        return message;
    },
};
function createBaseAddQuotaRequest() {
    return {
        instanceId: "",
        unit: 0,
        from: undefined,
        resetInterval: undefined,
        amount: long_1.default.UZERO,
        limit: false,
        notifications: [],
    };
}
exports.AddQuotaRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.unit !== 0) {
            writer.uint32(16).int32(message.unit);
        }
        if (message.from !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(26).fork()).ldelim();
        }
        if (message.resetInterval !== undefined) {
            duration_1.Duration.encode(message.resetInterval, writer.uint32(34).fork()).ldelim();
        }
        if (!message.amount.isZero()) {
            writer.uint32(40).uint64(message.amount);
        }
        if (message.limit === true) {
            writer.uint32(48).bool(message.limit);
        }
        for (const v of message.notifications) {
            quota_1.Notification.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddQuotaRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.unit = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.from = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.resetInterval = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.amount = reader.uint64();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.limit = reader.bool();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.notifications.push(quota_1.Notification.decode(reader, reader.uint32()));
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            unit: isSet(object.unit) ? (0, quota_1.unitFromJSON)(object.unit) : 0,
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            resetInterval: isSet(object.resetInterval) ? duration_1.Duration.fromJSON(object.resetInterval) : undefined,
            amount: isSet(object.amount) ? long_1.default.fromValue(object.amount) : long_1.default.UZERO,
            limit: isSet(object.limit) ? Boolean(object.limit) : false,
            notifications: Array.isArray(object?.notifications)
                ? object.notifications.map((e) => quota_1.Notification.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.unit !== undefined && (obj.unit = (0, quota_1.unitToJSON)(message.unit));
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.resetInterval !== undefined &&
            (obj.resetInterval = message.resetInterval ? duration_1.Duration.toJSON(message.resetInterval) : undefined);
        message.amount !== undefined && (obj.amount = (message.amount || long_1.default.UZERO).toString());
        message.limit !== undefined && (obj.limit = message.limit);
        if (message.notifications) {
            obj.notifications = message.notifications.map((e) => e ? quota_1.Notification.toJSON(e) : undefined);
        }
        else {
            obj.notifications = [];
        }
        return obj;
    },
    create(base) {
        return exports.AddQuotaRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddQuotaRequest();
        message.instanceId = object.instanceId ?? "";
        message.unit = object.unit ?? 0;
        message.from = object.from ?? undefined;
        message.resetInterval = (object.resetInterval !== undefined && object.resetInterval !== null)
            ? duration_1.Duration.fromPartial(object.resetInterval)
            : undefined;
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? long_1.default.fromValue(object.amount)
            : long_1.default.UZERO;
        message.limit = object.limit ?? false;
        message.notifications = object.notifications?.map((e) => quota_1.Notification.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAddQuotaResponse() {
    return { details: undefined };
}
exports.AddQuotaResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddQuotaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddQuotaResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddQuotaResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseSetQuotaRequest() {
    return {
        instanceId: "",
        unit: 0,
        from: undefined,
        resetInterval: undefined,
        amount: long_1.default.UZERO,
        limit: false,
        notifications: [],
    };
}
exports.SetQuotaRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.unit !== 0) {
            writer.uint32(16).int32(message.unit);
        }
        if (message.from !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(26).fork()).ldelim();
        }
        if (message.resetInterval !== undefined) {
            duration_1.Duration.encode(message.resetInterval, writer.uint32(34).fork()).ldelim();
        }
        if (!message.amount.isZero()) {
            writer.uint32(40).uint64(message.amount);
        }
        if (message.limit === true) {
            writer.uint32(48).bool(message.limit);
        }
        for (const v of message.notifications) {
            quota_1.Notification.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetQuotaRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.unit = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.from = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.resetInterval = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.amount = reader.uint64();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.limit = reader.bool();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.notifications.push(quota_1.Notification.decode(reader, reader.uint32()));
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            unit: isSet(object.unit) ? (0, quota_1.unitFromJSON)(object.unit) : 0,
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            resetInterval: isSet(object.resetInterval) ? duration_1.Duration.fromJSON(object.resetInterval) : undefined,
            amount: isSet(object.amount) ? long_1.default.fromValue(object.amount) : long_1.default.UZERO,
            limit: isSet(object.limit) ? Boolean(object.limit) : false,
            notifications: Array.isArray(object?.notifications)
                ? object.notifications.map((e) => quota_1.Notification.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.unit !== undefined && (obj.unit = (0, quota_1.unitToJSON)(message.unit));
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.resetInterval !== undefined &&
            (obj.resetInterval = message.resetInterval ? duration_1.Duration.toJSON(message.resetInterval) : undefined);
        message.amount !== undefined && (obj.amount = (message.amount || long_1.default.UZERO).toString());
        message.limit !== undefined && (obj.limit = message.limit);
        if (message.notifications) {
            obj.notifications = message.notifications.map((e) => e ? quota_1.Notification.toJSON(e) : undefined);
        }
        else {
            obj.notifications = [];
        }
        return obj;
    },
    create(base) {
        return exports.SetQuotaRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetQuotaRequest();
        message.instanceId = object.instanceId ?? "";
        message.unit = object.unit ?? 0;
        message.from = object.from ?? undefined;
        message.resetInterval = (object.resetInterval !== undefined && object.resetInterval !== null)
            ? duration_1.Duration.fromPartial(object.resetInterval)
            : undefined;
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? long_1.default.fromValue(object.amount)
            : long_1.default.UZERO;
        message.limit = object.limit ?? false;
        message.notifications = object.notifications?.map((e) => quota_1.Notification.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSetQuotaResponse() {
    return { details: undefined };
}
exports.SetQuotaResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetQuotaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetQuotaResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetQuotaResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveQuotaRequest() {
    return { instanceId: "", unit: 0 };
}
exports.RemoveQuotaRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.unit !== 0) {
            writer.uint32(16).int32(message.unit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveQuotaRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.unit = reader.int32();
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            unit: isSet(object.unit) ? (0, quota_1.unitFromJSON)(object.unit) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.unit !== undefined && (obj.unit = (0, quota_1.unitToJSON)(message.unit));
        return obj;
    },
    create(base) {
        return exports.RemoveQuotaRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveQuotaRequest();
        message.instanceId = object.instanceId ?? "";
        message.unit = object.unit ?? 0;
        return message;
    },
};
function createBaseRemoveQuotaResponse() {
    return { details: undefined };
}
exports.RemoveQuotaResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveQuotaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveQuotaResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveQuotaResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseSetLimitsRequest() {
    return { instanceId: "", auditLogRetention: undefined };
}
exports.SetLimitsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.auditLogRetention !== undefined) {
            duration_1.Duration.encode(message.auditLogRetention, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetLimitsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.auditLogRetention = duration_1.Duration.decode(reader, reader.uint32());
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            auditLogRetention: isSet(object.auditLogRetention) ? duration_1.Duration.fromJSON(object.auditLogRetention) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.auditLogRetention !== undefined &&
            (obj.auditLogRetention = message.auditLogRetention ? duration_1.Duration.toJSON(message.auditLogRetention) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetLimitsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetLimitsRequest();
        message.instanceId = object.instanceId ?? "";
        message.auditLogRetention = (object.auditLogRetention !== undefined && object.auditLogRetention !== null)
            ? duration_1.Duration.fromPartial(object.auditLogRetention)
            : undefined;
        return message;
    },
};
function createBaseSetLimitsResponse() {
    return { details: undefined };
}
exports.SetLimitsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetLimitsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetLimitsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetLimitsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseResetLimitsRequest() {
    return { instanceId: "" };
}
exports.ResetLimitsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResetLimitsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
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
        return { instanceId: isSet(object.instanceId) ? String(object.instanceId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    create(base) {
        return exports.ResetLimitsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResetLimitsRequest();
        message.instanceId = object.instanceId ?? "";
        return message;
    },
};
function createBaseResetLimitsResponse() {
    return { details: undefined };
}
exports.ResetLimitsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResetLimitsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.ResetLimitsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResetLimitsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseExistsDomainRequest() {
    return { domain: "" };
}
exports.ExistsDomainRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.domain !== "") {
            writer.uint32(10).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExistsDomainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { domain: isSet(object.domain) ? String(object.domain) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },
    create(base) {
        return exports.ExistsDomainRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExistsDomainRequest();
        message.domain = object.domain ?? "";
        return message;
    },
};
function createBaseExistsDomainResponse() {
    return { exists: false };
}
exports.ExistsDomainResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.exists === true) {
            writer.uint32(8).bool(message.exists);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExistsDomainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.exists = reader.bool();
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
        return { exists: isSet(object.exists) ? Boolean(object.exists) : false };
    },
    toJSON(message) {
        const obj = {};
        message.exists !== undefined && (obj.exists = message.exists);
        return obj;
    },
    create(base) {
        return exports.ExistsDomainResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExistsDomainResponse();
        message.exists = object.exists ?? false;
        return message;
    },
};
function createBaseListDomainsRequest() {
    return { instanceId: "", query: undefined, sortingColumn: 0, queries: [] };
}
exports.ListDomainsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.query !== undefined) {
            object_1.ListQuery.encode(message.query, writer.uint32(18).fork()).ldelim();
        }
        if (message.sortingColumn !== 0) {
            writer.uint32(24).int32(message.sortingColumn);
        }
        for (const v of message.queries) {
            instance_1.DomainSearchQuery.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListDomainsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.query = object_1.ListQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sortingColumn = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.queries.push(instance_1.DomainSearchQuery.decode(reader, reader.uint32()));
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            query: isSet(object.query) ? object_1.ListQuery.fromJSON(object.query) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, instance_1.domainFieldNameFromJSON)(object.sortingColumn) : 0,
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => instance_1.DomainSearchQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.query !== undefined && (obj.query = message.query ? object_1.ListQuery.toJSON(message.query) : undefined);
        message.sortingColumn !== undefined && (obj.sortingColumn = (0, instance_1.domainFieldNameToJSON)(message.sortingColumn));
        if (message.queries) {
            obj.queries = message.queries.map((e) => e ? instance_1.DomainSearchQuery.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListDomainsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListDomainsRequest();
        message.instanceId = object.instanceId ?? "";
        message.query = (object.query !== undefined && object.query !== null)
            ? object_1.ListQuery.fromPartial(object.query)
            : undefined;
        message.sortingColumn = object.sortingColumn ?? 0;
        message.queries = object.queries?.map((e) => instance_1.DomainSearchQuery.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListDomainsResponse() {
    return { details: undefined, sortingColumn: 0, result: [] };
}
exports.ListDomainsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.sortingColumn !== 0) {
            writer.uint32(16).int32(message.sortingColumn);
        }
        for (const v of message.result) {
            instance_1.Domain.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListDomainsResponse();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.sortingColumn = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.result.push(instance_1.Domain.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            sortingColumn: isSet(object.sortingColumn) ? (0, instance_1.domainFieldNameFromJSON)(object.sortingColumn) : 0,
            result: Array.isArray(object?.result) ? object.result.map((e) => instance_1.Domain.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        message.sortingColumn !== undefined && (obj.sortingColumn = (0, instance_1.domainFieldNameToJSON)(message.sortingColumn));
        if (message.result) {
            obj.result = message.result.map((e) => e ? instance_1.Domain.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListDomainsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListDomainsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.sortingColumn = object.sortingColumn ?? 0;
        message.result = object.result?.map((e) => instance_1.Domain.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAddDomainRequest() {
    return { instanceId: "", domain: "" };
}
exports.AddDomainRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.domain !== "") {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddDomainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            domain: isSet(object.domain) ? String(object.domain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },
    create(base) {
        return exports.AddDomainRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddDomainRequest();
        message.instanceId = object.instanceId ?? "";
        message.domain = object.domain ?? "";
        return message;
    },
};
function createBaseAddDomainResponse() {
    return { details: undefined };
}
exports.AddDomainResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddDomainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddDomainResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddDomainResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveDomainRequest() {
    return { instanceId: "", domain: "" };
}
exports.RemoveDomainRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.domain !== "") {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveDomainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            domain: isSet(object.domain) ? String(object.domain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },
    create(base) {
        return exports.RemoveDomainRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveDomainRequest();
        message.instanceId = object.instanceId ?? "";
        message.domain = object.domain ?? "";
        return message;
    },
};
function createBaseRemoveDomainResponse() {
    return { details: undefined };
}
exports.RemoveDomainResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveDomainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveDomainResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveDomainResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseSetPrimaryDomainRequest() {
    return { instanceId: "", domain: "" };
}
exports.SetPrimaryDomainRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.domain !== "") {
            writer.uint32(18).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPrimaryDomainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            domain: isSet(object.domain) ? String(object.domain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },
    create(base) {
        return exports.SetPrimaryDomainRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetPrimaryDomainRequest();
        message.instanceId = object.instanceId ?? "";
        message.domain = object.domain ?? "";
        return message;
    },
};
function createBaseSetPrimaryDomainResponse() {
    return { details: undefined };
}
exports.SetPrimaryDomainResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPrimaryDomainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetPrimaryDomainResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetPrimaryDomainResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseChangeSubscriptionRequest() {
    return { domain: "", subscriptionName: "", requestLimit: long_1.default.UZERO, actionMinsLimit: long_1.default.UZERO };
}
exports.ChangeSubscriptionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.domain !== "") {
            writer.uint32(10).string(message.domain);
        }
        if (message.subscriptionName !== "") {
            writer.uint32(18).string(message.subscriptionName);
        }
        if (!message.requestLimit.isZero()) {
            writer.uint32(24).uint64(message.requestLimit);
        }
        if (!message.actionMinsLimit.isZero()) {
            writer.uint32(32).uint64(message.actionMinsLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChangeSubscriptionRequest();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.subscriptionName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requestLimit = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.actionMinsLimit = reader.uint64();
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
            subscriptionName: isSet(object.subscriptionName) ? String(object.subscriptionName) : "",
            requestLimit: isSet(object.requestLimit) ? long_1.default.fromValue(object.requestLimit) : long_1.default.UZERO,
            actionMinsLimit: isSet(object.actionMinsLimit) ? long_1.default.fromValue(object.actionMinsLimit) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.domain !== undefined && (obj.domain = message.domain);
        message.subscriptionName !== undefined && (obj.subscriptionName = message.subscriptionName);
        message.requestLimit !== undefined && (obj.requestLimit = (message.requestLimit || long_1.default.UZERO).toString());
        message.actionMinsLimit !== undefined && (obj.actionMinsLimit = (message.actionMinsLimit || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.ChangeSubscriptionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseChangeSubscriptionRequest();
        message.domain = object.domain ?? "";
        message.subscriptionName = object.subscriptionName ?? "";
        message.requestLimit = (object.requestLimit !== undefined && object.requestLimit !== null)
            ? long_1.default.fromValue(object.requestLimit)
            : long_1.default.UZERO;
        message.actionMinsLimit = (object.actionMinsLimit !== undefined && object.actionMinsLimit !== null)
            ? long_1.default.fromValue(object.actionMinsLimit)
            : long_1.default.UZERO;
        return message;
    },
};
function createBaseChangeSubscriptionResponse() {
    return { details: undefined };
}
exports.ChangeSubscriptionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChangeSubscriptionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.ChangeSubscriptionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseChangeSubscriptionResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListViewsRequest() {
    return {};
}
exports.ListViewsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListViewsRequest();
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
        return exports.ListViewsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseListViewsRequest();
        return message;
    },
};
function createBaseListViewsResponse() {
    return { result: [] };
}
exports.ListViewsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.result) {
            exports.View.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListViewsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result.push(exports.View.decode(reader, reader.uint32()));
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
        return { result: Array.isArray(object?.result) ? object.result.map((e) => exports.View.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.result) {
            obj.result = message.result.map((e) => e ? exports.View.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListViewsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListViewsResponse();
        message.result = object.result?.map((e) => exports.View.fromPartial(e)) || [];
        return message;
    },
};
function createBaseClearViewRequest() {
    return { database: "", viewName: "" };
}
exports.ClearViewRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.database !== "") {
            writer.uint32(10).string(message.database);
        }
        if (message.viewName !== "") {
            writer.uint32(18).string(message.viewName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClearViewRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.database = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.viewName = reader.string();
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
            database: isSet(object.database) ? String(object.database) : "",
            viewName: isSet(object.viewName) ? String(object.viewName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.database !== undefined && (obj.database = message.database);
        message.viewName !== undefined && (obj.viewName = message.viewName);
        return obj;
    },
    create(base) {
        return exports.ClearViewRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseClearViewRequest();
        message.database = object.database ?? "";
        message.viewName = object.viewName ?? "";
        return message;
    },
};
function createBaseClearViewResponse() {
    return {};
}
exports.ClearViewResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClearViewResponse();
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
        return exports.ClearViewResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseClearViewResponse();
        return message;
    },
};
function createBaseListFailedEventsRequest() {
    return {};
}
exports.ListFailedEventsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListFailedEventsRequest();
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
        return exports.ListFailedEventsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseListFailedEventsRequest();
        return message;
    },
};
function createBaseListFailedEventsResponse() {
    return { result: [] };
}
exports.ListFailedEventsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.result) {
            exports.FailedEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListFailedEventsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result.push(exports.FailedEvent.decode(reader, reader.uint32()));
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
        return { result: Array.isArray(object?.result) ? object.result.map((e) => exports.FailedEvent.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.result) {
            obj.result = message.result.map((e) => e ? exports.FailedEvent.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListFailedEventsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListFailedEventsResponse();
        message.result = object.result?.map((e) => exports.FailedEvent.fromPartial(e)) || [];
        return message;
    },
};
function createBaseRemoveFailedEventRequest() {
    return { database: "", viewName: "", failedSequence: long_1.default.UZERO, instanceId: "" };
}
exports.RemoveFailedEventRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.database !== "") {
            writer.uint32(10).string(message.database);
        }
        if (message.viewName !== "") {
            writer.uint32(18).string(message.viewName);
        }
        if (!message.failedSequence.isZero()) {
            writer.uint32(24).uint64(message.failedSequence);
        }
        if (message.instanceId !== "") {
            writer.uint32(34).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveFailedEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.database = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.viewName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.failedSequence = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.instanceId = reader.string();
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
            database: isSet(object.database) ? String(object.database) : "",
            viewName: isSet(object.viewName) ? String(object.viewName) : "",
            failedSequence: isSet(object.failedSequence) ? long_1.default.fromValue(object.failedSequence) : long_1.default.UZERO,
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.database !== undefined && (obj.database = message.database);
        message.viewName !== undefined && (obj.viewName = message.viewName);
        message.failedSequence !== undefined && (obj.failedSequence = (message.failedSequence || long_1.default.UZERO).toString());
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    create(base) {
        return exports.RemoveFailedEventRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveFailedEventRequest();
        message.database = object.database ?? "";
        message.viewName = object.viewName ?? "";
        message.failedSequence = (object.failedSequence !== undefined && object.failedSequence !== null)
            ? long_1.default.fromValue(object.failedSequence)
            : long_1.default.UZERO;
        message.instanceId = object.instanceId ?? "";
        return message;
    },
};
function createBaseRemoveFailedEventResponse() {
    return {};
}
exports.RemoveFailedEventResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveFailedEventResponse();
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
        return exports.RemoveFailedEventResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRemoveFailedEventResponse();
        return message;
    },
};
function createBaseView() {
    return {
        database: "",
        viewName: "",
        processedSequence: long_1.default.UZERO,
        eventTimestamp: undefined,
        lastSuccessfulSpoolerRun: undefined,
        instance: "",
    };
}
exports.View = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.database !== "") {
            writer.uint32(10).string(message.database);
        }
        if (message.viewName !== "") {
            writer.uint32(18).string(message.viewName);
        }
        if (!message.processedSequence.isZero()) {
            writer.uint32(24).uint64(message.processedSequence);
        }
        if (message.eventTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.eventTimestamp), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastSuccessfulSpoolerRun !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastSuccessfulSpoolerRun), writer.uint32(42).fork()).ldelim();
        }
        if (message.instance !== "") {
            writer.uint32(50).string(message.instance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseView();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.database = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.viewName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.processedSequence = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.eventTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastSuccessfulSpoolerRun = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.instance = reader.string();
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
            database: isSet(object.database) ? String(object.database) : "",
            viewName: isSet(object.viewName) ? String(object.viewName) : "",
            processedSequence: isSet(object.processedSequence) ? long_1.default.fromValue(object.processedSequence) : long_1.default.UZERO,
            eventTimestamp: isSet(object.eventTimestamp) ? fromJsonTimestamp(object.eventTimestamp) : undefined,
            lastSuccessfulSpoolerRun: isSet(object.lastSuccessfulSpoolerRun)
                ? fromJsonTimestamp(object.lastSuccessfulSpoolerRun)
                : undefined,
            instance: isSet(object.instance) ? String(object.instance) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.database !== undefined && (obj.database = message.database);
        message.viewName !== undefined && (obj.viewName = message.viewName);
        message.processedSequence !== undefined &&
            (obj.processedSequence = (message.processedSequence || long_1.default.UZERO).toString());
        message.eventTimestamp !== undefined && (obj.eventTimestamp = message.eventTimestamp.toISOString());
        message.lastSuccessfulSpoolerRun !== undefined &&
            (obj.lastSuccessfulSpoolerRun = message.lastSuccessfulSpoolerRun.toISOString());
        message.instance !== undefined && (obj.instance = message.instance);
        return obj;
    },
    create(base) {
        return exports.View.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseView();
        message.database = object.database ?? "";
        message.viewName = object.viewName ?? "";
        message.processedSequence = (object.processedSequence !== undefined && object.processedSequence !== null)
            ? long_1.default.fromValue(object.processedSequence)
            : long_1.default.UZERO;
        message.eventTimestamp = object.eventTimestamp ?? undefined;
        message.lastSuccessfulSpoolerRun = object.lastSuccessfulSpoolerRun ?? undefined;
        message.instance = object.instance ?? "";
        return message;
    },
};
function createBaseFailedEvent() {
    return {
        database: "",
        viewName: "",
        failedSequence: long_1.default.UZERO,
        failureCount: long_1.default.UZERO,
        errorMessage: "",
        lastFailed: undefined,
    };
}
exports.FailedEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.database !== "") {
            writer.uint32(10).string(message.database);
        }
        if (message.viewName !== "") {
            writer.uint32(18).string(message.viewName);
        }
        if (!message.failedSequence.isZero()) {
            writer.uint32(24).uint64(message.failedSequence);
        }
        if (!message.failureCount.isZero()) {
            writer.uint32(32).uint64(message.failureCount);
        }
        if (message.errorMessage !== "") {
            writer.uint32(42).string(message.errorMessage);
        }
        if (message.lastFailed !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastFailed), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFailedEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.database = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.viewName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.failedSequence = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.failureCount = reader.uint64();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.errorMessage = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.lastFailed = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            database: isSet(object.database) ? String(object.database) : "",
            viewName: isSet(object.viewName) ? String(object.viewName) : "",
            failedSequence: isSet(object.failedSequence) ? long_1.default.fromValue(object.failedSequence) : long_1.default.UZERO,
            failureCount: isSet(object.failureCount) ? long_1.default.fromValue(object.failureCount) : long_1.default.UZERO,
            errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
            lastFailed: isSet(object.lastFailed) ? fromJsonTimestamp(object.lastFailed) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.database !== undefined && (obj.database = message.database);
        message.viewName !== undefined && (obj.viewName = message.viewName);
        message.failedSequence !== undefined && (obj.failedSequence = (message.failedSequence || long_1.default.UZERO).toString());
        message.failureCount !== undefined && (obj.failureCount = (message.failureCount || long_1.default.UZERO).toString());
        message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
        message.lastFailed !== undefined && (obj.lastFailed = message.lastFailed.toISOString());
        return obj;
    },
    create(base) {
        return exports.FailedEvent.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFailedEvent();
        message.database = object.database ?? "";
        message.viewName = object.viewName ?? "";
        message.failedSequence = (object.failedSequence !== undefined && object.failedSequence !== null)
            ? long_1.default.fromValue(object.failedSequence)
            : long_1.default.UZERO;
        message.failureCount = (object.failureCount !== undefined && object.failureCount !== null)
            ? long_1.default.fromValue(object.failureCount)
            : long_1.default.UZERO;
        message.errorMessage = object.errorMessage ?? "";
        message.lastFailed = object.lastFailed ?? undefined;
        return message;
    },
};
function createBaseSetInstanceFeatureRequest() {
    return { instanceId: "", featureId: 0, bool: undefined };
}
exports.SetInstanceFeatureRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.featureId !== 0) {
            writer.uint32(16).int32(message.featureId);
        }
        if (message.bool !== undefined) {
            writer.uint32(24).bool(message.bool);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetInstanceFeatureRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.instanceId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.featureId = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.bool = reader.bool();
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            featureId: isSet(object.featureId) ? (0, feature_1.instanceFeatureFromJSON)(object.featureId) : 0,
            bool: isSet(object.bool) ? Boolean(object.bool) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.featureId !== undefined && (obj.featureId = (0, feature_1.instanceFeatureToJSON)(message.featureId));
        message.bool !== undefined && (obj.bool = message.bool);
        return obj;
    },
    create(base) {
        return exports.SetInstanceFeatureRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetInstanceFeatureRequest();
        message.instanceId = object.instanceId ?? "";
        message.featureId = object.featureId ?? 0;
        message.bool = object.bool ?? undefined;
        return message;
    },
};
function createBaseSetInstanceFeatureResponse() {
    return { details: undefined };
}
exports.SetInstanceFeatureResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetInstanceFeatureResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetInstanceFeatureResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetInstanceFeatureResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
exports.SystemServiceDefinition = {
    name: "SystemService",
    fullName: "zitadel.system.v1.SystemService",
    methods: {
        /**
         * Indicates if ZITADEL is running.
         * It respondes as soon as ZITADEL started
         */
        healthz: {
            name: "Healthz",
            requestType: exports.HealthzRequest,
            requestStream: false,
            responseType: exports.HealthzResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            73,
                            10,
                            7,
                            71,
                            101,
                            110,
                            101,
                            114,
                            97,
                            108,
                            74,
                            24,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            17,
                            10,
                            15,
                            90,
                            73,
                            84,
                            65,
                            68,
                            69,
                            76,
                            32,
                            115,
                            116,
                            97,
                            114,
                            116,
                            101,
                            100,
                            74,
                            36,
                            10,
                            7,
                            100,
                            101,
                            102,
                            97,
                            117,
                            108,
                            116,
                            18,
                            25,
                            10,
                            23,
                            90,
                            73,
                            84,
                            65,
                            68,
                            69,
                            76,
                            32,
                            78,
                            79,
                            84,
                            32,
                            115,
                            116,
                            97,
                            114,
                            116,
                            101,
                            100,
                            32,
                            121,
                            101,
                            116,
                        ]),
                    ],
                    578365826: [Buffer.from([10, 18, 8, 47, 104, 101, 97, 108, 116, 104, 122])],
                },
            },
        },
        /** Returns a list of ZITADEL instances */
        listInstances: {
            name: "ListInstances",
            requestType: exports.ListInstancesRequest,
            requestStream: false,
            responseType: exports.ListInstancesResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            22,
                            10,
                            20,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            46,
                            114,
                            101,
                            97,
                            100,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            23,
                            58,
                            1,
                            42,
                            34,
                            18,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        /** Returns the detail of an instance */
        getInstance: {
            name: "GetInstance",
            requestType: exports.GetInstanceRequest,
            requestStream: false,
            responseType: exports.GetInstanceResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            22,
                            10,
                            20,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            46,
                            114,
                            101,
                            97,
                            100,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            26,
                            18,
                            24,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        /**
         * Deprecated: Use CreateInstance instead
         * Creates a new instance with all needed setup data
         * This might take some time
         */
        addInstance: {
            name: "AddInstance",
            requestType: exports.AddInstanceRequest,
            requestStream: false,
            responseType: exports.AddInstanceResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            23,
                            10,
                            21,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [Buffer.from([15, 58, 1, 42, 34, 10, 47, 105, 110, 115, 116, 97, 110, 99, 101, 115])],
                },
            },
        },
        /** Updates name of an existing instance */
        updateInstance: {
            name: "UpdateInstance",
            requestType: exports.UpdateInstanceRequest,
            requestStream: false,
            responseType: exports.UpdateInstanceResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            23,
                            10,
                            21,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
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
                            29,
                            58,
                            1,
                            42,
                            26,
                            24,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        /**
         * Creates a new instance with all needed setup data
         * This might take some time
         */
        createInstance: {
            name: "CreateInstance",
            requestType: exports.CreateInstanceRequest,
            requestStream: false,
            responseType: exports.CreateInstanceResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            23,
                            10,
                            21,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
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
                            23,
                            58,
                            1,
                            42,
                            34,
                            18,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            95,
                            99,
                            114,
                            101,
                            97,
                            116,
                            101,
                        ]),
                    ],
                },
            },
        },
        /**
         * Removes an instance
         * This might take some time
         */
        removeInstance: {
            name: "RemoveInstance",
            requestType: exports.RemoveInstanceRequest,
            requestStream: false,
            responseType: exports.RemoveInstanceResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            24,
                            10,
                            22,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            46,
                            100,
                            101,
                            108,
                            101,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            26,
                            42,
                            24,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        /**
         * Returns all instance members matching the request
         * all queries need to match (ANDed)
         * Deprecated: Use the Admin APIs ListIAMMembers instead
         */
        listIAMMembers: {
            name: "ListIAMMembers",
            requestType: exports.ListIAMMembersRequest,
            requestStream: false,
            responseType: exports.ListIAMMembersResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            24,
                            10,
                            22,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            105,
                            97,
                            109,
                            46,
                            109,
                            101,
                            109,
                            98,
                            101,
                            114,
                            46,
                            114,
                            101,
                            97,
                            100,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            45,
                            58,
                            1,
                            42,
                            34,
                            40,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            109,
                            101,
                            109,
                            98,
                            101,
                            114,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        /** Checks if a domain exists */
        existsDomain: {
            name: "ExistsDomain",
            requestType: exports.ExistsDomainRequest,
            requestStream: false,
            responseType: exports.ExistsDomainResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            20,
                            10,
                            18,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            46,
                            114,
                            101,
                            97,
                            100,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            30,
                            58,
                            1,
                            42,
                            34,
                            25,
                            47,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            115,
                            47,
                            123,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            125,
                            47,
                            95,
                            101,
                            120,
                            105,
                            115,
                            116,
                            115,
                        ]),
                    ],
                },
            },
        },
        /**
         * Returns the custom domains of an instance
         * Checks if a domain exists
         * Deprecated: Use the Admin APIs ListInstanceDomains on the admin API instead
         */
        listDomains: {
            name: "ListDomains",
            requestType: exports.ListDomainsRequest,
            requestStream: false,
            responseType: exports.ListDomainsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            20,
                            10,
                            18,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            46,
                            114,
                            101,
                            97,
                            100,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            45,
                            58,
                            1,
                            42,
                            34,
                            40,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        /** Adds a domain to an instance */
        addDomain: {
            name: "AddDomain",
            requestType: exports.AddDomainRequest,
            requestStream: false,
            responseType: exports.AddDomainResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            21,
                            10,
                            19,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
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
                            37,
                            58,
                            1,
                            42,
                            34,
                            32,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            115,
                        ]),
                    ],
                },
            },
        },
        /** Removes the domain of an instance */
        removeDomain: {
            name: "RemoveDomain",
            requestType: exports.RemoveDomainRequest,
            requestStream: false,
            responseType: exports.RemoveDomainResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            22,
                            10,
                            20,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            46,
                            100,
                            101,
                            108,
                            101,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            43,
                            42,
                            41,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            115,
                            47,
                            123,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            125,
                        ]),
                    ],
                },
            },
        },
        /** Sets the primary domain of an instance */
        setPrimaryDomain: {
            name: "SetPrimaryDomain",
            requestType: exports.SetPrimaryDomainRequest,
            requestStream: false,
            responseType: exports.SetPrimaryDomainResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            21,
                            10,
                            19,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
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
                            50,
                            58,
                            1,
                            42,
                            34,
                            45,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            115,
                            47,
                            95,
                            115,
                            101,
                            116,
                            95,
                            112,
                            114,
                            105,
                            109,
                            97,
                            114,
                            121,
                        ]),
                    ],
                },
            },
        },
        /**
         * Returns all stored read models of ZITADEL
         * views are used for search optimisation and optimise request latencies
         * they represent the delta of the event happend on the objects
         */
        listViews: {
            name: "ListViews",
            requestType: exports.ListViewsRequest,
            requestStream: false,
            responseType: exports.ListViewsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            44,
                            10,
                            5,
                            118,
                            105,
                            101,
                            119,
                            115,
                            74,
                            35,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            28,
                            10,
                            26,
                            86,
                            105,
                            101,
                            119,
                            115,
                            32,
                            102,
                            111,
                            114,
                            32,
                            113,
                            117,
                            101,
                            114,
                            121,
                            32,
                            111,
                            112,
                            101,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                        ]),
                    ],
                    400002: [
                        Buffer.from([19, 10, 17, 115, 121, 115, 116, 101, 109, 46, 100, 101, 98, 117, 103, 46, 114, 101, 97, 100]),
                    ],
                    578365826: [
                        Buffer.from([19, 58, 1, 42, 34, 14, 47, 118, 105, 101, 119, 115, 47, 95, 115, 101, 97, 114, 99, 104]),
                    ],
                },
            },
        },
        /**
         * Truncates the delta of the change stream
         * be carefull with this function because ZITADEL has to
         * recompute the deltas after they got cleared.
         * Search requests will return wrong results until all deltas are recomputed
         */
        clearView: {
            name: "ClearView",
            requestType: exports.ClearViewRequest,
            requestStream: false,
            responseType: exports.ClearViewResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            30,
                            10,
                            5,
                            118,
                            105,
                            101,
                            119,
                            115,
                            74,
                            21,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            14,
                            10,
                            12,
                            86,
                            105,
                            101,
                            119,
                            32,
                            99,
                            108,
                            101,
                            97,
                            114,
                            101,
                            100,
                        ]),
                    ],
                    400002: [
                        Buffer.from([
                            20,
                            10,
                            18,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            100,
                            101,
                            98,
                            117,
                            103,
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
                            31,
                            34,
                            29,
                            47,
                            118,
                            105,
                            101,
                            119,
                            115,
                            47,
                            123,
                            100,
                            97,
                            116,
                            97,
                            98,
                            97,
                            115,
                            101,
                            125,
                            47,
                            123,
                            118,
                            105,
                            101,
                            119,
                            95,
                            110,
                            97,
                            109,
                            101,
                            125,
                        ]),
                    ],
                },
            },
        },
        /**
         * Returns event descriptions which cannot be processed.
         * It's possible that some events need some retries.
         * For example if the SMTP-API wasn't able to send an email at the first time
         */
        listFailedEvents: {
            name: "ListFailedEvents",
            requestType: exports.ListFailedEventsRequest,
            requestStream: false,
            responseType: exports.ListFailedEventsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            70,
                            10,
                            13,
                            102,
                            97,
                            105,
                            108,
                            101,
                            100,
                            32,
                            101,
                            118,
                            101,
                            110,
                            116,
                            115,
                            74,
                            53,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            46,
                            10,
                            44,
                            69,
                            118,
                            101,
                            110,
                            116,
                            115,
                            32,
                            119,
                            104,
                            105,
                            99,
                            104,
                            32,
                            119,
                            101,
                            114,
                            101,
                            32,
                            110,
                            111,
                            116,
                            32,
                            112,
                            114,
                            111,
                            99,
                            101,
                            115,
                            115,
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
                            118,
                            105,
                            101,
                            119,
                            115,
                        ]),
                    ],
                    400002: [
                        Buffer.from([19, 10, 17, 115, 121, 115, 116, 101, 109, 46, 100, 101, 98, 117, 103, 46, 114, 101, 97, 100]),
                    ],
                    578365826: [
                        Buffer.from([
                            26,
                            58,
                            1,
                            42,
                            34,
                            21,
                            47,
                            102,
                            97,
                            105,
                            108,
                            101,
                            100,
                            101,
                            118,
                            101,
                            110,
                            116,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        /**
         * Deletes the event from failed events view.
         * the event is not removed from the change stream
         * This call is usefull if the system was able to process the event later.
         * e.g. if the second try of sending an email was successful. the first try produced a
         * failed event. You can find out if it worked on the `failure_count`
         */
        removeFailedEvent: {
            name: "RemoveFailedEvent",
            requestType: exports.RemoveFailedEventRequest,
            requestStream: false,
            responseType: exports.RemoveFailedEventResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            116,
                            10,
                            13,
                            102,
                            97,
                            105,
                            108,
                            101,
                            100,
                            32,
                            101,
                            118,
                            101,
                            110,
                            116,
                            115,
                            74,
                            37,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            30,
                            10,
                            28,
                            69,
                            118,
                            101,
                            110,
                            116,
                            115,
                            32,
                            114,
                            101,
                            109,
                            111,
                            118,
                            101,
                            100,
                            32,
                            102,
                            114,
                            111,
                            109,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            105,
                            115,
                            116,
                            74,
                            60,
                            10,
                            3,
                            52,
                            48,
                            48,
                            18,
                            53,
                            10,
                            22,
                            102,
                            97,
                            105,
                            108,
                            101,
                            100,
                            32,
                            101,
                            118,
                            101,
                            110,
                            116,
                            32,
                            110,
                            111,
                            116,
                            32,
                            102,
                            111,
                            117,
                            110,
                            100,
                            18,
                            27,
                            10,
                            25,
                            26,
                            23,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            114,
                            112,
                            99,
                            83,
                            116,
                            97,
                            116,
                            117,
                            115,
                        ]),
                    ],
                    400002: [
                        Buffer.from([
                            21,
                            10,
                            19,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            100,
                            101,
                            98,
                            117,
                            103,
                            46,
                            100,
                            101,
                            108,
                            101,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            56,
                            42,
                            54,
                            47,
                            102,
                            97,
                            105,
                            108,
                            101,
                            100,
                            101,
                            118,
                            101,
                            110,
                            116,
                            115,
                            47,
                            123,
                            100,
                            97,
                            116,
                            97,
                            98,
                            97,
                            115,
                            101,
                            125,
                            47,
                            123,
                            118,
                            105,
                            101,
                            119,
                            95,
                            110,
                            97,
                            109,
                            101,
                            125,
                            47,
                            123,
                            102,
                            97,
                            105,
                            108,
                            101,
                            100,
                            95,
                            115,
                            101,
                            113,
                            117,
                            101,
                            110,
                            99,
                            101,
                            125,
                        ]),
                    ],
                },
            },
        },
        /**
         * Creates a new quota
         * Returns an error if the quota already exists for the specified unit
         * Deprecated: use SetQuota instead
         */
        addQuota: {
            name: "AddQuota",
            requestType: exports.AddQuotaRequest,
            requestStream: false,
            responseType: exports.AddQuotaResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            23,
                            10,
                            13,
                            85,
                            115,
                            97,
                            103,
                            101,
                            32,
                            67,
                            111,
                            110,
                            116,
                            114,
                            111,
                            108,
                            10,
                            6,
                            81,
                            117,
                            111,
                            116,
                            97,
                            115,
                        ]),
                    ],
                    400002: [
                        Buffer.from([
                            20,
                            10,
                            18,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            113,
                            117,
                            111,
                            116,
                            97,
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
                            36,
                            58,
                            1,
                            42,
                            34,
                            31,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            113,
                            117,
                            111,
                            116,
                            97,
                            115,
                        ]),
                    ],
                },
            },
        },
        /**
         * Sets quota configuration properties
         * Creates a new quota if it doesn't exist for the specified unit
         */
        setQuota: {
            name: "SetQuota",
            requestType: exports.SetQuotaRequest,
            requestStream: false,
            responseType: exports.SetQuotaResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            23,
                            10,
                            13,
                            85,
                            115,
                            97,
                            103,
                            101,
                            32,
                            67,
                            111,
                            110,
                            116,
                            114,
                            111,
                            108,
                            10,
                            6,
                            81,
                            117,
                            111,
                            116,
                            97,
                            115,
                        ]),
                    ],
                    400002: [
                        Buffer.from([
                            20,
                            10,
                            18,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            113,
                            117,
                            111,
                            116,
                            97,
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
                            36,
                            58,
                            1,
                            42,
                            26,
                            31,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            113,
                            117,
                            111,
                            116,
                            97,
                            115,
                        ]),
                    ],
                },
            },
        },
        /** Removes a quota */
        removeQuota: {
            name: "RemoveQuota",
            requestType: exports.RemoveQuotaRequest,
            requestStream: false,
            responseType: exports.RemoveQuotaResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            23,
                            10,
                            13,
                            85,
                            115,
                            97,
                            103,
                            101,
                            32,
                            67,
                            111,
                            110,
                            116,
                            114,
                            111,
                            108,
                            10,
                            6,
                            81,
                            117,
                            111,
                            116,
                            97,
                            115,
                        ]),
                    ],
                    400002: [
                        Buffer.from([
                            21,
                            10,
                            19,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            113,
                            117,
                            111,
                            116,
                            97,
                            46,
                            100,
                            101,
                            108,
                            101,
                            116,
                            101,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            40,
                            42,
                            38,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            113,
                            117,
                            111,
                            116,
                            97,
                            115,
                            47,
                            123,
                            117,
                            110,
                            105,
                            116,
                            125,
                        ]),
                    ],
                },
            },
        },
        /** Set a feature flag on an instance */
        setInstanceFeature: {
            name: "SetInstanceFeature",
            requestType: exports.SetInstanceFeatureRequest,
            requestStream: false,
            responseType: exports.SetInstanceFeatureResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    400002: [
                        Buffer.from([
                            22,
                            10,
                            20,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            46,
                            102,
                            101,
                            97,
                            116,
                            117,
                            114,
                            101,
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
                            51,
                            58,
                            1,
                            42,
                            26,
                            46,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            102,
                            101,
                            97,
                            116,
                            117,
                            114,
                            101,
                            115,
                            47,
                            123,
                            102,
                            101,
                            97,
                            116,
                            117,
                            114,
                            101,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        /** Sets instance level limits */
        setLimits: {
            name: "SetLimits",
            requestType: exports.SetLimitsRequest,
            requestStream: false,
            responseType: exports.SetLimitsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            129,
                            1,
                            10,
                            13,
                            85,
                            115,
                            97,
                            103,
                            101,
                            32,
                            67,
                            111,
                            110,
                            116,
                            114,
                            111,
                            108,
                            10,
                            6,
                            76,
                            105,
                            109,
                            105,
                            116,
                            115,
                            74,
                            28,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            21,
                            10,
                            19,
                            73,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            32,
                            108,
                            105,
                            109,
                            105,
                            116,
                            115,
                            32,
                            115,
                            101,
                            116,
                            74,
                            74,
                            10,
                            3,
                            52,
                            48,
                            48,
                            18,
                            67,
                            10,
                            36,
                            65,
                            116,
                            32,
                            108,
                            101,
                            97,
                            115,
                            116,
                            32,
                            111,
                            110,
                            101,
                            32,
                            108,
                            105,
                            109,
                            105,
                            116,
                            32,
                            109,
                            117,
                            115,
                            116,
                            32,
                            98,
                            101,
                            32,
                            115,
                            112,
                            101,
                            99,
                            105,
                            102,
                            105,
                            101,
                            100,
                            18,
                            27,
                            10,
                            25,
                            26,
                            23,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            114,
                            112,
                            99,
                            83,
                            116,
                            97,
                            116,
                            117,
                            115,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            36,
                            58,
                            1,
                            42,
                            26,
                            31,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            108,
                            105,
                            109,
                            105,
                            116,
                            115,
                        ]),
                    ],
                },
            },
        },
        /** Resets instance level limits */
        resetLimits: {
            name: "ResetLimits",
            requestType: exports.ResetLimitsRequest,
            requestStream: false,
            responseType: exports.ResetLimitsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            158,
                            1,
                            10,
                            13,
                            85,
                            115,
                            97,
                            103,
                            101,
                            32,
                            67,
                            111,
                            110,
                            116,
                            114,
                            111,
                            108,
                            10,
                            6,
                            76,
                            105,
                            109,
                            105,
                            116,
                            115,
                            74,
                            48,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            41,
                            10,
                            39,
                            76,
                            105,
                            109,
                            105,
                            116,
                            115,
                            32,
                            97,
                            114,
                            101,
                            32,
                            114,
                            101,
                            115,
                            101,
                            116,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            32,
                            100,
                            101,
                            102,
                            97,
                            117,
                            108,
                            116,
                            115,
                            74,
                            83,
                            10,
                            3,
                            52,
                            48,
                            52,
                            18,
                            76,
                            10,
                            45,
                            76,
                            105,
                            109,
                            105,
                            116,
                            115,
                            32,
                            97,
                            114,
                            101,
                            32,
                            97,
                            108,
                            114,
                            101,
                            97,
                            100,
                            121,
                            32,
                            115,
                            101,
                            116,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            32,
                            100,
                            101,
                            102,
                            97,
                            117,
                            108,
                            116,
                            115,
                            18,
                            27,
                            10,
                            25,
                            26,
                            23,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            114,
                            112,
                            99,
                            83,
                            116,
                            97,
                            116,
                            117,
                            115,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            33,
                            42,
                            31,
                            47,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            115,
                            47,
                            123,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            95,
                            105,
                            100,
                            125,
                            47,
                            108,
                            105,
                            109,
                            105,
                            116,
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
