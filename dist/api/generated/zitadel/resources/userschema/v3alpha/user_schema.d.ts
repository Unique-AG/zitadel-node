import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details, TextFilterMethod } from "../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.resources.userschema.v3alpha";
export declare enum FieldName {
    FIELD_NAME_UNSPECIFIED = 0,
    FIELD_NAME_TYPE = 1,
    FIELD_NAME_STATE = 2,
    FIELD_NAME_REVISION = 3,
    FIELD_NAME_CHANGE_DATE = 4,
    FIELD_NAME_CREATION_DATE = 5,
    UNRECOGNIZED = -1
}
export declare function fieldNameFromJSON(object: any): FieldName;
export declare function fieldNameToJSON(object: FieldName): string;
export declare enum State {
    STATE_UNSPECIFIED = 0,
    STATE_ACTIVE = 1,
    STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export declare enum AuthenticatorType {
    AUTHENTICATOR_TYPE_UNSPECIFIED = 0,
    AUTHENTICATOR_TYPE_USERNAME = 1,
    AUTHENTICATOR_TYPE_PASSWORD = 2,
    AUTHENTICATOR_TYPE_WEBAUTHN = 3,
    AUTHENTICATOR_TYPE_TOTP = 4,
    AUTHENTICATOR_TYPE_OTP_EMAIL = 5,
    AUTHENTICATOR_TYPE_OTP_SMS = 6,
    AUTHENTICATOR_TYPE_AUTHENTICATION_KEY = 7,
    AUTHENTICATOR_TYPE_IDENTITY_PROVIDER = 8,
    UNRECOGNIZED = -1
}
export declare function authenticatorTypeFromJSON(object: any): AuthenticatorType;
export declare function authenticatorTypeToJSON(object: AuthenticatorType): string;
export interface GetUserSchema {
    /** Details provide some base information (such as the last change date) of the schema. */
    details: Details | undefined;
    config: UserSchema | undefined;
    /** Current state of the schema. */
    state: State;
    /** Revision is a read only version of the schema, each update of the `schema`-field increases the revision. */
    revision: number;
}
export interface UserSchema {
    /** Type is a human readable word describing the schema. */
    type: string;
    /** JSON schema representation defining the user. */
    schema?: {
        [key: string]: any;
    } | undefined;
    /** Defines the possible types of authenticators. */
    possibleAuthenticators: AuthenticatorType[];
}
export interface PatchUserSchema {
    /** Type is a human readable word describing the schema. */
    type?: string | undefined;
    /** JSON schema representation defining the user. */
    schema?: {
        [key: string]: any;
    } | undefined;
    /**
     * Defines the possible types of authenticators.
     *
     * Removal of an authenticator does not remove the authenticator on a user.
     */
    possibleAuthenticators: AuthenticatorType[];
}
export interface SearchFilter {
    /** Union the results of each sub filter ('OR'). */
    orFilter?: OrFilter | undefined;
    /**
     * Limit the result to match all sub queries ('AND').
     * Note that if you specify multiple queries, they will be implicitly used as andQueries.
     * Use the andFilter in combination with orFilter and notFilter.
     */
    andFilter?: AndFilter | undefined;
    /** Exclude / Negate the result of the sub filter ('NOT'). */
    notFilter?: NotFilter | undefined;
    /** Limit the result to a specific schema type. */
    typeFilter?: TypeFilter | undefined;
    /** Limit the result to a specific state of the schema. */
    stateFilter?: StateFilter | undefined;
    /** Limit the result to a specific schema ID. */
    idFilter?: IDFilter | undefined;
}
export interface OrFilter {
    queries: SearchFilter[];
}
export interface AndFilter {
    queries: SearchFilter[];
}
export interface NotFilter {
    filter: SearchFilter | undefined;
}
export interface IDFilter {
    /** Defines the ID of the user schema to filter for. */
    id: string;
    /** Defines which text comparison method used for the id filter. */
    method: TextFilterMethod;
}
export interface TypeFilter {
    /** Defines which type to filter for. */
    type: string;
    /** Defines which text comparison method used for the type filter. */
    method: TextFilterMethod;
}
export interface StateFilter {
    /** Defines the state to filter for. */
    state: State;
}
export declare const GetUserSchema: MessageFns<GetUserSchema>;
export declare const UserSchema: MessageFns<UserSchema>;
export declare const PatchUserSchema: MessageFns<PatchUserSchema>;
export declare const SearchFilter: MessageFns<SearchFilter>;
export declare const OrFilter: MessageFns<OrFilter>;
export declare const AndFilter: MessageFns<AndFilter>;
export declare const NotFilter: MessageFns<NotFilter>;
export declare const IDFilter: MessageFns<IDFilter>;
export declare const TypeFilter: MessageFns<TypeFilter>;
export declare const StateFilter: MessageFns<StateFilter>;
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
