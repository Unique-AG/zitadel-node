import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextQueryMethod } from "../../object/v2beta/object.js";
export declare const protobufPackage = "zitadel.org.v2beta";
export declare enum OrgState {
    ORG_STATE_UNSPECIFIED = 0,
    ORG_STATE_ACTIVE = 1,
    ORG_STATE_INACTIVE = 2,
    ORG_STATE_REMOVED = 3,
    UNRECOGNIZED = -1
}
export declare function orgStateFromJSON(object: any): OrgState;
export declare function orgStateToJSON(object: OrgState): string;
export declare enum OrgFieldName {
    ORG_FIELD_NAME_UNSPECIFIED = 0,
    ORG_FIELD_NAME_NAME = 1,
    ORG_FIELD_NAME_CREATION_DATE = 2,
    UNRECOGNIZED = -1
}
export declare function orgFieldNameFromJSON(object: any): OrgFieldName;
export declare function orgFieldNameToJSON(object: OrgFieldName): string;
/** from proto/zitadel/org.proto */
export declare enum DomainValidationType {
    DOMAIN_VALIDATION_TYPE_UNSPECIFIED = 0,
    DOMAIN_VALIDATION_TYPE_HTTP = 1,
    DOMAIN_VALIDATION_TYPE_DNS = 2,
    UNRECOGNIZED = -1
}
export declare function domainValidationTypeFromJSON(object: any): DomainValidationType;
export declare function domainValidationTypeToJSON(object: DomainValidationType): string;
export interface Organization {
    /** Unique identifier of the organization. */
    id: string;
    /** The timestamp of the organization was created. */
    creationDate: Date | undefined;
    /** The timestamp of the verification of the organization domain. */
    changedDate: Date | undefined;
    /** Current state of the organization, for example active, inactive and deleted. */
    state: OrgState;
    /** Name of the organization. */
    name: string;
    /** Primary domain used in the organization. */
    primaryDomain: string;
}
export interface OrganizationSearchFilter {
    nameFilter?: OrgNameFilter | undefined;
    domainFilter?: OrgDomainFilter | undefined;
    stateFilter?: OrgStateFilter | undefined;
    idFilter?: OrgIDFilter | undefined;
}
export interface OrgNameFilter {
    /** Organization name. */
    name: string;
    /** Defines which text equality method is used. */
    method: TextQueryMethod;
}
export interface OrgDomainFilter {
    /** The domain. */
    domain: string;
    /** Defines which text equality method is used. */
    method: TextQueryMethod;
}
export interface OrgStateFilter {
    /** Current state of the organization. */
    state: OrgState;
}
export interface OrgIDFilter {
    /** The Organization id. */
    id: string;
}
/** from proto/zitadel/org.proto */
export interface DomainSearchFilter {
    domainNameFilter?: DomainNameFilter | undefined;
}
/** from proto/zitadel/org.proto */
export interface DomainNameFilter {
    /** The domain. */
    name: string;
    /** Defines which text equality method is used. */
    method: TextQueryMethod;
}
/** from proto/zitadel/org.proto */
export interface Domain {
    /** The Organization id. */
    organizationId: string;
    /** The domain name. */
    domainName: string;
    /** Defines if the domain is verified. */
    isVerified: boolean;
    /** Defines if the domain is the primary domain. */
    isPrimary: boolean;
    /** Defines the protocol the domain was validated with. */
    validationType: DomainValidationType;
}
export declare const Organization: MessageFns<Organization>;
export declare const OrganizationSearchFilter: MessageFns<OrganizationSearchFilter>;
export declare const OrgNameFilter: MessageFns<OrgNameFilter>;
export declare const OrgDomainFilter: MessageFns<OrgDomainFilter>;
export declare const OrgStateFilter: MessageFns<OrgStateFilter>;
export declare const OrgIDFilter: MessageFns<OrgIDFilter>;
export declare const DomainSearchFilter: MessageFns<DomainSearchFilter>;
export declare const DomainNameFilter: MessageFns<DomainNameFilter>;
export declare const Domain: MessageFns<Domain>;
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
