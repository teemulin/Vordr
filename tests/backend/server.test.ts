import { describe, it, expect } from "vitest";
import { buildServer } from "../../src/server/app.js";

describe("Fastify Server", () => {
  it("should create a Fastify application", () => {
    const app = buildServer();
    expect(app).toBeDefined();
    expect(app.ready).toBeDefined();
  });

  it("should respond to health check endpoint", async () => {
    const app = buildServer();

    const response = await app.inject({
      method: "GET",
      url: "/health",
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");

    const body = JSON.parse(response.body);
    expect(body).toHaveProperty("status");
    expect(body).toHaveProperty("version");
    expect(body.status).toBe("ok");
  });
});
