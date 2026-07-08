# Backend Architecture

## Overview

FastAPI application following a layered architecture with clear separation of concerns: API → Service → Repository → ORM.

## Architecture Layers

```
Client (React)
    │
    ▼
API Layer (FastAPI Routers)
    │  — Request validation (Pydantic)
    │  — Dependency injection
    │  — Rate limiting (SlowAPI)
    │
    ▼
Service Layer
    │  — Business logic
    │  — Orchestration
    │  — Background tasks
    │
    ▼
Repository Layer
    │  — Database queries
    │  — Data access abstraction
    │
    ▼
SQLAlchemy ORM (2.0)
    │  — Async session management
    │
    ▼
PostgreSQL
```

## Key Components

- **FastAPI Routers** — Grouped by domain (auth, users, posts, comments, etc.)
- **Dependencies** — Injectable dependencies (current user, db session, permissions)
- **Middlewares** — CORS, security headers, request logging
- **Validators** — Custom Pydantic validators and field constraints
- **Utils** — JWT helpers, slug generation, image processing
- **Background Tasks** — Notification dispatching, reading history updates

## Design Principles

- **Separation of Concerns** — Each layer has a single responsibility
- **Dependency Injection** — Promotes testability and loose coupling
- **Async-First** — All database and I/O operations are async
- **Fail Fast** — Input validation at the API boundary
