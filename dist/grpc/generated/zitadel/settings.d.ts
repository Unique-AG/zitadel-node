import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { ObjectDetails } from "./object";
export declare const protobufPackage = "zitadel.settings.v1";
export declare enum SecretGeneratorType {
    SECRET_GENERATOR_TYPE_UNSPECIFIED = 0,
    SECRET_GENERATOR_TYPE_INIT_CODE = 1,
    SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE = 2,
    SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE = 3,
    SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE = 4,
    SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE = 5,
    SECRET_GENERATOR_TYPE_APP_SECRET = 6,
    SECRET_GENERATOR_TYPE_OTP_SMS = 7,
    SECRET_GENERATOR_TYPE_OTP_EMAIL = 8,
    UNRECOGNIZED = -1
}
export declare function secretGeneratorTypeFromJSON(object: any): SecretGeneratorType;
export declare function secretGeneratorTypeToJSON(object: SecretGeneratorType): string;
export declare enum SMSProviderConfigState {
    SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED = 0,
    SMS_PROVIDER_CONFIG_ACTIVE = 1,
    SMS_PROVIDER_CONFIG_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function sMSProviderConfigStateFromJSON(object: any): SMSProviderConfigState;
export declare function sMSProviderConfigStateToJSON(object: SMSProviderConfigState): string;
export interface SecretGenerator {
    generatorType: SecretGeneratorType;
    details: ObjectDetails | undefined;
    length: number;
    expiry: Duration | undefined;
    includeLowerLetters: boolean;
    includeUpperLetters: boolean;
    includeDigits: boolean;
    includeSymbols: boolean;
}
export interface SecretGeneratorQuery {
    typeQuery?: SecretGeneratorTypeQuery | undefined;
}
export interface SecretGeneratorTypeQuery {
    generatorType: SecretGeneratorType;
}
export interface SMTPConfig {
    details: ObjectDetails | undefined;
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    replyToAddress: string;
}
export interface SMSProvider {
    details: ObjectDetails | undefined;
    id: string;
    state: SMSProviderConfigState;
    twilio?: TwilioConfig | undefined;
}
export interface TwilioConfig {
    sid: string;
    senderNumber: string;
}
export interface DebugNotificationProvider {
    details: ObjectDetails | undefined;
    compact: boolean;
}
export interface OIDCSettings {
    details: ObjectDetails | undefined;
    accessTokenLifetime: Duration | undefined;
    idTokenLifetime: Duration | undefined;
    refreshTokenIdleExpiration: Duration | undefined;
    refreshTokenExpiration: Duration | undefined;
}
export interface SecurityPolicy {
    details: ObjectDetails | undefined;
    /** states if iframe embedding is enabled or disabled */
    enableIframeEmbedding: boolean;
    /** origins allowed loading ZITADEL in an iframe if enable_iframe_embedding is true */
    allowedOrigins: string[];
}
export declare const SecretGenerator: {
    encode(message: SecretGenerator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecretGenerator;
    fromJSON(object: any): SecretGenerator;
    toJSON(message: SecretGenerator): unknown;
    create(base?: DeepPartial<SecretGenerator>): SecretGenerator;
    fromPartial(object: DeepPartial<SecretGenerator>): SecretGenerator;
};
export declare const SecretGeneratorQuery: {
    encode(message: SecretGeneratorQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecretGeneratorQuery;
    fromJSON(object: any): SecretGeneratorQuery;
    toJSON(message: SecretGeneratorQuery): unknown;
    create(base?: DeepPartial<SecretGeneratorQuery>): SecretGeneratorQuery;
    fromPartial(object: DeepPartial<SecretGeneratorQuery>): SecretGeneratorQuery;
};
export declare const SecretGeneratorTypeQuery: {
    encode(message: SecretGeneratorTypeQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecretGeneratorTypeQuery;
    fromJSON(object: any): SecretGeneratorTypeQuery;
    toJSON(message: SecretGeneratorTypeQuery): unknown;
    create(base?: DeepPartial<SecretGeneratorTypeQuery>): SecretGeneratorTypeQuery;
    fromPartial(object: DeepPartial<SecretGeneratorTypeQuery>): SecretGeneratorTypeQuery;
};
export declare const SMTPConfig: {
    encode(message: SMTPConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SMTPConfig;
    fromJSON(object: any): SMTPConfig;
    toJSON(message: SMTPConfig): unknown;
    create(base?: DeepPartial<SMTPConfig>): SMTPConfig;
    fromPartial(object: DeepPartial<SMTPConfig>): SMTPConfig;
};
export declare const SMSProvider: {
    encode(message: SMSProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SMSProvider;
    fromJSON(object: any): SMSProvider;
    toJSON(message: SMSProvider): unknown;
    create(base?: DeepPartial<SMSProvider>): SMSProvider;
    fromPartial(object: DeepPartial<SMSProvider>): SMSProvider;
};
export declare const TwilioConfig: {
    encode(message: TwilioConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TwilioConfig;
    fromJSON(object: any): TwilioConfig;
    toJSON(message: TwilioConfig): unknown;
    create(base?: DeepPartial<TwilioConfig>): TwilioConfig;
    fromPartial(object: DeepPartial<TwilioConfig>): TwilioConfig;
};
export declare const DebugNotificationProvider: {
    encode(message: DebugNotificationProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DebugNotificationProvider;
    fromJSON(object: any): DebugNotificationProvider;
    toJSON(message: DebugNotificationProvider): unknown;
    create(base?: DeepPartial<DebugNotificationProvider>): DebugNotificationProvider;
    fromPartial(object: DeepPartial<DebugNotificationProvider>): DebugNotificationProvider;
};
export declare const OIDCSettings: {
    encode(message: OIDCSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OIDCSettings;
    fromJSON(object: any): OIDCSettings;
    toJSON(message: OIDCSettings): unknown;
    create(base?: DeepPartial<OIDCSettings>): OIDCSettings;
    fromPartial(object: DeepPartial<OIDCSettings>): OIDCSettings;
};
export declare const SecurityPolicy: {
    encode(message: SecurityPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityPolicy;
    fromJSON(object: any): SecurityPolicy;
    toJSON(message: SecurityPolicy): unknown;
    create(base?: DeepPartial<SecurityPolicy>): SecurityPolicy;
    fromPartial(object: DeepPartial<SecurityPolicy>): SecurityPolicy;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
