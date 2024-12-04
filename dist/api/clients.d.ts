import { ChannelOptions, ClientMiddleware } from 'nice-grpc';
import { AdminServiceClient } from './generated/zitadel/admin.js';
import { AuthServiceClient } from './generated/zitadel/auth.js';
import { ManagementServiceClient } from './generated/zitadel/management.js';
import { OIDCServiceClient } from './generated/zitadel/oidc/v2beta/oidc_service.js';
import { OrganizationServiceClient } from './generated/zitadel/org/v2beta/org_service.js';
import { SessionServiceClient } from './generated/zitadel/session/v2beta/session_service.js';
import { SettingsServiceClient } from './generated/zitadel/settings/v2beta/settings_service.js';
import { SystemServiceClient } from './generated/zitadel/system.js';
import { UserServiceClient } from './generated/zitadel/user/v2beta/user_service.js';
/**
 * Create a new gRPC service client for the Admin API of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the Admin API of ZITADEL.
 */
export declare function createAdminClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): AdminServiceClient;
/**
 * Create a new gRPC service client for the Auth API of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the Auth API of ZITADEL.
 */
export declare function createAuthClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): AuthServiceClient;
/**
 * Create a new gRPC service client for the Management API of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the Management API of ZITADEL.
 */
export declare function createManagementClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): ManagementServiceClient;
/**
 * Create a new gRPC service client for the OIDC API of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the OIDC API of ZITADEL.
 */
export declare function createOidcClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): OIDCServiceClient;
/**
 * Create a new gRPC service client for the organization API of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the organization API of ZITADEL.
 */
export declare function createOrganizationClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): OrganizationServiceClient;
/**
 * Create a new gRPC service client for the session API of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the session API of ZITADEL.
 */
export declare function createSessionClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): SessionServiceClient;
/**
 * Create a new gRPC service client for the settings API of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the settings API of ZITADEL.
 */
export declare function createSettingsClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): SettingsServiceClient;
/**
 * Create a new gRPC service client for the system API of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the system API of ZITADEL.
 */
export declare function createSystemClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): SystemServiceClient;
/**
 * Create a new gRPC service client for the user API of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the user API of ZITADEL.
 */
export declare function createUserClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): UserServiceClient;
