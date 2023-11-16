"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthOption = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "zitadel.v1";
function createBaseAuthOption() {
    return { permission: "", checkFieldName: "" };
}
exports.AuthOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.permission !== "") {
            writer.uint32(10).string(message.permission);
        }
        if (message.checkFieldName !== "") {
            writer.uint32(18).string(message.checkFieldName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.permission = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.checkFieldName = reader.string();
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
            permission: isSet(object.permission) ? String(object.permission) : "",
            checkFieldName: isSet(object.checkFieldName) ? String(object.checkFieldName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.permission !== undefined && (obj.permission = message.permission);
        message.checkFieldName !== undefined && (obj.checkFieldName = message.checkFieldName);
        return obj;
    },
    create(base) {
        return exports.AuthOption.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthOption();
        message.permission = object.permission ?? "";
        message.checkFieldName = object.checkFieldName ?? "";
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
