/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { ObjectDetails, TextQueryMethod } from "./object";
export declare const protobufPackage = "zitadel.idp.v1";
export declare enum IDPState {
    IDP_STATE_UNSPECIFIED = 0,
    IDP_STATE_ACTIVE = 1,
    IDP_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function iDPStateFromJSON(object: any): IDPState;
export declare function iDPStateToJSON(object: IDPState): string;
export declare enum IDPStylingType {
    STYLING_TYPE_UNSPECIFIED = 0,
    STYLING_TYPE_GOOGLE = 1,
    UNRECOGNIZED = -1
}
export declare function iDPStylingTypeFromJSON(object: any): IDPStylingType;
export declare function iDPStylingTypeToJSON(object: IDPStylingType): string;
/** authorization framework of the identity provider */
export declare enum IDPType {
    IDP_TYPE_UNSPECIFIED = 0,
    IDP_TYPE_OIDC = 1,
    IDP_TYPE_JWT = 3,
    UNRECOGNIZED = -1
}
export declare function iDPTypeFromJSON(object: any): IDPType;
export declare function iDPTypeToJSON(object: IDPType): string;
/** the owner of the identity provider. */
export declare enum IDPOwnerType {
    IDP_OWNER_TYPE_UNSPECIFIED = 0,
    /** IDP_OWNER_TYPE_SYSTEM - system is managed by the ZITADEL administrators */
    IDP_OWNER_TYPE_SYSTEM = 1,
    /** IDP_OWNER_TYPE_ORG - org is managed by de organization administrators */
    IDP_OWNER_TYPE_ORG = 2,
    UNRECOGNIZED = -1
}
export declare function iDPOwnerTypeFromJSON(object: any): IDPOwnerType;
export declare function iDPOwnerTypeToJSON(object: IDPOwnerType): string;
export declare enum OIDCMappingField {
    OIDC_MAPPING_FIELD_UNSPECIFIED = 0,
    OIDC_MAPPING_FIELD_PREFERRED_USERNAME = 1,
    OIDC_MAPPING_FIELD_EMAIL = 2,
    UNRECOGNIZED = -1
}
export declare function oIDCMappingFieldFromJSON(object: any): OIDCMappingField;
export declare function oIDCMappingFieldToJSON(object: OIDCMappingField): string;
export declare enum IDPFieldName {
    IDP_FIELD_NAME_UNSPECIFIED = 0,
    IDP_FIELD_NAME_NAME = 1,
    UNRECOGNIZED = -1
}
export declare function iDPFieldNameFromJSON(object: any): IDPFieldName;
export declare function iDPFieldNameToJSON(object: IDPFieldName): string;
export declare enum ProviderType {
    PROVIDER_TYPE_UNSPECIFIED = 0,
    PROVIDER_TYPE_OIDC = 1,
    PROVIDER_TYPE_JWT = 2,
    PROVIDER_TYPE_LDAP = 3,
    PROVIDER_TYPE_OAUTH = 4,
    PROVIDER_TYPE_AZURE_AD = 5,
    PROVIDER_TYPE_GITHUB = 6,
    PROVIDER_TYPE_GITHUB_ES = 7,
    PROVIDER_TYPE_GITLAB = 8,
    PROVIDER_TYPE_GITLAB_SELF_HOSTED = 9,
    PROVIDER_TYPE_GOOGLE = 10,
    PROVIDER_TYPE_APPLE = 11,
    PROVIDER_TYPE_SAML = 12,
    UNRECOGNIZED = -1
}
export declare function providerTypeFromJSON(object: any): ProviderType;
export declare function providerTypeToJSON(object: ProviderType): string;
export declare enum SAMLBinding {
    SAML_BINDING_UNSPECIFIED = 0,
    SAML_BINDING_POST = 1,
    SAML_BINDING_REDIRECT = 2,
    SAML_BINDING_ARTIFACT = 3,
    UNRECOGNIZED = -1
}
export declare function sAMLBindingFromJSON(object: any): SAMLBinding;
export declare function sAMLBindingToJSON(object: SAMLBinding): string;
export declare enum AzureADTenantType {
    AZURE_AD_TENANT_TYPE_COMMON = 0,
    AZURE_AD_TENANT_TYPE_ORGANISATIONS = 1,
    AZURE_AD_TENANT_TYPE_CONSUMERS = 2,
    UNRECOGNIZED = -1
}
export declare function azureADTenantTypeFromJSON(object: any): AzureADTenantType;
export declare function azureADTenantTypeToJSON(object: AzureADTenantType): string;
export interface IDP {
    id: string;
    details: ObjectDetails | undefined;
    state: IDPState;
    name: string;
    stylingType: IDPStylingType;
    owner: IDPOwnerType;
    oidcConfig?: OIDCConfig | undefined;
    jwtConfig?: JWTConfig | undefined;
    autoRegister: boolean;
}
export interface IDPUserLink {
    userId: string;
    idpId: string;
    idpName: string;
    providedUserId: string;
    providedUserName: string;
    idpType: IDPType;
}
export interface IDPLoginPolicyLink {
    idpId: string;
    idpName: string;
    idpType: IDPType;
}
export interface OIDCConfig {
    clientId: string;
    issuer: string;
    scopes: string[];
    displayNameMapping: OIDCMappingField;
    usernameMapping: OIDCMappingField;
}
export interface JWTConfig {
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
}
export interface IDPIDQuery {
    id: string;
}
export interface IDPNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface IDPOwnerTypeQuery {
    ownerType: IDPOwnerType;
}
export interface Provider {
    id: string;
    details: ObjectDetails | undefined;
    state: IDPState;
    name: string;
    owner: IDPOwnerType;
    type: ProviderType;
    config: ProviderConfig | undefined;
}
export interface ProviderConfig {
    options: Options | undefined;
    ldap?: LDAPConfig | undefined;
    google?: GoogleConfig | undefined;
    oauth?: OAuthConfig | undefined;
    oidc?: GenericOIDCConfig | undefined;
    jwt?: JWTConfig | undefined;
    github?: GitHubConfig | undefined;
    githubEs?: GitHubEnterpriseServerConfig | undefined;
    gitlab?: GitLabConfig | undefined;
    gitlabSelfHosted?: GitLabSelfHostedConfig | undefined;
    azureAd?: AzureADConfig | undefined;
    apple?: AppleConfig | undefined;
    saml?: SAMLConfig | undefined;
}
export interface OAuthConfig {
    clientId: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    idAttribute: string;
}
export interface GenericOIDCConfig {
    issuer: string;
    clientId: string;
    scopes: string[];
    isIdTokenMapping: boolean;
}
export interface GitHubConfig {
    clientId: string;
    scopes: string[];
}
export interface GitHubEnterpriseServerConfig {
    clientId: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
}
export interface GoogleConfig {
    clientId: string;
    scopes: string[];
}
export interface GitLabConfig {
    clientId: string;
    scopes: string[];
}
export interface GitLabSelfHostedConfig {
    issuer: string;
    clientId: string;
    scopes: string[];
}
export interface LDAPConfig {
    servers: string[];
    startTls: boolean;
    baseDn: string;
    bindDn: string;
    userBase: string;
    userObjectClasses: string[];
    userFilters: string[];
    timeout: Duration | undefined;
    attributes: LDAPAttributes | undefined;
}
export interface SAMLConfig {
    metadataXml: Buffer;
    binding: SAMLBinding;
    withSignedRequest: boolean;
}
export interface AzureADConfig {
    clientId: string;
    tenant: AzureADTenant | undefined;
    emailVerified: boolean;
    scopes: string[];
}
export interface Options {
    isLinkingAllowed: boolean;
    isCreationAllowed: boolean;
    isAutoCreation: boolean;
    isAutoUpdate: boolean;
}
export interface LDAPAttributes {
    idAttribute: string;
    firstNameAttribute: string;
    lastNameAttribute: string;
    displayNameAttribute: string;
    nickNameAttribute: string;
    preferredUsernameAttribute: string;
    emailAttribute: string;
    emailVerifiedAttribute: string;
    phoneAttribute: string;
    phoneVerifiedAttribute: string;
    preferredLanguageAttribute: string;
    avatarUrlAttribute: string;
    profileAttribute: string;
}
export interface AzureADTenant {
    tenantType?: AzureADTenantType | undefined;
    tenantId?: string | undefined;
}
export interface AppleConfig {
    clientId: string;
    teamId: string;
    keyId: string;
    scopes: string[];
}
export declare const IDP: {
    encode(message: IDP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDP;
    fromJSON(object: any): IDP;
    toJSON(message: IDP): unknown;
    create(base?: DeepPartial<IDP>): IDP;
    fromPartial(object: DeepPartial<IDP>): IDP;
};
export declare const IDPUserLink: {
    encode(message: IDPUserLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPUserLink;
    fromJSON(object: any): IDPUserLink;
    toJSON(message: IDPUserLink): unknown;
    create(base?: DeepPartial<IDPUserLink>): IDPUserLink;
    fromPartial(object: DeepPartial<IDPUserLink>): IDPUserLink;
};
export declare const IDPLoginPolicyLink: {
    encode(message: IDPLoginPolicyLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPLoginPolicyLink;
    fromJSON(object: any): IDPLoginPolicyLink;
    toJSON(message: IDPLoginPolicyLink): unknown;
    create(base?: DeepPartial<IDPLoginPolicyLink>): IDPLoginPolicyLink;
    fromPartial(object: DeepPartial<IDPLoginPolicyLink>): IDPLoginPolicyLink;
};
export declare const OIDCConfig: {
    encode(message: OIDCConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OIDCConfig;
    fromJSON(object: any): OIDCConfig;
    toJSON(message: OIDCConfig): unknown;
    create(base?: DeepPartial<OIDCConfig>): OIDCConfig;
    fromPartial(object: DeepPartial<OIDCConfig>): OIDCConfig;
};
export declare const JWTConfig: {
    encode(message: JWTConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JWTConfig;
    fromJSON(object: any): JWTConfig;
    toJSON(message: JWTConfig): unknown;
    create(base?: DeepPartial<JWTConfig>): JWTConfig;
    fromPartial(object: DeepPartial<JWTConfig>): JWTConfig;
};
export declare const IDPIDQuery: {
    encode(message: IDPIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPIDQuery;
    fromJSON(object: any): IDPIDQuery;
    toJSON(message: IDPIDQuery): unknown;
    create(base?: DeepPartial<IDPIDQuery>): IDPIDQuery;
    fromPartial(object: DeepPartial<IDPIDQuery>): IDPIDQuery;
};
export declare const IDPNameQuery: {
    encode(message: IDPNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPNameQuery;
    fromJSON(object: any): IDPNameQuery;
    toJSON(message: IDPNameQuery): unknown;
    create(base?: DeepPartial<IDPNameQuery>): IDPNameQuery;
    fromPartial(object: DeepPartial<IDPNameQuery>): IDPNameQuery;
};
export declare const IDPOwnerTypeQuery: {
    encode(message: IDPOwnerTypeQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPOwnerTypeQuery;
    fromJSON(object: any): IDPOwnerTypeQuery;
    toJSON(message: IDPOwnerTypeQuery): unknown;
    create(base?: DeepPartial<IDPOwnerTypeQuery>): IDPOwnerTypeQuery;
    fromPartial(object: DeepPartial<IDPOwnerTypeQuery>): IDPOwnerTypeQuery;
};
export declare const Provider: {
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Provider;
    fromJSON(object: any): Provider;
    toJSON(message: Provider): unknown;
    create(base?: DeepPartial<Provider>): Provider;
    fromPartial(object: DeepPartial<Provider>): Provider;
};
export declare const ProviderConfig: {
    encode(message: ProviderConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderConfig;
    fromJSON(object: any): ProviderConfig;
    toJSON(message: ProviderConfig): unknown;
    create(base?: DeepPartial<ProviderConfig>): ProviderConfig;
    fromPartial(object: DeepPartial<ProviderConfig>): ProviderConfig;
};
export declare const OAuthConfig: {
    encode(message: OAuthConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OAuthConfig;
    fromJSON(object: any): OAuthConfig;
    toJSON(message: OAuthConfig): unknown;
    create(base?: DeepPartial<OAuthConfig>): OAuthConfig;
    fromPartial(object: DeepPartial<OAuthConfig>): OAuthConfig;
};
export declare const GenericOIDCConfig: {
    encode(message: GenericOIDCConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenericOIDCConfig;
    fromJSON(object: any): GenericOIDCConfig;
    toJSON(message: GenericOIDCConfig): unknown;
    create(base?: DeepPartial<GenericOIDCConfig>): GenericOIDCConfig;
    fromPartial(object: DeepPartial<GenericOIDCConfig>): GenericOIDCConfig;
};
export declare const GitHubConfig: {
    encode(message: GitHubConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GitHubConfig;
    fromJSON(object: any): GitHubConfig;
    toJSON(message: GitHubConfig): unknown;
    create(base?: DeepPartial<GitHubConfig>): GitHubConfig;
    fromPartial(object: DeepPartial<GitHubConfig>): GitHubConfig;
};
export declare const GitHubEnterpriseServerConfig: {
    encode(message: GitHubEnterpriseServerConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GitHubEnterpriseServerConfig;
    fromJSON(object: any): GitHubEnterpriseServerConfig;
    toJSON(message: GitHubEnterpriseServerConfig): unknown;
    create(base?: DeepPartial<GitHubEnterpriseServerConfig>): GitHubEnterpriseServerConfig;
    fromPartial(object: DeepPartial<GitHubEnterpriseServerConfig>): GitHubEnterpriseServerConfig;
};
export declare const GoogleConfig: {
    encode(message: GoogleConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoogleConfig;
    fromJSON(object: any): GoogleConfig;
    toJSON(message: GoogleConfig): unknown;
    create(base?: DeepPartial<GoogleConfig>): GoogleConfig;
    fromPartial(object: DeepPartial<GoogleConfig>): GoogleConfig;
};
export declare const GitLabConfig: {
    encode(message: GitLabConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GitLabConfig;
    fromJSON(object: any): GitLabConfig;
    toJSON(message: GitLabConfig): unknown;
    create(base?: DeepPartial<GitLabConfig>): GitLabConfig;
    fromPartial(object: DeepPartial<GitLabConfig>): GitLabConfig;
};
export declare const GitLabSelfHostedConfig: {
    encode(message: GitLabSelfHostedConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GitLabSelfHostedConfig;
    fromJSON(object: any): GitLabSelfHostedConfig;
    toJSON(message: GitLabSelfHostedConfig): unknown;
    create(base?: DeepPartial<GitLabSelfHostedConfig>): GitLabSelfHostedConfig;
    fromPartial(object: DeepPartial<GitLabSelfHostedConfig>): GitLabSelfHostedConfig;
};
export declare const LDAPConfig: {
    encode(message: LDAPConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LDAPConfig;
    fromJSON(object: any): LDAPConfig;
    toJSON(message: LDAPConfig): unknown;
    create(base?: DeepPartial<LDAPConfig>): LDAPConfig;
    fromPartial(object: DeepPartial<LDAPConfig>): LDAPConfig;
};
export declare const SAMLConfig: {
    encode(message: SAMLConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SAMLConfig;
    fromJSON(object: any): SAMLConfig;
    toJSON(message: SAMLConfig): unknown;
    create(base?: DeepPartial<SAMLConfig>): SAMLConfig;
    fromPartial(object: DeepPartial<SAMLConfig>): SAMLConfig;
};
export declare const AzureADConfig: {
    encode(message: AzureADConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AzureADConfig;
    fromJSON(object: any): AzureADConfig;
    toJSON(message: AzureADConfig): unknown;
    create(base?: DeepPartial<AzureADConfig>): AzureADConfig;
    fromPartial(object: DeepPartial<AzureADConfig>): AzureADConfig;
};
export declare const Options: {
    encode(message: Options, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Options;
    fromJSON(object: any): Options;
    toJSON(message: Options): unknown;
    create(base?: DeepPartial<Options>): Options;
    fromPartial(object: DeepPartial<Options>): Options;
};
export declare const LDAPAttributes: {
    encode(message: LDAPAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LDAPAttributes;
    fromJSON(object: any): LDAPAttributes;
    toJSON(message: LDAPAttributes): unknown;
    create(base?: DeepPartial<LDAPAttributes>): LDAPAttributes;
    fromPartial(object: DeepPartial<LDAPAttributes>): LDAPAttributes;
};
export declare const AzureADTenant: {
    encode(message: AzureADTenant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AzureADTenant;
    fromJSON(object: any): AzureADTenant;
    toJSON(message: AzureADTenant): unknown;
    create(base?: DeepPartial<AzureADTenant>): AzureADTenant;
    fromPartial(object: DeepPartial<AzureADTenant>): AzureADTenant;
};
export declare const AppleConfig: {
    encode(message: AppleConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppleConfig;
    fromJSON(object: any): AppleConfig;
    toJSON(message: AppleConfig): unknown;
    create(base?: DeepPartial<AppleConfig>): AppleConfig;
    fromPartial(object: DeepPartial<AppleConfig>): AppleConfig;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
