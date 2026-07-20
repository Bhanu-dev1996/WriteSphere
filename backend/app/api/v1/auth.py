from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.schemas.auth import (
    LoginRequest,
    RefreshRequest,
    RegisterRequest,
    TokenResponse,
    UserResponse,
)
from app.schemas.common import APIResponse
from app.services.auth_service import AuthService

router = APIRouter()


@router.post("/register", response_model=APIResponse[UserResponse], status_code=201)
async def register(body: RegisterRequest, db: AsyncSession = Depends(get_db)):
    service = AuthService(db)
    user = await service.register(body.username, body.email, body.password)
    return APIResponse(data=user, message="User registered successfully")


@router.post("/login", response_model=APIResponse[TokenResponse])
async def login(body: LoginRequest, db: AsyncSession = Depends(get_db)):
    service = AuthService(db)
    tokens = await service.login(body.email, body.password)
    return APIResponse(data=tokens, message="Login successful")


@router.post("/refresh", response_model=APIResponse[TokenResponse])
async def refresh(body: RefreshRequest, db: AsyncSession = Depends(get_db)):
    service = AuthService(db)
    tokens = await service.refresh_token(body.refresh_token)
    return APIResponse(data=tokens, message="Token refreshed")


@router.post("/logout", status_code=204)
async def logout():
    return None


@router.get("/me", response_model=APIResponse[UserResponse])
async def me(current_user: User = Depends(get_current_user)):
    return APIResponse(
        data=UserResponse(
            id=str(current_user.id),
            username=current_user.username,
            email=current_user.email,
            created_at=current_user.created_at,
        )
    )
