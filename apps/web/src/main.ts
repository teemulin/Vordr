import type { ClientMessage, ServerMessage } from "../../../src/protocol/websocket.js";

const app = document.querySelector<HTMLElement>("#app");

if (app === null) {
  throw new Error("Missing #app container");
}

app.innerHTML = `
  <main>
    <section>
      <h1>Vordr</h1>
      <button type="button">Start Camera</button>
      <p role="status" aria-live="polite"></p>
    </section>
    <section aria-label="Camera preview">
      <video autoplay playsinline></video>
    </section>
    <section aria-label="Remote preview">
      <video autoplay playsinline></video>
    </section>
  </main>
`;

const startCameraButton = app.querySelector<HTMLButtonElement>('button[type="button"]');
const localPreviewVideo = app.querySelector<HTMLVideoElement>('section[aria-label="Camera preview"] video');
const remotePreviewVideo = app.querySelector<HTMLVideoElement>('section[aria-label="Remote preview"] video');
const statusMessage = app.querySelector<HTMLParagraphElement>('p[role="status"]');

if (startCameraButton === null || localPreviewVideo === null || remotePreviewVideo === null || statusMessage === null) {
  throw new Error("Missing required UI elements");
}

const setStatusMessage = (message: string): void => {
  statusMessage.textContent = message;
};

const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
const websocketUrl = `${protocol}//${window.location.host}/ws`;
const signalingSocket = new WebSocket(websocketUrl);
const peerConnection = new RTCPeerConnection();
let localCameraStream: MediaStream | null = null;
let canCreateOffer = false;
let isCreatingOffer = false;
let isDataChannelCreated = false;

const attachLocalVideoTracks = (stream: MediaStream): void => {
  for (const track of stream.getVideoTracks()) {
    const trackAlreadyAdded = peerConnection
      .getSenders()
      .some((sender) => sender.track?.id === track.id);

    if (trackAlreadyAdded) {
      continue;
    }

    peerConnection.addTrack(track, stream);
  }
};

const startCamera = async (): Promise<void> => {
  if (localPreviewVideo.srcObject instanceof MediaStream) {
    return;
  }

  setStatusMessage("");

  const devices = await navigator.mediaDevices.enumerateDevices();
  const hasVideoInput = devices.some((device) => device.kind === "videoinput");

  if (!hasVideoInput) {
    setStatusMessage("No camera device found.");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    localCameraStream = stream;
    localPreviewVideo.srcObject = stream;
    attachLocalVideoTracks(stream);
    sendSignalingMessage({ type: "hello" });
  } catch (error: unknown) {
    if (error instanceof DOMException && error.name === "NotAllowedError") {
      setStatusMessage("Camera permission was denied.");
      return;
    }

    if (error instanceof DOMException && error.name === "NotFoundError") {
      setStatusMessage("No camera device found.");
      return;
    }

    setStatusMessage("Unable to start camera.");
  }
};

startCameraButton.addEventListener("click", () => {
  void startCamera();
});

function isServerMessage(value: unknown): value is ServerMessage {
  if (typeof value !== "object" || value === null || !("type" in value)) {
    return false;
  }

  if (value.type === "hello") {
    return (
      "version" in value &&
      typeof value.version === "string" &&
      "peerCount" in value &&
      typeof value.peerCount === "number"
    );
  }

  if (value.type === "pong") {
    return true;
  }

  if (value.type === "error") {
    return "message" in value && value.message === "Unknown message type";
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

  return false;
}

const sendSignalingMessage = (message: ClientMessage): void => {
  if (signalingSocket.readyState !== WebSocket.OPEN) {
    return;
  }

  signalingSocket.send(JSON.stringify(message));
};

const ensureDataChannel = (): void => {
  if (isDataChannelCreated) {
    return;
  }

  peerConnection.createDataChannel("vordr-bootstrap");
  isDataChannelCreated = true;
};

const createOffer = async (): Promise<void> => {
  if (!canCreateOffer || isCreatingOffer || peerConnection.signalingState !== "stable") {
    return;
  }

  isCreatingOffer = true;

  try {
    ensureDataChannel();

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    if (peerConnection.localDescription === null || peerConnection.localDescription.sdp === null) {
      setStatusMessage("Unable to create SDP offer.");
      return;
    }

    sendSignalingMessage({ type: "offer", sdp: peerConnection.localDescription.sdp });
  } catch {
    setStatusMessage("Unable to create SDP offer.");
  } finally {
    isCreatingOffer = false;
  }
};

const handleOffer = async (sdp: string): Promise<void> => {
  if (localCameraStream !== null) {
    attachLocalVideoTracks(localCameraStream);
  }

  await peerConnection.setRemoteDescription({ type: "offer", sdp });

  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  if (peerConnection.localDescription === null || peerConnection.localDescription.sdp === null) {
    setStatusMessage("Unable to create SDP answer.");
    return;
  }

  sendSignalingMessage({ type: "answer", sdp: peerConnection.localDescription.sdp });
};

const handleAnswer = async (sdp: string): Promise<void> => {
  await peerConnection.setRemoteDescription({ type: "answer", sdp });
};

const handleIceCandidate = async (message: Extract<ServerMessage, { readonly type: "ice-candidate" }>): Promise<void> => {
  await peerConnection.addIceCandidate({
    candidate: message.candidate,
    sdpMid: message.sdpMid,
    sdpMLineIndex: message.sdpMLineIndex,
    usernameFragment: message.usernameFragment,
  });
};

peerConnection.addEventListener("icecandidate", (event) => {
  if (event.candidate === null) {
    return;
  }

  sendSignalingMessage({
    type: "ice-candidate",
    candidate: event.candidate.candidate,
    sdpMid: event.candidate.sdpMid,
    sdpMLineIndex: event.candidate.sdpMLineIndex,
    usernameFragment: event.candidate.usernameFragment ?? null,
  });
});

peerConnection.addEventListener("track", (event) => {
  const [stream] = event.streams;

  if (stream) {
    remotePreviewVideo.srcObject = stream;
  }
});

peerConnection.addEventListener("connectionstatechange", () => {
  if (peerConnection.connectionState === "failed") {
    setStatusMessage("Peer connection failed.");
    return;
  }

  if (peerConnection.connectionState === "disconnected") {
    setStatusMessage("Peer connection disconnected.");
  }
});

const handleSignalingMessage = async (message: ServerMessage): Promise<void> => {
  if (message.type === "hello") {
    canCreateOffer = message.peerCount >= 2;

    if (canCreateOffer && localCameraStream !== null) {
      await createOffer();
    }

    return;
  }

  if (message.type === "offer") {
    await handleOffer(message.sdp);
    return;
  }

  if (message.type === "answer") {
    await handleAnswer(message.sdp);
    return;
  }

  if (message.type === "ice-candidate") {
    await handleIceCandidate(message);
    return;
  }

  if (message.type === "error") {
    setStatusMessage("Signaling message was rejected.");
  }
};

signalingSocket.addEventListener("open", () => {
  sendSignalingMessage({ type: "hello" });
});

signalingSocket.addEventListener("error", () => {
  setStatusMessage("Signaling connection failed.");
});

signalingSocket.addEventListener("close", () => {
  setStatusMessage("Signaling connection closed.");
});

signalingSocket.addEventListener("message", (event) => {
  if (typeof event.data !== "string") {
    return;
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(event.data);
  } catch {
    setStatusMessage("Received invalid signaling payload.");
    return;
  }

  if (!isServerMessage(parsed)) {
    setStatusMessage("Received unsupported signaling message.");
    return;
  }

  void handleSignalingMessage(parsed).catch(() => {
    setStatusMessage("Signaling failed.");
  });
});
