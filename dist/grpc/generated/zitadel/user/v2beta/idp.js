"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDPLink = exports.IDPSAMLAccessInformation = exports.IDPLDAPAccessInformation = exports.IDPOAuthAccessInformation = exports.IDPInformation = exports.IDPIntent = exports.RedirectURLs = exports.LDAPCredentials = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("../../../google/protobuf/struct");
exports.protobufPackage = "zitadel.user.v2beta";
function createBaseLDAPCredentials() {
    return { username: "", password: "" };
}
exports.LDAPCredentials = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLDAPCredentials();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
        return {
            username: isSet(object.username) ? String(object.username) : "",
            password: isSet(object.password) ? String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    create(base) {
        return exports.LDAPCredentials.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLDAPCredentials();
        message.username = object.username ?? "";
        message.password = object.password ?? "";
        return message;
    },
};
function createBaseRedirectURLs() {
    return { successUrl: "", failureUrl: "" };
}
exports.RedirectURLs = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.successUrl !== "") {
            writer.uint32(10).string(message.successUrl);
        }
        if (message.failureUrl !== "") {
            writer.uint32(18).string(message.failureUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedirectURLs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.successUrl = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.failureUrl = reader.string();
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
            successUrl: isSet(object.successUrl) ? String(object.successUrl) : "",
            failureUrl: isSet(object.failureUrl) ? String(object.failureUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.successUrl !== undefined && (obj.successUrl = message.successUrl);
        message.failureUrl !== undefined && (obj.failureUrl = message.failureUrl);
        return obj;
    },
    create(base) {
        return exports.RedirectURLs.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRedirectURLs();
        message.successUrl = object.successUrl ?? "";
        message.failureUrl = object.failureUrl ?? "";
        return message;
    },
};
function createBaseIDPIntent() {
    return { idpIntentId: "", idpIntentToken: "", userId: "" };
}
exports.IDPIntent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpIntentId !== "") {
            writer.uint32(10).string(message.idpIntentId);
        }
        if (message.idpIntentToken !== "") {
            writer.uint32(18).string(message.idpIntentToken);
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPIntent();
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
                case 3:
                    if (tag !== 26) {
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
        return {
            idpIntentId: isSet(object.idpIntentId) ? String(object.idpIntentId) : "",
            idpIntentToken: isSet(object.idpIntentToken) ? String(object.idpIntentToken) : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.idpIntentId !== undefined && (obj.idpIntentId = message.idpIntentId);
        message.idpIntentToken !== undefined && (obj.idpIntentToken = message.idpIntentToken);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.IDPIntent.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPIntent();
        message.idpIntentId = object.idpIntentId ?? "";
        message.idpIntentToken = object.idpIntentToken ?? "";
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseIDPInformation() {
    return {
        oauth: undefined,
        ldap: undefined,
        saml: undefined,
        idpId: "",
        userId: "",
        userName: "",
        rawInformation: undefined,
    };
}
exports.IDPInformation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.oauth !== undefined) {
            exports.IDPOAuthAccessInformation.encode(message.oauth, writer.uint32(10).fork()).ldelim();
        }
        if (message.ldap !== undefined) {
            exports.IDPLDAPAccessInformation.encode(message.ldap, writer.uint32(50).fork()).ldelim();
        }
        if (message.saml !== undefined) {
            exports.IDPSAMLAccessInformation.encode(message.saml, writer.uint32(58).fork()).ldelim();
        }
        if (message.idpId !== "") {
            writer.uint32(18).string(message.idpId);
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        if (message.userName !== "") {
            writer.uint32(34).string(message.userName);
        }
        if (message.rawInformation !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.rawInformation), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPInformation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.oauth = exports.IDPOAuthAccessInformation.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.ldap = exports.IDPLDAPAccessInformation.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.saml = exports.IDPSAMLAccessInformation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.rawInformation = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
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
            oauth: isSet(object.oauth) ? exports.IDPOAuthAccessInformation.fromJSON(object.oauth) : undefined,
            ldap: isSet(object.ldap) ? exports.IDPLDAPAccessInformation.fromJSON(object.ldap) : undefined,
            saml: isSet(object.saml) ? exports.IDPSAMLAccessInformation.fromJSON(object.saml) : undefined,
            idpId: isSet(object.idpId) ? String(object.idpId) : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
            userName: isSet(object.userName) ? String(object.userName) : "",
            rawInformation: isObject(object.rawInformation) ? object.rawInformation : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.oauth !== undefined &&
            (obj.oauth = message.oauth ? exports.IDPOAuthAccessInformation.toJSON(message.oauth) : undefined);
        message.ldap !== undefined && (obj.ldap = message.ldap ? exports.IDPLDAPAccessInformation.toJSON(message.ldap) : undefined);
        message.saml !== undefined && (obj.saml = message.saml ? exports.IDPSAMLAccessInformation.toJSON(message.saml) : undefined);
        message.idpId !== undefined && (obj.idpId = message.idpId);
        message.userId !== undefined && (obj.userId = message.userId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.rawInformation !== undefined && (obj.rawInformation = message.rawInformation);
        return obj;
    },
    create(base) {
        return exports.IDPInformation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPInformation();
        message.oauth = (object.oauth !== undefined && object.oauth !== null)
            ? exports.IDPOAuthAccessInformation.fromPartial(object.oauth)
            : undefined;
        message.ldap = (object.ldap !== undefined && object.ldap !== null)
            ? exports.IDPLDAPAccessInformation.fromPartial(object.ldap)
            : undefined;
        message.saml = (object.saml !== undefined && object.saml !== null)
            ? exports.IDPSAMLAccessInformation.fromPartial(object.saml)
            : undefined;
        message.idpId = object.idpId ?? "";
        message.userId = object.userId ?? "";
        message.userName = object.userName ?? "";
        message.rawInformation = object.rawInformation ?? undefined;
        return message;
    },
};
function createBaseIDPOAuthAccessInformation() {
    return { accessToken: "", idToken: undefined };
}
exports.IDPOAuthAccessInformation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        if (message.idToken !== undefined) {
            writer.uint32(18).string(message.idToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPOAuthAccessInformation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accessToken = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idToken = reader.string();
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
            accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
            idToken: isSet(object.idToken) ? String(object.idToken) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessToken !== undefined && (obj.accessToken = message.accessToken);
        message.idToken !== undefined && (obj.idToken = message.idToken);
        return obj;
    },
    create(base) {
        return exports.IDPOAuthAccessInformation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPOAuthAccessInformation();
        message.accessToken = object.accessToken ?? "";
        message.idToken = object.idToken ?? undefined;
        return message;
    },
};
function createBaseIDPLDAPAccessInformation() {
    return { attributes: undefined };
}
exports.IDPLDAPAccessInformation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.attributes !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.attributes), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPLDAPAccessInformation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.attributes = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
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
        return { attributes: isObject(object.attributes) ? object.attributes : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.attributes !== undefined && (obj.attributes = message.attributes);
        return obj;
    },
    create(base) {
        return exports.IDPLDAPAccessInformation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPLDAPAccessInformation();
        message.attributes = object.attributes ?? undefined;
        return message;
    },
};
function createBaseIDPSAMLAccessInformation() {
    return { assertion: Buffer.alloc(0) };
}
exports.IDPSAMLAccessInformation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.assertion.length !== 0) {
            writer.uint32(10).bytes(message.assertion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPSAMLAccessInformation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.assertion = reader.bytes();
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
        return { assertion: isSet(object.assertion) ? Buffer.from(bytesFromBase64(object.assertion)) : Buffer.alloc(0) };
    },
    toJSON(message) {
        const obj = {};
        message.assertion !== undefined &&
            (obj.assertion = base64FromBytes(message.assertion !== undefined ? message.assertion : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.IDPSAMLAccessInformation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPSAMLAccessInformation();
        message.assertion = object.assertion ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseIDPLink() {
    return { idpId: "", userId: "", userName: "" };
}
exports.IDPLink = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        if (message.userName !== "") {
            writer.uint32(26).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userName = reader.string();
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
            idpId: isSet(object.idpId) ? String(object.idpId) : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
            userName: isSet(object.userName) ? String(object.userName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.idpId !== undefined && (obj.idpId = message.idpId);
        message.userId !== undefined && (obj.userId = message.userId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    create(base) {
        return exports.IDPLink.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIDPLink();
        message.idpId = object.idpId ?? "";
        message.userId = object.userId ?? "";
        message.userName = object.userName ?? "";
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
