"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceFeatureToJSON = exports.instanceFeatureFromJSON = exports.InstanceFeature = exports.protobufPackage = void 0;
exports.protobufPackage = "zitadel.feature.v1";
var InstanceFeature;
(function (InstanceFeature) {
    InstanceFeature[InstanceFeature["INSTANCE_FEATURE_UNSPECIFIED"] = 0] = "INSTANCE_FEATURE_UNSPECIFIED";
    InstanceFeature[InstanceFeature["INSTANCE_FEATURE_LOGIN_DEFAULT_ORG"] = 1] = "INSTANCE_FEATURE_LOGIN_DEFAULT_ORG";
    InstanceFeature[InstanceFeature["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceFeature || (exports.InstanceFeature = InstanceFeature = {}));
function instanceFeatureFromJSON(object) {
    switch (object) {
        case 0:
        case "INSTANCE_FEATURE_UNSPECIFIED":
            return InstanceFeature.INSTANCE_FEATURE_UNSPECIFIED;
        case 1:
        case "INSTANCE_FEATURE_LOGIN_DEFAULT_ORG":
            return InstanceFeature.INSTANCE_FEATURE_LOGIN_DEFAULT_ORG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InstanceFeature.UNRECOGNIZED;
    }
}
exports.instanceFeatureFromJSON = instanceFeatureFromJSON;
function instanceFeatureToJSON(object) {
    switch (object) {
        case InstanceFeature.INSTANCE_FEATURE_UNSPECIFIED:
            return "INSTANCE_FEATURE_UNSPECIFIED";
        case InstanceFeature.INSTANCE_FEATURE_LOGIN_DEFAULT_ORG:
            return "INSTANCE_FEATURE_LOGIN_DEFAULT_ORG";
        case InstanceFeature.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.instanceFeatureToJSON = instanceFeatureToJSON;
