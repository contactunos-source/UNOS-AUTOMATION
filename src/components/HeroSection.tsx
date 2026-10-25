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
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#F7F7F7] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top spacer for navbar */}
      <div className="h-16 lg:h-20 w-full shrink-0" />

      {/* ─── Static Visual Background: Exact Typographic Reference Hands ─── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-reference-clean.png"
          alt="UNOS Automations hands"
          className="w-full h-full object-cover md:object-contain object-center max-w-[1920px] mx-auto select-none pointer-events-none"
          loading="eager"
        />
      </div>

      {/* ─── Central Hero Typography & CTAs (Exact Reference Composition) ─── */}
      <div className="relative z-30 max-w-4xl mx-auto px-6 text-center flex flex-col items-center my-auto py-8 sm:py-12">
        {/* Main Headline styled in exact reference hierarchy: soft grey lead + bold black finisher */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight max-w-2xl leading-[1.18]">
          <span className="block text-neutral-500 font-light">
            Make Your Business
          </span>
          <span className="block text-neutral-900 font-bold mt-1">
            Work Smarter.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-500 max-w-md sm:max-w-lg leading-relaxed font-light">
          From concept to execution, we give you the voice AI, connected workflows, and modern web platforms to transform your business operations.
        </p>

        {/* CTAs styled matching reference pill aesthetics */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-[280px] sm:max-w-none mx-auto pointer-events-auto">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3 bg-neutral-900 text-white text-xs sm:text-sm font-medium rounded-full hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 hover:scale-[1.02] active:scale-[0.98]"
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
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 border border-neutral-300 bg-white/90 text-neutral-800 text-xs sm:text-sm font-medium rounded-full hover:bg-white hover:border-neutral-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 shadow-xs hover:scale-[1.01] active:scale-[0.98] backdrop-blur-sm"
          >
            Explore How It Works
          </a>
        </div>
      </div>

      {/* ─── Bottom Reference Bar ─── */}
      <div className="relative z-30 pb-7 px-8 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs text-neutral-400 font-mono tracking-tight select-none">
        <span>The journey begins in stillness.</span>
        <span className="hidden md:inline text-center text-neutral-400/80">
          Autonomous Voice Agents · Intelligent Business Workflows · High-Performance Web
        </span>
        <button
          onClick={() => document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })}
          className="hover:text-neutral-700 transition-colors cursor-pointer"
        >
          [Scroll to Explore]
        </button>
      </div>
    </section>
  );
}
