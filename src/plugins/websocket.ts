import websocket from "@fastify/websocket";
import type { FastifyPluginAsync } from "fastify";
import { APP_VERSION } from "../config/app.js";

interface ClientMessage {
  readonly type: string;
}

type ServerMessage =
  | { readonly type: "hello"; readonly version: string }
  | { readonly type: "pong" }
  | { readonly type: "error"; readonly message: "Unknown message type" };

function isClientMessage(value: unknown): value is ClientMessage {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    typeof value.type === "string"
  );
}

function parseMessage(data: unknown): unknown {
  if (Buffer.isBuffer(data)) {
    return JSON.parse(data.toString("utf8"));
  }

  if (data instanceof ArrayBuffer) {
    return JSON.parse(Buffer.from(data).toString("utf8"));
  }

  if (Array.isArray(data) && data.every(Buffer.isBuffer)) {
    return JSON.parse(Buffer.concat(data).toString("utf8"));
  }

  throw new SyntaxError("WebSocket message is not valid JSON text");
}

function createResponse(message: ClientMessage): ServerMessage {
  switch (message.type) {
    case "hello":
      return { type: "hello", version: APP_VERSION };
    case "ping":
      return { type: "pong" };
    default:
      return { type: "error", message: "Unknown message type" };
  }
}

export const websocketPlugin: FastifyPluginAsync = async (app) => {
  await app.register(websocket);

  app.get("/ws", { websocket: true }, (socket) => {
    app.log.info("WebSocket client connected");

    socket.on("message", (data: unknown) => {
      let message: unknown;

      try {
        message = parseMessage(data);
      } catch (error: unknown) {
        app.log.warn({ err: error }, "Invalid WebSocket message received");
        socket.close(1007, "Invalid JSON");
        return;
      }

      const response = isClientMessage(message)
        ? createResponse(message)
        : { type: "error", message: "Unknown message type" };

      socket.send(JSON.stringify(response));
    });

    socket.on("close", () => {
      app.log.info("WebSocket client disconnected");
    });
  });
};
