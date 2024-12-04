export declare const protobufPackage = "zitadel.settings.v2";
export declare enum ResourceOwnerType {
    RESOURCE_OWNER_TYPE_UNSPECIFIED = 0,
    RESOURCE_OWNER_TYPE_INSTANCE = 1,
    RESOURCE_OWNER_TYPE_ORG = 2,
    UNRECOGNIZED = -1
}
export declare function resourceOwnerTypeFromJSON(object: any): ResourceOwnerType;
export declare function resourceOwnerTypeToJSON(object: ResourceOwnerType): string;
