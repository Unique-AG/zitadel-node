import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { PaginationRequest, PaginationResponse } from "../../filter/v2beta/filter.js";
import { Details, ListDetails, RequestContext } from "../../object/v2beta/object.js";
import { BrandingSettings } from "./branding_settings.js";
import { DomainSettings } from "./domain_settings.js";
import { LegalAndSupportSettings } from "./legal_settings.js";
import { LockoutSettings } from "./lockout_settings.js";
import { IdentityProvider, LoginSettings } from "./login_settings.js";
import { OrganizationSettings, OrganizationSettingsFieldName, OrganizationSettingsSearchFilter } from "./organization_settings.js";
import { PasswordComplexitySettings, PasswordExpirySettings } from "./password_settings.js";
import { EmbeddedIframeSettings, SecuritySettings } from "./security_settings.js";
export declare const protobufPackage = "zitadel.settings.v2beta";
export interface GetLoginSettingsRequest {
    ctx: RequestContext | undefined;
}
export interface GetLoginSettingsResponse {
    details: Details | undefined;
    settings: LoginSettings | undefined;
}
export interface GetPasswordComplexitySettingsRequest {
    ctx: RequestContext | undefined;
}
export interface GetPasswordComplexitySettingsResponse {
    details: Details | undefined;
    settings: PasswordComplexitySettings | undefined;
}
export interface GetPasswordExpirySettingsRequest {
    ctx: RequestContext | undefined;
}
export interface GetPasswordExpirySettingsResponse {
    details: Details | undefined;
    settings: PasswordExpirySettings | undefined;
}
export interface GetBrandingSettingsRequest {
    ctx: RequestContext | undefined;
}
export interface GetBrandingSettingsResponse {
    details: Details | undefined;
    settings: BrandingSettings | undefined;
}
export interface GetDomainSettingsRequest {
    ctx: RequestContext | undefined;
}
export interface GetDomainSettingsResponse {
    details: Details | undefined;
    settings: DomainSettings | undefined;
}
export interface GetLegalAndSupportSettingsRequest {
    ctx: RequestContext | undefined;
}
export interface GetLegalAndSupportSettingsResponse {
    details: Details | undefined;
    settings: LegalAndSupportSettings | undefined;
}
export interface GetLockoutSettingsRequest {
    ctx: RequestContext | undefined;
}
export interface GetLockoutSettingsResponse {
    details: Details | undefined;
    settings: LockoutSettings | undefined;
}
export interface GetActiveIdentityProvidersRequest {
    ctx: RequestContext | undefined;
}
export interface GetActiveIdentityProvidersResponse {
    details: ListDetails | undefined;
    identityProviders: IdentityProvider[];
}
export interface GetGeneralSettingsRequest {
}
export interface GetGeneralSettingsResponse {
    defaultOrgId: string;
    defaultLanguage: string;
    supportedLanguages: string[];
}
/** This is an empty request */
export interface GetSecuritySettingsRequest {
}
export interface GetSecuritySettingsResponse {
    details: Details | undefined;
    settings: SecuritySettings | undefined;
}
export interface SetSecuritySettingsRequest {
    embeddedIframe: EmbeddedIframeSettings | undefined;
    enableImpersonation: boolean;
}
export interface SetSecuritySettingsResponse {
    details: Details | undefined;
}
export interface SetOrganizationSettingsRequest {
    /** Organization ID in which this settings are set. */
    organizationId: string;
    /** Force the usernames in the organization to be unique, only possible to set if the existing users already have unique usernames in the organization context. */
    organizationScopedUsernames?: boolean | undefined;
}
export interface SetOrganizationSettingsResponse {
    /** The timestamp of the set of the organization settings. */
    setDate: Date | undefined;
}
export interface DeleteOrganizationSettingsRequest {
    /** Organization ID in which this settings are set. */
    organizationId: string;
}
export interface DeleteOrganizationSettingsResponse {
    /** The timestamp of the deletion of the organization settings. */
    deletionDate: Date | undefined;
}
export interface ListOrganizationSettingsRequest {
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: OrganizationSettingsFieldName | undefined;
    filters: OrganizationSettingsSearchFilter[];
}
export interface ListOrganizationSettingsResponse {
    pagination: PaginationResponse | undefined;
    organizationSettings: OrganizationSettings[];
}
export declare const GetLoginSettingsRequest: MessageFns<GetLoginSettingsRequest>;
export declare const GetLoginSettingsResponse: MessageFns<GetLoginSettingsResponse>;
export declare const GetPasswordComplexitySettingsRequest: MessageFns<GetPasswordComplexitySettingsRequest>;
export declare const GetPasswordComplexitySettingsResponse: MessageFns<GetPasswordComplexitySettingsResponse>;
export declare const GetPasswordExpirySettingsRequest: MessageFns<GetPasswordExpirySettingsRequest>;
export declare const GetPasswordExpirySettingsResponse: MessageFns<GetPasswordExpirySettingsResponse>;
export declare const GetBrandingSettingsRequest: MessageFns<GetBrandingSettingsRequest>;
export declare const GetBrandingSettingsResponse: MessageFns<GetBrandingSettingsResponse>;
export declare const GetDomainSettingsRequest: MessageFns<GetDomainSettingsRequest>;
export declare const GetDomainSettingsResponse: MessageFns<GetDomainSettingsResponse>;
export declare const GetLegalAndSupportSettingsRequest: MessageFns<GetLegalAndSupportSettingsRequest>;
export declare const GetLegalAndSupportSettingsResponse: MessageFns<GetLegalAndSupportSettingsResponse>;
export declare const GetLockoutSettingsRequest: MessageFns<GetLockoutSettingsRequest>;
export declare const GetLockoutSettingsResponse: MessageFns<GetLockoutSettingsResponse>;
export declare const GetActiveIdentityProvidersRequest: MessageFns<GetActiveIdentityProvidersRequest>;
export declare const GetActiveIdentityProvidersResponse: MessageFns<GetActiveIdentityProvidersResponse>;
export declare const GetGeneralSettingsRequest: MessageFns<GetGeneralSettingsRequest>;
export declare const GetGeneralSettingsResponse: MessageFns<GetGeneralSettingsResponse>;
export declare const GetSecuritySettingsRequest: MessageFns<GetSecuritySettingsRequest>;
export declare const GetSecuritySettingsResponse: MessageFns<GetSecuritySettingsResponse>;
export declare const SetSecuritySettingsRequest: MessageFns<SetSecuritySettingsRequest>;
export declare const SetSecuritySettingsResponse: MessageFns<SetSecuritySettingsResponse>;
export declare const SetOrganizationSettingsRequest: MessageFns<SetOrganizationSettingsRequest>;
export declare const SetOrganizationSettingsResponse: MessageFns<SetOrganizationSettingsResponse>;
export declare const DeleteOrganizationSettingsRequest: MessageFns<DeleteOrganizationSettingsRequest>;
export declare const DeleteOrganizationSettingsResponse: MessageFns<DeleteOrganizationSettingsResponse>;
export declare const ListOrganizationSettingsRequest: MessageFns<ListOrganizationSettingsRequest>;
export declare const ListOrganizationSettingsResponse: MessageFns<ListOrganizationSettingsResponse>;
export type SettingsServiceDefinition = typeof SettingsServiceDefinition;
export declare const SettingsServiceDefinition: {
    readonly name: "SettingsService";
    readonly fullName: "zitadel.settings.v2beta.SettingsService";
    readonly methods: {
        /** Get basic information over the instance */
        readonly getGeneralSettings: {
            readonly name: "GetGeneralSettings";
            readonly requestType: MessageFns<GetGeneralSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetGeneralSettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Get the login settings */
        readonly getLoginSettings: {
            readonly name: "GetLoginSettings";
            readonly requestType: MessageFns<GetLoginSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetLoginSettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Get the current active identity providers */
        readonly getActiveIdentityProviders: {
            readonly name: "GetActiveIdentityProviders";
            readonly requestType: MessageFns<GetActiveIdentityProvidersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetActiveIdentityProvidersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Get the password complexity settings */
        readonly getPasswordComplexitySettings: {
            readonly name: "GetPasswordComplexitySettings";
            readonly requestType: MessageFns<GetPasswordComplexitySettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetPasswordComplexitySettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Get the password expiry settings */
        readonly getPasswordExpirySettings: {
            readonly name: "GetPasswordExpirySettings";
            readonly requestType: MessageFns<GetPasswordExpirySettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetPasswordExpirySettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Get the current active branding settings */
        readonly getBrandingSettings: {
            readonly name: "GetBrandingSettings";
            readonly requestType: MessageFns<GetBrandingSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetBrandingSettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Get the domain settings */
        readonly getDomainSettings: {
            readonly name: "GetDomainSettings";
            readonly requestType: MessageFns<GetDomainSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDomainSettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Get the legal and support settings */
        readonly getLegalAndSupportSettings: {
            readonly name: "GetLegalAndSupportSettings";
            readonly requestType: MessageFns<GetLegalAndSupportSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetLegalAndSupportSettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Get the lockout settings */
        readonly getLockoutSettings: {
            readonly name: "GetLockoutSettings";
            readonly requestType: MessageFns<GetLockoutSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetLockoutSettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Get the security settings */
        readonly getSecuritySettings: {
            readonly name: "GetSecuritySettings";
            readonly requestType: MessageFns<GetSecuritySettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSecuritySettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Set the security settings */
        readonly setSecuritySettings: {
            readonly name: "SetSecuritySettings";
            readonly requestType: MessageFns<SetSecuritySettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetSecuritySettingsResponse>;
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
         * Set Organization Settings
         *
         * Sets the settings specific to an organization.
         * Organization scopes usernames defines that the usernames have to be unique in the organization scope, can only be changed if the usernames of the users are unique in the scope.
         *
         * Required permissions:
         *   - `iam.policy.write`
         */
        readonly setOrganizationSettings: {
            readonly name: "SetOrganizationSettings";
            readonly requestType: MessageFns<SetOrganizationSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetOrganizationSettingsResponse>;
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
         * Delete Organization Settings
         *
         * Delete the settings specific to an organization.
         *
         * Required permissions:
         *   - `iam.policy.delete`
         */
        readonly deleteOrganizationSettings: {
            readonly name: "DeleteOrganizationSettings";
            readonly requestType: MessageFns<DeleteOrganizationSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteOrganizationSettingsResponse>;
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
         * List Organization Settings
         *
         * Returns a list of organization settings.
         *
         * Required permission:
         *   - `iam.policy.read`
         *   - `org.policy.read`
         */
        readonly listOrganizationSettings: {
            readonly name: "ListOrganizationSettings";
            readonly requestType: MessageFns<ListOrganizationSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrganizationSettingsResponse>;
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
export interface SettingsServiceImplementation<CallContextExt = {}> {
    /** Get basic information over the instance */
    getGeneralSettings(request: GetGeneralSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetGeneralSettingsResponse>>;
    /** Get the login settings */
    getLoginSettings(request: GetLoginSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLoginSettingsResponse>>;
    /** Get the current active identity providers */
    getActiveIdentityProviders(request: GetActiveIdentityProvidersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetActiveIdentityProvidersResponse>>;
    /** Get the password complexity settings */
    getPasswordComplexitySettings(request: GetPasswordComplexitySettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPasswordComplexitySettingsResponse>>;
    /** Get the password expiry settings */
    getPasswordExpirySettings(request: GetPasswordExpirySettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPasswordExpirySettingsResponse>>;
    /** Get the current active branding settings */
    getBrandingSettings(request: GetBrandingSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetBrandingSettingsResponse>>;
    /** Get the domain settings */
    getDomainSettings(request: GetDomainSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDomainSettingsResponse>>;
    /** Get the legal and support settings */
    getLegalAndSupportSettings(request: GetLegalAndSupportSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLegalAndSupportSettingsResponse>>;
    /** Get the lockout settings */
    getLockoutSettings(request: GetLockoutSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLockoutSettingsResponse>>;
    /** Get the security settings */
    getSecuritySettings(request: GetSecuritySettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSecuritySettingsResponse>>;
    /** Set the security settings */
    setSecuritySettings(request: SetSecuritySettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetSecuritySettingsResponse>>;
    /**
     * Set Organization Settings
     *
     * Sets the settings specific to an organization.
     * Organization scopes usernames defines that the usernames have to be unique in the organization scope, can only be changed if the usernames of the users are unique in the scope.
     *
     * Required permissions:
     *   - `iam.policy.write`
     */
    setOrganizationSettings(request: SetOrganizationSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetOrganizationSettingsResponse>>;
    /**
     * Delete Organization Settings
     *
     * Delete the settings specific to an organization.
     *
     * Required permissions:
     *   - `iam.policy.delete`
     */
    deleteOrganizationSettings(request: DeleteOrganizationSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteOrganizationSettingsResponse>>;
    /**
     * List Organization Settings
     *
     * Returns a list of organization settings.
     *
     * Required permission:
     *   - `iam.policy.read`
     *   - `org.policy.read`
     */
    listOrganizationSettings(request: ListOrganizationSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrganizationSettingsResponse>>;
}
export interface SettingsServiceClient<CallOptionsExt = {}> {
    /** Get basic information over the instance */
    getGeneralSettings(request: DeepPartial<GetGeneralSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetGeneralSettingsResponse>;
    /** Get the login settings */
    getLoginSettings(request: DeepPartial<GetLoginSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLoginSettingsResponse>;
    /** Get the current active identity providers */
    getActiveIdentityProviders(request: DeepPartial<GetActiveIdentityProvidersRequest>, options?: CallOptions & CallOptionsExt): Promise<GetActiveIdentityProvidersResponse>;
    /** Get the password complexity settings */
    getPasswordComplexitySettings(request: DeepPartial<GetPasswordComplexitySettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPasswordComplexitySettingsResponse>;
    /** Get the password expiry settings */
    getPasswordExpirySettings(request: DeepPartial<GetPasswordExpirySettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPasswordExpirySettingsResponse>;
    /** Get the current active branding settings */
    getBrandingSettings(request: DeepPartial<GetBrandingSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetBrandingSettingsResponse>;
    /** Get the domain settings */
    getDomainSettings(request: DeepPartial<GetDomainSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDomainSettingsResponse>;
    /** Get the legal and support settings */
    getLegalAndSupportSettings(request: DeepPartial<GetLegalAndSupportSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLegalAndSupportSettingsResponse>;
    /** Get the lockout settings */
    getLockoutSettings(request: DeepPartial<GetLockoutSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLockoutSettingsResponse>;
    /** Get the security settings */
    getSecuritySettings(request: DeepPartial<GetSecuritySettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSecuritySettingsResponse>;
    /** Set the security settings */
    setSecuritySettings(request: DeepPartial<SetSecuritySettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetSecuritySettingsResponse>;
    /**
     * Set Organization Settings
     *
     * Sets the settings specific to an organization.
     * Organization scopes usernames defines that the usernames have to be unique in the organization scope, can only be changed if the usernames of the users are unique in the scope.
     *
     * Required permissions:
     *   - `iam.policy.write`
     */
    setOrganizationSettings(request: DeepPartial<SetOrganizationSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetOrganizationSettingsResponse>;
    /**
     * Delete Organization Settings
     *
     * Delete the settings specific to an organization.
     *
     * Required permissions:
     *   - `iam.policy.delete`
     */
    deleteOrganizationSettings(request: DeepPartial<DeleteOrganizationSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteOrganizationSettingsResponse>;
    /**
     * List Organization Settings
     *
     * Returns a list of organization settings.
     *
     * Required permission:
     *   - `iam.policy.read`
     *   - `org.policy.read`
     */
    listOrganizationSettings(request: DeepPartial<ListOrganizationSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrganizationSettingsResponse>;
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
