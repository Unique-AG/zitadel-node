"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockoutSettings = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const settings_1 = require("./settings");
exports.protobufPackage = "zitadel.settings.v2beta";
function createBaseLockoutSettings() {
    return { maxPasswordAttempts: long_1.default.UZERO, resourceOwnerType: 0 };
}
exports.LockoutSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.maxPasswordAttempts.isZero()) {
            writer.uint32(8).uint64(message.maxPasswordAttempts);
        }
        if (message.resourceOwnerType !== 0) {
            writer.uint32(16).int32(message.resourceOwnerType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockoutSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.maxPasswordAttempts = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
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
            maxPasswordAttempts: isSet(object.maxPasswordAttempts) ? long_1.default.fromValue(object.maxPasswordAttempts) : long_1.default.UZERO,
            resourceOwnerType: isSet(object.resourceOwnerType) ? (0, settings_1.resourceOwnerTypeFromJSON)(object.resourceOwnerType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxPasswordAttempts !== undefined &&
            (obj.maxPasswordAttempts = (message.maxPasswordAttempts || long_1.default.UZERO).toString());
        message.resourceOwnerType !== undefined &&
            (obj.resourceOwnerType = (0, settings_1.resourceOwnerTypeToJSON)(message.resourceOwnerType));
        return obj;
    },
    create(base) {
        return exports.LockoutSettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLockoutSettings();
        message.maxPasswordAttempts = (object.maxPasswordAttempts !== undefined && object.maxPasswordAttempts !== null)
            ? long_1.default.fromValue(object.maxPasswordAttempts)
            : long_1.default.UZERO;
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
