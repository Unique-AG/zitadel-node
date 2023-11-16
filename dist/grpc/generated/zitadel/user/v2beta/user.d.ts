/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.user.v2beta";
export declare enum Gender {
    GENDER_UNSPECIFIED = 0,
    GENDER_FEMALE = 1,
    GENDER_MALE = 2,
    GENDER_DIVERSE = 3,
    UNRECOGNIZED = -1
}
export declare function genderFromJSON(object: any): Gender;
export declare function genderToJSON(object: Gender): string;
export interface User {
    id: string;
}
export interface SetHumanProfile {
    givenName: string;
    familyName: string;
    nickName?: string | undefined;
    displayName?: string | undefined;
    preferredLanguage?: string | undefined;
    gender?: Gender | undefined;
}
export interface SetMetadataEntry {
    key: string;
    value: Buffer;
}
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create(base?: DeepPartial<User>): User;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const SetHumanProfile: {
    encode(message: SetHumanProfile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanProfile;
    fromJSON(object: any): SetHumanProfile;
    toJSON(message: SetHumanProfile): unknown;
    create(base?: DeepPartial<SetHumanProfile>): SetHumanProfile;
    fromPartial(object: DeepPartial<SetHumanProfile>): SetHumanProfile;
};
export declare const SetMetadataEntry: {
    encode(message: SetMetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMetadataEntry;
    fromJSON(object: any): SetMetadataEntry;
    toJSON(message: SetMetadataEntry): unknown;
    create(base?: DeepPartial<SetMetadataEntry>): SetMetadataEntry;
    fromPartial(object: DeepPartial<SetMetadataEntry>): SetMetadataEntry;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
