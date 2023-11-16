"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampRules = exports.DurationRules = exports.AnyRules = exports.MapRules = exports.RepeatedRules = exports.MessageRules = exports.EnumRules = exports.BytesRules = exports.StringRules = exports.BoolRules = exports.SFixed64Rules = exports.SFixed32Rules = exports.Fixed64Rules = exports.Fixed32Rules = exports.SInt64Rules = exports.SInt32Rules = exports.UInt64Rules = exports.UInt32Rules = exports.Int64Rules = exports.Int32Rules = exports.DoubleRules = exports.FloatRules = exports.FieldRules = exports.knownRegexToJSON = exports.knownRegexFromJSON = exports.KnownRegex = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../google/protobuf/duration");
const timestamp_1 = require("../google/protobuf/timestamp");
exports.protobufPackage = "validate";
/** WellKnownRegex contain some well-known patterns. */
var KnownRegex;
(function (KnownRegex) {
    KnownRegex[KnownRegex["UNKNOWN"] = 0] = "UNKNOWN";
    /** HTTP_HEADER_NAME - HTTP header name as defined by RFC 7230. */
    KnownRegex[KnownRegex["HTTP_HEADER_NAME"] = 1] = "HTTP_HEADER_NAME";
    /** HTTP_HEADER_VALUE - HTTP header value as defined by RFC 7230. */
    KnownRegex[KnownRegex["HTTP_HEADER_VALUE"] = 2] = "HTTP_HEADER_VALUE";
    KnownRegex[KnownRegex["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KnownRegex || (exports.KnownRegex = KnownRegex = {}));
function knownRegexFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return KnownRegex.UNKNOWN;
        case 1:
        case "HTTP_HEADER_NAME":
            return KnownRegex.HTTP_HEADER_NAME;
        case 2:
        case "HTTP_HEADER_VALUE":
            return KnownRegex.HTTP_HEADER_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KnownRegex.UNRECOGNIZED;
    }
}
exports.knownRegexFromJSON = knownRegexFromJSON;
function knownRegexToJSON(object) {
    switch (object) {
        case KnownRegex.UNKNOWN:
            return "UNKNOWN";
        case KnownRegex.HTTP_HEADER_NAME:
            return "HTTP_HEADER_NAME";
        case KnownRegex.HTTP_HEADER_VALUE:
            return "HTTP_HEADER_VALUE";
        case KnownRegex.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.knownRegexToJSON = knownRegexToJSON;
function createBaseFieldRules() {
    return {
        message: undefined,
        float: undefined,
        double: undefined,
        int32: undefined,
        int64: undefined,
        uint32: undefined,
        uint64: undefined,
        sint32: undefined,
        sint64: undefined,
        fixed32: undefined,
        fixed64: undefined,
        sfixed32: undefined,
        sfixed64: undefined,
        bool: undefined,
        string: undefined,
        bytes: undefined,
        enum: undefined,
        repeated: undefined,
        map: undefined,
        any: undefined,
        duration: undefined,
        timestamp: undefined,
    };
}
exports.FieldRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.message !== undefined) {
            exports.MessageRules.encode(message.message, writer.uint32(138).fork()).ldelim();
        }
        if (message.float !== undefined) {
            exports.FloatRules.encode(message.float, writer.uint32(10).fork()).ldelim();
        }
        if (message.double !== undefined) {
            exports.DoubleRules.encode(message.double, writer.uint32(18).fork()).ldelim();
        }
        if (message.int32 !== undefined) {
            exports.Int32Rules.encode(message.int32, writer.uint32(26).fork()).ldelim();
        }
        if (message.int64 !== undefined) {
            exports.Int64Rules.encode(message.int64, writer.uint32(34).fork()).ldelim();
        }
        if (message.uint32 !== undefined) {
            exports.UInt32Rules.encode(message.uint32, writer.uint32(42).fork()).ldelim();
        }
        if (message.uint64 !== undefined) {
            exports.UInt64Rules.encode(message.uint64, writer.uint32(50).fork()).ldelim();
        }
        if (message.sint32 !== undefined) {
            exports.SInt32Rules.encode(message.sint32, writer.uint32(58).fork()).ldelim();
        }
        if (message.sint64 !== undefined) {
            exports.SInt64Rules.encode(message.sint64, writer.uint32(66).fork()).ldelim();
        }
        if (message.fixed32 !== undefined) {
            exports.Fixed32Rules.encode(message.fixed32, writer.uint32(74).fork()).ldelim();
        }
        if (message.fixed64 !== undefined) {
            exports.Fixed64Rules.encode(message.fixed64, writer.uint32(82).fork()).ldelim();
        }
        if (message.sfixed32 !== undefined) {
            exports.SFixed32Rules.encode(message.sfixed32, writer.uint32(90).fork()).ldelim();
        }
        if (message.sfixed64 !== undefined) {
            exports.SFixed64Rules.encode(message.sfixed64, writer.uint32(98).fork()).ldelim();
        }
        if (message.bool !== undefined) {
            exports.BoolRules.encode(message.bool, writer.uint32(106).fork()).ldelim();
        }
        if (message.string !== undefined) {
            exports.StringRules.encode(message.string, writer.uint32(114).fork()).ldelim();
        }
        if (message.bytes !== undefined) {
            exports.BytesRules.encode(message.bytes, writer.uint32(122).fork()).ldelim();
        }
        if (message.enum !== undefined) {
            exports.EnumRules.encode(message.enum, writer.uint32(130).fork()).ldelim();
        }
        if (message.repeated !== undefined) {
            exports.RepeatedRules.encode(message.repeated, writer.uint32(146).fork()).ldelim();
        }
        if (message.map !== undefined) {
            exports.MapRules.encode(message.map, writer.uint32(154).fork()).ldelim();
        }
        if (message.any !== undefined) {
            exports.AnyRules.encode(message.any, writer.uint32(162).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            exports.DurationRules.encode(message.duration, writer.uint32(170).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            exports.TimestampRules.encode(message.timestamp, writer.uint32(178).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.message = exports.MessageRules.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.float = exports.FloatRules.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.double = exports.DoubleRules.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.int32 = exports.Int32Rules.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.int64 = exports.Int64Rules.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.uint32 = exports.UInt32Rules.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.uint64 = exports.UInt64Rules.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.sint32 = exports.SInt32Rules.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.sint64 = exports.SInt64Rules.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.fixed32 = exports.Fixed32Rules.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.fixed64 = exports.Fixed64Rules.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.sfixed32 = exports.SFixed32Rules.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.sfixed64 = exports.SFixed64Rules.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.bool = exports.BoolRules.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.string = exports.StringRules.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.bytes = exports.BytesRules.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.enum = exports.EnumRules.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.repeated = exports.RepeatedRules.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.map = exports.MapRules.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.any = exports.AnyRules.decode(reader, reader.uint32());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.duration = exports.DurationRules.decode(reader, reader.uint32());
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.timestamp = exports.TimestampRules.decode(reader, reader.uint32());
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
            message: isSet(object.message) ? exports.MessageRules.fromJSON(object.message) : undefined,
            float: isSet(object.float) ? exports.FloatRules.fromJSON(object.float) : undefined,
            double: isSet(object.double) ? exports.DoubleRules.fromJSON(object.double) : undefined,
            int32: isSet(object.int32) ? exports.Int32Rules.fromJSON(object.int32) : undefined,
            int64: isSet(object.int64) ? exports.Int64Rules.fromJSON(object.int64) : undefined,
            uint32: isSet(object.uint32) ? exports.UInt32Rules.fromJSON(object.uint32) : undefined,
            uint64: isSet(object.uint64) ? exports.UInt64Rules.fromJSON(object.uint64) : undefined,
            sint32: isSet(object.sint32) ? exports.SInt32Rules.fromJSON(object.sint32) : undefined,
            sint64: isSet(object.sint64) ? exports.SInt64Rules.fromJSON(object.sint64) : undefined,
            fixed32: isSet(object.fixed32) ? exports.Fixed32Rules.fromJSON(object.fixed32) : undefined,
            fixed64: isSet(object.fixed64) ? exports.Fixed64Rules.fromJSON(object.fixed64) : undefined,
            sfixed32: isSet(object.sfixed32) ? exports.SFixed32Rules.fromJSON(object.sfixed32) : undefined,
            sfixed64: isSet(object.sfixed64) ? exports.SFixed64Rules.fromJSON(object.sfixed64) : undefined,
            bool: isSet(object.bool) ? exports.BoolRules.fromJSON(object.bool) : undefined,
            string: isSet(object.string) ? exports.StringRules.fromJSON(object.string) : undefined,
            bytes: isSet(object.bytes) ? exports.BytesRules.fromJSON(object.bytes) : undefined,
            enum: isSet(object.enum) ? exports.EnumRules.fromJSON(object.enum) : undefined,
            repeated: isSet(object.repeated) ? exports.RepeatedRules.fromJSON(object.repeated) : undefined,
            map: isSet(object.map) ? exports.MapRules.fromJSON(object.map) : undefined,
            any: isSet(object.any) ? exports.AnyRules.fromJSON(object.any) : undefined,
            duration: isSet(object.duration) ? exports.DurationRules.fromJSON(object.duration) : undefined,
            timestamp: isSet(object.timestamp) ? exports.TimestampRules.fromJSON(object.timestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message ? exports.MessageRules.toJSON(message.message) : undefined);
        message.float !== undefined && (obj.float = message.float ? exports.FloatRules.toJSON(message.float) : undefined);
        message.double !== undefined && (obj.double = message.double ? exports.DoubleRules.toJSON(message.double) : undefined);
        message.int32 !== undefined && (obj.int32 = message.int32 ? exports.Int32Rules.toJSON(message.int32) : undefined);
        message.int64 !== undefined && (obj.int64 = message.int64 ? exports.Int64Rules.toJSON(message.int64) : undefined);
        message.uint32 !== undefined && (obj.uint32 = message.uint32 ? exports.UInt32Rules.toJSON(message.uint32) : undefined);
        message.uint64 !== undefined && (obj.uint64 = message.uint64 ? exports.UInt64Rules.toJSON(message.uint64) : undefined);
        message.sint32 !== undefined && (obj.sint32 = message.sint32 ? exports.SInt32Rules.toJSON(message.sint32) : undefined);
        message.sint64 !== undefined && (obj.sint64 = message.sint64 ? exports.SInt64Rules.toJSON(message.sint64) : undefined);
        message.fixed32 !== undefined && (obj.fixed32 = message.fixed32 ? exports.Fixed32Rules.toJSON(message.fixed32) : undefined);
        message.fixed64 !== undefined && (obj.fixed64 = message.fixed64 ? exports.Fixed64Rules.toJSON(message.fixed64) : undefined);
        message.sfixed32 !== undefined &&
            (obj.sfixed32 = message.sfixed32 ? exports.SFixed32Rules.toJSON(message.sfixed32) : undefined);
        message.sfixed64 !== undefined &&
            (obj.sfixed64 = message.sfixed64 ? exports.SFixed64Rules.toJSON(message.sfixed64) : undefined);
        message.bool !== undefined && (obj.bool = message.bool ? exports.BoolRules.toJSON(message.bool) : undefined);
        message.string !== undefined && (obj.string = message.string ? exports.StringRules.toJSON(message.string) : undefined);
        message.bytes !== undefined && (obj.bytes = message.bytes ? exports.BytesRules.toJSON(message.bytes) : undefined);
        message.enum !== undefined && (obj.enum = message.enum ? exports.EnumRules.toJSON(message.enum) : undefined);
        message.repeated !== undefined &&
            (obj.repeated = message.repeated ? exports.RepeatedRules.toJSON(message.repeated) : undefined);
        message.map !== undefined && (obj.map = message.map ? exports.MapRules.toJSON(message.map) : undefined);
        message.any !== undefined && (obj.any = message.any ? exports.AnyRules.toJSON(message.any) : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration ? exports.DurationRules.toJSON(message.duration) : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp ? exports.TimestampRules.toJSON(message.timestamp) : undefined);
        return obj;
    },
    create(base) {
        return exports.FieldRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFieldRules();
        message.message = (object.message !== undefined && object.message !== null)
            ? exports.MessageRules.fromPartial(object.message)
            : undefined;
        message.float = (object.float !== undefined && object.float !== null)
            ? exports.FloatRules.fromPartial(object.float)
            : undefined;
        message.double = (object.double !== undefined && object.double !== null)
            ? exports.DoubleRules.fromPartial(object.double)
            : undefined;
        message.int32 = (object.int32 !== undefined && object.int32 !== null)
            ? exports.Int32Rules.fromPartial(object.int32)
            : undefined;
        message.int64 = (object.int64 !== undefined && object.int64 !== null)
            ? exports.Int64Rules.fromPartial(object.int64)
            : undefined;
        message.uint32 = (object.uint32 !== undefined && object.uint32 !== null)
            ? exports.UInt32Rules.fromPartial(object.uint32)
            : undefined;
        message.uint64 = (object.uint64 !== undefined && object.uint64 !== null)
            ? exports.UInt64Rules.fromPartial(object.uint64)
            : undefined;
        message.sint32 = (object.sint32 !== undefined && object.sint32 !== null)
            ? exports.SInt32Rules.fromPartial(object.sint32)
            : undefined;
        message.sint64 = (object.sint64 !== undefined && object.sint64 !== null)
            ? exports.SInt64Rules.fromPartial(object.sint64)
            : undefined;
        message.fixed32 = (object.fixed32 !== undefined && object.fixed32 !== null)
            ? exports.Fixed32Rules.fromPartial(object.fixed32)
            : undefined;
        message.fixed64 = (object.fixed64 !== undefined && object.fixed64 !== null)
            ? exports.Fixed64Rules.fromPartial(object.fixed64)
            : undefined;
        message.sfixed32 = (object.sfixed32 !== undefined && object.sfixed32 !== null)
            ? exports.SFixed32Rules.fromPartial(object.sfixed32)
            : undefined;
        message.sfixed64 = (object.sfixed64 !== undefined && object.sfixed64 !== null)
            ? exports.SFixed64Rules.fromPartial(object.sfixed64)
            : undefined;
        message.bool = (object.bool !== undefined && object.bool !== null) ? exports.BoolRules.fromPartial(object.bool) : undefined;
        message.string = (object.string !== undefined && object.string !== null)
            ? exports.StringRules.fromPartial(object.string)
            : undefined;
        message.bytes = (object.bytes !== undefined && object.bytes !== null)
            ? exports.BytesRules.fromPartial(object.bytes)
            : undefined;
        message.enum = (object.enum !== undefined && object.enum !== null) ? exports.EnumRules.fromPartial(object.enum) : undefined;
        message.repeated = (object.repeated !== undefined && object.repeated !== null)
            ? exports.RepeatedRules.fromPartial(object.repeated)
            : undefined;
        message.map = (object.map !== undefined && object.map !== null) ? exports.MapRules.fromPartial(object.map) : undefined;
        message.any = (object.any !== undefined && object.any !== null) ? exports.AnyRules.fromPartial(object.any) : undefined;
        message.duration = (object.duration !== undefined && object.duration !== null)
            ? exports.DurationRules.fromPartial(object.duration)
            : undefined;
        message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
            ? exports.TimestampRules.fromPartial(object.timestamp)
            : undefined;
        return message;
    },
};
function createBaseFloatRules() {
    return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}
exports.FloatRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(13).float(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(21).float(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(29).float(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(37).float(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(45).float(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.float(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.float(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFloatRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.const = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.lt = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.lte = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.gt = reader.float();
                    continue;
                case 5:
                    if (tag !== 45) {
                        break;
                    }
                    message.gte = reader.float();
                    continue;
                case 6:
                    if (tag === 53) {
                        message.in.push(reader.float());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.float());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 61) {
                        message.notIn.push(reader.float());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.float());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => Number(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = message.const);
        message.lt !== undefined && (obj.lt = message.lt);
        message.lte !== undefined && (obj.lte = message.lte);
        message.gt !== undefined && (obj.gt = message.gt);
        message.gte !== undefined && (obj.gte = message.gte);
        if (message.in) {
            obj.in = message.in.map((e) => e);
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e);
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.FloatRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFloatRules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseDoubleRules() {
    return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}
exports.DoubleRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(9).double(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(17).double(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(25).double(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(33).double(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(41).double(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.double(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.double(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDoubleRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 9) {
                        break;
                    }
                    message.const = reader.double();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.lt = reader.double();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.lte = reader.double();
                    continue;
                case 4:
                    if (tag !== 33) {
                        break;
                    }
                    message.gt = reader.double();
                    continue;
                case 5:
                    if (tag !== 41) {
                        break;
                    }
                    message.gte = reader.double();
                    continue;
                case 6:
                    if (tag === 49) {
                        message.in.push(reader.double());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.double());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 57) {
                        message.notIn.push(reader.double());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.double());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => Number(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = message.const);
        message.lt !== undefined && (obj.lt = message.lt);
        message.lte !== undefined && (obj.lte = message.lte);
        message.gt !== undefined && (obj.gt = message.gt);
        message.gte !== undefined && (obj.gte = message.gte);
        if (message.in) {
            obj.in = message.in.map((e) => e);
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e);
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.DoubleRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDoubleRules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseInt32Rules() {
    return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}
exports.Int32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).int32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(16).int32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(24).int32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(32).int32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(40).int32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInt32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.const = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lt = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lte = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.gt = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.gte = reader.int32();
                    continue;
                case 6:
                    if (tag === 48) {
                        message.in.push(reader.int32());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 56) {
                        message.notIn.push(reader.int32());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => Number(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.Int32Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInt32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseInt64Rules() {
    return {
        const: long_1.default.ZERO,
        lt: long_1.default.ZERO,
        lte: long_1.default.ZERO,
        gt: long_1.default.ZERO,
        gte: long_1.default.ZERO,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.Int64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.const.isZero()) {
            writer.uint32(8).int64(message.const);
        }
        if (!message.lt.isZero()) {
            writer.uint32(16).int64(message.lt);
        }
        if (!message.lte.isZero()) {
            writer.uint32(24).int64(message.lte);
        }
        if (!message.gt.isZero()) {
            writer.uint32(32).int64(message.gt);
        }
        if (!message.gte.isZero()) {
            writer.uint32(40).int64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.int64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInt64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.const = reader.int64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lt = reader.int64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lte = reader.int64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.gt = reader.int64();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.gte = reader.int64();
                    continue;
                case 6:
                    if (tag === 48) {
                        message.in.push(reader.int64());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.int64());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 56) {
                        message.notIn.push(reader.int64());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.int64());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? long_1.default.fromValue(object.const) : long_1.default.ZERO,
            lt: isSet(object.lt) ? long_1.default.fromValue(object.lt) : long_1.default.ZERO,
            lte: isSet(object.lte) ? long_1.default.fromValue(object.lte) : long_1.default.ZERO,
            gt: isSet(object.gt) ? long_1.default.fromValue(object.gt) : long_1.default.ZERO,
            gte: isSet(object.gte) ? long_1.default.fromValue(object.gte) : long_1.default.ZERO,
            in: Array.isArray(object?.in) ? object.in.map((e) => long_1.default.fromValue(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => long_1.default.fromValue(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = (message.const || long_1.default.ZERO).toString());
        message.lt !== undefined && (obj.lt = (message.lt || long_1.default.ZERO).toString());
        message.lte !== undefined && (obj.lte = (message.lte || long_1.default.ZERO).toString());
        message.gt !== undefined && (obj.gt = (message.gt || long_1.default.ZERO).toString());
        message.gte !== undefined && (obj.gte = (message.gte || long_1.default.ZERO).toString());
        if (message.in) {
            obj.in = message.in.map((e) => (e || long_1.default.ZERO).toString());
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => (e || long_1.default.ZERO).toString());
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.Int64Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInt64Rules();
        message.const = (object.const !== undefined && object.const !== null) ? long_1.default.fromValue(object.const) : long_1.default.ZERO;
        message.lt = (object.lt !== undefined && object.lt !== null) ? long_1.default.fromValue(object.lt) : long_1.default.ZERO;
        message.lte = (object.lte !== undefined && object.lte !== null) ? long_1.default.fromValue(object.lte) : long_1.default.ZERO;
        message.gt = (object.gt !== undefined && object.gt !== null) ? long_1.default.fromValue(object.gt) : long_1.default.ZERO;
        message.gte = (object.gte !== undefined && object.gte !== null) ? long_1.default.fromValue(object.gte) : long_1.default.ZERO;
        message.in = object.in?.map((e) => long_1.default.fromValue(e)) || [];
        message.notIn = object.notIn?.map((e) => long_1.default.fromValue(e)) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseUInt32Rules() {
    return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}
exports.UInt32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).uint32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(16).uint32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(24).uint32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(32).uint32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(40).uint32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.uint32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUInt32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.const = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lt = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lte = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.gt = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.gte = reader.uint32();
                    continue;
                case 6:
                    if (tag === 48) {
                        message.in.push(reader.uint32());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.uint32());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 56) {
                        message.notIn.push(reader.uint32());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.uint32());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => Number(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.UInt32Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUInt32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseUInt64Rules() {
    return {
        const: long_1.default.UZERO,
        lt: long_1.default.UZERO,
        lte: long_1.default.UZERO,
        gt: long_1.default.UZERO,
        gte: long_1.default.UZERO,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.UInt64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.const.isZero()) {
            writer.uint32(8).uint64(message.const);
        }
        if (!message.lt.isZero()) {
            writer.uint32(16).uint64(message.lt);
        }
        if (!message.lte.isZero()) {
            writer.uint32(24).uint64(message.lte);
        }
        if (!message.gt.isZero()) {
            writer.uint32(32).uint64(message.gt);
        }
        if (!message.gte.isZero()) {
            writer.uint32(40).uint64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUInt64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.const = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lt = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lte = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.gt = reader.uint64();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.gte = reader.uint64();
                    continue;
                case 6:
                    if (tag === 48) {
                        message.in.push(reader.uint64());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.uint64());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 56) {
                        message.notIn.push(reader.uint64());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.uint64());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? long_1.default.fromValue(object.const) : long_1.default.UZERO,
            lt: isSet(object.lt) ? long_1.default.fromValue(object.lt) : long_1.default.UZERO,
            lte: isSet(object.lte) ? long_1.default.fromValue(object.lte) : long_1.default.UZERO,
            gt: isSet(object.gt) ? long_1.default.fromValue(object.gt) : long_1.default.UZERO,
            gte: isSet(object.gte) ? long_1.default.fromValue(object.gte) : long_1.default.UZERO,
            in: Array.isArray(object?.in) ? object.in.map((e) => long_1.default.fromValue(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => long_1.default.fromValue(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = (message.const || long_1.default.UZERO).toString());
        message.lt !== undefined && (obj.lt = (message.lt || long_1.default.UZERO).toString());
        message.lte !== undefined && (obj.lte = (message.lte || long_1.default.UZERO).toString());
        message.gt !== undefined && (obj.gt = (message.gt || long_1.default.UZERO).toString());
        message.gte !== undefined && (obj.gte = (message.gte || long_1.default.UZERO).toString());
        if (message.in) {
            obj.in = message.in.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.UInt64Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUInt64Rules();
        message.const = (object.const !== undefined && object.const !== null) ? long_1.default.fromValue(object.const) : long_1.default.UZERO;
        message.lt = (object.lt !== undefined && object.lt !== null) ? long_1.default.fromValue(object.lt) : long_1.default.UZERO;
        message.lte = (object.lte !== undefined && object.lte !== null) ? long_1.default.fromValue(object.lte) : long_1.default.UZERO;
        message.gt = (object.gt !== undefined && object.gt !== null) ? long_1.default.fromValue(object.gt) : long_1.default.UZERO;
        message.gte = (object.gte !== undefined && object.gte !== null) ? long_1.default.fromValue(object.gte) : long_1.default.UZERO;
        message.in = object.in?.map((e) => long_1.default.fromValue(e)) || [];
        message.notIn = object.notIn?.map((e) => long_1.default.fromValue(e)) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseSInt32Rules() {
    return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}
exports.SInt32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).sint32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(16).sint32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(24).sint32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(32).sint32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(40).sint32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.sint32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.sint32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSInt32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.const = reader.sint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lt = reader.sint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lte = reader.sint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.gt = reader.sint32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.gte = reader.sint32();
                    continue;
                case 6:
                    if (tag === 48) {
                        message.in.push(reader.sint32());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.sint32());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 56) {
                        message.notIn.push(reader.sint32());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.sint32());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => Number(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.SInt32Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSInt32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseSInt64Rules() {
    return {
        const: long_1.default.ZERO,
        lt: long_1.default.ZERO,
        lte: long_1.default.ZERO,
        gt: long_1.default.ZERO,
        gte: long_1.default.ZERO,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.SInt64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.const.isZero()) {
            writer.uint32(8).sint64(message.const);
        }
        if (!message.lt.isZero()) {
            writer.uint32(16).sint64(message.lt);
        }
        if (!message.lte.isZero()) {
            writer.uint32(24).sint64(message.lte);
        }
        if (!message.gt.isZero()) {
            writer.uint32(32).sint64(message.gt);
        }
        if (!message.gte.isZero()) {
            writer.uint32(40).sint64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.sint64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.sint64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSInt64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.const = reader.sint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lt = reader.sint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lte = reader.sint64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.gt = reader.sint64();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.gte = reader.sint64();
                    continue;
                case 6:
                    if (tag === 48) {
                        message.in.push(reader.sint64());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.sint64());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 56) {
                        message.notIn.push(reader.sint64());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.sint64());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? long_1.default.fromValue(object.const) : long_1.default.ZERO,
            lt: isSet(object.lt) ? long_1.default.fromValue(object.lt) : long_1.default.ZERO,
            lte: isSet(object.lte) ? long_1.default.fromValue(object.lte) : long_1.default.ZERO,
            gt: isSet(object.gt) ? long_1.default.fromValue(object.gt) : long_1.default.ZERO,
            gte: isSet(object.gte) ? long_1.default.fromValue(object.gte) : long_1.default.ZERO,
            in: Array.isArray(object?.in) ? object.in.map((e) => long_1.default.fromValue(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => long_1.default.fromValue(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = (message.const || long_1.default.ZERO).toString());
        message.lt !== undefined && (obj.lt = (message.lt || long_1.default.ZERO).toString());
        message.lte !== undefined && (obj.lte = (message.lte || long_1.default.ZERO).toString());
        message.gt !== undefined && (obj.gt = (message.gt || long_1.default.ZERO).toString());
        message.gte !== undefined && (obj.gte = (message.gte || long_1.default.ZERO).toString());
        if (message.in) {
            obj.in = message.in.map((e) => (e || long_1.default.ZERO).toString());
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => (e || long_1.default.ZERO).toString());
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.SInt64Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSInt64Rules();
        message.const = (object.const !== undefined && object.const !== null) ? long_1.default.fromValue(object.const) : long_1.default.ZERO;
        message.lt = (object.lt !== undefined && object.lt !== null) ? long_1.default.fromValue(object.lt) : long_1.default.ZERO;
        message.lte = (object.lte !== undefined && object.lte !== null) ? long_1.default.fromValue(object.lte) : long_1.default.ZERO;
        message.gt = (object.gt !== undefined && object.gt !== null) ? long_1.default.fromValue(object.gt) : long_1.default.ZERO;
        message.gte = (object.gte !== undefined && object.gte !== null) ? long_1.default.fromValue(object.gte) : long_1.default.ZERO;
        message.in = object.in?.map((e) => long_1.default.fromValue(e)) || [];
        message.notIn = object.notIn?.map((e) => long_1.default.fromValue(e)) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseFixed32Rules() {
    return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}
exports.Fixed32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(13).fixed32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(21).fixed32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(29).fixed32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(37).fixed32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(45).fixed32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.fixed32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.fixed32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFixed32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.const = reader.fixed32();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.lt = reader.fixed32();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.lte = reader.fixed32();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.gt = reader.fixed32();
                    continue;
                case 5:
                    if (tag !== 45) {
                        break;
                    }
                    message.gte = reader.fixed32();
                    continue;
                case 6:
                    if (tag === 53) {
                        message.in.push(reader.fixed32());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.fixed32());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 61) {
                        message.notIn.push(reader.fixed32());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.fixed32());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => Number(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.Fixed32Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFixed32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseFixed64Rules() {
    return {
        const: long_1.default.UZERO,
        lt: long_1.default.UZERO,
        lte: long_1.default.UZERO,
        gt: long_1.default.UZERO,
        gte: long_1.default.UZERO,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.Fixed64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.const.isZero()) {
            writer.uint32(9).fixed64(message.const);
        }
        if (!message.lt.isZero()) {
            writer.uint32(17).fixed64(message.lt);
        }
        if (!message.lte.isZero()) {
            writer.uint32(25).fixed64(message.lte);
        }
        if (!message.gt.isZero()) {
            writer.uint32(33).fixed64(message.gt);
        }
        if (!message.gte.isZero()) {
            writer.uint32(41).fixed64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.fixed64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.fixed64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFixed64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 9) {
                        break;
                    }
                    message.const = reader.fixed64();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.lt = reader.fixed64();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.lte = reader.fixed64();
                    continue;
                case 4:
                    if (tag !== 33) {
                        break;
                    }
                    message.gt = reader.fixed64();
                    continue;
                case 5:
                    if (tag !== 41) {
                        break;
                    }
                    message.gte = reader.fixed64();
                    continue;
                case 6:
                    if (tag === 49) {
                        message.in.push(reader.fixed64());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.fixed64());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 57) {
                        message.notIn.push(reader.fixed64());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.fixed64());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? long_1.default.fromValue(object.const) : long_1.default.UZERO,
            lt: isSet(object.lt) ? long_1.default.fromValue(object.lt) : long_1.default.UZERO,
            lte: isSet(object.lte) ? long_1.default.fromValue(object.lte) : long_1.default.UZERO,
            gt: isSet(object.gt) ? long_1.default.fromValue(object.gt) : long_1.default.UZERO,
            gte: isSet(object.gte) ? long_1.default.fromValue(object.gte) : long_1.default.UZERO,
            in: Array.isArray(object?.in) ? object.in.map((e) => long_1.default.fromValue(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => long_1.default.fromValue(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = (message.const || long_1.default.UZERO).toString());
        message.lt !== undefined && (obj.lt = (message.lt || long_1.default.UZERO).toString());
        message.lte !== undefined && (obj.lte = (message.lte || long_1.default.UZERO).toString());
        message.gt !== undefined && (obj.gt = (message.gt || long_1.default.UZERO).toString());
        message.gte !== undefined && (obj.gte = (message.gte || long_1.default.UZERO).toString());
        if (message.in) {
            obj.in = message.in.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.Fixed64Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFixed64Rules();
        message.const = (object.const !== undefined && object.const !== null) ? long_1.default.fromValue(object.const) : long_1.default.UZERO;
        message.lt = (object.lt !== undefined && object.lt !== null) ? long_1.default.fromValue(object.lt) : long_1.default.UZERO;
        message.lte = (object.lte !== undefined && object.lte !== null) ? long_1.default.fromValue(object.lte) : long_1.default.UZERO;
        message.gt = (object.gt !== undefined && object.gt !== null) ? long_1.default.fromValue(object.gt) : long_1.default.UZERO;
        message.gte = (object.gte !== undefined && object.gte !== null) ? long_1.default.fromValue(object.gte) : long_1.default.UZERO;
        message.in = object.in?.map((e) => long_1.default.fromValue(e)) || [];
        message.notIn = object.notIn?.map((e) => long_1.default.fromValue(e)) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseSFixed32Rules() {
    return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}
exports.SFixed32Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(13).sfixed32(message.const);
        }
        if (message.lt !== 0) {
            writer.uint32(21).sfixed32(message.lt);
        }
        if (message.lte !== 0) {
            writer.uint32(29).sfixed32(message.lte);
        }
        if (message.gt !== 0) {
            writer.uint32(37).sfixed32(message.gt);
        }
        if (message.gte !== 0) {
            writer.uint32(45).sfixed32(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.sfixed32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.sfixed32(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSFixed32Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.const = reader.sfixed32();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.lt = reader.sfixed32();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.lte = reader.sfixed32();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.gt = reader.sfixed32();
                    continue;
                case 5:
                    if (tag !== 45) {
                        break;
                    }
                    message.gte = reader.sfixed32();
                    continue;
                case 6:
                    if (tag === 53) {
                        message.in.push(reader.sfixed32());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.sfixed32());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 61) {
                        message.notIn.push(reader.sfixed32());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.sfixed32());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Number(object.const) : 0,
            lt: isSet(object.lt) ? Number(object.lt) : 0,
            lte: isSet(object.lte) ? Number(object.lte) : 0,
            gt: isSet(object.gt) ? Number(object.gt) : 0,
            gte: isSet(object.gte) ? Number(object.gte) : 0,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => Number(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.lt !== undefined && (obj.lt = Math.round(message.lt));
        message.lte !== undefined && (obj.lte = Math.round(message.lte));
        message.gt !== undefined && (obj.gt = Math.round(message.gt));
        message.gte !== undefined && (obj.gte = Math.round(message.gte));
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.SFixed32Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSFixed32Rules();
        message.const = object.const ?? 0;
        message.lt = object.lt ?? 0;
        message.lte = object.lte ?? 0;
        message.gt = object.gt ?? 0;
        message.gte = object.gte ?? 0;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseSFixed64Rules() {
    return {
        const: long_1.default.ZERO,
        lt: long_1.default.ZERO,
        lte: long_1.default.ZERO,
        gt: long_1.default.ZERO,
        gte: long_1.default.ZERO,
        in: [],
        notIn: [],
        ignoreEmpty: false,
    };
}
exports.SFixed64Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.const.isZero()) {
            writer.uint32(9).sfixed64(message.const);
        }
        if (!message.lt.isZero()) {
            writer.uint32(17).sfixed64(message.lt);
        }
        if (!message.lte.isZero()) {
            writer.uint32(25).sfixed64(message.lte);
        }
        if (!message.gt.isZero()) {
            writer.uint32(33).sfixed64(message.gt);
        }
        if (!message.gte.isZero()) {
            writer.uint32(41).sfixed64(message.gte);
        }
        writer.uint32(50).fork();
        for (const v of message.in) {
            writer.sfixed64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.notIn) {
            writer.sfixed64(v);
        }
        writer.ldelim();
        if (message.ignoreEmpty === true) {
            writer.uint32(64).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSFixed64Rules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 9) {
                        break;
                    }
                    message.const = reader.sfixed64();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.lt = reader.sfixed64();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.lte = reader.sfixed64();
                    continue;
                case 4:
                    if (tag !== 33) {
                        break;
                    }
                    message.gt = reader.sfixed64();
                    continue;
                case 5:
                    if (tag !== 41) {
                        break;
                    }
                    message.gte = reader.sfixed64();
                    continue;
                case 6:
                    if (tag === 49) {
                        message.in.push(reader.sfixed64());
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.sfixed64());
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag === 57) {
                        message.notIn.push(reader.sfixed64());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.sfixed64());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? long_1.default.fromValue(object.const) : long_1.default.ZERO,
            lt: isSet(object.lt) ? long_1.default.fromValue(object.lt) : long_1.default.ZERO,
            lte: isSet(object.lte) ? long_1.default.fromValue(object.lte) : long_1.default.ZERO,
            gt: isSet(object.gt) ? long_1.default.fromValue(object.gt) : long_1.default.ZERO,
            gte: isSet(object.gte) ? long_1.default.fromValue(object.gte) : long_1.default.ZERO,
            in: Array.isArray(object?.in) ? object.in.map((e) => long_1.default.fromValue(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => long_1.default.fromValue(e)) : [],
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = (message.const || long_1.default.ZERO).toString());
        message.lt !== undefined && (obj.lt = (message.lt || long_1.default.ZERO).toString());
        message.lte !== undefined && (obj.lte = (message.lte || long_1.default.ZERO).toString());
        message.gt !== undefined && (obj.gt = (message.gt || long_1.default.ZERO).toString());
        message.gte !== undefined && (obj.gte = (message.gte || long_1.default.ZERO).toString());
        if (message.in) {
            obj.in = message.in.map((e) => (e || long_1.default.ZERO).toString());
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => (e || long_1.default.ZERO).toString());
        }
        else {
            obj.notIn = [];
        }
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.SFixed64Rules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSFixed64Rules();
        message.const = (object.const !== undefined && object.const !== null) ? long_1.default.fromValue(object.const) : long_1.default.ZERO;
        message.lt = (object.lt !== undefined && object.lt !== null) ? long_1.default.fromValue(object.lt) : long_1.default.ZERO;
        message.lte = (object.lte !== undefined && object.lte !== null) ? long_1.default.fromValue(object.lte) : long_1.default.ZERO;
        message.gt = (object.gt !== undefined && object.gt !== null) ? long_1.default.fromValue(object.gt) : long_1.default.ZERO;
        message.gte = (object.gte !== undefined && object.gte !== null) ? long_1.default.fromValue(object.gte) : long_1.default.ZERO;
        message.in = object.in?.map((e) => long_1.default.fromValue(e)) || [];
        message.notIn = object.notIn?.map((e) => long_1.default.fromValue(e)) || [];
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseBoolRules() {
    return { const: false };
}
exports.BoolRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const === true) {
            writer.uint32(8).bool(message.const);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoolRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.const = reader.bool();
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
        return { const: isSet(object.const) ? Boolean(object.const) : false };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = message.const);
        return obj;
    },
    create(base) {
        return exports.BoolRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBoolRules();
        message.const = object.const ?? false;
        return message;
    },
};
function createBaseStringRules() {
    return {
        const: "",
        len: long_1.default.UZERO,
        minLen: long_1.default.UZERO,
        maxLen: long_1.default.UZERO,
        lenBytes: long_1.default.UZERO,
        minBytes: long_1.default.UZERO,
        maxBytes: long_1.default.UZERO,
        pattern: "",
        prefix: "",
        suffix: "",
        contains: "",
        notContains: "",
        in: [],
        notIn: [],
        email: undefined,
        hostname: undefined,
        ip: undefined,
        ipv4: undefined,
        ipv6: undefined,
        uri: undefined,
        uriRef: undefined,
        address: undefined,
        uuid: undefined,
        wellKnownRegex: undefined,
        strict: false,
        ignoreEmpty: false,
    };
}
exports.StringRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== "") {
            writer.uint32(10).string(message.const);
        }
        if (!message.len.isZero()) {
            writer.uint32(152).uint64(message.len);
        }
        if (!message.minLen.isZero()) {
            writer.uint32(16).uint64(message.minLen);
        }
        if (!message.maxLen.isZero()) {
            writer.uint32(24).uint64(message.maxLen);
        }
        if (!message.lenBytes.isZero()) {
            writer.uint32(160).uint64(message.lenBytes);
        }
        if (!message.minBytes.isZero()) {
            writer.uint32(32).uint64(message.minBytes);
        }
        if (!message.maxBytes.isZero()) {
            writer.uint32(40).uint64(message.maxBytes);
        }
        if (message.pattern !== "") {
            writer.uint32(50).string(message.pattern);
        }
        if (message.prefix !== "") {
            writer.uint32(58).string(message.prefix);
        }
        if (message.suffix !== "") {
            writer.uint32(66).string(message.suffix);
        }
        if (message.contains !== "") {
            writer.uint32(74).string(message.contains);
        }
        if (message.notContains !== "") {
            writer.uint32(186).string(message.notContains);
        }
        for (const v of message.in) {
            writer.uint32(82).string(v);
        }
        for (const v of message.notIn) {
            writer.uint32(90).string(v);
        }
        if (message.email !== undefined) {
            writer.uint32(96).bool(message.email);
        }
        if (message.hostname !== undefined) {
            writer.uint32(104).bool(message.hostname);
        }
        if (message.ip !== undefined) {
            writer.uint32(112).bool(message.ip);
        }
        if (message.ipv4 !== undefined) {
            writer.uint32(120).bool(message.ipv4);
        }
        if (message.ipv6 !== undefined) {
            writer.uint32(128).bool(message.ipv6);
        }
        if (message.uri !== undefined) {
            writer.uint32(136).bool(message.uri);
        }
        if (message.uriRef !== undefined) {
            writer.uint32(144).bool(message.uriRef);
        }
        if (message.address !== undefined) {
            writer.uint32(168).bool(message.address);
        }
        if (message.uuid !== undefined) {
            writer.uint32(176).bool(message.uuid);
        }
        if (message.wellKnownRegex !== undefined) {
            writer.uint32(192).int32(message.wellKnownRegex);
        }
        if (message.strict === true) {
            writer.uint32(200).bool(message.strict);
        }
        if (message.ignoreEmpty === true) {
            writer.uint32(208).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStringRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.const = reader.string();
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }
                    message.len = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.minLen = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.maxLen = reader.uint64();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.lenBytes = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.minBytes = reader.uint64();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.maxBytes = reader.uint64();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.pattern = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.prefix = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.suffix = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.contains = reader.string();
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.notContains = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.in.push(reader.string());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.notIn.push(reader.string());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.email = reader.bool();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.hostname = reader.bool();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.ip = reader.bool();
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.ipv4 = reader.bool();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.ipv6 = reader.bool();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.uri = reader.bool();
                    continue;
                case 18:
                    if (tag !== 144) {
                        break;
                    }
                    message.uriRef = reader.bool();
                    continue;
                case 21:
                    if (tag !== 168) {
                        break;
                    }
                    message.address = reader.bool();
                    continue;
                case 22:
                    if (tag !== 176) {
                        break;
                    }
                    message.uuid = reader.bool();
                    continue;
                case 24:
                    if (tag !== 192) {
                        break;
                    }
                    message.wellKnownRegex = reader.int32();
                    continue;
                case 25:
                    if (tag !== 200) {
                        break;
                    }
                    message.strict = reader.bool();
                    continue;
                case 26:
                    if (tag !== 208) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? String(object.const) : "",
            len: isSet(object.len) ? long_1.default.fromValue(object.len) : long_1.default.UZERO,
            minLen: isSet(object.minLen) ? long_1.default.fromValue(object.minLen) : long_1.default.UZERO,
            maxLen: isSet(object.maxLen) ? long_1.default.fromValue(object.maxLen) : long_1.default.UZERO,
            lenBytes: isSet(object.lenBytes) ? long_1.default.fromValue(object.lenBytes) : long_1.default.UZERO,
            minBytes: isSet(object.minBytes) ? long_1.default.fromValue(object.minBytes) : long_1.default.UZERO,
            maxBytes: isSet(object.maxBytes) ? long_1.default.fromValue(object.maxBytes) : long_1.default.UZERO,
            pattern: isSet(object.pattern) ? String(object.pattern) : "",
            prefix: isSet(object.prefix) ? String(object.prefix) : "",
            suffix: isSet(object.suffix) ? String(object.suffix) : "",
            contains: isSet(object.contains) ? String(object.contains) : "",
            notContains: isSet(object.notContains) ? String(object.notContains) : "",
            in: Array.isArray(object?.in) ? object.in.map((e) => String(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => String(e)) : [],
            email: isSet(object.email) ? Boolean(object.email) : undefined,
            hostname: isSet(object.hostname) ? Boolean(object.hostname) : undefined,
            ip: isSet(object.ip) ? Boolean(object.ip) : undefined,
            ipv4: isSet(object.ipv4) ? Boolean(object.ipv4) : undefined,
            ipv6: isSet(object.ipv6) ? Boolean(object.ipv6) : undefined,
            uri: isSet(object.uri) ? Boolean(object.uri) : undefined,
            uriRef: isSet(object.uriRef) ? Boolean(object.uriRef) : undefined,
            address: isSet(object.address) ? Boolean(object.address) : undefined,
            uuid: isSet(object.uuid) ? Boolean(object.uuid) : undefined,
            wellKnownRegex: isSet(object.wellKnownRegex) ? knownRegexFromJSON(object.wellKnownRegex) : undefined,
            strict: isSet(object.strict) ? Boolean(object.strict) : false,
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = message.const);
        message.len !== undefined && (obj.len = (message.len || long_1.default.UZERO).toString());
        message.minLen !== undefined && (obj.minLen = (message.minLen || long_1.default.UZERO).toString());
        message.maxLen !== undefined && (obj.maxLen = (message.maxLen || long_1.default.UZERO).toString());
        message.lenBytes !== undefined && (obj.lenBytes = (message.lenBytes || long_1.default.UZERO).toString());
        message.minBytes !== undefined && (obj.minBytes = (message.minBytes || long_1.default.UZERO).toString());
        message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || long_1.default.UZERO).toString());
        message.pattern !== undefined && (obj.pattern = message.pattern);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.suffix !== undefined && (obj.suffix = message.suffix);
        message.contains !== undefined && (obj.contains = message.contains);
        message.notContains !== undefined && (obj.notContains = message.notContains);
        if (message.in) {
            obj.in = message.in.map((e) => e);
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e);
        }
        else {
            obj.notIn = [];
        }
        message.email !== undefined && (obj.email = message.email);
        message.hostname !== undefined && (obj.hostname = message.hostname);
        message.ip !== undefined && (obj.ip = message.ip);
        message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
        message.ipv6 !== undefined && (obj.ipv6 = message.ipv6);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriRef !== undefined && (obj.uriRef = message.uriRef);
        message.address !== undefined && (obj.address = message.address);
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.wellKnownRegex !== undefined &&
            (obj.wellKnownRegex = message.wellKnownRegex !== undefined
                ? knownRegexToJSON(message.wellKnownRegex)
                : undefined);
        message.strict !== undefined && (obj.strict = message.strict);
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.StringRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStringRules();
        message.const = object.const ?? "";
        message.len = (object.len !== undefined && object.len !== null) ? long_1.default.fromValue(object.len) : long_1.default.UZERO;
        message.minLen = (object.minLen !== undefined && object.minLen !== null)
            ? long_1.default.fromValue(object.minLen)
            : long_1.default.UZERO;
        message.maxLen = (object.maxLen !== undefined && object.maxLen !== null)
            ? long_1.default.fromValue(object.maxLen)
            : long_1.default.UZERO;
        message.lenBytes = (object.lenBytes !== undefined && object.lenBytes !== null)
            ? long_1.default.fromValue(object.lenBytes)
            : long_1.default.UZERO;
        message.minBytes = (object.minBytes !== undefined && object.minBytes !== null)
            ? long_1.default.fromValue(object.minBytes)
            : long_1.default.UZERO;
        message.maxBytes = (object.maxBytes !== undefined && object.maxBytes !== null)
            ? long_1.default.fromValue(object.maxBytes)
            : long_1.default.UZERO;
        message.pattern = object.pattern ?? "";
        message.prefix = object.prefix ?? "";
        message.suffix = object.suffix ?? "";
        message.contains = object.contains ?? "";
        message.notContains = object.notContains ?? "";
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.email = object.email ?? undefined;
        message.hostname = object.hostname ?? undefined;
        message.ip = object.ip ?? undefined;
        message.ipv4 = object.ipv4 ?? undefined;
        message.ipv6 = object.ipv6 ?? undefined;
        message.uri = object.uri ?? undefined;
        message.uriRef = object.uriRef ?? undefined;
        message.address = object.address ?? undefined;
        message.uuid = object.uuid ?? undefined;
        message.wellKnownRegex = object.wellKnownRegex ?? undefined;
        message.strict = object.strict ?? false;
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseBytesRules() {
    return {
        const: Buffer.alloc(0),
        len: long_1.default.UZERO,
        minLen: long_1.default.UZERO,
        maxLen: long_1.default.UZERO,
        pattern: "",
        prefix: Buffer.alloc(0),
        suffix: Buffer.alloc(0),
        contains: Buffer.alloc(0),
        in: [],
        notIn: [],
        ip: undefined,
        ipv4: undefined,
        ipv6: undefined,
        ignoreEmpty: false,
    };
}
exports.BytesRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const.length !== 0) {
            writer.uint32(10).bytes(message.const);
        }
        if (!message.len.isZero()) {
            writer.uint32(104).uint64(message.len);
        }
        if (!message.minLen.isZero()) {
            writer.uint32(16).uint64(message.minLen);
        }
        if (!message.maxLen.isZero()) {
            writer.uint32(24).uint64(message.maxLen);
        }
        if (message.pattern !== "") {
            writer.uint32(34).string(message.pattern);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(42).bytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            writer.uint32(50).bytes(message.suffix);
        }
        if (message.contains.length !== 0) {
            writer.uint32(58).bytes(message.contains);
        }
        for (const v of message.in) {
            writer.uint32(66).bytes(v);
        }
        for (const v of message.notIn) {
            writer.uint32(74).bytes(v);
        }
        if (message.ip !== undefined) {
            writer.uint32(80).bool(message.ip);
        }
        if (message.ipv4 !== undefined) {
            writer.uint32(88).bool(message.ipv4);
        }
        if (message.ipv6 !== undefined) {
            writer.uint32(96).bool(message.ipv6);
        }
        if (message.ignoreEmpty === true) {
            writer.uint32(112).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBytesRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.const = reader.bytes();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.len = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.minLen = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.maxLen = reader.uint64();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.pattern = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.prefix = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.suffix = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.contains = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.in.push(reader.bytes());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.notIn.push(reader.bytes());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.ip = reader.bool();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.ipv4 = reader.bool();
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.ipv6 = reader.bool();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            const: isSet(object.const) ? Buffer.from(bytesFromBase64(object.const)) : Buffer.alloc(0),
            len: isSet(object.len) ? long_1.default.fromValue(object.len) : long_1.default.UZERO,
            minLen: isSet(object.minLen) ? long_1.default.fromValue(object.minLen) : long_1.default.UZERO,
            maxLen: isSet(object.maxLen) ? long_1.default.fromValue(object.maxLen) : long_1.default.UZERO,
            pattern: isSet(object.pattern) ? String(object.pattern) : "",
            prefix: isSet(object.prefix) ? Buffer.from(bytesFromBase64(object.prefix)) : Buffer.alloc(0),
            suffix: isSet(object.suffix) ? Buffer.from(bytesFromBase64(object.suffix)) : Buffer.alloc(0),
            contains: isSet(object.contains) ? Buffer.from(bytesFromBase64(object.contains)) : Buffer.alloc(0),
            in: Array.isArray(object?.in) ? object.in.map((e) => Buffer.from(bytesFromBase64(e))) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => Buffer.from(bytesFromBase64(e))) : [],
            ip: isSet(object.ip) ? Boolean(object.ip) : undefined,
            ipv4: isSet(object.ipv4) ? Boolean(object.ipv4) : undefined,
            ipv6: isSet(object.ipv6) ? Boolean(object.ipv6) : undefined,
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined &&
            (obj.const = base64FromBytes(message.const !== undefined ? message.const : Buffer.alloc(0)));
        message.len !== undefined && (obj.len = (message.len || long_1.default.UZERO).toString());
        message.minLen !== undefined && (obj.minLen = (message.minLen || long_1.default.UZERO).toString());
        message.maxLen !== undefined && (obj.maxLen = (message.maxLen || long_1.default.UZERO).toString());
        message.pattern !== undefined && (obj.pattern = message.pattern);
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : Buffer.alloc(0)));
        message.suffix !== undefined &&
            (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : Buffer.alloc(0)));
        message.contains !== undefined &&
            (obj.contains = base64FromBytes(message.contains !== undefined ? message.contains : Buffer.alloc(0)));
        if (message.in) {
            obj.in = message.in.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
        }
        else {
            obj.notIn = [];
        }
        message.ip !== undefined && (obj.ip = message.ip);
        message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
        message.ipv6 !== undefined && (obj.ipv6 = message.ipv6);
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.BytesRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBytesRules();
        message.const = object.const ?? Buffer.alloc(0);
        message.len = (object.len !== undefined && object.len !== null) ? long_1.default.fromValue(object.len) : long_1.default.UZERO;
        message.minLen = (object.minLen !== undefined && object.minLen !== null)
            ? long_1.default.fromValue(object.minLen)
            : long_1.default.UZERO;
        message.maxLen = (object.maxLen !== undefined && object.maxLen !== null)
            ? long_1.default.fromValue(object.maxLen)
            : long_1.default.UZERO;
        message.pattern = object.pattern ?? "";
        message.prefix = object.prefix ?? Buffer.alloc(0);
        message.suffix = object.suffix ?? Buffer.alloc(0);
        message.contains = object.contains ?? Buffer.alloc(0);
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        message.ip = object.ip ?? undefined;
        message.ipv4 = object.ipv4 ?? undefined;
        message.ipv6 = object.ipv6 ?? undefined;
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseEnumRules() {
    return { const: 0, definedOnly: false, in: [], notIn: [] };
}
exports.EnumRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.const !== 0) {
            writer.uint32(8).int32(message.const);
        }
        if (message.definedOnly === true) {
            writer.uint32(16).bool(message.definedOnly);
        }
        writer.uint32(26).fork();
        for (const v of message.in) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.notIn) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.const = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.definedOnly = reader.bool();
                    continue;
                case 3:
                    if (tag === 24) {
                        message.in.push(reader.int32());
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.in.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 4:
                    if (tag === 32) {
                        message.notIn.push(reader.int32());
                        continue;
                    }
                    if (tag === 34) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notIn.push(reader.int32());
                        }
                        continue;
                    }
                    break;
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
            const: isSet(object.const) ? Number(object.const) : 0,
            definedOnly: isSet(object.definedOnly) ? Boolean(object.definedOnly) : false,
            in: Array.isArray(object?.in) ? object.in.map((e) => Number(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.const !== undefined && (obj.const = Math.round(message.const));
        message.definedOnly !== undefined && (obj.definedOnly = message.definedOnly);
        if (message.in) {
            obj.in = message.in.map((e) => Math.round(e));
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => Math.round(e));
        }
        else {
            obj.notIn = [];
        }
        return obj;
    },
    create(base) {
        return exports.EnumRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnumRules();
        message.const = object.const ?? 0;
        message.definedOnly = object.definedOnly ?? false;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        return message;
    },
};
function createBaseMessageRules() {
    return { skip: false, required: false };
}
exports.MessageRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.skip === true) {
            writer.uint32(8).bool(message.skip);
        }
        if (message.required === true) {
            writer.uint32(16).bool(message.required);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.skip = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.required = reader.bool();
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
            skip: isSet(object.skip) ? Boolean(object.skip) : false,
            required: isSet(object.required) ? Boolean(object.required) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.skip !== undefined && (obj.skip = message.skip);
        message.required !== undefined && (obj.required = message.required);
        return obj;
    },
    create(base) {
        return exports.MessageRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageRules();
        message.skip = object.skip ?? false;
        message.required = object.required ?? false;
        return message;
    },
};
function createBaseRepeatedRules() {
    return { minItems: long_1.default.UZERO, maxItems: long_1.default.UZERO, unique: false, items: undefined, ignoreEmpty: false };
}
exports.RepeatedRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.minItems.isZero()) {
            writer.uint32(8).uint64(message.minItems);
        }
        if (!message.maxItems.isZero()) {
            writer.uint32(16).uint64(message.maxItems);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        if (message.items !== undefined) {
            exports.FieldRules.encode(message.items, writer.uint32(34).fork()).ldelim();
        }
        if (message.ignoreEmpty === true) {
            writer.uint32(40).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRepeatedRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.minItems = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.maxItems = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.unique = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.items = exports.FieldRules.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            minItems: isSet(object.minItems) ? long_1.default.fromValue(object.minItems) : long_1.default.UZERO,
            maxItems: isSet(object.maxItems) ? long_1.default.fromValue(object.maxItems) : long_1.default.UZERO,
            unique: isSet(object.unique) ? Boolean(object.unique) : false,
            items: isSet(object.items) ? exports.FieldRules.fromJSON(object.items) : undefined,
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.minItems !== undefined && (obj.minItems = (message.minItems || long_1.default.UZERO).toString());
        message.maxItems !== undefined && (obj.maxItems = (message.maxItems || long_1.default.UZERO).toString());
        message.unique !== undefined && (obj.unique = message.unique);
        message.items !== undefined && (obj.items = message.items ? exports.FieldRules.toJSON(message.items) : undefined);
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.RepeatedRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRepeatedRules();
        message.minItems = (object.minItems !== undefined && object.minItems !== null)
            ? long_1.default.fromValue(object.minItems)
            : long_1.default.UZERO;
        message.maxItems = (object.maxItems !== undefined && object.maxItems !== null)
            ? long_1.default.fromValue(object.maxItems)
            : long_1.default.UZERO;
        message.unique = object.unique ?? false;
        message.items = (object.items !== undefined && object.items !== null)
            ? exports.FieldRules.fromPartial(object.items)
            : undefined;
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseMapRules() {
    return {
        minPairs: long_1.default.UZERO,
        maxPairs: long_1.default.UZERO,
        noSparse: false,
        keys: undefined,
        values: undefined,
        ignoreEmpty: false,
    };
}
exports.MapRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.minPairs.isZero()) {
            writer.uint32(8).uint64(message.minPairs);
        }
        if (!message.maxPairs.isZero()) {
            writer.uint32(16).uint64(message.maxPairs);
        }
        if (message.noSparse === true) {
            writer.uint32(24).bool(message.noSparse);
        }
        if (message.keys !== undefined) {
            exports.FieldRules.encode(message.keys, writer.uint32(34).fork()).ldelim();
        }
        if (message.values !== undefined) {
            exports.FieldRules.encode(message.values, writer.uint32(42).fork()).ldelim();
        }
        if (message.ignoreEmpty === true) {
            writer.uint32(48).bool(message.ignoreEmpty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMapRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.minPairs = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.maxPairs = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.noSparse = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.keys = exports.FieldRules.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.values = exports.FieldRules.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.ignoreEmpty = reader.bool();
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
            minPairs: isSet(object.minPairs) ? long_1.default.fromValue(object.minPairs) : long_1.default.UZERO,
            maxPairs: isSet(object.maxPairs) ? long_1.default.fromValue(object.maxPairs) : long_1.default.UZERO,
            noSparse: isSet(object.noSparse) ? Boolean(object.noSparse) : false,
            keys: isSet(object.keys) ? exports.FieldRules.fromJSON(object.keys) : undefined,
            values: isSet(object.values) ? exports.FieldRules.fromJSON(object.values) : undefined,
            ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.minPairs !== undefined && (obj.minPairs = (message.minPairs || long_1.default.UZERO).toString());
        message.maxPairs !== undefined && (obj.maxPairs = (message.maxPairs || long_1.default.UZERO).toString());
        message.noSparse !== undefined && (obj.noSparse = message.noSparse);
        message.keys !== undefined && (obj.keys = message.keys ? exports.FieldRules.toJSON(message.keys) : undefined);
        message.values !== undefined && (obj.values = message.values ? exports.FieldRules.toJSON(message.values) : undefined);
        message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
        return obj;
    },
    create(base) {
        return exports.MapRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMapRules();
        message.minPairs = (object.minPairs !== undefined && object.minPairs !== null)
            ? long_1.default.fromValue(object.minPairs)
            : long_1.default.UZERO;
        message.maxPairs = (object.maxPairs !== undefined && object.maxPairs !== null)
            ? long_1.default.fromValue(object.maxPairs)
            : long_1.default.UZERO;
        message.noSparse = object.noSparse ?? false;
        message.keys = (object.keys !== undefined && object.keys !== null)
            ? exports.FieldRules.fromPartial(object.keys)
            : undefined;
        message.values = (object.values !== undefined && object.values !== null)
            ? exports.FieldRules.fromPartial(object.values)
            : undefined;
        message.ignoreEmpty = object.ignoreEmpty ?? false;
        return message;
    },
};
function createBaseAnyRules() {
    return { required: false, in: [], notIn: [] };
}
exports.AnyRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.required === true) {
            writer.uint32(8).bool(message.required);
        }
        for (const v of message.in) {
            writer.uint32(18).string(v);
        }
        for (const v of message.notIn) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAnyRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.required = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.in.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.notIn.push(reader.string());
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
            required: isSet(object.required) ? Boolean(object.required) : false,
            in: Array.isArray(object?.in) ? object.in.map((e) => String(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.required !== undefined && (obj.required = message.required);
        if (message.in) {
            obj.in = message.in.map((e) => e);
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e);
        }
        else {
            obj.notIn = [];
        }
        return obj;
    },
    create(base) {
        return exports.AnyRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAnyRules();
        message.required = object.required ?? false;
        message.in = object.in?.map((e) => e) || [];
        message.notIn = object.notIn?.map((e) => e) || [];
        return message;
    },
};
function createBaseDurationRules() {
    return {
        required: false,
        const: undefined,
        lt: undefined,
        lte: undefined,
        gt: undefined,
        gte: undefined,
        in: [],
        notIn: [],
    };
}
exports.DurationRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.required === true) {
            writer.uint32(8).bool(message.required);
        }
        if (message.const !== undefined) {
            duration_1.Duration.encode(message.const, writer.uint32(18).fork()).ldelim();
        }
        if (message.lt !== undefined) {
            duration_1.Duration.encode(message.lt, writer.uint32(26).fork()).ldelim();
        }
        if (message.lte !== undefined) {
            duration_1.Duration.encode(message.lte, writer.uint32(34).fork()).ldelim();
        }
        if (message.gt !== undefined) {
            duration_1.Duration.encode(message.gt, writer.uint32(42).fork()).ldelim();
        }
        if (message.gte !== undefined) {
            duration_1.Duration.encode(message.gte, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.in) {
            duration_1.Duration.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.notIn) {
            duration_1.Duration.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDurationRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.required = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.const = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.lt = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.lte = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.gt = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.gte = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.in.push(duration_1.Duration.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.notIn.push(duration_1.Duration.decode(reader, reader.uint32()));
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
            required: isSet(object.required) ? Boolean(object.required) : false,
            const: isSet(object.const) ? duration_1.Duration.fromJSON(object.const) : undefined,
            lt: isSet(object.lt) ? duration_1.Duration.fromJSON(object.lt) : undefined,
            lte: isSet(object.lte) ? duration_1.Duration.fromJSON(object.lte) : undefined,
            gt: isSet(object.gt) ? duration_1.Duration.fromJSON(object.gt) : undefined,
            gte: isSet(object.gte) ? duration_1.Duration.fromJSON(object.gte) : undefined,
            in: Array.isArray(object?.in) ? object.in.map((e) => duration_1.Duration.fromJSON(e)) : [],
            notIn: Array.isArray(object?.notIn) ? object.notIn.map((e) => duration_1.Duration.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.required !== undefined && (obj.required = message.required);
        message.const !== undefined && (obj.const = message.const ? duration_1.Duration.toJSON(message.const) : undefined);
        message.lt !== undefined && (obj.lt = message.lt ? duration_1.Duration.toJSON(message.lt) : undefined);
        message.lte !== undefined && (obj.lte = message.lte ? duration_1.Duration.toJSON(message.lte) : undefined);
        message.gt !== undefined && (obj.gt = message.gt ? duration_1.Duration.toJSON(message.gt) : undefined);
        message.gte !== undefined && (obj.gte = message.gte ? duration_1.Duration.toJSON(message.gte) : undefined);
        if (message.in) {
            obj.in = message.in.map((e) => e ? duration_1.Duration.toJSON(e) : undefined);
        }
        else {
            obj.in = [];
        }
        if (message.notIn) {
            obj.notIn = message.notIn.map((e) => e ? duration_1.Duration.toJSON(e) : undefined);
        }
        else {
            obj.notIn = [];
        }
        return obj;
    },
    create(base) {
        return exports.DurationRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDurationRules();
        message.required = object.required ?? false;
        message.const = (object.const !== undefined && object.const !== null)
            ? duration_1.Duration.fromPartial(object.const)
            : undefined;
        message.lt = (object.lt !== undefined && object.lt !== null) ? duration_1.Duration.fromPartial(object.lt) : undefined;
        message.lte = (object.lte !== undefined && object.lte !== null) ? duration_1.Duration.fromPartial(object.lte) : undefined;
        message.gt = (object.gt !== undefined && object.gt !== null) ? duration_1.Duration.fromPartial(object.gt) : undefined;
        message.gte = (object.gte !== undefined && object.gte !== null) ? duration_1.Duration.fromPartial(object.gte) : undefined;
        message.in = object.in?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        message.notIn = object.notIn?.map((e) => duration_1.Duration.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTimestampRules() {
    return {
        required: false,
        const: undefined,
        lt: undefined,
        lte: undefined,
        gt: undefined,
        gte: undefined,
        ltNow: false,
        gtNow: false,
        within: undefined,
    };
}
exports.TimestampRules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.required === true) {
            writer.uint32(8).bool(message.required);
        }
        if (message.const !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.const), writer.uint32(18).fork()).ldelim();
        }
        if (message.lt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lt), writer.uint32(26).fork()).ldelim();
        }
        if (message.lte !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lte), writer.uint32(34).fork()).ldelim();
        }
        if (message.gt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.gt), writer.uint32(42).fork()).ldelim();
        }
        if (message.gte !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.gte), writer.uint32(50).fork()).ldelim();
        }
        if (message.ltNow === true) {
            writer.uint32(56).bool(message.ltNow);
        }
        if (message.gtNow === true) {
            writer.uint32(64).bool(message.gtNow);
        }
        if (message.within !== undefined) {
            duration_1.Duration.encode(message.within, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestampRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.required = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.const = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.lt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.lte = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.gt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.gte = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.ltNow = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.gtNow = reader.bool();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.within = duration_1.Duration.decode(reader, reader.uint32());
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
            required: isSet(object.required) ? Boolean(object.required) : false,
            const: isSet(object.const) ? fromJsonTimestamp(object.const) : undefined,
            lt: isSet(object.lt) ? fromJsonTimestamp(object.lt) : undefined,
            lte: isSet(object.lte) ? fromJsonTimestamp(object.lte) : undefined,
            gt: isSet(object.gt) ? fromJsonTimestamp(object.gt) : undefined,
            gte: isSet(object.gte) ? fromJsonTimestamp(object.gte) : undefined,
            ltNow: isSet(object.ltNow) ? Boolean(object.ltNow) : false,
            gtNow: isSet(object.gtNow) ? Boolean(object.gtNow) : false,
            within: isSet(object.within) ? duration_1.Duration.fromJSON(object.within) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.required !== undefined && (obj.required = message.required);
        message.const !== undefined && (obj.const = message.const.toISOString());
        message.lt !== undefined && (obj.lt = message.lt.toISOString());
        message.lte !== undefined && (obj.lte = message.lte.toISOString());
        message.gt !== undefined && (obj.gt = message.gt.toISOString());
        message.gte !== undefined && (obj.gte = message.gte.toISOString());
        message.ltNow !== undefined && (obj.ltNow = message.ltNow);
        message.gtNow !== undefined && (obj.gtNow = message.gtNow);
        message.within !== undefined && (obj.within = message.within ? duration_1.Duration.toJSON(message.within) : undefined);
        return obj;
    },
    create(base) {
        return exports.TimestampRules.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTimestampRules();
        message.required = object.required ?? false;
        message.const = object.const ?? undefined;
        message.lt = object.lt ?? undefined;
        message.lte = object.lte ?? undefined;
        message.gt = object.gt ?? undefined;
        message.gte = object.gte ?? undefined;
        message.ltNow = object.ltNow ?? false;
        message.gtNow = object.gtNow ?? false;
        message.within = (object.within !== undefined && object.within !== null)
            ? duration_1.Duration.fromPartial(object.within)
            : undefined;
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
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
