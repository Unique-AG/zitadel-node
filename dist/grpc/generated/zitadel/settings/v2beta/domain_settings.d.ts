import Long from "long";
import _m0 from "protobufjs/minimal";
import { ResourceOwnerType } from "./settings";
export declare const protobufPackage = "zitadel.settings.v2beta";
export interface DomainSettings {
    loginNameIncludesDomain: boolean;
    requireOrgDomainVerification: boolean;
    smtpSenderAddressMatchesInstanceDomain: boolean;
    /** resource_owner_type returns if the setting is managed on the organization or on the instance */
    resourceOwnerType: ResourceOwnerType;
}
export declare const DomainSettings: {
    encode(message: DomainSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainSettings;
    fromJSON(object: any): DomainSettings;
    toJSON(message: DomainSettings): unknown;
    create(base?: DeepPartial<DomainSettings>): DomainSettings;
    fromPartial(object: DeepPartial<DomainSettings>): DomainSettings;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
