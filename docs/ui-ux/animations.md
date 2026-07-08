# Animations

## Library

Framer Motion is used for all animations and transitions.

## Page Transitions

```typescript
// Route-level page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};
```

## Micro-interactions

| Element      | Animation                        | Duration |
| ------------ | -------------------------------- | -------- |
| Button hover | Scale 1.02, slight shadow        | 200ms    |
| Button click | Scale 0.98                       | 100ms    |
| Card hover   | Translate Y -4px, shadow increase| 300ms    |
| Reaction     | Bounce scale (1 -> 1.3 -> 1)    | 400ms    |
| Toast enter  | Slide in from right              | 300ms    |
| Modal open   | Fade in + scale                  | 200ms    |
| Dropdown     | Fade + slide                     | 150ms    |
| Skeleton     | Pulse shimmer                    | 1.5s loop |

## Reduced Motion

```typescript
// Respect user's motion preferences
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Disable animations if reduced motion is preferred
if (prefersReducedMotion.matches) {
  // Use instant transitions
}
```

## Implementation

- Use Framer Motion's `AnimatePresence` for exit animations
- Use `motion.div` for animated containers
- Use `whileHover`, `whileTap` for interactive animations
- Use `layoutId` for shared layout animations
- Avoid animating layout properties that trigger repaints (prefer `transform` and `opacity`)
