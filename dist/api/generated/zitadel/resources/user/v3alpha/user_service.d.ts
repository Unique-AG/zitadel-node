import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Instance, Organization } from "../../../object/v3alpha/object.js";
import { Details, ListDetails, SearchQuery } from "../../object/v3alpha/object.js";
import { AuthenticatorRegistrationCode, IdentityProviderIntent, IDPAuthenticator, IDPInformation, LDAPCredentials, RedirectURLs, ReturnPasswordResetCode, ReturnWebAuthNRegistrationCode, SendPasswordResetEmail, SendPasswordResetSMS, SendWebAuthNRegistrationLink, SetPassword, SetUsername, StartWebAuthNRegistration, VerifyWebAuthNRegistration } from "./authenticator.js";
import { ReturnEmailVerificationCode, ReturnPhoneVerificationCode, SendEmailVerificationCode, SendPhoneVerificationCode, SetEmail, SetPhone } from "./communication.js";
import { FieldName, SearchFilter } from "./query.js";
import { CreateUser, GetUser, PatchUser } from "./user.js";
export declare const protobufPackage = "zitadel.resources.user.v3alpha";
export interface SearchUsersRequest {
    instance?: Instance | undefined;
    /** Search limitations and ordering. */
    query: SearchQuery | undefined;
    /** the field the result is sorted. */
    sortingColumn: FieldName;
    /** Define the criteria to query for. */
    filters: SearchFilter[];
}
export interface SearchUsersResponse {
    /** Details provides information about the returned result including total amount found. */
    details: ListDetails | undefined;
    /** The result contains the user schemas, which matched the queries. */
    result: GetUser[];
}
export interface GetUserRequest {
    instance?: Instance | undefined;
    /** unique identifier of the user. */
    id: string;
}
export interface GetUserResponse {
    user: GetUser | undefined;
}
export interface CreateUserRequest {
    instance?: Instance | undefined;
    /** Set the organization the user belongs to. */
    organization: Organization | undefined;
    user: CreateUser | undefined;
}
export interface CreateUserResponse {
    details: Details | undefined;
    /** The email code will be set if a contact email was set with a return_code verification option. */
    emailCode?: string | undefined;
    /** The phone code will be set if a contact phone was set with a return_code verification option. */
    phoneCode?: string | undefined;
}
export interface PatchUserRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    user: PatchUser | undefined;
}
export interface PatchUserResponse {
    details: Details | undefined;
    /** The email code will be set if a contact email was set with a return_code verification option. */
    emailCode?: string | undefined;
    /** The phone code will be set if a contact phone was set with a return_code verification option. */
    phoneCode?: string | undefined;
}
export interface DeactivateUserRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
}
export interface DeactivateUserResponse {
    details: Details | undefined;
}
export interface ActivateUserRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
}
export interface ActivateUserResponse {
    details: Details | undefined;
}
export interface LockUserRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
}
export interface LockUserResponse {
    details: Details | undefined;
}
export interface UnlockUserRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
}
export interface UnlockUserResponse {
    details: Details | undefined;
}
export interface DeleteUserRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
}
export interface DeleteUserResponse {
    details: Details | undefined;
}
export interface SetContactEmailRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Set the user's contact email and it's verification state. */
    email: SetEmail | undefined;
}
export interface SetContactEmailResponse {
    details: Details | undefined;
    /** The verification code will be set if a contact email was set with a return_code verification option. */
    verificationCode?: string | undefined;
}
export interface VerifyContactEmailRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Set the verification code generated during the set contact email request. */
    verificationCode: string;
}
export interface VerifyContactEmailResponse {
    details: Details | undefined;
}
export interface ResendContactEmailCodeRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Let ZITADEL send the link to the user via email. */
    sendCode?: SendEmailVerificationCode | undefined;
    /** Get the code back to provide it to the user in your preferred mechanism. */
    returnCode?: ReturnEmailVerificationCode | undefined;
}
export interface ResendContactEmailCodeResponse {
    details: Details | undefined;
    /** in case the verification was set to return_code, the code will be returned. */
    verificationCode?: string | undefined;
}
export interface SetContactPhoneRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Set the user's contact phone and it's verification state. */
    phone: SetPhone | undefined;
}
export interface SetContactPhoneResponse {
    details: Details | undefined;
    /** The phone verification code will be set if a contact phone was set with a return_code verification option. */
    verificationCode?: string | undefined;
}
export interface VerifyContactPhoneRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Set the verification code generated during the set contact phone request. */
    verificationCode: string;
}
export interface VerifyContactPhoneResponse {
    details: Details | undefined;
}
export interface ResendContactPhoneCodeRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Let ZITADEL send the link to the user via SMS. */
    sendCode?: SendPhoneVerificationCode | undefined;
    /** Get the code back to provide it to the user in your preferred mechanism. */
    returnCode?: ReturnPhoneVerificationCode | undefined;
}
export interface ResendContactPhoneCodeResponse {
    details: Details | undefined;
    /** in case the verification was set to return_code, the code will be returned. */
    verificationCode?: string | undefined;
}
export interface AddUsernameRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Set the user's new username. */
    username: SetUsername | undefined;
}
export interface AddUsernameResponse {
    details: Details | undefined;
    /** unique identifier of the username. */
    usernameId: string;
}
export interface RemoveUsernameRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the username. */
    usernameId: string;
}
export interface RemoveUsernameResponse {
    details: Details | undefined;
}
export interface SetPasswordRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Provide the new password (in plain text or as hash). */
    newPassword: SetPassword | undefined;
}
export interface SetPasswordResponse {
    details: Details | undefined;
}
export interface RequestPasswordResetRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Let ZITADEL send the link to the user via email. */
    sendEmail?: SendPasswordResetEmail | undefined;
    /** Let ZITADEL send the link to the user via SMS. */
    sendSms?: SendPasswordResetSMS | undefined;
    /** Get the code back to provide it to the user in your preferred mechanism. */
    returnCode?: ReturnPasswordResetCode | undefined;
}
export interface RequestPasswordResetResponse {
    details: Details | undefined;
    /** In case the medium was set to return_code, the code will be returned. */
    verificationCode?: string | undefined;
}
export interface StartWebAuthNRegistrationRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    registration: StartWebAuthNRegistration | undefined;
}
export interface StartWebAuthNRegistrationResponse {
    details: Details | undefined;
    /** unique identifier of the WebAuthN registration. */
    webAuthNId: string;
    /**
     * Options for Credential Creation (dictionary PublicKeyCredentialCreationOptions).
     * Generated helper methods transform the field to JSON, for use in a WebauthN client.
     * See also:  https://www.w3.org/TR/webauthn/#dictdef-publickeycredentialcreationoptions
     */
    publicKeyCredentialCreationOptions: {
        [key: string]: any;
    } | undefined;
}
export interface VerifyWebAuthNRegistrationRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the WebAuthN registration, which was returned in the start webauthn registration. */
    webAuthNId: string;
    verify: VerifyWebAuthNRegistration | undefined;
}
export interface VerifyWebAuthNRegistrationResponse {
    details: Details | undefined;
}
export interface CreateWebAuthNRegistrationLinkRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Let ZITADEL send the link to the user via email. */
    sendLink?: SendWebAuthNRegistrationLink | undefined;
    /** Get the code back to provide it to the user in your preferred mechanism. */
    returnCode?: ReturnWebAuthNRegistrationCode | undefined;
}
export interface CreateWebAuthNRegistrationLinkResponse {
    details: Details | undefined;
    /** In case the medium was set to return_code, the code will be returned. */
    code?: AuthenticatorRegistrationCode | undefined;
}
export interface RemoveWebAuthNAuthenticatorRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the WebAuthN authenticator. */
    webAuthNId: string;
}
export interface RemoveWebAuthNAuthenticatorResponse {
    details: Details | undefined;
}
export interface StartTOTPRegistrationRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
}
export interface StartTOTPRegistrationResponse {
    details: Details | undefined;
    /** unique identifier of the TOTP registration. */
    totpId: string;
    /** The TOTP URI, which can be used to create a QR Code for scanning with an authenticator app. */
    uri: string;
    /** The TOTP secret, which can be used for manually adding in an authenticator app. */
    secret: string;
}
export interface VerifyTOTPRegistrationRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the TOTP registration, which was returned in the start TOTP registration. */
    totpId: string;
    /** Code generated by TOTP app or device. */
    code: string;
}
export interface VerifyTOTPRegistrationResponse {
    details: Details | undefined;
}
export interface RemoveTOTPAuthenticatorRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the TOTP authenticator. */
    totpId: string;
}
export interface RemoveTOTPAuthenticatorResponse {
    details: Details | undefined;
}
export interface AddOTPSMSAuthenticatorRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Set the user's phone for the OTP SMS authenticator and it's verification state. */
    phone: SetPhone | undefined;
}
export interface AddOTPSMSAuthenticatorResponse {
    details: Details | undefined;
    /** unique identifier of the OTP SMS registration. */
    otpSmsId: string;
    /** The OTP verification code will be set if a phone was set with a return_code verification option. */
    verificationCode?: string | undefined;
}
export interface VerifyOTPSMSRegistrationRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the OTP SMS registration, which was returned in the add OTP SMS. */
    otpSmsId: string;
    /** Set the verification code generated during the add OTP SMS request. */
    code: string;
}
export interface VerifyOTPSMSRegistrationResponse {
    details: Details | undefined;
}
export interface RemoveOTPSMSAuthenticatorRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the OTP SMS authenticator. */
    otpSmsId: string;
}
export interface RemoveOTPSMSAuthenticatorResponse {
    details: Details | undefined;
}
export interface AddOTPEmailAuthenticatorRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** Set the user's email for the OTP Email authenticator and it's verification state. */
    email: SetEmail | undefined;
}
export interface AddOTPEmailAuthenticatorResponse {
    details: Details | undefined;
    /** unique identifier of the OTP Email registration. */
    otpEmailId: string;
    /** The OTP verification code will be set if a email was set with a return_code verification option. */
    verificationCode?: string | undefined;
}
export interface VerifyOTPEmailRegistrationRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the OTP Email registration, which was returned in the add OTP Email. */
    otpEmailId: string;
    /** Set the verification code generated during the add OTP Email request. */
    code: string;
}
export interface VerifyOTPEmailRegistrationResponse {
    details: Details | undefined;
}
export interface RemoveOTPEmailAuthenticatorRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the OTP Email authenticator. */
    otpEmailId: string;
}
export interface RemoveOTPEmailAuthenticatorResponse {
    details: Details | undefined;
}
export interface StartIdentityProviderIntentRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** ID of an existing identity provider (IDP). */
    idpId: string;
    urls?: RedirectURLs | undefined;
    ldap?: LDAPCredentials | undefined;
}
export interface StartIdentityProviderIntentResponse {
    details: Details | undefined;
    /** The authentication URL to which the client should redirect. */
    authUrl?: string | undefined;
    /**
     * The Start Intent directly succeeded and returned the IDP Intent.
     * Further information can be retrieved by using the retrieve identity provider intent request.
     */
    idpIntent?: IdentityProviderIntent | undefined;
    /** The HTML form with the embedded POST call information to render and execute. */
    postForm?: Buffer | undefined;
}
export interface GetIdentityProviderIntentRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** ID of the identity provider (IDP) intent, previously returned on the success response of the start identity provider intent. */
    idpIntentId: string;
    /** Token of the identity provider (IDP) intent, previously returned on the success response of the start identity provider intent. */
    idpIntentToken: string;
}
export interface GetIdentityProviderIntentResponse {
    details: Details | undefined;
    /**
     * Information returned by the identity provider (IDP) such as the identification of the user
     * and detailed / profile information.
     */
    idpInformation: IDPInformation | undefined;
    /** If the user was already federated and linked to a ZITADEL user, it's id will be returned. */
    id?: string | undefined;
}
export interface AddIDPAuthenticatorRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    authenticator: IDPAuthenticator | undefined;
}
export interface AddIDPAuthenticatorResponse {
    details: Details | undefined;
}
export interface RemoveIDPAuthenticatorRequest {
    instance?: Instance | undefined;
    /** Optionally expect the user to be in this organization. */
    organization?: Organization | undefined;
    /** unique identifier of the user. */
    id: string;
    /** unique identifier of the identity provider (IDP) authenticator. */
    idpId: string;
}
export interface RemoveIDPAuthenticatorResponse {
    details: Details | undefined;
}
export declare const SearchUsersRequest: MessageFns<SearchUsersRequest>;
export declare const SearchUsersResponse: MessageFns<SearchUsersResponse>;
export declare const GetUserRequest: MessageFns<GetUserRequest>;
export declare const GetUserResponse: MessageFns<GetUserResponse>;
export declare const CreateUserRequest: MessageFns<CreateUserRequest>;
export declare const CreateUserResponse: MessageFns<CreateUserResponse>;
export declare const PatchUserRequest: MessageFns<PatchUserRequest>;
export declare const PatchUserResponse: MessageFns<PatchUserResponse>;
export declare const DeactivateUserRequest: MessageFns<DeactivateUserRequest>;
export declare const DeactivateUserResponse: MessageFns<DeactivateUserResponse>;
export declare const ActivateUserRequest: MessageFns<ActivateUserRequest>;
export declare const ActivateUserResponse: MessageFns<ActivateUserResponse>;
export declare const LockUserRequest: MessageFns<LockUserRequest>;
export declare const LockUserResponse: MessageFns<LockUserResponse>;
export declare const UnlockUserRequest: MessageFns<UnlockUserRequest>;
export declare const UnlockUserResponse: MessageFns<UnlockUserResponse>;
export declare const DeleteUserRequest: MessageFns<DeleteUserRequest>;
export declare const DeleteUserResponse: MessageFns<DeleteUserResponse>;
export declare const SetContactEmailRequest: MessageFns<SetContactEmailRequest>;
export declare const SetContactEmailResponse: MessageFns<SetContactEmailResponse>;
export declare const VerifyContactEmailRequest: MessageFns<VerifyContactEmailRequest>;
export declare const VerifyContactEmailResponse: MessageFns<VerifyContactEmailResponse>;
export declare const ResendContactEmailCodeRequest: MessageFns<ResendContactEmailCodeRequest>;
export declare const ResendContactEmailCodeResponse: MessageFns<ResendContactEmailCodeResponse>;
export declare const SetContactPhoneRequest: MessageFns<SetContactPhoneRequest>;
export declare const SetContactPhoneResponse: MessageFns<SetContactPhoneResponse>;
export declare const VerifyContactPhoneRequest: MessageFns<VerifyContactPhoneRequest>;
export declare const VerifyContactPhoneResponse: MessageFns<VerifyContactPhoneResponse>;
export declare const ResendContactPhoneCodeRequest: MessageFns<ResendContactPhoneCodeRequest>;
export declare const ResendContactPhoneCodeResponse: MessageFns<ResendContactPhoneCodeResponse>;
export declare const AddUsernameRequest: MessageFns<AddUsernameRequest>;
export declare const AddUsernameResponse: MessageFns<AddUsernameResponse>;
export declare const RemoveUsernameRequest: MessageFns<RemoveUsernameRequest>;
export declare const RemoveUsernameResponse: MessageFns<RemoveUsernameResponse>;
export declare const SetPasswordRequest: MessageFns<SetPasswordRequest>;
export declare const SetPasswordResponse: MessageFns<SetPasswordResponse>;
export declare const RequestPasswordResetRequest: MessageFns<RequestPasswordResetRequest>;
export declare const RequestPasswordResetResponse: MessageFns<RequestPasswordResetResponse>;
export declare const StartWebAuthNRegistrationRequest: MessageFns<StartWebAuthNRegistrationRequest>;
export declare const StartWebAuthNRegistrationResponse: MessageFns<StartWebAuthNRegistrationResponse>;
export declare const VerifyWebAuthNRegistrationRequest: MessageFns<VerifyWebAuthNRegistrationRequest>;
export declare const VerifyWebAuthNRegistrationResponse: MessageFns<VerifyWebAuthNRegistrationResponse>;
export declare const CreateWebAuthNRegistrationLinkRequest: MessageFns<CreateWebAuthNRegistrationLinkRequest>;
export declare const CreateWebAuthNRegistrationLinkResponse: MessageFns<CreateWebAuthNRegistrationLinkResponse>;
export declare const RemoveWebAuthNAuthenticatorRequest: MessageFns<RemoveWebAuthNAuthenticatorRequest>;
export declare const RemoveWebAuthNAuthenticatorResponse: MessageFns<RemoveWebAuthNAuthenticatorResponse>;
export declare const StartTOTPRegistrationRequest: MessageFns<StartTOTPRegistrationRequest>;
export declare const StartTOTPRegistrationResponse: MessageFns<StartTOTPRegistrationResponse>;
export declare const VerifyTOTPRegistrationRequest: MessageFns<VerifyTOTPRegistrationRequest>;
export declare const VerifyTOTPRegistrationResponse: MessageFns<VerifyTOTPRegistrationResponse>;
export declare const RemoveTOTPAuthenticatorRequest: MessageFns<RemoveTOTPAuthenticatorRequest>;
export declare const RemoveTOTPAuthenticatorResponse: MessageFns<RemoveTOTPAuthenticatorResponse>;
export declare const AddOTPSMSAuthenticatorRequest: MessageFns<AddOTPSMSAuthenticatorRequest>;
export declare const AddOTPSMSAuthenticatorResponse: MessageFns<AddOTPSMSAuthenticatorResponse>;
export declare const VerifyOTPSMSRegistrationRequest: MessageFns<VerifyOTPSMSRegistrationRequest>;
export declare const VerifyOTPSMSRegistrationResponse: MessageFns<VerifyOTPSMSRegistrationResponse>;
export declare const RemoveOTPSMSAuthenticatorRequest: MessageFns<RemoveOTPSMSAuthenticatorRequest>;
export declare const RemoveOTPSMSAuthenticatorResponse: MessageFns<RemoveOTPSMSAuthenticatorResponse>;
export declare const AddOTPEmailAuthenticatorRequest: MessageFns<AddOTPEmailAuthenticatorRequest>;
export declare const AddOTPEmailAuthenticatorResponse: MessageFns<AddOTPEmailAuthenticatorResponse>;
export declare const VerifyOTPEmailRegistrationRequest: MessageFns<VerifyOTPEmailRegistrationRequest>;
export declare const VerifyOTPEmailRegistrationResponse: MessageFns<VerifyOTPEmailRegistrationResponse>;
export declare const RemoveOTPEmailAuthenticatorRequest: MessageFns<RemoveOTPEmailAuthenticatorRequest>;
export declare const RemoveOTPEmailAuthenticatorResponse: MessageFns<RemoveOTPEmailAuthenticatorResponse>;
export declare const StartIdentityProviderIntentRequest: MessageFns<StartIdentityProviderIntentRequest>;
export declare const StartIdentityProviderIntentResponse: MessageFns<StartIdentityProviderIntentResponse>;
export declare const GetIdentityProviderIntentRequest: MessageFns<GetIdentityProviderIntentRequest>;
export declare const GetIdentityProviderIntentResponse: MessageFns<GetIdentityProviderIntentResponse>;
export declare const AddIDPAuthenticatorRequest: MessageFns<AddIDPAuthenticatorRequest>;
export declare const AddIDPAuthenticatorResponse: MessageFns<AddIDPAuthenticatorResponse>;
export declare const RemoveIDPAuthenticatorRequest: MessageFns<RemoveIDPAuthenticatorRequest>;
export declare const RemoveIDPAuthenticatorResponse: MessageFns<RemoveIDPAuthenticatorResponse>;
export type ZITADELUsersDefinition = typeof ZITADELUsersDefinition;
export declare const ZITADELUsersDefinition: {
    readonly name: "ZITADELUsers";
    readonly fullName: "zitadel.resources.user.v3alpha.ZITADELUsers";
    readonly methods: {
        /**
         * Search users
         *
         * Search all matching users. By default, we will return all users of your instance.
         * Make sure to include a limit and sorting for pagination.
         */
        readonly searchUsers: {
            readonly name: "SearchUsers";
            readonly requestType: MessageFns<SearchUsersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SearchUsersResponse>;
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
         * Returns the user identified by the requested ID.
         */
        readonly getUser: {
            readonly name: "GetUser";
            readonly requestType: MessageFns<GetUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserResponse>;
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
         * Create a user
         *
         * Create a new user with an optional data schema.
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
         * Patch a user
         *
         * Patch an existing user with data based on a user schema.
         */
        readonly patchUser: {
            readonly name: "PatchUser";
            readonly requestType: MessageFns<PatchUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<PatchUserResponse>;
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
         * Deactivate a user
         *
         * Deactivate an existing user and change the state 'deactivated'.
         * The user will not be able to log in anymore.
         * Use deactivate user when the user should not be able to use the account anymore,
         * but you still need access to the user data.
         *
         * The endpoint returns an error if the user is already in the state 'deactivated'.
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
         * Activate a user
         *
         * Activate a previously deactivated user and change the state to 'active'.
         * The user will be able to log in again.
         *
         * The endpoint returns an error if the user is not in the state 'deactivated'.
         */
        readonly activateUser: {
            readonly name: "ActivateUser";
            readonly requestType: MessageFns<ActivateUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateUserResponse>;
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
         * Lock a user
         *
         * Lock an existing user and change the state 'locked'.
         * The user will not be able to log in anymore.
         * Use lock user when the user should temporarily not be able to log in
         * because of an event that happened (wrong password, etc.)
         *
         * The endpoint returns an error if the user is already in the state 'locked'.
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
         * Unlock a user
         *
         * Unlock a previously locked user and change the state to 'active'.
         * The user will be able to log in again.
         *
         * The endpoint returns an error if the user is not in the state 'locked'.
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
         * Delete a user
         *
         * Delete an existing user and change the state to 'deleted'.
         * The user will be able to log in anymore.
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
         * Set contact email
         *
         * Add or update the contact email address of a user.
         * If the email is not passed as verified, a verification code will be generated,
         * which can be either returned or will be sent to the user by email.
         */
        readonly setContactEmail: {
            readonly name: "SetContactEmail";
            readonly requestType: MessageFns<SetContactEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetContactEmailResponse>;
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
         * Verify the contact email
         *
         * Verify the contact email with the provided code.
         */
        readonly verifyContactEmail: {
            readonly name: "VerifyContactEmail";
            readonly requestType: MessageFns<VerifyContactEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyContactEmailResponse>;
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
         * Resend the contact email code
         *
         * Resend the email with the verification code for the contact email address.
         */
        readonly resendContactEmailCode: {
            readonly name: "ResendContactEmailCode";
            readonly requestType: MessageFns<ResendContactEmailCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendContactEmailCodeResponse>;
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
         * Set contact phone
         *
         * Add or update the contact phone number of a user.
         * If the phone is not passed as verified, a verification code will be generated,
         * which can be either returned or will be sent to the user by SMS.
         */
        readonly setContactPhone: {
            readonly name: "SetContactPhone";
            readonly requestType: MessageFns<SetContactPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetContactPhoneResponse>;
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
         * Verify the contact phone
         *
         * Verify the contact phone with the provided code.
         */
        readonly verifyContactPhone: {
            readonly name: "VerifyContactPhone";
            readonly requestType: MessageFns<VerifyContactPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyContactPhoneResponse>;
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
         * Resend the contact phone code
         *
         * Resend the phone with the verification code for the contact phone number.
         */
        readonly resendContactPhoneCode: {
            readonly name: "ResendContactPhoneCode";
            readonly requestType: MessageFns<ResendContactPhoneCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendContactPhoneCodeResponse>;
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
         * Add a username
         *
         * Add a new unique username to a user. The username will be used to identify the user on authentication.
         */
        readonly addUsername: {
            readonly name: "AddUsername";
            readonly requestType: MessageFns<AddUsernameRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddUsernameResponse>;
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
         * Remove a username
         *
         * Remove an existing username of a user, so it cannot be used for authentication anymore.
         */
        readonly removeUsername: {
            readonly name: "RemoveUsername";
            readonly requestType: MessageFns<RemoveUsernameRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveUsernameResponse>;
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
         * Set a password
         *
         * Add, update or reset a user's password with either a verification code or the current password.
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
         * Request password reset
         *
         * Request a code to be able to set a new password.
         */
        readonly requestPasswordReset: {
            readonly name: "RequestPasswordReset";
            readonly requestType: MessageFns<RequestPasswordResetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RequestPasswordResetResponse>;
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
         * Start a WebAuthN registration
         *
         * Start the registration of a new WebAuthN device (e.g. Passkeys) for a user.
         * As a response the public key credential creation options are returned,
         * which are used to verify the device.
         */
        readonly startWebAuthNRegistration: {
            readonly name: "StartWebAuthNRegistration";
            readonly requestType: MessageFns<StartWebAuthNRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<StartWebAuthNRegistrationResponse>;
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
         * Verify a WebAuthN registration
         *
         * Verify the WebAuthN registration started by StartWebAuthNRegistration with the public key credential.
         */
        readonly verifyWebAuthNRegistration: {
            readonly name: "VerifyWebAuthNRegistration";
            readonly requestType: MessageFns<VerifyWebAuthNRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyWebAuthNRegistrationResponse>;
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
         * Create a WebAuthN registration link
         *
         * Create a link, which includes a code, that can either be returned or directly sent to the user.
         * The code will allow the user to start a new WebAuthN registration.
         */
        readonly createWebAuthNRegistrationLink: {
            readonly name: "CreateWebAuthNRegistrationLink";
            readonly requestType: MessageFns<CreateWebAuthNRegistrationLinkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateWebAuthNRegistrationLinkResponse>;
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
         * Remove a WebAuthN authenticator
         *
         * Remove an existing WebAuthN authenticator from a user, so it cannot be used for authentication anymore.
         */
        readonly removeWebAuthNAuthenticator: {
            readonly name: "RemoveWebAuthNAuthenticator";
            readonly requestType: MessageFns<RemoveWebAuthNAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveWebAuthNAuthenticatorResponse>;
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
         * Start a TOTP registration
         *
         * Start the registration of a new time-based one-time password (TOTP) generator for a user.
         * As a response a secret is returned, which is used to initialize a TOTP app or device.
         */
        readonly startTOTPRegistration: {
            readonly name: "StartTOTPRegistration";
            readonly requestType: MessageFns<StartTOTPRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<StartTOTPRegistrationResponse>;
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
         * Verify a TOTP registration
         *
         * Verify the time-based one-time password (TOTP) registration with the generated code.
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
         * Remove a TOTP authenticator
         *
         * Remove an existing time-based one-time password (TOTP) authenticator from a user, so it cannot be used for authentication anymore.
         */
        readonly removeTOTPAuthenticator: {
            readonly name: "RemoveTOTPAuthenticator";
            readonly requestType: MessageFns<RemoveTOTPAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveTOTPAuthenticatorResponse>;
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
         * Add a OTP SMS authenticator
         *
         * Add a new one-time password (OTP) SMS authenticator to a user.
         * If the phone is not passed as verified, a verification code will be generated,
         * which can be either returned or will be sent to the user by SMS.
         */
        readonly addOTPSMSAuthenticator: {
            readonly name: "AddOTPSMSAuthenticator";
            readonly requestType: MessageFns<AddOTPSMSAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOTPSMSAuthenticatorResponse>;
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
         * Verify OTP SMS registration
         *
         * Verify the OTP SMS registration with the provided code.
         */
        readonly verifyOTPSMSRegistration: {
            readonly name: "VerifyOTPSMSRegistration";
            readonly requestType: MessageFns<VerifyOTPSMSRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyOTPSMSRegistrationResponse>;
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
         * Remove a OTP SMS authenticator
         *
         * Remove an existing one-time password (OTP) SMS authenticator from a user, so it cannot be used for authentication anymore.
         */
        readonly removeOTPSMSAuthenticator: {
            readonly name: "RemoveOTPSMSAuthenticator";
            readonly requestType: MessageFns<RemoveOTPSMSAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOTPSMSAuthenticatorResponse>;
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
         * Add a OTP Email authenticator
         *
         * Add a new one-time password (OTP) Email authenticator to a user.
         * If the email is not passed as verified, a verification code will be generated,
         * which can be either returned or will be sent to the user by email.
         */
        readonly addOTPEmailAuthenticator: {
            readonly name: "AddOTPEmailAuthenticator";
            readonly requestType: MessageFns<AddOTPEmailAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOTPEmailAuthenticatorResponse>;
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
         * Verify OTP Email registration
         *
         * Verify the OTP Email registration with the provided code.
         */
        readonly verifyOTPEmailRegistration: {
            readonly name: "VerifyOTPEmailRegistration";
            readonly requestType: MessageFns<VerifyOTPEmailRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyOTPEmailRegistrationResponse>;
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
         * Remove a OTP Email authenticator
         *
         * Remove an existing one-time password (OTP) Email authenticator from a user, so it cannot be used for authentication anymore.
         */
        readonly removeOTPEmailAuthenticator: {
            readonly name: "RemoveOTPEmailAuthenticator";
            readonly requestType: MessageFns<RemoveOTPEmailAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOTPEmailAuthenticatorResponse>;
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
         * Start an IDP authentication intent
         *
         * Start a new authentication intent on configured identity provider (IDP) for external login, registration or linking.
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
         * Get the information of the IDP authentication intent
         *
         * Get the information returned by the identity provider (IDP) for registration or updating an existing user with new information.
         */
        readonly getIdentityProviderIntent: {
            readonly name: "GetIdentityProviderIntent";
            readonly requestType: MessageFns<GetIdentityProviderIntentRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetIdentityProviderIntentResponse>;
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
         * Add an IDP authenticator to a user
         *
         * Add a new identity provider (IDP) authenticator to an existing user.
         * This will allow the user to authenticate with the provided IDP.
         */
        readonly addIDPAuthenticator: {
            readonly name: "AddIDPAuthenticator";
            readonly requestType: MessageFns<AddIDPAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddIDPAuthenticatorResponse>;
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
         * Remove an IDP authenticator
         *
         * Remove an existing identity provider (IDP) authenticator from a user, so it cannot be used for authentication anymore.
         */
        readonly removeIDPAuthenticator: {
            readonly name: "RemoveIDPAuthenticator";
            readonly requestType: MessageFns<RemoveIDPAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveIDPAuthenticatorResponse>;
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
export interface ZITADELUsersServiceImplementation<CallContextExt = {}> {
    /**
     * Search users
     *
     * Search all matching users. By default, we will return all users of your instance.
     * Make sure to include a limit and sorting for pagination.
     */
    searchUsers(request: SearchUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SearchUsersResponse>>;
    /**
     * User by ID
     *
     * Returns the user identified by the requested ID.
     */
    getUser(request: GetUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserResponse>>;
    /**
     * Create a user
     *
     * Create a new user with an optional data schema.
     */
    createUser(request: CreateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateUserResponse>>;
    /**
     * Patch a user
     *
     * Patch an existing user with data based on a user schema.
     */
    patchUser(request: PatchUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PatchUserResponse>>;
    /**
     * Deactivate a user
     *
     * Deactivate an existing user and change the state 'deactivated'.
     * The user will not be able to log in anymore.
     * Use deactivate user when the user should not be able to use the account anymore,
     * but you still need access to the user data.
     *
     * The endpoint returns an error if the user is already in the state 'deactivated'.
     */
    deactivateUser(request: DeactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserResponse>>;
    /**
     * Activate a user
     *
     * Activate a previously deactivated user and change the state to 'active'.
     * The user will be able to log in again.
     *
     * The endpoint returns an error if the user is not in the state 'deactivated'.
     */
    activateUser(request: ActivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateUserResponse>>;
    /**
     * Lock a user
     *
     * Lock an existing user and change the state 'locked'.
     * The user will not be able to log in anymore.
     * Use lock user when the user should temporarily not be able to log in
     * because of an event that happened (wrong password, etc.)
     *
     * The endpoint returns an error if the user is already in the state 'locked'.
     */
    lockUser(request: LockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LockUserResponse>>;
    /**
     * Unlock a user
     *
     * Unlock a previously locked user and change the state to 'active'.
     * The user will be able to log in again.
     *
     * The endpoint returns an error if the user is not in the state 'locked'.
     */
    unlockUser(request: UnlockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UnlockUserResponse>>;
    /**
     * Delete a user
     *
     * Delete an existing user and change the state to 'deleted'.
     * The user will be able to log in anymore.
     */
    deleteUser(request: DeleteUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteUserResponse>>;
    /**
     * Set contact email
     *
     * Add or update the contact email address of a user.
     * If the email is not passed as verified, a verification code will be generated,
     * which can be either returned or will be sent to the user by email.
     */
    setContactEmail(request: SetContactEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetContactEmailResponse>>;
    /**
     * Verify the contact email
     *
     * Verify the contact email with the provided code.
     */
    verifyContactEmail(request: VerifyContactEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyContactEmailResponse>>;
    /**
     * Resend the contact email code
     *
     * Resend the email with the verification code for the contact email address.
     */
    resendContactEmailCode(request: ResendContactEmailCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendContactEmailCodeResponse>>;
    /**
     * Set contact phone
     *
     * Add or update the contact phone number of a user.
     * If the phone is not passed as verified, a verification code will be generated,
     * which can be either returned or will be sent to the user by SMS.
     */
    setContactPhone(request: SetContactPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetContactPhoneResponse>>;
    /**
     * Verify the contact phone
     *
     * Verify the contact phone with the provided code.
     */
    verifyContactPhone(request: VerifyContactPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyContactPhoneResponse>>;
    /**
     * Resend the contact phone code
     *
     * Resend the phone with the verification code for the contact phone number.
     */
    resendContactPhoneCode(request: ResendContactPhoneCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendContactPhoneCodeResponse>>;
    /**
     * Add a username
     *
     * Add a new unique username to a user. The username will be used to identify the user on authentication.
     */
    addUsername(request: AddUsernameRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddUsernameResponse>>;
    /**
     * Remove a username
     *
     * Remove an existing username of a user, so it cannot be used for authentication anymore.
     */
    removeUsername(request: RemoveUsernameRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveUsernameResponse>>;
    /**
     * Set a password
     *
     * Add, update or reset a user's password with either a verification code or the current password.
     */
    setPassword(request: SetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPasswordResponse>>;
    /**
     * Request password reset
     *
     * Request a code to be able to set a new password.
     */
    requestPasswordReset(request: RequestPasswordResetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RequestPasswordResetResponse>>;
    /**
     * Start a WebAuthN registration
     *
     * Start the registration of a new WebAuthN device (e.g. Passkeys) for a user.
     * As a response the public key credential creation options are returned,
     * which are used to verify the device.
     */
    startWebAuthNRegistration(request: StartWebAuthNRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartWebAuthNRegistrationResponse>>;
    /**
     * Verify a WebAuthN registration
     *
     * Verify the WebAuthN registration started by StartWebAuthNRegistration with the public key credential.
     */
    verifyWebAuthNRegistration(request: VerifyWebAuthNRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyWebAuthNRegistrationResponse>>;
    /**
     * Create a WebAuthN registration link
     *
     * Create a link, which includes a code, that can either be returned or directly sent to the user.
     * The code will allow the user to start a new WebAuthN registration.
     */
    createWebAuthNRegistrationLink(request: CreateWebAuthNRegistrationLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateWebAuthNRegistrationLinkResponse>>;
    /**
     * Remove a WebAuthN authenticator
     *
     * Remove an existing WebAuthN authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeWebAuthNAuthenticator(request: RemoveWebAuthNAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveWebAuthNAuthenticatorResponse>>;
    /**
     * Start a TOTP registration
     *
     * Start the registration of a new time-based one-time password (TOTP) generator for a user.
     * As a response a secret is returned, which is used to initialize a TOTP app or device.
     */
    startTOTPRegistration(request: StartTOTPRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartTOTPRegistrationResponse>>;
    /**
     * Verify a TOTP registration
     *
     * Verify the time-based one-time password (TOTP) registration with the generated code.
     */
    verifyTOTPRegistration(request: VerifyTOTPRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyTOTPRegistrationResponse>>;
    /**
     * Remove a TOTP authenticator
     *
     * Remove an existing time-based one-time password (TOTP) authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeTOTPAuthenticator(request: RemoveTOTPAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveTOTPAuthenticatorResponse>>;
    /**
     * Add a OTP SMS authenticator
     *
     * Add a new one-time password (OTP) SMS authenticator to a user.
     * If the phone is not passed as verified, a verification code will be generated,
     * which can be either returned or will be sent to the user by SMS.
     */
    addOTPSMSAuthenticator(request: AddOTPSMSAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPSMSAuthenticatorResponse>>;
    /**
     * Verify OTP SMS registration
     *
     * Verify the OTP SMS registration with the provided code.
     */
    verifyOTPSMSRegistration(request: VerifyOTPSMSRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyOTPSMSRegistrationResponse>>;
    /**
     * Remove a OTP SMS authenticator
     *
     * Remove an existing one-time password (OTP) SMS authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeOTPSMSAuthenticator(request: RemoveOTPSMSAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPSMSAuthenticatorResponse>>;
    /**
     * Add a OTP Email authenticator
     *
     * Add a new one-time password (OTP) Email authenticator to a user.
     * If the email is not passed as verified, a verification code will be generated,
     * which can be either returned or will be sent to the user by email.
     */
    addOTPEmailAuthenticator(request: AddOTPEmailAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPEmailAuthenticatorResponse>>;
    /**
     * Verify OTP Email registration
     *
     * Verify the OTP Email registration with the provided code.
     */
    verifyOTPEmailRegistration(request: VerifyOTPEmailRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyOTPEmailRegistrationResponse>>;
    /**
     * Remove a OTP Email authenticator
     *
     * Remove an existing one-time password (OTP) Email authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeOTPEmailAuthenticator(request: RemoveOTPEmailAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPEmailAuthenticatorResponse>>;
    /**
     * Start an IDP authentication intent
     *
     * Start a new authentication intent on configured identity provider (IDP) for external login, registration or linking.
     */
    startIdentityProviderIntent(request: StartIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartIdentityProviderIntentResponse>>;
    /**
     * Get the information of the IDP authentication intent
     *
     * Get the information returned by the identity provider (IDP) for registration or updating an existing user with new information.
     */
    getIdentityProviderIntent(request: GetIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetIdentityProviderIntentResponse>>;
    /**
     * Add an IDP authenticator to a user
     *
     * Add a new identity provider (IDP) authenticator to an existing user.
     * This will allow the user to authenticate with the provided IDP.
     */
    addIDPAuthenticator(request: AddIDPAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIDPAuthenticatorResponse>>;
    /**
     * Remove an IDP authenticator
     *
     * Remove an existing identity provider (IDP) authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeIDPAuthenticator(request: RemoveIDPAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveIDPAuthenticatorResponse>>;
}
export interface ZITADELUsersClient<CallOptionsExt = {}> {
    /**
     * Search users
     *
     * Search all matching users. By default, we will return all users of your instance.
     * Make sure to include a limit and sorting for pagination.
     */
    searchUsers(request: DeepPartial<SearchUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<SearchUsersResponse>;
    /**
     * User by ID
     *
     * Returns the user identified by the requested ID.
     */
    getUser(request: DeepPartial<GetUserRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserResponse>;
    /**
     * Create a user
     *
     * Create a new user with an optional data schema.
     */
    createUser(request: DeepPartial<CreateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateUserResponse>;
    /**
     * Patch a user
     *
     * Patch an existing user with data based on a user schema.
     */
    patchUser(request: DeepPartial<PatchUserRequest>, options?: CallOptions & CallOptionsExt): Promise<PatchUserResponse>;
    /**
     * Deactivate a user
     *
     * Deactivate an existing user and change the state 'deactivated'.
     * The user will not be able to log in anymore.
     * Use deactivate user when the user should not be able to use the account anymore,
     * but you still need access to the user data.
     *
     * The endpoint returns an error if the user is already in the state 'deactivated'.
     */
    deactivateUser(request: DeepPartial<DeactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserResponse>;
    /**
     * Activate a user
     *
     * Activate a previously deactivated user and change the state to 'active'.
     * The user will be able to log in again.
     *
     * The endpoint returns an error if the user is not in the state 'deactivated'.
     */
    activateUser(request: DeepPartial<ActivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateUserResponse>;
    /**
     * Lock a user
     *
     * Lock an existing user and change the state 'locked'.
     * The user will not be able to log in anymore.
     * Use lock user when the user should temporarily not be able to log in
     * because of an event that happened (wrong password, etc.)
     *
     * The endpoint returns an error if the user is already in the state 'locked'.
     */
    lockUser(request: DeepPartial<LockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<LockUserResponse>;
    /**
     * Unlock a user
     *
     * Unlock a previously locked user and change the state to 'active'.
     * The user will be able to log in again.
     *
     * The endpoint returns an error if the user is not in the state 'locked'.
     */
    unlockUser(request: DeepPartial<UnlockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UnlockUserResponse>;
    /**
     * Delete a user
     *
     * Delete an existing user and change the state to 'deleted'.
     * The user will be able to log in anymore.
     */
    deleteUser(request: DeepPartial<DeleteUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteUserResponse>;
    /**
     * Set contact email
     *
     * Add or update the contact email address of a user.
     * If the email is not passed as verified, a verification code will be generated,
     * which can be either returned or will be sent to the user by email.
     */
    setContactEmail(request: DeepPartial<SetContactEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetContactEmailResponse>;
    /**
     * Verify the contact email
     *
     * Verify the contact email with the provided code.
     */
    verifyContactEmail(request: DeepPartial<VerifyContactEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyContactEmailResponse>;
    /**
     * Resend the contact email code
     *
     * Resend the email with the verification code for the contact email address.
     */
    resendContactEmailCode(request: DeepPartial<ResendContactEmailCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendContactEmailCodeResponse>;
    /**
     * Set contact phone
     *
     * Add or update the contact phone number of a user.
     * If the phone is not passed as verified, a verification code will be generated,
     * which can be either returned or will be sent to the user by SMS.
     */
    setContactPhone(request: DeepPartial<SetContactPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<SetContactPhoneResponse>;
    /**
     * Verify the contact phone
     *
     * Verify the contact phone with the provided code.
     */
    verifyContactPhone(request: DeepPartial<VerifyContactPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyContactPhoneResponse>;
    /**
     * Resend the contact phone code
     *
     * Resend the phone with the verification code for the contact phone number.
     */
    resendContactPhoneCode(request: DeepPartial<ResendContactPhoneCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendContactPhoneCodeResponse>;
    /**
     * Add a username
     *
     * Add a new unique username to a user. The username will be used to identify the user on authentication.
     */
    addUsername(request: DeepPartial<AddUsernameRequest>, options?: CallOptions & CallOptionsExt): Promise<AddUsernameResponse>;
    /**
     * Remove a username
     *
     * Remove an existing username of a user, so it cannot be used for authentication anymore.
     */
    removeUsername(request: DeepPartial<RemoveUsernameRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveUsernameResponse>;
    /**
     * Set a password
     *
     * Add, update or reset a user's password with either a verification code or the current password.
     */
    setPassword(request: DeepPartial<SetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPasswordResponse>;
    /**
     * Request password reset
     *
     * Request a code to be able to set a new password.
     */
    requestPasswordReset(request: DeepPartial<RequestPasswordResetRequest>, options?: CallOptions & CallOptionsExt): Promise<RequestPasswordResetResponse>;
    /**
     * Start a WebAuthN registration
     *
     * Start the registration of a new WebAuthN device (e.g. Passkeys) for a user.
     * As a response the public key credential creation options are returned,
     * which are used to verify the device.
     */
    startWebAuthNRegistration(request: DeepPartial<StartWebAuthNRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<StartWebAuthNRegistrationResponse>;
    /**
     * Verify a WebAuthN registration
     *
     * Verify the WebAuthN registration started by StartWebAuthNRegistration with the public key credential.
     */
    verifyWebAuthNRegistration(request: DeepPartial<VerifyWebAuthNRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyWebAuthNRegistrationResponse>;
    /**
     * Create a WebAuthN registration link
     *
     * Create a link, which includes a code, that can either be returned or directly sent to the user.
     * The code will allow the user to start a new WebAuthN registration.
     */
    createWebAuthNRegistrationLink(request: DeepPartial<CreateWebAuthNRegistrationLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateWebAuthNRegistrationLinkResponse>;
    /**
     * Remove a WebAuthN authenticator
     *
     * Remove an existing WebAuthN authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeWebAuthNAuthenticator(request: DeepPartial<RemoveWebAuthNAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveWebAuthNAuthenticatorResponse>;
    /**
     * Start a TOTP registration
     *
     * Start the registration of a new time-based one-time password (TOTP) generator for a user.
     * As a response a secret is returned, which is used to initialize a TOTP app or device.
     */
    startTOTPRegistration(request: DeepPartial<StartTOTPRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<StartTOTPRegistrationResponse>;
    /**
     * Verify a TOTP registration
     *
     * Verify the time-based one-time password (TOTP) registration with the generated code.
     */
    verifyTOTPRegistration(request: DeepPartial<VerifyTOTPRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyTOTPRegistrationResponse>;
    /**
     * Remove a TOTP authenticator
     *
     * Remove an existing time-based one-time password (TOTP) authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeTOTPAuthenticator(request: DeepPartial<RemoveTOTPAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveTOTPAuthenticatorResponse>;
    /**
     * Add a OTP SMS authenticator
     *
     * Add a new one-time password (OTP) SMS authenticator to a user.
     * If the phone is not passed as verified, a verification code will be generated,
     * which can be either returned or will be sent to the user by SMS.
     */
    addOTPSMSAuthenticator(request: DeepPartial<AddOTPSMSAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPSMSAuthenticatorResponse>;
    /**
     * Verify OTP SMS registration
     *
     * Verify the OTP SMS registration with the provided code.
     */
    verifyOTPSMSRegistration(request: DeepPartial<VerifyOTPSMSRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyOTPSMSRegistrationResponse>;
    /**
     * Remove a OTP SMS authenticator
     *
     * Remove an existing one-time password (OTP) SMS authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeOTPSMSAuthenticator(request: DeepPartial<RemoveOTPSMSAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPSMSAuthenticatorResponse>;
    /**
     * Add a OTP Email authenticator
     *
     * Add a new one-time password (OTP) Email authenticator to a user.
     * If the email is not passed as verified, a verification code will be generated,
     * which can be either returned or will be sent to the user by email.
     */
    addOTPEmailAuthenticator(request: DeepPartial<AddOTPEmailAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPEmailAuthenticatorResponse>;
    /**
     * Verify OTP Email registration
     *
     * Verify the OTP Email registration with the provided code.
     */
    verifyOTPEmailRegistration(request: DeepPartial<VerifyOTPEmailRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyOTPEmailRegistrationResponse>;
    /**
     * Remove a OTP Email authenticator
     *
     * Remove an existing one-time password (OTP) Email authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeOTPEmailAuthenticator(request: DeepPartial<RemoveOTPEmailAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPEmailAuthenticatorResponse>;
    /**
     * Start an IDP authentication intent
     *
     * Start a new authentication intent on configured identity provider (IDP) for external login, registration or linking.
     */
    startIdentityProviderIntent(request: DeepPartial<StartIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<StartIdentityProviderIntentResponse>;
    /**
     * Get the information of the IDP authentication intent
     *
     * Get the information returned by the identity provider (IDP) for registration or updating an existing user with new information.
     */
    getIdentityProviderIntent(request: DeepPartial<GetIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<GetIdentityProviderIntentResponse>;
    /**
     * Add an IDP authenticator to a user
     *
     * Add a new identity provider (IDP) authenticator to an existing user.
     * This will allow the user to authenticate with the provided IDP.
     */
    addIDPAuthenticator(request: DeepPartial<AddIDPAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIDPAuthenticatorResponse>;
    /**
     * Remove an IDP authenticator
     *
     * Remove an existing identity provider (IDP) authenticator from a user, so it cannot be used for authentication anymore.
     */
    removeIDPAuthenticator(request: DeepPartial<RemoveIDPAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveIDPAuthenticatorResponse>;
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
