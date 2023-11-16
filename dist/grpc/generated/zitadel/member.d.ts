import Long from "long";
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";
import { Type } from "./user";
export declare const protobufPackage = "zitadel.member.v1";
export interface Member {
    userId: string;
    details: ObjectDetails | undefined;
    roles: string[];
    preferredLoginName: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    avatarUrl: string;
    userType: Type;
}
export interface SearchQuery {
    firstNameQuery?: FirstNameQuery | undefined;
    lastNameQuery?: LastNameQuery | undefined;
    emailQuery?: EmailQuery | undefined;
    userIdQuery?: UserIDQuery | undefined;
}
export interface FirstNameQuery {
    firstName: string;
    method: TextQueryMethod;
}
export interface LastNameQuery {
    lastName: string;
    method: TextQueryMethod;
}
export interface EmailQuery {
    email: string;
    method: TextQueryMethod;
}
export interface UserIDQuery {
    userId: string;
}
export declare const Member: {
    encode(message: Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Member;
    fromJSON(object: any): Member;
    toJSON(message: Member): unknown;
    create(base?: DeepPartial<Member>): Member;
    fromPartial(object: DeepPartial<Member>): Member;
};
export declare const SearchQuery: {
    encode(message: SearchQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchQuery;
    fromJSON(object: any): SearchQuery;
    toJSON(message: SearchQuery): unknown;
    create(base?: DeepPartial<SearchQuery>): SearchQuery;
    fromPartial(object: DeepPartial<SearchQuery>): SearchQuery;
};
export declare const FirstNameQuery: {
    encode(message: FirstNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FirstNameQuery;
    fromJSON(object: any): FirstNameQuery;
    toJSON(message: FirstNameQuery): unknown;
    create(base?: DeepPartial<FirstNameQuery>): FirstNameQuery;
    fromPartial(object: DeepPartial<FirstNameQuery>): FirstNameQuery;
};
export declare const LastNameQuery: {
    encode(message: LastNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastNameQuery;
    fromJSON(object: any): LastNameQuery;
    toJSON(message: LastNameQuery): unknown;
    create(base?: DeepPartial<LastNameQuery>): LastNameQuery;
    fromPartial(object: DeepPartial<LastNameQuery>): LastNameQuery;
};
export declare const EmailQuery: {
    encode(message: EmailQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmailQuery;
    fromJSON(object: any): EmailQuery;
    toJSON(message: EmailQuery): unknown;
    create(base?: DeepPartial<EmailQuery>): EmailQuery;
    fromPartial(object: DeepPartial<EmailQuery>): EmailQuery;
};
export declare const UserIDQuery: {
    encode(message: UserIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserIDQuery;
    fromJSON(object: any): UserIDQuery;
    toJSON(message: UserIDQuery): unknown;
    create(base?: DeepPartial<UserIDQuery>): UserIDQuery;
    fromPartial(object: DeepPartial<UserIDQuery>): UserIDQuery;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
