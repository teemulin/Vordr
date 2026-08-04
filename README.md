# Vörðr

> A modern, secure and open-source remote camera server.

Vörðr is a privacy-first, self-hosted remote camera server that allows users to turn a supported computer into a secure remotely accessible camera without relying on proprietary cloud services.

The project emphasizes modern software engineering practices, security by default, and maintainable architecture. It also serves as a professional portfolio project demonstrating high-quality software craftsmanship.

## ✨ Goals

- Secure by default
- Privacy-first architecture
- Self-hosted
- Modern TypeScript stack
- Cross-platform architecture
- Open source

## 🚧 Project Status

**Current milestone:** Sprint 0 – Repository Bootstrap

The project is currently under active development.

## 🛠 Technology Stack

- Node.js 24 LTS
- TypeScript
- Fastify
- WebRTC
- Vite
- pnpm
- Docker
- Vitest
- Playwright
- GitHub Actions

## Development

Run the complete type check and production build with:

```sh
pnpm typecheck
pnpm build
```

The frontend lives in `apps/web`. Start its Vite development server with:

```sh
pnpm --filter @vordr/web dev
```

## WebSocket protocol

The server exposes a WebSocket endpoint at `/ws`. Messages are JSON objects with
a `type` field. The current protocol supports:

| Client message | Server response |
| --- | --- |
| `{ "type": "hello" }` | `{ "type": "hello", "version": "0.1.0" }` |
| `{ "type": "ping" }` | `{ "type": "pong" }` |

Unknown message types receive `{ "type": "error", "message": "Unknown message type" }`.
Invalid JSON closes the connection.

## 📚 Documentation

Project documentation is located in the `docs/` directory.

Key documents include:

- Project Charter
- Roadmap
- Architecture
- ADRs (Architecture Decision Records)

## 🤝 Contributing

Contributions are welcome. Please read `CONTRIBUTING.md` before opening issues or pull requests.

## 📄 License

This project is licensed under the MIT License.
