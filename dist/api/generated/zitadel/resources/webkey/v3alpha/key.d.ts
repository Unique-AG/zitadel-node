import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v3alpha/object.js";
import { WebKeyECDSAConfig, WebKeyED25519Config, WebKeyRSAConfig } from "./config.js";
export declare const protobufPackage = "zitadel.resources.webkey.v3alpha";
export declare enum WebKeyState {
    STATE_UNSPECIFIED = 0,
    STATE_INITIAL = 1,
    STATE_ACTIVE = 2,
    STATE_INACTIVE = 3,
    STATE_REMOVED = 4,
    UNRECOGNIZED = -1
}
export declare function webKeyStateFromJSON(object: any): WebKeyState;
export declare function webKeyStateToJSON(object: WebKeyState): string;
export interface GetWebKey {
    details: Details | undefined;
    config: WebKey | undefined;
    state: WebKeyState;
}
export interface WebKey {
    rsa?: WebKeyRSAConfig | undefined;
    ecdsa?: WebKeyECDSAConfig | undefined;
    ed25519?: WebKeyED25519Config | undefined;
}
export declare const GetWebKey: MessageFns<GetWebKey>;
export declare const WebKey: MessageFns<WebKey>;
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
