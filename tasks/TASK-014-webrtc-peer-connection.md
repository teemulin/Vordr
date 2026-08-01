# TASK-014 — WebRTC Peer Connection

## Goal

Establish the first WebRTC peer connection between two browser clients.

This task focuses on creating the peer connection and exchanging the required signaling messages. Media streaming will be implemented in the following task.

---

## Requirements

- Create an RTCPeerConnection.
- Implement SDP offer creation.
- Implement SDP answer handling.
- Exchange ICE candidates through the existing WebSocket signaling channel.
- Successfully establish a peer connection.
- Do not attach any media streams.
- Do not implement audio.
- Do not implement authentication.

---

## Acceptance Criteria

- [ ] RTCPeerConnection created
- [ ] SDP offer generated
- [ ] SDP answer handled
- [ ] ICE candidates exchanged
- [ ] Peer connection established
- [ ] pnpm typecheck passes
- [ ] pnpm build passes

---

## Out of Scope

- Camera streaming
- Audio
- Recording
- Authentication
- TURN server
- Remote deployment

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] Documentation updated
- [ ] Ready for Pull Request
