import {apiErrorCodes, httpStatus} from "definitions/common";

class ApiError extends Error {
    /* Used for logging */
    public name = '';
    public message = '';
    /* Detailed list of all errors */
    public errors = {};
    /* Default error code */
    public status = httpStatus.internalServerError;

    public constructor(
        status = httpStatus.internalServerError,
        message = '',
        errors = {},
    ) {
        super();
        this.status = status;
        if (apiErrorCodes.has(status)) {
            this.name = apiErrorCodes.get(this.status) as string;
        }
        if (Object.keys(errors).length) {
            this.errors = errors;
        }
        this.message = message;
    }
}

export default ApiError;