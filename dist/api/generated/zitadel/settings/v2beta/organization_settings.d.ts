import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { InIDsFilter } from "../../filter/v2beta/filter.js";
export declare const protobufPackage = "zitadel.settings.v2beta";
export declare enum OrganizationSettingsFieldName {
    ORGANIZATION_SETTINGS_FIELD_NAME_UNSPECIFIED = 0,
    ORGANIZATION_SETTINGS_FIELD_NAME_ORGANIZATION_ID = 1,
    ORGANIZATION_SETTINGS_FIELD_NAME_CREATION_DATE = 2,
    ORGANIZATION_SETTINGS_FIELD_NAME_CHANGE_DATE = 3,
    UNRECOGNIZED = -1
}
export declare function organizationSettingsFieldNameFromJSON(object: any): OrganizationSettingsFieldName;
export declare function organizationSettingsFieldNameToJSON(object: OrganizationSettingsFieldName): string;
export interface OrganizationSettings {
    /** The unique identifier of the organization the settings belong to. */
    organizationId: string;
    /** The timestamp of the organization settings creation. */
    creationDate: Date | undefined;
    /** The timestamp of the last change to the organization settings. */
    changeDate: Date | undefined;
    /** Defines if the usernames have to be unique in the organization context. */
    organizationScopedUsernames: boolean;
}
export interface OrganizationSettingsSearchFilter {
    inOrganizationIdsFilter?: InIDsFilter | undefined;
    organizationScopedUsernamesFilter?: OrganizationScopedUsernamesFilter | undefined;
}
/** Query for organization settings with specific scopes usernames. */
export interface OrganizationScopedUsernamesFilter {
    organizationScopedUsernames: boolean;
}
export declare const OrganizationSettings: MessageFns<OrganizationSettings>;
export declare const OrganizationSettingsSearchFilter: MessageFns<OrganizationSettingsSearchFilter>;
export declare const OrganizationScopedUsernamesFilter: MessageFns<OrganizationScopedUsernamesFilter>;
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
