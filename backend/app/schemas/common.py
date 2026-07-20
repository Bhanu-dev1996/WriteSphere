from __future__ import annotations

from typing import Any, Generic, TypeVar

from pydantic import BaseModel

T = TypeVar("T")


class APIResponse(BaseModel, Generic[T]):
    data: T | None = None
    message: str = "Success"

    model_config = {"arbitrary_types_allowed": True}


class APIError(BaseModel):
    code: str
    message: str
    details: dict[str, Any] | None = None


class ErrorResponse(BaseModel):
    error: APIError


class PaginatedResponse(BaseModel, Generic[T]):
    data: list[T]
    total: int
    page: int
    per_page: int
    pages: int
