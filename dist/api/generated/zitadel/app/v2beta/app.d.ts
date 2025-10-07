import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TextFilterMethod } from "../../filter/v2/filter.js";
import { APIConfig } from "./api.js";
import { OIDCConfig } from "./oidc.js";
import { SAMLConfig } from "./saml.js";
export declare const protobufPackage = "zitadel.app.v2beta";
export declare enum AppState {
    APP_STATE_UNSPECIFIED = 0,
    APP_STATE_ACTIVE = 1,
    APP_STATE_INACTIVE = 2,
    APP_STATE_REMOVED = 3,
    UNRECOGNIZED = -1
}
export declare function appStateFromJSON(object: any): AppState;
export declare function appStateToJSON(object: AppState): string;
export declare enum AppSorting {
    APP_SORT_BY_ID = 0,
    APP_SORT_BY_NAME = 1,
    APP_SORT_BY_STATE = 2,
    APP_SORT_BY_CREATION_DATE = 3,
    APP_SORT_BY_CHANGE_DATE = 4,
    UNRECOGNIZED = -1
}
export declare function appSortingFromJSON(object: any): AppSorting;
export declare function appSortingToJSON(object: AppSorting): string;
export declare enum ApplicationKeysSorting {
    APPLICATION_KEYS_SORT_BY_ID = 0,
    APPLICATION_KEYS_SORT_BY_PROJECT_ID = 1,
    APPLICATION_KEYS_SORT_BY_APPLICATION_ID = 2,
    APPLICATION_KEYS_SORT_BY_CREATION_DATE = 3,
    APPLICATION_KEYS_SORT_BY_ORGANIZATION_ID = 4,
    APPLICATION_KEYS_SORT_BY_EXPIRATION = 5,
    APPLICATION_KEYS_SORT_BY_TYPE = 6,
    UNRECOGNIZED = -1
}
export declare function applicationKeysSortingFromJSON(object: any): ApplicationKeysSorting;
export declare function applicationKeysSortingToJSON(object: ApplicationKeysSorting): string;
export interface Application {
    id: string;
    /** The timestamp of the app creation. */
    creationDate: Date | undefined;
    /** The timestamp of the app update. */
    changeDate: Date | undefined;
    state: AppState;
    name: string;
    oidcConfig?: OIDCConfig | undefined;
    apiConfig?: APIConfig | undefined;
    samlConfig?: SAMLConfig | undefined;
}
export interface ApplicationSearchFilter {
    nameFilter?: ApplicationNameQuery | undefined;
    stateFilter?: AppState | undefined;
    apiAppOnly?: boolean | undefined;
    oidcAppOnly?: boolean | undefined;
    samlAppOnly?: boolean | undefined;
}
export interface ApplicationNameQuery {
    name: string;
    method: TextFilterMethod;
}
export interface ApplicationKey {
    id: string;
    applicationId: string;
    projectId: string;
    creationDate: Date | undefined;
    organizationId: string;
    expirationDate: Date | undefined;
}
export declare const Application: MessageFns<Application>;
export declare const ApplicationSearchFilter: MessageFns<ApplicationSearchFilter>;
export declare const ApplicationNameQuery: MessageFns<ApplicationNameQuery>;
export declare const ApplicationKey: MessageFns<ApplicationKey>;
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
