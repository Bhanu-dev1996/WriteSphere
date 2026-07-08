# Blog API

## GET /posts

Get published posts with pagination and filters.

**Query Parameters:**

- `page` (default: 1)
- `per_page` (default: 20)
- `category` (slug)
- `tag` (slug)
- `author` (username)
- `search` (text search)
- `sort` (latest | popular | most_liked | most_commented)

**Response (200):** Paginated list of blog posts.

## GET /posts/{slug}

Get single blog post by slug.

**Response (200):**

```json
{
  "data": {
    "id": "uuid",
    "title": "Post Title",
    "slug": "post-title",
    "content": "<html>...",
    "cover_image": "https://...",
    "reading_time": 5,
    "status": "published",
    "published_at": "2025-01-01T00:00:00Z",
    "author": {
      "id": "uuid",
      "username": "johndoe",
      "avatar_url": "https://..."
    },
    "category": {
      "id": "uuid",
      "name": "Technology",
      "slug": "technology"
    },
    "tags": [
      {"id": "uuid", "name": "React", "slug": "react"}
    ],
    "reactions": {
      "like": 10,
      "heart": 5,
      "celebrate": 2
    },
    "user_reaction": "like",
    "is_bookmarked": false,
    "comment_count": 7
  }
}
```

## POST /posts

Create a new blog post (authenticated).

**Request Body:**

```json
{
  "title": "My New Post",
  "content": "<h1>Hello World</h1>",
  "category_id": "uuid",
  "tag_ids": ["uuid1", "uuid2"],
  "cover_image": "https://...",
  "meta_title": "My New Post | WriteSphere",
  "meta_description": "An exciting new post about...",
  "status": "published"
}
```

**Response (201):** Created post data.

## PUT /posts/{id}

Update a blog post (authenticated, owner only).

**Request Body:** Same as POST, all fields optional.

**Response (200):** Updated post data.

## DELETE /posts/{id}

Delete a blog post (authenticated, owner only).

**Response (204):** No Content

## GET /posts/trending

Get trending posts.

## GET /posts/featured

Get featured posts (for homepage hero).
