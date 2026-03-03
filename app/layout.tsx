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
  metadataBase: new URL("https://kanikamudhar.com"),

  title: {
    default: "Kanika Mudhar – Senior Product Designer in Toronto",
    template: "%s | Kanika Mudhar",
  },

  description:
    "Kanika Mudhar (Kanika Vasudeva) is a Senior Product Designer in Toronto specializing in growth experiments, checkout optimization, and scalable systems.",

  keywords: [
    "Kanika Mudhar",
    "Kanika Vasudeva",
    "Senior Product Designer Toronto",
    "UX Designer Canada",
  ],

  authors: [{ name: "Kanika Mudhar" }],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kanika Mudhar – Senior Product Designer",
    description:
      "Portfolio of Kanika Mudhar (Kanika Vasudeva), Senior Product Designer focused on growth and experimentation.",
    url: "https://kanikamudhar.com",
    siteName: "Kanika Mudhar Portfolio",
    type: "website",
  },

  verification: {
    google: "8Mh7J0p08reM3t_ScgKBp2xqcaoSYZkMAKP_nszQ9KM",
  },

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-neutral-900 antialiased`}
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

        {/* 👇 ADD THIS RIGHT HERE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kanika Mudhar",
              alternateName: "Kanika Vasudeva",
              jobTitle: "Senior Product Designer",
              url: "https://yourdomain.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressCountry: "Canada",
              },
            }),
          }}
        />
        {/* 👆 END ADD */}
        
      </body>
    </html>
  );
}