import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ResourceOwnerType } from "./settings.js";
export declare const protobufPackage = "zitadel.settings.v2";
export interface LegalAndSupportSettings {
    tosLink: string;
    privacyPolicyLink: string;
    helpLink: string;
    supportEmail: string;
    /** resource_owner_type returns if the setting is managed on the organization or on the instance */
    resourceOwnerType: ResourceOwnerType;
    docsLink: string;
    customLink: string;
    customLinkText: string;
}
export declare const LegalAndSupportSettings: MessageFns<LegalAndSupportSettings>;
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
