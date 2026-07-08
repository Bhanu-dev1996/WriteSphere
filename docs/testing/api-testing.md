# API Testing

## Swagger UI

FastAPI provides automatic OpenAPI documentation at `/docs` (Swagger UI) and `/redoc` (ReDoc). These can be used for manual API testing during development.

## Postman Collection

A Postman collection can be created for API testing:

1. Import the OpenAPI spec from `/openapi.json`
2. Set up environment variables:
   - `base_url`: `http://localhost:8000/api/v1`
   - `access_token`: (auto-populated from login)
3. Create test suites for each endpoint group

## Key Test Scenarios

### Authentication

- Register with valid data → 201
- Register with duplicate email → 409
- Login with correct credentials → 200 + tokens
- Login with wrong password → 401
- Access protected route without token → 401
- Refresh expired token → 200 + new tokens

### Blog CRUD

- Create blog as authenticated user → 201
- Create blog without auth → 401
- Edit own blog → 200
- Edit another user's blog → 403
- Delete blog → 204
- Get non-existent blog → 404
- Create blog with invalid data → 422

### Comments

- Add comment on existing post → 201
- Reply to comment → 201
- Delete own comment → 204
- Delete another user's comment → 403

### Pagination

- List posts with default pagination → 200 + data array
- List posts with custom page size → correct count
- List posts beyond available pages → empty data array
