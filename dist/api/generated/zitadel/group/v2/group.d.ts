import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { IDFilter, InIDsFilter, TextFilterMethod } from "../../filter/v2/filter.js";
export declare const protobufPackage = "zitadel.group.v2";
export declare enum FieldName {
    FIELD_NAME_UNSPECIFIED = 0,
    FIELD_NAME_ID = 1,
    FIELD_NAME_NAME = 2,
    FIELD_NAME_CREATION_DATE = 3,
    FIELD_NAME_CHANGE_DATE = 4,
    UNRECOGNIZED = -1
}
export declare function fieldNameFromJSON(object: any): FieldName;
export declare function fieldNameToJSON(object: FieldName): string;
export interface Group {
    /** Unique identifier of the user group. */
    id: string;
    /** Unique name of the user group inside the corresponding organization. */
    name: string;
    /** Description the user group. */
    description: string;
    /** The ID of the organization to which the group belongs. */
    organizationId: string;
    /** Timestamp when the group was last changed. */
    changeDate: Date | undefined;
    /** Timestamp when the user group was created */
    creationDate: Date | undefined;
}
export interface GroupsSearchFilter {
    /** Search for groups by their IDs. */
    groupIds?: InIDsFilter | undefined;
    /** Search for groups by their names. */
    nameFilter?: GroupNameFilter | undefined;
    /** Search for groups by their organization ID. */
    organizationId?: IDFilter | undefined;
}
export interface GroupNameFilter {
    /** Name of the user group. */
    name: string;
    /** Defines which text comparison method used for the name query. */
    method: TextFilterMethod;
}
export declare const Group: MessageFns<Group>;
export declare const GroupsSearchFilter: MessageFns<GroupsSearchFilter>;
export declare const GroupNameFilter: MessageFns<GroupNameFilter>;
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
