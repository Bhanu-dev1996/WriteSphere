from uuid import UUID

from fastapi import Depends, Header
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.security import decode_token
from app.exceptions import UnauthorizedException
from app.repositories.user_repo import UserRepository


async def get_current_user(
    authorization: str = Header(...),
    db: AsyncSession = Depends(get_db),
):
    if not authorization.startswith("Bearer "):
        raise UnauthorizedException("Invalid authorization header")

    token = authorization.replace("Bearer ", "")
    payload = decode_token(token)

    if not payload or payload.get("type") != "access":
        raise UnauthorizedException("Invalid or expired token")

    user_id = payload.get("sub")
    if not user_id:
        raise UnauthorizedException("Invalid token payload")

    repo = UserRepository(db)
    user = await repo.get_by_id(UUID(user_id))
    if not user:
        raise UnauthorizedException("User not found")

    return user


async def get_optional_user(
    authorization: str | None = Header(None),
    db: AsyncSession = Depends(get_db),
):
    if not authorization:
        return None

    try:
        return await get_current_user(authorization=authorization, db=db)
    except UnauthorizedException:
        return None
