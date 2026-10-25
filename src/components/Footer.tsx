"use client";

import { siteConfig } from "@/lib/config";

const year = new Date().getFullYear();

function scrollTo(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12 border-b border-neutral-800">
          {/* Brand column */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3.5">
              <div className="relative h-8 w-auto flex items-center justify-center px-2 py-1 rounded-lg bg-white/[0.08] border border-white/10 shadow-sm backdrop-blur-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-light.png"
                  alt="UNOS AUTOMATIONS logo"
                  className="h-5.5 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                <span>UNOS</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                  AUTOMATIONS
                </span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              AI voice agents, business automation workflows, and modern web development for clinics and service-based businesses.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-orange-400 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {siteConfig.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {year} UNOS AUTOMATIONS. All rights reserved.</p>
          <p>AI Voice Agents · Intelligent Workflows · Web Development</p>
        </div>
      </div>
    </footer>
  );
}
