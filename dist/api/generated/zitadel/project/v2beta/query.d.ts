import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { IDFilter, InIDsFilter, TextFilterMethod } from "../../filter/v2beta/filter.js";
export declare const protobufPackage = "zitadel.project.v2beta";
export declare enum ProjectGrantState {
    PROJECT_GRANT_STATE_UNSPECIFIED = 0,
    PROJECT_GRANT_STATE_ACTIVE = 1,
    PROJECT_GRANT_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function projectGrantStateFromJSON(object: any): ProjectGrantState;
export declare function projectGrantStateToJSON(object: ProjectGrantState): string;
export declare enum ProjectState {
    PROJECT_STATE_UNSPECIFIED = 0,
    PROJECT_STATE_ACTIVE = 1,
    PROJECT_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function projectStateFromJSON(object: any): ProjectState;
export declare function projectStateToJSON(object: ProjectState): string;
export declare enum GrantedProjectState {
    GRANTED_PROJECT_STATE_UNSPECIFIED = 0,
    GRANTED_PROJECT_STATE_ACTIVE = 1,
    GRANTED_PROJECT_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function grantedProjectStateFromJSON(object: any): GrantedProjectState;
export declare function grantedProjectStateToJSON(object: GrantedProjectState): string;
export declare enum PrivateLabelingSetting {
    PRIVATE_LABELING_SETTING_UNSPECIFIED = 0,
    PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY = 1,
    PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY = 2,
    UNRECOGNIZED = -1
}
export declare function privateLabelingSettingFromJSON(object: any): PrivateLabelingSetting;
export declare function privateLabelingSettingToJSON(object: PrivateLabelingSetting): string;
export declare enum ProjectFieldName {
    PROJECT_FIELD_NAME_UNSPECIFIED = 0,
    PROJECT_FIELD_NAME_ID = 1,
    PROJECT_FIELD_NAME_CREATION_DATE = 2,
    PROJECT_FIELD_NAME_CHANGE_DATE = 3,
    PROJECT_FIELD_NAME_NAME = 4,
    UNRECOGNIZED = -1
}
export declare function projectFieldNameFromJSON(object: any): ProjectFieldName;
export declare function projectFieldNameToJSON(object: ProjectFieldName): string;
export declare enum ProjectGrantFieldName {
    PROJECT_GRANT_FIELD_NAME_UNSPECIFIED = 0,
    PROJECT_GRANT_FIELD_NAME_PROJECT_ID = 1,
    PROJECT_GRANT_FIELD_NAME_CREATION_DATE = 2,
    PROJECT_GRANT_FIELD_NAME_CHANGE_DATE = 3,
    UNRECOGNIZED = -1
}
export declare function projectGrantFieldNameFromJSON(object: any): ProjectGrantFieldName;
export declare function projectGrantFieldNameToJSON(object: ProjectGrantFieldName): string;
export declare enum ProjectRoleFieldName {
    PROJECT_ROLE_FIELD_NAME_UNSPECIFIED = 0,
    PROJECT_ROLE_FIELD_NAME_KEY = 1,
    PROJECT_ROLE_FIELD_NAME_CREATION_DATE = 2,
    PROJECT_ROLE_FIELD_NAME_CHANGE_DATE = 3,
    UNRECOGNIZED = -1
}
export declare function projectRoleFieldNameFromJSON(object: any): ProjectRoleFieldName;
export declare function projectRoleFieldNameToJSON(object: ProjectRoleFieldName): string;
export interface ProjectGrant {
    /** The unique identifier of the organization which granted the project to the granted_organization_id. */
    organizationId: string;
    /** The timestamp of the granted project creation. */
    creationDate: Date | undefined;
    /** The timestamp of the last change to the granted project (e.g. creation, activation, deactivation). */
    changeDate: Date | undefined;
    /** The ID of the organization the project is granted to. */
    grantedOrganizationId: string;
    /** The name of the organization the project is granted to. */
    grantedOrganizationName: string;
    /** The roles of the granted project. */
    grantedRoleKeys: string[];
    /** The ID of the granted project. */
    projectId: string;
    /** The name of the granted project. */
    projectName: string;
    /** Describes the current state of the granted project. */
    state: ProjectGrantState;
}
export interface Project {
    /** The unique identifier of the project. */
    id: string;
    /** The unique identifier of the organization the project belongs to. */
    organizationId: string;
    /** The timestamp of the project creation. */
    creationDate: Date | undefined;
    /** The timestamp of the last change to the project (e.g. creation, activation, deactivation). */
    changeDate: Date | undefined;
    /** The name of the project. */
    name: string;
    /** Describes the current state of the project. */
    state: ProjectState;
    /** Describes if the roles of the user should be added to the token. */
    projectRoleAssertion: boolean;
    /** When enabled ZITADEL will check if a user has an authorization to use this project assigned when login into an application of this project. */
    authorizationRequired: boolean;
    /** When enabled ZITADEL will check if the organization of the user, that is trying to log in, has access to this project (either owns the project or is granted). */
    projectAccessRequired: boolean;
    /** Defines from where the private labeling should be triggered. */
    privateLabelingSetting: PrivateLabelingSetting;
    /** The ID of the organization the project is granted to. */
    grantedOrganizationId?: string | undefined;
    /** The name of the organization the project is granted to. */
    grantedOrganizationName?: string | undefined;
    /** Describes the current state of the granted project. */
    grantedState: GrantedProjectState;
}
export interface ProjectSearchFilter {
    projectNameFilter?: ProjectNameFilter | undefined;
    inProjectIdsFilter?: InIDsFilter | undefined;
    projectResourceOwnerFilter?: IDFilter | undefined;
    projectGrantResourceOwnerFilter?: IDFilter | undefined;
    projectOrganizationIdFilter?: IDFilter | undefined;
}
export interface ProjectNameFilter {
    /** Defines the name of the project to query for. */
    projectName: string;
    /** Defines which text comparison method used for the name query. */
    method: TextFilterMethod;
}
export interface ProjectGrantSearchFilter {
    projectNameFilter?: ProjectNameFilter | undefined;
    roleKeyFilter?: ProjectRoleKeyFilter | undefined;
    inProjectIdsFilter?: InIDsFilter | undefined;
    projectResourceOwnerFilter?: IDFilter | undefined;
    projectGrantResourceOwnerFilter?: IDFilter | undefined;
}
export interface ProjectRole {
    /** ID of the project. */
    projectId: string;
    /** Key of the project role. */
    key: string;
    /** The timestamp of the project role creation. */
    creationDate: Date | undefined;
    /** The timestamp of the last change to the project role. */
    changeDate: Date | undefined;
    /** Display name of the project role. */
    displayName: string;
    /** Group of the project role. */
    group: string;
}
export interface ProjectRoleSearchFilter {
    roleKeyFilter?: ProjectRoleKeyFilter | undefined;
    displayNameFilter?: ProjectRoleDisplayNameFilter | undefined;
}
export interface ProjectRoleKeyFilter {
    key: string;
    /** Defines which text comparison method used for the name query. */
    method: TextFilterMethod;
}
export interface ProjectRoleDisplayNameFilter {
    displayName: string;
    /** Defines which text comparison method used for the name query. */
    method: TextFilterMethod;
}
export declare const ProjectGrant: MessageFns<ProjectGrant>;
export declare const Project: MessageFns<Project>;
export declare const ProjectSearchFilter: MessageFns<ProjectSearchFilter>;
export declare const ProjectNameFilter: MessageFns<ProjectNameFilter>;
export declare const ProjectGrantSearchFilter: MessageFns<ProjectGrantSearchFilter>;
export declare const ProjectRole: MessageFns<ProjectRole>;
export declare const ProjectRoleSearchFilter: MessageFns<ProjectRoleSearchFilter>;
export declare const ProjectRoleKeyFilter: MessageFns<ProjectRoleKeyFilter>;
export declare const ProjectRoleDisplayNameFilter: MessageFns<ProjectRoleDisplayNameFilter>;
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
