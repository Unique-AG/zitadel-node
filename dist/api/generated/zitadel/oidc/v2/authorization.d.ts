import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../google/protobuf/duration.js";
export declare const protobufPackage = "zitadel.oidc.v2";
export declare enum Prompt {
    PROMPT_UNSPECIFIED = 0,
    PROMPT_NONE = 1,
    PROMPT_LOGIN = 2,
    PROMPT_CONSENT = 3,
    PROMPT_SELECT_ACCOUNT = 4,
    PROMPT_CREATE = 5,
    UNRECOGNIZED = -1
}
export declare function promptFromJSON(object: any): Prompt;
export declare function promptToJSON(object: Prompt): string;
export declare enum ErrorReason {
    ERROR_REASON_UNSPECIFIED = 0,
    /** ERROR_REASON_INVALID_REQUEST - Error states from https://datatracker.ietf.org/doc/html/rfc6749#section-4.2.2.1 */
    ERROR_REASON_INVALID_REQUEST = 1,
    ERROR_REASON_UNAUTHORIZED_CLIENT = 2,
    ERROR_REASON_ACCESS_DENIED = 3,
    ERROR_REASON_UNSUPPORTED_RESPONSE_TYPE = 4,
    ERROR_REASON_INVALID_SCOPE = 5,
    ERROR_REASON_SERVER_ERROR = 6,
    ERROR_REASON_TEMPORARY_UNAVAILABLE = 7,
    /** ERROR_REASON_INTERACTION_REQUIRED - Error states from https://openid.net/specs/openid-connect-core-1_0.html#AuthError */
    ERROR_REASON_INTERACTION_REQUIRED = 8,
    ERROR_REASON_LOGIN_REQUIRED = 9,
    ERROR_REASON_ACCOUNT_SELECTION_REQUIRED = 10,
    ERROR_REASON_CONSENT_REQUIRED = 11,
    ERROR_REASON_INVALID_REQUEST_URI = 12,
    ERROR_REASON_INVALID_REQUEST_OBJECT = 13,
    ERROR_REASON_REQUEST_NOT_SUPPORTED = 14,
    ERROR_REASON_REQUEST_URI_NOT_SUPPORTED = 15,
    ERROR_REASON_REGISTRATION_NOT_SUPPORTED = 16,
    UNRECOGNIZED = -1
}
export declare function errorReasonFromJSON(object: any): ErrorReason;
export declare function errorReasonToJSON(object: ErrorReason): string;
/**
 * AuthRequest represents an OpenID Connect Authorization Request as defined in
 * https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
 */
export interface AuthRequest {
    /** The unique identifier of the authorization request. */
    id: string;
    /** The timestamp when the authorization request was created. */
    creationDate: Date | undefined;
    /** The OAuth2/OIDC client_id of the application that initiated the authorization request. */
    clientId: string;
    /** The scopes by the application that the user must consent to. */
    scope: string[];
    /**
     * The redirect_uri used in the authorization request. This must exactly match one of the redirect URIs registered for the client.
     * This uri is used to send the authorization code or tokens back to the application.
     */
    redirectUri: string;
    /** Prompts that must be displayed to the user. */
    prompt: Prompt[];
    /**
     * End-User's preferred languages and scripts for the user interface, represented as a list of BCP47 [RFC5646]
     * language tag values, ordered by preference.
     * For instance, the value [fr-CA, fr, en] represents a preference for French as spoken in Canada,
     * then French (without a region designation), followed by English (without a region designation).
     * An error SHOULD NOT result if some or all of the requested locales are not supported.
     */
    uiLocales: string[];
    /** Login hint can be set by the application with a user identifier such as an email or phone number. */
    loginHint?: string | undefined;
    /**
     * Specifies the allowable elapsed time in seconds since the last time the End-User was actively authenticated.
     * If the elapsed time is greater than this value, or the field is present with 0 duration, the user must be re-authenticated.
     */
    maxAge?: Duration | undefined;
    /** User ID taken from a ID Token Hint if it was present and valid. */
    hintUserId?: string | undefined;
}
export interface AuthorizationError {
    error: ErrorReason;
    errorDescription?: string | undefined;
    errorUri?: string | undefined;
}
export interface DeviceAuthorizationRequest {
    /** The unique identifier of the device authorization request to be used for authorizing or denying the request. */
    id: string;
    /** The client_id of the application that initiated the device authorization request. */
    clientId: string;
    /** The scopes requested by the application. */
    scope: string[];
    /** Name of the client application. */
    appName: string;
    /** Name of the project the client application is part of. */
    projectName: string;
}
export declare const AuthRequest: MessageFns<AuthRequest>;
export declare const AuthorizationError: MessageFns<AuthorizationError>;
export declare const DeviceAuthorizationRequest: MessageFns<DeviceAuthorizationRequest>;
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
