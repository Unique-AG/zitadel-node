import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { IDFilter, TimestampFilter } from "../../filter/v2/filter.js";
export declare const protobufPackage = "zitadel.user.v2";
export declare enum PersonalAccessTokenFieldName {
    PERSONAL_ACCESS_TOKEN_FIELD_NAME_UNSPECIFIED = 0,
    PERSONAL_ACCESS_TOKEN_FIELD_NAME_CREATED_DATE = 1,
    PERSONAL_ACCESS_TOKEN_FIELD_NAME_ID = 2,
    PERSONAL_ACCESS_TOKEN_FIELD_NAME_USER_ID = 3,
    PERSONAL_ACCESS_TOKEN_FIELD_NAME_ORGANIZATION_ID = 4,
    PERSONAL_ACCESS_TOKEN_FIELD_NAME_EXPIRATION_DATE = 5,
    UNRECOGNIZED = -1
}
export declare function personalAccessTokenFieldNameFromJSON(object: any): PersonalAccessTokenFieldName;
export declare function personalAccessTokenFieldNameToJSON(object: PersonalAccessTokenFieldName): string;
export interface PersonalAccessToken {
    /** The timestamp of the personal access token creation. */
    creationDate: Date | undefined;
    /** The timestamp of the last change of the personal access token. */
    changeDate: Date | undefined;
    /** The unique identifier of the personal access token. */
    id: string;
    /** The unique identifier of the user the personal access token belongs to. */
    userId: string;
    /** The unique identifier of the organization the personal access token belongs to. */
    organizationId: string;
    /** The personal access tokens expiration date. */
    expirationDate: Date | undefined;
}
export interface PersonalAccessTokensSearchFilter {
    tokenIdFilter?: IDFilter | undefined;
    userIdFilter?: IDFilter | undefined;
    organizationIdFilter?: IDFilter | undefined;
    createdDateFilter?: TimestampFilter | undefined;
    expirationDateFilter?: TimestampFilter | undefined;
}
export declare const PersonalAccessToken: MessageFns<PersonalAccessToken>;
export declare const PersonalAccessTokensSearchFilter: MessageFns<PersonalAccessTokensSearchFilter>;
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
