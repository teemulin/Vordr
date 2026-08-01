import { appConfig } from "./config/app.js";
import { buildServer } from "./server/app.js";

const app = buildServer();

const start = async (): Promise<void> => {
  try {
    await app.listen({ host: appConfig.host, port: appConfig.port });
  } catch (error: unknown) {
    app.log.error(error, "Failed to start server");
    process.exitCode = 1;
    throw error;
  }
};

void start();
