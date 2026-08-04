const app = document.querySelector<HTMLElement>("#app");

if (app === null) {
  throw new Error("Missing #app container");
}

app.innerHTML = `
  <main>
    <section>
      <h1>Vordr</h1>
      <button type="button">Start Camera</button>
    </section>
    <section aria-label="Camera preview">
      <video autoplay playsinline></video>
    </section>
  </main>
`;
