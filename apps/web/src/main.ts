import type { ClientMessage, ServerMessage } from "../../../src/protocol/websocket.js";

document.querySelector<HTMLElement>("#app")!.textContent = "Vordr";

const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
const websocketUrl = `${protocol}//${window.location.host}/ws`;
const websocket = new WebSocket(websocketUrl);
websocket.addEventListener("open", () => {
  console.info("WebSocket connection opened");
  const message: ClientMessage = { type: "hello" };
  websocket.send(JSON.stringify(message));
});

websocket.addEventListener("message", (event) => {
  try {
    const message = JSON.parse(event.data as string) as ServerMessage;
    console.log("WebSocket message received", message);
  } catch (error: unknown) {
    console.error("Failed to parse WebSocket message", error);
  }
});

websocket.addEventListener("close", (event) => {
  console.info("WebSocket connection closed", event);
});

websocket.addEventListener("error", (event) => {
  console.error("WebSocket connection error", event);
});
