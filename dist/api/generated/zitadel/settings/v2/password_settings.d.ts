import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ResourceOwnerType } from "./settings.js";
export declare const protobufPackage = "zitadel.settings.v2";
export interface PasswordComplexitySettings {
    minLength: Long;
    requiresUppercase: boolean;
    requiresLowercase: boolean;
    requiresNumber: boolean;
    requiresSymbol: boolean;
    /** resource_owner_type returns if the settings is managed on the organization or on the instance */
    resourceOwnerType: ResourceOwnerType;
}
export interface PasswordExpirySettings {
    /** Amount of days after which a password will expire. The user will be forced to change the password on the following authentication. */
    maxAgeDays: Long;
    /** Amount of days after which the user should be notified of the upcoming expiry. ZITADEL will not notify the user. */
    expireWarnDays: Long;
    /** resource_owner_type returns if the settings is managed on the organization or on the instance */
    resourceOwnerType: ResourceOwnerType;
}
export declare const PasswordComplexitySettings: MessageFns<PasswordComplexitySettings>;
export declare const PasswordExpirySettings: MessageFns<PasswordExpirySettings>;
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
