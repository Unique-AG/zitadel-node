import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { Duration } from "../../../google/protobuf/duration.js";
import { Details, ListDetails, ListQuery } from "../../object/v2/object.js";
import { Challenges, RequestChallenges } from "./challenge.js";
import { SearchQuery, Session, SessionFieldName, UserAgent } from "./session.js";
export declare const protobufPackage = "zitadel.session.v2";
export interface ListSessionsRequest {
    /** List limitations and ordering. */
    query: ListQuery | undefined;
    /**
     * The criteria to be used when searching for sessions.
     * Multiple queries will be combined with a logical AND.
     */
    queries: SearchQuery[];
    /** The column to be used for sorting the sessions. */
    sortingColumn: SessionFieldName;
}
export interface ListSessionsResponse {
    /** Contains details about the response, such as the total number of sessions. */
    details: ListDetails | undefined;
    /**
     * The sessions matching the search query. There might be more sessions available
     * than returned in this response. Use the details field to see if there are more sessions
     * available and to get the total count of sessions matching the query.
     */
    sessions: Session[];
}
export interface GetSessionRequest {
    /** The unique identifier of the session to be retrieved. */
    sessionId: string;
    /**
     * The current token of the session, previously returned on the create / update request.
     * The token is required unless either of the following conditions is met:
     * - the caller created the session
     * - the authenticated user requests their own session (checked user)
     * - the security token provided in the authorization header has the same user agent as the session
     * - the caller is granted the permission session.read permission on either the instance or on the checked user's organization
     */
    sessionToken?: string | undefined;
}
export interface GetSessionResponse {
    session: Session | undefined;
}
export interface CreateSessionRequest {
    /**
     * The checks to be performed during session creation.
     * Note that a user check can only be performed once per session and cannot be changed afterwards.
     * Some checks require that the user is already checked, either in the previous or the same
     * request. For example, a password check requires that the user is already checked.
     * Other checks, like WebAuthN or IDP intent, require that the user is already checked and a challenge
     * was requested in any previous request.
     * On successful checks, the session's `factors` field will be updated.
     */
    checks: Checks | undefined;
    /** Custom key value list to be stored on the session. */
    metadata: {
        [key: string]: Buffer;
    };
    /**
     * Challenges to be requested for further verification.
     * The challenges will be created and returned in the response.
     * The challenges can then be used for further checks with the following SetSession method.
     */
    challenges: RequestChallenges | undefined;
    /**
     * Store information about the user agent of the client.
     * This information is stored on the session and can be used for auditing or security purposes.
     * Sessions can also be filtered by user agent information.
     */
    userAgent: UserAgent | undefined;
    /**
     * Duration after which the session will be automatically invalidated.
     * If not set, the session will not expire automatically and must be deleted manually.
     * Note that an expired session cannot be used for authentication anymore, but will still be listed
     * until it is deleted.
     */
    lifetime?: Duration | undefined;
}
export interface CreateSessionRequest_MetadataEntry {
    key: string;
    value: Buffer;
}
export interface CreateSessionResponse {
    details: Details | undefined;
    /** Unique identifier of the session. */
    sessionId: string;
    /**
     * The current token of the session, which is required for using the session as authentication,
     * e.g.when authenticating an OIDC auth request or SAML request.
     * Additionally, the session token can be used as OAuth2 access token to authenticate against
     * the ZITADEL APIs.
     */
    sessionToken: string;
    /**
     * The challenges that were requested for the session.
     * The challenges can be used for further checks with the SetSession method.
     */
    challenges: Challenges | undefined;
}
export interface SetSessionRequest {
    /** The unique identifier of the session to be updated. */
    sessionId: string;
    /**
     * Deprecated: the session token is no longer required when updating a session
     * and will be ignored when provided.
     *
     * @deprecated
     */
    sessionToken: string;
    /**
     * Additional checks to be performed on the session.
     * Successful checks will be stated as factors on the session.
     * Re-executing a check that was already successful will overwrite the previous check time.
     * For example, if a password check was already successful, it can be re-checked to update the check time.
     * Note that a user check can only be performed once per session and cannot be changed afterwards.
     * Some checks require that the user is already checked, either in the previous or the same request.
     * For example, a password check requires that the user is already checked.
     * Other checks, like WebAuthN or IDP intent, require that the user is already checked and a challenge
     * was requested in any previous request.
     * On successful checks, the session's `factors` field will be updated.
     */
    checks: Checks | undefined;
    /**
     * Additional custom key value pairs to be stored on the session.
     * Existing keys will be overwritten. To delete a key, set its value to an empty byte array.
     * Note that metadata keys cannot be changed once the session has been created.
     * You need to create a new entry and delete the old one instead.
     */
    metadata: {
        [key: string]: Buffer;
    };
    /**
     * Additional challenges to be requested for further verification.
     * The challenges will be created and returned in the response.
     * The challenges can then be used for further checks with the following SetSession method.
     * Requesting a challenge that was already requested will overwrite the previous challenge.
     */
    challenges: RequestChallenges | undefined;
    /**
     * Update the duration after which the session will be automatically invalidated.
     * If not set, the lifetime will not be changed.
     * Note that an expired session cannot be used for authentication anymore, but will still be listed
     * until it is deleted.
     */
    lifetime?: Duration | undefined;
}
export interface SetSessionRequest_MetadataEntry {
    key: string;
    value: Buffer;
}
export interface SetSessionResponse {
    details: Details | undefined;
    /**
     * The current token of the session, which is required for using the session as authentication,
     * e.g.when authenticating an OIDC auth request or SAML request.
     * Additionally, the session token can be used as OAuth2 access token to authenticate against
     * the ZITADEL APIs.
     * The previous token was invalidated and can no longer be used.
     */
    sessionToken: string;
    /**
     * The challenges that were requested for the session.
     * The challenges can be used for further checks with the SetSession method.
     */
    challenges: Challenges | undefined;
}
export interface DeleteSessionRequest {
    /** The unique identifier of the session to be terminated. */
    sessionId: string;
    /**
     * The current token of the session, previously returned on the create / update request.
     * The token is required unless either of the following conditions is met:
     * - the caller created the session
     * - the authenticated user requests their own session (checked user)
     * - the security token provided in the authorization header has the same user agent as the session
     * - the caller is granted the permission session.delete permission on either the instance or on the checked user's organization
     */
    sessionToken?: string | undefined;
}
export interface DeleteSessionResponse {
    details: Details | undefined;
}
export interface Checks {
    /**
     * Check the user by its user ID or login name.
     * A user check can only be performed once per session and cannot be changed afterwards.
     * On successful user check, the session's `factors` field will be updated with a `user` factor
     * containing the checked user's ID, login name, display name, organization ID and verification time.
     * Note that some other checks require that the user is already checked, either in the previous
     * or the same request. For example, a password check requires that the user is already checked.
     */
    user?: CheckUser | undefined;
    /**
     * Check the password and update the session on success.
     * Requires that the user is already checked, either in the previous or the same request.
     * On successful password check, the session's `factors` field will be updated with a `password` factor,
     * containing the verification time.
     * On failed password check id: "COMMAND-3M0fs" wll be returned.
     * On user locked out id: "COMMAND-JLK35"/"COMMAND-SFA3t" will be returned.
     */
    password?: CheckPassword | undefined;
    /**
     * Check the public key credential issued by the WebAuthN client.
     * Requires that the user is already checked and a WebAuthN challenge to be requested,
     * in any previous request.
     * On successful WebAuthN check, the session's `factors` field will be updated with a `webauthn` factor,
     * containing the verification time and if the user presence was verified.
     */
    webAuthN?: CheckWebAuthN | undefined;
    /**
     * Check the IDP intent and update the session on success.
     * Requires that the user is already checked and an IDP intent succeeded and has not expired yet.
     * Note that the IDP intent must be either matching the same user as checked in the session,
     * or there must not be an external IDP linked to the intent's user.
     * On successful IDP intent check, the session's `factors` field will be updated with an `intent` factor,
     * containing the verification time.
     */
    idpIntent?: CheckIDPIntent | undefined;
    /**
     * Check the Time-based One-Time Password and update the session on success.
     * Requires that the user is already checked, either in the previous or the same request.
     * On successful TOTP check, the session's `factors` field will be updated with a `totp` factor,
     * containing the verification time.
     */
    totp?: CheckTOTP | undefined;
    /**
     * Check the One-Time Password sent over SMS and update the session on success.
     * Requires that the user is already checked, either in the previous or the same request.
     * On successful OTP SMS check, the session's `factors` field will be updated with an `otp` factor,
     * containing the verification time.
     * Note that the OTP code is valid for a single use only and will be invalidated after a successful check.
     */
    otpSms?: CheckOTP | undefined;
    /**
     * Check the One-Time Password sent over Email and update the session on success.
     * Requires that the user is already checked, either in the previous or the same request.
     * On successful OTP Email check, the session's `factors` field will be updated with an `otp` factor,
     * containing the verification time.
     * Note that the OTP code is valid for a single use only and will be invalidated after a successful check.
     */
    otpEmail?: CheckOTP | undefined;
}
export interface CheckUser {
    /** The unique identifier of the user to be checked. */
    userId?: string | undefined;
    /**
     * The login name of the user to be checked. It will search case insensitive.
     * Note this only checks for the computed login name and not for any organization scoped usernames.
     * Also note that it will not check for emails or phone numbers, even if the corresponding
     * setting is enabled. Use the user service ListUsers method to find a user by email or phone number first
     * to obtain the user ID or login name.
     */
    loginName?: string | undefined;
}
export interface CheckPassword {
    /** The password of the user to be checked. */
    password: string;
}
export interface CheckWebAuthN {
    /** The JSON representation of the public key credential issued by the WebAuthN client. */
    credentialAssertionData: {
        [key: string]: any;
    } | undefined;
}
export interface CheckIDPIntent {
    /** The ID of the idp intent, previously returned on the success response of the IDP callback. */
    idpIntentId: string;
    /** The token of the idp intent, previously returned on the success response of the IDP callback. */
    idpIntentToken: string;
}
export interface CheckTOTP {
    /** The Time-based One-Time Password generated by the user's TOTP authenticator app. */
    code: string;
}
export interface CheckOTP {
    /** The One-Time Password sent over SMS or Email of the user to be checked. */
    code: string;
}
export declare const ListSessionsRequest: MessageFns<ListSessionsRequest>;
export declare const ListSessionsResponse: MessageFns<ListSessionsResponse>;
export declare const GetSessionRequest: MessageFns<GetSessionRequest>;
export declare const GetSessionResponse: MessageFns<GetSessionResponse>;
export declare const CreateSessionRequest: MessageFns<CreateSessionRequest>;
export declare const CreateSessionRequest_MetadataEntry: MessageFns<CreateSessionRequest_MetadataEntry>;
export declare const CreateSessionResponse: MessageFns<CreateSessionResponse>;
export declare const SetSessionRequest: MessageFns<SetSessionRequest>;
export declare const SetSessionRequest_MetadataEntry: MessageFns<SetSessionRequest_MetadataEntry>;
export declare const SetSessionResponse: MessageFns<SetSessionResponse>;
export declare const DeleteSessionRequest: MessageFns<DeleteSessionRequest>;
export declare const DeleteSessionResponse: MessageFns<DeleteSessionResponse>;
export declare const Checks: MessageFns<Checks>;
export declare const CheckUser: MessageFns<CheckUser>;
export declare const CheckPassword: MessageFns<CheckPassword>;
export declare const CheckWebAuthN: MessageFns<CheckWebAuthN>;
export declare const CheckIDPIntent: MessageFns<CheckIDPIntent>;
export declare const CheckTOTP: MessageFns<CheckTOTP>;
export declare const CheckOTP: MessageFns<CheckOTP>;
export type SessionServiceDefinition = typeof SessionServiceDefinition;
export declare const SessionServiceDefinition: {
    readonly name: "SessionService";
    readonly fullName: "zitadel.session.v2.SessionService";
    readonly methods: {
        /**
         * List sessions
         *
         * Searches for sessions matching the given query. You can search by session ID, user ID,
         * creation date, creator, user agent or expiration date.
         *
         * Required permissions:
         *   - `session.read`
         *   - no permission required to search for own sessions
         */
        readonly listSessions: {
            readonly name: "ListSessions";
            readonly requestType: MessageFns<ListSessionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListSessionsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Get Session
         *
         * Retrieve a session by its ID. Returns all information about the session, including
         * the factors that were verified, the metadata, user agent information and possible expiration date.
         * The session token is required unless either of the following conditions is met:
         *   - the caller created the session
         *   - the authenticated user requests their own session (checked user)
         *   - the security token provided in the authorization header has the same user agent as the session
         *   - the caller is granted the permission session.read permission on either the instance or on the checked user's organization
         *
         * Required permissions:
         *   - `session.read`
         *   - no permission required to get own sessions (see above) or when providing the current session token
         */
        readonly getSession: {
            readonly name: "GetSession";
            readonly requestType: MessageFns<GetSessionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSessionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Create Session
         *
         * Create a new session with initial checks, metadata and challenges for further verification.
         * A token will be returned, which is required for using the session as authentication, e.g.
         * when authenticating an OIDC auth request or SAML request.
         * Additionally, the session token can be used as OAuth2 access token to authenticate against
         * the ZITADEL APIs.
         *
         * Required permissions:
         *   - `session.write`
         */
        readonly createSession: {
            readonly name: "CreateSession";
            readonly requestType: MessageFns<CreateSessionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateSessionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Set Session
         *
         * Update an existing session with new information like additional checks or metadata
         * or request additional challenges.
         * A new session token will be returned. Note that the previous token will be invalidated.
         *
         * Required permissions:
         *   - `session.write`
         */
        readonly setSession: {
            readonly name: "SetSession";
            readonly requestType: MessageFns<SetSessionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetSessionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * DeleteSession
         *
         * Terminate an existing session. This invalidates the session and its token.
         * The session can no longer be used for the authentication of other resources
         * or to authenticate against the ZITADEL APIs.
         *
         * You can only terminate your own session, unless you are granted the `session.delete` permission.
         *
         * Required permissions:
         *   - `session.delete`
         *   - no permission required for own sessions or when providing the current session token
         */
        readonly deleteSession: {
            readonly name: "DeleteSession";
            readonly requestType: MessageFns<DeleteSessionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteSessionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface SessionServiceImplementation<CallContextExt = {}> {
    /**
     * List sessions
     *
     * Searches for sessions matching the given query. You can search by session ID, user ID,
     * creation date, creator, user agent or expiration date.
     *
     * Required permissions:
     *   - `session.read`
     *   - no permission required to search for own sessions
     */
    listSessions(request: ListSessionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListSessionsResponse>>;
    /**
     * Get Session
     *
     * Retrieve a session by its ID. Returns all information about the session, including
     * the factors that were verified, the metadata, user agent information and possible expiration date.
     * The session token is required unless either of the following conditions is met:
     *   - the caller created the session
     *   - the authenticated user requests their own session (checked user)
     *   - the security token provided in the authorization header has the same user agent as the session
     *   - the caller is granted the permission session.read permission on either the instance or on the checked user's organization
     *
     * Required permissions:
     *   - `session.read`
     *   - no permission required to get own sessions (see above) or when providing the current session token
     */
    getSession(request: GetSessionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSessionResponse>>;
    /**
     * Create Session
     *
     * Create a new session with initial checks, metadata and challenges for further verification.
     * A token will be returned, which is required for using the session as authentication, e.g.
     * when authenticating an OIDC auth request or SAML request.
     * Additionally, the session token can be used as OAuth2 access token to authenticate against
     * the ZITADEL APIs.
     *
     * Required permissions:
     *   - `session.write`
     */
    createSession(request: CreateSessionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateSessionResponse>>;
    /**
     * Set Session
     *
     * Update an existing session with new information like additional checks or metadata
     * or request additional challenges.
     * A new session token will be returned. Note that the previous token will be invalidated.
     *
     * Required permissions:
     *   - `session.write`
     */
    setSession(request: SetSessionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetSessionResponse>>;
    /**
     * DeleteSession
     *
     * Terminate an existing session. This invalidates the session and its token.
     * The session can no longer be used for the authentication of other resources
     * or to authenticate against the ZITADEL APIs.
     *
     * You can only terminate your own session, unless you are granted the `session.delete` permission.
     *
     * Required permissions:
     *   - `session.delete`
     *   - no permission required for own sessions or when providing the current session token
     */
    deleteSession(request: DeleteSessionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteSessionResponse>>;
}
export interface SessionServiceClient<CallOptionsExt = {}> {
    /**
     * List sessions
     *
     * Searches for sessions matching the given query. You can search by session ID, user ID,
     * creation date, creator, user agent or expiration date.
     *
     * Required permissions:
     *   - `session.read`
     *   - no permission required to search for own sessions
     */
    listSessions(request: DeepPartial<ListSessionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListSessionsResponse>;
    /**
     * Get Session
     *
     * Retrieve a session by its ID. Returns all information about the session, including
     * the factors that were verified, the metadata, user agent information and possible expiration date.
     * The session token is required unless either of the following conditions is met:
     *   - the caller created the session
     *   - the authenticated user requests their own session (checked user)
     *   - the security token provided in the authorization header has the same user agent as the session
     *   - the caller is granted the permission session.read permission on either the instance or on the checked user's organization
     *
     * Required permissions:
     *   - `session.read`
     *   - no permission required to get own sessions (see above) or when providing the current session token
     */
    getSession(request: DeepPartial<GetSessionRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSessionResponse>;
    /**
     * Create Session
     *
     * Create a new session with initial checks, metadata and challenges for further verification.
     * A token will be returned, which is required for using the session as authentication, e.g.
     * when authenticating an OIDC auth request or SAML request.
     * Additionally, the session token can be used as OAuth2 access token to authenticate against
     * the ZITADEL APIs.
     *
     * Required permissions:
     *   - `session.write`
     */
    createSession(request: DeepPartial<CreateSessionRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateSessionResponse>;
    /**
     * Set Session
     *
     * Update an existing session with new information like additional checks or metadata
     * or request additional challenges.
     * A new session token will be returned. Note that the previous token will be invalidated.
     *
     * Required permissions:
     *   - `session.write`
     */
    setSession(request: DeepPartial<SetSessionRequest>, options?: CallOptions & CallOptionsExt): Promise<SetSessionResponse>;
    /**
     * DeleteSession
     *
     * Terminate an existing session. This invalidates the session and its token.
     * The session can no longer be used for the authentication of other resources
     * or to authenticate against the ZITADEL APIs.
     *
     * You can only terminate your own session, unless you are granted the `session.delete` permission.
     *
     * Required permissions:
     *   - `session.delete`
     *   - no permission required for own sessions or when providing the current session token
     */
    deleteSession(request: DeepPartial<DeleteSessionRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteSessionResponse>;
}
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
