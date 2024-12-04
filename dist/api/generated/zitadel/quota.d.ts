import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.quota.v1";
export declare enum Unit {
    UNIT_UNIMPLEMENTED = 0,
    /**
     * UNIT_REQUESTS_ALL_AUTHENTICATED - The sum of all requests to the ZITADEL API with an authorization header,
     * excluding the following exceptions
     * - Calls to the System API
     * - Calls that cause internal server errors
     * - Failed authorizations
     * - Requests after the quota already exceeded
     */
    UNIT_REQUESTS_ALL_AUTHENTICATED = 1,
    /** UNIT_ACTIONS_ALL_RUN_SECONDS - The sum of all actions run durations in seconds */
    UNIT_ACTIONS_ALL_RUN_SECONDS = 2,
    UNRECOGNIZED = -1
}
export declare function unitFromJSON(object: any): Unit;
export declare function unitToJSON(object: Unit): string;
export interface Notification {
    /** The percentage relative to the quotas amount on which the call_url should be called. */
    percent: number;
    /** If true, the call_url is called each time a factor of percentage is reached. */
    repeat: boolean;
    /** The URL, which is called with HTTP method POST and a JSON payload with the properties "unit", "id" (notification id), "callURL", "periodStart", "threshold" and "usage". */
    callUrl: string;
}
export declare const Notification: MessageFns<Notification>;
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
