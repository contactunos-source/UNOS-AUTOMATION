"use client";

import { siteConfig } from "@/lib/config";
import { motion, useReducedMotion } from "framer-motion";

// WhatsApp Icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Incoming text transmission fragments (traveling left -> left ear)
  const incomingFragments = [
    { text: "schedule appointment", lane: "top-[10%]", duration: 5.5, delay: 0 },
    { text: "query: { intent: 'reschedule' }", lane: "top-[40%]", duration: 6.2, delay: 1.8 },
    { text: "patient inquiry", lane: "top-[70%]", duration: 5.0, delay: 3.2 },
    { text: "voice in • 16kHz", lane: "top-[25%]", duration: 5.8, delay: 4.0 },
    { text: "confirm consultation", lane: "top-[55%]", duration: 6.0, delay: 2.2 },
  ];

  // Outgoing voice fragments (traveling right ear -> right edge)
  const outgoingFragments = [
    { text: "AI Voice • 24kHz", lane: "top-[15%]", duration: 5.2, delay: 0.5 },
    { text: "“Confirmed for tomorrow 3 PM”", lane: "top-[42%]", duration: 6.5, delay: 2.0 },
    { text: "WhatsApp dispatch: OK", lane: "top-[68%]", duration: 5.8, delay: 3.6 },
    { text: "CRM updated • 180ms", lane: "top-[30%]", duration: 6.0, delay: 1.2 },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] sm:min-h-[96vh] lg:min-h-screen bg-white flex flex-col justify-between items-center overflow-hidden select-none"
    >
      {/* ─── Subtle Ambient Background Lighting ─── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 sm:h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100/80 via-white to-transparent pointer-events-none z-0"
      />

      {/* ─── Top: Heading Section (Above the AI Agent) ─── */}
      <div className="relative z-20 pt-24 sm:pt-28 lg:pt-24 xl:pt-28 px-5 sm:px-6 text-center max-w-4xl mx-auto w-full">
        {/* Next-Gen Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 mb-2 sm:mb-3 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-[11px] sm:text-xs font-medium text-neutral-700 shadow-2xs backdrop-blur-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Next-Gen Business Automation</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] tracking-tight max-w-2xl mx-auto leading-[1.12]">
          <span className="block text-neutral-500 font-light">
            Make Your Business
          </span>
          <span className="block text-neutral-900 font-bold mt-1">
            Work Smarter.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed">
          AI Voice Agents & Autonomous Workflows engineered to scale your operations 24/7.
        </p>
      </div>

      {/* ─── Center: AI Agent Character with Ear-to-Ear Transmission Flow ─── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-2 sm:py-4 flex items-center justify-center select-none">
        
        {/* Ambient Cyan / Aqua Glow matching AI Agent Eyes */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10"
        />

        {/* ── Central Robot Anchor Wrapper ── */}
        <div className="relative inline-flex flex-col items-center justify-center">

          {/* ══════════════════════════════════════════════════════════════
              LEFT SIDE: INCOMING TEXT TRANSMISSION (FLOWING INTO LEFT EAR)
             ══════════════════════════════════════════════════════════════ */}
          <div
            aria-hidden="true"
            className="absolute top-[22.8%] -translate-y-1/2 right-[73.6%] w-[42vw] max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[500px] h-20 sm:h-24 md:h-28 pointer-events-none overflow-hidden"
          >
            {/* Ambient Transmission Guide Lines */}
            <svg
              className="absolute inset-0 w-full h-full text-neutral-300/70"
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Upper Converging Rail */}
              <path
                d="M 0,25 Q 250,30 495,50"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeDasharray="4 6"
                className="opacity-60"
              />
              {/* Center Direct Rail (Targeting Left Ear) */}
              <path
                d="M 0,50 L 495,50"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-300"
              />
              {/* Lower Converging Rail */}
              <path
                d="M 0,75 Q 250,70 495,50"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeDasharray="4 6"
                className="opacity-60"
              />
              {/* Subtle Cyan Intake Pulse Rail */}
              <path
                d="M 200,50 L 495,50"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-40"
              />
            </svg>

            {/* Left Ear Intake Port / Beacon */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 flex items-center justify-center z-20">
              <span className="absolute w-3.5 h-3.5 rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            </div>

            {/* Streaming Text Fragments: Travel from far left toward left ear */}
            {!shouldReduceMotion ? (
              incomingFragments.map((item, idx) => (
                <motion.div
                  key={`in-${idx}`}
                  className={`absolute ${item.lane} left-0 flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/90 border border-neutral-200/90 shadow-2xs backdrop-blur-xs`}
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: ["-20%", "420%"],
                    opacity: [0, 0.9, 0.9, 0],
                  }}
                  transition={{
                    duration: item.duration,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-500" />
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] font-mono text-neutral-600 font-medium whitespace-nowrap">
                    {item.text}
                  </span>
                </motion.div>
              ))
            ) : (
              // Static Fallback for Reduced Motion
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-end">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200">
                  query: {`{ intent: 'book' }`}
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-neutral-100 text-neutral-500 border border-neutral-200">
                  voice in • 16kHz
                </span>
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              CENTER: AI AGENT CHARACTER IMAGE
             ══════════════════════════════════════════════════════════════ */}
          <div className="relative flex items-center justify-center z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <picture>
              <source srcSet="/images/ai-agent.webp" type="image/webp" />
              <img
                src="/images/ai-agent.png"
                alt="UNOS Autonomous AI Agent"
                className="h-[220px] xs:h-[250px] sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[400px] w-auto max-w-[85vw] object-contain drop-shadow-sm select-none"
                loading="eager"
              />
            </picture>
          </div>

          {/* Soft Realistic Contact Shadow beneath robot */}
          <div
            aria-hidden="true"
            className="w-36 sm:w-48 lg:w-56 h-3 sm:h-4 bg-neutral-900/12 rounded-full blur-md -mt-1 sm:-mt-2 pointer-events-none"
          />

          {/* ══════════════════════════════════════════════════════════════
              RIGHT SIDE: OUTGOING VOICE SIGNAL (FLOWING FROM RIGHT EAR)
             ══════════════════════════════════════════════════════════════ */}
          <div
            aria-hidden="true"
            className="absolute top-[23.2%] -translate-y-1/2 left-[71.5%] w-[42vw] max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[500px] h-20 sm:h-24 md:h-28 pointer-events-none overflow-hidden"
          >
            {/* Right Ear Broadcast Port / Beacon */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 flex items-center justify-center z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span className="absolute w-3.5 h-3.5 rounded-full bg-cyan-400 opacity-75 animate-ping" />
            </div>

            {/* Outgoing Animated Voice Waveform (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                {/* Subtle gradient for primary voice frequency wave */}
                <linearGradient id="voiceWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                  <stop offset="35%" stopColor="#0ea5e9" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#f97316" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#737373" stopOpacity="0.2" />
                </linearGradient>

                <linearGradient id="voiceSubGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Baseline Horizontal Center Guide */}
              <line
                x1="0"
                y1="50"
                x2="500"
                y2="50"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="2 4"
              />

              {/* Secondary Harmonic Wave */}
              <path
                d="M 5,50 Q 25,65 45,50 T 85,50 T 125,40 T 165,60 T 205,35 T 245,65 T 285,45 T 325,55 T 365,48 T 405,52 T 450,50 L 500,50"
                stroke="url(#voiceSubGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="opacity-70"
              />

              {/* Primary Dynamic Voice Waveform: rises & falls naturally like human AI speech */}
              <motion.path
                d="M 5,50 Q 25,22 45,50 T 85,50 T 125,18 T 165,78 T 205,26 T 245,72 T 285,32 T 325,64 T 365,40 T 405,58 T 450,50 L 500,50"
                stroke="url(#voiceWaveGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: shouldReduceMotion ? 1 : 0.8 }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        d: [
                          "M 5,50 Q 25,22 45,50 T 85,50 T 125,18 T 165,78 T 205,26 T 245,72 T 285,32 T 325,64 T 365,40 T 405,58 T 450,50 L 500,50",
                          "M 5,50 Q 25,32 45,50 T 85,50 T 125,28 T 165,68 T 205,18 T 245,80 T 285,25 T 325,70 T 365,36 T 405,54 T 450,50 L 500,50",
                          "M 5,50 Q 25,18 45,50 T 85,50 T 125,14 T 165,82 T 205,32 T 245,64 T 285,38 T 325,60 T 365,44 T 405,52 T 450,50 L 500,50",
                          "M 5,50 Q 25,22 45,50 T 85,50 T 125,18 T 165,78 T 205,26 T 245,72 T 285,32 T 325,64 T 365,40 T 405,58 T 450,50 L 500,50",
                        ],
                      }
                }
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Speech Waveform Frequency Nodes */}
              <circle cx="125" cy="18" r="2" fill="#06b6d4" className="opacity-80" />
              <circle cx="205" cy="26" r="2.5" fill="#0ea5e9" className="opacity-90" />
              <circle cx="285" cy="32" r="2" fill="#f97316" className="opacity-80" />
              <circle cx="365" cy="40" r="1.5" fill="#737373" className="opacity-60" />
            </svg>

            {/* Outgoing Voice Chips: Broadcast from right ear outward to right edge */}
            {!shouldReduceMotion ? (
              outgoingFragments.map((item, idx) => (
                <motion.div
                  key={`out-${idx}`}
                  className={`absolute ${item.lane} left-0 flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/90 border border-neutral-200/90 shadow-2xs backdrop-blur-xs`}
                  initial={{ x: "0%", opacity: 0 }}
                  animate={{
                    x: ["10%", "450%"],
                    opacity: [0, 0.95, 0.95, 0],
                  }}
                  transition={{
                    duration: item.duration,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] font-mono text-neutral-700 font-medium whitespace-nowrap">
                    {item.text}
                  </span>
                </motion.div>
              ))
            ) : (
              // Static Fallback for Reduced Motion
              <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-start">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200">
                  AI Voice • 24kHz
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-neutral-100 text-emerald-600 border border-neutral-200">
                  “Confirmed for tomorrow”
                </span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ─── Bottom: CTAs & Trust Badges (Below the AI Agent) ─── */}
      <div className="relative z-20 pb-7 sm:pb-9 lg:pb-11 px-6 text-center max-w-4xl mx-auto w-full pointer-events-auto">
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
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("unos-nav-transition", { detail: { href: "#journey" } }));
              }
              document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 sm:px-8 py-3.5 border border-neutral-300 bg-white/95 text-neutral-800 text-xs sm:text-sm font-medium rounded-full hover:bg-white hover:border-neutral-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 shadow-xs hover:scale-[1.01] active:scale-[0.98] backdrop-blur-sm"
          >
            Explore How It Works
          </a>
        </div>

        {/* Micro Trust Row */}
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
