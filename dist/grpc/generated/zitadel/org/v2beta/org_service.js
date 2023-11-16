"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationServiceDefinition = exports.AddOrganizationResponse_CreatedAdmin = exports.AddOrganizationResponse = exports.AddOrganizationRequest_Admin = exports.AddOrganizationRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const object_1 = require("../../object/v2beta/object");
const user_service_1 = require("../../user/v2beta/user_service");
exports.protobufPackage = "zitadel.org.v2beta";
function createBaseAddOrganizationRequest() {
    return { name: "", admins: [] };
}
exports.AddOrganizationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.admins) {
            exports.AddOrganizationRequest_Admin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOrganizationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.admins.push(exports.AddOrganizationRequest_Admin.decode(reader, reader.uint32()));
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
            name: isSet(object.name) ? String(object.name) : "",
            admins: Array.isArray(object?.admins)
                ? object.admins.map((e) => exports.AddOrganizationRequest_Admin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.admins) {
            obj.admins = message.admins.map((e) => e ? exports.AddOrganizationRequest_Admin.toJSON(e) : undefined);
        }
        else {
            obj.admins = [];
        }
        return obj;
    },
    create(base) {
        return exports.AddOrganizationRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddOrganizationRequest();
        message.name = object.name ?? "";
        message.admins = object.admins?.map((e) => exports.AddOrganizationRequest_Admin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAddOrganizationRequest_Admin() {
    return { userId: undefined, human: undefined, roles: [] };
}
exports.AddOrganizationRequest_Admin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== undefined) {
            writer.uint32(10).string(message.userId);
        }
        if (message.human !== undefined) {
            user_service_1.AddHumanUserRequest.encode(message.human, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.roles) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOrganizationRequest_Admin();
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
                    message.human = user_service_1.AddHumanUserRequest.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.roles.push(reader.string());
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
            human: isSet(object.human) ? user_service_1.AddHumanUserRequest.fromJSON(object.human) : undefined,
            roles: Array.isArray(object?.roles) ? object.roles.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.human !== undefined && (obj.human = message.human ? user_service_1.AddHumanUserRequest.toJSON(message.human) : undefined);
        if (message.roles) {
            obj.roles = message.roles.map((e) => e);
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    create(base) {
        return exports.AddOrganizationRequest_Admin.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddOrganizationRequest_Admin();
        message.userId = object.userId ?? undefined;
        message.human = (object.human !== undefined && object.human !== null)
            ? user_service_1.AddHumanUserRequest.fromPartial(object.human)
            : undefined;
        message.roles = object.roles?.map((e) => e) || [];
        return message;
    },
};
function createBaseAddOrganizationResponse() {
    return { details: undefined, organizationId: "", createdAdmins: [] };
}
exports.AddOrganizationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.organizationId !== "") {
            writer.uint32(18).string(message.organizationId);
        }
        for (const v of message.createdAdmins) {
            exports.AddOrganizationResponse_CreatedAdmin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOrganizationResponse();
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
                    message.organizationId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.createdAdmins.push(exports.AddOrganizationResponse_CreatedAdmin.decode(reader, reader.uint32()));
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
            organizationId: isSet(object.organizationId) ? String(object.organizationId) : "",
            createdAdmins: Array.isArray(object?.createdAdmins)
                ? object.createdAdmins.map((e) => exports.AddOrganizationResponse_CreatedAdmin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        if (message.createdAdmins) {
            obj.createdAdmins = message.createdAdmins.map((e) => e ? exports.AddOrganizationResponse_CreatedAdmin.toJSON(e) : undefined);
        }
        else {
            obj.createdAdmins = [];
        }
        return obj;
    },
    create(base) {
        return exports.AddOrganizationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddOrganizationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.organizationId = object.organizationId ?? "";
        message.createdAdmins = object.createdAdmins?.map((e) => exports.AddOrganizationResponse_CreatedAdmin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAddOrganizationResponse_CreatedAdmin() {
    return { userId: "", emailCode: undefined, phoneCode: undefined };
}
exports.AddOrganizationResponse_CreatedAdmin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.emailCode !== undefined) {
            writer.uint32(18).string(message.emailCode);
        }
        if (message.phoneCode !== undefined) {
            writer.uint32(26).string(message.phoneCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOrganizationResponse_CreatedAdmin();
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
                    message.emailCode = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.phoneCode = reader.string();
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
            emailCode: isSet(object.emailCode) ? String(object.emailCode) : undefined,
            phoneCode: isSet(object.phoneCode) ? String(object.phoneCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.emailCode !== undefined && (obj.emailCode = message.emailCode);
        message.phoneCode !== undefined && (obj.phoneCode = message.phoneCode);
        return obj;
    },
    create(base) {
        return exports.AddOrganizationResponse_CreatedAdmin.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddOrganizationResponse_CreatedAdmin();
        message.userId = object.userId ?? "";
        message.emailCode = object.emailCode ?? undefined;
        message.phoneCode = object.phoneCode ?? undefined;
        return message;
    },
};
exports.OrganizationServiceDefinition = {
    name: "OrganizationService",
    fullName: "zitadel.org.v2beta.OrganizationService",
    methods: {
        /** Create a new organization and grant the user(s) permission to manage it */
        addOrganization: {
            name: "AddOrganization",
            requestType: exports.AddOrganizationRequest,
            requestStream: false,
            responseType: exports.AddOrganizationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            180,
                            1,
                            18,
                            22,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            32,
                            97,
                            110,
                            32,
                            79,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            26,
                            140,
                            1,
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
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            97,
                            110,
                            32,
                            97,
                            100,
                            109,
                            105,
                            110,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            118,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            102,
                            32,
                            110,
                            111,
                            32,
                            115,
                            112,
                            101,
                            99,
                            105,
                            102,
                            105,
                            99,
                            32,
                            114,
                            111,
                            108,
                            101,
                            115,
                            32,
                            97,
                            114,
                            101,
                            32,
                            115,
                            101,
                            110,
                            116,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            115,
                            44,
                            32,
                            116,
                            104,
                            101,
                            121,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            103,
                            114,
                            97,
                            110,
                            116,
                            101,
                            100,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            111,
                            108,
                            101,
                            32,
                            79,
                            82,
                            71,
                            95,
                            79,
                            87,
                            78,
                            69,
                            82,
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
                    400010: [Buffer.from([19, 10, 12, 10, 10, 111, 114, 103, 46, 99, 114, 101, 97, 116, 101, 18, 3, 8, 201, 1])],
                    578365826: [
                        Buffer.from([
                            26,
                            58,
                            1,
                            42,
                            34,
                            21,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
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
