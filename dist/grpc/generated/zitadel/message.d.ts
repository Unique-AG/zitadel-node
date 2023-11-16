import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.v1";
export interface ErrorDetail {
    id: string;
    message: string;
}
export interface LocalizedMessage {
    key: string;
    localizedMessage: string;
}
export declare const ErrorDetail: {
    encode(message: ErrorDetail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorDetail;
    fromJSON(object: any): ErrorDetail;
    toJSON(message: ErrorDetail): unknown;
    create(base?: DeepPartial<ErrorDetail>): ErrorDetail;
    fromPartial(object: DeepPartial<ErrorDetail>): ErrorDetail;
};
export declare const LocalizedMessage: {
    encode(message: LocalizedMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LocalizedMessage;
    fromJSON(object: any): LocalizedMessage;
    toJSON(message: LocalizedMessage): unknown;
    create(base?: DeepPartial<LocalizedMessage>): LocalizedMessage;
    fromPartial(object: DeepPartial<LocalizedMessage>): LocalizedMessage;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
