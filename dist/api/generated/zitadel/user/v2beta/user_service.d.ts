import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Details, ListDetails, ListQuery, Organization } from "../../object/v2beta/object.js";
import { PasskeyAuthenticator, PasskeyRegistrationCode, ReturnPasskeyRegistrationCode, SendPasskeyRegistrationLink } from "./auth.js";
import { ReturnEmailVerificationCode, SendEmailVerificationCode, SetHumanEmail } from "./email.js";
import { IDPInformation, IDPIntent, IDPLink, LDAPCredentials, RedirectURLs } from "./idp.js";
import { HashedPassword, Password, ReturnPasswordResetCode, SendPasswordResetLink, SetPassword } from "./password.js";
import { ReturnPhoneVerificationCode, SendPhoneVerificationCode, SetHumanPhone } from "./phone.js";
import { SearchQuery, UserFieldName } from "./query.js";
import { SetHumanProfile, SetMetadataEntry, User } from "./user.js";
export declare const protobufPackage = "zitadel.user.v2beta";
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
export interface StartIdentityProviderIntentRequest {
    idpId: string;
    urls?: RedirectURLs | undefined;
    ldap?: LDAPCredentials | undefined;
}
export interface StartIdentityProviderIntentResponse {
    details: Details | undefined;
    authUrl?: string | undefined;
    idpIntent?: IDPIntent | undefined;
    postForm?: Buffer | undefined;
}
export interface RetrieveIdentityProviderIntentRequest {
    idpIntentId: string;
    idpIntentToken: string;
}
export interface RetrieveIdentityProviderIntentResponse {
    details: Details | undefined;
    idpInformation: IDPInformation | undefined;
    userId: string;
}
export interface AddIDPLinkRequest {
    userId: string;
    idpLink: IDPLink | undefined;
}
export interface AddIDPLinkResponse {
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
}
export interface ListAuthenticationMethodTypesResponse {
    details: ListDetails | undefined;
    authMethodTypes: AuthenticationMethodType[];
}
export declare const AddHumanUserRequest: MessageFns<AddHumanUserRequest>;
export declare const AddHumanUserResponse: MessageFns<AddHumanUserResponse>;
export declare const GetUserByIDRequest: MessageFns<GetUserByIDRequest>;
export declare const GetUserByIDResponse: MessageFns<GetUserByIDResponse>;
export declare const ListUsersRequest: MessageFns<ListUsersRequest>;
export declare const ListUsersResponse: MessageFns<ListUsersResponse>;
export declare const SetEmailRequest: MessageFns<SetEmailRequest>;
export declare const SetEmailResponse: MessageFns<SetEmailResponse>;
export declare const ResendEmailCodeRequest: MessageFns<ResendEmailCodeRequest>;
export declare const ResendEmailCodeResponse: MessageFns<ResendEmailCodeResponse>;
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
export declare const StartIdentityProviderIntentRequest: MessageFns<StartIdentityProviderIntentRequest>;
export declare const StartIdentityProviderIntentResponse: MessageFns<StartIdentityProviderIntentResponse>;
export declare const RetrieveIdentityProviderIntentRequest: MessageFns<RetrieveIdentityProviderIntentRequest>;
export declare const RetrieveIdentityProviderIntentResponse: MessageFns<RetrieveIdentityProviderIntentResponse>;
export declare const AddIDPLinkRequest: MessageFns<AddIDPLinkRequest>;
export declare const AddIDPLinkResponse: MessageFns<AddIDPLinkResponse>;
export declare const PasswordResetRequest: MessageFns<PasswordResetRequest>;
export declare const PasswordResetResponse: MessageFns<PasswordResetResponse>;
export declare const SetPasswordRequest: MessageFns<SetPasswordRequest>;
export declare const SetPasswordResponse: MessageFns<SetPasswordResponse>;
export declare const ListAuthenticationMethodTypesRequest: MessageFns<ListAuthenticationMethodTypesRequest>;
export declare const ListAuthenticationMethodTypesResponse: MessageFns<ListAuthenticationMethodTypesResponse>;
export type UserServiceDefinition = typeof UserServiceDefinition;
export declare const UserServiceDefinition: {
    readonly name: "UserService";
    readonly fullName: "zitadel.user.v2beta.UserService";
    readonly methods: {
        /**
         * Create a new human user
         *
         * Create/import a new user with the type human. The newly created user will get a verification email if either the email address is not marked as verified and you did not request the verification to be returned.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA)
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
         * Returns the full user object (human or machine) including the profile, email, etc.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Search for users. By default, we will return users of your organization. Make sure to include a limit and sorting for pagination.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Change the email address of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by email.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
        /**
         * Resend code to verify user email
         *
         * Resend code to verify user email
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
         */
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
        /**
         * Verify the email
         *
         * Verify the email with the generated code.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Set the phone number of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by sms.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Remove the user phone
         *
         * Remove the user phone
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Resend code to verify user phone
         *
         * Resend code to verify user phone
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Verify the phone
         *
         * Verify the phone with the generated code.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Update User
         *
         * Update all information from a user.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * The state of the user will be changed to 'deactivated'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'deactivated'. Use deactivate user when the user should not be able to use the account anymore, but you still need access to the user data.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Reactivate a user with the state 'deactivated'. The user will be able to log in again afterward. The endpoint returns an error if the user is not in the state 'deactivated'.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * The state of the user will be changed to 'locked'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'locked'. Use this endpoint if the user should not be able to log in temporarily because of an event that happened (wrong password, etc.).
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * The state of the user will be changed to 'locked'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'locked'. Use this endpoint if the user should not be able to log in temporarily because of an event that happened (wrong password, etc.).
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * The state of the user will be changed to 'deleted'. The user will not be able to log in anymore. Endpoints requesting this user will return an error 'User not found.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Start the registration of a passkey for a user, as a response the public key credential creation options are returned, which are used to verify the passkey.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Verify the passkey registration with the public key credential.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Create a passkey registration link which includes a code and either return it or send it to the user.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Start the registration of a u2f token for a user
         *
         * Start the registration of a u2f token for a user, as a response the public key credential creation options are returned, which are used to verify the u2f token.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Verify the u2f token registration with the public key credential.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Start the registration of a TOTP generator for a user
         *
         * Start the registration of a TOTP generator for a user, as a response a secret returned, which is used to initialize a TOTP app or device.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Verify the TOTP registration with a generated code.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Add a new One-Time Password (OTP) SMS factor to the authenticated user. OTP SMS will enable the user to verify a OTP with the latest verified phone number. The phone number has to be verified to add the second factor.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Add a new One-Time Password (OTP) Email factor to the authenticated user. OTP Email will enable the user to verify a OTP with the latest verified email. The email has to be verified to add the second factor.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Start a flow with an identity provider, for external login, registration or linking.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Retrieve the information returned by the identity provider for registration or updating an existing user with new information.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Add link to an identity provider to an user.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Request a code to reset a password
         *
         * Request a code to reset a password.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * Change the password of a user with either a verification code or the current password.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
         * List all possible authentication methods of a user
         *
         * List all possible authentication methods of a user like password, passwordless, (T)OTP and more.
         *
         * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
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
    };
};
export interface UserServiceImplementation<CallContextExt = {}> {
    /**
     * Create a new human user
     *
     * Create/import a new user with the type human. The newly created user will get a verification email if either the email address is not marked as verified and you did not request the verification to be returned.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA)
     */
    addHumanUser(request: AddHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddHumanUserResponse>>;
    /**
     * User by ID
     *
     * Returns the full user object (human or machine) including the profile, email, etc.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    getUserByID(request: GetUserByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserByIDResponse>>;
    /**
     * Search Users
     *
     * Search for users. By default, we will return users of your organization. Make sure to include a limit and sorting for pagination.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    listUsers(request: ListUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUsersResponse>>;
    /**
     * Change the user email
     *
     * Change the email address of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by email.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    setEmail(request: SetEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetEmailResponse>>;
    /**
     * Resend code to verify user email
     *
     * Resend code to verify user email
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    resendEmailCode(request: ResendEmailCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendEmailCodeResponse>>;
    /**
     * Verify the email
     *
     * Verify the email with the generated code.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyEmail(request: VerifyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyEmailResponse>>;
    /**
     * Set the user phone
     *
     * Set the phone number of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by sms.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    setPhone(request: SetPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPhoneResponse>>;
    /**
     * Remove the user phone
     *
     * Remove the user phone
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    removePhone(request: RemovePhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemovePhoneResponse>>;
    /**
     * Resend code to verify user phone
     *
     * Resend code to verify user phone
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    resendPhoneCode(request: ResendPhoneCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendPhoneCodeResponse>>;
    /**
     * Verify the phone
     *
     * Verify the phone with the generated code.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyPhone(request: VerifyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyPhoneResponse>>;
    /**
     * Update User
     *
     * Update all information from a user.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    updateHumanUser(request: UpdateHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateHumanUserResponse>>;
    /**
     * Deactivate user
     *
     * The state of the user will be changed to 'deactivated'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'deactivated'. Use deactivate user when the user should not be able to use the account anymore, but you still need access to the user data.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    deactivateUser(request: DeactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserResponse>>;
    /**
     * Reactivate user
     *
     * Reactivate a user with the state 'deactivated'. The user will be able to log in again afterward. The endpoint returns an error if the user is not in the state 'deactivated'.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    reactivateUser(request: ReactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateUserResponse>>;
    /**
     * Lock user
     *
     * The state of the user will be changed to 'locked'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'locked'. Use this endpoint if the user should not be able to log in temporarily because of an event that happened (wrong password, etc.).
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    lockUser(request: LockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LockUserResponse>>;
    /**
     * Unlock user
     *
     * The state of the user will be changed to 'locked'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'locked'. Use this endpoint if the user should not be able to log in temporarily because of an event that happened (wrong password, etc.).
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    unlockUser(request: UnlockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UnlockUserResponse>>;
    /**
     * Delete user
     *
     * The state of the user will be changed to 'deleted'. The user will not be able to log in anymore. Endpoints requesting this user will return an error 'User not found.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    deleteUser(request: DeleteUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteUserResponse>>;
    /**
     * Start the registration of passkey for a user
     *
     * Start the registration of a passkey for a user, as a response the public key credential creation options are returned, which are used to verify the passkey.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    registerPasskey(request: RegisterPasskeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterPasskeyResponse>>;
    /**
     * Verify a passkey for a user
     *
     * Verify the passkey registration with the public key credential.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyPasskeyRegistration(request: VerifyPasskeyRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyPasskeyRegistrationResponse>>;
    /**
     * Create a passkey registration link for a user
     *
     * Create a passkey registration link which includes a code and either return it or send it to the user.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    createPasskeyRegistrationLink(request: CreatePasskeyRegistrationLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreatePasskeyRegistrationLinkResponse>>;
    /**
     * Start the registration of a u2f token for a user
     *
     * Start the registration of a u2f token for a user, as a response the public key credential creation options are returned, which are used to verify the u2f token.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    registerU2F(request: RegisterU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterU2FResponse>>;
    /**
     * Verify a u2f token for a user
     *
     * Verify the u2f token registration with the public key credential.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyU2FRegistration(request: VerifyU2FRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyU2FRegistrationResponse>>;
    /**
     * Start the registration of a TOTP generator for a user
     *
     * Start the registration of a TOTP generator for a user, as a response a secret returned, which is used to initialize a TOTP app or device.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    registerTOTP(request: RegisterTOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterTOTPResponse>>;
    /**
     * Verify a TOTP generator for a user
     *
     * Verify the TOTP registration with a generated code.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyTOTPRegistration(request: VerifyTOTPRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyTOTPRegistrationResponse>>;
    /**
     * Remove TOTP generator from a user
     *
     * Remove the configured TOTP generator of a user. As only one TOTP generator per user is allowed, the user will not have TOTP as a second factor afterward.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    removeTOTP(request: RemoveTOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveTOTPResponse>>;
    /**
     * Add OTP SMS for a user
     *
     * Add a new One-Time Password (OTP) SMS factor to the authenticated user. OTP SMS will enable the user to verify a OTP with the latest verified phone number. The phone number has to be verified to add the second factor.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    addOTPSMS(request: AddOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPSMSResponse>>;
    /**
     * Remove One-Time Password (OTP) SMS from a user
     *
     * Remove the configured One-Time Password (OTP) SMS factor of a user. As only one OTP SMS per user is allowed, the user will not have OTP SMS as a second factor afterward.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    removeOTPSMS(request: RemoveOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPSMSResponse>>;
    /**
     * Add OTP Email for a user
     *
     * Add a new One-Time Password (OTP) Email factor to the authenticated user. OTP Email will enable the user to verify a OTP with the latest verified email. The email has to be verified to add the second factor.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    addOTPEmail(request: AddOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPEmailResponse>>;
    /**
     * Remove One-Time Password (OTP) Email from a user
     *
     * Remove the configured One-Time Password (OTP) Email factor of a user. As only one OTP Email per user is allowed, the user will not have OTP Email as a second factor afterward.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    removeOTPEmail(request: RemoveOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPEmailResponse>>;
    /**
     * Start flow with an identity provider
     *
     * Start a flow with an identity provider, for external login, registration or linking.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    startIdentityProviderIntent(request: StartIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartIdentityProviderIntentResponse>>;
    /**
     * Retrieve the information returned by the identity provider
     *
     * Retrieve the information returned by the identity provider for registration or updating an existing user with new information.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    retrieveIdentityProviderIntent(request: RetrieveIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RetrieveIdentityProviderIntentResponse>>;
    /**
     * Add link to an identity provider to an user
     *
     * Add link to an identity provider to an user.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    addIDPLink(request: AddIDPLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIDPLinkResponse>>;
    /**
     * Request a code to reset a password
     *
     * Request a code to reset a password.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    passwordReset(request: PasswordResetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PasswordResetResponse>>;
    /**
     * Change password
     *
     * Change the password of a user with either a verification code or the current password.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    setPassword(request: SetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPasswordResponse>>;
    /**
     * List all possible authentication methods of a user
     *
     * List all possible authentication methods of a user like password, passwordless, (T)OTP and more.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    listAuthenticationMethodTypes(request: ListAuthenticationMethodTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAuthenticationMethodTypesResponse>>;
}
export interface UserServiceClient<CallOptionsExt = {}> {
    /**
     * Create a new human user
     *
     * Create/import a new user with the type human. The newly created user will get a verification email if either the email address is not marked as verified and you did not request the verification to be returned.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA)
     */
    addHumanUser(request: DeepPartial<AddHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<AddHumanUserResponse>;
    /**
     * User by ID
     *
     * Returns the full user object (human or machine) including the profile, email, etc.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    getUserByID(request: DeepPartial<GetUserByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserByIDResponse>;
    /**
     * Search Users
     *
     * Search for users. By default, we will return users of your organization. Make sure to include a limit and sorting for pagination.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    listUsers(request: DeepPartial<ListUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUsersResponse>;
    /**
     * Change the user email
     *
     * Change the email address of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by email.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    setEmail(request: DeepPartial<SetEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetEmailResponse>;
    /**
     * Resend code to verify user email
     *
     * Resend code to verify user email
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    resendEmailCode(request: DeepPartial<ResendEmailCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendEmailCodeResponse>;
    /**
     * Verify the email
     *
     * Verify the email with the generated code.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyEmail(request: DeepPartial<VerifyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyEmailResponse>;
    /**
     * Set the user phone
     *
     * Set the phone number of a user. If the state is set to not verified, a verification code will be generated, which can be either returned or sent to the user by sms.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    setPhone(request: DeepPartial<SetPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPhoneResponse>;
    /**
     * Remove the user phone
     *
     * Remove the user phone
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    removePhone(request: DeepPartial<RemovePhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<RemovePhoneResponse>;
    /**
     * Resend code to verify user phone
     *
     * Resend code to verify user phone
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    resendPhoneCode(request: DeepPartial<ResendPhoneCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendPhoneCodeResponse>;
    /**
     * Verify the phone
     *
     * Verify the phone with the generated code.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyPhone(request: DeepPartial<VerifyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyPhoneResponse>;
    /**
     * Update User
     *
     * Update all information from a user.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    updateHumanUser(request: DeepPartial<UpdateHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateHumanUserResponse>;
    /**
     * Deactivate user
     *
     * The state of the user will be changed to 'deactivated'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'deactivated'. Use deactivate user when the user should not be able to use the account anymore, but you still need access to the user data.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    deactivateUser(request: DeepPartial<DeactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserResponse>;
    /**
     * Reactivate user
     *
     * Reactivate a user with the state 'deactivated'. The user will be able to log in again afterward. The endpoint returns an error if the user is not in the state 'deactivated'.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    reactivateUser(request: DeepPartial<ReactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateUserResponse>;
    /**
     * Lock user
     *
     * The state of the user will be changed to 'locked'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'locked'. Use this endpoint if the user should not be able to log in temporarily because of an event that happened (wrong password, etc.).
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    lockUser(request: DeepPartial<LockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<LockUserResponse>;
    /**
     * Unlock user
     *
     * The state of the user will be changed to 'locked'. The user will not be able to log in anymore. The endpoint returns an error if the user is already in the state 'locked'. Use this endpoint if the user should not be able to log in temporarily because of an event that happened (wrong password, etc.).
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    unlockUser(request: DeepPartial<UnlockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UnlockUserResponse>;
    /**
     * Delete user
     *
     * The state of the user will be changed to 'deleted'. The user will not be able to log in anymore. Endpoints requesting this user will return an error 'User not found.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    deleteUser(request: DeepPartial<DeleteUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteUserResponse>;
    /**
     * Start the registration of passkey for a user
     *
     * Start the registration of a passkey for a user, as a response the public key credential creation options are returned, which are used to verify the passkey.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    registerPasskey(request: DeepPartial<RegisterPasskeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterPasskeyResponse>;
    /**
     * Verify a passkey for a user
     *
     * Verify the passkey registration with the public key credential.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyPasskeyRegistration(request: DeepPartial<VerifyPasskeyRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyPasskeyRegistrationResponse>;
    /**
     * Create a passkey registration link for a user
     *
     * Create a passkey registration link which includes a code and either return it or send it to the user.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    createPasskeyRegistrationLink(request: DeepPartial<CreatePasskeyRegistrationLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<CreatePasskeyRegistrationLinkResponse>;
    /**
     * Start the registration of a u2f token for a user
     *
     * Start the registration of a u2f token for a user, as a response the public key credential creation options are returned, which are used to verify the u2f token.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    registerU2F(request: DeepPartial<RegisterU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterU2FResponse>;
    /**
     * Verify a u2f token for a user
     *
     * Verify the u2f token registration with the public key credential.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyU2FRegistration(request: DeepPartial<VerifyU2FRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyU2FRegistrationResponse>;
    /**
     * Start the registration of a TOTP generator for a user
     *
     * Start the registration of a TOTP generator for a user, as a response a secret returned, which is used to initialize a TOTP app or device.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    registerTOTP(request: DeepPartial<RegisterTOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterTOTPResponse>;
    /**
     * Verify a TOTP generator for a user
     *
     * Verify the TOTP registration with a generated code.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    verifyTOTPRegistration(request: DeepPartial<VerifyTOTPRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyTOTPRegistrationResponse>;
    /**
     * Remove TOTP generator from a user
     *
     * Remove the configured TOTP generator of a user. As only one TOTP generator per user is allowed, the user will not have TOTP as a second factor afterward.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    removeTOTP(request: DeepPartial<RemoveTOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveTOTPResponse>;
    /**
     * Add OTP SMS for a user
     *
     * Add a new One-Time Password (OTP) SMS factor to the authenticated user. OTP SMS will enable the user to verify a OTP with the latest verified phone number. The phone number has to be verified to add the second factor.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    addOTPSMS(request: DeepPartial<AddOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPSMSResponse>;
    /**
     * Remove One-Time Password (OTP) SMS from a user
     *
     * Remove the configured One-Time Password (OTP) SMS factor of a user. As only one OTP SMS per user is allowed, the user will not have OTP SMS as a second factor afterward.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    removeOTPSMS(request: DeepPartial<RemoveOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPSMSResponse>;
    /**
     * Add OTP Email for a user
     *
     * Add a new One-Time Password (OTP) Email factor to the authenticated user. OTP Email will enable the user to verify a OTP with the latest verified email. The email has to be verified to add the second factor.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    addOTPEmail(request: DeepPartial<AddOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPEmailResponse>;
    /**
     * Remove One-Time Password (OTP) Email from a user
     *
     * Remove the configured One-Time Password (OTP) Email factor of a user. As only one OTP Email per user is allowed, the user will not have OTP Email as a second factor afterward.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    removeOTPEmail(request: DeepPartial<RemoveOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPEmailResponse>;
    /**
     * Start flow with an identity provider
     *
     * Start a flow with an identity provider, for external login, registration or linking.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    startIdentityProviderIntent(request: DeepPartial<StartIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<StartIdentityProviderIntentResponse>;
    /**
     * Retrieve the information returned by the identity provider
     *
     * Retrieve the information returned by the identity provider for registration or updating an existing user with new information.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    retrieveIdentityProviderIntent(request: DeepPartial<RetrieveIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<RetrieveIdentityProviderIntentResponse>;
    /**
     * Add link to an identity provider to an user
     *
     * Add link to an identity provider to an user.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    addIDPLink(request: DeepPartial<AddIDPLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIDPLinkResponse>;
    /**
     * Request a code to reset a password
     *
     * Request a code to reset a password.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    passwordReset(request: DeepPartial<PasswordResetRequest>, options?: CallOptions & CallOptionsExt): Promise<PasswordResetResponse>;
    /**
     * Change password
     *
     * Change the password of a user with either a verification code or the current password.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    setPassword(request: DeepPartial<SetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPasswordResponse>;
    /**
     * List all possible authentication methods of a user
     *
     * List all possible authentication methods of a user like password, passwordless, (T)OTP and more.
     *
     * Deprecated: please move to the corresponding endpoint under user service v2 (GA).
     */
    listAuthenticationMethodTypes(request: DeepPartial<ListAuthenticationMethodTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAuthenticationMethodTypesResponse>;
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
