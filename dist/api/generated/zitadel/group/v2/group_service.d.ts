import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { PaginationRequest, PaginationResponse } from "../../filter/v2/filter.js";
import { FieldName, Group, GroupsSearchFilter } from "./group.js";
export declare const protobufPackage = "zitadel.group.v2";
export interface CreateGroupRequest {
    /** The ID of the Organization where the group should be created. */
    organizationId: string;
    /** Name of the group. This must be unique inside the corresponding organization. */
    name: string;
    /** Optionally, provide a description of the group that could help others identify its purpose. */
    description: string;
    /**
     * In case you need to specify the unique identifier of the group, such as to recreate a previously existing group, you can provide the ID.
     * If omitted, the system will generate an ID for you.
     * This is the preferred way. The generated ID will be returned in the response.
     */
    id?: string | undefined;
}
export interface CreateGroupResponse {
    /** ID is the unique identifier of the newly created user group. */
    id: string;
    /** CreationDate is the timestamp when the user group was created. */
    creationDate: Date | undefined;
}
export interface ListGroupsRequest {
    /** Criteria to list the user groups. */
    filters: GroupsSearchFilter[];
    /** Pagination and sorting. */
    pagination: PaginationRequest | undefined;
    /** The field the result is sorted by. */
    sortingColumn?: FieldName | undefined;
}
export interface ListGroupsResponse {
    /** The list of groups. */
    groups: Group[];
    /** Contains the total number of groups matching the query and the applied limit. */
    pagination: PaginationResponse | undefined;
}
export interface GetGroupRequest {
    /** The ID of the group to be retrieved. */
    id: string;
}
export interface GetGroupResponse {
    group: Group | undefined;
}
export interface UpdateGroupRequest {
    /** The ID of the user group to be updated. */
    id: string;
    /**
     * Name of the group. The name must be unique inside the corresponding organization.
     * If omitted, the name will be unchanged.
     */
    name?: string | undefined;
    /**
     * Optionally, provide a new description of the group that could help others identify its purpose.
     * If omitted, the description will be unchanged.
     */
    description?: string | undefined;
}
export interface UpdateGroupResponse {
    changeDate: Date | undefined;
}
export interface DeleteGroupRequest {
    /** ID of the user group to be deleted. */
    id: string;
}
export interface DeleteGroupResponse {
    deletionDate: Date | undefined;
}
export declare const CreateGroupRequest: MessageFns<CreateGroupRequest>;
export declare const CreateGroupResponse: MessageFns<CreateGroupResponse>;
export declare const ListGroupsRequest: MessageFns<ListGroupsRequest>;
export declare const ListGroupsResponse: MessageFns<ListGroupsResponse>;
export declare const GetGroupRequest: MessageFns<GetGroupRequest>;
export declare const GetGroupResponse: MessageFns<GetGroupResponse>;
export declare const UpdateGroupRequest: MessageFns<UpdateGroupRequest>;
export declare const UpdateGroupResponse: MessageFns<UpdateGroupResponse>;
export declare const DeleteGroupRequest: MessageFns<DeleteGroupRequest>;
export declare const DeleteGroupResponse: MessageFns<DeleteGroupResponse>;
/**
 * GroupService is used to manage user groups.
 * This service provides methods to create, retrieve, update, and delete user groups in an organization.
 */
export type GroupServiceDefinition = typeof GroupServiceDefinition;
export declare const GroupServiceDefinition: {
    readonly name: "GroupService";
    readonly fullName: "zitadel.group.v2.GroupService";
    readonly methods: {
        /**
         * CreateGroup
         *
         * CreateGroup creates a new user group in an organization.
         *
         * Required permissions: // TODO
         *   - "iam.member.write" for instance administrators
         *   - "org.member.write" for organization administrators
         */
        readonly createGroup: {
            readonly name: "CreateGroup";
            readonly requestType: MessageFns<CreateGroupRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateGroupResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                };
            };
        };
        /**
         * GetGroup
         *
         * Retrieves a group based on its ID.
         *
         * Required permission:
         * - TODO
         */
        readonly getGroup: {
            readonly name: "GetGroup";
            readonly requestType: MessageFns<GetGroupRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetGroupResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                };
            };
        };
        /**
         * ListGroups
         *
         * ListGroups returns all groups matching the request and necessary permissions from an organization.
         *
         * Required permissions: // TODO
         *   - "iam.member.read" for instance administrators
         *   - "org.member.read" for organization administrators
         */
        readonly listGroups: {
            readonly name: "ListGroups";
            readonly requestType: MessageFns<ListGroupsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListGroupsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                };
            };
        };
        /**
         * UpdateGroup
         *
         * UpdateGroup updates the user group.
         *
         * In case the group there aren't any changes, the request will return a successful response as
         * the desired state is already achieved.
         * You can check the change date in the response to verify if the group was updated by the request.
         *
         * Required permissions: // TODO
         *   - "iam.member.write" for instance administrators
         *   - "org.member.write" for organization administrators
         */
        readonly updateGroup: {
            readonly name: "UpdateGroup";
            readonly requestType: MessageFns<UpdateGroupRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateGroupResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                };
            };
        };
        /**
         * DeleteGroup
         *
         * DeleteGroup deletes the group.
         *
         * In case the group is not found, the request will return a successful response as
         * the desired state is already achieved.
         * You can check the deletion date in the response to verify if the group was deleted by the request.
         *
         * Required permissions: // TODO
         *   - "iam.member.delete" for instance administrators
         *   - "org.member.delete" for organization administrators
         */
        readonly deleteGroup: {
            readonly name: "DeleteGroup";
            readonly requestType: MessageFns<DeleteGroupRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteGroupResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                };
            };
        };
    };
};
export interface GroupServiceImplementation<CallContextExt = {}> {
    /**
     * CreateGroup
     *
     * CreateGroup creates a new user group in an organization.
     *
     * Required permissions: // TODO
     *   - "iam.member.write" for instance administrators
     *   - "org.member.write" for organization administrators
     */
    createGroup(request: CreateGroupRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateGroupResponse>>;
    /**
     * GetGroup
     *
     * Retrieves a group based on its ID.
     *
     * Required permission:
     * - TODO
     */
    getGroup(request: GetGroupRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetGroupResponse>>;
    /**
     * ListGroups
     *
     * ListGroups returns all groups matching the request and necessary permissions from an organization.
     *
     * Required permissions: // TODO
     *   - "iam.member.read" for instance administrators
     *   - "org.member.read" for organization administrators
     */
    listGroups(request: ListGroupsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListGroupsResponse>>;
    /**
     * UpdateGroup
     *
     * UpdateGroup updates the user group.
     *
     * In case the group there aren't any changes, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the change date in the response to verify if the group was updated by the request.
     *
     * Required permissions: // TODO
     *   - "iam.member.write" for instance administrators
     *   - "org.member.write" for organization administrators
     */
    updateGroup(request: UpdateGroupRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGroupResponse>>;
    /**
     * DeleteGroup
     *
     * DeleteGroup deletes the group.
     *
     * In case the group is not found, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the deletion date in the response to verify if the group was deleted by the request.
     *
     * Required permissions: // TODO
     *   - "iam.member.delete" for instance administrators
     *   - "org.member.delete" for organization administrators
     */
    deleteGroup(request: DeleteGroupRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteGroupResponse>>;
}
export interface GroupServiceClient<CallOptionsExt = {}> {
    /**
     * CreateGroup
     *
     * CreateGroup creates a new user group in an organization.
     *
     * Required permissions: // TODO
     *   - "iam.member.write" for instance administrators
     *   - "org.member.write" for organization administrators
     */
    createGroup(request: DeepPartial<CreateGroupRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateGroupResponse>;
    /**
     * GetGroup
     *
     * Retrieves a group based on its ID.
     *
     * Required permission:
     * - TODO
     */
    getGroup(request: DeepPartial<GetGroupRequest>, options?: CallOptions & CallOptionsExt): Promise<GetGroupResponse>;
    /**
     * ListGroups
     *
     * ListGroups returns all groups matching the request and necessary permissions from an organization.
     *
     * Required permissions: // TODO
     *   - "iam.member.read" for instance administrators
     *   - "org.member.read" for organization administrators
     */
    listGroups(request: DeepPartial<ListGroupsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListGroupsResponse>;
    /**
     * UpdateGroup
     *
     * UpdateGroup updates the user group.
     *
     * In case the group there aren't any changes, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the change date in the response to verify if the group was updated by the request.
     *
     * Required permissions: // TODO
     *   - "iam.member.write" for instance administrators
     *   - "org.member.write" for organization administrators
     */
    updateGroup(request: DeepPartial<UpdateGroupRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGroupResponse>;
    /**
     * DeleteGroup
     *
     * DeleteGroup deletes the group.
     *
     * In case the group is not found, the request will return a successful response as
     * the desired state is already achieved.
     * You can check the deletion date in the response to verify if the group was deleted by the request.
     *
     * Required permissions: // TODO
     *   - "iam.member.delete" for instance administrators
     *   - "org.member.delete" for organization administrators
     */
    deleteGroup(request: DeepPartial<DeleteGroupRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteGroupResponse>;
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
