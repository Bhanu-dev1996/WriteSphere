# Folder Structure

## Root

```
WriteSphere/
├── docs/                  # Project documentation
├── frontend/              # React SPA
├── backend/               # FastAPI application
├── .gitignore
├── README.md
└── requirements.md
```

## Frontend (`frontend/`)

```
frontend/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── app/               # App entry, providers
│   ├── assets/            # Images, icons, fonts
│   │
│   ├── components/
│   │   ├── common/        # Reusable (Button, Card, Badge, etc.)
│   │   ├── layout/        # Header, Footer, Sidebar, Layouts
│   │   └── ui/            # shadcn/ui primitives
│   │
│   ├── features/
│   │   ├── auth/          # Login, Register components
│   │   ├── blog/          # Blog CRUD, details, list
│   │   ├── comments/      # Comment form, thread
│   │   ├── profile/       # Public profile, settings
│   │   ├── notifications/ # Notification list, bell
│   │   ├── bookmarks/     # Bookmark button, list
│   │   ├── search/        # Search bar, results
│   │   ├── dashboard/     # Dashboard overview
│   │   └── home/          # Hero, featured, trending
│   │
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # PublicLayout, AuthLayout, DashboardLayout
│   ├── lib/               # Utility functions, helpers
│   ├── pages/             # Page-level components
│   ├── routes/            # Route definitions, guards
│   ├── services/          # Axios API service modules
│   ├── store/             # Zustand stores
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Formatters, validators
│
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

## Backend (`backend/`)

```
backend/
├── app/
│   ├── api/
│   │   ├── v1/
│   │   │   ├── auth.py
│   │   │   ├── users.py
│   │   │   ├── posts.py
│   │   │   ├── comments.py
│   │   │   ├── notifications.py
│   │   │   ├── bookmarks.py
│   │   │   ├── uploads.py
│   │   │   └── __init__.py
│   │   └── __init__.py
│   │
│   ├── core/
│   │   ├── config.py      # Settings via Pydantic
│   │   ├── security.py    # JWT, hashing
│   │   ├── database.py    # Engine, session
│   │   └── __init__.py
│   │
│   ├── models/            # SQLAlchemy models
│   │   ├── user.py
│   │   ├── post.py
│   │   ├── comment.py
│   │   ├── category.py
│   │   ├── tag.py
│   │   ├── reaction.py
│   │   ├── bookmark.py
│   │   ├── notification.py
│   │   ├── follower.py
│   │   └── __init__.py
│   │
│   ├── schemas/           # Pydantic v2 schemas
│   │   ├── auth.py
│   │   ├── user.py
│   │   ├── post.py
│   │   ├── comment.py
│   │   ├── notification.py
│   │   └── __init__.py
│   │
│   ├── repositories/      # Data access layer
│   │   ├── user_repo.py
│   │   ├── post_repo.py
│   │   ├── comment_repo.py
│   │   └── __init__.py
│   │
│   ├── services/          # Business logic layer
│   │   ├── auth_service.py
│   │   ├── user_service.py
│   │   ├── post_service.py
│   │   ├── comment_service.py
│   │   ├── notification_service.py
│   │   └── __init__.py
│   │
│   ├── dependencies/      # FastAPI dependencies
│   │   └── __init__.py
│   │
│   ├── middlewares/       # Custom ASGI middlewares
│   │   └── __init__.py
│   │
│   ├── validators/        # Custom validation logic
│   │   └── __init__.py
│   │
│   ├── utils/             # Helpers
│   │   ├── slug.py
│   │   ├── images.py
│   │   └── __init__.py
│   │
│   └── __init__.py
│
├── uploads/               # Local storage (dev)
│   ├── avatars/
│   ├── covers/
│   └── editor/
│
├── migrations/            # Alembic versions
├── tests/                 # Pytest suite
│   ├── conftest.py
│   ├── test_auth.py
│   ├── test_users.py
│   ├── test_posts.py
│   └── __init__.py
│
├── main.py                # FastAPI entry point
├── alembic.ini
├── alembic.env.py
├── requirements.txt
├── pyproject.toml
└── Dockerfile
```
