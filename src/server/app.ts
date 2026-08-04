import staticPlugin from "@fastify/static";
import Fastify, { type FastifyInstance } from "fastify";
import { resolve } from "node:path";
import { APP_VERSION } from "../config/app.js";
import { websocketPlugin } from "../plugins/websocket.js";
import { loggerOptions } from "./logger.js";

export function buildServer(): FastifyInstance {
  const app = Fastify(loggerOptions);

  app.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    return reply.status(500).send({ error: "Internal Server Error" });
  });

  app.register(websocketPlugin);
  app.register(staticPlugin, {
    root: resolve(import.meta.dirname, "../../apps/web/dist"),
    prefix: "/",
  });

  app.get("/health", async () => ({ status: "ok", version: APP_VERSION }));

  return app;
}
