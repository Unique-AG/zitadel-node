"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionServiceDefinition = exports.CheckOTP = exports.CheckTOTP = exports.CheckIDPIntent = exports.CheckWebAuthN = exports.CheckPassword = exports.CheckUser = exports.Checks = exports.DeleteSessionResponse = exports.DeleteSessionRequest = exports.SetSessionResponse = exports.SetSessionRequest_MetadataEntry = exports.SetSessionRequest = exports.CreateSessionResponse = exports.CreateSessionRequest_MetadataEntry = exports.CreateSessionRequest = exports.GetSessionResponse = exports.GetSessionRequest = exports.ListSessionsResponse = exports.ListSessionsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const struct_1 = require("../../../google/protobuf/struct");
const object_1 = require("../../object/v2beta/object");
const challenge_1 = require("./challenge");
const session_1 = require("./session");
exports.protobufPackage = "zitadel.session.v2beta";
function createBaseListSessionsRequest() {
    return { query: undefined, queries: [], sortingColumn: 0 };
}
exports.ListSessionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            object_1.ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.queries) {
            session_1.SearchQuery.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.sortingColumn !== 0) {
            writer.uint32(24).int32(message.sortingColumn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListSessionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = object_1.ListQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.queries.push(session_1.SearchQuery.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sortingColumn = reader.int32();
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
            query: isSet(object.query) ? object_1.ListQuery.fromJSON(object.query) : undefined,
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => session_1.SearchQuery.fromJSON(e)) : [],
            sortingColumn: isSet(object.sortingColumn) ? (0, session_1.sessionFieldNameFromJSON)(object.sortingColumn) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? object_1.ListQuery.toJSON(message.query) : undefined);
        if (message.queries) {
            obj.queries = message.queries.map((e) => e ? session_1.SearchQuery.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        message.sortingColumn !== undefined && (obj.sortingColumn = (0, session_1.sessionFieldNameToJSON)(message.sortingColumn));
        return obj;
    },
    create(base) {
        return exports.ListSessionsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListSessionsRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? object_1.ListQuery.fromPartial(object.query)
            : undefined;
        message.queries = object.queries?.map((e) => session_1.SearchQuery.fromPartial(e)) || [];
        message.sortingColumn = object.sortingColumn ?? 0;
        return message;
    },
};
function createBaseListSessionsResponse() {
    return { details: undefined, sessions: [] };
}
exports.ListSessionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sessions) {
            session_1.Session.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListSessionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sessions.push(session_1.Session.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            sessions: Array.isArray(object?.sessions) ? object.sessions.map((e) => session_1.Session.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.sessions) {
            obj.sessions = message.sessions.map((e) => e ? session_1.Session.toJSON(e) : undefined);
        }
        else {
            obj.sessions = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListSessionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListSessionsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.sessions = object.sessions?.map((e) => session_1.Session.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetSessionRequest() {
    return { sessionId: "", sessionToken: undefined };
}
exports.GetSessionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.sessionToken !== undefined) {
            writer.uint32(18).string(message.sessionToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSessionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sessionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sessionToken = reader.string();
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
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            sessionToken: isSet(object.sessionToken) ? String(object.sessionToken) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.sessionToken !== undefined && (obj.sessionToken = message.sessionToken);
        return obj;
    },
    create(base) {
        return exports.GetSessionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetSessionRequest();
        message.sessionId = object.sessionId ?? "";
        message.sessionToken = object.sessionToken ?? undefined;
        return message;
    },
};
function createBaseGetSessionResponse() {
    return { session: undefined };
}
exports.GetSessionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.session !== undefined) {
            session_1.Session.encode(message.session, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSessionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.session = session_1.Session.decode(reader, reader.uint32());
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
        return { session: isSet(object.session) ? session_1.Session.fromJSON(object.session) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.session !== undefined && (obj.session = message.session ? session_1.Session.toJSON(message.session) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetSessionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetSessionResponse();
        message.session = (object.session !== undefined && object.session !== null)
            ? session_1.Session.fromPartial(object.session)
            : undefined;
        return message;
    },
};
function createBaseCreateSessionRequest() {
    return { checks: undefined, metadata: {}, challenges: undefined, userAgent: undefined, lifetime: undefined };
}
exports.CreateSessionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.checks !== undefined) {
            exports.Checks.encode(message.checks, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.CreateSessionRequest_MetadataEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.challenges !== undefined) {
            challenge_1.RequestChallenges.encode(message.challenges, writer.uint32(26).fork()).ldelim();
        }
        if (message.userAgent !== undefined) {
            session_1.UserAgent.encode(message.userAgent, writer.uint32(34).fork()).ldelim();
        }
        if (message.lifetime !== undefined) {
            duration_1.Duration.encode(message.lifetime, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSessionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.checks = exports.Checks.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    const entry2 = exports.CreateSessionRequest_MetadataEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.metadata[entry2.key] = entry2.value;
                    }
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.challenges = challenge_1.RequestChallenges.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userAgent = session_1.UserAgent.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lifetime = duration_1.Duration.decode(reader, reader.uint32());
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
            checks: isSet(object.checks) ? exports.Checks.fromJSON(object.checks) : undefined,
            metadata: isObject(object.metadata)
                ? Object.entries(object.metadata).reduce((acc, [key, value]) => {
                    acc[key] = Buffer.from(bytesFromBase64(value));
                    return acc;
                }, {})
                : {},
            challenges: isSet(object.challenges) ? challenge_1.RequestChallenges.fromJSON(object.challenges) : undefined,
            userAgent: isSet(object.userAgent) ? session_1.UserAgent.fromJSON(object.userAgent) : undefined,
            lifetime: isSet(object.lifetime) ? duration_1.Duration.fromJSON(object.lifetime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.checks !== undefined && (obj.checks = message.checks ? exports.Checks.toJSON(message.checks) : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = base64FromBytes(v);
            });
        }
        message.challenges !== undefined &&
            (obj.challenges = message.challenges ? challenge_1.RequestChallenges.toJSON(message.challenges) : undefined);
        message.userAgent !== undefined &&
            (obj.userAgent = message.userAgent ? session_1.UserAgent.toJSON(message.userAgent) : undefined);
        message.lifetime !== undefined && (obj.lifetime = message.lifetime ? duration_1.Duration.toJSON(message.lifetime) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateSessionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateSessionRequest();
        message.checks = (object.checks !== undefined && object.checks !== null)
            ? exports.Checks.fromPartial(object.checks)
            : undefined;
        message.metadata = Object.entries(object.metadata ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.challenges = (object.challenges !== undefined && object.challenges !== null)
            ? challenge_1.RequestChallenges.fromPartial(object.challenges)
            : undefined;
        message.userAgent = (object.userAgent !== undefined && object.userAgent !== null)
            ? session_1.UserAgent.fromPartial(object.userAgent)
            : undefined;
        message.lifetime = (object.lifetime !== undefined && object.lifetime !== null)
            ? duration_1.Duration.fromPartial(object.lifetime)
            : undefined;
        return message;
    },
};
function createBaseCreateSessionRequest_MetadataEntry() {
    return { key: "", value: Buffer.alloc(0) };
}
exports.CreateSessionRequest_MetadataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSessionRequest_MetadataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.CreateSessionRequest_MetadataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateSessionRequest_MetadataEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseCreateSessionResponse() {
    return { details: undefined, sessionId: "", sessionToken: "", challenges: undefined };
}
exports.CreateSessionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        if (message.sessionToken !== "") {
            writer.uint32(26).string(message.sessionToken);
        }
        if (message.challenges !== undefined) {
            challenge_1.Challenges.encode(message.challenges, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSessionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sessionId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sessionToken = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.challenges = challenge_1.Challenges.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            sessionToken: isSet(object.sessionToken) ? String(object.sessionToken) : "",
            challenges: isSet(object.challenges) ? challenge_1.Challenges.fromJSON(object.challenges) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.sessionToken !== undefined && (obj.sessionToken = message.sessionToken);
        message.challenges !== undefined &&
            (obj.challenges = message.challenges ? challenge_1.Challenges.toJSON(message.challenges) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateSessionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateSessionResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.sessionId = object.sessionId ?? "";
        message.sessionToken = object.sessionToken ?? "";
        message.challenges = (object.challenges !== undefined && object.challenges !== null)
            ? challenge_1.Challenges.fromPartial(object.challenges)
            : undefined;
        return message;
    },
};
function createBaseSetSessionRequest() {
    return {
        sessionId: "",
        sessionToken: "",
        checks: undefined,
        metadata: {},
        challenges: undefined,
        lifetime: undefined,
    };
}
exports.SetSessionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.sessionToken !== "") {
            writer.uint32(18).string(message.sessionToken);
        }
        if (message.checks !== undefined) {
            exports.Checks.encode(message.checks, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.SetSessionRequest_MetadataEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.challenges !== undefined) {
            challenge_1.RequestChallenges.encode(message.challenges, writer.uint32(42).fork()).ldelim();
        }
        if (message.lifetime !== undefined) {
            duration_1.Duration.encode(message.lifetime, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetSessionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sessionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sessionToken = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.checks = exports.Checks.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    const entry4 = exports.SetSessionRequest_MetadataEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.metadata[entry4.key] = entry4.value;
                    }
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.challenges = challenge_1.RequestChallenges.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.lifetime = duration_1.Duration.decode(reader, reader.uint32());
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
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            sessionToken: isSet(object.sessionToken) ? String(object.sessionToken) : "",
            checks: isSet(object.checks) ? exports.Checks.fromJSON(object.checks) : undefined,
            metadata: isObject(object.metadata)
                ? Object.entries(object.metadata).reduce((acc, [key, value]) => {
                    acc[key] = Buffer.from(bytesFromBase64(value));
                    return acc;
                }, {})
                : {},
            challenges: isSet(object.challenges) ? challenge_1.RequestChallenges.fromJSON(object.challenges) : undefined,
            lifetime: isSet(object.lifetime) ? duration_1.Duration.fromJSON(object.lifetime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.sessionToken !== undefined && (obj.sessionToken = message.sessionToken);
        message.checks !== undefined && (obj.checks = message.checks ? exports.Checks.toJSON(message.checks) : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = base64FromBytes(v);
            });
        }
        message.challenges !== undefined &&
            (obj.challenges = message.challenges ? challenge_1.RequestChallenges.toJSON(message.challenges) : undefined);
        message.lifetime !== undefined && (obj.lifetime = message.lifetime ? duration_1.Duration.toJSON(message.lifetime) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetSessionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetSessionRequest();
        message.sessionId = object.sessionId ?? "";
        message.sessionToken = object.sessionToken ?? "";
        message.checks = (object.checks !== undefined && object.checks !== null)
            ? exports.Checks.fromPartial(object.checks)
            : undefined;
        message.metadata = Object.entries(object.metadata ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.challenges = (object.challenges !== undefined && object.challenges !== null)
            ? challenge_1.RequestChallenges.fromPartial(object.challenges)
            : undefined;
        message.lifetime = (object.lifetime !== undefined && object.lifetime !== null)
            ? duration_1.Duration.fromPartial(object.lifetime)
            : undefined;
        return message;
    },
};
function createBaseSetSessionRequest_MetadataEntry() {
    return { key: "", value: Buffer.alloc(0) };
}
exports.SetSessionRequest_MetadataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetSessionRequest_MetadataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.SetSessionRequest_MetadataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetSessionRequest_MetadataEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseSetSessionResponse() {
    return { details: undefined, sessionToken: "", challenges: undefined };
}
exports.SetSessionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.sessionToken !== "") {
            writer.uint32(18).string(message.sessionToken);
        }
        if (message.challenges !== undefined) {
            challenge_1.Challenges.encode(message.challenges, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetSessionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sessionToken = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.challenges = challenge_1.Challenges.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined,
            sessionToken: isSet(object.sessionToken) ? String(object.sessionToken) : "",
            challenges: isSet(object.challenges) ? challenge_1.Challenges.fromJSON(object.challenges) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.sessionToken !== undefined && (obj.sessionToken = message.sessionToken);
        message.challenges !== undefined &&
            (obj.challenges = message.challenges ? challenge_1.Challenges.toJSON(message.challenges) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetSessionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetSessionResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.sessionToken = object.sessionToken ?? "";
        message.challenges = (object.challenges !== undefined && object.challenges !== null)
            ? challenge_1.Challenges.fromPartial(object.challenges)
            : undefined;
        return message;
    },
};
function createBaseDeleteSessionRequest() {
    return { sessionId: "", sessionToken: undefined };
}
exports.DeleteSessionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.sessionToken !== undefined) {
            writer.uint32(18).string(message.sessionToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteSessionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sessionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sessionToken = reader.string();
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
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            sessionToken: isSet(object.sessionToken) ? String(object.sessionToken) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.sessionToken !== undefined && (obj.sessionToken = message.sessionToken);
        return obj;
    },
    create(base) {
        return exports.DeleteSessionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteSessionRequest();
        message.sessionId = object.sessionId ?? "";
        message.sessionToken = object.sessionToken ?? undefined;
        return message;
    },
};
function createBaseDeleteSessionResponse() {
    return { details: undefined };
}
exports.DeleteSessionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteSessionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.Details.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.Details.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.DeleteSessionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteSessionResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseChecks() {
    return {
        user: undefined,
        password: undefined,
        webAuthN: undefined,
        idpIntent: undefined,
        totp: undefined,
        otpSms: undefined,
        otpEmail: undefined,
    };
}
exports.Checks = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            exports.CheckUser.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.password !== undefined) {
            exports.CheckPassword.encode(message.password, writer.uint32(18).fork()).ldelim();
        }
        if (message.webAuthN !== undefined) {
            exports.CheckWebAuthN.encode(message.webAuthN, writer.uint32(26).fork()).ldelim();
        }
        if (message.idpIntent !== undefined) {
            exports.CheckIDPIntent.encode(message.idpIntent, writer.uint32(34).fork()).ldelim();
        }
        if (message.totp !== undefined) {
            exports.CheckTOTP.encode(message.totp, writer.uint32(42).fork()).ldelim();
        }
        if (message.otpSms !== undefined) {
            exports.CheckOTP.encode(message.otpSms, writer.uint32(50).fork()).ldelim();
        }
        if (message.otpEmail !== undefined) {
            exports.CheckOTP.encode(message.otpEmail, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChecks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = exports.CheckUser.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.password = exports.CheckPassword.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.webAuthN = exports.CheckWebAuthN.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.idpIntent = exports.CheckIDPIntent.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.totp = exports.CheckTOTP.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.otpSms = exports.CheckOTP.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.otpEmail = exports.CheckOTP.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? exports.CheckUser.fromJSON(object.user) : undefined,
            password: isSet(object.password) ? exports.CheckPassword.fromJSON(object.password) : undefined,
            webAuthN: isSet(object.webAuthN) ? exports.CheckWebAuthN.fromJSON(object.webAuthN) : undefined,
            idpIntent: isSet(object.idpIntent) ? exports.CheckIDPIntent.fromJSON(object.idpIntent) : undefined,
            totp: isSet(object.totp) ? exports.CheckTOTP.fromJSON(object.totp) : undefined,
            otpSms: isSet(object.otpSms) ? exports.CheckOTP.fromJSON(object.otpSms) : undefined,
            otpEmail: isSet(object.otpEmail) ? exports.CheckOTP.fromJSON(object.otpEmail) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined && (obj.user = message.user ? exports.CheckUser.toJSON(message.user) : undefined);
        message.password !== undefined &&
            (obj.password = message.password ? exports.CheckPassword.toJSON(message.password) : undefined);
        message.webAuthN !== undefined &&
            (obj.webAuthN = message.webAuthN ? exports.CheckWebAuthN.toJSON(message.webAuthN) : undefined);
        message.idpIntent !== undefined &&
            (obj.idpIntent = message.idpIntent ? exports.CheckIDPIntent.toJSON(message.idpIntent) : undefined);
        message.totp !== undefined && (obj.totp = message.totp ? exports.CheckTOTP.toJSON(message.totp) : undefined);
        message.otpSms !== undefined && (obj.otpSms = message.otpSms ? exports.CheckOTP.toJSON(message.otpSms) : undefined);
        message.otpEmail !== undefined && (obj.otpEmail = message.otpEmail ? exports.CheckOTP.toJSON(message.otpEmail) : undefined);
        return obj;
    },
    create(base) {
        return exports.Checks.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseChecks();
        message.user = (object.user !== undefined && object.user !== null) ? exports.CheckUser.fromPartial(object.user) : undefined;
        message.password = (object.password !== undefined && object.password !== null)
            ? exports.CheckPassword.fromPartial(object.password)
            : undefined;
        message.webAuthN = (object.webAuthN !== undefined && object.webAuthN !== null)
            ? exports.CheckWebAuthN.fromPartial(object.webAuthN)
            : undefined;
        message.idpIntent = (object.idpIntent !== undefined && object.idpIntent !== null)
            ? exports.CheckIDPIntent.fromPartial(object.idpIntent)
            : undefined;
        message.totp = (object.totp !== undefined && object.totp !== null) ? exports.CheckTOTP.fromPartial(object.totp) : undefined;
        message.otpSms = (object.otpSms !== undefined && object.otpSms !== null)
            ? exports.CheckOTP.fromPartial(object.otpSms)
            : undefined;
        message.otpEmail = (object.otpEmail !== undefined && object.otpEmail !== null)
            ? exports.CheckOTP.fromPartial(object.otpEmail)
            : undefined;
        return message;
    },
};
function createBaseCheckUser() {
    return { userId: undefined, loginName: undefined };
}
exports.CheckUser = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== undefined) {
            writer.uint32(10).string(message.userId);
        }
        if (message.loginName !== undefined) {
            writer.uint32(18).string(message.loginName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckUser();
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
                    message.loginName = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : undefined,
            loginName: isSet(object.loginName) ? String(object.loginName) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.loginName !== undefined && (obj.loginName = message.loginName);
        return obj;
    },
    create(base) {
        return exports.CheckUser.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheckUser();
        message.userId = object.userId ?? undefined;
        message.loginName = object.loginName ?? undefined;
        return message;
    },
};
function createBaseCheckPassword() {
    return { password: "" };
}
exports.CheckPassword = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.password !== "") {
            writer.uint32(10).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckPassword();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.password = reader.string();
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
        return { password: isSet(object.password) ? String(object.password) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    create(base) {
        return exports.CheckPassword.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheckPassword();
        message.password = object.password ?? "";
        return message;
    },
};
function createBaseCheckWebAuthN() {
    return { credentialAssertionData: undefined };
}
exports.CheckWebAuthN = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.credentialAssertionData !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.credentialAssertionData), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckWebAuthN();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.credentialAssertionData = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
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
            credentialAssertionData: isObject(object.credentialAssertionData) ? object.credentialAssertionData : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.credentialAssertionData !== undefined && (obj.credentialAssertionData = message.credentialAssertionData);
        return obj;
    },
    create(base) {
        return exports.CheckWebAuthN.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheckWebAuthN();
        message.credentialAssertionData = object.credentialAssertionData ?? undefined;
        return message;
    },
};
function createBaseCheckIDPIntent() {
    return { idpIntentId: "", idpIntentToken: "" };
}
exports.CheckIDPIntent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpIntentId !== "") {
            writer.uint32(10).string(message.idpIntentId);
        }
        if (message.idpIntentToken !== "") {
            writer.uint32(18).string(message.idpIntentToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckIDPIntent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpIntentId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpIntentToken = reader.string();
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
            idpIntentId: isSet(object.idpIntentId) ? String(object.idpIntentId) : "",
            idpIntentToken: isSet(object.idpIntentToken) ? String(object.idpIntentToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.idpIntentId !== undefined && (obj.idpIntentId = message.idpIntentId);
        message.idpIntentToken !== undefined && (obj.idpIntentToken = message.idpIntentToken);
        return obj;
    },
    create(base) {
        return exports.CheckIDPIntent.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheckIDPIntent();
        message.idpIntentId = object.idpIntentId ?? "";
        message.idpIntentToken = object.idpIntentToken ?? "";
        return message;
    },
};
function createBaseCheckTOTP() {
    return { code: "" };
}
exports.CheckTOTP = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckTOTP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.code = reader.string();
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
        return { code: isSet(object.code) ? String(object.code) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        return obj;
    },
    create(base) {
        return exports.CheckTOTP.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheckTOTP();
        message.code = object.code ?? "";
        return message;
    },
};
function createBaseCheckOTP() {
    return { code: "" };
}
exports.CheckOTP = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckOTP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.code = reader.string();
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
        return { code: isSet(object.code) ? String(object.code) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        return obj;
    },
    create(base) {
        return exports.CheckOTP.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheckOTP();
        message.code = object.code ?? "";
        return message;
    },
};
exports.SessionServiceDefinition = {
    name: "SessionService",
    fullName: "zitadel.session.v2beta.SessionService",
    methods: {
        /** Search sessions */
        listSessions: {
            name: "ListSessions",
            requestType: exports.ListSessionsRequest,
            requestStream: false,
            responseType: exports.ListSessionsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            109,
                            18,
                            15,
                            83,
                            101,
                            97,
                            114,
                            99,
                            104,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            26,
                            19,
                            83,
                            101,
                            97,
                            114,
                            99,
                            104,
                            32,
                            102,
                            111,
                            114,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                            74,
                            56,
                            10,
                            3,
                            52,
                            48,
                            48,
                            18,
                            49,
                            10,
                            18,
                            105,
                            110,
                            118,
                            97,
                            108,
                            105,
                            100,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            113,
                            117,
                            101,
                            114,
                            121,
                            18,
                            27,
                            10,
                            25,
                            26,
                            23,
                            35,
                            47,
                            100,
                            101,
                            102,
                            105,
                            110,
                            105,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            114,
                            112,
                            99,
                            83,
                            116,
                            97,
                            116,
                            117,
                            115,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            28,
                            58,
                            1,
                            42,
                            34,
                            23,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            47,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        /** GetSession a session */
        getSession: {
            name: "GetSession",
            requestType: exports.GetSessionRequest,
            requestStream: false,
            responseType: exports.GetSessionResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            118,
                            18,
                            13,
                            71,
                            101,
                            116,
                            32,
                            97,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            26,
                            88,
                            71,
                            101,
                            116,
                            32,
                            97,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            32,
                            97,
                            110,
                            100,
                            32,
                            97,
                            108,
                            108,
                            32,
                            105,
                            116,
                            115,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            108,
                            105,
                            107,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            116,
                            105,
                            109,
                            101,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            111,
                            114,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            31,
                            18,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            47,
                            123,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        /** Create a new session */
        createSession: {
            name: "CreateSession",
            requestType: exports.CreateSessionRequest,
            requestStream: false,
            responseType: exports.CreateSessionResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            138,
                            1,
                            18,
                            20,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            26,
                            101,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            46,
                            32,
                            65,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            44,
                            32,
                            119,
                            104,
                            105,
                            99,
                            104,
                            32,
                            105,
                            115,
                            32,
                            114,
                            101,
                            113,
                            117,
                            105,
                            114,
                            101,
                            100,
                            32,
                            102,
                            111,
                            114,
                            32,
                            102,
                            117,
                            114,
                            116,
                            104,
                            101,
                            114,
                            32,
                            117,
                            112,
                            100,
                            97,
                            116,
                            101,
                            115,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [
                        Buffer.from([
                            22,
                            10,
                            15,
                            10,
                            13,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            18,
                            3,
                            8,
                            201,
                            1,
                        ]),
                    ],
                    578365826: [
                        Buffer.from([
                            21,
                            58,
                            1,
                            42,
                            34,
                            16,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                        ]),
                    ],
                },
            },
        },
        /** Update a session */
        setSession: {
            name: "SetSession",
            requestType: exports.SetSessionRequest,
            requestStream: false,
            responseType: exports.SetSessionResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            91,
                            18,
                            26,
                            85,
                            112,
                            100,
                            97,
                            116,
                            101,
                            32,
                            97,
                            110,
                            32,
                            101,
                            120,
                            105,
                            115,
                            116,
                            105,
                            110,
                            103,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            26,
                            48,
                            85,
                            112,
                            100,
                            97,
                            116,
                            101,
                            32,
                            97,
                            110,
                            32,
                            101,
                            120,
                            105,
                            115,
                            116,
                            105,
                            110,
                            103,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            110,
                            101,
                            119,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            58,
                            1,
                            42,
                            50,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            47,
                            123,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        /** Terminate a session */
        deleteSession: {
            name: "DeleteSession",
            requestType: exports.DeleteSessionRequest,
            requestStream: false,
            responseType: exports.DeleteSessionResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            105,
                            18,
                            29,
                            84,
                            101,
                            114,
                            109,
                            105,
                            110,
                            97,
                            116,
                            101,
                            32,
                            97,
                            110,
                            32,
                            101,
                            120,
                            105,
                            115,
                            116,
                            105,
                            110,
                            103,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            26,
                            59,
                            84,
                            101,
                            114,
                            109,
                            105,
                            110,
                            97,
                            116,
                            101,
                            32,
                            121,
                            111,
                            117,
                            114,
                            32,
                            111,
                            119,
                            110,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            32,
                            111,
                            114,
                            32,
                            105,
                            102,
                            32,
                            103,
                            114,
                            97,
                            110,
                            116,
                            101,
                            100,
                            32,
                            97,
                            110,
                            121,
                            32,
                            111,
                            116,
                            104,
                            101,
                            114,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            58,
                            1,
                            42,
                            42,
                            29,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            47,
                            123,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
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
