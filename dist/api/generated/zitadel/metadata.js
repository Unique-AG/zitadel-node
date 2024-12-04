// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/metadata.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectDetails, textQueryMethodFromJSON, textQueryMethodToJSON } from "./object.js";
export const protobufPackage = "zitadel.metadata.v1";
function createBaseMetadata() {
    return { details: undefined, key: "", value: Buffer.alloc(0) };
}
export const Metadata = {
    encode(message, writer = new BinaryWriter()) {
        if (message.details !== undefined) {
            ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(26).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.details = ObjectDetails.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.value = Buffer.from(reader.bytes());
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
            details: isSet(object.details) ? ObjectDetails.fromJSON(object.details) : undefined,
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = ObjectDetails.toJSON(message.details);
        }
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value.length !== 0) {
            obj.value = base64FromBytes(message.value);
        }
        return obj;
    },
    create(base) {
        return Metadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.details = (object.details !== undefined && object.details !== null)
            ? ObjectDetails.fromPartial(object.details)
            : undefined;
        message.key = object.key ?? "";
        message.value = object.value ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseMetadataQuery() {
    return { keyQuery: undefined };
}
export const MetadataQuery = {
    encode(message, writer = new BinaryWriter()) {
        if (message.keyQuery !== undefined) {
            MetadataKeyQuery.encode(message.keyQuery, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadataQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.keyQuery = MetadataKeyQuery.decode(reader, reader.uint32());
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
        return { keyQuery: isSet(object.keyQuery) ? MetadataKeyQuery.fromJSON(object.keyQuery) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.keyQuery !== undefined) {
            obj.keyQuery = MetadataKeyQuery.toJSON(message.keyQuery);
        }
        return obj;
    },
    create(base) {
        return MetadataQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMetadataQuery();
        message.keyQuery = (object.keyQuery !== undefined && object.keyQuery !== null)
            ? MetadataKeyQuery.fromPartial(object.keyQuery)
            : undefined;
        return message;
    },
};
function createBaseMetadataKeyQuery() {
    return { key: "", method: 0 };
}
export const MetadataKeyQuery = {
    encode(message, writer = new BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadataKeyQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            method: isSet(object.method) ? textQueryMethodFromJSON(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.method !== 0) {
            obj.method = textQueryMethodToJSON(message.method);
        }
        return obj;
    },
    create(base) {
        return MetadataKeyQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMetadataKeyQuery();
        message.key = object.key ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function bytesFromBase64(b64) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}
function base64FromBytes(arr) {
    return globalThis.Buffer.from(arr).toString("base64");
}
function isSet(value) {
    return value !== null && value !== undefined;
}