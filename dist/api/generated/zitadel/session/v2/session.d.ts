import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TimestampQueryMethod } from "../../object.js";
export declare const protobufPackage = "zitadel.session.v2";
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
export declare const Session: MessageFns<Session>;
export declare const Session_MetadataEntry: MessageFns<Session_MetadataEntry>;
export declare const Factors: MessageFns<Factors>;
export declare const UserFactor: MessageFns<UserFactor>;
export declare const PasswordFactor: MessageFns<PasswordFactor>;
export declare const IntentFactor: MessageFns<IntentFactor>;
export declare const WebAuthNFactor: MessageFns<WebAuthNFactor>;
export declare const TOTPFactor: MessageFns<TOTPFactor>;
export declare const OTPFactor: MessageFns<OTPFactor>;
export declare const SearchQuery: MessageFns<SearchQuery>;
export declare const IDsQuery: MessageFns<IDsQuery>;
export declare const UserIDQuery: MessageFns<UserIDQuery>;
export declare const CreationDateQuery: MessageFns<CreationDateQuery>;
export declare const UserAgent: MessageFns<UserAgent>;
export declare const UserAgent_HeaderValues: MessageFns<UserAgent_HeaderValues>;
export declare const UserAgent_HeaderEntry: MessageFns<UserAgent_HeaderEntry>;
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
