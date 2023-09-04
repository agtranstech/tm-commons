"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("definitions/common");
class ApiError extends Error {
    name = '';
    message = '';
    errors = {};
    status = common_1.httpStatus.internalServerError;
    constructor(status = common_1.httpStatus.internalServerError, message = '', errors = {}) {
        super();
        this.status = status;
        if (common_1.apiErrorCodes.has(status)) {
            this.name = common_1.apiErrorCodes.get(this.status);
        }
        if (Object.keys(errors).length) {
            this.errors = errors;
        }
        this.message = message;
    }
}
exports.default = ApiError;
//# sourceMappingURL=api-error.js.map