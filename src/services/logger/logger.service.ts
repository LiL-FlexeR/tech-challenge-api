import { createLogger, format, Logger, transports } from "winston";
import { ILoggerService } from "./logger.interface";
import { TLoggerLevel } from "./logger.types";

export class LoggerService implements ILoggerService {
  private readonly logger: Logger;

  constructor(name: string) {
    this.logger = createLogger({
      level: "info",
      format: format.combine(
        format.label({ label: name }),
        format.timestamp(),
        format.printf(({ level, message, label, timestamp }) => {
          return `${timestamp} [${label}] ${level}: ${message}`;
        })
      ),
      transports: [new transports.Console()],
    });
  }

  log(level: TLoggerLevel, msg: string): void {
    this.logger.log(level, msg);
  }

  info(msg: string): void {
    this.logger.info(msg);
  }

  error(msg: string): void {
    this.logger.error(msg);
  }

  warn(msg: string): void {
    this.logger.warn(msg);
  }
}
