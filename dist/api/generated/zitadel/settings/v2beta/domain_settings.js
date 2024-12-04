"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/settings/v2beta/domain_settings.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainSettings = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const settings_js_1 = require("./settings.js");
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
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.loginNameIncludesDomain !== false) {
            writer.uint32(8).bool(message.loginNameIncludesDomain);
        }
        if (message.requireOrgDomainVerification !== false) {
            writer.uint32(16).bool(message.requireOrgDomainVerification);
        }
        if (message.smtpSenderAddressMatchesInstanceDomain !== false) {
            writer.uint32(24).bool(message.smtpSenderAddressMatchesInstanceDomain);
        }
        if (message.resourceOwnerType !== 0) {
            writer.uint32(48).int32(message.resourceOwnerType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDomainSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.loginNameIncludesDomain = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.requireOrgDomainVerification = reader.bool();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.smtpSenderAddressMatchesInstanceDomain = reader.bool();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.resourceOwnerType = reader.int32();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            loginNameIncludesDomain: isSet(object.loginNameIncludesDomain)
                ? globalThis.Boolean(object.loginNameIncludesDomain)
                : false,
            requireOrgDomainVerification: isSet(object.requireOrgDomainVerification)
                ? globalThis.Boolean(object.requireOrgDomainVerification)
                : false,
            smtpSenderAddressMatchesInstanceDomain: isSet(object.smtpSenderAddressMatchesInstanceDomain)
                ? globalThis.Boolean(object.smtpSenderAddressMatchesInstanceDomain)
                : false,
            resourceOwnerType: isSet(object.resourceOwnerType) ? (0, settings_js_1.resourceOwnerTypeFromJSON)(object.resourceOwnerType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.loginNameIncludesDomain !== false) {
            obj.loginNameIncludesDomain = message.loginNameIncludesDomain;
        }
        if (message.requireOrgDomainVerification !== false) {
            obj.requireOrgDomainVerification = message.requireOrgDomainVerification;
        }
        if (message.smtpSenderAddressMatchesInstanceDomain !== false) {
            obj.smtpSenderAddressMatchesInstanceDomain = message.smtpSenderAddressMatchesInstanceDomain;
        }
        if (message.resourceOwnerType !== 0) {
            obj.resourceOwnerType = (0, settings_js_1.resourceOwnerTypeToJSON)(message.resourceOwnerType);
        }
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
function isSet(value) {
    return value !== null && value !== undefined;
}
