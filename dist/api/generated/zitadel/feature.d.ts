export declare const protobufPackage = "zitadel.feature.v1";
export declare enum InstanceFeature {
    INSTANCE_FEATURE_UNSPECIFIED = 0,
    INSTANCE_FEATURE_LOGIN_DEFAULT_ORG = 1,
    UNRECOGNIZED = -1
}
export declare function instanceFeatureFromJSON(object: any): InstanceFeature;
export declare function instanceFeatureToJSON(object: InstanceFeature): string;
