/// <reference types="node" />
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Details, ListDetails, ListQuery } from "../../object/v2beta/object";
import { Challenges, RequestChallenges } from "./challenge";
import { SearchQuery, Session, SessionFieldName, UserAgent } from "./session";
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
export declare const ListSessionsRequest: {
    encode(message: ListSessionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSessionsRequest;
    fromJSON(object: any): ListSessionsRequest;
    toJSON(message: ListSessionsRequest): unknown;
    create(base?: DeepPartial<ListSessionsRequest>): ListSessionsRequest;
    fromPartial(object: DeepPartial<ListSessionsRequest>): ListSessionsRequest;
};
export declare const ListSessionsResponse: {
    encode(message: ListSessionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSessionsResponse;
    fromJSON(object: any): ListSessionsResponse;
    toJSON(message: ListSessionsResponse): unknown;
    create(base?: DeepPartial<ListSessionsResponse>): ListSessionsResponse;
    fromPartial(object: DeepPartial<ListSessionsResponse>): ListSessionsResponse;
};
export declare const GetSessionRequest: {
    encode(message: GetSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionRequest;
    fromJSON(object: any): GetSessionRequest;
    toJSON(message: GetSessionRequest): unknown;
    create(base?: DeepPartial<GetSessionRequest>): GetSessionRequest;
    fromPartial(object: DeepPartial<GetSessionRequest>): GetSessionRequest;
};
export declare const GetSessionResponse: {
    encode(message: GetSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionResponse;
    fromJSON(object: any): GetSessionResponse;
    toJSON(message: GetSessionResponse): unknown;
    create(base?: DeepPartial<GetSessionResponse>): GetSessionResponse;
    fromPartial(object: DeepPartial<GetSessionResponse>): GetSessionResponse;
};
export declare const CreateSessionRequest: {
    encode(message: CreateSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSessionRequest;
    fromJSON(object: any): CreateSessionRequest;
    toJSON(message: CreateSessionRequest): unknown;
    create(base?: DeepPartial<CreateSessionRequest>): CreateSessionRequest;
    fromPartial(object: DeepPartial<CreateSessionRequest>): CreateSessionRequest;
};
export declare const CreateSessionRequest_MetadataEntry: {
    encode(message: CreateSessionRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSessionRequest_MetadataEntry;
    fromJSON(object: any): CreateSessionRequest_MetadataEntry;
    toJSON(message: CreateSessionRequest_MetadataEntry): unknown;
    create(base?: DeepPartial<CreateSessionRequest_MetadataEntry>): CreateSessionRequest_MetadataEntry;
    fromPartial(object: DeepPartial<CreateSessionRequest_MetadataEntry>): CreateSessionRequest_MetadataEntry;
};
export declare const CreateSessionResponse: {
    encode(message: CreateSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSessionResponse;
    fromJSON(object: any): CreateSessionResponse;
    toJSON(message: CreateSessionResponse): unknown;
    create(base?: DeepPartial<CreateSessionResponse>): CreateSessionResponse;
    fromPartial(object: DeepPartial<CreateSessionResponse>): CreateSessionResponse;
};
export declare const SetSessionRequest: {
    encode(message: SetSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSessionRequest;
    fromJSON(object: any): SetSessionRequest;
    toJSON(message: SetSessionRequest): unknown;
    create(base?: DeepPartial<SetSessionRequest>): SetSessionRequest;
    fromPartial(object: DeepPartial<SetSessionRequest>): SetSessionRequest;
};
export declare const SetSessionRequest_MetadataEntry: {
    encode(message: SetSessionRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSessionRequest_MetadataEntry;
    fromJSON(object: any): SetSessionRequest_MetadataEntry;
    toJSON(message: SetSessionRequest_MetadataEntry): unknown;
    create(base?: DeepPartial<SetSessionRequest_MetadataEntry>): SetSessionRequest_MetadataEntry;
    fromPartial(object: DeepPartial<SetSessionRequest_MetadataEntry>): SetSessionRequest_MetadataEntry;
};
export declare const SetSessionResponse: {
    encode(message: SetSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSessionResponse;
    fromJSON(object: any): SetSessionResponse;
    toJSON(message: SetSessionResponse): unknown;
    create(base?: DeepPartial<SetSessionResponse>): SetSessionResponse;
    fromPartial(object: DeepPartial<SetSessionResponse>): SetSessionResponse;
};
export declare const DeleteSessionRequest: {
    encode(message: DeleteSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSessionRequest;
    fromJSON(object: any): DeleteSessionRequest;
    toJSON(message: DeleteSessionRequest): unknown;
    create(base?: DeepPartial<DeleteSessionRequest>): DeleteSessionRequest;
    fromPartial(object: DeepPartial<DeleteSessionRequest>): DeleteSessionRequest;
};
export declare const DeleteSessionResponse: {
    encode(message: DeleteSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSessionResponse;
    fromJSON(object: any): DeleteSessionResponse;
    toJSON(message: DeleteSessionResponse): unknown;
    create(base?: DeepPartial<DeleteSessionResponse>): DeleteSessionResponse;
    fromPartial(object: DeepPartial<DeleteSessionResponse>): DeleteSessionResponse;
};
export declare const Checks: {
    encode(message: Checks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Checks;
    fromJSON(object: any): Checks;
    toJSON(message: Checks): unknown;
    create(base?: DeepPartial<Checks>): Checks;
    fromPartial(object: DeepPartial<Checks>): Checks;
};
export declare const CheckUser: {
    encode(message: CheckUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckUser;
    fromJSON(object: any): CheckUser;
    toJSON(message: CheckUser): unknown;
    create(base?: DeepPartial<CheckUser>): CheckUser;
    fromPartial(object: DeepPartial<CheckUser>): CheckUser;
};
export declare const CheckPassword: {
    encode(message: CheckPassword, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckPassword;
    fromJSON(object: any): CheckPassword;
    toJSON(message: CheckPassword): unknown;
    create(base?: DeepPartial<CheckPassword>): CheckPassword;
    fromPartial(object: DeepPartial<CheckPassword>): CheckPassword;
};
export declare const CheckWebAuthN: {
    encode(message: CheckWebAuthN, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckWebAuthN;
    fromJSON(object: any): CheckWebAuthN;
    toJSON(message: CheckWebAuthN): unknown;
    create(base?: DeepPartial<CheckWebAuthN>): CheckWebAuthN;
    fromPartial(object: DeepPartial<CheckWebAuthN>): CheckWebAuthN;
};
export declare const CheckIDPIntent: {
    encode(message: CheckIDPIntent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckIDPIntent;
    fromJSON(object: any): CheckIDPIntent;
    toJSON(message: CheckIDPIntent): unknown;
    create(base?: DeepPartial<CheckIDPIntent>): CheckIDPIntent;
    fromPartial(object: DeepPartial<CheckIDPIntent>): CheckIDPIntent;
};
export declare const CheckTOTP: {
    encode(message: CheckTOTP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckTOTP;
    fromJSON(object: any): CheckTOTP;
    toJSON(message: CheckTOTP): unknown;
    create(base?: DeepPartial<CheckTOTP>): CheckTOTP;
    fromPartial(object: DeepPartial<CheckTOTP>): CheckTOTP;
};
export declare const CheckOTP: {
    encode(message: CheckOTP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckOTP;
    fromJSON(object: any): CheckOTP;
    toJSON(message: CheckOTP): unknown;
    create(base?: DeepPartial<CheckOTP>): CheckOTP;
    fromPartial(object: DeepPartial<CheckOTP>): CheckOTP;
};
export type SessionServiceDefinition = typeof SessionServiceDefinition;
export declare const SessionServiceDefinition: {
    readonly name: "SessionService";
    readonly fullName: "zitadel.session.v2beta.SessionService";
    readonly methods: {
        /** Search sessions */
        readonly listSessions: {
            readonly name: "ListSessions";
            readonly requestType: {
                encode(message: ListSessionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListSessionsRequest;
                fromJSON(object: any): ListSessionsRequest;
                toJSON(message: ListSessionsRequest): unknown;
                create(base?: DeepPartial<ListSessionsRequest>): ListSessionsRequest;
                fromPartial(object: DeepPartial<ListSessionsRequest>): ListSessionsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListSessionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListSessionsResponse;
                fromJSON(object: any): ListSessionsResponse;
                toJSON(message: ListSessionsResponse): unknown;
                create(base?: DeepPartial<ListSessionsResponse>): ListSessionsResponse;
                fromPartial(object: DeepPartial<ListSessionsResponse>): ListSessionsResponse;
            };
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
            readonly requestType: {
                encode(message: GetSessionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionRequest;
                fromJSON(object: any): GetSessionRequest;
                toJSON(message: GetSessionRequest): unknown;
                create(base?: DeepPartial<GetSessionRequest>): GetSessionRequest;
                fromPartial(object: DeepPartial<GetSessionRequest>): GetSessionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetSessionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSessionResponse;
                fromJSON(object: any): GetSessionResponse;
                toJSON(message: GetSessionResponse): unknown;
                create(base?: DeepPartial<GetSessionResponse>): GetSessionResponse;
                fromPartial(object: DeepPartial<GetSessionResponse>): GetSessionResponse;
            };
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
            readonly requestType: {
                encode(message: CreateSessionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateSessionRequest;
                fromJSON(object: any): CreateSessionRequest;
                toJSON(message: CreateSessionRequest): unknown;
                create(base?: DeepPartial<CreateSessionRequest>): CreateSessionRequest;
                fromPartial(object: DeepPartial<CreateSessionRequest>): CreateSessionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateSessionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateSessionResponse;
                fromJSON(object: any): CreateSessionResponse;
                toJSON(message: CreateSessionResponse): unknown;
                create(base?: DeepPartial<CreateSessionResponse>): CreateSessionResponse;
                fromPartial(object: DeepPartial<CreateSessionResponse>): CreateSessionResponse;
            };
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
            readonly requestType: {
                encode(message: SetSessionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetSessionRequest;
                fromJSON(object: any): SetSessionRequest;
                toJSON(message: SetSessionRequest): unknown;
                create(base?: DeepPartial<SetSessionRequest>): SetSessionRequest;
                fromPartial(object: DeepPartial<SetSessionRequest>): SetSessionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetSessionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetSessionResponse;
                fromJSON(object: any): SetSessionResponse;
                toJSON(message: SetSessionResponse): unknown;
                create(base?: DeepPartial<SetSessionResponse>): SetSessionResponse;
                fromPartial(object: DeepPartial<SetSessionResponse>): SetSessionResponse;
            };
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
            readonly requestType: {
                encode(message: DeleteSessionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSessionRequest;
                fromJSON(object: any): DeleteSessionRequest;
                toJSON(message: DeleteSessionRequest): unknown;
                create(base?: DeepPartial<DeleteSessionRequest>): DeleteSessionRequest;
                fromPartial(object: DeepPartial<DeleteSessionRequest>): DeleteSessionRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DeleteSessionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSessionResponse;
                fromJSON(object: any): DeleteSessionResponse;
                toJSON(message: DeleteSessionResponse): unknown;
                create(base?: DeepPartial<DeleteSessionResponse>): DeleteSessionResponse;
                fromPartial(object: DeepPartial<DeleteSessionResponse>): DeleteSessionResponse;
            };
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
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
