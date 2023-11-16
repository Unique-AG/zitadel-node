import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.session.v2beta";
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
    webAuthN?: RequestChallenges_WebAuthN | undefined;
    otpSms?: RequestChallenges_OTPSMS | undefined;
    otpEmail?: RequestChallenges_OTPEmail | undefined;
}
export interface RequestChallenges_WebAuthN {
    domain: string;
    userVerificationRequirement: UserVerificationRequirement;
}
export interface RequestChallenges_OTPSMS {
    returnCode: boolean;
}
export interface RequestChallenges_OTPEmail {
    sendCode?: RequestChallenges_OTPEmail_SendCode | undefined;
    returnCode?: RequestChallenges_OTPEmail_ReturnCode | undefined;
}
export interface RequestChallenges_OTPEmail_SendCode {
    urlTemplate?: string | undefined;
}
export interface RequestChallenges_OTPEmail_ReturnCode {
}
export interface Challenges {
    webAuthN?: Challenges_WebAuthN | undefined;
    otpSms?: string | undefined;
    otpEmail?: string | undefined;
}
export interface Challenges_WebAuthN {
    publicKeyCredentialRequestOptions: {
        [key: string]: any;
    } | undefined;
}
export declare const RequestChallenges: {
    encode(message: RequestChallenges, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestChallenges;
    fromJSON(object: any): RequestChallenges;
    toJSON(message: RequestChallenges): unknown;
    create(base?: DeepPartial<RequestChallenges>): RequestChallenges;
    fromPartial(object: DeepPartial<RequestChallenges>): RequestChallenges;
};
export declare const RequestChallenges_WebAuthN: {
    encode(message: RequestChallenges_WebAuthN, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestChallenges_WebAuthN;
    fromJSON(object: any): RequestChallenges_WebAuthN;
    toJSON(message: RequestChallenges_WebAuthN): unknown;
    create(base?: DeepPartial<RequestChallenges_WebAuthN>): RequestChallenges_WebAuthN;
    fromPartial(object: DeepPartial<RequestChallenges_WebAuthN>): RequestChallenges_WebAuthN;
};
export declare const RequestChallenges_OTPSMS: {
    encode(message: RequestChallenges_OTPSMS, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestChallenges_OTPSMS;
    fromJSON(object: any): RequestChallenges_OTPSMS;
    toJSON(message: RequestChallenges_OTPSMS): unknown;
    create(base?: DeepPartial<RequestChallenges_OTPSMS>): RequestChallenges_OTPSMS;
    fromPartial(object: DeepPartial<RequestChallenges_OTPSMS>): RequestChallenges_OTPSMS;
};
export declare const RequestChallenges_OTPEmail: {
    encode(message: RequestChallenges_OTPEmail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestChallenges_OTPEmail;
    fromJSON(object: any): RequestChallenges_OTPEmail;
    toJSON(message: RequestChallenges_OTPEmail): unknown;
    create(base?: DeepPartial<RequestChallenges_OTPEmail>): RequestChallenges_OTPEmail;
    fromPartial(object: DeepPartial<RequestChallenges_OTPEmail>): RequestChallenges_OTPEmail;
};
export declare const RequestChallenges_OTPEmail_SendCode: {
    encode(message: RequestChallenges_OTPEmail_SendCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestChallenges_OTPEmail_SendCode;
    fromJSON(object: any): RequestChallenges_OTPEmail_SendCode;
    toJSON(message: RequestChallenges_OTPEmail_SendCode): unknown;
    create(base?: DeepPartial<RequestChallenges_OTPEmail_SendCode>): RequestChallenges_OTPEmail_SendCode;
    fromPartial(object: DeepPartial<RequestChallenges_OTPEmail_SendCode>): RequestChallenges_OTPEmail_SendCode;
};
export declare const RequestChallenges_OTPEmail_ReturnCode: {
    encode(_: RequestChallenges_OTPEmail_ReturnCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestChallenges_OTPEmail_ReturnCode;
    fromJSON(_: any): RequestChallenges_OTPEmail_ReturnCode;
    toJSON(_: RequestChallenges_OTPEmail_ReturnCode): unknown;
    create(base?: DeepPartial<RequestChallenges_OTPEmail_ReturnCode>): RequestChallenges_OTPEmail_ReturnCode;
    fromPartial(_: DeepPartial<RequestChallenges_OTPEmail_ReturnCode>): RequestChallenges_OTPEmail_ReturnCode;
};
export declare const Challenges: {
    encode(message: Challenges, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Challenges;
    fromJSON(object: any): Challenges;
    toJSON(message: Challenges): unknown;
    create(base?: DeepPartial<Challenges>): Challenges;
    fromPartial(object: DeepPartial<Challenges>): Challenges;
};
export declare const Challenges_WebAuthN: {
    encode(message: Challenges_WebAuthN, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Challenges_WebAuthN;
    fromJSON(object: any): Challenges_WebAuthN;
    toJSON(message: Challenges_WebAuthN): unknown;
    create(base?: DeepPartial<Challenges_WebAuthN>): Challenges_WebAuthN;
    fromPartial(object: DeepPartial<Challenges_WebAuthN>): Challenges_WebAuthN;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
