import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.action.v2";
export interface Execution {
    /** The condition under which the execution is triggered. */
    condition: Condition | undefined;
    /** The timestamp of the execution creation. */
    creationDate: Date | undefined;
    /** The timestamp of the last change to the execution. */
    changeDate: Date | undefined;
    /**
     * Ordered list of targets called during the execution.
     * The order of the targets in this list defines the order of execution.
     * If one of the targets fails, depending on the target's type and settings,
     * the execution might be interrupted and the following targets will not be called.
     */
    targets: string[];
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
    /**
     * Define a GRPC-method as condition.
     * When a request to this method happens, the execution is triggered.
     */
    method?: string | undefined;
    /**
     * Define a GRPC-service as condition.
     * When a request to any method of this service happens, the execution is triggered.
     */
    service?: string | undefined;
    /**
     * Define all calls as condition.
     * When a call to any available service happens, the execution is triggered.
     */
    all?: boolean | undefined;
}
export interface ResponseExecution {
    /**
     * Define a GRPC-method as condition.
     * Before a response is returned to the client from this method, the execution is triggered.
     */
    method?: string | undefined;
    /**
     * Define a GRPC-service as condition.
     * Before a response is returned to the client from any method of this service, the execution is triggered.
     */
    service?: string | undefined;
    /**
     * Define all calls as condition.
     * Before a response is returned to the client from any available service,
     * the execution is triggered.
     */
    all?: boolean | undefined;
}
/** Executed on the specified function */
export interface FunctionExecution {
    name: string;
}
export interface EventExecution {
    /**
     * Define a specific event as condition.
     * After this event is created, the execution is triggered.
     */
    event?: string | undefined;
    /**
     * Define an event group as condition.
     * After any event under this group is created, the execution is triggered.
     */
    group?: string | undefined;
    /**
     * Define all events as condition.
     * After any event is created, the execution is triggered.
     */
    all?: boolean | undefined;
}
export declare const Execution: MessageFns<Execution>;
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
