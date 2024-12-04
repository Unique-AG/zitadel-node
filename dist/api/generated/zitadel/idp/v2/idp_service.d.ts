import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { IDP } from "./idp.js";
export declare const protobufPackage = "zitadel.idp.v2";
export interface GetIDPByIDRequest {
    id: string;
}
export interface GetIDPByIDResponse {
    idp: IDP | undefined;
}
export declare const GetIDPByIDRequest: MessageFns<GetIDPByIDRequest>;
export declare const GetIDPByIDResponse: MessageFns<GetIDPByIDResponse>;
export type IdentityProviderServiceDefinition = typeof IdentityProviderServiceDefinition;
export declare const IdentityProviderServiceDefinition: {
    readonly name: "IdentityProviderService";
    readonly fullName: "zitadel.idp.v2.IdentityProviderService";
    readonly methods: {
        /**
         * Get identity provider (IdP) by ID
         *
         * Returns an identity provider (social/enterprise login) by its ID, which can be of the type Google, AzureAD, etc.
         */
        readonly getIDPByID: {
            readonly name: "GetIDPByID";
            readonly requestType: MessageFns<GetIDPByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetIDPByIDResponse>;
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
export interface IdentityProviderServiceImplementation<CallContextExt = {}> {
    /**
     * Get identity provider (IdP) by ID
     *
     * Returns an identity provider (social/enterprise login) by its ID, which can be of the type Google, AzureAD, etc.
     */
    getIDPByID(request: GetIDPByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetIDPByIDResponse>>;
}
export interface IdentityProviderServiceClient<CallOptionsExt = {}> {
    /**
     * Get identity provider (IdP) by ID
     *
     * Returns an identity provider (social/enterprise login) by its ID, which can be of the type Google, AzureAD, etc.
     */
    getIDPByID(request: DeepPartial<GetIDPByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetIDPByIDResponse>;
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
