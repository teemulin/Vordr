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
