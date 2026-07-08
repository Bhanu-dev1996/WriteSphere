# Screen Requirements

## 1. Home Page (`/`)

- Hero banner with featured blogs
- Latest blogs section
- Trending blogs section
- Popular categories grid
- Top authors sidebar or section
- Search bar in header

## 2. Login Page (`/login`)

- Email / password form
- Link to register
- Forgot password link
- Form validation with error messages

## 3. Register Page (`/register`)

- Username, email, password, confirm password fields
- Link to login
- Form validation

## 4. Blog Details Page (`/blog/:slug`)

- Cover image (full width)
- Title, author avatar + name, publish date, reading time
- Tags and category badges
- Rich content renderer
- Reaction bar (Like, Heart, Celebrate)
- Comment section with nested replies
- Related blogs at bottom

## 5. Author Profile Page (`/author/:username`)

- Avatar, username, bio, join date
- Follower / following counts with follow button
- List of author's published blogs

## 6. Dashboard (`/dashboard`)

- Stats cards: total blogs, drafts, followers, following, notifications, bookmarks
- Quick actions: create blog, view drafts
- Recent activity feed

## 7. Create Blog (`/dashboard/create`)

- Title input
- Slug input (auto-generated, editable)
- Category selector
- Tags input (multi-select)
- Cover image upload
- Rich text editor
- Meta title / description fields (SEO)
- Save Draft / Publish buttons

## 8. Edit Blog (`/dashboard/edit/:id`)

- Same form as Create, pre-populated

## 9. Drafts (`/dashboard/drafts`)

- List of draft blogs with edit/delete actions
- Publish button per draft

## 10. Notifications (`/dashboard/notifications`)

- Notification list with type icons
- Mark read / Mark all read buttons
- Unread indicator

## 11. Bookmarks (`/dashboard/bookmarks`)

- Grid or list of bookmarked blogs
- Remove bookmark button

## 12. Profile Settings (`/dashboard/profile`)

- Avatar upload
- Username, bio fields
- Change password section

## 13. Search Results (`/search?q=...`)

- Blog cards matching the query
- Filter tabs: Latest, Popular, Most Liked, Most Commented
- Pagination or infinite scroll
