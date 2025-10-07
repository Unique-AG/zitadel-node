import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { PaginationRequest, PaginationResponse } from "../../filter/v2beta/filter.js";
import { Domain, DomainFieldName, DomainSearchQuery, FieldName, Instance, Query, TrustedDomain, TrustedDomainFieldName, TrustedDomainSearchQuery } from "./instance.js";
export declare const protobufPackage = "zitadel.instance.v2beta";
export interface DeleteInstanceRequest {
    instanceId: string;
}
export interface DeleteInstanceResponse {
    deletionDate: Date | undefined;
}
export interface GetInstanceRequest {
    instanceId: string;
}
export interface GetInstanceResponse {
    instance: Instance | undefined;
}
export interface UpdateInstanceRequest {
    /** used only to identify the instance to change. */
    instanceId: string;
    instanceName: string;
}
export interface UpdateInstanceResponse {
    changeDate: Date | undefined;
}
export interface ListInstancesRequest {
    /** Criterias the client is looking for. */
    queries: Query[];
    /** Pagination and sorting. */
    pagination: PaginationRequest | undefined;
    /** The field the result is sorted by. */
    sortingColumn?: FieldName | undefined;
}
export interface ListInstancesResponse {
    /** The list of instances. */
    instances: Instance[];
    /** Contains the total number of instances matching the query and the applied limit. */
    pagination: PaginationResponse | undefined;
}
export interface AddCustomDomainRequest {
    instanceId: string;
    domain: string;
}
export interface AddCustomDomainResponse {
    creationDate: Date | undefined;
}
export interface RemoveCustomDomainRequest {
    instanceId: string;
    domain: string;
}
export interface RemoveCustomDomainResponse {
    deletionDate: Date | undefined;
}
export interface ListCustomDomainsRequest {
    instanceId: string;
    /** Pagination and sorting. */
    pagination: PaginationRequest | undefined;
    /** The field the result is sorted by. */
    sortingColumn: DomainFieldName;
    /** Criterias the client is looking for. */
    queries: DomainSearchQuery[];
}
export interface ListCustomDomainsResponse {
    domains: Domain[];
    /** Contains the total number of domains matching the query and the applied limit. */
    pagination: PaginationResponse | undefined;
}
export interface AddTrustedDomainRequest {
    instanceId: string;
    domain: string;
}
export interface AddTrustedDomainResponse {
    creationDate: Date | undefined;
}
export interface RemoveTrustedDomainRequest {
    instanceId: string;
    domain: string;
}
export interface RemoveTrustedDomainResponse {
    deletionDate: Date | undefined;
}
export interface ListTrustedDomainsRequest {
    instanceId: string;
    /** Pagination and sorting. */
    pagination: PaginationRequest | undefined;
    /** The field the result is sorted by. */
    sortingColumn: TrustedDomainFieldName;
    /** Criterias the client is looking for. */
    queries: TrustedDomainSearchQuery[];
}
export interface ListTrustedDomainsResponse {
    trustedDomain: TrustedDomain[];
    /** Contains the total number of domains matching the query and the applied limit. */
    pagination: PaginationResponse | undefined;
}
export declare const DeleteInstanceRequest: MessageFns<DeleteInstanceRequest>;
export declare const DeleteInstanceResponse: MessageFns<DeleteInstanceResponse>;
export declare const GetInstanceRequest: MessageFns<GetInstanceRequest>;
export declare const GetInstanceResponse: MessageFns<GetInstanceResponse>;
export declare const UpdateInstanceRequest: MessageFns<UpdateInstanceRequest>;
export declare const UpdateInstanceResponse: MessageFns<UpdateInstanceResponse>;
export declare const ListInstancesRequest: MessageFns<ListInstancesRequest>;
export declare const ListInstancesResponse: MessageFns<ListInstancesResponse>;
export declare const AddCustomDomainRequest: MessageFns<AddCustomDomainRequest>;
export declare const AddCustomDomainResponse: MessageFns<AddCustomDomainResponse>;
export declare const RemoveCustomDomainRequest: MessageFns<RemoveCustomDomainRequest>;
export declare const RemoveCustomDomainResponse: MessageFns<RemoveCustomDomainResponse>;
export declare const ListCustomDomainsRequest: MessageFns<ListCustomDomainsRequest>;
export declare const ListCustomDomainsResponse: MessageFns<ListCustomDomainsResponse>;
export declare const AddTrustedDomainRequest: MessageFns<AddTrustedDomainRequest>;
export declare const AddTrustedDomainResponse: MessageFns<AddTrustedDomainResponse>;
export declare const RemoveTrustedDomainRequest: MessageFns<RemoveTrustedDomainRequest>;
export declare const RemoveTrustedDomainResponse: MessageFns<RemoveTrustedDomainResponse>;
export declare const ListTrustedDomainsRequest: MessageFns<ListTrustedDomainsRequest>;
export declare const ListTrustedDomainsResponse: MessageFns<ListTrustedDomainsResponse>;
/**
 * Service to manage instances and their domains.
 * The service provides methods to create, update, delete and list instances and their domains.
 */
export type InstanceServiceDefinition = typeof InstanceServiceDefinition;
export declare const InstanceServiceDefinition: {
    readonly name: "InstanceService";
    readonly fullName: "zitadel.instance.v2beta.InstanceService";
    readonly methods: {
        /**
         * Delete Instance
         *
         * Deletes an instance with the given ID.
         *
         * Required permissions:
         *   - `system.instance.delete`
         */
        readonly deleteInstance: {
            readonly name: "DeleteInstance";
            readonly requestType: MessageFns<DeleteInstanceRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteInstanceResponse>;
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
         * Get Instance
         *
         * Returns the instance in the current context.
         *
         * The instance_id in the input message will be used in the future.
         *
         * Required permissions:
         *   - `iam.read`
         */
        readonly getInstance: {
            readonly name: "GetInstance";
            readonly requestType: MessageFns<GetInstanceRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetInstanceResponse>;
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
         * Update Instance
         *
         * Updates instance in context with the given name.
         *
         * The instance_id in the input message will be used in the future.
         *
         * Required permissions:
         *   - `iam.write`
         */
        readonly updateInstance: {
            readonly name: "UpdateInstance";
            readonly requestType: MessageFns<UpdateInstanceRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateInstanceResponse>;
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
         * List Instances
         *
         * Lists instances matching the given query.
         * The query can be used to filter either by instance ID or domain.
         * The request is paginated and returns 100 results by default.
         *
         * Required permissions:
         *  - `system.instance.read`
         */
        readonly listInstances: {
            readonly name: "ListInstances";
            readonly requestType: MessageFns<ListInstancesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListInstancesResponse>;
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
         * Add Custom Domain
         *
         * Adds a custom domain to the instance in context.
         *
         * The instance_id in the input message will be used in the future
         *
         * Required permissions:
         *   - `system.domain.write`
         */
        readonly addCustomDomain: {
            readonly name: "AddCustomDomain";
            readonly requestType: MessageFns<AddCustomDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomDomainResponse>;
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
         * Remove Custom Domain
         *
         * Removes a custom domain from the instance.
         *
         * The instance_id in the input message will be used in the future.
         *
         * Required permissions:
         *  - `system.domain.write`
         */
        readonly removeCustomDomain: {
            readonly name: "RemoveCustomDomain";
            readonly requestType: MessageFns<RemoveCustomDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveCustomDomainResponse>;
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
         * List Custom Domains
         *
         * Lists custom domains of the instance.
         *
         * The instance_id in the input message will be used in the future.
         *
         * Required permissions:
         *  - `iam.read`
         */
        readonly listCustomDomains: {
            readonly name: "ListCustomDomains";
            readonly requestType: MessageFns<ListCustomDomainsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListCustomDomainsResponse>;
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
         * Add Trusted Domain
         *
         * Adds a trusted domain to the instance.
         *
         * The instance_id in the input message will be used in the future.
         *
         * Required permissions:
         *  - `iam.write`
         */
        readonly addTrustedDomain: {
            readonly name: "AddTrustedDomain";
            readonly requestType: MessageFns<AddTrustedDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddTrustedDomainResponse>;
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
         * Remove Trusted Domain
         *
         * Removes a trusted domain from the instance.
         *
         * The instance_id in the input message will be used in the future.
         *
         * Required permissions:
         *  - `iam.write`
         */
        readonly removeTrustedDomain: {
            readonly name: "RemoveTrustedDomain";
            readonly requestType: MessageFns<RemoveTrustedDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveTrustedDomainResponse>;
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
         * List Trusted Domains
         *
         * Lists trusted domains of the instance.
         *
         * The instance_id in the input message will be used in the future.
         *
         * Required permissions:
         *   - `iam.read`
         */
        readonly listTrustedDomains: {
            readonly name: "ListTrustedDomains";
            readonly requestType: MessageFns<ListTrustedDomainsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListTrustedDomainsResponse>;
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
export interface InstanceServiceImplementation<CallContextExt = {}> {
    /**
     * Delete Instance
     *
     * Deletes an instance with the given ID.
     *
     * Required permissions:
     *   - `system.instance.delete`
     */
    deleteInstance(request: DeleteInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteInstanceResponse>>;
    /**
     * Get Instance
     *
     * Returns the instance in the current context.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *   - `iam.read`
     */
    getInstance(request: GetInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetInstanceResponse>>;
    /**
     * Update Instance
     *
     * Updates instance in context with the given name.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *   - `iam.write`
     */
    updateInstance(request: UpdateInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateInstanceResponse>>;
    /**
     * List Instances
     *
     * Lists instances matching the given query.
     * The query can be used to filter either by instance ID or domain.
     * The request is paginated and returns 100 results by default.
     *
     * Required permissions:
     *  - `system.instance.read`
     */
    listInstances(request: ListInstancesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListInstancesResponse>>;
    /**
     * Add Custom Domain
     *
     * Adds a custom domain to the instance in context.
     *
     * The instance_id in the input message will be used in the future
     *
     * Required permissions:
     *   - `system.domain.write`
     */
    addCustomDomain(request: AddCustomDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomDomainResponse>>;
    /**
     * Remove Custom Domain
     *
     * Removes a custom domain from the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *  - `system.domain.write`
     */
    removeCustomDomain(request: RemoveCustomDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomDomainResponse>>;
    /**
     * List Custom Domains
     *
     * Lists custom domains of the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *  - `iam.read`
     */
    listCustomDomains(request: ListCustomDomainsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListCustomDomainsResponse>>;
    /**
     * Add Trusted Domain
     *
     * Adds a trusted domain to the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *  - `iam.write`
     */
    addTrustedDomain(request: AddTrustedDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddTrustedDomainResponse>>;
    /**
     * Remove Trusted Domain
     *
     * Removes a trusted domain from the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *  - `iam.write`
     */
    removeTrustedDomain(request: RemoveTrustedDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveTrustedDomainResponse>>;
    /**
     * List Trusted Domains
     *
     * Lists trusted domains of the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *   - `iam.read`
     */
    listTrustedDomains(request: ListTrustedDomainsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListTrustedDomainsResponse>>;
}
export interface InstanceServiceClient<CallOptionsExt = {}> {
    /**
     * Delete Instance
     *
     * Deletes an instance with the given ID.
     *
     * Required permissions:
     *   - `system.instance.delete`
     */
    deleteInstance(request: DeepPartial<DeleteInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteInstanceResponse>;
    /**
     * Get Instance
     *
     * Returns the instance in the current context.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *   - `iam.read`
     */
    getInstance(request: DeepPartial<GetInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<GetInstanceResponse>;
    /**
     * Update Instance
     *
     * Updates instance in context with the given name.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *   - `iam.write`
     */
    updateInstance(request: DeepPartial<UpdateInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateInstanceResponse>;
    /**
     * List Instances
     *
     * Lists instances matching the given query.
     * The query can be used to filter either by instance ID or domain.
     * The request is paginated and returns 100 results by default.
     *
     * Required permissions:
     *  - `system.instance.read`
     */
    listInstances(request: DeepPartial<ListInstancesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListInstancesResponse>;
    /**
     * Add Custom Domain
     *
     * Adds a custom domain to the instance in context.
     *
     * The instance_id in the input message will be used in the future
     *
     * Required permissions:
     *   - `system.domain.write`
     */
    addCustomDomain(request: DeepPartial<AddCustomDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomDomainResponse>;
    /**
     * Remove Custom Domain
     *
     * Removes a custom domain from the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *  - `system.domain.write`
     */
    removeCustomDomain(request: DeepPartial<RemoveCustomDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomDomainResponse>;
    /**
     * List Custom Domains
     *
     * Lists custom domains of the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *  - `iam.read`
     */
    listCustomDomains(request: DeepPartial<ListCustomDomainsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListCustomDomainsResponse>;
    /**
     * Add Trusted Domain
     *
     * Adds a trusted domain to the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *  - `iam.write`
     */
    addTrustedDomain(request: DeepPartial<AddTrustedDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<AddTrustedDomainResponse>;
    /**
     * Remove Trusted Domain
     *
     * Removes a trusted domain from the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *  - `iam.write`
     */
    removeTrustedDomain(request: DeepPartial<RemoveTrustedDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveTrustedDomainResponse>;
    /**
     * List Trusted Domains
     *
     * Lists trusted domains of the instance.
     *
     * The instance_id in the input message will be used in the future.
     *
     * Required permissions:
     *   - `iam.read`
     */
    listTrustedDomains(request: DeepPartial<ListTrustedDomainsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListTrustedDomainsResponse>;
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
