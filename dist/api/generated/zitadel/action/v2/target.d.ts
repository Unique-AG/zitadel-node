import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../google/protobuf/duration.js";
export declare const protobufPackage = "zitadel.action.v2";
export interface Target {
    /** The unique identifier of the target. */
    id: string;
    /** The timestamp of the target creation. */
    creationDate: Date | undefined;
    /** The timestamp of the last change to the target. */
    changeDate: Date | undefined;
    /** Display name of the target. */
    name: string;
    restWebhook?: RESTWebhook | undefined;
    restCall?: RESTCall | undefined;
    restAsync?: RESTAsync | undefined;
    /**
     * Timeout defines the duration until ZITADEL cancels the execution.
     * If the target doesn't respond before this timeout expires, the the connection is closed and the action fails. Depending on the target type and possible setting on `interrupt_on_error` following targets will not be called. In case of a `rest_async` target only this specific target will fail, without any influence on other targets of the same execution.
     */
    timeout: Duration | undefined;
    /** The URL that will be called in case of an execution. */
    endpoint: string;
    /**
     * The current signing key used to sign the request sent to the target.
     * The key can be used to verify the integrity and authenticity of the request
     * on the receiver side. The key should be treated as a secret and only known to ZITADEL and the receiver.
     * The signature is included in the request header `X-ZITADEL-Signature`
     * and calculated over the raw body of the request using HMAC with SHA256.
     */
    signingKey: string;
}
export interface RESTWebhook {
    /** Define if any error stops the whole execution. By default the process continues as normal. */
    interruptOnError: boolean;
}
export interface RESTCall {
    /** Define if any error stops the whole execution. By default the process continues as normal. */
    interruptOnError: boolean;
}
export interface RESTAsync {
}
export declare const Target: MessageFns<Target>;
export declare const RESTWebhook: MessageFns<RESTWebhook>;
export declare const RESTCall: MessageFns<RESTCall>;
export declare const RESTAsync: MessageFns<RESTAsync>;
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
