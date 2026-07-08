# Design System — Editorial Clarity

## Visual Identity

Editorial Clarity is a sophisticated, high-end editorial visual language. It balances classical authority with contemporary minimalism, prioritizing readability and high-impact curation.

## Design Tokens

### Color Palette

```css
/* Tailwind v4 CSS-first configuration */
@theme {
  --color-surface:           #F7F7F2;  /* Primary background — paper-like feel */
  --color-primary:           #2F5FB3;  /* Deep blue — typography, primary actions */
  --color-surface-container: #EDEAE6;  /* Subtle section separation */
  --color-outline:           #D4D4D4;  /* Refined borders */
}
```

### Typography

| Role             | Font Family      | Style                                |
| ---------------- | ---------------- | ------------------------------------ |
| Display / Heroes | Playfair Display | High-contrast serif, editorial "print" feel |
| Body & Labels    | Inter / System   | Clean sans-serif, long-form readability |

**Type Scale:**

- **Display Large** — Hero headlines (`The Art of Slow Living...`)
- **Headline Medium** — Section titles (`Featured Stories`, `Latest Thinking`)
- **Body Large** — Lead paragraphs (high-readability serif or sans-serif)
- **Label Small** — All-caps tracking for categories (`ARCHITECTURE`, `TECHNOLOGY`)

### Layout & Spacing

- **Grid:** Standard 12-column desktop grid with generous gutters
- **Margins:** Spacious whitespace — 80px+ section padding to let content breathe
- **Border Radius:** 0–4px — subtle, professional softness on interactive elements

## Component Patterns

### 1. Navigation (TopNavBar)

| Property       | Value                                |
| -------------- | ------------------------------------ |
| Position       | Fixed                                |
| Background     | `bg-surface/80` with `backdrop-blur` |
| Alignment      | Left: logo / Center: links / Right: actions |
| Links          | Featured, Trending, Latest           |
| Actions        | Search, Login, Register              |
| Hover          | Subtle underline or color shift      |

### 2. Typography Hierarchy

- **Display Large** — Hero headlines (Playfair Display)
- **Headline Medium** — Section titles
- **Body Large** — Lead paragraphs
- **Label Small** — All-caps category labels with letter-spacing

### 3. Content Cards

- **Featured Cards** — Large, high-resolution imagery with overlapping or adjacent typography
- **Standard Cards** — Vertical stack: Category → Title → Metadata (Read time, Author)
- **Author Cards** — Circular avatar with centered text and follow actions

### 4. Interactive Elements

- **Buttons** — High-contrast (Primary background / Surface text), minimal rounding (4px)
- **Inputs** — Clean, outlined fields (e.g. newsletter subscriptions)

## Content Strategy

- **Curation First** — The layout prioritizes "The Curator's Choice" to establish a point of view
- **Voices of Authority** — Explicitly highlighting authors to build trust and community
- **Topic Exploration** — Visual entry points for Technology, Lifestyle, Business, and Health

## Component Standards

- All interactive elements use `focus-visible:ring-2` for keyboard focus
- Loading states show Skeleton components
- Empty states show helpful illustrations/messages
- Error states show retry buttons
- Transitions use `transition-all duration-200`
