import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
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
