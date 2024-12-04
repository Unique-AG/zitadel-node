import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../../google/protobuf/duration.js";
import { Details } from "../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.resources.action.v3alpha";
export interface Target {
    name: string;
    restWebhook?: SetRESTWebhook | undefined;
    restCall?: SetRESTCall | undefined;
    restAsync?: SetRESTAsync | undefined;
    /** Timeout defines the duration until ZITADEL cancels the execution. */
    timeout: Duration | undefined;
    endpoint: string;
}
export interface GetTarget {
    details: Details | undefined;
    config: Target | undefined;
    signingKey: string;
}
export interface PatchTarget {
    name?: string | undefined;
    restWebhook?: SetRESTWebhook | undefined;
    restCall?: SetRESTCall | undefined;
    restAsync?: SetRESTAsync | undefined;
    /** Timeout defines the duration until ZITADEL cancels the execution. */
    timeout?: Duration | undefined;
    endpoint?: string | undefined;
    /**
     * Regenerate the key used for signing and checking the payload sent to the target.
     * Set the graceful period for the existing key. During that time, the previous
     * signing key and the new one will be used to sign the request to allow you a smooth
     * transition onf your API.
     *
     * Note that we currently only allow an immediate rotation ("0s") and will support
     * longer expirations in the future.
     */
    expirationSigningKey?: Duration | undefined;
}
/** Wait for response but response body is ignored, status is checked, call is sent as post. */
export interface SetRESTWebhook {
    /** Define if any error stops the whole execution. By default the process continues as normal. */
    interruptOnError: boolean;
}
/** Wait for response and response body is used, status is checked, call is sent as post. */
export interface SetRESTCall {
    /** Define if any error stops the whole execution. By default the process continues as normal. */
    interruptOnError: boolean;
}
/** Call is executed in parallel to others, ZITADEL does not wait until the call is finished. The state is ignored, call is sent as post. */
export interface SetRESTAsync {
}
export declare const Target: MessageFns<Target>;
export declare const GetTarget: MessageFns<GetTarget>;
export declare const PatchTarget: MessageFns<PatchTarget>;
export declare const SetRESTWebhook: MessageFns<SetRESTWebhook>;
export declare const SetRESTCall: MessageFns<SetRESTCall>;
export declare const SetRESTAsync: MessageFns<SetRESTAsync>;
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
