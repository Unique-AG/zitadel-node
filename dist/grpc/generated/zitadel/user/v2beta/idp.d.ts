/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.user.v2beta";
export interface LDAPCredentials {
    username: string;
    password: string;
}
export interface RedirectURLs {
    successUrl: string;
    failureUrl: string;
}
export interface IDPIntent {
    idpIntentId: string;
    idpIntentToken: string;
    userId: string;
}
export interface IDPInformation {
    oauth?: IDPOAuthAccessInformation | undefined;
    ldap?: IDPLDAPAccessInformation | undefined;
    saml?: IDPSAMLAccessInformation | undefined;
    idpId: string;
    userId: string;
    userName: string;
    rawInformation: {
        [key: string]: any;
    } | undefined;
}
export interface IDPOAuthAccessInformation {
    accessToken: string;
    idToken?: string | undefined;
}
export interface IDPLDAPAccessInformation {
    attributes: {
        [key: string]: any;
    } | undefined;
}
export interface IDPSAMLAccessInformation {
    assertion: Buffer;
}
export interface IDPLink {
    idpId: string;
    userId: string;
    userName: string;
}
export declare const LDAPCredentials: {
    encode(message: LDAPCredentials, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LDAPCredentials;
    fromJSON(object: any): LDAPCredentials;
    toJSON(message: LDAPCredentials): unknown;
    create(base?: DeepPartial<LDAPCredentials>): LDAPCredentials;
    fromPartial(object: DeepPartial<LDAPCredentials>): LDAPCredentials;
};
export declare const RedirectURLs: {
    encode(message: RedirectURLs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedirectURLs;
    fromJSON(object: any): RedirectURLs;
    toJSON(message: RedirectURLs): unknown;
    create(base?: DeepPartial<RedirectURLs>): RedirectURLs;
    fromPartial(object: DeepPartial<RedirectURLs>): RedirectURLs;
};
export declare const IDPIntent: {
    encode(message: IDPIntent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPIntent;
    fromJSON(object: any): IDPIntent;
    toJSON(message: IDPIntent): unknown;
    create(base?: DeepPartial<IDPIntent>): IDPIntent;
    fromPartial(object: DeepPartial<IDPIntent>): IDPIntent;
};
export declare const IDPInformation: {
    encode(message: IDPInformation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPInformation;
    fromJSON(object: any): IDPInformation;
    toJSON(message: IDPInformation): unknown;
    create(base?: DeepPartial<IDPInformation>): IDPInformation;
    fromPartial(object: DeepPartial<IDPInformation>): IDPInformation;
};
export declare const IDPOAuthAccessInformation: {
    encode(message: IDPOAuthAccessInformation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPOAuthAccessInformation;
    fromJSON(object: any): IDPOAuthAccessInformation;
    toJSON(message: IDPOAuthAccessInformation): unknown;
    create(base?: DeepPartial<IDPOAuthAccessInformation>): IDPOAuthAccessInformation;
    fromPartial(object: DeepPartial<IDPOAuthAccessInformation>): IDPOAuthAccessInformation;
};
export declare const IDPLDAPAccessInformation: {
    encode(message: IDPLDAPAccessInformation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPLDAPAccessInformation;
    fromJSON(object: any): IDPLDAPAccessInformation;
    toJSON(message: IDPLDAPAccessInformation): unknown;
    create(base?: DeepPartial<IDPLDAPAccessInformation>): IDPLDAPAccessInformation;
    fromPartial(object: DeepPartial<IDPLDAPAccessInformation>): IDPLDAPAccessInformation;
};
export declare const IDPSAMLAccessInformation: {
    encode(message: IDPSAMLAccessInformation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPSAMLAccessInformation;
    fromJSON(object: any): IDPSAMLAccessInformation;
    toJSON(message: IDPSAMLAccessInformation): unknown;
    create(base?: DeepPartial<IDPSAMLAccessInformation>): IDPSAMLAccessInformation;
    fromPartial(object: DeepPartial<IDPSAMLAccessInformation>): IDPSAMLAccessInformation;
};
export declare const IDPLink: {
    encode(message: IDPLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDPLink;
    fromJSON(object: any): IDPLink;
    toJSON(message: IDPLink): unknown;
    create(base?: DeepPartial<IDPLink>): IDPLink;
    fromPartial(object: DeepPartial<IDPLink>): IDPLink;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
