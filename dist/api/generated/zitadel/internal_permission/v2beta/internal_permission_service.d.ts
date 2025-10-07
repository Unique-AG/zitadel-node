import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { PaginationRequest, PaginationResponse } from "../../filter/v2beta/filter.js";
import { Administrator, AdministratorFieldName, AdministratorSearchFilter } from "./query.js";
export declare const protobufPackage = "zitadel.internal_permission.v2beta";
export interface ListAdministratorsRequest {
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: AdministratorFieldName | undefined;
    /** Filter the administrator roles to be returned. */
    filters: AdministratorSearchFilter[];
}
export interface ListAdministratorsResponse {
    pagination: PaginationResponse | undefined;
    administrators: Administrator[];
}
export interface GetAdministratorRequest {
    /** ID is the unique identifier of the administrator. */
    id: string;
}
export interface GetAdministratorResponse {
    administrator: Administrator | undefined;
}
export interface CreateAdministratorRequest {
    /** UserID is the ID of the user who should be granted the administrator role. */
    userId: string;
    /** Resource is the type of the resource the administrator roles should be granted for. */
    resource: ResourceType | undefined;
    /**
     * Roles are the roles that should be granted to the user for the specified resource.
     * Note that roles are currently specific to the resource type.
     * This means that if you want to grant a user the administrator role for an organization and a project,
     * you need to create two administrator roles.
     */
    roles: string[];
}
export interface ResourceType {
    /** Instance is the resource type for granting administrator privileges on the instance level. */
    instance?: boolean | undefined;
    /** OrganizationID is required to grant administrator privileges for a specific organization. */
    organizationId?: string | undefined;
    /** ProjectID is required to grant administrator privileges for a specific project. */
    projectId?: string | undefined;
    /** ProjectGrantID is required to grant administrator privileges for a specific project grant. */
    projectGrant?: ResourceType_ProjectGrant | undefined;
}
export interface ResourceType_ProjectGrant {
    /** ProjectID is required to grant administrator privileges for a specific project. */
    projectId: string;
    /** OrganizationID is required to grant administrator privileges for a specific project grant. */
    organizationId: string;
}
export interface CreateAdministratorResponse {
    /** CreationDate is the timestamp when the administrator role was created. */
    creationDate: Date | undefined;
}
export interface UpdateAdministratorRequest {
    /** UserID is the ID of the user who should have his administrator roles update. */
    userId: string;
    /** Resource is the type of the resource the administrator roles should be granted for. */
    resource: ResourceType | undefined;
    /**
     * Roles are the roles that the user should be granted.
     * Note that any role previously granted to the user and not present in the list will be revoked.
     */
    roles: string[];
}
export interface UpdateAdministratorResponse {
    /** ChangeDate is the timestamp when the administrator role was last updated. */
    changeDate: Date | undefined;
}
export interface DeleteAdministratorRequest {
    /** UserID is the ID of the user who should have his administrator roles removed. */
    userId: string;
    /** Resource is the type of the resource the administrator roles should be removed for. */
    resource: ResourceType | undefined;
}
export interface DeleteAdministratorResponse {
    /**
     * DeletionDate is the timestamp when the administrator role was deleted.
     * Note that the deletion date is only guaranteed to be set if the deletion was successful during the request.
     * In case the deletion occurred in a previous request, the deletion date might not be set.
     */
    deletionDate: Date | undefined;
}
export declare const ListAdministratorsRequest: MessageFns<ListAdministratorsRequest>;
export declare const ListAdministratorsResponse: MessageFns<ListAdministratorsResponse>;
export declare const GetAdministratorRequest: MessageFns<GetAdministratorRequest>;
export declare const GetAdministratorResponse: MessageFns<GetAdministratorResponse>;
export declare const CreateAdministratorRequest: MessageFns<CreateAdministratorRequest>;
export declare const ResourceType: MessageFns<ResourceType>;
export declare const ResourceType_ProjectGrant: MessageFns<ResourceType_ProjectGrant>;
export declare const CreateAdministratorResponse: MessageFns<CreateAdministratorResponse>;
export declare const UpdateAdministratorRequest: MessageFns<UpdateAdministratorRequest>;
export declare const UpdateAdministratorResponse: MessageFns<UpdateAdministratorResponse>;
export declare const DeleteAdministratorRequest: MessageFns<DeleteAdministratorRequest>;
export declare const DeleteAdministratorResponse: MessageFns<DeleteAdministratorResponse>;
/**
 * InternalPermissionService provides methods to manage permissions for resource
 * and their management in ZITADEL itself.
 *
 * If you want to manage permissions and roles within your project or application,
 * please use the AuthorizationsService.
 */
export type InternalPermissionServiceDefinition = typeof InternalPermissionServiceDefinition;
export declare const InternalPermissionServiceDefinition: {
    readonly name: "InternalPermissionService";
    readonly fullName: "zitadel.internal_permission.v2beta.InternalPermissionService";
    readonly methods: {
        /**
         * ListAdministrators returns all administrators and its roles matching the request and necessary permissions.
         *
         * Required permissions depend on the resource type:
         *   - "iam.member.read" for instance administrators
         *   - "org.member.read" for organization administrators
         *   - "project.member.read" for project administrators
         *   - "project.grant.member.read" for project grant administrators
         *   - no permissions required for listing own administrator roles
         */
        readonly listAdministrators: {
            readonly name: "ListAdministrators";
            readonly requestType: MessageFns<ListAdministratorsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAdministratorsResponse>;
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
         * CreateAdministrator grants a administrator role to a user for a specific resource.
         *
         * Note that the roles are specific to the resource type.
         * This means that if you want to grant a user the administrator role for an organization and a project,
         * you need to create two administrator roles.
         *
         * Required permissions depend on the resource type:
         *   - "iam.member.write" for instance administrators
         *   - "org.member.write" for organization administrators
         *   - "project.member.write" for project administrators
         *   - "project.grant.member.write" for project grant administrators
         */
        readonly createAdministrator: {
            readonly name: "CreateAdministrator";
            readonly requestType: MessageFns<CreateAdministratorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateAdministratorResponse>;
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
         * UpdateAdministrator updates the specific administrator role.
         *
         * Note that any role previously granted to the user and not present in the request will be revoked.
         *
         * Required permissions depend on the resource type:
         *   - "iam.member.write" for instance administrators
         *   - "org.member.write" for organization administrators
         *   - "project.member.write" for project administrators
         *   - "project.grant.member.write" for project grant administrators
         */
        readonly updateAdministrator: {
            readonly name: "UpdateAdministrator";
            readonly requestType: MessageFns<UpdateAdministratorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateAdministratorResponse>;
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
         * DeleteAdministrator revokes a administrator role from a user.
         *
         * In case the administrator role is not found, the request will return a successful response as
         * the desired state is already achieved.
         * You can check the deletion date in the response to verify if the administrator role was deleted during the request.
         *
         * Required permissions depend on the resource type:
         *   - "iam.member.delete" for instance administrators
         *   - "org.member.delete" for organization administrators
         *   - "project.member.delete" for project administrators
         *   - "project.grant.member.delete" for project grant administrators
         */
        readonly deleteAdministrator: {
            readonly name: "DeleteAdministrator";
            readonly requestType: MessageFns<DeleteAdministratorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteAdministratorResponse>;
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
export interface InternalPermissionServiceImplementation<CallContextExt = {}> {
    /**
     * ListAdministrators returns all administrators and its roles matching the request and necessary permissions.
     *
     * Required permissions depend on the resource type:
     *   - "iam.member.read" for instance administrators
     *   - "org.member.read" for organization administrators
     *   - "project.member.read" for project administrators
     *   - "project.grant.member.read" for project grant administrators
     *   - no permissions required for listing own administrator roles
     */
    listAdministrators(request: ListAdministratorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAdministratorsResponse>>;
    /**
     * CreateAdministrator grants a administrator role to a user for a specific resource.
     *
     * Note that the roles are specific to the resource type.
     * This means that if you want to grant a user the administrator role for an organization and a project,
     * you need to create two administrator roles.
     *
     * Required permissions depend on the resource type:
     *   - "iam.member.write" for instance administrators
     *   - "org.member.write" for organization administrators
     *   - "project.member.write" for project administrators
     *   - "project.grant.member.write" for project grant administrators
     */
    createAdministrator(request: CreateAdministratorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateAdministratorResponse>>;
    /**
     * UpdateAdministrator updates the specific administrator role.
     *
     * Note that any role previously granted to the user and not present in the request will be revoked.
     *
     * Required permissions depend on the resource type:
     *   - "iam.member.write" for instance administrators
     *   - "org.member.write" for organization administrators
     *   - "project.member.write" for project administrators
     *   - "project.grant.member.write" for project grant administrators
     */
    updateAdministrator(request: UpdateAdministratorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAdministratorResponse>>;
    /**
     * DeleteAdministrator revokes a administrator role from a user.
     *
     * In case the administrator role is not found, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the deletion date in the response to verify if the administrator role was deleted during the request.
     *
     * Required permissions depend on the resource type:
     *   - "iam.member.delete" for instance administrators
     *   - "org.member.delete" for organization administrators
     *   - "project.member.delete" for project administrators
     *   - "project.grant.member.delete" for project grant administrators
     */
    deleteAdministrator(request: DeleteAdministratorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteAdministratorResponse>>;
}
export interface InternalPermissionServiceClient<CallOptionsExt = {}> {
    /**
     * ListAdministrators returns all administrators and its roles matching the request and necessary permissions.
     *
     * Required permissions depend on the resource type:
     *   - "iam.member.read" for instance administrators
     *   - "org.member.read" for organization administrators
     *   - "project.member.read" for project administrators
     *   - "project.grant.member.read" for project grant administrators
     *   - no permissions required for listing own administrator roles
     */
    listAdministrators(request: DeepPartial<ListAdministratorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAdministratorsResponse>;
    /**
     * CreateAdministrator grants a administrator role to a user for a specific resource.
     *
     * Note that the roles are specific to the resource type.
     * This means that if you want to grant a user the administrator role for an organization and a project,
     * you need to create two administrator roles.
     *
     * Required permissions depend on the resource type:
     *   - "iam.member.write" for instance administrators
     *   - "org.member.write" for organization administrators
     *   - "project.member.write" for project administrators
     *   - "project.grant.member.write" for project grant administrators
     */
    createAdministrator(request: DeepPartial<CreateAdministratorRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateAdministratorResponse>;
    /**
     * UpdateAdministrator updates the specific administrator role.
     *
     * Note that any role previously granted to the user and not present in the request will be revoked.
     *
     * Required permissions depend on the resource type:
     *   - "iam.member.write" for instance administrators
     *   - "org.member.write" for organization administrators
     *   - "project.member.write" for project administrators
     *   - "project.grant.member.write" for project grant administrators
     */
    updateAdministrator(request: DeepPartial<UpdateAdministratorRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAdministratorResponse>;
    /**
     * DeleteAdministrator revokes a administrator role from a user.
     *
     * In case the administrator role is not found, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the deletion date in the response to verify if the administrator role was deleted during the request.
     *
     * Required permissions depend on the resource type:
     *   - "iam.member.delete" for instance administrators
     *   - "org.member.delete" for organization administrators
     *   - "project.member.delete" for project administrators
     *   - "project.grant.member.delete" for project grant administrators
     */
    deleteAdministrator(request: DeepPartial<DeleteAdministratorRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteAdministratorResponse>;
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
