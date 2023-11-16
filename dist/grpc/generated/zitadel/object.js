"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDetails = exports.ListQuery = exports.ObjectDetails = exports.timestampQueryMethodToJSON = exports.timestampQueryMethodFromJSON = exports.TimestampQueryMethod = exports.listQueryMethodToJSON = exports.listQueryMethodFromJSON = exports.ListQueryMethod = exports.textQueryMethodToJSON = exports.textQueryMethodFromJSON = exports.TextQueryMethod = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../google/protobuf/timestamp");
exports.protobufPackage = "zitadel.v1";
var TextQueryMethod;
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
})(TextQueryMethod || (exports.TextQueryMethod = TextQueryMethod = {}));
function textQueryMethodFromJSON(object) {
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
exports.textQueryMethodFromJSON = textQueryMethodFromJSON;
function textQueryMethodToJSON(object) {
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
exports.textQueryMethodToJSON = textQueryMethodToJSON;
var ListQueryMethod;
(function (ListQueryMethod) {
    ListQueryMethod[ListQueryMethod["LIST_QUERY_METHOD_IN"] = 0] = "LIST_QUERY_METHOD_IN";
    ListQueryMethod[ListQueryMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListQueryMethod || (exports.ListQueryMethod = ListQueryMethod = {}));
function listQueryMethodFromJSON(object) {
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
exports.listQueryMethodFromJSON = listQueryMethodFromJSON;
function listQueryMethodToJSON(object) {
    switch (object) {
        case ListQueryMethod.LIST_QUERY_METHOD_IN:
            return "LIST_QUERY_METHOD_IN";
        case ListQueryMethod.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.listQueryMethodToJSON = listQueryMethodToJSON;
var TimestampQueryMethod;
(function (TimestampQueryMethod) {
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_EQUALS"] = 0] = "TIMESTAMP_QUERY_METHOD_EQUALS";
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_GREATER"] = 1] = "TIMESTAMP_QUERY_METHOD_GREATER";
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS"] = 2] = "TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS";
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_LESS"] = 3] = "TIMESTAMP_QUERY_METHOD_LESS";
    TimestampQueryMethod[TimestampQueryMethod["TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS"] = 4] = "TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS";
    TimestampQueryMethod[TimestampQueryMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TimestampQueryMethod || (exports.TimestampQueryMethod = TimestampQueryMethod = {}));
function timestampQueryMethodFromJSON(object) {
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
exports.timestampQueryMethodFromJSON = timestampQueryMethodFromJSON;
function timestampQueryMethodToJSON(object) {
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
exports.timestampQueryMethodToJSON = timestampQueryMethodToJSON;
function createBaseObjectDetails() {
    return { sequence: long_1.default.UZERO, creationDate: undefined, changeDate: undefined, resourceOwner: "" };
}
exports.ObjectDetails = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.creationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.changeDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(26).fork()).ldelim();
        }
        if (message.resourceOwner !== "") {
            writer.uint32(34).string(message.resourceOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseObjectDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.sequence = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.creationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.changeDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
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
        return {
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            creationDate: isSet(object.creationDate) ? fromJsonTimestamp(object.creationDate) : undefined,
            changeDate: isSet(object.changeDate) ? fromJsonTimestamp(object.changeDate) : undefined,
            resourceOwner: isSet(object.resourceOwner) ? String(object.resourceOwner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.creationDate !== undefined && (obj.creationDate = message.creationDate.toISOString());
        message.changeDate !== undefined && (obj.changeDate = message.changeDate.toISOString());
        message.resourceOwner !== undefined && (obj.resourceOwner = message.resourceOwner);
        return obj;
    },
    create(base) {
        return exports.ObjectDetails.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseObjectDetails();
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? long_1.default.fromValue(object.sequence)
            : long_1.default.UZERO;
        message.creationDate = object.creationDate ?? undefined;
        message.changeDate = object.changeDate ?? undefined;
        message.resourceOwner = object.resourceOwner ?? "";
        return message;
    },
};
function createBaseListQuery() {
    return { offset: long_1.default.UZERO, limit: 0, asc: false };
}
exports.ListQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.offset.isZero()) {
            writer.uint32(8).uint64(message.offset);
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        if (message.asc === true) {
            writer.uint32(24).bool(message.asc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.asc = reader.bool();
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
            offset: isSet(object.offset) ? long_1.default.fromValue(object.offset) : long_1.default.UZERO,
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            asc: isSet(object.asc) ? Boolean(object.asc) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.offset !== undefined && (obj.offset = (message.offset || long_1.default.UZERO).toString());
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.asc !== undefined && (obj.asc = message.asc);
        return obj;
    },
    create(base) {
        return exports.ListQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListQuery();
        message.offset = (object.offset !== undefined && object.offset !== null)
            ? long_1.default.fromValue(object.offset)
            : long_1.default.UZERO;
        message.limit = object.limit ?? 0;
        message.asc = object.asc ?? false;
        return message;
    },
};
function createBaseListDetails() {
    return { totalResult: long_1.default.UZERO, processedSequence: long_1.default.UZERO, viewTimestamp: undefined };
}
exports.ListDetails = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.totalResult.isZero()) {
            writer.uint32(8).uint64(message.totalResult);
        }
        if (!message.processedSequence.isZero()) {
            writer.uint32(16).uint64(message.processedSequence);
        }
        if (message.viewTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.viewTimestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.totalResult = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.processedSequence = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.viewTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            totalResult: isSet(object.totalResult) ? long_1.default.fromValue(object.totalResult) : long_1.default.UZERO,
            processedSequence: isSet(object.processedSequence) ? long_1.default.fromValue(object.processedSequence) : long_1.default.UZERO,
            viewTimestamp: isSet(object.viewTimestamp) ? fromJsonTimestamp(object.viewTimestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalResult !== undefined && (obj.totalResult = (message.totalResult || long_1.default.UZERO).toString());
        message.processedSequence !== undefined &&
            (obj.processedSequence = (message.processedSequence || long_1.default.UZERO).toString());
        message.viewTimestamp !== undefined && (obj.viewTimestamp = message.viewTimestamp.toISOString());
        return obj;
    },
    create(base) {
        return exports.ListDetails.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListDetails();
        message.totalResult = (object.totalResult !== undefined && object.totalResult !== null)
            ? long_1.default.fromValue(object.totalResult)
            : long_1.default.UZERO;
        message.processedSequence = (object.processedSequence !== undefined && object.processedSequence !== null)
            ? long_1.default.fromValue(object.processedSequence)
            : long_1.default.UZERO;
        message.viewTimestamp = object.viewTimestamp ?? undefined;
        return message;
    },
};
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
