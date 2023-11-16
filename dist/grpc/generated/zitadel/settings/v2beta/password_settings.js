"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordComplexitySettings = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const settings_1 = require("./settings");
exports.protobufPackage = "zitadel.settings.v2beta";
function createBasePasswordComplexitySettings() {
    return {
        minLength: long_1.default.UZERO,
        requiresUppercase: false,
        requiresLowercase: false,
        requiresNumber: false,
        requiresSymbol: false,
        resourceOwnerType: 0,
    };
}
exports.PasswordComplexitySettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.minLength.isZero()) {
            writer.uint32(8).uint64(message.minLength);
        }
        if (message.requiresUppercase === true) {
            writer.uint32(16).bool(message.requiresUppercase);
        }
        if (message.requiresLowercase === true) {
            writer.uint32(24).bool(message.requiresLowercase);
        }
        if (message.requiresNumber === true) {
            writer.uint32(32).bool(message.requiresNumber);
        }
        if (message.requiresSymbol === true) {
            writer.uint32(40).bool(message.requiresSymbol);
        }
        if (message.resourceOwnerType !== 0) {
            writer.uint32(48).int32(message.resourceOwnerType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordComplexitySettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.minLength = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.requiresUppercase = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.requiresLowercase = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.requiresNumber = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.requiresSymbol = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.resourceOwnerType = reader.int32();
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
            minLength: isSet(object.minLength) ? long_1.default.fromValue(object.minLength) : long_1.default.UZERO,
            requiresUppercase: isSet(object.requiresUppercase) ? Boolean(object.requiresUppercase) : false,
            requiresLowercase: isSet(object.requiresLowercase) ? Boolean(object.requiresLowercase) : false,
            requiresNumber: isSet(object.requiresNumber) ? Boolean(object.requiresNumber) : false,
            requiresSymbol: isSet(object.requiresSymbol) ? Boolean(object.requiresSymbol) : false,
            resourceOwnerType: isSet(object.resourceOwnerType) ? (0, settings_1.resourceOwnerTypeFromJSON)(object.resourceOwnerType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.minLength !== undefined && (obj.minLength = (message.minLength || long_1.default.UZERO).toString());
        message.requiresUppercase !== undefined && (obj.requiresUppercase = message.requiresUppercase);
        message.requiresLowercase !== undefined && (obj.requiresLowercase = message.requiresLowercase);
        message.requiresNumber !== undefined && (obj.requiresNumber = message.requiresNumber);
        message.requiresSymbol !== undefined && (obj.requiresSymbol = message.requiresSymbol);
        message.resourceOwnerType !== undefined &&
            (obj.resourceOwnerType = (0, settings_1.resourceOwnerTypeToJSON)(message.resourceOwnerType));
        return obj;
    },
    create(base) {
        return exports.PasswordComplexitySettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordComplexitySettings();
        message.minLength = (object.minLength !== undefined && object.minLength !== null)
            ? long_1.default.fromValue(object.minLength)
            : long_1.default.UZERO;
        message.requiresUppercase = object.requiresUppercase ?? false;
        message.requiresLowercase = object.requiresLowercase ?? false;
        message.requiresNumber = object.requiresNumber ?? false;
        message.requiresSymbol = object.requiresSymbol ?? false;
        message.resourceOwnerType = object.resourceOwnerType ?? 0;
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
