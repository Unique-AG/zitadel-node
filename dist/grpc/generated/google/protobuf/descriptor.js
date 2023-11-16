"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedCodeInfo_Annotation_Semantic = exports.featureSet_JsonFormatToJSON = exports.featureSet_JsonFormatFromJSON = exports.FeatureSet_JsonFormat = exports.featureSet_MessageEncodingToJSON = exports.featureSet_MessageEncodingFromJSON = exports.FeatureSet_MessageEncoding = exports.featureSet_Utf8ValidationToJSON = exports.featureSet_Utf8ValidationFromJSON = exports.FeatureSet_Utf8Validation = exports.featureSet_RepeatedFieldEncodingToJSON = exports.featureSet_RepeatedFieldEncodingFromJSON = exports.FeatureSet_RepeatedFieldEncoding = exports.featureSet_EnumTypeToJSON = exports.featureSet_EnumTypeFromJSON = exports.FeatureSet_EnumType = exports.featureSet_FieldPresenceToJSON = exports.featureSet_FieldPresenceFromJSON = exports.FeatureSet_FieldPresence = exports.methodOptions_IdempotencyLevelToJSON = exports.methodOptions_IdempotencyLevelFromJSON = exports.MethodOptions_IdempotencyLevel = exports.fieldOptions_OptionTargetTypeToJSON = exports.fieldOptions_OptionTargetTypeFromJSON = exports.FieldOptions_OptionTargetType = exports.fieldOptions_OptionRetentionToJSON = exports.fieldOptions_OptionRetentionFromJSON = exports.FieldOptions_OptionRetention = exports.fieldOptions_JSTypeToJSON = exports.fieldOptions_JSTypeFromJSON = exports.FieldOptions_JSType = exports.fieldOptions_CTypeToJSON = exports.fieldOptions_CTypeFromJSON = exports.FieldOptions_CType = exports.fileOptions_OptimizeModeToJSON = exports.fileOptions_OptimizeModeFromJSON = exports.FileOptions_OptimizeMode = exports.fieldDescriptorProto_LabelToJSON = exports.fieldDescriptorProto_LabelFromJSON = exports.FieldDescriptorProto_Label = exports.fieldDescriptorProto_TypeToJSON = exports.fieldDescriptorProto_TypeFromJSON = exports.FieldDescriptorProto_Type = exports.extensionRangeOptions_VerificationStateToJSON = exports.extensionRangeOptions_VerificationStateFromJSON = exports.ExtensionRangeOptions_VerificationState = exports.editionToJSON = exports.editionFromJSON = exports.Edition = exports.protobufPackage = void 0;
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.FeatureSetDefaults_FeatureSetEditionDefault = exports.FeatureSetDefaults = exports.FeatureSet = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions_EditionDefault = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions_Declaration = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.generatedCodeInfo_Annotation_SemanticToJSON = exports.generatedCodeInfo_Annotation_SemanticFromJSON = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
/** The full set of known editions. */
var Edition;
(function (Edition) {
    /** EDITION_UNKNOWN - A placeholder for an unknown edition value. */
    Edition[Edition["EDITION_UNKNOWN"] = 0] = "EDITION_UNKNOWN";
    /**
     * EDITION_PROTO2 - Legacy syntax "editions".  These pre-date editions, but behave much like
     * distinct editions.  These can't be used to specify the edition of proto
     * files, but feature definitions must supply proto2/proto3 defaults for
     * backwards compatibility.
     */
    Edition[Edition["EDITION_PROTO2"] = 998] = "EDITION_PROTO2";
    Edition[Edition["EDITION_PROTO3"] = 999] = "EDITION_PROTO3";
    /**
     * EDITION_2023 - Editions that have been released.  The specific values are arbitrary and
     * should not be depended on, but they will always be time-ordered for easy
     * comparison.
     */
    Edition[Edition["EDITION_2023"] = 1000] = "EDITION_2023";
    /**
     * EDITION_1_TEST_ONLY - Placeholder editions for testing feature resolution.  These should not be
     * used or relyed on outside of tests.
     */
    Edition[Edition["EDITION_1_TEST_ONLY"] = 1] = "EDITION_1_TEST_ONLY";
    Edition[Edition["EDITION_2_TEST_ONLY"] = 2] = "EDITION_2_TEST_ONLY";
    Edition[Edition["EDITION_99997_TEST_ONLY"] = 99997] = "EDITION_99997_TEST_ONLY";
    Edition[Edition["EDITION_99998_TEST_ONLY"] = 99998] = "EDITION_99998_TEST_ONLY";
    Edition[Edition["EDITION_99999_TEST_ONLY"] = 99999] = "EDITION_99999_TEST_ONLY";
    Edition[Edition["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Edition || (exports.Edition = Edition = {}));
function editionFromJSON(object) {
    switch (object) {
        case 0:
        case "EDITION_UNKNOWN":
            return Edition.EDITION_UNKNOWN;
        case 998:
        case "EDITION_PROTO2":
            return Edition.EDITION_PROTO2;
        case 999:
        case "EDITION_PROTO3":
            return Edition.EDITION_PROTO3;
        case 1000:
        case "EDITION_2023":
            return Edition.EDITION_2023;
        case 1:
        case "EDITION_1_TEST_ONLY":
            return Edition.EDITION_1_TEST_ONLY;
        case 2:
        case "EDITION_2_TEST_ONLY":
            return Edition.EDITION_2_TEST_ONLY;
        case 99997:
        case "EDITION_99997_TEST_ONLY":
            return Edition.EDITION_99997_TEST_ONLY;
        case 99998:
        case "EDITION_99998_TEST_ONLY":
            return Edition.EDITION_99998_TEST_ONLY;
        case 99999:
        case "EDITION_99999_TEST_ONLY":
            return Edition.EDITION_99999_TEST_ONLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Edition.UNRECOGNIZED;
    }
}
exports.editionFromJSON = editionFromJSON;
function editionToJSON(object) {
    switch (object) {
        case Edition.EDITION_UNKNOWN:
            return "EDITION_UNKNOWN";
        case Edition.EDITION_PROTO2:
            return "EDITION_PROTO2";
        case Edition.EDITION_PROTO3:
            return "EDITION_PROTO3";
        case Edition.EDITION_2023:
            return "EDITION_2023";
        case Edition.EDITION_1_TEST_ONLY:
            return "EDITION_1_TEST_ONLY";
        case Edition.EDITION_2_TEST_ONLY:
            return "EDITION_2_TEST_ONLY";
        case Edition.EDITION_99997_TEST_ONLY:
            return "EDITION_99997_TEST_ONLY";
        case Edition.EDITION_99998_TEST_ONLY:
            return "EDITION_99998_TEST_ONLY";
        case Edition.EDITION_99999_TEST_ONLY:
            return "EDITION_99999_TEST_ONLY";
        case Edition.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.editionToJSON = editionToJSON;
/** The verification state of the extension range. */
var ExtensionRangeOptions_VerificationState;
(function (ExtensionRangeOptions_VerificationState) {
    /** DECLARATION - All the extensions of the range must be declared. */
    ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["DECLARATION"] = 0] = "DECLARATION";
    ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["UNVERIFIED"] = 1] = "UNVERIFIED";
    ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExtensionRangeOptions_VerificationState || (exports.ExtensionRangeOptions_VerificationState = ExtensionRangeOptions_VerificationState = {}));
function extensionRangeOptions_VerificationStateFromJSON(object) {
    switch (object) {
        case 0:
        case "DECLARATION":
            return ExtensionRangeOptions_VerificationState.DECLARATION;
        case 1:
        case "UNVERIFIED":
            return ExtensionRangeOptions_VerificationState.UNVERIFIED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExtensionRangeOptions_VerificationState.UNRECOGNIZED;
    }
}
exports.extensionRangeOptions_VerificationStateFromJSON = extensionRangeOptions_VerificationStateFromJSON;
function extensionRangeOptions_VerificationStateToJSON(object) {
    switch (object) {
        case ExtensionRangeOptions_VerificationState.DECLARATION:
            return "DECLARATION";
        case ExtensionRangeOptions_VerificationState.UNVERIFIED:
            return "UNVERIFIED";
        case ExtensionRangeOptions_VerificationState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.extensionRangeOptions_VerificationStateToJSON = extensionRangeOptions_VerificationStateToJSON;
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported after google.protobuf. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.  In Editions, the group wire format
     * can be enabled via the `message_encoding` feature.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type = {}));
function fieldDescriptorProto_TypeFromJSON(object) {
    switch (object) {
        case 1:
        case "TYPE_DOUBLE":
            return FieldDescriptorProto_Type.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return FieldDescriptorProto_Type.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return FieldDescriptorProto_Type.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return FieldDescriptorProto_Type.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return FieldDescriptorProto_Type.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return FieldDescriptorProto_Type.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return FieldDescriptorProto_Type.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return FieldDescriptorProto_Type.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return FieldDescriptorProto_Type.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return FieldDescriptorProto_Type.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return FieldDescriptorProto_Type.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return FieldDescriptorProto_Type.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return FieldDescriptorProto_Type.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return FieldDescriptorProto_Type.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return FieldDescriptorProto_Type.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return FieldDescriptorProto_Type.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return FieldDescriptorProto_Type.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return FieldDescriptorProto_Type.TYPE_SINT64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Type.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
function fieldDescriptorProto_TypeToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case FieldDescriptorProto_Type.TYPE_INT64:
            return "TYPE_INT64";
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return "TYPE_UINT64";
        case FieldDescriptorProto_Type.TYPE_INT32:
            return "TYPE_INT32";
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return "TYPE_BOOL";
        case FieldDescriptorProto_Type.TYPE_STRING:
            return "TYPE_STRING";
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return "TYPE_GROUP";
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return "TYPE_BYTES";
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return "TYPE_UINT32";
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return "TYPE_ENUM";
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return "TYPE_SINT32";
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return "TYPE_SINT64";
        case FieldDescriptorProto_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    /**
     * LABEL_REQUIRED - The required label is only allowed in google.protobuf.  In proto3 and Editions
     * it's explicitly prohibited.  In Editions, the `field_presence` feature
     * can be used to get this behavior.
     */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label = {}));
function fieldDescriptorProto_LabelFromJSON(object) {
    switch (object) {
        case 1:
        case "LABEL_OPTIONAL":
            return FieldDescriptorProto_Label.LABEL_OPTIONAL;
        case 3:
        case "LABEL_REPEATED":
            return FieldDescriptorProto_Label.LABEL_REPEATED;
        case 2:
        case "LABEL_REQUIRED":
            return FieldDescriptorProto_Label.LABEL_REQUIRED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Label.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
function fieldDescriptorProto_LabelToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return "LABEL_OPTIONAL";
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return "LABEL_REPEATED";
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return "LABEL_REQUIRED";
        case FieldDescriptorProto_Label.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode = {}));
function fileOptions_OptimizeModeFromJSON(object) {
    switch (object) {
        case 1:
        case "SPEED":
            return FileOptions_OptimizeMode.SPEED;
        case 2:
        case "CODE_SIZE":
            return FileOptions_OptimizeMode.CODE_SIZE;
        case 3:
        case "LITE_RUNTIME":
            return FileOptions_OptimizeMode.LITE_RUNTIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FileOptions_OptimizeMode.UNRECOGNIZED;
    }
}
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
function fileOptions_OptimizeModeToJSON(object) {
    switch (object) {
        case FileOptions_OptimizeMode.SPEED:
            return "SPEED";
        case FileOptions_OptimizeMode.CODE_SIZE:
            return "CODE_SIZE";
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return "LITE_RUNTIME";
        case FileOptions_OptimizeMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    /**
     * CORD - The option [ctype=CORD] may be applied to a non-repeated field of type
     * "bytes". It indicates that in C++, the data should be stored in a Cord
     * instead of a string.  For very large strings, this may reduce memory
     * fragmentation. It may also allow better performance when parsing from a
     * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
     * alias the original buffer.
     */
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType || (exports.FieldOptions_CType = FieldOptions_CType = {}));
function fieldOptions_CTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STRING":
            return FieldOptions_CType.STRING;
        case 1:
        case "CORD":
            return FieldOptions_CType.CORD;
        case 2:
        case "STRING_PIECE":
            return FieldOptions_CType.STRING_PIECE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_CType.UNRECOGNIZED;
    }
}
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
function fieldOptions_CTypeToJSON(object) {
    switch (object) {
        case FieldOptions_CType.STRING:
            return "STRING";
        case FieldOptions_CType.CORD:
            return "CORD";
        case FieldOptions_CType.STRING_PIECE:
            return "STRING_PIECE";
        case FieldOptions_CType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType || (exports.FieldOptions_JSType = FieldOptions_JSType = {}));
function fieldOptions_JSTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "JS_NORMAL":
            return FieldOptions_JSType.JS_NORMAL;
        case 1:
        case "JS_STRING":
            return FieldOptions_JSType.JS_STRING;
        case 2:
        case "JS_NUMBER":
            return FieldOptions_JSType.JS_NUMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_JSType.UNRECOGNIZED;
    }
}
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
function fieldOptions_JSTypeToJSON(object) {
    switch (object) {
        case FieldOptions_JSType.JS_NORMAL:
            return "JS_NORMAL";
        case FieldOptions_JSType.JS_STRING:
            return "JS_STRING";
        case FieldOptions_JSType.JS_NUMBER:
            return "JS_NUMBER";
        case FieldOptions_JSType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 */
var FieldOptions_OptionRetention;
(function (FieldOptions_OptionRetention) {
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_UNKNOWN"] = 0] = "RETENTION_UNKNOWN";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_RUNTIME"] = 1] = "RETENTION_RUNTIME";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_SOURCE"] = 2] = "RETENTION_SOURCE";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_OptionRetention || (exports.FieldOptions_OptionRetention = FieldOptions_OptionRetention = {}));
function fieldOptions_OptionRetentionFromJSON(object) {
    switch (object) {
        case 0:
        case "RETENTION_UNKNOWN":
            return FieldOptions_OptionRetention.RETENTION_UNKNOWN;
        case 1:
        case "RETENTION_RUNTIME":
            return FieldOptions_OptionRetention.RETENTION_RUNTIME;
        case 2:
        case "RETENTION_SOURCE":
            return FieldOptions_OptionRetention.RETENTION_SOURCE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_OptionRetention.UNRECOGNIZED;
    }
}
exports.fieldOptions_OptionRetentionFromJSON = fieldOptions_OptionRetentionFromJSON;
function fieldOptions_OptionRetentionToJSON(object) {
    switch (object) {
        case FieldOptions_OptionRetention.RETENTION_UNKNOWN:
            return "RETENTION_UNKNOWN";
        case FieldOptions_OptionRetention.RETENTION_RUNTIME:
            return "RETENTION_RUNTIME";
        case FieldOptions_OptionRetention.RETENTION_SOURCE:
            return "RETENTION_SOURCE";
        case FieldOptions_OptionRetention.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_OptionRetentionToJSON = fieldOptions_OptionRetentionToJSON;
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 */
var FieldOptions_OptionTargetType;
(function (FieldOptions_OptionTargetType) {
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_UNKNOWN"] = 0] = "TARGET_TYPE_UNKNOWN";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FILE"] = 1] = "TARGET_TYPE_FILE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_EXTENSION_RANGE"] = 2] = "TARGET_TYPE_EXTENSION_RANGE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_MESSAGE"] = 3] = "TARGET_TYPE_MESSAGE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FIELD"] = 4] = "TARGET_TYPE_FIELD";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ONEOF"] = 5] = "TARGET_TYPE_ONEOF";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM"] = 6] = "TARGET_TYPE_ENUM";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM_ENTRY"] = 7] = "TARGET_TYPE_ENUM_ENTRY";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_SERVICE"] = 8] = "TARGET_TYPE_SERVICE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_METHOD"] = 9] = "TARGET_TYPE_METHOD";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_OptionTargetType || (exports.FieldOptions_OptionTargetType = FieldOptions_OptionTargetType = {}));
function fieldOptions_OptionTargetTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TARGET_TYPE_UNKNOWN":
            return FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN;
        case 1:
        case "TARGET_TYPE_FILE":
            return FieldOptions_OptionTargetType.TARGET_TYPE_FILE;
        case 2:
        case "TARGET_TYPE_EXTENSION_RANGE":
            return FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE;
        case 3:
        case "TARGET_TYPE_MESSAGE":
            return FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE;
        case 4:
        case "TARGET_TYPE_FIELD":
            return FieldOptions_OptionTargetType.TARGET_TYPE_FIELD;
        case 5:
        case "TARGET_TYPE_ONEOF":
            return FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF;
        case 6:
        case "TARGET_TYPE_ENUM":
            return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM;
        case 7:
        case "TARGET_TYPE_ENUM_ENTRY":
            return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY;
        case 8:
        case "TARGET_TYPE_SERVICE":
            return FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE;
        case 9:
        case "TARGET_TYPE_METHOD":
            return FieldOptions_OptionTargetType.TARGET_TYPE_METHOD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_OptionTargetType.UNRECOGNIZED;
    }
}
exports.fieldOptions_OptionTargetTypeFromJSON = fieldOptions_OptionTargetTypeFromJSON;
function fieldOptions_OptionTargetTypeToJSON(object) {
    switch (object) {
        case FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN:
            return "TARGET_TYPE_UNKNOWN";
        case FieldOptions_OptionTargetType.TARGET_TYPE_FILE:
            return "TARGET_TYPE_FILE";
        case FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE:
            return "TARGET_TYPE_EXTENSION_RANGE";
        case FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE:
            return "TARGET_TYPE_MESSAGE";
        case FieldOptions_OptionTargetType.TARGET_TYPE_FIELD:
            return "TARGET_TYPE_FIELD";
        case FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF:
            return "TARGET_TYPE_ONEOF";
        case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM:
            return "TARGET_TYPE_ENUM";
        case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY:
            return "TARGET_TYPE_ENUM_ENTRY";
        case FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE:
            return "TARGET_TYPE_SERVICE";
        case FieldOptions_OptionTargetType.TARGET_TYPE_METHOD:
            return "TARGET_TYPE_METHOD";
        case FieldOptions_OptionTargetType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_OptionTargetTypeToJSON = fieldOptions_OptionTargetTypeToJSON;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel = {}));
function methodOptions_IdempotencyLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "IDEMPOTENCY_UNKNOWN":
            return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
        case 1:
        case "NO_SIDE_EFFECTS":
            return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
        case 2:
        case "IDEMPOTENT":
            return MethodOptions_IdempotencyLevel.IDEMPOTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
    }
}
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
function methodOptions_IdempotencyLevelToJSON(object) {
    switch (object) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return "IDEMPOTENCY_UNKNOWN";
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return "NO_SIDE_EFFECTS";
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return "IDEMPOTENT";
        case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
var FeatureSet_FieldPresence;
(function (FeatureSet_FieldPresence) {
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["FIELD_PRESENCE_UNKNOWN"] = 0] = "FIELD_PRESENCE_UNKNOWN";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["EXPLICIT"] = 1] = "EXPLICIT";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["IMPLICIT"] = 2] = "IMPLICIT";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["LEGACY_REQUIRED"] = 3] = "LEGACY_REQUIRED";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_FieldPresence || (exports.FeatureSet_FieldPresence = FeatureSet_FieldPresence = {}));
function featureSet_FieldPresenceFromJSON(object) {
    switch (object) {
        case 0:
        case "FIELD_PRESENCE_UNKNOWN":
            return FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN;
        case 1:
        case "EXPLICIT":
            return FeatureSet_FieldPresence.EXPLICIT;
        case 2:
        case "IMPLICIT":
            return FeatureSet_FieldPresence.IMPLICIT;
        case 3:
        case "LEGACY_REQUIRED":
            return FeatureSet_FieldPresence.LEGACY_REQUIRED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_FieldPresence.UNRECOGNIZED;
    }
}
exports.featureSet_FieldPresenceFromJSON = featureSet_FieldPresenceFromJSON;
function featureSet_FieldPresenceToJSON(object) {
    switch (object) {
        case FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN:
            return "FIELD_PRESENCE_UNKNOWN";
        case FeatureSet_FieldPresence.EXPLICIT:
            return "EXPLICIT";
        case FeatureSet_FieldPresence.IMPLICIT:
            return "IMPLICIT";
        case FeatureSet_FieldPresence.LEGACY_REQUIRED:
            return "LEGACY_REQUIRED";
        case FeatureSet_FieldPresence.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_FieldPresenceToJSON = featureSet_FieldPresenceToJSON;
var FeatureSet_EnumType;
(function (FeatureSet_EnumType) {
    FeatureSet_EnumType[FeatureSet_EnumType["ENUM_TYPE_UNKNOWN"] = 0] = "ENUM_TYPE_UNKNOWN";
    FeatureSet_EnumType[FeatureSet_EnumType["OPEN"] = 1] = "OPEN";
    FeatureSet_EnumType[FeatureSet_EnumType["CLOSED"] = 2] = "CLOSED";
    FeatureSet_EnumType[FeatureSet_EnumType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_EnumType || (exports.FeatureSet_EnumType = FeatureSet_EnumType = {}));
function featureSet_EnumTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ENUM_TYPE_UNKNOWN":
            return FeatureSet_EnumType.ENUM_TYPE_UNKNOWN;
        case 1:
        case "OPEN":
            return FeatureSet_EnumType.OPEN;
        case 2:
        case "CLOSED":
            return FeatureSet_EnumType.CLOSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_EnumType.UNRECOGNIZED;
    }
}
exports.featureSet_EnumTypeFromJSON = featureSet_EnumTypeFromJSON;
function featureSet_EnumTypeToJSON(object) {
    switch (object) {
        case FeatureSet_EnumType.ENUM_TYPE_UNKNOWN:
            return "ENUM_TYPE_UNKNOWN";
        case FeatureSet_EnumType.OPEN:
            return "OPEN";
        case FeatureSet_EnumType.CLOSED:
            return "CLOSED";
        case FeatureSet_EnumType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_EnumTypeToJSON = featureSet_EnumTypeToJSON;
var FeatureSet_RepeatedFieldEncoding;
(function (FeatureSet_RepeatedFieldEncoding) {
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["REPEATED_FIELD_ENCODING_UNKNOWN"] = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN";
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["PACKED"] = 1] = "PACKED";
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["EXPANDED"] = 2] = "EXPANDED";
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_RepeatedFieldEncoding || (exports.FeatureSet_RepeatedFieldEncoding = FeatureSet_RepeatedFieldEncoding = {}));
function featureSet_RepeatedFieldEncodingFromJSON(object) {
    switch (object) {
        case 0:
        case "REPEATED_FIELD_ENCODING_UNKNOWN":
            return FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN;
        case 1:
        case "PACKED":
            return FeatureSet_RepeatedFieldEncoding.PACKED;
        case 2:
        case "EXPANDED":
            return FeatureSet_RepeatedFieldEncoding.EXPANDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED;
    }
}
exports.featureSet_RepeatedFieldEncodingFromJSON = featureSet_RepeatedFieldEncodingFromJSON;
function featureSet_RepeatedFieldEncodingToJSON(object) {
    switch (object) {
        case FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN:
            return "REPEATED_FIELD_ENCODING_UNKNOWN";
        case FeatureSet_RepeatedFieldEncoding.PACKED:
            return "PACKED";
        case FeatureSet_RepeatedFieldEncoding.EXPANDED:
            return "EXPANDED";
        case FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_RepeatedFieldEncodingToJSON = featureSet_RepeatedFieldEncodingToJSON;
var FeatureSet_Utf8Validation;
(function (FeatureSet_Utf8Validation) {
    FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["UTF8_VALIDATION_UNKNOWN"] = 0] = "UTF8_VALIDATION_UNKNOWN";
    FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["NONE"] = 1] = "NONE";
    FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["VERIFY"] = 2] = "VERIFY";
    FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_Utf8Validation || (exports.FeatureSet_Utf8Validation = FeatureSet_Utf8Validation = {}));
function featureSet_Utf8ValidationFromJSON(object) {
    switch (object) {
        case 0:
        case "UTF8_VALIDATION_UNKNOWN":
            return FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN;
        case 1:
        case "NONE":
            return FeatureSet_Utf8Validation.NONE;
        case 2:
        case "VERIFY":
            return FeatureSet_Utf8Validation.VERIFY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_Utf8Validation.UNRECOGNIZED;
    }
}
exports.featureSet_Utf8ValidationFromJSON = featureSet_Utf8ValidationFromJSON;
function featureSet_Utf8ValidationToJSON(object) {
    switch (object) {
        case FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN:
            return "UTF8_VALIDATION_UNKNOWN";
        case FeatureSet_Utf8Validation.NONE:
            return "NONE";
        case FeatureSet_Utf8Validation.VERIFY:
            return "VERIFY";
        case FeatureSet_Utf8Validation.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_Utf8ValidationToJSON = featureSet_Utf8ValidationToJSON;
var FeatureSet_MessageEncoding;
(function (FeatureSet_MessageEncoding) {
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["MESSAGE_ENCODING_UNKNOWN"] = 0] = "MESSAGE_ENCODING_UNKNOWN";
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["LENGTH_PREFIXED"] = 1] = "LENGTH_PREFIXED";
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["DELIMITED"] = 2] = "DELIMITED";
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_MessageEncoding || (exports.FeatureSet_MessageEncoding = FeatureSet_MessageEncoding = {}));
function featureSet_MessageEncodingFromJSON(object) {
    switch (object) {
        case 0:
        case "MESSAGE_ENCODING_UNKNOWN":
            return FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN;
        case 1:
        case "LENGTH_PREFIXED":
            return FeatureSet_MessageEncoding.LENGTH_PREFIXED;
        case 2:
        case "DELIMITED":
            return FeatureSet_MessageEncoding.DELIMITED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_MessageEncoding.UNRECOGNIZED;
    }
}
exports.featureSet_MessageEncodingFromJSON = featureSet_MessageEncodingFromJSON;
function featureSet_MessageEncodingToJSON(object) {
    switch (object) {
        case FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN:
            return "MESSAGE_ENCODING_UNKNOWN";
        case FeatureSet_MessageEncoding.LENGTH_PREFIXED:
            return "LENGTH_PREFIXED";
        case FeatureSet_MessageEncoding.DELIMITED:
            return "DELIMITED";
        case FeatureSet_MessageEncoding.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_MessageEncodingToJSON = featureSet_MessageEncodingToJSON;
var FeatureSet_JsonFormat;
(function (FeatureSet_JsonFormat) {
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["JSON_FORMAT_UNKNOWN"] = 0] = "JSON_FORMAT_UNKNOWN";
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["ALLOW"] = 1] = "ALLOW";
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["LEGACY_BEST_EFFORT"] = 2] = "LEGACY_BEST_EFFORT";
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_JsonFormat || (exports.FeatureSet_JsonFormat = FeatureSet_JsonFormat = {}));
function featureSet_JsonFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "JSON_FORMAT_UNKNOWN":
            return FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN;
        case 1:
        case "ALLOW":
            return FeatureSet_JsonFormat.ALLOW;
        case 2:
        case "LEGACY_BEST_EFFORT":
            return FeatureSet_JsonFormat.LEGACY_BEST_EFFORT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_JsonFormat.UNRECOGNIZED;
    }
}
exports.featureSet_JsonFormatFromJSON = featureSet_JsonFormatFromJSON;
function featureSet_JsonFormatToJSON(object) {
    switch (object) {
        case FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN:
            return "JSON_FORMAT_UNKNOWN";
        case FeatureSet_JsonFormat.ALLOW:
            return "ALLOW";
        case FeatureSet_JsonFormat.LEGACY_BEST_EFFORT:
            return "LEGACY_BEST_EFFORT";
        case FeatureSet_JsonFormat.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_JsonFormatToJSON = featureSet_JsonFormatToJSON;
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
var GeneratedCodeInfo_Annotation_Semantic;
(function (GeneratedCodeInfo_Annotation_Semantic) {
    /** NONE - There is no effect or the effect is indescribable. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["NONE"] = 0] = "NONE";
    /** SET - The element is set or otherwise mutated. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["SET"] = 1] = "SET";
    /** ALIAS - An alias to the element is returned. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["ALIAS"] = 2] = "ALIAS";
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GeneratedCodeInfo_Annotation_Semantic || (exports.GeneratedCodeInfo_Annotation_Semantic = GeneratedCodeInfo_Annotation_Semantic = {}));
function generatedCodeInfo_Annotation_SemanticFromJSON(object) {
    switch (object) {
        case 0:
        case "NONE":
            return GeneratedCodeInfo_Annotation_Semantic.NONE;
        case 1:
        case "SET":
            return GeneratedCodeInfo_Annotation_Semantic.SET;
        case 2:
        case "ALIAS":
            return GeneratedCodeInfo_Annotation_Semantic.ALIAS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED;
    }
}
exports.generatedCodeInfo_Annotation_SemanticFromJSON = generatedCodeInfo_Annotation_SemanticFromJSON;
function generatedCodeInfo_Annotation_SemanticToJSON(object) {
    switch (object) {
        case GeneratedCodeInfo_Annotation_Semantic.NONE:
            return "NONE";
        case GeneratedCodeInfo_Annotation_Semantic.SET:
            return "SET";
        case GeneratedCodeInfo_Annotation_Semantic.ALIAS:
            return "ALIAS";
        case GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.generatedCodeInfo_Annotation_SemanticToJSON = generatedCodeInfo_Annotation_SemanticToJSON;
function createBaseFileDescriptorSet() {
    return { file: [] };
}
exports.FileDescriptorSet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.file) {
            exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { file: Array.isArray(object?.file) ? object.file.map((e) => exports.FileDescriptorProto.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.file) {
            obj.file = message.file.map((e) => e ? exports.FileDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.file = [];
        }
        return obj;
    },
    create(base) {
        return exports.FileDescriptorSet.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorSet();
        message.file = object.file?.map((e) => exports.FileDescriptorProto.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFileDescriptorProto() {
    return {
        name: "",
        package: "",
        dependency: [],
        publicDependency: [],
        weakDependency: [],
        messageType: [],
        enumType: [],
        service: [],
        extension: [],
        options: undefined,
        sourceCodeInfo: undefined,
        syntax: "",
        edition: 0,
    };
}
exports.FileDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        for (const v of message.dependency) {
            writer.uint32(26).string(v);
        }
        writer.uint32(82).fork();
        for (const v of message.publicDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(90).fork();
        for (const v of message.weakDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.messageType) {
            exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.service) {
            exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined) {
            exports.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== "") {
            writer.uint32(98).string(message.syntax);
        }
        if (message.edition !== 0) {
            writer.uint32(112).int32(message.edition);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.dependency.push(reader.string());
                    continue;
                case 10:
                    if (tag === 80) {
                        message.publicDependency.push(reader.int32());
                        continue;
                    }
                    if (tag === 82) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.publicDependency.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 11:
                    if (tag === 88) {
                        message.weakDependency.push(reader.int32());
                        continue;
                    }
                    if (tag === 90) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weakDependency.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.messageType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.sourceCodeInfo = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.syntax = reader.string();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.edition = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            package: isSet(object.package) ? String(object.package) : "",
            dependency: Array.isArray(object?.dependency) ? object.dependency.map((e) => String(e)) : [],
            publicDependency: Array.isArray(object?.publicDependency)
                ? object.publicDependency.map((e) => Number(e))
                : [],
            weakDependency: Array.isArray(object?.weakDependency) ? object.weakDependency.map((e) => Number(e)) : [],
            messageType: Array.isArray(object?.messageType)
                ? object.messageType.map((e) => exports.DescriptorProto.fromJSON(e))
                : [],
            enumType: Array.isArray(object?.enumType) ? object.enumType.map((e) => exports.EnumDescriptorProto.fromJSON(e)) : [],
            service: Array.isArray(object?.service) ? object.service.map((e) => exports.ServiceDescriptorProto.fromJSON(e)) : [],
            extension: Array.isArray(object?.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options) ? exports.FileOptions.fromJSON(object.options) : undefined,
            sourceCodeInfo: isSet(object.sourceCodeInfo) ? exports.SourceCodeInfo.fromJSON(object.sourceCodeInfo) : undefined,
            syntax: isSet(object.syntax) ? String(object.syntax) : "",
            edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.package !== undefined && (obj.package = message.package);
        if (message.dependency) {
            obj.dependency = message.dependency.map((e) => e);
        }
        else {
            obj.dependency = [];
        }
        if (message.publicDependency) {
            obj.publicDependency = message.publicDependency.map((e) => Math.round(e));
        }
        else {
            obj.publicDependency = [];
        }
        if (message.weakDependency) {
            obj.weakDependency = message.weakDependency.map((e) => Math.round(e));
        }
        else {
            obj.weakDependency = [];
        }
        if (message.messageType) {
            obj.messageType = message.messageType.map((e) => e ? exports.DescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.messageType = [];
        }
        if (message.enumType) {
            obj.enumType = message.enumType.map((e) => e ? exports.EnumDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.enumType = [];
        }
        if (message.service) {
            obj.service = message.service.map((e) => e ? exports.ServiceDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map((e) => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.extension = [];
        }
        message.options !== undefined && (obj.options = message.options ? exports.FileOptions.toJSON(message.options) : undefined);
        message.sourceCodeInfo !== undefined &&
            (obj.sourceCodeInfo = message.sourceCodeInfo ? exports.SourceCodeInfo.toJSON(message.sourceCodeInfo) : undefined);
        message.syntax !== undefined && (obj.syntax = message.syntax);
        message.edition !== undefined && (obj.edition = editionToJSON(message.edition));
        return obj;
    },
    create(base) {
        return exports.FileDescriptorProto.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorProto();
        message.name = object.name ?? "";
        message.package = object.package ?? "";
        message.dependency = object.dependency?.map((e) => e) || [];
        message.publicDependency = object.publicDependency?.map((e) => e) || [];
        message.weakDependency = object.weakDependency?.map((e) => e) || [];
        message.messageType = object.messageType?.map((e) => exports.DescriptorProto.fromPartial(e)) || [];
        message.enumType = object.enumType?.map((e) => exports.EnumDescriptorProto.fromPartial(e)) || [];
        message.service = object.service?.map((e) => exports.ServiceDescriptorProto.fromPartial(e)) || [];
        message.extension = object.extension?.map((e) => exports.FieldDescriptorProto.fromPartial(e)) || [];
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.FileOptions.fromPartial(object.options)
            : undefined;
        message.sourceCodeInfo = (object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null)
            ? exports.SourceCodeInfo.fromPartial(object.sourceCodeInfo)
            : undefined;
        message.syntax = object.syntax ?? "";
        message.edition = object.edition ?? 0;
        return message;
    },
};
function createBaseDescriptorProto() {
    return {
        name: "",
        field: [],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
    };
}
exports.DescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.field) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.nestedType) {
            exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.extensionRange) {
            exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.oneofDecl) {
            exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nestedType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.oneofDecl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.reservedName.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            field: Array.isArray(object?.field) ? object.field.map((e) => exports.FieldDescriptorProto.fromJSON(e)) : [],
            extension: Array.isArray(object?.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : [],
            nestedType: Array.isArray(object?.nestedType)
                ? object.nestedType.map((e) => exports.DescriptorProto.fromJSON(e))
                : [],
            enumType: Array.isArray(object?.enumType) ? object.enumType.map((e) => exports.EnumDescriptorProto.fromJSON(e)) : [],
            extensionRange: Array.isArray(object?.extensionRange)
                ? object.extensionRange.map((e) => exports.DescriptorProto_ExtensionRange.fromJSON(e))
                : [],
            oneofDecl: Array.isArray(object?.oneofDecl)
                ? object.oneofDecl.map((e) => exports.OneofDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options) ? exports.MessageOptions.fromJSON(object.options) : undefined,
            reservedRange: Array.isArray(object?.reservedRange)
                ? object.reservedRange.map((e) => exports.DescriptorProto_ReservedRange.fromJSON(e))
                : [],
            reservedName: Array.isArray(object?.reservedName) ? object.reservedName.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.field) {
            obj.field = message.field.map((e) => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.field = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map((e) => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.extension = [];
        }
        if (message.nestedType) {
            obj.nestedType = message.nestedType.map((e) => e ? exports.DescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.nestedType = [];
        }
        if (message.enumType) {
            obj.enumType = message.enumType.map((e) => e ? exports.EnumDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.enumType = [];
        }
        if (message.extensionRange) {
            obj.extensionRange = message.extensionRange.map((e) => e ? exports.DescriptorProto_ExtensionRange.toJSON(e) : undefined);
        }
        else {
            obj.extensionRange = [];
        }
        if (message.oneofDecl) {
            obj.oneofDecl = message.oneofDecl.map((e) => e ? exports.OneofDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.oneofDecl = [];
        }
        message.options !== undefined &&
            (obj.options = message.options ? exports.MessageOptions.toJSON(message.options) : undefined);
        if (message.reservedRange) {
            obj.reservedRange = message.reservedRange.map((e) => e ? exports.DescriptorProto_ReservedRange.toJSON(e) : undefined);
        }
        else {
            obj.reservedRange = [];
        }
        if (message.reservedName) {
            obj.reservedName = message.reservedName.map((e) => e);
        }
        else {
            obj.reservedName = [];
        }
        return obj;
    },
    create(base) {
        return exports.DescriptorProto.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDescriptorProto();
        message.name = object.name ?? "";
        message.field = object.field?.map((e) => exports.FieldDescriptorProto.fromPartial(e)) || [];
        message.extension = object.extension?.map((e) => exports.FieldDescriptorProto.fromPartial(e)) || [];
        message.nestedType = object.nestedType?.map((e) => exports.DescriptorProto.fromPartial(e)) || [];
        message.enumType = object.enumType?.map((e) => exports.EnumDescriptorProto.fromPartial(e)) || [];
        message.extensionRange = object.extensionRange?.map((e) => exports.DescriptorProto_ExtensionRange.fromPartial(e)) || [];
        message.oneofDecl = object.oneofDecl?.map((e) => exports.OneofDescriptorProto.fromPartial(e)) || [];
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.MessageOptions.fromPartial(object.options)
            : undefined;
        message.reservedRange = object.reservedRange?.map((e) => exports.DescriptorProto_ReservedRange.fromPartial(e)) || [];
        message.reservedName = object.reservedName?.map((e) => e) || [];
        return message;
    },
};
function createBaseDescriptorProto_ExtensionRange() {
    return { start: 0, end: 0, options: undefined };
}
exports.DescriptorProto_ExtensionRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ExtensionRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            start: isSet(object.start) ? Number(object.start) : 0,
            end: isSet(object.end) ? Number(object.end) : 0,
            options: isSet(object.options) ? exports.ExtensionRangeOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        message.options !== undefined &&
            (obj.options = message.options ? exports.ExtensionRangeOptions.toJSON(message.options) : undefined);
        return obj;
    },
    create(base) {
        return exports.DescriptorProto_ExtensionRange.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDescriptorProto_ExtensionRange();
        message.start = object.start ?? 0;
        message.end = object.end ?? 0;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.ExtensionRangeOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseDescriptorProto_ReservedRange() {
    return { start: 0, end: 0 };
}
exports.DescriptorProto_ReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { start: isSet(object.start) ? Number(object.start) : 0, end: isSet(object.end) ? Number(object.end) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    create(base) {
        return exports.DescriptorProto_ReservedRange.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDescriptorProto_ReservedRange();
        message.start = object.start ?? 0;
        message.end = object.end ?? 0;
        return message;
    },
};
function createBaseExtensionRangeOptions() {
    return { uninterpretedOption: [], declaration: [], features: undefined, verification: 0 };
}
exports.ExtensionRangeOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        for (const v of message.declaration) {
            exports.ExtensionRangeOptions_Declaration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
        }
        if (message.verification !== 0) {
            writer.uint32(24).int32(message.verification);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionRangeOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.declaration.push(exports.ExtensionRangeOptions_Declaration.decode(reader, reader.uint32()));
                    continue;
                case 50:
                    if (tag !== 402) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.verification = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            uninterpretedOption: Array.isArray(object?.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
            declaration: Array.isArray(object?.declaration)
                ? object.declaration.map((e) => exports.ExtensionRangeOptions_Declaration.fromJSON(e))
                : [],
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            verification: isSet(object.verification)
                ? extensionRangeOptions_VerificationStateFromJSON(object.verification)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        if (message.declaration) {
            obj.declaration = message.declaration.map((e) => e ? exports.ExtensionRangeOptions_Declaration.toJSON(e) : undefined);
        }
        else {
            obj.declaration = [];
        }
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        message.verification !== undefined &&
            (obj.verification = extensionRangeOptions_VerificationStateToJSON(message.verification));
        return obj;
    },
    create(base) {
        return exports.ExtensionRangeOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = object.uninterpretedOption?.map((e) => exports.UninterpretedOption.fromPartial(e)) || [];
        message.declaration = object.declaration?.map((e) => exports.ExtensionRangeOptions_Declaration.fromPartial(e)) || [];
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.verification = object.verification ?? 0;
        return message;
    },
};
function createBaseExtensionRangeOptions_Declaration() {
    return { number: 0, fullName: "", type: "", reserved: false, repeated: false };
}
exports.ExtensionRangeOptions_Declaration = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.number !== 0) {
            writer.uint32(8).int32(message.number);
        }
        if (message.fullName !== "") {
            writer.uint32(18).string(message.fullName);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        if (message.reserved === true) {
            writer.uint32(40).bool(message.reserved);
        }
        if (message.repeated === true) {
            writer.uint32(48).bool(message.repeated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionRangeOptions_Declaration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fullName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.reserved = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.repeated = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            number: isSet(object.number) ? Number(object.number) : 0,
            fullName: isSet(object.fullName) ? String(object.fullName) : "",
            type: isSet(object.type) ? String(object.type) : "",
            reserved: isSet(object.reserved) ? Boolean(object.reserved) : false,
            repeated: isSet(object.repeated) ? Boolean(object.repeated) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.type !== undefined && (obj.type = message.type);
        message.reserved !== undefined && (obj.reserved = message.reserved);
        message.repeated !== undefined && (obj.repeated = message.repeated);
        return obj;
    },
    create(base) {
        return exports.ExtensionRangeOptions_Declaration.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExtensionRangeOptions_Declaration();
        message.number = object.number ?? 0;
        message.fullName = object.fullName ?? "";
        message.type = object.type ?? "";
        message.reserved = object.reserved ?? false;
        message.repeated = object.repeated ?? false;
        return message;
    },
};
function createBaseFieldDescriptorProto() {
    return {
        name: "",
        number: 0,
        label: 1,
        type: 1,
        typeName: "",
        extendee: "",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "",
        options: undefined,
        proto3Optional: false,
    };
}
exports.FieldDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.label !== 1) {
            writer.uint32(32).int32(message.label);
        }
        if (message.type !== 1) {
            writer.uint32(40).int32(message.type);
        }
        if (message.typeName !== "") {
            writer.uint32(50).string(message.typeName);
        }
        if (message.extendee !== "") {
            writer.uint32(18).string(message.extendee);
        }
        if (message.defaultValue !== "") {
            writer.uint32(58).string(message.defaultValue);
        }
        if (message.oneofIndex !== 0) {
            writer.uint32(72).int32(message.oneofIndex);
        }
        if (message.jsonName !== "") {
            writer.uint32(82).string(message.jsonName);
        }
        if (message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.proto3Optional === true) {
            writer.uint32(136).bool(message.proto3Optional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.label = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.typeName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.extendee = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.defaultValue = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.oneofIndex = reader.int32();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.jsonName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.proto3Optional = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            number: isSet(object.number) ? Number(object.number) : 0,
            label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : 1,
            type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : 1,
            typeName: isSet(object.typeName) ? String(object.typeName) : "",
            extendee: isSet(object.extendee) ? String(object.extendee) : "",
            defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
            oneofIndex: isSet(object.oneofIndex) ? Number(object.oneofIndex) : 0,
            jsonName: isSet(object.jsonName) ? String(object.jsonName) : "",
            options: isSet(object.options) ? exports.FieldOptions.fromJSON(object.options) : undefined,
            proto3Optional: isSet(object.proto3Optional) ? Boolean(object.proto3Optional) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
        message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
        message.typeName !== undefined && (obj.typeName = message.typeName);
        message.extendee !== undefined && (obj.extendee = message.extendee);
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        message.oneofIndex !== undefined && (obj.oneofIndex = Math.round(message.oneofIndex));
        message.jsonName !== undefined && (obj.jsonName = message.jsonName);
        message.options !== undefined && (obj.options = message.options ? exports.FieldOptions.toJSON(message.options) : undefined);
        message.proto3Optional !== undefined && (obj.proto3Optional = message.proto3Optional);
        return obj;
    },
    create(base) {
        return exports.FieldDescriptorProto.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFieldDescriptorProto();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        message.label = object.label ?? 1;
        message.type = object.type ?? 1;
        message.typeName = object.typeName ?? "";
        message.extendee = object.extendee ?? "";
        message.defaultValue = object.defaultValue ?? "";
        message.oneofIndex = object.oneofIndex ?? 0;
        message.jsonName = object.jsonName ?? "";
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.FieldOptions.fromPartial(object.options)
            : undefined;
        message.proto3Optional = object.proto3Optional ?? false;
        return message;
    },
};
function createBaseOneofDescriptorProto() {
    return { name: "", options: undefined };
}
exports.OneofDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            options: isSet(object.options) ? exports.OneofOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.options !== undefined && (obj.options = message.options ? exports.OneofOptions.toJSON(message.options) : undefined);
        return obj;
    },
    create(base) {
        return exports.OneofDescriptorProto.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOneofDescriptorProto();
        message.name = object.name ?? "";
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.OneofOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseEnumDescriptorProto() {
    return { name: "", value: [], options: undefined, reservedRange: [], reservedName: [] };
}
exports.EnumDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.value) {
            exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.reservedName.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            value: Array.isArray(object?.value) ? object.value.map((e) => exports.EnumValueDescriptorProto.fromJSON(e)) : [],
            options: isSet(object.options) ? exports.EnumOptions.fromJSON(object.options) : undefined,
            reservedRange: Array.isArray(object?.reservedRange)
                ? object.reservedRange.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromJSON(e))
                : [],
            reservedName: Array.isArray(object?.reservedName) ? object.reservedName.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.value) {
            obj.value = message.value.map((e) => e ? exports.EnumValueDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.value = [];
        }
        message.options !== undefined && (obj.options = message.options ? exports.EnumOptions.toJSON(message.options) : undefined);
        if (message.reservedRange) {
            obj.reservedRange = message.reservedRange.map((e) => e ? exports.EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined);
        }
        else {
            obj.reservedRange = [];
        }
        if (message.reservedName) {
            obj.reservedName = message.reservedName.map((e) => e);
        }
        else {
            obj.reservedName = [];
        }
        return obj;
    },
    create(base) {
        return exports.EnumDescriptorProto.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnumDescriptorProto();
        message.name = object.name ?? "";
        message.value = object.value?.map((e) => exports.EnumValueDescriptorProto.fromPartial(e)) || [];
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.EnumOptions.fromPartial(object.options)
            : undefined;
        message.reservedRange = object.reservedRange?.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromPartial(e)) ||
            [];
        message.reservedName = object.reservedName?.map((e) => e) || [];
        return message;
    },
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return { start: 0, end: 0 };
}
exports.EnumDescriptorProto_EnumReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { start: isSet(object.start) ? Number(object.start) : 0, end: isSet(object.end) ? Number(object.end) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    create(base) {
        return exports.EnumDescriptorProto_EnumReservedRange.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        message.start = object.start ?? 0;
        message.end = object.end ?? 0;
        return message;
    },
};
function createBaseEnumValueDescriptorProto() {
    return { name: "", number: 0, options: undefined };
}
exports.EnumValueDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            number: isSet(object.number) ? Number(object.number) : 0,
            options: isSet(object.options) ? exports.EnumValueOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.options !== undefined &&
            (obj.options = message.options ? exports.EnumValueOptions.toJSON(message.options) : undefined);
        return obj;
    },
    create(base) {
        return exports.EnumValueDescriptorProto.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnumValueDescriptorProto();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.EnumValueOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseServiceDescriptorProto() {
    return { name: "", method: [], options: undefined };
}
exports.ServiceDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.method) {
            exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            method: Array.isArray(object?.method) ? object.method.map((e) => exports.MethodDescriptorProto.fromJSON(e)) : [],
            options: isSet(object.options) ? exports.ServiceOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.method) {
            obj.method = message.method.map((e) => e ? exports.MethodDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.method = [];
        }
        message.options !== undefined &&
            (obj.options = message.options ? exports.ServiceOptions.toJSON(message.options) : undefined);
        return obj;
    },
    create(base) {
        return exports.ServiceDescriptorProto.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseServiceDescriptorProto();
        message.name = object.name ?? "";
        message.method = object.method?.map((e) => exports.MethodDescriptorProto.fromPartial(e)) || [];
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.ServiceOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseMethodDescriptorProto() {
    return {
        name: "",
        inputType: "",
        outputType: "",
        options: undefined,
        clientStreaming: false,
        serverStreaming: false,
    };
}
exports.MethodDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.inputType !== "") {
            writer.uint32(18).string(message.inputType);
        }
        if (message.outputType !== "") {
            writer.uint32(26).string(message.outputType);
        }
        if (message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.clientStreaming === true) {
            writer.uint32(40).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(48).bool(message.serverStreaming);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.inputType = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.outputType = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.clientStreaming = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.serverStreaming = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            inputType: isSet(object.inputType) ? String(object.inputType) : "",
            outputType: isSet(object.outputType) ? String(object.outputType) : "",
            options: isSet(object.options) ? exports.MethodOptions.fromJSON(object.options) : undefined,
            clientStreaming: isSet(object.clientStreaming) ? Boolean(object.clientStreaming) : false,
            serverStreaming: isSet(object.serverStreaming) ? Boolean(object.serverStreaming) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.inputType !== undefined && (obj.inputType = message.inputType);
        message.outputType !== undefined && (obj.outputType = message.outputType);
        message.options !== undefined &&
            (obj.options = message.options ? exports.MethodOptions.toJSON(message.options) : undefined);
        message.clientStreaming !== undefined && (obj.clientStreaming = message.clientStreaming);
        message.serverStreaming !== undefined && (obj.serverStreaming = message.serverStreaming);
        return obj;
    },
    create(base) {
        return exports.MethodDescriptorProto.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMethodDescriptorProto();
        message.name = object.name ?? "";
        message.inputType = object.inputType ?? "";
        message.outputType = object.outputType ?? "";
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.MethodOptions.fromPartial(object.options)
            : undefined;
        message.clientStreaming = object.clientStreaming ?? false;
        message.serverStreaming = object.serverStreaming ?? false;
        return message;
    },
};
function createBaseFileOptions() {
    return {
        javaPackage: "",
        javaOuterClassname: "",
        javaMultipleFiles: false,
        javaGenerateEqualsAndHash: false,
        javaStringCheckUtf8: false,
        optimizeFor: 1,
        goPackage: "",
        ccGenericServices: false,
        javaGenericServices: false,
        pyGenericServices: false,
        phpGenericServices: false,
        deprecated: false,
        ccEnableArenas: false,
        objcClassPrefix: "",
        csharpNamespace: "",
        swiftPrefix: "",
        phpClassPrefix: "",
        phpNamespace: "",
        phpMetadataNamespace: "",
        rubyPackage: "",
        features: undefined,
        uninterpretedOption: [],
    };
}
exports.FileOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.javaPackage !== "") {
            writer.uint32(10).string(message.javaPackage);
        }
        if (message.javaOuterClassname !== "") {
            writer.uint32(66).string(message.javaOuterClassname);
        }
        if (message.javaMultipleFiles === true) {
            writer.uint32(80).bool(message.javaMultipleFiles);
        }
        if (message.javaGenerateEqualsAndHash === true) {
            writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        }
        if (message.javaStringCheckUtf8 === true) {
            writer.uint32(216).bool(message.javaStringCheckUtf8);
        }
        if (message.optimizeFor !== 1) {
            writer.uint32(72).int32(message.optimizeFor);
        }
        if (message.goPackage !== "") {
            writer.uint32(90).string(message.goPackage);
        }
        if (message.ccGenericServices === true) {
            writer.uint32(128).bool(message.ccGenericServices);
        }
        if (message.javaGenericServices === true) {
            writer.uint32(136).bool(message.javaGenericServices);
        }
        if (message.pyGenericServices === true) {
            writer.uint32(144).bool(message.pyGenericServices);
        }
        if (message.phpGenericServices === true) {
            writer.uint32(336).bool(message.phpGenericServices);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.ccEnableArenas === true) {
            writer.uint32(248).bool(message.ccEnableArenas);
        }
        if (message.objcClassPrefix !== "") {
            writer.uint32(290).string(message.objcClassPrefix);
        }
        if (message.csharpNamespace !== "") {
            writer.uint32(298).string(message.csharpNamespace);
        }
        if (message.swiftPrefix !== "") {
            writer.uint32(314).string(message.swiftPrefix);
        }
        if (message.phpClassPrefix !== "") {
            writer.uint32(322).string(message.phpClassPrefix);
        }
        if (message.phpNamespace !== "") {
            writer.uint32(330).string(message.phpNamespace);
        }
        if (message.phpMetadataNamespace !== "") {
            writer.uint32(354).string(message.phpMetadataNamespace);
        }
        if (message.rubyPackage !== "") {
            writer.uint32(362).string(message.rubyPackage);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.javaPackage = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.javaOuterClassname = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.javaMultipleFiles = reader.bool();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.javaGenerateEqualsAndHash = reader.bool();
                    continue;
                case 27:
                    if (tag !== 216) {
                        break;
                    }
                    message.javaStringCheckUtf8 = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.optimizeFor = reader.int32();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.goPackage = reader.string();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.ccGenericServices = reader.bool();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.javaGenericServices = reader.bool();
                    continue;
                case 18:
                    if (tag !== 144) {
                        break;
                    }
                    message.pyGenericServices = reader.bool();
                    continue;
                case 42:
                    if (tag !== 336) {
                        break;
                    }
                    message.phpGenericServices = reader.bool();
                    continue;
                case 23:
                    if (tag !== 184) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 31:
                    if (tag !== 248) {
                        break;
                    }
                    message.ccEnableArenas = reader.bool();
                    continue;
                case 36:
                    if (tag !== 290) {
                        break;
                    }
                    message.objcClassPrefix = reader.string();
                    continue;
                case 37:
                    if (tag !== 298) {
                        break;
                    }
                    message.csharpNamespace = reader.string();
                    continue;
                case 39:
                    if (tag !== 314) {
                        break;
                    }
                    message.swiftPrefix = reader.string();
                    continue;
                case 40:
                    if (tag !== 322) {
                        break;
                    }
                    message.phpClassPrefix = reader.string();
                    continue;
                case 41:
                    if (tag !== 330) {
                        break;
                    }
                    message.phpNamespace = reader.string();
                    continue;
                case 44:
                    if (tag !== 354) {
                        break;
                    }
                    message.phpMetadataNamespace = reader.string();
                    continue;
                case 45:
                    if (tag !== 362) {
                        break;
                    }
                    message.rubyPackage = reader.string();
                    continue;
                case 50:
                    if (tag !== 402) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            javaPackage: isSet(object.javaPackage) ? String(object.javaPackage) : "",
            javaOuterClassname: isSet(object.javaOuterClassname) ? String(object.javaOuterClassname) : "",
            javaMultipleFiles: isSet(object.javaMultipleFiles) ? Boolean(object.javaMultipleFiles) : false,
            javaGenerateEqualsAndHash: isSet(object.javaGenerateEqualsAndHash)
                ? Boolean(object.javaGenerateEqualsAndHash)
                : false,
            javaStringCheckUtf8: isSet(object.javaStringCheckUtf8) ? Boolean(object.javaStringCheckUtf8) : false,
            optimizeFor: isSet(object.optimizeFor) ? fileOptions_OptimizeModeFromJSON(object.optimizeFor) : 1,
            goPackage: isSet(object.goPackage) ? String(object.goPackage) : "",
            ccGenericServices: isSet(object.ccGenericServices) ? Boolean(object.ccGenericServices) : false,
            javaGenericServices: isSet(object.javaGenericServices) ? Boolean(object.javaGenericServices) : false,
            pyGenericServices: isSet(object.pyGenericServices) ? Boolean(object.pyGenericServices) : false,
            phpGenericServices: isSet(object.phpGenericServices) ? Boolean(object.phpGenericServices) : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            ccEnableArenas: isSet(object.ccEnableArenas) ? Boolean(object.ccEnableArenas) : false,
            objcClassPrefix: isSet(object.objcClassPrefix) ? String(object.objcClassPrefix) : "",
            csharpNamespace: isSet(object.csharpNamespace) ? String(object.csharpNamespace) : "",
            swiftPrefix: isSet(object.swiftPrefix) ? String(object.swiftPrefix) : "",
            phpClassPrefix: isSet(object.phpClassPrefix) ? String(object.phpClassPrefix) : "",
            phpNamespace: isSet(object.phpNamespace) ? String(object.phpNamespace) : "",
            phpMetadataNamespace: isSet(object.phpMetadataNamespace) ? String(object.phpMetadataNamespace) : "",
            rubyPackage: isSet(object.rubyPackage) ? String(object.rubyPackage) : "",
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: Array.isArray(object?.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
        message.javaOuterClassname !== undefined && (obj.javaOuterClassname = message.javaOuterClassname);
        message.javaMultipleFiles !== undefined && (obj.javaMultipleFiles = message.javaMultipleFiles);
        message.javaGenerateEqualsAndHash !== undefined &&
            (obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash);
        message.javaStringCheckUtf8 !== undefined && (obj.javaStringCheckUtf8 = message.javaStringCheckUtf8);
        message.optimizeFor !== undefined && (obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor));
        message.goPackage !== undefined && (obj.goPackage = message.goPackage);
        message.ccGenericServices !== undefined && (obj.ccGenericServices = message.ccGenericServices);
        message.javaGenericServices !== undefined && (obj.javaGenericServices = message.javaGenericServices);
        message.pyGenericServices !== undefined && (obj.pyGenericServices = message.pyGenericServices);
        message.phpGenericServices !== undefined && (obj.phpGenericServices = message.phpGenericServices);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.ccEnableArenas !== undefined && (obj.ccEnableArenas = message.ccEnableArenas);
        message.objcClassPrefix !== undefined && (obj.objcClassPrefix = message.objcClassPrefix);
        message.csharpNamespace !== undefined && (obj.csharpNamespace = message.csharpNamespace);
        message.swiftPrefix !== undefined && (obj.swiftPrefix = message.swiftPrefix);
        message.phpClassPrefix !== undefined && (obj.phpClassPrefix = message.phpClassPrefix);
        message.phpNamespace !== undefined && (obj.phpNamespace = message.phpNamespace);
        message.phpMetadataNamespace !== undefined && (obj.phpMetadataNamespace = message.phpMetadataNamespace);
        message.rubyPackage !== undefined && (obj.rubyPackage = message.rubyPackage);
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    create(base) {
        return exports.FileOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFileOptions();
        message.javaPackage = object.javaPackage ?? "";
        message.javaOuterClassname = object.javaOuterClassname ?? "";
        message.javaMultipleFiles = object.javaMultipleFiles ?? false;
        message.javaGenerateEqualsAndHash = object.javaGenerateEqualsAndHash ?? false;
        message.javaStringCheckUtf8 = object.javaStringCheckUtf8 ?? false;
        message.optimizeFor = object.optimizeFor ?? 1;
        message.goPackage = object.goPackage ?? "";
        message.ccGenericServices = object.ccGenericServices ?? false;
        message.javaGenericServices = object.javaGenericServices ?? false;
        message.pyGenericServices = object.pyGenericServices ?? false;
        message.phpGenericServices = object.phpGenericServices ?? false;
        message.deprecated = object.deprecated ?? false;
        message.ccEnableArenas = object.ccEnableArenas ?? false;
        message.objcClassPrefix = object.objcClassPrefix ?? "";
        message.csharpNamespace = object.csharpNamespace ?? "";
        message.swiftPrefix = object.swiftPrefix ?? "";
        message.phpClassPrefix = object.phpClassPrefix ?? "";
        message.phpNamespace = object.phpNamespace ?? "";
        message.phpMetadataNamespace = object.phpMetadataNamespace ?? "";
        message.rubyPackage = object.rubyPackage ?? "";
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = object.uninterpretedOption?.map((e) => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMessageOptions() {
    return {
        messageSetWireFormat: false,
        noStandardDescriptorAccessor: false,
        deprecated: false,
        mapEntry: false,
        deprecatedLegacyJsonFieldConflicts: false,
        features: undefined,
        uninterpretedOption: [],
    };
}
exports.MessageOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.messageSetWireFormat === true) {
            writer.uint32(8).bool(message.messageSetWireFormat);
        }
        if (message.noStandardDescriptorAccessor === true) {
            writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.mapEntry === true) {
            writer.uint32(56).bool(message.mapEntry);
        }
        if (message.deprecatedLegacyJsonFieldConflicts === true) {
            writer.uint32(88).bool(message.deprecatedLegacyJsonFieldConflicts);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.messageSetWireFormat = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.noStandardDescriptorAccessor = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.mapEntry = reader.bool();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.deprecatedLegacyJsonFieldConflicts = reader.bool();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            messageSetWireFormat: isSet(object.messageSetWireFormat) ? Boolean(object.messageSetWireFormat) : false,
            noStandardDescriptorAccessor: isSet(object.noStandardDescriptorAccessor)
                ? Boolean(object.noStandardDescriptorAccessor)
                : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            mapEntry: isSet(object.mapEntry) ? Boolean(object.mapEntry) : false,
            deprecatedLegacyJsonFieldConflicts: isSet(object.deprecatedLegacyJsonFieldConflicts)
                ? Boolean(object.deprecatedLegacyJsonFieldConflicts)
                : false,
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: Array.isArray(object?.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageSetWireFormat !== undefined && (obj.messageSetWireFormat = message.messageSetWireFormat);
        message.noStandardDescriptorAccessor !== undefined &&
            (obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.mapEntry !== undefined && (obj.mapEntry = message.mapEntry);
        message.deprecatedLegacyJsonFieldConflicts !== undefined &&
            (obj.deprecatedLegacyJsonFieldConflicts = message.deprecatedLegacyJsonFieldConflicts);
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    create(base) {
        return exports.MessageOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageOptions();
        message.messageSetWireFormat = object.messageSetWireFormat ?? false;
        message.noStandardDescriptorAccessor = object.noStandardDescriptorAccessor ?? false;
        message.deprecated = object.deprecated ?? false;
        message.mapEntry = object.mapEntry ?? false;
        message.deprecatedLegacyJsonFieldConflicts = object.deprecatedLegacyJsonFieldConflicts ?? false;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = object.uninterpretedOption?.map((e) => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFieldOptions() {
    return {
        ctype: 0,
        packed: false,
        jstype: 0,
        lazy: false,
        unverifiedLazy: false,
        deprecated: false,
        weak: false,
        debugRedact: false,
        retention: 0,
        targets: [],
        editionDefaults: [],
        features: undefined,
        uninterpretedOption: [],
    };
}
exports.FieldOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctype !== 0) {
            writer.uint32(8).int32(message.ctype);
        }
        if (message.packed === true) {
            writer.uint32(16).bool(message.packed);
        }
        if (message.jstype !== 0) {
            writer.uint32(48).int32(message.jstype);
        }
        if (message.lazy === true) {
            writer.uint32(40).bool(message.lazy);
        }
        if (message.unverifiedLazy === true) {
            writer.uint32(120).bool(message.unverifiedLazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        if (message.debugRedact === true) {
            writer.uint32(128).bool(message.debugRedact);
        }
        if (message.retention !== 0) {
            writer.uint32(136).int32(message.retention);
        }
        writer.uint32(154).fork();
        for (const v of message.targets) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.editionDefaults) {
            exports.FieldOptions_EditionDefault.encode(v, writer.uint32(162).fork()).ldelim();
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(170).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ctype = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.packed = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.jstype = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.lazy = reader.bool();
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.unverifiedLazy = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.weak = reader.bool();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.debugRedact = reader.bool();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.retention = reader.int32();
                    continue;
                case 19:
                    if (tag === 152) {
                        message.targets.push(reader.int32());
                        continue;
                    }
                    if (tag === 154) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.targets.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.editionDefaults.push(exports.FieldOptions_EditionDefault.decode(reader, reader.uint32()));
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : 0,
            packed: isSet(object.packed) ? Boolean(object.packed) : false,
            jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : 0,
            lazy: isSet(object.lazy) ? Boolean(object.lazy) : false,
            unverifiedLazy: isSet(object.unverifiedLazy) ? Boolean(object.unverifiedLazy) : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            weak: isSet(object.weak) ? Boolean(object.weak) : false,
            debugRedact: isSet(object.debugRedact) ? Boolean(object.debugRedact) : false,
            retention: isSet(object.retention) ? fieldOptions_OptionRetentionFromJSON(object.retention) : 0,
            targets: Array.isArray(object?.targets)
                ? object.targets.map((e) => fieldOptions_OptionTargetTypeFromJSON(e))
                : [],
            editionDefaults: Array.isArray(object?.editionDefaults)
                ? object.editionDefaults.map((e) => exports.FieldOptions_EditionDefault.fromJSON(e))
                : [],
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: Array.isArray(object?.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
        message.packed !== undefined && (obj.packed = message.packed);
        message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
        message.lazy !== undefined && (obj.lazy = message.lazy);
        message.unverifiedLazy !== undefined && (obj.unverifiedLazy = message.unverifiedLazy);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.weak !== undefined && (obj.weak = message.weak);
        message.debugRedact !== undefined && (obj.debugRedact = message.debugRedact);
        message.retention !== undefined && (obj.retention = fieldOptions_OptionRetentionToJSON(message.retention));
        if (message.targets) {
            obj.targets = message.targets.map((e) => fieldOptions_OptionTargetTypeToJSON(e));
        }
        else {
            obj.targets = [];
        }
        if (message.editionDefaults) {
            obj.editionDefaults = message.editionDefaults.map((e) => e ? exports.FieldOptions_EditionDefault.toJSON(e) : undefined);
        }
        else {
            obj.editionDefaults = [];
        }
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    create(base) {
        return exports.FieldOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFieldOptions();
        message.ctype = object.ctype ?? 0;
        message.packed = object.packed ?? false;
        message.jstype = object.jstype ?? 0;
        message.lazy = object.lazy ?? false;
        message.unverifiedLazy = object.unverifiedLazy ?? false;
        message.deprecated = object.deprecated ?? false;
        message.weak = object.weak ?? false;
        message.debugRedact = object.debugRedact ?? false;
        message.retention = object.retention ?? 0;
        message.targets = object.targets?.map((e) => e) || [];
        message.editionDefaults = object.editionDefaults?.map((e) => exports.FieldOptions_EditionDefault.fromPartial(e)) || [];
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = object.uninterpretedOption?.map((e) => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFieldOptions_EditionDefault() {
    return { edition: 0, value: "" };
}
exports.FieldOptions_EditionDefault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.edition !== 0) {
            writer.uint32(24).int32(message.edition);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions_EditionDefault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.edition = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
            value: isSet(object.value) ? String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.edition !== undefined && (obj.edition = editionToJSON(message.edition));
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.FieldOptions_EditionDefault.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFieldOptions_EditionDefault();
        message.edition = object.edition ?? 0;
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseOneofOptions() {
    return { features: undefined, uninterpretedOption: [] };
}
exports.OneofOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: Array.isArray(object?.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    create(base) {
        return exports.OneofOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOneofOptions();
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = object.uninterpretedOption?.map((e) => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEnumOptions() {
    return {
        allowAlias: false,
        deprecated: false,
        deprecatedLegacyJsonFieldConflicts: false,
        features: undefined,
        uninterpretedOption: [],
    };
}
exports.EnumOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.allowAlias === true) {
            writer.uint32(16).bool(message.allowAlias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.deprecatedLegacyJsonFieldConflicts === true) {
            writer.uint32(48).bool(message.deprecatedLegacyJsonFieldConflicts);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.allowAlias = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.deprecatedLegacyJsonFieldConflicts = reader.bool();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            allowAlias: isSet(object.allowAlias) ? Boolean(object.allowAlias) : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            deprecatedLegacyJsonFieldConflicts: isSet(object.deprecatedLegacyJsonFieldConflicts)
                ? Boolean(object.deprecatedLegacyJsonFieldConflicts)
                : false,
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: Array.isArray(object?.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowAlias !== undefined && (obj.allowAlias = message.allowAlias);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.deprecatedLegacyJsonFieldConflicts !== undefined &&
            (obj.deprecatedLegacyJsonFieldConflicts = message.deprecatedLegacyJsonFieldConflicts);
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    create(base) {
        return exports.EnumOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnumOptions();
        message.allowAlias = object.allowAlias ?? false;
        message.deprecated = object.deprecated ?? false;
        message.deprecatedLegacyJsonFieldConflicts = object.deprecatedLegacyJsonFieldConflicts ?? false;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = object.uninterpretedOption?.map((e) => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEnumValueOptions() {
    return { deprecated: false, features: undefined, debugRedact: false, uninterpretedOption: [] };
}
exports.EnumValueOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(18).fork()).ldelim();
        }
        if (message.debugRedact === true) {
            writer.uint32(24).bool(message.debugRedact);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.debugRedact = reader.bool();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            debugRedact: isSet(object.debugRedact) ? Boolean(object.debugRedact) : false,
            uninterpretedOption: Array.isArray(object?.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        message.debugRedact !== undefined && (obj.debugRedact = message.debugRedact);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    create(base) {
        return exports.EnumValueOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEnumValueOptions();
        message.deprecated = object.deprecated ?? false;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.debugRedact = object.debugRedact ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map((e) => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
};
function createBaseServiceOptions() {
    return { features: undefined, deprecated: false, uninterpretedOption: [] };
}
exports.ServiceOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(274).fork()).ldelim();
        }
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 34:
                    if (tag !== 274) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 33:
                    if (tag !== 264) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            uninterpretedOption: Array.isArray(object?.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    create(base) {
        return exports.ServiceOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseServiceOptions();
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.deprecated = object.deprecated ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map((e) => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMethodOptions() {
    return { deprecated: false, idempotencyLevel: 0, features: undefined, uninterpretedOption: [] };
}
exports.MethodOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotencyLevel !== 0) {
            writer.uint32(272).int32(message.idempotencyLevel);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(282).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    if (tag !== 264) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 34:
                    if (tag !== 272) {
                        break;
                    }
                    message.idempotencyLevel = reader.int32();
                    continue;
                case 35:
                    if (tag !== 282) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            idempotencyLevel: isSet(object.idempotencyLevel)
                ? methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel)
                : 0,
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: Array.isArray(object?.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.idempotencyLevel !== undefined &&
            (obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    create(base) {
        return exports.MethodOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMethodOptions();
        message.deprecated = object.deprecated ?? false;
        message.idempotencyLevel = object.idempotencyLevel ?? 0;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = object.uninterpretedOption?.map((e) => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUninterpretedOption() {
    return {
        name: [],
        identifierValue: "",
        positiveIntValue: long_1.default.UZERO,
        negativeIntValue: long_1.default.ZERO,
        doubleValue: 0,
        stringValue: Buffer.alloc(0),
        aggregateValue: "",
    };
}
exports.UninterpretedOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.name) {
            exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.identifierValue !== "") {
            writer.uint32(26).string(message.identifierValue);
        }
        if (!message.positiveIntValue.isZero()) {
            writer.uint32(32).uint64(message.positiveIntValue);
        }
        if (!message.negativeIntValue.isZero()) {
            writer.uint32(40).int64(message.negativeIntValue);
        }
        if (message.doubleValue !== 0) {
            writer.uint32(49).double(message.doubleValue);
        }
        if (message.stringValue.length !== 0) {
            writer.uint32(58).bytes(message.stringValue);
        }
        if (message.aggregateValue !== "") {
            writer.uint32(66).string(message.aggregateValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.identifierValue = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.positiveIntValue = reader.uint64();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.negativeIntValue = reader.int64();
                    continue;
                case 6:
                    if (tag !== 49) {
                        break;
                    }
                    message.doubleValue = reader.double();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.stringValue = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.aggregateValue = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: Array.isArray(object?.name) ? object.name.map((e) => exports.UninterpretedOption_NamePart.fromJSON(e)) : [],
            identifierValue: isSet(object.identifierValue) ? String(object.identifierValue) : "",
            positiveIntValue: isSet(object.positiveIntValue) ? long_1.default.fromValue(object.positiveIntValue) : long_1.default.UZERO,
            negativeIntValue: isSet(object.negativeIntValue) ? long_1.default.fromValue(object.negativeIntValue) : long_1.default.ZERO,
            doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : 0,
            stringValue: isSet(object.stringValue) ? Buffer.from(bytesFromBase64(object.stringValue)) : Buffer.alloc(0),
            aggregateValue: isSet(object.aggregateValue) ? String(object.aggregateValue) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name) {
            obj.name = message.name.map((e) => e ? exports.UninterpretedOption_NamePart.toJSON(e) : undefined);
        }
        else {
            obj.name = [];
        }
        message.identifierValue !== undefined && (obj.identifierValue = message.identifierValue);
        message.positiveIntValue !== undefined &&
            (obj.positiveIntValue = (message.positiveIntValue || long_1.default.UZERO).toString());
        message.negativeIntValue !== undefined &&
            (obj.negativeIntValue = (message.negativeIntValue || long_1.default.ZERO).toString());
        message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
        message.stringValue !== undefined &&
            (obj.stringValue = base64FromBytes(message.stringValue !== undefined ? message.stringValue : Buffer.alloc(0)));
        message.aggregateValue !== undefined && (obj.aggregateValue = message.aggregateValue);
        return obj;
    },
    create(base) {
        return exports.UninterpretedOption.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUninterpretedOption();
        message.name = object.name?.map((e) => exports.UninterpretedOption_NamePart.fromPartial(e)) || [];
        message.identifierValue = object.identifierValue ?? "";
        message.positiveIntValue = (object.positiveIntValue !== undefined && object.positiveIntValue !== null)
            ? long_1.default.fromValue(object.positiveIntValue)
            : long_1.default.UZERO;
        message.negativeIntValue = (object.negativeIntValue !== undefined && object.negativeIntValue !== null)
            ? long_1.default.fromValue(object.negativeIntValue)
            : long_1.default.ZERO;
        message.doubleValue = object.doubleValue ?? 0;
        message.stringValue = object.stringValue ?? Buffer.alloc(0);
        message.aggregateValue = object.aggregateValue ?? "";
        return message;
    },
};
function createBaseUninterpretedOption_NamePart() {
    return { namePart: "", isExtension: false };
}
exports.UninterpretedOption_NamePart = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.namePart !== "") {
            writer.uint32(10).string(message.namePart);
        }
        if (message.isExtension === true) {
            writer.uint32(16).bool(message.isExtension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption_NamePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.namePart = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isExtension = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            namePart: isSet(object.namePart) ? String(object.namePart) : "",
            isExtension: isSet(object.isExtension) ? Boolean(object.isExtension) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.namePart !== undefined && (obj.namePart = message.namePart);
        message.isExtension !== undefined && (obj.isExtension = message.isExtension);
        return obj;
    },
    create(base) {
        return exports.UninterpretedOption_NamePart.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUninterpretedOption_NamePart();
        message.namePart = object.namePart ?? "";
        message.isExtension = object.isExtension ?? false;
        return message;
    },
};
function createBaseFeatureSet() {
    return {
        fieldPresence: 0,
        enumType: 0,
        repeatedFieldEncoding: 0,
        utf8Validation: 0,
        messageEncoding: 0,
        jsonFormat: 0,
    };
}
exports.FeatureSet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fieldPresence !== 0) {
            writer.uint32(8).int32(message.fieldPresence);
        }
        if (message.enumType !== 0) {
            writer.uint32(16).int32(message.enumType);
        }
        if (message.repeatedFieldEncoding !== 0) {
            writer.uint32(24).int32(message.repeatedFieldEncoding);
        }
        if (message.utf8Validation !== 0) {
            writer.uint32(32).int32(message.utf8Validation);
        }
        if (message.messageEncoding !== 0) {
            writer.uint32(40).int32(message.messageEncoding);
        }
        if (message.jsonFormat !== 0) {
            writer.uint32(48).int32(message.jsonFormat);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeatureSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.fieldPresence = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.enumType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.repeatedFieldEncoding = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.utf8Validation = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.messageEncoding = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.jsonFormat = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            fieldPresence: isSet(object.fieldPresence) ? featureSet_FieldPresenceFromJSON(object.fieldPresence) : 0,
            enumType: isSet(object.enumType) ? featureSet_EnumTypeFromJSON(object.enumType) : 0,
            repeatedFieldEncoding: isSet(object.repeatedFieldEncoding)
                ? featureSet_RepeatedFieldEncodingFromJSON(object.repeatedFieldEncoding)
                : 0,
            utf8Validation: isSet(object.utf8Validation) ? featureSet_Utf8ValidationFromJSON(object.utf8Validation) : 0,
            messageEncoding: isSet(object.messageEncoding) ? featureSet_MessageEncodingFromJSON(object.messageEncoding) : 0,
            jsonFormat: isSet(object.jsonFormat) ? featureSet_JsonFormatFromJSON(object.jsonFormat) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fieldPresence !== undefined && (obj.fieldPresence = featureSet_FieldPresenceToJSON(message.fieldPresence));
        message.enumType !== undefined && (obj.enumType = featureSet_EnumTypeToJSON(message.enumType));
        message.repeatedFieldEncoding !== undefined &&
            (obj.repeatedFieldEncoding = featureSet_RepeatedFieldEncodingToJSON(message.repeatedFieldEncoding));
        message.utf8Validation !== undefined &&
            (obj.utf8Validation = featureSet_Utf8ValidationToJSON(message.utf8Validation));
        message.messageEncoding !== undefined &&
            (obj.messageEncoding = featureSet_MessageEncodingToJSON(message.messageEncoding));
        message.jsonFormat !== undefined && (obj.jsonFormat = featureSet_JsonFormatToJSON(message.jsonFormat));
        return obj;
    },
    create(base) {
        return exports.FeatureSet.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFeatureSet();
        message.fieldPresence = object.fieldPresence ?? 0;
        message.enumType = object.enumType ?? 0;
        message.repeatedFieldEncoding = object.repeatedFieldEncoding ?? 0;
        message.utf8Validation = object.utf8Validation ?? 0;
        message.messageEncoding = object.messageEncoding ?? 0;
        message.jsonFormat = object.jsonFormat ?? 0;
        return message;
    },
};
function createBaseFeatureSetDefaults() {
    return { defaults: [], minimumEdition: 0, maximumEdition: 0 };
}
exports.FeatureSetDefaults = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.defaults) {
            exports.FeatureSetDefaults_FeatureSetEditionDefault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.minimumEdition !== 0) {
            writer.uint32(32).int32(message.minimumEdition);
        }
        if (message.maximumEdition !== 0) {
            writer.uint32(40).int32(message.maximumEdition);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeatureSetDefaults();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.defaults.push(exports.FeatureSetDefaults_FeatureSetEditionDefault.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.minimumEdition = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.maximumEdition = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            defaults: Array.isArray(object?.defaults)
                ? object.defaults.map((e) => exports.FeatureSetDefaults_FeatureSetEditionDefault.fromJSON(e))
                : [],
            minimumEdition: isSet(object.minimumEdition) ? editionFromJSON(object.minimumEdition) : 0,
            maximumEdition: isSet(object.maximumEdition) ? editionFromJSON(object.maximumEdition) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.defaults) {
            obj.defaults = message.defaults.map((e) => e ? exports.FeatureSetDefaults_FeatureSetEditionDefault.toJSON(e) : undefined);
        }
        else {
            obj.defaults = [];
        }
        message.minimumEdition !== undefined && (obj.minimumEdition = editionToJSON(message.minimumEdition));
        message.maximumEdition !== undefined && (obj.maximumEdition = editionToJSON(message.maximumEdition));
        return obj;
    },
    create(base) {
        return exports.FeatureSetDefaults.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFeatureSetDefaults();
        message.defaults = object.defaults?.map((e) => exports.FeatureSetDefaults_FeatureSetEditionDefault.fromPartial(e)) || [];
        message.minimumEdition = object.minimumEdition ?? 0;
        message.maximumEdition = object.maximumEdition ?? 0;
        return message;
    },
};
function createBaseFeatureSetDefaults_FeatureSetEditionDefault() {
    return { edition: 0, features: undefined };
}
exports.FeatureSetDefaults_FeatureSetEditionDefault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.edition !== 0) {
            writer.uint32(24).int32(message.edition);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.edition = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.edition !== undefined && (obj.edition = editionToJSON(message.edition));
        message.features !== undefined &&
            (obj.features = message.features ? exports.FeatureSet.toJSON(message.features) : undefined);
        return obj;
    },
    create(base) {
        return exports.FeatureSetDefaults_FeatureSetEditionDefault.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
        message.edition = object.edition ?? 0;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        return message;
    },
};
function createBaseSourceCodeInfo() {
    return { location: [] };
}
exports.SourceCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.location) {
            exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            location: Array.isArray(object?.location)
                ? object.location.map((e) => exports.SourceCodeInfo_Location.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.location) {
            obj.location = message.location.map((e) => e ? exports.SourceCodeInfo_Location.toJSON(e) : undefined);
        }
        else {
            obj.location = [];
        }
        return obj;
    },
    create(base) {
        return exports.SourceCodeInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSourceCodeInfo();
        message.location = object.location?.map((e) => exports.SourceCodeInfo_Location.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSourceCodeInfo_Location() {
    return { path: [], span: [], leadingComments: "", trailingComments: "", leadingDetachedComments: [] };
}
exports.SourceCodeInfo_Location = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.span) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.leadingComments !== "") {
            writer.uint32(26).string(message.leadingComments);
        }
        if (message.trailingComments !== "") {
            writer.uint32(34).string(message.trailingComments);
        }
        for (const v of message.leadingDetachedComments) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo_Location();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag === 16) {
                        message.span.push(reader.int32());
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.leadingComments = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.trailingComments = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.leadingDetachedComments.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            path: Array.isArray(object?.path) ? object.path.map((e) => Number(e)) : [],
            span: Array.isArray(object?.span) ? object.span.map((e) => Number(e)) : [],
            leadingComments: isSet(object.leadingComments) ? String(object.leadingComments) : "",
            trailingComments: isSet(object.trailingComments) ? String(object.trailingComments) : "",
            leadingDetachedComments: Array.isArray(object?.leadingDetachedComments)
                ? object.leadingDetachedComments.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        else {
            obj.path = [];
        }
        if (message.span) {
            obj.span = message.span.map((e) => Math.round(e));
        }
        else {
            obj.span = [];
        }
        message.leadingComments !== undefined && (obj.leadingComments = message.leadingComments);
        message.trailingComments !== undefined && (obj.trailingComments = message.trailingComments);
        if (message.leadingDetachedComments) {
            obj.leadingDetachedComments = message.leadingDetachedComments.map((e) => e);
        }
        else {
            obj.leadingDetachedComments = [];
        }
        return obj;
    },
    create(base) {
        return exports.SourceCodeInfo_Location.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSourceCodeInfo_Location();
        message.path = object.path?.map((e) => e) || [];
        message.span = object.span?.map((e) => e) || [];
        message.leadingComments = object.leadingComments ?? "";
        message.trailingComments = object.trailingComments ?? "";
        message.leadingDetachedComments = object.leadingDetachedComments?.map((e) => e) || [];
        return message;
    },
};
function createBaseGeneratedCodeInfo() {
    return { annotation: [] };
}
exports.GeneratedCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.annotation) {
            exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            annotation: Array.isArray(object?.annotation)
                ? object.annotation.map((e) => exports.GeneratedCodeInfo_Annotation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.annotation) {
            obj.annotation = message.annotation.map((e) => e ? exports.GeneratedCodeInfo_Annotation.toJSON(e) : undefined);
        }
        else {
            obj.annotation = [];
        }
        return obj;
    },
    create(base) {
        return exports.GeneratedCodeInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGeneratedCodeInfo();
        message.annotation = object.annotation?.map((e) => exports.GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGeneratedCodeInfo_Annotation() {
    return { path: [], sourceFile: "", begin: 0, end: 0, semantic: 0 };
}
exports.GeneratedCodeInfo_Annotation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.sourceFile !== "") {
            writer.uint32(18).string(message.sourceFile);
        }
        if (message.begin !== 0) {
            writer.uint32(24).int32(message.begin);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        if (message.semantic !== 0) {
            writer.uint32(40).int32(message.semantic);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo_Annotation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourceFile = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.begin = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.end = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.semantic = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            path: Array.isArray(object?.path) ? object.path.map((e) => Number(e)) : [],
            sourceFile: isSet(object.sourceFile) ? String(object.sourceFile) : "",
            begin: isSet(object.begin) ? Number(object.begin) : 0,
            end: isSet(object.end) ? Number(object.end) : 0,
            semantic: isSet(object.semantic) ? generatedCodeInfo_Annotation_SemanticFromJSON(object.semantic) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        else {
            obj.path = [];
        }
        message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
        message.begin !== undefined && (obj.begin = Math.round(message.begin));
        message.end !== undefined && (obj.end = Math.round(message.end));
        message.semantic !== undefined && (obj.semantic = generatedCodeInfo_Annotation_SemanticToJSON(message.semantic));
        return obj;
    },
    create(base) {
        return exports.GeneratedCodeInfo_Annotation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGeneratedCodeInfo_Annotation();
        message.path = object.path?.map((e) => e) || [];
        message.sourceFile = object.sourceFile ?? "";
        message.begin = object.begin ?? 0;
        message.end = object.end ?? 0;
        message.semantic = object.semantic ?? 0;
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
