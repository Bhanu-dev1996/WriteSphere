# Frontend Testing

## Tools

- **Vitest** — Test runner
- **React Testing Library** — Component testing
- **MSW** (Mock Service Worker) — API mocking

## Component Tests

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { BlogCard } from "./BlogCard";

describe("BlogCard", () => {
  it("renders title, author, and reading time", () => {
    render(<BlogCard post={mockPost} />);
    expect(screen.getByText("My Post Title")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("5 min read")).toBeInTheDocument();
  });

  it("navigates to blog details on click", async () => {
    render(<BlogCard post={mockPost} />);
    await userEvent.click(screen.getByRole("link"));
    expect(window.location.pathname).toBe("/blog/my-post");
  });
});
```

## Hook Tests

```typescript
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePosts } from "./usePosts";

describe("usePosts", () => {
  it("returns posts list", async () => {
    const { result } = renderHook(() => usePosts({ page: 1 }), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={new QueryClient()}>
          {children}
        </QueryClientProvider>
      ),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toHaveLength(10);
  });
});
```

## What to Test

- Component rendering with different props
- User interactions (clicks, typing, form submission)
- Loading, empty, and error states
- Conditional rendering (authenticated vs guest)
- Form validation messages
- Accessibility (aria attributes, roles)
