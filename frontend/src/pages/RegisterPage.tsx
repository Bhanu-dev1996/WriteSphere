import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Register — WriteSphere</title>
      </Helmet>

      <div className="text-center mb-8">
        <Link to="/" className="font-serif text-2xl font-bold text-foreground">
          WriteSphere
        </Link>
        <p className="text-sm text-muted-foreground mt-2">Create your account</p>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-foreground mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full border border-outline rounded px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="johndoe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-outline rounded px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-outline rounded px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2.5 text-sm font-medium rounded hover:bg-primary-600 transition-colors"
        >
          Register
        </button>
      </form>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}
