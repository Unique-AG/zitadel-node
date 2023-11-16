import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.protoc_gen_zitadel.v2";
export interface Options {
    authOption: AuthOption | undefined;
    httpResponse: CustomHTTPResponse | undefined;
}
export interface AuthOption {
    permission: string;
    orgField: string;
}
export interface CustomHTTPResponse {
    successCode: number;
}
export declare const Options: {
    encode(message: Options, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Options;
    fromJSON(object: any): Options;
    toJSON(message: Options): unknown;
    create(base?: DeepPartial<Options>): Options;
    fromPartial(object: DeepPartial<Options>): Options;
};
export declare const AuthOption: {
    encode(message: AuthOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthOption;
    fromJSON(object: any): AuthOption;
    toJSON(message: AuthOption): unknown;
    create(base?: DeepPartial<AuthOption>): AuthOption;
    fromPartial(object: DeepPartial<AuthOption>): AuthOption;
};
export declare const CustomHTTPResponse: {
    encode(message: CustomHTTPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CustomHTTPResponse;
    fromJSON(object: any): CustomHTTPResponse;
    toJSON(message: CustomHTTPResponse): unknown;
    create(base?: DeepPartial<CustomHTTPResponse>): CustomHTTPResponse;
    fromPartial(object: DeepPartial<CustomHTTPResponse>): CustomHTTPResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
