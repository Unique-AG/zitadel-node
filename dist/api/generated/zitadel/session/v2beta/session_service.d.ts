import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Duration } from "../../../google/protobuf/duration.js";
import { Details, ListDetails, ListQuery } from "../../object/v2beta/object.js";
import { Challenges, RequestChallenges } from "./challenge.js";
import { SearchQuery, Session, SessionFieldName, UserAgent } from "./session.js";
export declare const protobufPackage = "zitadel.session.v2beta";
export interface ListSessionsRequest {
    query: ListQuery | undefined;
    queries: SearchQuery[];
    sortingColumn: SessionFieldName;
}
export interface ListSessionsResponse {
    details: ListDetails | undefined;
    sessions: Session[];
}
export interface GetSessionRequest {
    sessionId: string;
    sessionToken?: string | undefined;
}
export interface GetSessionResponse {
    session: Session | undefined;
}
export interface CreateSessionRequest {
    checks: Checks | undefined;
    metadata: {
        [key: string]: Buffer;
    };
    challenges: RequestChallenges | undefined;
    userAgent: UserAgent | undefined;
    lifetime?: Duration | undefined;
}
export interface CreateSessionRequest_MetadataEntry {
    key: string;
    value: Buffer;
}
export interface CreateSessionResponse {
    details: Details | undefined;
    sessionId: string;
    sessionToken: string;
    challenges: Challenges | undefined;
}
export interface SetSessionRequest {
    sessionId: string;
    sessionToken: string;
    checks: Checks | undefined;
    metadata: {
        [key: string]: Buffer;
    };
    challenges: RequestChallenges | undefined;
    lifetime?: Duration | undefined;
}
export interface SetSessionRequest_MetadataEntry {
    key: string;
    value: Buffer;
}
export interface SetSessionResponse {
    details: Details | undefined;
    sessionToken: string;
    challenges: Challenges | undefined;
}
export interface DeleteSessionRequest {
    sessionId: string;
    sessionToken?: string | undefined;
}
export interface DeleteSessionResponse {
    details: Details | undefined;
}
export interface Checks {
    user?: CheckUser | undefined;
    password?: CheckPassword | undefined;
    webAuthN?: CheckWebAuthN | undefined;
    idpIntent?: CheckIDPIntent | undefined;
    totp?: CheckTOTP | undefined;
    otpSms?: CheckOTP | undefined;
    otpEmail?: CheckOTP | undefined;
}
export interface CheckUser {
    userId?: string | undefined;
    loginName?: string | undefined;
}
export interface CheckPassword {
    password: string;
}
export interface CheckWebAuthN {
    credentialAssertionData: {
        [key: string]: any;
    } | undefined;
}
export interface CheckIDPIntent {
    idpIntentId: string;
    idpIntentToken: string;
}
export interface CheckTOTP {
    code: string;
}
export interface CheckOTP {
    code: string;
}
export declare const ListSessionsRequest: MessageFns<ListSessionsRequest>;
export declare const ListSessionsResponse: MessageFns<ListSessionsResponse>;
export declare const GetSessionRequest: MessageFns<GetSessionRequest>;
export declare const GetSessionResponse: MessageFns<GetSessionResponse>;
export declare const CreateSessionRequest: MessageFns<CreateSessionRequest>;
export declare const CreateSessionRequest_MetadataEntry: MessageFns<CreateSessionRequest_MetadataEntry>;
export declare const CreateSessionResponse: MessageFns<CreateSessionResponse>;
export declare const SetSessionRequest: MessageFns<SetSessionRequest>;
export declare const SetSessionRequest_MetadataEntry: MessageFns<SetSessionRequest_MetadataEntry>;
export declare const SetSessionResponse: MessageFns<SetSessionResponse>;
export declare const DeleteSessionRequest: MessageFns<DeleteSessionRequest>;
export declare const DeleteSessionResponse: MessageFns<DeleteSessionResponse>;
export declare const Checks: MessageFns<Checks>;
export declare const CheckUser: MessageFns<CheckUser>;
export declare const CheckPassword: MessageFns<CheckPassword>;
export declare const CheckWebAuthN: MessageFns<CheckWebAuthN>;
export declare const CheckIDPIntent: MessageFns<CheckIDPIntent>;
export declare const CheckTOTP: MessageFns<CheckTOTP>;
export declare const CheckOTP: MessageFns<CheckOTP>;
export type SessionServiceDefinition = typeof SessionServiceDefinition;
export declare const SessionServiceDefinition: {
    readonly name: "SessionService";
    readonly fullName: "zitadel.session.v2beta.SessionService";
    readonly methods: {
        /** Search sessions */
        readonly listSessions: {
            readonly name: "ListSessions";
            readonly requestType: MessageFns<ListSessionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListSessionsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** GetSession a session */
        readonly getSession: {
            readonly name: "GetSession";
            readonly requestType: MessageFns<GetSessionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSessionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Create a new session */
        readonly createSession: {
            readonly name: "CreateSession";
            readonly requestType: MessageFns<CreateSessionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateSessionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Update a session */
        readonly setSession: {
            readonly name: "SetSession";
            readonly requestType: MessageFns<SetSessionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetSessionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Terminate a session */
        readonly deleteSession: {
            readonly name: "DeleteSession";
            readonly requestType: MessageFns<DeleteSessionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteSessionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface SessionServiceImplementation<CallContextExt = {}> {
    /** Search sessions */
    listSessions(request: ListSessionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListSessionsResponse>>;
    /** GetSession a session */
    getSession(request: GetSessionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSessionResponse>>;
    /** Create a new session */
    createSession(request: CreateSessionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateSessionResponse>>;
    /** Update a session */
    setSession(request: SetSessionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetSessionResponse>>;
    /** Terminate a session */
    deleteSession(request: DeleteSessionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteSessionResponse>>;
}
export interface SessionServiceClient<CallOptionsExt = {}> {
    /** Search sessions */
    listSessions(request: DeepPartial<ListSessionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListSessionsResponse>;
    /** GetSession a session */
    getSession(request: DeepPartial<GetSessionRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSessionResponse>;
    /** Create a new session */
    createSession(request: DeepPartial<CreateSessionRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateSessionResponse>;
    /** Update a session */
    setSession(request: DeepPartial<SetSessionRequest>, options?: CallOptions & CallOptionsExt): Promise<SetSessionResponse>;
    /** Terminate a session */
    deleteSession(request: DeepPartial<DeleteSessionRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteSessionResponse>;
}
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
