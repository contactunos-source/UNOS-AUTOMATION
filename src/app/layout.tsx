import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '29240441892241262');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=29240441892241262&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        <NavigationProgress />
        <SnowEffect />
        {children}
      </body>
    </html>
  );
}
