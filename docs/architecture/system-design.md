# System Design

## High-Level Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Vercel (CDN)                       │
│              React SPA (WriteSphere)                     │
│         ┌─────────────────────────────────┐          │
│         │  TanStack Query → Axios → API   │          │
│         └─────────────────────────────────┘          │
└────────────────────┬────────────────────────────────┘
                     │ HTTPS
                     ▼
┌─────────────────────────────────────────────────────┐
│                Render (Backend)                      │
│         ┌─────────────────────────────────┐          │
│         │         FastAPI Server          │          │
│         │  ┌───────┐ ┌───────┐ ┌──────┐  │          │
│         │  │ Auth  │ │ Blog  │ │Comment│  │          │
│         │  └───┬───┘ └───┬───┘ └──┬───┘  │          │
│         │      │         │        │       │          │
│         │  ┌───▼─────────▼────────▼───┐  │          │
│         │  │     Service Layer        │  │          │
│         │  └───┬─────────────────────┘  │          │
│         │  ┌───▼─────────────────────┐  │          │
│         │  │    Repository Layer     │  │          │
│         │  └───┬─────────────────────┘  │          │
│         └──────┼───────────────────────┘          │
└────────────────┼──────────────────────────────────┘
                 │
    ┌────────────┼────────────┐
    ▼            ▼            ▼
┌────────┐ ┌──────────┐ ┌──────────┐
│PostgreSQL│ │Cloudinary│ │  Email   │
│Supabase │ │  Media   │ │ Service  │
│ /Neon   │ │ Storage  │ │ (Future) │
└────────┘ └──────────┘ └──────────┘
```

## Data Flow

1. User interacts with React SPA
2. Axios sends HTTP request with JWT in Authorization header
3. FastAPI validates JWT via dependency injection
4. Request passes through middleware (CORS, logging, rate limiting)
5. Router validates input via Pydantic schemas
6. Service layer executes business logic
7. Repository layer queries/updates database via SQLAlchemy
8. Response flows back through the same layers
9. TanStack Query caches response on the frontend

## Security Boundaries

- **JWT Validation** — Every protected route validates the access token
- **CORS** — Restricted to frontend origin
- **Rate Limiting** — SlowAPI limits request frequency
- **Input Validation** — Pydantic schemas reject malformed data
- **SQL Injection** — Prevented by SQLAlchemy parameterized queries
- **Password Hashing** — bcrypt via Passlib

## Scalability Considerations

- **Stateless API** — Any instance can handle any request
- **Database Indexes** — On slug, user_id, created_at, etc.
- **Pagination** — Cursor or offset-based for all list endpoints
- **Image CDN** — Cloudinary handles media delivery and optimization
