import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  );
}
