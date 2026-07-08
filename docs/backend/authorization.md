# Authorization

## Current Implementation

Basic owner-based authorization:

- Users can only edit/delete their own posts
- Users can only delete their own comments
- Users can only view their own notifications
- Users can only view their own bookmarks

## Dependency Injection

```python
async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db),
) -> User:
    """Validate JWT and return current user."""

async def get_optional_user(
    token: str | None = Depends(oauth2_scheme_optional),
    db: AsyncSession = Depends(get_db),
) -> User | None:
    """Optional auth for public endpoints."""

async def check_post_ownership(
    post_id: UUID,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> Post:
    """Ensure current user owns the post."""
```

## Future Role-Based Access

```python
# Future enum
class UserRole(str, Enum):
    USER = "user"
    ADMIN = "admin"

# Future dependency
async def require_admin(
    current_user: User = Depends(get_current_user),
) -> User:
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    return current_user
```
