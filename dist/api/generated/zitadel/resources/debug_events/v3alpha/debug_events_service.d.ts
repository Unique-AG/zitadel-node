import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Instance } from "../../../object/v3alpha/object.js";
import { Details } from "../../object/v3alpha/object.js";
import { Event } from "./event.js";
import { State } from "./state.js";
export declare const protobufPackage = "zitadel.resources.debug_events.v3alpha";
export interface CreateDebugEventsRequest {
    instance?: Instance | undefined;
    /** unique identifier for the aggregate we want to push events to. */
    aggregateId: string;
    events: Event[];
}
export interface CreateDebugEventsResponse {
    details: Details | undefined;
}
export interface GetDebugEventsStateByIdRequest {
    /** unique identifier of the aggregate. */
    id: string;
    triggerBulk: boolean;
}
export interface GetDebugEventsStateByIdResponse {
    state: State | undefined;
}
export interface ListDebugEventsStatesRequest {
    triggerBulk: boolean;
}
export interface ListDebugEventsStatesResponse {
    states: State[];
}
export declare const CreateDebugEventsRequest: MessageFns<CreateDebugEventsRequest>;
export declare const CreateDebugEventsResponse: MessageFns<CreateDebugEventsResponse>;
export declare const GetDebugEventsStateByIdRequest: MessageFns<GetDebugEventsStateByIdRequest>;
export declare const GetDebugEventsStateByIdResponse: MessageFns<GetDebugEventsStateByIdResponse>;
export declare const ListDebugEventsStatesRequest: MessageFns<ListDebugEventsStatesRequest>;
export declare const ListDebugEventsStatesResponse: MessageFns<ListDebugEventsStatesResponse>;
export type ZITADELDebugEventsDefinition = typeof ZITADELDebugEventsDefinition;
export declare const ZITADELDebugEventsDefinition: {
    readonly name: "ZITADELDebugEvents";
    readonly fullName: "zitadel.resources.debug_events.v3alpha.ZITADELDebugEvents";
    readonly methods: {
        readonly createDebugEvents: {
            readonly name: "CreateDebugEvents";
            readonly requestType: MessageFns<CreateDebugEventsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateDebugEventsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDebugEventsStateById: {
            readonly name: "GetDebugEventsStateById";
            readonly requestType: MessageFns<GetDebugEventsStateByIdRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDebugEventsStateByIdResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listDebugEventsStates: {
            readonly name: "ListDebugEventsStates";
            readonly requestType: MessageFns<ListDebugEventsStatesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListDebugEventsStatesResponse>;
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
export interface ZITADELDebugEventsServiceImplementation<CallContextExt = {}> {
    createDebugEvents(request: CreateDebugEventsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateDebugEventsResponse>>;
    getDebugEventsStateById(request: GetDebugEventsStateByIdRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDebugEventsStateByIdResponse>>;
    listDebugEventsStates(request: ListDebugEventsStatesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListDebugEventsStatesResponse>>;
}
export interface ZITADELDebugEventsClient<CallOptionsExt = {}> {
    createDebugEvents(request: DeepPartial<CreateDebugEventsRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateDebugEventsResponse>;
    getDebugEventsStateById(request: DeepPartial<GetDebugEventsStateByIdRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDebugEventsStateByIdResponse>;
    listDebugEventsStates(request: DeepPartial<ListDebugEventsStatesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListDebugEventsStatesResponse>;
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
