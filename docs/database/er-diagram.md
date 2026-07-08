# ER Diagram

```
┌─────────────┐       ┌──────────────┐
│    users    │1──────1│   profiles   │
└─────┬───────┘       └──────────────┘
      │
      │1
      │
      │       ┌──────────────┐       ┌────────────┐
      ├───────│    posts     │N──────1│ categories │
      │       └──────┬───────┘       └────────────┘
      │              │
      │              │N          N┌──────────┐
      │              ├────────────┤   tags   │
      │              │ (post_tags)└──────────┘
      │              │
      │              │N
      │       ┌──────▼───────┐
      ├───────│   comments   │ (self-referential: parent_id)
      │       └──────────────┘
      │
      │              N
      ├──────────────┐
      │              │
      │       ┌──────▼───────┐
      │       │  reactions   │
      │1──────└──────────────┘
      │
      │1
      │       ┌──────────────┐
      ├───────│  bookmarks   │
      │       └──────────────┘
      │
      │1         N
      ├──────────────┐
      │              │
      │       ┌──────▼───────┐
      │       │ followers    │
      │       └──────────────┘
      │
      │1
      │       ┌──────────────┐
      ├───────│notifications │
      │       └──────────────┘
      │
      │1
      │       ┌──────────────┐
      └───────│reading_history│
              └──────────────┘
```

## Relationships

- **users.profile** → One-to-One
- **users.posts** → One-to-Many
- **posts.category** → Many-to-One
- **posts.tags** → Many-to-Many (post_tags)
- **posts.comments** → One-to-Many
- **comments.parent** → Self-referential (Many-to-One)
- **posts.reactions** → One-to-Many
- **users.reactions** → One-to-Many
- **users.bookmarks** → One-to-Many
- **users.followers** → Many-to-Many (followers table)
- **users.notifications** → One-to-Many
- **users.reading_history** → One-to-Many
