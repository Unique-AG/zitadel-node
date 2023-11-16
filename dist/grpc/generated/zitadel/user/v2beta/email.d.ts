import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.user.v2beta";
export interface SetHumanEmail {
    email: string;
    sendCode?: SendEmailVerificationCode | undefined;
    returnCode?: ReturnEmailVerificationCode | undefined;
    isVerified?: boolean | undefined;
}
export interface SendEmailVerificationCode {
    urlTemplate?: string | undefined;
}
export interface ReturnEmailVerificationCode {
}
export declare const SetHumanEmail: {
    encode(message: SetHumanEmail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanEmail;
    fromJSON(object: any): SetHumanEmail;
    toJSON(message: SetHumanEmail): unknown;
    create(base?: DeepPartial<SetHumanEmail>): SetHumanEmail;
    fromPartial(object: DeepPartial<SetHumanEmail>): SetHumanEmail;
};
export declare const SendEmailVerificationCode: {
    encode(message: SendEmailVerificationCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendEmailVerificationCode;
    fromJSON(object: any): SendEmailVerificationCode;
    toJSON(message: SendEmailVerificationCode): unknown;
    create(base?: DeepPartial<SendEmailVerificationCode>): SendEmailVerificationCode;
    fromPartial(object: DeepPartial<SendEmailVerificationCode>): SendEmailVerificationCode;
};
export declare const ReturnEmailVerificationCode: {
    encode(_: ReturnEmailVerificationCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReturnEmailVerificationCode;
    fromJSON(_: any): ReturnEmailVerificationCode;
    toJSON(_: ReturnEmailVerificationCode): unknown;
    create(base?: DeepPartial<ReturnEmailVerificationCode>): ReturnEmailVerificationCode;
    fromPartial(_: DeepPartial<ReturnEmailVerificationCode>): ReturnEmailVerificationCode;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
