"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsReachedQuery = exports.MilestoneQuery = exports.Milestone = exports.milestoneFieldNameToJSON = exports.milestoneFieldNameFromJSON = exports.MilestoneFieldName = exports.milestoneTypeToJSON = exports.milestoneTypeFromJSON = exports.MilestoneType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "zitadel.milestone.v1";
var MilestoneType;
(function (MilestoneType) {
    MilestoneType[MilestoneType["MILESTONE_TYPE_UNSPECIFIED"] = 0] = "MILESTONE_TYPE_UNSPECIFIED";
    MilestoneType[MilestoneType["MILESTONE_TYPE_INSTANCE_CREATED"] = 1] = "MILESTONE_TYPE_INSTANCE_CREATED";
    MilestoneType[MilestoneType["MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE"] = 2] = "MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE";
    MilestoneType[MilestoneType["MILESTONE_TYPE_PROJECT_CREATED"] = 3] = "MILESTONE_TYPE_PROJECT_CREATED";
    MilestoneType[MilestoneType["MILESTONE_TYPE_APPLICATION_CREATED"] = 4] = "MILESTONE_TYPE_APPLICATION_CREATED";
    MilestoneType[MilestoneType["MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION"] = 5] = "MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION";
    MilestoneType[MilestoneType["MILESTONE_TYPE_INSTANCE_DELETED"] = 6] = "MILESTONE_TYPE_INSTANCE_DELETED";
    MilestoneType[MilestoneType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MilestoneType || (exports.MilestoneType = MilestoneType = {}));
function milestoneTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "MILESTONE_TYPE_UNSPECIFIED":
            return MilestoneType.MILESTONE_TYPE_UNSPECIFIED;
        case 1:
        case "MILESTONE_TYPE_INSTANCE_CREATED":
            return MilestoneType.MILESTONE_TYPE_INSTANCE_CREATED;
        case 2:
        case "MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE":
            return MilestoneType.MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE;
        case 3:
        case "MILESTONE_TYPE_PROJECT_CREATED":
            return MilestoneType.MILESTONE_TYPE_PROJECT_CREATED;
        case 4:
        case "MILESTONE_TYPE_APPLICATION_CREATED":
            return MilestoneType.MILESTONE_TYPE_APPLICATION_CREATED;
        case 5:
        case "MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION":
            return MilestoneType.MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION;
        case 6:
        case "MILESTONE_TYPE_INSTANCE_DELETED":
            return MilestoneType.MILESTONE_TYPE_INSTANCE_DELETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MilestoneType.UNRECOGNIZED;
    }
}
exports.milestoneTypeFromJSON = milestoneTypeFromJSON;
function milestoneTypeToJSON(object) {
    switch (object) {
        case MilestoneType.MILESTONE_TYPE_UNSPECIFIED:
            return "MILESTONE_TYPE_UNSPECIFIED";
        case MilestoneType.MILESTONE_TYPE_INSTANCE_CREATED:
            return "MILESTONE_TYPE_INSTANCE_CREATED";
        case MilestoneType.MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE:
            return "MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE";
        case MilestoneType.MILESTONE_TYPE_PROJECT_CREATED:
            return "MILESTONE_TYPE_PROJECT_CREATED";
        case MilestoneType.MILESTONE_TYPE_APPLICATION_CREATED:
            return "MILESTONE_TYPE_APPLICATION_CREATED";
        case MilestoneType.MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION:
            return "MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION";
        case MilestoneType.MILESTONE_TYPE_INSTANCE_DELETED:
            return "MILESTONE_TYPE_INSTANCE_DELETED";
        case MilestoneType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.milestoneTypeToJSON = milestoneTypeToJSON;
var MilestoneFieldName;
(function (MilestoneFieldName) {
    MilestoneFieldName[MilestoneFieldName["MILESTONE_FIELD_NAME_UNSPECIFIED"] = 0] = "MILESTONE_FIELD_NAME_UNSPECIFIED";
    MilestoneFieldName[MilestoneFieldName["MILESTONE_FIELD_NAME_TYPE"] = 1] = "MILESTONE_FIELD_NAME_TYPE";
    MilestoneFieldName[MilestoneFieldName["MILESTONE_FIELD_NAME_REACHED_DATE"] = 2] = "MILESTONE_FIELD_NAME_REACHED_DATE";
    MilestoneFieldName[MilestoneFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MilestoneFieldName || (exports.MilestoneFieldName = MilestoneFieldName = {}));
function milestoneFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "MILESTONE_FIELD_NAME_UNSPECIFIED":
            return MilestoneFieldName.MILESTONE_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "MILESTONE_FIELD_NAME_TYPE":
            return MilestoneFieldName.MILESTONE_FIELD_NAME_TYPE;
        case 2:
        case "MILESTONE_FIELD_NAME_REACHED_DATE":
            return MilestoneFieldName.MILESTONE_FIELD_NAME_REACHED_DATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MilestoneFieldName.UNRECOGNIZED;
    }
}
exports.milestoneFieldNameFromJSON = milestoneFieldNameFromJSON;
function milestoneFieldNameToJSON(object) {
    switch (object) {
        case MilestoneFieldName.MILESTONE_FIELD_NAME_UNSPECIFIED:
            return "MILESTONE_FIELD_NAME_UNSPECIFIED";
        case MilestoneFieldName.MILESTONE_FIELD_NAME_TYPE:
            return "MILESTONE_FIELD_NAME_TYPE";
        case MilestoneFieldName.MILESTONE_FIELD_NAME_REACHED_DATE:
            return "MILESTONE_FIELD_NAME_REACHED_DATE";
        case MilestoneFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.milestoneFieldNameToJSON = milestoneFieldNameToJSON;
function createBaseMilestone() {
    return { type: 0, reachedDate: undefined };
}
exports.Milestone = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.reachedDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.reachedDate), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMilestone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.reachedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? milestoneTypeFromJSON(object.type) : 0,
            reachedDate: isSet(object.reachedDate) ? fromJsonTimestamp(object.reachedDate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = milestoneTypeToJSON(message.type));
        message.reachedDate !== undefined && (obj.reachedDate = message.reachedDate.toISOString());
        return obj;
    },
    create(base) {
        return exports.Milestone.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMilestone();
        message.type = object.type ?? 0;
        message.reachedDate = object.reachedDate ?? undefined;
        return message;
    },
};
function createBaseMilestoneQuery() {
    return { isReachedQuery: undefined };
}
exports.MilestoneQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.isReachedQuery !== undefined) {
            exports.IsReachedQuery.encode(message.isReachedQuery, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMilestoneQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.isReachedQuery = exports.IsReachedQuery.decode(reader, reader.uint32());
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
            isReachedQuery: isSet(object.isReachedQuery) ? exports.IsReachedQuery.fromJSON(object.isReachedQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.isReachedQuery !== undefined &&
            (obj.isReachedQuery = message.isReachedQuery ? exports.IsReachedQuery.toJSON(message.isReachedQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.MilestoneQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMilestoneQuery();
        message.isReachedQuery = (object.isReachedQuery !== undefined && object.isReachedQuery !== null)
            ? exports.IsReachedQuery.fromPartial(object.isReachedQuery)
            : undefined;
        return message;
    },
};
function createBaseIsReachedQuery() {
    return { reached: false };
}
exports.IsReachedQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.reached === true) {
            writer.uint32(8).bool(message.reached);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIsReachedQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.reached = reader.bool();
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
        return { reached: isSet(object.reached) ? Boolean(object.reached) : false };
    },
    toJSON(message) {
        const obj = {};
        message.reached !== undefined && (obj.reached = message.reached);
        return obj;
    },
    create(base) {
        return exports.IsReachedQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIsReachedQuery();
        message.reached = object.reached ?? false;
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
