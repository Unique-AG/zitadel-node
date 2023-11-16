import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.v1";
export declare enum TextQueryMethod {
    TEXT_QUERY_METHOD_EQUALS = 0,
    TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE = 1,
    TEXT_QUERY_METHOD_STARTS_WITH = 2,
    TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE = 3,
    TEXT_QUERY_METHOD_CONTAINS = 4,
    TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE = 5,
    TEXT_QUERY_METHOD_ENDS_WITH = 6,
    TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE = 7,
    UNRECOGNIZED = -1
}
export declare function textQueryMethodFromJSON(object: any): TextQueryMethod;
export declare function textQueryMethodToJSON(object: TextQueryMethod): string;
export declare enum ListQueryMethod {
    LIST_QUERY_METHOD_IN = 0,
    UNRECOGNIZED = -1
}
export declare function listQueryMethodFromJSON(object: any): ListQueryMethod;
export declare function listQueryMethodToJSON(object: ListQueryMethod): string;
export declare enum TimestampQueryMethod {
    TIMESTAMP_QUERY_METHOD_EQUALS = 0,
    TIMESTAMP_QUERY_METHOD_GREATER = 1,
    TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS = 2,
    TIMESTAMP_QUERY_METHOD_LESS = 3,
    TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS = 4,
    UNRECOGNIZED = -1
}
export declare function timestampQueryMethodFromJSON(object: any): TimestampQueryMethod;
export declare function timestampQueryMethodToJSON(object: TimestampQueryMethod): string;
export interface ObjectDetails {
    /**
     * sequence represents the order of events. It's always counting
     *
     * on read: the sequence of the last event reduced by the projection
     *
     * on manipulation: the timestamp of the event(s) added by the manipulation
     */
    sequence: Long;
    /**
     * creation_date is the timestamp where the first operation on the object was made
     *
     * on read: the timestamp of the first event of the object
     *
     * on create: the timestamp of the event(s) added by the manipulation
     */
    creationDate: Date | undefined;
    /**
     * change_date is the timestamp when the object was changed
     *
     * on read: the timestamp of the last event reduced by the projection
     *
     * on manipulation: the
     */
    changeDate: Date | undefined;
    /** resource_owner is the organization an object belongs to */
    resourceOwner: string;
}
export interface ListQuery {
    offset: Long;
    limit: number;
    asc: boolean;
}
export interface ListDetails {
    totalResult: Long;
    processedSequence: Long;
    viewTimestamp: Date | undefined;
}
export declare const ObjectDetails: {
    encode(message: ObjectDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ObjectDetails;
    fromJSON(object: any): ObjectDetails;
    toJSON(message: ObjectDetails): unknown;
    create(base?: DeepPartial<ObjectDetails>): ObjectDetails;
    fromPartial(object: DeepPartial<ObjectDetails>): ObjectDetails;
};
export declare const ListQuery: {
    encode(message: ListQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuery;
    fromJSON(object: any): ListQuery;
    toJSON(message: ListQuery): unknown;
    create(base?: DeepPartial<ListQuery>): ListQuery;
    fromPartial(object: DeepPartial<ListQuery>): ListQuery;
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
