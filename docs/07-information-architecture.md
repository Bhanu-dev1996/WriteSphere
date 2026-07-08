# Information Architecture

## Sitemap

```
Home (/)
├── Blog Details (/blog/:slug)
├── Author Profile (/author/:username)
├── Search Results (/search?q=...)
│
├── Login (/login)
├── Register (/register)
│
└── Dashboard (/dashboard)
    ├── Create Blog (/dashboard/create)
    ├── Edit Blog (/dashboard/edit/:id)
    ├── Drafts (/dashboard/drafts)
    ├── Notifications (/dashboard/notifications)
    ├── Bookmarks (/dashboard/bookmarks)
    └── Profile Settings (/dashboard/profile)
```

## Navigation Structure

### Header (All Pages)

- Logo / Brand (links to Home)
- Search Bar
- Navigation Links:
  - Home
  - Categories (dropdown)
- If Authenticated:
  - Create Blog (button)
  - Notification Bell (badge count)
  - User Avatar (dropdown: Dashboard, Profile, Bookmarks, Logout)
- If Guest:
  - Login
  - Register

### Footer (All Pages)

- Brand / Copyright
- Quick Links: Home, About, Privacy, Terms
- Social Links (Future)
- RSS Feed Link (Future)

### Dashboard Sidebar

- Overview
- Create Blog
- Drafts
- Notifications
- Bookmarks
- Profile Settings

## Content Hierarchy

```
Blog Post
├── Title
├── Slug
├── Cover Image
├── Author (User)
│   ├── Avatar
│   ├── Username
│   └── Bio
├── Category
├── Tags (many)
├── Content (rich HTML)
├── Meta Data
│   ├── Publish Date
│   ├── Reading Time
│   ├── Meta Title
│   └── Meta Description
├── Reactions (polymorphic)
│   ├── Like
│   ├── Heart
│   └── Celebrate
├── Comments (nested)
│   ├── Author
│   ├── Content
│   ├── Created At
│   └── Replies (recursive)
└── Related Blogs
```
