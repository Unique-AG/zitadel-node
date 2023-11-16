import { ChannelOptions, ClientMiddleware } from 'nice-grpc';
import { AdminServiceClient } from './generated/zitadel/admin';
import { AuthServiceClient } from './generated/zitadel/auth';
import { ManagementServiceClient } from './generated/zitadel/management';
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
export declare function createAdminClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): AdminServiceClient;
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
export declare function createAuthClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): AuthServiceClient;
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
export declare function createManagementClient(apiEndpoint: string, grpcHeadersOverwrite?: Partial<ChannelOptions>, ...interceptors: ClientMiddleware[]): ManagementServiceClient;
