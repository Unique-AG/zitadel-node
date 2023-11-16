import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zitadel.milestone.v1";
export declare enum MilestoneType {
    MILESTONE_TYPE_UNSPECIFIED = 0,
    MILESTONE_TYPE_INSTANCE_CREATED = 1,
    MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE = 2,
    MILESTONE_TYPE_PROJECT_CREATED = 3,
    MILESTONE_TYPE_APPLICATION_CREATED = 4,
    MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION = 5,
    MILESTONE_TYPE_INSTANCE_DELETED = 6,
    UNRECOGNIZED = -1
}
export declare function milestoneTypeFromJSON(object: any): MilestoneType;
export declare function milestoneTypeToJSON(object: MilestoneType): string;
export declare enum MilestoneFieldName {
    MILESTONE_FIELD_NAME_UNSPECIFIED = 0,
    MILESTONE_FIELD_NAME_TYPE = 1,
    MILESTONE_FIELD_NAME_REACHED_DATE = 2,
    UNRECOGNIZED = -1
}
export declare function milestoneFieldNameFromJSON(object: any): MilestoneFieldName;
export declare function milestoneFieldNameToJSON(object: MilestoneFieldName): string;
export interface Milestone {
    type: MilestoneType;
    reachedDate: Date | undefined;
}
export interface MilestoneQuery {
    isReachedQuery?: IsReachedQuery | undefined;
}
export interface IsReachedQuery {
    reached: boolean;
}
export declare const Milestone: {
    encode(message: Milestone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Milestone;
    fromJSON(object: any): Milestone;
    toJSON(message: Milestone): unknown;
    create(base?: DeepPartial<Milestone>): Milestone;
    fromPartial(object: DeepPartial<Milestone>): Milestone;
};
export declare const MilestoneQuery: {
    encode(message: MilestoneQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MilestoneQuery;
    fromJSON(object: any): MilestoneQuery;
    toJSON(message: MilestoneQuery): unknown;
    create(base?: DeepPartial<MilestoneQuery>): MilestoneQuery;
    fromPartial(object: DeepPartial<MilestoneQuery>): MilestoneQuery;
};
export declare const IsReachedQuery: {
    encode(message: IsReachedQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsReachedQuery;
    fromJSON(object: any): IsReachedQuery;
    toJSON(message: IsReachedQuery): unknown;
    create(base?: DeepPartial<IsReachedQuery>): IsReachedQuery;
    fromPartial(object: DeepPartial<IsReachedQuery>): IsReachedQuery;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
