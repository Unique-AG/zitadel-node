import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v2/object.js";
import { FeatureFlag, ImprovedPerformance, ImprovedPerformanceFeatureFlag } from "./feature.js";
export declare const protobufPackage = "zitadel.feature.v2";
export interface SetInstanceFeaturesRequest {
    loginDefaultOrg?: boolean | undefined;
    oidcTriggerIntrospectionProjections?: boolean | undefined;
    oidcLegacyIntrospection?: boolean | undefined;
    userSchema?: boolean | undefined;
    oidcTokenExchange?: boolean | undefined;
    actions?: boolean | undefined;
    improvedPerformance: ImprovedPerformance[];
    webKey?: boolean | undefined;
    debugOidcParentError?: boolean | undefined;
    oidcSingleV1SessionTermination?: boolean | undefined;
    disableUserTokenEvent?: boolean | undefined;
    enableBackChannelLogout?: boolean | undefined;
}
export interface SetInstanceFeaturesResponse {
    details: Details | undefined;
}
export interface ResetInstanceFeaturesRequest {
}
export interface ResetInstanceFeaturesResponse {
    details: Details | undefined;
}
export interface GetInstanceFeaturesRequest {
    inheritance: boolean;
}
export interface GetInstanceFeaturesResponse {
    details: Details | undefined;
    loginDefaultOrg: FeatureFlag | undefined;
    oidcTriggerIntrospectionProjections: FeatureFlag | undefined;
    oidcLegacyIntrospection: FeatureFlag | undefined;
    userSchema: FeatureFlag | undefined;
    oidcTokenExchange: FeatureFlag | undefined;
    actions: FeatureFlag | undefined;
    improvedPerformance: ImprovedPerformanceFeatureFlag | undefined;
    webKey: FeatureFlag | undefined;
    debugOidcParentError: FeatureFlag | undefined;
    oidcSingleV1SessionTermination: FeatureFlag | undefined;
    disableUserTokenEvent: FeatureFlag | undefined;
    enableBackChannelLogout: FeatureFlag | undefined;
}
export declare const SetInstanceFeaturesRequest: MessageFns<SetInstanceFeaturesRequest>;
export declare const SetInstanceFeaturesResponse: MessageFns<SetInstanceFeaturesResponse>;
export declare const ResetInstanceFeaturesRequest: MessageFns<ResetInstanceFeaturesRequest>;
export declare const ResetInstanceFeaturesResponse: MessageFns<ResetInstanceFeaturesResponse>;
export declare const GetInstanceFeaturesRequest: MessageFns<GetInstanceFeaturesRequest>;
export declare const GetInstanceFeaturesResponse: MessageFns<GetInstanceFeaturesResponse>;
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
