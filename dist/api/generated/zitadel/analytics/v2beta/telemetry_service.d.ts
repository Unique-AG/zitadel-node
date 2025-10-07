import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { InstanceInformation, ResourceCount } from "./telemetry.js";
export declare const protobufPackage = "zitadel.analytics.v2beta";
export interface ReportBaseInformationRequest {
    /** The system ID is a unique identifier for the ZITADEL system. */
    systemId: string;
    /** The current version of the ZITADEL system. */
    version: string;
    /** A list of instances in the ZITADEL system and their information. */
    instances: InstanceInformation[];
}
export interface ReportBaseInformationResponse {
    /**
     * The report ID is a unique identifier for the report.
     * It is used to identify the report to be able to link it to the resource counts or other reports.
     * Note that the report ID is only valid for the same system ID.
     */
    reportId: string;
}
export interface ReportResourceCountsRequest {
    /** The system ID is a unique identifier for the ZITADEL system. */
    systemId: string;
    /**
     * The previously returned report ID from the server to continue reporting.
     * Note that the report ID is only valid for the same system ID.
     */
    reportId?: string | undefined;
    /** A list of resource counts to report. */
    resourceCounts: ResourceCount[];
}
export interface ReportResourceCountsResponse {
    /**
     * The report ID is a unique identifier for the report.
     * It is used to identify the report in case of additional data / pagination.
     * Note that the report ID is only valid for the same system ID.
     */
    reportId: string;
}
export declare const ReportBaseInformationRequest: MessageFns<ReportBaseInformationRequest>;
export declare const ReportBaseInformationResponse: MessageFns<ReportBaseInformationResponse>;
export declare const ReportResourceCountsRequest: MessageFns<ReportResourceCountsRequest>;
export declare const ReportResourceCountsResponse: MessageFns<ReportResourceCountsResponse>;
/**
 * The TelemetryService is used to report telemetry such as usage statistics of the ZITADEL instance(s).
 * back to a central storage.
 * It is used to collect anonymized data about the usage of ZITADEL features, capabilities, and configurations.
 * ZITADEL acts as a client of the TelemetryService.
 *
 * Reports are sent periodically based on the system's runtime configuration.
 * The content of the reports, respectively the data collected, can be configured in the system's runtime configuration.
 *
 * All endpoints follow the same error and retry handling:
 * In case of a failure to report the usage, ZITADEL will retry to report the usage
 * based on the configured retry policy and error type:
 * - Client side errors will not be retried, as they indicate a misconfiguration or an invalid request:
 *   - `INVALID_ARGUMENT`: The request was malformed.
 *   - `NOT_FOUND`: The TelemetryService's endpoint is likely misconfigured.
 * - Connection / transfer errors will be retried based on the retry policy configured in the system's runtime configuration:
 *   - `DEADLINE_EXCEEDED`: The request took too long to complete, it will be retried.
 *   - `RESOURCE_EXHAUSTED`: The request was rejected due to resource exhaustion, it will be retried after a backoff period.
 *   - `UNAVAILABLE`: The TelemetryService is currently unavailable, it will be retried after a backoff period.
 * Server side errors will also be retried based on the information provided by the server:
 * - `FAILED_PRECONDITION`: The request failed due to a precondition, e.g. the report ID does not exists,
 *    does not correspond to the same system ID or previous reporting is too old, do not retry.
 * - `INTERNAL`: An internal error occurred. Check details and logs.
 */
export type TelemetryServiceDefinition = typeof TelemetryServiceDefinition;
export declare const TelemetryServiceDefinition: {
    readonly name: "TelemetryService";
    readonly fullName: "zitadel.analytics.v2beta.TelemetryService";
    readonly methods: {
        /**
         * ReportBaseInformation is used to report the base information of the ZITADEL system,
         * including the version, instances, their creation date and domains.
         * The response contains a report ID to link it to the resource counts or other reports.
         * The report ID is only valid for the same system ID.
         */
        readonly reportBaseInformation: {
            readonly name: "ReportBaseInformation";
            readonly requestType: MessageFns<ReportBaseInformationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReportBaseInformationResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * ReportResourceCounts is used to report the resource counts such as amount of organizations
         * or users per organization and much more.
         * Since the resource counts can be reported in multiple batches,
         * the response contains a report ID to continue reporting.
         * The report ID is only valid for the same system ID.
         */
        readonly reportResourceCounts: {
            readonly name: "ReportResourceCounts";
            readonly requestType: MessageFns<ReportResourceCountsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReportResourceCountsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface TelemetryServiceImplementation<CallContextExt = {}> {
    /**
     * ReportBaseInformation is used to report the base information of the ZITADEL system,
     * including the version, instances, their creation date and domains.
     * The response contains a report ID to link it to the resource counts or other reports.
     * The report ID is only valid for the same system ID.
     */
    reportBaseInformation(request: ReportBaseInformationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReportBaseInformationResponse>>;
    /**
     * ReportResourceCounts is used to report the resource counts such as amount of organizations
     * or users per organization and much more.
     * Since the resource counts can be reported in multiple batches,
     * the response contains a report ID to continue reporting.
     * The report ID is only valid for the same system ID.
     */
    reportResourceCounts(request: ReportResourceCountsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReportResourceCountsResponse>>;
}
export interface TelemetryServiceClient<CallOptionsExt = {}> {
    /**
     * ReportBaseInformation is used to report the base information of the ZITADEL system,
     * including the version, instances, their creation date and domains.
     * The response contains a report ID to link it to the resource counts or other reports.
     * The report ID is only valid for the same system ID.
     */
    reportBaseInformation(request: DeepPartial<ReportBaseInformationRequest>, options?: CallOptions & CallOptionsExt): Promise<ReportBaseInformationResponse>;
    /**
     * ReportResourceCounts is used to report the resource counts such as amount of organizations
     * or users per organization and much more.
     * Since the resource counts can be reported in multiple batches,
     * the response contains a report ID to continue reporting.
     * The report ID is only valid for the same system ID.
     */
    reportResourceCounts(request: DeepPartial<ReportResourceCountsRequest>, options?: CallOptions & CallOptionsExt): Promise<ReportResourceCountsResponse>;
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
