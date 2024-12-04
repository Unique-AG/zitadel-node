import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Instance } from "../../../object/v3alpha/object.js";
import { Details, ListDetails, SearchQuery } from "../../object/v3alpha/object.js";
import { FieldName, GetUserSchema, PatchUserSchema, SearchFilter, UserSchema } from "./user_schema.js";
export declare const protobufPackage = "zitadel.resources.userschema.v3alpha";
export interface SearchUserSchemasRequest {
    instance?: Instance | undefined;
    /** list limitations and ordering. */
    query?: SearchQuery | undefined;
    /** The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent. */
    sortingColumn?: FieldName | undefined;
    /** Define the criteria to filter for. */
    filters: SearchFilter[];
}
export interface SearchUserSchemasResponse {
    /** Details provides information about the returned result including total amount found. */
    details: ListDetails | undefined;
    /** States by which field the results are sorted. */
    sortingColumn: FieldName;
    /** The result contains the user schemas, which matched the queries. */
    result: GetUserSchema[];
}
export interface GetUserSchemaRequest {
    /** unique identifier of the schema. */
    id: string;
}
export interface GetUserSchemaResponse {
    userSchema: GetUserSchema | undefined;
}
export interface CreateUserSchemaRequest {
    instance?: Instance | undefined;
    userSchema: UserSchema | undefined;
}
export interface CreateUserSchemaResponse {
    /** Details provide some base information (such as the last change date) of the schema. */
    details: Details | undefined;
}
export interface PatchUserSchemaRequest {
    instance?: Instance | undefined;
    /** unique identifier of the schema. */
    id: string;
    userSchema: PatchUserSchema | undefined;
}
export interface PatchUserSchemaResponse {
    /** Details provide some base information (such as the last change date) of the schema. */
    details: Details | undefined;
}
export interface DeactivateUserSchemaRequest {
    instance?: Instance | undefined;
    /** unique identifier of the schema. */
    id: string;
}
export interface DeactivateUserSchemaResponse {
    /** Details provide some base information (such as the last change date) of the schema. */
    details: Details | undefined;
}
export interface ReactivateUserSchemaRequest {
    instance?: Instance | undefined;
    /** unique identifier of the schema. */
    id: string;
}
export interface ReactivateUserSchemaResponse {
    /** Details provide some base information (such as the last change date) of the schema. */
    details: Details | undefined;
}
export interface DeleteUserSchemaRequest {
    instance?: Instance | undefined;
    /** unique identifier of the schema. */
    id: string;
}
export interface DeleteUserSchemaResponse {
    /** Details provide some base information (such as the last change date) of the schema. */
    details: Details | undefined;
}
export declare const SearchUserSchemasRequest: MessageFns<SearchUserSchemasRequest>;
export declare const SearchUserSchemasResponse: MessageFns<SearchUserSchemasResponse>;
export declare const GetUserSchemaRequest: MessageFns<GetUserSchemaRequest>;
export declare const GetUserSchemaResponse: MessageFns<GetUserSchemaResponse>;
export declare const CreateUserSchemaRequest: MessageFns<CreateUserSchemaRequest>;
export declare const CreateUserSchemaResponse: MessageFns<CreateUserSchemaResponse>;
export declare const PatchUserSchemaRequest: MessageFns<PatchUserSchemaRequest>;
export declare const PatchUserSchemaResponse: MessageFns<PatchUserSchemaResponse>;
export declare const DeactivateUserSchemaRequest: MessageFns<DeactivateUserSchemaRequest>;
export declare const DeactivateUserSchemaResponse: MessageFns<DeactivateUserSchemaResponse>;
export declare const ReactivateUserSchemaRequest: MessageFns<ReactivateUserSchemaRequest>;
export declare const ReactivateUserSchemaResponse: MessageFns<ReactivateUserSchemaResponse>;
export declare const DeleteUserSchemaRequest: MessageFns<DeleteUserSchemaRequest>;
export declare const DeleteUserSchemaResponse: MessageFns<DeleteUserSchemaResponse>;
export type ZITADELUserSchemasDefinition = typeof ZITADELUserSchemasDefinition;
export declare const ZITADELUserSchemasDefinition: {
    readonly name: "ZITADELUserSchemas";
    readonly fullName: "zitadel.resources.userschema.v3alpha.ZITADELUserSchemas";
    readonly methods: {
        /**
         * Search user schemas
         *
         * Search all matching user schemas. By default, we will return all user schema of your instance. Make sure to include a limit and sorting for pagination.
         */
        readonly searchUserSchemas: {
            readonly name: "SearchUserSchemas";
            readonly requestType: MessageFns<SearchUserSchemasRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SearchUserSchemasResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * User schema by ID
         *
         * Returns the user schema identified by the requested ID.
         */
        readonly getUserSchema: {
            readonly name: "GetUserSchema";
            readonly requestType: MessageFns<GetUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Create a user schema
         *
         * Create the first revision of a new user schema. The schema can then be used on users to store and validate their data.
         */
        readonly createUserSchema: {
            readonly name: "CreateUserSchema";
            readonly requestType: MessageFns<CreateUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Patch a user schema
         *
         * Patch an existing user schema to a new revision. Users based on the current revision will not be affected until they are updated.
         */
        readonly patchUserSchema: {
            readonly name: "PatchUserSchema";
            readonly requestType: MessageFns<PatchUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<PatchUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Deactivate a user schema
         *
         * Deactivate an existing user schema and change it into a read-only state. Users based on this schema cannot be updated anymore, but are still able to authenticate.
         */
        readonly deactivateUserSchema: {
            readonly name: "DeactivateUserSchema";
            readonly requestType: MessageFns<DeactivateUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Reactivate a user schema
         *
         * Reactivate an previously deactivated user schema and change it into an active state again.
         */
        readonly reactivateUserSchema: {
            readonly name: "ReactivateUserSchema";
            readonly requestType: MessageFns<ReactivateUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateUserSchemaResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Delete a user schema
         *
         * Delete an existing user schema. This operation is only allowed if there are no associated users to it.
         */
        readonly deleteUserSchema: {
            readonly name: "DeleteUserSchema";
            readonly requestType: MessageFns<DeleteUserSchemaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteUserSchemaResponse>;
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
export interface ZITADELUserSchemasServiceImplementation<CallContextExt = {}> {
    /**
     * Search user schemas
     *
     * Search all matching user schemas. By default, we will return all user schema of your instance. Make sure to include a limit and sorting for pagination.
     */
    searchUserSchemas(request: SearchUserSchemasRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SearchUserSchemasResponse>>;
    /**
     * User schema by ID
     *
     * Returns the user schema identified by the requested ID.
     */
    getUserSchema(request: GetUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserSchemaResponse>>;
    /**
     * Create a user schema
     *
     * Create the first revision of a new user schema. The schema can then be used on users to store and validate their data.
     */
    createUserSchema(request: CreateUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateUserSchemaResponse>>;
    /**
     * Patch a user schema
     *
     * Patch an existing user schema to a new revision. Users based on the current revision will not be affected until they are updated.
     */
    patchUserSchema(request: PatchUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PatchUserSchemaResponse>>;
    /**
     * Deactivate a user schema
     *
     * Deactivate an existing user schema and change it into a read-only state. Users based on this schema cannot be updated anymore, but are still able to authenticate.
     */
    deactivateUserSchema(request: DeactivateUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserSchemaResponse>>;
    /**
     * Reactivate a user schema
     *
     * Reactivate an previously deactivated user schema and change it into an active state again.
     */
    reactivateUserSchema(request: ReactivateUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateUserSchemaResponse>>;
    /**
     * Delete a user schema
     *
     * Delete an existing user schema. This operation is only allowed if there are no associated users to it.
     */
    deleteUserSchema(request: DeleteUserSchemaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteUserSchemaResponse>>;
}
export interface ZITADELUserSchemasClient<CallOptionsExt = {}> {
    /**
     * Search user schemas
     *
     * Search all matching user schemas. By default, we will return all user schema of your instance. Make sure to include a limit and sorting for pagination.
     */
    searchUserSchemas(request: DeepPartial<SearchUserSchemasRequest>, options?: CallOptions & CallOptionsExt): Promise<SearchUserSchemasResponse>;
    /**
     * User schema by ID
     *
     * Returns the user schema identified by the requested ID.
     */
    getUserSchema(request: DeepPartial<GetUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserSchemaResponse>;
    /**
     * Create a user schema
     *
     * Create the first revision of a new user schema. The schema can then be used on users to store and validate their data.
     */
    createUserSchema(request: DeepPartial<CreateUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateUserSchemaResponse>;
    /**
     * Patch a user schema
     *
     * Patch an existing user schema to a new revision. Users based on the current revision will not be affected until they are updated.
     */
    patchUserSchema(request: DeepPartial<PatchUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<PatchUserSchemaResponse>;
    /**
     * Deactivate a user schema
     *
     * Deactivate an existing user schema and change it into a read-only state. Users based on this schema cannot be updated anymore, but are still able to authenticate.
     */
    deactivateUserSchema(request: DeepPartial<DeactivateUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserSchemaResponse>;
    /**
     * Reactivate a user schema
     *
     * Reactivate an previously deactivated user schema and change it into an active state again.
     */
    reactivateUserSchema(request: DeepPartial<ReactivateUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateUserSchemaResponse>;
    /**
     * Delete a user schema
     *
     * Delete an existing user schema. This operation is only allowed if there are no associated users to it.
     */
    deleteUserSchema(request: DeepPartial<DeleteUserSchemaRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteUserSchemaResponse>;
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
