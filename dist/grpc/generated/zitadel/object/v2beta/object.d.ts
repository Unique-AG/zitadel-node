import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.object.v2beta";
/** Deprecated: use Organization */
export interface Organisation {
    orgId?: string | undefined;
    orgDomain?: string | undefined;
}
export interface Organization {
    orgId?: string | undefined;
    orgDomain?: string | undefined;
}
export interface RequestContext {
    orgId?: string | undefined;
    instance?: boolean | undefined;
}
export interface ListQuery {
    offset: Long;
    limit: number;
    asc: boolean;
}
export interface Details {
    /**
     * sequence represents the order of events. It's always counting
     *
     * on read: the sequence of the last event reduced by the projection
     *
     * on manipulation: the timestamp of the event(s) added by the manipulation
     */
    sequence: Long;
    /**
     * change_date is the timestamp when the object was changed
     *
     * on read: the timestamp of the last event reduced by the projection
     *
     * on manipulation: the timestamp of the event(s) added by the manipulation
     */
    changeDate: Date | undefined;
    /** resource_owner is the organization or instance_id an object belongs to */
    resourceOwner: string;
}
export interface ListDetails {
    totalResult: Long;
    processedSequence: Long;
    timestamp: Date | undefined;
}
export declare const Organisation: {
    encode(message: Organisation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Organisation;
    fromJSON(object: any): Organisation;
    toJSON(message: Organisation): unknown;
    create(base?: DeepPartial<Organisation>): Organisation;
    fromPartial(object: DeepPartial<Organisation>): Organisation;
};
export declare const Organization: {
    encode(message: Organization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Organization;
    fromJSON(object: any): Organization;
    toJSON(message: Organization): unknown;
    create(base?: DeepPartial<Organization>): Organization;
    fromPartial(object: DeepPartial<Organization>): Organization;
};
export declare const RequestContext: {
    encode(message: RequestContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestContext;
    fromJSON(object: any): RequestContext;
    toJSON(message: RequestContext): unknown;
    create(base?: DeepPartial<RequestContext>): RequestContext;
    fromPartial(object: DeepPartial<RequestContext>): RequestContext;
};
export declare const ListQuery: {
    encode(message: ListQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuery;
    fromJSON(object: any): ListQuery;
    toJSON(message: ListQuery): unknown;
    create(base?: DeepPartial<ListQuery>): ListQuery;
    fromPartial(object: DeepPartial<ListQuery>): ListQuery;
};
export declare const Details: {
    encode(message: Details, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Details;
    fromJSON(object: any): Details;
    toJSON(message: Details): unknown;
    create(base?: DeepPartial<Details>): Details;
    fromPartial(object: DeepPartial<Details>): Details;
};
export declare const ListDetails: {
    encode(message: ListDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListDetails;
    fromJSON(object: any): ListDetails;
    toJSON(message: ListDetails): unknown;
    create(base?: DeepPartial<ListDetails>): ListDetails;
    fromPartial(object: DeepPartial<ListDetails>): ListDetails;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
