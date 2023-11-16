/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { TimestampQueryMethod } from "../../object";
export declare const protobufPackage = "zitadel.session.v2beta";
export declare enum SessionFieldName {
    SESSION_FIELD_NAME_UNSPECIFIED = 0,
    SESSION_FIELD_NAME_CREATION_DATE = 1,
    UNRECOGNIZED = -1
}
export declare function sessionFieldNameFromJSON(object: any): SessionFieldName;
export declare function sessionFieldNameToJSON(object: SessionFieldName): string;
export interface Session {
    id: string;
    creationDate: Date | undefined;
    changeDate: Date | undefined;
    sequence: Long;
    factors: Factors | undefined;
    metadata: {
        [key: string]: Buffer;
    };
    userAgent: UserAgent | undefined;
    expirationDate?: Date | undefined;
}
export interface Session_MetadataEntry {
    key: string;
    value: Buffer;
}
export interface Factors {
    user: UserFactor | undefined;
    password: PasswordFactor | undefined;
    webAuthN: WebAuthNFactor | undefined;
    intent: IntentFactor | undefined;
    totp: TOTPFactor | undefined;
    otpSms: OTPFactor | undefined;
    otpEmail: OTPFactor | undefined;
}
export interface UserFactor {
    verifiedAt: Date | undefined;
    id: string;
    loginName: string;
    displayName: string;
    /** deprecated: use organization_id, will be remove before GA (https://github.com/zitadel/zitadel/issues/6718) */
    organisationId: string;
    organizationId: string;
}
export interface PasswordFactor {
    verifiedAt: Date | undefined;
}
export interface IntentFactor {
    verifiedAt: Date | undefined;
}
export interface WebAuthNFactor {
    verifiedAt: Date | undefined;
    userVerified: boolean;
}
export interface TOTPFactor {
    verifiedAt: Date | undefined;
}
export interface OTPFactor {
    verifiedAt: Date | undefined;
}
export interface SearchQuery {
    idsQuery?: IDsQuery | undefined;
    userIdQuery?: UserIDQuery | undefined;
    creationDateQuery?: CreationDateQuery | undefined;
}
export interface IDsQuery {
    ids: string[];
}
export interface UserIDQuery {
    id: string;
}
export interface CreationDateQuery {
    creationDate: Date | undefined;
    method: TimestampQueryMethod;
}
export interface UserAgent {
    fingerprintId?: string | undefined;
    ip?: string | undefined;
    description?: string | undefined;
    header: {
        [key: string]: UserAgent_HeaderValues;
    };
}
/**
 * A header may have multiple values.
 * In Go, headers are defined
 * as map[string][]string, but protobuf
 * doesn't allow this scheme.
 */
export interface UserAgent_HeaderValues {
    values: string[];
}
export interface UserAgent_HeaderEntry {
    key: string;
    value: UserAgent_HeaderValues | undefined;
}
export declare const Session: {
    encode(message: Session, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Session;
    fromJSON(object: any): Session;
    toJSON(message: Session): unknown;
    create(base?: DeepPartial<Session>): Session;
    fromPartial(object: DeepPartial<Session>): Session;
};
export declare const Session_MetadataEntry: {
    encode(message: Session_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Session_MetadataEntry;
    fromJSON(object: any): Session_MetadataEntry;
    toJSON(message: Session_MetadataEntry): unknown;
    create(base?: DeepPartial<Session_MetadataEntry>): Session_MetadataEntry;
    fromPartial(object: DeepPartial<Session_MetadataEntry>): Session_MetadataEntry;
};
export declare const Factors: {
    encode(message: Factors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Factors;
    fromJSON(object: any): Factors;
    toJSON(message: Factors): unknown;
    create(base?: DeepPartial<Factors>): Factors;
    fromPartial(object: DeepPartial<Factors>): Factors;
};
export declare const UserFactor: {
    encode(message: UserFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFactor;
    fromJSON(object: any): UserFactor;
    toJSON(message: UserFactor): unknown;
    create(base?: DeepPartial<UserFactor>): UserFactor;
    fromPartial(object: DeepPartial<UserFactor>): UserFactor;
};
export declare const PasswordFactor: {
    encode(message: PasswordFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordFactor;
    fromJSON(object: any): PasswordFactor;
    toJSON(message: PasswordFactor): unknown;
    create(base?: DeepPartial<PasswordFactor>): PasswordFactor;
    fromPartial(object: DeepPartial<PasswordFactor>): PasswordFactor;
};
export declare const IntentFactor: {
    encode(message: IntentFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntentFactor;
    fromJSON(object: any): IntentFactor;
    toJSON(message: IntentFactor): unknown;
    create(base?: DeepPartial<IntentFactor>): IntentFactor;
    fromPartial(object: DeepPartial<IntentFactor>): IntentFactor;
};
export declare const WebAuthNFactor: {
    encode(message: WebAuthNFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WebAuthNFactor;
    fromJSON(object: any): WebAuthNFactor;
    toJSON(message: WebAuthNFactor): unknown;
    create(base?: DeepPartial<WebAuthNFactor>): WebAuthNFactor;
    fromPartial(object: DeepPartial<WebAuthNFactor>): WebAuthNFactor;
};
export declare const TOTPFactor: {
    encode(message: TOTPFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TOTPFactor;
    fromJSON(object: any): TOTPFactor;
    toJSON(message: TOTPFactor): unknown;
    create(base?: DeepPartial<TOTPFactor>): TOTPFactor;
    fromPartial(object: DeepPartial<TOTPFactor>): TOTPFactor;
};
export declare const OTPFactor: {
    encode(message: OTPFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OTPFactor;
    fromJSON(object: any): OTPFactor;
    toJSON(message: OTPFactor): unknown;
    create(base?: DeepPartial<OTPFactor>): OTPFactor;
    fromPartial(object: DeepPartial<OTPFactor>): OTPFactor;
};
export declare const SearchQuery: {
    encode(message: SearchQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchQuery;
    fromJSON(object: any): SearchQuery;
    toJSON(message: SearchQuery): unknown;
    create(base?: DeepPartial<SearchQuery>): SearchQuery;
    fromPartial(object: DeepPartial<SearchQuery>): SearchQuery;
};
export declare const IDsQuery: {
    encode(message: IDsQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDsQuery;
    fromJSON(object: any): IDsQuery;
    toJSON(message: IDsQuery): unknown;
    create(base?: DeepPartial<IDsQuery>): IDsQuery;
    fromPartial(object: DeepPartial<IDsQuery>): IDsQuery;
};
export declare const UserIDQuery: {
    encode(message: UserIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserIDQuery;
    fromJSON(object: any): UserIDQuery;
    toJSON(message: UserIDQuery): unknown;
    create(base?: DeepPartial<UserIDQuery>): UserIDQuery;
    fromPartial(object: DeepPartial<UserIDQuery>): UserIDQuery;
};
export declare const CreationDateQuery: {
    encode(message: CreationDateQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreationDateQuery;
    fromJSON(object: any): CreationDateQuery;
    toJSON(message: CreationDateQuery): unknown;
    create(base?: DeepPartial<CreationDateQuery>): CreationDateQuery;
    fromPartial(object: DeepPartial<CreationDateQuery>): CreationDateQuery;
};
export declare const UserAgent: {
    encode(message: UserAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAgent;
    fromJSON(object: any): UserAgent;
    toJSON(message: UserAgent): unknown;
    create(base?: DeepPartial<UserAgent>): UserAgent;
    fromPartial(object: DeepPartial<UserAgent>): UserAgent;
};
export declare const UserAgent_HeaderValues: {
    encode(message: UserAgent_HeaderValues, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAgent_HeaderValues;
    fromJSON(object: any): UserAgent_HeaderValues;
    toJSON(message: UserAgent_HeaderValues): unknown;
    create(base?: DeepPartial<UserAgent_HeaderValues>): UserAgent_HeaderValues;
    fromPartial(object: DeepPartial<UserAgent_HeaderValues>): UserAgent_HeaderValues;
};
export declare const UserAgent_HeaderEntry: {
    encode(message: UserAgent_HeaderEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAgent_HeaderEntry;
    fromJSON(object: any): UserAgent_HeaderEntry;
    toJSON(message: UserAgent_HeaderEntry): unknown;
    create(base?: DeepPartial<UserAgent_HeaderEntry>): UserAgent_HeaderEntry;
    fromPartial(object: DeepPartial<UserAgent_HeaderEntry>): UserAgent_HeaderEntry;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
