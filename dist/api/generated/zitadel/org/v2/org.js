// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               unknown
// source: zitadel/org/v2/org.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Details } from "../../object/v2/object.js";
export const protobufPackage = "zitadel.org.v2";
export var OrganizationState;
(function (OrganizationState) {
    OrganizationState[OrganizationState["ORGANIZATION_STATE_UNSPECIFIED"] = 0] = "ORGANIZATION_STATE_UNSPECIFIED";
    OrganizationState[OrganizationState["ORGANIZATION_STATE_ACTIVE"] = 1] = "ORGANIZATION_STATE_ACTIVE";
    OrganizationState[OrganizationState["ORGANIZATION_STATE_INACTIVE"] = 2] = "ORGANIZATION_STATE_INACTIVE";
    OrganizationState[OrganizationState["ORGANIZATION_STATE_REMOVED"] = 3] = "ORGANIZATION_STATE_REMOVED";
    OrganizationState[OrganizationState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrganizationState || (OrganizationState = {}));
export function organizationStateFromJSON(object) {
    switch (object) {
        case 0:
        case "ORGANIZATION_STATE_UNSPECIFIED":
            return OrganizationState.ORGANIZATION_STATE_UNSPECIFIED;
        case 1:
        case "ORGANIZATION_STATE_ACTIVE":
            return OrganizationState.ORGANIZATION_STATE_ACTIVE;
        case 2:
        case "ORGANIZATION_STATE_INACTIVE":
            return OrganizationState.ORGANIZATION_STATE_INACTIVE;
        case 3:
        case "ORGANIZATION_STATE_REMOVED":
            return OrganizationState.ORGANIZATION_STATE_REMOVED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrganizationState.UNRECOGNIZED;
    }
}
export function organizationStateToJSON(object) {
    switch (object) {
        case OrganizationState.ORGANIZATION_STATE_UNSPECIFIED:
            return "ORGANIZATION_STATE_UNSPECIFIED";
        case OrganizationState.ORGANIZATION_STATE_ACTIVE:
            return "ORGANIZATION_STATE_ACTIVE";
        case OrganizationState.ORGANIZATION_STATE_INACTIVE:
            return "ORGANIZATION_STATE_INACTIVE";
        case OrganizationState.ORGANIZATION_STATE_REMOVED:
            return "ORGANIZATION_STATE_REMOVED";
        case OrganizationState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseOrganization() {
    return { id: "", details: undefined, state: 0, name: "", primaryDomain: "" };
}
export const Organization = {
    encode(message, writer = new BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            Details.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.primaryDomain !== "") {
            writer.uint32(42).string(message.primaryDomain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.details = Details.decode(reader, reader.uint32());
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.primaryDomain = reader.string();
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? organizationStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            primaryDomain: isSet(object.primaryDomain) ? globalThis.String(object.primaryDomain) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.details !== undefined) {
            obj.details = Details.toJSON(message.details);
        }
        if (message.state !== 0) {
            obj.state = organizationStateToJSON(message.state);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.primaryDomain !== "") {
            obj.primaryDomain = message.primaryDomain;
        }
        return obj;
    },
    create(base) {
        return Organization.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrganization();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? Details.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.name = object.name ?? "";
        message.primaryDomain = object.primaryDomain ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}