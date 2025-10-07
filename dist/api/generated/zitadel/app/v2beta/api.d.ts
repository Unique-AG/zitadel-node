import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.app.v2beta";
export declare enum APIAuthMethodType {
    API_AUTH_METHOD_TYPE_BASIC = 0,
    API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 1,
    UNRECOGNIZED = -1
}
export declare function aPIAuthMethodTypeFromJSON(object: any): APIAuthMethodType;
export declare function aPIAuthMethodTypeToJSON(object: APIAuthMethodType): string;
export interface APIConfig {
    clientId: string;
    authMethodType: APIAuthMethodType;
}
export declare const APIConfig: MessageFns<APIConfig>;
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
