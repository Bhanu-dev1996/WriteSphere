# Backend Authentication

## JWT Token Strategy

### Access Token

- **Payload:** `{ sub: user_id, exp: 15min, type: "access" }`
- **Usage:** Sent in `Authorization: Bearer <token>` header
- **Storage:** Client-side (memory or httpOnly cookie)

### Refresh Token

- **Payload:** `{ sub: user_id, exp: 7d, type: "refresh", jti: unique_id }`
- **Usage:** Sent to `/auth/refresh` endpoint
- **Storage:** Client-side (memory or httpOnly cookie)
- **Rotation:** New refresh token issued on each refresh

## Implementation

```python
from datetime import datetime, timedelta
from jose import jwt, JWTError
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=15)):
    to_encode = data.copy()
    to_encode.update({"exp": datetime.utcnow() + expires_delta, "type": "access"})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def create_refresh_token(data: dict, expires_delta: timedelta = timedelta(days=7)):
    to_encode = data.copy()
    to_encode.update({"exp": datetime.utcnow() + expires_delta, "type": "refresh", "jti": str(uuid4())})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)

def hash_password(password: str) -> str:
    return pwd_context.hash(password)
```

## Authentication Flow

1. User sends credentials to `/auth/login`
2. Server validates credentials, returns access + refresh tokens
3. Client stores tokens and sends access token with each request
4. Server validates token in dependency (`get_current_user`)
5. When access token expires, client calls `/auth/refresh`
6. Server validates refresh token, rotates it, returns new tokens
7. If refresh token is expired/invalid, user must re-authenticate

## Password Requirements

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character
