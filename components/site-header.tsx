"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-neutral-50/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-neutral-900 text-neutral-50 flex items-center justify-center text-xs font-semibold">
            KM
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-medium tracking-tight">
              Kanika Mudhar
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Senior Product Designer
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6 md:gap-8 text-xs md:text-sm text-neutral-600">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-colors ${
                  isActive ? "text-neutral-900" : "hover:text-neutral-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-neutral-900" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

