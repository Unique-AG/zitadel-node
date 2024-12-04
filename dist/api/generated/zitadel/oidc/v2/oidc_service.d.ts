import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Details } from "../../object/v2/object.js";
import { AuthorizationError, AuthRequest } from "./authorization.js";
export declare const protobufPackage = "zitadel.oidc.v2";
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
export type OIDCServiceDefinition = typeof OIDCServiceDefinition;
export declare const OIDCServiceDefinition: {
    readonly name: "OIDCService";
    readonly fullName: "zitadel.oidc.v2.OIDCService";
    readonly methods: {
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
    getAuthRequest(request: GetAuthRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAuthRequestResponse>>;
    createCallback(request: CreateCallbackRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateCallbackResponse>>;
}
export interface OIDCServiceClient<CallOptionsExt = {}> {
    getAuthRequest(request: DeepPartial<GetAuthRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAuthRequestResponse>;
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
