from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "WriteSphere"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True

    DATABASE_URL: str = "sqlite+aiosqlite:///./writeshere.db"

    SECRET_KEY: str = "change-me-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    CORS_ORIGINS: list[str] = ["http://localhost:5173"]

    CLOUDINARY_URL: str | None = None

    LOG_LEVEL: str = "DEBUG"

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


settings = Settings()
