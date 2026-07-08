# Testing Strategy

## Approach

### Frontend

- **Unit Tests:** Vitest + React Testing Library for components and hooks
- **Integration Tests:** Testing library for user flows
- **E2E (Future):** Playwright or Cypress

### Backend

- **Unit Tests:** Pytest for services, repositories, utils
- **Integration Tests:** Pytest + httpx AsyncClient for API endpoints
- **Database Tests:** Test fixtures with test database

## Test Coverage Goals

- **Critical paths:** 100% — Auth, blog CRUD, comments
- **Components:** 80% — Rendering, interactions, edge cases
- **Services:** 90% — Business logic, error handling
- **Repositories:** 80% — Query logic, pagination
- **API endpoints:** 90% — Request validation, responses, auth

## Test Naming Convention

- Frontend: `*.test.tsx` or `*.spec.tsx`
- Backend: `test_*.py`
