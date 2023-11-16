"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnPasswordResetCode = exports.SendPasswordResetLink = exports.HashedPassword = exports.Password = exports.notificationTypeToJSON = exports.notificationTypeFromJSON = exports.NotificationType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "zitadel.user.v2beta";
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["NOTIFICATION_TYPE_Unspecified"] = 0] = "NOTIFICATION_TYPE_Unspecified";
    NotificationType[NotificationType["NOTIFICATION_TYPE_Email"] = 1] = "NOTIFICATION_TYPE_Email";
    NotificationType[NotificationType["NOTIFICATION_TYPE_SMS"] = 2] = "NOTIFICATION_TYPE_SMS";
    NotificationType[NotificationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
function notificationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NOTIFICATION_TYPE_Unspecified":
            return NotificationType.NOTIFICATION_TYPE_Unspecified;
        case 1:
        case "NOTIFICATION_TYPE_Email":
            return NotificationType.NOTIFICATION_TYPE_Email;
        case 2:
        case "NOTIFICATION_TYPE_SMS":
            return NotificationType.NOTIFICATION_TYPE_SMS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NotificationType.UNRECOGNIZED;
    }
}
exports.notificationTypeFromJSON = notificationTypeFromJSON;
function notificationTypeToJSON(object) {
    switch (object) {
        case NotificationType.NOTIFICATION_TYPE_Unspecified:
            return "NOTIFICATION_TYPE_Unspecified";
        case NotificationType.NOTIFICATION_TYPE_Email:
            return "NOTIFICATION_TYPE_Email";
        case NotificationType.NOTIFICATION_TYPE_SMS:
            return "NOTIFICATION_TYPE_SMS";
        case NotificationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.notificationTypeToJSON = notificationTypeToJSON;
function createBasePassword() {
    return { password: "", changeRequired: false };
}
exports.Password = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.password !== "") {
            writer.uint32(10).string(message.password);
        }
        if (message.changeRequired === true) {
            writer.uint32(16).bool(message.changeRequired);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePassword();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.changeRequired = reader.bool();
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
            password: isSet(object.password) ? String(object.password) : "",
            changeRequired: isSet(object.changeRequired) ? Boolean(object.changeRequired) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.password !== undefined && (obj.password = message.password);
        message.changeRequired !== undefined && (obj.changeRequired = message.changeRequired);
        return obj;
    },
    create(base) {
        return exports.Password.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePassword();
        message.password = object.password ?? "";
        message.changeRequired = object.changeRequired ?? false;
        return message;
    },
};
function createBaseHashedPassword() {
    return { hash: "", changeRequired: false };
}
exports.HashedPassword = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.changeRequired === true) {
            writer.uint32(16).bool(message.changeRequired);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedPassword();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.changeRequired = reader.bool();
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
            hash: isSet(object.hash) ? String(object.hash) : "",
            changeRequired: isSet(object.changeRequired) ? Boolean(object.changeRequired) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        message.changeRequired !== undefined && (obj.changeRequired = message.changeRequired);
        return obj;
    },
    create(base) {
        return exports.HashedPassword.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHashedPassword();
        message.hash = object.hash ?? "";
        message.changeRequired = object.changeRequired ?? false;
        return message;
    },
};
function createBaseSendPasswordResetLink() {
    return { notificationType: 0, urlTemplate: undefined };
}
exports.SendPasswordResetLink = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.notificationType !== 0) {
            writer.uint32(8).int32(message.notificationType);
        }
        if (message.urlTemplate !== undefined) {
            writer.uint32(18).string(message.urlTemplate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendPasswordResetLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.notificationType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.urlTemplate = reader.string();
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
            notificationType: isSet(object.notificationType) ? notificationTypeFromJSON(object.notificationType) : 0,
            urlTemplate: isSet(object.urlTemplate) ? String(object.urlTemplate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.notificationType !== undefined && (obj.notificationType = notificationTypeToJSON(message.notificationType));
        message.urlTemplate !== undefined && (obj.urlTemplate = message.urlTemplate);
        return obj;
    },
    create(base) {
        return exports.SendPasswordResetLink.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSendPasswordResetLink();
        message.notificationType = object.notificationType ?? 0;
        message.urlTemplate = object.urlTemplate ?? undefined;
        return message;
    },
};
function createBaseReturnPasswordResetCode() {
    return {};
}
exports.ReturnPasswordResetCode = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReturnPasswordResetCode();
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
        return exports.ReturnPasswordResetCode.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseReturnPasswordResetCode();
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
