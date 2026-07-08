# File Upload

## Local Development

Files are stored in `backend/uploads/` with subdirectories:

```
uploads/
├── avatars/
├── covers/
└── editor/
```

## Upload Flow

1. Client sends `multipart/form-data` with file
2. FastAPI validates file type and size
3. File is saved to appropriate subdirectory with UUID filename
4. URL is returned to client

## File Validation

```python
ALLOWED_IMAGE_TYPES = {"image/jpeg", "image/png", "image/webp", "image/gif"}
MAX_AVATAR_SIZE = 2 * 1024 * 1024  # 2MB
MAX_COVER_SIZE = 5 * 1024 * 1024    # 5MB
MAX_EDITOR_SIZE = 5 * 1024 * 1024   # 5MB
```

## Production (Cloudinary)

```python
import cloudinary.uploader

def upload_to_cloudinary(file: UploadFile, folder: str) -> str:
    result = cloudinary.uploader.upload(
        file.file,
        folder=f"inkflow/{folder}",
        transformation=[
            {"quality": "auto", "fetch_format": "auto"}
        ]
    )
    return result["secure_url"]
```

## Image Optimization

- All images are converted to WebP format (when possible)
- Avatars are resized to 256x256
- Cover images maintain 16:9 aspect ratio
- Editor images are optimized for web display (max 1200px width)
