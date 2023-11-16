import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { ResourceOwnerType } from "./settings";
export declare const protobufPackage = "zitadel.settings.v2beta";
export declare enum SecondFactorType {
    SECOND_FACTOR_TYPE_UNSPECIFIED = 0,
    /** SECOND_FACTOR_TYPE_OTP - This is the type for TOTP */
    SECOND_FACTOR_TYPE_OTP = 1,
    SECOND_FACTOR_TYPE_U2F = 2,
    SECOND_FACTOR_TYPE_OTP_EMAIL = 3,
    SECOND_FACTOR_TYPE_OTP_SMS = 4,
    UNRECOGNIZED = -1
}
export declare function secondFactorTypeFromJSON(object: any): SecondFactorType;
export declare function secondFactorTypeToJSON(object: SecondFactorType): string;
export declare enum MultiFactorType {
    MULTI_FACTOR_TYPE_UNSPECIFIED = 0,
    MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION = 1,
    UNRECOGNIZED = -1
}
export declare function multiFactorTypeFromJSON(object: any): MultiFactorType;
export declare function multiFactorTypeToJSON(object: MultiFactorType): string;
export declare enum PasskeysType {
    PASSKEYS_TYPE_NOT_ALLOWED = 0,
    PASSKEYS_TYPE_ALLOWED = 1,
    UNRECOGNIZED = -1
}
export declare function passkeysTypeFromJSON(object: any): PasskeysType;
export declare function passkeysTypeToJSON(object: PasskeysType): string;
export declare enum IdentityProviderType {
    IDENTITY_PROVIDER_TYPE_UNSPECIFIED = 0,
    IDENTITY_PROVIDER_TYPE_OIDC = 1,
    IDENTITY_PROVIDER_TYPE_JWT = 2,
    IDENTITY_PROVIDER_TYPE_LDAP = 3,
    IDENTITY_PROVIDER_TYPE_OAUTH = 4,
    IDENTITY_PROVIDER_TYPE_AZURE_AD = 5,
    IDENTITY_PROVIDER_TYPE_GITHUB = 6,
    IDENTITY_PROVIDER_TYPE_GITHUB_ES = 7,
    IDENTITY_PROVIDER_TYPE_GITLAB = 8,
    IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED = 9,
    IDENTITY_PROVIDER_TYPE_GOOGLE = 10,
    UNRECOGNIZED = -1
}
export declare function identityProviderTypeFromJSON(object: any): IdentityProviderType;
export declare function identityProviderTypeToJSON(object: IdentityProviderType): string;
export interface LoginSettings {
    allowUsernamePassword: boolean;
    allowRegister: boolean;
    allowExternalIdp: boolean;
    forceMfa: boolean;
    passkeysType: PasskeysType;
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
    /** If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success. */
    allowDomainDiscovery: boolean;
    disableLoginWithEmail: boolean;
    disableLoginWithPhone: boolean;
    /** resource_owner_type returns if the settings is managed on the organization or on the instance */
    resourceOwnerType: ResourceOwnerType;
    forceMfaLocalOnly: boolean;
}
export interface IdentityProvider {
    id: string;
    name: string;
    type: IdentityProviderType;
}
export declare const LoginSettings: {
    encode(message: LoginSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginSettings;
    fromJSON(object: any): LoginSettings;
    toJSON(message: LoginSettings): unknown;
    create(base?: DeepPartial<LoginSettings>): LoginSettings;
    fromPartial(object: DeepPartial<LoginSettings>): LoginSettings;
};
export declare const IdentityProvider: {
    encode(message: IdentityProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentityProvider;
    fromJSON(object: any): IdentityProvider;
    toJSON(message: IdentityProvider): unknown;
    create(base?: DeepPartial<IdentityProvider>): IdentityProvider;
    fromPartial(object: DeepPartial<IdentityProvider>): IdentityProvider;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
