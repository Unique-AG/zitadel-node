"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsServiceDefinition = exports.GetGeneralSettingsResponse = exports.GetGeneralSettingsRequest = exports.GetActiveIdentityProvidersResponse = exports.GetActiveIdentityProvidersRequest = exports.GetLockoutSettingsResponse = exports.GetLockoutSettingsRequest = exports.GetLegalAndSupportSettingsResponse = exports.GetLegalAndSupportSettingsRequest = exports.GetDomainSettingsResponse = exports.GetDomainSettingsRequest = exports.GetBrandingSettingsResponse = exports.GetBrandingSettingsRequest = exports.GetPasswordComplexitySettingsResponse = exports.GetPasswordComplexitySettingsRequest = exports.GetLoginSettingsResponse = exports.GetLoginSettingsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const object_1 = require("../../object/v2beta/object");
const branding_settings_1 = require("./branding_settings");
const domain_settings_1 = require("./domain_settings");
const legal_settings_1 = require("./legal_settings");
const lockout_settings_1 = require("./lockout_settings");
const login_settings_1 = require("./login_settings");
const password_settings_1 = require("./password_settings");
exports.protobufPackage = "zitadel.settings.v2beta";
function createBaseGetLoginSettingsRequest() {
    return { ctx: undefined };
}
exports.GetLoginSettingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctx !== undefined) {
            object_1.RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLoginSettingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ctx = object_1.RequestContext.decode(reader, reader.uint32());
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
        return { ctx: isSet(object.ctx) ? object_1.RequestContext.fromJSON(object.ctx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.ctx !== undefined && (obj.ctx = message.ctx ? object_1.RequestContext.toJSON(message.ctx) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetLoginSettingsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetLoginSettingsRequest();
        message.ctx = (object.ctx !== undefined && object.ctx !== null)
            ? object_1.RequestContext.fromPartial(object.ctx)
            : undefined;
        return message;
    },
};
function createBaseGetLoginSettingsResponse() {
    return { details: undefined, settings: undefined };
}
exports.GetLoginSettingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            login_settings_1.LoginSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLoginSettingsResponse();
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
                    message.settings = login_settings_1.LoginSettings.decode(reader, reader.uint32());
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
            settings: isSet(object.settings) ? login_settings_1.LoginSettings.fromJSON(object.settings) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.settings !== undefined &&
            (obj.settings = message.settings ? login_settings_1.LoginSettings.toJSON(message.settings) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetLoginSettingsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetLoginSettingsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.settings = (object.settings !== undefined && object.settings !== null)
            ? login_settings_1.LoginSettings.fromPartial(object.settings)
            : undefined;
        return message;
    },
};
function createBaseGetPasswordComplexitySettingsRequest() {
    return { ctx: undefined };
}
exports.GetPasswordComplexitySettingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctx !== undefined) {
            object_1.RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPasswordComplexitySettingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ctx = object_1.RequestContext.decode(reader, reader.uint32());
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
        return { ctx: isSet(object.ctx) ? object_1.RequestContext.fromJSON(object.ctx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.ctx !== undefined && (obj.ctx = message.ctx ? object_1.RequestContext.toJSON(message.ctx) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetPasswordComplexitySettingsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPasswordComplexitySettingsRequest();
        message.ctx = (object.ctx !== undefined && object.ctx !== null)
            ? object_1.RequestContext.fromPartial(object.ctx)
            : undefined;
        return message;
    },
};
function createBaseGetPasswordComplexitySettingsResponse() {
    return { details: undefined, settings: undefined };
}
exports.GetPasswordComplexitySettingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            password_settings_1.PasswordComplexitySettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPasswordComplexitySettingsResponse();
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
                    message.settings = password_settings_1.PasswordComplexitySettings.decode(reader, reader.uint32());
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
            settings: isSet(object.settings) ? password_settings_1.PasswordComplexitySettings.fromJSON(object.settings) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.settings !== undefined &&
            (obj.settings = message.settings ? password_settings_1.PasswordComplexitySettings.toJSON(message.settings) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetPasswordComplexitySettingsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPasswordComplexitySettingsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.settings = (object.settings !== undefined && object.settings !== null)
            ? password_settings_1.PasswordComplexitySettings.fromPartial(object.settings)
            : undefined;
        return message;
    },
};
function createBaseGetBrandingSettingsRequest() {
    return { ctx: undefined };
}
exports.GetBrandingSettingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctx !== undefined) {
            object_1.RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBrandingSettingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ctx = object_1.RequestContext.decode(reader, reader.uint32());
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
        return { ctx: isSet(object.ctx) ? object_1.RequestContext.fromJSON(object.ctx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.ctx !== undefined && (obj.ctx = message.ctx ? object_1.RequestContext.toJSON(message.ctx) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetBrandingSettingsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetBrandingSettingsRequest();
        message.ctx = (object.ctx !== undefined && object.ctx !== null)
            ? object_1.RequestContext.fromPartial(object.ctx)
            : undefined;
        return message;
    },
};
function createBaseGetBrandingSettingsResponse() {
    return { details: undefined, settings: undefined };
}
exports.GetBrandingSettingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            branding_settings_1.BrandingSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBrandingSettingsResponse();
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
                    message.settings = branding_settings_1.BrandingSettings.decode(reader, reader.uint32());
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
            settings: isSet(object.settings) ? branding_settings_1.BrandingSettings.fromJSON(object.settings) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.settings !== undefined &&
            (obj.settings = message.settings ? branding_settings_1.BrandingSettings.toJSON(message.settings) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetBrandingSettingsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetBrandingSettingsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.settings = (object.settings !== undefined && object.settings !== null)
            ? branding_settings_1.BrandingSettings.fromPartial(object.settings)
            : undefined;
        return message;
    },
};
function createBaseGetDomainSettingsRequest() {
    return { ctx: undefined };
}
exports.GetDomainSettingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctx !== undefined) {
            object_1.RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDomainSettingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ctx = object_1.RequestContext.decode(reader, reader.uint32());
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
        return { ctx: isSet(object.ctx) ? object_1.RequestContext.fromJSON(object.ctx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.ctx !== undefined && (obj.ctx = message.ctx ? object_1.RequestContext.toJSON(message.ctx) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetDomainSettingsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetDomainSettingsRequest();
        message.ctx = (object.ctx !== undefined && object.ctx !== null)
            ? object_1.RequestContext.fromPartial(object.ctx)
            : undefined;
        return message;
    },
};
function createBaseGetDomainSettingsResponse() {
    return { details: undefined, settings: undefined };
}
exports.GetDomainSettingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            domain_settings_1.DomainSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDomainSettingsResponse();
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
                    message.settings = domain_settings_1.DomainSettings.decode(reader, reader.uint32());
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
            settings: isSet(object.settings) ? domain_settings_1.DomainSettings.fromJSON(object.settings) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.settings !== undefined &&
            (obj.settings = message.settings ? domain_settings_1.DomainSettings.toJSON(message.settings) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetDomainSettingsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetDomainSettingsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.settings = (object.settings !== undefined && object.settings !== null)
            ? domain_settings_1.DomainSettings.fromPartial(object.settings)
            : undefined;
        return message;
    },
};
function createBaseGetLegalAndSupportSettingsRequest() {
    return { ctx: undefined };
}
exports.GetLegalAndSupportSettingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctx !== undefined) {
            object_1.RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLegalAndSupportSettingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ctx = object_1.RequestContext.decode(reader, reader.uint32());
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
        return { ctx: isSet(object.ctx) ? object_1.RequestContext.fromJSON(object.ctx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.ctx !== undefined && (obj.ctx = message.ctx ? object_1.RequestContext.toJSON(message.ctx) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetLegalAndSupportSettingsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetLegalAndSupportSettingsRequest();
        message.ctx = (object.ctx !== undefined && object.ctx !== null)
            ? object_1.RequestContext.fromPartial(object.ctx)
            : undefined;
        return message;
    },
};
function createBaseGetLegalAndSupportSettingsResponse() {
    return { details: undefined, settings: undefined };
}
exports.GetLegalAndSupportSettingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            legal_settings_1.LegalAndSupportSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLegalAndSupportSettingsResponse();
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
                    message.settings = legal_settings_1.LegalAndSupportSettings.decode(reader, reader.uint32());
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
            settings: isSet(object.settings) ? legal_settings_1.LegalAndSupportSettings.fromJSON(object.settings) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.settings !== undefined &&
            (obj.settings = message.settings ? legal_settings_1.LegalAndSupportSettings.toJSON(message.settings) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetLegalAndSupportSettingsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetLegalAndSupportSettingsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.settings = (object.settings !== undefined && object.settings !== null)
            ? legal_settings_1.LegalAndSupportSettings.fromPartial(object.settings)
            : undefined;
        return message;
    },
};
function createBaseGetLockoutSettingsRequest() {
    return { ctx: undefined };
}
exports.GetLockoutSettingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctx !== undefined) {
            object_1.RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLockoutSettingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ctx = object_1.RequestContext.decode(reader, reader.uint32());
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
        return { ctx: isSet(object.ctx) ? object_1.RequestContext.fromJSON(object.ctx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.ctx !== undefined && (obj.ctx = message.ctx ? object_1.RequestContext.toJSON(message.ctx) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetLockoutSettingsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetLockoutSettingsRequest();
        message.ctx = (object.ctx !== undefined && object.ctx !== null)
            ? object_1.RequestContext.fromPartial(object.ctx)
            : undefined;
        return message;
    },
};
function createBaseGetLockoutSettingsResponse() {
    return { details: undefined, settings: undefined };
}
exports.GetLockoutSettingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.Details.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            lockout_settings_1.LockoutSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLockoutSettingsResponse();
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
                    message.settings = lockout_settings_1.LockoutSettings.decode(reader, reader.uint32());
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
            settings: isSet(object.settings) ? lockout_settings_1.LockoutSettings.fromJSON(object.settings) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.Details.toJSON(message.details) : undefined);
        message.settings !== undefined &&
            (obj.settings = message.settings ? lockout_settings_1.LockoutSettings.toJSON(message.settings) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetLockoutSettingsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetLockoutSettingsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.Details.fromPartial(object.details)
            : undefined;
        message.settings = (object.settings !== undefined && object.settings !== null)
            ? lockout_settings_1.LockoutSettings.fromPartial(object.settings)
            : undefined;
        return message;
    },
};
function createBaseGetActiveIdentityProvidersRequest() {
    return { ctx: undefined };
}
exports.GetActiveIdentityProvidersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctx !== undefined) {
            object_1.RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetActiveIdentityProvidersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ctx = object_1.RequestContext.decode(reader, reader.uint32());
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
        return { ctx: isSet(object.ctx) ? object_1.RequestContext.fromJSON(object.ctx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.ctx !== undefined && (obj.ctx = message.ctx ? object_1.RequestContext.toJSON(message.ctx) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetActiveIdentityProvidersRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetActiveIdentityProvidersRequest();
        message.ctx = (object.ctx !== undefined && object.ctx !== null)
            ? object_1.RequestContext.fromPartial(object.ctx)
            : undefined;
        return message;
    },
};
function createBaseGetActiveIdentityProvidersResponse() {
    return { details: undefined, identityProviders: [] };
}
exports.GetActiveIdentityProvidersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.identityProviders) {
            login_settings_1.IdentityProvider.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetActiveIdentityProvidersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.identityProviders.push(login_settings_1.IdentityProvider.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            identityProviders: Array.isArray(object?.identityProviders)
                ? object.identityProviders.map((e) => login_settings_1.IdentityProvider.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.identityProviders) {
            obj.identityProviders = message.identityProviders.map((e) => e ? login_settings_1.IdentityProvider.toJSON(e) : undefined);
        }
        else {
            obj.identityProviders = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetActiveIdentityProvidersResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetActiveIdentityProvidersResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.identityProviders = object.identityProviders?.map((e) => login_settings_1.IdentityProvider.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetGeneralSettingsRequest() {
    return {};
}
exports.GetGeneralSettingsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetGeneralSettingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetGeneralSettingsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetGeneralSettingsRequest();
        return message;
    },
};
function createBaseGetGeneralSettingsResponse() {
    return { defaultOrgId: "", defaultLanguage: "", supportedLanguages: [] };
}
exports.GetGeneralSettingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultOrgId !== "") {
            writer.uint32(10).string(message.defaultOrgId);
        }
        if (message.defaultLanguage !== "") {
            writer.uint32(18).string(message.defaultLanguage);
        }
        for (const v of message.supportedLanguages) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetGeneralSettingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.defaultOrgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.defaultLanguage = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.supportedLanguages.push(reader.string());
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
            defaultOrgId: isSet(object.defaultOrgId) ? String(object.defaultOrgId) : "",
            defaultLanguage: isSet(object.defaultLanguage) ? String(object.defaultLanguage) : "",
            supportedLanguages: Array.isArray(object?.supportedLanguages)
                ? object.supportedLanguages.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.defaultOrgId !== undefined && (obj.defaultOrgId = message.defaultOrgId);
        message.defaultLanguage !== undefined && (obj.defaultLanguage = message.defaultLanguage);
        if (message.supportedLanguages) {
            obj.supportedLanguages = message.supportedLanguages.map((e) => e);
        }
        else {
            obj.supportedLanguages = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetGeneralSettingsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetGeneralSettingsResponse();
        message.defaultOrgId = object.defaultOrgId ?? "";
        message.defaultLanguage = object.defaultLanguage ?? "";
        message.supportedLanguages = object.supportedLanguages?.map((e) => e) || [];
        return message;
    },
};
exports.SettingsServiceDefinition = {
    name: "SettingsService",
    fullName: "zitadel.settings.v2beta.SettingsService",
    methods: {
        /** Get basic information over the instance */
        getGeneralSettings: {
            name: "GetGeneralSettings",
            requestType: exports.GetGeneralSettingsRequest,
            requestStream: false,
            responseType: exports.GetGeneralSettingsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            126,
                            18,
                            39,
                            71,
                            101,
                            116,
                            32,
                            98,
                            97,
                            115,
                            105,
                            99,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            118,
                            101,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            26,
                            70,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            98,
                            97,
                            115,
                            105,
                            99,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            110,
                            116,
                            101,
                            120,
                            116,
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
                    400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
                    578365826: [
                        Buffer.from([18, 18, 16, 47, 118, 50, 98, 101, 116, 97, 47, 115, 101, 116, 116, 105, 110, 103, 115]),
                    ],
                },
            },
        },
        /** Get the login settings */
        getLoginSettings: {
            name: "GetLoginSettings",
            requestType: exports.GetLoginSettingsRequest,
            requestStream: false,
            responseType: exports.GetLoginSettingsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            84,
                            18,
                            22,
                            71,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            111,
                            103,
                            105,
                            110,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            26,
                            45,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
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
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            110,
                            116,
                            101,
                            120,
                            116,
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
                    400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
                    578365826: [
                        Buffer.from([
                            24,
                            18,
                            22,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            47,
                            108,
                            111,
                            103,
                            105,
                            110,
                        ]),
                    ],
                },
            },
        },
        /** Get the current active identity providers */
        getActiveIdentityProviders: {
            name: "GetActiveIdentityProviders",
            requestType: exports.GetActiveIdentityProvidersRequest,
            requestStream: false,
            responseType: exports.GetActiveIdentityProvidersResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            128,
                            1,
                            18,
                            41,
                            71,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            117,
                            114,
                            114,
                            101,
                            110,
                            116,
                            32,
                            97,
                            99,
                            116,
                            105,
                            118,
                            101,
                            32,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            115,
                            26,
                            70,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            117,
                            114,
                            114,
                            101,
                            110,
                            116,
                            32,
                            97,
                            99,
                            116,
                            105,
                            118,
                            101,
                            32,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
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
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            110,
                            116,
                            101,
                            120,
                            116,
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
                    400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
                    578365826: [
                        Buffer.from([
                            29,
                            18,
                            27,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            47,
                            108,
                            111,
                            103,
                            105,
                            110,
                            47,
                            105,
                            100,
                            112,
                            115,
                        ]),
                    ],
                },
            },
        },
        /** Get the password complexity settings */
        getPasswordComplexitySettings: {
            name: "GetPasswordComplexitySettings",
            requestType: exports.GetPasswordComplexitySettingsRequest,
            requestStream: false,
            responseType: exports.GetPasswordComplexitySettingsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            118,
                            18,
                            36,
                            71,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            99,
                            111,
                            109,
                            112,
                            108,
                            101,
                            120,
                            105,
                            116,
                            121,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            26,
                            65,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            99,
                            111,
                            109,
                            112,
                            108,
                            101,
                            120,
                            105,
                            116,
                            121,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
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
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            110,
                            116,
                            101,
                            120,
                            116,
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
                    400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
                    578365826: [
                        Buffer.from([
                            38,
                            18,
                            36,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            47,
                            99,
                            111,
                            109,
                            112,
                            108,
                            101,
                            120,
                            105,
                            116,
                            121,
                        ]),
                    ],
                },
            },
        },
        /** Get the current active branding settings */
        getBrandingSettings: {
            name: "GetBrandingSettings",
            requestType: exports.GetBrandingSettingsRequest,
            requestStream: false,
            responseType: exports.GetBrandingSettingsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            126,
                            18,
                            40,
                            71,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            117,
                            114,
                            114,
                            101,
                            110,
                            116,
                            32,
                            97,
                            99,
                            116,
                            105,
                            118,
                            101,
                            32,
                            98,
                            114,
                            97,
                            110,
                            100,
                            105,
                            110,
                            103,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            26,
                            69,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            117,
                            114,
                            114,
                            101,
                            110,
                            116,
                            32,
                            97,
                            99,
                            116,
                            105,
                            118,
                            101,
                            32,
                            98,
                            114,
                            97,
                            110,
                            100,
                            105,
                            110,
                            103,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
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
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            110,
                            116,
                            101,
                            120,
                            116,
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
                    400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
                    578365826: [
                        Buffer.from([
                            27,
                            18,
                            25,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            47,
                            98,
                            114,
                            97,
                            110,
                            100,
                            105,
                            110,
                            103,
                        ]),
                    ],
                },
            },
        },
        /** Get the domain settings */
        getDomainSettings: {
            name: "GetDomainSettings",
            requestType: exports.GetDomainSettingsRequest,
            requestStream: false,
            responseType: exports.GetDomainSettingsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            92,
                            18,
                            23,
                            71,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            26,
                            52,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
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
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            110,
                            116,
                            101,
                            120,
                            116,
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
                    400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
                    578365826: [
                        Buffer.from([
                            25,
                            18,
                            23,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            47,
                            100,
                            111,
                            109,
                            97,
                            105,
                            110,
                        ]),
                    ],
                },
            },
        },
        /** Get the legal and support settings */
        getLegalAndSupportSettings: {
            name: "GetLegalAndSupportSettings",
            requestType: exports.GetLegalAndSupportSettingsRequest,
            requestStream: false,
            responseType: exports.GetLegalAndSupportSettingsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            102,
                            18,
                            34,
                            71,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            101,
                            103,
                            97,
                            108,
                            32,
                            97,
                            110,
                            100,
                            32,
                            115,
                            117,
                            112,
                            112,
                            111,
                            114,
                            116,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            26,
                            51,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            101,
                            103,
                            97,
                            108,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
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
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            110,
                            116,
                            101,
                            120,
                            116,
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
                    400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
                    578365826: [
                        Buffer.from([
                            32,
                            18,
                            30,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            47,
                            108,
                            101,
                            103,
                            97,
                            108,
                            95,
                            115,
                            117,
                            112,
                            112,
                            111,
                            114,
                            116,
                        ]),
                    ],
                },
            },
        },
        /** Get the lockout settings */
        getLockoutSettings: {
            name: "GetLockoutSettings",
            requestType: exports.GetLockoutSettingsRequest,
            requestStream: false,
            responseType: exports.GetLockoutSettingsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            135,
                            1,
                            18,
                            24,
                            71,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            111,
                            99,
                            107,
                            111,
                            117,
                            116,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            26,
                            94,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            111,
                            99,
                            107,
                            111,
                            117,
                            116,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
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
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                            32,
                            99,
                            111,
                            110,
                            116,
                            101,
                            120,
                            116,
                            44,
                            32,
                            119,
                            104,
                            105,
                            99,
                            104,
                            32,
                            100,
                            101,
                            102,
                            105,
                            110,
                            101,
                            32,
                            119,
                            104,
                            101,
                            110,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            108,
                            111,
                            99,
                            107,
                            101,
                            100,
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
                    400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
                    578365826: [
                        Buffer.from([
                            26,
                            18,
                            24,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            47,
                            108,
                            111,
                            99,
                            107,
                            111,
                            117,
                            116,
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
