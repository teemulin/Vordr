# Development Workflow

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-07-31
**Owner:** Vörðr Project

---

## Purpose

This document defines the standard development workflow used throughout the Vörðr project.

Every feature should follow the same process to ensure consistent quality, maintainability, and documentation.

---

## Development Lifecycle

Every feature follows the same lifecycle:

Idea

↓

Discussion

↓

Architecture Decision (ADR)

↓

Task Definition

↓

Feature Branch

↓

Implementation

↓

Testing

↓

Documentation

↓

Pull Request

↓

Review

↓

Merge

↓

Release

---

## Feature Planning

Before implementation begins:

- Define the problem.
- Determine the desired outcome.
- Create or update an ADR if required.
- Break the work into small implementation tasks.

Large features should always be divided into manageable tasks.

---

## Tasks

Implementation work is organized using the `tasks/` directory.

Each task should:

- Have a clear objective
- Define requirements
- Include acceptance criteria
- Be independently implementable
- Be suitable for both human developers and AI assistants

Completed tasks remain part of the repository as historical documentation.

---

## Branch Strategy

Development takes place on feature branches.

Example:

```
feature/fastify-bootstrap
feature/authentication
feature/webrtc-signaling
```

The `main` branch should always remain stable.

---

## Pull Requests

Before opening a pull request:

- Verify acceptance criteria
- Run TypeScript checks
- Run tests
- Update documentation if needed
- Review the implementation

Every pull request should represent a complete, reviewable unit of work.

---

## Documentation

Documentation is developed alongside the code.

Major architectural changes should always be reflected in:

- Engineering Handbook
- ADRs
- README
- Relevant task documentation

Documentation should never become outdated.

---

## Code Review

Every contribution should be reviewed before merging.

Reviews focus on:

- Correctness
- Readability
- Maintainability
- Security
- Consistency

---

## Releases

Releases are incremental.

Every completed milestone should leave the project in a working state.

Small, releasable improvements are preferred over large, unfinished changes.

---

## Guiding Principles

The development workflow prioritizes:

- Small incremental changes
- High-quality documentation
- Predictable structure
- Consistent engineering practices
- Long-term maintainability

Quality takes priority over development speed.
