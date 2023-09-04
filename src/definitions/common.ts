type logLevelString = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

/**
 * Used for logging
 */
const apiErrorCodes: Map<number, string> = new Map<number, string>([
    [400, 'request_invalid'],
    [404, 'resource_not_found'],
    [422, 'request_validation_error'],
    [500, 'internal'],
]);

/**
 * API response codes
 */
enum httpStatus {
    ok = 200,
    created = 201,
    accepted = 202,
    noContent = 204,
    resetContent = 205,
    notModified = 304,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    methodNotAllowed = 405,
    notAcceptable = 406,
    conflict = 409,
    lengthRequired = 411,
    preconditionFailed = 412,
    payloadTooLarge = 413,
    uriTooLong = 414,
    unsupportedMediaType = 415,
    unprocessableEntity = 422,
    preconditionRequired = 428,
    tooManyRequests = 429,
    requestHeaderFieldsTooLarge = 431,
    internalServerError = 500,
    notImplemented = 501,
}

export { logLevelString, apiErrorCodes, httpStatus };
