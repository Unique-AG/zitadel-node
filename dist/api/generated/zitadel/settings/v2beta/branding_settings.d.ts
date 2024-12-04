import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ResourceOwnerType } from "./settings.js";
export declare const protobufPackage = "zitadel.settings.v2beta";
export declare enum ThemeMode {
    THEME_MODE_UNSPECIFIED = 0,
    THEME_MODE_AUTO = 1,
    THEME_MODE_LIGHT = 2,
    THEME_MODE_DARK = 3,
    UNRECOGNIZED = -1
}
export declare function themeModeFromJSON(object: any): ThemeMode;
export declare function themeModeToJSON(object: ThemeMode): string;
export interface BrandingSettings {
    lightTheme: Theme | undefined;
    darkTheme: Theme | undefined;
    fontUrl: string;
    /** hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set */
    hideLoginNameSuffix: boolean;
    disableWatermark: boolean;
    /** resource_owner_type returns if the setting is managed on the organization or on the instance */
    resourceOwnerType: ResourceOwnerType;
    themeMode: ThemeMode;
}
export interface Theme {
    /** hex value for primary color */
    primaryColor: string;
    /** hex value for background color */
    backgroundColor: string;
    /** hex value for warning color */
    warnColor: string;
    /** hex value for font color */
    fontColor: string;
    /** url where the logo is served */
    logoUrl: string;
    /** url where the icon is served */
    iconUrl: string;
}
export declare const BrandingSettings: MessageFns<BrandingSettings>;
export declare const Theme: MessageFns<Theme>;
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
