# TASK-003 – Fastify Bootstrap

Status: Planned

Sprint: Sprint 0

Priority: High

Estimated effort: 30–60 minutes

---

## Goal

Bootstrap the Vordr backend using Fastify and create the first runnable HTTP server.

This task establishes the backend foundation for all future development.

---

## Background

The objective is to create the smallest possible production-quality Fastify application.

The implementation should remain intentionally simple.

No authentication.

No persistence.

No camera functionality.

No abstractions unless required.

---

## Requirements

- Use Fastify
- Use TypeScript
- Enable Fastify logger
- Listen on port 3000
- Listen on host `0.0.0.0`
- Use async startup
- Implement proper startup error handling

---

## Files

Expected modifications:

- `package.json`
- `src/index.ts`

---

## Acceptance Criteria

The following command succeeds:

```bash
pnpm run dev
```

The server starts successfully.

Request:

```http
GET /health
```

Response:

```json
{
  "status": "ok"
}
```

TypeScript passes:

```bash
pnpm run typecheck
```

Implementation follows the rules defined in `AGENTS.md`.

---

## Out of Scope

Do **not** implement:

- Authentication
- SQLite
- Docker
- WebRTC
- Camera access
- Testing
- CI/CD

These belong to later tasks.

---

## References

- Development Plan v1.3
- AGENTS.md
- ADR-0003 – Fastify
- TASK-004 – Health Endpoint

---

## Depends On

- TASK-001 – Repository Bootstrap
- TASK-002 – TypeScript Toolchain

---

## Blocks

- TASK-004 – Health Endpoint
- TASK-005 – ESLint & Prettier
- TASK-006 – Testing Baseline

---

## AI Guidance

When implementing this task, an AI assistant must:

- Follow `AGENTS.md`.
- Modify only the required files.
- Avoid unnecessary abstractions.
- Avoid adding new dependencies beyond Fastify.
- Keep the implementation simple and production-ready.
- Use modern TypeScript.
- Prefer readability over cleverness.
- Do not implement future roadmap items.

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] TypeScript passes
- [ ] Lint passes
- [ ] Documentation updated
- [ ] Ready for Pull Request

