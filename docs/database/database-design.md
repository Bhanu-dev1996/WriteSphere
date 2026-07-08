# Database Design

## Overview

PostgreSQL database using SQLAlchemy 2.0 ORM with Alembic for migrations. The schema is normalized with appropriate indexes for performance.

## Entity Relationship Summary

- **users** → **profiles** (1:1)
- **users** → **posts** (1:N)
- **posts** → **categories** (N:1)
- **posts** → **tags** (N:N via post_tags)
- **posts** → **comments** (1:N)
- **comments** → **comments** (self-referential for replies)
- **users** → **bookmarks** (1:N)
- **users** → **followers** (N:N via followers table)
- **users** → **notifications** (1:N)
- **users** → **reading_history** (1:N)
- **posts** → **reactions** (1:N)
- **users** → **reactions** (1:N)

## Tables

| Table            | Description                  |
| ---------------- | ---------------------------- |
| users            | Core user accounts           |
| profiles         | Extended user profile data   |
| posts            | Blog posts                   |
| categories       | Blog categories              |
| tags             | Blog tags                    |
| post_tags        | Many-to-many post-tag join   |
| comments         | Comments and replies         |
| reactions        | User reactions to posts      |
| bookmarks        | User bookmarks               |
| followers        | User follow relationships    |
| notifications    | User notifications           |
| reading_history  | User reading activity        |
| post_views       | View tracking (future)       |

## Indexes

- `users.email` (unique)
- `users.username` (unique)
- `posts.slug` (unique)
- `posts.created_at` (desc)
- `posts.status`
- `comments.post_id`
- `comments.parent_id`
- `bookmarks.user_id`
- `bookmarks.post_id`
- `followers.follower_id`
- `followers.following_id`
- `notifications.user_id`
- `reading_history.user_id`
