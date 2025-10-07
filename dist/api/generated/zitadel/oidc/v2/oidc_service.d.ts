import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { Details } from "../../object/v2/object.js";
import { AuthorizationError, AuthRequest, DeviceAuthorizationRequest } from "./authorization.js";
export declare const protobufPackage = "zitadel.oidc.v2";
export interface GetAuthRequestRequest {
    /** The ID of the Auth Request, as obtained from the redirect URL. */
    authRequestId: string;
}
export interface GetAuthRequestResponse {
    authRequest: AuthRequest | undefined;
}
export interface CreateCallbackRequest {
    /** The ID of the Auth Request to finalize. */
    authRequestId: string;
    /** The session of the authenticated user, to finalize the authorization request. */
    session?: Session | undefined;
    /**
     * The error that occurred during the authorization flow, to inform the application.
     * This creates a callback URL with the error details set.
     * See: https://openid.net/specs/openid-connect-core-1_0.html#AuthError
     */
    error?: AuthorizationError | undefined;
}
export interface Session {
    /** ID of the session, used to login the user. Connects the session to the Auth Request. */
    sessionId: string;
    /** Token of the session used to login the user. This token verifies that the session is valid. */
    sessionToken: string;
}
export interface CreateCallbackResponse {
    details: Details | undefined;
    /**
     * The callback URL where the user should be redirected using an HTTP "302 FOUND" status.
     * This contains details for the application to obtain the tokens on success, or error details on failure.
     * Note that this field must be treated as credentials, as the contained code can be used to obtain tokens on behalf of the user."
     */
    callbackUrl: string;
}
export interface GetDeviceAuthorizationRequestRequest {
    /** The user_code returned by the device authorization request and provided to the user by the device. */
    userCode: string;
}
export interface GetDeviceAuthorizationRequestResponse {
    deviceAuthorizationRequest: DeviceAuthorizationRequest | undefined;
}
export interface AuthorizeOrDenyDeviceAuthorizationRequest {
    /** The device authorization id returned when submitting the user code. */
    deviceAuthorizationId: string;
    /** To authorize the device authorization request, the user's session must be provided. */
    session?: Session | undefined;
    /** Deny the device authorization request. */
    deny?: Deny | undefined;
}
export interface Deny {
}
export interface AuthorizeOrDenyDeviceAuthorizationResponse {
}
export declare const GetAuthRequestRequest: MessageFns<GetAuthRequestRequest>;
export declare const GetAuthRequestResponse: MessageFns<GetAuthRequestResponse>;
export declare const CreateCallbackRequest: MessageFns<CreateCallbackRequest>;
export declare const Session: MessageFns<Session>;
export declare const CreateCallbackResponse: MessageFns<CreateCallbackResponse>;
export declare const GetDeviceAuthorizationRequestRequest: MessageFns<GetDeviceAuthorizationRequestRequest>;
export declare const GetDeviceAuthorizationRequestResponse: MessageFns<GetDeviceAuthorizationRequestResponse>;
export declare const AuthorizeOrDenyDeviceAuthorizationRequest: MessageFns<AuthorizeOrDenyDeviceAuthorizationRequest>;
export declare const Deny: MessageFns<Deny>;
export declare const AuthorizeOrDenyDeviceAuthorizationResponse: MessageFns<AuthorizeOrDenyDeviceAuthorizationResponse>;
export type OIDCServiceDefinition = typeof OIDCServiceDefinition;
export declare const OIDCServiceDefinition: {
    readonly name: "OIDCService";
    readonly fullName: "zitadel.oidc.v2.OIDCService";
    readonly methods: {
        /**
         * Get Auth Request
         *
         * Get OIDC Auth Request details by ID, obtained from the redirect URL.
         * Returns details that are parsed from the application's Auth Request.
         *
         * Required permissions:
         *   - `session.read`
         */
        readonly getAuthRequest: {
            readonly name: "GetAuthRequest";
            readonly requestType: MessageFns<GetAuthRequestRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetAuthRequestResponse>;
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
         * Create Callback
         *
         * Finalize an Auth Request and get the callback URL for success or failure.
         * The user must be redirected to the URL in order to inform the application about the success or failure.
         * On success, the URL contains details for the application to obtain the tokens.
         * This method can only be called once for an Auth request.
         *
         * Required permissions:
         *   - `session.link`
         */
        readonly createCallback: {
            readonly name: "CreateCallback";
            readonly requestType: MessageFns<CreateCallbackRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateCallbackResponse>;
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
         * Get Device Authorization Request
         *
         * Get the device authorization based on the provided "user code".
         * This will return the device authorization request, which contains the device authorization id
         * that is required to authorize the request once the user signed in or to deny it.
         *
         * Required permissions:
         *   - `session.read`
         */
        readonly getDeviceAuthorizationRequest: {
            readonly name: "GetDeviceAuthorizationRequest";
            readonly requestType: MessageFns<GetDeviceAuthorizationRequestRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDeviceAuthorizationRequestResponse>;
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
         * Authorize or Deny Device Authorization
         *
         * Authorize or deny the device authorization request based on the provided device authorization id.
         *
         * Required permissions:
         *   - `session.link`
         */
        readonly authorizeOrDenyDeviceAuthorization: {
            readonly name: "AuthorizeOrDenyDeviceAuthorization";
            readonly requestType: MessageFns<AuthorizeOrDenyDeviceAuthorizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AuthorizeOrDenyDeviceAuthorizationResponse>;
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
export interface OIDCServiceImplementation<CallContextExt = {}> {
    /**
     * Get Auth Request
     *
     * Get OIDC Auth Request details by ID, obtained from the redirect URL.
     * Returns details that are parsed from the application's Auth Request.
     *
     * Required permissions:
     *   - `session.read`
     */
    getAuthRequest(request: GetAuthRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAuthRequestResponse>>;
    /**
     * Create Callback
     *
     * Finalize an Auth Request and get the callback URL for success or failure.
     * The user must be redirected to the URL in order to inform the application about the success or failure.
     * On success, the URL contains details for the application to obtain the tokens.
     * This method can only be called once for an Auth request.
     *
     * Required permissions:
     *   - `session.link`
     */
    createCallback(request: CreateCallbackRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateCallbackResponse>>;
    /**
     * Get Device Authorization Request
     *
     * Get the device authorization based on the provided "user code".
     * This will return the device authorization request, which contains the device authorization id
     * that is required to authorize the request once the user signed in or to deny it.
     *
     * Required permissions:
     *   - `session.read`
     */
    getDeviceAuthorizationRequest(request: GetDeviceAuthorizationRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDeviceAuthorizationRequestResponse>>;
    /**
     * Authorize or Deny Device Authorization
     *
     * Authorize or deny the device authorization request based on the provided device authorization id.
     *
     * Required permissions:
     *   - `session.link`
     */
    authorizeOrDenyDeviceAuthorization(request: AuthorizeOrDenyDeviceAuthorizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AuthorizeOrDenyDeviceAuthorizationResponse>>;
}
export interface OIDCServiceClient<CallOptionsExt = {}> {
    /**
     * Get Auth Request
     *
     * Get OIDC Auth Request details by ID, obtained from the redirect URL.
     * Returns details that are parsed from the application's Auth Request.
     *
     * Required permissions:
     *   - `session.read`
     */
    getAuthRequest(request: DeepPartial<GetAuthRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAuthRequestResponse>;
    /**
     * Create Callback
     *
     * Finalize an Auth Request and get the callback URL for success or failure.
     * The user must be redirected to the URL in order to inform the application about the success or failure.
     * On success, the URL contains details for the application to obtain the tokens.
     * This method can only be called once for an Auth request.
     *
     * Required permissions:
     *   - `session.link`
     */
    createCallback(request: DeepPartial<CreateCallbackRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateCallbackResponse>;
    /**
     * Get Device Authorization Request
     *
     * Get the device authorization based on the provided "user code".
     * This will return the device authorization request, which contains the device authorization id
     * that is required to authorize the request once the user signed in or to deny it.
     *
     * Required permissions:
     *   - `session.read`
     */
    getDeviceAuthorizationRequest(request: DeepPartial<GetDeviceAuthorizationRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDeviceAuthorizationRequestResponse>;
    /**
     * Authorize or Deny Device Authorization
     *
     * Authorize or deny the device authorization request based on the provided device authorization id.
     *
     * Required permissions:
     *   - `session.link`
     */
    authorizeOrDenyDeviceAuthorization(request: DeepPartial<AuthorizeOrDenyDeviceAuthorizationRequest>, options?: CallOptions & CallOptionsExt): Promise<AuthorizeOrDenyDeviceAuthorizationResponse>;
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
