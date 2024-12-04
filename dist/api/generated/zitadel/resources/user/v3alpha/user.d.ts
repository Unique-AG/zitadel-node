import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v3alpha/object.js";
import { Authenticators, SetAuthenticators } from "./authenticator.js";
import { Contact, SetContact } from "./communication.js";
export declare const protobufPackage = "zitadel.resources.user.v3alpha";
export declare enum State {
    USER_STATE_UNSPECIFIED = 0,
    USER_STATE_ACTIVE = 1,
    USER_STATE_INACTIVE = 2,
    USER_STATE_DELETED = 3,
    USER_STATE_LOCKED = 4,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export interface CreateUser {
    /** Define the schema the user's data schema by providing it's ID. */
    schemaId: string;
    data: {
        [key: string]: any;
    } | undefined;
    /** Set the contact information (email, phone) for the user. */
    contact: SetContact | undefined;
    /** Set the initial authenticators of the user. */
    authenticators: SetAuthenticators | undefined;
    /** Optionally set a unique identifier of the user. If unset, ZITADEL will take care of it. */
    userId?: string | undefined;
}
export interface PatchUser {
    schemaId?: string | undefined;
    data?: {
        [key: string]: any;
    } | undefined;
    /** Set the contact information (email, phone) for the user. */
    contact?: SetContact | undefined;
}
export interface GetUser {
    /** Details provide some base information (such as the last change date) of the user. */
    details: Details | undefined;
    /** The schema the user and it's data is based on. */
    schema: GetSchema | undefined;
    data: {
        [key: string]: any;
    } | undefined;
    /** Contact information for the user. ZITADEL will use this in case of internal notifications. */
    contact: Contact | undefined;
    /**
     * The user's authenticators. They are used to identify and authenticate the user
     * during the authentication process.
     */
    authenticators: Authenticators | undefined;
    /** State of the user. */
    state: State;
}
export interface GetSchema {
    /** The unique identifier of the user schema. */
    id: string;
    /** The human readable name of the user schema. */
    type: string;
    /** The revision the user's data is based on of the revision. */
    revision: number;
}
export declare const CreateUser: MessageFns<CreateUser>;
export declare const PatchUser: MessageFns<PatchUser>;
export declare const GetUser: MessageFns<GetUser>;
export declare const GetSchema: MessageFns<GetSchema>;
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
