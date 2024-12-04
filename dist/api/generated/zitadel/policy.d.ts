import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../google/protobuf/duration.js";
import { IDPLoginPolicyLink } from "./idp.js";
import { ObjectDetails } from "./object.js";
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
    /** Amount of days after which a password will expire. The user will be forced to change the password on the following authentication. */
    maxAgeDays: Long;
    /** Amount of days after which the user should be notified of the upcoming expiry. ZITADEL will not notify the user. */
    expireWarnDays: Long;
    /** If true, the returned values represent the instance settings, e.g. by an organization without custom settings. */
    isDefault: boolean;
}
export interface LockoutPolicy {
    details: ObjectDetails | undefined;
    maxPasswordAttempts: Long;
    maxOtpAttempts: Long;
    isDefault: boolean;
}
export interface PrivacyPolicy {
    details: ObjectDetails | undefined;
    tosLink: string;
    privacyLink: string;
    isDefault: boolean;
    helpLink: string;
    supportEmail: string;
    docsLink: string;
    customLink: string;
    customLinkText: string;
}
export interface NotificationPolicy {
    details: ObjectDetails | undefined;
    isDefault: boolean;
    passwordChange: boolean;
}
export declare const OrgIAMPolicy: MessageFns<OrgIAMPolicy>;
export declare const DomainPolicy: MessageFns<DomainPolicy>;
export declare const LabelPolicy: MessageFns<LabelPolicy>;
export declare const LoginPolicy: MessageFns<LoginPolicy>;
export declare const PasswordComplexityPolicy: MessageFns<PasswordComplexityPolicy>;
export declare const PasswordAgePolicy: MessageFns<PasswordAgePolicy>;
export declare const LockoutPolicy: MessageFns<LockoutPolicy>;
export declare const PrivacyPolicy: MessageFns<PrivacyPolicy>;
export declare const NotificationPolicy: MessageFns<NotificationPolicy>;
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
