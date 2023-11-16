import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.v1";
export interface AuthOption {
    permission: string;
    checkFieldName: string;
}
export declare const AuthOption: {
    encode(message: AuthOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthOption;
    fromJSON(object: any): AuthOption;
    toJSON(message: AuthOption): unknown;
    create(base?: DeepPartial<AuthOption>): AuthOption;
    fromPartial(object: DeepPartial<AuthOption>): AuthOption;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
