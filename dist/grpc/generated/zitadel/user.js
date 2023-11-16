"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFactorU2F = exports.AuthFactorOTPEmail = exports.AuthFactorOTPSMS = exports.AuthFactorOTP = exports.AuthFactor = exports.TypeQuery = exports.StateQuery = exports.LoginNameQuery = exports.EmailQuery = exports.DisplayNameQuery = exports.NickNameQuery = exports.LastNameQuery = exports.FirstNameQuery = exports.UserNameQuery = exports.InUserIDQuery = exports.NotQuery = exports.AndQuery = exports.OrQuery = exports.SearchQuery = exports.Phone = exports.Email = exports.Profile = exports.Machine = exports.Human = exports.User = exports.userGrantStateToJSON = exports.userGrantStateFromJSON = exports.UserGrantState = exports.sessionStateToJSON = exports.sessionStateFromJSON = exports.SessionState = exports.authFactorStateToJSON = exports.authFactorStateFromJSON = exports.AuthFactorState = exports.userFieldNameToJSON = exports.userFieldNameFromJSON = exports.UserFieldName = exports.typeToJSON = exports.typeFromJSON = exports.Type = exports.accessTokenTypeToJSON = exports.accessTokenTypeFromJSON = exports.AccessTokenType = exports.genderToJSON = exports.genderFromJSON = exports.Gender = exports.userStateToJSON = exports.userStateFromJSON = exports.UserState = exports.protobufPackage = void 0;
exports.UserGrantUserTypeQuery = exports.UserGrantDisplayNameQuery = exports.UserGrantProjectNameQuery = exports.UserGrantOrgDomainQuery = exports.UserGrantOrgNameQuery = exports.UserGrantEmailQuery = exports.UserGrantLastNameQuery = exports.UserGrantFirstNameQuery = exports.UserGrantUserNameQuery = exports.UserGrantProjectGrantIDQuery = exports.UserGrantRoleKeyQuery = exports.UserGrantWithGrantedQuery = exports.UserGrantUserIDQuery = exports.UserGrantProjectIDQuery = exports.UserGrantQuery = exports.UserGrant = exports.PersonalAccessToken = exports.RefreshToken = exports.Session = exports.MembershipIAMQuery = exports.MembershipProjectGrantQuery = exports.MembershipProjectQuery = exports.MembershipOrgQuery = exports.MembershipQuery = exports.Membership = exports.WebAuthNToken = exports.WebAuthNVerification = exports.WebAuthNKey = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../google/protobuf/timestamp");
const object_1 = require("./object");
exports.protobufPackage = "zitadel.user.v1";
var UserState;
(function (UserState) {
    UserState[UserState["USER_STATE_UNSPECIFIED"] = 0] = "USER_STATE_UNSPECIFIED";
    UserState[UserState["USER_STATE_ACTIVE"] = 1] = "USER_STATE_ACTIVE";
    UserState[UserState["USER_STATE_INACTIVE"] = 2] = "USER_STATE_INACTIVE";
    UserState[UserState["USER_STATE_DELETED"] = 3] = "USER_STATE_DELETED";
    UserState[UserState["USER_STATE_LOCKED"] = 4] = "USER_STATE_LOCKED";
    UserState[UserState["USER_STATE_SUSPEND"] = 5] = "USER_STATE_SUSPEND";
    UserState[UserState["USER_STATE_INITIAL"] = 6] = "USER_STATE_INITIAL";
    UserState[UserState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserState || (exports.UserState = UserState = {}));
function userStateFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_STATE_UNSPECIFIED":
            return UserState.USER_STATE_UNSPECIFIED;
        case 1:
        case "USER_STATE_ACTIVE":
            return UserState.USER_STATE_ACTIVE;
        case 2:
        case "USER_STATE_INACTIVE":
            return UserState.USER_STATE_INACTIVE;
        case 3:
        case "USER_STATE_DELETED":
            return UserState.USER_STATE_DELETED;
        case 4:
        case "USER_STATE_LOCKED":
            return UserState.USER_STATE_LOCKED;
        case 5:
        case "USER_STATE_SUSPEND":
            return UserState.USER_STATE_SUSPEND;
        case 6:
        case "USER_STATE_INITIAL":
            return UserState.USER_STATE_INITIAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserState.UNRECOGNIZED;
    }
}
exports.userStateFromJSON = userStateFromJSON;
function userStateToJSON(object) {
    switch (object) {
        case UserState.USER_STATE_UNSPECIFIED:
            return "USER_STATE_UNSPECIFIED";
        case UserState.USER_STATE_ACTIVE:
            return "USER_STATE_ACTIVE";
        case UserState.USER_STATE_INACTIVE:
            return "USER_STATE_INACTIVE";
        case UserState.USER_STATE_DELETED:
            return "USER_STATE_DELETED";
        case UserState.USER_STATE_LOCKED:
            return "USER_STATE_LOCKED";
        case UserState.USER_STATE_SUSPEND:
            return "USER_STATE_SUSPEND";
        case UserState.USER_STATE_INITIAL:
            return "USER_STATE_INITIAL";
        case UserState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userStateToJSON = userStateToJSON;
var Gender;
(function (Gender) {
    Gender[Gender["GENDER_UNSPECIFIED"] = 0] = "GENDER_UNSPECIFIED";
    Gender[Gender["GENDER_FEMALE"] = 1] = "GENDER_FEMALE";
    Gender[Gender["GENDER_MALE"] = 2] = "GENDER_MALE";
    Gender[Gender["GENDER_DIVERSE"] = 3] = "GENDER_DIVERSE";
    Gender[Gender["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Gender || (exports.Gender = Gender = {}));
function genderFromJSON(object) {
    switch (object) {
        case 0:
        case "GENDER_UNSPECIFIED":
            return Gender.GENDER_UNSPECIFIED;
        case 1:
        case "GENDER_FEMALE":
            return Gender.GENDER_FEMALE;
        case 2:
        case "GENDER_MALE":
            return Gender.GENDER_MALE;
        case 3:
        case "GENDER_DIVERSE":
            return Gender.GENDER_DIVERSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Gender.UNRECOGNIZED;
    }
}
exports.genderFromJSON = genderFromJSON;
function genderToJSON(object) {
    switch (object) {
        case Gender.GENDER_UNSPECIFIED:
            return "GENDER_UNSPECIFIED";
        case Gender.GENDER_FEMALE:
            return "GENDER_FEMALE";
        case Gender.GENDER_MALE:
            return "GENDER_MALE";
        case Gender.GENDER_DIVERSE:
            return "GENDER_DIVERSE";
        case Gender.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.genderToJSON = genderToJSON;
var AccessTokenType;
(function (AccessTokenType) {
    AccessTokenType[AccessTokenType["ACCESS_TOKEN_TYPE_BEARER"] = 0] = "ACCESS_TOKEN_TYPE_BEARER";
    AccessTokenType[AccessTokenType["ACCESS_TOKEN_TYPE_JWT"] = 1] = "ACCESS_TOKEN_TYPE_JWT";
    AccessTokenType[AccessTokenType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessTokenType || (exports.AccessTokenType = AccessTokenType = {}));
function accessTokenTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCESS_TOKEN_TYPE_BEARER":
            return AccessTokenType.ACCESS_TOKEN_TYPE_BEARER;
        case 1:
        case "ACCESS_TOKEN_TYPE_JWT":
            return AccessTokenType.ACCESS_TOKEN_TYPE_JWT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessTokenType.UNRECOGNIZED;
    }
}
exports.accessTokenTypeFromJSON = accessTokenTypeFromJSON;
function accessTokenTypeToJSON(object) {
    switch (object) {
        case AccessTokenType.ACCESS_TOKEN_TYPE_BEARER:
            return "ACCESS_TOKEN_TYPE_BEARER";
        case AccessTokenType.ACCESS_TOKEN_TYPE_JWT:
            return "ACCESS_TOKEN_TYPE_JWT";
        case AccessTokenType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.accessTokenTypeToJSON = accessTokenTypeToJSON;
var Type;
(function (Type) {
    Type[Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    Type[Type["TYPE_HUMAN"] = 1] = "TYPE_HUMAN";
    Type[Type["TYPE_MACHINE"] = 2] = "TYPE_MACHINE";
    Type[Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Type || (exports.Type = Type = {}));
function typeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Type.TYPE_UNSPECIFIED;
        case 1:
        case "TYPE_HUMAN":
            return Type.TYPE_HUMAN;
        case 2:
        case "TYPE_MACHINE":
            return Type.TYPE_MACHINE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Type.UNRECOGNIZED;
    }
}
exports.typeFromJSON = typeFromJSON;
function typeToJSON(object) {
    switch (object) {
        case Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Type.TYPE_HUMAN:
            return "TYPE_HUMAN";
        case Type.TYPE_MACHINE:
            return "TYPE_MACHINE";
        case Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.typeToJSON = typeToJSON;
var UserFieldName;
(function (UserFieldName) {
    UserFieldName[UserFieldName["USER_FIELD_NAME_UNSPECIFIED"] = 0] = "USER_FIELD_NAME_UNSPECIFIED";
    UserFieldName[UserFieldName["USER_FIELD_NAME_USER_NAME"] = 1] = "USER_FIELD_NAME_USER_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_FIRST_NAME"] = 2] = "USER_FIELD_NAME_FIRST_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_LAST_NAME"] = 3] = "USER_FIELD_NAME_LAST_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_NICK_NAME"] = 4] = "USER_FIELD_NAME_NICK_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_DISPLAY_NAME"] = 5] = "USER_FIELD_NAME_DISPLAY_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_EMAIL"] = 6] = "USER_FIELD_NAME_EMAIL";
    UserFieldName[UserFieldName["USER_FIELD_NAME_STATE"] = 7] = "USER_FIELD_NAME_STATE";
    UserFieldName[UserFieldName["USER_FIELD_NAME_TYPE"] = 8] = "USER_FIELD_NAME_TYPE";
    UserFieldName[UserFieldName["USER_FIELD_NAME_CREATION_DATE"] = 9] = "USER_FIELD_NAME_CREATION_DATE";
    UserFieldName[UserFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserFieldName || (exports.UserFieldName = UserFieldName = {}));
function userFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_FIELD_NAME_UNSPECIFIED":
            return UserFieldName.USER_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "USER_FIELD_NAME_USER_NAME":
            return UserFieldName.USER_FIELD_NAME_USER_NAME;
        case 2:
        case "USER_FIELD_NAME_FIRST_NAME":
            return UserFieldName.USER_FIELD_NAME_FIRST_NAME;
        case 3:
        case "USER_FIELD_NAME_LAST_NAME":
            return UserFieldName.USER_FIELD_NAME_LAST_NAME;
        case 4:
        case "USER_FIELD_NAME_NICK_NAME":
            return UserFieldName.USER_FIELD_NAME_NICK_NAME;
        case 5:
        case "USER_FIELD_NAME_DISPLAY_NAME":
            return UserFieldName.USER_FIELD_NAME_DISPLAY_NAME;
        case 6:
        case "USER_FIELD_NAME_EMAIL":
            return UserFieldName.USER_FIELD_NAME_EMAIL;
        case 7:
        case "USER_FIELD_NAME_STATE":
            return UserFieldName.USER_FIELD_NAME_STATE;
        case 8:
        case "USER_FIELD_NAME_TYPE":
            return UserFieldName.USER_FIELD_NAME_TYPE;
        case 9:
        case "USER_FIELD_NAME_CREATION_DATE":
            return UserFieldName.USER_FIELD_NAME_CREATION_DATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserFieldName.UNRECOGNIZED;
    }
}
exports.userFieldNameFromJSON = userFieldNameFromJSON;
function userFieldNameToJSON(object) {
    switch (object) {
        case UserFieldName.USER_FIELD_NAME_UNSPECIFIED:
            return "USER_FIELD_NAME_UNSPECIFIED";
        case UserFieldName.USER_FIELD_NAME_USER_NAME:
            return "USER_FIELD_NAME_USER_NAME";
        case UserFieldName.USER_FIELD_NAME_FIRST_NAME:
            return "USER_FIELD_NAME_FIRST_NAME";
        case UserFieldName.USER_FIELD_NAME_LAST_NAME:
            return "USER_FIELD_NAME_LAST_NAME";
        case UserFieldName.USER_FIELD_NAME_NICK_NAME:
            return "USER_FIELD_NAME_NICK_NAME";
        case UserFieldName.USER_FIELD_NAME_DISPLAY_NAME:
            return "USER_FIELD_NAME_DISPLAY_NAME";
        case UserFieldName.USER_FIELD_NAME_EMAIL:
            return "USER_FIELD_NAME_EMAIL";
        case UserFieldName.USER_FIELD_NAME_STATE:
            return "USER_FIELD_NAME_STATE";
        case UserFieldName.USER_FIELD_NAME_TYPE:
            return "USER_FIELD_NAME_TYPE";
        case UserFieldName.USER_FIELD_NAME_CREATION_DATE:
            return "USER_FIELD_NAME_CREATION_DATE";
        case UserFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userFieldNameToJSON = userFieldNameToJSON;
var AuthFactorState;
(function (AuthFactorState) {
    AuthFactorState[AuthFactorState["AUTH_FACTOR_STATE_UNSPECIFIED"] = 0] = "AUTH_FACTOR_STATE_UNSPECIFIED";
    AuthFactorState[AuthFactorState["AUTH_FACTOR_STATE_NOT_READY"] = 1] = "AUTH_FACTOR_STATE_NOT_READY";
    AuthFactorState[AuthFactorState["AUTH_FACTOR_STATE_READY"] = 2] = "AUTH_FACTOR_STATE_READY";
    AuthFactorState[AuthFactorState["AUTH_FACTOR_STATE_REMOVED"] = 3] = "AUTH_FACTOR_STATE_REMOVED";
    AuthFactorState[AuthFactorState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthFactorState || (exports.AuthFactorState = AuthFactorState = {}));
function authFactorStateFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTH_FACTOR_STATE_UNSPECIFIED":
            return AuthFactorState.AUTH_FACTOR_STATE_UNSPECIFIED;
        case 1:
        case "AUTH_FACTOR_STATE_NOT_READY":
            return AuthFactorState.AUTH_FACTOR_STATE_NOT_READY;
        case 2:
        case "AUTH_FACTOR_STATE_READY":
            return AuthFactorState.AUTH_FACTOR_STATE_READY;
        case 3:
        case "AUTH_FACTOR_STATE_REMOVED":
            return AuthFactorState.AUTH_FACTOR_STATE_REMOVED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthFactorState.UNRECOGNIZED;
    }
}
exports.authFactorStateFromJSON = authFactorStateFromJSON;
function authFactorStateToJSON(object) {
    switch (object) {
        case AuthFactorState.AUTH_FACTOR_STATE_UNSPECIFIED:
            return "AUTH_FACTOR_STATE_UNSPECIFIED";
        case AuthFactorState.AUTH_FACTOR_STATE_NOT_READY:
            return "AUTH_FACTOR_STATE_NOT_READY";
        case AuthFactorState.AUTH_FACTOR_STATE_READY:
            return "AUTH_FACTOR_STATE_READY";
        case AuthFactorState.AUTH_FACTOR_STATE_REMOVED:
            return "AUTH_FACTOR_STATE_REMOVED";
        case AuthFactorState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.authFactorStateToJSON = authFactorStateToJSON;
var SessionState;
(function (SessionState) {
    SessionState[SessionState["SESSION_STATE_UNSPECIFIED"] = 0] = "SESSION_STATE_UNSPECIFIED";
    SessionState[SessionState["SESSION_STATE_ACTIVE"] = 1] = "SESSION_STATE_ACTIVE";
    SessionState[SessionState["SESSION_STATE_TERMINATED"] = 2] = "SESSION_STATE_TERMINATED";
    SessionState[SessionState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SessionState || (exports.SessionState = SessionState = {}));
function sessionStateFromJSON(object) {
    switch (object) {
        case 0:
        case "SESSION_STATE_UNSPECIFIED":
            return SessionState.SESSION_STATE_UNSPECIFIED;
        case 1:
        case "SESSION_STATE_ACTIVE":
            return SessionState.SESSION_STATE_ACTIVE;
        case 2:
        case "SESSION_STATE_TERMINATED":
            return SessionState.SESSION_STATE_TERMINATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SessionState.UNRECOGNIZED;
    }
}
exports.sessionStateFromJSON = sessionStateFromJSON;
function sessionStateToJSON(object) {
    switch (object) {
        case SessionState.SESSION_STATE_UNSPECIFIED:
            return "SESSION_STATE_UNSPECIFIED";
        case SessionState.SESSION_STATE_ACTIVE:
            return "SESSION_STATE_ACTIVE";
        case SessionState.SESSION_STATE_TERMINATED:
            return "SESSION_STATE_TERMINATED";
        case SessionState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sessionStateToJSON = sessionStateToJSON;
var UserGrantState;
(function (UserGrantState) {
    UserGrantState[UserGrantState["USER_GRANT_STATE_UNSPECIFIED"] = 0] = "USER_GRANT_STATE_UNSPECIFIED";
    UserGrantState[UserGrantState["USER_GRANT_STATE_ACTIVE"] = 1] = "USER_GRANT_STATE_ACTIVE";
    UserGrantState[UserGrantState["USER_GRANT_STATE_INACTIVE"] = 2] = "USER_GRANT_STATE_INACTIVE";
    UserGrantState[UserGrantState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserGrantState || (exports.UserGrantState = UserGrantState = {}));
function userGrantStateFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_GRANT_STATE_UNSPECIFIED":
            return UserGrantState.USER_GRANT_STATE_UNSPECIFIED;
        case 1:
        case "USER_GRANT_STATE_ACTIVE":
            return UserGrantState.USER_GRANT_STATE_ACTIVE;
        case 2:
        case "USER_GRANT_STATE_INACTIVE":
            return UserGrantState.USER_GRANT_STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserGrantState.UNRECOGNIZED;
    }
}
exports.userGrantStateFromJSON = userGrantStateFromJSON;
function userGrantStateToJSON(object) {
    switch (object) {
        case UserGrantState.USER_GRANT_STATE_UNSPECIFIED:
            return "USER_GRANT_STATE_UNSPECIFIED";
        case UserGrantState.USER_GRANT_STATE_ACTIVE:
            return "USER_GRANT_STATE_ACTIVE";
        case UserGrantState.USER_GRANT_STATE_INACTIVE:
            return "USER_GRANT_STATE_INACTIVE";
        case UserGrantState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userGrantStateToJSON = userGrantStateToJSON;
function createBaseUser() {
    return {
        id: "",
        details: undefined,
        state: 0,
        userName: "",
        loginNames: [],
        preferredLoginName: "",
        human: undefined,
        machine: undefined,
    };
}
exports.User = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.userName !== "") {
            writer.uint32(34).string(message.userName);
        }
        for (const v of message.loginNames) {
            writer.uint32(42).string(v);
        }
        if (message.preferredLoginName !== "") {
            writer.uint32(50).string(message.preferredLoginName);
        }
        if (message.human !== undefined) {
            exports.Human.encode(message.human, writer.uint32(58).fork()).ldelim();
        }
        if (message.machine !== undefined) {
            exports.Machine.encode(message.machine, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.loginNames.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.preferredLoginName = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.human = exports.Human.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.machine = exports.Machine.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? userStateFromJSON(object.state) : 0,
            userName: isSet(object.userName) ? String(object.userName) : "",
            loginNames: Array.isArray(object?.loginNames) ? object.loginNames.map((e) => String(e)) : [],
            preferredLoginName: isSet(object.preferredLoginName) ? String(object.preferredLoginName) : "",
            human: isSet(object.human) ? exports.Human.fromJSON(object.human) : undefined,
            machine: isSet(object.machine) ? exports.Machine.fromJSON(object.machine) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.state !== undefined && (obj.state = userStateToJSON(message.state));
        message.userName !== undefined && (obj.userName = message.userName);
        if (message.loginNames) {
            obj.loginNames = message.loginNames.map((e) => e);
        }
        else {
            obj.loginNames = [];
        }
        message.preferredLoginName !== undefined && (obj.preferredLoginName = message.preferredLoginName);
        message.human !== undefined && (obj.human = message.human ? exports.Human.toJSON(message.human) : undefined);
        message.machine !== undefined && (obj.machine = message.machine ? exports.Machine.toJSON(message.machine) : undefined);
        return obj;
    },
    create(base) {
        return exports.User.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUser();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = object.state ?? 0;
        message.userName = object.userName ?? "";
        message.loginNames = object.loginNames?.map((e) => e) || [];
        message.preferredLoginName = object.preferredLoginName ?? "";
        message.human = (object.human !== undefined && object.human !== null) ? exports.Human.fromPartial(object.human) : undefined;
        message.machine = (object.machine !== undefined && object.machine !== null)
            ? exports.Machine.fromPartial(object.machine)
            : undefined;
        return message;
    },
};
function createBaseHuman() {
    return { profile: undefined, email: undefined, phone: undefined };
}
exports.Human = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.profile !== undefined) {
            exports.Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
        }
        if (message.email !== undefined) {
            exports.Email.encode(message.email, writer.uint32(18).fork()).ldelim();
        }
        if (message.phone !== undefined) {
            exports.Phone.encode(message.phone, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHuman();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.profile = exports.Profile.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = exports.Email.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.phone = exports.Phone.decode(reader, reader.uint32());
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
            profile: isSet(object.profile) ? exports.Profile.fromJSON(object.profile) : undefined,
            email: isSet(object.email) ? exports.Email.fromJSON(object.email) : undefined,
            phone: isSet(object.phone) ? exports.Phone.fromJSON(object.phone) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.profile !== undefined && (obj.profile = message.profile ? exports.Profile.toJSON(message.profile) : undefined);
        message.email !== undefined && (obj.email = message.email ? exports.Email.toJSON(message.email) : undefined);
        message.phone !== undefined && (obj.phone = message.phone ? exports.Phone.toJSON(message.phone) : undefined);
        return obj;
    },
    create(base) {
        return exports.Human.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHuman();
        message.profile = (object.profile !== undefined && object.profile !== null)
            ? exports.Profile.fromPartial(object.profile)
            : undefined;
        message.email = (object.email !== undefined && object.email !== null) ? exports.Email.fromPartial(object.email) : undefined;
        message.phone = (object.phone !== undefined && object.phone !== null) ? exports.Phone.fromPartial(object.phone) : undefined;
        return message;
    },
};
function createBaseMachine() {
    return { name: "", description: "", hasSecret: false, accessTokenType: 0 };
}
exports.Machine = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.hasSecret === true) {
            writer.uint32(24).bool(message.hasSecret);
        }
        if (message.accessTokenType !== 0) {
            writer.uint32(32).int32(message.accessTokenType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMachine();
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
                    message.hasSecret = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.accessTokenType = reader.int32();
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
            hasSecret: isSet(object.hasSecret) ? Boolean(object.hasSecret) : false,
            accessTokenType: isSet(object.accessTokenType) ? accessTokenTypeFromJSON(object.accessTokenType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.hasSecret !== undefined && (obj.hasSecret = message.hasSecret);
        message.accessTokenType !== undefined && (obj.accessTokenType = accessTokenTypeToJSON(message.accessTokenType));
        return obj;
    },
    create(base) {
        return exports.Machine.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMachine();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.hasSecret = object.hasSecret ?? false;
        message.accessTokenType = object.accessTokenType ?? 0;
        return message;
    },
};
function createBaseProfile() {
    return {
        firstName: "",
        lastName: "",
        nickName: "",
        displayName: "",
        preferredLanguage: "",
        gender: 0,
        avatarUrl: "",
    };
}
exports.Profile = {
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
        if (message.avatarUrl !== "") {
            writer.uint32(58).string(message.avatarUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProfile();
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
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.avatarUrl = reader.string();
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
            gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
            avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.nickName !== undefined && (obj.nickName = message.nickName);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.preferredLanguage !== undefined && (obj.preferredLanguage = message.preferredLanguage);
        message.gender !== undefined && (obj.gender = genderToJSON(message.gender));
        message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
        return obj;
    },
    create(base) {
        return exports.Profile.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProfile();
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.nickName = object.nickName ?? "";
        message.displayName = object.displayName ?? "";
        message.preferredLanguage = object.preferredLanguage ?? "";
        message.gender = object.gender ?? 0;
        message.avatarUrl = object.avatarUrl ?? "";
        return message;
    },
};
function createBaseEmail() {
    return { email: "", isEmailVerified: false };
}
exports.Email = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.isEmailVerified === true) {
            writer.uint32(16).bool(message.isEmailVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isEmailVerified = reader.bool();
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
            email: isSet(object.email) ? String(object.email) : "",
            isEmailVerified: isSet(object.isEmailVerified) ? Boolean(object.isEmailVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.isEmailVerified !== undefined && (obj.isEmailVerified = message.isEmailVerified);
        return obj;
    },
    create(base) {
        return exports.Email.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEmail();
        message.email = object.email ?? "";
        message.isEmailVerified = object.isEmailVerified ?? false;
        return message;
    },
};
function createBasePhone() {
    return { phone: "", isPhoneVerified: false };
}
exports.Phone = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.phone !== "") {
            writer.uint32(10).string(message.phone);
        }
        if (message.isPhoneVerified === true) {
            writer.uint32(16).bool(message.isPhoneVerified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePhone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isPhoneVerified = reader.bool();
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
            phone: isSet(object.phone) ? String(object.phone) : "",
            isPhoneVerified: isSet(object.isPhoneVerified) ? Boolean(object.isPhoneVerified) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.phone !== undefined && (obj.phone = message.phone);
        message.isPhoneVerified !== undefined && (obj.isPhoneVerified = message.isPhoneVerified);
        return obj;
    },
    create(base) {
        return exports.Phone.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePhone();
        message.phone = object.phone ?? "";
        message.isPhoneVerified = object.isPhoneVerified ?? false;
        return message;
    },
};
function createBaseSearchQuery() {
    return {
        userNameQuery: undefined,
        firstNameQuery: undefined,
        lastNameQuery: undefined,
        nickNameQuery: undefined,
        displayNameQuery: undefined,
        emailQuery: undefined,
        stateQuery: undefined,
        typeQuery: undefined,
        loginNameQuery: undefined,
        inUserIdsQuery: undefined,
        orQuery: undefined,
        andQuery: undefined,
        notQuery: undefined,
    };
}
exports.SearchQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userNameQuery !== undefined) {
            exports.UserNameQuery.encode(message.userNameQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.firstNameQuery !== undefined) {
            exports.FirstNameQuery.encode(message.firstNameQuery, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastNameQuery !== undefined) {
            exports.LastNameQuery.encode(message.lastNameQuery, writer.uint32(26).fork()).ldelim();
        }
        if (message.nickNameQuery !== undefined) {
            exports.NickNameQuery.encode(message.nickNameQuery, writer.uint32(34).fork()).ldelim();
        }
        if (message.displayNameQuery !== undefined) {
            exports.DisplayNameQuery.encode(message.displayNameQuery, writer.uint32(42).fork()).ldelim();
        }
        if (message.emailQuery !== undefined) {
            exports.EmailQuery.encode(message.emailQuery, writer.uint32(50).fork()).ldelim();
        }
        if (message.stateQuery !== undefined) {
            exports.StateQuery.encode(message.stateQuery, writer.uint32(58).fork()).ldelim();
        }
        if (message.typeQuery !== undefined) {
            exports.TypeQuery.encode(message.typeQuery, writer.uint32(66).fork()).ldelim();
        }
        if (message.loginNameQuery !== undefined) {
            exports.LoginNameQuery.encode(message.loginNameQuery, writer.uint32(74).fork()).ldelim();
        }
        if (message.inUserIdsQuery !== undefined) {
            exports.InUserIDQuery.encode(message.inUserIdsQuery, writer.uint32(82).fork()).ldelim();
        }
        if (message.orQuery !== undefined) {
            exports.OrQuery.encode(message.orQuery, writer.uint32(90).fork()).ldelim();
        }
        if (message.andQuery !== undefined) {
            exports.AndQuery.encode(message.andQuery, writer.uint32(98).fork()).ldelim();
        }
        if (message.notQuery !== undefined) {
            exports.NotQuery.encode(message.notQuery, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userNameQuery = exports.UserNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.firstNameQuery = exports.FirstNameQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.lastNameQuery = exports.LastNameQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nickNameQuery = exports.NickNameQuery.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.displayNameQuery = exports.DisplayNameQuery.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.emailQuery = exports.EmailQuery.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.stateQuery = exports.StateQuery.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.typeQuery = exports.TypeQuery.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.loginNameQuery = exports.LoginNameQuery.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.inUserIdsQuery = exports.InUserIDQuery.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.orQuery = exports.OrQuery.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.andQuery = exports.AndQuery.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.notQuery = exports.NotQuery.decode(reader, reader.uint32());
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
            userNameQuery: isSet(object.userNameQuery) ? exports.UserNameQuery.fromJSON(object.userNameQuery) : undefined,
            firstNameQuery: isSet(object.firstNameQuery) ? exports.FirstNameQuery.fromJSON(object.firstNameQuery) : undefined,
            lastNameQuery: isSet(object.lastNameQuery) ? exports.LastNameQuery.fromJSON(object.lastNameQuery) : undefined,
            nickNameQuery: isSet(object.nickNameQuery) ? exports.NickNameQuery.fromJSON(object.nickNameQuery) : undefined,
            displayNameQuery: isSet(object.displayNameQuery) ? exports.DisplayNameQuery.fromJSON(object.displayNameQuery) : undefined,
            emailQuery: isSet(object.emailQuery) ? exports.EmailQuery.fromJSON(object.emailQuery) : undefined,
            stateQuery: isSet(object.stateQuery) ? exports.StateQuery.fromJSON(object.stateQuery) : undefined,
            typeQuery: isSet(object.typeQuery) ? exports.TypeQuery.fromJSON(object.typeQuery) : undefined,
            loginNameQuery: isSet(object.loginNameQuery) ? exports.LoginNameQuery.fromJSON(object.loginNameQuery) : undefined,
            inUserIdsQuery: isSet(object.inUserIdsQuery) ? exports.InUserIDQuery.fromJSON(object.inUserIdsQuery) : undefined,
            orQuery: isSet(object.orQuery) ? exports.OrQuery.fromJSON(object.orQuery) : undefined,
            andQuery: isSet(object.andQuery) ? exports.AndQuery.fromJSON(object.andQuery) : undefined,
            notQuery: isSet(object.notQuery) ? exports.NotQuery.fromJSON(object.notQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userNameQuery !== undefined &&
            (obj.userNameQuery = message.userNameQuery ? exports.UserNameQuery.toJSON(message.userNameQuery) : undefined);
        message.firstNameQuery !== undefined &&
            (obj.firstNameQuery = message.firstNameQuery ? exports.FirstNameQuery.toJSON(message.firstNameQuery) : undefined);
        message.lastNameQuery !== undefined &&
            (obj.lastNameQuery = message.lastNameQuery ? exports.LastNameQuery.toJSON(message.lastNameQuery) : undefined);
        message.nickNameQuery !== undefined &&
            (obj.nickNameQuery = message.nickNameQuery ? exports.NickNameQuery.toJSON(message.nickNameQuery) : undefined);
        message.displayNameQuery !== undefined &&
            (obj.displayNameQuery = message.displayNameQuery ? exports.DisplayNameQuery.toJSON(message.displayNameQuery) : undefined);
        message.emailQuery !== undefined &&
            (obj.emailQuery = message.emailQuery ? exports.EmailQuery.toJSON(message.emailQuery) : undefined);
        message.stateQuery !== undefined &&
            (obj.stateQuery = message.stateQuery ? exports.StateQuery.toJSON(message.stateQuery) : undefined);
        message.typeQuery !== undefined &&
            (obj.typeQuery = message.typeQuery ? exports.TypeQuery.toJSON(message.typeQuery) : undefined);
        message.loginNameQuery !== undefined &&
            (obj.loginNameQuery = message.loginNameQuery ? exports.LoginNameQuery.toJSON(message.loginNameQuery) : undefined);
        message.inUserIdsQuery !== undefined &&
            (obj.inUserIdsQuery = message.inUserIdsQuery ? exports.InUserIDQuery.toJSON(message.inUserIdsQuery) : undefined);
        message.orQuery !== undefined && (obj.orQuery = message.orQuery ? exports.OrQuery.toJSON(message.orQuery) : undefined);
        message.andQuery !== undefined && (obj.andQuery = message.andQuery ? exports.AndQuery.toJSON(message.andQuery) : undefined);
        message.notQuery !== undefined && (obj.notQuery = message.notQuery ? exports.NotQuery.toJSON(message.notQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.SearchQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSearchQuery();
        message.userNameQuery = (object.userNameQuery !== undefined && object.userNameQuery !== null)
            ? exports.UserNameQuery.fromPartial(object.userNameQuery)
            : undefined;
        message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
            ? exports.FirstNameQuery.fromPartial(object.firstNameQuery)
            : undefined;
        message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
            ? exports.LastNameQuery.fromPartial(object.lastNameQuery)
            : undefined;
        message.nickNameQuery = (object.nickNameQuery !== undefined && object.nickNameQuery !== null)
            ? exports.NickNameQuery.fromPartial(object.nickNameQuery)
            : undefined;
        message.displayNameQuery = (object.displayNameQuery !== undefined && object.displayNameQuery !== null)
            ? exports.DisplayNameQuery.fromPartial(object.displayNameQuery)
            : undefined;
        message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
            ? exports.EmailQuery.fromPartial(object.emailQuery)
            : undefined;
        message.stateQuery = (object.stateQuery !== undefined && object.stateQuery !== null)
            ? exports.StateQuery.fromPartial(object.stateQuery)
            : undefined;
        message.typeQuery = (object.typeQuery !== undefined && object.typeQuery !== null)
            ? exports.TypeQuery.fromPartial(object.typeQuery)
            : undefined;
        message.loginNameQuery = (object.loginNameQuery !== undefined && object.loginNameQuery !== null)
            ? exports.LoginNameQuery.fromPartial(object.loginNameQuery)
            : undefined;
        message.inUserIdsQuery = (object.inUserIdsQuery !== undefined && object.inUserIdsQuery !== null)
            ? exports.InUserIDQuery.fromPartial(object.inUserIdsQuery)
            : undefined;
        message.orQuery = (object.orQuery !== undefined && object.orQuery !== null)
            ? exports.OrQuery.fromPartial(object.orQuery)
            : undefined;
        message.andQuery = (object.andQuery !== undefined && object.andQuery !== null)
            ? exports.AndQuery.fromPartial(object.andQuery)
            : undefined;
        message.notQuery = (object.notQuery !== undefined && object.notQuery !== null)
            ? exports.NotQuery.fromPartial(object.notQuery)
            : undefined;
        return message;
    },
};
function createBaseOrQuery() {
    return { queries: [] };
}
exports.OrQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.queries) {
            exports.SearchQuery.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queries.push(exports.SearchQuery.decode(reader, reader.uint32()));
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
        return { queries: Array.isArray(object?.queries) ? object.queries.map((e) => exports.SearchQuery.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map((e) => e ? exports.SearchQuery.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    create(base) {
        return exports.OrQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrQuery();
        message.queries = object.queries?.map((e) => exports.SearchQuery.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAndQuery() {
    return { queries: [] };
}
exports.AndQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.queries) {
            exports.SearchQuery.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queries.push(exports.SearchQuery.decode(reader, reader.uint32()));
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
        return { queries: Array.isArray(object?.queries) ? object.queries.map((e) => exports.SearchQuery.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map((e) => e ? exports.SearchQuery.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    create(base) {
        return exports.AndQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAndQuery();
        message.queries = object.queries?.map((e) => exports.SearchQuery.fromPartial(e)) || [];
        return message;
    },
};
function createBaseNotQuery() {
    return { query: undefined };
}
exports.NotQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== undefined) {
            exports.SearchQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = exports.SearchQuery.decode(reader, reader.uint32());
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
        return { query: isSet(object.query) ? exports.SearchQuery.fromJSON(object.query) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query ? exports.SearchQuery.toJSON(message.query) : undefined);
        return obj;
    },
    create(base) {
        return exports.NotQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotQuery();
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.SearchQuery.fromPartial(object.query)
            : undefined;
        return message;
    },
};
function createBaseInUserIDQuery() {
    return { userIds: [] };
}
exports.InUserIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.userIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInUserIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIds.push(reader.string());
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
        return { userIds: Array.isArray(object?.userIds) ? object.userIds.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.userIds) {
            obj.userIds = message.userIds.map((e) => e);
        }
        else {
            obj.userIds = [];
        }
        return obj;
    },
    create(base) {
        return exports.InUserIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInUserIDQuery();
        message.userIds = object.userIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseUserNameQuery() {
    return { userName: "", method: 0 };
}
exports.UserNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            userName: isSet(object.userName) ? String(object.userName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userName !== undefined && (obj.userName = message.userName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserNameQuery();
        message.userName = object.userName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseFirstNameQuery() {
    return { firstName: "", method: 0 };
}
exports.FirstNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFirstNameQuery();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.FirstNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFirstNameQuery();
        message.firstName = object.firstName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseLastNameQuery() {
    return { lastName: "", method: 0 };
}
exports.LastNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lastName !== "") {
            writer.uint32(10).string(message.lastName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.LastNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLastNameQuery();
        message.lastName = object.lastName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseNickNameQuery() {
    return { nickName: "", method: 0 };
}
exports.NickNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nickName !== "") {
            writer.uint32(10).string(message.nickName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNickNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nickName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            nickName: isSet(object.nickName) ? String(object.nickName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nickName !== undefined && (obj.nickName = message.nickName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.NickNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNickNameQuery();
        message.nickName = object.nickName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseDisplayNameQuery() {
    return { displayName: "", method: 0 };
}
exports.DisplayNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.displayName !== "") {
            writer.uint32(10).string(message.displayName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDisplayNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.DisplayNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDisplayNameQuery();
        message.displayName = object.displayName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseEmailQuery() {
    return { emailAddress: "", method: 0 };
}
exports.EmailQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.emailAddress !== "") {
            writer.uint32(10).string(message.emailAddress);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.emailAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            emailAddress: isSet(object.emailAddress) ? String(object.emailAddress) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.emailAddress !== undefined && (obj.emailAddress = message.emailAddress);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.EmailQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEmailQuery();
        message.emailAddress = object.emailAddress ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseLoginNameQuery() {
    return { loginName: "", method: 0 };
}
exports.LoginNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loginName !== "") {
            writer.uint32(10).string(message.loginName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.loginName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            loginName: isSet(object.loginName) ? String(object.loginName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.loginName !== undefined && (obj.loginName = message.loginName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.LoginNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginNameQuery();
        message.loginName = object.loginName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseStateQuery() {
    return { state: 0 };
}
exports.StateQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStateQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
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
        return { state: isSet(object.state) ? userStateFromJSON(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = userStateToJSON(message.state));
        return obj;
    },
    create(base) {
        return exports.StateQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStateQuery();
        message.state = object.state ?? 0;
        return message;
    },
};
function createBaseTypeQuery() {
    return { type: 0 };
}
exports.TypeQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTypeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
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
        return { type: isSet(object.type) ? typeFromJSON(object.type) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = typeToJSON(message.type));
        return obj;
    },
    create(base) {
        return exports.TypeQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTypeQuery();
        message.type = object.type ?? 0;
        return message;
    },
};
function createBaseAuthFactor() {
    return { state: 0, otp: undefined, u2f: undefined, otpSms: undefined, otpEmail: undefined };
}
exports.AuthFactor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.otp !== undefined) {
            exports.AuthFactorOTP.encode(message.otp, writer.uint32(18).fork()).ldelim();
        }
        if (message.u2f !== undefined) {
            exports.AuthFactorU2F.encode(message.u2f, writer.uint32(26).fork()).ldelim();
        }
        if (message.otpSms !== undefined) {
            exports.AuthFactorOTPSMS.encode(message.otpSms, writer.uint32(34).fork()).ldelim();
        }
        if (message.otpEmail !== undefined) {
            exports.AuthFactorOTPEmail.encode(message.otpEmail, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.otp = exports.AuthFactorOTP.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.u2f = exports.AuthFactorU2F.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.otpSms = exports.AuthFactorOTPSMS.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.otpEmail = exports.AuthFactorOTPEmail.decode(reader, reader.uint32());
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
            state: isSet(object.state) ? authFactorStateFromJSON(object.state) : 0,
            otp: isSet(object.otp) ? exports.AuthFactorOTP.fromJSON(object.otp) : undefined,
            u2f: isSet(object.u2f) ? exports.AuthFactorU2F.fromJSON(object.u2f) : undefined,
            otpSms: isSet(object.otpSms) ? exports.AuthFactorOTPSMS.fromJSON(object.otpSms) : undefined,
            otpEmail: isSet(object.otpEmail) ? exports.AuthFactorOTPEmail.fromJSON(object.otpEmail) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = authFactorStateToJSON(message.state));
        message.otp !== undefined && (obj.otp = message.otp ? exports.AuthFactorOTP.toJSON(message.otp) : undefined);
        message.u2f !== undefined && (obj.u2f = message.u2f ? exports.AuthFactorU2F.toJSON(message.u2f) : undefined);
        message.otpSms !== undefined && (obj.otpSms = message.otpSms ? exports.AuthFactorOTPSMS.toJSON(message.otpSms) : undefined);
        message.otpEmail !== undefined &&
            (obj.otpEmail = message.otpEmail ? exports.AuthFactorOTPEmail.toJSON(message.otpEmail) : undefined);
        return obj;
    },
    create(base) {
        return exports.AuthFactor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthFactor();
        message.state = object.state ?? 0;
        message.otp = (object.otp !== undefined && object.otp !== null) ? exports.AuthFactorOTP.fromPartial(object.otp) : undefined;
        message.u2f = (object.u2f !== undefined && object.u2f !== null) ? exports.AuthFactorU2F.fromPartial(object.u2f) : undefined;
        message.otpSms = (object.otpSms !== undefined && object.otpSms !== null)
            ? exports.AuthFactorOTPSMS.fromPartial(object.otpSms)
            : undefined;
        message.otpEmail = (object.otpEmail !== undefined && object.otpEmail !== null)
            ? exports.AuthFactorOTPEmail.fromPartial(object.otpEmail)
            : undefined;
        return message;
    },
};
function createBaseAuthFactorOTP() {
    return {};
}
exports.AuthFactorOTP = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactorOTP();
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
        return exports.AuthFactorOTP.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAuthFactorOTP();
        return message;
    },
};
function createBaseAuthFactorOTPSMS() {
    return {};
}
exports.AuthFactorOTPSMS = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactorOTPSMS();
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
        return exports.AuthFactorOTPSMS.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAuthFactorOTPSMS();
        return message;
    },
};
function createBaseAuthFactorOTPEmail() {
    return {};
}
exports.AuthFactorOTPEmail = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactorOTPEmail();
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
        return exports.AuthFactorOTPEmail.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseAuthFactorOTPEmail();
        return message;
    },
};
function createBaseAuthFactorU2F() {
    return { id: "", name: "" };
}
exports.AuthFactorU2F = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthFactorU2F();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
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
        return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return exports.AuthFactorU2F.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthFactorU2F();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseWebAuthNKey() {
    return { publicKey: Buffer.alloc(0) };
}
exports.WebAuthNKey = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.publicKey.length !== 0) {
            writer.uint32(10).bytes(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebAuthNKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.publicKey = reader.bytes();
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
        return { publicKey: isSet(object.publicKey) ? Buffer.from(bytesFromBase64(object.publicKey)) : Buffer.alloc(0) };
    },
    toJSON(message) {
        const obj = {};
        message.publicKey !== undefined &&
            (obj.publicKey = base64FromBytes(message.publicKey !== undefined ? message.publicKey : Buffer.alloc(0)));
        return obj;
    },
    create(base) {
        return exports.WebAuthNKey.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWebAuthNKey();
        message.publicKey = object.publicKey ?? Buffer.alloc(0);
        return message;
    },
};
function createBaseWebAuthNVerification() {
    return { publicKeyCredential: Buffer.alloc(0), tokenName: "" };
}
exports.WebAuthNVerification = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.publicKeyCredential.length !== 0) {
            writer.uint32(10).bytes(message.publicKeyCredential);
        }
        if (message.tokenName !== "") {
            writer.uint32(18).string(message.tokenName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebAuthNVerification();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.publicKeyCredential = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tokenName = reader.string();
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
            publicKeyCredential: isSet(object.publicKeyCredential)
                ? Buffer.from(bytesFromBase64(object.publicKeyCredential))
                : Buffer.alloc(0),
            tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.publicKeyCredential !== undefined &&
            (obj.publicKeyCredential = base64FromBytes(message.publicKeyCredential !== undefined ? message.publicKeyCredential : Buffer.alloc(0)));
        message.tokenName !== undefined && (obj.tokenName = message.tokenName);
        return obj;
    },
    create(base) {
        return exports.WebAuthNVerification.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWebAuthNVerification();
        message.publicKeyCredential = object.publicKeyCredential ?? Buffer.alloc(0);
        message.tokenName = object.tokenName ?? "";
        return message;
    },
};
function createBaseWebAuthNToken() {
    return { id: "", state: 0, name: "" };
}
exports.WebAuthNToken = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebAuthNToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            state: isSet(object.state) ? authFactorStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.state !== undefined && (obj.state = authFactorStateToJSON(message.state));
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create(base) {
        return exports.WebAuthNToken.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWebAuthNToken();
        message.id = object.id ?? "";
        message.state = object.state ?? 0;
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseMembership() {
    return {
        userId: "",
        details: undefined,
        roles: [],
        displayName: "",
        iam: undefined,
        orgId: undefined,
        projectId: undefined,
        projectGrantId: undefined,
    };
}
exports.Membership = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.roles) {
            writer.uint32(26).string(v);
        }
        if (message.displayName !== "") {
            writer.uint32(34).string(message.displayName);
        }
        if (message.iam !== undefined) {
            writer.uint32(40).bool(message.iam);
        }
        if (message.orgId !== undefined) {
            writer.uint32(50).string(message.orgId);
        }
        if (message.projectId !== undefined) {
            writer.uint32(58).string(message.projectId);
        }
        if (message.projectGrantId !== undefined) {
            writer.uint32(66).string(message.projectGrantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembership();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.roles.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.iam = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.projectGrantId = reader.string();
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            roles: Array.isArray(object?.roles) ? object.roles.map((e) => String(e)) : [],
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            iam: isSet(object.iam) ? Boolean(object.iam) : undefined,
            orgId: isSet(object.orgId) ? String(object.orgId) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : undefined,
            projectGrantId: isSet(object.projectGrantId) ? String(object.projectGrantId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        if (message.roles) {
            obj.roles = message.roles.map((e) => e);
        }
        else {
            obj.roles = [];
        }
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.iam !== undefined && (obj.iam = message.iam);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.projectGrantId !== undefined && (obj.projectGrantId = message.projectGrantId);
        return obj;
    },
    create(base) {
        return exports.Membership.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMembership();
        message.userId = object.userId ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.roles = object.roles?.map((e) => e) || [];
        message.displayName = object.displayName ?? "";
        message.iam = object.iam ?? undefined;
        message.orgId = object.orgId ?? undefined;
        message.projectId = object.projectId ?? undefined;
        message.projectGrantId = object.projectGrantId ?? undefined;
        return message;
    },
};
function createBaseMembershipQuery() {
    return { orgQuery: undefined, projectQuery: undefined, projectGrantQuery: undefined, iamQuery: undefined };
}
exports.MembershipQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgQuery !== undefined) {
            exports.MembershipOrgQuery.encode(message.orgQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.projectQuery !== undefined) {
            exports.MembershipProjectQuery.encode(message.projectQuery, writer.uint32(18).fork()).ldelim();
        }
        if (message.projectGrantQuery !== undefined) {
            exports.MembershipProjectGrantQuery.encode(message.projectGrantQuery, writer.uint32(26).fork()).ldelim();
        }
        if (message.iamQuery !== undefined) {
            exports.MembershipIAMQuery.encode(message.iamQuery, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgQuery = exports.MembershipOrgQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.projectQuery = exports.MembershipProjectQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.projectGrantQuery = exports.MembershipProjectGrantQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.iamQuery = exports.MembershipIAMQuery.decode(reader, reader.uint32());
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
            orgQuery: isSet(object.orgQuery) ? exports.MembershipOrgQuery.fromJSON(object.orgQuery) : undefined,
            projectQuery: isSet(object.projectQuery) ? exports.MembershipProjectQuery.fromJSON(object.projectQuery) : undefined,
            projectGrantQuery: isSet(object.projectGrantQuery)
                ? exports.MembershipProjectGrantQuery.fromJSON(object.projectGrantQuery)
                : undefined,
            iamQuery: isSet(object.iamQuery) ? exports.MembershipIAMQuery.fromJSON(object.iamQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgQuery !== undefined &&
            (obj.orgQuery = message.orgQuery ? exports.MembershipOrgQuery.toJSON(message.orgQuery) : undefined);
        message.projectQuery !== undefined &&
            (obj.projectQuery = message.projectQuery ? exports.MembershipProjectQuery.toJSON(message.projectQuery) : undefined);
        message.projectGrantQuery !== undefined && (obj.projectGrantQuery = message.projectGrantQuery
            ? exports.MembershipProjectGrantQuery.toJSON(message.projectGrantQuery)
            : undefined);
        message.iamQuery !== undefined &&
            (obj.iamQuery = message.iamQuery ? exports.MembershipIAMQuery.toJSON(message.iamQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.MembershipQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMembershipQuery();
        message.orgQuery = (object.orgQuery !== undefined && object.orgQuery !== null)
            ? exports.MembershipOrgQuery.fromPartial(object.orgQuery)
            : undefined;
        message.projectQuery = (object.projectQuery !== undefined && object.projectQuery !== null)
            ? exports.MembershipProjectQuery.fromPartial(object.projectQuery)
            : undefined;
        message.projectGrantQuery = (object.projectGrantQuery !== undefined && object.projectGrantQuery !== null)
            ? exports.MembershipProjectGrantQuery.fromPartial(object.projectGrantQuery)
            : undefined;
        message.iamQuery = (object.iamQuery !== undefined && object.iamQuery !== null)
            ? exports.MembershipIAMQuery.fromPartial(object.iamQuery)
            : undefined;
        return message;
    },
};
function createBaseMembershipOrgQuery() {
    return { orgId: "" };
}
exports.MembershipOrgQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipOrgQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
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
        return { orgId: isSet(object.orgId) ? String(object.orgId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create(base) {
        return exports.MembershipOrgQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMembershipOrgQuery();
        message.orgId = object.orgId ?? "";
        return message;
    },
};
function createBaseMembershipProjectQuery() {
    return { projectId: "" };
}
exports.MembershipProjectQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipProjectQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
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
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create(base) {
        return exports.MembershipProjectQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMembershipProjectQuery();
        message.projectId = object.projectId ?? "";
        return message;
    },
};
function createBaseMembershipProjectGrantQuery() {
    return { projectGrantId: "" };
}
exports.MembershipProjectGrantQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectGrantId !== "") {
            writer.uint32(10).string(message.projectGrantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipProjectGrantQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectGrantId = reader.string();
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
        return { projectGrantId: isSet(object.projectGrantId) ? String(object.projectGrantId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.projectGrantId !== undefined && (obj.projectGrantId = message.projectGrantId);
        return obj;
    },
    create(base) {
        return exports.MembershipProjectGrantQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMembershipProjectGrantQuery();
        message.projectGrantId = object.projectGrantId ?? "";
        return message;
    },
};
function createBaseMembershipIAMQuery() {
    return { iam: false };
}
exports.MembershipIAMQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.iam === true) {
            writer.uint32(8).bool(message.iam);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembershipIAMQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.iam = reader.bool();
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
        return { iam: isSet(object.iam) ? Boolean(object.iam) : false };
    },
    toJSON(message) {
        const obj = {};
        message.iam !== undefined && (obj.iam = message.iam);
        return obj;
    },
    create(base) {
        return exports.MembershipIAMQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMembershipIAMQuery();
        message.iam = object.iam ?? false;
        return message;
    },
};
function createBaseSession() {
    return {
        sessionId: "",
        agentId: "",
        authState: 0,
        userId: "",
        userName: "",
        loginName: "",
        displayName: "",
        details: undefined,
        avatarUrl: "",
    };
}
exports.Session = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.agentId !== "") {
            writer.uint32(18).string(message.agentId);
        }
        if (message.authState !== 0) {
            writer.uint32(24).int32(message.authState);
        }
        if (message.userId !== "") {
            writer.uint32(34).string(message.userId);
        }
        if (message.userName !== "") {
            writer.uint32(42).string(message.userName);
        }
        if (message.loginName !== "") {
            writer.uint32(58).string(message.loginName);
        }
        if (message.displayName !== "") {
            writer.uint32(66).string(message.displayName);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(74).fork()).ldelim();
        }
        if (message.avatarUrl !== "") {
            writer.uint32(82).string(message.avatarUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sessionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.agentId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.authState = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.loginName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.avatarUrl = reader.string();
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
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            agentId: isSet(object.agentId) ? String(object.agentId) : "",
            authState: isSet(object.authState) ? sessionStateFromJSON(object.authState) : 0,
            userId: isSet(object.userId) ? String(object.userId) : "",
            userName: isSet(object.userName) ? String(object.userName) : "",
            loginName: isSet(object.loginName) ? String(object.loginName) : "",
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.agentId !== undefined && (obj.agentId = message.agentId);
        message.authState !== undefined && (obj.authState = sessionStateToJSON(message.authState));
        message.userId !== undefined && (obj.userId = message.userId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.loginName !== undefined && (obj.loginName = message.loginName);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
        return obj;
    },
    create(base) {
        return exports.Session.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSession();
        message.sessionId = object.sessionId ?? "";
        message.agentId = object.agentId ?? "";
        message.authState = object.authState ?? 0;
        message.userId = object.userId ?? "";
        message.userName = object.userName ?? "";
        message.loginName = object.loginName ?? "";
        message.displayName = object.displayName ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.avatarUrl = object.avatarUrl ?? "";
        return message;
    },
};
function createBaseRefreshToken() {
    return {
        id: "",
        details: undefined,
        clientId: "",
        authTime: undefined,
        idleExpiration: undefined,
        expiration: undefined,
        scopes: [],
        audience: [],
    };
}
exports.RefreshToken = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.clientId !== "") {
            writer.uint32(26).string(message.clientId);
        }
        if (message.authTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.authTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.idleExpiration !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.idleExpiration), writer.uint32(42).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiration), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.scopes) {
            writer.uint32(58).string(v);
        }
        for (const v of message.audience) {
            writer.uint32(66).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRefreshToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.authTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.idleExpiration = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.expiration = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.scopes.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.audience.push(reader.string());
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
            id: isSet(object.id) ? String(object.id) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            authTime: isSet(object.authTime) ? fromJsonTimestamp(object.authTime) : undefined,
            idleExpiration: isSet(object.idleExpiration) ? fromJsonTimestamp(object.idleExpiration) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
            audience: Array.isArray(object?.audience) ? object.audience.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.authTime !== undefined && (obj.authTime = message.authTime.toISOString());
        message.idleExpiration !== undefined && (obj.idleExpiration = message.idleExpiration.toISOString());
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        if (message.audience) {
            obj.audience = message.audience.map((e) => e);
        }
        else {
            obj.audience = [];
        }
        return obj;
    },
    create(base) {
        return exports.RefreshToken.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRefreshToken();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.clientId = object.clientId ?? "";
        message.authTime = object.authTime ?? undefined;
        message.idleExpiration = object.idleExpiration ?? undefined;
        message.expiration = object.expiration ?? undefined;
        message.scopes = object.scopes?.map((e) => e) || [];
        message.audience = object.audience?.map((e) => e) || [];
        return message;
    },
};
function createBasePersonalAccessToken() {
    return { id: "", details: undefined, expirationDate: undefined, scopes: [] };
}
exports.PersonalAccessToken = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.scopes) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePersonalAccessToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.expirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            id: isSet(object.id) ? String(object.id) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
            scopes: Array.isArray(object?.scopes) ? object.scopes.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.expirationDate !== undefined && (obj.expirationDate = message.expirationDate.toISOString());
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        return obj;
    },
    create(base) {
        return exports.PersonalAccessToken.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePersonalAccessToken();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.expirationDate = object.expirationDate ?? undefined;
        message.scopes = object.scopes?.map((e) => e) || [];
        return message;
    },
};
function createBaseUserGrant() {
    return {
        id: "",
        details: undefined,
        roleKeys: [],
        state: 0,
        userId: "",
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        displayName: "",
        orgId: "",
        orgName: "",
        orgDomain: "",
        projectId: "",
        projectName: "",
        projectGrantId: "",
        avatarUrl: "",
        preferredLoginName: "",
        userType: 0,
    };
}
exports.UserGrant = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.roleKeys) {
            writer.uint32(26).string(v);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.userId !== "") {
            writer.uint32(42).string(message.userId);
        }
        if (message.userName !== "") {
            writer.uint32(50).string(message.userName);
        }
        if (message.firstName !== "") {
            writer.uint32(58).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(66).string(message.lastName);
        }
        if (message.email !== "") {
            writer.uint32(74).string(message.email);
        }
        if (message.displayName !== "") {
            writer.uint32(82).string(message.displayName);
        }
        if (message.orgId !== "") {
            writer.uint32(90).string(message.orgId);
        }
        if (message.orgName !== "") {
            writer.uint32(98).string(message.orgName);
        }
        if (message.orgDomain !== "") {
            writer.uint32(106).string(message.orgDomain);
        }
        if (message.projectId !== "") {
            writer.uint32(114).string(message.projectId);
        }
        if (message.projectName !== "") {
            writer.uint32(122).string(message.projectName);
        }
        if (message.projectGrantId !== "") {
            writer.uint32(130).string(message.projectGrantId);
        }
        if (message.avatarUrl !== "") {
            writer.uint32(138).string(message.avatarUrl);
        }
        if (message.preferredLoginName !== "") {
            writer.uint32(146).string(message.preferredLoginName);
        }
        if (message.userType !== 0) {
            writer.uint32(152).int32(message.userType);
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
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.roleKeys.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.orgName = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.orgDomain = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.projectName = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.projectGrantId = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.avatarUrl = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.preferredLoginName = reader.string();
                    continue;
                case 19:
                    if (tag !== 152) {
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
            id: isSet(object.id) ? String(object.id) : "",
            details: isSet(object.details) ? object_1.ObjectDetails.fromJSON(object.details) : undefined,
            roleKeys: Array.isArray(object?.roleKeys) ? object.roleKeys.map((e) => String(e)) : [],
            state: isSet(object.state) ? userGrantStateFromJSON(object.state) : 0,
            userId: isSet(object.userId) ? String(object.userId) : "",
            userName: isSet(object.userName) ? String(object.userName) : "",
            firstName: isSet(object.firstName) ? String(object.firstName) : "",
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            email: isSet(object.email) ? String(object.email) : "",
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            orgName: isSet(object.orgName) ? String(object.orgName) : "",
            orgDomain: isSet(object.orgDomain) ? String(object.orgDomain) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            projectName: isSet(object.projectName) ? String(object.projectName) : "",
            projectGrantId: isSet(object.projectGrantId) ? String(object.projectGrantId) : "",
            avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
            preferredLoginName: isSet(object.preferredLoginName) ? String(object.preferredLoginName) : "",
            userType: isSet(object.userType) ? typeFromJSON(object.userType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        if (message.roleKeys) {
            obj.roleKeys = message.roleKeys.map((e) => e);
        }
        else {
            obj.roleKeys = [];
        }
        message.state !== undefined && (obj.state = userGrantStateToJSON(message.state));
        message.userId !== undefined && (obj.userId = message.userId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.email !== undefined && (obj.email = message.email);
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.orgName !== undefined && (obj.orgName = message.orgName);
        message.orgDomain !== undefined && (obj.orgDomain = message.orgDomain);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.projectName !== undefined && (obj.projectName = message.projectName);
        message.projectGrantId !== undefined && (obj.projectGrantId = message.projectGrantId);
        message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
        message.preferredLoginName !== undefined && (obj.preferredLoginName = message.preferredLoginName);
        message.userType !== undefined && (obj.userType = typeToJSON(message.userType));
        return obj;
    },
    create(base) {
        return exports.UserGrant.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrant();
        message.id = object.id ?? "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.roleKeys = object.roleKeys?.map((e) => e) || [];
        message.state = object.state ?? 0;
        message.userId = object.userId ?? "";
        message.userName = object.userName ?? "";
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.email = object.email ?? "";
        message.displayName = object.displayName ?? "";
        message.orgId = object.orgId ?? "";
        message.orgName = object.orgName ?? "";
        message.orgDomain = object.orgDomain ?? "";
        message.projectId = object.projectId ?? "";
        message.projectName = object.projectName ?? "";
        message.projectGrantId = object.projectGrantId ?? "";
        message.avatarUrl = object.avatarUrl ?? "";
        message.preferredLoginName = object.preferredLoginName ?? "";
        message.userType = object.userType ?? 0;
        return message;
    },
};
function createBaseUserGrantQuery() {
    return {
        projectIdQuery: undefined,
        userIdQuery: undefined,
        withGrantedQuery: undefined,
        roleKeyQuery: undefined,
        projectGrantIdQuery: undefined,
        userNameQuery: undefined,
        firstNameQuery: undefined,
        lastNameQuery: undefined,
        emailQuery: undefined,
        orgNameQuery: undefined,
        orgDomainQuery: undefined,
        projectNameQuery: undefined,
        displayNameQuery: undefined,
        userTypeQuery: undefined,
    };
}
exports.UserGrantQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectIdQuery !== undefined) {
            exports.UserGrantProjectIDQuery.encode(message.projectIdQuery, writer.uint32(10).fork()).ldelim();
        }
        if (message.userIdQuery !== undefined) {
            exports.UserGrantUserIDQuery.encode(message.userIdQuery, writer.uint32(18).fork()).ldelim();
        }
        if (message.withGrantedQuery !== undefined) {
            exports.UserGrantWithGrantedQuery.encode(message.withGrantedQuery, writer.uint32(26).fork()).ldelim();
        }
        if (message.roleKeyQuery !== undefined) {
            exports.UserGrantRoleKeyQuery.encode(message.roleKeyQuery, writer.uint32(34).fork()).ldelim();
        }
        if (message.projectGrantIdQuery !== undefined) {
            exports.UserGrantProjectGrantIDQuery.encode(message.projectGrantIdQuery, writer.uint32(42).fork()).ldelim();
        }
        if (message.userNameQuery !== undefined) {
            exports.UserGrantUserNameQuery.encode(message.userNameQuery, writer.uint32(50).fork()).ldelim();
        }
        if (message.firstNameQuery !== undefined) {
            exports.UserGrantFirstNameQuery.encode(message.firstNameQuery, writer.uint32(58).fork()).ldelim();
        }
        if (message.lastNameQuery !== undefined) {
            exports.UserGrantLastNameQuery.encode(message.lastNameQuery, writer.uint32(66).fork()).ldelim();
        }
        if (message.emailQuery !== undefined) {
            exports.UserGrantEmailQuery.encode(message.emailQuery, writer.uint32(74).fork()).ldelim();
        }
        if (message.orgNameQuery !== undefined) {
            exports.UserGrantOrgNameQuery.encode(message.orgNameQuery, writer.uint32(82).fork()).ldelim();
        }
        if (message.orgDomainQuery !== undefined) {
            exports.UserGrantOrgDomainQuery.encode(message.orgDomainQuery, writer.uint32(90).fork()).ldelim();
        }
        if (message.projectNameQuery !== undefined) {
            exports.UserGrantProjectNameQuery.encode(message.projectNameQuery, writer.uint32(98).fork()).ldelim();
        }
        if (message.displayNameQuery !== undefined) {
            exports.UserGrantDisplayNameQuery.encode(message.displayNameQuery, writer.uint32(106).fork()).ldelim();
        }
        if (message.userTypeQuery !== undefined) {
            exports.UserGrantUserTypeQuery.encode(message.userTypeQuery, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectIdQuery = exports.UserGrantProjectIDQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userIdQuery = exports.UserGrantUserIDQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.withGrantedQuery = exports.UserGrantWithGrantedQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.roleKeyQuery = exports.UserGrantRoleKeyQuery.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.projectGrantIdQuery = exports.UserGrantProjectGrantIDQuery.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.userNameQuery = exports.UserGrantUserNameQuery.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.firstNameQuery = exports.UserGrantFirstNameQuery.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.lastNameQuery = exports.UserGrantLastNameQuery.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.emailQuery = exports.UserGrantEmailQuery.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.orgNameQuery = exports.UserGrantOrgNameQuery.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.orgDomainQuery = exports.UserGrantOrgDomainQuery.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.projectNameQuery = exports.UserGrantProjectNameQuery.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.displayNameQuery = exports.UserGrantDisplayNameQuery.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.userTypeQuery = exports.UserGrantUserTypeQuery.decode(reader, reader.uint32());
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
            projectIdQuery: isSet(object.projectIdQuery)
                ? exports.UserGrantProjectIDQuery.fromJSON(object.projectIdQuery)
                : undefined,
            userIdQuery: isSet(object.userIdQuery) ? exports.UserGrantUserIDQuery.fromJSON(object.userIdQuery) : undefined,
            withGrantedQuery: isSet(object.withGrantedQuery)
                ? exports.UserGrantWithGrantedQuery.fromJSON(object.withGrantedQuery)
                : undefined,
            roleKeyQuery: isSet(object.roleKeyQuery) ? exports.UserGrantRoleKeyQuery.fromJSON(object.roleKeyQuery) : undefined,
            projectGrantIdQuery: isSet(object.projectGrantIdQuery)
                ? exports.UserGrantProjectGrantIDQuery.fromJSON(object.projectGrantIdQuery)
                : undefined,
            userNameQuery: isSet(object.userNameQuery) ? exports.UserGrantUserNameQuery.fromJSON(object.userNameQuery) : undefined,
            firstNameQuery: isSet(object.firstNameQuery)
                ? exports.UserGrantFirstNameQuery.fromJSON(object.firstNameQuery)
                : undefined,
            lastNameQuery: isSet(object.lastNameQuery) ? exports.UserGrantLastNameQuery.fromJSON(object.lastNameQuery) : undefined,
            emailQuery: isSet(object.emailQuery) ? exports.UserGrantEmailQuery.fromJSON(object.emailQuery) : undefined,
            orgNameQuery: isSet(object.orgNameQuery) ? exports.UserGrantOrgNameQuery.fromJSON(object.orgNameQuery) : undefined,
            orgDomainQuery: isSet(object.orgDomainQuery)
                ? exports.UserGrantOrgDomainQuery.fromJSON(object.orgDomainQuery)
                : undefined,
            projectNameQuery: isSet(object.projectNameQuery)
                ? exports.UserGrantProjectNameQuery.fromJSON(object.projectNameQuery)
                : undefined,
            displayNameQuery: isSet(object.displayNameQuery)
                ? exports.UserGrantDisplayNameQuery.fromJSON(object.displayNameQuery)
                : undefined,
            userTypeQuery: isSet(object.userTypeQuery) ? exports.UserGrantUserTypeQuery.fromJSON(object.userTypeQuery) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectIdQuery !== undefined &&
            (obj.projectIdQuery = message.projectIdQuery
                ? exports.UserGrantProjectIDQuery.toJSON(message.projectIdQuery)
                : undefined);
        message.userIdQuery !== undefined &&
            (obj.userIdQuery = message.userIdQuery ? exports.UserGrantUserIDQuery.toJSON(message.userIdQuery) : undefined);
        message.withGrantedQuery !== undefined && (obj.withGrantedQuery = message.withGrantedQuery
            ? exports.UserGrantWithGrantedQuery.toJSON(message.withGrantedQuery)
            : undefined);
        message.roleKeyQuery !== undefined &&
            (obj.roleKeyQuery = message.roleKeyQuery ? exports.UserGrantRoleKeyQuery.toJSON(message.roleKeyQuery) : undefined);
        message.projectGrantIdQuery !== undefined && (obj.projectGrantIdQuery = message.projectGrantIdQuery
            ? exports.UserGrantProjectGrantIDQuery.toJSON(message.projectGrantIdQuery)
            : undefined);
        message.userNameQuery !== undefined &&
            (obj.userNameQuery = message.userNameQuery ? exports.UserGrantUserNameQuery.toJSON(message.userNameQuery) : undefined);
        message.firstNameQuery !== undefined &&
            (obj.firstNameQuery = message.firstNameQuery
                ? exports.UserGrantFirstNameQuery.toJSON(message.firstNameQuery)
                : undefined);
        message.lastNameQuery !== undefined &&
            (obj.lastNameQuery = message.lastNameQuery ? exports.UserGrantLastNameQuery.toJSON(message.lastNameQuery) : undefined);
        message.emailQuery !== undefined &&
            (obj.emailQuery = message.emailQuery ? exports.UserGrantEmailQuery.toJSON(message.emailQuery) : undefined);
        message.orgNameQuery !== undefined &&
            (obj.orgNameQuery = message.orgNameQuery ? exports.UserGrantOrgNameQuery.toJSON(message.orgNameQuery) : undefined);
        message.orgDomainQuery !== undefined &&
            (obj.orgDomainQuery = message.orgDomainQuery
                ? exports.UserGrantOrgDomainQuery.toJSON(message.orgDomainQuery)
                : undefined);
        message.projectNameQuery !== undefined && (obj.projectNameQuery = message.projectNameQuery
            ? exports.UserGrantProjectNameQuery.toJSON(message.projectNameQuery)
            : undefined);
        message.displayNameQuery !== undefined && (obj.displayNameQuery = message.displayNameQuery
            ? exports.UserGrantDisplayNameQuery.toJSON(message.displayNameQuery)
            : undefined);
        message.userTypeQuery !== undefined &&
            (obj.userTypeQuery = message.userTypeQuery ? exports.UserGrantUserTypeQuery.toJSON(message.userTypeQuery) : undefined);
        return obj;
    },
    create(base) {
        return exports.UserGrantQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantQuery();
        message.projectIdQuery = (object.projectIdQuery !== undefined && object.projectIdQuery !== null)
            ? exports.UserGrantProjectIDQuery.fromPartial(object.projectIdQuery)
            : undefined;
        message.userIdQuery = (object.userIdQuery !== undefined && object.userIdQuery !== null)
            ? exports.UserGrantUserIDQuery.fromPartial(object.userIdQuery)
            : undefined;
        message.withGrantedQuery = (object.withGrantedQuery !== undefined && object.withGrantedQuery !== null)
            ? exports.UserGrantWithGrantedQuery.fromPartial(object.withGrantedQuery)
            : undefined;
        message.roleKeyQuery = (object.roleKeyQuery !== undefined && object.roleKeyQuery !== null)
            ? exports.UserGrantRoleKeyQuery.fromPartial(object.roleKeyQuery)
            : undefined;
        message.projectGrantIdQuery = (object.projectGrantIdQuery !== undefined && object.projectGrantIdQuery !== null)
            ? exports.UserGrantProjectGrantIDQuery.fromPartial(object.projectGrantIdQuery)
            : undefined;
        message.userNameQuery = (object.userNameQuery !== undefined && object.userNameQuery !== null)
            ? exports.UserGrantUserNameQuery.fromPartial(object.userNameQuery)
            : undefined;
        message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
            ? exports.UserGrantFirstNameQuery.fromPartial(object.firstNameQuery)
            : undefined;
        message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
            ? exports.UserGrantLastNameQuery.fromPartial(object.lastNameQuery)
            : undefined;
        message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
            ? exports.UserGrantEmailQuery.fromPartial(object.emailQuery)
            : undefined;
        message.orgNameQuery = (object.orgNameQuery !== undefined && object.orgNameQuery !== null)
            ? exports.UserGrantOrgNameQuery.fromPartial(object.orgNameQuery)
            : undefined;
        message.orgDomainQuery = (object.orgDomainQuery !== undefined && object.orgDomainQuery !== null)
            ? exports.UserGrantOrgDomainQuery.fromPartial(object.orgDomainQuery)
            : undefined;
        message.projectNameQuery = (object.projectNameQuery !== undefined && object.projectNameQuery !== null)
            ? exports.UserGrantProjectNameQuery.fromPartial(object.projectNameQuery)
            : undefined;
        message.displayNameQuery = (object.displayNameQuery !== undefined && object.displayNameQuery !== null)
            ? exports.UserGrantDisplayNameQuery.fromPartial(object.displayNameQuery)
            : undefined;
        message.userTypeQuery = (object.userTypeQuery !== undefined && object.userTypeQuery !== null)
            ? exports.UserGrantUserTypeQuery.fromPartial(object.userTypeQuery)
            : undefined;
        return message;
    },
};
function createBaseUserGrantProjectIDQuery() {
    return { projectId: "" };
}
exports.UserGrantProjectIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantProjectIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
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
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create(base) {
        return exports.UserGrantProjectIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantProjectIDQuery();
        message.projectId = object.projectId ?? "";
        return message;
    },
};
function createBaseUserGrantUserIDQuery() {
    return { userId: "" };
}
exports.UserGrantUserIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantUserIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.UserGrantUserIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantUserIDQuery();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseUserGrantWithGrantedQuery() {
    return { withGranted: false };
}
exports.UserGrantWithGrantedQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.withGranted === true) {
            writer.uint32(8).bool(message.withGranted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantWithGrantedQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.withGranted = reader.bool();
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
        return { withGranted: isSet(object.withGranted) ? Boolean(object.withGranted) : false };
    },
    toJSON(message) {
        const obj = {};
        message.withGranted !== undefined && (obj.withGranted = message.withGranted);
        return obj;
    },
    create(base) {
        return exports.UserGrantWithGrantedQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantWithGrantedQuery();
        message.withGranted = object.withGranted ?? false;
        return message;
    },
};
function createBaseUserGrantRoleKeyQuery() {
    return { roleKey: "", method: 0 };
}
exports.UserGrantRoleKeyQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roleKey !== "") {
            writer.uint32(10).string(message.roleKey);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantRoleKeyQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.roleKey = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            roleKey: isSet(object.roleKey) ? String(object.roleKey) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.roleKey !== undefined && (obj.roleKey = message.roleKey);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserGrantRoleKeyQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantRoleKeyQuery();
        message.roleKey = object.roleKey ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserGrantProjectGrantIDQuery() {
    return { projectGrantId: "" };
}
exports.UserGrantProjectGrantIDQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectGrantId !== "") {
            writer.uint32(10).string(message.projectGrantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantProjectGrantIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectGrantId = reader.string();
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
        return { projectGrantId: isSet(object.projectGrantId) ? String(object.projectGrantId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.projectGrantId !== undefined && (obj.projectGrantId = message.projectGrantId);
        return obj;
    },
    create(base) {
        return exports.UserGrantProjectGrantIDQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantProjectGrantIDQuery();
        message.projectGrantId = object.projectGrantId ?? "";
        return message;
    },
};
function createBaseUserGrantUserNameQuery() {
    return { userName: "", method: 0 };
}
exports.UserGrantUserNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantUserNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            userName: isSet(object.userName) ? String(object.userName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userName !== undefined && (obj.userName = message.userName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserGrantUserNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantUserNameQuery();
        message.userName = object.userName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserGrantFirstNameQuery() {
    return { firstName: "", method: 0 };
}
exports.UserGrantFirstNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantFirstNameQuery();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.firstName !== undefined && (obj.firstName = message.firstName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserGrantFirstNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantFirstNameQuery();
        message.firstName = object.firstName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserGrantLastNameQuery() {
    return { lastName: "", method: 0 };
}
exports.UserGrantLastNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lastName !== "") {
            writer.uint32(10).string(message.lastName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantLastNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            lastName: isSet(object.lastName) ? String(object.lastName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lastName !== undefined && (obj.lastName = message.lastName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserGrantLastNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantLastNameQuery();
        message.lastName = object.lastName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserGrantEmailQuery() {
    return { email: "", method: 0 };
}
exports.UserGrantEmailQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantEmailQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            email: isSet(object.email) ? String(object.email) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserGrantEmailQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantEmailQuery();
        message.email = object.email ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserGrantOrgNameQuery() {
    return { orgName: "", method: 0 };
}
exports.UserGrantOrgNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgName !== "") {
            writer.uint32(10).string(message.orgName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantOrgNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            orgName: isSet(object.orgName) ? String(object.orgName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgName !== undefined && (obj.orgName = message.orgName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserGrantOrgNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantOrgNameQuery();
        message.orgName = object.orgName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserGrantOrgDomainQuery() {
    return { orgDomain: "", method: 0 };
}
exports.UserGrantOrgDomainQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgDomain !== "") {
            writer.uint32(10).string(message.orgDomain);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantOrgDomainQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgDomain = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            orgDomain: isSet(object.orgDomain) ? String(object.orgDomain) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgDomain !== undefined && (obj.orgDomain = message.orgDomain);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserGrantOrgDomainQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantOrgDomainQuery();
        message.orgDomain = object.orgDomain ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserGrantProjectNameQuery() {
    return { projectName: "", method: 0 };
}
exports.UserGrantProjectNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectName !== "") {
            writer.uint32(10).string(message.projectName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantProjectNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            projectName: isSet(object.projectName) ? String(object.projectName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectName !== undefined && (obj.projectName = message.projectName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserGrantProjectNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantProjectNameQuery();
        message.projectName = object.projectName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserGrantDisplayNameQuery() {
    return { displayName: "", method: 0 };
}
exports.UserGrantDisplayNameQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.displayName !== "") {
            writer.uint32(10).string(message.displayName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantDisplayNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.displayName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
            method: isSet(object.method) ? (0, object_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.displayName !== undefined && (obj.displayName = message.displayName);
        message.method !== undefined && (obj.method = (0, object_1.textQueryMethodToJSON)(message.method));
        return obj;
    },
    create(base) {
        return exports.UserGrantDisplayNameQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantDisplayNameQuery();
        message.displayName = object.displayName ?? "";
        message.method = object.method ?? 0;
        return message;
    },
};
function createBaseUserGrantUserTypeQuery() {
    return { type: 0 };
}
exports.UserGrantUserTypeQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserGrantUserTypeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
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
        return { type: isSet(object.type) ? typeFromJSON(object.type) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = typeToJSON(message.type));
        return obj;
    },
    create(base) {
        return exports.UserGrantUserTypeQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserGrantUserTypeQuery();
        message.type = object.type ?? 0;
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
