from fastapi import HTTPException


class AppException(HTTPException):
    def __init__(self, status_code: int, code: str, message: str, details: dict | None = None):
        super().__init__(status_code=status_code, detail={"code": code, "message": message, "details": details})


class NotFoundException(AppException):
    def __init__(self, entity: str, identifier: str | None = None):
        msg = f"{entity} not found" + (f": {identifier}" if identifier else "")
        super().__init__(status_code=404, code="NOT_FOUND", message=msg)


class ConflictException(AppException):
    def __init__(self, message: str):
        super().__init__(status_code=409, code="CONFLICT", message=message)


class UnauthorizedException(AppException):
    def __init__(self, message: str = "Invalid credentials"):
        super().__init__(status_code=401, code="UNAUTHORIZED", message=message)


class ForbiddenException(AppException):
    def __init__(self, message: str = "Access denied"):
        super().__init__(status_code=403, code="FORBIDDEN", message=message)


class ValidationException(AppException):
    def __init__(self, message: str, details: dict | None = None):
        super().__init__(status_code=422, code="VALIDATION_ERROR", message=message, details=details)
