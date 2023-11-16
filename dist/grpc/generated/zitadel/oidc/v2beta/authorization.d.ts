import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "zitadel.oidc.v2beta";
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
export interface AuthRequest {
    id: string;
    creationDate: Date | undefined;
    clientId: string;
    scope: string[];
    redirectUri: string;
    prompt: Prompt[];
    uiLocales: string[];
    loginHint?: string | undefined;
    maxAge?: Duration | undefined;
    hintUserId?: string | undefined;
}
export interface AuthorizationError {
    error: ErrorReason;
    errorDescription?: string | undefined;
    errorUri?: string | undefined;
}
export declare const AuthRequest: {
    encode(message: AuthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthRequest;
    fromJSON(object: any): AuthRequest;
    toJSON(message: AuthRequest): unknown;
    create(base?: DeepPartial<AuthRequest>): AuthRequest;
    fromPartial(object: DeepPartial<AuthRequest>): AuthRequest;
};
export declare const AuthorizationError: {
    encode(message: AuthorizationError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationError;
    fromJSON(object: any): AuthorizationError;
    toJSON(message: AuthorizationError): unknown;
    create(base?: DeepPartial<AuthorizationError>): AuthorizationError;
    fromPartial(object: DeepPartial<AuthorizationError>): AuthorizationError;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
