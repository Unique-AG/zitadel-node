import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Instance } from "../../../object/v3alpha/object.js";
import { Details, ListDetails, SearchQuery } from "../../object/v3alpha/object.js";
import { Condition, Execution, GetExecution } from "./execution.js";
import { ExecutionFieldName, ExecutionSearchFilter, TargetFieldName, TargetSearchFilter } from "./query.js";
import { GetTarget, PatchTarget, Target } from "./target.js";
export declare const protobufPackage = "zitadel.resources.action.v3alpha";
export interface CreateTargetRequest {
    instance?: Instance | undefined;
    target: Target | undefined;
}
export interface CreateTargetResponse {
    details: Details | undefined;
    /** Key used to sign and check payload sent to the target. */
    signingKey: string;
}
export interface PatchTargetRequest {
    instance?: Instance | undefined;
    id: string;
    target: PatchTarget | undefined;
}
export interface PatchTargetResponse {
    details: Details | undefined;
    /** Key used to sign and check payload sent to the target. */
    signingKey?: string | undefined;
}
export interface DeleteTargetRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface DeleteTargetResponse {
    details: Details | undefined;
}
export interface GetTargetRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface GetTargetResponse {
    target: GetTarget | undefined;
}
export interface SearchTargetsRequest {
    instance?: Instance | undefined;
    /** list limitations and ordering. */
    query?: SearchQuery | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: TargetFieldName | undefined;
    /** Define the criteria to query for. */
    filters: TargetSearchFilter[];
}
export interface SearchTargetsResponse {
    details: ListDetails | undefined;
    result: GetTarget[];
}
export interface SetExecutionRequest {
    instance?: Instance | undefined;
    condition: Condition | undefined;
    execution: Execution | undefined;
}
export interface SetExecutionResponse {
    details: Details | undefined;
}
export interface SearchExecutionsRequest {
    instance?: Instance | undefined;
    /** list limitations and ordering. */
    query?: SearchQuery | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: ExecutionFieldName | undefined;
    /** Define the criteria to query for. */
    filters: ExecutionSearchFilter[];
}
export interface SearchExecutionsResponse {
    details: ListDetails | undefined;
    result: GetExecution[];
}
export interface ListExecutionFunctionsRequest {
}
export interface ListExecutionFunctionsResponse {
    /** All available methods */
    functions: string[];
}
export interface ListExecutionMethodsRequest {
}
export interface ListExecutionMethodsResponse {
    /** All available methods */
    methods: string[];
}
export interface ListExecutionServicesRequest {
}
export interface ListExecutionServicesResponse {
    /** All available methods */
    services: string[];
}
export declare const CreateTargetRequest: MessageFns<CreateTargetRequest>;
export declare const CreateTargetResponse: MessageFns<CreateTargetResponse>;
export declare const PatchTargetRequest: MessageFns<PatchTargetRequest>;
export declare const PatchTargetResponse: MessageFns<PatchTargetResponse>;
export declare const DeleteTargetRequest: MessageFns<DeleteTargetRequest>;
export declare const DeleteTargetResponse: MessageFns<DeleteTargetResponse>;
export declare const GetTargetRequest: MessageFns<GetTargetRequest>;
export declare const GetTargetResponse: MessageFns<GetTargetResponse>;
export declare const SearchTargetsRequest: MessageFns<SearchTargetsRequest>;
export declare const SearchTargetsResponse: MessageFns<SearchTargetsResponse>;
export declare const SetExecutionRequest: MessageFns<SetExecutionRequest>;
export declare const SetExecutionResponse: MessageFns<SetExecutionResponse>;
export declare const SearchExecutionsRequest: MessageFns<SearchExecutionsRequest>;
export declare const SearchExecutionsResponse: MessageFns<SearchExecutionsResponse>;
export declare const ListExecutionFunctionsRequest: MessageFns<ListExecutionFunctionsRequest>;
export declare const ListExecutionFunctionsResponse: MessageFns<ListExecutionFunctionsResponse>;
export declare const ListExecutionMethodsRequest: MessageFns<ListExecutionMethodsRequest>;
export declare const ListExecutionMethodsResponse: MessageFns<ListExecutionMethodsResponse>;
export declare const ListExecutionServicesRequest: MessageFns<ListExecutionServicesRequest>;
export declare const ListExecutionServicesResponse: MessageFns<ListExecutionServicesResponse>;
export type ZITADELActionsDefinition = typeof ZITADELActionsDefinition;
export declare const ZITADELActionsDefinition: {
    readonly name: "ZITADELActions";
    readonly fullName: "zitadel.resources.action.v3alpha.ZITADELActions";
    readonly methods: {
        /**
         * Create a target
         *
         * Create a new target, which can be used in executions.
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
         * Patch a target
         *
         * Patch an existing target.
         */
        readonly patchTarget: {
            readonly name: "PatchTarget";
            readonly requestType: MessageFns<PatchTargetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<PatchTargetResponse>;
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
         * Delete a target
         *
         * Delete an existing target. This will remove it from any configured execution as well.
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
         * Target by ID
         *
         * Returns the target identified by the requested ID.
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
         * Search targets
         *
         * Search all matching targets. By default all targets of the instance are returned.
         * Make sure to include a limit and sorting for pagination.
         */
        readonly searchTargets: {
            readonly name: "SearchTargets";
            readonly requestType: MessageFns<SearchTargetsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SearchTargetsResponse>;
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
         * Sets an execution to call a target or include the targets of another execution.
         *
         * Setting an empty list of targets will remove all targets from the execution, making it a noop.
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
         * Search executions
         *
         * Search all matching executions. By default all executions of the instance are returned that have at least one execution target.
         * Make sure to include a limit and sorting for pagination.
         */
        readonly searchExecutions: {
            readonly name: "SearchExecutions";
            readonly requestType: MessageFns<SearchExecutionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SearchExecutionsResponse>;
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
         * List all available functions
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
         * List all available methods
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
         * List all available service
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
export interface ZITADELActionsServiceImplementation<CallContextExt = {}> {
    /**
     * Create a target
     *
     * Create a new target, which can be used in executions.
     */
    createTarget(request: CreateTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateTargetResponse>>;
    /**
     * Patch a target
     *
     * Patch an existing target.
     */
    patchTarget(request: PatchTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PatchTargetResponse>>;
    /**
     * Delete a target
     *
     * Delete an existing target. This will remove it from any configured execution as well.
     */
    deleteTarget(request: DeleteTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteTargetResponse>>;
    /**
     * Target by ID
     *
     * Returns the target identified by the requested ID.
     */
    getTarget(request: GetTargetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetTargetResponse>>;
    /**
     * Search targets
     *
     * Search all matching targets. By default all targets of the instance are returned.
     * Make sure to include a limit and sorting for pagination.
     */
    searchTargets(request: SearchTargetsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SearchTargetsResponse>>;
    /**
     * Sets an execution to call a target or include the targets of another execution.
     *
     * Setting an empty list of targets will remove all targets from the execution, making it a noop.
     */
    setExecution(request: SetExecutionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetExecutionResponse>>;
    /**
     * Search executions
     *
     * Search all matching executions. By default all executions of the instance are returned that have at least one execution target.
     * Make sure to include a limit and sorting for pagination.
     */
    searchExecutions(request: SearchExecutionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SearchExecutionsResponse>>;
    /**
     * List all available functions
     *
     * List all available functions which can be used as condition for executions.
     */
    listExecutionFunctions(request: ListExecutionFunctionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionFunctionsResponse>>;
    /**
     * List all available methods
     *
     * List all available methods which can be used as condition for executions.
     */
    listExecutionMethods(request: ListExecutionMethodsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionMethodsResponse>>;
    /**
     * List all available service
     *
     * List all available services which can be used as condition for executions.
     */
    listExecutionServices(request: ListExecutionServicesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListExecutionServicesResponse>>;
}
export interface ZITADELActionsClient<CallOptionsExt = {}> {
    /**
     * Create a target
     *
     * Create a new target, which can be used in executions.
     */
    createTarget(request: DeepPartial<CreateTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateTargetResponse>;
    /**
     * Patch a target
     *
     * Patch an existing target.
     */
    patchTarget(request: DeepPartial<PatchTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<PatchTargetResponse>;
    /**
     * Delete a target
     *
     * Delete an existing target. This will remove it from any configured execution as well.
     */
    deleteTarget(request: DeepPartial<DeleteTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteTargetResponse>;
    /**
     * Target by ID
     *
     * Returns the target identified by the requested ID.
     */
    getTarget(request: DeepPartial<GetTargetRequest>, options?: CallOptions & CallOptionsExt): Promise<GetTargetResponse>;
    /**
     * Search targets
     *
     * Search all matching targets. By default all targets of the instance are returned.
     * Make sure to include a limit and sorting for pagination.
     */
    searchTargets(request: DeepPartial<SearchTargetsRequest>, options?: CallOptions & CallOptionsExt): Promise<SearchTargetsResponse>;
    /**
     * Sets an execution to call a target or include the targets of another execution.
     *
     * Setting an empty list of targets will remove all targets from the execution, making it a noop.
     */
    setExecution(request: DeepPartial<SetExecutionRequest>, options?: CallOptions & CallOptionsExt): Promise<SetExecutionResponse>;
    /**
     * Search executions
     *
     * Search all matching executions. By default all executions of the instance are returned that have at least one execution target.
     * Make sure to include a limit and sorting for pagination.
     */
    searchExecutions(request: DeepPartial<SearchExecutionsRequest>, options?: CallOptions & CallOptionsExt): Promise<SearchExecutionsResponse>;
    /**
     * List all available functions
     *
     * List all available functions which can be used as condition for executions.
     */
    listExecutionFunctions(request: DeepPartial<ListExecutionFunctionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListExecutionFunctionsResponse>;
    /**
     * List all available methods
     *
     * List all available methods which can be used as condition for executions.
     */
    listExecutionMethods(request: DeepPartial<ListExecutionMethodsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListExecutionMethodsResponse>;
    /**
     * List all available service
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
