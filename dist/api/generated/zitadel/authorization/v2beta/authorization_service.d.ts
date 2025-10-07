import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { PaginationRequest, PaginationResponse } from "../../filter/v2beta/filter.js";
import { Authorization, AuthorizationFieldName, AuthorizationsSearchFilter } from "./authorization.js";
export declare const protobufPackage = "zitadel.authorization.v2beta";
export interface ListAuthorizationsRequest {
    /** Paginate through the results using a limit, offset and sorting. */
    pagination?: PaginationRequest | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: AuthorizationFieldName | undefined;
    /** Define the criteria to query for. */
    filters: AuthorizationsSearchFilter[];
}
export interface ListAuthorizationsResponse {
    /** Details contains the pagination information. */
    pagination: PaginationResponse | undefined;
    authorizations: Authorization[];
}
export interface CreateAuthorizationRequest {
    /** UserID is the ID of the user who should be granted the authorization. */
    userId: string;
    /** Project ID is the ID of the project the user should be authorized for. */
    projectId: string;
    /**
     * OrganizationID is the ID of the organization on which the authorization should be created.
     * The organization must either own the project or have a grant for the project.
     * If omitted, the authorization is created on the projects organization.
     */
    organizationId?: string | undefined;
    /** RoleKeys are the keys of the roles the user should be granted. */
    roleKeys: string[];
}
export interface CreateAuthorizationResponse {
    /** ID is the unique identifier of the newly created authorization. */
    id: string;
    /** CreationDate is the timestamp when the authorization was created. */
    creationDate: Date | undefined;
}
export interface UpdateAuthorizationRequest {
    /** ID is the unique identifier of the authorization. */
    id: string;
    /**
     * RoleKeys are the keys of the roles the user should be granted.
     * Note that any role keys previously granted to the user and not present in the list will be revoked.
     */
    roleKeys: string[];
}
export interface UpdateAuthorizationResponse {
    /** ChangeDate is the timestamp when the authorization was last updated. */
    changeDate: Date | undefined;
}
export interface DeleteAuthorizationRequest {
    /** ID is the unique identifier of the authorization that should be deleted. */
    id: string;
}
export interface DeleteAuthorizationResponse {
    /** DeletionDate is the timestamp when the authorization was deleted. */
    deletionDate: Date | undefined;
}
export interface ActivateAuthorizationRequest {
    /** ID is the unique identifier of the authorization that should be activated. */
    id: string;
}
export interface ActivateAuthorizationResponse {
    /** ChangeDate is the last timestamp when the authorization was changed / activated. */
    changeDate: Date | undefined;
}
export interface DeactivateAuthorizationRequest {
    /** ID is the unique identifier of the authorization that should be deactivated. */
    id: string;
}
export interface DeactivateAuthorizationResponse {
    /** ChangeDate is the last timestamp when the authorization was changed / deactivated. */
    changeDate: Date | undefined;
}
export declare const ListAuthorizationsRequest: MessageFns<ListAuthorizationsRequest>;
export declare const ListAuthorizationsResponse: MessageFns<ListAuthorizationsResponse>;
export declare const CreateAuthorizationRequest: MessageFns<CreateAuthorizationRequest>;
export declare const CreateAuthorizationResponse: MessageFns<CreateAuthorizationResponse>;
export declare const UpdateAuthorizationRequest: MessageFns<UpdateAuthorizationRequest>;
export declare const UpdateAuthorizationResponse: MessageFns<UpdateAuthorizationResponse>;
export declare const DeleteAuthorizationRequest: MessageFns<DeleteAuthorizationRequest>;
export declare const DeleteAuthorizationResponse: MessageFns<DeleteAuthorizationResponse>;
export declare const ActivateAuthorizationRequest: MessageFns<ActivateAuthorizationRequest>;
export declare const ActivateAuthorizationResponse: MessageFns<ActivateAuthorizationResponse>;
export declare const DeactivateAuthorizationRequest: MessageFns<DeactivateAuthorizationRequest>;
export declare const DeactivateAuthorizationResponse: MessageFns<DeactivateAuthorizationResponse>;
/**
 * AuthorizationService provides methods to manage authorizations for users within your projects and applications.
 *
 * For managing permissions and roles for ZITADEL internal resources, like organizations, projects,
 * users, etc., please use the InternalPermissionService.
 */
export type AuthorizationServiceDefinition = typeof AuthorizationServiceDefinition;
export declare const AuthorizationServiceDefinition: {
    readonly name: "AuthorizationService";
    readonly fullName: "zitadel.authorization.v2beta.AuthorizationService";
    readonly methods: {
        /**
         * List Authorizations
         *
         * ListAuthorizations returns all authorizations matching the request and necessary permissions.
         *
         * Required permissions:
         *   - "user.grant.read"
         *   - no permissions required for listing own authorizations
         */
        readonly listAuthorizations: {
            readonly name: "ListAuthorizations";
            readonly requestType: MessageFns<ListAuthorizationsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAuthorizationsResponse>;
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
         * Create Authorization
         *
         * CreateAuthorization creates a new authorization for a user in an owned or granted project.
         *
         * Required permissions:
         *   - "user.grant.write"
         */
        readonly createAuthorization: {
            readonly name: "CreateAuthorization";
            readonly requestType: MessageFns<CreateAuthorizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateAuthorizationResponse>;
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
         * Update Authorization
         *
         * UpdateAuthorization updates the authorization.
         *
         * Note that any role keys previously granted to the user and not present in the request will be revoked.
         *
         * Required permissions:
         *   - "user.grant.write"
         */
        readonly updateAuthorization: {
            readonly name: "UpdateAuthorization";
            readonly requestType: MessageFns<UpdateAuthorizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateAuthorizationResponse>;
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
         * Delete Authorization
         *
         * DeleteAuthorization deletes the authorization.
         *
         * In case the authorization is not found, the request will return a successful response as
         * the desired state is already achieved.
         * You can check the deletion date in the response to verify if the authorization was deleted by the request.
         *
         * Required permissions:
         *   - "user.grant.delete"
         */
        readonly deleteAuthorization: {
            readonly name: "DeleteAuthorization";
            readonly requestType: MessageFns<DeleteAuthorizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteAuthorizationResponse>;
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
         * Activate Authorization
         *
         * ActivateAuthorization activates an existing but inactive authorization.
         *
         * In case the authorization is already active, the request will return a successful response as
         * the desired state is already achieved.
         * You can check the change date in the response to verify if the authorization was activated by the request.
         *
         * Required permissions:
         *   - "user.grant.write"
         */
        readonly activateAuthorization: {
            readonly name: "ActivateAuthorization";
            readonly requestType: MessageFns<ActivateAuthorizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateAuthorizationResponse>;
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
         * Deactivate Authorization
         *
         * DeactivateAuthorization deactivates an existing and active authorization.
         *
         * In case the authorization is already inactive, the request will return a successful response as
         * the desired state is already achieved.
         * You can check the change date in the response to verify if the authorization was deactivated by the request.
         *
         * Required permissions:
         *   - "user.grant.write"
         */
        readonly deactivateAuthorization: {
            readonly name: "DeactivateAuthorization";
            readonly requestType: MessageFns<DeactivateAuthorizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateAuthorizationResponse>;
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
export interface AuthorizationServiceImplementation<CallContextExt = {}> {
    /**
     * List Authorizations
     *
     * ListAuthorizations returns all authorizations matching the request and necessary permissions.
     *
     * Required permissions:
     *   - "user.grant.read"
     *   - no permissions required for listing own authorizations
     */
    listAuthorizations(request: ListAuthorizationsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAuthorizationsResponse>>;
    /**
     * Create Authorization
     *
     * CreateAuthorization creates a new authorization for a user in an owned or granted project.
     *
     * Required permissions:
     *   - "user.grant.write"
     */
    createAuthorization(request: CreateAuthorizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateAuthorizationResponse>>;
    /**
     * Update Authorization
     *
     * UpdateAuthorization updates the authorization.
     *
     * Note that any role keys previously granted to the user and not present in the request will be revoked.
     *
     * Required permissions:
     *   - "user.grant.write"
     */
    updateAuthorization(request: UpdateAuthorizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAuthorizationResponse>>;
    /**
     * Delete Authorization
     *
     * DeleteAuthorization deletes the authorization.
     *
     * In case the authorization is not found, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the deletion date in the response to verify if the authorization was deleted by the request.
     *
     * Required permissions:
     *   - "user.grant.delete"
     */
    deleteAuthorization(request: DeleteAuthorizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteAuthorizationResponse>>;
    /**
     * Activate Authorization
     *
     * ActivateAuthorization activates an existing but inactive authorization.
     *
     * In case the authorization is already active, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the change date in the response to verify if the authorization was activated by the request.
     *
     * Required permissions:
     *   - "user.grant.write"
     */
    activateAuthorization(request: ActivateAuthorizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateAuthorizationResponse>>;
    /**
     * Deactivate Authorization
     *
     * DeactivateAuthorization deactivates an existing and active authorization.
     *
     * In case the authorization is already inactive, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the change date in the response to verify if the authorization was deactivated by the request.
     *
     * Required permissions:
     *   - "user.grant.write"
     */
    deactivateAuthorization(request: DeactivateAuthorizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateAuthorizationResponse>>;
}
export interface AuthorizationServiceClient<CallOptionsExt = {}> {
    /**
     * List Authorizations
     *
     * ListAuthorizations returns all authorizations matching the request and necessary permissions.
     *
     * Required permissions:
     *   - "user.grant.read"
     *   - no permissions required for listing own authorizations
     */
    listAuthorizations(request: DeepPartial<ListAuthorizationsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAuthorizationsResponse>;
    /**
     * Create Authorization
     *
     * CreateAuthorization creates a new authorization for a user in an owned or granted project.
     *
     * Required permissions:
     *   - "user.grant.write"
     */
    createAuthorization(request: DeepPartial<CreateAuthorizationRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateAuthorizationResponse>;
    /**
     * Update Authorization
     *
     * UpdateAuthorization updates the authorization.
     *
     * Note that any role keys previously granted to the user and not present in the request will be revoked.
     *
     * Required permissions:
     *   - "user.grant.write"
     */
    updateAuthorization(request: DeepPartial<UpdateAuthorizationRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAuthorizationResponse>;
    /**
     * Delete Authorization
     *
     * DeleteAuthorization deletes the authorization.
     *
     * In case the authorization is not found, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the deletion date in the response to verify if the authorization was deleted by the request.
     *
     * Required permissions:
     *   - "user.grant.delete"
     */
    deleteAuthorization(request: DeepPartial<DeleteAuthorizationRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteAuthorizationResponse>;
    /**
     * Activate Authorization
     *
     * ActivateAuthorization activates an existing but inactive authorization.
     *
     * In case the authorization is already active, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the change date in the response to verify if the authorization was activated by the request.
     *
     * Required permissions:
     *   - "user.grant.write"
     */
    activateAuthorization(request: DeepPartial<ActivateAuthorizationRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateAuthorizationResponse>;
    /**
     * Deactivate Authorization
     *
     * DeactivateAuthorization deactivates an existing and active authorization.
     *
     * In case the authorization is already inactive, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the change date in the response to verify if the authorization was deactivated by the request.
     *
     * Required permissions:
     *   - "user.grant.write"
     */
    deactivateAuthorization(request: DeepPartial<DeactivateAuthorizationRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateAuthorizationResponse>;
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
