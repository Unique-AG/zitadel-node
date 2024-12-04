import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v2beta/object.js";
import { HumanEmail } from "./email.js";
import { HumanPhone } from "./phone.js";
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
export declare enum AccessTokenType {
    ACCESS_TOKEN_TYPE_BEARER = 0,
    ACCESS_TOKEN_TYPE_JWT = 1,
    UNRECOGNIZED = -1
}
export declare function accessTokenTypeFromJSON(object: any): AccessTokenType;
export declare function accessTokenTypeToJSON(object: AccessTokenType): string;
export declare enum UserState {
    USER_STATE_UNSPECIFIED = 0,
    USER_STATE_ACTIVE = 1,
    USER_STATE_INACTIVE = 2,
    USER_STATE_DELETED = 3,
    USER_STATE_LOCKED = 4,
    USER_STATE_INITIAL = 5,
    UNRECOGNIZED = -1
}
export declare function userStateFromJSON(object: any): UserState;
export declare function userStateToJSON(object: UserState): string;
export interface SetHumanProfile {
    givenName: string;
    familyName: string;
    nickName?: string | undefined;
    displayName?: string | undefined;
    preferredLanguage?: string | undefined;
    gender?: Gender | undefined;
}
export interface HumanProfile {
    givenName: string;
    familyName: string;
    nickName?: string | undefined;
    displayName?: string | undefined;
    preferredLanguage?: string | undefined;
    gender?: Gender | undefined;
    avatarUrl: string;
}
export interface SetMetadataEntry {
    key: string;
    value: Buffer;
}
export interface HumanUser {
    /** Unique identifier of the user. */
    userId: string;
    /** State of the user, for example active, inactive, locked, deleted, initial. */
    state: UserState;
    /** Username of the user, which can be globally unique or unique on organization level. */
    username: string;
    /** Possible usable login names for the user. */
    loginNames: string[];
    /** Preferred login name of the user. */
    preferredLoginName: string;
    /** Profile information of the user. */
    profile: HumanProfile | undefined;
    /** Email of the user, if defined. */
    email: HumanEmail | undefined;
    /** Phone of the user, if defined. */
    phone: HumanPhone | undefined;
    /** User is required to change the used password on the next login. */
    passwordChangeRequired: boolean;
    /** The time the user last changed their password. */
    passwordChanged: Date | undefined;
}
export interface User {
    userId: string;
    details: Details | undefined;
    state: UserState;
    username: string;
    loginNames: string[];
    preferredLoginName: string;
    human?: HumanUser | undefined;
    machine?: MachineUser | undefined;
}
export interface MachineUser {
    name: string;
    description: string;
    hasSecret: boolean;
    accessTokenType: AccessTokenType;
}
export declare const SetHumanProfile: MessageFns<SetHumanProfile>;
export declare const HumanProfile: MessageFns<HumanProfile>;
export declare const SetMetadataEntry: MessageFns<SetMetadataEntry>;
export declare const HumanUser: MessageFns<HumanUser>;
export declare const User: MessageFns<User>;
export declare const MachineUser: MessageFns<MachineUser>;
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