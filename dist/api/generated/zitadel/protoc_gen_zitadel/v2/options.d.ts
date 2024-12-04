import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.protoc_gen_zitadel.v2";
export interface Options {
    authOption: AuthOption | undefined;
    httpResponse: CustomHTTPResponse | undefined;
}
export interface AuthOption {
    permission: string;
    orgField: string;
}
export interface CustomHTTPResponse {
    successCode: number;
}
export declare const Options: MessageFns<Options>;
export declare const AuthOption: MessageFns<AuthOption>;
export declare const CustomHTTPResponse: MessageFns<CustomHTTPResponse>;
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
