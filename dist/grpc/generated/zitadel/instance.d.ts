import Long from "long";
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";
export declare const protobufPackage = "zitadel.instance.v1";
export declare enum State {
    STATE_UNSPECIFIED = 0,
    STATE_CREATING = 1,
    STATE_RUNNING = 2,
    STATE_STOPPING = 3,
    STATE_STOPPED = 4,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export declare enum FieldName {
    FIELD_NAME_UNSPECIFIED = 0,
    FIELD_NAME_ID = 1,
    FIELD_NAME_NAME = 2,
    FIELD_NAME_CREATION_DATE = 3,
    UNRECOGNIZED = -1
}
export declare function fieldNameFromJSON(object: any): FieldName;
export declare function fieldNameToJSON(object: FieldName): string;
export declare enum DomainFieldName {
    DOMAIN_FIELD_NAME_UNSPECIFIED = 0,
    DOMAIN_FIELD_NAME_DOMAIN = 1,
    DOMAIN_FIELD_NAME_PRIMARY = 2,
    DOMAIN_FIELD_NAME_GENERATED = 3,
    DOMAIN_FIELD_NAME_CREATION_DATE = 4,
    UNRECOGNIZED = -1
}
export declare function domainFieldNameFromJSON(object: any): DomainFieldName;
export declare function domainFieldNameToJSON(object: DomainFieldName): string;
export interface Instance {
    id: string;
    details: ObjectDetails | undefined;
    state: State;
    name: string;
    version: string;
    domains: Domain[];
}
export interface InstanceDetail {
    id: string;
    details: ObjectDetails | undefined;
    state: State;
    name: string;
    version: string;
    domains: Domain[];
}
export interface Query {
    idQuery?: IdsQuery | undefined;
    domainQuery?: DomainsQuery | undefined;
}
/** IdQuery always equals */
export interface IdsQuery {
    ids: string[];
}
export interface DomainsQuery {
    domains: string[];
}
export interface Domain {
    details: ObjectDetails | undefined;
    domain: string;
    primary: boolean;
    generated: boolean;
}
export interface DomainSearchQuery {
    domainQuery?: DomainQuery | undefined;
    generatedQuery?: DomainGeneratedQuery | undefined;
    primaryQuery?: DomainPrimaryQuery | undefined;
}
export interface DomainQuery {
    domain: string;
    method: TextQueryMethod;
}
/** DomainGeneratedQuery is always equals */
export interface DomainGeneratedQuery {
    generated: boolean;
}
/** DomainPrimaryQuery is always equals */
export interface DomainPrimaryQuery {
    primary: boolean;
}
export declare const Instance: {
    encode(message: Instance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Instance;
    fromJSON(object: any): Instance;
    toJSON(message: Instance): unknown;
    create(base?: DeepPartial<Instance>): Instance;
    fromPartial(object: DeepPartial<Instance>): Instance;
};
export declare const InstanceDetail: {
    encode(message: InstanceDetail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstanceDetail;
    fromJSON(object: any): InstanceDetail;
    toJSON(message: InstanceDetail): unknown;
    create(base?: DeepPartial<InstanceDetail>): InstanceDetail;
    fromPartial(object: DeepPartial<InstanceDetail>): InstanceDetail;
};
export declare const Query: {
    encode(message: Query, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Query;
    fromJSON(object: any): Query;
    toJSON(message: Query): unknown;
    create(base?: DeepPartial<Query>): Query;
    fromPartial(object: DeepPartial<Query>): Query;
};
export declare const IdsQuery: {
    encode(message: IdsQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdsQuery;
    fromJSON(object: any): IdsQuery;
    toJSON(message: IdsQuery): unknown;
    create(base?: DeepPartial<IdsQuery>): IdsQuery;
    fromPartial(object: DeepPartial<IdsQuery>): IdsQuery;
};
export declare const DomainsQuery: {
    encode(message: DomainsQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainsQuery;
    fromJSON(object: any): DomainsQuery;
    toJSON(message: DomainsQuery): unknown;
    create(base?: DeepPartial<DomainsQuery>): DomainsQuery;
    fromPartial(object: DeepPartial<DomainsQuery>): DomainsQuery;
};
export declare const Domain: {
    encode(message: Domain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Domain;
    fromJSON(object: any): Domain;
    toJSON(message: Domain): unknown;
    create(base?: DeepPartial<Domain>): Domain;
    fromPartial(object: DeepPartial<Domain>): Domain;
};
export declare const DomainSearchQuery: {
    encode(message: DomainSearchQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainSearchQuery;
    fromJSON(object: any): DomainSearchQuery;
    toJSON(message: DomainSearchQuery): unknown;
    create(base?: DeepPartial<DomainSearchQuery>): DomainSearchQuery;
    fromPartial(object: DeepPartial<DomainSearchQuery>): DomainSearchQuery;
};
export declare const DomainQuery: {
    encode(message: DomainQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainQuery;
    fromJSON(object: any): DomainQuery;
    toJSON(message: DomainQuery): unknown;
    create(base?: DeepPartial<DomainQuery>): DomainQuery;
    fromPartial(object: DeepPartial<DomainQuery>): DomainQuery;
};
export declare const DomainGeneratedQuery: {
    encode(message: DomainGeneratedQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainGeneratedQuery;
    fromJSON(object: any): DomainGeneratedQuery;
    toJSON(message: DomainGeneratedQuery): unknown;
    create(base?: DeepPartial<DomainGeneratedQuery>): DomainGeneratedQuery;
    fromPartial(object: DeepPartial<DomainGeneratedQuery>): DomainGeneratedQuery;
};
export declare const DomainPrimaryQuery: {
    encode(message: DomainPrimaryQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainPrimaryQuery;
    fromJSON(object: any): DomainPrimaryQuery;
    toJSON(message: DomainPrimaryQuery): unknown;
    create(base?: DeepPartial<DomainPrimaryQuery>): DomainPrimaryQuery;
    fromPartial(object: DeepPartial<DomainPrimaryQuery>): DomainPrimaryQuery;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
