"use client";

import { siteConfig } from "@/lib/config";

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92svh] sm:min-h-[94vh] lg:min-h-screen bg-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* ─── Desktop Background Visual (lg+ screens) ─── */}
      <div
        aria-hidden="true"
        className="hidden lg:flex absolute inset-0 pointer-events-none items-center justify-center overflow-hidden z-10"
      >
        {/* Luminous touchpoint glow in center of desktop hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-44 bg-gradient-to-r from-orange-400/20 via-amber-300/25 to-blue-400/20 rounded-full blur-3xl pointer-events-none -z-1" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-banner-realistic.jpg"
          alt="Realistic robotic hand on left and realistic human hand on right reaching toward each other"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
          loading="eager"
        />
      </div>

      {/* ─── Subtle Ambient Background Lighting (All devices) ─── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 sm:h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100/70 via-white to-transparent pointer-events-none z-0"
      />

      {/* ─── Top: Heading Section (All devices) ─── */}
      <div className="relative z-30 pt-16 sm:pt-20 lg:pt-24 xl:pt-28 px-5 sm:px-6 text-center max-w-4xl mx-auto w-full">
        {/* Next-Gen Pill Badge: introduces business automation */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 mb-2.5 sm:mb-3.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-[11px] sm:text-xs font-medium text-neutral-700 shadow-2xs backdrop-blur-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Next-Gen Business Automation</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] tracking-tight max-w-2xl mx-auto leading-[1.14]">
          <span className="block text-neutral-500 font-light">
            Make Your Business
          </span>
          <span className="block text-neutral-900 font-bold mt-1">
            Work Smarter.
          </span>
        </h1>

        {/* Subtitle: gives context and eliminates empty dead space across all screens */}
        <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed">
          AI Voice Agents & Autonomous Workflows engineered to scale your operations 24/7.
        </p>
      </div>

      {/* ─── Mobile Hands Illustration (< lg): prominent, complete fingers, luminous aura ─── */}
      <div
        aria-hidden="true"
        className="lg:hidden relative z-20 w-full my-auto py-2 sm:py-3 flex items-center justify-center select-none pointer-events-none"
      >
        {/* Subtle luminous energetic glow behind connection point */}
        <div className="absolute w-44 h-24 bg-gradient-to-r from-orange-400/15 via-amber-300/20 to-blue-400/15 rounded-full blur-2xl pointer-events-none -z-10" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-banner-realistic-mobile.jpg"
          alt="Realistic robotic hand on left and realistic human hand on right reaching toward each other"
          className="w-full max-w-[540px] h-auto object-contain select-none pointer-events-none mx-auto"
          loading="eager"
        />
      </div>

      {/* ─── Bottom: CTAs & Trust Badges (All devices) ─── */}
      <div className="relative z-30 pb-6 sm:pb-8 lg:pb-12 xl:pb-14 px-6 text-center max-w-4xl mx-auto w-full pointer-events-auto">
        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[290px] sm:max-w-none mx-auto">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-neutral-900 text-white text-xs sm:text-sm font-medium rounded-full hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform duration-200 group-hover:scale-110" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#journey"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 sm:px-8 py-3.5 border border-neutral-300 bg-white/95 text-neutral-800 text-xs sm:text-sm font-medium rounded-full hover:bg-white hover:border-neutral-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 shadow-xs hover:scale-[1.01] active:scale-[0.98] backdrop-blur-sm"
          >
            Explore How It Works
          </a>
        </div>

        {/* Micro Trust Row: credibility and completeness on all devices */}
        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-neutral-100/90 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-neutral-500 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            24/7 Voice Agents
          </span>
          <span className="text-neutral-300">•</span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Smart Workflows
          </span>
          <span className="text-neutral-300">•</span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Zero Downtime
          </span>
        </div>
      </div>
    </section>
  );
}
