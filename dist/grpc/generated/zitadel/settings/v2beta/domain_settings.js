"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainSettings = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const settings_1 = require("./settings");
exports.protobufPackage = "zitadel.settings.v2beta";
function createBaseDomainSettings() {
    return {
        loginNameIncludesDomain: false,
        requireOrgDomainVerification: false,
        smtpSenderAddressMatchesInstanceDomain: false,
        resourceOwnerType: 0,
    };
}
exports.DomainSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loginNameIncludesDomain === true) {
            writer.uint32(8).bool(message.loginNameIncludesDomain);
        }
        if (message.requireOrgDomainVerification === true) {
            writer.uint32(16).bool(message.requireOrgDomainVerification);
        }
        if (message.smtpSenderAddressMatchesInstanceDomain === true) {
            writer.uint32(24).bool(message.smtpSenderAddressMatchesInstanceDomain);
        }
        if (message.resourceOwnerType !== 0) {
            writer.uint32(48).int32(message.resourceOwnerType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomainSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.loginNameIncludesDomain = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.requireOrgDomainVerification = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.smtpSenderAddressMatchesInstanceDomain = reader.bool();
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
            loginNameIncludesDomain: isSet(object.loginNameIncludesDomain) ? Boolean(object.loginNameIncludesDomain) : false,
            requireOrgDomainVerification: isSet(object.requireOrgDomainVerification)
                ? Boolean(object.requireOrgDomainVerification)
                : false,
            smtpSenderAddressMatchesInstanceDomain: isSet(object.smtpSenderAddressMatchesInstanceDomain)
                ? Boolean(object.smtpSenderAddressMatchesInstanceDomain)
                : false,
            resourceOwnerType: isSet(object.resourceOwnerType) ? (0, settings_1.resourceOwnerTypeFromJSON)(object.resourceOwnerType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.loginNameIncludesDomain !== undefined && (obj.loginNameIncludesDomain = message.loginNameIncludesDomain);
        message.requireOrgDomainVerification !== undefined &&
            (obj.requireOrgDomainVerification = message.requireOrgDomainVerification);
        message.smtpSenderAddressMatchesInstanceDomain !== undefined &&
            (obj.smtpSenderAddressMatchesInstanceDomain = message.smtpSenderAddressMatchesInstanceDomain);
        message.resourceOwnerType !== undefined &&
            (obj.resourceOwnerType = (0, settings_1.resourceOwnerTypeToJSON)(message.resourceOwnerType));
        return obj;
    },
    create(base) {
        return exports.DomainSettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDomainSettings();
        message.loginNameIncludesDomain = object.loginNameIncludesDomain ?? false;
        message.requireOrgDomainVerification = object.requireOrgDomainVerification ?? false;
        message.smtpSenderAddressMatchesInstanceDomain = object.smtpSenderAddressMatchesInstanceDomain ?? false;
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
