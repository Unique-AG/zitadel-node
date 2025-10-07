"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAccount = void 0;
const jose_1 = require("jose");
const node_rsa_1 = __importDefault(require("node-rsa"));
const openid_client_1 = require("openid-client");
/**
 * A service account for [ZITADEL](https://zitadel.ch/). The service
 * account can be loaded from a valid JSON string or from a file containing the JSON string.
 * The account is used to communicate with the ZITADEL API and may serve as access token
 * provider for a gRPC service client.
 *
 * The service account can be used with the provided access rights in ZITADEL. If you
 * want to use the ZITADEL API itself (for example to manage organizations),
 * you need to authenticate with [AuthenticationOptions.apiAccess] set to `true`.
 *
 * To create a service account json, head over to your ZITADEL console
 * and execute the following steps:
 * - create a `Service User` in your organization
 * - Give the service user the relevant authorization (e.g. ORG_OWNER or access to a specific project)
 * - Create a "key" in the account detail page of the service user and download it
 */
class ServiceAccount {
    userId;
    keyId;
    key;
    /**
     * The type of the object.
     */
    static type = 'serviceaccount';
    /**
     * Create a new service account
     *
     * @param userId The user ID of the service account.
     * @param keyId The ID of the RSA key.
     * @param key The private RSA key of the service account. Used to sign the JWT.
     *
     * @throws {Error} If the userId is not defined.
     * @throws {Error} If the keyId is not defined.
     * @throws {Error} If the key is not defined.
     */
    constructor(userId, keyId, key) {
        this.userId = userId;
        this.keyId = keyId;
        this.key = key;
        if (!userId) {
            throw new Error('userId is required');
        }
        if (!keyId) {
            throw new Error('keyId is required');
        }
        if (!key) {
            throw new Error('key is required');
        }
    }
    /**
     * Create an service account from a JSON object.
     *
     * @param json The JSON object.
     * @returns A service account.
     *
     * @throws {Error} If the constructor throws an error.
     * @throws {Error} If the passed JSON cannot be properly destructed.
     */
    static fromJson({ userId, key, keyId }) {
        return new ServiceAccount(userId, keyId, key);
    }
    /**
     * Create an service account from a JSON string.
     * The string is parsed using `JSON.parse`.
     *
     * @param jsonString The JSON string.
     * @returns A service account.
     *
     * @throws {Error} If the constructor throws an error.
     * @throws {Error} If the passed JSON cannot be properly parsed.
     * @throws {Error} If the passed JSON cannot be properly destructed.
     */
    static fromJsonString(jsonString) {
        return ServiceAccount.fromJson(JSON.parse(jsonString));
    }
    /**
     * Create a JSON object from the application.
     *
     * @returns A JSON object.
     */
    toJson() {
        return {
            type: ServiceAccount.type,
            userId: this.userId,
            keyId: this.keyId,
            key: this.key,
        };
    }
    /**
     * Authenticates the service account against the provided audience (or issuer) to
     * fetch an access token. To authenticate with special options, use the
     * options parameter.
     *
     * The function returns an access token that can be sent
     * to authenticate any request as the given service account. The access token
     * is valid for 60 minutes.
     *
     * @param audience The audience to authenticate against.
     * @param options The options to use for authentication.
     *
     * @returns An access token that is valid for 60 minutes.
     *
     * @example Just authenticate the service account against ZITADEL
     * ```typescript
     * const sa = ServiceAccount.fromJson(serviceAccountJson);
     * const token = await sa.authenticate('https://issuer.zitadel.ch');
     * ```
     *
     * @example Authenticate the service account against ZITADEL with ZITADEL API access
     * ```typescript
     * const sa = ServiceAccount.fromJson(serviceAccountJson);
     * const token = await sa.authenticate('https://issuer.zitadel.ch', { apiAccess: true });
     * ```
     */
    async authenticate(audience, options) {
        const { default: axios } = await import('axios');
        const issuer = await openid_client_1.Issuer.discover(audience);
        const tokenEndpoint = issuer.metadata.token_endpoint ?? 'N/A';
        const jwt = await this.getSignedJwt(audience);
        const response = await axios.post(tokenEndpoint, new URLSearchParams({
            assertion: jwt,
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            scope: createScopes(options ?? {}),
        }));
        if (response.status > 299) {
            throw new Error(`Authentication failed with status ${response.status}: ${response.statusText}.`);
        }
        if (!response.data.access_token) {
            throw new Error(`Authentication failed. No access token returned.`);
        }
        return response.data.access_token;
    }
    async getSignedJwt(audience) {
        const rsa = new node_rsa_1.default(this.key);
        const key = await (0, jose_1.importPKCS8)(rsa.exportKey('pkcs8-private-pem'), 'RSA256');
        return await new jose_1.SignJWT({})
            .setProtectedHeader({ kid: this.keyId, alg: 'RS256' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .setAudience(audience)
            .setIssuer(this.userId)
            .setSubject(this.userId)
            .sign(key);
    }
}
exports.ServiceAccount = ServiceAccount;
const createScopes = ({ additionalScopes = [], apiAccess = false, projectAudiences = [], roles = [], }) => [
    'openid',
    apiAccess ? 'urn:zitadel:iam:org:project:id:zitadel:aud' : undefined,
    ...additionalScopes,
    ...roles.map((r) => `urn:zitadel:iam:org:project:role:${r}`),
    ...projectAudiences.map((a) => `urn:zitadel:iam:org:project:id:${a}:aud`),
]
    .filter(Boolean)
    .join(' ');
