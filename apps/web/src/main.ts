document.querySelector<HTMLElement>("#app")!.textContent = "Vordr";

const websocket = new WebSocket("ws://localhost:3000/ws");

websocket.addEventListener("open", () => {
  console.info("WebSocket connection opened");
  websocket.send(JSON.stringify({ type: "hello" }));
});

websocket.addEventListener("message", (event) => {
  try {
    const message: unknown = JSON.parse(event.data as string);
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
