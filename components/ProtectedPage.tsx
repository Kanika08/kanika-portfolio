"use client";

import { useState, useEffect } from "react";

export default function ProtectedPage({
  correctPassword,
  children,
  storageKey = "protected-case-study",
}: {
  correctPassword: string;
  children: React.ReactNode;
  storageKey?: string;
}) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Restore unlock state on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved === "true") {
      setUnlocked(true);
    }
  }, [storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === correctPassword) {
      setUnlocked(true);
      setError(false);
      localStorage.setItem(storageKey, "true"); // ✅ Persist unlock
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <article className="max-w-3xl mx-auto pt-16 pb-20 px-6 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Protected Case Study
          </h1>

          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            This work is not publicly available. If you have access, enter the password below.
          </p>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Don’t have access?{" "}
            <a
              href="mailto:kanikavasudeva8@gmail.com?subject=Request access to One Page Checkout case study"
              className="underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              Request access
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full px-4 py-3 pr-16 rounded-xl
                border border-neutral-300 dark:border-neutral-700
                bg-white dark:bg-neutral-950
                text-neutral-900 dark:text-neutral-100
                focus:outline-none
                focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100
                transition
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                text-sm text-neutral-500
                hover:text-neutral-900 dark:hover:text-neutral-100
                transition
              "
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-500">
              Incorrect password.
            </p>
          )}

          <button
            type="submit"
            className="
              w-full py-3 rounded-xl
              bg-neutral-900 text-white
              dark:bg-white dark:text-neutral-900
              font-medium
              hover:opacity-90
              active:scale-[0.99]
              transition
            "
          >
            Unlock Case Study
          </button>
        </form>
      </article>
    );
  }

  return <>{children}</>;
}