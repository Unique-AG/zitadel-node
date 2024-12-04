import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.resources.webkey.v3alpha";
export interface WebKeyRSAConfig {
    /** bit size of the RSA key */
    bits: WebKeyRSAConfig_RSABits;
    /** signing algrithm used */
    hasher: WebKeyRSAConfig_RSAHasher;
}
export declare enum WebKeyRSAConfig_RSABits {
    RSA_BITS_UNSPECIFIED = 0,
    RSA_BITS_2048 = 1,
    RSA_BITS_3072 = 2,
    RSA_BITS_4096 = 3,
    UNRECOGNIZED = -1
}
export declare function webKeyRSAConfig_RSABitsFromJSON(object: any): WebKeyRSAConfig_RSABits;
export declare function webKeyRSAConfig_RSABitsToJSON(object: WebKeyRSAConfig_RSABits): string;
export declare enum WebKeyRSAConfig_RSAHasher {
    RSA_HASHER_UNSPECIFIED = 0,
    RSA_HASHER_SHA256 = 1,
    RSA_HASHER_SHA384 = 2,
    RSA_HASHER_SHA512 = 3,
    UNRECOGNIZED = -1
}
export declare function webKeyRSAConfig_RSAHasherFromJSON(object: any): WebKeyRSAConfig_RSAHasher;
export declare function webKeyRSAConfig_RSAHasherToJSON(object: WebKeyRSAConfig_RSAHasher): string;
export interface WebKeyECDSAConfig {
    curve: WebKeyECDSAConfig_ECDSACurve;
}
export declare enum WebKeyECDSAConfig_ECDSACurve {
    ECDSA_CURVE_UNSPECIFIED = 0,
    ECDSA_CURVE_P256 = 1,
    ECDSA_CURVE_P384 = 2,
    ECDSA_CURVE_P512 = 3,
    UNRECOGNIZED = -1
}
export declare function webKeyECDSAConfig_ECDSACurveFromJSON(object: any): WebKeyECDSAConfig_ECDSACurve;
export declare function webKeyECDSAConfig_ECDSACurveToJSON(object: WebKeyECDSAConfig_ECDSACurve): string;
export interface WebKeyED25519Config {
}
export declare const WebKeyRSAConfig: MessageFns<WebKeyRSAConfig>;
export declare const WebKeyECDSAConfig: MessageFns<WebKeyECDSAConfig>;
export declare const WebKeyED25519Config: MessageFns<WebKeyED25519Config>;
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
