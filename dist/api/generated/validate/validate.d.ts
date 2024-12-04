import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../google/protobuf/duration.js";
export declare const protobufPackage = "validate";
/** WellKnownRegex contain some well-known patterns. */
export declare enum KnownRegex {
    UNKNOWN = 0,
    /** HTTP_HEADER_NAME - HTTP header name as defined by RFC 7230. */
    HTTP_HEADER_NAME = 1,
    /** HTTP_HEADER_VALUE - HTTP header value as defined by RFC 7230. */
    HTTP_HEADER_VALUE = 2,
    UNRECOGNIZED = -1
}
export declare function knownRegexFromJSON(object: any): KnownRegex;
export declare function knownRegexToJSON(object: KnownRegex): string;
/**
 * FieldRules encapsulates the rules for each type of field. Depending on the
 * field, the correct set should be used to ensure proper validations.
 */
export interface FieldRules {
    message?: MessageRules | undefined;
    /** Scalar Field Types */
    float?: FloatRules | undefined;
    double?: DoubleRules | undefined;
    int32?: Int32Rules | undefined;
    int64?: Int64Rules | undefined;
    uint32?: UInt32Rules | undefined;
    uint64?: UInt64Rules | undefined;
    sint32?: SInt32Rules | undefined;
    sint64?: SInt64Rules | undefined;
    fixed32?: Fixed32Rules | undefined;
    fixed64?: Fixed64Rules | undefined;
    sfixed32?: SFixed32Rules | undefined;
    sfixed64?: SFixed64Rules | undefined;
    bool?: BoolRules | undefined;
    string?: StringRules | undefined;
    bytes?: BytesRules | undefined;
    /** Complex Field Types */
    enum?: EnumRules | undefined;
    repeated?: RepeatedRules | undefined;
    map?: MapRules | undefined;
    /** Well-Known Field Types */
    any?: AnyRules | undefined;
    duration?: DurationRules | undefined;
    timestamp?: TimestampRules | undefined;
}
/** FloatRules describes the constraints applied to `float` values */
export interface FloatRules {
    /** Const specifies that this field must be exactly the specified value */
    const?: number | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: number | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: number | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: number | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: number | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** DoubleRules describes the constraints applied to `double` values */
export interface DoubleRules {
    /** Const specifies that this field must be exactly the specified value */
    const?: number | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: number | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: number | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: number | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: number | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** Int32Rules describes the constraints applied to `int32` values */
export interface Int32Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: number | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: number | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: number | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: number | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: number | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** Int64Rules describes the constraints applied to `int64` values */
export interface Int64Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: Long | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: Long | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: Long | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: Long | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: Long | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: Long[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: Long[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** UInt32Rules describes the constraints applied to `uint32` values */
export interface UInt32Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: number | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: number | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: number | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: number | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: number | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** UInt64Rules describes the constraints applied to `uint64` values */
export interface UInt64Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: Long | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: Long | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: Long | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: Long | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: Long | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: Long[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: Long[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** SInt32Rules describes the constraints applied to `sint32` values */
export interface SInt32Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: number | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: number | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: number | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: number | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: number | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** SInt64Rules describes the constraints applied to `sint64` values */
export interface SInt64Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: Long | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: Long | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: Long | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: Long | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: Long | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: Long[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: Long[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** Fixed32Rules describes the constraints applied to `fixed32` values */
export interface Fixed32Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: number | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: number | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: number | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: number | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: number | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** Fixed64Rules describes the constraints applied to `fixed64` values */
export interface Fixed64Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: Long | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: Long | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: Long | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: Long | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: Long | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: Long[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: Long[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** SFixed32Rules describes the constraints applied to `sfixed32` values */
export interface SFixed32Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: number | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: number | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: number | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: number | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: number | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** SFixed64Rules describes the constraints applied to `sfixed64` values */
export interface SFixed64Rules {
    /** Const specifies that this field must be exactly the specified value */
    const?: Long | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: Long | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     */
    lte?: Long | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     */
    gt?: Long | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     */
    gte?: Long | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: Long[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: Long[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** BoolRules describes the constraints applied to `bool` values */
export interface BoolRules {
    /** Const specifies that this field must be exactly the specified value */
    const?: boolean | undefined;
}
/** StringRules describe the constraints applied to `string` values */
export interface StringRules {
    /** Const specifies that this field must be exactly the specified value */
    const?: string | undefined;
    /**
     * Len specifies that this field must be the specified number of
     * characters (Unicode code points). Note that the number of
     * characters may differ from the number of bytes in the string.
     */
    len?: Long | undefined;
    /**
     * MinLen specifies that this field must be the specified number of
     * characters (Unicode code points) at a minimum. Note that the number of
     * characters may differ from the number of bytes in the string.
     */
    minLen?: Long | undefined;
    /**
     * MaxLen specifies that this field must be the specified number of
     * characters (Unicode code points) at a maximum. Note that the number of
     * characters may differ from the number of bytes in the string.
     */
    maxLen?: Long | undefined;
    /** LenBytes specifies that this field must be the specified number of bytes */
    lenBytes?: Long | undefined;
    /**
     * MinBytes specifies that this field must be the specified number of bytes
     * at a minimum
     */
    minBytes?: Long | undefined;
    /**
     * MaxBytes specifies that this field must be the specified number of bytes
     * at a maximum
     */
    maxBytes?: Long | undefined;
    /**
     * Pattern specifes that this field must match against the specified
     * regular expression (RE2 syntax). The included expression should elide
     * any delimiters.
     */
    pattern?: string | undefined;
    /**
     * Prefix specifies that this field must have the specified substring at
     * the beginning of the string.
     */
    prefix?: string | undefined;
    /**
     * Suffix specifies that this field must have the specified substring at
     * the end of the string.
     */
    suffix?: string | undefined;
    /**
     * Contains specifies that this field must have the specified substring
     * anywhere in the string.
     */
    contains?: string | undefined;
    /**
     * NotContains specifies that this field cannot have the specified substring
     * anywhere in the string.
     */
    notContains?: string | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: string[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: string[];
    /**
     * Email specifies that the field must be a valid email address as
     * defined by RFC 5322
     */
    email?: boolean | undefined;
    /**
     * Hostname specifies that the field must be a valid hostname as
     * defined by RFC 1034. This constraint does not support
     * internationalized domain names (IDNs).
     */
    hostname?: boolean | undefined;
    /**
     * Ip specifies that the field must be a valid IP (v4 or v6) address.
     * Valid IPv6 addresses should not include surrounding square brackets.
     */
    ip?: boolean | undefined;
    /** Ipv4 specifies that the field must be a valid IPv4 address. */
    ipv4?: boolean | undefined;
    /**
     * Ipv6 specifies that the field must be a valid IPv6 address. Valid
     * IPv6 addresses should not include surrounding square brackets.
     */
    ipv6?: boolean | undefined;
    /**
     * Uri specifies that the field must be a valid, absolute URI as defined
     * by RFC 3986
     */
    uri?: boolean | undefined;
    /**
     * UriRef specifies that the field must be a valid URI as defined by RFC
     * 3986 and may be relative or absolute.
     */
    uriRef?: boolean | undefined;
    /**
     * Address specifies that the field must be either a valid hostname as
     * defined by RFC 1034 (which does not support internationalized domain
     * names or IDNs), or it can be a valid IP (v4 or v6).
     */
    address?: boolean | undefined;
    /**
     * Uuid specifies that the field must be a valid UUID as defined by
     * RFC 4122
     */
    uuid?: boolean | undefined;
    /** WellKnownRegex specifies a common well known pattern defined as a regex. */
    wellKnownRegex?: KnownRegex | undefined;
    /**
     * This applies to regexes HTTP_HEADER_NAME and HTTP_HEADER_VALUE to enable
     * strict header validation.
     * By default, this is true, and HTTP header validations are RFC-compliant.
     * Setting to false will enable a looser validations that only disallows
     * \r\n\0 characters, which can be used to bypass header matching rules.
     */
    strict?: boolean | undefined;
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** BytesRules describe the constraints applied to `bytes` values */
export interface BytesRules {
    /** Const specifies that this field must be exactly the specified value */
    const?: Buffer | undefined;
    /** Len specifies that this field must be the specified number of bytes */
    len?: Long | undefined;
    /**
     * MinLen specifies that this field must be the specified number of bytes
     * at a minimum
     */
    minLen?: Long | undefined;
    /**
     * MaxLen specifies that this field must be the specified number of bytes
     * at a maximum
     */
    maxLen?: Long | undefined;
    /**
     * Pattern specifes that this field must match against the specified
     * regular expression (RE2 syntax). The included expression should elide
     * any delimiters.
     */
    pattern?: string | undefined;
    /**
     * Prefix specifies that this field must have the specified bytes at the
     * beginning of the string.
     */
    prefix?: Buffer | undefined;
    /**
     * Suffix specifies that this field must have the specified bytes at the
     * end of the string.
     */
    suffix?: Buffer | undefined;
    /**
     * Contains specifies that this field must have the specified bytes
     * anywhere in the string.
     */
    contains?: Buffer | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: Buffer[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: Buffer[];
    /**
     * Ip specifies that the field must be a valid IP (v4 or v6) address in
     * byte format
     */
    ip?: boolean | undefined;
    /**
     * Ipv4 specifies that the field must be a valid IPv4 address in byte
     * format
     */
    ipv4?: boolean | undefined;
    /**
     * Ipv6 specifies that the field must be a valid IPv6 address in byte
     * format
     */
    ipv6?: boolean | undefined;
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** EnumRules describe the constraints applied to enum values */
export interface EnumRules {
    /** Const specifies that this field must be exactly the specified value */
    const?: number | undefined;
    /**
     * DefinedOnly specifies that this field must be only one of the defined
     * values for this enum, failing on any undefined value.
     */
    definedOnly?: boolean | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: number[];
}
/**
 * MessageRules describe the constraints applied to embedded message values.
 * For message-type fields, validation is performed recursively.
 */
export interface MessageRules {
    /**
     * Skip specifies that the validation rules of this field should not be
     * evaluated
     */
    skip?: boolean | undefined;
    /** Required specifies that this field must be set */
    required?: boolean | undefined;
}
/** RepeatedRules describe the constraints applied to `repeated` values */
export interface RepeatedRules {
    /**
     * MinItems specifies that this field must have the specified number of
     * items at a minimum
     */
    minItems?: Long | undefined;
    /**
     * MaxItems specifies that this field must have the specified number of
     * items at a maximum
     */
    maxItems?: Long | undefined;
    /**
     * Unique specifies that all elements in this field must be unique. This
     * contraint is only applicable to scalar and enum types (messages are not
     * supported).
     */
    unique?: boolean | undefined;
    /**
     * Items specifies the contraints to be applied to each item in the field.
     * Repeated message fields will still execute validation against each item
     * unless skip is specified here.
     */
    items?: FieldRules | undefined;
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/** MapRules describe the constraints applied to `map` values */
export interface MapRules {
    /**
     * MinPairs specifies that this field must have the specified number of
     * KVs at a minimum
     */
    minPairs?: Long | undefined;
    /**
     * MaxPairs specifies that this field must have the specified number of
     * KVs at a maximum
     */
    maxPairs?: Long | undefined;
    /**
     * NoSparse specifies values in this field cannot be unset. This only
     * applies to map's with message value types.
     */
    noSparse?: boolean | undefined;
    /** Keys specifies the constraints to be applied to each key in the field. */
    keys?: FieldRules | undefined;
    /**
     * Values specifies the constraints to be applied to the value of each key
     * in the field. Message values will still have their validations evaluated
     * unless skip is specified here.
     */
    values?: FieldRules | undefined;
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | undefined;
}
/**
 * AnyRules describe constraints applied exclusively to the
 * `google.protobuf.Any` well-known type
 */
export interface AnyRules {
    /** Required specifies that this field must be set */
    required?: boolean | undefined;
    /**
     * In specifies that this field's `type_url` must be equal to one of the
     * specified values.
     */
    in: string[];
    /**
     * NotIn specifies that this field's `type_url` must not be equal to any of
     * the specified values.
     */
    notIn: string[];
}
/**
 * DurationRules describe the constraints applied exclusively to the
 * `google.protobuf.Duration` well-known type
 */
export interface DurationRules {
    /** Required specifies that this field must be set */
    required?: boolean | undefined;
    /** Const specifies that this field must be exactly the specified value */
    const?: Duration | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: Duration | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * inclusive
     */
    lte?: Duration | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive
     */
    gt?: Duration | undefined;
    /**
     * Gte specifies that this field must be greater than the specified value,
     * inclusive
     */
    gte?: Duration | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     */
    in: Duration[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     */
    notIn: Duration[];
}
/**
 * TimestampRules describe the constraints applied exclusively to the
 * `google.protobuf.Timestamp` well-known type
 */
export interface TimestampRules {
    /** Required specifies that this field must be set */
    required?: boolean | undefined;
    /** Const specifies that this field must be exactly the specified value */
    const?: Date | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     */
    lt?: Date | undefined;
    /**
     * Lte specifies that this field must be less than the specified value,
     * inclusive
     */
    lte?: Date | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive
     */
    gt?: Date | undefined;
    /**
     * Gte specifies that this field must be greater than the specified value,
     * inclusive
     */
    gte?: Date | undefined;
    /**
     * LtNow specifies that this must be less than the current time. LtNow
     * can only be used with the Within rule.
     */
    ltNow?: boolean | undefined;
    /**
     * GtNow specifies that this must be greater than the current time. GtNow
     * can only be used with the Within rule.
     */
    gtNow?: boolean | undefined;
    /**
     * Within specifies that this field must be within this duration of the
     * current time. This constraint can be used alone or with the LtNow and
     * GtNow rules.
     */
    within?: Duration | undefined;
}
export declare const FieldRules: MessageFns<FieldRules>;
export declare const FloatRules: MessageFns<FloatRules>;
export declare const DoubleRules: MessageFns<DoubleRules>;
export declare const Int32Rules: MessageFns<Int32Rules>;
export declare const Int64Rules: MessageFns<Int64Rules>;
export declare const UInt32Rules: MessageFns<UInt32Rules>;
export declare const UInt64Rules: MessageFns<UInt64Rules>;
export declare const SInt32Rules: MessageFns<SInt32Rules>;
export declare const SInt64Rules: MessageFns<SInt64Rules>;
export declare const Fixed32Rules: MessageFns<Fixed32Rules>;
export declare const Fixed64Rules: MessageFns<Fixed64Rules>;
export declare const SFixed32Rules: MessageFns<SFixed32Rules>;
export declare const SFixed64Rules: MessageFns<SFixed64Rules>;
export declare const BoolRules: MessageFns<BoolRules>;
export declare const StringRules: MessageFns<StringRules>;
export declare const BytesRules: MessageFns<BytesRules>;
export declare const EnumRules: MessageFns<EnumRules>;
export declare const MessageRules: MessageFns<MessageRules>;
export declare const RepeatedRules: MessageFns<RepeatedRules>;
export declare const MapRules: MessageFns<MapRules>;
export declare const AnyRules: MessageFns<AnyRules>;
export declare const DurationRules: MessageFns<DurationRules>;
export declare const TimestampRules: MessageFns<TimestampRules>;
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
