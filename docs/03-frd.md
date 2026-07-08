# Functional Requirements Document (FRD)

## Module 1: Authentication

| ID     | Requirement              | Priority |
| ------ | ------------------------ | -------- |
| AUTH-1 | User can register        | High     |
| AUTH-2 | User can login           | High     |
| AUTH-3 | User can logout          | High     |
| AUTH-4 | JWT access token issued  | High     |
| AUTH-5 | Refresh token rotation   | High     |
| AUTH-6 | Forgot password flow     | Medium   |
| AUTH-7 | Reset password flow      | Medium   |
| AUTH-8 | Change password          | Medium   |

## Module 2: User Profile

| ID      | Requirement              | Priority |
| ------- | ------------------------ | -------- |
| PROF-1  | View public profile      | High     |
| PROF-2  | Update profile fields    | High     |
| PROF-3  | Upload avatar            | High     |
| PROF-4  | Change password          | Medium   |

## Module 3: Blog Management

| ID     | Requirement              | Priority |
| ------ | ------------------------ | -------- |
| BLOG-1 | Create blog post         | High     |
| BLOG-2 | Save as draft            | High     |
| BLOG-3 | Publish blog             | High     |
| BLOG-4 | Edit blog                | High     |
| BLOG-5 | Delete blog              | High     |
| BLOG-6 | Preview blog             | Medium   |
| BLOG-7 | Upload cover image       | High     |
| BLOG-8 | Assign category/tags     | High     |
| BLOG-9 | Auto-generate slug       | Medium   |
| BLOG-10| Calculate reading time   | Medium   |

## Module 4: Comments

| ID      | Requirement              | Priority |
| ------- | ------------------------ | -------- |
| COMM-1  | Add comment              | High     |
| COMM-2  | Reply to comment         | High     |
| COMM-3  | Delete own comment       | High     |
| COMM-4  | Nested replies           | Medium   |

## Module 5: Reactions

| ID     | Requirement              | Priority |
| ------ | ------------------------ | -------- |
| REACT-1| Like a blog              | High     |
| REACT-2| Heart a blog             | High     |
| REACT-3| Celebrate a blog         | High     |
| REACT-4| Remove reaction          | High     |

## Module 6: Follow System

| ID   | Requirement              | Priority |
| ---- | ------------------------ | -------- |
| FOL-1| Follow user              | High     |
| FOL-2| Unfollow user            | High     |
| FOL-3| View followers/following | High     |
| FOL-4| Suggested authors        | Low      |

## Module 7: Notifications

| ID    | Requirement                | Priority |
| ----- | -------------------------- | -------- |
| NOT-1 | Follow notification        | Medium   |
| NOT-2 | Like notification          | Medium   |
| NOT-3 | Comment notification       | Medium   |
| NOT-4 | Reply notification         | Medium   |
| NOT-5 | Mark notification as read  | Medium   |
| NOT-6 | Mark all as read           | Low      |

## Module 8: Bookmarks

| ID   | Requirement              | Priority |
| ---- | ------------------------ | -------- |
| BKM-1| Bookmark a blog          | High     |
| BKM-2| Remove bookmark          | High     |
| BKM-3| View all bookmarks       | High     |

## Module 9: Reading History

| ID  | Requirement              | Priority |
| --- | ------------------------ | -------- |
| RH-1| Track viewed blogs       | Medium   |
| RH-2| Continue reading list    | Low      |

## Module 10: Search

| ID    | Requirement              | Priority |
| ----- | ------------------------ | -------- |
| SRCH-1| Search by title          | High     |
| SRCH-2| Search by tags           | High     |
| SRCH-3| Search by author         | High     |
| SRCH-4| Search by category       | High     |
| SRCH-5| Filter by latest/popular | Medium   |
| SRCH-6| Filter by most liked     | Low      |
| SRCH-7| Filter by most commented | Low      |

## Module 11: Dashboard

| ID   | Requirement                | Priority |
| ---- | -------------------------- | -------- |
| DASH-1| View total blogs           | High     |
| DASH-2| View draft count           | Medium   |
| DASH-3| View followers count       | Medium   |
| DASH-4| View following count       | Medium   |
| DASH-5| View notification count    | Medium   |
| DASH-6| View bookmark count        | Low      |
