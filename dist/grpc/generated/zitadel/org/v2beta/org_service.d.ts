/// <reference types="node" />
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Details } from "../../object/v2beta/object";
import { AddHumanUserRequest } from "../../user/v2beta/user_service";
export declare const protobufPackage = "zitadel.org.v2beta";
export interface AddOrganizationRequest {
    name: string;
    admins: AddOrganizationRequest_Admin[];
}
export interface AddOrganizationRequest_Admin {
    userId?: string | undefined;
    human?: AddHumanUserRequest | undefined;
    /** specify Org Member Roles for the provided user (default is ORG_OWNER if roles are empty) */
    roles: string[];
}
export interface AddOrganizationResponse {
    details: Details | undefined;
    organizationId: string;
    createdAdmins: AddOrganizationResponse_CreatedAdmin[];
}
export interface AddOrganizationResponse_CreatedAdmin {
    userId: string;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
}
export declare const AddOrganizationRequest: {
    encode(message: AddOrganizationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrganizationRequest;
    fromJSON(object: any): AddOrganizationRequest;
    toJSON(message: AddOrganizationRequest): unknown;
    create(base?: DeepPartial<AddOrganizationRequest>): AddOrganizationRequest;
    fromPartial(object: DeepPartial<AddOrganizationRequest>): AddOrganizationRequest;
};
export declare const AddOrganizationRequest_Admin: {
    encode(message: AddOrganizationRequest_Admin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrganizationRequest_Admin;
    fromJSON(object: any): AddOrganizationRequest_Admin;
    toJSON(message: AddOrganizationRequest_Admin): unknown;
    create(base?: DeepPartial<AddOrganizationRequest_Admin>): AddOrganizationRequest_Admin;
    fromPartial(object: DeepPartial<AddOrganizationRequest_Admin>): AddOrganizationRequest_Admin;
};
export declare const AddOrganizationResponse: {
    encode(message: AddOrganizationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrganizationResponse;
    fromJSON(object: any): AddOrganizationResponse;
    toJSON(message: AddOrganizationResponse): unknown;
    create(base?: DeepPartial<AddOrganizationResponse>): AddOrganizationResponse;
    fromPartial(object: DeepPartial<AddOrganizationResponse>): AddOrganizationResponse;
};
export declare const AddOrganizationResponse_CreatedAdmin: {
    encode(message: AddOrganizationResponse_CreatedAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddOrganizationResponse_CreatedAdmin;
    fromJSON(object: any): AddOrganizationResponse_CreatedAdmin;
    toJSON(message: AddOrganizationResponse_CreatedAdmin): unknown;
    create(base?: DeepPartial<AddOrganizationResponse_CreatedAdmin>): AddOrganizationResponse_CreatedAdmin;
    fromPartial(object: DeepPartial<AddOrganizationResponse_CreatedAdmin>): AddOrganizationResponse_CreatedAdmin;
};
export type OrganizationServiceDefinition = typeof OrganizationServiceDefinition;
export declare const OrganizationServiceDefinition: {
    readonly name: "OrganizationService";
    readonly fullName: "zitadel.org.v2beta.OrganizationService";
    readonly methods: {
        /** Create a new organization and grant the user(s) permission to manage it */
        readonly addOrganization: {
            readonly name: "AddOrganization";
            readonly requestType: {
                encode(message: AddOrganizationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrganizationRequest;
                fromJSON(object: any): AddOrganizationRequest;
                toJSON(message: AddOrganizationRequest): unknown;
                create(base?: DeepPartial<AddOrganizationRequest>): AddOrganizationRequest;
                fromPartial(object: DeepPartial<AddOrganizationRequest>): AddOrganizationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddOrganizationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddOrganizationResponse;
                fromJSON(object: any): AddOrganizationResponse;
                toJSON(message: AddOrganizationResponse): unknown;
                create(base?: DeepPartial<AddOrganizationResponse>): AddOrganizationResponse;
                fromPartial(object: DeepPartial<AddOrganizationResponse>): AddOrganizationResponse;
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
export interface OrganizationServiceImplementation<CallContextExt = {}> {
    /** Create a new organization and grant the user(s) permission to manage it */
    addOrganization(request: AddOrganizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrganizationResponse>>;
}
export interface OrganizationServiceClient<CallOptionsExt = {}> {
    /** Create a new organization and grant the user(s) permission to manage it */
    addOrganization(request: DeepPartial<AddOrganizationRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrganizationResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
