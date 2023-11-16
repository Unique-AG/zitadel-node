import Long from "long";
import _m0 from "protobufjs/minimal";
import { LocalizedMessage } from "./message";
export declare const protobufPackage = "zitadel.change.v1";
export interface Change {
    changeDate: Date | undefined;
    eventType: LocalizedMessage | undefined;
    sequence: Long;
    editorId: string;
    editorDisplayName: string;
    resourceOwnerId: string;
    editorPreferredLoginName: string;
    editorAvatarUrl: string;
}
export interface ChangeQuery {
    sequence: Long;
    limit: number;
    asc: boolean;
}
export declare const Change: {
    encode(message: Change, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Change;
    fromJSON(object: any): Change;
    toJSON(message: Change): unknown;
    create(base?: DeepPartial<Change>): Change;
    fromPartial(object: DeepPartial<Change>): Change;
};
export declare const ChangeQuery: {
    encode(message: ChangeQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeQuery;
    fromJSON(object: any): ChangeQuery;
    toJSON(message: ChangeQuery): unknown;
    create(base?: DeepPartial<ChangeQuery>): ChangeQuery;
    fromPartial(object: DeepPartial<ChangeQuery>): ChangeQuery;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
