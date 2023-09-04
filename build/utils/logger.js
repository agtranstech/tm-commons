"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan_1 = __importDefault(require("bunyan"));
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    logger;
    static async init(name, streams, serializers) {
        return bunyan_1.default.createLogger({
            name,
            streams,
            serializers,
        });
    }
    constructor(logger) {
        this.logger = logger;
    }
    async trace(trace) {
        this.logger.trace(chalk_1.default.yellowBright.bold(trace));
    }
    async debug(debug) {
        this.logger.debug(chalk_1.default.yellowBright.bold(debug));
    }
    async info(info) {
        this.logger.info(chalk_1.default.cyanBright(info));
    }
    async warn(warning) {
        this.logger.warn(chalk_1.default.magenta(warning));
    }
    async error(error) {
        this.logger.error(chalk_1.default.red(error));
    }
    async fatal(fatal) {
        this.logger.fatal(chalk_1.default.black.bgWhiteBright(fatal));
    }
    static async logErrorsWithFallback(log, prefix, error) {
        try {
            let message = '';
            if (log === console) {
                const timestamp = new Date().toISOString().split('T')[1];
                const errors = error.errors !== undefined && error.errors.length > 0
                    ? error.errors
                    : error.message;
                message = `${timestamp} ${chalk_1.default.black.bgWhiteBright(`FATAL : ${prefix} ${chalk_1.default.black(errors)}`)}`;
                log.error(message);
            }
            else {
                message = `${prefix} ${error.message}`;
                if (error.errors !== undefined && error.errors.length > 0)
                    message = `${prefix} ${error.errors}`;
                log.fatal(message);
            }
            log.trace(error);
        }
        catch (error) {
            console.log(`${new Date().toISOString().split('T')[1]} ${chalk_1.default.black.bgWhiteBright(`FATAL : ${prefix}}`)}`);
            console.trace(error);
        }
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map