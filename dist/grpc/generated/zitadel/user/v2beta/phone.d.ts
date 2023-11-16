import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.user.v2beta";
export interface SetHumanPhone {
    phone: string;
    sendCode?: SendPhoneVerificationCode | undefined;
    returnCode?: ReturnPhoneVerificationCode | undefined;
    isVerified?: boolean | undefined;
}
export interface SendPhoneVerificationCode {
}
export interface ReturnPhoneVerificationCode {
}
export declare const SetHumanPhone: {
    encode(message: SetHumanPhone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanPhone;
    fromJSON(object: any): SetHumanPhone;
    toJSON(message: SetHumanPhone): unknown;
    create(base?: DeepPartial<SetHumanPhone>): SetHumanPhone;
    fromPartial(object: DeepPartial<SetHumanPhone>): SetHumanPhone;
};
export declare const SendPhoneVerificationCode: {
    encode(_: SendPhoneVerificationCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendPhoneVerificationCode;
    fromJSON(_: any): SendPhoneVerificationCode;
    toJSON(_: SendPhoneVerificationCode): unknown;
    create(base?: DeepPartial<SendPhoneVerificationCode>): SendPhoneVerificationCode;
    fromPartial(_: DeepPartial<SendPhoneVerificationCode>): SendPhoneVerificationCode;
};
export declare const ReturnPhoneVerificationCode: {
    encode(_: ReturnPhoneVerificationCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReturnPhoneVerificationCode;
    fromJSON(_: any): ReturnPhoneVerificationCode;
    toJSON(_: ReturnPhoneVerificationCode): unknown;
    create(base?: DeepPartial<ReturnPhoneVerificationCode>): ReturnPhoneVerificationCode;
    fromPartial(_: DeepPartial<ReturnPhoneVerificationCode>): ReturnPhoneVerificationCode;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
