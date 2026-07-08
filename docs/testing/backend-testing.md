# Backend Testing

## Tools

- **Pytest** — Test runner
- **pytest-asyncio** — Async test support
- **httpx** — Async HTTP client for API tests
- **pytest-cov** — Coverage reporting

## Fixtures

```python
# conftest.py
import pytest
from httpx import AsyncClient, ASGITransport
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from app.main import app
from app.core.database import get_db

@pytest.fixture
async def db_session():
    engine = create_async_engine("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    async with AsyncSession(engine) as session:
        yield session

@pytest.fixture
async def client(db_session):
    async def override_get_db():
        yield db_session
    app.dependency_overrides[get_db] = override_get_db
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac
```

## Service Tests

```python
# test_auth_service.py
import pytest
from app.services.auth_service import AuthService

@pytest.mark.asyncio
async def test_register_user(db_session):
    service = AuthService(db_session)
    user = await service.register(
        username="testuser",
        email="test@example.com",
        password="SecurePass123!"
    )
    assert user.username == "testuser"
    assert user.email == "test@example.com"
```

## API Tests

```python
# test_auth_api.py
@pytest.mark.asyncio
async def test_login_success(client):
    # First register a user
    await client.post("/api/v1/auth/register", json={
        "username": "testuser",
        "email": "test@example.com",
        "password": "SecurePass123!",
    })

    # Then login
    response = await client.post("/api/v1/auth/login", json={
        "email": "test@example.com",
        "password": "SecurePass123!",
    })
    assert response.status_code == 200
    assert "access_token" in response.json()["data"]
```

## What to Test

- Service layer business logic and edge cases
- Repository queries and pagination
- API endpoint responses, status codes, validation
- Authentication and authorization (protected routes)
- Error handling and error response format
- Database constraints and unique violations
