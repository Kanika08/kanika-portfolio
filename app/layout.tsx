import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanika Mudhar | Senior Product Designer",
  description:
    "Systems-focused product designer building scalable, high-impact experiences across subscriptions, growth, and design systems.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function () {
            try {
              var savedTheme = localStorage.getItem("theme");
              var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

              if (savedTheme === "dark" || (!savedTheme && systemDark)) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            } catch (_) {}
          })();`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300 antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <SiteHeader />

          <main className="flex-1 pt-16 md:pt-20 pb-24">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              {children}
            </div>
          </main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}