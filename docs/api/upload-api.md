# Upload API

## POST /upload/avatar

Upload user avatar image (authenticated).

**Request:** Multipart form data with `file` field.

**Constraints:**

- Max size: 2MB
- Formats: JPEG, PNG, WebP

**Response (200):**

```json
{
  "data": {
    "url": "https://...",
    "filename": "avatar_abc123.webp"
  }
}
```

## POST /upload/cover

Upload blog cover image (authenticated).

**Request:** Multipart form data with `file` field.

**Constraints:**

- Max size: 5MB
- Formats: JPEG, PNG, WebP
- Recommended aspect ratio: 16:9

**Response (200):**

```json
{
  "data": {
    "url": "https://...",
    "filename": "cover_abc123.webp"
  }
}
```

## POST /upload/editor

Upload image from rich text editor (authenticated).

**Request:** Multipart form data with `file` field.

**Constraints:**

- Max size: 5MB
- Formats: JPEG, PNG, WebP, GIF

**Response (200):**

```json
{
  "data": {
    "url": "https://...",
    "filename": "editor_abc123.webp"
  }
}
```

## Storage Strategy

| Environment | Storage Backend |
| ----------- | --------------- |
| Development | Local `uploads/` directory |
| Production  | Cloudinary |
