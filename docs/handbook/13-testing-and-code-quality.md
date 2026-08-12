# Testing and Code Quality

**Version:** 0.1
**Status:** Active
**Last Updated:** 2026-08-12
**Owner:** Vörðr Project

---

## Purpose

This document describes the automated testing and code quality infrastructure for the Vörðr project.

It provides guidance on running tests locally, understanding the test structure, and executing quality checks as part of the development workflow.

---

## Quick Start

### Run All Quality Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm test
```

### Run Individual Quality Checks

**Type checking:**
```bash
pnpm typecheck
```

**Linting:**
```bash
pnpm lint
```

**Building:**
```bash
pnpm build
```

**All tests:**
```bash
pnpm test
```

**Backend unit and integration tests:**
```bash
pnpm test:unit
```

**Browser end-to-end tests:**
```bash
pnpm test:e2e
```

**Watch mode (automatic re-run on file changes):**
```bash
pnpm test:watch
```

**Test UI dashboard:**
```bash
pnpm test:ui
```

---

## Test Structure

Tests are organized by type in the `tests/` directory.

### Backend Tests

Location: `tests/backend/`

Backend tests exercise the Fastify application directly using Vitest.

Backend tests verify:
- HTTP endpoints
- API responses
- Server initialization
- Request/response handling

Backend tests use the existing `buildServer()` function to create the Fastify application instance and test it without requiring a running server process.

Example test:

```typescript
import { describe, it, expect } from "vitest";
import { buildServer } from "../../src/server/app.js";

describe("Fastify Server", () => {
  it("should respond to health check endpoint", async () => {
    const app = buildServer();
    const response = await app.inject({
      method: "GET",
      url: "/health",
    });
    expect(response.statusCode).toBe(200);
  });
});
```

### Browser End-to-End Tests

Location: `tests/e2e/`

End-to-end tests use Playwright to launch a browser, start or connect to the Vörðr application, and verify functionality from the user's perspective.

End-to-end tests verify:
- Application startup
- Page rendering
- UI interactions
- Browser functionality

Example test:

```typescript
import { test, expect } from "@playwright/test";

test("should load the application", async ({ page }) => {
  await page.goto("/");
  const content = await page.textContent("body");
  expect(content).toBeTruthy();
});
```

---

## Testing Infrastructure

### Vitest

Backend testing uses Vitest.

Configuration: `vitest.config.ts`

Features:
- ES modules support
- TypeScript support
- Fast test execution
- Watch mode for development

### Playwright

Browser end-to-end testing uses Playwright.

Configuration: `playwright.config.ts`

Features:
- Chromium automation
- Automatic application startup
- Browser interaction testing
- HTML reports

**Browser Installation:**

Playwright requires browser binaries. Install with:

```bash
pnpm exec playwright install
```

---

## Static Code Analysis

### ESLint

Static code analysis uses ESLint for:
- TypeScript type safety violations
- Common code quality issues
- Consistency checks

Configuration: `eslint.config.js`

The ESLint configuration is based on:
- JavaScript recommended rules
- TypeScript recommended and strict rules
- Project-specific customizations

Run ESLint:

```bash
pnpm lint
```

---

## Development Quality Workflow

The recommended development workflow is:

1. **Implement** - Write the feature or fix
2. **Test** - Add or update tests
3. **Lint** - Run ESLint to check code quality
4. **Type Check** - Run TypeScript type checker
5. **Build** - Ensure the project builds
6. **Review** - Review the changes before committing

Example:

```bash
# Implement feature
# ... add/modify code ...

# Run tests
pnpm test

# Run linter
pnpm lint

# Type check
pnpm typecheck

# Build
pnpm build

# If all pass, commit and push
```

---

## CI/CD Compatibility

The testing and linting infrastructure is designed for CI/CD environments.

In CI:
- Tests run in non-interactive mode
- Results are deterministic
- No GUI or desktop display is required
- Browser tests use Chromium headless mode
- Test processes terminate cleanly

---

## Creating New Tests

### Adding a Backend Test

1. Create a new test file in `tests/backend/`
2. Use the `.test.ts` extension
3. Import Vitest functions and the module to test
4. Write test cases

```typescript
import { describe, it, expect } from "vitest";
import { buildServer } from "../../src/server/app.js";

describe("Feature Name", () => {
  it("should behave correctly", async () => {
    const app = buildServer();
    // Test implementation
    expect(result).toEqual(expected);
  });
});
```

### Adding an End-to-End Test

1. Create a new test file in `tests/e2e/`
2. Use the `.test.ts` extension
3. Import Playwright test functions
4. Write test cases

```typescript
import { test, expect } from "@playwright/test";

test("Feature Name", async ({ page }) => {
  await page.goto("/");
  // Test implementation
  await expect(page.locator("selector")).toBeVisible();
});
```

---

## Testing Best Practices

- **Test real behavior** - Test the actual application code, not mock implementations
- **Keep tests focused** - One test should verify one behavior
- **Use clear names** - Test names should describe what is being tested
- **Avoid external dependencies** - Tests must not require external services or hardware
- **Deterministic results** - Tests should produce consistent results every time
- **Fast execution** - Tests should run quickly to enable frequent feedback

---

## Troubleshooting

### Tests Fail to Run

Ensure all dependencies are installed:

```bash
pnpm install
```

### Playwright Browser Not Found

Install browser binaries:

```bash
pnpm exec playwright install
```

### ESLint Parsing Errors

Ensure TypeScript is properly configured:

```bash
pnpm typecheck
```

### Type Checking Failures

Update to the latest TypeScript:

```bash
pnpm update typescript
```

---

## Further Reading

- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [ESLint Documentation](https://eslint.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
