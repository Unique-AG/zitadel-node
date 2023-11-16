import Long from "long";
import _m0 from "protobufjs/minimal";
import { ObjectDetails } from "./object";
export declare const protobufPackage = "zitadel.authn.v1";
export declare enum KeyType {
    KEY_TYPE_UNSPECIFIED = 0,
    KEY_TYPE_JSON = 1,
    UNRECOGNIZED = -1
}
export declare function keyTypeFromJSON(object: any): KeyType;
export declare function keyTypeToJSON(object: KeyType): string;
export interface Key {
    id: string;
    details: ObjectDetails | undefined;
    type: KeyType;
    expirationDate: Date | undefined;
}
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    create(base?: DeepPartial<Key>): Key;
    fromPartial(object: DeepPartial<Key>): Key;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
