"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManagementClient = exports.createAuthClient = exports.createAdminClient = void 0;
const nice_grpc_1 = require("nice-grpc");
const admin_1 = require("./generated/zitadel/admin");
const auth_1 = require("./generated/zitadel/auth");
const management_1 = require("./generated/zitadel/management");
/**
 * Create a new gRPC service client for the [Admin API](https://docs.zitadel.com/docs/apis/proto/admin) of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param grpcHeadersOverwrite Dictionary of grpc headers you want to modify or add.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the [Admin API](https://docs.zitadel.com/docs/apis/proto/admin) of ZITADEL.
 */
function createAdminClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(admin_1.AdminServiceDefinition, channel);
}
exports.createAdminClient = createAdminClient;
/**
 * Create a new gRPC service client for the [Auth API](https://docs.zitadel.com/docs/apis/proto/auth) of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param grpcHeadersOverwrite Dictionary of grpc headers you want to modify or add.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the [Auth API](https://docs.zitadel.com/docs/apis/proto/auth) of ZITADEL.
 */
function createAuthClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(auth_1.AuthServiceDefinition, channel);
}
exports.createAuthClient = createAuthClient;
/**
 * Create a new gRPC service client for the [Management API](https://docs.zitadel.com/docs/apis/proto/management) of ZITADEL.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your ZITADEL instance.
 * @param grpcHeadersOverwrite Dictionary of grpc headers you want to modify or add.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the [Management API](https://docs.zitadel.com/docs/apis/proto/management) of ZITADEL.
 */
function createManagementClient(apiEndpoint, grpcHeadersOverwrite, ...interceptors) {
    const channel = (0, nice_grpc_1.createChannel)(apiEndpoint, undefined, grpcHeadersOverwrite);
    let factory = (0, nice_grpc_1.createClientFactory)();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(management_1.ManagementServiceDefinition, channel);
}
exports.createManagementClient = createManagementClient;
