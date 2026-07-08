# Implementation Plan

## Development Approach

Iterative, feature-driven development with each phase building on the previous. Backend API is implemented first per feature, followed by frontend integration.

**Order:** Backend (API → Service → Repository) → Frontend (Service → Component → Page)

---

## Phase 1: Project Scaffolding

### Step 1.1 — Initialize Backend

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Create project structure    | `backend/` with all subdirectories          |
| Configure Poetry/pip        | `pyproject.toml` with dependencies          |
| FastAPI app entry           | `main.py` with CORS, middleware, routers    |
| Config management           | Pydantic `Settings` via environment vars    |
| Database setup              | Async engine, session factory, Base model   |
| Alembic init                | Migration environment with auto-generation  |
| Logging setup               | Loguru configuration                        |

**Files to create:**
- `backend/main.py`
- `backend/app/__init__.py`
- `backend/app/core/config.py`
- `backend/app/core/database.py`
- `backend/app/core/security.py`
- `backend/requirements.txt`
- `backend/alembic.ini`
- `backend/alembic/env.py`

**Verification:** Server starts at `localhost:8000`, `/docs` loads Swagger UI.

---

### Step 1.2 — Initialize Frontend

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Vite + React + TS           | `npm create vite@latest frontend`           |
| Install dependencies        | All packages from tech stack                |
| Configure Tailwind          | `tailwind.config.ts` with dark mode         |
| shadcn/ui init              | Component.json, globals.css                 |
| Folder structure            | All `src/` subdirectories                   |
| Axios setup                 | Base URL, interceptors for JWT refresh      |
| Zustand stores              | Auth, Theme, UI stores                      |
| Router setup                | Public + Protected route configs            |
| Layout components           | PublicLayout, DashboardLayout, AuthLayout   |

**Files to create:**
- `frontend/src/app/App.tsx`
- `frontend/src/app/Providers.tsx`
- `frontend/src/lib/axios.ts`
- `frontend/src/store/authStore.ts`
- `frontend/src/store/themeStore.ts`
- `frontend/src/store/uiStore.ts`
- `frontend/src/routes/index.tsx`
- `frontend/src/routes/ProtectedRoute.tsx`
- `frontend/src/layouts/*.tsx`

**Verification:** Blank app renders with routing, dark mode toggle works.

---

### Step 1.3 — Database Migrations

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| User model                  | All fields, indexes, relationships          |
| Profile model               | One-to-one with User                        |
| Category model              | Seed default categories                     |
| Tag model                   | Independent from posts at this stage        |
| Initial migration           | `alembic revision --autogenerate`           |
| Seed script                 | Insert default categories                   |

**Order of model creation:**
1. `User` + `Profile`
2. `Category`
3. `Tag`

**Verification:** Tables created in PostgreSQL, seed data present.

---

## Phase 2: Authentication System

### Step 2.1 — Backend Auth

| Layer        | Files                              | Key Logic                              |
| ------------ | ---------------------------------- | -------------------------------------- |
| Schemas      | `auth.py`                          | RegisterRequest, LoginRequest, TokenResponse |
| Repository   | `user_repo.py`                     | `get_by_email()`, `get_by_username()`, `create()` |
| Service      | `auth_service.py`                  | `register()`, `login()`, `refresh_token()` |
| API Router   | `api/v1/auth.py`                   | `/register`, `/login`, `/refresh`, `/logout` |
| Dependencies | `dependencies/__init__.py`         | `get_current_user()`, `get_optional_user()` |
| Utils        | `utils/security.py`               | JWT create/decode, password hashing    |

**Implementation order:**
1. `security.py` — JWT helpers and password hashing
2. `schemas/auth.py` — Request/response schemas
3. `repositories/user_repo.py` — User data access
4. `services/auth_service.py` — Registration + login logic
5. `api/v1/auth.py` — Route handlers
6. `dependencies/__init__.py` — Auth dependencies

**Endpoints:**
```
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/refresh
POST /api/v1/auth/logout
```

**Verification:** Register → Login → Receive tokens → Access protected route → Refresh token → Logout.

---

### Step 2.2 — Frontend Auth

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Auth service                | `services/auth.service.ts` — API calls      |
| Auth store                  | Store tokens in memory, persist user        |
| Login page                  | Form with validation, error display         |
| Register page               | Form with validation, success redirect      |
| Auth guard                  | `ProtectedRoute` redirects to `/login`      |
| Axios interceptor           | Attach token, handle 401 → refresh flow     |
| Guest guard                 | Redirect authenticated users away from login |

**Files to create:**
- `frontend/src/services/auth.service.ts`
- `frontend/src/pages/LoginPage.tsx`
- `frontend/src/pages/RegisterPage.tsx`
- `frontend/src/features/auth/LoginForm.tsx`
- `frontend/src/features/auth/RegisterForm.tsx`

**Verification:** Full auth flow works end-to-end. Tokens refresh seamlessly.

---

## Phase 3: Core Blog Engine

### Step 3.1 — Backend Blog CRUD

**Model creation order:**
1. `Post` model (with slug generation, reading time calculation)
2. `PostTag` association table
3. Update `Category` and `Tag` with relationships

**Implementation order per layer:**

| Layer        | Files                              | Key Logic                              |
| ------------ | ---------------------------------- | -------------------------------------- |
| Models       | `post.py`, `category.py`, `tag.py` | ORM models with relationships          |
| Schemas      | `post.py`                          | CreatePost, UpdatePost, PostResponse   |
| Repository   | `post_repo.py`                     | CRUD, pagination, filtering, search    |
| Service      | `post_service.py`                  | Business logic, slug generation        |
| API Router   | `api/v1/posts.py`                  | All blog endpoints                     |
| Utils        | `utils/slug.py`                    | Slugify helper                         |

**Endpoints:**
```
GET    /api/v1/posts              — List published (paginated, filtered)
GET    /api/v1/posts/trending     — Trending posts
GET    /api/v1/posts/featured     — Featured hero posts
GET    /api/v1/posts/{slug}       — Single post detail
POST   /api/v1/posts              — Create (authenticated)
PUT    /api/v1/posts/{id}         — Update (owner only)
DELETE /api/v1/posts/{id}         — Delete (owner only)
GET    /api/v1/categories         — List categories
GET    /api/v1/tags               — List tags
```

**Verification:** Create, edit, delete posts. Pagination works. Slug is auto-generated.

---

### Step 3.2 — Frontend Blog

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Post service                | `services/post.service.ts`                  |
| Blog list (home)            | Fetch + display published posts             |
| Blog detail page            | Full post render with author info           |
| Create blog page            | Editor form with all fields                 |
| Edit blog page              | Pre-populated form                          |
| Rich text editor            | TipTap or similar integration               |
| Cover image upload          | Image upload widget + preview               |
| Category/tag selectors      | Multi-select tag picker                     |

**Files to create:**
- `frontend/src/services/post.service.ts`
- `frontend/src/features/blog/BlogList.tsx`
- `frontend/src/features/blog/BlogCard.tsx`
- `frontend/src/features/blog/BlogDetail.tsx`
- `frontend/src/features/blog/BlogEditor.tsx`
- `frontend/src/features/blog/RichTextEditor.tsx`
- `frontend/src/pages/HomePage.tsx`
- `frontend/src/pages/BlogDetailsPage.tsx`
- `frontend/src/pages/CreateBlogPage.tsx`
- `frontend/src/pages/EditBlogPage.tsx`

**Verification:** Create blog with title, content, image, category, tags. Publish and view on home page. Edit and delete work.

---

## Phase 4: File Uploads

### Step 4.1 — Backend Upload

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Upload router               | `/api/v1/upload/avatar`, `cover`, `editor`  |
| File validation             | Type check, size limit, sanitize filename   |
| Local storage               | Save to `uploads/` with UUID filenames      |
| Cloudinary integration      | Production upload to Cloudinary             |

**Implementation:**
1. `utils/images.py` — Image processing helpers
2. `api/v1/uploads.py` — Upload endpoints
3. Configured via settings: local vs cloudinary

**Verification:** Upload avatar, cover, and editor images. Files saved correctly.

---

### Step 4.2 — Frontend Upload

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Upload service              | `services/upload.service.ts`                |
| Avatar upload widget        | In profile settings                         |
| Cover image upload          | In blog editor                              |
| Editor image upload         | Embedded in rich text editor                |
| Preview before upload       | Client-side preview                         |
| Loading state               | Upload progress indicator                   |

**Verification:** Images upload and display correctly. Error handling for wrong file types or oversized files.

---

## Phase 5: Comments

### Step 5.1 — Backend Comments

| Layer        | Files                              | Key Logic                              |
| ------------ | ---------------------------------- | -------------------------------------- |
| Model        | `comment.py`                       | Self-referential for replies           |
| Schema       | `comment.py`                       | CreateComment, CommentResponse (nested)|
| Repository   | `comment_repo.py`                  | Get by post (nested), create, delete   |
| Service      | `comment_service.py`               | Business rules                         |
| API Router   | `api/v1/comments.py`              | Comment endpoints                      |

**Endpoints:**
```
GET    /api/v1/posts/{post_id}/comments    — List comments (nested)
POST   /api/v1/posts/{post_id}/comments    — Add comment
POST   /api/v1/comments/{id}/replies       — Reply to comment
DELETE /api/v1/comments/{id}               — Delete own comment
```

**Verification:** Add comment, reply, view nested thread, delete own comment.

---

### Step 5.2 — Frontend Comments

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Comment service             | `services/comment.service.ts`               |
| Comment thread component    | Recursive display of nested comments        |
| Comment form                | Add comment input with validation           |
| Reply form                  | Inline reply input per comment              |
| Delete action               | Confirm + delete own comments               |

**Files to create:**
- `frontend/src/services/comment.service.ts`
- `frontend/src/features/comments/CommentThread.tsx`
- `frontend/src/features/comments/CommentItem.tsx`
- `frontend/src/features/comments/CommentForm.tsx`

**Verification:** Comments display with nesting. Add, reply, delete all work.

---

## Phase 6: Reactions

### Step 6.1 — Backend Reactions

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Model                       | `reaction.py` — polymorphic reaction types  |
| Repository                  | Toggle reaction, get counts                 |
| API Router                  | `POST/DELETE /api/v1/posts/{id}/reactions`  |

**Endpoints:**
```
POST   /api/v1/posts/{id}/reactions     — Add/remove reaction {type: "like"|"heart"|"celebrate"}
GET    /api/v1/posts/{id}/reactions     — Get reaction counts + user's reaction
```

**Verification:** Toggle reactions. Counts update correctly. User can only have one reaction type per post.

---

### Step 6.2 — Frontend Reactions

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Reaction bar component      | Like, Heart, Celebrate buttons with counts  |
| Optimistic updates          | Immediate UI feedback via TanStack Query    |
| Animated transitions        | Bounce animation on reaction                |

**Verification:** Click reaction → count increments visually → same click removes it.

---

## Phase 7: Follow System

### Step 7.1 — Backend Follow

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Model                       | `follower.py` — follower_id, following_id   |
| Repository                  | Follow, unfollow, get followers/following   |
| Service                     | Suggested authors logic                     |
| API Router                  | Follow/unfollow, lists, suggested           |

**Endpoints:**
```
POST   /api/v1/users/{id}/follow       — Follow (authenticated)
DELETE /api/v1/users/{id}/follow       — Unfollow (authenticated)
GET    /api/v1/users/{id}/followers    — Follower list
GET    /api/v1/users/{id}/following    — Following list
GET    /api/v1/users/suggested         — Suggested authors
```

**Verification:** Follow/unfollow toggles. Follower/following counts update.

---

### Step 7.2 — Frontend Follow

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Follow button component     | Toggle with optimistic update               |
| Profile page                | Show follower/following counts              |
| Suggested authors widget    | Sidebar on home page                        |

**Verification:** Follow button works on author profile and blog detail author widget.

---

## Phase 8: Notifications

### Step 8.1 — Backend Notifications

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Model                       | `notification.py` — type, actor, read status|
| Repository                  | Create, list, mark read                     |
| Service                     | `notify_follow()`, `notify_like()`, `notify_comment()`, `notify_reply()` |
| API Router                  | List, mark read, mark all read              |
| Background tasks            | Fire notifications asynchronously           |

**Endpoints:**
```
GET    /api/v1/notifications              — List (paginated, unread_only filter)
PUT    /api/v1/notifications/{id}/read    — Mark single read
PUT    /api/v1/notifications/read-all     — Mark all read
GET    /api/v1/notifications/unread-count — Badge count
```

**Verification:** Performing actions triggers notifications. Marking read updates count.

---

### Step 8.2 — Frontend Notifications

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Notification service        | `services/notification.service.ts`          |
| Notification bell           | Header icon with unread badge               |
| Notification list page      | List with type icons, mark read actions     |
| Mark all read button        | Bulk action                                 |

**Verification:** Bell shows correct count. Notifications list displays with correct types.

---

## Phase 9: Bookmarks

### Step 9.1 — Backend Bookmarks

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Model                       | `bookmark.py` — user_id, post_id            |
| Repository                  | Toggle, list by user                        |
| API Router                  | Add, remove, list                           |

**Endpoints:**
```
POST   /api/v1/bookmarks/{post_id}       — Add bookmark
DELETE /api/v1/bookmarks/{post_id}       — Remove bookmark
GET    /api/v1/bookmarks                 — List user's bookmarks
```

**Verification:** Toggle bookmark on blog detail. List shows all saved posts.

---

### Step 9.2 — Frontend Bookmarks

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Bookmark service            | `services/bookmark.service.ts`              |
| Bookmark button             | Toggle icon on blog detail                  |
| Bookmarks page              | Grid of bookmarked posts with remove action |

**Verification:** Bookmark/unblog toggle works. Bookmarks page displays correctly.

---

## Phase 10: Reading History

### Step 10.1 — Backend Reading History

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Model                       | `reading_history.py` — user_id, post_id, last_read_at |
| Repository                  | Upsert, list recent                         |
| Background task             | Record view when blog detail is fetched     |

**Endpoints:**
```
GET    /api/v1/reading-history            — Recently viewed
```

**Verification:** Viewing a blog adds it to history.

---

### Step 10.2 — Frontend Reading History

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Reading history service     | `services/reading-history.service.ts`       |
| Continue reading widget     | On dashboard                                |
| Reading history page        | Full list with "Continue Reading" links     |

**Verification:** Recently viewed blogs appear in reading history.

---

## Phase 11: Search

### Step 11.1 — Backend Search

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Search repository method    | Full-text search on title, content          |
| Filter params               | category, tag, author, sort                 |
| API integration             | Extend `GET /api/v1/posts` with `?search=`  |

**Filters:**
- `?search=keyword` — Title/content search
- `?category=technology` — Filter by category slug
- `?tag=react` — Filter by tag slug
- `?author=johndoe` — Filter by username
- `?sort=latest|popular|most_liked|most_commented`

**Verification:** Search returns relevant results. Filters work in combination.

---

### Step 11.2 — Frontend Search

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Search bar component        | Header search with debounced input          |
| Search results page         | Blog card grid with active filters          |
| Filter tabs                 | Latest, Popular, Most Liked, Most Commented |
| Empty state                 | "No results found" message                  |

**Verification:** Search by title returns correct results. Filters update results.

---

## Phase 12: Dashboard

### Step 12.1 — Frontend Dashboard

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Dashboard overview page     | Stats cards (total blogs, drafts, etc.)     |
| Drafts page                 | List of drafts with edit/publish actions    |
| Sidebar navigation          | Active state, collapsible on mobile         |
| Stats API endpoint          | Aggregate counts for current user           |

**Dashboard endpoint:**
```
GET /api/v1/users/me/stats — Total blogs, drafts, followers, following, notifications, bookmarks
```

**Verification:** Dashboard shows correct stats. Drafts can be published from draft list.

---

## Phase 13: User Profile

### Step 13.1 — Backend Profile

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Update profile endpoint     | `PUT /api/v1/users/profile`                 |
| Avatar upload               | Via upload endpoint, update profile URL     |
| Change password             | `POST /api/v1/auth/change-password`         |
| Public profile              | `GET /api/v1/users/{username}`              |

**Verification:** Profile updates persist. Avatar upload works. Password changes require current password.

---

### Step 13.2 — Frontend Profile

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Profile settings page       | Form with avatar upload, bio, website       |
| Public profile page         | Read-only display with author's posts       |
| Change password form        | Current + new password fields               |

**Verification:** Profile settings save correctly. Public profile displays author info and posts.

---

## Phase 14: SEO & Polish

### Step 14.1 — Frontend SEO

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| React Helmet Async          | Dynamic title, meta, OG tags per page       |
| Blog post structured data   | JSON-LD for articles                        |
| Sitemap generation          | `public/sitemap.xml`                        |
| Robots.txt                  | `public/robots.txt`                         |

**Verification:** Each page has correct meta tags. Social share previews work.

---

### Step 14.2 — Accessibility & Responsiveness

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Semantic HTML audit         | Headings, landmarks, alt text               |
| Keyboard navigation         | Tab order, focus trapping in modals         |
| Screen reader testing       | ARIA labels, live regions                   |
| Mobile responsive audit     | All breakpoints, touch targets              |
| Reduced motion support      | `prefers-reduced-motion` media query        |

**Verification:** Lighthouse accessibility score > 90. All pages responsive on mobile/tablet/desktop.

---

### Step 14.3 — Error Handling & States

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Loading skeletons           | All list and detail pages                   |
| Empty states                | Helpful messages with CTAs                  |
| Error boundaries            | React error boundary per route              |
| Toast notifications         | Success/error feedback for mutations        |
| 404 page                    | Custom "not found" page                     |

**Verification:** Every page handles loading, empty, error, and success states.

---

## Phase 15: Testing

### Step 15.1 — Backend Tests

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Test configuration          | `conftest.py` with fixtures                 |
| Auth tests                  | Register, login, refresh, protected routes  |
| Blog tests                  | CRUD, pagination, slug uniqueness           |
| Comment tests               | Create, reply, delete, nested retrieval     |
| Reaction tests              | Toggle, counts, unique constraint           |
| Follow tests                | Follow, unfollow, duplicate prevention      |
| Notification tests          | Creation on actions, mark read              |
| Upload tests                | File validation, storage                    |

**Verification:** `pytest` passes with good coverage.

---

### Step 15.2 — Frontend Tests

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Test setup                  | Vitest config, RTL setup                    |
| Auth component tests        | Login form validation, register validation  |
| Blog component tests        | BlogCard render, BlogEditor form            |
| Comment component tests     | Thread rendering, form submission           |
| Hook tests                  | TanStack Query hooks with mocks             |
| Integration tests           | Full user flows (register → create blog)    |

**Verification:** `vitest run` passes.

---

## Phase 16: Deployment

### Step 16.1 — Database

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Create Supabase project     | Get connection string                       |
| Run migrations              | `alembic upgrade head`                      |
| Seed data                   | Insert default categories                   |

### Step 16.2 — Backend (Render)

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Create Web Service          | Connect GitHub repo                         |
| Set environment variables   | All production vars                         |
| Configure start command     | `uvicorn app.main:app`                      |
| Deploy                      | Manual or auto-deploy                       |

### Step 16.3 — Frontend (Vercel)

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Import project              | Connect GitHub repo                         |
| Configure build             | Framework: Vite, build: `npm run build`     |
| Set environment variables   | `VITE_API_URL`                              |
| Deploy                      | Auto-deploy on push to main                 |

### Step 16.4 — Storage (Cloudinary)

| Task                        | Details                                     |
| --------------------------- | ------------------------------------------- |
| Create Cloudinary account   | Get cloud name, API key, API secret         |
| Set `CLOUDINARY_URL`        | In backend environment variables            |
| Verify uploads              | Upload test image via API                   |

---

## Dependency Graph

```
Phase 1 (Scaffolding)
    └── Phase 2 (Auth)
           ├── Phase 3 (Blog CRUD)
           │      ├── Phase 4 (Uploads)
           │      ├── Phase 5 (Comments)
           │      ├── Phase 6 (Reactions)
           │      └── Phase 11 (Search)
           ├── Phase 7 (Follow)
           ├── Phase 8 (Notifications) ── depends on Phases 5, 6, 7
           ├── Phase 9 (Bookmarks)
           ├── Phase 10 (Reading History)
           ├── Phase 12 (Dashboard) ── depends on most prior phases
           └── Phase 13 (Profile)
                    └── Phase 14 (SEO & Polish)
                            └── Phase 15 (Testing)
                                    └── Phase 16 (Deployment)
```

Phases 5-10 can be implemented in **parallel** after Phase 3 is complete, as they are independent of each other.

---

## Priority Matrix

| Feature          | Effort | Value  | Priority |
| ---------------- | ------ | ------ | -------- |
| Auth             | Medium | High   | P0       |
| Blog CRUD        | High   | High   | P0       |
| Rich Text Editor | Medium | High   | P0       |
| Comments         | Medium | High   | P1       |
| Reactions        | Low    | Medium | P1       |
| Follow System    | Low    | Medium | P1       |
| Notifications    | Medium | Medium | P1       |
| Bookmarks        | Low    | Medium | P1       |
| Reading History  | Low    | Low    | P2       |
| Search           | Medium | High   | P1       |
| Dashboard        | Medium | Medium | P1       |
| User Profile     | Medium | Medium | P1       |
| SEO              | Low    | High   | P1       |
| Accessibility    | Medium | High   | P1       |
| Testing          | High   | High   | P2       |
| Deployment       | Medium | High   | P2       |

---

## Key Technical Decisions

| Decision                | Choice          | Rationale                              |
| ----------------------- | --------------- | -------------------------------------- |
| Rich text editor        | TipTap (tiptap) | Extensible, React-native, ProseMirror  |
| CSS framework           | Tailwind CSS    | Utility-first, shadcn/ui compatibility |
| Form management         | React Hook Form | Performant, minimal re-renders         |
| Server state            | TanStack Query  | Caching, pagination, optimistic updates|
| Global state            | Zustand         | Lightweight, simple API                |
| HTTP client             | Axios           | Interceptors, better error handling    |
| API validation          | Pydantic v2     | Fast, native FastAPI integration       |
| Database migrations     | Alembic         | Industry standard for SQLAlchemy       |
| Password hashing        | bcrypt          | Time-tested, adaptive cost             |
| File storage (prod)     | Cloudinary      | CDN, transformations, optimization    |
