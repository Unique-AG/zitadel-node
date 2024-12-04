import { createChannel, createClientFactory } from 'nice-grpc';
import { AdminServiceDefinition } from './generated/zitadel/admin.js';
import { AuthServiceDefinition } from './generated/zitadel/auth.js';
import { ManagementServiceDefinition } from './generated/zitadel/management.js';
import { OIDCServiceDefinition } from './generated/zitadel/oidc/v2beta/oidc_service.js';
import { OrganizationServiceDefinition } from './generated/zitadel/org/v2beta/org_service.js';
import { SessionServiceDefinition } from './generated/zitadel/session/v2beta/session_service.js';
import { SettingsServiceDefinition } from './generated/zitadel/settings/v2beta/settings_service.js';
import { SystemServiceDefinition } from './generated/zitadel/system.js';
import { UserServiceDefinition } from './generated/zitadel/user/v2beta/user_service.js';
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
export function createAdminClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = createChannel(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(AdminServiceDefinition, channel);
}
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
export function createAuthClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = createChannel(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(AuthServiceDefinition, channel);
}
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
export function createManagementClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = createChannel(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(ManagementServiceDefinition, channel);
}
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
export function createOidcClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = createChannel(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(OIDCServiceDefinition, channel);
}
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
export function createOrganizationClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = createChannel(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(OrganizationServiceDefinition, channel);
}
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
export function createSessionClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = createChannel(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(SessionServiceDefinition, channel);
}
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
export function createSettingsClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = createChannel(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(SettingsServiceDefinition, channel);
}
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
export function createSystemClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = createChannel(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(SystemServiceDefinition, channel);
}
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
export function createUserClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = createChannel(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(UserServiceDefinition, channel);
}
