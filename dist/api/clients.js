"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminClient = createAdminClient;
exports.createAuthClient = createAuthClient;
exports.createManagementClient = createManagementClient;
exports.createOidcClient = createOidcClient;
exports.createOrganizationClient = createOrganizationClient;
exports.createSessionClient = createSessionClient;
exports.createSettingsClient = createSettingsClient;
exports.createSystemClient = createSystemClient;
exports.createUserClient = createUserClient;
const nice_grpc_1 = require("nice-grpc");
const admin_js_1 = require("./generated/zitadel/admin.js");
const auth_js_1 = require("./generated/zitadel/auth.js");
const management_js_1 = require("./generated/zitadel/management.js");
const oidc_service_js_1 = require("./generated/zitadel/oidc/v2beta/oidc_service.js");
const org_service_js_1 = require("./generated/zitadel/org/v2beta/org_service.js");
const session_service_js_1 = require("./generated/zitadel/session/v2beta/session_service.js");
const settings_service_js_1 = require("./generated/zitadel/settings/v2beta/settings_service.js");
const system_js_1 = require("./generated/zitadel/system.js");
const user_service_js_1 = require("./generated/zitadel/user/v2beta/user_service.js");
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
function createAdminClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(admin_js_1.AdminServiceDefinition, channel);
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
function createAuthClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(auth_js_1.AuthServiceDefinition, channel);
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
function createManagementClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(management_js_1.ManagementServiceDefinition, channel);
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
function createOidcClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(oidc_service_js_1.OIDCServiceDefinition, channel);
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
function createOrganizationClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(org_service_js_1.OrganizationServiceDefinition, channel);
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
function createSessionClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(session_service_js_1.SessionServiceDefinition, channel);
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
function createSettingsClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(settings_service_js_1.SettingsServiceDefinition, channel);
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
function createSystemClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(system_js_1.SystemServiceDefinition, channel);
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
function createUserClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(user_service_js_1.UserServiceDefinition, channel);
}
