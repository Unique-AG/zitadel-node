import Long from "long";
import _m0 from "protobufjs/minimal";
import { LocalizedMessage } from "./message";
export declare const protobufPackage = "zitadel.event.v1";
export interface Event {
    editor: Editor | undefined;
    aggregate: Aggregate | undefined;
    sequence: Long;
    creationDate: Date | undefined;
    payload: {
        [key: string]: any;
    } | undefined;
    type: EventType | undefined;
}
export interface Editor {
    userId: string;
    displayName: string;
    service: string;
}
export interface Aggregate {
    id: string;
    type: AggregateType | undefined;
    resourceOwner: string;
}
export interface EventType {
    type: string;
    localized: LocalizedMessage | undefined;
}
export interface AggregateType {
    type: string;
    localized: LocalizedMessage | undefined;
}
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    create(base?: DeepPartial<Event>): Event;
    fromPartial(object: DeepPartial<Event>): Event;
};
export declare const Editor: {
    encode(message: Editor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Editor;
    fromJSON(object: any): Editor;
    toJSON(message: Editor): unknown;
    create(base?: DeepPartial<Editor>): Editor;
    fromPartial(object: DeepPartial<Editor>): Editor;
};
export declare const Aggregate: {
    encode(message: Aggregate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Aggregate;
    fromJSON(object: any): Aggregate;
    toJSON(message: Aggregate): unknown;
    create(base?: DeepPartial<Aggregate>): Aggregate;
    fromPartial(object: DeepPartial<Aggregate>): Aggregate;
};
export declare const EventType: {
    encode(message: EventType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventType;
    fromJSON(object: any): EventType;
    toJSON(message: EventType): unknown;
    create(base?: DeepPartial<EventType>): EventType;
    fromPartial(object: DeepPartial<EventType>): EventType;
};
export declare const AggregateType: {
    encode(message: AggregateType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AggregateType;
    fromJSON(object: any): AggregateType;
    toJSON(message: AggregateType): unknown;
    create(base?: DeepPartial<AggregateType>): AggregateType;
    fromPartial(object: DeepPartial<AggregateType>): AggregateType;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
