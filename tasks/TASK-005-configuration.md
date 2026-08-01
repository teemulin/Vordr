# TASK-005 — Configuration

**Task ID:** TASK-005
**Sprint:** Sprint 0 — Foundation
**Release:** v0.1 Foundation
**Priority:** High
**Estimated Effort:** S

---

## Status

Planned

---

## Goal

Introduce a centralized configuration module for the application.

The configuration should provide a single source of truth for runtime settings while preparing the project for future environment-based configuration.

---

## Requirements

Create a configuration module under:

src/config/

The module must expose:

- host
- port
- nodeEnv

The configuration should:

- read values from environment variables
- provide sensible defaults when variables are missing
- export a typed configuration object

Modify the application to use the configuration module instead of hardcoded values.

---

## Acceptance Criteria

- Configuration module exists.
- Application no longer contains hardcoded host or port values.
- Development server starts successfully.
- pnpm typecheck succeeds.
- /health endpoint continues returning HTTP 200.

---

## Out of Scope

This task must not:

- introduce dotenv
- validate configuration values
- add secrets
- modify application behavior

---

## Implementation Notes

Keep the implementation intentionally simple.

Validation and advanced configuration management will be introduced in later tasks.

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] TypeScript passes
- [ ] Documentation updated
- [ ] Ready for Pull Request
