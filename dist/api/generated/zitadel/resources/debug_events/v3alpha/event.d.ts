import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../../google/protobuf/duration.js";
export declare const protobufPackage = "zitadel.resources.debug_events.v3alpha";
export interface Event {
    add?: AddedEvent | undefined;
    change?: ChangedEvent | undefined;
    remove?: RemovedEvent | undefined;
}
export interface AddedEvent {
    /** issues a pg_sleep command in the projection reducer, simulating a slow query. */
    projectionSleep: Duration | undefined;
    /** optional text that can be set as a state. */
    blob?: string | undefined;
}
export interface ChangedEvent {
    /** issues a pg_sleep command in the projection reducer, simulating a slow query. */
    projectionSleep: Duration | undefined;
    /** optional text that can be set as a state. */
    blob?: string | undefined;
}
export interface RemovedEvent {
    /** issues a pg_sleep command in the projection reducer, simulating a slow query. */
    projectionSleep: Duration | undefined;
}
export declare const Event: MessageFns<Event>;
export declare const AddedEvent: MessageFns<AddedEvent>;
export declare const ChangedEvent: MessageFns<ChangedEvent>;
export declare const RemovedEvent: MessageFns<RemovedEvent>;
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
