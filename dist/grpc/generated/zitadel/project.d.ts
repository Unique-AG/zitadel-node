import Long from "long";
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";
export declare const protobufPackage = "zitadel.project.v1";
export declare enum ProjectState {
    PROJECT_STATE_UNSPECIFIED = 0,
    PROJECT_STATE_ACTIVE = 1,
    PROJECT_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function projectStateFromJSON(object: any): ProjectState;
export declare function projectStateToJSON(object: ProjectState): string;
export declare enum PrivateLabelingSetting {
    PRIVATE_LABELING_SETTING_UNSPECIFIED = 0,
    PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY = 1,
    PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY = 2,
    UNRECOGNIZED = -1
}
export declare function privateLabelingSettingFromJSON(object: any): PrivateLabelingSetting;
export declare function privateLabelingSettingToJSON(object: PrivateLabelingSetting): string;
export declare enum ProjectGrantState {
    PROJECT_GRANT_STATE_UNSPECIFIED = 0,
    PROJECT_GRANT_STATE_ACTIVE = 1,
    PROJECT_GRANT_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function projectGrantStateFromJSON(object: any): ProjectGrantState;
export declare function projectGrantStateToJSON(object: ProjectGrantState): string;
export interface Project {
    id: string;
    details: ObjectDetails | undefined;
    name: string;
    state: ProjectState;
    /** describes if the roles of the user should be added to the token */
    projectRoleAssertion: boolean;
    /** ZITADEL checks if the user has at least one on this project */
    projectRoleCheck: boolean;
    /** ZITADEL checks if the org of the user has permission for this project */
    hasProjectCheck: boolean;
    /** Defines from where the private labeling should be triggered */
    privateLabelingSetting: PrivateLabelingSetting;
}
export interface GrantedProject {
    grantId: string;
    grantedOrgId: string;
    grantedOrgName: string;
    grantedRoleKeys: string[];
    state: ProjectGrantState;
    projectId: string;
    projectName: string;
    projectOwnerId: string;
    projectOwnerName: string;
    details: ObjectDetails | undefined;
}
export interface ProjectQuery {
    nameQuery?: ProjectNameQuery | undefined;
    projectResourceOwnerQuery?: ProjectResourceOwnerQuery | undefined;
}
export interface ProjectNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface ProjectResourceOwnerQuery {
    resourceOwner: string;
}
export interface Role {
    key: string;
    details: ObjectDetails | undefined;
    displayName: string;
    group: string;
}
export interface RoleQuery {
    keyQuery?: RoleKeyQuery | undefined;
    displayNameQuery?: RoleDisplayNameQuery | undefined;
}
export interface RoleKeyQuery {
    key: string;
    method: TextQueryMethod;
}
export interface RoleDisplayNameQuery {
    displayName: string;
    method: TextQueryMethod;
}
export interface ProjectGrantQuery {
    projectNameQuery?: GrantProjectNameQuery | undefined;
    roleKeyQuery?: GrantRoleKeyQuery | undefined;
}
export interface AllProjectGrantQuery {
    projectNameQuery?: GrantProjectNameQuery | undefined;
    roleKeyQuery?: GrantRoleKeyQuery | undefined;
    projectIdQuery?: ProjectIDQuery | undefined;
    grantedOrgIdQuery?: GrantedOrgIDQuery | undefined;
}
export interface GrantProjectNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface GrantRoleKeyQuery {
    roleKey: string;
    method: TextQueryMethod;
}
export interface ProjectIDQuery {
    projectId: string;
}
export interface GrantedOrgIDQuery {
    grantedOrgId: string;
}
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    create(base?: DeepPartial<Project>): Project;
    fromPartial(object: DeepPartial<Project>): Project;
};
export declare const GrantedProject: {
    encode(message: GrantedProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantedProject;
    fromJSON(object: any): GrantedProject;
    toJSON(message: GrantedProject): unknown;
    create(base?: DeepPartial<GrantedProject>): GrantedProject;
    fromPartial(object: DeepPartial<GrantedProject>): GrantedProject;
};
export declare const ProjectQuery: {
    encode(message: ProjectQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectQuery;
    fromJSON(object: any): ProjectQuery;
    toJSON(message: ProjectQuery): unknown;
    create(base?: DeepPartial<ProjectQuery>): ProjectQuery;
    fromPartial(object: DeepPartial<ProjectQuery>): ProjectQuery;
};
export declare const ProjectNameQuery: {
    encode(message: ProjectNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectNameQuery;
    fromJSON(object: any): ProjectNameQuery;
    toJSON(message: ProjectNameQuery): unknown;
    create(base?: DeepPartial<ProjectNameQuery>): ProjectNameQuery;
    fromPartial(object: DeepPartial<ProjectNameQuery>): ProjectNameQuery;
};
export declare const ProjectResourceOwnerQuery: {
    encode(message: ProjectResourceOwnerQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectResourceOwnerQuery;
    fromJSON(object: any): ProjectResourceOwnerQuery;
    toJSON(message: ProjectResourceOwnerQuery): unknown;
    create(base?: DeepPartial<ProjectResourceOwnerQuery>): ProjectResourceOwnerQuery;
    fromPartial(object: DeepPartial<ProjectResourceOwnerQuery>): ProjectResourceOwnerQuery;
};
export declare const Role: {
    encode(message: Role, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Role;
    fromJSON(object: any): Role;
    toJSON(message: Role): unknown;
    create(base?: DeepPartial<Role>): Role;
    fromPartial(object: DeepPartial<Role>): Role;
};
export declare const RoleQuery: {
    encode(message: RoleQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoleQuery;
    fromJSON(object: any): RoleQuery;
    toJSON(message: RoleQuery): unknown;
    create(base?: DeepPartial<RoleQuery>): RoleQuery;
    fromPartial(object: DeepPartial<RoleQuery>): RoleQuery;
};
export declare const RoleKeyQuery: {
    encode(message: RoleKeyQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoleKeyQuery;
    fromJSON(object: any): RoleKeyQuery;
    toJSON(message: RoleKeyQuery): unknown;
    create(base?: DeepPartial<RoleKeyQuery>): RoleKeyQuery;
    fromPartial(object: DeepPartial<RoleKeyQuery>): RoleKeyQuery;
};
export declare const RoleDisplayNameQuery: {
    encode(message: RoleDisplayNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoleDisplayNameQuery;
    fromJSON(object: any): RoleDisplayNameQuery;
    toJSON(message: RoleDisplayNameQuery): unknown;
    create(base?: DeepPartial<RoleDisplayNameQuery>): RoleDisplayNameQuery;
    fromPartial(object: DeepPartial<RoleDisplayNameQuery>): RoleDisplayNameQuery;
};
export declare const ProjectGrantQuery: {
    encode(message: ProjectGrantQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectGrantQuery;
    fromJSON(object: any): ProjectGrantQuery;
    toJSON(message: ProjectGrantQuery): unknown;
    create(base?: DeepPartial<ProjectGrantQuery>): ProjectGrantQuery;
    fromPartial(object: DeepPartial<ProjectGrantQuery>): ProjectGrantQuery;
};
export declare const AllProjectGrantQuery: {
    encode(message: AllProjectGrantQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllProjectGrantQuery;
    fromJSON(object: any): AllProjectGrantQuery;
    toJSON(message: AllProjectGrantQuery): unknown;
    create(base?: DeepPartial<AllProjectGrantQuery>): AllProjectGrantQuery;
    fromPartial(object: DeepPartial<AllProjectGrantQuery>): AllProjectGrantQuery;
};
export declare const GrantProjectNameQuery: {
    encode(message: GrantProjectNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantProjectNameQuery;
    fromJSON(object: any): GrantProjectNameQuery;
    toJSON(message: GrantProjectNameQuery): unknown;
    create(base?: DeepPartial<GrantProjectNameQuery>): GrantProjectNameQuery;
    fromPartial(object: DeepPartial<GrantProjectNameQuery>): GrantProjectNameQuery;
};
export declare const GrantRoleKeyQuery: {
    encode(message: GrantRoleKeyQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantRoleKeyQuery;
    fromJSON(object: any): GrantRoleKeyQuery;
    toJSON(message: GrantRoleKeyQuery): unknown;
    create(base?: DeepPartial<GrantRoleKeyQuery>): GrantRoleKeyQuery;
    fromPartial(object: DeepPartial<GrantRoleKeyQuery>): GrantRoleKeyQuery;
};
export declare const ProjectIDQuery: {
    encode(message: ProjectIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectIDQuery;
    fromJSON(object: any): ProjectIDQuery;
    toJSON(message: ProjectIDQuery): unknown;
    create(base?: DeepPartial<ProjectIDQuery>): ProjectIDQuery;
    fromPartial(object: DeepPartial<ProjectIDQuery>): ProjectIDQuery;
};
export declare const GrantedOrgIDQuery: {
    encode(message: GrantedOrgIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantedOrgIDQuery;
    fromJSON(object: any): GrantedOrgIDQuery;
    toJSON(message: GrantedOrgIDQuery): unknown;
    create(base?: DeepPartial<GrantedOrgIDQuery>): GrantedOrgIDQuery;
    fromPartial(object: DeepPartial<GrantedOrgIDQuery>): GrantedOrgIDQuery;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
