import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.resources.user.v3alpha";
export interface Contact {
    /** Email contact information of the user. */
    email: Email | undefined;
    /** Phone contact information of the user. */
    phone: Phone | undefined;
}
export interface Email {
    /** Email address of the user. */
    address: string;
    /** IsVerified states if the email address has been verified to belong to the user. */
    isVerified: boolean;
}
export interface Phone {
    /** Phone number of the user. */
    number: string;
    /** IsVerified states if the phone number has been verified to belong to the user. */
    isVerified: boolean;
}
export interface SetContact {
    email?: SetEmail | undefined;
    phone?: SetPhone | undefined;
}
export interface SetEmail {
    /** Set the email address. */
    address: string;
    /** Let ZITADEL send the link to the user via email. */
    sendCode?: SendEmailVerificationCode | undefined;
    /** Get the code back to provide it to the user in your preferred mechanism. */
    returnCode?: ReturnEmailVerificationCode | undefined;
    /** Set the email as already verified. */
    isVerified?: boolean | undefined;
}
export interface SendEmailVerificationCode {
    /**
     * Optionally set a url_template, which will be used in the verification mail sent by ZITADEL
     * to guide the user to your verification page.
     * If no template is set, the default ZITADEL url will be used.
     */
    urlTemplate?: string | undefined;
}
export interface ReturnEmailVerificationCode {
}
export interface SetPhone {
    /** Set the user's phone number. */
    number: string;
    /** Let ZITADEL send the link to the user via SMS. */
    sendCode?: SendPhoneVerificationCode | undefined;
    /** Get the code back to provide it to the user in your preferred mechanism. */
    returnCode?: ReturnPhoneVerificationCode | undefined;
    /** Set the phone as already verified. */
    isVerified?: boolean | undefined;
}
export interface SendPhoneVerificationCode {
}
export interface ReturnPhoneVerificationCode {
}
export declare const Contact: MessageFns<Contact>;
export declare const Email: MessageFns<Email>;
export declare const Phone: MessageFns<Phone>;
export declare const SetContact: MessageFns<SetContact>;
export declare const SetEmail: MessageFns<SetEmail>;
export declare const SendEmailVerificationCode: MessageFns<SendEmailVerificationCode>;
export declare const ReturnEmailVerificationCode: MessageFns<ReturnEmailVerificationCode>;
export declare const SetPhone: MessageFns<SetPhone>;
export declare const SendPhoneVerificationCode: MessageFns<SendPhoneVerificationCode>;
export declare const ReturnPhoneVerificationCode: MessageFns<ReturnPhoneVerificationCode>;
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
