import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CLUB } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: CLUB.name,
    template: `%s · ${CLUB.short}`,
  },
  description: `${CLUB.name}, ${CLUB.school}. ${CLUB.tagline}.`,
  applicationName: CLUB.short,
  keywords: [
    "CSSD Club",
    "Career and Soft Skills Development",
    "Govt. Mohammadpur Model School & College",
    "soft skills",
    "scholarships",
    "student club",
    "Dhaka",
  ],
  authors: [{ name: CLUB.short }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: CLUB.short,
    title: CLUB.name,
    description: `${CLUB.tagline}. ${CLUB.school}.`,
    images: [{ url: "/logo.png", width: 400, height: 400, alt: CLUB.short }],
  },
  twitter: {
    card: "summary",
    title: CLUB.name,
    description: `${CLUB.tagline}. ${CLUB.school}.`,
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0089BF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <a
          href="#main"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:h-auto focus:w-auto focus:rounded-full focus:bg-cyan-deep focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
