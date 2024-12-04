import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v2/object.js";
export declare const protobufPackage = "zitadel.feature.v2";
export interface SetUserFeatureRequest {
    userId: string;
}
export interface SetUserFeaturesResponse {
    details: Details | undefined;
}
export interface ResetUserFeaturesRequest {
    userId: string;
}
export interface ResetUserFeaturesResponse {
    details: Details | undefined;
}
export interface GetUserFeaturesRequest {
    userId: string;
    inheritance: boolean;
}
export interface GetUserFeaturesResponse {
    details: Details | undefined;
}
export declare const SetUserFeatureRequest: MessageFns<SetUserFeatureRequest>;
export declare const SetUserFeaturesResponse: MessageFns<SetUserFeaturesResponse>;
export declare const ResetUserFeaturesRequest: MessageFns<ResetUserFeaturesRequest>;
export declare const ResetUserFeaturesResponse: MessageFns<ResetUserFeaturesResponse>;
export declare const GetUserFeaturesRequest: MessageFns<GetUserFeaturesRequest>;
export declare const GetUserFeaturesResponse: MessageFns<GetUserFeaturesResponse>;
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
