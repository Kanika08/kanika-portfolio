"use client";

import { useState } from "react";

export default function ProtectedPage({
  correctPassword,
  children,
}: {
  correctPassword: string;
  children: React.ReactNode;
}) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === correctPassword) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white dark:bg-neutral-950">
        
        {/* Gradient Blobs */}
        <div className="absolute w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-3xl -top-32 -left-32" />
        <div className="absolute w-[400px] h-[400px] bg-pink-300/30 rounded-full blur-3xl bottom-0 right-0" />

        <div
          className="relative max-w-md w-full space-y-8 bg-neutral-50/80 dark:bg-neutral-900/70 backdrop-blur-xl p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
        >
          <div className="space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight">
              Protected Case Study
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              This work is shared thoughtfully and requires permission to view.
              If you have access, enter the password below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            {error && (
              <p className="text-sm text-red-500">
                That password isn’t quite right.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-700 text-white font-medium shadow-md hover:bg-purple-800 transition"
            >
              Unlock Case Study
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}