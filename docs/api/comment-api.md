# Comment API

## GET /posts/{post_id}/comments

Get comments for a blog post.

**Query Parameters:**

- `page` (default: 1)
- `per_page` (default: 20)

**Response (200):** Paginated list of top-level comments with nested replies.

```json
{
  "data": [
    {
      "id": "uuid",
      "content": "Great post!",
      "author": {
        "id": "uuid",
        "username": "reader1",
        "avatar_url": "https://..."
      },
      "created_at": "2025-01-01T00:00:00Z",
      "replies": [
        {
          "id": "uuid",
          "content": "Thanks!",
          "author": { "...": "..." },
          "parent_id": "uuid",
          "created_at": "2025-01-01T00:00:00Z",
          "replies": []
        }
      ]
    }
  ]
}
```

## POST /posts/{post_id}/comments

Add a comment (authenticated).

**Request Body:**

```json
{
  "content": "This is a great article!"
}
```

**Response (201):** Created comment.

## POST /comments/{comment_id}/replies

Reply to a comment (authenticated).

**Request Body:**

```json
{
  "content": "Thanks for reading!"
}
```

**Response (201):** Created reply.

## DELETE /comments/{id}

Delete own comment (authenticated, owner only).

**Response (204):** No Content
