"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateType = exports.EventType = exports.Aggregate = exports.Editor = exports.Event = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("../google/protobuf/struct");
const timestamp_1 = require("../google/protobuf/timestamp");
const message_1 = require("./message");
exports.protobufPackage = "zitadel.event.v1";
function createBaseEvent() {
    return {
        editor: undefined,
        aggregate: undefined,
        sequence: long_1.default.UZERO,
        creationDate: undefined,
        payload: undefined,
        type: undefined,
    };
}
exports.Event = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.editor !== undefined) {
            exports.Editor.encode(message.editor, writer.uint32(10).fork()).ldelim();
        }
        if (message.aggregate !== undefined) {
            exports.Aggregate.encode(message.aggregate, writer.uint32(18).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        if (message.creationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(34).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.payload), writer.uint32(42).fork()).ldelim();
        }
        if (message.type !== undefined) {
            exports.EventType.encode(message.type, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.editor = exports.Editor.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.aggregate = exports.Aggregate.decode(reader, reader.uint32());
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
                    message.creationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.payload = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.type = exports.EventType.decode(reader, reader.uint32());
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
            editor: isSet(object.editor) ? exports.Editor.fromJSON(object.editor) : undefined,
            aggregate: isSet(object.aggregate) ? exports.Aggregate.fromJSON(object.aggregate) : undefined,
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            creationDate: isSet(object.creationDate) ? fromJsonTimestamp(object.creationDate) : undefined,
            payload: isObject(object.payload) ? object.payload : undefined,
            type: isSet(object.type) ? exports.EventType.fromJSON(object.type) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.editor !== undefined && (obj.editor = message.editor ? exports.Editor.toJSON(message.editor) : undefined);
        message.aggregate !== undefined &&
            (obj.aggregate = message.aggregate ? exports.Aggregate.toJSON(message.aggregate) : undefined);
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.creationDate !== undefined && (obj.creationDate = message.creationDate.toISOString());
        message.payload !== undefined && (obj.payload = message.payload);
        message.type !== undefined && (obj.type = message.type ? exports.EventType.toJSON(message.type) : undefined);
        return obj;
    },
    create(base) {
        return exports.Event.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.editor = (object.editor !== undefined && object.editor !== null)
            ? exports.Editor.fromPartial(object.editor)
            : undefined;
        message.aggregate = (object.aggregate !== undefined && object.aggregate !== null)
            ? exports.Aggregate.fromPartial(object.aggregate)
            : undefined;
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? long_1.default.fromValue(object.sequence)
            : long_1.default.UZERO;
        message.creationDate = object.creationDate ?? undefined;
        message.payload = object.payload ?? undefined;
        message.type = (object.type !== undefined && object.type !== null) ? exports.EventType.fromPartial(object.type) : undefined;
        return message;
    },
};
function createBaseEditor() {
    return { userId: "", displayName: "", service: "" };
}
exports.Editor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.displayName !== "") {
            writer.uint32(18).string(message.displayName);
        }
        if (message.service !== "") {
            writer.uint32(26).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEditor();
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
                    message.displayName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.service = reader.string();
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
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            service: isSet(object.service) ? String(object.service) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create(base) {
        return exports.Editor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEditor();
        message.userId = object.userId ?? "";
        message.displayName = object.displayName ?? "";
        message.service = object.service ?? "";
        return message;
    },
};
function createBaseAggregate() {
    return { id: "", type: undefined, resourceOwner: "" };
}
exports.Aggregate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== undefined) {
            exports.AggregateType.encode(message.type, writer.uint32(18).fork()).ldelim();
        }
        if (message.resourceOwner !== "") {
            writer.uint32(26).string(message.resourceOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregate();
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
                    message.type = exports.AggregateType.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
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
            id: isSet(object.id) ? String(object.id) : "",
            type: isSet(object.type) ? exports.AggregateType.fromJSON(object.type) : undefined,
            resourceOwner: isSet(object.resourceOwner) ? String(object.resourceOwner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type ? exports.AggregateType.toJSON(message.type) : undefined);
        message.resourceOwner !== undefined && (obj.resourceOwner = message.resourceOwner);
        return obj;
    },
    create(base) {
        return exports.Aggregate.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAggregate();
        message.id = object.id ?? "";
        message.type = (object.type !== undefined && object.type !== null)
            ? exports.AggregateType.fromPartial(object.type)
            : undefined;
        message.resourceOwner = object.resourceOwner ?? "";
        return message;
    },
};
function createBaseEventType() {
    return { type: "", localized: undefined };
}
exports.EventType = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.localized !== undefined) {
            message_1.LocalizedMessage.encode(message.localized, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.localized = message_1.LocalizedMessage.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? String(object.type) : "",
            localized: isSet(object.localized) ? message_1.LocalizedMessage.fromJSON(object.localized) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.localized !== undefined &&
            (obj.localized = message.localized ? message_1.LocalizedMessage.toJSON(message.localized) : undefined);
        return obj;
    },
    create(base) {
        return exports.EventType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventType();
        message.type = object.type ?? "";
        message.localized = (object.localized !== undefined && object.localized !== null)
            ? message_1.LocalizedMessage.fromPartial(object.localized)
            : undefined;
        return message;
    },
};
function createBaseAggregateType() {
    return { type: "", localized: undefined };
}
exports.AggregateType = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.localized !== undefined) {
            message_1.LocalizedMessage.encode(message.localized, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.localized = message_1.LocalizedMessage.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? String(object.type) : "",
            localized: isSet(object.localized) ? message_1.LocalizedMessage.fromJSON(object.localized) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.localized !== undefined &&
            (obj.localized = message.localized ? message_1.LocalizedMessage.toJSON(message.localized) : undefined);
        return obj;
    },
    create(base) {
        return exports.AggregateType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAggregateType();
        message.type = object.type ?? "";
        message.localized = (object.localized !== undefined && object.localized !== null)
            ? message_1.LocalizedMessage.fromPartial(object.localized)
            : undefined;
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
