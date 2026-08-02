export type ClientMessage =
  | { readonly type: "hello" }
  | { readonly type: "ping" };

export type ServerMessage =
  | { readonly type: "hello"; readonly version: string }
  | { readonly type: "pong" }
  | { readonly type: "error"; readonly message: "Unknown message type" };
