"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerAction = exports.TriggerType = exports.FlowType = exports.Flow = exports.ActionStateQuery = exports.ActionNameQuery = exports.ActionIDQuery = exports.Action = exports.flowStateToJSON = exports.flowStateFromJSON = exports.FlowState = exports.actionFieldNameToJSON = exports.actionFieldNameFromJSON = exports.ActionFieldName = exports.actionStateToJSON = exports.actionStateFromJSON = exports.ActionState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../google/protobuf/duration");
const message_1 = require("./message");
const object_1 = require("./object");
exports.protobufPackage = "zitadel.action.v1";
var ActionState;
(function (ActionState) {
    ActionState[ActionState["ACTION_STATE_UNSPECIFIED"] = 0] = "ACTION_STATE_UNSPECIFIED";
    ActionState[ActionState["ACTION_STATE_INACTIVE"] = 1] = "ACTION_STATE_INACTIVE";
    ActionState[ActionState["ACTION_STATE_ACTIVE"] = 2] = "ACTION_STATE_ACTIVE";
    ActionState[ActionState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ActionState || (exports.ActionState = ActionState = {}));
function actionStateFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTION_STATE_UNSPECIFIED":
            return ActionState.ACTION_STATE_UNSPECIFIED;
        case 1:
        case "ACTION_STATE_INACTIVE":
            return ActionState.ACTION_STATE_INACTIVE;
        case 2:
        case "ACTION_STATE_ACTIVE":
            return ActionState.ACTION_STATE_ACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ActionState.UNRECOGNIZED;
    }
}
exports.actionStateFromJSON = actionStateFromJSON;
function actionStateToJSON(object) {
    switch (object) {
        case ActionState.ACTION_STATE_UNSPECIFIED:
            return "ACTION_STATE_UNSPECIFIED";
        case ActionState.ACTION_STATE_INACTIVE:
            return "ACTION_STATE_INACTIVE";
        case ActionState.ACTION_STATE_ACTIVE:
            return "ACTION_STATE_ACTIVE";
        case ActionState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.actionStateToJSON = actionStateToJSON;
var ActionFieldName;
(function (ActionFieldName) {
    ActionFieldName[ActionFieldName["ACTION_FIELD_NAME_UNSPECIFIED"] = 0] = "ACTION_FIELD_NAME_UNSPECIFIED";
    ActionFieldName[ActionFieldName["ACTION_FIELD_NAME_NAME"] = 1] = "ACTION_FIELD_NAME_NAME";
    ActionFieldName[ActionFieldName["ACTION_FIELD_NAME_ID"] = 2] = "ACTION_FIELD_NAME_ID";
    ActionFieldName[ActionFieldName["ACTION_FIELD_NAME_STATE"] = 3] = "ACTION_FIELD_NAME_STATE";
    ActionFieldName[ActionFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ActionFieldName || (exports.ActionFieldName = ActionFieldName = {}));
function actionFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTION_FIELD_NAME_UNSPECIFIED":
            return ActionFieldName.ACTION_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "ACTION_FIELD_NAME_NAME":
            return ActionFieldName.ACTION_FIELD_NAME_NAME;
        case 2:
        case "ACTION_FIELD_NAME_ID":
            return ActionFieldName.ACTION_FIELD_NAME_ID;
        case 3:
        case "ACTION_FIELD_NAME_STATE":
            return ActionFieldName.ACTION_FIELD_NAME_STATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ActionFieldName.UNRECOGNIZED;
    }
}
exports.actionFieldNameFromJSON = actionFieldNameFromJSON;
function actionFieldNameToJSON(object) {
    switch (object) {
        case ActionFieldName.ACTION_FIELD_NAME_UNSPECIFIED:
            return "ACTION_FIELD_NAME_UNSPECIFIED";
        case ActionFieldName.ACTION_FIELD_NAME_NAME:
            return "ACTION_FIELD_NAME_NAME";
        case ActionFieldName.ACTION_FIELD_NAME_ID:
            return "ACTION_FIELD_NAME_ID";
        case ActionFieldName.ACTION_FIELD_NAME_STATE:
            return "ACTION_FIELD_NAME_STATE";
        case ActionFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.actionFieldNameToJSON = actionFieldNameToJSON;
var FlowState;
(function (FlowState) {
    FlowState[FlowState["FLOW_STATE_UNSPECIFIED"] = 0] = "FLOW_STATE_UNSPECIFIED";
    FlowState[FlowState["FLOW_STATE_INACTIVE"] = 1] = "FLOW_STATE_INACTIVE";
    FlowState[FlowState["FLOW_STATE_ACTIVE"] = 2] = "FLOW_STATE_ACTIVE";
    FlowState[FlowState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FlowState || (exports.FlowState = FlowState = {}));
function flowStateFromJSON(object) {
    switch (object) {
        case 0:
        case "FLOW_STATE_UNSPECIFIED":
            return FlowState.FLOW_STATE_UNSPECIFIED;
        case 1:
        case "FLOW_STATE_INACTIVE":
            return FlowState.FLOW_STATE_INACTIVE;
        case 2:
        case "FLOW_STATE_ACTIVE":
            return FlowState.FLOW_STATE_ACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FlowState.UNRECOGNIZED;
    }
}
exports.flowStateFromJSON = flowStateFromJSON;
function flowStateToJSON(object) {
    switch (object) {
        case FlowState.FLOW_STATE_UNSPECIFIED:
            return "FLOW_STATE_UNSPECIFIED";
        case FlowState.FLOW_STATE_INACTIVE:
            return "FLOW_STATE_INACTIVE";
        case FlowState.FLOW_STATE_ACTIVE:
            return "FLOW_STATE_ACTIVE";
        case FlowState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.flowStateToJSON = flowStateToJSON;
function createBaseAction() {
    return { id: "", details: undefined, state: 0, name: "", script: "", timeout: undefined, allowedToFail: false };
}
exports.Action = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.script !== "") {
            writer.uint32(42).string(message.script);
        }
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(50).fork()).ldelim();
        }
        if (message.allowedToFail === true) {
            writer.uint32(56).bool(message.allowedToFail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.script = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.allowedToFail = reader.bool();
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
            id: isSet(object.id) ? String(object.id) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? actionStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            script: isSet(object.script) ? String(object.script) : "",
            timeout: isSet(object.timeout) ? duration_1.Duration.fromJSON(object.timeout) : undefined,
            allowedToFail: isSet(object.allowedToFail) ? Boolean(object.allowedToFail) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.state !== undefined && (obj.state = actionStateToJSON(message.state));
        message.name !== undefined && (obj.name = message.name);
        message.script !== undefined && (obj.script = message.script);
        message.timeout !== undefined && (obj.timeout = message.timeout ? duration_1.Duration.toJSON(message.timeout) : undefined);
        message.allowedToFail !== undefined && (obj.allowedToFail = message.allowedToFail);
        return obj;
    },
    create(base) {
        return exports.Action.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.name = object.name ?? "";
        message.script = object.script ?? "";
        message.timeout = (object.timeout !== undefined && object.timeout !== null)
            ? duration_1.Duration.fromPartial(object.timeout)
            : undefined;
        message.allowedToFail = object.allowedToFail ?? false;
        return message;
    },
};
function createBaseActionIDQuery() {
    return { id: "" };
}
exports.ActionIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActionIDQuery();
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
        return exports.ActionIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseActionIDQuery();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseActionNameQuery() {
    return { name: "", method: 0 };
}
exports.ActionNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActionNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            name: isSet(object.name) ? String(object.name) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.ActionNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseActionNameQuery();
        message.name = object.name ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseActionStateQuery() {
    return { state: 0 };
}
exports.ActionStateQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActionStateQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
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
        return { state: isSet(object.state) ? actionStateFromJSON(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = actionStateToJSON(message.state));
        return obj;
    },
    create(base) {
        return exports.ActionStateQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseActionStateQuery();
        message.state = object.state ?? 0;
        return message;
    },
};
function createBaseFlow() {
    return { type: undefined, details: undefined, state: 0, triggerActions: [] };
}
exports.Flow = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== undefined) {
            exports.FlowType.encode(message.type, writer.uint32(10).fork()).ldelim();
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        for (const v of message.triggerActions) {
            exports.TriggerAction.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFlow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = exports.FlowType.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.triggerActions.push(exports.TriggerAction.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? exports.FlowType.fromJSON(object.type) : undefined,
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? flowStateFromJSON(object.state) : 0,
            triggerActions: Array.isArray(object?.triggerActions)
                ? object.triggerActions.map((e) => exports.TriggerAction.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type ? exports.FlowType.toJSON(message.type) : undefined);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.state !== undefined && (obj.state = flowStateToJSON(message.state));
        if (message.triggerActions) {
            obj.triggerActions = message.triggerActions.map((e) => e ? exports.TriggerAction.toJSON(e) : undefined);
        }
        else {
            obj.triggerActions = [];
        }
        return obj;
    },
    create(base) {
        return exports.Flow.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFlow();
        message.type = (object.type !== undefined && object.type !== null) ? exports.FlowType.fromPartial(object.type) : undefined;
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.triggerActions = object.triggerActions?.map((e) => exports.TriggerAction.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFlowType() {
    return { id: "", name: undefined };
}
exports.FlowType = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== undefined) {
            message_1.LocalizedMessage.encode(message.name, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFlowType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = message_1.LocalizedMessage.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? message_1.LocalizedMessage.fromJSON(object.name) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name ? message_1.LocalizedMessage.toJSON(message.name) : undefined);
        return obj;
    },
    create(base) {
        return exports.FlowType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFlowType();
        message.id = object.id ?? "";
        message.name = (object.name !== undefined && object.name !== null)
            ? message_1.LocalizedMessage.fromPartial(object.name)
            : undefined;
        return message;
    },
};
function createBaseTriggerType() {
    return { id: "", name: undefined };
}
exports.TriggerType = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== undefined) {
            message_1.LocalizedMessage.encode(message.name, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTriggerType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = message_1.LocalizedMessage.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? message_1.LocalizedMessage.fromJSON(object.name) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name ? message_1.LocalizedMessage.toJSON(message.name) : undefined);
        return obj;
    },
    create(base) {
        return exports.TriggerType.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTriggerType();
        message.id = object.id ?? "";
        message.name = (object.name !== undefined && object.name !== null)
            ? message_1.LocalizedMessage.fromPartial(object.name)
            : undefined;
        return message;
    },
};
function createBaseTriggerAction() {
    return { triggerType: undefined, actions: [] };
}
exports.TriggerAction = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerType !== undefined) {
            exports.TriggerType.encode(message.triggerType, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.actions) {
            exports.Action.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTriggerAction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.triggerType = exports.TriggerType.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.actions.push(exports.Action.decode(reader, reader.uint32()));
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
            triggerType: isSet(object.triggerType) ? exports.TriggerType.fromJSON(object.triggerType) : undefined,
            actions: Array.isArray(object?.actions) ? object.actions.map((e) => exports.Action.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.triggerType !== undefined &&
            (obj.triggerType = message.triggerType ? exports.TriggerType.toJSON(message.triggerType) : undefined);
        if (message.actions) {
            obj.actions = message.actions.map((e) => e ? exports.Action.toJSON(e) : undefined);
        }
        else {
            obj.actions = [];
        }
        return obj;
    },
    create(base) {
        return exports.TriggerAction.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTriggerAction();
        message.triggerType = (object.triggerType !== undefined && object.triggerType !== null)
            ? exports.TriggerType.fromPartial(object.triggerType)
            : undefined;
        message.actions = object.actions?.map((e) => exports.Action.fromPartial(e)) || [];
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
