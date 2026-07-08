# User Flow Diagrams

## 1. Authentication Flow

```
[Guest] --> Home Page
  |-- Click Login --> Login Page --> Enter Credentials --> JWT Stored --> Redirect to Home
  |-- Click Register --> Register Page --> Fill Form --> Account Created --> Redirect to Login
[Registered User] --> Logout --> Clear JWT --> Redirect to Home
```

## 2. Blog Creation Flow

```
[Dashboard] --> Click "Create Blog"
  --> Blog Editor Form
    --> Fill Title, Content, Category, Tags, Cover Image
    --> Click "Save Draft" --> Blog saved as draft
    --> Click "Publish" --> Blog published --> Redirect to Blog Details
```

## 3. Comment Flow

```
[Blog Details] --> Scroll to Comments Section
  --> Type Comment --> Submit --> Comment Appears
  --> Click Reply on a Comment --> Reply Input Appears --> Submit Reply --> Nested Thread
  --> Click Delete on Own Comment --> Comment Removed
```

## 4. Reaction Flow

```
[Blog Details] --> Reaction Bar
  --> Click Like/Heart/Celebrate --> Reaction Count Increments
  --> Click Same Reaction Again --> Reaction Removed
```

## 5. Follow Flow

```
[Author Profile / Blog Details Author Widget]
  --> Click Follow --> Author Added to Following
  --> Click Unfollow --> Author Removed from Following
```

## 6. Notification Flow

```
[Any Interaction: Follow, Like, Comment, Reply]
  --> Notification Created for Target User
  --> User Sees Badge in Header
  --> User Opens Notifications Page --> Reads Notifications
  --> Marks as Read --> Badge Updates
```

## 7. Bookmark Flow

```
[Blog Details] --> Click Bookmark Icon
  --> Blog Saved to Bookmarks
  --> Click Again --> Bookmark Removed
[User Dashboard] --> Bookmarks Page --> View All Bookmarks
```

## 8. Search Flow

```
[Header Search Bar] --> Type Query
  --> Results Page with Matching Blogs
  --> Apply Filters (Latest, Popular, etc.)
  --> Click Blog --> Navigate to Blog Details
```

## 9. Reading History Flow

```
[Blog Details] --> Page Load
  --> Entry Added to Reading History
[User Dashboard] --> Continue Reading Section
  --> Shows Recently Viewed Blogs
  --> Click --> Resume Reading
```
