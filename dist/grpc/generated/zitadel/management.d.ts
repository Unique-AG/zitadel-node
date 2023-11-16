/// <reference types="node" />
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Action, ActionFieldName, ActionIDQuery, ActionNameQuery, ActionStateQuery, Flow, FlowType, TriggerType } from "./action";
import { APIAuthMethodType, App, AppQuery, OIDCAppType, OIDCAuthMethodType, OIDCGrantType, OIDCResponseType, OIDCTokenType, OIDCVersion } from "./app";
import { Key, KeyType } from "./auth_n_key";
import { Change, ChangeQuery } from "./change";
import { AzureADTenant, IDP, IDPFieldName, IDPIDQuery, IDPLoginPolicyLink, IDPNameQuery, IDPOwnerType, IDPOwnerTypeQuery, IDPStylingType, IDPUserLink, LDAPAttributes, OIDCMappingField, Options, Provider, SAMLBinding } from "./idp";
import { Member, SearchQuery as SearchQuery1 } from "./member";
import { LocalizedMessage } from "./message";
import { Metadata, MetadataQuery } from "./metadata";
import { ListDetails, ListQuery, ObjectDetails } from "./object";
import { Domain, DomainSearchQuery, DomainValidationType, Org } from "./org";
import { DomainPolicy, LabelPolicy, LockoutPolicy, LoginPolicy, MultiFactorType, NotificationPolicy, OrgIAMPolicy, PasswordAgePolicy, PasswordComplexityPolicy, PasswordlessType, PrivacyPolicy, SecondFactorType, ThemeMode } from "./policy";
import { AllProjectGrantQuery, GrantedProject, PrivateLabelingSetting, Project, ProjectGrantQuery, ProjectQuery, Role, RoleQuery } from "./project";
import { EmailVerificationDoneScreenText, EmailVerificationScreenText, ExternalRegistrationUserOverviewScreenText, ExternalUserNotFoundScreenText, FooterText, InitializeUserDoneScreenText, InitializeUserScreenText, InitMFADoneScreenText, InitMFAOTPScreenText, InitMFAPromptScreenText, InitMFAU2FScreenText, InitPasswordDoneScreenText, InitPasswordScreenText, LinkingUserDoneScreenText, LoginCustomText, LoginScreenText, LogoutDoneScreenText, MessageCustomText, MFAProvidersText, PasswordChangeDoneScreenText, PasswordChangeScreenText, PasswordlessPromptScreenText, PasswordlessRegistrationDoneScreenText, PasswordlessRegistrationScreenText, PasswordlessScreenText, PasswordResetDoneScreenText, PasswordScreenText, RegistrationOptionScreenText, RegistrationOrgScreenText, RegistrationUserScreenText, SelectAccountScreenText, SuccessLoginScreenText, UsernameChangeDoneScreenText, UsernameChangeScreenText, VerifyMFAOTPScreenText, VerifyMFAU2FScreenText } from "./text";
import { AccessTokenType, AuthFactor, Email, Gender, Membership, MembershipQuery, PersonalAccessToken, Phone, Profile, SearchQuery, User, UserFieldName, UserGrant, UserGrantQuery, WebAuthNToken } from "./user";
export declare const protobufPackage = "zitadel.management.v1";
/** This is an empty request */
export interface HealthzRequest {
}
/** This is an empty response */
export interface HealthzResponse {
}
/** This is an empty request */
export interface GetOIDCInformationRequest {
}
export interface GetOIDCInformationResponse {
    issuer: string;
    discoveryEndpoint: string;
}
/** This is an empty request */
export interface GetIAMRequest {
}
export interface GetIAMResponse {
    /** deprecated: use default_org_id instead */
    globalOrgId: string;
    iamProjectId: string;
    defaultOrgId: string;
}
/** This is an empty request */
export interface GetSupportedLanguagesRequest {
}
export interface GetSupportedLanguagesResponse {
    languages: string[];
}
export interface GetUserByIDRequest {
    id: string;
}
export interface GetUserByIDResponse {
    user: User | undefined;
}
export interface GetUserByLoginNameGlobalRequest {
    loginName: string;
}
export interface GetUserByLoginNameGlobalResponse {
    user: User | undefined;
}
export interface ListUsersRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** the field the result is sorted */
    sortingColumn: UserFieldName;
    /** criteria the client is looking for */
    queries: SearchQuery[];
}
export interface ListUsersResponse {
    details: ListDetails | undefined;
    sortingColumn: UserFieldName;
    result: User[];
}
export interface ListUserChangesRequest {
    /** list limitations and ordering */
    query: ChangeQuery | undefined;
    userId: string;
}
export interface ListUserChangesResponse {
    /** zitadel.v1.ListDetails details = 1; was always returned empty (as we cannot get the necessary info) */
    result: Change[];
}
export interface IsUserUniqueRequest {
    userName: string;
    email: string;
}
export interface IsUserUniqueResponse {
    isUnique: boolean;
}
export interface AddHumanUserRequest {
    userName: string;
    profile: AddHumanUserRequest_Profile | undefined;
    email: AddHumanUserRequest_Email | undefined;
    phone: AddHumanUserRequest_Phone | undefined;
    initialPassword: string;
}
export interface AddHumanUserRequest_Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface AddHumanUserRequest_Email {
    email: string;
    isEmailVerified: boolean;
}
export interface AddHumanUserRequest_Phone {
    /** has to be a global number */
    phone: string;
    isPhoneVerified: boolean;
}
export interface AddHumanUserResponse {
    userId: string;
    details: ObjectDetails | undefined;
}
/** Describe my Import Human User Request */
export interface ImportHumanUserRequest {
    userName: string;
    profile: ImportHumanUserRequest_Profile | undefined;
    email: ImportHumanUserRequest_Email | undefined;
    phone: ImportHumanUserRequest_Phone | undefined;
    password: string;
    hashedPassword: ImportHumanUserRequest_HashedPassword | undefined;
    passwordChangeRequired: boolean;
    requestPasswordlessRegistration: boolean;
    otpCode: string;
    idps: ImportHumanUserRequest_IDP[];
}
export interface ImportHumanUserRequest_Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface ImportHumanUserRequest_Email {
    email: string;
    isEmailVerified: boolean;
}
export interface ImportHumanUserRequest_Phone {
    phone: string;
    isPhoneVerified: boolean;
}
export interface ImportHumanUserRequest_HashedPassword {
    value: string;
}
export interface ImportHumanUserRequest_IDP {
    configId: string;
    externalUserId: string;
    displayName: string;
}
export interface ImportHumanUserResponse {
    userId: string;
    details: ObjectDetails | undefined;
    passwordlessRegistration: ImportHumanUserResponse_PasswordlessRegistration | undefined;
}
export interface ImportHumanUserResponse_PasswordlessRegistration {
    link: string;
    /** deprecated: use expiration instead */
    lifetime: Duration | undefined;
    expiration: Duration | undefined;
}
export interface AddMachineUserRequest {
    userName: string;
    name: string;
    description: string;
    accessTokenType: AccessTokenType;
}
export interface AddMachineUserResponse {
    userId: string;
    details: ObjectDetails | undefined;
}
export interface DeactivateUserRequest {
    id: string;
}
export interface DeactivateUserResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateUserRequest {
    id: string;
}
export interface ReactivateUserResponse {
    details: ObjectDetails | undefined;
}
export interface LockUserRequest {
    id: string;
}
export interface LockUserResponse {
    details: ObjectDetails | undefined;
}
export interface UnlockUserRequest {
    id: string;
}
export interface UnlockUserResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveUserRequest {
    id: string;
}
export interface RemoveUserResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateUserNameRequest {
    userId: string;
    userName: string;
}
export interface UpdateUserNameResponse {
    details: ObjectDetails | undefined;
}
export interface ListUserMetadataRequest {
    id: string;
    query: ListQuery | undefined;
    queries: MetadataQuery[];
}
export interface ListUserMetadataResponse {
    details: ListDetails | undefined;
    result: Metadata[];
}
export interface GetUserMetadataRequest {
    id: string;
    key: string;
}
export interface GetUserMetadataResponse {
    metadata: Metadata | undefined;
}
export interface SetUserMetadataRequest {
    id: string;
    key: string;
    value: Buffer;
}
export interface SetUserMetadataResponse {
    id: string;
    details: ObjectDetails | undefined;
}
export interface BulkSetUserMetadataRequest {
    id: string;
    metadata: BulkSetUserMetadataRequest_Metadata[];
}
export interface BulkSetUserMetadataRequest_Metadata {
    key: string;
    value: Buffer;
}
export interface BulkSetUserMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveUserMetadataRequest {
    id: string;
    key: string;
}
export interface RemoveUserMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkRemoveUserMetadataRequest {
    id: string;
    keys: string[];
}
export interface BulkRemoveUserMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface GetHumanProfileRequest {
    userId: string;
}
export interface GetHumanProfileResponse {
    details: ObjectDetails | undefined;
    profile: Profile | undefined;
}
export interface UpdateHumanProfileRequest {
    userId: string;
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface UpdateHumanProfileResponse {
    details: ObjectDetails | undefined;
}
export interface GetHumanEmailRequest {
    userId: string;
}
export interface GetHumanEmailResponse {
    details: ObjectDetails | undefined;
    email: Email | undefined;
}
export interface UpdateHumanEmailRequest {
    userId: string;
    email: string;
    isEmailVerified: boolean;
}
export interface UpdateHumanEmailResponse {
    details: ObjectDetails | undefined;
}
export interface ResendHumanInitializationRequest {
    userId: string;
    email: string;
}
export interface ResendHumanInitializationResponse {
    details: ObjectDetails | undefined;
}
export interface ResendHumanEmailVerificationRequest {
    userId: string;
}
export interface ResendHumanEmailVerificationResponse {
    details: ObjectDetails | undefined;
}
export interface GetHumanPhoneRequest {
    userId: string;
}
export interface GetHumanPhoneResponse {
    details: ObjectDetails | undefined;
    phone: Phone | undefined;
}
export interface UpdateHumanPhoneRequest {
    userId: string;
    phone: string;
    isPhoneVerified: boolean;
}
export interface UpdateHumanPhoneResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanPhoneRequest {
    userId: string;
}
export interface RemoveHumanPhoneResponse {
    details: ObjectDetails | undefined;
}
export interface ResendHumanPhoneVerificationRequest {
    userId: string;
}
export interface ResendHumanPhoneVerificationResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanAvatarRequest {
    userId: string;
}
export interface RemoveHumanAvatarResponse {
    details: ObjectDetails | undefined;
}
export interface SetHumanInitialPasswordRequest {
    userId: string;
    password: string;
}
export interface SetHumanInitialPasswordResponse {
    details: ObjectDetails | undefined;
}
export interface SetHumanPasswordRequest {
    userId: string;
    password: string;
    noChangeRequired: boolean;
}
export interface SetHumanPasswordResponse {
    details: ObjectDetails | undefined;
}
export interface SendHumanResetPasswordNotificationRequest {
    userId: string;
    type: SendHumanResetPasswordNotificationRequest_Type;
}
export declare enum SendHumanResetPasswordNotificationRequest_Type {
    TYPE_EMAIL = 0,
    TYPE_SMS = 1,
    UNRECOGNIZED = -1
}
export declare function sendHumanResetPasswordNotificationRequest_TypeFromJSON(object: any): SendHumanResetPasswordNotificationRequest_Type;
export declare function sendHumanResetPasswordNotificationRequest_TypeToJSON(object: SendHumanResetPasswordNotificationRequest_Type): string;
export interface SendHumanResetPasswordNotificationResponse {
    details: ObjectDetails | undefined;
}
export interface ListHumanAuthFactorsRequest {
    userId: string;
}
export interface ListHumanAuthFactorsResponse {
    result: AuthFactor[];
}
export interface RemoveHumanAuthFactorOTPRequest {
    userId: string;
}
export interface RemoveHumanAuthFactorOTPResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanAuthFactorU2FRequest {
    userId: string;
    tokenId: string;
}
export interface RemoveHumanAuthFactorU2FResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanAuthFactorOTPSMSRequest {
    userId: string;
}
export interface RemoveHumanAuthFactorOTPSMSResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanAuthFactorOTPEmailRequest {
    userId: string;
}
export interface RemoveHumanAuthFactorOTPEmailResponse {
    details: ObjectDetails | undefined;
}
export interface ListHumanPasswordlessRequest {
    userId: string;
}
export interface ListHumanPasswordlessResponse {
    result: WebAuthNToken[];
}
export interface AddPasswordlessRegistrationRequest {
    userId: string;
}
export interface AddPasswordlessRegistrationResponse {
    details: ObjectDetails | undefined;
    link: string;
    expiration: Duration | undefined;
}
export interface SendPasswordlessRegistrationRequest {
    userId: string;
}
export interface SendPasswordlessRegistrationResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanPasswordlessRequest {
    userId: string;
    tokenId: string;
}
export interface RemoveHumanPasswordlessResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateMachineRequest {
    userId: string;
    description: string;
    name: string;
    accessTokenType: AccessTokenType;
}
export interface UpdateMachineResponse {
    details: ObjectDetails | undefined;
}
export interface GenerateMachineSecretRequest {
    userId: string;
}
export interface GenerateMachineSecretResponse {
    clientId: string;
    clientSecret: string;
    details: ObjectDetails | undefined;
}
export interface RemoveMachineSecretRequest {
    userId: string;
}
export interface RemoveMachineSecretResponse {
    details: ObjectDetails | undefined;
}
export interface GetMachineKeyByIDsRequest {
    userId: string;
    keyId: string;
}
export interface GetMachineKeyByIDsResponse {
    key: Key | undefined;
}
export interface ListMachineKeysRequest {
    userId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
}
export interface ListMachineKeysResponse {
    details: ListDetails | undefined;
    result: Key[];
}
export interface AddMachineKeyRequest {
    userId: string;
    type: KeyType;
    expirationDate: Date | undefined;
}
export interface AddMachineKeyResponse {
    keyId: string;
    keyDetails: Buffer;
    details: ObjectDetails | undefined;
}
export interface RemoveMachineKeyRequest {
    userId: string;
    keyId: string;
}
export interface RemoveMachineKeyResponse {
    details: ObjectDetails | undefined;
}
export interface GetPersonalAccessTokenByIDsRequest {
    userId: string;
    tokenId: string;
}
export interface GetPersonalAccessTokenByIDsResponse {
    token: PersonalAccessToken | undefined;
}
export interface ListPersonalAccessTokensRequest {
    userId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
}
export interface ListPersonalAccessTokensResponse {
    details: ListDetails | undefined;
    result: PersonalAccessToken[];
}
export interface AddPersonalAccessTokenRequest {
    userId: string;
    expirationDate: Date | undefined;
}
export interface AddPersonalAccessTokenResponse {
    tokenId: string;
    token: string;
    details: ObjectDetails | undefined;
}
export interface RemovePersonalAccessTokenRequest {
    userId: string;
    tokenId: string;
}
export interface RemovePersonalAccessTokenResponse {
    details: ObjectDetails | undefined;
}
export interface ListHumanLinkedIDPsRequest {
    userId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
}
export interface ListHumanLinkedIDPsResponse {
    details: ListDetails | undefined;
    result: IDPUserLink[];
}
export interface RemoveHumanLinkedIDPRequest {
    userId: string;
    idpId: string;
    linkedUserId: string;
}
export interface RemoveHumanLinkedIDPResponse {
    details: ObjectDetails | undefined;
}
export interface ListUserMembershipsRequest {
    /** list limitations and ordering */
    userId: string;
    /** the field the result is sorted */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: MembershipQuery[];
}
export interface ListUserMembershipsResponse {
    details: ListDetails | undefined;
    result: Membership[];
}
/** This is an empty request */
export interface GetMyOrgRequest {
}
export interface GetMyOrgResponse {
    org: Org | undefined;
}
export interface GetOrgByDomainGlobalRequest {
    domain: string;
}
export interface ListOrgChangesRequest {
    /** list limitations and ordering */
    query: ChangeQuery | undefined;
}
export interface ListOrgChangesResponse {
    /** zitadel.v1.ListDetails details = 1; was always returned empty (as we cannot get the necessary info) */
    result: Change[];
}
export interface GetOrgByDomainGlobalResponse {
    org: Org | undefined;
}
export interface AddOrgRequest {
    name: string;
}
export interface AddOrgResponse {
    id: string;
    details: ObjectDetails | undefined;
}
export interface UpdateOrgRequest {
    name: string;
}
export interface UpdateOrgResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface DeactivateOrgRequest {
}
export interface DeactivateOrgResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ReactivateOrgRequest {
}
export interface ReactivateOrgResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgRequest {
}
export interface RemoveOrgResponse {
    details: ObjectDetails | undefined;
}
export interface ListOrgDomainsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: DomainSearchQuery[];
}
export interface ListOrgDomainsResponse {
    details: ListDetails | undefined;
    result: Domain[];
}
export interface AddOrgDomainRequest {
    domain: string;
}
export interface AddOrgDomainResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgDomainRequest {
    domain: string;
}
export interface RemoveOrgDomainResponse {
    details: ObjectDetails | undefined;
}
export interface GenerateOrgDomainValidationRequest {
    domain: string;
    type: DomainValidationType;
}
export interface GenerateOrgDomainValidationResponse {
    token: string;
    url: string;
}
export interface ValidateOrgDomainRequest {
    domain: string;
}
export interface ValidateOrgDomainResponse {
    details: ObjectDetails | undefined;
}
export interface SetPrimaryOrgDomainRequest {
    domain: string;
}
export interface SetPrimaryOrgDomainResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ListOrgMemberRolesRequest {
}
export interface ListOrgMemberRolesResponse {
    result: string[];
}
export interface ListOrgMembersRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: SearchQuery1[];
}
export interface ListOrgMembersResponse {
    /** list limitations and ordering */
    details: ListDetails | undefined;
    /** criteria the client is looking for */
    result: Member[];
}
export interface AddOrgMemberRequest {
    userId: string;
    roles: string[];
}
export interface AddOrgMemberResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOrgMemberRequest {
    userId: string;
    roles: string[];
}
export interface UpdateOrgMemberResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgMemberRequest {
    userId: string;
}
export interface RemoveOrgMemberResponse {
    details: ObjectDetails | undefined;
}
export interface ListOrgMetadataRequest {
    query: ListQuery | undefined;
    queries: MetadataQuery[];
}
export interface ListOrgMetadataResponse {
    details: ListDetails | undefined;
    result: Metadata[];
}
export interface GetOrgMetadataRequest {
    key: string;
}
export interface GetOrgMetadataResponse {
    metadata: Metadata | undefined;
}
export interface SetOrgMetadataRequest {
    key: string;
    value: Buffer;
}
export interface SetOrgMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkSetOrgMetadataRequest {
    metadata: BulkSetOrgMetadataRequest_Metadata[];
}
export interface BulkSetOrgMetadataRequest_Metadata {
    key: string;
    value: Buffer;
}
export interface BulkSetOrgMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgMetadataRequest {
    key: string;
}
export interface RemoveOrgMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkRemoveOrgMetadataRequest {
    keys: string[];
}
export interface BulkRemoveOrgMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface GetProjectByIDRequest {
    id: string;
}
export interface GetProjectByIDResponse {
    project: Project | undefined;
}
export interface GetGrantedProjectByIDRequest {
    projectId: string;
    grantId: string;
}
export interface GetGrantedProjectByIDResponse {
    grantedProject: GrantedProject | undefined;
}
export interface ListProjectsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: ProjectQuery[];
}
export interface ListProjectsResponse {
    details: ListDetails | undefined;
    result: Project[];
}
export interface ListGrantedProjectsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: ProjectQuery[];
}
export interface ListGrantedProjectsResponse {
    details: ListDetails | undefined;
    result: GrantedProject[];
}
export interface ListProjectChangesRequest {
    /** list limitations and ordering */
    query: ChangeQuery | undefined;
    projectId: string;
}
export interface ListProjectChangesResponse {
    /** zitadel.v1.ListDetails details = 1; was always returned empty (as we cannot get the necessary info) */
    result: Change[];
}
export interface AddProjectRequest {
    name: string;
    projectRoleAssertion: boolean;
    projectRoleCheck: boolean;
    hasProjectCheck: boolean;
    privateLabelingSetting: PrivateLabelingSetting;
}
export interface AddProjectResponse {
    id: string;
    details: ObjectDetails | undefined;
}
export interface UpdateProjectRequest {
    id: string;
    name: string;
    projectRoleAssertion: boolean;
    projectRoleCheck: boolean;
    hasProjectCheck: boolean;
    privateLabelingSetting: PrivateLabelingSetting;
}
export interface UpdateProjectResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateProjectRequest {
    id: string;
}
export interface DeactivateProjectResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateProjectRequest {
    id: string;
}
export interface ReactivateProjectResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectRequest {
    id: string;
}
export interface RemoveProjectResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ListProjectMemberRolesRequest {
}
export interface ListProjectMemberRolesResponse {
    details: ListDetails | undefined;
    result: string[];
}
export interface AddProjectRoleRequest {
    projectId: string;
    roleKey: string;
    displayName: string;
    group: string;
}
export interface AddProjectRoleResponse {
    details: ObjectDetails | undefined;
}
export interface BulkAddProjectRolesRequest {
    projectId: string;
    roles: BulkAddProjectRolesRequest_Role[];
}
export interface BulkAddProjectRolesRequest_Role {
    key: string;
    displayName: string;
    group: string;
}
export interface BulkAddProjectRolesResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateProjectRoleRequest {
    projectId: string;
    roleKey: string;
    displayName: string;
    group: string;
}
export interface UpdateProjectRoleResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectRoleRequest {
    projectId: string;
    roleKey: string;
}
export interface RemoveProjectRoleResponse {
    details: ObjectDetails | undefined;
}
export interface ListProjectRolesRequest {
    projectId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: RoleQuery[];
}
export interface ListProjectRolesResponse {
    details: ListDetails | undefined;
    result: Role[];
}
export interface ListGrantedProjectRolesRequest {
    projectId: string;
    grantId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: RoleQuery[];
}
export interface ListGrantedProjectRolesResponse {
    details: ListDetails | undefined;
    result: Role[];
}
export interface ListProjectMembersRequest {
    projectId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: SearchQuery1[];
}
export interface ListProjectMembersResponse {
    details: ListDetails | undefined;
    result: Member[];
}
export interface AddProjectMemberRequest {
    projectId: string;
    userId: string;
    roles: string[];
}
export interface AddProjectMemberResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateProjectMemberRequest {
    projectId: string;
    userId: string;
    roles: string[];
}
export interface UpdateProjectMemberResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectMemberRequest {
    projectId: string;
    userId: string;
}
export interface RemoveProjectMemberResponse {
    details: ObjectDetails | undefined;
}
export interface GetAppByIDRequest {
    projectId: string;
    appId: string;
}
export interface GetAppByIDResponse {
    app: App | undefined;
}
export interface ListAppsRequest {
    projectId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: AppQuery[];
}
export interface ListAppsResponse {
    details: ListDetails | undefined;
    result: App[];
}
export interface ListAppChangesRequest {
    /** list limitations and ordering */
    query: ChangeQuery | undefined;
    projectId: string;
    appId: string;
}
export interface ListAppChangesResponse {
    /** zitadel.v1.ListDetails details = 1; was always returned empty (as we cannot get the necessary info) */
    result: Change[];
}
export interface AddOIDCAppRequest {
    projectId: string;
    name: string;
    redirectUris: string[];
    responseTypes: OIDCResponseType[];
    grantTypes: OIDCGrantType[];
    appType: OIDCAppType;
    authMethodType: OIDCAuthMethodType;
    postLogoutRedirectUris: string[];
    version: OIDCVersion;
    devMode: boolean;
    accessTokenType: OIDCTokenType;
    accessTokenRoleAssertion: boolean;
    idTokenRoleAssertion: boolean;
    idTokenUserinfoAssertion: boolean;
    clockSkew: Duration | undefined;
    additionalOrigins: string[];
    skipNativeAppSuccessPage: boolean;
}
export interface AddOIDCAppResponse {
    appId: string;
    details: ObjectDetails | undefined;
    clientId: string;
    clientSecret: string;
    noneCompliant: boolean;
    complianceProblems: LocalizedMessage[];
}
export interface AddSAMLAppRequest {
    projectId: string;
    name: string;
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
}
export interface AddSAMLAppResponse {
    appId: string;
    details: ObjectDetails | undefined;
}
export interface AddAPIAppRequest {
    projectId: string;
    name: string;
    authMethodType: APIAuthMethodType;
}
export interface AddAPIAppResponse {
    appId: string;
    details: ObjectDetails | undefined;
    clientId: string;
    clientSecret: string;
}
export interface UpdateAppRequest {
    projectId: string;
    appId: string;
    name: string;
}
export interface UpdateAppResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOIDCAppConfigRequest {
    projectId: string;
    appId: string;
    redirectUris: string[];
    responseTypes: OIDCResponseType[];
    grantTypes: OIDCGrantType[];
    appType: OIDCAppType;
    authMethodType: OIDCAuthMethodType;
    postLogoutRedirectUris: string[];
    devMode: boolean;
    accessTokenType: OIDCTokenType;
    accessTokenRoleAssertion: boolean;
    idTokenRoleAssertion: boolean;
    idTokenUserinfoAssertion: boolean;
    clockSkew: Duration | undefined;
    additionalOrigins: string[];
    skipNativeAppSuccessPage: boolean;
}
export interface UpdateOIDCAppConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateSAMLAppConfigRequest {
    projectId: string;
    appId: string;
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
}
export interface UpdateSAMLAppConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateAPIAppConfigRequest {
    projectId: string;
    appId: string;
    authMethodType: APIAuthMethodType;
}
export interface UpdateAPIAppConfigResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateAppRequest {
    projectId: string;
    appId: string;
}
export interface DeactivateAppResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateAppRequest {
    projectId: string;
    appId: string;
}
export interface ReactivateAppResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveAppRequest {
    projectId: string;
    appId: string;
}
export interface RemoveAppResponse {
    details: ObjectDetails | undefined;
}
export interface RegenerateOIDCClientSecretRequest {
    projectId: string;
    appId: string;
}
export interface RegenerateOIDCClientSecretResponse {
    clientSecret: string;
    details: ObjectDetails | undefined;
}
export interface RegenerateAPIClientSecretRequest {
    projectId: string;
    appId: string;
}
export interface RegenerateAPIClientSecretResponse {
    clientSecret: string;
    details: ObjectDetails | undefined;
}
export interface GetAppKeyRequest {
    projectId: string;
    appId: string;
    keyId: string;
}
export interface GetAppKeyResponse {
    key: Key | undefined;
}
export interface ListAppKeysRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    appId: string;
    projectId: string;
}
export interface ListAppKeysResponse {
    details: ListDetails | undefined;
    result: Key[];
}
export interface AddAppKeyRequest {
    projectId: string;
    appId: string;
    type: KeyType;
    expirationDate: Date | undefined;
}
export interface AddAppKeyResponse {
    id: string;
    details: ObjectDetails | undefined;
    keyDetails: Buffer;
}
export interface RemoveAppKeyRequest {
    projectId: string;
    appId: string;
    keyId: string;
}
export interface RemoveAppKeyResponse {
    details: ObjectDetails | undefined;
}
export interface ListProjectGrantChangesRequest {
    /** list limitations and ordering */
    query: ChangeQuery | undefined;
    projectId: string;
    grantId: string;
}
export interface ListProjectGrantChangesResponse {
    /** zitadel.v1.ListDetails details = 1; was always returned empty (as we cannot get the necessary info) */
    result: Change[];
}
export interface GetProjectGrantByIDRequest {
    projectId: string;
    grantId: string;
}
export interface GetProjectGrantByIDResponse {
    projectGrant: GrantedProject | undefined;
}
export interface ListProjectGrantsRequest {
    projectId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: ProjectGrantQuery[];
}
export interface ListProjectGrantsResponse {
    details: ListDetails | undefined;
    result: GrantedProject[];
}
export interface ListAllProjectGrantsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: AllProjectGrantQuery[];
}
export interface ListAllProjectGrantsResponse {
    details: ListDetails | undefined;
    result: GrantedProject[];
}
export interface AddProjectGrantRequest {
    projectId: string;
    grantedOrgId: string;
    roleKeys: string[];
}
export interface AddProjectGrantResponse {
    grantId: string;
    details: ObjectDetails | undefined;
}
export interface UpdateProjectGrantRequest {
    projectId: string;
    grantId: string;
    roleKeys: string[];
}
export interface UpdateProjectGrantResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateProjectGrantRequest {
    projectId: string;
    grantId: string;
}
export interface DeactivateProjectGrantResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateProjectGrantRequest {
    projectId: string;
    grantId: string;
}
export interface ReactivateProjectGrantResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectGrantRequest {
    projectId: string;
    grantId: string;
}
export interface RemoveProjectGrantResponse {
    details: ObjectDetails | undefined;
}
export interface ListProjectGrantMemberRolesRequest {
    query: ListQuery | undefined;
    result: string[];
}
export interface ListProjectGrantMemberRolesResponse {
    details: ListDetails | undefined;
    result: string[];
}
export interface ListProjectGrantMembersRequest {
    projectId: string;
    grantId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: SearchQuery1[];
}
export interface ListProjectGrantMembersResponse {
    details: ListDetails | undefined;
    result: Member[];
}
export interface AddProjectGrantMemberRequest {
    projectId: string;
    grantId: string;
    userId: string;
    roles: string[];
}
export interface AddProjectGrantMemberResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateProjectGrantMemberRequest {
    projectId: string;
    grantId: string;
    userId: string;
    roles: string[];
}
export interface UpdateProjectGrantMemberResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectGrantMemberRequest {
    projectId: string;
    grantId: string;
    userId: string;
}
export interface RemoveProjectGrantMemberResponse {
    details: ObjectDetails | undefined;
}
export interface GetUserGrantByIDRequest {
    userId: string;
    grantId: string;
}
export interface GetUserGrantByIDResponse {
    userGrant: UserGrant | undefined;
}
export interface ListUserGrantRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: UserGrantQuery[];
}
export interface ListUserGrantResponse {
    details: ListDetails | undefined;
    result: UserGrant[];
}
export interface AddUserGrantRequest {
    userId: string;
    projectId: string;
    projectGrantId: string;
    roleKeys: string[];
}
export interface AddUserGrantResponse {
    userGrantId: string;
    details: ObjectDetails | undefined;
}
export interface UpdateUserGrantRequest {
    userId: string;
    grantId: string;
    roleKeys: string[];
}
export interface UpdateUserGrantResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateUserGrantRequest {
    userId: string;
    grantId: string;
}
export interface DeactivateUserGrantResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateUserGrantRequest {
    userId: string;
    grantId: string;
}
export interface ReactivateUserGrantResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveUserGrantRequest {
    userId: string;
    grantId: string;
}
export interface RemoveUserGrantResponse {
    details: ObjectDetails | undefined;
}
export interface BulkRemoveUserGrantRequest {
    grantId: string[];
}
export interface BulkRemoveUserGrantResponse {
}
export interface GetOrgIAMPolicyRequest {
}
export interface GetOrgIAMPolicyResponse {
    policy: OrgIAMPolicy | undefined;
}
export interface GetDomainPolicyRequest {
}
export interface GetDomainPolicyResponse {
    policy: DomainPolicy | undefined;
}
export interface GetLoginPolicyRequest {
}
export interface GetLoginPolicyResponse {
    policy: LoginPolicy | undefined;
    /** deprecated: is_default is also defined in zitadel.policy.v1.LoginPolicy */
    isDefault: boolean;
}
export interface GetDefaultLoginPolicyRequest {
}
export interface GetDefaultLoginPolicyResponse {
    policy: LoginPolicy | undefined;
}
export interface AddCustomLoginPolicyRequest {
    allowUsernamePassword: boolean;
    allowRegister: boolean;
    allowExternalIdp: boolean;
    forceMfa: boolean;
    passwordlessType: PasswordlessType;
    hidePasswordReset: boolean;
    ignoreUnknownUsernames: boolean;
    defaultRedirectUri: string;
    passwordCheckLifetime: Duration | undefined;
    externalLoginCheckLifetime: Duration | undefined;
    mfaInitSkipLifetime: Duration | undefined;
    secondFactorCheckLifetime: Duration | undefined;
    multiFactorCheckLifetime: Duration | undefined;
    secondFactors: SecondFactorType[];
    multiFactors: MultiFactorType[];
    idps: AddCustomLoginPolicyRequest_IDP[];
    /** If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success. */
    allowDomainDiscovery: boolean;
    disableLoginWithEmail: boolean;
    disableLoginWithPhone: boolean;
    forceMfaLocalOnly: boolean;
}
export interface AddCustomLoginPolicyRequest_IDP {
    idpId: string;
    ownerType: IDPOwnerType;
}
export interface AddCustomLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomLoginPolicyRequest {
    allowUsernamePassword: boolean;
    allowRegister: boolean;
    allowExternalIdp: boolean;
    forceMfa: boolean;
    passwordlessType: PasswordlessType;
    hidePasswordReset: boolean;
    ignoreUnknownUsernames: boolean;
    defaultRedirectUri: string;
    passwordCheckLifetime: Duration | undefined;
    externalLoginCheckLifetime: Duration | undefined;
    mfaInitSkipLifetime: Duration | undefined;
    secondFactorCheckLifetime: Duration | undefined;
    multiFactorCheckLifetime: Duration | undefined;
    /** If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success. */
    allowDomainDiscovery: boolean;
    disableLoginWithEmail: boolean;
    disableLoginWithPhone: boolean;
    forceMfaLocalOnly: boolean;
}
export interface UpdateCustomLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetLoginPolicyToDefaultRequest {
}
export interface ResetLoginPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface ListLoginPolicyIDPsRequest {
    query: ListQuery | undefined;
}
export interface ListLoginPolicyIDPsResponse {
    details: ListDetails | undefined;
    result: IDPLoginPolicyLink[];
}
export interface AddIDPToLoginPolicyRequest {
    idpId: string;
    ownerType: IDPOwnerType;
}
export interface AddIDPToLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveIDPFromLoginPolicyRequest {
    idpId: string;
}
export interface RemoveIDPFromLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ListLoginPolicySecondFactorsRequest {
}
export interface ListLoginPolicySecondFactorsResponse {
    details: ListDetails | undefined;
    result: SecondFactorType[];
}
export interface AddSecondFactorToLoginPolicyRequest {
    type: SecondFactorType;
}
export interface AddSecondFactorToLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveSecondFactorFromLoginPolicyRequest {
    type: SecondFactorType;
}
export interface RemoveSecondFactorFromLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ListLoginPolicyMultiFactorsRequest {
}
export interface ListLoginPolicyMultiFactorsResponse {
    details: ListDetails | undefined;
    result: MultiFactorType[];
}
export interface AddMultiFactorToLoginPolicyRequest {
    type: MultiFactorType;
}
export interface AddMultiFactorToLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMultiFactorFromLoginPolicyRequest {
    type: MultiFactorType;
}
export interface RemoveMultiFactorFromLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetPasswordComplexityPolicyRequest {
}
export interface GetPasswordComplexityPolicyResponse {
    policy: PasswordComplexityPolicy | undefined;
    /** deprecated: is_default is also defined in zitadel.policy.v1.PasswordComplexityPolicy */
    isDefault: boolean;
}
/** This is an empty request */
export interface GetDefaultPasswordComplexityPolicyRequest {
}
export interface GetDefaultPasswordComplexityPolicyResponse {
    policy: PasswordComplexityPolicy | undefined;
}
export interface AddCustomPasswordComplexityPolicyRequest {
    minLength: Long;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
}
export interface AddCustomPasswordComplexityPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomPasswordComplexityPolicyRequest {
    minLength: Long;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
}
export interface UpdateCustomPasswordComplexityPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ResetPasswordComplexityPolicyToDefaultRequest {
}
export interface ResetPasswordComplexityPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetPasswordAgePolicyRequest {
}
export interface GetPasswordAgePolicyResponse {
    policy: PasswordAgePolicy | undefined;
    /** deprecated: is_default is also defined in zitadel.policy.v1.PasswordAgePolicy */
    isDefault: boolean;
}
/** This is an empty request */
export interface GetDefaultPasswordAgePolicyRequest {
}
export interface GetDefaultPasswordAgePolicyResponse {
    policy: PasswordAgePolicy | undefined;
}
export interface AddCustomPasswordAgePolicyRequest {
    maxAgeDays: number;
    expireWarnDays: number;
}
export interface AddCustomPasswordAgePolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomPasswordAgePolicyRequest {
    maxAgeDays: number;
    expireWarnDays: number;
}
export interface UpdateCustomPasswordAgePolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ResetPasswordAgePolicyToDefaultRequest {
}
export interface ResetPasswordAgePolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetLockoutPolicyRequest {
}
export interface GetLockoutPolicyResponse {
    policy: LockoutPolicy | undefined;
    /** deprecated: is_default is also defined in zitadel.policy.v1.LockoutPolicy */
    isDefault: boolean;
}
/** This is an empty request */
export interface GetDefaultLockoutPolicyRequest {
}
export interface GetDefaultLockoutPolicyResponse {
    policy: LockoutPolicy | undefined;
}
export interface AddCustomLockoutPolicyRequest {
    maxPasswordAttempts: number;
}
export interface AddCustomLockoutPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomLockoutPolicyRequest {
    maxPasswordAttempts: number;
}
export interface UpdateCustomLockoutPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ResetLockoutPolicyToDefaultRequest {
}
export interface ResetLockoutPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetPrivacyPolicyRequest {
}
export interface GetPrivacyPolicyResponse {
    policy: PrivacyPolicy | undefined;
}
/** This is an empty request */
export interface GetDefaultPrivacyPolicyRequest {
}
export interface GetDefaultPrivacyPolicyResponse {
    policy: PrivacyPolicy | undefined;
}
export interface AddCustomPrivacyPolicyRequest {
    tosLink: string;
    privacyLink: string;
    helpLink: string;
    supportEmail: string;
}
export interface AddCustomPrivacyPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomPrivacyPolicyRequest {
    tosLink: string;
    privacyLink: string;
    helpLink: string;
    supportEmail: string;
}
export interface UpdateCustomPrivacyPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ResetPrivacyPolicyToDefaultRequest {
}
export interface ResetPrivacyPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetNotificationPolicyRequest {
}
export interface GetNotificationPolicyResponse {
    policy: NotificationPolicy | undefined;
}
/** This is an empty request */
export interface GetDefaultNotificationPolicyRequest {
}
export interface GetDefaultNotificationPolicyResponse {
    policy: NotificationPolicy | undefined;
}
export interface AddCustomNotificationPolicyRequest {
    passwordChange: boolean;
}
export interface AddCustomNotificationPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomNotificationPolicyRequest {
    passwordChange: boolean;
}
export interface UpdateCustomNotificationPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ResetNotificationPolicyToDefaultRequest {
}
export interface ResetNotificationPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetLabelPolicyRequest {
}
export interface GetLabelPolicyResponse {
    policy: LabelPolicy | undefined;
    /** deprecated: is_default is also defined in zitadel.policy.v1.LabelPolicy */
    isDefault: boolean;
}
/** This is an empty request */
export interface GetPreviewLabelPolicyRequest {
}
export interface GetPreviewLabelPolicyResponse {
    policy: LabelPolicy | undefined;
    /** deprecated: is_default is also defined in zitadel.policy.v1.LabelPolicy */
    isDefault: boolean;
}
/** This is an empty request */
export interface GetDefaultLabelPolicyRequest {
}
export interface GetDefaultLabelPolicyResponse {
    policy: LabelPolicy | undefined;
}
export interface AddCustomLabelPolicyRequest {
    primaryColor: string;
    /** hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set */
    hideLoginNameSuffix: boolean;
    warnColor: string;
    backgroundColor: string;
    fontColor: string;
    primaryColorDark: string;
    backgroundColorDark: string;
    warnColorDark: string;
    fontColorDark: string;
    disableWatermark: boolean;
    themeMode: ThemeMode;
}
export interface AddCustomLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomLabelPolicyRequest {
    primaryColor: string;
    hideLoginNameSuffix: boolean;
    warnColor: string;
    backgroundColor: string;
    fontColor: string;
    primaryColorDark: string;
    backgroundColorDark: string;
    warnColorDark: string;
    fontColorDark: string;
    disableWatermark: boolean;
    themeMode: ThemeMode;
}
export interface UpdateCustomLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ActivateCustomLabelPolicyRequest {
}
export interface ActivateCustomLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveCustomLabelPolicyLogoRequest {
}
export interface RemoveCustomLabelPolicyLogoResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveCustomLabelPolicyLogoDarkRequest {
}
export interface RemoveCustomLabelPolicyLogoDarkResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveCustomLabelPolicyIconRequest {
}
export interface RemoveCustomLabelPolicyIconResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveCustomLabelPolicyIconDarkRequest {
}
export interface RemoveCustomLabelPolicyIconDarkResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveCustomLabelPolicyFontRequest {
}
export interface RemoveCustomLabelPolicyFontResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ResetLabelPolicyToDefaultRequest {
}
export interface ResetLabelPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomInitMessageTextRequest {
    language: string;
}
export interface GetCustomInitMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultInitMessageTextRequest {
    language: string;
}
export interface GetDefaultInitMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomInitMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomInitMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomInitMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomInitMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultLoginTextsRequest {
    language: string;
}
export interface GetDefaultLoginTextsResponse {
    customText: LoginCustomText | undefined;
}
export interface GetCustomLoginTextsRequest {
    language: string;
}
export interface GetCustomLoginTextsResponse {
    customText: LoginCustomText | undefined;
}
export interface SetCustomLoginTextsRequest {
    language: string;
    selectAccountText: SelectAccountScreenText | undefined;
    loginText: LoginScreenText | undefined;
    passwordText: PasswordScreenText | undefined;
    usernameChangeText: UsernameChangeScreenText | undefined;
    usernameChangeDoneText: UsernameChangeDoneScreenText | undefined;
    initPasswordText: InitPasswordScreenText | undefined;
    initPasswordDoneText: InitPasswordDoneScreenText | undefined;
    emailVerificationText: EmailVerificationScreenText | undefined;
    emailVerificationDoneText: EmailVerificationDoneScreenText | undefined;
    initializeUserText: InitializeUserScreenText | undefined;
    initializeDoneText: InitializeUserDoneScreenText | undefined;
    initMfaPromptText: InitMFAPromptScreenText | undefined;
    initMfaOtpText: InitMFAOTPScreenText | undefined;
    initMfaU2fText: InitMFAU2FScreenText | undefined;
    initMfaDoneText: InitMFADoneScreenText | undefined;
    mfaProvidersText: MFAProvidersText | undefined;
    verifyMfaOtpText: VerifyMFAOTPScreenText | undefined;
    verifyMfaU2fText: VerifyMFAU2FScreenText | undefined;
    passwordlessText: PasswordlessScreenText | undefined;
    passwordChangeText: PasswordChangeScreenText | undefined;
    passwordChangeDoneText: PasswordChangeDoneScreenText | undefined;
    passwordResetDoneText: PasswordResetDoneScreenText | undefined;
    registrationOptionText: RegistrationOptionScreenText | undefined;
    registrationUserText: RegistrationUserScreenText | undefined;
    registrationOrgText: RegistrationOrgScreenText | undefined;
    linkingUserDoneText: LinkingUserDoneScreenText | undefined;
    externalUserNotFoundText: ExternalUserNotFoundScreenText | undefined;
    successLoginText: SuccessLoginScreenText | undefined;
    logoutText: LogoutDoneScreenText | undefined;
    footerText: FooterText | undefined;
    passwordlessPromptText: PasswordlessPromptScreenText | undefined;
    passwordlessRegistrationText: PasswordlessRegistrationScreenText | undefined;
    passwordlessRegistrationDoneText: PasswordlessRegistrationDoneScreenText | undefined;
    externalRegistrationUserOverviewText: ExternalRegistrationUserOverviewScreenText | undefined;
}
export interface SetCustomLoginTextsResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomLoginTextsToDefaultRequest {
    language: string;
}
export interface ResetCustomLoginTextsToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomPasswordResetMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordResetMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultPasswordResetMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordResetMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomPasswordResetMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomPasswordResetMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordResetMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordResetMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomVerifyEmailMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyEmailMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultVerifyEmailMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyEmailMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomVerifyEmailMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomVerifyEmailMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyEmailMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyEmailMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomVerifyPhoneMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyPhoneMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultVerifyPhoneMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyPhoneMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomVerifyPhoneMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomVerifyPhoneMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyPhoneMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyPhoneMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomVerifySMSOTPMessageTextRequest {
    language: string;
}
export interface GetCustomVerifySMSOTPMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultVerifySMSOTPMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifySMSOTPMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomVerifySMSOTPMessageTextRequest {
    language: string;
    text: string;
}
export interface SetCustomVerifySMSOTPMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifySMSOTPMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifySMSOTPMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomVerifyEmailOTPMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyEmailOTPMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultVerifyEmailOTPMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyEmailOTPMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomVerifyEmailOTPMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomVerifyEmailOTPMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyEmailOTPMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyEmailOTPMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomDomainClaimedMessageTextRequest {
    language: string;
}
export interface GetCustomDomainClaimedMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultDomainClaimedMessageTextRequest {
    language: string;
}
export interface GetDefaultDomainClaimedMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomDomainClaimedMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomDomainClaimedMessageTextResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ResetCustomDomainClaimedMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomDomainClaimedMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomPasswordlessRegistrationMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordlessRegistrationMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultPasswordlessRegistrationMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordlessRegistrationMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomPasswordlessRegistrationMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomPasswordlessRegistrationMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomPasswordChangeMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordChangeMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultPasswordChangeMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordChangeMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomPasswordChangeMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomPasswordChangeMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordChangeMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordChangeMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetOrgIDPByIDRequest {
    id: string;
}
export interface GetOrgIDPByIDResponse {
    idp: IDP | undefined;
}
export interface ListOrgIDPsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** the field the result is sorted */
    sortingColumn: IDPFieldName;
    /** criteria the client is looking for */
    queries: IDPQuery[];
}
export interface IDPQuery {
    idpIdQuery?: IDPIDQuery | undefined;
    idpNameQuery?: IDPNameQuery | undefined;
    ownerTypeQuery?: IDPOwnerTypeQuery | undefined;
}
export interface ListOrgIDPsResponse {
    details: ListDetails | undefined;
    sortingColumn: IDPFieldName;
    result: IDP[];
}
export interface AddOrgOIDCIDPRequest {
    name: string;
    stylingType: IDPStylingType;
    clientId: string;
    clientSecret: string;
    issuer: string;
    scopes: string[];
    displayNameMapping: OIDCMappingField;
    usernameMapping: OIDCMappingField;
    autoRegister: boolean;
}
export interface AddOrgOIDCIDPResponse {
    details: ObjectDetails | undefined;
    idpId: string;
}
export interface AddOrgJWTIDPRequest {
    name: string;
    stylingType: IDPStylingType;
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
    autoRegister: boolean;
}
export interface AddOrgJWTIDPResponse {
    details: ObjectDetails | undefined;
    idpId: string;
}
export interface DeactivateOrgIDPRequest {
    idpId: string;
}
export interface DeactivateOrgIDPResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateOrgIDPRequest {
    idpId: string;
}
export interface ReactivateOrgIDPResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgIDPRequest {
    idpId: string;
}
/** This is an empty response */
export interface RemoveOrgIDPResponse {
}
export interface UpdateOrgIDPRequest {
    idpId: string;
    name: string;
    stylingType: IDPStylingType;
    autoRegister: boolean;
}
export interface UpdateOrgIDPResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOrgIDPOIDCConfigRequest {
    idpId: string;
    clientId: string;
    clientSecret: string;
    issuer: string;
    scopes: string[];
    displayNameMapping: OIDCMappingField;
    usernameMapping: OIDCMappingField;
}
export interface UpdateOrgIDPOIDCConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOrgIDPJWTConfigRequest {
    idpId: string;
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
}
export interface UpdateOrgIDPJWTConfigResponse {
    details: ObjectDetails | undefined;
}
export interface ListProvidersRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: ProviderQuery[];
}
export interface ProviderQuery {
    idpIdQuery?: IDPIDQuery | undefined;
    idpNameQuery?: IDPNameQuery | undefined;
    ownerTypeQuery?: IDPOwnerTypeQuery | undefined;
}
export interface ListProvidersResponse {
    details: ListDetails | undefined;
    result: Provider[];
}
export interface GetProviderByIDRequest {
    id: string;
}
export interface GetProviderByIDResponse {
    idp: Provider | undefined;
}
export interface AddGenericOAuthProviderRequest {
    name: string;
    clientId: string;
    clientSecret: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    /** identifying attribute of the user in the response of the user_endpoint */
    idAttribute: string;
    providerOptions: Options | undefined;
}
export interface AddGenericOAuthProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGenericOAuthProviderRequest {
    id: string;
    name: string;
    clientId: string;
    /** client_secret will only be updated if provided */
    clientSecret: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    /** identifying attribute of the user in the response of the user_endpoint */
    idAttribute: string;
    providerOptions: Options | undefined;
}
export interface UpdateGenericOAuthProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGenericOIDCProviderRequest {
    name: string;
    issuer: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
    isIdTokenMapping: boolean;
}
export interface AddGenericOIDCProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGenericOIDCProviderRequest {
    id: string;
    name: string;
    issuer: string;
    clientId: string;
    /** client_secret will only be updated if provided */
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
    isIdTokenMapping: boolean;
}
export interface UpdateGenericOIDCProviderResponse {
    details: ObjectDetails | undefined;
}
export interface MigrateGenericOIDCProviderRequest {
    id: string;
    azure?: AddAzureADProviderRequest | undefined;
    google?: AddGoogleProviderRequest | undefined;
}
export interface MigrateGenericOIDCProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddJWTProviderRequest {
    name: string;
    issuer: string;
    jwtEndpoint: string;
    keysEndpoint: string;
    headerName: string;
    providerOptions: Options | undefined;
}
export interface AddJWTProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateJWTProviderRequest {
    id: string;
    name: string;
    issuer: string;
    jwtEndpoint: string;
    keysEndpoint: string;
    headerName: string;
    providerOptions: Options | undefined;
}
export interface UpdateJWTProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddAzureADProviderRequest {
    name: string;
    clientId: string;
    clientSecret: string;
    /** if not provided the `common` tenant will be used */
    tenant: AzureADTenant | undefined;
    emailVerified: boolean;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddAzureADProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateAzureADProviderRequest {
    id: string;
    name: string;
    clientId: string;
    /** client_secret will only be updated if provided */
    clientSecret: string;
    /** if not provided the `common` tenant will be used */
    tenant: AzureADTenant | undefined;
    emailVerified: boolean;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateAzureADProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGitHubProviderRequest {
    /** GitHub will be used as default, if no name is provided */
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGitHubProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGitHubProviderRequest {
    id: string;
    name: string;
    clientId: string;
    /** client_secret will only be updated if provided */
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGitHubProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGitHubEnterpriseServerProviderRequest {
    clientId: string;
    name: string;
    clientSecret: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGitHubEnterpriseServerProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGitHubEnterpriseServerProviderRequest {
    id: string;
    name: string;
    clientId: string;
    /** client_secret will only be updated if provided */
    clientSecret: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGitHubEnterpriseServerProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGitLabProviderRequest {
    /** GitLab will be used as default, if no name is provided */
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGitLabProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGitLabProviderRequest {
    id: string;
    name: string;
    clientId: string;
    /** client_secret will only be updated if provided */
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGitLabProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGitLabSelfHostedProviderRequest {
    issuer: string;
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGitLabSelfHostedProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGitLabSelfHostedProviderRequest {
    id: string;
    issuer: string;
    name: string;
    clientId: string;
    /** client_secret will only be updated if provided */
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGitLabSelfHostedProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGoogleProviderRequest {
    /** Google will be used as default, if no name is provided */
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGoogleProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGoogleProviderRequest {
    id: string;
    name: string;
    clientId: string;
    /** client_secret will only be updated if provided */
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGoogleProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddLDAPProviderRequest {
    name: string;
    servers: string[];
    startTls: boolean;
    baseDn: string;
    bindDn: string;
    bindPassword: string;
    userBase: string;
    userObjectClasses: string[];
    userFilters: string[];
    timeout: Duration | undefined;
    attributes: LDAPAttributes | undefined;
    providerOptions: Options | undefined;
}
export interface AddLDAPProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateLDAPProviderRequest {
    id: string;
    name: string;
    servers: string[];
    startTls: boolean;
    baseDn: string;
    bindDn: string;
    bindPassword: string;
    userBase: string;
    userObjectClasses: string[];
    userFilters: string[];
    timeout: Duration | undefined;
    attributes: LDAPAttributes | undefined;
    providerOptions: Options | undefined;
}
export interface UpdateLDAPProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddSAMLProviderRequest {
    name: string;
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
    binding: SAMLBinding;
    withSignedRequest: boolean;
    providerOptions: Options | undefined;
}
export interface AddSAMLProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateSAMLProviderRequest {
    id: string;
    name: string;
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
    binding: SAMLBinding;
    withSignedRequest: boolean;
    providerOptions: Options | undefined;
}
export interface UpdateSAMLProviderResponse {
    details: ObjectDetails | undefined;
}
export interface RegenerateSAMLProviderCertificateRequest {
    id: string;
}
export interface RegenerateSAMLProviderCertificateResponse {
    details: ObjectDetails | undefined;
}
export interface AddAppleProviderRequest {
    /** Apple will be used as default, if no name is provided */
    name: string;
    clientId: string;
    teamId: string;
    keyId: string;
    privateKey: Buffer;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddAppleProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateAppleProviderRequest {
    id: string;
    name: string;
    clientId: string;
    teamId: string;
    keyId: string;
    privateKey: Buffer;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateAppleProviderResponse {
    details: ObjectDetails | undefined;
}
export interface DeleteProviderRequest {
    id: string;
}
export interface DeleteProviderResponse {
    details: ObjectDetails | undefined;
}
export interface ListActionsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** the field the result is sorted */
    sortingColumn: ActionFieldName;
    /** criteria the client is looking for */
    queries: ActionQuery[];
}
export interface ActionQuery {
    actionIdQuery?: ActionIDQuery | undefined;
    actionNameQuery?: ActionNameQuery | undefined;
    actionStateQuery?: ActionStateQuery | undefined;
}
export interface ListActionsResponse {
    details: ListDetails | undefined;
    sortingColumn: ActionFieldName;
    result: Action[];
}
export interface CreateActionRequest {
    name: string;
    script: string;
    timeout: Duration | undefined;
    allowedToFail: boolean;
}
export interface CreateActionResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface GetActionRequest {
    id: string;
}
export interface GetActionResponse {
    action: Action | undefined;
}
export interface UpdateActionRequest {
    id: string;
    name: string;
    script: string;
    timeout: Duration | undefined;
    allowedToFail: boolean;
}
export interface UpdateActionResponse {
    details: ObjectDetails | undefined;
}
export interface DeleteActionRequest {
    id: string;
}
export interface DeleteActionResponse {
}
export interface ListFlowTypesRequest {
}
export interface ListFlowTypesResponse {
    result: FlowType[];
}
export interface ListFlowTriggerTypesRequest {
    type: string;
}
export interface ListFlowTriggerTypesResponse {
    result: TriggerType[];
}
export interface DeactivateActionRequest {
    id: string;
}
export interface DeactivateActionResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateActionRequest {
    id: string;
}
export interface ReactivateActionResponse {
    details: ObjectDetails | undefined;
}
export interface GetFlowRequest {
    /** id of the flow */
    type: string;
}
export interface GetFlowResponse {
    flow: Flow | undefined;
}
export interface ClearFlowRequest {
    /** id of the flow */
    type: string;
}
export interface ClearFlowResponse {
    details: ObjectDetails | undefined;
}
export interface SetTriggerActionsRequest {
    /** id of the flow type */
    flowType: string;
    /** id of the trigger type */
    triggerType: string;
    actionIds: string[];
}
export interface SetTriggerActionsResponse {
    details: ObjectDetails | undefined;
}
export declare const HealthzRequest: {
    encode(_: HealthzRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthzRequest;
    fromJSON(_: any): HealthzRequest;
    toJSON(_: HealthzRequest): unknown;
    create(base?: DeepPartial<HealthzRequest>): HealthzRequest;
    fromPartial(_: DeepPartial<HealthzRequest>): HealthzRequest;
};
export declare const HealthzResponse: {
    encode(_: HealthzResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthzResponse;
    fromJSON(_: any): HealthzResponse;
    toJSON(_: HealthzResponse): unknown;
    create(base?: DeepPartial<HealthzResponse>): HealthzResponse;
    fromPartial(_: DeepPartial<HealthzResponse>): HealthzResponse;
};
export declare const GetOIDCInformationRequest: {
    encode(_: GetOIDCInformationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOIDCInformationRequest;
    fromJSON(_: any): GetOIDCInformationRequest;
    toJSON(_: GetOIDCInformationRequest): unknown;
    create(base?: DeepPartial<GetOIDCInformationRequest>): GetOIDCInformationRequest;
    fromPartial(_: DeepPartial<GetOIDCInformationRequest>): GetOIDCInformationRequest;
};
export declare const GetOIDCInformationResponse: {
    encode(message: GetOIDCInformationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOIDCInformationResponse;
    fromJSON(object: any): GetOIDCInformationResponse;
    toJSON(message: GetOIDCInformationResponse): unknown;
    create(base?: DeepPartial<GetOIDCInformationResponse>): GetOIDCInformationResponse;
    fromPartial(object: DeepPartial<GetOIDCInformationResponse>): GetOIDCInformationResponse;
};
export declare const GetIAMRequest: {
    encode(_: GetIAMRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIAMRequest;
    fromJSON(_: any): GetIAMRequest;
    toJSON(_: GetIAMRequest): unknown;
    create(base?: DeepPartial<GetIAMRequest>): GetIAMRequest;
    fromPartial(_: DeepPartial<GetIAMRequest>): GetIAMRequest;
};
export declare const GetIAMResponse: {
    encode(message: GetIAMResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIAMResponse;
    fromJSON(object: any): GetIAMResponse;
    toJSON(message: GetIAMResponse): unknown;
    create(base?: DeepPartial<GetIAMResponse>): GetIAMResponse;
    fromPartial(object: DeepPartial<GetIAMResponse>): GetIAMResponse;
};
export declare const GetSupportedLanguagesRequest: {
    encode(_: GetSupportedLanguagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSupportedLanguagesRequest;
    fromJSON(_: any): GetSupportedLanguagesRequest;
    toJSON(_: GetSupportedLanguagesRequest): unknown;
    create(base?: DeepPartial<GetSupportedLanguagesRequest>): GetSupportedLanguagesRequest;
    fromPartial(_: DeepPartial<GetSupportedLanguagesRequest>): GetSupportedLanguagesRequest;
};
export declare const GetSupportedLanguagesResponse: {
    encode(message: GetSupportedLanguagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSupportedLanguagesResponse;
    fromJSON(object: any): GetSupportedLanguagesResponse;
    toJSON(message: GetSupportedLanguagesResponse): unknown;
    create(base?: DeepPartial<GetSupportedLanguagesResponse>): GetSupportedLanguagesResponse;
    fromPartial(object: DeepPartial<GetSupportedLanguagesResponse>): GetSupportedLanguagesResponse;
};
export declare const GetUserByIDRequest: {
    encode(message: GetUserByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByIDRequest;
    fromJSON(object: any): GetUserByIDRequest;
    toJSON(message: GetUserByIDRequest): unknown;
    create(base?: DeepPartial<GetUserByIDRequest>): GetUserByIDRequest;
    fromPartial(object: DeepPartial<GetUserByIDRequest>): GetUserByIDRequest;
};
export declare const GetUserByIDResponse: {
    encode(message: GetUserByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByIDResponse;
    fromJSON(object: any): GetUserByIDResponse;
    toJSON(message: GetUserByIDResponse): unknown;
    create(base?: DeepPartial<GetUserByIDResponse>): GetUserByIDResponse;
    fromPartial(object: DeepPartial<GetUserByIDResponse>): GetUserByIDResponse;
};
export declare const GetUserByLoginNameGlobalRequest: {
    encode(message: GetUserByLoginNameGlobalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByLoginNameGlobalRequest;
    fromJSON(object: any): GetUserByLoginNameGlobalRequest;
    toJSON(message: GetUserByLoginNameGlobalRequest): unknown;
    create(base?: DeepPartial<GetUserByLoginNameGlobalRequest>): GetUserByLoginNameGlobalRequest;
    fromPartial(object: DeepPartial<GetUserByLoginNameGlobalRequest>): GetUserByLoginNameGlobalRequest;
};
export declare const GetUserByLoginNameGlobalResponse: {
    encode(message: GetUserByLoginNameGlobalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByLoginNameGlobalResponse;
    fromJSON(object: any): GetUserByLoginNameGlobalResponse;
    toJSON(message: GetUserByLoginNameGlobalResponse): unknown;
    create(base?: DeepPartial<GetUserByLoginNameGlobalResponse>): GetUserByLoginNameGlobalResponse;
    fromPartial(object: DeepPartial<GetUserByLoginNameGlobalResponse>): GetUserByLoginNameGlobalResponse;
};
export declare const ListUsersRequest: {
    encode(message: ListUsersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest;
    fromJSON(object: any): ListUsersRequest;
    toJSON(message: ListUsersRequest): unknown;
    create(base?: DeepPartial<ListUsersRequest>): ListUsersRequest;
    fromPartial(object: DeepPartial<ListUsersRequest>): ListUsersRequest;
};
export declare const ListUsersResponse: {
    encode(message: ListUsersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse;
    fromJSON(object: any): ListUsersResponse;
    toJSON(message: ListUsersResponse): unknown;
    create(base?: DeepPartial<ListUsersResponse>): ListUsersResponse;
    fromPartial(object: DeepPartial<ListUsersResponse>): ListUsersResponse;
};
export declare const ListUserChangesRequest: {
    encode(message: ListUserChangesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserChangesRequest;
    fromJSON(object: any): ListUserChangesRequest;
    toJSON(message: ListUserChangesRequest): unknown;
    create(base?: DeepPartial<ListUserChangesRequest>): ListUserChangesRequest;
    fromPartial(object: DeepPartial<ListUserChangesRequest>): ListUserChangesRequest;
};
export declare const ListUserChangesResponse: {
    encode(message: ListUserChangesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserChangesResponse;
    fromJSON(object: any): ListUserChangesResponse;
    toJSON(message: ListUserChangesResponse): unknown;
    create(base?: DeepPartial<ListUserChangesResponse>): ListUserChangesResponse;
    fromPartial(object: DeepPartial<ListUserChangesResponse>): ListUserChangesResponse;
};
export declare const IsUserUniqueRequest: {
    encode(message: IsUserUniqueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsUserUniqueRequest;
    fromJSON(object: any): IsUserUniqueRequest;
    toJSON(message: IsUserUniqueRequest): unknown;
    create(base?: DeepPartial<IsUserUniqueRequest>): IsUserUniqueRequest;
    fromPartial(object: DeepPartial<IsUserUniqueRequest>): IsUserUniqueRequest;
};
export declare const IsUserUniqueResponse: {
    encode(message: IsUserUniqueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsUserUniqueResponse;
    fromJSON(object: any): IsUserUniqueResponse;
    toJSON(message: IsUserUniqueResponse): unknown;
    create(base?: DeepPartial<IsUserUniqueResponse>): IsUserUniqueResponse;
    fromPartial(object: DeepPartial<IsUserUniqueResponse>): IsUserUniqueResponse;
};
export declare const AddHumanUserRequest: {
    encode(message: AddHumanUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserRequest;
    fromJSON(object: any): AddHumanUserRequest;
    toJSON(message: AddHumanUserRequest): unknown;
    create(base?: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest;
    fromPartial(object: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest;
};
export declare const AddHumanUserRequest_Profile: {
    encode(message: AddHumanUserRequest_Profile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserRequest_Profile;
    fromJSON(object: any): AddHumanUserRequest_Profile;
    toJSON(message: AddHumanUserRequest_Profile): unknown;
    create(base?: DeepPartial<AddHumanUserRequest_Profile>): AddHumanUserRequest_Profile;
    fromPartial(object: DeepPartial<AddHumanUserRequest_Profile>): AddHumanUserRequest_Profile;
};
export declare const AddHumanUserRequest_Email: {
    encode(message: AddHumanUserRequest_Email, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserRequest_Email;
    fromJSON(object: any): AddHumanUserRequest_Email;
    toJSON(message: AddHumanUserRequest_Email): unknown;
    create(base?: DeepPartial<AddHumanUserRequest_Email>): AddHumanUserRequest_Email;
    fromPartial(object: DeepPartial<AddHumanUserRequest_Email>): AddHumanUserRequest_Email;
};
export declare const AddHumanUserRequest_Phone: {
    encode(message: AddHumanUserRequest_Phone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserRequest_Phone;
    fromJSON(object: any): AddHumanUserRequest_Phone;
    toJSON(message: AddHumanUserRequest_Phone): unknown;
    create(base?: DeepPartial<AddHumanUserRequest_Phone>): AddHumanUserRequest_Phone;
    fromPartial(object: DeepPartial<AddHumanUserRequest_Phone>): AddHumanUserRequest_Phone;
};
export declare const AddHumanUserResponse: {
    encode(message: AddHumanUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserResponse;
    fromJSON(object: any): AddHumanUserResponse;
    toJSON(message: AddHumanUserResponse): unknown;
    create(base?: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse;
    fromPartial(object: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse;
};
export declare const ImportHumanUserRequest: {
    encode(message: ImportHumanUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserRequest;
    fromJSON(object: any): ImportHumanUserRequest;
    toJSON(message: ImportHumanUserRequest): unknown;
    create(base?: DeepPartial<ImportHumanUserRequest>): ImportHumanUserRequest;
    fromPartial(object: DeepPartial<ImportHumanUserRequest>): ImportHumanUserRequest;
};
export declare const ImportHumanUserRequest_Profile: {
    encode(message: ImportHumanUserRequest_Profile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserRequest_Profile;
    fromJSON(object: any): ImportHumanUserRequest_Profile;
    toJSON(message: ImportHumanUserRequest_Profile): unknown;
    create(base?: DeepPartial<ImportHumanUserRequest_Profile>): ImportHumanUserRequest_Profile;
    fromPartial(object: DeepPartial<ImportHumanUserRequest_Profile>): ImportHumanUserRequest_Profile;
};
export declare const ImportHumanUserRequest_Email: {
    encode(message: ImportHumanUserRequest_Email, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserRequest_Email;
    fromJSON(object: any): ImportHumanUserRequest_Email;
    toJSON(message: ImportHumanUserRequest_Email): unknown;
    create(base?: DeepPartial<ImportHumanUserRequest_Email>): ImportHumanUserRequest_Email;
    fromPartial(object: DeepPartial<ImportHumanUserRequest_Email>): ImportHumanUserRequest_Email;
};
export declare const ImportHumanUserRequest_Phone: {
    encode(message: ImportHumanUserRequest_Phone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserRequest_Phone;
    fromJSON(object: any): ImportHumanUserRequest_Phone;
    toJSON(message: ImportHumanUserRequest_Phone): unknown;
    create(base?: DeepPartial<ImportHumanUserRequest_Phone>): ImportHumanUserRequest_Phone;
    fromPartial(object: DeepPartial<ImportHumanUserRequest_Phone>): ImportHumanUserRequest_Phone;
};
export declare const ImportHumanUserRequest_HashedPassword: {
    encode(message: ImportHumanUserRequest_HashedPassword, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserRequest_HashedPassword;
    fromJSON(object: any): ImportHumanUserRequest_HashedPassword;
    toJSON(message: ImportHumanUserRequest_HashedPassword): unknown;
    create(base?: DeepPartial<ImportHumanUserRequest_HashedPassword>): ImportHumanUserRequest_HashedPassword;
    fromPartial(object: DeepPartial<ImportHumanUserRequest_HashedPassword>): ImportHumanUserRequest_HashedPassword;
};
export declare const ImportHumanUserRequest_IDP: {
    encode(message: ImportHumanUserRequest_IDP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserRequest_IDP;
    fromJSON(object: any): ImportHumanUserRequest_IDP;
    toJSON(message: ImportHumanUserRequest_IDP): unknown;
    create(base?: DeepPartial<ImportHumanUserRequest_IDP>): ImportHumanUserRequest_IDP;
    fromPartial(object: DeepPartial<ImportHumanUserRequest_IDP>): ImportHumanUserRequest_IDP;
};
export declare const ImportHumanUserResponse: {
    encode(message: ImportHumanUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserResponse;
    fromJSON(object: any): ImportHumanUserResponse;
    toJSON(message: ImportHumanUserResponse): unknown;
    create(base?: DeepPartial<ImportHumanUserResponse>): ImportHumanUserResponse;
    fromPartial(object: DeepPartial<ImportHumanUserResponse>): ImportHumanUserResponse;
};
export declare const ImportHumanUserResponse_PasswordlessRegistration: {
    encode(message: ImportHumanUserResponse_PasswordlessRegistration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserResponse_PasswordlessRegistration;
    fromJSON(object: any): ImportHumanUserResponse_PasswordlessRegistration;
    toJSON(message: ImportHumanUserResponse_PasswordlessRegistration): unknown;
    create(base?: DeepPartial<ImportHumanUserResponse_PasswordlessRegistration>): ImportHumanUserResponse_PasswordlessRegistration;
    fromPartial(object: DeepPartial<ImportHumanUserResponse_PasswordlessRegistration>): ImportHumanUserResponse_PasswordlessRegistration;
};
export declare const AddMachineUserRequest: {
    encode(message: AddMachineUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMachineUserRequest;
    fromJSON(object: any): AddMachineUserRequest;
    toJSON(message: AddMachineUserRequest): unknown;
    create(base?: DeepPartial<AddMachineUserRequest>): AddMachineUserRequest;
    fromPartial(object: DeepPartial<AddMachineUserRequest>): AddMachineUserRequest;
};
export declare const AddMachineUserResponse: {
    encode(message: AddMachineUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMachineUserResponse;
    fromJSON(object: any): AddMachineUserResponse;
    toJSON(message: AddMachineUserResponse): unknown;
    create(base?: DeepPartial<AddMachineUserResponse>): AddMachineUserResponse;
    fromPartial(object: DeepPartial<AddMachineUserResponse>): AddMachineUserResponse;
};
export declare const DeactivateUserRequest: {
    encode(message: DeactivateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserRequest;
    fromJSON(object: any): DeactivateUserRequest;
    toJSON(message: DeactivateUserRequest): unknown;
    create(base?: DeepPartial<DeactivateUserRequest>): DeactivateUserRequest;
    fromPartial(object: DeepPartial<DeactivateUserRequest>): DeactivateUserRequest;
};
export declare const DeactivateUserResponse: {
    encode(message: DeactivateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserResponse;
    fromJSON(object: any): DeactivateUserResponse;
    toJSON(message: DeactivateUserResponse): unknown;
    create(base?: DeepPartial<DeactivateUserResponse>): DeactivateUserResponse;
    fromPartial(object: DeepPartial<DeactivateUserResponse>): DeactivateUserResponse;
};
export declare const ReactivateUserRequest: {
    encode(message: ReactivateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserRequest;
    fromJSON(object: any): ReactivateUserRequest;
    toJSON(message: ReactivateUserRequest): unknown;
    create(base?: DeepPartial<ReactivateUserRequest>): ReactivateUserRequest;
    fromPartial(object: DeepPartial<ReactivateUserRequest>): ReactivateUserRequest;
};
export declare const ReactivateUserResponse: {
    encode(message: ReactivateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserResponse;
    fromJSON(object: any): ReactivateUserResponse;
    toJSON(message: ReactivateUserResponse): unknown;
    create(base?: DeepPartial<ReactivateUserResponse>): ReactivateUserResponse;
    fromPartial(object: DeepPartial<ReactivateUserResponse>): ReactivateUserResponse;
};
export declare const LockUserRequest: {
    encode(message: LockUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockUserRequest;
    fromJSON(object: any): LockUserRequest;
    toJSON(message: LockUserRequest): unknown;
    create(base?: DeepPartial<LockUserRequest>): LockUserRequest;
    fromPartial(object: DeepPartial<LockUserRequest>): LockUserRequest;
};
export declare const LockUserResponse: {
    encode(message: LockUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockUserResponse;
    fromJSON(object: any): LockUserResponse;
    toJSON(message: LockUserResponse): unknown;
    create(base?: DeepPartial<LockUserResponse>): LockUserResponse;
    fromPartial(object: DeepPartial<LockUserResponse>): LockUserResponse;
};
export declare const UnlockUserRequest: {
    encode(message: UnlockUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnlockUserRequest;
    fromJSON(object: any): UnlockUserRequest;
    toJSON(message: UnlockUserRequest): unknown;
    create(base?: DeepPartial<UnlockUserRequest>): UnlockUserRequest;
    fromPartial(object: DeepPartial<UnlockUserRequest>): UnlockUserRequest;
};
export declare const UnlockUserResponse: {
    encode(message: UnlockUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnlockUserResponse;
    fromJSON(object: any): UnlockUserResponse;
    toJSON(message: UnlockUserResponse): unknown;
    create(base?: DeepPartial<UnlockUserResponse>): UnlockUserResponse;
    fromPartial(object: DeepPartial<UnlockUserResponse>): UnlockUserResponse;
};
export declare const RemoveUserRequest: {
    encode(message: RemoveUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserRequest;
    fromJSON(object: any): RemoveUserRequest;
    toJSON(message: RemoveUserRequest): unknown;
    create(base?: DeepPartial<RemoveUserRequest>): RemoveUserRequest;
    fromPartial(object: DeepPartial<RemoveUserRequest>): RemoveUserRequest;
};
export declare const RemoveUserResponse: {
    encode(message: RemoveUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserResponse;
    fromJSON(object: any): RemoveUserResponse;
    toJSON(message: RemoveUserResponse): unknown;
    create(base?: DeepPartial<RemoveUserResponse>): RemoveUserResponse;
    fromPartial(object: DeepPartial<RemoveUserResponse>): RemoveUserResponse;
};
export declare const UpdateUserNameRequest: {
    encode(message: UpdateUserNameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserNameRequest;
    fromJSON(object: any): UpdateUserNameRequest;
    toJSON(message: UpdateUserNameRequest): unknown;
    create(base?: DeepPartial<UpdateUserNameRequest>): UpdateUserNameRequest;
    fromPartial(object: DeepPartial<UpdateUserNameRequest>): UpdateUserNameRequest;
};
export declare const UpdateUserNameResponse: {
    encode(message: UpdateUserNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserNameResponse;
    fromJSON(object: any): UpdateUserNameResponse;
    toJSON(message: UpdateUserNameResponse): unknown;
    create(base?: DeepPartial<UpdateUserNameResponse>): UpdateUserNameResponse;
    fromPartial(object: DeepPartial<UpdateUserNameResponse>): UpdateUserNameResponse;
};
export declare const ListUserMetadataRequest: {
    encode(message: ListUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserMetadataRequest;
    fromJSON(object: any): ListUserMetadataRequest;
    toJSON(message: ListUserMetadataRequest): unknown;
    create(base?: DeepPartial<ListUserMetadataRequest>): ListUserMetadataRequest;
    fromPartial(object: DeepPartial<ListUserMetadataRequest>): ListUserMetadataRequest;
};
export declare const ListUserMetadataResponse: {
    encode(message: ListUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserMetadataResponse;
    fromJSON(object: any): ListUserMetadataResponse;
    toJSON(message: ListUserMetadataResponse): unknown;
    create(base?: DeepPartial<ListUserMetadataResponse>): ListUserMetadataResponse;
    fromPartial(object: DeepPartial<ListUserMetadataResponse>): ListUserMetadataResponse;
};
export declare const GetUserMetadataRequest: {
    encode(message: GetUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserMetadataRequest;
    fromJSON(object: any): GetUserMetadataRequest;
    toJSON(message: GetUserMetadataRequest): unknown;
    create(base?: DeepPartial<GetUserMetadataRequest>): GetUserMetadataRequest;
    fromPartial(object: DeepPartial<GetUserMetadataRequest>): GetUserMetadataRequest;
};
export declare const GetUserMetadataResponse: {
    encode(message: GetUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserMetadataResponse;
    fromJSON(object: any): GetUserMetadataResponse;
    toJSON(message: GetUserMetadataResponse): unknown;
    create(base?: DeepPartial<GetUserMetadataResponse>): GetUserMetadataResponse;
    fromPartial(object: DeepPartial<GetUserMetadataResponse>): GetUserMetadataResponse;
};
export declare const SetUserMetadataRequest: {
    encode(message: SetUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUserMetadataRequest;
    fromJSON(object: any): SetUserMetadataRequest;
    toJSON(message: SetUserMetadataRequest): unknown;
    create(base?: DeepPartial<SetUserMetadataRequest>): SetUserMetadataRequest;
    fromPartial(object: DeepPartial<SetUserMetadataRequest>): SetUserMetadataRequest;
};
export declare const SetUserMetadataResponse: {
    encode(message: SetUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUserMetadataResponse;
    fromJSON(object: any): SetUserMetadataResponse;
    toJSON(message: SetUserMetadataResponse): unknown;
    create(base?: DeepPartial<SetUserMetadataResponse>): SetUserMetadataResponse;
    fromPartial(object: DeepPartial<SetUserMetadataResponse>): SetUserMetadataResponse;
};
export declare const BulkSetUserMetadataRequest: {
    encode(message: BulkSetUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetUserMetadataRequest;
    fromJSON(object: any): BulkSetUserMetadataRequest;
    toJSON(message: BulkSetUserMetadataRequest): unknown;
    create(base?: DeepPartial<BulkSetUserMetadataRequest>): BulkSetUserMetadataRequest;
    fromPartial(object: DeepPartial<BulkSetUserMetadataRequest>): BulkSetUserMetadataRequest;
};
export declare const BulkSetUserMetadataRequest_Metadata: {
    encode(message: BulkSetUserMetadataRequest_Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetUserMetadataRequest_Metadata;
    fromJSON(object: any): BulkSetUserMetadataRequest_Metadata;
    toJSON(message: BulkSetUserMetadataRequest_Metadata): unknown;
    create(base?: DeepPartial<BulkSetUserMetadataRequest_Metadata>): BulkSetUserMetadataRequest_Metadata;
    fromPartial(object: DeepPartial<BulkSetUserMetadataRequest_Metadata>): BulkSetUserMetadataRequest_Metadata;
};
export declare const BulkSetUserMetadataResponse: {
    encode(message: BulkSetUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetUserMetadataResponse;
    fromJSON(object: any): BulkSetUserMetadataResponse;
    toJSON(message: BulkSetUserMetadataResponse): unknown;
    create(base?: DeepPartial<BulkSetUserMetadataResponse>): BulkSetUserMetadataResponse;
    fromPartial(object: DeepPartial<BulkSetUserMetadataResponse>): BulkSetUserMetadataResponse;
};
export declare const RemoveUserMetadataRequest: {
    encode(message: RemoveUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserMetadataRequest;
    fromJSON(object: any): RemoveUserMetadataRequest;
    toJSON(message: RemoveUserMetadataRequest): unknown;
    create(base?: DeepPartial<RemoveUserMetadataRequest>): RemoveUserMetadataRequest;
    fromPartial(object: DeepPartial<RemoveUserMetadataRequest>): RemoveUserMetadataRequest;
};
export declare const RemoveUserMetadataResponse: {
    encode(message: RemoveUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserMetadataResponse;
    fromJSON(object: any): RemoveUserMetadataResponse;
    toJSON(message: RemoveUserMetadataResponse): unknown;
    create(base?: DeepPartial<RemoveUserMetadataResponse>): RemoveUserMetadataResponse;
    fromPartial(object: DeepPartial<RemoveUserMetadataResponse>): RemoveUserMetadataResponse;
};
export declare const BulkRemoveUserMetadataRequest: {
    encode(message: BulkRemoveUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveUserMetadataRequest;
    fromJSON(object: any): BulkRemoveUserMetadataRequest;
    toJSON(message: BulkRemoveUserMetadataRequest): unknown;
    create(base?: DeepPartial<BulkRemoveUserMetadataRequest>): BulkRemoveUserMetadataRequest;
    fromPartial(object: DeepPartial<BulkRemoveUserMetadataRequest>): BulkRemoveUserMetadataRequest;
};
export declare const BulkRemoveUserMetadataResponse: {
    encode(message: BulkRemoveUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveUserMetadataResponse;
    fromJSON(object: any): BulkRemoveUserMetadataResponse;
    toJSON(message: BulkRemoveUserMetadataResponse): unknown;
    create(base?: DeepPartial<BulkRemoveUserMetadataResponse>): BulkRemoveUserMetadataResponse;
    fromPartial(object: DeepPartial<BulkRemoveUserMetadataResponse>): BulkRemoveUserMetadataResponse;
};
export declare const GetHumanProfileRequest: {
    encode(message: GetHumanProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanProfileRequest;
    fromJSON(object: any): GetHumanProfileRequest;
    toJSON(message: GetHumanProfileRequest): unknown;
    create(base?: DeepPartial<GetHumanProfileRequest>): GetHumanProfileRequest;
    fromPartial(object: DeepPartial<GetHumanProfileRequest>): GetHumanProfileRequest;
};
export declare const GetHumanProfileResponse: {
    encode(message: GetHumanProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanProfileResponse;
    fromJSON(object: any): GetHumanProfileResponse;
    toJSON(message: GetHumanProfileResponse): unknown;
    create(base?: DeepPartial<GetHumanProfileResponse>): GetHumanProfileResponse;
    fromPartial(object: DeepPartial<GetHumanProfileResponse>): GetHumanProfileResponse;
};
export declare const UpdateHumanProfileRequest: {
    encode(message: UpdateHumanProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanProfileRequest;
    fromJSON(object: any): UpdateHumanProfileRequest;
    toJSON(message: UpdateHumanProfileRequest): unknown;
    create(base?: DeepPartial<UpdateHumanProfileRequest>): UpdateHumanProfileRequest;
    fromPartial(object: DeepPartial<UpdateHumanProfileRequest>): UpdateHumanProfileRequest;
};
export declare const UpdateHumanProfileResponse: {
    encode(message: UpdateHumanProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanProfileResponse;
    fromJSON(object: any): UpdateHumanProfileResponse;
    toJSON(message: UpdateHumanProfileResponse): unknown;
    create(base?: DeepPartial<UpdateHumanProfileResponse>): UpdateHumanProfileResponse;
    fromPartial(object: DeepPartial<UpdateHumanProfileResponse>): UpdateHumanProfileResponse;
};
export declare const GetHumanEmailRequest: {
    encode(message: GetHumanEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanEmailRequest;
    fromJSON(object: any): GetHumanEmailRequest;
    toJSON(message: GetHumanEmailRequest): unknown;
    create(base?: DeepPartial<GetHumanEmailRequest>): GetHumanEmailRequest;
    fromPartial(object: DeepPartial<GetHumanEmailRequest>): GetHumanEmailRequest;
};
export declare const GetHumanEmailResponse: {
    encode(message: GetHumanEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanEmailResponse;
    fromJSON(object: any): GetHumanEmailResponse;
    toJSON(message: GetHumanEmailResponse): unknown;
    create(base?: DeepPartial<GetHumanEmailResponse>): GetHumanEmailResponse;
    fromPartial(object: DeepPartial<GetHumanEmailResponse>): GetHumanEmailResponse;
};
export declare const UpdateHumanEmailRequest: {
    encode(message: UpdateHumanEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanEmailRequest;
    fromJSON(object: any): UpdateHumanEmailRequest;
    toJSON(message: UpdateHumanEmailRequest): unknown;
    create(base?: DeepPartial<UpdateHumanEmailRequest>): UpdateHumanEmailRequest;
    fromPartial(object: DeepPartial<UpdateHumanEmailRequest>): UpdateHumanEmailRequest;
};
export declare const UpdateHumanEmailResponse: {
    encode(message: UpdateHumanEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanEmailResponse;
    fromJSON(object: any): UpdateHumanEmailResponse;
    toJSON(message: UpdateHumanEmailResponse): unknown;
    create(base?: DeepPartial<UpdateHumanEmailResponse>): UpdateHumanEmailResponse;
    fromPartial(object: DeepPartial<UpdateHumanEmailResponse>): UpdateHumanEmailResponse;
};
export declare const ResendHumanInitializationRequest: {
    encode(message: ResendHumanInitializationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanInitializationRequest;
    fromJSON(object: any): ResendHumanInitializationRequest;
    toJSON(message: ResendHumanInitializationRequest): unknown;
    create(base?: DeepPartial<ResendHumanInitializationRequest>): ResendHumanInitializationRequest;
    fromPartial(object: DeepPartial<ResendHumanInitializationRequest>): ResendHumanInitializationRequest;
};
export declare const ResendHumanInitializationResponse: {
    encode(message: ResendHumanInitializationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanInitializationResponse;
    fromJSON(object: any): ResendHumanInitializationResponse;
    toJSON(message: ResendHumanInitializationResponse): unknown;
    create(base?: DeepPartial<ResendHumanInitializationResponse>): ResendHumanInitializationResponse;
    fromPartial(object: DeepPartial<ResendHumanInitializationResponse>): ResendHumanInitializationResponse;
};
export declare const ResendHumanEmailVerificationRequest: {
    encode(message: ResendHumanEmailVerificationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanEmailVerificationRequest;
    fromJSON(object: any): ResendHumanEmailVerificationRequest;
    toJSON(message: ResendHumanEmailVerificationRequest): unknown;
    create(base?: DeepPartial<ResendHumanEmailVerificationRequest>): ResendHumanEmailVerificationRequest;
    fromPartial(object: DeepPartial<ResendHumanEmailVerificationRequest>): ResendHumanEmailVerificationRequest;
};
export declare const ResendHumanEmailVerificationResponse: {
    encode(message: ResendHumanEmailVerificationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanEmailVerificationResponse;
    fromJSON(object: any): ResendHumanEmailVerificationResponse;
    toJSON(message: ResendHumanEmailVerificationResponse): unknown;
    create(base?: DeepPartial<ResendHumanEmailVerificationResponse>): ResendHumanEmailVerificationResponse;
    fromPartial(object: DeepPartial<ResendHumanEmailVerificationResponse>): ResendHumanEmailVerificationResponse;
};
export declare const GetHumanPhoneRequest: {
    encode(message: GetHumanPhoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanPhoneRequest;
    fromJSON(object: any): GetHumanPhoneRequest;
    toJSON(message: GetHumanPhoneRequest): unknown;
    create(base?: DeepPartial<GetHumanPhoneRequest>): GetHumanPhoneRequest;
    fromPartial(object: DeepPartial<GetHumanPhoneRequest>): GetHumanPhoneRequest;
};
export declare const GetHumanPhoneResponse: {
    encode(message: GetHumanPhoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanPhoneResponse;
    fromJSON(object: any): GetHumanPhoneResponse;
    toJSON(message: GetHumanPhoneResponse): unknown;
    create(base?: DeepPartial<GetHumanPhoneResponse>): GetHumanPhoneResponse;
    fromPartial(object: DeepPartial<GetHumanPhoneResponse>): GetHumanPhoneResponse;
};
export declare const UpdateHumanPhoneRequest: {
    encode(message: UpdateHumanPhoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanPhoneRequest;
    fromJSON(object: any): UpdateHumanPhoneRequest;
    toJSON(message: UpdateHumanPhoneRequest): unknown;
    create(base?: DeepPartial<UpdateHumanPhoneRequest>): UpdateHumanPhoneRequest;
    fromPartial(object: DeepPartial<UpdateHumanPhoneRequest>): UpdateHumanPhoneRequest;
};
export declare const UpdateHumanPhoneResponse: {
    encode(message: UpdateHumanPhoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanPhoneResponse;
    fromJSON(object: any): UpdateHumanPhoneResponse;
    toJSON(message: UpdateHumanPhoneResponse): unknown;
    create(base?: DeepPartial<UpdateHumanPhoneResponse>): UpdateHumanPhoneResponse;
    fromPartial(object: DeepPartial<UpdateHumanPhoneResponse>): UpdateHumanPhoneResponse;
};
export declare const RemoveHumanPhoneRequest: {
    encode(message: RemoveHumanPhoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanPhoneRequest;
    fromJSON(object: any): RemoveHumanPhoneRequest;
    toJSON(message: RemoveHumanPhoneRequest): unknown;
    create(base?: DeepPartial<RemoveHumanPhoneRequest>): RemoveHumanPhoneRequest;
    fromPartial(object: DeepPartial<RemoveHumanPhoneRequest>): RemoveHumanPhoneRequest;
};
export declare const RemoveHumanPhoneResponse: {
    encode(message: RemoveHumanPhoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanPhoneResponse;
    fromJSON(object: any): RemoveHumanPhoneResponse;
    toJSON(message: RemoveHumanPhoneResponse): unknown;
    create(base?: DeepPartial<RemoveHumanPhoneResponse>): RemoveHumanPhoneResponse;
    fromPartial(object: DeepPartial<RemoveHumanPhoneResponse>): RemoveHumanPhoneResponse;
};
export declare const ResendHumanPhoneVerificationRequest: {
    encode(message: ResendHumanPhoneVerificationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanPhoneVerificationRequest;
    fromJSON(object: any): ResendHumanPhoneVerificationRequest;
    toJSON(message: ResendHumanPhoneVerificationRequest): unknown;
    create(base?: DeepPartial<ResendHumanPhoneVerificationRequest>): ResendHumanPhoneVerificationRequest;
    fromPartial(object: DeepPartial<ResendHumanPhoneVerificationRequest>): ResendHumanPhoneVerificationRequest;
};
export declare const ResendHumanPhoneVerificationResponse: {
    encode(message: ResendHumanPhoneVerificationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanPhoneVerificationResponse;
    fromJSON(object: any): ResendHumanPhoneVerificationResponse;
    toJSON(message: ResendHumanPhoneVerificationResponse): unknown;
    create(base?: DeepPartial<ResendHumanPhoneVerificationResponse>): ResendHumanPhoneVerificationResponse;
    fromPartial(object: DeepPartial<ResendHumanPhoneVerificationResponse>): ResendHumanPhoneVerificationResponse;
};
export declare const RemoveHumanAvatarRequest: {
    encode(message: RemoveHumanAvatarRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAvatarRequest;
    fromJSON(object: any): RemoveHumanAvatarRequest;
    toJSON(message: RemoveHumanAvatarRequest): unknown;
    create(base?: DeepPartial<RemoveHumanAvatarRequest>): RemoveHumanAvatarRequest;
    fromPartial(object: DeepPartial<RemoveHumanAvatarRequest>): RemoveHumanAvatarRequest;
};
export declare const RemoveHumanAvatarResponse: {
    encode(message: RemoveHumanAvatarResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAvatarResponse;
    fromJSON(object: any): RemoveHumanAvatarResponse;
    toJSON(message: RemoveHumanAvatarResponse): unknown;
    create(base?: DeepPartial<RemoveHumanAvatarResponse>): RemoveHumanAvatarResponse;
    fromPartial(object: DeepPartial<RemoveHumanAvatarResponse>): RemoveHumanAvatarResponse;
};
export declare const SetHumanInitialPasswordRequest: {
    encode(message: SetHumanInitialPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanInitialPasswordRequest;
    fromJSON(object: any): SetHumanInitialPasswordRequest;
    toJSON(message: SetHumanInitialPasswordRequest): unknown;
    create(base?: DeepPartial<SetHumanInitialPasswordRequest>): SetHumanInitialPasswordRequest;
    fromPartial(object: DeepPartial<SetHumanInitialPasswordRequest>): SetHumanInitialPasswordRequest;
};
export declare const SetHumanInitialPasswordResponse: {
    encode(message: SetHumanInitialPasswordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanInitialPasswordResponse;
    fromJSON(object: any): SetHumanInitialPasswordResponse;
    toJSON(message: SetHumanInitialPasswordResponse): unknown;
    create(base?: DeepPartial<SetHumanInitialPasswordResponse>): SetHumanInitialPasswordResponse;
    fromPartial(object: DeepPartial<SetHumanInitialPasswordResponse>): SetHumanInitialPasswordResponse;
};
export declare const SetHumanPasswordRequest: {
    encode(message: SetHumanPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanPasswordRequest;
    fromJSON(object: any): SetHumanPasswordRequest;
    toJSON(message: SetHumanPasswordRequest): unknown;
    create(base?: DeepPartial<SetHumanPasswordRequest>): SetHumanPasswordRequest;
    fromPartial(object: DeepPartial<SetHumanPasswordRequest>): SetHumanPasswordRequest;
};
export declare const SetHumanPasswordResponse: {
    encode(message: SetHumanPasswordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanPasswordResponse;
    fromJSON(object: any): SetHumanPasswordResponse;
    toJSON(message: SetHumanPasswordResponse): unknown;
    create(base?: DeepPartial<SetHumanPasswordResponse>): SetHumanPasswordResponse;
    fromPartial(object: DeepPartial<SetHumanPasswordResponse>): SetHumanPasswordResponse;
};
export declare const SendHumanResetPasswordNotificationRequest: {
    encode(message: SendHumanResetPasswordNotificationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendHumanResetPasswordNotificationRequest;
    fromJSON(object: any): SendHumanResetPasswordNotificationRequest;
    toJSON(message: SendHumanResetPasswordNotificationRequest): unknown;
    create(base?: DeepPartial<SendHumanResetPasswordNotificationRequest>): SendHumanResetPasswordNotificationRequest;
    fromPartial(object: DeepPartial<SendHumanResetPasswordNotificationRequest>): SendHumanResetPasswordNotificationRequest;
};
export declare const SendHumanResetPasswordNotificationResponse: {
    encode(message: SendHumanResetPasswordNotificationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendHumanResetPasswordNotificationResponse;
    fromJSON(object: any): SendHumanResetPasswordNotificationResponse;
    toJSON(message: SendHumanResetPasswordNotificationResponse): unknown;
    create(base?: DeepPartial<SendHumanResetPasswordNotificationResponse>): SendHumanResetPasswordNotificationResponse;
    fromPartial(object: DeepPartial<SendHumanResetPasswordNotificationResponse>): SendHumanResetPasswordNotificationResponse;
};
export declare const ListHumanAuthFactorsRequest: {
    encode(message: ListHumanAuthFactorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanAuthFactorsRequest;
    fromJSON(object: any): ListHumanAuthFactorsRequest;
    toJSON(message: ListHumanAuthFactorsRequest): unknown;
    create(base?: DeepPartial<ListHumanAuthFactorsRequest>): ListHumanAuthFactorsRequest;
    fromPartial(object: DeepPartial<ListHumanAuthFactorsRequest>): ListHumanAuthFactorsRequest;
};
export declare const ListHumanAuthFactorsResponse: {
    encode(message: ListHumanAuthFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanAuthFactorsResponse;
    fromJSON(object: any): ListHumanAuthFactorsResponse;
    toJSON(message: ListHumanAuthFactorsResponse): unknown;
    create(base?: DeepPartial<ListHumanAuthFactorsResponse>): ListHumanAuthFactorsResponse;
    fromPartial(object: DeepPartial<ListHumanAuthFactorsResponse>): ListHumanAuthFactorsResponse;
};
export declare const RemoveHumanAuthFactorOTPRequest: {
    encode(message: RemoveHumanAuthFactorOTPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPRequest;
    fromJSON(object: any): RemoveHumanAuthFactorOTPRequest;
    toJSON(message: RemoveHumanAuthFactorOTPRequest): unknown;
    create(base?: DeepPartial<RemoveHumanAuthFactorOTPRequest>): RemoveHumanAuthFactorOTPRequest;
    fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPRequest>): RemoveHumanAuthFactorOTPRequest;
};
export declare const RemoveHumanAuthFactorOTPResponse: {
    encode(message: RemoveHumanAuthFactorOTPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPResponse;
    fromJSON(object: any): RemoveHumanAuthFactorOTPResponse;
    toJSON(message: RemoveHumanAuthFactorOTPResponse): unknown;
    create(base?: DeepPartial<RemoveHumanAuthFactorOTPResponse>): RemoveHumanAuthFactorOTPResponse;
    fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPResponse>): RemoveHumanAuthFactorOTPResponse;
};
export declare const RemoveHumanAuthFactorU2FRequest: {
    encode(message: RemoveHumanAuthFactorU2FRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorU2FRequest;
    fromJSON(object: any): RemoveHumanAuthFactorU2FRequest;
    toJSON(message: RemoveHumanAuthFactorU2FRequest): unknown;
    create(base?: DeepPartial<RemoveHumanAuthFactorU2FRequest>): RemoveHumanAuthFactorU2FRequest;
    fromPartial(object: DeepPartial<RemoveHumanAuthFactorU2FRequest>): RemoveHumanAuthFactorU2FRequest;
};
export declare const RemoveHumanAuthFactorU2FResponse: {
    encode(message: RemoveHumanAuthFactorU2FResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorU2FResponse;
    fromJSON(object: any): RemoveHumanAuthFactorU2FResponse;
    toJSON(message: RemoveHumanAuthFactorU2FResponse): unknown;
    create(base?: DeepPartial<RemoveHumanAuthFactorU2FResponse>): RemoveHumanAuthFactorU2FResponse;
    fromPartial(object: DeepPartial<RemoveHumanAuthFactorU2FResponse>): RemoveHumanAuthFactorU2FResponse;
};
export declare const RemoveHumanAuthFactorOTPSMSRequest: {
    encode(message: RemoveHumanAuthFactorOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPSMSRequest;
    fromJSON(object: any): RemoveHumanAuthFactorOTPSMSRequest;
    toJSON(message: RemoveHumanAuthFactorOTPSMSRequest): unknown;
    create(base?: DeepPartial<RemoveHumanAuthFactorOTPSMSRequest>): RemoveHumanAuthFactorOTPSMSRequest;
    fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPSMSRequest>): RemoveHumanAuthFactorOTPSMSRequest;
};
export declare const RemoveHumanAuthFactorOTPSMSResponse: {
    encode(message: RemoveHumanAuthFactorOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPSMSResponse;
    fromJSON(object: any): RemoveHumanAuthFactorOTPSMSResponse;
    toJSON(message: RemoveHumanAuthFactorOTPSMSResponse): unknown;
    create(base?: DeepPartial<RemoveHumanAuthFactorOTPSMSResponse>): RemoveHumanAuthFactorOTPSMSResponse;
    fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPSMSResponse>): RemoveHumanAuthFactorOTPSMSResponse;
};
export declare const RemoveHumanAuthFactorOTPEmailRequest: {
    encode(message: RemoveHumanAuthFactorOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPEmailRequest;
    fromJSON(object: any): RemoveHumanAuthFactorOTPEmailRequest;
    toJSON(message: RemoveHumanAuthFactorOTPEmailRequest): unknown;
    create(base?: DeepPartial<RemoveHumanAuthFactorOTPEmailRequest>): RemoveHumanAuthFactorOTPEmailRequest;
    fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPEmailRequest>): RemoveHumanAuthFactorOTPEmailRequest;
};
export declare const RemoveHumanAuthFactorOTPEmailResponse: {
    encode(message: RemoveHumanAuthFactorOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPEmailResponse;
    fromJSON(object: any): RemoveHumanAuthFactorOTPEmailResponse;
    toJSON(message: RemoveHumanAuthFactorOTPEmailResponse): unknown;
    create(base?: DeepPartial<RemoveHumanAuthFactorOTPEmailResponse>): RemoveHumanAuthFactorOTPEmailResponse;
    fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPEmailResponse>): RemoveHumanAuthFactorOTPEmailResponse;
};
export declare const ListHumanPasswordlessRequest: {
    encode(message: ListHumanPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanPasswordlessRequest;
    fromJSON(object: any): ListHumanPasswordlessRequest;
    toJSON(message: ListHumanPasswordlessRequest): unknown;
    create(base?: DeepPartial<ListHumanPasswordlessRequest>): ListHumanPasswordlessRequest;
    fromPartial(object: DeepPartial<ListHumanPasswordlessRequest>): ListHumanPasswordlessRequest;
};
export declare const ListHumanPasswordlessResponse: {
    encode(message: ListHumanPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanPasswordlessResponse;
    fromJSON(object: any): ListHumanPasswordlessResponse;
    toJSON(message: ListHumanPasswordlessResponse): unknown;
    create(base?: DeepPartial<ListHumanPasswordlessResponse>): ListHumanPasswordlessResponse;
    fromPartial(object: DeepPartial<ListHumanPasswordlessResponse>): ListHumanPasswordlessResponse;
};
export declare const AddPasswordlessRegistrationRequest: {
    encode(message: AddPasswordlessRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddPasswordlessRegistrationRequest;
    fromJSON(object: any): AddPasswordlessRegistrationRequest;
    toJSON(message: AddPasswordlessRegistrationRequest): unknown;
    create(base?: DeepPartial<AddPasswordlessRegistrationRequest>): AddPasswordlessRegistrationRequest;
    fromPartial(object: DeepPartial<AddPasswordlessRegistrationRequest>): AddPasswordlessRegistrationRequest;
};
export declare const AddPasswordlessRegistrationResponse: {
    encode(message: AddPasswordlessRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddPasswordlessRegistrationResponse;
    fromJSON(object: any): AddPasswordlessRegistrationResponse;
    toJSON(message: AddPasswordlessRegistrationResponse): unknown;
    create(base?: DeepPartial<AddPasswordlessRegistrationResponse>): AddPasswordlessRegistrationResponse;
    fromPartial(object: DeepPartial<AddPasswordlessRegistrationResponse>): AddPasswordlessRegistrationResponse;
};
export declare const SendPasswordlessRegistrationRequest: {
    encode(message: SendPasswordlessRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendPasswordlessRegistrationRequest;
    fromJSON(object: any): SendPasswordlessRegistrationRequest;
    toJSON(message: SendPasswordlessRegistrationRequest): unknown;
    create(base?: DeepPartial<SendPasswordlessRegistrationRequest>): SendPasswordlessRegistrationRequest;
    fromPartial(object: DeepPartial<SendPasswordlessRegistrationRequest>): SendPasswordlessRegistrationRequest;
};
export declare const SendPasswordlessRegistrationResponse: {
    encode(message: SendPasswordlessRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendPasswordlessRegistrationResponse;
    fromJSON(object: any): SendPasswordlessRegistrationResponse;
    toJSON(message: SendPasswordlessRegistrationResponse): unknown;
    create(base?: DeepPartial<SendPasswordlessRegistrationResponse>): SendPasswordlessRegistrationResponse;
    fromPartial(object: DeepPartial<SendPasswordlessRegistrationResponse>): SendPasswordlessRegistrationResponse;
};
export declare const RemoveHumanPasswordlessRequest: {
    encode(message: RemoveHumanPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanPasswordlessRequest;
    fromJSON(object: any): RemoveHumanPasswordlessRequest;
    toJSON(message: RemoveHumanPasswordlessRequest): unknown;
    create(base?: DeepPartial<RemoveHumanPasswordlessRequest>): RemoveHumanPasswordlessRequest;
    fromPartial(object: DeepPartial<RemoveHumanPasswordlessRequest>): RemoveHumanPasswordlessRequest;
};
export declare const RemoveHumanPasswordlessResponse: {
    encode(message: RemoveHumanPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanPasswordlessResponse;
    fromJSON(object: any): RemoveHumanPasswordlessResponse;
    toJSON(message: RemoveHumanPasswordlessResponse): unknown;
    create(base?: DeepPartial<RemoveHumanPasswordlessResponse>): RemoveHumanPasswordlessResponse;
    fromPartial(object: DeepPartial<RemoveHumanPasswordlessResponse>): RemoveHumanPasswordlessResponse;
};
export declare const UpdateMachineRequest: {
    encode(message: UpdateMachineRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMachineRequest;
    fromJSON(object: any): UpdateMachineRequest;
    toJSON(message: UpdateMachineRequest): unknown;
    create(base?: DeepPartial<UpdateMachineRequest>): UpdateMachineRequest;
    fromPartial(object: DeepPartial<UpdateMachineRequest>): UpdateMachineRequest;
};
export declare const UpdateMachineResponse: {
    encode(message: UpdateMachineResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMachineResponse;
    fromJSON(object: any): UpdateMachineResponse;
    toJSON(message: UpdateMachineResponse): unknown;
    create(base?: DeepPartial<UpdateMachineResponse>): UpdateMachineResponse;
    fromPartial(object: DeepPartial<UpdateMachineResponse>): UpdateMachineResponse;
};
export declare const GenerateMachineSecretRequest: {
    encode(message: GenerateMachineSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateMachineSecretRequest;
    fromJSON(object: any): GenerateMachineSecretRequest;
    toJSON(message: GenerateMachineSecretRequest): unknown;
    create(base?: DeepPartial<GenerateMachineSecretRequest>): GenerateMachineSecretRequest;
    fromPartial(object: DeepPartial<GenerateMachineSecretRequest>): GenerateMachineSecretRequest;
};
export declare const GenerateMachineSecretResponse: {
    encode(message: GenerateMachineSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateMachineSecretResponse;
    fromJSON(object: any): GenerateMachineSecretResponse;
    toJSON(message: GenerateMachineSecretResponse): unknown;
    create(base?: DeepPartial<GenerateMachineSecretResponse>): GenerateMachineSecretResponse;
    fromPartial(object: DeepPartial<GenerateMachineSecretResponse>): GenerateMachineSecretResponse;
};
export declare const RemoveMachineSecretRequest: {
    encode(message: RemoveMachineSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMachineSecretRequest;
    fromJSON(object: any): RemoveMachineSecretRequest;
    toJSON(message: RemoveMachineSecretRequest): unknown;
    create(base?: DeepPartial<RemoveMachineSecretRequest>): RemoveMachineSecretRequest;
    fromPartial(object: DeepPartial<RemoveMachineSecretRequest>): RemoveMachineSecretRequest;
};
export declare const RemoveMachineSecretResponse: {
    encode(message: RemoveMachineSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMachineSecretResponse;
    fromJSON(object: any): RemoveMachineSecretResponse;
    toJSON(message: RemoveMachineSecretResponse): unknown;
    create(base?: DeepPartial<RemoveMachineSecretResponse>): RemoveMachineSecretResponse;
    fromPartial(object: DeepPartial<RemoveMachineSecretResponse>): RemoveMachineSecretResponse;
};
export declare const GetMachineKeyByIDsRequest: {
    encode(message: GetMachineKeyByIDsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMachineKeyByIDsRequest;
    fromJSON(object: any): GetMachineKeyByIDsRequest;
    toJSON(message: GetMachineKeyByIDsRequest): unknown;
    create(base?: DeepPartial<GetMachineKeyByIDsRequest>): GetMachineKeyByIDsRequest;
    fromPartial(object: DeepPartial<GetMachineKeyByIDsRequest>): GetMachineKeyByIDsRequest;
};
export declare const GetMachineKeyByIDsResponse: {
    encode(message: GetMachineKeyByIDsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMachineKeyByIDsResponse;
    fromJSON(object: any): GetMachineKeyByIDsResponse;
    toJSON(message: GetMachineKeyByIDsResponse): unknown;
    create(base?: DeepPartial<GetMachineKeyByIDsResponse>): GetMachineKeyByIDsResponse;
    fromPartial(object: DeepPartial<GetMachineKeyByIDsResponse>): GetMachineKeyByIDsResponse;
};
export declare const ListMachineKeysRequest: {
    encode(message: ListMachineKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMachineKeysRequest;
    fromJSON(object: any): ListMachineKeysRequest;
    toJSON(message: ListMachineKeysRequest): unknown;
    create(base?: DeepPartial<ListMachineKeysRequest>): ListMachineKeysRequest;
    fromPartial(object: DeepPartial<ListMachineKeysRequest>): ListMachineKeysRequest;
};
export declare const ListMachineKeysResponse: {
    encode(message: ListMachineKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMachineKeysResponse;
    fromJSON(object: any): ListMachineKeysResponse;
    toJSON(message: ListMachineKeysResponse): unknown;
    create(base?: DeepPartial<ListMachineKeysResponse>): ListMachineKeysResponse;
    fromPartial(object: DeepPartial<ListMachineKeysResponse>): ListMachineKeysResponse;
};
export declare const AddMachineKeyRequest: {
    encode(message: AddMachineKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMachineKeyRequest;
    fromJSON(object: any): AddMachineKeyRequest;
    toJSON(message: AddMachineKeyRequest): unknown;
    create(base?: DeepPartial<AddMachineKeyRequest>): AddMachineKeyRequest;
    fromPartial(object: DeepPartial<AddMachineKeyRequest>): AddMachineKeyRequest;
};
export declare const AddMachineKeyResponse: {
    encode(message: AddMachineKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMachineKeyResponse;
    fromJSON(object: any): AddMachineKeyResponse;
    toJSON(message: AddMachineKeyResponse): unknown;
    create(base?: DeepPartial<AddMachineKeyResponse>): AddMachineKeyResponse;
    fromPartial(object: DeepPartial<AddMachineKeyResponse>): AddMachineKeyResponse;
};
export declare const RemoveMachineKeyRequest: {
    encode(message: RemoveMachineKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMachineKeyRequest;
    fromJSON(object: any): RemoveMachineKeyRequest;
    toJSON(message: RemoveMachineKeyRequest): unknown;
    create(base?: DeepPartial<RemoveMachineKeyRequest>): RemoveMachineKeyRequest;
    fromPartial(object: DeepPartial<RemoveMachineKeyRequest>): RemoveMachineKeyRequest;
};
export declare const RemoveMachineKeyResponse: {
    encode(message: RemoveMachineKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMachineKeyResponse;
    fromJSON(object: any): RemoveMachineKeyResponse;
    toJSON(message: RemoveMachineKeyResponse): unknown;
    create(base?: DeepPartial<RemoveMachineKeyResponse>): RemoveMachineKeyResponse;
    fromPartial(object: DeepPartial<RemoveMachineKeyResponse>): RemoveMachineKeyResponse;
};
export declare const GetPersonalAccessTokenByIDsRequest: {
    encode(message: GetPersonalAccessTokenByIDsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPersonalAccessTokenByIDsRequest;
    fromJSON(object: any): GetPersonalAccessTokenByIDsRequest;
    toJSON(message: GetPersonalAccessTokenByIDsRequest): unknown;
    create(base?: DeepPartial<GetPersonalAccessTokenByIDsRequest>): GetPersonalAccessTokenByIDsRequest;
    fromPartial(object: DeepPartial<GetPersonalAccessTokenByIDsRequest>): GetPersonalAccessTokenByIDsRequest;
};
export declare const GetPersonalAccessTokenByIDsResponse: {
    encode(message: GetPersonalAccessTokenByIDsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPersonalAccessTokenByIDsResponse;
    fromJSON(object: any): GetPersonalAccessTokenByIDsResponse;
    toJSON(message: GetPersonalAccessTokenByIDsResponse): unknown;
    create(base?: DeepPartial<GetPersonalAccessTokenByIDsResponse>): GetPersonalAccessTokenByIDsResponse;
    fromPartial(object: DeepPartial<GetPersonalAccessTokenByIDsResponse>): GetPersonalAccessTokenByIDsResponse;
};
export declare const ListPersonalAccessTokensRequest: {
    encode(message: ListPersonalAccessTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPersonalAccessTokensRequest;
    fromJSON(object: any): ListPersonalAccessTokensRequest;
    toJSON(message: ListPersonalAccessTokensRequest): unknown;
    create(base?: DeepPartial<ListPersonalAccessTokensRequest>): ListPersonalAccessTokensRequest;
    fromPartial(object: DeepPartial<ListPersonalAccessTokensRequest>): ListPersonalAccessTokensRequest;
};
export declare const ListPersonalAccessTokensResponse: {
    encode(message: ListPersonalAccessTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPersonalAccessTokensResponse;
    fromJSON(object: any): ListPersonalAccessTokensResponse;
    toJSON(message: ListPersonalAccessTokensResponse): unknown;
    create(base?: DeepPartial<ListPersonalAccessTokensResponse>): ListPersonalAccessTokensResponse;
    fromPartial(object: DeepPartial<ListPersonalAccessTokensResponse>): ListPersonalAccessTokensResponse;
};
export declare const AddPersonalAccessTokenRequest: {
    encode(message: AddPersonalAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddPersonalAccessTokenRequest;
    fromJSON(object: any): AddPersonalAccessTokenRequest;
    toJSON(message: AddPersonalAccessTokenRequest): unknown;
    create(base?: DeepPartial<AddPersonalAccessTokenRequest>): AddPersonalAccessTokenRequest;
    fromPartial(object: DeepPartial<AddPersonalAccessTokenRequest>): AddPersonalAccessTokenRequest;
};
export declare const AddPersonalAccessTokenResponse: {
    encode(message: AddPersonalAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddPersonalAccessTokenResponse;
    fromJSON(object: any): AddPersonalAccessTokenResponse;
    toJSON(message: AddPersonalAccessTokenResponse): unknown;
    create(base?: DeepPartial<AddPersonalAccessTokenResponse>): AddPersonalAccessTokenResponse;
    fromPartial(object: DeepPartial<AddPersonalAccessTokenResponse>): AddPersonalAccessTokenResponse;
};
export declare const RemovePersonalAccessTokenRequest: {
    encode(message: RemovePersonalAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemovePersonalAccessTokenRequest;
    fromJSON(object: any): RemovePersonalAccessTokenRequest;
    toJSON(message: RemovePersonalAccessTokenRequest): unknown;
    create(base?: DeepPartial<RemovePersonalAccessTokenRequest>): RemovePersonalAccessTokenRequest;
    fromPartial(object: DeepPartial<RemovePersonalAccessTokenRequest>): RemovePersonalAccessTokenRequest;
};
export declare const RemovePersonalAccessTokenResponse: {
    encode(message: RemovePersonalAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemovePersonalAccessTokenResponse;
    fromJSON(object: any): RemovePersonalAccessTokenResponse;
    toJSON(message: RemovePersonalAccessTokenResponse): unknown;
    create(base?: DeepPartial<RemovePersonalAccessTokenResponse>): RemovePersonalAccessTokenResponse;
    fromPartial(object: DeepPartial<RemovePersonalAccessTokenResponse>): RemovePersonalAccessTokenResponse;
};
export declare const ListHumanLinkedIDPsRequest: {
    encode(message: ListHumanLinkedIDPsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanLinkedIDPsRequest;
    fromJSON(object: any): ListHumanLinkedIDPsRequest;
    toJSON(message: ListHumanLinkedIDPsRequest): unknown;
    create(base?: DeepPartial<ListHumanLinkedIDPsRequest>): ListHumanLinkedIDPsRequest;
    fromPartial(object: DeepPartial<ListHumanLinkedIDPsRequest>): ListHumanLinkedIDPsRequest;
};
export declare const ListHumanLinkedIDPsResponse: {
    encode(message: ListHumanLinkedIDPsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanLinkedIDPsResponse;
    fromJSON(object: any): ListHumanLinkedIDPsResponse;
    toJSON(message: ListHumanLinkedIDPsResponse): unknown;
    create(base?: DeepPartial<ListHumanLinkedIDPsResponse>): ListHumanLinkedIDPsResponse;
    fromPartial(object: DeepPartial<ListHumanLinkedIDPsResponse>): ListHumanLinkedIDPsResponse;
};
export declare const RemoveHumanLinkedIDPRequest: {
    encode(message: RemoveHumanLinkedIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanLinkedIDPRequest;
    fromJSON(object: any): RemoveHumanLinkedIDPRequest;
    toJSON(message: RemoveHumanLinkedIDPRequest): unknown;
    create(base?: DeepPartial<RemoveHumanLinkedIDPRequest>): RemoveHumanLinkedIDPRequest;
    fromPartial(object: DeepPartial<RemoveHumanLinkedIDPRequest>): RemoveHumanLinkedIDPRequest;
};
export declare const RemoveHumanLinkedIDPResponse: {
    encode(message: RemoveHumanLinkedIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanLinkedIDPResponse;
    fromJSON(object: any): RemoveHumanLinkedIDPResponse;
    toJSON(message: RemoveHumanLinkedIDPResponse): unknown;
    create(base?: DeepPartial<RemoveHumanLinkedIDPResponse>): RemoveHumanLinkedIDPResponse;
    fromPartial(object: DeepPartial<RemoveHumanLinkedIDPResponse>): RemoveHumanLinkedIDPResponse;
};
export declare const ListUserMembershipsRequest: {
    encode(message: ListUserMembershipsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserMembershipsRequest;
    fromJSON(object: any): ListUserMembershipsRequest;
    toJSON(message: ListUserMembershipsRequest): unknown;
    create(base?: DeepPartial<ListUserMembershipsRequest>): ListUserMembershipsRequest;
    fromPartial(object: DeepPartial<ListUserMembershipsRequest>): ListUserMembershipsRequest;
};
export declare const ListUserMembershipsResponse: {
    encode(message: ListUserMembershipsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserMembershipsResponse;
    fromJSON(object: any): ListUserMembershipsResponse;
    toJSON(message: ListUserMembershipsResponse): unknown;
    create(base?: DeepPartial<ListUserMembershipsResponse>): ListUserMembershipsResponse;
    fromPartial(object: DeepPartial<ListUserMembershipsResponse>): ListUserMembershipsResponse;
};
export declare const GetMyOrgRequest: {
    encode(_: GetMyOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyOrgRequest;
    fromJSON(_: any): GetMyOrgRequest;
    toJSON(_: GetMyOrgRequest): unknown;
    create(base?: DeepPartial<GetMyOrgRequest>): GetMyOrgRequest;
    fromPartial(_: DeepPartial<GetMyOrgRequest>): GetMyOrgRequest;
};
export declare const GetMyOrgResponse: {
    encode(message: GetMyOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyOrgResponse;
    fromJSON(object: any): GetMyOrgResponse;
    toJSON(message: GetMyOrgResponse): unknown;
    create(base?: DeepPartial<GetMyOrgResponse>): GetMyOrgResponse;
    fromPartial(object: DeepPartial<GetMyOrgResponse>): GetMyOrgResponse;
};
export declare const GetOrgByDomainGlobalRequest: {
    encode(message: GetOrgByDomainGlobalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgByDomainGlobalRequest;
    fromJSON(object: any): GetOrgByDomainGlobalRequest;
    toJSON(message: GetOrgByDomainGlobalRequest): unknown;
    create(base?: DeepPartial<GetOrgByDomainGlobalRequest>): GetOrgByDomainGlobalRequest;
    fromPartial(object: DeepPartial<GetOrgByDomainGlobalRequest>): GetOrgByDomainGlobalRequest;
};
export declare const ListOrgChangesRequest: {
    encode(message: ListOrgChangesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgChangesRequest;
    fromJSON(object: any): ListOrgChangesRequest;
    toJSON(message: ListOrgChangesRequest): unknown;
    create(base?: DeepPartial<ListOrgChangesRequest>): ListOrgChangesRequest;
    fromPartial(object: DeepPartial<ListOrgChangesRequest>): ListOrgChangesRequest;
};
export declare const ListOrgChangesResponse: {
    encode(message: ListOrgChangesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgChangesResponse;
    fromJSON(object: any): ListOrgChangesResponse;
    toJSON(message: ListOrgChangesResponse): unknown;
    create(base?: DeepPartial<ListOrgChangesResponse>): ListOrgChangesResponse;
    fromPartial(object: DeepPartial<ListOrgChangesResponse>): ListOrgChangesResponse;
};
export declare const GetOrgByDomainGlobalResponse: {
    encode(message: GetOrgByDomainGlobalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgByDomainGlobalResponse;
    fromJSON(object: any): GetOrgByDomainGlobalResponse;
    toJSON(message: GetOrgByDomainGlobalResponse): unknown;
    create(base?: DeepPartial<GetOrgByDomainGlobalResponse>): GetOrgByDomainGlobalResponse;
    fromPartial(object: DeepPartial<GetOrgByDomainGlobalResponse>): GetOrgByDomainGlobalResponse;
};
export declare const AddOrgRequest: {
    encode(message: AddOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgRequest;
    fromJSON(object: any): AddOrgRequest;
    toJSON(message: AddOrgRequest): unknown;
    create(base?: DeepPartial<AddOrgRequest>): AddOrgRequest;
    fromPartial(object: DeepPartial<AddOrgRequest>): AddOrgRequest;
};
export declare const AddOrgResponse: {
    encode(message: AddOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgResponse;
    fromJSON(object: any): AddOrgResponse;
    toJSON(message: AddOrgResponse): unknown;
    create(base?: DeepPartial<AddOrgResponse>): AddOrgResponse;
    fromPartial(object: DeepPartial<AddOrgResponse>): AddOrgResponse;
};
export declare const UpdateOrgRequest: {
    encode(message: UpdateOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgRequest;
    fromJSON(object: any): UpdateOrgRequest;
    toJSON(message: UpdateOrgRequest): unknown;
    create(base?: DeepPartial<UpdateOrgRequest>): UpdateOrgRequest;
    fromPartial(object: DeepPartial<UpdateOrgRequest>): UpdateOrgRequest;
};
export declare const UpdateOrgResponse: {
    encode(message: UpdateOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgResponse;
    fromJSON(object: any): UpdateOrgResponse;
    toJSON(message: UpdateOrgResponse): unknown;
    create(base?: DeepPartial<UpdateOrgResponse>): UpdateOrgResponse;
    fromPartial(object: DeepPartial<UpdateOrgResponse>): UpdateOrgResponse;
};
export declare const DeactivateOrgRequest: {
    encode(_: DeactivateOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateOrgRequest;
    fromJSON(_: any): DeactivateOrgRequest;
    toJSON(_: DeactivateOrgRequest): unknown;
    create(base?: DeepPartial<DeactivateOrgRequest>): DeactivateOrgRequest;
    fromPartial(_: DeepPartial<DeactivateOrgRequest>): DeactivateOrgRequest;
};
export declare const DeactivateOrgResponse: {
    encode(message: DeactivateOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateOrgResponse;
    fromJSON(object: any): DeactivateOrgResponse;
    toJSON(message: DeactivateOrgResponse): unknown;
    create(base?: DeepPartial<DeactivateOrgResponse>): DeactivateOrgResponse;
    fromPartial(object: DeepPartial<DeactivateOrgResponse>): DeactivateOrgResponse;
};
export declare const ReactivateOrgRequest: {
    encode(_: ReactivateOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateOrgRequest;
    fromJSON(_: any): ReactivateOrgRequest;
    toJSON(_: ReactivateOrgRequest): unknown;
    create(base?: DeepPartial<ReactivateOrgRequest>): ReactivateOrgRequest;
    fromPartial(_: DeepPartial<ReactivateOrgRequest>): ReactivateOrgRequest;
};
export declare const ReactivateOrgResponse: {
    encode(message: ReactivateOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateOrgResponse;
    fromJSON(object: any): ReactivateOrgResponse;
    toJSON(message: ReactivateOrgResponse): unknown;
    create(base?: DeepPartial<ReactivateOrgResponse>): ReactivateOrgResponse;
    fromPartial(object: DeepPartial<ReactivateOrgResponse>): ReactivateOrgResponse;
};
export declare const RemoveOrgRequest: {
    encode(_: RemoveOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgRequest;
    fromJSON(_: any): RemoveOrgRequest;
    toJSON(_: RemoveOrgRequest): unknown;
    create(base?: DeepPartial<RemoveOrgRequest>): RemoveOrgRequest;
    fromPartial(_: DeepPartial<RemoveOrgRequest>): RemoveOrgRequest;
};
export declare const RemoveOrgResponse: {
    encode(message: RemoveOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgResponse;
    fromJSON(object: any): RemoveOrgResponse;
    toJSON(message: RemoveOrgResponse): unknown;
    create(base?: DeepPartial<RemoveOrgResponse>): RemoveOrgResponse;
    fromPartial(object: DeepPartial<RemoveOrgResponse>): RemoveOrgResponse;
};
export declare const ListOrgDomainsRequest: {
    encode(message: ListOrgDomainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgDomainsRequest;
    fromJSON(object: any): ListOrgDomainsRequest;
    toJSON(message: ListOrgDomainsRequest): unknown;
    create(base?: DeepPartial<ListOrgDomainsRequest>): ListOrgDomainsRequest;
    fromPartial(object: DeepPartial<ListOrgDomainsRequest>): ListOrgDomainsRequest;
};
export declare const ListOrgDomainsResponse: {
    encode(message: ListOrgDomainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgDomainsResponse;
    fromJSON(object: any): ListOrgDomainsResponse;
    toJSON(message: ListOrgDomainsResponse): unknown;
    create(base?: DeepPartial<ListOrgDomainsResponse>): ListOrgDomainsResponse;
    fromPartial(object: DeepPartial<ListOrgDomainsResponse>): ListOrgDomainsResponse;
};
export declare const AddOrgDomainRequest: {
    encode(message: AddOrgDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgDomainRequest;
    fromJSON(object: any): AddOrgDomainRequest;
    toJSON(message: AddOrgDomainRequest): unknown;
    create(base?: DeepPartial<AddOrgDomainRequest>): AddOrgDomainRequest;
    fromPartial(object: DeepPartial<AddOrgDomainRequest>): AddOrgDomainRequest;
};
export declare const AddOrgDomainResponse: {
    encode(message: AddOrgDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgDomainResponse;
    fromJSON(object: any): AddOrgDomainResponse;
    toJSON(message: AddOrgDomainResponse): unknown;
    create(base?: DeepPartial<AddOrgDomainResponse>): AddOrgDomainResponse;
    fromPartial(object: DeepPartial<AddOrgDomainResponse>): AddOrgDomainResponse;
};
export declare const RemoveOrgDomainRequest: {
    encode(message: RemoveOrgDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgDomainRequest;
    fromJSON(object: any): RemoveOrgDomainRequest;
    toJSON(message: RemoveOrgDomainRequest): unknown;
    create(base?: DeepPartial<RemoveOrgDomainRequest>): RemoveOrgDomainRequest;
    fromPartial(object: DeepPartial<RemoveOrgDomainRequest>): RemoveOrgDomainRequest;
};
export declare const RemoveOrgDomainResponse: {
    encode(message: RemoveOrgDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgDomainResponse;
    fromJSON(object: any): RemoveOrgDomainResponse;
    toJSON(message: RemoveOrgDomainResponse): unknown;
    create(base?: DeepPartial<RemoveOrgDomainResponse>): RemoveOrgDomainResponse;
    fromPartial(object: DeepPartial<RemoveOrgDomainResponse>): RemoveOrgDomainResponse;
};
export declare const GenerateOrgDomainValidationRequest: {
    encode(message: GenerateOrgDomainValidationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateOrgDomainValidationRequest;
    fromJSON(object: any): GenerateOrgDomainValidationRequest;
    toJSON(message: GenerateOrgDomainValidationRequest): unknown;
    create(base?: DeepPartial<GenerateOrgDomainValidationRequest>): GenerateOrgDomainValidationRequest;
    fromPartial(object: DeepPartial<GenerateOrgDomainValidationRequest>): GenerateOrgDomainValidationRequest;
};
export declare const GenerateOrgDomainValidationResponse: {
    encode(message: GenerateOrgDomainValidationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateOrgDomainValidationResponse;
    fromJSON(object: any): GenerateOrgDomainValidationResponse;
    toJSON(message: GenerateOrgDomainValidationResponse): unknown;
    create(base?: DeepPartial<GenerateOrgDomainValidationResponse>): GenerateOrgDomainValidationResponse;
    fromPartial(object: DeepPartial<GenerateOrgDomainValidationResponse>): GenerateOrgDomainValidationResponse;
};
export declare const ValidateOrgDomainRequest: {
    encode(message: ValidateOrgDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateOrgDomainRequest;
    fromJSON(object: any): ValidateOrgDomainRequest;
    toJSON(message: ValidateOrgDomainRequest): unknown;
    create(base?: DeepPartial<ValidateOrgDomainRequest>): ValidateOrgDomainRequest;
    fromPartial(object: DeepPartial<ValidateOrgDomainRequest>): ValidateOrgDomainRequest;
};
export declare const ValidateOrgDomainResponse: {
    encode(message: ValidateOrgDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidateOrgDomainResponse;
    fromJSON(object: any): ValidateOrgDomainResponse;
    toJSON(message: ValidateOrgDomainResponse): unknown;
    create(base?: DeepPartial<ValidateOrgDomainResponse>): ValidateOrgDomainResponse;
    fromPartial(object: DeepPartial<ValidateOrgDomainResponse>): ValidateOrgDomainResponse;
};
export declare const SetPrimaryOrgDomainRequest: {
    encode(message: SetPrimaryOrgDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryOrgDomainRequest;
    fromJSON(object: any): SetPrimaryOrgDomainRequest;
    toJSON(message: SetPrimaryOrgDomainRequest): unknown;
    create(base?: DeepPartial<SetPrimaryOrgDomainRequest>): SetPrimaryOrgDomainRequest;
    fromPartial(object: DeepPartial<SetPrimaryOrgDomainRequest>): SetPrimaryOrgDomainRequest;
};
export declare const SetPrimaryOrgDomainResponse: {
    encode(message: SetPrimaryOrgDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryOrgDomainResponse;
    fromJSON(object: any): SetPrimaryOrgDomainResponse;
    toJSON(message: SetPrimaryOrgDomainResponse): unknown;
    create(base?: DeepPartial<SetPrimaryOrgDomainResponse>): SetPrimaryOrgDomainResponse;
    fromPartial(object: DeepPartial<SetPrimaryOrgDomainResponse>): SetPrimaryOrgDomainResponse;
};
export declare const ListOrgMemberRolesRequest: {
    encode(_: ListOrgMemberRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMemberRolesRequest;
    fromJSON(_: any): ListOrgMemberRolesRequest;
    toJSON(_: ListOrgMemberRolesRequest): unknown;
    create(base?: DeepPartial<ListOrgMemberRolesRequest>): ListOrgMemberRolesRequest;
    fromPartial(_: DeepPartial<ListOrgMemberRolesRequest>): ListOrgMemberRolesRequest;
};
export declare const ListOrgMemberRolesResponse: {
    encode(message: ListOrgMemberRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMemberRolesResponse;
    fromJSON(object: any): ListOrgMemberRolesResponse;
    toJSON(message: ListOrgMemberRolesResponse): unknown;
    create(base?: DeepPartial<ListOrgMemberRolesResponse>): ListOrgMemberRolesResponse;
    fromPartial(object: DeepPartial<ListOrgMemberRolesResponse>): ListOrgMemberRolesResponse;
};
export declare const ListOrgMembersRequest: {
    encode(message: ListOrgMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMembersRequest;
    fromJSON(object: any): ListOrgMembersRequest;
    toJSON(message: ListOrgMembersRequest): unknown;
    create(base?: DeepPartial<ListOrgMembersRequest>): ListOrgMembersRequest;
    fromPartial(object: DeepPartial<ListOrgMembersRequest>): ListOrgMembersRequest;
};
export declare const ListOrgMembersResponse: {
    encode(message: ListOrgMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMembersResponse;
    fromJSON(object: any): ListOrgMembersResponse;
    toJSON(message: ListOrgMembersResponse): unknown;
    create(base?: DeepPartial<ListOrgMembersResponse>): ListOrgMembersResponse;
    fromPartial(object: DeepPartial<ListOrgMembersResponse>): ListOrgMembersResponse;
};
export declare const AddOrgMemberRequest: {
    encode(message: AddOrgMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgMemberRequest;
    fromJSON(object: any): AddOrgMemberRequest;
    toJSON(message: AddOrgMemberRequest): unknown;
    create(base?: DeepPartial<AddOrgMemberRequest>): AddOrgMemberRequest;
    fromPartial(object: DeepPartial<AddOrgMemberRequest>): AddOrgMemberRequest;
};
export declare const AddOrgMemberResponse: {
    encode(message: AddOrgMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgMemberResponse;
    fromJSON(object: any): AddOrgMemberResponse;
    toJSON(message: AddOrgMemberResponse): unknown;
    create(base?: DeepPartial<AddOrgMemberResponse>): AddOrgMemberResponse;
    fromPartial(object: DeepPartial<AddOrgMemberResponse>): AddOrgMemberResponse;
};
export declare const UpdateOrgMemberRequest: {
    encode(message: UpdateOrgMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgMemberRequest;
    fromJSON(object: any): UpdateOrgMemberRequest;
    toJSON(message: UpdateOrgMemberRequest): unknown;
    create(base?: DeepPartial<UpdateOrgMemberRequest>): UpdateOrgMemberRequest;
    fromPartial(object: DeepPartial<UpdateOrgMemberRequest>): UpdateOrgMemberRequest;
};
export declare const UpdateOrgMemberResponse: {
    encode(message: UpdateOrgMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgMemberResponse;
    fromJSON(object: any): UpdateOrgMemberResponse;
    toJSON(message: UpdateOrgMemberResponse): unknown;
    create(base?: DeepPartial<UpdateOrgMemberResponse>): UpdateOrgMemberResponse;
    fromPartial(object: DeepPartial<UpdateOrgMemberResponse>): UpdateOrgMemberResponse;
};
export declare const RemoveOrgMemberRequest: {
    encode(message: RemoveOrgMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgMemberRequest;
    fromJSON(object: any): RemoveOrgMemberRequest;
    toJSON(message: RemoveOrgMemberRequest): unknown;
    create(base?: DeepPartial<RemoveOrgMemberRequest>): RemoveOrgMemberRequest;
    fromPartial(object: DeepPartial<RemoveOrgMemberRequest>): RemoveOrgMemberRequest;
};
export declare const RemoveOrgMemberResponse: {
    encode(message: RemoveOrgMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgMemberResponse;
    fromJSON(object: any): RemoveOrgMemberResponse;
    toJSON(message: RemoveOrgMemberResponse): unknown;
    create(base?: DeepPartial<RemoveOrgMemberResponse>): RemoveOrgMemberResponse;
    fromPartial(object: DeepPartial<RemoveOrgMemberResponse>): RemoveOrgMemberResponse;
};
export declare const ListOrgMetadataRequest: {
    encode(message: ListOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMetadataRequest;
    fromJSON(object: any): ListOrgMetadataRequest;
    toJSON(message: ListOrgMetadataRequest): unknown;
    create(base?: DeepPartial<ListOrgMetadataRequest>): ListOrgMetadataRequest;
    fromPartial(object: DeepPartial<ListOrgMetadataRequest>): ListOrgMetadataRequest;
};
export declare const ListOrgMetadataResponse: {
    encode(message: ListOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMetadataResponse;
    fromJSON(object: any): ListOrgMetadataResponse;
    toJSON(message: ListOrgMetadataResponse): unknown;
    create(base?: DeepPartial<ListOrgMetadataResponse>): ListOrgMetadataResponse;
    fromPartial(object: DeepPartial<ListOrgMetadataResponse>): ListOrgMetadataResponse;
};
export declare const GetOrgMetadataRequest: {
    encode(message: GetOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgMetadataRequest;
    fromJSON(object: any): GetOrgMetadataRequest;
    toJSON(message: GetOrgMetadataRequest): unknown;
    create(base?: DeepPartial<GetOrgMetadataRequest>): GetOrgMetadataRequest;
    fromPartial(object: DeepPartial<GetOrgMetadataRequest>): GetOrgMetadataRequest;
};
export declare const GetOrgMetadataResponse: {
    encode(message: GetOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgMetadataResponse;
    fromJSON(object: any): GetOrgMetadataResponse;
    toJSON(message: GetOrgMetadataResponse): unknown;
    create(base?: DeepPartial<GetOrgMetadataResponse>): GetOrgMetadataResponse;
    fromPartial(object: DeepPartial<GetOrgMetadataResponse>): GetOrgMetadataResponse;
};
export declare const SetOrgMetadataRequest: {
    encode(message: SetOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetOrgMetadataRequest;
    fromJSON(object: any): SetOrgMetadataRequest;
    toJSON(message: SetOrgMetadataRequest): unknown;
    create(base?: DeepPartial<SetOrgMetadataRequest>): SetOrgMetadataRequest;
    fromPartial(object: DeepPartial<SetOrgMetadataRequest>): SetOrgMetadataRequest;
};
export declare const SetOrgMetadataResponse: {
    encode(message: SetOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetOrgMetadataResponse;
    fromJSON(object: any): SetOrgMetadataResponse;
    toJSON(message: SetOrgMetadataResponse): unknown;
    create(base?: DeepPartial<SetOrgMetadataResponse>): SetOrgMetadataResponse;
    fromPartial(object: DeepPartial<SetOrgMetadataResponse>): SetOrgMetadataResponse;
};
export declare const BulkSetOrgMetadataRequest: {
    encode(message: BulkSetOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetOrgMetadataRequest;
    fromJSON(object: any): BulkSetOrgMetadataRequest;
    toJSON(message: BulkSetOrgMetadataRequest): unknown;
    create(base?: DeepPartial<BulkSetOrgMetadataRequest>): BulkSetOrgMetadataRequest;
    fromPartial(object: DeepPartial<BulkSetOrgMetadataRequest>): BulkSetOrgMetadataRequest;
};
export declare const BulkSetOrgMetadataRequest_Metadata: {
    encode(message: BulkSetOrgMetadataRequest_Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetOrgMetadataRequest_Metadata;
    fromJSON(object: any): BulkSetOrgMetadataRequest_Metadata;
    toJSON(message: BulkSetOrgMetadataRequest_Metadata): unknown;
    create(base?: DeepPartial<BulkSetOrgMetadataRequest_Metadata>): BulkSetOrgMetadataRequest_Metadata;
    fromPartial(object: DeepPartial<BulkSetOrgMetadataRequest_Metadata>): BulkSetOrgMetadataRequest_Metadata;
};
export declare const BulkSetOrgMetadataResponse: {
    encode(message: BulkSetOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetOrgMetadataResponse;
    fromJSON(object: any): BulkSetOrgMetadataResponse;
    toJSON(message: BulkSetOrgMetadataResponse): unknown;
    create(base?: DeepPartial<BulkSetOrgMetadataResponse>): BulkSetOrgMetadataResponse;
    fromPartial(object: DeepPartial<BulkSetOrgMetadataResponse>): BulkSetOrgMetadataResponse;
};
export declare const RemoveOrgMetadataRequest: {
    encode(message: RemoveOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgMetadataRequest;
    fromJSON(object: any): RemoveOrgMetadataRequest;
    toJSON(message: RemoveOrgMetadataRequest): unknown;
    create(base?: DeepPartial<RemoveOrgMetadataRequest>): RemoveOrgMetadataRequest;
    fromPartial(object: DeepPartial<RemoveOrgMetadataRequest>): RemoveOrgMetadataRequest;
};
export declare const RemoveOrgMetadataResponse: {
    encode(message: RemoveOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgMetadataResponse;
    fromJSON(object: any): RemoveOrgMetadataResponse;
    toJSON(message: RemoveOrgMetadataResponse): unknown;
    create(base?: DeepPartial<RemoveOrgMetadataResponse>): RemoveOrgMetadataResponse;
    fromPartial(object: DeepPartial<RemoveOrgMetadataResponse>): RemoveOrgMetadataResponse;
};
export declare const BulkRemoveOrgMetadataRequest: {
    encode(message: BulkRemoveOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveOrgMetadataRequest;
    fromJSON(object: any): BulkRemoveOrgMetadataRequest;
    toJSON(message: BulkRemoveOrgMetadataRequest): unknown;
    create(base?: DeepPartial<BulkRemoveOrgMetadataRequest>): BulkRemoveOrgMetadataRequest;
    fromPartial(object: DeepPartial<BulkRemoveOrgMetadataRequest>): BulkRemoveOrgMetadataRequest;
};
export declare const BulkRemoveOrgMetadataResponse: {
    encode(message: BulkRemoveOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveOrgMetadataResponse;
    fromJSON(object: any): BulkRemoveOrgMetadataResponse;
    toJSON(message: BulkRemoveOrgMetadataResponse): unknown;
    create(base?: DeepPartial<BulkRemoveOrgMetadataResponse>): BulkRemoveOrgMetadataResponse;
    fromPartial(object: DeepPartial<BulkRemoveOrgMetadataResponse>): BulkRemoveOrgMetadataResponse;
};
export declare const GetProjectByIDRequest: {
    encode(message: GetProjectByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectByIDRequest;
    fromJSON(object: any): GetProjectByIDRequest;
    toJSON(message: GetProjectByIDRequest): unknown;
    create(base?: DeepPartial<GetProjectByIDRequest>): GetProjectByIDRequest;
    fromPartial(object: DeepPartial<GetProjectByIDRequest>): GetProjectByIDRequest;
};
export declare const GetProjectByIDResponse: {
    encode(message: GetProjectByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectByIDResponse;
    fromJSON(object: any): GetProjectByIDResponse;
    toJSON(message: GetProjectByIDResponse): unknown;
    create(base?: DeepPartial<GetProjectByIDResponse>): GetProjectByIDResponse;
    fromPartial(object: DeepPartial<GetProjectByIDResponse>): GetProjectByIDResponse;
};
export declare const GetGrantedProjectByIDRequest: {
    encode(message: GetGrantedProjectByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGrantedProjectByIDRequest;
    fromJSON(object: any): GetGrantedProjectByIDRequest;
    toJSON(message: GetGrantedProjectByIDRequest): unknown;
    create(base?: DeepPartial<GetGrantedProjectByIDRequest>): GetGrantedProjectByIDRequest;
    fromPartial(object: DeepPartial<GetGrantedProjectByIDRequest>): GetGrantedProjectByIDRequest;
};
export declare const GetGrantedProjectByIDResponse: {
    encode(message: GetGrantedProjectByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGrantedProjectByIDResponse;
    fromJSON(object: any): GetGrantedProjectByIDResponse;
    toJSON(message: GetGrantedProjectByIDResponse): unknown;
    create(base?: DeepPartial<GetGrantedProjectByIDResponse>): GetGrantedProjectByIDResponse;
    fromPartial(object: DeepPartial<GetGrantedProjectByIDResponse>): GetGrantedProjectByIDResponse;
};
export declare const ListProjectsRequest: {
    encode(message: ListProjectsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectsRequest;
    fromJSON(object: any): ListProjectsRequest;
    toJSON(message: ListProjectsRequest): unknown;
    create(base?: DeepPartial<ListProjectsRequest>): ListProjectsRequest;
    fromPartial(object: DeepPartial<ListProjectsRequest>): ListProjectsRequest;
};
export declare const ListProjectsResponse: {
    encode(message: ListProjectsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectsResponse;
    fromJSON(object: any): ListProjectsResponse;
    toJSON(message: ListProjectsResponse): unknown;
    create(base?: DeepPartial<ListProjectsResponse>): ListProjectsResponse;
    fromPartial(object: DeepPartial<ListProjectsResponse>): ListProjectsResponse;
};
export declare const ListGrantedProjectsRequest: {
    encode(message: ListGrantedProjectsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGrantedProjectsRequest;
    fromJSON(object: any): ListGrantedProjectsRequest;
    toJSON(message: ListGrantedProjectsRequest): unknown;
    create(base?: DeepPartial<ListGrantedProjectsRequest>): ListGrantedProjectsRequest;
    fromPartial(object: DeepPartial<ListGrantedProjectsRequest>): ListGrantedProjectsRequest;
};
export declare const ListGrantedProjectsResponse: {
    encode(message: ListGrantedProjectsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGrantedProjectsResponse;
    fromJSON(object: any): ListGrantedProjectsResponse;
    toJSON(message: ListGrantedProjectsResponse): unknown;
    create(base?: DeepPartial<ListGrantedProjectsResponse>): ListGrantedProjectsResponse;
    fromPartial(object: DeepPartial<ListGrantedProjectsResponse>): ListGrantedProjectsResponse;
};
export declare const ListProjectChangesRequest: {
    encode(message: ListProjectChangesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectChangesRequest;
    fromJSON(object: any): ListProjectChangesRequest;
    toJSON(message: ListProjectChangesRequest): unknown;
    create(base?: DeepPartial<ListProjectChangesRequest>): ListProjectChangesRequest;
    fromPartial(object: DeepPartial<ListProjectChangesRequest>): ListProjectChangesRequest;
};
export declare const ListProjectChangesResponse: {
    encode(message: ListProjectChangesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectChangesResponse;
    fromJSON(object: any): ListProjectChangesResponse;
    toJSON(message: ListProjectChangesResponse): unknown;
    create(base?: DeepPartial<ListProjectChangesResponse>): ListProjectChangesResponse;
    fromPartial(object: DeepPartial<ListProjectChangesResponse>): ListProjectChangesResponse;
};
export declare const AddProjectRequest: {
    encode(message: AddProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectRequest;
    fromJSON(object: any): AddProjectRequest;
    toJSON(message: AddProjectRequest): unknown;
    create(base?: DeepPartial<AddProjectRequest>): AddProjectRequest;
    fromPartial(object: DeepPartial<AddProjectRequest>): AddProjectRequest;
};
export declare const AddProjectResponse: {
    encode(message: AddProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectResponse;
    fromJSON(object: any): AddProjectResponse;
    toJSON(message: AddProjectResponse): unknown;
    create(base?: DeepPartial<AddProjectResponse>): AddProjectResponse;
    fromPartial(object: DeepPartial<AddProjectResponse>): AddProjectResponse;
};
export declare const UpdateProjectRequest: {
    encode(message: UpdateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRequest;
    fromJSON(object: any): UpdateProjectRequest;
    toJSON(message: UpdateProjectRequest): unknown;
    create(base?: DeepPartial<UpdateProjectRequest>): UpdateProjectRequest;
    fromPartial(object: DeepPartial<UpdateProjectRequest>): UpdateProjectRequest;
};
export declare const UpdateProjectResponse: {
    encode(message: UpdateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectResponse;
    fromJSON(object: any): UpdateProjectResponse;
    toJSON(message: UpdateProjectResponse): unknown;
    create(base?: DeepPartial<UpdateProjectResponse>): UpdateProjectResponse;
    fromPartial(object: DeepPartial<UpdateProjectResponse>): UpdateProjectResponse;
};
export declare const DeactivateProjectRequest: {
    encode(message: DeactivateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProjectRequest;
    fromJSON(object: any): DeactivateProjectRequest;
    toJSON(message: DeactivateProjectRequest): unknown;
    create(base?: DeepPartial<DeactivateProjectRequest>): DeactivateProjectRequest;
    fromPartial(object: DeepPartial<DeactivateProjectRequest>): DeactivateProjectRequest;
};
export declare const DeactivateProjectResponse: {
    encode(message: DeactivateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProjectResponse;
    fromJSON(object: any): DeactivateProjectResponse;
    toJSON(message: DeactivateProjectResponse): unknown;
    create(base?: DeepPartial<DeactivateProjectResponse>): DeactivateProjectResponse;
    fromPartial(object: DeepPartial<DeactivateProjectResponse>): DeactivateProjectResponse;
};
export declare const ReactivateProjectRequest: {
    encode(message: ReactivateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateProjectRequest;
    fromJSON(object: any): ReactivateProjectRequest;
    toJSON(message: ReactivateProjectRequest): unknown;
    create(base?: DeepPartial<ReactivateProjectRequest>): ReactivateProjectRequest;
    fromPartial(object: DeepPartial<ReactivateProjectRequest>): ReactivateProjectRequest;
};
export declare const ReactivateProjectResponse: {
    encode(message: ReactivateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateProjectResponse;
    fromJSON(object: any): ReactivateProjectResponse;
    toJSON(message: ReactivateProjectResponse): unknown;
    create(base?: DeepPartial<ReactivateProjectResponse>): ReactivateProjectResponse;
    fromPartial(object: DeepPartial<ReactivateProjectResponse>): ReactivateProjectResponse;
};
export declare const RemoveProjectRequest: {
    encode(message: RemoveProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectRequest;
    fromJSON(object: any): RemoveProjectRequest;
    toJSON(message: RemoveProjectRequest): unknown;
    create(base?: DeepPartial<RemoveProjectRequest>): RemoveProjectRequest;
    fromPartial(object: DeepPartial<RemoveProjectRequest>): RemoveProjectRequest;
};
export declare const RemoveProjectResponse: {
    encode(message: RemoveProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectResponse;
    fromJSON(object: any): RemoveProjectResponse;
    toJSON(message: RemoveProjectResponse): unknown;
    create(base?: DeepPartial<RemoveProjectResponse>): RemoveProjectResponse;
    fromPartial(object: DeepPartial<RemoveProjectResponse>): RemoveProjectResponse;
};
export declare const ListProjectMemberRolesRequest: {
    encode(_: ListProjectMemberRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectMemberRolesRequest;
    fromJSON(_: any): ListProjectMemberRolesRequest;
    toJSON(_: ListProjectMemberRolesRequest): unknown;
    create(base?: DeepPartial<ListProjectMemberRolesRequest>): ListProjectMemberRolesRequest;
    fromPartial(_: DeepPartial<ListProjectMemberRolesRequest>): ListProjectMemberRolesRequest;
};
export declare const ListProjectMemberRolesResponse: {
    encode(message: ListProjectMemberRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectMemberRolesResponse;
    fromJSON(object: any): ListProjectMemberRolesResponse;
    toJSON(message: ListProjectMemberRolesResponse): unknown;
    create(base?: DeepPartial<ListProjectMemberRolesResponse>): ListProjectMemberRolesResponse;
    fromPartial(object: DeepPartial<ListProjectMemberRolesResponse>): ListProjectMemberRolesResponse;
};
export declare const AddProjectRoleRequest: {
    encode(message: AddProjectRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectRoleRequest;
    fromJSON(object: any): AddProjectRoleRequest;
    toJSON(message: AddProjectRoleRequest): unknown;
    create(base?: DeepPartial<AddProjectRoleRequest>): AddProjectRoleRequest;
    fromPartial(object: DeepPartial<AddProjectRoleRequest>): AddProjectRoleRequest;
};
export declare const AddProjectRoleResponse: {
    encode(message: AddProjectRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectRoleResponse;
    fromJSON(object: any): AddProjectRoleResponse;
    toJSON(message: AddProjectRoleResponse): unknown;
    create(base?: DeepPartial<AddProjectRoleResponse>): AddProjectRoleResponse;
    fromPartial(object: DeepPartial<AddProjectRoleResponse>): AddProjectRoleResponse;
};
export declare const BulkAddProjectRolesRequest: {
    encode(message: BulkAddProjectRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkAddProjectRolesRequest;
    fromJSON(object: any): BulkAddProjectRolesRequest;
    toJSON(message: BulkAddProjectRolesRequest): unknown;
    create(base?: DeepPartial<BulkAddProjectRolesRequest>): BulkAddProjectRolesRequest;
    fromPartial(object: DeepPartial<BulkAddProjectRolesRequest>): BulkAddProjectRolesRequest;
};
export declare const BulkAddProjectRolesRequest_Role: {
    encode(message: BulkAddProjectRolesRequest_Role, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkAddProjectRolesRequest_Role;
    fromJSON(object: any): BulkAddProjectRolesRequest_Role;
    toJSON(message: BulkAddProjectRolesRequest_Role): unknown;
    create(base?: DeepPartial<BulkAddProjectRolesRequest_Role>): BulkAddProjectRolesRequest_Role;
    fromPartial(object: DeepPartial<BulkAddProjectRolesRequest_Role>): BulkAddProjectRolesRequest_Role;
};
export declare const BulkAddProjectRolesResponse: {
    encode(message: BulkAddProjectRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkAddProjectRolesResponse;
    fromJSON(object: any): BulkAddProjectRolesResponse;
    toJSON(message: BulkAddProjectRolesResponse): unknown;
    create(base?: DeepPartial<BulkAddProjectRolesResponse>): BulkAddProjectRolesResponse;
    fromPartial(object: DeepPartial<BulkAddProjectRolesResponse>): BulkAddProjectRolesResponse;
};
export declare const UpdateProjectRoleRequest: {
    encode(message: UpdateProjectRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRoleRequest;
    fromJSON(object: any): UpdateProjectRoleRequest;
    toJSON(message: UpdateProjectRoleRequest): unknown;
    create(base?: DeepPartial<UpdateProjectRoleRequest>): UpdateProjectRoleRequest;
    fromPartial(object: DeepPartial<UpdateProjectRoleRequest>): UpdateProjectRoleRequest;
};
export declare const UpdateProjectRoleResponse: {
    encode(message: UpdateProjectRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRoleResponse;
    fromJSON(object: any): UpdateProjectRoleResponse;
    toJSON(message: UpdateProjectRoleResponse): unknown;
    create(base?: DeepPartial<UpdateProjectRoleResponse>): UpdateProjectRoleResponse;
    fromPartial(object: DeepPartial<UpdateProjectRoleResponse>): UpdateProjectRoleResponse;
};
export declare const RemoveProjectRoleRequest: {
    encode(message: RemoveProjectRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectRoleRequest;
    fromJSON(object: any): RemoveProjectRoleRequest;
    toJSON(message: RemoveProjectRoleRequest): unknown;
    create(base?: DeepPartial<RemoveProjectRoleRequest>): RemoveProjectRoleRequest;
    fromPartial(object: DeepPartial<RemoveProjectRoleRequest>): RemoveProjectRoleRequest;
};
export declare const RemoveProjectRoleResponse: {
    encode(message: RemoveProjectRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectRoleResponse;
    fromJSON(object: any): RemoveProjectRoleResponse;
    toJSON(message: RemoveProjectRoleResponse): unknown;
    create(base?: DeepPartial<RemoveProjectRoleResponse>): RemoveProjectRoleResponse;
    fromPartial(object: DeepPartial<RemoveProjectRoleResponse>): RemoveProjectRoleResponse;
};
export declare const ListProjectRolesRequest: {
    encode(message: ListProjectRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectRolesRequest;
    fromJSON(object: any): ListProjectRolesRequest;
    toJSON(message: ListProjectRolesRequest): unknown;
    create(base?: DeepPartial<ListProjectRolesRequest>): ListProjectRolesRequest;
    fromPartial(object: DeepPartial<ListProjectRolesRequest>): ListProjectRolesRequest;
};
export declare const ListProjectRolesResponse: {
    encode(message: ListProjectRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectRolesResponse;
    fromJSON(object: any): ListProjectRolesResponse;
    toJSON(message: ListProjectRolesResponse): unknown;
    create(base?: DeepPartial<ListProjectRolesResponse>): ListProjectRolesResponse;
    fromPartial(object: DeepPartial<ListProjectRolesResponse>): ListProjectRolesResponse;
};
export declare const ListGrantedProjectRolesRequest: {
    encode(message: ListGrantedProjectRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGrantedProjectRolesRequest;
    fromJSON(object: any): ListGrantedProjectRolesRequest;
    toJSON(message: ListGrantedProjectRolesRequest): unknown;
    create(base?: DeepPartial<ListGrantedProjectRolesRequest>): ListGrantedProjectRolesRequest;
    fromPartial(object: DeepPartial<ListGrantedProjectRolesRequest>): ListGrantedProjectRolesRequest;
};
export declare const ListGrantedProjectRolesResponse: {
    encode(message: ListGrantedProjectRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGrantedProjectRolesResponse;
    fromJSON(object: any): ListGrantedProjectRolesResponse;
    toJSON(message: ListGrantedProjectRolesResponse): unknown;
    create(base?: DeepPartial<ListGrantedProjectRolesResponse>): ListGrantedProjectRolesResponse;
    fromPartial(object: DeepPartial<ListGrantedProjectRolesResponse>): ListGrantedProjectRolesResponse;
};
export declare const ListProjectMembersRequest: {
    encode(message: ListProjectMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectMembersRequest;
    fromJSON(object: any): ListProjectMembersRequest;
    toJSON(message: ListProjectMembersRequest): unknown;
    create(base?: DeepPartial<ListProjectMembersRequest>): ListProjectMembersRequest;
    fromPartial(object: DeepPartial<ListProjectMembersRequest>): ListProjectMembersRequest;
};
export declare const ListProjectMembersResponse: {
    encode(message: ListProjectMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectMembersResponse;
    fromJSON(object: any): ListProjectMembersResponse;
    toJSON(message: ListProjectMembersResponse): unknown;
    create(base?: DeepPartial<ListProjectMembersResponse>): ListProjectMembersResponse;
    fromPartial(object: DeepPartial<ListProjectMembersResponse>): ListProjectMembersResponse;
};
export declare const AddProjectMemberRequest: {
    encode(message: AddProjectMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectMemberRequest;
    fromJSON(object: any): AddProjectMemberRequest;
    toJSON(message: AddProjectMemberRequest): unknown;
    create(base?: DeepPartial<AddProjectMemberRequest>): AddProjectMemberRequest;
    fromPartial(object: DeepPartial<AddProjectMemberRequest>): AddProjectMemberRequest;
};
export declare const AddProjectMemberResponse: {
    encode(message: AddProjectMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectMemberResponse;
    fromJSON(object: any): AddProjectMemberResponse;
    toJSON(message: AddProjectMemberResponse): unknown;
    create(base?: DeepPartial<AddProjectMemberResponse>): AddProjectMemberResponse;
    fromPartial(object: DeepPartial<AddProjectMemberResponse>): AddProjectMemberResponse;
};
export declare const UpdateProjectMemberRequest: {
    encode(message: UpdateProjectMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectMemberRequest;
    fromJSON(object: any): UpdateProjectMemberRequest;
    toJSON(message: UpdateProjectMemberRequest): unknown;
    create(base?: DeepPartial<UpdateProjectMemberRequest>): UpdateProjectMemberRequest;
    fromPartial(object: DeepPartial<UpdateProjectMemberRequest>): UpdateProjectMemberRequest;
};
export declare const UpdateProjectMemberResponse: {
    encode(message: UpdateProjectMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectMemberResponse;
    fromJSON(object: any): UpdateProjectMemberResponse;
    toJSON(message: UpdateProjectMemberResponse): unknown;
    create(base?: DeepPartial<UpdateProjectMemberResponse>): UpdateProjectMemberResponse;
    fromPartial(object: DeepPartial<UpdateProjectMemberResponse>): UpdateProjectMemberResponse;
};
export declare const RemoveProjectMemberRequest: {
    encode(message: RemoveProjectMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectMemberRequest;
    fromJSON(object: any): RemoveProjectMemberRequest;
    toJSON(message: RemoveProjectMemberRequest): unknown;
    create(base?: DeepPartial<RemoveProjectMemberRequest>): RemoveProjectMemberRequest;
    fromPartial(object: DeepPartial<RemoveProjectMemberRequest>): RemoveProjectMemberRequest;
};
export declare const RemoveProjectMemberResponse: {
    encode(message: RemoveProjectMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectMemberResponse;
    fromJSON(object: any): RemoveProjectMemberResponse;
    toJSON(message: RemoveProjectMemberResponse): unknown;
    create(base?: DeepPartial<RemoveProjectMemberResponse>): RemoveProjectMemberResponse;
    fromPartial(object: DeepPartial<RemoveProjectMemberResponse>): RemoveProjectMemberResponse;
};
export declare const GetAppByIDRequest: {
    encode(message: GetAppByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAppByIDRequest;
    fromJSON(object: any): GetAppByIDRequest;
    toJSON(message: GetAppByIDRequest): unknown;
    create(base?: DeepPartial<GetAppByIDRequest>): GetAppByIDRequest;
    fromPartial(object: DeepPartial<GetAppByIDRequest>): GetAppByIDRequest;
};
export declare const GetAppByIDResponse: {
    encode(message: GetAppByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAppByIDResponse;
    fromJSON(object: any): GetAppByIDResponse;
    toJSON(message: GetAppByIDResponse): unknown;
    create(base?: DeepPartial<GetAppByIDResponse>): GetAppByIDResponse;
    fromPartial(object: DeepPartial<GetAppByIDResponse>): GetAppByIDResponse;
};
export declare const ListAppsRequest: {
    encode(message: ListAppsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAppsRequest;
    fromJSON(object: any): ListAppsRequest;
    toJSON(message: ListAppsRequest): unknown;
    create(base?: DeepPartial<ListAppsRequest>): ListAppsRequest;
    fromPartial(object: DeepPartial<ListAppsRequest>): ListAppsRequest;
};
export declare const ListAppsResponse: {
    encode(message: ListAppsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAppsResponse;
    fromJSON(object: any): ListAppsResponse;
    toJSON(message: ListAppsResponse): unknown;
    create(base?: DeepPartial<ListAppsResponse>): ListAppsResponse;
    fromPartial(object: DeepPartial<ListAppsResponse>): ListAppsResponse;
};
export declare const ListAppChangesRequest: {
    encode(message: ListAppChangesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAppChangesRequest;
    fromJSON(object: any): ListAppChangesRequest;
    toJSON(message: ListAppChangesRequest): unknown;
    create(base?: DeepPartial<ListAppChangesRequest>): ListAppChangesRequest;
    fromPartial(object: DeepPartial<ListAppChangesRequest>): ListAppChangesRequest;
};
export declare const ListAppChangesResponse: {
    encode(message: ListAppChangesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAppChangesResponse;
    fromJSON(object: any): ListAppChangesResponse;
    toJSON(message: ListAppChangesResponse): unknown;
    create(base?: DeepPartial<ListAppChangesResponse>): ListAppChangesResponse;
    fromPartial(object: DeepPartial<ListAppChangesResponse>): ListAppChangesResponse;
};
export declare const AddOIDCAppRequest: {
    encode(message: AddOIDCAppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCAppRequest;
    fromJSON(object: any): AddOIDCAppRequest;
    toJSON(message: AddOIDCAppRequest): unknown;
    create(base?: DeepPartial<AddOIDCAppRequest>): AddOIDCAppRequest;
    fromPartial(object: DeepPartial<AddOIDCAppRequest>): AddOIDCAppRequest;
};
export declare const AddOIDCAppResponse: {
    encode(message: AddOIDCAppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCAppResponse;
    fromJSON(object: any): AddOIDCAppResponse;
    toJSON(message: AddOIDCAppResponse): unknown;
    create(base?: DeepPartial<AddOIDCAppResponse>): AddOIDCAppResponse;
    fromPartial(object: DeepPartial<AddOIDCAppResponse>): AddOIDCAppResponse;
};
export declare const AddSAMLAppRequest: {
    encode(message: AddSAMLAppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSAMLAppRequest;
    fromJSON(object: any): AddSAMLAppRequest;
    toJSON(message: AddSAMLAppRequest): unknown;
    create(base?: DeepPartial<AddSAMLAppRequest>): AddSAMLAppRequest;
    fromPartial(object: DeepPartial<AddSAMLAppRequest>): AddSAMLAppRequest;
};
export declare const AddSAMLAppResponse: {
    encode(message: AddSAMLAppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSAMLAppResponse;
    fromJSON(object: any): AddSAMLAppResponse;
    toJSON(message: AddSAMLAppResponse): unknown;
    create(base?: DeepPartial<AddSAMLAppResponse>): AddSAMLAppResponse;
    fromPartial(object: DeepPartial<AddSAMLAppResponse>): AddSAMLAppResponse;
};
export declare const AddAPIAppRequest: {
    encode(message: AddAPIAppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAPIAppRequest;
    fromJSON(object: any): AddAPIAppRequest;
    toJSON(message: AddAPIAppRequest): unknown;
    create(base?: DeepPartial<AddAPIAppRequest>): AddAPIAppRequest;
    fromPartial(object: DeepPartial<AddAPIAppRequest>): AddAPIAppRequest;
};
export declare const AddAPIAppResponse: {
    encode(message: AddAPIAppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAPIAppResponse;
    fromJSON(object: any): AddAPIAppResponse;
    toJSON(message: AddAPIAppResponse): unknown;
    create(base?: DeepPartial<AddAPIAppResponse>): AddAPIAppResponse;
    fromPartial(object: DeepPartial<AddAPIAppResponse>): AddAPIAppResponse;
};
export declare const UpdateAppRequest: {
    encode(message: UpdateAppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAppRequest;
    fromJSON(object: any): UpdateAppRequest;
    toJSON(message: UpdateAppRequest): unknown;
    create(base?: DeepPartial<UpdateAppRequest>): UpdateAppRequest;
    fromPartial(object: DeepPartial<UpdateAppRequest>): UpdateAppRequest;
};
export declare const UpdateAppResponse: {
    encode(message: UpdateAppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAppResponse;
    fromJSON(object: any): UpdateAppResponse;
    toJSON(message: UpdateAppResponse): unknown;
    create(base?: DeepPartial<UpdateAppResponse>): UpdateAppResponse;
    fromPartial(object: DeepPartial<UpdateAppResponse>): UpdateAppResponse;
};
export declare const UpdateOIDCAppConfigRequest: {
    encode(message: UpdateOIDCAppConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOIDCAppConfigRequest;
    fromJSON(object: any): UpdateOIDCAppConfigRequest;
    toJSON(message: UpdateOIDCAppConfigRequest): unknown;
    create(base?: DeepPartial<UpdateOIDCAppConfigRequest>): UpdateOIDCAppConfigRequest;
    fromPartial(object: DeepPartial<UpdateOIDCAppConfigRequest>): UpdateOIDCAppConfigRequest;
};
export declare const UpdateOIDCAppConfigResponse: {
    encode(message: UpdateOIDCAppConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOIDCAppConfigResponse;
    fromJSON(object: any): UpdateOIDCAppConfigResponse;
    toJSON(message: UpdateOIDCAppConfigResponse): unknown;
    create(base?: DeepPartial<UpdateOIDCAppConfigResponse>): UpdateOIDCAppConfigResponse;
    fromPartial(object: DeepPartial<UpdateOIDCAppConfigResponse>): UpdateOIDCAppConfigResponse;
};
export declare const UpdateSAMLAppConfigRequest: {
    encode(message: UpdateSAMLAppConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSAMLAppConfigRequest;
    fromJSON(object: any): UpdateSAMLAppConfigRequest;
    toJSON(message: UpdateSAMLAppConfigRequest): unknown;
    create(base?: DeepPartial<UpdateSAMLAppConfigRequest>): UpdateSAMLAppConfigRequest;
    fromPartial(object: DeepPartial<UpdateSAMLAppConfigRequest>): UpdateSAMLAppConfigRequest;
};
export declare const UpdateSAMLAppConfigResponse: {
    encode(message: UpdateSAMLAppConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSAMLAppConfigResponse;
    fromJSON(object: any): UpdateSAMLAppConfigResponse;
    toJSON(message: UpdateSAMLAppConfigResponse): unknown;
    create(base?: DeepPartial<UpdateSAMLAppConfigResponse>): UpdateSAMLAppConfigResponse;
    fromPartial(object: DeepPartial<UpdateSAMLAppConfigResponse>): UpdateSAMLAppConfigResponse;
};
export declare const UpdateAPIAppConfigRequest: {
    encode(message: UpdateAPIAppConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAPIAppConfigRequest;
    fromJSON(object: any): UpdateAPIAppConfigRequest;
    toJSON(message: UpdateAPIAppConfigRequest): unknown;
    create(base?: DeepPartial<UpdateAPIAppConfigRequest>): UpdateAPIAppConfigRequest;
    fromPartial(object: DeepPartial<UpdateAPIAppConfigRequest>): UpdateAPIAppConfigRequest;
};
export declare const UpdateAPIAppConfigResponse: {
    encode(message: UpdateAPIAppConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAPIAppConfigResponse;
    fromJSON(object: any): UpdateAPIAppConfigResponse;
    toJSON(message: UpdateAPIAppConfigResponse): unknown;
    create(base?: DeepPartial<UpdateAPIAppConfigResponse>): UpdateAPIAppConfigResponse;
    fromPartial(object: DeepPartial<UpdateAPIAppConfigResponse>): UpdateAPIAppConfigResponse;
};
export declare const DeactivateAppRequest: {
    encode(message: DeactivateAppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateAppRequest;
    fromJSON(object: any): DeactivateAppRequest;
    toJSON(message: DeactivateAppRequest): unknown;
    create(base?: DeepPartial<DeactivateAppRequest>): DeactivateAppRequest;
    fromPartial(object: DeepPartial<DeactivateAppRequest>): DeactivateAppRequest;
};
export declare const DeactivateAppResponse: {
    encode(message: DeactivateAppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateAppResponse;
    fromJSON(object: any): DeactivateAppResponse;
    toJSON(message: DeactivateAppResponse): unknown;
    create(base?: DeepPartial<DeactivateAppResponse>): DeactivateAppResponse;
    fromPartial(object: DeepPartial<DeactivateAppResponse>): DeactivateAppResponse;
};
export declare const ReactivateAppRequest: {
    encode(message: ReactivateAppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateAppRequest;
    fromJSON(object: any): ReactivateAppRequest;
    toJSON(message: ReactivateAppRequest): unknown;
    create(base?: DeepPartial<ReactivateAppRequest>): ReactivateAppRequest;
    fromPartial(object: DeepPartial<ReactivateAppRequest>): ReactivateAppRequest;
};
export declare const ReactivateAppResponse: {
    encode(message: ReactivateAppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateAppResponse;
    fromJSON(object: any): ReactivateAppResponse;
    toJSON(message: ReactivateAppResponse): unknown;
    create(base?: DeepPartial<ReactivateAppResponse>): ReactivateAppResponse;
    fromPartial(object: DeepPartial<ReactivateAppResponse>): ReactivateAppResponse;
};
export declare const RemoveAppRequest: {
    encode(message: RemoveAppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAppRequest;
    fromJSON(object: any): RemoveAppRequest;
    toJSON(message: RemoveAppRequest): unknown;
    create(base?: DeepPartial<RemoveAppRequest>): RemoveAppRequest;
    fromPartial(object: DeepPartial<RemoveAppRequest>): RemoveAppRequest;
};
export declare const RemoveAppResponse: {
    encode(message: RemoveAppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAppResponse;
    fromJSON(object: any): RemoveAppResponse;
    toJSON(message: RemoveAppResponse): unknown;
    create(base?: DeepPartial<RemoveAppResponse>): RemoveAppResponse;
    fromPartial(object: DeepPartial<RemoveAppResponse>): RemoveAppResponse;
};
export declare const RegenerateOIDCClientSecretRequest: {
    encode(message: RegenerateOIDCClientSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateOIDCClientSecretRequest;
    fromJSON(object: any): RegenerateOIDCClientSecretRequest;
    toJSON(message: RegenerateOIDCClientSecretRequest): unknown;
    create(base?: DeepPartial<RegenerateOIDCClientSecretRequest>): RegenerateOIDCClientSecretRequest;
    fromPartial(object: DeepPartial<RegenerateOIDCClientSecretRequest>): RegenerateOIDCClientSecretRequest;
};
export declare const RegenerateOIDCClientSecretResponse: {
    encode(message: RegenerateOIDCClientSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateOIDCClientSecretResponse;
    fromJSON(object: any): RegenerateOIDCClientSecretResponse;
    toJSON(message: RegenerateOIDCClientSecretResponse): unknown;
    create(base?: DeepPartial<RegenerateOIDCClientSecretResponse>): RegenerateOIDCClientSecretResponse;
    fromPartial(object: DeepPartial<RegenerateOIDCClientSecretResponse>): RegenerateOIDCClientSecretResponse;
};
export declare const RegenerateAPIClientSecretRequest: {
    encode(message: RegenerateAPIClientSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateAPIClientSecretRequest;
    fromJSON(object: any): RegenerateAPIClientSecretRequest;
    toJSON(message: RegenerateAPIClientSecretRequest): unknown;
    create(base?: DeepPartial<RegenerateAPIClientSecretRequest>): RegenerateAPIClientSecretRequest;
    fromPartial(object: DeepPartial<RegenerateAPIClientSecretRequest>): RegenerateAPIClientSecretRequest;
};
export declare const RegenerateAPIClientSecretResponse: {
    encode(message: RegenerateAPIClientSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateAPIClientSecretResponse;
    fromJSON(object: any): RegenerateAPIClientSecretResponse;
    toJSON(message: RegenerateAPIClientSecretResponse): unknown;
    create(base?: DeepPartial<RegenerateAPIClientSecretResponse>): RegenerateAPIClientSecretResponse;
    fromPartial(object: DeepPartial<RegenerateAPIClientSecretResponse>): RegenerateAPIClientSecretResponse;
};
export declare const GetAppKeyRequest: {
    encode(message: GetAppKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAppKeyRequest;
    fromJSON(object: any): GetAppKeyRequest;
    toJSON(message: GetAppKeyRequest): unknown;
    create(base?: DeepPartial<GetAppKeyRequest>): GetAppKeyRequest;
    fromPartial(object: DeepPartial<GetAppKeyRequest>): GetAppKeyRequest;
};
export declare const GetAppKeyResponse: {
    encode(message: GetAppKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAppKeyResponse;
    fromJSON(object: any): GetAppKeyResponse;
    toJSON(message: GetAppKeyResponse): unknown;
    create(base?: DeepPartial<GetAppKeyResponse>): GetAppKeyResponse;
    fromPartial(object: DeepPartial<GetAppKeyResponse>): GetAppKeyResponse;
};
export declare const ListAppKeysRequest: {
    encode(message: ListAppKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAppKeysRequest;
    fromJSON(object: any): ListAppKeysRequest;
    toJSON(message: ListAppKeysRequest): unknown;
    create(base?: DeepPartial<ListAppKeysRequest>): ListAppKeysRequest;
    fromPartial(object: DeepPartial<ListAppKeysRequest>): ListAppKeysRequest;
};
export declare const ListAppKeysResponse: {
    encode(message: ListAppKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAppKeysResponse;
    fromJSON(object: any): ListAppKeysResponse;
    toJSON(message: ListAppKeysResponse): unknown;
    create(base?: DeepPartial<ListAppKeysResponse>): ListAppKeysResponse;
    fromPartial(object: DeepPartial<ListAppKeysResponse>): ListAppKeysResponse;
};
export declare const AddAppKeyRequest: {
    encode(message: AddAppKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAppKeyRequest;
    fromJSON(object: any): AddAppKeyRequest;
    toJSON(message: AddAppKeyRequest): unknown;
    create(base?: DeepPartial<AddAppKeyRequest>): AddAppKeyRequest;
    fromPartial(object: DeepPartial<AddAppKeyRequest>): AddAppKeyRequest;
};
export declare const AddAppKeyResponse: {
    encode(message: AddAppKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAppKeyResponse;
    fromJSON(object: any): AddAppKeyResponse;
    toJSON(message: AddAppKeyResponse): unknown;
    create(base?: DeepPartial<AddAppKeyResponse>): AddAppKeyResponse;
    fromPartial(object: DeepPartial<AddAppKeyResponse>): AddAppKeyResponse;
};
export declare const RemoveAppKeyRequest: {
    encode(message: RemoveAppKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAppKeyRequest;
    fromJSON(object: any): RemoveAppKeyRequest;
    toJSON(message: RemoveAppKeyRequest): unknown;
    create(base?: DeepPartial<RemoveAppKeyRequest>): RemoveAppKeyRequest;
    fromPartial(object: DeepPartial<RemoveAppKeyRequest>): RemoveAppKeyRequest;
};
export declare const RemoveAppKeyResponse: {
    encode(message: RemoveAppKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAppKeyResponse;
    fromJSON(object: any): RemoveAppKeyResponse;
    toJSON(message: RemoveAppKeyResponse): unknown;
    create(base?: DeepPartial<RemoveAppKeyResponse>): RemoveAppKeyResponse;
    fromPartial(object: DeepPartial<RemoveAppKeyResponse>): RemoveAppKeyResponse;
};
export declare const ListProjectGrantChangesRequest: {
    encode(message: ListProjectGrantChangesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantChangesRequest;
    fromJSON(object: any): ListProjectGrantChangesRequest;
    toJSON(message: ListProjectGrantChangesRequest): unknown;
    create(base?: DeepPartial<ListProjectGrantChangesRequest>): ListProjectGrantChangesRequest;
    fromPartial(object: DeepPartial<ListProjectGrantChangesRequest>): ListProjectGrantChangesRequest;
};
export declare const ListProjectGrantChangesResponse: {
    encode(message: ListProjectGrantChangesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantChangesResponse;
    fromJSON(object: any): ListProjectGrantChangesResponse;
    toJSON(message: ListProjectGrantChangesResponse): unknown;
    create(base?: DeepPartial<ListProjectGrantChangesResponse>): ListProjectGrantChangesResponse;
    fromPartial(object: DeepPartial<ListProjectGrantChangesResponse>): ListProjectGrantChangesResponse;
};
export declare const GetProjectGrantByIDRequest: {
    encode(message: GetProjectGrantByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectGrantByIDRequest;
    fromJSON(object: any): GetProjectGrantByIDRequest;
    toJSON(message: GetProjectGrantByIDRequest): unknown;
    create(base?: DeepPartial<GetProjectGrantByIDRequest>): GetProjectGrantByIDRequest;
    fromPartial(object: DeepPartial<GetProjectGrantByIDRequest>): GetProjectGrantByIDRequest;
};
export declare const GetProjectGrantByIDResponse: {
    encode(message: GetProjectGrantByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectGrantByIDResponse;
    fromJSON(object: any): GetProjectGrantByIDResponse;
    toJSON(message: GetProjectGrantByIDResponse): unknown;
    create(base?: DeepPartial<GetProjectGrantByIDResponse>): GetProjectGrantByIDResponse;
    fromPartial(object: DeepPartial<GetProjectGrantByIDResponse>): GetProjectGrantByIDResponse;
};
export declare const ListProjectGrantsRequest: {
    encode(message: ListProjectGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantsRequest;
    fromJSON(object: any): ListProjectGrantsRequest;
    toJSON(message: ListProjectGrantsRequest): unknown;
    create(base?: DeepPartial<ListProjectGrantsRequest>): ListProjectGrantsRequest;
    fromPartial(object: DeepPartial<ListProjectGrantsRequest>): ListProjectGrantsRequest;
};
export declare const ListProjectGrantsResponse: {
    encode(message: ListProjectGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantsResponse;
    fromJSON(object: any): ListProjectGrantsResponse;
    toJSON(message: ListProjectGrantsResponse): unknown;
    create(base?: DeepPartial<ListProjectGrantsResponse>): ListProjectGrantsResponse;
    fromPartial(object: DeepPartial<ListProjectGrantsResponse>): ListProjectGrantsResponse;
};
export declare const ListAllProjectGrantsRequest: {
    encode(message: ListAllProjectGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAllProjectGrantsRequest;
    fromJSON(object: any): ListAllProjectGrantsRequest;
    toJSON(message: ListAllProjectGrantsRequest): unknown;
    create(base?: DeepPartial<ListAllProjectGrantsRequest>): ListAllProjectGrantsRequest;
    fromPartial(object: DeepPartial<ListAllProjectGrantsRequest>): ListAllProjectGrantsRequest;
};
export declare const ListAllProjectGrantsResponse: {
    encode(message: ListAllProjectGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAllProjectGrantsResponse;
    fromJSON(object: any): ListAllProjectGrantsResponse;
    toJSON(message: ListAllProjectGrantsResponse): unknown;
    create(base?: DeepPartial<ListAllProjectGrantsResponse>): ListAllProjectGrantsResponse;
    fromPartial(object: DeepPartial<ListAllProjectGrantsResponse>): ListAllProjectGrantsResponse;
};
export declare const AddProjectGrantRequest: {
    encode(message: AddProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectGrantRequest;
    fromJSON(object: any): AddProjectGrantRequest;
    toJSON(message: AddProjectGrantRequest): unknown;
    create(base?: DeepPartial<AddProjectGrantRequest>): AddProjectGrantRequest;
    fromPartial(object: DeepPartial<AddProjectGrantRequest>): AddProjectGrantRequest;
};
export declare const AddProjectGrantResponse: {
    encode(message: AddProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectGrantResponse;
    fromJSON(object: any): AddProjectGrantResponse;
    toJSON(message: AddProjectGrantResponse): unknown;
    create(base?: DeepPartial<AddProjectGrantResponse>): AddProjectGrantResponse;
    fromPartial(object: DeepPartial<AddProjectGrantResponse>): AddProjectGrantResponse;
};
export declare const UpdateProjectGrantRequest: {
    encode(message: UpdateProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectGrantRequest;
    fromJSON(object: any): UpdateProjectGrantRequest;
    toJSON(message: UpdateProjectGrantRequest): unknown;
    create(base?: DeepPartial<UpdateProjectGrantRequest>): UpdateProjectGrantRequest;
    fromPartial(object: DeepPartial<UpdateProjectGrantRequest>): UpdateProjectGrantRequest;
};
export declare const UpdateProjectGrantResponse: {
    encode(message: UpdateProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectGrantResponse;
    fromJSON(object: any): UpdateProjectGrantResponse;
    toJSON(message: UpdateProjectGrantResponse): unknown;
    create(base?: DeepPartial<UpdateProjectGrantResponse>): UpdateProjectGrantResponse;
    fromPartial(object: DeepPartial<UpdateProjectGrantResponse>): UpdateProjectGrantResponse;
};
export declare const DeactivateProjectGrantRequest: {
    encode(message: DeactivateProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProjectGrantRequest;
    fromJSON(object: any): DeactivateProjectGrantRequest;
    toJSON(message: DeactivateProjectGrantRequest): unknown;
    create(base?: DeepPartial<DeactivateProjectGrantRequest>): DeactivateProjectGrantRequest;
    fromPartial(object: DeepPartial<DeactivateProjectGrantRequest>): DeactivateProjectGrantRequest;
};
export declare const DeactivateProjectGrantResponse: {
    encode(message: DeactivateProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProjectGrantResponse;
    fromJSON(object: any): DeactivateProjectGrantResponse;
    toJSON(message: DeactivateProjectGrantResponse): unknown;
    create(base?: DeepPartial<DeactivateProjectGrantResponse>): DeactivateProjectGrantResponse;
    fromPartial(object: DeepPartial<DeactivateProjectGrantResponse>): DeactivateProjectGrantResponse;
};
export declare const ReactivateProjectGrantRequest: {
    encode(message: ReactivateProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateProjectGrantRequest;
    fromJSON(object: any): ReactivateProjectGrantRequest;
    toJSON(message: ReactivateProjectGrantRequest): unknown;
    create(base?: DeepPartial<ReactivateProjectGrantRequest>): ReactivateProjectGrantRequest;
    fromPartial(object: DeepPartial<ReactivateProjectGrantRequest>): ReactivateProjectGrantRequest;
};
export declare const ReactivateProjectGrantResponse: {
    encode(message: ReactivateProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateProjectGrantResponse;
    fromJSON(object: any): ReactivateProjectGrantResponse;
    toJSON(message: ReactivateProjectGrantResponse): unknown;
    create(base?: DeepPartial<ReactivateProjectGrantResponse>): ReactivateProjectGrantResponse;
    fromPartial(object: DeepPartial<ReactivateProjectGrantResponse>): ReactivateProjectGrantResponse;
};
export declare const RemoveProjectGrantRequest: {
    encode(message: RemoveProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectGrantRequest;
    fromJSON(object: any): RemoveProjectGrantRequest;
    toJSON(message: RemoveProjectGrantRequest): unknown;
    create(base?: DeepPartial<RemoveProjectGrantRequest>): RemoveProjectGrantRequest;
    fromPartial(object: DeepPartial<RemoveProjectGrantRequest>): RemoveProjectGrantRequest;
};
export declare const RemoveProjectGrantResponse: {
    encode(message: RemoveProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectGrantResponse;
    fromJSON(object: any): RemoveProjectGrantResponse;
    toJSON(message: RemoveProjectGrantResponse): unknown;
    create(base?: DeepPartial<RemoveProjectGrantResponse>): RemoveProjectGrantResponse;
    fromPartial(object: DeepPartial<RemoveProjectGrantResponse>): RemoveProjectGrantResponse;
};
export declare const ListProjectGrantMemberRolesRequest: {
    encode(message: ListProjectGrantMemberRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantMemberRolesRequest;
    fromJSON(object: any): ListProjectGrantMemberRolesRequest;
    toJSON(message: ListProjectGrantMemberRolesRequest): unknown;
    create(base?: DeepPartial<ListProjectGrantMemberRolesRequest>): ListProjectGrantMemberRolesRequest;
    fromPartial(object: DeepPartial<ListProjectGrantMemberRolesRequest>): ListProjectGrantMemberRolesRequest;
};
export declare const ListProjectGrantMemberRolesResponse: {
    encode(message: ListProjectGrantMemberRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantMemberRolesResponse;
    fromJSON(object: any): ListProjectGrantMemberRolesResponse;
    toJSON(message: ListProjectGrantMemberRolesResponse): unknown;
    create(base?: DeepPartial<ListProjectGrantMemberRolesResponse>): ListProjectGrantMemberRolesResponse;
    fromPartial(object: DeepPartial<ListProjectGrantMemberRolesResponse>): ListProjectGrantMemberRolesResponse;
};
export declare const ListProjectGrantMembersRequest: {
    encode(message: ListProjectGrantMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantMembersRequest;
    fromJSON(object: any): ListProjectGrantMembersRequest;
    toJSON(message: ListProjectGrantMembersRequest): unknown;
    create(base?: DeepPartial<ListProjectGrantMembersRequest>): ListProjectGrantMembersRequest;
    fromPartial(object: DeepPartial<ListProjectGrantMembersRequest>): ListProjectGrantMembersRequest;
};
export declare const ListProjectGrantMembersResponse: {
    encode(message: ListProjectGrantMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantMembersResponse;
    fromJSON(object: any): ListProjectGrantMembersResponse;
    toJSON(message: ListProjectGrantMembersResponse): unknown;
    create(base?: DeepPartial<ListProjectGrantMembersResponse>): ListProjectGrantMembersResponse;
    fromPartial(object: DeepPartial<ListProjectGrantMembersResponse>): ListProjectGrantMembersResponse;
};
export declare const AddProjectGrantMemberRequest: {
    encode(message: AddProjectGrantMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectGrantMemberRequest;
    fromJSON(object: any): AddProjectGrantMemberRequest;
    toJSON(message: AddProjectGrantMemberRequest): unknown;
    create(base?: DeepPartial<AddProjectGrantMemberRequest>): AddProjectGrantMemberRequest;
    fromPartial(object: DeepPartial<AddProjectGrantMemberRequest>): AddProjectGrantMemberRequest;
};
export declare const AddProjectGrantMemberResponse: {
    encode(message: AddProjectGrantMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectGrantMemberResponse;
    fromJSON(object: any): AddProjectGrantMemberResponse;
    toJSON(message: AddProjectGrantMemberResponse): unknown;
    create(base?: DeepPartial<AddProjectGrantMemberResponse>): AddProjectGrantMemberResponse;
    fromPartial(object: DeepPartial<AddProjectGrantMemberResponse>): AddProjectGrantMemberResponse;
};
export declare const UpdateProjectGrantMemberRequest: {
    encode(message: UpdateProjectGrantMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectGrantMemberRequest;
    fromJSON(object: any): UpdateProjectGrantMemberRequest;
    toJSON(message: UpdateProjectGrantMemberRequest): unknown;
    create(base?: DeepPartial<UpdateProjectGrantMemberRequest>): UpdateProjectGrantMemberRequest;
    fromPartial(object: DeepPartial<UpdateProjectGrantMemberRequest>): UpdateProjectGrantMemberRequest;
};
export declare const UpdateProjectGrantMemberResponse: {
    encode(message: UpdateProjectGrantMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectGrantMemberResponse;
    fromJSON(object: any): UpdateProjectGrantMemberResponse;
    toJSON(message: UpdateProjectGrantMemberResponse): unknown;
    create(base?: DeepPartial<UpdateProjectGrantMemberResponse>): UpdateProjectGrantMemberResponse;
    fromPartial(object: DeepPartial<UpdateProjectGrantMemberResponse>): UpdateProjectGrantMemberResponse;
};
export declare const RemoveProjectGrantMemberRequest: {
    encode(message: RemoveProjectGrantMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectGrantMemberRequest;
    fromJSON(object: any): RemoveProjectGrantMemberRequest;
    toJSON(message: RemoveProjectGrantMemberRequest): unknown;
    create(base?: DeepPartial<RemoveProjectGrantMemberRequest>): RemoveProjectGrantMemberRequest;
    fromPartial(object: DeepPartial<RemoveProjectGrantMemberRequest>): RemoveProjectGrantMemberRequest;
};
export declare const RemoveProjectGrantMemberResponse: {
    encode(message: RemoveProjectGrantMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectGrantMemberResponse;
    fromJSON(object: any): RemoveProjectGrantMemberResponse;
    toJSON(message: RemoveProjectGrantMemberResponse): unknown;
    create(base?: DeepPartial<RemoveProjectGrantMemberResponse>): RemoveProjectGrantMemberResponse;
    fromPartial(object: DeepPartial<RemoveProjectGrantMemberResponse>): RemoveProjectGrantMemberResponse;
};
export declare const GetUserGrantByIDRequest: {
    encode(message: GetUserGrantByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserGrantByIDRequest;
    fromJSON(object: any): GetUserGrantByIDRequest;
    toJSON(message: GetUserGrantByIDRequest): unknown;
    create(base?: DeepPartial<GetUserGrantByIDRequest>): GetUserGrantByIDRequest;
    fromPartial(object: DeepPartial<GetUserGrantByIDRequest>): GetUserGrantByIDRequest;
};
export declare const GetUserGrantByIDResponse: {
    encode(message: GetUserGrantByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserGrantByIDResponse;
    fromJSON(object: any): GetUserGrantByIDResponse;
    toJSON(message: GetUserGrantByIDResponse): unknown;
    create(base?: DeepPartial<GetUserGrantByIDResponse>): GetUserGrantByIDResponse;
    fromPartial(object: DeepPartial<GetUserGrantByIDResponse>): GetUserGrantByIDResponse;
};
export declare const ListUserGrantRequest: {
    encode(message: ListUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserGrantRequest;
    fromJSON(object: any): ListUserGrantRequest;
    toJSON(message: ListUserGrantRequest): unknown;
    create(base?: DeepPartial<ListUserGrantRequest>): ListUserGrantRequest;
    fromPartial(object: DeepPartial<ListUserGrantRequest>): ListUserGrantRequest;
};
export declare const ListUserGrantResponse: {
    encode(message: ListUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserGrantResponse;
    fromJSON(object: any): ListUserGrantResponse;
    toJSON(message: ListUserGrantResponse): unknown;
    create(base?: DeepPartial<ListUserGrantResponse>): ListUserGrantResponse;
    fromPartial(object: DeepPartial<ListUserGrantResponse>): ListUserGrantResponse;
};
export declare const AddUserGrantRequest: {
    encode(message: AddUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddUserGrantRequest;
    fromJSON(object: any): AddUserGrantRequest;
    toJSON(message: AddUserGrantRequest): unknown;
    create(base?: DeepPartial<AddUserGrantRequest>): AddUserGrantRequest;
    fromPartial(object: DeepPartial<AddUserGrantRequest>): AddUserGrantRequest;
};
export declare const AddUserGrantResponse: {
    encode(message: AddUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddUserGrantResponse;
    fromJSON(object: any): AddUserGrantResponse;
    toJSON(message: AddUserGrantResponse): unknown;
    create(base?: DeepPartial<AddUserGrantResponse>): AddUserGrantResponse;
    fromPartial(object: DeepPartial<AddUserGrantResponse>): AddUserGrantResponse;
};
export declare const UpdateUserGrantRequest: {
    encode(message: UpdateUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserGrantRequest;
    fromJSON(object: any): UpdateUserGrantRequest;
    toJSON(message: UpdateUserGrantRequest): unknown;
    create(base?: DeepPartial<UpdateUserGrantRequest>): UpdateUserGrantRequest;
    fromPartial(object: DeepPartial<UpdateUserGrantRequest>): UpdateUserGrantRequest;
};
export declare const UpdateUserGrantResponse: {
    encode(message: UpdateUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserGrantResponse;
    fromJSON(object: any): UpdateUserGrantResponse;
    toJSON(message: UpdateUserGrantResponse): unknown;
    create(base?: DeepPartial<UpdateUserGrantResponse>): UpdateUserGrantResponse;
    fromPartial(object: DeepPartial<UpdateUserGrantResponse>): UpdateUserGrantResponse;
};
export declare const DeactivateUserGrantRequest: {
    encode(message: DeactivateUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserGrantRequest;
    fromJSON(object: any): DeactivateUserGrantRequest;
    toJSON(message: DeactivateUserGrantRequest): unknown;
    create(base?: DeepPartial<DeactivateUserGrantRequest>): DeactivateUserGrantRequest;
    fromPartial(object: DeepPartial<DeactivateUserGrantRequest>): DeactivateUserGrantRequest;
};
export declare const DeactivateUserGrantResponse: {
    encode(message: DeactivateUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserGrantResponse;
    fromJSON(object: any): DeactivateUserGrantResponse;
    toJSON(message: DeactivateUserGrantResponse): unknown;
    create(base?: DeepPartial<DeactivateUserGrantResponse>): DeactivateUserGrantResponse;
    fromPartial(object: DeepPartial<DeactivateUserGrantResponse>): DeactivateUserGrantResponse;
};
export declare const ReactivateUserGrantRequest: {
    encode(message: ReactivateUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserGrantRequest;
    fromJSON(object: any): ReactivateUserGrantRequest;
    toJSON(message: ReactivateUserGrantRequest): unknown;
    create(base?: DeepPartial<ReactivateUserGrantRequest>): ReactivateUserGrantRequest;
    fromPartial(object: DeepPartial<ReactivateUserGrantRequest>): ReactivateUserGrantRequest;
};
export declare const ReactivateUserGrantResponse: {
    encode(message: ReactivateUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserGrantResponse;
    fromJSON(object: any): ReactivateUserGrantResponse;
    toJSON(message: ReactivateUserGrantResponse): unknown;
    create(base?: DeepPartial<ReactivateUserGrantResponse>): ReactivateUserGrantResponse;
    fromPartial(object: DeepPartial<ReactivateUserGrantResponse>): ReactivateUserGrantResponse;
};
export declare const RemoveUserGrantRequest: {
    encode(message: RemoveUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserGrantRequest;
    fromJSON(object: any): RemoveUserGrantRequest;
    toJSON(message: RemoveUserGrantRequest): unknown;
    create(base?: DeepPartial<RemoveUserGrantRequest>): RemoveUserGrantRequest;
    fromPartial(object: DeepPartial<RemoveUserGrantRequest>): RemoveUserGrantRequest;
};
export declare const RemoveUserGrantResponse: {
    encode(message: RemoveUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserGrantResponse;
    fromJSON(object: any): RemoveUserGrantResponse;
    toJSON(message: RemoveUserGrantResponse): unknown;
    create(base?: DeepPartial<RemoveUserGrantResponse>): RemoveUserGrantResponse;
    fromPartial(object: DeepPartial<RemoveUserGrantResponse>): RemoveUserGrantResponse;
};
export declare const BulkRemoveUserGrantRequest: {
    encode(message: BulkRemoveUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveUserGrantRequest;
    fromJSON(object: any): BulkRemoveUserGrantRequest;
    toJSON(message: BulkRemoveUserGrantRequest): unknown;
    create(base?: DeepPartial<BulkRemoveUserGrantRequest>): BulkRemoveUserGrantRequest;
    fromPartial(object: DeepPartial<BulkRemoveUserGrantRequest>): BulkRemoveUserGrantRequest;
};
export declare const BulkRemoveUserGrantResponse: {
    encode(_: BulkRemoveUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveUserGrantResponse;
    fromJSON(_: any): BulkRemoveUserGrantResponse;
    toJSON(_: BulkRemoveUserGrantResponse): unknown;
    create(base?: DeepPartial<BulkRemoveUserGrantResponse>): BulkRemoveUserGrantResponse;
    fromPartial(_: DeepPartial<BulkRemoveUserGrantResponse>): BulkRemoveUserGrantResponse;
};
export declare const GetOrgIAMPolicyRequest: {
    encode(_: GetOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgIAMPolicyRequest;
    fromJSON(_: any): GetOrgIAMPolicyRequest;
    toJSON(_: GetOrgIAMPolicyRequest): unknown;
    create(base?: DeepPartial<GetOrgIAMPolicyRequest>): GetOrgIAMPolicyRequest;
    fromPartial(_: DeepPartial<GetOrgIAMPolicyRequest>): GetOrgIAMPolicyRequest;
};
export declare const GetOrgIAMPolicyResponse: {
    encode(message: GetOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgIAMPolicyResponse;
    fromJSON(object: any): GetOrgIAMPolicyResponse;
    toJSON(message: GetOrgIAMPolicyResponse): unknown;
    create(base?: DeepPartial<GetOrgIAMPolicyResponse>): GetOrgIAMPolicyResponse;
    fromPartial(object: DeepPartial<GetOrgIAMPolicyResponse>): GetOrgIAMPolicyResponse;
};
export declare const GetDomainPolicyRequest: {
    encode(_: GetDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainPolicyRequest;
    fromJSON(_: any): GetDomainPolicyRequest;
    toJSON(_: GetDomainPolicyRequest): unknown;
    create(base?: DeepPartial<GetDomainPolicyRequest>): GetDomainPolicyRequest;
    fromPartial(_: DeepPartial<GetDomainPolicyRequest>): GetDomainPolicyRequest;
};
export declare const GetDomainPolicyResponse: {
    encode(message: GetDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainPolicyResponse;
    fromJSON(object: any): GetDomainPolicyResponse;
    toJSON(message: GetDomainPolicyResponse): unknown;
    create(base?: DeepPartial<GetDomainPolicyResponse>): GetDomainPolicyResponse;
    fromPartial(object: DeepPartial<GetDomainPolicyResponse>): GetDomainPolicyResponse;
};
export declare const GetLoginPolicyRequest: {
    encode(_: GetLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginPolicyRequest;
    fromJSON(_: any): GetLoginPolicyRequest;
    toJSON(_: GetLoginPolicyRequest): unknown;
    create(base?: DeepPartial<GetLoginPolicyRequest>): GetLoginPolicyRequest;
    fromPartial(_: DeepPartial<GetLoginPolicyRequest>): GetLoginPolicyRequest;
};
export declare const GetLoginPolicyResponse: {
    encode(message: GetLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginPolicyResponse;
    fromJSON(object: any): GetLoginPolicyResponse;
    toJSON(message: GetLoginPolicyResponse): unknown;
    create(base?: DeepPartial<GetLoginPolicyResponse>): GetLoginPolicyResponse;
    fromPartial(object: DeepPartial<GetLoginPolicyResponse>): GetLoginPolicyResponse;
};
export declare const GetDefaultLoginPolicyRequest: {
    encode(_: GetDefaultLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLoginPolicyRequest;
    fromJSON(_: any): GetDefaultLoginPolicyRequest;
    toJSON(_: GetDefaultLoginPolicyRequest): unknown;
    create(base?: DeepPartial<GetDefaultLoginPolicyRequest>): GetDefaultLoginPolicyRequest;
    fromPartial(_: DeepPartial<GetDefaultLoginPolicyRequest>): GetDefaultLoginPolicyRequest;
};
export declare const GetDefaultLoginPolicyResponse: {
    encode(message: GetDefaultLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLoginPolicyResponse;
    fromJSON(object: any): GetDefaultLoginPolicyResponse;
    toJSON(message: GetDefaultLoginPolicyResponse): unknown;
    create(base?: DeepPartial<GetDefaultLoginPolicyResponse>): GetDefaultLoginPolicyResponse;
    fromPartial(object: DeepPartial<GetDefaultLoginPolicyResponse>): GetDefaultLoginPolicyResponse;
};
export declare const AddCustomLoginPolicyRequest: {
    encode(message: AddCustomLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLoginPolicyRequest;
    fromJSON(object: any): AddCustomLoginPolicyRequest;
    toJSON(message: AddCustomLoginPolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomLoginPolicyRequest>): AddCustomLoginPolicyRequest;
    fromPartial(object: DeepPartial<AddCustomLoginPolicyRequest>): AddCustomLoginPolicyRequest;
};
export declare const AddCustomLoginPolicyRequest_IDP: {
    encode(message: AddCustomLoginPolicyRequest_IDP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLoginPolicyRequest_IDP;
    fromJSON(object: any): AddCustomLoginPolicyRequest_IDP;
    toJSON(message: AddCustomLoginPolicyRequest_IDP): unknown;
    create(base?: DeepPartial<AddCustomLoginPolicyRequest_IDP>): AddCustomLoginPolicyRequest_IDP;
    fromPartial(object: DeepPartial<AddCustomLoginPolicyRequest_IDP>): AddCustomLoginPolicyRequest_IDP;
};
export declare const AddCustomLoginPolicyResponse: {
    encode(message: AddCustomLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLoginPolicyResponse;
    fromJSON(object: any): AddCustomLoginPolicyResponse;
    toJSON(message: AddCustomLoginPolicyResponse): unknown;
    create(base?: DeepPartial<AddCustomLoginPolicyResponse>): AddCustomLoginPolicyResponse;
    fromPartial(object: DeepPartial<AddCustomLoginPolicyResponse>): AddCustomLoginPolicyResponse;
};
export declare const UpdateCustomLoginPolicyRequest: {
    encode(message: UpdateCustomLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLoginPolicyRequest;
    fromJSON(object: any): UpdateCustomLoginPolicyRequest;
    toJSON(message: UpdateCustomLoginPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateCustomLoginPolicyRequest>): UpdateCustomLoginPolicyRequest;
    fromPartial(object: DeepPartial<UpdateCustomLoginPolicyRequest>): UpdateCustomLoginPolicyRequest;
};
export declare const UpdateCustomLoginPolicyResponse: {
    encode(message: UpdateCustomLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLoginPolicyResponse;
    fromJSON(object: any): UpdateCustomLoginPolicyResponse;
    toJSON(message: UpdateCustomLoginPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateCustomLoginPolicyResponse>): UpdateCustomLoginPolicyResponse;
    fromPartial(object: DeepPartial<UpdateCustomLoginPolicyResponse>): UpdateCustomLoginPolicyResponse;
};
export declare const ResetLoginPolicyToDefaultRequest: {
    encode(_: ResetLoginPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetLoginPolicyToDefaultRequest;
    fromJSON(_: any): ResetLoginPolicyToDefaultRequest;
    toJSON(_: ResetLoginPolicyToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetLoginPolicyToDefaultRequest>): ResetLoginPolicyToDefaultRequest;
    fromPartial(_: DeepPartial<ResetLoginPolicyToDefaultRequest>): ResetLoginPolicyToDefaultRequest;
};
export declare const ResetLoginPolicyToDefaultResponse: {
    encode(message: ResetLoginPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetLoginPolicyToDefaultResponse;
    fromJSON(object: any): ResetLoginPolicyToDefaultResponse;
    toJSON(message: ResetLoginPolicyToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetLoginPolicyToDefaultResponse>): ResetLoginPolicyToDefaultResponse;
    fromPartial(object: DeepPartial<ResetLoginPolicyToDefaultResponse>): ResetLoginPolicyToDefaultResponse;
};
export declare const ListLoginPolicyIDPsRequest: {
    encode(message: ListLoginPolicyIDPsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicyIDPsRequest;
    fromJSON(object: any): ListLoginPolicyIDPsRequest;
    toJSON(message: ListLoginPolicyIDPsRequest): unknown;
    create(base?: DeepPartial<ListLoginPolicyIDPsRequest>): ListLoginPolicyIDPsRequest;
    fromPartial(object: DeepPartial<ListLoginPolicyIDPsRequest>): ListLoginPolicyIDPsRequest;
};
export declare const ListLoginPolicyIDPsResponse: {
    encode(message: ListLoginPolicyIDPsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicyIDPsResponse;
    fromJSON(object: any): ListLoginPolicyIDPsResponse;
    toJSON(message: ListLoginPolicyIDPsResponse): unknown;
    create(base?: DeepPartial<ListLoginPolicyIDPsResponse>): ListLoginPolicyIDPsResponse;
    fromPartial(object: DeepPartial<ListLoginPolicyIDPsResponse>): ListLoginPolicyIDPsResponse;
};
export declare const AddIDPToLoginPolicyRequest: {
    encode(message: AddIDPToLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPToLoginPolicyRequest;
    fromJSON(object: any): AddIDPToLoginPolicyRequest;
    toJSON(message: AddIDPToLoginPolicyRequest): unknown;
    create(base?: DeepPartial<AddIDPToLoginPolicyRequest>): AddIDPToLoginPolicyRequest;
    fromPartial(object: DeepPartial<AddIDPToLoginPolicyRequest>): AddIDPToLoginPolicyRequest;
};
export declare const AddIDPToLoginPolicyResponse: {
    encode(message: AddIDPToLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPToLoginPolicyResponse;
    fromJSON(object: any): AddIDPToLoginPolicyResponse;
    toJSON(message: AddIDPToLoginPolicyResponse): unknown;
    create(base?: DeepPartial<AddIDPToLoginPolicyResponse>): AddIDPToLoginPolicyResponse;
    fromPartial(object: DeepPartial<AddIDPToLoginPolicyResponse>): AddIDPToLoginPolicyResponse;
};
export declare const RemoveIDPFromLoginPolicyRequest: {
    encode(message: RemoveIDPFromLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIDPFromLoginPolicyRequest;
    fromJSON(object: any): RemoveIDPFromLoginPolicyRequest;
    toJSON(message: RemoveIDPFromLoginPolicyRequest): unknown;
    create(base?: DeepPartial<RemoveIDPFromLoginPolicyRequest>): RemoveIDPFromLoginPolicyRequest;
    fromPartial(object: DeepPartial<RemoveIDPFromLoginPolicyRequest>): RemoveIDPFromLoginPolicyRequest;
};
export declare const RemoveIDPFromLoginPolicyResponse: {
    encode(message: RemoveIDPFromLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIDPFromLoginPolicyResponse;
    fromJSON(object: any): RemoveIDPFromLoginPolicyResponse;
    toJSON(message: RemoveIDPFromLoginPolicyResponse): unknown;
    create(base?: DeepPartial<RemoveIDPFromLoginPolicyResponse>): RemoveIDPFromLoginPolicyResponse;
    fromPartial(object: DeepPartial<RemoveIDPFromLoginPolicyResponse>): RemoveIDPFromLoginPolicyResponse;
};
export declare const ListLoginPolicySecondFactorsRequest: {
    encode(_: ListLoginPolicySecondFactorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicySecondFactorsRequest;
    fromJSON(_: any): ListLoginPolicySecondFactorsRequest;
    toJSON(_: ListLoginPolicySecondFactorsRequest): unknown;
    create(base?: DeepPartial<ListLoginPolicySecondFactorsRequest>): ListLoginPolicySecondFactorsRequest;
    fromPartial(_: DeepPartial<ListLoginPolicySecondFactorsRequest>): ListLoginPolicySecondFactorsRequest;
};
export declare const ListLoginPolicySecondFactorsResponse: {
    encode(message: ListLoginPolicySecondFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicySecondFactorsResponse;
    fromJSON(object: any): ListLoginPolicySecondFactorsResponse;
    toJSON(message: ListLoginPolicySecondFactorsResponse): unknown;
    create(base?: DeepPartial<ListLoginPolicySecondFactorsResponse>): ListLoginPolicySecondFactorsResponse;
    fromPartial(object: DeepPartial<ListLoginPolicySecondFactorsResponse>): ListLoginPolicySecondFactorsResponse;
};
export declare const AddSecondFactorToLoginPolicyRequest: {
    encode(message: AddSecondFactorToLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSecondFactorToLoginPolicyRequest;
    fromJSON(object: any): AddSecondFactorToLoginPolicyRequest;
    toJSON(message: AddSecondFactorToLoginPolicyRequest): unknown;
    create(base?: DeepPartial<AddSecondFactorToLoginPolicyRequest>): AddSecondFactorToLoginPolicyRequest;
    fromPartial(object: DeepPartial<AddSecondFactorToLoginPolicyRequest>): AddSecondFactorToLoginPolicyRequest;
};
export declare const AddSecondFactorToLoginPolicyResponse: {
    encode(message: AddSecondFactorToLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSecondFactorToLoginPolicyResponse;
    fromJSON(object: any): AddSecondFactorToLoginPolicyResponse;
    toJSON(message: AddSecondFactorToLoginPolicyResponse): unknown;
    create(base?: DeepPartial<AddSecondFactorToLoginPolicyResponse>): AddSecondFactorToLoginPolicyResponse;
    fromPartial(object: DeepPartial<AddSecondFactorToLoginPolicyResponse>): AddSecondFactorToLoginPolicyResponse;
};
export declare const RemoveSecondFactorFromLoginPolicyRequest: {
    encode(message: RemoveSecondFactorFromLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSecondFactorFromLoginPolicyRequest;
    fromJSON(object: any): RemoveSecondFactorFromLoginPolicyRequest;
    toJSON(message: RemoveSecondFactorFromLoginPolicyRequest): unknown;
    create(base?: DeepPartial<RemoveSecondFactorFromLoginPolicyRequest>): RemoveSecondFactorFromLoginPolicyRequest;
    fromPartial(object: DeepPartial<RemoveSecondFactorFromLoginPolicyRequest>): RemoveSecondFactorFromLoginPolicyRequest;
};
export declare const RemoveSecondFactorFromLoginPolicyResponse: {
    encode(message: RemoveSecondFactorFromLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSecondFactorFromLoginPolicyResponse;
    fromJSON(object: any): RemoveSecondFactorFromLoginPolicyResponse;
    toJSON(message: RemoveSecondFactorFromLoginPolicyResponse): unknown;
    create(base?: DeepPartial<RemoveSecondFactorFromLoginPolicyResponse>): RemoveSecondFactorFromLoginPolicyResponse;
    fromPartial(object: DeepPartial<RemoveSecondFactorFromLoginPolicyResponse>): RemoveSecondFactorFromLoginPolicyResponse;
};
export declare const ListLoginPolicyMultiFactorsRequest: {
    encode(_: ListLoginPolicyMultiFactorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicyMultiFactorsRequest;
    fromJSON(_: any): ListLoginPolicyMultiFactorsRequest;
    toJSON(_: ListLoginPolicyMultiFactorsRequest): unknown;
    create(base?: DeepPartial<ListLoginPolicyMultiFactorsRequest>): ListLoginPolicyMultiFactorsRequest;
    fromPartial(_: DeepPartial<ListLoginPolicyMultiFactorsRequest>): ListLoginPolicyMultiFactorsRequest;
};
export declare const ListLoginPolicyMultiFactorsResponse: {
    encode(message: ListLoginPolicyMultiFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicyMultiFactorsResponse;
    fromJSON(object: any): ListLoginPolicyMultiFactorsResponse;
    toJSON(message: ListLoginPolicyMultiFactorsResponse): unknown;
    create(base?: DeepPartial<ListLoginPolicyMultiFactorsResponse>): ListLoginPolicyMultiFactorsResponse;
    fromPartial(object: DeepPartial<ListLoginPolicyMultiFactorsResponse>): ListLoginPolicyMultiFactorsResponse;
};
export declare const AddMultiFactorToLoginPolicyRequest: {
    encode(message: AddMultiFactorToLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMultiFactorToLoginPolicyRequest;
    fromJSON(object: any): AddMultiFactorToLoginPolicyRequest;
    toJSON(message: AddMultiFactorToLoginPolicyRequest): unknown;
    create(base?: DeepPartial<AddMultiFactorToLoginPolicyRequest>): AddMultiFactorToLoginPolicyRequest;
    fromPartial(object: DeepPartial<AddMultiFactorToLoginPolicyRequest>): AddMultiFactorToLoginPolicyRequest;
};
export declare const AddMultiFactorToLoginPolicyResponse: {
    encode(message: AddMultiFactorToLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMultiFactorToLoginPolicyResponse;
    fromJSON(object: any): AddMultiFactorToLoginPolicyResponse;
    toJSON(message: AddMultiFactorToLoginPolicyResponse): unknown;
    create(base?: DeepPartial<AddMultiFactorToLoginPolicyResponse>): AddMultiFactorToLoginPolicyResponse;
    fromPartial(object: DeepPartial<AddMultiFactorToLoginPolicyResponse>): AddMultiFactorToLoginPolicyResponse;
};
export declare const RemoveMultiFactorFromLoginPolicyRequest: {
    encode(message: RemoveMultiFactorFromLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMultiFactorFromLoginPolicyRequest;
    fromJSON(object: any): RemoveMultiFactorFromLoginPolicyRequest;
    toJSON(message: RemoveMultiFactorFromLoginPolicyRequest): unknown;
    create(base?: DeepPartial<RemoveMultiFactorFromLoginPolicyRequest>): RemoveMultiFactorFromLoginPolicyRequest;
    fromPartial(object: DeepPartial<RemoveMultiFactorFromLoginPolicyRequest>): RemoveMultiFactorFromLoginPolicyRequest;
};
export declare const RemoveMultiFactorFromLoginPolicyResponse: {
    encode(message: RemoveMultiFactorFromLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMultiFactorFromLoginPolicyResponse;
    fromJSON(object: any): RemoveMultiFactorFromLoginPolicyResponse;
    toJSON(message: RemoveMultiFactorFromLoginPolicyResponse): unknown;
    create(base?: DeepPartial<RemoveMultiFactorFromLoginPolicyResponse>): RemoveMultiFactorFromLoginPolicyResponse;
    fromPartial(object: DeepPartial<RemoveMultiFactorFromLoginPolicyResponse>): RemoveMultiFactorFromLoginPolicyResponse;
};
export declare const GetPasswordComplexityPolicyRequest: {
    encode(_: GetPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexityPolicyRequest;
    fromJSON(_: any): GetPasswordComplexityPolicyRequest;
    toJSON(_: GetPasswordComplexityPolicyRequest): unknown;
    create(base?: DeepPartial<GetPasswordComplexityPolicyRequest>): GetPasswordComplexityPolicyRequest;
    fromPartial(_: DeepPartial<GetPasswordComplexityPolicyRequest>): GetPasswordComplexityPolicyRequest;
};
export declare const GetPasswordComplexityPolicyResponse: {
    encode(message: GetPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexityPolicyResponse;
    fromJSON(object: any): GetPasswordComplexityPolicyResponse;
    toJSON(message: GetPasswordComplexityPolicyResponse): unknown;
    create(base?: DeepPartial<GetPasswordComplexityPolicyResponse>): GetPasswordComplexityPolicyResponse;
    fromPartial(object: DeepPartial<GetPasswordComplexityPolicyResponse>): GetPasswordComplexityPolicyResponse;
};
export declare const GetDefaultPasswordComplexityPolicyRequest: {
    encode(_: GetDefaultPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordComplexityPolicyRequest;
    fromJSON(_: any): GetDefaultPasswordComplexityPolicyRequest;
    toJSON(_: GetDefaultPasswordComplexityPolicyRequest): unknown;
    create(base?: DeepPartial<GetDefaultPasswordComplexityPolicyRequest>): GetDefaultPasswordComplexityPolicyRequest;
    fromPartial(_: DeepPartial<GetDefaultPasswordComplexityPolicyRequest>): GetDefaultPasswordComplexityPolicyRequest;
};
export declare const GetDefaultPasswordComplexityPolicyResponse: {
    encode(message: GetDefaultPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordComplexityPolicyResponse;
    fromJSON(object: any): GetDefaultPasswordComplexityPolicyResponse;
    toJSON(message: GetDefaultPasswordComplexityPolicyResponse): unknown;
    create(base?: DeepPartial<GetDefaultPasswordComplexityPolicyResponse>): GetDefaultPasswordComplexityPolicyResponse;
    fromPartial(object: DeepPartial<GetDefaultPasswordComplexityPolicyResponse>): GetDefaultPasswordComplexityPolicyResponse;
};
export declare const AddCustomPasswordComplexityPolicyRequest: {
    encode(message: AddCustomPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPasswordComplexityPolicyRequest;
    fromJSON(object: any): AddCustomPasswordComplexityPolicyRequest;
    toJSON(message: AddCustomPasswordComplexityPolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomPasswordComplexityPolicyRequest>): AddCustomPasswordComplexityPolicyRequest;
    fromPartial(object: DeepPartial<AddCustomPasswordComplexityPolicyRequest>): AddCustomPasswordComplexityPolicyRequest;
};
export declare const AddCustomPasswordComplexityPolicyResponse: {
    encode(message: AddCustomPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPasswordComplexityPolicyResponse;
    fromJSON(object: any): AddCustomPasswordComplexityPolicyResponse;
    toJSON(message: AddCustomPasswordComplexityPolicyResponse): unknown;
    create(base?: DeepPartial<AddCustomPasswordComplexityPolicyResponse>): AddCustomPasswordComplexityPolicyResponse;
    fromPartial(object: DeepPartial<AddCustomPasswordComplexityPolicyResponse>): AddCustomPasswordComplexityPolicyResponse;
};
export declare const UpdateCustomPasswordComplexityPolicyRequest: {
    encode(message: UpdateCustomPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPasswordComplexityPolicyRequest;
    fromJSON(object: any): UpdateCustomPasswordComplexityPolicyRequest;
    toJSON(message: UpdateCustomPasswordComplexityPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateCustomPasswordComplexityPolicyRequest>): UpdateCustomPasswordComplexityPolicyRequest;
    fromPartial(object: DeepPartial<UpdateCustomPasswordComplexityPolicyRequest>): UpdateCustomPasswordComplexityPolicyRequest;
};
export declare const UpdateCustomPasswordComplexityPolicyResponse: {
    encode(message: UpdateCustomPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPasswordComplexityPolicyResponse;
    fromJSON(object: any): UpdateCustomPasswordComplexityPolicyResponse;
    toJSON(message: UpdateCustomPasswordComplexityPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateCustomPasswordComplexityPolicyResponse>): UpdateCustomPasswordComplexityPolicyResponse;
    fromPartial(object: DeepPartial<UpdateCustomPasswordComplexityPolicyResponse>): UpdateCustomPasswordComplexityPolicyResponse;
};
export declare const ResetPasswordComplexityPolicyToDefaultRequest: {
    encode(_: ResetPasswordComplexityPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordComplexityPolicyToDefaultRequest;
    fromJSON(_: any): ResetPasswordComplexityPolicyToDefaultRequest;
    toJSON(_: ResetPasswordComplexityPolicyToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetPasswordComplexityPolicyToDefaultRequest>): ResetPasswordComplexityPolicyToDefaultRequest;
    fromPartial(_: DeepPartial<ResetPasswordComplexityPolicyToDefaultRequest>): ResetPasswordComplexityPolicyToDefaultRequest;
};
export declare const ResetPasswordComplexityPolicyToDefaultResponse: {
    encode(message: ResetPasswordComplexityPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordComplexityPolicyToDefaultResponse;
    fromJSON(object: any): ResetPasswordComplexityPolicyToDefaultResponse;
    toJSON(message: ResetPasswordComplexityPolicyToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetPasswordComplexityPolicyToDefaultResponse>): ResetPasswordComplexityPolicyToDefaultResponse;
    fromPartial(object: DeepPartial<ResetPasswordComplexityPolicyToDefaultResponse>): ResetPasswordComplexityPolicyToDefaultResponse;
};
export declare const GetPasswordAgePolicyRequest: {
    encode(_: GetPasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordAgePolicyRequest;
    fromJSON(_: any): GetPasswordAgePolicyRequest;
    toJSON(_: GetPasswordAgePolicyRequest): unknown;
    create(base?: DeepPartial<GetPasswordAgePolicyRequest>): GetPasswordAgePolicyRequest;
    fromPartial(_: DeepPartial<GetPasswordAgePolicyRequest>): GetPasswordAgePolicyRequest;
};
export declare const GetPasswordAgePolicyResponse: {
    encode(message: GetPasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordAgePolicyResponse;
    fromJSON(object: any): GetPasswordAgePolicyResponse;
    toJSON(message: GetPasswordAgePolicyResponse): unknown;
    create(base?: DeepPartial<GetPasswordAgePolicyResponse>): GetPasswordAgePolicyResponse;
    fromPartial(object: DeepPartial<GetPasswordAgePolicyResponse>): GetPasswordAgePolicyResponse;
};
export declare const GetDefaultPasswordAgePolicyRequest: {
    encode(_: GetDefaultPasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordAgePolicyRequest;
    fromJSON(_: any): GetDefaultPasswordAgePolicyRequest;
    toJSON(_: GetDefaultPasswordAgePolicyRequest): unknown;
    create(base?: DeepPartial<GetDefaultPasswordAgePolicyRequest>): GetDefaultPasswordAgePolicyRequest;
    fromPartial(_: DeepPartial<GetDefaultPasswordAgePolicyRequest>): GetDefaultPasswordAgePolicyRequest;
};
export declare const GetDefaultPasswordAgePolicyResponse: {
    encode(message: GetDefaultPasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordAgePolicyResponse;
    fromJSON(object: any): GetDefaultPasswordAgePolicyResponse;
    toJSON(message: GetDefaultPasswordAgePolicyResponse): unknown;
    create(base?: DeepPartial<GetDefaultPasswordAgePolicyResponse>): GetDefaultPasswordAgePolicyResponse;
    fromPartial(object: DeepPartial<GetDefaultPasswordAgePolicyResponse>): GetDefaultPasswordAgePolicyResponse;
};
export declare const AddCustomPasswordAgePolicyRequest: {
    encode(message: AddCustomPasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPasswordAgePolicyRequest;
    fromJSON(object: any): AddCustomPasswordAgePolicyRequest;
    toJSON(message: AddCustomPasswordAgePolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomPasswordAgePolicyRequest>): AddCustomPasswordAgePolicyRequest;
    fromPartial(object: DeepPartial<AddCustomPasswordAgePolicyRequest>): AddCustomPasswordAgePolicyRequest;
};
export declare const AddCustomPasswordAgePolicyResponse: {
    encode(message: AddCustomPasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPasswordAgePolicyResponse;
    fromJSON(object: any): AddCustomPasswordAgePolicyResponse;
    toJSON(message: AddCustomPasswordAgePolicyResponse): unknown;
    create(base?: DeepPartial<AddCustomPasswordAgePolicyResponse>): AddCustomPasswordAgePolicyResponse;
    fromPartial(object: DeepPartial<AddCustomPasswordAgePolicyResponse>): AddCustomPasswordAgePolicyResponse;
};
export declare const UpdateCustomPasswordAgePolicyRequest: {
    encode(message: UpdateCustomPasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPasswordAgePolicyRequest;
    fromJSON(object: any): UpdateCustomPasswordAgePolicyRequest;
    toJSON(message: UpdateCustomPasswordAgePolicyRequest): unknown;
    create(base?: DeepPartial<UpdateCustomPasswordAgePolicyRequest>): UpdateCustomPasswordAgePolicyRequest;
    fromPartial(object: DeepPartial<UpdateCustomPasswordAgePolicyRequest>): UpdateCustomPasswordAgePolicyRequest;
};
export declare const UpdateCustomPasswordAgePolicyResponse: {
    encode(message: UpdateCustomPasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPasswordAgePolicyResponse;
    fromJSON(object: any): UpdateCustomPasswordAgePolicyResponse;
    toJSON(message: UpdateCustomPasswordAgePolicyResponse): unknown;
    create(base?: DeepPartial<UpdateCustomPasswordAgePolicyResponse>): UpdateCustomPasswordAgePolicyResponse;
    fromPartial(object: DeepPartial<UpdateCustomPasswordAgePolicyResponse>): UpdateCustomPasswordAgePolicyResponse;
};
export declare const ResetPasswordAgePolicyToDefaultRequest: {
    encode(_: ResetPasswordAgePolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordAgePolicyToDefaultRequest;
    fromJSON(_: any): ResetPasswordAgePolicyToDefaultRequest;
    toJSON(_: ResetPasswordAgePolicyToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetPasswordAgePolicyToDefaultRequest>): ResetPasswordAgePolicyToDefaultRequest;
    fromPartial(_: DeepPartial<ResetPasswordAgePolicyToDefaultRequest>): ResetPasswordAgePolicyToDefaultRequest;
};
export declare const ResetPasswordAgePolicyToDefaultResponse: {
    encode(message: ResetPasswordAgePolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordAgePolicyToDefaultResponse;
    fromJSON(object: any): ResetPasswordAgePolicyToDefaultResponse;
    toJSON(message: ResetPasswordAgePolicyToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetPasswordAgePolicyToDefaultResponse>): ResetPasswordAgePolicyToDefaultResponse;
    fromPartial(object: DeepPartial<ResetPasswordAgePolicyToDefaultResponse>): ResetPasswordAgePolicyToDefaultResponse;
};
export declare const GetLockoutPolicyRequest: {
    encode(_: GetLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutPolicyRequest;
    fromJSON(_: any): GetLockoutPolicyRequest;
    toJSON(_: GetLockoutPolicyRequest): unknown;
    create(base?: DeepPartial<GetLockoutPolicyRequest>): GetLockoutPolicyRequest;
    fromPartial(_: DeepPartial<GetLockoutPolicyRequest>): GetLockoutPolicyRequest;
};
export declare const GetLockoutPolicyResponse: {
    encode(message: GetLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutPolicyResponse;
    fromJSON(object: any): GetLockoutPolicyResponse;
    toJSON(message: GetLockoutPolicyResponse): unknown;
    create(base?: DeepPartial<GetLockoutPolicyResponse>): GetLockoutPolicyResponse;
    fromPartial(object: DeepPartial<GetLockoutPolicyResponse>): GetLockoutPolicyResponse;
};
export declare const GetDefaultLockoutPolicyRequest: {
    encode(_: GetDefaultLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLockoutPolicyRequest;
    fromJSON(_: any): GetDefaultLockoutPolicyRequest;
    toJSON(_: GetDefaultLockoutPolicyRequest): unknown;
    create(base?: DeepPartial<GetDefaultLockoutPolicyRequest>): GetDefaultLockoutPolicyRequest;
    fromPartial(_: DeepPartial<GetDefaultLockoutPolicyRequest>): GetDefaultLockoutPolicyRequest;
};
export declare const GetDefaultLockoutPolicyResponse: {
    encode(message: GetDefaultLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLockoutPolicyResponse;
    fromJSON(object: any): GetDefaultLockoutPolicyResponse;
    toJSON(message: GetDefaultLockoutPolicyResponse): unknown;
    create(base?: DeepPartial<GetDefaultLockoutPolicyResponse>): GetDefaultLockoutPolicyResponse;
    fromPartial(object: DeepPartial<GetDefaultLockoutPolicyResponse>): GetDefaultLockoutPolicyResponse;
};
export declare const AddCustomLockoutPolicyRequest: {
    encode(message: AddCustomLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLockoutPolicyRequest;
    fromJSON(object: any): AddCustomLockoutPolicyRequest;
    toJSON(message: AddCustomLockoutPolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomLockoutPolicyRequest>): AddCustomLockoutPolicyRequest;
    fromPartial(object: DeepPartial<AddCustomLockoutPolicyRequest>): AddCustomLockoutPolicyRequest;
};
export declare const AddCustomLockoutPolicyResponse: {
    encode(message: AddCustomLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLockoutPolicyResponse;
    fromJSON(object: any): AddCustomLockoutPolicyResponse;
    toJSON(message: AddCustomLockoutPolicyResponse): unknown;
    create(base?: DeepPartial<AddCustomLockoutPolicyResponse>): AddCustomLockoutPolicyResponse;
    fromPartial(object: DeepPartial<AddCustomLockoutPolicyResponse>): AddCustomLockoutPolicyResponse;
};
export declare const UpdateCustomLockoutPolicyRequest: {
    encode(message: UpdateCustomLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLockoutPolicyRequest;
    fromJSON(object: any): UpdateCustomLockoutPolicyRequest;
    toJSON(message: UpdateCustomLockoutPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateCustomLockoutPolicyRequest>): UpdateCustomLockoutPolicyRequest;
    fromPartial(object: DeepPartial<UpdateCustomLockoutPolicyRequest>): UpdateCustomLockoutPolicyRequest;
};
export declare const UpdateCustomLockoutPolicyResponse: {
    encode(message: UpdateCustomLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLockoutPolicyResponse;
    fromJSON(object: any): UpdateCustomLockoutPolicyResponse;
    toJSON(message: UpdateCustomLockoutPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateCustomLockoutPolicyResponse>): UpdateCustomLockoutPolicyResponse;
    fromPartial(object: DeepPartial<UpdateCustomLockoutPolicyResponse>): UpdateCustomLockoutPolicyResponse;
};
export declare const ResetLockoutPolicyToDefaultRequest: {
    encode(_: ResetLockoutPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetLockoutPolicyToDefaultRequest;
    fromJSON(_: any): ResetLockoutPolicyToDefaultRequest;
    toJSON(_: ResetLockoutPolicyToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetLockoutPolicyToDefaultRequest>): ResetLockoutPolicyToDefaultRequest;
    fromPartial(_: DeepPartial<ResetLockoutPolicyToDefaultRequest>): ResetLockoutPolicyToDefaultRequest;
};
export declare const ResetLockoutPolicyToDefaultResponse: {
    encode(message: ResetLockoutPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetLockoutPolicyToDefaultResponse;
    fromJSON(object: any): ResetLockoutPolicyToDefaultResponse;
    toJSON(message: ResetLockoutPolicyToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetLockoutPolicyToDefaultResponse>): ResetLockoutPolicyToDefaultResponse;
    fromPartial(object: DeepPartial<ResetLockoutPolicyToDefaultResponse>): ResetLockoutPolicyToDefaultResponse;
};
export declare const GetPrivacyPolicyRequest: {
    encode(_: GetPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPrivacyPolicyRequest;
    fromJSON(_: any): GetPrivacyPolicyRequest;
    toJSON(_: GetPrivacyPolicyRequest): unknown;
    create(base?: DeepPartial<GetPrivacyPolicyRequest>): GetPrivacyPolicyRequest;
    fromPartial(_: DeepPartial<GetPrivacyPolicyRequest>): GetPrivacyPolicyRequest;
};
export declare const GetPrivacyPolicyResponse: {
    encode(message: GetPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPrivacyPolicyResponse;
    fromJSON(object: any): GetPrivacyPolicyResponse;
    toJSON(message: GetPrivacyPolicyResponse): unknown;
    create(base?: DeepPartial<GetPrivacyPolicyResponse>): GetPrivacyPolicyResponse;
    fromPartial(object: DeepPartial<GetPrivacyPolicyResponse>): GetPrivacyPolicyResponse;
};
export declare const GetDefaultPrivacyPolicyRequest: {
    encode(_: GetDefaultPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPrivacyPolicyRequest;
    fromJSON(_: any): GetDefaultPrivacyPolicyRequest;
    toJSON(_: GetDefaultPrivacyPolicyRequest): unknown;
    create(base?: DeepPartial<GetDefaultPrivacyPolicyRequest>): GetDefaultPrivacyPolicyRequest;
    fromPartial(_: DeepPartial<GetDefaultPrivacyPolicyRequest>): GetDefaultPrivacyPolicyRequest;
};
export declare const GetDefaultPrivacyPolicyResponse: {
    encode(message: GetDefaultPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPrivacyPolicyResponse;
    fromJSON(object: any): GetDefaultPrivacyPolicyResponse;
    toJSON(message: GetDefaultPrivacyPolicyResponse): unknown;
    create(base?: DeepPartial<GetDefaultPrivacyPolicyResponse>): GetDefaultPrivacyPolicyResponse;
    fromPartial(object: DeepPartial<GetDefaultPrivacyPolicyResponse>): GetDefaultPrivacyPolicyResponse;
};
export declare const AddCustomPrivacyPolicyRequest: {
    encode(message: AddCustomPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPrivacyPolicyRequest;
    fromJSON(object: any): AddCustomPrivacyPolicyRequest;
    toJSON(message: AddCustomPrivacyPolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomPrivacyPolicyRequest>): AddCustomPrivacyPolicyRequest;
    fromPartial(object: DeepPartial<AddCustomPrivacyPolicyRequest>): AddCustomPrivacyPolicyRequest;
};
export declare const AddCustomPrivacyPolicyResponse: {
    encode(message: AddCustomPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPrivacyPolicyResponse;
    fromJSON(object: any): AddCustomPrivacyPolicyResponse;
    toJSON(message: AddCustomPrivacyPolicyResponse): unknown;
    create(base?: DeepPartial<AddCustomPrivacyPolicyResponse>): AddCustomPrivacyPolicyResponse;
    fromPartial(object: DeepPartial<AddCustomPrivacyPolicyResponse>): AddCustomPrivacyPolicyResponse;
};
export declare const UpdateCustomPrivacyPolicyRequest: {
    encode(message: UpdateCustomPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPrivacyPolicyRequest;
    fromJSON(object: any): UpdateCustomPrivacyPolicyRequest;
    toJSON(message: UpdateCustomPrivacyPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateCustomPrivacyPolicyRequest>): UpdateCustomPrivacyPolicyRequest;
    fromPartial(object: DeepPartial<UpdateCustomPrivacyPolicyRequest>): UpdateCustomPrivacyPolicyRequest;
};
export declare const UpdateCustomPrivacyPolicyResponse: {
    encode(message: UpdateCustomPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPrivacyPolicyResponse;
    fromJSON(object: any): UpdateCustomPrivacyPolicyResponse;
    toJSON(message: UpdateCustomPrivacyPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateCustomPrivacyPolicyResponse>): UpdateCustomPrivacyPolicyResponse;
    fromPartial(object: DeepPartial<UpdateCustomPrivacyPolicyResponse>): UpdateCustomPrivacyPolicyResponse;
};
export declare const ResetPrivacyPolicyToDefaultRequest: {
    encode(_: ResetPrivacyPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetPrivacyPolicyToDefaultRequest;
    fromJSON(_: any): ResetPrivacyPolicyToDefaultRequest;
    toJSON(_: ResetPrivacyPolicyToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetPrivacyPolicyToDefaultRequest>): ResetPrivacyPolicyToDefaultRequest;
    fromPartial(_: DeepPartial<ResetPrivacyPolicyToDefaultRequest>): ResetPrivacyPolicyToDefaultRequest;
};
export declare const ResetPrivacyPolicyToDefaultResponse: {
    encode(message: ResetPrivacyPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetPrivacyPolicyToDefaultResponse;
    fromJSON(object: any): ResetPrivacyPolicyToDefaultResponse;
    toJSON(message: ResetPrivacyPolicyToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetPrivacyPolicyToDefaultResponse>): ResetPrivacyPolicyToDefaultResponse;
    fromPartial(object: DeepPartial<ResetPrivacyPolicyToDefaultResponse>): ResetPrivacyPolicyToDefaultResponse;
};
export declare const GetNotificationPolicyRequest: {
    encode(_: GetNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationPolicyRequest;
    fromJSON(_: any): GetNotificationPolicyRequest;
    toJSON(_: GetNotificationPolicyRequest): unknown;
    create(base?: DeepPartial<GetNotificationPolicyRequest>): GetNotificationPolicyRequest;
    fromPartial(_: DeepPartial<GetNotificationPolicyRequest>): GetNotificationPolicyRequest;
};
export declare const GetNotificationPolicyResponse: {
    encode(message: GetNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationPolicyResponse;
    fromJSON(object: any): GetNotificationPolicyResponse;
    toJSON(message: GetNotificationPolicyResponse): unknown;
    create(base?: DeepPartial<GetNotificationPolicyResponse>): GetNotificationPolicyResponse;
    fromPartial(object: DeepPartial<GetNotificationPolicyResponse>): GetNotificationPolicyResponse;
};
export declare const GetDefaultNotificationPolicyRequest: {
    encode(_: GetDefaultNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultNotificationPolicyRequest;
    fromJSON(_: any): GetDefaultNotificationPolicyRequest;
    toJSON(_: GetDefaultNotificationPolicyRequest): unknown;
    create(base?: DeepPartial<GetDefaultNotificationPolicyRequest>): GetDefaultNotificationPolicyRequest;
    fromPartial(_: DeepPartial<GetDefaultNotificationPolicyRequest>): GetDefaultNotificationPolicyRequest;
};
export declare const GetDefaultNotificationPolicyResponse: {
    encode(message: GetDefaultNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultNotificationPolicyResponse;
    fromJSON(object: any): GetDefaultNotificationPolicyResponse;
    toJSON(message: GetDefaultNotificationPolicyResponse): unknown;
    create(base?: DeepPartial<GetDefaultNotificationPolicyResponse>): GetDefaultNotificationPolicyResponse;
    fromPartial(object: DeepPartial<GetDefaultNotificationPolicyResponse>): GetDefaultNotificationPolicyResponse;
};
export declare const AddCustomNotificationPolicyRequest: {
    encode(message: AddCustomNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomNotificationPolicyRequest;
    fromJSON(object: any): AddCustomNotificationPolicyRequest;
    toJSON(message: AddCustomNotificationPolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomNotificationPolicyRequest>): AddCustomNotificationPolicyRequest;
    fromPartial(object: DeepPartial<AddCustomNotificationPolicyRequest>): AddCustomNotificationPolicyRequest;
};
export declare const AddCustomNotificationPolicyResponse: {
    encode(message: AddCustomNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomNotificationPolicyResponse;
    fromJSON(object: any): AddCustomNotificationPolicyResponse;
    toJSON(message: AddCustomNotificationPolicyResponse): unknown;
    create(base?: DeepPartial<AddCustomNotificationPolicyResponse>): AddCustomNotificationPolicyResponse;
    fromPartial(object: DeepPartial<AddCustomNotificationPolicyResponse>): AddCustomNotificationPolicyResponse;
};
export declare const UpdateCustomNotificationPolicyRequest: {
    encode(message: UpdateCustomNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomNotificationPolicyRequest;
    fromJSON(object: any): UpdateCustomNotificationPolicyRequest;
    toJSON(message: UpdateCustomNotificationPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateCustomNotificationPolicyRequest>): UpdateCustomNotificationPolicyRequest;
    fromPartial(object: DeepPartial<UpdateCustomNotificationPolicyRequest>): UpdateCustomNotificationPolicyRequest;
};
export declare const UpdateCustomNotificationPolicyResponse: {
    encode(message: UpdateCustomNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomNotificationPolicyResponse;
    fromJSON(object: any): UpdateCustomNotificationPolicyResponse;
    toJSON(message: UpdateCustomNotificationPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateCustomNotificationPolicyResponse>): UpdateCustomNotificationPolicyResponse;
    fromPartial(object: DeepPartial<UpdateCustomNotificationPolicyResponse>): UpdateCustomNotificationPolicyResponse;
};
export declare const ResetNotificationPolicyToDefaultRequest: {
    encode(_: ResetNotificationPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetNotificationPolicyToDefaultRequest;
    fromJSON(_: any): ResetNotificationPolicyToDefaultRequest;
    toJSON(_: ResetNotificationPolicyToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetNotificationPolicyToDefaultRequest>): ResetNotificationPolicyToDefaultRequest;
    fromPartial(_: DeepPartial<ResetNotificationPolicyToDefaultRequest>): ResetNotificationPolicyToDefaultRequest;
};
export declare const ResetNotificationPolicyToDefaultResponse: {
    encode(message: ResetNotificationPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetNotificationPolicyToDefaultResponse;
    fromJSON(object: any): ResetNotificationPolicyToDefaultResponse;
    toJSON(message: ResetNotificationPolicyToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetNotificationPolicyToDefaultResponse>): ResetNotificationPolicyToDefaultResponse;
    fromPartial(object: DeepPartial<ResetNotificationPolicyToDefaultResponse>): ResetNotificationPolicyToDefaultResponse;
};
export declare const GetLabelPolicyRequest: {
    encode(_: GetLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelPolicyRequest;
    fromJSON(_: any): GetLabelPolicyRequest;
    toJSON(_: GetLabelPolicyRequest): unknown;
    create(base?: DeepPartial<GetLabelPolicyRequest>): GetLabelPolicyRequest;
    fromPartial(_: DeepPartial<GetLabelPolicyRequest>): GetLabelPolicyRequest;
};
export declare const GetLabelPolicyResponse: {
    encode(message: GetLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelPolicyResponse;
    fromJSON(object: any): GetLabelPolicyResponse;
    toJSON(message: GetLabelPolicyResponse): unknown;
    create(base?: DeepPartial<GetLabelPolicyResponse>): GetLabelPolicyResponse;
    fromPartial(object: DeepPartial<GetLabelPolicyResponse>): GetLabelPolicyResponse;
};
export declare const GetPreviewLabelPolicyRequest: {
    encode(_: GetPreviewLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPreviewLabelPolicyRequest;
    fromJSON(_: any): GetPreviewLabelPolicyRequest;
    toJSON(_: GetPreviewLabelPolicyRequest): unknown;
    create(base?: DeepPartial<GetPreviewLabelPolicyRequest>): GetPreviewLabelPolicyRequest;
    fromPartial(_: DeepPartial<GetPreviewLabelPolicyRequest>): GetPreviewLabelPolicyRequest;
};
export declare const GetPreviewLabelPolicyResponse: {
    encode(message: GetPreviewLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPreviewLabelPolicyResponse;
    fromJSON(object: any): GetPreviewLabelPolicyResponse;
    toJSON(message: GetPreviewLabelPolicyResponse): unknown;
    create(base?: DeepPartial<GetPreviewLabelPolicyResponse>): GetPreviewLabelPolicyResponse;
    fromPartial(object: DeepPartial<GetPreviewLabelPolicyResponse>): GetPreviewLabelPolicyResponse;
};
export declare const GetDefaultLabelPolicyRequest: {
    encode(_: GetDefaultLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLabelPolicyRequest;
    fromJSON(_: any): GetDefaultLabelPolicyRequest;
    toJSON(_: GetDefaultLabelPolicyRequest): unknown;
    create(base?: DeepPartial<GetDefaultLabelPolicyRequest>): GetDefaultLabelPolicyRequest;
    fromPartial(_: DeepPartial<GetDefaultLabelPolicyRequest>): GetDefaultLabelPolicyRequest;
};
export declare const GetDefaultLabelPolicyResponse: {
    encode(message: GetDefaultLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLabelPolicyResponse;
    fromJSON(object: any): GetDefaultLabelPolicyResponse;
    toJSON(message: GetDefaultLabelPolicyResponse): unknown;
    create(base?: DeepPartial<GetDefaultLabelPolicyResponse>): GetDefaultLabelPolicyResponse;
    fromPartial(object: DeepPartial<GetDefaultLabelPolicyResponse>): GetDefaultLabelPolicyResponse;
};
export declare const AddCustomLabelPolicyRequest: {
    encode(message: AddCustomLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLabelPolicyRequest;
    fromJSON(object: any): AddCustomLabelPolicyRequest;
    toJSON(message: AddCustomLabelPolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomLabelPolicyRequest>): AddCustomLabelPolicyRequest;
    fromPartial(object: DeepPartial<AddCustomLabelPolicyRequest>): AddCustomLabelPolicyRequest;
};
export declare const AddCustomLabelPolicyResponse: {
    encode(message: AddCustomLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLabelPolicyResponse;
    fromJSON(object: any): AddCustomLabelPolicyResponse;
    toJSON(message: AddCustomLabelPolicyResponse): unknown;
    create(base?: DeepPartial<AddCustomLabelPolicyResponse>): AddCustomLabelPolicyResponse;
    fromPartial(object: DeepPartial<AddCustomLabelPolicyResponse>): AddCustomLabelPolicyResponse;
};
export declare const UpdateCustomLabelPolicyRequest: {
    encode(message: UpdateCustomLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLabelPolicyRequest;
    fromJSON(object: any): UpdateCustomLabelPolicyRequest;
    toJSON(message: UpdateCustomLabelPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateCustomLabelPolicyRequest>): UpdateCustomLabelPolicyRequest;
    fromPartial(object: DeepPartial<UpdateCustomLabelPolicyRequest>): UpdateCustomLabelPolicyRequest;
};
export declare const UpdateCustomLabelPolicyResponse: {
    encode(message: UpdateCustomLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLabelPolicyResponse;
    fromJSON(object: any): UpdateCustomLabelPolicyResponse;
    toJSON(message: UpdateCustomLabelPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateCustomLabelPolicyResponse>): UpdateCustomLabelPolicyResponse;
    fromPartial(object: DeepPartial<UpdateCustomLabelPolicyResponse>): UpdateCustomLabelPolicyResponse;
};
export declare const ActivateCustomLabelPolicyRequest: {
    encode(_: ActivateCustomLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateCustomLabelPolicyRequest;
    fromJSON(_: any): ActivateCustomLabelPolicyRequest;
    toJSON(_: ActivateCustomLabelPolicyRequest): unknown;
    create(base?: DeepPartial<ActivateCustomLabelPolicyRequest>): ActivateCustomLabelPolicyRequest;
    fromPartial(_: DeepPartial<ActivateCustomLabelPolicyRequest>): ActivateCustomLabelPolicyRequest;
};
export declare const ActivateCustomLabelPolicyResponse: {
    encode(message: ActivateCustomLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateCustomLabelPolicyResponse;
    fromJSON(object: any): ActivateCustomLabelPolicyResponse;
    toJSON(message: ActivateCustomLabelPolicyResponse): unknown;
    create(base?: DeepPartial<ActivateCustomLabelPolicyResponse>): ActivateCustomLabelPolicyResponse;
    fromPartial(object: DeepPartial<ActivateCustomLabelPolicyResponse>): ActivateCustomLabelPolicyResponse;
};
export declare const RemoveCustomLabelPolicyLogoRequest: {
    encode(_: RemoveCustomLabelPolicyLogoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyLogoRequest;
    fromJSON(_: any): RemoveCustomLabelPolicyLogoRequest;
    toJSON(_: RemoveCustomLabelPolicyLogoRequest): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyLogoRequest>): RemoveCustomLabelPolicyLogoRequest;
    fromPartial(_: DeepPartial<RemoveCustomLabelPolicyLogoRequest>): RemoveCustomLabelPolicyLogoRequest;
};
export declare const RemoveCustomLabelPolicyLogoResponse: {
    encode(message: RemoveCustomLabelPolicyLogoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyLogoResponse;
    fromJSON(object: any): RemoveCustomLabelPolicyLogoResponse;
    toJSON(message: RemoveCustomLabelPolicyLogoResponse): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyLogoResponse>): RemoveCustomLabelPolicyLogoResponse;
    fromPartial(object: DeepPartial<RemoveCustomLabelPolicyLogoResponse>): RemoveCustomLabelPolicyLogoResponse;
};
export declare const RemoveCustomLabelPolicyLogoDarkRequest: {
    encode(_: RemoveCustomLabelPolicyLogoDarkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyLogoDarkRequest;
    fromJSON(_: any): RemoveCustomLabelPolicyLogoDarkRequest;
    toJSON(_: RemoveCustomLabelPolicyLogoDarkRequest): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyLogoDarkRequest>): RemoveCustomLabelPolicyLogoDarkRequest;
    fromPartial(_: DeepPartial<RemoveCustomLabelPolicyLogoDarkRequest>): RemoveCustomLabelPolicyLogoDarkRequest;
};
export declare const RemoveCustomLabelPolicyLogoDarkResponse: {
    encode(message: RemoveCustomLabelPolicyLogoDarkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyLogoDarkResponse;
    fromJSON(object: any): RemoveCustomLabelPolicyLogoDarkResponse;
    toJSON(message: RemoveCustomLabelPolicyLogoDarkResponse): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyLogoDarkResponse>): RemoveCustomLabelPolicyLogoDarkResponse;
    fromPartial(object: DeepPartial<RemoveCustomLabelPolicyLogoDarkResponse>): RemoveCustomLabelPolicyLogoDarkResponse;
};
export declare const RemoveCustomLabelPolicyIconRequest: {
    encode(_: RemoveCustomLabelPolicyIconRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyIconRequest;
    fromJSON(_: any): RemoveCustomLabelPolicyIconRequest;
    toJSON(_: RemoveCustomLabelPolicyIconRequest): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyIconRequest>): RemoveCustomLabelPolicyIconRequest;
    fromPartial(_: DeepPartial<RemoveCustomLabelPolicyIconRequest>): RemoveCustomLabelPolicyIconRequest;
};
export declare const RemoveCustomLabelPolicyIconResponse: {
    encode(message: RemoveCustomLabelPolicyIconResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyIconResponse;
    fromJSON(object: any): RemoveCustomLabelPolicyIconResponse;
    toJSON(message: RemoveCustomLabelPolicyIconResponse): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyIconResponse>): RemoveCustomLabelPolicyIconResponse;
    fromPartial(object: DeepPartial<RemoveCustomLabelPolicyIconResponse>): RemoveCustomLabelPolicyIconResponse;
};
export declare const RemoveCustomLabelPolicyIconDarkRequest: {
    encode(_: RemoveCustomLabelPolicyIconDarkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyIconDarkRequest;
    fromJSON(_: any): RemoveCustomLabelPolicyIconDarkRequest;
    toJSON(_: RemoveCustomLabelPolicyIconDarkRequest): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyIconDarkRequest>): RemoveCustomLabelPolicyIconDarkRequest;
    fromPartial(_: DeepPartial<RemoveCustomLabelPolicyIconDarkRequest>): RemoveCustomLabelPolicyIconDarkRequest;
};
export declare const RemoveCustomLabelPolicyIconDarkResponse: {
    encode(message: RemoveCustomLabelPolicyIconDarkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyIconDarkResponse;
    fromJSON(object: any): RemoveCustomLabelPolicyIconDarkResponse;
    toJSON(message: RemoveCustomLabelPolicyIconDarkResponse): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyIconDarkResponse>): RemoveCustomLabelPolicyIconDarkResponse;
    fromPartial(object: DeepPartial<RemoveCustomLabelPolicyIconDarkResponse>): RemoveCustomLabelPolicyIconDarkResponse;
};
export declare const RemoveCustomLabelPolicyFontRequest: {
    encode(_: RemoveCustomLabelPolicyFontRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyFontRequest;
    fromJSON(_: any): RemoveCustomLabelPolicyFontRequest;
    toJSON(_: RemoveCustomLabelPolicyFontRequest): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyFontRequest>): RemoveCustomLabelPolicyFontRequest;
    fromPartial(_: DeepPartial<RemoveCustomLabelPolicyFontRequest>): RemoveCustomLabelPolicyFontRequest;
};
export declare const RemoveCustomLabelPolicyFontResponse: {
    encode(message: RemoveCustomLabelPolicyFontResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyFontResponse;
    fromJSON(object: any): RemoveCustomLabelPolicyFontResponse;
    toJSON(message: RemoveCustomLabelPolicyFontResponse): unknown;
    create(base?: DeepPartial<RemoveCustomLabelPolicyFontResponse>): RemoveCustomLabelPolicyFontResponse;
    fromPartial(object: DeepPartial<RemoveCustomLabelPolicyFontResponse>): RemoveCustomLabelPolicyFontResponse;
};
export declare const ResetLabelPolicyToDefaultRequest: {
    encode(_: ResetLabelPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetLabelPolicyToDefaultRequest;
    fromJSON(_: any): ResetLabelPolicyToDefaultRequest;
    toJSON(_: ResetLabelPolicyToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetLabelPolicyToDefaultRequest>): ResetLabelPolicyToDefaultRequest;
    fromPartial(_: DeepPartial<ResetLabelPolicyToDefaultRequest>): ResetLabelPolicyToDefaultRequest;
};
export declare const ResetLabelPolicyToDefaultResponse: {
    encode(message: ResetLabelPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetLabelPolicyToDefaultResponse;
    fromJSON(object: any): ResetLabelPolicyToDefaultResponse;
    toJSON(message: ResetLabelPolicyToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetLabelPolicyToDefaultResponse>): ResetLabelPolicyToDefaultResponse;
    fromPartial(object: DeepPartial<ResetLabelPolicyToDefaultResponse>): ResetLabelPolicyToDefaultResponse;
};
export declare const GetCustomInitMessageTextRequest: {
    encode(message: GetCustomInitMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomInitMessageTextRequest;
    fromJSON(object: any): GetCustomInitMessageTextRequest;
    toJSON(message: GetCustomInitMessageTextRequest): unknown;
    create(base?: DeepPartial<GetCustomInitMessageTextRequest>): GetCustomInitMessageTextRequest;
    fromPartial(object: DeepPartial<GetCustomInitMessageTextRequest>): GetCustomInitMessageTextRequest;
};
export declare const GetCustomInitMessageTextResponse: {
    encode(message: GetCustomInitMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomInitMessageTextResponse;
    fromJSON(object: any): GetCustomInitMessageTextResponse;
    toJSON(message: GetCustomInitMessageTextResponse): unknown;
    create(base?: DeepPartial<GetCustomInitMessageTextResponse>): GetCustomInitMessageTextResponse;
    fromPartial(object: DeepPartial<GetCustomInitMessageTextResponse>): GetCustomInitMessageTextResponse;
};
export declare const GetDefaultInitMessageTextRequest: {
    encode(message: GetDefaultInitMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultInitMessageTextRequest;
    fromJSON(object: any): GetDefaultInitMessageTextRequest;
    toJSON(message: GetDefaultInitMessageTextRequest): unknown;
    create(base?: DeepPartial<GetDefaultInitMessageTextRequest>): GetDefaultInitMessageTextRequest;
    fromPartial(object: DeepPartial<GetDefaultInitMessageTextRequest>): GetDefaultInitMessageTextRequest;
};
export declare const GetDefaultInitMessageTextResponse: {
    encode(message: GetDefaultInitMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultInitMessageTextResponse;
    fromJSON(object: any): GetDefaultInitMessageTextResponse;
    toJSON(message: GetDefaultInitMessageTextResponse): unknown;
    create(base?: DeepPartial<GetDefaultInitMessageTextResponse>): GetDefaultInitMessageTextResponse;
    fromPartial(object: DeepPartial<GetDefaultInitMessageTextResponse>): GetDefaultInitMessageTextResponse;
};
export declare const SetCustomInitMessageTextRequest: {
    encode(message: SetCustomInitMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomInitMessageTextRequest;
    fromJSON(object: any): SetCustomInitMessageTextRequest;
    toJSON(message: SetCustomInitMessageTextRequest): unknown;
    create(base?: DeepPartial<SetCustomInitMessageTextRequest>): SetCustomInitMessageTextRequest;
    fromPartial(object: DeepPartial<SetCustomInitMessageTextRequest>): SetCustomInitMessageTextRequest;
};
export declare const SetCustomInitMessageTextResponse: {
    encode(message: SetCustomInitMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomInitMessageTextResponse;
    fromJSON(object: any): SetCustomInitMessageTextResponse;
    toJSON(message: SetCustomInitMessageTextResponse): unknown;
    create(base?: DeepPartial<SetCustomInitMessageTextResponse>): SetCustomInitMessageTextResponse;
    fromPartial(object: DeepPartial<SetCustomInitMessageTextResponse>): SetCustomInitMessageTextResponse;
};
export declare const ResetCustomInitMessageTextToDefaultRequest: {
    encode(message: ResetCustomInitMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomInitMessageTextToDefaultRequest;
    fromJSON(object: any): ResetCustomInitMessageTextToDefaultRequest;
    toJSON(message: ResetCustomInitMessageTextToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomInitMessageTextToDefaultRequest>): ResetCustomInitMessageTextToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomInitMessageTextToDefaultRequest>): ResetCustomInitMessageTextToDefaultRequest;
};
export declare const ResetCustomInitMessageTextToDefaultResponse: {
    encode(message: ResetCustomInitMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomInitMessageTextToDefaultResponse;
    fromJSON(object: any): ResetCustomInitMessageTextToDefaultResponse;
    toJSON(message: ResetCustomInitMessageTextToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomInitMessageTextToDefaultResponse>): ResetCustomInitMessageTextToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomInitMessageTextToDefaultResponse>): ResetCustomInitMessageTextToDefaultResponse;
};
export declare const GetDefaultLoginTextsRequest: {
    encode(message: GetDefaultLoginTextsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLoginTextsRequest;
    fromJSON(object: any): GetDefaultLoginTextsRequest;
    toJSON(message: GetDefaultLoginTextsRequest): unknown;
    create(base?: DeepPartial<GetDefaultLoginTextsRequest>): GetDefaultLoginTextsRequest;
    fromPartial(object: DeepPartial<GetDefaultLoginTextsRequest>): GetDefaultLoginTextsRequest;
};
export declare const GetDefaultLoginTextsResponse: {
    encode(message: GetDefaultLoginTextsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLoginTextsResponse;
    fromJSON(object: any): GetDefaultLoginTextsResponse;
    toJSON(message: GetDefaultLoginTextsResponse): unknown;
    create(base?: DeepPartial<GetDefaultLoginTextsResponse>): GetDefaultLoginTextsResponse;
    fromPartial(object: DeepPartial<GetDefaultLoginTextsResponse>): GetDefaultLoginTextsResponse;
};
export declare const GetCustomLoginTextsRequest: {
    encode(message: GetCustomLoginTextsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomLoginTextsRequest;
    fromJSON(object: any): GetCustomLoginTextsRequest;
    toJSON(message: GetCustomLoginTextsRequest): unknown;
    create(base?: DeepPartial<GetCustomLoginTextsRequest>): GetCustomLoginTextsRequest;
    fromPartial(object: DeepPartial<GetCustomLoginTextsRequest>): GetCustomLoginTextsRequest;
};
export declare const GetCustomLoginTextsResponse: {
    encode(message: GetCustomLoginTextsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomLoginTextsResponse;
    fromJSON(object: any): GetCustomLoginTextsResponse;
    toJSON(message: GetCustomLoginTextsResponse): unknown;
    create(base?: DeepPartial<GetCustomLoginTextsResponse>): GetCustomLoginTextsResponse;
    fromPartial(object: DeepPartial<GetCustomLoginTextsResponse>): GetCustomLoginTextsResponse;
};
export declare const SetCustomLoginTextsRequest: {
    encode(message: SetCustomLoginTextsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomLoginTextsRequest;
    fromJSON(object: any): SetCustomLoginTextsRequest;
    toJSON(message: SetCustomLoginTextsRequest): unknown;
    create(base?: DeepPartial<SetCustomLoginTextsRequest>): SetCustomLoginTextsRequest;
    fromPartial(object: DeepPartial<SetCustomLoginTextsRequest>): SetCustomLoginTextsRequest;
};
export declare const SetCustomLoginTextsResponse: {
    encode(message: SetCustomLoginTextsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomLoginTextsResponse;
    fromJSON(object: any): SetCustomLoginTextsResponse;
    toJSON(message: SetCustomLoginTextsResponse): unknown;
    create(base?: DeepPartial<SetCustomLoginTextsResponse>): SetCustomLoginTextsResponse;
    fromPartial(object: DeepPartial<SetCustomLoginTextsResponse>): SetCustomLoginTextsResponse;
};
export declare const ResetCustomLoginTextsToDefaultRequest: {
    encode(message: ResetCustomLoginTextsToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomLoginTextsToDefaultRequest;
    fromJSON(object: any): ResetCustomLoginTextsToDefaultRequest;
    toJSON(message: ResetCustomLoginTextsToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomLoginTextsToDefaultRequest>): ResetCustomLoginTextsToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomLoginTextsToDefaultRequest>): ResetCustomLoginTextsToDefaultRequest;
};
export declare const ResetCustomLoginTextsToDefaultResponse: {
    encode(message: ResetCustomLoginTextsToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomLoginTextsToDefaultResponse;
    fromJSON(object: any): ResetCustomLoginTextsToDefaultResponse;
    toJSON(message: ResetCustomLoginTextsToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomLoginTextsToDefaultResponse>): ResetCustomLoginTextsToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomLoginTextsToDefaultResponse>): ResetCustomLoginTextsToDefaultResponse;
};
export declare const GetCustomPasswordResetMessageTextRequest: {
    encode(message: GetCustomPasswordResetMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordResetMessageTextRequest;
    fromJSON(object: any): GetCustomPasswordResetMessageTextRequest;
    toJSON(message: GetCustomPasswordResetMessageTextRequest): unknown;
    create(base?: DeepPartial<GetCustomPasswordResetMessageTextRequest>): GetCustomPasswordResetMessageTextRequest;
    fromPartial(object: DeepPartial<GetCustomPasswordResetMessageTextRequest>): GetCustomPasswordResetMessageTextRequest;
};
export declare const GetCustomPasswordResetMessageTextResponse: {
    encode(message: GetCustomPasswordResetMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordResetMessageTextResponse;
    fromJSON(object: any): GetCustomPasswordResetMessageTextResponse;
    toJSON(message: GetCustomPasswordResetMessageTextResponse): unknown;
    create(base?: DeepPartial<GetCustomPasswordResetMessageTextResponse>): GetCustomPasswordResetMessageTextResponse;
    fromPartial(object: DeepPartial<GetCustomPasswordResetMessageTextResponse>): GetCustomPasswordResetMessageTextResponse;
};
export declare const GetDefaultPasswordResetMessageTextRequest: {
    encode(message: GetDefaultPasswordResetMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordResetMessageTextRequest;
    fromJSON(object: any): GetDefaultPasswordResetMessageTextRequest;
    toJSON(message: GetDefaultPasswordResetMessageTextRequest): unknown;
    create(base?: DeepPartial<GetDefaultPasswordResetMessageTextRequest>): GetDefaultPasswordResetMessageTextRequest;
    fromPartial(object: DeepPartial<GetDefaultPasswordResetMessageTextRequest>): GetDefaultPasswordResetMessageTextRequest;
};
export declare const GetDefaultPasswordResetMessageTextResponse: {
    encode(message: GetDefaultPasswordResetMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordResetMessageTextResponse;
    fromJSON(object: any): GetDefaultPasswordResetMessageTextResponse;
    toJSON(message: GetDefaultPasswordResetMessageTextResponse): unknown;
    create(base?: DeepPartial<GetDefaultPasswordResetMessageTextResponse>): GetDefaultPasswordResetMessageTextResponse;
    fromPartial(object: DeepPartial<GetDefaultPasswordResetMessageTextResponse>): GetDefaultPasswordResetMessageTextResponse;
};
export declare const SetCustomPasswordResetMessageTextRequest: {
    encode(message: SetCustomPasswordResetMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordResetMessageTextRequest;
    fromJSON(object: any): SetCustomPasswordResetMessageTextRequest;
    toJSON(message: SetCustomPasswordResetMessageTextRequest): unknown;
    create(base?: DeepPartial<SetCustomPasswordResetMessageTextRequest>): SetCustomPasswordResetMessageTextRequest;
    fromPartial(object: DeepPartial<SetCustomPasswordResetMessageTextRequest>): SetCustomPasswordResetMessageTextRequest;
};
export declare const SetCustomPasswordResetMessageTextResponse: {
    encode(message: SetCustomPasswordResetMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordResetMessageTextResponse;
    fromJSON(object: any): SetCustomPasswordResetMessageTextResponse;
    toJSON(message: SetCustomPasswordResetMessageTextResponse): unknown;
    create(base?: DeepPartial<SetCustomPasswordResetMessageTextResponse>): SetCustomPasswordResetMessageTextResponse;
    fromPartial(object: DeepPartial<SetCustomPasswordResetMessageTextResponse>): SetCustomPasswordResetMessageTextResponse;
};
export declare const ResetCustomPasswordResetMessageTextToDefaultRequest: {
    encode(message: ResetCustomPasswordResetMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordResetMessageTextToDefaultRequest;
    fromJSON(object: any): ResetCustomPasswordResetMessageTextToDefaultRequest;
    toJSON(message: ResetCustomPasswordResetMessageTextToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultRequest>): ResetCustomPasswordResetMessageTextToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultRequest>): ResetCustomPasswordResetMessageTextToDefaultRequest;
};
export declare const ResetCustomPasswordResetMessageTextToDefaultResponse: {
    encode(message: ResetCustomPasswordResetMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordResetMessageTextToDefaultResponse;
    fromJSON(object: any): ResetCustomPasswordResetMessageTextToDefaultResponse;
    toJSON(message: ResetCustomPasswordResetMessageTextToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultResponse>): ResetCustomPasswordResetMessageTextToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultResponse>): ResetCustomPasswordResetMessageTextToDefaultResponse;
};
export declare const GetCustomVerifyEmailMessageTextRequest: {
    encode(message: GetCustomVerifyEmailMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyEmailMessageTextRequest;
    fromJSON(object: any): GetCustomVerifyEmailMessageTextRequest;
    toJSON(message: GetCustomVerifyEmailMessageTextRequest): unknown;
    create(base?: DeepPartial<GetCustomVerifyEmailMessageTextRequest>): GetCustomVerifyEmailMessageTextRequest;
    fromPartial(object: DeepPartial<GetCustomVerifyEmailMessageTextRequest>): GetCustomVerifyEmailMessageTextRequest;
};
export declare const GetCustomVerifyEmailMessageTextResponse: {
    encode(message: GetCustomVerifyEmailMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyEmailMessageTextResponse;
    fromJSON(object: any): GetCustomVerifyEmailMessageTextResponse;
    toJSON(message: GetCustomVerifyEmailMessageTextResponse): unknown;
    create(base?: DeepPartial<GetCustomVerifyEmailMessageTextResponse>): GetCustomVerifyEmailMessageTextResponse;
    fromPartial(object: DeepPartial<GetCustomVerifyEmailMessageTextResponse>): GetCustomVerifyEmailMessageTextResponse;
};
export declare const GetDefaultVerifyEmailMessageTextRequest: {
    encode(message: GetDefaultVerifyEmailMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyEmailMessageTextRequest;
    fromJSON(object: any): GetDefaultVerifyEmailMessageTextRequest;
    toJSON(message: GetDefaultVerifyEmailMessageTextRequest): unknown;
    create(base?: DeepPartial<GetDefaultVerifyEmailMessageTextRequest>): GetDefaultVerifyEmailMessageTextRequest;
    fromPartial(object: DeepPartial<GetDefaultVerifyEmailMessageTextRequest>): GetDefaultVerifyEmailMessageTextRequest;
};
export declare const GetDefaultVerifyEmailMessageTextResponse: {
    encode(message: GetDefaultVerifyEmailMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyEmailMessageTextResponse;
    fromJSON(object: any): GetDefaultVerifyEmailMessageTextResponse;
    toJSON(message: GetDefaultVerifyEmailMessageTextResponse): unknown;
    create(base?: DeepPartial<GetDefaultVerifyEmailMessageTextResponse>): GetDefaultVerifyEmailMessageTextResponse;
    fromPartial(object: DeepPartial<GetDefaultVerifyEmailMessageTextResponse>): GetDefaultVerifyEmailMessageTextResponse;
};
export declare const SetCustomVerifyEmailMessageTextRequest: {
    encode(message: SetCustomVerifyEmailMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyEmailMessageTextRequest;
    fromJSON(object: any): SetCustomVerifyEmailMessageTextRequest;
    toJSON(message: SetCustomVerifyEmailMessageTextRequest): unknown;
    create(base?: DeepPartial<SetCustomVerifyEmailMessageTextRequest>): SetCustomVerifyEmailMessageTextRequest;
    fromPartial(object: DeepPartial<SetCustomVerifyEmailMessageTextRequest>): SetCustomVerifyEmailMessageTextRequest;
};
export declare const SetCustomVerifyEmailMessageTextResponse: {
    encode(message: SetCustomVerifyEmailMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyEmailMessageTextResponse;
    fromJSON(object: any): SetCustomVerifyEmailMessageTextResponse;
    toJSON(message: SetCustomVerifyEmailMessageTextResponse): unknown;
    create(base?: DeepPartial<SetCustomVerifyEmailMessageTextResponse>): SetCustomVerifyEmailMessageTextResponse;
    fromPartial(object: DeepPartial<SetCustomVerifyEmailMessageTextResponse>): SetCustomVerifyEmailMessageTextResponse;
};
export declare const ResetCustomVerifyEmailMessageTextToDefaultRequest: {
    encode(message: ResetCustomVerifyEmailMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyEmailMessageTextToDefaultRequest;
    fromJSON(object: any): ResetCustomVerifyEmailMessageTextToDefaultRequest;
    toJSON(message: ResetCustomVerifyEmailMessageTextToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultRequest>): ResetCustomVerifyEmailMessageTextToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultRequest>): ResetCustomVerifyEmailMessageTextToDefaultRequest;
};
export declare const ResetCustomVerifyEmailMessageTextToDefaultResponse: {
    encode(message: ResetCustomVerifyEmailMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyEmailMessageTextToDefaultResponse;
    fromJSON(object: any): ResetCustomVerifyEmailMessageTextToDefaultResponse;
    toJSON(message: ResetCustomVerifyEmailMessageTextToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultResponse>): ResetCustomVerifyEmailMessageTextToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultResponse>): ResetCustomVerifyEmailMessageTextToDefaultResponse;
};
export declare const GetCustomVerifyPhoneMessageTextRequest: {
    encode(message: GetCustomVerifyPhoneMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyPhoneMessageTextRequest;
    fromJSON(object: any): GetCustomVerifyPhoneMessageTextRequest;
    toJSON(message: GetCustomVerifyPhoneMessageTextRequest): unknown;
    create(base?: DeepPartial<GetCustomVerifyPhoneMessageTextRequest>): GetCustomVerifyPhoneMessageTextRequest;
    fromPartial(object: DeepPartial<GetCustomVerifyPhoneMessageTextRequest>): GetCustomVerifyPhoneMessageTextRequest;
};
export declare const GetCustomVerifyPhoneMessageTextResponse: {
    encode(message: GetCustomVerifyPhoneMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyPhoneMessageTextResponse;
    fromJSON(object: any): GetCustomVerifyPhoneMessageTextResponse;
    toJSON(message: GetCustomVerifyPhoneMessageTextResponse): unknown;
    create(base?: DeepPartial<GetCustomVerifyPhoneMessageTextResponse>): GetCustomVerifyPhoneMessageTextResponse;
    fromPartial(object: DeepPartial<GetCustomVerifyPhoneMessageTextResponse>): GetCustomVerifyPhoneMessageTextResponse;
};
export declare const GetDefaultVerifyPhoneMessageTextRequest: {
    encode(message: GetDefaultVerifyPhoneMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyPhoneMessageTextRequest;
    fromJSON(object: any): GetDefaultVerifyPhoneMessageTextRequest;
    toJSON(message: GetDefaultVerifyPhoneMessageTextRequest): unknown;
    create(base?: DeepPartial<GetDefaultVerifyPhoneMessageTextRequest>): GetDefaultVerifyPhoneMessageTextRequest;
    fromPartial(object: DeepPartial<GetDefaultVerifyPhoneMessageTextRequest>): GetDefaultVerifyPhoneMessageTextRequest;
};
export declare const GetDefaultVerifyPhoneMessageTextResponse: {
    encode(message: GetDefaultVerifyPhoneMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyPhoneMessageTextResponse;
    fromJSON(object: any): GetDefaultVerifyPhoneMessageTextResponse;
    toJSON(message: GetDefaultVerifyPhoneMessageTextResponse): unknown;
    create(base?: DeepPartial<GetDefaultVerifyPhoneMessageTextResponse>): GetDefaultVerifyPhoneMessageTextResponse;
    fromPartial(object: DeepPartial<GetDefaultVerifyPhoneMessageTextResponse>): GetDefaultVerifyPhoneMessageTextResponse;
};
export declare const SetCustomVerifyPhoneMessageTextRequest: {
    encode(message: SetCustomVerifyPhoneMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyPhoneMessageTextRequest;
    fromJSON(object: any): SetCustomVerifyPhoneMessageTextRequest;
    toJSON(message: SetCustomVerifyPhoneMessageTextRequest): unknown;
    create(base?: DeepPartial<SetCustomVerifyPhoneMessageTextRequest>): SetCustomVerifyPhoneMessageTextRequest;
    fromPartial(object: DeepPartial<SetCustomVerifyPhoneMessageTextRequest>): SetCustomVerifyPhoneMessageTextRequest;
};
export declare const SetCustomVerifyPhoneMessageTextResponse: {
    encode(message: SetCustomVerifyPhoneMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyPhoneMessageTextResponse;
    fromJSON(object: any): SetCustomVerifyPhoneMessageTextResponse;
    toJSON(message: SetCustomVerifyPhoneMessageTextResponse): unknown;
    create(base?: DeepPartial<SetCustomVerifyPhoneMessageTextResponse>): SetCustomVerifyPhoneMessageTextResponse;
    fromPartial(object: DeepPartial<SetCustomVerifyPhoneMessageTextResponse>): SetCustomVerifyPhoneMessageTextResponse;
};
export declare const ResetCustomVerifyPhoneMessageTextToDefaultRequest: {
    encode(message: ResetCustomVerifyPhoneMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyPhoneMessageTextToDefaultRequest;
    fromJSON(object: any): ResetCustomVerifyPhoneMessageTextToDefaultRequest;
    toJSON(message: ResetCustomVerifyPhoneMessageTextToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultRequest>): ResetCustomVerifyPhoneMessageTextToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultRequest>): ResetCustomVerifyPhoneMessageTextToDefaultRequest;
};
export declare const ResetCustomVerifyPhoneMessageTextToDefaultResponse: {
    encode(message: ResetCustomVerifyPhoneMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyPhoneMessageTextToDefaultResponse;
    fromJSON(object: any): ResetCustomVerifyPhoneMessageTextToDefaultResponse;
    toJSON(message: ResetCustomVerifyPhoneMessageTextToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultResponse>): ResetCustomVerifyPhoneMessageTextToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultResponse>): ResetCustomVerifyPhoneMessageTextToDefaultResponse;
};
export declare const GetCustomVerifySMSOTPMessageTextRequest: {
    encode(message: GetCustomVerifySMSOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifySMSOTPMessageTextRequest;
    fromJSON(object: any): GetCustomVerifySMSOTPMessageTextRequest;
    toJSON(message: GetCustomVerifySMSOTPMessageTextRequest): unknown;
    create(base?: DeepPartial<GetCustomVerifySMSOTPMessageTextRequest>): GetCustomVerifySMSOTPMessageTextRequest;
    fromPartial(object: DeepPartial<GetCustomVerifySMSOTPMessageTextRequest>): GetCustomVerifySMSOTPMessageTextRequest;
};
export declare const GetCustomVerifySMSOTPMessageTextResponse: {
    encode(message: GetCustomVerifySMSOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifySMSOTPMessageTextResponse;
    fromJSON(object: any): GetCustomVerifySMSOTPMessageTextResponse;
    toJSON(message: GetCustomVerifySMSOTPMessageTextResponse): unknown;
    create(base?: DeepPartial<GetCustomVerifySMSOTPMessageTextResponse>): GetCustomVerifySMSOTPMessageTextResponse;
    fromPartial(object: DeepPartial<GetCustomVerifySMSOTPMessageTextResponse>): GetCustomVerifySMSOTPMessageTextResponse;
};
export declare const GetDefaultVerifySMSOTPMessageTextRequest: {
    encode(message: GetDefaultVerifySMSOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifySMSOTPMessageTextRequest;
    fromJSON(object: any): GetDefaultVerifySMSOTPMessageTextRequest;
    toJSON(message: GetDefaultVerifySMSOTPMessageTextRequest): unknown;
    create(base?: DeepPartial<GetDefaultVerifySMSOTPMessageTextRequest>): GetDefaultVerifySMSOTPMessageTextRequest;
    fromPartial(object: DeepPartial<GetDefaultVerifySMSOTPMessageTextRequest>): GetDefaultVerifySMSOTPMessageTextRequest;
};
export declare const GetDefaultVerifySMSOTPMessageTextResponse: {
    encode(message: GetDefaultVerifySMSOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifySMSOTPMessageTextResponse;
    fromJSON(object: any): GetDefaultVerifySMSOTPMessageTextResponse;
    toJSON(message: GetDefaultVerifySMSOTPMessageTextResponse): unknown;
    create(base?: DeepPartial<GetDefaultVerifySMSOTPMessageTextResponse>): GetDefaultVerifySMSOTPMessageTextResponse;
    fromPartial(object: DeepPartial<GetDefaultVerifySMSOTPMessageTextResponse>): GetDefaultVerifySMSOTPMessageTextResponse;
};
export declare const SetCustomVerifySMSOTPMessageTextRequest: {
    encode(message: SetCustomVerifySMSOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifySMSOTPMessageTextRequest;
    fromJSON(object: any): SetCustomVerifySMSOTPMessageTextRequest;
    toJSON(message: SetCustomVerifySMSOTPMessageTextRequest): unknown;
    create(base?: DeepPartial<SetCustomVerifySMSOTPMessageTextRequest>): SetCustomVerifySMSOTPMessageTextRequest;
    fromPartial(object: DeepPartial<SetCustomVerifySMSOTPMessageTextRequest>): SetCustomVerifySMSOTPMessageTextRequest;
};
export declare const SetCustomVerifySMSOTPMessageTextResponse: {
    encode(message: SetCustomVerifySMSOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifySMSOTPMessageTextResponse;
    fromJSON(object: any): SetCustomVerifySMSOTPMessageTextResponse;
    toJSON(message: SetCustomVerifySMSOTPMessageTextResponse): unknown;
    create(base?: DeepPartial<SetCustomVerifySMSOTPMessageTextResponse>): SetCustomVerifySMSOTPMessageTextResponse;
    fromPartial(object: DeepPartial<SetCustomVerifySMSOTPMessageTextResponse>): SetCustomVerifySMSOTPMessageTextResponse;
};
export declare const ResetCustomVerifySMSOTPMessageTextToDefaultRequest: {
    encode(message: ResetCustomVerifySMSOTPMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifySMSOTPMessageTextToDefaultRequest;
    fromJSON(object: any): ResetCustomVerifySMSOTPMessageTextToDefaultRequest;
    toJSON(message: ResetCustomVerifySMSOTPMessageTextToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>): ResetCustomVerifySMSOTPMessageTextToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>): ResetCustomVerifySMSOTPMessageTextToDefaultRequest;
};
export declare const ResetCustomVerifySMSOTPMessageTextToDefaultResponse: {
    encode(message: ResetCustomVerifySMSOTPMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifySMSOTPMessageTextToDefaultResponse;
    fromJSON(object: any): ResetCustomVerifySMSOTPMessageTextToDefaultResponse;
    toJSON(message: ResetCustomVerifySMSOTPMessageTextToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>): ResetCustomVerifySMSOTPMessageTextToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>): ResetCustomVerifySMSOTPMessageTextToDefaultResponse;
};
export declare const GetCustomVerifyEmailOTPMessageTextRequest: {
    encode(message: GetCustomVerifyEmailOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyEmailOTPMessageTextRequest;
    fromJSON(object: any): GetCustomVerifyEmailOTPMessageTextRequest;
    toJSON(message: GetCustomVerifyEmailOTPMessageTextRequest): unknown;
    create(base?: DeepPartial<GetCustomVerifyEmailOTPMessageTextRequest>): GetCustomVerifyEmailOTPMessageTextRequest;
    fromPartial(object: DeepPartial<GetCustomVerifyEmailOTPMessageTextRequest>): GetCustomVerifyEmailOTPMessageTextRequest;
};
export declare const GetCustomVerifyEmailOTPMessageTextResponse: {
    encode(message: GetCustomVerifyEmailOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyEmailOTPMessageTextResponse;
    fromJSON(object: any): GetCustomVerifyEmailOTPMessageTextResponse;
    toJSON(message: GetCustomVerifyEmailOTPMessageTextResponse): unknown;
    create(base?: DeepPartial<GetCustomVerifyEmailOTPMessageTextResponse>): GetCustomVerifyEmailOTPMessageTextResponse;
    fromPartial(object: DeepPartial<GetCustomVerifyEmailOTPMessageTextResponse>): GetCustomVerifyEmailOTPMessageTextResponse;
};
export declare const GetDefaultVerifyEmailOTPMessageTextRequest: {
    encode(message: GetDefaultVerifyEmailOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyEmailOTPMessageTextRequest;
    fromJSON(object: any): GetDefaultVerifyEmailOTPMessageTextRequest;
    toJSON(message: GetDefaultVerifyEmailOTPMessageTextRequest): unknown;
    create(base?: DeepPartial<GetDefaultVerifyEmailOTPMessageTextRequest>): GetDefaultVerifyEmailOTPMessageTextRequest;
    fromPartial(object: DeepPartial<GetDefaultVerifyEmailOTPMessageTextRequest>): GetDefaultVerifyEmailOTPMessageTextRequest;
};
export declare const GetDefaultVerifyEmailOTPMessageTextResponse: {
    encode(message: GetDefaultVerifyEmailOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyEmailOTPMessageTextResponse;
    fromJSON(object: any): GetDefaultVerifyEmailOTPMessageTextResponse;
    toJSON(message: GetDefaultVerifyEmailOTPMessageTextResponse): unknown;
    create(base?: DeepPartial<GetDefaultVerifyEmailOTPMessageTextResponse>): GetDefaultVerifyEmailOTPMessageTextResponse;
    fromPartial(object: DeepPartial<GetDefaultVerifyEmailOTPMessageTextResponse>): GetDefaultVerifyEmailOTPMessageTextResponse;
};
export declare const SetCustomVerifyEmailOTPMessageTextRequest: {
    encode(message: SetCustomVerifyEmailOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyEmailOTPMessageTextRequest;
    fromJSON(object: any): SetCustomVerifyEmailOTPMessageTextRequest;
    toJSON(message: SetCustomVerifyEmailOTPMessageTextRequest): unknown;
    create(base?: DeepPartial<SetCustomVerifyEmailOTPMessageTextRequest>): SetCustomVerifyEmailOTPMessageTextRequest;
    fromPartial(object: DeepPartial<SetCustomVerifyEmailOTPMessageTextRequest>): SetCustomVerifyEmailOTPMessageTextRequest;
};
export declare const SetCustomVerifyEmailOTPMessageTextResponse: {
    encode(message: SetCustomVerifyEmailOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyEmailOTPMessageTextResponse;
    fromJSON(object: any): SetCustomVerifyEmailOTPMessageTextResponse;
    toJSON(message: SetCustomVerifyEmailOTPMessageTextResponse): unknown;
    create(base?: DeepPartial<SetCustomVerifyEmailOTPMessageTextResponse>): SetCustomVerifyEmailOTPMessageTextResponse;
    fromPartial(object: DeepPartial<SetCustomVerifyEmailOTPMessageTextResponse>): SetCustomVerifyEmailOTPMessageTextResponse;
};
export declare const ResetCustomVerifyEmailOTPMessageTextToDefaultRequest: {
    encode(message: ResetCustomVerifyEmailOTPMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyEmailOTPMessageTextToDefaultRequest;
    fromJSON(object: any): ResetCustomVerifyEmailOTPMessageTextToDefaultRequest;
    toJSON(message: ResetCustomVerifyEmailOTPMessageTextToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>): ResetCustomVerifyEmailOTPMessageTextToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>): ResetCustomVerifyEmailOTPMessageTextToDefaultRequest;
};
export declare const ResetCustomVerifyEmailOTPMessageTextToDefaultResponse: {
    encode(message: ResetCustomVerifyEmailOTPMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyEmailOTPMessageTextToDefaultResponse;
    fromJSON(object: any): ResetCustomVerifyEmailOTPMessageTextToDefaultResponse;
    toJSON(message: ResetCustomVerifyEmailOTPMessageTextToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>): ResetCustomVerifyEmailOTPMessageTextToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>): ResetCustomVerifyEmailOTPMessageTextToDefaultResponse;
};
export declare const GetCustomDomainClaimedMessageTextRequest: {
    encode(message: GetCustomDomainClaimedMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomDomainClaimedMessageTextRequest;
    fromJSON(object: any): GetCustomDomainClaimedMessageTextRequest;
    toJSON(message: GetCustomDomainClaimedMessageTextRequest): unknown;
    create(base?: DeepPartial<GetCustomDomainClaimedMessageTextRequest>): GetCustomDomainClaimedMessageTextRequest;
    fromPartial(object: DeepPartial<GetCustomDomainClaimedMessageTextRequest>): GetCustomDomainClaimedMessageTextRequest;
};
export declare const GetCustomDomainClaimedMessageTextResponse: {
    encode(message: GetCustomDomainClaimedMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomDomainClaimedMessageTextResponse;
    fromJSON(object: any): GetCustomDomainClaimedMessageTextResponse;
    toJSON(message: GetCustomDomainClaimedMessageTextResponse): unknown;
    create(base?: DeepPartial<GetCustomDomainClaimedMessageTextResponse>): GetCustomDomainClaimedMessageTextResponse;
    fromPartial(object: DeepPartial<GetCustomDomainClaimedMessageTextResponse>): GetCustomDomainClaimedMessageTextResponse;
};
export declare const GetDefaultDomainClaimedMessageTextRequest: {
    encode(message: GetDefaultDomainClaimedMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultDomainClaimedMessageTextRequest;
    fromJSON(object: any): GetDefaultDomainClaimedMessageTextRequest;
    toJSON(message: GetDefaultDomainClaimedMessageTextRequest): unknown;
    create(base?: DeepPartial<GetDefaultDomainClaimedMessageTextRequest>): GetDefaultDomainClaimedMessageTextRequest;
    fromPartial(object: DeepPartial<GetDefaultDomainClaimedMessageTextRequest>): GetDefaultDomainClaimedMessageTextRequest;
};
export declare const GetDefaultDomainClaimedMessageTextResponse: {
    encode(message: GetDefaultDomainClaimedMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultDomainClaimedMessageTextResponse;
    fromJSON(object: any): GetDefaultDomainClaimedMessageTextResponse;
    toJSON(message: GetDefaultDomainClaimedMessageTextResponse): unknown;
    create(base?: DeepPartial<GetDefaultDomainClaimedMessageTextResponse>): GetDefaultDomainClaimedMessageTextResponse;
    fromPartial(object: DeepPartial<GetDefaultDomainClaimedMessageTextResponse>): GetDefaultDomainClaimedMessageTextResponse;
};
export declare const SetCustomDomainClaimedMessageTextRequest: {
    encode(message: SetCustomDomainClaimedMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomDomainClaimedMessageTextRequest;
    fromJSON(object: any): SetCustomDomainClaimedMessageTextRequest;
    toJSON(message: SetCustomDomainClaimedMessageTextRequest): unknown;
    create(base?: DeepPartial<SetCustomDomainClaimedMessageTextRequest>): SetCustomDomainClaimedMessageTextRequest;
    fromPartial(object: DeepPartial<SetCustomDomainClaimedMessageTextRequest>): SetCustomDomainClaimedMessageTextRequest;
};
export declare const SetCustomDomainClaimedMessageTextResponse: {
    encode(message: SetCustomDomainClaimedMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomDomainClaimedMessageTextResponse;
    fromJSON(object: any): SetCustomDomainClaimedMessageTextResponse;
    toJSON(message: SetCustomDomainClaimedMessageTextResponse): unknown;
    create(base?: DeepPartial<SetCustomDomainClaimedMessageTextResponse>): SetCustomDomainClaimedMessageTextResponse;
    fromPartial(object: DeepPartial<SetCustomDomainClaimedMessageTextResponse>): SetCustomDomainClaimedMessageTextResponse;
};
export declare const ResetCustomDomainClaimedMessageTextToDefaultRequest: {
    encode(message: ResetCustomDomainClaimedMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomDomainClaimedMessageTextToDefaultRequest;
    fromJSON(object: any): ResetCustomDomainClaimedMessageTextToDefaultRequest;
    toJSON(message: ResetCustomDomainClaimedMessageTextToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultRequest>): ResetCustomDomainClaimedMessageTextToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultRequest>): ResetCustomDomainClaimedMessageTextToDefaultRequest;
};
export declare const ResetCustomDomainClaimedMessageTextToDefaultResponse: {
    encode(message: ResetCustomDomainClaimedMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomDomainClaimedMessageTextToDefaultResponse;
    fromJSON(object: any): ResetCustomDomainClaimedMessageTextToDefaultResponse;
    toJSON(message: ResetCustomDomainClaimedMessageTextToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultResponse>): ResetCustomDomainClaimedMessageTextToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultResponse>): ResetCustomDomainClaimedMessageTextToDefaultResponse;
};
export declare const GetCustomPasswordlessRegistrationMessageTextRequest: {
    encode(message: GetCustomPasswordlessRegistrationMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordlessRegistrationMessageTextRequest;
    fromJSON(object: any): GetCustomPasswordlessRegistrationMessageTextRequest;
    toJSON(message: GetCustomPasswordlessRegistrationMessageTextRequest): unknown;
    create(base?: DeepPartial<GetCustomPasswordlessRegistrationMessageTextRequest>): GetCustomPasswordlessRegistrationMessageTextRequest;
    fromPartial(object: DeepPartial<GetCustomPasswordlessRegistrationMessageTextRequest>): GetCustomPasswordlessRegistrationMessageTextRequest;
};
export declare const GetCustomPasswordlessRegistrationMessageTextResponse: {
    encode(message: GetCustomPasswordlessRegistrationMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordlessRegistrationMessageTextResponse;
    fromJSON(object: any): GetCustomPasswordlessRegistrationMessageTextResponse;
    toJSON(message: GetCustomPasswordlessRegistrationMessageTextResponse): unknown;
    create(base?: DeepPartial<GetCustomPasswordlessRegistrationMessageTextResponse>): GetCustomPasswordlessRegistrationMessageTextResponse;
    fromPartial(object: DeepPartial<GetCustomPasswordlessRegistrationMessageTextResponse>): GetCustomPasswordlessRegistrationMessageTextResponse;
};
export declare const GetDefaultPasswordlessRegistrationMessageTextRequest: {
    encode(message: GetDefaultPasswordlessRegistrationMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordlessRegistrationMessageTextRequest;
    fromJSON(object: any): GetDefaultPasswordlessRegistrationMessageTextRequest;
    toJSON(message: GetDefaultPasswordlessRegistrationMessageTextRequest): unknown;
    create(base?: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextRequest>): GetDefaultPasswordlessRegistrationMessageTextRequest;
    fromPartial(object: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextRequest>): GetDefaultPasswordlessRegistrationMessageTextRequest;
};
export declare const GetDefaultPasswordlessRegistrationMessageTextResponse: {
    encode(message: GetDefaultPasswordlessRegistrationMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordlessRegistrationMessageTextResponse;
    fromJSON(object: any): GetDefaultPasswordlessRegistrationMessageTextResponse;
    toJSON(message: GetDefaultPasswordlessRegistrationMessageTextResponse): unknown;
    create(base?: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextResponse>): GetDefaultPasswordlessRegistrationMessageTextResponse;
    fromPartial(object: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextResponse>): GetDefaultPasswordlessRegistrationMessageTextResponse;
};
export declare const SetCustomPasswordlessRegistrationMessageTextRequest: {
    encode(message: SetCustomPasswordlessRegistrationMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordlessRegistrationMessageTextRequest;
    fromJSON(object: any): SetCustomPasswordlessRegistrationMessageTextRequest;
    toJSON(message: SetCustomPasswordlessRegistrationMessageTextRequest): unknown;
    create(base?: DeepPartial<SetCustomPasswordlessRegistrationMessageTextRequest>): SetCustomPasswordlessRegistrationMessageTextRequest;
    fromPartial(object: DeepPartial<SetCustomPasswordlessRegistrationMessageTextRequest>): SetCustomPasswordlessRegistrationMessageTextRequest;
};
export declare const SetCustomPasswordlessRegistrationMessageTextResponse: {
    encode(message: SetCustomPasswordlessRegistrationMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordlessRegistrationMessageTextResponse;
    fromJSON(object: any): SetCustomPasswordlessRegistrationMessageTextResponse;
    toJSON(message: SetCustomPasswordlessRegistrationMessageTextResponse): unknown;
    create(base?: DeepPartial<SetCustomPasswordlessRegistrationMessageTextResponse>): SetCustomPasswordlessRegistrationMessageTextResponse;
    fromPartial(object: DeepPartial<SetCustomPasswordlessRegistrationMessageTextResponse>): SetCustomPasswordlessRegistrationMessageTextResponse;
};
export declare const ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest: {
    encode(message: ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest;
    fromJSON(object: any): ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest;
    toJSON(message: ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>): ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>): ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest;
};
export declare const ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse: {
    encode(message: ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse;
    fromJSON(object: any): ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse;
    toJSON(message: ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>): ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>): ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse;
};
export declare const GetCustomPasswordChangeMessageTextRequest: {
    encode(message: GetCustomPasswordChangeMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordChangeMessageTextRequest;
    fromJSON(object: any): GetCustomPasswordChangeMessageTextRequest;
    toJSON(message: GetCustomPasswordChangeMessageTextRequest): unknown;
    create(base?: DeepPartial<GetCustomPasswordChangeMessageTextRequest>): GetCustomPasswordChangeMessageTextRequest;
    fromPartial(object: DeepPartial<GetCustomPasswordChangeMessageTextRequest>): GetCustomPasswordChangeMessageTextRequest;
};
export declare const GetCustomPasswordChangeMessageTextResponse: {
    encode(message: GetCustomPasswordChangeMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordChangeMessageTextResponse;
    fromJSON(object: any): GetCustomPasswordChangeMessageTextResponse;
    toJSON(message: GetCustomPasswordChangeMessageTextResponse): unknown;
    create(base?: DeepPartial<GetCustomPasswordChangeMessageTextResponse>): GetCustomPasswordChangeMessageTextResponse;
    fromPartial(object: DeepPartial<GetCustomPasswordChangeMessageTextResponse>): GetCustomPasswordChangeMessageTextResponse;
};
export declare const GetDefaultPasswordChangeMessageTextRequest: {
    encode(message: GetDefaultPasswordChangeMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordChangeMessageTextRequest;
    fromJSON(object: any): GetDefaultPasswordChangeMessageTextRequest;
    toJSON(message: GetDefaultPasswordChangeMessageTextRequest): unknown;
    create(base?: DeepPartial<GetDefaultPasswordChangeMessageTextRequest>): GetDefaultPasswordChangeMessageTextRequest;
    fromPartial(object: DeepPartial<GetDefaultPasswordChangeMessageTextRequest>): GetDefaultPasswordChangeMessageTextRequest;
};
export declare const GetDefaultPasswordChangeMessageTextResponse: {
    encode(message: GetDefaultPasswordChangeMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordChangeMessageTextResponse;
    fromJSON(object: any): GetDefaultPasswordChangeMessageTextResponse;
    toJSON(message: GetDefaultPasswordChangeMessageTextResponse): unknown;
    create(base?: DeepPartial<GetDefaultPasswordChangeMessageTextResponse>): GetDefaultPasswordChangeMessageTextResponse;
    fromPartial(object: DeepPartial<GetDefaultPasswordChangeMessageTextResponse>): GetDefaultPasswordChangeMessageTextResponse;
};
export declare const SetCustomPasswordChangeMessageTextRequest: {
    encode(message: SetCustomPasswordChangeMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordChangeMessageTextRequest;
    fromJSON(object: any): SetCustomPasswordChangeMessageTextRequest;
    toJSON(message: SetCustomPasswordChangeMessageTextRequest): unknown;
    create(base?: DeepPartial<SetCustomPasswordChangeMessageTextRequest>): SetCustomPasswordChangeMessageTextRequest;
    fromPartial(object: DeepPartial<SetCustomPasswordChangeMessageTextRequest>): SetCustomPasswordChangeMessageTextRequest;
};
export declare const SetCustomPasswordChangeMessageTextResponse: {
    encode(message: SetCustomPasswordChangeMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordChangeMessageTextResponse;
    fromJSON(object: any): SetCustomPasswordChangeMessageTextResponse;
    toJSON(message: SetCustomPasswordChangeMessageTextResponse): unknown;
    create(base?: DeepPartial<SetCustomPasswordChangeMessageTextResponse>): SetCustomPasswordChangeMessageTextResponse;
    fromPartial(object: DeepPartial<SetCustomPasswordChangeMessageTextResponse>): SetCustomPasswordChangeMessageTextResponse;
};
export declare const ResetCustomPasswordChangeMessageTextToDefaultRequest: {
    encode(message: ResetCustomPasswordChangeMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordChangeMessageTextToDefaultRequest;
    fromJSON(object: any): ResetCustomPasswordChangeMessageTextToDefaultRequest;
    toJSON(message: ResetCustomPasswordChangeMessageTextToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultRequest>): ResetCustomPasswordChangeMessageTextToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultRequest>): ResetCustomPasswordChangeMessageTextToDefaultRequest;
};
export declare const ResetCustomPasswordChangeMessageTextToDefaultResponse: {
    encode(message: ResetCustomPasswordChangeMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordChangeMessageTextToDefaultResponse;
    fromJSON(object: any): ResetCustomPasswordChangeMessageTextToDefaultResponse;
    toJSON(message: ResetCustomPasswordChangeMessageTextToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultResponse>): ResetCustomPasswordChangeMessageTextToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultResponse>): ResetCustomPasswordChangeMessageTextToDefaultResponse;
};
export declare const GetOrgIDPByIDRequest: {
    encode(message: GetOrgIDPByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgIDPByIDRequest;
    fromJSON(object: any): GetOrgIDPByIDRequest;
    toJSON(message: GetOrgIDPByIDRequest): unknown;
    create(base?: DeepPartial<GetOrgIDPByIDRequest>): GetOrgIDPByIDRequest;
    fromPartial(object: DeepPartial<GetOrgIDPByIDRequest>): GetOrgIDPByIDRequest;
};
export declare const GetOrgIDPByIDResponse: {
    encode(message: GetOrgIDPByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgIDPByIDResponse;
    fromJSON(object: any): GetOrgIDPByIDResponse;
    toJSON(message: GetOrgIDPByIDResponse): unknown;
    create(base?: DeepPartial<GetOrgIDPByIDResponse>): GetOrgIDPByIDResponse;
    fromPartial(object: DeepPartial<GetOrgIDPByIDResponse>): GetOrgIDPByIDResponse;
};
export declare const ListOrgIDPsRequest: {
    encode(message: ListOrgIDPsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgIDPsRequest;
    fromJSON(object: any): ListOrgIDPsRequest;
    toJSON(message: ListOrgIDPsRequest): unknown;
    create(base?: DeepPartial<ListOrgIDPsRequest>): ListOrgIDPsRequest;
    fromPartial(object: DeepPartial<ListOrgIDPsRequest>): ListOrgIDPsRequest;
};
export declare const IDPQuery: {
    encode(message: IDPQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPQuery;
    fromJSON(object: any): IDPQuery;
    toJSON(message: IDPQuery): unknown;
    create(base?: DeepPartial<IDPQuery>): IDPQuery;
    fromPartial(object: DeepPartial<IDPQuery>): IDPQuery;
};
export declare const ListOrgIDPsResponse: {
    encode(message: ListOrgIDPsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgIDPsResponse;
    fromJSON(object: any): ListOrgIDPsResponse;
    toJSON(message: ListOrgIDPsResponse): unknown;
    create(base?: DeepPartial<ListOrgIDPsResponse>): ListOrgIDPsResponse;
    fromPartial(object: DeepPartial<ListOrgIDPsResponse>): ListOrgIDPsResponse;
};
export declare const AddOrgOIDCIDPRequest: {
    encode(message: AddOrgOIDCIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgOIDCIDPRequest;
    fromJSON(object: any): AddOrgOIDCIDPRequest;
    toJSON(message: AddOrgOIDCIDPRequest): unknown;
    create(base?: DeepPartial<AddOrgOIDCIDPRequest>): AddOrgOIDCIDPRequest;
    fromPartial(object: DeepPartial<AddOrgOIDCIDPRequest>): AddOrgOIDCIDPRequest;
};
export declare const AddOrgOIDCIDPResponse: {
    encode(message: AddOrgOIDCIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgOIDCIDPResponse;
    fromJSON(object: any): AddOrgOIDCIDPResponse;
    toJSON(message: AddOrgOIDCIDPResponse): unknown;
    create(base?: DeepPartial<AddOrgOIDCIDPResponse>): AddOrgOIDCIDPResponse;
    fromPartial(object: DeepPartial<AddOrgOIDCIDPResponse>): AddOrgOIDCIDPResponse;
};
export declare const AddOrgJWTIDPRequest: {
    encode(message: AddOrgJWTIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgJWTIDPRequest;
    fromJSON(object: any): AddOrgJWTIDPRequest;
    toJSON(message: AddOrgJWTIDPRequest): unknown;
    create(base?: DeepPartial<AddOrgJWTIDPRequest>): AddOrgJWTIDPRequest;
    fromPartial(object: DeepPartial<AddOrgJWTIDPRequest>): AddOrgJWTIDPRequest;
};
export declare const AddOrgJWTIDPResponse: {
    encode(message: AddOrgJWTIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgJWTIDPResponse;
    fromJSON(object: any): AddOrgJWTIDPResponse;
    toJSON(message: AddOrgJWTIDPResponse): unknown;
    create(base?: DeepPartial<AddOrgJWTIDPResponse>): AddOrgJWTIDPResponse;
    fromPartial(object: DeepPartial<AddOrgJWTIDPResponse>): AddOrgJWTIDPResponse;
};
export declare const DeactivateOrgIDPRequest: {
    encode(message: DeactivateOrgIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateOrgIDPRequest;
    fromJSON(object: any): DeactivateOrgIDPRequest;
    toJSON(message: DeactivateOrgIDPRequest): unknown;
    create(base?: DeepPartial<DeactivateOrgIDPRequest>): DeactivateOrgIDPRequest;
    fromPartial(object: DeepPartial<DeactivateOrgIDPRequest>): DeactivateOrgIDPRequest;
};
export declare const DeactivateOrgIDPResponse: {
    encode(message: DeactivateOrgIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateOrgIDPResponse;
    fromJSON(object: any): DeactivateOrgIDPResponse;
    toJSON(message: DeactivateOrgIDPResponse): unknown;
    create(base?: DeepPartial<DeactivateOrgIDPResponse>): DeactivateOrgIDPResponse;
    fromPartial(object: DeepPartial<DeactivateOrgIDPResponse>): DeactivateOrgIDPResponse;
};
export declare const ReactivateOrgIDPRequest: {
    encode(message: ReactivateOrgIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateOrgIDPRequest;
    fromJSON(object: any): ReactivateOrgIDPRequest;
    toJSON(message: ReactivateOrgIDPRequest): unknown;
    create(base?: DeepPartial<ReactivateOrgIDPRequest>): ReactivateOrgIDPRequest;
    fromPartial(object: DeepPartial<ReactivateOrgIDPRequest>): ReactivateOrgIDPRequest;
};
export declare const ReactivateOrgIDPResponse: {
    encode(message: ReactivateOrgIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateOrgIDPResponse;
    fromJSON(object: any): ReactivateOrgIDPResponse;
    toJSON(message: ReactivateOrgIDPResponse): unknown;
    create(base?: DeepPartial<ReactivateOrgIDPResponse>): ReactivateOrgIDPResponse;
    fromPartial(object: DeepPartial<ReactivateOrgIDPResponse>): ReactivateOrgIDPResponse;
};
export declare const RemoveOrgIDPRequest: {
    encode(message: RemoveOrgIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgIDPRequest;
    fromJSON(object: any): RemoveOrgIDPRequest;
    toJSON(message: RemoveOrgIDPRequest): unknown;
    create(base?: DeepPartial<RemoveOrgIDPRequest>): RemoveOrgIDPRequest;
    fromPartial(object: DeepPartial<RemoveOrgIDPRequest>): RemoveOrgIDPRequest;
};
export declare const RemoveOrgIDPResponse: {
    encode(_: RemoveOrgIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgIDPResponse;
    fromJSON(_: any): RemoveOrgIDPResponse;
    toJSON(_: RemoveOrgIDPResponse): unknown;
    create(base?: DeepPartial<RemoveOrgIDPResponse>): RemoveOrgIDPResponse;
    fromPartial(_: DeepPartial<RemoveOrgIDPResponse>): RemoveOrgIDPResponse;
};
export declare const UpdateOrgIDPRequest: {
    encode(message: UpdateOrgIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPRequest;
    fromJSON(object: any): UpdateOrgIDPRequest;
    toJSON(message: UpdateOrgIDPRequest): unknown;
    create(base?: DeepPartial<UpdateOrgIDPRequest>): UpdateOrgIDPRequest;
    fromPartial(object: DeepPartial<UpdateOrgIDPRequest>): UpdateOrgIDPRequest;
};
export declare const UpdateOrgIDPResponse: {
    encode(message: UpdateOrgIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPResponse;
    fromJSON(object: any): UpdateOrgIDPResponse;
    toJSON(message: UpdateOrgIDPResponse): unknown;
    create(base?: DeepPartial<UpdateOrgIDPResponse>): UpdateOrgIDPResponse;
    fromPartial(object: DeepPartial<UpdateOrgIDPResponse>): UpdateOrgIDPResponse;
};
export declare const UpdateOrgIDPOIDCConfigRequest: {
    encode(message: UpdateOrgIDPOIDCConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPOIDCConfigRequest;
    fromJSON(object: any): UpdateOrgIDPOIDCConfigRequest;
    toJSON(message: UpdateOrgIDPOIDCConfigRequest): unknown;
    create(base?: DeepPartial<UpdateOrgIDPOIDCConfigRequest>): UpdateOrgIDPOIDCConfigRequest;
    fromPartial(object: DeepPartial<UpdateOrgIDPOIDCConfigRequest>): UpdateOrgIDPOIDCConfigRequest;
};
export declare const UpdateOrgIDPOIDCConfigResponse: {
    encode(message: UpdateOrgIDPOIDCConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPOIDCConfigResponse;
    fromJSON(object: any): UpdateOrgIDPOIDCConfigResponse;
    toJSON(message: UpdateOrgIDPOIDCConfigResponse): unknown;
    create(base?: DeepPartial<UpdateOrgIDPOIDCConfigResponse>): UpdateOrgIDPOIDCConfigResponse;
    fromPartial(object: DeepPartial<UpdateOrgIDPOIDCConfigResponse>): UpdateOrgIDPOIDCConfigResponse;
};
export declare const UpdateOrgIDPJWTConfigRequest: {
    encode(message: UpdateOrgIDPJWTConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPJWTConfigRequest;
    fromJSON(object: any): UpdateOrgIDPJWTConfigRequest;
    toJSON(message: UpdateOrgIDPJWTConfigRequest): unknown;
    create(base?: DeepPartial<UpdateOrgIDPJWTConfigRequest>): UpdateOrgIDPJWTConfigRequest;
    fromPartial(object: DeepPartial<UpdateOrgIDPJWTConfigRequest>): UpdateOrgIDPJWTConfigRequest;
};
export declare const UpdateOrgIDPJWTConfigResponse: {
    encode(message: UpdateOrgIDPJWTConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPJWTConfigResponse;
    fromJSON(object: any): UpdateOrgIDPJWTConfigResponse;
    toJSON(message: UpdateOrgIDPJWTConfigResponse): unknown;
    create(base?: DeepPartial<UpdateOrgIDPJWTConfigResponse>): UpdateOrgIDPJWTConfigResponse;
    fromPartial(object: DeepPartial<UpdateOrgIDPJWTConfigResponse>): UpdateOrgIDPJWTConfigResponse;
};
export declare const ListProvidersRequest: {
    encode(message: ListProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProvidersRequest;
    fromJSON(object: any): ListProvidersRequest;
    toJSON(message: ListProvidersRequest): unknown;
    create(base?: DeepPartial<ListProvidersRequest>): ListProvidersRequest;
    fromPartial(object: DeepPartial<ListProvidersRequest>): ListProvidersRequest;
};
export declare const ProviderQuery: {
    encode(message: ProviderQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderQuery;
    fromJSON(object: any): ProviderQuery;
    toJSON(message: ProviderQuery): unknown;
    create(base?: DeepPartial<ProviderQuery>): ProviderQuery;
    fromPartial(object: DeepPartial<ProviderQuery>): ProviderQuery;
};
export declare const ListProvidersResponse: {
    encode(message: ListProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListProvidersResponse;
    fromJSON(object: any): ListProvidersResponse;
    toJSON(message: ListProvidersResponse): unknown;
    create(base?: DeepPartial<ListProvidersResponse>): ListProvidersResponse;
    fromPartial(object: DeepPartial<ListProvidersResponse>): ListProvidersResponse;
};
export declare const GetProviderByIDRequest: {
    encode(message: GetProviderByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProviderByIDRequest;
    fromJSON(object: any): GetProviderByIDRequest;
    toJSON(message: GetProviderByIDRequest): unknown;
    create(base?: DeepPartial<GetProviderByIDRequest>): GetProviderByIDRequest;
    fromPartial(object: DeepPartial<GetProviderByIDRequest>): GetProviderByIDRequest;
};
export declare const GetProviderByIDResponse: {
    encode(message: GetProviderByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetProviderByIDResponse;
    fromJSON(object: any): GetProviderByIDResponse;
    toJSON(message: GetProviderByIDResponse): unknown;
    create(base?: DeepPartial<GetProviderByIDResponse>): GetProviderByIDResponse;
    fromPartial(object: DeepPartial<GetProviderByIDResponse>): GetProviderByIDResponse;
};
export declare const AddGenericOAuthProviderRequest: {
    encode(message: AddGenericOAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGenericOAuthProviderRequest;
    fromJSON(object: any): AddGenericOAuthProviderRequest;
    toJSON(message: AddGenericOAuthProviderRequest): unknown;
    create(base?: DeepPartial<AddGenericOAuthProviderRequest>): AddGenericOAuthProviderRequest;
    fromPartial(object: DeepPartial<AddGenericOAuthProviderRequest>): AddGenericOAuthProviderRequest;
};
export declare const AddGenericOAuthProviderResponse: {
    encode(message: AddGenericOAuthProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGenericOAuthProviderResponse;
    fromJSON(object: any): AddGenericOAuthProviderResponse;
    toJSON(message: AddGenericOAuthProviderResponse): unknown;
    create(base?: DeepPartial<AddGenericOAuthProviderResponse>): AddGenericOAuthProviderResponse;
    fromPartial(object: DeepPartial<AddGenericOAuthProviderResponse>): AddGenericOAuthProviderResponse;
};
export declare const UpdateGenericOAuthProviderRequest: {
    encode(message: UpdateGenericOAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGenericOAuthProviderRequest;
    fromJSON(object: any): UpdateGenericOAuthProviderRequest;
    toJSON(message: UpdateGenericOAuthProviderRequest): unknown;
    create(base?: DeepPartial<UpdateGenericOAuthProviderRequest>): UpdateGenericOAuthProviderRequest;
    fromPartial(object: DeepPartial<UpdateGenericOAuthProviderRequest>): UpdateGenericOAuthProviderRequest;
};
export declare const UpdateGenericOAuthProviderResponse: {
    encode(message: UpdateGenericOAuthProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGenericOAuthProviderResponse;
    fromJSON(object: any): UpdateGenericOAuthProviderResponse;
    toJSON(message: UpdateGenericOAuthProviderResponse): unknown;
    create(base?: DeepPartial<UpdateGenericOAuthProviderResponse>): UpdateGenericOAuthProviderResponse;
    fromPartial(object: DeepPartial<UpdateGenericOAuthProviderResponse>): UpdateGenericOAuthProviderResponse;
};
export declare const AddGenericOIDCProviderRequest: {
    encode(message: AddGenericOIDCProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGenericOIDCProviderRequest;
    fromJSON(object: any): AddGenericOIDCProviderRequest;
    toJSON(message: AddGenericOIDCProviderRequest): unknown;
    create(base?: DeepPartial<AddGenericOIDCProviderRequest>): AddGenericOIDCProviderRequest;
    fromPartial(object: DeepPartial<AddGenericOIDCProviderRequest>): AddGenericOIDCProviderRequest;
};
export declare const AddGenericOIDCProviderResponse: {
    encode(message: AddGenericOIDCProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGenericOIDCProviderResponse;
    fromJSON(object: any): AddGenericOIDCProviderResponse;
    toJSON(message: AddGenericOIDCProviderResponse): unknown;
    create(base?: DeepPartial<AddGenericOIDCProviderResponse>): AddGenericOIDCProviderResponse;
    fromPartial(object: DeepPartial<AddGenericOIDCProviderResponse>): AddGenericOIDCProviderResponse;
};
export declare const UpdateGenericOIDCProviderRequest: {
    encode(message: UpdateGenericOIDCProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGenericOIDCProviderRequest;
    fromJSON(object: any): UpdateGenericOIDCProviderRequest;
    toJSON(message: UpdateGenericOIDCProviderRequest): unknown;
    create(base?: DeepPartial<UpdateGenericOIDCProviderRequest>): UpdateGenericOIDCProviderRequest;
    fromPartial(object: DeepPartial<UpdateGenericOIDCProviderRequest>): UpdateGenericOIDCProviderRequest;
};
export declare const UpdateGenericOIDCProviderResponse: {
    encode(message: UpdateGenericOIDCProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGenericOIDCProviderResponse;
    fromJSON(object: any): UpdateGenericOIDCProviderResponse;
    toJSON(message: UpdateGenericOIDCProviderResponse): unknown;
    create(base?: DeepPartial<UpdateGenericOIDCProviderResponse>): UpdateGenericOIDCProviderResponse;
    fromPartial(object: DeepPartial<UpdateGenericOIDCProviderResponse>): UpdateGenericOIDCProviderResponse;
};
export declare const MigrateGenericOIDCProviderRequest: {
    encode(message: MigrateGenericOIDCProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrateGenericOIDCProviderRequest;
    fromJSON(object: any): MigrateGenericOIDCProviderRequest;
    toJSON(message: MigrateGenericOIDCProviderRequest): unknown;
    create(base?: DeepPartial<MigrateGenericOIDCProviderRequest>): MigrateGenericOIDCProviderRequest;
    fromPartial(object: DeepPartial<MigrateGenericOIDCProviderRequest>): MigrateGenericOIDCProviderRequest;
};
export declare const MigrateGenericOIDCProviderResponse: {
    encode(message: MigrateGenericOIDCProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrateGenericOIDCProviderResponse;
    fromJSON(object: any): MigrateGenericOIDCProviderResponse;
    toJSON(message: MigrateGenericOIDCProviderResponse): unknown;
    create(base?: DeepPartial<MigrateGenericOIDCProviderResponse>): MigrateGenericOIDCProviderResponse;
    fromPartial(object: DeepPartial<MigrateGenericOIDCProviderResponse>): MigrateGenericOIDCProviderResponse;
};
export declare const AddJWTProviderRequest: {
    encode(message: AddJWTProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddJWTProviderRequest;
    fromJSON(object: any): AddJWTProviderRequest;
    toJSON(message: AddJWTProviderRequest): unknown;
    create(base?: DeepPartial<AddJWTProviderRequest>): AddJWTProviderRequest;
    fromPartial(object: DeepPartial<AddJWTProviderRequest>): AddJWTProviderRequest;
};
export declare const AddJWTProviderResponse: {
    encode(message: AddJWTProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddJWTProviderResponse;
    fromJSON(object: any): AddJWTProviderResponse;
    toJSON(message: AddJWTProviderResponse): unknown;
    create(base?: DeepPartial<AddJWTProviderResponse>): AddJWTProviderResponse;
    fromPartial(object: DeepPartial<AddJWTProviderResponse>): AddJWTProviderResponse;
};
export declare const UpdateJWTProviderRequest: {
    encode(message: UpdateJWTProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateJWTProviderRequest;
    fromJSON(object: any): UpdateJWTProviderRequest;
    toJSON(message: UpdateJWTProviderRequest): unknown;
    create(base?: DeepPartial<UpdateJWTProviderRequest>): UpdateJWTProviderRequest;
    fromPartial(object: DeepPartial<UpdateJWTProviderRequest>): UpdateJWTProviderRequest;
};
export declare const UpdateJWTProviderResponse: {
    encode(message: UpdateJWTProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateJWTProviderResponse;
    fromJSON(object: any): UpdateJWTProviderResponse;
    toJSON(message: UpdateJWTProviderResponse): unknown;
    create(base?: DeepPartial<UpdateJWTProviderResponse>): UpdateJWTProviderResponse;
    fromPartial(object: DeepPartial<UpdateJWTProviderResponse>): UpdateJWTProviderResponse;
};
export declare const AddAzureADProviderRequest: {
    encode(message: AddAzureADProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAzureADProviderRequest;
    fromJSON(object: any): AddAzureADProviderRequest;
    toJSON(message: AddAzureADProviderRequest): unknown;
    create(base?: DeepPartial<AddAzureADProviderRequest>): AddAzureADProviderRequest;
    fromPartial(object: DeepPartial<AddAzureADProviderRequest>): AddAzureADProviderRequest;
};
export declare const AddAzureADProviderResponse: {
    encode(message: AddAzureADProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAzureADProviderResponse;
    fromJSON(object: any): AddAzureADProviderResponse;
    toJSON(message: AddAzureADProviderResponse): unknown;
    create(base?: DeepPartial<AddAzureADProviderResponse>): AddAzureADProviderResponse;
    fromPartial(object: DeepPartial<AddAzureADProviderResponse>): AddAzureADProviderResponse;
};
export declare const UpdateAzureADProviderRequest: {
    encode(message: UpdateAzureADProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAzureADProviderRequest;
    fromJSON(object: any): UpdateAzureADProviderRequest;
    toJSON(message: UpdateAzureADProviderRequest): unknown;
    create(base?: DeepPartial<UpdateAzureADProviderRequest>): UpdateAzureADProviderRequest;
    fromPartial(object: DeepPartial<UpdateAzureADProviderRequest>): UpdateAzureADProviderRequest;
};
export declare const UpdateAzureADProviderResponse: {
    encode(message: UpdateAzureADProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAzureADProviderResponse;
    fromJSON(object: any): UpdateAzureADProviderResponse;
    toJSON(message: UpdateAzureADProviderResponse): unknown;
    create(base?: DeepPartial<UpdateAzureADProviderResponse>): UpdateAzureADProviderResponse;
    fromPartial(object: DeepPartial<UpdateAzureADProviderResponse>): UpdateAzureADProviderResponse;
};
export declare const AddGitHubProviderRequest: {
    encode(message: AddGitHubProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGitHubProviderRequest;
    fromJSON(object: any): AddGitHubProviderRequest;
    toJSON(message: AddGitHubProviderRequest): unknown;
    create(base?: DeepPartial<AddGitHubProviderRequest>): AddGitHubProviderRequest;
    fromPartial(object: DeepPartial<AddGitHubProviderRequest>): AddGitHubProviderRequest;
};
export declare const AddGitHubProviderResponse: {
    encode(message: AddGitHubProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGitHubProviderResponse;
    fromJSON(object: any): AddGitHubProviderResponse;
    toJSON(message: AddGitHubProviderResponse): unknown;
    create(base?: DeepPartial<AddGitHubProviderResponse>): AddGitHubProviderResponse;
    fromPartial(object: DeepPartial<AddGitHubProviderResponse>): AddGitHubProviderResponse;
};
export declare const UpdateGitHubProviderRequest: {
    encode(message: UpdateGitHubProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitHubProviderRequest;
    fromJSON(object: any): UpdateGitHubProviderRequest;
    toJSON(message: UpdateGitHubProviderRequest): unknown;
    create(base?: DeepPartial<UpdateGitHubProviderRequest>): UpdateGitHubProviderRequest;
    fromPartial(object: DeepPartial<UpdateGitHubProviderRequest>): UpdateGitHubProviderRequest;
};
export declare const UpdateGitHubProviderResponse: {
    encode(message: UpdateGitHubProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitHubProviderResponse;
    fromJSON(object: any): UpdateGitHubProviderResponse;
    toJSON(message: UpdateGitHubProviderResponse): unknown;
    create(base?: DeepPartial<UpdateGitHubProviderResponse>): UpdateGitHubProviderResponse;
    fromPartial(object: DeepPartial<UpdateGitHubProviderResponse>): UpdateGitHubProviderResponse;
};
export declare const AddGitHubEnterpriseServerProviderRequest: {
    encode(message: AddGitHubEnterpriseServerProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGitHubEnterpriseServerProviderRequest;
    fromJSON(object: any): AddGitHubEnterpriseServerProviderRequest;
    toJSON(message: AddGitHubEnterpriseServerProviderRequest): unknown;
    create(base?: DeepPartial<AddGitHubEnterpriseServerProviderRequest>): AddGitHubEnterpriseServerProviderRequest;
    fromPartial(object: DeepPartial<AddGitHubEnterpriseServerProviderRequest>): AddGitHubEnterpriseServerProviderRequest;
};
export declare const AddGitHubEnterpriseServerProviderResponse: {
    encode(message: AddGitHubEnterpriseServerProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGitHubEnterpriseServerProviderResponse;
    fromJSON(object: any): AddGitHubEnterpriseServerProviderResponse;
    toJSON(message: AddGitHubEnterpriseServerProviderResponse): unknown;
    create(base?: DeepPartial<AddGitHubEnterpriseServerProviderResponse>): AddGitHubEnterpriseServerProviderResponse;
    fromPartial(object: DeepPartial<AddGitHubEnterpriseServerProviderResponse>): AddGitHubEnterpriseServerProviderResponse;
};
export declare const UpdateGitHubEnterpriseServerProviderRequest: {
    encode(message: UpdateGitHubEnterpriseServerProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitHubEnterpriseServerProviderRequest;
    fromJSON(object: any): UpdateGitHubEnterpriseServerProviderRequest;
    toJSON(message: UpdateGitHubEnterpriseServerProviderRequest): unknown;
    create(base?: DeepPartial<UpdateGitHubEnterpriseServerProviderRequest>): UpdateGitHubEnterpriseServerProviderRequest;
    fromPartial(object: DeepPartial<UpdateGitHubEnterpriseServerProviderRequest>): UpdateGitHubEnterpriseServerProviderRequest;
};
export declare const UpdateGitHubEnterpriseServerProviderResponse: {
    encode(message: UpdateGitHubEnterpriseServerProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitHubEnterpriseServerProviderResponse;
    fromJSON(object: any): UpdateGitHubEnterpriseServerProviderResponse;
    toJSON(message: UpdateGitHubEnterpriseServerProviderResponse): unknown;
    create(base?: DeepPartial<UpdateGitHubEnterpriseServerProviderResponse>): UpdateGitHubEnterpriseServerProviderResponse;
    fromPartial(object: DeepPartial<UpdateGitHubEnterpriseServerProviderResponse>): UpdateGitHubEnterpriseServerProviderResponse;
};
export declare const AddGitLabProviderRequest: {
    encode(message: AddGitLabProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGitLabProviderRequest;
    fromJSON(object: any): AddGitLabProviderRequest;
    toJSON(message: AddGitLabProviderRequest): unknown;
    create(base?: DeepPartial<AddGitLabProviderRequest>): AddGitLabProviderRequest;
    fromPartial(object: DeepPartial<AddGitLabProviderRequest>): AddGitLabProviderRequest;
};
export declare const AddGitLabProviderResponse: {
    encode(message: AddGitLabProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGitLabProviderResponse;
    fromJSON(object: any): AddGitLabProviderResponse;
    toJSON(message: AddGitLabProviderResponse): unknown;
    create(base?: DeepPartial<AddGitLabProviderResponse>): AddGitLabProviderResponse;
    fromPartial(object: DeepPartial<AddGitLabProviderResponse>): AddGitLabProviderResponse;
};
export declare const UpdateGitLabProviderRequest: {
    encode(message: UpdateGitLabProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitLabProviderRequest;
    fromJSON(object: any): UpdateGitLabProviderRequest;
    toJSON(message: UpdateGitLabProviderRequest): unknown;
    create(base?: DeepPartial<UpdateGitLabProviderRequest>): UpdateGitLabProviderRequest;
    fromPartial(object: DeepPartial<UpdateGitLabProviderRequest>): UpdateGitLabProviderRequest;
};
export declare const UpdateGitLabProviderResponse: {
    encode(message: UpdateGitLabProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitLabProviderResponse;
    fromJSON(object: any): UpdateGitLabProviderResponse;
    toJSON(message: UpdateGitLabProviderResponse): unknown;
    create(base?: DeepPartial<UpdateGitLabProviderResponse>): UpdateGitLabProviderResponse;
    fromPartial(object: DeepPartial<UpdateGitLabProviderResponse>): UpdateGitLabProviderResponse;
};
export declare const AddGitLabSelfHostedProviderRequest: {
    encode(message: AddGitLabSelfHostedProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGitLabSelfHostedProviderRequest;
    fromJSON(object: any): AddGitLabSelfHostedProviderRequest;
    toJSON(message: AddGitLabSelfHostedProviderRequest): unknown;
    create(base?: DeepPartial<AddGitLabSelfHostedProviderRequest>): AddGitLabSelfHostedProviderRequest;
    fromPartial(object: DeepPartial<AddGitLabSelfHostedProviderRequest>): AddGitLabSelfHostedProviderRequest;
};
export declare const AddGitLabSelfHostedProviderResponse: {
    encode(message: AddGitLabSelfHostedProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGitLabSelfHostedProviderResponse;
    fromJSON(object: any): AddGitLabSelfHostedProviderResponse;
    toJSON(message: AddGitLabSelfHostedProviderResponse): unknown;
    create(base?: DeepPartial<AddGitLabSelfHostedProviderResponse>): AddGitLabSelfHostedProviderResponse;
    fromPartial(object: DeepPartial<AddGitLabSelfHostedProviderResponse>): AddGitLabSelfHostedProviderResponse;
};
export declare const UpdateGitLabSelfHostedProviderRequest: {
    encode(message: UpdateGitLabSelfHostedProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitLabSelfHostedProviderRequest;
    fromJSON(object: any): UpdateGitLabSelfHostedProviderRequest;
    toJSON(message: UpdateGitLabSelfHostedProviderRequest): unknown;
    create(base?: DeepPartial<UpdateGitLabSelfHostedProviderRequest>): UpdateGitLabSelfHostedProviderRequest;
    fromPartial(object: DeepPartial<UpdateGitLabSelfHostedProviderRequest>): UpdateGitLabSelfHostedProviderRequest;
};
export declare const UpdateGitLabSelfHostedProviderResponse: {
    encode(message: UpdateGitLabSelfHostedProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitLabSelfHostedProviderResponse;
    fromJSON(object: any): UpdateGitLabSelfHostedProviderResponse;
    toJSON(message: UpdateGitLabSelfHostedProviderResponse): unknown;
    create(base?: DeepPartial<UpdateGitLabSelfHostedProviderResponse>): UpdateGitLabSelfHostedProviderResponse;
    fromPartial(object: DeepPartial<UpdateGitLabSelfHostedProviderResponse>): UpdateGitLabSelfHostedProviderResponse;
};
export declare const AddGoogleProviderRequest: {
    encode(message: AddGoogleProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGoogleProviderRequest;
    fromJSON(object: any): AddGoogleProviderRequest;
    toJSON(message: AddGoogleProviderRequest): unknown;
    create(base?: DeepPartial<AddGoogleProviderRequest>): AddGoogleProviderRequest;
    fromPartial(object: DeepPartial<AddGoogleProviderRequest>): AddGoogleProviderRequest;
};
export declare const AddGoogleProviderResponse: {
    encode(message: AddGoogleProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddGoogleProviderResponse;
    fromJSON(object: any): AddGoogleProviderResponse;
    toJSON(message: AddGoogleProviderResponse): unknown;
    create(base?: DeepPartial<AddGoogleProviderResponse>): AddGoogleProviderResponse;
    fromPartial(object: DeepPartial<AddGoogleProviderResponse>): AddGoogleProviderResponse;
};
export declare const UpdateGoogleProviderRequest: {
    encode(message: UpdateGoogleProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGoogleProviderRequest;
    fromJSON(object: any): UpdateGoogleProviderRequest;
    toJSON(message: UpdateGoogleProviderRequest): unknown;
    create(base?: DeepPartial<UpdateGoogleProviderRequest>): UpdateGoogleProviderRequest;
    fromPartial(object: DeepPartial<UpdateGoogleProviderRequest>): UpdateGoogleProviderRequest;
};
export declare const UpdateGoogleProviderResponse: {
    encode(message: UpdateGoogleProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGoogleProviderResponse;
    fromJSON(object: any): UpdateGoogleProviderResponse;
    toJSON(message: UpdateGoogleProviderResponse): unknown;
    create(base?: DeepPartial<UpdateGoogleProviderResponse>): UpdateGoogleProviderResponse;
    fromPartial(object: DeepPartial<UpdateGoogleProviderResponse>): UpdateGoogleProviderResponse;
};
export declare const AddLDAPProviderRequest: {
    encode(message: AddLDAPProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddLDAPProviderRequest;
    fromJSON(object: any): AddLDAPProviderRequest;
    toJSON(message: AddLDAPProviderRequest): unknown;
    create(base?: DeepPartial<AddLDAPProviderRequest>): AddLDAPProviderRequest;
    fromPartial(object: DeepPartial<AddLDAPProviderRequest>): AddLDAPProviderRequest;
};
export declare const AddLDAPProviderResponse: {
    encode(message: AddLDAPProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddLDAPProviderResponse;
    fromJSON(object: any): AddLDAPProviderResponse;
    toJSON(message: AddLDAPProviderResponse): unknown;
    create(base?: DeepPartial<AddLDAPProviderResponse>): AddLDAPProviderResponse;
    fromPartial(object: DeepPartial<AddLDAPProviderResponse>): AddLDAPProviderResponse;
};
export declare const UpdateLDAPProviderRequest: {
    encode(message: UpdateLDAPProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLDAPProviderRequest;
    fromJSON(object: any): UpdateLDAPProviderRequest;
    toJSON(message: UpdateLDAPProviderRequest): unknown;
    create(base?: DeepPartial<UpdateLDAPProviderRequest>): UpdateLDAPProviderRequest;
    fromPartial(object: DeepPartial<UpdateLDAPProviderRequest>): UpdateLDAPProviderRequest;
};
export declare const UpdateLDAPProviderResponse: {
    encode(message: UpdateLDAPProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLDAPProviderResponse;
    fromJSON(object: any): UpdateLDAPProviderResponse;
    toJSON(message: UpdateLDAPProviderResponse): unknown;
    create(base?: DeepPartial<UpdateLDAPProviderResponse>): UpdateLDAPProviderResponse;
    fromPartial(object: DeepPartial<UpdateLDAPProviderResponse>): UpdateLDAPProviderResponse;
};
export declare const AddSAMLProviderRequest: {
    encode(message: AddSAMLProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSAMLProviderRequest;
    fromJSON(object: any): AddSAMLProviderRequest;
    toJSON(message: AddSAMLProviderRequest): unknown;
    create(base?: DeepPartial<AddSAMLProviderRequest>): AddSAMLProviderRequest;
    fromPartial(object: DeepPartial<AddSAMLProviderRequest>): AddSAMLProviderRequest;
};
export declare const AddSAMLProviderResponse: {
    encode(message: AddSAMLProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSAMLProviderResponse;
    fromJSON(object: any): AddSAMLProviderResponse;
    toJSON(message: AddSAMLProviderResponse): unknown;
    create(base?: DeepPartial<AddSAMLProviderResponse>): AddSAMLProviderResponse;
    fromPartial(object: DeepPartial<AddSAMLProviderResponse>): AddSAMLProviderResponse;
};
export declare const UpdateSAMLProviderRequest: {
    encode(message: UpdateSAMLProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSAMLProviderRequest;
    fromJSON(object: any): UpdateSAMLProviderRequest;
    toJSON(message: UpdateSAMLProviderRequest): unknown;
    create(base?: DeepPartial<UpdateSAMLProviderRequest>): UpdateSAMLProviderRequest;
    fromPartial(object: DeepPartial<UpdateSAMLProviderRequest>): UpdateSAMLProviderRequest;
};
export declare const UpdateSAMLProviderResponse: {
    encode(message: UpdateSAMLProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSAMLProviderResponse;
    fromJSON(object: any): UpdateSAMLProviderResponse;
    toJSON(message: UpdateSAMLProviderResponse): unknown;
    create(base?: DeepPartial<UpdateSAMLProviderResponse>): UpdateSAMLProviderResponse;
    fromPartial(object: DeepPartial<UpdateSAMLProviderResponse>): UpdateSAMLProviderResponse;
};
export declare const RegenerateSAMLProviderCertificateRequest: {
    encode(message: RegenerateSAMLProviderCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateSAMLProviderCertificateRequest;
    fromJSON(object: any): RegenerateSAMLProviderCertificateRequest;
    toJSON(message: RegenerateSAMLProviderCertificateRequest): unknown;
    create(base?: DeepPartial<RegenerateSAMLProviderCertificateRequest>): RegenerateSAMLProviderCertificateRequest;
    fromPartial(object: DeepPartial<RegenerateSAMLProviderCertificateRequest>): RegenerateSAMLProviderCertificateRequest;
};
export declare const RegenerateSAMLProviderCertificateResponse: {
    encode(message: RegenerateSAMLProviderCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateSAMLProviderCertificateResponse;
    fromJSON(object: any): RegenerateSAMLProviderCertificateResponse;
    toJSON(message: RegenerateSAMLProviderCertificateResponse): unknown;
    create(base?: DeepPartial<RegenerateSAMLProviderCertificateResponse>): RegenerateSAMLProviderCertificateResponse;
    fromPartial(object: DeepPartial<RegenerateSAMLProviderCertificateResponse>): RegenerateSAMLProviderCertificateResponse;
};
export declare const AddAppleProviderRequest: {
    encode(message: AddAppleProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAppleProviderRequest;
    fromJSON(object: any): AddAppleProviderRequest;
    toJSON(message: AddAppleProviderRequest): unknown;
    create(base?: DeepPartial<AddAppleProviderRequest>): AddAppleProviderRequest;
    fromPartial(object: DeepPartial<AddAppleProviderRequest>): AddAppleProviderRequest;
};
export declare const AddAppleProviderResponse: {
    encode(message: AddAppleProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddAppleProviderResponse;
    fromJSON(object: any): AddAppleProviderResponse;
    toJSON(message: AddAppleProviderResponse): unknown;
    create(base?: DeepPartial<AddAppleProviderResponse>): AddAppleProviderResponse;
    fromPartial(object: DeepPartial<AddAppleProviderResponse>): AddAppleProviderResponse;
};
export declare const UpdateAppleProviderRequest: {
    encode(message: UpdateAppleProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAppleProviderRequest;
    fromJSON(object: any): UpdateAppleProviderRequest;
    toJSON(message: UpdateAppleProviderRequest): unknown;
    create(base?: DeepPartial<UpdateAppleProviderRequest>): UpdateAppleProviderRequest;
    fromPartial(object: DeepPartial<UpdateAppleProviderRequest>): UpdateAppleProviderRequest;
};
export declare const UpdateAppleProviderResponse: {
    encode(message: UpdateAppleProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAppleProviderResponse;
    fromJSON(object: any): UpdateAppleProviderResponse;
    toJSON(message: UpdateAppleProviderResponse): unknown;
    create(base?: DeepPartial<UpdateAppleProviderResponse>): UpdateAppleProviderResponse;
    fromPartial(object: DeepPartial<UpdateAppleProviderResponse>): UpdateAppleProviderResponse;
};
export declare const DeleteProviderRequest: {
    encode(message: DeleteProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProviderRequest;
    fromJSON(object: any): DeleteProviderRequest;
    toJSON(message: DeleteProviderRequest): unknown;
    create(base?: DeepPartial<DeleteProviderRequest>): DeleteProviderRequest;
    fromPartial(object: DeepPartial<DeleteProviderRequest>): DeleteProviderRequest;
};
export declare const DeleteProviderResponse: {
    encode(message: DeleteProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProviderResponse;
    fromJSON(object: any): DeleteProviderResponse;
    toJSON(message: DeleteProviderResponse): unknown;
    create(base?: DeepPartial<DeleteProviderResponse>): DeleteProviderResponse;
    fromPartial(object: DeepPartial<DeleteProviderResponse>): DeleteProviderResponse;
};
export declare const ListActionsRequest: {
    encode(message: ListActionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListActionsRequest;
    fromJSON(object: any): ListActionsRequest;
    toJSON(message: ListActionsRequest): unknown;
    create(base?: DeepPartial<ListActionsRequest>): ListActionsRequest;
    fromPartial(object: DeepPartial<ListActionsRequest>): ListActionsRequest;
};
export declare const ActionQuery: {
    encode(message: ActionQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActionQuery;
    fromJSON(object: any): ActionQuery;
    toJSON(message: ActionQuery): unknown;
    create(base?: DeepPartial<ActionQuery>): ActionQuery;
    fromPartial(object: DeepPartial<ActionQuery>): ActionQuery;
};
export declare const ListActionsResponse: {
    encode(message: ListActionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListActionsResponse;
    fromJSON(object: any): ListActionsResponse;
    toJSON(message: ListActionsResponse): unknown;
    create(base?: DeepPartial<ListActionsResponse>): ListActionsResponse;
    fromPartial(object: DeepPartial<ListActionsResponse>): ListActionsResponse;
};
export declare const CreateActionRequest: {
    encode(message: CreateActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateActionRequest;
    fromJSON(object: any): CreateActionRequest;
    toJSON(message: CreateActionRequest): unknown;
    create(base?: DeepPartial<CreateActionRequest>): CreateActionRequest;
    fromPartial(object: DeepPartial<CreateActionRequest>): CreateActionRequest;
};
export declare const CreateActionResponse: {
    encode(message: CreateActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateActionResponse;
    fromJSON(object: any): CreateActionResponse;
    toJSON(message: CreateActionResponse): unknown;
    create(base?: DeepPartial<CreateActionResponse>): CreateActionResponse;
    fromPartial(object: DeepPartial<CreateActionResponse>): CreateActionResponse;
};
export declare const GetActionRequest: {
    encode(message: GetActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetActionRequest;
    fromJSON(object: any): GetActionRequest;
    toJSON(message: GetActionRequest): unknown;
    create(base?: DeepPartial<GetActionRequest>): GetActionRequest;
    fromPartial(object: DeepPartial<GetActionRequest>): GetActionRequest;
};
export declare const GetActionResponse: {
    encode(message: GetActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetActionResponse;
    fromJSON(object: any): GetActionResponse;
    toJSON(message: GetActionResponse): unknown;
    create(base?: DeepPartial<GetActionResponse>): GetActionResponse;
    fromPartial(object: DeepPartial<GetActionResponse>): GetActionResponse;
};
export declare const UpdateActionRequest: {
    encode(message: UpdateActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateActionRequest;
    fromJSON(object: any): UpdateActionRequest;
    toJSON(message: UpdateActionRequest): unknown;
    create(base?: DeepPartial<UpdateActionRequest>): UpdateActionRequest;
    fromPartial(object: DeepPartial<UpdateActionRequest>): UpdateActionRequest;
};
export declare const UpdateActionResponse: {
    encode(message: UpdateActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateActionResponse;
    fromJSON(object: any): UpdateActionResponse;
    toJSON(message: UpdateActionResponse): unknown;
    create(base?: DeepPartial<UpdateActionResponse>): UpdateActionResponse;
    fromPartial(object: DeepPartial<UpdateActionResponse>): UpdateActionResponse;
};
export declare const DeleteActionRequest: {
    encode(message: DeleteActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteActionRequest;
    fromJSON(object: any): DeleteActionRequest;
    toJSON(message: DeleteActionRequest): unknown;
    create(base?: DeepPartial<DeleteActionRequest>): DeleteActionRequest;
    fromPartial(object: DeepPartial<DeleteActionRequest>): DeleteActionRequest;
};
export declare const DeleteActionResponse: {
    encode(_: DeleteActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteActionResponse;
    fromJSON(_: any): DeleteActionResponse;
    toJSON(_: DeleteActionResponse): unknown;
    create(base?: DeepPartial<DeleteActionResponse>): DeleteActionResponse;
    fromPartial(_: DeepPartial<DeleteActionResponse>): DeleteActionResponse;
};
export declare const ListFlowTypesRequest: {
    encode(_: ListFlowTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFlowTypesRequest;
    fromJSON(_: any): ListFlowTypesRequest;
    toJSON(_: ListFlowTypesRequest): unknown;
    create(base?: DeepPartial<ListFlowTypesRequest>): ListFlowTypesRequest;
    fromPartial(_: DeepPartial<ListFlowTypesRequest>): ListFlowTypesRequest;
};
export declare const ListFlowTypesResponse: {
    encode(message: ListFlowTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFlowTypesResponse;
    fromJSON(object: any): ListFlowTypesResponse;
    toJSON(message: ListFlowTypesResponse): unknown;
    create(base?: DeepPartial<ListFlowTypesResponse>): ListFlowTypesResponse;
    fromPartial(object: DeepPartial<ListFlowTypesResponse>): ListFlowTypesResponse;
};
export declare const ListFlowTriggerTypesRequest: {
    encode(message: ListFlowTriggerTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFlowTriggerTypesRequest;
    fromJSON(object: any): ListFlowTriggerTypesRequest;
    toJSON(message: ListFlowTriggerTypesRequest): unknown;
    create(base?: DeepPartial<ListFlowTriggerTypesRequest>): ListFlowTriggerTypesRequest;
    fromPartial(object: DeepPartial<ListFlowTriggerTypesRequest>): ListFlowTriggerTypesRequest;
};
export declare const ListFlowTriggerTypesResponse: {
    encode(message: ListFlowTriggerTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFlowTriggerTypesResponse;
    fromJSON(object: any): ListFlowTriggerTypesResponse;
    toJSON(message: ListFlowTriggerTypesResponse): unknown;
    create(base?: DeepPartial<ListFlowTriggerTypesResponse>): ListFlowTriggerTypesResponse;
    fromPartial(object: DeepPartial<ListFlowTriggerTypesResponse>): ListFlowTriggerTypesResponse;
};
export declare const DeactivateActionRequest: {
    encode(message: DeactivateActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateActionRequest;
    fromJSON(object: any): DeactivateActionRequest;
    toJSON(message: DeactivateActionRequest): unknown;
    create(base?: DeepPartial<DeactivateActionRequest>): DeactivateActionRequest;
    fromPartial(object: DeepPartial<DeactivateActionRequest>): DeactivateActionRequest;
};
export declare const DeactivateActionResponse: {
    encode(message: DeactivateActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateActionResponse;
    fromJSON(object: any): DeactivateActionResponse;
    toJSON(message: DeactivateActionResponse): unknown;
    create(base?: DeepPartial<DeactivateActionResponse>): DeactivateActionResponse;
    fromPartial(object: DeepPartial<DeactivateActionResponse>): DeactivateActionResponse;
};
export declare const ReactivateActionRequest: {
    encode(message: ReactivateActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateActionRequest;
    fromJSON(object: any): ReactivateActionRequest;
    toJSON(message: ReactivateActionRequest): unknown;
    create(base?: DeepPartial<ReactivateActionRequest>): ReactivateActionRequest;
    fromPartial(object: DeepPartial<ReactivateActionRequest>): ReactivateActionRequest;
};
export declare const ReactivateActionResponse: {
    encode(message: ReactivateActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateActionResponse;
    fromJSON(object: any): ReactivateActionResponse;
    toJSON(message: ReactivateActionResponse): unknown;
    create(base?: DeepPartial<ReactivateActionResponse>): ReactivateActionResponse;
    fromPartial(object: DeepPartial<ReactivateActionResponse>): ReactivateActionResponse;
};
export declare const GetFlowRequest: {
    encode(message: GetFlowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFlowRequest;
    fromJSON(object: any): GetFlowRequest;
    toJSON(message: GetFlowRequest): unknown;
    create(base?: DeepPartial<GetFlowRequest>): GetFlowRequest;
    fromPartial(object: DeepPartial<GetFlowRequest>): GetFlowRequest;
};
export declare const GetFlowResponse: {
    encode(message: GetFlowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFlowResponse;
    fromJSON(object: any): GetFlowResponse;
    toJSON(message: GetFlowResponse): unknown;
    create(base?: DeepPartial<GetFlowResponse>): GetFlowResponse;
    fromPartial(object: DeepPartial<GetFlowResponse>): GetFlowResponse;
};
export declare const ClearFlowRequest: {
    encode(message: ClearFlowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClearFlowRequest;
    fromJSON(object: any): ClearFlowRequest;
    toJSON(message: ClearFlowRequest): unknown;
    create(base?: DeepPartial<ClearFlowRequest>): ClearFlowRequest;
    fromPartial(object: DeepPartial<ClearFlowRequest>): ClearFlowRequest;
};
export declare const ClearFlowResponse: {
    encode(message: ClearFlowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClearFlowResponse;
    fromJSON(object: any): ClearFlowResponse;
    toJSON(message: ClearFlowResponse): unknown;
    create(base?: DeepPartial<ClearFlowResponse>): ClearFlowResponse;
    fromPartial(object: DeepPartial<ClearFlowResponse>): ClearFlowResponse;
};
export declare const SetTriggerActionsRequest: {
    encode(message: SetTriggerActionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTriggerActionsRequest;
    fromJSON(object: any): SetTriggerActionsRequest;
    toJSON(message: SetTriggerActionsRequest): unknown;
    create(base?: DeepPartial<SetTriggerActionsRequest>): SetTriggerActionsRequest;
    fromPartial(object: DeepPartial<SetTriggerActionsRequest>): SetTriggerActionsRequest;
};
export declare const SetTriggerActionsResponse: {
    encode(message: SetTriggerActionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTriggerActionsResponse;
    fromJSON(object: any): SetTriggerActionsResponse;
    toJSON(message: SetTriggerActionsResponse): unknown;
    create(base?: DeepPartial<SetTriggerActionsResponse>): SetTriggerActionsResponse;
    fromPartial(object: DeepPartial<SetTriggerActionsResponse>): SetTriggerActionsResponse;
};
export type ManagementServiceDefinition = typeof ManagementServiceDefinition;
export declare const ManagementServiceDefinition: {
    readonly name: "ManagementService";
    readonly fullName: "zitadel.management.v1.ManagementService";
    readonly methods: {
        readonly healthz: {
            readonly name: "Healthz";
            readonly requestType: {
                encode(_: HealthzRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): HealthzRequest;
                fromJSON(_: any): HealthzRequest;
                toJSON(_: HealthzRequest): unknown;
                create(base?: DeepPartial<HealthzRequest>): HealthzRequest;
                fromPartial(_: DeepPartial<HealthzRequest>): HealthzRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: HealthzResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): HealthzResponse;
                fromJSON(_: any): HealthzResponse;
                toJSON(_: HealthzResponse): unknown;
                create(base?: DeepPartial<HealthzResponse>): HealthzResponse;
                fromPartial(_: DeepPartial<HealthzResponse>): HealthzResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOIDCInformation: {
            readonly name: "GetOIDCInformation";
            readonly requestType: {
                encode(_: GetOIDCInformationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOIDCInformationRequest;
                fromJSON(_: any): GetOIDCInformationRequest;
                toJSON(_: GetOIDCInformationRequest): unknown;
                create(base?: DeepPartial<GetOIDCInformationRequest>): GetOIDCInformationRequest;
                fromPartial(_: DeepPartial<GetOIDCInformationRequest>): GetOIDCInformationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOIDCInformationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOIDCInformationResponse;
                fromJSON(object: any): GetOIDCInformationResponse;
                toJSON(message: GetOIDCInformationResponse): unknown;
                create(base?: DeepPartial<GetOIDCInformationResponse>): GetOIDCInformationResponse;
                fromPartial(object: DeepPartial<GetOIDCInformationResponse>): GetOIDCInformationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getIAM: {
            readonly name: "GetIAM";
            readonly requestType: {
                encode(_: GetIAMRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetIAMRequest;
                fromJSON(_: any): GetIAMRequest;
                toJSON(_: GetIAMRequest): unknown;
                create(base?: DeepPartial<GetIAMRequest>): GetIAMRequest;
                fromPartial(_: DeepPartial<GetIAMRequest>): GetIAMRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetIAMResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetIAMResponse;
                fromJSON(object: any): GetIAMResponse;
                toJSON(message: GetIAMResponse): unknown;
                create(base?: DeepPartial<GetIAMResponse>): GetIAMResponse;
                fromPartial(object: DeepPartial<GetIAMResponse>): GetIAMResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSupportedLanguages: {
            readonly name: "GetSupportedLanguages";
            readonly requestType: {
                encode(_: GetSupportedLanguagesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSupportedLanguagesRequest;
                fromJSON(_: any): GetSupportedLanguagesRequest;
                toJSON(_: GetSupportedLanguagesRequest): unknown;
                create(base?: DeepPartial<GetSupportedLanguagesRequest>): GetSupportedLanguagesRequest;
                fromPartial(_: DeepPartial<GetSupportedLanguagesRequest>): GetSupportedLanguagesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetSupportedLanguagesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSupportedLanguagesResponse;
                fromJSON(object: any): GetSupportedLanguagesResponse;
                toJSON(message: GetSupportedLanguagesResponse): unknown;
                create(base?: DeepPartial<GetSupportedLanguagesResponse>): GetSupportedLanguagesResponse;
                fromPartial(object: DeepPartial<GetSupportedLanguagesResponse>): GetSupportedLanguagesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserByID: {
            readonly name: "GetUserByID";
            readonly requestType: {
                encode(message: GetUserByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByIDRequest;
                fromJSON(object: any): GetUserByIDRequest;
                toJSON(message: GetUserByIDRequest): unknown;
                create(base?: DeepPartial<GetUserByIDRequest>): GetUserByIDRequest;
                fromPartial(object: DeepPartial<GetUserByIDRequest>): GetUserByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetUserByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByIDResponse;
                fromJSON(object: any): GetUserByIDResponse;
                toJSON(message: GetUserByIDResponse): unknown;
                create(base?: DeepPartial<GetUserByIDResponse>): GetUserByIDResponse;
                fromPartial(object: DeepPartial<GetUserByIDResponse>): GetUserByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserByLoginNameGlobal: {
            readonly name: "GetUserByLoginNameGlobal";
            readonly requestType: {
                encode(message: GetUserByLoginNameGlobalRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByLoginNameGlobalRequest;
                fromJSON(object: any): GetUserByLoginNameGlobalRequest;
                toJSON(message: GetUserByLoginNameGlobalRequest): unknown;
                create(base?: DeepPartial<GetUserByLoginNameGlobalRequest>): GetUserByLoginNameGlobalRequest;
                fromPartial(object: DeepPartial<GetUserByLoginNameGlobalRequest>): GetUserByLoginNameGlobalRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetUserByLoginNameGlobalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByLoginNameGlobalResponse;
                fromJSON(object: any): GetUserByLoginNameGlobalResponse;
                toJSON(message: GetUserByLoginNameGlobalResponse): unknown;
                create(base?: DeepPartial<GetUserByLoginNameGlobalResponse>): GetUserByLoginNameGlobalResponse;
                fromPartial(object: DeepPartial<GetUserByLoginNameGlobalResponse>): GetUserByLoginNameGlobalResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUsers: {
            readonly name: "ListUsers";
            readonly requestType: {
                encode(message: ListUsersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest;
                fromJSON(object: any): ListUsersRequest;
                toJSON(message: ListUsersRequest): unknown;
                create(base?: DeepPartial<ListUsersRequest>): ListUsersRequest;
                fromPartial(object: DeepPartial<ListUsersRequest>): ListUsersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListUsersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse;
                fromJSON(object: any): ListUsersResponse;
                toJSON(message: ListUsersResponse): unknown;
                create(base?: DeepPartial<ListUsersResponse>): ListUsersResponse;
                fromPartial(object: DeepPartial<ListUsersResponse>): ListUsersResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUserChanges: {
            readonly name: "ListUserChanges";
            readonly requestType: {
                encode(message: ListUserChangesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUserChangesRequest;
                fromJSON(object: any): ListUserChangesRequest;
                toJSON(message: ListUserChangesRequest): unknown;
                create(base?: DeepPartial<ListUserChangesRequest>): ListUserChangesRequest;
                fromPartial(object: DeepPartial<ListUserChangesRequest>): ListUserChangesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListUserChangesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUserChangesResponse;
                fromJSON(object: any): ListUserChangesResponse;
                toJSON(message: ListUserChangesResponse): unknown;
                create(base?: DeepPartial<ListUserChangesResponse>): ListUserChangesResponse;
                fromPartial(object: DeepPartial<ListUserChangesResponse>): ListUserChangesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly isUserUnique: {
            readonly name: "IsUserUnique";
            readonly requestType: {
                encode(message: IsUserUniqueRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsUserUniqueRequest;
                fromJSON(object: any): IsUserUniqueRequest;
                toJSON(message: IsUserUniqueRequest): unknown;
                create(base?: DeepPartial<IsUserUniqueRequest>): IsUserUniqueRequest;
                fromPartial(object: DeepPartial<IsUserUniqueRequest>): IsUserUniqueRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: IsUserUniqueResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsUserUniqueResponse;
                fromJSON(object: any): IsUserUniqueResponse;
                toJSON(message: IsUserUniqueResponse): unknown;
                create(base?: DeepPartial<IsUserUniqueResponse>): IsUserUniqueResponse;
                fromPartial(object: DeepPartial<IsUserUniqueResponse>): IsUserUniqueResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** deprecated: use ImportHumanUser */
        readonly addHumanUser: {
            readonly name: "AddHumanUser";
            readonly requestType: {
                encode(message: AddHumanUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserRequest;
                fromJSON(object: any): AddHumanUserRequest;
                toJSON(message: AddHumanUserRequest): unknown;
                create(base?: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest;
                fromPartial(object: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddHumanUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserResponse;
                fromJSON(object: any): AddHumanUserResponse;
                toJSON(message: AddHumanUserResponse): unknown;
                create(base?: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse;
                fromPartial(object: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly importHumanUser: {
            readonly name: "ImportHumanUser";
            readonly requestType: {
                encode(message: ImportHumanUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserRequest;
                fromJSON(object: any): ImportHumanUserRequest;
                toJSON(message: ImportHumanUserRequest): unknown;
                create(base?: DeepPartial<ImportHumanUserRequest>): ImportHumanUserRequest;
                fromPartial(object: DeepPartial<ImportHumanUserRequest>): ImportHumanUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ImportHumanUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ImportHumanUserResponse;
                fromJSON(object: any): ImportHumanUserResponse;
                toJSON(message: ImportHumanUserResponse): unknown;
                create(base?: DeepPartial<ImportHumanUserResponse>): ImportHumanUserResponse;
                fromPartial(object: DeepPartial<ImportHumanUserResponse>): ImportHumanUserResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMachineUser: {
            readonly name: "AddMachineUser";
            readonly requestType: {
                encode(message: AddMachineUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMachineUserRequest;
                fromJSON(object: any): AddMachineUserRequest;
                toJSON(message: AddMachineUserRequest): unknown;
                create(base?: DeepPartial<AddMachineUserRequest>): AddMachineUserRequest;
                fromPartial(object: DeepPartial<AddMachineUserRequest>): AddMachineUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddMachineUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMachineUserResponse;
                fromJSON(object: any): AddMachineUserResponse;
                toJSON(message: AddMachineUserResponse): unknown;
                create(base?: DeepPartial<AddMachineUserResponse>): AddMachineUserResponse;
                fromPartial(object: DeepPartial<AddMachineUserResponse>): AddMachineUserResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateUser: {
            readonly name: "DeactivateUser";
            readonly requestType: {
                encode(message: DeactivateUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserRequest;
                fromJSON(object: any): DeactivateUserRequest;
                toJSON(message: DeactivateUserRequest): unknown;
                create(base?: DeepPartial<DeactivateUserRequest>): DeactivateUserRequest;
                fromPartial(object: DeepPartial<DeactivateUserRequest>): DeactivateUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserResponse;
                fromJSON(object: any): DeactivateUserResponse;
                toJSON(message: DeactivateUserResponse): unknown;
                create(base?: DeepPartial<DeactivateUserResponse>): DeactivateUserResponse;
                fromPartial(object: DeepPartial<DeactivateUserResponse>): DeactivateUserResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateUser: {
            readonly name: "ReactivateUser";
            readonly requestType: {
                encode(message: ReactivateUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserRequest;
                fromJSON(object: any): ReactivateUserRequest;
                toJSON(message: ReactivateUserRequest): unknown;
                create(base?: DeepPartial<ReactivateUserRequest>): ReactivateUserRequest;
                fromPartial(object: DeepPartial<ReactivateUserRequest>): ReactivateUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ReactivateUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserResponse;
                fromJSON(object: any): ReactivateUserResponse;
                toJSON(message: ReactivateUserResponse): unknown;
                create(base?: DeepPartial<ReactivateUserResponse>): ReactivateUserResponse;
                fromPartial(object: DeepPartial<ReactivateUserResponse>): ReactivateUserResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly lockUser: {
            readonly name: "LockUser";
            readonly requestType: {
                encode(message: LockUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): LockUserRequest;
                fromJSON(object: any): LockUserRequest;
                toJSON(message: LockUserRequest): unknown;
                create(base?: DeepPartial<LockUserRequest>): LockUserRequest;
                fromPartial(object: DeepPartial<LockUserRequest>): LockUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: LockUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): LockUserResponse;
                fromJSON(object: any): LockUserResponse;
                toJSON(message: LockUserResponse): unknown;
                create(base?: DeepPartial<LockUserResponse>): LockUserResponse;
                fromPartial(object: DeepPartial<LockUserResponse>): LockUserResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly unlockUser: {
            readonly name: "UnlockUser";
            readonly requestType: {
                encode(message: UnlockUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UnlockUserRequest;
                fromJSON(object: any): UnlockUserRequest;
                toJSON(message: UnlockUserRequest): unknown;
                create(base?: DeepPartial<UnlockUserRequest>): UnlockUserRequest;
                fromPartial(object: DeepPartial<UnlockUserRequest>): UnlockUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UnlockUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UnlockUserResponse;
                fromJSON(object: any): UnlockUserResponse;
                toJSON(message: UnlockUserResponse): unknown;
                create(base?: DeepPartial<UnlockUserResponse>): UnlockUserResponse;
                fromPartial(object: DeepPartial<UnlockUserResponse>): UnlockUserResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeUser: {
            readonly name: "RemoveUser";
            readonly requestType: {
                encode(message: RemoveUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserRequest;
                fromJSON(object: any): RemoveUserRequest;
                toJSON(message: RemoveUserRequest): unknown;
                create(base?: DeepPartial<RemoveUserRequest>): RemoveUserRequest;
                fromPartial(object: DeepPartial<RemoveUserRequest>): RemoveUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserResponse;
                fromJSON(object: any): RemoveUserResponse;
                toJSON(message: RemoveUserResponse): unknown;
                create(base?: DeepPartial<RemoveUserResponse>): RemoveUserResponse;
                fromPartial(object: DeepPartial<RemoveUserResponse>): RemoveUserResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateUserName: {
            readonly name: "UpdateUserName";
            readonly requestType: {
                encode(message: UpdateUserNameRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserNameRequest;
                fromJSON(object: any): UpdateUserNameRequest;
                toJSON(message: UpdateUserNameRequest): unknown;
                create(base?: DeepPartial<UpdateUserNameRequest>): UpdateUserNameRequest;
                fromPartial(object: DeepPartial<UpdateUserNameRequest>): UpdateUserNameRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateUserNameResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserNameResponse;
                fromJSON(object: any): UpdateUserNameResponse;
                toJSON(message: UpdateUserNameResponse): unknown;
                create(base?: DeepPartial<UpdateUserNameResponse>): UpdateUserNameResponse;
                fromPartial(object: DeepPartial<UpdateUserNameResponse>): UpdateUserNameResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setUserMetadata: {
            readonly name: "SetUserMetadata";
            readonly requestType: {
                encode(message: SetUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetUserMetadataRequest;
                fromJSON(object: any): SetUserMetadataRequest;
                toJSON(message: SetUserMetadataRequest): unknown;
                create(base?: DeepPartial<SetUserMetadataRequest>): SetUserMetadataRequest;
                fromPartial(object: DeepPartial<SetUserMetadataRequest>): SetUserMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetUserMetadataResponse;
                fromJSON(object: any): SetUserMetadataResponse;
                toJSON(message: SetUserMetadataResponse): unknown;
                create(base?: DeepPartial<SetUserMetadataResponse>): SetUserMetadataResponse;
                fromPartial(object: DeepPartial<SetUserMetadataResponse>): SetUserMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkSetUserMetadata: {
            readonly name: "BulkSetUserMetadata";
            readonly requestType: {
                encode(message: BulkSetUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetUserMetadataRequest;
                fromJSON(object: any): BulkSetUserMetadataRequest;
                toJSON(message: BulkSetUserMetadataRequest): unknown;
                create(base?: DeepPartial<BulkSetUserMetadataRequest>): BulkSetUserMetadataRequest;
                fromPartial(object: DeepPartial<BulkSetUserMetadataRequest>): BulkSetUserMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BulkSetUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetUserMetadataResponse;
                fromJSON(object: any): BulkSetUserMetadataResponse;
                toJSON(message: BulkSetUserMetadataResponse): unknown;
                create(base?: DeepPartial<BulkSetUserMetadataResponse>): BulkSetUserMetadataResponse;
                fromPartial(object: DeepPartial<BulkSetUserMetadataResponse>): BulkSetUserMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUserMetadata: {
            readonly name: "ListUserMetadata";
            readonly requestType: {
                encode(message: ListUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUserMetadataRequest;
                fromJSON(object: any): ListUserMetadataRequest;
                toJSON(message: ListUserMetadataRequest): unknown;
                create(base?: DeepPartial<ListUserMetadataRequest>): ListUserMetadataRequest;
                fromPartial(object: DeepPartial<ListUserMetadataRequest>): ListUserMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUserMetadataResponse;
                fromJSON(object: any): ListUserMetadataResponse;
                toJSON(message: ListUserMetadataResponse): unknown;
                create(base?: DeepPartial<ListUserMetadataResponse>): ListUserMetadataResponse;
                fromPartial(object: DeepPartial<ListUserMetadataResponse>): ListUserMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserMetadata: {
            readonly name: "GetUserMetadata";
            readonly requestType: {
                encode(message: GetUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetUserMetadataRequest;
                fromJSON(object: any): GetUserMetadataRequest;
                toJSON(message: GetUserMetadataRequest): unknown;
                create(base?: DeepPartial<GetUserMetadataRequest>): GetUserMetadataRequest;
                fromPartial(object: DeepPartial<GetUserMetadataRequest>): GetUserMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetUserMetadataResponse;
                fromJSON(object: any): GetUserMetadataResponse;
                toJSON(message: GetUserMetadataResponse): unknown;
                create(base?: DeepPartial<GetUserMetadataResponse>): GetUserMetadataResponse;
                fromPartial(object: DeepPartial<GetUserMetadataResponse>): GetUserMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeUserMetadata: {
            readonly name: "RemoveUserMetadata";
            readonly requestType: {
                encode(message: RemoveUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserMetadataRequest;
                fromJSON(object: any): RemoveUserMetadataRequest;
                toJSON(message: RemoveUserMetadataRequest): unknown;
                create(base?: DeepPartial<RemoveUserMetadataRequest>): RemoveUserMetadataRequest;
                fromPartial(object: DeepPartial<RemoveUserMetadataRequest>): RemoveUserMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserMetadataResponse;
                fromJSON(object: any): RemoveUserMetadataResponse;
                toJSON(message: RemoveUserMetadataResponse): unknown;
                create(base?: DeepPartial<RemoveUserMetadataResponse>): RemoveUserMetadataResponse;
                fromPartial(object: DeepPartial<RemoveUserMetadataResponse>): RemoveUserMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkRemoveUserMetadata: {
            readonly name: "BulkRemoveUserMetadata";
            readonly requestType: {
                encode(message: BulkRemoveUserMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveUserMetadataRequest;
                fromJSON(object: any): BulkRemoveUserMetadataRequest;
                toJSON(message: BulkRemoveUserMetadataRequest): unknown;
                create(base?: DeepPartial<BulkRemoveUserMetadataRequest>): BulkRemoveUserMetadataRequest;
                fromPartial(object: DeepPartial<BulkRemoveUserMetadataRequest>): BulkRemoveUserMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BulkRemoveUserMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveUserMetadataResponse;
                fromJSON(object: any): BulkRemoveUserMetadataResponse;
                toJSON(message: BulkRemoveUserMetadataResponse): unknown;
                create(base?: DeepPartial<BulkRemoveUserMetadataResponse>): BulkRemoveUserMetadataResponse;
                fromPartial(object: DeepPartial<BulkRemoveUserMetadataResponse>): BulkRemoveUserMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getHumanProfile: {
            readonly name: "GetHumanProfile";
            readonly requestType: {
                encode(message: GetHumanProfileRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanProfileRequest;
                fromJSON(object: any): GetHumanProfileRequest;
                toJSON(message: GetHumanProfileRequest): unknown;
                create(base?: DeepPartial<GetHumanProfileRequest>): GetHumanProfileRequest;
                fromPartial(object: DeepPartial<GetHumanProfileRequest>): GetHumanProfileRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetHumanProfileResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanProfileResponse;
                fromJSON(object: any): GetHumanProfileResponse;
                toJSON(message: GetHumanProfileResponse): unknown;
                create(base?: DeepPartial<GetHumanProfileResponse>): GetHumanProfileResponse;
                fromPartial(object: DeepPartial<GetHumanProfileResponse>): GetHumanProfileResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateHumanProfile: {
            readonly name: "UpdateHumanProfile";
            readonly requestType: {
                encode(message: UpdateHumanProfileRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanProfileRequest;
                fromJSON(object: any): UpdateHumanProfileRequest;
                toJSON(message: UpdateHumanProfileRequest): unknown;
                create(base?: DeepPartial<UpdateHumanProfileRequest>): UpdateHumanProfileRequest;
                fromPartial(object: DeepPartial<UpdateHumanProfileRequest>): UpdateHumanProfileRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateHumanProfileResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanProfileResponse;
                fromJSON(object: any): UpdateHumanProfileResponse;
                toJSON(message: UpdateHumanProfileResponse): unknown;
                create(base?: DeepPartial<UpdateHumanProfileResponse>): UpdateHumanProfileResponse;
                fromPartial(object: DeepPartial<UpdateHumanProfileResponse>): UpdateHumanProfileResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getHumanEmail: {
            readonly name: "GetHumanEmail";
            readonly requestType: {
                encode(message: GetHumanEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanEmailRequest;
                fromJSON(object: any): GetHumanEmailRequest;
                toJSON(message: GetHumanEmailRequest): unknown;
                create(base?: DeepPartial<GetHumanEmailRequest>): GetHumanEmailRequest;
                fromPartial(object: DeepPartial<GetHumanEmailRequest>): GetHumanEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetHumanEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanEmailResponse;
                fromJSON(object: any): GetHumanEmailResponse;
                toJSON(message: GetHumanEmailResponse): unknown;
                create(base?: DeepPartial<GetHumanEmailResponse>): GetHumanEmailResponse;
                fromPartial(object: DeepPartial<GetHumanEmailResponse>): GetHumanEmailResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateHumanEmail: {
            readonly name: "UpdateHumanEmail";
            readonly requestType: {
                encode(message: UpdateHumanEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanEmailRequest;
                fromJSON(object: any): UpdateHumanEmailRequest;
                toJSON(message: UpdateHumanEmailRequest): unknown;
                create(base?: DeepPartial<UpdateHumanEmailRequest>): UpdateHumanEmailRequest;
                fromPartial(object: DeepPartial<UpdateHumanEmailRequest>): UpdateHumanEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateHumanEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanEmailResponse;
                fromJSON(object: any): UpdateHumanEmailResponse;
                toJSON(message: UpdateHumanEmailResponse): unknown;
                create(base?: DeepPartial<UpdateHumanEmailResponse>): UpdateHumanEmailResponse;
                fromPartial(object: DeepPartial<UpdateHumanEmailResponse>): UpdateHumanEmailResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendHumanInitialization: {
            readonly name: "ResendHumanInitialization";
            readonly requestType: {
                encode(message: ResendHumanInitializationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanInitializationRequest;
                fromJSON(object: any): ResendHumanInitializationRequest;
                toJSON(message: ResendHumanInitializationRequest): unknown;
                create(base?: DeepPartial<ResendHumanInitializationRequest>): ResendHumanInitializationRequest;
                fromPartial(object: DeepPartial<ResendHumanInitializationRequest>): ResendHumanInitializationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResendHumanInitializationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanInitializationResponse;
                fromJSON(object: any): ResendHumanInitializationResponse;
                toJSON(message: ResendHumanInitializationResponse): unknown;
                create(base?: DeepPartial<ResendHumanInitializationResponse>): ResendHumanInitializationResponse;
                fromPartial(object: DeepPartial<ResendHumanInitializationResponse>): ResendHumanInitializationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendHumanEmailVerification: {
            readonly name: "ResendHumanEmailVerification";
            readonly requestType: {
                encode(message: ResendHumanEmailVerificationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanEmailVerificationRequest;
                fromJSON(object: any): ResendHumanEmailVerificationRequest;
                toJSON(message: ResendHumanEmailVerificationRequest): unknown;
                create(base?: DeepPartial<ResendHumanEmailVerificationRequest>): ResendHumanEmailVerificationRequest;
                fromPartial(object: DeepPartial<ResendHumanEmailVerificationRequest>): ResendHumanEmailVerificationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResendHumanEmailVerificationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanEmailVerificationResponse;
                fromJSON(object: any): ResendHumanEmailVerificationResponse;
                toJSON(message: ResendHumanEmailVerificationResponse): unknown;
                create(base?: DeepPartial<ResendHumanEmailVerificationResponse>): ResendHumanEmailVerificationResponse;
                fromPartial(object: DeepPartial<ResendHumanEmailVerificationResponse>): ResendHumanEmailVerificationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getHumanPhone: {
            readonly name: "GetHumanPhone";
            readonly requestType: {
                encode(message: GetHumanPhoneRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanPhoneRequest;
                fromJSON(object: any): GetHumanPhoneRequest;
                toJSON(message: GetHumanPhoneRequest): unknown;
                create(base?: DeepPartial<GetHumanPhoneRequest>): GetHumanPhoneRequest;
                fromPartial(object: DeepPartial<GetHumanPhoneRequest>): GetHumanPhoneRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetHumanPhoneResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetHumanPhoneResponse;
                fromJSON(object: any): GetHumanPhoneResponse;
                toJSON(message: GetHumanPhoneResponse): unknown;
                create(base?: DeepPartial<GetHumanPhoneResponse>): GetHumanPhoneResponse;
                fromPartial(object: DeepPartial<GetHumanPhoneResponse>): GetHumanPhoneResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateHumanPhone: {
            readonly name: "UpdateHumanPhone";
            readonly requestType: {
                encode(message: UpdateHumanPhoneRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanPhoneRequest;
                fromJSON(object: any): UpdateHumanPhoneRequest;
                toJSON(message: UpdateHumanPhoneRequest): unknown;
                create(base?: DeepPartial<UpdateHumanPhoneRequest>): UpdateHumanPhoneRequest;
                fromPartial(object: DeepPartial<UpdateHumanPhoneRequest>): UpdateHumanPhoneRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateHumanPhoneResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHumanPhoneResponse;
                fromJSON(object: any): UpdateHumanPhoneResponse;
                toJSON(message: UpdateHumanPhoneResponse): unknown;
                create(base?: DeepPartial<UpdateHumanPhoneResponse>): UpdateHumanPhoneResponse;
                fromPartial(object: DeepPartial<UpdateHumanPhoneResponse>): UpdateHumanPhoneResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanPhone: {
            readonly name: "RemoveHumanPhone";
            readonly requestType: {
                encode(message: RemoveHumanPhoneRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanPhoneRequest;
                fromJSON(object: any): RemoveHumanPhoneRequest;
                toJSON(message: RemoveHumanPhoneRequest): unknown;
                create(base?: DeepPartial<RemoveHumanPhoneRequest>): RemoveHumanPhoneRequest;
                fromPartial(object: DeepPartial<RemoveHumanPhoneRequest>): RemoveHumanPhoneRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveHumanPhoneResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanPhoneResponse;
                fromJSON(object: any): RemoveHumanPhoneResponse;
                toJSON(message: RemoveHumanPhoneResponse): unknown;
                create(base?: DeepPartial<RemoveHumanPhoneResponse>): RemoveHumanPhoneResponse;
                fromPartial(object: DeepPartial<RemoveHumanPhoneResponse>): RemoveHumanPhoneResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendHumanPhoneVerification: {
            readonly name: "ResendHumanPhoneVerification";
            readonly requestType: {
                encode(message: ResendHumanPhoneVerificationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanPhoneVerificationRequest;
                fromJSON(object: any): ResendHumanPhoneVerificationRequest;
                toJSON(message: ResendHumanPhoneVerificationRequest): unknown;
                create(base?: DeepPartial<ResendHumanPhoneVerificationRequest>): ResendHumanPhoneVerificationRequest;
                fromPartial(object: DeepPartial<ResendHumanPhoneVerificationRequest>): ResendHumanPhoneVerificationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResendHumanPhoneVerificationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendHumanPhoneVerificationResponse;
                fromJSON(object: any): ResendHumanPhoneVerificationResponse;
                toJSON(message: ResendHumanPhoneVerificationResponse): unknown;
                create(base?: DeepPartial<ResendHumanPhoneVerificationResponse>): ResendHumanPhoneVerificationResponse;
                fromPartial(object: DeepPartial<ResendHumanPhoneVerificationResponse>): ResendHumanPhoneVerificationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAvatar: {
            readonly name: "RemoveHumanAvatar";
            readonly requestType: {
                encode(message: RemoveHumanAvatarRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAvatarRequest;
                fromJSON(object: any): RemoveHumanAvatarRequest;
                toJSON(message: RemoveHumanAvatarRequest): unknown;
                create(base?: DeepPartial<RemoveHumanAvatarRequest>): RemoveHumanAvatarRequest;
                fromPartial(object: DeepPartial<RemoveHumanAvatarRequest>): RemoveHumanAvatarRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveHumanAvatarResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAvatarResponse;
                fromJSON(object: any): RemoveHumanAvatarResponse;
                toJSON(message: RemoveHumanAvatarResponse): unknown;
                create(base?: DeepPartial<RemoveHumanAvatarResponse>): RemoveHumanAvatarResponse;
                fromPartial(object: DeepPartial<RemoveHumanAvatarResponse>): RemoveHumanAvatarResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** deprecated: use SetHumanPassword */
        readonly setHumanInitialPassword: {
            readonly name: "SetHumanInitialPassword";
            readonly requestType: {
                encode(message: SetHumanInitialPasswordRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanInitialPasswordRequest;
                fromJSON(object: any): SetHumanInitialPasswordRequest;
                toJSON(message: SetHumanInitialPasswordRequest): unknown;
                create(base?: DeepPartial<SetHumanInitialPasswordRequest>): SetHumanInitialPasswordRequest;
                fromPartial(object: DeepPartial<SetHumanInitialPasswordRequest>): SetHumanInitialPasswordRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetHumanInitialPasswordResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanInitialPasswordResponse;
                fromJSON(object: any): SetHumanInitialPasswordResponse;
                toJSON(message: SetHumanInitialPasswordResponse): unknown;
                create(base?: DeepPartial<SetHumanInitialPasswordResponse>): SetHumanInitialPasswordResponse;
                fromPartial(object: DeepPartial<SetHumanInitialPasswordResponse>): SetHumanInitialPasswordResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setHumanPassword: {
            readonly name: "SetHumanPassword";
            readonly requestType: {
                encode(message: SetHumanPasswordRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanPasswordRequest;
                fromJSON(object: any): SetHumanPasswordRequest;
                toJSON(message: SetHumanPasswordRequest): unknown;
                create(base?: DeepPartial<SetHumanPasswordRequest>): SetHumanPasswordRequest;
                fromPartial(object: DeepPartial<SetHumanPasswordRequest>): SetHumanPasswordRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetHumanPasswordResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanPasswordResponse;
                fromJSON(object: any): SetHumanPasswordResponse;
                toJSON(message: SetHumanPasswordResponse): unknown;
                create(base?: DeepPartial<SetHumanPasswordResponse>): SetHumanPasswordResponse;
                fromPartial(object: DeepPartial<SetHumanPasswordResponse>): SetHumanPasswordResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly sendHumanResetPasswordNotification: {
            readonly name: "SendHumanResetPasswordNotification";
            readonly requestType: {
                encode(message: SendHumanResetPasswordNotificationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SendHumanResetPasswordNotificationRequest;
                fromJSON(object: any): SendHumanResetPasswordNotificationRequest;
                toJSON(message: SendHumanResetPasswordNotificationRequest): unknown;
                create(base?: DeepPartial<SendHumanResetPasswordNotificationRequest>): SendHumanResetPasswordNotificationRequest;
                fromPartial(object: DeepPartial<SendHumanResetPasswordNotificationRequest>): SendHumanResetPasswordNotificationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SendHumanResetPasswordNotificationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SendHumanResetPasswordNotificationResponse;
                fromJSON(object: any): SendHumanResetPasswordNotificationResponse;
                toJSON(message: SendHumanResetPasswordNotificationResponse): unknown;
                create(base?: DeepPartial<SendHumanResetPasswordNotificationResponse>): SendHumanResetPasswordNotificationResponse;
                fromPartial(object: DeepPartial<SendHumanResetPasswordNotificationResponse>): SendHumanResetPasswordNotificationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listHumanAuthFactors: {
            readonly name: "ListHumanAuthFactors";
            readonly requestType: {
                encode(message: ListHumanAuthFactorsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanAuthFactorsRequest;
                fromJSON(object: any): ListHumanAuthFactorsRequest;
                toJSON(message: ListHumanAuthFactorsRequest): unknown;
                create(base?: DeepPartial<ListHumanAuthFactorsRequest>): ListHumanAuthFactorsRequest;
                fromPartial(object: DeepPartial<ListHumanAuthFactorsRequest>): ListHumanAuthFactorsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListHumanAuthFactorsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanAuthFactorsResponse;
                fromJSON(object: any): ListHumanAuthFactorsResponse;
                toJSON(message: ListHumanAuthFactorsResponse): unknown;
                create(base?: DeepPartial<ListHumanAuthFactorsResponse>): ListHumanAuthFactorsResponse;
                fromPartial(object: DeepPartial<ListHumanAuthFactorsResponse>): ListHumanAuthFactorsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAuthFactorOTP: {
            readonly name: "RemoveHumanAuthFactorOTP";
            readonly requestType: {
                encode(message: RemoveHumanAuthFactorOTPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPRequest;
                fromJSON(object: any): RemoveHumanAuthFactorOTPRequest;
                toJSON(message: RemoveHumanAuthFactorOTPRequest): unknown;
                create(base?: DeepPartial<RemoveHumanAuthFactorOTPRequest>): RemoveHumanAuthFactorOTPRequest;
                fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPRequest>): RemoveHumanAuthFactorOTPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveHumanAuthFactorOTPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPResponse;
                fromJSON(object: any): RemoveHumanAuthFactorOTPResponse;
                toJSON(message: RemoveHumanAuthFactorOTPResponse): unknown;
                create(base?: DeepPartial<RemoveHumanAuthFactorOTPResponse>): RemoveHumanAuthFactorOTPResponse;
                fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPResponse>): RemoveHumanAuthFactorOTPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAuthFactorU2F: {
            readonly name: "RemoveHumanAuthFactorU2F";
            readonly requestType: {
                encode(message: RemoveHumanAuthFactorU2FRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorU2FRequest;
                fromJSON(object: any): RemoveHumanAuthFactorU2FRequest;
                toJSON(message: RemoveHumanAuthFactorU2FRequest): unknown;
                create(base?: DeepPartial<RemoveHumanAuthFactorU2FRequest>): RemoveHumanAuthFactorU2FRequest;
                fromPartial(object: DeepPartial<RemoveHumanAuthFactorU2FRequest>): RemoveHumanAuthFactorU2FRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveHumanAuthFactorU2FResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorU2FResponse;
                fromJSON(object: any): RemoveHumanAuthFactorU2FResponse;
                toJSON(message: RemoveHumanAuthFactorU2FResponse): unknown;
                create(base?: DeepPartial<RemoveHumanAuthFactorU2FResponse>): RemoveHumanAuthFactorU2FResponse;
                fromPartial(object: DeepPartial<RemoveHumanAuthFactorU2FResponse>): RemoveHumanAuthFactorU2FResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAuthFactorOTPSMS: {
            readonly name: "RemoveHumanAuthFactorOTPSMS";
            readonly requestType: {
                encode(message: RemoveHumanAuthFactorOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPSMSRequest;
                fromJSON(object: any): RemoveHumanAuthFactorOTPSMSRequest;
                toJSON(message: RemoveHumanAuthFactorOTPSMSRequest): unknown;
                create(base?: DeepPartial<RemoveHumanAuthFactorOTPSMSRequest>): RemoveHumanAuthFactorOTPSMSRequest;
                fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPSMSRequest>): RemoveHumanAuthFactorOTPSMSRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveHumanAuthFactorOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPSMSResponse;
                fromJSON(object: any): RemoveHumanAuthFactorOTPSMSResponse;
                toJSON(message: RemoveHumanAuthFactorOTPSMSResponse): unknown;
                create(base?: DeepPartial<RemoveHumanAuthFactorOTPSMSResponse>): RemoveHumanAuthFactorOTPSMSResponse;
                fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPSMSResponse>): RemoveHumanAuthFactorOTPSMSResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAuthFactorOTPEmail: {
            readonly name: "RemoveHumanAuthFactorOTPEmail";
            readonly requestType: {
                encode(message: RemoveHumanAuthFactorOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPEmailRequest;
                fromJSON(object: any): RemoveHumanAuthFactorOTPEmailRequest;
                toJSON(message: RemoveHumanAuthFactorOTPEmailRequest): unknown;
                create(base?: DeepPartial<RemoveHumanAuthFactorOTPEmailRequest>): RemoveHumanAuthFactorOTPEmailRequest;
                fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPEmailRequest>): RemoveHumanAuthFactorOTPEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveHumanAuthFactorOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanAuthFactorOTPEmailResponse;
                fromJSON(object: any): RemoveHumanAuthFactorOTPEmailResponse;
                toJSON(message: RemoveHumanAuthFactorOTPEmailResponse): unknown;
                create(base?: DeepPartial<RemoveHumanAuthFactorOTPEmailResponse>): RemoveHumanAuthFactorOTPEmailResponse;
                fromPartial(object: DeepPartial<RemoveHumanAuthFactorOTPEmailResponse>): RemoveHumanAuthFactorOTPEmailResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listHumanPasswordless: {
            readonly name: "ListHumanPasswordless";
            readonly requestType: {
                encode(message: ListHumanPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanPasswordlessRequest;
                fromJSON(object: any): ListHumanPasswordlessRequest;
                toJSON(message: ListHumanPasswordlessRequest): unknown;
                create(base?: DeepPartial<ListHumanPasswordlessRequest>): ListHumanPasswordlessRequest;
                fromPartial(object: DeepPartial<ListHumanPasswordlessRequest>): ListHumanPasswordlessRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListHumanPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanPasswordlessResponse;
                fromJSON(object: any): ListHumanPasswordlessResponse;
                toJSON(message: ListHumanPasswordlessResponse): unknown;
                create(base?: DeepPartial<ListHumanPasswordlessResponse>): ListHumanPasswordlessResponse;
                fromPartial(object: DeepPartial<ListHumanPasswordlessResponse>): ListHumanPasswordlessResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addPasswordlessRegistration: {
            readonly name: "AddPasswordlessRegistration";
            readonly requestType: {
                encode(message: AddPasswordlessRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddPasswordlessRegistrationRequest;
                fromJSON(object: any): AddPasswordlessRegistrationRequest;
                toJSON(message: AddPasswordlessRegistrationRequest): unknown;
                create(base?: DeepPartial<AddPasswordlessRegistrationRequest>): AddPasswordlessRegistrationRequest;
                fromPartial(object: DeepPartial<AddPasswordlessRegistrationRequest>): AddPasswordlessRegistrationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddPasswordlessRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddPasswordlessRegistrationResponse;
                fromJSON(object: any): AddPasswordlessRegistrationResponse;
                toJSON(message: AddPasswordlessRegistrationResponse): unknown;
                create(base?: DeepPartial<AddPasswordlessRegistrationResponse>): AddPasswordlessRegistrationResponse;
                fromPartial(object: DeepPartial<AddPasswordlessRegistrationResponse>): AddPasswordlessRegistrationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly sendPasswordlessRegistration: {
            readonly name: "SendPasswordlessRegistration";
            readonly requestType: {
                encode(message: SendPasswordlessRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SendPasswordlessRegistrationRequest;
                fromJSON(object: any): SendPasswordlessRegistrationRequest;
                toJSON(message: SendPasswordlessRegistrationRequest): unknown;
                create(base?: DeepPartial<SendPasswordlessRegistrationRequest>): SendPasswordlessRegistrationRequest;
                fromPartial(object: DeepPartial<SendPasswordlessRegistrationRequest>): SendPasswordlessRegistrationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SendPasswordlessRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SendPasswordlessRegistrationResponse;
                fromJSON(object: any): SendPasswordlessRegistrationResponse;
                toJSON(message: SendPasswordlessRegistrationResponse): unknown;
                create(base?: DeepPartial<SendPasswordlessRegistrationResponse>): SendPasswordlessRegistrationResponse;
                fromPartial(object: DeepPartial<SendPasswordlessRegistrationResponse>): SendPasswordlessRegistrationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanPasswordless: {
            readonly name: "RemoveHumanPasswordless";
            readonly requestType: {
                encode(message: RemoveHumanPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanPasswordlessRequest;
                fromJSON(object: any): RemoveHumanPasswordlessRequest;
                toJSON(message: RemoveHumanPasswordlessRequest): unknown;
                create(base?: DeepPartial<RemoveHumanPasswordlessRequest>): RemoveHumanPasswordlessRequest;
                fromPartial(object: DeepPartial<RemoveHumanPasswordlessRequest>): RemoveHumanPasswordlessRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveHumanPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanPasswordlessResponse;
                fromJSON(object: any): RemoveHumanPasswordlessResponse;
                toJSON(message: RemoveHumanPasswordlessResponse): unknown;
                create(base?: DeepPartial<RemoveHumanPasswordlessResponse>): RemoveHumanPasswordlessResponse;
                fromPartial(object: DeepPartial<RemoveHumanPasswordlessResponse>): RemoveHumanPasswordlessResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateMachine: {
            readonly name: "UpdateMachine";
            readonly requestType: {
                encode(message: UpdateMachineRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMachineRequest;
                fromJSON(object: any): UpdateMachineRequest;
                toJSON(message: UpdateMachineRequest): unknown;
                create(base?: DeepPartial<UpdateMachineRequest>): UpdateMachineRequest;
                fromPartial(object: DeepPartial<UpdateMachineRequest>): UpdateMachineRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateMachineResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMachineResponse;
                fromJSON(object: any): UpdateMachineResponse;
                toJSON(message: UpdateMachineResponse): unknown;
                create(base?: DeepPartial<UpdateMachineResponse>): UpdateMachineResponse;
                fromPartial(object: DeepPartial<UpdateMachineResponse>): UpdateMachineResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly generateMachineSecret: {
            readonly name: "GenerateMachineSecret";
            readonly requestType: {
                encode(message: GenerateMachineSecretRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GenerateMachineSecretRequest;
                fromJSON(object: any): GenerateMachineSecretRequest;
                toJSON(message: GenerateMachineSecretRequest): unknown;
                create(base?: DeepPartial<GenerateMachineSecretRequest>): GenerateMachineSecretRequest;
                fromPartial(object: DeepPartial<GenerateMachineSecretRequest>): GenerateMachineSecretRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GenerateMachineSecretResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GenerateMachineSecretResponse;
                fromJSON(object: any): GenerateMachineSecretResponse;
                toJSON(message: GenerateMachineSecretResponse): unknown;
                create(base?: DeepPartial<GenerateMachineSecretResponse>): GenerateMachineSecretResponse;
                fromPartial(object: DeepPartial<GenerateMachineSecretResponse>): GenerateMachineSecretResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMachineSecret: {
            readonly name: "RemoveMachineSecret";
            readonly requestType: {
                encode(message: RemoveMachineSecretRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMachineSecretRequest;
                fromJSON(object: any): RemoveMachineSecretRequest;
                toJSON(message: RemoveMachineSecretRequest): unknown;
                create(base?: DeepPartial<RemoveMachineSecretRequest>): RemoveMachineSecretRequest;
                fromPartial(object: DeepPartial<RemoveMachineSecretRequest>): RemoveMachineSecretRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMachineSecretResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMachineSecretResponse;
                fromJSON(object: any): RemoveMachineSecretResponse;
                toJSON(message: RemoveMachineSecretResponse): unknown;
                create(base?: DeepPartial<RemoveMachineSecretResponse>): RemoveMachineSecretResponse;
                fromPartial(object: DeepPartial<RemoveMachineSecretResponse>): RemoveMachineSecretResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMachineKeyByIDs: {
            readonly name: "GetMachineKeyByIDs";
            readonly requestType: {
                encode(message: GetMachineKeyByIDsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMachineKeyByIDsRequest;
                fromJSON(object: any): GetMachineKeyByIDsRequest;
                toJSON(message: GetMachineKeyByIDsRequest): unknown;
                create(base?: DeepPartial<GetMachineKeyByIDsRequest>): GetMachineKeyByIDsRequest;
                fromPartial(object: DeepPartial<GetMachineKeyByIDsRequest>): GetMachineKeyByIDsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMachineKeyByIDsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMachineKeyByIDsResponse;
                fromJSON(object: any): GetMachineKeyByIDsResponse;
                toJSON(message: GetMachineKeyByIDsResponse): unknown;
                create(base?: DeepPartial<GetMachineKeyByIDsResponse>): GetMachineKeyByIDsResponse;
                fromPartial(object: DeepPartial<GetMachineKeyByIDsResponse>): GetMachineKeyByIDsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMachineKeys: {
            readonly name: "ListMachineKeys";
            readonly requestType: {
                encode(message: ListMachineKeysRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMachineKeysRequest;
                fromJSON(object: any): ListMachineKeysRequest;
                toJSON(message: ListMachineKeysRequest): unknown;
                create(base?: DeepPartial<ListMachineKeysRequest>): ListMachineKeysRequest;
                fromPartial(object: DeepPartial<ListMachineKeysRequest>): ListMachineKeysRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMachineKeysResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMachineKeysResponse;
                fromJSON(object: any): ListMachineKeysResponse;
                toJSON(message: ListMachineKeysResponse): unknown;
                create(base?: DeepPartial<ListMachineKeysResponse>): ListMachineKeysResponse;
                fromPartial(object: DeepPartial<ListMachineKeysResponse>): ListMachineKeysResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMachineKey: {
            readonly name: "AddMachineKey";
            readonly requestType: {
                encode(message: AddMachineKeyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMachineKeyRequest;
                fromJSON(object: any): AddMachineKeyRequest;
                toJSON(message: AddMachineKeyRequest): unknown;
                create(base?: DeepPartial<AddMachineKeyRequest>): AddMachineKeyRequest;
                fromPartial(object: DeepPartial<AddMachineKeyRequest>): AddMachineKeyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddMachineKeyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMachineKeyResponse;
                fromJSON(object: any): AddMachineKeyResponse;
                toJSON(message: AddMachineKeyResponse): unknown;
                create(base?: DeepPartial<AddMachineKeyResponse>): AddMachineKeyResponse;
                fromPartial(object: DeepPartial<AddMachineKeyResponse>): AddMachineKeyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMachineKey: {
            readonly name: "RemoveMachineKey";
            readonly requestType: {
                encode(message: RemoveMachineKeyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMachineKeyRequest;
                fromJSON(object: any): RemoveMachineKeyRequest;
                toJSON(message: RemoveMachineKeyRequest): unknown;
                create(base?: DeepPartial<RemoveMachineKeyRequest>): RemoveMachineKeyRequest;
                fromPartial(object: DeepPartial<RemoveMachineKeyRequest>): RemoveMachineKeyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMachineKeyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMachineKeyResponse;
                fromJSON(object: any): RemoveMachineKeyResponse;
                toJSON(message: RemoveMachineKeyResponse): unknown;
                create(base?: DeepPartial<RemoveMachineKeyResponse>): RemoveMachineKeyResponse;
                fromPartial(object: DeepPartial<RemoveMachineKeyResponse>): RemoveMachineKeyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPersonalAccessTokenByIDs: {
            readonly name: "GetPersonalAccessTokenByIDs";
            readonly requestType: {
                encode(message: GetPersonalAccessTokenByIDsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPersonalAccessTokenByIDsRequest;
                fromJSON(object: any): GetPersonalAccessTokenByIDsRequest;
                toJSON(message: GetPersonalAccessTokenByIDsRequest): unknown;
                create(base?: DeepPartial<GetPersonalAccessTokenByIDsRequest>): GetPersonalAccessTokenByIDsRequest;
                fromPartial(object: DeepPartial<GetPersonalAccessTokenByIDsRequest>): GetPersonalAccessTokenByIDsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPersonalAccessTokenByIDsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPersonalAccessTokenByIDsResponse;
                fromJSON(object: any): GetPersonalAccessTokenByIDsResponse;
                toJSON(message: GetPersonalAccessTokenByIDsResponse): unknown;
                create(base?: DeepPartial<GetPersonalAccessTokenByIDsResponse>): GetPersonalAccessTokenByIDsResponse;
                fromPartial(object: DeepPartial<GetPersonalAccessTokenByIDsResponse>): GetPersonalAccessTokenByIDsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listPersonalAccessTokens: {
            readonly name: "ListPersonalAccessTokens";
            readonly requestType: {
                encode(message: ListPersonalAccessTokensRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListPersonalAccessTokensRequest;
                fromJSON(object: any): ListPersonalAccessTokensRequest;
                toJSON(message: ListPersonalAccessTokensRequest): unknown;
                create(base?: DeepPartial<ListPersonalAccessTokensRequest>): ListPersonalAccessTokensRequest;
                fromPartial(object: DeepPartial<ListPersonalAccessTokensRequest>): ListPersonalAccessTokensRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListPersonalAccessTokensResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListPersonalAccessTokensResponse;
                fromJSON(object: any): ListPersonalAccessTokensResponse;
                toJSON(message: ListPersonalAccessTokensResponse): unknown;
                create(base?: DeepPartial<ListPersonalAccessTokensResponse>): ListPersonalAccessTokensResponse;
                fromPartial(object: DeepPartial<ListPersonalAccessTokensResponse>): ListPersonalAccessTokensResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addPersonalAccessToken: {
            readonly name: "AddPersonalAccessToken";
            readonly requestType: {
                encode(message: AddPersonalAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddPersonalAccessTokenRequest;
                fromJSON(object: any): AddPersonalAccessTokenRequest;
                toJSON(message: AddPersonalAccessTokenRequest): unknown;
                create(base?: DeepPartial<AddPersonalAccessTokenRequest>): AddPersonalAccessTokenRequest;
                fromPartial(object: DeepPartial<AddPersonalAccessTokenRequest>): AddPersonalAccessTokenRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddPersonalAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddPersonalAccessTokenResponse;
                fromJSON(object: any): AddPersonalAccessTokenResponse;
                toJSON(message: AddPersonalAccessTokenResponse): unknown;
                create(base?: DeepPartial<AddPersonalAccessTokenResponse>): AddPersonalAccessTokenResponse;
                fromPartial(object: DeepPartial<AddPersonalAccessTokenResponse>): AddPersonalAccessTokenResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removePersonalAccessToken: {
            readonly name: "RemovePersonalAccessToken";
            readonly requestType: {
                encode(message: RemovePersonalAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemovePersonalAccessTokenRequest;
                fromJSON(object: any): RemovePersonalAccessTokenRequest;
                toJSON(message: RemovePersonalAccessTokenRequest): unknown;
                create(base?: DeepPartial<RemovePersonalAccessTokenRequest>): RemovePersonalAccessTokenRequest;
                fromPartial(object: DeepPartial<RemovePersonalAccessTokenRequest>): RemovePersonalAccessTokenRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemovePersonalAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemovePersonalAccessTokenResponse;
                fromJSON(object: any): RemovePersonalAccessTokenResponse;
                toJSON(message: RemovePersonalAccessTokenResponse): unknown;
                create(base?: DeepPartial<RemovePersonalAccessTokenResponse>): RemovePersonalAccessTokenResponse;
                fromPartial(object: DeepPartial<RemovePersonalAccessTokenResponse>): RemovePersonalAccessTokenResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listHumanLinkedIDPs: {
            readonly name: "ListHumanLinkedIDPs";
            readonly requestType: {
                encode(message: ListHumanLinkedIDPsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanLinkedIDPsRequest;
                fromJSON(object: any): ListHumanLinkedIDPsRequest;
                toJSON(message: ListHumanLinkedIDPsRequest): unknown;
                create(base?: DeepPartial<ListHumanLinkedIDPsRequest>): ListHumanLinkedIDPsRequest;
                fromPartial(object: DeepPartial<ListHumanLinkedIDPsRequest>): ListHumanLinkedIDPsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListHumanLinkedIDPsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListHumanLinkedIDPsResponse;
                fromJSON(object: any): ListHumanLinkedIDPsResponse;
                toJSON(message: ListHumanLinkedIDPsResponse): unknown;
                create(base?: DeepPartial<ListHumanLinkedIDPsResponse>): ListHumanLinkedIDPsResponse;
                fromPartial(object: DeepPartial<ListHumanLinkedIDPsResponse>): ListHumanLinkedIDPsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanLinkedIDP: {
            readonly name: "RemoveHumanLinkedIDP";
            readonly requestType: {
                encode(message: RemoveHumanLinkedIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanLinkedIDPRequest;
                fromJSON(object: any): RemoveHumanLinkedIDPRequest;
                toJSON(message: RemoveHumanLinkedIDPRequest): unknown;
                create(base?: DeepPartial<RemoveHumanLinkedIDPRequest>): RemoveHumanLinkedIDPRequest;
                fromPartial(object: DeepPartial<RemoveHumanLinkedIDPRequest>): RemoveHumanLinkedIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveHumanLinkedIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveHumanLinkedIDPResponse;
                fromJSON(object: any): RemoveHumanLinkedIDPResponse;
                toJSON(message: RemoveHumanLinkedIDPResponse): unknown;
                create(base?: DeepPartial<RemoveHumanLinkedIDPResponse>): RemoveHumanLinkedIDPResponse;
                fromPartial(object: DeepPartial<RemoveHumanLinkedIDPResponse>): RemoveHumanLinkedIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUserMemberships: {
            readonly name: "ListUserMemberships";
            readonly requestType: {
                encode(message: ListUserMembershipsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUserMembershipsRequest;
                fromJSON(object: any): ListUserMembershipsRequest;
                toJSON(message: ListUserMembershipsRequest): unknown;
                create(base?: DeepPartial<ListUserMembershipsRequest>): ListUserMembershipsRequest;
                fromPartial(object: DeepPartial<ListUserMembershipsRequest>): ListUserMembershipsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListUserMembershipsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUserMembershipsResponse;
                fromJSON(object: any): ListUserMembershipsResponse;
                toJSON(message: ListUserMembershipsResponse): unknown;
                create(base?: DeepPartial<ListUserMembershipsResponse>): ListUserMembershipsResponse;
                fromPartial(object: DeepPartial<ListUserMembershipsResponse>): ListUserMembershipsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyOrg: {
            readonly name: "GetMyOrg";
            readonly requestType: {
                encode(_: GetMyOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyOrgRequest;
                fromJSON(_: any): GetMyOrgRequest;
                toJSON(_: GetMyOrgRequest): unknown;
                create(base?: DeepPartial<GetMyOrgRequest>): GetMyOrgRequest;
                fromPartial(_: DeepPartial<GetMyOrgRequest>): GetMyOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyOrgResponse;
                fromJSON(object: any): GetMyOrgResponse;
                toJSON(message: GetMyOrgResponse): unknown;
                create(base?: DeepPartial<GetMyOrgResponse>): GetMyOrgResponse;
                fromPartial(object: DeepPartial<GetMyOrgResponse>): GetMyOrgResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrgByDomainGlobal: {
            readonly name: "GetOrgByDomainGlobal";
            readonly requestType: {
                encode(message: GetOrgByDomainGlobalRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgByDomainGlobalRequest;
                fromJSON(object: any): GetOrgByDomainGlobalRequest;
                toJSON(message: GetOrgByDomainGlobalRequest): unknown;
                create(base?: DeepPartial<GetOrgByDomainGlobalRequest>): GetOrgByDomainGlobalRequest;
                fromPartial(object: DeepPartial<GetOrgByDomainGlobalRequest>): GetOrgByDomainGlobalRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrgByDomainGlobalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgByDomainGlobalResponse;
                fromJSON(object: any): GetOrgByDomainGlobalResponse;
                toJSON(message: GetOrgByDomainGlobalResponse): unknown;
                create(base?: DeepPartial<GetOrgByDomainGlobalResponse>): GetOrgByDomainGlobalResponse;
                fromPartial(object: DeepPartial<GetOrgByDomainGlobalResponse>): GetOrgByDomainGlobalResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgChanges: {
            readonly name: "ListOrgChanges";
            readonly requestType: {
                encode(message: ListOrgChangesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgChangesRequest;
                fromJSON(object: any): ListOrgChangesRequest;
                toJSON(message: ListOrgChangesRequest): unknown;
                create(base?: DeepPartial<ListOrgChangesRequest>): ListOrgChangesRequest;
                fromPartial(object: DeepPartial<ListOrgChangesRequest>): ListOrgChangesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListOrgChangesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgChangesResponse;
                fromJSON(object: any): ListOrgChangesResponse;
                toJSON(message: ListOrgChangesResponse): unknown;
                create(base?: DeepPartial<ListOrgChangesResponse>): ListOrgChangesResponse;
                fromPartial(object: DeepPartial<ListOrgChangesResponse>): ListOrgChangesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrg: {
            readonly name: "AddOrg";
            readonly requestType: {
                encode(message: AddOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgRequest;
                fromJSON(object: any): AddOrgRequest;
                toJSON(message: AddOrgRequest): unknown;
                create(base?: DeepPartial<AddOrgRequest>): AddOrgRequest;
                fromPartial(object: DeepPartial<AddOrgRequest>): AddOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgResponse;
                fromJSON(object: any): AddOrgResponse;
                toJSON(message: AddOrgResponse): unknown;
                create(base?: DeepPartial<AddOrgResponse>): AddOrgResponse;
                fromPartial(object: DeepPartial<AddOrgResponse>): AddOrgResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrg: {
            readonly name: "UpdateOrg";
            readonly requestType: {
                encode(message: UpdateOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgRequest;
                fromJSON(object: any): UpdateOrgRequest;
                toJSON(message: UpdateOrgRequest): unknown;
                create(base?: DeepPartial<UpdateOrgRequest>): UpdateOrgRequest;
                fromPartial(object: DeepPartial<UpdateOrgRequest>): UpdateOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgResponse;
                fromJSON(object: any): UpdateOrgResponse;
                toJSON(message: UpdateOrgResponse): unknown;
                create(base?: DeepPartial<UpdateOrgResponse>): UpdateOrgResponse;
                fromPartial(object: DeepPartial<UpdateOrgResponse>): UpdateOrgResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateOrg: {
            readonly name: "DeactivateOrg";
            readonly requestType: {
                encode(_: DeactivateOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateOrgRequest;
                fromJSON(_: any): DeactivateOrgRequest;
                toJSON(_: DeactivateOrgRequest): unknown;
                create(base?: DeepPartial<DeactivateOrgRequest>): DeactivateOrgRequest;
                fromPartial(_: DeepPartial<DeactivateOrgRequest>): DeactivateOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateOrgResponse;
                fromJSON(object: any): DeactivateOrgResponse;
                toJSON(message: DeactivateOrgResponse): unknown;
                create(base?: DeepPartial<DeactivateOrgResponse>): DeactivateOrgResponse;
                fromPartial(object: DeepPartial<DeactivateOrgResponse>): DeactivateOrgResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateOrg: {
            readonly name: "ReactivateOrg";
            readonly requestType: {
                encode(_: ReactivateOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateOrgRequest;
                fromJSON(_: any): ReactivateOrgRequest;
                toJSON(_: ReactivateOrgRequest): unknown;
                create(base?: DeepPartial<ReactivateOrgRequest>): ReactivateOrgRequest;
                fromPartial(_: DeepPartial<ReactivateOrgRequest>): ReactivateOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ReactivateOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateOrgResponse;
                fromJSON(object: any): ReactivateOrgResponse;
                toJSON(message: ReactivateOrgResponse): unknown;
                create(base?: DeepPartial<ReactivateOrgResponse>): ReactivateOrgResponse;
                fromPartial(object: DeepPartial<ReactivateOrgResponse>): ReactivateOrgResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrg: {
            readonly name: "RemoveOrg";
            readonly requestType: {
                encode(_: RemoveOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgRequest;
                fromJSON(_: any): RemoveOrgRequest;
                toJSON(_: RemoveOrgRequest): unknown;
                create(base?: DeepPartial<RemoveOrgRequest>): RemoveOrgRequest;
                fromPartial(_: DeepPartial<RemoveOrgRequest>): RemoveOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgResponse;
                fromJSON(object: any): RemoveOrgResponse;
                toJSON(message: RemoveOrgResponse): unknown;
                create(base?: DeepPartial<RemoveOrgResponse>): RemoveOrgResponse;
                fromPartial(object: DeepPartial<RemoveOrgResponse>): RemoveOrgResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setOrgMetadata: {
            readonly name: "SetOrgMetadata";
            readonly requestType: {
                encode(message: SetOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetOrgMetadataRequest;
                fromJSON(object: any): SetOrgMetadataRequest;
                toJSON(message: SetOrgMetadataRequest): unknown;
                create(base?: DeepPartial<SetOrgMetadataRequest>): SetOrgMetadataRequest;
                fromPartial(object: DeepPartial<SetOrgMetadataRequest>): SetOrgMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetOrgMetadataResponse;
                fromJSON(object: any): SetOrgMetadataResponse;
                toJSON(message: SetOrgMetadataResponse): unknown;
                create(base?: DeepPartial<SetOrgMetadataResponse>): SetOrgMetadataResponse;
                fromPartial(object: DeepPartial<SetOrgMetadataResponse>): SetOrgMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkSetOrgMetadata: {
            readonly name: "BulkSetOrgMetadata";
            readonly requestType: {
                encode(message: BulkSetOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetOrgMetadataRequest;
                fromJSON(object: any): BulkSetOrgMetadataRequest;
                toJSON(message: BulkSetOrgMetadataRequest): unknown;
                create(base?: DeepPartial<BulkSetOrgMetadataRequest>): BulkSetOrgMetadataRequest;
                fromPartial(object: DeepPartial<BulkSetOrgMetadataRequest>): BulkSetOrgMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BulkSetOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetOrgMetadataResponse;
                fromJSON(object: any): BulkSetOrgMetadataResponse;
                toJSON(message: BulkSetOrgMetadataResponse): unknown;
                create(base?: DeepPartial<BulkSetOrgMetadataResponse>): BulkSetOrgMetadataResponse;
                fromPartial(object: DeepPartial<BulkSetOrgMetadataResponse>): BulkSetOrgMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgMetadata: {
            readonly name: "ListOrgMetadata";
            readonly requestType: {
                encode(message: ListOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMetadataRequest;
                fromJSON(object: any): ListOrgMetadataRequest;
                toJSON(message: ListOrgMetadataRequest): unknown;
                create(base?: DeepPartial<ListOrgMetadataRequest>): ListOrgMetadataRequest;
                fromPartial(object: DeepPartial<ListOrgMetadataRequest>): ListOrgMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMetadataResponse;
                fromJSON(object: any): ListOrgMetadataResponse;
                toJSON(message: ListOrgMetadataResponse): unknown;
                create(base?: DeepPartial<ListOrgMetadataResponse>): ListOrgMetadataResponse;
                fromPartial(object: DeepPartial<ListOrgMetadataResponse>): ListOrgMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrgMetadata: {
            readonly name: "GetOrgMetadata";
            readonly requestType: {
                encode(message: GetOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgMetadataRequest;
                fromJSON(object: any): GetOrgMetadataRequest;
                toJSON(message: GetOrgMetadataRequest): unknown;
                create(base?: DeepPartial<GetOrgMetadataRequest>): GetOrgMetadataRequest;
                fromPartial(object: DeepPartial<GetOrgMetadataRequest>): GetOrgMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgMetadataResponse;
                fromJSON(object: any): GetOrgMetadataResponse;
                toJSON(message: GetOrgMetadataResponse): unknown;
                create(base?: DeepPartial<GetOrgMetadataResponse>): GetOrgMetadataResponse;
                fromPartial(object: DeepPartial<GetOrgMetadataResponse>): GetOrgMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrgMetadata: {
            readonly name: "RemoveOrgMetadata";
            readonly requestType: {
                encode(message: RemoveOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgMetadataRequest;
                fromJSON(object: any): RemoveOrgMetadataRequest;
                toJSON(message: RemoveOrgMetadataRequest): unknown;
                create(base?: DeepPartial<RemoveOrgMetadataRequest>): RemoveOrgMetadataRequest;
                fromPartial(object: DeepPartial<RemoveOrgMetadataRequest>): RemoveOrgMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgMetadataResponse;
                fromJSON(object: any): RemoveOrgMetadataResponse;
                toJSON(message: RemoveOrgMetadataResponse): unknown;
                create(base?: DeepPartial<RemoveOrgMetadataResponse>): RemoveOrgMetadataResponse;
                fromPartial(object: DeepPartial<RemoveOrgMetadataResponse>): RemoveOrgMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkRemoveOrgMetadata: {
            readonly name: "BulkRemoveOrgMetadata";
            readonly requestType: {
                encode(message: BulkRemoveOrgMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveOrgMetadataRequest;
                fromJSON(object: any): BulkRemoveOrgMetadataRequest;
                toJSON(message: BulkRemoveOrgMetadataRequest): unknown;
                create(base?: DeepPartial<BulkRemoveOrgMetadataRequest>): BulkRemoveOrgMetadataRequest;
                fromPartial(object: DeepPartial<BulkRemoveOrgMetadataRequest>): BulkRemoveOrgMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BulkRemoveOrgMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveOrgMetadataResponse;
                fromJSON(object: any): BulkRemoveOrgMetadataResponse;
                toJSON(message: BulkRemoveOrgMetadataResponse): unknown;
                create(base?: DeepPartial<BulkRemoveOrgMetadataResponse>): BulkRemoveOrgMetadataResponse;
                fromPartial(object: DeepPartial<BulkRemoveOrgMetadataResponse>): BulkRemoveOrgMetadataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgDomains: {
            readonly name: "ListOrgDomains";
            readonly requestType: {
                encode(message: ListOrgDomainsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgDomainsRequest;
                fromJSON(object: any): ListOrgDomainsRequest;
                toJSON(message: ListOrgDomainsRequest): unknown;
                create(base?: DeepPartial<ListOrgDomainsRequest>): ListOrgDomainsRequest;
                fromPartial(object: DeepPartial<ListOrgDomainsRequest>): ListOrgDomainsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListOrgDomainsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgDomainsResponse;
                fromJSON(object: any): ListOrgDomainsResponse;
                toJSON(message: ListOrgDomainsResponse): unknown;
                create(base?: DeepPartial<ListOrgDomainsResponse>): ListOrgDomainsResponse;
                fromPartial(object: DeepPartial<ListOrgDomainsResponse>): ListOrgDomainsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrgDomain: {
            readonly name: "AddOrgDomain";
            readonly requestType: {
                encode(message: AddOrgDomainRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgDomainRequest;
                fromJSON(object: any): AddOrgDomainRequest;
                toJSON(message: AddOrgDomainRequest): unknown;
                create(base?: DeepPartial<AddOrgDomainRequest>): AddOrgDomainRequest;
                fromPartial(object: DeepPartial<AddOrgDomainRequest>): AddOrgDomainRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOrgDomainResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgDomainResponse;
                fromJSON(object: any): AddOrgDomainResponse;
                toJSON(message: AddOrgDomainResponse): unknown;
                create(base?: DeepPartial<AddOrgDomainResponse>): AddOrgDomainResponse;
                fromPartial(object: DeepPartial<AddOrgDomainResponse>): AddOrgDomainResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrgDomain: {
            readonly name: "RemoveOrgDomain";
            readonly requestType: {
                encode(message: RemoveOrgDomainRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgDomainRequest;
                fromJSON(object: any): RemoveOrgDomainRequest;
                toJSON(message: RemoveOrgDomainRequest): unknown;
                create(base?: DeepPartial<RemoveOrgDomainRequest>): RemoveOrgDomainRequest;
                fromPartial(object: DeepPartial<RemoveOrgDomainRequest>): RemoveOrgDomainRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveOrgDomainResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgDomainResponse;
                fromJSON(object: any): RemoveOrgDomainResponse;
                toJSON(message: RemoveOrgDomainResponse): unknown;
                create(base?: DeepPartial<RemoveOrgDomainResponse>): RemoveOrgDomainResponse;
                fromPartial(object: DeepPartial<RemoveOrgDomainResponse>): RemoveOrgDomainResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly generateOrgDomainValidation: {
            readonly name: "GenerateOrgDomainValidation";
            readonly requestType: {
                encode(message: GenerateOrgDomainValidationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GenerateOrgDomainValidationRequest;
                fromJSON(object: any): GenerateOrgDomainValidationRequest;
                toJSON(message: GenerateOrgDomainValidationRequest): unknown;
                create(base?: DeepPartial<GenerateOrgDomainValidationRequest>): GenerateOrgDomainValidationRequest;
                fromPartial(object: DeepPartial<GenerateOrgDomainValidationRequest>): GenerateOrgDomainValidationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GenerateOrgDomainValidationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GenerateOrgDomainValidationResponse;
                fromJSON(object: any): GenerateOrgDomainValidationResponse;
                toJSON(message: GenerateOrgDomainValidationResponse): unknown;
                create(base?: DeepPartial<GenerateOrgDomainValidationResponse>): GenerateOrgDomainValidationResponse;
                fromPartial(object: DeepPartial<GenerateOrgDomainValidationResponse>): GenerateOrgDomainValidationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly validateOrgDomain: {
            readonly name: "ValidateOrgDomain";
            readonly requestType: {
                encode(message: ValidateOrgDomainRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ValidateOrgDomainRequest;
                fromJSON(object: any): ValidateOrgDomainRequest;
                toJSON(message: ValidateOrgDomainRequest): unknown;
                create(base?: DeepPartial<ValidateOrgDomainRequest>): ValidateOrgDomainRequest;
                fromPartial(object: DeepPartial<ValidateOrgDomainRequest>): ValidateOrgDomainRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ValidateOrgDomainResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ValidateOrgDomainResponse;
                fromJSON(object: any): ValidateOrgDomainResponse;
                toJSON(message: ValidateOrgDomainResponse): unknown;
                create(base?: DeepPartial<ValidateOrgDomainResponse>): ValidateOrgDomainResponse;
                fromPartial(object: DeepPartial<ValidateOrgDomainResponse>): ValidateOrgDomainResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setPrimaryOrgDomain: {
            readonly name: "SetPrimaryOrgDomain";
            readonly requestType: {
                encode(message: SetPrimaryOrgDomainRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryOrgDomainRequest;
                fromJSON(object: any): SetPrimaryOrgDomainRequest;
                toJSON(message: SetPrimaryOrgDomainRequest): unknown;
                create(base?: DeepPartial<SetPrimaryOrgDomainRequest>): SetPrimaryOrgDomainRequest;
                fromPartial(object: DeepPartial<SetPrimaryOrgDomainRequest>): SetPrimaryOrgDomainRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetPrimaryOrgDomainResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryOrgDomainResponse;
                fromJSON(object: any): SetPrimaryOrgDomainResponse;
                toJSON(message: SetPrimaryOrgDomainResponse): unknown;
                create(base?: DeepPartial<SetPrimaryOrgDomainResponse>): SetPrimaryOrgDomainResponse;
                fromPartial(object: DeepPartial<SetPrimaryOrgDomainResponse>): SetPrimaryOrgDomainResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgMemberRoles: {
            readonly name: "ListOrgMemberRoles";
            readonly requestType: {
                encode(_: ListOrgMemberRolesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMemberRolesRequest;
                fromJSON(_: any): ListOrgMemberRolesRequest;
                toJSON(_: ListOrgMemberRolesRequest): unknown;
                create(base?: DeepPartial<ListOrgMemberRolesRequest>): ListOrgMemberRolesRequest;
                fromPartial(_: DeepPartial<ListOrgMemberRolesRequest>): ListOrgMemberRolesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListOrgMemberRolesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMemberRolesResponse;
                fromJSON(object: any): ListOrgMemberRolesResponse;
                toJSON(message: ListOrgMemberRolesResponse): unknown;
                create(base?: DeepPartial<ListOrgMemberRolesResponse>): ListOrgMemberRolesResponse;
                fromPartial(object: DeepPartial<ListOrgMemberRolesResponse>): ListOrgMemberRolesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgMembers: {
            readonly name: "ListOrgMembers";
            readonly requestType: {
                encode(message: ListOrgMembersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMembersRequest;
                fromJSON(object: any): ListOrgMembersRequest;
                toJSON(message: ListOrgMembersRequest): unknown;
                create(base?: DeepPartial<ListOrgMembersRequest>): ListOrgMembersRequest;
                fromPartial(object: DeepPartial<ListOrgMembersRequest>): ListOrgMembersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListOrgMembersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgMembersResponse;
                fromJSON(object: any): ListOrgMembersResponse;
                toJSON(message: ListOrgMembersResponse): unknown;
                create(base?: DeepPartial<ListOrgMembersResponse>): ListOrgMembersResponse;
                fromPartial(object: DeepPartial<ListOrgMembersResponse>): ListOrgMembersResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrgMember: {
            readonly name: "AddOrgMember";
            readonly requestType: {
                encode(message: AddOrgMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgMemberRequest;
                fromJSON(object: any): AddOrgMemberRequest;
                toJSON(message: AddOrgMemberRequest): unknown;
                create(base?: DeepPartial<AddOrgMemberRequest>): AddOrgMemberRequest;
                fromPartial(object: DeepPartial<AddOrgMemberRequest>): AddOrgMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOrgMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgMemberResponse;
                fromJSON(object: any): AddOrgMemberResponse;
                toJSON(message: AddOrgMemberResponse): unknown;
                create(base?: DeepPartial<AddOrgMemberResponse>): AddOrgMemberResponse;
                fromPartial(object: DeepPartial<AddOrgMemberResponse>): AddOrgMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrgMember: {
            readonly name: "UpdateOrgMember";
            readonly requestType: {
                encode(message: UpdateOrgMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgMemberRequest;
                fromJSON(object: any): UpdateOrgMemberRequest;
                toJSON(message: UpdateOrgMemberRequest): unknown;
                create(base?: DeepPartial<UpdateOrgMemberRequest>): UpdateOrgMemberRequest;
                fromPartial(object: DeepPartial<UpdateOrgMemberRequest>): UpdateOrgMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateOrgMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgMemberResponse;
                fromJSON(object: any): UpdateOrgMemberResponse;
                toJSON(message: UpdateOrgMemberResponse): unknown;
                create(base?: DeepPartial<UpdateOrgMemberResponse>): UpdateOrgMemberResponse;
                fromPartial(object: DeepPartial<UpdateOrgMemberResponse>): UpdateOrgMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrgMember: {
            readonly name: "RemoveOrgMember";
            readonly requestType: {
                encode(message: RemoveOrgMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgMemberRequest;
                fromJSON(object: any): RemoveOrgMemberRequest;
                toJSON(message: RemoveOrgMemberRequest): unknown;
                create(base?: DeepPartial<RemoveOrgMemberRequest>): RemoveOrgMemberRequest;
                fromPartial(object: DeepPartial<RemoveOrgMemberRequest>): RemoveOrgMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveOrgMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgMemberResponse;
                fromJSON(object: any): RemoveOrgMemberResponse;
                toJSON(message: RemoveOrgMemberResponse): unknown;
                create(base?: DeepPartial<RemoveOrgMemberResponse>): RemoveOrgMemberResponse;
                fromPartial(object: DeepPartial<RemoveOrgMemberResponse>): RemoveOrgMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getProjectByID: {
            readonly name: "GetProjectByID";
            readonly requestType: {
                encode(message: GetProjectByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectByIDRequest;
                fromJSON(object: any): GetProjectByIDRequest;
                toJSON(message: GetProjectByIDRequest): unknown;
                create(base?: DeepPartial<GetProjectByIDRequest>): GetProjectByIDRequest;
                fromPartial(object: DeepPartial<GetProjectByIDRequest>): GetProjectByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetProjectByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectByIDResponse;
                fromJSON(object: any): GetProjectByIDResponse;
                toJSON(message: GetProjectByIDResponse): unknown;
                create(base?: DeepPartial<GetProjectByIDResponse>): GetProjectByIDResponse;
                fromPartial(object: DeepPartial<GetProjectByIDResponse>): GetProjectByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getGrantedProjectByID: {
            readonly name: "GetGrantedProjectByID";
            readonly requestType: {
                encode(message: GetGrantedProjectByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetGrantedProjectByIDRequest;
                fromJSON(object: any): GetGrantedProjectByIDRequest;
                toJSON(message: GetGrantedProjectByIDRequest): unknown;
                create(base?: DeepPartial<GetGrantedProjectByIDRequest>): GetGrantedProjectByIDRequest;
                fromPartial(object: DeepPartial<GetGrantedProjectByIDRequest>): GetGrantedProjectByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetGrantedProjectByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetGrantedProjectByIDResponse;
                fromJSON(object: any): GetGrantedProjectByIDResponse;
                toJSON(message: GetGrantedProjectByIDResponse): unknown;
                create(base?: DeepPartial<GetGrantedProjectByIDResponse>): GetGrantedProjectByIDResponse;
                fromPartial(object: DeepPartial<GetGrantedProjectByIDResponse>): GetGrantedProjectByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjects: {
            readonly name: "ListProjects";
            readonly requestType: {
                encode(message: ListProjectsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectsRequest;
                fromJSON(object: any): ListProjectsRequest;
                toJSON(message: ListProjectsRequest): unknown;
                create(base?: DeepPartial<ListProjectsRequest>): ListProjectsRequest;
                fromPartial(object: DeepPartial<ListProjectsRequest>): ListProjectsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProjectsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectsResponse;
                fromJSON(object: any): ListProjectsResponse;
                toJSON(message: ListProjectsResponse): unknown;
                create(base?: DeepPartial<ListProjectsResponse>): ListProjectsResponse;
                fromPartial(object: DeepPartial<ListProjectsResponse>): ListProjectsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listGrantedProjects: {
            readonly name: "ListGrantedProjects";
            readonly requestType: {
                encode(message: ListGrantedProjectsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListGrantedProjectsRequest;
                fromJSON(object: any): ListGrantedProjectsRequest;
                toJSON(message: ListGrantedProjectsRequest): unknown;
                create(base?: DeepPartial<ListGrantedProjectsRequest>): ListGrantedProjectsRequest;
                fromPartial(object: DeepPartial<ListGrantedProjectsRequest>): ListGrantedProjectsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListGrantedProjectsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListGrantedProjectsResponse;
                fromJSON(object: any): ListGrantedProjectsResponse;
                toJSON(message: ListGrantedProjectsResponse): unknown;
                create(base?: DeepPartial<ListGrantedProjectsResponse>): ListGrantedProjectsResponse;
                fromPartial(object: DeepPartial<ListGrantedProjectsResponse>): ListGrantedProjectsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listGrantedProjectRoles: {
            readonly name: "ListGrantedProjectRoles";
            readonly requestType: {
                encode(message: ListGrantedProjectRolesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListGrantedProjectRolesRequest;
                fromJSON(object: any): ListGrantedProjectRolesRequest;
                toJSON(message: ListGrantedProjectRolesRequest): unknown;
                create(base?: DeepPartial<ListGrantedProjectRolesRequest>): ListGrantedProjectRolesRequest;
                fromPartial(object: DeepPartial<ListGrantedProjectRolesRequest>): ListGrantedProjectRolesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListGrantedProjectRolesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListGrantedProjectRolesResponse;
                fromJSON(object: any): ListGrantedProjectRolesResponse;
                toJSON(message: ListGrantedProjectRolesResponse): unknown;
                create(base?: DeepPartial<ListGrantedProjectRolesResponse>): ListGrantedProjectRolesResponse;
                fromPartial(object: DeepPartial<ListGrantedProjectRolesResponse>): ListGrantedProjectRolesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectChanges: {
            readonly name: "ListProjectChanges";
            readonly requestType: {
                encode(message: ListProjectChangesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectChangesRequest;
                fromJSON(object: any): ListProjectChangesRequest;
                toJSON(message: ListProjectChangesRequest): unknown;
                create(base?: DeepPartial<ListProjectChangesRequest>): ListProjectChangesRequest;
                fromPartial(object: DeepPartial<ListProjectChangesRequest>): ListProjectChangesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProjectChangesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectChangesResponse;
                fromJSON(object: any): ListProjectChangesResponse;
                toJSON(message: ListProjectChangesResponse): unknown;
                create(base?: DeepPartial<ListProjectChangesResponse>): ListProjectChangesResponse;
                fromPartial(object: DeepPartial<ListProjectChangesResponse>): ListProjectChangesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProject: {
            readonly name: "AddProject";
            readonly requestType: {
                encode(message: AddProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectRequest;
                fromJSON(object: any): AddProjectRequest;
                toJSON(message: AddProjectRequest): unknown;
                create(base?: DeepPartial<AddProjectRequest>): AddProjectRequest;
                fromPartial(object: DeepPartial<AddProjectRequest>): AddProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectResponse;
                fromJSON(object: any): AddProjectResponse;
                toJSON(message: AddProjectResponse): unknown;
                create(base?: DeepPartial<AddProjectResponse>): AddProjectResponse;
                fromPartial(object: DeepPartial<AddProjectResponse>): AddProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProject: {
            readonly name: "UpdateProject";
            readonly requestType: {
                encode(message: UpdateProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRequest;
                fromJSON(object: any): UpdateProjectRequest;
                toJSON(message: UpdateProjectRequest): unknown;
                create(base?: DeepPartial<UpdateProjectRequest>): UpdateProjectRequest;
                fromPartial(object: DeepPartial<UpdateProjectRequest>): UpdateProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectResponse;
                fromJSON(object: any): UpdateProjectResponse;
                toJSON(message: UpdateProjectResponse): unknown;
                create(base?: DeepPartial<UpdateProjectResponse>): UpdateProjectResponse;
                fromPartial(object: DeepPartial<UpdateProjectResponse>): UpdateProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateProject: {
            readonly name: "DeactivateProject";
            readonly requestType: {
                encode(message: DeactivateProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProjectRequest;
                fromJSON(object: any): DeactivateProjectRequest;
                toJSON(message: DeactivateProjectRequest): unknown;
                create(base?: DeepPartial<DeactivateProjectRequest>): DeactivateProjectRequest;
                fromPartial(object: DeepPartial<DeactivateProjectRequest>): DeactivateProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProjectResponse;
                fromJSON(object: any): DeactivateProjectResponse;
                toJSON(message: DeactivateProjectResponse): unknown;
                create(base?: DeepPartial<DeactivateProjectResponse>): DeactivateProjectResponse;
                fromPartial(object: DeepPartial<DeactivateProjectResponse>): DeactivateProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateProject: {
            readonly name: "ReactivateProject";
            readonly requestType: {
                encode(message: ReactivateProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateProjectRequest;
                fromJSON(object: any): ReactivateProjectRequest;
                toJSON(message: ReactivateProjectRequest): unknown;
                create(base?: DeepPartial<ReactivateProjectRequest>): ReactivateProjectRequest;
                fromPartial(object: DeepPartial<ReactivateProjectRequest>): ReactivateProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ReactivateProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateProjectResponse;
                fromJSON(object: any): ReactivateProjectResponse;
                toJSON(message: ReactivateProjectResponse): unknown;
                create(base?: DeepPartial<ReactivateProjectResponse>): ReactivateProjectResponse;
                fromPartial(object: DeepPartial<ReactivateProjectResponse>): ReactivateProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProject: {
            readonly name: "RemoveProject";
            readonly requestType: {
                encode(message: RemoveProjectRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectRequest;
                fromJSON(object: any): RemoveProjectRequest;
                toJSON(message: RemoveProjectRequest): unknown;
                create(base?: DeepPartial<RemoveProjectRequest>): RemoveProjectRequest;
                fromPartial(object: DeepPartial<RemoveProjectRequest>): RemoveProjectRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveProjectResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectResponse;
                fromJSON(object: any): RemoveProjectResponse;
                toJSON(message: RemoveProjectResponse): unknown;
                create(base?: DeepPartial<RemoveProjectResponse>): RemoveProjectResponse;
                fromPartial(object: DeepPartial<RemoveProjectResponse>): RemoveProjectResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectRoles: {
            readonly name: "ListProjectRoles";
            readonly requestType: {
                encode(message: ListProjectRolesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectRolesRequest;
                fromJSON(object: any): ListProjectRolesRequest;
                toJSON(message: ListProjectRolesRequest): unknown;
                create(base?: DeepPartial<ListProjectRolesRequest>): ListProjectRolesRequest;
                fromPartial(object: DeepPartial<ListProjectRolesRequest>): ListProjectRolesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProjectRolesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectRolesResponse;
                fromJSON(object: any): ListProjectRolesResponse;
                toJSON(message: ListProjectRolesResponse): unknown;
                create(base?: DeepPartial<ListProjectRolesResponse>): ListProjectRolesResponse;
                fromPartial(object: DeepPartial<ListProjectRolesResponse>): ListProjectRolesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProjectRole: {
            readonly name: "AddProjectRole";
            readonly requestType: {
                encode(message: AddProjectRoleRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectRoleRequest;
                fromJSON(object: any): AddProjectRoleRequest;
                toJSON(message: AddProjectRoleRequest): unknown;
                create(base?: DeepPartial<AddProjectRoleRequest>): AddProjectRoleRequest;
                fromPartial(object: DeepPartial<AddProjectRoleRequest>): AddProjectRoleRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddProjectRoleResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectRoleResponse;
                fromJSON(object: any): AddProjectRoleResponse;
                toJSON(message: AddProjectRoleResponse): unknown;
                create(base?: DeepPartial<AddProjectRoleResponse>): AddProjectRoleResponse;
                fromPartial(object: DeepPartial<AddProjectRoleResponse>): AddProjectRoleResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkAddProjectRoles: {
            readonly name: "BulkAddProjectRoles";
            readonly requestType: {
                encode(message: BulkAddProjectRolesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkAddProjectRolesRequest;
                fromJSON(object: any): BulkAddProjectRolesRequest;
                toJSON(message: BulkAddProjectRolesRequest): unknown;
                create(base?: DeepPartial<BulkAddProjectRolesRequest>): BulkAddProjectRolesRequest;
                fromPartial(object: DeepPartial<BulkAddProjectRolesRequest>): BulkAddProjectRolesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BulkAddProjectRolesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkAddProjectRolesResponse;
                fromJSON(object: any): BulkAddProjectRolesResponse;
                toJSON(message: BulkAddProjectRolesResponse): unknown;
                create(base?: DeepPartial<BulkAddProjectRolesResponse>): BulkAddProjectRolesResponse;
                fromPartial(object: DeepPartial<BulkAddProjectRolesResponse>): BulkAddProjectRolesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProjectRole: {
            readonly name: "UpdateProjectRole";
            readonly requestType: {
                encode(message: UpdateProjectRoleRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRoleRequest;
                fromJSON(object: any): UpdateProjectRoleRequest;
                toJSON(message: UpdateProjectRoleRequest): unknown;
                create(base?: DeepPartial<UpdateProjectRoleRequest>): UpdateProjectRoleRequest;
                fromPartial(object: DeepPartial<UpdateProjectRoleRequest>): UpdateProjectRoleRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateProjectRoleResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectRoleResponse;
                fromJSON(object: any): UpdateProjectRoleResponse;
                toJSON(message: UpdateProjectRoleResponse): unknown;
                create(base?: DeepPartial<UpdateProjectRoleResponse>): UpdateProjectRoleResponse;
                fromPartial(object: DeepPartial<UpdateProjectRoleResponse>): UpdateProjectRoleResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProjectRole: {
            readonly name: "RemoveProjectRole";
            readonly requestType: {
                encode(message: RemoveProjectRoleRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectRoleRequest;
                fromJSON(object: any): RemoveProjectRoleRequest;
                toJSON(message: RemoveProjectRoleRequest): unknown;
                create(base?: DeepPartial<RemoveProjectRoleRequest>): RemoveProjectRoleRequest;
                fromPartial(object: DeepPartial<RemoveProjectRoleRequest>): RemoveProjectRoleRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveProjectRoleResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectRoleResponse;
                fromJSON(object: any): RemoveProjectRoleResponse;
                toJSON(message: RemoveProjectRoleResponse): unknown;
                create(base?: DeepPartial<RemoveProjectRoleResponse>): RemoveProjectRoleResponse;
                fromPartial(object: DeepPartial<RemoveProjectRoleResponse>): RemoveProjectRoleResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectMemberRoles: {
            readonly name: "ListProjectMemberRoles";
            readonly requestType: {
                encode(_: ListProjectMemberRolesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectMemberRolesRequest;
                fromJSON(_: any): ListProjectMemberRolesRequest;
                toJSON(_: ListProjectMemberRolesRequest): unknown;
                create(base?: DeepPartial<ListProjectMemberRolesRequest>): ListProjectMemberRolesRequest;
                fromPartial(_: DeepPartial<ListProjectMemberRolesRequest>): ListProjectMemberRolesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProjectMemberRolesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectMemberRolesResponse;
                fromJSON(object: any): ListProjectMemberRolesResponse;
                toJSON(message: ListProjectMemberRolesResponse): unknown;
                create(base?: DeepPartial<ListProjectMemberRolesResponse>): ListProjectMemberRolesResponse;
                fromPartial(object: DeepPartial<ListProjectMemberRolesResponse>): ListProjectMemberRolesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectMembers: {
            readonly name: "ListProjectMembers";
            readonly requestType: {
                encode(message: ListProjectMembersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectMembersRequest;
                fromJSON(object: any): ListProjectMembersRequest;
                toJSON(message: ListProjectMembersRequest): unknown;
                create(base?: DeepPartial<ListProjectMembersRequest>): ListProjectMembersRequest;
                fromPartial(object: DeepPartial<ListProjectMembersRequest>): ListProjectMembersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProjectMembersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectMembersResponse;
                fromJSON(object: any): ListProjectMembersResponse;
                toJSON(message: ListProjectMembersResponse): unknown;
                create(base?: DeepPartial<ListProjectMembersResponse>): ListProjectMembersResponse;
                fromPartial(object: DeepPartial<ListProjectMembersResponse>): ListProjectMembersResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProjectMember: {
            readonly name: "AddProjectMember";
            readonly requestType: {
                encode(message: AddProjectMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectMemberRequest;
                fromJSON(object: any): AddProjectMemberRequest;
                toJSON(message: AddProjectMemberRequest): unknown;
                create(base?: DeepPartial<AddProjectMemberRequest>): AddProjectMemberRequest;
                fromPartial(object: DeepPartial<AddProjectMemberRequest>): AddProjectMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddProjectMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectMemberResponse;
                fromJSON(object: any): AddProjectMemberResponse;
                toJSON(message: AddProjectMemberResponse): unknown;
                create(base?: DeepPartial<AddProjectMemberResponse>): AddProjectMemberResponse;
                fromPartial(object: DeepPartial<AddProjectMemberResponse>): AddProjectMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProjectMember: {
            readonly name: "UpdateProjectMember";
            readonly requestType: {
                encode(message: UpdateProjectMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectMemberRequest;
                fromJSON(object: any): UpdateProjectMemberRequest;
                toJSON(message: UpdateProjectMemberRequest): unknown;
                create(base?: DeepPartial<UpdateProjectMemberRequest>): UpdateProjectMemberRequest;
                fromPartial(object: DeepPartial<UpdateProjectMemberRequest>): UpdateProjectMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateProjectMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectMemberResponse;
                fromJSON(object: any): UpdateProjectMemberResponse;
                toJSON(message: UpdateProjectMemberResponse): unknown;
                create(base?: DeepPartial<UpdateProjectMemberResponse>): UpdateProjectMemberResponse;
                fromPartial(object: DeepPartial<UpdateProjectMemberResponse>): UpdateProjectMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProjectMember: {
            readonly name: "RemoveProjectMember";
            readonly requestType: {
                encode(message: RemoveProjectMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectMemberRequest;
                fromJSON(object: any): RemoveProjectMemberRequest;
                toJSON(message: RemoveProjectMemberRequest): unknown;
                create(base?: DeepPartial<RemoveProjectMemberRequest>): RemoveProjectMemberRequest;
                fromPartial(object: DeepPartial<RemoveProjectMemberRequest>): RemoveProjectMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveProjectMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectMemberResponse;
                fromJSON(object: any): RemoveProjectMemberResponse;
                toJSON(message: RemoveProjectMemberResponse): unknown;
                create(base?: DeepPartial<RemoveProjectMemberResponse>): RemoveProjectMemberResponse;
                fromPartial(object: DeepPartial<RemoveProjectMemberResponse>): RemoveProjectMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getAppByID: {
            readonly name: "GetAppByID";
            readonly requestType: {
                encode(message: GetAppByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAppByIDRequest;
                fromJSON(object: any): GetAppByIDRequest;
                toJSON(message: GetAppByIDRequest): unknown;
                create(base?: DeepPartial<GetAppByIDRequest>): GetAppByIDRequest;
                fromPartial(object: DeepPartial<GetAppByIDRequest>): GetAppByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetAppByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAppByIDResponse;
                fromJSON(object: any): GetAppByIDResponse;
                toJSON(message: GetAppByIDResponse): unknown;
                create(base?: DeepPartial<GetAppByIDResponse>): GetAppByIDResponse;
                fromPartial(object: DeepPartial<GetAppByIDResponse>): GetAppByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listApps: {
            readonly name: "ListApps";
            readonly requestType: {
                encode(message: ListAppsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAppsRequest;
                fromJSON(object: any): ListAppsRequest;
                toJSON(message: ListAppsRequest): unknown;
                create(base?: DeepPartial<ListAppsRequest>): ListAppsRequest;
                fromPartial(object: DeepPartial<ListAppsRequest>): ListAppsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListAppsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAppsResponse;
                fromJSON(object: any): ListAppsResponse;
                toJSON(message: ListAppsResponse): unknown;
                create(base?: DeepPartial<ListAppsResponse>): ListAppsResponse;
                fromPartial(object: DeepPartial<ListAppsResponse>): ListAppsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAppChanges: {
            readonly name: "ListAppChanges";
            readonly requestType: {
                encode(message: ListAppChangesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAppChangesRequest;
                fromJSON(object: any): ListAppChangesRequest;
                toJSON(message: ListAppChangesRequest): unknown;
                create(base?: DeepPartial<ListAppChangesRequest>): ListAppChangesRequest;
                fromPartial(object: DeepPartial<ListAppChangesRequest>): ListAppChangesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListAppChangesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAppChangesResponse;
                fromJSON(object: any): ListAppChangesResponse;
                toJSON(message: ListAppChangesResponse): unknown;
                create(base?: DeepPartial<ListAppChangesResponse>): ListAppChangesResponse;
                fromPartial(object: DeepPartial<ListAppChangesResponse>): ListAppChangesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOIDCApp: {
            readonly name: "AddOIDCApp";
            readonly requestType: {
                encode(message: AddOIDCAppRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCAppRequest;
                fromJSON(object: any): AddOIDCAppRequest;
                toJSON(message: AddOIDCAppRequest): unknown;
                create(base?: DeepPartial<AddOIDCAppRequest>): AddOIDCAppRequest;
                fromPartial(object: DeepPartial<AddOIDCAppRequest>): AddOIDCAppRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOIDCAppResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCAppResponse;
                fromJSON(object: any): AddOIDCAppResponse;
                toJSON(message: AddOIDCAppResponse): unknown;
                create(base?: DeepPartial<AddOIDCAppResponse>): AddOIDCAppResponse;
                fromPartial(object: DeepPartial<AddOIDCAppResponse>): AddOIDCAppResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSAMLApp: {
            readonly name: "AddSAMLApp";
            readonly requestType: {
                encode(message: AddSAMLAppRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSAMLAppRequest;
                fromJSON(object: any): AddSAMLAppRequest;
                toJSON(message: AddSAMLAppRequest): unknown;
                create(base?: DeepPartial<AddSAMLAppRequest>): AddSAMLAppRequest;
                fromPartial(object: DeepPartial<AddSAMLAppRequest>): AddSAMLAppRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddSAMLAppResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSAMLAppResponse;
                fromJSON(object: any): AddSAMLAppResponse;
                toJSON(message: AddSAMLAppResponse): unknown;
                create(base?: DeepPartial<AddSAMLAppResponse>): AddSAMLAppResponse;
                fromPartial(object: DeepPartial<AddSAMLAppResponse>): AddSAMLAppResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addAPIApp: {
            readonly name: "AddAPIApp";
            readonly requestType: {
                encode(message: AddAPIAppRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddAPIAppRequest;
                fromJSON(object: any): AddAPIAppRequest;
                toJSON(message: AddAPIAppRequest): unknown;
                create(base?: DeepPartial<AddAPIAppRequest>): AddAPIAppRequest;
                fromPartial(object: DeepPartial<AddAPIAppRequest>): AddAPIAppRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddAPIAppResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddAPIAppResponse;
                fromJSON(object: any): AddAPIAppResponse;
                toJSON(message: AddAPIAppResponse): unknown;
                create(base?: DeepPartial<AddAPIAppResponse>): AddAPIAppResponse;
                fromPartial(object: DeepPartial<AddAPIAppResponse>): AddAPIAppResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Changes application */
        readonly updateApp: {
            readonly name: "UpdateApp";
            readonly requestType: {
                encode(message: UpdateAppRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAppRequest;
                fromJSON(object: any): UpdateAppRequest;
                toJSON(message: UpdateAppRequest): unknown;
                create(base?: DeepPartial<UpdateAppRequest>): UpdateAppRequest;
                fromPartial(object: DeepPartial<UpdateAppRequest>): UpdateAppRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateAppResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAppResponse;
                fromJSON(object: any): UpdateAppResponse;
                toJSON(message: UpdateAppResponse): unknown;
                create(base?: DeepPartial<UpdateAppResponse>): UpdateAppResponse;
                fromPartial(object: DeepPartial<UpdateAppResponse>): UpdateAppResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOIDCAppConfig: {
            readonly name: "UpdateOIDCAppConfig";
            readonly requestType: {
                encode(message: UpdateOIDCAppConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOIDCAppConfigRequest;
                fromJSON(object: any): UpdateOIDCAppConfigRequest;
                toJSON(message: UpdateOIDCAppConfigRequest): unknown;
                create(base?: DeepPartial<UpdateOIDCAppConfigRequest>): UpdateOIDCAppConfigRequest;
                fromPartial(object: DeepPartial<UpdateOIDCAppConfigRequest>): UpdateOIDCAppConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateOIDCAppConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOIDCAppConfigResponse;
                fromJSON(object: any): UpdateOIDCAppConfigResponse;
                toJSON(message: UpdateOIDCAppConfigResponse): unknown;
                create(base?: DeepPartial<UpdateOIDCAppConfigResponse>): UpdateOIDCAppConfigResponse;
                fromPartial(object: DeepPartial<UpdateOIDCAppConfigResponse>): UpdateOIDCAppConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSAMLAppConfig: {
            readonly name: "UpdateSAMLAppConfig";
            readonly requestType: {
                encode(message: UpdateSAMLAppConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSAMLAppConfigRequest;
                fromJSON(object: any): UpdateSAMLAppConfigRequest;
                toJSON(message: UpdateSAMLAppConfigRequest): unknown;
                create(base?: DeepPartial<UpdateSAMLAppConfigRequest>): UpdateSAMLAppConfigRequest;
                fromPartial(object: DeepPartial<UpdateSAMLAppConfigRequest>): UpdateSAMLAppConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateSAMLAppConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSAMLAppConfigResponse;
                fromJSON(object: any): UpdateSAMLAppConfigResponse;
                toJSON(message: UpdateSAMLAppConfigResponse): unknown;
                create(base?: DeepPartial<UpdateSAMLAppConfigResponse>): UpdateSAMLAppConfigResponse;
                fromPartial(object: DeepPartial<UpdateSAMLAppConfigResponse>): UpdateSAMLAppConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateAPIAppConfig: {
            readonly name: "UpdateAPIAppConfig";
            readonly requestType: {
                encode(message: UpdateAPIAppConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAPIAppConfigRequest;
                fromJSON(object: any): UpdateAPIAppConfigRequest;
                toJSON(message: UpdateAPIAppConfigRequest): unknown;
                create(base?: DeepPartial<UpdateAPIAppConfigRequest>): UpdateAPIAppConfigRequest;
                fromPartial(object: DeepPartial<UpdateAPIAppConfigRequest>): UpdateAPIAppConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateAPIAppConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAPIAppConfigResponse;
                fromJSON(object: any): UpdateAPIAppConfigResponse;
                toJSON(message: UpdateAPIAppConfigResponse): unknown;
                create(base?: DeepPartial<UpdateAPIAppConfigResponse>): UpdateAPIAppConfigResponse;
                fromPartial(object: DeepPartial<UpdateAPIAppConfigResponse>): UpdateAPIAppConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateApp: {
            readonly name: "DeactivateApp";
            readonly requestType: {
                encode(message: DeactivateAppRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateAppRequest;
                fromJSON(object: any): DeactivateAppRequest;
                toJSON(message: DeactivateAppRequest): unknown;
                create(base?: DeepPartial<DeactivateAppRequest>): DeactivateAppRequest;
                fromPartial(object: DeepPartial<DeactivateAppRequest>): DeactivateAppRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateAppResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateAppResponse;
                fromJSON(object: any): DeactivateAppResponse;
                toJSON(message: DeactivateAppResponse): unknown;
                create(base?: DeepPartial<DeactivateAppResponse>): DeactivateAppResponse;
                fromPartial(object: DeepPartial<DeactivateAppResponse>): DeactivateAppResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateApp: {
            readonly name: "ReactivateApp";
            readonly requestType: {
                encode(message: ReactivateAppRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateAppRequest;
                fromJSON(object: any): ReactivateAppRequest;
                toJSON(message: ReactivateAppRequest): unknown;
                create(base?: DeepPartial<ReactivateAppRequest>): ReactivateAppRequest;
                fromPartial(object: DeepPartial<ReactivateAppRequest>): ReactivateAppRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ReactivateAppResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateAppResponse;
                fromJSON(object: any): ReactivateAppResponse;
                toJSON(message: ReactivateAppResponse): unknown;
                create(base?: DeepPartial<ReactivateAppResponse>): ReactivateAppResponse;
                fromPartial(object: DeepPartial<ReactivateAppResponse>): ReactivateAppResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeApp: {
            readonly name: "RemoveApp";
            readonly requestType: {
                encode(message: RemoveAppRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAppRequest;
                fromJSON(object: any): RemoveAppRequest;
                toJSON(message: RemoveAppRequest): unknown;
                create(base?: DeepPartial<RemoveAppRequest>): RemoveAppRequest;
                fromPartial(object: DeepPartial<RemoveAppRequest>): RemoveAppRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveAppResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAppResponse;
                fromJSON(object: any): RemoveAppResponse;
                toJSON(message: RemoveAppResponse): unknown;
                create(base?: DeepPartial<RemoveAppResponse>): RemoveAppResponse;
                fromPartial(object: DeepPartial<RemoveAppResponse>): RemoveAppResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly regenerateOIDCClientSecret: {
            readonly name: "RegenerateOIDCClientSecret";
            readonly requestType: {
                encode(message: RegenerateOIDCClientSecretRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateOIDCClientSecretRequest;
                fromJSON(object: any): RegenerateOIDCClientSecretRequest;
                toJSON(message: RegenerateOIDCClientSecretRequest): unknown;
                create(base?: DeepPartial<RegenerateOIDCClientSecretRequest>): RegenerateOIDCClientSecretRequest;
                fromPartial(object: DeepPartial<RegenerateOIDCClientSecretRequest>): RegenerateOIDCClientSecretRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RegenerateOIDCClientSecretResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateOIDCClientSecretResponse;
                fromJSON(object: any): RegenerateOIDCClientSecretResponse;
                toJSON(message: RegenerateOIDCClientSecretResponse): unknown;
                create(base?: DeepPartial<RegenerateOIDCClientSecretResponse>): RegenerateOIDCClientSecretResponse;
                fromPartial(object: DeepPartial<RegenerateOIDCClientSecretResponse>): RegenerateOIDCClientSecretResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly regenerateAPIClientSecret: {
            readonly name: "RegenerateAPIClientSecret";
            readonly requestType: {
                encode(message: RegenerateAPIClientSecretRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateAPIClientSecretRequest;
                fromJSON(object: any): RegenerateAPIClientSecretRequest;
                toJSON(message: RegenerateAPIClientSecretRequest): unknown;
                create(base?: DeepPartial<RegenerateAPIClientSecretRequest>): RegenerateAPIClientSecretRequest;
                fromPartial(object: DeepPartial<RegenerateAPIClientSecretRequest>): RegenerateAPIClientSecretRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RegenerateAPIClientSecretResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateAPIClientSecretResponse;
                fromJSON(object: any): RegenerateAPIClientSecretResponse;
                toJSON(message: RegenerateAPIClientSecretResponse): unknown;
                create(base?: DeepPartial<RegenerateAPIClientSecretResponse>): RegenerateAPIClientSecretResponse;
                fromPartial(object: DeepPartial<RegenerateAPIClientSecretResponse>): RegenerateAPIClientSecretResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getAppKey: {
            readonly name: "GetAppKey";
            readonly requestType: {
                encode(message: GetAppKeyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAppKeyRequest;
                fromJSON(object: any): GetAppKeyRequest;
                toJSON(message: GetAppKeyRequest): unknown;
                create(base?: DeepPartial<GetAppKeyRequest>): GetAppKeyRequest;
                fromPartial(object: DeepPartial<GetAppKeyRequest>): GetAppKeyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetAppKeyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetAppKeyResponse;
                fromJSON(object: any): GetAppKeyResponse;
                toJSON(message: GetAppKeyResponse): unknown;
                create(base?: DeepPartial<GetAppKeyResponse>): GetAppKeyResponse;
                fromPartial(object: DeepPartial<GetAppKeyResponse>): GetAppKeyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAppKeys: {
            readonly name: "ListAppKeys";
            readonly requestType: {
                encode(message: ListAppKeysRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAppKeysRequest;
                fromJSON(object: any): ListAppKeysRequest;
                toJSON(message: ListAppKeysRequest): unknown;
                create(base?: DeepPartial<ListAppKeysRequest>): ListAppKeysRequest;
                fromPartial(object: DeepPartial<ListAppKeysRequest>): ListAppKeysRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListAppKeysResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAppKeysResponse;
                fromJSON(object: any): ListAppKeysResponse;
                toJSON(message: ListAppKeysResponse): unknown;
                create(base?: DeepPartial<ListAppKeysResponse>): ListAppKeysResponse;
                fromPartial(object: DeepPartial<ListAppKeysResponse>): ListAppKeysResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addAppKey: {
            readonly name: "AddAppKey";
            readonly requestType: {
                encode(message: AddAppKeyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddAppKeyRequest;
                fromJSON(object: any): AddAppKeyRequest;
                toJSON(message: AddAppKeyRequest): unknown;
                create(base?: DeepPartial<AddAppKeyRequest>): AddAppKeyRequest;
                fromPartial(object: DeepPartial<AddAppKeyRequest>): AddAppKeyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddAppKeyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddAppKeyResponse;
                fromJSON(object: any): AddAppKeyResponse;
                toJSON(message: AddAppKeyResponse): unknown;
                create(base?: DeepPartial<AddAppKeyResponse>): AddAppKeyResponse;
                fromPartial(object: DeepPartial<AddAppKeyResponse>): AddAppKeyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeAppKey: {
            readonly name: "RemoveAppKey";
            readonly requestType: {
                encode(message: RemoveAppKeyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAppKeyRequest;
                fromJSON(object: any): RemoveAppKeyRequest;
                toJSON(message: RemoveAppKeyRequest): unknown;
                create(base?: DeepPartial<RemoveAppKeyRequest>): RemoveAppKeyRequest;
                fromPartial(object: DeepPartial<RemoveAppKeyRequest>): RemoveAppKeyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveAppKeyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAppKeyResponse;
                fromJSON(object: any): RemoveAppKeyResponse;
                toJSON(message: RemoveAppKeyResponse): unknown;
                create(base?: DeepPartial<RemoveAppKeyResponse>): RemoveAppKeyResponse;
                fromPartial(object: DeepPartial<RemoveAppKeyResponse>): RemoveAppKeyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectGrantChanges: {
            readonly name: "ListProjectGrantChanges";
            readonly requestType: {
                encode(message: ListProjectGrantChangesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantChangesRequest;
                fromJSON(object: any): ListProjectGrantChangesRequest;
                toJSON(message: ListProjectGrantChangesRequest): unknown;
                create(base?: DeepPartial<ListProjectGrantChangesRequest>): ListProjectGrantChangesRequest;
                fromPartial(object: DeepPartial<ListProjectGrantChangesRequest>): ListProjectGrantChangesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProjectGrantChangesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantChangesResponse;
                fromJSON(object: any): ListProjectGrantChangesResponse;
                toJSON(message: ListProjectGrantChangesResponse): unknown;
                create(base?: DeepPartial<ListProjectGrantChangesResponse>): ListProjectGrantChangesResponse;
                fromPartial(object: DeepPartial<ListProjectGrantChangesResponse>): ListProjectGrantChangesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getProjectGrantByID: {
            readonly name: "GetProjectGrantByID";
            readonly requestType: {
                encode(message: GetProjectGrantByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectGrantByIDRequest;
                fromJSON(object: any): GetProjectGrantByIDRequest;
                toJSON(message: GetProjectGrantByIDRequest): unknown;
                create(base?: DeepPartial<GetProjectGrantByIDRequest>): GetProjectGrantByIDRequest;
                fromPartial(object: DeepPartial<GetProjectGrantByIDRequest>): GetProjectGrantByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetProjectGrantByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectGrantByIDResponse;
                fromJSON(object: any): GetProjectGrantByIDResponse;
                toJSON(message: GetProjectGrantByIDResponse): unknown;
                create(base?: DeepPartial<GetProjectGrantByIDResponse>): GetProjectGrantByIDResponse;
                fromPartial(object: DeepPartial<GetProjectGrantByIDResponse>): GetProjectGrantByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectGrants: {
            readonly name: "ListProjectGrants";
            readonly requestType: {
                encode(message: ListProjectGrantsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantsRequest;
                fromJSON(object: any): ListProjectGrantsRequest;
                toJSON(message: ListProjectGrantsRequest): unknown;
                create(base?: DeepPartial<ListProjectGrantsRequest>): ListProjectGrantsRequest;
                fromPartial(object: DeepPartial<ListProjectGrantsRequest>): ListProjectGrantsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProjectGrantsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantsResponse;
                fromJSON(object: any): ListProjectGrantsResponse;
                toJSON(message: ListProjectGrantsResponse): unknown;
                create(base?: DeepPartial<ListProjectGrantsResponse>): ListProjectGrantsResponse;
                fromPartial(object: DeepPartial<ListProjectGrantsResponse>): ListProjectGrantsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAllProjectGrants: {
            readonly name: "ListAllProjectGrants";
            readonly requestType: {
                encode(message: ListAllProjectGrantsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAllProjectGrantsRequest;
                fromJSON(object: any): ListAllProjectGrantsRequest;
                toJSON(message: ListAllProjectGrantsRequest): unknown;
                create(base?: DeepPartial<ListAllProjectGrantsRequest>): ListAllProjectGrantsRequest;
                fromPartial(object: DeepPartial<ListAllProjectGrantsRequest>): ListAllProjectGrantsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListAllProjectGrantsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAllProjectGrantsResponse;
                fromJSON(object: any): ListAllProjectGrantsResponse;
                toJSON(message: ListAllProjectGrantsResponse): unknown;
                create(base?: DeepPartial<ListAllProjectGrantsResponse>): ListAllProjectGrantsResponse;
                fromPartial(object: DeepPartial<ListAllProjectGrantsResponse>): ListAllProjectGrantsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProjectGrant: {
            readonly name: "AddProjectGrant";
            readonly requestType: {
                encode(message: AddProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectGrantRequest;
                fromJSON(object: any): AddProjectGrantRequest;
                toJSON(message: AddProjectGrantRequest): unknown;
                create(base?: DeepPartial<AddProjectGrantRequest>): AddProjectGrantRequest;
                fromPartial(object: DeepPartial<AddProjectGrantRequest>): AddProjectGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectGrantResponse;
                fromJSON(object: any): AddProjectGrantResponse;
                toJSON(message: AddProjectGrantResponse): unknown;
                create(base?: DeepPartial<AddProjectGrantResponse>): AddProjectGrantResponse;
                fromPartial(object: DeepPartial<AddProjectGrantResponse>): AddProjectGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProjectGrant: {
            readonly name: "UpdateProjectGrant";
            readonly requestType: {
                encode(message: UpdateProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectGrantRequest;
                fromJSON(object: any): UpdateProjectGrantRequest;
                toJSON(message: UpdateProjectGrantRequest): unknown;
                create(base?: DeepPartial<UpdateProjectGrantRequest>): UpdateProjectGrantRequest;
                fromPartial(object: DeepPartial<UpdateProjectGrantRequest>): UpdateProjectGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectGrantResponse;
                fromJSON(object: any): UpdateProjectGrantResponse;
                toJSON(message: UpdateProjectGrantResponse): unknown;
                create(base?: DeepPartial<UpdateProjectGrantResponse>): UpdateProjectGrantResponse;
                fromPartial(object: DeepPartial<UpdateProjectGrantResponse>): UpdateProjectGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateProjectGrant: {
            readonly name: "DeactivateProjectGrant";
            readonly requestType: {
                encode(message: DeactivateProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProjectGrantRequest;
                fromJSON(object: any): DeactivateProjectGrantRequest;
                toJSON(message: DeactivateProjectGrantRequest): unknown;
                create(base?: DeepPartial<DeactivateProjectGrantRequest>): DeactivateProjectGrantRequest;
                fromPartial(object: DeepPartial<DeactivateProjectGrantRequest>): DeactivateProjectGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProjectGrantResponse;
                fromJSON(object: any): DeactivateProjectGrantResponse;
                toJSON(message: DeactivateProjectGrantResponse): unknown;
                create(base?: DeepPartial<DeactivateProjectGrantResponse>): DeactivateProjectGrantResponse;
                fromPartial(object: DeepPartial<DeactivateProjectGrantResponse>): DeactivateProjectGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateProjectGrant: {
            readonly name: "ReactivateProjectGrant";
            readonly requestType: {
                encode(message: ReactivateProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateProjectGrantRequest;
                fromJSON(object: any): ReactivateProjectGrantRequest;
                toJSON(message: ReactivateProjectGrantRequest): unknown;
                create(base?: DeepPartial<ReactivateProjectGrantRequest>): ReactivateProjectGrantRequest;
                fromPartial(object: DeepPartial<ReactivateProjectGrantRequest>): ReactivateProjectGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ReactivateProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateProjectGrantResponse;
                fromJSON(object: any): ReactivateProjectGrantResponse;
                toJSON(message: ReactivateProjectGrantResponse): unknown;
                create(base?: DeepPartial<ReactivateProjectGrantResponse>): ReactivateProjectGrantResponse;
                fromPartial(object: DeepPartial<ReactivateProjectGrantResponse>): ReactivateProjectGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProjectGrant: {
            readonly name: "RemoveProjectGrant";
            readonly requestType: {
                encode(message: RemoveProjectGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectGrantRequest;
                fromJSON(object: any): RemoveProjectGrantRequest;
                toJSON(message: RemoveProjectGrantRequest): unknown;
                create(base?: DeepPartial<RemoveProjectGrantRequest>): RemoveProjectGrantRequest;
                fromPartial(object: DeepPartial<RemoveProjectGrantRequest>): RemoveProjectGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveProjectGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectGrantResponse;
                fromJSON(object: any): RemoveProjectGrantResponse;
                toJSON(message: RemoveProjectGrantResponse): unknown;
                create(base?: DeepPartial<RemoveProjectGrantResponse>): RemoveProjectGrantResponse;
                fromPartial(object: DeepPartial<RemoveProjectGrantResponse>): RemoveProjectGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectGrantMemberRoles: {
            readonly name: "ListProjectGrantMemberRoles";
            readonly requestType: {
                encode(message: ListProjectGrantMemberRolesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantMemberRolesRequest;
                fromJSON(object: any): ListProjectGrantMemberRolesRequest;
                toJSON(message: ListProjectGrantMemberRolesRequest): unknown;
                create(base?: DeepPartial<ListProjectGrantMemberRolesRequest>): ListProjectGrantMemberRolesRequest;
                fromPartial(object: DeepPartial<ListProjectGrantMemberRolesRequest>): ListProjectGrantMemberRolesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProjectGrantMemberRolesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantMemberRolesResponse;
                fromJSON(object: any): ListProjectGrantMemberRolesResponse;
                toJSON(message: ListProjectGrantMemberRolesResponse): unknown;
                create(base?: DeepPartial<ListProjectGrantMemberRolesResponse>): ListProjectGrantMemberRolesResponse;
                fromPartial(object: DeepPartial<ListProjectGrantMemberRolesResponse>): ListProjectGrantMemberRolesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectGrantMembers: {
            readonly name: "ListProjectGrantMembers";
            readonly requestType: {
                encode(message: ListProjectGrantMembersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantMembersRequest;
                fromJSON(object: any): ListProjectGrantMembersRequest;
                toJSON(message: ListProjectGrantMembersRequest): unknown;
                create(base?: DeepPartial<ListProjectGrantMembersRequest>): ListProjectGrantMembersRequest;
                fromPartial(object: DeepPartial<ListProjectGrantMembersRequest>): ListProjectGrantMembersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProjectGrantMembersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProjectGrantMembersResponse;
                fromJSON(object: any): ListProjectGrantMembersResponse;
                toJSON(message: ListProjectGrantMembersResponse): unknown;
                create(base?: DeepPartial<ListProjectGrantMembersResponse>): ListProjectGrantMembersResponse;
                fromPartial(object: DeepPartial<ListProjectGrantMembersResponse>): ListProjectGrantMembersResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProjectGrantMember: {
            readonly name: "AddProjectGrantMember";
            readonly requestType: {
                encode(message: AddProjectGrantMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectGrantMemberRequest;
                fromJSON(object: any): AddProjectGrantMemberRequest;
                toJSON(message: AddProjectGrantMemberRequest): unknown;
                create(base?: DeepPartial<AddProjectGrantMemberRequest>): AddProjectGrantMemberRequest;
                fromPartial(object: DeepPartial<AddProjectGrantMemberRequest>): AddProjectGrantMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddProjectGrantMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddProjectGrantMemberResponse;
                fromJSON(object: any): AddProjectGrantMemberResponse;
                toJSON(message: AddProjectGrantMemberResponse): unknown;
                create(base?: DeepPartial<AddProjectGrantMemberResponse>): AddProjectGrantMemberResponse;
                fromPartial(object: DeepPartial<AddProjectGrantMemberResponse>): AddProjectGrantMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProjectGrantMember: {
            readonly name: "UpdateProjectGrantMember";
            readonly requestType: {
                encode(message: UpdateProjectGrantMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectGrantMemberRequest;
                fromJSON(object: any): UpdateProjectGrantMemberRequest;
                toJSON(message: UpdateProjectGrantMemberRequest): unknown;
                create(base?: DeepPartial<UpdateProjectGrantMemberRequest>): UpdateProjectGrantMemberRequest;
                fromPartial(object: DeepPartial<UpdateProjectGrantMemberRequest>): UpdateProjectGrantMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateProjectGrantMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectGrantMemberResponse;
                fromJSON(object: any): UpdateProjectGrantMemberResponse;
                toJSON(message: UpdateProjectGrantMemberResponse): unknown;
                create(base?: DeepPartial<UpdateProjectGrantMemberResponse>): UpdateProjectGrantMemberResponse;
                fromPartial(object: DeepPartial<UpdateProjectGrantMemberResponse>): UpdateProjectGrantMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProjectGrantMember: {
            readonly name: "RemoveProjectGrantMember";
            readonly requestType: {
                encode(message: RemoveProjectGrantMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectGrantMemberRequest;
                fromJSON(object: any): RemoveProjectGrantMemberRequest;
                toJSON(message: RemoveProjectGrantMemberRequest): unknown;
                create(base?: DeepPartial<RemoveProjectGrantMemberRequest>): RemoveProjectGrantMemberRequest;
                fromPartial(object: DeepPartial<RemoveProjectGrantMemberRequest>): RemoveProjectGrantMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveProjectGrantMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveProjectGrantMemberResponse;
                fromJSON(object: any): RemoveProjectGrantMemberResponse;
                toJSON(message: RemoveProjectGrantMemberResponse): unknown;
                create(base?: DeepPartial<RemoveProjectGrantMemberResponse>): RemoveProjectGrantMemberResponse;
                fromPartial(object: DeepPartial<RemoveProjectGrantMemberResponse>): RemoveProjectGrantMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserGrantByID: {
            readonly name: "GetUserGrantByID";
            readonly requestType: {
                encode(message: GetUserGrantByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetUserGrantByIDRequest;
                fromJSON(object: any): GetUserGrantByIDRequest;
                toJSON(message: GetUserGrantByIDRequest): unknown;
                create(base?: DeepPartial<GetUserGrantByIDRequest>): GetUserGrantByIDRequest;
                fromPartial(object: DeepPartial<GetUserGrantByIDRequest>): GetUserGrantByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetUserGrantByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetUserGrantByIDResponse;
                fromJSON(object: any): GetUserGrantByIDResponse;
                toJSON(message: GetUserGrantByIDResponse): unknown;
                create(base?: DeepPartial<GetUserGrantByIDResponse>): GetUserGrantByIDResponse;
                fromPartial(object: DeepPartial<GetUserGrantByIDResponse>): GetUserGrantByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUserGrants: {
            readonly name: "ListUserGrants";
            readonly requestType: {
                encode(message: ListUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUserGrantRequest;
                fromJSON(object: any): ListUserGrantRequest;
                toJSON(message: ListUserGrantRequest): unknown;
                create(base?: DeepPartial<ListUserGrantRequest>): ListUserGrantRequest;
                fromPartial(object: DeepPartial<ListUserGrantRequest>): ListUserGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListUserGrantResponse;
                fromJSON(object: any): ListUserGrantResponse;
                toJSON(message: ListUserGrantResponse): unknown;
                create(base?: DeepPartial<ListUserGrantResponse>): ListUserGrantResponse;
                fromPartial(object: DeepPartial<ListUserGrantResponse>): ListUserGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addUserGrant: {
            readonly name: "AddUserGrant";
            readonly requestType: {
                encode(message: AddUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddUserGrantRequest;
                fromJSON(object: any): AddUserGrantRequest;
                toJSON(message: AddUserGrantRequest): unknown;
                create(base?: DeepPartial<AddUserGrantRequest>): AddUserGrantRequest;
                fromPartial(object: DeepPartial<AddUserGrantRequest>): AddUserGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddUserGrantResponse;
                fromJSON(object: any): AddUserGrantResponse;
                toJSON(message: AddUserGrantResponse): unknown;
                create(base?: DeepPartial<AddUserGrantResponse>): AddUserGrantResponse;
                fromPartial(object: DeepPartial<AddUserGrantResponse>): AddUserGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateUserGrant: {
            readonly name: "UpdateUserGrant";
            readonly requestType: {
                encode(message: UpdateUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserGrantRequest;
                fromJSON(object: any): UpdateUserGrantRequest;
                toJSON(message: UpdateUserGrantRequest): unknown;
                create(base?: DeepPartial<UpdateUserGrantRequest>): UpdateUserGrantRequest;
                fromPartial(object: DeepPartial<UpdateUserGrantRequest>): UpdateUserGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserGrantResponse;
                fromJSON(object: any): UpdateUserGrantResponse;
                toJSON(message: UpdateUserGrantResponse): unknown;
                create(base?: DeepPartial<UpdateUserGrantResponse>): UpdateUserGrantResponse;
                fromPartial(object: DeepPartial<UpdateUserGrantResponse>): UpdateUserGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateUserGrant: {
            readonly name: "DeactivateUserGrant";
            readonly requestType: {
                encode(message: DeactivateUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserGrantRequest;
                fromJSON(object: any): DeactivateUserGrantRequest;
                toJSON(message: DeactivateUserGrantRequest): unknown;
                create(base?: DeepPartial<DeactivateUserGrantRequest>): DeactivateUserGrantRequest;
                fromPartial(object: DeepPartial<DeactivateUserGrantRequest>): DeactivateUserGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserGrantResponse;
                fromJSON(object: any): DeactivateUserGrantResponse;
                toJSON(message: DeactivateUserGrantResponse): unknown;
                create(base?: DeepPartial<DeactivateUserGrantResponse>): DeactivateUserGrantResponse;
                fromPartial(object: DeepPartial<DeactivateUserGrantResponse>): DeactivateUserGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateUserGrant: {
            readonly name: "ReactivateUserGrant";
            readonly requestType: {
                encode(message: ReactivateUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserGrantRequest;
                fromJSON(object: any): ReactivateUserGrantRequest;
                toJSON(message: ReactivateUserGrantRequest): unknown;
                create(base?: DeepPartial<ReactivateUserGrantRequest>): ReactivateUserGrantRequest;
                fromPartial(object: DeepPartial<ReactivateUserGrantRequest>): ReactivateUserGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ReactivateUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserGrantResponse;
                fromJSON(object: any): ReactivateUserGrantResponse;
                toJSON(message: ReactivateUserGrantResponse): unknown;
                create(base?: DeepPartial<ReactivateUserGrantResponse>): ReactivateUserGrantResponse;
                fromPartial(object: DeepPartial<ReactivateUserGrantResponse>): ReactivateUserGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeUserGrant: {
            readonly name: "RemoveUserGrant";
            readonly requestType: {
                encode(message: RemoveUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserGrantRequest;
                fromJSON(object: any): RemoveUserGrantRequest;
                toJSON(message: RemoveUserGrantRequest): unknown;
                create(base?: DeepPartial<RemoveUserGrantRequest>): RemoveUserGrantRequest;
                fromPartial(object: DeepPartial<RemoveUserGrantRequest>): RemoveUserGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserGrantResponse;
                fromJSON(object: any): RemoveUserGrantResponse;
                toJSON(message: RemoveUserGrantResponse): unknown;
                create(base?: DeepPartial<RemoveUserGrantResponse>): RemoveUserGrantResponse;
                fromPartial(object: DeepPartial<RemoveUserGrantResponse>): RemoveUserGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkRemoveUserGrant: {
            readonly name: "BulkRemoveUserGrant";
            readonly requestType: {
                encode(message: BulkRemoveUserGrantRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveUserGrantRequest;
                fromJSON(object: any): BulkRemoveUserGrantRequest;
                toJSON(message: BulkRemoveUserGrantRequest): unknown;
                create(base?: DeepPartial<BulkRemoveUserGrantRequest>): BulkRemoveUserGrantRequest;
                fromPartial(object: DeepPartial<BulkRemoveUserGrantRequest>): BulkRemoveUserGrantRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: BulkRemoveUserGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveUserGrantResponse;
                fromJSON(_: any): BulkRemoveUserGrantResponse;
                toJSON(_: BulkRemoveUserGrantResponse): unknown;
                create(base?: DeepPartial<BulkRemoveUserGrantResponse>): BulkRemoveUserGrantResponse;
                fromPartial(_: DeepPartial<BulkRemoveUserGrantResponse>): BulkRemoveUserGrantResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** deprecated: please use DomainPolicy instead */
        readonly getOrgIAMPolicy: {
            readonly name: "GetOrgIAMPolicy";
            readonly requestType: {
                encode(_: GetOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgIAMPolicyRequest;
                fromJSON(_: any): GetOrgIAMPolicyRequest;
                toJSON(_: GetOrgIAMPolicyRequest): unknown;
                create(base?: DeepPartial<GetOrgIAMPolicyRequest>): GetOrgIAMPolicyRequest;
                fromPartial(_: DeepPartial<GetOrgIAMPolicyRequest>): GetOrgIAMPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgIAMPolicyResponse;
                fromJSON(object: any): GetOrgIAMPolicyResponse;
                toJSON(message: GetOrgIAMPolicyResponse): unknown;
                create(base?: DeepPartial<GetOrgIAMPolicyResponse>): GetOrgIAMPolicyResponse;
                fromPartial(object: DeepPartial<GetOrgIAMPolicyResponse>): GetOrgIAMPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDomainPolicy: {
            readonly name: "GetDomainPolicy";
            readonly requestType: {
                encode(_: GetDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainPolicyRequest;
                fromJSON(_: any): GetDomainPolicyRequest;
                toJSON(_: GetDomainPolicyRequest): unknown;
                create(base?: DeepPartial<GetDomainPolicyRequest>): GetDomainPolicyRequest;
                fromPartial(_: DeepPartial<GetDomainPolicyRequest>): GetDomainPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainPolicyResponse;
                fromJSON(object: any): GetDomainPolicyResponse;
                toJSON(message: GetDomainPolicyResponse): unknown;
                create(base?: DeepPartial<GetDomainPolicyResponse>): GetDomainPolicyResponse;
                fromPartial(object: DeepPartial<GetDomainPolicyResponse>): GetDomainPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getLoginPolicy: {
            readonly name: "GetLoginPolicy";
            readonly requestType: {
                encode(_: GetLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginPolicyRequest;
                fromJSON(_: any): GetLoginPolicyRequest;
                toJSON(_: GetLoginPolicyRequest): unknown;
                create(base?: DeepPartial<GetLoginPolicyRequest>): GetLoginPolicyRequest;
                fromPartial(_: DeepPartial<GetLoginPolicyRequest>): GetLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginPolicyResponse;
                fromJSON(object: any): GetLoginPolicyResponse;
                toJSON(message: GetLoginPolicyResponse): unknown;
                create(base?: DeepPartial<GetLoginPolicyResponse>): GetLoginPolicyResponse;
                fromPartial(object: DeepPartial<GetLoginPolicyResponse>): GetLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLoginPolicy: {
            readonly name: "GetDefaultLoginPolicy";
            readonly requestType: {
                encode(_: GetDefaultLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLoginPolicyRequest;
                fromJSON(_: any): GetDefaultLoginPolicyRequest;
                toJSON(_: GetDefaultLoginPolicyRequest): unknown;
                create(base?: DeepPartial<GetDefaultLoginPolicyRequest>): GetDefaultLoginPolicyRequest;
                fromPartial(_: DeepPartial<GetDefaultLoginPolicyRequest>): GetDefaultLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLoginPolicyResponse;
                fromJSON(object: any): GetDefaultLoginPolicyResponse;
                toJSON(message: GetDefaultLoginPolicyResponse): unknown;
                create(base?: DeepPartial<GetDefaultLoginPolicyResponse>): GetDefaultLoginPolicyResponse;
                fromPartial(object: DeepPartial<GetDefaultLoginPolicyResponse>): GetDefaultLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomLoginPolicy: {
            readonly name: "AddCustomLoginPolicy";
            readonly requestType: {
                encode(message: AddCustomLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLoginPolicyRequest;
                fromJSON(object: any): AddCustomLoginPolicyRequest;
                toJSON(message: AddCustomLoginPolicyRequest): unknown;
                create(base?: DeepPartial<AddCustomLoginPolicyRequest>): AddCustomLoginPolicyRequest;
                fromPartial(object: DeepPartial<AddCustomLoginPolicyRequest>): AddCustomLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddCustomLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLoginPolicyResponse;
                fromJSON(object: any): AddCustomLoginPolicyResponse;
                toJSON(message: AddCustomLoginPolicyResponse): unknown;
                create(base?: DeepPartial<AddCustomLoginPolicyResponse>): AddCustomLoginPolicyResponse;
                fromPartial(object: DeepPartial<AddCustomLoginPolicyResponse>): AddCustomLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomLoginPolicy: {
            readonly name: "UpdateCustomLoginPolicy";
            readonly requestType: {
                encode(message: UpdateCustomLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLoginPolicyRequest;
                fromJSON(object: any): UpdateCustomLoginPolicyRequest;
                toJSON(message: UpdateCustomLoginPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateCustomLoginPolicyRequest>): UpdateCustomLoginPolicyRequest;
                fromPartial(object: DeepPartial<UpdateCustomLoginPolicyRequest>): UpdateCustomLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCustomLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLoginPolicyResponse;
                fromJSON(object: any): UpdateCustomLoginPolicyResponse;
                toJSON(message: UpdateCustomLoginPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateCustomLoginPolicyResponse>): UpdateCustomLoginPolicyResponse;
                fromPartial(object: DeepPartial<UpdateCustomLoginPolicyResponse>): UpdateCustomLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetLoginPolicyToDefault: {
            readonly name: "ResetLoginPolicyToDefault";
            readonly requestType: {
                encode(_: ResetLoginPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetLoginPolicyToDefaultRequest;
                fromJSON(_: any): ResetLoginPolicyToDefaultRequest;
                toJSON(_: ResetLoginPolicyToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetLoginPolicyToDefaultRequest>): ResetLoginPolicyToDefaultRequest;
                fromPartial(_: DeepPartial<ResetLoginPolicyToDefaultRequest>): ResetLoginPolicyToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetLoginPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetLoginPolicyToDefaultResponse;
                fromJSON(object: any): ResetLoginPolicyToDefaultResponse;
                toJSON(message: ResetLoginPolicyToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetLoginPolicyToDefaultResponse>): ResetLoginPolicyToDefaultResponse;
                fromPartial(object: DeepPartial<ResetLoginPolicyToDefaultResponse>): ResetLoginPolicyToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listLoginPolicyIDPs: {
            readonly name: "ListLoginPolicyIDPs";
            readonly requestType: {
                encode(message: ListLoginPolicyIDPsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicyIDPsRequest;
                fromJSON(object: any): ListLoginPolicyIDPsRequest;
                toJSON(message: ListLoginPolicyIDPsRequest): unknown;
                create(base?: DeepPartial<ListLoginPolicyIDPsRequest>): ListLoginPolicyIDPsRequest;
                fromPartial(object: DeepPartial<ListLoginPolicyIDPsRequest>): ListLoginPolicyIDPsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListLoginPolicyIDPsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicyIDPsResponse;
                fromJSON(object: any): ListLoginPolicyIDPsResponse;
                toJSON(message: ListLoginPolicyIDPsResponse): unknown;
                create(base?: DeepPartial<ListLoginPolicyIDPsResponse>): ListLoginPolicyIDPsResponse;
                fromPartial(object: DeepPartial<ListLoginPolicyIDPsResponse>): ListLoginPolicyIDPsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addIDPToLoginPolicy: {
            readonly name: "AddIDPToLoginPolicy";
            readonly requestType: {
                encode(message: AddIDPToLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPToLoginPolicyRequest;
                fromJSON(object: any): AddIDPToLoginPolicyRequest;
                toJSON(message: AddIDPToLoginPolicyRequest): unknown;
                create(base?: DeepPartial<AddIDPToLoginPolicyRequest>): AddIDPToLoginPolicyRequest;
                fromPartial(object: DeepPartial<AddIDPToLoginPolicyRequest>): AddIDPToLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddIDPToLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPToLoginPolicyResponse;
                fromJSON(object: any): AddIDPToLoginPolicyResponse;
                toJSON(message: AddIDPToLoginPolicyResponse): unknown;
                create(base?: DeepPartial<AddIDPToLoginPolicyResponse>): AddIDPToLoginPolicyResponse;
                fromPartial(object: DeepPartial<AddIDPToLoginPolicyResponse>): AddIDPToLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeIDPFromLoginPolicy: {
            readonly name: "RemoveIDPFromLoginPolicy";
            readonly requestType: {
                encode(message: RemoveIDPFromLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIDPFromLoginPolicyRequest;
                fromJSON(object: any): RemoveIDPFromLoginPolicyRequest;
                toJSON(message: RemoveIDPFromLoginPolicyRequest): unknown;
                create(base?: DeepPartial<RemoveIDPFromLoginPolicyRequest>): RemoveIDPFromLoginPolicyRequest;
                fromPartial(object: DeepPartial<RemoveIDPFromLoginPolicyRequest>): RemoveIDPFromLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveIDPFromLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIDPFromLoginPolicyResponse;
                fromJSON(object: any): RemoveIDPFromLoginPolicyResponse;
                toJSON(message: RemoveIDPFromLoginPolicyResponse): unknown;
                create(base?: DeepPartial<RemoveIDPFromLoginPolicyResponse>): RemoveIDPFromLoginPolicyResponse;
                fromPartial(object: DeepPartial<RemoveIDPFromLoginPolicyResponse>): RemoveIDPFromLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listLoginPolicySecondFactors: {
            readonly name: "ListLoginPolicySecondFactors";
            readonly requestType: {
                encode(_: ListLoginPolicySecondFactorsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicySecondFactorsRequest;
                fromJSON(_: any): ListLoginPolicySecondFactorsRequest;
                toJSON(_: ListLoginPolicySecondFactorsRequest): unknown;
                create(base?: DeepPartial<ListLoginPolicySecondFactorsRequest>): ListLoginPolicySecondFactorsRequest;
                fromPartial(_: DeepPartial<ListLoginPolicySecondFactorsRequest>): ListLoginPolicySecondFactorsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListLoginPolicySecondFactorsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicySecondFactorsResponse;
                fromJSON(object: any): ListLoginPolicySecondFactorsResponse;
                toJSON(message: ListLoginPolicySecondFactorsResponse): unknown;
                create(base?: DeepPartial<ListLoginPolicySecondFactorsResponse>): ListLoginPolicySecondFactorsResponse;
                fromPartial(object: DeepPartial<ListLoginPolicySecondFactorsResponse>): ListLoginPolicySecondFactorsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSecondFactorToLoginPolicy: {
            readonly name: "AddSecondFactorToLoginPolicy";
            readonly requestType: {
                encode(message: AddSecondFactorToLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSecondFactorToLoginPolicyRequest;
                fromJSON(object: any): AddSecondFactorToLoginPolicyRequest;
                toJSON(message: AddSecondFactorToLoginPolicyRequest): unknown;
                create(base?: DeepPartial<AddSecondFactorToLoginPolicyRequest>): AddSecondFactorToLoginPolicyRequest;
                fromPartial(object: DeepPartial<AddSecondFactorToLoginPolicyRequest>): AddSecondFactorToLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddSecondFactorToLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSecondFactorToLoginPolicyResponse;
                fromJSON(object: any): AddSecondFactorToLoginPolicyResponse;
                toJSON(message: AddSecondFactorToLoginPolicyResponse): unknown;
                create(base?: DeepPartial<AddSecondFactorToLoginPolicyResponse>): AddSecondFactorToLoginPolicyResponse;
                fromPartial(object: DeepPartial<AddSecondFactorToLoginPolicyResponse>): AddSecondFactorToLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeSecondFactorFromLoginPolicy: {
            readonly name: "RemoveSecondFactorFromLoginPolicy";
            readonly requestType: {
                encode(message: RemoveSecondFactorFromLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSecondFactorFromLoginPolicyRequest;
                fromJSON(object: any): RemoveSecondFactorFromLoginPolicyRequest;
                toJSON(message: RemoveSecondFactorFromLoginPolicyRequest): unknown;
                create(base?: DeepPartial<RemoveSecondFactorFromLoginPolicyRequest>): RemoveSecondFactorFromLoginPolicyRequest;
                fromPartial(object: DeepPartial<RemoveSecondFactorFromLoginPolicyRequest>): RemoveSecondFactorFromLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveSecondFactorFromLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSecondFactorFromLoginPolicyResponse;
                fromJSON(object: any): RemoveSecondFactorFromLoginPolicyResponse;
                toJSON(message: RemoveSecondFactorFromLoginPolicyResponse): unknown;
                create(base?: DeepPartial<RemoveSecondFactorFromLoginPolicyResponse>): RemoveSecondFactorFromLoginPolicyResponse;
                fromPartial(object: DeepPartial<RemoveSecondFactorFromLoginPolicyResponse>): RemoveSecondFactorFromLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listLoginPolicyMultiFactors: {
            readonly name: "ListLoginPolicyMultiFactors";
            readonly requestType: {
                encode(_: ListLoginPolicyMultiFactorsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicyMultiFactorsRequest;
                fromJSON(_: any): ListLoginPolicyMultiFactorsRequest;
                toJSON(_: ListLoginPolicyMultiFactorsRequest): unknown;
                create(base?: DeepPartial<ListLoginPolicyMultiFactorsRequest>): ListLoginPolicyMultiFactorsRequest;
                fromPartial(_: DeepPartial<ListLoginPolicyMultiFactorsRequest>): ListLoginPolicyMultiFactorsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListLoginPolicyMultiFactorsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListLoginPolicyMultiFactorsResponse;
                fromJSON(object: any): ListLoginPolicyMultiFactorsResponse;
                toJSON(message: ListLoginPolicyMultiFactorsResponse): unknown;
                create(base?: DeepPartial<ListLoginPolicyMultiFactorsResponse>): ListLoginPolicyMultiFactorsResponse;
                fromPartial(object: DeepPartial<ListLoginPolicyMultiFactorsResponse>): ListLoginPolicyMultiFactorsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMultiFactorToLoginPolicy: {
            readonly name: "AddMultiFactorToLoginPolicy";
            readonly requestType: {
                encode(message: AddMultiFactorToLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMultiFactorToLoginPolicyRequest;
                fromJSON(object: any): AddMultiFactorToLoginPolicyRequest;
                toJSON(message: AddMultiFactorToLoginPolicyRequest): unknown;
                create(base?: DeepPartial<AddMultiFactorToLoginPolicyRequest>): AddMultiFactorToLoginPolicyRequest;
                fromPartial(object: DeepPartial<AddMultiFactorToLoginPolicyRequest>): AddMultiFactorToLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddMultiFactorToLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMultiFactorToLoginPolicyResponse;
                fromJSON(object: any): AddMultiFactorToLoginPolicyResponse;
                toJSON(message: AddMultiFactorToLoginPolicyResponse): unknown;
                create(base?: DeepPartial<AddMultiFactorToLoginPolicyResponse>): AddMultiFactorToLoginPolicyResponse;
                fromPartial(object: DeepPartial<AddMultiFactorToLoginPolicyResponse>): AddMultiFactorToLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMultiFactorFromLoginPolicy: {
            readonly name: "RemoveMultiFactorFromLoginPolicy";
            readonly requestType: {
                encode(message: RemoveMultiFactorFromLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMultiFactorFromLoginPolicyRequest;
                fromJSON(object: any): RemoveMultiFactorFromLoginPolicyRequest;
                toJSON(message: RemoveMultiFactorFromLoginPolicyRequest): unknown;
                create(base?: DeepPartial<RemoveMultiFactorFromLoginPolicyRequest>): RemoveMultiFactorFromLoginPolicyRequest;
                fromPartial(object: DeepPartial<RemoveMultiFactorFromLoginPolicyRequest>): RemoveMultiFactorFromLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMultiFactorFromLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMultiFactorFromLoginPolicyResponse;
                fromJSON(object: any): RemoveMultiFactorFromLoginPolicyResponse;
                toJSON(message: RemoveMultiFactorFromLoginPolicyResponse): unknown;
                create(base?: DeepPartial<RemoveMultiFactorFromLoginPolicyResponse>): RemoveMultiFactorFromLoginPolicyResponse;
                fromPartial(object: DeepPartial<RemoveMultiFactorFromLoginPolicyResponse>): RemoveMultiFactorFromLoginPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPasswordComplexityPolicy: {
            readonly name: "GetPasswordComplexityPolicy";
            readonly requestType: {
                encode(_: GetPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexityPolicyRequest;
                fromJSON(_: any): GetPasswordComplexityPolicyRequest;
                toJSON(_: GetPasswordComplexityPolicyRequest): unknown;
                create(base?: DeepPartial<GetPasswordComplexityPolicyRequest>): GetPasswordComplexityPolicyRequest;
                fromPartial(_: DeepPartial<GetPasswordComplexityPolicyRequest>): GetPasswordComplexityPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexityPolicyResponse;
                fromJSON(object: any): GetPasswordComplexityPolicyResponse;
                toJSON(message: GetPasswordComplexityPolicyResponse): unknown;
                create(base?: DeepPartial<GetPasswordComplexityPolicyResponse>): GetPasswordComplexityPolicyResponse;
                fromPartial(object: DeepPartial<GetPasswordComplexityPolicyResponse>): GetPasswordComplexityPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPasswordComplexityPolicy: {
            readonly name: "GetDefaultPasswordComplexityPolicy";
            readonly requestType: {
                encode(_: GetDefaultPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordComplexityPolicyRequest;
                fromJSON(_: any): GetDefaultPasswordComplexityPolicyRequest;
                toJSON(_: GetDefaultPasswordComplexityPolicyRequest): unknown;
                create(base?: DeepPartial<GetDefaultPasswordComplexityPolicyRequest>): GetDefaultPasswordComplexityPolicyRequest;
                fromPartial(_: DeepPartial<GetDefaultPasswordComplexityPolicyRequest>): GetDefaultPasswordComplexityPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordComplexityPolicyResponse;
                fromJSON(object: any): GetDefaultPasswordComplexityPolicyResponse;
                toJSON(message: GetDefaultPasswordComplexityPolicyResponse): unknown;
                create(base?: DeepPartial<GetDefaultPasswordComplexityPolicyResponse>): GetDefaultPasswordComplexityPolicyResponse;
                fromPartial(object: DeepPartial<GetDefaultPasswordComplexityPolicyResponse>): GetDefaultPasswordComplexityPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomPasswordComplexityPolicy: {
            readonly name: "AddCustomPasswordComplexityPolicy";
            readonly requestType: {
                encode(message: AddCustomPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPasswordComplexityPolicyRequest;
                fromJSON(object: any): AddCustomPasswordComplexityPolicyRequest;
                toJSON(message: AddCustomPasswordComplexityPolicyRequest): unknown;
                create(base?: DeepPartial<AddCustomPasswordComplexityPolicyRequest>): AddCustomPasswordComplexityPolicyRequest;
                fromPartial(object: DeepPartial<AddCustomPasswordComplexityPolicyRequest>): AddCustomPasswordComplexityPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddCustomPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPasswordComplexityPolicyResponse;
                fromJSON(object: any): AddCustomPasswordComplexityPolicyResponse;
                toJSON(message: AddCustomPasswordComplexityPolicyResponse): unknown;
                create(base?: DeepPartial<AddCustomPasswordComplexityPolicyResponse>): AddCustomPasswordComplexityPolicyResponse;
                fromPartial(object: DeepPartial<AddCustomPasswordComplexityPolicyResponse>): AddCustomPasswordComplexityPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomPasswordComplexityPolicy: {
            readonly name: "UpdateCustomPasswordComplexityPolicy";
            readonly requestType: {
                encode(message: UpdateCustomPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPasswordComplexityPolicyRequest;
                fromJSON(object: any): UpdateCustomPasswordComplexityPolicyRequest;
                toJSON(message: UpdateCustomPasswordComplexityPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateCustomPasswordComplexityPolicyRequest>): UpdateCustomPasswordComplexityPolicyRequest;
                fromPartial(object: DeepPartial<UpdateCustomPasswordComplexityPolicyRequest>): UpdateCustomPasswordComplexityPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCustomPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPasswordComplexityPolicyResponse;
                fromJSON(object: any): UpdateCustomPasswordComplexityPolicyResponse;
                toJSON(message: UpdateCustomPasswordComplexityPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateCustomPasswordComplexityPolicyResponse>): UpdateCustomPasswordComplexityPolicyResponse;
                fromPartial(object: DeepPartial<UpdateCustomPasswordComplexityPolicyResponse>): UpdateCustomPasswordComplexityPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetPasswordComplexityPolicyToDefault: {
            readonly name: "ResetPasswordComplexityPolicyToDefault";
            readonly requestType: {
                encode(_: ResetPasswordComplexityPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordComplexityPolicyToDefaultRequest;
                fromJSON(_: any): ResetPasswordComplexityPolicyToDefaultRequest;
                toJSON(_: ResetPasswordComplexityPolicyToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetPasswordComplexityPolicyToDefaultRequest>): ResetPasswordComplexityPolicyToDefaultRequest;
                fromPartial(_: DeepPartial<ResetPasswordComplexityPolicyToDefaultRequest>): ResetPasswordComplexityPolicyToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetPasswordComplexityPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordComplexityPolicyToDefaultResponse;
                fromJSON(object: any): ResetPasswordComplexityPolicyToDefaultResponse;
                toJSON(message: ResetPasswordComplexityPolicyToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetPasswordComplexityPolicyToDefaultResponse>): ResetPasswordComplexityPolicyToDefaultResponse;
                fromPartial(object: DeepPartial<ResetPasswordComplexityPolicyToDefaultResponse>): ResetPasswordComplexityPolicyToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** The password age policy is not used at the moment */
        readonly getPasswordAgePolicy: {
            readonly name: "GetPasswordAgePolicy";
            readonly requestType: {
                encode(_: GetPasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordAgePolicyRequest;
                fromJSON(_: any): GetPasswordAgePolicyRequest;
                toJSON(_: GetPasswordAgePolicyRequest): unknown;
                create(base?: DeepPartial<GetPasswordAgePolicyRequest>): GetPasswordAgePolicyRequest;
                fromPartial(_: DeepPartial<GetPasswordAgePolicyRequest>): GetPasswordAgePolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordAgePolicyResponse;
                fromJSON(object: any): GetPasswordAgePolicyResponse;
                toJSON(message: GetPasswordAgePolicyResponse): unknown;
                create(base?: DeepPartial<GetPasswordAgePolicyResponse>): GetPasswordAgePolicyResponse;
                fromPartial(object: DeepPartial<GetPasswordAgePolicyResponse>): GetPasswordAgePolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** The password age policy is not used at the moment */
        readonly getDefaultPasswordAgePolicy: {
            readonly name: "GetDefaultPasswordAgePolicy";
            readonly requestType: {
                encode(_: GetDefaultPasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordAgePolicyRequest;
                fromJSON(_: any): GetDefaultPasswordAgePolicyRequest;
                toJSON(_: GetDefaultPasswordAgePolicyRequest): unknown;
                create(base?: DeepPartial<GetDefaultPasswordAgePolicyRequest>): GetDefaultPasswordAgePolicyRequest;
                fromPartial(_: DeepPartial<GetDefaultPasswordAgePolicyRequest>): GetDefaultPasswordAgePolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultPasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordAgePolicyResponse;
                fromJSON(object: any): GetDefaultPasswordAgePolicyResponse;
                toJSON(message: GetDefaultPasswordAgePolicyResponse): unknown;
                create(base?: DeepPartial<GetDefaultPasswordAgePolicyResponse>): GetDefaultPasswordAgePolicyResponse;
                fromPartial(object: DeepPartial<GetDefaultPasswordAgePolicyResponse>): GetDefaultPasswordAgePolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** The password age policy is not used at the moment */
        readonly addCustomPasswordAgePolicy: {
            readonly name: "AddCustomPasswordAgePolicy";
            readonly requestType: {
                encode(message: AddCustomPasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPasswordAgePolicyRequest;
                fromJSON(object: any): AddCustomPasswordAgePolicyRequest;
                toJSON(message: AddCustomPasswordAgePolicyRequest): unknown;
                create(base?: DeepPartial<AddCustomPasswordAgePolicyRequest>): AddCustomPasswordAgePolicyRequest;
                fromPartial(object: DeepPartial<AddCustomPasswordAgePolicyRequest>): AddCustomPasswordAgePolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddCustomPasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPasswordAgePolicyResponse;
                fromJSON(object: any): AddCustomPasswordAgePolicyResponse;
                toJSON(message: AddCustomPasswordAgePolicyResponse): unknown;
                create(base?: DeepPartial<AddCustomPasswordAgePolicyResponse>): AddCustomPasswordAgePolicyResponse;
                fromPartial(object: DeepPartial<AddCustomPasswordAgePolicyResponse>): AddCustomPasswordAgePolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** The password age policy is not used at the moment */
        readonly updateCustomPasswordAgePolicy: {
            readonly name: "UpdateCustomPasswordAgePolicy";
            readonly requestType: {
                encode(message: UpdateCustomPasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPasswordAgePolicyRequest;
                fromJSON(object: any): UpdateCustomPasswordAgePolicyRequest;
                toJSON(message: UpdateCustomPasswordAgePolicyRequest): unknown;
                create(base?: DeepPartial<UpdateCustomPasswordAgePolicyRequest>): UpdateCustomPasswordAgePolicyRequest;
                fromPartial(object: DeepPartial<UpdateCustomPasswordAgePolicyRequest>): UpdateCustomPasswordAgePolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCustomPasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPasswordAgePolicyResponse;
                fromJSON(object: any): UpdateCustomPasswordAgePolicyResponse;
                toJSON(message: UpdateCustomPasswordAgePolicyResponse): unknown;
                create(base?: DeepPartial<UpdateCustomPasswordAgePolicyResponse>): UpdateCustomPasswordAgePolicyResponse;
                fromPartial(object: DeepPartial<UpdateCustomPasswordAgePolicyResponse>): UpdateCustomPasswordAgePolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** The password age policy is not used at the moment */
        readonly resetPasswordAgePolicyToDefault: {
            readonly name: "ResetPasswordAgePolicyToDefault";
            readonly requestType: {
                encode(_: ResetPasswordAgePolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordAgePolicyToDefaultRequest;
                fromJSON(_: any): ResetPasswordAgePolicyToDefaultRequest;
                toJSON(_: ResetPasswordAgePolicyToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetPasswordAgePolicyToDefaultRequest>): ResetPasswordAgePolicyToDefaultRequest;
                fromPartial(_: DeepPartial<ResetPasswordAgePolicyToDefaultRequest>): ResetPasswordAgePolicyToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetPasswordAgePolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordAgePolicyToDefaultResponse;
                fromJSON(object: any): ResetPasswordAgePolicyToDefaultResponse;
                toJSON(message: ResetPasswordAgePolicyToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetPasswordAgePolicyToDefaultResponse>): ResetPasswordAgePolicyToDefaultResponse;
                fromPartial(object: DeepPartial<ResetPasswordAgePolicyToDefaultResponse>): ResetPasswordAgePolicyToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getLockoutPolicy: {
            readonly name: "GetLockoutPolicy";
            readonly requestType: {
                encode(_: GetLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutPolicyRequest;
                fromJSON(_: any): GetLockoutPolicyRequest;
                toJSON(_: GetLockoutPolicyRequest): unknown;
                create(base?: DeepPartial<GetLockoutPolicyRequest>): GetLockoutPolicyRequest;
                fromPartial(_: DeepPartial<GetLockoutPolicyRequest>): GetLockoutPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutPolicyResponse;
                fromJSON(object: any): GetLockoutPolicyResponse;
                toJSON(message: GetLockoutPolicyResponse): unknown;
                create(base?: DeepPartial<GetLockoutPolicyResponse>): GetLockoutPolicyResponse;
                fromPartial(object: DeepPartial<GetLockoutPolicyResponse>): GetLockoutPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLockoutPolicy: {
            readonly name: "GetDefaultLockoutPolicy";
            readonly requestType: {
                encode(_: GetDefaultLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLockoutPolicyRequest;
                fromJSON(_: any): GetDefaultLockoutPolicyRequest;
                toJSON(_: GetDefaultLockoutPolicyRequest): unknown;
                create(base?: DeepPartial<GetDefaultLockoutPolicyRequest>): GetDefaultLockoutPolicyRequest;
                fromPartial(_: DeepPartial<GetDefaultLockoutPolicyRequest>): GetDefaultLockoutPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLockoutPolicyResponse;
                fromJSON(object: any): GetDefaultLockoutPolicyResponse;
                toJSON(message: GetDefaultLockoutPolicyResponse): unknown;
                create(base?: DeepPartial<GetDefaultLockoutPolicyResponse>): GetDefaultLockoutPolicyResponse;
                fromPartial(object: DeepPartial<GetDefaultLockoutPolicyResponse>): GetDefaultLockoutPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomLockoutPolicy: {
            readonly name: "AddCustomLockoutPolicy";
            readonly requestType: {
                encode(message: AddCustomLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLockoutPolicyRequest;
                fromJSON(object: any): AddCustomLockoutPolicyRequest;
                toJSON(message: AddCustomLockoutPolicyRequest): unknown;
                create(base?: DeepPartial<AddCustomLockoutPolicyRequest>): AddCustomLockoutPolicyRequest;
                fromPartial(object: DeepPartial<AddCustomLockoutPolicyRequest>): AddCustomLockoutPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddCustomLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLockoutPolicyResponse;
                fromJSON(object: any): AddCustomLockoutPolicyResponse;
                toJSON(message: AddCustomLockoutPolicyResponse): unknown;
                create(base?: DeepPartial<AddCustomLockoutPolicyResponse>): AddCustomLockoutPolicyResponse;
                fromPartial(object: DeepPartial<AddCustomLockoutPolicyResponse>): AddCustomLockoutPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomLockoutPolicy: {
            readonly name: "UpdateCustomLockoutPolicy";
            readonly requestType: {
                encode(message: UpdateCustomLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLockoutPolicyRequest;
                fromJSON(object: any): UpdateCustomLockoutPolicyRequest;
                toJSON(message: UpdateCustomLockoutPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateCustomLockoutPolicyRequest>): UpdateCustomLockoutPolicyRequest;
                fromPartial(object: DeepPartial<UpdateCustomLockoutPolicyRequest>): UpdateCustomLockoutPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCustomLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLockoutPolicyResponse;
                fromJSON(object: any): UpdateCustomLockoutPolicyResponse;
                toJSON(message: UpdateCustomLockoutPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateCustomLockoutPolicyResponse>): UpdateCustomLockoutPolicyResponse;
                fromPartial(object: DeepPartial<UpdateCustomLockoutPolicyResponse>): UpdateCustomLockoutPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetLockoutPolicyToDefault: {
            readonly name: "ResetLockoutPolicyToDefault";
            readonly requestType: {
                encode(_: ResetLockoutPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetLockoutPolicyToDefaultRequest;
                fromJSON(_: any): ResetLockoutPolicyToDefaultRequest;
                toJSON(_: ResetLockoutPolicyToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetLockoutPolicyToDefaultRequest>): ResetLockoutPolicyToDefaultRequest;
                fromPartial(_: DeepPartial<ResetLockoutPolicyToDefaultRequest>): ResetLockoutPolicyToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetLockoutPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetLockoutPolicyToDefaultResponse;
                fromJSON(object: any): ResetLockoutPolicyToDefaultResponse;
                toJSON(message: ResetLockoutPolicyToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetLockoutPolicyToDefaultResponse>): ResetLockoutPolicyToDefaultResponse;
                fromPartial(object: DeepPartial<ResetLockoutPolicyToDefaultResponse>): ResetLockoutPolicyToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPrivacyPolicy: {
            readonly name: "GetPrivacyPolicy";
            readonly requestType: {
                encode(_: GetPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPrivacyPolicyRequest;
                fromJSON(_: any): GetPrivacyPolicyRequest;
                toJSON(_: GetPrivacyPolicyRequest): unknown;
                create(base?: DeepPartial<GetPrivacyPolicyRequest>): GetPrivacyPolicyRequest;
                fromPartial(_: DeepPartial<GetPrivacyPolicyRequest>): GetPrivacyPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPrivacyPolicyResponse;
                fromJSON(object: any): GetPrivacyPolicyResponse;
                toJSON(message: GetPrivacyPolicyResponse): unknown;
                create(base?: DeepPartial<GetPrivacyPolicyResponse>): GetPrivacyPolicyResponse;
                fromPartial(object: DeepPartial<GetPrivacyPolicyResponse>): GetPrivacyPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPrivacyPolicy: {
            readonly name: "GetDefaultPrivacyPolicy";
            readonly requestType: {
                encode(_: GetDefaultPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPrivacyPolicyRequest;
                fromJSON(_: any): GetDefaultPrivacyPolicyRequest;
                toJSON(_: GetDefaultPrivacyPolicyRequest): unknown;
                create(base?: DeepPartial<GetDefaultPrivacyPolicyRequest>): GetDefaultPrivacyPolicyRequest;
                fromPartial(_: DeepPartial<GetDefaultPrivacyPolicyRequest>): GetDefaultPrivacyPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPrivacyPolicyResponse;
                fromJSON(object: any): GetDefaultPrivacyPolicyResponse;
                toJSON(message: GetDefaultPrivacyPolicyResponse): unknown;
                create(base?: DeepPartial<GetDefaultPrivacyPolicyResponse>): GetDefaultPrivacyPolicyResponse;
                fromPartial(object: DeepPartial<GetDefaultPrivacyPolicyResponse>): GetDefaultPrivacyPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomPrivacyPolicy: {
            readonly name: "AddCustomPrivacyPolicy";
            readonly requestType: {
                encode(message: AddCustomPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPrivacyPolicyRequest;
                fromJSON(object: any): AddCustomPrivacyPolicyRequest;
                toJSON(message: AddCustomPrivacyPolicyRequest): unknown;
                create(base?: DeepPartial<AddCustomPrivacyPolicyRequest>): AddCustomPrivacyPolicyRequest;
                fromPartial(object: DeepPartial<AddCustomPrivacyPolicyRequest>): AddCustomPrivacyPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddCustomPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomPrivacyPolicyResponse;
                fromJSON(object: any): AddCustomPrivacyPolicyResponse;
                toJSON(message: AddCustomPrivacyPolicyResponse): unknown;
                create(base?: DeepPartial<AddCustomPrivacyPolicyResponse>): AddCustomPrivacyPolicyResponse;
                fromPartial(object: DeepPartial<AddCustomPrivacyPolicyResponse>): AddCustomPrivacyPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomPrivacyPolicy: {
            readonly name: "UpdateCustomPrivacyPolicy";
            readonly requestType: {
                encode(message: UpdateCustomPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPrivacyPolicyRequest;
                fromJSON(object: any): UpdateCustomPrivacyPolicyRequest;
                toJSON(message: UpdateCustomPrivacyPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateCustomPrivacyPolicyRequest>): UpdateCustomPrivacyPolicyRequest;
                fromPartial(object: DeepPartial<UpdateCustomPrivacyPolicyRequest>): UpdateCustomPrivacyPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCustomPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomPrivacyPolicyResponse;
                fromJSON(object: any): UpdateCustomPrivacyPolicyResponse;
                toJSON(message: UpdateCustomPrivacyPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateCustomPrivacyPolicyResponse>): UpdateCustomPrivacyPolicyResponse;
                fromPartial(object: DeepPartial<UpdateCustomPrivacyPolicyResponse>): UpdateCustomPrivacyPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetPrivacyPolicyToDefault: {
            readonly name: "ResetPrivacyPolicyToDefault";
            readonly requestType: {
                encode(_: ResetPrivacyPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetPrivacyPolicyToDefaultRequest;
                fromJSON(_: any): ResetPrivacyPolicyToDefaultRequest;
                toJSON(_: ResetPrivacyPolicyToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetPrivacyPolicyToDefaultRequest>): ResetPrivacyPolicyToDefaultRequest;
                fromPartial(_: DeepPartial<ResetPrivacyPolicyToDefaultRequest>): ResetPrivacyPolicyToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetPrivacyPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetPrivacyPolicyToDefaultResponse;
                fromJSON(object: any): ResetPrivacyPolicyToDefaultResponse;
                toJSON(message: ResetPrivacyPolicyToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetPrivacyPolicyToDefaultResponse>): ResetPrivacyPolicyToDefaultResponse;
                fromPartial(object: DeepPartial<ResetPrivacyPolicyToDefaultResponse>): ResetPrivacyPolicyToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getNotificationPolicy: {
            readonly name: "GetNotificationPolicy";
            readonly requestType: {
                encode(_: GetNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationPolicyRequest;
                fromJSON(_: any): GetNotificationPolicyRequest;
                toJSON(_: GetNotificationPolicyRequest): unknown;
                create(base?: DeepPartial<GetNotificationPolicyRequest>): GetNotificationPolicyRequest;
                fromPartial(_: DeepPartial<GetNotificationPolicyRequest>): GetNotificationPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationPolicyResponse;
                fromJSON(object: any): GetNotificationPolicyResponse;
                toJSON(message: GetNotificationPolicyResponse): unknown;
                create(base?: DeepPartial<GetNotificationPolicyResponse>): GetNotificationPolicyResponse;
                fromPartial(object: DeepPartial<GetNotificationPolicyResponse>): GetNotificationPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultNotificationPolicy: {
            readonly name: "GetDefaultNotificationPolicy";
            readonly requestType: {
                encode(_: GetDefaultNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultNotificationPolicyRequest;
                fromJSON(_: any): GetDefaultNotificationPolicyRequest;
                toJSON(_: GetDefaultNotificationPolicyRequest): unknown;
                create(base?: DeepPartial<GetDefaultNotificationPolicyRequest>): GetDefaultNotificationPolicyRequest;
                fromPartial(_: DeepPartial<GetDefaultNotificationPolicyRequest>): GetDefaultNotificationPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultNotificationPolicyResponse;
                fromJSON(object: any): GetDefaultNotificationPolicyResponse;
                toJSON(message: GetDefaultNotificationPolicyResponse): unknown;
                create(base?: DeepPartial<GetDefaultNotificationPolicyResponse>): GetDefaultNotificationPolicyResponse;
                fromPartial(object: DeepPartial<GetDefaultNotificationPolicyResponse>): GetDefaultNotificationPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomNotificationPolicy: {
            readonly name: "AddCustomNotificationPolicy";
            readonly requestType: {
                encode(message: AddCustomNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomNotificationPolicyRequest;
                fromJSON(object: any): AddCustomNotificationPolicyRequest;
                toJSON(message: AddCustomNotificationPolicyRequest): unknown;
                create(base?: DeepPartial<AddCustomNotificationPolicyRequest>): AddCustomNotificationPolicyRequest;
                fromPartial(object: DeepPartial<AddCustomNotificationPolicyRequest>): AddCustomNotificationPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddCustomNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomNotificationPolicyResponse;
                fromJSON(object: any): AddCustomNotificationPolicyResponse;
                toJSON(message: AddCustomNotificationPolicyResponse): unknown;
                create(base?: DeepPartial<AddCustomNotificationPolicyResponse>): AddCustomNotificationPolicyResponse;
                fromPartial(object: DeepPartial<AddCustomNotificationPolicyResponse>): AddCustomNotificationPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomNotificationPolicy: {
            readonly name: "UpdateCustomNotificationPolicy";
            readonly requestType: {
                encode(message: UpdateCustomNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomNotificationPolicyRequest;
                fromJSON(object: any): UpdateCustomNotificationPolicyRequest;
                toJSON(message: UpdateCustomNotificationPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateCustomNotificationPolicyRequest>): UpdateCustomNotificationPolicyRequest;
                fromPartial(object: DeepPartial<UpdateCustomNotificationPolicyRequest>): UpdateCustomNotificationPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCustomNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomNotificationPolicyResponse;
                fromJSON(object: any): UpdateCustomNotificationPolicyResponse;
                toJSON(message: UpdateCustomNotificationPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateCustomNotificationPolicyResponse>): UpdateCustomNotificationPolicyResponse;
                fromPartial(object: DeepPartial<UpdateCustomNotificationPolicyResponse>): UpdateCustomNotificationPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetNotificationPolicyToDefault: {
            readonly name: "ResetNotificationPolicyToDefault";
            readonly requestType: {
                encode(_: ResetNotificationPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetNotificationPolicyToDefaultRequest;
                fromJSON(_: any): ResetNotificationPolicyToDefaultRequest;
                toJSON(_: ResetNotificationPolicyToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetNotificationPolicyToDefaultRequest>): ResetNotificationPolicyToDefaultRequest;
                fromPartial(_: DeepPartial<ResetNotificationPolicyToDefaultRequest>): ResetNotificationPolicyToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetNotificationPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetNotificationPolicyToDefaultResponse;
                fromJSON(object: any): ResetNotificationPolicyToDefaultResponse;
                toJSON(message: ResetNotificationPolicyToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetNotificationPolicyToDefaultResponse>): ResetNotificationPolicyToDefaultResponse;
                fromPartial(object: DeepPartial<ResetNotificationPolicyToDefaultResponse>): ResetNotificationPolicyToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getLabelPolicy: {
            readonly name: "GetLabelPolicy";
            readonly requestType: {
                encode(_: GetLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelPolicyRequest;
                fromJSON(_: any): GetLabelPolicyRequest;
                toJSON(_: GetLabelPolicyRequest): unknown;
                create(base?: DeepPartial<GetLabelPolicyRequest>): GetLabelPolicyRequest;
                fromPartial(_: DeepPartial<GetLabelPolicyRequest>): GetLabelPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelPolicyResponse;
                fromJSON(object: any): GetLabelPolicyResponse;
                toJSON(message: GetLabelPolicyResponse): unknown;
                create(base?: DeepPartial<GetLabelPolicyResponse>): GetLabelPolicyResponse;
                fromPartial(object: DeepPartial<GetLabelPolicyResponse>): GetLabelPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPreviewLabelPolicy: {
            readonly name: "GetPreviewLabelPolicy";
            readonly requestType: {
                encode(_: GetPreviewLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPreviewLabelPolicyRequest;
                fromJSON(_: any): GetPreviewLabelPolicyRequest;
                toJSON(_: GetPreviewLabelPolicyRequest): unknown;
                create(base?: DeepPartial<GetPreviewLabelPolicyRequest>): GetPreviewLabelPolicyRequest;
                fromPartial(_: DeepPartial<GetPreviewLabelPolicyRequest>): GetPreviewLabelPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPreviewLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPreviewLabelPolicyResponse;
                fromJSON(object: any): GetPreviewLabelPolicyResponse;
                toJSON(message: GetPreviewLabelPolicyResponse): unknown;
                create(base?: DeepPartial<GetPreviewLabelPolicyResponse>): GetPreviewLabelPolicyResponse;
                fromPartial(object: DeepPartial<GetPreviewLabelPolicyResponse>): GetPreviewLabelPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLabelPolicy: {
            readonly name: "GetDefaultLabelPolicy";
            readonly requestType: {
                encode(_: GetDefaultLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLabelPolicyRequest;
                fromJSON(_: any): GetDefaultLabelPolicyRequest;
                toJSON(_: GetDefaultLabelPolicyRequest): unknown;
                create(base?: DeepPartial<GetDefaultLabelPolicyRequest>): GetDefaultLabelPolicyRequest;
                fromPartial(_: DeepPartial<GetDefaultLabelPolicyRequest>): GetDefaultLabelPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLabelPolicyResponse;
                fromJSON(object: any): GetDefaultLabelPolicyResponse;
                toJSON(message: GetDefaultLabelPolicyResponse): unknown;
                create(base?: DeepPartial<GetDefaultLabelPolicyResponse>): GetDefaultLabelPolicyResponse;
                fromPartial(object: DeepPartial<GetDefaultLabelPolicyResponse>): GetDefaultLabelPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomLabelPolicy: {
            readonly name: "AddCustomLabelPolicy";
            readonly requestType: {
                encode(message: AddCustomLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLabelPolicyRequest;
                fromJSON(object: any): AddCustomLabelPolicyRequest;
                toJSON(message: AddCustomLabelPolicyRequest): unknown;
                create(base?: DeepPartial<AddCustomLabelPolicyRequest>): AddCustomLabelPolicyRequest;
                fromPartial(object: DeepPartial<AddCustomLabelPolicyRequest>): AddCustomLabelPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddCustomLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomLabelPolicyResponse;
                fromJSON(object: any): AddCustomLabelPolicyResponse;
                toJSON(message: AddCustomLabelPolicyResponse): unknown;
                create(base?: DeepPartial<AddCustomLabelPolicyResponse>): AddCustomLabelPolicyResponse;
                fromPartial(object: DeepPartial<AddCustomLabelPolicyResponse>): AddCustomLabelPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomLabelPolicy: {
            readonly name: "UpdateCustomLabelPolicy";
            readonly requestType: {
                encode(message: UpdateCustomLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLabelPolicyRequest;
                fromJSON(object: any): UpdateCustomLabelPolicyRequest;
                toJSON(message: UpdateCustomLabelPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateCustomLabelPolicyRequest>): UpdateCustomLabelPolicyRequest;
                fromPartial(object: DeepPartial<UpdateCustomLabelPolicyRequest>): UpdateCustomLabelPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCustomLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomLabelPolicyResponse;
                fromJSON(object: any): UpdateCustomLabelPolicyResponse;
                toJSON(message: UpdateCustomLabelPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateCustomLabelPolicyResponse>): UpdateCustomLabelPolicyResponse;
                fromPartial(object: DeepPartial<UpdateCustomLabelPolicyResponse>): UpdateCustomLabelPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateCustomLabelPolicy: {
            readonly name: "ActivateCustomLabelPolicy";
            readonly requestType: {
                encode(_: ActivateCustomLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ActivateCustomLabelPolicyRequest;
                fromJSON(_: any): ActivateCustomLabelPolicyRequest;
                toJSON(_: ActivateCustomLabelPolicyRequest): unknown;
                create(base?: DeepPartial<ActivateCustomLabelPolicyRequest>): ActivateCustomLabelPolicyRequest;
                fromPartial(_: DeepPartial<ActivateCustomLabelPolicyRequest>): ActivateCustomLabelPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ActivateCustomLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ActivateCustomLabelPolicyResponse;
                fromJSON(object: any): ActivateCustomLabelPolicyResponse;
                toJSON(message: ActivateCustomLabelPolicyResponse): unknown;
                create(base?: DeepPartial<ActivateCustomLabelPolicyResponse>): ActivateCustomLabelPolicyResponse;
                fromPartial(object: DeepPartial<ActivateCustomLabelPolicyResponse>): ActivateCustomLabelPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyLogo: {
            readonly name: "RemoveCustomLabelPolicyLogo";
            readonly requestType: {
                encode(_: RemoveCustomLabelPolicyLogoRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyLogoRequest;
                fromJSON(_: any): RemoveCustomLabelPolicyLogoRequest;
                toJSON(_: RemoveCustomLabelPolicyLogoRequest): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyLogoRequest>): RemoveCustomLabelPolicyLogoRequest;
                fromPartial(_: DeepPartial<RemoveCustomLabelPolicyLogoRequest>): RemoveCustomLabelPolicyLogoRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveCustomLabelPolicyLogoResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyLogoResponse;
                fromJSON(object: any): RemoveCustomLabelPolicyLogoResponse;
                toJSON(message: RemoveCustomLabelPolicyLogoResponse): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyLogoResponse>): RemoveCustomLabelPolicyLogoResponse;
                fromPartial(object: DeepPartial<RemoveCustomLabelPolicyLogoResponse>): RemoveCustomLabelPolicyLogoResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyLogoDark: {
            readonly name: "RemoveCustomLabelPolicyLogoDark";
            readonly requestType: {
                encode(_: RemoveCustomLabelPolicyLogoDarkRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyLogoDarkRequest;
                fromJSON(_: any): RemoveCustomLabelPolicyLogoDarkRequest;
                toJSON(_: RemoveCustomLabelPolicyLogoDarkRequest): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyLogoDarkRequest>): RemoveCustomLabelPolicyLogoDarkRequest;
                fromPartial(_: DeepPartial<RemoveCustomLabelPolicyLogoDarkRequest>): RemoveCustomLabelPolicyLogoDarkRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveCustomLabelPolicyLogoDarkResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyLogoDarkResponse;
                fromJSON(object: any): RemoveCustomLabelPolicyLogoDarkResponse;
                toJSON(message: RemoveCustomLabelPolicyLogoDarkResponse): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyLogoDarkResponse>): RemoveCustomLabelPolicyLogoDarkResponse;
                fromPartial(object: DeepPartial<RemoveCustomLabelPolicyLogoDarkResponse>): RemoveCustomLabelPolicyLogoDarkResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyIcon: {
            readonly name: "RemoveCustomLabelPolicyIcon";
            readonly requestType: {
                encode(_: RemoveCustomLabelPolicyIconRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyIconRequest;
                fromJSON(_: any): RemoveCustomLabelPolicyIconRequest;
                toJSON(_: RemoveCustomLabelPolicyIconRequest): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyIconRequest>): RemoveCustomLabelPolicyIconRequest;
                fromPartial(_: DeepPartial<RemoveCustomLabelPolicyIconRequest>): RemoveCustomLabelPolicyIconRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveCustomLabelPolicyIconResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyIconResponse;
                fromJSON(object: any): RemoveCustomLabelPolicyIconResponse;
                toJSON(message: RemoveCustomLabelPolicyIconResponse): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyIconResponse>): RemoveCustomLabelPolicyIconResponse;
                fromPartial(object: DeepPartial<RemoveCustomLabelPolicyIconResponse>): RemoveCustomLabelPolicyIconResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyIconDark: {
            readonly name: "RemoveCustomLabelPolicyIconDark";
            readonly requestType: {
                encode(_: RemoveCustomLabelPolicyIconDarkRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyIconDarkRequest;
                fromJSON(_: any): RemoveCustomLabelPolicyIconDarkRequest;
                toJSON(_: RemoveCustomLabelPolicyIconDarkRequest): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyIconDarkRequest>): RemoveCustomLabelPolicyIconDarkRequest;
                fromPartial(_: DeepPartial<RemoveCustomLabelPolicyIconDarkRequest>): RemoveCustomLabelPolicyIconDarkRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveCustomLabelPolicyIconDarkResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyIconDarkResponse;
                fromJSON(object: any): RemoveCustomLabelPolicyIconDarkResponse;
                toJSON(message: RemoveCustomLabelPolicyIconDarkResponse): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyIconDarkResponse>): RemoveCustomLabelPolicyIconDarkResponse;
                fromPartial(object: DeepPartial<RemoveCustomLabelPolicyIconDarkResponse>): RemoveCustomLabelPolicyIconDarkResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyFont: {
            readonly name: "RemoveCustomLabelPolicyFont";
            readonly requestType: {
                encode(_: RemoveCustomLabelPolicyFontRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyFontRequest;
                fromJSON(_: any): RemoveCustomLabelPolicyFontRequest;
                toJSON(_: RemoveCustomLabelPolicyFontRequest): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyFontRequest>): RemoveCustomLabelPolicyFontRequest;
                fromPartial(_: DeepPartial<RemoveCustomLabelPolicyFontRequest>): RemoveCustomLabelPolicyFontRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveCustomLabelPolicyFontResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveCustomLabelPolicyFontResponse;
                fromJSON(object: any): RemoveCustomLabelPolicyFontResponse;
                toJSON(message: RemoveCustomLabelPolicyFontResponse): unknown;
                create(base?: DeepPartial<RemoveCustomLabelPolicyFontResponse>): RemoveCustomLabelPolicyFontResponse;
                fromPartial(object: DeepPartial<RemoveCustomLabelPolicyFontResponse>): RemoveCustomLabelPolicyFontResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetLabelPolicyToDefault: {
            readonly name: "ResetLabelPolicyToDefault";
            readonly requestType: {
                encode(_: ResetLabelPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetLabelPolicyToDefaultRequest;
                fromJSON(_: any): ResetLabelPolicyToDefaultRequest;
                toJSON(_: ResetLabelPolicyToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetLabelPolicyToDefaultRequest>): ResetLabelPolicyToDefaultRequest;
                fromPartial(_: DeepPartial<ResetLabelPolicyToDefaultRequest>): ResetLabelPolicyToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetLabelPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetLabelPolicyToDefaultResponse;
                fromJSON(object: any): ResetLabelPolicyToDefaultResponse;
                toJSON(message: ResetLabelPolicyToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetLabelPolicyToDefaultResponse>): ResetLabelPolicyToDefaultResponse;
                fromPartial(object: DeepPartial<ResetLabelPolicyToDefaultResponse>): ResetLabelPolicyToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomInitMessageText: {
            readonly name: "GetCustomInitMessageText";
            readonly requestType: {
                encode(message: GetCustomInitMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomInitMessageTextRequest;
                fromJSON(object: any): GetCustomInitMessageTextRequest;
                toJSON(message: GetCustomInitMessageTextRequest): unknown;
                create(base?: DeepPartial<GetCustomInitMessageTextRequest>): GetCustomInitMessageTextRequest;
                fromPartial(object: DeepPartial<GetCustomInitMessageTextRequest>): GetCustomInitMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomInitMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomInitMessageTextResponse;
                fromJSON(object: any): GetCustomInitMessageTextResponse;
                toJSON(message: GetCustomInitMessageTextResponse): unknown;
                create(base?: DeepPartial<GetCustomInitMessageTextResponse>): GetCustomInitMessageTextResponse;
                fromPartial(object: DeepPartial<GetCustomInitMessageTextResponse>): GetCustomInitMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultInitMessageText: {
            readonly name: "GetDefaultInitMessageText";
            readonly requestType: {
                encode(message: GetDefaultInitMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultInitMessageTextRequest;
                fromJSON(object: any): GetDefaultInitMessageTextRequest;
                toJSON(message: GetDefaultInitMessageTextRequest): unknown;
                create(base?: DeepPartial<GetDefaultInitMessageTextRequest>): GetDefaultInitMessageTextRequest;
                fromPartial(object: DeepPartial<GetDefaultInitMessageTextRequest>): GetDefaultInitMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultInitMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultInitMessageTextResponse;
                fromJSON(object: any): GetDefaultInitMessageTextResponse;
                toJSON(message: GetDefaultInitMessageTextResponse): unknown;
                create(base?: DeepPartial<GetDefaultInitMessageTextResponse>): GetDefaultInitMessageTextResponse;
                fromPartial(object: DeepPartial<GetDefaultInitMessageTextResponse>): GetDefaultInitMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomInitMessageText: {
            readonly name: "SetCustomInitMessageText";
            readonly requestType: {
                encode(message: SetCustomInitMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomInitMessageTextRequest;
                fromJSON(object: any): SetCustomInitMessageTextRequest;
                toJSON(message: SetCustomInitMessageTextRequest): unknown;
                create(base?: DeepPartial<SetCustomInitMessageTextRequest>): SetCustomInitMessageTextRequest;
                fromPartial(object: DeepPartial<SetCustomInitMessageTextRequest>): SetCustomInitMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomInitMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomInitMessageTextResponse;
                fromJSON(object: any): SetCustomInitMessageTextResponse;
                toJSON(message: SetCustomInitMessageTextResponse): unknown;
                create(base?: DeepPartial<SetCustomInitMessageTextResponse>): SetCustomInitMessageTextResponse;
                fromPartial(object: DeepPartial<SetCustomInitMessageTextResponse>): SetCustomInitMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomInitMessageTextToDefault: {
            readonly name: "ResetCustomInitMessageTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomInitMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomInitMessageTextToDefaultRequest;
                fromJSON(object: any): ResetCustomInitMessageTextToDefaultRequest;
                toJSON(message: ResetCustomInitMessageTextToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomInitMessageTextToDefaultRequest>): ResetCustomInitMessageTextToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomInitMessageTextToDefaultRequest>): ResetCustomInitMessageTextToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomInitMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomInitMessageTextToDefaultResponse;
                fromJSON(object: any): ResetCustomInitMessageTextToDefaultResponse;
                toJSON(message: ResetCustomInitMessageTextToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomInitMessageTextToDefaultResponse>): ResetCustomInitMessageTextToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomInitMessageTextToDefaultResponse>): ResetCustomInitMessageTextToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomPasswordResetMessageText: {
            readonly name: "GetCustomPasswordResetMessageText";
            readonly requestType: {
                encode(message: GetCustomPasswordResetMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordResetMessageTextRequest;
                fromJSON(object: any): GetCustomPasswordResetMessageTextRequest;
                toJSON(message: GetCustomPasswordResetMessageTextRequest): unknown;
                create(base?: DeepPartial<GetCustomPasswordResetMessageTextRequest>): GetCustomPasswordResetMessageTextRequest;
                fromPartial(object: DeepPartial<GetCustomPasswordResetMessageTextRequest>): GetCustomPasswordResetMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomPasswordResetMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordResetMessageTextResponse;
                fromJSON(object: any): GetCustomPasswordResetMessageTextResponse;
                toJSON(message: GetCustomPasswordResetMessageTextResponse): unknown;
                create(base?: DeepPartial<GetCustomPasswordResetMessageTextResponse>): GetCustomPasswordResetMessageTextResponse;
                fromPartial(object: DeepPartial<GetCustomPasswordResetMessageTextResponse>): GetCustomPasswordResetMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPasswordResetMessageText: {
            readonly name: "GetDefaultPasswordResetMessageText";
            readonly requestType: {
                encode(message: GetDefaultPasswordResetMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordResetMessageTextRequest;
                fromJSON(object: any): GetDefaultPasswordResetMessageTextRequest;
                toJSON(message: GetDefaultPasswordResetMessageTextRequest): unknown;
                create(base?: DeepPartial<GetDefaultPasswordResetMessageTextRequest>): GetDefaultPasswordResetMessageTextRequest;
                fromPartial(object: DeepPartial<GetDefaultPasswordResetMessageTextRequest>): GetDefaultPasswordResetMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultPasswordResetMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordResetMessageTextResponse;
                fromJSON(object: any): GetDefaultPasswordResetMessageTextResponse;
                toJSON(message: GetDefaultPasswordResetMessageTextResponse): unknown;
                create(base?: DeepPartial<GetDefaultPasswordResetMessageTextResponse>): GetDefaultPasswordResetMessageTextResponse;
                fromPartial(object: DeepPartial<GetDefaultPasswordResetMessageTextResponse>): GetDefaultPasswordResetMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomPasswordResetMessageText: {
            readonly name: "SetCustomPasswordResetMessageText";
            readonly requestType: {
                encode(message: SetCustomPasswordResetMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordResetMessageTextRequest;
                fromJSON(object: any): SetCustomPasswordResetMessageTextRequest;
                toJSON(message: SetCustomPasswordResetMessageTextRequest): unknown;
                create(base?: DeepPartial<SetCustomPasswordResetMessageTextRequest>): SetCustomPasswordResetMessageTextRequest;
                fromPartial(object: DeepPartial<SetCustomPasswordResetMessageTextRequest>): SetCustomPasswordResetMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomPasswordResetMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordResetMessageTextResponse;
                fromJSON(object: any): SetCustomPasswordResetMessageTextResponse;
                toJSON(message: SetCustomPasswordResetMessageTextResponse): unknown;
                create(base?: DeepPartial<SetCustomPasswordResetMessageTextResponse>): SetCustomPasswordResetMessageTextResponse;
                fromPartial(object: DeepPartial<SetCustomPasswordResetMessageTextResponse>): SetCustomPasswordResetMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomPasswordResetMessageTextToDefault: {
            readonly name: "ResetCustomPasswordResetMessageTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomPasswordResetMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordResetMessageTextToDefaultRequest;
                fromJSON(object: any): ResetCustomPasswordResetMessageTextToDefaultRequest;
                toJSON(message: ResetCustomPasswordResetMessageTextToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultRequest>): ResetCustomPasswordResetMessageTextToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultRequest>): ResetCustomPasswordResetMessageTextToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomPasswordResetMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordResetMessageTextToDefaultResponse;
                fromJSON(object: any): ResetCustomPasswordResetMessageTextToDefaultResponse;
                toJSON(message: ResetCustomPasswordResetMessageTextToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultResponse>): ResetCustomPasswordResetMessageTextToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultResponse>): ResetCustomPasswordResetMessageTextToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomVerifyEmailMessageText: {
            readonly name: "GetCustomVerifyEmailMessageText";
            readonly requestType: {
                encode(message: GetCustomVerifyEmailMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyEmailMessageTextRequest;
                fromJSON(object: any): GetCustomVerifyEmailMessageTextRequest;
                toJSON(message: GetCustomVerifyEmailMessageTextRequest): unknown;
                create(base?: DeepPartial<GetCustomVerifyEmailMessageTextRequest>): GetCustomVerifyEmailMessageTextRequest;
                fromPartial(object: DeepPartial<GetCustomVerifyEmailMessageTextRequest>): GetCustomVerifyEmailMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomVerifyEmailMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyEmailMessageTextResponse;
                fromJSON(object: any): GetCustomVerifyEmailMessageTextResponse;
                toJSON(message: GetCustomVerifyEmailMessageTextResponse): unknown;
                create(base?: DeepPartial<GetCustomVerifyEmailMessageTextResponse>): GetCustomVerifyEmailMessageTextResponse;
                fromPartial(object: DeepPartial<GetCustomVerifyEmailMessageTextResponse>): GetCustomVerifyEmailMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultVerifyEmailMessageText: {
            readonly name: "GetDefaultVerifyEmailMessageText";
            readonly requestType: {
                encode(message: GetDefaultVerifyEmailMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyEmailMessageTextRequest;
                fromJSON(object: any): GetDefaultVerifyEmailMessageTextRequest;
                toJSON(message: GetDefaultVerifyEmailMessageTextRequest): unknown;
                create(base?: DeepPartial<GetDefaultVerifyEmailMessageTextRequest>): GetDefaultVerifyEmailMessageTextRequest;
                fromPartial(object: DeepPartial<GetDefaultVerifyEmailMessageTextRequest>): GetDefaultVerifyEmailMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultVerifyEmailMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyEmailMessageTextResponse;
                fromJSON(object: any): GetDefaultVerifyEmailMessageTextResponse;
                toJSON(message: GetDefaultVerifyEmailMessageTextResponse): unknown;
                create(base?: DeepPartial<GetDefaultVerifyEmailMessageTextResponse>): GetDefaultVerifyEmailMessageTextResponse;
                fromPartial(object: DeepPartial<GetDefaultVerifyEmailMessageTextResponse>): GetDefaultVerifyEmailMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomVerifyEmailMessageText: {
            readonly name: "SetCustomVerifyEmailMessageText";
            readonly requestType: {
                encode(message: SetCustomVerifyEmailMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyEmailMessageTextRequest;
                fromJSON(object: any): SetCustomVerifyEmailMessageTextRequest;
                toJSON(message: SetCustomVerifyEmailMessageTextRequest): unknown;
                create(base?: DeepPartial<SetCustomVerifyEmailMessageTextRequest>): SetCustomVerifyEmailMessageTextRequest;
                fromPartial(object: DeepPartial<SetCustomVerifyEmailMessageTextRequest>): SetCustomVerifyEmailMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomVerifyEmailMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyEmailMessageTextResponse;
                fromJSON(object: any): SetCustomVerifyEmailMessageTextResponse;
                toJSON(message: SetCustomVerifyEmailMessageTextResponse): unknown;
                create(base?: DeepPartial<SetCustomVerifyEmailMessageTextResponse>): SetCustomVerifyEmailMessageTextResponse;
                fromPartial(object: DeepPartial<SetCustomVerifyEmailMessageTextResponse>): SetCustomVerifyEmailMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomVerifyEmailMessageTextToDefault: {
            readonly name: "ResetCustomVerifyEmailMessageTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomVerifyEmailMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyEmailMessageTextToDefaultRequest;
                fromJSON(object: any): ResetCustomVerifyEmailMessageTextToDefaultRequest;
                toJSON(message: ResetCustomVerifyEmailMessageTextToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultRequest>): ResetCustomVerifyEmailMessageTextToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultRequest>): ResetCustomVerifyEmailMessageTextToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomVerifyEmailMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyEmailMessageTextToDefaultResponse;
                fromJSON(object: any): ResetCustomVerifyEmailMessageTextToDefaultResponse;
                toJSON(message: ResetCustomVerifyEmailMessageTextToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultResponse>): ResetCustomVerifyEmailMessageTextToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultResponse>): ResetCustomVerifyEmailMessageTextToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomVerifyPhoneMessageText: {
            readonly name: "GetCustomVerifyPhoneMessageText";
            readonly requestType: {
                encode(message: GetCustomVerifyPhoneMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyPhoneMessageTextRequest;
                fromJSON(object: any): GetCustomVerifyPhoneMessageTextRequest;
                toJSON(message: GetCustomVerifyPhoneMessageTextRequest): unknown;
                create(base?: DeepPartial<GetCustomVerifyPhoneMessageTextRequest>): GetCustomVerifyPhoneMessageTextRequest;
                fromPartial(object: DeepPartial<GetCustomVerifyPhoneMessageTextRequest>): GetCustomVerifyPhoneMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomVerifyPhoneMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyPhoneMessageTextResponse;
                fromJSON(object: any): GetCustomVerifyPhoneMessageTextResponse;
                toJSON(message: GetCustomVerifyPhoneMessageTextResponse): unknown;
                create(base?: DeepPartial<GetCustomVerifyPhoneMessageTextResponse>): GetCustomVerifyPhoneMessageTextResponse;
                fromPartial(object: DeepPartial<GetCustomVerifyPhoneMessageTextResponse>): GetCustomVerifyPhoneMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultVerifyPhoneMessageText: {
            readonly name: "GetDefaultVerifyPhoneMessageText";
            readonly requestType: {
                encode(message: GetDefaultVerifyPhoneMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyPhoneMessageTextRequest;
                fromJSON(object: any): GetDefaultVerifyPhoneMessageTextRequest;
                toJSON(message: GetDefaultVerifyPhoneMessageTextRequest): unknown;
                create(base?: DeepPartial<GetDefaultVerifyPhoneMessageTextRequest>): GetDefaultVerifyPhoneMessageTextRequest;
                fromPartial(object: DeepPartial<GetDefaultVerifyPhoneMessageTextRequest>): GetDefaultVerifyPhoneMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultVerifyPhoneMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyPhoneMessageTextResponse;
                fromJSON(object: any): GetDefaultVerifyPhoneMessageTextResponse;
                toJSON(message: GetDefaultVerifyPhoneMessageTextResponse): unknown;
                create(base?: DeepPartial<GetDefaultVerifyPhoneMessageTextResponse>): GetDefaultVerifyPhoneMessageTextResponse;
                fromPartial(object: DeepPartial<GetDefaultVerifyPhoneMessageTextResponse>): GetDefaultVerifyPhoneMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomVerifyPhoneMessageText: {
            readonly name: "SetCustomVerifyPhoneMessageText";
            readonly requestType: {
                encode(message: SetCustomVerifyPhoneMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyPhoneMessageTextRequest;
                fromJSON(object: any): SetCustomVerifyPhoneMessageTextRequest;
                toJSON(message: SetCustomVerifyPhoneMessageTextRequest): unknown;
                create(base?: DeepPartial<SetCustomVerifyPhoneMessageTextRequest>): SetCustomVerifyPhoneMessageTextRequest;
                fromPartial(object: DeepPartial<SetCustomVerifyPhoneMessageTextRequest>): SetCustomVerifyPhoneMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomVerifyPhoneMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyPhoneMessageTextResponse;
                fromJSON(object: any): SetCustomVerifyPhoneMessageTextResponse;
                toJSON(message: SetCustomVerifyPhoneMessageTextResponse): unknown;
                create(base?: DeepPartial<SetCustomVerifyPhoneMessageTextResponse>): SetCustomVerifyPhoneMessageTextResponse;
                fromPartial(object: DeepPartial<SetCustomVerifyPhoneMessageTextResponse>): SetCustomVerifyPhoneMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomVerifyPhoneMessageTextToDefault: {
            readonly name: "ResetCustomVerifyPhoneMessageTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomVerifyPhoneMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyPhoneMessageTextToDefaultRequest;
                fromJSON(object: any): ResetCustomVerifyPhoneMessageTextToDefaultRequest;
                toJSON(message: ResetCustomVerifyPhoneMessageTextToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultRequest>): ResetCustomVerifyPhoneMessageTextToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultRequest>): ResetCustomVerifyPhoneMessageTextToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomVerifyPhoneMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyPhoneMessageTextToDefaultResponse;
                fromJSON(object: any): ResetCustomVerifyPhoneMessageTextToDefaultResponse;
                toJSON(message: ResetCustomVerifyPhoneMessageTextToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultResponse>): ResetCustomVerifyPhoneMessageTextToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultResponse>): ResetCustomVerifyPhoneMessageTextToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomVerifySMSOTPMessageText: {
            readonly name: "GetCustomVerifySMSOTPMessageText";
            readonly requestType: {
                encode(message: GetCustomVerifySMSOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifySMSOTPMessageTextRequest;
                fromJSON(object: any): GetCustomVerifySMSOTPMessageTextRequest;
                toJSON(message: GetCustomVerifySMSOTPMessageTextRequest): unknown;
                create(base?: DeepPartial<GetCustomVerifySMSOTPMessageTextRequest>): GetCustomVerifySMSOTPMessageTextRequest;
                fromPartial(object: DeepPartial<GetCustomVerifySMSOTPMessageTextRequest>): GetCustomVerifySMSOTPMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomVerifySMSOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifySMSOTPMessageTextResponse;
                fromJSON(object: any): GetCustomVerifySMSOTPMessageTextResponse;
                toJSON(message: GetCustomVerifySMSOTPMessageTextResponse): unknown;
                create(base?: DeepPartial<GetCustomVerifySMSOTPMessageTextResponse>): GetCustomVerifySMSOTPMessageTextResponse;
                fromPartial(object: DeepPartial<GetCustomVerifySMSOTPMessageTextResponse>): GetCustomVerifySMSOTPMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultVerifySMSOTPMessageText: {
            readonly name: "GetDefaultVerifySMSOTPMessageText";
            readonly requestType: {
                encode(message: GetDefaultVerifySMSOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifySMSOTPMessageTextRequest;
                fromJSON(object: any): GetDefaultVerifySMSOTPMessageTextRequest;
                toJSON(message: GetDefaultVerifySMSOTPMessageTextRequest): unknown;
                create(base?: DeepPartial<GetDefaultVerifySMSOTPMessageTextRequest>): GetDefaultVerifySMSOTPMessageTextRequest;
                fromPartial(object: DeepPartial<GetDefaultVerifySMSOTPMessageTextRequest>): GetDefaultVerifySMSOTPMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultVerifySMSOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifySMSOTPMessageTextResponse;
                fromJSON(object: any): GetDefaultVerifySMSOTPMessageTextResponse;
                toJSON(message: GetDefaultVerifySMSOTPMessageTextResponse): unknown;
                create(base?: DeepPartial<GetDefaultVerifySMSOTPMessageTextResponse>): GetDefaultVerifySMSOTPMessageTextResponse;
                fromPartial(object: DeepPartial<GetDefaultVerifySMSOTPMessageTextResponse>): GetDefaultVerifySMSOTPMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomVerifySMSOTPMessageText: {
            readonly name: "SetCustomVerifySMSOTPMessageText";
            readonly requestType: {
                encode(message: SetCustomVerifySMSOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifySMSOTPMessageTextRequest;
                fromJSON(object: any): SetCustomVerifySMSOTPMessageTextRequest;
                toJSON(message: SetCustomVerifySMSOTPMessageTextRequest): unknown;
                create(base?: DeepPartial<SetCustomVerifySMSOTPMessageTextRequest>): SetCustomVerifySMSOTPMessageTextRequest;
                fromPartial(object: DeepPartial<SetCustomVerifySMSOTPMessageTextRequest>): SetCustomVerifySMSOTPMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomVerifySMSOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifySMSOTPMessageTextResponse;
                fromJSON(object: any): SetCustomVerifySMSOTPMessageTextResponse;
                toJSON(message: SetCustomVerifySMSOTPMessageTextResponse): unknown;
                create(base?: DeepPartial<SetCustomVerifySMSOTPMessageTextResponse>): SetCustomVerifySMSOTPMessageTextResponse;
                fromPartial(object: DeepPartial<SetCustomVerifySMSOTPMessageTextResponse>): SetCustomVerifySMSOTPMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomVerifySMSOTPMessageTextToDefault: {
            readonly name: "ResetCustomVerifySMSOTPMessageTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomVerifySMSOTPMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifySMSOTPMessageTextToDefaultRequest;
                fromJSON(object: any): ResetCustomVerifySMSOTPMessageTextToDefaultRequest;
                toJSON(message: ResetCustomVerifySMSOTPMessageTextToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>): ResetCustomVerifySMSOTPMessageTextToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>): ResetCustomVerifySMSOTPMessageTextToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomVerifySMSOTPMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifySMSOTPMessageTextToDefaultResponse;
                fromJSON(object: any): ResetCustomVerifySMSOTPMessageTextToDefaultResponse;
                toJSON(message: ResetCustomVerifySMSOTPMessageTextToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>): ResetCustomVerifySMSOTPMessageTextToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>): ResetCustomVerifySMSOTPMessageTextToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomVerifyEmailOTPMessageText: {
            readonly name: "GetCustomVerifyEmailOTPMessageText";
            readonly requestType: {
                encode(message: GetCustomVerifyEmailOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyEmailOTPMessageTextRequest;
                fromJSON(object: any): GetCustomVerifyEmailOTPMessageTextRequest;
                toJSON(message: GetCustomVerifyEmailOTPMessageTextRequest): unknown;
                create(base?: DeepPartial<GetCustomVerifyEmailOTPMessageTextRequest>): GetCustomVerifyEmailOTPMessageTextRequest;
                fromPartial(object: DeepPartial<GetCustomVerifyEmailOTPMessageTextRequest>): GetCustomVerifyEmailOTPMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomVerifyEmailOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomVerifyEmailOTPMessageTextResponse;
                fromJSON(object: any): GetCustomVerifyEmailOTPMessageTextResponse;
                toJSON(message: GetCustomVerifyEmailOTPMessageTextResponse): unknown;
                create(base?: DeepPartial<GetCustomVerifyEmailOTPMessageTextResponse>): GetCustomVerifyEmailOTPMessageTextResponse;
                fromPartial(object: DeepPartial<GetCustomVerifyEmailOTPMessageTextResponse>): GetCustomVerifyEmailOTPMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultVerifyEmailOTPMessageText: {
            readonly name: "GetDefaultVerifyEmailOTPMessageText";
            readonly requestType: {
                encode(message: GetDefaultVerifyEmailOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyEmailOTPMessageTextRequest;
                fromJSON(object: any): GetDefaultVerifyEmailOTPMessageTextRequest;
                toJSON(message: GetDefaultVerifyEmailOTPMessageTextRequest): unknown;
                create(base?: DeepPartial<GetDefaultVerifyEmailOTPMessageTextRequest>): GetDefaultVerifyEmailOTPMessageTextRequest;
                fromPartial(object: DeepPartial<GetDefaultVerifyEmailOTPMessageTextRequest>): GetDefaultVerifyEmailOTPMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultVerifyEmailOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultVerifyEmailOTPMessageTextResponse;
                fromJSON(object: any): GetDefaultVerifyEmailOTPMessageTextResponse;
                toJSON(message: GetDefaultVerifyEmailOTPMessageTextResponse): unknown;
                create(base?: DeepPartial<GetDefaultVerifyEmailOTPMessageTextResponse>): GetDefaultVerifyEmailOTPMessageTextResponse;
                fromPartial(object: DeepPartial<GetDefaultVerifyEmailOTPMessageTextResponse>): GetDefaultVerifyEmailOTPMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomVerifyEmailOTPMessageText: {
            readonly name: "SetCustomVerifyEmailOTPMessageText";
            readonly requestType: {
                encode(message: SetCustomVerifyEmailOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyEmailOTPMessageTextRequest;
                fromJSON(object: any): SetCustomVerifyEmailOTPMessageTextRequest;
                toJSON(message: SetCustomVerifyEmailOTPMessageTextRequest): unknown;
                create(base?: DeepPartial<SetCustomVerifyEmailOTPMessageTextRequest>): SetCustomVerifyEmailOTPMessageTextRequest;
                fromPartial(object: DeepPartial<SetCustomVerifyEmailOTPMessageTextRequest>): SetCustomVerifyEmailOTPMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomVerifyEmailOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomVerifyEmailOTPMessageTextResponse;
                fromJSON(object: any): SetCustomVerifyEmailOTPMessageTextResponse;
                toJSON(message: SetCustomVerifyEmailOTPMessageTextResponse): unknown;
                create(base?: DeepPartial<SetCustomVerifyEmailOTPMessageTextResponse>): SetCustomVerifyEmailOTPMessageTextResponse;
                fromPartial(object: DeepPartial<SetCustomVerifyEmailOTPMessageTextResponse>): SetCustomVerifyEmailOTPMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomVerifyEmailOTPMessageTextToDefault: {
            readonly name: "ResetCustomVerifyEmailOTPMessageTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomVerifyEmailOTPMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyEmailOTPMessageTextToDefaultRequest;
                fromJSON(object: any): ResetCustomVerifyEmailOTPMessageTextToDefaultRequest;
                toJSON(message: ResetCustomVerifyEmailOTPMessageTextToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>): ResetCustomVerifyEmailOTPMessageTextToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>): ResetCustomVerifyEmailOTPMessageTextToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomVerifyEmailOTPMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomVerifyEmailOTPMessageTextToDefaultResponse;
                fromJSON(object: any): ResetCustomVerifyEmailOTPMessageTextToDefaultResponse;
                toJSON(message: ResetCustomVerifyEmailOTPMessageTextToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>): ResetCustomVerifyEmailOTPMessageTextToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>): ResetCustomVerifyEmailOTPMessageTextToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomDomainClaimedMessageText: {
            readonly name: "GetCustomDomainClaimedMessageText";
            readonly requestType: {
                encode(message: GetCustomDomainClaimedMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomDomainClaimedMessageTextRequest;
                fromJSON(object: any): GetCustomDomainClaimedMessageTextRequest;
                toJSON(message: GetCustomDomainClaimedMessageTextRequest): unknown;
                create(base?: DeepPartial<GetCustomDomainClaimedMessageTextRequest>): GetCustomDomainClaimedMessageTextRequest;
                fromPartial(object: DeepPartial<GetCustomDomainClaimedMessageTextRequest>): GetCustomDomainClaimedMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomDomainClaimedMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomDomainClaimedMessageTextResponse;
                fromJSON(object: any): GetCustomDomainClaimedMessageTextResponse;
                toJSON(message: GetCustomDomainClaimedMessageTextResponse): unknown;
                create(base?: DeepPartial<GetCustomDomainClaimedMessageTextResponse>): GetCustomDomainClaimedMessageTextResponse;
                fromPartial(object: DeepPartial<GetCustomDomainClaimedMessageTextResponse>): GetCustomDomainClaimedMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultDomainClaimedMessageText: {
            readonly name: "GetDefaultDomainClaimedMessageText";
            readonly requestType: {
                encode(message: GetDefaultDomainClaimedMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultDomainClaimedMessageTextRequest;
                fromJSON(object: any): GetDefaultDomainClaimedMessageTextRequest;
                toJSON(message: GetDefaultDomainClaimedMessageTextRequest): unknown;
                create(base?: DeepPartial<GetDefaultDomainClaimedMessageTextRequest>): GetDefaultDomainClaimedMessageTextRequest;
                fromPartial(object: DeepPartial<GetDefaultDomainClaimedMessageTextRequest>): GetDefaultDomainClaimedMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultDomainClaimedMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultDomainClaimedMessageTextResponse;
                fromJSON(object: any): GetDefaultDomainClaimedMessageTextResponse;
                toJSON(message: GetDefaultDomainClaimedMessageTextResponse): unknown;
                create(base?: DeepPartial<GetDefaultDomainClaimedMessageTextResponse>): GetDefaultDomainClaimedMessageTextResponse;
                fromPartial(object: DeepPartial<GetDefaultDomainClaimedMessageTextResponse>): GetDefaultDomainClaimedMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomDomainClaimedMessageCustomText: {
            readonly name: "SetCustomDomainClaimedMessageCustomText";
            readonly requestType: {
                encode(message: SetCustomDomainClaimedMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomDomainClaimedMessageTextRequest;
                fromJSON(object: any): SetCustomDomainClaimedMessageTextRequest;
                toJSON(message: SetCustomDomainClaimedMessageTextRequest): unknown;
                create(base?: DeepPartial<SetCustomDomainClaimedMessageTextRequest>): SetCustomDomainClaimedMessageTextRequest;
                fromPartial(object: DeepPartial<SetCustomDomainClaimedMessageTextRequest>): SetCustomDomainClaimedMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomDomainClaimedMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomDomainClaimedMessageTextResponse;
                fromJSON(object: any): SetCustomDomainClaimedMessageTextResponse;
                toJSON(message: SetCustomDomainClaimedMessageTextResponse): unknown;
                create(base?: DeepPartial<SetCustomDomainClaimedMessageTextResponse>): SetCustomDomainClaimedMessageTextResponse;
                fromPartial(object: DeepPartial<SetCustomDomainClaimedMessageTextResponse>): SetCustomDomainClaimedMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomDomainClaimedMessageTextToDefault: {
            readonly name: "ResetCustomDomainClaimedMessageTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomDomainClaimedMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomDomainClaimedMessageTextToDefaultRequest;
                fromJSON(object: any): ResetCustomDomainClaimedMessageTextToDefaultRequest;
                toJSON(message: ResetCustomDomainClaimedMessageTextToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultRequest>): ResetCustomDomainClaimedMessageTextToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultRequest>): ResetCustomDomainClaimedMessageTextToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomDomainClaimedMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomDomainClaimedMessageTextToDefaultResponse;
                fromJSON(object: any): ResetCustomDomainClaimedMessageTextToDefaultResponse;
                toJSON(message: ResetCustomDomainClaimedMessageTextToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultResponse>): ResetCustomDomainClaimedMessageTextToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultResponse>): ResetCustomDomainClaimedMessageTextToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomPasswordlessRegistrationMessageText: {
            readonly name: "GetCustomPasswordlessRegistrationMessageText";
            readonly requestType: {
                encode(message: GetCustomPasswordlessRegistrationMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordlessRegistrationMessageTextRequest;
                fromJSON(object: any): GetCustomPasswordlessRegistrationMessageTextRequest;
                toJSON(message: GetCustomPasswordlessRegistrationMessageTextRequest): unknown;
                create(base?: DeepPartial<GetCustomPasswordlessRegistrationMessageTextRequest>): GetCustomPasswordlessRegistrationMessageTextRequest;
                fromPartial(object: DeepPartial<GetCustomPasswordlessRegistrationMessageTextRequest>): GetCustomPasswordlessRegistrationMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomPasswordlessRegistrationMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordlessRegistrationMessageTextResponse;
                fromJSON(object: any): GetCustomPasswordlessRegistrationMessageTextResponse;
                toJSON(message: GetCustomPasswordlessRegistrationMessageTextResponse): unknown;
                create(base?: DeepPartial<GetCustomPasswordlessRegistrationMessageTextResponse>): GetCustomPasswordlessRegistrationMessageTextResponse;
                fromPartial(object: DeepPartial<GetCustomPasswordlessRegistrationMessageTextResponse>): GetCustomPasswordlessRegistrationMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPasswordlessRegistrationMessageText: {
            readonly name: "GetDefaultPasswordlessRegistrationMessageText";
            readonly requestType: {
                encode(message: GetDefaultPasswordlessRegistrationMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordlessRegistrationMessageTextRequest;
                fromJSON(object: any): GetDefaultPasswordlessRegistrationMessageTextRequest;
                toJSON(message: GetDefaultPasswordlessRegistrationMessageTextRequest): unknown;
                create(base?: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextRequest>): GetDefaultPasswordlessRegistrationMessageTextRequest;
                fromPartial(object: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextRequest>): GetDefaultPasswordlessRegistrationMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultPasswordlessRegistrationMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordlessRegistrationMessageTextResponse;
                fromJSON(object: any): GetDefaultPasswordlessRegistrationMessageTextResponse;
                toJSON(message: GetDefaultPasswordlessRegistrationMessageTextResponse): unknown;
                create(base?: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextResponse>): GetDefaultPasswordlessRegistrationMessageTextResponse;
                fromPartial(object: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextResponse>): GetDefaultPasswordlessRegistrationMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomPasswordlessRegistrationMessageCustomText: {
            readonly name: "SetCustomPasswordlessRegistrationMessageCustomText";
            readonly requestType: {
                encode(message: SetCustomPasswordlessRegistrationMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordlessRegistrationMessageTextRequest;
                fromJSON(object: any): SetCustomPasswordlessRegistrationMessageTextRequest;
                toJSON(message: SetCustomPasswordlessRegistrationMessageTextRequest): unknown;
                create(base?: DeepPartial<SetCustomPasswordlessRegistrationMessageTextRequest>): SetCustomPasswordlessRegistrationMessageTextRequest;
                fromPartial(object: DeepPartial<SetCustomPasswordlessRegistrationMessageTextRequest>): SetCustomPasswordlessRegistrationMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomPasswordlessRegistrationMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordlessRegistrationMessageTextResponse;
                fromJSON(object: any): SetCustomPasswordlessRegistrationMessageTextResponse;
                toJSON(message: SetCustomPasswordlessRegistrationMessageTextResponse): unknown;
                create(base?: DeepPartial<SetCustomPasswordlessRegistrationMessageTextResponse>): SetCustomPasswordlessRegistrationMessageTextResponse;
                fromPartial(object: DeepPartial<SetCustomPasswordlessRegistrationMessageTextResponse>): SetCustomPasswordlessRegistrationMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomPasswordlessRegistrationMessageTextToDefault: {
            readonly name: "ResetCustomPasswordlessRegistrationMessageTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest;
                fromJSON(object: any): ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest;
                toJSON(message: ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>): ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>): ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse;
                fromJSON(object: any): ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse;
                toJSON(message: ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>): ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>): ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomPasswordChangeMessageText: {
            readonly name: "GetCustomPasswordChangeMessageText";
            readonly requestType: {
                encode(message: GetCustomPasswordChangeMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordChangeMessageTextRequest;
                fromJSON(object: any): GetCustomPasswordChangeMessageTextRequest;
                toJSON(message: GetCustomPasswordChangeMessageTextRequest): unknown;
                create(base?: DeepPartial<GetCustomPasswordChangeMessageTextRequest>): GetCustomPasswordChangeMessageTextRequest;
                fromPartial(object: DeepPartial<GetCustomPasswordChangeMessageTextRequest>): GetCustomPasswordChangeMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomPasswordChangeMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomPasswordChangeMessageTextResponse;
                fromJSON(object: any): GetCustomPasswordChangeMessageTextResponse;
                toJSON(message: GetCustomPasswordChangeMessageTextResponse): unknown;
                create(base?: DeepPartial<GetCustomPasswordChangeMessageTextResponse>): GetCustomPasswordChangeMessageTextResponse;
                fromPartial(object: DeepPartial<GetCustomPasswordChangeMessageTextResponse>): GetCustomPasswordChangeMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPasswordChangeMessageText: {
            readonly name: "GetDefaultPasswordChangeMessageText";
            readonly requestType: {
                encode(message: GetDefaultPasswordChangeMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordChangeMessageTextRequest;
                fromJSON(object: any): GetDefaultPasswordChangeMessageTextRequest;
                toJSON(message: GetDefaultPasswordChangeMessageTextRequest): unknown;
                create(base?: DeepPartial<GetDefaultPasswordChangeMessageTextRequest>): GetDefaultPasswordChangeMessageTextRequest;
                fromPartial(object: DeepPartial<GetDefaultPasswordChangeMessageTextRequest>): GetDefaultPasswordChangeMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultPasswordChangeMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultPasswordChangeMessageTextResponse;
                fromJSON(object: any): GetDefaultPasswordChangeMessageTextResponse;
                toJSON(message: GetDefaultPasswordChangeMessageTextResponse): unknown;
                create(base?: DeepPartial<GetDefaultPasswordChangeMessageTextResponse>): GetDefaultPasswordChangeMessageTextResponse;
                fromPartial(object: DeepPartial<GetDefaultPasswordChangeMessageTextResponse>): GetDefaultPasswordChangeMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomPasswordChangeMessageCustomText: {
            readonly name: "SetCustomPasswordChangeMessageCustomText";
            readonly requestType: {
                encode(message: SetCustomPasswordChangeMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordChangeMessageTextRequest;
                fromJSON(object: any): SetCustomPasswordChangeMessageTextRequest;
                toJSON(message: SetCustomPasswordChangeMessageTextRequest): unknown;
                create(base?: DeepPartial<SetCustomPasswordChangeMessageTextRequest>): SetCustomPasswordChangeMessageTextRequest;
                fromPartial(object: DeepPartial<SetCustomPasswordChangeMessageTextRequest>): SetCustomPasswordChangeMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomPasswordChangeMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomPasswordChangeMessageTextResponse;
                fromJSON(object: any): SetCustomPasswordChangeMessageTextResponse;
                toJSON(message: SetCustomPasswordChangeMessageTextResponse): unknown;
                create(base?: DeepPartial<SetCustomPasswordChangeMessageTextResponse>): SetCustomPasswordChangeMessageTextResponse;
                fromPartial(object: DeepPartial<SetCustomPasswordChangeMessageTextResponse>): SetCustomPasswordChangeMessageTextResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomPasswordChangeMessageTextToDefault: {
            readonly name: "ResetCustomPasswordChangeMessageTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomPasswordChangeMessageTextToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordChangeMessageTextToDefaultRequest;
                fromJSON(object: any): ResetCustomPasswordChangeMessageTextToDefaultRequest;
                toJSON(message: ResetCustomPasswordChangeMessageTextToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultRequest>): ResetCustomPasswordChangeMessageTextToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultRequest>): ResetCustomPasswordChangeMessageTextToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomPasswordChangeMessageTextToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomPasswordChangeMessageTextToDefaultResponse;
                fromJSON(object: any): ResetCustomPasswordChangeMessageTextToDefaultResponse;
                toJSON(message: ResetCustomPasswordChangeMessageTextToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultResponse>): ResetCustomPasswordChangeMessageTextToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultResponse>): ResetCustomPasswordChangeMessageTextToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomLoginTexts: {
            readonly name: "GetCustomLoginTexts";
            readonly requestType: {
                encode(message: GetCustomLoginTextsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomLoginTextsRequest;
                fromJSON(object: any): GetCustomLoginTextsRequest;
                toJSON(message: GetCustomLoginTextsRequest): unknown;
                create(base?: DeepPartial<GetCustomLoginTextsRequest>): GetCustomLoginTextsRequest;
                fromPartial(object: DeepPartial<GetCustomLoginTextsRequest>): GetCustomLoginTextsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomLoginTextsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomLoginTextsResponse;
                fromJSON(object: any): GetCustomLoginTextsResponse;
                toJSON(message: GetCustomLoginTextsResponse): unknown;
                create(base?: DeepPartial<GetCustomLoginTextsResponse>): GetCustomLoginTextsResponse;
                fromPartial(object: DeepPartial<GetCustomLoginTextsResponse>): GetCustomLoginTextsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLoginTexts: {
            readonly name: "GetDefaultLoginTexts";
            readonly requestType: {
                encode(message: GetDefaultLoginTextsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLoginTextsRequest;
                fromJSON(object: any): GetDefaultLoginTextsRequest;
                toJSON(message: GetDefaultLoginTextsRequest): unknown;
                create(base?: DeepPartial<GetDefaultLoginTextsRequest>): GetDefaultLoginTextsRequest;
                fromPartial(object: DeepPartial<GetDefaultLoginTextsRequest>): GetDefaultLoginTextsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultLoginTextsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLoginTextsResponse;
                fromJSON(object: any): GetDefaultLoginTextsResponse;
                toJSON(message: GetDefaultLoginTextsResponse): unknown;
                create(base?: DeepPartial<GetDefaultLoginTextsResponse>): GetDefaultLoginTextsResponse;
                fromPartial(object: DeepPartial<GetDefaultLoginTextsResponse>): GetDefaultLoginTextsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomLoginText: {
            readonly name: "SetCustomLoginText";
            readonly requestType: {
                encode(message: SetCustomLoginTextsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomLoginTextsRequest;
                fromJSON(object: any): SetCustomLoginTextsRequest;
                toJSON(message: SetCustomLoginTextsRequest): unknown;
                create(base?: DeepPartial<SetCustomLoginTextsRequest>): SetCustomLoginTextsRequest;
                fromPartial(object: DeepPartial<SetCustomLoginTextsRequest>): SetCustomLoginTextsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetCustomLoginTextsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetCustomLoginTextsResponse;
                fromJSON(object: any): SetCustomLoginTextsResponse;
                toJSON(message: SetCustomLoginTextsResponse): unknown;
                create(base?: DeepPartial<SetCustomLoginTextsResponse>): SetCustomLoginTextsResponse;
                fromPartial(object: DeepPartial<SetCustomLoginTextsResponse>): SetCustomLoginTextsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomLoginTextToDefault: {
            readonly name: "ResetCustomLoginTextToDefault";
            readonly requestType: {
                encode(message: ResetCustomLoginTextsToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomLoginTextsToDefaultRequest;
                fromJSON(object: any): ResetCustomLoginTextsToDefaultRequest;
                toJSON(message: ResetCustomLoginTextsToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomLoginTextsToDefaultRequest>): ResetCustomLoginTextsToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomLoginTextsToDefaultRequest>): ResetCustomLoginTextsToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomLoginTextsToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomLoginTextsToDefaultResponse;
                fromJSON(object: any): ResetCustomLoginTextsToDefaultResponse;
                toJSON(message: ResetCustomLoginTextsToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomLoginTextsToDefaultResponse>): ResetCustomLoginTextsToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomLoginTextsToDefaultResponse>): ResetCustomLoginTextsToDefaultResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrgIDPByID: {
            readonly name: "GetOrgIDPByID";
            readonly requestType: {
                encode(message: GetOrgIDPByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgIDPByIDRequest;
                fromJSON(object: any): GetOrgIDPByIDRequest;
                toJSON(message: GetOrgIDPByIDRequest): unknown;
                create(base?: DeepPartial<GetOrgIDPByIDRequest>): GetOrgIDPByIDRequest;
                fromPartial(object: DeepPartial<GetOrgIDPByIDRequest>): GetOrgIDPByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrgIDPByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgIDPByIDResponse;
                fromJSON(object: any): GetOrgIDPByIDResponse;
                toJSON(message: GetOrgIDPByIDResponse): unknown;
                create(base?: DeepPartial<GetOrgIDPByIDResponse>): GetOrgIDPByIDResponse;
                fromPartial(object: DeepPartial<GetOrgIDPByIDResponse>): GetOrgIDPByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgIDPs: {
            readonly name: "ListOrgIDPs";
            readonly requestType: {
                encode(message: ListOrgIDPsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgIDPsRequest;
                fromJSON(object: any): ListOrgIDPsRequest;
                toJSON(message: ListOrgIDPsRequest): unknown;
                create(base?: DeepPartial<ListOrgIDPsRequest>): ListOrgIDPsRequest;
                fromPartial(object: DeepPartial<ListOrgIDPsRequest>): ListOrgIDPsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListOrgIDPsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgIDPsResponse;
                fromJSON(object: any): ListOrgIDPsResponse;
                toJSON(message: ListOrgIDPsResponse): unknown;
                create(base?: DeepPartial<ListOrgIDPsResponse>): ListOrgIDPsResponse;
                fromPartial(object: DeepPartial<ListOrgIDPsResponse>): ListOrgIDPsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrgOIDCIDP: {
            readonly name: "AddOrgOIDCIDP";
            readonly requestType: {
                encode(message: AddOrgOIDCIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgOIDCIDPRequest;
                fromJSON(object: any): AddOrgOIDCIDPRequest;
                toJSON(message: AddOrgOIDCIDPRequest): unknown;
                create(base?: DeepPartial<AddOrgOIDCIDPRequest>): AddOrgOIDCIDPRequest;
                fromPartial(object: DeepPartial<AddOrgOIDCIDPRequest>): AddOrgOIDCIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOrgOIDCIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgOIDCIDPResponse;
                fromJSON(object: any): AddOrgOIDCIDPResponse;
                toJSON(message: AddOrgOIDCIDPResponse): unknown;
                create(base?: DeepPartial<AddOrgOIDCIDPResponse>): AddOrgOIDCIDPResponse;
                fromPartial(object: DeepPartial<AddOrgOIDCIDPResponse>): AddOrgOIDCIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrgJWTIDP: {
            readonly name: "AddOrgJWTIDP";
            readonly requestType: {
                encode(message: AddOrgJWTIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgJWTIDPRequest;
                fromJSON(object: any): AddOrgJWTIDPRequest;
                toJSON(message: AddOrgJWTIDPRequest): unknown;
                create(base?: DeepPartial<AddOrgJWTIDPRequest>): AddOrgJWTIDPRequest;
                fromPartial(object: DeepPartial<AddOrgJWTIDPRequest>): AddOrgJWTIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOrgJWTIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrgJWTIDPResponse;
                fromJSON(object: any): AddOrgJWTIDPResponse;
                toJSON(message: AddOrgJWTIDPResponse): unknown;
                create(base?: DeepPartial<AddOrgJWTIDPResponse>): AddOrgJWTIDPResponse;
                fromPartial(object: DeepPartial<AddOrgJWTIDPResponse>): AddOrgJWTIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateOrgIDP: {
            readonly name: "DeactivateOrgIDP";
            readonly requestType: {
                encode(message: DeactivateOrgIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateOrgIDPRequest;
                fromJSON(object: any): DeactivateOrgIDPRequest;
                toJSON(message: DeactivateOrgIDPRequest): unknown;
                create(base?: DeepPartial<DeactivateOrgIDPRequest>): DeactivateOrgIDPRequest;
                fromPartial(object: DeepPartial<DeactivateOrgIDPRequest>): DeactivateOrgIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateOrgIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateOrgIDPResponse;
                fromJSON(object: any): DeactivateOrgIDPResponse;
                toJSON(message: DeactivateOrgIDPResponse): unknown;
                create(base?: DeepPartial<DeactivateOrgIDPResponse>): DeactivateOrgIDPResponse;
                fromPartial(object: DeepPartial<DeactivateOrgIDPResponse>): DeactivateOrgIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateOrgIDP: {
            readonly name: "ReactivateOrgIDP";
            readonly requestType: {
                encode(message: ReactivateOrgIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateOrgIDPRequest;
                fromJSON(object: any): ReactivateOrgIDPRequest;
                toJSON(message: ReactivateOrgIDPRequest): unknown;
                create(base?: DeepPartial<ReactivateOrgIDPRequest>): ReactivateOrgIDPRequest;
                fromPartial(object: DeepPartial<ReactivateOrgIDPRequest>): ReactivateOrgIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ReactivateOrgIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateOrgIDPResponse;
                fromJSON(object: any): ReactivateOrgIDPResponse;
                toJSON(message: ReactivateOrgIDPResponse): unknown;
                create(base?: DeepPartial<ReactivateOrgIDPResponse>): ReactivateOrgIDPResponse;
                fromPartial(object: DeepPartial<ReactivateOrgIDPResponse>): ReactivateOrgIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrgIDP: {
            readonly name: "RemoveOrgIDP";
            readonly requestType: {
                encode(message: RemoveOrgIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgIDPRequest;
                fromJSON(object: any): RemoveOrgIDPRequest;
                toJSON(message: RemoveOrgIDPRequest): unknown;
                create(base?: DeepPartial<RemoveOrgIDPRequest>): RemoveOrgIDPRequest;
                fromPartial(object: DeepPartial<RemoveOrgIDPRequest>): RemoveOrgIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: RemoveOrgIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgIDPResponse;
                fromJSON(_: any): RemoveOrgIDPResponse;
                toJSON(_: RemoveOrgIDPResponse): unknown;
                create(base?: DeepPartial<RemoveOrgIDPResponse>): RemoveOrgIDPResponse;
                fromPartial(_: DeepPartial<RemoveOrgIDPResponse>): RemoveOrgIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrgIDP: {
            readonly name: "UpdateOrgIDP";
            readonly requestType: {
                encode(message: UpdateOrgIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPRequest;
                fromJSON(object: any): UpdateOrgIDPRequest;
                toJSON(message: UpdateOrgIDPRequest): unknown;
                create(base?: DeepPartial<UpdateOrgIDPRequest>): UpdateOrgIDPRequest;
                fromPartial(object: DeepPartial<UpdateOrgIDPRequest>): UpdateOrgIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateOrgIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPResponse;
                fromJSON(object: any): UpdateOrgIDPResponse;
                toJSON(message: UpdateOrgIDPResponse): unknown;
                create(base?: DeepPartial<UpdateOrgIDPResponse>): UpdateOrgIDPResponse;
                fromPartial(object: DeepPartial<UpdateOrgIDPResponse>): UpdateOrgIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrgIDPOIDCConfig: {
            readonly name: "UpdateOrgIDPOIDCConfig";
            readonly requestType: {
                encode(message: UpdateOrgIDPOIDCConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPOIDCConfigRequest;
                fromJSON(object: any): UpdateOrgIDPOIDCConfigRequest;
                toJSON(message: UpdateOrgIDPOIDCConfigRequest): unknown;
                create(base?: DeepPartial<UpdateOrgIDPOIDCConfigRequest>): UpdateOrgIDPOIDCConfigRequest;
                fromPartial(object: DeepPartial<UpdateOrgIDPOIDCConfigRequest>): UpdateOrgIDPOIDCConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateOrgIDPOIDCConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPOIDCConfigResponse;
                fromJSON(object: any): UpdateOrgIDPOIDCConfigResponse;
                toJSON(message: UpdateOrgIDPOIDCConfigResponse): unknown;
                create(base?: DeepPartial<UpdateOrgIDPOIDCConfigResponse>): UpdateOrgIDPOIDCConfigResponse;
                fromPartial(object: DeepPartial<UpdateOrgIDPOIDCConfigResponse>): UpdateOrgIDPOIDCConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrgIDPJWTConfig: {
            readonly name: "UpdateOrgIDPJWTConfig";
            readonly requestType: {
                encode(message: UpdateOrgIDPJWTConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPJWTConfigRequest;
                fromJSON(object: any): UpdateOrgIDPJWTConfigRequest;
                toJSON(message: UpdateOrgIDPJWTConfigRequest): unknown;
                create(base?: DeepPartial<UpdateOrgIDPJWTConfigRequest>): UpdateOrgIDPJWTConfigRequest;
                fromPartial(object: DeepPartial<UpdateOrgIDPJWTConfigRequest>): UpdateOrgIDPJWTConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateOrgIDPJWTConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIDPJWTConfigResponse;
                fromJSON(object: any): UpdateOrgIDPJWTConfigResponse;
                toJSON(message: UpdateOrgIDPJWTConfigResponse): unknown;
                create(base?: DeepPartial<UpdateOrgIDPJWTConfigResponse>): UpdateOrgIDPJWTConfigResponse;
                fromPartial(object: DeepPartial<UpdateOrgIDPJWTConfigResponse>): UpdateOrgIDPJWTConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Returns all identity providers, which match the query
         * Limit should always be set, there is a default limit set by the service
         */
        readonly listProviders: {
            readonly name: "ListProviders";
            readonly requestType: {
                encode(message: ListProvidersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProvidersRequest;
                fromJSON(object: any): ListProvidersRequest;
                toJSON(message: ListProvidersRequest): unknown;
                create(base?: DeepPartial<ListProvidersRequest>): ListProvidersRequest;
                fromPartial(object: DeepPartial<ListProvidersRequest>): ListProvidersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListProvidersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListProvidersResponse;
                fromJSON(object: any): ListProvidersResponse;
                toJSON(message: ListProvidersResponse): unknown;
                create(base?: DeepPartial<ListProvidersResponse>): ListProvidersResponse;
                fromPartial(object: DeepPartial<ListProvidersResponse>): ListProvidersResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Returns an identity provider of the organization */
        readonly getProviderByID: {
            readonly name: "GetProviderByID";
            readonly requestType: {
                encode(message: GetProviderByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProviderByIDRequest;
                fromJSON(object: any): GetProviderByIDRequest;
                toJSON(message: GetProviderByIDRequest): unknown;
                create(base?: DeepPartial<GetProviderByIDRequest>): GetProviderByIDRequest;
                fromPartial(object: DeepPartial<GetProviderByIDRequest>): GetProviderByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetProviderByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetProviderByIDResponse;
                fromJSON(object: any): GetProviderByIDResponse;
                toJSON(message: GetProviderByIDResponse): unknown;
                create(base?: DeepPartial<GetProviderByIDResponse>): GetProviderByIDResponse;
                fromPartial(object: DeepPartial<GetProviderByIDResponse>): GetProviderByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new OAuth2 identity provider in the organization */
        readonly addGenericOAuthProvider: {
            readonly name: "AddGenericOAuthProvider";
            readonly requestType: {
                encode(message: AddGenericOAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGenericOAuthProviderRequest;
                fromJSON(object: any): AddGenericOAuthProviderRequest;
                toJSON(message: AddGenericOAuthProviderRequest): unknown;
                create(base?: DeepPartial<AddGenericOAuthProviderRequest>): AddGenericOAuthProviderRequest;
                fromPartial(object: DeepPartial<AddGenericOAuthProviderRequest>): AddGenericOAuthProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddGenericOAuthProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGenericOAuthProviderResponse;
                fromJSON(object: any): AddGenericOAuthProviderResponse;
                toJSON(message: AddGenericOAuthProviderResponse): unknown;
                create(base?: DeepPartial<AddGenericOAuthProviderResponse>): AddGenericOAuthProviderResponse;
                fromPartial(object: DeepPartial<AddGenericOAuthProviderResponse>): AddGenericOAuthProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing OAuth2 identity provider in the organization */
        readonly updateGenericOAuthProvider: {
            readonly name: "UpdateGenericOAuthProvider";
            readonly requestType: {
                encode(message: UpdateGenericOAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGenericOAuthProviderRequest;
                fromJSON(object: any): UpdateGenericOAuthProviderRequest;
                toJSON(message: UpdateGenericOAuthProviderRequest): unknown;
                create(base?: DeepPartial<UpdateGenericOAuthProviderRequest>): UpdateGenericOAuthProviderRequest;
                fromPartial(object: DeepPartial<UpdateGenericOAuthProviderRequest>): UpdateGenericOAuthProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateGenericOAuthProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGenericOAuthProviderResponse;
                fromJSON(object: any): UpdateGenericOAuthProviderResponse;
                toJSON(message: UpdateGenericOAuthProviderResponse): unknown;
                create(base?: DeepPartial<UpdateGenericOAuthProviderResponse>): UpdateGenericOAuthProviderResponse;
                fromPartial(object: DeepPartial<UpdateGenericOAuthProviderResponse>): UpdateGenericOAuthProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new OIDC identity provider in the organization */
        readonly addGenericOIDCProvider: {
            readonly name: "AddGenericOIDCProvider";
            readonly requestType: {
                encode(message: AddGenericOIDCProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGenericOIDCProviderRequest;
                fromJSON(object: any): AddGenericOIDCProviderRequest;
                toJSON(message: AddGenericOIDCProviderRequest): unknown;
                create(base?: DeepPartial<AddGenericOIDCProviderRequest>): AddGenericOIDCProviderRequest;
                fromPartial(object: DeepPartial<AddGenericOIDCProviderRequest>): AddGenericOIDCProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddGenericOIDCProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGenericOIDCProviderResponse;
                fromJSON(object: any): AddGenericOIDCProviderResponse;
                toJSON(message: AddGenericOIDCProviderResponse): unknown;
                create(base?: DeepPartial<AddGenericOIDCProviderResponse>): AddGenericOIDCProviderResponse;
                fromPartial(object: DeepPartial<AddGenericOIDCProviderResponse>): AddGenericOIDCProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing OIDC identity provider in the organization */
        readonly updateGenericOIDCProvider: {
            readonly name: "UpdateGenericOIDCProvider";
            readonly requestType: {
                encode(message: UpdateGenericOIDCProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGenericOIDCProviderRequest;
                fromJSON(object: any): UpdateGenericOIDCProviderRequest;
                toJSON(message: UpdateGenericOIDCProviderRequest): unknown;
                create(base?: DeepPartial<UpdateGenericOIDCProviderRequest>): UpdateGenericOIDCProviderRequest;
                fromPartial(object: DeepPartial<UpdateGenericOIDCProviderRequest>): UpdateGenericOIDCProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateGenericOIDCProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGenericOIDCProviderResponse;
                fromJSON(object: any): UpdateGenericOIDCProviderResponse;
                toJSON(message: UpdateGenericOIDCProviderResponse): unknown;
                create(base?: DeepPartial<UpdateGenericOIDCProviderResponse>): UpdateGenericOIDCProviderResponse;
                fromPartial(object: DeepPartial<UpdateGenericOIDCProviderResponse>): UpdateGenericOIDCProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Migrate an existing OIDC identity provider in the organization */
        readonly migrateGenericOIDCProvider: {
            readonly name: "MigrateGenericOIDCProvider";
            readonly requestType: {
                encode(message: MigrateGenericOIDCProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MigrateGenericOIDCProviderRequest;
                fromJSON(object: any): MigrateGenericOIDCProviderRequest;
                toJSON(message: MigrateGenericOIDCProviderRequest): unknown;
                create(base?: DeepPartial<MigrateGenericOIDCProviderRequest>): MigrateGenericOIDCProviderRequest;
                fromPartial(object: DeepPartial<MigrateGenericOIDCProviderRequest>): MigrateGenericOIDCProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: MigrateGenericOIDCProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MigrateGenericOIDCProviderResponse;
                fromJSON(object: any): MigrateGenericOIDCProviderResponse;
                toJSON(message: MigrateGenericOIDCProviderResponse): unknown;
                create(base?: DeepPartial<MigrateGenericOIDCProviderResponse>): MigrateGenericOIDCProviderResponse;
                fromPartial(object: DeepPartial<MigrateGenericOIDCProviderResponse>): MigrateGenericOIDCProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new JWT identity provider in the organization */
        readonly addJWTProvider: {
            readonly name: "AddJWTProvider";
            readonly requestType: {
                encode(message: AddJWTProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddJWTProviderRequest;
                fromJSON(object: any): AddJWTProviderRequest;
                toJSON(message: AddJWTProviderRequest): unknown;
                create(base?: DeepPartial<AddJWTProviderRequest>): AddJWTProviderRequest;
                fromPartial(object: DeepPartial<AddJWTProviderRequest>): AddJWTProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddJWTProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddJWTProviderResponse;
                fromJSON(object: any): AddJWTProviderResponse;
                toJSON(message: AddJWTProviderResponse): unknown;
                create(base?: DeepPartial<AddJWTProviderResponse>): AddJWTProviderResponse;
                fromPartial(object: DeepPartial<AddJWTProviderResponse>): AddJWTProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing JWT identity provider in the organization */
        readonly updateJWTProvider: {
            readonly name: "UpdateJWTProvider";
            readonly requestType: {
                encode(message: UpdateJWTProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateJWTProviderRequest;
                fromJSON(object: any): UpdateJWTProviderRequest;
                toJSON(message: UpdateJWTProviderRequest): unknown;
                create(base?: DeepPartial<UpdateJWTProviderRequest>): UpdateJWTProviderRequest;
                fromPartial(object: DeepPartial<UpdateJWTProviderRequest>): UpdateJWTProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateJWTProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateJWTProviderResponse;
                fromJSON(object: any): UpdateJWTProviderResponse;
                toJSON(message: UpdateJWTProviderResponse): unknown;
                create(base?: DeepPartial<UpdateJWTProviderResponse>): UpdateJWTProviderResponse;
                fromPartial(object: DeepPartial<UpdateJWTProviderResponse>): UpdateJWTProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new Azure AD identity provider in the organization */
        readonly addAzureADProvider: {
            readonly name: "AddAzureADProvider";
            readonly requestType: {
                encode(message: AddAzureADProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddAzureADProviderRequest;
                fromJSON(object: any): AddAzureADProviderRequest;
                toJSON(message: AddAzureADProviderRequest): unknown;
                create(base?: DeepPartial<AddAzureADProviderRequest>): AddAzureADProviderRequest;
                fromPartial(object: DeepPartial<AddAzureADProviderRequest>): AddAzureADProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddAzureADProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddAzureADProviderResponse;
                fromJSON(object: any): AddAzureADProviderResponse;
                toJSON(message: AddAzureADProviderResponse): unknown;
                create(base?: DeepPartial<AddAzureADProviderResponse>): AddAzureADProviderResponse;
                fromPartial(object: DeepPartial<AddAzureADProviderResponse>): AddAzureADProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing Azure AD identity provider in the organization */
        readonly updateAzureADProvider: {
            readonly name: "UpdateAzureADProvider";
            readonly requestType: {
                encode(message: UpdateAzureADProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAzureADProviderRequest;
                fromJSON(object: any): UpdateAzureADProviderRequest;
                toJSON(message: UpdateAzureADProviderRequest): unknown;
                create(base?: DeepPartial<UpdateAzureADProviderRequest>): UpdateAzureADProviderRequest;
                fromPartial(object: DeepPartial<UpdateAzureADProviderRequest>): UpdateAzureADProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateAzureADProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAzureADProviderResponse;
                fromJSON(object: any): UpdateAzureADProviderResponse;
                toJSON(message: UpdateAzureADProviderResponse): unknown;
                create(base?: DeepPartial<UpdateAzureADProviderResponse>): UpdateAzureADProviderResponse;
                fromPartial(object: DeepPartial<UpdateAzureADProviderResponse>): UpdateAzureADProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new GitHub identity provider in the organization */
        readonly addGitHubProvider: {
            readonly name: "AddGitHubProvider";
            readonly requestType: {
                encode(message: AddGitHubProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGitHubProviderRequest;
                fromJSON(object: any): AddGitHubProviderRequest;
                toJSON(message: AddGitHubProviderRequest): unknown;
                create(base?: DeepPartial<AddGitHubProviderRequest>): AddGitHubProviderRequest;
                fromPartial(object: DeepPartial<AddGitHubProviderRequest>): AddGitHubProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddGitHubProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGitHubProviderResponse;
                fromJSON(object: any): AddGitHubProviderResponse;
                toJSON(message: AddGitHubProviderResponse): unknown;
                create(base?: DeepPartial<AddGitHubProviderResponse>): AddGitHubProviderResponse;
                fromPartial(object: DeepPartial<AddGitHubProviderResponse>): AddGitHubProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing GitHub identity provider in the organization */
        readonly updateGitHubProvider: {
            readonly name: "UpdateGitHubProvider";
            readonly requestType: {
                encode(message: UpdateGitHubProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitHubProviderRequest;
                fromJSON(object: any): UpdateGitHubProviderRequest;
                toJSON(message: UpdateGitHubProviderRequest): unknown;
                create(base?: DeepPartial<UpdateGitHubProviderRequest>): UpdateGitHubProviderRequest;
                fromPartial(object: DeepPartial<UpdateGitHubProviderRequest>): UpdateGitHubProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateGitHubProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitHubProviderResponse;
                fromJSON(object: any): UpdateGitHubProviderResponse;
                toJSON(message: UpdateGitHubProviderResponse): unknown;
                create(base?: DeepPartial<UpdateGitHubProviderResponse>): UpdateGitHubProviderResponse;
                fromPartial(object: DeepPartial<UpdateGitHubProviderResponse>): UpdateGitHubProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new GitHub Enterprise Server identity provider in the organization */
        readonly addGitHubEnterpriseServerProvider: {
            readonly name: "AddGitHubEnterpriseServerProvider";
            readonly requestType: {
                encode(message: AddGitHubEnterpriseServerProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGitHubEnterpriseServerProviderRequest;
                fromJSON(object: any): AddGitHubEnterpriseServerProviderRequest;
                toJSON(message: AddGitHubEnterpriseServerProviderRequest): unknown;
                create(base?: DeepPartial<AddGitHubEnterpriseServerProviderRequest>): AddGitHubEnterpriseServerProviderRequest;
                fromPartial(object: DeepPartial<AddGitHubEnterpriseServerProviderRequest>): AddGitHubEnterpriseServerProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddGitHubEnterpriseServerProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGitHubEnterpriseServerProviderResponse;
                fromJSON(object: any): AddGitHubEnterpriseServerProviderResponse;
                toJSON(message: AddGitHubEnterpriseServerProviderResponse): unknown;
                create(base?: DeepPartial<AddGitHubEnterpriseServerProviderResponse>): AddGitHubEnterpriseServerProviderResponse;
                fromPartial(object: DeepPartial<AddGitHubEnterpriseServerProviderResponse>): AddGitHubEnterpriseServerProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing GitHub Enterprise Server identity provider in the organization */
        readonly updateGitHubEnterpriseServerProvider: {
            readonly name: "UpdateGitHubEnterpriseServerProvider";
            readonly requestType: {
                encode(message: UpdateGitHubEnterpriseServerProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitHubEnterpriseServerProviderRequest;
                fromJSON(object: any): UpdateGitHubEnterpriseServerProviderRequest;
                toJSON(message: UpdateGitHubEnterpriseServerProviderRequest): unknown;
                create(base?: DeepPartial<UpdateGitHubEnterpriseServerProviderRequest>): UpdateGitHubEnterpriseServerProviderRequest;
                fromPartial(object: DeepPartial<UpdateGitHubEnterpriseServerProviderRequest>): UpdateGitHubEnterpriseServerProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateGitHubEnterpriseServerProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitHubEnterpriseServerProviderResponse;
                fromJSON(object: any): UpdateGitHubEnterpriseServerProviderResponse;
                toJSON(message: UpdateGitHubEnterpriseServerProviderResponse): unknown;
                create(base?: DeepPartial<UpdateGitHubEnterpriseServerProviderResponse>): UpdateGitHubEnterpriseServerProviderResponse;
                fromPartial(object: DeepPartial<UpdateGitHubEnterpriseServerProviderResponse>): UpdateGitHubEnterpriseServerProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new GitLab identity provider in the organization */
        readonly addGitLabProvider: {
            readonly name: "AddGitLabProvider";
            readonly requestType: {
                encode(message: AddGitLabProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGitLabProviderRequest;
                fromJSON(object: any): AddGitLabProviderRequest;
                toJSON(message: AddGitLabProviderRequest): unknown;
                create(base?: DeepPartial<AddGitLabProviderRequest>): AddGitLabProviderRequest;
                fromPartial(object: DeepPartial<AddGitLabProviderRequest>): AddGitLabProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddGitLabProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGitLabProviderResponse;
                fromJSON(object: any): AddGitLabProviderResponse;
                toJSON(message: AddGitLabProviderResponse): unknown;
                create(base?: DeepPartial<AddGitLabProviderResponse>): AddGitLabProviderResponse;
                fromPartial(object: DeepPartial<AddGitLabProviderResponse>): AddGitLabProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing GitLab identity provider in the organization */
        readonly updateGitLabProvider: {
            readonly name: "UpdateGitLabProvider";
            readonly requestType: {
                encode(message: UpdateGitLabProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitLabProviderRequest;
                fromJSON(object: any): UpdateGitLabProviderRequest;
                toJSON(message: UpdateGitLabProviderRequest): unknown;
                create(base?: DeepPartial<UpdateGitLabProviderRequest>): UpdateGitLabProviderRequest;
                fromPartial(object: DeepPartial<UpdateGitLabProviderRequest>): UpdateGitLabProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateGitLabProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitLabProviderResponse;
                fromJSON(object: any): UpdateGitLabProviderResponse;
                toJSON(message: UpdateGitLabProviderResponse): unknown;
                create(base?: DeepPartial<UpdateGitLabProviderResponse>): UpdateGitLabProviderResponse;
                fromPartial(object: DeepPartial<UpdateGitLabProviderResponse>): UpdateGitLabProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new self hosted GitLab identity provider in the organization */
        readonly addGitLabSelfHostedProvider: {
            readonly name: "AddGitLabSelfHostedProvider";
            readonly requestType: {
                encode(message: AddGitLabSelfHostedProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGitLabSelfHostedProviderRequest;
                fromJSON(object: any): AddGitLabSelfHostedProviderRequest;
                toJSON(message: AddGitLabSelfHostedProviderRequest): unknown;
                create(base?: DeepPartial<AddGitLabSelfHostedProviderRequest>): AddGitLabSelfHostedProviderRequest;
                fromPartial(object: DeepPartial<AddGitLabSelfHostedProviderRequest>): AddGitLabSelfHostedProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddGitLabSelfHostedProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGitLabSelfHostedProviderResponse;
                fromJSON(object: any): AddGitLabSelfHostedProviderResponse;
                toJSON(message: AddGitLabSelfHostedProviderResponse): unknown;
                create(base?: DeepPartial<AddGitLabSelfHostedProviderResponse>): AddGitLabSelfHostedProviderResponse;
                fromPartial(object: DeepPartial<AddGitLabSelfHostedProviderResponse>): AddGitLabSelfHostedProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing self hosted GitLab identity provider in the organization */
        readonly updateGitLabSelfHostedProvider: {
            readonly name: "UpdateGitLabSelfHostedProvider";
            readonly requestType: {
                encode(message: UpdateGitLabSelfHostedProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitLabSelfHostedProviderRequest;
                fromJSON(object: any): UpdateGitLabSelfHostedProviderRequest;
                toJSON(message: UpdateGitLabSelfHostedProviderRequest): unknown;
                create(base?: DeepPartial<UpdateGitLabSelfHostedProviderRequest>): UpdateGitLabSelfHostedProviderRequest;
                fromPartial(object: DeepPartial<UpdateGitLabSelfHostedProviderRequest>): UpdateGitLabSelfHostedProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateGitLabSelfHostedProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGitLabSelfHostedProviderResponse;
                fromJSON(object: any): UpdateGitLabSelfHostedProviderResponse;
                toJSON(message: UpdateGitLabSelfHostedProviderResponse): unknown;
                create(base?: DeepPartial<UpdateGitLabSelfHostedProviderResponse>): UpdateGitLabSelfHostedProviderResponse;
                fromPartial(object: DeepPartial<UpdateGitLabSelfHostedProviderResponse>): UpdateGitLabSelfHostedProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new Google identity provider in the organization */
        readonly addGoogleProvider: {
            readonly name: "AddGoogleProvider";
            readonly requestType: {
                encode(message: AddGoogleProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGoogleProviderRequest;
                fromJSON(object: any): AddGoogleProviderRequest;
                toJSON(message: AddGoogleProviderRequest): unknown;
                create(base?: DeepPartial<AddGoogleProviderRequest>): AddGoogleProviderRequest;
                fromPartial(object: DeepPartial<AddGoogleProviderRequest>): AddGoogleProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddGoogleProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddGoogleProviderResponse;
                fromJSON(object: any): AddGoogleProviderResponse;
                toJSON(message: AddGoogleProviderResponse): unknown;
                create(base?: DeepPartial<AddGoogleProviderResponse>): AddGoogleProviderResponse;
                fromPartial(object: DeepPartial<AddGoogleProviderResponse>): AddGoogleProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing Google identity provider in the organization */
        readonly updateGoogleProvider: {
            readonly name: "UpdateGoogleProvider";
            readonly requestType: {
                encode(message: UpdateGoogleProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGoogleProviderRequest;
                fromJSON(object: any): UpdateGoogleProviderRequest;
                toJSON(message: UpdateGoogleProviderRequest): unknown;
                create(base?: DeepPartial<UpdateGoogleProviderRequest>): UpdateGoogleProviderRequest;
                fromPartial(object: DeepPartial<UpdateGoogleProviderRequest>): UpdateGoogleProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateGoogleProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGoogleProviderResponse;
                fromJSON(object: any): UpdateGoogleProviderResponse;
                toJSON(message: UpdateGoogleProviderResponse): unknown;
                create(base?: DeepPartial<UpdateGoogleProviderResponse>): UpdateGoogleProviderResponse;
                fromPartial(object: DeepPartial<UpdateGoogleProviderResponse>): UpdateGoogleProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new LDAP identity provider in the organization */
        readonly addLDAPProvider: {
            readonly name: "AddLDAPProvider";
            readonly requestType: {
                encode(message: AddLDAPProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddLDAPProviderRequest;
                fromJSON(object: any): AddLDAPProviderRequest;
                toJSON(message: AddLDAPProviderRequest): unknown;
                create(base?: DeepPartial<AddLDAPProviderRequest>): AddLDAPProviderRequest;
                fromPartial(object: DeepPartial<AddLDAPProviderRequest>): AddLDAPProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddLDAPProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddLDAPProviderResponse;
                fromJSON(object: any): AddLDAPProviderResponse;
                toJSON(message: AddLDAPProviderResponse): unknown;
                create(base?: DeepPartial<AddLDAPProviderResponse>): AddLDAPProviderResponse;
                fromPartial(object: DeepPartial<AddLDAPProviderResponse>): AddLDAPProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing LDAP identity provider in the organization */
        readonly updateLDAPProvider: {
            readonly name: "UpdateLDAPProvider";
            readonly requestType: {
                encode(message: UpdateLDAPProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLDAPProviderRequest;
                fromJSON(object: any): UpdateLDAPProviderRequest;
                toJSON(message: UpdateLDAPProviderRequest): unknown;
                create(base?: DeepPartial<UpdateLDAPProviderRequest>): UpdateLDAPProviderRequest;
                fromPartial(object: DeepPartial<UpdateLDAPProviderRequest>): UpdateLDAPProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateLDAPProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLDAPProviderResponse;
                fromJSON(object: any): UpdateLDAPProviderResponse;
                toJSON(message: UpdateLDAPProviderResponse): unknown;
                create(base?: DeepPartial<UpdateLDAPProviderResponse>): UpdateLDAPProviderResponse;
                fromPartial(object: DeepPartial<UpdateLDAPProviderResponse>): UpdateLDAPProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new Apple identity provider in the organization */
        readonly addAppleProvider: {
            readonly name: "AddAppleProvider";
            readonly requestType: {
                encode(message: AddAppleProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddAppleProviderRequest;
                fromJSON(object: any): AddAppleProviderRequest;
                toJSON(message: AddAppleProviderRequest): unknown;
                create(base?: DeepPartial<AddAppleProviderRequest>): AddAppleProviderRequest;
                fromPartial(object: DeepPartial<AddAppleProviderRequest>): AddAppleProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddAppleProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddAppleProviderResponse;
                fromJSON(object: any): AddAppleProviderResponse;
                toJSON(message: AddAppleProviderResponse): unknown;
                create(base?: DeepPartial<AddAppleProviderResponse>): AddAppleProviderResponse;
                fromPartial(object: DeepPartial<AddAppleProviderResponse>): AddAppleProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing Apple identity provider in the organization */
        readonly updateAppleProvider: {
            readonly name: "UpdateAppleProvider";
            readonly requestType: {
                encode(message: UpdateAppleProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAppleProviderRequest;
                fromJSON(object: any): UpdateAppleProviderRequest;
                toJSON(message: UpdateAppleProviderRequest): unknown;
                create(base?: DeepPartial<UpdateAppleProviderRequest>): UpdateAppleProviderRequest;
                fromPartial(object: DeepPartial<UpdateAppleProviderRequest>): UpdateAppleProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateAppleProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAppleProviderResponse;
                fromJSON(object: any): UpdateAppleProviderResponse;
                toJSON(message: UpdateAppleProviderResponse): unknown;
                create(base?: DeepPartial<UpdateAppleProviderResponse>): UpdateAppleProviderResponse;
                fromPartial(object: DeepPartial<UpdateAppleProviderResponse>): UpdateAppleProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Add a new SAML identity provider in the organization */
        readonly addSAMLProvider: {
            readonly name: "AddSAMLProvider";
            readonly requestType: {
                encode(message: AddSAMLProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSAMLProviderRequest;
                fromJSON(object: any): AddSAMLProviderRequest;
                toJSON(message: AddSAMLProviderRequest): unknown;
                create(base?: DeepPartial<AddSAMLProviderRequest>): AddSAMLProviderRequest;
                fromPartial(object: DeepPartial<AddSAMLProviderRequest>): AddSAMLProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddSAMLProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSAMLProviderResponse;
                fromJSON(object: any): AddSAMLProviderResponse;
                toJSON(message: AddSAMLProviderResponse): unknown;
                create(base?: DeepPartial<AddSAMLProviderResponse>): AddSAMLProviderResponse;
                fromPartial(object: DeepPartial<AddSAMLProviderResponse>): AddSAMLProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change an existing SAML identity provider in the organization */
        readonly updateSAMLProvider: {
            readonly name: "UpdateSAMLProvider";
            readonly requestType: {
                encode(message: UpdateSAMLProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSAMLProviderRequest;
                fromJSON(object: any): UpdateSAMLProviderRequest;
                toJSON(message: UpdateSAMLProviderRequest): unknown;
                create(base?: DeepPartial<UpdateSAMLProviderRequest>): UpdateSAMLProviderRequest;
                fromPartial(object: DeepPartial<UpdateSAMLProviderRequest>): UpdateSAMLProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateSAMLProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSAMLProviderResponse;
                fromJSON(object: any): UpdateSAMLProviderResponse;
                toJSON(message: UpdateSAMLProviderResponse): unknown;
                create(base?: DeepPartial<UpdateSAMLProviderResponse>): UpdateSAMLProviderResponse;
                fromPartial(object: DeepPartial<UpdateSAMLProviderResponse>): UpdateSAMLProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Regenerate certificate for an existing SAML identity provider in the organization */
        readonly regenerateSAMLProviderCertificate: {
            readonly name: "RegenerateSAMLProviderCertificate";
            readonly requestType: {
                encode(message: RegenerateSAMLProviderCertificateRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateSAMLProviderCertificateRequest;
                fromJSON(object: any): RegenerateSAMLProviderCertificateRequest;
                toJSON(message: RegenerateSAMLProviderCertificateRequest): unknown;
                create(base?: DeepPartial<RegenerateSAMLProviderCertificateRequest>): RegenerateSAMLProviderCertificateRequest;
                fromPartial(object: DeepPartial<RegenerateSAMLProviderCertificateRequest>): RegenerateSAMLProviderCertificateRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RegenerateSAMLProviderCertificateResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegenerateSAMLProviderCertificateResponse;
                fromJSON(object: any): RegenerateSAMLProviderCertificateResponse;
                toJSON(message: RegenerateSAMLProviderCertificateResponse): unknown;
                create(base?: DeepPartial<RegenerateSAMLProviderCertificateResponse>): RegenerateSAMLProviderCertificateResponse;
                fromPartial(object: DeepPartial<RegenerateSAMLProviderCertificateResponse>): RegenerateSAMLProviderCertificateResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove an identity provider
         * Will remove all linked providers of this configuration on the users
         */
        readonly deleteProvider: {
            readonly name: "DeleteProvider";
            readonly requestType: {
                encode(message: DeleteProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProviderRequest;
                fromJSON(object: any): DeleteProviderRequest;
                toJSON(message: DeleteProviderRequest): unknown;
                create(base?: DeepPartial<DeleteProviderRequest>): DeleteProviderRequest;
                fromPartial(object: DeepPartial<DeleteProviderRequest>): DeleteProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeleteProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProviderResponse;
                fromJSON(object: any): DeleteProviderResponse;
                toJSON(message: DeleteProviderResponse): unknown;
                create(base?: DeepPartial<DeleteProviderResponse>): DeleteProviderResponse;
                fromPartial(object: DeepPartial<DeleteProviderResponse>): DeleteProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listActions: {
            readonly name: "ListActions";
            readonly requestType: {
                encode(message: ListActionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListActionsRequest;
                fromJSON(object: any): ListActionsRequest;
                toJSON(message: ListActionsRequest): unknown;
                create(base?: DeepPartial<ListActionsRequest>): ListActionsRequest;
                fromPartial(object: DeepPartial<ListActionsRequest>): ListActionsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListActionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListActionsResponse;
                fromJSON(object: any): ListActionsResponse;
                toJSON(message: ListActionsResponse): unknown;
                create(base?: DeepPartial<ListActionsResponse>): ListActionsResponse;
                fromPartial(object: DeepPartial<ListActionsResponse>): ListActionsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getAction: {
            readonly name: "GetAction";
            readonly requestType: {
                encode(message: GetActionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetActionRequest;
                fromJSON(object: any): GetActionRequest;
                toJSON(message: GetActionRequest): unknown;
                create(base?: DeepPartial<GetActionRequest>): GetActionRequest;
                fromPartial(object: DeepPartial<GetActionRequest>): GetActionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetActionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetActionResponse;
                fromJSON(object: any): GetActionResponse;
                toJSON(message: GetActionResponse): unknown;
                create(base?: DeepPartial<GetActionResponse>): GetActionResponse;
                fromPartial(object: DeepPartial<GetActionResponse>): GetActionResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly createAction: {
            readonly name: "CreateAction";
            readonly requestType: {
                encode(message: CreateActionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateActionRequest;
                fromJSON(object: any): CreateActionRequest;
                toJSON(message: CreateActionRequest): unknown;
                create(base?: DeepPartial<CreateActionRequest>): CreateActionRequest;
                fromPartial(object: DeepPartial<CreateActionRequest>): CreateActionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateActionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateActionResponse;
                fromJSON(object: any): CreateActionResponse;
                toJSON(message: CreateActionResponse): unknown;
                create(base?: DeepPartial<CreateActionResponse>): CreateActionResponse;
                fromPartial(object: DeepPartial<CreateActionResponse>): CreateActionResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateAction: {
            readonly name: "UpdateAction";
            readonly requestType: {
                encode(message: UpdateActionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateActionRequest;
                fromJSON(object: any): UpdateActionRequest;
                toJSON(message: UpdateActionRequest): unknown;
                create(base?: DeepPartial<UpdateActionRequest>): UpdateActionRequest;
                fromPartial(object: DeepPartial<UpdateActionRequest>): UpdateActionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateActionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateActionResponse;
                fromJSON(object: any): UpdateActionResponse;
                toJSON(message: UpdateActionResponse): unknown;
                create(base?: DeepPartial<UpdateActionResponse>): UpdateActionResponse;
                fromPartial(object: DeepPartial<UpdateActionResponse>): UpdateActionResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateAction: {
            readonly name: "DeactivateAction";
            readonly requestType: {
                encode(message: DeactivateActionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateActionRequest;
                fromJSON(object: any): DeactivateActionRequest;
                toJSON(message: DeactivateActionRequest): unknown;
                create(base?: DeepPartial<DeactivateActionRequest>): DeactivateActionRequest;
                fromPartial(object: DeepPartial<DeactivateActionRequest>): DeactivateActionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateActionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateActionResponse;
                fromJSON(object: any): DeactivateActionResponse;
                toJSON(message: DeactivateActionResponse): unknown;
                create(base?: DeepPartial<DeactivateActionResponse>): DeactivateActionResponse;
                fromPartial(object: DeepPartial<DeactivateActionResponse>): DeactivateActionResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateAction: {
            readonly name: "ReactivateAction";
            readonly requestType: {
                encode(message: ReactivateActionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateActionRequest;
                fromJSON(object: any): ReactivateActionRequest;
                toJSON(message: ReactivateActionRequest): unknown;
                create(base?: DeepPartial<ReactivateActionRequest>): ReactivateActionRequest;
                fromPartial(object: DeepPartial<ReactivateActionRequest>): ReactivateActionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ReactivateActionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateActionResponse;
                fromJSON(object: any): ReactivateActionResponse;
                toJSON(message: ReactivateActionResponse): unknown;
                create(base?: DeepPartial<ReactivateActionResponse>): ReactivateActionResponse;
                fromPartial(object: DeepPartial<ReactivateActionResponse>): ReactivateActionResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deleteAction: {
            readonly name: "DeleteAction";
            readonly requestType: {
                encode(message: DeleteActionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteActionRequest;
                fromJSON(object: any): DeleteActionRequest;
                toJSON(message: DeleteActionRequest): unknown;
                create(base?: DeepPartial<DeleteActionRequest>): DeleteActionRequest;
                fromPartial(object: DeepPartial<DeleteActionRequest>): DeleteActionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: DeleteActionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteActionResponse;
                fromJSON(_: any): DeleteActionResponse;
                toJSON(_: DeleteActionResponse): unknown;
                create(base?: DeepPartial<DeleteActionResponse>): DeleteActionResponse;
                fromPartial(_: DeepPartial<DeleteActionResponse>): DeleteActionResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listFlowTypes: {
            readonly name: "ListFlowTypes";
            readonly requestType: {
                encode(_: ListFlowTypesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFlowTypesRequest;
                fromJSON(_: any): ListFlowTypesRequest;
                toJSON(_: ListFlowTypesRequest): unknown;
                create(base?: DeepPartial<ListFlowTypesRequest>): ListFlowTypesRequest;
                fromPartial(_: DeepPartial<ListFlowTypesRequest>): ListFlowTypesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListFlowTypesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFlowTypesResponse;
                fromJSON(object: any): ListFlowTypesResponse;
                toJSON(message: ListFlowTypesResponse): unknown;
                create(base?: DeepPartial<ListFlowTypesResponse>): ListFlowTypesResponse;
                fromPartial(object: DeepPartial<ListFlowTypesResponse>): ListFlowTypesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listFlowTriggerTypes: {
            readonly name: "ListFlowTriggerTypes";
            readonly requestType: {
                encode(message: ListFlowTriggerTypesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFlowTriggerTypesRequest;
                fromJSON(object: any): ListFlowTriggerTypesRequest;
                toJSON(message: ListFlowTriggerTypesRequest): unknown;
                create(base?: DeepPartial<ListFlowTriggerTypesRequest>): ListFlowTriggerTypesRequest;
                fromPartial(object: DeepPartial<ListFlowTriggerTypesRequest>): ListFlowTriggerTypesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListFlowTriggerTypesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFlowTriggerTypesResponse;
                fromJSON(object: any): ListFlowTriggerTypesResponse;
                toJSON(message: ListFlowTriggerTypesResponse): unknown;
                create(base?: DeepPartial<ListFlowTriggerTypesResponse>): ListFlowTriggerTypesResponse;
                fromPartial(object: DeepPartial<ListFlowTriggerTypesResponse>): ListFlowTriggerTypesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getFlow: {
            readonly name: "GetFlow";
            readonly requestType: {
                encode(message: GetFlowRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFlowRequest;
                fromJSON(object: any): GetFlowRequest;
                toJSON(message: GetFlowRequest): unknown;
                create(base?: DeepPartial<GetFlowRequest>): GetFlowRequest;
                fromPartial(object: DeepPartial<GetFlowRequest>): GetFlowRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetFlowResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFlowResponse;
                fromJSON(object: any): GetFlowResponse;
                toJSON(message: GetFlowResponse): unknown;
                create(base?: DeepPartial<GetFlowResponse>): GetFlowResponse;
                fromPartial(object: DeepPartial<GetFlowResponse>): GetFlowResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly clearFlow: {
            readonly name: "ClearFlow";
            readonly requestType: {
                encode(message: ClearFlowRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ClearFlowRequest;
                fromJSON(object: any): ClearFlowRequest;
                toJSON(message: ClearFlowRequest): unknown;
                create(base?: DeepPartial<ClearFlowRequest>): ClearFlowRequest;
                fromPartial(object: DeepPartial<ClearFlowRequest>): ClearFlowRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ClearFlowResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ClearFlowResponse;
                fromJSON(object: any): ClearFlowResponse;
                toJSON(message: ClearFlowResponse): unknown;
                create(base?: DeepPartial<ClearFlowResponse>): ClearFlowResponse;
                fromPartial(object: DeepPartial<ClearFlowResponse>): ClearFlowResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setTriggerActions: {
            readonly name: "SetTriggerActions";
            readonly requestType: {
                encode(message: SetTriggerActionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetTriggerActionsRequest;
                fromJSON(object: any): SetTriggerActionsRequest;
                toJSON(message: SetTriggerActionsRequest): unknown;
                create(base?: DeepPartial<SetTriggerActionsRequest>): SetTriggerActionsRequest;
                fromPartial(object: DeepPartial<SetTriggerActionsRequest>): SetTriggerActionsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetTriggerActionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetTriggerActionsResponse;
                fromJSON(object: any): SetTriggerActionsResponse;
                toJSON(message: SetTriggerActionsResponse): unknown;
                create(base?: DeepPartial<SetTriggerActionsResponse>): SetTriggerActionsResponse;
                fromPartial(object: DeepPartial<SetTriggerActionsResponse>): SetTriggerActionsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface ManagementServiceImplementation<CallContextExt = {}> {
    healthz(request: HealthzRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HealthzResponse>>;
    getOIDCInformation(request: GetOIDCInformationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOIDCInformationResponse>>;
    getIAM(request: GetIAMRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetIAMResponse>>;
    getSupportedLanguages(request: GetSupportedLanguagesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSupportedLanguagesResponse>>;
    getUserByID(request: GetUserByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserByIDResponse>>;
    getUserByLoginNameGlobal(request: GetUserByLoginNameGlobalRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserByLoginNameGlobalResponse>>;
    listUsers(request: ListUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUsersResponse>>;
    listUserChanges(request: ListUserChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserChangesResponse>>;
    isUserUnique(request: IsUserUniqueRequest, context: CallContext & CallContextExt): Promise<DeepPartial<IsUserUniqueResponse>>;
    /** deprecated: use ImportHumanUser */
    addHumanUser(request: AddHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddHumanUserResponse>>;
    importHumanUser(request: ImportHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ImportHumanUserResponse>>;
    addMachineUser(request: AddMachineUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMachineUserResponse>>;
    deactivateUser(request: DeactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserResponse>>;
    reactivateUser(request: ReactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateUserResponse>>;
    lockUser(request: LockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LockUserResponse>>;
    unlockUser(request: UnlockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UnlockUserResponse>>;
    removeUser(request: RemoveUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveUserResponse>>;
    updateUserName(request: UpdateUserNameRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateUserNameResponse>>;
    setUserMetadata(request: SetUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetUserMetadataResponse>>;
    bulkSetUserMetadata(request: BulkSetUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkSetUserMetadataResponse>>;
    listUserMetadata(request: ListUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserMetadataResponse>>;
    getUserMetadata(request: GetUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserMetadataResponse>>;
    removeUserMetadata(request: RemoveUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveUserMetadataResponse>>;
    bulkRemoveUserMetadata(request: BulkRemoveUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkRemoveUserMetadataResponse>>;
    getHumanProfile(request: GetHumanProfileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetHumanProfileResponse>>;
    updateHumanProfile(request: UpdateHumanProfileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateHumanProfileResponse>>;
    getHumanEmail(request: GetHumanEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetHumanEmailResponse>>;
    updateHumanEmail(request: UpdateHumanEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateHumanEmailResponse>>;
    resendHumanInitialization(request: ResendHumanInitializationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendHumanInitializationResponse>>;
    resendHumanEmailVerification(request: ResendHumanEmailVerificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendHumanEmailVerificationResponse>>;
    getHumanPhone(request: GetHumanPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetHumanPhoneResponse>>;
    updateHumanPhone(request: UpdateHumanPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateHumanPhoneResponse>>;
    removeHumanPhone(request: RemoveHumanPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanPhoneResponse>>;
    resendHumanPhoneVerification(request: ResendHumanPhoneVerificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendHumanPhoneVerificationResponse>>;
    removeHumanAvatar(request: RemoveHumanAvatarRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAvatarResponse>>;
    /** deprecated: use SetHumanPassword */
    setHumanInitialPassword(request: SetHumanInitialPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetHumanInitialPasswordResponse>>;
    setHumanPassword(request: SetHumanPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetHumanPasswordResponse>>;
    sendHumanResetPasswordNotification(request: SendHumanResetPasswordNotificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendHumanResetPasswordNotificationResponse>>;
    listHumanAuthFactors(request: ListHumanAuthFactorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListHumanAuthFactorsResponse>>;
    removeHumanAuthFactorOTP(request: RemoveHumanAuthFactorOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAuthFactorOTPResponse>>;
    removeHumanAuthFactorU2F(request: RemoveHumanAuthFactorU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAuthFactorU2FResponse>>;
    removeHumanAuthFactorOTPSMS(request: RemoveHumanAuthFactorOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAuthFactorOTPSMSResponse>>;
    removeHumanAuthFactorOTPEmail(request: RemoveHumanAuthFactorOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAuthFactorOTPEmailResponse>>;
    listHumanPasswordless(request: ListHumanPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListHumanPasswordlessResponse>>;
    addPasswordlessRegistration(request: AddPasswordlessRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddPasswordlessRegistrationResponse>>;
    sendPasswordlessRegistration(request: SendPasswordlessRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendPasswordlessRegistrationResponse>>;
    removeHumanPasswordless(request: RemoveHumanPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanPasswordlessResponse>>;
    updateMachine(request: UpdateMachineRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateMachineResponse>>;
    generateMachineSecret(request: GenerateMachineSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GenerateMachineSecretResponse>>;
    removeMachineSecret(request: RemoveMachineSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMachineSecretResponse>>;
    getMachineKeyByIDs(request: GetMachineKeyByIDsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMachineKeyByIDsResponse>>;
    listMachineKeys(request: ListMachineKeysRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMachineKeysResponse>>;
    addMachineKey(request: AddMachineKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMachineKeyResponse>>;
    removeMachineKey(request: RemoveMachineKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMachineKeyResponse>>;
    getPersonalAccessTokenByIDs(request: GetPersonalAccessTokenByIDsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPersonalAccessTokenByIDsResponse>>;
    listPersonalAccessTokens(request: ListPersonalAccessTokensRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListPersonalAccessTokensResponse>>;
    addPersonalAccessToken(request: AddPersonalAccessTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddPersonalAccessTokenResponse>>;
    removePersonalAccessToken(request: RemovePersonalAccessTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemovePersonalAccessTokenResponse>>;
    listHumanLinkedIDPs(request: ListHumanLinkedIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListHumanLinkedIDPsResponse>>;
    removeHumanLinkedIDP(request: RemoveHumanLinkedIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanLinkedIDPResponse>>;
    listUserMemberships(request: ListUserMembershipsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserMembershipsResponse>>;
    getMyOrg(request: GetMyOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyOrgResponse>>;
    getOrgByDomainGlobal(request: GetOrgByDomainGlobalRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgByDomainGlobalResponse>>;
    listOrgChanges(request: ListOrgChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgChangesResponse>>;
    addOrg(request: AddOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgResponse>>;
    updateOrg(request: UpdateOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgResponse>>;
    deactivateOrg(request: DeactivateOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateOrgResponse>>;
    reactivateOrg(request: ReactivateOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateOrgResponse>>;
    removeOrg(request: RemoveOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgResponse>>;
    setOrgMetadata(request: SetOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetOrgMetadataResponse>>;
    bulkSetOrgMetadata(request: BulkSetOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkSetOrgMetadataResponse>>;
    listOrgMetadata(request: ListOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgMetadataResponse>>;
    getOrgMetadata(request: GetOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgMetadataResponse>>;
    removeOrgMetadata(request: RemoveOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgMetadataResponse>>;
    bulkRemoveOrgMetadata(request: BulkRemoveOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkRemoveOrgMetadataResponse>>;
    listOrgDomains(request: ListOrgDomainsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgDomainsResponse>>;
    addOrgDomain(request: AddOrgDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgDomainResponse>>;
    removeOrgDomain(request: RemoveOrgDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgDomainResponse>>;
    generateOrgDomainValidation(request: GenerateOrgDomainValidationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GenerateOrgDomainValidationResponse>>;
    validateOrgDomain(request: ValidateOrgDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ValidateOrgDomainResponse>>;
    setPrimaryOrgDomain(request: SetPrimaryOrgDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPrimaryOrgDomainResponse>>;
    listOrgMemberRoles(request: ListOrgMemberRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgMemberRolesResponse>>;
    listOrgMembers(request: ListOrgMembersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgMembersResponse>>;
    addOrgMember(request: AddOrgMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgMemberResponse>>;
    updateOrgMember(request: UpdateOrgMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgMemberResponse>>;
    removeOrgMember(request: RemoveOrgMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgMemberResponse>>;
    getProjectByID(request: GetProjectByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetProjectByIDResponse>>;
    getGrantedProjectByID(request: GetGrantedProjectByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetGrantedProjectByIDResponse>>;
    listProjects(request: ListProjectsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectsResponse>>;
    listGrantedProjects(request: ListGrantedProjectsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListGrantedProjectsResponse>>;
    listGrantedProjectRoles(request: ListGrantedProjectRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListGrantedProjectRolesResponse>>;
    listProjectChanges(request: ListProjectChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectChangesResponse>>;
    addProject(request: AddProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectResponse>>;
    updateProject(request: UpdateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectResponse>>;
    deactivateProject(request: DeactivateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateProjectResponse>>;
    reactivateProject(request: ReactivateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateProjectResponse>>;
    removeProject(request: RemoveProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectResponse>>;
    listProjectRoles(request: ListProjectRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectRolesResponse>>;
    addProjectRole(request: AddProjectRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectRoleResponse>>;
    bulkAddProjectRoles(request: BulkAddProjectRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkAddProjectRolesResponse>>;
    updateProjectRole(request: UpdateProjectRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectRoleResponse>>;
    removeProjectRole(request: RemoveProjectRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectRoleResponse>>;
    listProjectMemberRoles(request: ListProjectMemberRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectMemberRolesResponse>>;
    listProjectMembers(request: ListProjectMembersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectMembersResponse>>;
    addProjectMember(request: AddProjectMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectMemberResponse>>;
    updateProjectMember(request: UpdateProjectMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectMemberResponse>>;
    removeProjectMember(request: RemoveProjectMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectMemberResponse>>;
    getAppByID(request: GetAppByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAppByIDResponse>>;
    listApps(request: ListAppsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAppsResponse>>;
    listAppChanges(request: ListAppChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAppChangesResponse>>;
    addOIDCApp(request: AddOIDCAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOIDCAppResponse>>;
    addSAMLApp(request: AddSAMLAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSAMLAppResponse>>;
    addAPIApp(request: AddAPIAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAPIAppResponse>>;
    /** Changes application */
    updateApp(request: UpdateAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAppResponse>>;
    updateOIDCAppConfig(request: UpdateOIDCAppConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOIDCAppConfigResponse>>;
    updateSAMLAppConfig(request: UpdateSAMLAppConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSAMLAppConfigResponse>>;
    updateAPIAppConfig(request: UpdateAPIAppConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAPIAppConfigResponse>>;
    deactivateApp(request: DeactivateAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateAppResponse>>;
    reactivateApp(request: ReactivateAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateAppResponse>>;
    removeApp(request: RemoveAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveAppResponse>>;
    regenerateOIDCClientSecret(request: RegenerateOIDCClientSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegenerateOIDCClientSecretResponse>>;
    regenerateAPIClientSecret(request: RegenerateAPIClientSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegenerateAPIClientSecretResponse>>;
    getAppKey(request: GetAppKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAppKeyResponse>>;
    listAppKeys(request: ListAppKeysRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAppKeysResponse>>;
    addAppKey(request: AddAppKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAppKeyResponse>>;
    removeAppKey(request: RemoveAppKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveAppKeyResponse>>;
    listProjectGrantChanges(request: ListProjectGrantChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectGrantChangesResponse>>;
    getProjectGrantByID(request: GetProjectGrantByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetProjectGrantByIDResponse>>;
    listProjectGrants(request: ListProjectGrantsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectGrantsResponse>>;
    listAllProjectGrants(request: ListAllProjectGrantsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAllProjectGrantsResponse>>;
    addProjectGrant(request: AddProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectGrantResponse>>;
    updateProjectGrant(request: UpdateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectGrantResponse>>;
    deactivateProjectGrant(request: DeactivateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateProjectGrantResponse>>;
    reactivateProjectGrant(request: ReactivateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateProjectGrantResponse>>;
    removeProjectGrant(request: RemoveProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectGrantResponse>>;
    listProjectGrantMemberRoles(request: ListProjectGrantMemberRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectGrantMemberRolesResponse>>;
    listProjectGrantMembers(request: ListProjectGrantMembersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectGrantMembersResponse>>;
    addProjectGrantMember(request: AddProjectGrantMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectGrantMemberResponse>>;
    updateProjectGrantMember(request: UpdateProjectGrantMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectGrantMemberResponse>>;
    removeProjectGrantMember(request: RemoveProjectGrantMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectGrantMemberResponse>>;
    getUserGrantByID(request: GetUserGrantByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserGrantByIDResponse>>;
    listUserGrants(request: ListUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserGrantResponse>>;
    addUserGrant(request: AddUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddUserGrantResponse>>;
    updateUserGrant(request: UpdateUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateUserGrantResponse>>;
    deactivateUserGrant(request: DeactivateUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserGrantResponse>>;
    reactivateUserGrant(request: ReactivateUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateUserGrantResponse>>;
    removeUserGrant(request: RemoveUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveUserGrantResponse>>;
    bulkRemoveUserGrant(request: BulkRemoveUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkRemoveUserGrantResponse>>;
    /** deprecated: please use DomainPolicy instead */
    getOrgIAMPolicy(request: GetOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgIAMPolicyResponse>>;
    getDomainPolicy(request: GetDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDomainPolicyResponse>>;
    getLoginPolicy(request: GetLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLoginPolicyResponse>>;
    getDefaultLoginPolicy(request: GetDefaultLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLoginPolicyResponse>>;
    addCustomLoginPolicy(request: AddCustomLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomLoginPolicyResponse>>;
    updateCustomLoginPolicy(request: UpdateCustomLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomLoginPolicyResponse>>;
    resetLoginPolicyToDefault(request: ResetLoginPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetLoginPolicyToDefaultResponse>>;
    listLoginPolicyIDPs(request: ListLoginPolicyIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListLoginPolicyIDPsResponse>>;
    addIDPToLoginPolicy(request: AddIDPToLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIDPToLoginPolicyResponse>>;
    removeIDPFromLoginPolicy(request: RemoveIDPFromLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveIDPFromLoginPolicyResponse>>;
    listLoginPolicySecondFactors(request: ListLoginPolicySecondFactorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListLoginPolicySecondFactorsResponse>>;
    addSecondFactorToLoginPolicy(request: AddSecondFactorToLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSecondFactorToLoginPolicyResponse>>;
    removeSecondFactorFromLoginPolicy(request: RemoveSecondFactorFromLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveSecondFactorFromLoginPolicyResponse>>;
    listLoginPolicyMultiFactors(request: ListLoginPolicyMultiFactorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListLoginPolicyMultiFactorsResponse>>;
    addMultiFactorToLoginPolicy(request: AddMultiFactorToLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMultiFactorToLoginPolicyResponse>>;
    removeMultiFactorFromLoginPolicy(request: RemoveMultiFactorFromLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMultiFactorFromLoginPolicyResponse>>;
    getPasswordComplexityPolicy(request: GetPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPasswordComplexityPolicyResponse>>;
    getDefaultPasswordComplexityPolicy(request: GetDefaultPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordComplexityPolicyResponse>>;
    addCustomPasswordComplexityPolicy(request: AddCustomPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomPasswordComplexityPolicyResponse>>;
    updateCustomPasswordComplexityPolicy(request: UpdateCustomPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomPasswordComplexityPolicyResponse>>;
    resetPasswordComplexityPolicyToDefault(request: ResetPasswordComplexityPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetPasswordComplexityPolicyToDefaultResponse>>;
    /** The password age policy is not used at the moment */
    getPasswordAgePolicy(request: GetPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPasswordAgePolicyResponse>>;
    /** The password age policy is not used at the moment */
    getDefaultPasswordAgePolicy(request: GetDefaultPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordAgePolicyResponse>>;
    /** The password age policy is not used at the moment */
    addCustomPasswordAgePolicy(request: AddCustomPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomPasswordAgePolicyResponse>>;
    /** The password age policy is not used at the moment */
    updateCustomPasswordAgePolicy(request: UpdateCustomPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomPasswordAgePolicyResponse>>;
    /** The password age policy is not used at the moment */
    resetPasswordAgePolicyToDefault(request: ResetPasswordAgePolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetPasswordAgePolicyToDefaultResponse>>;
    getLockoutPolicy(request: GetLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLockoutPolicyResponse>>;
    getDefaultLockoutPolicy(request: GetDefaultLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLockoutPolicyResponse>>;
    addCustomLockoutPolicy(request: AddCustomLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomLockoutPolicyResponse>>;
    updateCustomLockoutPolicy(request: UpdateCustomLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomLockoutPolicyResponse>>;
    resetLockoutPolicyToDefault(request: ResetLockoutPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetLockoutPolicyToDefaultResponse>>;
    getPrivacyPolicy(request: GetPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPrivacyPolicyResponse>>;
    getDefaultPrivacyPolicy(request: GetDefaultPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPrivacyPolicyResponse>>;
    addCustomPrivacyPolicy(request: AddCustomPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomPrivacyPolicyResponse>>;
    updateCustomPrivacyPolicy(request: UpdateCustomPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomPrivacyPolicyResponse>>;
    resetPrivacyPolicyToDefault(request: ResetPrivacyPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetPrivacyPolicyToDefaultResponse>>;
    getNotificationPolicy(request: GetNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotificationPolicyResponse>>;
    getDefaultNotificationPolicy(request: GetDefaultNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultNotificationPolicyResponse>>;
    addCustomNotificationPolicy(request: AddCustomNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomNotificationPolicyResponse>>;
    updateCustomNotificationPolicy(request: UpdateCustomNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomNotificationPolicyResponse>>;
    resetNotificationPolicyToDefault(request: ResetNotificationPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetNotificationPolicyToDefaultResponse>>;
    getLabelPolicy(request: GetLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLabelPolicyResponse>>;
    getPreviewLabelPolicy(request: GetPreviewLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPreviewLabelPolicyResponse>>;
    getDefaultLabelPolicy(request: GetDefaultLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLabelPolicyResponse>>;
    addCustomLabelPolicy(request: AddCustomLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomLabelPolicyResponse>>;
    updateCustomLabelPolicy(request: UpdateCustomLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomLabelPolicyResponse>>;
    activateCustomLabelPolicy(request: ActivateCustomLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateCustomLabelPolicyResponse>>;
    removeCustomLabelPolicyLogo(request: RemoveCustomLabelPolicyLogoRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyLogoResponse>>;
    removeCustomLabelPolicyLogoDark(request: RemoveCustomLabelPolicyLogoDarkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyLogoDarkResponse>>;
    removeCustomLabelPolicyIcon(request: RemoveCustomLabelPolicyIconRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyIconResponse>>;
    removeCustomLabelPolicyIconDark(request: RemoveCustomLabelPolicyIconDarkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyIconDarkResponse>>;
    removeCustomLabelPolicyFont(request: RemoveCustomLabelPolicyFontRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyFontResponse>>;
    resetLabelPolicyToDefault(request: ResetLabelPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetLabelPolicyToDefaultResponse>>;
    getCustomInitMessageText(request: GetCustomInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomInitMessageTextResponse>>;
    getDefaultInitMessageText(request: GetDefaultInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultInitMessageTextResponse>>;
    setCustomInitMessageText(request: SetCustomInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomInitMessageTextResponse>>;
    resetCustomInitMessageTextToDefault(request: ResetCustomInitMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomInitMessageTextToDefaultResponse>>;
    getCustomPasswordResetMessageText(request: GetCustomPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordResetMessageTextResponse>>;
    getDefaultPasswordResetMessageText(request: GetDefaultPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordResetMessageTextResponse>>;
    setCustomPasswordResetMessageText(request: SetCustomPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomPasswordResetMessageTextResponse>>;
    resetCustomPasswordResetMessageTextToDefault(request: ResetCustomPasswordResetMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordResetMessageTextToDefaultResponse>>;
    getCustomVerifyEmailMessageText(request: GetCustomVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyEmailMessageTextResponse>>;
    getDefaultVerifyEmailMessageText(request: GetDefaultVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyEmailMessageTextResponse>>;
    setCustomVerifyEmailMessageText(request: SetCustomVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomVerifyEmailMessageTextResponse>>;
    resetCustomVerifyEmailMessageTextToDefault(request: ResetCustomVerifyEmailMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultResponse>>;
    getCustomVerifyPhoneMessageText(request: GetCustomVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyPhoneMessageTextResponse>>;
    getDefaultVerifyPhoneMessageText(request: GetDefaultVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyPhoneMessageTextResponse>>;
    setCustomVerifyPhoneMessageText(request: SetCustomVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomVerifyPhoneMessageTextResponse>>;
    resetCustomVerifyPhoneMessageTextToDefault(request: ResetCustomVerifyPhoneMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultResponse>>;
    getCustomVerifySMSOTPMessageText(request: GetCustomVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifySMSOTPMessageTextResponse>>;
    getDefaultVerifySMSOTPMessageText(request: GetDefaultVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifySMSOTPMessageTextResponse>>;
    setCustomVerifySMSOTPMessageText(request: SetCustomVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomVerifySMSOTPMessageTextResponse>>;
    resetCustomVerifySMSOTPMessageTextToDefault(request: ResetCustomVerifySMSOTPMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>>;
    getCustomVerifyEmailOTPMessageText(request: GetCustomVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyEmailOTPMessageTextResponse>>;
    getDefaultVerifyEmailOTPMessageText(request: GetDefaultVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyEmailOTPMessageTextResponse>>;
    setCustomVerifyEmailOTPMessageText(request: SetCustomVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomVerifyEmailOTPMessageTextResponse>>;
    resetCustomVerifyEmailOTPMessageTextToDefault(request: ResetCustomVerifyEmailOTPMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>>;
    getCustomDomainClaimedMessageText(request: GetCustomDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomDomainClaimedMessageTextResponse>>;
    getDefaultDomainClaimedMessageText(request: GetDefaultDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultDomainClaimedMessageTextResponse>>;
    setCustomDomainClaimedMessageCustomText(request: SetCustomDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomDomainClaimedMessageTextResponse>>;
    resetCustomDomainClaimedMessageTextToDefault(request: ResetCustomDomainClaimedMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultResponse>>;
    getCustomPasswordlessRegistrationMessageText(request: GetCustomPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordlessRegistrationMessageTextResponse>>;
    getDefaultPasswordlessRegistrationMessageText(request: GetDefaultPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordlessRegistrationMessageTextResponse>>;
    setCustomPasswordlessRegistrationMessageCustomText(request: SetCustomPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomPasswordlessRegistrationMessageTextResponse>>;
    resetCustomPasswordlessRegistrationMessageTextToDefault(request: ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>>;
    getCustomPasswordChangeMessageText(request: GetCustomPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordChangeMessageTextResponse>>;
    getDefaultPasswordChangeMessageText(request: GetDefaultPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordChangeMessageTextResponse>>;
    setCustomPasswordChangeMessageCustomText(request: SetCustomPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomPasswordChangeMessageTextResponse>>;
    resetCustomPasswordChangeMessageTextToDefault(request: ResetCustomPasswordChangeMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultResponse>>;
    getCustomLoginTexts(request: GetCustomLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomLoginTextsResponse>>;
    getDefaultLoginTexts(request: GetDefaultLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLoginTextsResponse>>;
    setCustomLoginText(request: SetCustomLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomLoginTextsResponse>>;
    resetCustomLoginTextToDefault(request: ResetCustomLoginTextsToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomLoginTextsToDefaultResponse>>;
    getOrgIDPByID(request: GetOrgIDPByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgIDPByIDResponse>>;
    listOrgIDPs(request: ListOrgIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgIDPsResponse>>;
    addOrgOIDCIDP(request: AddOrgOIDCIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgOIDCIDPResponse>>;
    addOrgJWTIDP(request: AddOrgJWTIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgJWTIDPResponse>>;
    deactivateOrgIDP(request: DeactivateOrgIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateOrgIDPResponse>>;
    reactivateOrgIDP(request: ReactivateOrgIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateOrgIDPResponse>>;
    removeOrgIDP(request: RemoveOrgIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgIDPResponse>>;
    updateOrgIDP(request: UpdateOrgIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgIDPResponse>>;
    updateOrgIDPOIDCConfig(request: UpdateOrgIDPOIDCConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgIDPOIDCConfigResponse>>;
    updateOrgIDPJWTConfig(request: UpdateOrgIDPJWTConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgIDPJWTConfigResponse>>;
    /**
     * Returns all identity providers, which match the query
     * Limit should always be set, there is a default limit set by the service
     */
    listProviders(request: ListProvidersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProvidersResponse>>;
    /** Returns an identity provider of the organization */
    getProviderByID(request: GetProviderByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetProviderByIDResponse>>;
    /** Add a new OAuth2 identity provider in the organization */
    addGenericOAuthProvider(request: AddGenericOAuthProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGenericOAuthProviderResponse>>;
    /** Change an existing OAuth2 identity provider in the organization */
    updateGenericOAuthProvider(request: UpdateGenericOAuthProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGenericOAuthProviderResponse>>;
    /** Add a new OIDC identity provider in the organization */
    addGenericOIDCProvider(request: AddGenericOIDCProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGenericOIDCProviderResponse>>;
    /** Change an existing OIDC identity provider in the organization */
    updateGenericOIDCProvider(request: UpdateGenericOIDCProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGenericOIDCProviderResponse>>;
    /** Migrate an existing OIDC identity provider in the organization */
    migrateGenericOIDCProvider(request: MigrateGenericOIDCProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<MigrateGenericOIDCProviderResponse>>;
    /** Add a new JWT identity provider in the organization */
    addJWTProvider(request: AddJWTProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddJWTProviderResponse>>;
    /** Change an existing JWT identity provider in the organization */
    updateJWTProvider(request: UpdateJWTProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateJWTProviderResponse>>;
    /** Add a new Azure AD identity provider in the organization */
    addAzureADProvider(request: AddAzureADProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAzureADProviderResponse>>;
    /** Change an existing Azure AD identity provider in the organization */
    updateAzureADProvider(request: UpdateAzureADProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAzureADProviderResponse>>;
    /** Add a new GitHub identity provider in the organization */
    addGitHubProvider(request: AddGitHubProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitHubProviderResponse>>;
    /** Change an existing GitHub identity provider in the organization */
    updateGitHubProvider(request: UpdateGitHubProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitHubProviderResponse>>;
    /** Add a new GitHub Enterprise Server identity provider in the organization */
    addGitHubEnterpriseServerProvider(request: AddGitHubEnterpriseServerProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitHubEnterpriseServerProviderResponse>>;
    /** Change an existing GitHub Enterprise Server identity provider in the organization */
    updateGitHubEnterpriseServerProvider(request: UpdateGitHubEnterpriseServerProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitHubEnterpriseServerProviderResponse>>;
    /** Add a new GitLab identity provider in the organization */
    addGitLabProvider(request: AddGitLabProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitLabProviderResponse>>;
    /** Change an existing GitLab identity provider in the organization */
    updateGitLabProvider(request: UpdateGitLabProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitLabProviderResponse>>;
    /** Add a new self hosted GitLab identity provider in the organization */
    addGitLabSelfHostedProvider(request: AddGitLabSelfHostedProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitLabSelfHostedProviderResponse>>;
    /** Change an existing self hosted GitLab identity provider in the organization */
    updateGitLabSelfHostedProvider(request: UpdateGitLabSelfHostedProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitLabSelfHostedProviderResponse>>;
    /** Add a new Google identity provider in the organization */
    addGoogleProvider(request: AddGoogleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGoogleProviderResponse>>;
    /** Change an existing Google identity provider in the organization */
    updateGoogleProvider(request: UpdateGoogleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGoogleProviderResponse>>;
    /** Add a new LDAP identity provider in the organization */
    addLDAPProvider(request: AddLDAPProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddLDAPProviderResponse>>;
    /** Change an existing LDAP identity provider in the organization */
    updateLDAPProvider(request: UpdateLDAPProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateLDAPProviderResponse>>;
    /** Add a new Apple identity provider in the organization */
    addAppleProvider(request: AddAppleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAppleProviderResponse>>;
    /** Change an existing Apple identity provider in the organization */
    updateAppleProvider(request: UpdateAppleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAppleProviderResponse>>;
    /** Add a new SAML identity provider in the organization */
    addSAMLProvider(request: AddSAMLProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSAMLProviderResponse>>;
    /** Change an existing SAML identity provider in the organization */
    updateSAMLProvider(request: UpdateSAMLProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSAMLProviderResponse>>;
    /** Regenerate certificate for an existing SAML identity provider in the organization */
    regenerateSAMLProviderCertificate(request: RegenerateSAMLProviderCertificateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegenerateSAMLProviderCertificateResponse>>;
    /**
     * Remove an identity provider
     * Will remove all linked providers of this configuration on the users
     */
    deleteProvider(request: DeleteProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteProviderResponse>>;
    listActions(request: ListActionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListActionsResponse>>;
    getAction(request: GetActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetActionResponse>>;
    createAction(request: CreateActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateActionResponse>>;
    updateAction(request: UpdateActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateActionResponse>>;
    deactivateAction(request: DeactivateActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateActionResponse>>;
    reactivateAction(request: ReactivateActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateActionResponse>>;
    deleteAction(request: DeleteActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteActionResponse>>;
    listFlowTypes(request: ListFlowTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFlowTypesResponse>>;
    listFlowTriggerTypes(request: ListFlowTriggerTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFlowTriggerTypesResponse>>;
    getFlow(request: GetFlowRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetFlowResponse>>;
    clearFlow(request: ClearFlowRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ClearFlowResponse>>;
    setTriggerActions(request: SetTriggerActionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetTriggerActionsResponse>>;
}
export interface ManagementServiceClient<CallOptionsExt = {}> {
    healthz(request: DeepPartial<HealthzRequest>, options?: CallOptions & CallOptionsExt): Promise<HealthzResponse>;
    getOIDCInformation(request: DeepPartial<GetOIDCInformationRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOIDCInformationResponse>;
    getIAM(request: DeepPartial<GetIAMRequest>, options?: CallOptions & CallOptionsExt): Promise<GetIAMResponse>;
    getSupportedLanguages(request: DeepPartial<GetSupportedLanguagesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSupportedLanguagesResponse>;
    getUserByID(request: DeepPartial<GetUserByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserByIDResponse>;
    getUserByLoginNameGlobal(request: DeepPartial<GetUserByLoginNameGlobalRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserByLoginNameGlobalResponse>;
    listUsers(request: DeepPartial<ListUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUsersResponse>;
    listUserChanges(request: DeepPartial<ListUserChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserChangesResponse>;
    isUserUnique(request: DeepPartial<IsUserUniqueRequest>, options?: CallOptions & CallOptionsExt): Promise<IsUserUniqueResponse>;
    /** deprecated: use ImportHumanUser */
    addHumanUser(request: DeepPartial<AddHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<AddHumanUserResponse>;
    importHumanUser(request: DeepPartial<ImportHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ImportHumanUserResponse>;
    addMachineUser(request: DeepPartial<AddMachineUserRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMachineUserResponse>;
    deactivateUser(request: DeepPartial<DeactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserResponse>;
    reactivateUser(request: DeepPartial<ReactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateUserResponse>;
    lockUser(request: DeepPartial<LockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<LockUserResponse>;
    unlockUser(request: DeepPartial<UnlockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UnlockUserResponse>;
    removeUser(request: DeepPartial<RemoveUserRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveUserResponse>;
    updateUserName(request: DeepPartial<UpdateUserNameRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateUserNameResponse>;
    setUserMetadata(request: DeepPartial<SetUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<SetUserMetadataResponse>;
    bulkSetUserMetadata(request: DeepPartial<BulkSetUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkSetUserMetadataResponse>;
    listUserMetadata(request: DeepPartial<ListUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserMetadataResponse>;
    getUserMetadata(request: DeepPartial<GetUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserMetadataResponse>;
    removeUserMetadata(request: DeepPartial<RemoveUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveUserMetadataResponse>;
    bulkRemoveUserMetadata(request: DeepPartial<BulkRemoveUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkRemoveUserMetadataResponse>;
    getHumanProfile(request: DeepPartial<GetHumanProfileRequest>, options?: CallOptions & CallOptionsExt): Promise<GetHumanProfileResponse>;
    updateHumanProfile(request: DeepPartial<UpdateHumanProfileRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateHumanProfileResponse>;
    getHumanEmail(request: DeepPartial<GetHumanEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<GetHumanEmailResponse>;
    updateHumanEmail(request: DeepPartial<UpdateHumanEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateHumanEmailResponse>;
    resendHumanInitialization(request: DeepPartial<ResendHumanInitializationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendHumanInitializationResponse>;
    resendHumanEmailVerification(request: DeepPartial<ResendHumanEmailVerificationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendHumanEmailVerificationResponse>;
    getHumanPhone(request: DeepPartial<GetHumanPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<GetHumanPhoneResponse>;
    updateHumanPhone(request: DeepPartial<UpdateHumanPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateHumanPhoneResponse>;
    removeHumanPhone(request: DeepPartial<RemoveHumanPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanPhoneResponse>;
    resendHumanPhoneVerification(request: DeepPartial<ResendHumanPhoneVerificationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendHumanPhoneVerificationResponse>;
    removeHumanAvatar(request: DeepPartial<RemoveHumanAvatarRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAvatarResponse>;
    /** deprecated: use SetHumanPassword */
    setHumanInitialPassword(request: DeepPartial<SetHumanInitialPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetHumanInitialPasswordResponse>;
    setHumanPassword(request: DeepPartial<SetHumanPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetHumanPasswordResponse>;
    sendHumanResetPasswordNotification(request: DeepPartial<SendHumanResetPasswordNotificationRequest>, options?: CallOptions & CallOptionsExt): Promise<SendHumanResetPasswordNotificationResponse>;
    listHumanAuthFactors(request: DeepPartial<ListHumanAuthFactorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListHumanAuthFactorsResponse>;
    removeHumanAuthFactorOTP(request: DeepPartial<RemoveHumanAuthFactorOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAuthFactorOTPResponse>;
    removeHumanAuthFactorU2F(request: DeepPartial<RemoveHumanAuthFactorU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAuthFactorU2FResponse>;
    removeHumanAuthFactorOTPSMS(request: DeepPartial<RemoveHumanAuthFactorOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAuthFactorOTPSMSResponse>;
    removeHumanAuthFactorOTPEmail(request: DeepPartial<RemoveHumanAuthFactorOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAuthFactorOTPEmailResponse>;
    listHumanPasswordless(request: DeepPartial<ListHumanPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<ListHumanPasswordlessResponse>;
    addPasswordlessRegistration(request: DeepPartial<AddPasswordlessRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<AddPasswordlessRegistrationResponse>;
    sendPasswordlessRegistration(request: DeepPartial<SendPasswordlessRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<SendPasswordlessRegistrationResponse>;
    removeHumanPasswordless(request: DeepPartial<RemoveHumanPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanPasswordlessResponse>;
    updateMachine(request: DeepPartial<UpdateMachineRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateMachineResponse>;
    generateMachineSecret(request: DeepPartial<GenerateMachineSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<GenerateMachineSecretResponse>;
    removeMachineSecret(request: DeepPartial<RemoveMachineSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMachineSecretResponse>;
    getMachineKeyByIDs(request: DeepPartial<GetMachineKeyByIDsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMachineKeyByIDsResponse>;
    listMachineKeys(request: DeepPartial<ListMachineKeysRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMachineKeysResponse>;
    addMachineKey(request: DeepPartial<AddMachineKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMachineKeyResponse>;
    removeMachineKey(request: DeepPartial<RemoveMachineKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMachineKeyResponse>;
    getPersonalAccessTokenByIDs(request: DeepPartial<GetPersonalAccessTokenByIDsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPersonalAccessTokenByIDsResponse>;
    listPersonalAccessTokens(request: DeepPartial<ListPersonalAccessTokensRequest>, options?: CallOptions & CallOptionsExt): Promise<ListPersonalAccessTokensResponse>;
    addPersonalAccessToken(request: DeepPartial<AddPersonalAccessTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<AddPersonalAccessTokenResponse>;
    removePersonalAccessToken(request: DeepPartial<RemovePersonalAccessTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<RemovePersonalAccessTokenResponse>;
    listHumanLinkedIDPs(request: DeepPartial<ListHumanLinkedIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListHumanLinkedIDPsResponse>;
    removeHumanLinkedIDP(request: DeepPartial<RemoveHumanLinkedIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanLinkedIDPResponse>;
    listUserMemberships(request: DeepPartial<ListUserMembershipsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserMembershipsResponse>;
    getMyOrg(request: DeepPartial<GetMyOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyOrgResponse>;
    getOrgByDomainGlobal(request: DeepPartial<GetOrgByDomainGlobalRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgByDomainGlobalResponse>;
    listOrgChanges(request: DeepPartial<ListOrgChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgChangesResponse>;
    addOrg(request: DeepPartial<AddOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgResponse>;
    updateOrg(request: DeepPartial<UpdateOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgResponse>;
    deactivateOrg(request: DeepPartial<DeactivateOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateOrgResponse>;
    reactivateOrg(request: DeepPartial<ReactivateOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateOrgResponse>;
    removeOrg(request: DeepPartial<RemoveOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgResponse>;
    setOrgMetadata(request: DeepPartial<SetOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<SetOrgMetadataResponse>;
    bulkSetOrgMetadata(request: DeepPartial<BulkSetOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkSetOrgMetadataResponse>;
    listOrgMetadata(request: DeepPartial<ListOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgMetadataResponse>;
    getOrgMetadata(request: DeepPartial<GetOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgMetadataResponse>;
    removeOrgMetadata(request: DeepPartial<RemoveOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgMetadataResponse>;
    bulkRemoveOrgMetadata(request: DeepPartial<BulkRemoveOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkRemoveOrgMetadataResponse>;
    listOrgDomains(request: DeepPartial<ListOrgDomainsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgDomainsResponse>;
    addOrgDomain(request: DeepPartial<AddOrgDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgDomainResponse>;
    removeOrgDomain(request: DeepPartial<RemoveOrgDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgDomainResponse>;
    generateOrgDomainValidation(request: DeepPartial<GenerateOrgDomainValidationRequest>, options?: CallOptions & CallOptionsExt): Promise<GenerateOrgDomainValidationResponse>;
    validateOrgDomain(request: DeepPartial<ValidateOrgDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<ValidateOrgDomainResponse>;
    setPrimaryOrgDomain(request: DeepPartial<SetPrimaryOrgDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPrimaryOrgDomainResponse>;
    listOrgMemberRoles(request: DeepPartial<ListOrgMemberRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgMemberRolesResponse>;
    listOrgMembers(request: DeepPartial<ListOrgMembersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgMembersResponse>;
    addOrgMember(request: DeepPartial<AddOrgMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgMemberResponse>;
    updateOrgMember(request: DeepPartial<UpdateOrgMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgMemberResponse>;
    removeOrgMember(request: DeepPartial<RemoveOrgMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgMemberResponse>;
    getProjectByID(request: DeepPartial<GetProjectByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetProjectByIDResponse>;
    getGrantedProjectByID(request: DeepPartial<GetGrantedProjectByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetGrantedProjectByIDResponse>;
    listProjects(request: DeepPartial<ListProjectsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectsResponse>;
    listGrantedProjects(request: DeepPartial<ListGrantedProjectsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListGrantedProjectsResponse>;
    listGrantedProjectRoles(request: DeepPartial<ListGrantedProjectRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListGrantedProjectRolesResponse>;
    listProjectChanges(request: DeepPartial<ListProjectChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectChangesResponse>;
    addProject(request: DeepPartial<AddProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectResponse>;
    updateProject(request: DeepPartial<UpdateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectResponse>;
    deactivateProject(request: DeepPartial<DeactivateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateProjectResponse>;
    reactivateProject(request: DeepPartial<ReactivateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateProjectResponse>;
    removeProject(request: DeepPartial<RemoveProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectResponse>;
    listProjectRoles(request: DeepPartial<ListProjectRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectRolesResponse>;
    addProjectRole(request: DeepPartial<AddProjectRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectRoleResponse>;
    bulkAddProjectRoles(request: DeepPartial<BulkAddProjectRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkAddProjectRolesResponse>;
    updateProjectRole(request: DeepPartial<UpdateProjectRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectRoleResponse>;
    removeProjectRole(request: DeepPartial<RemoveProjectRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectRoleResponse>;
    listProjectMemberRoles(request: DeepPartial<ListProjectMemberRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectMemberRolesResponse>;
    listProjectMembers(request: DeepPartial<ListProjectMembersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectMembersResponse>;
    addProjectMember(request: DeepPartial<AddProjectMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectMemberResponse>;
    updateProjectMember(request: DeepPartial<UpdateProjectMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectMemberResponse>;
    removeProjectMember(request: DeepPartial<RemoveProjectMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectMemberResponse>;
    getAppByID(request: DeepPartial<GetAppByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAppByIDResponse>;
    listApps(request: DeepPartial<ListAppsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAppsResponse>;
    listAppChanges(request: DeepPartial<ListAppChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAppChangesResponse>;
    addOIDCApp(request: DeepPartial<AddOIDCAppRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOIDCAppResponse>;
    addSAMLApp(request: DeepPartial<AddSAMLAppRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSAMLAppResponse>;
    addAPIApp(request: DeepPartial<AddAPIAppRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAPIAppResponse>;
    /** Changes application */
    updateApp(request: DeepPartial<UpdateAppRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAppResponse>;
    updateOIDCAppConfig(request: DeepPartial<UpdateOIDCAppConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOIDCAppConfigResponse>;
    updateSAMLAppConfig(request: DeepPartial<UpdateSAMLAppConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSAMLAppConfigResponse>;
    updateAPIAppConfig(request: DeepPartial<UpdateAPIAppConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAPIAppConfigResponse>;
    deactivateApp(request: DeepPartial<DeactivateAppRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateAppResponse>;
    reactivateApp(request: DeepPartial<ReactivateAppRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateAppResponse>;
    removeApp(request: DeepPartial<RemoveAppRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveAppResponse>;
    regenerateOIDCClientSecret(request: DeepPartial<RegenerateOIDCClientSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<RegenerateOIDCClientSecretResponse>;
    regenerateAPIClientSecret(request: DeepPartial<RegenerateAPIClientSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<RegenerateAPIClientSecretResponse>;
    getAppKey(request: DeepPartial<GetAppKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAppKeyResponse>;
    listAppKeys(request: DeepPartial<ListAppKeysRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAppKeysResponse>;
    addAppKey(request: DeepPartial<AddAppKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAppKeyResponse>;
    removeAppKey(request: DeepPartial<RemoveAppKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveAppKeyResponse>;
    listProjectGrantChanges(request: DeepPartial<ListProjectGrantChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectGrantChangesResponse>;
    getProjectGrantByID(request: DeepPartial<GetProjectGrantByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetProjectGrantByIDResponse>;
    listProjectGrants(request: DeepPartial<ListProjectGrantsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectGrantsResponse>;
    listAllProjectGrants(request: DeepPartial<ListAllProjectGrantsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAllProjectGrantsResponse>;
    addProjectGrant(request: DeepPartial<AddProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectGrantResponse>;
    updateProjectGrant(request: DeepPartial<UpdateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectGrantResponse>;
    deactivateProjectGrant(request: DeepPartial<DeactivateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateProjectGrantResponse>;
    reactivateProjectGrant(request: DeepPartial<ReactivateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateProjectGrantResponse>;
    removeProjectGrant(request: DeepPartial<RemoveProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectGrantResponse>;
    listProjectGrantMemberRoles(request: DeepPartial<ListProjectGrantMemberRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectGrantMemberRolesResponse>;
    listProjectGrantMembers(request: DeepPartial<ListProjectGrantMembersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectGrantMembersResponse>;
    addProjectGrantMember(request: DeepPartial<AddProjectGrantMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectGrantMemberResponse>;
    updateProjectGrantMember(request: DeepPartial<UpdateProjectGrantMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectGrantMemberResponse>;
    removeProjectGrantMember(request: DeepPartial<RemoveProjectGrantMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectGrantMemberResponse>;
    getUserGrantByID(request: DeepPartial<GetUserGrantByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserGrantByIDResponse>;
    listUserGrants(request: DeepPartial<ListUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserGrantResponse>;
    addUserGrant(request: DeepPartial<AddUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<AddUserGrantResponse>;
    updateUserGrant(request: DeepPartial<UpdateUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateUserGrantResponse>;
    deactivateUserGrant(request: DeepPartial<DeactivateUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserGrantResponse>;
    reactivateUserGrant(request: DeepPartial<ReactivateUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateUserGrantResponse>;
    removeUserGrant(request: DeepPartial<RemoveUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveUserGrantResponse>;
    bulkRemoveUserGrant(request: DeepPartial<BulkRemoveUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkRemoveUserGrantResponse>;
    /** deprecated: please use DomainPolicy instead */
    getOrgIAMPolicy(request: DeepPartial<GetOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgIAMPolicyResponse>;
    getDomainPolicy(request: DeepPartial<GetDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDomainPolicyResponse>;
    getLoginPolicy(request: DeepPartial<GetLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLoginPolicyResponse>;
    getDefaultLoginPolicy(request: DeepPartial<GetDefaultLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLoginPolicyResponse>;
    addCustomLoginPolicy(request: DeepPartial<AddCustomLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomLoginPolicyResponse>;
    updateCustomLoginPolicy(request: DeepPartial<UpdateCustomLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomLoginPolicyResponse>;
    resetLoginPolicyToDefault(request: DeepPartial<ResetLoginPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetLoginPolicyToDefaultResponse>;
    listLoginPolicyIDPs(request: DeepPartial<ListLoginPolicyIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListLoginPolicyIDPsResponse>;
    addIDPToLoginPolicy(request: DeepPartial<AddIDPToLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIDPToLoginPolicyResponse>;
    removeIDPFromLoginPolicy(request: DeepPartial<RemoveIDPFromLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveIDPFromLoginPolicyResponse>;
    listLoginPolicySecondFactors(request: DeepPartial<ListLoginPolicySecondFactorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListLoginPolicySecondFactorsResponse>;
    addSecondFactorToLoginPolicy(request: DeepPartial<AddSecondFactorToLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSecondFactorToLoginPolicyResponse>;
    removeSecondFactorFromLoginPolicy(request: DeepPartial<RemoveSecondFactorFromLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveSecondFactorFromLoginPolicyResponse>;
    listLoginPolicyMultiFactors(request: DeepPartial<ListLoginPolicyMultiFactorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListLoginPolicyMultiFactorsResponse>;
    addMultiFactorToLoginPolicy(request: DeepPartial<AddMultiFactorToLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMultiFactorToLoginPolicyResponse>;
    removeMultiFactorFromLoginPolicy(request: DeepPartial<RemoveMultiFactorFromLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMultiFactorFromLoginPolicyResponse>;
    getPasswordComplexityPolicy(request: DeepPartial<GetPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPasswordComplexityPolicyResponse>;
    getDefaultPasswordComplexityPolicy(request: DeepPartial<GetDefaultPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordComplexityPolicyResponse>;
    addCustomPasswordComplexityPolicy(request: DeepPartial<AddCustomPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomPasswordComplexityPolicyResponse>;
    updateCustomPasswordComplexityPolicy(request: DeepPartial<UpdateCustomPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomPasswordComplexityPolicyResponse>;
    resetPasswordComplexityPolicyToDefault(request: DeepPartial<ResetPasswordComplexityPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetPasswordComplexityPolicyToDefaultResponse>;
    /** The password age policy is not used at the moment */
    getPasswordAgePolicy(request: DeepPartial<GetPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPasswordAgePolicyResponse>;
    /** The password age policy is not used at the moment */
    getDefaultPasswordAgePolicy(request: DeepPartial<GetDefaultPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordAgePolicyResponse>;
    /** The password age policy is not used at the moment */
    addCustomPasswordAgePolicy(request: DeepPartial<AddCustomPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomPasswordAgePolicyResponse>;
    /** The password age policy is not used at the moment */
    updateCustomPasswordAgePolicy(request: DeepPartial<UpdateCustomPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomPasswordAgePolicyResponse>;
    /** The password age policy is not used at the moment */
    resetPasswordAgePolicyToDefault(request: DeepPartial<ResetPasswordAgePolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetPasswordAgePolicyToDefaultResponse>;
    getLockoutPolicy(request: DeepPartial<GetLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLockoutPolicyResponse>;
    getDefaultLockoutPolicy(request: DeepPartial<GetDefaultLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLockoutPolicyResponse>;
    addCustomLockoutPolicy(request: DeepPartial<AddCustomLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomLockoutPolicyResponse>;
    updateCustomLockoutPolicy(request: DeepPartial<UpdateCustomLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomLockoutPolicyResponse>;
    resetLockoutPolicyToDefault(request: DeepPartial<ResetLockoutPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetLockoutPolicyToDefaultResponse>;
    getPrivacyPolicy(request: DeepPartial<GetPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPrivacyPolicyResponse>;
    getDefaultPrivacyPolicy(request: DeepPartial<GetDefaultPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPrivacyPolicyResponse>;
    addCustomPrivacyPolicy(request: DeepPartial<AddCustomPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomPrivacyPolicyResponse>;
    updateCustomPrivacyPolicy(request: DeepPartial<UpdateCustomPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomPrivacyPolicyResponse>;
    resetPrivacyPolicyToDefault(request: DeepPartial<ResetPrivacyPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetPrivacyPolicyToDefaultResponse>;
    getNotificationPolicy(request: DeepPartial<GetNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNotificationPolicyResponse>;
    getDefaultNotificationPolicy(request: DeepPartial<GetDefaultNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultNotificationPolicyResponse>;
    addCustomNotificationPolicy(request: DeepPartial<AddCustomNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomNotificationPolicyResponse>;
    updateCustomNotificationPolicy(request: DeepPartial<UpdateCustomNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomNotificationPolicyResponse>;
    resetNotificationPolicyToDefault(request: DeepPartial<ResetNotificationPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetNotificationPolicyToDefaultResponse>;
    getLabelPolicy(request: DeepPartial<GetLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLabelPolicyResponse>;
    getPreviewLabelPolicy(request: DeepPartial<GetPreviewLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPreviewLabelPolicyResponse>;
    getDefaultLabelPolicy(request: DeepPartial<GetDefaultLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLabelPolicyResponse>;
    addCustomLabelPolicy(request: DeepPartial<AddCustomLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomLabelPolicyResponse>;
    updateCustomLabelPolicy(request: DeepPartial<UpdateCustomLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomLabelPolicyResponse>;
    activateCustomLabelPolicy(request: DeepPartial<ActivateCustomLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateCustomLabelPolicyResponse>;
    removeCustomLabelPolicyLogo(request: DeepPartial<RemoveCustomLabelPolicyLogoRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyLogoResponse>;
    removeCustomLabelPolicyLogoDark(request: DeepPartial<RemoveCustomLabelPolicyLogoDarkRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyLogoDarkResponse>;
    removeCustomLabelPolicyIcon(request: DeepPartial<RemoveCustomLabelPolicyIconRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyIconResponse>;
    removeCustomLabelPolicyIconDark(request: DeepPartial<RemoveCustomLabelPolicyIconDarkRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyIconDarkResponse>;
    removeCustomLabelPolicyFont(request: DeepPartial<RemoveCustomLabelPolicyFontRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyFontResponse>;
    resetLabelPolicyToDefault(request: DeepPartial<ResetLabelPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetLabelPolicyToDefaultResponse>;
    getCustomInitMessageText(request: DeepPartial<GetCustomInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomInitMessageTextResponse>;
    getDefaultInitMessageText(request: DeepPartial<GetDefaultInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultInitMessageTextResponse>;
    setCustomInitMessageText(request: DeepPartial<SetCustomInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomInitMessageTextResponse>;
    resetCustomInitMessageTextToDefault(request: DeepPartial<ResetCustomInitMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomInitMessageTextToDefaultResponse>;
    getCustomPasswordResetMessageText(request: DeepPartial<GetCustomPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordResetMessageTextResponse>;
    getDefaultPasswordResetMessageText(request: DeepPartial<GetDefaultPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordResetMessageTextResponse>;
    setCustomPasswordResetMessageText(request: DeepPartial<SetCustomPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomPasswordResetMessageTextResponse>;
    resetCustomPasswordResetMessageTextToDefault(request: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordResetMessageTextToDefaultResponse>;
    getCustomVerifyEmailMessageText(request: DeepPartial<GetCustomVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyEmailMessageTextResponse>;
    getDefaultVerifyEmailMessageText(request: DeepPartial<GetDefaultVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyEmailMessageTextResponse>;
    setCustomVerifyEmailMessageText(request: DeepPartial<SetCustomVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomVerifyEmailMessageTextResponse>;
    resetCustomVerifyEmailMessageTextToDefault(request: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyEmailMessageTextToDefaultResponse>;
    getCustomVerifyPhoneMessageText(request: DeepPartial<GetCustomVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyPhoneMessageTextResponse>;
    getDefaultVerifyPhoneMessageText(request: DeepPartial<GetDefaultVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyPhoneMessageTextResponse>;
    setCustomVerifyPhoneMessageText(request: DeepPartial<SetCustomVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomVerifyPhoneMessageTextResponse>;
    resetCustomVerifyPhoneMessageTextToDefault(request: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyPhoneMessageTextToDefaultResponse>;
    getCustomVerifySMSOTPMessageText(request: DeepPartial<GetCustomVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifySMSOTPMessageTextResponse>;
    getDefaultVerifySMSOTPMessageText(request: DeepPartial<GetDefaultVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifySMSOTPMessageTextResponse>;
    setCustomVerifySMSOTPMessageText(request: DeepPartial<SetCustomVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomVerifySMSOTPMessageTextResponse>;
    resetCustomVerifySMSOTPMessageTextToDefault(request: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>;
    getCustomVerifyEmailOTPMessageText(request: DeepPartial<GetCustomVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyEmailOTPMessageTextResponse>;
    getDefaultVerifyEmailOTPMessageText(request: DeepPartial<GetDefaultVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyEmailOTPMessageTextResponse>;
    setCustomVerifyEmailOTPMessageText(request: DeepPartial<SetCustomVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomVerifyEmailOTPMessageTextResponse>;
    resetCustomVerifyEmailOTPMessageTextToDefault(request: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>;
    getCustomDomainClaimedMessageText(request: DeepPartial<GetCustomDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomDomainClaimedMessageTextResponse>;
    getDefaultDomainClaimedMessageText(request: DeepPartial<GetDefaultDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultDomainClaimedMessageTextResponse>;
    setCustomDomainClaimedMessageCustomText(request: DeepPartial<SetCustomDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomDomainClaimedMessageTextResponse>;
    resetCustomDomainClaimedMessageTextToDefault(request: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomDomainClaimedMessageTextToDefaultResponse>;
    getCustomPasswordlessRegistrationMessageText(request: DeepPartial<GetCustomPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordlessRegistrationMessageTextResponse>;
    getDefaultPasswordlessRegistrationMessageText(request: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordlessRegistrationMessageTextResponse>;
    setCustomPasswordlessRegistrationMessageCustomText(request: DeepPartial<SetCustomPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomPasswordlessRegistrationMessageTextResponse>;
    resetCustomPasswordlessRegistrationMessageTextToDefault(request: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>;
    getCustomPasswordChangeMessageText(request: DeepPartial<GetCustomPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordChangeMessageTextResponse>;
    getDefaultPasswordChangeMessageText(request: DeepPartial<GetDefaultPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordChangeMessageTextResponse>;
    setCustomPasswordChangeMessageCustomText(request: DeepPartial<SetCustomPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomPasswordChangeMessageTextResponse>;
    resetCustomPasswordChangeMessageTextToDefault(request: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordChangeMessageTextToDefaultResponse>;
    getCustomLoginTexts(request: DeepPartial<GetCustomLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomLoginTextsResponse>;
    getDefaultLoginTexts(request: DeepPartial<GetDefaultLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLoginTextsResponse>;
    setCustomLoginText(request: DeepPartial<SetCustomLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomLoginTextsResponse>;
    resetCustomLoginTextToDefault(request: DeepPartial<ResetCustomLoginTextsToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomLoginTextsToDefaultResponse>;
    getOrgIDPByID(request: DeepPartial<GetOrgIDPByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgIDPByIDResponse>;
    listOrgIDPs(request: DeepPartial<ListOrgIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgIDPsResponse>;
    addOrgOIDCIDP(request: DeepPartial<AddOrgOIDCIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgOIDCIDPResponse>;
    addOrgJWTIDP(request: DeepPartial<AddOrgJWTIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgJWTIDPResponse>;
    deactivateOrgIDP(request: DeepPartial<DeactivateOrgIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateOrgIDPResponse>;
    reactivateOrgIDP(request: DeepPartial<ReactivateOrgIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateOrgIDPResponse>;
    removeOrgIDP(request: DeepPartial<RemoveOrgIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgIDPResponse>;
    updateOrgIDP(request: DeepPartial<UpdateOrgIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgIDPResponse>;
    updateOrgIDPOIDCConfig(request: DeepPartial<UpdateOrgIDPOIDCConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgIDPOIDCConfigResponse>;
    updateOrgIDPJWTConfig(request: DeepPartial<UpdateOrgIDPJWTConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgIDPJWTConfigResponse>;
    /**
     * Returns all identity providers, which match the query
     * Limit should always be set, there is a default limit set by the service
     */
    listProviders(request: DeepPartial<ListProvidersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProvidersResponse>;
    /** Returns an identity provider of the organization */
    getProviderByID(request: DeepPartial<GetProviderByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetProviderByIDResponse>;
    /** Add a new OAuth2 identity provider in the organization */
    addGenericOAuthProvider(request: DeepPartial<AddGenericOAuthProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGenericOAuthProviderResponse>;
    /** Change an existing OAuth2 identity provider in the organization */
    updateGenericOAuthProvider(request: DeepPartial<UpdateGenericOAuthProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGenericOAuthProviderResponse>;
    /** Add a new OIDC identity provider in the organization */
    addGenericOIDCProvider(request: DeepPartial<AddGenericOIDCProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGenericOIDCProviderResponse>;
    /** Change an existing OIDC identity provider in the organization */
    updateGenericOIDCProvider(request: DeepPartial<UpdateGenericOIDCProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGenericOIDCProviderResponse>;
    /** Migrate an existing OIDC identity provider in the organization */
    migrateGenericOIDCProvider(request: DeepPartial<MigrateGenericOIDCProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<MigrateGenericOIDCProviderResponse>;
    /** Add a new JWT identity provider in the organization */
    addJWTProvider(request: DeepPartial<AddJWTProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddJWTProviderResponse>;
    /** Change an existing JWT identity provider in the organization */
    updateJWTProvider(request: DeepPartial<UpdateJWTProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateJWTProviderResponse>;
    /** Add a new Azure AD identity provider in the organization */
    addAzureADProvider(request: DeepPartial<AddAzureADProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAzureADProviderResponse>;
    /** Change an existing Azure AD identity provider in the organization */
    updateAzureADProvider(request: DeepPartial<UpdateAzureADProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAzureADProviderResponse>;
    /** Add a new GitHub identity provider in the organization */
    addGitHubProvider(request: DeepPartial<AddGitHubProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitHubProviderResponse>;
    /** Change an existing GitHub identity provider in the organization */
    updateGitHubProvider(request: DeepPartial<UpdateGitHubProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitHubProviderResponse>;
    /** Add a new GitHub Enterprise Server identity provider in the organization */
    addGitHubEnterpriseServerProvider(request: DeepPartial<AddGitHubEnterpriseServerProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitHubEnterpriseServerProviderResponse>;
    /** Change an existing GitHub Enterprise Server identity provider in the organization */
    updateGitHubEnterpriseServerProvider(request: DeepPartial<UpdateGitHubEnterpriseServerProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitHubEnterpriseServerProviderResponse>;
    /** Add a new GitLab identity provider in the organization */
    addGitLabProvider(request: DeepPartial<AddGitLabProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitLabProviderResponse>;
    /** Change an existing GitLab identity provider in the organization */
    updateGitLabProvider(request: DeepPartial<UpdateGitLabProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitLabProviderResponse>;
    /** Add a new self hosted GitLab identity provider in the organization */
    addGitLabSelfHostedProvider(request: DeepPartial<AddGitLabSelfHostedProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitLabSelfHostedProviderResponse>;
    /** Change an existing self hosted GitLab identity provider in the organization */
    updateGitLabSelfHostedProvider(request: DeepPartial<UpdateGitLabSelfHostedProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitLabSelfHostedProviderResponse>;
    /** Add a new Google identity provider in the organization */
    addGoogleProvider(request: DeepPartial<AddGoogleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGoogleProviderResponse>;
    /** Change an existing Google identity provider in the organization */
    updateGoogleProvider(request: DeepPartial<UpdateGoogleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGoogleProviderResponse>;
    /** Add a new LDAP identity provider in the organization */
    addLDAPProvider(request: DeepPartial<AddLDAPProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddLDAPProviderResponse>;
    /** Change an existing LDAP identity provider in the organization */
    updateLDAPProvider(request: DeepPartial<UpdateLDAPProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateLDAPProviderResponse>;
    /** Add a new Apple identity provider in the organization */
    addAppleProvider(request: DeepPartial<AddAppleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAppleProviderResponse>;
    /** Change an existing Apple identity provider in the organization */
    updateAppleProvider(request: DeepPartial<UpdateAppleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAppleProviderResponse>;
    /** Add a new SAML identity provider in the organization */
    addSAMLProvider(request: DeepPartial<AddSAMLProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSAMLProviderResponse>;
    /** Change an existing SAML identity provider in the organization */
    updateSAMLProvider(request: DeepPartial<UpdateSAMLProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSAMLProviderResponse>;
    /** Regenerate certificate for an existing SAML identity provider in the organization */
    regenerateSAMLProviderCertificate(request: DeepPartial<RegenerateSAMLProviderCertificateRequest>, options?: CallOptions & CallOptionsExt): Promise<RegenerateSAMLProviderCertificateResponse>;
    /**
     * Remove an identity provider
     * Will remove all linked providers of this configuration on the users
     */
    deleteProvider(request: DeepPartial<DeleteProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteProviderResponse>;
    listActions(request: DeepPartial<ListActionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListActionsResponse>;
    getAction(request: DeepPartial<GetActionRequest>, options?: CallOptions & CallOptionsExt): Promise<GetActionResponse>;
    createAction(request: DeepPartial<CreateActionRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateActionResponse>;
    updateAction(request: DeepPartial<UpdateActionRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateActionResponse>;
    deactivateAction(request: DeepPartial<DeactivateActionRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateActionResponse>;
    reactivateAction(request: DeepPartial<ReactivateActionRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateActionResponse>;
    deleteAction(request: DeepPartial<DeleteActionRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteActionResponse>;
    listFlowTypes(request: DeepPartial<ListFlowTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFlowTypesResponse>;
    listFlowTriggerTypes(request: DeepPartial<ListFlowTriggerTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFlowTriggerTypesResponse>;
    getFlow(request: DeepPartial<GetFlowRequest>, options?: CallOptions & CallOptionsExt): Promise<GetFlowResponse>;
    clearFlow(request: DeepPartial<ClearFlowRequest>, options?: CallOptions & CallOptionsExt): Promise<ClearFlowResponse>;
    setTriggerActions(request: DeepPartial<SetTriggerActionsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetTriggerActionsResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
