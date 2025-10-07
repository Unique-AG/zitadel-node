import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ByteFilterMethod, TextFilterMethod } from "../../filter/v2/filter.js";
export declare const protobufPackage = "zitadel.metadata.v2";
export interface Metadata {
    creationDate: Date | undefined;
    changeDate: Date | undefined;
    key: string;
    value: Buffer;
}
export interface MetadataSearchFilter {
    keyFilter?: MetadataKeyFilter | undefined;
}
export interface MetadataKeyFilter {
    key: string;
    method: TextFilterMethod;
}
export interface MetadataValueFilter {
    value: Buffer;
    method: ByteFilterMethod;
}
export declare const Metadata: MessageFns<Metadata>;
export declare const MetadataSearchFilter: MessageFns<MetadataSearchFilter>;
export declare const MetadataKeyFilter: MessageFns<MetadataKeyFilter>;
export declare const MetadataValueFilter: MessageFns<MetadataValueFilter>;
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
