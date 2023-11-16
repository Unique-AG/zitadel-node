/// <reference types="node" />
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Details, ListDetails, Organisation, Organization } from "../../object/v2beta/object";
import { PasskeyAuthenticator, PasskeyRegistrationCode, ReturnPasskeyRegistrationCode, SendPasskeyRegistrationLink } from "./auth";
import { ReturnEmailVerificationCode, SendEmailVerificationCode, SetHumanEmail } from "./email";
import { IDPInformation, IDPIntent, IDPLink, LDAPCredentials, RedirectURLs } from "./idp";
import { HashedPassword, Password, ReturnPasswordResetCode, SendPasswordResetLink } from "./password";
import { ReturnPhoneVerificationCode, SendPhoneVerificationCode, SetHumanPhone } from "./phone";
import { SetHumanProfile, SetMetadataEntry } from "./user";
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
    /** optionally set your own id unique for the user */
    userId?: string | undefined;
    /** optionally set a unique username, if none is provided the email will be used */
    username?: string | undefined;
    /** deprecated: use organization (if both are set, organization will take precedence) */
    organisation: Organisation | undefined;
    organization: Organization | undefined;
    profile: SetHumanProfile | undefined;
    email: SetHumanEmail | undefined;
    phone: SetHumanPhone | undefined;
    metadata: SetMetadataEntry[];
    password?: Password | undefined;
    hashedPassword?: HashedPassword | undefined;
    idpLinks: IDPLink[];
}
export interface AddHumanUserResponse {
    userId: string;
    details: Details | undefined;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
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
export interface VerifyPhoneRequest {
    userId: string;
    verificationCode: string;
}
export interface VerifyPhoneResponse {
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
export declare const AddHumanUserRequest: {
    encode(message: AddHumanUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserRequest;
    fromJSON(object: any): AddHumanUserRequest;
    toJSON(message: AddHumanUserRequest): unknown;
    create(base?: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest;
    fromPartial(object: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest;
};
export declare const AddHumanUserResponse: {
    encode(message: AddHumanUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserResponse;
    fromJSON(object: any): AddHumanUserResponse;
    toJSON(message: AddHumanUserResponse): unknown;
    create(base?: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse;
    fromPartial(object: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse;
};
export declare const SetEmailRequest: {
    encode(message: SetEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetEmailRequest;
    fromJSON(object: any): SetEmailRequest;
    toJSON(message: SetEmailRequest): unknown;
    create(base?: DeepPartial<SetEmailRequest>): SetEmailRequest;
    fromPartial(object: DeepPartial<SetEmailRequest>): SetEmailRequest;
};
export declare const SetEmailResponse: {
    encode(message: SetEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetEmailResponse;
    fromJSON(object: any): SetEmailResponse;
    toJSON(message: SetEmailResponse): unknown;
    create(base?: DeepPartial<SetEmailResponse>): SetEmailResponse;
    fromPartial(object: DeepPartial<SetEmailResponse>): SetEmailResponse;
};
export declare const VerifyEmailRequest: {
    encode(message: VerifyEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmailRequest;
    fromJSON(object: any): VerifyEmailRequest;
    toJSON(message: VerifyEmailRequest): unknown;
    create(base?: DeepPartial<VerifyEmailRequest>): VerifyEmailRequest;
    fromPartial(object: DeepPartial<VerifyEmailRequest>): VerifyEmailRequest;
};
export declare const VerifyEmailResponse: {
    encode(message: VerifyEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmailResponse;
    fromJSON(object: any): VerifyEmailResponse;
    toJSON(message: VerifyEmailResponse): unknown;
    create(base?: DeepPartial<VerifyEmailResponse>): VerifyEmailResponse;
    fromPartial(object: DeepPartial<VerifyEmailResponse>): VerifyEmailResponse;
};
export declare const SetPhoneRequest: {
    encode(message: SetPhoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPhoneRequest;
    fromJSON(object: any): SetPhoneRequest;
    toJSON(message: SetPhoneRequest): unknown;
    create(base?: DeepPartial<SetPhoneRequest>): SetPhoneRequest;
    fromPartial(object: DeepPartial<SetPhoneRequest>): SetPhoneRequest;
};
export declare const SetPhoneResponse: {
    encode(message: SetPhoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPhoneResponse;
    fromJSON(object: any): SetPhoneResponse;
    toJSON(message: SetPhoneResponse): unknown;
    create(base?: DeepPartial<SetPhoneResponse>): SetPhoneResponse;
    fromPartial(object: DeepPartial<SetPhoneResponse>): SetPhoneResponse;
};
export declare const VerifyPhoneRequest: {
    encode(message: VerifyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPhoneRequest;
    fromJSON(object: any): VerifyPhoneRequest;
    toJSON(message: VerifyPhoneRequest): unknown;
    create(base?: DeepPartial<VerifyPhoneRequest>): VerifyPhoneRequest;
    fromPartial(object: DeepPartial<VerifyPhoneRequest>): VerifyPhoneRequest;
};
export declare const VerifyPhoneResponse: {
    encode(message: VerifyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPhoneResponse;
    fromJSON(object: any): VerifyPhoneResponse;
    toJSON(message: VerifyPhoneResponse): unknown;
    create(base?: DeepPartial<VerifyPhoneResponse>): VerifyPhoneResponse;
    fromPartial(object: DeepPartial<VerifyPhoneResponse>): VerifyPhoneResponse;
};
export declare const RegisterPasskeyRequest: {
    encode(message: RegisterPasskeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPasskeyRequest;
    fromJSON(object: any): RegisterPasskeyRequest;
    toJSON(message: RegisterPasskeyRequest): unknown;
    create(base?: DeepPartial<RegisterPasskeyRequest>): RegisterPasskeyRequest;
    fromPartial(object: DeepPartial<RegisterPasskeyRequest>): RegisterPasskeyRequest;
};
export declare const RegisterPasskeyResponse: {
    encode(message: RegisterPasskeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPasskeyResponse;
    fromJSON(object: any): RegisterPasskeyResponse;
    toJSON(message: RegisterPasskeyResponse): unknown;
    create(base?: DeepPartial<RegisterPasskeyResponse>): RegisterPasskeyResponse;
    fromPartial(object: DeepPartial<RegisterPasskeyResponse>): RegisterPasskeyResponse;
};
export declare const VerifyPasskeyRegistrationRequest: {
    encode(message: VerifyPasskeyRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPasskeyRegistrationRequest;
    fromJSON(object: any): VerifyPasskeyRegistrationRequest;
    toJSON(message: VerifyPasskeyRegistrationRequest): unknown;
    create(base?: DeepPartial<VerifyPasskeyRegistrationRequest>): VerifyPasskeyRegistrationRequest;
    fromPartial(object: DeepPartial<VerifyPasskeyRegistrationRequest>): VerifyPasskeyRegistrationRequest;
};
export declare const VerifyPasskeyRegistrationResponse: {
    encode(message: VerifyPasskeyRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPasskeyRegistrationResponse;
    fromJSON(object: any): VerifyPasskeyRegistrationResponse;
    toJSON(message: VerifyPasskeyRegistrationResponse): unknown;
    create(base?: DeepPartial<VerifyPasskeyRegistrationResponse>): VerifyPasskeyRegistrationResponse;
    fromPartial(object: DeepPartial<VerifyPasskeyRegistrationResponse>): VerifyPasskeyRegistrationResponse;
};
export declare const RegisterU2FRequest: {
    encode(message: RegisterU2FRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterU2FRequest;
    fromJSON(object: any): RegisterU2FRequest;
    toJSON(message: RegisterU2FRequest): unknown;
    create(base?: DeepPartial<RegisterU2FRequest>): RegisterU2FRequest;
    fromPartial(object: DeepPartial<RegisterU2FRequest>): RegisterU2FRequest;
};
export declare const RegisterU2FResponse: {
    encode(message: RegisterU2FResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterU2FResponse;
    fromJSON(object: any): RegisterU2FResponse;
    toJSON(message: RegisterU2FResponse): unknown;
    create(base?: DeepPartial<RegisterU2FResponse>): RegisterU2FResponse;
    fromPartial(object: DeepPartial<RegisterU2FResponse>): RegisterU2FResponse;
};
export declare const VerifyU2FRegistrationRequest: {
    encode(message: VerifyU2FRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyU2FRegistrationRequest;
    fromJSON(object: any): VerifyU2FRegistrationRequest;
    toJSON(message: VerifyU2FRegistrationRequest): unknown;
    create(base?: DeepPartial<VerifyU2FRegistrationRequest>): VerifyU2FRegistrationRequest;
    fromPartial(object: DeepPartial<VerifyU2FRegistrationRequest>): VerifyU2FRegistrationRequest;
};
export declare const VerifyU2FRegistrationResponse: {
    encode(message: VerifyU2FRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyU2FRegistrationResponse;
    fromJSON(object: any): VerifyU2FRegistrationResponse;
    toJSON(message: VerifyU2FRegistrationResponse): unknown;
    create(base?: DeepPartial<VerifyU2FRegistrationResponse>): VerifyU2FRegistrationResponse;
    fromPartial(object: DeepPartial<VerifyU2FRegistrationResponse>): VerifyU2FRegistrationResponse;
};
export declare const RegisterTOTPRequest: {
    encode(message: RegisterTOTPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterTOTPRequest;
    fromJSON(object: any): RegisterTOTPRequest;
    toJSON(message: RegisterTOTPRequest): unknown;
    create(base?: DeepPartial<RegisterTOTPRequest>): RegisterTOTPRequest;
    fromPartial(object: DeepPartial<RegisterTOTPRequest>): RegisterTOTPRequest;
};
export declare const RegisterTOTPResponse: {
    encode(message: RegisterTOTPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterTOTPResponse;
    fromJSON(object: any): RegisterTOTPResponse;
    toJSON(message: RegisterTOTPResponse): unknown;
    create(base?: DeepPartial<RegisterTOTPResponse>): RegisterTOTPResponse;
    fromPartial(object: DeepPartial<RegisterTOTPResponse>): RegisterTOTPResponse;
};
export declare const VerifyTOTPRegistrationRequest: {
    encode(message: VerifyTOTPRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyTOTPRegistrationRequest;
    fromJSON(object: any): VerifyTOTPRegistrationRequest;
    toJSON(message: VerifyTOTPRegistrationRequest): unknown;
    create(base?: DeepPartial<VerifyTOTPRegistrationRequest>): VerifyTOTPRegistrationRequest;
    fromPartial(object: DeepPartial<VerifyTOTPRegistrationRequest>): VerifyTOTPRegistrationRequest;
};
export declare const VerifyTOTPRegistrationResponse: {
    encode(message: VerifyTOTPRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyTOTPRegistrationResponse;
    fromJSON(object: any): VerifyTOTPRegistrationResponse;
    toJSON(message: VerifyTOTPRegistrationResponse): unknown;
    create(base?: DeepPartial<VerifyTOTPRegistrationResponse>): VerifyTOTPRegistrationResponse;
    fromPartial(object: DeepPartial<VerifyTOTPRegistrationResponse>): VerifyTOTPRegistrationResponse;
};
export declare const AddOTPSMSRequest: {
    encode(message: AddOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPSMSRequest;
    fromJSON(object: any): AddOTPSMSRequest;
    toJSON(message: AddOTPSMSRequest): unknown;
    create(base?: DeepPartial<AddOTPSMSRequest>): AddOTPSMSRequest;
    fromPartial(object: DeepPartial<AddOTPSMSRequest>): AddOTPSMSRequest;
};
export declare const AddOTPSMSResponse: {
    encode(message: AddOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPSMSResponse;
    fromJSON(object: any): AddOTPSMSResponse;
    toJSON(message: AddOTPSMSResponse): unknown;
    create(base?: DeepPartial<AddOTPSMSResponse>): AddOTPSMSResponse;
    fromPartial(object: DeepPartial<AddOTPSMSResponse>): AddOTPSMSResponse;
};
export declare const RemoveOTPSMSRequest: {
    encode(message: RemoveOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPSMSRequest;
    fromJSON(object: any): RemoveOTPSMSRequest;
    toJSON(message: RemoveOTPSMSRequest): unknown;
    create(base?: DeepPartial<RemoveOTPSMSRequest>): RemoveOTPSMSRequest;
    fromPartial(object: DeepPartial<RemoveOTPSMSRequest>): RemoveOTPSMSRequest;
};
export declare const RemoveOTPSMSResponse: {
    encode(message: RemoveOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPSMSResponse;
    fromJSON(object: any): RemoveOTPSMSResponse;
    toJSON(message: RemoveOTPSMSResponse): unknown;
    create(base?: DeepPartial<RemoveOTPSMSResponse>): RemoveOTPSMSResponse;
    fromPartial(object: DeepPartial<RemoveOTPSMSResponse>): RemoveOTPSMSResponse;
};
export declare const AddOTPEmailRequest: {
    encode(message: AddOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPEmailRequest;
    fromJSON(object: any): AddOTPEmailRequest;
    toJSON(message: AddOTPEmailRequest): unknown;
    create(base?: DeepPartial<AddOTPEmailRequest>): AddOTPEmailRequest;
    fromPartial(object: DeepPartial<AddOTPEmailRequest>): AddOTPEmailRequest;
};
export declare const AddOTPEmailResponse: {
    encode(message: AddOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPEmailResponse;
    fromJSON(object: any): AddOTPEmailResponse;
    toJSON(message: AddOTPEmailResponse): unknown;
    create(base?: DeepPartial<AddOTPEmailResponse>): AddOTPEmailResponse;
    fromPartial(object: DeepPartial<AddOTPEmailResponse>): AddOTPEmailResponse;
};
export declare const RemoveOTPEmailRequest: {
    encode(message: RemoveOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPEmailRequest;
    fromJSON(object: any): RemoveOTPEmailRequest;
    toJSON(message: RemoveOTPEmailRequest): unknown;
    create(base?: DeepPartial<RemoveOTPEmailRequest>): RemoveOTPEmailRequest;
    fromPartial(object: DeepPartial<RemoveOTPEmailRequest>): RemoveOTPEmailRequest;
};
export declare const RemoveOTPEmailResponse: {
    encode(message: RemoveOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPEmailResponse;
    fromJSON(object: any): RemoveOTPEmailResponse;
    toJSON(message: RemoveOTPEmailResponse): unknown;
    create(base?: DeepPartial<RemoveOTPEmailResponse>): RemoveOTPEmailResponse;
    fromPartial(object: DeepPartial<RemoveOTPEmailResponse>): RemoveOTPEmailResponse;
};
export declare const CreatePasskeyRegistrationLinkRequest: {
    encode(message: CreatePasskeyRegistrationLinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePasskeyRegistrationLinkRequest;
    fromJSON(object: any): CreatePasskeyRegistrationLinkRequest;
    toJSON(message: CreatePasskeyRegistrationLinkRequest): unknown;
    create(base?: DeepPartial<CreatePasskeyRegistrationLinkRequest>): CreatePasskeyRegistrationLinkRequest;
    fromPartial(object: DeepPartial<CreatePasskeyRegistrationLinkRequest>): CreatePasskeyRegistrationLinkRequest;
};
export declare const CreatePasskeyRegistrationLinkResponse: {
    encode(message: CreatePasskeyRegistrationLinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePasskeyRegistrationLinkResponse;
    fromJSON(object: any): CreatePasskeyRegistrationLinkResponse;
    toJSON(message: CreatePasskeyRegistrationLinkResponse): unknown;
    create(base?: DeepPartial<CreatePasskeyRegistrationLinkResponse>): CreatePasskeyRegistrationLinkResponse;
    fromPartial(object: DeepPartial<CreatePasskeyRegistrationLinkResponse>): CreatePasskeyRegistrationLinkResponse;
};
export declare const StartIdentityProviderIntentRequest: {
    encode(message: StartIdentityProviderIntentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartIdentityProviderIntentRequest;
    fromJSON(object: any): StartIdentityProviderIntentRequest;
    toJSON(message: StartIdentityProviderIntentRequest): unknown;
    create(base?: DeepPartial<StartIdentityProviderIntentRequest>): StartIdentityProviderIntentRequest;
    fromPartial(object: DeepPartial<StartIdentityProviderIntentRequest>): StartIdentityProviderIntentRequest;
};
export declare const StartIdentityProviderIntentResponse: {
    encode(message: StartIdentityProviderIntentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartIdentityProviderIntentResponse;
    fromJSON(object: any): StartIdentityProviderIntentResponse;
    toJSON(message: StartIdentityProviderIntentResponse): unknown;
    create(base?: DeepPartial<StartIdentityProviderIntentResponse>): StartIdentityProviderIntentResponse;
    fromPartial(object: DeepPartial<StartIdentityProviderIntentResponse>): StartIdentityProviderIntentResponse;
};
export declare const RetrieveIdentityProviderIntentRequest: {
    encode(message: RetrieveIdentityProviderIntentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveIdentityProviderIntentRequest;
    fromJSON(object: any): RetrieveIdentityProviderIntentRequest;
    toJSON(message: RetrieveIdentityProviderIntentRequest): unknown;
    create(base?: DeepPartial<RetrieveIdentityProviderIntentRequest>): RetrieveIdentityProviderIntentRequest;
    fromPartial(object: DeepPartial<RetrieveIdentityProviderIntentRequest>): RetrieveIdentityProviderIntentRequest;
};
export declare const RetrieveIdentityProviderIntentResponse: {
    encode(message: RetrieveIdentityProviderIntentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveIdentityProviderIntentResponse;
    fromJSON(object: any): RetrieveIdentityProviderIntentResponse;
    toJSON(message: RetrieveIdentityProviderIntentResponse): unknown;
    create(base?: DeepPartial<RetrieveIdentityProviderIntentResponse>): RetrieveIdentityProviderIntentResponse;
    fromPartial(object: DeepPartial<RetrieveIdentityProviderIntentResponse>): RetrieveIdentityProviderIntentResponse;
};
export declare const AddIDPLinkRequest: {
    encode(message: AddIDPLinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPLinkRequest;
    fromJSON(object: any): AddIDPLinkRequest;
    toJSON(message: AddIDPLinkRequest): unknown;
    create(base?: DeepPartial<AddIDPLinkRequest>): AddIDPLinkRequest;
    fromPartial(object: DeepPartial<AddIDPLinkRequest>): AddIDPLinkRequest;
};
export declare const AddIDPLinkResponse: {
    encode(message: AddIDPLinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPLinkResponse;
    fromJSON(object: any): AddIDPLinkResponse;
    toJSON(message: AddIDPLinkResponse): unknown;
    create(base?: DeepPartial<AddIDPLinkResponse>): AddIDPLinkResponse;
    fromPartial(object: DeepPartial<AddIDPLinkResponse>): AddIDPLinkResponse;
};
export declare const PasswordResetRequest: {
    encode(message: PasswordResetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordResetRequest;
    fromJSON(object: any): PasswordResetRequest;
    toJSON(message: PasswordResetRequest): unknown;
    create(base?: DeepPartial<PasswordResetRequest>): PasswordResetRequest;
    fromPartial(object: DeepPartial<PasswordResetRequest>): PasswordResetRequest;
};
export declare const PasswordResetResponse: {
    encode(message: PasswordResetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordResetResponse;
    fromJSON(object: any): PasswordResetResponse;
    toJSON(message: PasswordResetResponse): unknown;
    create(base?: DeepPartial<PasswordResetResponse>): PasswordResetResponse;
    fromPartial(object: DeepPartial<PasswordResetResponse>): PasswordResetResponse;
};
export declare const SetPasswordRequest: {
    encode(message: SetPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordRequest;
    fromJSON(object: any): SetPasswordRequest;
    toJSON(message: SetPasswordRequest): unknown;
    create(base?: DeepPartial<SetPasswordRequest>): SetPasswordRequest;
    fromPartial(object: DeepPartial<SetPasswordRequest>): SetPasswordRequest;
};
export declare const SetPasswordResponse: {
    encode(message: SetPasswordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordResponse;
    fromJSON(object: any): SetPasswordResponse;
    toJSON(message: SetPasswordResponse): unknown;
    create(base?: DeepPartial<SetPasswordResponse>): SetPasswordResponse;
    fromPartial(object: DeepPartial<SetPasswordResponse>): SetPasswordResponse;
};
export declare const ListAuthenticationMethodTypesRequest: {
    encode(message: ListAuthenticationMethodTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthenticationMethodTypesRequest;
    fromJSON(object: any): ListAuthenticationMethodTypesRequest;
    toJSON(message: ListAuthenticationMethodTypesRequest): unknown;
    create(base?: DeepPartial<ListAuthenticationMethodTypesRequest>): ListAuthenticationMethodTypesRequest;
    fromPartial(object: DeepPartial<ListAuthenticationMethodTypesRequest>): ListAuthenticationMethodTypesRequest;
};
export declare const ListAuthenticationMethodTypesResponse: {
    encode(message: ListAuthenticationMethodTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthenticationMethodTypesResponse;
    fromJSON(object: any): ListAuthenticationMethodTypesResponse;
    toJSON(message: ListAuthenticationMethodTypesResponse): unknown;
    create(base?: DeepPartial<ListAuthenticationMethodTypesResponse>): ListAuthenticationMethodTypesResponse;
    fromPartial(object: DeepPartial<ListAuthenticationMethodTypesResponse>): ListAuthenticationMethodTypesResponse;
};
export type UserServiceDefinition = typeof UserServiceDefinition;
export declare const UserServiceDefinition: {
    readonly name: "UserService";
    readonly fullName: "zitadel.user.v2beta.UserService";
    readonly methods: {
        /** Create a new human user */
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
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change the email of a user */
        readonly setEmail: {
            readonly name: "SetEmail";
            readonly requestType: {
                encode(message: SetEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetEmailRequest;
                fromJSON(object: any): SetEmailRequest;
                toJSON(message: SetEmailRequest): unknown;
                create(base?: DeepPartial<SetEmailRequest>): SetEmailRequest;
                fromPartial(object: DeepPartial<SetEmailRequest>): SetEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetEmailResponse;
                fromJSON(object: any): SetEmailResponse;
                toJSON(message: SetEmailResponse): unknown;
                create(base?: DeepPartial<SetEmailResponse>): SetEmailResponse;
                fromPartial(object: DeepPartial<SetEmailResponse>): SetEmailResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Verify the email with the provided code */
        readonly verifyEmail: {
            readonly name: "VerifyEmail";
            readonly requestType: {
                encode(message: VerifyEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmailRequest;
                fromJSON(object: any): VerifyEmailRequest;
                toJSON(message: VerifyEmailRequest): unknown;
                create(base?: DeepPartial<VerifyEmailRequest>): VerifyEmailRequest;
                fromPartial(object: DeepPartial<VerifyEmailRequest>): VerifyEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmailResponse;
                fromJSON(object: any): VerifyEmailResponse;
                toJSON(message: VerifyEmailResponse): unknown;
                create(base?: DeepPartial<VerifyEmailResponse>): VerifyEmailResponse;
                fromPartial(object: DeepPartial<VerifyEmailResponse>): VerifyEmailResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change the phone of a user */
        readonly setPhone: {
            readonly name: "SetPhone";
            readonly requestType: {
                encode(message: SetPhoneRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetPhoneRequest;
                fromJSON(object: any): SetPhoneRequest;
                toJSON(message: SetPhoneRequest): unknown;
                create(base?: DeepPartial<SetPhoneRequest>): SetPhoneRequest;
                fromPartial(object: DeepPartial<SetPhoneRequest>): SetPhoneRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetPhoneResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetPhoneResponse;
                fromJSON(object: any): SetPhoneResponse;
                toJSON(message: SetPhoneResponse): unknown;
                create(base?: DeepPartial<SetPhoneResponse>): SetPhoneResponse;
                fromPartial(object: DeepPartial<SetPhoneResponse>): SetPhoneResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Verify the phone with the provided code */
        readonly verifyPhone: {
            readonly name: "VerifyPhone";
            readonly requestType: {
                encode(message: VerifyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPhoneRequest;
                fromJSON(object: any): VerifyPhoneRequest;
                toJSON(message: VerifyPhoneRequest): unknown;
                create(base?: DeepPartial<VerifyPhoneRequest>): VerifyPhoneRequest;
                fromPartial(object: DeepPartial<VerifyPhoneRequest>): VerifyPhoneRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPhoneResponse;
                fromJSON(object: any): VerifyPhoneResponse;
                toJSON(message: VerifyPhoneResponse): unknown;
                create(base?: DeepPartial<VerifyPhoneResponse>): VerifyPhoneResponse;
                fromPartial(object: DeepPartial<VerifyPhoneResponse>): VerifyPhoneResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly registerPasskey: {
            readonly name: "RegisterPasskey";
            readonly requestType: {
                encode(message: RegisterPasskeyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPasskeyRequest;
                fromJSON(object: any): RegisterPasskeyRequest;
                toJSON(message: RegisterPasskeyRequest): unknown;
                create(base?: DeepPartial<RegisterPasskeyRequest>): RegisterPasskeyRequest;
                fromPartial(object: DeepPartial<RegisterPasskeyRequest>): RegisterPasskeyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RegisterPasskeyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPasskeyResponse;
                fromJSON(object: any): RegisterPasskeyResponse;
                toJSON(message: RegisterPasskeyResponse): unknown;
                create(base?: DeepPartial<RegisterPasskeyResponse>): RegisterPasskeyResponse;
                fromPartial(object: DeepPartial<RegisterPasskeyResponse>): RegisterPasskeyResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyPasskeyRegistration: {
            readonly name: "VerifyPasskeyRegistration";
            readonly requestType: {
                encode(message: VerifyPasskeyRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPasskeyRegistrationRequest;
                fromJSON(object: any): VerifyPasskeyRegistrationRequest;
                toJSON(message: VerifyPasskeyRegistrationRequest): unknown;
                create(base?: DeepPartial<VerifyPasskeyRegistrationRequest>): VerifyPasskeyRegistrationRequest;
                fromPartial(object: DeepPartial<VerifyPasskeyRegistrationRequest>): VerifyPasskeyRegistrationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyPasskeyRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPasskeyRegistrationResponse;
                fromJSON(object: any): VerifyPasskeyRegistrationResponse;
                toJSON(message: VerifyPasskeyRegistrationResponse): unknown;
                create(base?: DeepPartial<VerifyPasskeyRegistrationResponse>): VerifyPasskeyRegistrationResponse;
                fromPartial(object: DeepPartial<VerifyPasskeyRegistrationResponse>): VerifyPasskeyRegistrationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly createPasskeyRegistrationLink: {
            readonly name: "CreatePasskeyRegistrationLink";
            readonly requestType: {
                encode(message: CreatePasskeyRegistrationLinkRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreatePasskeyRegistrationLinkRequest;
                fromJSON(object: any): CreatePasskeyRegistrationLinkRequest;
                toJSON(message: CreatePasskeyRegistrationLinkRequest): unknown;
                create(base?: DeepPartial<CreatePasskeyRegistrationLinkRequest>): CreatePasskeyRegistrationLinkRequest;
                fromPartial(object: DeepPartial<CreatePasskeyRegistrationLinkRequest>): CreatePasskeyRegistrationLinkRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreatePasskeyRegistrationLinkResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreatePasskeyRegistrationLinkResponse;
                fromJSON(object: any): CreatePasskeyRegistrationLinkResponse;
                toJSON(message: CreatePasskeyRegistrationLinkResponse): unknown;
                create(base?: DeepPartial<CreatePasskeyRegistrationLinkResponse>): CreatePasskeyRegistrationLinkResponse;
                fromPartial(object: DeepPartial<CreatePasskeyRegistrationLinkResponse>): CreatePasskeyRegistrationLinkResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly registerU2F: {
            readonly name: "RegisterU2F";
            readonly requestType: {
                encode(message: RegisterU2FRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegisterU2FRequest;
                fromJSON(object: any): RegisterU2FRequest;
                toJSON(message: RegisterU2FRequest): unknown;
                create(base?: DeepPartial<RegisterU2FRequest>): RegisterU2FRequest;
                fromPartial(object: DeepPartial<RegisterU2FRequest>): RegisterU2FRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RegisterU2FResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegisterU2FResponse;
                fromJSON(object: any): RegisterU2FResponse;
                toJSON(message: RegisterU2FResponse): unknown;
                create(base?: DeepPartial<RegisterU2FResponse>): RegisterU2FResponse;
                fromPartial(object: DeepPartial<RegisterU2FResponse>): RegisterU2FResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyU2FRegistration: {
            readonly name: "VerifyU2FRegistration";
            readonly requestType: {
                encode(message: VerifyU2FRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyU2FRegistrationRequest;
                fromJSON(object: any): VerifyU2FRegistrationRequest;
                toJSON(message: VerifyU2FRegistrationRequest): unknown;
                create(base?: DeepPartial<VerifyU2FRegistrationRequest>): VerifyU2FRegistrationRequest;
                fromPartial(object: DeepPartial<VerifyU2FRegistrationRequest>): VerifyU2FRegistrationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyU2FRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyU2FRegistrationResponse;
                fromJSON(object: any): VerifyU2FRegistrationResponse;
                toJSON(message: VerifyU2FRegistrationResponse): unknown;
                create(base?: DeepPartial<VerifyU2FRegistrationResponse>): VerifyU2FRegistrationResponse;
                fromPartial(object: DeepPartial<VerifyU2FRegistrationResponse>): VerifyU2FRegistrationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly registerTOTP: {
            readonly name: "RegisterTOTP";
            readonly requestType: {
                encode(message: RegisterTOTPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegisterTOTPRequest;
                fromJSON(object: any): RegisterTOTPRequest;
                toJSON(message: RegisterTOTPRequest): unknown;
                create(base?: DeepPartial<RegisterTOTPRequest>): RegisterTOTPRequest;
                fromPartial(object: DeepPartial<RegisterTOTPRequest>): RegisterTOTPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RegisterTOTPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RegisterTOTPResponse;
                fromJSON(object: any): RegisterTOTPResponse;
                toJSON(message: RegisterTOTPResponse): unknown;
                create(base?: DeepPartial<RegisterTOTPResponse>): RegisterTOTPResponse;
                fromPartial(object: DeepPartial<RegisterTOTPResponse>): RegisterTOTPResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyTOTPRegistration: {
            readonly name: "VerifyTOTPRegistration";
            readonly requestType: {
                encode(message: VerifyTOTPRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyTOTPRegistrationRequest;
                fromJSON(object: any): VerifyTOTPRegistrationRequest;
                toJSON(message: VerifyTOTPRegistrationRequest): unknown;
                create(base?: DeepPartial<VerifyTOTPRegistrationRequest>): VerifyTOTPRegistrationRequest;
                fromPartial(object: DeepPartial<VerifyTOTPRegistrationRequest>): VerifyTOTPRegistrationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyTOTPRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyTOTPRegistrationResponse;
                fromJSON(object: any): VerifyTOTPRegistrationResponse;
                toJSON(message: VerifyTOTPRegistrationResponse): unknown;
                create(base?: DeepPartial<VerifyTOTPRegistrationResponse>): VerifyTOTPRegistrationResponse;
                fromPartial(object: DeepPartial<VerifyTOTPRegistrationResponse>): VerifyTOTPRegistrationResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOTPSMS: {
            readonly name: "AddOTPSMS";
            readonly requestType: {
                encode(message: AddOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPSMSRequest;
                fromJSON(object: any): AddOTPSMSRequest;
                toJSON(message: AddOTPSMSRequest): unknown;
                create(base?: DeepPartial<AddOTPSMSRequest>): AddOTPSMSRequest;
                fromPartial(object: DeepPartial<AddOTPSMSRequest>): AddOTPSMSRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPSMSResponse;
                fromJSON(object: any): AddOTPSMSResponse;
                toJSON(message: AddOTPSMSResponse): unknown;
                create(base?: DeepPartial<AddOTPSMSResponse>): AddOTPSMSResponse;
                fromPartial(object: DeepPartial<AddOTPSMSResponse>): AddOTPSMSResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOTPSMS: {
            readonly name: "RemoveOTPSMS";
            readonly requestType: {
                encode(message: RemoveOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPSMSRequest;
                fromJSON(object: any): RemoveOTPSMSRequest;
                toJSON(message: RemoveOTPSMSRequest): unknown;
                create(base?: DeepPartial<RemoveOTPSMSRequest>): RemoveOTPSMSRequest;
                fromPartial(object: DeepPartial<RemoveOTPSMSRequest>): RemoveOTPSMSRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPSMSResponse;
                fromJSON(object: any): RemoveOTPSMSResponse;
                toJSON(message: RemoveOTPSMSResponse): unknown;
                create(base?: DeepPartial<RemoveOTPSMSResponse>): RemoveOTPSMSResponse;
                fromPartial(object: DeepPartial<RemoveOTPSMSResponse>): RemoveOTPSMSResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOTPEmail: {
            readonly name: "AddOTPEmail";
            readonly requestType: {
                encode(message: AddOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPEmailRequest;
                fromJSON(object: any): AddOTPEmailRequest;
                toJSON(message: AddOTPEmailRequest): unknown;
                create(base?: DeepPartial<AddOTPEmailRequest>): AddOTPEmailRequest;
                fromPartial(object: DeepPartial<AddOTPEmailRequest>): AddOTPEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPEmailResponse;
                fromJSON(object: any): AddOTPEmailResponse;
                toJSON(message: AddOTPEmailResponse): unknown;
                create(base?: DeepPartial<AddOTPEmailResponse>): AddOTPEmailResponse;
                fromPartial(object: DeepPartial<AddOTPEmailResponse>): AddOTPEmailResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOTPEmail: {
            readonly name: "RemoveOTPEmail";
            readonly requestType: {
                encode(message: RemoveOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPEmailRequest;
                fromJSON(object: any): RemoveOTPEmailRequest;
                toJSON(message: RemoveOTPEmailRequest): unknown;
                create(base?: DeepPartial<RemoveOTPEmailRequest>): RemoveOTPEmailRequest;
                fromPartial(object: DeepPartial<RemoveOTPEmailRequest>): RemoveOTPEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPEmailResponse;
                fromJSON(object: any): RemoveOTPEmailResponse;
                toJSON(message: RemoveOTPEmailResponse): unknown;
                create(base?: DeepPartial<RemoveOTPEmailResponse>): RemoveOTPEmailResponse;
                fromPartial(object: DeepPartial<RemoveOTPEmailResponse>): RemoveOTPEmailResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Start an IDP authentication (for external login, registration or linking) */
        readonly startIdentityProviderIntent: {
            readonly name: "StartIdentityProviderIntent";
            readonly requestType: {
                encode(message: StartIdentityProviderIntentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StartIdentityProviderIntentRequest;
                fromJSON(object: any): StartIdentityProviderIntentRequest;
                toJSON(message: StartIdentityProviderIntentRequest): unknown;
                create(base?: DeepPartial<StartIdentityProviderIntentRequest>): StartIdentityProviderIntentRequest;
                fromPartial(object: DeepPartial<StartIdentityProviderIntentRequest>): StartIdentityProviderIntentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: StartIdentityProviderIntentResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): StartIdentityProviderIntentResponse;
                fromJSON(object: any): StartIdentityProviderIntentResponse;
                toJSON(message: StartIdentityProviderIntentResponse): unknown;
                create(base?: DeepPartial<StartIdentityProviderIntentResponse>): StartIdentityProviderIntentResponse;
                fromPartial(object: DeepPartial<StartIdentityProviderIntentResponse>): StartIdentityProviderIntentResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly retrieveIdentityProviderIntent: {
            readonly name: "RetrieveIdentityProviderIntent";
            readonly requestType: {
                encode(message: RetrieveIdentityProviderIntentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveIdentityProviderIntentRequest;
                fromJSON(object: any): RetrieveIdentityProviderIntentRequest;
                toJSON(message: RetrieveIdentityProviderIntentRequest): unknown;
                create(base?: DeepPartial<RetrieveIdentityProviderIntentRequest>): RetrieveIdentityProviderIntentRequest;
                fromPartial(object: DeepPartial<RetrieveIdentityProviderIntentRequest>): RetrieveIdentityProviderIntentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RetrieveIdentityProviderIntentResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveIdentityProviderIntentResponse;
                fromJSON(object: any): RetrieveIdentityProviderIntentResponse;
                toJSON(message: RetrieveIdentityProviderIntentResponse): unknown;
                create(base?: DeepPartial<RetrieveIdentityProviderIntentResponse>): RetrieveIdentityProviderIntentResponse;
                fromPartial(object: DeepPartial<RetrieveIdentityProviderIntentResponse>): RetrieveIdentityProviderIntentResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Link an IDP to an existing user */
        readonly addIDPLink: {
            readonly name: "AddIDPLink";
            readonly requestType: {
                encode(message: AddIDPLinkRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPLinkRequest;
                fromJSON(object: any): AddIDPLinkRequest;
                toJSON(message: AddIDPLinkRequest): unknown;
                create(base?: DeepPartial<AddIDPLinkRequest>): AddIDPLinkRequest;
                fromPartial(object: DeepPartial<AddIDPLinkRequest>): AddIDPLinkRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddIDPLinkResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPLinkResponse;
                fromJSON(object: any): AddIDPLinkResponse;
                toJSON(message: AddIDPLinkResponse): unknown;
                create(base?: DeepPartial<AddIDPLinkResponse>): AddIDPLinkResponse;
                fromPartial(object: DeepPartial<AddIDPLinkResponse>): AddIDPLinkResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Request password reset */
        readonly passwordReset: {
            readonly name: "PasswordReset";
            readonly requestType: {
                encode(message: PasswordResetRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PasswordResetRequest;
                fromJSON(object: any): PasswordResetRequest;
                toJSON(message: PasswordResetRequest): unknown;
                create(base?: DeepPartial<PasswordResetRequest>): PasswordResetRequest;
                fromPartial(object: DeepPartial<PasswordResetRequest>): PasswordResetRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PasswordResetResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PasswordResetResponse;
                fromJSON(object: any): PasswordResetResponse;
                toJSON(message: PasswordResetResponse): unknown;
                create(base?: DeepPartial<PasswordResetResponse>): PasswordResetResponse;
                fromPartial(object: DeepPartial<PasswordResetResponse>): PasswordResetResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Change password */
        readonly setPassword: {
            readonly name: "SetPassword";
            readonly requestType: {
                encode(message: SetPasswordRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordRequest;
                fromJSON(object: any): SetPasswordRequest;
                toJSON(message: SetPasswordRequest): unknown;
                create(base?: DeepPartial<SetPasswordRequest>): SetPasswordRequest;
                fromPartial(object: DeepPartial<SetPasswordRequest>): SetPasswordRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetPasswordResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordResponse;
                fromJSON(object: any): SetPasswordResponse;
                toJSON(message: SetPasswordResponse): unknown;
                create(base?: DeepPartial<SetPasswordResponse>): SetPasswordResponse;
                fromPartial(object: DeepPartial<SetPasswordResponse>): SetPasswordResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** List all possible authentication methods of a user */
        readonly listAuthenticationMethodTypes: {
            readonly name: "ListAuthenticationMethodTypes";
            readonly requestType: {
                encode(message: ListAuthenticationMethodTypesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthenticationMethodTypesRequest;
                fromJSON(object: any): ListAuthenticationMethodTypesRequest;
                toJSON(message: ListAuthenticationMethodTypesRequest): unknown;
                create(base?: DeepPartial<ListAuthenticationMethodTypesRequest>): ListAuthenticationMethodTypesRequest;
                fromPartial(object: DeepPartial<ListAuthenticationMethodTypesRequest>): ListAuthenticationMethodTypesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListAuthenticationMethodTypesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthenticationMethodTypesResponse;
                fromJSON(object: any): ListAuthenticationMethodTypesResponse;
                toJSON(message: ListAuthenticationMethodTypesResponse): unknown;
                create(base?: DeepPartial<ListAuthenticationMethodTypesResponse>): ListAuthenticationMethodTypesResponse;
                fromPartial(object: DeepPartial<ListAuthenticationMethodTypesResponse>): ListAuthenticationMethodTypesResponse;
            };
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
    /** Create a new human user */
    addHumanUser(request: AddHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddHumanUserResponse>>;
    /** Change the email of a user */
    setEmail(request: SetEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetEmailResponse>>;
    /** Verify the email with the provided code */
    verifyEmail(request: VerifyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyEmailResponse>>;
    /** Change the phone of a user */
    setPhone(request: SetPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPhoneResponse>>;
    /** Verify the phone with the provided code */
    verifyPhone(request: VerifyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyPhoneResponse>>;
    registerPasskey(request: RegisterPasskeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterPasskeyResponse>>;
    verifyPasskeyRegistration(request: VerifyPasskeyRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyPasskeyRegistrationResponse>>;
    createPasskeyRegistrationLink(request: CreatePasskeyRegistrationLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreatePasskeyRegistrationLinkResponse>>;
    registerU2F(request: RegisterU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterU2FResponse>>;
    verifyU2FRegistration(request: VerifyU2FRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyU2FRegistrationResponse>>;
    registerTOTP(request: RegisterTOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterTOTPResponse>>;
    verifyTOTPRegistration(request: VerifyTOTPRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyTOTPRegistrationResponse>>;
    addOTPSMS(request: AddOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPSMSResponse>>;
    removeOTPSMS(request: RemoveOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPSMSResponse>>;
    addOTPEmail(request: AddOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPEmailResponse>>;
    removeOTPEmail(request: RemoveOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPEmailResponse>>;
    /** Start an IDP authentication (for external login, registration or linking) */
    startIdentityProviderIntent(request: StartIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartIdentityProviderIntentResponse>>;
    retrieveIdentityProviderIntent(request: RetrieveIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RetrieveIdentityProviderIntentResponse>>;
    /** Link an IDP to an existing user */
    addIDPLink(request: AddIDPLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIDPLinkResponse>>;
    /** Request password reset */
    passwordReset(request: PasswordResetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PasswordResetResponse>>;
    /** Change password */
    setPassword(request: SetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPasswordResponse>>;
    /** List all possible authentication methods of a user */
    listAuthenticationMethodTypes(request: ListAuthenticationMethodTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAuthenticationMethodTypesResponse>>;
}
export interface UserServiceClient<CallOptionsExt = {}> {
    /** Create a new human user */
    addHumanUser(request: DeepPartial<AddHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<AddHumanUserResponse>;
    /** Change the email of a user */
    setEmail(request: DeepPartial<SetEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetEmailResponse>;
    /** Verify the email with the provided code */
    verifyEmail(request: DeepPartial<VerifyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyEmailResponse>;
    /** Change the phone of a user */
    setPhone(request: DeepPartial<SetPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPhoneResponse>;
    /** Verify the phone with the provided code */
    verifyPhone(request: DeepPartial<VerifyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyPhoneResponse>;
    registerPasskey(request: DeepPartial<RegisterPasskeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterPasskeyResponse>;
    verifyPasskeyRegistration(request: DeepPartial<VerifyPasskeyRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyPasskeyRegistrationResponse>;
    createPasskeyRegistrationLink(request: DeepPartial<CreatePasskeyRegistrationLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<CreatePasskeyRegistrationLinkResponse>;
    registerU2F(request: DeepPartial<RegisterU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterU2FResponse>;
    verifyU2FRegistration(request: DeepPartial<VerifyU2FRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyU2FRegistrationResponse>;
    registerTOTP(request: DeepPartial<RegisterTOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterTOTPResponse>;
    verifyTOTPRegistration(request: DeepPartial<VerifyTOTPRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyTOTPRegistrationResponse>;
    addOTPSMS(request: DeepPartial<AddOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPSMSResponse>;
    removeOTPSMS(request: DeepPartial<RemoveOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPSMSResponse>;
    addOTPEmail(request: DeepPartial<AddOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPEmailResponse>;
    removeOTPEmail(request: DeepPartial<RemoveOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPEmailResponse>;
    /** Start an IDP authentication (for external login, registration or linking) */
    startIdentityProviderIntent(request: DeepPartial<StartIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<StartIdentityProviderIntentResponse>;
    retrieveIdentityProviderIntent(request: DeepPartial<RetrieveIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<RetrieveIdentityProviderIntentResponse>;
    /** Link an IDP to an existing user */
    addIDPLink(request: DeepPartial<AddIDPLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIDPLinkResponse>;
    /** Request password reset */
    passwordReset(request: DeepPartial<PasswordResetRequest>, options?: CallOptions & CallOptionsExt): Promise<PasswordResetResponse>;
    /** Change password */
    setPassword(request: DeepPartial<SetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPasswordResponse>;
    /** List all possible authentication methods of a user */
    listAuthenticationMethodTypes(request: DeepPartial<ListAuthenticationMethodTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAuthenticationMethodTypesResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
