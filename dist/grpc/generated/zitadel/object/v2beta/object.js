"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDetails = exports.Details = exports.ListQuery = exports.RequestContext = exports.Organization = exports.Organisation = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "zitadel.object.v2beta";
function createBaseOrganisation() {
    return { orgId: undefined, orgDomain: undefined };
}
exports.Organisation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== undefined) {
            writer.uint32(10).string(message.orgId);
        }
        if (message.orgDomain !== undefined) {
            writer.uint32(18).string(message.orgDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganisation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orgDomain = reader.string();
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
            orgId: isSet(object.orgId) ? String(object.orgId) : undefined,
            orgDomain: isSet(object.orgDomain) ? String(object.orgDomain) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.orgDomain !== undefined && (obj.orgDomain = message.orgDomain);
        return obj;
    },
    create(base) {
        return exports.Organisation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrganisation();
        message.orgId = object.orgId ?? undefined;
        message.orgDomain = object.orgDomain ?? undefined;
        return message;
    },
};
function createBaseOrganization() {
    return { orgId: undefined, orgDomain: undefined };
}
exports.Organization = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== undefined) {
            writer.uint32(10).string(message.orgId);
        }
        if (message.orgDomain !== undefined) {
            writer.uint32(18).string(message.orgDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orgDomain = reader.string();
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
            orgId: isSet(object.orgId) ? String(object.orgId) : undefined,
            orgDomain: isSet(object.orgDomain) ? String(object.orgDomain) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.orgDomain !== undefined && (obj.orgDomain = message.orgDomain);
        return obj;
    },
    create(base) {
        return exports.Organization.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrganization();
        message.orgId = object.orgId ?? undefined;
        message.orgDomain = object.orgDomain ?? undefined;
        return message;
    },
};
function createBaseRequestContext() {
    return { orgId: undefined, instance: undefined };
}
exports.RequestContext = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== undefined) {
            writer.uint32(10).string(message.orgId);
        }
        if (message.instance !== undefined) {
            writer.uint32(16).bool(message.instance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.instance = reader.bool();
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
            orgId: isSet(object.orgId) ? String(object.orgId) : undefined,
            instance: isSet(object.instance) ? Boolean(object.instance) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.instance !== undefined && (obj.instance = message.instance);
        return obj;
    },
    create(base) {
        return exports.RequestContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestContext();
        message.orgId = object.orgId ?? undefined;
        message.instance = object.instance ?? undefined;
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
function createBaseDetails() {
    return { sequence: long_1.default.UZERO, changeDate: undefined, resourceOwner: "" };
}
exports.Details = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.changeDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.resourceOwner !== "") {
            writer.uint32(26).string(message.resourceOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDetails();
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
                    message.changeDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            sequence: isSet(object.sequence) ? long_1.default.fromValue(object.sequence) : long_1.default.UZERO,
            changeDate: isSet(object.changeDate) ? fromJsonTimestamp(object.changeDate) : undefined,
            resourceOwner: isSet(object.resourceOwner) ? String(object.resourceOwner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.changeDate !== undefined && (obj.changeDate = message.changeDate.toISOString());
        message.resourceOwner !== undefined && (obj.resourceOwner = message.resourceOwner);
        return obj;
    },
    create(base) {
        return exports.Details.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDetails();
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? long_1.default.fromValue(object.sequence)
            : long_1.default.UZERO;
        message.changeDate = object.changeDate ?? undefined;
        message.resourceOwner = object.resourceOwner ?? "";
        return message;
    },
};
function createBaseListDetails() {
    return { totalResult: long_1.default.UZERO, processedSequence: long_1.default.UZERO, timestamp: undefined };
}
exports.ListDetails = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.totalResult.isZero()) {
            writer.uint32(8).uint64(message.totalResult);
        }
        if (!message.processedSequence.isZero()) {
            writer.uint32(16).uint64(message.processedSequence);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
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
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalResult !== undefined && (obj.totalResult = (message.totalResult || long_1.default.UZERO).toString());
        message.processedSequence !== undefined &&
            (obj.processedSequence = (message.processedSequence || long_1.default.UZERO).toString());
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
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
        message.timestamp = object.timestamp ?? undefined;
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
