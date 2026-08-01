import Fastify from "fastify";
import { appConfig } from "./config/app.js";

const app = Fastify({ logger: true });

app.get("/health", async () => ({ status: "ok" }));

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
