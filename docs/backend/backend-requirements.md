# Backend Requirements

## Core Requirements

- Python 3.13+
- FastAPI with async support
- SQLAlchemy 2.0 ORM (async)
- Alembic for migrations
- PostgreSQL database
- Pydantic v2 schemas
- JWT authentication (python-jose)
- Password hashing (Passlib + bcrypt)
- Uvicorn ASGI server
- SlowAPI rate limiting
- Loguru logging
- Pytest test suite

## API Design

- RESTful endpoints under `/api/v1`
- JSON request/response
- Consistent error response format
- Pagination for list endpoints
- OpenAPI/Swagger documentation at `/docs`
- ReDoc documentation at `/redoc`

## Performance

- Async database sessions
- Connection pooling
- Query optimization with eager loading
- Pagination (offset-based)
- Background tasks for non-critical operations

## Security

- Helmet-equivalent security headers
- CORS configured for frontend origin
- JWT access token (15min expiry)
- JWT refresh token (7 day expiry)
- bcrypt password hashing
- Rate limiting (SlowAPI)
- Input sanitization and validation
- SQL injection protection via ORM
