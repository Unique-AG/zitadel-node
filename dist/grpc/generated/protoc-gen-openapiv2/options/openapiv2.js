"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityRequirement_SecurityRequirementEntry = exports.SecurityRequirement_SecurityRequirementValue = exports.SecurityRequirement = exports.SecurityScheme_ExtensionsEntry = exports.SecurityScheme = exports.SecurityDefinitions_SecurityEntry = exports.SecurityDefinitions = exports.Tag_ExtensionsEntry = exports.Tag = exports.JSONSchema_ExtensionsEntry = exports.JSONSchema_FieldConfiguration = exports.JSONSchema = exports.Schema = exports.ExternalDocumentation = exports.License = exports.Contact = exports.Info_ExtensionsEntry = exports.Info = exports.Response_ExtensionsEntry = exports.Response_ExamplesEntry = exports.Response_HeadersEntry = exports.Response = exports.Header = exports.HeaderParameter = exports.Parameters = exports.Operation_ExtensionsEntry = exports.Operation_ResponsesEntry = exports.Operation = exports.Swagger_ExtensionsEntry = exports.Swagger_ResponsesEntry = exports.Swagger = exports.securityScheme_FlowToJSON = exports.securityScheme_FlowFromJSON = exports.SecurityScheme_Flow = exports.securityScheme_InToJSON = exports.securityScheme_InFromJSON = exports.SecurityScheme_In = exports.securityScheme_TypeToJSON = exports.securityScheme_TypeFromJSON = exports.SecurityScheme_Type = exports.jSONSchema_JSONSchemaSimpleTypesToJSON = exports.jSONSchema_JSONSchemaSimpleTypesFromJSON = exports.JSONSchema_JSONSchemaSimpleTypes = exports.headerParameter_TypeToJSON = exports.headerParameter_TypeFromJSON = exports.HeaderParameter_Type = exports.schemeToJSON = exports.schemeFromJSON = exports.Scheme = exports.protobufPackage = void 0;
exports.Scopes_ScopeEntry = exports.Scopes = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("../../google/protobuf/struct");
exports.protobufPackage = "grpc.gateway.protoc_gen_openapiv2.options";
/**
 * Scheme describes the schemes supported by the OpenAPI Swagger
 * and Operation objects.
 */
var Scheme;
(function (Scheme) {
    Scheme[Scheme["UNKNOWN"] = 0] = "UNKNOWN";
    Scheme[Scheme["HTTP"] = 1] = "HTTP";
    Scheme[Scheme["HTTPS"] = 2] = "HTTPS";
    Scheme[Scheme["WS"] = 3] = "WS";
    Scheme[Scheme["WSS"] = 4] = "WSS";
    Scheme[Scheme["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Scheme || (exports.Scheme = Scheme = {}));
function schemeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return Scheme.UNKNOWN;
        case 1:
        case "HTTP":
            return Scheme.HTTP;
        case 2:
        case "HTTPS":
            return Scheme.HTTPS;
        case 3:
        case "WS":
            return Scheme.WS;
        case 4:
        case "WSS":
            return Scheme.WSS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Scheme.UNRECOGNIZED;
    }
}
exports.schemeFromJSON = schemeFromJSON;
function schemeToJSON(object) {
    switch (object) {
        case Scheme.UNKNOWN:
            return "UNKNOWN";
        case Scheme.HTTP:
            return "HTTP";
        case Scheme.HTTPS:
            return "HTTPS";
        case Scheme.WS:
            return "WS";
        case Scheme.WSS:
            return "WSS";
        case Scheme.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.schemeToJSON = schemeToJSON;
/**
 * `Type` is a a supported HTTP header type.
 * See https://swagger.io/specification/v2/#parameterType.
 */
var HeaderParameter_Type;
(function (HeaderParameter_Type) {
    HeaderParameter_Type[HeaderParameter_Type["UNKNOWN"] = 0] = "UNKNOWN";
    HeaderParameter_Type[HeaderParameter_Type["STRING"] = 1] = "STRING";
    HeaderParameter_Type[HeaderParameter_Type["NUMBER"] = 2] = "NUMBER";
    HeaderParameter_Type[HeaderParameter_Type["INTEGER"] = 3] = "INTEGER";
    HeaderParameter_Type[HeaderParameter_Type["BOOLEAN"] = 4] = "BOOLEAN";
    HeaderParameter_Type[HeaderParameter_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HeaderParameter_Type || (exports.HeaderParameter_Type = HeaderParameter_Type = {}));
function headerParameter_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return HeaderParameter_Type.UNKNOWN;
        case 1:
        case "STRING":
            return HeaderParameter_Type.STRING;
        case 2:
        case "NUMBER":
            return HeaderParameter_Type.NUMBER;
        case 3:
        case "INTEGER":
            return HeaderParameter_Type.INTEGER;
        case 4:
        case "BOOLEAN":
            return HeaderParameter_Type.BOOLEAN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HeaderParameter_Type.UNRECOGNIZED;
    }
}
exports.headerParameter_TypeFromJSON = headerParameter_TypeFromJSON;
function headerParameter_TypeToJSON(object) {
    switch (object) {
        case HeaderParameter_Type.UNKNOWN:
            return "UNKNOWN";
        case HeaderParameter_Type.STRING:
            return "STRING";
        case HeaderParameter_Type.NUMBER:
            return "NUMBER";
        case HeaderParameter_Type.INTEGER:
            return "INTEGER";
        case HeaderParameter_Type.BOOLEAN:
            return "BOOLEAN";
        case HeaderParameter_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.headerParameter_TypeToJSON = headerParameter_TypeToJSON;
var JSONSchema_JSONSchemaSimpleTypes;
(function (JSONSchema_JSONSchemaSimpleTypes) {
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["UNKNOWN"] = 0] = "UNKNOWN";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["ARRAY"] = 1] = "ARRAY";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["BOOLEAN"] = 2] = "BOOLEAN";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["INTEGER"] = 3] = "INTEGER";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["NULL"] = 4] = "NULL";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["NUMBER"] = 5] = "NUMBER";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["OBJECT"] = 6] = "OBJECT";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["STRING"] = 7] = "STRING";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(JSONSchema_JSONSchemaSimpleTypes || (exports.JSONSchema_JSONSchemaSimpleTypes = JSONSchema_JSONSchemaSimpleTypes = {}));
function jSONSchema_JSONSchemaSimpleTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return JSONSchema_JSONSchemaSimpleTypes.UNKNOWN;
        case 1:
        case "ARRAY":
            return JSONSchema_JSONSchemaSimpleTypes.ARRAY;
        case 2:
        case "BOOLEAN":
            return JSONSchema_JSONSchemaSimpleTypes.BOOLEAN;
        case 3:
        case "INTEGER":
            return JSONSchema_JSONSchemaSimpleTypes.INTEGER;
        case 4:
        case "NULL":
            return JSONSchema_JSONSchemaSimpleTypes.NULL;
        case 5:
        case "NUMBER":
            return JSONSchema_JSONSchemaSimpleTypes.NUMBER;
        case 6:
        case "OBJECT":
            return JSONSchema_JSONSchemaSimpleTypes.OBJECT;
        case 7:
        case "STRING":
            return JSONSchema_JSONSchemaSimpleTypes.STRING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return JSONSchema_JSONSchemaSimpleTypes.UNRECOGNIZED;
    }
}
exports.jSONSchema_JSONSchemaSimpleTypesFromJSON = jSONSchema_JSONSchemaSimpleTypesFromJSON;
function jSONSchema_JSONSchemaSimpleTypesToJSON(object) {
    switch (object) {
        case JSONSchema_JSONSchemaSimpleTypes.UNKNOWN:
            return "UNKNOWN";
        case JSONSchema_JSONSchemaSimpleTypes.ARRAY:
            return "ARRAY";
        case JSONSchema_JSONSchemaSimpleTypes.BOOLEAN:
            return "BOOLEAN";
        case JSONSchema_JSONSchemaSimpleTypes.INTEGER:
            return "INTEGER";
        case JSONSchema_JSONSchemaSimpleTypes.NULL:
            return "NULL";
        case JSONSchema_JSONSchemaSimpleTypes.NUMBER:
            return "NUMBER";
        case JSONSchema_JSONSchemaSimpleTypes.OBJECT:
            return "OBJECT";
        case JSONSchema_JSONSchemaSimpleTypes.STRING:
            return "STRING";
        case JSONSchema_JSONSchemaSimpleTypes.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.jSONSchema_JSONSchemaSimpleTypesToJSON = jSONSchema_JSONSchemaSimpleTypesToJSON;
/**
 * The type of the security scheme. Valid values are "basic",
 * "apiKey" or "oauth2".
 */
var SecurityScheme_Type;
(function (SecurityScheme_Type) {
    SecurityScheme_Type[SecurityScheme_Type["TYPE_INVALID"] = 0] = "TYPE_INVALID";
    SecurityScheme_Type[SecurityScheme_Type["TYPE_BASIC"] = 1] = "TYPE_BASIC";
    SecurityScheme_Type[SecurityScheme_Type["TYPE_API_KEY"] = 2] = "TYPE_API_KEY";
    SecurityScheme_Type[SecurityScheme_Type["TYPE_OAUTH2"] = 3] = "TYPE_OAUTH2";
    SecurityScheme_Type[SecurityScheme_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityScheme_Type || (exports.SecurityScheme_Type = SecurityScheme_Type = {}));
function securityScheme_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_INVALID":
            return SecurityScheme_Type.TYPE_INVALID;
        case 1:
        case "TYPE_BASIC":
            return SecurityScheme_Type.TYPE_BASIC;
        case 2:
        case "TYPE_API_KEY":
            return SecurityScheme_Type.TYPE_API_KEY;
        case 3:
        case "TYPE_OAUTH2":
            return SecurityScheme_Type.TYPE_OAUTH2;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityScheme_Type.UNRECOGNIZED;
    }
}
exports.securityScheme_TypeFromJSON = securityScheme_TypeFromJSON;
function securityScheme_TypeToJSON(object) {
    switch (object) {
        case SecurityScheme_Type.TYPE_INVALID:
            return "TYPE_INVALID";
        case SecurityScheme_Type.TYPE_BASIC:
            return "TYPE_BASIC";
        case SecurityScheme_Type.TYPE_API_KEY:
            return "TYPE_API_KEY";
        case SecurityScheme_Type.TYPE_OAUTH2:
            return "TYPE_OAUTH2";
        case SecurityScheme_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.securityScheme_TypeToJSON = securityScheme_TypeToJSON;
/** The location of the API key. Valid values are "query" or "header". */
var SecurityScheme_In;
(function (SecurityScheme_In) {
    SecurityScheme_In[SecurityScheme_In["IN_INVALID"] = 0] = "IN_INVALID";
    SecurityScheme_In[SecurityScheme_In["IN_QUERY"] = 1] = "IN_QUERY";
    SecurityScheme_In[SecurityScheme_In["IN_HEADER"] = 2] = "IN_HEADER";
    SecurityScheme_In[SecurityScheme_In["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityScheme_In || (exports.SecurityScheme_In = SecurityScheme_In = {}));
function securityScheme_InFromJSON(object) {
    switch (object) {
        case 0:
        case "IN_INVALID":
            return SecurityScheme_In.IN_INVALID;
        case 1:
        case "IN_QUERY":
            return SecurityScheme_In.IN_QUERY;
        case 2:
        case "IN_HEADER":
            return SecurityScheme_In.IN_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityScheme_In.UNRECOGNIZED;
    }
}
exports.securityScheme_InFromJSON = securityScheme_InFromJSON;
function securityScheme_InToJSON(object) {
    switch (object) {
        case SecurityScheme_In.IN_INVALID:
            return "IN_INVALID";
        case SecurityScheme_In.IN_QUERY:
            return "IN_QUERY";
        case SecurityScheme_In.IN_HEADER:
            return "IN_HEADER";
        case SecurityScheme_In.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.securityScheme_InToJSON = securityScheme_InToJSON;
/**
 * The flow used by the OAuth2 security scheme. Valid values are
 * "implicit", "password", "application" or "accessCode".
 */
var SecurityScheme_Flow;
(function (SecurityScheme_Flow) {
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_INVALID"] = 0] = "FLOW_INVALID";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_IMPLICIT"] = 1] = "FLOW_IMPLICIT";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_PASSWORD"] = 2] = "FLOW_PASSWORD";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_APPLICATION"] = 3] = "FLOW_APPLICATION";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_ACCESS_CODE"] = 4] = "FLOW_ACCESS_CODE";
    SecurityScheme_Flow[SecurityScheme_Flow["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityScheme_Flow || (exports.SecurityScheme_Flow = SecurityScheme_Flow = {}));
function securityScheme_FlowFromJSON(object) {
    switch (object) {
        case 0:
        case "FLOW_INVALID":
            return SecurityScheme_Flow.FLOW_INVALID;
        case 1:
        case "FLOW_IMPLICIT":
            return SecurityScheme_Flow.FLOW_IMPLICIT;
        case 2:
        case "FLOW_PASSWORD":
            return SecurityScheme_Flow.FLOW_PASSWORD;
        case 3:
        case "FLOW_APPLICATION":
            return SecurityScheme_Flow.FLOW_APPLICATION;
        case 4:
        case "FLOW_ACCESS_CODE":
            return SecurityScheme_Flow.FLOW_ACCESS_CODE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityScheme_Flow.UNRECOGNIZED;
    }
}
exports.securityScheme_FlowFromJSON = securityScheme_FlowFromJSON;
function securityScheme_FlowToJSON(object) {
    switch (object) {
        case SecurityScheme_Flow.FLOW_INVALID:
            return "FLOW_INVALID";
        case SecurityScheme_Flow.FLOW_IMPLICIT:
            return "FLOW_IMPLICIT";
        case SecurityScheme_Flow.FLOW_PASSWORD:
            return "FLOW_PASSWORD";
        case SecurityScheme_Flow.FLOW_APPLICATION:
            return "FLOW_APPLICATION";
        case SecurityScheme_Flow.FLOW_ACCESS_CODE:
            return "FLOW_ACCESS_CODE";
        case SecurityScheme_Flow.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.securityScheme_FlowToJSON = securityScheme_FlowToJSON;
function createBaseSwagger() {
    return {
        swagger: "",
        info: undefined,
        host: "",
        basePath: "",
        schemes: [],
        consumes: [],
        produces: [],
        responses: {},
        securityDefinitions: undefined,
        security: [],
        tags: [],
        externalDocs: undefined,
        extensions: {},
    };
}
exports.Swagger = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.swagger !== "") {
            writer.uint32(10).string(message.swagger);
        }
        if (message.info !== undefined) {
            exports.Info.encode(message.info, writer.uint32(18).fork()).ldelim();
        }
        if (message.host !== "") {
            writer.uint32(26).string(message.host);
        }
        if (message.basePath !== "") {
            writer.uint32(34).string(message.basePath);
        }
        writer.uint32(42).fork();
        for (const v of message.schemes) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.consumes) {
            writer.uint32(50).string(v);
        }
        for (const v of message.produces) {
            writer.uint32(58).string(v);
        }
        Object.entries(message.responses).forEach(([key, value]) => {
            exports.Swagger_ResponsesEntry.encode({ key: key, value }, writer.uint32(82).fork()).ldelim();
        });
        if (message.securityDefinitions !== undefined) {
            exports.SecurityDefinitions.encode(message.securityDefinitions, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.security) {
            exports.SecurityRequirement.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.tags) {
            exports.Tag.encode(v, writer.uint32(106).fork()).ldelim();
        }
        if (message.externalDocs !== undefined) {
            exports.ExternalDocumentation.encode(message.externalDocs, writer.uint32(114).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.Swagger_ExtensionsEntry.encode({ key: key, value }, writer.uint32(122).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwagger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.swagger = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.info = exports.Info.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.basePath = reader.string();
                    continue;
                case 5:
                    if (tag === 40) {
                        message.schemes.push(reader.int32());
                        continue;
                    }
                    if (tag === 42) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.schemes.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.consumes.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.produces.push(reader.string());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    const entry10 = exports.Swagger_ResponsesEntry.decode(reader, reader.uint32());
                    if (entry10.value !== undefined) {
                        message.responses[entry10.key] = entry10.value;
                    }
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.securityDefinitions = exports.SecurityDefinitions.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.security.push(exports.SecurityRequirement.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.tags.push(exports.Tag.decode(reader, reader.uint32()));
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.externalDocs = exports.ExternalDocumentation.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    const entry15 = exports.Swagger_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry15.value !== undefined) {
                        message.extensions[entry15.key] = entry15.value;
                    }
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
            swagger: isSet(object.swagger) ? String(object.swagger) : "",
            info: isSet(object.info) ? exports.Info.fromJSON(object.info) : undefined,
            host: isSet(object.host) ? String(object.host) : "",
            basePath: isSet(object.basePath) ? String(object.basePath) : "",
            schemes: Array.isArray(object?.schemes) ? object.schemes.map((e) => schemeFromJSON(e)) : [],
            consumes: Array.isArray(object?.consumes) ? object.consumes.map((e) => String(e)) : [],
            produces: Array.isArray(object?.produces) ? object.produces.map((e) => String(e)) : [],
            responses: isObject(object.responses)
                ? Object.entries(object.responses).reduce((acc, [key, value]) => {
                    acc[key] = exports.Response.fromJSON(value);
                    return acc;
                }, {})
                : {},
            securityDefinitions: isSet(object.securityDefinitions)
                ? exports.SecurityDefinitions.fromJSON(object.securityDefinitions)
                : undefined,
            security: Array.isArray(object?.security) ? object.security.map((e) => exports.SecurityRequirement.fromJSON(e)) : [],
            tags: Array.isArray(object?.tags) ? object.tags.map((e) => exports.Tag.fromJSON(e)) : [],
            externalDocs: isSet(object.externalDocs) ? exports.ExternalDocumentation.fromJSON(object.externalDocs) : undefined,
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.swagger !== undefined && (obj.swagger = message.swagger);
        message.info !== undefined && (obj.info = message.info ? exports.Info.toJSON(message.info) : undefined);
        message.host !== undefined && (obj.host = message.host);
        message.basePath !== undefined && (obj.basePath = message.basePath);
        if (message.schemes) {
            obj.schemes = message.schemes.map((e) => schemeToJSON(e));
        }
        else {
            obj.schemes = [];
        }
        if (message.consumes) {
            obj.consumes = message.consumes.map((e) => e);
        }
        else {
            obj.consumes = [];
        }
        if (message.produces) {
            obj.produces = message.produces.map((e) => e);
        }
        else {
            obj.produces = [];
        }
        obj.responses = {};
        if (message.responses) {
            Object.entries(message.responses).forEach(([k, v]) => {
                obj.responses[k] = exports.Response.toJSON(v);
            });
        }
        message.securityDefinitions !== undefined && (obj.securityDefinitions = message.securityDefinitions
            ? exports.SecurityDefinitions.toJSON(message.securityDefinitions)
            : undefined);
        if (message.security) {
            obj.security = message.security.map((e) => e ? exports.SecurityRequirement.toJSON(e) : undefined);
        }
        else {
            obj.security = [];
        }
        if (message.tags) {
            obj.tags = message.tags.map((e) => e ? exports.Tag.toJSON(e) : undefined);
        }
        else {
            obj.tags = [];
        }
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs ? exports.ExternalDocumentation.toJSON(message.externalDocs) : undefined);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.Swagger.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSwagger();
        message.swagger = object.swagger ?? "";
        message.info = (object.info !== undefined && object.info !== null) ? exports.Info.fromPartial(object.info) : undefined;
        message.host = object.host ?? "";
        message.basePath = object.basePath ?? "";
        message.schemes = object.schemes?.map((e) => e) || [];
        message.consumes = object.consumes?.map((e) => e) || [];
        message.produces = object.produces?.map((e) => e) || [];
        message.responses = Object.entries(object.responses ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.Response.fromPartial(value);
            }
            return acc;
        }, {});
        message.securityDefinitions = (object.securityDefinitions !== undefined && object.securityDefinitions !== null)
            ? exports.SecurityDefinitions.fromPartial(object.securityDefinitions)
            : undefined;
        message.security = object.security?.map((e) => exports.SecurityRequirement.fromPartial(e)) || [];
        message.tags = object.tags?.map((e) => exports.Tag.fromPartial(e)) || [];
        message.externalDocs = (object.externalDocs !== undefined && object.externalDocs !== null)
            ? exports.ExternalDocumentation.fromPartial(object.externalDocs)
            : undefined;
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseSwagger_ResponsesEntry() {
    return { key: "", value: undefined };
}
exports.Swagger_ResponsesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Response.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwagger_ResponsesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.Response.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.Response.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.Response.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.Swagger_ResponsesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSwagger_ResponsesEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.Response.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseSwagger_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.Swagger_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwagger_ExtensionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.Swagger_ExtensionsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSwagger_ExtensionsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseOperation() {
    return {
        tags: [],
        summary: "",
        description: "",
        externalDocs: undefined,
        operationId: "",
        consumes: [],
        produces: [],
        responses: {},
        schemes: [],
        deprecated: false,
        security: [],
        extensions: {},
        parameters: undefined,
    };
}
exports.Operation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.tags) {
            writer.uint32(10).string(v);
        }
        if (message.summary !== "") {
            writer.uint32(18).string(message.summary);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.externalDocs !== undefined) {
            exports.ExternalDocumentation.encode(message.externalDocs, writer.uint32(34).fork()).ldelim();
        }
        if (message.operationId !== "") {
            writer.uint32(42).string(message.operationId);
        }
        for (const v of message.consumes) {
            writer.uint32(50).string(v);
        }
        for (const v of message.produces) {
            writer.uint32(58).string(v);
        }
        Object.entries(message.responses).forEach(([key, value]) => {
            exports.Operation_ResponsesEntry.encode({ key: key, value }, writer.uint32(74).fork()).ldelim();
        });
        writer.uint32(82).fork();
        for (const v of message.schemes) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.deprecated === true) {
            writer.uint32(88).bool(message.deprecated);
        }
        for (const v of message.security) {
            exports.SecurityRequirement.encode(v, writer.uint32(98).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.Operation_ExtensionsEntry.encode({ key: key, value }, writer.uint32(106).fork()).ldelim();
            }
        });
        if (message.parameters !== undefined) {
            exports.Parameters.encode(message.parameters, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tags.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.summary = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.externalDocs = exports.ExternalDocumentation.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.operationId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.consumes.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.produces.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    const entry9 = exports.Operation_ResponsesEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.responses[entry9.key] = entry9.value;
                    }
                    continue;
                case 10:
                    if (tag === 80) {
                        message.schemes.push(reader.int32());
                        continue;
                    }
                    if (tag === 82) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.schemes.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.security.push(exports.SecurityRequirement.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    const entry13 = exports.Operation_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.extensions[entry13.key] = entry13.value;
                    }
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.parameters = exports.Parameters.decode(reader, reader.uint32());
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
            tags: Array.isArray(object?.tags) ? object.tags.map((e) => String(e)) : [],
            summary: isSet(object.summary) ? String(object.summary) : "",
            description: isSet(object.description) ? String(object.description) : "",
            externalDocs: isSet(object.externalDocs) ? exports.ExternalDocumentation.fromJSON(object.externalDocs) : undefined,
            operationId: isSet(object.operationId) ? String(object.operationId) : "",
            consumes: Array.isArray(object?.consumes) ? object.consumes.map((e) => String(e)) : [],
            produces: Array.isArray(object?.produces) ? object.produces.map((e) => String(e)) : [],
            responses: isObject(object.responses)
                ? Object.entries(object.responses).reduce((acc, [key, value]) => {
                    acc[key] = exports.Response.fromJSON(value);
                    return acc;
                }, {})
                : {},
            schemes: Array.isArray(object?.schemes) ? object.schemes.map((e) => schemeFromJSON(e)) : [],
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            security: Array.isArray(object?.security) ? object.security.map((e) => exports.SecurityRequirement.fromJSON(e)) : [],
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
            parameters: isSet(object.parameters) ? exports.Parameters.fromJSON(object.parameters) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        message.summary !== undefined && (obj.summary = message.summary);
        message.description !== undefined && (obj.description = message.description);
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs ? exports.ExternalDocumentation.toJSON(message.externalDocs) : undefined);
        message.operationId !== undefined && (obj.operationId = message.operationId);
        if (message.consumes) {
            obj.consumes = message.consumes.map((e) => e);
        }
        else {
            obj.consumes = [];
        }
        if (message.produces) {
            obj.produces = message.produces.map((e) => e);
        }
        else {
            obj.produces = [];
        }
        obj.responses = {};
        if (message.responses) {
            Object.entries(message.responses).forEach(([k, v]) => {
                obj.responses[k] = exports.Response.toJSON(v);
            });
        }
        if (message.schemes) {
            obj.schemes = message.schemes.map((e) => schemeToJSON(e));
        }
        else {
            obj.schemes = [];
        }
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.security) {
            obj.security = message.security.map((e) => e ? exports.SecurityRequirement.toJSON(e) : undefined);
        }
        else {
            obj.security = [];
        }
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        message.parameters !== undefined &&
            (obj.parameters = message.parameters ? exports.Parameters.toJSON(message.parameters) : undefined);
        return obj;
    },
    create(base) {
        return exports.Operation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOperation();
        message.tags = object.tags?.map((e) => e) || [];
        message.summary = object.summary ?? "";
        message.description = object.description ?? "";
        message.externalDocs = (object.externalDocs !== undefined && object.externalDocs !== null)
            ? exports.ExternalDocumentation.fromPartial(object.externalDocs)
            : undefined;
        message.operationId = object.operationId ?? "";
        message.consumes = object.consumes?.map((e) => e) || [];
        message.produces = object.produces?.map((e) => e) || [];
        message.responses = Object.entries(object.responses ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.Response.fromPartial(value);
            }
            return acc;
        }, {});
        message.schemes = object.schemes?.map((e) => e) || [];
        message.deprecated = object.deprecated ?? false;
        message.security = object.security?.map((e) => exports.SecurityRequirement.fromPartial(e)) || [];
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.parameters = (object.parameters !== undefined && object.parameters !== null)
            ? exports.Parameters.fromPartial(object.parameters)
            : undefined;
        return message;
    },
};
function createBaseOperation_ResponsesEntry() {
    return { key: "", value: undefined };
}
exports.Operation_ResponsesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Response.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperation_ResponsesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.Response.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.Response.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.Response.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.Operation_ResponsesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOperation_ResponsesEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.Response.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseOperation_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.Operation_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperation_ExtensionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.Operation_ExtensionsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOperation_ExtensionsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseParameters() {
    return { headers: [] };
}
exports.Parameters = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.headers) {
            exports.HeaderParameter.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParameters();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.headers.push(exports.HeaderParameter.decode(reader, reader.uint32()));
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
            headers: Array.isArray(object?.headers) ? object.headers.map((e) => exports.HeaderParameter.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.headers) {
            obj.headers = message.headers.map((e) => e ? exports.HeaderParameter.toJSON(e) : undefined);
        }
        else {
            obj.headers = [];
        }
        return obj;
    },
    create(base) {
        return exports.Parameters.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParameters();
        message.headers = object.headers?.map((e) => exports.HeaderParameter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseHeaderParameter() {
    return { name: "", description: "", type: 0, format: "", required: false };
}
exports.HeaderParameter = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.format !== "") {
            writer.uint32(34).string(message.format);
        }
        if (message.required === true) {
            writer.uint32(40).bool(message.required);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeaderParameter();
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
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.format = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.required = reader.bool();
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
            description: isSet(object.description) ? String(object.description) : "",
            type: isSet(object.type) ? headerParameter_TypeFromJSON(object.type) : 0,
            format: isSet(object.format) ? String(object.format) : "",
            required: isSet(object.required) ? Boolean(object.required) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.type !== undefined && (obj.type = headerParameter_TypeToJSON(message.type));
        message.format !== undefined && (obj.format = message.format);
        message.required !== undefined && (obj.required = message.required);
        return obj;
    },
    create(base) {
        return exports.HeaderParameter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHeaderParameter();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.type = object.type ?? 0;
        message.format = object.format ?? "";
        message.required = object.required ?? false;
        return message;
    },
};
function createBaseHeader() {
    return { description: "", type: "", format: "", default: "", pattern: "" };
}
exports.Header = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.format !== "") {
            writer.uint32(26).string(message.format);
        }
        if (message.default !== "") {
            writer.uint32(50).string(message.default);
        }
        if (message.pattern !== "") {
            writer.uint32(106).string(message.pattern);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.format = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.default = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.pattern = reader.string();
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
            description: isSet(object.description) ? String(object.description) : "",
            type: isSet(object.type) ? String(object.type) : "",
            format: isSet(object.format) ? String(object.format) : "",
            default: isSet(object.default) ? String(object.default) : "",
            pattern: isSet(object.pattern) ? String(object.pattern) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description);
        message.type !== undefined && (obj.type = message.type);
        message.format !== undefined && (obj.format = message.format);
        message.default !== undefined && (obj.default = message.default);
        message.pattern !== undefined && (obj.pattern = message.pattern);
        return obj;
    },
    create(base) {
        return exports.Header.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.description = object.description ?? "";
        message.type = object.type ?? "";
        message.format = object.format ?? "";
        message.default = object.default ?? "";
        message.pattern = object.pattern ?? "";
        return message;
    },
};
function createBaseResponse() {
    return { description: "", schema: undefined, headers: {}, examples: {}, extensions: {} };
}
exports.Response = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.schema !== undefined) {
            exports.Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.headers).forEach(([key, value]) => {
            exports.Response_HeadersEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        Object.entries(message.examples).forEach(([key, value]) => {
            exports.Response_ExamplesEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.Response_ExtensionsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.schema = exports.Schema.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    const entry3 = exports.Response_HeadersEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.headers[entry3.key] = entry3.value;
                    }
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    const entry4 = exports.Response_ExamplesEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.examples[entry4.key] = entry4.value;
                    }
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    const entry5 = exports.Response_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.extensions[entry5.key] = entry5.value;
                    }
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
            description: isSet(object.description) ? String(object.description) : "",
            schema: isSet(object.schema) ? exports.Schema.fromJSON(object.schema) : undefined,
            headers: isObject(object.headers)
                ? Object.entries(object.headers).reduce((acc, [key, value]) => {
                    acc[key] = exports.Header.fromJSON(value);
                    return acc;
                }, {})
                : {},
            examples: isObject(object.examples)
                ? Object.entries(object.examples).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description);
        message.schema !== undefined && (obj.schema = message.schema ? exports.Schema.toJSON(message.schema) : undefined);
        obj.headers = {};
        if (message.headers) {
            Object.entries(message.headers).forEach(([k, v]) => {
                obj.headers[k] = exports.Header.toJSON(v);
            });
        }
        obj.examples = {};
        if (message.examples) {
            Object.entries(message.examples).forEach(([k, v]) => {
                obj.examples[k] = v;
            });
        }
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.Response.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponse();
        message.description = object.description ?? "";
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? exports.Schema.fromPartial(object.schema)
            : undefined;
        message.headers = Object.entries(object.headers ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.Header.fromPartial(value);
            }
            return acc;
        }, {});
        message.examples = Object.entries(object.examples ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseResponse_HeadersEntry() {
    return { key: "", value: undefined };
}
exports.Response_HeadersEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Header.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse_HeadersEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.Header.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.Header.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.Header.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.Response_HeadersEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponse_HeadersEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.Header.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseResponse_ExamplesEntry() {
    return { key: "", value: "" };
}
exports.Response_ExamplesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse_ExamplesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.Response_ExamplesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponse_ExamplesEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseResponse_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.Response_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse_ExtensionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.Response_ExtensionsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponse_ExtensionsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseInfo() {
    return {
        title: "",
        description: "",
        termsOfService: "",
        contact: undefined,
        license: undefined,
        version: "",
        extensions: {},
    };
}
exports.Info = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.termsOfService !== "") {
            writer.uint32(26).string(message.termsOfService);
        }
        if (message.contact !== undefined) {
            exports.Contact.encode(message.contact, writer.uint32(34).fork()).ldelim();
        }
        if (message.license !== undefined) {
            exports.License.encode(message.license, writer.uint32(42).fork()).ldelim();
        }
        if (message.version !== "") {
            writer.uint32(50).string(message.version);
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.Info_ExtensionsEntry.encode({ key: key, value }, writer.uint32(58).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.termsOfService = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.contact = exports.Contact.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.license = exports.License.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    const entry7 = exports.Info_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.extensions[entry7.key] = entry7.value;
                    }
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            termsOfService: isSet(object.termsOfService) ? String(object.termsOfService) : "",
            contact: isSet(object.contact) ? exports.Contact.fromJSON(object.contact) : undefined,
            license: isSet(object.license) ? exports.License.fromJSON(object.license) : undefined,
            version: isSet(object.version) ? String(object.version) : "",
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.termsOfService !== undefined && (obj.termsOfService = message.termsOfService);
        message.contact !== undefined && (obj.contact = message.contact ? exports.Contact.toJSON(message.contact) : undefined);
        message.license !== undefined && (obj.license = message.license ? exports.License.toJSON(message.license) : undefined);
        message.version !== undefined && (obj.version = message.version);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.Info.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInfo();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.termsOfService = object.termsOfService ?? "";
        message.contact = (object.contact !== undefined && object.contact !== null)
            ? exports.Contact.fromPartial(object.contact)
            : undefined;
        message.license = (object.license !== undefined && object.license !== null)
            ? exports.License.fromPartial(object.license)
            : undefined;
        message.version = object.version ?? "";
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseInfo_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.Info_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfo_ExtensionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.Info_ExtensionsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInfo_ExtensionsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseContact() {
    return { name: "", url: "", email: "" };
}
exports.Contact = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.email !== "") {
            writer.uint32(26).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContact();
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
                    message.url = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.email = reader.string();
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
            url: isSet(object.url) ? String(object.url) : "",
            email: isSet(object.email) ? String(object.email) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    create(base) {
        return exports.Contact.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseContact();
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        message.email = object.email ?? "";
        return message;
    },
};
function createBaseLicense() {
    return { name: "", url: "" };
}
exports.License = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLicense();
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
                    message.url = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : "", url: isSet(object.url) ? String(object.url) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    create(base) {
        return exports.License.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLicense();
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
function createBaseExternalDocumentation() {
    return { description: "", url: "" };
}
exports.ExternalDocumentation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExternalDocumentation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.url = reader.string();
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
            description: isSet(object.description) ? String(object.description) : "",
            url: isSet(object.url) ? String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    create(base) {
        return exports.ExternalDocumentation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExternalDocumentation();
        message.description = object.description ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
function createBaseSchema() {
    return { jsonSchema: undefined, discriminator: "", readOnly: false, externalDocs: undefined, example: "" };
}
exports.Schema = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.jsonSchema !== undefined) {
            exports.JSONSchema.encode(message.jsonSchema, writer.uint32(10).fork()).ldelim();
        }
        if (message.discriminator !== "") {
            writer.uint32(18).string(message.discriminator);
        }
        if (message.readOnly === true) {
            writer.uint32(24).bool(message.readOnly);
        }
        if (message.externalDocs !== undefined) {
            exports.ExternalDocumentation.encode(message.externalDocs, writer.uint32(42).fork()).ldelim();
        }
        if (message.example !== "") {
            writer.uint32(50).string(message.example);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSchema();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.jsonSchema = exports.JSONSchema.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.discriminator = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.readOnly = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.externalDocs = exports.ExternalDocumentation.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.example = reader.string();
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
            jsonSchema: isSet(object.jsonSchema) ? exports.JSONSchema.fromJSON(object.jsonSchema) : undefined,
            discriminator: isSet(object.discriminator) ? String(object.discriminator) : "",
            readOnly: isSet(object.readOnly) ? Boolean(object.readOnly) : false,
            externalDocs: isSet(object.externalDocs) ? exports.ExternalDocumentation.fromJSON(object.externalDocs) : undefined,
            example: isSet(object.example) ? String(object.example) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.jsonSchema !== undefined &&
            (obj.jsonSchema = message.jsonSchema ? exports.JSONSchema.toJSON(message.jsonSchema) : undefined);
        message.discriminator !== undefined && (obj.discriminator = message.discriminator);
        message.readOnly !== undefined && (obj.readOnly = message.readOnly);
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs ? exports.ExternalDocumentation.toJSON(message.externalDocs) : undefined);
        message.example !== undefined && (obj.example = message.example);
        return obj;
    },
    create(base) {
        return exports.Schema.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSchema();
        message.jsonSchema = (object.jsonSchema !== undefined && object.jsonSchema !== null)
            ? exports.JSONSchema.fromPartial(object.jsonSchema)
            : undefined;
        message.discriminator = object.discriminator ?? "";
        message.readOnly = object.readOnly ?? false;
        message.externalDocs = (object.externalDocs !== undefined && object.externalDocs !== null)
            ? exports.ExternalDocumentation.fromPartial(object.externalDocs)
            : undefined;
        message.example = object.example ?? "";
        return message;
    },
};
function createBaseJSONSchema() {
    return {
        ref: "",
        title: "",
        description: "",
        default: "",
        readOnly: false,
        example: "",
        multipleOf: 0,
        maximum: 0,
        exclusiveMaximum: false,
        minimum: 0,
        exclusiveMinimum: false,
        maxLength: long_1.default.UZERO,
        minLength: long_1.default.UZERO,
        pattern: "",
        maxItems: long_1.default.UZERO,
        minItems: long_1.default.UZERO,
        uniqueItems: false,
        maxProperties: long_1.default.UZERO,
        minProperties: long_1.default.UZERO,
        required: [],
        array: [],
        type: [],
        format: "",
        enum: [],
        fieldConfiguration: undefined,
        extensions: {},
    };
}
exports.JSONSchema = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ref !== "") {
            writer.uint32(26).string(message.ref);
        }
        if (message.title !== "") {
            writer.uint32(42).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.default !== "") {
            writer.uint32(58).string(message.default);
        }
        if (message.readOnly === true) {
            writer.uint32(64).bool(message.readOnly);
        }
        if (message.example !== "") {
            writer.uint32(74).string(message.example);
        }
        if (message.multipleOf !== 0) {
            writer.uint32(81).double(message.multipleOf);
        }
        if (message.maximum !== 0) {
            writer.uint32(89).double(message.maximum);
        }
        if (message.exclusiveMaximum === true) {
            writer.uint32(96).bool(message.exclusiveMaximum);
        }
        if (message.minimum !== 0) {
            writer.uint32(105).double(message.minimum);
        }
        if (message.exclusiveMinimum === true) {
            writer.uint32(112).bool(message.exclusiveMinimum);
        }
        if (!message.maxLength.isZero()) {
            writer.uint32(120).uint64(message.maxLength);
        }
        if (!message.minLength.isZero()) {
            writer.uint32(128).uint64(message.minLength);
        }
        if (message.pattern !== "") {
            writer.uint32(138).string(message.pattern);
        }
        if (!message.maxItems.isZero()) {
            writer.uint32(160).uint64(message.maxItems);
        }
        if (!message.minItems.isZero()) {
            writer.uint32(168).uint64(message.minItems);
        }
        if (message.uniqueItems === true) {
            writer.uint32(176).bool(message.uniqueItems);
        }
        if (!message.maxProperties.isZero()) {
            writer.uint32(192).uint64(message.maxProperties);
        }
        if (!message.minProperties.isZero()) {
            writer.uint32(200).uint64(message.minProperties);
        }
        for (const v of message.required) {
            writer.uint32(210).string(v);
        }
        for (const v of message.array) {
            writer.uint32(274).string(v);
        }
        writer.uint32(282).fork();
        for (const v of message.type) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.format !== "") {
            writer.uint32(290).string(message.format);
        }
        for (const v of message.enum) {
            writer.uint32(370).string(v);
        }
        if (message.fieldConfiguration !== undefined) {
            exports.JSONSchema_FieldConfiguration.encode(message.fieldConfiguration, writer.uint32(8010).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.JSONSchema_ExtensionsEntry.encode({ key: key, value }, writer.uint32(386).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJSONSchema();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ref = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.default = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.readOnly = reader.bool();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.example = reader.string();
                    continue;
                case 10:
                    if (tag !== 81) {
                        break;
                    }
                    message.multipleOf = reader.double();
                    continue;
                case 11:
                    if (tag !== 89) {
                        break;
                    }
                    message.maximum = reader.double();
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.exclusiveMaximum = reader.bool();
                    continue;
                case 13:
                    if (tag !== 105) {
                        break;
                    }
                    message.minimum = reader.double();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.exclusiveMinimum = reader.bool();
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.maxLength = reader.uint64();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.minLength = reader.uint64();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.pattern = reader.string();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.maxItems = reader.uint64();
                    continue;
                case 21:
                    if (tag !== 168) {
                        break;
                    }
                    message.minItems = reader.uint64();
                    continue;
                case 22:
                    if (tag !== 176) {
                        break;
                    }
                    message.uniqueItems = reader.bool();
                    continue;
                case 24:
                    if (tag !== 192) {
                        break;
                    }
                    message.maxProperties = reader.uint64();
                    continue;
                case 25:
                    if (tag !== 200) {
                        break;
                    }
                    message.minProperties = reader.uint64();
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.required.push(reader.string());
                    continue;
                case 34:
                    if (tag !== 274) {
                        break;
                    }
                    message.array.push(reader.string());
                    continue;
                case 35:
                    if (tag === 280) {
                        message.type.push(reader.int32());
                        continue;
                    }
                    if (tag === 282) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.type.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 36:
                    if (tag !== 290) {
                        break;
                    }
                    message.format = reader.string();
                    continue;
                case 46:
                    if (tag !== 370) {
                        break;
                    }
                    message.enum.push(reader.string());
                    continue;
                case 1001:
                    if (tag !== 8010) {
                        break;
                    }
                    message.fieldConfiguration = exports.JSONSchema_FieldConfiguration.decode(reader, reader.uint32());
                    continue;
                case 48:
                    if (tag !== 386) {
                        break;
                    }
                    const entry48 = exports.JSONSchema_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry48.value !== undefined) {
                        message.extensions[entry48.key] = entry48.value;
                    }
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
            ref: isSet(object.ref) ? String(object.ref) : "",
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            default: isSet(object.default) ? String(object.default) : "",
            readOnly: isSet(object.readOnly) ? Boolean(object.readOnly) : false,
            example: isSet(object.example) ? String(object.example) : "",
            multipleOf: isSet(object.multipleOf) ? Number(object.multipleOf) : 0,
            maximum: isSet(object.maximum) ? Number(object.maximum) : 0,
            exclusiveMaximum: isSet(object.exclusiveMaximum) ? Boolean(object.exclusiveMaximum) : false,
            minimum: isSet(object.minimum) ? Number(object.minimum) : 0,
            exclusiveMinimum: isSet(object.exclusiveMinimum) ? Boolean(object.exclusiveMinimum) : false,
            maxLength: isSet(object.maxLength) ? long_1.default.fromValue(object.maxLength) : long_1.default.UZERO,
            minLength: isSet(object.minLength) ? long_1.default.fromValue(object.minLength) : long_1.default.UZERO,
            pattern: isSet(object.pattern) ? String(object.pattern) : "",
            maxItems: isSet(object.maxItems) ? long_1.default.fromValue(object.maxItems) : long_1.default.UZERO,
            minItems: isSet(object.minItems) ? long_1.default.fromValue(object.minItems) : long_1.default.UZERO,
            uniqueItems: isSet(object.uniqueItems) ? Boolean(object.uniqueItems) : false,
            maxProperties: isSet(object.maxProperties) ? long_1.default.fromValue(object.maxProperties) : long_1.default.UZERO,
            minProperties: isSet(object.minProperties) ? long_1.default.fromValue(object.minProperties) : long_1.default.UZERO,
            required: Array.isArray(object?.required) ? object.required.map((e) => String(e)) : [],
            array: Array.isArray(object?.array) ? object.array.map((e) => String(e)) : [],
            type: Array.isArray(object?.type) ? object.type.map((e) => jSONSchema_JSONSchemaSimpleTypesFromJSON(e)) : [],
            format: isSet(object.format) ? String(object.format) : "",
            enum: Array.isArray(object?.enum) ? object.enum.map((e) => String(e)) : [],
            fieldConfiguration: isSet(object.fieldConfiguration)
                ? exports.JSONSchema_FieldConfiguration.fromJSON(object.fieldConfiguration)
                : undefined,
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.ref !== undefined && (obj.ref = message.ref);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.default !== undefined && (obj.default = message.default);
        message.readOnly !== undefined && (obj.readOnly = message.readOnly);
        message.example !== undefined && (obj.example = message.example);
        message.multipleOf !== undefined && (obj.multipleOf = message.multipleOf);
        message.maximum !== undefined && (obj.maximum = message.maximum);
        message.exclusiveMaximum !== undefined && (obj.exclusiveMaximum = message.exclusiveMaximum);
        message.minimum !== undefined && (obj.minimum = message.minimum);
        message.exclusiveMinimum !== undefined && (obj.exclusiveMinimum = message.exclusiveMinimum);
        message.maxLength !== undefined && (obj.maxLength = (message.maxLength || long_1.default.UZERO).toString());
        message.minLength !== undefined && (obj.minLength = (message.minLength || long_1.default.UZERO).toString());
        message.pattern !== undefined && (obj.pattern = message.pattern);
        message.maxItems !== undefined && (obj.maxItems = (message.maxItems || long_1.default.UZERO).toString());
        message.minItems !== undefined && (obj.minItems = (message.minItems || long_1.default.UZERO).toString());
        message.uniqueItems !== undefined && (obj.uniqueItems = message.uniqueItems);
        message.maxProperties !== undefined && (obj.maxProperties = (message.maxProperties || long_1.default.UZERO).toString());
        message.minProperties !== undefined && (obj.minProperties = (message.minProperties || long_1.default.UZERO).toString());
        if (message.required) {
            obj.required = message.required.map((e) => e);
        }
        else {
            obj.required = [];
        }
        if (message.array) {
            obj.array = message.array.map((e) => e);
        }
        else {
            obj.array = [];
        }
        if (message.type) {
            obj.type = message.type.map((e) => jSONSchema_JSONSchemaSimpleTypesToJSON(e));
        }
        else {
            obj.type = [];
        }
        message.format !== undefined && (obj.format = message.format);
        if (message.enum) {
            obj.enum = message.enum.map((e) => e);
        }
        else {
            obj.enum = [];
        }
        message.fieldConfiguration !== undefined && (obj.fieldConfiguration = message.fieldConfiguration
            ? exports.JSONSchema_FieldConfiguration.toJSON(message.fieldConfiguration)
            : undefined);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.JSONSchema.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseJSONSchema();
        message.ref = object.ref ?? "";
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.default = object.default ?? "";
        message.readOnly = object.readOnly ?? false;
        message.example = object.example ?? "";
        message.multipleOf = object.multipleOf ?? 0;
        message.maximum = object.maximum ?? 0;
        message.exclusiveMaximum = object.exclusiveMaximum ?? false;
        message.minimum = object.minimum ?? 0;
        message.exclusiveMinimum = object.exclusiveMinimum ?? false;
        message.maxLength = (object.maxLength !== undefined && object.maxLength !== null)
            ? long_1.default.fromValue(object.maxLength)
            : long_1.default.UZERO;
        message.minLength = (object.minLength !== undefined && object.minLength !== null)
            ? long_1.default.fromValue(object.minLength)
            : long_1.default.UZERO;
        message.pattern = object.pattern ?? "";
        message.maxItems = (object.maxItems !== undefined && object.maxItems !== null)
            ? long_1.default.fromValue(object.maxItems)
            : long_1.default.UZERO;
        message.minItems = (object.minItems !== undefined && object.minItems !== null)
            ? long_1.default.fromValue(object.minItems)
            : long_1.default.UZERO;
        message.uniqueItems = object.uniqueItems ?? false;
        message.maxProperties = (object.maxProperties !== undefined && object.maxProperties !== null)
            ? long_1.default.fromValue(object.maxProperties)
            : long_1.default.UZERO;
        message.minProperties = (object.minProperties !== undefined && object.minProperties !== null)
            ? long_1.default.fromValue(object.minProperties)
            : long_1.default.UZERO;
        message.required = object.required?.map((e) => e) || [];
        message.array = object.array?.map((e) => e) || [];
        message.type = object.type?.map((e) => e) || [];
        message.format = object.format ?? "";
        message.enum = object.enum?.map((e) => e) || [];
        message.fieldConfiguration = (object.fieldConfiguration !== undefined && object.fieldConfiguration !== null)
            ? exports.JSONSchema_FieldConfiguration.fromPartial(object.fieldConfiguration)
            : undefined;
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseJSONSchema_FieldConfiguration() {
    return { pathParamName: "" };
}
exports.JSONSchema_FieldConfiguration = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pathParamName !== "") {
            writer.uint32(378).string(message.pathParamName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJSONSchema_FieldConfiguration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 47:
                    if (tag !== 378) {
                        break;
                    }
                    message.pathParamName = reader.string();
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
        return { pathParamName: isSet(object.pathParamName) ? String(object.pathParamName) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.pathParamName !== undefined && (obj.pathParamName = message.pathParamName);
        return obj;
    },
    create(base) {
        return exports.JSONSchema_FieldConfiguration.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseJSONSchema_FieldConfiguration();
        message.pathParamName = object.pathParamName ?? "";
        return message;
    },
};
function createBaseJSONSchema_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.JSONSchema_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJSONSchema_ExtensionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.JSONSchema_ExtensionsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseJSONSchema_ExtensionsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseTag() {
    return { name: "", description: "", externalDocs: undefined, extensions: {} };
}
exports.Tag = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.externalDocs !== undefined) {
            exports.ExternalDocumentation.encode(message.externalDocs, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.Tag_ExtensionsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTag();
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
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.externalDocs = exports.ExternalDocumentation.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    const entry4 = exports.Tag_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.extensions[entry4.key] = entry4.value;
                    }
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
            description: isSet(object.description) ? String(object.description) : "",
            externalDocs: isSet(object.externalDocs) ? exports.ExternalDocumentation.fromJSON(object.externalDocs) : undefined,
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs ? exports.ExternalDocumentation.toJSON(message.externalDocs) : undefined);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.Tag.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTag();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.externalDocs = (object.externalDocs !== undefined && object.externalDocs !== null)
            ? exports.ExternalDocumentation.fromPartial(object.externalDocs)
            : undefined;
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseTag_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.Tag_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTag_ExtensionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.Tag_ExtensionsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTag_ExtensionsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseSecurityDefinitions() {
    return { security: {} };
}
exports.SecurityDefinitions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.security).forEach(([key, value]) => {
            exports.SecurityDefinitions_SecurityEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecurityDefinitions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.SecurityDefinitions_SecurityEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.security[entry1.key] = entry1.value;
                    }
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
            security: isObject(object.security)
                ? Object.entries(object.security).reduce((acc, [key, value]) => {
                    acc[key] = exports.SecurityScheme.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        obj.security = {};
        if (message.security) {
            Object.entries(message.security).forEach(([k, v]) => {
                obj.security[k] = exports.SecurityScheme.toJSON(v);
            });
        }
        return obj;
    },
    create(base) {
        return exports.SecurityDefinitions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecurityDefinitions();
        message.security = Object.entries(object.security ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.SecurityScheme.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseSecurityDefinitions_SecurityEntry() {
    return { key: "", value: undefined };
}
exports.SecurityDefinitions_SecurityEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SecurityScheme.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecurityDefinitions_SecurityEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.SecurityScheme.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.SecurityScheme.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.SecurityScheme.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.SecurityDefinitions_SecurityEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecurityDefinitions_SecurityEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.SecurityScheme.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseSecurityScheme() {
    return {
        type: 0,
        description: "",
        name: "",
        in: 0,
        flow: 0,
        authorizationUrl: "",
        tokenUrl: "",
        scopes: undefined,
        extensions: {},
    };
}
exports.SecurityScheme = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.in !== 0) {
            writer.uint32(32).int32(message.in);
        }
        if (message.flow !== 0) {
            writer.uint32(40).int32(message.flow);
        }
        if (message.authorizationUrl !== "") {
            writer.uint32(50).string(message.authorizationUrl);
        }
        if (message.tokenUrl !== "") {
            writer.uint32(58).string(message.tokenUrl);
        }
        if (message.scopes !== undefined) {
            exports.Scopes.encode(message.scopes, writer.uint32(66).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.SecurityScheme_ExtensionsEntry.encode({ key: key, value }, writer.uint32(74).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecurityScheme();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.in = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.flow = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.authorizationUrl = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.tokenUrl = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.scopes = exports.Scopes.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    const entry9 = exports.SecurityScheme_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.extensions[entry9.key] = entry9.value;
                    }
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
            type: isSet(object.type) ? securityScheme_TypeFromJSON(object.type) : 0,
            description: isSet(object.description) ? String(object.description) : "",
            name: isSet(object.name) ? String(object.name) : "",
            in: isSet(object.in) ? securityScheme_InFromJSON(object.in) : 0,
            flow: isSet(object.flow) ? securityScheme_FlowFromJSON(object.flow) : 0,
            authorizationUrl: isSet(object.authorizationUrl) ? String(object.authorizationUrl) : "",
            tokenUrl: isSet(object.tokenUrl) ? String(object.tokenUrl) : "",
            scopes: isSet(object.scopes) ? exports.Scopes.fromJSON(object.scopes) : undefined,
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = securityScheme_TypeToJSON(message.type));
        message.description !== undefined && (obj.description = message.description);
        message.name !== undefined && (obj.name = message.name);
        message.in !== undefined && (obj.in = securityScheme_InToJSON(message.in));
        message.flow !== undefined && (obj.flow = securityScheme_FlowToJSON(message.flow));
        message.authorizationUrl !== undefined && (obj.authorizationUrl = message.authorizationUrl);
        message.tokenUrl !== undefined && (obj.tokenUrl = message.tokenUrl);
        message.scopes !== undefined && (obj.scopes = message.scopes ? exports.Scopes.toJSON(message.scopes) : undefined);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.SecurityScheme.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecurityScheme();
        message.type = object.type ?? 0;
        message.description = object.description ?? "";
        message.name = object.name ?? "";
        message.in = object.in ?? 0;
        message.flow = object.flow ?? 0;
        message.authorizationUrl = object.authorizationUrl ?? "";
        message.tokenUrl = object.tokenUrl ?? "";
        message.scopes = (object.scopes !== undefined && object.scopes !== null)
            ? exports.Scopes.fromPartial(object.scopes)
            : undefined;
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseSecurityScheme_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.SecurityScheme_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecurityScheme_ExtensionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.SecurityScheme_ExtensionsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecurityScheme_ExtensionsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseSecurityRequirement() {
    return { securityRequirement: {} };
}
exports.SecurityRequirement = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.securityRequirement).forEach(([key, value]) => {
            exports.SecurityRequirement_SecurityRequirementEntry.encode({ key: key, value }, writer.uint32(10).fork())
                .ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecurityRequirement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.SecurityRequirement_SecurityRequirementEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.securityRequirement[entry1.key] = entry1.value;
                    }
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
            securityRequirement: isObject(object.securityRequirement)
                ? Object.entries(object.securityRequirement).reduce((acc, [key, value]) => {
                    acc[key] = exports.SecurityRequirement_SecurityRequirementValue.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        obj.securityRequirement = {};
        if (message.securityRequirement) {
            Object.entries(message.securityRequirement).forEach(([k, v]) => {
                obj.securityRequirement[k] = exports.SecurityRequirement_SecurityRequirementValue.toJSON(v);
            });
        }
        return obj;
    },
    create(base) {
        return exports.SecurityRequirement.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecurityRequirement();
        message.securityRequirement = Object.entries(object.securityRequirement ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.SecurityRequirement_SecurityRequirementValue.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseSecurityRequirement_SecurityRequirementValue() {
    return { scope: [] };
}
exports.SecurityRequirement_SecurityRequirementValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scope) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecurityRequirement_SecurityRequirementValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.scope.push(reader.string());
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
        return { scope: Array.isArray(object?.scope) ? object.scope.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.scope) {
            obj.scope = message.scope.map((e) => e);
        }
        else {
            obj.scope = [];
        }
        return obj;
    },
    create(base) {
        return exports.SecurityRequirement_SecurityRequirementValue.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecurityRequirement_SecurityRequirementValue();
        message.scope = object.scope?.map((e) => e) || [];
        return message;
    },
};
function createBaseSecurityRequirement_SecurityRequirementEntry() {
    return { key: "", value: undefined };
}
exports.SecurityRequirement_SecurityRequirementEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SecurityRequirement_SecurityRequirementValue.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecurityRequirement_SecurityRequirementEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.SecurityRequirement_SecurityRequirementValue.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.SecurityRequirement_SecurityRequirementValue.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.SecurityRequirement_SecurityRequirementValue.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.SecurityRequirement_SecurityRequirementEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecurityRequirement_SecurityRequirementEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.SecurityRequirement_SecurityRequirementValue.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseScopes() {
    return { scope: {} };
}
exports.Scopes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.scope).forEach(([key, value]) => {
            exports.Scopes_ScopeEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScopes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.Scopes_ScopeEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.scope[entry1.key] = entry1.value;
                    }
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
            scope: isObject(object.scope)
                ? Object.entries(object.scope).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        obj.scope = {};
        if (message.scope) {
            Object.entries(message.scope).forEach(([k, v]) => {
                obj.scope[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.Scopes.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseScopes();
        message.scope = Object.entries(object.scope ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseScopes_ScopeEntry() {
    return { key: "", value: "" };
}
exports.Scopes_ScopeEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScopes_ScopeEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.Scopes_ScopeEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseScopes_ScopeEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
