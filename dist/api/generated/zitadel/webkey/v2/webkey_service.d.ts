import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { ECDSA, ED25519, RSA, WebKey } from "./key.js";
export declare const protobufPackage = "zitadel.webkey.v2";
export interface CreateWebKeyRequest {
    /**
     * Create a RSA key pair and specify the bit size and hashing algorithm.
     * If no bits and hasher are provided, a RSA key pair with 2048 bits and SHA256 hashing will be created.
     */
    rsa?: RSA | undefined;
    /**
     * Create a ECDSA key pair and specify the curve.
     * If no curve is provided, a ECDSA key pair with P-256 curve will be created.
     */
    ecdsa?: ECDSA | undefined;
    /** Create a ED25519 key pair. */
    ed25519?: ED25519 | undefined;
}
export interface CreateWebKeyResponse {
    /** The unique identifier of the newly created key. */
    id: string;
    /** The timestamp of the key creation. */
    creationDate: Date | undefined;
}
export interface ActivateWebKeyRequest {
    /** The unique identifier of the key to activate. */
    id: string;
}
export interface ActivateWebKeyResponse {
    /** The timestamp of the activation of the key. */
    changeDate: Date | undefined;
}
export interface DeleteWebKeyRequest {
    /** The unique identifier of the key to delete. */
    id: string;
}
export interface DeleteWebKeyResponse {
    /**
     * The timestamp of the deletion of the key.
     * Note that the deletion date is only guaranteed to be set if the deletion was successful during the request.
     * In case the deletion occurred in a previous request, the deletion date might be empty.
     */
    deletionDate: Date | undefined;
}
export interface ListWebKeysRequest {
}
export interface ListWebKeysResponse {
    webKeys: WebKey[];
}
export declare const CreateWebKeyRequest: MessageFns<CreateWebKeyRequest>;
export declare const CreateWebKeyResponse: MessageFns<CreateWebKeyResponse>;
export declare const ActivateWebKeyRequest: MessageFns<ActivateWebKeyRequest>;
export declare const ActivateWebKeyResponse: MessageFns<ActivateWebKeyResponse>;
export declare const DeleteWebKeyRequest: MessageFns<DeleteWebKeyRequest>;
export declare const DeleteWebKeyResponse: MessageFns<DeleteWebKeyResponse>;
export declare const ListWebKeysRequest: MessageFns<ListWebKeysRequest>;
export declare const ListWebKeysResponse: MessageFns<ListWebKeysResponse>;
/**
 * Service to manage web keys for OIDC token signing and validation.
 * The service provides methods to create, activate, delete and list web keys.
 * The public key endpoint (outside of this service) is used to retrieve the public keys of the active and inactive keys.
 *
 * Please make sure to enable the `web_key` feature flag on your instance to use this service.
 */
export type WebKeyServiceDefinition = typeof WebKeyServiceDefinition;
export declare const WebKeyServiceDefinition: {
    readonly name: "WebKeyService";
    readonly fullName: "zitadel.webkey.v2.WebKeyService";
    readonly methods: {
        /**
         * Create Web Key
         *
         * Generate a private and public key pair. The private key can be used to sign OIDC tokens after activation.
         * The public key can be used to validate OIDC tokens.
         * The newly created key will have the state `STATE_INITIAL` and is published to the public key endpoint.
         * Note that the JWKs OIDC endpoint returns a cacheable response.
         *
         * If no key type is provided, a RSA key pair with 2048 bits and SHA256 hashing will be created.
         *
         * Required permission:
         *   - `iam.web_key.write`
         */
        readonly createWebKey: {
            readonly name: "CreateWebKey";
            readonly requestType: MessageFns<CreateWebKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateWebKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400010: readonly [Buffer];
                };
            };
        };
        /**
         * Activate Web Key
         *
         * Switch the active signing web key. The previously active key will be deactivated.
         * Note that the JWKs OIDC endpoint returns a cacheable response.
         * Therefore it is not advised to activate a key that has been created within the cache duration (default is 5min),
         * as the public key may not have been propagated to caches and clients yet.
         *
         * Required permission:
         *   - `iam.web_key.write`
         */
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
                };
            };
        };
        /**
         * Delete Web Key
         *
         * Delete a web key pair. Only inactive keys can be deleted. Once a key is deleted,
         * any tokens signed by this key will be invalid.
         * Note that the JWKs OIDC endpoint returns a cacheable response.
         * In case the web key is not found, the request will return a successful response as
         * the desired state is already achieved.
         * You can check the change date in the response to verify if the web key was deleted during the request.
         *
         * Required permission:
         *   - `iam.web_key.delete`
         */
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
        /**
         * List Web Keys
         *
         * List all web keys and their states.
         *
         * Required permission:
         *   - `iam.web_key.read`
         */
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
export interface WebKeyServiceImplementation<CallContextExt = {}> {
    /**
     * Create Web Key
     *
     * Generate a private and public key pair. The private key can be used to sign OIDC tokens after activation.
     * The public key can be used to validate OIDC tokens.
     * The newly created key will have the state `STATE_INITIAL` and is published to the public key endpoint.
     * Note that the JWKs OIDC endpoint returns a cacheable response.
     *
     * If no key type is provided, a RSA key pair with 2048 bits and SHA256 hashing will be created.
     *
     * Required permission:
     *   - `iam.web_key.write`
     */
    createWebKey(request: CreateWebKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateWebKeyResponse>>;
    /**
     * Activate Web Key
     *
     * Switch the active signing web key. The previously active key will be deactivated.
     * Note that the JWKs OIDC endpoint returns a cacheable response.
     * Therefore it is not advised to activate a key that has been created within the cache duration (default is 5min),
     * as the public key may not have been propagated to caches and clients yet.
     *
     * Required permission:
     *   - `iam.web_key.write`
     */
    activateWebKey(request: ActivateWebKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateWebKeyResponse>>;
    /**
     * Delete Web Key
     *
     * Delete a web key pair. Only inactive keys can be deleted. Once a key is deleted,
     * any tokens signed by this key will be invalid.
     * Note that the JWKs OIDC endpoint returns a cacheable response.
     * In case the web key is not found, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the change date in the response to verify if the web key was deleted during the request.
     *
     * Required permission:
     *   - `iam.web_key.delete`
     */
    deleteWebKey(request: DeleteWebKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteWebKeyResponse>>;
    /**
     * List Web Keys
     *
     * List all web keys and their states.
     *
     * Required permission:
     *   - `iam.web_key.read`
     */
    listWebKeys(request: ListWebKeysRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListWebKeysResponse>>;
}
export interface WebKeyServiceClient<CallOptionsExt = {}> {
    /**
     * Create Web Key
     *
     * Generate a private and public key pair. The private key can be used to sign OIDC tokens after activation.
     * The public key can be used to validate OIDC tokens.
     * The newly created key will have the state `STATE_INITIAL` and is published to the public key endpoint.
     * Note that the JWKs OIDC endpoint returns a cacheable response.
     *
     * If no key type is provided, a RSA key pair with 2048 bits and SHA256 hashing will be created.
     *
     * Required permission:
     *   - `iam.web_key.write`
     */
    createWebKey(request: DeepPartial<CreateWebKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateWebKeyResponse>;
    /**
     * Activate Web Key
     *
     * Switch the active signing web key. The previously active key will be deactivated.
     * Note that the JWKs OIDC endpoint returns a cacheable response.
     * Therefore it is not advised to activate a key that has been created within the cache duration (default is 5min),
     * as the public key may not have been propagated to caches and clients yet.
     *
     * Required permission:
     *   - `iam.web_key.write`
     */
    activateWebKey(request: DeepPartial<ActivateWebKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateWebKeyResponse>;
    /**
     * Delete Web Key
     *
     * Delete a web key pair. Only inactive keys can be deleted. Once a key is deleted,
     * any tokens signed by this key will be invalid.
     * Note that the JWKs OIDC endpoint returns a cacheable response.
     * In case the web key is not found, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the change date in the response to verify if the web key was deleted during the request.
     *
     * Required permission:
     *   - `iam.web_key.delete`
     */
    deleteWebKey(request: DeepPartial<DeleteWebKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteWebKeyResponse>;
    /**
     * List Web Keys
     *
     * List all web keys and their states.
     *
     * Required permission:
     *   - `iam.web_key.read`
     */
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
