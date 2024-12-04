"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const jose_1 = require("jose");
const node_rsa_1 = __importDefault(require("node-rsa"));
/**
 * Application for [ZITADEL](https://zitadel.ch/). An application is an OIDC application type
 * that allows a backend (for example an API for some single page application) to
 * check if sent credentials from a client are valid or not.
 *
 * When using ZITADEL to authenticate a user against some backend, the application
 * provides the means to access the introspection endpoint of ZITADEL.
 * It uses OIDC Introspection, defined in [RFC7662](https://tools.ietf.org/html/rfc7662).
 *
 * To create an application json, head over to your ZITADEL console
 * and execute the following steps:
 * - Create a project
 * - Create an API application
 * - Create a "key" inside the application to create and download the JWT profile
 */
class Application {
    appId;
    clientId;
    keyId;
    key;
    /**
     * The type of the object.
     */
    static type = 'application';
    /**
     * Create a new application
     *
     * @param appId The ID of the application.
     * @param clientId The client ID of the application.
     * @param keyId The ID of the RSA key.
     * @param key The private RSA key of the application. Used to sign the JWT.
     *
     * @throws {Error} If the clientId is not defined.
     * @throws {Error} If the keyId is not defined.
     * @throws {Error} If the key is not defined.
     */
    constructor(appId, clientId, keyId, key) {
        this.appId = appId;
        this.clientId = clientId;
        this.keyId = keyId;
        this.key = key;
        if (!appId) {
            throw new Error('appId is required');
        }
        if (!clientId) {
            throw new Error('clientId is required');
        }
        if (!keyId) {
            throw new Error('keyId is required');
        }
        if (!key) {
            throw new Error('key is required');
        }
    }
    /**
     * Create an application from a JSON object.
     *
     * @param json The JSON object.
     * @returns An application.
     *
     * @throws {Error} If the constructor throws an error.
     * @throws {Error} If the passed JSON cannot be properly destructed.
     */
    static fromJson({ appId, clientId, key, keyId }) {
        return new Application(appId, clientId, keyId, key);
    }
    /**
     * Create an application from a JSON string.
     * The string is parsed using `JSON.parse`.
     *
     * @param jsonString The JSON string.
     * @returns An application.
     *
     * @throws {Error} If the constructor throws an error.
     * @throws {Error} If the passed JSON cannot be properly parsed.
     * @throws {Error} If the passed JSON cannot be properly destructed.
     */
    static fromJsonString(jsonString) {
        return Application.fromJson(JSON.parse(jsonString));
    }
    /**
     * Create a JSON object from the application.
     *
     * @returns A JSON object.
     */
    toJson() {
        return {
            type: Application.type,
            appId: this.appId,
            clientId: this.clientId,
            keyId: this.keyId,
            key: this.key,
        };
    }
    /**
     * Create and sign a JWT token for the given audience.
     *
     * The JWT is signed by the RSA key of the application.
     * The JWT is valid for one hour.
     *
     * @param audience The audience to use in the JWT.
     * @returns A signed JWT.
     */
    async getSignedJwt(audience) {
        const rsa = new node_rsa_1.default(this.key);
        const key = await (0, jose_1.importPKCS8)(rsa.exportKey('pkcs8-private-pem'), 'RSA256');
        return await new jose_1.SignJWT({})
            .setProtectedHeader({ kid: this.keyId, alg: 'RS256' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .setAudience(audience)
            .setIssuer(this.clientId)
            .setSubject(this.clientId)
            .sign(key);
    }
}
exports.Application = Application;
