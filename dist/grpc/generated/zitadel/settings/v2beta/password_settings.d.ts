import Long from "long";
import _m0 from "protobufjs/minimal";
import { ResourceOwnerType } from "./settings";
export declare const protobufPackage = "zitadel.settings.v2beta";
export interface PasswordComplexitySettings {
    minLength: Long;
    requiresUppercase: boolean;
    requiresLowercase: boolean;
    requiresNumber: boolean;
    requiresSymbol: boolean;
    /** resource_owner_type returns if the settings is managed on the organization or on the instance */
    resourceOwnerType: ResourceOwnerType;
}
export declare const PasswordComplexitySettings: {
    encode(message: PasswordComplexitySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordComplexitySettings;
    fromJSON(object: any): PasswordComplexitySettings;
    toJSON(message: PasswordComplexitySettings): unknown;
    create(base?: DeepPartial<PasswordComplexitySettings>): PasswordComplexitySettings;
    fromPartial(object: DeepPartial<PasswordComplexitySettings>): PasswordComplexitySettings;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
