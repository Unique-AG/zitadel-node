import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.webkey.v2beta";
export declare enum State {
    STATE_UNSPECIFIED = 0,
    /** STATE_INITIAL - A newly created key is in the initial state and published to the public key endpoint. */
    STATE_INITIAL = 1,
    /** STATE_ACTIVE - The active key is used to sign tokens. Only one key can be active at a time. */
    STATE_ACTIVE = 2,
    /** STATE_INACTIVE - The inactive key is not used to sign tokens anymore, but still published to the public key endpoint. */
    STATE_INACTIVE = 3,
    /** STATE_REMOVED - The removed key is not used to sign tokens anymore and not published to the public key endpoint. */
    STATE_REMOVED = 4,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export declare enum RSABits {
    RSA_BITS_UNSPECIFIED = 0,
    /** RSA_BITS_2048 - 2048 bit RSA key */
    RSA_BITS_2048 = 1,
    /** RSA_BITS_3072 - 3072 bit RSA key */
    RSA_BITS_3072 = 2,
    /** RSA_BITS_4096 - 4096 bit RSA key */
    RSA_BITS_4096 = 3,
    UNRECOGNIZED = -1
}
export declare function rSABitsFromJSON(object: any): RSABits;
export declare function rSABitsToJSON(object: RSABits): string;
export declare enum RSAHasher {
    RSA_HASHER_UNSPECIFIED = 0,
    /** RSA_HASHER_SHA256 - SHA256 hashing algorithm resulting in the RS256 algorithm header */
    RSA_HASHER_SHA256 = 1,
    /** RSA_HASHER_SHA384 - SHA384 hashing algorithm resulting in the RS384 algorithm header */
    RSA_HASHER_SHA384 = 2,
    /** RSA_HASHER_SHA512 - SHA512 hashing algorithm resulting in the RS512 algorithm header */
    RSA_HASHER_SHA512 = 3,
    UNRECOGNIZED = -1
}
export declare function rSAHasherFromJSON(object: any): RSAHasher;
export declare function rSAHasherToJSON(object: RSAHasher): string;
export declare enum ECDSACurve {
    ECDSA_CURVE_UNSPECIFIED = 0,
    /** ECDSA_CURVE_P256 - NIST P-256 curve resulting in the ES256 algorithm header */
    ECDSA_CURVE_P256 = 1,
    /** ECDSA_CURVE_P384 - NIST P-384 curve resulting in the ES384 algorithm header */
    ECDSA_CURVE_P384 = 2,
    /** ECDSA_CURVE_P512 - NIST P-512 curve resulting in the ES512 algorithm header */
    ECDSA_CURVE_P512 = 3,
    UNRECOGNIZED = -1
}
export declare function eCDSACurveFromJSON(object: any): ECDSACurve;
export declare function eCDSACurveToJSON(object: ECDSACurve): string;
export interface WebKey {
    /** The unique identifier of the key. */
    id: string;
    /** The timestamp of the key creation. */
    creationDate: Date | undefined;
    /** The timestamp of the last change to the key (e.g. creation, activation, deactivation). */
    changeDate: Date | undefined;
    /** State of the key */
    state: State;
    rsa?: RSA | undefined;
    ecdsa?: ECDSA | undefined;
    ed25519?: ED25519 | undefined;
}
export interface RSA {
    /** Bit size of the RSA key. Default is 2048 bits. */
    bits: RSABits;
    /** Signing algrithm used. Default is SHA256. */
    hasher: RSAHasher;
}
export interface ECDSA {
    /** Curve of the ECDSA key. Default is P-256. */
    curve: ECDSACurve;
}
export interface ED25519 {
}
export declare const WebKey: MessageFns<WebKey>;
export declare const RSA: MessageFns<RSA>;
export declare const ECDSA: MessageFns<ECDSA>;
export declare const ED25519: MessageFns<ED25519>;
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
