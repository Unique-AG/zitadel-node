import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Instance } from "../../../object/v3alpha/object.js";
import { Details } from "../../object/v3alpha/object.js";
import { GetWebKey, WebKey } from "./key.js";
export declare const protobufPackage = "zitadel.resources.webkey.v3alpha";
export interface CreateWebKeyRequest {
    instance?: Instance | undefined;
    key: WebKey | undefined;
}
export interface CreateWebKeyResponse {
    details: Details | undefined;
}
export interface ActivateWebKeyRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface ActivateWebKeyResponse {
    details: Details | undefined;
}
export interface DeleteWebKeyRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface DeleteWebKeyResponse {
    details: Details | undefined;
}
export interface ListWebKeysRequest {
    instance?: Instance | undefined;
}
export interface ListWebKeysResponse {
    webKeys: GetWebKey[];
}
export declare const CreateWebKeyRequest: MessageFns<CreateWebKeyRequest>;
export declare const CreateWebKeyResponse: MessageFns<CreateWebKeyResponse>;
export declare const ActivateWebKeyRequest: MessageFns<ActivateWebKeyRequest>;
export declare const ActivateWebKeyResponse: MessageFns<ActivateWebKeyResponse>;
export declare const DeleteWebKeyRequest: MessageFns<DeleteWebKeyRequest>;
export declare const DeleteWebKeyResponse: MessageFns<DeleteWebKeyResponse>;
export declare const ListWebKeysRequest: MessageFns<ListWebKeysRequest>;
export declare const ListWebKeysResponse: MessageFns<ListWebKeysResponse>;
export type ZITADELWebKeysDefinition = typeof ZITADELWebKeysDefinition;
export declare const ZITADELWebKeysDefinition: {
    readonly name: "ZITADELWebKeys";
    readonly fullName: "zitadel.resources.webkey.v3alpha.ZITADELWebKeys";
    readonly methods: {
        readonly createWebKey: {
            readonly name: "CreateWebKey";
            readonly requestType: MessageFns<CreateWebKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateWebKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateWebKey: {
            readonly name: "ActivateWebKey";
            readonly requestType: MessageFns<ActivateWebKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateWebKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deleteWebKey: {
            readonly name: "DeleteWebKey";
            readonly requestType: MessageFns<DeleteWebKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteWebKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listWebKeys: {
            readonly name: "ListWebKeys";
            readonly requestType: MessageFns<ListWebKeysRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListWebKeysResponse>;
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
export interface ZITADELWebKeysServiceImplementation<CallContextExt = {}> {
    createWebKey(request: CreateWebKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateWebKeyResponse>>;
    activateWebKey(request: ActivateWebKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateWebKeyResponse>>;
    deleteWebKey(request: DeleteWebKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteWebKeyResponse>>;
    listWebKeys(request: ListWebKeysRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListWebKeysResponse>>;
}
export interface ZITADELWebKeysClient<CallOptionsExt = {}> {
    createWebKey(request: DeepPartial<CreateWebKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateWebKeyResponse>;
    activateWebKey(request: DeepPartial<ActivateWebKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateWebKeyResponse>;
    deleteWebKey(request: DeepPartial<DeleteWebKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteWebKeyResponse>;
    listWebKeys(request: DeepPartial<ListWebKeysRequest>, options?: CallOptions & CallOptionsExt): Promise<ListWebKeysResponse>;
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
