import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v2beta/object.js";
export declare const protobufPackage = "zitadel.feature.v2beta";
export interface SetOrganizationFeaturesRequest {
    organizationId: string;
}
export interface SetOrganizationFeaturesResponse {
    details: Details | undefined;
}
export interface ResetOrganizationFeaturesRequest {
    organizationId: string;
}
export interface ResetOrganizationFeaturesResponse {
    details: Details | undefined;
}
export interface GetOrganizationFeaturesRequest {
    organizationId: string;
    inheritance: boolean;
}
export interface GetOrganizationFeaturesResponse {
    details: Details | undefined;
}
export declare const SetOrganizationFeaturesRequest: MessageFns<SetOrganizationFeaturesRequest>;
export declare const SetOrganizationFeaturesResponse: MessageFns<SetOrganizationFeaturesResponse>;
export declare const ResetOrganizationFeaturesRequest: MessageFns<ResetOrganizationFeaturesRequest>;
export declare const ResetOrganizationFeaturesResponse: MessageFns<ResetOrganizationFeaturesResponse>;
export declare const GetOrganizationFeaturesRequest: MessageFns<GetOrganizationFeaturesRequest>;
export declare const GetOrganizationFeaturesResponse: MessageFns<GetOrganizationFeaturesResponse>;
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
