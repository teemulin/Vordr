# Release Roadmap

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-07-31
**Owner:** Vörðr Project

---

## Purpose

This document describes the planned development milestones for Vörðr.

The roadmap provides a high-level overview of the project's evolution from the initial repository bootstrap to the first stable public release.

The roadmap may evolve over time, but each release should remain focused on a clearly defined objective.

---

# Sprint 0 — Foundation

## Objective

Establish a professional engineering foundation for the project.

## Deliverables

- Repository bootstrap
- Development standards
- Engineering Handbook
- AGENTS.md
- GitHub Community Health files
- Node.js 24 LTS
- pnpm workspace
- Initial project structure
- Initial implementation tasks

## Release

**v0.1 Foundation**

---

# Sprint 1 — Walking Skeleton

## Objective

Deliver the first working end-to-end application.

## Deliverables

- Fastify server
- Browser frontend
- Local camera preview
- WebRTC signaling
- Health endpoint
- Initial automated tests

## Release

**v0.2 Camera**

---

# Sprint 2 — Authentication

## Objective

Secure the application before enabling remote access.

## Deliverables

- Administrator account
- SQLite storage
- Argon2 password hashing
- Secure sessions
- Audit logging
- Security middleware

## Release

**v0.3 Authentication**

---

# Sprint 3 — Remote Access

## Objective

Provide secure remote connectivity.

## Deliverables

- HTTPS
- Tailscale deployment
- Cloudflare Tunnel deployment
- Deployment documentation
- Security validation

## Release

**v0.4 Remote Access**

---

# Version 1.0 — Stable MVP

Version 1.0 is complete when all of the following are implemented:

- Secure authentication
- Live WebRTC streaming
- Secure remote access
- Automated testing
- CI/CD
- Professional documentation
- Stable architecture

---

# Beyond Version 1.0

Future versions may include:

## Version 1.x

- Video recording
- Snapshots
- Motion detection
- Home Assistant integration
- HomeKit integration
- Plugin API
- Menu bar application
- AI-assisted detection

---

## Version 2.x

Potential long-term evolution:

- Native Windows support
- Native Linux support
- Desktop applications
- Multi-camera support
- Plugin ecosystem

---

## Roadmap Principles

The roadmap is intended to provide direction rather than fixed deadlines.

Features may be reordered as the project evolves.

Every release should leave the project in a stable, releasable state.
