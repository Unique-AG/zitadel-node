/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";
export declare const protobufPackage = "zitadel.user.v1";
export declare enum UserState {
    USER_STATE_UNSPECIFIED = 0,
    USER_STATE_ACTIVE = 1,
    USER_STATE_INACTIVE = 2,
    USER_STATE_DELETED = 3,
    USER_STATE_LOCKED = 4,
    USER_STATE_SUSPEND = 5,
    USER_STATE_INITIAL = 6,
    UNRECOGNIZED = -1
}
export declare function userStateFromJSON(object: any): UserState;
export declare function userStateToJSON(object: UserState): string;
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
export declare enum Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_HUMAN = 1,
    TYPE_MACHINE = 2,
    UNRECOGNIZED = -1
}
export declare function typeFromJSON(object: any): Type;
export declare function typeToJSON(object: Type): string;
export declare enum UserFieldName {
    USER_FIELD_NAME_UNSPECIFIED = 0,
    USER_FIELD_NAME_USER_NAME = 1,
    USER_FIELD_NAME_FIRST_NAME = 2,
    USER_FIELD_NAME_LAST_NAME = 3,
    USER_FIELD_NAME_NICK_NAME = 4,
    USER_FIELD_NAME_DISPLAY_NAME = 5,
    USER_FIELD_NAME_EMAIL = 6,
    USER_FIELD_NAME_STATE = 7,
    USER_FIELD_NAME_TYPE = 8,
    USER_FIELD_NAME_CREATION_DATE = 9,
    UNRECOGNIZED = -1
}
export declare function userFieldNameFromJSON(object: any): UserFieldName;
export declare function userFieldNameToJSON(object: UserFieldName): string;
export declare enum AuthFactorState {
    AUTH_FACTOR_STATE_UNSPECIFIED = 0,
    AUTH_FACTOR_STATE_NOT_READY = 1,
    AUTH_FACTOR_STATE_READY = 2,
    AUTH_FACTOR_STATE_REMOVED = 3,
    UNRECOGNIZED = -1
}
export declare function authFactorStateFromJSON(object: any): AuthFactorState;
export declare function authFactorStateToJSON(object: AuthFactorState): string;
export declare enum SessionState {
    SESSION_STATE_UNSPECIFIED = 0,
    SESSION_STATE_ACTIVE = 1,
    SESSION_STATE_TERMINATED = 2,
    UNRECOGNIZED = -1
}
export declare function sessionStateFromJSON(object: any): SessionState;
export declare function sessionStateToJSON(object: SessionState): string;
export declare enum UserGrantState {
    USER_GRANT_STATE_UNSPECIFIED = 0,
    USER_GRANT_STATE_ACTIVE = 1,
    USER_GRANT_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function userGrantStateFromJSON(object: any): UserGrantState;
export declare function userGrantStateToJSON(object: UserGrantState): string;
export interface User {
    id: string;
    details: ObjectDetails | undefined;
    state: UserState;
    userName: string;
    loginNames: string[];
    preferredLoginName: string;
    human?: Human | undefined;
    machine?: Machine | undefined;
}
export interface Human {
    profile: Profile | undefined;
    email: Email | undefined;
    phone: Phone | undefined;
}
export interface Machine {
    name: string;
    description: string;
    hasSecret: boolean;
    accessTokenType: AccessTokenType;
}
export interface Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
    avatarUrl: string;
}
export interface Email {
    email: string;
    isEmailVerified: boolean;
}
export interface Phone {
    phone: string;
    isPhoneVerified: boolean;
}
export interface SearchQuery {
    userNameQuery?: UserNameQuery | undefined;
    firstNameQuery?: FirstNameQuery | undefined;
    lastNameQuery?: LastNameQuery | undefined;
    nickNameQuery?: NickNameQuery | undefined;
    displayNameQuery?: DisplayNameQuery | undefined;
    emailQuery?: EmailQuery | undefined;
    stateQuery?: StateQuery | undefined;
    typeQuery?: TypeQuery | undefined;
    loginNameQuery?: LoginNameQuery | undefined;
    inUserIdsQuery?: InUserIDQuery | undefined;
    orQuery?: OrQuery | undefined;
    andQuery?: AndQuery | undefined;
    notQuery?: NotQuery | undefined;
}
export interface OrQuery {
    queries: SearchQuery[];
}
export interface AndQuery {
    queries: SearchQuery[];
}
export interface NotQuery {
    query: SearchQuery | undefined;
}
export interface InUserIDQuery {
    userIds: string[];
}
export interface UserNameQuery {
    userName: string;
    method: TextQueryMethod;
}
export interface FirstNameQuery {
    firstName: string;
    method: TextQueryMethod;
}
export interface LastNameQuery {
    lastName: string;
    method: TextQueryMethod;
}
export interface NickNameQuery {
    nickName: string;
    method: TextQueryMethod;
}
export interface DisplayNameQuery {
    displayName: string;
    method: TextQueryMethod;
}
export interface EmailQuery {
    emailAddress: string;
    method: TextQueryMethod;
}
export interface LoginNameQuery {
    loginName: string;
    method: TextQueryMethod;
}
/** UserStateQuery always equals */
export interface StateQuery {
    state: UserState;
}
/** UserTypeQuery always equals */
export interface TypeQuery {
    type: Type;
}
export interface AuthFactor {
    state: AuthFactorState;
    otp?: AuthFactorOTP | undefined;
    u2f?: AuthFactorU2F | undefined;
    otpSms?: AuthFactorOTPSMS | undefined;
    otpEmail?: AuthFactorOTPEmail | undefined;
}
export interface AuthFactorOTP {
}
export interface AuthFactorOTPSMS {
}
export interface AuthFactorOTPEmail {
}
export interface AuthFactorU2F {
    id: string;
    name: string;
}
export interface WebAuthNKey {
    publicKey: Buffer;
}
export interface WebAuthNVerification {
    publicKeyCredential: Buffer;
    tokenName: string;
}
export interface WebAuthNToken {
    id: string;
    state: AuthFactorState;
    name: string;
}
export interface Membership {
    userId: string;
    details: ObjectDetails | undefined;
    roles: string[];
    displayName: string;
    iam?: boolean | undefined;
    orgId?: string | undefined;
    projectId?: string | undefined;
    projectGrantId?: string | undefined;
}
export interface MembershipQuery {
    orgQuery?: MembershipOrgQuery | undefined;
    projectQuery?: MembershipProjectQuery | undefined;
    projectGrantQuery?: MembershipProjectGrantQuery | undefined;
    iamQuery?: MembershipIAMQuery | undefined;
}
/** this query always equals */
export interface MembershipOrgQuery {
    orgId: string;
}
/** this query always equals */
export interface MembershipProjectQuery {
    projectId: string;
}
/** this query always equals */
export interface MembershipProjectGrantQuery {
    projectGrantId: string;
}
/** this query always equals */
export interface MembershipIAMQuery {
    iam: boolean;
}
export interface Session {
    sessionId: string;
    agentId: string;
    authState: SessionState;
    userId: string;
    userName: string;
    loginName: string;
    displayName: string;
    details: ObjectDetails | undefined;
    avatarUrl: string;
}
export interface RefreshToken {
    id: string;
    details: ObjectDetails | undefined;
    clientId: string;
    authTime: Date | undefined;
    idleExpiration: Date | undefined;
    expiration: Date | undefined;
    scopes: string[];
    audience: string[];
}
export interface PersonalAccessToken {
    id: string;
    details: ObjectDetails | undefined;
    expirationDate: Date | undefined;
    scopes: string[];
}
export interface UserGrant {
    id: string;
    details: ObjectDetails | undefined;
    roleKeys: string[];
    state: UserGrantState;
    userId: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    displayName: string;
    orgId: string;
    orgName: string;
    orgDomain: string;
    projectId: string;
    projectName: string;
    projectGrantId: string;
    avatarUrl: string;
    preferredLoginName: string;
    userType: Type;
}
export interface UserGrantQuery {
    projectIdQuery?: UserGrantProjectIDQuery | undefined;
    userIdQuery?: UserGrantUserIDQuery | undefined;
    withGrantedQuery?: UserGrantWithGrantedQuery | undefined;
    roleKeyQuery?: UserGrantRoleKeyQuery | undefined;
    projectGrantIdQuery?: UserGrantProjectGrantIDQuery | undefined;
    userNameQuery?: UserGrantUserNameQuery | undefined;
    firstNameQuery?: UserGrantFirstNameQuery | undefined;
    lastNameQuery?: UserGrantLastNameQuery | undefined;
    emailQuery?: UserGrantEmailQuery | undefined;
    orgNameQuery?: UserGrantOrgNameQuery | undefined;
    orgDomainQuery?: UserGrantOrgDomainQuery | undefined;
    projectNameQuery?: UserGrantProjectNameQuery | undefined;
    displayNameQuery?: UserGrantDisplayNameQuery | undefined;
    userTypeQuery?: UserGrantUserTypeQuery | undefined;
}
export interface UserGrantProjectIDQuery {
    projectId: string;
}
export interface UserGrantUserIDQuery {
    userId: string;
}
export interface UserGrantWithGrantedQuery {
    withGranted: boolean;
}
export interface UserGrantRoleKeyQuery {
    roleKey: string;
    method: TextQueryMethod;
}
export interface UserGrantProjectGrantIDQuery {
    projectGrantId: string;
}
export interface UserGrantUserNameQuery {
    userName: string;
    method: TextQueryMethod;
}
export interface UserGrantFirstNameQuery {
    firstName: string;
    method: TextQueryMethod;
}
export interface UserGrantLastNameQuery {
    lastName: string;
    method: TextQueryMethod;
}
export interface UserGrantEmailQuery {
    email: string;
    method: TextQueryMethod;
}
export interface UserGrantOrgNameQuery {
    orgName: string;
    method: TextQueryMethod;
}
export interface UserGrantOrgDomainQuery {
    orgDomain: string;
    method: TextQueryMethod;
}
export interface UserGrantProjectNameQuery {
    projectName: string;
    method: TextQueryMethod;
}
export interface UserGrantDisplayNameQuery {
    displayName: string;
    method: TextQueryMethod;
}
export interface UserGrantUserTypeQuery {
    type: Type;
}
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create(base?: DeepPartial<User>): User;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const Human: {
    encode(message: Human, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Human;
    fromJSON(object: any): Human;
    toJSON(message: Human): unknown;
    create(base?: DeepPartial<Human>): Human;
    fromPartial(object: DeepPartial<Human>): Human;
};
export declare const Machine: {
    encode(message: Machine, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Machine;
    fromJSON(object: any): Machine;
    toJSON(message: Machine): unknown;
    create(base?: DeepPartial<Machine>): Machine;
    fromPartial(object: DeepPartial<Machine>): Machine;
};
export declare const Profile: {
    encode(message: Profile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Profile;
    fromJSON(object: any): Profile;
    toJSON(message: Profile): unknown;
    create(base?: DeepPartial<Profile>): Profile;
    fromPartial(object: DeepPartial<Profile>): Profile;
};
export declare const Email: {
    encode(message: Email, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Email;
    fromJSON(object: any): Email;
    toJSON(message: Email): unknown;
    create(base?: DeepPartial<Email>): Email;
    fromPartial(object: DeepPartial<Email>): Email;
};
export declare const Phone: {
    encode(message: Phone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Phone;
    fromJSON(object: any): Phone;
    toJSON(message: Phone): unknown;
    create(base?: DeepPartial<Phone>): Phone;
    fromPartial(object: DeepPartial<Phone>): Phone;
};
export declare const SearchQuery: {
    encode(message: SearchQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchQuery;
    fromJSON(object: any): SearchQuery;
    toJSON(message: SearchQuery): unknown;
    create(base?: DeepPartial<SearchQuery>): SearchQuery;
    fromPartial(object: DeepPartial<SearchQuery>): SearchQuery;
};
export declare const OrQuery: {
    encode(message: OrQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrQuery;
    fromJSON(object: any): OrQuery;
    toJSON(message: OrQuery): unknown;
    create(base?: DeepPartial<OrQuery>): OrQuery;
    fromPartial(object: DeepPartial<OrQuery>): OrQuery;
};
export declare const AndQuery: {
    encode(message: AndQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AndQuery;
    fromJSON(object: any): AndQuery;
    toJSON(message: AndQuery): unknown;
    create(base?: DeepPartial<AndQuery>): AndQuery;
    fromPartial(object: DeepPartial<AndQuery>): AndQuery;
};
export declare const NotQuery: {
    encode(message: NotQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotQuery;
    fromJSON(object: any): NotQuery;
    toJSON(message: NotQuery): unknown;
    create(base?: DeepPartial<NotQuery>): NotQuery;
    fromPartial(object: DeepPartial<NotQuery>): NotQuery;
};
export declare const InUserIDQuery: {
    encode(message: InUserIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InUserIDQuery;
    fromJSON(object: any): InUserIDQuery;
    toJSON(message: InUserIDQuery): unknown;
    create(base?: DeepPartial<InUserIDQuery>): InUserIDQuery;
    fromPartial(object: DeepPartial<InUserIDQuery>): InUserIDQuery;
};
export declare const UserNameQuery: {
    encode(message: UserNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserNameQuery;
    fromJSON(object: any): UserNameQuery;
    toJSON(message: UserNameQuery): unknown;
    create(base?: DeepPartial<UserNameQuery>): UserNameQuery;
    fromPartial(object: DeepPartial<UserNameQuery>): UserNameQuery;
};
export declare const FirstNameQuery: {
    encode(message: FirstNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FirstNameQuery;
    fromJSON(object: any): FirstNameQuery;
    toJSON(message: FirstNameQuery): unknown;
    create(base?: DeepPartial<FirstNameQuery>): FirstNameQuery;
    fromPartial(object: DeepPartial<FirstNameQuery>): FirstNameQuery;
};
export declare const LastNameQuery: {
    encode(message: LastNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastNameQuery;
    fromJSON(object: any): LastNameQuery;
    toJSON(message: LastNameQuery): unknown;
    create(base?: DeepPartial<LastNameQuery>): LastNameQuery;
    fromPartial(object: DeepPartial<LastNameQuery>): LastNameQuery;
};
export declare const NickNameQuery: {
    encode(message: NickNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NickNameQuery;
    fromJSON(object: any): NickNameQuery;
    toJSON(message: NickNameQuery): unknown;
    create(base?: DeepPartial<NickNameQuery>): NickNameQuery;
    fromPartial(object: DeepPartial<NickNameQuery>): NickNameQuery;
};
export declare const DisplayNameQuery: {
    encode(message: DisplayNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisplayNameQuery;
    fromJSON(object: any): DisplayNameQuery;
    toJSON(message: DisplayNameQuery): unknown;
    create(base?: DeepPartial<DisplayNameQuery>): DisplayNameQuery;
    fromPartial(object: DeepPartial<DisplayNameQuery>): DisplayNameQuery;
};
export declare const EmailQuery: {
    encode(message: EmailQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmailQuery;
    fromJSON(object: any): EmailQuery;
    toJSON(message: EmailQuery): unknown;
    create(base?: DeepPartial<EmailQuery>): EmailQuery;
    fromPartial(object: DeepPartial<EmailQuery>): EmailQuery;
};
export declare const LoginNameQuery: {
    encode(message: LoginNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginNameQuery;
    fromJSON(object: any): LoginNameQuery;
    toJSON(message: LoginNameQuery): unknown;
    create(base?: DeepPartial<LoginNameQuery>): LoginNameQuery;
    fromPartial(object: DeepPartial<LoginNameQuery>): LoginNameQuery;
};
export declare const StateQuery: {
    encode(message: StateQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StateQuery;
    fromJSON(object: any): StateQuery;
    toJSON(message: StateQuery): unknown;
    create(base?: DeepPartial<StateQuery>): StateQuery;
    fromPartial(object: DeepPartial<StateQuery>): StateQuery;
};
export declare const TypeQuery: {
    encode(message: TypeQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TypeQuery;
    fromJSON(object: any): TypeQuery;
    toJSON(message: TypeQuery): unknown;
    create(base?: DeepPartial<TypeQuery>): TypeQuery;
    fromPartial(object: DeepPartial<TypeQuery>): TypeQuery;
};
export declare const AuthFactor: {
    encode(message: AuthFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactor;
    fromJSON(object: any): AuthFactor;
    toJSON(message: AuthFactor): unknown;
    create(base?: DeepPartial<AuthFactor>): AuthFactor;
    fromPartial(object: DeepPartial<AuthFactor>): AuthFactor;
};
export declare const AuthFactorOTP: {
    encode(_: AuthFactorOTP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactorOTP;
    fromJSON(_: any): AuthFactorOTP;
    toJSON(_: AuthFactorOTP): unknown;
    create(base?: DeepPartial<AuthFactorOTP>): AuthFactorOTP;
    fromPartial(_: DeepPartial<AuthFactorOTP>): AuthFactorOTP;
};
export declare const AuthFactorOTPSMS: {
    encode(_: AuthFactorOTPSMS, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactorOTPSMS;
    fromJSON(_: any): AuthFactorOTPSMS;
    toJSON(_: AuthFactorOTPSMS): unknown;
    create(base?: DeepPartial<AuthFactorOTPSMS>): AuthFactorOTPSMS;
    fromPartial(_: DeepPartial<AuthFactorOTPSMS>): AuthFactorOTPSMS;
};
export declare const AuthFactorOTPEmail: {
    encode(_: AuthFactorOTPEmail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactorOTPEmail;
    fromJSON(_: any): AuthFactorOTPEmail;
    toJSON(_: AuthFactorOTPEmail): unknown;
    create(base?: DeepPartial<AuthFactorOTPEmail>): AuthFactorOTPEmail;
    fromPartial(_: DeepPartial<AuthFactorOTPEmail>): AuthFactorOTPEmail;
};
export declare const AuthFactorU2F: {
    encode(message: AuthFactorU2F, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactorU2F;
    fromJSON(object: any): AuthFactorU2F;
    toJSON(message: AuthFactorU2F): unknown;
    create(base?: DeepPartial<AuthFactorU2F>): AuthFactorU2F;
    fromPartial(object: DeepPartial<AuthFactorU2F>): AuthFactorU2F;
};
export declare const WebAuthNKey: {
    encode(message: WebAuthNKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WebAuthNKey;
    fromJSON(object: any): WebAuthNKey;
    toJSON(message: WebAuthNKey): unknown;
    create(base?: DeepPartial<WebAuthNKey>): WebAuthNKey;
    fromPartial(object: DeepPartial<WebAuthNKey>): WebAuthNKey;
};
export declare const WebAuthNVerification: {
    encode(message: WebAuthNVerification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WebAuthNVerification;
    fromJSON(object: any): WebAuthNVerification;
    toJSON(message: WebAuthNVerification): unknown;
    create(base?: DeepPartial<WebAuthNVerification>): WebAuthNVerification;
    fromPartial(object: DeepPartial<WebAuthNVerification>): WebAuthNVerification;
};
export declare const WebAuthNToken: {
    encode(message: WebAuthNToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WebAuthNToken;
    fromJSON(object: any): WebAuthNToken;
    toJSON(message: WebAuthNToken): unknown;
    create(base?: DeepPartial<WebAuthNToken>): WebAuthNToken;
    fromPartial(object: DeepPartial<WebAuthNToken>): WebAuthNToken;
};
export declare const Membership: {
    encode(message: Membership, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Membership;
    fromJSON(object: any): Membership;
    toJSON(message: Membership): unknown;
    create(base?: DeepPartial<Membership>): Membership;
    fromPartial(object: DeepPartial<Membership>): Membership;
};
export declare const MembershipQuery: {
    encode(message: MembershipQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MembershipQuery;
    fromJSON(object: any): MembershipQuery;
    toJSON(message: MembershipQuery): unknown;
    create(base?: DeepPartial<MembershipQuery>): MembershipQuery;
    fromPartial(object: DeepPartial<MembershipQuery>): MembershipQuery;
};
export declare const MembershipOrgQuery: {
    encode(message: MembershipOrgQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MembershipOrgQuery;
    fromJSON(object: any): MembershipOrgQuery;
    toJSON(message: MembershipOrgQuery): unknown;
    create(base?: DeepPartial<MembershipOrgQuery>): MembershipOrgQuery;
    fromPartial(object: DeepPartial<MembershipOrgQuery>): MembershipOrgQuery;
};
export declare const MembershipProjectQuery: {
    encode(message: MembershipProjectQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MembershipProjectQuery;
    fromJSON(object: any): MembershipProjectQuery;
    toJSON(message: MembershipProjectQuery): unknown;
    create(base?: DeepPartial<MembershipProjectQuery>): MembershipProjectQuery;
    fromPartial(object: DeepPartial<MembershipProjectQuery>): MembershipProjectQuery;
};
export declare const MembershipProjectGrantQuery: {
    encode(message: MembershipProjectGrantQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MembershipProjectGrantQuery;
    fromJSON(object: any): MembershipProjectGrantQuery;
    toJSON(message: MembershipProjectGrantQuery): unknown;
    create(base?: DeepPartial<MembershipProjectGrantQuery>): MembershipProjectGrantQuery;
    fromPartial(object: DeepPartial<MembershipProjectGrantQuery>): MembershipProjectGrantQuery;
};
export declare const MembershipIAMQuery: {
    encode(message: MembershipIAMQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MembershipIAMQuery;
    fromJSON(object: any): MembershipIAMQuery;
    toJSON(message: MembershipIAMQuery): unknown;
    create(base?: DeepPartial<MembershipIAMQuery>): MembershipIAMQuery;
    fromPartial(object: DeepPartial<MembershipIAMQuery>): MembershipIAMQuery;
};
export declare const Session: {
    encode(message: Session, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Session;
    fromJSON(object: any): Session;
    toJSON(message: Session): unknown;
    create(base?: DeepPartial<Session>): Session;
    fromPartial(object: DeepPartial<Session>): Session;
};
export declare const RefreshToken: {
    encode(message: RefreshToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefreshToken;
    fromJSON(object: any): RefreshToken;
    toJSON(message: RefreshToken): unknown;
    create(base?: DeepPartial<RefreshToken>): RefreshToken;
    fromPartial(object: DeepPartial<RefreshToken>): RefreshToken;
};
export declare const PersonalAccessToken: {
    encode(message: PersonalAccessToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PersonalAccessToken;
    fromJSON(object: any): PersonalAccessToken;
    toJSON(message: PersonalAccessToken): unknown;
    create(base?: DeepPartial<PersonalAccessToken>): PersonalAccessToken;
    fromPartial(object: DeepPartial<PersonalAccessToken>): PersonalAccessToken;
};
export declare const UserGrant: {
    encode(message: UserGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrant;
    fromJSON(object: any): UserGrant;
    toJSON(message: UserGrant): unknown;
    create(base?: DeepPartial<UserGrant>): UserGrant;
    fromPartial(object: DeepPartial<UserGrant>): UserGrant;
};
export declare const UserGrantQuery: {
    encode(message: UserGrantQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantQuery;
    fromJSON(object: any): UserGrantQuery;
    toJSON(message: UserGrantQuery): unknown;
    create(base?: DeepPartial<UserGrantQuery>): UserGrantQuery;
    fromPartial(object: DeepPartial<UserGrantQuery>): UserGrantQuery;
};
export declare const UserGrantProjectIDQuery: {
    encode(message: UserGrantProjectIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantProjectIDQuery;
    fromJSON(object: any): UserGrantProjectIDQuery;
    toJSON(message: UserGrantProjectIDQuery): unknown;
    create(base?: DeepPartial<UserGrantProjectIDQuery>): UserGrantProjectIDQuery;
    fromPartial(object: DeepPartial<UserGrantProjectIDQuery>): UserGrantProjectIDQuery;
};
export declare const UserGrantUserIDQuery: {
    encode(message: UserGrantUserIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantUserIDQuery;
    fromJSON(object: any): UserGrantUserIDQuery;
    toJSON(message: UserGrantUserIDQuery): unknown;
    create(base?: DeepPartial<UserGrantUserIDQuery>): UserGrantUserIDQuery;
    fromPartial(object: DeepPartial<UserGrantUserIDQuery>): UserGrantUserIDQuery;
};
export declare const UserGrantWithGrantedQuery: {
    encode(message: UserGrantWithGrantedQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantWithGrantedQuery;
    fromJSON(object: any): UserGrantWithGrantedQuery;
    toJSON(message: UserGrantWithGrantedQuery): unknown;
    create(base?: DeepPartial<UserGrantWithGrantedQuery>): UserGrantWithGrantedQuery;
    fromPartial(object: DeepPartial<UserGrantWithGrantedQuery>): UserGrantWithGrantedQuery;
};
export declare const UserGrantRoleKeyQuery: {
    encode(message: UserGrantRoleKeyQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantRoleKeyQuery;
    fromJSON(object: any): UserGrantRoleKeyQuery;
    toJSON(message: UserGrantRoleKeyQuery): unknown;
    create(base?: DeepPartial<UserGrantRoleKeyQuery>): UserGrantRoleKeyQuery;
    fromPartial(object: DeepPartial<UserGrantRoleKeyQuery>): UserGrantRoleKeyQuery;
};
export declare const UserGrantProjectGrantIDQuery: {
    encode(message: UserGrantProjectGrantIDQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantProjectGrantIDQuery;
    fromJSON(object: any): UserGrantProjectGrantIDQuery;
    toJSON(message: UserGrantProjectGrantIDQuery): unknown;
    create(base?: DeepPartial<UserGrantProjectGrantIDQuery>): UserGrantProjectGrantIDQuery;
    fromPartial(object: DeepPartial<UserGrantProjectGrantIDQuery>): UserGrantProjectGrantIDQuery;
};
export declare const UserGrantUserNameQuery: {
    encode(message: UserGrantUserNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantUserNameQuery;
    fromJSON(object: any): UserGrantUserNameQuery;
    toJSON(message: UserGrantUserNameQuery): unknown;
    create(base?: DeepPartial<UserGrantUserNameQuery>): UserGrantUserNameQuery;
    fromPartial(object: DeepPartial<UserGrantUserNameQuery>): UserGrantUserNameQuery;
};
export declare const UserGrantFirstNameQuery: {
    encode(message: UserGrantFirstNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantFirstNameQuery;
    fromJSON(object: any): UserGrantFirstNameQuery;
    toJSON(message: UserGrantFirstNameQuery): unknown;
    create(base?: DeepPartial<UserGrantFirstNameQuery>): UserGrantFirstNameQuery;
    fromPartial(object: DeepPartial<UserGrantFirstNameQuery>): UserGrantFirstNameQuery;
};
export declare const UserGrantLastNameQuery: {
    encode(message: UserGrantLastNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantLastNameQuery;
    fromJSON(object: any): UserGrantLastNameQuery;
    toJSON(message: UserGrantLastNameQuery): unknown;
    create(base?: DeepPartial<UserGrantLastNameQuery>): UserGrantLastNameQuery;
    fromPartial(object: DeepPartial<UserGrantLastNameQuery>): UserGrantLastNameQuery;
};
export declare const UserGrantEmailQuery: {
    encode(message: UserGrantEmailQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantEmailQuery;
    fromJSON(object: any): UserGrantEmailQuery;
    toJSON(message: UserGrantEmailQuery): unknown;
    create(base?: DeepPartial<UserGrantEmailQuery>): UserGrantEmailQuery;
    fromPartial(object: DeepPartial<UserGrantEmailQuery>): UserGrantEmailQuery;
};
export declare const UserGrantOrgNameQuery: {
    encode(message: UserGrantOrgNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantOrgNameQuery;
    fromJSON(object: any): UserGrantOrgNameQuery;
    toJSON(message: UserGrantOrgNameQuery): unknown;
    create(base?: DeepPartial<UserGrantOrgNameQuery>): UserGrantOrgNameQuery;
    fromPartial(object: DeepPartial<UserGrantOrgNameQuery>): UserGrantOrgNameQuery;
};
export declare const UserGrantOrgDomainQuery: {
    encode(message: UserGrantOrgDomainQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantOrgDomainQuery;
    fromJSON(object: any): UserGrantOrgDomainQuery;
    toJSON(message: UserGrantOrgDomainQuery): unknown;
    create(base?: DeepPartial<UserGrantOrgDomainQuery>): UserGrantOrgDomainQuery;
    fromPartial(object: DeepPartial<UserGrantOrgDomainQuery>): UserGrantOrgDomainQuery;
};
export declare const UserGrantProjectNameQuery: {
    encode(message: UserGrantProjectNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantProjectNameQuery;
    fromJSON(object: any): UserGrantProjectNameQuery;
    toJSON(message: UserGrantProjectNameQuery): unknown;
    create(base?: DeepPartial<UserGrantProjectNameQuery>): UserGrantProjectNameQuery;
    fromPartial(object: DeepPartial<UserGrantProjectNameQuery>): UserGrantProjectNameQuery;
};
export declare const UserGrantDisplayNameQuery: {
    encode(message: UserGrantDisplayNameQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantDisplayNameQuery;
    fromJSON(object: any): UserGrantDisplayNameQuery;
    toJSON(message: UserGrantDisplayNameQuery): unknown;
    create(base?: DeepPartial<UserGrantDisplayNameQuery>): UserGrantDisplayNameQuery;
    fromPartial(object: DeepPartial<UserGrantDisplayNameQuery>): UserGrantDisplayNameQuery;
};
export declare const UserGrantUserTypeQuery: {
    encode(message: UserGrantUserTypeQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantUserTypeQuery;
    fromJSON(object: any): UserGrantUserTypeQuery;
    toJSON(message: UserGrantUserTypeQuery): unknown;
    create(base?: DeepPartial<UserGrantUserTypeQuery>): UserGrantUserTypeQuery;
    fromPartial(object: DeepPartial<UserGrantUserTypeQuery>): UserGrantUserTypeQuery;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
