/// <reference types="node" />
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Details } from "../../object/v2beta/object";
import { AuthorizationError, AuthRequest } from "./authorization";
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
export declare const GetAuthRequestRequest: {
    encode(message: GetAuthRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthRequestRequest;
    fromJSON(object: any): GetAuthRequestRequest;
    toJSON(message: GetAuthRequestRequest): unknown;
    create(base?: DeepPartial<GetAuthRequestRequest>): GetAuthRequestRequest;
    fromPartial(object: DeepPartial<GetAuthRequestRequest>): GetAuthRequestRequest;
};
export declare const GetAuthRequestResponse: {
    encode(message: GetAuthRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthRequestResponse;
    fromJSON(object: any): GetAuthRequestResponse;
    toJSON(message: GetAuthRequestResponse): unknown;
    create(base?: DeepPartial<GetAuthRequestResponse>): GetAuthRequestResponse;
    fromPartial(object: DeepPartial<GetAuthRequestResponse>): GetAuthRequestResponse;
};
export declare const CreateCallbackRequest: {
    encode(message: CreateCallbackRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCallbackRequest;
    fromJSON(object: any): CreateCallbackRequest;
    toJSON(message: CreateCallbackRequest): unknown;
    create(base?: DeepPartial<CreateCallbackRequest>): CreateCallbackRequest;
    fromPartial(object: DeepPartial<CreateCallbackRequest>): CreateCallbackRequest;
};
export declare const Session: {
    encode(message: Session, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Session;
    fromJSON(object: any): Session;
    toJSON(message: Session): unknown;
    create(base?: DeepPartial<Session>): Session;
    fromPartial(object: DeepPartial<Session>): Session;
};
export declare const CreateCallbackResponse: {
    encode(message: CreateCallbackResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCallbackResponse;
    fromJSON(object: any): CreateCallbackResponse;
    toJSON(message: CreateCallbackResponse): unknown;
    create(base?: DeepPartial<CreateCallbackResponse>): CreateCallbackResponse;
    fromPartial(object: DeepPartial<CreateCallbackResponse>): CreateCallbackResponse;
};
export type OIDCServiceDefinition = typeof OIDCServiceDefinition;
export declare const OIDCServiceDefinition: {
    readonly name: "OIDCService";
    readonly fullName: "zitadel.oidc.v2beta.OIDCService";
    readonly methods: {
        readonly getAuthRequest: {
            readonly name: "GetAuthRequest";
            readonly requestType: {
                encode(message: GetAuthRequestRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthRequestRequest;
                fromJSON(object: any): GetAuthRequestRequest;
                toJSON(message: GetAuthRequestRequest): unknown;
                create(base?: DeepPartial<GetAuthRequestRequest>): GetAuthRequestRequest;
                fromPartial(object: DeepPartial<GetAuthRequestRequest>): GetAuthRequestRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetAuthRequestResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthRequestResponse;
                fromJSON(object: any): GetAuthRequestResponse;
                toJSON(message: GetAuthRequestResponse): unknown;
                create(base?: DeepPartial<GetAuthRequestResponse>): GetAuthRequestResponse;
                fromPartial(object: DeepPartial<GetAuthRequestResponse>): GetAuthRequestResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly createCallback: {
            readonly name: "CreateCallback";
            readonly requestType: {
                encode(message: CreateCallbackRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateCallbackRequest;
                fromJSON(object: any): CreateCallbackRequest;
                toJSON(message: CreateCallbackRequest): unknown;
                create(base?: DeepPartial<CreateCallbackRequest>): CreateCallbackRequest;
                fromPartial(object: DeepPartial<CreateCallbackRequest>): CreateCallbackRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateCallbackResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateCallbackResponse;
                fromJSON(object: any): CreateCallbackResponse;
                toJSON(message: CreateCallbackResponse): unknown;
                create(base?: DeepPartial<CreateCallbackResponse>): CreateCallbackResponse;
                fromPartial(object: DeepPartial<CreateCallbackResponse>): CreateCallbackResponse;
            };
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
    getAuthRequest(request: GetAuthRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAuthRequestResponse>>;
    createCallback(request: CreateCallbackRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateCallbackResponse>>;
}
export interface OIDCServiceClient<CallOptionsExt = {}> {
    getAuthRequest(request: DeepPartial<GetAuthRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAuthRequestResponse>;
    createCallback(request: DeepPartial<CreateCallbackRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateCallbackResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
