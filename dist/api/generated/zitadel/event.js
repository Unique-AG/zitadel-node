// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/event.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Struct } from "../google/protobuf/struct.js";
import { Timestamp } from "../google/protobuf/timestamp.js";
import { LocalizedMessage } from "./message.js";
export const protobufPackage = "zitadel.event.v1";
function createBaseEvent() {
    return {
        editor: undefined,
        aggregate: undefined,
        sequence: Long.UZERO,
        creationDate: undefined,
        payload: undefined,
        type: undefined,
    };
}
export const Event = {
    encode(message, writer = new BinaryWriter()) {
        if (message.editor !== undefined) {
            Editor.encode(message.editor, writer.uint32(10).fork()).join();
        }
        if (message.aggregate !== undefined) {
            Aggregate.encode(message.aggregate, writer.uint32(18).fork()).join();
        }
        if (!message.sequence.equals(Long.UZERO)) {
            writer.uint32(24).uint64(message.sequence.toString());
        }
        if (message.creationDate !== undefined) {
            Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(34).fork()).join();
        }
        if (message.payload !== undefined) {
            Struct.encode(Struct.wrap(message.payload), writer.uint32(42).fork()).join();
        }
        if (message.type !== undefined) {
            EventType.encode(message.type, writer.uint32(50).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.editor = Editor.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.aggregate = Aggregate.decode(reader, reader.uint32());
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.sequence = Long.fromString(reader.uint64().toString(), true);
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.creationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.payload = Struct.unwrap(Struct.decode(reader, reader.uint32()));
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.type = EventType.decode(reader, reader.uint32());
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
            editor: isSet(object.editor) ? Editor.fromJSON(object.editor) : undefined,
            aggregate: isSet(object.aggregate) ? Aggregate.fromJSON(object.aggregate) : undefined,
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            creationDate: isSet(object.creationDate) ? fromJsonTimestamp(object.creationDate) : undefined,
            payload: isObject(object.payload) ? object.payload : undefined,
            type: isSet(object.type) ? EventType.fromJSON(object.type) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.editor !== undefined) {
            obj.editor = Editor.toJSON(message.editor);
        }
        if (message.aggregate !== undefined) {
            obj.aggregate = Aggregate.toJSON(message.aggregate);
        }
        if (!message.sequence.equals(Long.UZERO)) {
            obj.sequence = (message.sequence || Long.UZERO).toString();
        }
        if (message.creationDate !== undefined) {
            obj.creationDate = message.creationDate.toISOString();
        }
        if (message.payload !== undefined) {
            obj.payload = message.payload;
        }
        if (message.type !== undefined) {
            obj.type = EventType.toJSON(message.type);
        }
        return obj;
    },
    create(base) {
        return Event.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.editor = (object.editor !== undefined && object.editor !== null)
            ? Editor.fromPartial(object.editor)
            : undefined;
        message.aggregate = (object.aggregate !== undefined && object.aggregate !== null)
            ? Aggregate.fromPartial(object.aggregate)
            : undefined;
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? Long.fromValue(object.sequence)
            : Long.UZERO;
        message.creationDate = object.creationDate ?? undefined;
        message.payload = object.payload ?? undefined;
        message.type = (object.type !== undefined && object.type !== null) ? EventType.fromPartial(object.type) : undefined;
        return message;
    },
};
function createBaseEditor() {
    return { userId: "", displayName: "", service: "" };
}
export const Editor = {
    encode(message, writer = new BinaryWriter()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEditor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.service = reader.string();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            service: isSet(object.service) ? globalThis.String(object.service) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.service !== "") {
            obj.service = message.service;
        }
        return obj;
    },
    create(base) {
        return Editor.fromPartial(base ?? {});
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
export const Aggregate = {
    encode(message, writer = new BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== undefined) {
            AggregateType.encode(message.type, writer.uint32(18).fork()).join();
        }
        if (message.resourceOwner !== "") {
            writer.uint32(26).string(message.resourceOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.type = AggregateType.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            type: isSet(object.type) ? AggregateType.fromJSON(object.type) : undefined,
            resourceOwner: isSet(object.resourceOwner) ? globalThis.String(object.resourceOwner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.type !== undefined) {
            obj.type = AggregateType.toJSON(message.type);
        }
        if (message.resourceOwner !== "") {
            obj.resourceOwner = message.resourceOwner;
        }
        return obj;
    },
    create(base) {
        return Aggregate.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAggregate();
        message.id = object.id ?? "";
        message.type = (object.type !== undefined && object.type !== null)
            ? AggregateType.fromPartial(object.type)
            : undefined;
        message.resourceOwner = object.resourceOwner ?? "";
        return message;
    },
};
function createBaseEventType() {
    return { type: "", localized: undefined };
}
export const EventType = {
    encode(message, writer = new BinaryWriter()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.localized !== undefined) {
            LocalizedMessage.encode(message.localized, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.localized = LocalizedMessage.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            localized: isSet(object.localized) ? LocalizedMessage.fromJSON(object.localized) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.localized !== undefined) {
            obj.localized = LocalizedMessage.toJSON(message.localized);
        }
        return obj;
    },
    create(base) {
        return EventType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventType();
        message.type = object.type ?? "";
        message.localized = (object.localized !== undefined && object.localized !== null)
            ? LocalizedMessage.fromPartial(object.localized)
            : undefined;
        return message;
    },
};
function createBaseAggregateType() {
    return { type: "", localized: undefined };
}
export const AggregateType = {
    encode(message, writer = new BinaryWriter()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.localized !== undefined) {
            LocalizedMessage.encode(message.localized, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.localized = LocalizedMessage.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            localized: isSet(object.localized) ? LocalizedMessage.fromJSON(object.localized) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.localized !== undefined) {
            obj.localized = LocalizedMessage.toJSON(message.localized);
        }
        return obj;
    },
    create(base) {
        return AggregateType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAggregateType();
        message.type = object.type ?? "";
        message.localized = (object.localized !== undefined && object.localized !== null)
            ? LocalizedMessage.fromPartial(object.localized)
            : undefined;
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
