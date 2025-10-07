import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.saml.v2";
export declare enum ErrorReason {
    ERROR_REASON_UNSPECIFIED = 0,
    ERROR_REASON_VERSION_MISSMATCH = 1,
    ERROR_REASON_AUTH_N_FAILED = 2,
    ERROR_REASON_INVALID_ATTR_NAME_OR_VALUE = 3,
    ERROR_REASON_INVALID_NAMEID_POLICY = 4,
    ERROR_REASON_REQUEST_DENIED = 5,
    ERROR_REASON_REQUEST_UNSUPPORTED = 6,
    ERROR_REASON_UNSUPPORTED_BINDING = 7,
    UNRECOGNIZED = -1
}
export declare function errorReasonFromJSON(object: any): ErrorReason;
export declare function errorReasonToJSON(object: ErrorReason): string;
/**
 * SAMLRequest contains information about a SAML authentication request.
 * see: https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html
 */
export interface SAMLRequest {
    /** ID of the created SAMLRequest. */
    id: string;
    /** Time when the SAMLRequest was created. */
    creationDate: Date | undefined;
    /** SAML entityID of the application that created the SAMLRequest. */
    issuer: string;
    /** URL which points back to the assertion consumer service of the application that created the SAMLRequest. */
    assertionConsumerService: string;
    /** RelayState provided by the application for the request. */
    relayState: string;
    /** Binding used by the application for the request. */
    binding: string;
}
export interface AuthorizationError {
    error: ErrorReason;
    errorDescription?: string | undefined;
}
export declare const SAMLRequest: MessageFns<SAMLRequest>;
export declare const AuthorizationError: MessageFns<AuthorizationError>;
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
