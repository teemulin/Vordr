import Fastify, { type FastifyInstance } from "fastify";
import { APP_VERSION } from "../config/app.js";
import { loggerOptions } from "./logger.js";

export function buildServer(): FastifyInstance {
  const app = Fastify(loggerOptions);

  app.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    return reply.status(500).send({ error: "Internal Server Error" });
  });

  app.get("/health", async () => ({ status: "ok", version: APP_VERSION }));

  return app;
}
