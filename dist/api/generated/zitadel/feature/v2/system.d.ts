import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v2/object.js";
import { FeatureFlag, ImprovedPerformance, ImprovedPerformanceFeatureFlag } from "./feature.js";
export declare const protobufPackage = "zitadel.feature.v2";
export interface SetSystemFeaturesRequest {
    loginDefaultOrg?: boolean | undefined;
    oidcTriggerIntrospectionProjections?: boolean | undefined;
    oidcLegacyIntrospection?: boolean | undefined;
    userSchema?: boolean | undefined;
    oidcTokenExchange?: boolean | undefined;
    actions?: boolean | undefined;
    improvedPerformance: ImprovedPerformance[];
    oidcSingleV1SessionTermination?: boolean | undefined;
    disableUserTokenEvent?: boolean | undefined;
    enableBackChannelLogout?: boolean | undefined;
}
export interface SetSystemFeaturesResponse {
    details: Details | undefined;
}
export interface ResetSystemFeaturesRequest {
}
export interface ResetSystemFeaturesResponse {
    details: Details | undefined;
}
export interface GetSystemFeaturesRequest {
}
export interface GetSystemFeaturesResponse {
    details: Details | undefined;
    loginDefaultOrg: FeatureFlag | undefined;
    oidcTriggerIntrospectionProjections: FeatureFlag | undefined;
    oidcLegacyIntrospection: FeatureFlag | undefined;
    userSchema: FeatureFlag | undefined;
    oidcTokenExchange: FeatureFlag | undefined;
    actions: FeatureFlag | undefined;
    improvedPerformance: ImprovedPerformanceFeatureFlag | undefined;
    oidcSingleV1SessionTermination: FeatureFlag | undefined;
    disableUserTokenEvent: FeatureFlag | undefined;
    enableBackChannelLogout: FeatureFlag | undefined;
}
export declare const SetSystemFeaturesRequest: MessageFns<SetSystemFeaturesRequest>;
export declare const SetSystemFeaturesResponse: MessageFns<SetSystemFeaturesResponse>;
export declare const ResetSystemFeaturesRequest: MessageFns<ResetSystemFeaturesRequest>;
export declare const ResetSystemFeaturesResponse: MessageFns<ResetSystemFeaturesResponse>;
export declare const GetSystemFeaturesRequest: MessageFns<GetSystemFeaturesRequest>;
export declare const GetSystemFeaturesResponse: MessageFns<GetSystemFeaturesResponse>;
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
