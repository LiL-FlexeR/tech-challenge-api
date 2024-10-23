export class EnvVariableNotFoundError extends Error {
  constructor(key: string) {
    super(`Env variable ${key} not found.`);
  }
}
