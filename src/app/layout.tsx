import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SnowEffect from "@/components/SnowEffect";
import NavigationProgress from "@/components/NavigationProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNOS AM — AI Voice Agents & Business Automation",
  description:
    "AI-powered voice agents, intelligent automations, and modern websites that help businesses capture more opportunities and spend less time on repetitive work.",
  keywords: [
    "UNOS AM",
    "UNOS AUTOMATIONS",
    "AI voice agent",
    "business automation",
    "dental clinic AI receptionist",
    "workflow automation",
    "appointment booking automation",
    "WhatsApp lead automation",
    "AI receptionist",
  ],
  authors: [{ name: "UNOS AM" }],
  creator: "UNOS AM",
  openGraph: {
    title: "UNOS AM — AI Voice Agents & Business Automation",
    description:
      "AI-powered voice agents, intelligent automations, and modern websites that help businesses capture more opportunities and spend less time on repetitive work.",
    url: "https://unosautomations.com",
    siteName: "UNOS AM",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNOS AM — AI Voice Agents & Business Automation",
    description:
      "AI-powered voice agents and business automation for modern service businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="antialiased bg-white text-neutral-900 selection:bg-orange-100 selection:text-orange-900">
        <NavigationProgress />
        <SnowEffect />
        {children}
      </body>
    </html>
  );
}
