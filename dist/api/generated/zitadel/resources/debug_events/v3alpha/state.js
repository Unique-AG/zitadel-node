// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/resources/debug_events/v3alpha/state.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Details } from "../../object/v3alpha/object.js";
export const protobufPackage = "zitadel.resources.debug_events.v3alpha";
function createBaseState() {
    return { details: undefined, blob: "" };
}
export const State = {
    encode(message, writer = new BinaryWriter()) {
        if (message.details !== undefined) {
            Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.blob !== "") {
            writer.uint32(18).string(message.blob);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.details = Details.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.blob = reader.string();
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
            details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
            blob: isSet(object.blob) ? globalThis.String(object.blob) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = Details.toJSON(message.details);
        }
        if (message.blob !== "") {
            obj.blob = message.blob;
        }
        return obj;
    },
    create(base) {
        return State.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseState();
        message.details = (object.details !== undefined && object.details !== null)
            ? Details.fromPartial(object.details)
            : undefined;
        message.blob = object.blob ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}