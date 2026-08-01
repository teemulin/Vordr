# TASK-008 — Health Endpoint v2

## Goal

Improve the existing health endpoint by exposing basic application metadata.

The endpoint should remain lightweight while becoming more useful for monitoring, debugging and future deployment checks.

---

## Requirements

- Keep the existing `/health` endpoint.
- Return HTTP 200.
- Return JSON in the following format:

{
  "status": "ok",
  "version": "0.1.0"
}

- The version value must come from a single constant.
- Do not hardcode the version in the route handler.
- Do not add any dependencies.

---

## Acceptance Criteria

- [ ] `/health` returns HTTP 200
- [ ] Response contains:
      - status
      - version
- [ ] Version is defined in a single location
- [ ] pnpm typecheck passes
- [ ] pnpm build passes

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] Documentation updated
- [ ] Ready for Pull Request
