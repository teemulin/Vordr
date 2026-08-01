# TASK-004 — Project Structure

**Task ID:** TASK-004  
**Sprint:** Sprint 0 — Foundation  
**Release:** v0.1 Foundation  
**Priority:** High  
**Estimated Effort:** XS

---

## Status

Planned

---

## Goal

Create the initial project directory structure that will be used throughout Vörðr development.

This task prepares the repository for future features without implementing any new functionality.

The objective is to establish a clean, scalable and predictable layout.

---

## Requirements

Create the following directories if they do not already exist.

```
src/
├── config/
├── plugins/
├── routes/
└── server/

docs/
├── adr/
├── architecture/
└── handbook/

tests/
```

Each newly created directory must contain a `.gitkeep` file so that Git tracks empty directories.

Existing directories and files must not be removed or renamed.

---

## Acceptance Criteria

- Required directories exist.
- Every empty directory contains a `.gitkeep` file.
- Existing files remain unchanged.
- Project builds successfully.
- `pnpm typecheck` succeeds.
- `pnpm run dev` starts successfully.
- The `/health` endpoint continues to return HTTP 200.

---

## Out of Scope

This task must **not**:

- implement configuration
- add routes
- add plugins
- modify server behavior
- introduce new dependencies

---

## Implementation Notes

This task is intentionally small.

It exists only to prepare the repository structure for future implementation tasks.

No production functionality should change.

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] TypeScript passes
- [ ] Documentation updated
- [ ] Ready for Pull Request
