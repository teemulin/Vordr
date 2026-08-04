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
  </main>
`;

const startCameraButton = app.querySelector<HTMLButtonElement>('button[type="button"]');
const previewVideo = app.querySelector<HTMLVideoElement>("video");
const statusMessage = app.querySelector<HTMLParagraphElement>('p[role="status"]');

if (startCameraButton === null || previewVideo === null || statusMessage === null) {
  throw new Error("Missing required UI elements");
}

const setStatusMessage = (message: string): void => {
  statusMessage.textContent = message;
};

const startCamera = async (): Promise<void> => {
  if (previewVideo.srcObject instanceof MediaStream) {
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
    previewVideo.srcObject = stream;
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
