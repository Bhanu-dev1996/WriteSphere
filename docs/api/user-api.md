# User API

## GET /users/{username}

Get public user profile.

**Response (200):**

```json
{
  "data": {
    "id": "uuid",
    "username": "johndoe",
    "bio": "Writer & developer",
    "avatar_url": "https://...",
    "join_date": "2025-01-01T00:00:00Z",
    "followers_count": 42,
    "following_count": 15,
    "post_count": 10
  }
}
```

## GET /users/{username}/posts

Get user's published posts.

**Query Parameters:**

- `page` (default: 1)
- `per_page` (default: 20)

**Response (200):** Paginated list of blog posts.

## PUT /users/profile

Update own profile (authenticated).

**Request Body:**

```json
{
  "username": "newusername",
  "bio": "Updated bio",
  "website": "https://example.com",
  "location": "New York"
}
```

**Response (200):** Updated profile data.

## POST /users/avatar

Upload avatar image (authenticated). Multipart form data.

**Response (200):**

```json
{
  "data": {
    "avatar_url": "https://..."
  }
}
```

## GET /users/{username}/followers

Get list of followers.

## GET /users/{username}/following

Get list of users being followed.

## POST /users/{id}/follow

Follow a user (authenticated).

**Response (204):** No Content

## DELETE /users/{id}/follow

Unfollow a user (authenticated).

**Response (204):** No Content

## GET /users/suggested

Get suggested authors to follow (authenticated).

**Response (200):** Array of user profiles.
