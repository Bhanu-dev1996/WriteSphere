# Theme

## Implementation

Theme is implemented using Tailwind CSS v4 with `@custom-variant dark` and toggled via a Zustand store.

## Theme Toggle

A theme toggle (sun/moon icon) in the header allows users to switch between light, dark, and system preference.

```typescript
function useTheme() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", isDark);
  }, [theme]);

  return { theme, setTheme };
}
```

## Color Palette — Editorial Clarity

### Light Mode

| Token              | Hex       | Usage                            |
| ------------------ | --------- | -------------------------------- |
| Surface            | `#F7F7F2` | Primary background — paper feel  |
| Primary            | `#2F5FB3` | Deep blue — typography, actions  |
| Surface Container  | `#EDEAE6` | Subtle section separation        |
| Foreground         | `#1A1A1A` | Primary text                     |
| Muted Foreground   | `#6B6B6B` | Secondary text                   |
| Outline            | `#D4D4D4` | Refined borders                  |
| Destructive        | `#D32F2F` | Error states                     |

### Dark Mode (Future)

Dark mode follows the same editorial philosophy with inverted values:

| Token              | Hex       |
| ------------------ | --------- |
| Surface            | `#1A1A1A` |
| Surface Container  | `#2A2A2A` |
| Primary            | `#6B9CE3` |
| Foreground         | `#F7F7F2` |
| Muted Foreground   | `#999999` |
| Outline            | `#404040` |

## Typography

- **Headlines:** Playfair Display (serif) — conveys authority and editorial "print" feel
- **Body & Labels:** Inter / system sans-serif — optimized for long-form readability

## Persistence

Theme preference is persisted in `localStorage` under the key `writeshere-theme`.
