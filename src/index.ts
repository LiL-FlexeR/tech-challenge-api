import express from "express";
import { ConfigService } from "./services/config/config.service";
import { LoggerService } from "./services/logger/logger.service";
import dotenv from "dotenv";
import { DatabaseService } from "./services/db/db.service";
import router from "./controllers";

const logger = new LoggerService("Bootstrap");

const bootstrap = async () => {
  dotenv.config();

  try {
    const app = express();

    const cfgService = new ConfigService();

    const PORT = parseInt(cfgService.getOrThrow("PORT"));

    if (isNaN(PORT)) {
      throw new Error("Invalid port");
    }

    const db = DatabaseService.getInstance();

    await db.$connect();

    logger.info("Database connected.");

    app.use("api/v1", router);

    app.listen(PORT, () => {
      logger.info("API started.");
    });
  } catch (err) {
    logger.error(`Error occurred on API startup:\n${err}`);
  }
};

process.on("SIGINT", async () => {
  const db = DatabaseService.getInstance();

  await db.$disconnect();

  logger.info("Database disconnected.");

  process.exit(-1);
});

bootstrap();
