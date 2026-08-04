export type ClientMessage =
  | { readonly type: "hello" }
  | { readonly type: "ping" }
  | { readonly type: "offer"; readonly sdp: string }
  | { readonly type: "answer"; readonly sdp: string }
  | {
      readonly type: "ice-candidate";
      readonly candidate: string;
      readonly sdpMid: string | null;
      readonly sdpMLineIndex: number | null;
      readonly usernameFragment: string | null;
    };

export type ServerMessage =
  | { readonly type: "hello"; readonly version: string; readonly peerCount: number }
  | { readonly type: "pong" }
  | { readonly type: "offer"; readonly sdp: string }
  | { readonly type: "answer"; readonly sdp: string }
  | {
      readonly type: "ice-candidate";
      readonly candidate: string;
      readonly sdpMid: string | null;
      readonly sdpMLineIndex: number | null;
      readonly usernameFragment: string | null;
    }
  | { readonly type: "error"; readonly message: "Unknown message type" };
