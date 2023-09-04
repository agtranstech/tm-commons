"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.ValidationError = exports.ConflictError = exports.NotAcceptableError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = void 0;
const api_error_1 = __importDefault(require("./api-error"));
const common_1 = require("definitions/common");
class BadRequestError extends api_error_1.default {
    constructor(message = '', errors = {}) {
        super(common_1.httpStatus.badRequest, message, errors);
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends api_error_1.default {
    constructor(message = '', errors = {}) {
        super(common_1.httpStatus.unauthorized, message, errors);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends api_error_1.default {
    constructor(message = '', errors = {}) {
        super(common_1.httpStatus.forbidden, message, errors);
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends api_error_1.default {
    constructor(message = '', errors = {}) {
        super(common_1.httpStatus.notFound, message, errors);
    }
}
exports.NotFoundError = NotFoundError;
class NotAcceptableError extends api_error_1.default {
    constructor(message = '', errors = {}) {
        super(common_1.httpStatus.notAcceptable, message, errors);
    }
}
exports.NotAcceptableError = NotAcceptableError;
class ConflictError extends api_error_1.default {
    constructor(message = '', errors = {}) {
        super(common_1.httpStatus.conflict, message, errors);
    }
}
exports.ConflictError = ConflictError;
class ValidationError extends api_error_1.default {
    constructor(message = '', errors = {}) {
        super(common_1.httpStatus.unprocessableEntity, message, errors);
    }
}
exports.ValidationError = ValidationError;
class InternalServerError extends api_error_1.default {
    constructor(message = '', errors = {}) {
        super(common_1.httpStatus.internalServerError, message, errors);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=api-error-wrappers.js.map