import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { IDPLoginPolicyLink } from "./idp";
import { ObjectDetails } from "./object";
export declare const protobufPackage = "zitadel.policy.v1";
export declare enum ThemeMode {
    THEME_MODE_UNSPECIFIED = 0,
    THEME_MODE_AUTO = 1,
    THEME_MODE_DARK = 2,
    THEME_MODE_LIGHT = 3,
    UNRECOGNIZED = -1
}
export declare function themeModeFromJSON(object: any): ThemeMode;
export declare function themeModeToJSON(object: ThemeMode): string;
export declare enum SecondFactorType {
    SECOND_FACTOR_TYPE_UNSPECIFIED = 0,
    /** SECOND_FACTOR_TYPE_OTP - SECOND_FACTOR_TYPE_OTP is the type for TOTP */
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
export declare enum PasswordlessType {
    PASSWORDLESS_TYPE_NOT_ALLOWED = 0,
    /** PASSWORDLESS_TYPE_ALLOWED - PLANNED: PASSWORDLESS_TYPE_WITH_CERT */
    PASSWORDLESS_TYPE_ALLOWED = 1,
    UNRECOGNIZED = -1
}
export declare function passwordlessTypeFromJSON(object: any): PasswordlessType;
export declare function passwordlessTypeToJSON(object: PasswordlessType): string;
/** deprecated: please use DomainPolicy instead */
export interface OrgIAMPolicy {
    details: ObjectDetails | undefined;
    userLoginMustBeDomain: boolean;
    isDefault: boolean;
}
export interface DomainPolicy {
    details: ObjectDetails | undefined;
    userLoginMustBeDomain: boolean;
    isDefault: boolean;
    validateOrgDomains: boolean;
    smtpSenderAddressMatchesInstanceDomain: boolean;
}
export interface LabelPolicy {
    details: ObjectDetails | undefined;
    /** hex value for primary color */
    primaryColor: string;
    /** defines if the organization's admin changed the policy */
    isDefault: boolean;
    /** hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set */
    hideLoginNameSuffix: boolean;
    /** hex value for secondary color */
    warnColor: string;
    /** hex value for background color */
    backgroundColor: string;
    /** hex value for font color */
    fontColor: string;
    /** hex value for primary color dark theme */
    primaryColorDark: string;
    /** hex value for background color dark theme */
    backgroundColorDark: string;
    /** hex value for warning color dark theme */
    warnColorDark: string;
    /** hex value for font color dark theme */
    fontColorDark: string;
    disableWatermark: boolean;
    logoUrl: string;
    iconUrl: string;
    logoUrlDark: string;
    iconUrlDark: string;
    fontUrl: string;
    themeMode: ThemeMode;
}
export interface LoginPolicy {
    details: ObjectDetails | undefined;
    allowUsernamePassword: boolean;
    allowRegister: boolean;
    allowExternalIdp: boolean;
    forceMfa: boolean;
    passwordlessType: PasswordlessType;
    isDefault: boolean;
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
    idps: IDPLoginPolicyLink[];
    /** If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success. */
    allowDomainDiscovery: boolean;
    disableLoginWithEmail: boolean;
    disableLoginWithPhone: boolean;
    forceMfaLocalOnly: boolean;
}
export interface PasswordComplexityPolicy {
    details: ObjectDetails | undefined;
    minLength: Long;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
    isDefault: boolean;
}
export interface PasswordAgePolicy {
    details: ObjectDetails | undefined;
    maxAgeDays: Long;
    expireWarnDays: Long;
    isDefault: boolean;
}
export interface LockoutPolicy {
    details: ObjectDetails | undefined;
    maxPasswordAttempts: Long;
    isDefault: boolean;
}
export interface PrivacyPolicy {
    details: ObjectDetails | undefined;
    tosLink: string;
    privacyLink: string;
    isDefault: boolean;
    helpLink: string;
    supportEmail: string;
}
export interface NotificationPolicy {
    details: ObjectDetails | undefined;
    isDefault: boolean;
    passwordChange: boolean;
}
export declare const OrgIAMPolicy: {
    encode(message: OrgIAMPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrgIAMPolicy;
    fromJSON(object: any): OrgIAMPolicy;
    toJSON(message: OrgIAMPolicy): unknown;
    create(base?: DeepPartial<OrgIAMPolicy>): OrgIAMPolicy;
    fromPartial(object: DeepPartial<OrgIAMPolicy>): OrgIAMPolicy;
};
export declare const DomainPolicy: {
    encode(message: DomainPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainPolicy;
    fromJSON(object: any): DomainPolicy;
    toJSON(message: DomainPolicy): unknown;
    create(base?: DeepPartial<DomainPolicy>): DomainPolicy;
    fromPartial(object: DeepPartial<DomainPolicy>): DomainPolicy;
};
export declare const LabelPolicy: {
    encode(message: LabelPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LabelPolicy;
    fromJSON(object: any): LabelPolicy;
    toJSON(message: LabelPolicy): unknown;
    create(base?: DeepPartial<LabelPolicy>): LabelPolicy;
    fromPartial(object: DeepPartial<LabelPolicy>): LabelPolicy;
};
export declare const LoginPolicy: {
    encode(message: LoginPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginPolicy;
    fromJSON(object: any): LoginPolicy;
    toJSON(message: LoginPolicy): unknown;
    create(base?: DeepPartial<LoginPolicy>): LoginPolicy;
    fromPartial(object: DeepPartial<LoginPolicy>): LoginPolicy;
};
export declare const PasswordComplexityPolicy: {
    encode(message: PasswordComplexityPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordComplexityPolicy;
    fromJSON(object: any): PasswordComplexityPolicy;
    toJSON(message: PasswordComplexityPolicy): unknown;
    create(base?: DeepPartial<PasswordComplexityPolicy>): PasswordComplexityPolicy;
    fromPartial(object: DeepPartial<PasswordComplexityPolicy>): PasswordComplexityPolicy;
};
export declare const PasswordAgePolicy: {
    encode(message: PasswordAgePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordAgePolicy;
    fromJSON(object: any): PasswordAgePolicy;
    toJSON(message: PasswordAgePolicy): unknown;
    create(base?: DeepPartial<PasswordAgePolicy>): PasswordAgePolicy;
    fromPartial(object: DeepPartial<PasswordAgePolicy>): PasswordAgePolicy;
};
export declare const LockoutPolicy: {
    encode(message: LockoutPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockoutPolicy;
    fromJSON(object: any): LockoutPolicy;
    toJSON(message: LockoutPolicy): unknown;
    create(base?: DeepPartial<LockoutPolicy>): LockoutPolicy;
    fromPartial(object: DeepPartial<LockoutPolicy>): LockoutPolicy;
};
export declare const PrivacyPolicy: {
    encode(message: PrivacyPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrivacyPolicy;
    fromJSON(object: any): PrivacyPolicy;
    toJSON(message: PrivacyPolicy): unknown;
    create(base?: DeepPartial<PrivacyPolicy>): PrivacyPolicy;
    fromPartial(object: DeepPartial<PrivacyPolicy>): PrivacyPolicy;
};
export declare const NotificationPolicy: {
    encode(message: NotificationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotificationPolicy;
    fromJSON(object: any): NotificationPolicy;
    toJSON(message: NotificationPolicy): unknown;
    create(base?: DeepPartial<NotificationPolicy>): NotificationPolicy;
    fromPartial(object: DeepPartial<NotificationPolicy>): NotificationPolicy;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
