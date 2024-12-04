import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.resources.action.v3alpha";
export interface Execution {
    /** Ordered list of targets/includes called during the execution. */
    targets: ExecutionTargetType[];
}
export interface GetExecution {
    details: Details | undefined;
    condition: Condition | undefined;
    execution: Execution | undefined;
}
export interface ExecutionTargetType {
    /** Unique identifier of existing target to call. */
    target?: string | undefined;
    /** Unique identifier of existing execution to include targets of. */
    include?: Condition | undefined;
}
export interface Condition {
    /** Condition-type to execute if a request on the defined API point happens. */
    request?: RequestExecution | undefined;
    /** Condition-type to execute on response if a request on the defined API point happens. */
    response?: ResponseExecution | undefined;
    /** Condition-type to execute if function is used, replaces actions v1. */
    function?: FunctionExecution | undefined;
    /** Condition-type to execute if an event is created in the system. */
    event?: EventExecution | undefined;
}
export interface RequestExecution {
    /** GRPC-method as condition. */
    method?: string | undefined;
    /** GRPC-service as condition. */
    service?: string | undefined;
    /** All calls to any available services and methods as condition. */
    all?: boolean | undefined;
}
export interface ResponseExecution {
    /** GRPC-method as condition. */
    method?: string | undefined;
    /** GRPC-service as condition. */
    service?: string | undefined;
    /** All calls to any available services and methods as condition. */
    all?: boolean | undefined;
}
/** Executed on the specified function */
export interface FunctionExecution {
    name: string;
}
export interface EventExecution {
    /** Event name as condition. */
    event?: string | undefined;
    /** Event group as condition, all events under this group. */
    group?: string | undefined;
    /** all events as condition. */
    all?: boolean | undefined;
}
export declare const Execution: MessageFns<Execution>;
export declare const GetExecution: MessageFns<GetExecution>;
export declare const ExecutionTargetType: MessageFns<ExecutionTargetType>;
export declare const Condition: MessageFns<Condition>;
export declare const RequestExecution: MessageFns<RequestExecution>;
export declare const ResponseExecution: MessageFns<ResponseExecution>;
export declare const FunctionExecution: MessageFns<FunctionExecution>;
export declare const EventExecution: MessageFns<EventExecution>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
