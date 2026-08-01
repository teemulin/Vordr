import Fastify, { type FastifyInstance } from "fastify";
import { loggerOptions } from "./logger.js";

export function buildServer(): FastifyInstance {
  const app = Fastify(loggerOptions);

  app.get("/health", async () => ({ status: "ok" }));

  return app;
}
