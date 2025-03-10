import { codesByIdentifier, identifierByCodes, messagesByCodes, phrasesByCodes } from './statuses.js';
import { addAdditionalProperties, serializeError, upperFirst } from './utils.js';
export class HttpError extends Error {
    static standardErrorPrefix = 'HTTP_ERROR_';
    constructor(status, message, properties){
        // Normalize arguments
        if (typeof message === 'object') {
            properties = message;
            message = properties.message || '';
        }
        if (!properties) {
            properties = {};
        }
        // Resolve status when string
        if (typeof status === 'string') {
            status = codesByIdentifier[upperFirst(status)];
        }
        // Constraint status to be a valid HTTP error
        if (typeof status !== 'number' || status < 400 || status > 599) {
            status = 500;
        }
        // Assign basic properties
        super(message);
        this.status = this.statusCode = status;
        this.error = messagesByCodes[this.status];
        this.errorPhrase = phrasesByCodes[this.status];
        this.headers = properties.headers ?? {};
        this.stack = properties.stack || this.stack;
        // Assign serialization properties
        const code = identifierByCodes[this.status] || this.status.toString();
        this.name = 'HttpError';
        this.code = properties.code || `${HttpError.standardErrorPrefix}${code.replaceAll(/([a-z])([A-Z])/g, '$1_$2').toUpperCase()}`;
        // Assign helpers properties
        this.isClientError = this.status < 500;
        this.isServerError = !this.isClientError;
        this.statusClass = this.isClientError ? 400 : 500;
        this.expose = properties.expose ?? this.isClientError;
        // This is needed to ensure http-errors isHttpError detects duck typing correctly
        if (typeof this.expose !== 'boolean') {
            this.expose = false;
        }
        // Assign additional properties - No overwriting is allowed
        if (typeof properties === 'object') {
            addAdditionalProperties(this, properties);
        }
        // Configure properties
        Object.defineProperties(this, {
            status: {
                enumerable: false
            },
            code: {
                enumerable: !this.code.startsWith(HttpError.standardErrorPrefix)
            },
            errorPhrase: {
                enumerable: false
            },
            headers: {
                enumerable: false
            },
            name: {
                enumerable: false
            },
            isClientError: {
                enumerable: false
            },
            isServerError: {
                enumerable: false
            },
            statusClass: {
                enumerable: false
            },
            expose: {
                enumerable: false
            }
        });
    }
    serialize(extended = false, omitStack = false) {
        if (!extended) {
            return {
                statusCode: this.statusCode,
                error: this.error,
                message: this.message
            };
        }
        return {
            ...serializeError(this, omitStack),
            message: this.message
        };
    }
}
export function createError(status, message, properties) {
    return new HttpError(status, message, properties);
}
export function isHttpError(error) {
    if (typeof error !== 'object' || !error) {
        return false;
    } else if (error instanceof HttpError) {
        return true;
    }
    return typeof error.status === 'number' && error.status === error.statusCode && typeof error.expose === 'boolean';
}
