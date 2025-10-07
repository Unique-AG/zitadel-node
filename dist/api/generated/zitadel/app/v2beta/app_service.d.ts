import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { Duration } from "../../../google/protobuf/duration.js";
import { PaginationRequest, PaginationResponse } from "../../filter/v2/filter.js";
import { APIAuthMethodType } from "./api.js";
import { Application, ApplicationKey, ApplicationKeysSorting, ApplicationSearchFilter, AppSorting } from "./app.js";
import { LoginVersion } from "./login.js";
import { OIDCAppType, OIDCAuthMethodType, OIDCGrantType, OIDCLocalizedMessage, OIDCResponseType, OIDCTokenType, OIDCVersion } from "./oidc.js";
export declare const protobufPackage = "zitadel.app.v2beta";
export interface CreateApplicationRequest {
    projectId: string;
    id: string;
    name: string;
    oidcRequest?: CreateOIDCApplicationRequest | undefined;
    samlRequest?: CreateSAMLApplicationRequest | undefined;
    apiRequest?: CreateAPIApplicationRequest | undefined;
}
export interface CreateApplicationResponse {
    appId: string;
    /** The timestamp of the app creation. */
    creationDate: Date | undefined;
    oidcResponse?: CreateOIDCApplicationResponse | undefined;
    samlResponse?: CreateSAMLApplicationResponse | undefined;
    apiResponse?: CreateAPIApplicationResponse | undefined;
}
export interface CreateOIDCApplicationRequest {
    /** Callback URI of the authorization request where the code or tokens will be sent to */
    redirectUris: string[];
    responseTypes: OIDCResponseType[];
    grantTypes: OIDCGrantType[];
    appType: OIDCAppType;
    authMethodType: OIDCAuthMethodType;
    /** ZITADEL will redirect to this link after a successful logout */
    postLogoutRedirectUris: string[];
    version: OIDCVersion;
    devMode: boolean;
    accessTokenType: OIDCTokenType;
    accessTokenRoleAssertion: boolean;
    idTokenRoleAssertion: boolean;
    idTokenUserinfoAssertion: boolean;
    clockSkew: Duration | undefined;
    additionalOrigins: string[];
    skipNativeAppSuccessPage: boolean;
    backChannelLogoutUri: string;
    loginVersion: LoginVersion | undefined;
}
export interface CreateOIDCApplicationResponse {
    clientId: string;
    clientSecret: string;
    noneCompliant: boolean;
    complianceProblems: OIDCLocalizedMessage[];
}
export interface CreateSAMLApplicationRequest {
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
    loginVersion: LoginVersion | undefined;
}
export interface CreateSAMLApplicationResponse {
}
export interface CreateAPIApplicationRequest {
    authMethodType: APIAuthMethodType;
}
export interface CreateAPIApplicationResponse {
    clientId: string;
    clientSecret: string;
}
export interface UpdateApplicationRequest {
    projectId: string;
    id: string;
    name: string;
    samlConfigurationRequest?: UpdateSAMLApplicationConfigurationRequest | undefined;
    oidcConfigurationRequest?: UpdateOIDCApplicationConfigurationRequest | undefined;
    apiConfigurationRequest?: UpdateAPIApplicationConfigurationRequest | undefined;
}
export interface UpdateApplicationResponse {
    /** The timestamp of the app update. */
    changeDate: Date | undefined;
}
export interface UpdateSAMLApplicationConfigurationRequest {
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
    loginVersion?: LoginVersion | undefined;
}
export interface UpdateOIDCApplicationConfigurationRequest {
    redirectUris: string[];
    responseTypes: OIDCResponseType[];
    grantTypes: OIDCGrantType[];
    appType?: OIDCAppType | undefined;
    authMethodType?: OIDCAuthMethodType | undefined;
    postLogoutRedirectUris: string[];
    version?: OIDCVersion | undefined;
    devMode?: boolean | undefined;
    accessTokenType?: OIDCTokenType | undefined;
    accessTokenRoleAssertion?: boolean | undefined;
    idTokenRoleAssertion?: boolean | undefined;
    idTokenUserinfoAssertion?: boolean | undefined;
    clockSkew?: Duration | undefined;
    additionalOrigins: string[];
    skipNativeAppSuccessPage?: boolean | undefined;
    backChannelLogoutUri?: string | undefined;
    loginVersion?: LoginVersion | undefined;
}
export interface UpdateAPIApplicationConfigurationRequest {
    authMethodType: APIAuthMethodType;
}
export interface GetApplicationRequest {
    id: string;
}
export interface GetApplicationResponse {
    app: Application | undefined;
}
export interface DeleteApplicationRequest {
    projectId: string;
    id: string;
}
export interface DeleteApplicationResponse {
    deletionDate: Date | undefined;
}
export interface DeactivateApplicationRequest {
    projectId: string;
    id: string;
}
export interface DeactivateApplicationResponse {
    deactivationDate: Date | undefined;
}
export interface ReactivateApplicationRequest {
    projectId: string;
    id: string;
}
export interface ReactivateApplicationResponse {
    reactivationDate: Date | undefined;
}
export interface RegenerateClientSecretRequest {
    projectId: string;
    applicationId: string;
    isOidc?: boolean | undefined;
    isApi?: boolean | undefined;
}
export interface RegenerateClientSecretResponse {
    clientSecret: string;
    /** The timestamp of the creation of the new client secret */
    creationDate: Date | undefined;
}
export interface ListApplicationsRequest {
    projectId: string;
    /** Pagination and sorting. */
    pagination: PaginationRequest | undefined;
    /** criteria the client is looking for */
    filters: ApplicationSearchFilter[];
    sortingColumn: AppSorting;
}
export interface ListApplicationsResponse {
    applications: Application[];
    /** Contains the total number of apps matching the query and the applied limit. */
    pagination: PaginationResponse | undefined;
}
export interface CreateApplicationKeyRequest {
    appId: string;
    projectId: string;
    /** The date the key will expire */
    expirationDate: Date | undefined;
}
export interface CreateApplicationKeyResponse {
    id: string;
    /** The timestamp of the app creation. */
    creationDate: Date | undefined;
    keyDetails: Buffer;
}
export interface DeleteApplicationKeyRequest {
    id: string;
    projectId: string;
    applicationId: string;
    organizationId: string;
}
export interface DeleteApplicationKeyResponse {
    deletionDate: Date | undefined;
}
export interface GetApplicationKeyRequest {
    id: string;
    projectId: string;
    applicationId: string;
    organizationId: string;
}
export interface GetApplicationKeyResponse {
    id: string;
    creationDate: Date | undefined;
    /** the date a key will expire */
    expirationDate: Date | undefined;
}
export interface ListApplicationKeysRequest {
    /** Pagination and sorting. */
    pagination: PaginationRequest | undefined;
    sortingColumn: ApplicationKeysSorting;
    applicationId?: string | undefined;
    projectId?: string | undefined;
    organizationId?: string | undefined;
}
export interface ListApplicationKeysResponse {
    keys: ApplicationKey[];
    /** Contains the total number of app keys matching the query and the applied limit. */
    pagination: PaginationResponse | undefined;
}
export declare const CreateApplicationRequest: MessageFns<CreateApplicationRequest>;
export declare const CreateApplicationResponse: MessageFns<CreateApplicationResponse>;
export declare const CreateOIDCApplicationRequest: MessageFns<CreateOIDCApplicationRequest>;
export declare const CreateOIDCApplicationResponse: MessageFns<CreateOIDCApplicationResponse>;
export declare const CreateSAMLApplicationRequest: MessageFns<CreateSAMLApplicationRequest>;
export declare const CreateSAMLApplicationResponse: MessageFns<CreateSAMLApplicationResponse>;
export declare const CreateAPIApplicationRequest: MessageFns<CreateAPIApplicationRequest>;
export declare const CreateAPIApplicationResponse: MessageFns<CreateAPIApplicationResponse>;
export declare const UpdateApplicationRequest: MessageFns<UpdateApplicationRequest>;
export declare const UpdateApplicationResponse: MessageFns<UpdateApplicationResponse>;
export declare const UpdateSAMLApplicationConfigurationRequest: MessageFns<UpdateSAMLApplicationConfigurationRequest>;
export declare const UpdateOIDCApplicationConfigurationRequest: MessageFns<UpdateOIDCApplicationConfigurationRequest>;
export declare const UpdateAPIApplicationConfigurationRequest: MessageFns<UpdateAPIApplicationConfigurationRequest>;
export declare const GetApplicationRequest: MessageFns<GetApplicationRequest>;
export declare const GetApplicationResponse: MessageFns<GetApplicationResponse>;
export declare const DeleteApplicationRequest: MessageFns<DeleteApplicationRequest>;
export declare const DeleteApplicationResponse: MessageFns<DeleteApplicationResponse>;
export declare const DeactivateApplicationRequest: MessageFns<DeactivateApplicationRequest>;
export declare const DeactivateApplicationResponse: MessageFns<DeactivateApplicationResponse>;
export declare const ReactivateApplicationRequest: MessageFns<ReactivateApplicationRequest>;
export declare const ReactivateApplicationResponse: MessageFns<ReactivateApplicationResponse>;
export declare const RegenerateClientSecretRequest: MessageFns<RegenerateClientSecretRequest>;
export declare const RegenerateClientSecretResponse: MessageFns<RegenerateClientSecretResponse>;
export declare const ListApplicationsRequest: MessageFns<ListApplicationsRequest>;
export declare const ListApplicationsResponse: MessageFns<ListApplicationsResponse>;
export declare const CreateApplicationKeyRequest: MessageFns<CreateApplicationKeyRequest>;
export declare const CreateApplicationKeyResponse: MessageFns<CreateApplicationKeyResponse>;
export declare const DeleteApplicationKeyRequest: MessageFns<DeleteApplicationKeyRequest>;
export declare const DeleteApplicationKeyResponse: MessageFns<DeleteApplicationKeyResponse>;
export declare const GetApplicationKeyRequest: MessageFns<GetApplicationKeyRequest>;
export declare const GetApplicationKeyResponse: MessageFns<GetApplicationKeyResponse>;
export declare const ListApplicationKeysRequest: MessageFns<ListApplicationKeysRequest>;
export declare const ListApplicationKeysResponse: MessageFns<ListApplicationKeysResponse>;
/**
 * Service to manage apps.
 * The service provides methods to create, update, delete and list apps and app keys.
 */
export type AppServiceDefinition = typeof AppServiceDefinition;
export declare const AppServiceDefinition: {
    readonly name: "AppService";
    readonly fullName: "zitadel.app.v2beta.AppService";
    readonly methods: {
        /**
         * Create Application
         *
         * Create an application. The application can be OIDC, API or SAML type, based on the input.
         *
         * Required permissions:
         *   - project.app.write
         */
        readonly createApplication: {
            readonly name: "CreateApplication";
            readonly requestType: MessageFns<CreateApplicationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateApplicationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Update Application
         *
         * Changes the configuration of an OIDC, API or SAML type application, as well as
         * the application name, based on the input provided.
         *
         * Required permissions:
         *   - project.app.write
         */
        readonly updateApplication: {
            readonly name: "UpdateApplication";
            readonly requestType: MessageFns<UpdateApplicationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateApplicationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Get Application
         *
         * Retrieves the application matching the provided ID.
         *
         * Required permissions:
         *   - project.app.read
         */
        readonly getApplication: {
            readonly name: "GetApplication";
            readonly requestType: MessageFns<GetApplicationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetApplicationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Delete Application
         *
         * Deletes the application belonging to the input project and matching the provided
         * application ID.
         *
         * Required permissions:
         *   - project.app.delete
         */
        readonly deleteApplication: {
            readonly name: "DeleteApplication";
            readonly requestType: MessageFns<DeleteApplicationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteApplicationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Deactivate Application
         *
         * Deactivates the application belonging to the input project and matching the provided
         * application ID.
         *
         * Required permissions:
         *   - project.app.write
         */
        readonly deactivateApplication: {
            readonly name: "DeactivateApplication";
            readonly requestType: MessageFns<DeactivateApplicationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateApplicationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Reactivate Application
         *
         * Reactivates the application belonging to the input project and matching the provided
         * application ID.
         *
         * Required permissions:
         *   - project.app.write
         */
        readonly reactivateApplication: {
            readonly name: "ReactivateApplication";
            readonly requestType: MessageFns<ReactivateApplicationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateApplicationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Regenerate Client Secret
         *
         * Regenerates the client secret of an API or OIDC application that belongs to the input project.
         *
         * Required permissions:
         *   - project.app.write
         */
        readonly regenerateClientSecret: {
            readonly name: "RegenerateClientSecret";
            readonly requestType: MessageFns<RegenerateClientSecretRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegenerateClientSecretResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * List Applications
         *
         * Returns a list of applications matching the input parameters that belong to the provided
         * project.
         *
         * The result can be sorted by app id, name, creation date, change date or state. It can also
         * be filtered by app state, app type and app name.
         *
         * Required permissions:
         *   - project.app.read
         */
        readonly listApplications: {
            readonly name: "ListApplications";
            readonly requestType: MessageFns<ListApplicationsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListApplicationsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Create Application Key
         *
         * Create a new application key, which is used to authorize an API application.
         *
         * Key details are returned in the response. They must be stored safely, as it will not
         * be possible to retrieve them again.
         *
         * Required permissions:
         *   - `project.app.write`
         */
        readonly createApplicationKey: {
            readonly name: "CreateApplicationKey";
            readonly requestType: MessageFns<CreateApplicationKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateApplicationKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Delete Application Key
         *
         * Deletes an application key matching the provided ID.
         *
         * Organization ID is not mandatory, but helps with filtering/performance.
         *
         * The deletion time is returned in response message.
         *
         * Required permissions:
         *   - `project.app.write`
         */
        readonly deleteApplicationKey: {
            readonly name: "DeleteApplicationKey";
            readonly requestType: MessageFns<DeleteApplicationKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteApplicationKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Get Application Key
         *
         * Retrieves the application key matching the provided ID.
         *
         * Specifying a project, organization and app ID is optional but help with filtering/performance.
         *
         * Required permissions:
         *   - project.app.read
         */
        readonly getApplicationKey: {
            readonly name: "GetApplicationKey";
            readonly requestType: MessageFns<GetApplicationKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetApplicationKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * List Application Keys
         *
         * Returns a list of application keys matching the input parameters.
         *
         * The result can be sorted by id, aggregate, creation date, expiration date, resource owner or type.
         * It can also be filtered by app, project or organization ID.
         *
         * Required permissions:
         *   - project.app.read
         */
        readonly listApplicationKeys: {
            readonly name: "ListApplicationKeys";
            readonly requestType: MessageFns<ListApplicationKeysRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListApplicationKeysResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface AppServiceImplementation<CallContextExt = {}> {
    /**
     * Create Application
     *
     * Create an application. The application can be OIDC, API or SAML type, based on the input.
     *
     * Required permissions:
     *   - project.app.write
     */
    createApplication(request: CreateApplicationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateApplicationResponse>>;
    /**
     * Update Application
     *
     * Changes the configuration of an OIDC, API or SAML type application, as well as
     * the application name, based on the input provided.
     *
     * Required permissions:
     *   - project.app.write
     */
    updateApplication(request: UpdateApplicationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateApplicationResponse>>;
    /**
     * Get Application
     *
     * Retrieves the application matching the provided ID.
     *
     * Required permissions:
     *   - project.app.read
     */
    getApplication(request: GetApplicationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetApplicationResponse>>;
    /**
     * Delete Application
     *
     * Deletes the application belonging to the input project and matching the provided
     * application ID.
     *
     * Required permissions:
     *   - project.app.delete
     */
    deleteApplication(request: DeleteApplicationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteApplicationResponse>>;
    /**
     * Deactivate Application
     *
     * Deactivates the application belonging to the input project and matching the provided
     * application ID.
     *
     * Required permissions:
     *   - project.app.write
     */
    deactivateApplication(request: DeactivateApplicationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateApplicationResponse>>;
    /**
     * Reactivate Application
     *
     * Reactivates the application belonging to the input project and matching the provided
     * application ID.
     *
     * Required permissions:
     *   - project.app.write
     */
    reactivateApplication(request: ReactivateApplicationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateApplicationResponse>>;
    /**
     * Regenerate Client Secret
     *
     * Regenerates the client secret of an API or OIDC application that belongs to the input project.
     *
     * Required permissions:
     *   - project.app.write
     */
    regenerateClientSecret(request: RegenerateClientSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegenerateClientSecretResponse>>;
    /**
     * List Applications
     *
     * Returns a list of applications matching the input parameters that belong to the provided
     * project.
     *
     * The result can be sorted by app id, name, creation date, change date or state. It can also
     * be filtered by app state, app type and app name.
     *
     * Required permissions:
     *   - project.app.read
     */
    listApplications(request: ListApplicationsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListApplicationsResponse>>;
    /**
     * Create Application Key
     *
     * Create a new application key, which is used to authorize an API application.
     *
     * Key details are returned in the response. They must be stored safely, as it will not
     * be possible to retrieve them again.
     *
     * Required permissions:
     *   - `project.app.write`
     */
    createApplicationKey(request: CreateApplicationKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateApplicationKeyResponse>>;
    /**
     * Delete Application Key
     *
     * Deletes an application key matching the provided ID.
     *
     * Organization ID is not mandatory, but helps with filtering/performance.
     *
     * The deletion time is returned in response message.
     *
     * Required permissions:
     *   - `project.app.write`
     */
    deleteApplicationKey(request: DeleteApplicationKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteApplicationKeyResponse>>;
    /**
     * Get Application Key
     *
     * Retrieves the application key matching the provided ID.
     *
     * Specifying a project, organization and app ID is optional but help with filtering/performance.
     *
     * Required permissions:
     *   - project.app.read
     */
    getApplicationKey(request: GetApplicationKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetApplicationKeyResponse>>;
    /**
     * List Application Keys
     *
     * Returns a list of application keys matching the input parameters.
     *
     * The result can be sorted by id, aggregate, creation date, expiration date, resource owner or type.
     * It can also be filtered by app, project or organization ID.
     *
     * Required permissions:
     *   - project.app.read
     */
    listApplicationKeys(request: ListApplicationKeysRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListApplicationKeysResponse>>;
}
export interface AppServiceClient<CallOptionsExt = {}> {
    /**
     * Create Application
     *
     * Create an application. The application can be OIDC, API or SAML type, based on the input.
     *
     * Required permissions:
     *   - project.app.write
     */
    createApplication(request: DeepPartial<CreateApplicationRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateApplicationResponse>;
    /**
     * Update Application
     *
     * Changes the configuration of an OIDC, API or SAML type application, as well as
     * the application name, based on the input provided.
     *
     * Required permissions:
     *   - project.app.write
     */
    updateApplication(request: DeepPartial<UpdateApplicationRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateApplicationResponse>;
    /**
     * Get Application
     *
     * Retrieves the application matching the provided ID.
     *
     * Required permissions:
     *   - project.app.read
     */
    getApplication(request: DeepPartial<GetApplicationRequest>, options?: CallOptions & CallOptionsExt): Promise<GetApplicationResponse>;
    /**
     * Delete Application
     *
     * Deletes the application belonging to the input project and matching the provided
     * application ID.
     *
     * Required permissions:
     *   - project.app.delete
     */
    deleteApplication(request: DeepPartial<DeleteApplicationRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteApplicationResponse>;
    /**
     * Deactivate Application
     *
     * Deactivates the application belonging to the input project and matching the provided
     * application ID.
     *
     * Required permissions:
     *   - project.app.write
     */
    deactivateApplication(request: DeepPartial<DeactivateApplicationRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateApplicationResponse>;
    /**
     * Reactivate Application
     *
     * Reactivates the application belonging to the input project and matching the provided
     * application ID.
     *
     * Required permissions:
     *   - project.app.write
     */
    reactivateApplication(request: DeepPartial<ReactivateApplicationRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateApplicationResponse>;
    /**
     * Regenerate Client Secret
     *
     * Regenerates the client secret of an API or OIDC application that belongs to the input project.
     *
     * Required permissions:
     *   - project.app.write
     */
    regenerateClientSecret(request: DeepPartial<RegenerateClientSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<RegenerateClientSecretResponse>;
    /**
     * List Applications
     *
     * Returns a list of applications matching the input parameters that belong to the provided
     * project.
     *
     * The result can be sorted by app id, name, creation date, change date or state. It can also
     * be filtered by app state, app type and app name.
     *
     * Required permissions:
     *   - project.app.read
     */
    listApplications(request: DeepPartial<ListApplicationsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListApplicationsResponse>;
    /**
     * Create Application Key
     *
     * Create a new application key, which is used to authorize an API application.
     *
     * Key details are returned in the response. They must be stored safely, as it will not
     * be possible to retrieve them again.
     *
     * Required permissions:
     *   - `project.app.write`
     */
    createApplicationKey(request: DeepPartial<CreateApplicationKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateApplicationKeyResponse>;
    /**
     * Delete Application Key
     *
     * Deletes an application key matching the provided ID.
     *
     * Organization ID is not mandatory, but helps with filtering/performance.
     *
     * The deletion time is returned in response message.
     *
     * Required permissions:
     *   - `project.app.write`
     */
    deleteApplicationKey(request: DeepPartial<DeleteApplicationKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteApplicationKeyResponse>;
    /**
     * Get Application Key
     *
     * Retrieves the application key matching the provided ID.
     *
     * Specifying a project, organization and app ID is optional but help with filtering/performance.
     *
     * Required permissions:
     *   - project.app.read
     */
    getApplicationKey(request: DeepPartial<GetApplicationKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetApplicationKeyResponse>;
    /**
     * List Application Keys
     *
     * Returns a list of application keys matching the input parameters.
     *
     * The result can be sorted by id, aggregate, creation date, expiration date, resource owner or type.
     * It can also be filtered by app, project or organization ID.
     *
     * Required permissions:
     *   - project.app.read
     */
    listApplicationKeys(request: DeepPartial<ListApplicationKeysRequest>, options?: CallOptions & CallOptionsExt): Promise<ListApplicationKeysResponse>;
}
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
