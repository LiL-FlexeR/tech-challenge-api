import { EnvVariableNotFoundError } from "@app/errors/config/env-var-not-found.error";

import { IConfigService } from "./config.interface";

export class ConfigService implements IConfigService {
  getOrThrow(key: string): string {
    const value = process.env[key];

    if (!value) {
      throw new EnvVariableNotFoundError(key);
    }

    return value;
  }
}
