# TASK-007 — Error Handling

## Goal

Introduce centralized error handling for the Fastify application.

All unhandled server errors should be logged consistently and return a minimal JSON response.

The implementation should remain intentionally simple and prepare the project for future validation and authentication errors.

---

## Requirements

- Register a global Fastify error handler.
- Keep existing startup error handling unchanged.
- Log all unexpected errors using Fastify's logger.
- Return HTTP 500.
- Return the following JSON response:

{
  "error": "Internal Server Error"
}

- Do not expose stack traces.
- Do not introduce custom error classes.
- Do not add any dependencies.

---

## Acceptance Criteria

- [ ] Global error handler registered
- [ ] Unexpected errors return HTTP 500
- [ ] Response body is:
      { "error": "Internal Server Error" }
- [ ] Errors are logged
- [ ] pnpm typecheck passes
- [ ] pnpm build passes

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] Documentation updated
- [ ] Ready for Pull Request
