import Long from "long";
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";
export declare const protobufPackage = "zitadel.org.v1";
export declare enum OrgState {
    ORG_STATE_UNSPECIFIED = 0,
    ORG_STATE_ACTIVE = 1,
    ORG_STATE_INACTIVE = 2,
    ORG_STATE_REMOVED = 3,
    UNRECOGNIZED = -1
}
export declare function orgStateFromJSON(object: any): OrgState;
export declare function orgStateToJSON(object: OrgState): string;
export declare enum DomainValidationType {
    DOMAIN_VALIDATION_TYPE_UNSPECIFIED = 0,
    DOMAIN_VALIDATION_TYPE_HTTP = 1,
    DOMAIN_VALIDATION_TYPE_DNS = 2,
    UNRECOGNIZED = -1
}
export declare function domainValidationTypeFromJSON(object: any): DomainValidationType;
export declare function domainValidationTypeToJSON(object: DomainValidationType): string;
export declare enum OrgFieldName {
    ORG_FIELD_NAME_UNSPECIFIED = 0,
    ORG_FIELD_NAME_NAME = 1,
    UNRECOGNIZED = -1
}
export declare function orgFieldNameFromJSON(object: any): OrgFieldName;
export declare function orgFieldNameToJSON(object: OrgFieldName): string;
export interface Org {
    id: string;
    details: ObjectDetails | undefined;
    state: OrgState;
    name: string;
    primaryDomain: string;
}
export interface Domain {
    orgId: string;
    details: ObjectDetails | undefined;
    domainName: string;
    isVerified: boolean;
    isPrimary: boolean;
    validationType: DomainValidationType;
}
export interface OrgQuery {
    nameQuery?: OrgNameQuery | undefined;
    domainQuery?: OrgDomainQuery | undefined;
    stateQuery?: OrgStateQuery | undefined;
}
export interface OrgNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface OrgDomainQuery {
    domain: string;
    method: TextQueryMethod;
}
export interface OrgStateQuery {
    state: OrgState;
}
export interface DomainSearchQuery {
    domainNameQuery?: DomainNameQuery | undefined;
}
export interface DomainNameQuery {
    name: string;
    method: TextQueryMethod;
}
export declare const Org: {
    encode(message: Org, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Org;
    fromJSON(object: any): Org;
    toJSON(message: Org): unknown;
    create(base?: DeepPartial<Org>): Org;
    fromPartial(object: DeepPartial<Org>): Org;
};
export declare const Domain: {
    encode(message: Domain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Domain;
    fromJSON(object: any): Domain;
    toJSON(message: Domain): unknown;
    create(base?: DeepPartial<Domain>): Domain;
    fromPartial(object: DeepPartial<Domain>): Domain;
};
export declare const OrgQuery: {
    encode(message: OrgQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrgQuery;
    fromJSON(object: any): OrgQuery;
    toJSON(message: OrgQuery): unknown;
    create(base?: DeepPartial<OrgQuery>): OrgQuery;
    fromPartial(object: DeepPartial<OrgQuery>): OrgQuery;
};
export declare const OrgNameQuery: {
    encode(message: OrgNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrgNameQuery;
    fromJSON(object: any): OrgNameQuery;
    toJSON(message: OrgNameQuery): unknown;
    create(base?: DeepPartial<OrgNameQuery>): OrgNameQuery;
    fromPartial(object: DeepPartial<OrgNameQuery>): OrgNameQuery;
};
export declare const OrgDomainQuery: {
    encode(message: OrgDomainQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrgDomainQuery;
    fromJSON(object: any): OrgDomainQuery;
    toJSON(message: OrgDomainQuery): unknown;
    create(base?: DeepPartial<OrgDomainQuery>): OrgDomainQuery;
    fromPartial(object: DeepPartial<OrgDomainQuery>): OrgDomainQuery;
};
export declare const OrgStateQuery: {
    encode(message: OrgStateQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrgStateQuery;
    fromJSON(object: any): OrgStateQuery;
    toJSON(message: OrgStateQuery): unknown;
    create(base?: DeepPartial<OrgStateQuery>): OrgStateQuery;
    fromPartial(object: DeepPartial<OrgStateQuery>): OrgStateQuery;
};
export declare const DomainSearchQuery: {
    encode(message: DomainSearchQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainSearchQuery;
    fromJSON(object: any): DomainSearchQuery;
    toJSON(message: DomainSearchQuery): unknown;
    create(base?: DeepPartial<DomainSearchQuery>): DomainSearchQuery;
    fromPartial(object: DeepPartial<DomainSearchQuery>): DomainSearchQuery;
};
export declare const DomainNameQuery: {
    encode(message: DomainNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainNameQuery;
    fromJSON(object: any): DomainNameQuery;
    toJSON(message: DomainNameQuery): unknown;
    create(base?: DeepPartial<DomainNameQuery>): DomainNameQuery;
    fromPartial(object: DeepPartial<DomainNameQuery>): DomainNameQuery;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
