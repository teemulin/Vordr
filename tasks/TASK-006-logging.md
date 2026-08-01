# TASK-006 — Logging

## Goal

Introduce a dedicated server builder while keeping application startup minimal.

The Fastify application should be created through a `buildServer()` function to prepare the project for future plugins, routes and middleware.

At this stage, continue using Fastify's built-in logger (`logger: true`) without introducing custom logging configuration or additional dependencies.

---

## Requirements

- Create `src/server/logger.ts`
- Create `src/server/app.ts`
- Expose a `buildServer()` function
- Move Fastify application creation into `buildServer()`
- Keep `src/index.ts` responsible only for application startup
- Continue using Fastify's built-in logger (`logger: true`)
- Do not add any new dependencies
- Keep the implementation minimal

---

## Acceptance Criteria

- [ ] `src/server/logger.ts` created
- [ ] `src/server/app.ts` created
- [ ] Fastify instance created via `buildServer()`
- [ ] `src/index.ts` only starts the application
- [ ] `/health` endpoint continues to return HTTP 200
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` passes

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] TypeScript passes
- [ ] Lint passes
- [ ] Documentation updated
- [ ] Ready for Pull Request
