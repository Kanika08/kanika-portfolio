"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 flex items-center justify-center text-xs font-semibold">
            KM
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-medium tracking-tight">
              Kanika Mudhar
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              Senior Product Designer
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6 md:gap-8 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-colors ${
                  isActive ? "text-neutral-900 dark:text-neutral-100" : "hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-neutral-900 dark:bg-neutral-100" />
                )}
              </Link>
            );
          })}
          
          {mounted && (
            <button
              onClick={toggleTheme}
              className="ml-2 p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  className="h-4 w-4 text-neutral-600 dark:text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 text-neutral-600 dark:text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

