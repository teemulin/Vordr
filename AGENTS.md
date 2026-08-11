# AGENTS.md

# Vörðr AI Development Guide

This document defines the engineering standards that AI coding assistants (Codex, GitHub Copilot, Claude, ChatGPT and similar tools) must follow when contributing to Vörðr.

The goal is not to maximize code generation speed.

The goal is to maximize software quality.

---

# Project Overview

Project: Vörðr

Technical identifier: Vordr

Mission:

Build a modern, secure and open-source self-hosted remote camera server with a strong focus on privacy, maintainability and software craftsmanship.

This repository is also intended to serve as a professional portfolio project.

---

# Core Engineering Principles

Always prioritize:

1. Security by Default
2. Privacy First
3. Simplicity
4. Readability
5. Maintainability
6. Testability
7. Documentation

Never trade long-term maintainability for short-term convenience.

---

# Technology Stack

Runtime

- Node.js 24 LTS

Language

- TypeScript

Backend

- Fastify

Frontend

- Vite
- TypeScript

Streaming

- WebRTC

Signaling

- Fastify WebSockets

Authentication

- @node-rs/argon2
- @fastify/secure-session

Storage

- node:sqlite

Logging

- Pino

Testing

- Vitest
- Playwright

Package manager

- pnpm

CI

- GitHub Actions

---

# Architecture Rules

Always follow existing ADRs.

Do not introduce architectural changes without a new ADR.

Authentication must always exist before remote access.

The server never directly captures camera devices.

Camera access always originates from the browser using getUserMedia().

Remote access assumes deployment behind Tailscale or Cloudflare Tunnel.

Avoid unnecessary abstractions.

Prefer composition over inheritance.

---

# TypeScript Guidelines

Always use strict TypeScript.

Avoid "any".

Prefer "unknown" over "any".

Use explicit return types for exported functions.

Prefer readonly whenever appropriate.

Prefer small interfaces over large object types.

Prefer discriminated unions over boolean flags.

Never disable compiler errors.

---

# Fastify Guidelines

Use Fastify plugins.

Keep route handlers small.

Move business logic into services.

Validate all input.

Return proper HTTP status codes.

Never throw raw errors to clients.

Always log unexpected failures.

---

# Code Style

Favor clarity over cleverness.

Functions should have one responsibility.

Prefer early returns.

Avoid nested conditionals.

Keep files reasonably small.

Avoid comments that explain WHAT.

Use comments only to explain WHY.

Use descriptive names.

Avoid abbreviations.

---

# Error Handling

Never silently ignore errors.

Return meaningful error messages.

Do not expose stack traces.

Always log unexpected exceptions.

---

# Security

Never log:

- passwords
- session tokens
- authentication secrets
- personal data
- video frames

Always hash passwords using Argon2.

Always validate external input.

Always assume user input is malicious.

---

# Testing

Every new feature should include tests.

Unit tests:

- Vitest

Browser tests:

- Playwright

Media tests should use Chromium fake media devices.

Do not merge code that breaks existing tests.

---

# Documentation

Public APIs should be documented.

Update documentation together with code.

Update ADRs when architectural decisions change.

Keep README accurate.

---

# Dependencies

Prefer standard library features whenever practical.

Minimize third-party dependencies.

Avoid packages that are poorly maintained.

Justify large dependencies.

---

# Git Workflow

Development flow:

Issue

↓

Feature branch

↓

Implementation

↓

Tests

↓

Documentation

↓

Pull Request

↓

Review

↓

Merge

Every commit should represent one logical change.

Use Conventional Commits.

Examples:

feat:

fix:

docs:

refactor:

test:

build:

ci:

chore:

---

# AI Assistant Rules

When generating code:

- produce production-quality code
- avoid placeholders
- avoid TODO comments unless explicitly requested
- avoid unnecessary complexity
- follow existing project structure
- prefer consistency over novelty

When uncertain:

Choose the simplest solution that satisfies the requirements.

---

# Task Execution Protocol

Tasks are stored locally in the `tasks/` directory.

The `tasks/` directory is intentionally excluded from version control.
Task specifications are local development artifacts and must not be
committed to the repository unless explicitly requested.

When the user asks to implement a task by identifier, for example:

Implement TASK-017

the AI assistant MUST follow this workflow.

## 1. Locate the Task

Find the corresponding task specification in:

`tasks/`

Tasks use the naming convention:

`TASK-XXX-short-description.md`

If the requested task cannot be found, do not guess its requirements.
Ask the user to provide or locate the task specification.

## 2. Read the Task Completely

Read the complete task specification before modifying code.

The task specification defines the intended scope of the implementation.

Pay particular attention to:

- Goal
- Requirements
- Constraints
- Acceptance Criteria
- Out of Scope
- Verification
- Completion Checklist

## 3. Read Relevant Project Context

Before implementation, inspect the repository documentation relevant to
the task.

Depending on the task, this may include:

- Engineering Handbook
- Architecture documentation
- ADRs
- Roadmap
- README
- Existing tests
- Related implementations

Do not read unrelated documentation merely for the sake of doing so.

## 4. Inspect Existing Implementation

Before making changes:

- inspect the existing code related to the task
- identify existing patterns and abstractions
- inspect relevant tests
- identify dependencies on previous tasks
- understand the current architecture

Do not assume that functionality needs to be implemented from scratch.

## 5. Respect Task Scope

Implement the requirements defined by the task.

Do not:

- add unrelated features
- perform unrelated refactoring
- introduce unnecessary dependencies
- introduce new architecture without justification
- implement functionality explicitly marked Out of Scope

If an improvement appears useful but is outside the task scope, mention it
in the final report instead of implementing it automatically.

## 6. Resolve Conflicts

If the task specification conflicts with:

- `AGENTS.md`
- the Engineering Handbook
- architecture documentation
- an ADR
- established repository conventions

do not silently choose an interpretation.

Report the conflict before making changes when the conflict affects the
correct implementation approach.

## 7. Implement

Use the smallest reasonable implementation that satisfies the task.

Prefer:

- existing project patterns
- existing abstractions
- minimal dependencies
- clear and maintainable code
- consistency with the current architecture

Avoid over-engineering.

## 8. Verify

Before considering the task complete:

- run tests relevant to the task
- run `pnpm typecheck`
- run `pnpm build`
- run `git diff --check`
- inspect the final `git diff`

If the task specifies additional verification requirements, those must also
be performed.

Do not claim that a task is complete if required verification fails.

## 9. Final Review

Before reporting completion, verify that:

- all requirements are implemented
- acceptance criteria are satisfied
- no unrelated changes were introduced
- the final diff matches the task scope
- documentation was updated when required

## 10. Final Report

After implementation, report:

1. What was implemented
2. Files changed
3. Important implementation decisions
4. Verification results
5. Limitations or unresolved issues
6. Anything intentionally left out because it was out of scope

The AI assistant must not create a commit unless the user explicitly asks
for one.

## Task Completion

A task is implementation-complete only when:

- requirements are implemented
- acceptance criteria are satisfied
- required verification passes
- final diff has been reviewed
- no unrelated changes were introduced

The task specification itself must not be modified merely to make
implementation appear complete.

---

# Definition of Done

A task is complete only when:

- implementation finished
- tests pass
- lint passes
- formatting passes
- documentation updated
- ADR updated (if required)

---

# Non-Goals

Do not introduce:

- unnecessary frameworks
- unnecessary dependencies
- premature optimization
- over-engineering
- experimental technologies without justification

---

Quality is a feature.

Maintainability is a feature.

Security is a feature.

Documentation is a feature.

## Project Structure

- apps/web contains the frontend.

- src contains the backend.

- docs contains all project documentation.

- tests contains integration and end-to-end tests.

- Do not introduce new top-level directories without justification.
