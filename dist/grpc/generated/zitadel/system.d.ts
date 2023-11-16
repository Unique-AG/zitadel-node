/// <reference types="node" />
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { KeyType } from "./auth_n_key";
import { InstanceFeature } from "./feature";
import { Domain, DomainFieldName, DomainSearchQuery, FieldName, Instance, InstanceDetail, Query } from "./instance";
import { Member, SearchQuery } from "./member";
import { ListDetails, ListQuery, ObjectDetails } from "./object";
import { Notification, Unit } from "./quota";
export declare const protobufPackage = "zitadel.system.v1";
/** This is an empty request */
export interface HealthzRequest {
}
/** This is an empty response */
export interface HealthzResponse {
}
export interface ListInstancesRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** the field the result is sorted */
    sortingColumn: FieldName;
    /** criterias the client is looking for */
    queries: Query[];
}
export interface ListInstancesResponse {
    details: ListDetails | undefined;
    sortingColumn: FieldName;
    result: Instance[];
}
export interface GetInstanceRequest {
    instanceId: string;
}
export interface GetInstanceResponse {
    instance: InstanceDetail | undefined;
}
export interface AddInstanceRequest {
    instanceName: string;
    firstOrgName: string;
    customDomain: string;
    ownerUserName: string;
    ownerEmail: AddInstanceRequest_Email | undefined;
    ownerProfile: AddInstanceRequest_Profile | undefined;
    ownerPassword: AddInstanceRequest_Password | undefined;
    defaultLanguage: string;
}
export interface AddInstanceRequest_Profile {
    firstName: string;
    lastName: string;
    preferredLanguage: string;
}
export interface AddInstanceRequest_Email {
    email: string;
    isEmailVerified: boolean;
}
export interface AddInstanceRequest_Password {
    password: string;
    passwordChangeRequired: boolean;
}
export interface AddInstanceResponse {
    instanceId: string;
    details: ObjectDetails | undefined;
}
export interface CreateInstanceRequest {
    instanceName: string;
    firstOrgName: string;
    customDomain: string;
    /** oneof field for the user managing the instance */
    human?: CreateInstanceRequest_Human | undefined;
    machine?: CreateInstanceRequest_Machine | undefined;
    defaultLanguage: string;
}
export interface CreateInstanceRequest_Profile {
    firstName: string;
    lastName: string;
    preferredLanguage: string;
}
export interface CreateInstanceRequest_Email {
    email: string;
    isEmailVerified: boolean;
}
export interface CreateInstanceRequest_Password {
    password: string;
    passwordChangeRequired: boolean;
}
export interface CreateInstanceRequest_Human {
    userName: string;
    email: CreateInstanceRequest_Email | undefined;
    profile: CreateInstanceRequest_Profile | undefined;
    password: CreateInstanceRequest_Password | undefined;
}
export interface CreateInstanceRequest_PersonalAccessToken {
    expirationDate: Date | undefined;
}
export interface CreateInstanceRequest_MachineKey {
    type: KeyType;
    expirationDate: Date | undefined;
}
export interface CreateInstanceRequest_Machine {
    userName: string;
    name: string;
    personalAccessToken: CreateInstanceRequest_PersonalAccessToken | undefined;
    machineKey: CreateInstanceRequest_MachineKey | undefined;
}
export interface CreateInstanceResponse {
    instanceId: string;
    details: ObjectDetails | undefined;
    pat: string;
    machineKey: Buffer;
}
export interface UpdateInstanceRequest {
    instanceId: string;
    instanceName: string;
}
export interface UpdateInstanceResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveInstanceRequest {
    instanceId: string;
}
export interface RemoveInstanceResponse {
    details: ObjectDetails | undefined;
}
export interface ListIAMMembersRequest {
    query: ListQuery | undefined;
    instanceId: string;
    queries: SearchQuery[];
}
export interface ListIAMMembersResponse {
    details: ListDetails | undefined;
    result: Member[];
}
export interface GetUsageRequest {
    instanceId: string;
}
export interface AddQuotaRequest {
    instanceId: string;
    /** the unit a quota should be imposed on */
    unit: Unit;
    /** the starting time from which the current quota period is calculated from. This is relevant for querying the current usage. */
    from: Date | undefined;
    /** the quota periods duration */
    resetInterval: Duration | undefined;
    /** the quota amount of units */
    amount: Long;
    /** whether ZITADEL should block further usage when the configured amount is used */
    limit: boolean;
    /** the handlers, ZITADEL executes when certain quota percentages are reached */
    notifications: Notification[];
}
export interface AddQuotaResponse {
    details: ObjectDetails | undefined;
}
export interface SetQuotaRequest {
    instanceId: string;
    /** the unit a quota should be imposed on */
    unit: Unit;
    /** the starting time from which the current quota period is calculated from. This is relevant for querying the current usage. */
    from: Date | undefined;
    /** the quota periods duration */
    resetInterval: Duration | undefined;
    /** the quota amount of units */
    amount: Long;
    /** whether ZITADEL should block further usage when the configured amount is used */
    limit: boolean;
    /** the handlers, ZITADEL executes when certain quota percentages are reached */
    notifications: Notification[];
}
export interface SetQuotaResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveQuotaRequest {
    instanceId: string;
    unit: Unit;
}
export interface RemoveQuotaResponse {
    details: ObjectDetails | undefined;
}
export interface SetLimitsRequest {
    instanceId: string;
    auditLogRetention: Duration | undefined;
}
export interface SetLimitsResponse {
    details: ObjectDetails | undefined;
}
export interface ResetLimitsRequest {
    instanceId: string;
}
export interface ResetLimitsResponse {
    details: ObjectDetails | undefined;
}
export interface ExistsDomainRequest {
    domain: string;
}
export interface ExistsDomainResponse {
    exists: boolean;
}
export interface ListDomainsRequest {
    /** list limitations and ordering */
    instanceId: string;
    query: ListQuery | undefined;
    /** the field the result is sorted */
    sortingColumn: DomainFieldName;
    /** criterias the client is looking for */
    queries: DomainSearchQuery[];
}
export interface ListDomainsResponse {
    details: ListDetails | undefined;
    sortingColumn: DomainFieldName;
    result: Domain[];
}
export interface AddDomainRequest {
    instanceId: string;
    domain: string;
}
export interface AddDomainResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveDomainRequest {
    instanceId: string;
    domain: string;
}
export interface RemoveDomainResponse {
    details: ObjectDetails | undefined;
}
export interface SetPrimaryDomainRequest {
    instanceId: string;
    domain: string;
}
export interface SetPrimaryDomainResponse {
    details: ObjectDetails | undefined;
}
export interface ChangeSubscriptionRequest {
    domain: string;
    subscriptionName: string;
    requestLimit: Long;
    actionMinsLimit: Long;
}
export interface ChangeSubscriptionResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ListViewsRequest {
}
export interface ListViewsResponse {
    /** TODO: list details */
    result: View[];
}
export interface ClearViewRequest {
    database: string;
    viewName: string;
}
/** This is an empty response */
export interface ClearViewResponse {
}
/** This is an empty request */
export interface ListFailedEventsRequest {
}
export interface ListFailedEventsResponse {
    /** TODO: list details */
    result: FailedEvent[];
}
export interface RemoveFailedEventRequest {
    database: string;
    viewName: string;
    failedSequence: Long;
    instanceId: string;
}
/** This is an empty response */
export interface RemoveFailedEventResponse {
}
export interface View {
    database: string;
    viewName: string;
    processedSequence: Long;
    /** The timestamp the event occured */
    eventTimestamp: Date | undefined;
    lastSuccessfulSpoolerRun: Date | undefined;
    instance: string;
}
export interface FailedEvent {
    database: string;
    viewName: string;
    failedSequence: Long;
    failureCount: Long;
    errorMessage: string;
    lastFailed: Date | undefined;
}
export interface SetInstanceFeatureRequest {
    instanceId: string;
    featureId: InstanceFeature;
    bool?: boolean | undefined;
}
export interface SetInstanceFeatureResponse {
    details: ObjectDetails | undefined;
}
export declare const HealthzRequest: {
    encode(_: HealthzRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthzRequest;
    fromJSON(_: any): HealthzRequest;
    toJSON(_: HealthzRequest): unknown;
    create(base?: DeepPartial<HealthzRequest>): HealthzRequest;
    fromPartial(_: DeepPartial<HealthzRequest>): HealthzRequest;
};
export declare const HealthzResponse: {
    encode(_: HealthzResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthzResponse;
    fromJSON(_: any): HealthzResponse;
    toJSON(_: HealthzResponse): unknown;
    create(base?: DeepPartial<HealthzResponse>): HealthzResponse;
    fromPartial(_: DeepPartial<HealthzResponse>): HealthzResponse;
};
export declare const ListInstancesRequest: {
    encode(message: ListInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesRequest;
    fromJSON(object: any): ListInstancesRequest;
    toJSON(message: ListInstancesRequest): unknown;
    create(base?: DeepPartial<ListInstancesRequest>): ListInstancesRequest;
    fromPartial(object: DeepPartial<ListInstancesRequest>): ListInstancesRequest;
};
export declare const ListInstancesResponse: {
    encode(message: ListInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesResponse;
    fromJSON(object: any): ListInstancesResponse;
    toJSON(message: ListInstancesResponse): unknown;
    create(base?: DeepPartial<ListInstancesResponse>): ListInstancesResponse;
    fromPartial(object: DeepPartial<ListInstancesResponse>): ListInstancesResponse;
};
export declare const GetInstanceRequest: {
    encode(message: GetInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest;
    fromJSON(object: any): GetInstanceRequest;
    toJSON(message: GetInstanceRequest): unknown;
    create(base?: DeepPartial<GetInstanceRequest>): GetInstanceRequest;
    fromPartial(object: DeepPartial<GetInstanceRequest>): GetInstanceRequest;
};
export declare const GetInstanceResponse: {
    encode(message: GetInstanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceResponse;
    fromJSON(object: any): GetInstanceResponse;
    toJSON(message: GetInstanceResponse): unknown;
    create(base?: DeepPartial<GetInstanceResponse>): GetInstanceResponse;
    fromPartial(object: DeepPartial<GetInstanceResponse>): GetInstanceResponse;
};
export declare const AddInstanceRequest: {
    encode(message: AddInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceRequest;
    fromJSON(object: any): AddInstanceRequest;
    toJSON(message: AddInstanceRequest): unknown;
    create(base?: DeepPartial<AddInstanceRequest>): AddInstanceRequest;
    fromPartial(object: DeepPartial<AddInstanceRequest>): AddInstanceRequest;
};
export declare const AddInstanceRequest_Profile: {
    encode(message: AddInstanceRequest_Profile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceRequest_Profile;
    fromJSON(object: any): AddInstanceRequest_Profile;
    toJSON(message: AddInstanceRequest_Profile): unknown;
    create(base?: DeepPartial<AddInstanceRequest_Profile>): AddInstanceRequest_Profile;
    fromPartial(object: DeepPartial<AddInstanceRequest_Profile>): AddInstanceRequest_Profile;
};
export declare const AddInstanceRequest_Email: {
    encode(message: AddInstanceRequest_Email, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceRequest_Email;
    fromJSON(object: any): AddInstanceRequest_Email;
    toJSON(message: AddInstanceRequest_Email): unknown;
    create(base?: DeepPartial<AddInstanceRequest_Email>): AddInstanceRequest_Email;
    fromPartial(object: DeepPartial<AddInstanceRequest_Email>): AddInstanceRequest_Email;
};
export declare const AddInstanceRequest_Password: {
    encode(message: AddInstanceRequest_Password, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceRequest_Password;
    fromJSON(object: any): AddInstanceRequest_Password;
    toJSON(message: AddInstanceRequest_Password): unknown;
    create(base?: DeepPartial<AddInstanceRequest_Password>): AddInstanceRequest_Password;
    fromPartial(object: DeepPartial<AddInstanceRequest_Password>): AddInstanceRequest_Password;
};
export declare const AddInstanceResponse: {
    encode(message: AddInstanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceResponse;
    fromJSON(object: any): AddInstanceResponse;
    toJSON(message: AddInstanceResponse): unknown;
    create(base?: DeepPartial<AddInstanceResponse>): AddInstanceResponse;
    fromPartial(object: DeepPartial<AddInstanceResponse>): AddInstanceResponse;
};
export declare const CreateInstanceRequest: {
    encode(message: CreateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest;
    fromJSON(object: any): CreateInstanceRequest;
    toJSON(message: CreateInstanceRequest): unknown;
    create(base?: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest;
    fromPartial(object: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest;
};
export declare const CreateInstanceRequest_Profile: {
    encode(message: CreateInstanceRequest_Profile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Profile;
    fromJSON(object: any): CreateInstanceRequest_Profile;
    toJSON(message: CreateInstanceRequest_Profile): unknown;
    create(base?: DeepPartial<CreateInstanceRequest_Profile>): CreateInstanceRequest_Profile;
    fromPartial(object: DeepPartial<CreateInstanceRequest_Profile>): CreateInstanceRequest_Profile;
};
export declare const CreateInstanceRequest_Email: {
    encode(message: CreateInstanceRequest_Email, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Email;
    fromJSON(object: any): CreateInstanceRequest_Email;
    toJSON(message: CreateInstanceRequest_Email): unknown;
    create(base?: DeepPartial<CreateInstanceRequest_Email>): CreateInstanceRequest_Email;
    fromPartial(object: DeepPartial<CreateInstanceRequest_Email>): CreateInstanceRequest_Email;
};
export declare const CreateInstanceRequest_Password: {
    encode(message: CreateInstanceRequest_Password, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Password;
    fromJSON(object: any): CreateInstanceRequest_Password;
    toJSON(message: CreateInstanceRequest_Password): unknown;
    create(base?: DeepPartial<CreateInstanceRequest_Password>): CreateInstanceRequest_Password;
    fromPartial(object: DeepPartial<CreateInstanceRequest_Password>): CreateInstanceRequest_Password;
};
export declare const CreateInstanceRequest_Human: {
    encode(message: CreateInstanceRequest_Human, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Human;
    fromJSON(object: any): CreateInstanceRequest_Human;
    toJSON(message: CreateInstanceRequest_Human): unknown;
    create(base?: DeepPartial<CreateInstanceRequest_Human>): CreateInstanceRequest_Human;
    fromPartial(object: DeepPartial<CreateInstanceRequest_Human>): CreateInstanceRequest_Human;
};
export declare const CreateInstanceRequest_PersonalAccessToken: {
    encode(message: CreateInstanceRequest_PersonalAccessToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_PersonalAccessToken;
    fromJSON(object: any): CreateInstanceRequest_PersonalAccessToken;
    toJSON(message: CreateInstanceRequest_PersonalAccessToken): unknown;
    create(base?: DeepPartial<CreateInstanceRequest_PersonalAccessToken>): CreateInstanceRequest_PersonalAccessToken;
    fromPartial(object: DeepPartial<CreateInstanceRequest_PersonalAccessToken>): CreateInstanceRequest_PersonalAccessToken;
};
export declare const CreateInstanceRequest_MachineKey: {
    encode(message: CreateInstanceRequest_MachineKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_MachineKey;
    fromJSON(object: any): CreateInstanceRequest_MachineKey;
    toJSON(message: CreateInstanceRequest_MachineKey): unknown;
    create(base?: DeepPartial<CreateInstanceRequest_MachineKey>): CreateInstanceRequest_MachineKey;
    fromPartial(object: DeepPartial<CreateInstanceRequest_MachineKey>): CreateInstanceRequest_MachineKey;
};
export declare const CreateInstanceRequest_Machine: {
    encode(message: CreateInstanceRequest_Machine, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Machine;
    fromJSON(object: any): CreateInstanceRequest_Machine;
    toJSON(message: CreateInstanceRequest_Machine): unknown;
    create(base?: DeepPartial<CreateInstanceRequest_Machine>): CreateInstanceRequest_Machine;
    fromPartial(object: DeepPartial<CreateInstanceRequest_Machine>): CreateInstanceRequest_Machine;
};
export declare const CreateInstanceResponse: {
    encode(message: CreateInstanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceResponse;
    fromJSON(object: any): CreateInstanceResponse;
    toJSON(message: CreateInstanceResponse): unknown;
    create(base?: DeepPartial<CreateInstanceResponse>): CreateInstanceResponse;
    fromPartial(object: DeepPartial<CreateInstanceResponse>): CreateInstanceResponse;
};
export declare const UpdateInstanceRequest: {
    encode(message: UpdateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceRequest;
    fromJSON(object: any): UpdateInstanceRequest;
    toJSON(message: UpdateInstanceRequest): unknown;
    create(base?: DeepPartial<UpdateInstanceRequest>): UpdateInstanceRequest;
    fromPartial(object: DeepPartial<UpdateInstanceRequest>): UpdateInstanceRequest;
};
export declare const UpdateInstanceResponse: {
    encode(message: UpdateInstanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceResponse;
    fromJSON(object: any): UpdateInstanceResponse;
    toJSON(message: UpdateInstanceResponse): unknown;
    create(base?: DeepPartial<UpdateInstanceResponse>): UpdateInstanceResponse;
    fromPartial(object: DeepPartial<UpdateInstanceResponse>): UpdateInstanceResponse;
};
export declare const RemoveInstanceRequest: {
    encode(message: RemoveInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveInstanceRequest;
    fromJSON(object: any): RemoveInstanceRequest;
    toJSON(message: RemoveInstanceRequest): unknown;
    create(base?: DeepPartial<RemoveInstanceRequest>): RemoveInstanceRequest;
    fromPartial(object: DeepPartial<RemoveInstanceRequest>): RemoveInstanceRequest;
};
export declare const RemoveInstanceResponse: {
    encode(message: RemoveInstanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveInstanceResponse;
    fromJSON(object: any): RemoveInstanceResponse;
    toJSON(message: RemoveInstanceResponse): unknown;
    create(base?: DeepPartial<RemoveInstanceResponse>): RemoveInstanceResponse;
    fromPartial(object: DeepPartial<RemoveInstanceResponse>): RemoveInstanceResponse;
};
export declare const ListIAMMembersRequest: {
    encode(message: ListIAMMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersRequest;
    fromJSON(object: any): ListIAMMembersRequest;
    toJSON(message: ListIAMMembersRequest): unknown;
    create(base?: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest;
    fromPartial(object: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest;
};
export declare const ListIAMMembersResponse: {
    encode(message: ListIAMMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersResponse;
    fromJSON(object: any): ListIAMMembersResponse;
    toJSON(message: ListIAMMembersResponse): unknown;
    create(base?: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse;
    fromPartial(object: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse;
};
export declare const GetUsageRequest: {
    encode(message: GetUsageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUsageRequest;
    fromJSON(object: any): GetUsageRequest;
    toJSON(message: GetUsageRequest): unknown;
    create(base?: DeepPartial<GetUsageRequest>): GetUsageRequest;
    fromPartial(object: DeepPartial<GetUsageRequest>): GetUsageRequest;
};
export declare const AddQuotaRequest: {
    encode(message: AddQuotaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddQuotaRequest;
    fromJSON(object: any): AddQuotaRequest;
    toJSON(message: AddQuotaRequest): unknown;
    create(base?: DeepPartial<AddQuotaRequest>): AddQuotaRequest;
    fromPartial(object: DeepPartial<AddQuotaRequest>): AddQuotaRequest;
};
export declare const AddQuotaResponse: {
    encode(message: AddQuotaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddQuotaResponse;
    fromJSON(object: any): AddQuotaResponse;
    toJSON(message: AddQuotaResponse): unknown;
    create(base?: DeepPartial<AddQuotaResponse>): AddQuotaResponse;
    fromPartial(object: DeepPartial<AddQuotaResponse>): AddQuotaResponse;
};
export declare const SetQuotaRequest: {
    encode(message: SetQuotaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetQuotaRequest;
    fromJSON(object: any): SetQuotaRequest;
    toJSON(message: SetQuotaRequest): unknown;
    create(base?: DeepPartial<SetQuotaRequest>): SetQuotaRequest;
    fromPartial(object: DeepPartial<SetQuotaRequest>): SetQuotaRequest;
};
export declare const SetQuotaResponse: {
    encode(message: SetQuotaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetQuotaResponse;
    fromJSON(object: any): SetQuotaResponse;
    toJSON(message: SetQuotaResponse): unknown;
    create(base?: DeepPartial<SetQuotaResponse>): SetQuotaResponse;
    fromPartial(object: DeepPartial<SetQuotaResponse>): SetQuotaResponse;
};
export declare const RemoveQuotaRequest: {
    encode(message: RemoveQuotaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveQuotaRequest;
    fromJSON(object: any): RemoveQuotaRequest;
    toJSON(message: RemoveQuotaRequest): unknown;
    create(base?: DeepPartial<RemoveQuotaRequest>): RemoveQuotaRequest;
    fromPartial(object: DeepPartial<RemoveQuotaRequest>): RemoveQuotaRequest;
};
export declare const RemoveQuotaResponse: {
    encode(message: RemoveQuotaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveQuotaResponse;
    fromJSON(object: any): RemoveQuotaResponse;
    toJSON(message: RemoveQuotaResponse): unknown;
    create(base?: DeepPartial<RemoveQuotaResponse>): RemoveQuotaResponse;
    fromPartial(object: DeepPartial<RemoveQuotaResponse>): RemoveQuotaResponse;
};
export declare const SetLimitsRequest: {
    encode(message: SetLimitsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLimitsRequest;
    fromJSON(object: any): SetLimitsRequest;
    toJSON(message: SetLimitsRequest): unknown;
    create(base?: DeepPartial<SetLimitsRequest>): SetLimitsRequest;
    fromPartial(object: DeepPartial<SetLimitsRequest>): SetLimitsRequest;
};
export declare const SetLimitsResponse: {
    encode(message: SetLimitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLimitsResponse;
    fromJSON(object: any): SetLimitsResponse;
    toJSON(message: SetLimitsResponse): unknown;
    create(base?: DeepPartial<SetLimitsResponse>): SetLimitsResponse;
    fromPartial(object: DeepPartial<SetLimitsResponse>): SetLimitsResponse;
};
export declare const ResetLimitsRequest: {
    encode(message: ResetLimitsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetLimitsRequest;
    fromJSON(object: any): ResetLimitsRequest;
    toJSON(message: ResetLimitsRequest): unknown;
    create(base?: DeepPartial<ResetLimitsRequest>): ResetLimitsRequest;
    fromPartial(object: DeepPartial<ResetLimitsRequest>): ResetLimitsRequest;
};
export declare const ResetLimitsResponse: {
    encode(message: ResetLimitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetLimitsResponse;
    fromJSON(object: any): ResetLimitsResponse;
    toJSON(message: ResetLimitsResponse): unknown;
    create(base?: DeepPartial<ResetLimitsResponse>): ResetLimitsResponse;
    fromPartial(object: DeepPartial<ResetLimitsResponse>): ResetLimitsResponse;
};
export declare const ExistsDomainRequest: {
    encode(message: ExistsDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExistsDomainRequest;
    fromJSON(object: any): ExistsDomainRequest;
    toJSON(message: ExistsDomainRequest): unknown;
    create(base?: DeepPartial<ExistsDomainRequest>): ExistsDomainRequest;
    fromPartial(object: DeepPartial<ExistsDomainRequest>): ExistsDomainRequest;
};
export declare const ExistsDomainResponse: {
    encode(message: ExistsDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExistsDomainResponse;
    fromJSON(object: any): ExistsDomainResponse;
    toJSON(message: ExistsDomainResponse): unknown;
    create(base?: DeepPartial<ExistsDomainResponse>): ExistsDomainResponse;
    fromPartial(object: DeepPartial<ExistsDomainResponse>): ExistsDomainResponse;
};
export declare const ListDomainsRequest: {
    encode(message: ListDomainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListDomainsRequest;
    fromJSON(object: any): ListDomainsRequest;
    toJSON(message: ListDomainsRequest): unknown;
    create(base?: DeepPartial<ListDomainsRequest>): ListDomainsRequest;
    fromPartial(object: DeepPartial<ListDomainsRequest>): ListDomainsRequest;
};
export declare const ListDomainsResponse: {
    encode(message: ListDomainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListDomainsResponse;
    fromJSON(object: any): ListDomainsResponse;
    toJSON(message: ListDomainsResponse): unknown;
    create(base?: DeepPartial<ListDomainsResponse>): ListDomainsResponse;
    fromPartial(object: DeepPartial<ListDomainsResponse>): ListDomainsResponse;
};
export declare const AddDomainRequest: {
    encode(message: AddDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainRequest;
    fromJSON(object: any): AddDomainRequest;
    toJSON(message: AddDomainRequest): unknown;
    create(base?: DeepPartial<AddDomainRequest>): AddDomainRequest;
    fromPartial(object: DeepPartial<AddDomainRequest>): AddDomainRequest;
};
export declare const AddDomainResponse: {
    encode(message: AddDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainResponse;
    fromJSON(object: any): AddDomainResponse;
    toJSON(message: AddDomainResponse): unknown;
    create(base?: DeepPartial<AddDomainResponse>): AddDomainResponse;
    fromPartial(object: DeepPartial<AddDomainResponse>): AddDomainResponse;
};
export declare const RemoveDomainRequest: {
    encode(message: RemoveDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDomainRequest;
    fromJSON(object: any): RemoveDomainRequest;
    toJSON(message: RemoveDomainRequest): unknown;
    create(base?: DeepPartial<RemoveDomainRequest>): RemoveDomainRequest;
    fromPartial(object: DeepPartial<RemoveDomainRequest>): RemoveDomainRequest;
};
export declare const RemoveDomainResponse: {
    encode(message: RemoveDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDomainResponse;
    fromJSON(object: any): RemoveDomainResponse;
    toJSON(message: RemoveDomainResponse): unknown;
    create(base?: DeepPartial<RemoveDomainResponse>): RemoveDomainResponse;
    fromPartial(object: DeepPartial<RemoveDomainResponse>): RemoveDomainResponse;
};
export declare const SetPrimaryDomainRequest: {
    encode(message: SetPrimaryDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryDomainRequest;
    fromJSON(object: any): SetPrimaryDomainRequest;
    toJSON(message: SetPrimaryDomainRequest): unknown;
    create(base?: DeepPartial<SetPrimaryDomainRequest>): SetPrimaryDomainRequest;
    fromPartial(object: DeepPartial<SetPrimaryDomainRequest>): SetPrimaryDomainRequest;
};
export declare const SetPrimaryDomainResponse: {
    encode(message: SetPrimaryDomainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryDomainResponse;
    fromJSON(object: any): SetPrimaryDomainResponse;
    toJSON(message: SetPrimaryDomainResponse): unknown;
    create(base?: DeepPartial<SetPrimaryDomainResponse>): SetPrimaryDomainResponse;
    fromPartial(object: DeepPartial<SetPrimaryDomainResponse>): SetPrimaryDomainResponse;
};
export declare const ChangeSubscriptionRequest: {
    encode(message: ChangeSubscriptionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeSubscriptionRequest;
    fromJSON(object: any): ChangeSubscriptionRequest;
    toJSON(message: ChangeSubscriptionRequest): unknown;
    create(base?: DeepPartial<ChangeSubscriptionRequest>): ChangeSubscriptionRequest;
    fromPartial(object: DeepPartial<ChangeSubscriptionRequest>): ChangeSubscriptionRequest;
};
export declare const ChangeSubscriptionResponse: {
    encode(message: ChangeSubscriptionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeSubscriptionResponse;
    fromJSON(object: any): ChangeSubscriptionResponse;
    toJSON(message: ChangeSubscriptionResponse): unknown;
    create(base?: DeepPartial<ChangeSubscriptionResponse>): ChangeSubscriptionResponse;
    fromPartial(object: DeepPartial<ChangeSubscriptionResponse>): ChangeSubscriptionResponse;
};
export declare const ListViewsRequest: {
    encode(_: ListViewsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsRequest;
    fromJSON(_: any): ListViewsRequest;
    toJSON(_: ListViewsRequest): unknown;
    create(base?: DeepPartial<ListViewsRequest>): ListViewsRequest;
    fromPartial(_: DeepPartial<ListViewsRequest>): ListViewsRequest;
};
export declare const ListViewsResponse: {
    encode(message: ListViewsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsResponse;
    fromJSON(object: any): ListViewsResponse;
    toJSON(message: ListViewsResponse): unknown;
    create(base?: DeepPartial<ListViewsResponse>): ListViewsResponse;
    fromPartial(object: DeepPartial<ListViewsResponse>): ListViewsResponse;
};
export declare const ClearViewRequest: {
    encode(message: ClearViewRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClearViewRequest;
    fromJSON(object: any): ClearViewRequest;
    toJSON(message: ClearViewRequest): unknown;
    create(base?: DeepPartial<ClearViewRequest>): ClearViewRequest;
    fromPartial(object: DeepPartial<ClearViewRequest>): ClearViewRequest;
};
export declare const ClearViewResponse: {
    encode(_: ClearViewResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClearViewResponse;
    fromJSON(_: any): ClearViewResponse;
    toJSON(_: ClearViewResponse): unknown;
    create(base?: DeepPartial<ClearViewResponse>): ClearViewResponse;
    fromPartial(_: DeepPartial<ClearViewResponse>): ClearViewResponse;
};
export declare const ListFailedEventsRequest: {
    encode(_: ListFailedEventsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsRequest;
    fromJSON(_: any): ListFailedEventsRequest;
    toJSON(_: ListFailedEventsRequest): unknown;
    create(base?: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest;
    fromPartial(_: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest;
};
export declare const ListFailedEventsResponse: {
    encode(message: ListFailedEventsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsResponse;
    fromJSON(object: any): ListFailedEventsResponse;
    toJSON(message: ListFailedEventsResponse): unknown;
    create(base?: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse;
    fromPartial(object: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse;
};
export declare const RemoveFailedEventRequest: {
    encode(message: RemoveFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventRequest;
    fromJSON(object: any): RemoveFailedEventRequest;
    toJSON(message: RemoveFailedEventRequest): unknown;
    create(base?: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest;
    fromPartial(object: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest;
};
export declare const RemoveFailedEventResponse: {
    encode(_: RemoveFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventResponse;
    fromJSON(_: any): RemoveFailedEventResponse;
    toJSON(_: RemoveFailedEventResponse): unknown;
    create(base?: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse;
    fromPartial(_: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse;
};
export declare const View: {
    encode(message: View, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): View;
    fromJSON(object: any): View;
    toJSON(message: View): unknown;
    create(base?: DeepPartial<View>): View;
    fromPartial(object: DeepPartial<View>): View;
};
export declare const FailedEvent: {
    encode(message: FailedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FailedEvent;
    fromJSON(object: any): FailedEvent;
    toJSON(message: FailedEvent): unknown;
    create(base?: DeepPartial<FailedEvent>): FailedEvent;
    fromPartial(object: DeepPartial<FailedEvent>): FailedEvent;
};
export declare const SetInstanceFeatureRequest: {
    encode(message: SetInstanceFeatureRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetInstanceFeatureRequest;
    fromJSON(object: any): SetInstanceFeatureRequest;
    toJSON(message: SetInstanceFeatureRequest): unknown;
    create(base?: DeepPartial<SetInstanceFeatureRequest>): SetInstanceFeatureRequest;
    fromPartial(object: DeepPartial<SetInstanceFeatureRequest>): SetInstanceFeatureRequest;
};
export declare const SetInstanceFeatureResponse: {
    encode(message: SetInstanceFeatureResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetInstanceFeatureResponse;
    fromJSON(object: any): SetInstanceFeatureResponse;
    toJSON(message: SetInstanceFeatureResponse): unknown;
    create(base?: DeepPartial<SetInstanceFeatureResponse>): SetInstanceFeatureResponse;
    fromPartial(object: DeepPartial<SetInstanceFeatureResponse>): SetInstanceFeatureResponse;
};
export type SystemServiceDefinition = typeof SystemServiceDefinition;
export declare const SystemServiceDefinition: {
    readonly name: "SystemService";
    readonly fullName: "zitadel.system.v1.SystemService";
    readonly methods: {
        /**
         * Indicates if ZITADEL is running.
         * It respondes as soon as ZITADEL started
         */
        readonly healthz: {
            readonly name: "Healthz";
            readonly requestType: {
                encode(_: HealthzRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): HealthzRequest;
                fromJSON(_: any): HealthzRequest;
                toJSON(_: HealthzRequest): unknown;
                create(base?: DeepPartial<HealthzRequest>): HealthzRequest;
                fromPartial(_: DeepPartial<HealthzRequest>): HealthzRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: HealthzResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): HealthzResponse;
                fromJSON(_: any): HealthzResponse;
                toJSON(_: HealthzResponse): unknown;
                create(base?: DeepPartial<HealthzResponse>): HealthzResponse;
                fromPartial(_: DeepPartial<HealthzResponse>): HealthzResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Returns a list of ZITADEL instances */
        readonly listInstances: {
            readonly name: "ListInstances";
            readonly requestType: {
                encode(message: ListInstancesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesRequest;
                fromJSON(object: any): ListInstancesRequest;
                toJSON(message: ListInstancesRequest): unknown;
                create(base?: DeepPartial<ListInstancesRequest>): ListInstancesRequest;
                fromPartial(object: DeepPartial<ListInstancesRequest>): ListInstancesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListInstancesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesResponse;
                fromJSON(object: any): ListInstancesResponse;
                toJSON(message: ListInstancesResponse): unknown;
                create(base?: DeepPartial<ListInstancesResponse>): ListInstancesResponse;
                fromPartial(object: DeepPartial<ListInstancesResponse>): ListInstancesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Returns the detail of an instance */
        readonly getInstance: {
            readonly name: "GetInstance";
            readonly requestType: {
                encode(message: GetInstanceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest;
                fromJSON(object: any): GetInstanceRequest;
                toJSON(message: GetInstanceRequest): unknown;
                create(base?: DeepPartial<GetInstanceRequest>): GetInstanceRequest;
                fromPartial(object: DeepPartial<GetInstanceRequest>): GetInstanceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetInstanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceResponse;
                fromJSON(object: any): GetInstanceResponse;
                toJSON(message: GetInstanceResponse): unknown;
                create(base?: DeepPartial<GetInstanceResponse>): GetInstanceResponse;
                fromPartial(object: DeepPartial<GetInstanceResponse>): GetInstanceResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Deprecated: Use CreateInstance instead
         * Creates a new instance with all needed setup data
         * This might take some time
         */
        readonly addInstance: {
            readonly name: "AddInstance";
            readonly requestType: {
                encode(message: AddInstanceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceRequest;
                fromJSON(object: any): AddInstanceRequest;
                toJSON(message: AddInstanceRequest): unknown;
                create(base?: DeepPartial<AddInstanceRequest>): AddInstanceRequest;
                fromPartial(object: DeepPartial<AddInstanceRequest>): AddInstanceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddInstanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceResponse;
                fromJSON(object: any): AddInstanceResponse;
                toJSON(message: AddInstanceResponse): unknown;
                create(base?: DeepPartial<AddInstanceResponse>): AddInstanceResponse;
                fromPartial(object: DeepPartial<AddInstanceResponse>): AddInstanceResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Updates name of an existing instance */
        readonly updateInstance: {
            readonly name: "UpdateInstance";
            readonly requestType: {
                encode(message: UpdateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceRequest;
                fromJSON(object: any): UpdateInstanceRequest;
                toJSON(message: UpdateInstanceRequest): unknown;
                create(base?: DeepPartial<UpdateInstanceRequest>): UpdateInstanceRequest;
                fromPartial(object: DeepPartial<UpdateInstanceRequest>): UpdateInstanceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateInstanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceResponse;
                fromJSON(object: any): UpdateInstanceResponse;
                toJSON(message: UpdateInstanceResponse): unknown;
                create(base?: DeepPartial<UpdateInstanceResponse>): UpdateInstanceResponse;
                fromPartial(object: DeepPartial<UpdateInstanceResponse>): UpdateInstanceResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Creates a new instance with all needed setup data
         * This might take some time
         */
        readonly createInstance: {
            readonly name: "CreateInstance";
            readonly requestType: {
                encode(message: CreateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest;
                fromJSON(object: any): CreateInstanceRequest;
                toJSON(message: CreateInstanceRequest): unknown;
                create(base?: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest;
                fromPartial(object: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateInstanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceResponse;
                fromJSON(object: any): CreateInstanceResponse;
                toJSON(message: CreateInstanceResponse): unknown;
                create(base?: DeepPartial<CreateInstanceResponse>): CreateInstanceResponse;
                fromPartial(object: DeepPartial<CreateInstanceResponse>): CreateInstanceResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Removes an instance
         * This might take some time
         */
        readonly removeInstance: {
            readonly name: "RemoveInstance";
            readonly requestType: {
                encode(message: RemoveInstanceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveInstanceRequest;
                fromJSON(object: any): RemoveInstanceRequest;
                toJSON(message: RemoveInstanceRequest): unknown;
                create(base?: DeepPartial<RemoveInstanceRequest>): RemoveInstanceRequest;
                fromPartial(object: DeepPartial<RemoveInstanceRequest>): RemoveInstanceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveInstanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveInstanceResponse;
                fromJSON(object: any): RemoveInstanceResponse;
                toJSON(message: RemoveInstanceResponse): unknown;
                create(base?: DeepPartial<RemoveInstanceResponse>): RemoveInstanceResponse;
                fromPartial(object: DeepPartial<RemoveInstanceResponse>): RemoveInstanceResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Returns all instance members matching the request
         * all queries need to match (ANDed)
         * Deprecated: Use the Admin APIs ListIAMMembers instead
         */
        readonly listIAMMembers: {
            readonly name: "ListIAMMembers";
            readonly requestType: {
                encode(message: ListIAMMembersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersRequest;
                fromJSON(object: any): ListIAMMembersRequest;
                toJSON(message: ListIAMMembersRequest): unknown;
                create(base?: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest;
                fromPartial(object: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListIAMMembersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersResponse;
                fromJSON(object: any): ListIAMMembersResponse;
                toJSON(message: ListIAMMembersResponse): unknown;
                create(base?: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse;
                fromPartial(object: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Checks if a domain exists */
        readonly existsDomain: {
            readonly name: "ExistsDomain";
            readonly requestType: {
                encode(message: ExistsDomainRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ExistsDomainRequest;
                fromJSON(object: any): ExistsDomainRequest;
                toJSON(message: ExistsDomainRequest): unknown;
                create(base?: DeepPartial<ExistsDomainRequest>): ExistsDomainRequest;
                fromPartial(object: DeepPartial<ExistsDomainRequest>): ExistsDomainRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ExistsDomainResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ExistsDomainResponse;
                fromJSON(object: any): ExistsDomainResponse;
                toJSON(message: ExistsDomainResponse): unknown;
                create(base?: DeepPartial<ExistsDomainResponse>): ExistsDomainResponse;
                fromPartial(object: DeepPartial<ExistsDomainResponse>): ExistsDomainResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Returns the custom domains of an instance
         * Checks if a domain exists
         * Deprecated: Use the Admin APIs ListInstanceDomains on the admin API instead
         */
        readonly listDomains: {
            readonly name: "ListDomains";
            readonly requestType: {
                encode(message: ListDomainsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListDomainsRequest;
                fromJSON(object: any): ListDomainsRequest;
                toJSON(message: ListDomainsRequest): unknown;
                create(base?: DeepPartial<ListDomainsRequest>): ListDomainsRequest;
                fromPartial(object: DeepPartial<ListDomainsRequest>): ListDomainsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListDomainsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListDomainsResponse;
                fromJSON(object: any): ListDomainsResponse;
                toJSON(message: ListDomainsResponse): unknown;
                create(base?: DeepPartial<ListDomainsResponse>): ListDomainsResponse;
                fromPartial(object: DeepPartial<ListDomainsResponse>): ListDomainsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Adds a domain to an instance */
        readonly addDomain: {
            readonly name: "AddDomain";
            readonly requestType: {
                encode(message: AddDomainRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainRequest;
                fromJSON(object: any): AddDomainRequest;
                toJSON(message: AddDomainRequest): unknown;
                create(base?: DeepPartial<AddDomainRequest>): AddDomainRequest;
                fromPartial(object: DeepPartial<AddDomainRequest>): AddDomainRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddDomainResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainResponse;
                fromJSON(object: any): AddDomainResponse;
                toJSON(message: AddDomainResponse): unknown;
                create(base?: DeepPartial<AddDomainResponse>): AddDomainResponse;
                fromPartial(object: DeepPartial<AddDomainResponse>): AddDomainResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Removes the domain of an instance */
        readonly removeDomain: {
            readonly name: "RemoveDomain";
            readonly requestType: {
                encode(message: RemoveDomainRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDomainRequest;
                fromJSON(object: any): RemoveDomainRequest;
                toJSON(message: RemoveDomainRequest): unknown;
                create(base?: DeepPartial<RemoveDomainRequest>): RemoveDomainRequest;
                fromPartial(object: DeepPartial<RemoveDomainRequest>): RemoveDomainRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveDomainResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDomainResponse;
                fromJSON(object: any): RemoveDomainResponse;
                toJSON(message: RemoveDomainResponse): unknown;
                create(base?: DeepPartial<RemoveDomainResponse>): RemoveDomainResponse;
                fromPartial(object: DeepPartial<RemoveDomainResponse>): RemoveDomainResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Sets the primary domain of an instance */
        readonly setPrimaryDomain: {
            readonly name: "SetPrimaryDomain";
            readonly requestType: {
                encode(message: SetPrimaryDomainRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryDomainRequest;
                fromJSON(object: any): SetPrimaryDomainRequest;
                toJSON(message: SetPrimaryDomainRequest): unknown;
                create(base?: DeepPartial<SetPrimaryDomainRequest>): SetPrimaryDomainRequest;
                fromPartial(object: DeepPartial<SetPrimaryDomainRequest>): SetPrimaryDomainRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetPrimaryDomainResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryDomainResponse;
                fromJSON(object: any): SetPrimaryDomainResponse;
                toJSON(message: SetPrimaryDomainResponse): unknown;
                create(base?: DeepPartial<SetPrimaryDomainResponse>): SetPrimaryDomainResponse;
                fromPartial(object: DeepPartial<SetPrimaryDomainResponse>): SetPrimaryDomainResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Returns all stored read models of ZITADEL
         * views are used for search optimisation and optimise request latencies
         * they represent the delta of the event happend on the objects
         */
        readonly listViews: {
            readonly name: "ListViews";
            readonly requestType: {
                encode(_: ListViewsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsRequest;
                fromJSON(_: any): ListViewsRequest;
                toJSON(_: ListViewsRequest): unknown;
                create(base?: DeepPartial<ListViewsRequest>): ListViewsRequest;
                fromPartial(_: DeepPartial<ListViewsRequest>): ListViewsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListViewsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsResponse;
                fromJSON(object: any): ListViewsResponse;
                toJSON(message: ListViewsResponse): unknown;
                create(base?: DeepPartial<ListViewsResponse>): ListViewsResponse;
                fromPartial(object: DeepPartial<ListViewsResponse>): ListViewsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Truncates the delta of the change stream
         * be carefull with this function because ZITADEL has to
         * recompute the deltas after they got cleared.
         * Search requests will return wrong results until all deltas are recomputed
         */
        readonly clearView: {
            readonly name: "ClearView";
            readonly requestType: {
                encode(message: ClearViewRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ClearViewRequest;
                fromJSON(object: any): ClearViewRequest;
                toJSON(message: ClearViewRequest): unknown;
                create(base?: DeepPartial<ClearViewRequest>): ClearViewRequest;
                fromPartial(object: DeepPartial<ClearViewRequest>): ClearViewRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: ClearViewResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ClearViewResponse;
                fromJSON(_: any): ClearViewResponse;
                toJSON(_: ClearViewResponse): unknown;
                create(base?: DeepPartial<ClearViewResponse>): ClearViewResponse;
                fromPartial(_: DeepPartial<ClearViewResponse>): ClearViewResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Returns event descriptions which cannot be processed.
         * It's possible that some events need some retries.
         * For example if the SMTP-API wasn't able to send an email at the first time
         */
        readonly listFailedEvents: {
            readonly name: "ListFailedEvents";
            readonly requestType: {
                encode(_: ListFailedEventsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsRequest;
                fromJSON(_: any): ListFailedEventsRequest;
                toJSON(_: ListFailedEventsRequest): unknown;
                create(base?: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest;
                fromPartial(_: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListFailedEventsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsResponse;
                fromJSON(object: any): ListFailedEventsResponse;
                toJSON(message: ListFailedEventsResponse): unknown;
                create(base?: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse;
                fromPartial(object: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Deletes the event from failed events view.
         * the event is not removed from the change stream
         * This call is usefull if the system was able to process the event later.
         * e.g. if the second try of sending an email was successful. the first try produced a
         * failed event. You can find out if it worked on the `failure_count`
         */
        readonly removeFailedEvent: {
            readonly name: "RemoveFailedEvent";
            readonly requestType: {
                encode(message: RemoveFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventRequest;
                fromJSON(object: any): RemoveFailedEventRequest;
                toJSON(message: RemoveFailedEventRequest): unknown;
                create(base?: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest;
                fromPartial(object: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: RemoveFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventResponse;
                fromJSON(_: any): RemoveFailedEventResponse;
                toJSON(_: RemoveFailedEventResponse): unknown;
                create(base?: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse;
                fromPartial(_: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Creates a new quota
         * Returns an error if the quota already exists for the specified unit
         * Deprecated: use SetQuota instead
         */
        readonly addQuota: {
            readonly name: "AddQuota";
            readonly requestType: {
                encode(message: AddQuotaRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddQuotaRequest;
                fromJSON(object: any): AddQuotaRequest;
                toJSON(message: AddQuotaRequest): unknown;
                create(base?: DeepPartial<AddQuotaRequest>): AddQuotaRequest;
                fromPartial(object: DeepPartial<AddQuotaRequest>): AddQuotaRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddQuotaResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddQuotaResponse;
                fromJSON(object: any): AddQuotaResponse;
                toJSON(message: AddQuotaResponse): unknown;
                create(base?: DeepPartial<AddQuotaResponse>): AddQuotaResponse;
                fromPartial(object: DeepPartial<AddQuotaResponse>): AddQuotaResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Sets quota configuration properties
         * Creates a new quota if it doesn't exist for the specified unit
         */
        readonly setQuota: {
            readonly name: "SetQuota";
            readonly requestType: {
                encode(message: SetQuotaRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetQuotaRequest;
                fromJSON(object: any): SetQuotaRequest;
                toJSON(message: SetQuotaRequest): unknown;
                create(base?: DeepPartial<SetQuotaRequest>): SetQuotaRequest;
                fromPartial(object: DeepPartial<SetQuotaRequest>): SetQuotaRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetQuotaResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetQuotaResponse;
                fromJSON(object: any): SetQuotaResponse;
                toJSON(message: SetQuotaResponse): unknown;
                create(base?: DeepPartial<SetQuotaResponse>): SetQuotaResponse;
                fromPartial(object: DeepPartial<SetQuotaResponse>): SetQuotaResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Removes a quota */
        readonly removeQuota: {
            readonly name: "RemoveQuota";
            readonly requestType: {
                encode(message: RemoveQuotaRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveQuotaRequest;
                fromJSON(object: any): RemoveQuotaRequest;
                toJSON(message: RemoveQuotaRequest): unknown;
                create(base?: DeepPartial<RemoveQuotaRequest>): RemoveQuotaRequest;
                fromPartial(object: DeepPartial<RemoveQuotaRequest>): RemoveQuotaRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveQuotaResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveQuotaResponse;
                fromJSON(object: any): RemoveQuotaResponse;
                toJSON(message: RemoveQuotaResponse): unknown;
                create(base?: DeepPartial<RemoveQuotaResponse>): RemoveQuotaResponse;
                fromPartial(object: DeepPartial<RemoveQuotaResponse>): RemoveQuotaResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Set a feature flag on an instance */
        readonly setInstanceFeature: {
            readonly name: "SetInstanceFeature";
            readonly requestType: {
                encode(message: SetInstanceFeatureRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetInstanceFeatureRequest;
                fromJSON(object: any): SetInstanceFeatureRequest;
                toJSON(message: SetInstanceFeatureRequest): unknown;
                create(base?: DeepPartial<SetInstanceFeatureRequest>): SetInstanceFeatureRequest;
                fromPartial(object: DeepPartial<SetInstanceFeatureRequest>): SetInstanceFeatureRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetInstanceFeatureResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetInstanceFeatureResponse;
                fromJSON(object: any): SetInstanceFeatureResponse;
                toJSON(message: SetInstanceFeatureResponse): unknown;
                create(base?: DeepPartial<SetInstanceFeatureResponse>): SetInstanceFeatureResponse;
                fromPartial(object: DeepPartial<SetInstanceFeatureResponse>): SetInstanceFeatureResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Sets instance level limits */
        readonly setLimits: {
            readonly name: "SetLimits";
            readonly requestType: {
                encode(message: SetLimitsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetLimitsRequest;
                fromJSON(object: any): SetLimitsRequest;
                toJSON(message: SetLimitsRequest): unknown;
                create(base?: DeepPartial<SetLimitsRequest>): SetLimitsRequest;
                fromPartial(object: DeepPartial<SetLimitsRequest>): SetLimitsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetLimitsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetLimitsResponse;
                fromJSON(object: any): SetLimitsResponse;
                toJSON(message: SetLimitsResponse): unknown;
                create(base?: DeepPartial<SetLimitsResponse>): SetLimitsResponse;
                fromPartial(object: DeepPartial<SetLimitsResponse>): SetLimitsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Resets instance level limits */
        readonly resetLimits: {
            readonly name: "ResetLimits";
            readonly requestType: {
                encode(message: ResetLimitsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetLimitsRequest;
                fromJSON(object: any): ResetLimitsRequest;
                toJSON(message: ResetLimitsRequest): unknown;
                create(base?: DeepPartial<ResetLimitsRequest>): ResetLimitsRequest;
                fromPartial(object: DeepPartial<ResetLimitsRequest>): ResetLimitsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResetLimitsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResetLimitsResponse;
                fromJSON(object: any): ResetLimitsResponse;
                toJSON(message: ResetLimitsResponse): unknown;
                create(base?: DeepPartial<ResetLimitsResponse>): ResetLimitsResponse;
                fromPartial(object: DeepPartial<ResetLimitsResponse>): ResetLimitsResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface SystemServiceImplementation<CallContextExt = {}> {
    /**
     * Indicates if ZITADEL is running.
     * It respondes as soon as ZITADEL started
     */
    healthz(request: HealthzRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HealthzResponse>>;
    /** Returns a list of ZITADEL instances */
    listInstances(request: ListInstancesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListInstancesResponse>>;
    /** Returns the detail of an instance */
    getInstance(request: GetInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetInstanceResponse>>;
    /**
     * Deprecated: Use CreateInstance instead
     * Creates a new instance with all needed setup data
     * This might take some time
     */
    addInstance(request: AddInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddInstanceResponse>>;
    /** Updates name of an existing instance */
    updateInstance(request: UpdateInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateInstanceResponse>>;
    /**
     * Creates a new instance with all needed setup data
     * This might take some time
     */
    createInstance(request: CreateInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateInstanceResponse>>;
    /**
     * Removes an instance
     * This might take some time
     */
    removeInstance(request: RemoveInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveInstanceResponse>>;
    /**
     * Returns all instance members matching the request
     * all queries need to match (ANDed)
     * Deprecated: Use the Admin APIs ListIAMMembers instead
     */
    listIAMMembers(request: ListIAMMembersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListIAMMembersResponse>>;
    /** Checks if a domain exists */
    existsDomain(request: ExistsDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ExistsDomainResponse>>;
    /**
     * Returns the custom domains of an instance
     * Checks if a domain exists
     * Deprecated: Use the Admin APIs ListInstanceDomains on the admin API instead
     */
    listDomains(request: ListDomainsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListDomainsResponse>>;
    /** Adds a domain to an instance */
    addDomain(request: AddDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddDomainResponse>>;
    /** Removes the domain of an instance */
    removeDomain(request: RemoveDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveDomainResponse>>;
    /** Sets the primary domain of an instance */
    setPrimaryDomain(request: SetPrimaryDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPrimaryDomainResponse>>;
    /**
     * Returns all stored read models of ZITADEL
     * views are used for search optimisation and optimise request latencies
     * they represent the delta of the event happend on the objects
     */
    listViews(request: ListViewsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListViewsResponse>>;
    /**
     * Truncates the delta of the change stream
     * be carefull with this function because ZITADEL has to
     * recompute the deltas after they got cleared.
     * Search requests will return wrong results until all deltas are recomputed
     */
    clearView(request: ClearViewRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ClearViewResponse>>;
    /**
     * Returns event descriptions which cannot be processed.
     * It's possible that some events need some retries.
     * For example if the SMTP-API wasn't able to send an email at the first time
     */
    listFailedEvents(request: ListFailedEventsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFailedEventsResponse>>;
    /**
     * Deletes the event from failed events view.
     * the event is not removed from the change stream
     * This call is usefull if the system was able to process the event later.
     * e.g. if the second try of sending an email was successful. the first try produced a
     * failed event. You can find out if it worked on the `failure_count`
     */
    removeFailedEvent(request: RemoveFailedEventRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveFailedEventResponse>>;
    /**
     * Creates a new quota
     * Returns an error if the quota already exists for the specified unit
     * Deprecated: use SetQuota instead
     */
    addQuota(request: AddQuotaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddQuotaResponse>>;
    /**
     * Sets quota configuration properties
     * Creates a new quota if it doesn't exist for the specified unit
     */
    setQuota(request: SetQuotaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetQuotaResponse>>;
    /** Removes a quota */
    removeQuota(request: RemoveQuotaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveQuotaResponse>>;
    /** Set a feature flag on an instance */
    setInstanceFeature(request: SetInstanceFeatureRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetInstanceFeatureResponse>>;
    /** Sets instance level limits */
    setLimits(request: SetLimitsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetLimitsResponse>>;
    /** Resets instance level limits */
    resetLimits(request: ResetLimitsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetLimitsResponse>>;
}
export interface SystemServiceClient<CallOptionsExt = {}> {
    /**
     * Indicates if ZITADEL is running.
     * It respondes as soon as ZITADEL started
     */
    healthz(request: DeepPartial<HealthzRequest>, options?: CallOptions & CallOptionsExt): Promise<HealthzResponse>;
    /** Returns a list of ZITADEL instances */
    listInstances(request: DeepPartial<ListInstancesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListInstancesResponse>;
    /** Returns the detail of an instance */
    getInstance(request: DeepPartial<GetInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<GetInstanceResponse>;
    /**
     * Deprecated: Use CreateInstance instead
     * Creates a new instance with all needed setup data
     * This might take some time
     */
    addInstance(request: DeepPartial<AddInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<AddInstanceResponse>;
    /** Updates name of an existing instance */
    updateInstance(request: DeepPartial<UpdateInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateInstanceResponse>;
    /**
     * Creates a new instance with all needed setup data
     * This might take some time
     */
    createInstance(request: DeepPartial<CreateInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateInstanceResponse>;
    /**
     * Removes an instance
     * This might take some time
     */
    removeInstance(request: DeepPartial<RemoveInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveInstanceResponse>;
    /**
     * Returns all instance members matching the request
     * all queries need to match (ANDed)
     * Deprecated: Use the Admin APIs ListIAMMembers instead
     */
    listIAMMembers(request: DeepPartial<ListIAMMembersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListIAMMembersResponse>;
    /** Checks if a domain exists */
    existsDomain(request: DeepPartial<ExistsDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<ExistsDomainResponse>;
    /**
     * Returns the custom domains of an instance
     * Checks if a domain exists
     * Deprecated: Use the Admin APIs ListInstanceDomains on the admin API instead
     */
    listDomains(request: DeepPartial<ListDomainsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListDomainsResponse>;
    /** Adds a domain to an instance */
    addDomain(request: DeepPartial<AddDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<AddDomainResponse>;
    /** Removes the domain of an instance */
    removeDomain(request: DeepPartial<RemoveDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveDomainResponse>;
    /** Sets the primary domain of an instance */
    setPrimaryDomain(request: DeepPartial<SetPrimaryDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPrimaryDomainResponse>;
    /**
     * Returns all stored read models of ZITADEL
     * views are used for search optimisation and optimise request latencies
     * they represent the delta of the event happend on the objects
     */
    listViews(request: DeepPartial<ListViewsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListViewsResponse>;
    /**
     * Truncates the delta of the change stream
     * be carefull with this function because ZITADEL has to
     * recompute the deltas after they got cleared.
     * Search requests will return wrong results until all deltas are recomputed
     */
    clearView(request: DeepPartial<ClearViewRequest>, options?: CallOptions & CallOptionsExt): Promise<ClearViewResponse>;
    /**
     * Returns event descriptions which cannot be processed.
     * It's possible that some events need some retries.
     * For example if the SMTP-API wasn't able to send an email at the first time
     */
    listFailedEvents(request: DeepPartial<ListFailedEventsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFailedEventsResponse>;
    /**
     * Deletes the event from failed events view.
     * the event is not removed from the change stream
     * This call is usefull if the system was able to process the event later.
     * e.g. if the second try of sending an email was successful. the first try produced a
     * failed event. You can find out if it worked on the `failure_count`
     */
    removeFailedEvent(request: DeepPartial<RemoveFailedEventRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveFailedEventResponse>;
    /**
     * Creates a new quota
     * Returns an error if the quota already exists for the specified unit
     * Deprecated: use SetQuota instead
     */
    addQuota(request: DeepPartial<AddQuotaRequest>, options?: CallOptions & CallOptionsExt): Promise<AddQuotaResponse>;
    /**
     * Sets quota configuration properties
     * Creates a new quota if it doesn't exist for the specified unit
     */
    setQuota(request: DeepPartial<SetQuotaRequest>, options?: CallOptions & CallOptionsExt): Promise<SetQuotaResponse>;
    /** Removes a quota */
    removeQuota(request: DeepPartial<RemoveQuotaRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveQuotaResponse>;
    /** Set a feature flag on an instance */
    setInstanceFeature(request: DeepPartial<SetInstanceFeatureRequest>, options?: CallOptions & CallOptionsExt): Promise<SetInstanceFeatureResponse>;
    /** Sets instance level limits */
    setLimits(request: DeepPartial<SetLimitsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetLimitsResponse>;
    /** Resets instance level limits */
    resetLimits(request: DeepPartial<ResetLimitsRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetLimitsResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
