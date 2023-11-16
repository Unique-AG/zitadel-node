"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceOwnerTypeToJSON = exports.resourceOwnerTypeFromJSON = exports.ResourceOwnerType = exports.protobufPackage = void 0;
exports.protobufPackage = "zitadel.settings.v2beta";
var ResourceOwnerType;
(function (ResourceOwnerType) {
    ResourceOwnerType[ResourceOwnerType["RESOURCE_OWNER_TYPE_UNSPECIFIED"] = 0] = "RESOURCE_OWNER_TYPE_UNSPECIFIED";
    ResourceOwnerType[ResourceOwnerType["RESOURCE_OWNER_TYPE_INSTANCE"] = 1] = "RESOURCE_OWNER_TYPE_INSTANCE";
    ResourceOwnerType[ResourceOwnerType["RESOURCE_OWNER_TYPE_ORG"] = 2] = "RESOURCE_OWNER_TYPE_ORG";
    ResourceOwnerType[ResourceOwnerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResourceOwnerType || (exports.ResourceOwnerType = ResourceOwnerType = {}));
function resourceOwnerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESOURCE_OWNER_TYPE_UNSPECIFIED":
            return ResourceOwnerType.RESOURCE_OWNER_TYPE_UNSPECIFIED;
        case 1:
        case "RESOURCE_OWNER_TYPE_INSTANCE":
            return ResourceOwnerType.RESOURCE_OWNER_TYPE_INSTANCE;
        case 2:
        case "RESOURCE_OWNER_TYPE_ORG":
            return ResourceOwnerType.RESOURCE_OWNER_TYPE_ORG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResourceOwnerType.UNRECOGNIZED;
    }
}
exports.resourceOwnerTypeFromJSON = resourceOwnerTypeFromJSON;
function resourceOwnerTypeToJSON(object) {
    switch (object) {
        case ResourceOwnerType.RESOURCE_OWNER_TYPE_UNSPECIFIED:
            return "RESOURCE_OWNER_TYPE_UNSPECIFIED";
        case ResourceOwnerType.RESOURCE_OWNER_TYPE_INSTANCE:
            return "RESOURCE_OWNER_TYPE_INSTANCE";
        case ResourceOwnerType.RESOURCE_OWNER_TYPE_ORG:
            return "RESOURCE_OWNER_TYPE_ORG";
        case ResourceOwnerType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.resourceOwnerTypeToJSON = resourceOwnerTypeToJSON;
