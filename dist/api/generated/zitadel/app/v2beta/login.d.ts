import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.app.v2beta";
export interface LoginVersion {
    loginV1?: LoginV1 | undefined;
    loginV2?: LoginV2 | undefined;
}
export interface LoginV1 {
}
export interface LoginV2 {
    /** Optionally specify a base uri of the login UI. If unspecified the default URI will be used. */
    baseUri?: string | undefined;
}
export declare const LoginVersion: MessageFns<LoginVersion>;
export declare const LoginV1: MessageFns<LoginV1>;
export declare const LoginV2: MessageFns<LoginV2>;
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
