import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Duration } from "../../../google/protobuf/duration.js";
import { PaginationRequest, PaginationResponse } from "../../filter/v2/filter.js";
import { Condition, Execution } from "./execution.js";
import { ExecutionFieldName, ExecutionSearchFilter, TargetFieldName, TargetSearchFilter } from "./query.js";
import { RESTAsync, RESTCall, RESTWebhook, Target } from "./target.js";
export declare const protobufPackage = "zitadel.action.v2";
export interface CreateTargetRequest {
    name: string;
    /**
     * The HTTP call to this target will be a POST request.
     * The response of the target will only be checked for the status code.
     * The returned body will be ignored.
     * In case of an error status code (non 2xx) and interrupt_on_error is set to true,
     * the execution will be aborted and no further targets will be called.
     */
    restWebhook?: RESTWebhook | undefined;
    /**
     * The HTTP call to this target will be a POST request.
     * The response of the target will be checked for the status code and the body.
     * In case of an error status code (non 2xx) and interrupt_on_error is set to true,
     * the execution will be aborted and no further targets will be called.
     * In case of a successful status code (2xx) the body will be parsed and mapped.
     * This allows to modify the payload of request and response executions.
     */
    restCall?: RESTCall | undefined;
    /**
     * The HTTP call to this target will be a POST request.
     * The call is sent asynchronously and ZITADEL does not wait for the response.
     * The response of the target is ignored, no status or body is checked.
     * This is typically used for executions of type "events".
     */
    restAsync?: RESTAsync | undefined;
    /**
     * Timeout defines the duration until ZITADEL cancels the execution.
     * If the target doesn't respond before this timeout expires, then the connection is closed and the action fails.
     * Depending on the target type and possible setting on `interrupt_on_error` following targets will not be called.
     * In case of a `rest_async` target only this specific target will fail, without any influence on other targets of the same execution.
     * The maximum timeout is 270 seconds or 4.5 minutes.
     */
    timeout: Duration | undefined;
    /** The URL of the endpoint to call. */
    endpoint: string;
}
export interface CreateTargetResponse {
    /** The unique identifier of the newly created target. */
    id: string;
    /** The timestamp of the target creation. */
    creationDate: Date | undefined;
    /**
     * Key used to sign and check payload sent to the target.
     * The key can be used to verify the integrity and authenticity of the request
     * on the receiver side. The key should be treated as a secret and only known to ZITADEL and the receiver.
     * The signature is included in the request header `X-ZITADEL-Signature`
     * and calculated over the raw body of the request using HMAC with SHA256.
     */
    signingKey: string;
}
export interface UpdateTargetRequest {
    /** The unique identifier of the target to update. */
    id: string;
    /**
     * Optionally, update the name of the target.
     * If not set, the name will not be changed.
     */
    name?: string | undefined;
    /**
     * The HTTP call to this target will be a POST request.
     * The response of the target will only be checked for the status code.
     * The returned body will be ignored.
     * In case of an error status code (non 2xx) and interrupt_on_error is set to true,
     * the execution will be aborted and no further targets will be called.
     */
    restWebhook?: RESTWebhook | undefined;
    /**
     * The HTTP call to this target will be a POST request.
     * The response of the target will be checked for the status code and the body.
     * In case of an error status code (non 2xx) and interrupt_on_error is set to true,
     * the execution will be aborted and no further targets will be called.
     * In case of a successful status code (2xx) the body will be parsed and mapped.
     * This allows to modify the payload of request and response executions.
     */
    restCall?: RESTCall | undefined;
    /**
     * The HTTP call to this target will be a POST request.
     * The call is sent asynchronously and ZITADEL does not wait for the response.
     * The response of the target is ignored, no status or body is checked.
     * This is typically used for executions of type "events".
     */
    restAsync?: RESTAsync | undefined;
    /**
     * Timeout defines the duration until ZITADEL cancels the execution.
     * If the target doesn't respond before this timeout expires, then the connection is closed and the action fails.
     * Depending on the target type and possible setting on `interrupt_on_error` following targets will not be called.
     * In case of a `rest_async` target only this specific target will fail, without any influence on other targets of the same execution.
     * The maximum timeout is 270 seconds or 4.5 minutes.
     * If not set, the timeout will not be changed.
     */
    timeout?: Duration | undefined;
    /**
     * The new URL of the endpoint to call.
     * If not set, the endpoint will not be changed.
     */
    endpoint?: string | undefined;
    /**
     * Regenerate the key used for signing and checking the payload sent to the target.
     * Set the graceful period for the existing key. During that time, the previous
     * signing key and the new one will be used to sign the request to allow you a smooth
     * transition onf your API.
     *
     * Note that we currently only allow an immediate rotation ("0s") and will support
     * longer expirations in the future.
     */
    expirationSigningKey?: Duration | undefined;
}
export interface UpdateTargetResponse {
    /** The timestamp of the change of the target. */
    changeDate: Date | undefined;
    /**
     * Key used to sign and check payload sent to the target.
     * The key can be used to verify the integrity and authenticity of the request
     * on the receiver side. The key should be treated as a secret and only known to ZITADEL and the receiver.
     * The signature is included in the request header `X-ZITADEL-Signature`
     * and calculated over the raw body of the request using HMAC with SHA256.
     * The key is only returned if expirationSigningKey was set in the request.
     */
    signingKey?: string | undefined;
}
export interface DeleteTargetRequest {
    /** The unique identifier of the target to delete. */
    id: string;
}
export interface DeleteTargetResponse {
    /**
     * The timestamp of the deletion of the target.
     * Note that the deletion date is only guaranteed to be set if the deletion was successful during the request.
     * In case the deletion occurred in a previous request, the deletion date might be empty.
     */
    deletionDate: Date | undefined;
}
export interface GetTargetRequest {
    /** The unique identifier of the target to retrieve. */
    id: string;
}
export interface GetTargetResponse {
    target: Target | undefined;
}
export interface ListTargetsRequest {
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: TargetFieldName | undefined;
    /** Define the criteria to query for. */
    filters: TargetSearchFilter[];
}
export interface ListTargetsResponse {
    pagination: PaginationResponse | undefined;
    /** List of all targets matching the query. */
    targets: Target[];
}
export interface SetExecutionRequest {
    /** Condition defining when the execution should be used. */
    condition: Condition | undefined;
    /** Ordered list of targets called during the execution. */
    targets: string[];
}
export interface SetExecutionResponse {
    /** The timestamp of the execution set. */
    setDate: Date | undefined;
}
export interface ListExecutionsRequest {
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /**
     * The field the result is sorted by. The default is the creation date.
     * Beware that if you change this, your result pagination might be inconsistent.
     */
    sortingColumn?: ExecutionFieldName | undefined;
    /** Define the criteria to query for. */
    filters: ExecutionSearchFilter[];
}
export interface ListExecutionsResponse {
    pagination: PaginationResponse | undefined;
    /** List of all executions matching the query. */
    executions: Execution[];
}
export interface ListExecutionFunctionsRequest {
}
export interface ListExecutionFunctionsResponse {
    /** All available functions to use in conditions. */
    functions: string[];
}
export interface ListExecutionMethodsRequest {
}
export interface ListExecutionMethodsResponse {
    /** All available methods to use in conditions. */
    methods: string[];
}
export interface ListExecutionServicesRequest {
}
export interface ListExecutionServicesResponse {
    /** All available services to use in conditions. */
    services: string[];
}
export declare const CreateTargetRequest: MessageFns<CreateTargetRequest>;
export declare const CreateTargetResponse: MessageFns<CreateTargetResponse>;
export declare const UpdateTargetRequest: MessageFns<UpdateTargetRequest>;
export declare const UpdateTargetResponse: MessageFns<UpdateTargetResponse>;
export declare const DeleteTargetRequest: MessageFns<DeleteTargetRequest>;
export declare const DeleteTargetResponse: MessageFns<DeleteTargetResponse>;
export declare const GetTargetRequest: MessageFns<GetTargetRequest>;
export declare const GetTargetResponse: MessageFns<GetTargetResponse>;
export declare const ListTargetsRequest: MessageFns<ListTargetsRequest>;
export declare const ListTargetsResponse: MessageFns<ListTargetsResponse>;
export declare const SetExecutionRequest: MessageFns<SetExecutionRequest>;
export declare const SetExecutionResponse: MessageFns<SetExecutionResponse>;
export declare const ListExecutionsRequest: MessageFns<ListExecutionsRequest>;
export declare const ListExecutionsResponse: MessageFns<ListExecutionsResponse>;
export declare const ListExecutionFunctionsRequest: MessageFns<ListExecutionFunctionsRequest>;
export declare const ListExecutionFunctionsResponse: MessageFns<ListExecutionFunctionsResponse>;
export declare const ListExecutionMethodsRequest: MessageFns<ListExecutionMethodsRequest>;
export declare const ListExecutionMethodsResponse: MessageFns<ListExecutionMethodsResponse>;
export declare const ListExecutionServicesRequest: MessageFns<ListExecutionServicesRequest>;
export declare const ListExecutionServicesResponse: MessageFns<ListExecutionServicesResponse>;
/**
 * Service to manage custom executions.
 * The service provides methods to create, update, delete and list targets and executions.
 */
export type ActionServiceDefinition = typeof ActionServiceDefinition;
export declare const ActionServiceDefinition: {
    readonly name: "ActionService";
    readonly fullName: "zitadel.action.v2.ActionService";
    readonly methods: {
        /**
         * Create Target
         *
         * Create a new target to your endpoint, which can be used in executions.
         *
         * Required permission:
         *   - `action.target.write`
         */
        readonly createTarget: {
            readonly name: "CreateTarget";
            readonly requestType: MessageFns<CreateTargetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateTargetResponse>;
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
         * Update Target
         *
         * Update an existing target.
         * To generate a new signing key set the optional expirationSigningKey.
         *
         * Required permission:
         *   - `action.target.write`
         */
        readonly updateTarget: {
            readonly name: "UpdateTarget";
            readonly requestType: MessageFns<UpdateTargetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateTargetResponse>;
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
         * Delete Target
         *
         * Delete an existing target. This will remove it from any configured execution as well.
         * In case the target is not found, the request will return a successful response as
         * the desired state is already achieved.
         *
         * Required permission:
         *   - `action.target.delete`
         */
        readonly deleteTarget: {
            readonly name: "DeleteTarget";
            readonly requestType: MessageFns<DeleteTargetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteTargetResponse>;
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
         * Get Target
         *
         * Returns the target identified by the requested ID.
         *
         * Required permission:
         *   - `action.target.read`
         */
        readonly getTarget: {
            readonly name: "GetTarget";
            readonly requestType: MessageFns<GetTargetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetTargetResponse>;
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
         * List targets
         *
         * List all matching targets. By default all targets of the instance are returned.
         * Make sure to include a limit and sorting for pagination.
         *
         * Required permission:
         *   - `action.target.read`
         */
        readonly listTargets: {
            readonly name: "ListTargets";
            readonly requestType: MessageFns<ListTargetsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListTargetsResponse>;
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
         * Set Execution
         *
         * Sets an execution to call a target or include the targets of another execution.
         * Setting an empty list of targets will remove all targets from the execution, making it a noop.
         *
         * Required permission:
         *   - `action.execution.write`
         */
        readonly setExecution: {
            readonly name: "SetExecution";
            readonly requestType: MessageFns<SetExecutionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetExecutionResponse>;
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
         * List Executions
         *
         * List all matching executions. By default all executions of the instance are returned that have at least one execution target.
         * Make sure to include a limit and sorting for pagination.
         *
         * Required permission:
         *   - `action.execution.read`
         */
        readonly listExecutions: {
            readonly name: "ListExecutions";
            readonly requestType: MessageFns<ListExecutionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListExecutionsResponse>;
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
         * List Execution Functions
         *
         * List all available functions which can be used as condition for executions.
         */
        readonly listExecutionFunctions: {
            readonly name: "ListExecutionFunctions";
            readonly requestType: MessageFns<ListExecutionFunctionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListExecutionFunctionsResponse>;
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
         * List Execution Methods
         *
         * List all available methods which can be used as condition for executions.
         */
        readonly listExecutionMethods: {
            readonly name: "ListExecutionMethods";
            readonly requestType: MessageFns<ListExecutionMethodsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListExecutionMethodsResponse>;
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
         * List Execution Services
         *
         * List all available services which can be used as condition for executions.
         */
        readonly listExecutionServices: {
            readonly name: "ListExecutionServices";
            readonly requestType: MessageFns<ListExecutionServicesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListExecutionServicesResponse>;
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
export interface ActionServiceImplementation<CallContextExt = {}> {
    /**
     * Create Target
     *
     * Create a new target to your endpoint, which can be used in executions.
     *
     * Required permission:
     *   - `action.target.write`
     */
    createTarget(request: CreateTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateTargetResponse>>;
    /**
     * Update Target
     *
     * Update an existing target.
     * To generate a new signing key set the optional expirationSigningKey.
     *
     * Required permission:
     *   - `action.target.write`
     */
    updateTarget(request: UpdateTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateTargetResponse>>;
    /**
     * Delete Target
     *
     * Delete an existing target. This will remove it from any configured execution as well.
     * In case the target is not found, the request will return a successful response as
     * the desired state is already achieved.
     *
     * Required permission:
     *   - `action.target.delete`
     */
    deleteTarget(request: DeleteTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteTargetResponse>>;
    /**
     * Get Target
     *
     * Returns the target identified by the requested ID.
     *
     * Required permission:
     *   - `action.target.read`
     */
    getTarget(request: GetTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetTargetResponse>>;
    /**
     * List targets
     *
     * List all matching targets. By default all targets of the instance are returned.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - `action.target.read`
     */
    listTargets(request: ListTargetsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListTargetsResponse>>;
    /**
     * Set Execution
     *
     * Sets an execution to call a target or include the targets of another execution.
     * Setting an empty list of targets will remove all targets from the execution, making it a noop.
     *
     * Required permission:
     *   - `action.execution.write`
     */
    setExecution(request: SetExecutionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetExecutionResponse>>;
    /**
     * List Executions
     *
     * List all matching executions. By default all executions of the instance are returned that have at least one execution target.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - `action.execution.read`
     */
    listExecutions(request: ListExecutionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionsResponse>>;
    /**
     * List Execution Functions
     *
     * List all available functions which can be used as condition for executions.
     */
    listExecutionFunctions(request: ListExecutionFunctionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionFunctionsResponse>>;
    /**
     * List Execution Methods
     *
     * List all available methods which can be used as condition for executions.
     */
    listExecutionMethods(request: ListExecutionMethodsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionMethodsResponse>>;
    /**
     * List Execution Services
     *
     * List all available services which can be used as condition for executions.
     */
    listExecutionServices(request: ListExecutionServicesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionServicesResponse>>;
}
export interface ActionServiceClient<CallOptionsExt = {}> {
    /**
     * Create Target
     *
     * Create a new target to your endpoint, which can be used in executions.
     *
     * Required permission:
     *   - `action.target.write`
     */
    createTarget(request: DeepPartial<CreateTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateTargetResponse>;
    /**
     * Update Target
     *
     * Update an existing target.
     * To generate a new signing key set the optional expirationSigningKey.
     *
     * Required permission:
     *   - `action.target.write`
     */
    updateTarget(request: DeepPartial<UpdateTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateTargetResponse>;
    /**
     * Delete Target
     *
     * Delete an existing target. This will remove it from any configured execution as well.
     * In case the target is not found, the request will return a successful response as
     * the desired state is already achieved.
     *
     * Required permission:
     *   - `action.target.delete`
     */
    deleteTarget(request: DeepPartial<DeleteTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteTargetResponse>;
    /**
     * Get Target
     *
     * Returns the target identified by the requested ID.
     *
     * Required permission:
     *   - `action.target.read`
     */
    getTarget(request: DeepPartial<GetTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<GetTargetResponse>;
    /**
     * List targets
     *
     * List all matching targets. By default all targets of the instance are returned.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - `action.target.read`
     */
    listTargets(request: DeepPartial<ListTargetsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListTargetsResponse>;
    /**
     * Set Execution
     *
     * Sets an execution to call a target or include the targets of another execution.
     * Setting an empty list of targets will remove all targets from the execution, making it a noop.
     *
     * Required permission:
     *   - `action.execution.write`
     */
    setExecution(request: DeepPartial<SetExecutionRequest>, options?: CallOptions & CallOptionsExt): Promise<SetExecutionResponse>;
    /**
     * List Executions
     *
     * List all matching executions. By default all executions of the instance are returned that have at least one execution target.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - `action.execution.read`
     */
    listExecutions(request: DeepPartial<ListExecutionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListExecutionsResponse>;
    /**
     * List Execution Functions
     *
     * List all available functions which can be used as condition for executions.
     */
    listExecutionFunctions(request: DeepPartial<ListExecutionFunctionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListExecutionFunctionsResponse>;
    /**
     * List Execution Methods
     *
     * List all available methods which can be used as condition for executions.
     */
    listExecutionMethods(request: DeepPartial<ListExecutionMethodsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListExecutionMethodsResponse>;
    /**
     * List Execution Services
     *
     * List all available services which can be used as condition for executions.
     */
    listExecutionServices(request: DeepPartial<ListExecutionServicesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListExecutionServicesResponse>;
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
