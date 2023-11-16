/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";
export declare const protobufPackage = "zitadel.metadata.v1";
export interface Metadata {
    details: ObjectDetails | undefined;
    key: string;
    value: Buffer;
}
export interface MetadataQuery {
    keyQuery?: MetadataKeyQuery | undefined;
}
export interface MetadataKeyQuery {
    key: string;
    method: TextQueryMethod;
}
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    create(base?: DeepPartial<Metadata>): Metadata;
    fromPartial(object: DeepPartial<Metadata>): Metadata;
};
export declare const MetadataQuery: {
    encode(message: MetadataQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetadataQuery;
    fromJSON(object: any): MetadataQuery;
    toJSON(message: MetadataQuery): unknown;
    create(base?: DeepPartial<MetadataQuery>): MetadataQuery;
    fromPartial(object: DeepPartial<MetadataQuery>): MetadataQuery;
};
export declare const MetadataKeyQuery: {
    encode(message: MetadataKeyQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetadataKeyQuery;
    fromJSON(object: any): MetadataKeyQuery;
    toJSON(message: MetadataKeyQuery): unknown;
    create(base?: DeepPartial<MetadataKeyQuery>): MetadataKeyQuery;
    fromPartial(object: DeepPartial<MetadataKeyQuery>): MetadataKeyQuery;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
