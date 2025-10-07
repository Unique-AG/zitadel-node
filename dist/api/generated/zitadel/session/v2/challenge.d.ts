import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.session.v2";
export declare enum UserVerificationRequirement {
    USER_VERIFICATION_REQUIREMENT_UNSPECIFIED = 0,
    USER_VERIFICATION_REQUIREMENT_REQUIRED = 1,
    USER_VERIFICATION_REQUIREMENT_PREFERRED = 2,
    USER_VERIFICATION_REQUIREMENT_DISCOURAGED = 3,
    UNRECOGNIZED = -1
}
export declare function userVerificationRequirementFromJSON(object: any): UserVerificationRequirement;
export declare function userVerificationRequirementToJSON(object: UserVerificationRequirement): string;
export interface RequestChallenges {
    /**
     * WebAuthN requests a challenge to be used in the WebAuthN authentication ceremony.
     * They can be used for both passkey and U2F authentication.
     * They're required for a webauthn check at the SetSession endpoint.
     */
    webAuthN?: RequestChallenges_WebAuthN | undefined;
    /**
     * OTPSMS requests a code to be sent via SMS to the user's primary phone.
     * It is required for an OTP check at the SetSession endpoint.
     */
    otpSms?: RequestChallenges_OTPSMS | undefined;
    /**
     * OTPEmail requests a code to be sent via email to the user's primary email address.
     * It is required for an OTP check at the SetSession endpoint.
     */
    otpEmail?: RequestChallenges_OTPEmail | undefined;
}
export interface RequestChallenges_WebAuthN {
    /**
     * The domain on which the session was created. Will be used in the WebAuthN challenge.
     * It must be either the exact domain or a top-level domain of the origin of the request.
     * For example if the request is coming from "login.example.com", the domain can be
     * "login.example.com" or "example.com", but not "other.com" or "sub.login.example.com".
     * See also: https://www.w3.org/TR/webauthn/#relying-party-identifier
     */
    domain: string;
    /**
     * User verification that is required during validation.
     * When set to `USER_VERIFICATION_REQUIREMENT_REQUIRED` the behaviour is for passkey authentication.
     * Other values will mean U2F.
     * See also: https://www.w3.org/TR/webauthn/#enum-userVerificationRequirement
     * If either the value is set to USER_VERIFICATION_REQUIREMENT_REQUIRED or the user verification
     * is passed as part of the authentication ceremony, the user_verified flag will be set in the resulting webauthn factor.
     */
    userVerificationRequirement: UserVerificationRequirement;
}
export interface RequestChallenges_OTPSMS {
    /**
     * Request the code to be returned instead of sending an SMS.
     * This is useful for testing or in case you want to send the code yourself.
     */
    returnCode: boolean;
}
export interface RequestChallenges_OTPEmail {
    sendCode?: RequestChallenges_OTPEmail_SendCode | undefined;
    returnCode?: RequestChallenges_OTPEmail_ReturnCode | undefined;
}
export interface RequestChallenges_OTPEmail_SendCode {
    /**
     * Optionally set a url_template, which will be used in the mail sent by ZITADEL to guide the user to your verification page.
     * If no template is set, the default ZITADEL url will be used.
     *
     * The following placeholders can be used: Code, UserID, LoginName, DisplayName, PreferredLanguage, SessionID
     */
    urlTemplate?: string | undefined;
}
export interface RequestChallenges_OTPEmail_ReturnCode {
}
export interface Challenges {
    webAuthN?: Challenges_WebAuthN | undefined;
    otpSms?: string | undefined;
    otpEmail?: string | undefined;
}
/**
 * WebAuthN contains the options for the Assertion Generation (dictionary PublicKeyCredentialRequestOptions).
 * Generated helper methods transform the field to JSON, for use in a WebauthN client.
 * See also: https://www.w3.org/TR/webauthn/#dictdef-publickeycredentialrequestoptions
 */
export interface Challenges_WebAuthN {
    publicKeyCredentialRequestOptions: {
        [key: string]: any;
    } | undefined;
}
export declare const RequestChallenges: MessageFns<RequestChallenges>;
export declare const RequestChallenges_WebAuthN: MessageFns<RequestChallenges_WebAuthN>;
export declare const RequestChallenges_OTPSMS: MessageFns<RequestChallenges_OTPSMS>;
export declare const RequestChallenges_OTPEmail: MessageFns<RequestChallenges_OTPEmail>;
export declare const RequestChallenges_OTPEmail_SendCode: MessageFns<RequestChallenges_OTPEmail_SendCode>;
export declare const RequestChallenges_OTPEmail_ReturnCode: MessageFns<RequestChallenges_OTPEmail_ReturnCode>;
export declare const Challenges: MessageFns<Challenges>;
export declare const Challenges_WebAuthN: MessageFns<Challenges_WebAuthN>;
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
