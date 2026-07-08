# Notification API

## GET /notifications

Get notifications for the current user (authenticated).

**Query Parameters:**

- `page` (default: 1)
- `per_page` (default: 20)
- `unread_only` (boolean, default: false)

**Response (200):**

```json
{
  "data": [
    {
      "id": "uuid",
      "type": "like",
      "is_read": false,
      "created_at": "2025-01-01T00:00:00Z",
      "actor": {
        "id": "uuid",
        "username": "otheruser",
        "avatar_url": "https://..."
      },
      "post": {
        "id": "uuid",
        "title": "My Post",
        "slug": "my-post"
      }
    }
  ],
  "unread_count": 5
}
```

## PUT /notifications/{id}/read

Mark a single notification as read (authenticated).

**Response (204):** No Content

## PUT /notifications/read-all

Mark all notifications as read (authenticated).

**Response (204):** No Content
