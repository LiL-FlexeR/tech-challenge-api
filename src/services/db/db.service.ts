import { PrismaClient } from "@prisma/client";

export class DatabaseService {
  private static client: PrismaClient;

  constructor() {}

  public static getInstance() {
    if (!DatabaseService.client) {
      this.client = new PrismaClient();
    }

    return DatabaseService.client;
  }
}
