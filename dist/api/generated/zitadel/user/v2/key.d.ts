import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { IDFilter, TimestampFilter } from "../../filter/v2/filter.js";
export declare const protobufPackage = "zitadel.user.v2";
export declare enum KeyFieldName {
    KEY_FIELD_NAME_UNSPECIFIED = 0,
    KEY_FIELD_NAME_CREATED_DATE = 1,
    KEY_FIELD_NAME_ID = 2,
    KEY_FIELD_NAME_USER_ID = 3,
    KEY_FIELD_NAME_ORGANIZATION_ID = 4,
    KEY_FIELD_NAME_KEY_EXPIRATION_DATE = 5,
    UNRECOGNIZED = -1
}
export declare function keyFieldNameFromJSON(object: any): KeyFieldName;
export declare function keyFieldNameToJSON(object: KeyFieldName): string;
export interface Key {
    /** The timestamp of the key creation. */
    creationDate: Date | undefined;
    /** The timestamp of the last change of the key. */
    changeDate: Date | undefined;
    /** The unique identifier of the key. */
    id: string;
    /** The unique identifier of the user the key belongs to. */
    userId: string;
    /** The unique identifier of the organization the key belongs to. */
    organizationId: string;
    /** The keys expiration date. */
    expirationDate: Date | undefined;
}
export interface KeysSearchFilter {
    keyIdFilter?: IDFilter | undefined;
    userIdFilter?: IDFilter | undefined;
    organizationIdFilter?: IDFilter | undefined;
    createdDateFilter?: TimestampFilter | undefined;
    expirationDateFilter?: TimestampFilter | undefined;
}
export declare const Key: MessageFns<Key>;
export declare const KeysSearchFilter: MessageFns<KeysSearchFilter>;
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
