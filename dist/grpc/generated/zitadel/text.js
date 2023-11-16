"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordlessRegistrationDoneScreenText = exports.PasswordlessRegistrationScreenText = exports.PasswordlessPromptScreenText = exports.FooterText = exports.LogoutDoneScreenText = exports.SuccessLoginScreenText = exports.ExternalUserNotFoundScreenText = exports.LinkingUserDoneScreenText = exports.RegistrationOrgScreenText = exports.ExternalRegistrationUserOverviewScreenText = exports.RegistrationUserScreenText = exports.RegistrationOptionScreenText = exports.PasswordResetDoneScreenText = exports.PasswordChangeDoneScreenText = exports.PasswordChangeScreenText = exports.PasswordlessScreenText = exports.VerifyMFAU2FScreenText = exports.VerifyMFAOTPScreenText = exports.MFAProvidersText = exports.InitMFADoneScreenText = exports.InitMFAU2FScreenText = exports.InitMFAOTPScreenText = exports.InitMFAPromptScreenText = exports.InitializeUserDoneScreenText = exports.InitializeUserScreenText = exports.EmailVerificationDoneScreenText = exports.EmailVerificationScreenText = exports.InitPasswordDoneScreenText = exports.InitPasswordScreenText = exports.UsernameChangeDoneScreenText = exports.UsernameChangeScreenText = exports.PasswordScreenText = exports.LoginScreenText = exports.SelectAccountScreenText = exports.LoginCustomText = exports.MessageCustomText = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const object_1 = require("./object");
exports.protobufPackage = "zitadel.text.v1";
function createBaseMessageCustomText() {
    return {
        details: undefined,
        title: "",
        preHeader: "",
        subject: "",
        greeting: "",
        text: "",
        buttonText: "",
        footerText: "",
        isDefault: false,
    };
}
exports.MessageCustomText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.preHeader !== "") {
            writer.uint32(26).string(message.preHeader);
        }
        if (message.subject !== "") {
            writer.uint32(34).string(message.subject);
        }
        if (message.greeting !== "") {
            writer.uint32(42).string(message.greeting);
        }
        if (message.text !== "") {
            writer.uint32(50).string(message.text);
        }
        if (message.buttonText !== "") {
            writer.uint32(58).string(message.buttonText);
        }
        if (message.footerText !== "") {
            writer.uint32(66).string(message.footerText);
        }
        if (message.isDefault === true) {
            writer.uint32(72).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageCustomText();
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
                    message.title = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.preHeader = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.subject = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.greeting = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.buttonText = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.footerText = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.isDefault = reader.bool();
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
            title: isSet(object.title) ? String(object.title) : "",
            preHeader: isSet(object.preHeader) ? String(object.preHeader) : "",
            subject: isSet(object.subject) ? String(object.subject) : "",
            greeting: isSet(object.greeting) ? String(object.greeting) : "",
            text: isSet(object.text) ? String(object.text) : "",
            buttonText: isSet(object.buttonText) ? String(object.buttonText) : "",
            footerText: isSet(object.footerText) ? String(object.footerText) : "",
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.preHeader !== undefined && (obj.preHeader = message.preHeader);
        message.subject !== undefined && (obj.subject = message.subject);
        message.greeting !== undefined && (obj.greeting = message.greeting);
        message.text !== undefined && (obj.text = message.text);
        message.buttonText !== undefined && (obj.buttonText = message.buttonText);
        message.footerText !== undefined && (obj.footerText = message.footerText);
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        return obj;
    },
    create(base) {
        return exports.MessageCustomText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageCustomText();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.title = object.title ?? "";
        message.preHeader = object.preHeader ?? "";
        message.subject = object.subject ?? "";
        message.greeting = object.greeting ?? "";
        message.text = object.text ?? "";
        message.buttonText = object.buttonText ?? "";
        message.footerText = object.footerText ?? "";
        message.isDefault = object.isDefault ?? false;
        return message;
    },
};
function createBaseLoginCustomText() {
    return {
        details: undefined,
        selectAccountText: undefined,
        loginText: undefined,
        passwordText: undefined,
        usernameChangeText: undefined,
        usernameChangeDoneText: undefined,
        initPasswordText: undefined,
        initPasswordDoneText: undefined,
        emailVerificationText: undefined,
        emailVerificationDoneText: undefined,
        initializeUserText: undefined,
        initializeDoneText: undefined,
        initMfaPromptText: undefined,
        initMfaOtpText: undefined,
        initMfaU2fText: undefined,
        initMfaDoneText: undefined,
        mfaProvidersText: undefined,
        verifyMfaOtpText: undefined,
        verifyMfaU2fText: undefined,
        passwordlessText: undefined,
        passwordChangeText: undefined,
        passwordChangeDoneText: undefined,
        passwordResetDoneText: undefined,
        registrationOptionText: undefined,
        registrationUserText: undefined,
        registrationOrgText: undefined,
        linkingUserDoneText: undefined,
        externalUserNotFoundText: undefined,
        successLoginText: undefined,
        logoutText: undefined,
        footerText: undefined,
        passwordlessPromptText: undefined,
        passwordlessRegistrationText: undefined,
        passwordlessRegistrationDoneText: undefined,
        externalRegistrationUserOverviewText: undefined,
        isDefault: false,
    };
}
exports.LoginCustomText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.details !== undefined) {
            object_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        if (message.selectAccountText !== undefined) {
            exports.SelectAccountScreenText.encode(message.selectAccountText, writer.uint32(18).fork()).ldelim();
        }
        if (message.loginText !== undefined) {
            exports.LoginScreenText.encode(message.loginText, writer.uint32(26).fork()).ldelim();
        }
        if (message.passwordText !== undefined) {
            exports.PasswordScreenText.encode(message.passwordText, writer.uint32(34).fork()).ldelim();
        }
        if (message.usernameChangeText !== undefined) {
            exports.UsernameChangeScreenText.encode(message.usernameChangeText, writer.uint32(42).fork()).ldelim();
        }
        if (message.usernameChangeDoneText !== undefined) {
            exports.UsernameChangeDoneScreenText.encode(message.usernameChangeDoneText, writer.uint32(50).fork()).ldelim();
        }
        if (message.initPasswordText !== undefined) {
            exports.InitPasswordScreenText.encode(message.initPasswordText, writer.uint32(58).fork()).ldelim();
        }
        if (message.initPasswordDoneText !== undefined) {
            exports.InitPasswordDoneScreenText.encode(message.initPasswordDoneText, writer.uint32(66).fork()).ldelim();
        }
        if (message.emailVerificationText !== undefined) {
            exports.EmailVerificationScreenText.encode(message.emailVerificationText, writer.uint32(74).fork()).ldelim();
        }
        if (message.emailVerificationDoneText !== undefined) {
            exports.EmailVerificationDoneScreenText.encode(message.emailVerificationDoneText, writer.uint32(82).fork()).ldelim();
        }
        if (message.initializeUserText !== undefined) {
            exports.InitializeUserScreenText.encode(message.initializeUserText, writer.uint32(90).fork()).ldelim();
        }
        if (message.initializeDoneText !== undefined) {
            exports.InitializeUserDoneScreenText.encode(message.initializeDoneText, writer.uint32(98).fork()).ldelim();
        }
        if (message.initMfaPromptText !== undefined) {
            exports.InitMFAPromptScreenText.encode(message.initMfaPromptText, writer.uint32(106).fork()).ldelim();
        }
        if (message.initMfaOtpText !== undefined) {
            exports.InitMFAOTPScreenText.encode(message.initMfaOtpText, writer.uint32(114).fork()).ldelim();
        }
        if (message.initMfaU2fText !== undefined) {
            exports.InitMFAU2FScreenText.encode(message.initMfaU2fText, writer.uint32(122).fork()).ldelim();
        }
        if (message.initMfaDoneText !== undefined) {
            exports.InitMFADoneScreenText.encode(message.initMfaDoneText, writer.uint32(130).fork()).ldelim();
        }
        if (message.mfaProvidersText !== undefined) {
            exports.MFAProvidersText.encode(message.mfaProvidersText, writer.uint32(138).fork()).ldelim();
        }
        if (message.verifyMfaOtpText !== undefined) {
            exports.VerifyMFAOTPScreenText.encode(message.verifyMfaOtpText, writer.uint32(146).fork()).ldelim();
        }
        if (message.verifyMfaU2fText !== undefined) {
            exports.VerifyMFAU2FScreenText.encode(message.verifyMfaU2fText, writer.uint32(154).fork()).ldelim();
        }
        if (message.passwordlessText !== undefined) {
            exports.PasswordlessScreenText.encode(message.passwordlessText, writer.uint32(162).fork()).ldelim();
        }
        if (message.passwordChangeText !== undefined) {
            exports.PasswordChangeScreenText.encode(message.passwordChangeText, writer.uint32(170).fork()).ldelim();
        }
        if (message.passwordChangeDoneText !== undefined) {
            exports.PasswordChangeDoneScreenText.encode(message.passwordChangeDoneText, writer.uint32(178).fork()).ldelim();
        }
        if (message.passwordResetDoneText !== undefined) {
            exports.PasswordResetDoneScreenText.encode(message.passwordResetDoneText, writer.uint32(186).fork()).ldelim();
        }
        if (message.registrationOptionText !== undefined) {
            exports.RegistrationOptionScreenText.encode(message.registrationOptionText, writer.uint32(194).fork()).ldelim();
        }
        if (message.registrationUserText !== undefined) {
            exports.RegistrationUserScreenText.encode(message.registrationUserText, writer.uint32(202).fork()).ldelim();
        }
        if (message.registrationOrgText !== undefined) {
            exports.RegistrationOrgScreenText.encode(message.registrationOrgText, writer.uint32(210).fork()).ldelim();
        }
        if (message.linkingUserDoneText !== undefined) {
            exports.LinkingUserDoneScreenText.encode(message.linkingUserDoneText, writer.uint32(218).fork()).ldelim();
        }
        if (message.externalUserNotFoundText !== undefined) {
            exports.ExternalUserNotFoundScreenText.encode(message.externalUserNotFoundText, writer.uint32(226).fork()).ldelim();
        }
        if (message.successLoginText !== undefined) {
            exports.SuccessLoginScreenText.encode(message.successLoginText, writer.uint32(234).fork()).ldelim();
        }
        if (message.logoutText !== undefined) {
            exports.LogoutDoneScreenText.encode(message.logoutText, writer.uint32(242).fork()).ldelim();
        }
        if (message.footerText !== undefined) {
            exports.FooterText.encode(message.footerText, writer.uint32(250).fork()).ldelim();
        }
        if (message.passwordlessPromptText !== undefined) {
            exports.PasswordlessPromptScreenText.encode(message.passwordlessPromptText, writer.uint32(258).fork()).ldelim();
        }
        if (message.passwordlessRegistrationText !== undefined) {
            exports.PasswordlessRegistrationScreenText.encode(message.passwordlessRegistrationText, writer.uint32(266).fork())
                .ldelim();
        }
        if (message.passwordlessRegistrationDoneText !== undefined) {
            exports.PasswordlessRegistrationDoneScreenText.encode(message.passwordlessRegistrationDoneText, writer.uint32(274).fork())
                .ldelim();
        }
        if (message.externalRegistrationUserOverviewText !== undefined) {
            exports.ExternalRegistrationUserOverviewScreenText.encode(message.externalRegistrationUserOverviewText, writer.uint32(282).fork()).ldelim();
        }
        if (message.isDefault === true) {
            writer.uint32(288).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginCustomText();
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
                    message.selectAccountText = exports.SelectAccountScreenText.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.loginText = exports.LoginScreenText.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.passwordText = exports.PasswordScreenText.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.usernameChangeText = exports.UsernameChangeScreenText.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.usernameChangeDoneText = exports.UsernameChangeDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.initPasswordText = exports.InitPasswordScreenText.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.initPasswordDoneText = exports.InitPasswordDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.emailVerificationText = exports.EmailVerificationScreenText.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.emailVerificationDoneText = exports.EmailVerificationDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.initializeUserText = exports.InitializeUserScreenText.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.initializeDoneText = exports.InitializeUserDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.initMfaPromptText = exports.InitMFAPromptScreenText.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.initMfaOtpText = exports.InitMFAOTPScreenText.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.initMfaU2fText = exports.InitMFAU2FScreenText.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.initMfaDoneText = exports.InitMFADoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.mfaProvidersText = exports.MFAProvidersText.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.verifyMfaOtpText = exports.VerifyMFAOTPScreenText.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.verifyMfaU2fText = exports.VerifyMFAU2FScreenText.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.passwordlessText = exports.PasswordlessScreenText.decode(reader, reader.uint32());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.passwordChangeText = exports.PasswordChangeScreenText.decode(reader, reader.uint32());
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.passwordChangeDoneText = exports.PasswordChangeDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.passwordResetDoneText = exports.PasswordResetDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.registrationOptionText = exports.RegistrationOptionScreenText.decode(reader, reader.uint32());
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.registrationUserText = exports.RegistrationUserScreenText.decode(reader, reader.uint32());
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.registrationOrgText = exports.RegistrationOrgScreenText.decode(reader, reader.uint32());
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }
                    message.linkingUserDoneText = exports.LinkingUserDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 28:
                    if (tag !== 226) {
                        break;
                    }
                    message.externalUserNotFoundText = exports.ExternalUserNotFoundScreenText.decode(reader, reader.uint32());
                    continue;
                case 29:
                    if (tag !== 234) {
                        break;
                    }
                    message.successLoginText = exports.SuccessLoginScreenText.decode(reader, reader.uint32());
                    continue;
                case 30:
                    if (tag !== 242) {
                        break;
                    }
                    message.logoutText = exports.LogoutDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 31:
                    if (tag !== 250) {
                        break;
                    }
                    message.footerText = exports.FooterText.decode(reader, reader.uint32());
                    continue;
                case 32:
                    if (tag !== 258) {
                        break;
                    }
                    message.passwordlessPromptText = exports.PasswordlessPromptScreenText.decode(reader, reader.uint32());
                    continue;
                case 33:
                    if (tag !== 266) {
                        break;
                    }
                    message.passwordlessRegistrationText = exports.PasswordlessRegistrationScreenText.decode(reader, reader.uint32());
                    continue;
                case 34:
                    if (tag !== 274) {
                        break;
                    }
                    message.passwordlessRegistrationDoneText = exports.PasswordlessRegistrationDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 35:
                    if (tag !== 282) {
                        break;
                    }
                    message.externalRegistrationUserOverviewText = exports.ExternalRegistrationUserOverviewScreenText.decode(reader, reader.uint32());
                    continue;
                case 36:
                    if (tag !== 288) {
                        break;
                    }
                    message.isDefault = reader.bool();
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
            selectAccountText: isSet(object.selectAccountText)
                ? exports.SelectAccountScreenText.fromJSON(object.selectAccountText)
                : undefined,
            loginText: isSet(object.loginText) ? exports.LoginScreenText.fromJSON(object.loginText) : undefined,
            passwordText: isSet(object.passwordText) ? exports.PasswordScreenText.fromJSON(object.passwordText) : undefined,
            usernameChangeText: isSet(object.usernameChangeText)
                ? exports.UsernameChangeScreenText.fromJSON(object.usernameChangeText)
                : undefined,
            usernameChangeDoneText: isSet(object.usernameChangeDoneText)
                ? exports.UsernameChangeDoneScreenText.fromJSON(object.usernameChangeDoneText)
                : undefined,
            initPasswordText: isSet(object.initPasswordText)
                ? exports.InitPasswordScreenText.fromJSON(object.initPasswordText)
                : undefined,
            initPasswordDoneText: isSet(object.initPasswordDoneText)
                ? exports.InitPasswordDoneScreenText.fromJSON(object.initPasswordDoneText)
                : undefined,
            emailVerificationText: isSet(object.emailVerificationText)
                ? exports.EmailVerificationScreenText.fromJSON(object.emailVerificationText)
                : undefined,
            emailVerificationDoneText: isSet(object.emailVerificationDoneText)
                ? exports.EmailVerificationDoneScreenText.fromJSON(object.emailVerificationDoneText)
                : undefined,
            initializeUserText: isSet(object.initializeUserText)
                ? exports.InitializeUserScreenText.fromJSON(object.initializeUserText)
                : undefined,
            initializeDoneText: isSet(object.initializeDoneText)
                ? exports.InitializeUserDoneScreenText.fromJSON(object.initializeDoneText)
                : undefined,
            initMfaPromptText: isSet(object.initMfaPromptText)
                ? exports.InitMFAPromptScreenText.fromJSON(object.initMfaPromptText)
                : undefined,
            initMfaOtpText: isSet(object.initMfaOtpText) ? exports.InitMFAOTPScreenText.fromJSON(object.initMfaOtpText) : undefined,
            initMfaU2fText: isSet(object.initMfaU2fText) ? exports.InitMFAU2FScreenText.fromJSON(object.initMfaU2fText) : undefined,
            initMfaDoneText: isSet(object.initMfaDoneText)
                ? exports.InitMFADoneScreenText.fromJSON(object.initMfaDoneText)
                : undefined,
            mfaProvidersText: isSet(object.mfaProvidersText) ? exports.MFAProvidersText.fromJSON(object.mfaProvidersText) : undefined,
            verifyMfaOtpText: isSet(object.verifyMfaOtpText)
                ? exports.VerifyMFAOTPScreenText.fromJSON(object.verifyMfaOtpText)
                : undefined,
            verifyMfaU2fText: isSet(object.verifyMfaU2fText)
                ? exports.VerifyMFAU2FScreenText.fromJSON(object.verifyMfaU2fText)
                : undefined,
            passwordlessText: isSet(object.passwordlessText)
                ? exports.PasswordlessScreenText.fromJSON(object.passwordlessText)
                : undefined,
            passwordChangeText: isSet(object.passwordChangeText)
                ? exports.PasswordChangeScreenText.fromJSON(object.passwordChangeText)
                : undefined,
            passwordChangeDoneText: isSet(object.passwordChangeDoneText)
                ? exports.PasswordChangeDoneScreenText.fromJSON(object.passwordChangeDoneText)
                : undefined,
            passwordResetDoneText: isSet(object.passwordResetDoneText)
                ? exports.PasswordResetDoneScreenText.fromJSON(object.passwordResetDoneText)
                : undefined,
            registrationOptionText: isSet(object.registrationOptionText)
                ? exports.RegistrationOptionScreenText.fromJSON(object.registrationOptionText)
                : undefined,
            registrationUserText: isSet(object.registrationUserText)
                ? exports.RegistrationUserScreenText.fromJSON(object.registrationUserText)
                : undefined,
            registrationOrgText: isSet(object.registrationOrgText)
                ? exports.RegistrationOrgScreenText.fromJSON(object.registrationOrgText)
                : undefined,
            linkingUserDoneText: isSet(object.linkingUserDoneText)
                ? exports.LinkingUserDoneScreenText.fromJSON(object.linkingUserDoneText)
                : undefined,
            externalUserNotFoundText: isSet(object.externalUserNotFoundText)
                ? exports.ExternalUserNotFoundScreenText.fromJSON(object.externalUserNotFoundText)
                : undefined,
            successLoginText: isSet(object.successLoginText)
                ? exports.SuccessLoginScreenText.fromJSON(object.successLoginText)
                : undefined,
            logoutText: isSet(object.logoutText) ? exports.LogoutDoneScreenText.fromJSON(object.logoutText) : undefined,
            footerText: isSet(object.footerText) ? exports.FooterText.fromJSON(object.footerText) : undefined,
            passwordlessPromptText: isSet(object.passwordlessPromptText)
                ? exports.PasswordlessPromptScreenText.fromJSON(object.passwordlessPromptText)
                : undefined,
            passwordlessRegistrationText: isSet(object.passwordlessRegistrationText)
                ? exports.PasswordlessRegistrationScreenText.fromJSON(object.passwordlessRegistrationText)
                : undefined,
            passwordlessRegistrationDoneText: isSet(object.passwordlessRegistrationDoneText)
                ? exports.PasswordlessRegistrationDoneScreenText.fromJSON(object.passwordlessRegistrationDoneText)
                : undefined,
            externalRegistrationUserOverviewText: isSet(object.externalRegistrationUserOverviewText)
                ? exports.ExternalRegistrationUserOverviewScreenText.fromJSON(object.externalRegistrationUserOverviewText)
                : undefined,
            isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.details !== undefined &&
            (obj.details = message.details ? object_1.ObjectDetails.toJSON(message.details) : undefined);
        message.selectAccountText !== undefined && (obj.selectAccountText = message.selectAccountText
            ? exports.SelectAccountScreenText.toJSON(message.selectAccountText)
            : undefined);
        message.loginText !== undefined &&
            (obj.loginText = message.loginText ? exports.LoginScreenText.toJSON(message.loginText) : undefined);
        message.passwordText !== undefined &&
            (obj.passwordText = message.passwordText ? exports.PasswordScreenText.toJSON(message.passwordText) : undefined);
        message.usernameChangeText !== undefined && (obj.usernameChangeText = message.usernameChangeText
            ? exports.UsernameChangeScreenText.toJSON(message.usernameChangeText)
            : undefined);
        message.usernameChangeDoneText !== undefined && (obj.usernameChangeDoneText = message.usernameChangeDoneText
            ? exports.UsernameChangeDoneScreenText.toJSON(message.usernameChangeDoneText)
            : undefined);
        message.initPasswordText !== undefined && (obj.initPasswordText = message.initPasswordText
            ? exports.InitPasswordScreenText.toJSON(message.initPasswordText)
            : undefined);
        message.initPasswordDoneText !== undefined && (obj.initPasswordDoneText = message.initPasswordDoneText
            ? exports.InitPasswordDoneScreenText.toJSON(message.initPasswordDoneText)
            : undefined);
        message.emailVerificationText !== undefined && (obj.emailVerificationText = message.emailVerificationText
            ? exports.EmailVerificationScreenText.toJSON(message.emailVerificationText)
            : undefined);
        message.emailVerificationDoneText !== undefined &&
            (obj.emailVerificationDoneText = message.emailVerificationDoneText
                ? exports.EmailVerificationDoneScreenText.toJSON(message.emailVerificationDoneText)
                : undefined);
        message.initializeUserText !== undefined && (obj.initializeUserText = message.initializeUserText
            ? exports.InitializeUserScreenText.toJSON(message.initializeUserText)
            : undefined);
        message.initializeDoneText !== undefined && (obj.initializeDoneText = message.initializeDoneText
            ? exports.InitializeUserDoneScreenText.toJSON(message.initializeDoneText)
            : undefined);
        message.initMfaPromptText !== undefined && (obj.initMfaPromptText = message.initMfaPromptText
            ? exports.InitMFAPromptScreenText.toJSON(message.initMfaPromptText)
            : undefined);
        message.initMfaOtpText !== undefined &&
            (obj.initMfaOtpText = message.initMfaOtpText ? exports.InitMFAOTPScreenText.toJSON(message.initMfaOtpText) : undefined);
        message.initMfaU2fText !== undefined &&
            (obj.initMfaU2fText = message.initMfaU2fText ? exports.InitMFAU2FScreenText.toJSON(message.initMfaU2fText) : undefined);
        message.initMfaDoneText !== undefined &&
            (obj.initMfaDoneText = message.initMfaDoneText
                ? exports.InitMFADoneScreenText.toJSON(message.initMfaDoneText)
                : undefined);
        message.mfaProvidersText !== undefined &&
            (obj.mfaProvidersText = message.mfaProvidersText ? exports.MFAProvidersText.toJSON(message.mfaProvidersText) : undefined);
        message.verifyMfaOtpText !== undefined && (obj.verifyMfaOtpText = message.verifyMfaOtpText
            ? exports.VerifyMFAOTPScreenText.toJSON(message.verifyMfaOtpText)
            : undefined);
        message.verifyMfaU2fText !== undefined && (obj.verifyMfaU2fText = message.verifyMfaU2fText
            ? exports.VerifyMFAU2FScreenText.toJSON(message.verifyMfaU2fText)
            : undefined);
        message.passwordlessText !== undefined && (obj.passwordlessText = message.passwordlessText
            ? exports.PasswordlessScreenText.toJSON(message.passwordlessText)
            : undefined);
        message.passwordChangeText !== undefined && (obj.passwordChangeText = message.passwordChangeText
            ? exports.PasswordChangeScreenText.toJSON(message.passwordChangeText)
            : undefined);
        message.passwordChangeDoneText !== undefined && (obj.passwordChangeDoneText = message.passwordChangeDoneText
            ? exports.PasswordChangeDoneScreenText.toJSON(message.passwordChangeDoneText)
            : undefined);
        message.passwordResetDoneText !== undefined && (obj.passwordResetDoneText = message.passwordResetDoneText
            ? exports.PasswordResetDoneScreenText.toJSON(message.passwordResetDoneText)
            : undefined);
        message.registrationOptionText !== undefined && (obj.registrationOptionText = message.registrationOptionText
            ? exports.RegistrationOptionScreenText.toJSON(message.registrationOptionText)
            : undefined);
        message.registrationUserText !== undefined && (obj.registrationUserText = message.registrationUserText
            ? exports.RegistrationUserScreenText.toJSON(message.registrationUserText)
            : undefined);
        message.registrationOrgText !== undefined && (obj.registrationOrgText = message.registrationOrgText
            ? exports.RegistrationOrgScreenText.toJSON(message.registrationOrgText)
            : undefined);
        message.linkingUserDoneText !== undefined && (obj.linkingUserDoneText = message.linkingUserDoneText
            ? exports.LinkingUserDoneScreenText.toJSON(message.linkingUserDoneText)
            : undefined);
        message.externalUserNotFoundText !== undefined && (obj.externalUserNotFoundText = message.externalUserNotFoundText
            ? exports.ExternalUserNotFoundScreenText.toJSON(message.externalUserNotFoundText)
            : undefined);
        message.successLoginText !== undefined && (obj.successLoginText = message.successLoginText
            ? exports.SuccessLoginScreenText.toJSON(message.successLoginText)
            : undefined);
        message.logoutText !== undefined &&
            (obj.logoutText = message.logoutText ? exports.LogoutDoneScreenText.toJSON(message.logoutText) : undefined);
        message.footerText !== undefined &&
            (obj.footerText = message.footerText ? exports.FooterText.toJSON(message.footerText) : undefined);
        message.passwordlessPromptText !== undefined && (obj.passwordlessPromptText = message.passwordlessPromptText
            ? exports.PasswordlessPromptScreenText.toJSON(message.passwordlessPromptText)
            : undefined);
        message.passwordlessRegistrationText !== undefined &&
            (obj.passwordlessRegistrationText = message.passwordlessRegistrationText
                ? exports.PasswordlessRegistrationScreenText.toJSON(message.passwordlessRegistrationText)
                : undefined);
        message.passwordlessRegistrationDoneText !== undefined &&
            (obj.passwordlessRegistrationDoneText = message.passwordlessRegistrationDoneText
                ? exports.PasswordlessRegistrationDoneScreenText.toJSON(message.passwordlessRegistrationDoneText)
                : undefined);
        message.externalRegistrationUserOverviewText !== undefined &&
            (obj.externalRegistrationUserOverviewText = message.externalRegistrationUserOverviewText
                ? exports.ExternalRegistrationUserOverviewScreenText.toJSON(message.externalRegistrationUserOverviewText)
                : undefined);
        message.isDefault !== undefined && (obj.isDefault = message.isDefault);
        return obj;
    },
    create(base) {
        return exports.LoginCustomText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginCustomText();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.selectAccountText = (object.selectAccountText !== undefined && object.selectAccountText !== null)
            ? exports.SelectAccountScreenText.fromPartial(object.selectAccountText)
            : undefined;
        message.loginText = (object.loginText !== undefined && object.loginText !== null)
            ? exports.LoginScreenText.fromPartial(object.loginText)
            : undefined;
        message.passwordText = (object.passwordText !== undefined && object.passwordText !== null)
            ? exports.PasswordScreenText.fromPartial(object.passwordText)
            : undefined;
        message.usernameChangeText = (object.usernameChangeText !== undefined && object.usernameChangeText !== null)
            ? exports.UsernameChangeScreenText.fromPartial(object.usernameChangeText)
            : undefined;
        message.usernameChangeDoneText =
            (object.usernameChangeDoneText !== undefined && object.usernameChangeDoneText !== null)
                ? exports.UsernameChangeDoneScreenText.fromPartial(object.usernameChangeDoneText)
                : undefined;
        message.initPasswordText = (object.initPasswordText !== undefined && object.initPasswordText !== null)
            ? exports.InitPasswordScreenText.fromPartial(object.initPasswordText)
            : undefined;
        message.initPasswordDoneText = (object.initPasswordDoneText !== undefined && object.initPasswordDoneText !== null)
            ? exports.InitPasswordDoneScreenText.fromPartial(object.initPasswordDoneText)
            : undefined;
        message.emailVerificationText =
            (object.emailVerificationText !== undefined && object.emailVerificationText !== null)
                ? exports.EmailVerificationScreenText.fromPartial(object.emailVerificationText)
                : undefined;
        message.emailVerificationDoneText =
            (object.emailVerificationDoneText !== undefined && object.emailVerificationDoneText !== null)
                ? exports.EmailVerificationDoneScreenText.fromPartial(object.emailVerificationDoneText)
                : undefined;
        message.initializeUserText = (object.initializeUserText !== undefined && object.initializeUserText !== null)
            ? exports.InitializeUserScreenText.fromPartial(object.initializeUserText)
            : undefined;
        message.initializeDoneText = (object.initializeDoneText !== undefined && object.initializeDoneText !== null)
            ? exports.InitializeUserDoneScreenText.fromPartial(object.initializeDoneText)
            : undefined;
        message.initMfaPromptText = (object.initMfaPromptText !== undefined && object.initMfaPromptText !== null)
            ? exports.InitMFAPromptScreenText.fromPartial(object.initMfaPromptText)
            : undefined;
        message.initMfaOtpText = (object.initMfaOtpText !== undefined && object.initMfaOtpText !== null)
            ? exports.InitMFAOTPScreenText.fromPartial(object.initMfaOtpText)
            : undefined;
        message.initMfaU2fText = (object.initMfaU2fText !== undefined && object.initMfaU2fText !== null)
            ? exports.InitMFAU2FScreenText.fromPartial(object.initMfaU2fText)
            : undefined;
        message.initMfaDoneText = (object.initMfaDoneText !== undefined && object.initMfaDoneText !== null)
            ? exports.InitMFADoneScreenText.fromPartial(object.initMfaDoneText)
            : undefined;
        message.mfaProvidersText = (object.mfaProvidersText !== undefined && object.mfaProvidersText !== null)
            ? exports.MFAProvidersText.fromPartial(object.mfaProvidersText)
            : undefined;
        message.verifyMfaOtpText = (object.verifyMfaOtpText !== undefined && object.verifyMfaOtpText !== null)
            ? exports.VerifyMFAOTPScreenText.fromPartial(object.verifyMfaOtpText)
            : undefined;
        message.verifyMfaU2fText = (object.verifyMfaU2fText !== undefined && object.verifyMfaU2fText !== null)
            ? exports.VerifyMFAU2FScreenText.fromPartial(object.verifyMfaU2fText)
            : undefined;
        message.passwordlessText = (object.passwordlessText !== undefined && object.passwordlessText !== null)
            ? exports.PasswordlessScreenText.fromPartial(object.passwordlessText)
            : undefined;
        message.passwordChangeText = (object.passwordChangeText !== undefined && object.passwordChangeText !== null)
            ? exports.PasswordChangeScreenText.fromPartial(object.passwordChangeText)
            : undefined;
        message.passwordChangeDoneText =
            (object.passwordChangeDoneText !== undefined && object.passwordChangeDoneText !== null)
                ? exports.PasswordChangeDoneScreenText.fromPartial(object.passwordChangeDoneText)
                : undefined;
        message.passwordResetDoneText =
            (object.passwordResetDoneText !== undefined && object.passwordResetDoneText !== null)
                ? exports.PasswordResetDoneScreenText.fromPartial(object.passwordResetDoneText)
                : undefined;
        message.registrationOptionText =
            (object.registrationOptionText !== undefined && object.registrationOptionText !== null)
                ? exports.RegistrationOptionScreenText.fromPartial(object.registrationOptionText)
                : undefined;
        message.registrationUserText = (object.registrationUserText !== undefined && object.registrationUserText !== null)
            ? exports.RegistrationUserScreenText.fromPartial(object.registrationUserText)
            : undefined;
        message.registrationOrgText = (object.registrationOrgText !== undefined && object.registrationOrgText !== null)
            ? exports.RegistrationOrgScreenText.fromPartial(object.registrationOrgText)
            : undefined;
        message.linkingUserDoneText = (object.linkingUserDoneText !== undefined && object.linkingUserDoneText !== null)
            ? exports.LinkingUserDoneScreenText.fromPartial(object.linkingUserDoneText)
            : undefined;
        message.externalUserNotFoundText =
            (object.externalUserNotFoundText !== undefined && object.externalUserNotFoundText !== null)
                ? exports.ExternalUserNotFoundScreenText.fromPartial(object.externalUserNotFoundText)
                : undefined;
        message.successLoginText = (object.successLoginText !== undefined && object.successLoginText !== null)
            ? exports.SuccessLoginScreenText.fromPartial(object.successLoginText)
            : undefined;
        message.logoutText = (object.logoutText !== undefined && object.logoutText !== null)
            ? exports.LogoutDoneScreenText.fromPartial(object.logoutText)
            : undefined;
        message.footerText = (object.footerText !== undefined && object.footerText !== null)
            ? exports.FooterText.fromPartial(object.footerText)
            : undefined;
        message.passwordlessPromptText =
            (object.passwordlessPromptText !== undefined && object.passwordlessPromptText !== null)
                ? exports.PasswordlessPromptScreenText.fromPartial(object.passwordlessPromptText)
                : undefined;
        message.passwordlessRegistrationText =
            (object.passwordlessRegistrationText !== undefined && object.passwordlessRegistrationText !== null)
                ? exports.PasswordlessRegistrationScreenText.fromPartial(object.passwordlessRegistrationText)
                : undefined;
        message.passwordlessRegistrationDoneText =
            (object.passwordlessRegistrationDoneText !== undefined && object.passwordlessRegistrationDoneText !== null)
                ? exports.PasswordlessRegistrationDoneScreenText.fromPartial(object.passwordlessRegistrationDoneText)
                : undefined;
        message.externalRegistrationUserOverviewText =
            (object.externalRegistrationUserOverviewText !== undefined &&
                object.externalRegistrationUserOverviewText !== null)
                ? exports.ExternalRegistrationUserOverviewScreenText.fromPartial(object.externalRegistrationUserOverviewText)
                : undefined;
        message.isDefault = object.isDefault ?? false;
        return message;
    },
};
function createBaseSelectAccountScreenText() {
    return {
        title: "",
        description: "",
        titleLinkingProcess: "",
        descriptionLinkingProcess: "",
        otherUser: "",
        sessionStateActive: "",
        sessionStateInactive: "",
        userMustBeMemberOfOrg: "",
    };
}
exports.SelectAccountScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.titleLinkingProcess !== "") {
            writer.uint32(26).string(message.titleLinkingProcess);
        }
        if (message.descriptionLinkingProcess !== "") {
            writer.uint32(34).string(message.descriptionLinkingProcess);
        }
        if (message.otherUser !== "") {
            writer.uint32(42).string(message.otherUser);
        }
        if (message.sessionStateActive !== "") {
            writer.uint32(50).string(message.sessionStateActive);
        }
        if (message.sessionStateInactive !== "") {
            writer.uint32(58).string(message.sessionStateInactive);
        }
        if (message.userMustBeMemberOfOrg !== "") {
            writer.uint32(66).string(message.userMustBeMemberOfOrg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSelectAccountScreenText();
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
                    message.titleLinkingProcess = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.descriptionLinkingProcess = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.otherUser = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.sessionStateActive = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.sessionStateInactive = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.userMustBeMemberOfOrg = reader.string();
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
            titleLinkingProcess: isSet(object.titleLinkingProcess) ? String(object.titleLinkingProcess) : "",
            descriptionLinkingProcess: isSet(object.descriptionLinkingProcess)
                ? String(object.descriptionLinkingProcess)
                : "",
            otherUser: isSet(object.otherUser) ? String(object.otherUser) : "",
            sessionStateActive: isSet(object.sessionStateActive) ? String(object.sessionStateActive) : "",
            sessionStateInactive: isSet(object.sessionStateInactive) ? String(object.sessionStateInactive) : "",
            userMustBeMemberOfOrg: isSet(object.userMustBeMemberOfOrg) ? String(object.userMustBeMemberOfOrg) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.titleLinkingProcess !== undefined && (obj.titleLinkingProcess = message.titleLinkingProcess);
        message.descriptionLinkingProcess !== undefined &&
            (obj.descriptionLinkingProcess = message.descriptionLinkingProcess);
        message.otherUser !== undefined && (obj.otherUser = message.otherUser);
        message.sessionStateActive !== undefined && (obj.sessionStateActive = message.sessionStateActive);
        message.sessionStateInactive !== undefined && (obj.sessionStateInactive = message.sessionStateInactive);
        message.userMustBeMemberOfOrg !== undefined && (obj.userMustBeMemberOfOrg = message.userMustBeMemberOfOrg);
        return obj;
    },
    create(base) {
        return exports.SelectAccountScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSelectAccountScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.titleLinkingProcess = object.titleLinkingProcess ?? "";
        message.descriptionLinkingProcess = object.descriptionLinkingProcess ?? "";
        message.otherUser = object.otherUser ?? "";
        message.sessionStateActive = object.sessionStateActive ?? "";
        message.sessionStateInactive = object.sessionStateInactive ?? "";
        message.userMustBeMemberOfOrg = object.userMustBeMemberOfOrg ?? "";
        return message;
    },
};
function createBaseLoginScreenText() {
    return {
        title: "",
        description: "",
        titleLinkingProcess: "",
        descriptionLinkingProcess: "",
        userMustBeMemberOfOrg: "",
        loginNameLabel: "",
        registerButtonText: "",
        nextButtonText: "",
        externalUserDescription: "",
        userNamePlaceholder: "",
        loginNamePlaceholder: "",
    };
}
exports.LoginScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.titleLinkingProcess !== "") {
            writer.uint32(26).string(message.titleLinkingProcess);
        }
        if (message.descriptionLinkingProcess !== "") {
            writer.uint32(34).string(message.descriptionLinkingProcess);
        }
        if (message.userMustBeMemberOfOrg !== "") {
            writer.uint32(42).string(message.userMustBeMemberOfOrg);
        }
        if (message.loginNameLabel !== "") {
            writer.uint32(50).string(message.loginNameLabel);
        }
        if (message.registerButtonText !== "") {
            writer.uint32(58).string(message.registerButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(66).string(message.nextButtonText);
        }
        if (message.externalUserDescription !== "") {
            writer.uint32(74).string(message.externalUserDescription);
        }
        if (message.userNamePlaceholder !== "") {
            writer.uint32(82).string(message.userNamePlaceholder);
        }
        if (message.loginNamePlaceholder !== "") {
            writer.uint32(90).string(message.loginNamePlaceholder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginScreenText();
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
                    message.titleLinkingProcess = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.descriptionLinkingProcess = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.userMustBeMemberOfOrg = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.loginNameLabel = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.registerButtonText = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.externalUserDescription = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.userNamePlaceholder = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.loginNamePlaceholder = reader.string();
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
            titleLinkingProcess: isSet(object.titleLinkingProcess) ? String(object.titleLinkingProcess) : "",
            descriptionLinkingProcess: isSet(object.descriptionLinkingProcess)
                ? String(object.descriptionLinkingProcess)
                : "",
            userMustBeMemberOfOrg: isSet(object.userMustBeMemberOfOrg) ? String(object.userMustBeMemberOfOrg) : "",
            loginNameLabel: isSet(object.loginNameLabel) ? String(object.loginNameLabel) : "",
            registerButtonText: isSet(object.registerButtonText) ? String(object.registerButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            externalUserDescription: isSet(object.externalUserDescription) ? String(object.externalUserDescription) : "",
            userNamePlaceholder: isSet(object.userNamePlaceholder) ? String(object.userNamePlaceholder) : "",
            loginNamePlaceholder: isSet(object.loginNamePlaceholder) ? String(object.loginNamePlaceholder) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.titleLinkingProcess !== undefined && (obj.titleLinkingProcess = message.titleLinkingProcess);
        message.descriptionLinkingProcess !== undefined &&
            (obj.descriptionLinkingProcess = message.descriptionLinkingProcess);
        message.userMustBeMemberOfOrg !== undefined && (obj.userMustBeMemberOfOrg = message.userMustBeMemberOfOrg);
        message.loginNameLabel !== undefined && (obj.loginNameLabel = message.loginNameLabel);
        message.registerButtonText !== undefined && (obj.registerButtonText = message.registerButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.externalUserDescription !== undefined && (obj.externalUserDescription = message.externalUserDescription);
        message.userNamePlaceholder !== undefined && (obj.userNamePlaceholder = message.userNamePlaceholder);
        message.loginNamePlaceholder !== undefined && (obj.loginNamePlaceholder = message.loginNamePlaceholder);
        return obj;
    },
    create(base) {
        return exports.LoginScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.titleLinkingProcess = object.titleLinkingProcess ?? "";
        message.descriptionLinkingProcess = object.descriptionLinkingProcess ?? "";
        message.userMustBeMemberOfOrg = object.userMustBeMemberOfOrg ?? "";
        message.loginNameLabel = object.loginNameLabel ?? "";
        message.registerButtonText = object.registerButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.externalUserDescription = object.externalUserDescription ?? "";
        message.userNamePlaceholder = object.userNamePlaceholder ?? "";
        message.loginNamePlaceholder = object.loginNamePlaceholder ?? "";
        return message;
    },
};
function createBasePasswordScreenText() {
    return {
        title: "",
        description: "",
        passwordLabel: "",
        resetLinkText: "",
        backButtonText: "",
        nextButtonText: "",
        minLength: "",
        hasUppercase: "",
        hasLowercase: "",
        hasNumber: "",
        hasSymbol: "",
        confirmation: "",
    };
}
exports.PasswordScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.passwordLabel !== "") {
            writer.uint32(26).string(message.passwordLabel);
        }
        if (message.resetLinkText !== "") {
            writer.uint32(34).string(message.resetLinkText);
        }
        if (message.backButtonText !== "") {
            writer.uint32(42).string(message.backButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(50).string(message.nextButtonText);
        }
        if (message.minLength !== "") {
            writer.uint32(58).string(message.minLength);
        }
        if (message.hasUppercase !== "") {
            writer.uint32(66).string(message.hasUppercase);
        }
        if (message.hasLowercase !== "") {
            writer.uint32(74).string(message.hasLowercase);
        }
        if (message.hasNumber !== "") {
            writer.uint32(82).string(message.hasNumber);
        }
        if (message.hasSymbol !== "") {
            writer.uint32(90).string(message.hasSymbol);
        }
        if (message.confirmation !== "") {
            writer.uint32(98).string(message.confirmation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordScreenText();
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
                    message.passwordLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.resetLinkText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.backButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.minLength = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.hasUppercase = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.hasLowercase = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.hasNumber = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.hasSymbol = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.confirmation = reader.string();
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
            passwordLabel: isSet(object.passwordLabel) ? String(object.passwordLabel) : "",
            resetLinkText: isSet(object.resetLinkText) ? String(object.resetLinkText) : "",
            backButtonText: isSet(object.backButtonText) ? String(object.backButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            minLength: isSet(object.minLength) ? String(object.minLength) : "",
            hasUppercase: isSet(object.hasUppercase) ? String(object.hasUppercase) : "",
            hasLowercase: isSet(object.hasLowercase) ? String(object.hasLowercase) : "",
            hasNumber: isSet(object.hasNumber) ? String(object.hasNumber) : "",
            hasSymbol: isSet(object.hasSymbol) ? String(object.hasSymbol) : "",
            confirmation: isSet(object.confirmation) ? String(object.confirmation) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.passwordLabel !== undefined && (obj.passwordLabel = message.passwordLabel);
        message.resetLinkText !== undefined && (obj.resetLinkText = message.resetLinkText);
        message.backButtonText !== undefined && (obj.backButtonText = message.backButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.minLength !== undefined && (obj.minLength = message.minLength);
        message.hasUppercase !== undefined && (obj.hasUppercase = message.hasUppercase);
        message.hasLowercase !== undefined && (obj.hasLowercase = message.hasLowercase);
        message.hasNumber !== undefined && (obj.hasNumber = message.hasNumber);
        message.hasSymbol !== undefined && (obj.hasSymbol = message.hasSymbol);
        message.confirmation !== undefined && (obj.confirmation = message.confirmation);
        return obj;
    },
    create(base) {
        return exports.PasswordScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.passwordLabel = object.passwordLabel ?? "";
        message.resetLinkText = object.resetLinkText ?? "";
        message.backButtonText = object.backButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.minLength = object.minLength ?? "";
        message.hasUppercase = object.hasUppercase ?? "";
        message.hasLowercase = object.hasLowercase ?? "";
        message.hasNumber = object.hasNumber ?? "";
        message.hasSymbol = object.hasSymbol ?? "";
        message.confirmation = object.confirmation ?? "";
        return message;
    },
};
function createBaseUsernameChangeScreenText() {
    return { title: "", description: "", usernameLabel: "", cancelButtonText: "", nextButtonText: "" };
}
exports.UsernameChangeScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.usernameLabel !== "") {
            writer.uint32(26).string(message.usernameLabel);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(34).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(42).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUsernameChangeScreenText();
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
                    message.usernameLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.nextButtonText = reader.string();
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
            usernameLabel: isSet(object.usernameLabel) ? String(object.usernameLabel) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.usernameLabel !== undefined && (obj.usernameLabel = message.usernameLabel);
        message.cancelButtonText !== undefined && (obj.cancelButtonText = message.cancelButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.UsernameChangeScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUsernameChangeScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.usernameLabel = object.usernameLabel ?? "";
        message.cancelButtonText = object.cancelButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseUsernameChangeDoneScreenText() {
    return { title: "", description: "", nextButtonText: "" };
}
exports.UsernameChangeDoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUsernameChangeDoneScreenText();
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
                    message.nextButtonText = reader.string();
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
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.UsernameChangeDoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUsernameChangeDoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseInitPasswordScreenText() {
    return {
        title: "",
        description: "",
        codeLabel: "",
        newPasswordLabel: "",
        newPasswordConfirmLabel: "",
        nextButtonText: "",
        resendButtonText: "",
    };
}
exports.InitPasswordScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.codeLabel !== "") {
            writer.uint32(26).string(message.codeLabel);
        }
        if (message.newPasswordLabel !== "") {
            writer.uint32(34).string(message.newPasswordLabel);
        }
        if (message.newPasswordConfirmLabel !== "") {
            writer.uint32(42).string(message.newPasswordConfirmLabel);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(50).string(message.nextButtonText);
        }
        if (message.resendButtonText !== "") {
            writer.uint32(58).string(message.resendButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitPasswordScreenText();
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
                    message.codeLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newPasswordLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.newPasswordConfirmLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.resendButtonText = reader.string();
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
            codeLabel: isSet(object.codeLabel) ? String(object.codeLabel) : "",
            newPasswordLabel: isSet(object.newPasswordLabel) ? String(object.newPasswordLabel) : "",
            newPasswordConfirmLabel: isSet(object.newPasswordConfirmLabel) ? String(object.newPasswordConfirmLabel) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            resendButtonText: isSet(object.resendButtonText) ? String(object.resendButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.codeLabel !== undefined && (obj.codeLabel = message.codeLabel);
        message.newPasswordLabel !== undefined && (obj.newPasswordLabel = message.newPasswordLabel);
        message.newPasswordConfirmLabel !== undefined && (obj.newPasswordConfirmLabel = message.newPasswordConfirmLabel);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.resendButtonText !== undefined && (obj.resendButtonText = message.resendButtonText);
        return obj;
    },
    create(base) {
        return exports.InitPasswordScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInitPasswordScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeLabel = object.codeLabel ?? "";
        message.newPasswordLabel = object.newPasswordLabel ?? "";
        message.newPasswordConfirmLabel = object.newPasswordConfirmLabel ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.resendButtonText = object.resendButtonText ?? "";
        return message;
    },
};
function createBaseInitPasswordDoneScreenText() {
    return { title: "", description: "", nextButtonText: "", cancelButtonText: "" };
}
exports.InitPasswordDoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(34).string(message.cancelButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitPasswordDoneScreenText();
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
                    message.nextButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
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
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? String(object.cancelButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.cancelButtonText !== undefined && (obj.cancelButtonText = message.cancelButtonText);
        return obj;
    },
    create(base) {
        return exports.InitPasswordDoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInitPasswordDoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.cancelButtonText = object.cancelButtonText ?? "";
        return message;
    },
};
function createBaseEmailVerificationScreenText() {
    return { title: "", description: "", codeLabel: "", nextButtonText: "", resendButtonText: "" };
}
exports.EmailVerificationScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.codeLabel !== "") {
            writer.uint32(26).string(message.codeLabel);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        if (message.resendButtonText !== "") {
            writer.uint32(42).string(message.resendButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailVerificationScreenText();
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
                    message.codeLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.resendButtonText = reader.string();
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
            codeLabel: isSet(object.codeLabel) ? String(object.codeLabel) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            resendButtonText: isSet(object.resendButtonText) ? String(object.resendButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.codeLabel !== undefined && (obj.codeLabel = message.codeLabel);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.resendButtonText !== undefined && (obj.resendButtonText = message.resendButtonText);
        return obj;
    },
    create(base) {
        return exports.EmailVerificationScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEmailVerificationScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeLabel = object.codeLabel ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.resendButtonText = object.resendButtonText ?? "";
        return message;
    },
};
function createBaseEmailVerificationDoneScreenText() {
    return { title: "", description: "", nextButtonText: "", cancelButtonText: "", loginButtonText: "" };
}
exports.EmailVerificationDoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(34).string(message.cancelButtonText);
        }
        if (message.loginButtonText !== "") {
            writer.uint32(42).string(message.loginButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailVerificationDoneScreenText();
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
                    message.nextButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.loginButtonText = reader.string();
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
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? String(object.cancelButtonText) : "",
            loginButtonText: isSet(object.loginButtonText) ? String(object.loginButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.cancelButtonText !== undefined && (obj.cancelButtonText = message.cancelButtonText);
        message.loginButtonText !== undefined && (obj.loginButtonText = message.loginButtonText);
        return obj;
    },
    create(base) {
        return exports.EmailVerificationDoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEmailVerificationDoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.cancelButtonText = object.cancelButtonText ?? "";
        message.loginButtonText = object.loginButtonText ?? "";
        return message;
    },
};
function createBaseInitializeUserScreenText() {
    return {
        title: "",
        description: "",
        codeLabel: "",
        newPasswordLabel: "",
        newPasswordConfirmLabel: "",
        resendButtonText: "",
        nextButtonText: "",
    };
}
exports.InitializeUserScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.codeLabel !== "") {
            writer.uint32(26).string(message.codeLabel);
        }
        if (message.newPasswordLabel !== "") {
            writer.uint32(34).string(message.newPasswordLabel);
        }
        if (message.newPasswordConfirmLabel !== "") {
            writer.uint32(42).string(message.newPasswordConfirmLabel);
        }
        if (message.resendButtonText !== "") {
            writer.uint32(50).string(message.resendButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(58).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitializeUserScreenText();
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
                    message.codeLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newPasswordLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.newPasswordConfirmLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.resendButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nextButtonText = reader.string();
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
            codeLabel: isSet(object.codeLabel) ? String(object.codeLabel) : "",
            newPasswordLabel: isSet(object.newPasswordLabel) ? String(object.newPasswordLabel) : "",
            newPasswordConfirmLabel: isSet(object.newPasswordConfirmLabel) ? String(object.newPasswordConfirmLabel) : "",
            resendButtonText: isSet(object.resendButtonText) ? String(object.resendButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.codeLabel !== undefined && (obj.codeLabel = message.codeLabel);
        message.newPasswordLabel !== undefined && (obj.newPasswordLabel = message.newPasswordLabel);
        message.newPasswordConfirmLabel !== undefined && (obj.newPasswordConfirmLabel = message.newPasswordConfirmLabel);
        message.resendButtonText !== undefined && (obj.resendButtonText = message.resendButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.InitializeUserScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInitializeUserScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeLabel = object.codeLabel ?? "";
        message.newPasswordLabel = object.newPasswordLabel ?? "";
        message.newPasswordConfirmLabel = object.newPasswordConfirmLabel ?? "";
        message.resendButtonText = object.resendButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseInitializeUserDoneScreenText() {
    return { title: "", description: "", cancelButtonText: "", nextButtonText: "" };
}
exports.InitializeUserDoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(26).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitializeUserDoneScreenText();
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
                    message.cancelButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
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
            cancelButtonText: isSet(object.cancelButtonText) ? String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.cancelButtonText !== undefined && (obj.cancelButtonText = message.cancelButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.InitializeUserDoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInitializeUserDoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.cancelButtonText = object.cancelButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseInitMFAPromptScreenText() {
    return { title: "", description: "", otpOption: "", u2fOption: "", skipButtonText: "", nextButtonText: "" };
}
exports.InitMFAPromptScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.otpOption !== "") {
            writer.uint32(26).string(message.otpOption);
        }
        if (message.u2fOption !== "") {
            writer.uint32(34).string(message.u2fOption);
        }
        if (message.skipButtonText !== "") {
            writer.uint32(42).string(message.skipButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(50).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitMFAPromptScreenText();
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
                    message.otpOption = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.u2fOption = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.skipButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextButtonText = reader.string();
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
            otpOption: isSet(object.otpOption) ? String(object.otpOption) : "",
            u2fOption: isSet(object.u2fOption) ? String(object.u2fOption) : "",
            skipButtonText: isSet(object.skipButtonText) ? String(object.skipButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.otpOption !== undefined && (obj.otpOption = message.otpOption);
        message.u2fOption !== undefined && (obj.u2fOption = message.u2fOption);
        message.skipButtonText !== undefined && (obj.skipButtonText = message.skipButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.InitMFAPromptScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInitMFAPromptScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.otpOption = object.otpOption ?? "";
        message.u2fOption = object.u2fOption ?? "";
        message.skipButtonText = object.skipButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseInitMFAOTPScreenText() {
    return {
        title: "",
        description: "",
        descriptionOtp: "",
        secretLabel: "",
        codeLabel: "",
        nextButtonText: "",
        cancelButtonText: "",
    };
}
exports.InitMFAOTPScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.descriptionOtp !== "") {
            writer.uint32(26).string(message.descriptionOtp);
        }
        if (message.secretLabel !== "") {
            writer.uint32(34).string(message.secretLabel);
        }
        if (message.codeLabel !== "") {
            writer.uint32(42).string(message.codeLabel);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(50).string(message.nextButtonText);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(58).string(message.cancelButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitMFAOTPScreenText();
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
                    message.descriptionOtp = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.secretLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.codeLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
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
            descriptionOtp: isSet(object.descriptionOtp) ? String(object.descriptionOtp) : "",
            secretLabel: isSet(object.secretLabel) ? String(object.secretLabel) : "",
            codeLabel: isSet(object.codeLabel) ? String(object.codeLabel) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? String(object.cancelButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.descriptionOtp !== undefined && (obj.descriptionOtp = message.descriptionOtp);
        message.secretLabel !== undefined && (obj.secretLabel = message.secretLabel);
        message.codeLabel !== undefined && (obj.codeLabel = message.codeLabel);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.cancelButtonText !== undefined && (obj.cancelButtonText = message.cancelButtonText);
        return obj;
    },
    create(base) {
        return exports.InitMFAOTPScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInitMFAOTPScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.descriptionOtp = object.descriptionOtp ?? "";
        message.secretLabel = object.secretLabel ?? "";
        message.codeLabel = object.codeLabel ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.cancelButtonText = object.cancelButtonText ?? "";
        return message;
    },
};
function createBaseInitMFAU2FScreenText() {
    return {
        title: "",
        description: "",
        tokenNameLabel: "",
        notSupported: "",
        registerTokenButtonText: "",
        errorRetry: "",
    };
}
exports.InitMFAU2FScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.tokenNameLabel !== "") {
            writer.uint32(26).string(message.tokenNameLabel);
        }
        if (message.notSupported !== "") {
            writer.uint32(34).string(message.notSupported);
        }
        if (message.registerTokenButtonText !== "") {
            writer.uint32(42).string(message.registerTokenButtonText);
        }
        if (message.errorRetry !== "") {
            writer.uint32(50).string(message.errorRetry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitMFAU2FScreenText();
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
                    message.tokenNameLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.notSupported = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.registerTokenButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.errorRetry = reader.string();
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
            tokenNameLabel: isSet(object.tokenNameLabel) ? String(object.tokenNameLabel) : "",
            notSupported: isSet(object.notSupported) ? String(object.notSupported) : "",
            registerTokenButtonText: isSet(object.registerTokenButtonText) ? String(object.registerTokenButtonText) : "",
            errorRetry: isSet(object.errorRetry) ? String(object.errorRetry) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.tokenNameLabel !== undefined && (obj.tokenNameLabel = message.tokenNameLabel);
        message.notSupported !== undefined && (obj.notSupported = message.notSupported);
        message.registerTokenButtonText !== undefined && (obj.registerTokenButtonText = message.registerTokenButtonText);
        message.errorRetry !== undefined && (obj.errorRetry = message.errorRetry);
        return obj;
    },
    create(base) {
        return exports.InitMFAU2FScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInitMFAU2FScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.tokenNameLabel = object.tokenNameLabel ?? "";
        message.notSupported = object.notSupported ?? "";
        message.registerTokenButtonText = object.registerTokenButtonText ?? "";
        message.errorRetry = object.errorRetry ?? "";
        return message;
    },
};
function createBaseInitMFADoneScreenText() {
    return { title: "", description: "", cancelButtonText: "", nextButtonText: "" };
}
exports.InitMFADoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(26).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitMFADoneScreenText();
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
                    message.cancelButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
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
            cancelButtonText: isSet(object.cancelButtonText) ? String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.cancelButtonText !== undefined && (obj.cancelButtonText = message.cancelButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.InitMFADoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInitMFADoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.cancelButtonText = object.cancelButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseMFAProvidersText() {
    return { chooseOther: "", otp: "", u2f: "" };
}
exports.MFAProvidersText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.chooseOther !== "") {
            writer.uint32(10).string(message.chooseOther);
        }
        if (message.otp !== "") {
            writer.uint32(18).string(message.otp);
        }
        if (message.u2f !== "") {
            writer.uint32(26).string(message.u2f);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMFAProvidersText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.chooseOther = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.otp = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.u2f = reader.string();
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
            chooseOther: isSet(object.chooseOther) ? String(object.chooseOther) : "",
            otp: isSet(object.otp) ? String(object.otp) : "",
            u2f: isSet(object.u2f) ? String(object.u2f) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chooseOther !== undefined && (obj.chooseOther = message.chooseOther);
        message.otp !== undefined && (obj.otp = message.otp);
        message.u2f !== undefined && (obj.u2f = message.u2f);
        return obj;
    },
    create(base) {
        return exports.MFAProvidersText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMFAProvidersText();
        message.chooseOther = object.chooseOther ?? "";
        message.otp = object.otp ?? "";
        message.u2f = object.u2f ?? "";
        return message;
    },
};
function createBaseVerifyMFAOTPScreenText() {
    return { title: "", description: "", codeLabel: "", nextButtonText: "" };
}
exports.VerifyMFAOTPScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.codeLabel !== "") {
            writer.uint32(26).string(message.codeLabel);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMFAOTPScreenText();
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
                    message.codeLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
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
            codeLabel: isSet(object.codeLabel) ? String(object.codeLabel) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.codeLabel !== undefined && (obj.codeLabel = message.codeLabel);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.VerifyMFAOTPScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMFAOTPScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeLabel = object.codeLabel ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseVerifyMFAU2FScreenText() {
    return { title: "", description: "", validateTokenText: "", notSupported: "", errorRetry: "" };
}
exports.VerifyMFAU2FScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.validateTokenText !== "") {
            writer.uint32(26).string(message.validateTokenText);
        }
        if (message.notSupported !== "") {
            writer.uint32(34).string(message.notSupported);
        }
        if (message.errorRetry !== "") {
            writer.uint32(42).string(message.errorRetry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMFAU2FScreenText();
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
                    message.validateTokenText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.notSupported = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.errorRetry = reader.string();
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
            validateTokenText: isSet(object.validateTokenText) ? String(object.validateTokenText) : "",
            notSupported: isSet(object.notSupported) ? String(object.notSupported) : "",
            errorRetry: isSet(object.errorRetry) ? String(object.errorRetry) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.validateTokenText !== undefined && (obj.validateTokenText = message.validateTokenText);
        message.notSupported !== undefined && (obj.notSupported = message.notSupported);
        message.errorRetry !== undefined && (obj.errorRetry = message.errorRetry);
        return obj;
    },
    create(base) {
        return exports.VerifyMFAU2FScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyMFAU2FScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.validateTokenText = object.validateTokenText ?? "";
        message.notSupported = object.notSupported ?? "";
        message.errorRetry = object.errorRetry ?? "";
        return message;
    },
};
function createBasePasswordlessScreenText() {
    return {
        title: "",
        description: "",
        loginWithPwButtonText: "",
        validateTokenButtonText: "",
        notSupported: "",
        errorRetry: "",
    };
}
exports.PasswordlessScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.loginWithPwButtonText !== "") {
            writer.uint32(26).string(message.loginWithPwButtonText);
        }
        if (message.validateTokenButtonText !== "") {
            writer.uint32(34).string(message.validateTokenButtonText);
        }
        if (message.notSupported !== "") {
            writer.uint32(42).string(message.notSupported);
        }
        if (message.errorRetry !== "") {
            writer.uint32(50).string(message.errorRetry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordlessScreenText();
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
                    message.loginWithPwButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.validateTokenButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.notSupported = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.errorRetry = reader.string();
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
            loginWithPwButtonText: isSet(object.loginWithPwButtonText) ? String(object.loginWithPwButtonText) : "",
            validateTokenButtonText: isSet(object.validateTokenButtonText) ? String(object.validateTokenButtonText) : "",
            notSupported: isSet(object.notSupported) ? String(object.notSupported) : "",
            errorRetry: isSet(object.errorRetry) ? String(object.errorRetry) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.loginWithPwButtonText !== undefined && (obj.loginWithPwButtonText = message.loginWithPwButtonText);
        message.validateTokenButtonText !== undefined && (obj.validateTokenButtonText = message.validateTokenButtonText);
        message.notSupported !== undefined && (obj.notSupported = message.notSupported);
        message.errorRetry !== undefined && (obj.errorRetry = message.errorRetry);
        return obj;
    },
    create(base) {
        return exports.PasswordlessScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordlessScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.loginWithPwButtonText = object.loginWithPwButtonText ?? "";
        message.validateTokenButtonText = object.validateTokenButtonText ?? "";
        message.notSupported = object.notSupported ?? "";
        message.errorRetry = object.errorRetry ?? "";
        return message;
    },
};
function createBasePasswordChangeScreenText() {
    return {
        title: "",
        description: "",
        oldPasswordLabel: "",
        newPasswordLabel: "",
        newPasswordConfirmLabel: "",
        cancelButtonText: "",
        nextButtonText: "",
    };
}
exports.PasswordChangeScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.oldPasswordLabel !== "") {
            writer.uint32(26).string(message.oldPasswordLabel);
        }
        if (message.newPasswordLabel !== "") {
            writer.uint32(34).string(message.newPasswordLabel);
        }
        if (message.newPasswordConfirmLabel !== "") {
            writer.uint32(42).string(message.newPasswordConfirmLabel);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(50).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(58).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordChangeScreenText();
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
                    message.oldPasswordLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newPasswordLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.newPasswordConfirmLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nextButtonText = reader.string();
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
            oldPasswordLabel: isSet(object.oldPasswordLabel) ? String(object.oldPasswordLabel) : "",
            newPasswordLabel: isSet(object.newPasswordLabel) ? String(object.newPasswordLabel) : "",
            newPasswordConfirmLabel: isSet(object.newPasswordConfirmLabel) ? String(object.newPasswordConfirmLabel) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.oldPasswordLabel !== undefined && (obj.oldPasswordLabel = message.oldPasswordLabel);
        message.newPasswordLabel !== undefined && (obj.newPasswordLabel = message.newPasswordLabel);
        message.newPasswordConfirmLabel !== undefined && (obj.newPasswordConfirmLabel = message.newPasswordConfirmLabel);
        message.cancelButtonText !== undefined && (obj.cancelButtonText = message.cancelButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.PasswordChangeScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordChangeScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.oldPasswordLabel = object.oldPasswordLabel ?? "";
        message.newPasswordLabel = object.newPasswordLabel ?? "";
        message.newPasswordConfirmLabel = object.newPasswordConfirmLabel ?? "";
        message.cancelButtonText = object.cancelButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBasePasswordChangeDoneScreenText() {
    return { title: "", description: "", nextButtonText: "" };
}
exports.PasswordChangeDoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordChangeDoneScreenText();
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
                    message.nextButtonText = reader.string();
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
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.PasswordChangeDoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordChangeDoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBasePasswordResetDoneScreenText() {
    return { title: "", description: "", nextButtonText: "" };
}
exports.PasswordResetDoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordResetDoneScreenText();
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
                    message.nextButtonText = reader.string();
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
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.PasswordResetDoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordResetDoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseRegistrationOptionScreenText() {
    return { title: "", description: "", userNameButtonText: "", externalLoginDescription: "", loginButtonText: "" };
}
exports.RegistrationOptionScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.userNameButtonText !== "") {
            writer.uint32(26).string(message.userNameButtonText);
        }
        if (message.externalLoginDescription !== "") {
            writer.uint32(34).string(message.externalLoginDescription);
        }
        if (message.loginButtonText !== "") {
            writer.uint32(42).string(message.loginButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegistrationOptionScreenText();
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
                    message.userNameButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.externalLoginDescription = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.loginButtonText = reader.string();
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
            userNameButtonText: isSet(object.userNameButtonText) ? String(object.userNameButtonText) : "",
            externalLoginDescription: isSet(object.externalLoginDescription) ? String(object.externalLoginDescription) : "",
            loginButtonText: isSet(object.loginButtonText) ? String(object.loginButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.userNameButtonText !== undefined && (obj.userNameButtonText = message.userNameButtonText);
        message.externalLoginDescription !== undefined && (obj.externalLoginDescription = message.externalLoginDescription);
        message.loginButtonText !== undefined && (obj.loginButtonText = message.loginButtonText);
        return obj;
    },
    create(base) {
        return exports.RegistrationOptionScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegistrationOptionScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.userNameButtonText = object.userNameButtonText ?? "";
        message.externalLoginDescription = object.externalLoginDescription ?? "";
        message.loginButtonText = object.loginButtonText ?? "";
        return message;
    },
};
function createBaseRegistrationUserScreenText() {
    return {
        title: "",
        description: "",
        descriptionOrgRegister: "",
        firstnameLabel: "",
        lastnameLabel: "",
        emailLabel: "",
        usernameLabel: "",
        languageLabel: "",
        genderLabel: "",
        passwordLabel: "",
        passwordConfirmLabel: "",
        tosAndPrivacyLabel: "",
        tosConfirm: "",
        tosLinkText: "",
        privacyConfirm: "",
        privacyLinkText: "",
        nextButtonText: "",
        backButtonText: "",
    };
}
exports.RegistrationUserScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.descriptionOrgRegister !== "") {
            writer.uint32(26).string(message.descriptionOrgRegister);
        }
        if (message.firstnameLabel !== "") {
            writer.uint32(34).string(message.firstnameLabel);
        }
        if (message.lastnameLabel !== "") {
            writer.uint32(42).string(message.lastnameLabel);
        }
        if (message.emailLabel !== "") {
            writer.uint32(50).string(message.emailLabel);
        }
        if (message.usernameLabel !== "") {
            writer.uint32(58).string(message.usernameLabel);
        }
        if (message.languageLabel !== "") {
            writer.uint32(66).string(message.languageLabel);
        }
        if (message.genderLabel !== "") {
            writer.uint32(74).string(message.genderLabel);
        }
        if (message.passwordLabel !== "") {
            writer.uint32(82).string(message.passwordLabel);
        }
        if (message.passwordConfirmLabel !== "") {
            writer.uint32(90).string(message.passwordConfirmLabel);
        }
        if (message.tosAndPrivacyLabel !== "") {
            writer.uint32(98).string(message.tosAndPrivacyLabel);
        }
        if (message.tosConfirm !== "") {
            writer.uint32(106).string(message.tosConfirm);
        }
        if (message.tosLinkText !== "") {
            writer.uint32(122).string(message.tosLinkText);
        }
        if (message.privacyConfirm !== "") {
            writer.uint32(130).string(message.privacyConfirm);
        }
        if (message.privacyLinkText !== "") {
            writer.uint32(146).string(message.privacyLinkText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(162).string(message.nextButtonText);
        }
        if (message.backButtonText !== "") {
            writer.uint32(170).string(message.backButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegistrationUserScreenText();
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
                    message.descriptionOrgRegister = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.firstnameLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastnameLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.emailLabel = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.usernameLabel = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.languageLabel = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.genderLabel = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.passwordLabel = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.passwordConfirmLabel = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.tosAndPrivacyLabel = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.tosConfirm = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.tosLinkText = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.privacyConfirm = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.privacyLinkText = reader.string();
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.backButtonText = reader.string();
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
            descriptionOrgRegister: isSet(object.descriptionOrgRegister) ? String(object.descriptionOrgRegister) : "",
            firstnameLabel: isSet(object.firstnameLabel) ? String(object.firstnameLabel) : "",
            lastnameLabel: isSet(object.lastnameLabel) ? String(object.lastnameLabel) : "",
            emailLabel: isSet(object.emailLabel) ? String(object.emailLabel) : "",
            usernameLabel: isSet(object.usernameLabel) ? String(object.usernameLabel) : "",
            languageLabel: isSet(object.languageLabel) ? String(object.languageLabel) : "",
            genderLabel: isSet(object.genderLabel) ? String(object.genderLabel) : "",
            passwordLabel: isSet(object.passwordLabel) ? String(object.passwordLabel) : "",
            passwordConfirmLabel: isSet(object.passwordConfirmLabel) ? String(object.passwordConfirmLabel) : "",
            tosAndPrivacyLabel: isSet(object.tosAndPrivacyLabel) ? String(object.tosAndPrivacyLabel) : "",
            tosConfirm: isSet(object.tosConfirm) ? String(object.tosConfirm) : "",
            tosLinkText: isSet(object.tosLinkText) ? String(object.tosLinkText) : "",
            privacyConfirm: isSet(object.privacyConfirm) ? String(object.privacyConfirm) : "",
            privacyLinkText: isSet(object.privacyLinkText) ? String(object.privacyLinkText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            backButtonText: isSet(object.backButtonText) ? String(object.backButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.descriptionOrgRegister !== undefined && (obj.descriptionOrgRegister = message.descriptionOrgRegister);
        message.firstnameLabel !== undefined && (obj.firstnameLabel = message.firstnameLabel);
        message.lastnameLabel !== undefined && (obj.lastnameLabel = message.lastnameLabel);
        message.emailLabel !== undefined && (obj.emailLabel = message.emailLabel);
        message.usernameLabel !== undefined && (obj.usernameLabel = message.usernameLabel);
        message.languageLabel !== undefined && (obj.languageLabel = message.languageLabel);
        message.genderLabel !== undefined && (obj.genderLabel = message.genderLabel);
        message.passwordLabel !== undefined && (obj.passwordLabel = message.passwordLabel);
        message.passwordConfirmLabel !== undefined && (obj.passwordConfirmLabel = message.passwordConfirmLabel);
        message.tosAndPrivacyLabel !== undefined && (obj.tosAndPrivacyLabel = message.tosAndPrivacyLabel);
        message.tosConfirm !== undefined && (obj.tosConfirm = message.tosConfirm);
        message.tosLinkText !== undefined && (obj.tosLinkText = message.tosLinkText);
        message.privacyConfirm !== undefined && (obj.privacyConfirm = message.privacyConfirm);
        message.privacyLinkText !== undefined && (obj.privacyLinkText = message.privacyLinkText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.backButtonText !== undefined && (obj.backButtonText = message.backButtonText);
        return obj;
    },
    create(base) {
        return exports.RegistrationUserScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegistrationUserScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.descriptionOrgRegister = object.descriptionOrgRegister ?? "";
        message.firstnameLabel = object.firstnameLabel ?? "";
        message.lastnameLabel = object.lastnameLabel ?? "";
        message.emailLabel = object.emailLabel ?? "";
        message.usernameLabel = object.usernameLabel ?? "";
        message.languageLabel = object.languageLabel ?? "";
        message.genderLabel = object.genderLabel ?? "";
        message.passwordLabel = object.passwordLabel ?? "";
        message.passwordConfirmLabel = object.passwordConfirmLabel ?? "";
        message.tosAndPrivacyLabel = object.tosAndPrivacyLabel ?? "";
        message.tosConfirm = object.tosConfirm ?? "";
        message.tosLinkText = object.tosLinkText ?? "";
        message.privacyConfirm = object.privacyConfirm ?? "";
        message.privacyLinkText = object.privacyLinkText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.backButtonText = object.backButtonText ?? "";
        return message;
    },
};
function createBaseExternalRegistrationUserOverviewScreenText() {
    return {
        title: "",
        description: "",
        emailLabel: "",
        usernameLabel: "",
        firstnameLabel: "",
        lastnameLabel: "",
        nicknameLabel: "",
        languageLabel: "",
        phoneLabel: "",
        tosAndPrivacyLabel: "",
        tosConfirm: "",
        tosLinkText: "",
        privacyLinkText: "",
        backButtonText: "",
        nextButtonText: "",
        privacyConfirm: "",
    };
}
exports.ExternalRegistrationUserOverviewScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.emailLabel !== "") {
            writer.uint32(26).string(message.emailLabel);
        }
        if (message.usernameLabel !== "") {
            writer.uint32(34).string(message.usernameLabel);
        }
        if (message.firstnameLabel !== "") {
            writer.uint32(42).string(message.firstnameLabel);
        }
        if (message.lastnameLabel !== "") {
            writer.uint32(50).string(message.lastnameLabel);
        }
        if (message.nicknameLabel !== "") {
            writer.uint32(58).string(message.nicknameLabel);
        }
        if (message.languageLabel !== "") {
            writer.uint32(66).string(message.languageLabel);
        }
        if (message.phoneLabel !== "") {
            writer.uint32(74).string(message.phoneLabel);
        }
        if (message.tosAndPrivacyLabel !== "") {
            writer.uint32(82).string(message.tosAndPrivacyLabel);
        }
        if (message.tosConfirm !== "") {
            writer.uint32(90).string(message.tosConfirm);
        }
        if (message.tosLinkText !== "") {
            writer.uint32(98).string(message.tosLinkText);
        }
        if (message.privacyLinkText !== "") {
            writer.uint32(114).string(message.privacyLinkText);
        }
        if (message.backButtonText !== "") {
            writer.uint32(122).string(message.backButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(130).string(message.nextButtonText);
        }
        if (message.privacyConfirm !== "") {
            writer.uint32(138).string(message.privacyConfirm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExternalRegistrationUserOverviewScreenText();
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
                    message.emailLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.usernameLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.firstnameLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.lastnameLabel = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nicknameLabel = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.languageLabel = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.phoneLabel = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.tosAndPrivacyLabel = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.tosConfirm = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.tosLinkText = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.privacyLinkText = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.backButtonText = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.privacyConfirm = reader.string();
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
            emailLabel: isSet(object.emailLabel) ? String(object.emailLabel) : "",
            usernameLabel: isSet(object.usernameLabel) ? String(object.usernameLabel) : "",
            firstnameLabel: isSet(object.firstnameLabel) ? String(object.firstnameLabel) : "",
            lastnameLabel: isSet(object.lastnameLabel) ? String(object.lastnameLabel) : "",
            nicknameLabel: isSet(object.nicknameLabel) ? String(object.nicknameLabel) : "",
            languageLabel: isSet(object.languageLabel) ? String(object.languageLabel) : "",
            phoneLabel: isSet(object.phoneLabel) ? String(object.phoneLabel) : "",
            tosAndPrivacyLabel: isSet(object.tosAndPrivacyLabel) ? String(object.tosAndPrivacyLabel) : "",
            tosConfirm: isSet(object.tosConfirm) ? String(object.tosConfirm) : "",
            tosLinkText: isSet(object.tosLinkText) ? String(object.tosLinkText) : "",
            privacyLinkText: isSet(object.privacyLinkText) ? String(object.privacyLinkText) : "",
            backButtonText: isSet(object.backButtonText) ? String(object.backButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            privacyConfirm: isSet(object.privacyConfirm) ? String(object.privacyConfirm) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.emailLabel !== undefined && (obj.emailLabel = message.emailLabel);
        message.usernameLabel !== undefined && (obj.usernameLabel = message.usernameLabel);
        message.firstnameLabel !== undefined && (obj.firstnameLabel = message.firstnameLabel);
        message.lastnameLabel !== undefined && (obj.lastnameLabel = message.lastnameLabel);
        message.nicknameLabel !== undefined && (obj.nicknameLabel = message.nicknameLabel);
        message.languageLabel !== undefined && (obj.languageLabel = message.languageLabel);
        message.phoneLabel !== undefined && (obj.phoneLabel = message.phoneLabel);
        message.tosAndPrivacyLabel !== undefined && (obj.tosAndPrivacyLabel = message.tosAndPrivacyLabel);
        message.tosConfirm !== undefined && (obj.tosConfirm = message.tosConfirm);
        message.tosLinkText !== undefined && (obj.tosLinkText = message.tosLinkText);
        message.privacyLinkText !== undefined && (obj.privacyLinkText = message.privacyLinkText);
        message.backButtonText !== undefined && (obj.backButtonText = message.backButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.privacyConfirm !== undefined && (obj.privacyConfirm = message.privacyConfirm);
        return obj;
    },
    create(base) {
        return exports.ExternalRegistrationUserOverviewScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExternalRegistrationUserOverviewScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.emailLabel = object.emailLabel ?? "";
        message.usernameLabel = object.usernameLabel ?? "";
        message.firstnameLabel = object.firstnameLabel ?? "";
        message.lastnameLabel = object.lastnameLabel ?? "";
        message.nicknameLabel = object.nicknameLabel ?? "";
        message.languageLabel = object.languageLabel ?? "";
        message.phoneLabel = object.phoneLabel ?? "";
        message.tosAndPrivacyLabel = object.tosAndPrivacyLabel ?? "";
        message.tosConfirm = object.tosConfirm ?? "";
        message.tosLinkText = object.tosLinkText ?? "";
        message.privacyLinkText = object.privacyLinkText ?? "";
        message.backButtonText = object.backButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.privacyConfirm = object.privacyConfirm ?? "";
        return message;
    },
};
function createBaseRegistrationOrgScreenText() {
    return {
        title: "",
        description: "",
        orgnameLabel: "",
        firstnameLabel: "",
        lastnameLabel: "",
        usernameLabel: "",
        emailLabel: "",
        passwordLabel: "",
        passwordConfirmLabel: "",
        tosAndPrivacyLabel: "",
        tosConfirm: "",
        tosLinkText: "",
        privacyConfirm: "",
        privacyLinkText: "",
        saveButtonText: "",
    };
}
exports.RegistrationOrgScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.orgnameLabel !== "") {
            writer.uint32(26).string(message.orgnameLabel);
        }
        if (message.firstnameLabel !== "") {
            writer.uint32(34).string(message.firstnameLabel);
        }
        if (message.lastnameLabel !== "") {
            writer.uint32(42).string(message.lastnameLabel);
        }
        if (message.usernameLabel !== "") {
            writer.uint32(50).string(message.usernameLabel);
        }
        if (message.emailLabel !== "") {
            writer.uint32(58).string(message.emailLabel);
        }
        if (message.passwordLabel !== "") {
            writer.uint32(74).string(message.passwordLabel);
        }
        if (message.passwordConfirmLabel !== "") {
            writer.uint32(82).string(message.passwordConfirmLabel);
        }
        if (message.tosAndPrivacyLabel !== "") {
            writer.uint32(90).string(message.tosAndPrivacyLabel);
        }
        if (message.tosConfirm !== "") {
            writer.uint32(98).string(message.tosConfirm);
        }
        if (message.tosLinkText !== "") {
            writer.uint32(114).string(message.tosLinkText);
        }
        if (message.privacyConfirm !== "") {
            writer.uint32(122).string(message.privacyConfirm);
        }
        if (message.privacyLinkText !== "") {
            writer.uint32(138).string(message.privacyLinkText);
        }
        if (message.saveButtonText !== "") {
            writer.uint32(154).string(message.saveButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegistrationOrgScreenText();
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
                    message.orgnameLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.firstnameLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastnameLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.usernameLabel = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.emailLabel = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.passwordLabel = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.passwordConfirmLabel = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.tosAndPrivacyLabel = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.tosConfirm = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.tosLinkText = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.privacyConfirm = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.privacyLinkText = reader.string();
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.saveButtonText = reader.string();
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
            orgnameLabel: isSet(object.orgnameLabel) ? String(object.orgnameLabel) : "",
            firstnameLabel: isSet(object.firstnameLabel) ? String(object.firstnameLabel) : "",
            lastnameLabel: isSet(object.lastnameLabel) ? String(object.lastnameLabel) : "",
            usernameLabel: isSet(object.usernameLabel) ? String(object.usernameLabel) : "",
            emailLabel: isSet(object.emailLabel) ? String(object.emailLabel) : "",
            passwordLabel: isSet(object.passwordLabel) ? String(object.passwordLabel) : "",
            passwordConfirmLabel: isSet(object.passwordConfirmLabel) ? String(object.passwordConfirmLabel) : "",
            tosAndPrivacyLabel: isSet(object.tosAndPrivacyLabel) ? String(object.tosAndPrivacyLabel) : "",
            tosConfirm: isSet(object.tosConfirm) ? String(object.tosConfirm) : "",
            tosLinkText: isSet(object.tosLinkText) ? String(object.tosLinkText) : "",
            privacyConfirm: isSet(object.privacyConfirm) ? String(object.privacyConfirm) : "",
            privacyLinkText: isSet(object.privacyLinkText) ? String(object.privacyLinkText) : "",
            saveButtonText: isSet(object.saveButtonText) ? String(object.saveButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.orgnameLabel !== undefined && (obj.orgnameLabel = message.orgnameLabel);
        message.firstnameLabel !== undefined && (obj.firstnameLabel = message.firstnameLabel);
        message.lastnameLabel !== undefined && (obj.lastnameLabel = message.lastnameLabel);
        message.usernameLabel !== undefined && (obj.usernameLabel = message.usernameLabel);
        message.emailLabel !== undefined && (obj.emailLabel = message.emailLabel);
        message.passwordLabel !== undefined && (obj.passwordLabel = message.passwordLabel);
        message.passwordConfirmLabel !== undefined && (obj.passwordConfirmLabel = message.passwordConfirmLabel);
        message.tosAndPrivacyLabel !== undefined && (obj.tosAndPrivacyLabel = message.tosAndPrivacyLabel);
        message.tosConfirm !== undefined && (obj.tosConfirm = message.tosConfirm);
        message.tosLinkText !== undefined && (obj.tosLinkText = message.tosLinkText);
        message.privacyConfirm !== undefined && (obj.privacyConfirm = message.privacyConfirm);
        message.privacyLinkText !== undefined && (obj.privacyLinkText = message.privacyLinkText);
        message.saveButtonText !== undefined && (obj.saveButtonText = message.saveButtonText);
        return obj;
    },
    create(base) {
        return exports.RegistrationOrgScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegistrationOrgScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.orgnameLabel = object.orgnameLabel ?? "";
        message.firstnameLabel = object.firstnameLabel ?? "";
        message.lastnameLabel = object.lastnameLabel ?? "";
        message.usernameLabel = object.usernameLabel ?? "";
        message.emailLabel = object.emailLabel ?? "";
        message.passwordLabel = object.passwordLabel ?? "";
        message.passwordConfirmLabel = object.passwordConfirmLabel ?? "";
        message.tosAndPrivacyLabel = object.tosAndPrivacyLabel ?? "";
        message.tosConfirm = object.tosConfirm ?? "";
        message.tosLinkText = object.tosLinkText ?? "";
        message.privacyConfirm = object.privacyConfirm ?? "";
        message.privacyLinkText = object.privacyLinkText ?? "";
        message.saveButtonText = object.saveButtonText ?? "";
        return message;
    },
};
function createBaseLinkingUserDoneScreenText() {
    return { title: "", description: "", cancelButtonText: "", nextButtonText: "" };
}
exports.LinkingUserDoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(26).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLinkingUserDoneScreenText();
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
                    message.cancelButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
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
            cancelButtonText: isSet(object.cancelButtonText) ? String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.cancelButtonText !== undefined && (obj.cancelButtonText = message.cancelButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.LinkingUserDoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLinkingUserDoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.cancelButtonText = object.cancelButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseExternalUserNotFoundScreenText() {
    return {
        title: "",
        description: "",
        linkButtonText: "",
        autoRegisterButtonText: "",
        tosAndPrivacyLabel: "",
        tosConfirm: "",
        tosLinkText: "",
        privacyLinkText: "",
        privacyConfirm: "",
    };
}
exports.ExternalUserNotFoundScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.linkButtonText !== "") {
            writer.uint32(26).string(message.linkButtonText);
        }
        if (message.autoRegisterButtonText !== "") {
            writer.uint32(34).string(message.autoRegisterButtonText);
        }
        if (message.tosAndPrivacyLabel !== "") {
            writer.uint32(42).string(message.tosAndPrivacyLabel);
        }
        if (message.tosConfirm !== "") {
            writer.uint32(50).string(message.tosConfirm);
        }
        if (message.tosLinkText !== "") {
            writer.uint32(58).string(message.tosLinkText);
        }
        if (message.privacyLinkText !== "") {
            writer.uint32(66).string(message.privacyLinkText);
        }
        if (message.privacyConfirm !== "") {
            writer.uint32(82).string(message.privacyConfirm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExternalUserNotFoundScreenText();
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
                    message.linkButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.autoRegisterButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.tosAndPrivacyLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.tosConfirm = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.tosLinkText = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.privacyLinkText = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.privacyConfirm = reader.string();
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
            linkButtonText: isSet(object.linkButtonText) ? String(object.linkButtonText) : "",
            autoRegisterButtonText: isSet(object.autoRegisterButtonText) ? String(object.autoRegisterButtonText) : "",
            tosAndPrivacyLabel: isSet(object.tosAndPrivacyLabel) ? String(object.tosAndPrivacyLabel) : "",
            tosConfirm: isSet(object.tosConfirm) ? String(object.tosConfirm) : "",
            tosLinkText: isSet(object.tosLinkText) ? String(object.tosLinkText) : "",
            privacyLinkText: isSet(object.privacyLinkText) ? String(object.privacyLinkText) : "",
            privacyConfirm: isSet(object.privacyConfirm) ? String(object.privacyConfirm) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.linkButtonText !== undefined && (obj.linkButtonText = message.linkButtonText);
        message.autoRegisterButtonText !== undefined && (obj.autoRegisterButtonText = message.autoRegisterButtonText);
        message.tosAndPrivacyLabel !== undefined && (obj.tosAndPrivacyLabel = message.tosAndPrivacyLabel);
        message.tosConfirm !== undefined && (obj.tosConfirm = message.tosConfirm);
        message.tosLinkText !== undefined && (obj.tosLinkText = message.tosLinkText);
        message.privacyLinkText !== undefined && (obj.privacyLinkText = message.privacyLinkText);
        message.privacyConfirm !== undefined && (obj.privacyConfirm = message.privacyConfirm);
        return obj;
    },
    create(base) {
        return exports.ExternalUserNotFoundScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExternalUserNotFoundScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.linkButtonText = object.linkButtonText ?? "";
        message.autoRegisterButtonText = object.autoRegisterButtonText ?? "";
        message.tosAndPrivacyLabel = object.tosAndPrivacyLabel ?? "";
        message.tosConfirm = object.tosConfirm ?? "";
        message.tosLinkText = object.tosLinkText ?? "";
        message.privacyLinkText = object.privacyLinkText ?? "";
        message.privacyConfirm = object.privacyConfirm ?? "";
        return message;
    },
};
function createBaseSuccessLoginScreenText() {
    return { title: "", autoRedirectDescription: "", redirectedDescription: "", nextButtonText: "" };
}
exports.SuccessLoginScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.autoRedirectDescription !== "") {
            writer.uint32(18).string(message.autoRedirectDescription);
        }
        if (message.redirectedDescription !== "") {
            writer.uint32(26).string(message.redirectedDescription);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuccessLoginScreenText();
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
                    message.autoRedirectDescription = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.redirectedDescription = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
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
            autoRedirectDescription: isSet(object.autoRedirectDescription) ? String(object.autoRedirectDescription) : "",
            redirectedDescription: isSet(object.redirectedDescription) ? String(object.redirectedDescription) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.autoRedirectDescription !== undefined && (obj.autoRedirectDescription = message.autoRedirectDescription);
        message.redirectedDescription !== undefined && (obj.redirectedDescription = message.redirectedDescription);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        return obj;
    },
    create(base) {
        return exports.SuccessLoginScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSuccessLoginScreenText();
        message.title = object.title ?? "";
        message.autoRedirectDescription = object.autoRedirectDescription ?? "";
        message.redirectedDescription = object.redirectedDescription ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        return message;
    },
};
function createBaseLogoutDoneScreenText() {
    return { title: "", description: "", loginButtonText: "" };
}
exports.LogoutDoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.loginButtonText !== "") {
            writer.uint32(26).string(message.loginButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLogoutDoneScreenText();
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
                    message.loginButtonText = reader.string();
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
            loginButtonText: isSet(object.loginButtonText) ? String(object.loginButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.loginButtonText !== undefined && (obj.loginButtonText = message.loginButtonText);
        return obj;
    },
    create(base) {
        return exports.LogoutDoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLogoutDoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.loginButtonText = object.loginButtonText ?? "";
        return message;
    },
};
function createBaseFooterText() {
    return { tos: "", privacyPolicy: "", help: "", supportEmail: "" };
}
exports.FooterText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tos !== "") {
            writer.uint32(10).string(message.tos);
        }
        if (message.privacyPolicy !== "") {
            writer.uint32(26).string(message.privacyPolicy);
        }
        if (message.help !== "") {
            writer.uint32(42).string(message.help);
        }
        if (message.supportEmail !== "") {
            writer.uint32(58).string(message.supportEmail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFooterText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tos = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.privacyPolicy = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.help = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.supportEmail = reader.string();
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
            tos: isSet(object.tos) ? String(object.tos) : "",
            privacyPolicy: isSet(object.privacyPolicy) ? String(object.privacyPolicy) : "",
            help: isSet(object.help) ? String(object.help) : "",
            supportEmail: isSet(object.supportEmail) ? String(object.supportEmail) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tos !== undefined && (obj.tos = message.tos);
        message.privacyPolicy !== undefined && (obj.privacyPolicy = message.privacyPolicy);
        message.help !== undefined && (obj.help = message.help);
        message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
        return obj;
    },
    create(base) {
        return exports.FooterText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFooterText();
        message.tos = object.tos ?? "";
        message.privacyPolicy = object.privacyPolicy ?? "";
        message.help = object.help ?? "";
        message.supportEmail = object.supportEmail ?? "";
        return message;
    },
};
function createBasePasswordlessPromptScreenText() {
    return {
        title: "",
        description: "",
        descriptionInit: "",
        passwordlessButtonText: "",
        nextButtonText: "",
        skipButtonText: "",
    };
}
exports.PasswordlessPromptScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.descriptionInit !== "") {
            writer.uint32(26).string(message.descriptionInit);
        }
        if (message.passwordlessButtonText !== "") {
            writer.uint32(34).string(message.passwordlessButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(42).string(message.nextButtonText);
        }
        if (message.skipButtonText !== "") {
            writer.uint32(50).string(message.skipButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordlessPromptScreenText();
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
                    message.descriptionInit = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.passwordlessButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.skipButtonText = reader.string();
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
            descriptionInit: isSet(object.descriptionInit) ? String(object.descriptionInit) : "",
            passwordlessButtonText: isSet(object.passwordlessButtonText) ? String(object.passwordlessButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            skipButtonText: isSet(object.skipButtonText) ? String(object.skipButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.descriptionInit !== undefined && (obj.descriptionInit = message.descriptionInit);
        message.passwordlessButtonText !== undefined && (obj.passwordlessButtonText = message.passwordlessButtonText);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.skipButtonText !== undefined && (obj.skipButtonText = message.skipButtonText);
        return obj;
    },
    create(base) {
        return exports.PasswordlessPromptScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordlessPromptScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.descriptionInit = object.descriptionInit ?? "";
        message.passwordlessButtonText = object.passwordlessButtonText ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.skipButtonText = object.skipButtonText ?? "";
        return message;
    },
};
function createBasePasswordlessRegistrationScreenText() {
    return {
        title: "",
        description: "",
        tokenNameLabel: "",
        notSupported: "",
        registerTokenButtonText: "",
        errorRetry: "",
    };
}
exports.PasswordlessRegistrationScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.tokenNameLabel !== "") {
            writer.uint32(26).string(message.tokenNameLabel);
        }
        if (message.notSupported !== "") {
            writer.uint32(34).string(message.notSupported);
        }
        if (message.registerTokenButtonText !== "") {
            writer.uint32(42).string(message.registerTokenButtonText);
        }
        if (message.errorRetry !== "") {
            writer.uint32(50).string(message.errorRetry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordlessRegistrationScreenText();
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
                    message.tokenNameLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.notSupported = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.registerTokenButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.errorRetry = reader.string();
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
            tokenNameLabel: isSet(object.tokenNameLabel) ? String(object.tokenNameLabel) : "",
            notSupported: isSet(object.notSupported) ? String(object.notSupported) : "",
            registerTokenButtonText: isSet(object.registerTokenButtonText) ? String(object.registerTokenButtonText) : "",
            errorRetry: isSet(object.errorRetry) ? String(object.errorRetry) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.tokenNameLabel !== undefined && (obj.tokenNameLabel = message.tokenNameLabel);
        message.notSupported !== undefined && (obj.notSupported = message.notSupported);
        message.registerTokenButtonText !== undefined && (obj.registerTokenButtonText = message.registerTokenButtonText);
        message.errorRetry !== undefined && (obj.errorRetry = message.errorRetry);
        return obj;
    },
    create(base) {
        return exports.PasswordlessRegistrationScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordlessRegistrationScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.tokenNameLabel = object.tokenNameLabel ?? "";
        message.notSupported = object.notSupported ?? "";
        message.registerTokenButtonText = object.registerTokenButtonText ?? "";
        message.errorRetry = object.errorRetry ?? "";
        return message;
    },
};
function createBasePasswordlessRegistrationDoneScreenText() {
    return { title: "", description: "", nextButtonText: "", cancelButtonText: "", descriptionClose: "" };
}
exports.PasswordlessRegistrationDoneScreenText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(34).string(message.cancelButtonText);
        }
        if (message.descriptionClose !== "") {
            writer.uint32(42).string(message.descriptionClose);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordlessRegistrationDoneScreenText();
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
                    message.nextButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.descriptionClose = reader.string();
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
            nextButtonText: isSet(object.nextButtonText) ? String(object.nextButtonText) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? String(object.cancelButtonText) : "",
            descriptionClose: isSet(object.descriptionClose) ? String(object.descriptionClose) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.nextButtonText !== undefined && (obj.nextButtonText = message.nextButtonText);
        message.cancelButtonText !== undefined && (obj.cancelButtonText = message.cancelButtonText);
        message.descriptionClose !== undefined && (obj.descriptionClose = message.descriptionClose);
        return obj;
    },
    create(base) {
        return exports.PasswordlessRegistrationDoneScreenText.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePasswordlessRegistrationDoneScreenText();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.nextButtonText = object.nextButtonText ?? "";
        message.cancelButtonText = object.cancelButtonText ?? "";
        message.descriptionClose = object.descriptionClose ?? "";
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
