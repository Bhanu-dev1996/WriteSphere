# Validation

## Approach

All input validation is handled by Pydantic v2 schemas at the API boundary, with additional custom validators for domain-specific rules.

## Pydantic Schemas

```python
from pydantic import BaseModel, EmailStr, Field, field_validator
import re

class RegisterRequest(BaseModel):
    username: str = Field(min_length=3, max_length=50)
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)

    @field_validator("username")
    @classmethod
    def validate_username(cls, v: str) -> str:
        if not re.match(r"^[a-zA-Z0-9_]+$", v):
            raise ValueError("Username can only contain letters, numbers, and underscores")
        return v

    @field_validator("password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        if not re.search(r"[A-Z]", v):
            raise ValueError("Password must contain an uppercase letter")
        if not re.search(r"[a-z]", v):
            raise ValueError("Password must contain a lowercase letter")
        if not re.search(r"[0-9]", v):
            raise ValueError("Password must contain a number")
        if not re.search(r"[^A-Za-z0-9]", v):
            raise ValueError("Password must contain a special character")
        return v

class CreatePostRequest(BaseModel):
    title: str = Field(min_length=5, max_length=500)
    content: str = Field(min_length=50)
    category_id: str
    tag_ids: list[str] = Field(min_length=1)
    cover_image: str | None = None
    meta_title: str | None = Field(None, max_length=200)
    meta_description: str | None = Field(None, max_length=500)
    status: str = Field(default="draft", pattern=r"^(draft|published)$")
```

## Validation Layers

1. **API Layer** — Pydantic schema validation (auto 422 response)
2. **Service Layer** — Business rule validation (e.g., duplicate slug)
3. **Repository Layer** — Database constraint validation (unique fields)
4. **Application Errors** — Custom exception handlers for consistent JSON responses
