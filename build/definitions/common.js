"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpStatus = exports.apiErrorCodes = void 0;
const apiErrorCodes = new Map([
    [400, 'request_invalid'],
    [404, 'resource_not_found'],
    [422, 'request_validation_error'],
    [500, 'internal'],
]);
exports.apiErrorCodes = apiErrorCodes;
var httpStatus;
(function (httpStatus) {
    httpStatus[httpStatus["ok"] = 200] = "ok";
    httpStatus[httpStatus["created"] = 201] = "created";
    httpStatus[httpStatus["accepted"] = 202] = "accepted";
    httpStatus[httpStatus["noContent"] = 204] = "noContent";
    httpStatus[httpStatus["resetContent"] = 205] = "resetContent";
    httpStatus[httpStatus["notModified"] = 304] = "notModified";
    httpStatus[httpStatus["badRequest"] = 400] = "badRequest";
    httpStatus[httpStatus["unauthorized"] = 401] = "unauthorized";
    httpStatus[httpStatus["forbidden"] = 403] = "forbidden";
    httpStatus[httpStatus["notFound"] = 404] = "notFound";
    httpStatus[httpStatus["methodNotAllowed"] = 405] = "methodNotAllowed";
    httpStatus[httpStatus["notAcceptable"] = 406] = "notAcceptable";
    httpStatus[httpStatus["conflict"] = 409] = "conflict";
    httpStatus[httpStatus["lengthRequired"] = 411] = "lengthRequired";
    httpStatus[httpStatus["preconditionFailed"] = 412] = "preconditionFailed";
    httpStatus[httpStatus["payloadTooLarge"] = 413] = "payloadTooLarge";
    httpStatus[httpStatus["uriTooLong"] = 414] = "uriTooLong";
    httpStatus[httpStatus["unsupportedMediaType"] = 415] = "unsupportedMediaType";
    httpStatus[httpStatus["unprocessableEntity"] = 422] = "unprocessableEntity";
    httpStatus[httpStatus["preconditionRequired"] = 428] = "preconditionRequired";
    httpStatus[httpStatus["tooManyRequests"] = 429] = "tooManyRequests";
    httpStatus[httpStatus["requestHeaderFieldsTooLarge"] = 431] = "requestHeaderFieldsTooLarge";
    httpStatus[httpStatus["internalServerError"] = 500] = "internalServerError";
    httpStatus[httpStatus["notImplemented"] = 501] = "notImplemented";
})(httpStatus || (exports.httpStatus = httpStatus = {}));
//# sourceMappingURL=common.js.map