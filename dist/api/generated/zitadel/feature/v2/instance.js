// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/feature/v2/instance.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Details } from "../../object/v2/object.js";
import { FeatureFlag, ImprovedPerformanceFeatureFlag, improvedPerformanceFromJSON, improvedPerformanceToJSON, } from "./feature.js";
export const protobufPackage = "zitadel.feature.v2";
function createBaseSetInstanceFeaturesRequest() {
    return {
        loginDefaultOrg: undefined,
        oidcTriggerIntrospectionProjections: undefined,
        oidcLegacyIntrospection: undefined,
        userSchema: undefined,
        oidcTokenExchange: undefined,
        actions: undefined,
        improvedPerformance: [],
        webKey: undefined,
        debugOidcParentError: undefined,
        oidcSingleV1SessionTermination: undefined,
        disableUserTokenEvent: undefined,
        enableBackChannelLogout: undefined,
    };
}
export const SetInstanceFeaturesRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.loginDefaultOrg !== undefined) {
            writer.uint32(8).bool(message.loginDefaultOrg);
        }
        if (message.oidcTriggerIntrospectionProjections !== undefined) {
            writer.uint32(16).bool(message.oidcTriggerIntrospectionProjections);
        }
        if (message.oidcLegacyIntrospection !== undefined) {
            writer.uint32(24).bool(message.oidcLegacyIntrospection);
        }
        if (message.userSchema !== undefined) {
            writer.uint32(32).bool(message.userSchema);
        }
        if (message.oidcTokenExchange !== undefined) {
            writer.uint32(40).bool(message.oidcTokenExchange);
        }
        if (message.actions !== undefined) {
            writer.uint32(48).bool(message.actions);
        }
        writer.uint32(58).fork();
        for (const v of message.improvedPerformance) {
            writer.int32(v);
        }
        writer.join();
        if (message.webKey !== undefined) {
            writer.uint32(64).bool(message.webKey);
        }
        if (message.debugOidcParentError !== undefined) {
            writer.uint32(72).bool(message.debugOidcParentError);
        }
        if (message.oidcSingleV1SessionTermination !== undefined) {
            writer.uint32(80).bool(message.oidcSingleV1SessionTermination);
        }
        if (message.disableUserTokenEvent !== undefined) {
            writer.uint32(88).bool(message.disableUserTokenEvent);
        }
        if (message.enableBackChannelLogout !== undefined) {
            writer.uint32(96).bool(message.enableBackChannelLogout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetInstanceFeaturesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.loginDefaultOrg = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.oidcTriggerIntrospectionProjections = reader.bool();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.oidcLegacyIntrospection = reader.bool();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.userSchema = reader.bool();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.oidcTokenExchange = reader.bool();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.actions = reader.bool();
                    continue;
                }
                case 7: {
                    if (tag === 56) {
                        message.improvedPerformance.push(reader.int32());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.improvedPerformance.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                }
                case 8: {
                    if (tag !== 64) {
                        break;
                    }
                    message.webKey = reader.bool();
                    continue;
                }
                case 9: {
                    if (tag !== 72) {
                        break;
                    }
                    message.debugOidcParentError = reader.bool();
                    continue;
                }
                case 10: {
                    if (tag !== 80) {
                        break;
                    }
                    message.oidcSingleV1SessionTermination = reader.bool();
                    continue;
                }
                case 11: {
                    if (tag !== 88) {
                        break;
                    }
                    message.disableUserTokenEvent = reader.bool();
                    continue;
                }
                case 12: {
                    if (tag !== 96) {
                        break;
                    }
                    message.enableBackChannelLogout = reader.bool();
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
            loginDefaultOrg: isSet(object.loginDefaultOrg) ? globalThis.Boolean(object.loginDefaultOrg) : undefined,
            oidcTriggerIntrospectionProjections: isSet(object.oidcTriggerIntrospectionProjections)
                ? globalThis.Boolean(object.oidcTriggerIntrospectionProjections)
                : undefined,
            oidcLegacyIntrospection: isSet(object.oidcLegacyIntrospection)
                ? globalThis.Boolean(object.oidcLegacyIntrospection)
                : undefined,
            userSchema: isSet(object.userSchema) ? globalThis.Boolean(object.userSchema) : undefined,
            oidcTokenExchange: isSet(object.oidcTokenExchange) ? globalThis.Boolean(object.oidcTokenExchange) : undefined,
            actions: isSet(object.actions) ? globalThis.Boolean(object.actions) : undefined,
            improvedPerformance: globalThis.Array.isArray(object?.improvedPerformance)
                ? object.improvedPerformance.map((e) => improvedPerformanceFromJSON(e))
                : [],
            webKey: isSet(object.webKey) ? globalThis.Boolean(object.webKey) : undefined,
            debugOidcParentError: isSet(object.debugOidcParentError)
                ? globalThis.Boolean(object.debugOidcParentError)
                : undefined,
            oidcSingleV1SessionTermination: isSet(object.oidcSingleV1SessionTermination)
                ? globalThis.Boolean(object.oidcSingleV1SessionTermination)
                : undefined,
            disableUserTokenEvent: isSet(object.disableUserTokenEvent)
                ? globalThis.Boolean(object.disableUserTokenEvent)
                : undefined,
            enableBackChannelLogout: isSet(object.enableBackChannelLogout)
                ? globalThis.Boolean(object.enableBackChannelLogout)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.loginDefaultOrg !== undefined) {
            obj.loginDefaultOrg = message.loginDefaultOrg;
        }
        if (message.oidcTriggerIntrospectionProjections !== undefined) {
            obj.oidcTriggerIntrospectionProjections = message.oidcTriggerIntrospectionProjections;
        }
        if (message.oidcLegacyIntrospection !== undefined) {
            obj.oidcLegacyIntrospection = message.oidcLegacyIntrospection;
        }
        if (message.userSchema !== undefined) {
            obj.userSchema = message.userSchema;
        }
        if (message.oidcTokenExchange !== undefined) {
            obj.oidcTokenExchange = message.oidcTokenExchange;
        }
        if (message.actions !== undefined) {
            obj.actions = message.actions;
        }
        if (message.improvedPerformance?.length) {
            obj.improvedPerformance = message.improvedPerformance.map((e) => improvedPerformanceToJSON(e));
        }
        if (message.webKey !== undefined) {
            obj.webKey = message.webKey;
        }
        if (message.debugOidcParentError !== undefined) {
            obj.debugOidcParentError = message.debugOidcParentError;
        }
        if (message.oidcSingleV1SessionTermination !== undefined) {
            obj.oidcSingleV1SessionTermination = message.oidcSingleV1SessionTermination;
        }
        if (message.disableUserTokenEvent !== undefined) {
            obj.disableUserTokenEvent = message.disableUserTokenEvent;
        }
        if (message.enableBackChannelLogout !== undefined) {
            obj.enableBackChannelLogout = message.enableBackChannelLogout;
        }
        return obj;
    },
    create(base) {
        return SetInstanceFeaturesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetInstanceFeaturesRequest();
        message.loginDefaultOrg = object.loginDefaultOrg ?? undefined;
        message.oidcTriggerIntrospectionProjections = object.oidcTriggerIntrospectionProjections ?? undefined;
        message.oidcLegacyIntrospection = object.oidcLegacyIntrospection ?? undefined;
        message.userSchema = object.userSchema ?? undefined;
        message.oidcTokenExchange = object.oidcTokenExchange ?? undefined;
        message.actions = object.actions ?? undefined;
        message.improvedPerformance = object.improvedPerformance?.map((e) => e) || [];
        message.webKey = object.webKey ?? undefined;
        message.debugOidcParentError = object.debugOidcParentError ?? undefined;
        message.oidcSingleV1SessionTermination = object.oidcSingleV1SessionTermination ?? undefined;
        message.disableUserTokenEvent = object.disableUserTokenEvent ?? undefined;
        message.enableBackChannelLogout = object.enableBackChannelLogout ?? undefined;
        return message;
    },
};
function createBaseSetInstanceFeaturesResponse() {
    return { details: undefined };
}
export const SetInstanceFeaturesResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.details !== undefined) {
            Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetInstanceFeaturesResponse();
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return SetInstanceFeaturesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetInstanceFeaturesResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseResetInstanceFeaturesRequest() {
    return {};
}
export const ResetInstanceFeaturesRequest = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResetInstanceFeaturesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
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
        return ResetInstanceFeaturesRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseResetInstanceFeaturesRequest();
        return message;
    },
};
function createBaseResetInstanceFeaturesResponse() {
    return { details: undefined };
}
export const ResetInstanceFeaturesResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.details !== undefined) {
            Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResetInstanceFeaturesResponse();
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = Details.toJSON(message.details);
        }
        return obj;
    },
    create(base) {
        return ResetInstanceFeaturesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResetInstanceFeaturesResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseGetInstanceFeaturesRequest() {
    return { inheritance: false };
}
export const GetInstanceFeaturesRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.inheritance !== false) {
            writer.uint32(8).bool(message.inheritance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetInstanceFeaturesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.inheritance = reader.bool();
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
        return { inheritance: isSet(object.inheritance) ? globalThis.Boolean(object.inheritance) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.inheritance !== false) {
            obj.inheritance = message.inheritance;
        }
        return obj;
    },
    create(base) {
        return GetInstanceFeaturesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetInstanceFeaturesRequest();
        message.inheritance = object.inheritance ?? false;
        return message;
    },
};
function createBaseGetInstanceFeaturesResponse() {
    return {
        details: undefined,
        loginDefaultOrg: undefined,
        oidcTriggerIntrospectionProjections: undefined,
        oidcLegacyIntrospection: undefined,
        userSchema: undefined,
        oidcTokenExchange: undefined,
        actions: undefined,
        improvedPerformance: undefined,
        webKey: undefined,
        debugOidcParentError: undefined,
        oidcSingleV1SessionTermination: undefined,
        disableUserTokenEvent: undefined,
        enableBackChannelLogout: undefined,
    };
}
export const GetInstanceFeaturesResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.details !== undefined) {
            Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.loginDefaultOrg !== undefined) {
            FeatureFlag.encode(message.loginDefaultOrg, writer.uint32(18).fork()).join();
        }
        if (message.oidcTriggerIntrospectionProjections !== undefined) {
            FeatureFlag.encode(message.oidcTriggerIntrospectionProjections, writer.uint32(26).fork()).join();
        }
        if (message.oidcLegacyIntrospection !== undefined) {
            FeatureFlag.encode(message.oidcLegacyIntrospection, writer.uint32(34).fork()).join();
        }
        if (message.userSchema !== undefined) {
            FeatureFlag.encode(message.userSchema, writer.uint32(42).fork()).join();
        }
        if (message.oidcTokenExchange !== undefined) {
            FeatureFlag.encode(message.oidcTokenExchange, writer.uint32(50).fork()).join();
        }
        if (message.actions !== undefined) {
            FeatureFlag.encode(message.actions, writer.uint32(58).fork()).join();
        }
        if (message.improvedPerformance !== undefined) {
            ImprovedPerformanceFeatureFlag.encode(message.improvedPerformance, writer.uint32(66).fork()).join();
        }
        if (message.webKey !== undefined) {
            FeatureFlag.encode(message.webKey, writer.uint32(74).fork()).join();
        }
        if (message.debugOidcParentError !== undefined) {
            FeatureFlag.encode(message.debugOidcParentError, writer.uint32(82).fork()).join();
        }
        if (message.oidcSingleV1SessionTermination !== undefined) {
            FeatureFlag.encode(message.oidcSingleV1SessionTermination, writer.uint32(90).fork()).join();
        }
        if (message.disableUserTokenEvent !== undefined) {
            FeatureFlag.encode(message.disableUserTokenEvent, writer.uint32(98).fork()).join();
        }
        if (message.enableBackChannelLogout !== undefined) {
            FeatureFlag.encode(message.enableBackChannelLogout, writer.uint32(106).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetInstanceFeaturesResponse();
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
                    message.loginDefaultOrg = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.oidcTriggerIntrospectionProjections = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.oidcLegacyIntrospection = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.userSchema = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.oidcTokenExchange = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.actions = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.improvedPerformance = ImprovedPerformanceFeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.webKey = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.debugOidcParentError = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 11: {
                    if (tag !== 90) {
                        break;
                    }
                    message.oidcSingleV1SessionTermination = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 12: {
                    if (tag !== 98) {
                        break;
                    }
                    message.disableUserTokenEvent = FeatureFlag.decode(reader, reader.uint32());
                    continue;
                }
                case 13: {
                    if (tag !== 106) {
                        break;
                    }
                    message.enableBackChannelLogout = FeatureFlag.decode(reader, reader.uint32());
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
            loginDefaultOrg: isSet(object.loginDefaultOrg) ? FeatureFlag.fromJSON(object.loginDefaultOrg) : undefined,
            oidcTriggerIntrospectionProjections: isSet(object.oidcTriggerIntrospectionProjections)
                ? FeatureFlag.fromJSON(object.oidcTriggerIntrospectionProjections)
                : undefined,
            oidcLegacyIntrospection: isSet(object.oidcLegacyIntrospection)
                ? FeatureFlag.fromJSON(object.oidcLegacyIntrospection)
                : undefined,
            userSchema: isSet(object.userSchema) ? FeatureFlag.fromJSON(object.userSchema) : undefined,
            oidcTokenExchange: isSet(object.oidcTokenExchange) ? FeatureFlag.fromJSON(object.oidcTokenExchange) : undefined,
            actions: isSet(object.actions) ? FeatureFlag.fromJSON(object.actions) : undefined,
            improvedPerformance: isSet(object.improvedPerformance)
                ? ImprovedPerformanceFeatureFlag.fromJSON(object.improvedPerformance)
                : undefined,
            webKey: isSet(object.webKey) ? FeatureFlag.fromJSON(object.webKey) : undefined,
            debugOidcParentError: isSet(object.debugOidcParentError)
                ? FeatureFlag.fromJSON(object.debugOidcParentError)
                : undefined,
            oidcSingleV1SessionTermination: isSet(object.oidcSingleV1SessionTermination)
                ? FeatureFlag.fromJSON(object.oidcSingleV1SessionTermination)
                : undefined,
            disableUserTokenEvent: isSet(object.disableUserTokenEvent)
                ? FeatureFlag.fromJSON(object.disableUserTokenEvent)
                : undefined,
            enableBackChannelLogout: isSet(object.enableBackChannelLogout)
                ? FeatureFlag.fromJSON(object.enableBackChannelLogout)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = Details.toJSON(message.details);
        }
        if (message.loginDefaultOrg !== undefined) {
            obj.loginDefaultOrg = FeatureFlag.toJSON(message.loginDefaultOrg);
        }
        if (message.oidcTriggerIntrospectionProjections !== undefined) {
            obj.oidcTriggerIntrospectionProjections = FeatureFlag.toJSON(message.oidcTriggerIntrospectionProjections);
        }
        if (message.oidcLegacyIntrospection !== undefined) {
            obj.oidcLegacyIntrospection = FeatureFlag.toJSON(message.oidcLegacyIntrospection);
        }
        if (message.userSchema !== undefined) {
            obj.userSchema = FeatureFlag.toJSON(message.userSchema);
        }
        if (message.oidcTokenExchange !== undefined) {
            obj.oidcTokenExchange = FeatureFlag.toJSON(message.oidcTokenExchange);
        }
        if (message.actions !== undefined) {
            obj.actions = FeatureFlag.toJSON(message.actions);
        }
        if (message.improvedPerformance !== undefined) {
            obj.improvedPerformance = ImprovedPerformanceFeatureFlag.toJSON(message.improvedPerformance);
        }
        if (message.webKey !== undefined) {
            obj.webKey = FeatureFlag.toJSON(message.webKey);
        }
        if (message.debugOidcParentError !== undefined) {
            obj.debugOidcParentError = FeatureFlag.toJSON(message.debugOidcParentError);
        }
        if (message.oidcSingleV1SessionTermination !== undefined) {
            obj.oidcSingleV1SessionTermination = FeatureFlag.toJSON(message.oidcSingleV1SessionTermination);
        }
        if (message.disableUserTokenEvent !== undefined) {
            obj.disableUserTokenEvent = FeatureFlag.toJSON(message.disableUserTokenEvent);
        }
        if (message.enableBackChannelLogout !== undefined) {
            obj.enableBackChannelLogout = FeatureFlag.toJSON(message.enableBackChannelLogout);
        }
        return obj;
    },
    create(base) {
        return GetInstanceFeaturesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetInstanceFeaturesResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? Details.fromPartial(object.details)
            : undefined;
        message.loginDefaultOrg = (object.loginDefaultOrg !== undefined && object.loginDefaultOrg !== null)
            ? FeatureFlag.fromPartial(object.loginDefaultOrg)
            : undefined;
        message.oidcTriggerIntrospectionProjections =
            (object.oidcTriggerIntrospectionProjections !== undefined && object.oidcTriggerIntrospectionProjections !== null)
                ? FeatureFlag.fromPartial(object.oidcTriggerIntrospectionProjections)
                : undefined;
        message.oidcLegacyIntrospection =
            (object.oidcLegacyIntrospection !== undefined && object.oidcLegacyIntrospection !== null)
                ? FeatureFlag.fromPartial(object.oidcLegacyIntrospection)
                : undefined;
        message.userSchema = (object.userSchema !== undefined && object.userSchema !== null)
            ? FeatureFlag.fromPartial(object.userSchema)
            : undefined;
        message.oidcTokenExchange = (object.oidcTokenExchange !== undefined && object.oidcTokenExchange !== null)
            ? FeatureFlag.fromPartial(object.oidcTokenExchange)
            : undefined;
        message.actions = (object.actions !== undefined && object.actions !== null)
            ? FeatureFlag.fromPartial(object.actions)
            : undefined;
        message.improvedPerformance = (object.improvedPerformance !== undefined && object.improvedPerformance !== null)
            ? ImprovedPerformanceFeatureFlag.fromPartial(object.improvedPerformance)
            : undefined;
        message.webKey = (object.webKey !== undefined && object.webKey !== null)
            ? FeatureFlag.fromPartial(object.webKey)
            : undefined;
        message.debugOidcParentError = (object.debugOidcParentError !== undefined && object.debugOidcParentError !== null)
            ? FeatureFlag.fromPartial(object.debugOidcParentError)
            : undefined;
        message.oidcSingleV1SessionTermination =
            (object.oidcSingleV1SessionTermination !== undefined && object.oidcSingleV1SessionTermination !== null)
                ? FeatureFlag.fromPartial(object.oidcSingleV1SessionTermination)
                : undefined;
        message.disableUserTokenEvent =
            (object.disableUserTokenEvent !== undefined && object.disableUserTokenEvent !== null)
                ? FeatureFlag.fromPartial(object.disableUserTokenEvent)
                : undefined;
        message.enableBackChannelLogout =
            (object.enableBackChannelLogout !== undefined && object.enableBackChannelLogout !== null)
                ? FeatureFlag.fromPartial(object.enableBackChannelLogout)
                : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
