---
# 00 – Project Status

# Project Status

**Version:** 0.1  
**Status:** Active  
**Last Updated:** 2026-07-31  
**Owner:** Vörðr Project

---

## Current Release

**Release:** v0.1 Foundation

The project is currently establishing its engineering foundation before feature development begins.

The objective of this release is to create a professional, maintainable, and secure development environment that all future work will build upon.

---

## Current Sprint

**Sprint:** Foundation

### Primary Objective

Complete the repository bootstrap and establish engineering standards.

---

## Current Development Status

### Completed

- Repository created
- GitHub Community Health files
- MIT license
- Node.js 24 LTS
- pnpm workspace
- TypeScript configuration
- Fastify bootstrap
- Initial `/health` endpoint with status and version metadata
- Development environment verified
- Engineering Handbook started
- AI task workflow introduced

---

### In Progress

- Engineering Handbook
- Architecture documentation
- Initial ADR collection
- Task specifications

---

### Next Tasks

- TASK-004 Repository metadata
- TASK-005 Architecture Decision Records (ADR)
- TASK-006 Logging foundation
- TASK-007 Testing foundation

---

## Current Technology Stack

| Area | Technology |
|------|------------|
| Runtime | Node.js 24 LTS |
| Language | TypeScript |
| Package Manager | pnpm |
| Backend | Fastify |
| Version Control | Git + GitHub |

Additional technologies will be introduced incrementally as the project evolves.

---

## Branch Strategy

The main branch should always remain stable.

Development is performed through feature branches.

Example:

- feature/repository-bootstrap
- feature/authentication
- feature/webrtc-signaling

---

## Definition of Success

The Foundation release is complete when:

- Repository structure is finalized
- Engineering standards are documented
- Handbook is established
- Task workflow is operational
- Development environment is reproducible
- Initial architecture documentation exists

---

## Notes

This document represents the current state of the project.

It should be updated whenever the active release, sprint, roadmap, or development status changes.

---
# 01 – Executive Summary

# Executive Summary

**Version:** 0.1  
**Status:** Active  
**Last Updated:** 2026-07-31  
**Owner:** Vörðr Project

---

## Overview

Vörðr is a modern, privacy-first, self-hosted and open-source remote camera server.

Its purpose is to allow users to securely access a camera remotely without relying on proprietary cloud services or vendor lock-in.

The project is intentionally designed with long-term maintainability, security, and professional engineering practices as first-class goals.

Vörðr supports AI-assisted development while ensuring that architectural decisions remain under human control.

---

## Vision

Build software that another experienced engineer can:

- Understand
- Trust
- Extend
- Maintain
- Confidently contribute to

The objective is not to build the largest feature set.

The objective is to build software professionally.

---

## Core Values

Every technical decision should reinforce one or more of these values:

- Privacy First
- Security by Default
- Simplicity over Complexity
- Documentation First
- Maintainability
- Open Source
- Long-term Sustainability

---

## Target Audience

Vörðr is intended for:

- Individuals who prefer self-hosted solutions
- Privacy-conscious users
- Home server enthusiasts
- Developers interested in modern backend architecture
- Contributors seeking a professionally structured open-source project

---

## Project Objectives

Version 1.0 aims to deliver:

- Secure administrator authentication
- Live browser-based camera preview
- Browser-to-browser WebRTC streaming
- Secure remote access
- Automated testing
- Professional documentation
- Reproducible development environment

---

## Scope

Vörðr focuses on delivering a secure and maintainable camera server.

Features that significantly increase complexity without improving the project's primary goals should generally be deferred until after Version 1.0.

---

## Success Criteria

The project is considered successful when it demonstrates:

- Professional software architecture
- Clean and maintainable code
- Strong security practices
- High-quality documentation
- Reliable automated testing
- A welcoming contributor experience

---

## Guiding Principle

Professional engineering practices are considered a feature of the software itself.

---
# 02 – Project Goals

# Project Goals

**Version:** 0.1  
**Status:** Active  
**Last Updated:** 2026-07-31  
**Owner:** Vörðr Project

---

## Purpose

The goals defined in this document guide every architectural and engineering decision made throughout the project.

Whenever multiple implementation options exist, the solution that best supports these goals should be preferred.

---

## Functional Goals

Version 1.0 aims to deliver the following core functionality:

- Secure administrator authentication
- Browser-based camera capture
- Live camera preview
- Browser-to-browser WebRTC streaming
- Secure remote access
- Complete project documentation
- Automated testing
- Continuous Integration (CI)

---

## Non-Functional Goals

The project should always prioritize:

- Security by default
- Privacy-first design
- Fully self-hosted deployment
- Cross-platform compatibility
- High maintainability
- Predictable releases
- Professional code quality
- Clear documentation
- AI-assisted development
- Contributor-friendly architecture

---

## Engineering Goals

Vörðr should demonstrate professional software engineering practices, including:

- Clean architecture
- Strong separation of responsibilities
- Consistent coding standards
- Task-driven development
- Architecture Decision Records (ADRs)
- Automated testing
- Continuous Integration
- High-quality documentation

---

## Open Source Goals

The project should be easy to understand and contribute to.

This includes:

- Clear documentation
- Small, focused tasks
- Predictable project structure
- Transparent architectural decisions
- Friendly contribution guidelines

---

## Long-Term Goals

Beyond Version 1.0, the project should evolve without requiring major architectural rewrites.

The architecture should support future expansion, including:

- Multiple cameras
- Recording
- Motion detection
- Plugin architecture
- Home automation integrations
- Native desktop applications

These features are intentionally outside the scope of Version 1.0.

---

## Decision Framework

When evaluating new features or architectural changes, the following questions should be considered:

1. Does this improve security?
2. Does this improve maintainability?
3. Does this simplify the architecture?
4. Does this align with Version 1.0 goals?
5. Does this increase long-term sustainability?

If the answer to most of these questions is "no", the change should be reconsidered.

---

## Success Definition

The project succeeds when it delivers a secure, maintainable, and professionally engineered self-hosted camera server that others can confidently understand, extend, and maintain.

---
# 03 – Engineering Principles

# Engineering Principles

**Version:** 0.1  
**Status:** Active  
**Last Updated:** 2026-07-31  
**Owner:** Vörðr Project

---

## Purpose

These engineering principles define how Vörðr is designed, implemented, and maintained.

Every architectural and implementation decision should support one or more of these principles.

---

## Security by Default

Security is considered a fundamental requirement rather than an optional feature.

Authentication, authorization, secure communication, and safe defaults should always be implemented before exposing functionality.

---

## Privacy First

User privacy is a primary design goal.

Vörðr avoids unnecessary data collection, minimizes stored information, and does not rely on proprietary cloud services.

---

## Documentation First

Architecture, workflows, and technical decisions should be documented as they are made.

Documentation is maintained alongside the codebase and is considered part of the implementation.

---

## Working Software Early

Deliver small, functional increments frequently.

Each completed task should leave the project in a working state.

---

## Every Release is Releasable

Every tagged release should be stable, documented, and suitable for public use.

Incomplete or experimental work should remain on feature branches until it is ready.

---

## Architecture Before Implementation

Significant architectural decisions should be made before implementation begins.

Important decisions should be recorded as Architecture Decision Records (ADRs).

---

## Test Before Merge

New functionality should be verified before being merged into the main branch.

Testing requirements increase as the project evolves.

---

## Quality Over Speed

Long-term maintainability is more valuable than rapid delivery.

Well-structured and understandable code is preferred over clever or overly complex solutions.

---

## Task-Driven Development

Development is organized into small, independent tasks with clearly defined objectives and acceptance criteria.

Tasks should be understandable by both human contributors and AI coding assistants.

---

## AI-Assisted Development

AI is used to assist development, improve productivity, and automate routine work.

Human developers remain responsible for architecture, security, design decisions, and final approval of all changes.

---

## Continuous Improvement

Engineering practices should evolve together with the project.

Lessons learned during development should be reflected in the handbook, documentation, and development workflow.

---
# 04 – Technology Stack

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

---
# 05 – High-Level Architecture

# High-Level Architecture

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-07-31
**Owner:** Vörðr Project

---

## Purpose

This document provides a high-level overview of the Vörðr system architecture.

It describes the major components of the application and how they interact without focusing on implementation details.

---

## Architecture Overview

                Browser
                    │
          getUserMedia()
                    │
                    ▼
          Vite Frontend
             (TypeScript)
                    │
         HTTPS / WebSocket
                    │
                    ▼
            Fastify Backend
        ┌──────────────────────┐
        │ Authentication       │
        │ REST API             │
        │ WebSocket Signaling  │
        │ Audit Logging        │
        └──────────────────────┘
                    │
                    ▼
              SQLite Database

---

## Component Overview

### Browser

The browser is responsible for:

- Camera access using `getUserMedia()`
- Displaying the user interface
- Establishing WebRTC connections
- Communicating with the backend

---

### Frontend

The frontend provides:

- Administrator interface
- Live camera preview
- Authentication views
- WebRTC client
- Communication with the backend API

---

### Backend

The Fastify backend is responsible for:

- Authentication
- Session management
- REST API
- WebSocket signaling
- Security middleware
- Audit logging
- Application configuration

The backend never accesses the camera directly.

---

### Database

SQLite stores:

- Administrator account
- Password hash
- Application settings
- Audit logs

Version 1.0 intentionally avoids unnecessary database complexity.

---

## Design Principles

The architecture follows several important principles:

- Separation of responsibilities
- Minimal dependencies
- Clear component boundaries
- Secure-by-default design
- Maintainable structure
- Incremental evolution

---

## Data Flow

Typical request flow:

1. User opens the web interface.
2. The browser authenticates with the backend.
3. The browser requests camera access.
4. Camera video is captured locally.
5. WebRTC negotiation is performed through Fastify WebSockets.
6. Media streams are exchanged directly between browsers.
7. The backend coordinates signaling but does not relay video.

---

## Security Model

Security is implemented in layers.

Authentication occurs before remote access.

Sensitive information is never written to application logs.

Video streams remain peer-to-peer whenever possible.

---

## Future Expansion

The architecture is designed to support future features without major redesign.

Potential future extensions include:

- Multiple cameras
- Recording
- Motion detection
- Home automation integrations
- Plugin architecture
- Native desktop applications

These capabilities are intentionally outside the scope of Version 1.0.

---
# 06 – Security Architecture

# Security Architecture

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-07-31
**Owner:** Vörðr Project

---

## Purpose

This document describes the security architecture of the Vörðr project.

Security is considered a core design requirement and influences every architectural decision throughout the project.

---

## Security Philosophy

Vörðr follows a secure-by-default approach.

Security is designed into the system rather than added after implementation.

Every new feature should be evaluated from a security perspective before development begins.

---

## Security Principles

The project follows these principles:

- Secure by default
- Least privilege
- Defense in depth
- Privacy first
- Authentication before remote access
- Minimal attack surface
- Safe defaults
- No unnecessary data collection

---

## Authentication

Version 1.0 supports a single administrator account.

Authentication is required before accessing any protected functionality.

Passwords are never stored in plain text.

---

## Password Storage

Administrator passwords are protected using:

- @node-rs/argon2
- Strong password hashing
- Salted password hashes

Password hashes are never exposed through logs or APIs.

---

## Session Management

Authenticated sessions are managed using secure cookies.

Sessions should:

- Be encrypted
- Expire automatically
- Be invalidated after logout
- Use secure cookie settings

---

## Remote Access

Remote access is introduced only after authentication is fully implemented.

Supported deployment methods include:

- Tailscale
- Cloudflare Tunnel

Direct exposure of application ports to the public Internet is discouraged.

---

## Logging

Application logs are intended for operational monitoring.

Sensitive information must never be written to logs.

Examples include:

- Passwords
- Session tokens
- Authentication secrets
- Camera streams
- Personal information

---

## Database Security

SQLite stores only the minimum required information.

Sensitive values are protected using appropriate cryptographic techniques where applicable.

---

## WebRTC Security

WebRTC media streams are exchanged directly between peers whenever possible.

The backend coordinates signaling but does not process or store video streams.

---

## Security Headers

HTTP responses should include appropriate security headers.

Examples include:

- Content Security Policy
- X-Content-Type-Options
- Referrer Policy
- Frame protection

Helmet is used to simplify secure defaults.

---

## Rate Limiting

Authentication endpoints should be protected against brute-force attacks.

Rate limiting is applied before authentication succeeds.

---

## Dependency Security

Project dependencies should:

- Be actively maintained
- Receive security updates
- Be reviewed before adoption
- Be updated regularly

Unused dependencies should be removed.

---

## Security Reviews

Major features should undergo a security review before release.

Security considerations should be documented alongside architectural decisions.

---

## Future Improvements

Future releases may introduce:

- Multi-user authentication
- Two-factor authentication
- Hardware security keys
- Additional audit capabilities

These features are intentionally outside the scope of Version 1.0.

---
# 07 – Repository Structure

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

---
# 08 – Development Workflow

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

---
# 09 – AI-Assisted Development

# AI-Assisted Development

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-07-31
**Owner:** Vörðr Project

---

## Purpose

This document defines how artificial intelligence is used during the development of the Vörðr project.

AI is treated as an engineering assistant that helps improve productivity and software quality while leaving architectural ownership to human developers.

---

## Development Philosophy

Artificial intelligence is used as an engineering assistant throughout the project.

AI may assist with planning, implementation, refactoring, testing, and documentation whenever it provides clear value.

The human developer remains responsible for writing, reviewing, understanding, and approving the final implementation.

AI is a tool that supports engineering decisions—not a replacement for them.

---

## AI Tooling

The project may use different AI assistants depending on the task.

Examples include:

- ChatGPT
- Codex
- GitHub Copilot
- Other AI coding assistants

No specific AI tool is required.

The choice of tool depends on the task and developer preference.

---

### ChatGPT

Typically used for:

- Architecture discussions
- Technical planning
- Documentation
- Code reviews
- Design decisions
- Task definition

---

### AI Coding Assistants

AI coding assistants may be used for:

- Implementing well-defined tasks
- Generating boilerplate code
- Refactoring
- Writing tests
- Updating documentation

AI-generated code should always be reviewed before it becomes part of the project.

---

## Human Responsibilities

The human developer is always responsible for:

- Understanding the implementation
- Architectural decisions
- Security decisions
- Reviewing AI-generated code
- Writing and modifying code where appropriate
- Verifying correctness
- Approving pull requests
- Maintaining the long-term direction of the project

Responsibility for the software cannot be delegated to AI.

---

## Task-Based Development

Implementation work should be organized into small, self-contained tasks.

Each task should include:

- Objective
- Requirements
- Acceptance criteria
- Completion checklist

This approach allows both humans and AI assistants to work consistently.

---

## Code Review

All AI-generated code should be reviewed before merging.

Reviews should verify:

- Correctness
- Readability
- Security
- Maintainability
- Consistency with project standards

---

## Documentation

AI may assist with documentation.

Documentation generated by AI should be reviewed to ensure it accurately reflects the current implementation.

---

## Engineering Principles

AI-generated contributions should follow the same engineering standards as manually written code.

There are no separate quality standards for AI-generated work.

---

## Long-Term Vision

Vörðr demonstrates how modern software engineering can effectively combine human expertise with AI-assisted development.

AI is used where it improves productivity or quality.

The project remains human-driven, with AI serving as an assistant rather than an autonomous developer.

---
# 10 – Release Roadmap

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

---
# 11 – Beyond Version 1.0

# Beyond Version 1.0

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-07-31
**Owner:** Vörðr Project

---

## Purpose

This document outlines the long-term vision for Vörðr beyond the initial stable release.

The features described here represent potential future directions rather than committed roadmap items.

Actual priorities will be determined based on community feedback, project maturity, and available development resources.

---

## Version 1.x

After the first stable release, development will focus on improving functionality while preserving the existing architecture.

Potential features include:

- Video recording
- Snapshot capture
- Motion detection
- Home Assistant integration
- Apple HomeKit integration
- Plugin API
- Menu bar application
- AI-assisted object detection
- Performance improvements
- Accessibility improvements

---

## Version 2.x

Version 2.x may introduce larger architectural improvements.

Potential areas include:

- Native Windows support
- Native Linux support
- Native desktop applications
- Multi-camera support
- Expanded plugin ecosystem
- Distributed deployments
- Improved scalability
- Enterprise-oriented deployment options

---

## Community Contributions

As an open-source project, Vörðr welcomes community feedback and contributions.

Future priorities may evolve based on:

- User feedback
- Community discussions
- Pull requests
- Security improvements
- Real-world deployment experience

---

## Guiding Principles

Future development should continue to follow the project's core engineering principles:

- Privacy first
- Security by default
- Professional engineering practices
- High-quality documentation
- Maintainable architecture
- Incremental development

New functionality should never compromise these principles.

---
# 12 – Project Philosophy

# Project Philosophy

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-07-31
**Owner:** Vörðr Project

---

## Purpose

This document defines the long-term philosophy that guides every engineering decision within the Vörðr project.

While technologies and features may evolve, these principles should remain stable.

---

## Our Goal

Vörðr is not intended to become the largest or most feature-rich camera server.

Instead, the project aims to demonstrate how modern software can be designed, documented, tested, and maintained using professional engineering practices.

Every feature should contribute to building reliable, understandable, and maintainable software.

---

## Engineering Mindset

The project values:

- Simplicity over unnecessary complexity
- Readability over cleverness
- Maintainability over short-term speed
- Stability over feature count
- Security over convenience
- Privacy over data collection

Every technical decision should support one or more of these values.

---

## Open Source

Vörðr is developed as an open-source project.

Contributions are welcome from anyone who shares the project's engineering values.

Code quality, respectful collaboration, and constructive feedback are valued more than the number of contributions.

---

## Documentation

Documentation is considered part of the software.

New features should be documented alongside their implementation whenever appropriate.

Clear documentation reduces maintenance costs and makes the project more approachable for future contributors.

---

## AI-Assisted Engineering

AI is used to assist development where it provides clear value.

Human developers remain responsible for understanding, reviewing, and approving every change.

Engineering responsibility always belongs to people, not to AI tools.

---

## Long-Term Vision

The long-term vision of Vörðr is to become a trustworthy, privacy-first, self-hosted camera platform that developers can confidently learn from, contribute to, and deploy.

Success is measured by software quality, maintainability, security, and clarity—not by the number of implemented features.

---

## Final Statement

Professional engineering practices are not separate from the product—they are part of the product itself.

Every commit, every review, every document, and every release should reflect that philosophy.

---
# README – Vörðr Engineering Handbook

# Vörðr Engineering Handbook

> The official engineering reference for the Vörðr project.

**Version:** 0.1  
**Status:** Active  
**Applies to:** Vörðr v0.1 Foundation

---

## Purpose

The Engineering Handbook defines how Vörðr is designed, developed, maintained, and released.

It serves as the single source of truth for project architecture, engineering practices, development workflow, and technical decisions.

This handbook is intended for:

- Project maintainers
- Contributors
- AI coding assistants
- Code reviewers
- Future developers

Every architectural decision should be consistent with the principles described in this handbook.

---

## Project Philosophy

Vörðr is developed as if every commit may be read, reviewed, and extended by another engineer tomorrow.

Every decision should therefore prioritize:

- Clarity
- Maintainability
- Security
- Documentation
- Long-term quality

Working software is important.

Professional engineering practices are considered a feature of the software itself.

---

## Handbook Structure

| Chapter | Description |
|----------|-------------|
| 00 | Current project status |
| 01 | Executive summary |
| 02 | Project goals |
| 03 | Engineering principles |
| 04 | Technology stack |
| 05 | System architecture |
| 06 | Repository structure |
| 07 | Development workflow |
| 08 | Task-driven development |
| 09 | AI-assisted development |
| 10 | Security architecture |
| 11 | Release roadmap |
| 12 | Definition of Done |
| 13 | Future roadmap |

---

## Reading Order

New contributors should read the handbook in the following order:

1. Project Status
2. Executive Summary
3. Engineering Principles
4. Development Workflow
5. Task-Driven Development
6. AI-Assisted Development

The remaining chapters can then be used as technical references during implementation.

---

## Related Documentation

The Engineering Handbook complements the following project documentation:

- README.md
- AGENTS.md
- CONTRIBUTING.md
- SECURITY.md
- ADR documents
- Task specifications

---

## Living Document

This handbook evolves together with the project.

Every significant architectural or engineering decision should be reflected here before implementation whenever practical.

Documentation is considered part of the implementation—not an afterthought.
