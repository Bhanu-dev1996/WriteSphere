# Form Validation

## Approach

- **React Hook Form** for form state management and submission
- **Zod** for schema definition and validation
- **@hookform/resolvers** for integration between RHF and Zod

## Validation Schemas

### Register

```typescript
const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be at most 50 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  email: z
    .string()
    .email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
```

### Login

```typescript
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
```

### Create Blog

```typescript
const createBlogSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(500, "Title must be at most 500 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  category_id: z.string().uuid("Select a category"),
  tag_ids: z.array(z.string().uuid()).min(1, "Select at least one tag"),
  cover_image: z.string().url().optional().or(z.literal("")),
  meta_title: z.string().max(200).optional().or(z.literal("")),
  meta_description: z.string().max(500).optional().or(z.literal("")),
  status: z.enum(["draft", "published"]),
});
```

### Profile

```typescript
const profileSchema = z.object({
  username: z.string().min(3).max(50),
  bio: z.string().max(500).optional().or(z.literal("")),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  location: z.string().max(255).optional().or(z.literal("")),
});
```

### Comment

```typescript
const commentSchema = z.object({
  content: z
    .string()
    .min(1, "Comment cannot be empty")
    .max(2000, "Comment must be at most 2000 characters"),
});
```

## Error Display

- Inline error messages below each field
- Form-level error banner for server errors
- Toast notifications for mutation errors
- Disabled submit button while validation errors exist or mutation is pending
