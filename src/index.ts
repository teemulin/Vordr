import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health", async () => ({ status: "ok" }));

const start = async (): Promise<void> => {
  try {
    await app.listen({ host: "0.0.0.0", port: 3000 });
  } catch (error: unknown) {
    app.log.error(error, "Failed to start server");
    process.exitCode = 1;
    throw error;
  }
};

void start();
