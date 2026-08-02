import websocket from "@fastify/websocket";
import type { FastifyPluginAsync } from "fastify";

export const websocketPlugin: FastifyPluginAsync = async (app) => {
  await app.register(websocket);

  app.get("/ws", { websocket: true }, (socket) => {
    app.log.info("WebSocket client connected");
    socket.send(JSON.stringify({ type: "hello" }));
  });
};
