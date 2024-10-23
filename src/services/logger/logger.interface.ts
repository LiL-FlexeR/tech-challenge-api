import { TLoggerLevel } from "./logger.types";

export interface ILoggerService {
  log(level: TLoggerLevel, msg: string): void;
  info(msg: string): void;
  error(msg: string): void;
  warn(msg: string): void;
}
