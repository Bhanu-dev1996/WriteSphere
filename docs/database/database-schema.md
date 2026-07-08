# Database Schema

## Table Definitions

### users

```sql
CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           VARCHAR(255) NOT NULL UNIQUE,
    username        VARCHAR(100) NOT NULL UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    is_active       BOOLEAN DEFAULT TRUE,
    is_verified     BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### profiles

```sql
CREATE TABLE profiles (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    avatar_url      VARCHAR(500),
    bio             TEXT,
    website         VARCHAR(500),
    location        VARCHAR(255),
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### categories

```sql
CREATE TABLE categories (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(100) NOT NULL UNIQUE,
    slug            VARCHAR(100) NOT NULL UNIQUE,
    description     TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### tags

```sql
CREATE TABLE tags (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(100) NOT NULL UNIQUE,
    slug            VARCHAR(100) NOT NULL UNIQUE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### posts

```sql
CREATE TABLE posts (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category_id     UUID REFERENCES categories(id) ON DELETE SET NULL,
    title           VARCHAR(500) NOT NULL,
    slug            VARCHAR(500) NOT NULL UNIQUE,
    content         TEXT NOT NULL,
    cover_image     VARCHAR(500),
    meta_title      VARCHAR(200),
    meta_description TEXT,
    reading_time    INTEGER DEFAULT 0,
    status          VARCHAR(20) DEFAULT 'draft'
                    CHECK (status IN ('draft', 'published', 'archived')),
    published_at    TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### post_tags

```sql
CREATE TABLE post_tags (
    post_id         UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    tag_id          UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, tag_id)
);
```

### comments

```sql
CREATE TABLE comments (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id         UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    author_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    parent_id       UUID REFERENCES comments(id) ON DELETE CASCADE,
    content         TEXT NOT NULL,
    is_edited       BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### reactions

```sql
CREATE TABLE reactions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    post_id         UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    reaction_type   VARCHAR(20) NOT NULL
                    CHECK (reaction_type IN ('like', 'heart', 'celebrate')),
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, post_id, reaction_type)
);
```

### bookmarks

```sql
CREATE TABLE bookmarks (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    post_id         UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, post_id)
);
```

### followers

```sql
CREATE TABLE followers (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    follower_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    following_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (follower_id, following_id),
    CHECK (follower_id != following_id)
);
```

### notifications

```sql
CREATE TABLE notifications (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    actor_id        UUID REFERENCES users(id) ON DELETE SET NULL,
    type            VARCHAR(50) NOT NULL
                    CHECK (type IN ('follow', 'like', 'comment', 'reply', 'mention')),
    post_id         UUID REFERENCES posts(id) ON DELETE CASCADE,
    comment_id      UUID REFERENCES comments(id) ON DELETE CASCADE,
    is_read         BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### reading_history

```sql
CREATE TABLE reading_history (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    post_id         UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    last_read_at    TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, post_id)
);
```

### post_views (Future)

```sql
CREATE TABLE post_views (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id         UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    user_id         UUID REFERENCES users(id) ON DELETE SET NULL,
    ip_address      VARCHAR(45),
    viewed_at       TIMESTAMPTZ DEFAULT NOW()
);
```
