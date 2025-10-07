import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { Details } from "../../object/v2beta/object.js";
import { AuthorizationError, AuthRequest } from "./authorization.js";
export declare const protobufPackage = "zitadel.oidc.v2beta";
export interface GetAuthRequestRequest {
    authRequestId: string;
}
export interface GetAuthRequestResponse {
    authRequest: AuthRequest | undefined;
}
export interface CreateCallbackRequest {
    authRequestId: string;
    session?: Session | undefined;
    error?: AuthorizationError | undefined;
}
export interface Session {
    sessionId: string;
    sessionToken: string;
}
export interface CreateCallbackResponse {
    details: Details | undefined;
    callbackUrl: string;
}
export declare const GetAuthRequestRequest: MessageFns<GetAuthRequestRequest>;
export declare const GetAuthRequestResponse: MessageFns<GetAuthRequestResponse>;
export declare const CreateCallbackRequest: MessageFns<CreateCallbackRequest>;
export declare const Session: MessageFns<Session>;
export declare const CreateCallbackResponse: MessageFns<CreateCallbackResponse>;
/** Deprecated: use oidc service v2 instead. This service will be removed in the next major version of ZITADEL. */
export type OIDCServiceDefinition = typeof OIDCServiceDefinition;
export declare const OIDCServiceDefinition: {
    readonly name: "OIDCService";
    readonly fullName: "zitadel.oidc.v2beta.OIDCService";
    readonly methods: {
        /**
         * Get AuthRequest
         *
         * Deprecated: please move to the corresponding endpoint under oidc service v2. This endpoint will be removed with the next major version of ZITADEL.
         *
         * Get OIDC Auth Request details by ID, obtained from the redirect URL. Returns details that are parsed from the application's Auth Request.
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
         * Deprecated: please move to the corresponding endpoint under oidc service v2. This endpoint will be removed with the next major version of ZITADEL.
         *
         * Finalize an Auth Request and get the callback URL for success or failure.
         * The user must be redirected to the URL in order to inform the application about the success or failure.
         * On success, the URL contains details for the application to obtain the tokens.
         * This method can only be called once for an Auth request.
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
    };
};
export interface OIDCServiceImplementation<CallContextExt = {}> {
    /**
     * Get AuthRequest
     *
     * Deprecated: please move to the corresponding endpoint under oidc service v2. This endpoint will be removed with the next major version of ZITADEL.
     *
     * Get OIDC Auth Request details by ID, obtained from the redirect URL. Returns details that are parsed from the application's Auth Request.
     */
    getAuthRequest(request: GetAuthRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAuthRequestResponse>>;
    /**
     * Create Callback
     *
     * Deprecated: please move to the corresponding endpoint under oidc service v2. This endpoint will be removed with the next major version of ZITADEL.
     *
     * Finalize an Auth Request and get the callback URL for success or failure.
     * The user must be redirected to the URL in order to inform the application about the success or failure.
     * On success, the URL contains details for the application to obtain the tokens.
     * This method can only be called once for an Auth request.
     */
    createCallback(request: CreateCallbackRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateCallbackResponse>>;
}
export interface OIDCServiceClient<CallOptionsExt = {}> {
    /**
     * Get AuthRequest
     *
     * Deprecated: please move to the corresponding endpoint under oidc service v2. This endpoint will be removed with the next major version of ZITADEL.
     *
     * Get OIDC Auth Request details by ID, obtained from the redirect URL. Returns details that are parsed from the application's Auth Request.
     */
    getAuthRequest(request: DeepPartial<GetAuthRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAuthRequestResponse>;
    /**
     * Create Callback
     *
     * Deprecated: please move to the corresponding endpoint under oidc service v2. This endpoint will be removed with the next major version of ZITADEL.
     *
     * Finalize an Auth Request and get the callback URL for success or failure.
     * The user must be redirected to the URL in order to inform the application about the success or failure.
     * On success, the URL contains details for the application to obtain the tokens.
     * This method can only be called once for an Auth request.
     */
    createCallback(request: DeepPartial<CreateCallbackRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateCallbackResponse>;
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
