# State Management

## Global State (Zustand)

```typescript
interface AuthStore {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

interface ThemeStore {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

interface UIStore {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}
```

## Server State (TanStack Query)

```typescript
// Query keys
const queryKeys = {
  posts: {
    all: ["posts"],
    list: (filters: PostFilters) => ["posts", filters],
    detail: (slug: string) => ["posts", slug],
    trending: () => ["posts", "trending"],
    featured: () => ["posts", "featured"],
    userPosts: (username: string) => ["posts", "user", username],
  },
  user: {
    profile: (username: string) => ["user", username],
    followers: (userId: string) => ["user", userId, "followers"],
    following: (userId: string) => ["user", userId, "following"],
    suggested: () => ["user", "suggested"],
  },
  comments: {
    byPost: (postId: string) => ["comments", postId],
  },
  notifications: {
    all: (filters?: NotificationFilters) => ["notifications", filters],
    unreadCount: () => ["notifications", "unread-count"],
  },
  bookmarks: {
    all: () => ["bookmarks"],
  },
  categories: {
    all: () => ["categories"],
  },
};
```

## Form State (React Hook Form + Zod)

Each form has a Zod schema for validation and uses React Hook Form's `useForm` for state management. Server mutations go through TanStack Query's `useMutation`.
