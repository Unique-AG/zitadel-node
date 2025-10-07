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
    /** Unique identifier of the session. */
    id: string;
    /** The timestamp the session was created. */
    creationDate: Date | undefined;
    /** The timestamp the session was last updated. */
    changeDate: Date | undefined;
    /** The sequence of the session represents the change sequence of the session. */
    sequence: Long;
    /**
     * The factors that have been checked for this session, e.g. the user, password and more.
     * If a factor is set, it means it has been checked and is valid.
     * If a factor is not set, it means it has not been checked or is invalid.
     * If a factor is set, the verified_at timestamp indicates when it was last checked.
     */
    factors: Factors | undefined;
    /**
     * Metadata contains custom key value pairs set by the user.
     * The metadata is not interpreted by ZITADEL and can be used to store any information
     * relevant to the session.
     */
    metadata: {
        [key: string]: Buffer;
    };
    /**
     * UserAgent contains information about the user agent used to create the session.
     * This can include information such as the IP address, browser type, and operating system and
     * a fingerprint id.
     * This can be used to identify and filter sessions based on the user agent.
     */
    userAgent: UserAgent | undefined;
    /**
     * ExpirationDate is the time the session will be automatically invalidated.
     * If not set, the session does not expire automatically.
     */
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
    /** The timestamp when the user was last verified. */
    verifiedAt: Date | undefined;
    /** The unique identifier of the user that was verified. */
    id: string;
    /** The login name of the user that was verified. */
    loginName: string;
    /** The display name of the user that was verified. */
    displayName: string;
    /** The id of the organization the user belongs to. */
    organizationId: string;
}
export interface PasswordFactor {
    /** The timestamp when the password was last verified. */
    verifiedAt: Date | undefined;
}
export interface IntentFactor {
    /** The timestamp when the intent was last verified. */
    verifiedAt: Date | undefined;
}
export interface WebAuthNFactor {
    /** The timestamp when the passkey challenge was last verified. */
    verifiedAt: Date | undefined;
    /**
     * Indicates if the user presence was verified during the last challenge.
     * This can be used to determine if the factor can be considered as multi-factor authentication.
     */
    userVerified: boolean;
}
export interface TOTPFactor {
    /** The timestamp when the Time-based One-Time Password was last verified. */
    verifiedAt: Date | undefined;
}
export interface OTPFactor {
    /** The timestamp when the One-Time Password was last verified either by SMS or Email. */
    verifiedAt: Date | undefined;
}
export interface SearchQuery {
    /** Search for sessions with the given IDs. */
    idsQuery?: IDsQuery | undefined;
    /** Search for sessions of the given user ID. */
    userIdQuery?: UserIDQuery | undefined;
    /**
     * Search for sessions based on their creation date.
     * This can be used to find sessions created before or after a certain date.
     */
    creationDateQuery?: CreationDateQuery | undefined;
    /** Search for sessions created by a specific user. */
    creatorQuery?: CreatorQuery | undefined;
    /**
     * Search for sessions based on the user agent used to create the session.
     * It can be used to find sessions created from a specific device or browser.
     * This is typically done for providing a list of active sessions to the user
     * in a user interface.
     */
    userAgentQuery?: UserAgentQuery | undefined;
    /**
     * Search for sessions based on their expiration date.
     * This can be used to find sessions that are set to expire before or after a certain date.
     */
    expirationDateQuery?: ExpirationDateQuery | undefined;
}
export interface IDsQuery {
    /**
     * List of session IDs to search for.
     * If multiple IDs are provided, sessions matching any of the IDs will be returned.
     */
    ids: string[];
}
export interface UserIDQuery {
    /** ID of the user whose sessions are being searched for. */
    id: string;
}
export interface CreationDateQuery {
    /** The creation date to compare the session's creation date against. */
    creationDate: Date | undefined;
    /**
     * The method of comparison to use for the creation date.
     * This defines whether to search for sessions created before, after, or exactly at the specified date.
     */
    method: TimestampQueryMethod;
}
export interface CreatorQuery {
    /** ID of the user who created the session. If empty, the calling user's ID is used. */
    id?: string | undefined;
}
export interface UserAgentQuery {
    /**
     * Finger print id of the user agent used for the session.
     * Set an empty fingerprint_id to use the user agent from the call.
     * If the user agent is not available from the current token, an error will be returned.
     */
    fingerprintId?: string | undefined;
}
export interface ExpirationDateQuery {
    /** The expiration date to compare the session's expiration date against. */
    expirationDate: Date | undefined;
    /**
     * The method of comparison to use for the expiration date.
     * This defines whether to search for sessions expiring before, after, or exactly at the specified date.
     */
    method: TimestampQueryMethod;
}
export interface UserAgent {
    /**
     * FingerprintID is a unique identifier for the user agent's fingerprint.
     * It can be used to group sessions by device or browser.
     */
    fingerprintId?: string | undefined;
    /** IP is the IP address from which the session was created. */
    ip?: string | undefined;
    /** Description is a human-readable description of the user agent. */
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
export declare const CreatorQuery: MessageFns<CreatorQuery>;
export declare const UserAgentQuery: MessageFns<UserAgentQuery>;
export declare const ExpirationDateQuery: MessageFns<ExpirationDateQuery>;
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
