// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/object/v2/object.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Timestamp } from "../../../google/protobuf/timestamp.js";
export const protobufPackage = "zitadel.object.v2";
export var TextQueryMethod;
(function (TextQueryMethod) {
    TextQueryMethod[TextQueryMethod["TEXT_QUERY_METHOD_EQUALS"] = 0] = "TEXT_QUERY_METHOD_EQUALS";
    TextQueryMethod[TextQueryMethod["TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE"] = 1] = "TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE";
    TextQueryMethod[TextQueryMethod["TEXT_QUERY_METHOD_STARTS_WITH"] = 2] = "TEXT_QUERY_METHOD_STARTS_WITH";
    TextQueryMethod[TextQueryMethod["TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE"] = 3] = "TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE";
    TextQueryMethod[TextQueryMethod["TEXT_QUERY_METHOD_CONTAINS"] = 4] = "TEXT_QUERY_METHOD_CONTAINS";
    TextQueryMethod[TextQueryMethod["TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE"] = 5] = "TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE";
    TextQueryMethod[TextQueryMethod["TEXT_QUERY_METHOD_ENDS_WITH"] = 6] = "TEXT_QUERY_METHOD_ENDS_WITH";
    TextQueryMethod[TextQueryMethod["TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE"] = 7] = "TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE";
    TextQueryMethod[TextQueryMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TextQueryMethod || (TextQueryMethod = {}));
export function textQueryMethodFromJSON(object) {
    switch (object) {
        case 0:
        case "TEXT_QUERY_METHOD_EQUALS":
            return TextQueryMethod.TEXT_QUERY_METHOD_EQUALS;
        case 1:
        case "TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE":
            return TextQueryMethod.TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE;
        case 2:
        case "TEXT_QUERY_METHOD_STARTS_WITH":
            return TextQueryMethod.TEXT_QUERY_METHOD_STARTS_WITH;
        case 3:
        case "TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE":
            return TextQueryMethod.TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE;
        case 4:
        case "TEXT_QUERY_METHOD_CONTAINS":
            return TextQueryMethod.TEXT_QUERY_METHOD_CONTAINS;
        case 5:
        case "TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE":
            return TextQueryMethod.TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE;
        case 6:
        case "TEXT_QUERY_METHOD_ENDS_WITH":
            return TextQueryMethod.TEXT_QUERY_METHOD_ENDS_WITH;
        case 7:
        case "TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE":
            return TextQueryMethod.TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TextQueryMethod.UNRECOGNIZED;
    }
}
export function textQueryMethodToJSON(object) {
    switch (object) {
        case TextQueryMethod.TEXT_QUERY_METHOD_EQUALS:
            return "TEXT_QUERY_METHOD_EQUALS";
        case TextQueryMethod.TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE:
            return "TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE";
        case TextQueryMethod.TEXT_QUERY_METHOD_STARTS_WITH:
            return "TEXT_QUERY_METHOD_STARTS_WITH";
        case TextQueryMethod.TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE:
            return "TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE";
        case TextQueryMethod.TEXT_QUERY_METHOD_CONTAINS:
            return "TEXT_QUERY_METHOD_CONTAINS";
        case TextQueryMethod.TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE:
            return "TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE";
        case TextQueryMethod.TEXT_QUERY_METHOD_ENDS_WITH:
            return "TEXT_QUERY_METHOD_ENDS_WITH";
        case TextQueryMethod.TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE:
            return "TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE";
        case TextQueryMethod.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var ListQueryMethod;
(function (ListQueryMethod) {
    ListQueryMethod[ListQueryMethod["LIST_QUERY_METHOD_IN"] = 0] = "LIST_QUERY_METHOD_IN";
    ListQueryMethod[ListQueryMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListQueryMethod || (ListQueryMethod = {}));
export function listQueryMethodFromJSON(object) {
    switch (object) {
        case 0:
        case "LIST_QUERY_METHOD_IN":
            return ListQueryMethod.LIST_QUERY_METHOD_IN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ListQueryMethod.UNRECOGNIZED;
    }
}
export function listQueryMethodToJSON(object) {
    switch (object) {
        case ListQueryMethod.LIST_QUERY_METHOD_IN:
            return "LIST_QUERY_METHOD_IN";
        case ListQueryMethod.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var TimestampQueryMethod;
(function (TimestampQueryMethod) {
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_EQUALS"] = 0] = "TIMESTAMP_QUERY_METHOD_EQUALS";
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_GREATER"] = 1] = "TIMESTAMP_QUERY_METHOD_GREATER";
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS"] = 2] = "TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS";
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_LESS"] = 3] = "TIMESTAMP_QUERY_METHOD_LESS";
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS"] = 4] = "TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS";
    TimestampQueryMethod[TimestampQueryMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TimestampQueryMethod || (TimestampQueryMethod = {}));
export function timestampQueryMethodFromJSON(object) {
    switch (object) {
        case 0:
        case "TIMESTAMP_QUERY_METHOD_EQUALS":
            return TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_EQUALS;
        case 1:
        case "TIMESTAMP_QUERY_METHOD_GREATER":
            return TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_GREATER;
        case 2:
        case "TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS":
            return TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS;
        case 3:
        case "TIMESTAMP_QUERY_METHOD_LESS":
            return TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_LESS;
        case 4:
        case "TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS":
            return TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TimestampQueryMethod.UNRECOGNIZED;
    }
}
export function timestampQueryMethodToJSON(object) {
    switch (object) {
        case TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_EQUALS:
            return "TIMESTAMP_QUERY_METHOD_EQUALS";
        case TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_GREATER:
            return "TIMESTAMP_QUERY_METHOD_GREATER";
        case TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS:
            return "TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS";
        case TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_LESS:
            return "TIMESTAMP_QUERY_METHOD_LESS";
        case TimestampQueryMethod.TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS:
            return "TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS";
        case TimestampQueryMethod.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseOrganisation() {
    return { orgId: undefined, orgDomain: undefined };
}
export const Organisation = {
    encode(message, writer = new BinaryWriter()) {
        if (message.orgId !== undefined) {
            writer.uint32(10).string(message.orgId);
        }
        if (message.orgDomain !== undefined) {
            writer.uint32(18).string(message.orgDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganisation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.orgDomain = reader.string();
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
            orgId: isSet(object.orgId) ? globalThis.String(object.orgId) : undefined,
            orgDomain: isSet(object.orgDomain) ? globalThis.String(object.orgDomain) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgId !== undefined) {
            obj.orgId = message.orgId;
        }
        if (message.orgDomain !== undefined) {
            obj.orgDomain = message.orgDomain;
        }
        return obj;
    },
    create(base) {
        return Organisation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrganisation();
        message.orgId = object.orgId ?? undefined;
        message.orgDomain = object.orgDomain ?? undefined;
        return message;
    },
};
function createBaseOrganization() {
    return { orgId: undefined, orgDomain: undefined };
}
export const Organization = {
    encode(message, writer = new BinaryWriter()) {
        if (message.orgId !== undefined) {
            writer.uint32(10).string(message.orgId);
        }
        if (message.orgDomain !== undefined) {
            writer.uint32(18).string(message.orgDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.orgDomain = reader.string();
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
            orgId: isSet(object.orgId) ? globalThis.String(object.orgId) : undefined,
            orgDomain: isSet(object.orgDomain) ? globalThis.String(object.orgDomain) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgId !== undefined) {
            obj.orgId = message.orgId;
        }
        if (message.orgDomain !== undefined) {
            obj.orgDomain = message.orgDomain;
        }
        return obj;
    },
    create(base) {
        return Organization.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrganization();
        message.orgId = object.orgId ?? undefined;
        message.orgDomain = object.orgDomain ?? undefined;
        return message;
    },
};
function createBaseRequestContext() {
    return { orgId: undefined, instance: undefined };
}
export const RequestContext = {
    encode(message, writer = new BinaryWriter()) {
        if (message.orgId !== undefined) {
            writer.uint32(10).string(message.orgId);
        }
        if (message.instance !== undefined) {
            writer.uint32(16).bool(message.instance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.instance = reader.bool();
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
            orgId: isSet(object.orgId) ? globalThis.String(object.orgId) : undefined,
            instance: isSet(object.instance) ? globalThis.Boolean(object.instance) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orgId !== undefined) {
            obj.orgId = message.orgId;
        }
        if (message.instance !== undefined) {
            obj.instance = message.instance;
        }
        return obj;
    },
    create(base) {
        return RequestContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestContext();
        message.orgId = object.orgId ?? undefined;
        message.instance = object.instance ?? undefined;
        return message;
    },
};
function createBaseListQuery() {
    return { offset: Long.UZERO, limit: 0, asc: false };
}
export const ListQuery = {
    encode(message, writer = new BinaryWriter()) {
        if (!message.offset.equals(Long.UZERO)) {
            writer.uint32(8).uint64(message.offset.toString());
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        if (message.asc !== false) {
            writer.uint32(24).bool(message.asc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = Long.fromString(reader.uint64().toString(), true);
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = reader.uint32();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.asc = reader.bool();
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
            offset: isSet(object.offset) ? Long.fromValue(object.offset) : Long.UZERO,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            asc: isSet(object.asc) ? globalThis.Boolean(object.asc) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (!message.offset.equals(Long.UZERO)) {
            obj.offset = (message.offset || Long.UZERO).toString();
        }
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.asc !== false) {
            obj.asc = message.asc;
        }
        return obj;
    },
    create(base) {
        return ListQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListQuery();
        message.offset = (object.offset !== undefined && object.offset !== null)
            ? Long.fromValue(object.offset)
            : Long.UZERO;
        message.limit = object.limit ?? 0;
        message.asc = object.asc ?? false;
        return message;
    },
};
function createBaseDetails() {
    return { sequence: Long.UZERO, changeDate: undefined, resourceOwner: "" };
}
export const Details = {
    encode(message, writer = new BinaryWriter()) {
        if (!message.sequence.equals(Long.UZERO)) {
            writer.uint32(8).uint64(message.sequence.toString());
        }
        if (message.changeDate !== undefined) {
            Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(18).fork()).join();
        }
        if (message.resourceOwner !== "") {
            writer.uint32(26).string(message.resourceOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.sequence = Long.fromString(reader.uint64().toString(), true);
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.changeDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.resourceOwner = reader.string();
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
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            changeDate: isSet(object.changeDate) ? fromJsonTimestamp(object.changeDate) : undefined,
            resourceOwner: isSet(object.resourceOwner) ? globalThis.String(object.resourceOwner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (!message.sequence.equals(Long.UZERO)) {
            obj.sequence = (message.sequence || Long.UZERO).toString();
        }
        if (message.changeDate !== undefined) {
            obj.changeDate = message.changeDate.toISOString();
        }
        if (message.resourceOwner !== "") {
            obj.resourceOwner = message.resourceOwner;
        }
        return obj;
    },
    create(base) {
        return Details.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDetails();
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? Long.fromValue(object.sequence)
            : Long.UZERO;
        message.changeDate = object.changeDate ?? undefined;
        message.resourceOwner = object.resourceOwner ?? "";
        return message;
    },
};
function createBaseListDetails() {
    return { totalResult: Long.UZERO, processedSequence: Long.UZERO, timestamp: undefined };
}
export const ListDetails = {
    encode(message, writer = new BinaryWriter()) {
        if (!message.totalResult.equals(Long.UZERO)) {
            writer.uint32(8).uint64(message.totalResult.toString());
        }
        if (!message.processedSequence.equals(Long.UZERO)) {
            writer.uint32(16).uint64(message.processedSequence.toString());
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.totalResult = Long.fromString(reader.uint64().toString(), true);
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.processedSequence = Long.fromString(reader.uint64().toString(), true);
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            totalResult: isSet(object.totalResult) ? Long.fromValue(object.totalResult) : Long.UZERO,
            processedSequence: isSet(object.processedSequence) ? Long.fromValue(object.processedSequence) : Long.UZERO,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (!message.totalResult.equals(Long.UZERO)) {
            obj.totalResult = (message.totalResult || Long.UZERO).toString();
        }
        if (!message.processedSequence.equals(Long.UZERO)) {
            obj.processedSequence = (message.processedSequence || Long.UZERO).toString();
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = message.timestamp.toISOString();
        }
        return obj;
    },
    create(base) {
        return ListDetails.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListDetails();
        message.totalResult = (object.totalResult !== undefined && object.totalResult !== null)
            ? Long.fromValue(object.totalResult)
            : Long.UZERO;
        message.processedSequence = (object.processedSequence !== undefined && object.processedSequence !== null)
            ? Long.fromValue(object.processedSequence)
            : Long.UZERO;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds.toNumber() || 0) * 1_000;
    millis += (t.nanos || 0) / 1_000_000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return Long.fromNumber(number);
}
function isSet(value) {
    return value !== null && value !== undefined;
}