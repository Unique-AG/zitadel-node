/// <reference types="node" />
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Details, ListDetails, RequestContext } from "../../object/v2beta/object";
import { BrandingSettings } from "./branding_settings";
import { DomainSettings } from "./domain_settings";
import { LegalAndSupportSettings } from "./legal_settings";
import { LockoutSettings } from "./lockout_settings";
import { IdentityProvider, LoginSettings } from "./login_settings";
import { PasswordComplexitySettings } from "./password_settings";
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
export declare const GetLoginSettingsRequest: {
    encode(message: GetLoginSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginSettingsRequest;
    fromJSON(object: any): GetLoginSettingsRequest;
    toJSON(message: GetLoginSettingsRequest): unknown;
    create(base?: DeepPartial<GetLoginSettingsRequest>): GetLoginSettingsRequest;
    fromPartial(object: DeepPartial<GetLoginSettingsRequest>): GetLoginSettingsRequest;
};
export declare const GetLoginSettingsResponse: {
    encode(message: GetLoginSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginSettingsResponse;
    fromJSON(object: any): GetLoginSettingsResponse;
    toJSON(message: GetLoginSettingsResponse): unknown;
    create(base?: DeepPartial<GetLoginSettingsResponse>): GetLoginSettingsResponse;
    fromPartial(object: DeepPartial<GetLoginSettingsResponse>): GetLoginSettingsResponse;
};
export declare const GetPasswordComplexitySettingsRequest: {
    encode(message: GetPasswordComplexitySettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexitySettingsRequest;
    fromJSON(object: any): GetPasswordComplexitySettingsRequest;
    toJSON(message: GetPasswordComplexitySettingsRequest): unknown;
    create(base?: DeepPartial<GetPasswordComplexitySettingsRequest>): GetPasswordComplexitySettingsRequest;
    fromPartial(object: DeepPartial<GetPasswordComplexitySettingsRequest>): GetPasswordComplexitySettingsRequest;
};
export declare const GetPasswordComplexitySettingsResponse: {
    encode(message: GetPasswordComplexitySettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexitySettingsResponse;
    fromJSON(object: any): GetPasswordComplexitySettingsResponse;
    toJSON(message: GetPasswordComplexitySettingsResponse): unknown;
    create(base?: DeepPartial<GetPasswordComplexitySettingsResponse>): GetPasswordComplexitySettingsResponse;
    fromPartial(object: DeepPartial<GetPasswordComplexitySettingsResponse>): GetPasswordComplexitySettingsResponse;
};
export declare const GetBrandingSettingsRequest: {
    encode(message: GetBrandingSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandingSettingsRequest;
    fromJSON(object: any): GetBrandingSettingsRequest;
    toJSON(message: GetBrandingSettingsRequest): unknown;
    create(base?: DeepPartial<GetBrandingSettingsRequest>): GetBrandingSettingsRequest;
    fromPartial(object: DeepPartial<GetBrandingSettingsRequest>): GetBrandingSettingsRequest;
};
export declare const GetBrandingSettingsResponse: {
    encode(message: GetBrandingSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandingSettingsResponse;
    fromJSON(object: any): GetBrandingSettingsResponse;
    toJSON(message: GetBrandingSettingsResponse): unknown;
    create(base?: DeepPartial<GetBrandingSettingsResponse>): GetBrandingSettingsResponse;
    fromPartial(object: DeepPartial<GetBrandingSettingsResponse>): GetBrandingSettingsResponse;
};
export declare const GetDomainSettingsRequest: {
    encode(message: GetDomainSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainSettingsRequest;
    fromJSON(object: any): GetDomainSettingsRequest;
    toJSON(message: GetDomainSettingsRequest): unknown;
    create(base?: DeepPartial<GetDomainSettingsRequest>): GetDomainSettingsRequest;
    fromPartial(object: DeepPartial<GetDomainSettingsRequest>): GetDomainSettingsRequest;
};
export declare const GetDomainSettingsResponse: {
    encode(message: GetDomainSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainSettingsResponse;
    fromJSON(object: any): GetDomainSettingsResponse;
    toJSON(message: GetDomainSettingsResponse): unknown;
    create(base?: DeepPartial<GetDomainSettingsResponse>): GetDomainSettingsResponse;
    fromPartial(object: DeepPartial<GetDomainSettingsResponse>): GetDomainSettingsResponse;
};
export declare const GetLegalAndSupportSettingsRequest: {
    encode(message: GetLegalAndSupportSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLegalAndSupportSettingsRequest;
    fromJSON(object: any): GetLegalAndSupportSettingsRequest;
    toJSON(message: GetLegalAndSupportSettingsRequest): unknown;
    create(base?: DeepPartial<GetLegalAndSupportSettingsRequest>): GetLegalAndSupportSettingsRequest;
    fromPartial(object: DeepPartial<GetLegalAndSupportSettingsRequest>): GetLegalAndSupportSettingsRequest;
};
export declare const GetLegalAndSupportSettingsResponse: {
    encode(message: GetLegalAndSupportSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLegalAndSupportSettingsResponse;
    fromJSON(object: any): GetLegalAndSupportSettingsResponse;
    toJSON(message: GetLegalAndSupportSettingsResponse): unknown;
    create(base?: DeepPartial<GetLegalAndSupportSettingsResponse>): GetLegalAndSupportSettingsResponse;
    fromPartial(object: DeepPartial<GetLegalAndSupportSettingsResponse>): GetLegalAndSupportSettingsResponse;
};
export declare const GetLockoutSettingsRequest: {
    encode(message: GetLockoutSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutSettingsRequest;
    fromJSON(object: any): GetLockoutSettingsRequest;
    toJSON(message: GetLockoutSettingsRequest): unknown;
    create(base?: DeepPartial<GetLockoutSettingsRequest>): GetLockoutSettingsRequest;
    fromPartial(object: DeepPartial<GetLockoutSettingsRequest>): GetLockoutSettingsRequest;
};
export declare const GetLockoutSettingsResponse: {
    encode(message: GetLockoutSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutSettingsResponse;
    fromJSON(object: any): GetLockoutSettingsResponse;
    toJSON(message: GetLockoutSettingsResponse): unknown;
    create(base?: DeepPartial<GetLockoutSettingsResponse>): GetLockoutSettingsResponse;
    fromPartial(object: DeepPartial<GetLockoutSettingsResponse>): GetLockoutSettingsResponse;
};
export declare const GetActiveIdentityProvidersRequest: {
    encode(message: GetActiveIdentityProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetActiveIdentityProvidersRequest;
    fromJSON(object: any): GetActiveIdentityProvidersRequest;
    toJSON(message: GetActiveIdentityProvidersRequest): unknown;
    create(base?: DeepPartial<GetActiveIdentityProvidersRequest>): GetActiveIdentityProvidersRequest;
    fromPartial(object: DeepPartial<GetActiveIdentityProvidersRequest>): GetActiveIdentityProvidersRequest;
};
export declare const GetActiveIdentityProvidersResponse: {
    encode(message: GetActiveIdentityProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetActiveIdentityProvidersResponse;
    fromJSON(object: any): GetActiveIdentityProvidersResponse;
    toJSON(message: GetActiveIdentityProvidersResponse): unknown;
    create(base?: DeepPartial<GetActiveIdentityProvidersResponse>): GetActiveIdentityProvidersResponse;
    fromPartial(object: DeepPartial<GetActiveIdentityProvidersResponse>): GetActiveIdentityProvidersResponse;
};
export declare const GetGeneralSettingsRequest: {
    encode(_: GetGeneralSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGeneralSettingsRequest;
    fromJSON(_: any): GetGeneralSettingsRequest;
    toJSON(_: GetGeneralSettingsRequest): unknown;
    create(base?: DeepPartial<GetGeneralSettingsRequest>): GetGeneralSettingsRequest;
    fromPartial(_: DeepPartial<GetGeneralSettingsRequest>): GetGeneralSettingsRequest;
};
export declare const GetGeneralSettingsResponse: {
    encode(message: GetGeneralSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGeneralSettingsResponse;
    fromJSON(object: any): GetGeneralSettingsResponse;
    toJSON(message: GetGeneralSettingsResponse): unknown;
    create(base?: DeepPartial<GetGeneralSettingsResponse>): GetGeneralSettingsResponse;
    fromPartial(object: DeepPartial<GetGeneralSettingsResponse>): GetGeneralSettingsResponse;
};
export type SettingsServiceDefinition = typeof SettingsServiceDefinition;
export declare const SettingsServiceDefinition: {
    readonly name: "SettingsService";
    readonly fullName: "zitadel.settings.v2beta.SettingsService";
    readonly methods: {
        /** Get basic information over the instance */
        readonly getGeneralSettings: {
            readonly name: "GetGeneralSettings";
            readonly requestType: {
                encode(_: GetGeneralSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetGeneralSettingsRequest;
                fromJSON(_: any): GetGeneralSettingsRequest;
                toJSON(_: GetGeneralSettingsRequest): unknown;
                create(base?: DeepPartial<GetGeneralSettingsRequest>): GetGeneralSettingsRequest;
                fromPartial(_: DeepPartial<GetGeneralSettingsRequest>): GetGeneralSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetGeneralSettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetGeneralSettingsResponse;
                fromJSON(object: any): GetGeneralSettingsResponse;
                toJSON(message: GetGeneralSettingsResponse): unknown;
                create(base?: DeepPartial<GetGeneralSettingsResponse>): GetGeneralSettingsResponse;
                fromPartial(object: DeepPartial<GetGeneralSettingsResponse>): GetGeneralSettingsResponse;
            };
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
            readonly requestType: {
                encode(message: GetLoginSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginSettingsRequest;
                fromJSON(object: any): GetLoginSettingsRequest;
                toJSON(message: GetLoginSettingsRequest): unknown;
                create(base?: DeepPartial<GetLoginSettingsRequest>): GetLoginSettingsRequest;
                fromPartial(object: DeepPartial<GetLoginSettingsRequest>): GetLoginSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLoginSettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginSettingsResponse;
                fromJSON(object: any): GetLoginSettingsResponse;
                toJSON(message: GetLoginSettingsResponse): unknown;
                create(base?: DeepPartial<GetLoginSettingsResponse>): GetLoginSettingsResponse;
                fromPartial(object: DeepPartial<GetLoginSettingsResponse>): GetLoginSettingsResponse;
            };
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
            readonly requestType: {
                encode(message: GetActiveIdentityProvidersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetActiveIdentityProvidersRequest;
                fromJSON(object: any): GetActiveIdentityProvidersRequest;
                toJSON(message: GetActiveIdentityProvidersRequest): unknown;
                create(base?: DeepPartial<GetActiveIdentityProvidersRequest>): GetActiveIdentityProvidersRequest;
                fromPartial(object: DeepPartial<GetActiveIdentityProvidersRequest>): GetActiveIdentityProvidersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetActiveIdentityProvidersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetActiveIdentityProvidersResponse;
                fromJSON(object: any): GetActiveIdentityProvidersResponse;
                toJSON(message: GetActiveIdentityProvidersResponse): unknown;
                create(base?: DeepPartial<GetActiveIdentityProvidersResponse>): GetActiveIdentityProvidersResponse;
                fromPartial(object: DeepPartial<GetActiveIdentityProvidersResponse>): GetActiveIdentityProvidersResponse;
            };
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
            readonly requestType: {
                encode(message: GetPasswordComplexitySettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexitySettingsRequest;
                fromJSON(object: any): GetPasswordComplexitySettingsRequest;
                toJSON(message: GetPasswordComplexitySettingsRequest): unknown;
                create(base?: DeepPartial<GetPasswordComplexitySettingsRequest>): GetPasswordComplexitySettingsRequest;
                fromPartial(object: DeepPartial<GetPasswordComplexitySettingsRequest>): GetPasswordComplexitySettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPasswordComplexitySettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexitySettingsResponse;
                fromJSON(object: any): GetPasswordComplexitySettingsResponse;
                toJSON(message: GetPasswordComplexitySettingsResponse): unknown;
                create(base?: DeepPartial<GetPasswordComplexitySettingsResponse>): GetPasswordComplexitySettingsResponse;
                fromPartial(object: DeepPartial<GetPasswordComplexitySettingsResponse>): GetPasswordComplexitySettingsResponse;
            };
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
            readonly requestType: {
                encode(message: GetBrandingSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandingSettingsRequest;
                fromJSON(object: any): GetBrandingSettingsRequest;
                toJSON(message: GetBrandingSettingsRequest): unknown;
                create(base?: DeepPartial<GetBrandingSettingsRequest>): GetBrandingSettingsRequest;
                fromPartial(object: DeepPartial<GetBrandingSettingsRequest>): GetBrandingSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetBrandingSettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandingSettingsResponse;
                fromJSON(object: any): GetBrandingSettingsResponse;
                toJSON(message: GetBrandingSettingsResponse): unknown;
                create(base?: DeepPartial<GetBrandingSettingsResponse>): GetBrandingSettingsResponse;
                fromPartial(object: DeepPartial<GetBrandingSettingsResponse>): GetBrandingSettingsResponse;
            };
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
            readonly requestType: {
                encode(message: GetDomainSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainSettingsRequest;
                fromJSON(object: any): GetDomainSettingsRequest;
                toJSON(message: GetDomainSettingsRequest): unknown;
                create(base?: DeepPartial<GetDomainSettingsRequest>): GetDomainSettingsRequest;
                fromPartial(object: DeepPartial<GetDomainSettingsRequest>): GetDomainSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDomainSettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainSettingsResponse;
                fromJSON(object: any): GetDomainSettingsResponse;
                toJSON(message: GetDomainSettingsResponse): unknown;
                create(base?: DeepPartial<GetDomainSettingsResponse>): GetDomainSettingsResponse;
                fromPartial(object: DeepPartial<GetDomainSettingsResponse>): GetDomainSettingsResponse;
            };
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
            readonly requestType: {
                encode(message: GetLegalAndSupportSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLegalAndSupportSettingsRequest;
                fromJSON(object: any): GetLegalAndSupportSettingsRequest;
                toJSON(message: GetLegalAndSupportSettingsRequest): unknown;
                create(base?: DeepPartial<GetLegalAndSupportSettingsRequest>): GetLegalAndSupportSettingsRequest;
                fromPartial(object: DeepPartial<GetLegalAndSupportSettingsRequest>): GetLegalAndSupportSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLegalAndSupportSettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLegalAndSupportSettingsResponse;
                fromJSON(object: any): GetLegalAndSupportSettingsResponse;
                toJSON(message: GetLegalAndSupportSettingsResponse): unknown;
                create(base?: DeepPartial<GetLegalAndSupportSettingsResponse>): GetLegalAndSupportSettingsResponse;
                fromPartial(object: DeepPartial<GetLegalAndSupportSettingsResponse>): GetLegalAndSupportSettingsResponse;
            };
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
            readonly requestType: {
                encode(message: GetLockoutSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutSettingsRequest;
                fromJSON(object: any): GetLockoutSettingsRequest;
                toJSON(message: GetLockoutSettingsRequest): unknown;
                create(base?: DeepPartial<GetLockoutSettingsRequest>): GetLockoutSettingsRequest;
                fromPartial(object: DeepPartial<GetLockoutSettingsRequest>): GetLockoutSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLockoutSettingsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutSettingsResponse;
                fromJSON(object: any): GetLockoutSettingsResponse;
                toJSON(message: GetLockoutSettingsResponse): unknown;
                create(base?: DeepPartial<GetLockoutSettingsResponse>): GetLockoutSettingsResponse;
                fromPartial(object: DeepPartial<GetLockoutSettingsResponse>): GetLockoutSettingsResponse;
            };
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
    /** Get the current active branding settings */
    getBrandingSettings(request: GetBrandingSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetBrandingSettingsResponse>>;
    /** Get the domain settings */
    getDomainSettings(request: GetDomainSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDomainSettingsResponse>>;
    /** Get the legal and support settings */
    getLegalAndSupportSettings(request: GetLegalAndSupportSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLegalAndSupportSettingsResponse>>;
    /** Get the lockout settings */
    getLockoutSettings(request: GetLockoutSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLockoutSettingsResponse>>;
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
    /** Get the current active branding settings */
    getBrandingSettings(request: DeepPartial<GetBrandingSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetBrandingSettingsResponse>;
    /** Get the domain settings */
    getDomainSettings(request: DeepPartial<GetDomainSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDomainSettingsResponse>;
    /** Get the legal and support settings */
    getLegalAndSupportSettings(request: DeepPartial<GetLegalAndSupportSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLegalAndSupportSettingsResponse>;
    /** Get the lockout settings */
    getLockoutSettings(request: DeepPartial<GetLockoutSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLockoutSettingsResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
