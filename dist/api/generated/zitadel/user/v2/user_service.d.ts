import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { PaginationRequest, PaginationResponse } from "../../filter/v2/filter.js";
import { Metadata as Metadata1, MetadataSearchFilter } from "../../metadata/v2/metadata.js";
import { Details, ListDetails, ListQuery, Organization } from "../../object/v2/object.js";
import { PasskeyAuthenticator, PasskeyRegistrationCode, ReturnPasskeyRegistrationCode, SendPasskeyRegistrationLink } from "./auth.js";
import { ReturnEmailVerificationCode, SendEmailVerificationCode, SetHumanEmail } from "./email.js";
import { FormData, IDPInformation, IDPIntent, IDPLink, LDAPCredentials, RedirectURLs } from "./idp.js";
import { Key, KeyFieldName, KeysSearchFilter } from "./key.js";
import { HashedPassword, Password, ReturnPasswordResetCode, SendPasswordResetLink, SetPassword } from "./password.js";
import { PersonalAccessToken, PersonalAccessTokenFieldName, PersonalAccessTokensSearchFilter } from "./pat.js";
import { ReturnPhoneVerificationCode, SendPhoneVerificationCode, SetHumanPhone } from "./phone.js";
import { SearchQuery, UserFieldName } from "./query.js";
import { AuthFactor, AuthFactorState, Gender, Passkey, ReturnInviteCode, SendInviteCode, SetHumanProfile, SetMetadataEntry, User } from "./user.js";
export declare const protobufPackage = "zitadel.user.v2";
export declare enum AuthenticationMethodType {
    AUTHENTICATION_METHOD_TYPE_UNSPECIFIED = 0,
    AUTHENTICATION_METHOD_TYPE_PASSWORD = 1,
    AUTHENTICATION_METHOD_TYPE_PASSKEY = 2,
    AUTHENTICATION_METHOD_TYPE_IDP = 3,
    AUTHENTICATION_METHOD_TYPE_TOTP = 4,
    AUTHENTICATION_METHOD_TYPE_U2F = 5,
    AUTHENTICATION_METHOD_TYPE_OTP_SMS = 6,
    AUTHENTICATION_METHOD_TYPE_OTP_EMAIL = 7,
    UNRECOGNIZED = -1
}
export declare function authenticationMethodTypeFromJSON(object: any): AuthenticationMethodType;
export declare function authenticationMethodTypeToJSON(object: AuthenticationMethodType): string;
export declare enum AuthFactors {
    OTP = 0,
    OTP_SMS = 1,
    OTP_EMAIL = 2,
    U2F = 3,
    UNRECOGNIZED = -1
}
export declare function authFactorsFromJSON(object: any): AuthFactors;
export declare function authFactorsToJSON(object: AuthFactors): string;
export interface AddHumanUserRequest {
    /** optionally set your own id unique for the user. */
    userId?: string | undefined;
    /** optionally set a unique username, if none is provided the email will be used. */
    username?: string | undefined;
    organization: Organization | undefined;
    profile: SetHumanProfile | undefined;
    email: SetHumanEmail | undefined;
    phone: SetHumanPhone | undefined;
    metadata: SetMetadataEntry[];
    password?: Password | undefined;
    hashedPassword?: HashedPassword | undefined;
    idpLinks: IDPLink[];
    /**
     * An Implementation of RFC 6238 is used, with HMAC-SHA-1 and time-step of 30 seconds.
     * Currently no other options are supported, and if anything different is used the validation will fail.
     */
    totpSecret?: string | undefined;
}
export interface AddHumanUserResponse {
    userId: string;
    details: Details | undefined;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
}
export interface CreateUserRequest {
    /** The unique identifier of the organization the user belongs to. */
    organizationId: string;
    /**
     * The ID is a unique identifier for the user in the instance.
     * If not specified, it will be generated.
     * You can set your own user id that is unique within the instance.
     * This is useful in migration scenarios, for example if the user already has an ID in another Zitadel system.
     * If not specified, it will be generated.
     * It can't be changed after creation.
     */
    userId?: string | undefined;
    /**
     * The username is a unique identifier for the user in the organization.
     * If not specified, Zitadel sets the username to the email for users of type human and to the user_id for users of type machine.
     * It is used to identify the user in the organization and can be used for login.
     */
    username?: string | undefined;
    /**
     * Users of type human are users that are meant to be used by a person.
     * They can log in interactively using a login UI.
     * By default, new users will receive a verification email and, if a phone is configured, a verification SMS.
     * To make sure these messages are sent, configure and activate valid SMTP and Twilio configurations.
     * Read more about your options for controlling this behaviour in the email and phone field documentations.
     */
    human?: CreateUserRequest_Human | undefined;
    /**
     * Users of type machine are users that are meant to be used by a machine.
     * In order to authenticate, [add a secret](apis/resources/user_service_v2/user-service-add-secret.api.mdx), [a key](apis/resources/user_service_v2/user-service-add-key.api.mdx) or [a personal access token](apis/resources/user_service_v2/user-service-add-personal-access-token.api.mdx) to the user.
     * Tokens generated for new users of type machine will be of an opaque Bearer type.
     * You can change the users token type to JWT by using the [management v1 service method UpdateMachine](apis/resources/mgmt/management-service-update-machine.api.mdx).
     */
    machine?: CreateUserRequest_Machine | undefined;
}
export interface CreateUserRequest_Human {
    /** Set the users profile information. */
    profile: SetHumanProfile | undefined;
    /** Set the users email address and optionally send a verification email. */
    email: SetHumanEmail | undefined;
    /** Set the users phone number and optionally send a verification SMS. */
    phone?: SetHumanPhone | undefined;
    password?: Password | undefined;
    hashedPassword?: HashedPassword | undefined;
    /**
     * Create the user with a list of links to identity providers.
     * This can be useful in migration-scenarios.
     * For example, if a user already has an account in an external identity provider or another Zitadel instance, an IDP link allows the user to authenticate as usual.
     * Sessions, second factors, hardware keys registered externally are still available for authentication.
     * Use the following endpoints to manage identity provider links:
     * - [AddIDPLink](apis/resources/user_service_v2/user-service-add-idp-link.api.mdx)
     * - [RemoveIDPLink](apis/resources/user_service_v2/user-service-remove-idp-link.api.mdx)
     */
    idpLinks: IDPLink[];
    /**
     * An Implementation of RFC 6238 is used, with HMAC-SHA-1 and time-step of 30 seconds.
     * Currently no other options are supported, and if anything different is used the validation will fail.
     */
    totpSecret?: string | undefined;
    /** Metadata to bet set. The values have to be base64 encoded. */
    metadata: Metadata[];
}
export interface CreateUserRequest_Machine {
    /** The machine users name is a human readable field that helps identifying the user. */
    name: string;
    /** The description is a field that helps to remember the purpose of the user. */
    description?: string | undefined;
}
export interface CreateUserResponse {
    /** The unique identifier of the newly created user. */
    id: string;
    /** The timestamp of the user creation. */
    creationDate: Date | undefined;
    /** The email verification code if it was requested by setting the email verification to return_code. */
    emailCode?: string | undefined;
    /** The phone verification code if it was requested by setting the phone verification to return_code. */
    phoneCode?: string | undefined;
}
export interface GetUserByIDRequest {
    userId: string;
}
export interface GetUserByIDResponse {
    /** deprecated: details is moved into user */
    details: Details | undefined;
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
export interface SetEmailRequest {
    userId: string;
    email: string;
    sendCode?: SendEmailVerificationCode | undefined;
    returnCode?: ReturnEmailVerificationCode | undefined;
    isVerified?: boolean | undefined;
}
export interface SetEmailResponse {
    details: Details | undefined;
    /** in case the verification was set to return_code, the code will be returned */
    verificationCode?: string | undefined;
}
export interface ResendEmailCodeRequest {
    userId: string;
    sendCode?: SendEmailVerificationCode | undefined;
    returnCode?: ReturnEmailVerificationCode | undefined;
}
export interface ResendEmailCodeResponse {
    details: Details | undefined;
    /** in case the verification was set to return_code, the code will be returned */
    verificationCode?: string | undefined;
}
export interface SendEmailCodeRequest {
    userId: string;
    sendCode?: SendEmailVerificationCode | undefined;
    returnCode?: ReturnEmailVerificationCode | undefined;
}
export interface SendEmailCodeResponse {
    details: Details | undefined;
    /** in case the verification was set to return_code, the code will be returned */
    verificationCode?: string | undefined;
}
export interface VerifyEmailRequest {
    userId: string;
    verificationCode: string;
}
export interface VerifyEmailResponse {
    details: Details | undefined;
}
export interface SetPhoneRequest {
    userId: string;
    phone: string;
    sendCode?: SendPhoneVerificationCode | undefined;
    returnCode?: ReturnPhoneVerificationCode | undefined;
    isVerified?: boolean | undefined;
}
export interface SetPhoneResponse {
    details: Details | undefined;
    /** in case the verification was set to return_code, the code will be returned */
    verificationCode?: string | undefined;
}
export interface RemovePhoneRequest {
    userId: string;
}
export interface RemovePhoneResponse {
    details: Details | undefined;
}
export interface ResendPhoneCodeRequest {
    userId: string;
    sendCode?: SendPhoneVerificationCode | undefined;
    returnCode?: ReturnPhoneVerificationCode | undefined;
}
export interface ResendPhoneCodeResponse {
    details: Details | undefined;
    /** in case the verification was set to return_code, the code will be returned */
    verificationCode?: string | undefined;
}
export interface VerifyPhoneRequest {
    userId: string;
    verificationCode: string;
}
export interface VerifyPhoneResponse {
    details: Details | undefined;
}
export interface DeleteUserRequest {
    userId: string;
}
export interface DeleteUserResponse {
    details: Details | undefined;
}
export interface UpdateUserRequest {
    /**
     * The user id is the users unique identifier in the instance.
     * It can't be changed.
     */
    userId: string;
    /**
     * Set a new username that is unique within the instance.
     * Beware that active tokens and sessions are invalidated when the username is changed.
     */
    username?: string | undefined;
    human?: UpdateUserRequest_Human | undefined;
    machine?: UpdateUserRequest_Machine | undefined;
}
export interface UpdateUserRequest_Human {
    /** Change the users profile information */
    profile?: UpdateUserRequest_Human_Profile | undefined;
    /** Change the users email address and/or trigger a verification email */
    email?: SetHumanEmail | undefined;
    /**
     * Change the users phone number and/or trigger a verification SMS
     * To delete the users phone number, leave the phone field empty and omit the verification field.
     */
    phone?: SetHumanPhone | undefined;
    /**
     * Change the users password.
     * You can optionally require the current password or the verification code to be correct.
     */
    password?: SetPassword | undefined;
}
export interface UpdateUserRequest_Human_Profile {
    /**
     * The given name is the first name of the user.
     * For example, it can be used to personalize notifications and login UIs.
     */
    givenName?: string | undefined;
    /**
     * The family name is the last name of the user.
     * For example, it can be used to personalize user interfaces and notifications.
     */
    familyName?: string | undefined;
    /**
     * The nick name is the users short name.
     * For example, it can be used to personalize user interfaces and notifications.
     */
    nickName?: string | undefined;
    /**
     * The display name is how a user should primarily be displayed in lists.
     * It can also for example be used to personalize user interfaces and notifications.
     */
    displayName?: string | undefined;
    /**
     * The users preferred language is the language that systems should use to interact with the user.
     * It has the format of a [BCP-47 language tag](https://datatracker.ietf.org/doc/html/rfc3066).
     * It is used by Zitadel where no higher prioritized preferred language can be used.
     * For example, browser settings can overwrite a users preferred_language.
     * Notification messages and standard login UIs use the users preferred language if it is supported and allowed on the instance.
     * Else, the default language of the instance is used.
     */
    preferredLanguage?: string | undefined;
    /** The users gender can for example be used to personalize user interfaces and notifications. */
    gender?: Gender | undefined;
}
export interface UpdateUserRequest_Machine {
    /** The machine users name is a human readable field that helps identifying the user. */
    name?: string | undefined;
    /** The description is a field that helps to remember the purpose of the user. */
    description?: string | undefined;
}
export interface UpdateUserResponse {
    /** The timestamp of the change of the user. */
    changeDate: Date | undefined;
    /** In case the email verification was set to return_code, the code will be returned */
    emailCode?: string | undefined;
    /** In case the phone verification was set to return_code, the code will be returned */
    phoneCode?: string | undefined;
}
export interface UpdateHumanUserRequest {
    userId: string;
    username?: string | undefined;
    profile?: SetHumanProfile | undefined;
    email?: SetHumanEmail | undefined;
    phone?: SetHumanPhone | undefined;
    password?: SetPassword | undefined;
}
export interface UpdateHumanUserResponse {
    details: Details | undefined;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
}
export interface DeactivateUserRequest {
    userId: string;
}
export interface DeactivateUserResponse {
    details: Details | undefined;
}
export interface ReactivateUserRequest {
    userId: string;
}
export interface ReactivateUserResponse {
    details: Details | undefined;
}
export interface LockUserRequest {
    userId: string;
}
export interface LockUserResponse {
    details: Details | undefined;
}
export interface UnlockUserRequest {
    userId: string;
}
export interface UnlockUserResponse {
    details: Details | undefined;
}
export interface RegisterPasskeyRequest {
    userId: string;
    code?: PasskeyRegistrationCode | undefined;
    authenticator: PasskeyAuthenticator;
    domain: string;
}
export interface RegisterPasskeyResponse {
    details: Details | undefined;
    passkeyId: string;
    publicKeyCredentialCreationOptions: {
        [key: string]: any;
    } | undefined;
}
export interface VerifyPasskeyRegistrationRequest {
    userId: string;
    passkeyId: string;
    publicKeyCredential: {
        [key: string]: any;
    } | undefined;
    passkeyName: string;
}
export interface VerifyPasskeyRegistrationResponse {
    details: Details | undefined;
}
export interface RegisterU2FRequest {
    userId: string;
    domain: string;
}
export interface RegisterU2FResponse {
    details: Details | undefined;
    u2fId: string;
    publicKeyCredentialCreationOptions: {
        [key: string]: any;
    } | undefined;
}
export interface VerifyU2FRegistrationRequest {
    userId: string;
    u2fId: string;
    publicKeyCredential: {
        [key: string]: any;
    } | undefined;
    tokenName: string;
}
export interface VerifyU2FRegistrationResponse {
    details: Details | undefined;
}
export interface RemoveU2FRequest {
    userId: string;
    u2fId: string;
}
export interface RemoveU2FResponse {
    details: Details | undefined;
}
export interface RegisterTOTPRequest {
    userId: string;
}
export interface RegisterTOTPResponse {
    details: Details | undefined;
    uri: string;
    secret: string;
}
export interface VerifyTOTPRegistrationRequest {
    userId: string;
    code: string;
}
export interface VerifyTOTPRegistrationResponse {
    details: Details | undefined;
}
export interface RemoveTOTPRequest {
    userId: string;
}
export interface RemoveTOTPResponse {
    details: Details | undefined;
}
export interface AddOTPSMSRequest {
    userId: string;
}
export interface AddOTPSMSResponse {
    details: Details | undefined;
}
export interface RemoveOTPSMSRequest {
    userId: string;
}
export interface RemoveOTPSMSResponse {
    details: Details | undefined;
}
export interface AddOTPEmailRequest {
    userId: string;
}
export interface AddOTPEmailResponse {
    details: Details | undefined;
}
export interface RemoveOTPEmailRequest {
    userId: string;
}
export interface RemoveOTPEmailResponse {
    details: Details | undefined;
}
export interface CreatePasskeyRegistrationLinkRequest {
    userId: string;
    sendLink?: SendPasskeyRegistrationLink | undefined;
    returnCode?: ReturnPasskeyRegistrationCode | undefined;
}
export interface CreatePasskeyRegistrationLinkResponse {
    details: Details | undefined;
    /** in case the medium was set to return_code, the code will be returned */
    code?: PasskeyRegistrationCode | undefined;
}
export interface ListPasskeysRequest {
    userId: string;
}
export interface ListPasskeysResponse {
    details: ListDetails | undefined;
    result: Passkey[];
}
export interface RemovePasskeyRequest {
    userId: string;
    passkeyId: string;
}
export interface RemovePasskeyResponse {
    details: Details | undefined;
}
export interface StartIdentityProviderIntentRequest {
    idpId: string;
    urls?: RedirectURLs | undefined;
    ldap?: LDAPCredentials | undefined;
}
export interface StartIdentityProviderIntentResponse {
    details: Details | undefined;
    authUrl?: string | undefined;
    idpIntent?: IDPIntent | undefined;
    /**
     * POST call information
     * Deprecated: Use form_data instead
     */
    postForm?: Buffer | undefined;
    /** Data for a form POST call */
    formData?: FormData | undefined;
}
export interface RetrieveIdentityProviderIntentRequest {
    idpIntentId: string;
    idpIntentToken: string;
}
export interface RetrieveIdentityProviderIntentResponse {
    details: Details | undefined;
    idpInformation: IDPInformation | undefined;
    userId: string;
    addHumanUser: AddHumanUserRequest | undefined;
}
export interface AddIDPLinkRequest {
    userId: string;
    idpLink: IDPLink | undefined;
}
export interface AddIDPLinkResponse {
    details: Details | undefined;
}
export interface ListIDPLinksRequest {
    userId: string;
    /** list limitations and ordering */
    query: ListQuery | undefined;
}
export interface ListIDPLinksResponse {
    details: ListDetails | undefined;
    result: IDPLink[];
}
export interface RemoveIDPLinkRequest {
    userId: string;
    idpId: string;
    linkedUserId: string;
}
export interface RemoveIDPLinkResponse {
    details: Details | undefined;
}
export interface PasswordResetRequest {
    userId: string;
    sendLink?: SendPasswordResetLink | undefined;
    returnCode?: ReturnPasswordResetCode | undefined;
}
export interface PasswordResetResponse {
    details: Details | undefined;
    /** in case the medium was set to return_code, the code will be returned */
    verificationCode?: string | undefined;
}
export interface SetPasswordRequest {
    userId: string;
    newPassword: Password | undefined;
    currentPassword?: string | undefined;
    verificationCode?: string | undefined;
}
export interface SetPasswordResponse {
    details: Details | undefined;
}
export interface ListAuthenticationMethodTypesRequest {
    userId: string;
    domainQuery?: DomainQuery | undefined;
}
export interface DomainQuery {
    /** List also auth method types without domain information like passkey and U2F added through V1 APIs / Login UI. */
    includeWithoutDomain: boolean;
    /** List only auth methods with specific domain. */
    domain: string;
}
export interface ListAuthenticationMethodTypesResponse {
    details: ListDetails | undefined;
    authMethodTypes: AuthenticationMethodType[];
}
export interface ListAuthenticationFactorsRequest {
    userId: string;
    authFactors: AuthFactors[];
    states: AuthFactorState[];
}
export interface ListAuthenticationFactorsResponse {
    result: AuthFactor[];
}
export interface CreateInviteCodeRequest {
    userId: string;
    sendCode?: SendInviteCode | undefined;
    returnCode?: ReturnInviteCode | undefined;
}
export interface CreateInviteCodeResponse {
    details: Details | undefined;
    /** The invite code is returned if the verification was set to return_code. */
    inviteCode?: string | undefined;
}
export interface ResendInviteCodeRequest {
    userId: string;
}
export interface ResendInviteCodeResponse {
    details: Details | undefined;
}
export interface VerifyInviteCodeRequest {
    userId: string;
    verificationCode: string;
}
export interface VerifyInviteCodeResponse {
    details: Details | undefined;
}
export interface HumanMFAInitSkippedRequest {
    userId: string;
}
export interface HumanMFAInitSkippedResponse {
    details: Details | undefined;
}
export interface AddSecretRequest {
    /** The users resource ID. */
    userId: string;
}
export interface AddSecretResponse {
    /** The timestamp of the secret creation. */
    creationDate: Date | undefined;
    /**
     * The client secret.
     * Store this secret in a secure place.
     * It is not possible to retrieve it again.
     */
    clientSecret: string;
}
export interface RemoveSecretRequest {
    /** The users resource ID. */
    userId: string;
}
export interface RemoveSecretResponse {
    /** The timestamp of the secret deletion. */
    deletionDate: Date | undefined;
}
export interface AddKeyRequest {
    /** The users resource ID. */
    userId: string;
    /** The date the key will expire and no logins will be possible anymore. */
    expirationDate: Date | undefined;
    /** Optionally provide a public key of your own generated RSA private key. */
    publicKey: Buffer;
}
export interface AddKeyResponse {
    /** The timestamp of the key creation. */
    creationDate: Date | undefined;
    /** The keys ID. */
    keyId: string;
    /** The key which is usable to authenticate against the API. */
    keyContent: Buffer;
}
export interface RemoveKeyRequest {
    /** The users resource ID. */
    userId: string;
    /** The keys ID. */
    keyId: string;
}
export interface RemoveKeyResponse {
    /** The timestamp of the key deletion. */
    deletionDate: Date | undefined;
}
export interface ListKeysRequest {
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: KeyFieldName | undefined;
    /** Define the criteria to query for. */
    filters: KeysSearchFilter[];
}
export interface ListKeysResponse {
    pagination: PaginationResponse | undefined;
    result: Key[];
}
export interface AddPersonalAccessTokenRequest {
    /** The users resource ID. */
    userId: string;
    /** The timestamp when the token will expire. */
    expirationDate: Date | undefined;
}
export interface AddPersonalAccessTokenResponse {
    /** The timestamp of the personal access token creation. */
    creationDate: Date | undefined;
    /** The tokens ID. */
    tokenId: string;
    /** The personal access token that can be used to authenticate against the API */
    token: string;
}
export interface RemovePersonalAccessTokenRequest {
    /** The users resource ID. */
    userId: string;
    /** The tokens ID. */
    tokenId: string;
}
export interface RemovePersonalAccessTokenResponse {
    /** The timestamp of the personal access token deletion. */
    deletionDate: Date | undefined;
}
export interface ListPersonalAccessTokensRequest {
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: PersonalAccessTokenFieldName | undefined;
    /** Define the criteria to query for. */
    filters: PersonalAccessTokensSearchFilter[];
}
export interface ListPersonalAccessTokensResponse {
    pagination: PaginationResponse | undefined;
    result: PersonalAccessToken[];
}
export interface Metadata {
    /** Key in the metadata key/value pair. */
    key: string;
    /** Value in the metadata key/value pair. */
    value: Buffer;
}
export interface SetUserMetadataRequest {
    /** ID of the user under which the metadata gets set. */
    userId: string;
    /** Metadata to bet set. The values have to be base64 encoded. */
    metadata: Metadata[];
}
export interface SetUserMetadataResponse {
    /** The timestamp of the update of the user metadata. */
    setDate: Date | undefined;
}
export interface ListUserMetadataRequest {
    /** ID of the user under which the metadata is to be listed. */
    userId: string;
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** Define the criteria to query for. */
    filters: MetadataSearchFilter[];
}
export interface ListUserMetadataResponse {
    /** Pagination of the users metadata results. */
    pagination: PaginationResponse | undefined;
    /** The user metadata requested. */
    metadata: Metadata1[];
}
export interface DeleteUserMetadataRequest {
    /** ID of the user which metadata is to be deleted is stored on. */
    userId: string;
    /** The keys for the user metadata to be deleted. */
    keys: string[];
}
export interface DeleteUserMetadataResponse {
    /** The timestamp of the deletion of the user metadata. */
    deletionDate: Date | undefined;
}
export declare const AddHumanUserRequest: MessageFns<AddHumanUserRequest>;
export declare const AddHumanUserResponse: MessageFns<AddHumanUserResponse>;
export declare const CreateUserRequest: MessageFns<CreateUserRequest>;
export declare const CreateUserRequest_Human: MessageFns<CreateUserRequest_Human>;
export declare const CreateUserRequest_Machine: MessageFns<CreateUserRequest_Machine>;
export declare const CreateUserResponse: MessageFns<CreateUserResponse>;
export declare const GetUserByIDRequest: MessageFns<GetUserByIDRequest>;
export declare const GetUserByIDResponse: MessageFns<GetUserByIDResponse>;
export declare const ListUsersRequest: MessageFns<ListUsersRequest>;
export declare const ListUsersResponse: MessageFns<ListUsersResponse>;
export declare const SetEmailRequest: MessageFns<SetEmailRequest>;
export declare const SetEmailResponse: MessageFns<SetEmailResponse>;
export declare const ResendEmailCodeRequest: MessageFns<ResendEmailCodeRequest>;
export declare const ResendEmailCodeResponse: MessageFns<ResendEmailCodeResponse>;
export declare const SendEmailCodeRequest: MessageFns<SendEmailCodeRequest>;
export declare const SendEmailCodeResponse: MessageFns<SendEmailCodeResponse>;
export declare const VerifyEmailRequest: MessageFns<VerifyEmailRequest>;
export declare const VerifyEmailResponse: MessageFns<VerifyEmailResponse>;
export declare const SetPhoneRequest: MessageFns<SetPhoneRequest>;
export declare const SetPhoneResponse: MessageFns<SetPhoneResponse>;
export declare const RemovePhoneRequest: MessageFns<RemovePhoneRequest>;
export declare const RemovePhoneResponse: MessageFns<RemovePhoneResponse>;
export declare const ResendPhoneCodeRequest: MessageFns<ResendPhoneCodeRequest>;
export declare const ResendPhoneCodeResponse: MessageFns<ResendPhoneCodeResponse>;
export declare const VerifyPhoneRequest: MessageFns<VerifyPhoneRequest>;
export declare const VerifyPhoneResponse: MessageFns<VerifyPhoneResponse>;
export declare const DeleteUserRequest: MessageFns<DeleteUserRequest>;
export declare const DeleteUserResponse: MessageFns<DeleteUserResponse>;
export declare const UpdateUserRequest: MessageFns<UpdateUserRequest>;
export declare const UpdateUserRequest_Human: MessageFns<UpdateUserRequest_Human>;
export declare const UpdateUserRequest_Human_Profile: MessageFns<UpdateUserRequest_Human_Profile>;
export declare const UpdateUserRequest_Machine: MessageFns<UpdateUserRequest_Machine>;
export declare const UpdateUserResponse: MessageFns<UpdateUserResponse>;
export declare const UpdateHumanUserRequest: MessageFns<UpdateHumanUserRequest>;
export declare const UpdateHumanUserResponse: MessageFns<UpdateHumanUserResponse>;
export declare const DeactivateUserRequest: MessageFns<DeactivateUserRequest>;
export declare const DeactivateUserResponse: MessageFns<DeactivateUserResponse>;
export declare const ReactivateUserRequest: MessageFns<ReactivateUserRequest>;
export declare const ReactivateUserResponse: MessageFns<ReactivateUserResponse>;
export declare const LockUserRequest: MessageFns<LockUserRequest>;
export declare const LockUserResponse: MessageFns<LockUserResponse>;
export declare const UnlockUserRequest: MessageFns<UnlockUserRequest>;
export declare const UnlockUserResponse: MessageFns<UnlockUserResponse>;
export declare const RegisterPasskeyRequest: MessageFns<RegisterPasskeyRequest>;
export declare const RegisterPasskeyResponse: MessageFns<RegisterPasskeyResponse>;
export declare const VerifyPasskeyRegistrationRequest: MessageFns<VerifyPasskeyRegistrationRequest>;
export declare const VerifyPasskeyRegistrationResponse: MessageFns<VerifyPasskeyRegistrationResponse>;
export declare const RegisterU2FRequest: MessageFns<RegisterU2FRequest>;
export declare const RegisterU2FResponse: MessageFns<RegisterU2FResponse>;
export declare const VerifyU2FRegistrationRequest: MessageFns<VerifyU2FRegistrationRequest>;
export declare const VerifyU2FRegistrationResponse: MessageFns<VerifyU2FRegistrationResponse>;
export declare const RemoveU2FRequest: MessageFns<RemoveU2FRequest>;
export declare const RemoveU2FResponse: MessageFns<RemoveU2FResponse>;
export declare const RegisterTOTPRequest: MessageFns<RegisterTOTPRequest>;
export declare const RegisterTOTPResponse: MessageFns<RegisterTOTPResponse>;
export declare const VerifyTOTPRegistrationRequest: MessageFns<VerifyTOTPRegistrationRequest>;
export declare const VerifyTOTPRegistrationResponse: MessageFns<VerifyTOTPRegistrationResponse>;
export declare const RemoveTOTPRequest: MessageFns<RemoveTOTPRequest>;
export declare const RemoveTOTPResponse: MessageFns<RemoveTOTPResponse>;
export declare const AddOTPSMSRequest: MessageFns<AddOTPSMSRequest>;
export declare const AddOTPSMSResponse: MessageFns<AddOTPSMSResponse>;
export declare const RemoveOTPSMSRequest: MessageFns<RemoveOTPSMSRequest>;
export declare const RemoveOTPSMSResponse: MessageFns<RemoveOTPSMSResponse>;
export declare const AddOTPEmailRequest: MessageFns<AddOTPEmailRequest>;
export declare const AddOTPEmailResponse: MessageFns<AddOTPEmailResponse>;
export declare const RemoveOTPEmailRequest: MessageFns<RemoveOTPEmailRequest>;
export declare const RemoveOTPEmailResponse: MessageFns<RemoveOTPEmailResponse>;
export declare const CreatePasskeyRegistrationLinkRequest: MessageFns<CreatePasskeyRegistrationLinkRequest>;
export declare const CreatePasskeyRegistrationLinkResponse: MessageFns<CreatePasskeyRegistrationLinkResponse>;
export declare const ListPasskeysRequest: MessageFns<ListPasskeysRequest>;
export declare const ListPasskeysResponse: MessageFns<ListPasskeysResponse>;
export declare const RemovePasskeyRequest: MessageFns<RemovePasskeyRequest>;
export declare const RemovePasskeyResponse: MessageFns<RemovePasskeyResponse>;
export declare const StartIdentityProviderIntentRequest: MessageFns<StartIdentityProviderIntentRequest>;
export declare const StartIdentityProviderIntentResponse: MessageFns<StartIdentityProviderIntentResponse>;
export declare const RetrieveIdentityProviderIntentRequest: MessageFns<RetrieveIdentityProviderIntentRequest>;
export declare const RetrieveIdentityProviderIntentResponse: MessageFns<RetrieveIdentityProviderIntentResponse>;
export declare const AddIDPLinkRequest: MessageFns<AddIDPLinkRequest>;
export declare const AddIDPLinkResponse: MessageFns<AddIDPLinkResponse>;
export declare const ListIDPLinksRequest: MessageFns<ListIDPLinksRequest>;
export declare const ListIDPLinksResponse: MessageFns<ListIDPLinksResponse>;
export declare const RemoveIDPLinkRequest: MessageFns<RemoveIDPLinkRequest>;
export declare const RemoveIDPLinkResponse: MessageFns<RemoveIDPLinkResponse>;
export declare const PasswordResetRequest: MessageFns<PasswordResetRequest>;
export declare const PasswordResetResponse: MessageFns<PasswordResetResponse>;
export declare const SetPasswordRequest: MessageFns<SetPasswordRequest>;
export declare const SetPasswordResponse: MessageFns<SetPasswordResponse>;
export declare const ListAuthenticationMethodTypesRequest: MessageFns<ListAuthenticationMethodTypesRequest>;
export declare const DomainQuery: MessageFns<DomainQuery>;
export declare const ListAuthenticationMethodTypesResponse: MessageFns<ListAuthenticationMethodTypesResponse>;
export declare const ListAuthenticationFactorsRequest: MessageFns<ListAuthenticationFactorsRequest>;
export declare const ListAuthenticationFactorsResponse: MessageFns<ListAuthenticationFactorsResponse>;
export declare const CreateInviteCodeRequest: MessageFns<CreateInviteCodeRequest>;
export declare const CreateInviteCodeResponse: MessageFns<CreateInviteCodeResponse>;
export declare const ResendInviteCodeRequest: MessageFns<ResendInviteCodeRequest>;
export declare const ResendInviteCodeResponse: MessageFns<ResendInviteCodeResponse>;
export declare const VerifyInviteCodeRequest: MessageFns<VerifyInviteCodeRequest>;
export declare const VerifyInviteCodeResponse: MessageFns<VerifyInviteCodeResponse>;
export declare const HumanMFAInitSkippedRequest: MessageFns<HumanMFAInitSkippedRequest>;
export declare const HumanMFAInitSkippedResponse: MessageFns<HumanMFAInitSkippedResponse>;
export declare const AddSecretRequest: MessageFns<AddSecretRequest>;
export declare const AddSecretResponse: MessageFns<AddSecretResponse>;
export declare const RemoveSecretRequest: MessageFns<RemoveSecretRequest>;
export declare const RemoveSecretResponse: MessageFns<RemoveSecretResponse>;
export declare const AddKeyRequest: MessageFns<AddKeyRequest>;
export declare const AddKeyResponse: MessageFns<AddKeyResponse>;
export declare const RemoveKeyRequest: MessageFns<RemoveKeyRequest>;
export declare const RemoveKeyResponse: MessageFns<RemoveKeyResponse>;
export declare const ListKeysRequest: MessageFns<ListKeysRequest>;
export declare const ListKeysResponse: MessageFns<ListKeysResponse>;
export declare const AddPersonalAccessTokenRequest: MessageFns<AddPersonalAccessTokenRequest>;
export declare const AddPersonalAccessTokenResponse: MessageFns<AddPersonalAccessTokenResponse>;
export declare const RemovePersonalAccessTokenRequest: MessageFns<RemovePersonalAccessTokenRequest>;
export declare const RemovePersonalAccessTokenResponse: MessageFns<RemovePersonalAccessTokenResponse>;
export declare const ListPersonalAccessTokensRequest: MessageFns<ListPersonalAccessTokensRequest>;
export declare const ListPersonalAccessTokensResponse: MessageFns<ListPersonalAccessTokensResponse>;
export declare const Metadata: MessageFns<Metadata>;
export declare const SetUserMetadataRequest: MessageFns<SetUserMetadataRequest>;
export declare const SetUserMetadataResponse: MessageFns<SetUserMetadataResponse>;
export declare const ListUserMetadataRequest: MessageFns<ListUserMetadataRequest>;
export declare const ListUserMetadataResponse: MessageFns<ListUserMetadataResponse>;
export declare const DeleteUserMetadataRequest: MessageFns<DeleteUserMetadataRequest>;
export declare const DeleteUserMetadataResponse: MessageFns<DeleteUserMetadataResponse>;
export type UserServiceDefinition = typeof UserServiceDefinition;
export declare const UserServiceDefinition: {
    readonly name: "UserService";
    readonly fullName: "zitadel.user.v2.UserService";
    readonly methods: {
        /**
         * Create a User
         *
         * Create a new human or machine user in the specified organization.
         *
         * Required permission:
         *   - user.write
         */
        readonly createUser: {
            readonly name: "CreateUser";
            readonly requestType: MessageFns<CreateUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Create a new human user
         *
         * Deprecated: Use [CreateUser](apis/resources/user_service_v2/user-service-create-user.api.mdx) to create a new user of type human instead.
         *
         * Create/import a new user with the type human. The newly created user will get a verification email if either the email address is not marked as verified and you did not request the verification to be returned.
         */
        readonly addHumanUser: {
            readonly name: "AddHumanUser";
            readonly requestType: MessageFns<AddHumanUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddHumanUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * User by ID
         *
         * Returns the full user object (human or machine) including the profile, email, etc..
         */
        readonly getUserByID: {
            readonly name: "GetUserByID";
            readonly requestType: MessageFns<GetUserByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Search Users
         *
         * Search for users. By default, we will return all users of your instance that you have permission to read. Make sure to include a limit and sorting for pagination.
         */
        readonly listUsers: {
            readonly name: "ListUsers";
            readonly requestType: MessageFns<ListUsersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListUsersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Change the user email
         *
         * Deprecated: [Update the users email field](apis/resources/user_service_v2/user-service-update-user.api.mdx).
         *
         * Change the email address of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by email..
         */
        readonly setEmail: {
            readonly name: "SetEmail";
            readonly requestType: MessageFns<SetEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Resend code to verify user email */
        readonly resendEmailCode: {
            readonly name: "ResendEmailCode";
            readonly requestType: MessageFns<ResendEmailCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendEmailCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Send code to verify user email */
        readonly sendEmailCode: {
            readonly name: "SendEmailCode";
            readonly requestType: MessageFns<SendEmailCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SendEmailCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Verify the email
         *
         * Verify the email with the generated code.
         */
        readonly verifyEmail: {
            readonly name: "VerifyEmail";
            readonly requestType: MessageFns<VerifyEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Set the user phone
         *
         * Deprecated: [Update the users phone field](apis/resources/user_service_v2/user-service-update-user.api.mdx).
         *
         * Set the phone number of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by sms..
         */
        readonly setPhone: {
            readonly name: "SetPhone";
            readonly requestType: MessageFns<SetPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Delete the user phone
         *
         * Deprecated: [Update the users phone field](apis/resources/user_service_v2/user-service-update-user.api.mdx) to remove the phone number.
         *
         * Delete the phone number of a user.
         */
        readonly removePhone: {
            readonly name: "RemovePhone";
            readonly requestType: MessageFns<RemovePhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemovePhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Resend code to verify user phone number
         *
         * Resend code to verify user phone number.
         */
        readonly resendPhoneCode: {
            readonly name: "ResendPhoneCode";
            readonly requestType: MessageFns<ResendPhoneCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendPhoneCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Verify the phone number
         *
         * Verify the phone number with the generated code.
         */
        readonly verifyPhone: {
            readonly name: "VerifyPhone";
            readonly requestType: MessageFns<VerifyPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Update a User
         *
         * Partially update an existing user.
         * If you change the users email or phone, you can specify how the ownership should be verified.
         * If you change the users password, you can specify if the password should be changed again on the users next login.
         *
         * Required permission:
         *   - user.write
         */
        readonly updateUser: {
            readonly name: "UpdateUser";
            readonly requestType: MessageFns<UpdateUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Update Human User
         *
         * Deprecated: Use [UpdateUser](apis/resources/user_service_v2/user-service-update-user.api.mdx) to update a user of type human instead.
         *
         * Update all information from a user.
         */
        readonly updateHumanUser: {
            readonly name: "UpdateHumanUser";
            readonly requestType: MessageFns<UpdateHumanUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateHumanUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Deactivate user
         *
         * The state of the user will be changed to 'deactivated'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'deactivated'. Use deactivate user when the user should not be able to use the account anymore, but you still need access to the user data..
         */
        readonly deactivateUser: {
            readonly name: "DeactivateUser";
            readonly requestType: MessageFns<DeactivateUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Reactivate user
         *
         * Reactivate a user with the state 'deactivated'. The user will be able to log in again afterward. The endpoint returns an error if the user is not in the state 'deactivated'..
         */
        readonly reactivateUser: {
            readonly name: "ReactivateUser";
            readonly requestType: MessageFns<ReactivateUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Lock user
         *
         * The state of the user will be changed to 'locked'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'locked'. Use this endpoint if the user should not be able to log in temporarily because of an event that happened (wrong password, etc.)..
         */
        readonly lockUser: {
            readonly name: "LockUser";
            readonly requestType: MessageFns<LockUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<LockUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Unlock user
         *
         * The state of the user will be changed to 'active'. The user will be able to log in again. The endpoint returns an error if the user is not in the state 'locked'.
         */
        readonly unlockUser: {
            readonly name: "UnlockUser";
            readonly requestType: MessageFns<UnlockUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UnlockUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Delete user
         *
         * The state of the user will be changed to 'deleted'. The user will not be able to log in anymore. Endpoints requesting this user will return an error 'User not found..
         */
        readonly deleteUser: {
            readonly name: "DeleteUser";
            readonly requestType: MessageFns<DeleteUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Start the registration of passkey for a user
         *
         * Start the registration of a passkey for a user, as a response the public key credential creation options are returned, which are used to verify the passkey..
         */
        readonly registerPasskey: {
            readonly name: "RegisterPasskey";
            readonly requestType: MessageFns<RegisterPasskeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegisterPasskeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Verify a passkey for a user
         *
         * Verify the passkey registration with the public key credential..
         */
        readonly verifyPasskeyRegistration: {
            readonly name: "VerifyPasskeyRegistration";
            readonly requestType: MessageFns<VerifyPasskeyRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyPasskeyRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Create a passkey registration link for a user
         *
         * Create a passkey registration link which includes a code and either return it or send it to the user..
         */
        readonly createPasskeyRegistrationLink: {
            readonly name: "CreatePasskeyRegistrationLink";
            readonly requestType: MessageFns<CreatePasskeyRegistrationLinkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreatePasskeyRegistrationLinkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * List passkeys of an user
         *
         * List passkeys of an user
         */
        readonly listPasskeys: {
            readonly name: "ListPasskeys";
            readonly requestType: MessageFns<ListPasskeysRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListPasskeysResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove passkey from a user
         *
         * Remove passkey from a user.
         */
        readonly removePasskey: {
            readonly name: "RemovePasskey";
            readonly requestType: MessageFns<RemovePasskeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemovePasskeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Start the registration of a u2f token for a user
         *
         * Start the registration of a u2f token for a user, as a response the public key credential creation options are returned, which are used to verify the u2f token..
         */
        readonly registerU2F: {
            readonly name: "RegisterU2F";
            readonly requestType: MessageFns<RegisterU2FRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegisterU2FResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Verify a u2f token for a user
         *
         * Verify the u2f token registration with the public key credential..
         */
        readonly verifyU2FRegistration: {
            readonly name: "VerifyU2FRegistration";
            readonly requestType: MessageFns<VerifyU2FRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyU2FRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove u2f token from a user
         *
         * Remove u2f token from a user.
         */
        readonly removeU2F: {
            readonly name: "RemoveU2F";
            readonly requestType: MessageFns<RemoveU2FRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveU2FResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Start the registration of a TOTP generator for a user
         *
         * Start the registration of a TOTP generator for a user, as a response a secret returned, which is used to initialize a TOTP app or device..
         */
        readonly registerTOTP: {
            readonly name: "RegisterTOTP";
            readonly requestType: MessageFns<RegisterTOTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegisterTOTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Verify a TOTP generator for a user
         *
         * Verify the TOTP registration with a generated code..
         */
        readonly verifyTOTPRegistration: {
            readonly name: "VerifyTOTPRegistration";
            readonly requestType: MessageFns<VerifyTOTPRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyTOTPRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove TOTP generator from a user
         *
         * Remove the configured TOTP generator of a user. As only one TOTP generator per user is allowed, the user will not have TOTP as a second factor afterward.
         */
        readonly removeTOTP: {
            readonly name: "RemoveTOTP";
            readonly requestType: MessageFns<RemoveTOTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveTOTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Add OTP SMS for a user
         *
         * Add a new One-Time Password (OTP) SMS factor to the authenticated user. OTP SMS will enable the user to verify a OTP with the latest verified phone number. The phone number has to be verified to add the second factor..
         */
        readonly addOTPSMS: {
            readonly name: "AddOTPSMS";
            readonly requestType: MessageFns<AddOTPSMSRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOTPSMSResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove One-Time Password (OTP) SMS from a user
         *
         * Remove the configured One-Time Password (OTP) SMS factor of a user. As only one OTP SMS per user is allowed, the user will not have OTP SMS as a second factor afterward.
         */
        readonly removeOTPSMS: {
            readonly name: "RemoveOTPSMS";
            readonly requestType: MessageFns<RemoveOTPSMSRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOTPSMSResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Add OTP Email for a user
         *
         * Add a new One-Time Password (OTP) Email factor to the authenticated user. OTP Email will enable the user to verify a OTP with the latest verified email. The email has to be verified to add the second factor..
         */
        readonly addOTPEmail: {
            readonly name: "AddOTPEmail";
            readonly requestType: MessageFns<AddOTPEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOTPEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove One-Time Password (OTP) Email from a user
         *
         * Remove the configured One-Time Password (OTP) Email factor of a user. As only one OTP Email per user is allowed, the user will not have OTP Email as a second factor afterward.
         */
        readonly removeOTPEmail: {
            readonly name: "RemoveOTPEmail";
            readonly requestType: MessageFns<RemoveOTPEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOTPEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Start flow with an identity provider
         *
         * Start a flow with an identity provider, for external login, registration or linking..
         */
        readonly startIdentityProviderIntent: {
            readonly name: "StartIdentityProviderIntent";
            readonly requestType: MessageFns<StartIdentityProviderIntentRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<StartIdentityProviderIntentResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Retrieve the information returned by the identity provider
         *
         * Retrieve the information returned by the identity provider for registration or updating an existing user with new information..
         */
        readonly retrieveIdentityProviderIntent: {
            readonly name: "RetrieveIdentityProviderIntent";
            readonly requestType: MessageFns<RetrieveIdentityProviderIntentRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RetrieveIdentityProviderIntentResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Add link to an identity provider to an user
         *
         * Add link to an identity provider to an user..
         */
        readonly addIDPLink: {
            readonly name: "AddIDPLink";
            readonly requestType: MessageFns<AddIDPLinkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddIDPLinkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * List links to an identity provider of an user
         *
         * List links to an identity provider of an user.
         */
        readonly listIDPLinks: {
            readonly name: "ListIDPLinks";
            readonly requestType: MessageFns<ListIDPLinksRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListIDPLinksResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove link of an identity provider to an user
         *
         * Remove link of an identity provider to an user.
         */
        readonly removeIDPLink: {
            readonly name: "RemoveIDPLink";
            readonly requestType: MessageFns<RemoveIDPLinkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveIDPLinkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Request a code to reset a password
         *
         * Request a code to reset a password..
         */
        readonly passwordReset: {
            readonly name: "PasswordReset";
            readonly requestType: MessageFns<PasswordResetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<PasswordResetResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Change password
         *
         * Deprecated: [Update the users password](apis/resources/user_service_v2/user-service-update-user.api.mdx) instead.
         *
         * Change the password of a user with either a verification code or the current password..
         */
        readonly setPassword: {
            readonly name: "SetPassword";
            readonly requestType: MessageFns<SetPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetPasswordResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Add a Users Secret
         *
         * Generates a client secret for the user.
         * The client id is the users username.
         * If the user already has a secret, it is overwritten.
         * Only users of type machine can have a secret.
         *
         * Required permission:
         *   - user.write
         */
        readonly addSecret: {
            readonly name: "AddSecret";
            readonly requestType: MessageFns<AddSecretRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddSecretResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove a Users Secret
         *
         * Remove the current client ID and client secret from a machine user.
         *
         * Required permission:
         *   - user.write
         */
        readonly removeSecret: {
            readonly name: "RemoveSecret";
            readonly requestType: MessageFns<RemoveSecretRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveSecretResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Add a Key
         *
         * Add a keys that can be used to securely authenticate at the Zitadel APIs using JWT profile authentication using short-lived tokens.
         * Make sure you store the returned key safely, as you won't be able to read it from the Zitadel API anymore.
         * Only users of type machine can have keys.
         *
         * Required permission:
         *   - user.write
         */
        readonly addKey: {
            readonly name: "AddKey";
            readonly requestType: MessageFns<AddKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove a Key
         *
         * Remove a machine users key by the given key ID and an optionally given user ID.
         *
         * Required permission:
         *   - user.write
         */
        readonly removeKey: {
            readonly name: "RemoveKey";
            readonly requestType: MessageFns<RemoveKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Search Keys
         *
         * List all matching keys. By default all keys of the instance on which the caller has permission to read the owning users are returned.
         * Make sure to include a limit and sorting for pagination.
         *
         * Required permission:
         *   - user.read
         */
        readonly listKeys: {
            readonly name: "ListKeys";
            readonly requestType: MessageFns<ListKeysRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListKeysResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Add a Personal Access Token
         *
         * Personal access tokens (PAT) are the easiest way to authenticate to the Zitadel APIs.
         * Make sure you store the returned PAT safely, as you won't be able to read it from the Zitadel API anymore.
         * Only users of type machine can have personal access tokens.
         *
         * Required permission:
         *   - user.write
         */
        readonly addPersonalAccessToken: {
            readonly name: "AddPersonalAccessToken";
            readonly requestType: MessageFns<AddPersonalAccessTokenRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddPersonalAccessTokenResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Remove a Personal Access Token
         *
         * Removes a machine users personal access token by the given token ID and an optionally given user ID.
         *
         * Required permission:
         *   - user.write
         */
        readonly removePersonalAccessToken: {
            readonly name: "RemovePersonalAccessToken";
            readonly requestType: MessageFns<RemovePersonalAccessTokenRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemovePersonalAccessTokenResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Search Personal Access Tokens
         *
         * List all personal access tokens. By default all personal access tokens of the instance on which the caller has permission to read the owning users are returned.
         * Make sure to include a limit and sorting for pagination.
         *
         * Required permission:
         *   - user.read
         */
        readonly listPersonalAccessTokens: {
            readonly name: "ListPersonalAccessTokens";
            readonly requestType: MessageFns<ListPersonalAccessTokensRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListPersonalAccessTokensResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * List all possible authentication methods of a user
         *
         * List all possible authentication methods of a user like password, passwordless, (T)OTP and more..
         */
        readonly listAuthenticationMethodTypes: {
            readonly name: "ListAuthenticationMethodTypes";
            readonly requestType: MessageFns<ListAuthenticationMethodTypesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAuthenticationMethodTypesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAuthenticationFactors: {
            readonly name: "ListAuthenticationFactors";
            readonly requestType: MessageFns<ListAuthenticationFactorsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAuthenticationFactorsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Create an invite code for a user
         *
         * Create an invite code for a user to initialize their first authentication method (password, passkeys, IdP) depending on the organization's available methods.
         * If an invite code has been created previously, it's url template and application name will be used as defaults for the new code.
         * The new code will overwrite the previous one and make it invalid.
         * Note: It is possible to reissue a new code only when the previous code has expired, or when the user provides a wrong code three or more times during verification.
         */
        readonly createInviteCode: {
            readonly name: "CreateInviteCode";
            readonly requestType: MessageFns<CreateInviteCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateInviteCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Resend an invite code for a user
         *
         * Deprecated: Use [CreateInviteCode](apis/resources/user_service_v2/user-service-create-invite-code.api.mdx) instead.
         *
         * Resend an invite code for a user to initialize their first authentication method (password, passkeys, IdP) depending on the organization's available methods.
         * A resend is only possible if a code has been created previously and sent to the user. If there is no code or it was directly returned, an error will be returned.
         */
        readonly resendInviteCode: {
            readonly name: "ResendInviteCode";
            readonly requestType: MessageFns<ResendInviteCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendInviteCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Verify an invite code for a user
         *
         * Verify the invite code of a user previously issued. This will set their email to a verified state and
         * allow the user to set up their first authentication method (password, passkeys, IdP) depending on the organization's available methods.
         */
        readonly verifyInviteCode: {
            readonly name: "VerifyInviteCode";
            readonly requestType: MessageFns<VerifyInviteCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyInviteCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * MFA Init Skipped
         *
         * Update the last time the user has skipped MFA initialization. The server timestamp is used.
         */
        readonly humanMFAInitSkipped: {
            readonly name: "HumanMFAInitSkipped";
            readonly requestType: MessageFns<HumanMFAInitSkippedRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<HumanMFAInitSkippedResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Set User Metadata
         *
         * Sets a list of key value pairs. Existing metadata entries with matching keys are overwritten. Existing metadata entries without matching keys are untouched. To remove metadata entries, use [DeleteUserMetadata](apis/resources/user_service_v2/user-service-delete-user-metadata.api.mdx). For HTTP requests, make sure the bytes array value is base64 encoded.
         *
         * Required permission:
         *  - `user.write`
         */
        readonly setUserMetadata: {
            readonly name: "SetUserMetadata";
            readonly requestType: MessageFns<SetUserMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetUserMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * List User Metadata
         *
         * List metadata of an user filtered by query.
         *
         * Required permission:
         *  - `user.read`
         */
        readonly listUserMetadata: {
            readonly name: "ListUserMetadata";
            readonly requestType: MessageFns<ListUserMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListUserMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Delete User Metadata
         *
         * Delete metadata objects from an user with a specific key.
         *
         * Required permission:
         *  - `user.write`
         */
        readonly deleteUserMetadata: {
            readonly name: "DeleteUserMetadata";
            readonly requestType: MessageFns<DeleteUserMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteUserMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface UserServiceImplementation<CallContextExt = {}> {
    /**
     * Create a User
     *
     * Create a new human or machine user in the specified organization.
     *
     * Required permission:
     *   - user.write
     */
    createUser(request: CreateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateUserResponse>>;
    /**
     * Create a new human user
     *
     * Deprecated: Use [CreateUser](apis/resources/user_service_v2/user-service-create-user.api.mdx) to create a new user of type human instead.
     *
     * Create/import a new user with the type human. The newly created user will get a verification email if either the email address is not marked as verified and you did not request the verification to be returned.
     */
    addHumanUser(request: AddHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddHumanUserResponse>>;
    /**
     * User by ID
     *
     * Returns the full user object (human or machine) including the profile, email, etc..
     */
    getUserByID(request: GetUserByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserByIDResponse>>;
    /**
     * Search Users
     *
     * Search for users. By default, we will return all users of your instance that you have permission to read. Make sure to include a limit and sorting for pagination.
     */
    listUsers(request: ListUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUsersResponse>>;
    /**
     * Change the user email
     *
     * Deprecated: [Update the users email field](apis/resources/user_service_v2/user-service-update-user.api.mdx).
     *
     * Change the email address of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by email..
     */
    setEmail(request: SetEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetEmailResponse>>;
    /** Resend code to verify user email */
    resendEmailCode(request: ResendEmailCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendEmailCodeResponse>>;
    /** Send code to verify user email */
    sendEmailCode(request: SendEmailCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendEmailCodeResponse>>;
    /**
     * Verify the email
     *
     * Verify the email with the generated code.
     */
    verifyEmail(request: VerifyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyEmailResponse>>;
    /**
     * Set the user phone
     *
     * Deprecated: [Update the users phone field](apis/resources/user_service_v2/user-service-update-user.api.mdx).
     *
     * Set the phone number of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by sms..
     */
    setPhone(request: SetPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPhoneResponse>>;
    /**
     * Delete the user phone
     *
     * Deprecated: [Update the users phone field](apis/resources/user_service_v2/user-service-update-user.api.mdx) to remove the phone number.
     *
     * Delete the phone number of a user.
     */
    removePhone(request: RemovePhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemovePhoneResponse>>;
    /**
     * Resend code to verify user phone number
     *
     * Resend code to verify user phone number.
     */
    resendPhoneCode(request: ResendPhoneCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendPhoneCodeResponse>>;
    /**
     * Verify the phone number
     *
     * Verify the phone number with the generated code.
     */
    verifyPhone(request: VerifyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyPhoneResponse>>;
    /**
     * Update a User
     *
     * Partially update an existing user.
     * If you change the users email or phone, you can specify how the ownership should be verified.
     * If you change the users password, you can specify if the password should be changed again on the users next login.
     *
     * Required permission:
     *   - user.write
     */
    updateUser(request: UpdateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateUserResponse>>;
    /**
     * Update Human User
     *
     * Deprecated: Use [UpdateUser](apis/resources/user_service_v2/user-service-update-user.api.mdx) to update a user of type human instead.
     *
     * Update all information from a user.
     */
    updateHumanUser(request: UpdateHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateHumanUserResponse>>;
    /**
     * Deactivate user
     *
     * The state of the user will be changed to 'deactivated'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'deactivated'. Use deactivate user when the user should not be able to use the account anymore, but you still need access to the user data..
     */
    deactivateUser(request: DeactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserResponse>>;
    /**
     * Reactivate user
     *
     * Reactivate a user with the state 'deactivated'. The user will be able to log in again afterward. The endpoint returns an error if the user is not in the state 'deactivated'..
     */
    reactivateUser(request: ReactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateUserResponse>>;
    /**
     * Lock user
     *
     * The state of the user will be changed to 'locked'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'locked'. Use this endpoint if the user should not be able to log in temporarily because of an event that happened (wrong password, etc.)..
     */
    lockUser(request: LockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LockUserResponse>>;
    /**
     * Unlock user
     *
     * The state of the user will be changed to 'active'. The user will be able to log in again. The endpoint returns an error if the user is not in the state 'locked'.
     */
    unlockUser(request: UnlockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UnlockUserResponse>>;
    /**
     * Delete user
     *
     * The state of the user will be changed to 'deleted'. The user will not be able to log in anymore. Endpoints requesting this user will return an error 'User not found..
     */
    deleteUser(request: DeleteUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteUserResponse>>;
    /**
     * Start the registration of passkey for a user
     *
     * Start the registration of a passkey for a user, as a response the public key credential creation options are returned, which are used to verify the passkey..
     */
    registerPasskey(request: RegisterPasskeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterPasskeyResponse>>;
    /**
     * Verify a passkey for a user
     *
     * Verify the passkey registration with the public key credential..
     */
    verifyPasskeyRegistration(request: VerifyPasskeyRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyPasskeyRegistrationResponse>>;
    /**
     * Create a passkey registration link for a user
     *
     * Create a passkey registration link which includes a code and either return it or send it to the user..
     */
    createPasskeyRegistrationLink(request: CreatePasskeyRegistrationLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreatePasskeyRegistrationLinkResponse>>;
    /**
     * List passkeys of an user
     *
     * List passkeys of an user
     */
    listPasskeys(request: ListPasskeysRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListPasskeysResponse>>;
    /**
     * Remove passkey from a user
     *
     * Remove passkey from a user.
     */
    removePasskey(request: RemovePasskeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemovePasskeyResponse>>;
    /**
     * Start the registration of a u2f token for a user
     *
     * Start the registration of a u2f token for a user, as a response the public key credential creation options are returned, which are used to verify the u2f token..
     */
    registerU2F(request: RegisterU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterU2FResponse>>;
    /**
     * Verify a u2f token for a user
     *
     * Verify the u2f token registration with the public key credential..
     */
    verifyU2FRegistration(request: VerifyU2FRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyU2FRegistrationResponse>>;
    /**
     * Remove u2f token from a user
     *
     * Remove u2f token from a user.
     */
    removeU2F(request: RemoveU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveU2FResponse>>;
    /**
     * Start the registration of a TOTP generator for a user
     *
     * Start the registration of a TOTP generator for a user, as a response a secret returned, which is used to initialize a TOTP app or device..
     */
    registerTOTP(request: RegisterTOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterTOTPResponse>>;
    /**
     * Verify a TOTP generator for a user
     *
     * Verify the TOTP registration with a generated code..
     */
    verifyTOTPRegistration(request: VerifyTOTPRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyTOTPRegistrationResponse>>;
    /**
     * Remove TOTP generator from a user
     *
     * Remove the configured TOTP generator of a user. As only one TOTP generator per user is allowed, the user will not have TOTP as a second factor afterward.
     */
    removeTOTP(request: RemoveTOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveTOTPResponse>>;
    /**
     * Add OTP SMS for a user
     *
     * Add a new One-Time Password (OTP) SMS factor to the authenticated user. OTP SMS will enable the user to verify a OTP with the latest verified phone number. The phone number has to be verified to add the second factor..
     */
    addOTPSMS(request: AddOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPSMSResponse>>;
    /**
     * Remove One-Time Password (OTP) SMS from a user
     *
     * Remove the configured One-Time Password (OTP) SMS factor of a user. As only one OTP SMS per user is allowed, the user will not have OTP SMS as a second factor afterward.
     */
    removeOTPSMS(request: RemoveOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPSMSResponse>>;
    /**
     * Add OTP Email for a user
     *
     * Add a new One-Time Password (OTP) Email factor to the authenticated user. OTP Email will enable the user to verify a OTP with the latest verified email. The email has to be verified to add the second factor..
     */
    addOTPEmail(request: AddOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPEmailResponse>>;
    /**
     * Remove One-Time Password (OTP) Email from a user
     *
     * Remove the configured One-Time Password (OTP) Email factor of a user. As only one OTP Email per user is allowed, the user will not have OTP Email as a second factor afterward.
     */
    removeOTPEmail(request: RemoveOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPEmailResponse>>;
    /**
     * Start flow with an identity provider
     *
     * Start a flow with an identity provider, for external login, registration or linking..
     */
    startIdentityProviderIntent(request: StartIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartIdentityProviderIntentResponse>>;
    /**
     * Retrieve the information returned by the identity provider
     *
     * Retrieve the information returned by the identity provider for registration or updating an existing user with new information..
     */
    retrieveIdentityProviderIntent(request: RetrieveIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RetrieveIdentityProviderIntentResponse>>;
    /**
     * Add link to an identity provider to an user
     *
     * Add link to an identity provider to an user..
     */
    addIDPLink(request: AddIDPLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIDPLinkResponse>>;
    /**
     * List links to an identity provider of an user
     *
     * List links to an identity provider of an user.
     */
    listIDPLinks(request: ListIDPLinksRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListIDPLinksResponse>>;
    /**
     * Remove link of an identity provider to an user
     *
     * Remove link of an identity provider to an user.
     */
    removeIDPLink(request: RemoveIDPLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveIDPLinkResponse>>;
    /**
     * Request a code to reset a password
     *
     * Request a code to reset a password..
     */
    passwordReset(request: PasswordResetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PasswordResetResponse>>;
    /**
     * Change password
     *
     * Deprecated: [Update the users password](apis/resources/user_service_v2/user-service-update-user.api.mdx) instead.
     *
     * Change the password of a user with either a verification code or the current password..
     */
    setPassword(request: SetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPasswordResponse>>;
    /**
     * Add a Users Secret
     *
     * Generates a client secret for the user.
     * The client id is the users username.
     * If the user already has a secret, it is overwritten.
     * Only users of type machine can have a secret.
     *
     * Required permission:
     *   - user.write
     */
    addSecret(request: AddSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSecretResponse>>;
    /**
     * Remove a Users Secret
     *
     * Remove the current client ID and client secret from a machine user.
     *
     * Required permission:
     *   - user.write
     */
    removeSecret(request: RemoveSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveSecretResponse>>;
    /**
     * Add a Key
     *
     * Add a keys that can be used to securely authenticate at the Zitadel APIs using JWT profile authentication using short-lived tokens.
     * Make sure you store the returned key safely, as you won't be able to read it from the Zitadel API anymore.
     * Only users of type machine can have keys.
     *
     * Required permission:
     *   - user.write
     */
    addKey(request: AddKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddKeyResponse>>;
    /**
     * Remove a Key
     *
     * Remove a machine users key by the given key ID and an optionally given user ID.
     *
     * Required permission:
     *   - user.write
     */
    removeKey(request: RemoveKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveKeyResponse>>;
    /**
     * Search Keys
     *
     * List all matching keys. By default all keys of the instance on which the caller has permission to read the owning users are returned.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - user.read
     */
    listKeys(request: ListKeysRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListKeysResponse>>;
    /**
     * Add a Personal Access Token
     *
     * Personal access tokens (PAT) are the easiest way to authenticate to the Zitadel APIs.
     * Make sure you store the returned PAT safely, as you won't be able to read it from the Zitadel API anymore.
     * Only users of type machine can have personal access tokens.
     *
     * Required permission:
     *   - user.write
     */
    addPersonalAccessToken(request: AddPersonalAccessTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddPersonalAccessTokenResponse>>;
    /**
     * Remove a Personal Access Token
     *
     * Removes a machine users personal access token by the given token ID and an optionally given user ID.
     *
     * Required permission:
     *   - user.write
     */
    removePersonalAccessToken(request: RemovePersonalAccessTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemovePersonalAccessTokenResponse>>;
    /**
     * Search Personal Access Tokens
     *
     * List all personal access tokens. By default all personal access tokens of the instance on which the caller has permission to read the owning users are returned.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - user.read
     */
    listPersonalAccessTokens(request: ListPersonalAccessTokensRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListPersonalAccessTokensResponse>>;
    /**
     * List all possible authentication methods of a user
     *
     * List all possible authentication methods of a user like password, passwordless, (T)OTP and more..
     */
    listAuthenticationMethodTypes(request: ListAuthenticationMethodTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAuthenticationMethodTypesResponse>>;
    listAuthenticationFactors(request: ListAuthenticationFactorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAuthenticationFactorsResponse>>;
    /**
     * Create an invite code for a user
     *
     * Create an invite code for a user to initialize their first authentication method (password, passkeys, IdP) depending on the organization's available methods.
     * If an invite code has been created previously, it's url template and application name will be used as defaults for the new code.
     * The new code will overwrite the previous one and make it invalid.
     * Note: It is possible to reissue a new code only when the previous code has expired, or when the user provides a wrong code three or more times during verification.
     */
    createInviteCode(request: CreateInviteCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateInviteCodeResponse>>;
    /**
     * Resend an invite code for a user
     *
     * Deprecated: Use [CreateInviteCode](apis/resources/user_service_v2/user-service-create-invite-code.api.mdx) instead.
     *
     * Resend an invite code for a user to initialize their first authentication method (password, passkeys, IdP) depending on the organization's available methods.
     * A resend is only possible if a code has been created previously and sent to the user. If there is no code or it was directly returned, an error will be returned.
     */
    resendInviteCode(request: ResendInviteCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendInviteCodeResponse>>;
    /**
     * Verify an invite code for a user
     *
     * Verify the invite code of a user previously issued. This will set their email to a verified state and
     * allow the user to set up their first authentication method (password, passkeys, IdP) depending on the organization's available methods.
     */
    verifyInviteCode(request: VerifyInviteCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyInviteCodeResponse>>;
    /**
     * MFA Init Skipped
     *
     * Update the last time the user has skipped MFA initialization. The server timestamp is used.
     */
    humanMFAInitSkipped(request: HumanMFAInitSkippedRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HumanMFAInitSkippedResponse>>;
    /**
     * Set User Metadata
     *
     * Sets a list of key value pairs. Existing metadata entries with matching keys are overwritten. Existing metadata entries without matching keys are untouched. To remove metadata entries, use [DeleteUserMetadata](apis/resources/user_service_v2/user-service-delete-user-metadata.api.mdx). For HTTP requests, make sure the bytes array value is base64 encoded.
     *
     * Required permission:
     *  - `user.write`
     */
    setUserMetadata(request: SetUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetUserMetadataResponse>>;
    /**
     * List User Metadata
     *
     * List metadata of an user filtered by query.
     *
     * Required permission:
     *  - `user.read`
     */
    listUserMetadata(request: ListUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserMetadataResponse>>;
    /**
     * Delete User Metadata
     *
     * Delete metadata objects from an user with a specific key.
     *
     * Required permission:
     *  - `user.write`
     */
    deleteUserMetadata(request: DeleteUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteUserMetadataResponse>>;
}
export interface UserServiceClient<CallOptionsExt = {}> {
    /**
     * Create a User
     *
     * Create a new human or machine user in the specified organization.
     *
     * Required permission:
     *   - user.write
     */
    createUser(request: DeepPartial<CreateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateUserResponse>;
    /**
     * Create a new human user
     *
     * Deprecated: Use [CreateUser](apis/resources/user_service_v2/user-service-create-user.api.mdx) to create a new user of type human instead.
     *
     * Create/import a new user with the type human. The newly created user will get a verification email if either the email address is not marked as verified and you did not request the verification to be returned.
     */
    addHumanUser(request: DeepPartial<AddHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<AddHumanUserResponse>;
    /**
     * User by ID
     *
     * Returns the full user object (human or machine) including the profile, email, etc..
     */
    getUserByID(request: DeepPartial<GetUserByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserByIDResponse>;
    /**
     * Search Users
     *
     * Search for users. By default, we will return all users of your instance that you have permission to read. Make sure to include a limit and sorting for pagination.
     */
    listUsers(request: DeepPartial<ListUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUsersResponse>;
    /**
     * Change the user email
     *
     * Deprecated: [Update the users email field](apis/resources/user_service_v2/user-service-update-user.api.mdx).
     *
     * Change the email address of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by email..
     */
    setEmail(request: DeepPartial<SetEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetEmailResponse>;
    /** Resend code to verify user email */
    resendEmailCode(request: DeepPartial<ResendEmailCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendEmailCodeResponse>;
    /** Send code to verify user email */
    sendEmailCode(request: DeepPartial<SendEmailCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<SendEmailCodeResponse>;
    /**
     * Verify the email
     *
     * Verify the email with the generated code.
     */
    verifyEmail(request: DeepPartial<VerifyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyEmailResponse>;
    /**
     * Set the user phone
     *
     * Deprecated: [Update the users phone field](apis/resources/user_service_v2/user-service-update-user.api.mdx).
     *
     * Set the phone number of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by sms..
     */
    setPhone(request: DeepPartial<SetPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPhoneResponse>;
    /**
     * Delete the user phone
     *
     * Deprecated: [Update the users phone field](apis/resources/user_service_v2/user-service-update-user.api.mdx) to remove the phone number.
     *
     * Delete the phone number of a user.
     */
    removePhone(request: DeepPartial<RemovePhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<RemovePhoneResponse>;
    /**
     * Resend code to verify user phone number
     *
     * Resend code to verify user phone number.
     */
    resendPhoneCode(request: DeepPartial<ResendPhoneCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendPhoneCodeResponse>;
    /**
     * Verify the phone number
     *
     * Verify the phone number with the generated code.
     */
    verifyPhone(request: DeepPartial<VerifyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyPhoneResponse>;
    /**
     * Update a User
     *
     * Partially update an existing user.
     * If you change the users email or phone, you can specify how the ownership should be verified.
     * If you change the users password, you can specify if the password should be changed again on the users next login.
     *
     * Required permission:
     *   - user.write
     */
    updateUser(request: DeepPartial<UpdateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateUserResponse>;
    /**
     * Update Human User
     *
     * Deprecated: Use [UpdateUser](apis/resources/user_service_v2/user-service-update-user.api.mdx) to update a user of type human instead.
     *
     * Update all information from a user.
     */
    updateHumanUser(request: DeepPartial<UpdateHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateHumanUserResponse>;
    /**
     * Deactivate user
     *
     * The state of the user will be changed to 'deactivated'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'deactivated'. Use deactivate user when the user should not be able to use the account anymore, but you still need access to the user data..
     */
    deactivateUser(request: DeepPartial<DeactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserResponse>;
    /**
     * Reactivate user
     *
     * Reactivate a user with the state 'deactivated'. The user will be able to log in again afterward. The endpoint returns an error if the user is not in the state 'deactivated'..
     */
    reactivateUser(request: DeepPartial<ReactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateUserResponse>;
    /**
     * Lock user
     *
     * The state of the user will be changed to 'locked'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'locked'. Use this endpoint if the user should not be able to log in temporarily because of an event that happened (wrong password, etc.)..
     */
    lockUser(request: DeepPartial<LockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<LockUserResponse>;
    /**
     * Unlock user
     *
     * The state of the user will be changed to 'active'. The user will be able to log in again. The endpoint returns an error if the user is not in the state 'locked'.
     */
    unlockUser(request: DeepPartial<UnlockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UnlockUserResponse>;
    /**
     * Delete user
     *
     * The state of the user will be changed to 'deleted'. The user will not be able to log in anymore. Endpoints requesting this user will return an error 'User not found..
     */
    deleteUser(request: DeepPartial<DeleteUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteUserResponse>;
    /**
     * Start the registration of passkey for a user
     *
     * Start the registration of a passkey for a user, as a response the public key credential creation options are returned, which are used to verify the passkey..
     */
    registerPasskey(request: DeepPartial<RegisterPasskeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterPasskeyResponse>;
    /**
     * Verify a passkey for a user
     *
     * Verify the passkey registration with the public key credential..
     */
    verifyPasskeyRegistration(request: DeepPartial<VerifyPasskeyRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyPasskeyRegistrationResponse>;
    /**
     * Create a passkey registration link for a user
     *
     * Create a passkey registration link which includes a code and either return it or send it to the user..
     */
    createPasskeyRegistrationLink(request: DeepPartial<CreatePasskeyRegistrationLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<CreatePasskeyRegistrationLinkResponse>;
    /**
     * List passkeys of an user
     *
     * List passkeys of an user
     */
    listPasskeys(request: DeepPartial<ListPasskeysRequest>, options?: CallOptions & CallOptionsExt): Promise<ListPasskeysResponse>;
    /**
     * Remove passkey from a user
     *
     * Remove passkey from a user.
     */
    removePasskey(request: DeepPartial<RemovePasskeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemovePasskeyResponse>;
    /**
     * Start the registration of a u2f token for a user
     *
     * Start the registration of a u2f token for a user, as a response the public key credential creation options are returned, which are used to verify the u2f token..
     */
    registerU2F(request: DeepPartial<RegisterU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterU2FResponse>;
    /**
     * Verify a u2f token for a user
     *
     * Verify the u2f token registration with the public key credential..
     */
    verifyU2FRegistration(request: DeepPartial<VerifyU2FRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyU2FRegistrationResponse>;
    /**
     * Remove u2f token from a user
     *
     * Remove u2f token from a user.
     */
    removeU2F(request: DeepPartial<RemoveU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveU2FResponse>;
    /**
     * Start the registration of a TOTP generator for a user
     *
     * Start the registration of a TOTP generator for a user, as a response a secret returned, which is used to initialize a TOTP app or device..
     */
    registerTOTP(request: DeepPartial<RegisterTOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterTOTPResponse>;
    /**
     * Verify a TOTP generator for a user
     *
     * Verify the TOTP registration with a generated code..
     */
    verifyTOTPRegistration(request: DeepPartial<VerifyTOTPRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyTOTPRegistrationResponse>;
    /**
     * Remove TOTP generator from a user
     *
     * Remove the configured TOTP generator of a user. As only one TOTP generator per user is allowed, the user will not have TOTP as a second factor afterward.
     */
    removeTOTP(request: DeepPartial<RemoveTOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveTOTPResponse>;
    /**
     * Add OTP SMS for a user
     *
     * Add a new One-Time Password (OTP) SMS factor to the authenticated user. OTP SMS will enable the user to verify a OTP with the latest verified phone number. The phone number has to be verified to add the second factor..
     */
    addOTPSMS(request: DeepPartial<AddOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPSMSResponse>;
    /**
     * Remove One-Time Password (OTP) SMS from a user
     *
     * Remove the configured One-Time Password (OTP) SMS factor of a user. As only one OTP SMS per user is allowed, the user will not have OTP SMS as a second factor afterward.
     */
    removeOTPSMS(request: DeepPartial<RemoveOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPSMSResponse>;
    /**
     * Add OTP Email for a user
     *
     * Add a new One-Time Password (OTP) Email factor to the authenticated user. OTP Email will enable the user to verify a OTP with the latest verified email. The email has to be verified to add the second factor..
     */
    addOTPEmail(request: DeepPartial<AddOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPEmailResponse>;
    /**
     * Remove One-Time Password (OTP) Email from a user
     *
     * Remove the configured One-Time Password (OTP) Email factor of a user. As only one OTP Email per user is allowed, the user will not have OTP Email as a second factor afterward.
     */
    removeOTPEmail(request: DeepPartial<RemoveOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPEmailResponse>;
    /**
     * Start flow with an identity provider
     *
     * Start a flow with an identity provider, for external login, registration or linking..
     */
    startIdentityProviderIntent(request: DeepPartial<StartIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<StartIdentityProviderIntentResponse>;
    /**
     * Retrieve the information returned by the identity provider
     *
     * Retrieve the information returned by the identity provider for registration or updating an existing user with new information..
     */
    retrieveIdentityProviderIntent(request: DeepPartial<RetrieveIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<RetrieveIdentityProviderIntentResponse>;
    /**
     * Add link to an identity provider to an user
     *
     * Add link to an identity provider to an user..
     */
    addIDPLink(request: DeepPartial<AddIDPLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIDPLinkResponse>;
    /**
     * List links to an identity provider of an user
     *
     * List links to an identity provider of an user.
     */
    listIDPLinks(request: DeepPartial<ListIDPLinksRequest>, options?: CallOptions & CallOptionsExt): Promise<ListIDPLinksResponse>;
    /**
     * Remove link of an identity provider to an user
     *
     * Remove link of an identity provider to an user.
     */
    removeIDPLink(request: DeepPartial<RemoveIDPLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveIDPLinkResponse>;
    /**
     * Request a code to reset a password
     *
     * Request a code to reset a password..
     */
    passwordReset(request: DeepPartial<PasswordResetRequest>, options?: CallOptions & CallOptionsExt): Promise<PasswordResetResponse>;
    /**
     * Change password
     *
     * Deprecated: [Update the users password](apis/resources/user_service_v2/user-service-update-user.api.mdx) instead.
     *
     * Change the password of a user with either a verification code or the current password..
     */
    setPassword(request: DeepPartial<SetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPasswordResponse>;
    /**
     * Add a Users Secret
     *
     * Generates a client secret for the user.
     * The client id is the users username.
     * If the user already has a secret, it is overwritten.
     * Only users of type machine can have a secret.
     *
     * Required permission:
     *   - user.write
     */
    addSecret(request: DeepPartial<AddSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSecretResponse>;
    /**
     * Remove a Users Secret
     *
     * Remove the current client ID and client secret from a machine user.
     *
     * Required permission:
     *   - user.write
     */
    removeSecret(request: DeepPartial<RemoveSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveSecretResponse>;
    /**
     * Add a Key
     *
     * Add a keys that can be used to securely authenticate at the Zitadel APIs using JWT profile authentication using short-lived tokens.
     * Make sure you store the returned key safely, as you won't be able to read it from the Zitadel API anymore.
     * Only users of type machine can have keys.
     *
     * Required permission:
     *   - user.write
     */
    addKey(request: DeepPartial<AddKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddKeyResponse>;
    /**
     * Remove a Key
     *
     * Remove a machine users key by the given key ID and an optionally given user ID.
     *
     * Required permission:
     *   - user.write
     */
    removeKey(request: DeepPartial<RemoveKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveKeyResponse>;
    /**
     * Search Keys
     *
     * List all matching keys. By default all keys of the instance on which the caller has permission to read the owning users are returned.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - user.read
     */
    listKeys(request: DeepPartial<ListKeysRequest>, options?: CallOptions & CallOptionsExt): Promise<ListKeysResponse>;
    /**
     * Add a Personal Access Token
     *
     * Personal access tokens (PAT) are the easiest way to authenticate to the Zitadel APIs.
     * Make sure you store the returned PAT safely, as you won't be able to read it from the Zitadel API anymore.
     * Only users of type machine can have personal access tokens.
     *
     * Required permission:
     *   - user.write
     */
    addPersonalAccessToken(request: DeepPartial<AddPersonalAccessTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<AddPersonalAccessTokenResponse>;
    /**
     * Remove a Personal Access Token
     *
     * Removes a machine users personal access token by the given token ID and an optionally given user ID.
     *
     * Required permission:
     *   - user.write
     */
    removePersonalAccessToken(request: DeepPartial<RemovePersonalAccessTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<RemovePersonalAccessTokenResponse>;
    /**
     * Search Personal Access Tokens
     *
     * List all personal access tokens. By default all personal access tokens of the instance on which the caller has permission to read the owning users are returned.
     * Make sure to include a limit and sorting for pagination.
     *
     * Required permission:
     *   - user.read
     */
    listPersonalAccessTokens(request: DeepPartial<ListPersonalAccessTokensRequest>, options?: CallOptions & CallOptionsExt): Promise<ListPersonalAccessTokensResponse>;
    /**
     * List all possible authentication methods of a user
     *
     * List all possible authentication methods of a user like password, passwordless, (T)OTP and more..
     */
    listAuthenticationMethodTypes(request: DeepPartial<ListAuthenticationMethodTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAuthenticationMethodTypesResponse>;
    listAuthenticationFactors(request: DeepPartial<ListAuthenticationFactorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAuthenticationFactorsResponse>;
    /**
     * Create an invite code for a user
     *
     * Create an invite code for a user to initialize their first authentication method (password, passkeys, IdP) depending on the organization's available methods.
     * If an invite code has been created previously, it's url template and application name will be used as defaults for the new code.
     * The new code will overwrite the previous one and make it invalid.
     * Note: It is possible to reissue a new code only when the previous code has expired, or when the user provides a wrong code three or more times during verification.
     */
    createInviteCode(request: DeepPartial<CreateInviteCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateInviteCodeResponse>;
    /**
     * Resend an invite code for a user
     *
     * Deprecated: Use [CreateInviteCode](apis/resources/user_service_v2/user-service-create-invite-code.api.mdx) instead.
     *
     * Resend an invite code for a user to initialize their first authentication method (password, passkeys, IdP) depending on the organization's available methods.
     * A resend is only possible if a code has been created previously and sent to the user. If there is no code or it was directly returned, an error will be returned.
     */
    resendInviteCode(request: DeepPartial<ResendInviteCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendInviteCodeResponse>;
    /**
     * Verify an invite code for a user
     *
     * Verify the invite code of a user previously issued. This will set their email to a verified state and
     * allow the user to set up their first authentication method (password, passkeys, IdP) depending on the organization's available methods.
     */
    verifyInviteCode(request: DeepPartial<VerifyInviteCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyInviteCodeResponse>;
    /**
     * MFA Init Skipped
     *
     * Update the last time the user has skipped MFA initialization. The server timestamp is used.
     */
    humanMFAInitSkipped(request: DeepPartial<HumanMFAInitSkippedRequest>, options?: CallOptions & CallOptionsExt): Promise<HumanMFAInitSkippedResponse>;
    /**
     * Set User Metadata
     *
     * Sets a list of key value pairs. Existing metadata entries with matching keys are overwritten. Existing metadata entries without matching keys are untouched. To remove metadata entries, use [DeleteUserMetadata](apis/resources/user_service_v2/user-service-delete-user-metadata.api.mdx). For HTTP requests, make sure the bytes array value is base64 encoded.
     *
     * Required permission:
     *  - `user.write`
     */
    setUserMetadata(request: DeepPartial<SetUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<SetUserMetadataResponse>;
    /**
     * List User Metadata
     *
     * List metadata of an user filtered by query.
     *
     * Required permission:
     *  - `user.read`
     */
    listUserMetadata(request: DeepPartial<ListUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserMetadataResponse>;
    /**
     * Delete User Metadata
     *
     * Delete metadata objects from an user with a specific key.
     *
     * Required permission:
     *  - `user.write`
     */
    deleteUserMetadata(request: DeepPartial<DeleteUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteUserMetadataResponse>;
}
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
