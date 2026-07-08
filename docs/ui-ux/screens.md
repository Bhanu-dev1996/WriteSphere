# Screens

## Screen List

| #  | Screen            | Route                          | Auth Required |
| -- | ----------------- | ------------------------------ | ------------- |
| 1  | Home              | `/`                            | No            |
| 2  | Login             | `/login`                       | No            |
| 3  | Register          | `/register`                    | No            |
| 4  | Forgot Password   | `/forgot-password`             | No            |
| 5  | Reset Password    | `/reset-password`              | No            |
| 6  | Blog Details      | `/blog/:slug`                  | No            |
| 7  | Author Profile    | `/author/:username`            | No            |
| 8  | Search Results    | `/search?q=...`                | No            |
| 9  | Dashboard         | `/dashboard`                   | Yes           |
| 10 | Create Blog       | `/dashboard/create`            | Yes           |
| 11 | Edit Blog         | `/dashboard/edit/:id`          | Yes           |
| 12 | Drafts            | `/dashboard/drafts`            | Yes           |
| 13 | Notifications     | `/dashboard/notifications`     | Yes           |
| 14 | Bookmarks         | `/dashboard/bookmarks`         | Yes           |
| 15 | Profile Settings  | `/dashboard/profile`           | Yes           |
| 16 | Reading History   | `/dashboard/reading-history`   | Yes           |

## Screen States

Every screen should handle the following states:

1. **Loading** — Skeleton components or spinners
2. **Success** — Rendered content
3. **Empty** — Helpful message with call-to-action
4. **Error** — Error message with retry button
5. **Not Found** — 404 state for invalid slugs/IDs
