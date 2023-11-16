"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIDQuery = exports.EmailQuery = exports.LastNameQuery = exports.FirstNameQuery = exports.SearchQuery = exports.Member = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const object_1 = require("./object");
const user_1 = require("./user");
exports.protobufPackage = "zitadel.member.v1";
function createBaseMember() {
    return {
        userId: "",
        details: undefined,
        roles: [],
        preferredLoginName: "",
        email: "",
        firstName: "",
        lastName: "",
        displayName: "",
        avatarUrl: "",
        userType: 0,
    };
}
exports.Member = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.roles) {
            writer.uint32(26).string(v);
        }
        if (message.preferredLoginName !== "") {
            writer.uint32(34).string(message.preferredLoginName);
        }
        if (message.email !== "") {
            writer.uint32(42).string(message.email);
        }
        if (message.firstName !== "") {
            writer.uint32(50).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(58).string(message.lastName);
        }
        if (message.displayName !== "") {
            writer.uint32(66).string(message.displayName);
        }
        if (message.avatarUrl !== "") {
            writer.uint32(74).string(message.avatarUrl);
        }
        if (message.userType !== 0) {
            writer.uint32(80).int32(message.userType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMember();
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
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.roles.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.preferredLoginName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.avatarUrl = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.userType = reader.int32();
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            roles: Array.isArray(object?.roles) ? object.roles.map((e) => String(e)) : [],
            preferredLoginName: isSet(object.preferredLoginName) ? String(object.preferredLoginName) : "",
            email: isSet(object.email) ? String(object.email) : "",
            firstName: isSet(object.firstName) ? String(object.firstName) : "",
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
            userType: isSet(object.userType) ? (0, user_1.typeFromJSON)(object.userType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        if (message.roles) {
            obj.roles = message.roles.map((e) => e);
        }
        else {
            obj.roles = [];
        }
        message.preferredLoginName !== undefined && (obj.preferredLoginName = message.preferredLoginName);
        message.email !== undefined && (obj.email = message.email);
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
        message.userType !== undefined && (obj.userType = (0, user_1.typeToJSON)(message.userType));
        return obj;
    },
    create(base) {
        return exports.Member.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMember();
        message.userId = object.userId ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.roles = object.roles?.map((e) => e) || [];
        message.preferredLoginName = object.preferredLoginName ?? "";
        message.email = object.email ?? "";
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.displayName = object.displayName ?? "";
        message.avatarUrl = object.avatarUrl ?? "";
        message.userType = object.userType ?? 0;
        return message;
    },
};
function createBaseSearchQuery() {
    return { firstNameQuery: undefined, lastNameQuery: undefined, emailQuery: undefined, userIdQuery: undefined };
}
exports.SearchQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.firstNameQuery !== undefined) {
            exports.FirstNameQuery.encode(message.firstNameQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastNameQuery !== undefined) {
            exports.LastNameQuery.encode(message.lastNameQuery, writer.uint32(18).fork()).ldelim();
        }
        if (message.emailQuery !== undefined) {
            exports.EmailQuery.encode(message.emailQuery, writer.uint32(26).fork()).ldelim();
        }
        if (message.userIdQuery !== undefined) {
            exports.UserIDQuery.encode(message.userIdQuery, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.firstNameQuery = exports.FirstNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lastNameQuery = exports.LastNameQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.emailQuery = exports.EmailQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userIdQuery = exports.UserIDQuery.decode(reader, reader.uint32());
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
            firstNameQuery: isSet(object.firstNameQuery) ? exports.FirstNameQuery.fromJSON(object.firstNameQuery) : undefined,
            lastNameQuery: isSet(object.lastNameQuery) ? exports.LastNameQuery.fromJSON(object.lastNameQuery) : undefined,
            emailQuery: isSet(object.emailQuery) ? exports.EmailQuery.fromJSON(object.emailQuery) : undefined,
            userIdQuery: isSet(object.userIdQuery) ? exports.UserIDQuery.fromJSON(object.userIdQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.firstNameQuery !== undefined &&
            (obj.firstNameQuery = message.firstNameQuery ? exports.FirstNameQuery.toJSON(message.firstNameQuery) : undefined);
        message.lastNameQuery !== undefined &&
            (obj.lastNameQuery = message.lastNameQuery ? exports.LastNameQuery.toJSON(message.lastNameQuery) : undefined);
        message.emailQuery !== undefined &&
            (obj.emailQuery = message.emailQuery ? exports.EmailQuery.toJSON(message.emailQuery) : undefined);
        message.userIdQuery !== undefined &&
            (obj.userIdQuery = message.userIdQuery ? exports.UserIDQuery.toJSON(message.userIdQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.SearchQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSearchQuery();
        message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
            ? exports.FirstNameQuery.fromPartial(object.firstNameQuery)
            : undefined;
        message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
            ? exports.LastNameQuery.fromPartial(object.lastNameQuery)
            : undefined;
        message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
            ? exports.EmailQuery.fromPartial(object.emailQuery)
            : undefined;
        message.userIdQuery = (object.userIdQuery !== undefined && object.userIdQuery !== null)
            ? exports.UserIDQuery.fromPartial(object.userIdQuery)
            : undefined;
        return message;
    },
};
function createBaseFirstNameQuery() {
    return { firstName: "", method: 0 };
}
exports.FirstNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFirstNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            firstName: isSet(object.firstName) ? String(object.firstName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.FirstNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFirstNameQuery();
        message.firstName = object.firstName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseLastNameQuery() {
    return { lastName: "", method: 0 };
}
exports.LastNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lastName !== "") {
            writer.uint32(10).string(message.lastName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.LastNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLastNameQuery();
        message.lastName = object.lastName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseEmailQuery() {
    return { email: "", method: 0 };
}
exports.EmailQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            email: isSet(object.email) ? String(object.email) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.EmailQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEmailQuery();
        message.email = object.email ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserIDQuery() {
    return { userId: "" };
}
exports.UserIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.UserIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserIDQuery();
        message.userId = object.userId ?? "";
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
