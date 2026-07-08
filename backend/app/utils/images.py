import uuid
from pathlib import Path

ALLOWED_IMAGE_TYPES = {"image/jpeg", "image/png", "image/webp", "image/gif"}
MAX_AVATAR_SIZE = 2 * 1024 * 1024
MAX_COVER_SIZE = 5 * 1024 * 1024
MAX_EDITOR_SIZE = 5 * 1024 * 1024

UPLOAD_DIR = Path("uploads")


def get_extension(content_type: str) -> str:
    return {"image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp", "image/gif": ".gif"}.get(content_type, ".bin")


def generate_filename(content_type: str) -> str:
    return f"{uuid.uuid4().hex}{get_extension(content_type)}"
