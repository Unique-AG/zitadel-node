import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.resources.user.v3alpha";
export declare enum AuthNKeyType {
    AUTHN_KEY_TYPE_UNSPECIFIED = 0,
    AUTHN_KEY_TYPE_JSON = 1,
    UNRECOGNIZED = -1
}
export declare function authNKeyTypeFromJSON(object: any): AuthNKeyType;
export declare function authNKeyTypeToJSON(object: AuthNKeyType): string;
export declare enum WebAuthNAuthenticatorType {
    WEB_AUTH_N_AUTHENTICATOR_UNSPECIFIED = 0,
    WEB_AUTH_N_AUTHENTICATOR_PLATFORM = 1,
    WEB_AUTH_N_AUTHENTICATOR_CROSS_PLATFORM = 2,
    UNRECOGNIZED = -1
}
export declare function webAuthNAuthenticatorTypeFromJSON(object: any): WebAuthNAuthenticatorType;
export declare function webAuthNAuthenticatorTypeToJSON(object: WebAuthNAuthenticatorType): string;
export interface Authenticators {
    /** All of the user's usernames, which will be used for identification during authentication. */
    usernames: Username[];
    /** If the user has set a password, the time it was last changed will be returned. */
    password: Password | undefined;
    /** Meta information about the user's WebAuthN authenticators. */
    webAuthN: WebAuthN[];
    /**
     * A list of the user's time-based one-time password (TOTP) authenticators,
     * incl. the name for identification.
     */
    totps: TOTP[];
    /** A list of the user's one-time password (OTP) SMS authenticators. */
    otpSms: OTPSMS[];
    /** A list of the user's one-time password (OTP) Email authenticators. */
    otpEmail: OTPEmail[];
    /** A list of the user's authentication keys. They can be used to authenticate e.g. by JWT Profile. */
    authenticationKeys: AuthenticationKey[];
    /** A list of the user's linked identity providers (IDPs). */
    identityProviders: IdentityProvider[];
}
export interface Username {
    /** unique identifier of the username. */
    usernameId: string;
    /** The user's unique username. It is used for identification during authentication. */
    username: string;
    /**
     * By default usernames must be unique across all organizations in an instance.
     * This option allow to restrict the uniqueness to the user's own organization.
     * As a result, this username can only be used if the authentication is limited
     * to the corresponding organization.
     *
     * This can be useful if you provide multiple usernames for a single user, where one
     * if specific to your organization, e.g.:
     * - gigi-giraffe@zitadel.com (unique across organizations)
     * - gigi-giraffe (unique only inside the ZITADEL organization)
     */
    isOrganizationSpecific: boolean;
}
export interface SetUsername {
    /** Set the user's username. This will be used for identification during authentication. */
    username: string;
    /**
     * By default username must be unique across all organizations in an instance.
     * This option allow to restrict the uniqueness to the user's own organization.
     * As a result, this username can only be used if the authentication is limited
     * to the corresponding organization.
     *
     * This can be useful if you provide multiple usernames for a single user, where one
     * if specific to your organization, e.g.:
     * - gigi-giraffe@zitadel.com (unique across organizations)
     * - gigi-giraffe (unique only inside the ZITADEL organization)
     */
    isOrganizationSpecific: boolean;
}
export interface Password {
    /** States the time the password was last changed. */
    lastChanged: Date | undefined;
}
export interface WebAuthN {
    /** unique identifier of the WebAuthN authenticator. */
    webAuthNId: string;
    /** Name of the WebAuthN authenticator. This is used for easier identification. */
    name: string;
    /** State whether the WebAuthN registration has been completed. */
    isVerified: boolean;
    /**
     * States if the user has been verified during the registration. Authentication with this device
     * will be considered as multi-factor authentication (MFA) without the need to check a password
     * (typically known as Passkeys).
     * Without user verification it will be a second factor authentication (2FA), typically done
     * after a password check.
     *
     * More on WebAuthN User Verification: https://www.w3.org/TR/webauthn/#user-verification
     */
    userVerified: boolean;
}
export interface StartWebAuthNRegistration {
    /** Domain on which the user currently is or will be authenticated. */
    domain: string;
    /**
     * Optionally specify the authenticator type of the passkey device (platform or cross-platform).
     * If none is provided, both values are allowed.
     */
    authenticatorType: WebAuthNAuthenticatorType;
    /**
     * Optionally provide a one time code generated by ZITADEL.
     * This is required to start the passkey registration without user authentication.
     */
    code?: AuthenticatorRegistrationCode | undefined;
}
export interface VerifyWebAuthNRegistration {
    /**
     * PublicKeyCredential Interface.
     * Generated helper methods populate the field from JSON created by a WebAuthN client.
     * See also:  https://www.w3.org/TR/webauthn/#publickeycredential
     */
    publicKeyCredential: {
        [key: string]: any;
    } | undefined;
    /** Provide a name for the WebAuthN device. This will help identify it in the future. */
    webAuthNName: string;
}
export interface OTPSMS {
    /** unique identifier of the one-time password (OTP) SMS authenticator. */
    otpSmsId: string;
    /** The phone number used for the OTP SMS authenticator. */
    phone: string;
    /** State whether the OTP SMS registration has been completed. */
    isVerified: boolean;
}
export interface OTPEmail {
    /** unique identifier of the one-time password (OTP) Email authenticator. */
    otpEmailId: string;
    /** The email address used for the OTP Email authenticator. */
    address: string;
    /** State whether the OTP Email registration has been completed. */
    isVerified: boolean;
}
export interface TOTP {
    /** unique identifier of the time-based one-time password (TOTP) authenticator. */
    totpId: string;
    /** The name provided during registration. This is used for easier identification. */
    name: string;
    /** State whether the TOTP registration has been completed. */
    isVerified: boolean;
}
export interface AuthenticationKey {
    /** ID is the read-only unique identifier of the authentication key. */
    authenticationKeyId: string;
    details: Details | undefined;
    /** the file type of the key */
    type: AuthNKeyType;
    /** After the expiration date, the key will no longer be usable for authentication. */
    expirationDate: Date | undefined;
}
export interface IdentityProvider {
    /** IDP ID is the read-only unique identifier of the identity provider in ZITADEL. */
    idpId: string;
    /** IDP name is the name of the identity provider in ZITADEL. */
    idpName: string;
    /**
     * The user ID represents the ID provided by the identity provider.
     * This ID is used to link the user in ZITADEL with the identity provider.
     */
    userId: string;
    /** The username represents the username provided by the identity provider. */
    username: string;
}
export interface SetAuthenticators {
    usernames: SetUsername[];
    password: SetPassword | undefined;
}
export interface SetPassword {
    /** Provide the plain text password. ZITADEL will take care to store it in a secure way (hash). */
    password?: string | undefined;
    /**
     * Encoded hash of a password in Modular Crypt Format:
     * https://zitadel.com/docs/concepts/architecture/secrets#hashed-secrets.
     */
    hash?: string | undefined;
    /** Provide if the user needs to change the password on the next use. */
    changeRequired: boolean;
    /** Provide the current password to verify you're allowed to change the password. */
    currentPassword?: string | undefined;
    /** Or provider the verification code generated during password reset request. */
    verificationCode?: string | undefined;
}
export interface SendPasswordResetEmail {
    /**
     * Optionally set a url_template, which will be used in the password reset mail
     * sent by ZITADEL to guide the user to your password change page.
     * If no template is set, the default ZITADEL url will be used.
     */
    urlTemplate?: string | undefined;
}
export interface SendPasswordResetSMS {
}
export interface ReturnPasswordResetCode {
}
export interface AuthenticatorRegistrationCode {
    /** ID to the one time code generated by ZITADEL. */
    id: string;
    /** one time code generated by ZITADEL. */
    code: string;
}
export interface SendWebAuthNRegistrationLink {
    /**
     * Optionally set a url_template, which will be used in the mail sent by ZITADEL
     * to guide the user to your passkey registration page.
     * If no template is set, the default ZITADEL url will be used.
     */
    urlTemplate?: string | undefined;
}
export interface ReturnWebAuthNRegistrationCode {
}
export interface RedirectURLs {
    /** URL to which the user will be redirected after a successful login. */
    successUrl: string;
    /** URL to which the user will be redirected after a failed login. */
    failureUrl: string;
}
export interface LDAPCredentials {
    /** Username used to login through LDAP. */
    username: string;
    /** Password used to login through LDAP. */
    password: string;
}
export interface IdentityProviderIntent {
    /** ID of the identity provider (IDP) intent. */
    idpIntentId: string;
    /** Token of the identity provider (IDP) intent. */
    idpIntentToken: string;
    /** If the user was already federated and linked to a ZITADEL user, it's id will be returned. */
    userId?: string | undefined;
}
export interface IDPInformation {
    /** ID of the identity provider. */
    idpId: string;
    /** ID of the user provided by the identity provider. */
    userId: string;
    /** Username of the user provided by the identity provider. */
    userName: string;
    /** Complete information returned by the identity provider. */
    rawInformation: {
        [key: string]: any;
    } | undefined;
    /** OAuth/OIDC access (and id_token) returned by the identity provider. */
    oauth?: IDPOAuthAccessInformation | undefined;
    /** LDAP entity attributes returned by the identity provider */
    ldap?: IDPLDAPAccessInformation | undefined;
    /** SAMLResponse returned by the identity provider */
    saml?: IDPSAMLAccessInformation | undefined;
}
export interface IDPOAuthAccessInformation {
    /** The access_token returned by the identity provider. */
    accessToken: string;
    /** In case the provider returned an id_token. */
    idToken?: string | undefined;
}
export interface IDPLDAPAccessInformation {
    /** The attributes of the user returned by the identity provider. */
    attributes: {
        [key: string]: any;
    } | undefined;
}
export interface IDPSAMLAccessInformation {
    /** The SAML assertion returned by the identity provider. */
    assertion: Buffer;
}
export interface IDPAuthenticator {
    /** ID of the identity provider */
    idpId: string;
    /** ID of the user provided by the identity provider */
    userId: string;
    /** Username of the user provided by the identity provider. */
    userName: string;
}
export declare const Authenticators: MessageFns<Authenticators>;
export declare const Username: MessageFns<Username>;
export declare const SetUsername: MessageFns<SetUsername>;
export declare const Password: MessageFns<Password>;
export declare const WebAuthN: MessageFns<WebAuthN>;
export declare const StartWebAuthNRegistration: MessageFns<StartWebAuthNRegistration>;
export declare const VerifyWebAuthNRegistration: MessageFns<VerifyWebAuthNRegistration>;
export declare const OTPSMS: MessageFns<OTPSMS>;
export declare const OTPEmail: MessageFns<OTPEmail>;
export declare const TOTP: MessageFns<TOTP>;
export declare const AuthenticationKey: MessageFns<AuthenticationKey>;
export declare const IdentityProvider: MessageFns<IdentityProvider>;
export declare const SetAuthenticators: MessageFns<SetAuthenticators>;
export declare const SetPassword: MessageFns<SetPassword>;
export declare const SendPasswordResetEmail: MessageFns<SendPasswordResetEmail>;
export declare const SendPasswordResetSMS: MessageFns<SendPasswordResetSMS>;
export declare const ReturnPasswordResetCode: MessageFns<ReturnPasswordResetCode>;
export declare const AuthenticatorRegistrationCode: MessageFns<AuthenticatorRegistrationCode>;
export declare const SendWebAuthNRegistrationLink: MessageFns<SendWebAuthNRegistrationLink>;
export declare const ReturnWebAuthNRegistrationCode: MessageFns<ReturnWebAuthNRegistrationCode>;
export declare const RedirectURLs: MessageFns<RedirectURLs>;
export declare const LDAPCredentials: MessageFns<LDAPCredentials>;
export declare const IdentityProviderIntent: MessageFns<IdentityProviderIntent>;
export declare const IDPInformation: MessageFns<IDPInformation>;
export declare const IDPOAuthAccessInformation: MessageFns<IDPOAuthAccessInformation>;
export declare const IDPLDAPAccessInformation: MessageFns<IDPLDAPAccessInformation>;
export declare const IDPSAMLAccessInformation: MessageFns<IDPSAMLAccessInformation>;
export declare const IDPAuthenticator: MessageFns<IDPAuthenticator>;
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