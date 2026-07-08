# Accessibility

## Standards

Targeting WCAG 2.1 Level AA compliance.

## Implementation Guidelines

### Semantic HTML

- Use proper heading hierarchy (`h1` → `h6`)
- Use `<nav>`, `<main>`, `<aside>`, `<footer>`, `<article>` landmarks
- Use `<button>` for actions, `<a>` for navigation
- Use `<label>` for form inputs

### ARIA

- `aria-label` on icon-only buttons
- `aria-current="page"` on active nav links
- `aria-expanded` on collapsible elements
- `aria-hidden` on decorative icons
- `role="alert"` for error messages
- `role="status"` for live regions (toast notifications)

### Keyboard Navigation

- All interactive elements are keyboard focusable
- Tab order follows visual layout
- Escape key closes modals, dropdowns, and slide-overs
- Enter/Space activates buttons and links
- Arrow keys for list navigation (dropdowns, tabs)
- Visible focus indicators (`focus-visible:ring-2`)

### Screen Reader

- Alt text on all images
- Descriptive link text (not "click here")
- Loading states announced via `aria-live="polite"`
- Form error messages linked to inputs via `aria-describedby`
- Skip-to-content link at top of page

### Color & Contrast

- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- Information not conveyed by color alone (icons + labels)
- Both light and dark modes meet contrast requirements
