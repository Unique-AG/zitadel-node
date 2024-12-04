import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Owner } from "../../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.settings.object.v3alpha";
export interface Details {
    /**
     * sequence represents the order of events. It's always counting
     *
     * on read: the sequence of the last event reduced by the projection
     *
     * on manipulation: the timestamp of the event(s) added by the manipulation
     */
    sequence: Long;
    /**
     * change_date is the timestamp when the object was changed
     *
     * on read: the timestamp of the last event reduced by the projection
     *
     * on manipulation: the timestamp of the event(s) added by the manipulation
     */
    changeDate: Date | undefined;
    /** resource_owner represents the context an object belongs to */
    owner: Owner | undefined;
}
export declare const Details: MessageFns<Details>;
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
