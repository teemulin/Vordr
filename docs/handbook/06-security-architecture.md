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
