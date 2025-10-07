import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { PaginationRequest, PaginationResponse } from "../../filter/v2beta/filter.js";
import { PrivateLabelingSetting, Project, ProjectFieldName, ProjectGrant, ProjectGrantFieldName, ProjectGrantSearchFilter, ProjectRole, ProjectRoleFieldName, ProjectRoleSearchFilter, ProjectSearchFilter } from "./query.js";
export declare const protobufPackage = "zitadel.project.v2beta";
export interface CreateProjectRequest {
    /** The unique identifier of the organization the project belongs to. */
    organizationId: string;
    /** The unique identifier of the project. */
    id?: string | undefined;
    /** Name of the project. */
    name: string;
    /** Enable this setting to have role information included in the user info endpoint. It is also dependent on your application settings to include it in tokens and other types. */
    projectRoleAssertion: boolean;
    /** When enabled ZITADEL will check if a user has an authorization to use this project assigned when login into an application of this project. */
    authorizationRequired: boolean;
    /** When enabled ZITADEL will check if the organization of the user, that is trying to log in, has access to this project (either owns the project or is granted). */
    projectAccessRequired: boolean;
    /** Define which private labeling/branding should trigger when getting to a login of this project. */
    privateLabelingSetting: PrivateLabelingSetting;
}
export interface CreateProjectResponse {
    /** The unique identifier of the newly created project. */
    id: string;
    /** The timestamp of the project creation. */
    creationDate: Date | undefined;
}
export interface UpdateProjectRequest {
    id: string;
    /** Name of the project. */
    name?: string | undefined;
    /** Enable this setting to have role information included in the user info endpoint. It is also dependent on your application settings to include it in tokens and other types. */
    projectRoleAssertion?: boolean | undefined;
    /** When enabled ZITADEL will check if a user has a role of this project assigned when login into an application of this project. */
    projectRoleCheck?: boolean | undefined;
    /** When enabled ZITADEL will check if the organization of the user, that is trying to log in, has a grant to this project. */
    hasProjectCheck?: boolean | undefined;
    /** Define which private labeling/branding should trigger when getting to a login of this project. */
    privateLabelingSetting?: PrivateLabelingSetting | undefined;
}
export interface UpdateProjectResponse {
    /** The timestamp of the change of the project. */
    changeDate: Date | undefined;
}
export interface DeleteProjectRequest {
    /** The unique identifier of the project. */
    id: string;
}
export interface DeleteProjectResponse {
    /**
     * The timestamp of the deletion of the project.
     * Note that the deletion date is only guaranteed to be set if the deletion was successful during the request.
     * In case the deletion occurred in a previous request, the deletion date might be empty.
     */
    deletionDate: Date | undefined;
}
export interface GetProjectRequest {
    /** The unique identifier of the project. */
    id: string;
}
export interface GetProjectResponse {
    project: Project | undefined;
}
export interface ListProjectsRequest {
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: ProjectFieldName | undefined;
    /** Define the criteria to query for. */
    filters: ProjectSearchFilter[];
}
export interface ListProjectsResponse {
    pagination: PaginationResponse | undefined;
    projects: Project[];
}
export interface DeactivateProjectRequest {
    /** The unique identifier of the project. */
    id: string;
}
export interface DeactivateProjectResponse {
    /** The timestamp of the change of the project. */
    changeDate: Date | undefined;
}
export interface ActivateProjectRequest {
    /** The unique identifier of the project. */
    id: string;
}
export interface ActivateProjectResponse {
    /** The timestamp of the change of the project. */
    changeDate: Date | undefined;
}
export interface AddProjectRoleRequest {
    /** ID of the project. */
    projectId: string;
    /** The key is the only relevant attribute for ZITADEL regarding the authorization checks. */
    roleKey: string;
    /** Name displayed for the role. */
    displayName: string;
    /** The group is only used for display purposes. That you have better handling, like giving all the roles from a group to a user. */
    group?: string | undefined;
}
export interface AddProjectRoleResponse {
    /** The timestamp of the project role creation. */
    creationDate: Date | undefined;
}
export interface UpdateProjectRoleRequest {
    /** ID of the project. */
    projectId: string;
    /** The key is the only relevant attribute for ZITADEL regarding the authorization checks. */
    roleKey: string;
    /** Name displayed for the role. */
    displayName?: string | undefined;
    /** The group is only used for display purposes. That you have better handling, like giving all the roles from a group to a user. */
    group?: string | undefined;
}
export interface UpdateProjectRoleResponse {
    /** The timestamp of the change of the project role. */
    changeDate: Date | undefined;
}
export interface RemoveProjectRoleRequest {
    /** ID of the project. */
    projectId: string;
    /** The key is the only relevant attribute for ZITADEL regarding the authorization checks. */
    roleKey: string;
}
export interface RemoveProjectRoleResponse {
    /**
     * The timestamp of the removal of the project role.
     * Note that the removal date is only guaranteed to be set if the removal was successful during the request.
     * In case the removal occurred in a previous request, the removal date might be empty.
     */
    removalDate: Date | undefined;
}
export interface ListProjectRolesRequest {
    /** ID of the project. */
    projectId: string;
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: ProjectRoleFieldName | undefined;
    /** Define the criteria to query for. */
    filters: ProjectRoleSearchFilter[];
}
export interface ListProjectRolesResponse {
    pagination: PaginationResponse | undefined;
    projectRoles: ProjectRole[];
}
export interface CreateProjectGrantRequest {
    /** ID of the project. */
    projectId: string;
    /** Organization the project is granted to. */
    grantedOrganizationId: string;
    /** Keys of the role available for the project grant. */
    roleKeys: string[];
}
export interface CreateProjectGrantResponse {
    /** The timestamp of the project grant creation. */
    creationDate: Date | undefined;
}
export interface UpdateProjectGrantRequest {
    /** ID of the project. */
    projectId: string;
    /** Organization the project is granted to. */
    grantedOrganizationId: string;
    /** Keys of the role available for the project grant. */
    roleKeys: string[];
}
export interface UpdateProjectGrantResponse {
    /** The timestamp of the change of the project grant. */
    changeDate: Date | undefined;
}
export interface DeleteProjectGrantRequest {
    /** ID of the project. */
    projectId: string;
    /** Organization the project is granted to. */
    grantedOrganizationId: string;
}
export interface DeleteProjectGrantResponse {
    /**
     * The timestamp of the deletion of the project grant.
     * Note that the deletion date is only guaranteed to be set if the deletion was successful during the request.
     * In case the deletion occurred in a previous request, the deletion date might be empty.
     */
    deletionDate: Date | undefined;
}
export interface DeactivateProjectGrantRequest {
    /** ID of the project. */
    projectId: string;
    /** Organization the project is granted to. */
    grantedOrganizationId: string;
}
export interface DeactivateProjectGrantResponse {
    /** The timestamp of the change of the project grant. */
    changeDate: Date | undefined;
}
export interface ActivateProjectGrantRequest {
    /** ID of the project. */
    projectId: string;
    /** Organization the project is granted to. */
    grantedOrganizationId: string;
}
export interface ActivateProjectGrantResponse {
    /** The timestamp of the change of the project grant. */
    changeDate: Date | undefined;
}
export interface ListProjectGrantsRequest {
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: ProjectGrantFieldName | undefined;
    /** Define the criteria to query for. */
    filters: ProjectGrantSearchFilter[];
}
export interface ListProjectGrantsResponse {
    pagination: PaginationResponse | undefined;
    projectGrants: ProjectGrant[];
}
export declare const CreateProjectRequest: MessageFns<CreateProjectRequest>;
export declare const CreateProjectResponse: MessageFns<CreateProjectResponse>;
export declare const UpdateProjectRequest: MessageFns<UpdateProjectRequest>;
export declare const UpdateProjectResponse: MessageFns<UpdateProjectResponse>;
export declare const DeleteProjectRequest: MessageFns<DeleteProjectRequest>;
export declare const DeleteProjectResponse: MessageFns<DeleteProjectResponse>;
export declare const GetProjectRequest: MessageFns<GetProjectRequest>;
export declare const GetProjectResponse: MessageFns<GetProjectResponse>;
export declare const ListProjectsRequest: MessageFns<ListProjectsRequest>;
export declare const ListProjectsResponse: MessageFns<ListProjectsResponse>;
export declare const DeactivateProjectRequest: MessageFns<DeactivateProjectRequest>;
export declare const DeactivateProjectResponse: MessageFns<DeactivateProjectResponse>;
export declare const ActivateProjectRequest: MessageFns<ActivateProjectRequest>;
export declare const ActivateProjectResponse: MessageFns<ActivateProjectResponse>;
export declare const AddProjectRoleRequest: MessageFns<AddProjectRoleRequest>;
export declare const AddProjectRoleResponse: MessageFns<AddProjectRoleResponse>;
export declare const UpdateProjectRoleRequest: MessageFns<UpdateProjectRoleRequest>;
export declare const UpdateProjectRoleResponse: MessageFns<UpdateProjectRoleResponse>;
export declare const RemoveProjectRoleRequest: MessageFns<RemoveProjectRoleRequest>;
export declare const RemoveProjectRoleResponse: MessageFns<RemoveProjectRoleResponse>;
export declare const ListProjectRolesRequest: MessageFns<ListProjectRolesRequest>;
export declare const ListProjectRolesResponse: MessageFns<ListProjectRolesResponse>;
export declare const CreateProjectGrantRequest: MessageFns<CreateProjectGrantRequest>;
export declare const CreateProjectGrantResponse: MessageFns<CreateProjectGrantResponse>;
export declare const UpdateProjectGrantRequest: MessageFns<UpdateProjectGrantRequest>;
export declare const UpdateProjectGrantResponse: MessageFns<UpdateProjectGrantResponse>;
export declare const DeleteProjectGrantRequest: MessageFns<DeleteProjectGrantRequest>;
export declare const DeleteProjectGrantResponse: MessageFns<DeleteProjectGrantResponse>;
export declare const DeactivateProjectGrantRequest: MessageFns<DeactivateProjectGrantRequest>;
export declare const DeactivateProjectGrantResponse: MessageFns<DeactivateProjectGrantResponse>;
export declare const ActivateProjectGrantRequest: MessageFns<ActivateProjectGrantRequest>;
export declare const ActivateProjectGrantResponse: MessageFns<ActivateProjectGrantResponse>;
export declare const ListProjectGrantsRequest: MessageFns<ListProjectGrantsRequest>;
export declare const ListProjectGrantsResponse: MessageFns<ListProjectGrantsResponse>;
/** Service to manage projects. */
export type ProjectServiceDefinition = typeof ProjectServiceDefinition;
export declare const ProjectServiceDefinition: {
    readonly name: "ProjectService";
    readonly fullName: "zitadel.project.v2beta.ProjectService";
    readonly methods: {
        /**
         * Create Project
         *
         * Create a new Project.
         *
         * Required permission:
         *   - `project.create`
         */
        readonly createProject: {
            readonly name: "CreateProject";
            readonly requestType: MessageFns<CreateProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateProjectResponse>;
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
         * Update Project
         *
         * Update an existing project.
         *
         * Required permission:
         *   - `project.write`
         */
        readonly updateProject: {
            readonly name: "UpdateProject";
            readonly requestType: MessageFns<UpdateProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateProjectResponse>;
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
         * Delete Project
         *
         * Delete an existing project.
         * In case the project is not found, the request will return a successful response as
         * the desired state is already achieved.
         *
         * Required permission:
         *   - `project.delete`
         */
        readonly deleteProject: {
            readonly name: "DeleteProject";
            readonly requestType: MessageFns<DeleteProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteProjectResponse>;
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
         * Get Project
         *
         * Returns the project identified by the requested ID.
         *
         * Required permission:
         *   - `project.read`
         */
        readonly getProject: {
            readonly name: "GetProject";
            readonly requestType: MessageFns<GetProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetProjectResponse>;
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
         * List Projects
         *
         * List all matching projects. By default all projects of the instance that the caller has permission to read are returned.
         * Make sure to include a limit and sorting for pagination.
         *
         * Required permission:
         *   - `project.read`
         */
        readonly listProjects: {
            readonly name: "ListProjects";
            readonly requestType: MessageFns<ListProjectsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectsResponse>;
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
         * Deactivate Project
         *
         * Set the state of a project to deactivated. Request returns no error if the project is already deactivated.
         * Applications under deactivated projects are not able to login anymore.
         *
         * Required permission:
         *   - `project.write`
         */
        readonly deactivateProject: {
            readonly name: "DeactivateProject";
            readonly requestType: MessageFns<DeactivateProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateProjectResponse>;
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
         * Activate Project
         *
         * Set the state of a project to active. Request returns no error if the project is already activated.
         *
         * Required permission:
         *   - `project.write`
         */
        readonly activateProject: {
            readonly name: "ActivateProject";
            readonly requestType: MessageFns<ActivateProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateProjectResponse>;
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
         * Add Project Role
         *
         * Add a new project role to a project. The key must be unique within the project.
         *
         * Required permission:
         *   - `project.role.write`
         */
        readonly addProjectRole: {
            readonly name: "AddProjectRole";
            readonly requestType: MessageFns<AddProjectRoleRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddProjectRoleResponse>;
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
         * Update Project Role
         *
         * Change a project role. The key is not editable. If a key should change, remove the role and create a new one.
         *
         * Required permission:
         *   - `project.role.write`
         */
        readonly updateProjectRole: {
            readonly name: "UpdateProjectRole";
            readonly requestType: MessageFns<UpdateProjectRoleRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateProjectRoleResponse>;
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
         * Remove Project Role
         *
         * Removes the role from the project and on every resource it has a dependency. This includes project grants and user grants.
         *
         * Required permission:
         *   - `project.role.write`
         */
        readonly removeProjectRole: {
            readonly name: "RemoveProjectRole";
            readonly requestType: MessageFns<RemoveProjectRoleRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveProjectRoleResponse>;
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
         * List Project Roles
         *
         * Returns all roles of a project matching the search query.
         *
         * Required permission:
         *   - `project.role.read`
         */
        readonly listProjectRoles: {
            readonly name: "ListProjectRoles";
            readonly requestType: MessageFns<ListProjectRolesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectRolesResponse>;
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
         * Create Project Grant
         *
         * Grant a project to another organization.
         * The project grant will allow the granted organization to access the project and manage the authorizations for its users.
         *
         * Required permission:
         *   - `project.grant.create`
         */
        readonly createProjectGrant: {
            readonly name: "CreateProjectGrant";
            readonly requestType: MessageFns<CreateProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateProjectGrantResponse>;
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
         * Update Project Grant
         *
         * Change the roles of the project that is granted to another organization.
         * The project grant will allow the granted organization to access the project and manage the authorizations for its users.
         *
         * Required permission:
         *   - `project.grant.write`
         */
        readonly updateProjectGrant: {
            readonly name: "UpdateProjectGrant";
            readonly requestType: MessageFns<UpdateProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateProjectGrantResponse>;
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
         * Delete Project Grant
         *
         * Delete a project grant. All user grants for this project grant will also be removed.
         * A user will not have access to the project afterward (if permissions are checked).
         * In case the project grant is not found, the request will return a successful response as
         * the desired state is already achieved.
         *
         * Required permission:
         *   - `project.grant.delete`
         */
        readonly deleteProjectGrant: {
            readonly name: "DeleteProjectGrant";
            readonly requestType: MessageFns<DeleteProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteProjectGrantResponse>;
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
         * Deactivate Project Grant
         *
         * Set the state of the project grant to deactivated.
         * Applications under deactivated projects grants are not able to login anymore.
         *
         * Required permission:
         *   - `project.grant.write`
         */
        readonly deactivateProjectGrant: {
            readonly name: "DeactivateProjectGrant";
            readonly requestType: MessageFns<DeactivateProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateProjectGrantResponse>;
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
         * Activate Project Grant
         *
         * Set the state of the project grant to activated.
         *
         * Required permission:
         *   - `project.grant.write`
         */
        readonly activateProjectGrant: {
            readonly name: "ActivateProjectGrant";
            readonly requestType: MessageFns<ActivateProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateProjectGrantResponse>;
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
         * List Project Grants
         *
         * Returns a list of project grants. A project grant is when the organization grants its project to another organization.
         *
         * Required permission:
         *   - `project.grant.read`
         */
        readonly listProjectGrants: {
            readonly name: "ListProjectGrants";
            readonly requestType: MessageFns<ListProjectGrantsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectGrantsResponse>;
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
export interface ProjectServiceImplementation<CallContextExt = {}> {
    /**
     * Create Project
     *
     * Create a new Project.
     *
     * Required permission:
     *   - `project.create`
     */
    createProject(request: CreateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateProjectResponse>>;
    /**
     * Update Project
     *
     * Update an existing project.
     *
     * Required permission:
     *   - `project.write`
     */
    updateProject(request: UpdateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectResponse>>;
    /**
     * Delete Project
     *
     * Delete an existing project.
     * In case the project is not found, the request will return a successful response as
     * the desired state is already achieved.
     *
     * Required permission:
     *   - `project.delete`
     */
    deleteProject(request: DeleteProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteProjectResponse>>;
    /**
     * Get Project
     *
     * Returns the project identified by the requested ID.
     *
     * Required permission:
     *   - `project.read`
     */
    getProject(request: GetProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetProjectResponse>>;
    /**
     * List Projects
     *
     * List all matching projects. By default all projects of the instance that the caller has permission to read are returned.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - `project.read`
     */
    listProjects(request: ListProjectsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectsResponse>>;
    /**
     * Deactivate Project
     *
     * Set the state of a project to deactivated. Request returns no error if the project is already deactivated.
     * Applications under deactivated projects are not able to login anymore.
     *
     * Required permission:
     *   - `project.write`
     */
    deactivateProject(request: DeactivateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateProjectResponse>>;
    /**
     * Activate Project
     *
     * Set the state of a project to active. Request returns no error if the project is already activated.
     *
     * Required permission:
     *   - `project.write`
     */
    activateProject(request: ActivateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateProjectResponse>>;
    /**
     * Add Project Role
     *
     * Add a new project role to a project. The key must be unique within the project.
     *
     * Required permission:
     *   - `project.role.write`
     */
    addProjectRole(request: AddProjectRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectRoleResponse>>;
    /**
     * Update Project Role
     *
     * Change a project role. The key is not editable. If a key should change, remove the role and create a new one.
     *
     * Required permission:
     *   - `project.role.write`
     */
    updateProjectRole(request: UpdateProjectRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectRoleResponse>>;
    /**
     * Remove Project Role
     *
     * Removes the role from the project and on every resource it has a dependency. This includes project grants and user grants.
     *
     * Required permission:
     *   - `project.role.write`
     */
    removeProjectRole(request: RemoveProjectRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectRoleResponse>>;
    /**
     * List Project Roles
     *
     * Returns all roles of a project matching the search query.
     *
     * Required permission:
     *   - `project.role.read`
     */
    listProjectRoles(request: ListProjectRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectRolesResponse>>;
    /**
     * Create Project Grant
     *
     * Grant a project to another organization.
     * The project grant will allow the granted organization to access the project and manage the authorizations for its users.
     *
     * Required permission:
     *   - `project.grant.create`
     */
    createProjectGrant(request: CreateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateProjectGrantResponse>>;
    /**
     * Update Project Grant
     *
     * Change the roles of the project that is granted to another organization.
     * The project grant will allow the granted organization to access the project and manage the authorizations for its users.
     *
     * Required permission:
     *   - `project.grant.write`
     */
    updateProjectGrant(request: UpdateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectGrantResponse>>;
    /**
     * Delete Project Grant
     *
     * Delete a project grant. All user grants for this project grant will also be removed.
     * A user will not have access to the project afterward (if permissions are checked).
     * In case the project grant is not found, the request will return a successful response as
     * the desired state is already achieved.
     *
     * Required permission:
     *   - `project.grant.delete`
     */
    deleteProjectGrant(request: DeleteProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteProjectGrantResponse>>;
    /**
     * Deactivate Project Grant
     *
     * Set the state of the project grant to deactivated.
     * Applications under deactivated projects grants are not able to login anymore.
     *
     * Required permission:
     *   - `project.grant.write`
     */
    deactivateProjectGrant(request: DeactivateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateProjectGrantResponse>>;
    /**
     * Activate Project Grant
     *
     * Set the state of the project grant to activated.
     *
     * Required permission:
     *   - `project.grant.write`
     */
    activateProjectGrant(request: ActivateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateProjectGrantResponse>>;
    /**
     * List Project Grants
     *
     * Returns a list of project grants. A project grant is when the organization grants its project to another organization.
     *
     * Required permission:
     *   - `project.grant.read`
     */
    listProjectGrants(request: ListProjectGrantsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectGrantsResponse>>;
}
export interface ProjectServiceClient<CallOptionsExt = {}> {
    /**
     * Create Project
     *
     * Create a new Project.
     *
     * Required permission:
     *   - `project.create`
     */
    createProject(request: DeepPartial<CreateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateProjectResponse>;
    /**
     * Update Project
     *
     * Update an existing project.
     *
     * Required permission:
     *   - `project.write`
     */
    updateProject(request: DeepPartial<UpdateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectResponse>;
    /**
     * Delete Project
     *
     * Delete an existing project.
     * In case the project is not found, the request will return a successful response as
     * the desired state is already achieved.
     *
     * Required permission:
     *   - `project.delete`
     */
    deleteProject(request: DeepPartial<DeleteProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteProjectResponse>;
    /**
     * Get Project
     *
     * Returns the project identified by the requested ID.
     *
     * Required permission:
     *   - `project.read`
     */
    getProject(request: DeepPartial<GetProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<GetProjectResponse>;
    /**
     * List Projects
     *
     * List all matching projects. By default all projects of the instance that the caller has permission to read are returned.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - `project.read`
     */
    listProjects(request: DeepPartial<ListProjectsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectsResponse>;
    /**
     * Deactivate Project
     *
     * Set the state of a project to deactivated. Request returns no error if the project is already deactivated.
     * Applications under deactivated projects are not able to login anymore.
     *
     * Required permission:
     *   - `project.write`
     */
    deactivateProject(request: DeepPartial<DeactivateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateProjectResponse>;
    /**
     * Activate Project
     *
     * Set the state of a project to active. Request returns no error if the project is already activated.
     *
     * Required permission:
     *   - `project.write`
     */
    activateProject(request: DeepPartial<ActivateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateProjectResponse>;
    /**
     * Add Project Role
     *
     * Add a new project role to a project. The key must be unique within the project.
     *
     * Required permission:
     *   - `project.role.write`
     */
    addProjectRole(request: DeepPartial<AddProjectRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectRoleResponse>;
    /**
     * Update Project Role
     *
     * Change a project role. The key is not editable. If a key should change, remove the role and create a new one.
     *
     * Required permission:
     *   - `project.role.write`
     */
    updateProjectRole(request: DeepPartial<UpdateProjectRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectRoleResponse>;
    /**
     * Remove Project Role
     *
     * Removes the role from the project and on every resource it has a dependency. This includes project grants and user grants.
     *
     * Required permission:
     *   - `project.role.write`
     */
    removeProjectRole(request: DeepPartial<RemoveProjectRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectRoleResponse>;
    /**
     * List Project Roles
     *
     * Returns all roles of a project matching the search query.
     *
     * Required permission:
     *   - `project.role.read`
     */
    listProjectRoles(request: DeepPartial<ListProjectRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectRolesResponse>;
    /**
     * Create Project Grant
     *
     * Grant a project to another organization.
     * The project grant will allow the granted organization to access the project and manage the authorizations for its users.
     *
     * Required permission:
     *   - `project.grant.create`
     */
    createProjectGrant(request: DeepPartial<CreateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateProjectGrantResponse>;
    /**
     * Update Project Grant
     *
     * Change the roles of the project that is granted to another organization.
     * The project grant will allow the granted organization to access the project and manage the authorizations for its users.
     *
     * Required permission:
     *   - `project.grant.write`
     */
    updateProjectGrant(request: DeepPartial<UpdateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectGrantResponse>;
    /**
     * Delete Project Grant
     *
     * Delete a project grant. All user grants for this project grant will also be removed.
     * A user will not have access to the project afterward (if permissions are checked).
     * In case the project grant is not found, the request will return a successful response as
     * the desired state is already achieved.
     *
     * Required permission:
     *   - `project.grant.delete`
     */
    deleteProjectGrant(request: DeepPartial<DeleteProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteProjectGrantResponse>;
    /**
     * Deactivate Project Grant
     *
     * Set the state of the project grant to deactivated.
     * Applications under deactivated projects grants are not able to login anymore.
     *
     * Required permission:
     *   - `project.grant.write`
     */
    deactivateProjectGrant(request: DeepPartial<DeactivateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateProjectGrantResponse>;
    /**
     * Activate Project Grant
     *
     * Set the state of the project grant to activated.
     *
     * Required permission:
     *   - `project.grant.write`
     */
    activateProjectGrant(request: DeepPartial<ActivateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateProjectGrantResponse>;
    /**
     * List Project Grants
     *
     * Returns a list of project grants. A project grant is when the organization grants its project to another organization.
     *
     * Required permission:
     *   - `project.grant.read`
     */
    listProjectGrants(request: DeepPartial<ListProjectGrantsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectGrantsResponse>;
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
