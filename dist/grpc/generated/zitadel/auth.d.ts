/// <reference types="node" />
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Change, ChangeQuery } from "./change";
import { IDPUserLink } from "./idp";
import { Metadata, MetadataQuery } from "./metadata";
import { ListDetails, ListQuery, ObjectDetails } from "./object";
import { Org, OrgQuery } from "./org";
import { LabelPolicy, LoginPolicy, PasswordComplexityPolicy, PrivacyPolicy } from "./policy";
import { AuthFactor, Email, Gender, Membership, MembershipQuery, Phone, Profile, RefreshToken, Session, Type, User, WebAuthNKey, WebAuthNToken, WebAuthNVerification } from "./user";
export declare const protobufPackage = "zitadel.auth.v1";
/** This is an empty request */
export interface HealthzRequest {
}
/** This is an empty response */
export interface HealthzResponse {
}
/** This is an empty request */
export interface GetSupportedLanguagesRequest {
}
/** This is an empty response */
export interface GetSupportedLanguagesResponse {
    languages: string[];
}
/**
 * This is an empty request
 * the request parameters are read from the token-header
 */
export interface GetMyUserRequest {
}
export interface GetMyUserResponse {
    user: User | undefined;
    lastLogin: Date | undefined;
}
/**
 * This is an empty request
 * the request parameters are read from the token-header
 */
export interface RemoveMyUserRequest {
}
export interface RemoveMyUserResponse {
    details: ObjectDetails | undefined;
}
export interface ListMyUserChangesRequest {
    query: ChangeQuery | undefined;
}
export interface ListMyUserChangesResponse {
    /** zitadel.v1.ListDetails details = 1; was always returned empty (as we cannot get the necessary info) */
    result: Change[];
}
/** This is an empty request */
export interface ListMyUserSessionsRequest {
}
export interface ListMyUserSessionsResponse {
    result: Session[];
}
export interface ListMyMetadataRequest {
    query: ListQuery | undefined;
    queries: MetadataQuery[];
}
export interface ListMyMetadataResponse {
    details: ListDetails | undefined;
    result: Metadata[];
}
export interface GetMyMetadataRequest {
    key: string;
}
export interface GetMyMetadataResponse {
    metadata: Metadata | undefined;
}
export interface SetMyMetadataRequest {
    key: string;
    value: Buffer;
}
export interface SetMyMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkSetMyMetadataRequest {
    metadata: BulkSetMyMetadataRequest_Metadata[];
}
export interface BulkSetMyMetadataRequest_Metadata {
    key: string;
    value: Buffer;
}
export interface BulkSetMyMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyMetadataRequest {
    key: string;
}
export interface RemoveMyMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkRemoveMyMetadataRequest {
    keys: string[];
}
export interface BulkRemoveMyMetadataResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ListMyRefreshTokensRequest {
}
export interface ListMyRefreshTokensResponse {
    details: ListDetails | undefined;
    result: RefreshToken[];
}
export interface RevokeMyRefreshTokenRequest {
    id: string;
}
export interface RevokeMyRefreshTokenResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RevokeAllMyRefreshTokensRequest {
}
/** This is an empty response */
export interface RevokeAllMyRefreshTokensResponse {
}
export interface UpdateMyUserNameRequest {
    userName: string;
}
export interface UpdateMyUserNameResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetMyPasswordComplexityPolicyRequest {
}
export interface GetMyPasswordComplexityPolicyResponse {
    policy: PasswordComplexityPolicy | undefined;
}
export interface UpdateMyPasswordRequest {
    oldPassword: string;
    newPassword: string;
}
export interface UpdateMyPasswordResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetMyProfileRequest {
}
export interface GetMyProfileResponse {
    details: ObjectDetails | undefined;
    profile: Profile | undefined;
}
export interface UpdateMyProfileRequest {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface UpdateMyProfileResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetMyEmailRequest {
}
export interface GetMyEmailResponse {
    details: ObjectDetails | undefined;
    email: Email | undefined;
}
export interface SetMyEmailRequest {
    email: string;
}
export interface SetMyEmailResponse {
    details: ObjectDetails | undefined;
}
export interface VerifyMyEmailRequest {
    code: string;
}
export interface VerifyMyEmailResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ResendMyEmailVerificationRequest {
}
export interface ResendMyEmailVerificationResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface GetMyPhoneRequest {
}
export interface GetMyPhoneResponse {
    details: ObjectDetails | undefined;
    phone: Phone | undefined;
}
export interface SetMyPhoneRequest {
    phone: string;
}
export interface SetMyPhoneResponse {
    details: ObjectDetails | undefined;
}
export interface VerifyMyPhoneRequest {
    code: string;
}
export interface VerifyMyPhoneResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ResendMyPhoneVerificationRequest {
}
export interface ResendMyPhoneVerificationResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveMyPhoneRequest {
}
export interface RemoveMyPhoneResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveMyAvatarRequest {
}
export interface RemoveMyAvatarResponse {
    details: ObjectDetails | undefined;
}
export interface ListMyLinkedIDPsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
}
export interface ListMyLinkedIDPsResponse {
    details: ListDetails | undefined;
    result: IDPUserLink[];
}
export interface RemoveMyLinkedIDPRequest {
    idpId: string;
    linkedUserId: string;
}
export interface RemoveMyLinkedIDPResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ListMyAuthFactorsRequest {
}
export interface ListMyAuthFactorsResponse {
    result: AuthFactor[];
}
/** This is an empty request */
export interface AddMyAuthFactorU2FRequest {
}
export interface AddMyAuthFactorU2FResponse {
    key: WebAuthNKey | undefined;
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface AddMyAuthFactorOTPRequest {
}
export interface AddMyAuthFactorOTPResponse {
    url: string;
    secret: string;
    details: ObjectDetails | undefined;
}
export interface VerifyMyAuthFactorOTPRequest {
    code: string;
}
export interface VerifyMyAuthFactorOTPResponse {
    details: ObjectDetails | undefined;
}
export interface VerifyMyAuthFactorU2FRequest {
    verification: WebAuthNVerification | undefined;
}
export interface VerifyMyAuthFactorU2FResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveMyAuthFactorOTPRequest {
}
export interface RemoveMyAuthFactorOTPResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface AddMyAuthFactorOTPSMSRequest {
}
export interface AddMyAuthFactorOTPSMSResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveMyAuthFactorOTPSMSRequest {
}
export interface RemoveMyAuthFactorOTPSMSResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface AddMyAuthFactorOTPEmailRequest {
}
export interface AddMyAuthFactorOTPEmailResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface RemoveMyAuthFactorOTPEmailRequest {
}
export interface RemoveMyAuthFactorOTPEmailResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyAuthFactorU2FRequest {
    tokenId: string;
}
export interface RemoveMyAuthFactorU2FResponse {
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface ListMyPasswordlessRequest {
}
export interface ListMyPasswordlessResponse {
    result: WebAuthNToken[];
}
/** This is an empty request */
export interface AddMyPasswordlessRequest {
}
export interface AddMyPasswordlessResponse {
    key: WebAuthNKey | undefined;
    details: ObjectDetails | undefined;
}
/** This is an empty request */
export interface AddMyPasswordlessLinkRequest {
}
export interface AddMyPasswordlessLinkResponse {
    details: ObjectDetails | undefined;
    link: string;
    expiration: Duration | undefined;
}
/** This is an empty request */
export interface SendMyPasswordlessLinkRequest {
}
export interface SendMyPasswordlessLinkResponse {
    details: ObjectDetails | undefined;
}
export interface VerifyMyPasswordlessRequest {
    verification: WebAuthNVerification | undefined;
}
export interface VerifyMyPasswordlessResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyPasswordlessRequest {
    tokenId: string;
}
export interface RemoveMyPasswordlessResponse {
    details: ObjectDetails | undefined;
}
export interface ListMyUserGrantsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
}
export interface ListMyUserGrantsResponse {
    details: ListDetails | undefined;
    result: UserGrant[];
}
export interface UserGrant {
    orgId: string;
    projectId: string;
    userId: string;
    /** Deprecated: user role_keys */
    roles: string[];
    orgName: string;
    grantId: string;
    details: ObjectDetails | undefined;
    orgDomain: string;
    projectName: string;
    projectGrantId: string;
    roleKeys: string[];
    userType: Type;
}
export interface ListMyProjectOrgsRequest {
    /** list limitations and ordering */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: OrgQuery[];
}
export interface ListMyProjectOrgsResponse {
    details: ListDetails | undefined;
    result: Org[];
}
/** This is an empty request */
export interface ListMyZitadelPermissionsRequest {
}
export interface ListMyZitadelPermissionsResponse {
    result: string[];
}
/** This is an empty request */
export interface ListMyProjectPermissionsRequest {
}
export interface ListMyProjectPermissionsResponse {
    result: string[];
}
export interface ListMyMembershipsRequest {
    /** the field the result is sorted */
    query: ListQuery | undefined;
    /** criteria the client is looking for */
    queries: MembershipQuery[];
}
export interface ListMyMembershipsResponse {
    details: ListDetails | undefined;
    result: Membership[];
}
/** This is an empty request */
export interface GetMyLabelPolicyRequest {
}
export interface GetMyLabelPolicyResponse {
    policy: LabelPolicy | undefined;
}
/** This is an empty request */
export interface GetMyPrivacyPolicyRequest {
}
export interface GetMyPrivacyPolicyResponse {
    policy: PrivacyPolicy | undefined;
}
/** This is an empty request */
export interface GetMyLoginPolicyRequest {
}
export interface GetMyLoginPolicyResponse {
    policy: LoginPolicy | undefined;
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
export declare const GetSupportedLanguagesRequest: {
    encode(_: GetSupportedLanguagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSupportedLanguagesRequest;
    fromJSON(_: any): GetSupportedLanguagesRequest;
    toJSON(_: GetSupportedLanguagesRequest): unknown;
    create(base?: DeepPartial<GetSupportedLanguagesRequest>): GetSupportedLanguagesRequest;
    fromPartial(_: DeepPartial<GetSupportedLanguagesRequest>): GetSupportedLanguagesRequest;
};
export declare const GetSupportedLanguagesResponse: {
    encode(message: GetSupportedLanguagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSupportedLanguagesResponse;
    fromJSON(object: any): GetSupportedLanguagesResponse;
    toJSON(message: GetSupportedLanguagesResponse): unknown;
    create(base?: DeepPartial<GetSupportedLanguagesResponse>): GetSupportedLanguagesResponse;
    fromPartial(object: DeepPartial<GetSupportedLanguagesResponse>): GetSupportedLanguagesResponse;
};
export declare const GetMyUserRequest: {
    encode(_: GetMyUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyUserRequest;
    fromJSON(_: any): GetMyUserRequest;
    toJSON(_: GetMyUserRequest): unknown;
    create(base?: DeepPartial<GetMyUserRequest>): GetMyUserRequest;
    fromPartial(_: DeepPartial<GetMyUserRequest>): GetMyUserRequest;
};
export declare const GetMyUserResponse: {
    encode(message: GetMyUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyUserResponse;
    fromJSON(object: any): GetMyUserResponse;
    toJSON(message: GetMyUserResponse): unknown;
    create(base?: DeepPartial<GetMyUserResponse>): GetMyUserResponse;
    fromPartial(object: DeepPartial<GetMyUserResponse>): GetMyUserResponse;
};
export declare const RemoveMyUserRequest: {
    encode(_: RemoveMyUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyUserRequest;
    fromJSON(_: any): RemoveMyUserRequest;
    toJSON(_: RemoveMyUserRequest): unknown;
    create(base?: DeepPartial<RemoveMyUserRequest>): RemoveMyUserRequest;
    fromPartial(_: DeepPartial<RemoveMyUserRequest>): RemoveMyUserRequest;
};
export declare const RemoveMyUserResponse: {
    encode(message: RemoveMyUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyUserResponse;
    fromJSON(object: any): RemoveMyUserResponse;
    toJSON(message: RemoveMyUserResponse): unknown;
    create(base?: DeepPartial<RemoveMyUserResponse>): RemoveMyUserResponse;
    fromPartial(object: DeepPartial<RemoveMyUserResponse>): RemoveMyUserResponse;
};
export declare const ListMyUserChangesRequest: {
    encode(message: ListMyUserChangesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserChangesRequest;
    fromJSON(object: any): ListMyUserChangesRequest;
    toJSON(message: ListMyUserChangesRequest): unknown;
    create(base?: DeepPartial<ListMyUserChangesRequest>): ListMyUserChangesRequest;
    fromPartial(object: DeepPartial<ListMyUserChangesRequest>): ListMyUserChangesRequest;
};
export declare const ListMyUserChangesResponse: {
    encode(message: ListMyUserChangesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserChangesResponse;
    fromJSON(object: any): ListMyUserChangesResponse;
    toJSON(message: ListMyUserChangesResponse): unknown;
    create(base?: DeepPartial<ListMyUserChangesResponse>): ListMyUserChangesResponse;
    fromPartial(object: DeepPartial<ListMyUserChangesResponse>): ListMyUserChangesResponse;
};
export declare const ListMyUserSessionsRequest: {
    encode(_: ListMyUserSessionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserSessionsRequest;
    fromJSON(_: any): ListMyUserSessionsRequest;
    toJSON(_: ListMyUserSessionsRequest): unknown;
    create(base?: DeepPartial<ListMyUserSessionsRequest>): ListMyUserSessionsRequest;
    fromPartial(_: DeepPartial<ListMyUserSessionsRequest>): ListMyUserSessionsRequest;
};
export declare const ListMyUserSessionsResponse: {
    encode(message: ListMyUserSessionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserSessionsResponse;
    fromJSON(object: any): ListMyUserSessionsResponse;
    toJSON(message: ListMyUserSessionsResponse): unknown;
    create(base?: DeepPartial<ListMyUserSessionsResponse>): ListMyUserSessionsResponse;
    fromPartial(object: DeepPartial<ListMyUserSessionsResponse>): ListMyUserSessionsResponse;
};
export declare const ListMyMetadataRequest: {
    encode(message: ListMyMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyMetadataRequest;
    fromJSON(object: any): ListMyMetadataRequest;
    toJSON(message: ListMyMetadataRequest): unknown;
    create(base?: DeepPartial<ListMyMetadataRequest>): ListMyMetadataRequest;
    fromPartial(object: DeepPartial<ListMyMetadataRequest>): ListMyMetadataRequest;
};
export declare const ListMyMetadataResponse: {
    encode(message: ListMyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyMetadataResponse;
    fromJSON(object: any): ListMyMetadataResponse;
    toJSON(message: ListMyMetadataResponse): unknown;
    create(base?: DeepPartial<ListMyMetadataResponse>): ListMyMetadataResponse;
    fromPartial(object: DeepPartial<ListMyMetadataResponse>): ListMyMetadataResponse;
};
export declare const GetMyMetadataRequest: {
    encode(message: GetMyMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyMetadataRequest;
    fromJSON(object: any): GetMyMetadataRequest;
    toJSON(message: GetMyMetadataRequest): unknown;
    create(base?: DeepPartial<GetMyMetadataRequest>): GetMyMetadataRequest;
    fromPartial(object: DeepPartial<GetMyMetadataRequest>): GetMyMetadataRequest;
};
export declare const GetMyMetadataResponse: {
    encode(message: GetMyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyMetadataResponse;
    fromJSON(object: any): GetMyMetadataResponse;
    toJSON(message: GetMyMetadataResponse): unknown;
    create(base?: DeepPartial<GetMyMetadataResponse>): GetMyMetadataResponse;
    fromPartial(object: DeepPartial<GetMyMetadataResponse>): GetMyMetadataResponse;
};
export declare const SetMyMetadataRequest: {
    encode(message: SetMyMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMyMetadataRequest;
    fromJSON(object: any): SetMyMetadataRequest;
    toJSON(message: SetMyMetadataRequest): unknown;
    create(base?: DeepPartial<SetMyMetadataRequest>): SetMyMetadataRequest;
    fromPartial(object: DeepPartial<SetMyMetadataRequest>): SetMyMetadataRequest;
};
export declare const SetMyMetadataResponse: {
    encode(message: SetMyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMyMetadataResponse;
    fromJSON(object: any): SetMyMetadataResponse;
    toJSON(message: SetMyMetadataResponse): unknown;
    create(base?: DeepPartial<SetMyMetadataResponse>): SetMyMetadataResponse;
    fromPartial(object: DeepPartial<SetMyMetadataResponse>): SetMyMetadataResponse;
};
export declare const BulkSetMyMetadataRequest: {
    encode(message: BulkSetMyMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetMyMetadataRequest;
    fromJSON(object: any): BulkSetMyMetadataRequest;
    toJSON(message: BulkSetMyMetadataRequest): unknown;
    create(base?: DeepPartial<BulkSetMyMetadataRequest>): BulkSetMyMetadataRequest;
    fromPartial(object: DeepPartial<BulkSetMyMetadataRequest>): BulkSetMyMetadataRequest;
};
export declare const BulkSetMyMetadataRequest_Metadata: {
    encode(message: BulkSetMyMetadataRequest_Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetMyMetadataRequest_Metadata;
    fromJSON(object: any): BulkSetMyMetadataRequest_Metadata;
    toJSON(message: BulkSetMyMetadataRequest_Metadata): unknown;
    create(base?: DeepPartial<BulkSetMyMetadataRequest_Metadata>): BulkSetMyMetadataRequest_Metadata;
    fromPartial(object: DeepPartial<BulkSetMyMetadataRequest_Metadata>): BulkSetMyMetadataRequest_Metadata;
};
export declare const BulkSetMyMetadataResponse: {
    encode(message: BulkSetMyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkSetMyMetadataResponse;
    fromJSON(object: any): BulkSetMyMetadataResponse;
    toJSON(message: BulkSetMyMetadataResponse): unknown;
    create(base?: DeepPartial<BulkSetMyMetadataResponse>): BulkSetMyMetadataResponse;
    fromPartial(object: DeepPartial<BulkSetMyMetadataResponse>): BulkSetMyMetadataResponse;
};
export declare const RemoveMyMetadataRequest: {
    encode(message: RemoveMyMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyMetadataRequest;
    fromJSON(object: any): RemoveMyMetadataRequest;
    toJSON(message: RemoveMyMetadataRequest): unknown;
    create(base?: DeepPartial<RemoveMyMetadataRequest>): RemoveMyMetadataRequest;
    fromPartial(object: DeepPartial<RemoveMyMetadataRequest>): RemoveMyMetadataRequest;
};
export declare const RemoveMyMetadataResponse: {
    encode(message: RemoveMyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyMetadataResponse;
    fromJSON(object: any): RemoveMyMetadataResponse;
    toJSON(message: RemoveMyMetadataResponse): unknown;
    create(base?: DeepPartial<RemoveMyMetadataResponse>): RemoveMyMetadataResponse;
    fromPartial(object: DeepPartial<RemoveMyMetadataResponse>): RemoveMyMetadataResponse;
};
export declare const BulkRemoveMyMetadataRequest: {
    encode(message: BulkRemoveMyMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveMyMetadataRequest;
    fromJSON(object: any): BulkRemoveMyMetadataRequest;
    toJSON(message: BulkRemoveMyMetadataRequest): unknown;
    create(base?: DeepPartial<BulkRemoveMyMetadataRequest>): BulkRemoveMyMetadataRequest;
    fromPartial(object: DeepPartial<BulkRemoveMyMetadataRequest>): BulkRemoveMyMetadataRequest;
};
export declare const BulkRemoveMyMetadataResponse: {
    encode(message: BulkRemoveMyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BulkRemoveMyMetadataResponse;
    fromJSON(object: any): BulkRemoveMyMetadataResponse;
    toJSON(message: BulkRemoveMyMetadataResponse): unknown;
    create(base?: DeepPartial<BulkRemoveMyMetadataResponse>): BulkRemoveMyMetadataResponse;
    fromPartial(object: DeepPartial<BulkRemoveMyMetadataResponse>): BulkRemoveMyMetadataResponse;
};
export declare const ListMyRefreshTokensRequest: {
    encode(_: ListMyRefreshTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyRefreshTokensRequest;
    fromJSON(_: any): ListMyRefreshTokensRequest;
    toJSON(_: ListMyRefreshTokensRequest): unknown;
    create(base?: DeepPartial<ListMyRefreshTokensRequest>): ListMyRefreshTokensRequest;
    fromPartial(_: DeepPartial<ListMyRefreshTokensRequest>): ListMyRefreshTokensRequest;
};
export declare const ListMyRefreshTokensResponse: {
    encode(message: ListMyRefreshTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyRefreshTokensResponse;
    fromJSON(object: any): ListMyRefreshTokensResponse;
    toJSON(message: ListMyRefreshTokensResponse): unknown;
    create(base?: DeepPartial<ListMyRefreshTokensResponse>): ListMyRefreshTokensResponse;
    fromPartial(object: DeepPartial<ListMyRefreshTokensResponse>): ListMyRefreshTokensResponse;
};
export declare const RevokeMyRefreshTokenRequest: {
    encode(message: RevokeMyRefreshTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokeMyRefreshTokenRequest;
    fromJSON(object: any): RevokeMyRefreshTokenRequest;
    toJSON(message: RevokeMyRefreshTokenRequest): unknown;
    create(base?: DeepPartial<RevokeMyRefreshTokenRequest>): RevokeMyRefreshTokenRequest;
    fromPartial(object: DeepPartial<RevokeMyRefreshTokenRequest>): RevokeMyRefreshTokenRequest;
};
export declare const RevokeMyRefreshTokenResponse: {
    encode(message: RevokeMyRefreshTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokeMyRefreshTokenResponse;
    fromJSON(object: any): RevokeMyRefreshTokenResponse;
    toJSON(message: RevokeMyRefreshTokenResponse): unknown;
    create(base?: DeepPartial<RevokeMyRefreshTokenResponse>): RevokeMyRefreshTokenResponse;
    fromPartial(object: DeepPartial<RevokeMyRefreshTokenResponse>): RevokeMyRefreshTokenResponse;
};
export declare const RevokeAllMyRefreshTokensRequest: {
    encode(_: RevokeAllMyRefreshTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokeAllMyRefreshTokensRequest;
    fromJSON(_: any): RevokeAllMyRefreshTokensRequest;
    toJSON(_: RevokeAllMyRefreshTokensRequest): unknown;
    create(base?: DeepPartial<RevokeAllMyRefreshTokensRequest>): RevokeAllMyRefreshTokensRequest;
    fromPartial(_: DeepPartial<RevokeAllMyRefreshTokensRequest>): RevokeAllMyRefreshTokensRequest;
};
export declare const RevokeAllMyRefreshTokensResponse: {
    encode(_: RevokeAllMyRefreshTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevokeAllMyRefreshTokensResponse;
    fromJSON(_: any): RevokeAllMyRefreshTokensResponse;
    toJSON(_: RevokeAllMyRefreshTokensResponse): unknown;
    create(base?: DeepPartial<RevokeAllMyRefreshTokensResponse>): RevokeAllMyRefreshTokensResponse;
    fromPartial(_: DeepPartial<RevokeAllMyRefreshTokensResponse>): RevokeAllMyRefreshTokensResponse;
};
export declare const UpdateMyUserNameRequest: {
    encode(message: UpdateMyUserNameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyUserNameRequest;
    fromJSON(object: any): UpdateMyUserNameRequest;
    toJSON(message: UpdateMyUserNameRequest): unknown;
    create(base?: DeepPartial<UpdateMyUserNameRequest>): UpdateMyUserNameRequest;
    fromPartial(object: DeepPartial<UpdateMyUserNameRequest>): UpdateMyUserNameRequest;
};
export declare const UpdateMyUserNameResponse: {
    encode(message: UpdateMyUserNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyUserNameResponse;
    fromJSON(object: any): UpdateMyUserNameResponse;
    toJSON(message: UpdateMyUserNameResponse): unknown;
    create(base?: DeepPartial<UpdateMyUserNameResponse>): UpdateMyUserNameResponse;
    fromPartial(object: DeepPartial<UpdateMyUserNameResponse>): UpdateMyUserNameResponse;
};
export declare const GetMyPasswordComplexityPolicyRequest: {
    encode(_: GetMyPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPasswordComplexityPolicyRequest;
    fromJSON(_: any): GetMyPasswordComplexityPolicyRequest;
    toJSON(_: GetMyPasswordComplexityPolicyRequest): unknown;
    create(base?: DeepPartial<GetMyPasswordComplexityPolicyRequest>): GetMyPasswordComplexityPolicyRequest;
    fromPartial(_: DeepPartial<GetMyPasswordComplexityPolicyRequest>): GetMyPasswordComplexityPolicyRequest;
};
export declare const GetMyPasswordComplexityPolicyResponse: {
    encode(message: GetMyPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPasswordComplexityPolicyResponse;
    fromJSON(object: any): GetMyPasswordComplexityPolicyResponse;
    toJSON(message: GetMyPasswordComplexityPolicyResponse): unknown;
    create(base?: DeepPartial<GetMyPasswordComplexityPolicyResponse>): GetMyPasswordComplexityPolicyResponse;
    fromPartial(object: DeepPartial<GetMyPasswordComplexityPolicyResponse>): GetMyPasswordComplexityPolicyResponse;
};
export declare const UpdateMyPasswordRequest: {
    encode(message: UpdateMyPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyPasswordRequest;
    fromJSON(object: any): UpdateMyPasswordRequest;
    toJSON(message: UpdateMyPasswordRequest): unknown;
    create(base?: DeepPartial<UpdateMyPasswordRequest>): UpdateMyPasswordRequest;
    fromPartial(object: DeepPartial<UpdateMyPasswordRequest>): UpdateMyPasswordRequest;
};
export declare const UpdateMyPasswordResponse: {
    encode(message: UpdateMyPasswordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyPasswordResponse;
    fromJSON(object: any): UpdateMyPasswordResponse;
    toJSON(message: UpdateMyPasswordResponse): unknown;
    create(base?: DeepPartial<UpdateMyPasswordResponse>): UpdateMyPasswordResponse;
    fromPartial(object: DeepPartial<UpdateMyPasswordResponse>): UpdateMyPasswordResponse;
};
export declare const GetMyProfileRequest: {
    encode(_: GetMyProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyProfileRequest;
    fromJSON(_: any): GetMyProfileRequest;
    toJSON(_: GetMyProfileRequest): unknown;
    create(base?: DeepPartial<GetMyProfileRequest>): GetMyProfileRequest;
    fromPartial(_: DeepPartial<GetMyProfileRequest>): GetMyProfileRequest;
};
export declare const GetMyProfileResponse: {
    encode(message: GetMyProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyProfileResponse;
    fromJSON(object: any): GetMyProfileResponse;
    toJSON(message: GetMyProfileResponse): unknown;
    create(base?: DeepPartial<GetMyProfileResponse>): GetMyProfileResponse;
    fromPartial(object: DeepPartial<GetMyProfileResponse>): GetMyProfileResponse;
};
export declare const UpdateMyProfileRequest: {
    encode(message: UpdateMyProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyProfileRequest;
    fromJSON(object: any): UpdateMyProfileRequest;
    toJSON(message: UpdateMyProfileRequest): unknown;
    create(base?: DeepPartial<UpdateMyProfileRequest>): UpdateMyProfileRequest;
    fromPartial(object: DeepPartial<UpdateMyProfileRequest>): UpdateMyProfileRequest;
};
export declare const UpdateMyProfileResponse: {
    encode(message: UpdateMyProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyProfileResponse;
    fromJSON(object: any): UpdateMyProfileResponse;
    toJSON(message: UpdateMyProfileResponse): unknown;
    create(base?: DeepPartial<UpdateMyProfileResponse>): UpdateMyProfileResponse;
    fromPartial(object: DeepPartial<UpdateMyProfileResponse>): UpdateMyProfileResponse;
};
export declare const GetMyEmailRequest: {
    encode(_: GetMyEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyEmailRequest;
    fromJSON(_: any): GetMyEmailRequest;
    toJSON(_: GetMyEmailRequest): unknown;
    create(base?: DeepPartial<GetMyEmailRequest>): GetMyEmailRequest;
    fromPartial(_: DeepPartial<GetMyEmailRequest>): GetMyEmailRequest;
};
export declare const GetMyEmailResponse: {
    encode(message: GetMyEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyEmailResponse;
    fromJSON(object: any): GetMyEmailResponse;
    toJSON(message: GetMyEmailResponse): unknown;
    create(base?: DeepPartial<GetMyEmailResponse>): GetMyEmailResponse;
    fromPartial(object: DeepPartial<GetMyEmailResponse>): GetMyEmailResponse;
};
export declare const SetMyEmailRequest: {
    encode(message: SetMyEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMyEmailRequest;
    fromJSON(object: any): SetMyEmailRequest;
    toJSON(message: SetMyEmailRequest): unknown;
    create(base?: DeepPartial<SetMyEmailRequest>): SetMyEmailRequest;
    fromPartial(object: DeepPartial<SetMyEmailRequest>): SetMyEmailRequest;
};
export declare const SetMyEmailResponse: {
    encode(message: SetMyEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMyEmailResponse;
    fromJSON(object: any): SetMyEmailResponse;
    toJSON(message: SetMyEmailResponse): unknown;
    create(base?: DeepPartial<SetMyEmailResponse>): SetMyEmailResponse;
    fromPartial(object: DeepPartial<SetMyEmailResponse>): SetMyEmailResponse;
};
export declare const VerifyMyEmailRequest: {
    encode(message: VerifyMyEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyEmailRequest;
    fromJSON(object: any): VerifyMyEmailRequest;
    toJSON(message: VerifyMyEmailRequest): unknown;
    create(base?: DeepPartial<VerifyMyEmailRequest>): VerifyMyEmailRequest;
    fromPartial(object: DeepPartial<VerifyMyEmailRequest>): VerifyMyEmailRequest;
};
export declare const VerifyMyEmailResponse: {
    encode(message: VerifyMyEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyEmailResponse;
    fromJSON(object: any): VerifyMyEmailResponse;
    toJSON(message: VerifyMyEmailResponse): unknown;
    create(base?: DeepPartial<VerifyMyEmailResponse>): VerifyMyEmailResponse;
    fromPartial(object: DeepPartial<VerifyMyEmailResponse>): VerifyMyEmailResponse;
};
export declare const ResendMyEmailVerificationRequest: {
    encode(_: ResendMyEmailVerificationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendMyEmailVerificationRequest;
    fromJSON(_: any): ResendMyEmailVerificationRequest;
    toJSON(_: ResendMyEmailVerificationRequest): unknown;
    create(base?: DeepPartial<ResendMyEmailVerificationRequest>): ResendMyEmailVerificationRequest;
    fromPartial(_: DeepPartial<ResendMyEmailVerificationRequest>): ResendMyEmailVerificationRequest;
};
export declare const ResendMyEmailVerificationResponse: {
    encode(message: ResendMyEmailVerificationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendMyEmailVerificationResponse;
    fromJSON(object: any): ResendMyEmailVerificationResponse;
    toJSON(message: ResendMyEmailVerificationResponse): unknown;
    create(base?: DeepPartial<ResendMyEmailVerificationResponse>): ResendMyEmailVerificationResponse;
    fromPartial(object: DeepPartial<ResendMyEmailVerificationResponse>): ResendMyEmailVerificationResponse;
};
export declare const GetMyPhoneRequest: {
    encode(_: GetMyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPhoneRequest;
    fromJSON(_: any): GetMyPhoneRequest;
    toJSON(_: GetMyPhoneRequest): unknown;
    create(base?: DeepPartial<GetMyPhoneRequest>): GetMyPhoneRequest;
    fromPartial(_: DeepPartial<GetMyPhoneRequest>): GetMyPhoneRequest;
};
export declare const GetMyPhoneResponse: {
    encode(message: GetMyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPhoneResponse;
    fromJSON(object: any): GetMyPhoneResponse;
    toJSON(message: GetMyPhoneResponse): unknown;
    create(base?: DeepPartial<GetMyPhoneResponse>): GetMyPhoneResponse;
    fromPartial(object: DeepPartial<GetMyPhoneResponse>): GetMyPhoneResponse;
};
export declare const SetMyPhoneRequest: {
    encode(message: SetMyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMyPhoneRequest;
    fromJSON(object: any): SetMyPhoneRequest;
    toJSON(message: SetMyPhoneRequest): unknown;
    create(base?: DeepPartial<SetMyPhoneRequest>): SetMyPhoneRequest;
    fromPartial(object: DeepPartial<SetMyPhoneRequest>): SetMyPhoneRequest;
};
export declare const SetMyPhoneResponse: {
    encode(message: SetMyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMyPhoneResponse;
    fromJSON(object: any): SetMyPhoneResponse;
    toJSON(message: SetMyPhoneResponse): unknown;
    create(base?: DeepPartial<SetMyPhoneResponse>): SetMyPhoneResponse;
    fromPartial(object: DeepPartial<SetMyPhoneResponse>): SetMyPhoneResponse;
};
export declare const VerifyMyPhoneRequest: {
    encode(message: VerifyMyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyPhoneRequest;
    fromJSON(object: any): VerifyMyPhoneRequest;
    toJSON(message: VerifyMyPhoneRequest): unknown;
    create(base?: DeepPartial<VerifyMyPhoneRequest>): VerifyMyPhoneRequest;
    fromPartial(object: DeepPartial<VerifyMyPhoneRequest>): VerifyMyPhoneRequest;
};
export declare const VerifyMyPhoneResponse: {
    encode(message: VerifyMyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyPhoneResponse;
    fromJSON(object: any): VerifyMyPhoneResponse;
    toJSON(message: VerifyMyPhoneResponse): unknown;
    create(base?: DeepPartial<VerifyMyPhoneResponse>): VerifyMyPhoneResponse;
    fromPartial(object: DeepPartial<VerifyMyPhoneResponse>): VerifyMyPhoneResponse;
};
export declare const ResendMyPhoneVerificationRequest: {
    encode(_: ResendMyPhoneVerificationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendMyPhoneVerificationRequest;
    fromJSON(_: any): ResendMyPhoneVerificationRequest;
    toJSON(_: ResendMyPhoneVerificationRequest): unknown;
    create(base?: DeepPartial<ResendMyPhoneVerificationRequest>): ResendMyPhoneVerificationRequest;
    fromPartial(_: DeepPartial<ResendMyPhoneVerificationRequest>): ResendMyPhoneVerificationRequest;
};
export declare const ResendMyPhoneVerificationResponse: {
    encode(message: ResendMyPhoneVerificationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResendMyPhoneVerificationResponse;
    fromJSON(object: any): ResendMyPhoneVerificationResponse;
    toJSON(message: ResendMyPhoneVerificationResponse): unknown;
    create(base?: DeepPartial<ResendMyPhoneVerificationResponse>): ResendMyPhoneVerificationResponse;
    fromPartial(object: DeepPartial<ResendMyPhoneVerificationResponse>): ResendMyPhoneVerificationResponse;
};
export declare const RemoveMyPhoneRequest: {
    encode(_: RemoveMyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyPhoneRequest;
    fromJSON(_: any): RemoveMyPhoneRequest;
    toJSON(_: RemoveMyPhoneRequest): unknown;
    create(base?: DeepPartial<RemoveMyPhoneRequest>): RemoveMyPhoneRequest;
    fromPartial(_: DeepPartial<RemoveMyPhoneRequest>): RemoveMyPhoneRequest;
};
export declare const RemoveMyPhoneResponse: {
    encode(message: RemoveMyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyPhoneResponse;
    fromJSON(object: any): RemoveMyPhoneResponse;
    toJSON(message: RemoveMyPhoneResponse): unknown;
    create(base?: DeepPartial<RemoveMyPhoneResponse>): RemoveMyPhoneResponse;
    fromPartial(object: DeepPartial<RemoveMyPhoneResponse>): RemoveMyPhoneResponse;
};
export declare const RemoveMyAvatarRequest: {
    encode(_: RemoveMyAvatarRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAvatarRequest;
    fromJSON(_: any): RemoveMyAvatarRequest;
    toJSON(_: RemoveMyAvatarRequest): unknown;
    create(base?: DeepPartial<RemoveMyAvatarRequest>): RemoveMyAvatarRequest;
    fromPartial(_: DeepPartial<RemoveMyAvatarRequest>): RemoveMyAvatarRequest;
};
export declare const RemoveMyAvatarResponse: {
    encode(message: RemoveMyAvatarResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAvatarResponse;
    fromJSON(object: any): RemoveMyAvatarResponse;
    toJSON(message: RemoveMyAvatarResponse): unknown;
    create(base?: DeepPartial<RemoveMyAvatarResponse>): RemoveMyAvatarResponse;
    fromPartial(object: DeepPartial<RemoveMyAvatarResponse>): RemoveMyAvatarResponse;
};
export declare const ListMyLinkedIDPsRequest: {
    encode(message: ListMyLinkedIDPsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyLinkedIDPsRequest;
    fromJSON(object: any): ListMyLinkedIDPsRequest;
    toJSON(message: ListMyLinkedIDPsRequest): unknown;
    create(base?: DeepPartial<ListMyLinkedIDPsRequest>): ListMyLinkedIDPsRequest;
    fromPartial(object: DeepPartial<ListMyLinkedIDPsRequest>): ListMyLinkedIDPsRequest;
};
export declare const ListMyLinkedIDPsResponse: {
    encode(message: ListMyLinkedIDPsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyLinkedIDPsResponse;
    fromJSON(object: any): ListMyLinkedIDPsResponse;
    toJSON(message: ListMyLinkedIDPsResponse): unknown;
    create(base?: DeepPartial<ListMyLinkedIDPsResponse>): ListMyLinkedIDPsResponse;
    fromPartial(object: DeepPartial<ListMyLinkedIDPsResponse>): ListMyLinkedIDPsResponse;
};
export declare const RemoveMyLinkedIDPRequest: {
    encode(message: RemoveMyLinkedIDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyLinkedIDPRequest;
    fromJSON(object: any): RemoveMyLinkedIDPRequest;
    toJSON(message: RemoveMyLinkedIDPRequest): unknown;
    create(base?: DeepPartial<RemoveMyLinkedIDPRequest>): RemoveMyLinkedIDPRequest;
    fromPartial(object: DeepPartial<RemoveMyLinkedIDPRequest>): RemoveMyLinkedIDPRequest;
};
export declare const RemoveMyLinkedIDPResponse: {
    encode(message: RemoveMyLinkedIDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyLinkedIDPResponse;
    fromJSON(object: any): RemoveMyLinkedIDPResponse;
    toJSON(message: RemoveMyLinkedIDPResponse): unknown;
    create(base?: DeepPartial<RemoveMyLinkedIDPResponse>): RemoveMyLinkedIDPResponse;
    fromPartial(object: DeepPartial<RemoveMyLinkedIDPResponse>): RemoveMyLinkedIDPResponse;
};
export declare const ListMyAuthFactorsRequest: {
    encode(_: ListMyAuthFactorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyAuthFactorsRequest;
    fromJSON(_: any): ListMyAuthFactorsRequest;
    toJSON(_: ListMyAuthFactorsRequest): unknown;
    create(base?: DeepPartial<ListMyAuthFactorsRequest>): ListMyAuthFactorsRequest;
    fromPartial(_: DeepPartial<ListMyAuthFactorsRequest>): ListMyAuthFactorsRequest;
};
export declare const ListMyAuthFactorsResponse: {
    encode(message: ListMyAuthFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyAuthFactorsResponse;
    fromJSON(object: any): ListMyAuthFactorsResponse;
    toJSON(message: ListMyAuthFactorsResponse): unknown;
    create(base?: DeepPartial<ListMyAuthFactorsResponse>): ListMyAuthFactorsResponse;
    fromPartial(object: DeepPartial<ListMyAuthFactorsResponse>): ListMyAuthFactorsResponse;
};
export declare const AddMyAuthFactorU2FRequest: {
    encode(_: AddMyAuthFactorU2FRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorU2FRequest;
    fromJSON(_: any): AddMyAuthFactorU2FRequest;
    toJSON(_: AddMyAuthFactorU2FRequest): unknown;
    create(base?: DeepPartial<AddMyAuthFactorU2FRequest>): AddMyAuthFactorU2FRequest;
    fromPartial(_: DeepPartial<AddMyAuthFactorU2FRequest>): AddMyAuthFactorU2FRequest;
};
export declare const AddMyAuthFactorU2FResponse: {
    encode(message: AddMyAuthFactorU2FResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorU2FResponse;
    fromJSON(object: any): AddMyAuthFactorU2FResponse;
    toJSON(message: AddMyAuthFactorU2FResponse): unknown;
    create(base?: DeepPartial<AddMyAuthFactorU2FResponse>): AddMyAuthFactorU2FResponse;
    fromPartial(object: DeepPartial<AddMyAuthFactorU2FResponse>): AddMyAuthFactorU2FResponse;
};
export declare const AddMyAuthFactorOTPRequest: {
    encode(_: AddMyAuthFactorOTPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPRequest;
    fromJSON(_: any): AddMyAuthFactorOTPRequest;
    toJSON(_: AddMyAuthFactorOTPRequest): unknown;
    create(base?: DeepPartial<AddMyAuthFactorOTPRequest>): AddMyAuthFactorOTPRequest;
    fromPartial(_: DeepPartial<AddMyAuthFactorOTPRequest>): AddMyAuthFactorOTPRequest;
};
export declare const AddMyAuthFactorOTPResponse: {
    encode(message: AddMyAuthFactorOTPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPResponse;
    fromJSON(object: any): AddMyAuthFactorOTPResponse;
    toJSON(message: AddMyAuthFactorOTPResponse): unknown;
    create(base?: DeepPartial<AddMyAuthFactorOTPResponse>): AddMyAuthFactorOTPResponse;
    fromPartial(object: DeepPartial<AddMyAuthFactorOTPResponse>): AddMyAuthFactorOTPResponse;
};
export declare const VerifyMyAuthFactorOTPRequest: {
    encode(message: VerifyMyAuthFactorOTPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyAuthFactorOTPRequest;
    fromJSON(object: any): VerifyMyAuthFactorOTPRequest;
    toJSON(message: VerifyMyAuthFactorOTPRequest): unknown;
    create(base?: DeepPartial<VerifyMyAuthFactorOTPRequest>): VerifyMyAuthFactorOTPRequest;
    fromPartial(object: DeepPartial<VerifyMyAuthFactorOTPRequest>): VerifyMyAuthFactorOTPRequest;
};
export declare const VerifyMyAuthFactorOTPResponse: {
    encode(message: VerifyMyAuthFactorOTPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyAuthFactorOTPResponse;
    fromJSON(object: any): VerifyMyAuthFactorOTPResponse;
    toJSON(message: VerifyMyAuthFactorOTPResponse): unknown;
    create(base?: DeepPartial<VerifyMyAuthFactorOTPResponse>): VerifyMyAuthFactorOTPResponse;
    fromPartial(object: DeepPartial<VerifyMyAuthFactorOTPResponse>): VerifyMyAuthFactorOTPResponse;
};
export declare const VerifyMyAuthFactorU2FRequest: {
    encode(message: VerifyMyAuthFactorU2FRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyAuthFactorU2FRequest;
    fromJSON(object: any): VerifyMyAuthFactorU2FRequest;
    toJSON(message: VerifyMyAuthFactorU2FRequest): unknown;
    create(base?: DeepPartial<VerifyMyAuthFactorU2FRequest>): VerifyMyAuthFactorU2FRequest;
    fromPartial(object: DeepPartial<VerifyMyAuthFactorU2FRequest>): VerifyMyAuthFactorU2FRequest;
};
export declare const VerifyMyAuthFactorU2FResponse: {
    encode(message: VerifyMyAuthFactorU2FResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyAuthFactorU2FResponse;
    fromJSON(object: any): VerifyMyAuthFactorU2FResponse;
    toJSON(message: VerifyMyAuthFactorU2FResponse): unknown;
    create(base?: DeepPartial<VerifyMyAuthFactorU2FResponse>): VerifyMyAuthFactorU2FResponse;
    fromPartial(object: DeepPartial<VerifyMyAuthFactorU2FResponse>): VerifyMyAuthFactorU2FResponse;
};
export declare const RemoveMyAuthFactorOTPRequest: {
    encode(_: RemoveMyAuthFactorOTPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPRequest;
    fromJSON(_: any): RemoveMyAuthFactorOTPRequest;
    toJSON(_: RemoveMyAuthFactorOTPRequest): unknown;
    create(base?: DeepPartial<RemoveMyAuthFactorOTPRequest>): RemoveMyAuthFactorOTPRequest;
    fromPartial(_: DeepPartial<RemoveMyAuthFactorOTPRequest>): RemoveMyAuthFactorOTPRequest;
};
export declare const RemoveMyAuthFactorOTPResponse: {
    encode(message: RemoveMyAuthFactorOTPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPResponse;
    fromJSON(object: any): RemoveMyAuthFactorOTPResponse;
    toJSON(message: RemoveMyAuthFactorOTPResponse): unknown;
    create(base?: DeepPartial<RemoveMyAuthFactorOTPResponse>): RemoveMyAuthFactorOTPResponse;
    fromPartial(object: DeepPartial<RemoveMyAuthFactorOTPResponse>): RemoveMyAuthFactorOTPResponse;
};
export declare const AddMyAuthFactorOTPSMSRequest: {
    encode(_: AddMyAuthFactorOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPSMSRequest;
    fromJSON(_: any): AddMyAuthFactorOTPSMSRequest;
    toJSON(_: AddMyAuthFactorOTPSMSRequest): unknown;
    create(base?: DeepPartial<AddMyAuthFactorOTPSMSRequest>): AddMyAuthFactorOTPSMSRequest;
    fromPartial(_: DeepPartial<AddMyAuthFactorOTPSMSRequest>): AddMyAuthFactorOTPSMSRequest;
};
export declare const AddMyAuthFactorOTPSMSResponse: {
    encode(message: AddMyAuthFactorOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPSMSResponse;
    fromJSON(object: any): AddMyAuthFactorOTPSMSResponse;
    toJSON(message: AddMyAuthFactorOTPSMSResponse): unknown;
    create(base?: DeepPartial<AddMyAuthFactorOTPSMSResponse>): AddMyAuthFactorOTPSMSResponse;
    fromPartial(object: DeepPartial<AddMyAuthFactorOTPSMSResponse>): AddMyAuthFactorOTPSMSResponse;
};
export declare const RemoveMyAuthFactorOTPSMSRequest: {
    encode(_: RemoveMyAuthFactorOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPSMSRequest;
    fromJSON(_: any): RemoveMyAuthFactorOTPSMSRequest;
    toJSON(_: RemoveMyAuthFactorOTPSMSRequest): unknown;
    create(base?: DeepPartial<RemoveMyAuthFactorOTPSMSRequest>): RemoveMyAuthFactorOTPSMSRequest;
    fromPartial(_: DeepPartial<RemoveMyAuthFactorOTPSMSRequest>): RemoveMyAuthFactorOTPSMSRequest;
};
export declare const RemoveMyAuthFactorOTPSMSResponse: {
    encode(message: RemoveMyAuthFactorOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPSMSResponse;
    fromJSON(object: any): RemoveMyAuthFactorOTPSMSResponse;
    toJSON(message: RemoveMyAuthFactorOTPSMSResponse): unknown;
    create(base?: DeepPartial<RemoveMyAuthFactorOTPSMSResponse>): RemoveMyAuthFactorOTPSMSResponse;
    fromPartial(object: DeepPartial<RemoveMyAuthFactorOTPSMSResponse>): RemoveMyAuthFactorOTPSMSResponse;
};
export declare const AddMyAuthFactorOTPEmailRequest: {
    encode(_: AddMyAuthFactorOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPEmailRequest;
    fromJSON(_: any): AddMyAuthFactorOTPEmailRequest;
    toJSON(_: AddMyAuthFactorOTPEmailRequest): unknown;
    create(base?: DeepPartial<AddMyAuthFactorOTPEmailRequest>): AddMyAuthFactorOTPEmailRequest;
    fromPartial(_: DeepPartial<AddMyAuthFactorOTPEmailRequest>): AddMyAuthFactorOTPEmailRequest;
};
export declare const AddMyAuthFactorOTPEmailResponse: {
    encode(message: AddMyAuthFactorOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPEmailResponse;
    fromJSON(object: any): AddMyAuthFactorOTPEmailResponse;
    toJSON(message: AddMyAuthFactorOTPEmailResponse): unknown;
    create(base?: DeepPartial<AddMyAuthFactorOTPEmailResponse>): AddMyAuthFactorOTPEmailResponse;
    fromPartial(object: DeepPartial<AddMyAuthFactorOTPEmailResponse>): AddMyAuthFactorOTPEmailResponse;
};
export declare const RemoveMyAuthFactorOTPEmailRequest: {
    encode(_: RemoveMyAuthFactorOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPEmailRequest;
    fromJSON(_: any): RemoveMyAuthFactorOTPEmailRequest;
    toJSON(_: RemoveMyAuthFactorOTPEmailRequest): unknown;
    create(base?: DeepPartial<RemoveMyAuthFactorOTPEmailRequest>): RemoveMyAuthFactorOTPEmailRequest;
    fromPartial(_: DeepPartial<RemoveMyAuthFactorOTPEmailRequest>): RemoveMyAuthFactorOTPEmailRequest;
};
export declare const RemoveMyAuthFactorOTPEmailResponse: {
    encode(message: RemoveMyAuthFactorOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPEmailResponse;
    fromJSON(object: any): RemoveMyAuthFactorOTPEmailResponse;
    toJSON(message: RemoveMyAuthFactorOTPEmailResponse): unknown;
    create(base?: DeepPartial<RemoveMyAuthFactorOTPEmailResponse>): RemoveMyAuthFactorOTPEmailResponse;
    fromPartial(object: DeepPartial<RemoveMyAuthFactorOTPEmailResponse>): RemoveMyAuthFactorOTPEmailResponse;
};
export declare const RemoveMyAuthFactorU2FRequest: {
    encode(message: RemoveMyAuthFactorU2FRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorU2FRequest;
    fromJSON(object: any): RemoveMyAuthFactorU2FRequest;
    toJSON(message: RemoveMyAuthFactorU2FRequest): unknown;
    create(base?: DeepPartial<RemoveMyAuthFactorU2FRequest>): RemoveMyAuthFactorU2FRequest;
    fromPartial(object: DeepPartial<RemoveMyAuthFactorU2FRequest>): RemoveMyAuthFactorU2FRequest;
};
export declare const RemoveMyAuthFactorU2FResponse: {
    encode(message: RemoveMyAuthFactorU2FResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorU2FResponse;
    fromJSON(object: any): RemoveMyAuthFactorU2FResponse;
    toJSON(message: RemoveMyAuthFactorU2FResponse): unknown;
    create(base?: DeepPartial<RemoveMyAuthFactorU2FResponse>): RemoveMyAuthFactorU2FResponse;
    fromPartial(object: DeepPartial<RemoveMyAuthFactorU2FResponse>): RemoveMyAuthFactorU2FResponse;
};
export declare const ListMyPasswordlessRequest: {
    encode(_: ListMyPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyPasswordlessRequest;
    fromJSON(_: any): ListMyPasswordlessRequest;
    toJSON(_: ListMyPasswordlessRequest): unknown;
    create(base?: DeepPartial<ListMyPasswordlessRequest>): ListMyPasswordlessRequest;
    fromPartial(_: DeepPartial<ListMyPasswordlessRequest>): ListMyPasswordlessRequest;
};
export declare const ListMyPasswordlessResponse: {
    encode(message: ListMyPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyPasswordlessResponse;
    fromJSON(object: any): ListMyPasswordlessResponse;
    toJSON(message: ListMyPasswordlessResponse): unknown;
    create(base?: DeepPartial<ListMyPasswordlessResponse>): ListMyPasswordlessResponse;
    fromPartial(object: DeepPartial<ListMyPasswordlessResponse>): ListMyPasswordlessResponse;
};
export declare const AddMyPasswordlessRequest: {
    encode(_: AddMyPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyPasswordlessRequest;
    fromJSON(_: any): AddMyPasswordlessRequest;
    toJSON(_: AddMyPasswordlessRequest): unknown;
    create(base?: DeepPartial<AddMyPasswordlessRequest>): AddMyPasswordlessRequest;
    fromPartial(_: DeepPartial<AddMyPasswordlessRequest>): AddMyPasswordlessRequest;
};
export declare const AddMyPasswordlessResponse: {
    encode(message: AddMyPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyPasswordlessResponse;
    fromJSON(object: any): AddMyPasswordlessResponse;
    toJSON(message: AddMyPasswordlessResponse): unknown;
    create(base?: DeepPartial<AddMyPasswordlessResponse>): AddMyPasswordlessResponse;
    fromPartial(object: DeepPartial<AddMyPasswordlessResponse>): AddMyPasswordlessResponse;
};
export declare const AddMyPasswordlessLinkRequest: {
    encode(_: AddMyPasswordlessLinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyPasswordlessLinkRequest;
    fromJSON(_: any): AddMyPasswordlessLinkRequest;
    toJSON(_: AddMyPasswordlessLinkRequest): unknown;
    create(base?: DeepPartial<AddMyPasswordlessLinkRequest>): AddMyPasswordlessLinkRequest;
    fromPartial(_: DeepPartial<AddMyPasswordlessLinkRequest>): AddMyPasswordlessLinkRequest;
};
export declare const AddMyPasswordlessLinkResponse: {
    encode(message: AddMyPasswordlessLinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMyPasswordlessLinkResponse;
    fromJSON(object: any): AddMyPasswordlessLinkResponse;
    toJSON(message: AddMyPasswordlessLinkResponse): unknown;
    create(base?: DeepPartial<AddMyPasswordlessLinkResponse>): AddMyPasswordlessLinkResponse;
    fromPartial(object: DeepPartial<AddMyPasswordlessLinkResponse>): AddMyPasswordlessLinkResponse;
};
export declare const SendMyPasswordlessLinkRequest: {
    encode(_: SendMyPasswordlessLinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendMyPasswordlessLinkRequest;
    fromJSON(_: any): SendMyPasswordlessLinkRequest;
    toJSON(_: SendMyPasswordlessLinkRequest): unknown;
    create(base?: DeepPartial<SendMyPasswordlessLinkRequest>): SendMyPasswordlessLinkRequest;
    fromPartial(_: DeepPartial<SendMyPasswordlessLinkRequest>): SendMyPasswordlessLinkRequest;
};
export declare const SendMyPasswordlessLinkResponse: {
    encode(message: SendMyPasswordlessLinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendMyPasswordlessLinkResponse;
    fromJSON(object: any): SendMyPasswordlessLinkResponse;
    toJSON(message: SendMyPasswordlessLinkResponse): unknown;
    create(base?: DeepPartial<SendMyPasswordlessLinkResponse>): SendMyPasswordlessLinkResponse;
    fromPartial(object: DeepPartial<SendMyPasswordlessLinkResponse>): SendMyPasswordlessLinkResponse;
};
export declare const VerifyMyPasswordlessRequest: {
    encode(message: VerifyMyPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyPasswordlessRequest;
    fromJSON(object: any): VerifyMyPasswordlessRequest;
    toJSON(message: VerifyMyPasswordlessRequest): unknown;
    create(base?: DeepPartial<VerifyMyPasswordlessRequest>): VerifyMyPasswordlessRequest;
    fromPartial(object: DeepPartial<VerifyMyPasswordlessRequest>): VerifyMyPasswordlessRequest;
};
export declare const VerifyMyPasswordlessResponse: {
    encode(message: VerifyMyPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyPasswordlessResponse;
    fromJSON(object: any): VerifyMyPasswordlessResponse;
    toJSON(message: VerifyMyPasswordlessResponse): unknown;
    create(base?: DeepPartial<VerifyMyPasswordlessResponse>): VerifyMyPasswordlessResponse;
    fromPartial(object: DeepPartial<VerifyMyPasswordlessResponse>): VerifyMyPasswordlessResponse;
};
export declare const RemoveMyPasswordlessRequest: {
    encode(message: RemoveMyPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyPasswordlessRequest;
    fromJSON(object: any): RemoveMyPasswordlessRequest;
    toJSON(message: RemoveMyPasswordlessRequest): unknown;
    create(base?: DeepPartial<RemoveMyPasswordlessRequest>): RemoveMyPasswordlessRequest;
    fromPartial(object: DeepPartial<RemoveMyPasswordlessRequest>): RemoveMyPasswordlessRequest;
};
export declare const RemoveMyPasswordlessResponse: {
    encode(message: RemoveMyPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyPasswordlessResponse;
    fromJSON(object: any): RemoveMyPasswordlessResponse;
    toJSON(message: RemoveMyPasswordlessResponse): unknown;
    create(base?: DeepPartial<RemoveMyPasswordlessResponse>): RemoveMyPasswordlessResponse;
    fromPartial(object: DeepPartial<RemoveMyPasswordlessResponse>): RemoveMyPasswordlessResponse;
};
export declare const ListMyUserGrantsRequest: {
    encode(message: ListMyUserGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserGrantsRequest;
    fromJSON(object: any): ListMyUserGrantsRequest;
    toJSON(message: ListMyUserGrantsRequest): unknown;
    create(base?: DeepPartial<ListMyUserGrantsRequest>): ListMyUserGrantsRequest;
    fromPartial(object: DeepPartial<ListMyUserGrantsRequest>): ListMyUserGrantsRequest;
};
export declare const ListMyUserGrantsResponse: {
    encode(message: ListMyUserGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserGrantsResponse;
    fromJSON(object: any): ListMyUserGrantsResponse;
    toJSON(message: ListMyUserGrantsResponse): unknown;
    create(base?: DeepPartial<ListMyUserGrantsResponse>): ListMyUserGrantsResponse;
    fromPartial(object: DeepPartial<ListMyUserGrantsResponse>): ListMyUserGrantsResponse;
};
export declare const UserGrant: {
    encode(message: UserGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserGrant;
    fromJSON(object: any): UserGrant;
    toJSON(message: UserGrant): unknown;
    create(base?: DeepPartial<UserGrant>): UserGrant;
    fromPartial(object: DeepPartial<UserGrant>): UserGrant;
};
export declare const ListMyProjectOrgsRequest: {
    encode(message: ListMyProjectOrgsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyProjectOrgsRequest;
    fromJSON(object: any): ListMyProjectOrgsRequest;
    toJSON(message: ListMyProjectOrgsRequest): unknown;
    create(base?: DeepPartial<ListMyProjectOrgsRequest>): ListMyProjectOrgsRequest;
    fromPartial(object: DeepPartial<ListMyProjectOrgsRequest>): ListMyProjectOrgsRequest;
};
export declare const ListMyProjectOrgsResponse: {
    encode(message: ListMyProjectOrgsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyProjectOrgsResponse;
    fromJSON(object: any): ListMyProjectOrgsResponse;
    toJSON(message: ListMyProjectOrgsResponse): unknown;
    create(base?: DeepPartial<ListMyProjectOrgsResponse>): ListMyProjectOrgsResponse;
    fromPartial(object: DeepPartial<ListMyProjectOrgsResponse>): ListMyProjectOrgsResponse;
};
export declare const ListMyZitadelPermissionsRequest: {
    encode(_: ListMyZitadelPermissionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyZitadelPermissionsRequest;
    fromJSON(_: any): ListMyZitadelPermissionsRequest;
    toJSON(_: ListMyZitadelPermissionsRequest): unknown;
    create(base?: DeepPartial<ListMyZitadelPermissionsRequest>): ListMyZitadelPermissionsRequest;
    fromPartial(_: DeepPartial<ListMyZitadelPermissionsRequest>): ListMyZitadelPermissionsRequest;
};
export declare const ListMyZitadelPermissionsResponse: {
    encode(message: ListMyZitadelPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyZitadelPermissionsResponse;
    fromJSON(object: any): ListMyZitadelPermissionsResponse;
    toJSON(message: ListMyZitadelPermissionsResponse): unknown;
    create(base?: DeepPartial<ListMyZitadelPermissionsResponse>): ListMyZitadelPermissionsResponse;
    fromPartial(object: DeepPartial<ListMyZitadelPermissionsResponse>): ListMyZitadelPermissionsResponse;
};
export declare const ListMyProjectPermissionsRequest: {
    encode(_: ListMyProjectPermissionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyProjectPermissionsRequest;
    fromJSON(_: any): ListMyProjectPermissionsRequest;
    toJSON(_: ListMyProjectPermissionsRequest): unknown;
    create(base?: DeepPartial<ListMyProjectPermissionsRequest>): ListMyProjectPermissionsRequest;
    fromPartial(_: DeepPartial<ListMyProjectPermissionsRequest>): ListMyProjectPermissionsRequest;
};
export declare const ListMyProjectPermissionsResponse: {
    encode(message: ListMyProjectPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyProjectPermissionsResponse;
    fromJSON(object: any): ListMyProjectPermissionsResponse;
    toJSON(message: ListMyProjectPermissionsResponse): unknown;
    create(base?: DeepPartial<ListMyProjectPermissionsResponse>): ListMyProjectPermissionsResponse;
    fromPartial(object: DeepPartial<ListMyProjectPermissionsResponse>): ListMyProjectPermissionsResponse;
};
export declare const ListMyMembershipsRequest: {
    encode(message: ListMyMembershipsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyMembershipsRequest;
    fromJSON(object: any): ListMyMembershipsRequest;
    toJSON(message: ListMyMembershipsRequest): unknown;
    create(base?: DeepPartial<ListMyMembershipsRequest>): ListMyMembershipsRequest;
    fromPartial(object: DeepPartial<ListMyMembershipsRequest>): ListMyMembershipsRequest;
};
export declare const ListMyMembershipsResponse: {
    encode(message: ListMyMembershipsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyMembershipsResponse;
    fromJSON(object: any): ListMyMembershipsResponse;
    toJSON(message: ListMyMembershipsResponse): unknown;
    create(base?: DeepPartial<ListMyMembershipsResponse>): ListMyMembershipsResponse;
    fromPartial(object: DeepPartial<ListMyMembershipsResponse>): ListMyMembershipsResponse;
};
export declare const GetMyLabelPolicyRequest: {
    encode(_: GetMyLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyLabelPolicyRequest;
    fromJSON(_: any): GetMyLabelPolicyRequest;
    toJSON(_: GetMyLabelPolicyRequest): unknown;
    create(base?: DeepPartial<GetMyLabelPolicyRequest>): GetMyLabelPolicyRequest;
    fromPartial(_: DeepPartial<GetMyLabelPolicyRequest>): GetMyLabelPolicyRequest;
};
export declare const GetMyLabelPolicyResponse: {
    encode(message: GetMyLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyLabelPolicyResponse;
    fromJSON(object: any): GetMyLabelPolicyResponse;
    toJSON(message: GetMyLabelPolicyResponse): unknown;
    create(base?: DeepPartial<GetMyLabelPolicyResponse>): GetMyLabelPolicyResponse;
    fromPartial(object: DeepPartial<GetMyLabelPolicyResponse>): GetMyLabelPolicyResponse;
};
export declare const GetMyPrivacyPolicyRequest: {
    encode(_: GetMyPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPrivacyPolicyRequest;
    fromJSON(_: any): GetMyPrivacyPolicyRequest;
    toJSON(_: GetMyPrivacyPolicyRequest): unknown;
    create(base?: DeepPartial<GetMyPrivacyPolicyRequest>): GetMyPrivacyPolicyRequest;
    fromPartial(_: DeepPartial<GetMyPrivacyPolicyRequest>): GetMyPrivacyPolicyRequest;
};
export declare const GetMyPrivacyPolicyResponse: {
    encode(message: GetMyPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPrivacyPolicyResponse;
    fromJSON(object: any): GetMyPrivacyPolicyResponse;
    toJSON(message: GetMyPrivacyPolicyResponse): unknown;
    create(base?: DeepPartial<GetMyPrivacyPolicyResponse>): GetMyPrivacyPolicyResponse;
    fromPartial(object: DeepPartial<GetMyPrivacyPolicyResponse>): GetMyPrivacyPolicyResponse;
};
export declare const GetMyLoginPolicyRequest: {
    encode(_: GetMyLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyLoginPolicyRequest;
    fromJSON(_: any): GetMyLoginPolicyRequest;
    toJSON(_: GetMyLoginPolicyRequest): unknown;
    create(base?: DeepPartial<GetMyLoginPolicyRequest>): GetMyLoginPolicyRequest;
    fromPartial(_: DeepPartial<GetMyLoginPolicyRequest>): GetMyLoginPolicyRequest;
};
export declare const GetMyLoginPolicyResponse: {
    encode(message: GetMyLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyLoginPolicyResponse;
    fromJSON(object: any): GetMyLoginPolicyResponse;
    toJSON(message: GetMyLoginPolicyResponse): unknown;
    create(base?: DeepPartial<GetMyLoginPolicyResponse>): GetMyLoginPolicyResponse;
    fromPartial(object: DeepPartial<GetMyLoginPolicyResponse>): GetMyLoginPolicyResponse;
};
export type AuthServiceDefinition = typeof AuthServiceDefinition;
export declare const AuthServiceDefinition: {
    readonly name: "AuthService";
    readonly fullName: "zitadel.auth.v1.AuthService";
    readonly methods: {
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
        readonly getSupportedLanguages: {
            readonly name: "GetSupportedLanguages";
            readonly requestType: {
                encode(_: GetSupportedLanguagesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSupportedLanguagesRequest;
                fromJSON(_: any): GetSupportedLanguagesRequest;
                toJSON(_: GetSupportedLanguagesRequest): unknown;
                create(base?: DeepPartial<GetSupportedLanguagesRequest>): GetSupportedLanguagesRequest;
                fromPartial(_: DeepPartial<GetSupportedLanguagesRequest>): GetSupportedLanguagesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetSupportedLanguagesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetSupportedLanguagesResponse;
                fromJSON(object: any): GetSupportedLanguagesResponse;
                toJSON(message: GetSupportedLanguagesResponse): unknown;
                create(base?: DeepPartial<GetSupportedLanguagesResponse>): GetSupportedLanguagesResponse;
                fromPartial(object: DeepPartial<GetSupportedLanguagesResponse>): GetSupportedLanguagesResponse;
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
        readonly getMyUser: {
            readonly name: "GetMyUser";
            readonly requestType: {
                encode(_: GetMyUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyUserRequest;
                fromJSON(_: any): GetMyUserRequest;
                toJSON(_: GetMyUserRequest): unknown;
                create(base?: DeepPartial<GetMyUserRequest>): GetMyUserRequest;
                fromPartial(_: DeepPartial<GetMyUserRequest>): GetMyUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyUserResponse;
                fromJSON(object: any): GetMyUserResponse;
                toJSON(message: GetMyUserResponse): unknown;
                create(base?: DeepPartial<GetMyUserResponse>): GetMyUserResponse;
                fromPartial(object: DeepPartial<GetMyUserResponse>): GetMyUserResponse;
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
        readonly removeMyUser: {
            readonly name: "RemoveMyUser";
            readonly requestType: {
                encode(_: RemoveMyUserRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyUserRequest;
                fromJSON(_: any): RemoveMyUserRequest;
                toJSON(_: RemoveMyUserRequest): unknown;
                create(base?: DeepPartial<RemoveMyUserRequest>): RemoveMyUserRequest;
                fromPartial(_: DeepPartial<RemoveMyUserRequest>): RemoveMyUserRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMyUserResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyUserResponse;
                fromJSON(object: any): RemoveMyUserResponse;
                toJSON(message: RemoveMyUserResponse): unknown;
                create(base?: DeepPartial<RemoveMyUserResponse>): RemoveMyUserResponse;
                fromPartial(object: DeepPartial<RemoveMyUserResponse>): RemoveMyUserResponse;
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
        readonly listMyUserChanges: {
            readonly name: "ListMyUserChanges";
            readonly requestType: {
                encode(message: ListMyUserChangesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserChangesRequest;
                fromJSON(object: any): ListMyUserChangesRequest;
                toJSON(message: ListMyUserChangesRequest): unknown;
                create(base?: DeepPartial<ListMyUserChangesRequest>): ListMyUserChangesRequest;
                fromPartial(object: DeepPartial<ListMyUserChangesRequest>): ListMyUserChangesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyUserChangesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserChangesResponse;
                fromJSON(object: any): ListMyUserChangesResponse;
                toJSON(message: ListMyUserChangesResponse): unknown;
                create(base?: DeepPartial<ListMyUserChangesResponse>): ListMyUserChangesResponse;
                fromPartial(object: DeepPartial<ListMyUserChangesResponse>): ListMyUserChangesResponse;
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
        readonly listMyUserSessions: {
            readonly name: "ListMyUserSessions";
            readonly requestType: {
                encode(_: ListMyUserSessionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserSessionsRequest;
                fromJSON(_: any): ListMyUserSessionsRequest;
                toJSON(_: ListMyUserSessionsRequest): unknown;
                create(base?: DeepPartial<ListMyUserSessionsRequest>): ListMyUserSessionsRequest;
                fromPartial(_: DeepPartial<ListMyUserSessionsRequest>): ListMyUserSessionsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyUserSessionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserSessionsResponse;
                fromJSON(object: any): ListMyUserSessionsResponse;
                toJSON(message: ListMyUserSessionsResponse): unknown;
                create(base?: DeepPartial<ListMyUserSessionsResponse>): ListMyUserSessionsResponse;
                fromPartial(object: DeepPartial<ListMyUserSessionsResponse>): ListMyUserSessionsResponse;
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
        readonly listMyMetadata: {
            readonly name: "ListMyMetadata";
            readonly requestType: {
                encode(message: ListMyMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyMetadataRequest;
                fromJSON(object: any): ListMyMetadataRequest;
                toJSON(message: ListMyMetadataRequest): unknown;
                create(base?: DeepPartial<ListMyMetadataRequest>): ListMyMetadataRequest;
                fromPartial(object: DeepPartial<ListMyMetadataRequest>): ListMyMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyMetadataResponse;
                fromJSON(object: any): ListMyMetadataResponse;
                toJSON(message: ListMyMetadataResponse): unknown;
                create(base?: DeepPartial<ListMyMetadataResponse>): ListMyMetadataResponse;
                fromPartial(object: DeepPartial<ListMyMetadataResponse>): ListMyMetadataResponse;
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
        readonly getMyMetadata: {
            readonly name: "GetMyMetadata";
            readonly requestType: {
                encode(message: GetMyMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyMetadataRequest;
                fromJSON(object: any): GetMyMetadataRequest;
                toJSON(message: GetMyMetadataRequest): unknown;
                create(base?: DeepPartial<GetMyMetadataRequest>): GetMyMetadataRequest;
                fromPartial(object: DeepPartial<GetMyMetadataRequest>): GetMyMetadataRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyMetadataResponse;
                fromJSON(object: any): GetMyMetadataResponse;
                toJSON(message: GetMyMetadataResponse): unknown;
                create(base?: DeepPartial<GetMyMetadataResponse>): GetMyMetadataResponse;
                fromPartial(object: DeepPartial<GetMyMetadataResponse>): GetMyMetadataResponse;
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
        readonly listMyRefreshTokens: {
            readonly name: "ListMyRefreshTokens";
            readonly requestType: {
                encode(_: ListMyRefreshTokensRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyRefreshTokensRequest;
                fromJSON(_: any): ListMyRefreshTokensRequest;
                toJSON(_: ListMyRefreshTokensRequest): unknown;
                create(base?: DeepPartial<ListMyRefreshTokensRequest>): ListMyRefreshTokensRequest;
                fromPartial(_: DeepPartial<ListMyRefreshTokensRequest>): ListMyRefreshTokensRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyRefreshTokensResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyRefreshTokensResponse;
                fromJSON(object: any): ListMyRefreshTokensResponse;
                toJSON(message: ListMyRefreshTokensResponse): unknown;
                create(base?: DeepPartial<ListMyRefreshTokensResponse>): ListMyRefreshTokensResponse;
                fromPartial(object: DeepPartial<ListMyRefreshTokensResponse>): ListMyRefreshTokensResponse;
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
        readonly revokeMyRefreshToken: {
            readonly name: "RevokeMyRefreshToken";
            readonly requestType: {
                encode(message: RevokeMyRefreshTokenRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RevokeMyRefreshTokenRequest;
                fromJSON(object: any): RevokeMyRefreshTokenRequest;
                toJSON(message: RevokeMyRefreshTokenRequest): unknown;
                create(base?: DeepPartial<RevokeMyRefreshTokenRequest>): RevokeMyRefreshTokenRequest;
                fromPartial(object: DeepPartial<RevokeMyRefreshTokenRequest>): RevokeMyRefreshTokenRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RevokeMyRefreshTokenResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RevokeMyRefreshTokenResponse;
                fromJSON(object: any): RevokeMyRefreshTokenResponse;
                toJSON(message: RevokeMyRefreshTokenResponse): unknown;
                create(base?: DeepPartial<RevokeMyRefreshTokenResponse>): RevokeMyRefreshTokenResponse;
                fromPartial(object: DeepPartial<RevokeMyRefreshTokenResponse>): RevokeMyRefreshTokenResponse;
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
        readonly revokeAllMyRefreshTokens: {
            readonly name: "RevokeAllMyRefreshTokens";
            readonly requestType: {
                encode(_: RevokeAllMyRefreshTokensRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RevokeAllMyRefreshTokensRequest;
                fromJSON(_: any): RevokeAllMyRefreshTokensRequest;
                toJSON(_: RevokeAllMyRefreshTokensRequest): unknown;
                create(base?: DeepPartial<RevokeAllMyRefreshTokensRequest>): RevokeAllMyRefreshTokensRequest;
                fromPartial(_: DeepPartial<RevokeAllMyRefreshTokensRequest>): RevokeAllMyRefreshTokensRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: RevokeAllMyRefreshTokensResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RevokeAllMyRefreshTokensResponse;
                fromJSON(_: any): RevokeAllMyRefreshTokensResponse;
                toJSON(_: RevokeAllMyRefreshTokensResponse): unknown;
                create(base?: DeepPartial<RevokeAllMyRefreshTokensResponse>): RevokeAllMyRefreshTokensResponse;
                fromPartial(_: DeepPartial<RevokeAllMyRefreshTokensResponse>): RevokeAllMyRefreshTokensResponse;
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
        readonly updateMyUserName: {
            readonly name: "UpdateMyUserName";
            readonly requestType: {
                encode(message: UpdateMyUserNameRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyUserNameRequest;
                fromJSON(object: any): UpdateMyUserNameRequest;
                toJSON(message: UpdateMyUserNameRequest): unknown;
                create(base?: DeepPartial<UpdateMyUserNameRequest>): UpdateMyUserNameRequest;
                fromPartial(object: DeepPartial<UpdateMyUserNameRequest>): UpdateMyUserNameRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateMyUserNameResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyUserNameResponse;
                fromJSON(object: any): UpdateMyUserNameResponse;
                toJSON(message: UpdateMyUserNameResponse): unknown;
                create(base?: DeepPartial<UpdateMyUserNameResponse>): UpdateMyUserNameResponse;
                fromPartial(object: DeepPartial<UpdateMyUserNameResponse>): UpdateMyUserNameResponse;
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
        readonly getMyPasswordComplexityPolicy: {
            readonly name: "GetMyPasswordComplexityPolicy";
            readonly requestType: {
                encode(_: GetMyPasswordComplexityPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPasswordComplexityPolicyRequest;
                fromJSON(_: any): GetMyPasswordComplexityPolicyRequest;
                toJSON(_: GetMyPasswordComplexityPolicyRequest): unknown;
                create(base?: DeepPartial<GetMyPasswordComplexityPolicyRequest>): GetMyPasswordComplexityPolicyRequest;
                fromPartial(_: DeepPartial<GetMyPasswordComplexityPolicyRequest>): GetMyPasswordComplexityPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyPasswordComplexityPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPasswordComplexityPolicyResponse;
                fromJSON(object: any): GetMyPasswordComplexityPolicyResponse;
                toJSON(message: GetMyPasswordComplexityPolicyResponse): unknown;
                create(base?: DeepPartial<GetMyPasswordComplexityPolicyResponse>): GetMyPasswordComplexityPolicyResponse;
                fromPartial(object: DeepPartial<GetMyPasswordComplexityPolicyResponse>): GetMyPasswordComplexityPolicyResponse;
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
        readonly updateMyPassword: {
            readonly name: "UpdateMyPassword";
            readonly requestType: {
                encode(message: UpdateMyPasswordRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyPasswordRequest;
                fromJSON(object: any): UpdateMyPasswordRequest;
                toJSON(message: UpdateMyPasswordRequest): unknown;
                create(base?: DeepPartial<UpdateMyPasswordRequest>): UpdateMyPasswordRequest;
                fromPartial(object: DeepPartial<UpdateMyPasswordRequest>): UpdateMyPasswordRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateMyPasswordResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyPasswordResponse;
                fromJSON(object: any): UpdateMyPasswordResponse;
                toJSON(message: UpdateMyPasswordResponse): unknown;
                create(base?: DeepPartial<UpdateMyPasswordResponse>): UpdateMyPasswordResponse;
                fromPartial(object: DeepPartial<UpdateMyPasswordResponse>): UpdateMyPasswordResponse;
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
        readonly getMyProfile: {
            readonly name: "GetMyProfile";
            readonly requestType: {
                encode(_: GetMyProfileRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyProfileRequest;
                fromJSON(_: any): GetMyProfileRequest;
                toJSON(_: GetMyProfileRequest): unknown;
                create(base?: DeepPartial<GetMyProfileRequest>): GetMyProfileRequest;
                fromPartial(_: DeepPartial<GetMyProfileRequest>): GetMyProfileRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyProfileResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyProfileResponse;
                fromJSON(object: any): GetMyProfileResponse;
                toJSON(message: GetMyProfileResponse): unknown;
                create(base?: DeepPartial<GetMyProfileResponse>): GetMyProfileResponse;
                fromPartial(object: DeepPartial<GetMyProfileResponse>): GetMyProfileResponse;
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
        readonly updateMyProfile: {
            readonly name: "UpdateMyProfile";
            readonly requestType: {
                encode(message: UpdateMyProfileRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyProfileRequest;
                fromJSON(object: any): UpdateMyProfileRequest;
                toJSON(message: UpdateMyProfileRequest): unknown;
                create(base?: DeepPartial<UpdateMyProfileRequest>): UpdateMyProfileRequest;
                fromPartial(object: DeepPartial<UpdateMyProfileRequest>): UpdateMyProfileRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UpdateMyProfileResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyProfileResponse;
                fromJSON(object: any): UpdateMyProfileResponse;
                toJSON(message: UpdateMyProfileResponse): unknown;
                create(base?: DeepPartial<UpdateMyProfileResponse>): UpdateMyProfileResponse;
                fromPartial(object: DeepPartial<UpdateMyProfileResponse>): UpdateMyProfileResponse;
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
        readonly getMyEmail: {
            readonly name: "GetMyEmail";
            readonly requestType: {
                encode(_: GetMyEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyEmailRequest;
                fromJSON(_: any): GetMyEmailRequest;
                toJSON(_: GetMyEmailRequest): unknown;
                create(base?: DeepPartial<GetMyEmailRequest>): GetMyEmailRequest;
                fromPartial(_: DeepPartial<GetMyEmailRequest>): GetMyEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyEmailResponse;
                fromJSON(object: any): GetMyEmailResponse;
                toJSON(message: GetMyEmailResponse): unknown;
                create(base?: DeepPartial<GetMyEmailResponse>): GetMyEmailResponse;
                fromPartial(object: DeepPartial<GetMyEmailResponse>): GetMyEmailResponse;
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
        readonly setMyEmail: {
            readonly name: "SetMyEmail";
            readonly requestType: {
                encode(message: SetMyEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetMyEmailRequest;
                fromJSON(object: any): SetMyEmailRequest;
                toJSON(message: SetMyEmailRequest): unknown;
                create(base?: DeepPartial<SetMyEmailRequest>): SetMyEmailRequest;
                fromPartial(object: DeepPartial<SetMyEmailRequest>): SetMyEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetMyEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetMyEmailResponse;
                fromJSON(object: any): SetMyEmailResponse;
                toJSON(message: SetMyEmailResponse): unknown;
                create(base?: DeepPartial<SetMyEmailResponse>): SetMyEmailResponse;
                fromPartial(object: DeepPartial<SetMyEmailResponse>): SetMyEmailResponse;
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
        readonly verifyMyEmail: {
            readonly name: "VerifyMyEmail";
            readonly requestType: {
                encode(message: VerifyMyEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyEmailRequest;
                fromJSON(object: any): VerifyMyEmailRequest;
                toJSON(message: VerifyMyEmailRequest): unknown;
                create(base?: DeepPartial<VerifyMyEmailRequest>): VerifyMyEmailRequest;
                fromPartial(object: DeepPartial<VerifyMyEmailRequest>): VerifyMyEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyMyEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyEmailResponse;
                fromJSON(object: any): VerifyMyEmailResponse;
                toJSON(message: VerifyMyEmailResponse): unknown;
                create(base?: DeepPartial<VerifyMyEmailResponse>): VerifyMyEmailResponse;
                fromPartial(object: DeepPartial<VerifyMyEmailResponse>): VerifyMyEmailResponse;
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
        readonly resendMyEmailVerification: {
            readonly name: "ResendMyEmailVerification";
            readonly requestType: {
                encode(_: ResendMyEmailVerificationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendMyEmailVerificationRequest;
                fromJSON(_: any): ResendMyEmailVerificationRequest;
                toJSON(_: ResendMyEmailVerificationRequest): unknown;
                create(base?: DeepPartial<ResendMyEmailVerificationRequest>): ResendMyEmailVerificationRequest;
                fromPartial(_: DeepPartial<ResendMyEmailVerificationRequest>): ResendMyEmailVerificationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResendMyEmailVerificationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendMyEmailVerificationResponse;
                fromJSON(object: any): ResendMyEmailVerificationResponse;
                toJSON(message: ResendMyEmailVerificationResponse): unknown;
                create(base?: DeepPartial<ResendMyEmailVerificationResponse>): ResendMyEmailVerificationResponse;
                fromPartial(object: DeepPartial<ResendMyEmailVerificationResponse>): ResendMyEmailVerificationResponse;
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
        readonly getMyPhone: {
            readonly name: "GetMyPhone";
            readonly requestType: {
                encode(_: GetMyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPhoneRequest;
                fromJSON(_: any): GetMyPhoneRequest;
                toJSON(_: GetMyPhoneRequest): unknown;
                create(base?: DeepPartial<GetMyPhoneRequest>): GetMyPhoneRequest;
                fromPartial(_: DeepPartial<GetMyPhoneRequest>): GetMyPhoneRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPhoneResponse;
                fromJSON(object: any): GetMyPhoneResponse;
                toJSON(message: GetMyPhoneResponse): unknown;
                create(base?: DeepPartial<GetMyPhoneResponse>): GetMyPhoneResponse;
                fromPartial(object: DeepPartial<GetMyPhoneResponse>): GetMyPhoneResponse;
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
        readonly setMyPhone: {
            readonly name: "SetMyPhone";
            readonly requestType: {
                encode(message: SetMyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetMyPhoneRequest;
                fromJSON(object: any): SetMyPhoneRequest;
                toJSON(message: SetMyPhoneRequest): unknown;
                create(base?: DeepPartial<SetMyPhoneRequest>): SetMyPhoneRequest;
                fromPartial(object: DeepPartial<SetMyPhoneRequest>): SetMyPhoneRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SetMyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SetMyPhoneResponse;
                fromJSON(object: any): SetMyPhoneResponse;
                toJSON(message: SetMyPhoneResponse): unknown;
                create(base?: DeepPartial<SetMyPhoneResponse>): SetMyPhoneResponse;
                fromPartial(object: DeepPartial<SetMyPhoneResponse>): SetMyPhoneResponse;
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
        readonly verifyMyPhone: {
            readonly name: "VerifyMyPhone";
            readonly requestType: {
                encode(message: VerifyMyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyPhoneRequest;
                fromJSON(object: any): VerifyMyPhoneRequest;
                toJSON(message: VerifyMyPhoneRequest): unknown;
                create(base?: DeepPartial<VerifyMyPhoneRequest>): VerifyMyPhoneRequest;
                fromPartial(object: DeepPartial<VerifyMyPhoneRequest>): VerifyMyPhoneRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyMyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyPhoneResponse;
                fromJSON(object: any): VerifyMyPhoneResponse;
                toJSON(message: VerifyMyPhoneResponse): unknown;
                create(base?: DeepPartial<VerifyMyPhoneResponse>): VerifyMyPhoneResponse;
                fromPartial(object: DeepPartial<VerifyMyPhoneResponse>): VerifyMyPhoneResponse;
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
        /** Resends an sms to the last given phone number, to verify it */
        readonly resendMyPhoneVerification: {
            readonly name: "ResendMyPhoneVerification";
            readonly requestType: {
                encode(_: ResendMyPhoneVerificationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendMyPhoneVerificationRequest;
                fromJSON(_: any): ResendMyPhoneVerificationRequest;
                toJSON(_: ResendMyPhoneVerificationRequest): unknown;
                create(base?: DeepPartial<ResendMyPhoneVerificationRequest>): ResendMyPhoneVerificationRequest;
                fromPartial(_: DeepPartial<ResendMyPhoneVerificationRequest>): ResendMyPhoneVerificationRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ResendMyPhoneVerificationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ResendMyPhoneVerificationResponse;
                fromJSON(object: any): ResendMyPhoneVerificationResponse;
                toJSON(message: ResendMyPhoneVerificationResponse): unknown;
                create(base?: DeepPartial<ResendMyPhoneVerificationResponse>): ResendMyPhoneVerificationResponse;
                fromPartial(object: DeepPartial<ResendMyPhoneVerificationResponse>): ResendMyPhoneVerificationResponse;
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
        readonly removeMyPhone: {
            readonly name: "RemoveMyPhone";
            readonly requestType: {
                encode(_: RemoveMyPhoneRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyPhoneRequest;
                fromJSON(_: any): RemoveMyPhoneRequest;
                toJSON(_: RemoveMyPhoneRequest): unknown;
                create(base?: DeepPartial<RemoveMyPhoneRequest>): RemoveMyPhoneRequest;
                fromPartial(_: DeepPartial<RemoveMyPhoneRequest>): RemoveMyPhoneRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMyPhoneResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyPhoneResponse;
                fromJSON(object: any): RemoveMyPhoneResponse;
                toJSON(message: RemoveMyPhoneResponse): unknown;
                create(base?: DeepPartial<RemoveMyPhoneResponse>): RemoveMyPhoneResponse;
                fromPartial(object: DeepPartial<RemoveMyPhoneResponse>): RemoveMyPhoneResponse;
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
        readonly removeMyAvatar: {
            readonly name: "RemoveMyAvatar";
            readonly requestType: {
                encode(_: RemoveMyAvatarRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAvatarRequest;
                fromJSON(_: any): RemoveMyAvatarRequest;
                toJSON(_: RemoveMyAvatarRequest): unknown;
                create(base?: DeepPartial<RemoveMyAvatarRequest>): RemoveMyAvatarRequest;
                fromPartial(_: DeepPartial<RemoveMyAvatarRequest>): RemoveMyAvatarRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMyAvatarResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAvatarResponse;
                fromJSON(object: any): RemoveMyAvatarResponse;
                toJSON(message: RemoveMyAvatarResponse): unknown;
                create(base?: DeepPartial<RemoveMyAvatarResponse>): RemoveMyAvatarResponse;
                fromPartial(object: DeepPartial<RemoveMyAvatarResponse>): RemoveMyAvatarResponse;
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
        readonly listMyLinkedIDPs: {
            readonly name: "ListMyLinkedIDPs";
            readonly requestType: {
                encode(message: ListMyLinkedIDPsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyLinkedIDPsRequest;
                fromJSON(object: any): ListMyLinkedIDPsRequest;
                toJSON(message: ListMyLinkedIDPsRequest): unknown;
                create(base?: DeepPartial<ListMyLinkedIDPsRequest>): ListMyLinkedIDPsRequest;
                fromPartial(object: DeepPartial<ListMyLinkedIDPsRequest>): ListMyLinkedIDPsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyLinkedIDPsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyLinkedIDPsResponse;
                fromJSON(object: any): ListMyLinkedIDPsResponse;
                toJSON(message: ListMyLinkedIDPsResponse): unknown;
                create(base?: DeepPartial<ListMyLinkedIDPsResponse>): ListMyLinkedIDPsResponse;
                fromPartial(object: DeepPartial<ListMyLinkedIDPsResponse>): ListMyLinkedIDPsResponse;
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
        readonly removeMyLinkedIDP: {
            readonly name: "RemoveMyLinkedIDP";
            readonly requestType: {
                encode(message: RemoveMyLinkedIDPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyLinkedIDPRequest;
                fromJSON(object: any): RemoveMyLinkedIDPRequest;
                toJSON(message: RemoveMyLinkedIDPRequest): unknown;
                create(base?: DeepPartial<RemoveMyLinkedIDPRequest>): RemoveMyLinkedIDPRequest;
                fromPartial(object: DeepPartial<RemoveMyLinkedIDPRequest>): RemoveMyLinkedIDPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMyLinkedIDPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyLinkedIDPResponse;
                fromJSON(object: any): RemoveMyLinkedIDPResponse;
                toJSON(message: RemoveMyLinkedIDPResponse): unknown;
                create(base?: DeepPartial<RemoveMyLinkedIDPResponse>): RemoveMyLinkedIDPResponse;
                fromPartial(object: DeepPartial<RemoveMyLinkedIDPResponse>): RemoveMyLinkedIDPResponse;
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
        readonly listMyAuthFactors: {
            readonly name: "ListMyAuthFactors";
            readonly requestType: {
                encode(_: ListMyAuthFactorsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyAuthFactorsRequest;
                fromJSON(_: any): ListMyAuthFactorsRequest;
                toJSON(_: ListMyAuthFactorsRequest): unknown;
                create(base?: DeepPartial<ListMyAuthFactorsRequest>): ListMyAuthFactorsRequest;
                fromPartial(_: DeepPartial<ListMyAuthFactorsRequest>): ListMyAuthFactorsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyAuthFactorsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyAuthFactorsResponse;
                fromJSON(object: any): ListMyAuthFactorsResponse;
                toJSON(message: ListMyAuthFactorsResponse): unknown;
                create(base?: DeepPartial<ListMyAuthFactorsResponse>): ListMyAuthFactorsResponse;
                fromPartial(object: DeepPartial<ListMyAuthFactorsResponse>): ListMyAuthFactorsResponse;
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
        readonly addMyAuthFactorOTP: {
            readonly name: "AddMyAuthFactorOTP";
            readonly requestType: {
                encode(_: AddMyAuthFactorOTPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPRequest;
                fromJSON(_: any): AddMyAuthFactorOTPRequest;
                toJSON(_: AddMyAuthFactorOTPRequest): unknown;
                create(base?: DeepPartial<AddMyAuthFactorOTPRequest>): AddMyAuthFactorOTPRequest;
                fromPartial(_: DeepPartial<AddMyAuthFactorOTPRequest>): AddMyAuthFactorOTPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddMyAuthFactorOTPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPResponse;
                fromJSON(object: any): AddMyAuthFactorOTPResponse;
                toJSON(message: AddMyAuthFactorOTPResponse): unknown;
                create(base?: DeepPartial<AddMyAuthFactorOTPResponse>): AddMyAuthFactorOTPResponse;
                fromPartial(object: DeepPartial<AddMyAuthFactorOTPResponse>): AddMyAuthFactorOTPResponse;
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
        readonly verifyMyAuthFactorOTP: {
            readonly name: "VerifyMyAuthFactorOTP";
            readonly requestType: {
                encode(message: VerifyMyAuthFactorOTPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyAuthFactorOTPRequest;
                fromJSON(object: any): VerifyMyAuthFactorOTPRequest;
                toJSON(message: VerifyMyAuthFactorOTPRequest): unknown;
                create(base?: DeepPartial<VerifyMyAuthFactorOTPRequest>): VerifyMyAuthFactorOTPRequest;
                fromPartial(object: DeepPartial<VerifyMyAuthFactorOTPRequest>): VerifyMyAuthFactorOTPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyMyAuthFactorOTPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyAuthFactorOTPResponse;
                fromJSON(object: any): VerifyMyAuthFactorOTPResponse;
                toJSON(message: VerifyMyAuthFactorOTPResponse): unknown;
                create(base?: DeepPartial<VerifyMyAuthFactorOTPResponse>): VerifyMyAuthFactorOTPResponse;
                fromPartial(object: DeepPartial<VerifyMyAuthFactorOTPResponse>): VerifyMyAuthFactorOTPResponse;
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
        readonly removeMyAuthFactorOTP: {
            readonly name: "RemoveMyAuthFactorOTP";
            readonly requestType: {
                encode(_: RemoveMyAuthFactorOTPRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPRequest;
                fromJSON(_: any): RemoveMyAuthFactorOTPRequest;
                toJSON(_: RemoveMyAuthFactorOTPRequest): unknown;
                create(base?: DeepPartial<RemoveMyAuthFactorOTPRequest>): RemoveMyAuthFactorOTPRequest;
                fromPartial(_: DeepPartial<RemoveMyAuthFactorOTPRequest>): RemoveMyAuthFactorOTPRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMyAuthFactorOTPResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPResponse;
                fromJSON(object: any): RemoveMyAuthFactorOTPResponse;
                toJSON(message: RemoveMyAuthFactorOTPResponse): unknown;
                create(base?: DeepPartial<RemoveMyAuthFactorOTPResponse>): RemoveMyAuthFactorOTPResponse;
                fromPartial(object: DeepPartial<RemoveMyAuthFactorOTPResponse>): RemoveMyAuthFactorOTPResponse;
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
        readonly addMyAuthFactorOTPSMS: {
            readonly name: "AddMyAuthFactorOTPSMS";
            readonly requestType: {
                encode(_: AddMyAuthFactorOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPSMSRequest;
                fromJSON(_: any): AddMyAuthFactorOTPSMSRequest;
                toJSON(_: AddMyAuthFactorOTPSMSRequest): unknown;
                create(base?: DeepPartial<AddMyAuthFactorOTPSMSRequest>): AddMyAuthFactorOTPSMSRequest;
                fromPartial(_: DeepPartial<AddMyAuthFactorOTPSMSRequest>): AddMyAuthFactorOTPSMSRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddMyAuthFactorOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPSMSResponse;
                fromJSON(object: any): AddMyAuthFactorOTPSMSResponse;
                toJSON(message: AddMyAuthFactorOTPSMSResponse): unknown;
                create(base?: DeepPartial<AddMyAuthFactorOTPSMSResponse>): AddMyAuthFactorOTPSMSResponse;
                fromPartial(object: DeepPartial<AddMyAuthFactorOTPSMSResponse>): AddMyAuthFactorOTPSMSResponse;
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
        readonly removeMyAuthFactorOTPSMS: {
            readonly name: "RemoveMyAuthFactorOTPSMS";
            readonly requestType: {
                encode(_: RemoveMyAuthFactorOTPSMSRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPSMSRequest;
                fromJSON(_: any): RemoveMyAuthFactorOTPSMSRequest;
                toJSON(_: RemoveMyAuthFactorOTPSMSRequest): unknown;
                create(base?: DeepPartial<RemoveMyAuthFactorOTPSMSRequest>): RemoveMyAuthFactorOTPSMSRequest;
                fromPartial(_: DeepPartial<RemoveMyAuthFactorOTPSMSRequest>): RemoveMyAuthFactorOTPSMSRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMyAuthFactorOTPSMSResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPSMSResponse;
                fromJSON(object: any): RemoveMyAuthFactorOTPSMSResponse;
                toJSON(message: RemoveMyAuthFactorOTPSMSResponse): unknown;
                create(base?: DeepPartial<RemoveMyAuthFactorOTPSMSResponse>): RemoveMyAuthFactorOTPSMSResponse;
                fromPartial(object: DeepPartial<RemoveMyAuthFactorOTPSMSResponse>): RemoveMyAuthFactorOTPSMSResponse;
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
        readonly addMyAuthFactorOTPEmail: {
            readonly name: "AddMyAuthFactorOTPEmail";
            readonly requestType: {
                encode(_: AddMyAuthFactorOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPEmailRequest;
                fromJSON(_: any): AddMyAuthFactorOTPEmailRequest;
                toJSON(_: AddMyAuthFactorOTPEmailRequest): unknown;
                create(base?: DeepPartial<AddMyAuthFactorOTPEmailRequest>): AddMyAuthFactorOTPEmailRequest;
                fromPartial(_: DeepPartial<AddMyAuthFactorOTPEmailRequest>): AddMyAuthFactorOTPEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddMyAuthFactorOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorOTPEmailResponse;
                fromJSON(object: any): AddMyAuthFactorOTPEmailResponse;
                toJSON(message: AddMyAuthFactorOTPEmailResponse): unknown;
                create(base?: DeepPartial<AddMyAuthFactorOTPEmailResponse>): AddMyAuthFactorOTPEmailResponse;
                fromPartial(object: DeepPartial<AddMyAuthFactorOTPEmailResponse>): AddMyAuthFactorOTPEmailResponse;
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
        readonly removeMyAuthFactorOTPEmail: {
            readonly name: "RemoveMyAuthFactorOTPEmail";
            readonly requestType: {
                encode(_: RemoveMyAuthFactorOTPEmailRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPEmailRequest;
                fromJSON(_: any): RemoveMyAuthFactorOTPEmailRequest;
                toJSON(_: RemoveMyAuthFactorOTPEmailRequest): unknown;
                create(base?: DeepPartial<RemoveMyAuthFactorOTPEmailRequest>): RemoveMyAuthFactorOTPEmailRequest;
                fromPartial(_: DeepPartial<RemoveMyAuthFactorOTPEmailRequest>): RemoveMyAuthFactorOTPEmailRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMyAuthFactorOTPEmailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorOTPEmailResponse;
                fromJSON(object: any): RemoveMyAuthFactorOTPEmailResponse;
                toJSON(message: RemoveMyAuthFactorOTPEmailResponse): unknown;
                create(base?: DeepPartial<RemoveMyAuthFactorOTPEmailResponse>): RemoveMyAuthFactorOTPEmailResponse;
                fromPartial(object: DeepPartial<RemoveMyAuthFactorOTPEmailResponse>): RemoveMyAuthFactorOTPEmailResponse;
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
        readonly addMyAuthFactorU2F: {
            readonly name: "AddMyAuthFactorU2F";
            readonly requestType: {
                encode(_: AddMyAuthFactorU2FRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorU2FRequest;
                fromJSON(_: any): AddMyAuthFactorU2FRequest;
                toJSON(_: AddMyAuthFactorU2FRequest): unknown;
                create(base?: DeepPartial<AddMyAuthFactorU2FRequest>): AddMyAuthFactorU2FRequest;
                fromPartial(_: DeepPartial<AddMyAuthFactorU2FRequest>): AddMyAuthFactorU2FRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddMyAuthFactorU2FResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyAuthFactorU2FResponse;
                fromJSON(object: any): AddMyAuthFactorU2FResponse;
                toJSON(message: AddMyAuthFactorU2FResponse): unknown;
                create(base?: DeepPartial<AddMyAuthFactorU2FResponse>): AddMyAuthFactorU2FResponse;
                fromPartial(object: DeepPartial<AddMyAuthFactorU2FResponse>): AddMyAuthFactorU2FResponse;
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
        readonly verifyMyAuthFactorU2F: {
            readonly name: "VerifyMyAuthFactorU2F";
            readonly requestType: {
                encode(message: VerifyMyAuthFactorU2FRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyAuthFactorU2FRequest;
                fromJSON(object: any): VerifyMyAuthFactorU2FRequest;
                toJSON(message: VerifyMyAuthFactorU2FRequest): unknown;
                create(base?: DeepPartial<VerifyMyAuthFactorU2FRequest>): VerifyMyAuthFactorU2FRequest;
                fromPartial(object: DeepPartial<VerifyMyAuthFactorU2FRequest>): VerifyMyAuthFactorU2FRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyMyAuthFactorU2FResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyAuthFactorU2FResponse;
                fromJSON(object: any): VerifyMyAuthFactorU2FResponse;
                toJSON(message: VerifyMyAuthFactorU2FResponse): unknown;
                create(base?: DeepPartial<VerifyMyAuthFactorU2FResponse>): VerifyMyAuthFactorU2FResponse;
                fromPartial(object: DeepPartial<VerifyMyAuthFactorU2FResponse>): VerifyMyAuthFactorU2FResponse;
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
        readonly removeMyAuthFactorU2F: {
            readonly name: "RemoveMyAuthFactorU2F";
            readonly requestType: {
                encode(message: RemoveMyAuthFactorU2FRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorU2FRequest;
                fromJSON(object: any): RemoveMyAuthFactorU2FRequest;
                toJSON(message: RemoveMyAuthFactorU2FRequest): unknown;
                create(base?: DeepPartial<RemoveMyAuthFactorU2FRequest>): RemoveMyAuthFactorU2FRequest;
                fromPartial(object: DeepPartial<RemoveMyAuthFactorU2FRequest>): RemoveMyAuthFactorU2FRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMyAuthFactorU2FResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyAuthFactorU2FResponse;
                fromJSON(object: any): RemoveMyAuthFactorU2FResponse;
                toJSON(message: RemoveMyAuthFactorU2FResponse): unknown;
                create(base?: DeepPartial<RemoveMyAuthFactorU2FResponse>): RemoveMyAuthFactorU2FResponse;
                fromPartial(object: DeepPartial<RemoveMyAuthFactorU2FResponse>): RemoveMyAuthFactorU2FResponse;
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
        readonly listMyPasswordless: {
            readonly name: "ListMyPasswordless";
            readonly requestType: {
                encode(_: ListMyPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyPasswordlessRequest;
                fromJSON(_: any): ListMyPasswordlessRequest;
                toJSON(_: ListMyPasswordlessRequest): unknown;
                create(base?: DeepPartial<ListMyPasswordlessRequest>): ListMyPasswordlessRequest;
                fromPartial(_: DeepPartial<ListMyPasswordlessRequest>): ListMyPasswordlessRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyPasswordlessResponse;
                fromJSON(object: any): ListMyPasswordlessResponse;
                toJSON(message: ListMyPasswordlessResponse): unknown;
                create(base?: DeepPartial<ListMyPasswordlessResponse>): ListMyPasswordlessResponse;
                fromPartial(object: DeepPartial<ListMyPasswordlessResponse>): ListMyPasswordlessResponse;
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
        readonly addMyPasswordless: {
            readonly name: "AddMyPasswordless";
            readonly requestType: {
                encode(_: AddMyPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyPasswordlessRequest;
                fromJSON(_: any): AddMyPasswordlessRequest;
                toJSON(_: AddMyPasswordlessRequest): unknown;
                create(base?: DeepPartial<AddMyPasswordlessRequest>): AddMyPasswordlessRequest;
                fromPartial(_: DeepPartial<AddMyPasswordlessRequest>): AddMyPasswordlessRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddMyPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyPasswordlessResponse;
                fromJSON(object: any): AddMyPasswordlessResponse;
                toJSON(message: AddMyPasswordlessResponse): unknown;
                create(base?: DeepPartial<AddMyPasswordlessResponse>): AddMyPasswordlessResponse;
                fromPartial(object: DeepPartial<AddMyPasswordlessResponse>): AddMyPasswordlessResponse;
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
        readonly addMyPasswordlessLink: {
            readonly name: "AddMyPasswordlessLink";
            readonly requestType: {
                encode(_: AddMyPasswordlessLinkRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyPasswordlessLinkRequest;
                fromJSON(_: any): AddMyPasswordlessLinkRequest;
                toJSON(_: AddMyPasswordlessLinkRequest): unknown;
                create(base?: DeepPartial<AddMyPasswordlessLinkRequest>): AddMyPasswordlessLinkRequest;
                fromPartial(_: DeepPartial<AddMyPasswordlessLinkRequest>): AddMyPasswordlessLinkRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AddMyPasswordlessLinkResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): AddMyPasswordlessLinkResponse;
                fromJSON(object: any): AddMyPasswordlessLinkResponse;
                toJSON(message: AddMyPasswordlessLinkResponse): unknown;
                create(base?: DeepPartial<AddMyPasswordlessLinkResponse>): AddMyPasswordlessLinkResponse;
                fromPartial(object: DeepPartial<AddMyPasswordlessLinkResponse>): AddMyPasswordlessLinkResponse;
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
        readonly sendMyPasswordlessLink: {
            readonly name: "SendMyPasswordlessLink";
            readonly requestType: {
                encode(_: SendMyPasswordlessLinkRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SendMyPasswordlessLinkRequest;
                fromJSON(_: any): SendMyPasswordlessLinkRequest;
                toJSON(_: SendMyPasswordlessLinkRequest): unknown;
                create(base?: DeepPartial<SendMyPasswordlessLinkRequest>): SendMyPasswordlessLinkRequest;
                fromPartial(_: DeepPartial<SendMyPasswordlessLinkRequest>): SendMyPasswordlessLinkRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SendMyPasswordlessLinkResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SendMyPasswordlessLinkResponse;
                fromJSON(object: any): SendMyPasswordlessLinkResponse;
                toJSON(message: SendMyPasswordlessLinkResponse): unknown;
                create(base?: DeepPartial<SendMyPasswordlessLinkResponse>): SendMyPasswordlessLinkResponse;
                fromPartial(object: DeepPartial<SendMyPasswordlessLinkResponse>): SendMyPasswordlessLinkResponse;
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
        readonly verifyMyPasswordless: {
            readonly name: "VerifyMyPasswordless";
            readonly requestType: {
                encode(message: VerifyMyPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyPasswordlessRequest;
                fromJSON(object: any): VerifyMyPasswordlessRequest;
                toJSON(message: VerifyMyPasswordlessRequest): unknown;
                create(base?: DeepPartial<VerifyMyPasswordlessRequest>): VerifyMyPasswordlessRequest;
                fromPartial(object: DeepPartial<VerifyMyPasswordlessRequest>): VerifyMyPasswordlessRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: VerifyMyPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): VerifyMyPasswordlessResponse;
                fromJSON(object: any): VerifyMyPasswordlessResponse;
                toJSON(message: VerifyMyPasswordlessResponse): unknown;
                create(base?: DeepPartial<VerifyMyPasswordlessResponse>): VerifyMyPasswordlessResponse;
                fromPartial(object: DeepPartial<VerifyMyPasswordlessResponse>): VerifyMyPasswordlessResponse;
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
        readonly removeMyPasswordless: {
            readonly name: "RemoveMyPasswordless";
            readonly requestType: {
                encode(message: RemoveMyPasswordlessRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyPasswordlessRequest;
                fromJSON(object: any): RemoveMyPasswordlessRequest;
                toJSON(message: RemoveMyPasswordlessRequest): unknown;
                create(base?: DeepPartial<RemoveMyPasswordlessRequest>): RemoveMyPasswordlessRequest;
                fromPartial(object: DeepPartial<RemoveMyPasswordlessRequest>): RemoveMyPasswordlessRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: RemoveMyPasswordlessResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMyPasswordlessResponse;
                fromJSON(object: any): RemoveMyPasswordlessResponse;
                toJSON(message: RemoveMyPasswordlessResponse): unknown;
                create(base?: DeepPartial<RemoveMyPasswordlessResponse>): RemoveMyPasswordlessResponse;
                fromPartial(object: DeepPartial<RemoveMyPasswordlessResponse>): RemoveMyPasswordlessResponse;
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
        readonly listMyUserGrants: {
            readonly name: "ListMyUserGrants";
            readonly requestType: {
                encode(message: ListMyUserGrantsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserGrantsRequest;
                fromJSON(object: any): ListMyUserGrantsRequest;
                toJSON(message: ListMyUserGrantsRequest): unknown;
                create(base?: DeepPartial<ListMyUserGrantsRequest>): ListMyUserGrantsRequest;
                fromPartial(object: DeepPartial<ListMyUserGrantsRequest>): ListMyUserGrantsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyUserGrantsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyUserGrantsResponse;
                fromJSON(object: any): ListMyUserGrantsResponse;
                toJSON(message: ListMyUserGrantsResponse): unknown;
                create(base?: DeepPartial<ListMyUserGrantsResponse>): ListMyUserGrantsResponse;
                fromPartial(object: DeepPartial<ListMyUserGrantsResponse>): ListMyUserGrantsResponse;
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
        readonly listMyProjectOrgs: {
            readonly name: "ListMyProjectOrgs";
            readonly requestType: {
                encode(message: ListMyProjectOrgsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyProjectOrgsRequest;
                fromJSON(object: any): ListMyProjectOrgsRequest;
                toJSON(message: ListMyProjectOrgsRequest): unknown;
                create(base?: DeepPartial<ListMyProjectOrgsRequest>): ListMyProjectOrgsRequest;
                fromPartial(object: DeepPartial<ListMyProjectOrgsRequest>): ListMyProjectOrgsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyProjectOrgsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyProjectOrgsResponse;
                fromJSON(object: any): ListMyProjectOrgsResponse;
                toJSON(message: ListMyProjectOrgsResponse): unknown;
                create(base?: DeepPartial<ListMyProjectOrgsResponse>): ListMyProjectOrgsResponse;
                fromPartial(object: DeepPartial<ListMyProjectOrgsResponse>): ListMyProjectOrgsResponse;
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
        readonly listMyZitadelPermissions: {
            readonly name: "ListMyZitadelPermissions";
            readonly requestType: {
                encode(_: ListMyZitadelPermissionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyZitadelPermissionsRequest;
                fromJSON(_: any): ListMyZitadelPermissionsRequest;
                toJSON(_: ListMyZitadelPermissionsRequest): unknown;
                create(base?: DeepPartial<ListMyZitadelPermissionsRequest>): ListMyZitadelPermissionsRequest;
                fromPartial(_: DeepPartial<ListMyZitadelPermissionsRequest>): ListMyZitadelPermissionsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyZitadelPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyZitadelPermissionsResponse;
                fromJSON(object: any): ListMyZitadelPermissionsResponse;
                toJSON(message: ListMyZitadelPermissionsResponse): unknown;
                create(base?: DeepPartial<ListMyZitadelPermissionsResponse>): ListMyZitadelPermissionsResponse;
                fromPartial(object: DeepPartial<ListMyZitadelPermissionsResponse>): ListMyZitadelPermissionsResponse;
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
        readonly listMyProjectPermissions: {
            readonly name: "ListMyProjectPermissions";
            readonly requestType: {
                encode(_: ListMyProjectPermissionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyProjectPermissionsRequest;
                fromJSON(_: any): ListMyProjectPermissionsRequest;
                toJSON(_: ListMyProjectPermissionsRequest): unknown;
                create(base?: DeepPartial<ListMyProjectPermissionsRequest>): ListMyProjectPermissionsRequest;
                fromPartial(_: DeepPartial<ListMyProjectPermissionsRequest>): ListMyProjectPermissionsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyProjectPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyProjectPermissionsResponse;
                fromJSON(object: any): ListMyProjectPermissionsResponse;
                toJSON(message: ListMyProjectPermissionsResponse): unknown;
                create(base?: DeepPartial<ListMyProjectPermissionsResponse>): ListMyProjectPermissionsResponse;
                fromPartial(object: DeepPartial<ListMyProjectPermissionsResponse>): ListMyProjectPermissionsResponse;
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
        readonly listMyMemberships: {
            readonly name: "ListMyMemberships";
            readonly requestType: {
                encode(message: ListMyMembershipsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyMembershipsRequest;
                fromJSON(object: any): ListMyMembershipsRequest;
                toJSON(message: ListMyMembershipsRequest): unknown;
                create(base?: DeepPartial<ListMyMembershipsRequest>): ListMyMembershipsRequest;
                fromPartial(object: DeepPartial<ListMyMembershipsRequest>): ListMyMembershipsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListMyMembershipsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListMyMembershipsResponse;
                fromJSON(object: any): ListMyMembershipsResponse;
                toJSON(message: ListMyMembershipsResponse): unknown;
                create(base?: DeepPartial<ListMyMembershipsResponse>): ListMyMembershipsResponse;
                fromPartial(object: DeepPartial<ListMyMembershipsResponse>): ListMyMembershipsResponse;
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
        readonly getMyLabelPolicy: {
            readonly name: "GetMyLabelPolicy";
            readonly requestType: {
                encode(_: GetMyLabelPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyLabelPolicyRequest;
                fromJSON(_: any): GetMyLabelPolicyRequest;
                toJSON(_: GetMyLabelPolicyRequest): unknown;
                create(base?: DeepPartial<GetMyLabelPolicyRequest>): GetMyLabelPolicyRequest;
                fromPartial(_: DeepPartial<GetMyLabelPolicyRequest>): GetMyLabelPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyLabelPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyLabelPolicyResponse;
                fromJSON(object: any): GetMyLabelPolicyResponse;
                toJSON(message: GetMyLabelPolicyResponse): unknown;
                create(base?: DeepPartial<GetMyLabelPolicyResponse>): GetMyLabelPolicyResponse;
                fromPartial(object: DeepPartial<GetMyLabelPolicyResponse>): GetMyLabelPolicyResponse;
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
        readonly getMyPrivacyPolicy: {
            readonly name: "GetMyPrivacyPolicy";
            readonly requestType: {
                encode(_: GetMyPrivacyPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPrivacyPolicyRequest;
                fromJSON(_: any): GetMyPrivacyPolicyRequest;
                toJSON(_: GetMyPrivacyPolicyRequest): unknown;
                create(base?: DeepPartial<GetMyPrivacyPolicyRequest>): GetMyPrivacyPolicyRequest;
                fromPartial(_: DeepPartial<GetMyPrivacyPolicyRequest>): GetMyPrivacyPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyPrivacyPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyPrivacyPolicyResponse;
                fromJSON(object: any): GetMyPrivacyPolicyResponse;
                toJSON(message: GetMyPrivacyPolicyResponse): unknown;
                create(base?: DeepPartial<GetMyPrivacyPolicyResponse>): GetMyPrivacyPolicyResponse;
                fromPartial(object: DeepPartial<GetMyPrivacyPolicyResponse>): GetMyPrivacyPolicyResponse;
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
        readonly getMyLoginPolicy: {
            readonly name: "GetMyLoginPolicy";
            readonly requestType: {
                encode(_: GetMyLoginPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyLoginPolicyRequest;
                fromJSON(_: any): GetMyLoginPolicyRequest;
                toJSON(_: GetMyLoginPolicyRequest): unknown;
                create(base?: DeepPartial<GetMyLoginPolicyRequest>): GetMyLoginPolicyRequest;
                fromPartial(_: DeepPartial<GetMyLoginPolicyRequest>): GetMyLoginPolicyRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMyLoginPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetMyLoginPolicyResponse;
                fromJSON(object: any): GetMyLoginPolicyResponse;
                toJSON(message: GetMyLoginPolicyResponse): unknown;
                create(base?: DeepPartial<GetMyLoginPolicyResponse>): GetMyLoginPolicyResponse;
                fromPartial(object: DeepPartial<GetMyLoginPolicyResponse>): GetMyLoginPolicyResponse;
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
export interface AuthServiceImplementation<CallContextExt = {}> {
    healthz(request: HealthzRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HealthzResponse>>;
    getSupportedLanguages(request: GetSupportedLanguagesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSupportedLanguagesResponse>>;
    getMyUser(request: GetMyUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyUserResponse>>;
    removeMyUser(request: RemoveMyUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyUserResponse>>;
    listMyUserChanges(request: ListMyUserChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyUserChangesResponse>>;
    listMyUserSessions(request: ListMyUserSessionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyUserSessionsResponse>>;
    listMyMetadata(request: ListMyMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyMetadataResponse>>;
    getMyMetadata(request: GetMyMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyMetadataResponse>>;
    listMyRefreshTokens(request: ListMyRefreshTokensRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyRefreshTokensResponse>>;
    revokeMyRefreshToken(request: RevokeMyRefreshTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RevokeMyRefreshTokenResponse>>;
    revokeAllMyRefreshTokens(request: RevokeAllMyRefreshTokensRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RevokeAllMyRefreshTokensResponse>>;
    updateMyUserName(request: UpdateMyUserNameRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateMyUserNameResponse>>;
    getMyPasswordComplexityPolicy(request: GetMyPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyPasswordComplexityPolicyResponse>>;
    updateMyPassword(request: UpdateMyPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateMyPasswordResponse>>;
    getMyProfile(request: GetMyProfileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyProfileResponse>>;
    updateMyProfile(request: UpdateMyProfileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateMyProfileResponse>>;
    getMyEmail(request: GetMyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyEmailResponse>>;
    setMyEmail(request: SetMyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetMyEmailResponse>>;
    verifyMyEmail(request: VerifyMyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyEmailResponse>>;
    resendMyEmailVerification(request: ResendMyEmailVerificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendMyEmailVerificationResponse>>;
    getMyPhone(request: GetMyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyPhoneResponse>>;
    setMyPhone(request: SetMyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetMyPhoneResponse>>;
    verifyMyPhone(request: VerifyMyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyPhoneResponse>>;
    /** Resends an sms to the last given phone number, to verify it */
    resendMyPhoneVerification(request: ResendMyPhoneVerificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendMyPhoneVerificationResponse>>;
    removeMyPhone(request: RemoveMyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyPhoneResponse>>;
    removeMyAvatar(request: RemoveMyAvatarRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAvatarResponse>>;
    listMyLinkedIDPs(request: ListMyLinkedIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyLinkedIDPsResponse>>;
    removeMyLinkedIDP(request: RemoveMyLinkedIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyLinkedIDPResponse>>;
    listMyAuthFactors(request: ListMyAuthFactorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyAuthFactorsResponse>>;
    addMyAuthFactorOTP(request: AddMyAuthFactorOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyAuthFactorOTPResponse>>;
    verifyMyAuthFactorOTP(request: VerifyMyAuthFactorOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyAuthFactorOTPResponse>>;
    removeMyAuthFactorOTP(request: RemoveMyAuthFactorOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAuthFactorOTPResponse>>;
    addMyAuthFactorOTPSMS(request: AddMyAuthFactorOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyAuthFactorOTPSMSResponse>>;
    removeMyAuthFactorOTPSMS(request: RemoveMyAuthFactorOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAuthFactorOTPSMSResponse>>;
    addMyAuthFactorOTPEmail(request: AddMyAuthFactorOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyAuthFactorOTPEmailResponse>>;
    removeMyAuthFactorOTPEmail(request: RemoveMyAuthFactorOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAuthFactorOTPEmailResponse>>;
    addMyAuthFactorU2F(request: AddMyAuthFactorU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyAuthFactorU2FResponse>>;
    verifyMyAuthFactorU2F(request: VerifyMyAuthFactorU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyAuthFactorU2FResponse>>;
    removeMyAuthFactorU2F(request: RemoveMyAuthFactorU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAuthFactorU2FResponse>>;
    listMyPasswordless(request: ListMyPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyPasswordlessResponse>>;
    addMyPasswordless(request: AddMyPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyPasswordlessResponse>>;
    addMyPasswordlessLink(request: AddMyPasswordlessLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyPasswordlessLinkResponse>>;
    sendMyPasswordlessLink(request: SendMyPasswordlessLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendMyPasswordlessLinkResponse>>;
    verifyMyPasswordless(request: VerifyMyPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyPasswordlessResponse>>;
    removeMyPasswordless(request: RemoveMyPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyPasswordlessResponse>>;
    listMyUserGrants(request: ListMyUserGrantsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyUserGrantsResponse>>;
    listMyProjectOrgs(request: ListMyProjectOrgsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyProjectOrgsResponse>>;
    listMyZitadelPermissions(request: ListMyZitadelPermissionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyZitadelPermissionsResponse>>;
    listMyProjectPermissions(request: ListMyProjectPermissionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyProjectPermissionsResponse>>;
    listMyMemberships(request: ListMyMembershipsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyMembershipsResponse>>;
    getMyLabelPolicy(request: GetMyLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyLabelPolicyResponse>>;
    getMyPrivacyPolicy(request: GetMyPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyPrivacyPolicyResponse>>;
    getMyLoginPolicy(request: GetMyLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyLoginPolicyResponse>>;
}
export interface AuthServiceClient<CallOptionsExt = {}> {
    healthz(request: DeepPartial<HealthzRequest>, options?: CallOptions & CallOptionsExt): Promise<HealthzResponse>;
    getSupportedLanguages(request: DeepPartial<GetSupportedLanguagesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSupportedLanguagesResponse>;
    getMyUser(request: DeepPartial<GetMyUserRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyUserResponse>;
    removeMyUser(request: DeepPartial<RemoveMyUserRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyUserResponse>;
    listMyUserChanges(request: DeepPartial<ListMyUserChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyUserChangesResponse>;
    listMyUserSessions(request: DeepPartial<ListMyUserSessionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyUserSessionsResponse>;
    listMyMetadata(request: DeepPartial<ListMyMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyMetadataResponse>;
    getMyMetadata(request: DeepPartial<GetMyMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyMetadataResponse>;
    listMyRefreshTokens(request: DeepPartial<ListMyRefreshTokensRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyRefreshTokensResponse>;
    revokeMyRefreshToken(request: DeepPartial<RevokeMyRefreshTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<RevokeMyRefreshTokenResponse>;
    revokeAllMyRefreshTokens(request: DeepPartial<RevokeAllMyRefreshTokensRequest>, options?: CallOptions & CallOptionsExt): Promise<RevokeAllMyRefreshTokensResponse>;
    updateMyUserName(request: DeepPartial<UpdateMyUserNameRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateMyUserNameResponse>;
    getMyPasswordComplexityPolicy(request: DeepPartial<GetMyPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyPasswordComplexityPolicyResponse>;
    updateMyPassword(request: DeepPartial<UpdateMyPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateMyPasswordResponse>;
    getMyProfile(request: DeepPartial<GetMyProfileRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyProfileResponse>;
    updateMyProfile(request: DeepPartial<UpdateMyProfileRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateMyProfileResponse>;
    getMyEmail(request: DeepPartial<GetMyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyEmailResponse>;
    setMyEmail(request: DeepPartial<SetMyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetMyEmailResponse>;
    verifyMyEmail(request: DeepPartial<VerifyMyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyEmailResponse>;
    resendMyEmailVerification(request: DeepPartial<ResendMyEmailVerificationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendMyEmailVerificationResponse>;
    getMyPhone(request: DeepPartial<GetMyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyPhoneResponse>;
    setMyPhone(request: DeepPartial<SetMyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<SetMyPhoneResponse>;
    verifyMyPhone(request: DeepPartial<VerifyMyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyPhoneResponse>;
    /** Resends an sms to the last given phone number, to verify it */
    resendMyPhoneVerification(request: DeepPartial<ResendMyPhoneVerificationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendMyPhoneVerificationResponse>;
    removeMyPhone(request: DeepPartial<RemoveMyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyPhoneResponse>;
    removeMyAvatar(request: DeepPartial<RemoveMyAvatarRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAvatarResponse>;
    listMyLinkedIDPs(request: DeepPartial<ListMyLinkedIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyLinkedIDPsResponse>;
    removeMyLinkedIDP(request: DeepPartial<RemoveMyLinkedIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyLinkedIDPResponse>;
    listMyAuthFactors(request: DeepPartial<ListMyAuthFactorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyAuthFactorsResponse>;
    addMyAuthFactorOTP(request: DeepPartial<AddMyAuthFactorOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyAuthFactorOTPResponse>;
    verifyMyAuthFactorOTP(request: DeepPartial<VerifyMyAuthFactorOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyAuthFactorOTPResponse>;
    removeMyAuthFactorOTP(request: DeepPartial<RemoveMyAuthFactorOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAuthFactorOTPResponse>;
    addMyAuthFactorOTPSMS(request: DeepPartial<AddMyAuthFactorOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyAuthFactorOTPSMSResponse>;
    removeMyAuthFactorOTPSMS(request: DeepPartial<RemoveMyAuthFactorOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAuthFactorOTPSMSResponse>;
    addMyAuthFactorOTPEmail(request: DeepPartial<AddMyAuthFactorOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyAuthFactorOTPEmailResponse>;
    removeMyAuthFactorOTPEmail(request: DeepPartial<RemoveMyAuthFactorOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAuthFactorOTPEmailResponse>;
    addMyAuthFactorU2F(request: DeepPartial<AddMyAuthFactorU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyAuthFactorU2FResponse>;
    verifyMyAuthFactorU2F(request: DeepPartial<VerifyMyAuthFactorU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyAuthFactorU2FResponse>;
    removeMyAuthFactorU2F(request: DeepPartial<RemoveMyAuthFactorU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAuthFactorU2FResponse>;
    listMyPasswordless(request: DeepPartial<ListMyPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyPasswordlessResponse>;
    addMyPasswordless(request: DeepPartial<AddMyPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyPasswordlessResponse>;
    addMyPasswordlessLink(request: DeepPartial<AddMyPasswordlessLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyPasswordlessLinkResponse>;
    sendMyPasswordlessLink(request: DeepPartial<SendMyPasswordlessLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<SendMyPasswordlessLinkResponse>;
    verifyMyPasswordless(request: DeepPartial<VerifyMyPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyPasswordlessResponse>;
    removeMyPasswordless(request: DeepPartial<RemoveMyPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyPasswordlessResponse>;
    listMyUserGrants(request: DeepPartial<ListMyUserGrantsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyUserGrantsResponse>;
    listMyProjectOrgs(request: DeepPartial<ListMyProjectOrgsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyProjectOrgsResponse>;
    listMyZitadelPermissions(request: DeepPartial<ListMyZitadelPermissionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyZitadelPermissionsResponse>;
    listMyProjectPermissions(request: DeepPartial<ListMyProjectPermissionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyProjectPermissionsResponse>;
    listMyMemberships(request: DeepPartial<ListMyMembershipsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyMembershipsResponse>;
    getMyLabelPolicy(request: DeepPartial<GetMyLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyLabelPolicyResponse>;
    getMyPrivacyPolicy(request: DeepPartial<GetMyPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyPrivacyPolicyResponse>;
    getMyLoginPolicy(request: DeepPartial<GetMyLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyLoginPolicyResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
