import Long from "long";
import _m0 from "protobufjs/minimal";
import { ObjectDetails } from "./object";
export declare const protobufPackage = "zitadel.text.v1";
export interface MessageCustomText {
    details: ObjectDetails | undefined;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
    isDefault: boolean;
}
export interface LoginCustomText {
    details: ObjectDetails | undefined;
    selectAccountText: SelectAccountScreenText | undefined;
    loginText: LoginScreenText | undefined;
    passwordText: PasswordScreenText | undefined;
    usernameChangeText: UsernameChangeScreenText | undefined;
    usernameChangeDoneText: UsernameChangeDoneScreenText | undefined;
    initPasswordText: InitPasswordScreenText | undefined;
    initPasswordDoneText: InitPasswordDoneScreenText | undefined;
    emailVerificationText: EmailVerificationScreenText | undefined;
    emailVerificationDoneText: EmailVerificationDoneScreenText | undefined;
    initializeUserText: InitializeUserScreenText | undefined;
    initializeDoneText: InitializeUserDoneScreenText | undefined;
    initMfaPromptText: InitMFAPromptScreenText | undefined;
    initMfaOtpText: InitMFAOTPScreenText | undefined;
    initMfaU2fText: InitMFAU2FScreenText | undefined;
    initMfaDoneText: InitMFADoneScreenText | undefined;
    mfaProvidersText: MFAProvidersText | undefined;
    verifyMfaOtpText: VerifyMFAOTPScreenText | undefined;
    verifyMfaU2fText: VerifyMFAU2FScreenText | undefined;
    passwordlessText: PasswordlessScreenText | undefined;
    passwordChangeText: PasswordChangeScreenText | undefined;
    passwordChangeDoneText: PasswordChangeDoneScreenText | undefined;
    passwordResetDoneText: PasswordResetDoneScreenText | undefined;
    registrationOptionText: RegistrationOptionScreenText | undefined;
    registrationUserText: RegistrationUserScreenText | undefined;
    registrationOrgText: RegistrationOrgScreenText | undefined;
    linkingUserDoneText: LinkingUserDoneScreenText | undefined;
    externalUserNotFoundText: ExternalUserNotFoundScreenText | undefined;
    successLoginText: SuccessLoginScreenText | undefined;
    logoutText: LogoutDoneScreenText | undefined;
    footerText: FooterText | undefined;
    passwordlessPromptText: PasswordlessPromptScreenText | undefined;
    passwordlessRegistrationText: PasswordlessRegistrationScreenText | undefined;
    passwordlessRegistrationDoneText: PasswordlessRegistrationDoneScreenText | undefined;
    externalRegistrationUserOverviewText: ExternalRegistrationUserOverviewScreenText | undefined;
    isDefault: boolean;
}
export interface SelectAccountScreenText {
    title: string;
    description: string;
    titleLinkingProcess: string;
    descriptionLinkingProcess: string;
    otherUser: string;
    sessionStateActive: string;
    sessionStateInactive: string;
    userMustBeMemberOfOrg: string;
}
export interface LoginScreenText {
    title: string;
    description: string;
    titleLinkingProcess: string;
    descriptionLinkingProcess: string;
    userMustBeMemberOfOrg: string;
    loginNameLabel: string;
    registerButtonText: string;
    nextButtonText: string;
    externalUserDescription: string;
    userNamePlaceholder: string;
    loginNamePlaceholder: string;
}
export interface PasswordScreenText {
    title: string;
    description: string;
    passwordLabel: string;
    resetLinkText: string;
    backButtonText: string;
    nextButtonText: string;
    minLength: string;
    hasUppercase: string;
    hasLowercase: string;
    hasNumber: string;
    hasSymbol: string;
    confirmation: string;
}
export interface UsernameChangeScreenText {
    title: string;
    description: string;
    usernameLabel: string;
    cancelButtonText: string;
    nextButtonText: string;
}
export interface UsernameChangeDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
}
export interface InitPasswordScreenText {
    title: string;
    description: string;
    codeLabel: string;
    newPasswordLabel: string;
    newPasswordConfirmLabel: string;
    nextButtonText: string;
    resendButtonText: string;
}
export interface InitPasswordDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
    cancelButtonText: string;
}
export interface EmailVerificationScreenText {
    title: string;
    description: string;
    codeLabel: string;
    nextButtonText: string;
    resendButtonText: string;
}
export interface EmailVerificationDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
    cancelButtonText: string;
    loginButtonText: string;
}
export interface InitializeUserScreenText {
    title: string;
    description: string;
    codeLabel: string;
    newPasswordLabel: string;
    newPasswordConfirmLabel: string;
    resendButtonText: string;
    nextButtonText: string;
}
export interface InitializeUserDoneScreenText {
    title: string;
    description: string;
    cancelButtonText: string;
    nextButtonText: string;
}
export interface InitMFAPromptScreenText {
    title: string;
    description: string;
    otpOption: string;
    u2fOption: string;
    skipButtonText: string;
    nextButtonText: string;
}
export interface InitMFAOTPScreenText {
    title: string;
    description: string;
    descriptionOtp: string;
    secretLabel: string;
    codeLabel: string;
    nextButtonText: string;
    cancelButtonText: string;
}
export interface InitMFAU2FScreenText {
    title: string;
    description: string;
    tokenNameLabel: string;
    notSupported: string;
    registerTokenButtonText: string;
    errorRetry: string;
}
export interface InitMFADoneScreenText {
    title: string;
    description: string;
    cancelButtonText: string;
    nextButtonText: string;
}
export interface MFAProvidersText {
    chooseOther: string;
    otp: string;
    u2f: string;
}
export interface VerifyMFAOTPScreenText {
    title: string;
    description: string;
    codeLabel: string;
    nextButtonText: string;
}
export interface VerifyMFAU2FScreenText {
    title: string;
    description: string;
    validateTokenText: string;
    notSupported: string;
    errorRetry: string;
}
export interface PasswordlessScreenText {
    title: string;
    description: string;
    loginWithPwButtonText: string;
    validateTokenButtonText: string;
    notSupported: string;
    errorRetry: string;
}
export interface PasswordChangeScreenText {
    title: string;
    description: string;
    oldPasswordLabel: string;
    newPasswordLabel: string;
    newPasswordConfirmLabel: string;
    cancelButtonText: string;
    nextButtonText: string;
}
export interface PasswordChangeDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
}
export interface PasswordResetDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
}
export interface RegistrationOptionScreenText {
    title: string;
    description: string;
    userNameButtonText: string;
    externalLoginDescription: string;
    loginButtonText: string;
}
export interface RegistrationUserScreenText {
    title: string;
    description: string;
    descriptionOrgRegister: string;
    firstnameLabel: string;
    lastnameLabel: string;
    emailLabel: string;
    usernameLabel: string;
    languageLabel: string;
    genderLabel: string;
    passwordLabel: string;
    passwordConfirmLabel: string;
    tosAndPrivacyLabel: string;
    tosConfirm: string;
    tosLinkText: string;
    privacyConfirm: string;
    privacyLinkText: string;
    nextButtonText: string;
    backButtonText: string;
}
export interface ExternalRegistrationUserOverviewScreenText {
    title: string;
    description: string;
    emailLabel: string;
    usernameLabel: string;
    firstnameLabel: string;
    lastnameLabel: string;
    nicknameLabel: string;
    languageLabel: string;
    phoneLabel: string;
    tosAndPrivacyLabel: string;
    tosConfirm: string;
    tosLinkText: string;
    privacyLinkText: string;
    backButtonText: string;
    nextButtonText: string;
    privacyConfirm: string;
}
export interface RegistrationOrgScreenText {
    title: string;
    description: string;
    orgnameLabel: string;
    firstnameLabel: string;
    lastnameLabel: string;
    usernameLabel: string;
    emailLabel: string;
    passwordLabel: string;
    passwordConfirmLabel: string;
    tosAndPrivacyLabel: string;
    tosConfirm: string;
    tosLinkText: string;
    privacyConfirm: string;
    privacyLinkText: string;
    saveButtonText: string;
}
export interface LinkingUserDoneScreenText {
    title: string;
    description: string;
    cancelButtonText: string;
    nextButtonText: string;
}
export interface ExternalUserNotFoundScreenText {
    title: string;
    description: string;
    linkButtonText: string;
    autoRegisterButtonText: string;
    tosAndPrivacyLabel: string;
    tosConfirm: string;
    tosLinkText: string;
    privacyLinkText: string;
    privacyConfirm: string;
}
export interface SuccessLoginScreenText {
    title: string;
    /** Text to describe that auto-redirect should happen after successful login */
    autoRedirectDescription: string;
    /** Text to describe that the window can be closed after redirect */
    redirectedDescription: string;
    nextButtonText: string;
}
export interface LogoutDoneScreenText {
    title: string;
    description: string;
    loginButtonText: string;
}
export interface FooterText {
    tos: string;
    privacyPolicy: string;
    help: string;
    supportEmail: string;
}
export interface PasswordlessPromptScreenText {
    title: string;
    description: string;
    descriptionInit: string;
    passwordlessButtonText: string;
    nextButtonText: string;
    skipButtonText: string;
}
export interface PasswordlessRegistrationScreenText {
    title: string;
    description: string;
    tokenNameLabel: string;
    notSupported: string;
    registerTokenButtonText: string;
    errorRetry: string;
}
export interface PasswordlessRegistrationDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
    cancelButtonText: string;
    descriptionClose: string;
}
export declare const MessageCustomText: {
    encode(message: MessageCustomText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageCustomText;
    fromJSON(object: any): MessageCustomText;
    toJSON(message: MessageCustomText): unknown;
    create(base?: DeepPartial<MessageCustomText>): MessageCustomText;
    fromPartial(object: DeepPartial<MessageCustomText>): MessageCustomText;
};
export declare const LoginCustomText: {
    encode(message: LoginCustomText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginCustomText;
    fromJSON(object: any): LoginCustomText;
    toJSON(message: LoginCustomText): unknown;
    create(base?: DeepPartial<LoginCustomText>): LoginCustomText;
    fromPartial(object: DeepPartial<LoginCustomText>): LoginCustomText;
};
export declare const SelectAccountScreenText: {
    encode(message: SelectAccountScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SelectAccountScreenText;
    fromJSON(object: any): SelectAccountScreenText;
    toJSON(message: SelectAccountScreenText): unknown;
    create(base?: DeepPartial<SelectAccountScreenText>): SelectAccountScreenText;
    fromPartial(object: DeepPartial<SelectAccountScreenText>): SelectAccountScreenText;
};
export declare const LoginScreenText: {
    encode(message: LoginScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginScreenText;
    fromJSON(object: any): LoginScreenText;
    toJSON(message: LoginScreenText): unknown;
    create(base?: DeepPartial<LoginScreenText>): LoginScreenText;
    fromPartial(object: DeepPartial<LoginScreenText>): LoginScreenText;
};
export declare const PasswordScreenText: {
    encode(message: PasswordScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordScreenText;
    fromJSON(object: any): PasswordScreenText;
    toJSON(message: PasswordScreenText): unknown;
    create(base?: DeepPartial<PasswordScreenText>): PasswordScreenText;
    fromPartial(object: DeepPartial<PasswordScreenText>): PasswordScreenText;
};
export declare const UsernameChangeScreenText: {
    encode(message: UsernameChangeScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UsernameChangeScreenText;
    fromJSON(object: any): UsernameChangeScreenText;
    toJSON(message: UsernameChangeScreenText): unknown;
    create(base?: DeepPartial<UsernameChangeScreenText>): UsernameChangeScreenText;
    fromPartial(object: DeepPartial<UsernameChangeScreenText>): UsernameChangeScreenText;
};
export declare const UsernameChangeDoneScreenText: {
    encode(message: UsernameChangeDoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UsernameChangeDoneScreenText;
    fromJSON(object: any): UsernameChangeDoneScreenText;
    toJSON(message: UsernameChangeDoneScreenText): unknown;
    create(base?: DeepPartial<UsernameChangeDoneScreenText>): UsernameChangeDoneScreenText;
    fromPartial(object: DeepPartial<UsernameChangeDoneScreenText>): UsernameChangeDoneScreenText;
};
export declare const InitPasswordScreenText: {
    encode(message: InitPasswordScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitPasswordScreenText;
    fromJSON(object: any): InitPasswordScreenText;
    toJSON(message: InitPasswordScreenText): unknown;
    create(base?: DeepPartial<InitPasswordScreenText>): InitPasswordScreenText;
    fromPartial(object: DeepPartial<InitPasswordScreenText>): InitPasswordScreenText;
};
export declare const InitPasswordDoneScreenText: {
    encode(message: InitPasswordDoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitPasswordDoneScreenText;
    fromJSON(object: any): InitPasswordDoneScreenText;
    toJSON(message: InitPasswordDoneScreenText): unknown;
    create(base?: DeepPartial<InitPasswordDoneScreenText>): InitPasswordDoneScreenText;
    fromPartial(object: DeepPartial<InitPasswordDoneScreenText>): InitPasswordDoneScreenText;
};
export declare const EmailVerificationScreenText: {
    encode(message: EmailVerificationScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmailVerificationScreenText;
    fromJSON(object: any): EmailVerificationScreenText;
    toJSON(message: EmailVerificationScreenText): unknown;
    create(base?: DeepPartial<EmailVerificationScreenText>): EmailVerificationScreenText;
    fromPartial(object: DeepPartial<EmailVerificationScreenText>): EmailVerificationScreenText;
};
export declare const EmailVerificationDoneScreenText: {
    encode(message: EmailVerificationDoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmailVerificationDoneScreenText;
    fromJSON(object: any): EmailVerificationDoneScreenText;
    toJSON(message: EmailVerificationDoneScreenText): unknown;
    create(base?: DeepPartial<EmailVerificationDoneScreenText>): EmailVerificationDoneScreenText;
    fromPartial(object: DeepPartial<EmailVerificationDoneScreenText>): EmailVerificationDoneScreenText;
};
export declare const InitializeUserScreenText: {
    encode(message: InitializeUserScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitializeUserScreenText;
    fromJSON(object: any): InitializeUserScreenText;
    toJSON(message: InitializeUserScreenText): unknown;
    create(base?: DeepPartial<InitializeUserScreenText>): InitializeUserScreenText;
    fromPartial(object: DeepPartial<InitializeUserScreenText>): InitializeUserScreenText;
};
export declare const InitializeUserDoneScreenText: {
    encode(message: InitializeUserDoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitializeUserDoneScreenText;
    fromJSON(object: any): InitializeUserDoneScreenText;
    toJSON(message: InitializeUserDoneScreenText): unknown;
    create(base?: DeepPartial<InitializeUserDoneScreenText>): InitializeUserDoneScreenText;
    fromPartial(object: DeepPartial<InitializeUserDoneScreenText>): InitializeUserDoneScreenText;
};
export declare const InitMFAPromptScreenText: {
    encode(message: InitMFAPromptScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitMFAPromptScreenText;
    fromJSON(object: any): InitMFAPromptScreenText;
    toJSON(message: InitMFAPromptScreenText): unknown;
    create(base?: DeepPartial<InitMFAPromptScreenText>): InitMFAPromptScreenText;
    fromPartial(object: DeepPartial<InitMFAPromptScreenText>): InitMFAPromptScreenText;
};
export declare const InitMFAOTPScreenText: {
    encode(message: InitMFAOTPScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitMFAOTPScreenText;
    fromJSON(object: any): InitMFAOTPScreenText;
    toJSON(message: InitMFAOTPScreenText): unknown;
    create(base?: DeepPartial<InitMFAOTPScreenText>): InitMFAOTPScreenText;
    fromPartial(object: DeepPartial<InitMFAOTPScreenText>): InitMFAOTPScreenText;
};
export declare const InitMFAU2FScreenText: {
    encode(message: InitMFAU2FScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitMFAU2FScreenText;
    fromJSON(object: any): InitMFAU2FScreenText;
    toJSON(message: InitMFAU2FScreenText): unknown;
    create(base?: DeepPartial<InitMFAU2FScreenText>): InitMFAU2FScreenText;
    fromPartial(object: DeepPartial<InitMFAU2FScreenText>): InitMFAU2FScreenText;
};
export declare const InitMFADoneScreenText: {
    encode(message: InitMFADoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitMFADoneScreenText;
    fromJSON(object: any): InitMFADoneScreenText;
    toJSON(message: InitMFADoneScreenText): unknown;
    create(base?: DeepPartial<InitMFADoneScreenText>): InitMFADoneScreenText;
    fromPartial(object: DeepPartial<InitMFADoneScreenText>): InitMFADoneScreenText;
};
export declare const MFAProvidersText: {
    encode(message: MFAProvidersText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MFAProvidersText;
    fromJSON(object: any): MFAProvidersText;
    toJSON(message: MFAProvidersText): unknown;
    create(base?: DeepPartial<MFAProvidersText>): MFAProvidersText;
    fromPartial(object: DeepPartial<MFAProvidersText>): MFAProvidersText;
};
export declare const VerifyMFAOTPScreenText: {
    encode(message: VerifyMFAOTPScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMFAOTPScreenText;
    fromJSON(object: any): VerifyMFAOTPScreenText;
    toJSON(message: VerifyMFAOTPScreenText): unknown;
    create(base?: DeepPartial<VerifyMFAOTPScreenText>): VerifyMFAOTPScreenText;
    fromPartial(object: DeepPartial<VerifyMFAOTPScreenText>): VerifyMFAOTPScreenText;
};
export declare const VerifyMFAU2FScreenText: {
    encode(message: VerifyMFAU2FScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMFAU2FScreenText;
    fromJSON(object: any): VerifyMFAU2FScreenText;
    toJSON(message: VerifyMFAU2FScreenText): unknown;
    create(base?: DeepPartial<VerifyMFAU2FScreenText>): VerifyMFAU2FScreenText;
    fromPartial(object: DeepPartial<VerifyMFAU2FScreenText>): VerifyMFAU2FScreenText;
};
export declare const PasswordlessScreenText: {
    encode(message: PasswordlessScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordlessScreenText;
    fromJSON(object: any): PasswordlessScreenText;
    toJSON(message: PasswordlessScreenText): unknown;
    create(base?: DeepPartial<PasswordlessScreenText>): PasswordlessScreenText;
    fromPartial(object: DeepPartial<PasswordlessScreenText>): PasswordlessScreenText;
};
export declare const PasswordChangeScreenText: {
    encode(message: PasswordChangeScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordChangeScreenText;
    fromJSON(object: any): PasswordChangeScreenText;
    toJSON(message: PasswordChangeScreenText): unknown;
    create(base?: DeepPartial<PasswordChangeScreenText>): PasswordChangeScreenText;
    fromPartial(object: DeepPartial<PasswordChangeScreenText>): PasswordChangeScreenText;
};
export declare const PasswordChangeDoneScreenText: {
    encode(message: PasswordChangeDoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordChangeDoneScreenText;
    fromJSON(object: any): PasswordChangeDoneScreenText;
    toJSON(message: PasswordChangeDoneScreenText): unknown;
    create(base?: DeepPartial<PasswordChangeDoneScreenText>): PasswordChangeDoneScreenText;
    fromPartial(object: DeepPartial<PasswordChangeDoneScreenText>): PasswordChangeDoneScreenText;
};
export declare const PasswordResetDoneScreenText: {
    encode(message: PasswordResetDoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordResetDoneScreenText;
    fromJSON(object: any): PasswordResetDoneScreenText;
    toJSON(message: PasswordResetDoneScreenText): unknown;
    create(base?: DeepPartial<PasswordResetDoneScreenText>): PasswordResetDoneScreenText;
    fromPartial(object: DeepPartial<PasswordResetDoneScreenText>): PasswordResetDoneScreenText;
};
export declare const RegistrationOptionScreenText: {
    encode(message: RegistrationOptionScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationOptionScreenText;
    fromJSON(object: any): RegistrationOptionScreenText;
    toJSON(message: RegistrationOptionScreenText): unknown;
    create(base?: DeepPartial<RegistrationOptionScreenText>): RegistrationOptionScreenText;
    fromPartial(object: DeepPartial<RegistrationOptionScreenText>): RegistrationOptionScreenText;
};
export declare const RegistrationUserScreenText: {
    encode(message: RegistrationUserScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationUserScreenText;
    fromJSON(object: any): RegistrationUserScreenText;
    toJSON(message: RegistrationUserScreenText): unknown;
    create(base?: DeepPartial<RegistrationUserScreenText>): RegistrationUserScreenText;
    fromPartial(object: DeepPartial<RegistrationUserScreenText>): RegistrationUserScreenText;
};
export declare const ExternalRegistrationUserOverviewScreenText: {
    encode(message: ExternalRegistrationUserOverviewScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalRegistrationUserOverviewScreenText;
    fromJSON(object: any): ExternalRegistrationUserOverviewScreenText;
    toJSON(message: ExternalRegistrationUserOverviewScreenText): unknown;
    create(base?: DeepPartial<ExternalRegistrationUserOverviewScreenText>): ExternalRegistrationUserOverviewScreenText;
    fromPartial(object: DeepPartial<ExternalRegistrationUserOverviewScreenText>): ExternalRegistrationUserOverviewScreenText;
};
export declare const RegistrationOrgScreenText: {
    encode(message: RegistrationOrgScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationOrgScreenText;
    fromJSON(object: any): RegistrationOrgScreenText;
    toJSON(message: RegistrationOrgScreenText): unknown;
    create(base?: DeepPartial<RegistrationOrgScreenText>): RegistrationOrgScreenText;
    fromPartial(object: DeepPartial<RegistrationOrgScreenText>): RegistrationOrgScreenText;
};
export declare const LinkingUserDoneScreenText: {
    encode(message: LinkingUserDoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkingUserDoneScreenText;
    fromJSON(object: any): LinkingUserDoneScreenText;
    toJSON(message: LinkingUserDoneScreenText): unknown;
    create(base?: DeepPartial<LinkingUserDoneScreenText>): LinkingUserDoneScreenText;
    fromPartial(object: DeepPartial<LinkingUserDoneScreenText>): LinkingUserDoneScreenText;
};
export declare const ExternalUserNotFoundScreenText: {
    encode(message: ExternalUserNotFoundScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalUserNotFoundScreenText;
    fromJSON(object: any): ExternalUserNotFoundScreenText;
    toJSON(message: ExternalUserNotFoundScreenText): unknown;
    create(base?: DeepPartial<ExternalUserNotFoundScreenText>): ExternalUserNotFoundScreenText;
    fromPartial(object: DeepPartial<ExternalUserNotFoundScreenText>): ExternalUserNotFoundScreenText;
};
export declare const SuccessLoginScreenText: {
    encode(message: SuccessLoginScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuccessLoginScreenText;
    fromJSON(object: any): SuccessLoginScreenText;
    toJSON(message: SuccessLoginScreenText): unknown;
    create(base?: DeepPartial<SuccessLoginScreenText>): SuccessLoginScreenText;
    fromPartial(object: DeepPartial<SuccessLoginScreenText>): SuccessLoginScreenText;
};
export declare const LogoutDoneScreenText: {
    encode(message: LogoutDoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogoutDoneScreenText;
    fromJSON(object: any): LogoutDoneScreenText;
    toJSON(message: LogoutDoneScreenText): unknown;
    create(base?: DeepPartial<LogoutDoneScreenText>): LogoutDoneScreenText;
    fromPartial(object: DeepPartial<LogoutDoneScreenText>): LogoutDoneScreenText;
};
export declare const FooterText: {
    encode(message: FooterText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FooterText;
    fromJSON(object: any): FooterText;
    toJSON(message: FooterText): unknown;
    create(base?: DeepPartial<FooterText>): FooterText;
    fromPartial(object: DeepPartial<FooterText>): FooterText;
};
export declare const PasswordlessPromptScreenText: {
    encode(message: PasswordlessPromptScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordlessPromptScreenText;
    fromJSON(object: any): PasswordlessPromptScreenText;
    toJSON(message: PasswordlessPromptScreenText): unknown;
    create(base?: DeepPartial<PasswordlessPromptScreenText>): PasswordlessPromptScreenText;
    fromPartial(object: DeepPartial<PasswordlessPromptScreenText>): PasswordlessPromptScreenText;
};
export declare const PasswordlessRegistrationScreenText: {
    encode(message: PasswordlessRegistrationScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordlessRegistrationScreenText;
    fromJSON(object: any): PasswordlessRegistrationScreenText;
    toJSON(message: PasswordlessRegistrationScreenText): unknown;
    create(base?: DeepPartial<PasswordlessRegistrationScreenText>): PasswordlessRegistrationScreenText;
    fromPartial(object: DeepPartial<PasswordlessRegistrationScreenText>): PasswordlessRegistrationScreenText;
};
export declare const PasswordlessRegistrationDoneScreenText: {
    encode(message: PasswordlessRegistrationDoneScreenText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordlessRegistrationDoneScreenText;
    fromJSON(object: any): PasswordlessRegistrationDoneScreenText;
    toJSON(message: PasswordlessRegistrationDoneScreenText): unknown;
    create(base?: DeepPartial<PasswordlessRegistrationDoneScreenText>): PasswordlessRegistrationDoneScreenText;
    fromPartial(object: DeepPartial<PasswordlessRegistrationDoneScreenText>): PasswordlessRegistrationDoneScreenText;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
