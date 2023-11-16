"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalAndSupportSettings = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const settings_1 = require("./settings");
exports.protobufPackage = "zitadel.settings.v2beta";
function createBaseLegalAndSupportSettings() {
    return { tosLink: "", privacyPolicyLink: "", helpLink: "", supportEmail: "", resourceOwnerType: 0 };
}
exports.LegalAndSupportSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tosLink !== "") {
            writer.uint32(10).string(message.tosLink);
        }
        if (message.privacyPolicyLink !== "") {
            writer.uint32(18).string(message.privacyPolicyLink);
        }
        if (message.helpLink !== "") {
            writer.uint32(26).string(message.helpLink);
        }
        if (message.supportEmail !== "") {
            writer.uint32(34).string(message.supportEmail);
        }
        if (message.resourceOwnerType !== 0) {
            writer.uint32(40).int32(message.resourceOwnerType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegalAndSupportSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tosLink = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.privacyPolicyLink = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.helpLink = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.supportEmail = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
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
            tosLink: isSet(object.tosLink) ? String(object.tosLink) : "",
            privacyPolicyLink: isSet(object.privacyPolicyLink) ? String(object.privacyPolicyLink) : "",
            helpLink: isSet(object.helpLink) ? String(object.helpLink) : "",
            supportEmail: isSet(object.supportEmail) ? String(object.supportEmail) : "",
            resourceOwnerType: isSet(object.resourceOwnerType) ? (0, settings_1.resourceOwnerTypeFromJSON)(object.resourceOwnerType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tosLink !== undefined && (obj.tosLink = message.tosLink);
        message.privacyPolicyLink !== undefined && (obj.privacyPolicyLink = message.privacyPolicyLink);
        message.helpLink !== undefined && (obj.helpLink = message.helpLink);
        message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
        message.resourceOwnerType !== undefined &&
            (obj.resourceOwnerType = (0, settings_1.resourceOwnerTypeToJSON)(message.resourceOwnerType));
        return obj;
    },
    create(base) {
        return exports.LegalAndSupportSettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLegalAndSupportSettings();
        message.tosLink = object.tosLink ?? "";
        message.privacyPolicyLink = object.privacyPolicyLink ?? "";
        message.helpLink = object.helpLink ?? "";
        message.supportEmail = object.supportEmail ?? "";
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
