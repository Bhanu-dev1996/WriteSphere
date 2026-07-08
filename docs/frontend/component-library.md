# Component Library

## Base Primitives (shadcn/ui / Radix UI)

Unstyled, accessible primitives customized with Editorial Clarity tokens:

- Button (high-contrast, 4px rounding)
- Input / Textarea (clean, outlined)
- Select
- Badge (all-caps tracking labels)
- Card
- Avatar (circular)
- DropdownMenu
- Dialog / Modal
- Sheet (slide-over)
- Popover
- Tooltip
- Tabs
- Separator
- Skeleton (loading states)
- Toast
- Progress
- Switch
- Checkbox
- RadioGroup
- Label
- Form (react-hook-form integration)
- Command (search palette)
- ScrollArea

## Custom Components — Editorial Clarity

### Navigation & Layout

- **TopNavBar** — Fixed, translucent (`bg-surface/80` + `backdrop-blur`); left logo, center links (Featured, Trending, Latest), right actions
- **Footer** — Curated link columns, brand mark, social links
- **DashboardSidebar** — Collapsible, active-route highlighting

### Content Display

- **HeroBanner** — Curator's Choice section; large-format imagery with overlapping typography (Playfair Display)
- **FeaturedCard** — Large image + adjacent or overlapping headline + metadata
- **StandardCard** — Category (all-caps label) → Title → Author + Read time
- **AuthorCard** — Circular avatar, centered name, follow button
- **BlogList** — Paginated grid with infinite scroll
- **TrendingWidget** — Sidebar list of trending stories

### Editorial Typography

- **DisplayHeading** — Playfair Display for hero / section titles
- **SectionTitle** — Headline Medium for `Featured Stories`, `Latest Thinking`
- **CategoryLabel** — All-caps small with letter-spacing (`ARCHITECTURE`)
- **BodyText** — Inter for long-form readability
- **RichTextRenderer** — Render HTML content with editorial typography

### Social & Interaction

- **ReactionBar** — Like / Heart / Celebrate buttons with counts
- **CommentThread** — Nested comment display
- **CommentForm** — Add / reply comment input
- **FollowButton** — Toggle follow
- **BookmarkButton** — Toggle bookmark

### Notifications & Status

- **NotificationBell** — Header icon with unread badge count
- **NotificationList** — Notification feed with type icons

### Utilities

- **SearchBar** — Header search with expanded overlay
- **CoverImage** — Optimized 16:9 cover with fallback
- **AvatarUpload** — Circular upload with preview
- **RichTextEditor** — TipTap-based editorial editor
- **SEOHead** — React Helmet Async wrapper
- **ReadingTime** — Read time indicator
