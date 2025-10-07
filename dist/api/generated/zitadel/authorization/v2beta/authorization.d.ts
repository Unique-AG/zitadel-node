import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { IDFilter, InIDsFilter, TextFilterMethod } from "../../filter/v2beta/filter.js";
export declare const protobufPackage = "zitadel.authorization.v2beta";
export declare enum State {
    STATE_UNSPECIFIED = 0,
    /** STATE_ACTIVE - An active authorization grants the user access with the roles specified on the project. */
    STATE_ACTIVE = 1,
    /**
     * STATE_INACTIVE - An inactive authorization temporarily deactivates the granted access and roles.
     * ZITADEL will not include the specific authorization in any authorization information like an access token.
     * But the information can still be accessed using the API.
     */
    STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export declare enum AuthorizationFieldName {
    AUTHORIZATION_FIELD_NAME_UNSPECIFIED = 0,
    AUTHORIZATION_FIELD_NAME_CREATED_DATE = 1,
    AUTHORIZATION_FIELD_NAME_CHANGED_DATE = 2,
    AUTHORIZATION_FIELD_NAME_ID = 3,
    AUTHORIZATION_FIELD_NAME_USER_ID = 4,
    AUTHORIZATION_FIELD_NAME_PROJECT_ID = 5,
    AUTHORIZATION_FIELD_NAME_ORGANIZATION_ID = 6,
    AUTHORIZATION_FIELD_NAME_USER_ORGANIZATION_ID = 7,
    UNRECOGNIZED = -1
}
export declare function authorizationFieldNameFromJSON(object: any): AuthorizationFieldName;
export declare function authorizationFieldNameToJSON(object: AuthorizationFieldName): string;
export interface Authorization {
    /** ID is the unique identifier of the authorization. */
    id: string;
    /** ID is the unique identifier of the project the user was granted the authorization for. */
    projectId: string;
    /** Name is the name of the project the user was granted the authorization for. */
    projectName: string;
    /** OrganizationID is the ID of the organization the project belongs to. */
    projectOrganizationId: string;
    /** ID of the granted project, only provided if it is a granted project. */
    projectGrantId?: string | undefined;
    /** ID of the organization the project is granted to, only provided if it is a granted project. */
    grantedOrganizationId?: string | undefined;
    /** The unique identifier of the organization the authorization belongs to. */
    organizationId: string;
    /** CreationDate is the timestamp when the authorization was created. */
    creationDate: Date | undefined;
    /**
     * ChangeDate is the timestamp when the authorization was last updated.
     * In case the authorization was not updated, this field is equal to the creation date.
     */
    changeDate: Date | undefined;
    /** State is the current state of the authorization. */
    state: State;
    user: User | undefined;
    /** Roles contains the roles the user was granted for the project. */
    roles: string[];
}
export interface User {
    /** ID represents the ID of the user who was granted the authorization. */
    id: string;
    /** PreferredLoginName represents the preferred login name of the granted user. */
    preferredLoginName: string;
    /** DisplayName represents the public display name of the granted user. */
    displayName: string;
    /** AvatarURL is the URL to the user's public avatar image. */
    avatarUrl: string;
    /**
     * The organization the user belong to.
     * This does not have to correspond with the authorizations organization.
     */
    organizationId: string;
}
export interface AuthorizationsSearchFilter {
    /** Search for authorizations by their IDs. */
    authorizationIds?: InIDsFilter | undefined;
    /** Search for an organizations authorizations by its ID. */
    organizationId?: IDFilter | undefined;
    /** Search for authorizations by their state. */
    state?: StateQuery | undefined;
    /** Search for authorizations by the ID of the user who was granted the authorization. */
    userId?: IDFilter | undefined;
    /** Search for authorizations by the ID of the organisation the user is part of. */
    userOrganizationId?: IDFilter | undefined;
    /** Search for authorizations by the preferred login name of the granted user. */
    userPreferredLoginName?: UserPreferredLoginNameQuery | undefined;
    /** Search for authorizations by the public display name of the granted user. */
    userDisplayName?: UserDisplayNameQuery | undefined;
    /**
     * Search for authorizations by the ID of the project the user was granted the authorization for.
     * This will also include authorizations granted for project grants of the same project.
     */
    projectId?: IDFilter | undefined;
    /**
     * Search for authorizations by the name of the project the user was granted the authorization for.
     * This will also include authorizations granted for project grants of the same project.
     */
    projectName?: ProjectNameQuery | undefined;
    /** Search for authorizations by the key of the role the user was granted. */
    roleKey?: RoleKeyQuery | undefined;
    /**
     * Search for authorizations by the ID of the project grant the user was granted the authorization for.
     * This will also include authorizations granted for project grants of the same project.
     */
    projectGrantId?: IDFilter | undefined;
    /** Search for authorizations by the IDs of the users who were granted the authorizations. */
    inUserIds?: InIDsFilter | undefined;
}
export interface StateQuery {
    /** Specify the state of the authorization to search for. */
    state: State;
}
export interface UserPreferredLoginNameQuery {
    /** Specify the preferred login name of the granted user to search for. */
    loginName: string;
    /**
     * Specify the method to search for the preferred login name. Default is EQUAL.
     * For example, to search for all authorizations granted to a user with
     * a preferred login name containing a specific string, use CONTAINS or CONTAINS_IGNORE_CASE.
     */
    method: TextFilterMethod;
}
export interface UserDisplayNameQuery {
    /** Specify the public display name of the granted user to search for. */
    displayName: string;
    /**
     * Specify the method to search for the display name. Default is EQUAL.
     * For example, to search for all authorizations granted to a user with
     * a display name containing a specific string, use CONTAINS or CONTAINS_IGNORE_CASE.
     */
    method: TextFilterMethod;
}
export interface ProjectNameQuery {
    /**
     * Specify the name of the project the user was granted the authorization for to search for.
     * Note that this will also include authorizations granted for project grants of the same project.
     */
    name: string;
    /**
     * Specify the method to search for the project name. Default is EQUAL.
     * For example, to search for all authorizations granted on a project with
     * a name containing a specific string, use CONTAINS or CONTAINS_IGNORE_CASE.
     */
    method: TextFilterMethod;
}
export interface OrganizationNameQuery {
    /**
     * Specify the name of the organization the authorization was granted for to search for.
     * This can either be the organization the project or the project grant is part of.
     */
    name: string;
    /**
     * Specify the method to search for the organization name. Default is EQUAL.
     * For example, to search for all authorizations with an organization name containing a specific string,
     * use CONTAINS or CONTAINS_IGNORE_CASE.
     */
    method: TextFilterMethod;
}
export interface RoleKeyQuery {
    /** Specify the key of the role the user was granted to search for. */
    key: string;
    /**
     * Specify the method to search for the role key. Default is EQUAL.
     * For example, to search for all authorizations starting with a specific role key,
     * use STARTS_WITH or STARTS_WITH_IGNORE_CASE.
     */
    method: TextFilterMethod;
}
export declare const Authorization: MessageFns<Authorization>;
export declare const User: MessageFns<User>;
export declare const AuthorizationsSearchFilter: MessageFns<AuthorizationsSearchFilter>;
export declare const StateQuery: MessageFns<StateQuery>;
export declare const UserPreferredLoginNameQuery: MessageFns<UserPreferredLoginNameQuery>;
export declare const UserDisplayNameQuery: MessageFns<UserDisplayNameQuery>;
export declare const ProjectNameQuery: MessageFns<ProjectNameQuery>;
export declare const OrganizationNameQuery: MessageFns<OrganizationNameQuery>;
export declare const RoleKeyQuery: MessageFns<RoleKeyQuery>;
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
