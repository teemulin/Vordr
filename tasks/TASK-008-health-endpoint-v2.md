# TASK-008 — Health Endpoint v2

**Task ID:** TASK-008
**Sprint:** Sprint 0 — Foundation
**Release:** v0.1 Foundation
**Priority:** Low
**Estimated Effort:** XS

---

## Status

Planned

---

## Goal

Enhance the existing health endpoint with additional runtime information.

The endpoint should remain lightweight while becoming more useful for diagnostics and monitoring.

---

## Requirements

Extend GET /health to include:

- status
- version
- uptime
- timestamp
- node version

The endpoint must continue returning HTTP 200.

---

## Acceptance Criteria

- Health endpoint returns the additional fields.
- Application starts successfully.
- pnpm typecheck succeeds.
- Response remains valid JSON.

---

## Out of Scope

This task must not:

- add database health checks
- expose sensitive information
- add metrics endpoints

---

## Implementation Notes

The endpoint should remain suitable for future health checks used by Docker, reverse proxies, and monitoring systems.

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] TypeScript passes
- [ ] Documentation updated
- [ ] Ready for Pull Request
