"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetMetadataEntry = exports.SetHumanProfile = exports.User = exports.genderToJSON = exports.genderFromJSON = exports.Gender = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "zitadel.user.v2beta";
var Gender;
(function (Gender) {
    Gender[Gender["GENDER_UNSPECIFIED"] = 0] = "GENDER_UNSPECIFIED";
    Gender[Gender["GENDER_FEMALE"] = 1] = "GENDER_FEMALE";
    Gender[Gender["GENDER_MALE"] = 2] = "GENDER_MALE";
    Gender[Gender["GENDER_DIVERSE"] = 3] = "GENDER_DIVERSE";
    Gender[Gender["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Gender || (exports.Gender = Gender = {}));
function genderFromJSON(object) {
    switch (object) {
        case 0:
        case "GENDER_UNSPECIFIED":
            return Gender.GENDER_UNSPECIFIED;
        case 1:
        case "GENDER_FEMALE":
            return Gender.GENDER_FEMALE;
        case 2:
        case "GENDER_MALE":
            return Gender.GENDER_MALE;
        case 3:
        case "GENDER_DIVERSE":
            return Gender.GENDER_DIVERSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Gender.UNRECOGNIZED;
    }
}
exports.genderFromJSON = genderFromJSON;
function genderToJSON(object) {
    switch (object) {
        case Gender.GENDER_UNSPECIFIED:
            return "GENDER_UNSPECIFIED";
        case Gender.GENDER_FEMALE:
            return "GENDER_FEMALE";
        case Gender.GENDER_MALE:
            return "GENDER_MALE";
        case Gender.GENDER_DIVERSE:
            return "GENDER_DIVERSE";
        case Gender.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.genderToJSON = genderToJSON;
function createBaseUser() {
    return { id: "" };
}
exports.User = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
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
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.User.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUser();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseSetHumanProfile() {
    return {
        givenName: "",
        familyName: "",
        nickName: undefined,
        displayName: undefined,
        preferredLanguage: undefined,
        gender: undefined,
    };
}
exports.SetHumanProfile = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.givenName !== "") {
            writer.uint32(10).string(message.givenName);
        }
        if (message.familyName !== "") {
            writer.uint32(18).string(message.familyName);
        }
        if (message.nickName !== undefined) {
            writer.uint32(26).string(message.nickName);
        }
        if (message.displayName !== undefined) {
            writer.uint32(34).string(message.displayName);
        }
        if (message.preferredLanguage !== undefined) {
            writer.uint32(42).string(message.preferredLanguage);
        }
        if (message.gender !== undefined) {
            writer.uint32(48).int32(message.gender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetHumanProfile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.givenName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.familyName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nickName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.preferredLanguage = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.gender = reader.int32();
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
            givenName: isSet(object.givenName) ? String(object.givenName) : "",
            familyName: isSet(object.familyName) ? String(object.familyName) : "",
            nickName: isSet(object.nickName) ? String(object.nickName) : undefined,
            displayName: isSet(object.displayName) ? String(object.displayName) : undefined,
            preferredLanguage: isSet(object.preferredLanguage) ? String(object.preferredLanguage) : undefined,
            gender: isSet(object.gender) ? genderFromJSON(object.gender) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.givenName !== undefined && (obj.givenName = message.givenName);
        message.familyName !== undefined && (obj.familyName = message.familyName);
        message.nickName !== undefined && (obj.nickName = message.nickName);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.preferredLanguage !== undefined && (obj.preferredLanguage = message.preferredLanguage);
        message.gender !== undefined &&
            (obj.gender = message.gender !== undefined ? genderToJSON(message.gender) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetHumanProfile.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetHumanProfile();
        message.givenName = object.givenName ?? "";
        message.familyName = object.familyName ?? "";
        message.nickName = object.nickName ?? undefined;
        message.displayName = object.displayName ?? undefined;
        message.preferredLanguage = object.preferredLanguage ?? undefined;
        message.gender = object.gender ?? undefined;
        return message;
    },
};
function createBaseSetMetadataEntry() {
    return { key: "", value: Buffer.alloc(0) };
}
exports.SetMetadataEntry = {
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
        const message = createBaseSetMetadataEntry();
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
        return exports.SetMetadataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetMetadataEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? Buffer.alloc(0);
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
function isSet(value) {
    return value !== null && value !== undefined;
}
