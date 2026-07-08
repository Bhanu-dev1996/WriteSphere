# Routing

## Route Structure

```typescript
// Public routes (no auth required)
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/blog/:slug", component: BlogDetailsPage },
  { path: "/author/:username", component: AuthorProfilePage },
  { path: "/search", component: SearchResultsPage },
  { path: "/forgot-password", component: ForgotPasswordPage },
  { path: "/reset-password", component: ResetPasswordPage },
];

// Protected routes (auth required)
const protectedRoutes = [
  { path: "/dashboard", component: DashboardPage },
  { path: "/dashboard/create", component: CreateBlogPage },
  { path: "/dashboard/edit/:id", component: EditBlogPage },
  { path: "/dashboard/drafts", component: DraftsPage },
  { path: "/dashboard/notifications", component: NotificationsPage },
  { path: "/dashboard/bookmarks", component: BookmarksPage },
  { path: "/dashboard/profile", component: ProfileSettingsPage },
  { path: "/dashboard/reading-history", component: ReadingHistoryPage },
];
```

## Route Guards

```typescript
// AuthGuard — redirects to /login if not authenticated
// GuestGuard — redirects to /dashboard if already authenticated
```

## Layout Structure

- **PublicLayout** — Header + main + Footer (public routes)
- **DashboardLayout** — Sidebar + Header + main (protected routes)
- **AuthLayout** — Centered card layout (login/register pages)
