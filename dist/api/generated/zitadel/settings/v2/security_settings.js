// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/settings/v2/security_settings.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export const protobufPackage = "zitadel.settings.v2";
function createBaseSecuritySettings() {
    return { embeddedIframe: undefined, enableImpersonation: false };
}
export const SecuritySettings = {
    encode(message, writer = new BinaryWriter()) {
        if (message.embeddedIframe !== undefined) {
            EmbeddedIframeSettings.encode(message.embeddedIframe, writer.uint32(10).fork()).join();
        }
        if (message.enableImpersonation !== false) {
            writer.uint32(16).bool(message.enableImpersonation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecuritySettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.embeddedIframe = EmbeddedIframeSettings.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.enableImpersonation = reader.bool();
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
            embeddedIframe: isSet(object.embeddedIframe) ? EmbeddedIframeSettings.fromJSON(object.embeddedIframe) : undefined,
            enableImpersonation: isSet(object.enableImpersonation) ? globalThis.Boolean(object.enableImpersonation) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.embeddedIframe !== undefined) {
            obj.embeddedIframe = EmbeddedIframeSettings.toJSON(message.embeddedIframe);
        }
        if (message.enableImpersonation !== false) {
            obj.enableImpersonation = message.enableImpersonation;
        }
        return obj;
    },
    create(base) {
        return SecuritySettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecuritySettings();
        message.embeddedIframe = (object.embeddedIframe !== undefined && object.embeddedIframe !== null)
            ? EmbeddedIframeSettings.fromPartial(object.embeddedIframe)
            : undefined;
        message.enableImpersonation = object.enableImpersonation ?? false;
        return message;
    },
};
function createBaseEmbeddedIframeSettings() {
    return { enabled: false, allowedOrigins: [] };
}
export const EmbeddedIframeSettings = {
    encode(message, writer = new BinaryWriter()) {
        if (message.enabled !== false) {
            writer.uint32(8).bool(message.enabled);
        }
        for (const v of message.allowedOrigins) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmbeddedIframeSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.enabled = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.allowedOrigins.push(reader.string());
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
            enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
            allowedOrigins: globalThis.Array.isArray(object?.allowedOrigins)
                ? object.allowedOrigins.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.enabled !== false) {
            obj.enabled = message.enabled;
        }
        if (message.allowedOrigins?.length) {
            obj.allowedOrigins = message.allowedOrigins;
        }
        return obj;
    },
    create(base) {
        return EmbeddedIframeSettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEmbeddedIframeSettings();
        message.enabled = object.enabled ?? false;
        message.allowedOrigins = object.allowedOrigins?.map((e) => e) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
