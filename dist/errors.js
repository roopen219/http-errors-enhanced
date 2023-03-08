import { HttpError } from './base.js';
export class BadRequestError extends HttpError {
    static status = 400;
    static error = 'BadRequest';
    static message = 'Bad Request';
    static phrase = 'Bad request.';
    constructor(message, properties){
        super(400, message, properties);
        this.name = 'BadRequestError';
    }
}
export class UnauthorizedError extends HttpError {
    static status = 401;
    static error = 'Unauthorized';
    static message = 'Unauthorized';
    static phrase = 'Unauthorized.';
    constructor(message, properties){
        super(401, message, properties);
        this.name = 'UnauthorizedError';
    }
}
export class PaymentRequiredError extends HttpError {
    static status = 402;
    static error = 'PaymentRequired';
    static message = 'Payment Required';
    static phrase = 'Payment required.';
    constructor(message, properties){
        super(402, message, properties);
        this.name = 'PaymentRequiredError';
    }
}
export class ForbiddenError extends HttpError {
    static status = 403;
    static error = 'Forbidden';
    static message = 'Forbidden';
    static phrase = 'Forbidden.';
    constructor(message, properties){
        super(403, message, properties);
        this.name = 'ForbiddenError';
    }
}
export class NotFoundError extends HttpError {
    static status = 404;
    static error = 'NotFound';
    static message = 'Not Found';
    static phrase = 'Not found.';
    constructor(message, properties){
        super(404, message, properties);
        this.name = 'NotFoundError';
    }
}
export class MethodNotAllowedError extends HttpError {
    static status = 405;
    static error = 'MethodNotAllowed';
    static message = 'Method Not Allowed';
    static phrase = 'Method not allowed.';
    constructor(message, properties){
        super(405, message, properties);
        this.name = 'MethodNotAllowedError';
    }
}
export class NotAcceptableError extends HttpError {
    static status = 406;
    static error = 'NotAcceptable';
    static message = 'Not Acceptable';
    static phrase = 'Not acceptable.';
    constructor(message, properties){
        super(406, message, properties);
        this.name = 'NotAcceptableError';
    }
}
export class ProxyAuthenticationRequiredError extends HttpError {
    static status = 407;
    static error = 'ProxyAuthenticationRequired';
    static message = 'Proxy Authentication Required';
    static phrase = 'Proxy authentication required.';
    constructor(message, properties){
        super(407, message, properties);
        this.name = 'ProxyAuthenticationRequiredError';
    }
}
export class RequestTimeoutError extends HttpError {
    static status = 408;
    static error = 'RequestTimeout';
    static message = 'Request Timeout';
    static phrase = 'Request timeout.';
    constructor(message, properties){
        super(408, message, properties);
        this.name = 'RequestTimeoutError';
    }
}
export class ConflictError extends HttpError {
    static status = 409;
    static error = 'Conflict';
    static message = 'Conflict';
    static phrase = 'Conflict.';
    constructor(message, properties){
        super(409, message, properties);
        this.name = 'ConflictError';
    }
}
export class GoneError extends HttpError {
    static status = 410;
    static error = 'Gone';
    static message = 'Gone';
    static phrase = 'Gone.';
    constructor(message, properties){
        super(410, message, properties);
        this.name = 'GoneError';
    }
}
export class LengthRequiredError extends HttpError {
    static status = 411;
    static error = 'LengthRequired';
    static message = 'Length Required';
    static phrase = 'Length required.';
    constructor(message, properties){
        super(411, message, properties);
        this.name = 'LengthRequiredError';
    }
}
export class PreconditionFailedError extends HttpError {
    static status = 412;
    static error = 'PreconditionFailed';
    static message = 'Precondition Failed';
    static phrase = 'Precondition failed.';
    constructor(message, properties){
        super(412, message, properties);
        this.name = 'PreconditionFailedError';
    }
}
export class PayloadTooLargeError extends HttpError {
    static status = 413;
    static error = 'PayloadTooLarge';
    static message = 'Payload Too Large';
    static phrase = 'Payload too large.';
    constructor(message, properties){
        super(413, message, properties);
        this.name = 'PayloadTooLargeError';
    }
}
export class URITooLongError extends HttpError {
    static status = 414;
    static error = 'URITooLong';
    static message = 'URI Too Long';
    static phrase = 'Uri too long.';
    constructor(message, properties){
        super(414, message, properties);
        this.name = 'URITooLongError';
    }
}
export class UnsupportedMediaTypeError extends HttpError {
    static status = 415;
    static error = 'UnsupportedMediaType';
    static message = 'Unsupported Media Type';
    static phrase = 'Unsupported media type.';
    constructor(message, properties){
        super(415, message, properties);
        this.name = 'UnsupportedMediaTypeError';
    }
}
export class RangeNotSatisfiableError extends HttpError {
    static status = 416;
    static error = 'RangeNotSatisfiable';
    static message = 'Range Not Satisfiable';
    static phrase = 'Range not satisfiable.';
    constructor(message, properties){
        super(416, message, properties);
        this.name = 'RangeNotSatisfiableError';
    }
}
export class ExpectationFailedError extends HttpError {
    static status = 417;
    static error = 'ExpectationFailed';
    static message = 'Expectation Failed';
    static phrase = 'Expectation failed.';
    constructor(message, properties){
        super(417, message, properties);
        this.name = 'ExpectationFailedError';
    }
}
export class ImaTeapotError extends HttpError {
    static status = 418;
    static error = 'ImaTeapot';
    static message = "I'm a Teapot";
    static phrase = "I'm a teapot.";
    constructor(message, properties){
        super(418, message, properties);
        this.name = 'ImaTeapotError';
    }
}
export class MisdirectedRequestError extends HttpError {
    static status = 421;
    static error = 'MisdirectedRequest';
    static message = 'Misdirected Request';
    static phrase = 'Misdirected request.';
    constructor(message, properties){
        super(421, message, properties);
        this.name = 'MisdirectedRequestError';
    }
}
export class UnprocessableEntityError extends HttpError {
    static status = 422;
    static error = 'UnprocessableEntity';
    static message = 'Unprocessable Entity';
    static phrase = 'Unprocessable entity.';
    constructor(message, properties){
        super(422, message, properties);
        this.name = 'UnprocessableEntityError';
    }
}
export class LockedError extends HttpError {
    static status = 423;
    static error = 'Locked';
    static message = 'Locked';
    static phrase = 'Locked.';
    constructor(message, properties){
        super(423, message, properties);
        this.name = 'LockedError';
    }
}
export class FailedDependencyError extends HttpError {
    static status = 424;
    static error = 'FailedDependency';
    static message = 'Failed Dependency';
    static phrase = 'Failed dependency.';
    constructor(message, properties){
        super(424, message, properties);
        this.name = 'FailedDependencyError';
    }
}
export class TooEarlyError extends HttpError {
    static status = 425;
    static error = 'TooEarly';
    static message = 'Too Early';
    static phrase = 'Too early.';
    constructor(message, properties){
        super(425, message, properties);
        this.name = 'TooEarlyError';
    }
}
export class UpgradeRequiredError extends HttpError {
    static status = 426;
    static error = 'UpgradeRequired';
    static message = 'Upgrade Required';
    static phrase = 'Upgrade required.';
    constructor(message, properties){
        super(426, message, properties);
        this.name = 'UpgradeRequiredError';
    }
}
export class PreconditionRequiredError extends HttpError {
    static status = 428;
    static error = 'PreconditionRequired';
    static message = 'Precondition Required';
    static phrase = 'Precondition required.';
    constructor(message, properties){
        super(428, message, properties);
        this.name = 'PreconditionRequiredError';
    }
}
export class TooManyRequestsError extends HttpError {
    static status = 429;
    static error = 'TooManyRequests';
    static message = 'Too Many Requests';
    static phrase = 'Too many requests.';
    constructor(message, properties){
        super(429, message, properties);
        this.name = 'TooManyRequestsError';
    }
}
export class RequestHeaderFieldsTooLargeError extends HttpError {
    static status = 431;
    static error = 'RequestHeaderFieldsTooLarge';
    static message = 'Request Header Fields Too Large';
    static phrase = 'Request header fields too large.';
    constructor(message, properties){
        super(431, message, properties);
        this.name = 'RequestHeaderFieldsTooLargeError';
    }
}
export class UnavailableForLegalReasonsError extends HttpError {
    static status = 451;
    static error = 'UnavailableForLegalReasons';
    static message = 'Unavailable For Legal Reasons';
    static phrase = 'Unavailable for legal reasons.';
    constructor(message, properties){
        super(451, message, properties);
        this.name = 'UnavailableForLegalReasonsError';
    }
}
export class InternalServerError extends HttpError {
    static status = 500;
    static error = 'InternalServerError';
    static message = 'Internal Server Error';
    static phrase = 'Internal server error.';
    constructor(message, properties){
        super(500, message, properties);
        this.name = 'InternalServerError';
    }
}
export class NotImplementedError extends HttpError {
    static status = 501;
    static error = 'NotImplemented';
    static message = 'Not Implemented';
    static phrase = 'Not implemented.';
    constructor(message, properties){
        super(501, message, properties);
        this.name = 'NotImplementedError';
    }
}
export class BadGatewayError extends HttpError {
    static status = 502;
    static error = 'BadGateway';
    static message = 'Bad Gateway';
    static phrase = 'Bad gateway.';
    constructor(message, properties){
        super(502, message, properties);
        this.name = 'BadGatewayError';
    }
}
export class ServiceUnavailableError extends HttpError {
    static status = 503;
    static error = 'ServiceUnavailable';
    static message = 'Service Unavailable';
    static phrase = 'Service unavailable.';
    constructor(message, properties){
        super(503, message, properties);
        this.name = 'ServiceUnavailableError';
    }
}
export class GatewayTimeoutError extends HttpError {
    static status = 504;
    static error = 'GatewayTimeout';
    static message = 'Gateway Timeout';
    static phrase = 'Gateway timeout.';
    constructor(message, properties){
        super(504, message, properties);
        this.name = 'GatewayTimeoutError';
    }
}
export class HTTPVersionNotSupportedError extends HttpError {
    static status = 505;
    static error = 'HTTPVersionNotSupported';
    static message = 'HTTP Version Not Supported';
    static phrase = 'Http version not supported.';
    constructor(message, properties){
        super(505, message, properties);
        this.name = 'HTTPVersionNotSupportedError';
    }
}
export class VariantAlsoNegotiatesError extends HttpError {
    static status = 506;
    static error = 'VariantAlsoNegotiates';
    static message = 'Variant Also Negotiates';
    static phrase = 'Variant also negotiates.';
    constructor(message, properties){
        super(506, message, properties);
        this.name = 'VariantAlsoNegotiatesError';
    }
}
export class InsufficientStorageError extends HttpError {
    static status = 507;
    static error = 'InsufficientStorage';
    static message = 'Insufficient Storage';
    static phrase = 'Insufficient storage.';
    constructor(message, properties){
        super(507, message, properties);
        this.name = 'InsufficientStorageError';
    }
}
export class LoopDetectedError extends HttpError {
    static status = 508;
    static error = 'LoopDetected';
    static message = 'Loop Detected';
    static phrase = 'Loop detected.';
    constructor(message, properties){
        super(508, message, properties);
        this.name = 'LoopDetectedError';
    }
}
export class BandwidthLimitExceededError extends HttpError {
    static status = 509;
    static error = 'BandwidthLimitExceeded';
    static message = 'Bandwidth Limit Exceeded';
    static phrase = 'Bandwidth limit exceeded.';
    constructor(message, properties){
        super(509, message, properties);
        this.name = 'BandwidthLimitExceededError';
    }
}
export class NotExtendedError extends HttpError {
    static status = 510;
    static error = 'NotExtended';
    static message = 'Not Extended';
    static phrase = 'Not extended.';
    constructor(message, properties){
        super(510, message, properties);
        this.name = 'NotExtendedError';
    }
}
export class NetworkAuthenticationRequiredError extends HttpError {
    static status = 511;
    static error = 'NetworkAuthenticationRequired';
    static message = 'Network Authentication Required';
    static phrase = 'Network authentication required.';
    constructor(message, properties){
        super(511, message, properties);
        this.name = 'NetworkAuthenticationRequiredError';
    }
}
