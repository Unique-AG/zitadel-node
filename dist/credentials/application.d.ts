type ApplicationJson = {
    appId: string;
    clientId: string;
    keyId: string;
    key: string;
};
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
export declare class Application {
    readonly appId: string;
    readonly clientId: string;
    readonly keyId: string;
    readonly key: string;
    /**
     * The type of the object.
     */
    static readonly type = "application";
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
    constructor(appId: string, clientId: string, keyId: string, key: string);
    /**
     * Create an application from a JSON object.
     *
     * @param json The JSON object.
     * @returns An application.
     *
     * @throws {Error} If the constructor throws an error.
     * @throws {Error} If the passed JSON cannot be properly destructed.
     */
    static fromJson({ appId, clientId, key, keyId }: ApplicationJson): Application;
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
    static fromJsonString(jsonString: string): Application;
    /**
     * Create a JSON object from the application.
     *
     * @returns A JSON object.
     */
    toJson(): ApplicationJson & {
        type: typeof Application.type;
    };
    /**
     * Create and sign a JWT token for the given audience.
     *
     * The JWT is signed by the RSA key of the application.
     * The JWT is valid for one hour.
     *
     * @param audience The audience to use in the JWT.
     * @returns A signed JWT.
     */
    getSignedJwt(audience: string): Promise<string>;
}
export {};
