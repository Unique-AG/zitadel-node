import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.filter.v2beta";
export declare enum TextFilterMethod {
    TEXT_FILTER_METHOD_EQUALS = 0,
    TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE = 1,
    TEXT_FILTER_METHOD_STARTS_WITH = 2,
    TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE = 3,
    TEXT_FILTER_METHOD_CONTAINS = 4,
    TEXT_FILTER_METHOD_CONTAINS_IGNORE_CASE = 5,
    TEXT_FILTER_METHOD_ENDS_WITH = 6,
    TEXT_FILTER_METHOD_ENDS_WITH_IGNORE_CASE = 7,
    UNRECOGNIZED = -1
}
export declare function textFilterMethodFromJSON(object: any): TextFilterMethod;
export declare function textFilterMethodToJSON(object: TextFilterMethod): string;
export declare enum ListFilterMethod {
    LIST_FILTER_METHOD_IN = 0,
    UNRECOGNIZED = -1
}
export declare function listFilterMethodFromJSON(object: any): ListFilterMethod;
export declare function listFilterMethodToJSON(object: ListFilterMethod): string;
export declare enum TimestampFilterMethod {
    TIMESTAMP_FILTER_METHOD_EQUALS = 0,
    TIMESTAMP_FILTER_METHOD_GREATER = 1,
    TIMESTAMP_FILTER_METHOD_GREATER_OR_EQUALS = 2,
    TIMESTAMP_FILTER_METHOD_LESS = 3,
    TIMESTAMP_FILTER_METHOD_LESS_OR_EQUALS = 4,
    UNRECOGNIZED = -1
}
export declare function timestampFilterMethodFromJSON(object: any): TimestampFilterMethod;
export declare function timestampFilterMethodToJSON(object: TimestampFilterMethod): string;
export interface PaginationRequest {
    /** Starting point for retrieval, in combination of offset used to query a set list of objects. */
    offset: Long;
    /**
     * limit is the maximum amount of objects returned. The default is set to 100
     * with a maximum of 1000 in the runtime configuration.
     * If the limit exceeds the maximum configured ZITADEL will throw an error.
     * If no limit is present the default is taken.
     */
    limit: number;
    /**
     * Asc is the sorting order. If true the list is sorted ascending, if false
     * the list is sorted descending. The default is descending.
     */
    asc: boolean;
}
export interface PaginationResponse {
    /** Absolute number of objects matching the query, regardless of applied limit. */
    totalResult: Long;
    /** Applied limit from query, defines maximum amount of objects per request, to compare if all objects are returned. */
    appliedLimit: Long;
}
export interface IDFilter {
    /** Only return resources that belong to this id. */
    id: string;
}
export interface TimestampFilter {
    /** Filter resources by timestamp. */
    timestamp: Date | undefined;
    /** Defines the condition (e.g., equals, before, after) that the timestamp of the retrieved resources should match. */
    method: TimestampFilterMethod;
}
export interface InIDsFilter {
    /** Defines the ids to query for. */
    ids: string[];
}
export declare const PaginationRequest: MessageFns<PaginationRequest>;
export declare const PaginationResponse: MessageFns<PaginationResponse>;
export declare const IDFilter: MessageFns<IDFilter>;
export declare const TimestampFilter: MessageFns<TimestampFilter>;
export declare const InIDsFilter: MessageFns<InIDsFilter>;
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
