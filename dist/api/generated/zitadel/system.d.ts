import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Duration } from "../google/protobuf/duration.js";
import { KeyType } from "./auth_n_key.js";
import { InstanceFeature } from "./feature.js";
import { Domain, DomainFieldName, DomainSearchQuery, FieldName, Instance, InstanceDetail, Query } from "./instance.js";
import { Member, SearchQuery } from "./member.js";
import { ListDetails, ListQuery, ObjectDetails } from "./object.js";
import { Notification, Unit } from "./quota.js";
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
    block?: boolean | undefined;
}
export interface SetLimitsResponse {
    details: ObjectDetails | undefined;
}
export interface BulkSetLimitsRequest {
    limits: SetLimitsRequest[];
}
export interface BulkSetLimitsResponse {
    details: ObjectDetails | undefined;
    targetDetails: ObjectDetails[];
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
export declare const HealthzRequest: MessageFns<HealthzRequest>;
export declare const HealthzResponse: MessageFns<HealthzResponse>;
export declare const ListInstancesRequest: MessageFns<ListInstancesRequest>;
export declare const ListInstancesResponse: MessageFns<ListInstancesResponse>;
export declare const GetInstanceRequest: MessageFns<GetInstanceRequest>;
export declare const GetInstanceResponse: MessageFns<GetInstanceResponse>;
export declare const AddInstanceRequest: MessageFns<AddInstanceRequest>;
export declare const AddInstanceRequest_Profile: MessageFns<AddInstanceRequest_Profile>;
export declare const AddInstanceRequest_Email: MessageFns<AddInstanceRequest_Email>;
export declare const AddInstanceRequest_Password: MessageFns<AddInstanceRequest_Password>;
export declare const AddInstanceResponse: MessageFns<AddInstanceResponse>;
export declare const CreateInstanceRequest: MessageFns<CreateInstanceRequest>;
export declare const CreateInstanceRequest_Profile: MessageFns<CreateInstanceRequest_Profile>;
export declare const CreateInstanceRequest_Email: MessageFns<CreateInstanceRequest_Email>;
export declare const CreateInstanceRequest_Password: MessageFns<CreateInstanceRequest_Password>;
export declare const CreateInstanceRequest_Human: MessageFns<CreateInstanceRequest_Human>;
export declare const CreateInstanceRequest_PersonalAccessToken: MessageFns<CreateInstanceRequest_PersonalAccessToken>;
export declare const CreateInstanceRequest_MachineKey: MessageFns<CreateInstanceRequest_MachineKey>;
export declare const CreateInstanceRequest_Machine: MessageFns<CreateInstanceRequest_Machine>;
export declare const CreateInstanceResponse: MessageFns<CreateInstanceResponse>;
export declare const UpdateInstanceRequest: MessageFns<UpdateInstanceRequest>;
export declare const UpdateInstanceResponse: MessageFns<UpdateInstanceResponse>;
export declare const RemoveInstanceRequest: MessageFns<RemoveInstanceRequest>;
export declare const RemoveInstanceResponse: MessageFns<RemoveInstanceResponse>;
export declare const ListIAMMembersRequest: MessageFns<ListIAMMembersRequest>;
export declare const ListIAMMembersResponse: MessageFns<ListIAMMembersResponse>;
export declare const GetUsageRequest: MessageFns<GetUsageRequest>;
export declare const AddQuotaRequest: MessageFns<AddQuotaRequest>;
export declare const AddQuotaResponse: MessageFns<AddQuotaResponse>;
export declare const SetQuotaRequest: MessageFns<SetQuotaRequest>;
export declare const SetQuotaResponse: MessageFns<SetQuotaResponse>;
export declare const RemoveQuotaRequest: MessageFns<RemoveQuotaRequest>;
export declare const RemoveQuotaResponse: MessageFns<RemoveQuotaResponse>;
export declare const SetLimitsRequest: MessageFns<SetLimitsRequest>;
export declare const SetLimitsResponse: MessageFns<SetLimitsResponse>;
export declare const BulkSetLimitsRequest: MessageFns<BulkSetLimitsRequest>;
export declare const BulkSetLimitsResponse: MessageFns<BulkSetLimitsResponse>;
export declare const ResetLimitsRequest: MessageFns<ResetLimitsRequest>;
export declare const ResetLimitsResponse: MessageFns<ResetLimitsResponse>;
export declare const ExistsDomainRequest: MessageFns<ExistsDomainRequest>;
export declare const ExistsDomainResponse: MessageFns<ExistsDomainResponse>;
export declare const ListDomainsRequest: MessageFns<ListDomainsRequest>;
export declare const ListDomainsResponse: MessageFns<ListDomainsResponse>;
export declare const AddDomainRequest: MessageFns<AddDomainRequest>;
export declare const AddDomainResponse: MessageFns<AddDomainResponse>;
export declare const RemoveDomainRequest: MessageFns<RemoveDomainRequest>;
export declare const RemoveDomainResponse: MessageFns<RemoveDomainResponse>;
export declare const SetPrimaryDomainRequest: MessageFns<SetPrimaryDomainRequest>;
export declare const SetPrimaryDomainResponse: MessageFns<SetPrimaryDomainResponse>;
export declare const ChangeSubscriptionRequest: MessageFns<ChangeSubscriptionRequest>;
export declare const ChangeSubscriptionResponse: MessageFns<ChangeSubscriptionResponse>;
export declare const ListViewsRequest: MessageFns<ListViewsRequest>;
export declare const ListViewsResponse: MessageFns<ListViewsResponse>;
export declare const ClearViewRequest: MessageFns<ClearViewRequest>;
export declare const ClearViewResponse: MessageFns<ClearViewResponse>;
export declare const ListFailedEventsRequest: MessageFns<ListFailedEventsRequest>;
export declare const ListFailedEventsResponse: MessageFns<ListFailedEventsResponse>;
export declare const RemoveFailedEventRequest: MessageFns<RemoveFailedEventRequest>;
export declare const RemoveFailedEventResponse: MessageFns<RemoveFailedEventResponse>;
export declare const View: MessageFns<View>;
export declare const FailedEvent: MessageFns<FailedEvent>;
export declare const SetInstanceFeatureRequest: MessageFns<SetInstanceFeatureRequest>;
export declare const SetInstanceFeatureResponse: MessageFns<SetInstanceFeatureResponse>;
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
            readonly requestType: MessageFns<HealthzRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<HealthzResponse>;
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
            readonly requestType: MessageFns<ListInstancesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListInstancesResponse>;
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
            readonly requestType: MessageFns<GetInstanceRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetInstanceResponse>;
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
            readonly requestType: MessageFns<AddInstanceRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddInstanceResponse>;
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
            readonly requestType: MessageFns<UpdateInstanceRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateInstanceResponse>;
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
            readonly requestType: MessageFns<CreateInstanceRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateInstanceResponse>;
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
            readonly requestType: MessageFns<RemoveInstanceRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveInstanceResponse>;
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
            readonly requestType: MessageFns<ListIAMMembersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListIAMMembersResponse>;
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
            readonly requestType: MessageFns<ExistsDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ExistsDomainResponse>;
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
            readonly requestType: MessageFns<ListDomainsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListDomainsResponse>;
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
            readonly requestType: MessageFns<AddDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddDomainResponse>;
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
            readonly requestType: MessageFns<RemoveDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveDomainResponse>;
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
            readonly requestType: MessageFns<SetPrimaryDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetPrimaryDomainResponse>;
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
            readonly requestType: MessageFns<ListViewsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListViewsResponse>;
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
            readonly requestType: MessageFns<ClearViewRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ClearViewResponse>;
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
            readonly requestType: MessageFns<ListFailedEventsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListFailedEventsResponse>;
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
            readonly requestType: MessageFns<RemoveFailedEventRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveFailedEventResponse>;
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
            readonly requestType: MessageFns<AddQuotaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddQuotaResponse>;
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
            readonly requestType: MessageFns<SetQuotaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetQuotaResponse>;
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
            readonly requestType: MessageFns<RemoveQuotaRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveQuotaResponse>;
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
            readonly requestType: MessageFns<SetInstanceFeatureRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetInstanceFeatureResponse>;
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
            readonly requestType: MessageFns<SetLimitsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetLimitsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /** Sets many instance level limits */
        readonly bulkSetLimits: {
            readonly name: "BulkSetLimits";
            readonly requestType: MessageFns<BulkSetLimitsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<BulkSetLimitsResponse>;
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
            readonly requestType: MessageFns<ResetLimitsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetLimitsResponse>;
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
    /** Sets many instance level limits */
    bulkSetLimits(request: BulkSetLimitsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkSetLimitsResponse>>;
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
    /** Sets many instance level limits */
    bulkSetLimits(request: DeepPartial<BulkSetLimitsRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkSetLimitsResponse>;
    /** Resets instance level limits */
    resetLimits(request: DeepPartial<ResetLimitsRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetLimitsResponse>;
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
