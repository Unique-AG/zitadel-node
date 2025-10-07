import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import { PaginationRequest, PaginationResponse } from "../../filter/v2beta/filter.js";
import { Metadata as Metadata1, MetadataQuery } from "../../metadata/v2beta/metadata.js";
import { AddHumanUserRequest } from "../../user/v2beta/user_service.js";
import { Domain, DomainSearchFilter, DomainValidationType, Organization, OrganizationSearchFilter, OrgFieldName } from "./org.js";
export declare const protobufPackage = "zitadel.org.v2beta";
export interface CreateOrganizationRequest {
    /** name of the Organization to be created. */
    name: string;
    /** Optionally set your own id unique for the organization. */
    id?: string | undefined;
    /** Additional Admins for the Organization. */
    admins: CreateOrganizationRequest_Admin[];
}
/** The Admin for the newly created Organization. */
export interface CreateOrganizationRequest_Admin {
    userId?: string | undefined;
    human?: AddHumanUserRequest | undefined;
    /** specify Organization Member Roles for the provided user (default is ORG_OWNER if roles are empty) */
    roles: string[];
}
export interface CreatedAdmin {
    userId: string;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
}
export interface AssignedAdmin {
    userId: string;
}
export interface OrganizationAdmin {
    createdAdmin?: CreatedAdmin | undefined;
    assignedAdmin?: AssignedAdmin | undefined;
}
export interface CreateOrganizationResponse {
    /** The timestamp of the organization was created. */
    creationDate: Date | undefined;
    /** Organization ID of the newly created organization. */
    id: string;
    /** The admins created/assigned for the Organization */
    organizationAdmins: OrganizationAdmin[];
}
export interface UpdateOrganizationRequest {
    /** Organization Id for the Organization to be updated */
    id: string;
    /** New Name for the Organization to be updated */
    name: string;
}
export interface UpdateOrganizationResponse {
    /** The timestamp of the update to the organization. */
    changeDate: Date | undefined;
}
export interface ListOrganizationsRequest {
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** the field the result is sorted */
    sortingColumn: OrgFieldName;
    /**
     * Define the criteria to query for.
     * repeated ProjectRoleQuery filters = 4;
     */
    filter: OrganizationSearchFilter[];
}
export interface ListOrganizationsResponse {
    /** Pagination of the Organizations results */
    pagination: PaginationResponse | undefined;
    /** The Organizations requested */
    organizations: Organization[];
}
export interface DeleteOrganizationRequest {
    /** Organization Id for the Organization to be deleted */
    id: string;
}
export interface DeleteOrganizationResponse {
    /** The timestamp of the deletion of the organization. */
    deletionDate: Date | undefined;
}
export interface DeactivateOrganizationRequest {
    /** Organization Id for the Organization to be deactivated */
    id: string;
}
export interface DeactivateOrganizationResponse {
    /** The timestamp of the deactivation of the organization. */
    changeDate: Date | undefined;
}
export interface ActivateOrganizationRequest {
    /** Organization Id for the Organization to be activated */
    id: string;
}
export interface ActivateOrganizationResponse {
    /** The timestamp of the activation of the organization. */
    changeDate: Date | undefined;
}
export interface AddOrganizationDomainRequest {
    /** Organization Id for the Organization for which the domain is to be added to. */
    organizationId: string;
    /** The domain you want to add to the organization. */
    domain: string;
}
export interface AddOrganizationDomainResponse {
    /** The timestamp of the organization was created. */
    creationDate: Date | undefined;
}
export interface ListOrganizationDomainsRequest {
    /** Organization Id for the Organization which domains are to be listed. */
    organizationId: string;
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** Define the criteria to query for. */
    filters: DomainSearchFilter[];
}
export interface ListOrganizationDomainsResponse {
    /** Pagination of the Organizations domain results. */
    pagination: PaginationResponse | undefined;
    /** The domains requested. */
    domains: Domain[];
}
export interface DeleteOrganizationDomainRequest {
    /** Organization Id for the Organization which domain is to be deleted. */
    organizationId: string;
    domain: string;
}
export interface DeleteOrganizationDomainResponse {
    /** The timestamp of the deletion of the organization domain. */
    deletionDate: Date | undefined;
}
export interface GenerateOrganizationDomainValidationRequest {
    /** Organization Id for the Organization which doman to be validated. */
    organizationId: string;
    /** The domain which to be deleted. */
    domain: string;
    type: DomainValidationType;
}
export interface GenerateOrganizationDomainValidationResponse {
    /** The token verify domain. */
    token: string;
    /** URL used to verify the domain. */
    url: string;
}
export interface VerifyOrganizationDomainRequest {
    /** Organization Id for the Organization doman to be verified. */
    organizationId: string;
    /** Organization Id for the Organization doman to be verified. */
    domain: string;
}
export interface VerifyOrganizationDomainResponse {
    /** The timestamp of the verification of the organization domain. */
    changeDate: Date | undefined;
}
export interface Metadata {
    /** Key in the metadata key/value pair. */
    key: string;
    /** Value in the metadata key/value pair. */
    value: Buffer;
}
export interface SetOrganizationMetadataRequest {
    /** Organization Id for the Organization doman to be verified. */
    organizationId: string;
    /** Metadata to set. */
    metadata: Metadata[];
}
export interface SetOrganizationMetadataResponse {
    /** The timestamp of the update of the organization metadata. */
    setDate: Date | undefined;
}
export interface ListOrganizationMetadataRequest {
    /** Organization ID of Orgalization which metadata is to be listed. */
    organizationId: string;
    /** List limitations and ordering. */
    pagination?: PaginationRequest | undefined;
    /** Define the criteria to query for. */
    filter: MetadataQuery[];
}
export interface ListOrganizationMetadataResponse {
    /** Pagination of the Organizations metadata results. */
    pagination: PaginationResponse | undefined;
    /** The Organization metadata requested. */
    metadata: Metadata1[];
}
export interface DeleteOrganizationMetadataRequest {
    /** Organization ID of Orgalization which metadata is to be deleted is stored on. */
    organizationId: string;
    /** The keys for the Organization metadata to be deleted. */
    keys: string[];
}
export interface DeleteOrganizationMetadataResponse {
    /** The timestamp of the deletiion of the organization metadata. */
    deletionDate: Date | undefined;
}
export declare const CreateOrganizationRequest: MessageFns<CreateOrganizationRequest>;
export declare const CreateOrganizationRequest_Admin: MessageFns<CreateOrganizationRequest_Admin>;
export declare const CreatedAdmin: MessageFns<CreatedAdmin>;
export declare const AssignedAdmin: MessageFns<AssignedAdmin>;
export declare const OrganizationAdmin: MessageFns<OrganizationAdmin>;
export declare const CreateOrganizationResponse: MessageFns<CreateOrganizationResponse>;
export declare const UpdateOrganizationRequest: MessageFns<UpdateOrganizationRequest>;
export declare const UpdateOrganizationResponse: MessageFns<UpdateOrganizationResponse>;
export declare const ListOrganizationsRequest: MessageFns<ListOrganizationsRequest>;
export declare const ListOrganizationsResponse: MessageFns<ListOrganizationsResponse>;
export declare const DeleteOrganizationRequest: MessageFns<DeleteOrganizationRequest>;
export declare const DeleteOrganizationResponse: MessageFns<DeleteOrganizationResponse>;
export declare const DeactivateOrganizationRequest: MessageFns<DeactivateOrganizationRequest>;
export declare const DeactivateOrganizationResponse: MessageFns<DeactivateOrganizationResponse>;
export declare const ActivateOrganizationRequest: MessageFns<ActivateOrganizationRequest>;
export declare const ActivateOrganizationResponse: MessageFns<ActivateOrganizationResponse>;
export declare const AddOrganizationDomainRequest: MessageFns<AddOrganizationDomainRequest>;
export declare const AddOrganizationDomainResponse: MessageFns<AddOrganizationDomainResponse>;
export declare const ListOrganizationDomainsRequest: MessageFns<ListOrganizationDomainsRequest>;
export declare const ListOrganizationDomainsResponse: MessageFns<ListOrganizationDomainsResponse>;
export declare const DeleteOrganizationDomainRequest: MessageFns<DeleteOrganizationDomainRequest>;
export declare const DeleteOrganizationDomainResponse: MessageFns<DeleteOrganizationDomainResponse>;
export declare const GenerateOrganizationDomainValidationRequest: MessageFns<GenerateOrganizationDomainValidationRequest>;
export declare const GenerateOrganizationDomainValidationResponse: MessageFns<GenerateOrganizationDomainValidationResponse>;
export declare const VerifyOrganizationDomainRequest: MessageFns<VerifyOrganizationDomainRequest>;
export declare const VerifyOrganizationDomainResponse: MessageFns<VerifyOrganizationDomainResponse>;
export declare const Metadata: MessageFns<Metadata>;
export declare const SetOrganizationMetadataRequest: MessageFns<SetOrganizationMetadataRequest>;
export declare const SetOrganizationMetadataResponse: MessageFns<SetOrganizationMetadataResponse>;
export declare const ListOrganizationMetadataRequest: MessageFns<ListOrganizationMetadataRequest>;
export declare const ListOrganizationMetadataResponse: MessageFns<ListOrganizationMetadataResponse>;
export declare const DeleteOrganizationMetadataRequest: MessageFns<DeleteOrganizationMetadataRequest>;
export declare const DeleteOrganizationMetadataResponse: MessageFns<DeleteOrganizationMetadataResponse>;
export type OrganizationServiceDefinition = typeof OrganizationServiceDefinition;
export declare const OrganizationServiceDefinition: {
    readonly name: "OrganizationService";
    readonly fullName: "zitadel.org.v2beta.OrganizationService";
    readonly methods: {
        /**
         * Create Organization
         *
         * Create a new organization with an administrative user. If no specific roles are sent for the users, they will be granted the role ORG_OWNER.
         *
         * Required permission:
         *  - `org.create`
         *
         * Deprecated: Use [AddOrganization](/apis/resources/org_service_v2/organization-service-add-organization.api.mdx) instead to create an organization.
         */
        readonly createOrganization: {
            readonly name: "CreateOrganization";
            readonly requestType: MessageFns<CreateOrganizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateOrganizationResponse>;
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
         * Update Organization
         *
         * Change the name of the organization.
         *
         * Required permission:
         *  - `org.write`
         */
        readonly updateOrganization: {
            readonly name: "UpdateOrganization";
            readonly requestType: MessageFns<UpdateOrganizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateOrganizationResponse>;
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
         * List Organizations
         *
         * Returns a list of organizations that match the requesting filters. All filters are applied with an AND condition.
         *
         * Required permission:
         *  - `iam.read`
         *
         * Deprecated: Use [ListOrganizations](/apis/resources/org_service_v2/organization-service-list-organizations.api.mdx) instead to list organizations.
         */
        readonly listOrganizations: {
            readonly name: "ListOrganizations";
            readonly requestType: MessageFns<ListOrganizationsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrganizationsResponse>;
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
         * Delete Organization
         *
         * Deletes the organization and all its resources (Users, Projects, Grants to and from the org). Users of this organization will not be able to log in.
         *
         * Required permission:
         *  - `org.delete`
         */
        readonly deleteOrganization: {
            readonly name: "DeleteOrganization";
            readonly requestType: MessageFns<DeleteOrganizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteOrganizationResponse>;
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
         * Set Organization Metadata
         *
         * Adds or updates a metadata value for the requested key. Make sure the value is base64 encoded.
         *
         * Required permission:
         *  - `org.write`
         */
        readonly setOrganizationMetadata: {
            readonly name: "SetOrganizationMetadata";
            readonly requestType: MessageFns<SetOrganizationMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetOrganizationMetadataResponse>;
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
         * List Organization Metadata
         *
         * List metadata of an organization filtered by query.
         *
         * Required permission:
         *  - `org.read`
         */
        readonly listOrganizationMetadata: {
            readonly name: "ListOrganizationMetadata";
            readonly requestType: MessageFns<ListOrganizationMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrganizationMetadataResponse>;
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
         * Delete Organization Metadata
         *
         * Delete metadata objects from an organization with a specific key.
         *
         * Required permission:
         *  - `org.write`
         */
        readonly deleteOrganizationMetadata: {
            readonly name: "DeleteOrganizationMetadata";
            readonly requestType: MessageFns<DeleteOrganizationMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteOrganizationMetadataResponse>;
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
         * Add Organization Domain
         *
         * Add a new domain to an organization. The domains are used to identify to which organization a user belongs.
         *
         * Required permission:
         *  - `org.write`
         */
        readonly addOrganizationDomain: {
            readonly name: "AddOrganizationDomain";
            readonly requestType: MessageFns<AddOrganizationDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOrganizationDomainResponse>;
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
         * List Organization Domains
         *
         * Returns the list of registered domains of an organization. The domains are used to identify to which organization a user belongs.
         *
         * Required permission:
         *  - `org.read`
         */
        readonly listOrganizationDomains: {
            readonly name: "ListOrganizationDomains";
            readonly requestType: MessageFns<ListOrganizationDomainsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrganizationDomainsResponse>;
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
         * Delete Organization Domain
         *
         * Delete a new domain from an organization. The domains are used to identify to which organization a user belongs. If the uses use the domain for login, this will not be possible afterwards. They have to use another domain instead.
         *
         * Required permission:
         *  - `org.write`
         */
        readonly deleteOrganizationDomain: {
            readonly name: "DeleteOrganizationDomain";
            readonly requestType: MessageFns<DeleteOrganizationDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteOrganizationDomainResponse>;
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
         * Generate Organization Domain Validation
         *
         * Generate a new file to be able to verify your domain with DNS or HTTP challenge.
         *
         * Required permission:
         *  - `org.write`
         */
        readonly generateOrganizationDomainValidation: {
            readonly name: "GenerateOrganizationDomainValidation";
            readonly requestType: MessageFns<GenerateOrganizationDomainValidationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GenerateOrganizationDomainValidationResponse>;
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
         * Verify Organization Domain
         *
         * Make sure you have added the required verification to your domain, depending on the method you have chosen (HTTP or DNS challenge). ZITADEL will check it and set the domain as verified if it was successful. A verify domain has to be unique.
         *
         * Required permission:
         *  - `org.write`
         */
        readonly verifyOrganizationDomain: {
            readonly name: "VerifyOrganizationDomain";
            readonly requestType: MessageFns<VerifyOrganizationDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyOrganizationDomainResponse>;
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
         * Deactivate Organization
         *
         * Sets the state of my organization to deactivated. Users of this organization will not be able to log in.
         *
         * Required permission:
         *  - `org.write`
         */
        readonly deactivateOrganization: {
            readonly name: "DeactivateOrganization";
            readonly requestType: MessageFns<DeactivateOrganizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateOrganizationResponse>;
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
         * Activate Organization
         *
         * Set the state of my organization to active. The state of the organization has to be deactivated to perform the request. Users of this organization will be able to log in again.
         *
         * Required permission:
         *  - `org.write`
         */
        readonly activateOrganization: {
            readonly name: "ActivateOrganization";
            readonly requestType: MessageFns<ActivateOrganizationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateOrganizationResponse>;
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
    /**
     * Create Organization
     *
     * Create a new organization with an administrative user. If no specific roles are sent for the users, they will be granted the role ORG_OWNER.
     *
     * Required permission:
     *  - `org.create`
     *
     * Deprecated: Use [AddOrganization](/apis/resources/org_service_v2/organization-service-add-organization.api.mdx) instead to create an organization.
     */
    createOrganization(request: CreateOrganizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateOrganizationResponse>>;
    /**
     * Update Organization
     *
     * Change the name of the organization.
     *
     * Required permission:
     *  - `org.write`
     */
    updateOrganization(request: UpdateOrganizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrganizationResponse>>;
    /**
     * List Organizations
     *
     * Returns a list of organizations that match the requesting filters. All filters are applied with an AND condition.
     *
     * Required permission:
     *  - `iam.read`
     *
     * Deprecated: Use [ListOrganizations](/apis/resources/org_service_v2/organization-service-list-organizations.api.mdx) instead to list organizations.
     */
    listOrganizations(request: ListOrganizationsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrganizationsResponse>>;
    /**
     * Delete Organization
     *
     * Deletes the organization and all its resources (Users, Projects, Grants to and from the org). Users of this organization will not be able to log in.
     *
     * Required permission:
     *  - `org.delete`
     */
    deleteOrganization(request: DeleteOrganizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteOrganizationResponse>>;
    /**
     * Set Organization Metadata
     *
     * Adds or updates a metadata value for the requested key. Make sure the value is base64 encoded.
     *
     * Required permission:
     *  - `org.write`
     */
    setOrganizationMetadata(request: SetOrganizationMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetOrganizationMetadataResponse>>;
    /**
     * List Organization Metadata
     *
     * List metadata of an organization filtered by query.
     *
     * Required permission:
     *  - `org.read`
     */
    listOrganizationMetadata(request: ListOrganizationMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrganizationMetadataResponse>>;
    /**
     * Delete Organization Metadata
     *
     * Delete metadata objects from an organization with a specific key.
     *
     * Required permission:
     *  - `org.write`
     */
    deleteOrganizationMetadata(request: DeleteOrganizationMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteOrganizationMetadataResponse>>;
    /**
     * Add Organization Domain
     *
     * Add a new domain to an organization. The domains are used to identify to which organization a user belongs.
     *
     * Required permission:
     *  - `org.write`
     */
    addOrganizationDomain(request: AddOrganizationDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrganizationDomainResponse>>;
    /**
     * List Organization Domains
     *
     * Returns the list of registered domains of an organization. The domains are used to identify to which organization a user belongs.
     *
     * Required permission:
     *  - `org.read`
     */
    listOrganizationDomains(request: ListOrganizationDomainsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrganizationDomainsResponse>>;
    /**
     * Delete Organization Domain
     *
     * Delete a new domain from an organization. The domains are used to identify to which organization a user belongs. If the uses use the domain for login, this will not be possible afterwards. They have to use another domain instead.
     *
     * Required permission:
     *  - `org.write`
     */
    deleteOrganizationDomain(request: DeleteOrganizationDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteOrganizationDomainResponse>>;
    /**
     * Generate Organization Domain Validation
     *
     * Generate a new file to be able to verify your domain with DNS or HTTP challenge.
     *
     * Required permission:
     *  - `org.write`
     */
    generateOrganizationDomainValidation(request: GenerateOrganizationDomainValidationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GenerateOrganizationDomainValidationResponse>>;
    /**
     * Verify Organization Domain
     *
     * Make sure you have added the required verification to your domain, depending on the method you have chosen (HTTP or DNS challenge). ZITADEL will check it and set the domain as verified if it was successful. A verify domain has to be unique.
     *
     * Required permission:
     *  - `org.write`
     */
    verifyOrganizationDomain(request: VerifyOrganizationDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyOrganizationDomainResponse>>;
    /**
     * Deactivate Organization
     *
     * Sets the state of my organization to deactivated. Users of this organization will not be able to log in.
     *
     * Required permission:
     *  - `org.write`
     */
    deactivateOrganization(request: DeactivateOrganizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateOrganizationResponse>>;
    /**
     * Activate Organization
     *
     * Set the state of my organization to active. The state of the organization has to be deactivated to perform the request. Users of this organization will be able to log in again.
     *
     * Required permission:
     *  - `org.write`
     */
    activateOrganization(request: ActivateOrganizationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateOrganizationResponse>>;
}
export interface OrganizationServiceClient<CallOptionsExt = {}> {
    /**
     * Create Organization
     *
     * Create a new organization with an administrative user. If no specific roles are sent for the users, they will be granted the role ORG_OWNER.
     *
     * Required permission:
     *  - `org.create`
     *
     * Deprecated: Use [AddOrganization](/apis/resources/org_service_v2/organization-service-add-organization.api.mdx) instead to create an organization.
     */
    createOrganization(request: DeepPartial<CreateOrganizationRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateOrganizationResponse>;
    /**
     * Update Organization
     *
     * Change the name of the organization.
     *
     * Required permission:
     *  - `org.write`
     */
    updateOrganization(request: DeepPartial<UpdateOrganizationRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrganizationResponse>;
    /**
     * List Organizations
     *
     * Returns a list of organizations that match the requesting filters. All filters are applied with an AND condition.
     *
     * Required permission:
     *  - `iam.read`
     *
     * Deprecated: Use [ListOrganizations](/apis/resources/org_service_v2/organization-service-list-organizations.api.mdx) instead to list organizations.
     */
    listOrganizations(request: DeepPartial<ListOrganizationsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrganizationsResponse>;
    /**
     * Delete Organization
     *
     * Deletes the organization and all its resources (Users, Projects, Grants to and from the org). Users of this organization will not be able to log in.
     *
     * Required permission:
     *  - `org.delete`
     */
    deleteOrganization(request: DeepPartial<DeleteOrganizationRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteOrganizationResponse>;
    /**
     * Set Organization Metadata
     *
     * Adds or updates a metadata value for the requested key. Make sure the value is base64 encoded.
     *
     * Required permission:
     *  - `org.write`
     */
    setOrganizationMetadata(request: DeepPartial<SetOrganizationMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<SetOrganizationMetadataResponse>;
    /**
     * List Organization Metadata
     *
     * List metadata of an organization filtered by query.
     *
     * Required permission:
     *  - `org.read`
     */
    listOrganizationMetadata(request: DeepPartial<ListOrganizationMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrganizationMetadataResponse>;
    /**
     * Delete Organization Metadata
     *
     * Delete metadata objects from an organization with a specific key.
     *
     * Required permission:
     *  - `org.write`
     */
    deleteOrganizationMetadata(request: DeepPartial<DeleteOrganizationMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteOrganizationMetadataResponse>;
    /**
     * Add Organization Domain
     *
     * Add a new domain to an organization. The domains are used to identify to which organization a user belongs.
     *
     * Required permission:
     *  - `org.write`
     */
    addOrganizationDomain(request: DeepPartial<AddOrganizationDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrganizationDomainResponse>;
    /**
     * List Organization Domains
     *
     * Returns the list of registered domains of an organization. The domains are used to identify to which organization a user belongs.
     *
     * Required permission:
     *  - `org.read`
     */
    listOrganizationDomains(request: DeepPartial<ListOrganizationDomainsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrganizationDomainsResponse>;
    /**
     * Delete Organization Domain
     *
     * Delete a new domain from an organization. The domains are used to identify to which organization a user belongs. If the uses use the domain for login, this will not be possible afterwards. They have to use another domain instead.
     *
     * Required permission:
     *  - `org.write`
     */
    deleteOrganizationDomain(request: DeepPartial<DeleteOrganizationDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteOrganizationDomainResponse>;
    /**
     * Generate Organization Domain Validation
     *
     * Generate a new file to be able to verify your domain with DNS or HTTP challenge.
     *
     * Required permission:
     *  - `org.write`
     */
    generateOrganizationDomainValidation(request: DeepPartial<GenerateOrganizationDomainValidationRequest>, options?: CallOptions & CallOptionsExt): Promise<GenerateOrganizationDomainValidationResponse>;
    /**
     * Verify Organization Domain
     *
     * Make sure you have added the required verification to your domain, depending on the method you have chosen (HTTP or DNS challenge). ZITADEL will check it and set the domain as verified if it was successful. A verify domain has to be unique.
     *
     * Required permission:
     *  - `org.write`
     */
    verifyOrganizationDomain(request: DeepPartial<VerifyOrganizationDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyOrganizationDomainResponse>;
    /**
     * Deactivate Organization
     *
     * Sets the state of my organization to deactivated. Users of this organization will not be able to log in.
     *
     * Required permission:
     *  - `org.write`
     */
    deactivateOrganization(request: DeepPartial<DeactivateOrganizationRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateOrganizationResponse>;
    /**
     * Activate Organization
     *
     * Set the state of my organization to active. The state of the organization has to be deactivated to perform the request. Users of this organization will be able to log in again.
     *
     * Required permission:
     *  - `org.write`
     */
    activateOrganization(request: DeepPartial<ActivateOrganizationRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateOrganizationResponse>;
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
