import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.user.v2beta";
export declare enum PasskeyAuthenticator {
    PASSKEY_AUTHENTICATOR_UNSPECIFIED = 0,
    PASSKEY_AUTHENTICATOR_PLATFORM = 1,
    PASSKEY_AUTHENTICATOR_CROSS_PLATFORM = 2,
    UNRECOGNIZED = -1
}
export declare function passkeyAuthenticatorFromJSON(object: any): PasskeyAuthenticator;
export declare function passkeyAuthenticatorToJSON(object: PasskeyAuthenticator): string;
export interface SendPasskeyRegistrationLink {
    urlTemplate?: string | undefined;
}
export interface ReturnPasskeyRegistrationCode {
}
export interface PasskeyRegistrationCode {
    id: string;
    code: string;
}
export declare const SendPasskeyRegistrationLink: {
    encode(message: SendPasskeyRegistrationLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendPasskeyRegistrationLink;
    fromJSON(object: any): SendPasskeyRegistrationLink;
    toJSON(message: SendPasskeyRegistrationLink): unknown;
    create(base?: DeepPartial<SendPasskeyRegistrationLink>): SendPasskeyRegistrationLink;
    fromPartial(object: DeepPartial<SendPasskeyRegistrationLink>): SendPasskeyRegistrationLink;
};
export declare const ReturnPasskeyRegistrationCode: {
    encode(_: ReturnPasskeyRegistrationCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReturnPasskeyRegistrationCode;
    fromJSON(_: any): ReturnPasskeyRegistrationCode;
    toJSON(_: ReturnPasskeyRegistrationCode): unknown;
    create(base?: DeepPartial<ReturnPasskeyRegistrationCode>): ReturnPasskeyRegistrationCode;
    fromPartial(_: DeepPartial<ReturnPasskeyRegistrationCode>): ReturnPasskeyRegistrationCode;
};
export declare const PasskeyRegistrationCode: {
    encode(message: PasskeyRegistrationCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasskeyRegistrationCode;
    fromJSON(object: any): PasskeyRegistrationCode;
    toJSON(message: PasskeyRegistrationCode): unknown;
    create(base?: DeepPartial<PasskeyRegistrationCode>): PasskeyRegistrationCode;
    fromPartial(object: DeepPartial<PasskeyRegistrationCode>): PasskeyRegistrationCode;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
