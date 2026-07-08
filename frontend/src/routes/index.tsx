import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { GuestRoute } from "./GuestRoute";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { BlogDetailsPage } from "@/pages/BlogDetailsPage";
import { AuthorProfilePage } from "@/pages/AuthorProfilePage";
import { SearchResultsPage } from "@/pages/SearchResultsPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { CreateBlogPage } from "@/pages/CreateBlogPage";
import { EditBlogPage } from "@/pages/EditBlogPage";
import { DraftsPage } from "@/pages/DraftsPage";
import { NotificationsPage } from "@/pages/NotificationsPage";
import { BookmarksPage } from "@/pages/BookmarksPage";
import { ReadingHistoryPage } from "@/pages/ReadingHistoryPage";
import { ProfileSettingsPage } from "@/pages/ProfileSettingsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/author/:username" element={<AuthorProfilePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/create" element={<CreateBlogPage />} />
          <Route path="/dashboard/edit/:id" element={<EditBlogPage />} />
          <Route path="/dashboard/drafts" element={<DraftsPage />} />
          <Route path="/dashboard/notifications" element={<NotificationsPage />} />
          <Route path="/dashboard/bookmarks" element={<BookmarksPage />} />
          <Route path="/dashboard/reading-history" element={<ReadingHistoryPage />} />
          <Route path="/dashboard/profile" element={<ProfileSettingsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
