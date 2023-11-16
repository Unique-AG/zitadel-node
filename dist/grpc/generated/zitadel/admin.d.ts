/// <reference types="node" />
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { AggregateType, Event, EventType } from "./event";
import { AzureADTenant, IDP, IDPFieldName, IDPIDQuery, IDPLoginPolicyLink, IDPNameQuery, IDPStylingType, IDPUserLink, LDAPAttributes, OIDCMappingField, Options, Provider, SAMLBinding } from "./idp";
import { Domain, DomainFieldName, DomainSearchQuery, InstanceDetail } from "./instance";
import { AddCustomLabelPolicyRequest, AddCustomLockoutPolicyRequest, AddCustomLoginPolicyRequest, AddCustomPasswordComplexityPolicyRequest, AddCustomPrivacyPolicyRequest, AddOrgMemberRequest, AddOrgRequest, AddProjectGrantMemberRequest, AddProjectMemberRequest, AddProjectRoleRequest, AddUserGrantRequest, SetCustomDomainClaimedMessageTextRequest, SetCustomInitMessageTextRequest, SetCustomLoginTextsRequest as SetCustomLoginTextsRequest2, SetCustomPasswordlessRegistrationMessageTextRequest, SetCustomPasswordResetMessageTextRequest, SetCustomVerifyEmailMessageTextRequest, SetCustomVerifyEmailOTPMessageTextRequest, SetCustomVerifyPhoneMessageTextRequest, SetCustomVerifySMSOTPMessageTextRequest, SetTriggerActionsRequest, SetUserMetadataRequest } from "./management";
import { Member, SearchQuery } from "./member";
import { Milestone, MilestoneFieldName, MilestoneQuery } from "./milestone/v1/milestone";
import { ListDetails, ListQuery, ObjectDetails } from "./object";
import { Domain as Domain3, Org, OrgFieldName, OrgQuery } from "./org";
import { DomainPolicy, LabelPolicy, LockoutPolicy, LoginPolicy, MultiFactorType, NotificationPolicy, OrgIAMPolicy, PasswordAgePolicy, PasswordComplexityPolicy, PasswordlessType, PrivacyPolicy, SecondFactorType, ThemeMode } from "./policy";
import { DebugNotificationProvider, OIDCSettings, SecretGenerator, SecretGeneratorQuery, SecretGeneratorType, SecurityPolicy, SMSProvider, SMTPConfig } from "./settings";
import { EmailVerificationDoneScreenText, EmailVerificationScreenText, ExternalRegistrationUserOverviewScreenText, ExternalUserNotFoundScreenText, FooterText, InitializeUserDoneScreenText, InitializeUserScreenText, InitMFADoneScreenText, InitMFAOTPScreenText, InitMFAPromptScreenText, InitMFAU2FScreenText, InitPasswordDoneScreenText, InitPasswordScreenText, LinkingUserDoneScreenText, LoginCustomText, LoginScreenText, LogoutDoneScreenText, MessageCustomText, MFAProvidersText, PasswordChangeDoneScreenText, PasswordChangeScreenText, PasswordlessPromptScreenText, PasswordlessRegistrationDoneScreenText, PasswordlessRegistrationScreenText, PasswordlessScreenText, PasswordResetDoneScreenText, PasswordScreenText, RegistrationOptionScreenText, RegistrationOrgScreenText, RegistrationUserScreenText, SelectAccountScreenText, SuccessLoginScreenText, UsernameChangeDoneScreenText, UsernameChangeScreenText, VerifyMFAOTPScreenText, VerifyMFAU2FScreenText } from "./text";
import { Gender } from "./user";
import { DataAction, DataAPIApplication, DataAppKey, DataHumanUser, DataJWTIDP, DataMachineKey, DataMachineUser, DataOIDCApplication, DataOIDCIDP, DataProject, DataProjectGrant, ImportDataOrg as ImportDataOrg1 } from "./v1";
export declare const protobufPackage = "zitadel.admin.v1";
/** This is an empty request */
export interface HealthzRequest {
}
/** This is an empty response */
export interface HealthzResponse {
}
/** This is an empty request */
export interface GetSupportedLanguagesRequest {
}
export interface GetSupportedLanguagesResponse {
    languages: string[];
}
export interface SetDefaultLanguageRequest {
    language: string;
}
export interface SetDefaultLanguageResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetDefaultLanguageRequest {
}
export interface GetDefaultLanguageResponse {
    language: string;
}
export interface SetDefaultOrgRequest {
    orgId: string;
}
export interface SetDefaultOrgResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetDefaultOrgRequest {
}
export interface GetDefaultOrgResponse {
    org: Org | undefined;
}
/** This is an empty request */
export interface GetMyInstanceRequest {
}
export interface GetMyInstanceResponse {
    instance: InstanceDetail | undefined;
}
export interface ListInstanceDomainsRequest {
    query: ListQuery | undefined;
    /** the field the result is sorted */
    sortingColumn: DomainFieldName;
    /** criteria the client is looking for */
    queries: DomainSearchQuery[];
}
export interface ListInstanceDomainsResponse {
    details: ListDetails | undefined;
    sortingColumn: DomainFieldName;
    result: Domain[];
}
export interface ListSecretGeneratorsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: SecretGeneratorQuery[];
}
export interface ListSecretGeneratorsResponse {
    details: ListDetails | undefined;
    result: SecretGenerator[];
}
export interface GetSecretGeneratorRequest {
    generatorType: SecretGeneratorType;
}
export interface GetSecretGeneratorResponse {
    secretGenerator: SecretGenerator | undefined;
}
export interface UpdateSecretGeneratorRequest {
    generatorType: SecretGeneratorType;
    length: number;
    expiry: Duration | undefined;
    includeLowerLetters: boolean;
    includeUpperLetters: boolean;
    includeDigits: boolean;
    includeSymbols: boolean;
}
export interface UpdateSecretGeneratorResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetSMTPConfigRequest {
}
export interface GetSMTPConfigResponse {
    smtpConfig: SMTPConfig | undefined;
}
export interface AddSMTPConfigRequest {
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    password: string;
    replyToAddress: string;
}
export interface AddSMTPConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateSMTPConfigRequest {
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    replyToAddress: string;
}
export interface UpdateSMTPConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateSMTPConfigPasswordRequest {
    password: string;
}
export interface UpdateSMTPConfigPasswordResponse {
    details: ObjectDetails | undefined;
}
/** this is an empty request */
export interface RemoveSMTPConfigRequest {
}
export interface RemoveSMTPConfigResponse {
    details: ObjectDetails | undefined;
}
export interface ListSMSProvidersRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
}
export interface ListSMSProvidersResponse {
    details: ListDetails | undefined;
    result: SMSProvider[];
}
export interface GetSMSProviderRequest {
    id: string;
}
export interface GetSMSProviderResponse {
    config: SMSProvider | undefined;
}
export interface AddSMSProviderTwilioRequest {
    sid: string;
    token: string;
    senderNumber: string;
}
export interface AddSMSProviderTwilioResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateSMSProviderTwilioRequest {
    id: string;
    sid: string;
    senderNumber: string;
}
export interface UpdateSMSProviderTwilioResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateSMSProviderTwilioTokenRequest {
    id: string;
    token: string;
}
export interface UpdateSMSProviderTwilioTokenResponse {
    details: ObjectDetails | undefined;
}
export interface ActivateSMSProviderRequest {
    id: string;
}
export interface ActivateSMSProviderResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateSMSProviderRequest {
    id: string;
}
export interface DeactivateSMSProviderResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveSMSProviderRequest {
    id: string;
}
export interface RemoveSMSProviderResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetFileSystemNotificationProviderRequest {
}
export interface GetFileSystemNotificationProviderResponse {
    provider: DebugNotificationProvider | undefined;
}
/** This is an empty request */
export interface GetLogNotificationProviderRequest {
}
export interface GetLogNotificationProviderResponse {
    provider: DebugNotificationProvider | undefined;
}
/** This is an empty request */
export interface GetOIDCSettingsRequest {
}
export interface GetOIDCSettingsResponse {
    settings: OIDCSettings | undefined;
}
export interface AddOIDCSettingsRequest {
    accessTokenLifetime: Duration | undefined;
    idTokenLifetime: Duration | undefined;
    refreshTokenIdleExpiration: Duration | undefined;
    refreshTokenExpiration: Duration | undefined;
}
export interface AddOIDCSettingsResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOIDCSettingsRequest {
    accessTokenLifetime: Duration | undefined;
    idTokenLifetime: Duration | undefined;
    refreshTokenIdleExpiration: Duration | undefined;
    refreshTokenExpiration: Duration | undefined;
}
export interface UpdateOIDCSettingsResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetSecurityPolicyRequest {
}
export interface GetSecurityPolicyResponse {
    policy: SecurityPolicy | undefined;
}
export interface SetSecurityPolicyRequest {
    /** states if iframe embedding is enabled or disabled */
    enableIframeEmbedding: boolean;
    /** origins allowed loading ZITADEL in an iframe if enable_iframe_embedding is true */
    allowedOrigins: string[];
}
export interface SetSecurityPolicyResponse {
    details: ObjectDetails | undefined;
}
/**
 * if name or domain is already in use, org is not unique
 * at least one argument has to be provided
 */
export interface IsOrgUniqueRequest {
    name: string;
    domain: string;
}
export interface IsOrgUniqueResponse {
    isUnique: boolean;
}
export interface GetOrgByIDRequest {
    id: string;
}
export interface GetOrgByIDResponse {
    org: Org | undefined;
}
export interface ListOrgsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** the field the result is sorted */
    sortingColumn: OrgFieldName;
    /** criteria the client is looking for */
    queries: OrgQuery[];
}
export interface ListOrgsResponse {
    details: ListDetails | undefined;
    sortingColumn: OrgFieldName;
    result: Org[];
}
export interface SetUpOrgRequest {
    org: SetUpOrgRequest_Org | undefined;
    /** oneof field for the user managing the organization */
    human?: SetUpOrgRequest_Human | undefined;
    /** specify Org Member Roles for the provided user (default is ORG_OWNER if roles are empty) */
    roles: string[];
}
export interface SetUpOrgRequest_Org {
    name: string;
    domain: string;
}
export interface SetUpOrgRequest_Human {
    userName: string;
    profile: SetUpOrgRequest_Human_Profile | undefined;
    email: SetUpOrgRequest_Human_Email | undefined;
    phone: SetUpOrgRequest_Human_Phone | undefined;
    password: string;
}
export interface SetUpOrgRequest_Human_Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface SetUpOrgRequest_Human_Email {
    email: string;
    isEmailVerified: boolean;
}
export interface SetUpOrgRequest_Human_Phone {
    /** has to be a global number */
    phone: string;
    isPhoneVerified: boolean;
}
export interface SetUpOrgResponse {
    details: ObjectDetails | undefined;
    orgId: string;
    userId: string;
}
export interface RemoveOrgRequest {
    orgId: string;
}
export interface RemoveOrgResponse {
    details: ObjectDetails | undefined;
}
export interface GetIDPByIDRequest {
    id: string;
}
export interface GetIDPByIDResponse {
    idp: IDP | undefined;
}
export interface ListIDPsRequest {
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
}
export interface ListIDPsResponse {
    details: ListDetails | undefined;
    sortingColumn: IDPFieldName;
    result: IDP[];
}
export interface AddOIDCIDPRequest {
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
export interface AddOIDCIDPResponse {
    details: ObjectDetails | undefined;
    idpId: string;
}
export interface AddJWTIDPRequest {
    name: string;
    stylingType: IDPStylingType;
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
    autoRegister: boolean;
}
export interface AddJWTIDPResponse {
    details: ObjectDetails | undefined;
    idpId: string;
}
export interface UpdateIDPRequest {
    idpId: string;
    name: string;
    stylingType: IDPStylingType;
    autoRegister: boolean;
}
export interface UpdateIDPResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateIDPRequest {
    idpId: string;
}
export interface DeactivateIDPResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateIDPRequest {
    idpId: string;
}
export interface ReactivateIDPResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveIDPRequest {
    idpId: string;
}
export interface RemoveIDPResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateIDPOIDCConfigRequest {
    idpId: string;
    issuer: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    displayNameMapping: OIDCMappingField;
    usernameMapping: OIDCMappingField;
}
export interface UpdateIDPOIDCConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateIDPJWTConfigRequest {
    idpId: string;
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
}
export interface UpdateIDPJWTConfigResponse {
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
export interface DeleteProviderRequest {
    id: string;
}
export interface DeleteProviderResponse {
    details: ObjectDetails | undefined;
}
export interface GetOrgIAMPolicyRequest {
}
export interface GetOrgIAMPolicyResponse {
    policy: OrgIAMPolicy | undefined;
}
export interface UpdateOrgIAMPolicyRequest {
    userLoginMustBeDomain: boolean;
}
export interface UpdateOrgIAMPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomOrgIAMPolicyRequest {
    orgId: string;
}
export interface GetCustomOrgIAMPolicyResponse {
    policy: OrgIAMPolicy | undefined;
    /** deprecated: is_default is also defined in zitadel.policy.v1.OrgIAMPolicy */
    isDefault: boolean;
}
export interface AddCustomOrgIAMPolicyRequest {
    orgId: string;
    /** the username has to end with the domain of its organization (uniqueness is organization based) */
    userLoginMustBeDomain: boolean;
}
export interface AddCustomOrgIAMPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomOrgIAMPolicyRequest {
    orgId: string;
    userLoginMustBeDomain: boolean;
}
export interface UpdateCustomOrgIAMPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomOrgIAMPolicyToDefaultRequest {
    orgId: string;
}
export interface ResetCustomOrgIAMPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDomainPolicyRequest {
}
export interface GetDomainPolicyResponse {
    policy: DomainPolicy | undefined;
}
export interface UpdateDomainPolicyRequest {
    userLoginMustBeDomain: boolean;
    validateOrgDomains: boolean;
    smtpSenderAddressMatchesInstanceDomain: boolean;
}
export interface UpdateDomainPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomDomainPolicyRequest {
    orgId: string;
}
export interface GetCustomDomainPolicyResponse {
    policy: DomainPolicy | undefined;
    /** deprecated: is_default is also defined in zitadel.policy.v1.DomainPolicy */
    isDefault: boolean;
}
export interface AddCustomDomainPolicyRequest {
    orgId: string;
    /** the username has to end with the domain of its organization (uniqueness is organization based) */
    userLoginMustBeDomain: boolean;
    validateOrgDomains: boolean;
    smtpSenderAddressMatchesInstanceDomain: boolean;
}
export interface AddCustomDomainPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomDomainPolicyRequest {
    orgId: string;
    userLoginMustBeDomain: boolean;
    validateOrgDomains: boolean;
    smtpSenderAddressMatchesInstanceDomain: boolean;
}
export interface UpdateCustomDomainPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomDomainPolicyToDefaultRequest {
    orgId: string;
}
export interface ResetCustomDomainPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetLabelPolicyRequest {
}
export interface GetLabelPolicyResponse {
    policy: LabelPolicy | undefined;
}
/** This is an empty request */
export interface GetPreviewLabelPolicyRequest {
}
export interface GetPreviewLabelPolicyResponse {
    policy: LabelPolicy | undefined;
}
export interface UpdateLabelPolicyRequest {
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
export interface UpdateLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ActivateLabelPolicyRequest {
}
export interface ActivateLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveLabelPolicyLogoRequest {
}
export interface RemoveLabelPolicyLogoResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveLabelPolicyLogoDarkRequest {
}
export interface RemoveLabelPolicyLogoDarkResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveLabelPolicyIconRequest {
}
export interface RemoveLabelPolicyIconResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveLabelPolicyIconDarkRequest {
}
export interface RemoveLabelPolicyIconDarkResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveLabelPolicyFontRequest {
}
export interface RemoveLabelPolicyFontResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetLoginPolicyRequest {
}
export interface GetLoginPolicyResponse {
    policy: LoginPolicy | undefined;
}
export interface UpdateLoginPolicyRequest {
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
export interface UpdateLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ListLoginPolicyIDPsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
}
export interface ListLoginPolicyIDPsResponse {
    details: ListDetails | undefined;
    result: IDPLoginPolicyLink[];
}
export interface AddIDPToLoginPolicyRequest {
    idpId: string;
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
/** This is an empty request */
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
/** This is an empty request */
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
}
export interface UpdatePasswordComplexityPolicyRequest {
    minLength: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
}
export interface UpdatePasswordComplexityPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetPasswordAgePolicyRequest {
}
export interface GetPasswordAgePolicyResponse {
    policy: PasswordAgePolicy | undefined;
}
export interface UpdatePasswordAgePolicyRequest {
    maxAgeDays: number;
    expireWarnDays: number;
}
export interface UpdatePasswordAgePolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetLockoutPolicyRequest {
}
export interface GetLockoutPolicyResponse {
    policy: LockoutPolicy | undefined;
}
export interface UpdateLockoutPolicyRequest {
    /** failed attempts until a user gets locked */
    maxPasswordAttempts: number;
}
export interface UpdateLockoutPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetPrivacyPolicyRequest {
}
export interface GetPrivacyPolicyResponse {
    policy: PrivacyPolicy | undefined;
}
export interface UpdatePrivacyPolicyRequest {
    tosLink: string;
    privacyLink: string;
    helpLink: string;
    supportEmail: string;
}
export interface UpdatePrivacyPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface AddNotificationPolicyRequest {
    passwordChange: boolean;
}
export interface AddNotificationPolicyResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetNotificationPolicyRequest {
}
export interface GetNotificationPolicyResponse {
    policy: NotificationPolicy | undefined;
}
export interface UpdateNotificationPolicyRequest {
    passwordChange: boolean;
}
export interface UpdateNotificationPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultInitMessageTextRequest {
    language: string;
}
export interface GetDefaultInitMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomInitMessageTextRequest {
    language: string;
}
export interface GetCustomInitMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultInitMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultInitMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomInitMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomInitMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultPasswordResetMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordResetMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomPasswordResetMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordResetMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultPasswordResetMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultPasswordResetMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordResetMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordResetMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultVerifyEmailMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyEmailMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomVerifyEmailMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyEmailMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultVerifyEmailMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultVerifyEmailMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyEmailMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyEmailMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultVerifyPhoneMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyPhoneMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomVerifyPhoneMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyPhoneMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultVerifyPhoneMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultVerifyPhoneMessageTextResponse {
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
export interface SetDefaultVerifySMSOTPMessageTextRequest {
    language: string;
    text: string;
}
export interface SetDefaultVerifySMSOTPMessageTextResponse {
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
export interface SetDefaultVerifyEmailOTPMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultVerifyEmailOTPMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyEmailOTPMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyEmailOTPMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultDomainClaimedMessageTextRequest {
    language: string;
}
export interface GetDefaultDomainClaimedMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomDomainClaimedMessageTextRequest {
    language: string;
}
export interface GetCustomDomainClaimedMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultDomainClaimedMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultDomainClaimedMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomDomainClaimedMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomDomainClaimedMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultPasswordChangeMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordChangeMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomPasswordChangeMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordChangeMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultPasswordChangeMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultPasswordChangeMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordChangeMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordChangeMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultPasswordlessRegistrationMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordlessRegistrationMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomPasswordlessRegistrationMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordlessRegistrationMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultPasswordlessRegistrationMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultPasswordlessRegistrationMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse {
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
export interface AddIAMMemberRequest {
    userId: string;
    roles: string[];
}
export interface AddIAMMemberResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateIAMMemberRequest {
    userId: string;
    roles: string[];
}
export interface UpdateIAMMemberResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveIAMMemberRequest {
    userId: string;
}
export interface RemoveIAMMemberResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ListIAMMemberRolesRequest {
}
export interface ListIAMMemberRolesResponse {
    details: ListDetails | undefined;
    roles: string[];
}
export interface ListIAMMembersRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: SearchQuery[];
}
export interface ListIAMMembersResponse {
    details: ListDetails | undefined;
    result: Member[];
}
/** This is an empty request */
export interface ListViewsRequest {
}
export interface ListViewsResponse {
    /** TODO: list details */
    result: View[];
}
/** This is an empty request */
export interface ListFailedEventsRequest {
}
export interface ListFailedEventsResponse {
    /** TODO: list details */
    result: FailedEvent[];
}
export interface RemoveFailedEventRequest {
    database: string;
    viewName: string;
    failedSequence: Long;
}
/** This is an empty response */
export interface RemoveFailedEventResponse {
}
export interface View {
    database: string;
    viewName: string;
    processedSequence: Long;
    /** The timestamp the event occurred */
    eventTimestamp: Date | undefined;
    lastSuccessfulSpoolerRun: Date | undefined;
}
export interface FailedEvent {
    database: string;
    viewName: string;
    failedSequence: Long;
    failureCount: Long;
    errorMessage: string;
    lastFailed: Date | undefined;
}
export interface ImportDataRequest {
    dataOrgs?: ImportDataOrg | undefined;
    dataOrgsv1?: ImportDataOrg1 | undefined;
    dataOrgsLocal?: ImportDataRequest_LocalInput | undefined;
    dataOrgsv1Local?: ImportDataRequest_LocalInput | undefined;
    dataOrgsS3?: ImportDataRequest_S3Input | undefined;
    dataOrgsv1S3?: ImportDataRequest_S3Input | undefined;
    dataOrgsGcs?: ImportDataRequest_GCSInput | undefined;
    dataOrgsv1Gcs?: ImportDataRequest_GCSInput | undefined;
    timeout: string;
}
export interface ImportDataRequest_LocalInput {
    path: string;
}
export interface ImportDataRequest_S3Input {
    path: string;
    endpoint: string;
    accessKeyId: string;
    secretAccessKey: string;
    ssl: boolean;
    bucket: string;
}
export interface ImportDataRequest_GCSInput {
    bucket: string;
    serviceaccountJson: string;
    path: string;
}
export interface ImportDataOrg {
    orgs: DataOrg[];
}
export interface DataOrg {
    orgId: string;
    org: AddOrgRequest | undefined;
    domainPolicy: AddCustomDomainPolicyRequest | undefined;
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
    loginTexts: SetCustomLoginTextsRequest2[];
    initMessages: SetCustomInitMessageTextRequest[];
    passwordResetMessages: SetCustomPasswordResetMessageTextRequest[];
    verifyEmailMessages: SetCustomVerifyEmailMessageTextRequest[];
    verifyPhoneMessages: SetCustomVerifyPhoneMessageTextRequest[];
    domainClaimedMessages: SetCustomDomainClaimedMessageTextRequest[];
    passwordlessRegistrationMessages: SetCustomPasswordlessRegistrationMessageTextRequest[];
    oidcIdps: DataOIDCIDP[];
    jwtIdps: DataJWTIDP[];
    userLinks: IDPUserLink[];
    domains: Domain3[];
    appKeys: DataAppKey[];
    machineKeys: DataMachineKey[];
    verifySmsOtpMessages: SetCustomVerifySMSOTPMessageTextRequest[];
    verifyEmailOtpMessages: SetCustomVerifyEmailOTPMessageTextRequest[];
}
export interface ImportDataResponse {
    errors: ImportDataError[];
    success: ImportDataSuccess | undefined;
}
export interface ImportDataError {
    type: string;
    id: string;
    message: string;
}
export interface ImportDataSuccess {
    orgs: ImportDataSuccessOrg[];
}
export interface ImportDataSuccessOrg {
    orgId: string;
    projectIds: string[];
    projectRoles: string[];
    oidcAppIds: string[];
    apiAppIds: string[];
    humanUserIds: string[];
    machineUserIds: string[];
    actionIds: string[];
    triggerActions: SetTriggerActionsRequest[];
    projectGrants: ImportDataSuccessProjectGrant[];
    userGrants: ImportDataSuccessUserGrant[];
    orgMembers: string[];
    projectMembers: ImportDataSuccessProjectMember[];
    projectGrantMembers: ImportDataSuccessProjectGrantMember[];
    oidcIpds: string[];
    jwtIdps: string[];
    idpLinks: string[];
    userLinks: ImportDataSuccessUserLinks[];
    userMetadata: ImportDataSuccessUserMetadata[];
    domains: string[];
    appKeys: string[];
    machineKeys: string[];
}
export interface ImportDataSuccessProjectGrant {
    grantId: string;
    projectId: string;
    orgId: string;
}
export interface ImportDataSuccessUserGrant {
    projectId: string;
    userId: string;
}
export interface ImportDataSuccessProjectMember {
    projectId: string;
    userId: string;
}
export interface ImportDataSuccessProjectGrantMember {
    projectId: string;
    grantId: string;
    userId: string;
}
export interface ImportDataSuccessUserLinks {
    userId: string;
    externalUserId: string;
    displayName: string;
    idpId: string;
}
export interface ImportDataSuccessUserMetadata {
    userId: string;
    key: string;
}
export interface ExportDataRequest {
    orgIds: string[];
    excludedOrgIds: string[];
    withPasswords: boolean;
    withOtp: boolean;
    responseOutput: boolean;
    localOutput: ExportDataRequest_LocalOutput | undefined;
    s3Output: ExportDataRequest_S3Output | undefined;
    gcsOutput: ExportDataRequest_GCSOutput | undefined;
    timeout: string;
}
export interface ExportDataRequest_LocalOutput {
    path: string;
}
export interface ExportDataRequest_S3Output {
    path: string;
    endpoint: string;
    accessKeyId: string;
    secretAccessKey: string;
    ssl: boolean;
    bucket: string;
}
export interface ExportDataRequest_GCSOutput {
    bucket: string;
    serviceaccountJson: string;
    path: string;
}
export interface ExportDataResponse {
    orgs: DataOrg[];
}
export interface ListEventsRequest {
    sequence: Long;
    limit: number;
    asc: boolean;
    editorUserId: string;
    eventTypes: string[];
    aggregateId: string;
    aggregateTypes: string[];
    resourceOwner: string;
    creationDate: Date | undefined;
}
export interface ListEventsResponse {
    events: Event[];
}
export interface ListEventTypesRequest {
}
export interface ListEventTypesResponse {
    eventTypes: EventType[];
}
export interface ListAggregateTypesRequest {
}
export interface ListAggregateTypesResponse {
    aggregateTypes: AggregateType[];
}
export interface ActivateFeatureLoginDefaultOrgRequest {
}
export interface ActivateFeatureLoginDefaultOrgResponse {
    details: ObjectDetails | undefined;
}
export interface ListMilestonesRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** the field the result is sorted */
    sortingColumn: MilestoneFieldName;
    /** criteria the client is looking for */
    queries: MilestoneQuery[];
}
export interface ListMilestonesResponse {
    details: ListDetails | undefined;
    result: Milestone[];
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
export declare const SetDefaultLanguageRequest: {
    encode(message: SetDefaultLanguageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultLanguageRequest;
    fromJSON(object: any): SetDefaultLanguageRequest;
    toJSON(message: SetDefaultLanguageRequest): unknown;
    create(base?: DeepPartial<SetDefaultLanguageRequest>): SetDefaultLanguageRequest;
    fromPartial(object: DeepPartial<SetDefaultLanguageRequest>): SetDefaultLanguageRequest;
};
export declare const SetDefaultLanguageResponse: {
    encode(message: SetDefaultLanguageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultLanguageResponse;
    fromJSON(object: any): SetDefaultLanguageResponse;
    toJSON(message: SetDefaultLanguageResponse): unknown;
    create(base?: DeepPartial<SetDefaultLanguageResponse>): SetDefaultLanguageResponse;
    fromPartial(object: DeepPartial<SetDefaultLanguageResponse>): SetDefaultLanguageResponse;
};
export declare const GetDefaultLanguageRequest: {
    encode(_: GetDefaultLanguageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLanguageRequest;
    fromJSON(_: any): GetDefaultLanguageRequest;
    toJSON(_: GetDefaultLanguageRequest): unknown;
    create(base?: DeepPartial<GetDefaultLanguageRequest>): GetDefaultLanguageRequest;
    fromPartial(_: DeepPartial<GetDefaultLanguageRequest>): GetDefaultLanguageRequest;
};
export declare const GetDefaultLanguageResponse: {
    encode(message: GetDefaultLanguageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLanguageResponse;
    fromJSON(object: any): GetDefaultLanguageResponse;
    toJSON(message: GetDefaultLanguageResponse): unknown;
    create(base?: DeepPartial<GetDefaultLanguageResponse>): GetDefaultLanguageResponse;
    fromPartial(object: DeepPartial<GetDefaultLanguageResponse>): GetDefaultLanguageResponse;
};
export declare const SetDefaultOrgRequest: {
    encode(message: SetDefaultOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultOrgRequest;
    fromJSON(object: any): SetDefaultOrgRequest;
    toJSON(message: SetDefaultOrgRequest): unknown;
    create(base?: DeepPartial<SetDefaultOrgRequest>): SetDefaultOrgRequest;
    fromPartial(object: DeepPartial<SetDefaultOrgRequest>): SetDefaultOrgRequest;
};
export declare const SetDefaultOrgResponse: {
    encode(message: SetDefaultOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultOrgResponse;
    fromJSON(object: any): SetDefaultOrgResponse;
    toJSON(message: SetDefaultOrgResponse): unknown;
    create(base?: DeepPartial<SetDefaultOrgResponse>): SetDefaultOrgResponse;
    fromPartial(object: DeepPartial<SetDefaultOrgResponse>): SetDefaultOrgResponse;
};
export declare const GetDefaultOrgRequest: {
    encode(_: GetDefaultOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultOrgRequest;
    fromJSON(_: any): GetDefaultOrgRequest;
    toJSON(_: GetDefaultOrgRequest): unknown;
    create(base?: DeepPartial<GetDefaultOrgRequest>): GetDefaultOrgRequest;
    fromPartial(_: DeepPartial<GetDefaultOrgRequest>): GetDefaultOrgRequest;
};
export declare const GetDefaultOrgResponse: {
    encode(message: GetDefaultOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultOrgResponse;
    fromJSON(object: any): GetDefaultOrgResponse;
    toJSON(message: GetDefaultOrgResponse): unknown;
    create(base?: DeepPartial<GetDefaultOrgResponse>): GetDefaultOrgResponse;
    fromPartial(object: DeepPartial<GetDefaultOrgResponse>): GetDefaultOrgResponse;
};
export declare const GetMyInstanceRequest: {
    encode(_: GetMyInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyInstanceRequest;
    fromJSON(_: any): GetMyInstanceRequest;
    toJSON(_: GetMyInstanceRequest): unknown;
    create(base?: DeepPartial<GetMyInstanceRequest>): GetMyInstanceRequest;
    fromPartial(_: DeepPartial<GetMyInstanceRequest>): GetMyInstanceRequest;
};
export declare const GetMyInstanceResponse: {
    encode(message: GetMyInstanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyInstanceResponse;
    fromJSON(object: any): GetMyInstanceResponse;
    toJSON(message: GetMyInstanceResponse): unknown;
    create(base?: DeepPartial<GetMyInstanceResponse>): GetMyInstanceResponse;
    fromPartial(object: DeepPartial<GetMyInstanceResponse>): GetMyInstanceResponse;
};
export declare const ListInstanceDomainsRequest: {
    encode(message: ListInstanceDomainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceDomainsRequest;
    fromJSON(object: any): ListInstanceDomainsRequest;
    toJSON(message: ListInstanceDomainsRequest): unknown;
    create(base?: DeepPartial<ListInstanceDomainsRequest>): ListInstanceDomainsRequest;
    fromPartial(object: DeepPartial<ListInstanceDomainsRequest>): ListInstanceDomainsRequest;
};
export declare const ListInstanceDomainsResponse: {
    encode(message: ListInstanceDomainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceDomainsResponse;
    fromJSON(object: any): ListInstanceDomainsResponse;
    toJSON(message: ListInstanceDomainsResponse): unknown;
    create(base?: DeepPartial<ListInstanceDomainsResponse>): ListInstanceDomainsResponse;
    fromPartial(object: DeepPartial<ListInstanceDomainsResponse>): ListInstanceDomainsResponse;
};
export declare const ListSecretGeneratorsRequest: {
    encode(message: ListSecretGeneratorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretGeneratorsRequest;
    fromJSON(object: any): ListSecretGeneratorsRequest;
    toJSON(message: ListSecretGeneratorsRequest): unknown;
    create(base?: DeepPartial<ListSecretGeneratorsRequest>): ListSecretGeneratorsRequest;
    fromPartial(object: DeepPartial<ListSecretGeneratorsRequest>): ListSecretGeneratorsRequest;
};
export declare const ListSecretGeneratorsResponse: {
    encode(message: ListSecretGeneratorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretGeneratorsResponse;
    fromJSON(object: any): ListSecretGeneratorsResponse;
    toJSON(message: ListSecretGeneratorsResponse): unknown;
    create(base?: DeepPartial<ListSecretGeneratorsResponse>): ListSecretGeneratorsResponse;
    fromPartial(object: DeepPartial<ListSecretGeneratorsResponse>): ListSecretGeneratorsResponse;
};
export declare const GetSecretGeneratorRequest: {
    encode(message: GetSecretGeneratorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretGeneratorRequest;
    fromJSON(object: any): GetSecretGeneratorRequest;
    toJSON(message: GetSecretGeneratorRequest): unknown;
    create(base?: DeepPartial<GetSecretGeneratorRequest>): GetSecretGeneratorRequest;
    fromPartial(object: DeepPartial<GetSecretGeneratorRequest>): GetSecretGeneratorRequest;
};
export declare const GetSecretGeneratorResponse: {
    encode(message: GetSecretGeneratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretGeneratorResponse;
    fromJSON(object: any): GetSecretGeneratorResponse;
    toJSON(message: GetSecretGeneratorResponse): unknown;
    create(base?: DeepPartial<GetSecretGeneratorResponse>): GetSecretGeneratorResponse;
    fromPartial(object: DeepPartial<GetSecretGeneratorResponse>): GetSecretGeneratorResponse;
};
export declare const UpdateSecretGeneratorRequest: {
    encode(message: UpdateSecretGeneratorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecretGeneratorRequest;
    fromJSON(object: any): UpdateSecretGeneratorRequest;
    toJSON(message: UpdateSecretGeneratorRequest): unknown;
    create(base?: DeepPartial<UpdateSecretGeneratorRequest>): UpdateSecretGeneratorRequest;
    fromPartial(object: DeepPartial<UpdateSecretGeneratorRequest>): UpdateSecretGeneratorRequest;
};
export declare const UpdateSecretGeneratorResponse: {
    encode(message: UpdateSecretGeneratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecretGeneratorResponse;
    fromJSON(object: any): UpdateSecretGeneratorResponse;
    toJSON(message: UpdateSecretGeneratorResponse): unknown;
    create(base?: DeepPartial<UpdateSecretGeneratorResponse>): UpdateSecretGeneratorResponse;
    fromPartial(object: DeepPartial<UpdateSecretGeneratorResponse>): UpdateSecretGeneratorResponse;
};
export declare const GetSMTPConfigRequest: {
    encode(_: GetSMTPConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSMTPConfigRequest;
    fromJSON(_: any): GetSMTPConfigRequest;
    toJSON(_: GetSMTPConfigRequest): unknown;
    create(base?: DeepPartial<GetSMTPConfigRequest>): GetSMTPConfigRequest;
    fromPartial(_: DeepPartial<GetSMTPConfigRequest>): GetSMTPConfigRequest;
};
export declare const GetSMTPConfigResponse: {
    encode(message: GetSMTPConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSMTPConfigResponse;
    fromJSON(object: any): GetSMTPConfigResponse;
    toJSON(message: GetSMTPConfigResponse): unknown;
    create(base?: DeepPartial<GetSMTPConfigResponse>): GetSMTPConfigResponse;
    fromPartial(object: DeepPartial<GetSMTPConfigResponse>): GetSMTPConfigResponse;
};
export declare const AddSMTPConfigRequest: {
    encode(message: AddSMTPConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSMTPConfigRequest;
    fromJSON(object: any): AddSMTPConfigRequest;
    toJSON(message: AddSMTPConfigRequest): unknown;
    create(base?: DeepPartial<AddSMTPConfigRequest>): AddSMTPConfigRequest;
    fromPartial(object: DeepPartial<AddSMTPConfigRequest>): AddSMTPConfigRequest;
};
export declare const AddSMTPConfigResponse: {
    encode(message: AddSMTPConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSMTPConfigResponse;
    fromJSON(object: any): AddSMTPConfigResponse;
    toJSON(message: AddSMTPConfigResponse): unknown;
    create(base?: DeepPartial<AddSMTPConfigResponse>): AddSMTPConfigResponse;
    fromPartial(object: DeepPartial<AddSMTPConfigResponse>): AddSMTPConfigResponse;
};
export declare const UpdateSMTPConfigRequest: {
    encode(message: UpdateSMTPConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMTPConfigRequest;
    fromJSON(object: any): UpdateSMTPConfigRequest;
    toJSON(message: UpdateSMTPConfigRequest): unknown;
    create(base?: DeepPartial<UpdateSMTPConfigRequest>): UpdateSMTPConfigRequest;
    fromPartial(object: DeepPartial<UpdateSMTPConfigRequest>): UpdateSMTPConfigRequest;
};
export declare const UpdateSMTPConfigResponse: {
    encode(message: UpdateSMTPConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMTPConfigResponse;
    fromJSON(object: any): UpdateSMTPConfigResponse;
    toJSON(message: UpdateSMTPConfigResponse): unknown;
    create(base?: DeepPartial<UpdateSMTPConfigResponse>): UpdateSMTPConfigResponse;
    fromPartial(object: DeepPartial<UpdateSMTPConfigResponse>): UpdateSMTPConfigResponse;
};
export declare const UpdateSMTPConfigPasswordRequest: {
    encode(message: UpdateSMTPConfigPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMTPConfigPasswordRequest;
    fromJSON(object: any): UpdateSMTPConfigPasswordRequest;
    toJSON(message: UpdateSMTPConfigPasswordRequest): unknown;
    create(base?: DeepPartial<UpdateSMTPConfigPasswordRequest>): UpdateSMTPConfigPasswordRequest;
    fromPartial(object: DeepPartial<UpdateSMTPConfigPasswordRequest>): UpdateSMTPConfigPasswordRequest;
};
export declare const UpdateSMTPConfigPasswordResponse: {
    encode(message: UpdateSMTPConfigPasswordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMTPConfigPasswordResponse;
    fromJSON(object: any): UpdateSMTPConfigPasswordResponse;
    toJSON(message: UpdateSMTPConfigPasswordResponse): unknown;
    create(base?: DeepPartial<UpdateSMTPConfigPasswordResponse>): UpdateSMTPConfigPasswordResponse;
    fromPartial(object: DeepPartial<UpdateSMTPConfigPasswordResponse>): UpdateSMTPConfigPasswordResponse;
};
export declare const RemoveSMTPConfigRequest: {
    encode(_: RemoveSMTPConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSMTPConfigRequest;
    fromJSON(_: any): RemoveSMTPConfigRequest;
    toJSON(_: RemoveSMTPConfigRequest): unknown;
    create(base?: DeepPartial<RemoveSMTPConfigRequest>): RemoveSMTPConfigRequest;
    fromPartial(_: DeepPartial<RemoveSMTPConfigRequest>): RemoveSMTPConfigRequest;
};
export declare const RemoveSMTPConfigResponse: {
    encode(message: RemoveSMTPConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSMTPConfigResponse;
    fromJSON(object: any): RemoveSMTPConfigResponse;
    toJSON(message: RemoveSMTPConfigResponse): unknown;
    create(base?: DeepPartial<RemoveSMTPConfigResponse>): RemoveSMTPConfigResponse;
    fromPartial(object: DeepPartial<RemoveSMTPConfigResponse>): RemoveSMTPConfigResponse;
};
export declare const ListSMSProvidersRequest: {
    encode(message: ListSMSProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSMSProvidersRequest;
    fromJSON(object: any): ListSMSProvidersRequest;
    toJSON(message: ListSMSProvidersRequest): unknown;
    create(base?: DeepPartial<ListSMSProvidersRequest>): ListSMSProvidersRequest;
    fromPartial(object: DeepPartial<ListSMSProvidersRequest>): ListSMSProvidersRequest;
};
export declare const ListSMSProvidersResponse: {
    encode(message: ListSMSProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSMSProvidersResponse;
    fromJSON(object: any): ListSMSProvidersResponse;
    toJSON(message: ListSMSProvidersResponse): unknown;
    create(base?: DeepPartial<ListSMSProvidersResponse>): ListSMSProvidersResponse;
    fromPartial(object: DeepPartial<ListSMSProvidersResponse>): ListSMSProvidersResponse;
};
export declare const GetSMSProviderRequest: {
    encode(message: GetSMSProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSMSProviderRequest;
    fromJSON(object: any): GetSMSProviderRequest;
    toJSON(message: GetSMSProviderRequest): unknown;
    create(base?: DeepPartial<GetSMSProviderRequest>): GetSMSProviderRequest;
    fromPartial(object: DeepPartial<GetSMSProviderRequest>): GetSMSProviderRequest;
};
export declare const GetSMSProviderResponse: {
    encode(message: GetSMSProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSMSProviderResponse;
    fromJSON(object: any): GetSMSProviderResponse;
    toJSON(message: GetSMSProviderResponse): unknown;
    create(base?: DeepPartial<GetSMSProviderResponse>): GetSMSProviderResponse;
    fromPartial(object: DeepPartial<GetSMSProviderResponse>): GetSMSProviderResponse;
};
export declare const AddSMSProviderTwilioRequest: {
    encode(message: AddSMSProviderTwilioRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSMSProviderTwilioRequest;
    fromJSON(object: any): AddSMSProviderTwilioRequest;
    toJSON(message: AddSMSProviderTwilioRequest): unknown;
    create(base?: DeepPartial<AddSMSProviderTwilioRequest>): AddSMSProviderTwilioRequest;
    fromPartial(object: DeepPartial<AddSMSProviderTwilioRequest>): AddSMSProviderTwilioRequest;
};
export declare const AddSMSProviderTwilioResponse: {
    encode(message: AddSMSProviderTwilioResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSMSProviderTwilioResponse;
    fromJSON(object: any): AddSMSProviderTwilioResponse;
    toJSON(message: AddSMSProviderTwilioResponse): unknown;
    create(base?: DeepPartial<AddSMSProviderTwilioResponse>): AddSMSProviderTwilioResponse;
    fromPartial(object: DeepPartial<AddSMSProviderTwilioResponse>): AddSMSProviderTwilioResponse;
};
export declare const UpdateSMSProviderTwilioRequest: {
    encode(message: UpdateSMSProviderTwilioRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMSProviderTwilioRequest;
    fromJSON(object: any): UpdateSMSProviderTwilioRequest;
    toJSON(message: UpdateSMSProviderTwilioRequest): unknown;
    create(base?: DeepPartial<UpdateSMSProviderTwilioRequest>): UpdateSMSProviderTwilioRequest;
    fromPartial(object: DeepPartial<UpdateSMSProviderTwilioRequest>): UpdateSMSProviderTwilioRequest;
};
export declare const UpdateSMSProviderTwilioResponse: {
    encode(message: UpdateSMSProviderTwilioResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMSProviderTwilioResponse;
    fromJSON(object: any): UpdateSMSProviderTwilioResponse;
    toJSON(message: UpdateSMSProviderTwilioResponse): unknown;
    create(base?: DeepPartial<UpdateSMSProviderTwilioResponse>): UpdateSMSProviderTwilioResponse;
    fromPartial(object: DeepPartial<UpdateSMSProviderTwilioResponse>): UpdateSMSProviderTwilioResponse;
};
export declare const UpdateSMSProviderTwilioTokenRequest: {
    encode(message: UpdateSMSProviderTwilioTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMSProviderTwilioTokenRequest;
    fromJSON(object: any): UpdateSMSProviderTwilioTokenRequest;
    toJSON(message: UpdateSMSProviderTwilioTokenRequest): unknown;
    create(base?: DeepPartial<UpdateSMSProviderTwilioTokenRequest>): UpdateSMSProviderTwilioTokenRequest;
    fromPartial(object: DeepPartial<UpdateSMSProviderTwilioTokenRequest>): UpdateSMSProviderTwilioTokenRequest;
};
export declare const UpdateSMSProviderTwilioTokenResponse: {
    encode(message: UpdateSMSProviderTwilioTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMSProviderTwilioTokenResponse;
    fromJSON(object: any): UpdateSMSProviderTwilioTokenResponse;
    toJSON(message: UpdateSMSProviderTwilioTokenResponse): unknown;
    create(base?: DeepPartial<UpdateSMSProviderTwilioTokenResponse>): UpdateSMSProviderTwilioTokenResponse;
    fromPartial(object: DeepPartial<UpdateSMSProviderTwilioTokenResponse>): UpdateSMSProviderTwilioTokenResponse;
};
export declare const ActivateSMSProviderRequest: {
    encode(message: ActivateSMSProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateSMSProviderRequest;
    fromJSON(object: any): ActivateSMSProviderRequest;
    toJSON(message: ActivateSMSProviderRequest): unknown;
    create(base?: DeepPartial<ActivateSMSProviderRequest>): ActivateSMSProviderRequest;
    fromPartial(object: DeepPartial<ActivateSMSProviderRequest>): ActivateSMSProviderRequest;
};
export declare const ActivateSMSProviderResponse: {
    encode(message: ActivateSMSProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateSMSProviderResponse;
    fromJSON(object: any): ActivateSMSProviderResponse;
    toJSON(message: ActivateSMSProviderResponse): unknown;
    create(base?: DeepPartial<ActivateSMSProviderResponse>): ActivateSMSProviderResponse;
    fromPartial(object: DeepPartial<ActivateSMSProviderResponse>): ActivateSMSProviderResponse;
};
export declare const DeactivateSMSProviderRequest: {
    encode(message: DeactivateSMSProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSMSProviderRequest;
    fromJSON(object: any): DeactivateSMSProviderRequest;
    toJSON(message: DeactivateSMSProviderRequest): unknown;
    create(base?: DeepPartial<DeactivateSMSProviderRequest>): DeactivateSMSProviderRequest;
    fromPartial(object: DeepPartial<DeactivateSMSProviderRequest>): DeactivateSMSProviderRequest;
};
export declare const DeactivateSMSProviderResponse: {
    encode(message: DeactivateSMSProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSMSProviderResponse;
    fromJSON(object: any): DeactivateSMSProviderResponse;
    toJSON(message: DeactivateSMSProviderResponse): unknown;
    create(base?: DeepPartial<DeactivateSMSProviderResponse>): DeactivateSMSProviderResponse;
    fromPartial(object: DeepPartial<DeactivateSMSProviderResponse>): DeactivateSMSProviderResponse;
};
export declare const RemoveSMSProviderRequest: {
    encode(message: RemoveSMSProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSMSProviderRequest;
    fromJSON(object: any): RemoveSMSProviderRequest;
    toJSON(message: RemoveSMSProviderRequest): unknown;
    create(base?: DeepPartial<RemoveSMSProviderRequest>): RemoveSMSProviderRequest;
    fromPartial(object: DeepPartial<RemoveSMSProviderRequest>): RemoveSMSProviderRequest;
};
export declare const RemoveSMSProviderResponse: {
    encode(message: RemoveSMSProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSMSProviderResponse;
    fromJSON(object: any): RemoveSMSProviderResponse;
    toJSON(message: RemoveSMSProviderResponse): unknown;
    create(base?: DeepPartial<RemoveSMSProviderResponse>): RemoveSMSProviderResponse;
    fromPartial(object: DeepPartial<RemoveSMSProviderResponse>): RemoveSMSProviderResponse;
};
export declare const GetFileSystemNotificationProviderRequest: {
    encode(_: GetFileSystemNotificationProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFileSystemNotificationProviderRequest;
    fromJSON(_: any): GetFileSystemNotificationProviderRequest;
    toJSON(_: GetFileSystemNotificationProviderRequest): unknown;
    create(base?: DeepPartial<GetFileSystemNotificationProviderRequest>): GetFileSystemNotificationProviderRequest;
    fromPartial(_: DeepPartial<GetFileSystemNotificationProviderRequest>): GetFileSystemNotificationProviderRequest;
};
export declare const GetFileSystemNotificationProviderResponse: {
    encode(message: GetFileSystemNotificationProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFileSystemNotificationProviderResponse;
    fromJSON(object: any): GetFileSystemNotificationProviderResponse;
    toJSON(message: GetFileSystemNotificationProviderResponse): unknown;
    create(base?: DeepPartial<GetFileSystemNotificationProviderResponse>): GetFileSystemNotificationProviderResponse;
    fromPartial(object: DeepPartial<GetFileSystemNotificationProviderResponse>): GetFileSystemNotificationProviderResponse;
};
export declare const GetLogNotificationProviderRequest: {
    encode(_: GetLogNotificationProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLogNotificationProviderRequest;
    fromJSON(_: any): GetLogNotificationProviderRequest;
    toJSON(_: GetLogNotificationProviderRequest): unknown;
    create(base?: DeepPartial<GetLogNotificationProviderRequest>): GetLogNotificationProviderRequest;
    fromPartial(_: DeepPartial<GetLogNotificationProviderRequest>): GetLogNotificationProviderRequest;
};
export declare const GetLogNotificationProviderResponse: {
    encode(message: GetLogNotificationProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLogNotificationProviderResponse;
    fromJSON(object: any): GetLogNotificationProviderResponse;
    toJSON(message: GetLogNotificationProviderResponse): unknown;
    create(base?: DeepPartial<GetLogNotificationProviderResponse>): GetLogNotificationProviderResponse;
    fromPartial(object: DeepPartial<GetLogNotificationProviderResponse>): GetLogNotificationProviderResponse;
};
export declare const GetOIDCSettingsRequest: {
    encode(_: GetOIDCSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOIDCSettingsRequest;
    fromJSON(_: any): GetOIDCSettingsRequest;
    toJSON(_: GetOIDCSettingsRequest): unknown;
    create(base?: DeepPartial<GetOIDCSettingsRequest>): GetOIDCSettingsRequest;
    fromPartial(_: DeepPartial<GetOIDCSettingsRequest>): GetOIDCSettingsRequest;
};
export declare const GetOIDCSettingsResponse: {
    encode(message: GetOIDCSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOIDCSettingsResponse;
    fromJSON(object: any): GetOIDCSettingsResponse;
    toJSON(message: GetOIDCSettingsResponse): unknown;
    create(base?: DeepPartial<GetOIDCSettingsResponse>): GetOIDCSettingsResponse;
    fromPartial(object: DeepPartial<GetOIDCSettingsResponse>): GetOIDCSettingsResponse;
};
export declare const AddOIDCSettingsRequest: {
    encode(message: AddOIDCSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCSettingsRequest;
    fromJSON(object: any): AddOIDCSettingsRequest;
    toJSON(message: AddOIDCSettingsRequest): unknown;
    create(base?: DeepPartial<AddOIDCSettingsRequest>): AddOIDCSettingsRequest;
    fromPartial(object: DeepPartial<AddOIDCSettingsRequest>): AddOIDCSettingsRequest;
};
export declare const AddOIDCSettingsResponse: {
    encode(message: AddOIDCSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCSettingsResponse;
    fromJSON(object: any): AddOIDCSettingsResponse;
    toJSON(message: AddOIDCSettingsResponse): unknown;
    create(base?: DeepPartial<AddOIDCSettingsResponse>): AddOIDCSettingsResponse;
    fromPartial(object: DeepPartial<AddOIDCSettingsResponse>): AddOIDCSettingsResponse;
};
export declare const UpdateOIDCSettingsRequest: {
    encode(message: UpdateOIDCSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOIDCSettingsRequest;
    fromJSON(object: any): UpdateOIDCSettingsRequest;
    toJSON(message: UpdateOIDCSettingsRequest): unknown;
    create(base?: DeepPartial<UpdateOIDCSettingsRequest>): UpdateOIDCSettingsRequest;
    fromPartial(object: DeepPartial<UpdateOIDCSettingsRequest>): UpdateOIDCSettingsRequest;
};
export declare const UpdateOIDCSettingsResponse: {
    encode(message: UpdateOIDCSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOIDCSettingsResponse;
    fromJSON(object: any): UpdateOIDCSettingsResponse;
    toJSON(message: UpdateOIDCSettingsResponse): unknown;
    create(base?: DeepPartial<UpdateOIDCSettingsResponse>): UpdateOIDCSettingsResponse;
    fromPartial(object: DeepPartial<UpdateOIDCSettingsResponse>): UpdateOIDCSettingsResponse;
};
export declare const GetSecurityPolicyRequest: {
    encode(_: GetSecurityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecurityPolicyRequest;
    fromJSON(_: any): GetSecurityPolicyRequest;
    toJSON(_: GetSecurityPolicyRequest): unknown;
    create(base?: DeepPartial<GetSecurityPolicyRequest>): GetSecurityPolicyRequest;
    fromPartial(_: DeepPartial<GetSecurityPolicyRequest>): GetSecurityPolicyRequest;
};
export declare const GetSecurityPolicyResponse: {
    encode(message: GetSecurityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSecurityPolicyResponse;
    fromJSON(object: any): GetSecurityPolicyResponse;
    toJSON(message: GetSecurityPolicyResponse): unknown;
    create(base?: DeepPartial<GetSecurityPolicyResponse>): GetSecurityPolicyResponse;
    fromPartial(object: DeepPartial<GetSecurityPolicyResponse>): GetSecurityPolicyResponse;
};
export declare const SetSecurityPolicyRequest: {
    encode(message: SetSecurityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSecurityPolicyRequest;
    fromJSON(object: any): SetSecurityPolicyRequest;
    toJSON(message: SetSecurityPolicyRequest): unknown;
    create(base?: DeepPartial<SetSecurityPolicyRequest>): SetSecurityPolicyRequest;
    fromPartial(object: DeepPartial<SetSecurityPolicyRequest>): SetSecurityPolicyRequest;
};
export declare const SetSecurityPolicyResponse: {
    encode(message: SetSecurityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSecurityPolicyResponse;
    fromJSON(object: any): SetSecurityPolicyResponse;
    toJSON(message: SetSecurityPolicyResponse): unknown;
    create(base?: DeepPartial<SetSecurityPolicyResponse>): SetSecurityPolicyResponse;
    fromPartial(object: DeepPartial<SetSecurityPolicyResponse>): SetSecurityPolicyResponse;
};
export declare const IsOrgUniqueRequest: {
    encode(message: IsOrgUniqueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsOrgUniqueRequest;
    fromJSON(object: any): IsOrgUniqueRequest;
    toJSON(message: IsOrgUniqueRequest): unknown;
    create(base?: DeepPartial<IsOrgUniqueRequest>): IsOrgUniqueRequest;
    fromPartial(object: DeepPartial<IsOrgUniqueRequest>): IsOrgUniqueRequest;
};
export declare const IsOrgUniqueResponse: {
    encode(message: IsOrgUniqueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsOrgUniqueResponse;
    fromJSON(object: any): IsOrgUniqueResponse;
    toJSON(message: IsOrgUniqueResponse): unknown;
    create(base?: DeepPartial<IsOrgUniqueResponse>): IsOrgUniqueResponse;
    fromPartial(object: DeepPartial<IsOrgUniqueResponse>): IsOrgUniqueResponse;
};
export declare const GetOrgByIDRequest: {
    encode(message: GetOrgByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgByIDRequest;
    fromJSON(object: any): GetOrgByIDRequest;
    toJSON(message: GetOrgByIDRequest): unknown;
    create(base?: DeepPartial<GetOrgByIDRequest>): GetOrgByIDRequest;
    fromPartial(object: DeepPartial<GetOrgByIDRequest>): GetOrgByIDRequest;
};
export declare const GetOrgByIDResponse: {
    encode(message: GetOrgByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgByIDResponse;
    fromJSON(object: any): GetOrgByIDResponse;
    toJSON(message: GetOrgByIDResponse): unknown;
    create(base?: DeepPartial<GetOrgByIDResponse>): GetOrgByIDResponse;
    fromPartial(object: DeepPartial<GetOrgByIDResponse>): GetOrgByIDResponse;
};
export declare const ListOrgsRequest: {
    encode(message: ListOrgsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgsRequest;
    fromJSON(object: any): ListOrgsRequest;
    toJSON(message: ListOrgsRequest): unknown;
    create(base?: DeepPartial<ListOrgsRequest>): ListOrgsRequest;
    fromPartial(object: DeepPartial<ListOrgsRequest>): ListOrgsRequest;
};
export declare const ListOrgsResponse: {
    encode(message: ListOrgsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgsResponse;
    fromJSON(object: any): ListOrgsResponse;
    toJSON(message: ListOrgsResponse): unknown;
    create(base?: DeepPartial<ListOrgsResponse>): ListOrgsResponse;
    fromPartial(object: DeepPartial<ListOrgsResponse>): ListOrgsResponse;
};
export declare const SetUpOrgRequest: {
    encode(message: SetUpOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUpOrgRequest;
    fromJSON(object: any): SetUpOrgRequest;
    toJSON(message: SetUpOrgRequest): unknown;
    create(base?: DeepPartial<SetUpOrgRequest>): SetUpOrgRequest;
    fromPartial(object: DeepPartial<SetUpOrgRequest>): SetUpOrgRequest;
};
export declare const SetUpOrgRequest_Org: {
    encode(message: SetUpOrgRequest_Org, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUpOrgRequest_Org;
    fromJSON(object: any): SetUpOrgRequest_Org;
    toJSON(message: SetUpOrgRequest_Org): unknown;
    create(base?: DeepPartial<SetUpOrgRequest_Org>): SetUpOrgRequest_Org;
    fromPartial(object: DeepPartial<SetUpOrgRequest_Org>): SetUpOrgRequest_Org;
};
export declare const SetUpOrgRequest_Human: {
    encode(message: SetUpOrgRequest_Human, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUpOrgRequest_Human;
    fromJSON(object: any): SetUpOrgRequest_Human;
    toJSON(message: SetUpOrgRequest_Human): unknown;
    create(base?: DeepPartial<SetUpOrgRequest_Human>): SetUpOrgRequest_Human;
    fromPartial(object: DeepPartial<SetUpOrgRequest_Human>): SetUpOrgRequest_Human;
};
export declare const SetUpOrgRequest_Human_Profile: {
    encode(message: SetUpOrgRequest_Human_Profile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUpOrgRequest_Human_Profile;
    fromJSON(object: any): SetUpOrgRequest_Human_Profile;
    toJSON(message: SetUpOrgRequest_Human_Profile): unknown;
    create(base?: DeepPartial<SetUpOrgRequest_Human_Profile>): SetUpOrgRequest_Human_Profile;
    fromPartial(object: DeepPartial<SetUpOrgRequest_Human_Profile>): SetUpOrgRequest_Human_Profile;
};
export declare const SetUpOrgRequest_Human_Email: {
    encode(message: SetUpOrgRequest_Human_Email, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUpOrgRequest_Human_Email;
    fromJSON(object: any): SetUpOrgRequest_Human_Email;
    toJSON(message: SetUpOrgRequest_Human_Email): unknown;
    create(base?: DeepPartial<SetUpOrgRequest_Human_Email>): SetUpOrgRequest_Human_Email;
    fromPartial(object: DeepPartial<SetUpOrgRequest_Human_Email>): SetUpOrgRequest_Human_Email;
};
export declare const SetUpOrgRequest_Human_Phone: {
    encode(message: SetUpOrgRequest_Human_Phone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUpOrgRequest_Human_Phone;
    fromJSON(object: any): SetUpOrgRequest_Human_Phone;
    toJSON(message: SetUpOrgRequest_Human_Phone): unknown;
    create(base?: DeepPartial<SetUpOrgRequest_Human_Phone>): SetUpOrgRequest_Human_Phone;
    fromPartial(object: DeepPartial<SetUpOrgRequest_Human_Phone>): SetUpOrgRequest_Human_Phone;
};
export declare const SetUpOrgResponse: {
    encode(message: SetUpOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUpOrgResponse;
    fromJSON(object: any): SetUpOrgResponse;
    toJSON(message: SetUpOrgResponse): unknown;
    create(base?: DeepPartial<SetUpOrgResponse>): SetUpOrgResponse;
    fromPartial(object: DeepPartial<SetUpOrgResponse>): SetUpOrgResponse;
};
export declare const RemoveOrgRequest: {
    encode(message: RemoveOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgRequest;
    fromJSON(object: any): RemoveOrgRequest;
    toJSON(message: RemoveOrgRequest): unknown;
    create(base?: DeepPartial<RemoveOrgRequest>): RemoveOrgRequest;
    fromPartial(object: DeepPartial<RemoveOrgRequest>): RemoveOrgRequest;
};
export declare const RemoveOrgResponse: {
    encode(message: RemoveOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgResponse;
    fromJSON(object: any): RemoveOrgResponse;
    toJSON(message: RemoveOrgResponse): unknown;
    create(base?: DeepPartial<RemoveOrgResponse>): RemoveOrgResponse;
    fromPartial(object: DeepPartial<RemoveOrgResponse>): RemoveOrgResponse;
};
export declare const GetIDPByIDRequest: {
    encode(message: GetIDPByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIDPByIDRequest;
    fromJSON(object: any): GetIDPByIDRequest;
    toJSON(message: GetIDPByIDRequest): unknown;
    create(base?: DeepPartial<GetIDPByIDRequest>): GetIDPByIDRequest;
    fromPartial(object: DeepPartial<GetIDPByIDRequest>): GetIDPByIDRequest;
};
export declare const GetIDPByIDResponse: {
    encode(message: GetIDPByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIDPByIDResponse;
    fromJSON(object: any): GetIDPByIDResponse;
    toJSON(message: GetIDPByIDResponse): unknown;
    create(base?: DeepPartial<GetIDPByIDResponse>): GetIDPByIDResponse;
    fromPartial(object: DeepPartial<GetIDPByIDResponse>): GetIDPByIDResponse;
};
export declare const ListIDPsRequest: {
    encode(message: ListIDPsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListIDPsRequest;
    fromJSON(object: any): ListIDPsRequest;
    toJSON(message: ListIDPsRequest): unknown;
    create(base?: DeepPartial<ListIDPsRequest>): ListIDPsRequest;
    fromPartial(object: DeepPartial<ListIDPsRequest>): ListIDPsRequest;
};
export declare const IDPQuery: {
    encode(message: IDPQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPQuery;
    fromJSON(object: any): IDPQuery;
    toJSON(message: IDPQuery): unknown;
    create(base?: DeepPartial<IDPQuery>): IDPQuery;
    fromPartial(object: DeepPartial<IDPQuery>): IDPQuery;
};
export declare const ListIDPsResponse: {
    encode(message: ListIDPsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListIDPsResponse;
    fromJSON(object: any): ListIDPsResponse;
    toJSON(message: ListIDPsResponse): unknown;
    create(base?: DeepPartial<ListIDPsResponse>): ListIDPsResponse;
    fromPartial(object: DeepPartial<ListIDPsResponse>): ListIDPsResponse;
};
export declare const AddOIDCIDPRequest: {
    encode(message: AddOIDCIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCIDPRequest;
    fromJSON(object: any): AddOIDCIDPRequest;
    toJSON(message: AddOIDCIDPRequest): unknown;
    create(base?: DeepPartial<AddOIDCIDPRequest>): AddOIDCIDPRequest;
    fromPartial(object: DeepPartial<AddOIDCIDPRequest>): AddOIDCIDPRequest;
};
export declare const AddOIDCIDPResponse: {
    encode(message: AddOIDCIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCIDPResponse;
    fromJSON(object: any): AddOIDCIDPResponse;
    toJSON(message: AddOIDCIDPResponse): unknown;
    create(base?: DeepPartial<AddOIDCIDPResponse>): AddOIDCIDPResponse;
    fromPartial(object: DeepPartial<AddOIDCIDPResponse>): AddOIDCIDPResponse;
};
export declare const AddJWTIDPRequest: {
    encode(message: AddJWTIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddJWTIDPRequest;
    fromJSON(object: any): AddJWTIDPRequest;
    toJSON(message: AddJWTIDPRequest): unknown;
    create(base?: DeepPartial<AddJWTIDPRequest>): AddJWTIDPRequest;
    fromPartial(object: DeepPartial<AddJWTIDPRequest>): AddJWTIDPRequest;
};
export declare const AddJWTIDPResponse: {
    encode(message: AddJWTIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddJWTIDPResponse;
    fromJSON(object: any): AddJWTIDPResponse;
    toJSON(message: AddJWTIDPResponse): unknown;
    create(base?: DeepPartial<AddJWTIDPResponse>): AddJWTIDPResponse;
    fromPartial(object: DeepPartial<AddJWTIDPResponse>): AddJWTIDPResponse;
};
export declare const UpdateIDPRequest: {
    encode(message: UpdateIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPRequest;
    fromJSON(object: any): UpdateIDPRequest;
    toJSON(message: UpdateIDPRequest): unknown;
    create(base?: DeepPartial<UpdateIDPRequest>): UpdateIDPRequest;
    fromPartial(object: DeepPartial<UpdateIDPRequest>): UpdateIDPRequest;
};
export declare const UpdateIDPResponse: {
    encode(message: UpdateIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPResponse;
    fromJSON(object: any): UpdateIDPResponse;
    toJSON(message: UpdateIDPResponse): unknown;
    create(base?: DeepPartial<UpdateIDPResponse>): UpdateIDPResponse;
    fromPartial(object: DeepPartial<UpdateIDPResponse>): UpdateIDPResponse;
};
export declare const DeactivateIDPRequest: {
    encode(message: DeactivateIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateIDPRequest;
    fromJSON(object: any): DeactivateIDPRequest;
    toJSON(message: DeactivateIDPRequest): unknown;
    create(base?: DeepPartial<DeactivateIDPRequest>): DeactivateIDPRequest;
    fromPartial(object: DeepPartial<DeactivateIDPRequest>): DeactivateIDPRequest;
};
export declare const DeactivateIDPResponse: {
    encode(message: DeactivateIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateIDPResponse;
    fromJSON(object: any): DeactivateIDPResponse;
    toJSON(message: DeactivateIDPResponse): unknown;
    create(base?: DeepPartial<DeactivateIDPResponse>): DeactivateIDPResponse;
    fromPartial(object: DeepPartial<DeactivateIDPResponse>): DeactivateIDPResponse;
};
export declare const ReactivateIDPRequest: {
    encode(message: ReactivateIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateIDPRequest;
    fromJSON(object: any): ReactivateIDPRequest;
    toJSON(message: ReactivateIDPRequest): unknown;
    create(base?: DeepPartial<ReactivateIDPRequest>): ReactivateIDPRequest;
    fromPartial(object: DeepPartial<ReactivateIDPRequest>): ReactivateIDPRequest;
};
export declare const ReactivateIDPResponse: {
    encode(message: ReactivateIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateIDPResponse;
    fromJSON(object: any): ReactivateIDPResponse;
    toJSON(message: ReactivateIDPResponse): unknown;
    create(base?: DeepPartial<ReactivateIDPResponse>): ReactivateIDPResponse;
    fromPartial(object: DeepPartial<ReactivateIDPResponse>): ReactivateIDPResponse;
};
export declare const RemoveIDPRequest: {
    encode(message: RemoveIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIDPRequest;
    fromJSON(object: any): RemoveIDPRequest;
    toJSON(message: RemoveIDPRequest): unknown;
    create(base?: DeepPartial<RemoveIDPRequest>): RemoveIDPRequest;
    fromPartial(object: DeepPartial<RemoveIDPRequest>): RemoveIDPRequest;
};
export declare const RemoveIDPResponse: {
    encode(message: RemoveIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIDPResponse;
    fromJSON(object: any): RemoveIDPResponse;
    toJSON(message: RemoveIDPResponse): unknown;
    create(base?: DeepPartial<RemoveIDPResponse>): RemoveIDPResponse;
    fromPartial(object: DeepPartial<RemoveIDPResponse>): RemoveIDPResponse;
};
export declare const UpdateIDPOIDCConfigRequest: {
    encode(message: UpdateIDPOIDCConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPOIDCConfigRequest;
    fromJSON(object: any): UpdateIDPOIDCConfigRequest;
    toJSON(message: UpdateIDPOIDCConfigRequest): unknown;
    create(base?: DeepPartial<UpdateIDPOIDCConfigRequest>): UpdateIDPOIDCConfigRequest;
    fromPartial(object: DeepPartial<UpdateIDPOIDCConfigRequest>): UpdateIDPOIDCConfigRequest;
};
export declare const UpdateIDPOIDCConfigResponse: {
    encode(message: UpdateIDPOIDCConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPOIDCConfigResponse;
    fromJSON(object: any): UpdateIDPOIDCConfigResponse;
    toJSON(message: UpdateIDPOIDCConfigResponse): unknown;
    create(base?: DeepPartial<UpdateIDPOIDCConfigResponse>): UpdateIDPOIDCConfigResponse;
    fromPartial(object: DeepPartial<UpdateIDPOIDCConfigResponse>): UpdateIDPOIDCConfigResponse;
};
export declare const UpdateIDPJWTConfigRequest: {
    encode(message: UpdateIDPJWTConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPJWTConfigRequest;
    fromJSON(object: any): UpdateIDPJWTConfigRequest;
    toJSON(message: UpdateIDPJWTConfigRequest): unknown;
    create(base?: DeepPartial<UpdateIDPJWTConfigRequest>): UpdateIDPJWTConfigRequest;
    fromPartial(object: DeepPartial<UpdateIDPJWTConfigRequest>): UpdateIDPJWTConfigRequest;
};
export declare const UpdateIDPJWTConfigResponse: {
    encode(message: UpdateIDPJWTConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPJWTConfigResponse;
    fromJSON(object: any): UpdateIDPJWTConfigResponse;
    toJSON(message: UpdateIDPJWTConfigResponse): unknown;
    create(base?: DeepPartial<UpdateIDPJWTConfigResponse>): UpdateIDPJWTConfigResponse;
    fromPartial(object: DeepPartial<UpdateIDPJWTConfigResponse>): UpdateIDPJWTConfigResponse;
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
export declare const UpdateOrgIAMPolicyRequest: {
    encode(message: UpdateOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIAMPolicyRequest;
    fromJSON(object: any): UpdateOrgIAMPolicyRequest;
    toJSON(message: UpdateOrgIAMPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateOrgIAMPolicyRequest>): UpdateOrgIAMPolicyRequest;
    fromPartial(object: DeepPartial<UpdateOrgIAMPolicyRequest>): UpdateOrgIAMPolicyRequest;
};
export declare const UpdateOrgIAMPolicyResponse: {
    encode(message: UpdateOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIAMPolicyResponse;
    fromJSON(object: any): UpdateOrgIAMPolicyResponse;
    toJSON(message: UpdateOrgIAMPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateOrgIAMPolicyResponse>): UpdateOrgIAMPolicyResponse;
    fromPartial(object: DeepPartial<UpdateOrgIAMPolicyResponse>): UpdateOrgIAMPolicyResponse;
};
export declare const GetCustomOrgIAMPolicyRequest: {
    encode(message: GetCustomOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomOrgIAMPolicyRequest;
    fromJSON(object: any): GetCustomOrgIAMPolicyRequest;
    toJSON(message: GetCustomOrgIAMPolicyRequest): unknown;
    create(base?: DeepPartial<GetCustomOrgIAMPolicyRequest>): GetCustomOrgIAMPolicyRequest;
    fromPartial(object: DeepPartial<GetCustomOrgIAMPolicyRequest>): GetCustomOrgIAMPolicyRequest;
};
export declare const GetCustomOrgIAMPolicyResponse: {
    encode(message: GetCustomOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomOrgIAMPolicyResponse;
    fromJSON(object: any): GetCustomOrgIAMPolicyResponse;
    toJSON(message: GetCustomOrgIAMPolicyResponse): unknown;
    create(base?: DeepPartial<GetCustomOrgIAMPolicyResponse>): GetCustomOrgIAMPolicyResponse;
    fromPartial(object: DeepPartial<GetCustomOrgIAMPolicyResponse>): GetCustomOrgIAMPolicyResponse;
};
export declare const AddCustomOrgIAMPolicyRequest: {
    encode(message: AddCustomOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomOrgIAMPolicyRequest;
    fromJSON(object: any): AddCustomOrgIAMPolicyRequest;
    toJSON(message: AddCustomOrgIAMPolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomOrgIAMPolicyRequest>): AddCustomOrgIAMPolicyRequest;
    fromPartial(object: DeepPartial<AddCustomOrgIAMPolicyRequest>): AddCustomOrgIAMPolicyRequest;
};
export declare const AddCustomOrgIAMPolicyResponse: {
    encode(message: AddCustomOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomOrgIAMPolicyResponse;
    fromJSON(object: any): AddCustomOrgIAMPolicyResponse;
    toJSON(message: AddCustomOrgIAMPolicyResponse): unknown;
    create(base?: DeepPartial<AddCustomOrgIAMPolicyResponse>): AddCustomOrgIAMPolicyResponse;
    fromPartial(object: DeepPartial<AddCustomOrgIAMPolicyResponse>): AddCustomOrgIAMPolicyResponse;
};
export declare const UpdateCustomOrgIAMPolicyRequest: {
    encode(message: UpdateCustomOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomOrgIAMPolicyRequest;
    fromJSON(object: any): UpdateCustomOrgIAMPolicyRequest;
    toJSON(message: UpdateCustomOrgIAMPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateCustomOrgIAMPolicyRequest>): UpdateCustomOrgIAMPolicyRequest;
    fromPartial(object: DeepPartial<UpdateCustomOrgIAMPolicyRequest>): UpdateCustomOrgIAMPolicyRequest;
};
export declare const UpdateCustomOrgIAMPolicyResponse: {
    encode(message: UpdateCustomOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomOrgIAMPolicyResponse;
    fromJSON(object: any): UpdateCustomOrgIAMPolicyResponse;
    toJSON(message: UpdateCustomOrgIAMPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateCustomOrgIAMPolicyResponse>): UpdateCustomOrgIAMPolicyResponse;
    fromPartial(object: DeepPartial<UpdateCustomOrgIAMPolicyResponse>): UpdateCustomOrgIAMPolicyResponse;
};
export declare const ResetCustomOrgIAMPolicyToDefaultRequest: {
    encode(message: ResetCustomOrgIAMPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomOrgIAMPolicyToDefaultRequest;
    fromJSON(object: any): ResetCustomOrgIAMPolicyToDefaultRequest;
    toJSON(message: ResetCustomOrgIAMPolicyToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomOrgIAMPolicyToDefaultRequest>): ResetCustomOrgIAMPolicyToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomOrgIAMPolicyToDefaultRequest>): ResetCustomOrgIAMPolicyToDefaultRequest;
};
export declare const ResetCustomOrgIAMPolicyToDefaultResponse: {
    encode(message: ResetCustomOrgIAMPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomOrgIAMPolicyToDefaultResponse;
    fromJSON(object: any): ResetCustomOrgIAMPolicyToDefaultResponse;
    toJSON(message: ResetCustomOrgIAMPolicyToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomOrgIAMPolicyToDefaultResponse>): ResetCustomOrgIAMPolicyToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomOrgIAMPolicyToDefaultResponse>): ResetCustomOrgIAMPolicyToDefaultResponse;
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
export declare const UpdateDomainPolicyRequest: {
    encode(message: UpdateDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDomainPolicyRequest;
    fromJSON(object: any): UpdateDomainPolicyRequest;
    toJSON(message: UpdateDomainPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateDomainPolicyRequest>): UpdateDomainPolicyRequest;
    fromPartial(object: DeepPartial<UpdateDomainPolicyRequest>): UpdateDomainPolicyRequest;
};
export declare const UpdateDomainPolicyResponse: {
    encode(message: UpdateDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDomainPolicyResponse;
    fromJSON(object: any): UpdateDomainPolicyResponse;
    toJSON(message: UpdateDomainPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateDomainPolicyResponse>): UpdateDomainPolicyResponse;
    fromPartial(object: DeepPartial<UpdateDomainPolicyResponse>): UpdateDomainPolicyResponse;
};
export declare const GetCustomDomainPolicyRequest: {
    encode(message: GetCustomDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomDomainPolicyRequest;
    fromJSON(object: any): GetCustomDomainPolicyRequest;
    toJSON(message: GetCustomDomainPolicyRequest): unknown;
    create(base?: DeepPartial<GetCustomDomainPolicyRequest>): GetCustomDomainPolicyRequest;
    fromPartial(object: DeepPartial<GetCustomDomainPolicyRequest>): GetCustomDomainPolicyRequest;
};
export declare const GetCustomDomainPolicyResponse: {
    encode(message: GetCustomDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomDomainPolicyResponse;
    fromJSON(object: any): GetCustomDomainPolicyResponse;
    toJSON(message: GetCustomDomainPolicyResponse): unknown;
    create(base?: DeepPartial<GetCustomDomainPolicyResponse>): GetCustomDomainPolicyResponse;
    fromPartial(object: DeepPartial<GetCustomDomainPolicyResponse>): GetCustomDomainPolicyResponse;
};
export declare const AddCustomDomainPolicyRequest: {
    encode(message: AddCustomDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomDomainPolicyRequest;
    fromJSON(object: any): AddCustomDomainPolicyRequest;
    toJSON(message: AddCustomDomainPolicyRequest): unknown;
    create(base?: DeepPartial<AddCustomDomainPolicyRequest>): AddCustomDomainPolicyRequest;
    fromPartial(object: DeepPartial<AddCustomDomainPolicyRequest>): AddCustomDomainPolicyRequest;
};
export declare const AddCustomDomainPolicyResponse: {
    encode(message: AddCustomDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomDomainPolicyResponse;
    fromJSON(object: any): AddCustomDomainPolicyResponse;
    toJSON(message: AddCustomDomainPolicyResponse): unknown;
    create(base?: DeepPartial<AddCustomDomainPolicyResponse>): AddCustomDomainPolicyResponse;
    fromPartial(object: DeepPartial<AddCustomDomainPolicyResponse>): AddCustomDomainPolicyResponse;
};
export declare const UpdateCustomDomainPolicyRequest: {
    encode(message: UpdateCustomDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomDomainPolicyRequest;
    fromJSON(object: any): UpdateCustomDomainPolicyRequest;
    toJSON(message: UpdateCustomDomainPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateCustomDomainPolicyRequest>): UpdateCustomDomainPolicyRequest;
    fromPartial(object: DeepPartial<UpdateCustomDomainPolicyRequest>): UpdateCustomDomainPolicyRequest;
};
export declare const UpdateCustomDomainPolicyResponse: {
    encode(message: UpdateCustomDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomDomainPolicyResponse;
    fromJSON(object: any): UpdateCustomDomainPolicyResponse;
    toJSON(message: UpdateCustomDomainPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateCustomDomainPolicyResponse>): UpdateCustomDomainPolicyResponse;
    fromPartial(object: DeepPartial<UpdateCustomDomainPolicyResponse>): UpdateCustomDomainPolicyResponse;
};
export declare const ResetCustomDomainPolicyToDefaultRequest: {
    encode(message: ResetCustomDomainPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomDomainPolicyToDefaultRequest;
    fromJSON(object: any): ResetCustomDomainPolicyToDefaultRequest;
    toJSON(message: ResetCustomDomainPolicyToDefaultRequest): unknown;
    create(base?: DeepPartial<ResetCustomDomainPolicyToDefaultRequest>): ResetCustomDomainPolicyToDefaultRequest;
    fromPartial(object: DeepPartial<ResetCustomDomainPolicyToDefaultRequest>): ResetCustomDomainPolicyToDefaultRequest;
};
export declare const ResetCustomDomainPolicyToDefaultResponse: {
    encode(message: ResetCustomDomainPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomDomainPolicyToDefaultResponse;
    fromJSON(object: any): ResetCustomDomainPolicyToDefaultResponse;
    toJSON(message: ResetCustomDomainPolicyToDefaultResponse): unknown;
    create(base?: DeepPartial<ResetCustomDomainPolicyToDefaultResponse>): ResetCustomDomainPolicyToDefaultResponse;
    fromPartial(object: DeepPartial<ResetCustomDomainPolicyToDefaultResponse>): ResetCustomDomainPolicyToDefaultResponse;
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
export declare const UpdateLabelPolicyRequest: {
    encode(message: UpdateLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLabelPolicyRequest;
    fromJSON(object: any): UpdateLabelPolicyRequest;
    toJSON(message: UpdateLabelPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateLabelPolicyRequest>): UpdateLabelPolicyRequest;
    fromPartial(object: DeepPartial<UpdateLabelPolicyRequest>): UpdateLabelPolicyRequest;
};
export declare const UpdateLabelPolicyResponse: {
    encode(message: UpdateLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLabelPolicyResponse;
    fromJSON(object: any): UpdateLabelPolicyResponse;
    toJSON(message: UpdateLabelPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateLabelPolicyResponse>): UpdateLabelPolicyResponse;
    fromPartial(object: DeepPartial<UpdateLabelPolicyResponse>): UpdateLabelPolicyResponse;
};
export declare const ActivateLabelPolicyRequest: {
    encode(_: ActivateLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateLabelPolicyRequest;
    fromJSON(_: any): ActivateLabelPolicyRequest;
    toJSON(_: ActivateLabelPolicyRequest): unknown;
    create(base?: DeepPartial<ActivateLabelPolicyRequest>): ActivateLabelPolicyRequest;
    fromPartial(_: DeepPartial<ActivateLabelPolicyRequest>): ActivateLabelPolicyRequest;
};
export declare const ActivateLabelPolicyResponse: {
    encode(message: ActivateLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateLabelPolicyResponse;
    fromJSON(object: any): ActivateLabelPolicyResponse;
    toJSON(message: ActivateLabelPolicyResponse): unknown;
    create(base?: DeepPartial<ActivateLabelPolicyResponse>): ActivateLabelPolicyResponse;
    fromPartial(object: DeepPartial<ActivateLabelPolicyResponse>): ActivateLabelPolicyResponse;
};
export declare const RemoveLabelPolicyLogoRequest: {
    encode(_: RemoveLabelPolicyLogoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyLogoRequest;
    fromJSON(_: any): RemoveLabelPolicyLogoRequest;
    toJSON(_: RemoveLabelPolicyLogoRequest): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyLogoRequest>): RemoveLabelPolicyLogoRequest;
    fromPartial(_: DeepPartial<RemoveLabelPolicyLogoRequest>): RemoveLabelPolicyLogoRequest;
};
export declare const RemoveLabelPolicyLogoResponse: {
    encode(message: RemoveLabelPolicyLogoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyLogoResponse;
    fromJSON(object: any): RemoveLabelPolicyLogoResponse;
    toJSON(message: RemoveLabelPolicyLogoResponse): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyLogoResponse>): RemoveLabelPolicyLogoResponse;
    fromPartial(object: DeepPartial<RemoveLabelPolicyLogoResponse>): RemoveLabelPolicyLogoResponse;
};
export declare const RemoveLabelPolicyLogoDarkRequest: {
    encode(_: RemoveLabelPolicyLogoDarkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyLogoDarkRequest;
    fromJSON(_: any): RemoveLabelPolicyLogoDarkRequest;
    toJSON(_: RemoveLabelPolicyLogoDarkRequest): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyLogoDarkRequest>): RemoveLabelPolicyLogoDarkRequest;
    fromPartial(_: DeepPartial<RemoveLabelPolicyLogoDarkRequest>): RemoveLabelPolicyLogoDarkRequest;
};
export declare const RemoveLabelPolicyLogoDarkResponse: {
    encode(message: RemoveLabelPolicyLogoDarkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyLogoDarkResponse;
    fromJSON(object: any): RemoveLabelPolicyLogoDarkResponse;
    toJSON(message: RemoveLabelPolicyLogoDarkResponse): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyLogoDarkResponse>): RemoveLabelPolicyLogoDarkResponse;
    fromPartial(object: DeepPartial<RemoveLabelPolicyLogoDarkResponse>): RemoveLabelPolicyLogoDarkResponse;
};
export declare const RemoveLabelPolicyIconRequest: {
    encode(_: RemoveLabelPolicyIconRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyIconRequest;
    fromJSON(_: any): RemoveLabelPolicyIconRequest;
    toJSON(_: RemoveLabelPolicyIconRequest): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyIconRequest>): RemoveLabelPolicyIconRequest;
    fromPartial(_: DeepPartial<RemoveLabelPolicyIconRequest>): RemoveLabelPolicyIconRequest;
};
export declare const RemoveLabelPolicyIconResponse: {
    encode(message: RemoveLabelPolicyIconResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyIconResponse;
    fromJSON(object: any): RemoveLabelPolicyIconResponse;
    toJSON(message: RemoveLabelPolicyIconResponse): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyIconResponse>): RemoveLabelPolicyIconResponse;
    fromPartial(object: DeepPartial<RemoveLabelPolicyIconResponse>): RemoveLabelPolicyIconResponse;
};
export declare const RemoveLabelPolicyIconDarkRequest: {
    encode(_: RemoveLabelPolicyIconDarkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyIconDarkRequest;
    fromJSON(_: any): RemoveLabelPolicyIconDarkRequest;
    toJSON(_: RemoveLabelPolicyIconDarkRequest): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyIconDarkRequest>): RemoveLabelPolicyIconDarkRequest;
    fromPartial(_: DeepPartial<RemoveLabelPolicyIconDarkRequest>): RemoveLabelPolicyIconDarkRequest;
};
export declare const RemoveLabelPolicyIconDarkResponse: {
    encode(message: RemoveLabelPolicyIconDarkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyIconDarkResponse;
    fromJSON(object: any): RemoveLabelPolicyIconDarkResponse;
    toJSON(message: RemoveLabelPolicyIconDarkResponse): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyIconDarkResponse>): RemoveLabelPolicyIconDarkResponse;
    fromPartial(object: DeepPartial<RemoveLabelPolicyIconDarkResponse>): RemoveLabelPolicyIconDarkResponse;
};
export declare const RemoveLabelPolicyFontRequest: {
    encode(_: RemoveLabelPolicyFontRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyFontRequest;
    fromJSON(_: any): RemoveLabelPolicyFontRequest;
    toJSON(_: RemoveLabelPolicyFontRequest): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyFontRequest>): RemoveLabelPolicyFontRequest;
    fromPartial(_: DeepPartial<RemoveLabelPolicyFontRequest>): RemoveLabelPolicyFontRequest;
};
export declare const RemoveLabelPolicyFontResponse: {
    encode(message: RemoveLabelPolicyFontResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyFontResponse;
    fromJSON(object: any): RemoveLabelPolicyFontResponse;
    toJSON(message: RemoveLabelPolicyFontResponse): unknown;
    create(base?: DeepPartial<RemoveLabelPolicyFontResponse>): RemoveLabelPolicyFontResponse;
    fromPartial(object: DeepPartial<RemoveLabelPolicyFontResponse>): RemoveLabelPolicyFontResponse;
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
export declare const UpdateLoginPolicyRequest: {
    encode(message: UpdateLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLoginPolicyRequest;
    fromJSON(object: any): UpdateLoginPolicyRequest;
    toJSON(message: UpdateLoginPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateLoginPolicyRequest>): UpdateLoginPolicyRequest;
    fromPartial(object: DeepPartial<UpdateLoginPolicyRequest>): UpdateLoginPolicyRequest;
};
export declare const UpdateLoginPolicyResponse: {
    encode(message: UpdateLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLoginPolicyResponse;
    fromJSON(object: any): UpdateLoginPolicyResponse;
    toJSON(message: UpdateLoginPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateLoginPolicyResponse>): UpdateLoginPolicyResponse;
    fromPartial(object: DeepPartial<UpdateLoginPolicyResponse>): UpdateLoginPolicyResponse;
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
export declare const UpdatePasswordComplexityPolicyRequest: {
    encode(message: UpdatePasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePasswordComplexityPolicyRequest;
    fromJSON(object: any): UpdatePasswordComplexityPolicyRequest;
    toJSON(message: UpdatePasswordComplexityPolicyRequest): unknown;
    create(base?: DeepPartial<UpdatePasswordComplexityPolicyRequest>): UpdatePasswordComplexityPolicyRequest;
    fromPartial(object: DeepPartial<UpdatePasswordComplexityPolicyRequest>): UpdatePasswordComplexityPolicyRequest;
};
export declare const UpdatePasswordComplexityPolicyResponse: {
    encode(message: UpdatePasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePasswordComplexityPolicyResponse;
    fromJSON(object: any): UpdatePasswordComplexityPolicyResponse;
    toJSON(message: UpdatePasswordComplexityPolicyResponse): unknown;
    create(base?: DeepPartial<UpdatePasswordComplexityPolicyResponse>): UpdatePasswordComplexityPolicyResponse;
    fromPartial(object: DeepPartial<UpdatePasswordComplexityPolicyResponse>): UpdatePasswordComplexityPolicyResponse;
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
export declare const UpdatePasswordAgePolicyRequest: {
    encode(message: UpdatePasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePasswordAgePolicyRequest;
    fromJSON(object: any): UpdatePasswordAgePolicyRequest;
    toJSON(message: UpdatePasswordAgePolicyRequest): unknown;
    create(base?: DeepPartial<UpdatePasswordAgePolicyRequest>): UpdatePasswordAgePolicyRequest;
    fromPartial(object: DeepPartial<UpdatePasswordAgePolicyRequest>): UpdatePasswordAgePolicyRequest;
};
export declare const UpdatePasswordAgePolicyResponse: {
    encode(message: UpdatePasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePasswordAgePolicyResponse;
    fromJSON(object: any): UpdatePasswordAgePolicyResponse;
    toJSON(message: UpdatePasswordAgePolicyResponse): unknown;
    create(base?: DeepPartial<UpdatePasswordAgePolicyResponse>): UpdatePasswordAgePolicyResponse;
    fromPartial(object: DeepPartial<UpdatePasswordAgePolicyResponse>): UpdatePasswordAgePolicyResponse;
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
export declare const UpdateLockoutPolicyRequest: {
    encode(message: UpdateLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLockoutPolicyRequest;
    fromJSON(object: any): UpdateLockoutPolicyRequest;
    toJSON(message: UpdateLockoutPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateLockoutPolicyRequest>): UpdateLockoutPolicyRequest;
    fromPartial(object: DeepPartial<UpdateLockoutPolicyRequest>): UpdateLockoutPolicyRequest;
};
export declare const UpdateLockoutPolicyResponse: {
    encode(message: UpdateLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLockoutPolicyResponse;
    fromJSON(object: any): UpdateLockoutPolicyResponse;
    toJSON(message: UpdateLockoutPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateLockoutPolicyResponse>): UpdateLockoutPolicyResponse;
    fromPartial(object: DeepPartial<UpdateLockoutPolicyResponse>): UpdateLockoutPolicyResponse;
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
export declare const UpdatePrivacyPolicyRequest: {
    encode(message: UpdatePrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivacyPolicyRequest;
    fromJSON(object: any): UpdatePrivacyPolicyRequest;
    toJSON(message: UpdatePrivacyPolicyRequest): unknown;
    create(base?: DeepPartial<UpdatePrivacyPolicyRequest>): UpdatePrivacyPolicyRequest;
    fromPartial(object: DeepPartial<UpdatePrivacyPolicyRequest>): UpdatePrivacyPolicyRequest;
};
export declare const UpdatePrivacyPolicyResponse: {
    encode(message: UpdatePrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivacyPolicyResponse;
    fromJSON(object: any): UpdatePrivacyPolicyResponse;
    toJSON(message: UpdatePrivacyPolicyResponse): unknown;
    create(base?: DeepPartial<UpdatePrivacyPolicyResponse>): UpdatePrivacyPolicyResponse;
    fromPartial(object: DeepPartial<UpdatePrivacyPolicyResponse>): UpdatePrivacyPolicyResponse;
};
export declare const AddNotificationPolicyRequest: {
    encode(message: AddNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddNotificationPolicyRequest;
    fromJSON(object: any): AddNotificationPolicyRequest;
    toJSON(message: AddNotificationPolicyRequest): unknown;
    create(base?: DeepPartial<AddNotificationPolicyRequest>): AddNotificationPolicyRequest;
    fromPartial(object: DeepPartial<AddNotificationPolicyRequest>): AddNotificationPolicyRequest;
};
export declare const AddNotificationPolicyResponse: {
    encode(message: AddNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddNotificationPolicyResponse;
    fromJSON(object: any): AddNotificationPolicyResponse;
    toJSON(message: AddNotificationPolicyResponse): unknown;
    create(base?: DeepPartial<AddNotificationPolicyResponse>): AddNotificationPolicyResponse;
    fromPartial(object: DeepPartial<AddNotificationPolicyResponse>): AddNotificationPolicyResponse;
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
export declare const UpdateNotificationPolicyRequest: {
    encode(message: UpdateNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNotificationPolicyRequest;
    fromJSON(object: any): UpdateNotificationPolicyRequest;
    toJSON(message: UpdateNotificationPolicyRequest): unknown;
    create(base?: DeepPartial<UpdateNotificationPolicyRequest>): UpdateNotificationPolicyRequest;
    fromPartial(object: DeepPartial<UpdateNotificationPolicyRequest>): UpdateNotificationPolicyRequest;
};
export declare const UpdateNotificationPolicyResponse: {
    encode(message: UpdateNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNotificationPolicyResponse;
    fromJSON(object: any): UpdateNotificationPolicyResponse;
    toJSON(message: UpdateNotificationPolicyResponse): unknown;
    create(base?: DeepPartial<UpdateNotificationPolicyResponse>): UpdateNotificationPolicyResponse;
    fromPartial(object: DeepPartial<UpdateNotificationPolicyResponse>): UpdateNotificationPolicyResponse;
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
export declare const SetDefaultInitMessageTextRequest: {
    encode(message: SetDefaultInitMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultInitMessageTextRequest;
    fromJSON(object: any): SetDefaultInitMessageTextRequest;
    toJSON(message: SetDefaultInitMessageTextRequest): unknown;
    create(base?: DeepPartial<SetDefaultInitMessageTextRequest>): SetDefaultInitMessageTextRequest;
    fromPartial(object: DeepPartial<SetDefaultInitMessageTextRequest>): SetDefaultInitMessageTextRequest;
};
export declare const SetDefaultInitMessageTextResponse: {
    encode(message: SetDefaultInitMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultInitMessageTextResponse;
    fromJSON(object: any): SetDefaultInitMessageTextResponse;
    toJSON(message: SetDefaultInitMessageTextResponse): unknown;
    create(base?: DeepPartial<SetDefaultInitMessageTextResponse>): SetDefaultInitMessageTextResponse;
    fromPartial(object: DeepPartial<SetDefaultInitMessageTextResponse>): SetDefaultInitMessageTextResponse;
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
export declare const SetDefaultPasswordResetMessageTextRequest: {
    encode(message: SetDefaultPasswordResetMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordResetMessageTextRequest;
    fromJSON(object: any): SetDefaultPasswordResetMessageTextRequest;
    toJSON(message: SetDefaultPasswordResetMessageTextRequest): unknown;
    create(base?: DeepPartial<SetDefaultPasswordResetMessageTextRequest>): SetDefaultPasswordResetMessageTextRequest;
    fromPartial(object: DeepPartial<SetDefaultPasswordResetMessageTextRequest>): SetDefaultPasswordResetMessageTextRequest;
};
export declare const SetDefaultPasswordResetMessageTextResponse: {
    encode(message: SetDefaultPasswordResetMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordResetMessageTextResponse;
    fromJSON(object: any): SetDefaultPasswordResetMessageTextResponse;
    toJSON(message: SetDefaultPasswordResetMessageTextResponse): unknown;
    create(base?: DeepPartial<SetDefaultPasswordResetMessageTextResponse>): SetDefaultPasswordResetMessageTextResponse;
    fromPartial(object: DeepPartial<SetDefaultPasswordResetMessageTextResponse>): SetDefaultPasswordResetMessageTextResponse;
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
export declare const SetDefaultVerifyEmailMessageTextRequest: {
    encode(message: SetDefaultVerifyEmailMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyEmailMessageTextRequest;
    fromJSON(object: any): SetDefaultVerifyEmailMessageTextRequest;
    toJSON(message: SetDefaultVerifyEmailMessageTextRequest): unknown;
    create(base?: DeepPartial<SetDefaultVerifyEmailMessageTextRequest>): SetDefaultVerifyEmailMessageTextRequest;
    fromPartial(object: DeepPartial<SetDefaultVerifyEmailMessageTextRequest>): SetDefaultVerifyEmailMessageTextRequest;
};
export declare const SetDefaultVerifyEmailMessageTextResponse: {
    encode(message: SetDefaultVerifyEmailMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyEmailMessageTextResponse;
    fromJSON(object: any): SetDefaultVerifyEmailMessageTextResponse;
    toJSON(message: SetDefaultVerifyEmailMessageTextResponse): unknown;
    create(base?: DeepPartial<SetDefaultVerifyEmailMessageTextResponse>): SetDefaultVerifyEmailMessageTextResponse;
    fromPartial(object: DeepPartial<SetDefaultVerifyEmailMessageTextResponse>): SetDefaultVerifyEmailMessageTextResponse;
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
export declare const SetDefaultVerifyPhoneMessageTextRequest: {
    encode(message: SetDefaultVerifyPhoneMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyPhoneMessageTextRequest;
    fromJSON(object: any): SetDefaultVerifyPhoneMessageTextRequest;
    toJSON(message: SetDefaultVerifyPhoneMessageTextRequest): unknown;
    create(base?: DeepPartial<SetDefaultVerifyPhoneMessageTextRequest>): SetDefaultVerifyPhoneMessageTextRequest;
    fromPartial(object: DeepPartial<SetDefaultVerifyPhoneMessageTextRequest>): SetDefaultVerifyPhoneMessageTextRequest;
};
export declare const SetDefaultVerifyPhoneMessageTextResponse: {
    encode(message: SetDefaultVerifyPhoneMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyPhoneMessageTextResponse;
    fromJSON(object: any): SetDefaultVerifyPhoneMessageTextResponse;
    toJSON(message: SetDefaultVerifyPhoneMessageTextResponse): unknown;
    create(base?: DeepPartial<SetDefaultVerifyPhoneMessageTextResponse>): SetDefaultVerifyPhoneMessageTextResponse;
    fromPartial(object: DeepPartial<SetDefaultVerifyPhoneMessageTextResponse>): SetDefaultVerifyPhoneMessageTextResponse;
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
export declare const SetDefaultVerifySMSOTPMessageTextRequest: {
    encode(message: SetDefaultVerifySMSOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifySMSOTPMessageTextRequest;
    fromJSON(object: any): SetDefaultVerifySMSOTPMessageTextRequest;
    toJSON(message: SetDefaultVerifySMSOTPMessageTextRequest): unknown;
    create(base?: DeepPartial<SetDefaultVerifySMSOTPMessageTextRequest>): SetDefaultVerifySMSOTPMessageTextRequest;
    fromPartial(object: DeepPartial<SetDefaultVerifySMSOTPMessageTextRequest>): SetDefaultVerifySMSOTPMessageTextRequest;
};
export declare const SetDefaultVerifySMSOTPMessageTextResponse: {
    encode(message: SetDefaultVerifySMSOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifySMSOTPMessageTextResponse;
    fromJSON(object: any): SetDefaultVerifySMSOTPMessageTextResponse;
    toJSON(message: SetDefaultVerifySMSOTPMessageTextResponse): unknown;
    create(base?: DeepPartial<SetDefaultVerifySMSOTPMessageTextResponse>): SetDefaultVerifySMSOTPMessageTextResponse;
    fromPartial(object: DeepPartial<SetDefaultVerifySMSOTPMessageTextResponse>): SetDefaultVerifySMSOTPMessageTextResponse;
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
export declare const SetDefaultVerifyEmailOTPMessageTextRequest: {
    encode(message: SetDefaultVerifyEmailOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyEmailOTPMessageTextRequest;
    fromJSON(object: any): SetDefaultVerifyEmailOTPMessageTextRequest;
    toJSON(message: SetDefaultVerifyEmailOTPMessageTextRequest): unknown;
    create(base?: DeepPartial<SetDefaultVerifyEmailOTPMessageTextRequest>): SetDefaultVerifyEmailOTPMessageTextRequest;
    fromPartial(object: DeepPartial<SetDefaultVerifyEmailOTPMessageTextRequest>): SetDefaultVerifyEmailOTPMessageTextRequest;
};
export declare const SetDefaultVerifyEmailOTPMessageTextResponse: {
    encode(message: SetDefaultVerifyEmailOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyEmailOTPMessageTextResponse;
    fromJSON(object: any): SetDefaultVerifyEmailOTPMessageTextResponse;
    toJSON(message: SetDefaultVerifyEmailOTPMessageTextResponse): unknown;
    create(base?: DeepPartial<SetDefaultVerifyEmailOTPMessageTextResponse>): SetDefaultVerifyEmailOTPMessageTextResponse;
    fromPartial(object: DeepPartial<SetDefaultVerifyEmailOTPMessageTextResponse>): SetDefaultVerifyEmailOTPMessageTextResponse;
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
export declare const SetDefaultDomainClaimedMessageTextRequest: {
    encode(message: SetDefaultDomainClaimedMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultDomainClaimedMessageTextRequest;
    fromJSON(object: any): SetDefaultDomainClaimedMessageTextRequest;
    toJSON(message: SetDefaultDomainClaimedMessageTextRequest): unknown;
    create(base?: DeepPartial<SetDefaultDomainClaimedMessageTextRequest>): SetDefaultDomainClaimedMessageTextRequest;
    fromPartial(object: DeepPartial<SetDefaultDomainClaimedMessageTextRequest>): SetDefaultDomainClaimedMessageTextRequest;
};
export declare const SetDefaultDomainClaimedMessageTextResponse: {
    encode(message: SetDefaultDomainClaimedMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultDomainClaimedMessageTextResponse;
    fromJSON(object: any): SetDefaultDomainClaimedMessageTextResponse;
    toJSON(message: SetDefaultDomainClaimedMessageTextResponse): unknown;
    create(base?: DeepPartial<SetDefaultDomainClaimedMessageTextResponse>): SetDefaultDomainClaimedMessageTextResponse;
    fromPartial(object: DeepPartial<SetDefaultDomainClaimedMessageTextResponse>): SetDefaultDomainClaimedMessageTextResponse;
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
export declare const SetDefaultPasswordChangeMessageTextRequest: {
    encode(message: SetDefaultPasswordChangeMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordChangeMessageTextRequest;
    fromJSON(object: any): SetDefaultPasswordChangeMessageTextRequest;
    toJSON(message: SetDefaultPasswordChangeMessageTextRequest): unknown;
    create(base?: DeepPartial<SetDefaultPasswordChangeMessageTextRequest>): SetDefaultPasswordChangeMessageTextRequest;
    fromPartial(object: DeepPartial<SetDefaultPasswordChangeMessageTextRequest>): SetDefaultPasswordChangeMessageTextRequest;
};
export declare const SetDefaultPasswordChangeMessageTextResponse: {
    encode(message: SetDefaultPasswordChangeMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordChangeMessageTextResponse;
    fromJSON(object: any): SetDefaultPasswordChangeMessageTextResponse;
    toJSON(message: SetDefaultPasswordChangeMessageTextResponse): unknown;
    create(base?: DeepPartial<SetDefaultPasswordChangeMessageTextResponse>): SetDefaultPasswordChangeMessageTextResponse;
    fromPartial(object: DeepPartial<SetDefaultPasswordChangeMessageTextResponse>): SetDefaultPasswordChangeMessageTextResponse;
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
export declare const SetDefaultPasswordlessRegistrationMessageTextRequest: {
    encode(message: SetDefaultPasswordlessRegistrationMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordlessRegistrationMessageTextRequest;
    fromJSON(object: any): SetDefaultPasswordlessRegistrationMessageTextRequest;
    toJSON(message: SetDefaultPasswordlessRegistrationMessageTextRequest): unknown;
    create(base?: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextRequest>): SetDefaultPasswordlessRegistrationMessageTextRequest;
    fromPartial(object: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextRequest>): SetDefaultPasswordlessRegistrationMessageTextRequest;
};
export declare const SetDefaultPasswordlessRegistrationMessageTextResponse: {
    encode(message: SetDefaultPasswordlessRegistrationMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordlessRegistrationMessageTextResponse;
    fromJSON(object: any): SetDefaultPasswordlessRegistrationMessageTextResponse;
    toJSON(message: SetDefaultPasswordlessRegistrationMessageTextResponse): unknown;
    create(base?: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextResponse>): SetDefaultPasswordlessRegistrationMessageTextResponse;
    fromPartial(object: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextResponse>): SetDefaultPasswordlessRegistrationMessageTextResponse;
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
export declare const AddIAMMemberRequest: {
    encode(message: AddIAMMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddIAMMemberRequest;
    fromJSON(object: any): AddIAMMemberRequest;
    toJSON(message: AddIAMMemberRequest): unknown;
    create(base?: DeepPartial<AddIAMMemberRequest>): AddIAMMemberRequest;
    fromPartial(object: DeepPartial<AddIAMMemberRequest>): AddIAMMemberRequest;
};
export declare const AddIAMMemberResponse: {
    encode(message: AddIAMMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddIAMMemberResponse;
    fromJSON(object: any): AddIAMMemberResponse;
    toJSON(message: AddIAMMemberResponse): unknown;
    create(base?: DeepPartial<AddIAMMemberResponse>): AddIAMMemberResponse;
    fromPartial(object: DeepPartial<AddIAMMemberResponse>): AddIAMMemberResponse;
};
export declare const UpdateIAMMemberRequest: {
    encode(message: UpdateIAMMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIAMMemberRequest;
    fromJSON(object: any): UpdateIAMMemberRequest;
    toJSON(message: UpdateIAMMemberRequest): unknown;
    create(base?: DeepPartial<UpdateIAMMemberRequest>): UpdateIAMMemberRequest;
    fromPartial(object: DeepPartial<UpdateIAMMemberRequest>): UpdateIAMMemberRequest;
};
export declare const UpdateIAMMemberResponse: {
    encode(message: UpdateIAMMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIAMMemberResponse;
    fromJSON(object: any): UpdateIAMMemberResponse;
    toJSON(message: UpdateIAMMemberResponse): unknown;
    create(base?: DeepPartial<UpdateIAMMemberResponse>): UpdateIAMMemberResponse;
    fromPartial(object: DeepPartial<UpdateIAMMemberResponse>): UpdateIAMMemberResponse;
};
export declare const RemoveIAMMemberRequest: {
    encode(message: RemoveIAMMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIAMMemberRequest;
    fromJSON(object: any): RemoveIAMMemberRequest;
    toJSON(message: RemoveIAMMemberRequest): unknown;
    create(base?: DeepPartial<RemoveIAMMemberRequest>): RemoveIAMMemberRequest;
    fromPartial(object: DeepPartial<RemoveIAMMemberRequest>): RemoveIAMMemberRequest;
};
export declare const RemoveIAMMemberResponse: {
    encode(message: RemoveIAMMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIAMMemberResponse;
    fromJSON(object: any): RemoveIAMMemberResponse;
    toJSON(message: RemoveIAMMemberResponse): unknown;
    create(base?: DeepPartial<RemoveIAMMemberResponse>): RemoveIAMMemberResponse;
    fromPartial(object: DeepPartial<RemoveIAMMemberResponse>): RemoveIAMMemberResponse;
};
export declare const ListIAMMemberRolesRequest: {
    encode(_: ListIAMMemberRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMemberRolesRequest;
    fromJSON(_: any): ListIAMMemberRolesRequest;
    toJSON(_: ListIAMMemberRolesRequest): unknown;
    create(base?: DeepPartial<ListIAMMemberRolesRequest>): ListIAMMemberRolesRequest;
    fromPartial(_: DeepPartial<ListIAMMemberRolesRequest>): ListIAMMemberRolesRequest;
};
export declare const ListIAMMemberRolesResponse: {
    encode(message: ListIAMMemberRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMemberRolesResponse;
    fromJSON(object: any): ListIAMMemberRolesResponse;
    toJSON(message: ListIAMMemberRolesResponse): unknown;
    create(base?: DeepPartial<ListIAMMemberRolesResponse>): ListIAMMemberRolesResponse;
    fromPartial(object: DeepPartial<ListIAMMemberRolesResponse>): ListIAMMemberRolesResponse;
};
export declare const ListIAMMembersRequest: {
    encode(message: ListIAMMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersRequest;
    fromJSON(object: any): ListIAMMembersRequest;
    toJSON(message: ListIAMMembersRequest): unknown;
    create(base?: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest;
    fromPartial(object: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest;
};
export declare const ListIAMMembersResponse: {
    encode(message: ListIAMMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersResponse;
    fromJSON(object: any): ListIAMMembersResponse;
    toJSON(message: ListIAMMembersResponse): unknown;
    create(base?: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse;
    fromPartial(object: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse;
};
export declare const ListViewsRequest: {
    encode(_: ListViewsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsRequest;
    fromJSON(_: any): ListViewsRequest;
    toJSON(_: ListViewsRequest): unknown;
    create(base?: DeepPartial<ListViewsRequest>): ListViewsRequest;
    fromPartial(_: DeepPartial<ListViewsRequest>): ListViewsRequest;
};
export declare const ListViewsResponse: {
    encode(message: ListViewsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsResponse;
    fromJSON(object: any): ListViewsResponse;
    toJSON(message: ListViewsResponse): unknown;
    create(base?: DeepPartial<ListViewsResponse>): ListViewsResponse;
    fromPartial(object: DeepPartial<ListViewsResponse>): ListViewsResponse;
};
export declare const ListFailedEventsRequest: {
    encode(_: ListFailedEventsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsRequest;
    fromJSON(_: any): ListFailedEventsRequest;
    toJSON(_: ListFailedEventsRequest): unknown;
    create(base?: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest;
    fromPartial(_: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest;
};
export declare const ListFailedEventsResponse: {
    encode(message: ListFailedEventsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsResponse;
    fromJSON(object: any): ListFailedEventsResponse;
    toJSON(message: ListFailedEventsResponse): unknown;
    create(base?: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse;
    fromPartial(object: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse;
};
export declare const RemoveFailedEventRequest: {
    encode(message: RemoveFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventRequest;
    fromJSON(object: any): RemoveFailedEventRequest;
    toJSON(message: RemoveFailedEventRequest): unknown;
    create(base?: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest;
    fromPartial(object: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest;
};
export declare const RemoveFailedEventResponse: {
    encode(_: RemoveFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventResponse;
    fromJSON(_: any): RemoveFailedEventResponse;
    toJSON(_: RemoveFailedEventResponse): unknown;
    create(base?: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse;
    fromPartial(_: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse;
};
export declare const View: {
    encode(message: View, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): View;
    fromJSON(object: any): View;
    toJSON(message: View): unknown;
    create(base?: DeepPartial<View>): View;
    fromPartial(object: DeepPartial<View>): View;
};
export declare const FailedEvent: {
    encode(message: FailedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FailedEvent;
    fromJSON(object: any): FailedEvent;
    toJSON(message: FailedEvent): unknown;
    create(base?: DeepPartial<FailedEvent>): FailedEvent;
    fromPartial(object: DeepPartial<FailedEvent>): FailedEvent;
};
export declare const ImportDataRequest: {
    encode(message: ImportDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataRequest;
    fromJSON(object: any): ImportDataRequest;
    toJSON(message: ImportDataRequest): unknown;
    create(base?: DeepPartial<ImportDataRequest>): ImportDataRequest;
    fromPartial(object: DeepPartial<ImportDataRequest>): ImportDataRequest;
};
export declare const ImportDataRequest_LocalInput: {
    encode(message: ImportDataRequest_LocalInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataRequest_LocalInput;
    fromJSON(object: any): ImportDataRequest_LocalInput;
    toJSON(message: ImportDataRequest_LocalInput): unknown;
    create(base?: DeepPartial<ImportDataRequest_LocalInput>): ImportDataRequest_LocalInput;
    fromPartial(object: DeepPartial<ImportDataRequest_LocalInput>): ImportDataRequest_LocalInput;
};
export declare const ImportDataRequest_S3Input: {
    encode(message: ImportDataRequest_S3Input, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataRequest_S3Input;
    fromJSON(object: any): ImportDataRequest_S3Input;
    toJSON(message: ImportDataRequest_S3Input): unknown;
    create(base?: DeepPartial<ImportDataRequest_S3Input>): ImportDataRequest_S3Input;
    fromPartial(object: DeepPartial<ImportDataRequest_S3Input>): ImportDataRequest_S3Input;
};
export declare const ImportDataRequest_GCSInput: {
    encode(message: ImportDataRequest_GCSInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataRequest_GCSInput;
    fromJSON(object: any): ImportDataRequest_GCSInput;
    toJSON(message: ImportDataRequest_GCSInput): unknown;
    create(base?: DeepPartial<ImportDataRequest_GCSInput>): ImportDataRequest_GCSInput;
    fromPartial(object: DeepPartial<ImportDataRequest_GCSInput>): ImportDataRequest_GCSInput;
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
export declare const ImportDataResponse: {
    encode(message: ImportDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataResponse;
    fromJSON(object: any): ImportDataResponse;
    toJSON(message: ImportDataResponse): unknown;
    create(base?: DeepPartial<ImportDataResponse>): ImportDataResponse;
    fromPartial(object: DeepPartial<ImportDataResponse>): ImportDataResponse;
};
export declare const ImportDataError: {
    encode(message: ImportDataError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataError;
    fromJSON(object: any): ImportDataError;
    toJSON(message: ImportDataError): unknown;
    create(base?: DeepPartial<ImportDataError>): ImportDataError;
    fromPartial(object: DeepPartial<ImportDataError>): ImportDataError;
};
export declare const ImportDataSuccess: {
    encode(message: ImportDataSuccess, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataSuccess;
    fromJSON(object: any): ImportDataSuccess;
    toJSON(message: ImportDataSuccess): unknown;
    create(base?: DeepPartial<ImportDataSuccess>): ImportDataSuccess;
    fromPartial(object: DeepPartial<ImportDataSuccess>): ImportDataSuccess;
};
export declare const ImportDataSuccessOrg: {
    encode(message: ImportDataSuccessOrg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataSuccessOrg;
    fromJSON(object: any): ImportDataSuccessOrg;
    toJSON(message: ImportDataSuccessOrg): unknown;
    create(base?: DeepPartial<ImportDataSuccessOrg>): ImportDataSuccessOrg;
    fromPartial(object: DeepPartial<ImportDataSuccessOrg>): ImportDataSuccessOrg;
};
export declare const ImportDataSuccessProjectGrant: {
    encode(message: ImportDataSuccessProjectGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataSuccessProjectGrant;
    fromJSON(object: any): ImportDataSuccessProjectGrant;
    toJSON(message: ImportDataSuccessProjectGrant): unknown;
    create(base?: DeepPartial<ImportDataSuccessProjectGrant>): ImportDataSuccessProjectGrant;
    fromPartial(object: DeepPartial<ImportDataSuccessProjectGrant>): ImportDataSuccessProjectGrant;
};
export declare const ImportDataSuccessUserGrant: {
    encode(message: ImportDataSuccessUserGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataSuccessUserGrant;
    fromJSON(object: any): ImportDataSuccessUserGrant;
    toJSON(message: ImportDataSuccessUserGrant): unknown;
    create(base?: DeepPartial<ImportDataSuccessUserGrant>): ImportDataSuccessUserGrant;
    fromPartial(object: DeepPartial<ImportDataSuccessUserGrant>): ImportDataSuccessUserGrant;
};
export declare const ImportDataSuccessProjectMember: {
    encode(message: ImportDataSuccessProjectMember, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataSuccessProjectMember;
    fromJSON(object: any): ImportDataSuccessProjectMember;
    toJSON(message: ImportDataSuccessProjectMember): unknown;
    create(base?: DeepPartial<ImportDataSuccessProjectMember>): ImportDataSuccessProjectMember;
    fromPartial(object: DeepPartial<ImportDataSuccessProjectMember>): ImportDataSuccessProjectMember;
};
export declare const ImportDataSuccessProjectGrantMember: {
    encode(message: ImportDataSuccessProjectGrantMember, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataSuccessProjectGrantMember;
    fromJSON(object: any): ImportDataSuccessProjectGrantMember;
    toJSON(message: ImportDataSuccessProjectGrantMember): unknown;
    create(base?: DeepPartial<ImportDataSuccessProjectGrantMember>): ImportDataSuccessProjectGrantMember;
    fromPartial(object: DeepPartial<ImportDataSuccessProjectGrantMember>): ImportDataSuccessProjectGrantMember;
};
export declare const ImportDataSuccessUserLinks: {
    encode(message: ImportDataSuccessUserLinks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataSuccessUserLinks;
    fromJSON(object: any): ImportDataSuccessUserLinks;
    toJSON(message: ImportDataSuccessUserLinks): unknown;
    create(base?: DeepPartial<ImportDataSuccessUserLinks>): ImportDataSuccessUserLinks;
    fromPartial(object: DeepPartial<ImportDataSuccessUserLinks>): ImportDataSuccessUserLinks;
};
export declare const ImportDataSuccessUserMetadata: {
    encode(message: ImportDataSuccessUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataSuccessUserMetadata;
    fromJSON(object: any): ImportDataSuccessUserMetadata;
    toJSON(message: ImportDataSuccessUserMetadata): unknown;
    create(base?: DeepPartial<ImportDataSuccessUserMetadata>): ImportDataSuccessUserMetadata;
    fromPartial(object: DeepPartial<ImportDataSuccessUserMetadata>): ImportDataSuccessUserMetadata;
};
export declare const ExportDataRequest: {
    encode(message: ExportDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataRequest;
    fromJSON(object: any): ExportDataRequest;
    toJSON(message: ExportDataRequest): unknown;
    create(base?: DeepPartial<ExportDataRequest>): ExportDataRequest;
    fromPartial(object: DeepPartial<ExportDataRequest>): ExportDataRequest;
};
export declare const ExportDataRequest_LocalOutput: {
    encode(message: ExportDataRequest_LocalOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataRequest_LocalOutput;
    fromJSON(object: any): ExportDataRequest_LocalOutput;
    toJSON(message: ExportDataRequest_LocalOutput): unknown;
    create(base?: DeepPartial<ExportDataRequest_LocalOutput>): ExportDataRequest_LocalOutput;
    fromPartial(object: DeepPartial<ExportDataRequest_LocalOutput>): ExportDataRequest_LocalOutput;
};
export declare const ExportDataRequest_S3Output: {
    encode(message: ExportDataRequest_S3Output, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataRequest_S3Output;
    fromJSON(object: any): ExportDataRequest_S3Output;
    toJSON(message: ExportDataRequest_S3Output): unknown;
    create(base?: DeepPartial<ExportDataRequest_S3Output>): ExportDataRequest_S3Output;
    fromPartial(object: DeepPartial<ExportDataRequest_S3Output>): ExportDataRequest_S3Output;
};
export declare const ExportDataRequest_GCSOutput: {
    encode(message: ExportDataRequest_GCSOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataRequest_GCSOutput;
    fromJSON(object: any): ExportDataRequest_GCSOutput;
    toJSON(message: ExportDataRequest_GCSOutput): unknown;
    create(base?: DeepPartial<ExportDataRequest_GCSOutput>): ExportDataRequest_GCSOutput;
    fromPartial(object: DeepPartial<ExportDataRequest_GCSOutput>): ExportDataRequest_GCSOutput;
};
export declare const ExportDataResponse: {
    encode(message: ExportDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataResponse;
    fromJSON(object: any): ExportDataResponse;
    toJSON(message: ExportDataResponse): unknown;
    create(base?: DeepPartial<ExportDataResponse>): ExportDataResponse;
    fromPartial(object: DeepPartial<ExportDataResponse>): ExportDataResponse;
};
export declare const ListEventsRequest: {
    encode(message: ListEventsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListEventsRequest;
    fromJSON(object: any): ListEventsRequest;
    toJSON(message: ListEventsRequest): unknown;
    create(base?: DeepPartial<ListEventsRequest>): ListEventsRequest;
    fromPartial(object: DeepPartial<ListEventsRequest>): ListEventsRequest;
};
export declare const ListEventsResponse: {
    encode(message: ListEventsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListEventsResponse;
    fromJSON(object: any): ListEventsResponse;
    toJSON(message: ListEventsResponse): unknown;
    create(base?: DeepPartial<ListEventsResponse>): ListEventsResponse;
    fromPartial(object: DeepPartial<ListEventsResponse>): ListEventsResponse;
};
export declare const ListEventTypesRequest: {
    encode(_: ListEventTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListEventTypesRequest;
    fromJSON(_: any): ListEventTypesRequest;
    toJSON(_: ListEventTypesRequest): unknown;
    create(base?: DeepPartial<ListEventTypesRequest>): ListEventTypesRequest;
    fromPartial(_: DeepPartial<ListEventTypesRequest>): ListEventTypesRequest;
};
export declare const ListEventTypesResponse: {
    encode(message: ListEventTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListEventTypesResponse;
    fromJSON(object: any): ListEventTypesResponse;
    toJSON(message: ListEventTypesResponse): unknown;
    create(base?: DeepPartial<ListEventTypesResponse>): ListEventTypesResponse;
    fromPartial(object: DeepPartial<ListEventTypesResponse>): ListEventTypesResponse;
};
export declare const ListAggregateTypesRequest: {
    encode(_: ListAggregateTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAggregateTypesRequest;
    fromJSON(_: any): ListAggregateTypesRequest;
    toJSON(_: ListAggregateTypesRequest): unknown;
    create(base?: DeepPartial<ListAggregateTypesRequest>): ListAggregateTypesRequest;
    fromPartial(_: DeepPartial<ListAggregateTypesRequest>): ListAggregateTypesRequest;
};
export declare const ListAggregateTypesResponse: {
    encode(message: ListAggregateTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAggregateTypesResponse;
    fromJSON(object: any): ListAggregateTypesResponse;
    toJSON(message: ListAggregateTypesResponse): unknown;
    create(base?: DeepPartial<ListAggregateTypesResponse>): ListAggregateTypesResponse;
    fromPartial(object: DeepPartial<ListAggregateTypesResponse>): ListAggregateTypesResponse;
};
export declare const ActivateFeatureLoginDefaultOrgRequest: {
    encode(_: ActivateFeatureLoginDefaultOrgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateFeatureLoginDefaultOrgRequest;
    fromJSON(_: any): ActivateFeatureLoginDefaultOrgRequest;
    toJSON(_: ActivateFeatureLoginDefaultOrgRequest): unknown;
    create(base?: DeepPartial<ActivateFeatureLoginDefaultOrgRequest>): ActivateFeatureLoginDefaultOrgRequest;
    fromPartial(_: DeepPartial<ActivateFeatureLoginDefaultOrgRequest>): ActivateFeatureLoginDefaultOrgRequest;
};
export declare const ActivateFeatureLoginDefaultOrgResponse: {
    encode(message: ActivateFeatureLoginDefaultOrgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateFeatureLoginDefaultOrgResponse;
    fromJSON(object: any): ActivateFeatureLoginDefaultOrgResponse;
    toJSON(message: ActivateFeatureLoginDefaultOrgResponse): unknown;
    create(base?: DeepPartial<ActivateFeatureLoginDefaultOrgResponse>): ActivateFeatureLoginDefaultOrgResponse;
    fromPartial(object: DeepPartial<ActivateFeatureLoginDefaultOrgResponse>): ActivateFeatureLoginDefaultOrgResponse;
};
export declare const ListMilestonesRequest: {
    encode(message: ListMilestonesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMilestonesRequest;
    fromJSON(object: any): ListMilestonesRequest;
    toJSON(message: ListMilestonesRequest): unknown;
    create(base?: DeepPartial<ListMilestonesRequest>): ListMilestonesRequest;
    fromPartial(object: DeepPartial<ListMilestonesRequest>): ListMilestonesRequest;
};
export declare const ListMilestonesResponse: {
    encode(message: ListMilestonesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMilestonesResponse;
    fromJSON(object: any): ListMilestonesResponse;
    toJSON(message: ListMilestonesResponse): unknown;
    create(base?: DeepPartial<ListMilestonesResponse>): ListMilestonesResponse;
    fromPartial(object: DeepPartial<ListMilestonesResponse>): ListMilestonesResponse;
};
export type AdminServiceDefinition = typeof AdminServiceDefinition;
export declare const AdminServiceDefinition: {
    readonly name: "AdminService";
    readonly fullName: "zitadel.admin.v1.AdminService";
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
        readonly setDefaultLanguage: {
            readonly name: "SetDefaultLanguage";
            readonly requestType: {
                encode(message: SetDefaultLanguageRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultLanguageRequest;
                fromJSON(object: any): SetDefaultLanguageRequest;
                toJSON(message: SetDefaultLanguageRequest): unknown;
                create(base?: DeepPartial<SetDefaultLanguageRequest>): SetDefaultLanguageRequest;
                fromPartial(object: DeepPartial<SetDefaultLanguageRequest>): SetDefaultLanguageRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultLanguageResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultLanguageResponse;
                fromJSON(object: any): SetDefaultLanguageResponse;
                toJSON(message: SetDefaultLanguageResponse): unknown;
                create(base?: DeepPartial<SetDefaultLanguageResponse>): SetDefaultLanguageResponse;
                fromPartial(object: DeepPartial<SetDefaultLanguageResponse>): SetDefaultLanguageResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLanguage: {
            readonly name: "GetDefaultLanguage";
            readonly requestType: {
                encode(_: GetDefaultLanguageRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLanguageRequest;
                fromJSON(_: any): GetDefaultLanguageRequest;
                toJSON(_: GetDefaultLanguageRequest): unknown;
                create(base?: DeepPartial<GetDefaultLanguageRequest>): GetDefaultLanguageRequest;
                fromPartial(_: DeepPartial<GetDefaultLanguageRequest>): GetDefaultLanguageRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultLanguageResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultLanguageResponse;
                fromJSON(object: any): GetDefaultLanguageResponse;
                toJSON(message: GetDefaultLanguageResponse): unknown;
                create(base?: DeepPartial<GetDefaultLanguageResponse>): GetDefaultLanguageResponse;
                fromPartial(object: DeepPartial<GetDefaultLanguageResponse>): GetDefaultLanguageResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyInstance: {
            readonly name: "GetMyInstance";
            readonly requestType: {
                encode(_: GetMyInstanceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyInstanceRequest;
                fromJSON(_: any): GetMyInstanceRequest;
                toJSON(_: GetMyInstanceRequest): unknown;
                create(base?: DeepPartial<GetMyInstanceRequest>): GetMyInstanceRequest;
                fromPartial(_: DeepPartial<GetMyInstanceRequest>): GetMyInstanceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyInstanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyInstanceResponse;
                fromJSON(object: any): GetMyInstanceResponse;
                toJSON(message: GetMyInstanceResponse): unknown;
                create(base?: DeepPartial<GetMyInstanceResponse>): GetMyInstanceResponse;
                fromPartial(object: DeepPartial<GetMyInstanceResponse>): GetMyInstanceResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listInstanceDomains: {
            readonly name: "ListInstanceDomains";
            readonly requestType: {
                encode(message: ListInstanceDomainsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceDomainsRequest;
                fromJSON(object: any): ListInstanceDomainsRequest;
                toJSON(message: ListInstanceDomainsRequest): unknown;
                create(base?: DeepPartial<ListInstanceDomainsRequest>): ListInstanceDomainsRequest;
                fromPartial(object: DeepPartial<ListInstanceDomainsRequest>): ListInstanceDomainsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListInstanceDomainsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListInstanceDomainsResponse;
                fromJSON(object: any): ListInstanceDomainsResponse;
                toJSON(message: ListInstanceDomainsResponse): unknown;
                create(base?: DeepPartial<ListInstanceDomainsResponse>): ListInstanceDomainsResponse;
                fromPartial(object: DeepPartial<ListInstanceDomainsResponse>): ListInstanceDomainsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listSecretGenerators: {
            readonly name: "ListSecretGenerators";
            readonly requestType: {
                encode(message: ListSecretGeneratorsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretGeneratorsRequest;
                fromJSON(object: any): ListSecretGeneratorsRequest;
                toJSON(message: ListSecretGeneratorsRequest): unknown;
                create(base?: DeepPartial<ListSecretGeneratorsRequest>): ListSecretGeneratorsRequest;
                fromPartial(object: DeepPartial<ListSecretGeneratorsRequest>): ListSecretGeneratorsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListSecretGeneratorsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretGeneratorsResponse;
                fromJSON(object: any): ListSecretGeneratorsResponse;
                toJSON(message: ListSecretGeneratorsResponse): unknown;
                create(base?: DeepPartial<ListSecretGeneratorsResponse>): ListSecretGeneratorsResponse;
                fromPartial(object: DeepPartial<ListSecretGeneratorsResponse>): ListSecretGeneratorsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSecretGenerator: {
            readonly name: "GetSecretGenerator";
            readonly requestType: {
                encode(message: GetSecretGeneratorRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretGeneratorRequest;
                fromJSON(object: any): GetSecretGeneratorRequest;
                toJSON(message: GetSecretGeneratorRequest): unknown;
                create(base?: DeepPartial<GetSecretGeneratorRequest>): GetSecretGeneratorRequest;
                fromPartial(object: DeepPartial<GetSecretGeneratorRequest>): GetSecretGeneratorRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetSecretGeneratorResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretGeneratorResponse;
                fromJSON(object: any): GetSecretGeneratorResponse;
                toJSON(message: GetSecretGeneratorResponse): unknown;
                create(base?: DeepPartial<GetSecretGeneratorResponse>): GetSecretGeneratorResponse;
                fromPartial(object: DeepPartial<GetSecretGeneratorResponse>): GetSecretGeneratorResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSecretGenerator: {
            readonly name: "UpdateSecretGenerator";
            readonly requestType: {
                encode(message: UpdateSecretGeneratorRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecretGeneratorRequest;
                fromJSON(object: any): UpdateSecretGeneratorRequest;
                toJSON(message: UpdateSecretGeneratorRequest): unknown;
                create(base?: DeepPartial<UpdateSecretGeneratorRequest>): UpdateSecretGeneratorRequest;
                fromPartial(object: DeepPartial<UpdateSecretGeneratorRequest>): UpdateSecretGeneratorRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateSecretGeneratorResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecretGeneratorResponse;
                fromJSON(object: any): UpdateSecretGeneratorResponse;
                toJSON(message: UpdateSecretGeneratorResponse): unknown;
                create(base?: DeepPartial<UpdateSecretGeneratorResponse>): UpdateSecretGeneratorResponse;
                fromPartial(object: DeepPartial<UpdateSecretGeneratorResponse>): UpdateSecretGeneratorResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSMTPConfig: {
            readonly name: "GetSMTPConfig";
            readonly requestType: {
                encode(_: GetSMTPConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSMTPConfigRequest;
                fromJSON(_: any): GetSMTPConfigRequest;
                toJSON(_: GetSMTPConfigRequest): unknown;
                create(base?: DeepPartial<GetSMTPConfigRequest>): GetSMTPConfigRequest;
                fromPartial(_: DeepPartial<GetSMTPConfigRequest>): GetSMTPConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetSMTPConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSMTPConfigResponse;
                fromJSON(object: any): GetSMTPConfigResponse;
                toJSON(message: GetSMTPConfigResponse): unknown;
                create(base?: DeepPartial<GetSMTPConfigResponse>): GetSMTPConfigResponse;
                fromPartial(object: DeepPartial<GetSMTPConfigResponse>): GetSMTPConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSMTPConfig: {
            readonly name: "AddSMTPConfig";
            readonly requestType: {
                encode(message: AddSMTPConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSMTPConfigRequest;
                fromJSON(object: any): AddSMTPConfigRequest;
                toJSON(message: AddSMTPConfigRequest): unknown;
                create(base?: DeepPartial<AddSMTPConfigRequest>): AddSMTPConfigRequest;
                fromPartial(object: DeepPartial<AddSMTPConfigRequest>): AddSMTPConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddSMTPConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSMTPConfigResponse;
                fromJSON(object: any): AddSMTPConfigResponse;
                toJSON(message: AddSMTPConfigResponse): unknown;
                create(base?: DeepPartial<AddSMTPConfigResponse>): AddSMTPConfigResponse;
                fromPartial(object: DeepPartial<AddSMTPConfigResponse>): AddSMTPConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSMTPConfig: {
            readonly name: "UpdateSMTPConfig";
            readonly requestType: {
                encode(message: UpdateSMTPConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMTPConfigRequest;
                fromJSON(object: any): UpdateSMTPConfigRequest;
                toJSON(message: UpdateSMTPConfigRequest): unknown;
                create(base?: DeepPartial<UpdateSMTPConfigRequest>): UpdateSMTPConfigRequest;
                fromPartial(object: DeepPartial<UpdateSMTPConfigRequest>): UpdateSMTPConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateSMTPConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMTPConfigResponse;
                fromJSON(object: any): UpdateSMTPConfigResponse;
                toJSON(message: UpdateSMTPConfigResponse): unknown;
                create(base?: DeepPartial<UpdateSMTPConfigResponse>): UpdateSMTPConfigResponse;
                fromPartial(object: DeepPartial<UpdateSMTPConfigResponse>): UpdateSMTPConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSMTPConfigPassword: {
            readonly name: "UpdateSMTPConfigPassword";
            readonly requestType: {
                encode(message: UpdateSMTPConfigPasswordRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMTPConfigPasswordRequest;
                fromJSON(object: any): UpdateSMTPConfigPasswordRequest;
                toJSON(message: UpdateSMTPConfigPasswordRequest): unknown;
                create(base?: DeepPartial<UpdateSMTPConfigPasswordRequest>): UpdateSMTPConfigPasswordRequest;
                fromPartial(object: DeepPartial<UpdateSMTPConfigPasswordRequest>): UpdateSMTPConfigPasswordRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateSMTPConfigPasswordResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMTPConfigPasswordResponse;
                fromJSON(object: any): UpdateSMTPConfigPasswordResponse;
                toJSON(message: UpdateSMTPConfigPasswordResponse): unknown;
                create(base?: DeepPartial<UpdateSMTPConfigPasswordResponse>): UpdateSMTPConfigPasswordResponse;
                fromPartial(object: DeepPartial<UpdateSMTPConfigPasswordResponse>): UpdateSMTPConfigPasswordResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeSMTPConfig: {
            readonly name: "RemoveSMTPConfig";
            readonly requestType: {
                encode(_: RemoveSMTPConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSMTPConfigRequest;
                fromJSON(_: any): RemoveSMTPConfigRequest;
                toJSON(_: RemoveSMTPConfigRequest): unknown;
                create(base?: DeepPartial<RemoveSMTPConfigRequest>): RemoveSMTPConfigRequest;
                fromPartial(_: DeepPartial<RemoveSMTPConfigRequest>): RemoveSMTPConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveSMTPConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSMTPConfigResponse;
                fromJSON(object: any): RemoveSMTPConfigResponse;
                toJSON(message: RemoveSMTPConfigResponse): unknown;
                create(base?: DeepPartial<RemoveSMTPConfigResponse>): RemoveSMTPConfigResponse;
                fromPartial(object: DeepPartial<RemoveSMTPConfigResponse>): RemoveSMTPConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listSMSProviders: {
            readonly name: "ListSMSProviders";
            readonly requestType: {
                encode(message: ListSMSProvidersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListSMSProvidersRequest;
                fromJSON(object: any): ListSMSProvidersRequest;
                toJSON(message: ListSMSProvidersRequest): unknown;
                create(base?: DeepPartial<ListSMSProvidersRequest>): ListSMSProvidersRequest;
                fromPartial(object: DeepPartial<ListSMSProvidersRequest>): ListSMSProvidersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListSMSProvidersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListSMSProvidersResponse;
                fromJSON(object: any): ListSMSProvidersResponse;
                toJSON(message: ListSMSProvidersResponse): unknown;
                create(base?: DeepPartial<ListSMSProvidersResponse>): ListSMSProvidersResponse;
                fromPartial(object: DeepPartial<ListSMSProvidersResponse>): ListSMSProvidersResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSMSProvider: {
            readonly name: "GetSMSProvider";
            readonly requestType: {
                encode(message: GetSMSProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSMSProviderRequest;
                fromJSON(object: any): GetSMSProviderRequest;
                toJSON(message: GetSMSProviderRequest): unknown;
                create(base?: DeepPartial<GetSMSProviderRequest>): GetSMSProviderRequest;
                fromPartial(object: DeepPartial<GetSMSProviderRequest>): GetSMSProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetSMSProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSMSProviderResponse;
                fromJSON(object: any): GetSMSProviderResponse;
                toJSON(message: GetSMSProviderResponse): unknown;
                create(base?: DeepPartial<GetSMSProviderResponse>): GetSMSProviderResponse;
                fromPartial(object: DeepPartial<GetSMSProviderResponse>): GetSMSProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSMSProviderTwilio: {
            readonly name: "AddSMSProviderTwilio";
            readonly requestType: {
                encode(message: AddSMSProviderTwilioRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSMSProviderTwilioRequest;
                fromJSON(object: any): AddSMSProviderTwilioRequest;
                toJSON(message: AddSMSProviderTwilioRequest): unknown;
                create(base?: DeepPartial<AddSMSProviderTwilioRequest>): AddSMSProviderTwilioRequest;
                fromPartial(object: DeepPartial<AddSMSProviderTwilioRequest>): AddSMSProviderTwilioRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddSMSProviderTwilioResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddSMSProviderTwilioResponse;
                fromJSON(object: any): AddSMSProviderTwilioResponse;
                toJSON(message: AddSMSProviderTwilioResponse): unknown;
                create(base?: DeepPartial<AddSMSProviderTwilioResponse>): AddSMSProviderTwilioResponse;
                fromPartial(object: DeepPartial<AddSMSProviderTwilioResponse>): AddSMSProviderTwilioResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSMSProviderTwilio: {
            readonly name: "UpdateSMSProviderTwilio";
            readonly requestType: {
                encode(message: UpdateSMSProviderTwilioRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMSProviderTwilioRequest;
                fromJSON(object: any): UpdateSMSProviderTwilioRequest;
                toJSON(message: UpdateSMSProviderTwilioRequest): unknown;
                create(base?: DeepPartial<UpdateSMSProviderTwilioRequest>): UpdateSMSProviderTwilioRequest;
                fromPartial(object: DeepPartial<UpdateSMSProviderTwilioRequest>): UpdateSMSProviderTwilioRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateSMSProviderTwilioResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMSProviderTwilioResponse;
                fromJSON(object: any): UpdateSMSProviderTwilioResponse;
                toJSON(message: UpdateSMSProviderTwilioResponse): unknown;
                create(base?: DeepPartial<UpdateSMSProviderTwilioResponse>): UpdateSMSProviderTwilioResponse;
                fromPartial(object: DeepPartial<UpdateSMSProviderTwilioResponse>): UpdateSMSProviderTwilioResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSMSProviderTwilioToken: {
            readonly name: "UpdateSMSProviderTwilioToken";
            readonly requestType: {
                encode(message: UpdateSMSProviderTwilioTokenRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMSProviderTwilioTokenRequest;
                fromJSON(object: any): UpdateSMSProviderTwilioTokenRequest;
                toJSON(message: UpdateSMSProviderTwilioTokenRequest): unknown;
                create(base?: DeepPartial<UpdateSMSProviderTwilioTokenRequest>): UpdateSMSProviderTwilioTokenRequest;
                fromPartial(object: DeepPartial<UpdateSMSProviderTwilioTokenRequest>): UpdateSMSProviderTwilioTokenRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateSMSProviderTwilioTokenResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSMSProviderTwilioTokenResponse;
                fromJSON(object: any): UpdateSMSProviderTwilioTokenResponse;
                toJSON(message: UpdateSMSProviderTwilioTokenResponse): unknown;
                create(base?: DeepPartial<UpdateSMSProviderTwilioTokenResponse>): UpdateSMSProviderTwilioTokenResponse;
                fromPartial(object: DeepPartial<UpdateSMSProviderTwilioTokenResponse>): UpdateSMSProviderTwilioTokenResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateSMSProvider: {
            readonly name: "ActivateSMSProvider";
            readonly requestType: {
                encode(message: ActivateSMSProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ActivateSMSProviderRequest;
                fromJSON(object: any): ActivateSMSProviderRequest;
                toJSON(message: ActivateSMSProviderRequest): unknown;
                create(base?: DeepPartial<ActivateSMSProviderRequest>): ActivateSMSProviderRequest;
                fromPartial(object: DeepPartial<ActivateSMSProviderRequest>): ActivateSMSProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ActivateSMSProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ActivateSMSProviderResponse;
                fromJSON(object: any): ActivateSMSProviderResponse;
                toJSON(message: ActivateSMSProviderResponse): unknown;
                create(base?: DeepPartial<ActivateSMSProviderResponse>): ActivateSMSProviderResponse;
                fromPartial(object: DeepPartial<ActivateSMSProviderResponse>): ActivateSMSProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateSMSProvider: {
            readonly name: "DeactivateSMSProvider";
            readonly requestType: {
                encode(message: DeactivateSMSProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSMSProviderRequest;
                fromJSON(object: any): DeactivateSMSProviderRequest;
                toJSON(message: DeactivateSMSProviderRequest): unknown;
                create(base?: DeepPartial<DeactivateSMSProviderRequest>): DeactivateSMSProviderRequest;
                fromPartial(object: DeepPartial<DeactivateSMSProviderRequest>): DeactivateSMSProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateSMSProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSMSProviderResponse;
                fromJSON(object: any): DeactivateSMSProviderResponse;
                toJSON(message: DeactivateSMSProviderResponse): unknown;
                create(base?: DeepPartial<DeactivateSMSProviderResponse>): DeactivateSMSProviderResponse;
                fromPartial(object: DeepPartial<DeactivateSMSProviderResponse>): DeactivateSMSProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeSMSProvider: {
            readonly name: "RemoveSMSProvider";
            readonly requestType: {
                encode(message: RemoveSMSProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSMSProviderRequest;
                fromJSON(object: any): RemoveSMSProviderRequest;
                toJSON(message: RemoveSMSProviderRequest): unknown;
                create(base?: DeepPartial<RemoveSMSProviderRequest>): RemoveSMSProviderRequest;
                fromPartial(object: DeepPartial<RemoveSMSProviderRequest>): RemoveSMSProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveSMSProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSMSProviderResponse;
                fromJSON(object: any): RemoveSMSProviderResponse;
                toJSON(message: RemoveSMSProviderResponse): unknown;
                create(base?: DeepPartial<RemoveSMSProviderResponse>): RemoveSMSProviderResponse;
                fromPartial(object: DeepPartial<RemoveSMSProviderResponse>): RemoveSMSProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOIDCSettings: {
            readonly name: "GetOIDCSettings";
            readonly requestType: {
                encode(_: GetOIDCSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOIDCSettingsRequest;
                fromJSON(_: any): GetOIDCSettingsRequest;
                toJSON(_: GetOIDCSettingsRequest): unknown;
                create(base?: DeepPartial<GetOIDCSettingsRequest>): GetOIDCSettingsRequest;
                fromPartial(_: DeepPartial<GetOIDCSettingsRequest>): GetOIDCSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOIDCSettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOIDCSettingsResponse;
                fromJSON(object: any): GetOIDCSettingsResponse;
                toJSON(message: GetOIDCSettingsResponse): unknown;
                create(base?: DeepPartial<GetOIDCSettingsResponse>): GetOIDCSettingsResponse;
                fromPartial(object: DeepPartial<GetOIDCSettingsResponse>): GetOIDCSettingsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOIDCSettings: {
            readonly name: "AddOIDCSettings";
            readonly requestType: {
                encode(message: AddOIDCSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCSettingsRequest;
                fromJSON(object: any): AddOIDCSettingsRequest;
                toJSON(message: AddOIDCSettingsRequest): unknown;
                create(base?: DeepPartial<AddOIDCSettingsRequest>): AddOIDCSettingsRequest;
                fromPartial(object: DeepPartial<AddOIDCSettingsRequest>): AddOIDCSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOIDCSettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCSettingsResponse;
                fromJSON(object: any): AddOIDCSettingsResponse;
                toJSON(message: AddOIDCSettingsResponse): unknown;
                create(base?: DeepPartial<AddOIDCSettingsResponse>): AddOIDCSettingsResponse;
                fromPartial(object: DeepPartial<AddOIDCSettingsResponse>): AddOIDCSettingsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOIDCSettings: {
            readonly name: "UpdateOIDCSettings";
            readonly requestType: {
                encode(message: UpdateOIDCSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOIDCSettingsRequest;
                fromJSON(object: any): UpdateOIDCSettingsRequest;
                toJSON(message: UpdateOIDCSettingsRequest): unknown;
                create(base?: DeepPartial<UpdateOIDCSettingsRequest>): UpdateOIDCSettingsRequest;
                fromPartial(object: DeepPartial<UpdateOIDCSettingsRequest>): UpdateOIDCSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateOIDCSettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOIDCSettingsResponse;
                fromJSON(object: any): UpdateOIDCSettingsResponse;
                toJSON(message: UpdateOIDCSettingsResponse): unknown;
                create(base?: DeepPartial<UpdateOIDCSettingsResponse>): UpdateOIDCSettingsResponse;
                fromPartial(object: DeepPartial<UpdateOIDCSettingsResponse>): UpdateOIDCSettingsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getFileSystemNotificationProvider: {
            readonly name: "GetFileSystemNotificationProvider";
            readonly requestType: {
                encode(_: GetFileSystemNotificationProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFileSystemNotificationProviderRequest;
                fromJSON(_: any): GetFileSystemNotificationProviderRequest;
                toJSON(_: GetFileSystemNotificationProviderRequest): unknown;
                create(base?: DeepPartial<GetFileSystemNotificationProviderRequest>): GetFileSystemNotificationProviderRequest;
                fromPartial(_: DeepPartial<GetFileSystemNotificationProviderRequest>): GetFileSystemNotificationProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetFileSystemNotificationProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetFileSystemNotificationProviderResponse;
                fromJSON(object: any): GetFileSystemNotificationProviderResponse;
                toJSON(message: GetFileSystemNotificationProviderResponse): unknown;
                create(base?: DeepPartial<GetFileSystemNotificationProviderResponse>): GetFileSystemNotificationProviderResponse;
                fromPartial(object: DeepPartial<GetFileSystemNotificationProviderResponse>): GetFileSystemNotificationProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getLogNotificationProvider: {
            readonly name: "GetLogNotificationProvider";
            readonly requestType: {
                encode(_: GetLogNotificationProviderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLogNotificationProviderRequest;
                fromJSON(_: any): GetLogNotificationProviderRequest;
                toJSON(_: GetLogNotificationProviderRequest): unknown;
                create(base?: DeepPartial<GetLogNotificationProviderRequest>): GetLogNotificationProviderRequest;
                fromPartial(_: DeepPartial<GetLogNotificationProviderRequest>): GetLogNotificationProviderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLogNotificationProviderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLogNotificationProviderResponse;
                fromJSON(object: any): GetLogNotificationProviderResponse;
                toJSON(message: GetLogNotificationProviderResponse): unknown;
                create(base?: DeepPartial<GetLogNotificationProviderResponse>): GetLogNotificationProviderResponse;
                fromPartial(object: DeepPartial<GetLogNotificationProviderResponse>): GetLogNotificationProviderResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSecurityPolicy: {
            readonly name: "GetSecurityPolicy";
            readonly requestType: {
                encode(_: GetSecurityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSecurityPolicyRequest;
                fromJSON(_: any): GetSecurityPolicyRequest;
                toJSON(_: GetSecurityPolicyRequest): unknown;
                create(base?: DeepPartial<GetSecurityPolicyRequest>): GetSecurityPolicyRequest;
                fromPartial(_: DeepPartial<GetSecurityPolicyRequest>): GetSecurityPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetSecurityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSecurityPolicyResponse;
                fromJSON(object: any): GetSecurityPolicyResponse;
                toJSON(message: GetSecurityPolicyResponse): unknown;
                create(base?: DeepPartial<GetSecurityPolicyResponse>): GetSecurityPolicyResponse;
                fromPartial(object: DeepPartial<GetSecurityPolicyResponse>): GetSecurityPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setSecurityPolicy: {
            readonly name: "SetSecurityPolicy";
            readonly requestType: {
                encode(message: SetSecurityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetSecurityPolicyRequest;
                fromJSON(object: any): SetSecurityPolicyRequest;
                toJSON(message: SetSecurityPolicyRequest): unknown;
                create(base?: DeepPartial<SetSecurityPolicyRequest>): SetSecurityPolicyRequest;
                fromPartial(object: DeepPartial<SetSecurityPolicyRequest>): SetSecurityPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetSecurityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetSecurityPolicyResponse;
                fromJSON(object: any): SetSecurityPolicyResponse;
                toJSON(message: SetSecurityPolicyResponse): unknown;
                create(base?: DeepPartial<SetSecurityPolicyResponse>): SetSecurityPolicyResponse;
                fromPartial(object: DeepPartial<SetSecurityPolicyResponse>): SetSecurityPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrgByID: {
            readonly name: "GetOrgByID";
            readonly requestType: {
                encode(message: GetOrgByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgByIDRequest;
                fromJSON(object: any): GetOrgByIDRequest;
                toJSON(message: GetOrgByIDRequest): unknown;
                create(base?: DeepPartial<GetOrgByIDRequest>): GetOrgByIDRequest;
                fromPartial(object: DeepPartial<GetOrgByIDRequest>): GetOrgByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrgByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOrgByIDResponse;
                fromJSON(object: any): GetOrgByIDResponse;
                toJSON(message: GetOrgByIDResponse): unknown;
                create(base?: DeepPartial<GetOrgByIDResponse>): GetOrgByIDResponse;
                fromPartial(object: DeepPartial<GetOrgByIDResponse>): GetOrgByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly isOrgUnique: {
            readonly name: "IsOrgUnique";
            readonly requestType: {
                encode(message: IsOrgUniqueRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsOrgUniqueRequest;
                fromJSON(object: any): IsOrgUniqueRequest;
                toJSON(message: IsOrgUniqueRequest): unknown;
                create(base?: DeepPartial<IsOrgUniqueRequest>): IsOrgUniqueRequest;
                fromPartial(object: DeepPartial<IsOrgUniqueRequest>): IsOrgUniqueRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: IsOrgUniqueResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsOrgUniqueResponse;
                fromJSON(object: any): IsOrgUniqueResponse;
                toJSON(message: IsOrgUniqueResponse): unknown;
                create(base?: DeepPartial<IsOrgUniqueResponse>): IsOrgUniqueResponse;
                fromPartial(object: DeepPartial<IsOrgUniqueResponse>): IsOrgUniqueResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setDefaultOrg: {
            readonly name: "SetDefaultOrg";
            readonly requestType: {
                encode(message: SetDefaultOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultOrgRequest;
                fromJSON(object: any): SetDefaultOrgRequest;
                toJSON(message: SetDefaultOrgRequest): unknown;
                create(base?: DeepPartial<SetDefaultOrgRequest>): SetDefaultOrgRequest;
                fromPartial(object: DeepPartial<SetDefaultOrgRequest>): SetDefaultOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultOrgResponse;
                fromJSON(object: any): SetDefaultOrgResponse;
                toJSON(message: SetDefaultOrgResponse): unknown;
                create(base?: DeepPartial<SetDefaultOrgResponse>): SetDefaultOrgResponse;
                fromPartial(object: DeepPartial<SetDefaultOrgResponse>): SetDefaultOrgResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultOrg: {
            readonly name: "GetDefaultOrg";
            readonly requestType: {
                encode(_: GetDefaultOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultOrgRequest;
                fromJSON(_: any): GetDefaultOrgRequest;
                toJSON(_: GetDefaultOrgRequest): unknown;
                create(base?: DeepPartial<GetDefaultOrgRequest>): GetDefaultOrgRequest;
                fromPartial(_: DeepPartial<GetDefaultOrgRequest>): GetDefaultOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDefaultOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultOrgResponse;
                fromJSON(object: any): GetDefaultOrgResponse;
                toJSON(message: GetDefaultOrgResponse): unknown;
                create(base?: DeepPartial<GetDefaultOrgResponse>): GetDefaultOrgResponse;
                fromPartial(object: DeepPartial<GetDefaultOrgResponse>): GetDefaultOrgResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgs: {
            readonly name: "ListOrgs";
            readonly requestType: {
                encode(message: ListOrgsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgsRequest;
                fromJSON(object: any): ListOrgsRequest;
                toJSON(message: ListOrgsRequest): unknown;
                create(base?: DeepPartial<ListOrgsRequest>): ListOrgsRequest;
                fromPartial(object: DeepPartial<ListOrgsRequest>): ListOrgsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListOrgsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOrgsResponse;
                fromJSON(object: any): ListOrgsResponse;
                toJSON(message: ListOrgsResponse): unknown;
                create(base?: DeepPartial<ListOrgsResponse>): ListOrgsResponse;
                fromPartial(object: DeepPartial<ListOrgsResponse>): ListOrgsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setUpOrg: {
            readonly name: "SetUpOrg";
            readonly requestType: {
                encode(message: SetUpOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetUpOrgRequest;
                fromJSON(object: any): SetUpOrgRequest;
                toJSON(message: SetUpOrgRequest): unknown;
                create(base?: DeepPartial<SetUpOrgRequest>): SetUpOrgRequest;
                fromPartial(object: DeepPartial<SetUpOrgRequest>): SetUpOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetUpOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetUpOrgResponse;
                fromJSON(object: any): SetUpOrgResponse;
                toJSON(message: SetUpOrgResponse): unknown;
                create(base?: DeepPartial<SetUpOrgResponse>): SetUpOrgResponse;
                fromPartial(object: DeepPartial<SetUpOrgResponse>): SetUpOrgResponse;
            };
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
                encode(message: RemoveOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOrgRequest;
                fromJSON(object: any): RemoveOrgRequest;
                toJSON(message: RemoveOrgRequest): unknown;
                create(base?: DeepPartial<RemoveOrgRequest>): RemoveOrgRequest;
                fromPartial(object: DeepPartial<RemoveOrgRequest>): RemoveOrgRequest;
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
        readonly getIDPByID: {
            readonly name: "GetIDPByID";
            readonly requestType: {
                encode(message: GetIDPByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetIDPByIDRequest;
                fromJSON(object: any): GetIDPByIDRequest;
                toJSON(message: GetIDPByIDRequest): unknown;
                create(base?: DeepPartial<GetIDPByIDRequest>): GetIDPByIDRequest;
                fromPartial(object: DeepPartial<GetIDPByIDRequest>): GetIDPByIDRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetIDPByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetIDPByIDResponse;
                fromJSON(object: any): GetIDPByIDResponse;
                toJSON(message: GetIDPByIDResponse): unknown;
                create(base?: DeepPartial<GetIDPByIDResponse>): GetIDPByIDResponse;
                fromPartial(object: DeepPartial<GetIDPByIDResponse>): GetIDPByIDResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listIDPs: {
            readonly name: "ListIDPs";
            readonly requestType: {
                encode(message: ListIDPsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListIDPsRequest;
                fromJSON(object: any): ListIDPsRequest;
                toJSON(message: ListIDPsRequest): unknown;
                create(base?: DeepPartial<ListIDPsRequest>): ListIDPsRequest;
                fromPartial(object: DeepPartial<ListIDPsRequest>): ListIDPsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListIDPsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListIDPsResponse;
                fromJSON(object: any): ListIDPsResponse;
                toJSON(message: ListIDPsResponse): unknown;
                create(base?: DeepPartial<ListIDPsResponse>): ListIDPsResponse;
                fromPartial(object: DeepPartial<ListIDPsResponse>): ListIDPsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOIDCIDP: {
            readonly name: "AddOIDCIDP";
            readonly requestType: {
                encode(message: AddOIDCIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCIDPRequest;
                fromJSON(object: any): AddOIDCIDPRequest;
                toJSON(message: AddOIDCIDPRequest): unknown;
                create(base?: DeepPartial<AddOIDCIDPRequest>): AddOIDCIDPRequest;
                fromPartial(object: DeepPartial<AddOIDCIDPRequest>): AddOIDCIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOIDCIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOIDCIDPResponse;
                fromJSON(object: any): AddOIDCIDPResponse;
                toJSON(message: AddOIDCIDPResponse): unknown;
                create(base?: DeepPartial<AddOIDCIDPResponse>): AddOIDCIDPResponse;
                fromPartial(object: DeepPartial<AddOIDCIDPResponse>): AddOIDCIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addJWTIDP: {
            readonly name: "AddJWTIDP";
            readonly requestType: {
                encode(message: AddJWTIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddJWTIDPRequest;
                fromJSON(object: any): AddJWTIDPRequest;
                toJSON(message: AddJWTIDPRequest): unknown;
                create(base?: DeepPartial<AddJWTIDPRequest>): AddJWTIDPRequest;
                fromPartial(object: DeepPartial<AddJWTIDPRequest>): AddJWTIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddJWTIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddJWTIDPResponse;
                fromJSON(object: any): AddJWTIDPResponse;
                toJSON(message: AddJWTIDPResponse): unknown;
                create(base?: DeepPartial<AddJWTIDPResponse>): AddJWTIDPResponse;
                fromPartial(object: DeepPartial<AddJWTIDPResponse>): AddJWTIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateIDP: {
            readonly name: "UpdateIDP";
            readonly requestType: {
                encode(message: UpdateIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPRequest;
                fromJSON(object: any): UpdateIDPRequest;
                toJSON(message: UpdateIDPRequest): unknown;
                create(base?: DeepPartial<UpdateIDPRequest>): UpdateIDPRequest;
                fromPartial(object: DeepPartial<UpdateIDPRequest>): UpdateIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPResponse;
                fromJSON(object: any): UpdateIDPResponse;
                toJSON(message: UpdateIDPResponse): unknown;
                create(base?: DeepPartial<UpdateIDPResponse>): UpdateIDPResponse;
                fromPartial(object: DeepPartial<UpdateIDPResponse>): UpdateIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateIDP: {
            readonly name: "DeactivateIDP";
            readonly requestType: {
                encode(message: DeactivateIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateIDPRequest;
                fromJSON(object: any): DeactivateIDPRequest;
                toJSON(message: DeactivateIDPRequest): unknown;
                create(base?: DeepPartial<DeactivateIDPRequest>): DeactivateIDPRequest;
                fromPartial(object: DeepPartial<DeactivateIDPRequest>): DeactivateIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeactivateIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateIDPResponse;
                fromJSON(object: any): DeactivateIDPResponse;
                toJSON(message: DeactivateIDPResponse): unknown;
                create(base?: DeepPartial<DeactivateIDPResponse>): DeactivateIDPResponse;
                fromPartial(object: DeepPartial<DeactivateIDPResponse>): DeactivateIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateIDP: {
            readonly name: "ReactivateIDP";
            readonly requestType: {
                encode(message: ReactivateIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateIDPRequest;
                fromJSON(object: any): ReactivateIDPRequest;
                toJSON(message: ReactivateIDPRequest): unknown;
                create(base?: DeepPartial<ReactivateIDPRequest>): ReactivateIDPRequest;
                fromPartial(object: DeepPartial<ReactivateIDPRequest>): ReactivateIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ReactivateIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateIDPResponse;
                fromJSON(object: any): ReactivateIDPResponse;
                toJSON(message: ReactivateIDPResponse): unknown;
                create(base?: DeepPartial<ReactivateIDPResponse>): ReactivateIDPResponse;
                fromPartial(object: DeepPartial<ReactivateIDPResponse>): ReactivateIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeIDP: {
            readonly name: "RemoveIDP";
            readonly requestType: {
                encode(message: RemoveIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIDPRequest;
                fromJSON(object: any): RemoveIDPRequest;
                toJSON(message: RemoveIDPRequest): unknown;
                create(base?: DeepPartial<RemoveIDPRequest>): RemoveIDPRequest;
                fromPartial(object: DeepPartial<RemoveIDPRequest>): RemoveIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIDPResponse;
                fromJSON(object: any): RemoveIDPResponse;
                toJSON(message: RemoveIDPResponse): unknown;
                create(base?: DeepPartial<RemoveIDPResponse>): RemoveIDPResponse;
                fromPartial(object: DeepPartial<RemoveIDPResponse>): RemoveIDPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateIDPOIDCConfig: {
            readonly name: "UpdateIDPOIDCConfig";
            readonly requestType: {
                encode(message: UpdateIDPOIDCConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPOIDCConfigRequest;
                fromJSON(object: any): UpdateIDPOIDCConfigRequest;
                toJSON(message: UpdateIDPOIDCConfigRequest): unknown;
                create(base?: DeepPartial<UpdateIDPOIDCConfigRequest>): UpdateIDPOIDCConfigRequest;
                fromPartial(object: DeepPartial<UpdateIDPOIDCConfigRequest>): UpdateIDPOIDCConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateIDPOIDCConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPOIDCConfigResponse;
                fromJSON(object: any): UpdateIDPOIDCConfigResponse;
                toJSON(message: UpdateIDPOIDCConfigResponse): unknown;
                create(base?: DeepPartial<UpdateIDPOIDCConfigResponse>): UpdateIDPOIDCConfigResponse;
                fromPartial(object: DeepPartial<UpdateIDPOIDCConfigResponse>): UpdateIDPOIDCConfigResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateIDPJWTConfig: {
            readonly name: "UpdateIDPJWTConfig";
            readonly requestType: {
                encode(message: UpdateIDPJWTConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPJWTConfigRequest;
                fromJSON(object: any): UpdateIDPJWTConfigRequest;
                toJSON(message: UpdateIDPJWTConfigRequest): unknown;
                create(base?: DeepPartial<UpdateIDPJWTConfigRequest>): UpdateIDPJWTConfigRequest;
                fromPartial(object: DeepPartial<UpdateIDPJWTConfigRequest>): UpdateIDPJWTConfigRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateIDPJWTConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIDPJWTConfigResponse;
                fromJSON(object: any): UpdateIDPJWTConfigResponse;
                toJSON(message: UpdateIDPJWTConfigResponse): unknown;
                create(base?: DeepPartial<UpdateIDPJWTConfigResponse>): UpdateIDPJWTConfigResponse;
                fromPartial(object: DeepPartial<UpdateIDPJWTConfigResponse>): UpdateIDPJWTConfigResponse;
            };
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
        /** Returns an identity provider of the instance */
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
        /** Add a new OAuth2 identity provider on the instance */
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
        /** Change an existing OAuth2 identity provider on the instance */
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
        /** Add a new OIDC identity provider on the instance */
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
        /** Change an existing OIDC identity provider on the instance */
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
        /** Migrate an existing OIDC identity provider on the instance */
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
        /** Add a new JWT identity provider on the instance */
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
        /** Change an existing JWT identity provider on the instance */
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
        /** Add a new Azure AD identity provider on the instance */
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
        /** Change an existing Azure AD identity provider on the instance */
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
        /** Add a new GitHub identity provider on the instance */
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
        /** Change an existing GitHub identity provider on the instance */
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
        /** Add a new GitHub Enterprise Server identity provider on the instance */
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
        /** Change an existing GitHub Enterprise Server identity provider on the instance */
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
        /** Add a new GitLab identity provider on the instance */
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
        /** Change an existing GitLab identity provider on the instance */
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
        /** Add a new self hosted GitLab identity provider on the instance */
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
        /** Change an existing self hosted GitLab identity provider on the instance */
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
        /** Add a new Google identity provider on the instance */
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
        /** Change an existing Google identity provider on the instance */
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
        /** Add a new LDAP identity provider on the instance */
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
        /** Change an existing LDAP identity provider on the instance */
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
        /** Add a new Apple identity provider on the instance */
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
        /** Change an existing Apple identity provider on the instance */
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
        /** Add a new SAML identity provider on the instance */
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
        /** Change an existing SAML identity provider on the instance */
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
        readonly updateOrgIAMPolicy: {
            readonly name: "UpdateOrgIAMPolicy";
            readonly requestType: {
                encode(message: UpdateOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIAMPolicyRequest;
                fromJSON(object: any): UpdateOrgIAMPolicyRequest;
                toJSON(message: UpdateOrgIAMPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateOrgIAMPolicyRequest>): UpdateOrgIAMPolicyRequest;
                fromPartial(object: DeepPartial<UpdateOrgIAMPolicyRequest>): UpdateOrgIAMPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrgIAMPolicyResponse;
                fromJSON(object: any): UpdateOrgIAMPolicyResponse;
                toJSON(message: UpdateOrgIAMPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateOrgIAMPolicyResponse>): UpdateOrgIAMPolicyResponse;
                fromPartial(object: DeepPartial<UpdateOrgIAMPolicyResponse>): UpdateOrgIAMPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomOrgIAMPolicy: {
            readonly name: "GetCustomOrgIAMPolicy";
            readonly requestType: {
                encode(message: GetCustomOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomOrgIAMPolicyRequest;
                fromJSON(object: any): GetCustomOrgIAMPolicyRequest;
                toJSON(message: GetCustomOrgIAMPolicyRequest): unknown;
                create(base?: DeepPartial<GetCustomOrgIAMPolicyRequest>): GetCustomOrgIAMPolicyRequest;
                fromPartial(object: DeepPartial<GetCustomOrgIAMPolicyRequest>): GetCustomOrgIAMPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomOrgIAMPolicyResponse;
                fromJSON(object: any): GetCustomOrgIAMPolicyResponse;
                toJSON(message: GetCustomOrgIAMPolicyResponse): unknown;
                create(base?: DeepPartial<GetCustomOrgIAMPolicyResponse>): GetCustomOrgIAMPolicyResponse;
                fromPartial(object: DeepPartial<GetCustomOrgIAMPolicyResponse>): GetCustomOrgIAMPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomOrgIAMPolicy: {
            readonly name: "AddCustomOrgIAMPolicy";
            readonly requestType: {
                encode(message: AddCustomOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomOrgIAMPolicyRequest;
                fromJSON(object: any): AddCustomOrgIAMPolicyRequest;
                toJSON(message: AddCustomOrgIAMPolicyRequest): unknown;
                create(base?: DeepPartial<AddCustomOrgIAMPolicyRequest>): AddCustomOrgIAMPolicyRequest;
                fromPartial(object: DeepPartial<AddCustomOrgIAMPolicyRequest>): AddCustomOrgIAMPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddCustomOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomOrgIAMPolicyResponse;
                fromJSON(object: any): AddCustomOrgIAMPolicyResponse;
                toJSON(message: AddCustomOrgIAMPolicyResponse): unknown;
                create(base?: DeepPartial<AddCustomOrgIAMPolicyResponse>): AddCustomOrgIAMPolicyResponse;
                fromPartial(object: DeepPartial<AddCustomOrgIAMPolicyResponse>): AddCustomOrgIAMPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomOrgIAMPolicy: {
            readonly name: "UpdateCustomOrgIAMPolicy";
            readonly requestType: {
                encode(message: UpdateCustomOrgIAMPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomOrgIAMPolicyRequest;
                fromJSON(object: any): UpdateCustomOrgIAMPolicyRequest;
                toJSON(message: UpdateCustomOrgIAMPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateCustomOrgIAMPolicyRequest>): UpdateCustomOrgIAMPolicyRequest;
                fromPartial(object: DeepPartial<UpdateCustomOrgIAMPolicyRequest>): UpdateCustomOrgIAMPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCustomOrgIAMPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomOrgIAMPolicyResponse;
                fromJSON(object: any): UpdateCustomOrgIAMPolicyResponse;
                toJSON(message: UpdateCustomOrgIAMPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateCustomOrgIAMPolicyResponse>): UpdateCustomOrgIAMPolicyResponse;
                fromPartial(object: DeepPartial<UpdateCustomOrgIAMPolicyResponse>): UpdateCustomOrgIAMPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomOrgIAMPolicyToDefault: {
            readonly name: "ResetCustomOrgIAMPolicyToDefault";
            readonly requestType: {
                encode(message: ResetCustomOrgIAMPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomOrgIAMPolicyToDefaultRequest;
                fromJSON(object: any): ResetCustomOrgIAMPolicyToDefaultRequest;
                toJSON(message: ResetCustomOrgIAMPolicyToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomOrgIAMPolicyToDefaultRequest>): ResetCustomOrgIAMPolicyToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomOrgIAMPolicyToDefaultRequest>): ResetCustomOrgIAMPolicyToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomOrgIAMPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomOrgIAMPolicyToDefaultResponse;
                fromJSON(object: any): ResetCustomOrgIAMPolicyToDefaultResponse;
                toJSON(message: ResetCustomOrgIAMPolicyToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomOrgIAMPolicyToDefaultResponse>): ResetCustomOrgIAMPolicyToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomOrgIAMPolicyToDefaultResponse>): ResetCustomOrgIAMPolicyToDefaultResponse;
            };
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
        readonly updateDomainPolicy: {
            readonly name: "UpdateDomainPolicy";
            readonly requestType: {
                encode(message: UpdateDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDomainPolicyRequest;
                fromJSON(object: any): UpdateDomainPolicyRequest;
                toJSON(message: UpdateDomainPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateDomainPolicyRequest>): UpdateDomainPolicyRequest;
                fromPartial(object: DeepPartial<UpdateDomainPolicyRequest>): UpdateDomainPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDomainPolicyResponse;
                fromJSON(object: any): UpdateDomainPolicyResponse;
                toJSON(message: UpdateDomainPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateDomainPolicyResponse>): UpdateDomainPolicyResponse;
                fromPartial(object: DeepPartial<UpdateDomainPolicyResponse>): UpdateDomainPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomDomainPolicy: {
            readonly name: "GetCustomDomainPolicy";
            readonly requestType: {
                encode(message: GetCustomDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomDomainPolicyRequest;
                fromJSON(object: any): GetCustomDomainPolicyRequest;
                toJSON(message: GetCustomDomainPolicyRequest): unknown;
                create(base?: DeepPartial<GetCustomDomainPolicyRequest>): GetCustomDomainPolicyRequest;
                fromPartial(object: DeepPartial<GetCustomDomainPolicyRequest>): GetCustomDomainPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCustomDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetCustomDomainPolicyResponse;
                fromJSON(object: any): GetCustomDomainPolicyResponse;
                toJSON(message: GetCustomDomainPolicyResponse): unknown;
                create(base?: DeepPartial<GetCustomDomainPolicyResponse>): GetCustomDomainPolicyResponse;
                fromPartial(object: DeepPartial<GetCustomDomainPolicyResponse>): GetCustomDomainPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomDomainPolicy: {
            readonly name: "AddCustomDomainPolicy";
            readonly requestType: {
                encode(message: AddCustomDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomDomainPolicyRequest;
                fromJSON(object: any): AddCustomDomainPolicyRequest;
                toJSON(message: AddCustomDomainPolicyRequest): unknown;
                create(base?: DeepPartial<AddCustomDomainPolicyRequest>): AddCustomDomainPolicyRequest;
                fromPartial(object: DeepPartial<AddCustomDomainPolicyRequest>): AddCustomDomainPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddCustomDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddCustomDomainPolicyResponse;
                fromJSON(object: any): AddCustomDomainPolicyResponse;
                toJSON(message: AddCustomDomainPolicyResponse): unknown;
                create(base?: DeepPartial<AddCustomDomainPolicyResponse>): AddCustomDomainPolicyResponse;
                fromPartial(object: DeepPartial<AddCustomDomainPolicyResponse>): AddCustomDomainPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomDomainPolicy: {
            readonly name: "UpdateCustomDomainPolicy";
            readonly requestType: {
                encode(message: UpdateCustomDomainPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomDomainPolicyRequest;
                fromJSON(object: any): UpdateCustomDomainPolicyRequest;
                toJSON(message: UpdateCustomDomainPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateCustomDomainPolicyRequest>): UpdateCustomDomainPolicyRequest;
                fromPartial(object: DeepPartial<UpdateCustomDomainPolicyRequest>): UpdateCustomDomainPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateCustomDomainPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCustomDomainPolicyResponse;
                fromJSON(object: any): UpdateCustomDomainPolicyResponse;
                toJSON(message: UpdateCustomDomainPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateCustomDomainPolicyResponse>): UpdateCustomDomainPolicyResponse;
                fromPartial(object: DeepPartial<UpdateCustomDomainPolicyResponse>): UpdateCustomDomainPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomDomainPolicyToDefault: {
            readonly name: "ResetCustomDomainPolicyToDefault";
            readonly requestType: {
                encode(message: ResetCustomDomainPolicyToDefaultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomDomainPolicyToDefaultRequest;
                fromJSON(object: any): ResetCustomDomainPolicyToDefaultRequest;
                toJSON(message: ResetCustomDomainPolicyToDefaultRequest): unknown;
                create(base?: DeepPartial<ResetCustomDomainPolicyToDefaultRequest>): ResetCustomDomainPolicyToDefaultRequest;
                fromPartial(object: DeepPartial<ResetCustomDomainPolicyToDefaultRequest>): ResetCustomDomainPolicyToDefaultRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetCustomDomainPolicyToDefaultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetCustomDomainPolicyToDefaultResponse;
                fromJSON(object: any): ResetCustomDomainPolicyToDefaultResponse;
                toJSON(message: ResetCustomDomainPolicyToDefaultResponse): unknown;
                create(base?: DeepPartial<ResetCustomDomainPolicyToDefaultResponse>): ResetCustomDomainPolicyToDefaultResponse;
                fromPartial(object: DeepPartial<ResetCustomDomainPolicyToDefaultResponse>): ResetCustomDomainPolicyToDefaultResponse;
            };
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
        readonly updateLabelPolicy: {
            readonly name: "UpdateLabelPolicy";
            readonly requestType: {
                encode(message: UpdateLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLabelPolicyRequest;
                fromJSON(object: any): UpdateLabelPolicyRequest;
                toJSON(message: UpdateLabelPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateLabelPolicyRequest>): UpdateLabelPolicyRequest;
                fromPartial(object: DeepPartial<UpdateLabelPolicyRequest>): UpdateLabelPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLabelPolicyResponse;
                fromJSON(object: any): UpdateLabelPolicyResponse;
                toJSON(message: UpdateLabelPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateLabelPolicyResponse>): UpdateLabelPolicyResponse;
                fromPartial(object: DeepPartial<UpdateLabelPolicyResponse>): UpdateLabelPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateLabelPolicy: {
            readonly name: "ActivateLabelPolicy";
            readonly requestType: {
                encode(_: ActivateLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ActivateLabelPolicyRequest;
                fromJSON(_: any): ActivateLabelPolicyRequest;
                toJSON(_: ActivateLabelPolicyRequest): unknown;
                create(base?: DeepPartial<ActivateLabelPolicyRequest>): ActivateLabelPolicyRequest;
                fromPartial(_: DeepPartial<ActivateLabelPolicyRequest>): ActivateLabelPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ActivateLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ActivateLabelPolicyResponse;
                fromJSON(object: any): ActivateLabelPolicyResponse;
                toJSON(message: ActivateLabelPolicyResponse): unknown;
                create(base?: DeepPartial<ActivateLabelPolicyResponse>): ActivateLabelPolicyResponse;
                fromPartial(object: DeepPartial<ActivateLabelPolicyResponse>): ActivateLabelPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyLogo: {
            readonly name: "RemoveLabelPolicyLogo";
            readonly requestType: {
                encode(_: RemoveLabelPolicyLogoRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyLogoRequest;
                fromJSON(_: any): RemoveLabelPolicyLogoRequest;
                toJSON(_: RemoveLabelPolicyLogoRequest): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyLogoRequest>): RemoveLabelPolicyLogoRequest;
                fromPartial(_: DeepPartial<RemoveLabelPolicyLogoRequest>): RemoveLabelPolicyLogoRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveLabelPolicyLogoResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyLogoResponse;
                fromJSON(object: any): RemoveLabelPolicyLogoResponse;
                toJSON(message: RemoveLabelPolicyLogoResponse): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyLogoResponse>): RemoveLabelPolicyLogoResponse;
                fromPartial(object: DeepPartial<RemoveLabelPolicyLogoResponse>): RemoveLabelPolicyLogoResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyLogoDark: {
            readonly name: "RemoveLabelPolicyLogoDark";
            readonly requestType: {
                encode(_: RemoveLabelPolicyLogoDarkRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyLogoDarkRequest;
                fromJSON(_: any): RemoveLabelPolicyLogoDarkRequest;
                toJSON(_: RemoveLabelPolicyLogoDarkRequest): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyLogoDarkRequest>): RemoveLabelPolicyLogoDarkRequest;
                fromPartial(_: DeepPartial<RemoveLabelPolicyLogoDarkRequest>): RemoveLabelPolicyLogoDarkRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveLabelPolicyLogoDarkResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyLogoDarkResponse;
                fromJSON(object: any): RemoveLabelPolicyLogoDarkResponse;
                toJSON(message: RemoveLabelPolicyLogoDarkResponse): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyLogoDarkResponse>): RemoveLabelPolicyLogoDarkResponse;
                fromPartial(object: DeepPartial<RemoveLabelPolicyLogoDarkResponse>): RemoveLabelPolicyLogoDarkResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyIcon: {
            readonly name: "RemoveLabelPolicyIcon";
            readonly requestType: {
                encode(_: RemoveLabelPolicyIconRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyIconRequest;
                fromJSON(_: any): RemoveLabelPolicyIconRequest;
                toJSON(_: RemoveLabelPolicyIconRequest): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyIconRequest>): RemoveLabelPolicyIconRequest;
                fromPartial(_: DeepPartial<RemoveLabelPolicyIconRequest>): RemoveLabelPolicyIconRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveLabelPolicyIconResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyIconResponse;
                fromJSON(object: any): RemoveLabelPolicyIconResponse;
                toJSON(message: RemoveLabelPolicyIconResponse): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyIconResponse>): RemoveLabelPolicyIconResponse;
                fromPartial(object: DeepPartial<RemoveLabelPolicyIconResponse>): RemoveLabelPolicyIconResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyIconDark: {
            readonly name: "RemoveLabelPolicyIconDark";
            readonly requestType: {
                encode(_: RemoveLabelPolicyIconDarkRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyIconDarkRequest;
                fromJSON(_: any): RemoveLabelPolicyIconDarkRequest;
                toJSON(_: RemoveLabelPolicyIconDarkRequest): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyIconDarkRequest>): RemoveLabelPolicyIconDarkRequest;
                fromPartial(_: DeepPartial<RemoveLabelPolicyIconDarkRequest>): RemoveLabelPolicyIconDarkRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveLabelPolicyIconDarkResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyIconDarkResponse;
                fromJSON(object: any): RemoveLabelPolicyIconDarkResponse;
                toJSON(message: RemoveLabelPolicyIconDarkResponse): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyIconDarkResponse>): RemoveLabelPolicyIconDarkResponse;
                fromPartial(object: DeepPartial<RemoveLabelPolicyIconDarkResponse>): RemoveLabelPolicyIconDarkResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyFont: {
            readonly name: "RemoveLabelPolicyFont";
            readonly requestType: {
                encode(_: RemoveLabelPolicyFontRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyFontRequest;
                fromJSON(_: any): RemoveLabelPolicyFontRequest;
                toJSON(_: RemoveLabelPolicyFontRequest): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyFontRequest>): RemoveLabelPolicyFontRequest;
                fromPartial(_: DeepPartial<RemoveLabelPolicyFontRequest>): RemoveLabelPolicyFontRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveLabelPolicyFontResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLabelPolicyFontResponse;
                fromJSON(object: any): RemoveLabelPolicyFontResponse;
                toJSON(message: RemoveLabelPolicyFontResponse): unknown;
                create(base?: DeepPartial<RemoveLabelPolicyFontResponse>): RemoveLabelPolicyFontResponse;
                fromPartial(object: DeepPartial<RemoveLabelPolicyFontResponse>): RemoveLabelPolicyFontResponse;
            };
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
        readonly updateLoginPolicy: {
            readonly name: "UpdateLoginPolicy";
            readonly requestType: {
                encode(message: UpdateLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLoginPolicyRequest;
                fromJSON(object: any): UpdateLoginPolicyRequest;
                toJSON(message: UpdateLoginPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateLoginPolicyRequest>): UpdateLoginPolicyRequest;
                fromPartial(object: DeepPartial<UpdateLoginPolicyRequest>): UpdateLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLoginPolicyResponse;
                fromJSON(object: any): UpdateLoginPolicyResponse;
                toJSON(message: UpdateLoginPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateLoginPolicyResponse>): UpdateLoginPolicyResponse;
                fromPartial(object: DeepPartial<UpdateLoginPolicyResponse>): UpdateLoginPolicyResponse;
            };
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
        readonly updatePasswordComplexityPolicy: {
            readonly name: "UpdatePasswordComplexityPolicy";
            readonly requestType: {
                encode(message: UpdatePasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePasswordComplexityPolicyRequest;
                fromJSON(object: any): UpdatePasswordComplexityPolicyRequest;
                toJSON(message: UpdatePasswordComplexityPolicyRequest): unknown;
                create(base?: DeepPartial<UpdatePasswordComplexityPolicyRequest>): UpdatePasswordComplexityPolicyRequest;
                fromPartial(object: DeepPartial<UpdatePasswordComplexityPolicyRequest>): UpdatePasswordComplexityPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdatePasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePasswordComplexityPolicyResponse;
                fromJSON(object: any): UpdatePasswordComplexityPolicyResponse;
                toJSON(message: UpdatePasswordComplexityPolicyResponse): unknown;
                create(base?: DeepPartial<UpdatePasswordComplexityPolicyResponse>): UpdatePasswordComplexityPolicyResponse;
                fromPartial(object: DeepPartial<UpdatePasswordComplexityPolicyResponse>): UpdatePasswordComplexityPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
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
        readonly updatePasswordAgePolicy: {
            readonly name: "UpdatePasswordAgePolicy";
            readonly requestType: {
                encode(message: UpdatePasswordAgePolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePasswordAgePolicyRequest;
                fromJSON(object: any): UpdatePasswordAgePolicyRequest;
                toJSON(message: UpdatePasswordAgePolicyRequest): unknown;
                create(base?: DeepPartial<UpdatePasswordAgePolicyRequest>): UpdatePasswordAgePolicyRequest;
                fromPartial(object: DeepPartial<UpdatePasswordAgePolicyRequest>): UpdatePasswordAgePolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdatePasswordAgePolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePasswordAgePolicyResponse;
                fromJSON(object: any): UpdatePasswordAgePolicyResponse;
                toJSON(message: UpdatePasswordAgePolicyResponse): unknown;
                create(base?: DeepPartial<UpdatePasswordAgePolicyResponse>): UpdatePasswordAgePolicyResponse;
                fromPartial(object: DeepPartial<UpdatePasswordAgePolicyResponse>): UpdatePasswordAgePolicyResponse;
            };
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
        readonly updateLockoutPolicy: {
            readonly name: "UpdateLockoutPolicy";
            readonly requestType: {
                encode(message: UpdateLockoutPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLockoutPolicyRequest;
                fromJSON(object: any): UpdateLockoutPolicyRequest;
                toJSON(message: UpdateLockoutPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateLockoutPolicyRequest>): UpdateLockoutPolicyRequest;
                fromPartial(object: DeepPartial<UpdateLockoutPolicyRequest>): UpdateLockoutPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateLockoutPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLockoutPolicyResponse;
                fromJSON(object: any): UpdateLockoutPolicyResponse;
                toJSON(message: UpdateLockoutPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateLockoutPolicyResponse>): UpdateLockoutPolicyResponse;
                fromPartial(object: DeepPartial<UpdateLockoutPolicyResponse>): UpdateLockoutPolicyResponse;
            };
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
        readonly updatePrivacyPolicy: {
            readonly name: "UpdatePrivacyPolicy";
            readonly requestType: {
                encode(message: UpdatePrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivacyPolicyRequest;
                fromJSON(object: any): UpdatePrivacyPolicyRequest;
                toJSON(message: UpdatePrivacyPolicyRequest): unknown;
                create(base?: DeepPartial<UpdatePrivacyPolicyRequest>): UpdatePrivacyPolicyRequest;
                fromPartial(object: DeepPartial<UpdatePrivacyPolicyRequest>): UpdatePrivacyPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdatePrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivacyPolicyResponse;
                fromJSON(object: any): UpdatePrivacyPolicyResponse;
                toJSON(message: UpdatePrivacyPolicyResponse): unknown;
                create(base?: DeepPartial<UpdatePrivacyPolicyResponse>): UpdatePrivacyPolicyResponse;
                fromPartial(object: DeepPartial<UpdatePrivacyPolicyResponse>): UpdatePrivacyPolicyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addNotificationPolicy: {
            readonly name: "AddNotificationPolicy";
            readonly requestType: {
                encode(message: AddNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddNotificationPolicyRequest;
                fromJSON(object: any): AddNotificationPolicyRequest;
                toJSON(message: AddNotificationPolicyRequest): unknown;
                create(base?: DeepPartial<AddNotificationPolicyRequest>): AddNotificationPolicyRequest;
                fromPartial(object: DeepPartial<AddNotificationPolicyRequest>): AddNotificationPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddNotificationPolicyResponse;
                fromJSON(object: any): AddNotificationPolicyResponse;
                toJSON(message: AddNotificationPolicyResponse): unknown;
                create(base?: DeepPartial<AddNotificationPolicyResponse>): AddNotificationPolicyResponse;
                fromPartial(object: DeepPartial<AddNotificationPolicyResponse>): AddNotificationPolicyResponse;
            };
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
        readonly updateNotificationPolicy: {
            readonly name: "UpdateNotificationPolicy";
            readonly requestType: {
                encode(message: UpdateNotificationPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNotificationPolicyRequest;
                fromJSON(object: any): UpdateNotificationPolicyRequest;
                toJSON(message: UpdateNotificationPolicyRequest): unknown;
                create(base?: DeepPartial<UpdateNotificationPolicyRequest>): UpdateNotificationPolicyRequest;
                fromPartial(object: DeepPartial<UpdateNotificationPolicyRequest>): UpdateNotificationPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateNotificationPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNotificationPolicyResponse;
                fromJSON(object: any): UpdateNotificationPolicyResponse;
                toJSON(message: UpdateNotificationPolicyResponse): unknown;
                create(base?: DeepPartial<UpdateNotificationPolicyResponse>): UpdateNotificationPolicyResponse;
                fromPartial(object: DeepPartial<UpdateNotificationPolicyResponse>): UpdateNotificationPolicyResponse;
            };
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
        readonly setDefaultInitMessageText: {
            readonly name: "SetDefaultInitMessageText";
            readonly requestType: {
                encode(message: SetDefaultInitMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultInitMessageTextRequest;
                fromJSON(object: any): SetDefaultInitMessageTextRequest;
                toJSON(message: SetDefaultInitMessageTextRequest): unknown;
                create(base?: DeepPartial<SetDefaultInitMessageTextRequest>): SetDefaultInitMessageTextRequest;
                fromPartial(object: DeepPartial<SetDefaultInitMessageTextRequest>): SetDefaultInitMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultInitMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultInitMessageTextResponse;
                fromJSON(object: any): SetDefaultInitMessageTextResponse;
                toJSON(message: SetDefaultInitMessageTextResponse): unknown;
                create(base?: DeepPartial<SetDefaultInitMessageTextResponse>): SetDefaultInitMessageTextResponse;
                fromPartial(object: DeepPartial<SetDefaultInitMessageTextResponse>): SetDefaultInitMessageTextResponse;
            };
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
        readonly setDefaultPasswordResetMessageText: {
            readonly name: "SetDefaultPasswordResetMessageText";
            readonly requestType: {
                encode(message: SetDefaultPasswordResetMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordResetMessageTextRequest;
                fromJSON(object: any): SetDefaultPasswordResetMessageTextRequest;
                toJSON(message: SetDefaultPasswordResetMessageTextRequest): unknown;
                create(base?: DeepPartial<SetDefaultPasswordResetMessageTextRequest>): SetDefaultPasswordResetMessageTextRequest;
                fromPartial(object: DeepPartial<SetDefaultPasswordResetMessageTextRequest>): SetDefaultPasswordResetMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultPasswordResetMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordResetMessageTextResponse;
                fromJSON(object: any): SetDefaultPasswordResetMessageTextResponse;
                toJSON(message: SetDefaultPasswordResetMessageTextResponse): unknown;
                create(base?: DeepPartial<SetDefaultPasswordResetMessageTextResponse>): SetDefaultPasswordResetMessageTextResponse;
                fromPartial(object: DeepPartial<SetDefaultPasswordResetMessageTextResponse>): SetDefaultPasswordResetMessageTextResponse;
            };
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
        readonly setDefaultVerifyEmailMessageText: {
            readonly name: "SetDefaultVerifyEmailMessageText";
            readonly requestType: {
                encode(message: SetDefaultVerifyEmailMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyEmailMessageTextRequest;
                fromJSON(object: any): SetDefaultVerifyEmailMessageTextRequest;
                toJSON(message: SetDefaultVerifyEmailMessageTextRequest): unknown;
                create(base?: DeepPartial<SetDefaultVerifyEmailMessageTextRequest>): SetDefaultVerifyEmailMessageTextRequest;
                fromPartial(object: DeepPartial<SetDefaultVerifyEmailMessageTextRequest>): SetDefaultVerifyEmailMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultVerifyEmailMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyEmailMessageTextResponse;
                fromJSON(object: any): SetDefaultVerifyEmailMessageTextResponse;
                toJSON(message: SetDefaultVerifyEmailMessageTextResponse): unknown;
                create(base?: DeepPartial<SetDefaultVerifyEmailMessageTextResponse>): SetDefaultVerifyEmailMessageTextResponse;
                fromPartial(object: DeepPartial<SetDefaultVerifyEmailMessageTextResponse>): SetDefaultVerifyEmailMessageTextResponse;
            };
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
        readonly setDefaultVerifyPhoneMessageText: {
            readonly name: "SetDefaultVerifyPhoneMessageText";
            readonly requestType: {
                encode(message: SetDefaultVerifyPhoneMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyPhoneMessageTextRequest;
                fromJSON(object: any): SetDefaultVerifyPhoneMessageTextRequest;
                toJSON(message: SetDefaultVerifyPhoneMessageTextRequest): unknown;
                create(base?: DeepPartial<SetDefaultVerifyPhoneMessageTextRequest>): SetDefaultVerifyPhoneMessageTextRequest;
                fromPartial(object: DeepPartial<SetDefaultVerifyPhoneMessageTextRequest>): SetDefaultVerifyPhoneMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultVerifyPhoneMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyPhoneMessageTextResponse;
                fromJSON(object: any): SetDefaultVerifyPhoneMessageTextResponse;
                toJSON(message: SetDefaultVerifyPhoneMessageTextResponse): unknown;
                create(base?: DeepPartial<SetDefaultVerifyPhoneMessageTextResponse>): SetDefaultVerifyPhoneMessageTextResponse;
                fromPartial(object: DeepPartial<SetDefaultVerifyPhoneMessageTextResponse>): SetDefaultVerifyPhoneMessageTextResponse;
            };
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
        readonly setDefaultVerifySMSOTPMessageText: {
            readonly name: "SetDefaultVerifySMSOTPMessageText";
            readonly requestType: {
                encode(message: SetDefaultVerifySMSOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifySMSOTPMessageTextRequest;
                fromJSON(object: any): SetDefaultVerifySMSOTPMessageTextRequest;
                toJSON(message: SetDefaultVerifySMSOTPMessageTextRequest): unknown;
                create(base?: DeepPartial<SetDefaultVerifySMSOTPMessageTextRequest>): SetDefaultVerifySMSOTPMessageTextRequest;
                fromPartial(object: DeepPartial<SetDefaultVerifySMSOTPMessageTextRequest>): SetDefaultVerifySMSOTPMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultVerifySMSOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifySMSOTPMessageTextResponse;
                fromJSON(object: any): SetDefaultVerifySMSOTPMessageTextResponse;
                toJSON(message: SetDefaultVerifySMSOTPMessageTextResponse): unknown;
                create(base?: DeepPartial<SetDefaultVerifySMSOTPMessageTextResponse>): SetDefaultVerifySMSOTPMessageTextResponse;
                fromPartial(object: DeepPartial<SetDefaultVerifySMSOTPMessageTextResponse>): SetDefaultVerifySMSOTPMessageTextResponse;
            };
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
        readonly setDefaultVerifyEmailOTPMessageText: {
            readonly name: "SetDefaultVerifyEmailOTPMessageText";
            readonly requestType: {
                encode(message: SetDefaultVerifyEmailOTPMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyEmailOTPMessageTextRequest;
                fromJSON(object: any): SetDefaultVerifyEmailOTPMessageTextRequest;
                toJSON(message: SetDefaultVerifyEmailOTPMessageTextRequest): unknown;
                create(base?: DeepPartial<SetDefaultVerifyEmailOTPMessageTextRequest>): SetDefaultVerifyEmailOTPMessageTextRequest;
                fromPartial(object: DeepPartial<SetDefaultVerifyEmailOTPMessageTextRequest>): SetDefaultVerifyEmailOTPMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultVerifyEmailOTPMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultVerifyEmailOTPMessageTextResponse;
                fromJSON(object: any): SetDefaultVerifyEmailOTPMessageTextResponse;
                toJSON(message: SetDefaultVerifyEmailOTPMessageTextResponse): unknown;
                create(base?: DeepPartial<SetDefaultVerifyEmailOTPMessageTextResponse>): SetDefaultVerifyEmailOTPMessageTextResponse;
                fromPartial(object: DeepPartial<SetDefaultVerifyEmailOTPMessageTextResponse>): SetDefaultVerifyEmailOTPMessageTextResponse;
            };
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
        readonly setDefaultDomainClaimedMessageText: {
            readonly name: "SetDefaultDomainClaimedMessageText";
            readonly requestType: {
                encode(message: SetDefaultDomainClaimedMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultDomainClaimedMessageTextRequest;
                fromJSON(object: any): SetDefaultDomainClaimedMessageTextRequest;
                toJSON(message: SetDefaultDomainClaimedMessageTextRequest): unknown;
                create(base?: DeepPartial<SetDefaultDomainClaimedMessageTextRequest>): SetDefaultDomainClaimedMessageTextRequest;
                fromPartial(object: DeepPartial<SetDefaultDomainClaimedMessageTextRequest>): SetDefaultDomainClaimedMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultDomainClaimedMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultDomainClaimedMessageTextResponse;
                fromJSON(object: any): SetDefaultDomainClaimedMessageTextResponse;
                toJSON(message: SetDefaultDomainClaimedMessageTextResponse): unknown;
                create(base?: DeepPartial<SetDefaultDomainClaimedMessageTextResponse>): SetDefaultDomainClaimedMessageTextResponse;
                fromPartial(object: DeepPartial<SetDefaultDomainClaimedMessageTextResponse>): SetDefaultDomainClaimedMessageTextResponse;
            };
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
        readonly setDefaultPasswordlessRegistrationMessageText: {
            readonly name: "SetDefaultPasswordlessRegistrationMessageText";
            readonly requestType: {
                encode(message: SetDefaultPasswordlessRegistrationMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordlessRegistrationMessageTextRequest;
                fromJSON(object: any): SetDefaultPasswordlessRegistrationMessageTextRequest;
                toJSON(message: SetDefaultPasswordlessRegistrationMessageTextRequest): unknown;
                create(base?: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextRequest>): SetDefaultPasswordlessRegistrationMessageTextRequest;
                fromPartial(object: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextRequest>): SetDefaultPasswordlessRegistrationMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultPasswordlessRegistrationMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordlessRegistrationMessageTextResponse;
                fromJSON(object: any): SetDefaultPasswordlessRegistrationMessageTextResponse;
                toJSON(message: SetDefaultPasswordlessRegistrationMessageTextResponse): unknown;
                create(base?: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextResponse>): SetDefaultPasswordlessRegistrationMessageTextResponse;
                fromPartial(object: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextResponse>): SetDefaultPasswordlessRegistrationMessageTextResponse;
            };
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
        readonly setDefaultPasswordChangeMessageText: {
            readonly name: "SetDefaultPasswordChangeMessageText";
            readonly requestType: {
                encode(message: SetDefaultPasswordChangeMessageTextRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordChangeMessageTextRequest;
                fromJSON(object: any): SetDefaultPasswordChangeMessageTextRequest;
                toJSON(message: SetDefaultPasswordChangeMessageTextRequest): unknown;
                create(base?: DeepPartial<SetDefaultPasswordChangeMessageTextRequest>): SetDefaultPasswordChangeMessageTextRequest;
                fromPartial(object: DeepPartial<SetDefaultPasswordChangeMessageTextRequest>): SetDefaultPasswordChangeMessageTextRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetDefaultPasswordChangeMessageTextResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetDefaultPasswordChangeMessageTextResponse;
                fromJSON(object: any): SetDefaultPasswordChangeMessageTextResponse;
                toJSON(message: SetDefaultPasswordChangeMessageTextResponse): unknown;
                create(base?: DeepPartial<SetDefaultPasswordChangeMessageTextResponse>): SetDefaultPasswordChangeMessageTextResponse;
                fromPartial(object: DeepPartial<SetDefaultPasswordChangeMessageTextResponse>): SetDefaultPasswordChangeMessageTextResponse;
            };
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
        readonly listIAMMemberRoles: {
            readonly name: "ListIAMMemberRoles";
            readonly requestType: {
                encode(_: ListIAMMemberRolesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMemberRolesRequest;
                fromJSON(_: any): ListIAMMemberRolesRequest;
                toJSON(_: ListIAMMemberRolesRequest): unknown;
                create(base?: DeepPartial<ListIAMMemberRolesRequest>): ListIAMMemberRolesRequest;
                fromPartial(_: DeepPartial<ListIAMMemberRolesRequest>): ListIAMMemberRolesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListIAMMemberRolesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMemberRolesResponse;
                fromJSON(object: any): ListIAMMemberRolesResponse;
                toJSON(message: ListIAMMemberRolesResponse): unknown;
                create(base?: DeepPartial<ListIAMMemberRolesResponse>): ListIAMMemberRolesResponse;
                fromPartial(object: DeepPartial<ListIAMMemberRolesResponse>): ListIAMMemberRolesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listIAMMembers: {
            readonly name: "ListIAMMembers";
            readonly requestType: {
                encode(message: ListIAMMembersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersRequest;
                fromJSON(object: any): ListIAMMembersRequest;
                toJSON(message: ListIAMMembersRequest): unknown;
                create(base?: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest;
                fromPartial(object: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListIAMMembersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersResponse;
                fromJSON(object: any): ListIAMMembersResponse;
                toJSON(message: ListIAMMembersResponse): unknown;
                create(base?: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse;
                fromPartial(object: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse;
            };
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
         * Adds a user to the membership list of ZITADEL with the given roles
         * undefined roles will be dropped
         */
        readonly addIAMMember: {
            readonly name: "AddIAMMember";
            readonly requestType: {
                encode(message: AddIAMMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddIAMMemberRequest;
                fromJSON(object: any): AddIAMMemberRequest;
                toJSON(message: AddIAMMemberRequest): unknown;
                create(base?: DeepPartial<AddIAMMemberRequest>): AddIAMMemberRequest;
                fromPartial(object: DeepPartial<AddIAMMemberRequest>): AddIAMMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddIAMMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddIAMMemberResponse;
                fromJSON(object: any): AddIAMMemberResponse;
                toJSON(message: AddIAMMemberResponse): unknown;
                create(base?: DeepPartial<AddIAMMemberResponse>): AddIAMMemberResponse;
                fromPartial(object: DeepPartial<AddIAMMemberResponse>): AddIAMMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateIAMMember: {
            readonly name: "UpdateIAMMember";
            readonly requestType: {
                encode(message: UpdateIAMMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIAMMemberRequest;
                fromJSON(object: any): UpdateIAMMemberRequest;
                toJSON(message: UpdateIAMMemberRequest): unknown;
                create(base?: DeepPartial<UpdateIAMMemberRequest>): UpdateIAMMemberRequest;
                fromPartial(object: DeepPartial<UpdateIAMMemberRequest>): UpdateIAMMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateIAMMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIAMMemberResponse;
                fromJSON(object: any): UpdateIAMMemberResponse;
                toJSON(message: UpdateIAMMemberResponse): unknown;
                create(base?: DeepPartial<UpdateIAMMemberResponse>): UpdateIAMMemberResponse;
                fromPartial(object: DeepPartial<UpdateIAMMemberResponse>): UpdateIAMMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeIAMMember: {
            readonly name: "RemoveIAMMember";
            readonly requestType: {
                encode(message: RemoveIAMMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIAMMemberRequest;
                fromJSON(object: any): RemoveIAMMemberRequest;
                toJSON(message: RemoveIAMMemberRequest): unknown;
                create(base?: DeepPartial<RemoveIAMMemberRequest>): RemoveIAMMemberRequest;
                fromPartial(object: DeepPartial<RemoveIAMMemberRequest>): RemoveIAMMemberRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveIAMMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveIAMMemberResponse;
                fromJSON(object: any): RemoveIAMMemberResponse;
                toJSON(message: RemoveIAMMemberResponse): unknown;
                create(base?: DeepPartial<RemoveIAMMemberResponse>): RemoveIAMMemberResponse;
                fromPartial(object: DeepPartial<RemoveIAMMemberResponse>): RemoveIAMMemberResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listViews: {
            readonly name: "ListViews";
            readonly requestType: {
                encode(_: ListViewsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsRequest;
                fromJSON(_: any): ListViewsRequest;
                toJSON(_: ListViewsRequest): unknown;
                create(base?: DeepPartial<ListViewsRequest>): ListViewsRequest;
                fromPartial(_: DeepPartial<ListViewsRequest>): ListViewsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListViewsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsResponse;
                fromJSON(object: any): ListViewsResponse;
                toJSON(message: ListViewsResponse): unknown;
                create(base?: DeepPartial<ListViewsResponse>): ListViewsResponse;
                fromPartial(object: DeepPartial<ListViewsResponse>): ListViewsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listFailedEvents: {
            readonly name: "ListFailedEvents";
            readonly requestType: {
                encode(_: ListFailedEventsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsRequest;
                fromJSON(_: any): ListFailedEventsRequest;
                toJSON(_: ListFailedEventsRequest): unknown;
                create(base?: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest;
                fromPartial(_: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListFailedEventsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsResponse;
                fromJSON(object: any): ListFailedEventsResponse;
                toJSON(message: ListFailedEventsResponse): unknown;
                create(base?: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse;
                fromPartial(object: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeFailedEvent: {
            readonly name: "RemoveFailedEvent";
            readonly requestType: {
                encode(message: RemoveFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventRequest;
                fromJSON(object: any): RemoveFailedEventRequest;
                toJSON(message: RemoveFailedEventRequest): unknown;
                create(base?: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest;
                fromPartial(object: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: RemoveFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventResponse;
                fromJSON(_: any): RemoveFailedEventResponse;
                toJSON(_: RemoveFailedEventResponse): unknown;
                create(base?: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse;
                fromPartial(_: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Imports data into an instance and creates different objects */
        readonly importData: {
            readonly name: "ImportData";
            readonly requestType: {
                encode(message: ImportDataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataRequest;
                fromJSON(object: any): ImportDataRequest;
                toJSON(message: ImportDataRequest): unknown;
                create(base?: DeepPartial<ImportDataRequest>): ImportDataRequest;
                fromPartial(object: DeepPartial<ImportDataRequest>): ImportDataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ImportDataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataResponse;
                fromJSON(object: any): ImportDataResponse;
                toJSON(message: ImportDataResponse): unknown;
                create(base?: DeepPartial<ImportDataResponse>): ImportDataResponse;
                fromPartial(object: DeepPartial<ImportDataResponse>): ImportDataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly exportData: {
            readonly name: "ExportData";
            readonly requestType: {
                encode(message: ExportDataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataRequest;
                fromJSON(object: any): ExportDataRequest;
                toJSON(message: ExportDataRequest): unknown;
                create(base?: DeepPartial<ExportDataRequest>): ExportDataRequest;
                fromPartial(object: DeepPartial<ExportDataRequest>): ExportDataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ExportDataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataResponse;
                fromJSON(object: any): ExportDataResponse;
                toJSON(message: ExportDataResponse): unknown;
                create(base?: DeepPartial<ExportDataResponse>): ExportDataResponse;
                fromPartial(object: DeepPartial<ExportDataResponse>): ExportDataResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listEventTypes: {
            readonly name: "ListEventTypes";
            readonly requestType: {
                encode(_: ListEventTypesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListEventTypesRequest;
                fromJSON(_: any): ListEventTypesRequest;
                toJSON(_: ListEventTypesRequest): unknown;
                create(base?: DeepPartial<ListEventTypesRequest>): ListEventTypesRequest;
                fromPartial(_: DeepPartial<ListEventTypesRequest>): ListEventTypesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListEventTypesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListEventTypesResponse;
                fromJSON(object: any): ListEventTypesResponse;
                toJSON(message: ListEventTypesResponse): unknown;
                create(base?: DeepPartial<ListEventTypesResponse>): ListEventTypesResponse;
                fromPartial(object: DeepPartial<ListEventTypesResponse>): ListEventTypesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listEvents: {
            readonly name: "ListEvents";
            readonly requestType: {
                encode(message: ListEventsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListEventsRequest;
                fromJSON(object: any): ListEventsRequest;
                toJSON(message: ListEventsRequest): unknown;
                create(base?: DeepPartial<ListEventsRequest>): ListEventsRequest;
                fromPartial(object: DeepPartial<ListEventsRequest>): ListEventsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListEventsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListEventsResponse;
                fromJSON(object: any): ListEventsResponse;
                toJSON(message: ListEventsResponse): unknown;
                create(base?: DeepPartial<ListEventsResponse>): ListEventsResponse;
                fromPartial(object: DeepPartial<ListEventsResponse>): ListEventsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAggregateTypes: {
            readonly name: "ListAggregateTypes";
            readonly requestType: {
                encode(_: ListAggregateTypesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAggregateTypesRequest;
                fromJSON(_: any): ListAggregateTypesRequest;
                toJSON(_: ListAggregateTypesRequest): unknown;
                create(base?: DeepPartial<ListAggregateTypesRequest>): ListAggregateTypesRequest;
                fromPartial(_: DeepPartial<ListAggregateTypesRequest>): ListAggregateTypesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListAggregateTypesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAggregateTypesResponse;
                fromJSON(object: any): ListAggregateTypesResponse;
                toJSON(message: ListAggregateTypesResponse): unknown;
                create(base?: DeepPartial<ListAggregateTypesResponse>): ListAggregateTypesResponse;
                fromPartial(object: DeepPartial<ListAggregateTypesResponse>): ListAggregateTypesResponse;
            };
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
         * Activates the "LoginDefaultOrg" feature by setting the flag to "true"
         * This is irreversible!
         * Once activated, the login UI will use the settings of the default org (and not from the instance) if not organization context is set
         */
        readonly activateFeatureLoginDefaultOrg: {
            readonly name: "ActivateFeatureLoginDefaultOrg";
            readonly requestType: {
                encode(_: ActivateFeatureLoginDefaultOrgRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ActivateFeatureLoginDefaultOrgRequest;
                fromJSON(_: any): ActivateFeatureLoginDefaultOrgRequest;
                toJSON(_: ActivateFeatureLoginDefaultOrgRequest): unknown;
                create(base?: DeepPartial<ActivateFeatureLoginDefaultOrgRequest>): ActivateFeatureLoginDefaultOrgRequest;
                fromPartial(_: DeepPartial<ActivateFeatureLoginDefaultOrgRequest>): ActivateFeatureLoginDefaultOrgRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ActivateFeatureLoginDefaultOrgResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ActivateFeatureLoginDefaultOrgResponse;
                fromJSON(object: any): ActivateFeatureLoginDefaultOrgResponse;
                toJSON(message: ActivateFeatureLoginDefaultOrgResponse): unknown;
                create(base?: DeepPartial<ActivateFeatureLoginDefaultOrgResponse>): ActivateFeatureLoginDefaultOrgResponse;
                fromPartial(object: DeepPartial<ActivateFeatureLoginDefaultOrgResponse>): ActivateFeatureLoginDefaultOrgResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMilestones: {
            readonly name: "ListMilestones";
            readonly requestType: {
                encode(message: ListMilestonesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMilestonesRequest;
                fromJSON(object: any): ListMilestonesRequest;
                toJSON(message: ListMilestonesRequest): unknown;
                create(base?: DeepPartial<ListMilestonesRequest>): ListMilestonesRequest;
                fromPartial(object: DeepPartial<ListMilestonesRequest>): ListMilestonesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMilestonesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMilestonesResponse;
                fromJSON(object: any): ListMilestonesResponse;
                toJSON(message: ListMilestonesResponse): unknown;
                create(base?: DeepPartial<ListMilestonesResponse>): ListMilestonesResponse;
                fromPartial(object: DeepPartial<ListMilestonesResponse>): ListMilestonesResponse;
            };
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
export interface AdminServiceImplementation<CallContextExt = {}> {
    healthz(request: HealthzRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HealthzResponse>>;
    getSupportedLanguages(request: GetSupportedLanguagesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSupportedLanguagesResponse>>;
    setDefaultLanguage(request: SetDefaultLanguageRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultLanguageResponse>>;
    getDefaultLanguage(request: GetDefaultLanguageRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLanguageResponse>>;
    getMyInstance(request: GetMyInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyInstanceResponse>>;
    listInstanceDomains(request: ListInstanceDomainsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListInstanceDomainsResponse>>;
    listSecretGenerators(request: ListSecretGeneratorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListSecretGeneratorsResponse>>;
    getSecretGenerator(request: GetSecretGeneratorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSecretGeneratorResponse>>;
    updateSecretGenerator(request: UpdateSecretGeneratorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSecretGeneratorResponse>>;
    getSMTPConfig(request: GetSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSMTPConfigResponse>>;
    addSMTPConfig(request: AddSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSMTPConfigResponse>>;
    updateSMTPConfig(request: UpdateSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSMTPConfigResponse>>;
    updateSMTPConfigPassword(request: UpdateSMTPConfigPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSMTPConfigPasswordResponse>>;
    removeSMTPConfig(request: RemoveSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveSMTPConfigResponse>>;
    listSMSProviders(request: ListSMSProvidersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListSMSProvidersResponse>>;
    getSMSProvider(request: GetSMSProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSMSProviderResponse>>;
    addSMSProviderTwilio(request: AddSMSProviderTwilioRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSMSProviderTwilioResponse>>;
    updateSMSProviderTwilio(request: UpdateSMSProviderTwilioRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSMSProviderTwilioResponse>>;
    updateSMSProviderTwilioToken(request: UpdateSMSProviderTwilioTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSMSProviderTwilioTokenResponse>>;
    activateSMSProvider(request: ActivateSMSProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateSMSProviderResponse>>;
    deactivateSMSProvider(request: DeactivateSMSProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateSMSProviderResponse>>;
    removeSMSProvider(request: RemoveSMSProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveSMSProviderResponse>>;
    getOIDCSettings(request: GetOIDCSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOIDCSettingsResponse>>;
    addOIDCSettings(request: AddOIDCSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOIDCSettingsResponse>>;
    updateOIDCSettings(request: UpdateOIDCSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOIDCSettingsResponse>>;
    getFileSystemNotificationProvider(request: GetFileSystemNotificationProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetFileSystemNotificationProviderResponse>>;
    getLogNotificationProvider(request: GetLogNotificationProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLogNotificationProviderResponse>>;
    getSecurityPolicy(request: GetSecurityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSecurityPolicyResponse>>;
    setSecurityPolicy(request: SetSecurityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetSecurityPolicyResponse>>;
    getOrgByID(request: GetOrgByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgByIDResponse>>;
    isOrgUnique(request: IsOrgUniqueRequest, context: CallContext & CallContextExt): Promise<DeepPartial<IsOrgUniqueResponse>>;
    setDefaultOrg(request: SetDefaultOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultOrgResponse>>;
    getDefaultOrg(request: GetDefaultOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultOrgResponse>>;
    listOrgs(request: ListOrgsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgsResponse>>;
    setUpOrg(request: SetUpOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetUpOrgResponse>>;
    removeOrg(request: RemoveOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgResponse>>;
    getIDPByID(request: GetIDPByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetIDPByIDResponse>>;
    listIDPs(request: ListIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListIDPsResponse>>;
    addOIDCIDP(request: AddOIDCIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOIDCIDPResponse>>;
    addJWTIDP(request: AddJWTIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddJWTIDPResponse>>;
    updateIDP(request: UpdateIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateIDPResponse>>;
    deactivateIDP(request: DeactivateIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateIDPResponse>>;
    reactivateIDP(request: ReactivateIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateIDPResponse>>;
    removeIDP(request: RemoveIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveIDPResponse>>;
    updateIDPOIDCConfig(request: UpdateIDPOIDCConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateIDPOIDCConfigResponse>>;
    updateIDPJWTConfig(request: UpdateIDPJWTConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateIDPJWTConfigResponse>>;
    /**
     * Returns all identity providers, which match the query
     * Limit should always be set, there is a default limit set by the service
     */
    listProviders(request: ListProvidersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProvidersResponse>>;
    /** Returns an identity provider of the instance */
    getProviderByID(request: GetProviderByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetProviderByIDResponse>>;
    /** Add a new OAuth2 identity provider on the instance */
    addGenericOAuthProvider(request: AddGenericOAuthProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGenericOAuthProviderResponse>>;
    /** Change an existing OAuth2 identity provider on the instance */
    updateGenericOAuthProvider(request: UpdateGenericOAuthProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGenericOAuthProviderResponse>>;
    /** Add a new OIDC identity provider on the instance */
    addGenericOIDCProvider(request: AddGenericOIDCProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGenericOIDCProviderResponse>>;
    /** Change an existing OIDC identity provider on the instance */
    updateGenericOIDCProvider(request: UpdateGenericOIDCProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGenericOIDCProviderResponse>>;
    /** Migrate an existing OIDC identity provider on the instance */
    migrateGenericOIDCProvider(request: MigrateGenericOIDCProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<MigrateGenericOIDCProviderResponse>>;
    /** Add a new JWT identity provider on the instance */
    addJWTProvider(request: AddJWTProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddJWTProviderResponse>>;
    /** Change an existing JWT identity provider on the instance */
    updateJWTProvider(request: UpdateJWTProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateJWTProviderResponse>>;
    /** Add a new Azure AD identity provider on the instance */
    addAzureADProvider(request: AddAzureADProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAzureADProviderResponse>>;
    /** Change an existing Azure AD identity provider on the instance */
    updateAzureADProvider(request: UpdateAzureADProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAzureADProviderResponse>>;
    /** Add a new GitHub identity provider on the instance */
    addGitHubProvider(request: AddGitHubProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitHubProviderResponse>>;
    /** Change an existing GitHub identity provider on the instance */
    updateGitHubProvider(request: UpdateGitHubProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitHubProviderResponse>>;
    /** Add a new GitHub Enterprise Server identity provider on the instance */
    addGitHubEnterpriseServerProvider(request: AddGitHubEnterpriseServerProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitHubEnterpriseServerProviderResponse>>;
    /** Change an existing GitHub Enterprise Server identity provider on the instance */
    updateGitHubEnterpriseServerProvider(request: UpdateGitHubEnterpriseServerProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitHubEnterpriseServerProviderResponse>>;
    /** Add a new GitLab identity provider on the instance */
    addGitLabProvider(request: AddGitLabProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitLabProviderResponse>>;
    /** Change an existing GitLab identity provider on the instance */
    updateGitLabProvider(request: UpdateGitLabProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitLabProviderResponse>>;
    /** Add a new self hosted GitLab identity provider on the instance */
    addGitLabSelfHostedProvider(request: AddGitLabSelfHostedProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitLabSelfHostedProviderResponse>>;
    /** Change an existing self hosted GitLab identity provider on the instance */
    updateGitLabSelfHostedProvider(request: UpdateGitLabSelfHostedProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitLabSelfHostedProviderResponse>>;
    /** Add a new Google identity provider on the instance */
    addGoogleProvider(request: AddGoogleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGoogleProviderResponse>>;
    /** Change an existing Google identity provider on the instance */
    updateGoogleProvider(request: UpdateGoogleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGoogleProviderResponse>>;
    /** Add a new LDAP identity provider on the instance */
    addLDAPProvider(request: AddLDAPProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddLDAPProviderResponse>>;
    /** Change an existing LDAP identity provider on the instance */
    updateLDAPProvider(request: UpdateLDAPProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateLDAPProviderResponse>>;
    /** Add a new Apple identity provider on the instance */
    addAppleProvider(request: AddAppleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAppleProviderResponse>>;
    /** Change an existing Apple identity provider on the instance */
    updateAppleProvider(request: UpdateAppleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAppleProviderResponse>>;
    /** Add a new SAML identity provider on the instance */
    addSAMLProvider(request: AddSAMLProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSAMLProviderResponse>>;
    /** Change an existing SAML identity provider on the instance */
    updateSAMLProvider(request: UpdateSAMLProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSAMLProviderResponse>>;
    /** Regenerate certificate for an existing SAML identity provider in the organization */
    regenerateSAMLProviderCertificate(request: RegenerateSAMLProviderCertificateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegenerateSAMLProviderCertificateResponse>>;
    /**
     * Remove an identity provider
     * Will remove all linked providers of this configuration on the users
     */
    deleteProvider(request: DeleteProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteProviderResponse>>;
    getOrgIAMPolicy(request: GetOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgIAMPolicyResponse>>;
    updateOrgIAMPolicy(request: UpdateOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgIAMPolicyResponse>>;
    getCustomOrgIAMPolicy(request: GetCustomOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomOrgIAMPolicyResponse>>;
    addCustomOrgIAMPolicy(request: AddCustomOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomOrgIAMPolicyResponse>>;
    updateCustomOrgIAMPolicy(request: UpdateCustomOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomOrgIAMPolicyResponse>>;
    resetCustomOrgIAMPolicyToDefault(request: ResetCustomOrgIAMPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomOrgIAMPolicyToDefaultResponse>>;
    getDomainPolicy(request: GetDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDomainPolicyResponse>>;
    updateDomainPolicy(request: UpdateDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateDomainPolicyResponse>>;
    getCustomDomainPolicy(request: GetCustomDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomDomainPolicyResponse>>;
    addCustomDomainPolicy(request: AddCustomDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomDomainPolicyResponse>>;
    updateCustomDomainPolicy(request: UpdateCustomDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomDomainPolicyResponse>>;
    resetCustomDomainPolicyToDefault(request: ResetCustomDomainPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomDomainPolicyToDefaultResponse>>;
    getLabelPolicy(request: GetLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLabelPolicyResponse>>;
    getPreviewLabelPolicy(request: GetPreviewLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPreviewLabelPolicyResponse>>;
    updateLabelPolicy(request: UpdateLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateLabelPolicyResponse>>;
    activateLabelPolicy(request: ActivateLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateLabelPolicyResponse>>;
    removeLabelPolicyLogo(request: RemoveLabelPolicyLogoRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyLogoResponse>>;
    removeLabelPolicyLogoDark(request: RemoveLabelPolicyLogoDarkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyLogoDarkResponse>>;
    removeLabelPolicyIcon(request: RemoveLabelPolicyIconRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyIconResponse>>;
    removeLabelPolicyIconDark(request: RemoveLabelPolicyIconDarkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyIconDarkResponse>>;
    removeLabelPolicyFont(request: RemoveLabelPolicyFontRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyFontResponse>>;
    getLoginPolicy(request: GetLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLoginPolicyResponse>>;
    updateLoginPolicy(request: UpdateLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateLoginPolicyResponse>>;
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
    updatePasswordComplexityPolicy(request: UpdatePasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdatePasswordComplexityPolicyResponse>>;
    getPasswordAgePolicy(request: GetPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPasswordAgePolicyResponse>>;
    updatePasswordAgePolicy(request: UpdatePasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdatePasswordAgePolicyResponse>>;
    getLockoutPolicy(request: GetLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLockoutPolicyResponse>>;
    updateLockoutPolicy(request: UpdateLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateLockoutPolicyResponse>>;
    getPrivacyPolicy(request: GetPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPrivacyPolicyResponse>>;
    updatePrivacyPolicy(request: UpdatePrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdatePrivacyPolicyResponse>>;
    addNotificationPolicy(request: AddNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddNotificationPolicyResponse>>;
    getNotificationPolicy(request: GetNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotificationPolicyResponse>>;
    updateNotificationPolicy(request: UpdateNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateNotificationPolicyResponse>>;
    getDefaultInitMessageText(request: GetDefaultInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultInitMessageTextResponse>>;
    getCustomInitMessageText(request: GetCustomInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomInitMessageTextResponse>>;
    setDefaultInitMessageText(request: SetDefaultInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultInitMessageTextResponse>>;
    resetCustomInitMessageTextToDefault(request: ResetCustomInitMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomInitMessageTextToDefaultResponse>>;
    getDefaultPasswordResetMessageText(request: GetDefaultPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordResetMessageTextResponse>>;
    getCustomPasswordResetMessageText(request: GetCustomPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordResetMessageTextResponse>>;
    setDefaultPasswordResetMessageText(request: SetDefaultPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultPasswordResetMessageTextResponse>>;
    resetCustomPasswordResetMessageTextToDefault(request: ResetCustomPasswordResetMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordResetMessageTextToDefaultResponse>>;
    getDefaultVerifyEmailMessageText(request: GetDefaultVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyEmailMessageTextResponse>>;
    getCustomVerifyEmailMessageText(request: GetCustomVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyEmailMessageTextResponse>>;
    setDefaultVerifyEmailMessageText(request: SetDefaultVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultVerifyEmailMessageTextResponse>>;
    resetCustomVerifyEmailMessageTextToDefault(request: ResetCustomVerifyEmailMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultResponse>>;
    getDefaultVerifyPhoneMessageText(request: GetDefaultVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyPhoneMessageTextResponse>>;
    getCustomVerifyPhoneMessageText(request: GetCustomVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyPhoneMessageTextResponse>>;
    setDefaultVerifyPhoneMessageText(request: SetDefaultVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultVerifyPhoneMessageTextResponse>>;
    resetCustomVerifyPhoneMessageTextToDefault(request: ResetCustomVerifyPhoneMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultResponse>>;
    getDefaultVerifySMSOTPMessageText(request: GetDefaultVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifySMSOTPMessageTextResponse>>;
    getCustomVerifySMSOTPMessageText(request: GetCustomVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifySMSOTPMessageTextResponse>>;
    setDefaultVerifySMSOTPMessageText(request: SetDefaultVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultVerifySMSOTPMessageTextResponse>>;
    resetCustomVerifySMSOTPMessageTextToDefault(request: ResetCustomVerifySMSOTPMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>>;
    getDefaultVerifyEmailOTPMessageText(request: GetDefaultVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyEmailOTPMessageTextResponse>>;
    getCustomVerifyEmailOTPMessageText(request: GetCustomVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyEmailOTPMessageTextResponse>>;
    setDefaultVerifyEmailOTPMessageText(request: SetDefaultVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultVerifyEmailOTPMessageTextResponse>>;
    resetCustomVerifyEmailOTPMessageTextToDefault(request: ResetCustomVerifyEmailOTPMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>>;
    getDefaultDomainClaimedMessageText(request: GetDefaultDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultDomainClaimedMessageTextResponse>>;
    getCustomDomainClaimedMessageText(request: GetCustomDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomDomainClaimedMessageTextResponse>>;
    setDefaultDomainClaimedMessageText(request: SetDefaultDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultDomainClaimedMessageTextResponse>>;
    resetCustomDomainClaimedMessageTextToDefault(request: ResetCustomDomainClaimedMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultResponse>>;
    getDefaultPasswordlessRegistrationMessageText(request: GetDefaultPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordlessRegistrationMessageTextResponse>>;
    getCustomPasswordlessRegistrationMessageText(request: GetCustomPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordlessRegistrationMessageTextResponse>>;
    setDefaultPasswordlessRegistrationMessageText(request: SetDefaultPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultPasswordlessRegistrationMessageTextResponse>>;
    resetCustomPasswordlessRegistrationMessageTextToDefault(request: ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>>;
    getDefaultPasswordChangeMessageText(request: GetDefaultPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordChangeMessageTextResponse>>;
    getCustomPasswordChangeMessageText(request: GetCustomPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordChangeMessageTextResponse>>;
    setDefaultPasswordChangeMessageText(request: SetDefaultPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultPasswordChangeMessageTextResponse>>;
    resetCustomPasswordChangeMessageTextToDefault(request: ResetCustomPasswordChangeMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultResponse>>;
    getDefaultLoginTexts(request: GetDefaultLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLoginTextsResponse>>;
    getCustomLoginTexts(request: GetCustomLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomLoginTextsResponse>>;
    setCustomLoginText(request: SetCustomLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomLoginTextsResponse>>;
    resetCustomLoginTextToDefault(request: ResetCustomLoginTextsToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomLoginTextsToDefaultResponse>>;
    listIAMMemberRoles(request: ListIAMMemberRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListIAMMemberRolesResponse>>;
    listIAMMembers(request: ListIAMMembersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListIAMMembersResponse>>;
    /**
     * Adds a user to the membership list of ZITADEL with the given roles
     * undefined roles will be dropped
     */
    addIAMMember(request: AddIAMMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIAMMemberResponse>>;
    updateIAMMember(request: UpdateIAMMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateIAMMemberResponse>>;
    removeIAMMember(request: RemoveIAMMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveIAMMemberResponse>>;
    listViews(request: ListViewsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListViewsResponse>>;
    listFailedEvents(request: ListFailedEventsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFailedEventsResponse>>;
    removeFailedEvent(request: RemoveFailedEventRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveFailedEventResponse>>;
    /** Imports data into an instance and creates different objects */
    importData(request: ImportDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ImportDataResponse>>;
    exportData(request: ExportDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ExportDataResponse>>;
    listEventTypes(request: ListEventTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListEventTypesResponse>>;
    listEvents(request: ListEventsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListEventsResponse>>;
    listAggregateTypes(request: ListAggregateTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAggregateTypesResponse>>;
    /**
     * Activates the "LoginDefaultOrg" feature by setting the flag to "true"
     * This is irreversible!
     * Once activated, the login UI will use the settings of the default org (and not from the instance) if not organization context is set
     */
    activateFeatureLoginDefaultOrg(request: ActivateFeatureLoginDefaultOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateFeatureLoginDefaultOrgResponse>>;
    listMilestones(request: ListMilestonesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMilestonesResponse>>;
}
export interface AdminServiceClient<CallOptionsExt = {}> {
    healthz(request: DeepPartial<HealthzRequest>, options?: CallOptions & CallOptionsExt): Promise<HealthzResponse>;
    getSupportedLanguages(request: DeepPartial<GetSupportedLanguagesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSupportedLanguagesResponse>;
    setDefaultLanguage(request: DeepPartial<SetDefaultLanguageRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultLanguageResponse>;
    getDefaultLanguage(request: DeepPartial<GetDefaultLanguageRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLanguageResponse>;
    getMyInstance(request: DeepPartial<GetMyInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyInstanceResponse>;
    listInstanceDomains(request: DeepPartial<ListInstanceDomainsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListInstanceDomainsResponse>;
    listSecretGenerators(request: DeepPartial<ListSecretGeneratorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListSecretGeneratorsResponse>;
    getSecretGenerator(request: DeepPartial<GetSecretGeneratorRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSecretGeneratorResponse>;
    updateSecretGenerator(request: DeepPartial<UpdateSecretGeneratorRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSecretGeneratorResponse>;
    getSMTPConfig(request: DeepPartial<GetSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSMTPConfigResponse>;
    addSMTPConfig(request: DeepPartial<AddSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSMTPConfigResponse>;
    updateSMTPConfig(request: DeepPartial<UpdateSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSMTPConfigResponse>;
    updateSMTPConfigPassword(request: DeepPartial<UpdateSMTPConfigPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSMTPConfigPasswordResponse>;
    removeSMTPConfig(request: DeepPartial<RemoveSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveSMTPConfigResponse>;
    listSMSProviders(request: DeepPartial<ListSMSProvidersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListSMSProvidersResponse>;
    getSMSProvider(request: DeepPartial<GetSMSProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSMSProviderResponse>;
    addSMSProviderTwilio(request: DeepPartial<AddSMSProviderTwilioRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSMSProviderTwilioResponse>;
    updateSMSProviderTwilio(request: DeepPartial<UpdateSMSProviderTwilioRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSMSProviderTwilioResponse>;
    updateSMSProviderTwilioToken(request: DeepPartial<UpdateSMSProviderTwilioTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSMSProviderTwilioTokenResponse>;
    activateSMSProvider(request: DeepPartial<ActivateSMSProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateSMSProviderResponse>;
    deactivateSMSProvider(request: DeepPartial<DeactivateSMSProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateSMSProviderResponse>;
    removeSMSProvider(request: DeepPartial<RemoveSMSProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveSMSProviderResponse>;
    getOIDCSettings(request: DeepPartial<GetOIDCSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOIDCSettingsResponse>;
    addOIDCSettings(request: DeepPartial<AddOIDCSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOIDCSettingsResponse>;
    updateOIDCSettings(request: DeepPartial<UpdateOIDCSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOIDCSettingsResponse>;
    getFileSystemNotificationProvider(request: DeepPartial<GetFileSystemNotificationProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<GetFileSystemNotificationProviderResponse>;
    getLogNotificationProvider(request: DeepPartial<GetLogNotificationProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLogNotificationProviderResponse>;
    getSecurityPolicy(request: DeepPartial<GetSecurityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSecurityPolicyResponse>;
    setSecurityPolicy(request: DeepPartial<SetSecurityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<SetSecurityPolicyResponse>;
    getOrgByID(request: DeepPartial<GetOrgByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgByIDResponse>;
    isOrgUnique(request: DeepPartial<IsOrgUniqueRequest>, options?: CallOptions & CallOptionsExt): Promise<IsOrgUniqueResponse>;
    setDefaultOrg(request: DeepPartial<SetDefaultOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultOrgResponse>;
    getDefaultOrg(request: DeepPartial<GetDefaultOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultOrgResponse>;
    listOrgs(request: DeepPartial<ListOrgsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgsResponse>;
    setUpOrg(request: DeepPartial<SetUpOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<SetUpOrgResponse>;
    removeOrg(request: DeepPartial<RemoveOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgResponse>;
    getIDPByID(request: DeepPartial<GetIDPByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetIDPByIDResponse>;
    listIDPs(request: DeepPartial<ListIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListIDPsResponse>;
    addOIDCIDP(request: DeepPartial<AddOIDCIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOIDCIDPResponse>;
    addJWTIDP(request: DeepPartial<AddJWTIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddJWTIDPResponse>;
    updateIDP(request: DeepPartial<UpdateIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateIDPResponse>;
    deactivateIDP(request: DeepPartial<DeactivateIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateIDPResponse>;
    reactivateIDP(request: DeepPartial<ReactivateIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateIDPResponse>;
    removeIDP(request: DeepPartial<RemoveIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveIDPResponse>;
    updateIDPOIDCConfig(request: DeepPartial<UpdateIDPOIDCConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateIDPOIDCConfigResponse>;
    updateIDPJWTConfig(request: DeepPartial<UpdateIDPJWTConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateIDPJWTConfigResponse>;
    /**
     * Returns all identity providers, which match the query
     * Limit should always be set, there is a default limit set by the service
     */
    listProviders(request: DeepPartial<ListProvidersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProvidersResponse>;
    /** Returns an identity provider of the instance */
    getProviderByID(request: DeepPartial<GetProviderByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetProviderByIDResponse>;
    /** Add a new OAuth2 identity provider on the instance */
    addGenericOAuthProvider(request: DeepPartial<AddGenericOAuthProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGenericOAuthProviderResponse>;
    /** Change an existing OAuth2 identity provider on the instance */
    updateGenericOAuthProvider(request: DeepPartial<UpdateGenericOAuthProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGenericOAuthProviderResponse>;
    /** Add a new OIDC identity provider on the instance */
    addGenericOIDCProvider(request: DeepPartial<AddGenericOIDCProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGenericOIDCProviderResponse>;
    /** Change an existing OIDC identity provider on the instance */
    updateGenericOIDCProvider(request: DeepPartial<UpdateGenericOIDCProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGenericOIDCProviderResponse>;
    /** Migrate an existing OIDC identity provider on the instance */
    migrateGenericOIDCProvider(request: DeepPartial<MigrateGenericOIDCProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<MigrateGenericOIDCProviderResponse>;
    /** Add a new JWT identity provider on the instance */
    addJWTProvider(request: DeepPartial<AddJWTProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddJWTProviderResponse>;
    /** Change an existing JWT identity provider on the instance */
    updateJWTProvider(request: DeepPartial<UpdateJWTProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateJWTProviderResponse>;
    /** Add a new Azure AD identity provider on the instance */
    addAzureADProvider(request: DeepPartial<AddAzureADProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAzureADProviderResponse>;
    /** Change an existing Azure AD identity provider on the instance */
    updateAzureADProvider(request: DeepPartial<UpdateAzureADProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAzureADProviderResponse>;
    /** Add a new GitHub identity provider on the instance */
    addGitHubProvider(request: DeepPartial<AddGitHubProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitHubProviderResponse>;
    /** Change an existing GitHub identity provider on the instance */
    updateGitHubProvider(request: DeepPartial<UpdateGitHubProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitHubProviderResponse>;
    /** Add a new GitHub Enterprise Server identity provider on the instance */
    addGitHubEnterpriseServerProvider(request: DeepPartial<AddGitHubEnterpriseServerProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitHubEnterpriseServerProviderResponse>;
    /** Change an existing GitHub Enterprise Server identity provider on the instance */
    updateGitHubEnterpriseServerProvider(request: DeepPartial<UpdateGitHubEnterpriseServerProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitHubEnterpriseServerProviderResponse>;
    /** Add a new GitLab identity provider on the instance */
    addGitLabProvider(request: DeepPartial<AddGitLabProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitLabProviderResponse>;
    /** Change an existing GitLab identity provider on the instance */
    updateGitLabProvider(request: DeepPartial<UpdateGitLabProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitLabProviderResponse>;
    /** Add a new self hosted GitLab identity provider on the instance */
    addGitLabSelfHostedProvider(request: DeepPartial<AddGitLabSelfHostedProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitLabSelfHostedProviderResponse>;
    /** Change an existing self hosted GitLab identity provider on the instance */
    updateGitLabSelfHostedProvider(request: DeepPartial<UpdateGitLabSelfHostedProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitLabSelfHostedProviderResponse>;
    /** Add a new Google identity provider on the instance */
    addGoogleProvider(request: DeepPartial<AddGoogleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGoogleProviderResponse>;
    /** Change an existing Google identity provider on the instance */
    updateGoogleProvider(request: DeepPartial<UpdateGoogleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGoogleProviderResponse>;
    /** Add a new LDAP identity provider on the instance */
    addLDAPProvider(request: DeepPartial<AddLDAPProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddLDAPProviderResponse>;
    /** Change an existing LDAP identity provider on the instance */
    updateLDAPProvider(request: DeepPartial<UpdateLDAPProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateLDAPProviderResponse>;
    /** Add a new Apple identity provider on the instance */
    addAppleProvider(request: DeepPartial<AddAppleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAppleProviderResponse>;
    /** Change an existing Apple identity provider on the instance */
    updateAppleProvider(request: DeepPartial<UpdateAppleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAppleProviderResponse>;
    /** Add a new SAML identity provider on the instance */
    addSAMLProvider(request: DeepPartial<AddSAMLProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSAMLProviderResponse>;
    /** Change an existing SAML identity provider on the instance */
    updateSAMLProvider(request: DeepPartial<UpdateSAMLProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSAMLProviderResponse>;
    /** Regenerate certificate for an existing SAML identity provider in the organization */
    regenerateSAMLProviderCertificate(request: DeepPartial<RegenerateSAMLProviderCertificateRequest>, options?: CallOptions & CallOptionsExt): Promise<RegenerateSAMLProviderCertificateResponse>;
    /**
     * Remove an identity provider
     * Will remove all linked providers of this configuration on the users
     */
    deleteProvider(request: DeepPartial<DeleteProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteProviderResponse>;
    getOrgIAMPolicy(request: DeepPartial<GetOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgIAMPolicyResponse>;
    updateOrgIAMPolicy(request: DeepPartial<UpdateOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgIAMPolicyResponse>;
    getCustomOrgIAMPolicy(request: DeepPartial<GetCustomOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomOrgIAMPolicyResponse>;
    addCustomOrgIAMPolicy(request: DeepPartial<AddCustomOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomOrgIAMPolicyResponse>;
    updateCustomOrgIAMPolicy(request: DeepPartial<UpdateCustomOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomOrgIAMPolicyResponse>;
    resetCustomOrgIAMPolicyToDefault(request: DeepPartial<ResetCustomOrgIAMPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomOrgIAMPolicyToDefaultResponse>;
    getDomainPolicy(request: DeepPartial<GetDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDomainPolicyResponse>;
    updateDomainPolicy(request: DeepPartial<UpdateDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateDomainPolicyResponse>;
    getCustomDomainPolicy(request: DeepPartial<GetCustomDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomDomainPolicyResponse>;
    addCustomDomainPolicy(request: DeepPartial<AddCustomDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomDomainPolicyResponse>;
    updateCustomDomainPolicy(request: DeepPartial<UpdateCustomDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomDomainPolicyResponse>;
    resetCustomDomainPolicyToDefault(request: DeepPartial<ResetCustomDomainPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomDomainPolicyToDefaultResponse>;
    getLabelPolicy(request: DeepPartial<GetLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLabelPolicyResponse>;
    getPreviewLabelPolicy(request: DeepPartial<GetPreviewLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPreviewLabelPolicyResponse>;
    updateLabelPolicy(request: DeepPartial<UpdateLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateLabelPolicyResponse>;
    activateLabelPolicy(request: DeepPartial<ActivateLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateLabelPolicyResponse>;
    removeLabelPolicyLogo(request: DeepPartial<RemoveLabelPolicyLogoRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyLogoResponse>;
    removeLabelPolicyLogoDark(request: DeepPartial<RemoveLabelPolicyLogoDarkRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyLogoDarkResponse>;
    removeLabelPolicyIcon(request: DeepPartial<RemoveLabelPolicyIconRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyIconResponse>;
    removeLabelPolicyIconDark(request: DeepPartial<RemoveLabelPolicyIconDarkRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyIconDarkResponse>;
    removeLabelPolicyFont(request: DeepPartial<RemoveLabelPolicyFontRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyFontResponse>;
    getLoginPolicy(request: DeepPartial<GetLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLoginPolicyResponse>;
    updateLoginPolicy(request: DeepPartial<UpdateLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateLoginPolicyResponse>;
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
    updatePasswordComplexityPolicy(request: DeepPartial<UpdatePasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdatePasswordComplexityPolicyResponse>;
    getPasswordAgePolicy(request: DeepPartial<GetPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPasswordAgePolicyResponse>;
    updatePasswordAgePolicy(request: DeepPartial<UpdatePasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdatePasswordAgePolicyResponse>;
    getLockoutPolicy(request: DeepPartial<GetLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLockoutPolicyResponse>;
    updateLockoutPolicy(request: DeepPartial<UpdateLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateLockoutPolicyResponse>;
    getPrivacyPolicy(request: DeepPartial<GetPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPrivacyPolicyResponse>;
    updatePrivacyPolicy(request: DeepPartial<UpdatePrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdatePrivacyPolicyResponse>;
    addNotificationPolicy(request: DeepPartial<AddNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddNotificationPolicyResponse>;
    getNotificationPolicy(request: DeepPartial<GetNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNotificationPolicyResponse>;
    updateNotificationPolicy(request: DeepPartial<UpdateNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateNotificationPolicyResponse>;
    getDefaultInitMessageText(request: DeepPartial<GetDefaultInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultInitMessageTextResponse>;
    getCustomInitMessageText(request: DeepPartial<GetCustomInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomInitMessageTextResponse>;
    setDefaultInitMessageText(request: DeepPartial<SetDefaultInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultInitMessageTextResponse>;
    resetCustomInitMessageTextToDefault(request: DeepPartial<ResetCustomInitMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomInitMessageTextToDefaultResponse>;
    getDefaultPasswordResetMessageText(request: DeepPartial<GetDefaultPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordResetMessageTextResponse>;
    getCustomPasswordResetMessageText(request: DeepPartial<GetCustomPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordResetMessageTextResponse>;
    setDefaultPasswordResetMessageText(request: DeepPartial<SetDefaultPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultPasswordResetMessageTextResponse>;
    resetCustomPasswordResetMessageTextToDefault(request: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordResetMessageTextToDefaultResponse>;
    getDefaultVerifyEmailMessageText(request: DeepPartial<GetDefaultVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyEmailMessageTextResponse>;
    getCustomVerifyEmailMessageText(request: DeepPartial<GetCustomVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyEmailMessageTextResponse>;
    setDefaultVerifyEmailMessageText(request: DeepPartial<SetDefaultVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultVerifyEmailMessageTextResponse>;
    resetCustomVerifyEmailMessageTextToDefault(request: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyEmailMessageTextToDefaultResponse>;
    getDefaultVerifyPhoneMessageText(request: DeepPartial<GetDefaultVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyPhoneMessageTextResponse>;
    getCustomVerifyPhoneMessageText(request: DeepPartial<GetCustomVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyPhoneMessageTextResponse>;
    setDefaultVerifyPhoneMessageText(request: DeepPartial<SetDefaultVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultVerifyPhoneMessageTextResponse>;
    resetCustomVerifyPhoneMessageTextToDefault(request: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyPhoneMessageTextToDefaultResponse>;
    getDefaultVerifySMSOTPMessageText(request: DeepPartial<GetDefaultVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifySMSOTPMessageTextResponse>;
    getCustomVerifySMSOTPMessageText(request: DeepPartial<GetCustomVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifySMSOTPMessageTextResponse>;
    setDefaultVerifySMSOTPMessageText(request: DeepPartial<SetDefaultVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultVerifySMSOTPMessageTextResponse>;
    resetCustomVerifySMSOTPMessageTextToDefault(request: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>;
    getDefaultVerifyEmailOTPMessageText(request: DeepPartial<GetDefaultVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyEmailOTPMessageTextResponse>;
    getCustomVerifyEmailOTPMessageText(request: DeepPartial<GetCustomVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyEmailOTPMessageTextResponse>;
    setDefaultVerifyEmailOTPMessageText(request: DeepPartial<SetDefaultVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultVerifyEmailOTPMessageTextResponse>;
    resetCustomVerifyEmailOTPMessageTextToDefault(request: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>;
    getDefaultDomainClaimedMessageText(request: DeepPartial<GetDefaultDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultDomainClaimedMessageTextResponse>;
    getCustomDomainClaimedMessageText(request: DeepPartial<GetCustomDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomDomainClaimedMessageTextResponse>;
    setDefaultDomainClaimedMessageText(request: DeepPartial<SetDefaultDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultDomainClaimedMessageTextResponse>;
    resetCustomDomainClaimedMessageTextToDefault(request: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomDomainClaimedMessageTextToDefaultResponse>;
    getDefaultPasswordlessRegistrationMessageText(request: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordlessRegistrationMessageTextResponse>;
    getCustomPasswordlessRegistrationMessageText(request: DeepPartial<GetCustomPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordlessRegistrationMessageTextResponse>;
    setDefaultPasswordlessRegistrationMessageText(request: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultPasswordlessRegistrationMessageTextResponse>;
    resetCustomPasswordlessRegistrationMessageTextToDefault(request: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>;
    getDefaultPasswordChangeMessageText(request: DeepPartial<GetDefaultPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordChangeMessageTextResponse>;
    getCustomPasswordChangeMessageText(request: DeepPartial<GetCustomPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordChangeMessageTextResponse>;
    setDefaultPasswordChangeMessageText(request: DeepPartial<SetDefaultPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultPasswordChangeMessageTextResponse>;
    resetCustomPasswordChangeMessageTextToDefault(request: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordChangeMessageTextToDefaultResponse>;
    getDefaultLoginTexts(request: DeepPartial<GetDefaultLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLoginTextsResponse>;
    getCustomLoginTexts(request: DeepPartial<GetCustomLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomLoginTextsResponse>;
    setCustomLoginText(request: DeepPartial<SetCustomLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomLoginTextsResponse>;
    resetCustomLoginTextToDefault(request: DeepPartial<ResetCustomLoginTextsToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomLoginTextsToDefaultResponse>;
    listIAMMemberRoles(request: DeepPartial<ListIAMMemberRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListIAMMemberRolesResponse>;
    listIAMMembers(request: DeepPartial<ListIAMMembersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListIAMMembersResponse>;
    /**
     * Adds a user to the membership list of ZITADEL with the given roles
     * undefined roles will be dropped
     */
    addIAMMember(request: DeepPartial<AddIAMMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIAMMemberResponse>;
    updateIAMMember(request: DeepPartial<UpdateIAMMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateIAMMemberResponse>;
    removeIAMMember(request: DeepPartial<RemoveIAMMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveIAMMemberResponse>;
    listViews(request: DeepPartial<ListViewsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListViewsResponse>;
    listFailedEvents(request: DeepPartial<ListFailedEventsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFailedEventsResponse>;
    removeFailedEvent(request: DeepPartial<RemoveFailedEventRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveFailedEventResponse>;
    /** Imports data into an instance and creates different objects */
    importData(request: DeepPartial<ImportDataRequest>, options?: CallOptions & CallOptionsExt): Promise<ImportDataResponse>;
    exportData(request: DeepPartial<ExportDataRequest>, options?: CallOptions & CallOptionsExt): Promise<ExportDataResponse>;
    listEventTypes(request: DeepPartial<ListEventTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListEventTypesResponse>;
    listEvents(request: DeepPartial<ListEventsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListEventsResponse>;
    listAggregateTypes(request: DeepPartial<ListAggregateTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAggregateTypesResponse>;
    /**
     * Activates the "LoginDefaultOrg" feature by setting the flag to "true"
     * This is irreversible!
     * Once activated, the login UI will use the settings of the default org (and not from the instance) if not organization context is set
     */
    activateFeatureLoginDefaultOrg(request: DeepPartial<ActivateFeatureLoginDefaultOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateFeatureLoginDefaultOrgResponse>;
    listMilestones(request: DeepPartial<ListMilestonesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMilestonesResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
