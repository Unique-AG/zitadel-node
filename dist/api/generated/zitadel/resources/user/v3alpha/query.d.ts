import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextFilterMethod } from "../../object/v3alpha/object.js";
import { State } from "./user.js";
export declare const protobufPackage = "zitadel.resources.user.v3alpha";
export declare enum FieldName {
    FIELD_NAME_UNSPECIFIED = 0,
    FIELD_NAME_ID = 1,
    FIELD_NAME_CREATION_DATE = 2,
    FIELD_NAME_CHANGE_DATE = 3,
    FIELD_NAME_EMAIL = 4,
    FIELD_NAME_PHONE = 5,
    FIELD_NAME_STATE = 6,
    FIELD_NAME_SCHEMA_ID = 7,
    FIELD_NAME_SCHEMA_TYPE = 8,
    UNRECOGNIZED = -1
}
export declare function fieldNameFromJSON(object: any): FieldName;
export declare function fieldNameToJSON(object: FieldName): string;
export interface SearchFilter {
    /** Union the results of each sub filter ('OR'). */
    orFilter?: OrFilter | undefined;
    /**
     * Limit the result to match all sub queries ('AND').
     * Note that if you specify multiple queries, they will be implicitly used as andQueries.
     * Use the andFilter in combination with orFilter and notFilter.
     */
    andFilter?: AndFilter | undefined;
    /** Exclude / Negate the result of the sub query ('NOT'). */
    notFilter?: NotFilter | undefined;
    /** Limit the result to a specific user ID. */
    userIdFilter?: UserIDFilter | undefined;
    /** Limit the result to a specific organization. */
    organizationIdFilter?: OrganizationIDFilter | undefined;
    /** Limit the result to a specific username. */
    usernameFilter?: UsernameFilter | undefined;
    /** Limit the result to a specific contact email. */
    emailFilter?: EmailFilter | undefined;
    /** Limit the result to a specific contact phone. */
    phoneFilter?: PhoneFilter | undefined;
    /** Limit the result to a specific state of the user. */
    stateFilter?: StateFilter | undefined;
    /** Limit the result to a specific schema ID. */
    schemaIdFilter?: SchemaIDFilter | undefined;
    /** Limit the result to a specific schema type. */
    schemaTypeFilter?: SchemaTypeFilter | undefined;
}
export interface OrFilter {
    queries: SearchFilter[];
}
export interface AndFilter {
    queries: SearchFilter[];
}
export interface NotFilter {
    query: SearchFilter | undefined;
}
export interface UserIDFilter {
    /** Defines the ID of the user to query for. */
    id: string;
    /** Defines which text comparison method used for the id query. */
    method: TextFilterMethod;
}
export interface OrganizationIDFilter {
    /** Defines the ID of the organization to query for. */
    id: string;
    /** Defines which text comparison method used for the id query. */
    method: TextFilterMethod;
}
export interface UsernameFilter {
    /** Defines the username to query for. */
    username: string;
    /** Defines which text comparison method used for the username query. */
    method: TextFilterMethod;
    /** Defines that the username must only be unique in the organisation. */
    isOrganizationSpecific: boolean;
}
export interface EmailFilter {
    /** Defines the email of the user to query for. */
    address: string;
    /** Defines which text comparison method used for the email query. */
    method: TextFilterMethod;
}
export interface PhoneFilter {
    /** Defines the phone of the user to query for. */
    number: string;
    /** Defines which text comparison method used for the phone query. */
    method: TextFilterMethod;
}
export interface StateFilter {
    /** Defines the state to query for. */
    state: State;
}
export interface SchemaIDFilter {
    /** Defines the ID of the schema to query for. */
    id: string;
}
export interface SchemaTypeFilter {
    /** Defines which type to query for. */
    type: string;
    /** Defines which text comparison method used for the type query. */
    method: TextFilterMethod;
}
export declare const SearchFilter: MessageFns<SearchFilter>;
export declare const OrFilter: MessageFns<OrFilter>;
export declare const AndFilter: MessageFns<AndFilter>;
export declare const NotFilter: MessageFns<NotFilter>;
export declare const UserIDFilter: MessageFns<UserIDFilter>;
export declare const OrganizationIDFilter: MessageFns<OrganizationIDFilter>;
export declare const UsernameFilter: MessageFns<UsernameFilter>;
export declare const EmailFilter: MessageFns<EmailFilter>;
export declare const PhoneFilter: MessageFns<PhoneFilter>;
export declare const StateFilter: MessageFns<StateFilter>;
export declare const SchemaIDFilter: MessageFns<SchemaIDFilter>;
export declare const SchemaTypeFilter: MessageFns<SchemaTypeFilter>;
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
