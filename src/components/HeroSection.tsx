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
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top spacer for navbar */}
      <div className="h-16 lg:h-20 w-full shrink-0" />

      {/* ─── Static Visual Background: Pure White with Realistic Hands Reaching Toward Each Other ─── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-banner.jpg"
          alt="Human and AI Robotic hands reaching toward each other"
          className="w-full h-full object-cover sm:object-contain lg:object-cover object-center max-w-[2200px] mx-auto select-none pointer-events-none"
          loading="eager"
        />
      </div>

      {/* ─── Central Hero Typography & CTAs (Reference Composition) ─── */}
      <div className="relative z-30 max-w-4xl mx-auto px-6 text-center flex flex-col items-center my-auto py-10 lg:py-16">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.12] max-w-3xl">
          Make Your Business{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 relative inline-block">
            Work Smarter.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-neutral-600 max-w-xl leading-relaxed font-light">
          AI voice agents, intelligent automations, and modern websites that help clinics and service businesses capture leads, book appointments, and scale operations seamlessly.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-[280px] sm:max-w-none mx-auto pointer-events-auto">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 hover:scale-[1.02] active:scale-[0.98]"
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
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 border border-neutral-300 bg-white/90 text-neutral-800 text-sm font-semibold rounded-full hover:bg-white hover:border-neutral-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 shadow-xs hover:scale-[1.01] active:scale-[0.98] backdrop-blur-sm"
          >
            Explore How It Works
          </a>
        </div>
      </div>

      {/* ─── Bottom Reference Bar ─── */}
      <div className="relative z-30 pb-6 px-8 max-w-7xl mx-auto w-full hidden md:flex items-center justify-between text-xs text-neutral-400 font-mono tracking-tight select-none pointer-events-auto">
        <span>The journey begins in stillness.</span>
        <span className="text-center text-neutral-400/80">
          Autonomous Voice Agents · Intelligent Business Workflows
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
