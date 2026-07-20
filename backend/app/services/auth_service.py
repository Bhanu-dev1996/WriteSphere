from datetime import datetime
from uuid import uuid4

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)
from app.exceptions import ConflictException, UnauthorizedException
from app.models.user import Profile, User
from app.repositories.user_repo import UserRepository
from app.schemas.auth import TokenResponse, UserResponse


class AuthService:
    def __init__(self, db: AsyncSession):
        self.repo = UserRepository(db)

    async def register(self, username: str, email: str, password: str) -> UserResponse:
        existing_email = await self.repo.get_by_email(email)
        if existing_email:
            raise ConflictException("Email already registered")

        existing_username = await self.repo.get_by_username(username)
        if existing_username:
            raise ConflictException("Username already taken")

        user = User(
            id=uuid4(),
            email=email,
            username=username,
            password_hash=hash_password(password),
        )
        user.profile = Profile(id=uuid4(), user_id=user.id)

        user = await self.repo.create(user)

        return UserResponse(
            id=str(user.id),
            username=user.username,
            email=user.email,
            created_at=user.created_at,
        )

    async def login(self, email: str, password: str) -> TokenResponse:
        user = await self.repo.get_by_email(email)
        if not user or not verify_password(password, user.password_hash):
            raise UnauthorizedException("Invalid email or password")

        token_data = {"sub": str(user.id)}
        access_token = create_access_token(token_data)
        refresh_token = create_refresh_token(token_data)

        return TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
            expires_in=900,
        )

    async def refresh_token(self, refresh_token: str) -> TokenResponse:
        payload = decode_token(refresh_token)
        if not payload or payload.get("type") != "refresh":
            raise UnauthorizedException("Invalid refresh token")

        user_id = payload.get("sub")
        if not user_id:
            raise UnauthorizedException("Invalid refresh token")

        user = await self.repo.get_by_id(user_id)
        if not user:
            raise UnauthorizedException("User not found")

        token_data = {"sub": str(user.id)}
        new_access = create_access_token(token_data)
        new_refresh = create_refresh_token(token_data)

        return TokenResponse(
            access_token=new_access,
            refresh_token=new_refresh,
            expires_in=900,
        )
