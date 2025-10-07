import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { GetInstanceFeaturesRequest, GetInstanceFeaturesResponse, ResetInstanceFeaturesRequest, ResetInstanceFeaturesResponse, SetInstanceFeaturesRequest, SetInstanceFeaturesResponse } from "./instance.js";
import { GetOrganizationFeaturesRequest, GetOrganizationFeaturesResponse, ResetOrganizationFeaturesRequest, ResetOrganizationFeaturesResponse, SetOrganizationFeaturesRequest, SetOrganizationFeaturesResponse } from "./organization.js";
import { GetSystemFeaturesRequest, GetSystemFeaturesResponse, ResetSystemFeaturesRequest, ResetSystemFeaturesResponse, SetSystemFeaturesRequest, SetSystemFeaturesResponse } from "./system.js";
import { GetUserFeaturesRequest, GetUserFeaturesResponse, ResetUserFeaturesRequest, ResetUserFeaturesResponse, SetUserFeatureRequest, SetUserFeaturesResponse } from "./user.js";
export declare const protobufPackage = "zitadel.feature.v2";
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
    readonly fullName: "zitadel.feature.v2.FeatureService";
    readonly methods: {
        /**
         * Set System Features
         *
         * Configure and set features that apply to the complete system. Only fields present in the request are set or unset.
         *
         * Required permissions:
         *  - system.feature.write
         */
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
        /**
         * Reset System Features
         *
         * Deletes ALL configured features for the system, reverting the behaviors to system defaults.
         *
         * Required permissions:
         *  - system.feature.delete
         */
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
        /**
         * Get System Features
         *
         * Returns all configured features for the system. Unset fields mean the feature is the current system default.
         *
         * Required permissions:
         *  - none
         */
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
        /**
         * Set Instance Features
         *
         * Configure and set features that apply to a complete instance. Only fields present in the request are set or unset.
         *
         * Required permissions:
         *  - iam.feature.write
         */
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
        /**
         * Reset Instance Features
         *
         * Deletes ALL configured features for an instance, reverting the behaviors to system defaults.
         *
         * Required permissions:
         *  - iam.feature.delete
         */
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
        /**
         * Get Instance Features
         *
         * Returns all configured features for an instance. Unset fields mean the feature is the current system default.
         *
         * Required permissions:
         *  - none
         */
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
        /**
         * Set Organization Features
         *
         * Configure and set features that apply to a complete instance. Only fields present in the request are set or unset.
         *
         * Required permissions:
         *  - org.feature.write
         */
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
        /**
         * Reset Organization Features
         *
         * Deletes ALL configured features for an organization, reverting the behaviors to instance defaults.
         *
         * Required permissions:
         *  - org.feature.delete
         */
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
        /**
         * Get Organization Features
         *
         * Returns all configured features for an organization. Unset fields mean the feature is the current instance default.
         *
         * Required permissions:
         *  - org.feature.read
         *  - no permission required for the organization the user belongs to
         */
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
        /**
         * Set User Features
         *
         * Configure and set features that apply to an user. Only fields present in the request are set or unset.
         *
         * Required permissions:
         *  - user.feature.write
         */
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
        /**
         * Reset User Features
         *
         * Deletes ALL configured features for a user, reverting the behaviors to organization defaults.
         *
         * Required permissions:
         *  - user.feature.delete
         */
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
        /**
         * Get User Features
         *
         * Returns all configured features for a user. Unset fields mean the feature is the current organization default.
         *
         * Required permissions:
         *  - user.feature.read
         *  - no permission required for the own user
         */
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
    /**
     * Set System Features
     *
     * Configure and set features that apply to the complete system. Only fields present in the request are set or unset.
     *
     * Required permissions:
     *  - system.feature.write
     */
    setSystemFeatures(request: SetSystemFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetSystemFeaturesResponse>>;
    /**
     * Reset System Features
     *
     * Deletes ALL configured features for the system, reverting the behaviors to system defaults.
     *
     * Required permissions:
     *  - system.feature.delete
     */
    resetSystemFeatures(request: ResetSystemFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetSystemFeaturesResponse>>;
    /**
     * Get System Features
     *
     * Returns all configured features for the system. Unset fields mean the feature is the current system default.
     *
     * Required permissions:
     *  - none
     */
    getSystemFeatures(request: GetSystemFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSystemFeaturesResponse>>;
    /**
     * Set Instance Features
     *
     * Configure and set features that apply to a complete instance. Only fields present in the request are set or unset.
     *
     * Required permissions:
     *  - iam.feature.write
     */
    setInstanceFeatures(request: SetInstanceFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetInstanceFeaturesResponse>>;
    /**
     * Reset Instance Features
     *
     * Deletes ALL configured features for an instance, reverting the behaviors to system defaults.
     *
     * Required permissions:
     *  - iam.feature.delete
     */
    resetInstanceFeatures(request: ResetInstanceFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetInstanceFeaturesResponse>>;
    /**
     * Get Instance Features
     *
     * Returns all configured features for an instance. Unset fields mean the feature is the current system default.
     *
     * Required permissions:
     *  - none
     */
    getInstanceFeatures(request: GetInstanceFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetInstanceFeaturesResponse>>;
    /**
     * Set Organization Features
     *
     * Configure and set features that apply to a complete instance. Only fields present in the request are set or unset.
     *
     * Required permissions:
     *  - org.feature.write
     */
    setOrganizationFeatures(request: SetOrganizationFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetOrganizationFeaturesResponse>>;
    /**
     * Reset Organization Features
     *
     * Deletes ALL configured features for an organization, reverting the behaviors to instance defaults.
     *
     * Required permissions:
     *  - org.feature.delete
     */
    resetOrganizationFeatures(request: ResetOrganizationFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetOrganizationFeaturesResponse>>;
    /**
     * Get Organization Features
     *
     * Returns all configured features for an organization. Unset fields mean the feature is the current instance default.
     *
     * Required permissions:
     *  - org.feature.read
     *  - no permission required for the organization the user belongs to
     */
    getOrganizationFeatures(request: GetOrganizationFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrganizationFeaturesResponse>>;
    /**
     * Set User Features
     *
     * Configure and set features that apply to an user. Only fields present in the request are set or unset.
     *
     * Required permissions:
     *  - user.feature.write
     */
    setUserFeatures(request: SetUserFeatureRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetUserFeaturesResponse>>;
    /**
     * Reset User Features
     *
     * Deletes ALL configured features for a user, reverting the behaviors to organization defaults.
     *
     * Required permissions:
     *  - user.feature.delete
     */
    resetUserFeatures(request: ResetUserFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetUserFeaturesResponse>>;
    /**
     * Get User Features
     *
     * Returns all configured features for a user. Unset fields mean the feature is the current organization default.
     *
     * Required permissions:
     *  - user.feature.read
     *  - no permission required for the own user
     */
    getUserFeatures(request: GetUserFeaturesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserFeaturesResponse>>;
}
export interface FeatureServiceClient<CallOptionsExt = {}> {
    /**
     * Set System Features
     *
     * Configure and set features that apply to the complete system. Only fields present in the request are set or unset.
     *
     * Required permissions:
     *  - system.feature.write
     */
    setSystemFeatures(request: DeepPartial<SetSystemFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<SetSystemFeaturesResponse>;
    /**
     * Reset System Features
     *
     * Deletes ALL configured features for the system, reverting the behaviors to system defaults.
     *
     * Required permissions:
     *  - system.feature.delete
     */
    resetSystemFeatures(request: DeepPartial<ResetSystemFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetSystemFeaturesResponse>;
    /**
     * Get System Features
     *
     * Returns all configured features for the system. Unset fields mean the feature is the current system default.
     *
     * Required permissions:
     *  - none
     */
    getSystemFeatures(request: DeepPartial<GetSystemFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSystemFeaturesResponse>;
    /**
     * Set Instance Features
     *
     * Configure and set features that apply to a complete instance. Only fields present in the request are set or unset.
     *
     * Required permissions:
     *  - iam.feature.write
     */
    setInstanceFeatures(request: DeepPartial<SetInstanceFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<SetInstanceFeaturesResponse>;
    /**
     * Reset Instance Features
     *
     * Deletes ALL configured features for an instance, reverting the behaviors to system defaults.
     *
     * Required permissions:
     *  - iam.feature.delete
     */
    resetInstanceFeatures(request: DeepPartial<ResetInstanceFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetInstanceFeaturesResponse>;
    /**
     * Get Instance Features
     *
     * Returns all configured features for an instance. Unset fields mean the feature is the current system default.
     *
     * Required permissions:
     *  - none
     */
    getInstanceFeatures(request: DeepPartial<GetInstanceFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetInstanceFeaturesResponse>;
    /**
     * Set Organization Features
     *
     * Configure and set features that apply to a complete instance. Only fields present in the request are set or unset.
     *
     * Required permissions:
     *  - org.feature.write
     */
    setOrganizationFeatures(request: DeepPartial<SetOrganizationFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<SetOrganizationFeaturesResponse>;
    /**
     * Reset Organization Features
     *
     * Deletes ALL configured features for an organization, reverting the behaviors to instance defaults.
     *
     * Required permissions:
     *  - org.feature.delete
     */
    resetOrganizationFeatures(request: DeepPartial<ResetOrganizationFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetOrganizationFeaturesResponse>;
    /**
     * Get Organization Features
     *
     * Returns all configured features for an organization. Unset fields mean the feature is the current instance default.
     *
     * Required permissions:
     *  - org.feature.read
     *  - no permission required for the organization the user belongs to
     */
    getOrganizationFeatures(request: DeepPartial<GetOrganizationFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrganizationFeaturesResponse>;
    /**
     * Set User Features
     *
     * Configure and set features that apply to an user. Only fields present in the request are set or unset.
     *
     * Required permissions:
     *  - user.feature.write
     */
    setUserFeatures(request: DeepPartial<SetUserFeatureRequest>, options?: CallOptions & CallOptionsExt): Promise<SetUserFeaturesResponse>;
    /**
     * Reset User Features
     *
     * Deletes ALL configured features for a user, reverting the behaviors to organization defaults.
     *
     * Required permissions:
     *  - user.feature.delete
     */
    resetUserFeatures(request: DeepPartial<ResetUserFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetUserFeaturesResponse>;
    /**
     * Get User Features
     *
     * Returns all configured features for a user. Unset fields mean the feature is the current organization default.
     *
     * Required permissions:
     *  - user.feature.read
     *  - no permission required for the own user
     */
    getUserFeatures(request: DeepPartial<GetUserFeaturesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserFeaturesResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
