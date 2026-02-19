import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Kanika Mudhar",
  description: "Senior Product Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[rgb(var(--background))] text-[rgb(var(--foreground))] antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <SiteHeader />

          <main className="flex-1 pt-20 md:pt-28">
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
