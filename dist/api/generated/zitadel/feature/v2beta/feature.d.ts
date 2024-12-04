import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.feature.v2beta";
export declare enum Source {
    SOURCE_UNSPECIFIED = 0,
    SOURCE_SYSTEM = 2,
    SOURCE_INSTANCE = 3,
    SOURCE_ORGANIZATION = 4,
    /** SOURCE_PROJECT - reserved for future use */
    SOURCE_PROJECT = 5,
    /** SOURCE_APP - reserved for future use */
    SOURCE_APP = 6,
    SOURCE_USER = 7,
    UNRECOGNIZED = -1
}
export declare function sourceFromJSON(object: any): Source;
export declare function sourceToJSON(object: Source): string;
export declare enum ImprovedPerformance {
    IMPROVED_PERFORMANCE_UNSPECIFIED = 0,
    /**
     * IMPROVED_PERFORMANCE_ORG_BY_ID - Uses the eventstore to query the org by id
     * instead of the sql table.
     */
    IMPROVED_PERFORMANCE_ORG_BY_ID = 1,
    /**
     * IMPROVED_PERFORMANCE_PROJECT_GRANT - Improves performance on write side by using
     * optimized processes to query data to determine
     * correctnes of data.
     */
    IMPROVED_PERFORMANCE_PROJECT_GRANT = 2,
    IMPROVED_PERFORMANCE_PROJECT = 3,
    IMPROVED_PERFORMANCE_USER_GRANT = 4,
    /**
     * IMPROVED_PERFORMANCE_ORG_DOMAIN_VERIFIED - Improve performance on write side when
     * users are checked against verified domains
     * from other organizations.
     */
    IMPROVED_PERFORMANCE_ORG_DOMAIN_VERIFIED = 5,
    UNRECOGNIZED = -1
}
export declare function improvedPerformanceFromJSON(object: any): ImprovedPerformance;
export declare function improvedPerformanceToJSON(object: ImprovedPerformance): string;
/** FeatureFlag is a simple boolean Feature setting, without further payload. */
export interface FeatureFlag {
    enabled: boolean;
    source: Source;
}
export interface ImprovedPerformanceFeatureFlag {
    executionPaths: ImprovedPerformance[];
    source: Source;
}
export declare const FeatureFlag: MessageFns<FeatureFlag>;
export declare const ImprovedPerformanceFeatureFlag: MessageFns<ImprovedPerformanceFeatureFlag>;
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
