import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { LocalizedMessage } from "./message";
import { ObjectDetails, TextQueryMethod } from "./object";
export declare const protobufPackage = "zitadel.action.v1";
export declare enum ActionState {
    ACTION_STATE_UNSPECIFIED = 0,
    ACTION_STATE_INACTIVE = 1,
    ACTION_STATE_ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function actionStateFromJSON(object: any): ActionState;
export declare function actionStateToJSON(object: ActionState): string;
export declare enum ActionFieldName {
    ACTION_FIELD_NAME_UNSPECIFIED = 0,
    ACTION_FIELD_NAME_NAME = 1,
    ACTION_FIELD_NAME_ID = 2,
    ACTION_FIELD_NAME_STATE = 3,
    UNRECOGNIZED = -1
}
export declare function actionFieldNameFromJSON(object: any): ActionFieldName;
export declare function actionFieldNameToJSON(object: ActionFieldName): string;
export declare enum FlowState {
    FLOW_STATE_UNSPECIFIED = 0,
    FLOW_STATE_INACTIVE = 1,
    FLOW_STATE_ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function flowStateFromJSON(object: any): FlowState;
export declare function flowStateToJSON(object: FlowState): string;
export interface Action {
    id: string;
    details: ObjectDetails | undefined;
    state: ActionState;
    name: string;
    script: string;
    timeout: Duration | undefined;
    allowedToFail: boolean;
}
export interface ActionIDQuery {
    id: string;
}
export interface ActionNameQuery {
    name: string;
    method: TextQueryMethod;
}
/** ActionStateQuery always equals */
export interface ActionStateQuery {
    state: ActionState;
}
export interface Flow {
    /** id of the flow type */
    type: FlowType | undefined;
    details: ObjectDetails | undefined;
    state: FlowState;
    triggerActions: TriggerAction[];
}
export interface FlowType {
    /** identifier of the type */
    id: string;
    /** key and name of the type */
    name: LocalizedMessage | undefined;
}
export interface TriggerType {
    /** identifier of the type */
    id: string;
    /** key and name of the type */
    name: LocalizedMessage | undefined;
}
export interface TriggerAction {
    /** id of the trigger type */
    triggerType: TriggerType | undefined;
    actions: Action[];
}
export declare const Action: {
    encode(message: Action, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Action;
    fromJSON(object: any): Action;
    toJSON(message: Action): unknown;
    create(base?: DeepPartial<Action>): Action;
    fromPartial(object: DeepPartial<Action>): Action;
};
export declare const ActionIDQuery: {
    encode(message: ActionIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActionIDQuery;
    fromJSON(object: any): ActionIDQuery;
    toJSON(message: ActionIDQuery): unknown;
    create(base?: DeepPartial<ActionIDQuery>): ActionIDQuery;
    fromPartial(object: DeepPartial<ActionIDQuery>): ActionIDQuery;
};
export declare const ActionNameQuery: {
    encode(message: ActionNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActionNameQuery;
    fromJSON(object: any): ActionNameQuery;
    toJSON(message: ActionNameQuery): unknown;
    create(base?: DeepPartial<ActionNameQuery>): ActionNameQuery;
    fromPartial(object: DeepPartial<ActionNameQuery>): ActionNameQuery;
};
export declare const ActionStateQuery: {
    encode(message: ActionStateQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActionStateQuery;
    fromJSON(object: any): ActionStateQuery;
    toJSON(message: ActionStateQuery): unknown;
    create(base?: DeepPartial<ActionStateQuery>): ActionStateQuery;
    fromPartial(object: DeepPartial<ActionStateQuery>): ActionStateQuery;
};
export declare const Flow: {
    encode(message: Flow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Flow;
    fromJSON(object: any): Flow;
    toJSON(message: Flow): unknown;
    create(base?: DeepPartial<Flow>): Flow;
    fromPartial(object: DeepPartial<Flow>): Flow;
};
export declare const FlowType: {
    encode(message: FlowType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FlowType;
    fromJSON(object: any): FlowType;
    toJSON(message: FlowType): unknown;
    create(base?: DeepPartial<FlowType>): FlowType;
    fromPartial(object: DeepPartial<FlowType>): FlowType;
};
export declare const TriggerType: {
    encode(message: TriggerType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TriggerType;
    fromJSON(object: any): TriggerType;
    toJSON(message: TriggerType): unknown;
    create(base?: DeepPartial<TriggerType>): TriggerType;
    fromPartial(object: DeepPartial<TriggerType>): TriggerType;
};
export declare const TriggerAction: {
    encode(message: TriggerAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TriggerAction;
    fromJSON(object: any): TriggerAction;
    toJSON(message: TriggerAction): unknown;
    create(base?: DeepPartial<TriggerAction>): TriggerAction;
    fromPartial(object: DeepPartial<TriggerAction>): TriggerAction;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
