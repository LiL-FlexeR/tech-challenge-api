import express from "express";
import { ConfigService } from "./services/config/config.service";
import { LoggerService } from "./services/logger/logger.service";
import dotenv from "dotenv";

const bootstrap = () => {
  dotenv.config();

  const logger = new LoggerService("Bootstrap");

  try {
    const app = express();

    const cfgService = new ConfigService();

    const PORT = parseInt(cfgService.getOrThrow("PORT"));

    if (isNaN(PORT)) {
      throw new Error("Invalid port");
    }

    app.listen(PORT, () => {
      logger.info("API started.");
    });
  } catch (err) {
    logger.error(`Error occurred on API startup:\n${err}`);
  }
};

bootstrap();
