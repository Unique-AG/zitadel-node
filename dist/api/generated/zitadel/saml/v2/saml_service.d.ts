import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Details } from "../../object/v2/object.js";
import { AuthorizationError, SAMLRequest } from "./authorization.js";
export declare const protobufPackage = "zitadel.saml.v2";
export interface GetSAMLRequestRequest {
    /** ID of the SAML Request, as obtained from the redirect URL. */
    samlRequestId: string;
}
export interface GetSAMLRequestResponse {
    samlRequest: SAMLRequest | undefined;
}
export interface CreateResponseRequest {
    /** ID of the SAML Request. */
    samlRequestId: string;
    /** The session of the authenticated user, to finalize the authorization request. */
    session?: Session | undefined;
    /** Set this field when the authorization flow failed. It creates a response depending on the SP, with the error details set. */
    error?: AuthorizationError | undefined;
}
export interface Session {
    /** ID of the session, used to login the user. Connects the session to the SAML Request. */
    sessionId: string;
    /** Token to verify the session is valid. */
    sessionToken: string;
}
export interface CreateResponseResponse {
    details: Details | undefined;
    /** URL including the Assertion Consumer Service where the user should be redirected or has to call per POST, depending on the binding. Contains details for the application to obtain the response on success, or error details on failure. Note that this field must be treated as credentials, as the contained SAMLResponse or code can be used on behalve of the user. */
    url: string;
    /** Set if the binding is Redirect-Binding, where the user can directly be redirected to the application, using a \"302 FOUND\" status to the URL. */
    redirect?: RedirectResponse | undefined;
    /** Set if the binding is POST-Binding, where the application expects to be called per HTTP POST with the SAMLResponse and RelayState in the form body. */
    post?: PostResponse | undefined;
}
export interface RedirectResponse {
}
export interface PostResponse {
    /** The SAML RelaySate, that needs to be returned to the application to match the response to the request. */
    relayState: string;
    /** The SAML Response, that needs to be returned to the application to complete the SAML flow. */
    samlResponse: string;
}
export declare const GetSAMLRequestRequest: MessageFns<GetSAMLRequestRequest>;
export declare const GetSAMLRequestResponse: MessageFns<GetSAMLRequestResponse>;
export declare const CreateResponseRequest: MessageFns<CreateResponseRequest>;
export declare const Session: MessageFns<Session>;
export declare const CreateResponseResponse: MessageFns<CreateResponseResponse>;
export declare const RedirectResponse: MessageFns<RedirectResponse>;
export declare const PostResponse: MessageFns<PostResponse>;
export type SAMLServiceDefinition = typeof SAMLServiceDefinition;
export declare const SAMLServiceDefinition: {
    readonly name: "SAMLService";
    readonly fullName: "zitadel.saml.v2.SAMLService";
    readonly methods: {
        /**
         * Get SAML Request
         *
         * Get SAML Request details by ID. Returns details that are parsed from the application's SAML Request.
         *
         * Required permissions:
         *   - `session.read`
         */
        readonly getSAMLRequest: {
            readonly name: "GetSAMLRequest";
            readonly requestType: MessageFns<GetSAMLRequestRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSAMLRequestResponse>;
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
         * Create Response
         *
         * Finalize a SAML Request and get the response definition for success or failure.
         * The response must be handled as per the SAML definition to inform the application about the success or failure.
         * On success, the response contains details for the application to obtain the SAMLResponse.
         * This method can only be called once for an SAML request.
         *
         * Required permissions:
         *   - `session.link`
         */
        readonly createResponse: {
            readonly name: "CreateResponse";
            readonly requestType: MessageFns<CreateResponseRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateResponseResponse>;
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
export interface SAMLServiceImplementation<CallContextExt = {}> {
    /**
     * Get SAML Request
     *
     * Get SAML Request details by ID. Returns details that are parsed from the application's SAML Request.
     *
     * Required permissions:
     *   - `session.read`
     */
    getSAMLRequest(request: GetSAMLRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSAMLRequestResponse>>;
    /**
     * Create Response
     *
     * Finalize a SAML Request and get the response definition for success or failure.
     * The response must be handled as per the SAML definition to inform the application about the success or failure.
     * On success, the response contains details for the application to obtain the SAMLResponse.
     * This method can only be called once for an SAML request.
     *
     * Required permissions:
     *   - `session.link`
     */
    createResponse(request: CreateResponseRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateResponseResponse>>;
}
export interface SAMLServiceClient<CallOptionsExt = {}> {
    /**
     * Get SAML Request
     *
     * Get SAML Request details by ID. Returns details that are parsed from the application's SAML Request.
     *
     * Required permissions:
     *   - `session.read`
     */
    getSAMLRequest(request: DeepPartial<GetSAMLRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSAMLRequestResponse>;
    /**
     * Create Response
     *
     * Finalize a SAML Request and get the response definition for success or failure.
     * The response must be handled as per the SAML definition to inform the application about the success or failure.
     * On success, the response contains details for the application to obtain the SAMLResponse.
     * This method can only be called once for an SAML request.
     *
     * Required permissions:
     *   - `session.link`
     */
    createResponse(request: DeepPartial<CreateResponseRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateResponseResponse>;
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
