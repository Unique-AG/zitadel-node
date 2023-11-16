"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendMyEmailVerificationResponse = exports.ResendMyEmailVerificationRequest = exports.VerifyMyEmailResponse = exports.VerifyMyEmailRequest = exports.SetMyEmailResponse = exports.SetMyEmailRequest = exports.GetMyEmailResponse = exports.GetMyEmailRequest = exports.UpdateMyProfileResponse = exports.UpdateMyProfileRequest = exports.GetMyProfileResponse = exports.GetMyProfileRequest = exports.UpdateMyPasswordResponse = exports.UpdateMyPasswordRequest = exports.GetMyPasswordComplexityPolicyResponse = exports.GetMyPasswordComplexityPolicyRequest = exports.UpdateMyUserNameResponse = exports.UpdateMyUserNameRequest = exports.RevokeAllMyRefreshTokensResponse = exports.RevokeAllMyRefreshTokensRequest = exports.RevokeMyRefreshTokenResponse = exports.RevokeMyRefreshTokenRequest = exports.ListMyRefreshTokensResponse = exports.ListMyRefreshTokensRequest = exports.BulkRemoveMyMetadataResponse = exports.BulkRemoveMyMetadataRequest = exports.RemoveMyMetadataResponse = exports.RemoveMyMetadataRequest = exports.BulkSetMyMetadataResponse = exports.BulkSetMyMetadataRequest_Metadata = exports.BulkSetMyMetadataRequest = exports.SetMyMetadataResponse = exports.SetMyMetadataRequest = exports.GetMyMetadataResponse = exports.GetMyMetadataRequest = exports.ListMyMetadataResponse = exports.ListMyMetadataRequest = exports.ListMyUserSessionsResponse = exports.ListMyUserSessionsRequest = exports.ListMyUserChangesResponse = exports.ListMyUserChangesRequest = exports.RemoveMyUserResponse = exports.RemoveMyUserRequest = exports.GetMyUserResponse = exports.GetMyUserRequest = exports.GetSupportedLanguagesResponse = exports.GetSupportedLanguagesRequest = exports.HealthzResponse = exports.HealthzRequest = exports.protobufPackage = void 0;
exports.RemoveMyPasswordlessResponse = exports.RemoveMyPasswordlessRequest = exports.VerifyMyPasswordlessResponse = exports.VerifyMyPasswordlessRequest = exports.SendMyPasswordlessLinkResponse = exports.SendMyPasswordlessLinkRequest = exports.AddMyPasswordlessLinkResponse = exports.AddMyPasswordlessLinkRequest = exports.AddMyPasswordlessResponse = exports.AddMyPasswordlessRequest = exports.ListMyPasswordlessResponse = exports.ListMyPasswordlessRequest = exports.RemoveMyAuthFactorU2FResponse = exports.RemoveMyAuthFactorU2FRequest = exports.RemoveMyAuthFactorOTPEmailResponse = exports.RemoveMyAuthFactorOTPEmailRequest = exports.AddMyAuthFactorOTPEmailResponse = exports.AddMyAuthFactorOTPEmailRequest = exports.RemoveMyAuthFactorOTPSMSResponse = exports.RemoveMyAuthFactorOTPSMSRequest = exports.AddMyAuthFactorOTPSMSResponse = exports.AddMyAuthFactorOTPSMSRequest = exports.RemoveMyAuthFactorOTPResponse = exports.RemoveMyAuthFactorOTPRequest = exports.VerifyMyAuthFactorU2FResponse = exports.VerifyMyAuthFactorU2FRequest = exports.VerifyMyAuthFactorOTPResponse = exports.VerifyMyAuthFactorOTPRequest = exports.AddMyAuthFactorOTPResponse = exports.AddMyAuthFactorOTPRequest = exports.AddMyAuthFactorU2FResponse = exports.AddMyAuthFactorU2FRequest = exports.ListMyAuthFactorsResponse = exports.ListMyAuthFactorsRequest = exports.RemoveMyLinkedIDPResponse = exports.RemoveMyLinkedIDPRequest = exports.ListMyLinkedIDPsResponse = exports.ListMyLinkedIDPsRequest = exports.RemoveMyAvatarResponse = exports.RemoveMyAvatarRequest = exports.RemoveMyPhoneResponse = exports.RemoveMyPhoneRequest = exports.ResendMyPhoneVerificationResponse = exports.ResendMyPhoneVerificationRequest = exports.VerifyMyPhoneResponse = exports.VerifyMyPhoneRequest = exports.SetMyPhoneResponse = exports.SetMyPhoneRequest = exports.GetMyPhoneResponse = exports.GetMyPhoneRequest = void 0;
exports.AuthServiceDefinition = exports.GetMyLoginPolicyResponse = exports.GetMyLoginPolicyRequest = exports.GetMyPrivacyPolicyResponse = exports.GetMyPrivacyPolicyRequest = exports.GetMyLabelPolicyResponse = exports.GetMyLabelPolicyRequest = exports.ListMyMembershipsResponse = exports.ListMyMembershipsRequest = exports.ListMyProjectPermissionsResponse = exports.ListMyProjectPermissionsRequest = exports.ListMyZitadelPermissionsResponse = exports.ListMyZitadelPermissionsRequest = exports.ListMyProjectOrgsResponse = exports.ListMyProjectOrgsRequest = exports.UserGrant = exports.ListMyUserGrantsResponse = exports.ListMyUserGrantsRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../google/protobuf/duration");
const timestamp_1 = require("../google/protobuf/timestamp");
const change_1 = require("./change");
const idp_1 = require("./idp");
const metadata_1 = require("./metadata");
const object_1 = require("./object");
const org_1 = require("./org");
const policy_1 = require("./policy");
const user_1 = require("./user");
exports.protobufPackage = "zitadel.auth.v1";
function createBaseHealthzRequest() {
    return {};
}
exports.HealthzRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthzRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.HealthzRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseHealthzRequest();
        return message;
    },
};
function createBaseHealthzResponse() {
    return {};
}
exports.HealthzResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthzResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.HealthzResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseHealthzResponse();
        return message;
    },
};
function createBaseGetSupportedLanguagesRequest() {
    return {};
}
exports.GetSupportedLanguagesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSupportedLanguagesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetSupportedLanguagesRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetSupportedLanguagesRequest();
        return message;
    },
};
function createBaseGetSupportedLanguagesResponse() {
    return { languages: [] };
}
exports.GetSupportedLanguagesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.languages) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSupportedLanguagesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.languages.push(reader.string());
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
        return { languages: Array.isArray(object?.languages) ? object.languages.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.languages) {
            obj.languages = message.languages.map((e) => e);
        }
        else {
            obj.languages = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetSupportedLanguagesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetSupportedLanguagesResponse();
        message.languages = object.languages?.map((e) => e) || [];
        return message;
    },
};
function createBaseGetMyUserRequest() {
    return {};
}
exports.GetMyUserRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetMyUserRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetMyUserRequest();
        return message;
    },
};
function createBaseGetMyUserResponse() {
    return { user: undefined, lastLogin: undefined };
}
exports.GetMyUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            user_1.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastLogin !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastLogin), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = user_1.User.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lastLogin = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            user: isSet(object.user) ? user_1.User.fromJSON(object.user) : undefined,
            lastLogin: isSet(object.lastLogin) ? fromJsonTimestamp(object.lastLogin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined && (obj.user = message.user ? user_1.User.toJSON(message.user) : undefined);
        message.lastLogin !== undefined && (obj.lastLogin = message.lastLogin.toISOString());
        return obj;
    },
    create(base) {
        return exports.GetMyUserResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyUserResponse();
        message.user = (object.user !== undefined && object.user !== null) ? user_1.User.fromPartial(object.user) : undefined;
        message.lastLogin = object.lastLogin ?? undefined;
        return message;
    },
};
function createBaseRemoveMyUserRequest() {
    return {};
}
exports.RemoveMyUserRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.RemoveMyUserRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRemoveMyUserRequest();
        return message;
    },
};
function createBaseRemoveMyUserResponse() {
    return { details: undefined };
}
exports.RemoveMyUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyUserResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyUserResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListMyUserChangesRequest() {
    return { query: undefined };
}
exports.ListMyUserChangesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            change_1.ChangeQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyUserChangesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = change_1.ChangeQuery.decode(reader, reader.uint32());
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
        return { query: isSet(object.query) ? change_1.ChangeQuery.fromJSON(object.query) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? change_1.ChangeQuery.toJSON(message.query) : undefined);
        return obj;
    },
    create(base) {
        return exports.ListMyUserChangesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyUserChangesRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? change_1.ChangeQuery.fromPartial(object.query)
            : undefined;
        return message;
    },
};
function createBaseListMyUserChangesResponse() {
    return { result: [] };
}
exports.ListMyUserChangesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.result) {
            change_1.Change.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyUserChangesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(change_1.Change.decode(reader, reader.uint32()));
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
        return { result: Array.isArray(object?.result) ? object.result.map((e) => change_1.Change.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.result) {
            obj.result = message.result.map((e) => e ? change_1.Change.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyUserChangesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyUserChangesResponse();
        message.result = object.result?.map((e) => change_1.Change.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListMyUserSessionsRequest() {
    return {};
}
exports.ListMyUserSessionsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyUserSessionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListMyUserSessionsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseListMyUserSessionsRequest();
        return message;
    },
};
function createBaseListMyUserSessionsResponse() {
    return { result: [] };
}
exports.ListMyUserSessionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.result) {
            user_1.Session.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyUserSessionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result.push(user_1.Session.decode(reader, reader.uint32()));
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
        return { result: Array.isArray(object?.result) ? object.result.map((e) => user_1.Session.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.result) {
            obj.result = message.result.map((e) => e ? user_1.Session.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyUserSessionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyUserSessionsResponse();
        message.result = object.result?.map((e) => user_1.Session.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListMyMetadataRequest() {
    return { query: undefined, queries: [] };
}
exports.ListMyMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            object_1.ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.queries) {
            metadata_1.MetadataQuery.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = object_1.ListQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.queries.push(metadata_1.MetadataQuery.decode(reader, reader.uint32()));
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
            query: isSet(object.query) ? object_1.ListQuery.fromJSON(object.query) : undefined,
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => metadata_1.MetadataQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? object_1.ListQuery.toJSON(message.query) : undefined);
        if (message.queries) {
            obj.queries = message.queries.map((e) => e ? metadata_1.MetadataQuery.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyMetadataRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? object_1.ListQuery.fromPartial(object.query)
            : undefined;
        message.queries = object.queries?.map((e) => metadata_1.MetadataQuery.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListMyMetadataResponse() {
    return { details: undefined, result: [] };
}
exports.ListMyMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.result) {
            metadata_1.Metadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(metadata_1.Metadata.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            result: Array.isArray(object?.result) ? object.result.map((e) => metadata_1.Metadata.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.result) {
            obj.result = message.result.map((e) => e ? metadata_1.Metadata.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyMetadataResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = object.result?.map((e) => metadata_1.Metadata.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetMyMetadataRequest() {
    return { key: "" };
}
exports.GetMyMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
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
        return { key: isSet(object.key) ? String(object.key) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    create(base) {
        return exports.GetMyMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyMetadataRequest();
        message.key = object.key ?? "";
        return message;
    },
};
function createBaseGetMyMetadataResponse() {
    return { metadata: undefined };
}
exports.GetMyMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadata !== undefined) {
            metadata_1.Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadata = metadata_1.Metadata.decode(reader, reader.uint32());
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
        return { metadata: isSet(object.metadata) ? metadata_1.Metadata.fromJSON(object.metadata) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.metadata !== undefined && (obj.metadata = message.metadata ? metadata_1.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMyMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyMetadataResponse();
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? metadata_1.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseSetMyMetadataRequest() {
    return { key: "", value: Buffer.alloc(0) };
}
exports.SetMyMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetMyMetadataRequest();
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
                    message.value = reader.bytes();
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
            value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.SetMyMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetMyMetadataRequest();
        message.key = object.key ?? "";
        message.value = object.value ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseSetMyMetadataResponse() {
    return { details: undefined };
}
exports.SetMyMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetMyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetMyMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetMyMetadataResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseBulkSetMyMetadataRequest() {
    return { metadata: [] };
}
exports.BulkSetMyMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.metadata) {
            exports.BulkSetMyMetadataRequest_Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBulkSetMyMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadata.push(exports.BulkSetMyMetadataRequest_Metadata.decode(reader, reader.uint32()));
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
            metadata: Array.isArray(object?.metadata)
                ? object.metadata.map((e) => exports.BulkSetMyMetadataRequest_Metadata.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.metadata) {
            obj.metadata = message.metadata.map((e) => e ? exports.BulkSetMyMetadataRequest_Metadata.toJSON(e) : undefined);
        }
        else {
            obj.metadata = [];
        }
        return obj;
    },
    create(base) {
        return exports.BulkSetMyMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBulkSetMyMetadataRequest();
        message.metadata = object.metadata?.map((e) => exports.BulkSetMyMetadataRequest_Metadata.fromPartial(e)) || [];
        return message;
    },
};
function createBaseBulkSetMyMetadataRequest_Metadata() {
    return { key: "", value: Buffer.alloc(0) };
}
exports.BulkSetMyMetadataRequest_Metadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBulkSetMyMetadataRequest_Metadata();
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
                    message.value = reader.bytes();
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
            value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.BulkSetMyMetadataRequest_Metadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBulkSetMyMetadataRequest_Metadata();
        message.key = object.key ?? "";
        message.value = object.value ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseBulkSetMyMetadataResponse() {
    return { details: undefined };
}
exports.BulkSetMyMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBulkSetMyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.BulkSetMyMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBulkSetMyMetadataResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveMyMetadataRequest() {
    return { key: "" };
}
exports.RemoveMyMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
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
        return { key: isSet(object.key) ? String(object.key) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    create(base) {
        return exports.RemoveMyMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyMetadataRequest();
        message.key = object.key ?? "";
        return message;
    },
};
function createBaseRemoveMyMetadataResponse() {
    return { details: undefined };
}
exports.RemoveMyMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyMetadataResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseBulkRemoveMyMetadataRequest() {
    return { keys: [] };
}
exports.BulkRemoveMyMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBulkRemoveMyMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keys.push(reader.string());
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
        return { keys: Array.isArray(object?.keys) ? object.keys.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    create(base) {
        return exports.BulkRemoveMyMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBulkRemoveMyMetadataRequest();
        message.keys = object.keys?.map((e) => e) || [];
        return message;
    },
};
function createBaseBulkRemoveMyMetadataResponse() {
    return { details: undefined };
}
exports.BulkRemoveMyMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBulkRemoveMyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.BulkRemoveMyMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBulkRemoveMyMetadataResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListMyRefreshTokensRequest() {
    return {};
}
exports.ListMyRefreshTokensRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyRefreshTokensRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListMyRefreshTokensRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseListMyRefreshTokensRequest();
        return message;
    },
};
function createBaseListMyRefreshTokensResponse() {
    return { details: undefined, result: [] };
}
exports.ListMyRefreshTokensResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.result) {
            user_1.RefreshToken.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyRefreshTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(user_1.RefreshToken.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            result: Array.isArray(object?.result) ? object.result.map((e) => user_1.RefreshToken.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.result) {
            obj.result = message.result.map((e) => e ? user_1.RefreshToken.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyRefreshTokensResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyRefreshTokensResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = object.result?.map((e) => user_1.RefreshToken.fromPartial(e)) || [];
        return message;
    },
};
function createBaseRevokeMyRefreshTokenRequest() {
    return { id: "" };
}
exports.RevokeMyRefreshTokenRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokeMyRefreshTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
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
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.RevokeMyRefreshTokenRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRevokeMyRefreshTokenRequest();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseRevokeMyRefreshTokenResponse() {
    return { details: undefined };
}
exports.RevokeMyRefreshTokenResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokeMyRefreshTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RevokeMyRefreshTokenResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRevokeMyRefreshTokenResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRevokeAllMyRefreshTokensRequest() {
    return {};
}
exports.RevokeAllMyRefreshTokensRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokeAllMyRefreshTokensRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.RevokeAllMyRefreshTokensRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRevokeAllMyRefreshTokensRequest();
        return message;
    },
};
function createBaseRevokeAllMyRefreshTokensResponse() {
    return {};
}
exports.RevokeAllMyRefreshTokensResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokeAllMyRefreshTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.RevokeAllMyRefreshTokensResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRevokeAllMyRefreshTokensResponse();
        return message;
    },
};
function createBaseUpdateMyUserNameRequest() {
    return { userName: "" };
}
exports.UpdateMyUserNameRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMyUserNameRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userName = reader.string();
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
        return { userName: isSet(object.userName) ? String(object.userName) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    create(base) {
        return exports.UpdateMyUserNameRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateMyUserNameRequest();
        message.userName = object.userName ?? "";
        return message;
    },
};
function createBaseUpdateMyUserNameResponse() {
    return { details: undefined };
}
exports.UpdateMyUserNameResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMyUserNameResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateMyUserNameResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateMyUserNameResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseGetMyPasswordComplexityPolicyRequest() {
    return {};
}
exports.GetMyPasswordComplexityPolicyRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyPasswordComplexityPolicyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetMyPasswordComplexityPolicyRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetMyPasswordComplexityPolicyRequest();
        return message;
    },
};
function createBaseGetMyPasswordComplexityPolicyResponse() {
    return { policy: undefined };
}
exports.GetMyPasswordComplexityPolicyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policy !== undefined) {
            policy_1.PasswordComplexityPolicy.encode(message.policy, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyPasswordComplexityPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.policy = policy_1.PasswordComplexityPolicy.decode(reader, reader.uint32());
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
        return { policy: isSet(object.policy) ? policy_1.PasswordComplexityPolicy.fromJSON(object.policy) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.policy !== undefined &&
            (obj.policy = message.policy ? policy_1.PasswordComplexityPolicy.toJSON(message.policy) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMyPasswordComplexityPolicyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyPasswordComplexityPolicyResponse();
        message.policy = (object.policy !== undefined && object.policy !== null)
            ? policy_1.PasswordComplexityPolicy.fromPartial(object.policy)
            : undefined;
        return message;
    },
};
function createBaseUpdateMyPasswordRequest() {
    return { oldPassword: "", newPassword: "" };
}
exports.UpdateMyPasswordRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.oldPassword !== "") {
            writer.uint32(10).string(message.oldPassword);
        }
        if (message.newPassword !== "") {
            writer.uint32(18).string(message.newPassword);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMyPasswordRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.oldPassword = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.newPassword = reader.string();
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
            oldPassword: isSet(object.oldPassword) ? String(object.oldPassword) : "",
            newPassword: isSet(object.newPassword) ? String(object.newPassword) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.oldPassword !== undefined && (obj.oldPassword = message.oldPassword);
        message.newPassword !== undefined && (obj.newPassword = message.newPassword);
        return obj;
    },
    create(base) {
        return exports.UpdateMyPasswordRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateMyPasswordRequest();
        message.oldPassword = object.oldPassword ?? "";
        message.newPassword = object.newPassword ?? "";
        return message;
    },
};
function createBaseUpdateMyPasswordResponse() {
    return { details: undefined };
}
exports.UpdateMyPasswordResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMyPasswordResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateMyPasswordResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateMyPasswordResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseGetMyProfileRequest() {
    return {};
}
exports.GetMyProfileRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyProfileRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetMyProfileRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetMyProfileRequest();
        return message;
    },
};
function createBaseGetMyProfileResponse() {
    return { details: undefined, profile: undefined };
}
exports.GetMyProfileResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.profile !== undefined) {
            user_1.Profile.encode(message.profile, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyProfileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.profile = user_1.Profile.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            profile: isSet(object.profile) ? user_1.Profile.fromJSON(object.profile) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.profile !== undefined && (obj.profile = message.profile ? user_1.Profile.toJSON(message.profile) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMyProfileResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyProfileResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? user_1.Profile.fromPartial(object.profile)
            : undefined;
        return message;
    },
};
function createBaseUpdateMyProfileRequest() {
    return { firstName: "", lastName: "", nickName: "", displayName: "", preferredLanguage: "", gender: 0 };
}
exports.UpdateMyProfileRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(18).string(message.lastName);
        }
        if (message.nickName !== "") {
            writer.uint32(26).string(message.nickName);
        }
        if (message.displayName !== "") {
            writer.uint32(34).string(message.displayName);
        }
        if (message.preferredLanguage !== "") {
            writer.uint32(42).string(message.preferredLanguage);
        }
        if (message.gender !== 0) {
            writer.uint32(48).int32(message.gender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMyProfileRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nickName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.preferredLanguage = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.gender = reader.int32();
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
            firstName: isSet(object.firstName) ? String(object.firstName) : "",
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            nickName: isSet(object.nickName) ? String(object.nickName) : "",
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            preferredLanguage: isSet(object.preferredLanguage) ? String(object.preferredLanguage) : "",
            gender: isSet(object.gender) ? (0, user_1.genderFromJSON)(object.gender) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.nickName !== undefined && (obj.nickName = message.nickName);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.preferredLanguage !== undefined && (obj.preferredLanguage = message.preferredLanguage);
        message.gender !== undefined && (obj.gender = (0, user_1.genderToJSON)(message.gender));
        return obj;
    },
    create(base) {
        return exports.UpdateMyProfileRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateMyProfileRequest();
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.nickName = object.nickName ?? "";
        message.displayName = object.displayName ?? "";
        message.preferredLanguage = object.preferredLanguage ?? "";
        message.gender = object.gender ?? 0;
        return message;
    },
};
function createBaseUpdateMyProfileResponse() {
    return { details: undefined };
}
exports.UpdateMyProfileResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMyProfileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateMyProfileResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateMyProfileResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseGetMyEmailRequest() {
    return {};
}
exports.GetMyEmailRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetMyEmailRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetMyEmailRequest();
        return message;
    },
};
function createBaseGetMyEmailResponse() {
    return { details: undefined, email: undefined };
}
exports.GetMyEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.email !== undefined) {
            user_1.Email.encode(message.email, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = user_1.Email.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            email: isSet(object.email) ? user_1.Email.fromJSON(object.email) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.email !== undefined && (obj.email = message.email ? user_1.Email.toJSON(message.email) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMyEmailResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.email = (object.email !== undefined && object.email !== null) ? user_1.Email.fromPartial(object.email) : undefined;
        return message;
    },
};
function createBaseSetMyEmailRequest() {
    return { email: "" };
}
exports.SetMyEmailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetMyEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { email: isSet(object.email) ? String(object.email) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    create(base) {
        return exports.SetMyEmailRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetMyEmailRequest();
        message.email = object.email ?? "";
        return message;
    },
};
function createBaseSetMyEmailResponse() {
    return { details: undefined };
}
exports.SetMyEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetMyEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetMyEmailResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetMyEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseVerifyMyEmailRequest() {
    return { code: "" };
}
exports.VerifyMyEmailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.code = reader.string();
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
        return { code: isSet(object.code) ? String(object.code) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        return obj;
    },
    create(base) {
        return exports.VerifyMyEmailRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyEmailRequest();
        message.code = object.code ?? "";
        return message;
    },
};
function createBaseVerifyMyEmailResponse() {
    return { details: undefined };
}
exports.VerifyMyEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyMyEmailResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseResendMyEmailVerificationRequest() {
    return {};
}
exports.ResendMyEmailVerificationRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendMyEmailVerificationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ResendMyEmailVerificationRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseResendMyEmailVerificationRequest();
        return message;
    },
};
function createBaseResendMyEmailVerificationResponse() {
    return { details: undefined };
}
exports.ResendMyEmailVerificationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendMyEmailVerificationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.ResendMyEmailVerificationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResendMyEmailVerificationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseGetMyPhoneRequest() {
    return {};
}
exports.GetMyPhoneRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyPhoneRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetMyPhoneRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetMyPhoneRequest();
        return message;
    },
};
function createBaseGetMyPhoneResponse() {
    return { details: undefined, phone: undefined };
}
exports.GetMyPhoneResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.phone !== undefined) {
            user_1.Phone.encode(message.phone, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyPhoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.phone = user_1.Phone.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            phone: isSet(object.phone) ? user_1.Phone.fromJSON(object.phone) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.phone !== undefined && (obj.phone = message.phone ? user_1.Phone.toJSON(message.phone) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMyPhoneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null) ? user_1.Phone.fromPartial(object.phone) : undefined;
        return message;
    },
};
function createBaseSetMyPhoneRequest() {
    return { phone: "" };
}
exports.SetMyPhoneRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.phone !== "") {
            writer.uint32(10).string(message.phone);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetMyPhoneRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.phone = reader.string();
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
        return { phone: isSet(object.phone) ? String(object.phone) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.phone !== undefined && (obj.phone = message.phone);
        return obj;
    },
    create(base) {
        return exports.SetMyPhoneRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetMyPhoneRequest();
        message.phone = object.phone ?? "";
        return message;
    },
};
function createBaseSetMyPhoneResponse() {
    return { details: undefined };
}
exports.SetMyPhoneResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetMyPhoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.SetMyPhoneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetMyPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseVerifyMyPhoneRequest() {
    return { code: "" };
}
exports.VerifyMyPhoneRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyPhoneRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.code = reader.string();
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
        return { code: isSet(object.code) ? String(object.code) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        return obj;
    },
    create(base) {
        return exports.VerifyMyPhoneRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyPhoneRequest();
        message.code = object.code ?? "";
        return message;
    },
};
function createBaseVerifyMyPhoneResponse() {
    return { details: undefined };
}
exports.VerifyMyPhoneResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyPhoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyMyPhoneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseResendMyPhoneVerificationRequest() {
    return {};
}
exports.ResendMyPhoneVerificationRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendMyPhoneVerificationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ResendMyPhoneVerificationRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseResendMyPhoneVerificationRequest();
        return message;
    },
};
function createBaseResendMyPhoneVerificationResponse() {
    return { details: undefined };
}
exports.ResendMyPhoneVerificationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResendMyPhoneVerificationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.ResendMyPhoneVerificationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResendMyPhoneVerificationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveMyPhoneRequest() {
    return {};
}
exports.RemoveMyPhoneRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyPhoneRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.RemoveMyPhoneRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRemoveMyPhoneRequest();
        return message;
    },
};
function createBaseRemoveMyPhoneResponse() {
    return { details: undefined };
}
exports.RemoveMyPhoneResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyPhoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyPhoneResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyPhoneResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveMyAvatarRequest() {
    return {};
}
exports.RemoveMyAvatarRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAvatarRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.RemoveMyAvatarRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRemoveMyAvatarRequest();
        return message;
    },
};
function createBaseRemoveMyAvatarResponse() {
    return { details: undefined };
}
exports.RemoveMyAvatarResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAvatarResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyAvatarResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyAvatarResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListMyLinkedIDPsRequest() {
    return { query: undefined };
}
exports.ListMyLinkedIDPsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            object_1.ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyLinkedIDPsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = object_1.ListQuery.decode(reader, reader.uint32());
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
        return { query: isSet(object.query) ? object_1.ListQuery.fromJSON(object.query) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? object_1.ListQuery.toJSON(message.query) : undefined);
        return obj;
    },
    create(base) {
        return exports.ListMyLinkedIDPsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyLinkedIDPsRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? object_1.ListQuery.fromPartial(object.query)
            : undefined;
        return message;
    },
};
function createBaseListMyLinkedIDPsResponse() {
    return { details: undefined, result: [] };
}
exports.ListMyLinkedIDPsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.result) {
            idp_1.IDPUserLink.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyLinkedIDPsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(idp_1.IDPUserLink.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            result: Array.isArray(object?.result) ? object.result.map((e) => idp_1.IDPUserLink.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.result) {
            obj.result = message.result.map((e) => e ? idp_1.IDPUserLink.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyLinkedIDPsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyLinkedIDPsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = object.result?.map((e) => idp_1.IDPUserLink.fromPartial(e)) || [];
        return message;
    },
};
function createBaseRemoveMyLinkedIDPRequest() {
    return { idpId: "", linkedUserId: "" };
}
exports.RemoveMyLinkedIDPRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.linkedUserId !== "") {
            writer.uint32(18).string(message.linkedUserId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyLinkedIDPRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.linkedUserId = reader.string();
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
            idpId: isSet(object.idpId) ? String(object.idpId) : "",
            linkedUserId: isSet(object.linkedUserId) ? String(object.linkedUserId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.idpId !== undefined && (obj.idpId = message.idpId);
        message.linkedUserId !== undefined && (obj.linkedUserId = message.linkedUserId);
        return obj;
    },
    create(base) {
        return exports.RemoveMyLinkedIDPRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyLinkedIDPRequest();
        message.idpId = object.idpId ?? "";
        message.linkedUserId = object.linkedUserId ?? "";
        return message;
    },
};
function createBaseRemoveMyLinkedIDPResponse() {
    return { details: undefined };
}
exports.RemoveMyLinkedIDPResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyLinkedIDPResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyLinkedIDPResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyLinkedIDPResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListMyAuthFactorsRequest() {
    return {};
}
exports.ListMyAuthFactorsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyAuthFactorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListMyAuthFactorsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseListMyAuthFactorsRequest();
        return message;
    },
};
function createBaseListMyAuthFactorsResponse() {
    return { result: [] };
}
exports.ListMyAuthFactorsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.result) {
            user_1.AuthFactor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyAuthFactorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result.push(user_1.AuthFactor.decode(reader, reader.uint32()));
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
        return { result: Array.isArray(object?.result) ? object.result.map((e) => user_1.AuthFactor.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.result) {
            obj.result = message.result.map((e) => e ? user_1.AuthFactor.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyAuthFactorsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyAuthFactorsResponse();
        message.result = object.result?.map((e) => user_1.AuthFactor.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAddMyAuthFactorU2FRequest() {
    return {};
}
exports.AddMyAuthFactorU2FRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyAuthFactorU2FRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.AddMyAuthFactorU2FRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAddMyAuthFactorU2FRequest();
        return message;
    },
};
function createBaseAddMyAuthFactorU2FResponse() {
    return { key: undefined, details: undefined };
}
exports.AddMyAuthFactorU2FResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== undefined) {
            user_1.WebAuthNKey.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyAuthFactorU2FResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = user_1.WebAuthNKey.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? user_1.WebAuthNKey.fromJSON(object.key) : undefined,
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key ? user_1.WebAuthNKey.toJSON(message.key) : undefined);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddMyAuthFactorU2FResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddMyAuthFactorU2FResponse();
        message.key = (object.key !== undefined && object.key !== null) ? user_1.WebAuthNKey.fromPartial(object.key) : undefined;
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddMyAuthFactorOTPRequest() {
    return {};
}
exports.AddMyAuthFactorOTPRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyAuthFactorOTPRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.AddMyAuthFactorOTPRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAddMyAuthFactorOTPRequest();
        return message;
    },
};
function createBaseAddMyAuthFactorOTPResponse() {
    return { url: "", secret: "", details: undefined };
}
exports.AddMyAuthFactorOTPResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.secret !== "") {
            writer.uint32(18).string(message.secret);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyAuthFactorOTPResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.secret = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
            url: isSet(object.url) ? String(object.url) : "",
            secret: isSet(object.secret) ? String(object.secret) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.secret !== undefined && (obj.secret = message.secret);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddMyAuthFactorOTPResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddMyAuthFactorOTPResponse();
        message.url = object.url ?? "";
        message.secret = object.secret ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseVerifyMyAuthFactorOTPRequest() {
    return { code: "" };
}
exports.VerifyMyAuthFactorOTPRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyAuthFactorOTPRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.code = reader.string();
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
        return { code: isSet(object.code) ? String(object.code) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        return obj;
    },
    create(base) {
        return exports.VerifyMyAuthFactorOTPRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyAuthFactorOTPRequest();
        message.code = object.code ?? "";
        return message;
    },
};
function createBaseVerifyMyAuthFactorOTPResponse() {
    return { details: undefined };
}
exports.VerifyMyAuthFactorOTPResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyAuthFactorOTPResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyMyAuthFactorOTPResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyAuthFactorOTPResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseVerifyMyAuthFactorU2FRequest() {
    return { verification: undefined };
}
exports.VerifyMyAuthFactorU2FRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verification !== undefined) {
            user_1.WebAuthNVerification.encode(message.verification, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyAuthFactorU2FRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.verification = user_1.WebAuthNVerification.decode(reader, reader.uint32());
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
            verification: isSet(object.verification) ? user_1.WebAuthNVerification.fromJSON(object.verification) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.verification !== undefined &&
            (obj.verification = message.verification ? user_1.WebAuthNVerification.toJSON(message.verification) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyMyAuthFactorU2FRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyAuthFactorU2FRequest();
        message.verification = (object.verification !== undefined && object.verification !== null)
            ? user_1.WebAuthNVerification.fromPartial(object.verification)
            : undefined;
        return message;
    },
};
function createBaseVerifyMyAuthFactorU2FResponse() {
    return { details: undefined };
}
exports.VerifyMyAuthFactorU2FResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyAuthFactorU2FResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyMyAuthFactorU2FResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyAuthFactorU2FResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveMyAuthFactorOTPRequest() {
    return {};
}
exports.RemoveMyAuthFactorOTPRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAuthFactorOTPRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.RemoveMyAuthFactorOTPRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRemoveMyAuthFactorOTPRequest();
        return message;
    },
};
function createBaseRemoveMyAuthFactorOTPResponse() {
    return { details: undefined };
}
exports.RemoveMyAuthFactorOTPResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAuthFactorOTPResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyAuthFactorOTPResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyAuthFactorOTPResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddMyAuthFactorOTPSMSRequest() {
    return {};
}
exports.AddMyAuthFactorOTPSMSRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyAuthFactorOTPSMSRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.AddMyAuthFactorOTPSMSRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAddMyAuthFactorOTPSMSRequest();
        return message;
    },
};
function createBaseAddMyAuthFactorOTPSMSResponse() {
    return { details: undefined };
}
exports.AddMyAuthFactorOTPSMSResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyAuthFactorOTPSMSResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddMyAuthFactorOTPSMSResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddMyAuthFactorOTPSMSResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveMyAuthFactorOTPSMSRequest() {
    return {};
}
exports.RemoveMyAuthFactorOTPSMSRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAuthFactorOTPSMSRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.RemoveMyAuthFactorOTPSMSRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRemoveMyAuthFactorOTPSMSRequest();
        return message;
    },
};
function createBaseRemoveMyAuthFactorOTPSMSResponse() {
    return { details: undefined };
}
exports.RemoveMyAuthFactorOTPSMSResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAuthFactorOTPSMSResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyAuthFactorOTPSMSResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyAuthFactorOTPSMSResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddMyAuthFactorOTPEmailRequest() {
    return {};
}
exports.AddMyAuthFactorOTPEmailRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyAuthFactorOTPEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.AddMyAuthFactorOTPEmailRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAddMyAuthFactorOTPEmailRequest();
        return message;
    },
};
function createBaseAddMyAuthFactorOTPEmailResponse() {
    return { details: undefined };
}
exports.AddMyAuthFactorOTPEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyAuthFactorOTPEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddMyAuthFactorOTPEmailResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddMyAuthFactorOTPEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveMyAuthFactorOTPEmailRequest() {
    return {};
}
exports.RemoveMyAuthFactorOTPEmailRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAuthFactorOTPEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.RemoveMyAuthFactorOTPEmailRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRemoveMyAuthFactorOTPEmailRequest();
        return message;
    },
};
function createBaseRemoveMyAuthFactorOTPEmailResponse() {
    return { details: undefined };
}
exports.RemoveMyAuthFactorOTPEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAuthFactorOTPEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyAuthFactorOTPEmailResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyAuthFactorOTPEmailResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveMyAuthFactorU2FRequest() {
    return { tokenId: "" };
}
exports.RemoveMyAuthFactorU2FRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tokenId !== "") {
            writer.uint32(10).string(message.tokenId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAuthFactorU2FRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tokenId = reader.string();
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
        return { tokenId: isSet(object.tokenId) ? String(object.tokenId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.tokenId !== undefined && (obj.tokenId = message.tokenId);
        return obj;
    },
    create(base) {
        return exports.RemoveMyAuthFactorU2FRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyAuthFactorU2FRequest();
        message.tokenId = object.tokenId ?? "";
        return message;
    },
};
function createBaseRemoveMyAuthFactorU2FResponse() {
    return { details: undefined };
}
exports.RemoveMyAuthFactorU2FResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyAuthFactorU2FResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyAuthFactorU2FResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyAuthFactorU2FResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListMyPasswordlessRequest() {
    return {};
}
exports.ListMyPasswordlessRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyPasswordlessRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListMyPasswordlessRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseListMyPasswordlessRequest();
        return message;
    },
};
function createBaseListMyPasswordlessResponse() {
    return { result: [] };
}
exports.ListMyPasswordlessResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.result) {
            user_1.WebAuthNToken.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyPasswordlessResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result.push(user_1.WebAuthNToken.decode(reader, reader.uint32()));
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
        return { result: Array.isArray(object?.result) ? object.result.map((e) => user_1.WebAuthNToken.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.result) {
            obj.result = message.result.map((e) => e ? user_1.WebAuthNToken.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyPasswordlessResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyPasswordlessResponse();
        message.result = object.result?.map((e) => user_1.WebAuthNToken.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAddMyPasswordlessRequest() {
    return {};
}
exports.AddMyPasswordlessRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyPasswordlessRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.AddMyPasswordlessRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAddMyPasswordlessRequest();
        return message;
    },
};
function createBaseAddMyPasswordlessResponse() {
    return { key: undefined, details: undefined };
}
exports.AddMyPasswordlessResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== undefined) {
            user_1.WebAuthNKey.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyPasswordlessResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = user_1.WebAuthNKey.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? user_1.WebAuthNKey.fromJSON(object.key) : undefined,
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key ? user_1.WebAuthNKey.toJSON(message.key) : undefined);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddMyPasswordlessResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddMyPasswordlessResponse();
        message.key = (object.key !== undefined && object.key !== null) ? user_1.WebAuthNKey.fromPartial(object.key) : undefined;
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseAddMyPasswordlessLinkRequest() {
    return {};
}
exports.AddMyPasswordlessLinkRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyPasswordlessLinkRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.AddMyPasswordlessLinkRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAddMyPasswordlessLinkRequest();
        return message;
    },
};
function createBaseAddMyPasswordlessLinkResponse() {
    return { details: undefined, link: "", expiration: undefined };
}
exports.AddMyPasswordlessLinkResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.link !== "") {
            writer.uint32(18).string(message.link);
        }
        if (message.expiration !== undefined) {
            duration_1.Duration.encode(message.expiration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMyPasswordlessLinkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.link = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.expiration = duration_1.Duration.decode(reader, reader.uint32());
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
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            link: isSet(object.link) ? String(object.link) : "",
            expiration: isSet(object.expiration) ? duration_1.Duration.fromJSON(object.expiration) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.link !== undefined && (obj.link = message.link);
        message.expiration !== undefined &&
            (obj.expiration = message.expiration ? duration_1.Duration.toJSON(message.expiration) : undefined);
        return obj;
    },
    create(base) {
        return exports.AddMyPasswordlessLinkResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddMyPasswordlessLinkResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.link = object.link ?? "";
        message.expiration = (object.expiration !== undefined && object.expiration !== null)
            ? duration_1.Duration.fromPartial(object.expiration)
            : undefined;
        return message;
    },
};
function createBaseSendMyPasswordlessLinkRequest() {
    return {};
}
exports.SendMyPasswordlessLinkRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendMyPasswordlessLinkRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.SendMyPasswordlessLinkRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseSendMyPasswordlessLinkRequest();
        return message;
    },
};
function createBaseSendMyPasswordlessLinkResponse() {
    return { details: undefined };
}
exports.SendMyPasswordlessLinkResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendMyPasswordlessLinkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.SendMyPasswordlessLinkResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSendMyPasswordlessLinkResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseVerifyMyPasswordlessRequest() {
    return { verification: undefined };
}
exports.VerifyMyPasswordlessRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verification !== undefined) {
            user_1.WebAuthNVerification.encode(message.verification, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyPasswordlessRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.verification = user_1.WebAuthNVerification.decode(reader, reader.uint32());
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
            verification: isSet(object.verification) ? user_1.WebAuthNVerification.fromJSON(object.verification) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.verification !== undefined &&
            (obj.verification = message.verification ? user_1.WebAuthNVerification.toJSON(message.verification) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyMyPasswordlessRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyPasswordlessRequest();
        message.verification = (object.verification !== undefined && object.verification !== null)
            ? user_1.WebAuthNVerification.fromPartial(object.verification)
            : undefined;
        return message;
    },
};
function createBaseVerifyMyPasswordlessResponse() {
    return { details: undefined };
}
exports.VerifyMyPasswordlessResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMyPasswordlessResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.VerifyMyPasswordlessResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMyPasswordlessResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseRemoveMyPasswordlessRequest() {
    return { tokenId: "" };
}
exports.RemoveMyPasswordlessRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tokenId !== "") {
            writer.uint32(10).string(message.tokenId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyPasswordlessRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tokenId = reader.string();
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
        return { tokenId: isSet(object.tokenId) ? String(object.tokenId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.tokenId !== undefined && (obj.tokenId = message.tokenId);
        return obj;
    },
    create(base) {
        return exports.RemoveMyPasswordlessRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyPasswordlessRequest();
        message.tokenId = object.tokenId ?? "";
        return message;
    },
};
function createBaseRemoveMyPasswordlessResponse() {
    return { details: undefined };
}
exports.RemoveMyPasswordlessResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveMyPasswordlessResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
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
        return { details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        return obj;
    },
    create(base) {
        return exports.RemoveMyPasswordlessResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRemoveMyPasswordlessResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        return message;
    },
};
function createBaseListMyUserGrantsRequest() {
    return { query: undefined };
}
exports.ListMyUserGrantsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            object_1.ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyUserGrantsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = object_1.ListQuery.decode(reader, reader.uint32());
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
        return { query: isSet(object.query) ? object_1.ListQuery.fromJSON(object.query) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? object_1.ListQuery.toJSON(message.query) : undefined);
        return obj;
    },
    create(base) {
        return exports.ListMyUserGrantsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyUserGrantsRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? object_1.ListQuery.fromPartial(object.query)
            : undefined;
        return message;
    },
};
function createBaseListMyUserGrantsResponse() {
    return { details: undefined, result: [] };
}
exports.ListMyUserGrantsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.result) {
            exports.UserGrant.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyUserGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(exports.UserGrant.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            result: Array.isArray(object?.result) ? object.result.map((e) => exports.UserGrant.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.result) {
            obj.result = message.result.map((e) => e ? exports.UserGrant.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyUserGrantsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyUserGrantsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = object.result?.map((e) => exports.UserGrant.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUserGrant() {
    return {
        orgId: "",
        projectId: "",
        userId: "",
        roles: [],
        orgName: "",
        grantId: "",
        details: undefined,
        orgDomain: "",
        projectName: "",
        projectGrantId: "",
        roleKeys: [],
        userType: 0,
    };
}
exports.UserGrant = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        for (const v of message.roles) {
            writer.uint32(34).string(v);
        }
        if (message.orgName !== "") {
            writer.uint32(42).string(message.orgName);
        }
        if (message.grantId !== "") {
            writer.uint32(50).string(message.grantId);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(58).fork()).ldelim();
        }
        if (message.orgDomain !== "") {
            writer.uint32(66).string(message.orgDomain);
        }
        if (message.projectName !== "") {
            writer.uint32(74).string(message.projectName);
        }
        if (message.projectGrantId !== "") {
            writer.uint32(82).string(message.projectGrantId);
        }
        for (const v of message.roleKeys) {
            writer.uint32(90).string(v);
        }
        if (message.userType !== 0) {
            writer.uint32(96).int32(message.userType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.roles.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.orgName = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.grantId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.orgDomain = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.projectName = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.projectGrantId = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.roleKeys.push(reader.string());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.userType = reader.int32();
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
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
            roles: Array.isArray(object?.roles) ? object.roles.map((e) => String(e)) : [],
            orgName: isSet(object.orgName) ? String(object.orgName) : "",
            grantId: isSet(object.grantId) ? String(object.grantId) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            orgDomain: isSet(object.orgDomain) ? String(object.orgDomain) : "",
            projectName: isSet(object.projectName) ? String(object.projectName) : "",
            projectGrantId: isSet(object.projectGrantId) ? String(object.projectGrantId) : "",
            roleKeys: Array.isArray(object?.roleKeys) ? object.roleKeys.map((e) => String(e)) : [],
            userType: isSet(object.userType) ? (0, user_1.typeFromJSON)(object.userType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.userId !== undefined && (obj.userId = message.userId);
        if (message.roles) {
            obj.roles = message.roles.map((e) => e);
        }
        else {
            obj.roles = [];
        }
        message.orgName !== undefined && (obj.orgName = message.orgName);
        message.grantId !== undefined && (obj.grantId = message.grantId);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.orgDomain !== undefined && (obj.orgDomain = message.orgDomain);
        message.projectName !== undefined && (obj.projectName = message.projectName);
        message.projectGrantId !== undefined && (obj.projectGrantId = message.projectGrantId);
        if (message.roleKeys) {
            obj.roleKeys = message.roleKeys.map((e) => e);
        }
        else {
            obj.roleKeys = [];
        }
        message.userType !== undefined && (obj.userType = (0, user_1.typeToJSON)(message.userType));
        return obj;
    },
    create(base) {
        return exports.UserGrant.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrant();
        message.orgId = object.orgId ?? "";
        message.projectId = object.projectId ?? "";
        message.userId = object.userId ?? "";
        message.roles = object.roles?.map((e) => e) || [];
        message.orgName = object.orgName ?? "";
        message.grantId = object.grantId ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.orgDomain = object.orgDomain ?? "";
        message.projectName = object.projectName ?? "";
        message.projectGrantId = object.projectGrantId ?? "";
        message.roleKeys = object.roleKeys?.map((e) => e) || [];
        message.userType = object.userType ?? 0;
        return message;
    },
};
function createBaseListMyProjectOrgsRequest() {
    return { query: undefined, queries: [] };
}
exports.ListMyProjectOrgsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            object_1.ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.queries) {
            org_1.OrgQuery.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyProjectOrgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = object_1.ListQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.queries.push(org_1.OrgQuery.decode(reader, reader.uint32()));
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
            query: isSet(object.query) ? object_1.ListQuery.fromJSON(object.query) : undefined,
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => org_1.OrgQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? object_1.ListQuery.toJSON(message.query) : undefined);
        if (message.queries) {
            obj.queries = message.queries.map((e) => e ? org_1.OrgQuery.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyProjectOrgsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyProjectOrgsRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? object_1.ListQuery.fromPartial(object.query)
            : undefined;
        message.queries = object.queries?.map((e) => org_1.OrgQuery.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListMyProjectOrgsResponse() {
    return { details: undefined, result: [] };
}
exports.ListMyProjectOrgsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.result) {
            org_1.Org.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyProjectOrgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(org_1.Org.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            result: Array.isArray(object?.result) ? object.result.map((e) => org_1.Org.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.result) {
            obj.result = message.result.map((e) => e ? org_1.Org.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyProjectOrgsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyProjectOrgsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = object.result?.map((e) => org_1.Org.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListMyZitadelPermissionsRequest() {
    return {};
}
exports.ListMyZitadelPermissionsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyZitadelPermissionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListMyZitadelPermissionsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseListMyZitadelPermissionsRequest();
        return message;
    },
};
function createBaseListMyZitadelPermissionsResponse() {
    return { result: [] };
}
exports.ListMyZitadelPermissionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.result) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyZitadelPermissionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result.push(reader.string());
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
        return { result: Array.isArray(object?.result) ? object.result.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.result) {
            obj.result = message.result.map((e) => e);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyZitadelPermissionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyZitadelPermissionsResponse();
        message.result = object.result?.map((e) => e) || [];
        return message;
    },
};
function createBaseListMyProjectPermissionsRequest() {
    return {};
}
exports.ListMyProjectPermissionsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyProjectPermissionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListMyProjectPermissionsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseListMyProjectPermissionsRequest();
        return message;
    },
};
function createBaseListMyProjectPermissionsResponse() {
    return { result: [] };
}
exports.ListMyProjectPermissionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.result) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyProjectPermissionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result.push(reader.string());
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
        return { result: Array.isArray(object?.result) ? object.result.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.result) {
            obj.result = message.result.map((e) => e);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyProjectPermissionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyProjectPermissionsResponse();
        message.result = object.result?.map((e) => e) || [];
        return message;
    },
};
function createBaseListMyMembershipsRequest() {
    return { query: undefined, queries: [] };
}
exports.ListMyMembershipsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            object_1.ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.queries) {
            user_1.MembershipQuery.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyMembershipsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = object_1.ListQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.queries.push(user_1.MembershipQuery.decode(reader, reader.uint32()));
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
            query: isSet(object.query) ? object_1.ListQuery.fromJSON(object.query) : undefined,
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => user_1.MembershipQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? object_1.ListQuery.toJSON(message.query) : undefined);
        if (message.queries) {
            obj.queries = message.queries.map((e) => e ? user_1.MembershipQuery.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyMembershipsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyMembershipsRequest();
        message.query = (object.query !== undefined && object.query !== null)
            ? object_1.ListQuery.fromPartial(object.query)
            : undefined;
        message.queries = object.queries?.map((e) => user_1.MembershipQuery.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListMyMembershipsResponse() {
    return { details: undefined, result: [] };
}
exports.ListMyMembershipsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.result) {
            user_1.Membership.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyMembershipsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_1.ListDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result.push(user_1.Membership.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_1.ListDetails.fromJSON(object.details) : undefined,
            result: Array.isArray(object?.result) ? object.result.map((e) => user_1.Membership.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined && (obj.details = message.details ? object_1.ListDetails.toJSON(message.details) : undefined);
        if (message.result) {
            obj.result = message.result.map((e) => e ? user_1.Membership.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListMyMembershipsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListMyMembershipsResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ListDetails.fromPartial(object.details)
            : undefined;
        message.result = object.result?.map((e) => user_1.Membership.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetMyLabelPolicyRequest() {
    return {};
}
exports.GetMyLabelPolicyRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyLabelPolicyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetMyLabelPolicyRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetMyLabelPolicyRequest();
        return message;
    },
};
function createBaseGetMyLabelPolicyResponse() {
    return { policy: undefined };
}
exports.GetMyLabelPolicyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policy !== undefined) {
            policy_1.LabelPolicy.encode(message.policy, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyLabelPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.policy = policy_1.LabelPolicy.decode(reader, reader.uint32());
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
        return { policy: isSet(object.policy) ? policy_1.LabelPolicy.fromJSON(object.policy) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.policy !== undefined && (obj.policy = message.policy ? policy_1.LabelPolicy.toJSON(message.policy) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMyLabelPolicyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyLabelPolicyResponse();
        message.policy = (object.policy !== undefined && object.policy !== null)
            ? policy_1.LabelPolicy.fromPartial(object.policy)
            : undefined;
        return message;
    },
};
function createBaseGetMyPrivacyPolicyRequest() {
    return {};
}
exports.GetMyPrivacyPolicyRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyPrivacyPolicyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetMyPrivacyPolicyRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetMyPrivacyPolicyRequest();
        return message;
    },
};
function createBaseGetMyPrivacyPolicyResponse() {
    return { policy: undefined };
}
exports.GetMyPrivacyPolicyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policy !== undefined) {
            policy_1.PrivacyPolicy.encode(message.policy, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyPrivacyPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.policy = policy_1.PrivacyPolicy.decode(reader, reader.uint32());
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
        return { policy: isSet(object.policy) ? policy_1.PrivacyPolicy.fromJSON(object.policy) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.policy !== undefined && (obj.policy = message.policy ? policy_1.PrivacyPolicy.toJSON(message.policy) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMyPrivacyPolicyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyPrivacyPolicyResponse();
        message.policy = (object.policy !== undefined && object.policy !== null)
            ? policy_1.PrivacyPolicy.fromPartial(object.policy)
            : undefined;
        return message;
    },
};
function createBaseGetMyLoginPolicyRequest() {
    return {};
}
exports.GetMyLoginPolicyRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyLoginPolicyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.GetMyLoginPolicyRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetMyLoginPolicyRequest();
        return message;
    },
};
function createBaseGetMyLoginPolicyResponse() {
    return { policy: undefined };
}
exports.GetMyLoginPolicyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policy !== undefined) {
            policy_1.LoginPolicy.encode(message.policy, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyLoginPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.policy = policy_1.LoginPolicy.decode(reader, reader.uint32());
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
        return { policy: isSet(object.policy) ? policy_1.LoginPolicy.fromJSON(object.policy) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.policy !== undefined && (obj.policy = message.policy ? policy_1.LoginPolicy.toJSON(message.policy) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMyLoginPolicyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMyLoginPolicyResponse();
        message.policy = (object.policy !== undefined && object.policy !== null)
            ? policy_1.LoginPolicy.fromPartial(object.policy)
            : undefined;
        return message;
    },
};
exports.AuthServiceDefinition = {
    name: "AuthService",
    fullName: "zitadel.auth.v1.AuthService",
    methods: {
        healthz: {
            name: "Healthz",
            requestType: exports.HealthzRequest,
            requestStream: false,
            responseType: exports.HealthzResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            113,
                            10,
                            7,
                            71,
                            101,
                            110,
                            101,
                            114,
                            97,
                            108,
                            18,
                            7,
                            72,
                            101,
                            97,
                            108,
                            116,
                            104,
                            122,
                            26,
                            93,
                            84,
                            104,
                            101,
                            32,
                            104,
                            101,
                            97,
                            108,
                            116,
                            104,
                            32,
                            101,
                            110,
                            100,
                            112,
                            111,
                            105,
                            110,
                            116,
                            32,
                            97,
                            108,
                            108,
                            111,
                            119,
                            115,
                            32,
                            97,
                            110,
                            32,
                            101,
                            120,
                            116,
                            101,
                            114,
                            110,
                            97,
                            108,
                            32,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            32,
                            116,
                            111,
                            32,
                            112,
                            114,
                            111,
                            98,
                            101,
                            32,
                            105,
                            102,
                            32,
                            90,
                            73,
                            84,
                            65,
                            68,
                            69,
                            76,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            65,
                            80,
                            73,
                            32,
                            105,
                            115,
                            32,
                            97,
                            108,
                            105,
                            118,
                            101,
                        ]),
                    ],
                    578365826: [Buffer.from([10, 18, 8, 47, 104, 101, 97, 108, 116, 104, 122])],
                },
            },
        },
        getSupportedLanguages: {
            name: "GetSupportedLanguages",
            requestType: exports.GetSupportedLanguagesRequest,
            requestStream: false,
            responseType: exports.GetSupportedLanguagesResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            124,
                            10,
                            7,
                            71,
                            101,
                            110,
                            101,
                            114,
                            97,
                            108,
                            18,
                            19,
                            83,
                            117,
                            112,
                            112,
                            111,
                            114,
                            116,
                            101,
                            100,
                            32,
                            76,
                            97,
                            110,
                            103,
                            117,
                            97,
                            103,
                            101,
                            115,
                            26,
                            92,
                            84,
                            104,
                            101,
                            32,
                            115,
                            117,
                            112,
                            112,
                            111,
                            114,
                            116,
                            101,
                            100,
                            47,
                            100,
                            101,
                            102,
                            97,
                            117,
                            108,
                            116,
                            32,
                            108,
                            97,
                            110,
                            103,
                            117,
                            97,
                            103,
                            101,
                            115,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            121,
                            115,
                            116,
                            101,
                            109,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            101,
                            100,
                            32,
                            98,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            110,
                            103,
                            117,
                            97,
                            103,
                            101,
                            32,
                            97,
                            98,
                            98,
                            114,
                            101,
                            118,
                            105,
                            97,
                            116,
                            105,
                            111,
                            110,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [Buffer.from([12, 18, 10, 47, 108, 97, 110, 103, 117, 97, 103, 101, 115])],
                },
            },
        },
        getMyUser: {
            name: "GetMyUser",
            requestType: exports.GetMyUserRequest,
            requestStream: false,
            responseType: exports.GetMyUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            117,
                            10,
                            4,
                            85,
                            115,
                            101,
                            114,
                            18,
                            11,
                            71,
                            101,
                            116,
                            32,
                            109,
                            121,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            96,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            102,
                            117,
                            108,
                            108,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            111,
                            98,
                            106,
                            101,
                            99,
                            116,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            105,
                            110,
                            99,
                            108,
                            117,
                            100,
                            105,
                            110,
                            103,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            114,
                            111,
                            102,
                            105,
                            108,
                            101,
                            44,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            44,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            44,
                            32,
                            101,
                            116,
                            99,
                            32,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [Buffer.from([11, 18, 9, 47, 117, 115, 101, 114, 115, 47, 109, 101])],
                },
            },
        },
        removeMyUser: {
            name: "RemoveMyUser",
            requestType: exports.RemoveMyUserRequest,
            requestStream: false,
            responseType: exports.RemoveMyUserResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            159,
                            1,
                            10,
                            4,
                            85,
                            115,
                            101,
                            114,
                            18,
                            14,
                            68,
                            101,
                            108,
                            101,
                            116,
                            101,
                            32,
                            109,
                            121,
                            32,
                            117,
                            115,
                            101,
                            114,
                            26,
                            134,
                            1,
                            68,
                            101,
                            108,
                            101,
                            116,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            117,
                            114,
                            114,
                            101,
                            110,
                            116,
                            108,
                            121,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            65,
                            108,
                            108,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            115,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            114,
                            101,
                            109,
                            111,
                            118,
                            101,
                            100,
                            32,
                            97,
                            110,
                            100,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            110,
                            111,
                            116,
                            32,
                            98,
                            101,
                            32,
                            97,
                            98,
                            108,
                            101,
                            32,
                            116,
                            111,
                            32,
                            109,
                            97,
                            107,
                            101,
                            32,
                            97,
                            110,
                            121,
                            32,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            46,
                        ]),
                    ],
                    400002: [
                        Buffer.from([18, 10, 16, 117, 115, 101, 114, 46, 115, 101, 108, 102, 46, 100, 101, 108, 101, 116, 101]),
                    ],
                    578365826: [Buffer.from([11, 42, 9, 47, 117, 115, 101, 114, 115, 47, 109, 101])],
                },
            },
        },
        listMyUserChanges: {
            name: "ListMyUserChanges",
            requestType: exports.ListMyUserChangesRequest,
            requestStream: false,
            responseType: exports.ListMyUserChangesResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            165,
                            1,
                            10,
                            4,
                            85,
                            115,
                            101,
                            114,
                            18,
                            19,
                            71,
                            101,
                            116,
                            32,
                            77,
                            121,
                            32,
                            85,
                            115,
                            101,
                            114,
                            32,
                            72,
                            105,
                            115,
                            116,
                            111,
                            114,
                            121,
                            26,
                            135,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            99,
                            104,
                            97,
                            110,
                            103,
                            101,
                            115,
                            47,
                            101,
                            118,
                            101,
                            110,
                            116,
                            115,
                            32,
                            116,
                            104,
                            97,
                            116,
                            32,
                            104,
                            97,
                            118,
                            101,
                            32,
                            104,
                            97,
                            112,
                            112,
                            101,
                            110,
                            101,
                            100,
                            32,
                            111,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            116,
                            39,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            104,
                            105,
                            115,
                            116,
                            111,
                            114,
                            121,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            77,
                            97,
                            107,
                            101,
                            32,
                            115,
                            117,
                            114,
                            101,
                            32,
                            116,
                            111,
                            32,
                            115,
                            101,
                            110,
                            100,
                            32,
                            97,
                            32,
                            108,
                            105,
                            109,
                            105,
                            116,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            30,
                            58,
                            1,
                            42,
                            34,
                            25,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            99,
                            104,
                            97,
                            110,
                            103,
                            101,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        listMyUserSessions: {
            name: "ListMyUserSessions",
            requestType: exports.ListMyUserSessionsRequest,
            requestStream: false,
            responseType: exports.ListMyUserSessionsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            173,
                            1,
                            10,
                            4,
                            85,
                            115,
                            101,
                            114,
                            18,
                            20,
                            71,
                            101,
                            116,
                            32,
                            77,
                            121,
                            32,
                            85,
                            115,
                            101,
                            114,
                            32,
                            83,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            26,
                            142,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            97,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            97,
                            103,
                            101,
                            110,
                            116,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            99,
                            97,
                            110,
                            32,
                            98,
                            101,
                            32,
                            117,
                            115,
                            101,
                            100,
                            32,
                            116,
                            111,
                            32,
                            115,
                            119,
                            105,
                            116,
                            99,
                            104,
                            32,
                            97,
                            99,
                            99,
                            111,
                            117,
                            110,
                            116,
                            115,
                            32,
                            105,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            117,
                            114,
                            114,
                            101,
                            110,
                            116,
                            32,
                            97,
                            112,
                            112,
                            108,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            31,
                            58,
                            1,
                            42,
                            34,
                            26,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            115,
                            101,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        listMyMetadata: {
            name: "ListMyMetadata",
            requestType: exports.ListMyMetadataRequest,
            requestStream: false,
            responseType: exports.ListMyMetadataResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            170,
                            1,
                            10,
                            13,
                            85,
                            115,
                            101,
                            114,
                            32,
                            77,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            18,
                            20,
                            71,
                            101,
                            116,
                            32,
                            77,
                            121,
                            32,
                            85,
                            115,
                            101,
                            114,
                            32,
                            77,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            26,
                            130,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            109,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            77,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            32,
                            105,
                            115,
                            32,
                            97,
                            32,
                            107,
                            101,
                            121,
                            32,
                            118,
                            97,
                            108,
                            117,
                            101,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            97,
                            100,
                            100,
                            105,
                            116,
                            105,
                            111,
                            110,
                            97,
                            108,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            110,
                            101,
                            101,
                            100,
                            101,
                            100,
                            32,
                            111,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            31,
                            58,
                            1,
                            42,
                            34,
                            26,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            109,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        getMyMetadata: {
            name: "GetMyMetadata",
            requestType: exports.GetMyMetadataRequest,
            requestStream: false,
            responseType: exports.GetMyMetadataResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            193,
                            1,
                            10,
                            13,
                            85,
                            115,
                            101,
                            114,
                            32,
                            77,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            18,
                            27,
                            71,
                            101,
                            116,
                            32,
                            77,
                            121,
                            32,
                            85,
                            115,
                            101,
                            114,
                            32,
                            77,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            32,
                            66,
                            121,
                            32,
                            75,
                            101,
                            121,
                            26,
                            146,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            109,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            32,
                            118,
                            97,
                            108,
                            117,
                            101,
                            32,
                            98,
                            121,
                            32,
                            97,
                            32,
                            115,
                            112,
                            101,
                            99,
                            105,
                            102,
                            105,
                            99,
                            32,
                            107,
                            101,
                            121,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            77,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            32,
                            105,
                            115,
                            32,
                            97,
                            32,
                            107,
                            101,
                            121,
                            32,
                            118,
                            97,
                            108,
                            117,
                            101,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            97,
                            100,
                            100,
                            105,
                            116,
                            105,
                            111,
                            110,
                            97,
                            108,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            110,
                            101,
                            101,
                            100,
                            101,
                            100,
                            32,
                            111,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            26,
                            18,
                            24,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            109,
                            101,
                            116,
                            97,
                            100,
                            97,
                            116,
                            97,
                            47,
                            123,
                            107,
                            101,
                            121,
                            125,
                        ]),
                    ],
                },
            },
        },
        listMyRefreshTokens: {
            name: "ListMyRefreshTokens",
            requestType: exports.ListMyRefreshTokensRequest,
            requestStream: false,
            responseType: exports.ListMyRefreshTokensResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            96,
                            10,
                            11,
                            85,
                            115,
                            101,
                            114,
                            32,
                            84,
                            111,
                            107,
                            101,
                            110,
                            115,
                            18,
                            18,
                            71,
                            101,
                            116,
                            32,
                            82,
                            101,
                            102,
                            114,
                            101,
                            115,
                            104,
                            32,
                            84,
                            111,
                            107,
                            101,
                            110,
                            115,
                            26,
                            61,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            114,
                            101,
                            102,
                            114,
                            101,
                            115,
                            104,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            115,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            37,
                            58,
                            1,
                            42,
                            34,
                            32,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            116,
                            111,
                            107,
                            101,
                            110,
                            115,
                            47,
                            114,
                            101,
                            102,
                            114,
                            101,
                            115,
                            104,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        revokeMyRefreshToken: {
            name: "RevokeMyRefreshToken",
            requestType: exports.RevokeMyRefreshTokenRequest,
            requestStream: false,
            responseType: exports.RevokeMyRefreshTokenResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            110,
                            10,
                            11,
                            85,
                            115,
                            101,
                            114,
                            32,
                            84,
                            111,
                            107,
                            101,
                            110,
                            115,
                            18,
                            21,
                            82,
                            101,
                            118,
                            111,
                            107,
                            101,
                            32,
                            82,
                            101,
                            102,
                            114,
                            101,
                            115,
                            104,
                            32,
                            84,
                            111,
                            107,
                            101,
                            110,
                            115,
                            26,
                            72,
                            82,
                            101,
                            118,
                            111,
                            107,
                            101,
                            115,
                            32,
                            97,
                            32,
                            115,
                            105,
                            110,
                            103,
                            108,
                            101,
                            32,
                            114,
                            101,
                            102,
                            114,
                            101,
                            115,
                            104,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            111,
                            114,
                            105,
                            122,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            98,
                            121,
                            32,
                            105,
                            116,
                            115,
                            32,
                            40,
                            116,
                            111,
                            107,
                            101,
                            110,
                            41,
                            32,
                            105,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            31,
                            42,
                            29,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            116,
                            111,
                            107,
                            101,
                            110,
                            115,
                            47,
                            114,
                            101,
                            102,
                            114,
                            101,
                            115,
                            104,
                            47,
                            123,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        revokeAllMyRefreshTokens: {
            name: "RevokeAllMyRefreshTokens",
            requestType: exports.RevokeAllMyRefreshTokensRequest,
            requestStream: false,
            responseType: exports.RevokeAllMyRefreshTokensResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            95,
                            10,
                            11,
                            85,
                            115,
                            101,
                            114,
                            32,
                            84,
                            111,
                            107,
                            101,
                            110,
                            115,
                            18,
                            25,
                            82,
                            101,
                            118,
                            111,
                            107,
                            101,
                            32,
                            65,
                            108,
                            108,
                            32,
                            82,
                            101,
                            102,
                            114,
                            101,
                            115,
                            104,
                            32,
                            84,
                            111,
                            107,
                            101,
                            110,
                            115,
                            26,
                            53,
                            82,
                            101,
                            118,
                            111,
                            107,
                            101,
                            115,
                            32,
                            97,
                            108,
                            108,
                            32,
                            114,
                            101,
                            102,
                            114,
                            101,
                            115,
                            104,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            115,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            116,
                            111,
                            107,
                            101,
                            110,
                            115,
                            47,
                            114,
                            101,
                            102,
                            114,
                            101,
                            115,
                            104,
                            47,
                            95,
                            114,
                            101,
                            118,
                            111,
                            107,
                            101,
                            95,
                            97,
                            108,
                            108,
                        ]),
                    ],
                },
            },
        },
        updateMyUserName: {
            name: "UpdateMyUserName",
            requestType: exports.UpdateMyUserNameRequest,
            requestStream: false,
            responseType: exports.UpdateMyUserNameResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            142,
                            1,
                            10,
                            5,
                            85,
                            115,
                            101,
                            114,
                            115,
                            18,
                            18,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            32,
                            77,
                            121,
                            32,
                            85,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
                            26,
                            113,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            116,
                            111,
                            32,
                            108,
                            111,
                            103,
                            32,
                            105,
                            110,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            110,
                            101,
                            119,
                            108,
                            121,
                            32,
                            99,
                            114,
                            101,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            119,
                            97,
                            114,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            23,
                            58,
                            1,
                            42,
                            26,
                            18,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            117,
                            115,
                            101,
                            114,
                            110,
                            97,
                            109,
                            101,
                        ]),
                    ],
                },
            },
        },
        getMyPasswordComplexityPolicy: {
            name: "GetMyPasswordComplexityPolicy",
            requestType: exports.GetMyPasswordComplexityPolicyRequest,
            requestStream: false,
            responseType: exports.GetMyPasswordComplexityPolicyResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            252,
                            1,
                            10,
                            13,
                            85,
                            115,
                            101,
                            114,
                            32,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            10,
                            8,
                            80,
                            111,
                            108,
                            105,
                            99,
                            105,
                            101,
                            115,
                            18,
                            29,
                            71,
                            101,
                            116,
                            32,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            99,
                            111,
                            109,
                            112,
                            108,
                            101,
                            120,
                            105,
                            116,
                            121,
                            32,
                            80,
                            111,
                            108,
                            105,
                            99,
                            121,
                            26,
                            193,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            99,
                            111,
                            109,
                            112,
                            108,
                            101,
                            120,
                            105,
                            116,
                            121,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            32,
                            116,
                            104,
                            97,
                            116,
                            32,
                            115,
                            104,
                            111,
                            117,
                            108,
                            100,
                            32,
                            98,
                            101,
                            32,
                            117,
                            115,
                            101,
                            100,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            116,
                            32,
                            105,
                            115,
                            32,
                            115,
                            101,
                            116,
                            32,
                            101,
                            105,
                            116,
                            104,
                            101,
                            114,
                            32,
                            111,
                            110,
                            32,
                            97,
                            110,
                            32,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            32,
                            111,
                            114,
                            32,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            108,
                            101,
                            118,
                            101,
                            108,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            112,
                            111,
                            108,
                            105,
                            99,
                            121,
                            32,
                            100,
                            101,
                            102,
                            105,
                            110,
                            101,
                            115,
                            32,
                            104,
                            111,
                            119,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            115,
                            104,
                            111,
                            117,
                            108,
                            100,
                            32,
                            108,
                            111,
                            111,
                            107,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            32,
                            18,
                            30,
                            47,
                            112,
                            111,
                            108,
                            105,
                            99,
                            105,
                            101,
                            115,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            115,
                            47,
                            99,
                            111,
                            109,
                            112,
                            108,
                            101,
                            120,
                            105,
                            116,
                            121,
                        ]),
                    ],
                },
            },
        },
        updateMyPassword: {
            name: "UpdateMyPassword",
            requestType: exports.UpdateMyPasswordRequest,
            requestStream: false,
            responseType: exports.UpdateMyPasswordResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            144,
                            1,
                            10,
                            13,
                            85,
                            115,
                            101,
                            114,
                            32,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            18,
                            15,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            32,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            26,
                            110,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            77,
                            97,
                            107,
                            101,
                            32,
                            115,
                            117,
                            114,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            102,
                            111,
                            108,
                            108,
                            111,
                            119,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            99,
                            111,
                            109,
                            112,
                            108,
                            101,
                            120,
                            105,
                            116,
                            121,
                            32,
                            112,
                            111,
                            108,
                            105,
                            99,
                            121,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            23,
                            58,
                            1,
                            42,
                            26,
                            18,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                        ]),
                    ],
                },
            },
        },
        getMyProfile: {
            name: "GetMyProfile",
            requestType: exports.GetMyProfileRequest,
            requestStream: false,
            responseType: exports.GetMyProfileResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            134,
                            1,
                            10,
                            12,
                            85,
                            115,
                            101,
                            114,
                            32,
                            80,
                            114,
                            111,
                            102,
                            105,
                            108,
                            101,
                            18,
                            14,
                            71,
                            101,
                            116,
                            32,
                            77,
                            121,
                            32,
                            80,
                            114,
                            111,
                            102,
                            105,
                            108,
                            101,
                            26,
                            102,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            114,
                            111,
                            102,
                            105,
                            108,
                            101,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            44,
                            32,
                            116,
                            104,
                            105,
                            115,
                            32,
                            105,
                            110,
                            99,
                            108,
                            117,
                            100,
                            101,
                            115,
                            32,
                            103,
                            105,
                            118,
                            101,
                            110,
                            32,
                            110,
                            97,
                            109,
                            101,
                            44,
                            32,
                            102,
                            97,
                            109,
                            105,
                            108,
                            121,
                            32,
                            110,
                            97,
                            109,
                            101,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([19, 18, 17, 47, 117, 115, 101, 114, 115, 47, 109, 101, 47, 112, 114, 111, 102, 105, 108, 101]),
                    ],
                },
            },
        },
        updateMyProfile: {
            name: "UpdateMyProfile",
            requestType: exports.UpdateMyProfileRequest,
            requestStream: false,
            responseType: exports.UpdateMyProfileResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            164,
                            1,
                            10,
                            12,
                            85,
                            115,
                            101,
                            114,
                            32,
                            80,
                            114,
                            111,
                            102,
                            105,
                            108,
                            101,
                            18,
                            17,
                            85,
                            112,
                            100,
                            97,
                            116,
                            101,
                            32,
                            77,
                            121,
                            32,
                            80,
                            114,
                            111,
                            102,
                            105,
                            108,
                            101,
                            26,
                            128,
                            1,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            114,
                            111,
                            102,
                            105,
                            108,
                            101,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            105,
                            110,
                            99,
                            108,
                            117,
                            100,
                            101,
                            115,
                            32,
                            105,
                            110,
                            102,
                            111,
                            114,
                            109,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            108,
                            105,
                            107,
                            101,
                            32,
                            103,
                            105,
                            118,
                            101,
                            110,
                            32,
                            110,
                            97,
                            109,
                            101,
                            44,
                            32,
                            102,
                            97,
                            109,
                            105,
                            108,
                            121,
                            32,
                            110,
                            97,
                            109,
                            101,
                            44,
                            32,
                            108,
                            97,
                            110,
                            103,
                            117,
                            97,
                            103,
                            101,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            22,
                            58,
                            1,
                            42,
                            26,
                            17,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            114,
                            111,
                            102,
                            105,
                            108,
                            101,
                        ]),
                    ],
                },
            },
        },
        getMyEmail: {
            name: "GetMyEmail",
            requestType: exports.GetMyEmailRequest,
            requestStream: false,
            responseType: exports.GetMyEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            102,
                            10,
                            10,
                            85,
                            115,
                            101,
                            114,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            18,
                            12,
                            71,
                            101,
                            116,
                            32,
                            77,
                            121,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            26,
                            74,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            32,
                            97,
                            110,
                            100,
                            32,
                            116,
                            104,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            102,
                            108,
                            97,
                            103,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [Buffer.from([17, 18, 15, 47, 117, 115, 101, 114, 115, 47, 109, 101, 47, 101, 109, 97, 105, 108])],
                },
            },
        },
        setMyEmail: {
            name: "SetMyEmail",
            requestType: exports.SetMyEmailRequest,
            requestStream: false,
            responseType: exports.SetMyEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            144,
                            1,
                            10,
                            10,
                            85,
                            115,
                            101,
                            114,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            18,
                            15,
                            85,
                            112,
                            100,
                            97,
                            116,
                            101,
                            32,
                            77,
                            121,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            26,
                            113,
                            67,
                            104,
                            97,
                            110,
                            103,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            65,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            115,
                            101,
                            110,
                            116,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            103,
                            105,
                            118,
                            101,
                            110,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([20, 58, 1, 42, 26, 15, 47, 117, 115, 101, 114, 115, 47, 109, 101, 47, 101, 109, 97, 105, 108]),
                    ],
                },
            },
        },
        verifyMyEmail: {
            name: "VerifyMyEmail",
            requestType: exports.VerifyMyEmailRequest,
            requestStream: false,
            responseType: exports.VerifyMyEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            162,
                            1,
                            10,
                            10,
                            85,
                            115,
                            101,
                            114,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            18,
                            15,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            77,
                            121,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            26,
                            130,
                            1,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            111,
                            100,
                            101,
                            32,
                            116,
                            104,
                            97,
                            116,
                            32,
                            104,
                            97,
                            115,
                            32,
                            98,
                            101,
                            101,
                            110,
                            32,
                            115,
                            101,
                            110,
                            116,
                            46,
                            32,
                            83,
                            116,
                            97,
                            116,
                            101,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            32,
                            105,
                            115,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            28,
                            58,
                            1,
                            42,
                            34,
                            23,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            101,
                            109,
                            97,
                            105,
                            108,
                            47,
                            95,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        resendMyEmailVerification: {
            name: "ResendMyEmailVerification",
            requestType: exports.ResendMyEmailVerificationRequest,
            requestStream: false,
            responseType: exports.ResendMyEmailVerificationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            163,
                            1,
                            10,
                            10,
                            85,
                            115,
                            101,
                            114,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            18,
                            25,
                            82,
                            101,
                            115,
                            101,
                            110,
                            100,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            86,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            26,
                            122,
                            65,
                            32,
                            110,
                            101,
                            119,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            115,
                            101,
                            110,
                            116,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            115,
                            116,
                            32,
                            115,
                            101,
                            116,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            44,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            115,
                            116,
                            32,
                            115,
                            101,
                            116,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            117,
                            115,
                            101,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            101,
                            109,
                            97,
                            105,
                            108,
                            47,
                            95,
                            114,
                            101,
                            115,
                            101,
                            110,
                            100,
                            95,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                        ]),
                    ],
                },
            },
        },
        getMyPhone: {
            name: "GetMyPhone",
            requestType: exports.GetMyPhoneRequest,
            requestStream: false,
            responseType: exports.GetMyPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            115,
                            10,
                            10,
                            85,
                            115,
                            101,
                            114,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            18,
                            12,
                            71,
                            101,
                            116,
                            32,
                            77,
                            121,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            26,
                            87,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            97,
                            110,
                            100,
                            32,
                            105,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            116,
                            97,
                            116,
                            101,
                            32,
                            105,
                            115,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            111,
                            114,
                            32,
                            110,
                            111,
                            116,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([17, 18, 15, 47, 117, 115, 101, 114, 115, 47, 109, 101, 47, 112, 104, 111, 110, 101]),
                    ],
                },
            },
        },
        setMyPhone: {
            name: "SetMyPhone",
            requestType: exports.SetMyPhoneRequest,
            requestStream: false,
            responseType: exports.SetMyPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            189,
                            1,
                            10,
                            10,
                            85,
                            115,
                            101,
                            114,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            18,
                            12,
                            83,
                            101,
                            116,
                            32,
                            77,
                            121,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            26,
                            160,
                            1,
                            83,
                            101,
                            116,
                            115,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            102,
                            32,
                            97,
                            32,
                            110,
                            111,
                            116,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            32,
                            105,
                            115,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            101,
                            100,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            114,
                            101,
                            99,
                            101,
                            105,
                            118,
                            101,
                            32,
                            97,
                            110,
                            32,
                            115,
                            109,
                            115,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            97,
                            32,
                            99,
                            111,
                            100,
                            101,
                            32,
                            116,
                            111,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            20,
                            58,
                            1,
                            42,
                            26,
                            15,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            104,
                            111,
                            110,
                            101,
                        ]),
                    ],
                },
            },
        },
        verifyMyPhone: {
            name: "VerifyMyPhone",
            requestType: exports.VerifyMyPhoneRequest,
            requestStream: false,
            responseType: exports.VerifyMyPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            172,
                            1,
                            10,
                            10,
                            85,
                            115,
                            101,
                            114,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            18,
                            12,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            26,
                            143,
                            1,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            44,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            111,
                            100,
                            101,
                            32,
                            116,
                            104,
                            97,
                            116,
                            32,
                            104,
                            97,
                            115,
                            32,
                            98,
                            101,
                            101,
                            110,
                            32,
                            115,
                            101,
                            110,
                            116,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            46,
                            32,
                            83,
                            116,
                            97,
                            116,
                            101,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            105,
                            115,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            28,
                            58,
                            1,
                            42,
                            34,
                            23,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            104,
                            111,
                            110,
                            101,
                            47,
                            95,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        /** Resends an sms to the last given phone number, to verify it */
        resendMyPhoneVerification: {
            name: "ResendMyPhoneVerification",
            requestType: exports.ResendMyPhoneVerificationRequest,
            requestStream: false,
            responseType: exports.ResendMyPhoneVerificationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            185,
                            1,
                            10,
                            10,
                            85,
                            115,
                            101,
                            114,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            18,
                            25,
                            82,
                            101,
                            115,
                            101,
                            110,
                            100,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            26,
                            143,
                            1,
                            82,
                            101,
                            115,
                            101,
                            110,
                            100,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            110,
                            111,
                            116,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            115,
                            116,
                            32,
                            103,
                            105,
                            118,
                            101,
                            110,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            110,
                            111,
                            116,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            116,
                            111,
                            32,
                            98,
                            101,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            101,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            41,
                            58,
                            1,
                            42,
                            34,
                            36,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            104,
                            111,
                            110,
                            101,
                            47,
                            95,
                            114,
                            101,
                            115,
                            101,
                            110,
                            100,
                            95,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                        ]),
                    ],
                },
            },
        },
        removeMyPhone: {
            name: "RemoveMyPhone",
            requestType: exports.RemoveMyPhoneRequest,
            requestStream: false,
            responseType: exports.RemoveMyPhoneResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            94,
                            10,
                            10,
                            85,
                            115,
                            101,
                            114,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            18,
                            19,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            80,
                            104,
                            111,
                            110,
                            101,
                            32,
                            78,
                            117,
                            109,
                            98,
                            101,
                            114,
                            26,
                            59,
                            84,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            114,
                            101,
                            109,
                            111,
                            118,
                            101,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([17, 42, 15, 47, 117, 115, 101, 114, 115, 47, 109, 101, 47, 112, 104, 111, 110, 101]),
                    ],
                },
            },
        },
        removeMyAvatar: {
            name: "RemoveMyAvatar",
            requestType: exports.RemoveMyAvatarRequest,
            requestStream: false,
            responseType: exports.RemoveMyAvatarResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            144,
                            1,
                            10,
                            4,
                            85,
                            115,
                            101,
                            114,
                            18,
                            16,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            77,
                            121,
                            32,
                            65,
                            118,
                            97,
                            116,
                            97,
                            114,
                            26,
                            118,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            118,
                            97,
                            116,
                            97,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            102,
                            32,
                            110,
                            111,
                            32,
                            97,
                            118,
                            97,
                            116,
                            97,
                            114,
                            32,
                            105,
                            115,
                            32,
                            115,
                            101,
                            116,
                            32,
                            97,
                            32,
                            115,
                            104,
                            111,
                            114,
                            116,
                            99,
                            117,
                            116,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            110,
                            97,
                            109,
                            101,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            112,
                            114,
                            101,
                            115,
                            101,
                            110,
                            116,
                            101,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([18, 42, 16, 47, 117, 115, 101, 114, 115, 47, 109, 101, 47, 97, 118, 97, 116, 97, 114]),
                    ],
                },
            },
        },
        listMyLinkedIDPs: {
            name: "ListMyLinkedIDPs",
            requestType: exports.ListMyLinkedIDPsRequest,
            requestStream: false,
            responseType: exports.ListMyLinkedIDPsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            153,
                            1,
                            10,
                            17,
                            85,
                            115,
                            101,
                            114,
                            32,
                            83,
                            111,
                            99,
                            105,
                            97,
                            108,
                            32,
                            76,
                            111,
                            103,
                            105,
                            110,
                            18,
                            18,
                            76,
                            105,
                            115,
                            116,
                            32,
                            83,
                            111,
                            99,
                            105,
                            97,
                            108,
                            32,
                            76,
                            111,
                            103,
                            105,
                            110,
                            115,
                            26,
                            112,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            97,
                            108,
                            108,
                            32,
                            108,
                            105,
                            110,
                            107,
                            101,
                            100,
                            32,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            115,
                            47,
                            115,
                            111,
                            99,
                            105,
                            97,
                            108,
                            32,
                            108,
                            111,
                            103,
                            105,
                            110,
                            115,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            40,
                            101,
                            46,
                            32,
                            71,
                            111,
                            111,
                            103,
                            108,
                            101,
                            44,
                            32,
                            77,
                            105,
                            99,
                            114,
                            111,
                            115,
                            111,
                            102,
                            116,
                            44,
                            32,
                            65,
                            122,
                            117,
                            114,
                            101,
                            65,
                            68,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                            41,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            27,
                            58,
                            1,
                            42,
                            34,
                            22,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            105,
                            100,
                            112,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        removeMyLinkedIDP: {
            name: "RemoveMyLinkedIDP",
            requestType: exports.RemoveMyLinkedIDPRequest,
            requestStream: false,
            responseType: exports.RemoveMyLinkedIDPResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            176,
                            2,
                            10,
                            17,
                            85,
                            115,
                            101,
                            114,
                            32,
                            83,
                            111,
                            99,
                            105,
                            97,
                            108,
                            32,
                            76,
                            111,
                            103,
                            105,
                            110,
                            18,
                            19,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            83,
                            111,
                            99,
                            105,
                            97,
                            108,
                            32,
                            76,
                            111,
                            103,
                            105,
                            110,
                            26,
                            133,
                            2,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            111,
                            110,
                            101,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            105,
                            110,
                            107,
                            101,
                            100,
                            32,
                            115,
                            111,
                            99,
                            105,
                            97,
                            108,
                            32,
                            108,
                            111,
                            103,
                            105,
                            110,
                            115,
                            47,
                            105,
                            100,
                            101,
                            110,
                            116,
                            105,
                            116,
                            121,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            115,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            40,
                            101,
                            46,
                            103,
                            46,
                            32,
                            71,
                            111,
                            111,
                            103,
                            108,
                            101,
                            44,
                            32,
                            77,
                            105,
                            99,
                            114,
                            111,
                            115,
                            111,
                            102,
                            116,
                            44,
                            32,
                            65,
                            122,
                            117,
                            114,
                            101,
                            65,
                            68,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                            41,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            110,
                            111,
                            116,
                            32,
                            98,
                            101,
                            32,
                            97,
                            98,
                            108,
                            101,
                            32,
                            116,
                            111,
                            32,
                            108,
                            111,
                            103,
                            32,
                            105,
                            110,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            103,
                            105,
                            118,
                            101,
                            110,
                            32,
                            112,
                            114,
                            111,
                            118,
                            105,
                            100,
                            101,
                            114,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            119,
                            97,
                            114,
                            100,
                            46,
                            32,
                            77,
                            97,
                            107,
                            101,
                            32,
                            115,
                            117,
                            114,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            100,
                            111,
                            101,
                            115,
                            32,
                            104,
                            97,
                            118,
                            101,
                            32,
                            111,
                            116,
                            104,
                            101,
                            114,
                            32,
                            112,
                            111,
                            115,
                            115,
                            105,
                            98,
                            105,
                            108,
                            105,
                            116,
                            105,
                            101,
                            115,
                            32,
                            116,
                            111,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            42,
                            42,
                            40,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            105,
                            100,
                            112,
                            115,
                            47,
                            123,
                            105,
                            100,
                            112,
                            95,
                            105,
                            100,
                            125,
                            47,
                            123,
                            108,
                            105,
                            110,
                            107,
                            101,
                            100,
                            95,
                            117,
                            115,
                            101,
                            114,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        listMyAuthFactors: {
            name: "ListMyAuthFactors",
            requestType: exports.ListMyAuthFactorsRequest,
            requestStream: false,
            responseType: exports.ListMyAuthFactorsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            149,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            27,
                            76,
                            105,
                            115,
                            116,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            26,
                            90,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            112,
                            111,
                            115,
                            115,
                            105,
                            98,
                            108,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            44,
                            32,
                            109,
                            117,
                            108,
                            116,
                            105,
                            45,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            40,
                            77,
                            70,
                            65,
                            41,
                            44,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            45,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            40,
                            50,
                            70,
                            65,
                            41,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            32,
                            34,
                            30,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        addMyAuthFactorOTP: {
            name: "AddMyAuthFactorOTP",
            requestType: exports.AddMyAuthFactorOTPRequest,
            requestStream: false,
            responseType: exports.AddMyAuthFactorOTPResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            156,
                            2,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            27,
                            65,
                            100,
                            100,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            26,
                            224,
                            1,
                            65,
                            100,
                            100,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            79,
                            84,
                            80,
                            32,
                            105,
                            115,
                            32,
                            97,
                            110,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            32,
                            97,
                            112,
                            112,
                            32,
                            108,
                            105,
                            107,
                            101,
                            32,
                            71,
                            111,
                            111,
                            103,
                            108,
                            101,
                            47,
                            77,
                            105,
                            99,
                            114,
                            111,
                            115,
                            111,
                            102,
                            116,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            44,
                            32,
                            65,
                            117,
                            116,
                            104,
                            121,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                            32,
                            79,
                            110,
                            108,
                            121,
                            32,
                            111,
                            110,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            112,
                            101,
                            114,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            105,
                            115,
                            32,
                            97,
                            108,
                            108,
                            111,
                            119,
                            101,
                            100,
                            46,
                            32,
                            65,
                            102,
                            116,
                            101,
                            114,
                            32,
                            97,
                            100,
                            100,
                            105,
                            110,
                            103,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            79,
                            84,
                            80,
                            32,
                            105,
                            116,
                            32,
                            104,
                            97,
                            115,
                            32,
                            116,
                            111,
                            32,
                            98,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            31,
                            58,
                            1,
                            42,
                            34,
                            26,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            111,
                            116,
                            112,
                        ]),
                    ],
                },
            },
        },
        verifyMyAuthFactorOTP: {
            name: "VerifyMyAuthFactorOTP",
            requestType: exports.VerifyMyAuthFactorOTPRequest,
            requestStream: false,
            responseType: exports.VerifyMyAuthFactorOTPResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            253,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            30,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            26,
                            190,
                            1,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            115,
                            116,
                            32,
                            97,
                            100,
                            100,
                            101,
                            100,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            79,
                            84,
                            80,
                            32,
                            105,
                            115,
                            32,
                            97,
                            110,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            32,
                            97,
                            112,
                            112,
                            32,
                            108,
                            105,
                            107,
                            101,
                            32,
                            71,
                            111,
                            111,
                            103,
                            108,
                            101,
                            47,
                            77,
                            105,
                            99,
                            114,
                            111,
                            115,
                            111,
                            102,
                            116,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            44,
                            32,
                            65,
                            117,
                            116,
                            104,
                            121,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                            32,
                            79,
                            110,
                            108,
                            121,
                            32,
                            111,
                            110,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            112,
                            101,
                            114,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            105,
                            115,
                            32,
                            97,
                            108,
                            108,
                            111,
                            119,
                            101,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            39,
                            58,
                            1,
                            42,
                            34,
                            34,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            111,
                            116,
                            112,
                            47,
                            95,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        removeMyAuthFactorOTP: {
            name: "RemoveMyAuthFactorOTP",
            requestType: exports.RemoveMyAuthFactorOTPRequest,
            requestStream: false,
            responseType: exports.RemoveMyAuthFactorOTPResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            185,
                            2,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            30,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            26,
                            250,
                            1,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            101,
                            100,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            79,
                            84,
                            80,
                            32,
                            105,
                            115,
                            32,
                            97,
                            110,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            32,
                            97,
                            112,
                            112,
                            32,
                            108,
                            105,
                            107,
                            101,
                            32,
                            71,
                            111,
                            111,
                            103,
                            108,
                            101,
                            47,
                            77,
                            105,
                            99,
                            114,
                            111,
                            115,
                            111,
                            102,
                            116,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            44,
                            32,
                            65,
                            117,
                            116,
                            104,
                            121,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                            32,
                            65,
                            115,
                            32,
                            111,
                            110,
                            108,
                            121,
                            32,
                            111,
                            110,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            112,
                            101,
                            114,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            105,
                            115,
                            32,
                            97,
                            108,
                            108,
                            111,
                            119,
                            101,
                            100,
                            44,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            110,
                            111,
                            116,
                            32,
                            104,
                            97,
                            118,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            97,
                            115,
                            32,
                            97,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            45,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            119,
                            97,
                            114,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            28,
                            42,
                            26,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            111,
                            116,
                            112,
                        ]),
                    ],
                },
            },
        },
        addMyAuthFactorOTPSMS: {
            name: "AddMyAuthFactorOTPSMS",
            requestType: exports.AddMyAuthFactorOTPSMSRequest,
            requestStream: false,
            responseType: exports.AddMyAuthFactorOTPSMSResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            153,
                            2,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            31,
                            65,
                            100,
                            100,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            83,
                            77,
                            83,
                            26,
                            217,
                            1,
                            65,
                            100,
                            100,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            83,
                            77,
                            83,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            101,
                            110,
                            97,
                            98,
                            108,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            97,
                            32,
                            79,
                            84,
                            80,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            116,
                            101,
                            115,
                            116,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            112,
                            104,
                            111,
                            110,
                            101,
                            32,
                            110,
                            117,
                            109,
                            98,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            116,
                            111,
                            32,
                            98,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            116,
                            111,
                            32,
                            97,
                            100,
                            100,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            35,
                            58,
                            1,
                            42,
                            34,
                            30,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            111,
                            116,
                            112,
                            95,
                            115,
                            109,
                            115,
                        ]),
                    ],
                },
            },
        },
        removeMyAuthFactorOTPSMS: {
            name: "RemoveMyAuthFactorOTPSMS",
            requestType: exports.RemoveMyAuthFactorOTPSMSRequest,
            requestStream: false,
            responseType: exports.RemoveMyAuthFactorOTPSMSResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            252,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            34,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            83,
                            77,
                            83,
                            26,
                            185,
                            1,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            101,
                            100,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            83,
                            77,
                            83,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            65,
                            115,
                            32,
                            111,
                            110,
                            108,
                            121,
                            32,
                            111,
                            110,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
                            112,
                            101,
                            114,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            105,
                            115,
                            32,
                            97,
                            108,
                            108,
                            111,
                            119,
                            101,
                            100,
                            44,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            110,
                            111,
                            116,
                            32,
                            104,
                            97,
                            118,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            83,
                            77,
                            83,
                            32,
                            97,
                            115,
                            32,
                            97,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            45,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            119,
                            97,
                            114,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            32,
                            42,
                            30,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            111,
                            116,
                            112,
                            95,
                            115,
                            109,
                            115,
                        ]),
                    ],
                },
            },
        },
        addMyAuthFactorOTPEmail: {
            name: "AddMyAuthFactorOTPEmail",
            requestType: exports.AddMyAuthFactorOTPEmailRequest,
            requestStream: false,
            responseType: exports.AddMyAuthFactorOTPEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            145,
                            2,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            33,
                            65,
                            100,
                            100,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            26,
                            207,
                            1,
                            65,
                            100,
                            100,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            101,
                            110,
                            97,
                            98,
                            108,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            97,
                            32,
                            79,
                            84,
                            80,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            116,
                            101,
                            115,
                            116,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            104,
                            97,
                            115,
                            32,
                            116,
                            111,
                            32,
                            98,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            116,
                            111,
                            32,
                            97,
                            100,
                            100,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            37,
                            58,
                            1,
                            42,
                            34,
                            32,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            111,
                            116,
                            112,
                            95,
                            101,
                            109,
                            97,
                            105,
                            108,
                        ]),
                    ],
                },
            },
        },
        removeMyAuthFactorOTPEmail: {
            name: "RemoveMyAuthFactorOTPEmail",
            requestType: exports.RemoveMyAuthFactorOTPEmailRequest,
            requestStream: false,
            responseType: exports.RemoveMyAuthFactorOTPEmailResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            132,
                            2,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            36,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            26,
                            191,
                            1,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            101,
                            100,
                            32,
                            79,
                            110,
                            101,
                            45,
                            84,
                            105,
                            109,
                            101,
                            45,
                            80,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            32,
                            40,
                            79,
                            84,
                            80,
                            41,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            65,
                            115,
                            32,
                            111,
                            110,
                            108,
                            121,
                            32,
                            111,
                            110,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            112,
                            101,
                            114,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            105,
                            115,
                            32,
                            97,
                            108,
                            108,
                            111,
                            119,
                            101,
                            100,
                            44,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            110,
                            111,
                            116,
                            32,
                            104,
                            97,
                            118,
                            101,
                            32,
                            79,
                            84,
                            80,
                            32,
                            69,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            115,
                            32,
                            97,
                            32,
                            115,
                            101,
                            99,
                            111,
                            110,
                            100,
                            45,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            119,
                            97,
                            114,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            34,
                            42,
                            32,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            111,
                            116,
                            112,
                            95,
                            101,
                            109,
                            97,
                            105,
                            108,
                        ]),
                    ],
                },
            },
        },
        addMyAuthFactorU2F: {
            name: "AddMyAuthFactorU2F",
            requestType: exports.AddMyAuthFactorU2FRequest,
            requestStream: false,
            responseType: exports.AddMyAuthFactorU2FResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            163,
                            2,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            33,
                            65,
                            100,
                            100,
                            32,
                            85,
                            110,
                            105,
                            118,
                            101,
                            114,
                            115,
                            97,
                            108,
                            32,
                            83,
                            101,
                            99,
                            111,
                            110,
                            100,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            40,
                            85,
                            50,
                            70,
                            41,
                            26,
                            225,
                            1,
                            65,
                            100,
                            100,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            85,
                            110,
                            105,
                            118,
                            101,
                            114,
                            115,
                            97,
                            108,
                            45,
                            83,
                            101,
                            99,
                            111,
                            110,
                            100,
                            45,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            40,
                            85,
                            50,
                            70,
                            41,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            85,
                            50,
                            70,
                            32,
                            105,
                            115,
                            32,
                            97,
                            32,
                            100,
                            101,
                            118,
                            105,
                            99,
                            101,
                            45,
                            100,
                            101,
                            112,
                            101,
                            110,
                            100,
                            101,
                            110,
                            116,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            108,
                            105,
                            107,
                            101,
                            32,
                            70,
                            105,
                            110,
                            103,
                            101,
                            114,
                            83,
                            99,
                            97,
                            110,
                            44,
                            32,
                            70,
                            97,
                            99,
                            101,
                            73,
                            68,
                            44,
                            32,
                            87,
                            105,
                            110,
                            100,
                            111,
                            119,
                            72,
                            101,
                            108,
                            108,
                            111,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            116,
                            111,
                            32,
                            98,
                            101,
                            32,
                            118,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            100,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            32,
                            97,
                            100,
                            100,
                            105,
                            110,
                            103,
                            46,
                            32,
                            77,
                            117,
                            108,
                            116,
                            105,
                            112,
                            108,
                            101,
                            32,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            32,
                            99,
                            97,
                            110,
                            32,
                            98,
                            101,
                            32,
                            97,
                            100,
                            100,
                            101,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            31,
                            58,
                            1,
                            42,
                            34,
                            26,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            117,
                            50,
                            102,
                        ]),
                    ],
                },
            },
        },
        verifyMyAuthFactorU2F: {
            name: "VerifyMyAuthFactorU2F",
            requestType: exports.VerifyMyAuthFactorU2FRequest,
            requestStream: false,
            responseType: exports.VerifyMyAuthFactorU2FResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            147,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            33,
                            65,
                            100,
                            100,
                            32,
                            85,
                            110,
                            105,
                            118,
                            101,
                            114,
                            115,
                            97,
                            108,
                            32,
                            83,
                            101,
                            99,
                            111,
                            110,
                            100,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            40,
                            85,
                            50,
                            70,
                            41,
                            26,
                            82,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            115,
                            116,
                            32,
                            97,
                            100,
                            100,
                            101,
                            100,
                            32,
                            110,
                            101,
                            119,
                            32,
                            85,
                            110,
                            105,
                            118,
                            101,
                            114,
                            115,
                            97,
                            108,
                            45,
                            83,
                            101,
                            99,
                            111,
                            110,
                            100,
                            45,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            40,
                            85,
                            50,
                            70,
                            41,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            39,
                            58,
                            1,
                            42,
                            34,
                            34,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            117,
                            50,
                            102,
                            47,
                            95,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        removeMyAuthFactorU2F: {
            name: "RemoveMyAuthFactorU2F",
            requestType: exports.RemoveMyAuthFactorU2FRequest,
            requestStream: false,
            responseType: exports.RemoveMyAuthFactorU2FResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            162,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            36,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            85,
                            110,
                            105,
                            118,
                            101,
                            114,
                            115,
                            97,
                            108,
                            32,
                            83,
                            101,
                            99,
                            111,
                            110,
                            100,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            40,
                            85,
                            50,
                            70,
                            41,
                            26,
                            94,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            97,
                            32,
                            115,
                            112,
                            101,
                            99,
                            105,
                            102,
                            105,
                            99,
                            32,
                            85,
                            110,
                            105,
                            118,
                            101,
                            114,
                            115,
                            97,
                            108,
                            45,
                            83,
                            101,
                            99,
                            111,
                            110,
                            100,
                            45,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            32,
                            40,
                            85,
                            50,
                            70,
                            41,
                            32,
                            102,
                            114,
                            111,
                            109,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            98,
                            121,
                            32,
                            115,
                            101,
                            110,
                            100,
                            105,
                            110,
                            103,
                            32,
                            116,
                            104,
                            101,
                            32,
                            105,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            39,
                            42,
                            37,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            97,
                            117,
                            116,
                            104,
                            95,
                            102,
                            97,
                            99,
                            116,
                            111,
                            114,
                            115,
                            47,
                            117,
                            50,
                            102,
                            47,
                            123,
                            116,
                            111,
                            107,
                            101,
                            110,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        listMyPasswordless: {
            name: "ListMyPasswordless",
            requestType: exports.ListMyPasswordlessRequest,
            requestStream: false,
            responseType: exports.ListMyPasswordlessResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            162,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            12,
                            76,
                            105,
                            115,
                            116,
                            32,
                            80,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            26,
                            118,
                            71,
                            101,
                            116,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            101,
                            100,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            109,
                            101,
                            116,
                            104,
                            111,
                            100,
                            115,
                            46,
                            32,
                            76,
                            105,
                            107,
                            101,
                            32,
                            70,
                            105,
                            110,
                            103,
                            101,
                            114,
                            80,
                            114,
                            105,
                            110,
                            116,
                            44,
                            32,
                            70,
                            97,
                            99,
                            101,
                            73,
                            68,
                            44,
                            32,
                            87,
                            105,
                            110,
                            100,
                            111,
                            119,
                            115,
                            72,
                            101,
                            108,
                            108,
                            111,
                            44,
                            32,
                            72,
                            97,
                            114,
                            100,
                            119,
                            97,
                            114,
                            101,
                            84,
                            111,
                            107,
                            101,
                            110,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            32,
                            34,
                            30,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            108,
                            101,
                            115,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        addMyPasswordless: {
            name: "AddMyPasswordless",
            requestType: exports.AddMyPasswordlessRequest,
            requestStream: false,
            responseType: exports.AddMyPasswordlessResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            207,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            11,
                            65,
                            100,
                            100,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            26,
                            163,
                            1,
                            65,
                            100,
                            100,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            109,
                            101,
                            116,
                            104,
                            111,
                            100,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            76,
                            105,
                            107,
                            101,
                            32,
                            70,
                            105,
                            110,
                            103,
                            101,
                            114,
                            80,
                            114,
                            105,
                            110,
                            116,
                            44,
                            32,
                            70,
                            97,
                            99,
                            101,
                            73,
                            68,
                            44,
                            32,
                            87,
                            105,
                            110,
                            100,
                            111,
                            119,
                            115,
                            72,
                            101,
                            108,
                            108,
                            111,
                            44,
                            32,
                            72,
                            97,
                            114,
                            100,
                            119,
                            97,
                            114,
                            101,
                            84,
                            111,
                            107,
                            101,
                            110,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                            32,
                            77,
                            117,
                            108,
                            116,
                            105,
                            112,
                            108,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            115,
                            32,
                            99,
                            97,
                            110,
                            32,
                            98,
                            101,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            101,
                            100,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            27,
                            58,
                            1,
                            42,
                            34,
                            22,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            108,
                            101,
                            115,
                            115,
                        ]),
                    ],
                },
            },
        },
        addMyPasswordlessLink: {
            name: "AddMyPasswordlessLink",
            requestType: exports.AddMyPasswordlessLinkRequest,
            requestStream: false,
            responseType: exports.AddMyPasswordlessLinkResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            218,
                            2,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            16,
                            65,
                            100,
                            100,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            108,
                            105,
                            110,
                            107,
                            26,
                            169,
                            2,
                            65,
                            100,
                            100,
                            115,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            32,
                            108,
                            105,
                            110,
                            107,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            97,
                            110,
                            100,
                            32,
                            114,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            105,
                            116,
                            32,
                            105,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            115,
                            112,
                            111,
                            110,
                            115,
                            101,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            108,
                            105,
                            110,
                            107,
                            32,
                            101,
                            110,
                            97,
                            98,
                            108,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            101,
                            114,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            100,
                            101,
                            118,
                            105,
                            99,
                            101,
                            32,
                            105,
                            102,
                            32,
                            99,
                            117,
                            114,
                            114,
                            101,
                            110,
                            116,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            100,
                            101,
                            118,
                            105,
                            99,
                            101,
                            115,
                            32,
                            97,
                            114,
                            101,
                            32,
                            97,
                            108,
                            108,
                            32,
                            112,
                            108,
                            97,
                            116,
                            102,
                            111,
                            114,
                            109,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            115,
                            46,
                            32,
                            101,
                            46,
                            103,
                            46,
                            32,
                            85,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            97,
                            108,
                            114,
                            101,
                            97,
                            100,
                            121,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            101,
                            114,
                            101,
                            100,
                            32,
                            87,
                            105,
                            110,
                            100,
                            111,
                            119,
                            115,
                            32,
                            72,
                            101,
                            108,
                            108,
                            111,
                            32,
                            97,
                            110,
                            100,
                            32,
                            119,
                            97,
                            110,
                            116,
                            115,
                            32,
                            116,
                            111,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            101,
                            114,
                            32,
                            70,
                            97,
                            99,
                            101,
                            73,
                            68,
                            32,
                            111,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            105,
                            80,
                            104,
                            111,
                            110,
                            101,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            33,
                            58,
                            1,
                            42,
                            34,
                            28,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            108,
                            101,
                            115,
                            115,
                            47,
                            95,
                            108,
                            105,
                            110,
                            107,
                        ]),
                    ],
                },
            },
        },
        sendMyPasswordlessLink: {
            name: "SendMyPasswordlessLink",
            requestType: exports.SendMyPasswordlessLinkRequest,
            requestStream: false,
            responseType: exports.SendMyPasswordlessLinkResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            233,
                            2,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            17,
                            83,
                            101,
                            110,
                            100,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            108,
                            105,
                            110,
                            107,
                            26,
                            183,
                            2,
                            65,
                            100,
                            100,
                            115,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            32,
                            108,
                            105,
                            110,
                            107,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            97,
                            110,
                            100,
                            32,
                            115,
                            101,
                            110,
                            100,
                            115,
                            32,
                            105,
                            116,
                            32,
                            116,
                            111,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            101,
                            114,
                            101,
                            100,
                            32,
                            101,
                            109,
                            97,
                            105,
                            108,
                            32,
                            97,
                            100,
                            100,
                            114,
                            101,
                            115,
                            115,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            108,
                            105,
                            110,
                            107,
                            32,
                            101,
                            110,
                            97,
                            98,
                            108,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            116,
                            111,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            101,
                            114,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            100,
                            101,
                            118,
                            105,
                            99,
                            101,
                            32,
                            105,
                            102,
                            32,
                            99,
                            117,
                            114,
                            114,
                            101,
                            110,
                            116,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            100,
                            101,
                            118,
                            105,
                            99,
                            101,
                            115,
                            32,
                            97,
                            114,
                            101,
                            32,
                            97,
                            108,
                            108,
                            32,
                            112,
                            108,
                            97,
                            116,
                            102,
                            111,
                            114,
                            109,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            111,
                            114,
                            115,
                            46,
                            32,
                            101,
                            46,
                            103,
                            46,
                            32,
                            85,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            97,
                            108,
                            114,
                            101,
                            97,
                            100,
                            121,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            101,
                            114,
                            101,
                            100,
                            32,
                            87,
                            105,
                            110,
                            100,
                            111,
                            119,
                            115,
                            32,
                            72,
                            101,
                            108,
                            108,
                            111,
                            32,
                            97,
                            110,
                            100,
                            32,
                            119,
                            97,
                            110,
                            116,
                            115,
                            32,
                            116,
                            111,
                            32,
                            114,
                            101,
                            103,
                            105,
                            115,
                            116,
                            101,
                            114,
                            32,
                            70,
                            97,
                            99,
                            101,
                            73,
                            68,
                            32,
                            111,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            105,
                            80,
                            104,
                            111,
                            110,
                            101,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            38,
                            58,
                            1,
                            42,
                            34,
                            33,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            108,
                            101,
                            115,
                            115,
                            47,
                            95,
                            115,
                            101,
                            110,
                            100,
                            95,
                            108,
                            105,
                            110,
                            107,
                        ]),
                    ],
                },
            },
        },
        verifyMyPasswordless: {
            name: "VerifyMyPasswordless",
            requestType: exports.VerifyMyPasswordlessRequest,
            requestStream: false,
            responseType: exports.VerifyMyPasswordlessResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            118,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            14,
                            86,
                            101,
                            114,
                            105,
                            102,
                            121,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            26,
                            72,
                            86,
                            101,
                            114,
                            105,
                            102,
                            105,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            115,
                            116,
                            32,
                            97,
                            100,
                            100,
                            101,
                            100,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            35,
                            58,
                            1,
                            42,
                            34,
                            30,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            108,
                            101,
                            115,
                            115,
                            47,
                            95,
                            118,
                            101,
                            114,
                            105,
                            102,
                            121,
                        ]),
                    ],
                },
            },
        },
        removeMyPasswordless: {
            name: "RemoveMyPasswordless",
            requestType: exports.RemoveMyPasswordlessRequest,
            requestStream: false,
            responseType: exports.RemoveMyPasswordlessResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            231,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            70,
                            97,
                            99,
                            116,
                            111,
                            114,
                            18,
                            14,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            26,
                            184,
                            1,
                            82,
                            101,
                            109,
                            111,
                            118,
                            101,
                            32,
                            97,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            102,
                            114,
                            111,
                            109,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            110,
                            111,
                            116,
                            32,
                            98,
                            101,
                            32,
                            97,
                            98,
                            108,
                            101,
                            32,
                            116,
                            111,
                            32,
                            108,
                            111,
                            103,
                            32,
                            105,
                            110,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            116,
                            104,
                            97,
                            116,
                            32,
                            99,
                            111,
                            110,
                            102,
                            105,
                            103,
                            117,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            97,
                            102,
                            116,
                            101,
                            114,
                            119,
                            97,
                            114,
                            100,
                            46,
                            32,
                            77,
                            97,
                            107,
                            101,
                            32,
                            115,
                            117,
                            114,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            111,
                            116,
                            104,
                            101,
                            114,
                            32,
                            112,
                            111,
                            115,
                            115,
                            105,
                            98,
                            105,
                            108,
                            105,
                            116,
                            105,
                            101,
                            115,
                            32,
                            116,
                            111,
                            32,
                            108,
                            111,
                            103,
                            32,
                            105,
                            110,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            35,
                            42,
                            33,
                            47,
                            117,
                            115,
                            101,
                            114,
                            115,
                            47,
                            109,
                            101,
                            47,
                            112,
                            97,
                            115,
                            115,
                            119,
                            111,
                            114,
                            100,
                            108,
                            101,
                            115,
                            115,
                            47,
                            123,
                            116,
                            111,
                            107,
                            101,
                            110,
                            95,
                            105,
                            100,
                            125,
                        ]),
                    ],
                },
            },
        },
        listMyUserGrants: {
            name: "ListMyUserGrants",
            requestType: exports.ListMyUserGrantsRequest,
            requestStream: false,
            responseType: exports.ListMyUserGrantsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            203,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            111,
                            114,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            71,
                            114,
                            97,
                            110,
                            116,
                            115,
                            18,
                            29,
                            76,
                            105,
                            115,
                            116,
                            32,
                            77,
                            121,
                            32,
                            65,
                            117,
                            116,
                            104,
                            111,
                            114,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            71,
                            114,
                            97,
                            110,
                            116,
                            115,
                            26,
                            141,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            111,
                            114,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            117,
                            115,
                            101,
                            114,
                            32,
                            103,
                            114,
                            97,
                            110,
                            116,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            46,
                            32,
                            85,
                            115,
                            101,
                            114,
                            32,
                            103,
                            114,
                            97,
                            110,
                            116,
                            115,
                            32,
                            99,
                            111,
                            110,
                            115,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            97,
                            110,
                            32,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            44,
                            32,
                            97,
                            32,
                            112,
                            114,
                            111,
                            106,
                            101,
                            99,
                            116,
                            32,
                            97,
                            110,
                            100,
                            32,
                            49,
                            45,
                            110,
                            32,
                            114,
                            111,
                            108,
                            101,
                            115,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            27,
                            58,
                            1,
                            42,
                            34,
                            22,
                            47,
                            117,
                            115,
                            101,
                            114,
                            103,
                            114,
                            97,
                            110,
                            116,
                            115,
                            47,
                            109,
                            101,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        listMyProjectOrgs: {
            name: "ListMyProjectOrgs",
            requestType: exports.ListMyProjectOrgsRequest,
            requestStream: false,
            responseType: exports.ListMyProjectOrgsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            178,
                            2,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            111,
                            114,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            71,
                            114,
                            97,
                            110,
                            116,
                            115,
                            18,
                            21,
                            76,
                            105,
                            115,
                            116,
                            32,
                            77,
                            121,
                            32,
                            79,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            26,
                            252,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            32,
                            119,
                            104,
                            101,
                            114,
                            101,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            97,
                            110,
                            121,
                            32,
                            97,
                            117,
                            116,
                            104,
                            111,
                            114,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            117,
                            115,
                            101,
                            114,
                            32,
                            103,
                            114,
                            97,
                            110,
                            116,
                            115,
                            46,
                            32,
                            84,
                            104,
                            101,
                            32,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            32,
                            105,
                            115,
                            32,
                            109,
                            97,
                            100,
                            101,
                            32,
                            105,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            99,
                            111,
                            110,
                            116,
                            101,
                            120,
                            116,
                            32,
                            111,
                            102,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            101,
                            100,
                            32,
                            112,
                            114,
                            111,
                            106,
                            101,
                            99,
                            116,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            32,
                            99,
                            97,
                            110,
                            32,
                            98,
                            101,
                            32,
                            117,
                            115,
                            101,
                            100,
                            32,
                            105,
                            110,
                            32,
                            109,
                            117,
                            108,
                            116,
                            105,
                            45,
                            116,
                            101,
                            110,
                            97,
                            110,
                            99,
                            121,
                            32,
                            97,
                            112,
                            112,
                            108,
                            105,
                            99,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            32,
                            116,
                            111,
                            32,
                            115,
                            104,
                            111,
                            119,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            97,
                            32,
                            116,
                            101,
                            110,
                            97,
                            110,
                            116,
                            32,
                            115,
                            119,
                            105,
                            116,
                            99,
                            104,
                            101,
                            114,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            32,
                            58,
                            1,
                            42,
                            34,
                            27,
                            47,
                            103,
                            108,
                            111,
                            98,
                            97,
                            108,
                            47,
                            112,
                            114,
                            111,
                            106,
                            101,
                            99,
                            116,
                            111,
                            114,
                            103,
                            115,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        listMyZitadelPermissions: {
            name: "ListMyZitadelPermissions",
            requestType: exports.ListMyZitadelPermissionsRequest,
            requestStream: false,
            responseType: exports.ListMyZitadelPermissionsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            213,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            111,
                            114,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            71,
                            114,
                            97,
                            110,
                            116,
                            115,
                            18,
                            27,
                            76,
                            105,
                            115,
                            116,
                            32,
                            77,
                            121,
                            32,
                            90,
                            73,
                            84,
                            65,
                            68,
                            69,
                            76,
                            32,
                            80,
                            101,
                            114,
                            109,
                            105,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            26,
                            153,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            112,
                            101,
                            114,
                            109,
                            105,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            105,
                            110,
                            32,
                            90,
                            73,
                            84,
                            65,
                            68,
                            69,
                            76,
                            32,
                            98,
                            97,
                            115,
                            101,
                            100,
                            32,
                            111,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            109,
                            97,
                            110,
                            97,
                            103,
                            101,
                            114,
                            32,
                            114,
                            111,
                            108,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            46,
                            32,
                            40,
                            101,
                            46,
                            103,
                            58,
                            32,
                            79,
                            82,
                            71,
                            95,
                            79,
                            87,
                            78,
                            69,
                            82,
                            32,
                            61,
                            32,
                            111,
                            114,
                            103,
                            46,
                            114,
                            101,
                            97,
                            100,
                            44,
                            32,
                            111,
                            114,
                            103,
                            46,
                            119,
                            114,
                            105,
                            116,
                            101,
                            44,
                            32,
                            46,
                            46,
                            46,
                            41,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            33,
                            34,
                            31,
                            47,
                            112,
                            101,
                            114,
                            109,
                            105,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            47,
                            122,
                            105,
                            116,
                            97,
                            100,
                            101,
                            108,
                            47,
                            109,
                            101,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        listMyProjectPermissions: {
            name: "ListMyProjectPermissions",
            requestType: exports.ListMyProjectPermissionsRequest,
            requestStream: false,
            responseType: exports.ListMyProjectPermissionsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            156,
                            1,
                            10,
                            26,
                            85,
                            115,
                            101,
                            114,
                            32,
                            65,
                            117,
                            116,
                            104,
                            111,
                            114,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            71,
                            114,
                            97,
                            110,
                            116,
                            115,
                            18,
                            21,
                            76,
                            105,
                            115,
                            116,
                            32,
                            77,
                            121,
                            32,
                            80,
                            114,
                            111,
                            106,
                            101,
                            99,
                            116,
                            32,
                            82,
                            111,
                            108,
                            101,
                            115,
                            26,
                            103,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            97,
                            32,
                            108,
                            105,
                            115,
                            116,
                            32,
                            111,
                            102,
                            32,
                            114,
                            111,
                            108,
                            101,
                            115,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            97,
                            110,
                            100,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            101,
                            113,
                            117,
                            101,
                            115,
                            116,
                            105,
                            110,
                            103,
                            32,
                            112,
                            114,
                            111,
                            106,
                            101,
                            99,
                            116,
                            32,
                            40,
                            98,
                            97,
                            115,
                            101,
                            100,
                            32,
                            111,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            116,
                            111,
                            107,
                            101,
                            110,
                            41,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            25,
                            34,
                            23,
                            47,
                            112,
                            101,
                            114,
                            109,
                            105,
                            115,
                            115,
                            105,
                            111,
                            110,
                            115,
                            47,
                            109,
                            101,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        listMyMemberships: {
            name: "ListMyMemberships",
            requestType: exports.ListMyMembershipsRequest,
            requestStream: false,
            responseType: exports.ListMyMembershipsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            122,
                            10,
                            16,
                            85,
                            115,
                            101,
                            114,
                            32,
                            77,
                            101,
                            109,
                            98,
                            101,
                            114,
                            115,
                            104,
                            105,
                            112,
                            115,
                            18,
                            29,
                            76,
                            105,
                            115,
                            116,
                            32,
                            77,
                            121,
                            32,
                            90,
                            73,
                            84,
                            65,
                            68,
                            69,
                            76,
                            32,
                            77,
                            97,
                            110,
                            97,
                            103,
                            101,
                            114,
                            32,
                            82,
                            111,
                            108,
                            101,
                            115,
                            26,
                            71,
                            83,
                            104,
                            111,
                            119,
                            32,
                            97,
                            108,
                            108,
                            32,
                            116,
                            104,
                            101,
                            32,
                            109,
                            97,
                            110,
                            97,
                            103,
                            101,
                            109,
                            101,
                            110,
                            116,
                            32,
                            114,
                            111,
                            108,
                            101,
                            115,
                            32,
                            109,
                            121,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            105,
                            110,
                            32,
                            90,
                            73,
                            84,
                            65,
                            68,
                            69,
                            76,
                            32,
                            40,
                            90,
                            73,
                            84,
                            65,
                            68,
                            69,
                            76,
                            32,
                            77,
                            97,
                            110,
                            97,
                            103,
                            101,
                            114,
                            41,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([
                            28,
                            58,
                            1,
                            42,
                            34,
                            23,
                            47,
                            109,
                            101,
                            109,
                            98,
                            101,
                            114,
                            115,
                            104,
                            105,
                            112,
                            115,
                            47,
                            109,
                            101,
                            47,
                            95,
                            115,
                            101,
                            97,
                            114,
                            99,
                            104,
                        ]),
                    ],
                },
            },
        },
        getMyLabelPolicy: {
            name: "GetMyLabelPolicy",
            requestType: exports.GetMyLabelPolicyRequest,
            requestStream: false,
            responseType: exports.GetMyLabelPolicyResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            222,
                            1,
                            10,
                            8,
                            80,
                            111,
                            108,
                            105,
                            99,
                            105,
                            101,
                            115,
                            18,
                            16,
                            71,
                            101,
                            116,
                            32,
                            76,
                            97,
                            98,
                            101,
                            108,
                            32,
                            80,
                            111,
                            108,
                            105,
                            99,
                            121,
                            26,
                            191,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            97,
                            98,
                            101,
                            108,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            32,
                            116,
                            104,
                            97,
                            116,
                            32,
                            115,
                            104,
                            111,
                            117,
                            108,
                            100,
                            32,
                            98,
                            101,
                            32,
                            117,
                            115,
                            101,
                            100,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            116,
                            32,
                            105,
                            115,
                            32,
                            115,
                            101,
                            116,
                            32,
                            101,
                            105,
                            116,
                            104,
                            101,
                            114,
                            32,
                            111,
                            110,
                            32,
                            97,
                            110,
                            32,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            32,
                            111,
                            114,
                            32,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            108,
                            101,
                            118,
                            101,
                            108,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            112,
                            111,
                            108,
                            105,
                            99,
                            121,
                            32,
                            100,
                            101,
                            102,
                            105,
                            110,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            98,
                            114,
                            97,
                            110,
                            100,
                            105,
                            110,
                            103,
                            44,
                            32,
                            99,
                            111,
                            108,
                            111,
                            114,
                            115,
                            44,
                            32,
                            102,
                            111,
                            110,
                            116,
                            115,
                            44,
                            32,
                            105,
                            109,
                            97,
                            103,
                            101,
                            115,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [Buffer.from([17, 18, 15, 47, 112, 111, 108, 105, 99, 105, 101, 115, 47, 108, 97, 98, 101, 108])],
                },
            },
        },
        getMyPrivacyPolicy: {
            name: "GetMyPrivacyPolicy",
            requestType: exports.GetMyPrivacyPolicyRequest,
            requestStream: false,
            responseType: exports.GetMyPrivacyPolicyResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            220,
                            1,
                            10,
                            8,
                            80,
                            111,
                            108,
                            105,
                            99,
                            105,
                            101,
                            115,
                            18,
                            18,
                            71,
                            101,
                            116,
                            32,
                            80,
                            114,
                            105,
                            118,
                            97,
                            99,
                            121,
                            32,
                            80,
                            111,
                            108,
                            105,
                            99,
                            121,
                            26,
                            187,
                            1,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            112,
                            114,
                            105,
                            118,
                            97,
                            99,
                            121,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            32,
                            116,
                            104,
                            97,
                            116,
                            32,
                            115,
                            104,
                            111,
                            117,
                            108,
                            100,
                            32,
                            98,
                            101,
                            32,
                            117,
                            115,
                            101,
                            100,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            116,
                            32,
                            105,
                            115,
                            32,
                            115,
                            101,
                            116,
                            32,
                            101,
                            105,
                            116,
                            104,
                            101,
                            114,
                            32,
                            111,
                            110,
                            32,
                            97,
                            110,
                            32,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            32,
                            111,
                            114,
                            32,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            108,
                            101,
                            118,
                            101,
                            108,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            112,
                            111,
                            108,
                            105,
                            99,
                            121,
                            32,
                            100,
                            101,
                            102,
                            105,
                            110,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            84,
                            79,
                            83,
                            32,
                            97,
                            110,
                            100,
                            32,
                            116,
                            101,
                            114,
                            109,
                            115,
                            32,
                            111,
                            102,
                            32,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            32,
                            108,
                            105,
                            110,
                            107,
                            115,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([19, 18, 17, 47, 112, 111, 108, 105, 99, 105, 101, 115, 47, 112, 114, 105, 118, 97, 99, 121]),
                    ],
                },
            },
        },
        getMyLoginPolicy: {
            name: "GetMyLoginPolicy",
            requestType: exports.GetMyLoginPolicyRequest,
            requestStream: false,
            responseType: exports.GetMyLoginPolicyResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            163,
                            2,
                            10,
                            8,
                            80,
                            111,
                            108,
                            105,
                            99,
                            105,
                            101,
                            115,
                            18,
                            16,
                            71,
                            101,
                            116,
                            32,
                            76,
                            111,
                            103,
                            105,
                            110,
                            32,
                            80,
                            111,
                            108,
                            105,
                            99,
                            121,
                            26,
                            132,
                            2,
                            82,
                            101,
                            116,
                            117,
                            114,
                            110,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            111,
                            103,
                            105,
                            110,
                            32,
                            115,
                            101,
                            116,
                            116,
                            105,
                            110,
                            103,
                            115,
                            32,
                            116,
                            104,
                            97,
                            116,
                            32,
                            115,
                            104,
                            111,
                            117,
                            108,
                            100,
                            32,
                            98,
                            101,
                            32,
                            117,
                            115,
                            101,
                            100,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            100,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            116,
                            32,
                            105,
                            115,
                            32,
                            115,
                            101,
                            116,
                            32,
                            101,
                            105,
                            116,
                            104,
                            101,
                            114,
                            32,
                            111,
                            110,
                            32,
                            97,
                            110,
                            32,
                            105,
                            110,
                            115,
                            116,
                            97,
                            110,
                            99,
                            101,
                            32,
                            111,
                            114,
                            32,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            108,
                            101,
                            118,
                            101,
                            108,
                            46,
                            32,
                            84,
                            104,
                            105,
                            115,
                            32,
                            112,
                            111,
                            108,
                            105,
                            99,
                            121,
                            32,
                            100,
                            101,
                            102,
                            105,
                            110,
                            101,
                            115,
                            32,
                            119,
                            104,
                            97,
                            116,
                            32,
                            112,
                            111,
                            115,
                            115,
                            105,
                            98,
                            105,
                            108,
                            105,
                            116,
                            105,
                            101,
                            115,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            32,
                            104,
                            97,
                            115,
                            32,
                            116,
                            111,
                            32,
                            97,
                            117,
                            116,
                            104,
                            101,
                            110,
                            116,
                            105,
                            99,
                            97,
                            116,
                            101,
                            32,
                            97,
                            110,
                            100,
                            32,
                            116,
                            111,
                            32,
                            117,
                            115,
                            101,
                            32,
                            105,
                            110,
                            32,
                            116,
                            104,
                            101,
                            32,
                            108,
                            111,
                            103,
                            105,
                            110,
                            44,
                            32,
                            101,
                            46,
                            103,
                            32,
                            115,
                            111,
                            99,
                            105,
                            97,
                            108,
                            32,
                            108,
                            111,
                            103,
                            105,
                            110,
                            115,
                            44,
                            32,
                            77,
                            70,
                            65,
                            44,
                            32,
                            112,
                            97,
                            115,
                            115,
                            107,
                            101,
                            121,
                            44,
                            32,
                            101,
                            116,
                            99,
                            46,
                        ]),
                    ],
                    400002: [Buffer.from([15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
                    578365826: [
                        Buffer.from([17, 18, 15, 47, 112, 111, 108, 105, 99, 105, 101, 115, 47, 108, 111, 103, 105, 110]),
                    ],
                },
            },
        },
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
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds.toNumber() || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
