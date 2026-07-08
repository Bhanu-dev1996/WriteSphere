# Authentication API

## POST /auth/register

Register a new user.

**Request Body:**

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (201):**

```json
{
  "data": {
    "id": "uuid",
    "username": "johndoe",
    "email": "john@example.com",
    "created_at": "2025-01-01T00:00:00Z"
  },
  "message": "User registered successfully"
}
```

## POST /auth/login

Authenticate and receive JWT tokens.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (200):**

```json
{
  "data": {
    "access_token": "eyJ...",
    "refresh_token": "eyJ...",
    "token_type": "bearer",
    "expires_in": 900
  }
}
```

## POST /auth/refresh

Get a new access token using a refresh token.

**Request Body:**

```json
{
  "refresh_token": "eyJ..."
}
```

**Response (200):**

```json
{
  "data": {
    "access_token": "eyJ...",
    "refresh_token": "eyJ...",
    "token_type": "bearer",
    "expires_in": 900
  }
}
```

## POST /auth/logout

Invalidate the refresh token.

**Request Body:**

```json
{
  "refresh_token": "eyJ..."
}
```

**Response (204):** No Content

## POST /auth/forgot-password

Send password reset email.

**Request Body:**

```json
{
  "email": "john@example.com"
}
```

**Response (200):**

```json
{
  "message": "Password reset email sent"
}
```

## POST /auth/reset-password

Reset password with token.

**Request Body:**

```json
{
  "token": "reset_token",
  "password": "NewSecurePass123!"
}
```

**Response (200):**

```json
{
  "message": "Password reset successfully"
}
```

## POST /auth/change-password

Change password (authenticated).

**Request Body:**

```json
{
  "current_password": "OldPass123!",
  "new_password": "NewPass456!"
}
```

**Response (200):**

```json
{
  "message": "Password changed successfully"
}
```
