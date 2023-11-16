"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeQuery = exports.Change = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../google/protobuf/timestamp");
const message_1 = require("./message");
exports.protobufPackage = "zitadel.change.v1";
function createBaseChange() {
    return {
        changeDate: undefined,
        eventType: undefined,
        sequence: long_1.default.UZERO,
        editorId: "",
        editorDisplayName: "",
        resourceOwnerId: "",
        editorPreferredLoginName: "",
        editorAvatarUrl: "",
    };
}
exports.Change = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.changeDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(10).fork()).ldelim();
        }
        if (message.eventType !== undefined) {
            message_1.LocalizedMessage.encode(message.eventType, writer.uint32(18).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        if (message.editorId !== "") {
            writer.uint32(34).string(message.editorId);
        }
        if (message.editorDisplayName !== "") {
            writer.uint32(42).string(message.editorDisplayName);
        }
        if (message.resourceOwnerId !== "") {
            writer.uint32(50).string(message.resourceOwnerId);
        }
        if (message.editorPreferredLoginName !== "") {
            writer.uint32(58).string(message.editorPreferredLoginName);
        }
        if (message.editorAvatarUrl !== "") {
            writer.uint32(66).string(message.editorAvatarUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.changeDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.eventType = message_1.LocalizedMessage.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sequence = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.editorId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.editorDisplayName = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.resourceOwnerId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.editorPreferredLoginName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.editorAvatarUrl = reader.string();
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
            changeDate: isSet(object.changeDate) ? fromJsonTimestamp(object.changeDate) : undefined,
            eventType: isSet(object.eventType) ? message_1.LocalizedMessage.fromJSON(object.eventType) : undefined,
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            editorId: isSet(object.editorId) ? String(object.editorId) : "",
            editorDisplayName: isSet(object.editorDisplayName) ? String(object.editorDisplayName) : "",
            resourceOwnerId: isSet(object.resourceOwnerId) ? String(object.resourceOwnerId) : "",
            editorPreferredLoginName: isSet(object.editorPreferredLoginName) ? String(object.editorPreferredLoginName) : "",
            editorAvatarUrl: isSet(object.editorAvatarUrl) ? String(object.editorAvatarUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.changeDate !== undefined && (obj.changeDate = message.changeDate.toISOString());
        message.eventType !== undefined &&
            (obj.eventType = message.eventType ? message_1.LocalizedMessage.toJSON(message.eventType) : undefined);
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.editorId !== undefined && (obj.editorId = message.editorId);
        message.editorDisplayName !== undefined && (obj.editorDisplayName = message.editorDisplayName);
        message.resourceOwnerId !== undefined && (obj.resourceOwnerId = message.resourceOwnerId);
        message.editorPreferredLoginName !== undefined && (obj.editorPreferredLoginName = message.editorPreferredLoginName);
        message.editorAvatarUrl !== undefined && (obj.editorAvatarUrl = message.editorAvatarUrl);
        return obj;
    },
    create(base) {
        return exports.Change.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseChange();
        message.changeDate = object.changeDate ?? undefined;
        message.eventType = (object.eventType !== undefined && object.eventType !== null)
            ? message_1.LocalizedMessage.fromPartial(object.eventType)
            : undefined;
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? long_1.default.fromValue(object.sequence)
            : long_1.default.UZERO;
        message.editorId = object.editorId ?? "";
        message.editorDisplayName = object.editorDisplayName ?? "";
        message.resourceOwnerId = object.resourceOwnerId ?? "";
        message.editorPreferredLoginName = object.editorPreferredLoginName ?? "";
        message.editorAvatarUrl = object.editorAvatarUrl ?? "";
        return message;
    },
};
function createBaseChangeQuery() {
    return { sequence: long_1.default.UZERO, limit: 0, asc: false };
}
exports.ChangeQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
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
        const message = createBaseChangeQuery();
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
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            asc: isSet(object.asc) ? Boolean(object.asc) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.asc !== undefined && (obj.asc = message.asc);
        return obj;
    },
    create(base) {
        return exports.ChangeQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseChangeQuery();
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? long_1.default.fromValue(object.sequence)
            : long_1.default.UZERO;
        message.limit = object.limit ?? 0;
        message.asc = object.asc ?? false;
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
