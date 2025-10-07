import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../google/protobuf/duration.js";
import { LoginVersion } from "./login.js";
export declare const protobufPackage = "zitadel.app.v2beta";
export declare enum OIDCResponseType {
    OIDC_RESPONSE_TYPE_UNSPECIFIED = 0,
    OIDC_RESPONSE_TYPE_CODE = 1,
    OIDC_RESPONSE_TYPE_ID_TOKEN = 2,
    OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN = 3,
    UNRECOGNIZED = -1
}
export declare function oIDCResponseTypeFromJSON(object: any): OIDCResponseType;
export declare function oIDCResponseTypeToJSON(object: OIDCResponseType): string;
export declare enum OIDCGrantType {
    OIDC_GRANT_TYPE_AUTHORIZATION_CODE = 0,
    OIDC_GRANT_TYPE_IMPLICIT = 1,
    OIDC_GRANT_TYPE_REFRESH_TOKEN = 2,
    OIDC_GRANT_TYPE_DEVICE_CODE = 3,
    OIDC_GRANT_TYPE_TOKEN_EXCHANGE = 4,
    UNRECOGNIZED = -1
}
export declare function oIDCGrantTypeFromJSON(object: any): OIDCGrantType;
export declare function oIDCGrantTypeToJSON(object: OIDCGrantType): string;
export declare enum OIDCAppType {
    OIDC_APP_TYPE_WEB = 0,
    OIDC_APP_TYPE_USER_AGENT = 1,
    OIDC_APP_TYPE_NATIVE = 2,
    UNRECOGNIZED = -1
}
export declare function oIDCAppTypeFromJSON(object: any): OIDCAppType;
export declare function oIDCAppTypeToJSON(object: OIDCAppType): string;
export declare enum OIDCAuthMethodType {
    OIDC_AUTH_METHOD_TYPE_BASIC = 0,
    OIDC_AUTH_METHOD_TYPE_POST = 1,
    OIDC_AUTH_METHOD_TYPE_NONE = 2,
    OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 3,
    UNRECOGNIZED = -1
}
export declare function oIDCAuthMethodTypeFromJSON(object: any): OIDCAuthMethodType;
export declare function oIDCAuthMethodTypeToJSON(object: OIDCAuthMethodType): string;
export declare enum OIDCVersion {
    OIDC_VERSION_1_0 = 0,
    UNRECOGNIZED = -1
}
export declare function oIDCVersionFromJSON(object: any): OIDCVersion;
export declare function oIDCVersionToJSON(object: OIDCVersion): string;
export declare enum OIDCTokenType {
    OIDC_TOKEN_TYPE_BEARER = 0,
    OIDC_TOKEN_TYPE_JWT = 1,
    UNRECOGNIZED = -1
}
export declare function oIDCTokenTypeFromJSON(object: any): OIDCTokenType;
export declare function oIDCTokenTypeToJSON(object: OIDCTokenType): string;
export interface OIDCLocalizedMessage {
    key: string;
    localizedMessage: string;
}
export interface OIDCConfig {
    redirectUris: string[];
    responseTypes: OIDCResponseType[];
    grantTypes: OIDCGrantType[];
    appType: OIDCAppType;
    clientId: string;
    authMethodType: OIDCAuthMethodType;
    postLogoutRedirectUris: string[];
    version: OIDCVersion;
    noneCompliant: boolean;
    complianceProblems: OIDCLocalizedMessage[];
    devMode: boolean;
    accessTokenType: OIDCTokenType;
    accessTokenRoleAssertion: boolean;
    idTokenRoleAssertion: boolean;
    idTokenUserinfoAssertion: boolean;
    clockSkew: Duration | undefined;
    additionalOrigins: string[];
    allowedOrigins: string[];
    skipNativeAppSuccessPage: boolean;
    backChannelLogoutUri: string;
    loginVersion: LoginVersion | undefined;
}
export declare const OIDCLocalizedMessage: MessageFns<OIDCLocalizedMessage>;
export declare const OIDCConfig: MessageFns<OIDCConfig>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
