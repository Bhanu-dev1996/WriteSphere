# Frontend Architecture

## Overview

React 19 SPA built with Vite, following a feature-based architecture. State is split between Zustand (global UI state) and TanStack Query (server state).

## Architecture Diagram

```
React App
  │
  ├── Routes (React Router DOM)
  │     │
  │     ├── Public Routes (Home, Login, Register, Blog Details, Author Profile)
  │     └── Protected Routes (Dashboard, Create/Edit Blog, Drafts, etc.)
  │
  ├── Pages → Feature Components
  │     ├── auth/    (Login, Register)
  │     ├── blog/    (Create, Edit, Details, List)
  │     ├── comments/(CommentList, CommentForm, ReplyThread)
  │     ├── profile/ (PublicProfile, ProfileSettings)
  │     ├── notifications/ (NotificationList)
  │     └── bookmarks/ (BookmarkList)
  │
  ├── Services (Axios API layer)
  ├── Store (Zustand — auth, theme, UI state)
  ├── Hooks (custom hooks, TanStack Query wrappers)
  └── Utils (helpers, formatters, validators)
```

## Data Flow

```
User Action
  → Component (React)
    → Hook (TanStack Query / Zustand)
      → Service (Axios)
        → API (FastAPI)
          → Response
    → Cache Update (TanStack Query)
  → Re-render
```

## Key Decisions

- **Vite** for fast HMR and optimized builds
- **TanStack Query** for server state caching, pagination, and background refetching
- **Zustand** for lightweight global state (auth tokens, theme, sidebar)
- **React Hook Form + Zod** for performant form handling and validation
- **Axios** with interceptors for JWT refresh and error handling
- **Framer Motion** for page transitions and micro-interactions
