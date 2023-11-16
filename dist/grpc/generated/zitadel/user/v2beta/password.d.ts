import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.user.v2beta";
export declare enum NotificationType {
    NOTIFICATION_TYPE_Unspecified = 0,
    NOTIFICATION_TYPE_Email = 1,
    NOTIFICATION_TYPE_SMS = 2,
    UNRECOGNIZED = -1
}
export declare function notificationTypeFromJSON(object: any): NotificationType;
export declare function notificationTypeToJSON(object: NotificationType): string;
export interface Password {
    password: string;
    changeRequired: boolean;
}
export interface HashedPassword {
    hash: string;
    changeRequired: boolean;
}
export interface SendPasswordResetLink {
    notificationType: NotificationType;
    urlTemplate?: string | undefined;
}
export interface ReturnPasswordResetCode {
}
export declare const Password: {
    encode(message: Password, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Password;
    fromJSON(object: any): Password;
    toJSON(message: Password): unknown;
    create(base?: DeepPartial<Password>): Password;
    fromPartial(object: DeepPartial<Password>): Password;
};
export declare const HashedPassword: {
    encode(message: HashedPassword, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HashedPassword;
    fromJSON(object: any): HashedPassword;
    toJSON(message: HashedPassword): unknown;
    create(base?: DeepPartial<HashedPassword>): HashedPassword;
    fromPartial(object: DeepPartial<HashedPassword>): HashedPassword;
};
export declare const SendPasswordResetLink: {
    encode(message: SendPasswordResetLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendPasswordResetLink;
    fromJSON(object: any): SendPasswordResetLink;
    toJSON(message: SendPasswordResetLink): unknown;
    create(base?: DeepPartial<SendPasswordResetLink>): SendPasswordResetLink;
    fromPartial(object: DeepPartial<SendPasswordResetLink>): SendPasswordResetLink;
};
export declare const ReturnPasswordResetCode: {
    encode(_: ReturnPasswordResetCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReturnPasswordResetCode;
    fromJSON(_: any): ReturnPasswordResetCode;
    toJSON(_: ReturnPasswordResetCode): unknown;
    create(base?: DeepPartial<ReturnPasswordResetCode>): ReturnPasswordResetCode;
    fromPartial(_: DeepPartial<ReturnPasswordResetCode>): ReturnPasswordResetCode;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
