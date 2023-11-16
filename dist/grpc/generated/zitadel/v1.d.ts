/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { KeyType } from "./auth_n_key";
import { IDPUserLink } from "./idp";
import { AddAPIAppRequest, AddCustomLabelPolicyRequest, AddCustomLockoutPolicyRequest, AddCustomLoginPolicyRequest, AddCustomPasswordComplexityPolicyRequest, AddCustomPrivacyPolicyRequest, AddIDPToLoginPolicyRequest, AddMachineUserRequest, AddMultiFactorToLoginPolicyRequest, AddOIDCAppRequest, AddOrgJWTIDPRequest, AddOrgMemberRequest, AddOrgOIDCIDPRequest, AddOrgRequest, AddProjectGrantMemberRequest, AddProjectGrantRequest, AddProjectMemberRequest, AddProjectRequest, AddProjectRoleRequest, AddSecondFactorToLoginPolicyRequest, AddUserGrantRequest, CreateActionRequest, ImportHumanUserRequest, SetCustomDomainClaimedMessageTextRequest, SetCustomInitMessageTextRequest, SetCustomLoginTextsRequest, SetCustomPasswordlessRegistrationMessageTextRequest, SetCustomPasswordResetMessageTextRequest, SetCustomVerifyEmailMessageTextRequest, SetCustomVerifyPhoneMessageTextRequest, SetUserMetadataRequest } from "./management";
import { Domain } from "./org";
import { Gender } from "./user";
export declare const protobufPackage = "zitadel.v1.v1";
export declare enum FlowType {
    FLOW_TYPE_UNSPECIFIED = 0,
    FLOW_TYPE_EXTERNAL_AUTHENTICATION = 1,
    UNRECOGNIZED = -1
}
export declare function flowTypeFromJSON(object: any): FlowType;
export declare function flowTypeToJSON(object: FlowType): string;
export declare enum TriggerType {
    TRIGGER_TYPE_UNSPECIFIED = 0,
    TRIGGER_TYPE_POST_AUTHENTICATION = 1,
    TRIGGER_TYPE_PRE_CREATION = 2,
    TRIGGER_TYPE_POST_CREATION = 3,
    UNRECOGNIZED = -1
}
export declare function triggerTypeFromJSON(object: any): TriggerType;
export declare function triggerTypeToJSON(object: TriggerType): string;
export interface AddCustomOrgIAMPolicyRequest {
    orgId: string;
    /** the username has to end with the domain of its organization (uniqueness is organization based) */
    userLoginMustBeDomain: boolean;
}
export interface ImportDataOrg {
    orgs: DataOrg[];
}
export interface DataOrg {
    orgId: string;
    org: AddOrgRequest | undefined;
    iamPolicy: AddCustomOrgIAMPolicyRequest | undefined;
    labelPolicy: AddCustomLabelPolicyRequest | undefined;
    lockoutPolicy: AddCustomLockoutPolicyRequest | undefined;
    loginPolicy: AddCustomLoginPolicyRequest | undefined;
    passwordComplexityPolicy: AddCustomPasswordComplexityPolicyRequest | undefined;
    privacyPolicy: AddCustomPrivacyPolicyRequest | undefined;
    projects: DataProject[];
    projectRoles: AddProjectRoleRequest[];
    apiApps: DataAPIApplication[];
    oidcApps: DataOIDCApplication[];
    humanUsers: DataHumanUser[];
    machineUsers: DataMachineUser[];
    triggerActions: SetTriggerActionsRequest[];
    actions: DataAction[];
    projectGrants: DataProjectGrant[];
    userGrants: AddUserGrantRequest[];
    orgMembers: AddOrgMemberRequest[];
    projectMembers: AddProjectMemberRequest[];
    projectGrantMembers: AddProjectGrantMemberRequest[];
    userMetadata: SetUserMetadataRequest[];
    loginTexts: SetCustomLoginTextsRequest[];
    initMessages: SetCustomInitMessageTextRequest[];
    passwordResetMessages: SetCustomPasswordResetMessageTextRequest[];
    verifyEmailMessages: SetCustomVerifyEmailMessageTextRequest[];
    verifyPhoneMessages: SetCustomVerifyPhoneMessageTextRequest[];
    domainClaimedMessages: SetCustomDomainClaimedMessageTextRequest[];
    passwordlessRegistrationMessages: SetCustomPasswordlessRegistrationMessageTextRequest[];
    oidcIdps: DataOIDCIDP[];
    jwtIdps: DataJWTIDP[];
    secondFactors: AddSecondFactorToLoginPolicyRequest[];
    multiFactors: AddMultiFactorToLoginPolicyRequest[];
    idps: AddIDPToLoginPolicyRequest[];
    userLinks: IDPUserLink[];
    domains: Domain[];
    appKeys: DataAppKey[];
    machineKeys: DataMachineKey[];
}
export interface DataOIDCIDP {
    idpId: string;
    idp: AddOrgOIDCIDPRequest | undefined;
}
export interface DataJWTIDP {
    idpId: string;
    idp: AddOrgJWTIDPRequest | undefined;
}
export interface ExportHumanUser {
    userName: string;
    profile: ExportHumanUser_Profile | undefined;
    email: ExportHumanUser_Email | undefined;
    phone: ExportHumanUser_Phone | undefined;
    password: string;
    hashedPassword: ExportHumanUser_HashedPassword | undefined;
    passwordChangeRequired: boolean;
    requestPasswordlessRegistration: boolean;
    otpCode: string;
}
export interface ExportHumanUser_Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface ExportHumanUser_Email {
    /** TODO: check if no value is allowed */
    email: string;
    isEmailVerified: boolean;
}
export interface ExportHumanUser_Phone {
    /** has to be a global number */
    phone: string;
    isPhoneVerified: boolean;
}
export interface ExportHumanUser_HashedPassword {
    value: string;
    algorithm: string;
}
export interface DataAppKey {
    id: string;
    projectId: string;
    appId: string;
    clientId: string;
    type: KeyType;
    expirationDate: Date | undefined;
    publicKey: Buffer;
}
export interface DataMachineKey {
    keyId: string;
    userId: string;
    type: KeyType;
    expirationDate: Date | undefined;
    publicKey: Buffer;
}
export interface DataProject {
    projectId: string;
    project: AddProjectRequest | undefined;
}
export interface DataAPIApplication {
    appId: string;
    app: AddAPIAppRequest | undefined;
}
export interface DataOIDCApplication {
    appId: string;
    app: AddOIDCAppRequest | undefined;
}
export interface DataHumanUser {
    userId: string;
    user: ImportHumanUserRequest | undefined;
}
export interface DataMachineUser {
    userId: string;
    user: AddMachineUserRequest | undefined;
}
export interface DataAction {
    actionId: string;
    action: CreateActionRequest | undefined;
}
export interface DataProjectGrant {
    grantId: string;
    projectGrant: AddProjectGrantRequest | undefined;
}
export interface SetTriggerActionsRequest {
    flowType: FlowType;
    triggerType: TriggerType;
    actionIds: string[];
}
export declare const AddCustomOrgIAMPolicyRequest: {
    encode(message: AddCustomOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomOrgIAMPolicyRequest;
    fromJSON(object: any): AddCustomOrgIAMPolicyRequest;
    toJSON(message: AddCustomOrgIAMPolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomOrgIAMPolicyRequest>): AddCustomOrgIAMPolicyRequest;
    fromPartial(object: DeepPartial<AddCustomOrgIAMPolicyRequest>): AddCustomOrgIAMPolicyRequest;
};
export declare const ImportDataOrg: {
    encode(message: ImportDataOrg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataOrg;
    fromJSON(object: any): ImportDataOrg;
    toJSON(message: ImportDataOrg): unknown;
    create(base?: DeepPartial<ImportDataOrg>): ImportDataOrg;
    fromPartial(object: DeepPartial<ImportDataOrg>): ImportDataOrg;
};
export declare const DataOrg: {
    encode(message: DataOrg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataOrg;
    fromJSON(object: any): DataOrg;
    toJSON(message: DataOrg): unknown;
    create(base?: DeepPartial<DataOrg>): DataOrg;
    fromPartial(object: DeepPartial<DataOrg>): DataOrg;
};
export declare const DataOIDCIDP: {
    encode(message: DataOIDCIDP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataOIDCIDP;
    fromJSON(object: any): DataOIDCIDP;
    toJSON(message: DataOIDCIDP): unknown;
    create(base?: DeepPartial<DataOIDCIDP>): DataOIDCIDP;
    fromPartial(object: DeepPartial<DataOIDCIDP>): DataOIDCIDP;
};
export declare const DataJWTIDP: {
    encode(message: DataJWTIDP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataJWTIDP;
    fromJSON(object: any): DataJWTIDP;
    toJSON(message: DataJWTIDP): unknown;
    create(base?: DeepPartial<DataJWTIDP>): DataJWTIDP;
    fromPartial(object: DeepPartial<DataJWTIDP>): DataJWTIDP;
};
export declare const ExportHumanUser: {
    encode(message: ExportHumanUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportHumanUser;
    fromJSON(object: any): ExportHumanUser;
    toJSON(message: ExportHumanUser): unknown;
    create(base?: DeepPartial<ExportHumanUser>): ExportHumanUser;
    fromPartial(object: DeepPartial<ExportHumanUser>): ExportHumanUser;
};
export declare const ExportHumanUser_Profile: {
    encode(message: ExportHumanUser_Profile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportHumanUser_Profile;
    fromJSON(object: any): ExportHumanUser_Profile;
    toJSON(message: ExportHumanUser_Profile): unknown;
    create(base?: DeepPartial<ExportHumanUser_Profile>): ExportHumanUser_Profile;
    fromPartial(object: DeepPartial<ExportHumanUser_Profile>): ExportHumanUser_Profile;
};
export declare const ExportHumanUser_Email: {
    encode(message: ExportHumanUser_Email, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportHumanUser_Email;
    fromJSON(object: any): ExportHumanUser_Email;
    toJSON(message: ExportHumanUser_Email): unknown;
    create(base?: DeepPartial<ExportHumanUser_Email>): ExportHumanUser_Email;
    fromPartial(object: DeepPartial<ExportHumanUser_Email>): ExportHumanUser_Email;
};
export declare const ExportHumanUser_Phone: {
    encode(message: ExportHumanUser_Phone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportHumanUser_Phone;
    fromJSON(object: any): ExportHumanUser_Phone;
    toJSON(message: ExportHumanUser_Phone): unknown;
    create(base?: DeepPartial<ExportHumanUser_Phone>): ExportHumanUser_Phone;
    fromPartial(object: DeepPartial<ExportHumanUser_Phone>): ExportHumanUser_Phone;
};
export declare const ExportHumanUser_HashedPassword: {
    encode(message: ExportHumanUser_HashedPassword, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportHumanUser_HashedPassword;
    fromJSON(object: any): ExportHumanUser_HashedPassword;
    toJSON(message: ExportHumanUser_HashedPassword): unknown;
    create(base?: DeepPartial<ExportHumanUser_HashedPassword>): ExportHumanUser_HashedPassword;
    fromPartial(object: DeepPartial<ExportHumanUser_HashedPassword>): ExportHumanUser_HashedPassword;
};
export declare const DataAppKey: {
    encode(message: DataAppKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataAppKey;
    fromJSON(object: any): DataAppKey;
    toJSON(message: DataAppKey): unknown;
    create(base?: DeepPartial<DataAppKey>): DataAppKey;
    fromPartial(object: DeepPartial<DataAppKey>): DataAppKey;
};
export declare const DataMachineKey: {
    encode(message: DataMachineKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataMachineKey;
    fromJSON(object: any): DataMachineKey;
    toJSON(message: DataMachineKey): unknown;
    create(base?: DeepPartial<DataMachineKey>): DataMachineKey;
    fromPartial(object: DeepPartial<DataMachineKey>): DataMachineKey;
};
export declare const DataProject: {
    encode(message: DataProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataProject;
    fromJSON(object: any): DataProject;
    toJSON(message: DataProject): unknown;
    create(base?: DeepPartial<DataProject>): DataProject;
    fromPartial(object: DeepPartial<DataProject>): DataProject;
};
export declare const DataAPIApplication: {
    encode(message: DataAPIApplication, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataAPIApplication;
    fromJSON(object: any): DataAPIApplication;
    toJSON(message: DataAPIApplication): unknown;
    create(base?: DeepPartial<DataAPIApplication>): DataAPIApplication;
    fromPartial(object: DeepPartial<DataAPIApplication>): DataAPIApplication;
};
export declare const DataOIDCApplication: {
    encode(message: DataOIDCApplication, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataOIDCApplication;
    fromJSON(object: any): DataOIDCApplication;
    toJSON(message: DataOIDCApplication): unknown;
    create(base?: DeepPartial<DataOIDCApplication>): DataOIDCApplication;
    fromPartial(object: DeepPartial<DataOIDCApplication>): DataOIDCApplication;
};
export declare const DataHumanUser: {
    encode(message: DataHumanUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataHumanUser;
    fromJSON(object: any): DataHumanUser;
    toJSON(message: DataHumanUser): unknown;
    create(base?: DeepPartial<DataHumanUser>): DataHumanUser;
    fromPartial(object: DeepPartial<DataHumanUser>): DataHumanUser;
};
export declare const DataMachineUser: {
    encode(message: DataMachineUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataMachineUser;
    fromJSON(object: any): DataMachineUser;
    toJSON(message: DataMachineUser): unknown;
    create(base?: DeepPartial<DataMachineUser>): DataMachineUser;
    fromPartial(object: DeepPartial<DataMachineUser>): DataMachineUser;
};
export declare const DataAction: {
    encode(message: DataAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataAction;
    fromJSON(object: any): DataAction;
    toJSON(message: DataAction): unknown;
    create(base?: DeepPartial<DataAction>): DataAction;
    fromPartial(object: DeepPartial<DataAction>): DataAction;
};
export declare const DataProjectGrant: {
    encode(message: DataProjectGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataProjectGrant;
    fromJSON(object: any): DataProjectGrant;
    toJSON(message: DataProjectGrant): unknown;
    create(base?: DeepPartial<DataProjectGrant>): DataProjectGrant;
    fromPartial(object: DeepPartial<DataProjectGrant>): DataProjectGrant;
};
export declare const SetTriggerActionsRequest: {
    encode(message: SetTriggerActionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTriggerActionsRequest;
    fromJSON(object: any): SetTriggerActionsRequest;
    toJSON(message: SetTriggerActionsRequest): unknown;
    create(base?: DeepPartial<SetTriggerActionsRequest>): SetTriggerActionsRequest;
    fromPartial(object: DeepPartial<SetTriggerActionsRequest>): SetTriggerActionsRequest;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
