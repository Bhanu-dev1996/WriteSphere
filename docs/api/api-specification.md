# API Specification

## Base URL

| Environment | URL                              |
| ----------- | -------------------------------- |
| Development | `http://localhost:8000/api/v1`  |
| Production  | `https://api.inkflow.com/api/v1` |

## Authentication

All protected endpoints require a Bearer JWT token:

```
Authorization: Bearer <access_token>
```

## Standard Response Format

### Success

```json
{
  "data": { ... },
  "message": "Success"
}
```

### Paginated

```json
{
  "data": [ ... ],
  "total": 100,
  "page": 1,
  "per_page": 20,
  "pages": 5
}
```

### Error

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": { "field": ["error message"] }
  }
}
```

## HTTP Status Codes

| Code | Description          |
| ---- | -------------------- |
| 200  | OK                   |
| 201  | Created              |
| 204  | No Content           |
| 400  | Bad Request          |
| 401  | Unauthorized         |
| 403  | Forbidden            |
| 404  | Not Found            |
| 409  | Conflict             |
| 422  | Unprocessable Entity |
| 429  | Too Many Requests    |
| 500  | Internal Server Error |

## Rate Limiting

- 100 requests/minute per IP for authenticated users
- 20 requests/minute per IP for unauthenticated users

## API Documentation

- Swagger UI: `/docs`
- ReDoc: `/redoc`
