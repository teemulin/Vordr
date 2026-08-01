# Repository Structure

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-07-31
**Owner:** Vörðr Project

---

## Purpose

This document describes the overall repository structure of the Vörðr project.

A predictable and well-organized repository makes the project easier to understand, maintain, and extend.

---

## Repository Layout

```
Vordr/

├── .github/
├── apps/
├── docs/
│   ├── adr/
│   ├── architecture/
│   ├── development/
│   └── handbook/
├── scripts/
├── src/
├── tasks/
├── tests/

├── README.md
├── AGENTS.md
├── CONTRIBUTING.md
├── SECURITY.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

---

## Directory Overview

### .github/

GitHub configuration files.

Examples:

- Workflows
- Issue templates
- Pull request templates

---

### apps/

Frontend applications.

Version 1.0 contains the browser application.

Additional applications may be introduced in future versions.

---

### docs/

Project documentation.

Includes:

- Architecture documentation
- ADRs
- Development guides
- Engineering Handbook

---

### scripts/

Utility scripts used during development.

Scripts should automate repetitive development tasks.

---

### src/

Backend application source code.

Production code belongs here.

---

### tasks/

Implementation tasks.

Each task represents a small, self-contained piece of work that can be completed independently.

Tasks are designed for both human contributors and AI coding assistants.

---

### tests/

Automated tests.

Includes:

- Unit tests
- Integration tests
- End-to-end tests

---

## Root Files

### README.md

Project overview and quick start guide.

---

### AGENTS.md

Instructions for AI coding assistants working on the project.

---

### CONTRIBUTING.md

Guidelines for contributors.

---

### SECURITY.md

Security reporting policy.

---

### CODE_OF_CONDUCT.md

Community standards.

---

### LICENSE

Project license.

---

### package.json

Node.js project configuration.

---

### pnpm-workspace.yaml

Workspace configuration.

---

### tsconfig.json

TypeScript configuration.

---

## Repository Principles

The repository should remain:

- Easy to navigate
- Predictable
- Well documented
- Consistently organized

New directories should only be introduced when they provide clear long-term value.

---

## Future Expansion

As the project grows, additional directories may be introduced for:

- Shared libraries
- Desktop applications
- Plugins
- Deployment resources

Repository organization should continue to prioritize clarity over complexity.
