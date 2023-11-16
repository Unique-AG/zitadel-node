"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OIDCServiceDefinition = exports.CreateCallbackResponse = exports.Session = exports.CreateCallbackRequest = exports.GetAuthRequestResponse = exports.GetAuthRequestRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const object_1 = require("../../object/v2beta/object");
const authorization_1 = require("./authorization");
exports.protobufPackage = "zitadel.oidc.v2beta";
function createBaseGetAuthRequestRequest() {
    return { authRequestId: "" };
}
exports.GetAuthRequestRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authRequestId !== "") {
            writer.uint32(10).string(message.authRequestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthRequestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authRequestId = reader.string();
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
        return { authRequestId: isSet(object.authRequestId) ? String(object.authRequestId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.authRequestId !== undefined && (obj.authRequestId = message.authRequestId);
        return obj;
    },
    create(base) {
        return exports.GetAuthRequestRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetAuthRequestRequest();
        message.authRequestId = object.authRequestId ?? "";
        return message;
    },
};
function createBaseGetAuthRequestResponse() {
    return { authRequest: undefined };
}
exports.GetAuthRequestResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authRequest !== undefined) {
            authorization_1.AuthRequest.encode(message.authRequest, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authRequest = authorization_1.AuthRequest.decode(reader, reader.uint32());
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
        return { authRequest: isSet(object.authRequest) ? authorization_1.AuthRequest.fromJSON(object.authRequest) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.authRequest !== undefined &&
            (obj.authRequest = message.authRequest ? authorization_1.AuthRequest.toJSON(message.authRequest) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetAuthRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetAuthRequestResponse();
        message.authRequest = (object.authRequest !== undefined && object.authRequest !== null)
            ? authorization_1.AuthRequest.fromPartial(object.authRequest)
            : undefined;
        return message;
    },
};
function createBaseCreateCallbackRequest() {
    return { authRequestId: "", session: undefined, error: undefined };
}
exports.CreateCallbackRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authRequestId !== "") {
            writer.uint32(10).string(message.authRequestId);
        }
        if (message.session !== undefined) {
            exports.Session.encode(message.session, writer.uint32(18).fork()).ldelim();
        }
        if (message.error !== undefined) {
            authorization_1.AuthorizationError.encode(message.error, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateCallbackRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authRequestId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.session = exports.Session.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.error = authorization_1.AuthorizationError.decode(reader, reader.uint32());
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
            authRequestId: isSet(object.authRequestId) ? String(object.authRequestId) : "",
            session: isSet(object.session) ? exports.Session.fromJSON(object.session) : undefined,
            error: isSet(object.error) ? authorization_1.AuthorizationError.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authRequestId !== undefined && (obj.authRequestId = message.authRequestId);
        message.session !== undefined && (obj.session = message.session ? exports.Session.toJSON(message.session) : undefined);
        message.error !== undefined && (obj.error = message.error ? authorization_1.AuthorizationError.toJSON(message.error) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateCallbackRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateCallbackRequest();
        message.authRequestId = object.authRequestId ?? "";
        message.session = (object.session !== undefined && object.session !== null)
            ? exports.Session.fromPartial(object.session)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? authorization_1.AuthorizationError.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBaseSession() {
    return { sessionId: "", sessionToken: "" };
}
exports.Session = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.sessionToken !== "") {
            writer.uint32(18).string(message.sessionToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession();
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
            sessionToken: isSet(object.sessionToken) ? String(object.sessionToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.sessionToken !== undefined && (obj.sessionToken = message.sessionToken);
        return obj;
    },
    create(base) {
        return exports.Session.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSession();
        message.sessionId = object.sessionId ?? "";
        message.sessionToken = object.sessionToken ?? "";
        return message;
    },
};
function createBaseCreateCallbackResponse() {
    return { details: undefined, callbackUrl: "" };
}
exports.CreateCallbackResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.callbackUrl !== "") {
            writer.uint32(18).string(message.callbackUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateCallbackResponse();
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
                    message.callbackUrl = reader.string();
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
            callbackUrl: isSet(object.callbackUrl) ? String(object.callbackUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.callbackUrl !== undefined && (obj.callbackUrl = message.callbackUrl);
        return obj;
    },
    create(base) {
        return exports.CreateCallbackResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateCallbackResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.callbackUrl = object.callbackUrl ?? "";
        return message;
    },
};
exports.OIDCServiceDefinition = {
    name: "OIDCService",
    fullName: "zitadel.oidc.v2beta.OIDCService",
    methods: {
        getAuthRequest: {
            name: "GetAuthRequest",
            requestType: exports.GetAuthRequestRequest,
            requestStream: false,
            responseType: exports.GetAuthRequestResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            184,
                            1,
                            18,
                            29,
                            71,
                            101,
                            116,
                            32,
                            79,
                            73,
                            68,
                            67,
                            32,
                            65,
                            117,
                            116,
                            104,
                            32,
                            82,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            32,
                            100,
                            101,
                            116,
                            97,
                            105,
                            108,
                            115,
                            26,
                            137,
                            1,
                            71,
                            101,
                            116,
                            32,
                            79,
                            73,
                            68,
                            67,
                            32,
                            65,
                            117,
                            116,
                            104,
                            32,
                            82,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            32,
                            100,
                            101,
                            116,
                            97,
                            105,
                            108,
                            115,
                            32,
                            98,
                            121,
                            32,
                            73,
                            68,
                            44,
                            32,
                            111,
                            98,
                            116,
                            97,
                            105,
                            110,
                            101,
                            100,
                            32,
                            102,
                            114,
                            111,
                            109,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            100,
                            105,
                            114,
                            101,
                            99,
                            116,
                            32,
                            85,
                            82,
                            76,
                            46,
                            32,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            100,
                            101,
                            116,
                            97,
                            105,
                            108,
                            115,
                            32,
                            116,
                            104,
                            97,
                            116,
                            32,
                            97,
                            114,
                            101,
                            32,
                            112,
                            97,
                            114,
                            115,
                            101,
                            100,
                            32,
                            102,
                            114,
                            111,
                            109,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            112,
                            112,
                            108,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            39,
                            115,
                            32,
                            65,
                            117,
                            116,
                            104,
                            32,
                            82,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
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
                            46,
                            18,
                            44,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            111,
                            105,
                            100,
                            99,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            115,
                            47,
                            123,
                            97,
                            117,
                            116,
                            104,
                            95,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        createCallback: {
            name: "CreateCallback",
            requestType: exports.CreateCallbackRequest,
            requestStream: false,
            responseType: exports.CreateCallbackResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            253,
                            2,
                            18,
                            50,
                            70,
                            105,
                            110,
                            97,
                            108,
                            105,
                            122,
                            101,
                            32,
                            97,
                            110,
                            32,
                            65,
                            117,
                            116,
                            104,
                            32,
                            82,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            32,
                            97,
                            110,
                            100,
                            32,
                            103,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            97,
                            108,
                            108,
                            98,
                            97,
                            99,
                            107,
                            32,
                            85,
                            82,
                            76,
                            46,
                            26,
                            185,
                            2,
                            70,
                            105,
                            110,
                            97,
                            108,
                            105,
                            122,
                            101,
                            32,
                            97,
                            110,
                            32,
                            65,
                            117,
                            116,
                            104,
                            32,
                            82,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            32,
                            97,
                            110,
                            100,
                            32,
                            103,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            97,
                            108,
                            108,
                            98,
                            97,
                            99,
                            107,
                            32,
                            85,
                            82,
                            76,
                            32,
                            102,
                            111,
                            114,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            32,
                            111,
                            114,
                            32,
                            102,
                            97,
                            105,
                            108,
                            117,
                            114,
                            101,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            109,
                            117,
                            115,
                            116,
                            32,
                            98,
                            101,
                            32,
                            114,
                            101,
                            100,
                            105,
                            114,
                            101,
                            99,
                            116,
                            101,
                            100,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            85,
                            82,
                            76,
                            32,
                            105,
                            110,
                            32,
                            111,
                            114,
                            100,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            112,
                            112,
                            108,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            97,
                            98,
                            111,
                            117,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            32,
                            111,
                            114,
                            32,
                            102,
                            97,
                            105,
                            108,
                            117,
                            114,
                            101,
                            46,
                            32,
                            79,
                            110,
                            32,
                            115,
                            117,
                            99,
                            99,
                            101,
                            115,
                            115,
                            44,
                            32,
                            116,
                            104,
                            101,
                            32,
                            85,
                            82,
                            76,
                            32,
                            99,
                            111,
                            110,
                            116,
                            97,
                            105,
                            110,
                            115,
                            32,
                            100,
                            101,
                            116,
                            97,
                            105,
                            108,
                            115,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            112,
                            112,
                            108,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            116,
                            111,
                            32,
                            111,
                            98,
                            116,
                            97,
                            105,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            115,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            109,
                            101,
                            116,
                            104,
                            111,
                            100,
                            32,
                            99,
                            97,
                            110,
                            32,
                            111,
                            110,
                            108,
                            121,
                            32,
                            98,
                            101,
                            32,
                            99,
                            97,
                            108,
                            108,
                            101,
                            100,
                            32,
                            111,
                            110,
                            99,
                            101,
                            32,
                            102,
                            111,
                            114,
                            32,
                            97,
                            110,
                            32,
                            65,
                            117,
                            116,
                            104,
                            32,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
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
                            49,
                            58,
                            1,
                            42,
                            34,
                            44,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            111,
                            105,
                            100,
                            99,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            115,
                            47,
                            123,
                            97,
                            117,
                            116,
                            104,
                            95,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
