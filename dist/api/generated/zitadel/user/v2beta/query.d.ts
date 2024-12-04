import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextQueryMethod } from "../../object/v2beta/object.js";
import { UserState } from "./user.js";
export declare const protobufPackage = "zitadel.user.v2beta";
export declare enum Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_HUMAN = 1,
    TYPE_MACHINE = 2,
    UNRECOGNIZED = -1
}
export declare function typeFromJSON(object: any): Type;
export declare function typeToJSON(object: Type): string;
export declare enum UserFieldName {
    USER_FIELD_NAME_UNSPECIFIED = 0,
    USER_FIELD_NAME_USER_NAME = 1,
    USER_FIELD_NAME_FIRST_NAME = 2,
    USER_FIELD_NAME_LAST_NAME = 3,
    USER_FIELD_NAME_NICK_NAME = 4,
    USER_FIELD_NAME_DISPLAY_NAME = 5,
    USER_FIELD_NAME_EMAIL = 6,
    USER_FIELD_NAME_STATE = 7,
    USER_FIELD_NAME_TYPE = 8,
    USER_FIELD_NAME_CREATION_DATE = 9,
    UNRECOGNIZED = -1
}
export declare function userFieldNameFromJSON(object: any): UserFieldName;
export declare function userFieldNameToJSON(object: UserFieldName): string;
export interface SearchQuery {
    userNameQuery?: UserNameQuery | undefined;
    firstNameQuery?: FirstNameQuery | undefined;
    lastNameQuery?: LastNameQuery | undefined;
    nickNameQuery?: NickNameQuery | undefined;
    displayNameQuery?: DisplayNameQuery | undefined;
    emailQuery?: EmailQuery | undefined;
    stateQuery?: StateQuery | undefined;
    typeQuery?: TypeQuery | undefined;
    loginNameQuery?: LoginNameQuery | undefined;
    inUserIdsQuery?: InUserIDQuery | undefined;
    orQuery?: OrQuery | undefined;
    andQuery?: AndQuery | undefined;
    notQuery?: NotQuery | undefined;
    inUserEmailsQuery?: InUserEmailsQuery | undefined;
    organizationIdQuery?: OrganizationIdQuery | undefined;
}
/** Connect multiple sub-condition with and OR operator. */
export interface OrQuery {
    queries: SearchQuery[];
}
/** Connect multiple sub-condition with and AND operator. */
export interface AndQuery {
    queries: SearchQuery[];
}
/** Negate the sub-condition. */
export interface NotQuery {
    query: SearchQuery | undefined;
}
/** Query for users with ID in list of IDs. */
export interface InUserIDQuery {
    userIds: string[];
}
/** Query for users with a specific user name. */
export interface UserNameQuery {
    userName: string;
    method: TextQueryMethod;
}
/** Query for users with a specific first name. */
export interface FirstNameQuery {
    firstName: string;
    method: TextQueryMethod;
}
/** Query for users with a specific last name. */
export interface LastNameQuery {
    lastName: string;
    method: TextQueryMethod;
}
/** Query for users with a specific nickname. */
export interface NickNameQuery {
    nickName: string;
    method: TextQueryMethod;
}
/** Query for users with a specific display name. */
export interface DisplayNameQuery {
    displayName: string;
    method: TextQueryMethod;
}
/** Query for users with a specific email. */
export interface EmailQuery {
    emailAddress: string;
    method: TextQueryMethod;
}
/** Query for users with a specific state. */
export interface LoginNameQuery {
    loginName: string;
    method: TextQueryMethod;
}
/** Query for users with a specific state. */
export interface StateQuery {
    state: UserState;
}
/** Query for users with a specific type. */
export interface TypeQuery {
    type: Type;
}
/** Query for users with email in list of emails. */
export interface InUserEmailsQuery {
    userEmails: string[];
}
/** Query for users under a specific organization as resource owner. */
export interface OrganizationIdQuery {
    organizationId: string;
}
export declare const SearchQuery: MessageFns<SearchQuery>;
export declare const OrQuery: MessageFns<OrQuery>;
export declare const AndQuery: MessageFns<AndQuery>;
export declare const NotQuery: MessageFns<NotQuery>;
export declare const InUserIDQuery: MessageFns<InUserIDQuery>;
export declare const UserNameQuery: MessageFns<UserNameQuery>;
export declare const FirstNameQuery: MessageFns<FirstNameQuery>;
export declare const LastNameQuery: MessageFns<LastNameQuery>;
export declare const NickNameQuery: MessageFns<NickNameQuery>;
export declare const DisplayNameQuery: MessageFns<DisplayNameQuery>;
export declare const EmailQuery: MessageFns<EmailQuery>;
export declare const LoginNameQuery: MessageFns<LoginNameQuery>;
export declare const StateQuery: MessageFns<StateQuery>;
export declare const TypeQuery: MessageFns<TypeQuery>;
export declare const InUserEmailsQuery: MessageFns<InUserEmailsQuery>;
export declare const OrganizationIdQuery: MessageFns<OrganizationIdQuery>;
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
