# Technology Stack

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-07-31
**Owner:** Vörðr Project

---

## Purpose

This document defines the officially approved technologies used by the Vörðr project.

Introducing new frameworks, libraries, or development tools should be carefully evaluated to avoid unnecessary complexity.

---

## Core Technologies

| Area | Technology |
|------|------------|
| Runtime | Node.js 24 LTS |
| Language | TypeScript |
| Package Manager | pnpm |
| Backend | Fastify |

---

## Frontend

| Area | Technology |
|------|------------|
| Framework | Vite |
| Language | TypeScript |
| Camera Access | Browser getUserMedia() |

The frontend is intentionally lightweight.

Frameworks should only be introduced when they clearly improve maintainability.

---

## Streaming

| Area | Technology |
|------|------------|
| Video | WebRTC |
| Signaling | Fastify WebSockets |

---

## Storage

| Area | Technology |
|------|------------|
| Database | node:sqlite |
| Authentication | Single administrator account |

SQLite is sufficient for Version 1.0 and minimizes operational complexity.

---

## Security

| Area | Technology |
|------|------------|
| Password Hashing | @node-rs/argon2 |
| Sessions | @fastify/secure-session |
| Security Headers | @fastify/helmet |
| Rate Limiting | @fastify/rate-limit |

Security is implemented before any remote connectivity.

---

## Logging

| Area | Technology |
|------|------------|
| Logging | Pino |

Application logs should provide meaningful operational information without exposing sensitive data.

---

## Testing

| Area | Technology |
|------|------------|
| Unit Testing | Vitest |
| End-to-End Testing | Playwright |

Testing is introduced incrementally as the project evolves.

---

## Development

| Area | Technology |
|------|------------|
| Version Control | Git |
| Repository Hosting | GitHub |
| Development Environment | Docker (development only) |

---

## Continuous Integration

| Area | Technology |
|------|------------|
| CI/CD | GitHub Actions |

Every pull request should eventually execute automated checks before merging.

---

## Technology Selection Principles

New technologies should only be introduced when they:

- Solve a real problem
- Reduce long-term maintenance
- Improve security
- Improve developer experience
- Fit the project architecture
- Are actively maintained
- Have strong community support

---

## Versioning Policy

Major technology upgrades should be evaluated carefully.

Core technologies should remain stable throughout each release cycle unless a compelling reason for change exists.
