"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDarkNow = root.classList.contains("dark");
    const nextTheme = isDarkNow ? "light" : "dark";
    root.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center text-xs font-semibold">
            KM
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-medium tracking-tight text-primary">
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
                className={`relative pb-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 rounded-sm ${
                  isActive ? "text-neutral-900 dark:text-neutral-100" : "hover:text-black dark:hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-neutral-900 dark:bg-neutral-100" />
                )}
              </Link>
            );
          })}
          
          <button
            onClick={toggleTheme}
            className="ml-2 p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 transition-colors"
            aria-label="Toggle theme"
          >
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
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m14.364 6.364l-.707-.707M6.343 6.343l-.707-.707M18.364 5.636l-.707.707M6.343 17.657l-.707.707M12 16a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

