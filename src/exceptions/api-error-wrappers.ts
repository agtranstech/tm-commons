import ApiError from "./api-error";
import {httpStatus} from "definitions/common";

class BadRequestError extends ApiError {
    public constructor(message = '', errors = {}) {
        super(httpStatus.badRequest, message, errors);
    }
}

class UnauthorizedError extends ApiError {
    public constructor(message = '', errors = {}) {
        super(httpStatus.unauthorized, message, errors);
    }
}

class ForbiddenError extends ApiError {
    public constructor(message = '', errors = {}) {
        super(httpStatus.forbidden, message, errors);
    }
}

class NotFoundError extends ApiError {
    public constructor(message = '', errors = {}) {
        super(httpStatus.notFound, message, errors);
    }
}

class NotAcceptableError extends ApiError {
    public constructor(message = '', errors = {}) {
        super(httpStatus.notAcceptable, message, errors);
    }
}

class ConflictError extends ApiError {
    public constructor(message = '', errors = {}) {
        super(httpStatus.conflict, message, errors);
    }
}

class ValidationError extends ApiError {
    public constructor(message = '', errors = {}) {
        super(httpStatus.unprocessableEntity, message, errors);
    }
}

class InternalServerError extends ApiError {
    public constructor(message = '', errors = {}) {
        super(httpStatus.internalServerError, message, errors);
    }
}

export {
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    NotAcceptableError,
    ConflictError,
    ValidationError,
    InternalServerError,
};