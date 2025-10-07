import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.analytics.v2beta";
export declare enum CountParentType {
    COUNT_PARENT_TYPE_UNSPECIFIED = 0,
    COUNT_PARENT_TYPE_INSTANCE = 1,
    COUNT_PARENT_TYPE_ORGANIZATION = 2,
    UNRECOGNIZED = -1
}
export declare function countParentTypeFromJSON(object: any): CountParentType;
export declare function countParentTypeToJSON(object: CountParentType): string;
export interface InstanceInformation {
    /** The unique identifier of the instance. */
    id: string;
    /** The custom domains (incl. generated ones) of the instance. */
    domains: string[];
    /** The creation date of the instance. */
    createdAt: Date | undefined;
}
export interface ResourceCount {
    /** The ID of the instance for which the resource counts are reported. */
    instanceId: string;
    /**
     * The parent type of the resource counts (e.g. organization or instance).
     * For example, reporting the amount of users per organization would use
     * `COUNT_PARENT_TYPE_ORGANIZATION` as parent type and the organization ID as parent ID.
     */
    parentType: CountParentType;
    /**
     * The parent ID of the resource counts (e.g. organization or instance ID).
     * For example, reporting the amount of users per organization would use
     * `COUNT_PARENT_TYPE_ORGANIZATION` as parent type and the organization ID as parent ID.
     */
    parentId: string;
    /** The resource counts to report, e.g. amount of `users`, `organizations`, etc. */
    resourceName: string;
    /**
     * The name of the table in the database, which was used to calculate the counts.
     * This can be used to deduplicate counts in case of multiple reports.
     * For example, if the counts were calculated from the `users14` table,
     * the table name would be `users14`, where there could also be a `users15` table
     * reported at the same time as the system is rolling out a new version.
     */
    tableName: string;
    /** The timestamp when the count was last updated. */
    updatedAt: Date | undefined;
    /** The actual amount of the resource. */
    amount: number;
}
export declare const InstanceInformation: MessageFns<InstanceInformation>;
export declare const ResourceCount: MessageFns<ResourceCount>;
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
