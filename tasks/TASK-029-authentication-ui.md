# TASK-029 — Authentication UI

## Goal

Create a login interface in the frontend.

This task implements the user interface for administrator authentication.

---

## Requirements

- Create login form in frontend
- Collect username and password
- Send credentials to POST `/auth/login`
- Display login errors appropriately
- Redirect to camera view on successful login
- Redirect to login on unauthenticated access
- Do not store credentials in browser storage permanently
- Use HTTPS (in browser context, same-origin)
- Display appropriate error messages
- Do not expose server errors to user

---

## Acceptance Criteria

- [ ] Login form created
- [ ] Credentials submitted to server correctly
- [ ] Success redirects to camera view
- [ ] Errors displayed appropriately
- [ ] Unauthenticated access redirected to login
- [ ] No credentials stored in localStorage/sessionStorage permanently
- [ ] pnpm typecheck passes
- [ ] pnpm build passes

---

## Out of Scope

- Password reset functionality
- Account creation UI
- Multi-user UI
- OAuth/social login
- Remember me functionality

---

## Completion Checklist

- [ ] Requirements implemented
- [ ] Acceptance criteria verified
- [ ] User experience reviewed
- [ ] Documentation updated
- [ ] Ready for Pull Request

