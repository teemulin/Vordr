# TASK-012 — Camera Preview

## Goal

Display the local camera feed inside the browser using the MediaDevices API.

This task introduces the first functional feature of Vordr by allowing users to preview their local camera before any remote streaming functionality is implemented.

---

## Requirements

- Request permission to access the user's camera.
- Use the browser's MediaDevices API (`getUserMedia()`).
- Display the live camera feed in the preview area.
- Handle permission denial gracefully.
- Handle missing camera devices gracefully.
- Do not implement audio.
- Do not implement WebRTC.
- Do not implement recording.

---

## Acceptance Criteria

- [ ] Camera permission is requested
- [ ] Live camera preview is displayed
- [ ] Permission errors are handled gracefully
- [ ] Missing camera devices are handled gracefully
- [ ] pnpm typecheck passes
- [ ] pnpm build passes

---

## Out of Scope

- Audio
- Recording
- Remote streaming
- WebRTC
- Authentication
- Multiple cameras

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] Documentation updated
- [ ] Ready for Pull Request
