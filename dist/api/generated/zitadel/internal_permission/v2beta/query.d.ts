import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { IDFilter, InIDsFilter, TextFilterMethod, TimestampFilter } from "../../filter/v2beta/filter.js";
export declare const protobufPackage = "zitadel.internal_permission.v2beta";
export declare enum AdministratorFieldName {
    ADMINISTRATOR_FIELD_NAME_UNSPECIFIED = 0,
    ADMINISTRATOR_FIELD_NAME_USER_ID = 1,
    ADMINISTRATOR_FIELD_NAME_CREATION_DATE = 2,
    ADMINISTRATOR_FIELD_NAME_CHANGE_DATE = 3,
    UNRECOGNIZED = -1
}
export declare function administratorFieldNameFromJSON(object: any): AdministratorFieldName;
export declare function administratorFieldNameToJSON(object: AdministratorFieldName): string;
export interface Administrator {
    /** CreationDate is the timestamp when the administrator role was granted. */
    creationDate: Date | undefined;
    /**
     * ChangeDate is the timestamp when the administrator role was last updated.
     * In case the administrator role was not updated, this field is equal to the creation date.
     */
    changeDate: Date | undefined;
    /** User is the user who was granted the administrator role. */
    user: User | undefined;
    /** Instance is returned if the administrator roles were granted on the instance level. */
    instance?: boolean | undefined;
    /** Organization provides information about the organization the administrator roles were granted for. */
    organization?: Organization | undefined;
    /** Project provides information about the project the administrator roles were granted for. */
    project?: Project | undefined;
    /** ProjectGrant provides information about the project grant the administrator roles were granted for. */
    projectGrant?: ProjectGrant | undefined;
    /** Roles are the roles that were granted to the user for the specified resource. */
    roles: string[];
}
export interface User {
    /** ID is the unique identifier of the user. */
    id: string;
    /** PreferredLoginName is the preferred login name of the user. This value is unique across the whole instance. */
    preferredLoginName: string;
    /**
     * DisplayName is the public display name of the user.
     * By default it's the user's given name and family name, their username or their email address.
     */
    displayName: string;
    /** The organization the user belong to. */
    organizationId: string;
}
export interface Organization {
    /** ID is the unique identifier of the organization the user was granted the administrator role for. */
    id: string;
    /** Name is the name of the organization the user was granted the administrator role for. */
    name: string;
}
export interface Project {
    /** ID is the unique identifier of the project the user was granted the administrator role for. */
    id: string;
    /** Name is the name of the project the user was granted the administrator role for. */
    name: string;
    /** OrganizationID is the ID of the organization the project belongs to. */
    organizationId: string;
}
export interface ProjectGrant {
    /** ID is the unique identifier of the project grant the user was granted the administrator role for. */
    id: string;
    /** ProjectID is the ID of the project the project grant belongs to. */
    projectId: string;
    /** ProjectName is the name of the project the project grant belongs to. */
    projectName: string;
    /** OrganizationID is the ID of the organization the project grant belongs to. */
    organizationId: string;
    /** OrganizationID is the ID of the organization the project grant belongs to. */
    grantedOrganizationId: string;
}
export interface AdministratorSearchFilter {
    /** Search for administrator roles by their creation date. */
    creationDate?: TimestampFilter | undefined;
    /** Search for administrator roles by their change date. */
    changeDate?: TimestampFilter | undefined;
    /** Search for administrators roles by the IDs of the users who was granted the administrator role. */
    inUserIdsFilter?: InIDsFilter | undefined;
    /** Search for administrators roles by the ID of the organization the user is part of. */
    userOrganizationId?: IDFilter | undefined;
    /** Search for administrators roles by the preferred login name of the user. */
    userPreferredLoginName?: UserPreferredLoginNameFilter | undefined;
    /** Search for administrators roles by the display name of the user. */
    userDisplayName?: UserDisplayNameFilter | undefined;
    /** Search for administrators roles granted for a specific resource. */
    resource?: ResourceFilter | undefined;
    /** Search for administrators roles granted with a specific role. */
    role?: RoleFilter | undefined;
    /** Combine multiple authorization queries with an AND operation. */
    and?: AndFilter | undefined;
    /**
     * Combine multiple authorization queries with an OR operation.
     * For example, to search for authorizations of multiple OrganizationIDs.
     */
    or?: OrFilter | undefined;
    /** Negate an authorization query. */
    not?: NotFilter | undefined;
}
export interface UserPreferredLoginNameFilter {
    /** Search for administrators by the preferred login name of the user. */
    preferredLoginName: string;
    /**
     * Specify the method to search for the preferred login name. Default is EQUAL.
     * For example, to search for all administrator roles of a user with a preferred login name
     * containing a specific string, use CONTAINS or CONTAINS_IGNORE_CASE.
     */
    method: TextFilterMethod;
}
export interface UserDisplayNameFilter {
    /** Search for administrators by the display name of the user. */
    displayName: string;
    /**
     * Specify the method to search for the display name. Default is EQUAL.
     * For example, to search for all administrator roles of a user with a display name
     * containing a specific string, use CONTAINS or CONTAINS_IGNORE_CASE.
     */
    method: TextFilterMethod;
}
export interface ResourceFilter {
    /** Search for administrators granted on the instance level. */
    instance?: boolean | undefined;
    /** Search for administrators granted on a specific organization. */
    organizationId?: string | undefined;
    /** Search for administrators granted on a specific project. */
    projectId?: string | undefined;
    /** Search for administrators granted on a specific project grant. */
    projectGrantId?: string | undefined;
}
export interface RoleFilter {
    /** Search for administrators by the granted role. */
    roleKey: string;
}
export interface AndFilter {
    queries: AdministratorSearchFilter[];
}
export interface OrFilter {
    queries: AdministratorSearchFilter[];
}
export interface NotFilter {
    query: AdministratorSearchFilter | undefined;
}
export declare const Administrator: MessageFns<Administrator>;
export declare const User: MessageFns<User>;
export declare const Organization: MessageFns<Organization>;
export declare const Project: MessageFns<Project>;
export declare const ProjectGrant: MessageFns<ProjectGrant>;
export declare const AdministratorSearchFilter: MessageFns<AdministratorSearchFilter>;
export declare const UserPreferredLoginNameFilter: MessageFns<UserPreferredLoginNameFilter>;
export declare const UserDisplayNameFilter: MessageFns<UserDisplayNameFilter>;
export declare const ResourceFilter: MessageFns<ResourceFilter>;
export declare const RoleFilter: MessageFns<RoleFilter>;
export declare const AndFilter: MessageFns<AndFilter>;
export declare const OrFilter: MessageFns<OrFilter>;
export declare const NotFilter: MessageFns<NotFilter>;
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
