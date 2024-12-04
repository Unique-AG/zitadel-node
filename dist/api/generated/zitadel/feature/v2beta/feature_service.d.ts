import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { GetInstanceFeaturesRequest, GetInstanceFeaturesResponse, ResetInstanceFeaturesRequest, ResetInstanceFeaturesResponse, SetInstanceFeaturesRequest, SetInstanceFeaturesResponse } from "./instance.js";
import { GetOrganizationFeaturesRequest, GetOrganizationFeaturesResponse, ResetOrganizationFeaturesRequest, ResetOrganizationFeaturesResponse, SetOrganizationFeaturesRequest, SetOrganizationFeaturesResponse } from "./organization.js";
import { GetSystemFeaturesRequest, GetSystemFeaturesResponse, ResetSystemFeaturesRequest, ResetSystemFeaturesResponse, SetSystemFeaturesRequest, SetSystemFeaturesResponse } from "./system.js";
import { GetUserFeaturesRequest, GetUserFeaturesResponse, ResetUserFeaturesRequest, ResetUserFeaturesResponse, SetUserFeatureRequest, SetUserFeaturesResponse } from "./user.js";
export declare const protobufPackage = "zitadel.feature.v2beta";
/**
 * FeatureService is intended to manage features for ZITADEL.
 *
 * Feature settings that are available on multiple "levels", such as instance and organization.
 * The higher level (instance) acts as a default for the lower level (organization).
 * When a feature is set on multiple levels, the lower level takes precedence.
 *
 * Features can be experimental where ZITADEL will assume a sane default, such as disabled.
 * When over time confidence in such a feature grows, ZITADEL can default to enabling the feature.
 * As a final step we might choose to always enable a feature and remove the setting from this API,
 * reserving the proto field number. Such removal is not considered a breaking change.
 * Setting a removed field will effectively result in a no-op.
 */
export type FeatureServiceDefinition = typeof FeatureServiceDefinition;
export declare const FeatureServiceDefinition: {
    readonly name: "FeatureService";
    readonly fullName: "zitadel.feature.v2beta.FeatureService";
    readonly methods: {
        readonly setSystemFeatures: {
            readonly name: "SetSystemFeatures";
            readonly requestType: import("./system.js").MessageFns<SetSystemFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./system.js").MessageFns<SetSystemFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetSystemFeatures: {
            readonly name: "ResetSystemFeatures";
            readonly requestType: import("./system.js").MessageFns<ResetSystemFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./system.js").MessageFns<ResetSystemFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSystemFeatures: {
            readonly name: "GetSystemFeatures";
            readonly requestType: import("./system.js").MessageFns<GetSystemFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./system.js").MessageFns<GetSystemFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setInstanceFeatures: {
            readonly name: "SetInstanceFeatures";
            readonly requestType: import("./instance.js").MessageFns<SetInstanceFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./instance.js").MessageFns<SetInstanceFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetInstanceFeatures: {
            readonly name: "ResetInstanceFeatures";
            readonly requestType: import("./instance.js").MessageFns<ResetInstanceFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./instance.js").MessageFns<ResetInstanceFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getInstanceFeatures: {
            readonly name: "GetInstanceFeatures";
            readonly requestType: import("./instance.js").MessageFns<GetInstanceFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./instance.js").MessageFns<GetInstanceFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setOrganizationFeatures: {
            readonly name: "SetOrganizationFeatures";
            readonly requestType: import("./organization.js").MessageFns<SetOrganizationFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./organization.js").MessageFns<SetOrganizationFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetOrganizationFeatures: {
            readonly name: "ResetOrganizationFeatures";
            readonly requestType: import("./organization.js").MessageFns<ResetOrganizationFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./organization.js").MessageFns<ResetOrganizationFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrganizationFeatures: {
            readonly name: "GetOrganizationFeatures";
            readonly requestType: import("./organization.js").MessageFns<GetOrganizationFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./organization.js").MessageFns<GetOrganizationFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setUserFeatures: {
            readonly name: "SetUserFeatures";
            readonly requestType: import("./user.js").MessageFns<SetUserFeatureRequest>;
            readonly requestStream: false;
            readonly responseType: import("./user.js").MessageFns<SetUserFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetUserFeatures: {
            readonly name: "ResetUserFeatures";
            readonly requestType: import("./user.js").MessageFns<ResetUserFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./user.js").MessageFns<ResetUserFeaturesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserFeatures: {
            readonly name: "GetUserFeatures";
            readonly requestType: import("./user.js").MessageFns<GetUserFeaturesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./user.js").MessageFns<GetUserFeaturesResponse>;
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
export interface FeatureServiceImplementation<CallContextExt = {}> {
    setSystemFeatures(request: SetSystemFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetSystemFeaturesResponse>>;
    resetSystemFeatures(request: ResetSystemFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetSystemFeaturesResponse>>;
    getSystemFeatures(request: GetSystemFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSystemFeaturesResponse>>;
    setInstanceFeatures(request: SetInstanceFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetInstanceFeaturesResponse>>;
    resetInstanceFeatures(request: ResetInstanceFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetInstanceFeaturesResponse>>;
    getInstanceFeatures(request: GetInstanceFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetInstanceFeaturesResponse>>;
    setOrganizationFeatures(request: SetOrganizationFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetOrganizationFeaturesResponse>>;
    resetOrganizationFeatures(request: ResetOrganizationFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetOrganizationFeaturesResponse>>;
    getOrganizationFeatures(request: GetOrganizationFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrganizationFeaturesResponse>>;
    setUserFeatures(request: SetUserFeatureRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetUserFeaturesResponse>>;
    resetUserFeatures(request: ResetUserFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetUserFeaturesResponse>>;
    getUserFeatures(request: GetUserFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserFeaturesResponse>>;
}
export interface FeatureServiceClient<CallOptionsExt = {}> {
    setSystemFeatures(request: DeepPartial<SetSystemFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<SetSystemFeaturesResponse>;
    resetSystemFeatures(request: DeepPartial<ResetSystemFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetSystemFeaturesResponse>;
    getSystemFeatures(request: DeepPartial<GetSystemFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSystemFeaturesResponse>;
    setInstanceFeatures(request: DeepPartial<SetInstanceFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<SetInstanceFeaturesResponse>;
    resetInstanceFeatures(request: DeepPartial<ResetInstanceFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetInstanceFeaturesResponse>;
    getInstanceFeatures(request: DeepPartial<GetInstanceFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetInstanceFeaturesResponse>;
    setOrganizationFeatures(request: DeepPartial<SetOrganizationFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<SetOrganizationFeaturesResponse>;
    resetOrganizationFeatures(request: DeepPartial<ResetOrganizationFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetOrganizationFeaturesResponse>;
    getOrganizationFeatures(request: DeepPartial<GetOrganizationFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrganizationFeaturesResponse>;
    setUserFeatures(request: DeepPartial<SetUserFeatureRequest>, options?: CallOptions & CallOptionsExt): Promise<SetUserFeaturesResponse>;
    resetUserFeatures(request: DeepPartial<ResetUserFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetUserFeaturesResponse>;
    getUserFeatures(request: DeepPartial<GetUserFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserFeaturesResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
