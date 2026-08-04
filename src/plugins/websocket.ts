import websocket from "@fastify/websocket";
import type { FastifyPluginAsync } from "fastify";
import { APP_VERSION } from "../config/app.js";
import type { ClientMessage, ServerMessage } from "../protocol/websocket.js";

type ConnectedSocket = {
  readonly readyState: number;
  send: (data: string) => void;
};

function isClientMessage(value: unknown): value is ClientMessage {
  if (typeof value !== "object" || value === null || !("type" in value)) {
    return false;
  }

  if (value.type === "hello" || value.type === "ping") {
    return true;
  }

  if ((value.type === "offer" || value.type === "answer") && "sdp" in value) {
    return typeof value.sdp === "string";
  }

  if (value.type === "ice-candidate") {
    return (
      "candidate" in value &&
      typeof value.candidate === "string" &&
      "sdpMid" in value &&
      (typeof value.sdpMid === "string" || value.sdpMid === null) &&
      "sdpMLineIndex" in value &&
      (typeof value.sdpMLineIndex === "number" || value.sdpMLineIndex === null) &&
      "usernameFragment" in value &&
      (typeof value.usernameFragment === "string" || value.usernameFragment === null)
    );
  }

  return (
    false
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

function createResponse(
  message: Extract<ClientMessage, { readonly type: "hello" | "ping" }>,
  peerCount: number,
): ServerMessage {
  if (message.type === "hello") {
    return { type: "hello", version: APP_VERSION, peerCount };
  }

  return { type: "pong" };
}

export const websocketPlugin: FastifyPluginAsync = async (app) => {
  await app.register(websocket);
  const clients = new Set<ConnectedSocket>();

  app.get("/ws", { websocket: true }, (socket) => {
    clients.add(socket);
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

      if (!isClientMessage(message)) {
        socket.send(JSON.stringify({ type: "error", message: "Unknown message type" }));
        return;
      }

      if (message.type === "hello" || message.type === "ping") {
        const response = createResponse(message, clients.size);
        socket.send(JSON.stringify(response));
        return;
      }

      const signalingMessage: ServerMessage = message;
      const payload = JSON.stringify(signalingMessage);

      for (const client of clients) {
        if (client !== socket && client.readyState === 1) {
          client.send(payload);
        }
      }
    });

    socket.on("close", () => {
      clients.delete(socket);
      app.log.info("WebSocket client disconnected");
    });
  });
};
