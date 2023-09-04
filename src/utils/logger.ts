import bunyan from 'bunyan';
import chalk from 'chalk';

class Logger {
    private logger!: any;

    public static async init(
        name: string,
        streams: bunyan.Stream[],
        serializers: bunyan.Serializers,
    ) {
        return bunyan.createLogger({
            name,
            streams,
            serializers,
        });
    }

    public constructor(logger: bunyan) {
        this.logger = logger;
    }

    public async trace(trace: any): Promise<void> {
        this.logger.trace(chalk.yellowBright.bold(trace));
    }

    public async debug(debug: any): Promise<void> {
        this.logger.debug(chalk.yellowBright.bold(debug));
    }

    public async info(info: any): Promise<void> {
        this.logger.info(chalk.cyanBright(info));
    }

    public async warn(warning: any): Promise<void> {
        this.logger.warn(chalk.magenta(warning));
    }

    public async error(error: any): Promise<void> {
        this.logger.error(chalk.red(error));
    }

    public async fatal(fatal: any): Promise<void> {
        this.logger.fatal(chalk.black.bgWhiteBright(fatal));
    }

    public static async logErrorsWithFallback(
        log: any,
        prefix: string,
        error: any,
    ) {
        try {
            let message = '';
            if (log === console) {
                const timestamp = new Date().toISOString().split('T')[1];
                const errors =
                    error.errors !== undefined && error.errors.length > 0
                        ? error.errors
                        : error.message;
                message = `${timestamp} ${chalk.black.bgWhiteBright(
                    `FATAL : ${prefix} ${chalk.black(errors)}`,
                )}`;
                log.error(message);
            } else {
                message = `${prefix} ${error.message}`;
                if (error.errors !== undefined && error.errors.length > 0)
                    message = `${prefix} ${error.errors}`;
                log.fatal(message);
            }
            log.trace(error);
        } catch (error) {
            console.log(
                `${new Date().toISOString().split('T')[1]} ${chalk.black.bgWhiteBright(
                    `FATAL : ${prefix}}`,
                )}`,
            );
            console.trace(error);
        }
    }
}

export default Logger